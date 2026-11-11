var ov=Object.defineProperty;var av=(n,e)=>{for(var t in e)ov(n,t,{get:e[t],enumerable:!0})};var lv=0,ap=1,cv=2;var sc=1,uv=2,es=3,Ni=0,sn=1,Nt=2,on=0,Yr=1,Ui=2,lp=3,cp=4,fa=5,Bn=100,hv=101,fv=102,dv=103,pv=104,go=200,tf=201,mv=202,gv=203,Wu=204,ta=205,rc=206,xv=207,oc=208,vv=209,yv=210,_v=211,Mv=212,bv=213,Sv=214,Xu=0,qu=1,Yu=2,Jr=3,$u=4,Zu=5,Ku=6,ju=7,nf=0,Ev=1,wv=2,As=0,sf=1,rf=2,of=3,da=4,Tv=5,af=6,lf=7,up="attached",Av="detached",Rm=300,Qr=301,eo=302,Ju=303,Qu=304,ac=306,Dn=1e3,ns=1001,na=1002,Jt=1003,cf=1004;var Xr=1005;var zn=1006,Jo=1007;var oi=1008;var Ai=1009,Cm=1010,Im=1011,ia=1012,uf=1013,cr=1014,wi=1015,pn=1016,hf=1017,ff=1018,Rs=1020,Pm=35902,Lm=1021,Dm=1022,kn=1023,Nm=1024,Um=1025,$r=1026,Cs=1027,df=1028,pf=1029,Om=1030,mf=1031;var gf=1033,Tl=33776,Al=33777,Rl=33778,Cl=33779,eh=35840,th=35841,nh=35842,ih=35843,sh=36196,rh=37492,oh=37496,ah=37808,lh=37809,ch=37810,uh=37811,hh=37812,fh=37813,dh=37814,ph=37815,mh=37816,gh=37817,xh=37818,vh=37819,yh=37820,_h=37821,Il=36492,Mh=36494,bh=36495,Fm=36283,Sh=36284,Eh=36285,wh=36286;var to=2300,no=2301,uu=2302,hp=2400,fp=2401,dp=2402,Rv=2500;var Bm=0,lc=1,pa=2,Cv=3200,Iv=3201;var cc=0,Pv=1,ws="",Ft="srgb",An="srgb-linear",uc="linear",Dt="srgb";var Tr=7680;var pp=519,Lv=512,Dv=513,Nv=514,zm=515,Uv=516,Ov=517,Fv=518,Bv=519,Th=35044,Bi=35048;var mp="300 es",is=2e3,Pl=2001,Is=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gp=1234567,Zr=Math.PI/180,io=180/Math.PI;function Ti(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function En(n,e,t){return Math.max(e,Math.min(t,n))}function xf(n,e){return(n%e+e)%e}function zv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function kv(n,e,t){return n!==e?(t-n)/(e-n):0}function Qo(n,e,t){return(1-t)*n+t*e}function Hv(n,e,t,i){return Qo(n,e,1-Math.exp(-t*i))}function Vv(n,e=1){return e-Math.abs(xf(n,e*2)-e)}function Gv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Wv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Xv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function qv(n,e){return n+Math.random()*(e-n)}function Yv(n){return n*(.5-Math.random())}function $v(n){n!==void 0&&(gp=n);let e=gp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zv(n){return n*Zr}function Kv(n){return n*io}function jv(n){return(n&n-1)===0&&n!==0}function Jv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ey(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var km={DEG2RAD:Zr,RAD2DEG:io,generateUUID:Ti,clamp:En,euclideanModulo:xf,mapLinear:zv,inverseLerp:kv,lerp:Qo,damp:Hv,pingpong:Vv,smoothstep:Gv,smootherstep:Wv,randInt:Xv,randFloat:qv,randFloatSpread:Yv,seededRandom:$v,degToRad:Zv,radToDeg:Kv,isPowerOfTwo:jv,ceilPowerOfTwo:Jv,floorPowerOfTwo:Qv,setQuaternionFromProperEuler:ey,normalize:Ot,denormalize:Ei},Ke=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],x=s[0],m=s[3],d=s[6],b=s[1],M=s[4],y=s[7],T=s[2],E=s[5],v=s[8];return r[0]=o*x+a*b+l*T,r[3]=o*m+a*M+l*E,r[6]=o*d+a*y+l*v,r[1]=c*x+u*b+h*T,r[4]=c*m+u*M+h*E,r[7]=c*d+u*y+h*v,r[2]=f*x+p*b+g*T,r[5]=f*m+p*M+g*E,r[8]=f*d+p*y+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=t*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hu.makeScale(e,t)),this}rotate(e){return this.premultiply(hu.makeRotation(-e)),this}translate(e,t){return this.premultiply(hu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},hu=new pt;function Hm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ty(){let n=sa("canvas");return n.style.display="block",n}var xp={};function Ko(n){n in xp||(xp[n]=!0,console.warn(n))}function ny(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function iy(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sy(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var vt={enabled:!0,workingColorSpace:An,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Dt&&(n.r=ss(n.r),n.g=ss(n.g),n.b=ss(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Dt&&(n.r=Kr(n.r),n.g=Kr(n.g),n.b=Kr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ws?uc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ss(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Kr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var vp=[.64,.33,.3,.6,.15,.06],yp=[.2126,.7152,.0722],_p=[.3127,.329],Mp=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bp=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);vt.define({[An]:{primaries:vp,whitePoint:_p,transfer:uc,toXYZ:Mp,fromXYZ:bp,luminanceCoefficients:yp,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:vp,whitePoint:_p,transfer:Dt,toXYZ:Mp,fromXYZ:bp,luminanceCoefficients:yp,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}});var Ar,Ah=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ar===void 0&&(Ar=sa("canvas")),Ar.width=e.width,Ar.height=e.height;let i=Ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=sa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ss(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ss(t[i]/255)*255):t[i]=ss(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ry=0,Ll=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Ti(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fu(s[o].image)):r.push(fu(s[o]))}else r=fu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function fu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ah.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var oy=0,fn=class n extends Is{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ns,s=ns,r=zn,o=oi,a=kn,l=Ai,c=n.DEFAULT_ANISOTROPY,u=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Ti(),this.name="",this.source=new Ll(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dn:e.x=e.x-Math.floor(e.x);break;case ns:e.x=e.x<0?0:1;break;case na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dn:e.y=e.y-Math.floor(e.y);break;case ns:e.y=e.y<0?0:1;break;case na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Rm;fn.DEFAULT_ANISOTROPY=1;var wt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(p+1)/2,T=(d+1)/2,E=(u+f)/4,v=(h+x)/4,w=(g+m)/4;return M>y&&M>T?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=E/i,r=v/i):y>T?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=w/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=v/r,s=w/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rh=class extends Is{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new fn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ll(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zt=class extends Rh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Dl=class extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ch=class extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var an=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==p||u!==g){let m=1-a,d=l*f+c*p+u*g+h*x,b=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let T=Math.sqrt(M),E=Math.atan2(T,d*b);m=Math.sin(m*E)/T,a=Math.sin(a*E)/T}let y=a*b;if(l=l*m+f*y,c=c*m+p*y,u=u*m+g*y,h=h*m+x*y,m===1-a){let T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){let p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return du.copy(this).projectOnVector(e),this.sub(du)}reflect(e){return this.sub(du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},du=new H,Sp=new an,ai=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_i):_i.fromBufferAttribute(r,o),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ya.copy(i.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),$a.subVectors(this.max,zo),Rr.subVectors(e.a,zo),Cr.subVectors(e.b,zo),Ir.subVectors(e.c,zo),ys.subVectors(Cr,Rr),_s.subVectors(Ir,Cr),tr.subVectors(Rr,Ir);let t=[0,-ys.z,ys.y,0,-_s.z,_s.y,0,-tr.z,tr.y,ys.z,0,-ys.x,_s.z,0,-_s.x,tr.z,0,-tr.x,-ys.y,ys.x,0,-_s.y,_s.x,0,-tr.y,tr.x,0];return!pu(t,Rr,Cr,Ir,$a)||(t=[1,0,0,0,1,0,0,0,1],!pu(t,Rr,Cr,Ir,$a))?!1:(Za.crossVectors(ys,_s),t=[Za.x,Za.y,Za.z],pu(t,Rr,Cr,Ir,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},$i=[new H,new H,new H,new H,new H,new H,new H,new H],_i=new H,Ya=new ai,Rr=new H,Cr=new H,Ir=new H,ys=new H,_s=new H,tr=new H,zo=new H,$a=new H,Za=new H,nr=new H;function pu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){nr.fromArray(n,r);let a=s.x*Math.abs(nr.x)+s.y*Math.abs(nr.y)+s.z*Math.abs(nr.z),l=e.dot(nr),c=t.dot(nr),u=i.dot(nr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var ay=new ai,ko=new H,mu=new H,Yn=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ay.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);let t=ko.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ko,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(mu)),this.expandByPoint(ko.copy(e.center).sub(mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zi=new H,gu=new H,Ka=new H,Ms=new H,xu=new H,ja=new H,vu=new H,so=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){gu.copy(e).add(t).multiplyScalar(.5),Ka.copy(t).sub(e).normalize(),Ms.copy(this.origin).sub(gu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ka),a=Ms.dot(this.direction),l=-Ms.dot(Ka),c=Ms.lengthSq(),u=Math.abs(1-o*o),h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(gu).addScaledVector(Ka,f),p}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);let i=Zi.dot(this.direction),s=Zi.dot(Zi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,i,s,r){xu.subVectors(t,e),ja.subVectors(i,e),vu.crossVectors(xu,ja);let o=this.direction.dot(vu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ms.subVectors(this.origin,e);let l=a*this.direction.dot(ja.crossVectors(Ms,ja));if(l<0)return null;let c=a*this.direction.dot(xu.cross(Ms));if(c<0||l+c>o)return null;let u=-a*Ms.dot(vu);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,f,p,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,p,g,x,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,p,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Pr.setFromMatrixColumn(e,0).length(),r=1/Pr.setFromMatrixColumn(e,1).length(),o=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,p=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,p=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,p=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,p=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ly,e,cy)}lookAt(e,t,i){let s=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),bs.crossVectors(i,Xn),bs.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),bs.crossVectors(i,Xn)),bs.normalize(),Ja.crossVectors(Xn,bs),s[0]=bs.x,s[4]=Ja.x,s[8]=Xn.x,s[1]=bs.y,s[5]=Ja.y,s[9]=Xn.y,s[2]=bs.z,s[6]=Ja.z,s[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],d=i[14],b=i[3],M=i[7],y=i[11],T=i[15],E=s[0],v=s[4],w=s[8],_=s[12],S=s[1],R=s[5],D=s[9],O=s[13],I=s[2],k=s[6],q=s[10],Q=s[14],V=s[3],$=s[7],oe=s[11],ie=s[15];return r[0]=o*E+a*S+l*I+c*V,r[4]=o*v+a*R+l*k+c*$,r[8]=o*w+a*D+l*q+c*oe,r[12]=o*_+a*O+l*Q+c*ie,r[1]=u*E+h*S+f*I+p*V,r[5]=u*v+h*R+f*k+p*$,r[9]=u*w+h*D+f*q+p*oe,r[13]=u*_+h*O+f*Q+p*ie,r[2]=g*E+x*S+m*I+d*V,r[6]=g*v+x*R+m*k+d*$,r[10]=g*w+x*D+m*q+d*oe,r[14]=g*_+x*O+m*Q+d*ie,r[3]=b*E+M*S+y*I+T*V,r[7]=b*v+M*R+y*k+T*$,r[11]=b*w+M*D+y*q+T*oe,r[15]=b*_+M*O+y*Q+T*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*p-i*l*p)+x*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+d*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],b=h*m*c-x*f*c+x*l*p-a*m*p-h*l*d+a*f*d,M=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,y=u*x*c-g*h*c+g*a*p-o*x*p-u*a*d+o*h*d,T=g*h*l-u*x*l-g*a*f+o*x*f+u*a*m-o*h*m,E=t*b+i*M+s*y+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let v=1/E;return e[0]=b*v,e[1]=(x*f*r-h*m*r-x*s*p+i*m*p+h*s*d-i*f*d)*v,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*d+i*l*d)*v,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*p-i*l*p)*v,e[4]=M*v,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*v,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*v,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*v,e[8]=y*v,e[9]=(g*h*r-u*x*r-g*i*p+t*x*p+u*i*d-t*h*d)*v,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*d+t*a*d)*v,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*v,e[12]=T*v,e[13]=(u*x*s-g*h*s+g*i*f-t*x*f-u*i*m+t*h*m)*v,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*m-t*a*m)*v,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*v,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,x=o*u,m=o*h,d=a*h,b=l*c,M=l*u,y=l*h,T=i.x,E=i.y,v=i.z;return s[0]=(1-(x+d))*T,s[1]=(p+y)*T,s[2]=(g-M)*T,s[3]=0,s[4]=(p-y)*E,s[5]=(1-(f+d))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(g+M)*v,s[9]=(m-b)*v,s[10]=(1-(f+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Pr.set(s[0],s[1],s[2]).length(),o=Pr.set(s[4],s[5],s[6]).length(),a=Pr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Mi.copy(this);let c=1/r,u=1/o,h=1/a;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=u,Mi.elements[5]*=u,Mi.elements[6]*=u,Mi.elements[8]*=h,Mi.elements[9]*=h,Mi.elements[10]*=h,t.setFromRotationMatrix(Mi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=is){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),p,g;if(a===is)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Pl)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=is){let l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,p=(i+s)*u,g,x;if(a===is)g=(o+r)*h,x=-2*h;else if(a===Pl)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Pr=new H,Mi=new je,ly=new H(0,0,0),cy=new H(1,1,1),bs=new H,Ja=new H,Xn=new H,Ep=new je,wp=new an,Ri=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-En(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(En(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-En(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ep,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wp.setFromEuler(this),this.setFromQuaternion(wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var Nl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},uy=0,Tp=new H,Lr=new an,Ki=new je,Qa=new H,Ho=new H,hy=new H,fy=new an,Ap=new H(1,0,0),Rp=new H(0,1,0),Cp=new H(0,0,1),Ip={type:"added"},dy={type:"removed"},Dr={type:"childadded",child:null},yu={type:"childremoved",child:null},Wt=class n extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new H,t=new Ri,i=new an,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new pt}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(Ap,e)}rotateY(e){return this.rotateOnAxis(Rp,e)}rotateZ(e){return this.rotateOnAxis(Cp,e)}translateOnAxis(e,t){return Tp.copy(e).applyQuaternion(this.quaternion),this.position.add(Tp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ap,e)}translateY(e){return this.translateOnAxis(Rp,e)}translateZ(e){return this.translateOnAxis(Cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qa.copy(e):Qa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Ho,Qa,this.up):Ki.lookAt(Qa,Ho,this.up),this.quaternion.setFromRotationMatrix(Ki),s&&(Ki.extractRotation(s.matrixWorld),Lr.setFromRotationMatrix(Ki),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ip),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dy),yu.child=e,this.dispatchEvent(yu),yu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ip),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,hy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,fy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Wt.DEFAULT_UP=new H(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bi=new H,ji=new H,_u=new H,Ji=new H,Nr=new H,Ur=new H,Pp=new H,Mu=new H,bu=new H,Su=new H,Eu=new wt,wu=new wt,Tu=new wt,ts=class n{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),bi.subVectors(e,t),s.cross(bi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){bi.subVectors(s,t),ji.subVectors(i,t),_u.subVectors(e,t);let o=bi.dot(bi),a=bi.dot(ji),l=bi.dot(_u),c=ji.dot(ji),u=ji.dot(_u),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Eu.setScalar(0),wu.setScalar(0),Tu.setScalar(0),Eu.fromBufferAttribute(e,t),wu.fromBufferAttribute(e,i),Tu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Eu,r.x),o.addScaledVector(wu,r.y),o.addScaledVector(Tu,r.z),o}static isFrontFacing(e,t,i,s){return bi.subVectors(i,t),ji.subVectors(e,t),bi.cross(ji).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),bi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Nr.subVectors(s,i),Ur.subVectors(r,i),Mu.subVectors(e,i);let l=Nr.dot(Mu),c=Ur.dot(Mu);if(l<=0&&c<=0)return t.copy(i);bu.subVectors(e,s);let u=Nr.dot(bu),h=Ur.dot(bu);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Nr,o);Su.subVectors(e,r);let p=Nr.dot(Su),g=Ur.dot(Su);if(g>=0&&p<=g)return t.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ur,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Pp.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Pp,a);let d=1/(m+x+f);return o=x*d,a=f*d,t.copy(i).addScaledVector(Nr,o).addScaledVector(Ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},el={h:0,s:0,l:0};function Au(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=vt.workingColorSpace){if(e=xf(e,1),t=En(t,0,1),i=En(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Au(o,r,e+1/3),this.g=Au(o,r,e),this.b=Au(o,r,e-1/3)}return vt.toWorkingColorSpace(this,s),this}setStyle(e,t=Ft){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let i=Vm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return vt.fromWorkingColorSpace(Sn.copy(this),e),Math.round(En(Sn.r*255,0,255))*65536+Math.round(En(Sn.g*255,0,255))*256+Math.round(En(Sn.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(Sn.copy(this),t);let i=Sn.r,s=Sn.g,r=Sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Ft){vt.fromWorkingColorSpace(Sn.copy(this),e);let t=Sn.r,i=Sn.g,s=Sn.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+t,Ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ss),e.getHSL(el);let i=Qo(Ss.h,el.h,t),s=Qo(Ss.s,el.s,t),r=Qo(Ss.l,el.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new Le;Le.NAMES=Vm;var py=0,wn=class extends Is{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Ti(),this.name="",this.blending=Yr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wu,this.blendDst=ta,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wu&&(i.blendSrc=this.blendSrc),this.blendDst!==ta&&(i.blendDst=this.blendDst),this.blendEquation!==Bn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},zt=class extends wn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var nn=new H,tl=new Ke,yt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Th,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)tl.fromBufferAttribute(this,t),tl.applyMatrix3(e),this.setXY(t,tl.x,tl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Th&&(e.usage=this.usage),e}};var Ul=class extends yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ol=class extends yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var rt=class extends yt{constructor(e,t,i){super(new Float32Array(e),t,i)}},my=0,ri=new je,Ru=new Wt,Or=new H,qn=new ai,Vo=new ai,hn=new H,ht=class n extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hm(e)?Ol:Ul)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new pt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,i){return ri.makeTranslation(e,t,i),this.applyMatrix4(ri),this}scale(e,t,i){return ri.makeScale(e,t,i),this.applyMatrix4(ri),this}lookAt(e){return Ru.lookAt(e),Ru.updateMatrix(),this.applyMatrix4(Ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];qn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let i=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(qn.min,Vo.min),qn.expandByPoint(hn),hn.addVectors(qn.max,Vo.max),qn.expandByPoint(hn)):(qn.expandByPoint(Vo.min),qn.expandByPoint(Vo.max))}qn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)hn.fromBufferAttribute(a,c),l&&(Or.fromBufferAttribute(e,c),hn.add(Or)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<i.count;w++)a[w]=new H,l[w]=new H;let c=new H,u=new H,h=new H,f=new Ke,p=new Ke,g=new Ke,x=new H,m=new H;function d(w,_,S){c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,_),h.fromBufferAttribute(i,S),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,_),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),p.sub(f),g.sub(f);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[w].add(x),a[_].add(x),a[S].add(x),l[w].add(m),l[_].add(m),l[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,_=b.length;w<_;++w){let S=b[w],R=S.start,D=S.count;for(let O=R,I=R+D;O<I;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let M=new H,y=new H,T=new H,E=new H;function v(w){T.fromBufferAttribute(s,w),E.copy(T);let _=a[w];M.copy(_),M.sub(T.multiplyScalar(T.dot(_))).normalize(),y.crossVectors(E,_);let R=y.dot(l[w])<0?-1:1;o.setXYZW(w,M.x,M.y,M.z,R)}for(let w=0,_=b.length;w<_;++w){let S=b[w],R=S.start,D=S.count;for(let O=R,I=R+D;O<I;O+=3)v(e.getX(O+0)),v(e.getX(O+1)),v(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new yt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lp=new je,ir=new so,nl=new Yn,Dp=new H,il=new H,sl=new H,rl=new H,Cu=new H,ol=new H,Np=new H,al=new H,et=class extends Wt{constructor(e=new ht,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ol.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Cu.fromBufferAttribute(h,e),o?ol.addScaledVector(Cu,u):ol.addScaledVector(Cu.sub(t),u))}t.add(ol)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(r),ir.copy(e.ray).recast(e.near),!(nl.containsPoint(ir.origin)===!1&&(ir.intersectSphere(nl,Dp)===null||ir.origin.distanceToSquared(Dp)>(e.far-e.near)**2))&&(Lp.copy(r).invert(),ir.copy(e.ray).applyMatrix4(Lp),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ir)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,T=M;y<T;y+=3){let E=a.getX(y),v=a.getX(y+1),w=a.getX(y+2);s=ll(this,d,e,i,c,u,h,E,v,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let b=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=ll(this,o,e,i,c,u,h,b,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,T=M;y<T;y+=3){let E=y,v=y+1,w=y+2;s=ll(this,d,e,i,c,u,h,E,v,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let b=m,M=m+1,y=m+2;s=ll(this,o,e,i,c,u,h,b,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function gy(n,e,t,i,s,r,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ni,a),l===null)return null;al.copy(a),al.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(al);return c<t.near||c>t.far?null:{distance:c,point:al.clone(),object:n}}function ll(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,il),n.getVertexPosition(l,sl),n.getVertexPosition(c,rl);let u=gy(n,e,t,i,il,sl,rl,Np);if(u){let h=new H;ts.getBarycoord(Np,il,sl,rl,h),s&&(u.uv=ts.getInterpolatedAttribute(s,a,l,c,h,new Ke)),r&&(u.uv1=ts.getInterpolatedAttribute(r,a,l,c,h,new Ke)),o&&(u.normal=ts.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new H,materialIndex:0};ts.getNormal(il,sl,rl,f.normal),u.face=f,u.barycoord=h}return u}var dn=class n extends ht{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(h,2));function g(x,m,d,b,M,y,T,E,v,w,_){let S=y/v,R=T/w,D=y/2,O=T/2,I=E/2,k=v+1,q=w+1,Q=0,V=0,$=new H;for(let oe=0;oe<q;oe++){let ie=oe*R-O;for(let ye=0;ye<k;ye++){let Se=ye*S-D;$[x]=Se*b,$[m]=ie*M,$[d]=I,c.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[d]=E>0?1:-1,u.push($.x,$.y,$.z),h.push(ye/v),h.push(1-oe/w),Q+=1}}for(let oe=0;oe<w;oe++)for(let ie=0;ie<v;ie++){let ye=f+ie+k*oe,Se=f+ie+k*(oe+1),U=f+(ie+1)+k*(oe+1),X=f+(ie+1)+k*oe;l.push(ye,Se,X),l.push(Se,U,X),V+=6}a.addGroup(p,V,_),p+=V,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ro(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ln(n){let e={};for(let t=0;t<n.length;t++){let i=ro(n[t]);for(let s in i)e[s]=i[s]}return e}function xy(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Gm(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}var Rn={clone:ro,merge:Ln},vy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bt=class extends wn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vy,this.fragmentShader=yy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=xy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Fl=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=is}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Es=new H,Up=new Ke,Op=new Ke,jt=class extends Fl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return io*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Es.x,Es.y).multiplyScalar(-e/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Es.x,Es.y).multiplyScalar(-e/Es.z)}getViewSize(e,t){return this.getViewBounds(e,Up,Op),t.subVectors(Op,Up)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fr=-90,Br=1,Ih=class extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(Fr,Br,e,t);s.layers=this.layers,this.add(s);let r=new jt(Fr,Br,e,t);r.layers=this.layers,this.add(r);let o=new jt(Fr,Br,e,t);o.layers=this.layers,this.add(o);let a=new jt(Fr,Br,e,t);a.layers=this.layers,this.add(a);let l=new jt(Fr,Br,e,t);l.layers=this.layers,this.add(l);let c=new jt(Fr,Br,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===is)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Bl=class extends fn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Qr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ph=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Bl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dn(5,5,5),r=new bt({name:"CubemapFromEquirect",uniforms:ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:on});r.uniforms.tEquirect.value=t;let o=new et(s,r),a=t.minFilter;return t.minFilter===oi&&(t.minFilter=zn),new Ih(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Iu=new H,_y=new H,My=new pt,Si=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Iu.subVectors(i,t).cross(_y.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Iu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||My.getNormalMatrix(e),s=this.coplanarPoint(Iu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},sr=new Yn,cl=new H,ra=class{constructor(e=new Si,t=new Si,i=new Si,s=new Si,r=new Si,o=new Si){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=is){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],b=s[13],M=s[14],y=s[15];if(i[0].setComponents(l-r,f-c,m-p,y-d).normalize(),i[1].setComponents(l+r,f+c,m+p,y+d).normalize(),i[2].setComponents(l+o,f+u,m+g,y+b).normalize(),i[3].setComponents(l-o,f-u,m-g,y-b).normalize(),i[4].setComponents(l-a,f-h,m-x,y-M).normalize(),t===is)i[5].setComponents(l+a,f+h,m+x,y+M).normalize();else if(t===Pl)i[5].setComponents(a,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(cl.x=s.normal.x>0?e.max.x:e.min.x,cl.y=s.normal.y>0?e.max.y:e.min.y,cl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function by(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let x=h[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Hn=class n extends ht{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){let b=d*f-o;for(let M=0;M<c;M++){let y=M*h-r;g.push(y,-b,0),x.push(0,0,1),m.push(M/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){let M=b+c*d,y=b+c*(d+1),T=b+1+c*(d+1),E=b+1+c*d;p.push(M,y,E),p.push(y,T,E)}this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ey=`#ifdef USE_ALPHAHASH
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
#endif`,wy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ty=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ay=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ry=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cy=`#ifdef USE_AOMAP
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
#endif`,Iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Py=`#ifdef USE_BATCHING
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
#endif`,Ly=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ny=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Oy=`#ifdef USE_IRIDESCENCE
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
#endif`,Fy=`#ifdef USE_BUMPMAP
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
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qy=`#define PI 3.141592653589793
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
} // validated`,Yy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$y=`vec3 transformedNormal = objectNormal;
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
#endif`,Zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ky=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qy="gl_FragColor = linearToOutputTexel( gl_FragColor );",e_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,t_=`#ifdef USE_ENVMAP
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
#endif`,n_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i_=`#ifdef USE_ENVMAP
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
#endif`,s_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r_=`#ifdef USE_ENVMAP
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
#endif`,o_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u_=`#ifdef USE_GRADIENTMAP
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
}`,h_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p_=`uniform bool receiveShadow;
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
#endif`,m_=`#ifdef USE_ENVMAP
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
#endif`,g_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,__=`PhysicalMaterial material;
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
#endif`,M_=`struct PhysicalMaterial {
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
}`,b_=`
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
#endif`,S_=`#if defined( RE_IndirectDiffuse )
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
#endif`,E_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,L_=`#if defined( USE_POINTS_UV )
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
#endif`,D_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B_=`#ifdef USE_MORPHTARGETS
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
#endif`,z_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,H_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,X_=`#ifdef USE_NORMALMAP
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
#endif`,q_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,J_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a1=`float getShadowMask() {
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
}`,l1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c1=`#ifdef USE_SKINNING
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
#endif`,u1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h1=`#ifdef USE_SKINNING
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
#endif`,f1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g1=`#ifdef USE_TRANSMISSION
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
#endif`,x1=`#ifdef USE_TRANSMISSION
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
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,b1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S1=`uniform sampler2D t2D;
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`#include <common>
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
}`,C1=`#if DEPTH_PACKING == 3200
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
}`,I1=`#define DISTANCE
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
}`,P1=`#define DISTANCE
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
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`uniform float scale;
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
}`,U1=`uniform vec3 diffuse;
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
}`,O1=`#include <common>
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
}`,F1=`uniform vec3 diffuse;
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
}`,B1=`#define LAMBERT
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
}`,z1=`#define LAMBERT
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
}`,k1=`#define MATCAP
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
}`,H1=`#define MATCAP
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
}`,V1=`#define NORMAL
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
}`,G1=`#define NORMAL
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
}`,W1=`#define PHONG
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
}`,X1=`#define PHONG
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
}`,q1=`#define STANDARD
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
}`,Y1=`#define STANDARD
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
}`,$1=`#define TOON
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
}`,Z1=`#define TOON
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
}`,K1=`uniform float size;
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
}`,j1=`uniform vec3 diffuse;
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
}`,J1=`#include <common>
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
}`,Q1=`uniform vec3 color;
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
}`,eM=`uniform float rotation;
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
}`,tM=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:Sy,alphahash_pars_fragment:Ey,alphamap_fragment:wy,alphamap_pars_fragment:Ty,alphatest_fragment:Ay,alphatest_pars_fragment:Ry,aomap_fragment:Cy,aomap_pars_fragment:Iy,batching_pars_vertex:Py,batching_vertex:Ly,begin_vertex:Dy,beginnormal_vertex:Ny,bsdfs:Uy,iridescence_fragment:Oy,bumpmap_pars_fragment:Fy,clipping_planes_fragment:By,clipping_planes_pars_fragment:zy,clipping_planes_pars_vertex:ky,clipping_planes_vertex:Hy,color_fragment:Vy,color_pars_fragment:Gy,color_pars_vertex:Wy,color_vertex:Xy,common:qy,cube_uv_reflection_fragment:Yy,defaultnormal_vertex:$y,displacementmap_pars_vertex:Zy,displacementmap_vertex:Ky,emissivemap_fragment:jy,emissivemap_pars_fragment:Jy,colorspace_fragment:Qy,colorspace_pars_fragment:e_,envmap_fragment:t_,envmap_common_pars_fragment:n_,envmap_pars_fragment:i_,envmap_pars_vertex:s_,envmap_physical_pars_fragment:m_,envmap_vertex:r_,fog_vertex:o_,fog_pars_vertex:a_,fog_fragment:l_,fog_pars_fragment:c_,gradientmap_pars_fragment:u_,lightmap_pars_fragment:h_,lights_lambert_fragment:f_,lights_lambert_pars_fragment:d_,lights_pars_begin:p_,lights_toon_fragment:g_,lights_toon_pars_fragment:x_,lights_phong_fragment:v_,lights_phong_pars_fragment:y_,lights_physical_fragment:__,lights_physical_pars_fragment:M_,lights_fragment_begin:b_,lights_fragment_maps:S_,lights_fragment_end:E_,logdepthbuf_fragment:w_,logdepthbuf_pars_fragment:T_,logdepthbuf_pars_vertex:A_,logdepthbuf_vertex:R_,map_fragment:C_,map_pars_fragment:I_,map_particle_fragment:P_,map_particle_pars_fragment:L_,metalnessmap_fragment:D_,metalnessmap_pars_fragment:N_,morphinstance_vertex:U_,morphcolor_vertex:O_,morphnormal_vertex:F_,morphtarget_pars_vertex:B_,morphtarget_vertex:z_,normal_fragment_begin:k_,normal_fragment_maps:H_,normal_pars_fragment:V_,normal_pars_vertex:G_,normal_vertex:W_,normalmap_pars_fragment:X_,clearcoat_normal_fragment_begin:q_,clearcoat_normal_fragment_maps:Y_,clearcoat_pars_fragment:$_,iridescence_pars_fragment:Z_,opaque_fragment:K_,packing:j_,premultiplied_alpha_fragment:J_,project_vertex:Q_,dithering_fragment:e1,dithering_pars_fragment:t1,roughnessmap_fragment:n1,roughnessmap_pars_fragment:i1,shadowmap_pars_fragment:s1,shadowmap_pars_vertex:r1,shadowmap_vertex:o1,shadowmask_pars_fragment:a1,skinbase_vertex:l1,skinning_pars_vertex:c1,skinning_vertex:u1,skinnormal_vertex:h1,specularmap_fragment:f1,specularmap_pars_fragment:d1,tonemapping_fragment:p1,tonemapping_pars_fragment:m1,transmission_fragment:g1,transmission_pars_fragment:x1,uv_pars_fragment:v1,uv_pars_vertex:y1,uv_vertex:_1,worldpos_vertex:M1,background_vert:b1,background_frag:S1,backgroundCube_vert:E1,backgroundCube_frag:w1,cube_vert:T1,cube_frag:A1,depth_vert:R1,depth_frag:C1,distanceRGBA_vert:I1,distanceRGBA_frag:P1,equirect_vert:L1,equirect_frag:D1,linedashed_vert:N1,linedashed_frag:U1,meshbasic_vert:O1,meshbasic_frag:F1,meshlambert_vert:B1,meshlambert_frag:z1,meshmatcap_vert:k1,meshmatcap_frag:H1,meshnormal_vert:V1,meshnormal_frag:G1,meshphong_vert:W1,meshphong_frag:X1,meshphysical_vert:q1,meshphysical_frag:Y1,meshtoon_vert:$1,meshtoon_frag:Z1,points_vert:K1,points_frag:j1,shadow_vert:J1,shadow_frag:Q1,sprite_vert:eM,sprite_frag:tM},Ye={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Di={basic:{uniforms:Ln([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Ln([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Le(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Ln([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Ln([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Ln([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new Le(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Ln([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Ln([Ye.points,Ye.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Ln([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Ln([Ye.common,Ye.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Ln([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Ln([Ye.sprite,Ye.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Ln([Ye.common,Ye.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Ln([Ye.lights,Ye.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Di.physical={uniforms:Ln([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};var ul={r:0,b:0,g:0},rr=new Ri,nM=new je;function iM(n,e,t,i,s,r,o){let a=new Le(0),l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function x(b){let M=!1,y=g(b);y===null?d(a,l):y&&y.isColor&&(d(y,1),M=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){let y=g(M);y&&(y.isCubeTexture||y.mapping===ac)?(u===void 0&&(u=new et(new dn(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:ro(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),rr.copy(M.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nM.makeRotationFromEuler(rr)),u.material.toneMapped=vt.getTransfer(y.colorSpace)!==Dt,(h!==y||f!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new et(new Hn(2,2),new bt({name:"BackgroundMaterial",uniforms:ro(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=vt.getTransfer(y.colorSpace)!==Dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,M){b.getRGB(ul,Gm(n)),i.buffers.color.setClear(ul.r,ul.g,ul.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(a,l)},render:x,addToRenderList:m}}function sM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(S,R,D,O,I){let k=!1,q=h(O,D,R);r!==q&&(r=q,c(r.object)),k=p(S,O,D,I),k&&g(S,O,D,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(S,R,D,O),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,R,D){let O=D.wireframe===!0,I=i[S.id];I===void 0&&(I={},i[S.id]=I);let k=I[R.id];k===void 0&&(k={},I[R.id]=k);let q=k[O];return q===void 0&&(q=f(l()),k[O]=q),q}function f(S){let R=[],D=[],O=[];for(let I=0;I<t;I++)R[I]=0,D[I]=0,O[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,R,D,O){let I=r.attributes,k=R.attributes,q=0,Q=D.getAttributes();for(let V in Q)if(Q[V].location>=0){let oe=I[V],ie=k[V];if(ie===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),oe===void 0||oe.attribute!==ie||ie&&oe.data!==ie.data)return!0;q++}return r.attributesNum!==q||r.index!==O}function g(S,R,D,O){let I={},k=R.attributes,q=0,Q=D.getAttributes();for(let V in Q)if(Q[V].location>=0){let oe=k[V];oe===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor));let ie={};ie.attribute=oe,oe&&oe.data&&(ie.data=oe.data),I[V]=ie,q++}r.attributes=I,r.attributesNum=q,r.index=O}function x(){let S=r.newAttributes;for(let R=0,D=S.length;R<D;R++)S[R]=0}function m(S){d(S,0)}function d(S,R){let D=r.newAttributes,O=r.enabledAttributes,I=r.attributeDivisors;D[S]=1,O[S]===0&&(n.enableVertexAttribArray(S),O[S]=1),I[S]!==R&&(n.vertexAttribDivisor(S,R),I[S]=R)}function b(){let S=r.newAttributes,R=r.enabledAttributes;for(let D=0,O=R.length;D<O;D++)R[D]!==S[D]&&(n.disableVertexAttribArray(D),R[D]=0)}function M(S,R,D,O,I,k,q){q===!0?n.vertexAttribIPointer(S,R,D,I,k):n.vertexAttribPointer(S,R,D,O,I,k)}function y(S,R,D,O){x();let I=O.attributes,k=D.getAttributes(),q=R.defaultAttributeValues;for(let Q in k){let V=k[Q];if(V.location>=0){let $=I[Q];if($===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){let oe=$.normalized,ie=$.itemSize,ye=e.get($);if(ye===void 0)continue;let Se=ye.buffer,U=ye.type,X=ye.bytesPerElement,W=U===n.INT||U===n.UNSIGNED_INT||$.gpuType===uf;if($.isInterleavedBufferAttribute){let Y=$.data,z=Y.stride,G=$.offset;if(Y.isInstancedInterleavedBuffer){for(let de=0;de<V.locationSize;de++)d(V.location+de,Y.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let de=0;de<V.locationSize;de++)m(V.location+de);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let de=0;de<V.locationSize;de++)M(V.location+de,ie/V.locationSize,U,oe,z*X,(G+ie/V.locationSize*de)*X,W)}else{if($.isInstancedBufferAttribute){for(let Y=0;Y<V.locationSize;Y++)d(V.location+Y,$.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Y=0;Y<V.locationSize;Y++)m(V.location+Y);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let Y=0;Y<V.locationSize;Y++)M(V.location+Y,ie/V.locationSize,U,oe,ie*X,ie/V.locationSize*Y*X,W)}}else if(q!==void 0){let oe=q[Q];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(V.location,oe);break;case 3:n.vertexAttrib3fv(V.location,oe);break;case 4:n.vertexAttrib4fv(V.location,oe);break;default:n.vertexAttrib1fv(V.location,oe)}}}}b()}function T(){w();for(let S in i){let R=i[S];for(let D in R){let O=R[D];for(let I in O)u(O[I].object),delete O[I];delete R[D]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;let R=i[S.id];for(let D in R){let O=R[D];for(let I in O)u(O[I].object),delete O[I];delete R[D]}delete i[S.id]}function v(S){for(let R in i){let D=i[R];if(D[S.id]===void 0)continue;let O=D[S.id];for(let I in O)u(O[I].object),delete O[I];delete D[S.id]}}function w(){_(),o=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:_,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function rM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,i,1)}function l(c,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function oM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==kn&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let w=v===pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Ai&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==wi&&!w)}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:T,maxSamples:E}}function aM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Si,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let b=r?0:i,M=b*4,y=d.clippingState||null;l.value=y,y=u(g,f,M,p);for(let T=0;T!==M;++T)y[T]=t[T];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let d=p+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,y=p;M!==x;++M,y+=4)o.copy(h[M]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function lM(n){let e=new WeakMap;function t(o,a){return a===Ju?o.mapping=Qr:a===Qu&&(o.mapping=eo),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ju||a===Qu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ph(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ps=class extends Fl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qr=4,Fp=[.125,.215,.35,.446,.526,.582],lr=20,Pu=new Ps,Bp=new Le,Lu=null,Du=0,Nu=0,Uu=!1,ar=(1+Math.sqrt(5))/2,zr=1/ar,zp=[new H(-ar,zr,0),new H(ar,zr,0),new H(-zr,0,ar),new H(zr,0,ar),new H(0,ar,-zr),new H(0,ar,zr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],oo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Lu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lu,Du,Nu),this._renderer.xr.enabled=Uu,e.scissorTest=!1,hl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:pn,format:kn,colorSpace:An,depthBuffer:!1},s=kp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kp(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cM(r)),this._blurMaterial=uM(r,e,t)}return s}_compileMaterial(e){let t=new et(this._lodPlanes[0],e);this._renderer.compile(t,Pu)}_sceneToCubeUV(e,t,i,s){let a=new jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Bp),u.toneMapping=As,u.autoClear=!1;let p=new zt({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new et(new dn,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Bp),x=!0);for(let d=0;d<6;d++){let b=d%3;b===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):b===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let M=this._cubeSize;hl(s,b*M,d>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Qr||e.mapping===eo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;hl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Pu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zp[(s-r-1)%zp.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new et(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*lr-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):lr;m>lr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lr}`);let d=[],b=0;for(let v=0;v<lr;++v){let w=v/x,_=Math.exp(-w*w/2);d.push(_),v===0?b+=_:v<m&&(b+=2*_)}for(let v=0;v<d.length;v++)d[v]=d[v]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;let y=this._sizeLods[s],T=3*y*(s>M-qr?s-M+qr:0),E=4*(this._cubeSize-y);hl(t,T,E,3*y,2*y),l.setRenderTarget(t),l.render(h,Pu)}};function cM(n){let e=[],t=[],i=[],s=n,r=n-qr+1+Fp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-qr?l=Fp[o-n+qr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,d=1,b=new Float32Array(x*g*p),M=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let E=0;E<p;E++){let v=E%3*2/3-1,w=E>2?0:-1,_=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];b.set(_,x*g*E),M.set(f,m*g*E);let S=[E,E,E,E,E,E];y.set(S,d*g*E)}let T=new ht;T.setAttribute("position",new yt(b,x)),T.setAttribute("uv",new yt(M,m)),T.setAttribute("faceIndex",new yt(y,d)),e.push(T),s>qr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function kp(n,e,t){let i=new Zt(n,e,t);return i.texture.mapping=ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function uM(n,e,t){let i=new Float32Array(lr),s=new H(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vf(),fragmentShader:`

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
		`,blending:on,depthTest:!1,depthWrite:!1})}function Hp(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vf(),fragmentShader:`

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
		`,blending:on,depthTest:!1,depthWrite:!1})}function Vp(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function vf(){return`

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
	`}function hM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ju||l===Qu,u=l===Qr||l===eo;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new oo(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new oo(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function fM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ko("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function dM(n,e,t,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let x=p[g];for(let m=0,d=x.length;m<d;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){let f=[],p=h.index,g=h.attributes.position,x=0;if(p!==null){let b=p.array;x=p.version;for(let M=0,y=b.length;M<y;M+=3){let T=b[M+0],E=b[M+1],v=b[M+2];f.push(T,E,E,v,v,T)}}else if(g!==void 0){let b=g.array;x=g.version;for(let M=0,y=b.length/3-1;M<y;M+=3){let T=M+0,E=M+1,v=M+2;f.push(T,E,E,v,v,T)}}else return;let m=new(Hm(f)?Ol:Ul)(f,1);m.version=x;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function pM(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function h(f,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,x,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b]*x[b];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function mM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function gM(n,e,t){let i=new WeakMap,s=new wt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let _=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],M=0;p===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*T*4*h),v=new Dl(E,y,T,h);v.type=wi,v.needsUpdate=!0;let w=M*4;for(let S=0;S<h;S++){let R=m[S],D=d[S],O=b[S],I=y*T*4*S;for(let k=0;k<R.count;k++){let q=k*w;p===!0&&(s.fromBufferAttribute(R,k),E[I+q+0]=s.x,E[I+q+1]=s.y,E[I+q+2]=s.z,E[I+q+3]=0),g===!0&&(s.fromBufferAttribute(D,k),E[I+q+4]=s.x,E[I+q+5]=s.y,E[I+q+6]=s.z,E[I+q+7]=0),x===!0&&(s.fromBufferAttribute(O,k),E[I+q+8]=s.x,E[I+q+9]=s.y,E[I+q+10]=s.z,E[I+q+11]=O.itemSize===4?s.w:1)}}f={count:h,texture:v,size:new Ke(y,T)},i.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function xM(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var ao=class extends fn{constructor(e,t,i,s,r,o,a,l,c,u=$r){if(u!==$r&&u!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$r&&(i=cr),i===void 0&&u===Cs&&(i=Rs),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xm=new fn,Gp=new ao(1,1),qm=new Dl,Ym=new Ch,$m=new Bl,Wp=[],Xp=[],qp=new Float32Array(16),Yp=new Float32Array(9),$p=new Float32Array(4);function xo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Wp[s];if(r===void 0&&(r=new Float32Array(s),Wp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function ln(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function cn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hc(n,e){let t=Xp[e];t===void 0&&(t=new Int32Array(e),Xp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2fv(this.addr,e),cn(t,e)}}function _M(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;n.uniform3fv(this.addr,e),cn(t,e)}}function MM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4fv(this.addr,e),cn(t,e)}}function bM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;$p.set(i),n.uniformMatrix2fv(this.addr,!1,$p),cn(t,i)}}function SM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Yp.set(i),n.uniformMatrix3fv(this.addr,!1,Yp),cn(t,i)}}function EM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;qp.set(i),n.uniformMatrix4fv(this.addr,!1,qp),cn(t,i)}}function wM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function TM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2iv(this.addr,e),cn(t,e)}}function AM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3iv(this.addr,e),cn(t,e)}}function RM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4iv(this.addr,e),cn(t,e)}}function CM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function IM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2uiv(this.addr,e),cn(t,e)}}function PM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3uiv(this.addr,e),cn(t,e)}}function LM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4uiv(this.addr,e),cn(t,e)}}function DM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Gp.compareFunction=zm,r=Gp):r=Xm,t.setTexture2D(e||r,s)}function NM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ym,s)}function UM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||$m,s)}function OM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||qm,s)}function FM(n){switch(n){case 5126:return vM;case 35664:return yM;case 35665:return _M;case 35666:return MM;case 35674:return bM;case 35675:return SM;case 35676:return EM;case 5124:case 35670:return wM;case 35667:case 35671:return TM;case 35668:case 35672:return AM;case 35669:case 35673:return RM;case 5125:return CM;case 36294:return IM;case 36295:return PM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return DM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return UM;case 36289:case 36303:case 36311:case 36292:return OM}}function BM(n,e){n.uniform1fv(this.addr,e)}function zM(n,e){let t=xo(e,this.size,2);n.uniform2fv(this.addr,t)}function kM(n,e){let t=xo(e,this.size,3);n.uniform3fv(this.addr,t)}function HM(n,e){let t=xo(e,this.size,4);n.uniform4fv(this.addr,t)}function VM(n,e){let t=xo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function GM(n,e){let t=xo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function WM(n,e){let t=xo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function XM(n,e){n.uniform1iv(this.addr,e)}function qM(n,e){n.uniform2iv(this.addr,e)}function YM(n,e){n.uniform3iv(this.addr,e)}function $M(n,e){n.uniform4iv(this.addr,e)}function ZM(n,e){n.uniform1uiv(this.addr,e)}function KM(n,e){n.uniform2uiv(this.addr,e)}function jM(n,e){n.uniform3uiv(this.addr,e)}function JM(n,e){n.uniform4uiv(this.addr,e)}function QM(n,e,t){let i=this.cache,s=e.length,r=hc(t,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Xm,r[o])}function eb(n,e,t){let i=this.cache,s=e.length,r=hc(t,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ym,r[o])}function tb(n,e,t){let i=this.cache,s=e.length,r=hc(t,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||$m,r[o])}function nb(n,e,t){let i=this.cache,s=e.length,r=hc(t,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||qm,r[o])}function ib(n){switch(n){case 5126:return BM;case 35664:return zM;case 35665:return kM;case 35666:return HM;case 35674:return VM;case 35675:return GM;case 35676:return WM;case 5124:case 35670:return XM;case 35667:case 35671:return qM;case 35668:case 35672:return YM;case 35669:case 35673:return $M;case 5125:return ZM;case 36294:return KM;case 36295:return jM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return QM;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return nb}}var Lh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=FM(t.type)}},Dh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ib(t.type)}},Nh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Ou=/(\w+)(\])?(\[|\.)?/g;function Zp(n,e){n.seq.push(e),n.map[e.id]=e}function sb(n,e,t){let i=n.name,s=i.length;for(Ou.lastIndex=0;;){let r=Ou.exec(i),o=Ou.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Zp(t,c===void 0?new Lh(a,n,e):new Dh(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Nh(a),Zp(t,h)),t=h}}}var jr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);sb(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Kp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var rb=37297,ob=0;function ab(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var jp=new pt;function lb(n){vt._getMatrix(jp,vt.workingColorSpace,n);let e=`mat3( ${jp.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(n)){case uc:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Jp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ab(n.getShaderSource(e),o)}else return s}function cb(n,e){let t=lb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ub(n,e){let t;switch(e){case sf:t="Linear";break;case rf:t="Reinhard";break;case of:t="Cineon";break;case da:t="ACESFilmic";break;case af:t="AgX";break;case lf:t="Neutral";break;case Tv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fl=new H;function hb(){vt.getLuminanceCoefficients(fl);let n=fl.x.toFixed(4),e=fl.y.toFixed(4),t=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function db(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function jo(n){return n!==""}function Qp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function em(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(n){return n.replace(mb,xb)}var gb=new Map;function xb(n,e){let t=mt[e];if(t===void 0){let i=gb.get(e);if(i!==void 0)t=mt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Uh(t)}var vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tm(n){return n.replace(vb,yb)}function yb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nm(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function _b(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===uv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===es&&(e="SHADOWMAP_TYPE_VSM"),e}function Mb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qr:case eo:e="ENVMAP_TYPE_CUBE";break;case ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bb(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===eo&&(e="ENVMAP_MODE_REFRACTION"),e}function Sb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case nf:e="ENVMAP_BLENDING_MULTIPLY";break;case Ev:e="ENVMAP_BLENDING_MIX";break;case wv:e="ENVMAP_BLENDING_ADD";break}return e}function Eb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function wb(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=_b(t),c=Mb(t),u=bb(t),h=Sb(t),f=Eb(t),p=fb(t),g=db(r),x=s.createProgram(),m,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jo).join(`
`),d.length>0&&(d+=`
`)):(m=[nm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),d=[nm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==As?"#define TONE_MAPPING":"",t.toneMapping!==As?mt.tonemapping_pars_fragment:"",t.toneMapping!==As?ub("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,cb("linearToOutputTexel",t.outputColorSpace),hb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),o=Uh(o),o=Qp(o,t),o=em(o,t),a=Uh(a),a=Qp(a,t),a=em(a,t),o=tm(o),a=tm(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===mp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=b+m+o,y=b+d+a,T=Kp(s,s.VERTEX_SHADER,M),E=Kp(s,s.FRAGMENT_SHADER,y);s.attachShader(x,T),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function v(R){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(x).trim(),O=s.getShaderInfoLog(T).trim(),I=s.getShaderInfoLog(E).trim(),k=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,T,E);else{let Q=Jp(s,T,"vertex"),V=Jp(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+Q+`
`+V)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||I==="")&&(q=!1);q&&(R.diagnostics={runnable:k,programLog:D,vertexShader:{log:O,prefix:m},fragmentShader:{log:I,prefix:d}})}s.deleteShader(T),s.deleteShader(E),w=new jr(s,x),_=pb(s,x)}let w;this.getUniforms=function(){return w===void 0&&v(this),w};let _;this.getAttributes=function(){return _===void 0&&v(this),_};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,rb)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ob++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=E,this}var Tb=0,Oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Fh(e),t.set(e,i)),i}},Fh=class{constructor(e){this.id=Tb++,this.code=e,this.usedTimes=0}};function Ab(n,e,t,i,s,r,o){let a=new Nl,l=new Oh,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,S,R,D,O){let I=D.fog,k=O.geometry,q=_.isMeshStandardMaterial?D.environment:null,Q=(_.isMeshStandardMaterial?t:e).get(_.envMap||q),V=Q&&Q.mapping===ac?Q.image.height:null,$=g[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let oe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ie=oe!==void 0?oe.length:0,ye=0;k.morphAttributes.position!==void 0&&(ye=1),k.morphAttributes.normal!==void 0&&(ye=2),k.morphAttributes.color!==void 0&&(ye=3);let Se,U,X,W;if($){let Ie=Di[$];Se=Ie.vertexShader,U=Ie.fragmentShader}else Se=_.vertexShader,U=_.fragmentShader,l.update(_),X=l.getVertexShaderID(_),W=l.getFragmentShaderID(_);let Y=n.getRenderTarget(),z=n.state.buffers.depth.getReversed(),G=O.isInstancedMesh===!0,de=O.isBatchedMesh===!0,xe=!!_.map,Ne=!!_.matcap,He=!!Q,Z=!!_.aoMap,ae=!!_.lightMap,Ee=!!_.bumpMap,we=!!_.normalMap,Te=!!_.displacementMap,De=!!_.emissiveMap,me=!!_.metalnessMap,P=!!_.roughnessMap,A=_.anisotropy>0,ee=_.clearcoat>0,le=_.dispersion>0,ge=_.iridescence>0,fe=_.sheen>0,Oe=_.transmission>0,Re=A&&!!_.anisotropyMap,Ue=ee&&!!_.clearcoatMap,Xe=ee&&!!_.clearcoatNormalMap,Ae=ee&&!!_.clearcoatRoughnessMap,ze=ge&&!!_.iridescenceMap,$e=ge&&!!_.iridescenceThicknessMap,Qe=fe&&!!_.sheenColorMap,N=fe&&!!_.sheenRoughnessMap,te=!!_.specularMap,j=!!_.specularColorMap,F=!!_.specularIntensityMap,C=Oe&&!!_.transmissionMap,J=Oe&&!!_.thicknessMap,B=!!_.gradientMap,ne=!!_.alphaMap,K=_.alphaTest>0,he=!!_.alphaHash,Ce=!!_.extensions,ke=As;_.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ke=n.toneMapping);let Fe={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:Se,fragmentShader:U,defines:_.defines,customVertexShaderID:X,customFragmentShaderID:W,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:de,batchingColor:de&&O._colorsTexture!==null,instancing:G,instancingColor:G&&O.instanceColor!==null,instancingMorph:G&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Y===null?n.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:An,alphaToCoverage:!!_.alphaToCoverage,map:xe,matcap:Ne,envMap:He,envMapMode:He&&Q.mapping,envMapCubeUVHeight:V,aoMap:Z,lightMap:ae,bumpMap:Ee,normalMap:we,displacementMap:f&&Te,emissiveMap:De,normalMapObjectSpace:we&&_.normalMapType===Pv,normalMapTangentSpace:we&&_.normalMapType===cc,metalnessMap:me,roughnessMap:P,anisotropy:A,anisotropyMap:Re,clearcoat:ee,clearcoatMap:Ue,clearcoatNormalMap:Xe,clearcoatRoughnessMap:Ae,dispersion:le,iridescence:ge,iridescenceMap:ze,iridescenceThicknessMap:$e,sheen:fe,sheenColorMap:Qe,sheenRoughnessMap:N,specularMap:te,specularColorMap:j,specularIntensityMap:F,transmission:Oe,transmissionMap:C,thicknessMap:J,gradientMap:B,opaque:_.transparent===!1&&_.blending===Yr&&_.alphaToCoverage===!1,alphaMap:ne,alphaTest:K,alphaHash:he,combine:_.combine,mapUv:xe&&x(_.map.channel),aoMapUv:Z&&x(_.aoMap.channel),lightMapUv:ae&&x(_.lightMap.channel),bumpMapUv:Ee&&x(_.bumpMap.channel),normalMapUv:we&&x(_.normalMap.channel),displacementMapUv:Te&&x(_.displacementMap.channel),emissiveMapUv:De&&x(_.emissiveMap.channel),metalnessMapUv:me&&x(_.metalnessMap.channel),roughnessMapUv:P&&x(_.roughnessMap.channel),anisotropyMapUv:Re&&x(_.anisotropyMap.channel),clearcoatMapUv:Ue&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:N&&x(_.sheenRoughnessMap.channel),specularMapUv:te&&x(_.specularMap.channel),specularColorMapUv:j&&x(_.specularColorMap.channel),specularIntensityMapUv:F&&x(_.specularIntensityMap.channel),transmissionMapUv:C&&x(_.transmissionMap.channel),thicknessMapUv:J&&x(_.thicknessMap.channel),alphaMapUv:ne&&x(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(we||A),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(xe||ne),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:z,skinning:O.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:xe&&_.map.isVideoTexture===!0&&vt.getTransfer(_.map.colorSpace)===Dt,decodeVideoTextureEmissive:De&&_.emissiveMap.isVideoTexture===!0&&vt.getTransfer(_.emissiveMap.colorSpace)===Dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Nt,flipSided:_.side===sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ce&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&_.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function d(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)S.push(R),S.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(b(S,_),M(S,_),S.push(n.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function b(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function M(_,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),_.push(a.mask)}function y(_){let S=g[_.type],R;if(S){let D=Di[S];R=Rn.clone(D.uniforms)}else R=_.uniforms;return R}function T(_,S){let R;for(let D=0,O=u.length;D<O;D++){let I=u[D];if(I.cacheKey===S){R=I,++R.usedTimes;break}}return R===void 0&&(R=new wb(n,S,_,r),u.push(R)),R}function E(_){if(--_.usedTimes===0){let S=u.indexOf(_);u[S]=u[u.length-1],u.pop(),_.destroy()}}function v(_){l.remove(_)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:T,releaseProgram:E,releaseShaderCache:v,programs:u,dispose:w}}function Rb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Cb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function im(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,p,g,x,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function a(h,f,p,g,x,m){let d=o(h,f,p,g,x,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,g,x,m){let d=o(h,f,p,g,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Cb),i.length>1&&i.sort(f||im),s.length>1&&s.sort(f||im)}function u(){for(let h=e,f=n.length;h<f;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Ib(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new sm,n.set(i,[o])):s>=r.length?(o=new sm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Pb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Le};break;case"SpotLight":t={position:new H,direction:new H,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function Lb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Db=0;function Nb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ub(n){let e=new Pb,t=Lb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);let s=new H,r=new je,o=new je;function a(c){let u=0,h=0,f=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,b=0,M=0,y=0,T=0,E=0,v=0;c.sort(Nb);for(let _=0,S=c.length;_<S;_++){let R=c[_],D=R.color,O=R.intensity,I=R.distance,k=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=D.r*O,h+=D.g*O,f+=D.b*O;else if(R.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(R.sh.coefficients[q],O);v++}else if(R.isDirectionalLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Q=R.shadow,V=t.get(R);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=R.shadow.matrix,b++}i.directional[p]=q,p++}else if(R.isSpotLight){let q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(D).multiplyScalar(O),q.distance=I,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,i.spot[x]=q;let Q=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,Q.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[x]=Q.matrix,R.castShadow){let V=t.get(R);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=k,y++}x++}else if(R.isRectAreaLight){let q=e.get(R);q.color.copy(D).multiplyScalar(O),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=q,m++}else if(R.isPointLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){let Q=R.shadow,V=t.get(R);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=R.shadow.matrix,M++}i.point[g]=q,g++}else if(R.isHemisphereLight){let q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(O),q.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[d]=q,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ye.LTC_FLOAT_1,i.rectAreaLTC2=Ye.LTC_FLOAT_2):(i.rectAreaLTC1=Ye.LTC_HALF_1,i.rectAreaLTC2=Ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let w=i.hash;(w.directionalLength!==p||w.pointLength!==g||w.spotLength!==x||w.rectAreaLength!==m||w.hemiLength!==d||w.numDirectionalShadows!==b||w.numPointShadows!==M||w.numSpotShadows!==y||w.numSpotMaps!==T||w.numLightProbes!==v)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=v,w.directionalLength=p,w.pointLength=g,w.spotLength=x,w.rectAreaLength=m,w.hemiLength=d,w.numDirectionalShadows=b,w.numPointShadows=M,w.numSpotShadows=y,w.numSpotMaps=T,w.numLightProbes=v,i.version=Db++)}function l(c,u){let h=0,f=0,p=0,g=0,x=0,m=u.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){let M=c[d];if(M.isDirectionalLight){let y=i.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(M.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function rm(n){let e=new Ub(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ob(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new rm(n),e.set(s,[a])):r>=o.length?(a=new rm(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Bh=class extends wn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Cv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zh=class extends wn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Fb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bb=`uniform sampler2D shadow_pass;
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
}`;function zb(n,e,t){let i=new ra,s=new Ke,r=new Ke,o=new wt,a=new Bh({depthPacking:Iv}),l=new zh,c={},u=t.maxTextureSize,h={[Ni]:sn,[sn]:Ni,[Nt]:Nt},f=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:Fb,fragmentShader:Bb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new ht;g.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new et(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let d=this.type;this.render=function(E,v,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let _=n.getRenderTarget(),S=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),D=n.state;D.setBlending(on),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let O=d!==es&&this.type===es,I=d===es&&this.type!==es;for(let k=0,q=E.length;k<q;k++){let Q=E[k],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let $=V.getFrameExtents();if(s.multiply($),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,V.mapSize.y=r.y)),V.map===null||O===!0||I===!0){let ie=this.type!==es?{minFilter:Jt,magFilter:Jt}:{};V.map!==null&&V.map.dispose(),V.map=new Zt(s.x,s.y,ie),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let oe=V.getViewportCount();for(let ie=0;ie<oe;ie++){let ye=V.getViewport(ie);o.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),D.viewport(o),V.updateMatrices(Q,ie),i=V.getFrustum(),y(v,w,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===es&&b(V,w),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(_,S,R)};function b(E,v){let w=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Zt(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(v,null,w,f,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(v,null,w,p,x,null)}function M(E,v,w,_){let S=null,R=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)S=R;else if(S=w.isPointLight===!0?l:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){let D=S.uuid,O=v.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let k=I[O];k===void 0&&(k=S.clone(),I[O]=k,v.addEventListener("dispose",T)),S=k}if(S.visible=v.visible,S.wireframe=v.wireframe,_===es?S.side=v.shadowSide!==null?v.shadowSide:v.side:S.side=v.shadowSide!==null?v.shadowSide:h[v.side],S.alphaMap=v.alphaMap,S.alphaTest=v.alphaTest,S.map=v.map,S.clipShadows=v.clipShadows,S.clippingPlanes=v.clippingPlanes,S.clipIntersection=v.clipIntersection,S.displacementMap=v.displacementMap,S.displacementScale=v.displacementScale,S.displacementBias=v.displacementBias,S.wireframeLinewidth=v.wireframeLinewidth,S.linewidth=v.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let D=n.properties.get(S);D.light=w}return S}function y(E,v,w,_,S){if(E.visible===!1)return;if(E.layers.test(v.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===es)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let O=e.update(E),I=E.material;if(Array.isArray(I)){let k=O.groups;for(let q=0,Q=k.length;q<Q;q++){let V=k[q],$=I[V.materialIndex];if($&&$.visible){let oe=M(E,$,_,S);E.onBeforeShadow(n,E,v,w,O,oe,V),n.renderBufferDirect(w,null,O,oe,E,V),E.onAfterShadow(n,E,v,w,O,oe,V)}}}else if(I.visible){let k=M(E,I,_,S);E.onBeforeShadow(n,E,v,w,O,k,null),n.renderBufferDirect(w,null,O,k,E,null),E.onAfterShadow(n,E,v,w,O,k,null)}}let D=E.children;for(let O=0,I=D.length;O<I;O++)y(D[O],v,w,_,S)}function T(E){E.target.removeEventListener("dispose",T);for(let w in c){let _=c[w],S=E.target.uuid;S in _&&(_[S].dispose(),delete _[S])}}}var kb={[Xu]:qu,[Yu]:Ku,[$u]:ju,[Jr]:Zu,[qu]:Xu,[Ku]:Yu,[ju]:$u,[Zu]:Jr};function Hb(n,e){function t(){let C=!1,J=new wt,B=null,ne=new wt(0,0,0,0);return{setMask:function(K){B!==K&&!C&&(n.colorMask(K,K,K,K),B=K)},setLocked:function(K){C=K},setClear:function(K,he,Ce,ke,Fe){Fe===!0&&(K*=ke,he*=ke,Ce*=ke),J.set(K,he,Ce,ke),ne.equals(J)===!1&&(n.clearColor(K,he,Ce,ke),ne.copy(J))},reset:function(){C=!1,B=null,ne.set(-1,0,0,0)}}}function i(){let C=!1,J=!1,B=null,ne=null,K=null;return{setReversed:function(he){if(J!==he){let Ce=e.get("EXT_clip_control");J?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT);let ke=K;K=null,this.setClear(ke)}J=he},getReversed:function(){return J},setTest:function(he){he?Y(n.DEPTH_TEST):z(n.DEPTH_TEST)},setMask:function(he){B!==he&&!C&&(n.depthMask(he),B=he)},setFunc:function(he){if(J&&(he=kb[he]),ne!==he){switch(he){case Xu:n.depthFunc(n.NEVER);break;case qu:n.depthFunc(n.ALWAYS);break;case Yu:n.depthFunc(n.LESS);break;case Jr:n.depthFunc(n.LEQUAL);break;case $u:n.depthFunc(n.EQUAL);break;case Zu:n.depthFunc(n.GEQUAL);break;case Ku:n.depthFunc(n.GREATER);break;case ju:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=he}},setLocked:function(he){C=he},setClear:function(he){K!==he&&(J&&(he=1-he),n.clearDepth(he),K=he)},reset:function(){C=!1,B=null,ne=null,K=null,J=!1}}}function s(){let C=!1,J=null,B=null,ne=null,K=null,he=null,Ce=null,ke=null,Fe=null;return{setTest:function(Ie){C||(Ie?Y(n.STENCIL_TEST):z(n.STENCIL_TEST))},setMask:function(Ie){J!==Ie&&!C&&(n.stencilMask(Ie),J=Ie)},setFunc:function(Ie,ce,se){(B!==Ie||ne!==ce||K!==se)&&(n.stencilFunc(Ie,ce,se),B=Ie,ne=ce,K=se)},setOp:function(Ie,ce,se){(he!==Ie||Ce!==ce||ke!==se)&&(n.stencilOp(Ie,ce,se),he=Ie,Ce=ce,ke=se)},setLocked:function(Ie){C=Ie},setClear:function(Ie){Fe!==Ie&&(n.clearStencil(Ie),Fe=Ie)},reset:function(){C=!1,J=null,B=null,ne=null,K=null,he=null,Ce=null,ke=null,Fe=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,b=null,M=null,y=null,T=null,E=null,v=new Le(0,0,0),w=0,_=!1,S=null,R=null,D=null,O=null,I=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,Q=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=Q>=2);let $=null,oe={},ie=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),Se=new wt().fromArray(ie),U=new wt().fromArray(ye);function X(C,J,B,ne){let K=new Uint8Array(4),he=n.createTexture();n.bindTexture(C,he),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<B;Ce++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(J,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,K):n.texImage2D(J+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,K);return he}let W={};W[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(n.DEPTH_TEST),o.setFunc(Jr),Ee(!1),we(ap),Y(n.CULL_FACE),Z(on);function Y(C){u[C]!==!0&&(n.enable(C),u[C]=!0)}function z(C){u[C]!==!1&&(n.disable(C),u[C]=!1)}function G(C,J){return h[C]!==J?(n.bindFramebuffer(C,J),h[C]=J,C===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=J),C===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=J),!0):!1}function de(C,J){let B=p,ne=!1;if(C){B=f.get(J),B===void 0&&(B=[],f.set(J,B));let K=C.textures;if(B.length!==K.length||B[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Ce=K.length;he<Ce;he++)B[he]=n.COLOR_ATTACHMENT0+he;B.length=K.length,ne=!0}}else B[0]!==n.BACK&&(B[0]=n.BACK,ne=!0);ne&&n.drawBuffers(B)}function xe(C){return g!==C?(n.useProgram(C),g=C,!0):!1}let Ne={[Bn]:n.FUNC_ADD,[hv]:n.FUNC_SUBTRACT,[fv]:n.FUNC_REVERSE_SUBTRACT};Ne[dv]=n.MIN,Ne[pv]=n.MAX;let He={[go]:n.ZERO,[tf]:n.ONE,[mv]:n.SRC_COLOR,[Wu]:n.SRC_ALPHA,[yv]:n.SRC_ALPHA_SATURATE,[oc]:n.DST_COLOR,[rc]:n.DST_ALPHA,[gv]:n.ONE_MINUS_SRC_COLOR,[ta]:n.ONE_MINUS_SRC_ALPHA,[vv]:n.ONE_MINUS_DST_COLOR,[xv]:n.ONE_MINUS_DST_ALPHA,[_v]:n.CONSTANT_COLOR,[Mv]:n.ONE_MINUS_CONSTANT_COLOR,[bv]:n.CONSTANT_ALPHA,[Sv]:n.ONE_MINUS_CONSTANT_ALPHA};function Z(C,J,B,ne,K,he,Ce,ke,Fe,Ie){if(C===on){x===!0&&(z(n.BLEND),x=!1);return}if(x===!1&&(Y(n.BLEND),x=!0),C!==fa){if(C!==m||Ie!==_){if((d!==Bn||y!==Bn)&&(n.blendEquation(n.FUNC_ADD),d=Bn,y=Bn),Ie)switch(C){case Yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ui:n.blendFunc(n.ONE,n.ONE);break;case lp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ui:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case lp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}b=null,M=null,T=null,E=null,v.set(0,0,0),w=0,m=C,_=Ie}return}K=K||J,he=he||B,Ce=Ce||ne,(J!==d||K!==y)&&(n.blendEquationSeparate(Ne[J],Ne[K]),d=J,y=K),(B!==b||ne!==M||he!==T||Ce!==E)&&(n.blendFuncSeparate(He[B],He[ne],He[he],He[Ce]),b=B,M=ne,T=he,E=Ce),(ke.equals(v)===!1||Fe!==w)&&(n.blendColor(ke.r,ke.g,ke.b,Fe),v.copy(ke),w=Fe),m=C,_=!1}function ae(C,J){C.side===Nt?z(n.CULL_FACE):Y(n.CULL_FACE);let B=C.side===sn;J&&(B=!B),Ee(B),C.blending===Yr&&C.transparent===!1?Z(on):Z(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let ne=C.stencilWrite;a.setTest(ne),ne&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),De(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Y(n.SAMPLE_ALPHA_TO_COVERAGE):z(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(C){S!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),S=C)}function we(C){C!==lv?(Y(n.CULL_FACE),C!==R&&(C===ap?n.cullFace(n.BACK):C===cv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):z(n.CULL_FACE),R=C}function Te(C){C!==D&&(q&&n.lineWidth(C),D=C)}function De(C,J,B){C?(Y(n.POLYGON_OFFSET_FILL),(O!==J||I!==B)&&(n.polygonOffset(J,B),O=J,I=B)):z(n.POLYGON_OFFSET_FILL)}function me(C){C?Y(n.SCISSOR_TEST):z(n.SCISSOR_TEST)}function P(C){C===void 0&&(C=n.TEXTURE0+k-1),$!==C&&(n.activeTexture(C),$=C)}function A(C,J,B){B===void 0&&($===null?B=n.TEXTURE0+k-1:B=$);let ne=oe[B];ne===void 0&&(ne={type:void 0,texture:void 0},oe[B]=ne),(ne.type!==C||ne.texture!==J)&&($!==B&&(n.activeTexture(B),$=B),n.bindTexture(C,J||W[C]),ne.type=C,ne.texture=J)}function ee(){let C=oe[$];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function le(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Oe(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Xe(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $e(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Qe(C){Se.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),Se.copy(C))}function N(C){U.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),U.copy(C))}function te(C,J){let B=c.get(J);B===void 0&&(B=new WeakMap,c.set(J,B));let ne=B.get(C);ne===void 0&&(ne=n.getUniformBlockIndex(J,C.name),B.set(C,ne))}function j(C,J){let ne=c.get(J).get(C);l.get(J)!==ne&&(n.uniformBlockBinding(J,ne,C.__bindingPointIndex),l.set(J,ne))}function F(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},$=null,oe={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,b=null,M=null,y=null,T=null,E=null,v=new Le(0,0,0),w=0,_=!1,S=null,R=null,D=null,O=null,I=null,Se.set(0,0,n.canvas.width,n.canvas.height),U.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:z,bindFramebuffer:G,drawBuffers:de,useProgram:xe,setBlending:Z,setMaterial:ae,setFlipSided:Ee,setCullFace:we,setLineWidth:Te,setPolygonOffset:De,setScissorTest:me,activeTexture:P,bindTexture:A,unbindTexture:ee,compressedTexImage2D:le,compressedTexImage3D:ge,texImage2D:ze,texImage3D:$e,updateUBOMapping:te,uniformBlockBinding:j,texStorage2D:Xe,texStorage3D:Ae,texSubImage2D:fe,texSubImage3D:Oe,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ue,scissor:Qe,viewport:N,reset:F}}function om(n,e,t,i){let s=Vb(i);switch(t){case Lm:return n*e;case Nm:return n*e;case Um:return n*e*2;case df:return n*e/s.components*s.byteLength;case pf:return n*e/s.components*s.byteLength;case Om:return n*e*2/s.components*s.byteLength;case mf:return n*e*2/s.components*s.byteLength;case Dm:return n*e*3/s.components*s.byteLength;case kn:return n*e*4/s.components*s.byteLength;case gf:return n*e*4/s.components*s.byteLength;case Tl:case Al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Rl:case Cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case th:case ih:return Math.max(n,16)*Math.max(e,8)/4;case eh:case nh:return Math.max(n,8)*Math.max(e,8)/2;case sh:case rh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ah:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ch:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case uh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case fh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case dh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ph:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case mh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case gh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case yh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case _h:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Il:case Mh:case bh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fm:case Sh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Eh:case wh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vb(n){switch(n){case Ai:case Cm:return{byteLength:1,components:1};case ia:case Im:case pn:return{byteLength:2,components:1};case hf:case ff:return{byteLength:2,components:4};case cr:case uf:case wi:return{byteLength:4,components:1};case Pm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Gb(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,A){return p?new OffscreenCanvas(P,A):sa("canvas")}function x(P,A,ee){let le=1,ge=me(P);if((ge.width>ee||ge.height>ee)&&(le=ee/Math.max(ge.width,ge.height)),le<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let fe=Math.floor(le*ge.width),Oe=Math.floor(le*ge.height);h===void 0&&(h=g(fe,Oe));let Re=A?g(fe,Oe):h;return Re.width=fe,Re.height=Oe,Re.getContext("2d").drawImage(P,0,0,fe,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+fe+"x"+Oe+")."),Re}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function m(P){return P.generateMipmaps}function d(P){n.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(P,A,ee,le,ge=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=A;if(A===n.RED&&(ee===n.FLOAT&&(fe=n.R32F),ee===n.HALF_FLOAT&&(fe=n.R16F),ee===n.UNSIGNED_BYTE&&(fe=n.R8)),A===n.RED_INTEGER&&(ee===n.UNSIGNED_BYTE&&(fe=n.R8UI),ee===n.UNSIGNED_SHORT&&(fe=n.R16UI),ee===n.UNSIGNED_INT&&(fe=n.R32UI),ee===n.BYTE&&(fe=n.R8I),ee===n.SHORT&&(fe=n.R16I),ee===n.INT&&(fe=n.R32I)),A===n.RG&&(ee===n.FLOAT&&(fe=n.RG32F),ee===n.HALF_FLOAT&&(fe=n.RG16F),ee===n.UNSIGNED_BYTE&&(fe=n.RG8)),A===n.RG_INTEGER&&(ee===n.UNSIGNED_BYTE&&(fe=n.RG8UI),ee===n.UNSIGNED_SHORT&&(fe=n.RG16UI),ee===n.UNSIGNED_INT&&(fe=n.RG32UI),ee===n.BYTE&&(fe=n.RG8I),ee===n.SHORT&&(fe=n.RG16I),ee===n.INT&&(fe=n.RG32I)),A===n.RGB_INTEGER&&(ee===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),ee===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),ee===n.UNSIGNED_INT&&(fe=n.RGB32UI),ee===n.BYTE&&(fe=n.RGB8I),ee===n.SHORT&&(fe=n.RGB16I),ee===n.INT&&(fe=n.RGB32I)),A===n.RGBA_INTEGER&&(ee===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),ee===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),ee===n.UNSIGNED_INT&&(fe=n.RGBA32UI),ee===n.BYTE&&(fe=n.RGBA8I),ee===n.SHORT&&(fe=n.RGBA16I),ee===n.INT&&(fe=n.RGBA32I)),A===n.RGB&&ee===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),A===n.RGBA){let Oe=ge?uc:vt.getTransfer(le);ee===n.FLOAT&&(fe=n.RGBA32F),ee===n.HALF_FLOAT&&(fe=n.RGBA16F),ee===n.UNSIGNED_BYTE&&(fe=Oe===Dt?n.SRGB8_ALPHA8:n.RGBA8),ee===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),ee===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function y(P,A){let ee;return P?A===null||A===cr||A===Rs?ee=n.DEPTH24_STENCIL8:A===wi?ee=n.DEPTH32F_STENCIL8:A===ia&&(ee=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===cr||A===Rs?ee=n.DEPTH_COMPONENT24:A===wi?ee=n.DEPTH_COMPONENT32F:A===ia&&(ee=n.DEPTH_COMPONENT16),ee}function T(P,A){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Jt&&P.minFilter!==zn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function E(P){let A=P.target;A.removeEventListener("dispose",E),w(A),A.isVideoTexture&&u.delete(A)}function v(P){let A=P.target;A.removeEventListener("dispose",v),S(A)}function w(P){let A=i.get(P);if(A.__webglInit===void 0)return;let ee=P.source,le=f.get(ee);if(le){let ge=le[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&_(P),Object.keys(le).length===0&&f.delete(ee)}i.remove(P)}function _(P){let A=i.get(P);n.deleteTexture(A.__webglTexture);let ee=P.source,le=f.get(ee);delete le[A.__cacheKey],o.memory.textures--}function S(P){let A=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(A.__webglFramebuffer[le]))for(let ge=0;ge<A.__webglFramebuffer[le].length;ge++)n.deleteFramebuffer(A.__webglFramebuffer[le][ge]);else n.deleteFramebuffer(A.__webglFramebuffer[le]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[le])}else{if(Array.isArray(A.__webglFramebuffer))for(let le=0;le<A.__webglFramebuffer.length;le++)n.deleteFramebuffer(A.__webglFramebuffer[le]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let le=0;le<A.__webglColorRenderbuffer.length;le++)A.__webglColorRenderbuffer[le]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[le]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let ee=P.textures;for(let le=0,ge=ee.length;le<ge;le++){let fe=i.get(ee[le]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(ee[le])}i.remove(P)}let R=0;function D(){R=0}function O(){let P=R;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function I(P){let A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function k(P,A){let ee=i.get(P);if(P.isVideoTexture&&Te(P),P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){let le=P.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(ee,P,A);return}}t.bindTexture(n.TEXTURE_2D,ee.__webglTexture,n.TEXTURE0+A)}function q(P,A){let ee=i.get(P);if(P.version>0&&ee.__version!==P.version){U(ee,P,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,ee.__webglTexture,n.TEXTURE0+A)}function Q(P,A){let ee=i.get(P);if(P.version>0&&ee.__version!==P.version){U(ee,P,A);return}t.bindTexture(n.TEXTURE_3D,ee.__webglTexture,n.TEXTURE0+A)}function V(P,A){let ee=i.get(P);if(P.version>0&&ee.__version!==P.version){X(ee,P,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture,n.TEXTURE0+A)}let $={[Dn]:n.REPEAT,[ns]:n.CLAMP_TO_EDGE,[na]:n.MIRRORED_REPEAT},oe={[Jt]:n.NEAREST,[cf]:n.NEAREST_MIPMAP_NEAREST,[Xr]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[Jo]:n.LINEAR_MIPMAP_NEAREST,[oi]:n.LINEAR_MIPMAP_LINEAR},ie={[Lv]:n.NEVER,[Bv]:n.ALWAYS,[Dv]:n.LESS,[zm]:n.LEQUAL,[Nv]:n.EQUAL,[Fv]:n.GEQUAL,[Uv]:n.GREATER,[Ov]:n.NOTEQUAL};function ye(P,A){if(A.type===wi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===zn||A.magFilter===Jo||A.magFilter===Xr||A.magFilter===oi||A.minFilter===zn||A.minFilter===Jo||A.minFilter===Xr||A.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,$[A.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,$[A.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,$[A.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,oe[A.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,oe[A.minFilter]),A.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ie[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Jt||A.minFilter!==Xr&&A.minFilter!==oi||A.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let ee=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Se(P,A){let ee=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",E));let le=A.source,ge=f.get(le);ge===void 0&&(ge={},f.set(le,ge));let fe=I(A);if(fe!==P.__cacheKey){ge[fe]===void 0&&(ge[fe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,ee=!0),ge[fe].usedTimes++;let Oe=ge[P.__cacheKey];Oe!==void 0&&(ge[P.__cacheKey].usedTimes--,Oe.usedTimes===0&&_(A)),P.__cacheKey=fe,P.__webglTexture=ge[fe].texture}return ee}function U(P,A,ee){let le=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(le=n.TEXTURE_3D);let ge=Se(P,A),fe=A.source;t.bindTexture(le,P.__webglTexture,n.TEXTURE0+ee);let Oe=i.get(fe);if(fe.version!==Oe.__version||ge===!0){t.activeTexture(n.TEXTURE0+ee);let Re=vt.getPrimaries(vt.workingColorSpace),Ue=A.colorSpace===ws?null:vt.getPrimaries(A.colorSpace),Xe=A.colorSpace===ws||Re===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Ae=x(A.image,!1,s.maxTextureSize);Ae=De(A,Ae);let ze=r.convert(A.format,A.colorSpace),$e=r.convert(A.type),Qe=M(A.internalFormat,ze,$e,A.colorSpace,A.isVideoTexture);ye(le,A);let N,te=A.mipmaps,j=A.isVideoTexture!==!0,F=Oe.__version===void 0||ge===!0,C=fe.dataReady,J=T(A,Ae);if(A.isDepthTexture)Qe=y(A.format===Cs,A.type),F&&(j?t.texStorage2D(n.TEXTURE_2D,1,Qe,Ae.width,Ae.height):t.texImage2D(n.TEXTURE_2D,0,Qe,Ae.width,Ae.height,0,ze,$e,null));else if(A.isDataTexture)if(te.length>0){j&&F&&t.texStorage2D(n.TEXTURE_2D,J,Qe,te[0].width,te[0].height);for(let B=0,ne=te.length;B<ne;B++)N=te[B],j?C&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,N.width,N.height,ze,$e,N.data):t.texImage2D(n.TEXTURE_2D,B,Qe,N.width,N.height,0,ze,$e,N.data);A.generateMipmaps=!1}else j?(F&&t.texStorage2D(n.TEXTURE_2D,J,Qe,Ae.width,Ae.height),C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae.width,Ae.height,ze,$e,Ae.data)):t.texImage2D(n.TEXTURE_2D,0,Qe,Ae.width,Ae.height,0,ze,$e,Ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){j&&F&&t.texStorage3D(n.TEXTURE_2D_ARRAY,J,Qe,te[0].width,te[0].height,Ae.depth);for(let B=0,ne=te.length;B<ne;B++)if(N=te[B],A.format!==kn)if(ze!==null)if(j){if(C)if(A.layerUpdates.size>0){let K=om(N.width,N.height,A.format,A.type);for(let he of A.layerUpdates){let Ce=N.data.subarray(he*K/N.data.BYTES_PER_ELEMENT,(he+1)*K/N.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,he,N.width,N.height,1,ze,Ce)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,N.width,N.height,Ae.depth,ze,N.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,B,Qe,N.width,N.height,Ae.depth,0,N.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?C&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,N.width,N.height,Ae.depth,ze,$e,N.data):t.texImage3D(n.TEXTURE_2D_ARRAY,B,Qe,N.width,N.height,Ae.depth,0,ze,$e,N.data)}else{j&&F&&t.texStorage2D(n.TEXTURE_2D,J,Qe,te[0].width,te[0].height);for(let B=0,ne=te.length;B<ne;B++)N=te[B],A.format!==kn?ze!==null?j?C&&t.compressedTexSubImage2D(n.TEXTURE_2D,B,0,0,N.width,N.height,ze,N.data):t.compressedTexImage2D(n.TEXTURE_2D,B,Qe,N.width,N.height,0,N.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?C&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,N.width,N.height,ze,$e,N.data):t.texImage2D(n.TEXTURE_2D,B,Qe,N.width,N.height,0,ze,$e,N.data)}else if(A.isDataArrayTexture)if(j){if(F&&t.texStorage3D(n.TEXTURE_2D_ARRAY,J,Qe,Ae.width,Ae.height,Ae.depth),C)if(A.layerUpdates.size>0){let B=om(Ae.width,Ae.height,A.format,A.type);for(let ne of A.layerUpdates){let K=Ae.data.subarray(ne*B/Ae.data.BYTES_PER_ELEMENT,(ne+1)*B/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,Ae.width,Ae.height,1,ze,$e,K)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,ze,$e,Ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Qe,Ae.width,Ae.height,Ae.depth,0,ze,$e,Ae.data);else if(A.isData3DTexture)j?(F&&t.texStorage3D(n.TEXTURE_3D,J,Qe,Ae.width,Ae.height,Ae.depth),C&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,ze,$e,Ae.data)):t.texImage3D(n.TEXTURE_3D,0,Qe,Ae.width,Ae.height,Ae.depth,0,ze,$e,Ae.data);else if(A.isFramebufferTexture){if(F)if(j)t.texStorage2D(n.TEXTURE_2D,J,Qe,Ae.width,Ae.height);else{let B=Ae.width,ne=Ae.height;for(let K=0;K<J;K++)t.texImage2D(n.TEXTURE_2D,K,Qe,B,ne,0,ze,$e,null),B>>=1,ne>>=1}}else if(te.length>0){if(j&&F){let B=me(te[0]);t.texStorage2D(n.TEXTURE_2D,J,Qe,B.width,B.height)}for(let B=0,ne=te.length;B<ne;B++)N=te[B],j?C&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,ze,$e,N):t.texImage2D(n.TEXTURE_2D,B,Qe,ze,$e,N);A.generateMipmaps=!1}else if(j){if(F){let B=me(Ae);t.texStorage2D(n.TEXTURE_2D,J,Qe,B.width,B.height)}C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,$e,Ae)}else t.texImage2D(n.TEXTURE_2D,0,Qe,ze,$e,Ae);m(A)&&d(le),Oe.__version=fe.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function X(P,A,ee){if(A.image.length!==6)return;let le=Se(P,A),ge=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+ee);let fe=i.get(ge);if(ge.version!==fe.__version||le===!0){t.activeTexture(n.TEXTURE0+ee);let Oe=vt.getPrimaries(vt.workingColorSpace),Re=A.colorSpace===ws?null:vt.getPrimaries(A.colorSpace),Ue=A.colorSpace===ws||Oe===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let Xe=A.isCompressedTexture||A.image[0].isCompressedTexture,Ae=A.image[0]&&A.image[0].isDataTexture,ze=[];for(let ne=0;ne<6;ne++)!Xe&&!Ae?ze[ne]=x(A.image[ne],!0,s.maxCubemapSize):ze[ne]=Ae?A.image[ne].image:A.image[ne],ze[ne]=De(A,ze[ne]);let $e=ze[0],Qe=r.convert(A.format,A.colorSpace),N=r.convert(A.type),te=M(A.internalFormat,Qe,N,A.colorSpace),j=A.isVideoTexture!==!0,F=fe.__version===void 0||le===!0,C=ge.dataReady,J=T(A,$e);ye(n.TEXTURE_CUBE_MAP,A);let B;if(Xe){j&&F&&t.texStorage2D(n.TEXTURE_CUBE_MAP,J,te,$e.width,$e.height);for(let ne=0;ne<6;ne++){B=ze[ne].mipmaps;for(let K=0;K<B.length;K++){let he=B[K];A.format!==kn?Qe!==null?j?C&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,K,0,0,he.width,he.height,Qe,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,K,te,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,K,0,0,he.width,he.height,Qe,N,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,K,te,he.width,he.height,0,Qe,N,he.data)}}}else{if(B=A.mipmaps,j&&F){B.length>0&&J++;let ne=me(ze[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,J,te,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ae){j?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ze[ne].width,ze[ne].height,Qe,N,ze[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,te,ze[ne].width,ze[ne].height,0,Qe,N,ze[ne].data);for(let K=0;K<B.length;K++){let Ce=B[K].image[ne].image;j?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,K+1,0,0,Ce.width,Ce.height,Qe,N,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,K+1,te,Ce.width,Ce.height,0,Qe,N,Ce.data)}}else{j?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Qe,N,ze[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,te,Qe,N,ze[ne]);for(let K=0;K<B.length;K++){let he=B[K];j?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,K+1,0,0,Qe,N,he.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,K+1,te,Qe,N,he.image[ne])}}}m(A)&&d(n.TEXTURE_CUBE_MAP),fe.__version=ge.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function W(P,A,ee,le,ge,fe){let Oe=r.convert(ee.format,ee.colorSpace),Re=r.convert(ee.type),Ue=M(ee.internalFormat,Oe,Re,ee.colorSpace),Xe=i.get(A),Ae=i.get(ee);if(Ae.__renderTarget=A,!Xe.__hasExternalTextures){let ze=Math.max(1,A.width>>fe),$e=Math.max(1,A.height>>fe);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,fe,Ue,ze,$e,A.depth,0,Oe,Re,null):t.texImage2D(ge,fe,Ue,ze,$e,0,Oe,Re,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),we(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,ge,Ae.__webglTexture,0,Ee(A)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,ge,Ae.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Y(P,A,ee){if(n.bindRenderbuffer(n.RENDERBUFFER,P),A.depthBuffer){let le=A.depthTexture,ge=le&&le.isDepthTexture?le.type:null,fe=y(A.stencilBuffer,ge),Oe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=Ee(A);we(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,fe,A.width,A.height):ee?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,fe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,fe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Oe,n.RENDERBUFFER,P)}else{let le=A.textures;for(let ge=0;ge<le.length;ge++){let fe=le[ge],Oe=r.convert(fe.format,fe.colorSpace),Re=r.convert(fe.type),Ue=M(fe.internalFormat,Oe,Re,fe.colorSpace),Xe=Ee(A);ee&&we(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Ue,A.width,A.height):we(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe,Ue,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Ue,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function z(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let le=i.get(A.depthTexture);le.__renderTarget=A,(!le.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),k(A.depthTexture,0);let ge=le.__webglTexture,fe=Ee(A);if(A.depthTexture.format===$r)we(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0);else if(A.depthTexture.format===Cs)we(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function G(P){let A=i.get(P),ee=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){let le=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),le){let ge=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,le.removeEventListener("dispose",ge)};le.addEventListener("dispose",ge),A.__depthDisposeCallback=ge}A.__boundDepthTexture=le}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");z(A.__webglFramebuffer,P)}else if(ee){A.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[le]),A.__webglDepthbuffer[le]===void 0)A.__webglDepthbuffer[le]=n.createRenderbuffer(),Y(A.__webglDepthbuffer[le],P,!1);else{let ge=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer[le];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),Y(A.__webglDepthbuffer,P,!1);else{let le=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,ge)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(P,A,ee){let le=i.get(P);A!==void 0&&W(le.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ee!==void 0&&G(P)}function xe(P){let A=P.texture,ee=i.get(P),le=i.get(A);P.addEventListener("dispose",v);let ge=P.textures,fe=P.isWebGLCubeRenderTarget===!0,Oe=ge.length>1;if(Oe||(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=A.version,o.memory.textures++),fe){ee.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer[Re]=[];for(let Ue=0;Ue<A.mipmaps.length;Ue++)ee.__webglFramebuffer[Re][Ue]=n.createFramebuffer()}else ee.__webglFramebuffer[Re]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Re=0;Re<A.mipmaps.length;Re++)ee.__webglFramebuffer[Re]=n.createFramebuffer()}else ee.__webglFramebuffer=n.createFramebuffer();if(Oe)for(let Re=0,Ue=ge.length;Re<Ue;Re++){let Xe=i.get(ge[Re]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&we(P)===!1){ee.__webglMultisampledFramebuffer=n.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Re=0;Re<ge.length;Re++){let Ue=ge[Re];ee.__webglColorRenderbuffer[Re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ee.__webglColorRenderbuffer[Re]);let Xe=r.convert(Ue.format,Ue.colorSpace),Ae=r.convert(Ue.type),ze=M(Ue.internalFormat,Xe,Ae,Ue.colorSpace,P.isXRRenderTarget===!0),$e=Ee(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,ze,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,ee.__webglColorRenderbuffer[Re])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(ee.__webglDepthRenderbuffer=n.createRenderbuffer(),Y(ee.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),ye(n.TEXTURE_CUBE_MAP,A);for(let Re=0;Re<6;Re++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)W(ee.__webglFramebuffer[Re][Ue],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ue);else W(ee.__webglFramebuffer[Re],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);m(A)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let Re=0,Ue=ge.length;Re<Ue;Re++){let Xe=ge[Re],Ae=i.get(Xe);t.bindTexture(n.TEXTURE_2D,Ae.__webglTexture),ye(n.TEXTURE_2D,Xe),W(ee.__webglFramebuffer,P,Xe,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,0),m(Xe)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let Re=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Re=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Re,le.__webglTexture),ye(Re,A),A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)W(ee.__webglFramebuffer[Ue],P,A,n.COLOR_ATTACHMENT0,Re,Ue);else W(ee.__webglFramebuffer,P,A,n.COLOR_ATTACHMENT0,Re,0);m(A)&&d(Re),t.unbindTexture()}P.depthBuffer&&G(P)}function Ne(P){let A=P.textures;for(let ee=0,le=A.length;ee<le;ee++){let ge=A[ee];if(m(ge)){let fe=b(P),Oe=i.get(ge).__webglTexture;t.bindTexture(fe,Oe),d(fe),t.unbindTexture()}}}let He=[],Z=[];function ae(P){if(P.samples>0){if(we(P)===!1){let A=P.textures,ee=P.width,le=P.height,ge=n.COLOR_BUFFER_BIT,fe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Oe=i.get(P),Re=A.length>1;if(Re)for(let Ue=0;Ue<A.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ue=0;Ue<A.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),Re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ue]);let Xe=i.get(A[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xe,0)}n.blitFramebuffer(0,0,ee,le,0,0,ee,le,ge,n.NEAREST),l===!0&&(He.length=0,Z.length=0,He.push(n.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(He.push(fe),Z.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Re)for(let Ue=0;Ue<A.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ue]);let Xe=i.get(A[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let A=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Ee(P){return Math.min(s.maxSamples,P.samples)}function we(P){let A=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Te(P){let A=o.render.frame;u.get(P)!==A&&(u.set(P,A),P.update())}function De(P,A){let ee=P.colorSpace,le=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ee!==An&&ee!==ws&&(vt.getTransfer(ee)===Dt?(le!==kn||ge!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),A}function me(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=de,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=G,this.setupFrameBufferTexture=W,this.useMultisampledRTT=we}function Wb(n,e){function t(i,s=ws){let r,o=vt.getTransfer(s);if(i===Ai)return n.UNSIGNED_BYTE;if(i===hf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ff)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Pm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Cm)return n.BYTE;if(i===Im)return n.SHORT;if(i===ia)return n.UNSIGNED_SHORT;if(i===uf)return n.INT;if(i===cr)return n.UNSIGNED_INT;if(i===wi)return n.FLOAT;if(i===pn)return n.HALF_FLOAT;if(i===Lm)return n.ALPHA;if(i===Dm)return n.RGB;if(i===kn)return n.RGBA;if(i===Nm)return n.LUMINANCE;if(i===Um)return n.LUMINANCE_ALPHA;if(i===$r)return n.DEPTH_COMPONENT;if(i===Cs)return n.DEPTH_STENCIL;if(i===df)return n.RED;if(i===pf)return n.RED_INTEGER;if(i===Om)return n.RG;if(i===mf)return n.RG_INTEGER;if(i===gf)return n.RGBA_INTEGER;if(i===Tl||i===Al||i===Rl||i===Cl)if(o===Dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Tl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Tl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Al)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===eh||i===th||i===nh||i===ih)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===eh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===th)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ih)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sh||i===rh||i===oh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===sh||i===rh)return o===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===oh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ah||i===lh||i===ch||i===uh||i===hh||i===fh||i===dh||i===ph||i===mh||i===gh||i===xh||i===vh||i===yh||i===_h)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ah)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ch)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ph)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_h)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Il||i===Mh||i===bh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Il)return o===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fm||i===Sh||i===Eh||i===wh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Il)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Eh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var kh=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},lt=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xb={type:"move"},ea=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yb=`
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

}`,Hh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new fn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new bt({vertexShader:qb,fragmentShader:Yb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new Hn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vh=class extends Is{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null,x=new Hh,m=t.getContextAttributes(),d=null,b=null,M=[],y=[],T=new Ke,E=null,v=new jt;v.viewport=new wt;let w=new jt;w.viewport=new wt;let _=[v,w],S=new kh,R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let X=M[U];return X===void 0&&(X=new ea,M[U]=X),X.getTargetRaySpace()},this.getControllerGrip=function(U){let X=M[U];return X===void 0&&(X=new ea,M[U]=X),X.getGripSpace()},this.getHand=function(U){let X=M[U];return X===void 0&&(X=new ea,M[U]=X),X.getHandSpace()};function O(U){let X=y.indexOf(U.inputSource);if(X===-1)return;let W=M[X];W!==void 0&&(W.update(U.inputSource,U.frame,c||o),W.dispatchEvent({type:U.type,data:U.inputSource}))}function I(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",k);for(let U=0;U<M.length;U++){let X=y[U];X!==null&&(y[U]=null,M[U].disconnect(X))}R=null,D=null,x.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,b=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",I),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0){let X={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Zt(p.framebufferWidth,p.framebufferHeight,{format:kn,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let X=null,W=null,Y=null;m.depth&&(Y=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=m.stencil?Cs:$r,W=m.stencil?Rs:cr);let z={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(z),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Zt(f.textureWidth,f.textureHeight,{format:kn,type:Ai,depthTexture:new ao(f.textureWidth,f.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Se.setContext(s),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function k(U){for(let X=0;X<U.removed.length;X++){let W=U.removed[X],Y=y.indexOf(W);Y>=0&&(y[Y]=null,M[Y].disconnect(W))}for(let X=0;X<U.added.length;X++){let W=U.added[X],Y=y.indexOf(W);if(Y===-1){for(let G=0;G<M.length;G++)if(G>=y.length){y.push(W),Y=G;break}else if(y[G]===null){y[G]=W,Y=G;break}if(Y===-1)break}let z=M[Y];z&&z.connect(W)}}let q=new H,Q=new H;function V(U,X,W){q.setFromMatrixPosition(X.matrixWorld),Q.setFromMatrixPosition(W.matrixWorld);let Y=q.distanceTo(Q),z=X.projectionMatrix.elements,G=W.projectionMatrix.elements,de=z[14]/(z[10]-1),xe=z[14]/(z[10]+1),Ne=(z[9]+1)/z[5],He=(z[9]-1)/z[5],Z=(z[8]-1)/z[0],ae=(G[8]+1)/G[0],Ee=de*Z,we=de*ae,Te=Y/(-Z+ae),De=Te*-Z;if(X.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(De),U.translateZ(Te),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),z[10]===-1)U.projectionMatrix.copy(X.projectionMatrix),U.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let me=de+Te,P=xe+Te,A=Ee-De,ee=we+(Y-De),le=Ne*xe/P*me,ge=He*xe/P*me;U.projectionMatrix.makePerspective(A,ee,le,ge,me,P),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function $(U,X){X===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(X.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let X=U.near,W=U.far;x.texture!==null&&(x.depthNear>0&&(X=x.depthNear),x.depthFar>0&&(W=x.depthFar)),S.near=w.near=v.near=X,S.far=w.far=v.far=W,(R!==S.near||D!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,D=S.far),v.layers.mask=U.layers.mask|2,w.layers.mask=U.layers.mask|4,S.layers.mask=v.layers.mask|w.layers.mask;let Y=U.parent,z=S.cameras;$(S,Y);for(let G=0;G<z.length;G++)$(z[G],Y);z.length===2?V(S,v,w):S.projectionMatrix.copy(v.projectionMatrix),oe(U,S,Y)};function oe(U,X,W){W===null?U.matrix.copy(X.matrixWorld):(U.matrix.copy(W.matrixWorld),U.matrix.invert(),U.matrix.multiply(X.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(X.projectionMatrix),U.projectionMatrixInverse.copy(X.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=io*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(U){l=U,f!==null&&(f.fixedFoveation=U),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=U)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ie=null;function ye(U,X){if(u=X.getViewerPose(c||o),g=X,u!==null){let W=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Y=!1;W.length!==S.cameras.length&&(S.cameras.length=0,Y=!0);for(let G=0;G<W.length;G++){let de=W[G],xe=null;if(p!==null)xe=p.getViewport(de);else{let He=h.getViewSubImage(f,de);xe=He.viewport,G===0&&(e.setRenderTargetTextures(b,He.colorTexture,f.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(b))}let Ne=_[G];Ne===void 0&&(Ne=new jt,Ne.layers.enable(G),Ne.viewport=new wt,_[G]=Ne),Ne.matrix.fromArray(de.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(de.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(xe.x,xe.y,xe.width,xe.height),G===0&&(S.matrix.copy(Ne.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Y===!0&&S.cameras.push(Ne)}let z=s.enabledFeatures;if(z&&z.includes("depth-sensing")){let G=h.getDepthInformation(W[0]);G&&G.isValid&&G.texture&&x.init(e,G,s.renderState)}}for(let W=0;W<M.length;W++){let Y=y[W],z=M[W];Y!==null&&z!==void 0&&z.update(Y,X,c||o)}ie&&ie(U,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),g=null}let Se=new Wm;Se.setAnimationLoop(ye),this.setAnimationLoop=function(U){ie=U},this.dispose=function(){}}},or=new Ri,$b=new je;function Zb(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Gm(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,b,M,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,b,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===sn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===sn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let b=e.get(d),M=b.envMap,y=b.envMapRotation;M&&(m.envMap.value=M,or.copy(y),or.x*=-1,or.y*=-1,or.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),m.envMapRotation.value.setFromMatrix4($b.makeRotationFromEuler(or)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===sn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Kb(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let y=M.program;i.uniformBlockBinding(b,y)}function c(b,M){let y=s[b.id];y===void 0&&(g(b),y=u(b),s[b.id]=y,b.addEventListener("dispose",m));let T=M.program;i.updateUBOMapping(b,T);let E=e.render.frame;r[b.id]!==E&&(f(b),r[b.id]=E)}function u(b){let M=h();b.__bindingPointIndex=M;let y=n.createBuffer(),T=b.__size,E=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let M=s[b.id],y=b.uniforms,T=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let E=0,v=y.length;E<v;E++){let w=Array.isArray(y[E])?y[E]:[y[E]];for(let _=0,S=w.length;_<S;_++){let R=w[_];if(p(R,E,_,T)===!0){let D=R.__offset,O=Array.isArray(R.value)?R.value:[R.value],I=0;for(let k=0;k<O.length;k++){let q=O[k],Q=x(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,D+I,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,I),I+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,M,y,T){let E=b.value,v=M+"_"+y;if(T[v]===void 0)return typeof E=="number"||typeof E=="boolean"?T[v]=E:T[v]=E.clone(),!0;{let w=T[v];if(typeof E=="number"||typeof E=="boolean"){if(w!==E)return T[v]=E,!0}else if(w.equals(E)===!1)return w.copy(E),!0}return!1}function g(b){let M=b.uniforms,y=0,T=16;for(let v=0,w=M.length;v<w;v++){let _=Array.isArray(M[v])?M[v]:[M[v]];for(let S=0,R=_.length;S<R;S++){let D=_[S],O=Array.isArray(D.value)?D.value:[D.value];for(let I=0,k=O.length;I<k;I++){let q=O[I],Q=x(q),V=y%T,$=V%Q.boundary,oe=V+$;y+=$,oe!==0&&T-oe<Q.storage&&(y+=T-oe),D.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=Q.storage}}}let E=y%T;return E>0&&(y+=T-E),b.__size=y,b.__cache={},this}function x(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){let M=b.target;M.removeEventListener("dispose",m);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var zl=class{constructor(e={}){let{canvas:t=ty(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,b=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=As,this.toneMappingExposure=1;let y=this,T=!1,E=0,v=0,w=null,_=-1,S=null,R=new wt,D=new wt,O=null,I=new Le(0),k=0,q=t.width,Q=t.height,V=1,$=null,oe=null,ie=new wt(0,0,q,Q),ye=new wt(0,0,q,Q),Se=!1,U=new ra,X=!1,W=!1,Y=new je,z=new je,G=new H,de=new wt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function He(){return w===null?V:1}let Z=i;function ae(L,re){return t.getContext(L,re)}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",he,!1),Z===null){let re="webgl2";if(Z=ae(re,L),Z===null)throw ae(re)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Ee,we,Te,De,me,P,A,ee,le,ge,fe,Oe,Re,Ue,Xe,Ae,ze,$e,Qe,N,te,j,F,C;function J(){Ee=new fM(Z),Ee.init(),j=new Wb(Z,Ee),we=new oM(Z,Ee,e,j),Te=new Hb(Z,Ee),we.reverseDepthBuffer&&f&&Te.buffers.depth.setReversed(!0),De=new mM(Z),me=new Rb,P=new Gb(Z,Ee,Te,me,we,j,De),A=new lM(y),ee=new hM(y),le=new by(Z),F=new sM(Z,le),ge=new dM(Z,le,De,F),fe=new xM(Z,ge,le,De),Qe=new gM(Z,we,P),Ae=new aM(me),Oe=new Ab(y,A,ee,Ee,we,F,Ae),Re=new Zb(y,me),Ue=new Ib,Xe=new Ob(Ee),$e=new iM(y,A,ee,Te,fe,p,l),ze=new zb(y,fe,we),C=new Kb(Z,De,we,Te),N=new rM(Z,Ee,De),te=new pM(Z,Ee,De),De.programs=Oe.programs,y.capabilities=we,y.extensions=Ee,y.properties=me,y.renderLists=Ue,y.shadowMap=ze,y.state=Te,y.info=De}J();let B=new Vh(y,Z);this.xr=B,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let L=Ee.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Ee.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(L){L!==void 0&&(V=L,this.setSize(q,Q,!1))},this.getSize=function(L){return L.set(q,Q)},this.setSize=function(L,re,_e=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=L,Q=re,t.width=Math.floor(L*V),t.height=Math.floor(re*V),_e===!0&&(t.style.width=L+"px",t.style.height=re+"px"),this.setViewport(0,0,L,re)},this.getDrawingBufferSize=function(L){return L.set(q*V,Q*V).floor()},this.setDrawingBufferSize=function(L,re,_e){q=L,Q=re,V=_e,t.width=Math.floor(L*_e),t.height=Math.floor(re*_e),this.setViewport(0,0,L,re)},this.getCurrentViewport=function(L){return L.copy(R)},this.getViewport=function(L){return L.copy(ie)},this.setViewport=function(L,re,_e,Me){L.isVector4?ie.set(L.x,L.y,L.z,L.w):ie.set(L,re,_e,Me),Te.viewport(R.copy(ie).multiplyScalar(V).round())},this.getScissor=function(L){return L.copy(ye)},this.setScissor=function(L,re,_e,Me){L.isVector4?ye.set(L.x,L.y,L.z,L.w):ye.set(L,re,_e,Me),Te.scissor(D.copy(ye).multiplyScalar(V).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(L){Te.setScissorTest(Se=L)},this.setOpaqueSort=function(L){$=L},this.setTransparentSort=function(L){oe=L},this.getClearColor=function(L){return L.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(L=!0,re=!0,_e=!0){let Me=0;if(L){let ue=!1;if(w!==null){let We=w.texture.format;ue=We===gf||We===mf||We===pf}if(ue){let We=w.texture.type,Ze=We===Ai||We===cr||We===ia||We===Rs||We===hf||We===ff,tt=$e.getClearColor(),nt=$e.getClearAlpha(),ct=tt.r,dt=tt.g,it=tt.b;Ze?(g[0]=ct,g[1]=dt,g[2]=it,g[3]=nt,Z.clearBufferuiv(Z.COLOR,0,g)):(x[0]=ct,x[1]=dt,x[2]=it,x[3]=nt,Z.clearBufferiv(Z.COLOR,0,x))}else Me|=Z.COLOR_BUFFER_BIT}re&&(Me|=Z.DEPTH_BUFFER_BIT),_e&&(Me|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(Me)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Ue.dispose(),Xe.dispose(),me.dispose(),A.dispose(),ee.dispose(),fe.dispose(),F.dispose(),C.dispose(),Oe.dispose(),B.dispose(),B.removeEventListener("sessionstart",pe),B.removeEventListener("sessionend",be),Pe.stop()};function ne(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let L=De.autoReset,re=ze.enabled,_e=ze.autoUpdate,Me=ze.needsUpdate,ue=ze.type;J(),De.autoReset=L,ze.enabled=re,ze.autoUpdate=_e,ze.needsUpdate=Me,ze.type=ue}function he(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ce(L){let re=L.target;re.removeEventListener("dispose",Ce),ke(re)}function ke(L){Fe(L),me.remove(L)}function Fe(L){let re=me.get(L).programs;re!==void 0&&(re.forEach(function(_e){Oe.releaseProgram(_e)}),L.isShaderMaterial&&Oe.releaseShaderCache(L))}this.renderBufferDirect=function(L,re,_e,Me,ue,We){re===null&&(re=xe);let Ze=ue.isMesh&&ue.matrixWorld.determinant()<0,tt=Ut(L,re,_e,Me,ue);Te.setMaterial(Me,Ze);let nt=_e.index,ct=1;if(Me.wireframe===!0){if(nt=ge.getWireframeAttribute(_e),nt===void 0)return;ct=2}let dt=_e.drawRange,it=_e.attributes.position,Tt=dt.start*ct,Vt=(dt.start+dt.count)*ct;We!==null&&(Tt=Math.max(Tt,We.start*ct),Vt=Math.min(Vt,(We.start+We.count)*ct)),nt!==null?(Tt=Math.max(Tt,0),Vt=Math.min(Vt,nt.count)):it!=null&&(Tt=Math.max(Tt,0),Vt=Math.min(Vt,it.count));let qt=Vt-Tt;if(qt<0||qt===1/0)return;F.setup(ue,Me,tt,_e,nt);let Fn,Pt=N;if(nt!==null&&(Fn=le.get(nt),Pt=te,Pt.setIndex(Fn)),ue.isMesh)Me.wireframe===!0?(Te.setLineWidth(Me.wireframeLinewidth*He()),Pt.setMode(Z.LINES)):Pt.setMode(Z.TRIANGLES);else if(ue.isLine){let st=Me.linewidth;st===void 0&&(st=1),Te.setLineWidth(st*He()),ue.isLineSegments?Pt.setMode(Z.LINES):ue.isLineLoop?Pt.setMode(Z.LINE_LOOP):Pt.setMode(Z.LINE_STRIP)}else ue.isPoints?Pt.setMode(Z.POINTS):ue.isSprite&&Pt.setMode(Z.TRIANGLES);if(ue.isBatchedMesh)if(ue._multiDrawInstances!==null)Pt.renderMultiDrawInstances(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount,ue._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{let st=ue._multiDrawStarts,Yi=ue._multiDrawCounts,Lt=ue._multiDrawCount,yi=nt?le.get(nt).bytesPerElement:1,wr=me.get(Me).currentProgram.getUniforms();for(let Wn=0;Wn<Lt;Wn++)wr.setValue(Z,"_gl_DrawID",Wn),Pt.render(st[Wn]/yi,Yi[Wn])}else if(ue.isInstancedMesh)Pt.renderInstances(Tt,qt,ue.count);else if(_e.isInstancedBufferGeometry){let st=_e._maxInstanceCount!==void 0?_e._maxInstanceCount:1/0,Yi=Math.min(_e.instanceCount,st);Pt.renderInstances(Tt,qt,Yi)}else Pt.render(Tt,qt)};function Ie(L,re,_e){L.transparent===!0&&L.side===Nt&&L.forceSinglePass===!1?(L.side=sn,L.needsUpdate=!0,ut(L,re,_e),L.side=Ni,L.needsUpdate=!0,ut(L,re,_e),L.side=Nt):ut(L,re,_e)}this.compile=function(L,re,_e=null){_e===null&&(_e=L),d=Xe.get(_e),d.init(re),M.push(d),_e.traverseVisible(function(ue){ue.isLight&&ue.layers.test(re.layers)&&(d.pushLight(ue),ue.castShadow&&d.pushShadow(ue))}),L!==_e&&L.traverseVisible(function(ue){ue.isLight&&ue.layers.test(re.layers)&&(d.pushLight(ue),ue.castShadow&&d.pushShadow(ue))}),d.setupLights();let Me=new Set;return L.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;let We=ue.material;if(We)if(Array.isArray(We))for(let Ze=0;Ze<We.length;Ze++){let tt=We[Ze];Ie(tt,_e,ue),Me.add(tt)}else Ie(We,_e,ue),Me.add(We)}),M.pop(),d=null,Me},this.compileAsync=function(L,re,_e=null){let Me=this.compile(L,re,_e);return new Promise(ue=>{function We(){if(Me.forEach(function(Ze){me.get(Ze).currentProgram.isReady()&&Me.delete(Ze)}),Me.size===0){ue(L);return}setTimeout(We,10)}Ee.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let ce=null;function se(L){ce&&ce(L)}function pe(){Pe.stop()}function be(){Pe.start()}let Pe=new Wm;Pe.setAnimationLoop(se),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(L){ce=L,B.setAnimationLoop(L),L===null?Pe.stop():Pe.start()},B.addEventListener("sessionstart",pe),B.addEventListener("sessionend",be),this.render=function(L,re){if(re!==void 0&&re.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),re.parent===null&&re.matrixWorldAutoUpdate===!0&&re.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(re),re=B.getCamera()),L.isScene===!0&&L.onBeforeRender(y,L,re,w),d=Xe.get(L,M.length),d.init(re),M.push(d),z.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),U.setFromProjectionMatrix(z),W=this.localClippingEnabled,X=Ae.init(this.clippingPlanes,W),m=Ue.get(L,b.length),m.init(),b.push(m),B.enabled===!0&&B.isPresenting===!0){let We=y.xr.getDepthSensingMesh();We!==null&&ve(We,re,-1/0,y.sortObjects)}ve(L,re,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort($,oe),Ne=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,Ne&&$e.addToRenderList(m,L),this.info.render.frame++,X===!0&&Ae.beginShadows();let _e=d.state.shadowsArray;ze.render(_e,L,re),X===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let Me=m.opaque,ue=m.transmissive;if(d.setupLights(),re.isArrayCamera){let We=re.cameras;if(ue.length>0)for(let Ze=0,tt=We.length;Ze<tt;Ze++){let nt=We[Ze];Ge(Me,ue,L,nt)}Ne&&$e.render(L);for(let Ze=0,tt=We.length;Ze<tt;Ze++){let nt=We[Ze];Ve(m,L,nt,nt.viewport)}}else ue.length>0&&Ge(Me,ue,L,re),Ne&&$e.render(L),Ve(m,L,re);w!==null&&(P.updateMultisampleRenderTarget(w),P.updateRenderTargetMipmap(w)),L.isScene===!0&&L.onAfterRender(y,L,re),F.resetDefaultState(),_=-1,S=null,M.pop(),M.length>0?(d=M[M.length-1],X===!0&&Ae.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function ve(L,re,_e,Me){if(L.visible===!1)return;if(L.layers.test(re.layers)){if(L.isGroup)_e=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(re);else if(L.isLight)d.pushLight(L),L.castShadow&&d.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||U.intersectsSprite(L)){Me&&de.setFromMatrixPosition(L.matrixWorld).applyMatrix4(z);let Ze=fe.update(L),tt=L.material;tt.visible&&m.push(L,Ze,tt,_e,de.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||U.intersectsObject(L))){let Ze=fe.update(L),tt=L.material;if(Me&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),de.copy(L.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),de.copy(Ze.boundingSphere.center)),de.applyMatrix4(L.matrixWorld).applyMatrix4(z)),Array.isArray(tt)){let nt=Ze.groups;for(let ct=0,dt=nt.length;ct<dt;ct++){let it=nt[ct],Tt=tt[it.materialIndex];Tt&&Tt.visible&&m.push(L,Ze,Tt,_e,de.z,it)}}else tt.visible&&m.push(L,Ze,tt,_e,de.z,null)}}let We=L.children;for(let Ze=0,tt=We.length;Ze<tt;Ze++)ve(We[Ze],re,_e,Me)}function Ve(L,re,_e,Me){let ue=L.opaque,We=L.transmissive,Ze=L.transparent;d.setupLightsView(_e),X===!0&&Ae.setGlobalState(y.clippingPlanes,_e),Me&&Te.viewport(R.copy(Me)),ue.length>0&&qe(ue,re,_e),We.length>0&&qe(We,re,_e),Ze.length>0&&qe(Ze,re,_e),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Ge(L,re,_e,Me){if((_e.isScene===!0?_e.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Me.id]===void 0&&(d.state.transmissionRenderTarget[Me.id]=new Zt(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?pn:Ai,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));let We=d.state.transmissionRenderTarget[Me.id],Ze=Me.viewport||R;We.setSize(Ze.z,Ze.w);let tt=y.getRenderTarget();y.setRenderTarget(We),y.getClearColor(I),k=y.getClearAlpha(),k<1&&y.setClearColor(16777215,.5),y.clear(),Ne&&$e.render(_e);let nt=y.toneMapping;y.toneMapping=As;let ct=Me.viewport;if(Me.viewport!==void 0&&(Me.viewport=void 0),d.setupLightsView(Me),X===!0&&Ae.setGlobalState(y.clippingPlanes,Me),qe(L,_e,Me),P.updateMultisampleRenderTarget(We),P.updateRenderTargetMipmap(We),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let it=0,Tt=re.length;it<Tt;it++){let Vt=re[it],qt=Vt.object,Fn=Vt.geometry,Pt=Vt.material,st=Vt.group;if(Pt.side===Nt&&qt.layers.test(Me.layers)){let Yi=Pt.side;Pt.side=sn,Pt.needsUpdate=!0,Je(qt,_e,Me,Fn,Pt,st),Pt.side=Yi,Pt.needsUpdate=!0,dt=!0}}dt===!0&&(P.updateMultisampleRenderTarget(We),P.updateRenderTargetMipmap(We))}y.setRenderTarget(tt),y.setClearColor(I,k),ct!==void 0&&(Me.viewport=ct),y.toneMapping=nt}function qe(L,re,_e){let Me=re.isScene===!0?re.overrideMaterial:null;for(let ue=0,We=L.length;ue<We;ue++){let Ze=L[ue],tt=Ze.object,nt=Ze.geometry,ct=Me===null?Ze.material:Me,dt=Ze.group;tt.layers.test(_e.layers)&&Je(tt,re,_e,nt,ct,dt)}}function Je(L,re,_e,Me,ue,We){L.onBeforeRender(y,re,_e,Me,ue,We),L.modelViewMatrix.multiplyMatrices(_e.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ue.onBeforeRender(y,re,_e,Me,L,We),ue.transparent===!0&&ue.side===Nt&&ue.forceSinglePass===!1?(ue.side=sn,ue.needsUpdate=!0,y.renderBufferDirect(_e,re,Me,ue,L,We),ue.side=Ni,ue.needsUpdate=!0,y.renderBufferDirect(_e,re,Me,ue,L,We),ue.side=Nt):y.renderBufferDirect(_e,re,Me,ue,L,We),L.onAfterRender(y,re,_e,Me,ue,We)}function ut(L,re,_e){re.isScene!==!0&&(re=xe);let Me=me.get(L),ue=d.state.lights,We=d.state.shadowsArray,Ze=ue.state.version,tt=Oe.getParameters(L,ue.state,We,re,_e),nt=Oe.getProgramCacheKey(tt),ct=Me.programs;Me.environment=L.isMeshStandardMaterial?re.environment:null,Me.fog=re.fog,Me.envMap=(L.isMeshStandardMaterial?ee:A).get(L.envMap||Me.environment),Me.envMapRotation=Me.environment!==null&&L.envMap===null?re.environmentRotation:L.envMapRotation,ct===void 0&&(L.addEventListener("dispose",Ce),ct=new Map,Me.programs=ct);let dt=ct.get(nt);if(dt!==void 0){if(Me.currentProgram===dt&&Me.lightsStateVersion===Ze)return Mt(L,tt),dt}else tt.uniforms=Oe.getUniforms(L),L.onBeforeCompile(tt,y),dt=Oe.acquireProgram(tt,nt),ct.set(nt,dt),Me.uniforms=tt.uniforms;let it=Me.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(it.clippingPlanes=Ae.uniform),Mt(L,tt),Me.needsLights=yn(L),Me.lightsStateVersion=Ze,Me.needsLights&&(it.ambientLightColor.value=ue.state.ambient,it.lightProbe.value=ue.state.probe,it.directionalLights.value=ue.state.directional,it.directionalLightShadows.value=ue.state.directionalShadow,it.spotLights.value=ue.state.spot,it.spotLightShadows.value=ue.state.spotShadow,it.rectAreaLights.value=ue.state.rectArea,it.ltc_1.value=ue.state.rectAreaLTC1,it.ltc_2.value=ue.state.rectAreaLTC2,it.pointLights.value=ue.state.point,it.pointLightShadows.value=ue.state.pointShadow,it.hemisphereLights.value=ue.state.hemi,it.directionalShadowMap.value=ue.state.directionalShadowMap,it.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,it.spotShadowMap.value=ue.state.spotShadowMap,it.spotLightMatrix.value=ue.state.spotLightMatrix,it.spotLightMap.value=ue.state.spotLightMap,it.pointShadowMap.value=ue.state.pointShadowMap,it.pointShadowMatrix.value=ue.state.pointShadowMatrix),Me.currentProgram=dt,Me.uniformsList=null,dt}function xt(L){if(L.uniformsList===null){let re=L.currentProgram.getUniforms();L.uniformsList=jr.seqWithValue(re.seq,L.uniforms)}return L.uniformsList}function Mt(L,re){let _e=me.get(L);_e.outputColorSpace=re.outputColorSpace,_e.batching=re.batching,_e.batchingColor=re.batchingColor,_e.instancing=re.instancing,_e.instancingColor=re.instancingColor,_e.instancingMorph=re.instancingMorph,_e.skinning=re.skinning,_e.morphTargets=re.morphTargets,_e.morphNormals=re.morphNormals,_e.morphColors=re.morphColors,_e.morphTargetsCount=re.morphTargetsCount,_e.numClippingPlanes=re.numClippingPlanes,_e.numIntersection=re.numClipIntersection,_e.vertexAlphas=re.vertexAlphas,_e.vertexTangents=re.vertexTangents,_e.toneMapping=re.toneMapping}function Ut(L,re,_e,Me,ue){re.isScene!==!0&&(re=xe),P.resetTextureUnits();let We=re.fog,Ze=Me.isMeshStandardMaterial?re.environment:null,tt=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:An,nt=(Me.isMeshStandardMaterial?ee:A).get(Me.envMap||Ze),ct=Me.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,dt=!!_e.attributes.tangent&&(!!Me.normalMap||Me.anisotropy>0),it=!!_e.morphAttributes.position,Tt=!!_e.morphAttributes.normal,Vt=!!_e.morphAttributes.color,qt=As;Me.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(qt=y.toneMapping);let Fn=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,Pt=Fn!==void 0?Fn.length:0,st=me.get(Me),Yi=d.state.lights;if(X===!0&&(W===!0||L!==S)){let si=L===S&&Me.id===_;Ae.setState(Me,L,si)}let Lt=!1;Me.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Yi.state.version||st.outputColorSpace!==tt||ue.isBatchedMesh&&st.batching===!1||!ue.isBatchedMesh&&st.batching===!0||ue.isBatchedMesh&&st.batchingColor===!0&&ue.colorTexture===null||ue.isBatchedMesh&&st.batchingColor===!1&&ue.colorTexture!==null||ue.isInstancedMesh&&st.instancing===!1||!ue.isInstancedMesh&&st.instancing===!0||ue.isSkinnedMesh&&st.skinning===!1||!ue.isSkinnedMesh&&st.skinning===!0||ue.isInstancedMesh&&st.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&st.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&st.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&st.instancingMorph===!1&&ue.morphTexture!==null||st.envMap!==nt||Me.fog===!0&&st.fog!==We||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==Ae.numPlanes||st.numIntersection!==Ae.numIntersection)||st.vertexAlphas!==ct||st.vertexTangents!==dt||st.morphTargets!==it||st.morphNormals!==Tt||st.morphColors!==Vt||st.toneMapping!==qt||st.morphTargetsCount!==Pt)&&(Lt=!0):(Lt=!0,st.__version=Me.version);let yi=st.currentProgram;Lt===!0&&(yi=ut(Me,re,ue));let wr=!1,Wn=!1,Fo=!1,Yt=yi.getUniforms(),Li=st.uniforms;if(Te.useProgram(yi.program)&&(wr=!0,Wn=!0,Fo=!0),Me.id!==_&&(_=Me.id,Wn=!0),wr||S!==L){Te.buffers.depth.getReversed()?(Y.copy(L.projectionMatrix),iy(Y),sy(Y),Yt.setValue(Z,"projectionMatrix",Y)):Yt.setValue(Z,"projectionMatrix",L.projectionMatrix),Yt.setValue(Z,"viewMatrix",L.matrixWorldInverse);let xs=Yt.map.cameraPosition;xs!==void 0&&xs.setValue(Z,G.setFromMatrixPosition(L.matrixWorld)),we.logarithmicDepthBuffer&&Yt.setValue(Z,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(Me.isMeshPhongMaterial||Me.isMeshToonMaterial||Me.isMeshLambertMaterial||Me.isMeshBasicMaterial||Me.isMeshStandardMaterial||Me.isShaderMaterial)&&Yt.setValue(Z,"isOrthographic",L.isOrthographicCamera===!0),S!==L&&(S=L,Wn=!0,Fo=!0)}if(ue.isSkinnedMesh){Yt.setOptional(Z,ue,"bindMatrix"),Yt.setOptional(Z,ue,"bindMatrixInverse");let si=ue.skeleton;si&&(si.boneTexture===null&&si.computeBoneTexture(),Yt.setValue(Z,"boneTexture",si.boneTexture,P))}ue.isBatchedMesh&&(Yt.setOptional(Z,ue,"batchingTexture"),Yt.setValue(Z,"batchingTexture",ue._matricesTexture,P),Yt.setOptional(Z,ue,"batchingIdTexture"),Yt.setValue(Z,"batchingIdTexture",ue._indirectTexture,P),Yt.setOptional(Z,ue,"batchingColorTexture"),ue._colorsTexture!==null&&Yt.setValue(Z,"batchingColorTexture",ue._colorsTexture,P));let Bo=_e.morphAttributes;if((Bo.position!==void 0||Bo.normal!==void 0||Bo.color!==void 0)&&Qe.update(ue,_e,yi),(Wn||st.receiveShadow!==ue.receiveShadow)&&(st.receiveShadow=ue.receiveShadow,Yt.setValue(Z,"receiveShadow",ue.receiveShadow)),Me.isMeshGouraudMaterial&&Me.envMap!==null&&(Li.envMap.value=nt,Li.flipEnvMap.value=nt.isCubeTexture&&nt.isRenderTargetTexture===!1?-1:1),Me.isMeshStandardMaterial&&Me.envMap===null&&re.environment!==null&&(Li.envMapIntensity.value=re.environmentIntensity),Wn&&(Yt.setValue(Z,"toneMappingExposure",y.toneMappingExposure),st.needsLights&&Ct(Li,Fo),We&&Me.fog===!0&&Re.refreshFogUniforms(Li,We),Re.refreshMaterialUniforms(Li,Me,V,Q,d.state.transmissionRenderTarget[L.id]),jr.upload(Z,xt(st),Li,P)),Me.isShaderMaterial&&Me.uniformsNeedUpdate===!0&&(jr.upload(Z,xt(st),Li,P),Me.uniformsNeedUpdate=!1),Me.isSpriteMaterial&&Yt.setValue(Z,"center",ue.center),Yt.setValue(Z,"modelViewMatrix",ue.modelViewMatrix),Yt.setValue(Z,"normalMatrix",ue.normalMatrix),Yt.setValue(Z,"modelMatrix",ue.matrixWorld),Me.isShaderMaterial||Me.isRawShaderMaterial){let si=Me.uniformsGroups;for(let xs=0,vs=si.length;xs<vs;xs++){let op=si[xs];C.update(op,yi),C.bind(op,yi)}}return yi}function Ct(L,re){L.ambientLightColor.needsUpdate=re,L.lightProbe.needsUpdate=re,L.directionalLights.needsUpdate=re,L.directionalLightShadows.needsUpdate=re,L.pointLights.needsUpdate=re,L.pointLightShadows.needsUpdate=re,L.spotLights.needsUpdate=re,L.spotLightShadows.needsUpdate=re,L.rectAreaLights.needsUpdate=re,L.hemisphereLights.needsUpdate=re}function yn(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(L,re,_e){me.get(L.texture).__webglTexture=re,me.get(L.depthTexture).__webglTexture=_e;let Me=me.get(L);Me.__hasExternalTextures=!0,Me.__autoAllocateDepthBuffer=_e===void 0,Me.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Me.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,re){let _e=me.get(L);_e.__webglFramebuffer=re,_e.__useDefaultFramebuffer=re===void 0},this.setRenderTarget=function(L,re=0,_e=0){w=L,E=re,v=_e;let Me=!0,ue=null,We=!1,Ze=!1;if(L){let nt=me.get(L);if(nt.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(Z.FRAMEBUFFER,null),Me=!1;else if(nt.__webglFramebuffer===void 0)P.setupRenderTarget(L);else if(nt.__hasExternalTextures)P.rebindTextures(L,me.get(L.texture).__webglTexture,me.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let it=L.depthTexture;if(nt.__boundDepthTexture!==it){if(it!==null&&me.has(it)&&(L.width!==it.image.width||L.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(L)}}let ct=L.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Ze=!0);let dt=me.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(dt[re])?ue=dt[re][_e]:ue=dt[re],We=!0):L.samples>0&&P.useMultisampledRTT(L)===!1?ue=me.get(L).__webglMultisampledFramebuffer:Array.isArray(dt)?ue=dt[_e]:ue=dt,R.copy(L.viewport),D.copy(L.scissor),O=L.scissorTest}else R.copy(ie).multiplyScalar(V).floor(),D.copy(ye).multiplyScalar(V).floor(),O=Se;if(Te.bindFramebuffer(Z.FRAMEBUFFER,ue)&&Me&&Te.drawBuffers(L,ue),Te.viewport(R),Te.scissor(D),Te.setScissorTest(O),We){let nt=me.get(L.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+re,nt.__webglTexture,_e)}else if(Ze){let nt=me.get(L.texture),ct=re||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,nt.__webglTexture,_e||0,ct)}_=-1},this.readRenderTargetPixels=function(L,re,_e,Me,ue,We,Ze){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=me.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ze!==void 0&&(tt=tt[Ze]),tt){Te.bindFramebuffer(Z.FRAMEBUFFER,tt);try{let nt=L.texture,ct=nt.format,dt=nt.type;if(!we.textureFormatReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}re>=0&&re<=L.width-Me&&_e>=0&&_e<=L.height-ue&&Z.readPixels(re,_e,Me,ue,j.convert(ct),j.convert(dt),We)}finally{let nt=w!==null?me.get(w).__webglFramebuffer:null;Te.bindFramebuffer(Z.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(L,re,_e,Me,ue,We,Ze){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=me.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ze!==void 0&&(tt=tt[Ze]),tt){let nt=L.texture,ct=nt.format,dt=nt.type;if(!we.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(re>=0&&re<=L.width-Me&&_e>=0&&_e<=L.height-ue){Te.bindFramebuffer(Z.FRAMEBUFFER,tt);let it=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,it),Z.bufferData(Z.PIXEL_PACK_BUFFER,We.byteLength,Z.STREAM_READ),Z.readPixels(re,_e,Me,ue,j.convert(ct),j.convert(dt),0);let Tt=w!==null?me.get(w).__webglFramebuffer:null;Te.bindFramebuffer(Z.FRAMEBUFFER,Tt);let Vt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await ny(Z,Vt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,it),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,We),Z.deleteBuffer(it),Z.deleteSync(Vt),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,re=null,_e=0){L.isTexture!==!0&&(Ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),re=arguments[0]||null,L=arguments[1]);let Me=Math.pow(2,-_e),ue=Math.floor(L.image.width*Me),We=Math.floor(L.image.height*Me),Ze=re!==null?re.x:0,tt=re!==null?re.y:0;P.setTexture2D(L,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,_e,0,0,Ze,tt,ue,We),Te.unbindTexture()},this.copyTextureToTexture=function(L,re,_e=null,Me=null,ue=0){L.isTexture!==!0&&(Ko("WebGLRenderer: copyTextureToTexture function signature has changed."),Me=arguments[0]||null,L=arguments[1],re=arguments[2],ue=arguments[3]||0,_e=null);let We,Ze,tt,nt,ct,dt,it,Tt,Vt,qt=L.isCompressedTexture?L.mipmaps[ue]:L.image;_e!==null?(We=_e.max.x-_e.min.x,Ze=_e.max.y-_e.min.y,tt=_e.isBox3?_e.max.z-_e.min.z:1,nt=_e.min.x,ct=_e.min.y,dt=_e.isBox3?_e.min.z:0):(We=qt.width,Ze=qt.height,tt=qt.depth||1,nt=0,ct=0,dt=0),Me!==null?(it=Me.x,Tt=Me.y,Vt=Me.z):(it=0,Tt=0,Vt=0);let Fn=j.convert(re.format),Pt=j.convert(re.type),st;re.isData3DTexture?(P.setTexture3D(re,0),st=Z.TEXTURE_3D):re.isDataArrayTexture||re.isCompressedArrayTexture?(P.setTexture2DArray(re,0),st=Z.TEXTURE_2D_ARRAY):(P.setTexture2D(re,0),st=Z.TEXTURE_2D),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,re.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,re.unpackAlignment);let Yi=Z.getParameter(Z.UNPACK_ROW_LENGTH),Lt=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),yi=Z.getParameter(Z.UNPACK_SKIP_PIXELS),wr=Z.getParameter(Z.UNPACK_SKIP_ROWS),Wn=Z.getParameter(Z.UNPACK_SKIP_IMAGES);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,qt.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,qt.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,nt),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,ct),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,dt);let Fo=L.isDataArrayTexture||L.isData3DTexture,Yt=re.isDataArrayTexture||re.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){let Li=me.get(L),Bo=me.get(re),si=me.get(Li.__renderTarget),xs=me.get(Bo.__renderTarget);Te.bindFramebuffer(Z.READ_FRAMEBUFFER,si.__webglFramebuffer),Te.bindFramebuffer(Z.DRAW_FRAMEBUFFER,xs.__webglFramebuffer);for(let vs=0;vs<tt;vs++)Fo&&Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,me.get(L).__webglTexture,ue,dt+vs),L.isDepthTexture?(Yt&&Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,me.get(re).__webglTexture,ue,Vt+vs),Z.blitFramebuffer(nt,ct,We,Ze,it,Tt,We,Ze,Z.DEPTH_BUFFER_BIT,Z.NEAREST)):Yt?Z.copyTexSubImage3D(st,ue,it,Tt,Vt+vs,nt,ct,We,Ze):Z.copyTexSubImage2D(st,ue,it,Tt,Vt+vs,nt,ct,We,Ze);Te.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Te.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Yt?L.isDataTexture||L.isData3DTexture?Z.texSubImage3D(st,ue,it,Tt,Vt,We,Ze,tt,Fn,Pt,qt.data):re.isCompressedArrayTexture?Z.compressedTexSubImage3D(st,ue,it,Tt,Vt,We,Ze,tt,Fn,qt.data):Z.texSubImage3D(st,ue,it,Tt,Vt,We,Ze,tt,Fn,Pt,qt):L.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,ue,it,Tt,We,Ze,Fn,Pt,qt.data):L.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,ue,it,Tt,qt.width,qt.height,Fn,qt.data):Z.texSubImage2D(Z.TEXTURE_2D,ue,it,Tt,We,Ze,Fn,Pt,qt);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Yi),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Lt),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,yi),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,wr),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,Wn),ue===0&&re.generateMipmaps&&Z.generateMipmap(st),Te.unbindTexture()},this.copyTextureToTexture3D=function(L,re,_e=null,Me=null,ue=0){return L.isTexture!==!0&&(Ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),_e=arguments[0]||null,Me=arguments[1]||null,L=arguments[2],re=arguments[3],ue=arguments[4]||0),Ko('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,re,_e,Me,ue)},this.initRenderTarget=function(L){me.get(L).__webglFramebuffer===void 0&&P.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?P.setTextureCube(L,0):L.isData3DTexture?P.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?P.setTexture2DArray(L,0):P.setTexture2D(L,0),Te.unbindTexture()},this.resetState=function(){E=0,v=0,w=null,Te.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return is}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}},lo=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var oa=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},co=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Th,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Pn=new H,ur=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array),r=Ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},uo=class extends wn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kr,Go=new H,Hr=new H,Vr=new H,Gr=new Ke,Wo=new Ke,Zm=new je,dl=new H,Xo=new H,pl=new H,am=new Ke,Fu=new Ke,lm=new Ke,aa=class extends Wt{constructor(e=new uo){if(super(),this.isSprite=!0,this.type="Sprite",kr===void 0){kr=new ht;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new co(t,5);kr.setIndex([0,1,2,0,2,3]),kr.setAttribute("position",new ur(i,3,0,!1)),kr.setAttribute("uv",new ur(i,2,3,!1))}this.geometry=kr,this.material=e,this.center=new Ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hr.setFromMatrixScale(this.matrixWorld),Zm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Vr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ml(dl.set(-.5,-.5,0),Vr,o,Hr,s,r),ml(Xo.set(.5,-.5,0),Vr,o,Hr,s,r),ml(pl.set(.5,.5,0),Vr,o,Hr,s,r),am.set(0,0),Fu.set(1,0),lm.set(1,1);let a=e.ray.intersectTriangle(dl,Xo,pl,!1,Go);if(a===null&&(ml(Xo.set(-.5,.5,0),Vr,o,Hr,s,r),Fu.set(0,1),a=e.ray.intersectTriangle(dl,pl,Xo,!1,Go),a===null))return;let l=e.ray.origin.distanceTo(Go);l<e.near||l>e.far||t.push({distance:l,point:Go.clone(),uv:ts.getInterpolation(Go,dl,Xo,pl,am,Fu,lm,new Ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ml(n,e,t,i,s,r){Gr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Wo.x=r*Gr.x-s*Gr.y,Wo.y=s*Gr.x+r*Gr.y):Wo.copy(Gr),n.copy(e),n.x+=Wo.x,n.y+=Wo.y,n.applyMatrix4(Zm)}var cm=new H,um=new wt,hm=new wt,jb=new H,fm=new je,gl=new H,Bu=new Yn,dm=new je,zu=new so,kl=class extends et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=up,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ai),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,gl),this.boundingBox.expandByPoint(gl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,gl),this.boundingSphere.expandByPoint(gl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bu.copy(this.boundingSphere),Bu.applyMatrix4(s),e.ray.intersectsSphere(Bu)!==!1&&(dm.copy(s).invert(),zu.copy(e.ray).applyMatrix4(dm),!(this.boundingBox!==null&&zu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,zu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===up?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Av?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;um.fromBufferAttribute(s.attributes.skinIndex,e),hm.fromBufferAttribute(s.attributes.skinWeight,e),cm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=hm.getComponent(r);if(o!==0){let a=um.getComponent(r);fm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(jb.copy(cm).applyMatrix4(fm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},la=class extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ls=class extends fn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Jt,u=Jt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pm=new je,Jb=new je,Hl=class n{constructor(e=[],t=[]){this.uuid=Ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new je;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Jb;pm.multiplyMatrices(a,t[r]),pm.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ls(t,e,e,kn,wi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new la),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},hr=class extends yt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Wr=new je,mm=new je,xl=[],gm=new ai,Qb=new je,qo=new et,Yo=new Yn,Tn=class extends et{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Qb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Wr),gm.copy(e.boundingBox).applyMatrix4(Wr),this.boundingBox.union(gm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Wr),Yo.copy(e.boundingSphere).applyMatrix4(Wr),this.boundingSphere.union(Yo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(qo.geometry=this.geometry,qo.material=this.material,qo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yo.copy(this.boundingSphere),Yo.applyMatrix4(i),e.ray.intersectsSphere(Yo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Wr),mm.multiplyMatrices(i,Wr),qo.matrixWorld=mm,qo.raycast(e,xl);for(let o=0,a=xl.length;o<a;o++){let l=xl[o];l.instanceId=r,l.object=this,t.push(l)}xl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ls(new Float32Array(s*this.count),s,this.count,df,wi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Oi=class extends wn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vl=new H,Gl=new H,xm=new je,$o=new so,vl=new Yn,ku=new H,vm=new H,ho=class extends Wt{constructor(e=new ht,t=new Oi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Vl.fromBufferAttribute(t,s-1),Gl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Vl.distanceTo(Gl);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vl.copy(i.boundingSphere),vl.applyMatrix4(s),vl.radius+=r,e.ray.intersectsSphere(vl)===!1)return;xm.copy(s).invert(),$o.copy(e.ray).applyMatrix4(xm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let d=u.getX(x),b=u.getX(x+1),M=yl(this,e,$o,l,d,b);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(p),d=yl(this,e,$o,l,x,m);d&&t.push(d)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let d=yl(this,e,$o,l,x,x+1);d&&t.push(d)}if(this.isLineLoop){let x=yl(this,e,$o,l,g-1,p);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yl(n,e,t,i,s,r){let o=n.geometry.attributes.position;if(Vl.fromBufferAttribute(o,s),Gl.fromBufferAttribute(o,r),t.distanceSqToSegment(Vl,Gl,ku,vm)>i)return;ku.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(ku);if(!(l<e.near||l>e.far))return{distance:l,point:vm.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var ym=new H,_m=new H,rs=class extends ho{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ym.fromBufferAttribute(t,s),_m.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ym.distanceTo(_m);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Wl=class extends ho{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},fr=class extends wn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mm=new je,Gh=new so,_l=new Yn,Ml=new H,Ds=class extends Wt{constructor(e=new ht,t=new fr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_l.copy(i.boundingSphere),_l.applyMatrix4(s),_l.radius+=r,e.ray.intersectsSphere(_l)===!1)return;Mm.copy(s).invert(),Gh.copy(e.ray).applyMatrix4(Mm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,x=p;g<x;g++){let m=c.getX(g);Ml.fromBufferAttribute(h,m),bm(Ml,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,x=p;g<x;g++)Ml.fromBufferAttribute(h,g),bm(Ml,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function bm(n,e,t,i,s,r,o){let a=Gh.distanceSqToPoint(n);if(a<t){let l=new H;Gh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var li=class extends fn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xl=class n extends ht{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new H,u=new Ke;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let p=i+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(a,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Qt=class n extends ht{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],g=0,x=[],m=i/2,d=0;b(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new rt(h,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(p,2));function b(){let y=new H,T=new H,E=0,v=(t-e)/i;for(let w=0;w<=r;w++){let _=[],S=w/r,R=S*(t-e)+e;for(let D=0;D<=s;D++){let O=D/s,I=O*l+a,k=Math.sin(I),q=Math.cos(I);T.x=R*k,T.y=-S*i+m,T.z=R*q,h.push(T.x,T.y,T.z),y.set(k,v,q).normalize(),f.push(y.x,y.y,y.z),p.push(O,1-S),_.push(g++)}x.push(_)}for(let w=0;w<s;w++)for(let _=0;_<r;_++){let S=x[_][w],R=x[_+1][w],D=x[_+1][w+1],O=x[_][w+1];(e>0||_!==0)&&(u.push(S,R,O),E+=3),(t>0||_!==r-1)&&(u.push(R,D,O),E+=3)}c.addGroup(d,E,0),d+=E}function M(y){let T=g,E=new Ke,v=new H,w=0,_=y===!0?e:t,S=y===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),g++;let R=g;for(let D=0;D<=s;D++){let I=D/s*l+a,k=Math.cos(I),q=Math.sin(I);v.x=_*q,v.y=m*S,v.z=_*k,h.push(v.x,v.y,v.z),f.push(0,S,0),E.x=k*.5+.5,E.y=q*.5*S+.5,p.push(E.x,E.y),g++}for(let D=0;D<s;D++){let O=T+D,I=R+D;y===!0?u.push(I,I+1,O):u.push(I+1,I,O),w+=3}c.addGroup(d,w,y===!0?1:2),d+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$n=class n extends Qt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ql=class n extends ht{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let M=new H,y=new H,T=new H;for(let E=0;E<t.length;E+=3)p(t[E+0],M),p(t[E+1],y),p(t[E+2],T),l(M,y,T,b)}function l(b,M,y,T){let E=T+1,v=[];for(let w=0;w<=E;w++){v[w]=[];let _=b.clone().lerp(y,w/E),S=M.clone().lerp(y,w/E),R=E-w;for(let D=0;D<=R;D++)D===0&&w===E?v[w][D]=_:v[w][D]=_.clone().lerp(S,D/R)}for(let w=0;w<E;w++)for(let _=0;_<2*(E-w)-1;_++){let S=Math.floor(_/2);_%2===0?(f(v[w][S+1]),f(v[w+1][S]),f(v[w][S])):(f(v[w][S+1]),f(v[w+1][S+1]),f(v[w+1][S]))}}function c(b){let M=new H;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(b),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function u(){let b=new H;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];let y=m(b)/2/Math.PI+.5,T=d(b)/Math.PI+.5;o.push(y,1-T)}g(),h()}function h(){for(let b=0;b<o.length;b+=6){let M=o[b+0],y=o[b+2],T=o[b+4],E=Math.max(M,y,T),v=Math.min(M,y,T);E>.9&&v<.1&&(M<.2&&(o[b+0]+=1),y<.2&&(o[b+2]+=1),T<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function p(b,M){let y=b*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function g(){let b=new H,M=new H,y=new H,T=new H,E=new Ke,v=new Ke,w=new Ke;for(let _=0,S=0;_<r.length;_+=9,S+=6){b.set(r[_+0],r[_+1],r[_+2]),M.set(r[_+3],r[_+4],r[_+5]),y.set(r[_+6],r[_+7],r[_+8]),E.set(o[S+0],o[S+1]),v.set(o[S+2],o[S+3]),w.set(o[S+4],o[S+5]),T.copy(b).add(M).add(y).divideScalar(3);let R=m(T);x(E,S+0,b,R),x(v,S+2,M,R),x(w,S+4,y,R)}}function x(b,M,y,T){T<0&&b.x===1&&(o[M]=b.x-1),y.x===0&&y.z===0&&(o[M]=T/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var bl=new H,Sl=new H,Hu=new H,El=new ts,Yl=class extends ht{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Zr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:d}=El;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),El.getNormal(Hu),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){let M=(b+1)%3,y=h[b],T=h[M],E=El[u[b]],v=El[u[M]],w=`${y}_${T}`,_=`${T}_${y}`;_ in f&&f[_]?(Hu.dot(f[_].normal)<=r&&(p.push(E.x,E.y,E.z),p.push(v.x,v.y,v.z)),f[_]=null):w in f||(f[w]={index0:c[b],index1:c[M],normal:Hu.clone()})}}for(let g in f)if(f[g]){let{index0:x,index1:m}=f[g];bl.fromBufferAttribute(a,x),Sl.fromBufferAttribute(a,m),p.push(bl.x,bl.y,bl.z),p.push(Sl.x,Sl.y,Sl.z)}this.setAttribute("position",new rt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var Zn=class n extends ql{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ca=class n extends ql{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},$l=class n extends ht{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,f=(t-e)/s,p=new H,g=new Ke;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let d=r+m/i*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let x=0;x<s;x++){let m=x*(i+1);for(let d=0;d<i;d++){let b=d+m,M=b,y=b+i+1,T=b+i+2,E=b+1;a.push(M,y,E),a.push(y,T,E)}}this.setIndex(a),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ns=class n extends ht{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new H,f=new H,p=[],g=[],x=[],m=[];for(let d=0;d<=i;d++){let b=[],M=d/i,y=0;d===0&&o===0?y=.5/t:d===i&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){let E=T/t;h.x=-e*Math.cos(s+E*r)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(s+E*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(E+y,1-M),b.push(c++)}u.push(b)}for(let d=0;d<i;d++)for(let b=0;b<t;b++){let M=u[d][b+1],y=u[d][b],T=u[d+1][b],E=u[d+1][b+1];(d!==0||o>0)&&p.push(M,y,E),(d!==i-1||l<Math.PI)&&p.push(y,T,E)}this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Zl=class n extends ht{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new H,h=new H,f=new H;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let x=g/s*r,m=p/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,b=(s+1)*p+g;o.push(x,m,b),o.push(m,d,b)}this.setIndex(o),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Kl=class extends bt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},ot=class extends wn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cc,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Kn=class extends ot{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return En(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var jl=class extends wn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cc,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},jn=class extends wn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cc,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function wl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function eS(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function tS(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Sm(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Km(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Us=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wh=class extends Us{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hp,endingEnd:hp}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case fp:r=e,a=2*t-i;break;case dp:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case fp:o=e,l=2*i-t;break;case dp:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,b=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,M=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let T=0;T!==a;++T)r[T]=d*o[u+T]+b*o[c+T]+M*o[l+T]+y*o[h+T];return r}},Xh=class extends Us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},qh=class extends Us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ci=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wl(t,this.TimeBufferType),this.values=wl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:wl(e.times,Array),values:wl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new qh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case to:t=this.InterpolantFactoryMethodDiscrete;break;case no:t=this.InterpolantFactoryMethodLinear;break;case uu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return no;case this.InterpolantFactoryMethodSmooth:return uu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&eS(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===uu,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,f=h-i,p=h+i;for(let g=0;g!==i;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=no;var Os=class extends ci{constructor(e,t,i){super(e,t,i)}};Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=to;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends ci{};Jl.prototype.ValueTypeName="color";var os=class extends ci{};os.prototype.ValueTypeName="number";var Yh=class extends Us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)an.slerpFlat(r,0,o,c-a,o,c,l);return r}},as=class extends ci{InterpolantFactoryMethodLinear(e){return new Yh(this.times,this.values,this.getValueSize(),e)}};as.prototype.ValueTypeName="quaternion";as.prototype.InterpolantFactoryMethodSmooth=void 0;var Fs=class extends ci{constructor(e,t,i){super(e,t,i)}};Fs.prototype.ValueTypeName="string";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=to;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends ci{};ls.prototype.ValueTypeName="vector";var Ql=class{constructor(e="",t=-1,i=[],s=Rv){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ti(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(iS(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(ci.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=tS(l);l=Sm(l,1,u),c=Sm(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new os(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,f,p,g,x){if(p.length!==0){let m=[],d=[];Km(p,m,d,g),m.length!==0&&x.push(new h(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)p[f[g].morphTargets[x]]=-1;for(let x in p){let m=[],d=[];for(let b=0;b!==f[g].morphTargets.length;++b){let M=f[g];m.push(M.time),d.push(M.morphTarget===x?1:0)}s.push(new os(".morphTargetInfluence["+x+"]",m,d))}l=p.length*o}else{let p=".bones["+t[h].name+"]";i(ls,p+".position",f,"pos",s),i(as,p+".quaternion",f,"rot",s),i(ls,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function nS(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return os;case"vector":case"vector2":case"vector3":case"vector4":return ls;case"color":return Jl;case"quaternion":return as;case"bool":case"boolean":return Os;case"string":return Fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function iS(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=nS(n.type);if(n.times===void 0){let t=[],i=[];Km(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Ts={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},$h=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},sS=new $h,cs=class{constructor(e){this.manager=e!==void 0?e:sS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};cs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qi={},Zh=class extends Error{constructor(e,t){super(e),this.response=t}},ua=class extends cs{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ts.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Qi[e]!==void 0){Qi[e].push({onLoad:t,onProgress:i,onError:s});return}Qi[e]=[],Qi[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Qi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,x=0,m=new ReadableStream({start(d){b();function b(){h.read().then(({done:M,value:y})=>{if(M)d.close();else{x+=y.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let E=0,v=u.length;E<v;E++){let w=u[E];w.onProgress&&w.onProgress(T)}d.enqueue(y),b()}},M=>{d.error(M)})}}});return new Response(m)}else throw new Zh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ts.add(e,c);let u=Qi[e];delete Qi[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=Qi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Qi[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Kh=class extends cs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ts.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=sa("img");function l(){u(),Ts.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var ec=class extends cs{constructor(e){super(e)}load(e,t,i,s){let r=new fn,o=new Kh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},fo=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},po=class extends fo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Vu=new je,Em=new H,wm=new H,ha=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ra,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Em.setFromMatrixPosition(e.matrixWorld),t.position.copy(Em),wm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wm),t.updateMatrixWorld(),Vu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},jh=class extends ha{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=io*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},mo=class extends fo{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new jh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Tm=new je,Zo=new H,Gu=new H,Jh=class extends ha{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Zo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Zo),Gu.copy(i.position),Gu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Gu),i.updateMatrixWorld(),s.makeTranslation(-Zo.x,-Zo.y,-Zo.z),Tm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tm)}},tc=class extends fo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Jh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Qh=class extends ha{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fi=class extends fo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Qh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Bs=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var nc=class extends cs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ts.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ts.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ts.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ts.add(e,l),r.manager.itemStart(e)}};var ic=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Am(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Am();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Am(){return performance.now()}var yf="\\[\\]\\.:\\/",rS=new RegExp("["+yf+"]","g"),_f="[^"+yf+"]",oS="[^"+yf.replace("\\.","")+"]",aS=/((?:WC+[\/:])*)/.source.replace("WC",_f),lS=/(WCOD+)?/.source.replace("WCOD",oS),cS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_f),uS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_f),hS=new RegExp("^"+aS+lS+cS+uS+"$"),fS=["material","materials","bones","map"],ef=class{constructor(e,t,i){let s=i||Gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Gt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rS,"")}static parseTrackName(e){let t=hS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);fS.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Gt.Composite=ef;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var n2=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var ma=class n extends et{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new jt;let i=this,s=t.color!==void 0?new Le(t.color):new Le(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Si,h=new H,f=new H,p=new H,g=new je,x=new H(0,0,-1),m=new wt,d=new H,b=new H,M=new wt,y=new je,T=this.camera,E=new Zt(r,o,{samples:c,type:pn}),v=new bt({name:l.name!==void 0?l.name:"unspecified",uniforms:Rn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});v.uniforms.tDiffuse.value=E.texture,v.uniforms.color.value=s,v.uniforms.textureMatrix.value=y,this.material=v,this.onBeforeRender=function(w,_,S){if(f.setFromMatrixPosition(i.matrixWorld),p.setFromMatrixPosition(S.matrixWorld),g.extractRotation(i.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),d.subVectors(f,p),d.dot(h)>0)return;d.reflect(h).negate(),d.add(f),g.extractRotation(S.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(p),b.subVectors(f,x),b.reflect(h).negate(),b.add(f),T.position.copy(d),T.up.set(0,1,0),T.up.applyMatrix4(g),T.up.reflect(h),T.lookAt(b),T.far=S.far,T.updateMatrixWorld(),T.projectionMatrix.copy(S.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(T.projectionMatrix),y.multiply(T.matrixWorldInverse),y.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(T.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let R=T.projectionMatrix;M.x=(Math.sign(m.x)+R.elements[8])/R.elements[0],M.y=(Math.sign(m.y)+R.elements[9])/R.elements[5],M.z=-1,M.w=(1+R.elements[10])/R.elements[14],m.multiplyScalar(2/m.dot(M)),R.elements[2]=m.x,R.elements[6]=m.y,R.elements[10]=m.z+1-a,R.elements[14]=m.w,i.visible=!1;let D=w.getRenderTarget(),O=w.xr.enabled,I=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(E),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(_,T),w.xr.enabled=O,w.shadowMap.autoUpdate=I,w.setRenderTarget(D);let k=S.viewport;k!==void 0&&w.state.viewport(k),i.visible=!0},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),i.material.dispose()}}};ma.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var fc=[25,18,15,12,10,8,6,4],dr={maxSpeed:80,accel:26,brake:30,steerRate:1.7,steerHighSpeed:.75,grip:1,wetGrip:.78,driftBonus:1.6,airControl:.12,airStability:1,landing:1,boostPower:1.22,boostDuration:2.2,boostCharges:3,offroadDrag:1,wallLoss:.25,steerNoise:0,slipstream:1},zs={sunset:{id:"sunset",name:"Fin d'apr\xE8s-midi",grip:1,wet:0,rain:0,wind:0,sheen:.9,skyTop:8825052,skyHorizon:15785172,fogColor:14074548,fogDensity:52e-5,sunColor:16756316,sunIntensity:4.6,sunDir:[-.5,.21,-.62],hemiSky:12899050,hemiGround:9399366,hemiIntensity:.8,seaColor:2786996,night:!1,bloom:.34},sicily:{id:"sicily",name:"Apr\xE8s-midi sicilien",grip:1,wet:0,rain:0,wind:.1,sheen:.2,skyTop:4885468,skyHorizon:13623792,fogColor:13425124,fogDensity:5e-4,sunColor:16773854,sunIntensity:3.3,sunDir:[-.45,.62,-.4],hemiSky:12375282,hemiGround:8156256,hemiIntensity:.85,seaColor:1994664,night:!1,bloom:.25},rain:{id:"rain",name:"Nuit pluvieuse",grip:.8,wet:1,rain:1,wind:.6,skyTop:329231,skyHorizon:1711933,fogColor:1317427,fogDensity:.0028,sunColor:7375103,sunIntensity:.7,sunDir:[.4,.7,.3],hemiSky:3820170,hemiGround:1052696,hemiIntensity:.75,seaColor:662067,night:!0,bloom:1},fog:{id:"fog",name:"Brume matinale",grip:.92,wet:.35,rain:0,wind:.2,skyTop:10467535,skyHorizon:15262418,fogColor:14277846,fogDensity:.0052,sunColor:16773328,sunIntensity:1.5,sunDir:[.5,.35,.5],hemiSky:13621734,hemiGround:7301722,hemiIntensity:1.1,seaColor:6262687,night:!1,bloom:.35}};function ga(n){let e=String(n),t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t^=t>>>15,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}function Qn(n){let e=(typeof n=="number"?n>>>0:ga(n))||1,t=e,i=()=>{e=e+1831565813>>>0;let s=e;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};return{next:i,range:(s,r)=>s+(r-s)*i(),int:(s,r)=>s+Math.floor(i()*(r-s+1)),pick:s=>s[Math.floor(i()*s.length)],chance:s=>i()<s,sign:()=>i()<.5?-1:1,shuffle:s=>{let r=s.slice();for(let o=r.length-1;o>0;o--){let a=Math.floor(i()*(o+1));[r[o],r[a]]=[r[a],r[o]]}return r},fork:s=>Qn(ga(t+":"+s))}}var dc=Math.PI*2,dS=2,jm=2800,Jm=4200,pS=34,Qm=8,e0=60,mS=.12,gS=.1,t0=28,xS=150,Mf=52,wf=.0025,n0=1/150,vS=10,i0=5,s0=250,r0=38,o0=75,pc=150,Sf=120,u0=10,yS=80,_S=40,MS=20,bS=30,SS=95,bf=18,a0=22,ES=60,Ef=(n,e,t)=>n<e?e:n>t?t:n;function wS(n){let e=n.int(10,14),t=n.range(440,520),i=[];for(let s=0;s<e;s++){let r=n.range(-.3,.3)*(dc/e),o=s/e*dc+r,a=Ef(t*n.range(.62,1.25),380,620);i.push([a*Math.cos(o),a*Math.sin(o)])}return i}function TS(n,e,t,i,s,r,o,a,l){let c=(x,m,d,b)=>{let M=(l-d)/(b-d);return[x[0]+(m[0]-x[0])*M,x[1]+(m[1]-x[1])*M]},u=c(n,e,s,r),h=c(e,t,r,o),f=c(t,i,o,a),p=c(u,h,s,o),g=c(h,f,r,a);return c(p,g,r,o)}function AS(n,e){let t=n.length,i=[];for(let s=0;s<t;s++){let r=n[(s-1+t)%t],o=n[s],a=n[(s+1)%t],l=n[(s+2)%t],c=0,u=c+Math.sqrt(Math.hypot(o[0]-r[0],o[1]-r[1])),h=u+Math.sqrt(Math.hypot(a[0]-o[0],a[1]-o[1])),f=h+Math.sqrt(Math.hypot(l[0]-a[0],l[1]-a[1]));for(let p=0;p<e;p++){let g=u+(h-u)*(p/e);i.push(TS(r,o,a,l,c,u,h,f,g))}}return i}function RS(n){let e=n.length,t=new Float64Array(e+1);for(let c=0;c<e;c++){let u=n[c],h=n[(c+1)%e];t[c+1]=t[c]+Math.hypot(h[0]-u[0],h[1]-u[1])}let i=t[e],s=Math.max(1,Math.round(i/dS)),r=i/s,o=new Float64Array(s),a=new Float64Array(s),l=0;for(let c=0;c<s;c++){let u=c*r;for(;l<e-1&&t[l+1]<=u;)l++;let h=n[l],f=n[(l+1)%e],p=t[l+1]-t[l],g=p>0?(u-t[l])/p:0;o[c]=h[0]+(f[0]-h[0])*g,a[c]=h[1]+(f[1]-h[1])*g}return{xs:o,zs:a,count:s,step:r}}function l0(n,e){let t=n.length,i=new Float64Array(t),s=2*e+1,r=0;for(let o=-e;o<=e;o++)r+=n[(o+t)%t];for(let o=0;o<t;o++)i[o]=r/s,r+=n[(o+1+e)%t]-n[((o-e)%t+t)%t];return i}function CS(n,e,t){let i=n.length,s=new Float64Array(i),r=new Float64Array(i);for(let a=0;a<i;a++){let l=(a-1+i)%i,c=(a+1)%i,u=n[c]-n[l],h=e[c]-e[l],f=Math.hypot(u,h)||1;s[a]=u/f,r[a]=h/f}let o=new Float64Array(i);for(let a=0;a<i;a++){let l=(a-1+i)%i,c=(a+1)%i,u=(s[c]-s[l])/(2*t),h=(r[c]-r[l])/(2*t);o[a]=s[a]*h-r[a]*u}return o}function IS(n,e){let t=n.length;for(let i=0;i<50;i++){let s=!1;for(let r=2*t-1;r>=0;r--){let o=r%t,a=(o+1)%t,l=Math.sqrt(n[a]*n[a]+2*_S*e);n[o]>l+1e-9&&(n[o]=l,s=!0)}for(let r=0;r<2*t;r++){let o=r%t,a=(o+1)%t,l=Math.sqrt(n[o]*n[o]+2*MS*e);n[a]>l+1e-9&&(n[a]=l,s=!0)}if(!s)break}}function c0(n){let e=n.length,t=-1;for(let r=0;r<e;r++)if(n[r]!==n[(r-1+e)%e]){t=r;break}if(t<0)return n[0]!==0?[{start:0,len:e,key:n[0]}]:[];let i=[],s=null;for(let r=0;r<e;r++){let o=(t+r)%e,a=n[o];s&&a===s.key?s.len++:(s&&s.key!==0&&i.push(s),s={start:o,len:1,key:a})}return s&&s.key!==0&&i.push(s),i}function h0(n,e){let t=n.length,i=0;for(let s=0;s<t;s++){let r=n[s].vmax,o=n[(s+1)%t].vmax;i+=e/Math.max(1,.5*(r+o))}return i}function Tf(n,e){let t=n.length,i=0,s=0,r=new Int8Array(t),o=new Int8Array(t);for(let c=0;c<t;c++){let u=n[c].curv,h=Math.abs(u);h>i&&(i=h);let f=Math.abs(n[c].slope);f>s&&(s=f),r[c]=u>n0?1:u<-n0?-1:0,o[c]=h<wf?1:0}let a=0;for(let c of c0(r))c.len*e>=vS&&a++;let l={start:0,len:0};for(let c of c0(o))c.key===1&&c.len>l.len&&(l=c);return{minRadius:i>0?1/i:1/0,maxSlope:s,corners:a,longestStraight:l.len*e,longestStraightStart:l.start}}function PS(n,e){let t=n.length,i=Mf,s=(c,u)=>(c+4096)*8192+(u+4096),r=new Map,o=new Array(t);for(let c=0;c<t;c++){let u=Math.floor(n[c].x/i),h=Math.floor(n[c].z/i);o[c]=[u,h];let f=s(u,h),p=r.get(f);p||(p=[],r.set(f,p)),p.push(c)}let a=0,l=Mf*Mf;for(let c=0;c<t;c++){let[u,h]=o[c];for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){let g=r.get(s(u+f,h+p));if(g)for(let x of g){if(x<=c)continue;let m=Math.abs(c-x);if(Math.min(m,t-m)*e<=xS)continue;let b=n[c].x-n[x].x,M=n[c].z-n[x].z;b*b+M*M<l&&a++}}}return a}function LS(n){let e=wS(n),t=AS(e,160),{xs:i,zs:s,count:r,step:o}=RS(t),a=[[8,12],[4,7],[2,4],[1,2]],l=[1,2,4,7].map((v,w)=>({k:v,a:n.range(a[w][0],a[w][1]),p:n.range(0,dc)})),c=new Float64Array(r),u=new Float64Array(r),h=new Float64Array(r);for(let v=0;v<r;v++){let w=(v-1+r)%r,_=(v+1)%r,S=i[_]-i[w],R=s[_]-s[w];h[v]=Math.hypot(S,R)||1e-9,c[v]=S/h[v],u[v]=R/h[v]}let f=new Float64Array(r),p=new Float64Array(r),g=1;for(let v=0;v<40;v++){for(let _=0;_<r;_++){let S=0;for(let R of l)S+=R.a*g*Math.sin(dc*R.k*_/r+R.p);f[_]=pS+S}let w=0;for(let _=0;_<r;_++){let S=(_-1+r)%r,R=(_+1)%r;p[_]=(f[R]-f[S])/h[_],Math.abs(p[_])>w&&(w=Math.abs(p[_]))}if(w<=gS)break;g*=.9}let x=new Float64Array(r),m=new Float64Array(r),d=new Float64Array(r);for(let v=0;v<r;v++){let w=(v-1+r)%r,_=(v+1)%r,S=i[_]-i[w],R=f[_]-f[w],D=s[_]-s[w],O=Math.hypot(S,R,D)||1e-9;x[v]=S/O,m[v]=R/O,d[v]=D/O}let b=CS(i,s,o),M=l0(b,2),y=new Float64Array(r);for(let v=0;v<r;v++){let w=Ef((Math.abs(M[v])-.016666666666666666)/.023333333333333334,0,1);y[v]=bf+(a0-bf)*w}let T=l0(y,10);for(let v=0;v<r;v++)T[v]=Ef(T[v],bf,a0);let E=new Float64Array(r);for(let v=0;v<r;v++)E[v]=Math.min(SS,Math.sqrt(bS/Math.max(Math.abs(M[v]),1e-9)));return IS(E,o),{xs:i,ys:f,zs:s,count:r,step:o,fx:c,fz:u,tx:x,ty:m,tz:d,slope:p,curv:M,width:T,vmax:E}}function DS(n){let{xs:e,ys:t,zs:i,count:s,step:r,fx:o,fz:a,tx:l,ty:c,tz:u,slope:h,curv:f,width:p,vmax:g}=n,x=[];for(let M=0;M<s;M++)x.push({curv:f[M],slope:h[M],vmax:g[M],x:e[M],z:i[M]});let m=Tf(x,r),d=m.longestStraight>0?(m.longestStraightStart+Math.round(yS/r))%s:0,b=new Array(s);for(let M=0;M<s;M++){let y=(d+M)%s;b[M]={s:M*r,x:e[y],y:t[y],z:i[y],tx:l[y],ty:c[y],tz:u[y],rx:-a[y],rz:o[y],width:p[y],curv:f[y],vmax:g[y],slope:h[y]}}return b}function NS(n,e,t){let i=n.length,s=new Int32Array(i+1);for(let m=0;m<i;m++)s[m+1]=s[m]+(Math.abs(n[m].curv)>=wf?1:0);let r=(m,d)=>s[d+1]-s[m]===0,o=Math.ceil(pc/e),a=Math.floor((i*e-pc)/e),l=Math.ceil(u0/e),c=[],u=[],h=(m,d)=>c.every(([b,M])=>d<b||m>M),f=(m,d,b,M)=>{for(let y=0;y<400;y++){let T=Math.round(t.range(m,d)/e),E=Math.ceil(b/e),v=T+E;if(a-v<o)return null;let w=t.int(o,a-v),_=w+T;if(M&&!r(w,_+E))continue;let S=w-l,R=_+E+l;if(!(S<0||R>i-1||!h(S,R)))return c.push([S,R]),{a:w,b:_}}return null},p=t.int(2,3);for(let m=0;m<p;m++){let d=f(12,16,Sf,!0);d&&u.push({type:"ramp",s0:d.a*e,s1:d.b*e,height:t.range(1.2,2.2)})}let g=t.int(2,3);for(let m=0;m<g;m++){let d=f(10,10,0,!1);d&&u.push({type:"boost",s0:d.a*e,s1:d.b*e})}let x=t.int(1,2);for(let m=0;m<x;m++){let d=f(60,140,0,!1);d&&u.push({type:"tunnel",s0:d.a*e,s1:d.b*e})}return u.sort((m,d)=>m.s0-d.s0),u}function US(n,e,t){let i=LS(n),s=DS(i),{count:r,step:o}=i,a=r*o,l=NS(s,o,n),c=Tf(s,o),u=1/0,h=-1/0,f=1/0,p=-1/0;for(let g of s)g.x<u&&(u=g.x),g.x>h&&(h=g.x),g.z<f&&(f=g.z),g.z>p&&(p=g.z);return{seed:e,attempts:t,length:a,step:o,count:r,pts:s,features:l,bounds:{minX:u,maxX:h,minZ:f,maxZ:p},stats:{minRadius:c.minRadius,maxSlope:c.maxSlope,lapTimeEstimate:h0(s,o),corners:c.corners}}}function OS(n){let e=[],{pts:t,count:i,step:s,length:r}=n;if(!Array.isArray(t)||t.length!==i||!(i>0)||!(s>0))return{ok:!1,reasons:["structure invalide"]};r>=jm&&r<=Jm||e.push(`longueur ${r.toFixed(0)} m hors [${jm}, ${Jm}]`),Math.abs(i*s-r)>1e-6&&e.push("count * step != length");let o=1/0,a=-1/0;for(let d of t)d.y<o&&(o=d.y),d.y>a&&(a=d.y);(o<Qm||a>e0)&&e.push(`altitude ${o.toFixed(1)}..${a.toFixed(1)} hors [${Qm}, ${e0}]`);let l=Tf(t,s);l.minRadius>=t0||e.push(`rayon min ${l.minRadius.toFixed(1)} m < ${t0}`),l.maxSlope>mS&&e.push(`pente max ${(l.maxSlope*100).toFixed(1)} % > 12 %`),l.corners<i0&&e.push(`${l.corners} virages < ${i0}`),l.longestStraight<s0&&e.push(`ligne droite max ${l.longestStraight.toFixed(0)} m < ${s0}`);let c=PS(t,s);c>0&&e.push(`${c} paires d'\xE9chantillons trop proches (croisement ou rapprochement)`);let u=h0(t,s);u>=r0&&u<=o0||e.push(`temps au tour ${u.toFixed(1)} s hors [${r0}, ${o0}]`);let h=n.features||[],f=h.filter(d=>d.type==="ramp").length,p=h.filter(d=>d.type==="boost").length,g=h.filter(d=>d.type==="tunnel").length;f<2&&e.push(`${f} tremplin(s) < 2`),p<2&&e.push(`${p} boost(s) < 2`),g<1&&e.push("aucun tunnel");let x=d=>Math.round((d%r+r)%r/s)%i;for(let d of h)if((d.s0<pc||d.s1>r-pc)&&e.push(`feature ${d.type} trop proche du d\xE9part`),d.type==="ramp"){let b=d.s1-d.s0;(b<11.5||b>16.5)&&e.push(`tremplin de ${b.toFixed(1)} m hors 12..16`),d.height>=1.2&&d.height<=2.2||e.push("hauteur de tremplin hors 1.2..2.2");let M=x(d.s0),y=x(d.s1+Sf),T=!0;for(let E=M;E!==(y+1)%i;E=(E+1)%i)if(Math.abs(t[E].curv)>=wf){T=!1;break}T||e.push("tremplin non situ\xE9 sur une ligne droite avec r\xE9ception")}let m=h.slice().sort((d,b)=>d.s0-b.s0);for(let d=0;d+1<m.length;d++){let b=m[d],M=m[d+1],y=b.s1+(b.type==="ramp"?Sf:0);M.s0<y+u0-1e-6&&e.push(`features ${b.type} et ${M.type} se chevauchent`)}return{ok:e.length===0,reasons:e}}function f0(n,e={}){let t=e.maxAttempts??ES,i=Qn(n),s=null,r=1/0;for(let o=0;o<t;o++){let a=i.fork("try"+o),l=US(a,n,o+1),c=OS(l);if(c.ok)return l;c.reasons.length<r&&(r=c.reasons.length,s=l)}return s.attempts=t,s}function Af(n,e){let t=n.length;if(n.open)return e<0?0:Math.min(e,(n.count-1.001)*n.step);let i=e%t;return i<0&&(i+=t),i>=t&&(i-=t),i}var FS=(n,e)=>{let t=Math.hypot(n,e)||1;return[n/t,e/t]};function ui(n,e,t={}){let i=n.count,s=n.step,r=Af(n,e),o=r/s,a=Math.floor(o),l=a%i,c=(l+1)%i,u=o-a,h=n.pts[l],f=n.pts[c],p=(y,T)=>y+(T-y)*u,g=p(h.tx,f.tx),x=p(h.ty,f.ty),m=p(h.tz,f.tz),d=Math.hypot(g,x,m)||1,[b,M]=FS(p(h.rx,f.rx),p(h.rz,f.rz));if(t.s=r,t.x=p(h.x,f.x),t.y=p(h.y,f.y),t.z=p(h.z,f.z),n.open&&e!==r){let y=e-r;t.x+=g/d*y,t.z+=m/d*y}return t.tx=g/d,t.ty=x/d,t.tz=m/d,t.rx=b,t.rz=M,t.width=p(h.width,f.width),t.curv=p(h.curv,f.curv),t.vmax=p(h.vmax,f.vmax),t.slope=p(h.slope,f.slope),t.i=l,t}var us={};function At(n,e,t,i={}){return ui(n,e,us),i.x=us.x+t*us.rx,i.y=us.y,i.z=us.z+t*us.rz,i.heading=Math.atan2(us.tx,us.tz),i.slope=us.slope,i}function d0(n,e){let t=Af(n,e);for(let i of n.features)if(i.type==="ramp"&&t>=i.s0&&t<i.s1)return i.height*(t-i.s0)/(i.s1-i.s0);return 0}function ks(n,e,t){let i=Af(n,e);for(let s of n.features)if((t===void 0||s.type===t)&&i>=s.s0&&i<=s.s1)return s;return null}var kS=1/30,p0=.5,m0=.4,HS=.6,xa=[.2,.36,.52,.68,.84],g0=xa.length+1,VS=.2,GS=.1,WS=.34,XS=4,qS=4,YS=.2,$S=4.9,ZS=5.5,KS=5,jS=6,JS=1.8,QS=.03,eE=1.6,tE=.5,nE=2,iE=.785,sE=4.7,rE=2.5,vo=.196,oE=.098,aE=.5,lE=.27,cE=16,uE=11,hE=.72,fE=5,dE=.5,x0=.35,pE=.42,mE=60,gE=.3,xE=5,vE=1.6,yE=3,_E=14,ME=.004,bE=1.2,SE=2,EE=.5,wE=22,v0=.25,TE=6,AE=1.8,y0=1,RE=["s","d","yaw","vdir","speed","yRel","vy","lean","steer","pitch","compress","drift","boostT","wheelSpin","stun","rpm","wheelie","_g","_vyG","_shiftT","_t","_pitchF","_dive","_turnF","_springA","_springP","_wallT","_apex"],Kt=(n,e,t)=>n<e?e:n>t?t:n,zi=(n,e=0)=>Number.isFinite(n)?n:e,CE=(n,e)=>{let t=n%e;return t<0?t+e:t},IE=(n,e,t)=>n<e?Math.min(e,n+t):Math.max(e,n-t);function _0({s:n=0,d:e=0}={}){return{s:n,d:e,yaw:0,vdir:0,speed:0,yRel:0,vy:0,airborne:!1,lean:0,steer:0,pitch:0,compress:0,drift:0,boostT:0,boostCharges:dr.boostCharges,onRoad:!0,wheelSpin:0,stun:0,gear:1,rpm:0,wheelie:0,events:[],_init:!1,_g:0,_vyG:0,_prevBoost:!1,_padKey:null,_shiftT:0,_wallHit:!1,_t:0,_turnF:0,_pitchF:0,_dive:0,_springA:0,_springP:0,_wallT:0,_apex:0}}function M0(n,e,t,i,s,r,o){let a=n.events,l=e||{},c=s||{},u=!!l.boost&&!n._prevBoost;if(n._prevBoost=!!l.boost,r=Number.isFinite(r)&&r>0?Math.min(r,kS):0,n._init||(n._init=!0,n.boostCharges=i.boostCharges),r===0)return n;let h=t.length,f=i.maxSpeed,p=Kt(zi(l.throttle),0,1),g=Kt(zi(l.brake),0,1),x=Kt(zi(l.steer),-1,1),m=n.stun>0;m&&(n.stun=Math.max(0,n.stun-r),p=0,g=0,x=0);let d=Xe=>t.open?Xe:CE(Xe,h),b=d(n.s),M=ui(t,b),y=!n.airborne;if(u&&!m&&n.boostCharges>0&&n.boostT<=0&&(n.boostCharges-=1,n.boostT=i.boostDuration,a.push("boost")),y){let Xe=ks(t,b,"boost");if(Xe){let Ae=Math.floor(n.s/h)+":"+Xe.s0;n._padKey!==Ae&&(n._padKey=Ae,n.boostT=Math.max(n.boostT,bE),a.push("pad"))}}g>.5&&n.boostT>0&&(n.boostT=0);let T=n.boostT>0;T&&(p=1);let E=y&&!m&&Math.abs(x)>.3&&n.speed>SE&&(!!l.drift||g>.3),v=n.speed,w=v/f;n._shiftT>0?n._shiftT-=r:n.gear<g0&&w>xa[n.gear-1]&&!(g>0&&v>3)?(n.gear+=1,n._shiftT=VS):n.gear>1&&v<xa[n.gear-2]*f-2&&(n.gear-=1,n._shiftT=GS);let _=n.gear>1?xa[n.gear-2]:0,S=n.gear<g0?xa[n.gear-1]:1;n.rpm=Kt(.35+.65*((w-_)/(S-_)),.1,1.05);let R=y&&Math.abs(n.d)>M.width*.5,D=HS*f,O=R?D:f*(T?i.boostPower:1),I=XS/(f*f),k=0;if(y){if(R&&v>D&&(k-=2*i.offroadDrag*(v-D)),p>0&&n._shiftT<=0&&v<O){let Xe=WS*f,Ae=.8+.2*Math.sin(Math.PI*Kt(n.rpm,0,1)),ze=i.accel*p*Ae*Math.min(1,Xe/Math.max(v,1));T&&(ze*=nE),k+=Math.min(ze,i.accel*1.15*(T?1.3:1))}g>0&&(k-=i.brake*g*(E?.35:1)),k-=v*(.2-.03*(n.gear-1))*(1-p),k-=YS,k-=$S*M.slope,k-=I*v*v}else k-=I*qS*v*v;n.speed=Math.max(0,v+k*r),y&&n.speed>O&&!R&&(n.speed=Math.max(O,n.speed-10*r));let q=Kt(n.speed/f,0,1),Q=1+(i.wetGrip-1)*PE(c),V=Kt(i.grip*zi(c.grip,1)*Q,.05,1.5),$=n.speed<.6?0:x,ie=Math.abs($)>Math.abs(n.steer)||$*n.steer<0?ZS:KS*Kt(Math.abs(k)/6,1,2.5);n.steer=IE(n.steer,$,ie*r);let ye=n.yaw-n.vdir,Se=n.speed*Math.sin(ye),U=Math.min(eE,1+QS*Math.abs(Se));E&&(U=i.driftBonus),T&&y&&(U*=tE);let X=1-(1-i.steerHighSpeed)*q,W=Math.min(1,n.speed/6),Y=y?1:i.airControl,z=n.steer*i.steerRate*X*U*W*Y*(.6+.4*Math.min(1,V)),G=Math.min(n.speed/xE,mE*Math.min(1.2,V)*(E?1.5:1)/Math.max(n.speed,1)),de=Kt(z,-G,G);y&&Math.abs(x)<=.15&&(n.yaw*=Math.exp(-vE*r)),o&&i.steerNoise>0&&!m&&y&&(n.yaw+=i.steerNoise*p*(o.next()*2-1)*r);let xe=Math.max(.3,1-n.d*M.curv),Ne=n.speed*Math.cos(n.vdir)/xe*r,He=n.speed*Math.sin(n.vdir)*r,Z=M.curv*Ne,ae=n.vdir,Ee=Z*(y?1-gE:1);if(n.yaw+=de*r-Ee,n.vdir-=Ee,y){let Xe=(E?JS:jS)*V,Ae=1-Math.exp(-Xe*r);n.vdir+=(n.yaw-n.vdir)*Ae,n.speed*=1-(1-Math.cos(ye))*Ae}else{let Xe=3*Kt(i.airStability,0,2);n.yaw+=(n.vdir-n.yaw)*(1-Math.exp(-Xe*r)),i.airStability<1&&(n.yaw+=(n.yaw>=n.vdir?1:-1)*(1-i.airStability)*.6*r)}n.vdir=Kt(zi(n.vdir),-p0,p0),n.yaw=Kt(zi(n.yaw),n.vdir-m0,n.vdir+m0),n._t+=r,He+=zi(c.wind)*(1.2*Math.sin(n._t*.37)+.4*Math.sin(n._t*1.13+1))*r*(y?1:.5),n.s+=Ne,n.d+=He;let we=y?Kt((Math.abs(n.yaw-n.vdir)-.04)/.22,0,1)*W:0;n.drift+=(we-n.drift)*Math.min(1,8*r);let Te=ui(t,d(n.s));n.onRoad=Math.abs(n.d)<=Te.width*.5;let De=Te.width*.5+6-.4;if(Math.abs(n.d)>=De-.02){let Xe=n.d>=0?1:-1,Ae=n.vdir*Xe>0,ze=Ae?Math.abs(Math.sin(n.vdir)):0;if(n.d=Xe*De,Ae&&(n.vdir=-Xe*.04,n.yaw=n.yaw*.4-Xe*.04),n._wallHit)n.speed*=Math.max(0,1-.8*r);else{let $e=n.boostT>0,Qe=o?o.next():1;$e&&n.speed>TE||ze>EE&&n.speed>wE&&Qe<v0||n.airborne&&Qe<v0?(n.speed*=.3,n.stun=AE,a.push("crash")):n.speed*=1-Kt(i.wallLoss*1.3*(.5+ze),0,.9),a.push("wall")}n.boostT=0,n._wallT=x0,n._wallHit=!0}else n._wallHit=!1;n.stun>0&&y&&(n.speed*=Math.exp(-2.2*r)),b=d(n.s);let me=zi(d0(t,b)),P=(me-n._g)/r;if(n.airborne||(me<n.yRel-.05?(n.airborne=!0,n._apex=n.yRel-me,n.vy=n._vyG,n.vy>yE&&a.push("jump")):(n.yRel=me,n.vy=Kt(P,-80,80),n._vyG=n.vy)),n.airborne&&(n.vy-=26*r,n.yRel+=n.vy*r,n._apex=Math.max(n._apex,n.yRel-me),n.vy<=0&&n.yRel<=me)){let Xe=-n.vy,Ae=Math.abs(n.yaw-n.vdir),ze=Xe>_E/Math.max(.3,i.landing)||Ae>.35;n.airborne=!1,n.yRel=me,n.vy=0,n._vyG=0,n._springA=Kt(n._springA+.35*n._apex+.03*Xe,0,1),n._springP=Math.PI/2;let $e=ME*Xe+(ze?.08:0);n.speed*=1-Kt($e/Math.max(.2,i.landing),0,.45),a.push(ze?"hardLand":"land")}n._g=me,y=!n.airborne,n.speed=Kt(zi(n.speed),0,1.5*f),n._wallT=Math.max(0,n._wallT-r);let A=Math.max(0,1-n.speed/4,n._wallT/x0),ee=y?(Z+(n.vdir-ae))/r:0;n._turnF+=(ee-n._turnF)*Math.min(1,6*r);let le=n.speed*n._turnF,ge=Math.sign(le)*Math.max(0,Math.abs(le)-fE),fe=n.steer*pE*Math.min(1,n.speed/10),Oe=Kt((1-A)*(Math.atan(ge/uE)*hE+dE*(n.yaw-n.vdir)+fe),-y0,y0);n.stun>0&&(Oe=(n.lean>=0?1:-1)*1.35),n.lean+=(Oe-n.lean)*Math.min(1,9*r),n._dive=g>.1&&y?Math.min(vo,n._dive+vo*r):Math.max(0,n._dive-.25*r);let Re=Kt(k*oE,-vo,vo)-n._dive;n._pitchF+=(Re-n._pitchF)*Math.min(1,r/aE);let Ue=Kt(Re-n._pitchF,-vo,vo);n.wheelie=n.boostT>0&&y?Math.min(Math.PI/2,n.wheelie+sE*r):Math.max(0,n.wheelie-rE*r),Ue+=Math.sin(n.wheelie)*iE,y||(Ue=Math.atan2(n.vy,Math.max(8,n.speed))),n.pitch=Ue,n._springA*=Math.exp(-r/lE),n._springP+=cE*r,n.compress=Math.sin(n._springP)*n._springA,n.wheelSpin+=n.speed/.32*r,n.boostT=Math.max(0,n.boostT-r);for(let Xe of RE)Number.isFinite(n[Xe])||(n[Xe]=0);return n.speed<0&&(n.speed=0),n}function PE(n){return Kt(zi(n.wet),0,1)}var LE=8,DE=25,NE=150,UE=3,OE=35,FE=2,BE=14,zE=30,kE=12,HE=2,VE={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},mn=(n,e,t)=>n<e?e:n>t?t:n,mc=(n,e,t)=>n+(e-n)*t,GE=(n,e)=>n-e*Math.round(n/e);function WE(n,e){let t=n.length,i=n.features,s=null,r=1/0;for(let o=0;o<i.length;o++){let a=i[o];if(a.type!=="ramp")continue;let l=((a.s0-e)%t+t)%t;l<r&&(r=l,s=a)}return s?{f:s,dist:r}:null}function XE(n,e){for(let t=0;t<=NE;t+=DE)if(Math.abs(ui(n,e+t).curv)>.004)return!1;return!0}function gc(n,e){let t=n||VE,i={persona:t,rng:e,skill:mn(t.skill??.5,0,1),aggression:mn(t.aggression??.5,0,1),jumpSkill:mn(t.jumpSkill??.5,0,1),lineSkill:mn(t.lineSkill??.5,0,1),playerGap:0,dGoal:0,wander:0,wanderGoal:0,wanderT:0,mistakeT:0,mistakeSide:1,nextMistake:0,boostLock:0,input:{throttle:0,brake:0,steer:0,boost:!1,drift:!1}};return i.nextMistake=e.range(8,20)+(1-i.skill)*15,i}function xc(n,e,t,i,s,r){let o=n.input,a=t.length,l=n.rng,c=n.aggression,u=n.skill,h=n.jumpSkill,f=e.speed,p=e.s,g=ui(t,p),x=Math.max(.8,g.width*.5-1.2);n.wanderT-=r,n.wanderT<=0&&(n.wanderT=l.range(.9,1.8),n.wanderGoal=l.range(-1,1)*(1-n.lineSkill)*.5*x),n.wander+=(n.wanderGoal-n.wander)*Math.min(1,r*1.5),n.nextMistake-=r,n.mistakeT-=r,n.mistakeT<=0&&n.nextMistake<=0&&(n.mistakeT=l.range(.5,1.2),n.mistakeSide=l.sign(),n.nextMistake=l.range(8,20)+(1-u)*15);let m=n.mistakeT>0;n.boostLock-=r;let d=mc(1.4,.6,c),b=Math.max(20,f*d),M=Math.max(b,mn(f*1.6+20,40,110)),y=1/0,T=0,E=0,v=0;for(let W=0;W<=M;W+=LE){let Y=W===0?g:ui(t,p+W);if(W<=b&&Y.vmax<y&&(y=Y.vmax),W>=8){let z=Math.abs(Y.curv);z>T&&(T=z,E=Math.sign(Y.curv),v=W)}}let w=mn(T/.02,0,1),_=0;if(E!==0&&w>0){let W=mn((v-10)/30,0,1),Y=mc(1,-.8,W);_=E*x*n.lineSkill*w*Y}_+=n.wander,m&&(_+=n.mistakeSide*1.2);let S=WE(t,p),R=S?S.dist:1/0,D=ks(t,p,"ramp")!==null,O=R<zE;(D||O)&&h>.5&&(_*=1-mn((h-.4)/.6,0,1));let I=!D&&R>=UE&&R<=OE&&h<.5;for(let W=0;W<s.length;W++){let Y=s[W];if(Y===e)continue;let z=GE(Y.s-p,a);if(z<=0||z>=kE)continue;let G=Y.d-e.d;if(!(Math.abs(G)>=HE)){if(c>.55){let de=G!==0?Math.sign(G):e.d<0?1:-1;_+=de*(.6+.8*c)}else{let de=G!==0?-Math.sign(G):e.d<0?1:-1;Math.abs(e.d+de*2)>x&&(de=-de),_+=de*2*(1-c)}break}}let k=n.obstacles;if(k){let W=35+f*1.7,Y=null,z=1/0;for(let G=0;G<k.length;G++){let de=k[G],xe=de.s-p;xe>-de.type.len&&xe<W&&xe<z&&Math.abs(de.d-_)<de.type.w/2+1.5&&(de.speed<f-3||xe<40)&&(Y=de,z=xe)}if(Y){let G=Y.type.w/2+2,de=[Y.d-G,Y.d+G].filter(He=>Math.abs(He)<=x),xe=de.filter(He=>!k.some(Z=>Z!==Y&&Math.abs(Z.s-Y.s)<30&&Math.abs(Z.d-He)<Z.type.w/2+1.2)),Ne=xe.length?xe:de;Ne.length&&(_=Ne.reduce((He,Z)=>Math.abs(Z-e.d)<Math.abs(He-e.d)?Z:He))}}_=mn(_,-x,x),n.dGoal+=(_-n.dGoal)*Math.min(1,r*(k?4.5:2.5));let q=mn(n.dGoal,-x,x),Q;if(e.airborne)Q=mn(-e.yaw*2,-.3,.3);else{let W=q-e.d,Y=mn(W*.12,-.25,.25),z=ui(t,p+mn(f*.25,4,20)).curv,G=i.steerRate*mc(1,i.steerHighSpeed,mn(f/i.maxSpeed,0,1));Q=(z*f+(Y-e.yaw)*3)/G}Q=mn(Q,-1,1),Number.isFinite(Q)||(Q=0);let V=mn(-n.playerGap/150,-1,1)*.06,$=mc(.86,1,u)+c*.04;m&&($*=.85);let oe=y*$*(1+V),ie=i.maxSpeed,ye=!1;if(!e.airborne&&e.boostCharges>0&&e.boostT<=0&&n.boostLock<=0){if(h>.6&&R>=FE&&R<=BE)ye=!0;else if(f>20&&XE(t,p)){let W=n.playerGap<-20,Y=.25+.5*c+(W?.3:0);ye=l.chance(Y)}n.boostLock=ye?1:.4}o.boost=ye;let Se=T<.003;if(e.boostT>0){let W=ie*i.boostPower;oe=Se?W*.98:Math.min(oe,W)}else oe=Math.min(oe,ie);let U=0,X=0;if(e.airborne)U=1;else{let W=oe-f;W>-1.5?U=I?0:mn(.5+W*.25,0,1):X=mn((-W-1.5)*.15,0,1)}return o.throttle=U,o.brake=X,o.steer=Q,o.drift=!e.airborne&&c>.75&&T>.025&&f>40&&v<20,o}var qE=7,YE=3,$E=.3,ZE=3,KE=25,jE=1.5,JE=1.2,QE=1.8,b0=.9,ew={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},vc=(n,e,t)=>n<e?e:n>t?t:n,Rf=(n,e)=>n-e*Math.round(n/e);function Cf(){return{throttle:0,brake:0,steer:0,boost:!1,drift:!1}}function S0({track:n,laps:e,env:t,rng:i,riders:s,final:r=!0,carry:o=null,startS:a=0}){let l=n.length,c=n.raceEnd??l,u=e*c,f=s.filter(E=>!E.isPlayer).concat(s.filter(E=>E.isPlayer)).map((E,v)=>{let w=Math.floor(v/2),_=v%2,S=a-qE*(w+1),R=_===0?-2.5:2.5,D=o?.states.get(E.id),O=D||_0({s:S,d:R});return{id:E.id,name:E.name,color:E.color,accent:E.accent,isPlayer:!!E.isPlayer,stats:E.stats,persona:E.persona||null,state:O,remote:!!E.remote,ai:E.isPlayer||E.remote?null:gc(E.persona||ew,i.fork("ai:"+E.id)),rng:i.fork("rider:"+E.id),others:null,input:Cf(),coast:Cf(),frameEvents:[],startS:D?D.s:S,lap:1,lapTimes:[],bestLap:null,lapStartT:0,finished:!1,finishTime:null,position:v+1}});for(let E of f)E.others=f.filter(v=>v!==E).map(v=>v.state);let p=f.find(E=>E.isPlayer)||null,g=f.slice(),x=f.length,m=new Uint8Array(x*x);function d(E,v,w,_,S){if(w===v)return;let R=Math.floor(v/c),D=Math.min(Math.floor(w/c),e);for(let O=Math.max(R+1,1);O<=D;O++){let I=vc((O*c-v)/(w-v),0,1),k=_+I*S,q=k-E.lapStartT;E.lapTimes.push(q),(E.bestLap===null||q<E.bestLap)&&(E.bestLap=q),E.lapStartT=k}if(r&&w>=u){let O=vc((u-v)/(w-v),0,1);E.finished=!0,E.finishTime=_+O*S}}function b(E){let v=E.state,w=E.coast;return w.throttle=$E,w.brake=0,w.steer=vc(-v.yaw*2-v.d*.05,-.5,.5),w.boost=!1,w.drift=!1,w}function M(E,v){let w=E.state;for(let _=0;_<x;_++){let S=f[_];if(S===E||S.hidden)continue;let R=Rf(S.state.s-w.s,l);if(R>ZE&&R<KE&&Math.abs(S.state.d-w.d)<jE){w.speed=Math.min(w.speed+JE*E.stats.slipstream*v,E.stats.maxSpeed*1.05);return}}}function y(){for(let E=0;E<x;E++)for(let v=E+1;v<x;v++){let w=f[E],_=f[v];if(w.remote&&_.remote||w.hidden||_.hidden)continue;let S=!w.remote,R=!_.remote,D=Rf(_.state.s-w.state.s,l),O=_.state.d-w.state.d,I=E*x+v;if(Math.abs(D)<QE&&Math.abs(O)<b0){let k=O!==0?Math.sign(O):i.sign(),q=((b0-Math.abs(O))/2+.05)*(S&&R?1:2);if(S&&(w.state.d-=k*q),R&&(_.state.d+=k*q),!m[I]){m[I]=1;let Q=(w.state.speed+_.state.speed)/2;S&&(w.state.speed+=(Q-w.state.speed)*.2),R&&(_.state.speed+=(Q-_.state.speed)*.2);let V=D>=0?w:_;V.remote||(V.state.speed*=.96),(!S||!R)&&(S?w:_).state.events?.push("hit")}}else m[I]=0}}let T={phase:o?"racing":"countdown",countdown:o?0:YE,time:o?o.time:0,final:r,laps:e,track:n,riders:f,player:p,update(E,v){if(T.phase==="countdown"){T.countdown=Math.max(0,T.countdown-E),T.countdown<=0&&(T.phase="racing");return}let w=T.time;T.time+=E;for(let _=0;_<x;_++){let S=f[_];S.remote||(S.finished?S.input=b(S):S.isPlayer?S.input=v||Cf():(p&&(S.ai.playerGap=Rf(S.state.s-p.state.s,l)),S.input=xc(S.ai,S.state,n,S.stats,S.others,E)))}for(let _=0;_<x;_++){let S=f[_];if(S.remote){S.lap=1;continue}let R=S.state,D=S.finished,O=R.s;if(M0(R,S.input,n,S.stats,t,E,S.rng),D||(d(S,O,R.s,w,E),S.finished||M(S,E)),S.lap=S.finished?e:vc(Math.floor(R.s/c)+1,1,e),!S.isPlayer){S.frameEvents.length=0;for(let I=0;I<R.events.length;I++)S.frameEvents.push(R.events[I]);R.events.length=0}}y(),g.sort((_,S)=>_.finished!==S.finished?_.finished?-1:1:_.finished?_.finishTime-S.finishTime:S.state.s-_.state.s);for(let _=0;_<x;_++)g[_].position=_+1;r?(p?p.finished:f.every(_=>_.finished))&&(T.phase="finished"):(p||g[0]).state.s>=c&&(T.phase="relay")},results(){let E=f.map(v=>{let w;if(v.finished)w=v.finishTime;else{let _=Math.max(0,v.state.s-v.startS),S=T.time>1?Math.max(5,_/T.time):40,R=Math.max(0,u-v.state.s);w=T.time+R/S}return{id:v.id,name:v.name,position:v.position,time:w,bestLap:v.bestLap,isPlayer:v.isPlayer}});return E.sort((v,w)=>v.position-w.position),E}};return T}var Of={};av(Of,{PLAYER:()=>ki,RIVALS:()=>_c,UPGRADES:()=>pr,applyUpgrade:()=>Ec,computeStats:()=>Hs,createRun:()=>Mc,dailySeed:()=>wc,isRunOver:()=>va,loadMeta:()=>Df,offerUpgrades:()=>Sc,randomSeed:()=>nw,recordResult:()=>Pf,runRiders:()=>bc,saveMeta:()=>Nf,standings:()=>yo,updateMeta:()=>Uf});var E0="polygon-rush-meta",tw=Object.keys(zs).filter(n=>n!=="sicily"),ki={id:"player",name:"Vous",color:14885934,accent:2312392},pr=[{id:"turbo",name:"Turbo instable",tagline:"Acc\xE9l\xE9ration brutale, pilotage nerveux.",pro:"Acc\xE9l\xE9ration \xD71,35 et vitesse de pointe \xD71,04.",con:"Direction bruit\xE9e (+0,35 rad/s) et braquage \xD70,9 \xE0 haute vitesse.",icon:"\u26A1",maxStacks:1,apply(n){n.accel*=1.35,n.maxSpeed*=1.04,n.steerNoise+=.35,n.steerHighSpeed*=.9}},{id:"rally",name:"Suspension rallye",tagline:"Les r\xE9ceptions passent mieux, la vitesse de pointe trinque.",pro:"R\xE9ception \xD71,8 et tra\xEEn\xE9e hors-piste \xD70,6.",con:"Vitesse de pointe \xD70,95.",icon:"\u{1F3D4}",maxStacks:2,apply(n){n.landing*=1.8,n.offroadDrag*=.6,n.maxSpeed*=.95}},{id:"aero",name:"A\xE9rodynamique",tagline:"Plus de vitesse, moins de tenue en l'air.",pro:"Vitesse de pointe \xD71,07.",con:"Stabilit\xE9 en saut \xD70,6 et contr\xF4le a\xE9rien \xD70,7.",icon:"\u{1F4A8}",maxStacks:2,apply(n){n.maxSpeed*=1.07,n.airStability*=.6,n.airControl*=.7}},{id:"rain",name:"Pneus pluie",tagline:"Accroche imbattable sous l'averse, sec moins mordant.",pro:"Adh\xE9rence mouill\xE9e \xD71,35 (\u2248 1,05).",con:"Adh\xE9rence s\xE8che \xD70,95.",icon:"\u{1F327}",maxStacks:1,apply(n){n.wetGrip*=1.35,n.grip*=.95}},{id:"nitro",name:"Nitro double",tagline:"Deux charges de plus, des boosts plus courts.",pro:"+2 charges de boost par course.",con:"Dur\xE9e de boost \xD70,75.",icon:"\u{1F680}",maxStacks:2,apply(n){n.boostCharges+=2,n.boostDuration*=.75}},{id:"brakes",name:"Freins c\xE9ramique",tagline:"Freinage mordant, direction plus vive, reprise plus lente.",pro:"Freinage \xD71,4 et braquage \xD71,08.",con:"Acc\xE9l\xE9ration \xD70,95.",icon:"\u{1F6D1}",maxStacks:2,apply(n){n.brake*=1.4,n.steerRate*=1.08,n.accel*=.95}},{id:"gyro",name:"Gyroscope",tagline:"Stabilisateur de vol, adh\xE9rence en retrait.",pro:"Contr\xF4le a\xE9rien \xD71,5 et stabilit\xE9 en l'air \xD71,25.",con:"Adh\xE9rence \xD70,9.",icon:"\u{1F300}",maxStacks:2,apply(n){n.airControl*=1.5,n.airStability*=1.25,n.grip*=.9}},{id:"slick",name:"Pneus slick",tagline:"Gomme tendre : accroche s\xE8che maximale, pluie interdite.",pro:"Adh\xE9rence s\xE8che \xD71,12.",con:"Adh\xE9rence mouill\xE9e \xD70,7 et braquage \xD70,95.",icon:"\u{1F3C1}",maxStacks:2,apply(n){n.grip*=1.12,n.wetGrip*=.7,n.steerRate*=.95}},{id:"carenage",name:"Car\xE9nage aspiration",tagline:"Profil fusel\xE9 : on file dans le sillage, on tourne moins vite.",pro:"Aspiration \xD71,6 dans le sillage des concurrents.",con:"Braquage \xD70,92.",icon:"\u{1F32C}",maxStacks:2,apply(n){n.slipstream*=1.6,n.steerRate*=.92}},{id:"blindage",name:"Blindage renforc\xE9",tagline:"Carrosserie en acier : les chocs co\xFBtent moins, la moto p\xE8se.",pro:"Perte de vitesse contre les glissi\xE8res \xD70,5.",con:"Acc\xE9l\xE9ration \xD70,92 et vitesse de pointe \xD70,97.",icon:"\u{1F6E1}",maxStacks:2,apply(n){n.wallLoss*=.5,n.accel*=.92,n.maxSpeed*=.97}}],_c=[{id:"vortex",name:"Vortex Solenne",color:58879,accent:728366,skill:.8,aggression:.92,jumpSkill:.6,lineSkill:.5,style:"agressif",bio:"Freine tard, plonge dans les virages et ne l\xE2che jamais un pilote \xE0 la corde."},{id:"saltamonte",name:"Brigo Saltamonte",color:16766474,accent:1118481,skill:.76,aggression:.45,jumpSkill:.97,lineSkill:.5,style:"sauteur",bio:"Vole plus haut que tout le monde, atterrit quand il veut, parfois trop tard."},{id:"lumen",name:"Lumen Ardoise",color:8190976,accent:1714704,skill:.84,aggression:.15,jumpSkill:.55,lineSkill:.97,style:"trajectoire",bio:"Trace une ligne parfaite, ne prend jamais un bord et ne commet aucune faute."},{id:"aurelio",name:"Aurelio Temp\xEAte",color:16747520,accent:0,skill:.97,aggression:.7,jumpSkill:.85,lineSkill:.9,style:"r\xE9gulier",bio:"Le champion de la c\xF4te : rien \xE0 lui reprocher, et il le sait."},{id:"maree",name:"Ingrid Mar\xE9e",color:11544319,accent:16777215,skill:.88,aggression:.78,jumpSkill:.7,lineSkill:.6,style:"agressif",bio:"Pousse ses freins jusqu'\xE0 la limite et ressort des virages en coup de vent."},{id:"gaspard",name:"Gaspard Brume",color:1989631,accent:15790320,skill:.72,aggression:.35,jumpSkill:.4,lineSkill:.6,style:"r\xE9gulier",bio:"Discret, m\xE9tronome, il finit presque toujours dans les cinq premiers."},{id:"yuki",name:"Yuki Varan",color:50316,accent:8217,skill:.91,aggression:.5,jumpSkill:.8,lineSkill:.8,style:"r\xE9gulier",bio:"Rapide sur tous les terrains, sans point faible visible, et toujours souriant."}],w0=[{name:"Coastal Rush",subtitle:"Route m\xE9diterran\xE9enne, grandes courbes et falaises"},{name:"Cliff Edge",subtitle:"Corniches \xE9troites et vent de face"},{name:"Harbor Drift",subtitle:"Quais glissants, embruns et virages en \xE9pingle"},{name:"Lighthouse Pass",subtitle:"Tunnels, ressauts et brouillard de phare"},{name:"The Final Run",subtitle:"Le champion vous attend"}],If=w0.length;function T0(n){return pr.find(e=>e.id===n)||null}function A0(n,e){let t=0;for(let i of n.upgrades)i===e&&t++;return t}function Mc(n){let e=String(n),t=Qn(ga(e+"|run")),i=[];for(let o=0;o<If;o++)if(o===0)i.push("sunset");else if(o===If-1)i.push("rain");else{let a=i[o-1],l=tw.filter(c=>c!==a&&!(o===If-2&&c==="rain"));i.push(t.pick(l))}let s=w0.map((o,a)=>({name:o.name,subtitle:o.subtitle,trackSeed:`${e}-${a}`,weather:i[a],laps:a<2?2:3})),r={[ki.id]:0};for(let o of _c)r[o.id]=0;return{seed:e,stageIndex:0,stages:s,upgrades:[],points:r,history:[]}}function bc(n){let e=Math.max(0,n.stageIndex),t=[{id:ki.id,name:ki.name,color:ki.color,accent:ki.accent,isPlayer:!0,persona:null,stats:Hs(n)}];for(let i of _c){let s=Math.min(.99,Math.round((i.skill+.01*e)*100)/100);t.push({id:i.id,name:i.name,color:i.color,accent:i.accent,isPlayer:!1,persona:{...i,skill:s},stats:{...dr}})}return t}function Hs(n){let e={...dr};for(let t of n.upgrades){let i=T0(t);i&&i.apply(e)}return e}function Sc(n,e=null){let t=Qn(ga(`${n.seed}|offer|${n.stageIndex}`)),i=pr.filter(s=>A0(n,s.id)<s.maxStacks&&!(e&&e.has(s.id)));return t.shuffle(i).slice(0,3)}function Ec(n,e){let t=T0(e);return!t||A0(n,e)>=t.maxStacks?!1:(n.upgrades.push(e),!0)}function R0(n){if(n===ki.id)return ki.name;let e=_c.find(t=>t.id===n);return e?e.name:n}function Pf(n,e){if(va(n))return n;let t=e.slice().sort((r,o)=>r.position-o.position),i=n.stages[n.stageIndex],s={stage:n.stageIndex,name:i.name,results:[]};return t.forEach((r,o)=>{let a=r.position??o+1,l=fc[a-1]??0;n.points[r.id]=(n.points[r.id]||0)+l,s.results.push({id:r.id,name:r.name||n.names?.[r.id]||R0(r.id),position:a,points:l,isPlayer:r.id===ki.id})}),n.history.push(s),n.stageIndex+=1,n}function yo(n){let e={};for(let t of n.history)for(let i of t.results)e[i.id]=Math.min(e[i.id]??1/0,i.position);return Object.keys(n.points).map(t=>({id:t,name:n.names?.[t]||R0(t),points:n.points[t],isPlayer:t===ki.id,_best:e[t]??1/0})).sort((t,i)=>i.points-t.points||t._best-i._best).map(({_best:t,...i})=>i)}function va(n){return n.stageIndex>=n.stages.length}function wc(n=new Date){let e=n instanceof Date?n:new Date(n),t=e.getUTCFullYear(),i=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`DAILY-${t}-${i}-${s}`}function nw(){let n="ABCDEFGHJKMNPQRSTUVWXYZ23456789",e="RUSH-";for(let t=0;t<4;t++)e+=n[Math.floor(Math.random()*n.length)];return e}function yc(){return{runs:0,wins:0,bestPoints:0,unlocked:[]}}function Lf(n){let e=yc();if(!n||typeof n!="object")return e;let t=i=>Number.isFinite(i)&&i>=0?Math.floor(i):0;return{runs:t(n.runs),wins:t(n.wins),bestPoints:t(n.bestPoints),unlocked:Array.isArray(n.unlocked)?n.unlocked.filter(i=>typeof i=="string"):e.unlocked}}function C0(){try{return globalThis.localStorage??null}catch{return null}}function Df(){try{let n=C0();if(!n)return yc();let e=n.getItem(E0);return e?Lf(JSON.parse(e)):yc()}catch{return yc()}}function Nf(n){try{let e=C0();return e?(e.setItem(E0,JSON.stringify(Lf(n))),!0):!1}catch{return!1}}function Uf(n,e){let t=Lf(n),i=yo(e),s=i.find(o=>o.isPlayer),r=i.length>0&&i[0].isPlayer;return{runs:t.runs+1,wins:t.wins+(r?1:0),bestPoints:Math.max(t.bestPoints,s?s.points:0),unlocked:t.unlocked.slice()}}var hi=.9,I0=.3,Tc=8,Ff=3,P0=6+.8,ya=3,iw=4.5,sw=.015,rw=.004,L0=60,Et={asphaltA:[.27,.225,.2],asphaltB:[.31,.26,.23],rampDark:[.13,.13,.15],yellow:[1,.82,.05],black:[.04,.04,.05],white:[.95,.95,.92],red:[.86,.14,.12],checkW:[.95,.95,.95],checkB:[.04,.04,.05],railA:[.93,.92,.88],railB:[.8,.2,.12],neonCyan:[.2,1,1],neonMag:[1,.15,.9],sand:[.3,.48,.15],motorwayA:[.2,.2,.21],motorwayB:[.22,.22,.23],lane:[.34,.33,.31],gravel:[.24,.4,.13],tunOchreA:[.5,.39,.2],tunOchreB:[.44,.34,.17],sodium:[1,.72,.28],tunA:[.16,.18,.24],tunB:[.21,.23,.3],concrete:[.36,.38,.42],concreteB:[.3,.32,.36],post:[.12,.13,.16],beam:[.1,.1,.12],mast:[.17,.18,.22]},Ac=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],D0=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],ow=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],Cn=(n,e,t)=>n+(e-n)*t,Vn=class{constructor(){this.pos=[],this.col=[],this.uv=[],this.idx=[],this.n=0}quad(e,t,i,s){let[r,o,a,l]=e,c=D0(Ac(o,r),Ac(a,r)),u=D0(Ac(a,r),Ac(l,r)),h=[c[0]+u[0],c[1]+u[1],c[2]+u[2]];if(!(Math.hypot(h[0],h[1],h[2])>1e-12))return;let f=ow(h,i)<0,p=this.n;for(let g=0;g<4;g++){let x=e[g];this.pos.push(x[0],x[1],x[2]),this.col.push(t[0],t[1],t[2]);let m=s?s[g]:[0,0];this.uv.push(m[0],m[1])}this.n+=4,f?this.idx.push(p,p+2,p+1,p,p+3,p+2):this.idx.push(p,p+1,p+2,p,p+2,p+3)}};function _a(n,e,t,i,s){for(let r=0;r<3;r++){let o=(r+1)%3,a=(r+2)%3;for(let l of[-1,1]){let c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([u,h])=>{let f=[0,0,0];return f[r]=l,f[o]=u,f[a]=h,[0,1,2].map(p=>e[p]+t[0][p]*f[0]*i[0]+t[1][p]*f[1]*i[1]+t[2][p]*f[2]*i[2])});n.quad(c,s,t[r].map(u=>u*l),null)}}}function Bf(n,e,t){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new li(i);return s.colorSpace=Ft,s.anisotropy=4,s}function N0(n,e,t,i){n.beginPath(),e.forEach(([s,r],o)=>o?n.lineTo(s*t,r*i):n.moveTo(s*t,r*i)),n.closePath(),n.fill()}var aw=[[.12,.1],[.82,.5],[.12,.9],[.12,.68],[.5,.5],[.12,.32]];function Rc(n,e,t){let i=t??Qn(n.seed??1),s=n.pts,r=s.length,o=n.step??n.length/r,a=n.length??r*o,l=n.features??[],c=l.filter(N=>N.type==="ramp"),u=l.filter(N=>N.type==="boost"),h=l.filter(N=>N.type==="tunnel"),f=Math.max(0,Math.min(1,e.sheen??e.wet??0)),p=!!e.night,g=new lt;g.name="road";let x=[],m=[],d=[],b=N=>(m.push(N),N),M=Bf(128,128,(N,te,j)=>{N.fillStyle="#f3efe6",N.fillRect(0,0,te,j),N.fillStyle="#d6202a",N0(N,aw,te,j)}),y=Bf(256,128,(N,te,j)=>{N.fillStyle="#04141a",N.fillRect(0,0,te,j),N.fillStyle="#37f3ff",N0(N,[[.05,.1],[.8,.5],[.05,.9],[.05,.7],[.4,.5],[.05,.3]],te,j)}),T=Bf(1024,256,(N,te,j)=>{N.fillStyle="#0b0e16",N.fillRect(0,0,te,j),N.strokeStyle="#ffd21f",N.lineWidth=10,N.strokeRect(12,12,te-24,j-24),N.fillStyle="#ffd21f",N.font="bold 150px Arial, Helvetica, sans-serif",N.textAlign="center",N.textBaseline="middle",N.fillText("POLYGON RUSH",te/2,j/2+8)});for(let N of[M,y,T])N&&d.push(N);y&&(y.wrapS=Dn);let E=b(new ot({vertexColors:!0,flatShading:!0,roughness:.85-.6*f,metalness:f>0?.2:.02})),v=b(new zt({vertexColors:!0})),w=b(new ot({vertexColors:!0,flatShading:!0,color:16777215,emissive:16777215,emissiveIntensity:.14,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),_=b(new ot({vertexColors:!0,flatShading:!0,roughness:1})),S=b(new ot({vertexColors:!0,flatShading:!0,roughness:.5,metalness:.2})),R=b(new zt({vertexColors:!0})),D=b(new ot({color:M?16777215:16762906,map:M,emissive:M?16777215:16762906,emissiveMap:M,emissiveIntensity:.5,flatShading:!0})),O=b(new ot({color:207411,emissive:3666943,emissiveMap:y,emissiveIntensity:2.2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),I=b(new ot({vertexColors:!0,flatShading:!0,side:Nt,roughness:.9})),k=b(new zt({vertexColors:!0})),q=b(new ot({vertexColors:!0,flatShading:!0,roughness:.6})),Q=b(new ot({color:T?16777215:16765471,map:T,emissive:T?16777215:16756736,emissiveMap:T,emissiveIntensity:.7,flatShading:!0})),V=b(new ot({color:2830138,flatShading:!0,roughness:.7})),$=b(new ot({color:16773570,emissive:16765562,emissiveIntensity:p?2.5:.8,flatShading:!0})),oe=N=>{for(let te of c)if(N>=te.s0&&N<te.s1)return te.height*(N-te.s0)/(te.s1-te.s0);return 0},ie=N=>c.some(te=>N>=te.s0&&N<te.s1),ye=N=>h.some(te=>N>=te.s0&&N<=te.s1),Se=N=>{let te=N/o,j=Math.floor(te),F=te-j;j=n.open?Math.max(0,Math.min(r-2,j)):(j%r+r)%r;let C=s[j],J=s[(j+1)%r],B=Cn(C.rx,J.rx,F),ne=Cn(C.rz,J.rz,F),K=Math.hypot(B,ne)||1,he=Cn(C.tx,J.tx,F),Ce=Cn(C.tz,J.tz,F),ke=Math.hypot(he,Ce)||1,Fe=Cn(C.y,J.y,F);return{s:N,x:Cn(C.x,J.x,F),z:Cn(C.z,J.z,F),yb:Fe,y:Fe,h:0,rx:B/K,rz:ne/K,tx:he/ke,tz:Ce/ke,w:Cn(C.width,J.width,F),curv:Cn(C.curv,J.curv,F),sample:!1}},U=(N,te,j)=>({x:Cn(N.x,te.x,j),y:Cn(N.y,te.y,j),yb:Cn(N.yb,te.yb,j),z:Cn(N.z,te.z,j),rx:Cn(N.rx,te.rx,j),rz:Cn(N.rz,te.rz,j),w:Cn(N.w,te.w,j)}),X=(N,te,j=0)=>[N.x+N.rx*te,N.y+j,N.z+N.rz*te],W=(N,te,j=0)=>[N.x+N.rx*te,N.yb+j,N.z+N.rz*te],Y=[];for(let N of c)Y.push({s:N.s0,h:0},{s:N.s1,h:N.height},{s:N.s1,h:0});Y.sort((N,te)=>N.s-te.s);let z=[],G=0,de=(N,te,j)=>{let F=z[z.length-1];if(F&&Math.abs(F.s-N)<1e-9&&Math.abs(F.h-te)<1e-9){F.sample=F.sample||j;return}let C=Se(N);C.h=te,C.y=C.yb+te,C.sample=j,z.push(C)};for(let N=0;N<r;N++){let te=N*o;for(;G<Y.length&&Y[G].s<=te+1e-9;)de(Y[G].s,Y[G].h,!1),G++;de(te,oe(te),!0)}for(;G<Y.length;)de(Y[G].s,Y[G].h,!1),G++;let xe=z.length,Ne=[];for(let N=0;N<xe&&!(n.open&&N===xe-1);N++){let te=z[N],j=z[(N+1)%xe],F=te.s,C=N+1<xe?z[N+1].s:a,J=Math.abs(C-F)<1e-9,B=(F+C)/2;Ne.push({a:te,b:j,sa:F,sb:C,drop:J,mid:B,ramp:!J&&ie(B)})}let He=new Vn,Z=new Vn,ae=new Vn,Ee=new Vn,we=new Vn,Te=new Vn,De=new Vn,me=new Vn,P=new Vn,A=new Vn,ee=new Vn,le=new Vn,ge=N=>N.w/2+6-I0/2,fe=N=>N.w/2+6+I0/2;for(let N of Ne){let{a:te,b:j,sa:F,sb:C,mid:J}=N;if(N.drop){He.quad([X(te,-te.w/2),X(te,te.w/2),X(j,j.w/2),X(j,-j.w/2)],Et.rampDark,[te.tx,0,te.tz]);continue}let B=te.w/2,ne=j.w/2;if(N.ramp)Z.quad([X(te,-B),X(te,B),X(j,ne),X(j,-ne)],Math.floor(J/2)%2===0?Et.yellow:Et.black,[0,1,0]),He.quad([X(te,-B),X(j,-ne),W(j,-ne),W(te,-B)],Et.rampDark,[-te.rx,0,-te.rz]),He.quad([X(te,B),W(te,B),W(j,ne),X(j,ne)],Et.rampDark,[te.rx,0,te.rz]);else{He.quad([X(te,-B),X(te,B),X(j,ne),X(j,-ne)],n.open?Math.floor(J/8)%2?Et.motorwayB:Et.motorwayA:Math.floor(J/8)%2?Et.asphaltB:Et.asphaltA,[0,1,0]);for(let Fe of[-1,1])ae.quad([X(te,Fe*(B-.25),.02),X(te,Fe*(B-.45),.02),X(j,Fe*(ne-.45),.02),X(j,Fe*(ne-.25),.02)],Et.white,[0,1,0]);let K=9,he=3;for(let Fe=Math.floor(F/K);Fe*K<C;Fe++){let Ie=Math.max(F,Fe*K),ce=Math.min(C,Fe*K+he);if(ce-Ie<1e-6)continue;let se=U(te,j,(Ie-F)/(C-F)),pe=U(te,j,(ce-F)/(C-F));ae.quad([X(se,-.08,.02),X(se,.08,.02),X(pe,.08,.02),X(pe,-.08,.02)],Et.white,[0,1,0])}let Ce=Math.abs((te.curv+j.curv)/2)>rw?1.2:.5,ke=Math.floor(J/2)%2?Et.red:Et.railA;for(let Fe of n.open?[]:[-1,1])ae.quad([X(te,Fe*B,.025),X(te,Fe*(B+Ce),.025),X(j,Fe*(ne+Ce),.025),X(j,Fe*ne,.025)],ke,[0,1,0])}for(let K of[-1,1]){Ee.quad([W(te,K*B),W(te,K*ge(te)),W(j,K*ge(j)),W(j,K*ne)],n.open?Et.lane:Et.sand,[0,1,0]);let he=Tc/2,Ce=-Ff/2,ke=-Ff,Fe=[K*te.rx*.6,.8,K*te.rz*.6];Ee.quad([W(te,K*fe(te),0),W(te,K*(fe(te)+he),Ce),W(j,K*(fe(j)+he),Ce),W(j,K*fe(j),0)],Et.gravel,Fe),Ee.quad([W(te,K*(fe(te)+he),Ce),W(te,K*(fe(te)+Tc),ke),W(j,K*(fe(j)+Tc),ke),W(j,K*(fe(j)+he),Ce)],Et.gravel,Fe);let Ie=Math.floor(J/6)%2?Et.railB:Et.railA,ce=K*ge(te),se=K*ge(j),pe=K*fe(te),be=K*fe(j);!n.open&&(K<0||p||e.openRight===!1)&&(we.quad([W(te,ce,0),W(te,ce,hi),W(j,se,hi),W(j,se,0)],Ie,[-K*te.rx,0,-K*te.rz]),we.quad([W(te,pe,0),W(te,pe,hi),W(j,be,hi),W(j,be,0)],Ie,[K*te.rx,0,K*te.rz]),we.quad([W(te,ce,hi),W(te,pe,hi),W(j,be,hi),W(j,se,hi)],Ie,[0,1,0])),p&&Te.quad([W(te,ce,hi+.02),W(te,pe,hi+.02),W(j,be,hi+.02),W(j,se,hi+.02)],K<0?Et.neonCyan:Et.neonMag,[0,1,0])}}for(let N of z){if(!N.sample||Math.abs(N.curv)<=sw||Math.round(N.s/o)%8!==0||ye(N.s)||ie(N.s))continue;let j=-Math.sign(N.curv)*(N.w/2+6+.6),C=N.curv>0?[[0,0],[1,0],[1,1],[0,1]]:[[1,0],[0,0],[0,1],[1,1]];De.quad([W(N,j-.6,1),W(N,j+.6,1),W(N,j+.6,2),W(N,j-.6,2)],[1,1,1],[-N.tx,0,-N.tz],C),_a(ee,[N.x+N.rx*j,N.yb+.35,N.z+N.rz*j],[[N.tx,0,N.tz],[N.rx,0,N.rz],[0,1,0]],[.08,.12,.65],Et.post)}if(!n.noStart){let N=Se(0),te=Math.max(4,Math.round(N.w)),j=N.w/te;for(let B=0;B<3;B++){let ne=Se(-2+B),K=Se(-1+B);for(let he=0;he<te;he++){let Ce=-N.w/2+he*j,ke=Ce+j;ae.quad([X(ne,Ce,.03),X(ne,ke,.03),X(K,ke,.03),X(K,Ce,.03)],(B+he)%2?Et.checkB:Et.checkW,[0,1,0])}}let F=N.w/2+6+.5,C=[[N.tx,0,N.tz],[N.rx,0,N.rz],[0,1,0]];for(let B of[-1,1])_a(ee,[N.x+N.rx*B*F,N.yb+4,N.z+N.rz*B*F],C,[.3,.3,4],Et.post);_a(ee,[N.x,N.yb+7.5,N.z],C,[.5,F,.5],Et.beam);let J=(B,ne,K)=>[N.x+N.tx*B+N.rx*ne,N.yb+K,N.z+N.tz*B+N.rz*ne];le.quad([J(-.55,-F,5.2),J(-.55,F,5.2),J(-.55,F,6.8),J(-.55,-F,6.8)],[1,1,1],[-N.tx,0,-N.tz],[[0,0],[1,0],[1,1],[0,1]]),le.quad([J(.55,-F,5.2),J(.55,F,5.2),J(.55,F,6.8),J(.55,-F,6.8)],[1,1,1],[N.tx,0,N.tz],[[1,0],[0,0],[0,1],[1,1]]);for(let B of u){let ne=[];for(let he=B.s0;he<B.s1;he+=2)ne.push(he);ne.push(B.s1);let K=ne.map(Se);for(let he=0;he+1<K.length;he++){let Ce=K[he],ke=K[he+1],Fe=(Ce.s-B.s0)/4,Ie=(ke.s-B.s0)/4;me.quad([X(Ce,-Ce.w/2,.04),X(Ce,Ce.w/2,.04),X(ke,ke.w/2,.04),X(ke,-ke.w/2,.04)],[1,1,1],[0,1,0],[[Fe,0],[Fe,1],[Ie,1],[Ie,0]])}}}let Oe=N=>{let te=N.w/2+P0,j=[[-te,0],[-te,ya]];for(let F=1;F<=7;F++){let C=Math.PI-F*Math.PI/8;j.push([te*Math.cos(C),ya+iw*Math.sin(C)])}return j.push([te,ya],[te,0]),j},Re=(N,te,j,F=0)=>[N.x+N.rx*te+N.tx*F,N.yb+j,N.z+N.rz*te+N.tz*F],Ue=(N,te,j)=>{let F=-te,C=ya-j,J=Math.hypot(F,C)||1;return[N.rx*F/J,C/J,N.rz*F/J]},Xe=([N,te])=>{let j=-N,F=ya-te,C=Math.hypot(j,F)||1;return[N+j/C*.45,te+F/C*.45]};for(let N of h){let te=[];for(let F=N.s0;F<N.s1;F+=2)te.push(F);te.push(N.s1);let j=te.map(Se);for(let F=0;F+1<j.length;F++){let C=j[F],J=j[F+1],B=Oe(C),ne=Oe(J);for(let K=0;K<B.length-1;K++){let he=(B[K][0]+B[K+1][0])/2,Ce=(B[K][1]+B[K+1][1])/2;P.quad([Re(C,B[K][0],B[K][1]),Re(C,B[K+1][0],B[K+1][1]),Re(J,ne[K+1][0],ne[K+1][1]),Re(J,ne[K][0],ne[K][1])],n.open?K%2?Et.tunOchreA:Et.tunOchreB:K%2?Et.tunA:Et.tunB,Ue(C,he,Ce))}if(Math.round((C.s-N.s0)/2)%6===0)for(let K=1;K<=8;K++){let he=Xe(B[K]),Ce=Xe(B[K+1]),ke=(he[0]+Ce[0])/2,Fe=(he[1]+Ce[1])/2;A.quad([Re(C,he[0],he[1]),Re(C,Ce[0],Ce[1]),Re(C,Ce[0],Ce[1],.6),Re(C,he[0],he[1],.6)],n.open?Et.sodium:K%2?Et.neonCyan:Et.neonMag,Ue(C,ke,Fe))}}for(let F of[N.cutStart?null:j[0],N.cutEnd?null:j[j.length-1]]){if(!F)continue;let C=F.w/2+P0,J=[[F.tx,0,F.tz],[F.rx,0,F.rz],[0,1,0]];for(let B of[-1,1])_a(P,[F.x+F.rx*B*(C+1.2),F.yb+5,F.z+F.rz*B*(C+1.2)],J,[2,1.1,5],Et.concrete);_a(P,[F.x,F.yb+10.5,F.z],J,[2,C+3.5,1.5],Et.concreteB)}}let Ae=(N,te,j,F=!1)=>{if(!N.idx.length)return null;let C=new ht;C.setAttribute("position",new rt(N.pos,3)),C.setAttribute("color",new rt(N.col,3)),C.setAttribute("uv",new rt(N.uv,2)),C.setIndex(N.idx),C.computeVertexNormals(),x.push(C);let J=new et(C,te);return J.name=j,J.receiveShadow=F,g.add(J),J};Ae(He,E,"road-asphalt",!0),Ae(Z,v,"road-ramp-top"),Ae(ae,w,"road-paint"),Ae(Ee,_,"road-shoulder-talus"),Ae(we,S,"road-barriers"),p&&Ae(Te,R,"road-barrier-neon"),Ae(De,D,"road-chevrons"),Ae(me,O,"road-boost"),Ae(P,I,"road-tunnels"),Ae(A,k,"road-tunnel-neon"),Ae(ee,q,"road-props"),Ae(le,Q,"road-start-sign");let ze=[];for(let N=1;N*L0<a-5;N++){let te=N*L0;if(h.some(ne=>te>=ne.s0-15&&te<=ne.s1+15))continue;let j=Se(te),F=N%2?1:-1,C=F*(j.w/2+6+2.6),J=j.yb-Ff*Math.min(1,2.45/Tc),B=i.range(8.5,9.5);ze.push({x:j.x+j.rx*C,z:j.z+j.rz*C,y:J,h:B,hx:j.x+j.rx*(C-F*.6),hz:j.z+j.rz*(C-F*.6)})}if(ze.length){let N=new Qt(.18,.26,9,6,1),te=new Zn(.55,0);x.push(N,te);let j=new Tn(N,V,ze.length),F=new Tn(te,$,ze.length);j.name="road-lamp-masts",F.name="road-lamp-heads";let C=new je,J=new an,B=new H,ne=new H;ze.forEach((K,he)=>{ne.set(K.x,K.y+K.h/2,K.z),B.set(1,K.h/9,1),C.compose(ne,J,B),j.setMatrixAt(he,C),ne.set(K.hx,K.y+K.h+.2,K.hz),B.set(1,1,1),C.compose(ne,J,B),F.setMatrixAt(he,C)}),j.instanceMatrix.needsUpdate=!0,F.instanceMatrix.needsUpdate=!0,g.add(j,F)}return{group:g,update:(N,te)=>{y&&(y.offset.x=-(te*.9%1)),O.emissiveIntensity=2.2+.5*Math.sin(te*5)},dispose:()=>{g.removeFromParent();for(let N of x)N.dispose();for(let N of m)N.dispose();for(let N of d)N.dispose()}}}function O0(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new ht,c=0;for(let u=0;u<n.length;++u){let h=n[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let p=n[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=U0(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let p=[];for(let x=0;x<o[u].length;++x)p.push(o[u][x][f]);let g=U0(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function U0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new yt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,p=u.count;f<p;f++)for(let g=0;g<t;g++){let x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function zf(n,e){if(e===Bm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===pa||e===lc){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===pa)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var lw=0;function _o(n,e=.5,t=1){if(!n||n.userData.voxel||!(n.isMeshStandardMaterial||n.isMeshLambertMaterial))return n;n.userData.voxel=!0;let i=n.onBeforeCompile;return n.onBeforeCompile=(s,r)=>{i?.call(n,s,r),s.uniforms.uVoxCell={value:e},s.uniforms.uVoxStrength={value:t*lw},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"voxel-"+e+"-"+t,n.needsUpdate=!0,n}var cw=/asphalt|paint|boost|sign|ramp|neon|lamp-heads/;function F0(n,e){n.traverse(t=>{if(!t.isMesh||cw.test(t.name))return;let i=Array.isArray(t.material)?t.material:[t.material];for(let s of i)!s||s.transparent||s.emissiveIntensity>1.2||(s.roughness??1)<.35||_o(s,e(t),1)})}function B0(n,e,t=46){let i=[];for(let l=0;l<t;l++){let c=e.range(0,Math.PI*2),u=e.range(700,4200),h=Math.cos(c)*u,f=Math.sin(c)*u,p=e.range(260,520),g=e.range(26,46),x=e.int(5,11);for(let m=0;m<x;m++)i.push([h+Math.round(e.range(-3.5,3.5))*g,p+Math.round(e.range(0,1.4))*g*.6,f+Math.round(e.range(-2,2))*g,g*e.int(1,3),g*.6*e.int(1,2),g*e.int(1,2)])}let s=new Zn(.72,0),r=new jn({color:n.night?2765648:16777215,fog:!1,flatShading:!0,emissive:n.night?329487:new Le(16777215).lerp(new Le(n.skyHorizon),.35).multiplyScalar(.5)}),o=new Tn(s,r,i.length),a=new je;return i.forEach((l,c)=>{a.makeScale(l[3],l[4],l[5]),a.setPosition(l[0],l[1],l[2]),o.setMatrixAt(c,a)}),o.instanceMatrix.needsUpdate=!0,o.frustumCulled=!1,o.name="voxel-clouds",o}function z0(n,e,t,i,s,r,o,a,l,c){let u=e+s,h=t+r,f=i+o,p,g,x,m,d,b;s?(p=0,g=l?1:-1,x=0,m=0,d=0,b=c?1:-1):r?(p=a?1:-1,g=0,x=0,m=0,d=0,b=c?1:-1):(p=a?1:-1,g=0,x=0,m=0,d=l?1:-1,b=0);let M=n(u+p,h+g,f+x)?1:0,y=n(u+m,h+d,f+b)?1:0,T=n(u+p+m,h+g+d,f+x+b)?1:0;return .5+.1667*(M&&y?0:3-(M+y+T))}function Vs(n,e){let t=n.index?n.toNonIndexed():n,i=t.attributes.position,s=t.attributes.color,r=512,o=(m,d,b)=>m+r+(d+r)*1024+(b+r)*1048576,a=new Map,l=(m,d,b,M,y,T)=>{let E=Math.floor(m/e),v=Math.floor(d/e),w=Math.floor(b/e),_=o(E,v,w);a.has(_)||a.set(_,[E,v,w,M,y,T])};for(let m=0;m<i.count;m+=3){let d=i.getX(m),b=i.getY(m),M=i.getZ(m),y=i.getX(m+1),T=i.getY(m+1),E=i.getZ(m+1),v=i.getX(m+2),w=i.getY(m+2),_=i.getZ(m+2),S=.6,R=.6,D=.6;s&&(S=(s.getX(m)+s.getX(m+1)+s.getX(m+2))/3,R=(s.getY(m)+s.getY(m+1)+s.getY(m+2))/3,D=(s.getZ(m)+s.getZ(m+1)+s.getZ(m+2))/3);let O=Math.max(Math.hypot(y-d,T-b,E-M),Math.hypot(v-d,w-b,_-M),Math.hypot(v-y,w-T,_-E)),I=Math.max(1,Math.ceil(O/e*2));for(let k=0;k<=I;k++)for(let q=0;q<=I-k;q++){let Q=k/I,V=q/I;l(d+(y-d)*Q+(v-d)*V,b+(T-b)*Q+(w-b)*V,M+(E-M)*Q+(_-M)*V,S,R,D)}}let c=new Map;for(let m of a.values()){let d=m[0]+r+(m[2]+r)*1024,b=c.get(d);b||c.set(d,b=[]),b.push(m)}for(let m of c.values()){m.sort((d,b)=>d[1]-b[1]);for(let d=0;d<m.length-1;d++)for(let b=m[d][1]+1;b<m[d+1][1];b++)a.set(o(m[d][0],b,m[d][2]),[m[d][0],b,m[d][2],m[d][3],m[d][4],m[d][5]])}let u=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],h=[],f=[],p=[],g=(m,d,b)=>a.has(o(m,d,b));for(let m of a.values()){let[d,b,M,y,T,E]=m,v=Math.sin(d*12.9898+b*78.233+M*37.719)*43758.5453,w=.86+.24*(v-Math.floor(v));for(let[_,S,R,D]of u)if(!a.has(o(d+_,b+S,M+R)))for(let O of[0,1,2,0,2,3]){let I=D[O*3],k=D[O*3+1],q=D[O*3+2],Q=w*z0(g,d,b,M,_,S,R,I,k,q);h.push((d+I)*e,(b+k)*e,(M+q)*e),f.push(_,S,R),p.push(y*Q,T*Q,E*Q)}}let x=new ht;return x.setAttribute("position",new rt(h,3)),x.setAttribute("normal",new rt(f,3)),x.setAttribute("color",new rt(p,3)),x.computeBoundingSphere(),x}function Ci(n,e,t,i,s,r=.2){let o=new Array(n*e*t),a=(x,m,d)=>x<0||m<0||d<0||x>=n||m>=e||d>=t?null:o[x+n*(m+e*d)];for(let x=0;x<t;x++)for(let m=0;m<e;m++)for(let d=0;d<n;d++)o[d+n*(m+e*x)]=s(d,m,x)||null;let l=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],c=[],u=[],h=[],f=-n/2,p=-t/2;for(let x=0;x<t;x++)for(let m=0;m<e;m++)for(let d=0;d<n;d++){let b=o[d+n*(m+e*x)];if(!b)continue;let M=Math.sin(d*12.9898+m*78.233+x*37.719)*43758.5453,y=1-r/2+r*(M-Math.floor(M));for(let[T,E,v,w]of l)if(!a(d+T,m+E,x+v)&&!(E<0&&m===0))for(let _ of[0,1,2,0,2,3]){let S=w[_*3],R=w[_*3+1],D=w[_*3+2],O=y*z0(a,d,m,x,T,E,v,S,R,D);c.push((d+f+S)*i,(m+R)*i,(x+p+D)*i),u.push(T,E,v),h.push(b[0]*O,b[1]*O,b[2]*O)}}let g=new ht;return g.setAttribute("position",new rt(c,3)),g.setAttribute("normal",new rt(u,3)),g.setAttribute("color",new rt(h,3)),g.computeBoundingSphere(),g}function k0(n,e=1,t=null){if(!n||n.userData.wetRoad)return n;n.userData.wetRoad=!0;let i=n.onBeforeCompile;return n.onBeforeCompile=(s,r)=>{i?.call(n,s,r),s.uniforms.uWet={value:e},s.uniforms.tRefl={value:t?t.texture:null},s.uniforms.uReflMatrix={value:t?t.matrix:new je},s.uniforms.uReflOn={value:t?1:0},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"wet-road-"+e+(t?"-refl":""),n.needsUpdate=!0,n}function kf(n,e){let t=1/0,i=-1/0,s=1/0,r=-1/0,o=1/0,a=-1/0;for(let f=0;f<n.length;f+=4)t=Math.min(t,n[f]),i=Math.max(i,n[f]),s=Math.min(s,n[f+1]),r=Math.max(r,n[f+1]),o=Math.min(o,n[f+2]),a=Math.max(a,n[f+2]);let l=i-t+1,c=r-s+1,u=a-o+1,h=new Map;for(let f=0;f<n.length;f+=4){let p=n[f+3];h.set(n[f]-t+l*(n[f+1]-s+c*(n[f+2]-o)),[(p>>16&255)/255,(p>>8&255)/255,(p&255)/255])}return Ci(l,c,u,e,(f,p,g)=>h.get(f+l*(p+c*g))||null,.12)}function H0(n,e=3.1,t=2.6){if(!n||!n.userData.voxel||n.userData.windows)return n;n.userData.windows=!0;let i=n.onBeforeCompile;n.onBeforeCompile=(r,o)=>{i?.call(n,r,o),r.fragmentShader=r.fragmentShader.replace("#include <roughnessmap_fragment>",`
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
        #include <roughnessmap_fragment>`)};let s=n.customProgramCacheKey?.()||"";return n.customProgramCacheKey=()=>s+"-win-"+e+"-"+t,n.needsUpdate=!0,n}function V0(n){let e={value:0};return n.onBeforeCompile=t=>{t.uniforms.uSeaTime=e,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"sea-waves",n.needsUpdate=!0,e}var gn=5,G0=1,Gs=450,ei=40,W0=12e3,X0=32,q0=4e3,ti=Math.PI*2,Ma=new Wt,bo=new Le,Y0=new je,$0=new je,uw=new H(0,1,0),Z0=n=>n<0?0:n>1?1:n,Hi=(n,e,t)=>n<e?e:n>t?t:n,mr=(n,e,t)=>{let i=Z0((t-n)/(e-n));return i*i*(3-2*i)};function hw(n){let e=(i,s)=>{let r=Math.imul(i|0,374761393)+Math.imul(s|0,668265263)+n|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},t=(i,s)=>{let r=Math.floor(i),o=Math.floor(s),a=i-r,l=s-o,c=a*a*(3-2*a),u=l*l*(3-2*l),h=e(r,o),f=e(r+1,o),p=e(r,o+1),g=e(r+1,o+1);return h+(f-h)*c+(p-h)*u+(h-f-p+g)*c*u};return(i,s)=>(t(i,s)*.5+t(i*2+17.3,s*2-9.1)*.25+t(i*4-3.7,s*4+11.2)*.125)/.875}var Mo=n=>{let e=new Le(n);return[e.r,e.g,e.b]},Ws={sand:Mo(14271631),dry:Mo(7317050),garrigue:Mo(5212718),rock:Mo(12169890),pale:Mo(13617336),snow:Mo(15855076)},fw=[16513264,15853260,14725754,16052195],dw=[9075302,7236192,11047018,8023646],pw=[3407871,16727250,16757051],Cc=0,Ic=0,Pc=0,ba=(n,e)=>{Cc+=(n[0]-Cc)*e,Ic+=(n[1]-Ic)*e,Pc+=(n[2]-Pc)*e};function mw(n,e,t,i,s,r){Cc=Ws.sand[0],Ic=Ws.sand[1],Pc=Ws.sand[2],ba(Ws.dry,mr(2.5,7,n)),ba(Ws.garrigue,mr(25,75,n)*.55),ba(Ws.rock,mr(.4,.65,e)),ba(Ws.pale,mr(95,120,n)*.8),ba(Ws.snow,mr(125,150,n));let o=Cc*t,a=Ic*t,l=Pc*t;i&&(o=o*.45+.02,a=a*.5+.03,l=l*.75+.09);for(let c=0;c<9;c+=3)s[r+c]=o,s[r+c+1]=a,s[r+c+2]=l}function fi(n,e){let t=n.index?n.toNonIndexed():n;t.attributes.uv&&t.deleteAttribute("uv"),t.attributes.normal||t.computeVertexNormals();let i=t.attributes.position.count,s=new Float32Array(i*3);bo.setHex(e);for(let r=0;r<i;r++)s[r*3]=bo.r,s[r*3+1]=bo.g,s[r*3+2]=bo.b;return t.setAttribute("color",new yt(s,3)),t}var Sa=n=>O0(n,!1);function gw(n,e,t){let i=Math.sin(n*12.9898+e*78.233+t*37.719)*43758.5453;return i-Math.floor(i)}function xw(){let n=new Zn(1,0),e=n.attributes.position;for(let t=0;t<e.count;t++){let i=e.getX(t),s=e.getY(t),r=e.getZ(t),o=.8+.4*gw(i,s,r);e.setXYZ(t,i*o,s*o,r*o)}return n.computeVertexNormals(),n}function vw(){return Sa([fi(new Qt(.35,.5,6,6).translate(0,3,0),7162931),fi(new Zn(3.4,0).scale(1,.55,1).translate(0,7.4,0),4160058)])}function yw(){return Sa([fi(new Qt(.25,.35,1.2,5).translate(0,.6,0),7162931),fi(new $n(1.1,10,6).translate(0,6,0),3037756)])}function _w(){let n=[fi(new Qt(.22,.35,8,5).translate(0,4,0),9071178)];for(let e=0;e<7;e++){let t=new $n(.55,4.6,3).rotateZ(Math.PI/2-.45).translate(0,8.4,0).rotateY(e*ti/7);n.push(fi(t,5214010))}return Sa(n)}function Mw(){return Sa([fi(new Qt(1.6,2.3,13,8).translate(0,6.5,0),16052712),fi(new Qt(2,2,2.2,8).translate(0,6.5,0),12727595),fi(new Qt(1.3,1.3,1.8,8).translate(0,14,0),16771488),fi(new $n(1.7,1.2,8).translate(0,15.4,0),3812906)])}function bw(){return Sa([fi(new dn(2.2,.9,6).translate(0,.45,0),15986662),fi(new $n(1.9,5.4,3).scale(.1,1,1).translate(0,3.6,-.3),16775400)])}function Ii(n,e,t,i=!0){let s=new Tn(n,e,t.length);for(let r=0;r<t.length;r++){let o=t[r];Ma.position.set(o.x,o.y,o.z),Ma.rotation.set(0,o.ry??0,0),Ma.scale.set(o.sx??1,o.sy??1,o.sz??1),Ma.updateMatrix(),s.setMatrixAt(r,Ma.matrix),o.col!==void 0&&(bo.setHex(o.col).multiplyScalar(o.v??1),s.setColorAt(r,bo))}return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.castShadow=i,s}var Sw=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Ew=`
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
}`;function K0(n,e,t,i){let s=e.pts,r=s.length,o=e.bounds,a=!!t.night,l=hw(i.int(1,1073741808)),c=o.minX-Gs-ei,u=o.minZ-Gs-ei,h=Math.ceil((o.maxX-o.minX+2*Gs)/ei)+3,f=Math.ceil((o.maxZ-o.minZ+2*Gs)/ei)+3,p=Array.from({length:h*f},()=>[]);for(let ce=0;ce<r;ce++){let se=Hi(Math.floor((s[ce].x-c)/ei),0,h-1),pe=Hi(Math.floor((s[ce].z-u)/ei),0,f-1);p[pe*h+se].push(ce)}let g=0;function x(ce,se){let pe=Math.floor((ce-c)/ei),be=Math.floor((se-u)/ei),Pe=Math.max(h,f),ve=1/0,Ve=0;for(let Ge=0;Ge<=Pe;Ge++){for(let Je=be-Ge;Je<=be+Ge;Je++){if(Je<0||Je>=f)continue;let xt=Je===be-Ge||Je===be+Ge?1:2*Ge;for(let Mt=pe-Ge;Mt<=pe+Ge;Mt+=xt){if(Mt<0||Mt>=h)continue;let Ut=p[Je*h+Mt];for(let Ct=0;Ct<Ut.length;Ct++){let yn=Ut[Ct],L=s[yn],re=L.x-ce,_e=L.z-se,Me=re*re+_e*_e;Me<ve&&(ve=Me,Ve=yn)}}}let qe=Ge*ei;if(ve<=qe*qe)break}return g=Math.sqrt(ve),Ve}function m(ce,se,pe){let be=pe*pe,Pe=1/0,ve=Hi(Math.floor((ce-pe-c)/ei),0,h-1),Ve=Hi(Math.floor((ce+pe-c)/ei),0,h-1),Ge=Hi(Math.floor((se-pe-u)/ei),0,f-1),qe=Hi(Math.floor((se+pe-u)/ei),0,f-1);for(let Je=Ge;Je<=qe;Je++)for(let ut=ve;ut<=Ve;ut++){let xt=p[Je*h+ut];for(let Mt=0;Mt<xt.length;Mt++){let Ut=s[xt[Mt]],Ct=Ut.x-ce,yn=Ut.z-se;Ct*Ct+yn*yn<=be&&Ut.y<Pe&&(Pe=Ut.y)}}return Pe}let d=Math.ceil(r/4),b=new Float64Array(d*2);for(let ce=0;ce<d;ce++)b[2*ce]=s[ce*4%r].x,b[2*ce+1]=s[ce*4%r].z;function M(ce,se){let pe=!1;for(let be=0,Pe=d-1;be<d;Pe=be++){let ve=b[2*be],Ve=b[2*be+1],Ge=b[2*Pe],qe=b[2*Pe+1];Ve>se!=qe>se&&ce<(Ge-ve)*(se-Ve)/(qe-Ve)+ve&&(pe=!pe)}return pe}let y=o.minX-Gs,T=o.minZ-Gs,E=Math.ceil((o.maxX-o.minX+2*Gs)/gn)+1,v=Math.ceil((o.maxZ-o.minZ+2*Gs)/gn)+1,w=new Float32Array(E*v);for(let ce=0;ce<v;ce++)for(let se=0;se<E;se++){let pe=y+se*gn,be=T+ce*gn,Pe=x(pe,be),ve=g,Ve=s[Pe],Ge=Ve.width*.5,qe=Ve.y;if(ve<40){let re=m(pe,be,24);re<qe&&(qe=re)}let Je=1;if(!M(pe,be)){let re=ve-Ge+(l(pe/140+31.7,be/140-8.2)-.5)*70;Je=1-mr(110,200,re)}let ut=l(pe/260,be/260),Mt=-15+(10+130*Math.pow(Z0((ut-.42)/.5),1.5)+6*ut+15)*Je;if(Je>=1){let re=l(pe/90+11.3,be/90-4.1);Mt=Math.max(Mt,qe+6+38*re)}let Ut=mr(Ge+6+12,Ge+6+62,ve),Ct=qe-.6,yn=Ct+(Mt-Ct)*Ut,L=qe+Math.max(0,ve-Ge-6-12)*1.2;yn>L&&(yn=L),w[ce*E+se]=yn}let _=null;function S(ce,se){if(_)return _(ce,se);let pe=(ce-y)/gn,be=(se-T)/gn;pe=Hi(pe,0,E-1.000001),be=Hi(be,0,v-1.000001);let Pe=Math.floor(pe),ve=Math.floor(be),Ve=pe-Pe,Ge=be-ve,qe=w[ve*E+Pe],Je=w[ve*E+Pe+1],ut=w[(ve+1)*E+Pe],xt=w[(ve+1)*E+Pe+1],Mt=qe+(Je-qe)*Ve,Ut=ut+(xt-ut)*Ve;return Mt+(Ut-Mt)*Ge}let R=(ce,se)=>Math.max(Math.abs(S(ce+4,se)-S(ce-4,se)),Math.abs(S(ce,se+4)-S(ce,se-4)))/8,D=(ce,se,pe)=>{let be=x(ce,se);return g>=s[be].width*.5+6+4+pe},O=[],I=[],k=new Float32Array(9),q=(ce,se,pe,be,Pe,ve,Ve,Ge,qe)=>{let Je=be-ce,ut=Pe-se,xt=ve-pe,Mt=Ve-ce,Ut=Ge-se,Ct=qe-pe,yn=ut*Ct-xt*Ut,L=xt*Mt-Je*Ct,re=Je*Ut-ut*Mt,_e=Math.hypot(yn,L,re)||1,Me=1-Math.abs(L)/_e;O.push(ce,se,pe,be,Pe,ve,Ve,Ge,qe),mw((se+Pe+Ge)/3,Me,.9+.2*i.next(),a,k,0);for(let ue=0;ue<9;ue++)I.push(k[ue])},Q=E-1,V=v-1,$=new Float32Array(Q*V);for(let ce=0;ce<V;ce++)for(let se=0;se<Q;se++){let pe=ce*E+se,be=(w[pe]+w[pe+1]+w[pe+E]+w[pe+E+1])/4;$[ce*Q+se]=Math.floor(be/G0)*G0}let oe=-4;for(let ce=0;ce<V;ce++)for(let se=0;se<Q;se++){let pe=$[ce*Q+se],be=y+se*gn,Pe=T+ce*gn,ve=be+gn,Ve=Pe+gn;if(pe>oe&&(q(be,pe,Pe,be,pe,Ve,ve,pe,Pe),q(ve,pe,Pe,be,pe,Ve,ve,pe,Ve)),se+1<Q){let Ge=$[ce*Q+se+1],qe=Math.min(pe,Ge),Je=Math.max(pe,Ge);Je>qe&&Je>oe&&(q(ve,qe,Pe,ve,Je,Pe,ve,Je,Ve),q(ve,qe,Pe,ve,Je,Ve,ve,qe,Ve))}if(ce+1<V){let Ge=$[(ce+1)*Q+se],qe=Math.min(pe,Ge),Je=Math.max(pe,Ge);Je>qe&&Je>oe&&(q(be,qe,Ve,be,Je,Ve,ve,Je,Ve),q(be,qe,Ve,ve,Je,Ve,ve,qe,Ve))}}_=(ce,se)=>{let pe=Hi(Math.floor((ce-y)/gn),0,Q-1),be=Hi(Math.floor((se-T)/gn),0,V-1);return $[be*Q+pe]};let ie=new ht;ie.setAttribute("position",new rt(O,3)),ie.setAttribute("color",new rt(I,3)),ie.computeVertexNormals(),ie.computeBoundingSphere();let ye=new et(ie,new ot({vertexColors:!0,flatShading:!0,roughness:.94,metalness:0,side:Nt}));ye.receiveShadow=!0;let Se=new lt;Se.name="environment",Se.add(ye);let U=(o.minX+o.maxX)/2,X=(o.minZ+o.maxZ)/2,W=new Hn(W0,W0,X0,X0);W.rotateX(-Math.PI/2);let Y=W.attributes.position,z=Y.count,G=new Float32Array(z),de=new Float32Array(z);for(let ce=0;ce<z;ce++)G[ce]=Y.getX(ce),de[ce]=Y.getZ(ce);let xe=new et(W,new ot({color:t.seaColor,roughness:.25,metalness:.05,flatShading:!0}));xe.position.set(U,0,X),Se.add(xe);let Ne=new H(t.sunDir[0],t.sunDir[1],t.sunDir[2]).normalize(),He=new lt,Z=new bt({uniforms:{topColor:{value:new Le(t.skyTop)},horizonColor:{value:new Le(t.skyHorizon)},sunColor:{value:new Le(t.sunColor)},sunDir:{value:Ne},night:{value:a?1:0}},vertexShader:Sw,fragmentShader:Ew,side:sn,depthWrite:!1,fog:!1}),ae=new et(new Ns(q0,32,16),Z);if(ae.renderOrder=-10,ae.frustumCulled=!1,He.add(ae),a){let se=new Float32Array(1500);for(let Pe=0;Pe<500;Pe++){let ve=i.range(0,ti),Ve=Math.asin(i.range(.05,.98)),Ge=q0*.97;se[Pe*3]=Ge*Math.cos(Ve)*Math.cos(ve),se[Pe*3+1]=Ge*Math.sin(Ve),se[Pe*3+2]=Ge*Math.cos(Ve)*Math.sin(ve)}let pe=new ht;pe.setAttribute("position",new yt(se,3));let be=new Ds(pe,new fr({color:16777215,size:2,sizeAttenuation:!1,fog:!1,depthWrite:!1,transparent:!0,opacity:.9}));be.frustumCulled=!1,He.add(be)}Se.add(He);let Ee=new po(t.hemiSky,t.hemiGround,t.hemiIntensity),we=new Fi(t.sunColor,t.sunIntensity);we.castShadow=!0,we.shadow.mapSize.set(2048,2048);let Te=we.shadow.camera;Te.left=-90,Te.right=90,Te.top=90,Te.bottom=-90,Te.near=1,Te.far=600,Te.updateProjectionMatrix(),we.shadow.bias=-5e-4,Se.add(Ee,we,we.target);let De=n.fog,me=n.background,P=new lo(t.fogColor,t.fogDensity),A=new Le(t.skyHorizon);n.fog=P,n.background=A;let ee=y+(E-1)*gn,le=T+(v-1)*gn,ge=()=>i.range(y+30,ee-30),fe=()=>i.range(T+30,le-30),Oe=(ce,se,pe)=>{let be=[];for(let Pe=0;Pe<se&&be.length<ce;Pe++){let ve=pe(ge(),fe());ve&&be.push(ve)}return be},Re=Oe(320,4e4,(ce,se)=>{let pe=S(ce,se);if(pe<4||pe>95||!D(ce,se,2)||R(ce,se)>.6)return null;let be=i.range(.8,1.45);return{x:ce,y:pe-.3,z:se,sx:be,sy:be*i.range(.9,1.3),sz:be,ry:i.range(0,ti),col:16777215,v:i.range(.85,1.15)}}),Ue=Oe(170,4e4,(ce,se)=>{let pe=S(ce,se);if(pe<6||pe>70||!D(ce,se,1.5)||R(ce,se)>.6)return null;let be=i.range(.8,1.3);return{x:ce,y:pe-.3,z:se,sx:be,sy:be*i.range(.9,1.25),sz:be,ry:i.range(0,ti),col:16777215,v:i.range(.85,1.15)}}),Xe=Oe(110,4e4,(ce,se)=>{let pe=S(ce,se);if(pe<1.8||pe>14||!D(ce,se,2)||R(ce,se)>.5)return null;let be=i.range(.85,1.25);return{x:ce,y:pe-.3,z:se,sx:be,sy:be,sz:be,ry:i.range(0,ti),col:16777215,v:i.range(.9,1.1)}});Se.add(Ii(Vs(vw(),.8),new ot({vertexColors:!0,flatShading:!0,roughness:.9}),Re)),Se.add(Ii(Vs(yw(),.7),new ot({vertexColors:!0,flatShading:!0,roughness:.9}),Ue)),Se.add(Ii(Vs(_w(),.6),new ot({vertexColors:!0,flatShading:!0,roughness:.9}),Xe));let Ae=Oe(300,3e4,(ce,se)=>{let pe=S(ce,se);if(pe<1.5)return null;let be=i.range(1.2,4.5);return D(ce,se,be*.6)?{x:ce,y:pe+be*.15,z:se,sx:be,sy:be*i.range(.55,.9),sz:be,ry:i.range(0,ti),col:i.pick(dw),v:i.range(.85,1.15)}:null}),ze=Oe(3,3e4,(ce,se)=>{if(S(ce,se)>-4)return null;let pe=x(ce,se);if(g<s[pe].width*.5+200||g>800)return null;let be=i.range(25,45);return{x:ce,y:.1*be,z:se,sx:be,sy:be*.45,sz:be,ry:i.range(0,ti),col:10260344,v:1}});Se.add(Ii(Vs(xw(),.42),new ot({color:16777215,flatShading:!0,roughness:.95}),Ae.concat(ze)));let $e=[],Qe=[],N=[],te=i.int(3,5),j=0;for(let ce=0;ce<4e3&&j<te;ce++){let se=ge(),pe=fe(),be=x(se,pe),Pe=s[be].width*.5;if(g<Pe+25||g>Pe+80)continue;let ve=S(se,pe);if(ve<6||ve>40||R(se,pe)>.35)continue;j++;let Ve=i.int(7,12);for(let Ge=0;Ge<Ve;Ge++){let qe=i.range(0,ti),Je=Math.sqrt(i.next())*18,ut=se+Math.cos(qe)*Je,xt=pe+Math.sin(qe)*Je,Mt=x(ut,xt);if(g<s[Mt].width*.5+6+4+4)continue;let Ut=S(ut,xt);if(Ut<3)continue;let Ct=i.range(4,6.5),yn=i.range(3.5,6),L=i.range(4,6.5),re=i.pick([0,Math.PI/2])+i.range(-.15,.15),_e=Ut-1;if($e.push({x:ut,y:_e,z:xt,ry:re,sx:Ct,sy:yn,sz:L,col:i.pick(fw),v:1}),Qe.push({x:ut,y:_e+yn,z:xt,ry:re,sx:Ct*1.08,sy:i.range(1.8,2.6),sz:L*1.08}),a)for(let Me of[-1,1]){let ue=Me*Ct*.28,We=L/2+.03;N.push({x:ut+ue*Math.cos(re)+We*Math.sin(re),y:_e+yn*.55,z:xt-ue*Math.sin(re)+We*Math.cos(re),ry:re})}}}let F=new ot({color:16777215,flatShading:!0,roughness:.85}),C=new ot({color:11818298,flatShading:!0,roughness:.8});if($e.length){let ce=new dn(1,1,1).translate(0,.5,0),se=Vs(new Qt(0,.71,1,4).rotateY(Math.PI/4).translate(0,.5,0),.125);Se.add(Ii(ce,F,$e),Ii(se,C,Qe))}if(a&&N.length){let ce=new dn(1.2,1.1,.12);Se.add(Ii(ce,new zt({color:16761466}),N,!1))}if(a){let ce=0,se=0,pe=!1;for(let be=0;be<4e3&&!pe;be++){let Pe=ge(),ve=fe(),Ve=x(Pe,ve),Ge=s[Ve].width*.5;if(g<Ge+220||g>Ge+420)continue;let qe=S(Pe,ve);qe<6||qe>30||(ce=Pe,se=ve,pe=!0)}if(pe){let be=[],Pe=[],ve=i.int(9,13);for(let Ve=0;Ve<ve;Ve++){let Ge=ce+i.range(-110,110),qe=se+i.range(-110,110),Je=S(Ge,qe);if(Je<2)continue;let ut=i.range(6,10),xt=i.range(30,70);be.push({x:Ge,y:Je,z:qe,sx:ut,sy:xt,sz:ut,col:1777720,v:i.range(.8,1.2)});let Mt=i.pick(pw);for(let Ut=0;Ut<3;Ut++){let Ct=Ut*ti/3+i.range(0,.5);Pe.push({x:Ge+Math.cos(Ct)*ut*.88,y:Je+xt*.05,z:qe+Math.sin(Ct)*ut*.88,ry:-Ct,sy:xt*.9,col:Mt,v:1})}}Se.add(Ii(new Qt(.72,1,1,6).translate(0,.5,0),new ot({color:16777215,flatShading:!0,roughness:.7}),be),Ii(new dn(.5,1,.25).translate(0,.5,0),new zt({color:16777215}),Pe,!1))}}{let ce=[],se=[];for(let be=1;be<v-1;be++)for(let Pe=1;Pe<E-1;Pe++){let ve=be*E+Pe,Ve=w[ve];if(Ve<2||Ve>30)continue;let Ge=x(y+Pe*gn,T+be*gn);if(g<s[Ge].width*.5+60)continue;(w[ve-1]<0||w[ve+1]<0||w[ve-E]<0||w[ve+E]<0?ce:se).push(ve)}let pe=ce.length?ce:se;if(pe.length){let be=i.pick(pe),Pe=be%E,ve=(be-Pe)/E,Ve=new et(Vs(Mw(),.6),new ot({vertexColors:!0,flatShading:!0,roughness:.6}));Ve.position.set(y+Pe*gn,w[be]-.5,T+ve*gn),Ve.castShadow=!0,Se.add(Ve)}}let J=Oe(4,2e4,(ce,se)=>{if(S(ce,se)>-3)return null;let pe=x(ce,se);return g<s[pe].width*.5+250||g>900?null:{x:ce,y:-.2,z:se,ry:i.range(0,ti),col:16777215,v:1}});J.length&&Se.add(Ii(Vs(bw(),.5),new ot({vertexColors:!0,flatShading:!0,roughness:.6}),J));let B=[],ne=[];for(let ce=0;ce<2e4&&B.length<3;ce++){let se=ge(),pe=fe(),be=x(se,pe);if(g<s[be].width*.5+60)continue;let Pe=S(se,pe);Pe<55||B.some(ve=>Math.hypot(ve.x-se,ve.z-pe)<200)||B.push({x:se,y:Pe,z:pe,ry:i.range(0,ti),speed:i.range(.9,1.5),phase:i.range(0,ti)})}let K=new dn(.7,14,.22).translate(0,7,0),he=new ot({color:15659507,flatShading:!0,roughness:.6}),Ce=null;if(B.length){Se.add(Ii(new Qt(.8,.35,30,6).translate(0,15,0),he,B));for(let ce of B)ne.push(new je().compose(new H(ce.x,ce.y+30,ce.z),new an().setFromAxisAngle(uw,ce.ry),new H(1,1,1)));Ce=new Tn(K,he,B.length*3),Ce.castShadow=!0,Se.add(Ce)}function ke(ce){if(Ce){for(let se=0;se<B.length;se++){let pe=ce*B[se].speed+B[se].phase;for(let be=0;be<3;be++)$0.makeRotationZ(pe+be*ti/3),Y0.multiplyMatrices(ne[se],$0),Ce.setMatrixAt(se*3+be,Y0)}Ce.instanceMatrix.needsUpdate=!0}}ke(0);function Fe(ce,se,pe){we.position.set(pe.x+Ne.x*200,pe.y+Ne.y*200,pe.z+Ne.z*200),we.target.position.set(pe.x,pe.y,pe.z),He.position.set(pe.x,0,pe.z);for(let be=0;be<z;be++)Y.setY(be,.35*Math.sin(G[be]*.02+se*.8)+.25*Math.cos(de[be]*.017-se*.6));Y.needsUpdate=!0,ke(se)}function Ie(){n.remove(Se),Se.traverse(ce=>{if(ce.geometry&&ce.geometry.dispose(),ce.material){let se=Array.isArray(ce.material)?ce.material:[ce.material];for(let pe of se)pe.dispose()}}),we.shadow.map&&we.shadow.map.dispose(),Se.clear(),n.fog===P&&(n.fog=De??null),n.background===A&&(n.background=me??null)}return n.add(Se),{group:Se,sun:we,update:Fe,dispose:Ie,heightAt:S}}var Dc=[.62,.6,.55],Xs=[.5,.49,.45],Vf=[.72,.3,.18],J0=[.6,.24,.15],Gf=[.16,.2,.28],ww=[.2,.38,.3],Q0=[.36,.25,.16],So=[[.1,.27,.08],[.14,.34,.1],[.07,.2,.06],[.2,.42,.12]],xr=[[.93,.84,.62],[.9,.74,.5],[.94,.9,.8],[.88,.66,.5]],_n=(n,e,t)=>{let i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)};function Lc(n,e,t,i){let s=i*3+1,r=Math.ceil(t/2);return Ci(e+2,s+r+1,t+2,1,(o,a,l)=>{let c=o-1,u=l-1;if(a<s){if(c<0||u<0||c>=e||u>=t)return null;if(!(c===0||u===0||c===e-1||u===t-1))return a===s-1?n:null;let p=c===0||c===e-1?u:c,g=c===0||c===e-1?t:e;return a%3===2&&p%3===1&&p<g-1?Gf:a%3===2&&p%3===2&&p<g-1&&_n(c,a,u)>.45?ww:a===0?Xs:n}let h=a-s;return u>=h-1&&u<=t-h&&h<=r?(c+h)%2?Vf:J0:null},.14)}function Tw(n){return Ci(7,23,7,1,(i,s,r)=>{let o=i-1,a=r-1;if(s<17)return o<0||a<0||o>=5||a>=5?null:o===0||a===0||o===4||a===4?(s===6||s===11||s===14)&&(o===2||a===2)?Gf:s===0?Xs:n:s===16?n:null;let l=s-17;return i>=l&&i<=6-l&&r>=l&&r<=6-l?(i+r)%2?Vf:J0:null},.14)}function Aw(n){let r=[];for(let o=0;o<6;o++)r.push([11+(_n(n,o,1)-.5)*9,13+_n(n,o,2)*6,11+(_n(n,o,3)-.5)*9,3.6+_n(n,o,4)*2.4]);return Ci(22,24,22,.7,(o,a,l)=>{if(a<12&&Math.abs(o-11+.5)<1.3&&Math.abs(l-11+.5)<1.3)return Q0;for(let c of r){let u=o-c[0],h=(a-c[1])*1.25,f=l-c[2];if(u*u+h*h+f*f<c[3]*c[3])return So[Math.floor(_n(o,a,l)*So.length)]}return null},.22)}function Rw(){return Ci(14,16,8,.5,(n,e,t)=>{let s=5+Math.floor((n-1)/2)*1.6;return n===0?e<5?(e+t)%3?Dc:Xs:null:n>=1&&n<13&&e<s?e>=s-1?[.42,.42,.44]:Xs:n===13&&e<15&&(t===0||t===7)?[.16,.17,.2]:null},.12)}function Hf(n,e){let r=e-3-9;return Ci(n,e+2,5,1,(o,a,l)=>{let c=o%22,u=a>=e&&(l===0||l===4);if(a>=e)return u?Xs:null;if(a>=e-2)return(o+a+l)%3?Dc:Xs;if(c<4)return(o+a+l)%4?Dc:Xs;if(a<r)return null;let h=c-4-9+.5,f=a-r;return h*h+f*f>81?(o+a+l)%3?Dc:Xs:null},.14)}function Cw(n){return Ci(6,4,6,.5,(t,i,s)=>{let r=t-3+.5,o=s-6/2+.5,a=(i-.8)*1.5,l=2.5+(_n(t+n,i,s)-.5)*1.2;return r*r+a*a+o*o<l*l?So[Math.floor(_n(t,i+n,s)*So.length)]:null},.22)}function Iw(){let t=[[.12,.3,.14],[.15,.36,.16],[.1,.25,.12]];return Ci(6,20,6,.6,(i,s,r)=>{let o=i-3+.5,a=r-6/2+.5;if(s<2)return Math.abs(o)<.6&&Math.abs(a)<.6?Q0:null;let l=(s-2)/18,c=2.6*Math.sin(Math.PI*Math.min(1,.18+l*.82))**.7*(1-l*.55)+.3;return o*o+a*a<c*c?t[Math.floor(_n(i,s,r)*3)]:null},.2)}function j0(n){let r=(a,l)=>{let c=(a-15+.5)/15,u=(l-15+.5)/(30/2),h=Math.hypot(c,u)+(_n(Math.floor(a/3)+n,0,Math.floor(l/3))-.5)*.28,f=Math.max(0,Math.min(1,(.95-h)/.16)),p=14+Math.floor(_n(Math.floor(a/5),n,Math.floor(l/5))*3)*2;return Math.floor(p*f*f*(3-2*f))},o=[];for(let a=0;a<5;a++){let l=Math.floor(15+(_n(n,a,1)-.5)*14),c=Math.floor(15+(_n(n,a,2)-.5)*14);o.push([l,c,r(l,c),xr[Math.floor(_n(n,a,3)*xr.length)],a===0?7:3])}return Ci(30,26,30,1.6,(a,l,c)=>{let u=r(a,c);for(let[p,g,x,m,d]of o){let b=Math.abs(a-p),M=Math.abs(c-g),y=d>3?1:2;if(b<=y&&M<=1&&l>=x&&l<x+d)return l===x+d-2&&b!==y&&M===1?Gf:m;if(b<=y&&M<=1-(l-x-d)&&l>=x+d&&l<x+d+2)return Vf}if(l>=u)return null;if(l===u-1)return _n(a,5,c)>.75?So[0]:[.36,.56,.2];let h=l%5===0?.86:1,f=.93+.14*_n(Math.floor(a/2),l,Math.floor(c/2));return _n(a,l,c)>.965?So[2]:[.74*h*f,.71*h*f,.64*h*f]},.1)}function gr(n,e,t){let i=new Tn(n,e,t.length),s=new je,r=new an,o=new H,a=new H,l=new H(0,1,0);return t.forEach((c,u)=>{r.setFromAxisAngle(l,c.ry||0),o.set(c.sx??c.s??1,c.sy??c.s??1,c.sz??c.s??1),a.set(c.x,c.y,c.z),s.compose(a,r,o),i.setMatrixAt(u,s),c.color&&i.setColorAt(u,c.color)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,i}function Pw(){if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=1024,n.height=192;let e=n.getContext("2d");e.fillStyle="#f2efe8",e.fillRect(0,0,1024,192),e.fillStyle="#d6202a";for(let i of[0,880])for(let s=0;s<2;s++)e.beginPath(),e.moveTo(i+s*72,192),e.lineTo(i+s*72+36,192),e.lineTo(i+s*72+108,0),e.lineTo(i+s*72+72,0),e.fill();e.fillStyle="#23262e",e.font='italic 900 118px "Arial Narrow", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("POLYGON RUSH",512,104);let t=new li(n);return t.colorSpace=Ft,t.anisotropy=8,t}function eg(n,e,t,i){let s=new lt;s.name="scenery";let r=[],o=()=>{let I=new ot({vertexColors:!0,roughness:.9,metalness:0});return r.push(I),I},a=(I,k)=>{k.length&&(r.push(I),s.add(gr(I,o(),k)))},l={x:0,y:0,z:0,heading:0},c=n.length,u=I=>!!ks(n,(I%c+c)%c,"tunnel"),h=I=>n.pts[Math.floor((I%c+c)%c/n.step)%n.pts.length].width,f=(I,k)=>{let q=1/0;for(let Q=0;Q<n.pts.length;Q+=3){let V=n.pts[Q],$=(V.x-I)*(V.x-I)+(V.z-k)*(V.z-k);$<q&&(q=$)}return Math.sqrt(q)},p=(I,k)=>{let q=Math.floor(I/n.step);for(let Q=0;Q<k/n.step;Q+=4)if(Math.abs(n.pts[(q+Q)%n.pts.length].curv)>.004)return!1;return!u(I)&&!u(I+k/2)&&!u(I+k)},g=[[24,22,-1]];for(let I=380;I<c-220&&g.length<4;I+=70)p(I-10,80)&&(g.push([I,14,t.sign()]),I+=420);let x=[],m=[],d=[],b=[14032938,2777046,15909424,15921906,2793562,9060290,15235614,2042436],M=I=>g.some(([k,q])=>I>k-12&&I<k+q*4+12);for(let[I,k,q]of g)for(let Q=0;Q<k;Q++){let V=I+Q*4,$=q*(h(V)/2+6+.6);At(n,V,$,l);let oe=l.heading+q*Math.PI/2,ie=Math.sin(l.heading),ye=Math.cos(l.heading),Se=-q*ye,U=q*ie;x.push({x:l.x+Se*3.5,y:l.y-.3,z:l.z+U*3.5,ry:oe});for(let X=0;X<6;X++)for(let W=0;W<4;W++){if(t.next()<.18)continue;let Y=-1.6+W*1.05+t.range(-.15,.15),z=1+X*1,G=l.x+Se*z+ie*Y,de=l.z+U*z+ye*Y,xe=l.y-.3+2.5+X*.8,Ne=new Le(t.pick(b));m.push({x:G,y:xe+.4,z:de,ry:l.heading,sx:.5,sy:.8,sz:.36,color:Ne}),d.push({x:G,y:xe+1,z:de,ry:l.heading,sx:.36,sy:.36,sz:.36,color:new Le(t.pick([15317386,13208414,9067066,15847334]))}),m.push({x:G-Se*.12,y:xe-.1,z:de-U*.12,ry:l.heading,sx:.46,sy:.3,sz:.5,color:new Le(t.pick([2042436,2829099,3820138,5916210]))}),d.push({x:G,y:xe+1.22,z:de,ry:l.heading,sx:.4,sy:.12,sz:.4,color:new Le(t.pick([2759698,1118481,14032938,15909424,6965802,15921906]))}),t.next()<.22&&m.push({x:G+ie*.32,y:xe+1.05,z:de+ye*.32,ry:l.heading,sx:.14,sy:.6,sz:.14,color:Ne})}}if(a(Rw(),x),m.length){let I=new dn(1,1,1);r.push(I);let k=new ot({roughness:.85});r.push(k),s.add(gr(I,k,m),gr(I,k,d));let q=x.map(Q=>({x:Q.x,y:Q.y+8.2,z:Q.z,ry:Q.ry,sx:8,sy:.4,sz:4.05,color:new Le(2303534)}));s.add(gr(I,k,q))}let y=Pw(),T=new ot({map:y,color:y?16777215:15921128,roughness:.7,side:Nt});r.push(T),y&&r.push(y);let E=new Hn(1,1);r.push(E);let v=[],w=(I,k)=>{if(u(I))return;let q=k*(h(I)/2+6-.22);At(n,I,q,l),v.push({x:l.x,y:l.y+.52,z:l.z,ry:l.heading+(k<0?-Math.PI/2:Math.PI/2),sx:9,sy:.92,sz:1})};for(let I=120;I<240;I+=13)w(I,-1);for(let I=30;I<110;I+=13)w(I,1);for(let I=400;I<c-80;I+=260)w(I,-1),w(I+13,-1),w(I+120,1);if(v.length){let I=gr(E,T,v);I.castShadow=!1,s.add(I)}let _=[[],[],[]];for(let I=130;I<c-20;I+=t.range(13,28)){if(M(I)||u(I)||u(I+12)||u(I-12))continue;let q=(t.next()<.82?-1:1)*(h(I)/2+6+t.range(3.4,6.5));At(n,I,q,l);let Q=i?i(l.x,l.z):l.y;Q<1.5||_[t.int(0,2)].push({x:l.x,y:Q-.2,z:l.z,ry:t.range(0,6.28),s:t.range(1.3,2.05)})}if(_.forEach((I,k)=>a(Aw(11+k*7),I)),i){let I=[];for(let $=200;$<c-100;$+=45)for(let oe of[-1,1]){let ie=oe*t.range(70,150);At(n,$,ie,l);let ye=i(l.x,l.z);ye>l.y+6&&ye>6&&f(l.x,l.z)>55&&I.push({x:l.x,z:l.z,y:ye,score:ye-l.y+t.range(0,4)})}I.sort(($,oe)=>oe.score-$.score);let k=[];for(let $ of I){if(k.length>=4)break;k.every(oe=>Math.hypot(oe.x-$.x,oe.z-$.z)>220)&&k.push($)}let q=[{geo:Lc(xr[0],8,7,2),items:[]},{geo:Lc(xr[1],10,7,3),items:[]},{geo:Lc(xr[2],7,6,2),items:[]},{geo:Lc(xr[3],9,8,3),items:[]}],Q=[],V=[];for(let $ of k){for(let oe=0;oe<2;oe++){let ie=$.x+t.range(-12,12),ye=$.z+t.range(-12,12);f(ie,ye)<45||(Q.push({x:ie,y:i(ie,ye)-.5,z:ye,ry:t.int(0,3)*Math.PI/2}),V.push([ie,ye]))}for(let oe=0;oe<60&&q.reduce((ie,ye)=>ie+ye.items.length,0)<k.length*22;oe++){let ie=t.range(0,6.28),ye=t.range(8,60),Se=$.x+Math.cos(ie)*ye,U=$.z+Math.sin(ie)*ye,X=i(Se,U);X<3||f(Se,U)<42||V.some(W=>Math.hypot(W[0]-Se,W[1]-U)<12)||(V.push([Se,U]),t.pick(q).items.push({x:Se,y:X-.5,z:U,ry:t.int(0,3)*Math.PI/2}))}}for(let $ of q)a($.geo,$.items);a(Tw(xr[2]),Q)}let S=[[],[]];for(let I=115;I<c-10;I+=t.range(4.5,9))if(!u(I)){if(t.next()<.3){I+=t.range(20,60);continue}for(let k of[-1,1]){if(t.next()<.35)continue;let q=k*(h(I)/2+6+t.range(1.4,2.6));At(n,I,q,l),S[t.int(0,1)].push({x:l.x,y:l.y-.5,z:l.z,ry:t.range(0,6.28),s:t.range(.8,1.4)})}}S.forEach((I,k)=>a(Cw(3+k*5),I));let R=[];for(let I=160;I<c-60;I+=t.range(120,220)){let k=t.sign(),q=t.int(5,9);for(let Q=0;Q<q;Q++){let V=I+Q*4.2;if(u(V))continue;At(n,V,k*(h(V)/2+6+4.2),l);let $=i?i(l.x,l.z):l.y;$<1.5||R.push({x:l.x,y:$-.2,z:l.z,ry:t.range(0,6.28),s:t.range(.85,1.2)})}}if(a(Iw(),R),i){let I=[[],[],[]],k=[];for(let q=150;q<c-50;q+=t.range(120,220))for(let Q of[-1,1]){if(t.next()<.3)continue;At(n,q,Q*t.range(72,125),l);let V=i(l.x,l.z);V<1||f(l.x,l.z)<56||k.some($=>Math.hypot($[0]-l.x,$[1]-l.z)<70)||(k.push([l.x,l.z]),I[t.int(0,2)].push({x:l.x,y:V-3,z:l.z,ry:t.range(0,6.28),s:t.range(1.2,1.9)}))}I.forEach((q,Q)=>a(j0(17+Q*13),q))}{let I=[],k=[],q=new Le(12172998),Q=new Le(7172730);for(let V=0;V<c;V+=4){if(u(V)||M(V))continue;let $=h(V)/2+6-.75;At(n,V,$,l);let oe=l.x,ie=l.y,ye=l.z,Se=l.heading;I.push({x:oe,y:ie+.4,z:ye,ry:Se,sx:.12,sy:.8,sz:.12,color:Q}),At(n,V+4,h(V+4)/2+6-.75,l);let U=(oe+l.x)/2,X=(ie+l.y)/2,W=(ye+l.z)/2,Y=Math.hypot(l.x-oe,l.z-ye)+.05,z=Math.atan2(l.x-oe,l.z-ye);for(let G of[.42,.72])k.push({x:U,y:X+G,z:W,ry:z,sx:.07,sy:.2,sz:Y,color:q})}if(I.length){let V=new dn(1,1,1),$=new ot({roughness:.35,metalness:.85});r.push(V,$),s.add(gr(V,$,I),gr(V,$,k))}}if(i){let I=[];for(let V=0;V<400&&I.length<16;V++){let $=t.range(n.bounds.minX-420,n.bounds.maxX+420),oe=t.range(n.bounds.minZ-420,n.bounds.maxZ+420),ie=f($,oe);i($,oe)>-3||ie<90||ie>520||I.some(ye=>Math.hypot(ye.x-$,ye.z-oe)<60)||I.push({x:$,y:-.3,z:oe,ry:t.range(0,6.28),s:t.range(.9,1.5)})}let k=[.93,.93,.9],q=[.98,.97,.93],Q=[.55,.36,.2];a(Ci(5,18,14,.7,(V,$,oe)=>{let ie=Math.abs(oe-6.5),ye=Math.abs(V-2);return $<2?ye<=2-($===0?1:0)-(ie>5?1:0)&&ie<7-($===0?1:0)?$===1&&ye<2?Q:k:null:V===2&&oe===7?[.3,.26,.22]:V===2&&oe>7&&oe<13&&$<17-(oe-7)*2.6||V===2&&oe<7&&oe>1&&$<14-(7-oe)*2.4?q:null},.06),I)}{At(n,0,0,l);let I=l.x,k=l.y,q=l.z,Q=l.heading,V=Math.sin(Q),$=Math.cos(Q),oe=-$,ie=V,ye=(U,X,W)=>f(U,X)>W,Se=!1;for(let U of[430,500,380,580,660]){for(let X of[70,130,0,-70,190,-140]){if(Se)break;let W=I+V*U+oe*X,Y=q+$*U+ie*X;if(!ye(W,Y,85))continue;let z=i?Math.max(-2,i(W,Y)):k;a(j0(101),[{x:W,y:z-3,z:Y,ry:Q+.6,s:2.3}]);let G=W-V*95-oe*30,de=Y-$*95-ie*30;if(ye(G,de,45)&&ye(G+oe*90,de+ie*90,40)&&ye(G-oe*90,de-ie*90,40)){let xe=i?Math.max(-1,i(G,de)):k;a(Hf(198,24),[{x:G,y:Math.min(xe,k)-5,z:de,ry:Q}])}Se=!0}if(Se)break}}for(let I of[1,-1]){let k=!0;for(let Q of[210,270,330,390])At(n,Q,I*62,l),f(l.x,l.z)<46&&(k=!1);if(!k||I<0)continue;At(n,300,I*62,l);let q=i?i(l.x,l.z):l.y;a(Hf(198,22),[{x:l.x,y:q-4,z:l.z,ry:l.heading-Math.PI/2}]);break}let D=-1,O=-1/0;for(let I=300;I<c-300;I+=40){let k=Math.floor(I/n.step),q=0;for(let V=0;V<60;V+=6)q+=Math.abs(n.pts[(k+V)%n.pts.length].curv);let Q=-q*400+t.range(0,1)-(u(I)||u(I+100)?100:0);Q>O&&(O=Q,D=I)}if(D>0)for(let I of[1,-1]){At(n,D+90,I*95,l);let k=i?i(l.x,l.z):l.y;if(k<2)continue;a(Hf(198,20),[{x:l.x,y:Math.min(k,l.y)-4,z:l.z,ry:l.heading-Math.PI/2}]);break}return{group:s,dispose(){for(let I of r)I.dispose?.()}}}function Lw(n,e){let t=n.length,i=new Float64Array(t),s=0;for(let r=0;r<t;r++){let o=0;s=0;for(let a=Math.max(0,r-e);a<=Math.min(t-1,r+e);a++)s+=n[a],o++;i[r]=s/o}return i}function tg(n){let e=n.x.length,t=n.step,i=n.x,s=n.y,r=n.z,o=new Float64Array(e),a=new Float64Array(e),l=new Float64Array(e);for(let v=0;v<e;v++){let w=Math.max(0,v-1),_=Math.min(e-1,v+1),S=i[_]-i[w],R=r[_]-r[w],D=Math.hypot(S,R)||1e-9;o[v]=S/D,a[v]=R/D,l[v]=(s[_]-s[w])/D}let c=new Float64Array(e);for(let v=1;v<e-1;v++){let w=-a[v],_=o[v];c[v]=((o[v+1]-o[v-1])*w+(a[v+1]-a[v-1])*_)/(2*t)}c[0]=c[1],c[e-1]=c[e-2];let u=Lw(c,12),h=new Float64Array(e);for(let v=0;v<e;v++)h[v]=Math.min(95,Math.sqrt(30/Math.max(1e-6,Math.abs(u[v]))));for(let v=e-2;v>=0;v--)h[v]=Math.min(h[v],Math.sqrt(h[v+1]**2+80*t));for(let v=1;v<e;v++)h[v]=Math.min(h[v],Math.sqrt(h[v-1]**2+40*t));let f=new Array(e),p=1/0,g=-1/0,x=1/0,m=-1/0,d=1/0,b=0;for(let v=0;v<e;v++){let w=Math.hypot(1,l[v]);f[v]={s:v*t,x:i[v],y:s[v],z:r[v],tx:o[v]/w,ty:l[v]/w,tz:a[v]/w,rx:-a[v],rz:o[v],width:n.width,curv:u[v],vmax:h[v],slope:l[v]},i[v]<p&&(p=i[v]),i[v]>g&&(g=i[v]),r[v]<x&&(x=r[v]),r[v]>m&&(m=r[v]);let _=1/Math.max(1e-9,Math.abs(u[v]));_<d&&(d=_),Math.abs(l[v])>b&&(b=Math.abs(l[v]))}let M=[],y=[];for(let v of n.features)v.type==="tunnel"?M.push({type:"tunnel",s0:v.s0,s1:v.s1,name:v.name}):y.push({s0:v.s0,s1:v.s1,name:v.name});let T=(e-1)*t,E=0;for(let v=0;v<e;v++)E+=t/Math.max(5,h[v]);return{seed:"REAL:"+n.id,attempts:1,open:!0,real:n,raceStart:n.raceStart||0,raceEnd:Math.min(n.raceEnd||T,T),length:T,step:t,count:e,pts:f,features:M,bridges:y,bounds:{minX:p,maxX:g,minZ:x,maxZ:m},stats:{minRadius:d,maxSlope:b,lapTimeEstimate:E,corners:0}}}var ng=["torre","castello","borgo","chiesa","agrumeto","peschereccio","casello"];function Dw(n,e,t,i=null){let s=[],r=n.length,o=i?i.s0:0,a=i?i.s1:r,l=f=>{if(i&&Number.isFinite(f.s)&&Number.isFinite(f.dist))return{dist:f.dist,q:n.pts[Math.max(0,Math.min(n.count-1,Math.round(f.s/n.step)))]};let p=1/0,g=0;for(let x=0;x<n.count;x+=5){let m=n.pts[x],d=(m.x-f.x)**2+(m.z-f.z)**2;d<p&&(p=d,g=x)}return{dist:Math.sqrt(p),q:n.pts[g]}},c={},u=(f,p)=>(c[f]=(c[f]||0)+1)<=(i?1:p),h=e.places.map(f=>({p:f,n:l(f)})).filter(f=>f.n.dist<1600&&f.n.q.s>150&&f.n.q.s<r-150).sort((f,p)=>f.n.dist-p.n.dist);for(let{p:f,n:p}of h)s.some(g=>g.x!==void 0&&Math.hypot(g.x-f.x,g.z-f.z)<250)||(f.kind==="castle"?/^torre/i.test(f.name)?u("torre",2)&&s.push({prop:"torre",x:f.x,z:f.z,height:48,label:f.name}):/castel|rocca|forte|fort/i.test(f.name)&&u("castello",3)&&s.push({prop:"castello",x:f.x,z:f.z,width:170,label:f.name}):f.kind==="place"&&(f.rank==="village"||f.rank==="town"||f.rank===void 0)&&(t(f.x,f.z)-p.q.y>120&&p.dist>250?u("borgo",3)&&s.push({prop:"borgo",x:f.x,z:f.z,width:300}):p.dist>90&&p.dist<450&&u("chiesa",3)&&s.push({prop:"chiesa",x:f.x,z:f.z,width:46})));for(let f=900,p=0;f<r-600;f+=1300,p++){if(f<o||f>=a)continue;let g=n.pts[Math.round(f/n.step)];for(let x of[1,-1]){let m=x*560;if(t(g.x+g.rx*m,g.z+g.rz*m)<=0&&t(g.x+g.rx*m*1.3,g.z+g.rz*m*1.3)<=0)p%2===0&&s.push({prop:"peschereccio",s:f,d:m+p%3*40*x,width:34,sea:!0});else if(p%2===1){let d=x*78,b=t(g.x+g.rx*d,g.z+g.rz*d);b>1&&Math.abs(b-g.y)<14&&s.push({prop:"agrumeto",s:f,d,width:70})}}}return s}function Wf(n){return n._geo||(n._geo=kf(n.cells,1)),n._geo}function ig({track:n,data:e,baked:t,heightAt:i,clearance:s,range:r=null,unit:o=!1}){let a=new lt;a.name="real-props";let l=[],c=[];if(!t)return{group:a,placed:l,skipped:c,dispose(){}};let u=new jn({vertexColors:!0}),h=new Map,f=n.length,p=r?Math.max(0,Math.floor((r.s0-2500)/n.step)):0,g=r?Math.min(n.count,Math.ceil((r.s1+2500)/n.step)):n.count,x=(m,d)=>{let b=1/0,M=p;for(let y=p;y<g;y+=2){let T=n.pts[y],E=(T.x-m)**2+(T.z-d)**2;E<b&&(b=E,M=y)}return{q:n.pts[M],dist:Math.sqrt(b)}};for(let m of Dw(n,e,i,r)){let d=t[m.prop];if(!d?.cells?.length)continue;let b=d._ext;if(!b){let R=[1/0,1/0,1/0],D=[-1/0,-1/0,-1/0];for(let O=0;O<d.cells.length;O+=4)for(let I=0;I<3;I++)R[I]=Math.min(R[I],d.cells[O+I]),D[I]=Math.max(D[I],d.cells[O+I]+1);b=d._ext=[D[0]-R[0],D[1]-R[1],D[2]-R[2]]}let M=m.height?m.height/b[1]:m.width/Math.max(b[0],b[2]),y=Math.hypot(b[0],b[2])*M/2,T,E;if(m.x!==void 0)T=m.x,E=m.z;else{let R=n.pts[Math.max(0,Math.min(n.count-1,Math.round(m.s/n.step)))];T=R.x+R.rx*m.d,E=R.z+R.rz*m.d}let v=x(T,E);if(v.dist-y<s){if(m.x===void 0||v.dist<1){c.push(m.prop+" : trop pr\xE8s de la route");continue}let R=(y+s+2)/v.dist;if(T=v.q.x+(T-v.q.x)*R,E=v.q.z+(E-v.q.z)*R,v=x(T,E),v.dist-y<s){c.push(m.prop+" : trop pr\xE8s de la route");continue}}let w;if(m.sea){if(i(T,E)>0){c.push(m.prop+" : pas en mer");continue}w=-.12*M*b[1]}else{w=1/0;for(let[R,D]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]])w=Math.min(w,i(T+R*y*.6,E+D*y*.6));w=Math.max(w,.2)-.5}let _;if(o)_=Wf(d);else{let R=m.prop+"@"+M.toFixed(3);_=h.get(R),_||h.set(R,_=kf(d.cells,M))}let S=new et(_,u);o&&S.scale.setScalar(M),S.name="prop-"+m.prop,S.position.set(T,w,E),S.rotation.y=Math.atan2(v.q.x-T,v.q.z-E),S.updateMatrix(),S.matrixAutoUpdate=!1,a.add(S),l.push({prop:m.prop,label:m.label||null,s:v.q.s,dist:v.dist,x:T,y:w,z:E,size:M})}return{group:a,placed:l,skipped:c,dispose(){u.dispose();for(let m of h.values())m.dispose()}}}var Nw=(n,e,t=1.08,i=1.45)=>{let s=(n>>16&255)/255,r=(n>>8&255)/255,o=(n&255)/255,a=.3*s+.59*r+.11*o,l=(.38+(a-.38)*1.35)/Math.max(a,.001);s*=l,r*=l,o*=l,a=.3*s+.59*r+.11*o,s=Math.min(1,Math.max(0,(a+(s-a)*i)*t)),r=Math.min(1,Math.max(0,(a+(r-a)*i)*t)),o=Math.min(1,Math.max(0,(a+(o-a)*i)*t)),e[0]=s,e[1]=r,e[2]=o};function Nc(n,e,{seaCut:t=.25,yOffset:i=0,tint:s=null,lower:r=.2}={}){let{cell:o,ix:a,iz:l,h:c,c:u}=n,h=a.length,f=1/0,p=-1/0,g=1/0,x=-1/0;for(let ie=0;ie<h;ie++)a[ie]<f&&(f=a[ie]),a[ie]>p&&(p=a[ie]),l[ie]<g&&(g=l[ie]),l[ie]>x&&(x=l[ie]);let m=n.hx||[],d=n.hz||[],b=n.hh||[];for(let ie=0;ie<m.length;ie++)m[ie]<f&&(f=m[ie]),m[ie]>p&&(p=m[ie]),d[ie]<g&&(g=d[ie]),d[ie]>x&&(x=d[ie]);let M=h?p-f+1:0,y=h?x-g+1:0,T=new Float32Array(M*y).fill(NaN),E=new Float32Array(M*y).fill(NaN),v=(ie,ye)=>ie<f||ie>p||ye<g||ye>x?-1:(ie-f)*y+(ye-g),w={get(ie){if(ie<0)return;let ye=T[ie];return ye===ye?ye:void 0}},_=new Float32Array(h);for(let ie=0;ie<m.length&&h;ie++){let ye=(m[ie]-f)*y+(d[ie]-g);E[ye]=b[ie]/10,T[ye]=Math.floor(b[ie]/10/e)*e}let S=0;for(let ie=0;ie<h;ie++){let ye=(a[ie]-f)*y+(l[ie]-g);_[ie]=Math.floor(c[ie]/10/e)*e,T[ye]=_[ie],E[ye]=c[ie]/10,c[ie]/10>t&&(S+=2)}let R=y+1,D=new Float32Array((M+1)*R);for(let ie=0;ie<=M;ie++)for(let ye=0;ye<=y;ye++){let Se=0,U=0,X=1/0;for(let Y=ie-1;Y<=ie;Y++)if(!(Y<0||Y>=M))for(let z=ye-1;z<=ye;z++){if(z<0||z>=y)continue;let G=E[Y*y+z];G===G&&(Se+=G,U++,G<X&&(X=G))}let W=U?Se/U:0;D[ie*R+ye]=U?W-(W-X)*r+i:0}let O=new Float32Array(S*9),I=new Float32Array(S*9),k=new Float32Array(S*9),q=0,Q=[0,0,0],V=(ie,ye,Se,U,X,W,Y,z,G,de,xe,Ne)=>{let He=U-ie,Z=X-ye,ae=W-Se,Ee=Y-ie,we=z-ye,Te=G-Se,De=Z*Te-ae*we,me=ae*Ee-He*Te,P=He*we-Z*Ee,A=Math.hypot(De,me,P)||1;De/=A,me/=A,P/=A,O[q]=ie,O[q+1]=ye,O[q+2]=Se,O[q+3]=U,O[q+4]=X,O[q+5]=W,O[q+6]=Y,O[q+7]=z,O[q+8]=G;for(let ee=0;ee<9;ee+=3)I[q+ee]=De,I[q+ee+1]=me,I[q+ee+2]=P,k[q+ee]=de,k[q+ee+1]=xe,k[q+ee+2]=Ne;q+=9};for(let ie=0;ie<h;ie++){if(c[ie]/10<=t)continue;Nw(u[ie],Q),s&&s(Q,(a[ie]+.5)*o,(l[ie]+.5)*o,_[ie]);let ye=a[ie]-f,Se=l[ie]-g,U=D[ye*R+Se],X=D[ye*R+Se+1],W=D[(ye+1)*R+Se],Y=D[(ye+1)*R+Se+1],z=a[ie]*o,G=l[ie]*o,de=z+o,xe=G+o,Ne=.94+.12*((a[ie]*73856093^l[ie]*19349663)>>>0)/4294967295,He=Q[0]*Ne,Z=Q[1]*Ne,ae=Q[2]*Ne,Ee=.93;Math.abs(U-Y)<=Math.abs(X-W)?(V(z,U,G,z,X,xe,de,Y,xe,He,Z,ae),V(z,U,G,de,Y,xe,de,W,G,He*Ee,Z*Ee,ae*Ee)):(V(z,U,G,z,X,xe,de,W,G,He,Z,ae),V(z,X,xe,de,Y,xe,de,W,G,He*Ee,Z*Ee,ae*Ee))}let $=new ht;return $.setAttribute("position",new yt(O,3)),$.setAttribute("normal",new yt(I,3)),$.setAttribute("color",new yt(k,3)),$.computeBoundingSphere(),{geo:$,heights:w,key:v,q:_,surfaceAt:(ie,ye)=>{let Se=ie/o-f,U=ye/o-g,X=Math.floor(Se),W=Math.floor(U);if(X<0||X>=M||W<0||W>=y||E[X*y+W]!==E[X*y+W])return;let Y=Se-X,z=U-W,G=D[X*R+W],de=D[X*R+W+1],xe=D[(X+1)*R+W],Ne=D[(X+1)*R+W+1];return(G*(1-z)+de*z)*(1-Y)+(xe*(1-z)+Ne*z)*Y}}}function Eo(n,e,t){let i=new Tn(n,e,t.length),s=new je,r=new an,o=new H,a=new H,l=new H(0,1,0);return t.forEach((c,u)=>{r.setFromAxisAngle(l,c.ry||0),o.set(c.sx??1,c.sy??1,c.sz??1),a.set(c.x,c.y,c.z),s.compose(a,r,o),i.setMatrixAt(u,s),c.color&&i.setColorAt(u,c.color)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.frustumCulled=!1,i}function sg(n){if(typeof document>"u")return null;let e=document.createElement("canvas");e.width=512,e.height=192;let t=e.getContext("2d");t.fillStyle="#0c7a43",t.fillRect(0,0,512,192),t.strokeStyle="#ffffff",t.lineWidth=8,t.strokeRect(8,8,496,176),t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.font="bold 62px Arial, Helvetica, sans-serif",t.fillText(n[0],256,n[1]?70:96,470),n[1]&&(t.font="bold 44px Arial, Helvetica, sans-serif",t.fillText(n[1],256,136,470));let i=new li(e);return i.colorSpace=Ft,i.anisotropy=8,i}var Xf=.12,Uw=8200,Ow=3,Fw=1,Bw=5,zw=2,wo=new Map;function rg(n,e){if(!wo.has(e)){let t=fetch(`${n}c${String(e).padStart(3,"0")}.json`).then(i=>{if(!i.ok)throw new Error("tuile indisponible : "+e);return i.json()}).then(i=>(wo.set(e,i),i));t.catch(()=>wo.delete(e)),wo.set(e,t)}return Promise.resolve(wo.get(e))}function qf(n,e,t,i=1){let s=Math.max(0,Math.min(e.chunks-1,Math.floor(t/e.chunk))),r=[];for(let o=Math.max(0,s-1);o<=Math.min(e.chunks-1,s+i);o++)r.push(rg(n,o));return Promise.all(r)}function kw(n,e,t){let i=n.step,s=e*i,r=t*i,o=[];for(let l=e;l<=t;l++)o.push({...n.pts[l],s:(l-e)*i});let a=[];for(let l of n.features)l.type!=="tunnel"||l.s1<=s||l.s0>=r||a.push({type:"tunnel",name:l.name,s0:Math.max(l.s0,s)-s,s1:Math.min(l.s1,r)-s,cutStart:l.s0<s,cutEnd:l.s1>r});return{seed:n.seed+":"+e,open:!0,noStart:!0,length:(o.length-1)*i,step:i,count:o.length,pts:o,features:a,bridges:[]}}function og(n,e,t,i,{base:s="assets/v3/world/",baked:r=null,rng:o,far:a=null}={}){let l=new lt;l.name="environment";let c=[],u=F=>(c.push(F),F),h=e.length,f=e.step,p=i.width/2,g=p+6+2,x=i.chunk,m=i.chunks,d=Math.round(x/f),b=new et(u(new Hn(6e4,6e4)),u(new ot({color:t.seaColor,roughness:.16,metalness:.1}))),M=V0(b.material);b.rotation.x=-Math.PI/2,b.position.y=.05,b.name="real-sea",l.add(b);let y=new H(...t.sunDir).normalize(),T=u(new bt({side:sn,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new Le(t.skyTop)},uHor:{value:new Le(t.skyHorizon)},uSun:{value:new Le(t.sunColor)},uSunDir:{value:y}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uTop, uHor, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = mix(uHor, uTop, pow(max(d.y, 0.0), 0.5));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 600.0) * 3.0 + pow(s, 14.0) * 0.25);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`})),E=new et(u(new Ns(Uw,32,16)),T);E.renderOrder=-10,E.frustumCulled=!1,l.add(E);let v=n.fog,w=n.background;n.fog=new lo(t.fogColor,(t.fogDensity||5e-4)*.3),n.background=new Le(t.skyHorizon);let _=new po(t.hemiSky,t.hemiGround,t.hemiIntensity),S=new Fi(t.sunColor,t.sunIntensity);S.castShadow=!0,S.shadow.mapSize.set(2048,2048);let R=S.shadow.camera;R.left=-90,R.right=90,R.top=90,R.bottom=-90,R.near=1,R.far=500,S.shadow.bias=-5e-4,l.add(_,S,S.target);let D=null;function O(F){if(D||!F)return;let C=new Le(t.skyHorizon),J=Nc(F,60,{tint:(B,ne,K,he)=>{let Ce=he>2300?.5:0,ke=.55;B[0]=(B[0]+(1-B[0])*Ce)*(1-ke)+C.r*ke,B[1]=(B[1]+(1-B[1])*Ce)*(1-ke)+C.g*ke,B[2]=(B[2]+(1-B[2])*Ce)*(1-ke)+C.b*ke}}).geo;D=new et(u(J),u(new zt({vertexColors:!0,fog:!1,side:Nt}))),D.name="real-terrain-far",D.scale.setScalar(Xf),D.frustumCulled=!1,D.renderOrder=-5,l.add(D)}a?O(a):typeof fetch=="function"&&fetch(s+"far.json").then(F=>F.ok?F.json():null).then(F=>{ge||O(F)}).catch(()=>{});let I=u(new dn(1,1,1)),k=F=>{let C=F.index?F.toNonIndexed():F;return C.computeVertexNormals(),u(C)},q=k(new $n(Math.SQRT1_2,1,4,1).rotateY(Math.PI/4).translate(0,.5,0)),Q=k(new $n(.5,1,6,1).translate(0,.5,0)),V=k(new Qt(.22,.5,1,7,1).translate(0,.5,0)),$=k(new Zn(.5,0).translate(0,.5,0)),oe=k(new Qt(.4,.5,1,5,1).translate(0,.5,0)),ie=_o(u(new ot({vertexColors:!0,roughness:.95,metalness:0,side:Nt})),1,1),ye=_o(u(new ot({vertexColors:!0,roughness:1,side:Nt})),8,.7),Se=H0(_o(u(new ot({roughness:.9})),1.5,.8)),U=u(new ot({roughness:.85})),X=u(new jn),W=u(new jn),Y=_o(u(new ot({roughness:.9})),.8,.6),z=u(new ot({roughness:.35,metalness:.85})),G=u(new jn),de=u(new Hn(1,1)),xe=(F,C,J)=>{let B=Math.sin(F*127.1+C*311.7+J*74.7)*43758.5453;return B-Math.floor(B)},Ne=[2910768,2910768,3503416,15231644,15920356].map(F=>new Le(F)),He=[15983808,15321498,16117730,14924172,14472128,15784368,13620956].map(F=>new Le(F)),Z=[11884346,11030070,14275268,13222064,9390646].map(F=>new Le(F)),ae=new Le(12170925),Ee=new Le(10131343),we=new Le(12764876),Te=new Le(8225160),De=new Le(7031346);if(r)for(let F of Object.values(r))F?.cells?.length&&Wf(F);let me=60,P=new Map;for(let F=0;F<e.count;F+=3){let C=e.pts[F],J=Math.floor(C.x/me)*100003+Math.floor(C.z/me),B=P.get(J);B||P.set(J,B=[]),B.push(C)}let A=(F,C,J,B)=>{let ne=null,K=Math.max(J,B)+g;for(let he=Math.floor((F-K)/me);he<=Math.floor((F+K)/me);he++)for(let Ce=Math.floor((C-K)/me);Ce<=Math.floor((C+K)/me);Ce++){let ke=P.get(he*100003+Ce);if(ke)for(let Fe of ke){let Ie=Math.max(0,Math.abs(Fe.x-F)-J),ce=Math.max(0,Math.abs(Fe.z-C)-B);Ie*Ie+ce*ce<g*g&&(ne===null||Fe.y<ne)&&(ne=Fe.y)}}return ne},ee=F=>!!ks(e,Math.max(0,Math.min(h-1,F)),"tunnel"),le=new Map,ge=!1,fe={built:0,freed:0,worstStep:0,worstBy:[0,0,0,0,0,0,0,0,0,0],buildings:0,trees:0,props:[]},Oe=10;function Re(F,C){for(let J of le.values()){if(!J.near)continue;let B=J.near.heights.get(J.near.key(Math.floor(F/10),Math.floor(C/10)));if(B!==void 0)return B}for(let J of le.values()){if(!J.mid)continue;let B=J.mid.heights.get(J.mid.key(Math.floor(F/80),Math.floor(C/80)));if(B!==void 0)return B-3}return-5}function Ue(F,C){let J=[],B=se=>(J.push(se),se),ne=F.group,K=C.s0,he=Math.min(C.s1,h),Ce=Math.round(K/f),ke=Math.min(e.count-1,Math.round(he/f)),Fe=o.fork("tuile:"+F.i),Ie={x:0,y:0,z:0,heading:0},ce={x:0,y:0,z:0,heading:0};return F.own=J,[()=>{F.near=Nc(C.near,1);let se=new et(B(F.near.geo),ie);se.receiveShadow=!0,se.name="real-terrain-near",ne.add(se)},()=>{F.mid=Nc(C.mid,4,{yOffset:-3});let se=new et(B(F.mid.geo),ye);se.name="real-terrain-mid",ne.add(se)},...[0,1,2,3].map(se=>()=>{let pe=Ce+Math.round((ke-Ce)*se/4),be=Ce+Math.round((ke-Ce)*(se+1)/4);if(be<=pe)return;let Pe=Rc(kw(e,pe,be),t,Fe.fork("route"+se));ne.add(Pe.group),F.roads.push(Pe)}),()=>{let se=C.buildings,pe=[],be=[],Pe=[];for(let ve=0;ve<se.x.length;ve++){let Ve=se.l[ve]>0?Math.min(se.l[ve],9):1+Math.floor(Fe.next()*3)+(se.w[ve]*se.d[ve]>300?1:0),Ge=Ve*3.1,qe=Re(se.x[ve],se.z[ve]);qe<-4&&(qe=se.y[ve]),qe=Math.max(qe,.3);let Je=A(se.x[ve],se.z[ve],se.w[ve]/2+.3,se.d[ve]/2+.3);if(Je!==null){let xt=Je-3.2-qe;if(xt<3)continue;Ge>xt&&(Ge=xt)}pe.push({x:se.x[ve],y:qe+Ge/2-.5,z:se.z[ve],sx:se.w[ve],sy:Ge+1,sz:se.d[ve],color:Fe.pick(He)});let ut=Fe.pick(Z);Ve<=3&&se.w[ve]*se.d[ve]<260&&Je===null?Pe.push({x:se.x[ve],y:qe+Ge,z:se.z[ve],sx:se.w[ve]+.8,sy:1.6+.12*Math.min(se.w[ve],se.d[ve]),sz:se.d[ve]+.8,color:ut}):be.push({x:se.x[ve],y:qe+Ge+.35,z:se.z[ve],sx:se.w[ve]+.6,sy:.7,sz:se.d[ve]+.6,color:ut})}if(F.stats.buildings=pe.length,pe.length){let ve=Eo(I,Se,pe);ve.name="real-buildings",ve.castShadow=!0,ve.frustumCulled=!0,ve.computeBoundingSphere(),ne.add(ve),J.push(ve);for(let[Ve,Ge]of[[I,be],[q,Pe]]){if(!Ge.length)continue;let qe=Eo(Ve,U,Ge);qe.name="real-roofs",qe.frustumCulled=!0,qe.computeBoundingSphere(),ne.add(qe),J.push(qe)}}},()=>{let se=C.trees,pe=[],be=[],Pe=[],ve=[],Ve=new Le;for(let Ge=0;Ge<se.x.length;Ge++){let qe=se.x[Ge],Je=se.z[Ge];if(A(qe,Je,2.5,2.5)!==null)continue;let ut=se.r[Ge]/1e3,xt=se.y[Ge]-.4,Mt=.75+.5*ut,Ut=ut*40;if(se.k[Ge])if(ut<.55){let Ct=8+6*ut;be.push({x:qe,y:xt,z:Je,ry:Ut,sx:2.4,sy:Ct,sz:2.4,color:Ve.setRGB(.1*Mt,.26*Mt,.13*Mt).clone()})}else{let Ct=6+5*ut;pe.push({x:qe,y:xt,z:Je,ry:Ut,sx:.8,sy:Ct+.3,sz:.8,color:De}),Pe.push({x:qe,y:xt+Ct,z:Je,ry:Ut,sx:7.5,sy:2.6,sz:7.5,color:Ve.setRGB(.14*Mt,.34*Mt,.16*Mt).clone()})}else{let Ct=3.4+2.6*ut;pe.push({x:qe,y:xt,z:Je,ry:Ut,sx:.7,sy:2,sz:.7,color:De}),ve.push({x:qe,y:xt+1.5,z:Je,ry:Ut,sx:Ct,sy:Ct*.85,sz:Ct,color:Ve.setRGB(.3*Mt,.44*Mt,.2*Mt).clone()})}}F.stats.trees=be.length+Pe.length+ve.length;for(let[Ge,qe,Je,ut]of[[pe,oe,W,"real-trunks"],[be,Q,X,"real-trees"],[Pe,V,X,"real-trees"],[ve,$,X,"real-trees"]]){if(!Ge.length)continue;let xt=Eo(qe,Je,Ge);xt.name=ut,xt.frustumCulled=!0,xt.computeBoundingSphere(),ne.add(xt),J.push(xt)}},()=>{let se=[],pe=[],be=[],Pe=[];for(let ve of e.bridges)if(!(ve.s1<=K||ve.s0>=he)){for(let Ve=ve.s0+6;Ve<ve.s1-2;Ve+=34){if(Ve<K||Ve>=he)continue;At(e,Ve,0,Ie);let Ge=Re(Ie.x,Ie.z),qe=Ie.y-1.6-Ge;qe<3||(se.push({x:Ie.x,y:Ge+qe/2,z:Ie.z,ry:Ie.heading,sx:p*1.5,sy:qe,sz:2.4,color:Ee}),se.push({x:Ie.x,y:Ie.y-1.2,z:Ie.z,ry:Ie.heading,sx:p*2+5,sy:1.2,sz:3.6,color:ae}))}for(let Ve=ve.s0;Ve<ve.s1;Ve+=8)if(!(Ve<K||Ve>=he)){for(let Ge of[-1,1])At(e,Ve+4,Ge*(p+6+.4),Ie),pe.push({x:Ie.x,y:Ie.y-.9,z:Ie.z,ry:Ie.heading,sx:.9,sy:1.8,sz:8.3,color:ae});At(e,Ve+4,0,Ie),pe.push({x:Ie.x,y:Ie.y-1.25,z:Ie.z,ry:Ie.heading,sx:p*2+12,sy:.9,sz:8.3,color:Ee})}}for(let ve=K;ve<he&&ve<h-4;ve+=4)if(!ee(ve))for(let Ve of[-1,1]){let Ge=Ve*(p+6-.7);At(e,ve,Ge,Ie),At(e,ve+4,Ge,ce),be.push({x:Ie.x,y:Ie.y+.4,z:Ie.z,ry:Ie.heading,sx:.12,sy:.8,sz:.12,color:Te});let qe=Math.hypot(ce.x-Ie.x,ce.z-Ie.z)+.05,Je=Math.atan2(ce.x-Ie.x,ce.z-Ie.z);for(let ut of[.42,.72])Pe.push({x:(Ie.x+ce.x)/2,y:(Ie.y+ce.y)/2+ut,z:(Ie.z+ce.z)/2,ry:Je,sx:.07,sy:.2,sz:qe,color:we})}for(let[ve,Ve,Ge,qe]of[[se,Y,"real-piers",!0],[pe,Y,"real-decks",!1],[be,z,"real-rail-posts",!1],[Pe,z,"real-rails",!1]]){if(!ve.length)continue;let Je=Eo(I,Ve,ve);Je.name=Ge,Je.castShadow=qe,Je.frustumCulled=!0,Je.computeBoundingSphere(),ne.add(Je),J.push(Je)}},()=>{for(let pe of i.signs){if(pe.s<K||pe.s>=he)continue;let be=sg([pe.name,""]),Pe=B(new zt({map:be,color:be?16777215:817731,side:Nt}));be&&B(be),At(e,pe.s,p+6+2.2,Ie);let ve=new et(de,Pe);ve.scale.set(7.5,2.8,1),ve.position.set(Ie.x,Ie.y+5.2,Ie.z),ve.rotation.y=Ie.heading+Math.PI,ve.name="real-sign";let Ve=new et(I,z);Ve.scale.set(.3,5.2,.3),Ve.position.set(Ie.x,Ie.y+2.2,Ie.z),ne.add(ve,Ve)}let se=[];for(let pe=Math.max(60,K);pe<he&&pe<h-20;pe+=Fe.range(5,11)){if(ee(pe)||e.bridges.some(Pe=>pe>Pe.s0-4&&pe<Pe.s1+4))continue;if(Fe.next()<.25){pe+=Fe.range(15,50);continue}let be=Fe.next()<.5?-1:1;At(e,pe,be*(p+6+Fe.range(1.2,2.4)),Ie),se.push({x:Ie.x,y:Ie.y-.6,z:Ie.z,ry:Fe.range(0,6.28),sx:Fe.range(1.8,3),sy:Fe.range(1.6,2.6),sz:Fe.range(1.8,3),color:Fe.pick(Ne)})}if(se.length){let pe=Eo($,G,se);pe.castShadow=!0,pe.name="real-oleanders",pe.frustumCulled=!0,pe.computeBoundingSphere(),ne.add(pe),J.push(pe)}if(r){let pe=ig({track:e,data:C,baked:r,heightAt:Re,clearance:g,range:{s0:K,s1:he},unit:!0});ne.add(pe.group),J.push(pe),F.stats.props=pe.placed}}]}function Xe(F){if(le.has(F)||F<0||F>=m)return;let C={i:F,state:"loading",group:new lt,own:[],steps:null,near:null,mid:null,roads:[],stats:{buildings:0,trees:0,props:[]}};C.group.name="tuile-"+F,le.set(F,C);let J=ne=>{ge||le.get(F)!==C||(C.steps=Ue(C,ne),C.state="building",l.add(C.group))},B=wo.get(F);B&&typeof B.then!="function"?J(B):rg(s,F).then(J).catch(()=>{le.get(F)===C&&le.delete(F)})}function Ae(F){let C=Oe-F.steps.length,J=F.steps.shift(),B=typeof performance<"u"?performance.now():0;J();let ne=(typeof performance<"u"?performance.now():0)-B;ne>fe.worstStep&&(fe.worstStep=ne),ne>fe.worstBy[C]&&(fe.worstBy[C]=Math.round(ne)),F.steps.length||(F.state="ready",fe.built++)}function ze(F){l.remove(F.group);for(let C of F.roads)C.dispose?.();for(let C of F.own)C.isInstancedMesh?C.dispose():C.dispose?.();le.delete(F.i),fe.freed++}function $e(F){let C=Math.max(0,Math.min(m-1,Math.floor(F/x)));for(let J=Math.max(0,C-1);J<=Math.min(m-1,C+1);J++){Xe(J);let B=le.get(J);for(;B&&B.steps&&B.steps.length;)Ae(B)}}let Qe=0,N=new H;function te(F,C,J,B=0){E.position.set(J.x,0,J.z),b.position.x=J.x,b.position.z=J.z,M.value=C,S.position.copy(J).addScaledVector(y,200),S.target.position.copy(J),D&&(N.copy(J),D.position.set(N.x*(1-Xf),-2,N.z*(1-Xf)));let ne=Math.max(0,Math.min(m-1,Math.floor(B/x)));for(let he=ne-Fw;he<=ne+Ow;he++)Xe(he);for(let he of Array.from(le.values()))(he.i<ne-zw||he.i>ne+Bw)&&ze(he);Qe+=1;let K=null;for(let he of le.values())he.state==="building"&&(!K||Math.abs(he.i-ne)<Math.abs(K.i-ne))&&(K=he);K&&(Qe>=3||Math.abs(K.i-ne)<=1)&&(Qe=0,Ae(K));for(let he of le.values())for(let Ce of he.roads)Ce.update?.(F,C)}function j(){ge=!0;for(let F of Array.from(le.values()))ze(F);n.remove(l),n.fog&&n.fog!==v&&(n.fog=v||null),n.background=w||null;for(let F of c)F.dispose?.()}return n.add(l),{group:l,sun:S,update:te,dispose:j,heightAt:Re,prime:$e,chunks:le,stats:fe,readyAround(F){let C=Math.floor(F/x),J=le.get(C);return!!J&&J.state==="ready"}}}var Hw=[-5,0,5],Uc=[{id:"car",len:4.4,w:1.9,h:1.45,v:[31,37],lanes:[0,1,2]},{id:"van",len:5.8,w:2.1,h:2.35,v:[28,32],lanes:[1,2]},{id:"bus",len:11.5,w:2.5,h:3.3,v:[25,28],lanes:[2]},{id:"truck",len:13.5,w:2.5,h:3.8,v:[22,25],lanes:[2]}],ag=[0,0,0,0,0,1,1,2,3,3],Vw=.45,Gw=1,Ww=1.5,Xw=12,qw=5,Yw=3,$w=5;function lg({rng:n,count:e=22,density:t=1}={}){let i=[];for(let h=0;h<e;h++)i.push({id:h,type:Uc[0],lane:1,s:-1e9,d:0,speed:30,cruise:30,color:0,passed:!0,hitT:0});let s={vehicles:i,combo:0,comboT:0,meter:0,nearMisses:0,hits:0,events:[],density:t},r=!1;function o(h,f,p=30,g=30){let x=0;for(let m of i)m!==f&&m.s>h-p&&m.s<h+g&&(x|=1<<m.lane);return x}function a(h,f){let p=Uc[ag[n.int(0,ag.length-1)]],g=o(f,h,45,45),x=p.lanes.filter(d=>!(g&1<<d));return([0,1,2].filter(d=>g&1<<d).length>=2||!x.length)&&(f+=60,x=p.lanes),h.type=p,h.lane=x[n.int(0,x.length-1)],h.d=Hw[h.lane]+n.range(-.35,.35),h.cruise=h.speed=n.range(p.v[0],p.v[1]),h.color=n.int(0,7),h.s=f,h.passed=!1,h.hitT=0,f}function l(h,f=350){let p=h+f;for(let g of i)p=a(g,p)+n.range(70,190)/t;r=!0}function c(h,f,p){s.events.length=0,r||l(f.s);let g=-1/0;for(let x of i)x.s>g&&(g=x.s);for(let x of i){let m=x.cruise,d=0,b=1/0;for(let M of i){if(M===x||M.lane===x.lane)continue;let y=M.s-x.s;y>-8&&y<45&&(d|=1<<M.lane,M.speed<b&&(b=M.speed))}d===(7&~(1<<x.lane))&&(m=Math.min(m,b-.5));for(let M of i){if(M===x||M.lane!==x.lane)continue;let y=M.s-x.s-(M.type.len+x.type.len)/2;y>0&&y<25&&(m=Math.min(m,M.speed))}x.speed+=(m-x.speed)*Math.min(1,h*1.5),x.s+=x.speed*h,x.hitT>0&&(x.hitT-=h),x.s<f.s-70&&(g=a(x,Math.max(g+n.range(70,190)/t,f.s+650)))}for(let x of p){let m=x.state;for(let d of i){let b=m.s-d.s,M=m.d-d.d,y=d.type.len/2+Gw,T=d.type.w/2+Vw;if(Math.abs(b)<y&&Math.abs(M)<T){if(d.hitT<=0||x.isPlayer){let E=M!==0?Math.sign(M):m.d<d.d?-1:1;m.d=d.d+E*(T+.05),m.speed>d.speed*.95&&(m.speed=Math.max(d.speed*.9,m.speed*.5),m.boostT=0,d.hitT<=0&&(m.events?.push("hit"),x.isPlayer&&(s.hits++,s.combo=0,s.meter=0,s.events.push({type:"hit",vehicle:d})))),d.hitT=1.2}x.isPlayer&&(d.passed=!0)}else if(x.isPlayer&&!d.passed&&b>y&&(d.passed=!0,Math.abs(M)<T+Ww&&m.speed-d.speed>Xw)){s.nearMisses++,s.combo++,s.comboT=qw,s.meter++;let E=!1;s.meter>=Yw&&(s.meter=0,m.boostCharges<$w&&(m.boostCharges+=1,E=!0)),s.events.push({type:"near",vehicle:d,combo:s.combo,boost:E})}}}s.comboT>0&&(s.comboT-=h,s.comboT<=0&&(s.combo=0))}function u(h){for(let f of i)f.s+=h}return Object.assign(s,{update:c,reset:l,shift:u})}var $f="wss://tracker.openwebtorrent.com",cg=[{urls:"stun:stun.cloudflare.com:3478"}],Zw=4,Kw=25e3,ug=()=>{let n=crypto.getRandomValues(new Uint8Array(20)),e="";for(let t of n)e+=String.fromCharCode(t);return e},Yf=n=>Array.from(n,e=>e.charCodeAt(0).toString(16).padStart(2,"0")).join("");async function jw(n){let e=new TextEncoder().encode("polygon-rush/v3/"+String(n).trim()),t=new Uint8Array(await crypto.subtle.digest("SHA-1",e)),i="";for(let s of t)i+=String.fromCharCode(s);return i}function hg(n){return n.iceGatheringState==="complete"?Promise.resolve():new Promise(e=>{let t=setTimeout(e,2500);n.addEventListener("icegatheringstatechange",()=>{n.iceGatheringState==="complete"&&(clearTimeout(t),e())})})}async function Oc(n,{onPeer:e,onLeave:t,onMessage:i,onStatus:s,maxPeers:r=7}={}){let o=r,a=await jw(n),l=ug(),c=Yf(l),u=new Map,h=new Map,f=null,p=null,g=!1,x=0,m=v=>s?.(v);function d(v,w,_){let S=u.get(v);if(S&&S.ch.readyState==="open"){try{w.close()}catch{}return}let R={id:v,pc:w,ch:_,send(O){_.readyState==="open"&&_.send(JSON.stringify(O))}};u.set(v,R),_.onmessage=O=>{let I;try{I=JSON.parse(O.data)}catch{return}I&&typeof I=="object"&&i?.(R,I)};let D=()=>{u.get(v)===R&&(u.delete(v),t?.(R));try{w.close()}catch{}};_.onclose=D,w.addEventListener("connectionstatechange",()=>{["failed","closed","disconnected"].includes(w.connectionState)&&D()}),e?.(R)}function b(v,w,_){w.readyState==="open"?d(_,v,w):w.onopen=()=>d(_,v,w)}async function M(){let v=[];for(let w=0;w<Zw&&u.size+w<o;w++){let _=new RTCPeerConnection({iceServers:cg}),S=_.createDataChannel("jeu",{ordered:!1,maxRetransmits:0});_._ch=S,await _.setLocalDescription(await _.createOffer()),await hg(_);let R=ug();h.set(R,_),setTimeout(()=>{if(h.get(R)===_){h.delete(R);try{_.close()}catch{}}},5e4),v.push({offer_id:R,offer:{type:"offer",sdp:_.localDescription.sdp}})}return v}async function y(v){if(!f||f.readyState!==1)return;let w=u.size<o?await M():[];if(!f||f.readyState!==1)return;let _={action:"announce",info_hash:a,peer_id:l,numwant:w.length,uploaded:0,downloaded:0,left:1,offers:w};v&&(_.event=v),f.send(JSON.stringify(_))}async function T(v){let w;try{w=JSON.parse(v)}catch{return}if(!(!w||w.info_hash!==a)){if(w["failure reason"]){m("Le tracker refuse : "+w["failure reason"]);return}if(w.peer_id!==l){if(w.offer&&w.peer_id&&w.offer_id){let _=Yf(w.peer_id);if(u.has(_)||u.size>=o)return;let S=new RTCPeerConnection({iceServers:cg});S.ondatachannel=R=>b(S,R.channel,_);try{await S.setRemoteDescription(w.offer),await S.setLocalDescription(await S.createAnswer()),await hg(S),f?.send(JSON.stringify({action:"announce",info_hash:a,peer_id:l,to_peer_id:w.peer_id,offer_id:w.offer_id,answer:{type:"answer",sdp:S.localDescription.sdp}}))}catch{try{S.close()}catch{}}}else if(w.answer&&w.offer_id){let _=h.get(w.offer_id);if(!_)return;h.delete(w.offer_id);let S=Yf(w.peer_id);if(u.has(S)){try{_.close()}catch{}return}b(_,_._ch,S);try{await _.setRemoteDescription(w.answer)}catch{try{_.close()}catch{}}}}}}function E(){g||(m("Connexion au tracker\u2026"),f=new WebSocket($f),f.onopen=()=>{x=0,m("En attente d'autres joueurs"),y("started"),clearInterval(p),p=setInterval(()=>y(),Kw)},f.onmessage=v=>{typeof v.data=="string"&&T(v.data)},f.onclose=()=>{clearInterval(p),!g&&(m("Tracker injoignable, nouvel essai\u2026"),setTimeout(E,Math.min(15e3,2e3*2**x++)))},f.onerror=()=>{})}return E(),{id:c,peers:u,broadcast(v){let w=JSON.stringify(v);for(let _ of u.values())_.ch.readyState==="open"&&_.ch.send(w)},stopAnnouncing(){clearInterval(p);try{f?.close()}catch{}g=!0},leave(){g=!0,clearInterval(p);try{f?.close()}catch{}for(let v of u.values())try{v.pc.close()}catch{}for(let v of h.values())try{v.close()}catch{}u.clear(),h.clear()}}}function fg(){let n=null,e=0,t=null;return{get known(){return!!n},get age(){return n?(performance.now()-e)/1e3:1/0},push(i,s){!Number.isFinite(i.g)||!Number.isFinite(i.d)||!Number.isFinite(i.v)||(n={g:i.g,d:Math.max(-14,Math.min(14,i.d)),v:Math.max(0,Math.min(140,i.v)),l:+i.l||0,y:+i.y||0,b:!!i.b,sh:!!i.sh},e=s)},sample(i,s){if(!n)return null;let r=Math.min(.5,Math.max(0,(i-e)/1e3)),o={g:n.g+n.v*r,d:n.d,v:n.v,l:n.l,y:n.y,b:n.b,sh:n.sh};if(!t||Math.abs(t.g-o.g)>60)t={...o};else{let a=Math.min(1,s*10);t.g+=t.v*s+(o.g-(t.g+t.v*s))*a,t.d+=(o.d-t.d)*a,t.v+=(o.v-t.v)*a,t.l+=(o.l-t.l)*a,t.y+=(o.y-t.y)*a,t.b=o.b,t.sh=o.sh}return t}}}var Ea=[[14885934,2312392],[2005987,15921906],[3129179,1053720],[15902491,1776411],[10178016,15921906],[15751836,1776411],[2279360,1776411],[15921906,14885934]];function To(n){return String(n||"").replace(/[^\p{L}\p{N} _.-]/gu,"").trim().slice(0,14)||"Pilote"}function Zf(n){return String(n||"").toUpperCase().replace(/[^A-Z0-9-]/g,"").slice(0,16)}var Fc=15e3;function Kf(n){if(!n||typeof n!="object")return null;let e=Zf(n.id);return e.length<4?null:{id:e,name:String(n.name||"").replace(/[^\p{L}\p{N} _.'!-]/gu,"").trim().slice(0,24)||"Partie",host:To(n.host),players:Math.max(1,Math.min(8,Math.floor(Number(n.players))||1)),locked:!!n.locked,started:!!n.started,stage:Math.max(1,Math.min(99,Math.floor(Number(n.stage))||1))}}function jf(n,e){let t=!1;for(let[i,s]of n)e-s.seen>Fc&&(n.delete(i),t=!0);return t}var gg={name:"ECDSA",namedCurve:"P-256"},xg={name:"ECDSA",hash:"SHA-256"},dg="ABCDEFGHJKMNPQRSTUVWXYZ23456789",vg=new TextEncoder,pg=n=>{let e="";for(let t of new Uint8Array(n))e+=String.fromCharCode(t);return btoa(e)},mg=n=>Uint8Array.from(atob(String(n)),e=>e.charCodeAt(0));async function yg(n){let e=new Uint8Array(await crypto.subtle.digest("SHA-256",n)),t="";for(let i=0;i<12;i++)t+=dg[e[i]%dg.length];return t}async function _g(){let n=await crypto.subtle.generateKey(gg,!1,["sign","verify"]),e=await crypto.subtle.exportKey("raw",n.publicKey);return{id:await yg(e),pub:pg(e),sign:async t=>pg(await crypto.subtle.sign(xg,n.privateKey,vg.encode(t)))}}async function wa(n,e,t,i){try{let s=mg(e);if(s.length!==65||typeof i!="string"||i.length>200||await yg(s)!==n)return!1;let r=await crypto.subtle.importKey("raw",s,gg,!1,["verify"]);return await crypto.subtle.verify(xg,r,mg(i),vg.encode(t))}catch{return!1}}var Jf=n=>["partie",n.id,n.name,n.host,n.players,n.locked?1:0,n.started?1:0,n.stage,n.seq].join("|"),Qf=(n,e)=>["fermee",n,e].join("|"),ed=(n,e)=>["hote",n,e].join("|");var Jw=15,Mg=new Set(["it","hit","gone","res"]);async function bg(n,e,{onChange:t,onStart:i,onStatus:s,password:r="",roomKey:o=null}={}){let a=!!o,l=String(n).toUpperCase(),c=Promise.resolve(null),u=new Map,h=To(e),f=null,p=0,g=()=>t?.(),x=await Oc("partie/"+String(n).toUpperCase()+(r?"/"+r:""),{onStatus:s,onPeer(d){u.set(d.id,{id:d.id,name:"Pilote",remote:fg(),finished:!1,finishTime:null,gone:!1,peer:d}),c.then(b=>d.send(b?{t:"hi",name:h,pub:o.pub,sig:b}:{t:"hi",name:h})),f&&d.send({t:"busy"}),g()},onLeave(d){let b=u.get(d.id);b&&(f?b.gone=!0:u.delete(d.id),g())},onMessage(d,b){let M=u.get(d.id);M&&(b.t==="hi"?(M.name=To(b.name),g(),b.pub&&b.sig&&wa(l,String(b.pub),ed(l,d.id),String(b.sig)).then(y=>{y&&(M.creator=!0,g())})):b.t==="s"?M.remote.push(b,performance.now()):b.t==="fin"&&Number.isFinite(b.time)?(M.finished=!0,M.finishTime=b.time,g()):b.t==="start"&&!f&&d.id===m.hostId?(f={stage:Math.max(1,Math.floor(Number(b.stage))||1)},x.stopAnnouncing(),i?.(f)):b.t==="busy"?(M.busy=!0,g()):Mg.has(b.t)&&m.onItem?.(M,b))}});a&&(c=o.sign(ed(l,x.id)).catch(()=>null));let m={code:n,locked:!!r,id:x.id,name:h,players:u,get started(){return f},get peerCount(){return x.peers.size},get hostId(){if(a)return x.id;for(let b of u.values())if(b.creator&&!b.gone)return b.id;let d=x.id;for(let b of u.keys())b<d&&(d=b);return d},get isHost(){return m.hostId===x.id},roster(){let d=[{id:x.id,name:h,me:!0},...Array.from(u.values()).filter(b=>!b.busy)];return d.sort((b,M)=>b.id<M.id?-1:1),d.map((b,M)=>({...b,color:Ea[M%Ea.length][0],accent:Ea[M%Ea.length][1]}))},start(d){return f||!m.isHost?!1:(f={stage:d},x.broadcast({t:"start",stage:d}),x.stopAnnouncing(),!0)},onItem:null,sendItem(d){d&&Mg.has(d.t)&&x.broadcast(d)},sendState(d,b,M,y=!1){d-p<1e3/Jw||(p=d,x.broadcast({t:"s",g:Math.round(b*100)/100,d:Math.round(M.d*100)/100,v:Math.round(M.speed*100)/100,l:Math.round((M.lean||0)*1e3)/1e3,y:Math.round((M.yaw||0)*1e3)/1e3,b:M.boostT>0?1:0,sh:y?1:0}))},sendFinish(d){x.broadcast({t:"fin",time:d})},leave(){x.leave()}};return m}var Qw=4e3,Sg=60,eT=5*6e4,tT=5;async function Eg({onChange:n,onStatus:e}={}){let t=new Map,i=new Map,s=null,r=!1,o=()=>performance.now(),a=()=>{r||n?.()},l=({seen:x,...m})=>({...m,age:Math.max(0,Math.round(o()-x))});async function c(x,m){let d=Kf(m),b=Number(m?.seq),M=Number(m?.age);if(!d||!Number.isSafeInteger(b)||!Number.isFinite(M)||M<0||M>Fc||s&&d.id===s.data.id)return;let y=t.get(d.id);if((y?y.seq>=b:t.size>=Sg)||Math.abs(Date.now()-b)>eT)return;let T={...d,seq:b,pub:String(m.pub||""),sig:String(m.sig||"")};if(!await wa(d.id,T.pub,Jf(T),T.sig)){i.set(x.id,(i.get(x.id)||0)+1);return}let E=t.get(d.id);E&&E.seq>=b||(t.set(d.id,{...T,seen:o()-M}),a())}let u=await Oc("annuaire",{maxPeers:12,onStatus:e,onPeer(x){x.send({t:"rooms",list:h()}),a()},onLeave(x){i.delete(x.id),a()},async onMessage(x,m){if(!((i.get(x.id)||0)>=tT)){if(m.t==="rooms"&&Array.isArray(m.list))for(let d of m.list.slice(0,Sg))await c(x,d);else if(m.t==="gone"&&typeof m.id=="string"){let d=t.get(m.id),b=Number(m.seq);d&&Number.isSafeInteger(b)&&b>d.seq&&await wa(d.id,d.pub,Qf(d.id,b),String(m.sig||""))&&(t.delete(m.id),u.broadcast({t:"gone",id:m.id,seq:b,sig:m.sig}),a())}}}});function h(){let x=Array.from(t.values()).filter(m=>o()-m.seen<=Fc).map(l);return s?.signed&&x.push({...s.signed,age:0}),x}async function f(){if(!s)return;let x=s,m={...x.data,seq:Date.now(),pub:x.key.pub};m.sig=await x.key.sign(Jf(m)),s===x&&(x.signed=m)}let p=setInterval(async()=>{jf(t,o())&&a(),await f(),r||u.broadcast({t:"rooms",list:h()})},Qw);async function g(){if(!s)return;let x=Date.now()+1,m={t:"gone",id:s.data.id,seq:x,sig:await s.key.sign(Qf(s.data.id,x))};u.broadcast(m)}return{get peers(){return u.peers.size},list(){return jf(t,o()),Array.from(t.values()).sort((x,m)=>x.started-m.started||m.seen-x.seen)},async advertise(x,m){let d=Kf({...x,id:m.id});!d||s&&JSON.stringify(s.data)===JSON.stringify(d)||(s={key:m,data:d,signed:s?.signed||null},await f(),r||u.broadcast({t:"rooms",list:h()}))},async retire(){s&&(await g(),s=null)},close(){if(r)return;let x=()=>{r=!0,clearInterval(p),u.leave()};s?g().then(x,x):x()}}}var wg="polygon-rush-name",di=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),nT=n=>"#"+n.toString(16).padStart(6,"0"),Bc="width:min(70vw,15em);font-size:2.6vmin;letter-spacing:0.04em;text-transform:none";async function Tg(n,e){let t="";try{t=localStorage.getItem(wg)||""}catch{}let i=()=>{},s="Connexion au tracker\u2026",r=null;try{r=await Eg({onChange:()=>i(),onStatus:a=>{s=a,i()}})}catch(a){return console.warn("Annuaire indisponible :",a),null}let o=()=>(i=()=>{},r.close(),null);for(;;){let a=await n({initial:1,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">Multijoueur \xB7 ${di(e.title)}</p>
  <div class="pr-seedrow pr-slide" style="--i:1">
    <label class="pr-lbl" for="pr-name-in">Pseudo</label>
    <div class="pr-seedbox"><input id="pr-name-in" class="pr-input" type="text" value="${di(t)}" maxlength="14" autocomplete="off" spellcheck="false" data-nav data-name style="${Bc}"></div>
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
  <p class="pr-cmds pr-slide" style="--i:4">Liaison directe entre joueurs : votre adresse IP est visible des autres joueurs, du tracker (${di($f.replace("wss://",""))}) et du serveur STUN de Cloudflare.</p>
</section>`,onMount(v){i=()=>{let w=v.querySelector("[data-rooms]");if(!w)return;let _=r.list(),S=r.peers,R=`${S} autre${S>1?"s":""} joueur${S>1?"s":""} dans le lobby`;v.querySelector("[data-status]").textContent=_.length?`${_.length} partie${_.length>1?"s":""} annonc\xE9e${_.length>1?"s":""} \xB7 ${R}`:S?`Aucune partie pour l'instant \xB7 ${R}`:s,w.innerHTML=_.map(D=>`<li style="display:flex;align-items:center;gap:.8em"><span style="flex:1;text-align:left">${D.locked?"\u{1F512} ":""}<b>${di(D.name)}</b> <small>\xB7 ${di(D.host)}</small></span><span>${D.players}/8</span>`+(D.started?'<span style="opacity:.6;min-width:7em;text-align:right">en course</span>':`<button type="button" class="pr-btn pr-btn-small" data-act="join" data-id="${di(D.id)}" data-locked="${D.locked?1:0}" data-room="${di(D.name)}">Rejoindre</button>`)+"</li>").join("")},i()},actions:{back:(v,w)=>w(null),create:(v,w)=>w({create:!0,name:v.closest(".pr-screen").querySelector("[data-name]").value}),join:(v,w)=>w({join:v.dataset.id,locked:v.dataset.locked==="1",room:v.dataset.room,name:v.closest(".pr-screen").querySelector("[data-name]").value})}});if(i=()=>{},!a)return o();let l=To(a.name);t=l;try{localStorage.setItem(wg,l)}catch{}let c,u,h="",f=!1,p=null;if(a.create){let v=await n({initial:0,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">Nouvelle partie</p>
  <div class="pr-seedrow pr-slide" style="--i:1">
    <label class="pr-lbl" for="pr-room-in">Nom de la partie</label>
    <div class="pr-seedbox"><input id="pr-room-in" class="pr-input" type="text" value="${di("Partie de "+l)}" maxlength="24" autocomplete="off" spellcheck="false" data-nav data-room style="${Bc}"></div>
  </div>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-pass-in">Mot de passe (laisser vide pour une partie publique)</label>
    <div class="pr-seedbox"><input id="pr-pass-in" class="pr-input" type="text" value="" maxlength="24" autocomplete="off" spellcheck="false" data-nav data-pass style="${Bc}"></div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="ok">Ouvrir la partie</button>
    <button type="button" class="pr-btn" data-nav data-act="back">Retour</button>
  </div>
  <p class="pr-cmds pr-slide" style="--i:4">Une partie publique peut \xEAtre rejointe par tous ceux qui la voient dans le lobby.<br>Une partie priv\xE9e appara\xEEt avec un cadenas : il faut son mot de passe pour y entrer.</p>
</section>`,actions:{back:(w,_)=>_(null),ok:(w,_)=>{let S=w.closest(".pr-screen");_({room:S.querySelector("[data-room]").value,pass:S.querySelector("[data-pass]").value.trim()})}}});if(!v)continue;p=await _g(),c=p.id,u=v.room,h=v.pass,f=!0}else if(c=Zf(a.join),u=a.room,a.locked){let v=await n({initial:0,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">\u{1F512} ${di(u)}</p>
  <div class="pr-seedrow pr-slide" style="--i:1">
    <label class="pr-lbl" for="pr-pass-in">Mot de passe de la partie</label>
    <div class="pr-seedbox"><input id="pr-pass-in" class="pr-input" type="text" value="" maxlength="24" autocomplete="off" spellcheck="false" data-nav data-pass style="${Bc}"></div>
  </div>
  <div class="pr-btns pr-slide" style="--i:2">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="ok">Entrer</button>
    <button type="button" class="pr-btn" data-nav data-act="back">Retour</button>
  </div>
</section>`,actions:{back:(w,_)=>_(null),ok:(w,_)=>_({pass:w.closest(".pr-screen").querySelector("[data-pass]").value.trim()})}});if(!v)continue;h=v.pass}let g=null,x=null,m="Connexion au tracker\u2026",d=1;try{g=await bg(c,l,{password:h,roomKey:p,onChange:()=>i(),onStatus:v=>{m=v,i()},onStart:v=>x?.({stage:v.stage})})}catch(v){console.warn("Partie indisponible :",v);continue}let b=performance.now(),M=e.stages.map((v,w)=>`<option value="${w+1}">${w+1} \xB7 ${di(v.subtitle)}</option>`).join(""),y=()=>{p&&r.advertise({name:u,host:l,players:g.roster().length,locked:!!h,started:!!g.started,stage:d},p)},T=null,E=await n({initial:0,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">${h?"\u{1F512} Partie priv\xE9e":"Partie publique"}</p>
  <div class="pr-logo pr-slide" style="--i:1;font-size:.45em"><span class="pr-logo-b">${di(u)}</span></div>
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
</section>`,onMount(v,w){if(x=w,g.started){w({stage:g.started.stage});return}i=()=>{let _=v.querySelector("[data-list]");if(!_)return;let S=g.roster(),R=g.hostId;_.innerHTML=S.map(k=>`<li${k.me?' class="pr-me"':""}><span style="display:inline-block;width:.8em;height:.8em;border-radius:50%;background:${nT(k.color)};margin-right:.6em"></span><span>${di(k.name)}${k.me?" (vous)":""}</span><b>${k.id===R?"h\xF4te":""}</b></li>`).join("");let D=S.length<2,O;D?f?O=h?"Partie priv\xE9e ouverte \xB7 donnez le mot de passe \xE0 vos amis":"Partie ouverte \xB7 visible dans le lobby":performance.now()-b>15e3?O=h?"Personne ici : mot de passe incorrect, ou la partie est ferm\xE9e":"Personne ici : la partie est peut-\xEAtre ferm\xE9e":O=m:O=`${S.length} joueurs`+(g.isHost?" \xB7 \xE0 vous de lancer la course":" \xB7 l'h\xF4te lance la course"),v.querySelector("[data-status]").textContent=O,d=Number(v.querySelector("[data-from]").value)||1;let I=v.querySelector("[data-start]");I.style.display=g.isHost?"":"none",I.disabled=D,I.style.opacity=D?"0.45":"",v.querySelector("[data-hostrow]").style.display=g.isHost?"":"none",y()},i(),v.querySelector("[data-from]").addEventListener("change",()=>i()),T=setInterval(()=>i(),3e3)},actions:{quit:(v,w)=>w(null),start:(v,w)=>{if(!g.isHost||g.roster().length<2)return;let _=Number(v.closest(".pr-screen").querySelector("[data-from]").value)||1;g.start(_)&&w({stage:_})}}});if(clearInterval(T),i=()=>{},x=null,!E){await r.retire(),g.leave();continue}return p?y():r.close(),{session:g,stage:E.stage,directory:p?r:null}}}var iT=[14212578,12067627,2051996,3093304,15788504,9080726,1928010,14722347];function qs(n){let e=[],t=[],i=[],s=[[1,0,0,[1,-1,-1,1,1,-1,1,1,1,1,-1,1]],[-1,0,0,[-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1]],[0,1,0,[-1,1,1,1,1,1,1,1,-1,-1,1,-1]],[0,-1,0,[-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1]],[0,0,1,[1,-1,1,1,1,1,-1,1,1,-1,-1,1]],[0,0,-1,[-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1]]];for(let[o,a,l,c,u,h,f=1,p=1,g=1,x=0,m=0]of n){let d=(b,M)=>{let y=M[b*3+1]>0,T=M[b*3+2];return[o+M[b*3]*c/2,a+M[b*3+1]*u/2,l+T*h/2-(y?T>0?x:-m:0)]};for(let[b,M,y,T]of s){let E=d(0,T),v=d(1,T),w=d(2,T),_=(v[1]-E[1])*(w[2]-E[2])-(v[2]-E[2])*(w[1]-E[1]),S=(v[2]-E[2])*(w[0]-E[0])-(v[0]-E[0])*(w[2]-E[2]),R=(v[0]-E[0])*(w[1]-E[1])-(v[1]-E[1])*(w[0]-E[0]),D=Math.hypot(_,S,R)||1,O=_*b+S*M+R*y<0?-1:1;_*=O/D,S*=O/D,R*=O/D;for(let I of[0,1,2,0,2,3])e.push(...d(I,T)),t.push(_,S,R),i.push(f,p,g)}}let r=new ht;return r.setAttribute("position",new rt(e,3)),r.setAttribute("normal",new rt(t,3)),r.setAttribute("color",new rt(i,3)),r}var zc=[.12,.16,.22],sT=[.07,.07,.08],kc=[.95,.08,.06],Hc=[1,.95,.75],rT=[.86,.87,.88],oT=[.2,.21,.23];function Vc(n,e,t,i){let s=[];for(let r of i)for(let o of[-1,1])s.push([o*(n/2-.12),t,r,.3,t*2,t*2,...sT]);return s}function aT(n){let{len:e,w:t,h:i}=n,s=-e/2,r=e/2,o=[[-t/2+.3,.75,s-.02,.4,.22,.08,...kc],[t/2-.3,.75,s-.02,.4,.22,.08,...kc],[-t/2+.3,.7,r+.02,.4,.2,.08,...Hc],[t/2-.3,.7,r+.02,.4,.2,.08,...Hc]];if(n.id==="car")return[qs([[0,.62,0,t,.64,e,1,1,1,.35,.12],[0,1.4,-.33,t*.8,.08,e*.52-.95]]),qs([[0,1.13,-.25,t*.86,.5,e*.52,...zc,.55,.4],...Vc(t,e,.32,[e*.3,-e*.3]),...o])];if(n.id==="van")return[qs([[0,1.25,-.5,t,1.9,e-1.2],[0,.85,r-.55,t,1.1,1.1,1,1,1,.25,0]]),qs([[0,1.75,r-.62,t*.92,.7,1,...zc,.5,0],...Vc(t,e,.36,[e*.32,-e*.3]),...o])];if(n.id==="bus")return[qs([[0,1,0,t,1.3,e],[0,3.05,0,t,.5,e]]),qs([[0,2.2,0,t*1.01,1.15,e*.985,...zc],...Vc(t,e,.5,[e*.33,-e*.3]),...o])];let a=2.5;return[qs([[0,1.75,r-a/2,t,2.5,a,1,1,1,.3,0]]),qs([[0,2.25,s+(e-a-.5)/2,t,3.1,e-a-.5,...rT],[0,.75,s+(e-a)/2,t*.5,.3,e-a,...oT],[0,2.35,r-.36,t*.92,.85,.85,...zc,.2,0],...Vc(t,e,.52,[r-1.2,s+1.4,s+2.7,s+4]),[-t/2+.3,1,s-.02,.4,.25,.08,...kc],[t/2-.3,1,s-.02,.4,.25,.08,...kc],[-t/2+.3,.9,r+.02,.4,.2,.08,...Hc],[t/2-.3,.9,r+.02,.4,.2,.08,...Hc]])]}function Ag(n,e){let t=new lt;t.name="traffic";let i=new Map(Uc.map(h=>[h.id,aT(h)])),s=iT.map(h=>new jn({color:h})),r=new jn({vertexColors:!0}),o=[];for(let h=0;h<e;h++){let f=new lt,p=new et(i.get("car")[0],s[0]),g=new et(i.get("car")[1],r);p.castShadow=!0,g.castShadow=!0,f.add(p,g),f.visible=!1,t.add(f),o.push({g:f,body:p,detail:g,type:null,color:-1})}n.add(t);let a={};function l(h,f,p){for(let g=0;g<o.length;g++){let x=o[g],m=h.vehicles[g],d=m?m.s-p:1e9;if(!m||d<-120||d>1400){x.g.visible=!1;continue}if(x.type!==m.type.id){x.type=m.type.id;let[b,M]=i.get(m.type.id);x.body.geometry=b,x.detail.geometry=M}x.color!==m.color&&(x.color=m.color,x.body.material=s[m.color%s.length]),At(f,m.s,m.d,a),x.g.position.set(a.x,a.y,a.z),x.g.rotation.set(-Math.atan(a.slope||0),a.heading,0,"YXZ"),x.g.visible=!0}}function c(){for(let h of o)h.g.visible=!1}function u(){n.remove(t);for(let[h,f]of i.values())h.dispose(),f.dispose();for(let h of s)h.dispose();r.dispose()}return{group:t,update:l,hide:c,dispose:u}}var Xc={nitro:{id:"nitro",name:"Nitro",icon:"\u{1F680}"},rocket:{id:"rocket",name:"Fus\xE9e",icon:"\u{1F3AF}"},oil:{id:"oil",name:"Huile",icon:"\u{1F6E2}"},shield:{id:"shield",name:"Bouclier",icon:"\u{1F6E1}"},pulse:{id:"pulse",name:"Impulsion",icon:"\u26A1"}},Rg=Object.keys(Xc),Ta=5,lT=650,cT=420,uT=320,hT=1.25,fT=3.5,dT=2.6,pT=10,mT=38,Cg=95,Ig=7,gT=420,xT=9,Pg=2.4,vT=1.1,Lg=40,yT=1.3,_T=1.8,MT=.6,td=700,bT=3,ST=.68,ET={rocket:1.1,oil:.8},wT={rocket:.5,oil:.62},Gc=5,nd=9,Wc=[.3,.65],TT=1.4,Dg=24,Ng=12,AT=1,Ug=new Set(["oil","rocket","pulse"]),Ao=(n,e)=>n-e*Math.round(n/e);function qc(n){return 10+5*Math.max(0,n|0)}function RT(n,{solo:e=!1}={}){return e?{nitro:1,rocket:0,oil:0,shield:0,pulse:0}:{nitro:3,rocket:n<=0?0:1+3.5*n,oil:1+3*(1-n),shield:2,pulse:n>.5?2.4*n:0}}function Og({track:n,rng:e,startS:t=0,attacks:i=!0,net:s=null}){let r=n.length,o=!!n.open,a=n.raceEnd??r,l=o?lT:r/Math.max(2,Math.round(r/cT)),c=t+uT,u=new Map,h=[],f=[],p=[],g=[],x=[],m=0,d=0,b=U=>U&&U.isPlayer&&s?s.id:U?U.id:null,M={},y=0,T=U=>c+U*l,E=U=>Math.floor((U-c)/l);function v(U,X){let W=ui(n,T(U),M).width;return(X-(Ta-1)/2)*W*.19}let w=U=>U>=0&&(!o||T(U)<a-150),_=new Set,S=(U,X,W)=>(U*Wc.length+X)*Gc+W,R=(U,X,W)=>T(U)+l*Wc[X]+W*nd;function D(U,X){let W=ui(n,R(U,X,2),M).width;return(((U*7+X*3)%5+5)%5-2)*.15*W}function O(U,X){let W=X.length,Y=W>1?(U.position-1)/(W-1):0,z=RT(Y,{solo:!i}),G=0;for(let xe of Rg)G+=z[xe];let de=e.next()*G;for(let xe of Rg)if(de-=z[xe],de<0)return xe;return"nitro"}function I(U,X,W){if(U.shieldT>0)return U.shieldT=0,p.push({type:"block",rider:U,by:X,item:W}),!1;let Y=U.state;return W==="pulse"?(U.slowT=bT,Y.speed*=.75):(Y.stun=Math.max(Y.stun||0,ET[W]),Y.speed*=wT[W]),Y.boostT=0,p.push({type:"hit",rider:U,by:X,item:W}),!0}function k(U,X,W,Y){let z=null,G=Y;for(let de of X){if(de===U||de.hidden||de.finished)continue;let xe=W*(o?de.state.s-U.state.s:Ao(de.state.s-U.state.s,r));xe>0&&xe<G&&(z=de,G=xe)}return z?{rider:z,gap:G}:null}function q(U,X){let W=U.item;if(!W||U.finished||(U.state.stun||0)>0)return!1;let Y=U.state;if(U.item=null,U.itemT=0,W==="nitro")Y.boostT=Math.max(Y.boostT,dT);else if(W==="shield")U.shieldT=pT;else if(W==="oil"){h.length>=Dg&&h.shift();let z={s:Y.s-2.5,d:Y.d,t:Lg,owner:U,arm:MT,id:b(U)+":"+ ++m};h.push(z),s&&g.push({t:"it",k:"oil",id:z.id,g:z.s,d:z.d})}else if(W==="rocket"){f.length>=Ng&&f.shift();let z=k(U,X,1,gT),G={s:Y.s+2,d:Y.d,v:Math.max(Cg,Y.speed+mT),t:Ig,owner:U,target:z?z.rider:null};f.push(G),s&&g.push({t:"it",k:"rocket",g:G.s,d:G.d,v:G.v,to:b(G.target)})}else if(W==="pulse"){for(let z of X){if(z===U||z.hidden||z.remote||z.finished)continue;let G=o?z.state.s-Y.s:Ao(z.state.s-Y.s,r);G>0&&G<td&&I(z,U,"pulse")}s&&g.push({t:"it",k:"pulse",g:Y.s})}return p.push({type:"use",rider:U,item:W}),!0}function Q(U,X,W){if(U.itemT=(U.itemT||0)+W,U.itemT<U.itemWait)return;let Y=U.itemT>U.itemWait+9,z=U.item,G=Y;z==="nitro"?G=G||Math.abs(U.state.lean||0)<.25&&U.state.boostT<=0&&!U.state.airborne:z==="shield"?G=!0:z==="rocket"?G=G||!!k(U,X,1,220):z==="oil"?G=G||!!k(U,X,-1,35):z==="pulse"&&(G=G||!!k(U,X,1,td*.6)),G&&q(U,X)}function V(U,X,{vehicles:W=null,autoPlayer:Y=!1}={}){if(p.length=0,y+=U,d>0&&(d-=U),x.length){for(let[z,G]of x)ie(z,G,X);x.length=0}for(let z of X){if(z.remote||z.hidden)continue;let G=z.state;if(z.shieldT>0&&(z.shieldT=Math.max(0,z.shieldT-U)),z.slowT>0){z.slowT=Math.max(0,z.slowT-U);let xe=z.stats.maxSpeed*ST;G.speed>xe&&(G.speed+=(xe-G.speed)*Math.min(1,U*4)),G.boostT=0}let de=z.itemPrevS??G.s;if(z.itemPrevS=G.s,!z.finished){if(z.isPlayer&&G.s>de){for(let xe=Math.max(0,E(de)-1);xe<=E(G.s);xe++)if(w(xe))for(let Ne=0;Ne<Wc.length;Ne++){let He=R(xe,Ne,0);if(!(G.s<He||de>He+Gc*nd)&&!(Math.abs(G.d-D(xe,Ne))>TT))for(let Z=0;Z<Gc;Z++){let ae=He+Z*nd,Ee=S(xe,Ne,Z);ae>de&&ae<=G.s&&!_.has(Ee)&&(_.add(Ee),p.push({type:"shard",rider:z}))}}}if(!z.item&&G.s>de&&!G.airborne){for(let xe=E(de)+1;xe<=E(G.s);xe++)if(w(xe)){for(let Ne=0;Ne<Ta;Ne++){let He=xe*Ta+Ne;if(!((u.get(He)||0)>y||Math.abs(G.d-v(xe,Ne))>hT)){u.set(He,y+fT),z.item=O(z,X),z.itemT=0,z.itemWait=.8+e.next()*4,p.push({type:"pickup",rider:z,item:z.item,row:xe,box:Ne});break}}if(z.item)break}}z.item&&(!z.isPlayer||Y)&&Q(z,X,U)}}for(let z=h.length-1;z>=0;z--){let G=h[z];G.t-=U,G.arm>0&&(G.arm-=U);let de=G.t<=0;if(!de)for(let xe of X){if(xe.remote||xe.hidden||xe.finished||xe.state.airborne||xe===G.owner&&G.arm>0)continue;let Ne=o?xe.state.s-G.s:Ao(xe.state.s-G.s,r);if(Math.abs(Ne)<_T&&Math.abs(xe.state.d-G.d)<yT){let He=I(xe,G.owner,"oil");s&&(g.push({t:"gone",id:G.id}),G.owner&&G.owner.remote&&g.push({t:"res",by:G.owner.id,k:"oil",ok:He?1:0})),de=!0;break}}de&&h.splice(z,1)}for(let z=f.length-1;z>=0;z--){let G=f[z];G.t-=U;let de=G.s;G.s+=G.v*U;let xe=G.target;if(xe&&!xe.finished&&!xe.hidden){let Z=xe.state.d-G.d;G.d+=Math.sign(Z)*Math.min(Math.abs(Z),xT*U)}let Ne=G.t<=0,He=null;if(G.ghost){!Ne&&xe&&G.s>(o?xe.state.s:de+Ao(xe.state.s-de,r))+4&&(Ne=!0),Ne&&f.splice(z,1);continue}if(!Ne){for(let Z of X){if(Z===G.owner||Z.hidden||Z.finished)continue;let ae=o?Z.state.s:G.s+Ao(Z.state.s-G.s,r);if(ae>de-Pg&&ae<G.s+Pg&&Math.abs(Z.state.d-G.d)<vT){He=Z;break}}if(He&&He.remote)g.push({t:"hit",to:He.id,k:"rocket"}),p.push({type:"sent",rider:He,by:G.owner,item:"rocket"}),Ne=!0;else if(He)I(He,G.owner,"rocket"),Ne=!0;else if(W){for(let Z of W)if(Z.s>de-Z.type.len/2&&Z.s<G.s+Z.type.len/2&&Math.abs(Z.d-G.d)<Z.type.w/2+.3){p.push({type:"boom",s:G.s,d:G.d}),Ne=!0;break}}}Ne&&f.splice(z,1)}if(u.size>400)for(let[z,G]of u)G<y&&u.delete(z)}function $(U,X){return!s||!U||!X||!X.remote||x.length>=32?!1:(x.push([U,X]),!0)}let oe=(U,X,W)=>Number.isFinite(U)?Math.max(X,Math.min(W,U)):null;function ie(U,X,W){let Y=W.find(z=>z.isPlayer);if(Y){if(U.t==="it"&&Ug.has(U.k)){let z=oe(U.g,-1e6,1e7);if(z===null)return;if(U.k==="oil"){let G=oe(U.d,-20,20),de=String(U.id||"").slice(0,48);if(G===null||!de||h.some(xe=>xe.id===de))return;h.length>=Dg&&h.shift(),h.push({s:z,d:G,t:Lg,owner:X,arm:0,id:de})}else if(U.k==="rocket"){let G=oe(U.d,-20,20),de=oe(U.v,Cg,180);if(G===null||de===null)return;f.length>=Ng&&f.shift();let xe=U.to===s.id?Y:W.find(Ne=>Ne.remote&&Ne.id===U.to)||null;f.push({s:z,d:G,v:de,t:Ig,owner:X,target:xe,ghost:!0})}else if(U.k==="pulse"){let G=o?Y.state.s-z:Ao(Y.state.s-z,r);if(Y.finished||!(G>0&&G<td))return;let de=I(Y,X,"pulse");g.push({t:"res",by:X.id,k:"pulse",ok:de?1:0})}}else if(U.t==="hit"){if(U.to!==s.id||U.k!=="rocket"||Y.finished||d>0)return;d=AT;let z=I(Y,X,"rocket");g.push({t:"res",by:X.id,k:"rocket",ok:z?1:0});let G=f.findIndex(de=>de.ghost&&de.owner===X);G>=0&&f.splice(G,1)}else if(U.t==="gone"){let z=String(U.id||""),G=h.findIndex(de=>de.id===z);G>=0&&h.splice(G,1)}else if(U.t==="res"&&Ug.has(U.k)){let z=U.by===s.id?Y:W.find(G=>G.remote&&G.id===U.by)||null;p.push({type:U.ok?"hit":"block",rider:X,by:z,item:U.k})}}}function ye(U,X=[],W=1300,Y=60){X.length=0;for(let z=Math.max(0,E(U-Y)+1);T(z)<=U+W;z++){if(!w(z)){if(o)break;continue}for(let G=0;G<Ta;G++){let de=z*Ta+G;(u.get(de)||0)>y||X.push({s:T(z),d:v(z,G),key:de})}}return X}function Se(U,X=[],W=650,Y=15){X.length=0;for(let z=Math.max(0,E(U-Y)-1);T(z)<=U+W;z++){if(!w(z)){if(o)break;continue}for(let G=0;G<Wc.length;G++){let de=D(z,G);for(let xe=0;xe<Gc;xe++){let Ne=R(z,G,xe),He=S(z,G,xe);Ne<U-Y||Ne>U+W||_.has(He)||X.push({s:Ne,d:de,key:He})}}}return X}return{outbox:g,receive:$,shardsAround:Se,shardS:R,shardD:D,update:V,use:q,boxesAround:ye,hazards:h,rockets:f,events:p,spacing:l,rowS:T,boxD:v,strike:I}}var Fg=30,Bg=25,zg=24,kg=12,Hg=[16761370,2746367,16732064,8257370];function Ro(n){let e=n.index?n.toNonIndexed():n;return e.computeVertexNormals(),e}function Vg(n){let e=new lt;e.name="items",n.add(e);let t={},i=[],s=Ro(new ca(.85,0)),r=Ro(new Zl(1.3,.09,4,8)),o=new Qt(.22,.6,16,6,1,!0);o.translate(0,7.6,0);let a=[];for(let $=0;$<Bg;$++){let oe=Hg[$%Hg.length],ie=new lt,ye=new et(s,new ot({color:oe,emissive:oe,emissiveIntensity:.55,roughness:.25,metalness:.2,flatShading:!0})),Se=new et(r,new ot({color:16777215,emissive:16777215,emissiveIntensity:.35,roughness:.4,flatShading:!0})),U=new et(o,new zt({color:oe,transparent:!0,opacity:.5,depthWrite:!1,fog:!1}));ie.add(ye,Se,U),ie.visible=!1,e.add(ie),a.push({g:ie,crystal:ye,ring:Se,beam:U,phase:$*1.7})}let l=Ro(new ca(.3,0));l.scale(.8,1.35,.8);let c=new ot({color:5111706,emissive:2285690,emissiveIntensity:.9,roughness:.3,flatShading:!0}),u=[],h=[];for(let $=0;$<Fg;$++){let oe=new et(l,c);oe.visible=!1,e.add(oe),u.push(oe)}let f=new Xl(1.35,9);f.rotateX(-Math.PI/2);let p=new $l(1.35,1.6,9);p.rotateX(-Math.PI/2);let g=new zt({color:460299,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),x=new zt({color:10112511,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),m=[];for(let $=0;$<zg;$++){let oe=new et(f,g);oe.add(new et(p,x)),oe.visible=!1,oe.rotation.order="YXZ",e.add(oe),m.push(oe)}let d=(()=>{let $=new Qt(.11,.11,.8,6);return $.rotateX(Math.PI/2),Ro($)})(),b=(()=>{let $=new $n(.11,.34,6);return $.rotateX(Math.PI/2),$.translate(0,0,.57),Ro($)})(),M=(()=>{let $=new dn(.5,.03,.22);return $.translate(0,0,-.32),$})(),y=new ot({color:15921906,roughness:.4,flatShading:!0}),T=new ot({color:14885934,roughness:.4,flatShading:!0}),E=new zt({color:16756800}),v=(()=>{let $=new $n(.09,.5,5);return $.rotateX(-Math.PI/2),$.translate(0,0,-.65),$})(),w=[];for(let $=0;$<kg;$++){let oe=new lt,ie=new et(M,T);ie.rotation.z=Math.PI/2,oe.add(new et(d,y),new et(b,T),new et(M,T),ie,new et(v,E)),oe.visible=!1,oe.rotation.order="YXZ",e.add(oe),w.push(oe)}let _=Ro(new Zn(1,1)),S=new zt({color:5953791,transparent:!0,opacity:.16,blending:Ui,depthWrite:!1,side:Nt}),R=new Oi({color:12579583,transparent:!0,opacity:.55,depthWrite:!1}),D=new Yl(_),O=new Map;function I($){let oe=O.get($);return oe||(oe=new lt,oe.add(new et(_,S),new rs(D,R)),oe.position.set(0,.75,.1),oe.scale.set(.8,.85,1.25),oe.name="shield",$.add(oe),O.set($,oe)),oe}function k($,oe,ie,ye,Se,U,X){ie.boxesAround(Se,i);for(let W=0;W<Bg;W++){let Y=a[W],z=i[W];if(Y.g.visible=!!z,!z)continue;At(ye,z.s,z.d,t);let G=Y.phase+z.key%7;Y.g.position.set(t.x,t.y+1.3+Math.sin(oe*2.4+G)*.12,t.z),Y.crystal.rotation.y=oe*2.2+G;let de=Math.min(2.6,Math.max(1,(z.s-Se)/55));Y.crystal.scale.setScalar(de),Y.ring.scale.setScalar(de),Y.beam.scale.set(de,1,de),Y.beam.material.opacity=.2+.3*Math.min(1,(z.s-Se)/120),Y.ring.rotation.set(Math.PI/2+Math.sin(oe*1.3+G)*.5,oe*1.1+G,0)}ie.shardsAround(Se,h);for(let W=0;W<Fg;W++){let Y=u[W],z=h[W];Y.visible=!!z,z&&(At(ye,z.s,z.d,t),Y.position.set(t.x,t.y+.8+Math.sin(oe*3+z.key)*.08,t.z),Y.rotation.y=oe*3+z.key,Y.scale.setScalar(Math.min(2.4,Math.max(1,(z.s-Se)/45))))}for(let W=0;W<zg;W++){let Y=m[W],z=ie.hazards[W];Y.visible=!!z,z&&(At(ye,z.s,z.d,t),Y.position.set(t.x,t.y+.04,t.z),Y.rotation.set(-Math.atan(t.slope||0),t.heading,0),Y.scale.setScalar(Math.min(1,(40-z.t)*4+.15)))}for(let W=0;W<kg;W++){let Y=w[W],z=ie.rockets[W];if(Y.visible=!!z,!z)continue;At(ye,z.s,z.d,t),Y.position.set(t.x,t.y+.7,t.z),Y.rotation.set(-Math.atan(t.slope||0),t.heading,oe*9);let G=Math.sin(t.heading),de=Math.cos(t.heading);X?.emit("boost",t.x-G*.9,t.y+.7,t.z-de*.9,G*z.v*.6,.2,de*z.v*.6,1),X?.emit("smoke",t.x-G*1.2,t.y+.7,t.z-de*1.2,G*z.v*.3,.6,de*z.v*.3,1)}for(let W of U){let Y=(W.rider.shieldT||0)>0;if(!Y&&!O.has(W.model.group))continue;let z=I(W.model.group);z.visible=Y,Y&&(z.rotation.y=oe*1.6,z.children[0].visible=W.rider.shieldT>2||Math.sin(oe*22)>0)}}function q(){e.visible=!1}function Q(){e.visible=!0}function V(){O.clear()}return{group:e,update:k,hide:q,show:Q,reset:V}}var Gg="polygon-rush-v3-records",CT=new Set(["rally","rain"]);function Wg(){try{let n=globalThis.localStorage?.getItem(Gg),e=n?JSON.parse(n):null;if(e&&typeof e=="object")return{splits:e.splits||{},total:e.total??null,runs:e.runs||0,finishes:e.finishes||0}}catch{}return{splits:{},total:null,runs:0,finishes:0}}function Yc(n){try{return globalThis.localStorage?.setItem(Gg,JSON.stringify(n)),!0}catch{return!1}}function id(n){if(!Number.isFinite(n))return"\u2013";let e=Math.floor(n/60),t=n-e*60;return`${e}'${String(Math.floor(t)).padStart(2,"0")}"${Math.floor(t*10%10)}`}function Xg(n){let e=Math.abs(n);return`${n<0?"\u2212":"+"}${e>=60?id(e):e.toFixed(1).replace(".",'"')}`}function qg(n,e,t){let i=n.splits[e]??null,s=i===null||t<i;return s&&(n.splits[e]=Math.round(t*1e3)/1e3),{time:t,best:i,delta:i===null?null:t-i,record:s}}function Yg(n,e){let t=n.total,i=t===null||e<t;return i&&(n.total=Math.round(e*1e3)/1e3),{time:e,best:t,delta:t===null?null:e-t,record:i}}var $g=CT;function Zg(n=document.body){let e=document.createElement("div");e.style.cssText="position:fixed;left:50%;top:13vmin;transform:translateX(-50%);display:none;gap:1.2vmin;z-index:35;font-family:Arial,Helvetica,sans-serif;pointer-events:auto;align-items:stretch";let t=document.createElement("div");t.style.cssText="position:fixed;left:50%;top:11.6vmin;transform:translateX(-50%);width:54vmin;height:0.7vmin;display:none;background:rgba(255,255,255,.18);z-index:35;border-radius:1vmin;overflow:hidden";let i=document.createElement("div");i.style.cssText="height:100%;width:100%;background:#ffd23f;transform-origin:left center",t.appendChild(i),n.append(t,e);let s=[],r=null,o=0,a=0;function l(){e.style.display="none",t.style.display="none",s=[],r=null}function c(f){if(!s.length)return!1;let p=s[Math.max(0,Math.min(s.length-1,f))],g=r;return l(),g?.(p),!0}function u(f,p,g=9){l(),f.length&&(s=f.slice(0,3),r=p,o=a=g,e.textContent="",s.forEach((x,m)=>{let d=document.createElement("button");d.type="button",d.style.cssText=`all:unset;cursor:pointer;width:27vmin;padding:1.1vmin 1.4vmin;border-radius:1vmin;color:#fff;background:rgba(12,18,34,.82);border:0.3vmin solid ${m===0?"#ffd23f":"rgba(255,255,255,.28)"};box-sizing:border-box`;let b=M=>String(M).replace(/[&<>]/g,y=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[y]);d.innerHTML=`<div style="font:bold 2.1vmin Arial;display:flex;gap:1vmin;align-items:center"><span style="background:#ffd23f;color:#111;border-radius:.6vmin;padding:.1vmin .9vmin">${m+1}</span><span>${b(x.icon||"")} ${b(x.name)}</span></div><div style="font:1.55vmin Arial;color:#8ef0a8;margin-top:.7vmin">\u25B2 ${b(x.pro)}</div><div style="font:1.55vmin Arial;color:#ff9a8a;margin-top:.3vmin">\u25BC ${b(x.con)}</div>`,d.addEventListener("click",()=>c(m)),e.appendChild(d)}),e.style.display="flex",t.style.display="block")}function h(f){s.length&&(o-=f,i.style.transform=`scaleX(${Math.max(0,o/a)})`,o<=0&&c(0))}return{show:u,pick:c,update:h,hide:l,get active(){return s.length>0},dispose(){e.remove(),t.remove()}}}var $c=class extends cs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ud(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new Ed(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Bs.extractUrlBase(e);o=Bs.resolveURL(c,this.path)}else o=Bs.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ua(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ex){try{o[_t.KHR_BINARY_GLTF]=new wd(e)}catch(h){s&&s(h);return}r=JSON.parse(o[_t.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Ld(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case _t.KHR_MATERIALS_UNLIT:o[h]=new ld;break;case _t.KHR_DRACO_MESH_COMPRESSION:o[h]=new Td(r,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:o[h]=new Ad;break;case _t.KHR_MESH_QUANTIZATION:o[h]=new Rd;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function IT(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ad=class{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Le(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],An);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Fi(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new tc(u),c.distance=h;break;case"spot":c=new mo(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,hs(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},ld=class{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return zt}extendParams(e,t,i){let s=[];e.color=new Le(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],An),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(s)}},cd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},ud=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(a,a)}return Promise.all(r)}},hd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},fd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},dd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],An)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ft)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},pd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},md=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(a[0],a[1],a[2],An),Promise.all(r)}},gd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},xd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(a[0],a[1],a[2],An),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Ft)),Promise.all(r)}},vd=class{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},yd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},_d=class{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Md=class{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},bd=class{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Sd=class{constructor(e){this.name=_t.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}},Ed=class{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==pi.TRIANGLES&&c.mode!==pi.TRIANGLE_STRIP&&c.mode!==pi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(let g of h){let x=new je,m=new H,d=new an,b=new H(1,1,1),M=new Tn(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,y),l.SCALE&&b.fromBufferAttribute(l.SCALE,y),M.setMatrixAt(y,x.compose(m,d,b));for(let y in l)if(y==="_COLOR_0"){let T=l[y];M.instanceColor=new hr(T.array,T.itemSize,T.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);Wt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},ex="glTF",Aa=12,Kg={JSON:1313821514,BIN:5130562},wd=class{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Aa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ex)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Aa,r=new DataView(e,Aa),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Kg.JSON){let c=new Uint8Array(e,Aa+o,a);this.content=i.decode(c)}else if(l===Kg.BIN){let c=Aa+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Td=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Id[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Id[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],p=Co[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(p){for(let g in p.attributes){let x=p.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(p)},a,c,An,f)})})}},Ad=class{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Rd=class{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}},Zc=class extends Us{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,p=f*h,g=e*c,x=g-c,m=-2*p+3*f,d=p-f,b=1-m,M=d-f+h;for(let y=0;y!==a;y++){let T=o[x+y+a],E=o[x+y+l]*u,v=o[g+y+a],w=o[g+y]*u;r[y]=b*T+M*E+m*v+d*w}return r}},PT=new an,Cd=class extends Zc{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return PT.fromArray(r).normalize().toArray(r),r}},pi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Co={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jg={9728:Jt,9729:zn,9984:cf,9985:Jo,9986:Xr,9987:oi},Jg={33071:ns,33648:na,10497:Dn},sd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Id={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ys={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},LT={CUBICSPLINE:void 0,LINEAR:no,STEP:to},rd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function DT(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new ot({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ni})),n.DefaultMaterial}function vr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function hs(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function NT(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(i){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function UT(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function OT(n){let e,t=n.extensions&&n.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+od(t.attributes):e=n.indices+":"+od(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+od(n.targets[i]);return e}function od(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Pd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function FT(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var BT=new je,Ld=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new IT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new ec(this.options.manager):this.textureLoader=new nc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ua(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return vr(r,a,s),hs(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(Bs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=sd[s.type],a=Co[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new yt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=sd[s.type],c=Co[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(p&&p!==h){let d=Math.floor(f/p),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,M=t.cache.get(b);M||(x=new c(a,d*p,s.count*p/u),M=new co(x,p/u),t.cache.add(b,M)),m=new ur(M,l,f%p/u,g)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new yt(x,l,g);if(s.sparse!==void 0){let d=sd.SCALAR,b=Co[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,T=new b(o[1],M,s.sparse.count*d),E=new c(o[2],y,s.sparse.count*l);a!==null&&(m=new yt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let v=0,w=T.length;v<w;v++){let _=T[v];if(m.setX(_,E[v*l]),l>=2&&m.setY(_,E[v*l+1]),l>=3&&m.setZ(_,E[v*l+2]),l>=4&&m.setW(_,E[v*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=jg[f.magFilter]||zn,u.minFilter=jg[f.minFilter]||oi,u.wrapS=Jg[f.wrapS]||Dn,u.wrapT=Jg[f.wrapT]||Dn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Jt&&u.minFilter!==zn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new fn(x);m.needsUpdate=!0,f(m)}),t.load(Bs.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),hs(h,o),h.userData.mimeType=o.mimeType||FT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[_t.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new fr,wn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Oi,wn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return ot}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[_t.KHR_MATERIALS_UNLIT]){let h=s[_t.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],An),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ft)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Nt);let u=r.alphaMode||rd.OPAQUE;if(u===rd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===rd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==zt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ke(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==zt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==zt){let h=r.emissiveFactor;a.emissive=new Le().setRGB(h[0],h[1],h[2],An)}return r.emissiveTexture!==void 0&&o!==zt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),hs(h,r),t.associations.set(h,{materials:e}),r.extensions&&vr(s,h,r),h})}createUniqueName(e){let t=Gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Qg(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=OT(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Qg(new ht,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?DT(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let x=u[p],m=o[p],d,b=c[p];if(m.mode===pi.TRIANGLES||m.mode===pi.TRIANGLE_STRIP||m.mode===pi.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new kl(x,b):new et(x,b),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===pi.TRIANGLE_STRIP?d.geometry=zf(d.geometry,lc):m.mode===pi.TRIANGLE_FAN&&(d.geometry=zf(d.geometry,pa));else if(m.mode===pi.LINES)d=new rs(x,b);else if(m.mode===pi.LINE_STRIP)d=new ho(x,b);else if(m.mode===pi.LINE_LOOP)d=new Wl(x,b);else if(m.mode===pi.POINTS)d=new Ds(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&UT(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),hs(d,r),m.extensions&&vr(s,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&vr(s,h[0],r),h[0];let f=new lt;r.extensions&&vr(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new jt(km.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Ps(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),hs(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new je;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Hl(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let p=s.channels[h],g=s.samplers[p.sampler],x=p.target,m=x.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,b=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",b)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],p=h[1],g=h[2],x=h[3],m=h[4],d=[];for(let b=0,M=f.length;b<M;b++){let y=f[b],T=p[b],E=g[b],v=x[b],w=m[b];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let _=i._createAnimationTracks(y,T,E,v,w);if(_)for(let S=0;S<_.length;S++)d.push(_[S])}return new Ql(r,void 0,d)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,BT)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new la:c.length>1?u=new lt:c.length===1?u=c[0]:u=new Wt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),hs(u,r),r.extensions&&vr(i,u,r),r.matrix!==void 0){let h=new je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new lt;i.name&&(r.name=s.createUniqueName(i.name)),hs(r,i),i.extensions&&vr(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,p]of s.associations)(f instanceof wn||f instanceof fn)&&h.set(f,p);return u.traverse(f=>{let p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Ys[r.path]===Ys.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Ys[r.path]){case Ys.weights:c=os;break;case Ys.rotation:c=as;break;case Ys.position:case Ys.scale:c=ls;break;default:i.itemSize===1?c=os:c=ls;break}let u=s.interpolation!==void 0?LT[s.interpolation]:no,h=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){let g=new c(l[f]+"."+Ys[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Pd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof as?Cd:Zc;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function zT(n,e,t){let i=e.attributes,s=new ai;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){let u=Pd(Co[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new H,l=new H;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let x=Pd(Co[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new Yn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Qg(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=Id[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return vt.workingColorSpace!==An&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${vt.workingColorSpace}" not supported.`),hs(n,e),zT(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?NT(n,e.targets,t):n})}var $s={hi:null,lo:null},kT=["body","frame","bubble","headlight","tail","wheelRear","wheelFront","fork","torso","helmet","armR","armL"],HT=[["legR","legL"],["thighR","thighL","shinR","shinL"]];async function Dd(n,e){let t=await n.loadAsync(e),i={},s={};for(let a of t.scene.children)a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.set(1,1,1),i[a.name]=a,a.traverse(l=>{l.isMesh&&l.material?.name&&(s[l.material.name]=l.material)});let r=kT.filter(a=>!i[a]);if(HT.some(a=>a.every(l=>i[l]))||r.push("jambes"),r.length)throw new Error(e+" incomplet : "+r.join(", "));let o=0;return i.armR.traverse(a=>{a.isMesh&&(a.geometry.computeBoundingBox(),o=Math.max(o,a.geometry.boundingBox.max.z))}),{parts:i,mats:s,armLength:o>.1?o/1.01:1}}async function tx(n="assets/"){if($s.lo)return $s;let e=new $c,t=()=>Dd(e,n+"bike_low.glb");return $s.lo=await Dd(e,n+"bike_mid.glb").catch(t),$s.hi=await Dd(e,n+"bike_hi.glb").catch(()=>$s.lo),$s}function nx(n="lo"){return $s[n]||$s.lo}var en=0,xn=1,ds=2,Ia=.32,Ca=-.7,cx=.7,fs=[0,-Ia,-Ca],ux=[0,-Ia,-cx],ix=.58,VT=.4,Zs=Math.PI*2,ii=class{constructor(e){this.off=e||[0,0,0],this.pos=[],this.groups=[],this.slot=-1,this.gStart=0}setSlot(e){e!==this.slot&&(this.closeGroup(),this.slot=e)}closeGroup(){let e=this.pos.length/3;this.slot>=0&&e>this.gStart&&this.groups.push({start:this.gStart,count:e-this.gStart,materialIndex:this.slot}),this.gStart=e}tri(e,t,i,s){let r=this.off,o=e[0]+r[0],a=e[1]+r[1],l=e[2]+r[2],c=t[0]+r[0],u=t[1]+r[1],h=t[2]+r[2],f=i[0]+r[0],p=i[1]+r[1],g=i[2]+r[2],x=c-o,m=u-a,d=h-l,b=f-o,M=p-a,y=g-l,T=m*y-d*M,E=d*b-x*y,v=x*M-m*b,w=(o+c+f)/3-(s[0]+r[0]),_=(a+u+p)/3-(s[1]+r[1]),S=(l+h+g)/3-(s[2]+r[2]),R=this.pos;T*w+E*_+v*S>=0?R.push(o,a,l,c,u,h,f,p,g):R.push(o,a,l,f,p,g,c,u,h)}quad(e,t,i,s,r){this.tri(e,t,i,r),this.tri(e,i,s,r)}build(){this.closeGroup();let e=new ht;e.setAttribute("position",new rt(this.pos,3)),e.computeVertexNormals();for(let t of this.groups)e.addGroup(t.start,t.count,t.materialIndex);return e}};function GT(n){let e=0,t=0,i=0;for(let r of n)e+=r[0],t+=r[1],i+=r[2];let s=n.length;return[e/s,t/s,i/s]}function WT(n,e){return[(n[0]+e[0])/2,(n[1]+e[1])/2,(n[2]+e[2])/2]}function sx(n,e,t,i){let s=e.length;for(let r=0;r<s;r++)n.tri(t,e[r],e[(r+1)%s],i)}function Ks(n,e,t,i,s){let r=typeof t=="function"?t:()=>t,o=e.length,a=e[0].length,l=e.map(GT);for(let c=0;c<o-1;c++){let u=e[c],h=e[c+1],f=WT(l[c],l[c+1]);for(let p=0;p<a;p++){let g=(p+1)%a;n.setSlot(r(c,p)),n.quad(u[p],u[g],h[g],h[p],f)}}n.setSlot(i),sx(n,e[0],l[0],l[1]),n.setSlot(s),sx(n,e[o-1],l[o-1],l[o-2])}function ni(n,e,t,i,s,r,o){let a=t[0]-e[0],l=t[1]-e[1],c=t[2]-e[2],u=Math.hypot(a,l,c)||1,h=[a/u,l/u,c/u],f=Math.abs(h[1])<.9?[0,1,0]:[1,0,0],p=[h[1]*f[2]-h[2]*f[1],h[2]*f[0]-h[0]*f[2],h[0]*f[1]-h[1]*f[0]],g=Math.hypot(p[0],p[1],p[2]);p=[p[0]/g,p[1]/g,p[2]/g];let x=[p[1]*h[2]-p[2]*h[1],p[2]*h[0]-p[0]*h[2],p[0]*h[1]-p[1]*h[0]],m=(d,b)=>{let M=[];for(let y=0;y<r;y++){let T=Zs*y/r,E=Math.cos(T)*b,v=Math.sin(T)*b;M.push([d[0]+E*p[0]+v*x[0],d[1]+E*p[1]+v*x[1],d[2]+E*p[2]+v*x[2]])}return M};Ks(n,[m(e,i),m(t,s)],o,o,o)}function _r(n,e,t,i){n.setSlot(i);let s=(a,l,c)=>[e[0]+a*t[0],e[1]+l*t[1],e[2]+c*t[2]],r=[s(-1,-1,-1),s(1,-1,-1),s(1,1,-1),s(-1,1,-1),s(-1,-1,1),s(1,-1,1),s(1,1,1),s(-1,1,1)],o=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]];for(let a of o)n.tri(r[a[0]],r[a[1]],r[a[2]],e),n.tri(r[a[0]],r[a[2]],r[a[3]],e)}var jc=3,Pa=4;function XT(n,e,t,i,s,r,o,a,l){return[[0,e,n],[o,t,n],[a,i,n],[l,s,n],[0,r,n],[-l,s,n],[-a,i,n],[-o,t,n]]}function qT(){let n=new ii(fs),t=[[1.02,.76,.755,.74,.72,.71,.02,.03,.02],[.9,.84,.81,.75,.7,.68,.07,.12,.08],[.7,.93,.87,.76,.7,.68,.1,.19,.13],[.45,.97,.9,.68,.58,.56,.12,.23,.16],[.3,.98,.92,.62,.36,.26,.13,.23,.17],[.05,1,.94,.62,.3,.19,.14,.21,.16],[-.2,.99,.93,.66,.32,.21,.13,.19,.13],[-.35,.85,.82,.68,.42,.34,.11,.15,.1],[-.5,.8,.79,.72,.64,.62,.1,.13,.08],[-.75,.9,.87,.8,.72,.7,.09,.12,.07],[-.98,.99,.96,.92,.88,.87,.05,.07,.04],[-1.1,1.02,1.01,1,.99,.985,.01,.015,.01]].map(i=>XT(...i));Ks(n,t,(i,s)=>{let r=s===0||s===7,o=s===1||s===6,a=s===2||s===5;return r?i===7||i===8?xn:en:o?i>=9?jc:en:a?i>=2&&i<=5?jc:i>=7&&i<=8?xn:en:i>=3&&i<=6?ds:xn},en,en);for(let i of[-1,1])ni(n,[.11*i,.46,-.26],[.1*i,.32,-.7],.04,.03,5,Pa),ni(n,[.14*i,.44,-.3],[.22*i,.42,-.32],.018,.018,4,xn),ni(n,[.1*i,.95,.42],[.27*i,.93,.35],.02,.02,4,xn);return ni(n,[.15,.22,.1],[.17,.3,-.45],.04,.04,5,Pa),ni(n,[.17,.3,-.45],[.2,.52,-.92],.05,.065,6,Pa),ni(n,[.2,.52,-.92],[.205,.535,-.95],.065,.05,6,xn),_r(n,[0,.685,-.74],[.06,.012,.16],xn),n.build()}function YT(){let n=new ii(fs),e=(t,i,s,r)=>[[0,i,t],[r,s,t],[0,s-.02,t],[-r,s,t]];return Ks(n,[e(.76,.925,.91,.07),e(.58,1.06,.94,.12),e(.42,1.13,.97,.11)],en,en,en),n.build()}function $T(){let n=new ii(fs);return _r(n,[0,.985,-1.085],[.04,.02,.014],en),n.build()}function ZT(){let n=new ii;return ni(n,[0,0,0],[0,0,-.45],.05,.004,6,en),n.build()}function KT(){let n=new ii(fs);for(let e of[-1,1]){let t=[.062*e,.795,.905];n.setSlot(en);let i=[[t[0]-.035,t[1]-.012,t[2]+.012],[t[0]+.035,t[1]+.004*e,t[2]-.02],[t[0]+.03,t[1]+.022,t[2]-.03],[t[0]-.03,t[1]+.02,t[2]-.004]];n.quad(i[0],i[1],i[2],i[3],[t[0],t[1],t[2]-.2])}return n.build()}function jT(){let n=new ii(ux);for(let i of[-1,1])ni(n,[.085*i,.32,.7],[.085*i,.56,.615],.032,.032,5,xn),ni(n,[.085*i,.56,.615],[.085*i,.88,.5],.024,.024,5,ds),_r(n,[.1*i,.33,.74],[.012,.05,.035],Pa);let e=.34,t=[];for(let i of[-.75,-.25,.3,.85,1.25]){let s=.32+Math.cos(i),r=.7+Math.sin(i),o=(a,l)=>[a,.32+l*Math.cos(i),.7+l*Math.sin(i)];t.push([o(-.075,e-.005),o(-.04,e+.03),o(.04,e+.03),o(.075,e-.005)])}return Ks(n,t,en,en,en),n.build()}function rx(n,e){let t=new ii,i=14,s=(o,a)=>{let l=[];for(let c=0;c<i;c++){let u=Zs*c/i;l.push([o,a*Math.cos(u),a*Math.sin(u)])}return l};Ks(t,[[-.62,.215],[-1,.27],[-.8,.305],[0,.32],[.8,.305],[1,.27],[.62,.215]].map(([o,a])=>s(o*n,a)),xn,xn,xn);for(let o of[-1,1]){let a=o*(.62*n+.004),l=[a,0,0],c=[0,0,0],u=10;for(let h=0;h<u;h++){let f=Zs*h/u,p=Zs*(h+1)/u;t.setSlot(h%2?xn:ds),t.tri(l,[a,.215*Math.cos(f),.215*Math.sin(f)],[a,.215*Math.cos(p),.215*Math.sin(p)],c)}if(e){let h=o*(.62*n+.012);t.setSlot(Pa);for(let f=0;f<u;f++){let p=Zs*f/u,g=Zs*(f+1)/u;t.quad([h,.09*Math.cos(p),.09*Math.sin(p)],[h,.16*Math.cos(p),.16*Math.sin(p)],[h,.16*Math.cos(g),.16*Math.sin(g)],[h,.09*Math.cos(g),.09*Math.sin(g)],c)}}}return t.build()}function JT(){let n=new ii,e=[0,.11,.015],t=[.125,.135,.155],i=10,s=6,r=[];for(let o=1;o<s;o++){let a=-Math.PI/2+Math.PI*o/s,l=Math.cos(a),c=[];for(let u=0;u<i;u++){let h=Zs*(u+.5)/i;c.push([e[0]+t[0]*l*Math.cos(h),e[1]+t[1]*Math.sin(a),e[2]+t[2]*l*Math.sin(h)])}r.push(c)}return Ks(n,r,(o,a)=>{let l=Zs*(a+1)/i;return Math.sin(l)>.45&&(o===1||o===2)?xn:Math.abs(Math.cos(l))<.35?ds:en},xn,en),n.build()}function Ra(n,e,t,i){return[[e,n,0],[e*.55,n,t],[-e*.55,n,t],[-e,n,0],[-e*.55,n,-i],[e*.55,n,-i]]}function QT(){let n=new ii,e=[Ra(-.08,.13,.09,.1),Ra(.04,.145,.1,.1),Ra(.22,.185,.11,.11),Ra(.38,.205,.1,.1),Ra(.45,.09,.06,.07)];return Ks(n,e,(t,i)=>t===0?ds:t===2&&(i===0||i===2||i===3||i===5)?jc:en,xn,xn),Ks(n,[[[.07,.4,-.08],[0,.42,-.06],[-.07,.4,-.08],[0,.39,-.13]],[[.06,.28,-.11],[0,.29,-.09],[-.06,.28,-.11],[0,.27,-.19]],[[.03,.14,-.1],[0,.14,-.09],[-.03,.14,-.1],[0,.14,-.13]]],ds,ds,ds),n.build()}function ox(n){let e=new ii,t=[.09*n,-.09,.5];return ni(e,[0,0,0],t,.058,.048,5,en),ni(e,t,[0,0,.93],.046,.038,5,en),_r(e,[0,0,.97],[.042,.04,.05],xn),_r(e,[0,.015,.02],[.052,.04,.05],jc),e.build()}function ax(n){let e=new ii,t=[.11*n,-.19,.42],i=[.085*n,-.47,.05];return ni(e,[0,0,0],t,.082,.066,6,en),ni(e,t,i,.062,.05,5,en),_r(e,[t[0]+.035*n,t[1]-.02,t[2]+.02],[.025,.05,.045],ds),_r(e,[i[0],i[1]-.04,i[2]+.04],[.045,.05,.115],xn),e.build()}var Nd=null;function eA(){return Nd||(Nd={body:qT(),bubble:YT(),tail:$T(),flame:ZT(),fork:jT(),headlight:KT(),wheelRear:rx(.1,!1),wheelFront:rx(.068,!0),helmet:JT(),torso:QT(),armR:ox(-1),armL:ox(1),legR:ax(-1),legL:ax(1)}),Nd}var gi=(n,e,t)=>n<e?e:n>t?t:n,hx=n=>gi(n,0,1),yr=n=>Number.isFinite(n)?n:0,Kc=n=>typeof n=="boolean"?n?1:0:hx(yr(n));function mi(n,e){return n.name=e,n}function lx(n,e,t,i){let s=new et(n,e);return s.name=t,s.castShadow=i,s.receiveShadow=!1,s}function fx({color:n=14034984,accent:e=16761395,isPlayer:t=!1,detail:i="lo"}={}){let s=eA(),r=F=>new ot({flatShading:!0,side:Nt,...F}),o=r({color:new Le(n),metalness:.35,roughness:.3}),a=r({color:1382173,metalness:.2,roughness:.7}),l=r({color:new Le(e),metalness:.45,roughness:.35}),c=r({color:15856108,metalness:.15,roughness:.45}),u=r({color:11120312,metalness:.9,roughness:.32}),h=[o,a,l,c,u],f=r({color:792614,metalness:.6,roughness:.08,transparent:!0,opacity:.55,depthWrite:!1}),p=r({color:16777215,emissive:16774358,emissiveIntensity:2.4}),g=r({color:3342336,emissive:16718362,emissiveIntensity:.8}),x=nx(i),m=null;if(x){let F=(C,J)=>{let B=x.mats[C].clone();return B.color.set(J),B};m={Paint:F("Paint",n),Suit:F("Suit",n),Accent:F("Accent",e),Tail:x.mats.Tail.clone()}}function d(F,C,J,B,ne){if(!x)return lx(C,J,F,B);let K=x.parts[F].clone(!0);return K.name=F,ne&&K.position.set(ne[0],ne[1],ne[2]),K.traverse(he=>{he.isMesh&&(he.material.name==="Number"&&!t&&(he.visible=!1),he.material=m[he.material.name]||he.material,he.castShadow=B)}),K}let b=r({color:0,emissive:8382975,emissiveIntensity:1.5,transparent:!0,opacity:.85,depthWrite:!1}),M=mi(new lt,"bike"),y=mi(new lt,"leanPivot"),T=mi(new lt,"pitchPivot");T.position.set(0,Ia,Ca);let E=mi(new lt,"rearWheel");E.add(d("wheelRear",s.wheelRear,h,!0));let v=mi(new lt,"chassis"),w=d("body",s.body,h,!0,fs),_=d("bubble",s.bubble,f,!1,fs),S=d("tail",s.tail,g,!1,fs),R=d("headlight",s.headlight,p,!1,fs),D=lx(s.flame,b,"flame",!1);D.position.set(-.187,.435,-.02),D.rotation.x=-.42,D.scale.z=.02,D.visible=!1;let O=mi(new lt,"hips");O.position.set(0,ix,VT);let I=mi(new lt,"torso"),k=mi(new lt,"head");k.position.set(0,.45,.01),k.add(d("helmet",s.helmet,h,!0)),I.add(d("torso",s.torso,h,!0),k);let q=d("armR",s.armR,h,!0),Q=d("armL",s.armL,h,!0),V=mi(new lt,"legR");V.position.set(-.12,-.02,0);let $=!!(x&&x.parts.thighR&&x.parts.shinR&&x.parts.thighL&&x.parts.shinL);$||V.add(d("legR",s.legR,h,!0));let oe=mi(new lt,"legL");oe.position.set(.12,-.02,0),$||oe.add(d("legL",s.legL,h,!0));let ie=!!(x&&x.parts.forearmR&&x.parts.forearmL),ye=ie?d("forearmR",null,null,!0):null,Se=ie?d("forearmL",null,null,!0):null;O.add(I,q,Q,V,oe),ie&&O.add(ye,Se);let U=$?d("thighR",null,null,!0):null,X=$?d("shinR",null,null,!0):null,W=$?d("thighL",null,null,!0):null,Y=$?d("shinL",null,null,!0):null;$&&O.add(U,X,W,Y),x&&x.parts.pelvis&&O.add(d("pelvis",null,null,!0)),v.add(w,_,S,R,D,O),x&&v.add(d("frame",null,null,!0,fs));let z=mi(new lt,"steerPivot");z.position.set(0,0,cx-Ca);let G=d("fork",s.fork,h,!0,ux),de=mi(new lt,"frontWheel");if(de.add(d("wheelFront",s.wheelFront,h,!0)),z.add(G,de),T.add(E,v,z),y.add(T),M.add(y),t){let F=new mo(16773590,60,60,.5,.6,2);F.name="headSpot",F.castShadow=!1,F.position.set(0,1,.9),F.target.position.set(0,.2,30),F.target.name="headSpotTarget",M.add(F,F.target)}let xe={lean:0,steer:0,pitch:0,compress:0,sr:0,brake:0,air:0,drift:0,boost:0},Ne=.2,He=.37,Z=.02,ae=[.25,.9-Ia,.34-Ca],Ee=new H,we=new H,Te=new H,De=new H,me=new H,P=new H(0,0,1),A=.3,ee=.31;function le(F,C,J){Ee.set(Ne*J,He,Z).applyEuler(I.rotation),we.set(ae[0]*J-O.position.x,ae[1]-O.position.y,ae[2]-O.position.z);let B=Math.cos(-O.rotation.z),ne=Math.sin(-O.rotation.z),K=we.x*B-we.y*ne,he=we.x*ne+we.y*B;we.x=K,we.y=he,F.position.copy(Ee),Te.copy(we).sub(Ee);let Ce=Te.length()||1;if(Te.multiplyScalar(1/Ce),!C){F.scale.z=Ce/(x?x.armLength:1),F.quaternion.setFromUnitVectors(P,Te);return}let ke=Math.max(1,Ce/(A+ee-.004)),Fe=A*ke,Ie=ee*ke,ce=(Fe*Fe-Ie*Ie+Ce*Ce)/(2*Ce),se=Math.sqrt(Math.max(0,Fe*Fe-ce*ce));De.set(.5*J,-.87,0),De.addScaledVector(Te,-De.dot(Te)).normalize(),me.copy(Ee).addScaledVector(Te,ce).addScaledVector(De,se),F.scale.z=ke,F.quaternion.setFromUnitVectors(P,De.copy(me).sub(Ee).normalize()),C.position.copy(me),C.scale.z=ke,C.quaternion.setFromUnitVectors(P,De.copy(we).sub(me).normalize())}let ge=.47,fe=.44,Oe=.12,Re=[.205,.495-Ia,-.29-Ca],Ue=new H,Xe=new H,Ae=new H,ze=new H,$e=new H,Qe=new je;function N(F,C,J,B,ne){$e.copy(C).normalize(),ze.set(J,B,ne).addScaledVector($e,-(J*$e.x+B*$e.y+ne*$e.z)),ze.lengthSq()<1e-8&&ze.set(0,1,0),ze.normalize(),Ae.crossVectors(ze,$e),F.quaternion.setFromRotationMatrix(Qe.makeBasis(Ae,ze,$e))}function te(F,C,J,B){Ue.set(Oe*J,-.02,0),we.set(Re[0]*J-O.position.x,Re[1]-O.position.y,Re[2]-O.position.z);let ne=Math.cos(-O.rotation.z),K=Math.sin(-O.rotation.z),he=we.x*ne-we.y*K,Ce=we.x*K+we.y*ne;we.x=he,we.y=Ce,Te.copy(we).sub(Ue);let ke=Math.min(Te.length()||1,ge+fe-.004);Te.normalize();let Fe=(ge*ge-fe*fe+ke*ke)/(2*ke),Ie=Math.sqrt(Math.max(0,ge*ge-Fe*Fe));De.set(B*J,.25,1),De.addScaledVector(Te,-De.dot(Te)).normalize(),Xe.copy(Ue).addScaledVector(Te,Fe).addScaledVector(De,Ie),F.position.copy(Ue),N(F,De.copy(Xe).sub(Ue),0,1,0),C.position.copy(Xe),N(C,De.copy(we).sub(Xe),0,.2,1)}function j(F,C){let J=F||{},B=Number.isFinite(C)?gi(C,0,.1):1/60,ne=1-Math.exp(-B*14),K=1-Math.exp(-B*5);xe.lean+=(gi(yr(J.lean),-1.5,1.5)-xe.lean)*ne,xe.steer+=(gi(yr(J.steer),-1,1)-xe.steer)*ne,xe.pitch+=(gi(yr(J.pitch),-.9,.9)-xe.pitch)*ne,xe.compress+=(gi(yr(J.compress),-1,1)-xe.compress)*ne,xe.sr+=(hx(yr(J.speedRatio))-xe.sr)*K,xe.brake+=(Kc(J.braking)-xe.brake)*K,xe.air+=(Kc(J.airborne)-xe.air)*K,xe.drift+=(Kc(J.drift)-xe.drift)*K,xe.boost+=(Kc(J.boost)-xe.boost)*K;let he=xe.lean,Ce=(Number.isFinite(J.speed)?J.speed:xe.sr*80)*3.6;y.rotation.z=he,T.rotation.x=-xe.pitch,z.rotation.y=-.45*xe.steer*gi(1-2*xe.sr,0,1),v.position.y=-.07*xe.compress;let ke=gi((Ce-20)/100,0,1),Fe=ve=>ve*ve*(3-2*ve),Ie=Fe(gi(Math.abs(he)/.52,0,1)),ce=Fe(gi((Math.abs(he)-.17)/.6,0,1)),se=he>=0?1:-1,pe=Ie*(1-gi((Ce-30)/30,0,1));O.position.x=-.17*Ie*se,O.position.y=ix+.1*xe.air,O.rotation.z=-.2*Ie*se,I.rotation.x=gi(.5+.62*ke-.2*xe.brake-.25*xe.air+.08*xe.boost,.2,1.16),I.rotation.z=-.15*Ie*se,I.rotation.y=-.12*Ie*se,k.rotation.x=-.68*ke+.1*xe.air,k.rotation.y=-.35*Ie*se,k.rotation.z=-.4*he;let be=.12*Ie+.5*ce+.3*pe;if(V.rotation.y=se>0?-be:0,oe.rotation.y=se<0?be:0,$){let ve=1.6*ce+.25*Ie+.8*pe;te(U,X,-1,.35+(se<0?ve:0)),te(W,Y,1,.35+(se>0?ve:0))}le(q,ye,-1),le(Q,Se,1),(m?m.Tail:g).emissiveIntensity=(m?2:.8)+(m?6:2.2)*xe.brake,D.visible=xe.boost>.03,D.scale.z=.02+1.3*xe.boost,b.emissiveIntensity=1.5+2*xe.boost;let Pe=yr(J.wheelSpin);E.rotation.x=Pe,de.rotation.x=Pe}return j({},0),{group:M,update:j}}var dx=Math.PI*2,rn=6e3,Io=2200,px=60,mx=30,gx=60,tA=3,La=2e3,Mr=170,Fd=1.5,nA=13,xx=nA-Fd,Ud=120,iA={dust:{life:.9,grav:-1.2,drag:2.2,spread:1.6,lift:[.6,1.8],s0:.35,s1:1.5,a0:.3,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!1},smoke:{life:.8,grav:-.8,drag:1.2,spread:.9,lift:[.5,1.3],s0:.35,s1:1.3,a0:.16,c0:[.89,.9,.92],c1:[.62,.64,.67],add:!1,bounce:!1,ring:!1},spark:{life:.6,grav:18,drag:.25,spread:5.5,lift:[1.5,4.5],s0:.22,s1:.06,a0:1,c0:[1,.88,.4],c1:[1,.48,.1],add:!0,bounce:!0,ring:!1},spray:{life:.6,grav:9,drag:.5,spread:2.2,lift:[1.2,3.2],s0:.25,s1:.9,a0:.22,c0:[.71,.93,.98],c1:[.37,.66,.8],add:!1,bounce:!1,ring:!1},gravel:{life:.7,grav:20,drag:.15,spread:3.2,lift:[1.5,3.5],s0:.08,s1:.06,a0:1,c0:[.29,.26,.22],c1:[.14,.13,.11],add:!1,bounce:!0,ring:!1},boost:{life:.3,grav:-3,drag:3,spread:.8,lift:[0,.5],s0:.55,s1:.12,a0:.9,c0:[.25,.96,1],c1:[1,.25,.78],add:!0,bounce:!1,ring:!1},land:{life:.8,grav:0,drag:4,spread:0,lift:[.4,1],s0:.5,s1:1.8,a0:.32,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!0}},sA=new Le(16777215),rA=new Le(8386303);function Gn(n,e){return n+(e-n)*Math.random()}function Da(n,e,t){return n<e?e:n>t?t:n}function js(n,e=0){return Number.isFinite(n)?n:e}function oA(n){return Number.isFinite(n)?Da(n,0,.1):0}function Od(n,e){return n-e*Math.floor(n/e+.5)}function aA(){let n=globalThis.innerHeight||900,e=Math.min(globalThis.devicePixelRatio||1,2);return n*e}var lA=`
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
}`,cA=`
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
}`,uA=`
attribute float aAlpha;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,hA=`
uniform vec3 uColor;
varying float vAlpha;
void main() {
  gl_FragColor = vec4(uColor, vAlpha);
}`;function vx(n,e){let t=e||{},i=js(t.rain,0),s=js(t.wind,0),r=new Float32Array(rn*3),o=new Float32Array(rn*3),a=new Float32Array(rn*3),l=new Float32Array(rn*3),c=new Float32Array(rn*3),u=new Float32Array(rn),h=new Float32Array(rn),f=new Float32Array(rn),p=new Float32Array(rn),g=new Float32Array(rn),x=new Float32Array(rn),m=new Float32Array(rn),d=new Float32Array(rn),b=new Float32Array(rn),M=new Float32Array(rn),y=new Float32Array(rn),T=new Uint8Array(rn),E=0,v=!1,w=new ht,_=new yt(r,3).setUsage(Bi),S=new yt(c,3).setUsage(Bi),R=new yt(u,1).setUsage(Bi),D=new yt(h,1).setUsage(Bi),O=new yt(f,1).setUsage(Bi);w.setAttribute("position",_),w.setAttribute("aColor",S),w.setAttribute("aSize",R),w.setAttribute("aAlpha",D),w.setAttribute("aMode",O);let I=new bt({uniforms:{uScale:{value:700}},vertexShader:lA,fragmentShader:cA,transparent:!0,depthWrite:!1,blending:fa,blendSrc:tf,blendDst:ta,blendEquation:Bn}),k=new Ds(w,I);k.frustumCulled=!1,n.add(k);function q(N,te,j,F,C,J,B,ne=1){let K=iA[N];if(!K||!Number.isFinite(te)||!Number.isFinite(j)||!Number.isFinite(F))return;let he=js(C),Ce=js(J),ke=js(B),Fe=Math.min(rn,Math.max(0,Math.floor(js(ne,1))));for(let Ie=0;Ie<Fe;Ie++){let ce=E;E=(E+1)%rn;let se,pe,be;if(K.ring){let ve=(Fe>1?Ie/Fe:Math.random())*dx+Math.random()*.2,Ve=Gn(3.5,5.5);se=Math.cos(ve)*Ve+he*.3,be=Math.sin(ve)*Ve+ke*.3,pe=Gn(K.lift[0],K.lift[1])+Ce*.3}else se=he+Gn(-K.spread,K.spread),be=ke+Gn(-K.spread,K.spread),pe=Ce+Gn(K.lift[0],K.lift[1]);let Pe=ce*3;r[Pe]=te+Gn(-.1,.1),r[Pe+1]=j,r[Pe+2]=F+Gn(-.1,.1),o[Pe]=se,o[Pe+1]=pe,o[Pe+2]=be,p[ce]=0,g[ce]=K.life*Gn(.85,1.15),x[ce]=K.drag,m[ce]=K.grav,d[ce]=K.s0*Gn(.85,1.2),b[ce]=K.s1*Gn(.85,1.2),M[ce]=K.a0,y[ce]=j,T[ce]=K.bounce?1:0,f[ce]=K.add?1:0,a[Pe]=K.c0[0],a[Pe+1]=K.c0[1],a[Pe+2]=K.c0[2],l[Pe]=K.c1[0],l[Pe+1]=K.c1[1],l[Pe+2]=K.c1[2]}Fe>0&&(v=!0)}function Q(N){let te=!1;for(let j=0;j<rn;j++){if(g[j]<=0)continue;if(te=!0,p[j]+=N,p[j]>=g[j]){g[j]=0,h[j]=0,u[j]=0;continue}let F=j*3,C=Math.max(0,1-x[j]*N),J=o[F]*C,B=o[F+1]*C-m[j]*N,ne=o[F+2]*C,K=r[F]+J*N,he=r[F+1]+B*N,Ce=r[F+2]+ne*N;T[j]&&he<y[j]&&B<0&&(he=y[j],B=-B*.35,J*=.6,ne*=.6,T[j]=0),o[F]=J,o[F+1]=B,o[F+2]=ne,r[F]=K,r[F+1]=he,r[F+2]=Ce;let ke=p[j]/g[j];u[j]=d[j]+(b[j]-d[j])*ke,h[j]=M[j]*(1-ke*ke),c[F]=a[F]+(l[F]-a[F])*ke,c[F+1]=a[F+1]+(l[F+1]-a[F+1])*ke,c[F+2]=a[F+2]+(l[F+2]-a[F+2])*ke}return te}let V=null;if(i>0){let N=new ht,te=new Float32Array(Io*6),j=new yt(te,3).setUsage(Bi);N.setAttribute("position",j);let F=new Float32Array(Io*3),C=new Float32Array(Io),J=new Float32Array(Io);for(let K=0;K<Io;K++)F[K*3]=(Math.random()-.5)*px,F[K*3+1]=-12+Math.random()*mx,F[K*3+2]=(Math.random()-.5)*gx,C[K]=Gn(22,30),J[K]=Gn(.8,1.2);let B=new Oi({color:12900095,transparent:!0,opacity:.16,depthWrite:!1}),ne=new rs(N,B);ne.frustumCulled=!1,n.add(ne),V={geo:N,mat:B,lines:ne,attr:j,pa:te,head:F,fall:C,len:J,windX:5.5*s,windZ:2*s}}function $(N,te,j){let F=V,C=F.pa,J=F.head,B=F.windX,ne=F.windZ,K=te.x,he=te.y+tA,Ce=te.z;for(let ke=0;ke<Io;ke++){let Fe=ke*3,Ie=K+Od(J[Fe]-K,px),ce=he+Od(J[Fe+1]-he,mx),se=Ce+Od(J[Fe+2]-Ce,gx),pe=F.fall[ke],be=B-j.x,Pe=-pe-j.y,ve=ne-j.z,Ve=.05*F.len[ke],Ge=ke*6;C[Ge]=Ie-be*Ve,C[Ge+1]=ce-Pe*Ve,C[Ge+2]=se-ve*Ve,C[Ge+3]=Ie,C[Ge+4]=ce,C[Ge+5]=se,J[Fe]=Ie+B*N,J[Fe+1]=ce-pe*N,J[Fe+2]=se+ne*N}F.attr.needsUpdate=!0}let oe=new Float32Array(La*4*3),ie=new Float32Array(La*4),ye=new Uint16Array(La*6);for(let N=0;N<La;N++){let te=N*4;ye.set([te,te+1,te+2,te,te+2,te+3],N*6)}let Se=new ht,U=new yt(oe,3).setUsage(Bi),X=new yt(ie,1).setUsage(Bi);Se.setAttribute("position",U),Se.setAttribute("aAlpha",X),Se.setIndex(new yt(ye,1));let W=new bt({uniforms:{uColor:{value:new Le(1315086)}},vertexShader:uA,fragmentShader:hA,transparent:!0,depthWrite:!1,side:Nt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),Y=new et(Se,W);Y.frustumCulled=!1,n.add(Y);let z=0,G=1/0,de=-1;function xe(N,te,j,F,C,J,B=.3,ne=.5){if(![N,te,j,F,C,J,B,ne].every(Number.isFinite))return;let K=F-N,he=J-j,Ce=Math.hypot(K,he);if(Ce<1e-4)return;let ke=B*.5,Fe=-he/Ce*ke,Ie=K/Ce*ke,ce=Da(ne,0,1),se=te+.03,pe=C+.03,be=z*4;z=(z+1)%La;let Pe=oe,ve=be*3;Pe[ve]=N+Fe,Pe[ve+1]=se,Pe[ve+2]=j+Ie,Pe[ve+3]=N-Fe,Pe[ve+4]=se,Pe[ve+5]=j-Ie,Pe[ve+6]=F-Fe,Pe[ve+7]=pe,Pe[ve+8]=J-Ie,Pe[ve+9]=F+Fe,Pe[ve+10]=pe,Pe[ve+11]=J+Ie,ie[be]=ce,ie[be+1]=ce,ie[be+2]=ce,ie[be+3]=ce,be<G&&(G=be),be+3>de&&(de=be+3)}function Ne(){if(de<0)return;let N=G,te=de-G+1;U.clearUpdateRanges(),U.addUpdateRange(N*3,te*3),U.needsUpdate=!0,X.clearUpdateRanges(),X.addUpdateRange(N,te),X.needsUpdate=!0,G=1/0,de=-1}let He=new lt;He.matrixAutoUpdate=!1,n.add(He);let Z=new Float32Array(Mr*6),ae=new yt(Z,3).setUsage(Bi),Ee=new ht;Ee.setAttribute("position",ae);let we=new Float32Array(Mr),Te=new Float32Array(Mr),De=new Float32Array(Mr),me=new Float32Array(Mr);for(let N=0;N<Mr;N++){let te=Math.random()*dx,j=Gn(.8,1.5);we[N]=Math.cos(te)*j,Te[N]=Math.sin(te)*j,De[N]=-Fd-Math.random()*xx,me[N]=Gn(.5,1.2)}let P=new Oi({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),A=new rs(Ee,P);A.frustumCulled=!1,A.visible=!1,He.add(A);let ee=0,le=0,ge=0,fe=0;function Oe(N,te){ge+=(ee-ge)*(1-Math.exp(-6*N)),fe+=(le-fe)*(1-Math.exp(-8*N)),te.updateMatrixWorld(),He.matrix.copy(te.matrixWorld),He.matrixWorld.copy(te.matrixWorld);let j=Da((ge-.55)/.45,0,1),F=Math.min(1,.55*j*j*(3-2*j)+.6*fe),C=Math.floor(F*Mr);if(C<=0){A.visible=!1;return}A.visible=!0,Ee.setDrawRange(0,C*2),P.color.copy(sA).lerp(rA,fe),P.opacity=.05+.24*F;let J=(60+110*F)*N,B=1.5+5*F,ne=Z;for(let K=0;K<C;K++){let he=De[K]+J;he>-Fd&&(he-=xx),De[K]=he;let Ce=-he,ke=we[K]*Ce*.9,Fe=Te[K]*Ce*.5,Ie=B*me[K],ce=K*6;ne[ce]=ke,ne[ce+1]=Fe,ne[ce+2]=he,ne[ce+3]=ke,ne[ce+4]=Fe,ne[ce+5]=he-Ie}ae.needsUpdate=!0}let Re=new H,Ue=new H,Xe=!1,Ae=!1;function ze(N,te){if(Ae)return;N=oA(N);let j=te.position;Xe?N>0&&(Ue.subVectors(j,Re).divideScalar(N),Ue.lengthSq()>Ud*Ud&&Ue.setLength(Ud),Re.copy(j)):(Re.copy(j),Ue.set(0,0,0),Xe=!0);let F=js(te.fov,60);I.uniforms.uScale.value=aA()/(2*Math.tan(F*Math.PI/360)),(Q(N)||v)&&(_.needsUpdate=!0,S.needsUpdate=!0,R.needsUpdate=!0,D.needsUpdate=!0,O.needsUpdate=!0,v=!1),V&&N>0&&$(N,j,Ue),Oe(N,te),Ne()}function $e(N,te){let j=Da(js(N,0),0,1.5);ee=Da((j-.7)/.3,0,1),le=te?1:0}function Qe(){Ae||(Ae=!0,n.remove(k,Y,He),V&&n.remove(V.lines),w.dispose(),I.dispose(),Se.dispose(),W.dispose(),Ee.dispose(),P.dispose(),V&&(V.geo.dispose(),V.mat.dispose()))}return{emit:q,addSkid:xe,setSpeed:$e,update:ze,dispose:Qe}}var Js={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Nn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},fA=new Ps(-1,1,1,-1,0,1),Bd=class extends ht{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}},dA=new Bd,Vi=class{constructor(e){this._mesh=new et(dA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Po=class extends Nn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Rn.clone(e.uniforms),this.material=new bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Vi(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Na=class extends Nn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Jc=class extends Nn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Qc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Ke);this._width=i.width,this._height=i.height,t=new Zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Po(Js),this.copyPass.material.blending=on,this.clock=new ic}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Na!==void 0&&(o instanceof Na?i=!0:o instanceof Jc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var eu=class extends Nn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Le}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var yx={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Lo=class n extends Nn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Ke(e.x,e.y):new Ke(256,256),this.clearColor=new Le(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Zt(r,o,{type:pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Zt(r,o,{type:pn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new Zt(r,o,{type:pn});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=yx;this.highPassUniforms=Rn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ke(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Js;this.copyUniforms=Rn.clone(u.uniforms),this.blendMaterial=new bt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ui,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Le,this.oldClearAlpha=1,this.basic=new zt,this.fsQuad=new Vi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ke(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new bt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ke(.5,.5)},direction:{value:new Ke(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Lo.BlurDirectionX=new Ke(1,0);Lo.BlurDirectionY=new Ke(0,1);var _x={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var tu=class extends Nn{constructor(){super();let e=_x;this.uniforms=Rn.clone(e.uniforms),this.material=new Kl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Vi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},vt.getTransfer(this._outputColorSpace)===Dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===sf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===rf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===of?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===da?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===af?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===lf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ua={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ke},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new je},cameraProjectionMatrixInverse:{value:new je},cameraWorldMatrix:{value:new je},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new H(-1,-1,-1)},sceneBoxMax:{value:new H(1,1,1)}},vertexShader:`

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
		}`},Oa={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},nu={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Mx(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=pA(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new H(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Ls(s,e,e);return r.wrapS=Dn,r.wrapT=Dn,r.needsUpdate=!0,r}function pA(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var Fa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:zd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ke},cameraProjectionMatrixInverse:{value:new je},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function zd(n,e,t){let i=mA(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function mA(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new H(Math.cos(r),Math.sin(r),o))}return i}var iu=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,p=c-h,g=e-f,x=t-p,m,d;g>x?(m=1,d=0):(m=0,d=1);let b=g-m+u,M=x-d+u,y=g-1+2*u,T=x-1+2*u,E=l&255,v=c&255,w=this.perm[E+this.perm[v]]%12,_=this.perm[E+m+this.perm[v+d]]%12,S=this.perm[E+1+this.perm[v+1]]%12,R=.5-g*g-x*x;R<0?i=0:(R*=R,i=R*R*this.dot(this.grad3[w],g,x));let D=.5-b*b-M*M;D<0?s=0:(D*=D,s=D*D*this.dot(this.grad3[_],b,M));let O=.5-y*y-T*T;return O<0?r=0:(O*=O,r=O*O*this.dot(this.grad3[S],y,T)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),f=Math.floor(i+c),p=1/6,g=(u+h+f)*p,x=u-g,m=h-g,d=f-g,b=e-x,M=t-m,y=i-d,T,E,v,w,_,S;b>=M?M>=y?(T=1,E=0,v=0,w=1,_=1,S=0):b>=y?(T=1,E=0,v=0,w=1,_=0,S=1):(T=0,E=0,v=1,w=1,_=0,S=1):M<y?(T=0,E=0,v=1,w=0,_=1,S=1):b<y?(T=0,E=1,v=0,w=0,_=1,S=1):(T=0,E=1,v=0,w=1,_=1,S=0);let R=b-T+p,D=M-E+p,O=y-v+p,I=b-w+2*p,k=M-_+2*p,q=y-S+2*p,Q=b-1+3*p,V=M-1+3*p,$=y-1+3*p,oe=u&255,ie=h&255,ye=f&255,Se=this.perm[oe+this.perm[ie+this.perm[ye]]]%12,U=this.perm[oe+T+this.perm[ie+E+this.perm[ye+v]]]%12,X=this.perm[oe+w+this.perm[ie+_+this.perm[ye+S]]]%12,W=this.perm[oe+1+this.perm[ie+1+this.perm[ye+1]]]%12,Y=.6-b*b-M*M-y*y;Y<0?s=0:(Y*=Y,s=Y*Y*this.dot3(this.grad3[Se],b,M,y));let z=.6-R*R-D*D-O*O;z<0?r=0:(z*=z,r=z*z*this.dot3(this.grad3[U],R,D,O));let G=.6-I*I-k*k-q*q;G<0?o=0:(G*=G,o=G*G*this.dot3(this.grad3[X],I,k,q));let de=.6-Q*Q-V*V-$*$;return de<0?a=0:(de*=de,a=de*de*this.dot3(this.grad3[W],Q,V,$)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,f,p,g,x=(e+t+i+s)*l,m=Math.floor(e+x),d=Math.floor(t+x),b=Math.floor(i+x),M=Math.floor(s+x),y=(m+d+b+M)*c,T=m-y,E=d-y,v=b-y,w=M-y,_=e-T,S=t-E,R=i-v,D=s-w,O=_>S?32:0,I=_>R?16:0,k=S>R?8:0,q=_>D?4:0,Q=S>D?2:0,V=R>D?1:0,$=O+I+k+q+Q+V,oe=o[$][0]>=3?1:0,ie=o[$][1]>=3?1:0,ye=o[$][2]>=3?1:0,Se=o[$][3]>=3?1:0,U=o[$][0]>=2?1:0,X=o[$][1]>=2?1:0,W=o[$][2]>=2?1:0,Y=o[$][3]>=2?1:0,z=o[$][0]>=1?1:0,G=o[$][1]>=1?1:0,de=o[$][2]>=1?1:0,xe=o[$][3]>=1?1:0,Ne=_-oe+c,He=S-ie+c,Z=R-ye+c,ae=D-Se+c,Ee=_-U+2*c,we=S-X+2*c,Te=R-W+2*c,De=D-Y+2*c,me=_-z+3*c,P=S-G+3*c,A=R-de+3*c,ee=D-xe+3*c,le=_-1+4*c,ge=S-1+4*c,fe=R-1+4*c,Oe=D-1+4*c,Re=m&255,Ue=d&255,Xe=b&255,Ae=M&255,ze=a[Re+a[Ue+a[Xe+a[Ae]]]]%32,$e=a[Re+oe+a[Ue+ie+a[Xe+ye+a[Ae+Se]]]]%32,Qe=a[Re+U+a[Ue+X+a[Xe+W+a[Ae+Y]]]]%32,N=a[Re+z+a[Ue+G+a[Xe+de+a[Ae+xe]]]]%32,te=a[Re+1+a[Ue+1+a[Xe+1+a[Ae+1]]]]%32,j=.6-_*_-S*S-R*R-D*D;j<0?u=0:(j*=j,u=j*j*this.dot4(r[ze],_,S,R,D));let F=.6-Ne*Ne-He*He-Z*Z-ae*ae;F<0?h=0:(F*=F,h=F*F*this.dot4(r[$e],Ne,He,Z,ae));let C=.6-Ee*Ee-we*we-Te*Te-De*De;C<0?f=0:(C*=C,f=C*C*this.dot4(r[Qe],Ee,we,Te,De));let J=.6-me*me-P*P-A*A-ee*ee;J<0?p=0:(J*=J,p=J*J*this.dot4(r[N],me,P,A,ee));let B=.6-le*le-ge*ge-fe*fe-Oe*Oe;return B<0?g=0:(B*=B,g=B*B*this.dot4(r[te],le,ge,fe,Oe)),27*(u+h+f+p+g)}};var Ba=class n extends Nn{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Mx(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Zt(this.width,this.height,{type:pn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new bt({defines:Object.assign({},Ua.defines),uniforms:Rn.clone(Ua.uniforms),vertexShader:Ua.vertexShader,fragmentShader:Ua.fragmentShader,blending:on,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new jl,this.normalMaterial.blending=on,this.pdMaterial=new bt({defines:Object.assign({},Fa.defines),uniforms:Rn.clone(Fa.uniforms),vertexShader:Fa.vertexShader,fragmentShader:Fa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new bt({defines:Object.assign({},Oa.defines),uniforms:Rn.clone(Oa.uniforms),vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader,blending:on}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new bt({uniforms:Rn.clone(Js.uniforms),vertexShader:Js.vertexShader,fragmentShader:Js.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:oc,blendDst:go,blendEquation:Bn,blendSrcAlpha:rc,blendDstAlpha:go,blendEquationAlpha:Bn}),this.blendMaterial=new bt({uniforms:Rn.clone(nu.uniforms),vertexShader:nu.vertexShader,fragmentShader:nu.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:fa,blendSrc:oc,blendDst:go,blendEquation:Bn,blendSrcAlpha:rc,blendDstAlpha:go,blendEquationAlpha:Bn}),this.fsQuad=new Vi(null),this.originalClearColor=new Le,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new ao,this.depthTexture.format=Cs,this.depthTexture.type=Rs,this.normalRenderTarget=new Zt(this.width,this.height,{minFilter:Jt,magFilter:Jt,type:pn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=zd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=on,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=on,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=on,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=on,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=on,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new iu,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Ls(s,e,e,kn,Ai);return r.wrapS=Dn,r.wrapT=Dn,r.needsUpdate=!0,r}};Ba.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var bx=58,gA=82,Sx=94,xA=9,vA=20,Ex=4.7,yA=1.95,_A=3,MA=4,bA=5,su=.6;function Qs(n,e,t){return n<e?e:n>t?t:n}function kt(n,e=0){return Number.isFinite(n)?n:e}function SA(n,e,t){return n+(e-n)*t}function Do(n,e){return 1-Math.exp(-n*e)}function EA(n){return Number.isFinite(n)?Qs(n,0,.1):0}function wx(n){let e=new H,t=new H,i=new H,s=new H,r={x:1,z:0},o=!1,a=0,l=0,c=0,u=bx,h=Ex,f=0,p=0,g=0;function x(T,E){let v=kt(T.x),w=kt(T.y),_=kt(T.z),S=kt(T.heading)+kt(T.yaw),R=Math.sin(S),D=Math.cos(S),O=-D,I=R;r.x=O,r.z=I;let k=T.airborne?1:0,q=E*E,Q=Ex-.3*q+.9*k,V=yA-.15*q+.7*k;h=Q;let $=Qs(kt(T.slope),-.15,.15),oe=Qs(kt(T.lean),-1.5,1.5),ie=0;e.set(v-R*Q+O*ie,w+V-$*Q,_-D*Q+I*ie),e.y<w+su&&(e.y=w+su),t.set(v+R*8.5,w+.55+$*4-1.5*k,_+D*8)}function m(T){return SA(bx,gA,Math.pow(T,1.6))}function d(T,E,v,w){n.position.set(i.x+r.x*E,Math.max(i.y+v,w),i.z+r.z*E),n.lookAt(s),n.rotateZ(T)}function b(T,E){if(T=EA(T),!o){M(E);return}a+=T;let v=Qs(kt(E.speedRatio),0,1);x(E,v);let w=kt(E.x)-f,_=kt(E.y)-p,S=kt(E.z)-g;w*w+_*_+S*S<400&&(i.x+=w,i.y+=_,i.z+=S,s.x+=w,s.y+=_,s.z+=S),f=kt(E.x),p=kt(E.y),g=kt(E.z),i.lerp(e,Do(xA,T));let R=i.x-kt(E.x),D=i.z-kt(E.z),O=Math.hypot(R,D);O>.001&&(i.x=kt(E.x)+R/O*h,i.z=kt(E.z)+D/O*h),s.lerp(t,Do(vA,T));let I=kt(E.y)+su;i.y<I&&(i.y=I),c*=Math.exp(-bA*T);let k=v*v*v*2.2,q=Math.sin(a*61.3)*.6+Math.sin(a*97.1+1.7)*.4,Q=Math.sin(a*73.9+.4)*.6+Math.sin(a*113.7+2.9)*.4,V=Math.sin(a*67.8+1.1)*.6+Math.sin(a*121.4+.3)*.4,$=c*.35+k*.01,oe=q*$,ie=Q*$,ye=V*(c*.03+k*.002);l+=((E.boosting?1:0)-l)*Do(MA,T);let Se=m(v),U=Se+(Sx-Se)*l;u+=(U-u)*Do(_A,T),Math.abs(n.fov-u)>1e-4&&(n.fov=u,n.updateProjectionMatrix()),d(ye,oe,ie,I)}function M(T){let E=Qs(kt(T.speedRatio),0,1);x(T,E),i.copy(e),s.copy(t),f=kt(T.x),p=kt(T.y),g=kt(T.z),o=!0,a=0,c=0,l=T.boosting?1:0,u=m(E)+(Sx-m(E))*l,n.fov=u,n.updateProjectionMatrix(),d(0,0,0,kt(T.y)+su)}function y(T){c=Qs(c+kt(T),0,1.5)}return{update:b,shake:y,snap:M}}var wA=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,TA=`
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
}`;function Tx(n,e,t,i,s={}){let r=i||{},o=kt(r.bloom,.5),a=null,l=null,c=null,u=null,h=0,f=0,p=0,g=0,x=0,m=Math.min(globalThis.devicePixelRatio||1,2);try{let E=n.getSize(new Ke),v=new Zt(Math.max(1,E.x),Math.max(1,E.y),{type:pn,samples:4});if(a=new Qc(n,v),a.setPixelRatio(m),a.addPass(new eu(e,t)),s.ao&&!r.night){u=new Ba(e,t,Math.max(1,E.x),Math.max(1,E.y)),u.updateGtaoMaterial({radius:3.2,distanceExponent:1.4,thickness:4,scale:1.15,samples:12,screenSpaceRadius:!1}),u.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),u.blendIntensity=.6;let w=u.overrideVisibility.bind(u);u.overrideVisibility=()=>{w(),e.traverse(_=>{let S=Array.isArray(_.material)?_.material[0]:_.material;(_.isSprite||S&&(S.depthWrite===!1||S.blending===Ui))&&(_.visible=!1)})},a.addPass(u)}l=new Lo(new Ke(512,512),o*.8,.75,.9),a.addPass(l),c=new Po({uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uBoost:{value:0},uTime:{value:0}},vertexShader:wA,fragmentShader:TA}),a.addPass(c),a.addPass(new tu)}catch(E){console.warn("Post-traitement indisponible, rendu direct :",E),a=null,l=null,c=null}function d(E,v){!Number.isFinite(E)||!Number.isFinite(v)||E<=0||v<=0||(m=Math.min(globalThis.devicePixelRatio||1,2),n.setPixelRatio(m),n.setSize(E,v),a&&(a.setPixelRatio(m),a.setSize(E,v)))}function b(E,v){h=Qs(kt(E,0),0,1),f=v?1:0}function M(E){if(E=Number.isFinite(E)?Qs(E,0,.1):0,x+=E,p+=(h-p)*Do(8,E),g+=(f-g)*Do(8,E),c&&(c.uniforms.uSpeed.value=p,c.uniforms.uBoost.value=g,c.uniforms.uTime.value=x),a)try{a.render(E);return}catch(v){console.warn("\xC9chec du post-traitement, rendu direct :",v),a=null}n.render(e,t)}function y(E){u&&(u.enabled=!!E)}function T(){u&&u.dispose&&u.dispose(),a&&a.dispose(),l&&l.dispose&&l.dispose(),c&&c.dispose&&c.dispose(),a=null}return{render:M,setSize:d,setSpeed:b,dispose:T,setAO:y,get hasAO(){return!!u},get aoOn(){return!!u&&u.enabled}}}function Ax(n){if(!Number.isFinite(n))return`--'--"---`;let e=Math.floor(n/60),t=Math.floor(n%60),i=Math.floor(n*1e3%1e3);return`${String(e).padStart(2,"0")}'${String(t).padStart(2,"0")}"${String(i).padStart(3,"0")}`}var It=(n,e,t,i)=>{let s=document.createElement(n);return e&&(s.className=e),i!=null&&(s.textContent=i),t?.appendChild(s),s};function Rx(n){let e=It("div","h2-root",n);e.hidden=!0;let t=It("div","h2-pos",e),i=It("span","h2-pos-num",t,"1"),s=It("span","h2-pos-tot",t,"/8");It("span","h2-pos-lbl",t,"POS");let r=It("div","h2-right",e),o=It("div","h2-pill h2-lap",r),a=It("span","h2-lap-lbl",o,"TOUR"),l=It("span","h2-lap-num",o,"1"),c=It("span","h2-lap-tot",o,"/3"),u=It("div","h2-pill h2-time",r,`00'00"000`),h=It("div","h2-best",r,""),f=It("canvas","h2-map",e),p=220;f.width=f.height=p;let g=f.getContext("2d"),x=document.createElement("canvas");x.width=x.height=p;let m=null,d=1,b=0,M=0,y=It("div","h2-dial",e),T=It("canvas","h2-dial-canvas",y),E=300;T.width=T.height=E;let v=T.getContext("2d"),w=It("div","h2-gear",y,"1"),_=It("div","h2-speed",y,"0");It("div","h2-unit",y,"km/h");let S=It("div","h2-boost",y),R=[],D=It("div","h2-item",e),O=It("span","h2-item-icon",D,""),I=It("span","h2-item-name",D,"");It("span","h2-item-key",D,"E");let k=null,q=null,Q=["\u{1F680}","\u{1F3AF}","\u{1F6E2}","\u{1F6E1}","\u26A1"];function V(me){let P=me?me.id:"";if(q===P)return;if(q=P,clearInterval(k),D.classList.toggle("h2-has",!!me),!me){O.textContent="",I.textContent="";return}let A=0;I.textContent="",O.textContent=Q[0],k=setInterval(()=>{if(++A>6){clearInterval(k),O.textContent=me.icon,I.textContent=me.name.toUpperCase();return}O.textContent=Q[A%Q.length]},70)}let $=It("div","h2-xp",e),oe=It("span","h2-xp-lbl",$,"NIV 1"),ie=It("span","h2-xp-bar",$),ye=It("span","h2-xp-fill",ie),Se="";function U(me){let P=me.xpNeed>0,A=P?me.level+":"+me.xp+":"+me.xpNeed:"";if(A===Se)return;let ee=P&&Se&&Number(Se.split(":")[0])<me.level;Se=A,$.hidden=!P,P&&(oe.textContent="NIV "+me.level,ye.style.transform=`scaleX(${Math.min(1,me.xp/me.xpNeed)})`,ee&&($.classList.remove("h2-up"),$.offsetWidth,$.classList.add("h2-up")))}let X=It("div","h2-count",e,""),W=It("div","h2-flash",e,""),Y=It("div","h2-wrong",e,"CONTRESENS");Y.hidden=!0;let z={},G=(me,P,A)=>{z[me]!==A&&(z[me]=A,P.textContent=A)},de=Math.PI*.75,xe=Math.PI*2.25,Ne=-1;function He(me){let P=Math.round(me*120)/120;if(P===Ne)return;Ne=P;let A=E/2,ee=E*.44;v.clearRect(0,0,E,E),v.lineCap="butt",v.beginPath(),v.arc(A,A,ee*1.05,0,Math.PI*2),v.fillStyle="rgba(8, 10, 16, 0.42)",v.fill();let le=(Oe,Re,Ue,Xe)=>{v.beginPath(),v.arc(A,A,ee,Oe,Re),v.strokeStyle=Ue,v.lineWidth=Xe,v.stroke()},ge=de+(xe-de)*.86;le(de,ge,"rgba(255,255,255,0.28)",E*.05),le(ge,xe,"rgba(226,40,48,0.55)",E*.05);let fe=de+(xe-de)*Math.min(1,Math.max(0,P));le(de,Math.min(fe,ge),"#ffffff",E*.05),fe>ge&&le(ge,fe,"#e8242e",E*.05);for(let Oe=0;Oe<=8;Oe++){let Re=de+(xe-de)*Oe/8;v.beginPath(),v.moveTo(A+Math.cos(Re)*ee*.8,A+Math.sin(Re)*ee*.8),v.lineTo(A+Math.cos(Re)*ee*.9,A+Math.sin(Re)*ee*.9),v.strokeStyle=Oe>=7?"#e8242e":"rgba(255,255,255,0.75)",v.lineWidth=3,v.stroke()}v.beginPath(),v.moveTo(A+Math.cos(fe)*ee*.3,A+Math.sin(fe)*ee*.3),v.lineTo(A+Math.cos(fe)*ee*.98,A+Math.sin(fe)*ee*.98),v.strokeStyle="#ffffff",v.lineWidth=4,v.stroke()}He(0);function Z(me){m=me;let P=me.bounds,A=P.maxX-P.minX,ee=P.maxZ-P.minZ;d=(p-36)/Math.max(A,ee),b=(p-A*d)/2-P.minX*d,M=(p-ee*d)/2-P.minZ*d;let le=x.getContext("2d");le.clearRect(0,0,p,p);let ge=()=>{le.beginPath(),me.pts.forEach((fe,Oe)=>{let Re=fe.x*d+b,Ue=fe.z*d+M;Oe?le.lineTo(Re,Ue):le.moveTo(Re,Ue)}),me.open||le.closePath()};le.lineJoin="round",ge(),le.strokeStyle="rgba(0,0,0,0.45)",le.lineWidth=9,le.stroke(),ge(),le.strokeStyle="#ffffff",le.lineWidth=5,le.stroke(),ge(),le.strokeStyle="rgba(20,24,34,0.9)",le.lineWidth=2,le.stroke(),g.clearRect(0,0,p,p),g.drawImage(x,0,0)}function ae(me){if(!m)return;g.clearRect(0,0,p,p),g.drawImage(x,0,0);let P=m.pts.length,A=(ee,le)=>{let ge=Math.floor((ee.s%m.length+m.length)%m.length/m.step);ge>=P&&(ge=P-1);let fe=m.pts[ge],Oe=fe.x*d+b,Re=fe.z*d+M;g.beginPath(),g.arc(Oe,Re,le?6:3.6,0,Math.PI*2),g.fillStyle=le?"#e8242e":"#ffffff",g.fill(),g.lineWidth=1.5,g.strokeStyle="rgba(0,0,0,0.6)",g.stroke()};for(let ee of me)ee.isPlayer||A(ee,!1);for(let ee of me)ee.isPlayer&&A(ee,!0)}let Ee=null;function we(me){G("pos",i,String(me.position)),G("tot",s,"/"+me.total),G("lap",l,String(me.lap)),G("laps",c,"/"+me.laps),G("time",u,Ax(me.time)),G("best",h,me.bestLap?"MEILLEUR "+Ax(me.bestLap):""),G("speed",_,String(Math.round(me.speedKmh))),G("gear",w,String(me.gear||1)),He(me.rpm??Math.min(1,me.speedKmh/290));let P=me.boostCharges|0,A=me.boostT>0?1:0,ee=P+":"+A;if(z.boost!==ee){for(z.boost=ee;R.length<P+A;)R.push(It("span","h2-boost-dot",S));R.forEach((le,ge)=>{le.hidden=ge>=P+A,le.classList.toggle("h2-on",A&&ge===P)})}if(me.countdown===null||me.countdown===void 0)Ee===null&&z.count!==""&&(z.count="",X.textContent="",X.classList.remove("h2-show"));else if(me.countdown>0){let le=String(Math.ceil(me.countdown));z.count!==le&&(z.count=le,X.textContent=le,X.classList.remove("h2-show"),X.offsetWidth,X.classList.add("h2-show"))}else z.count!=="GO !"&&(z.count="GO !",X.textContent="GO !",X.classList.remove("h2-show"),X.offsetWidth,X.classList.add("h2-show"),clearTimeout(Ee),Ee=setTimeout(()=>{Ee=null},800));V(me.item||null),U(me),D.classList.toggle("h2-shield",(me.shieldT||0)>0),Y.hidden===!!me.wrongWay&&(Y.hidden=!me.wrongWay)}let Te=null;function De(me,P=900){W.textContent=me,W.classList.remove("h2-show"),W.offsetWidth,W.classList.add("h2-show"),clearTimeout(Te),Te=setTimeout(()=>W.classList.remove("h2-show"),P)}return{show(){e.hidden=!1},hide(){e.hidden=!0},update:we,setTrack:Z,updateMinimap:ae,flash:De,setLapLabel(me){a.textContent!==me&&(a.textContent=me)},dispose(){e.remove()}}}var UC=dr.maxSpeed*3.6;var Cx=360;var Ix=n=>(n<10?"0":"")+n;function kd(n){if(n==null||!Number.isFinite(n))return"--:--.--";let e=Math.max(0,Math.floor(n*100+1e-6)),t=Math.floor(e/6e3),i=Math.floor(e/100)%60;return`${t}:${Ix(i)}.${Ix(e%100)}`}var OC=`
  <div class="pr-pos"><span class="pr-pos-cur">-</span><span class="pr-pos-sep">/</span><span class="pr-pos-tot">-</span></div>
  <div class="pr-wrong">Sens interdit</div>
  <div class="pr-timing">
    <div class="pr-lap">Tour -/-</div>
    <div class="pr-time">0:00.00</div>
    <div class="pr-best">Meilleur <span class="pr-best-v">--:--.--</span></div>
  </div>
  <div class="pr-left">
    <div class="pr-mm-wrap"><canvas class="pr-minimap" width="${Cx}" height="${Cx}"></canvas></div>
    <div class="pr-boosts"><span class="pr-boost-lbl">Boost</span><div class="pr-dias"></div></div>
  </div>
  <div class="pr-speed">
    <div class="pr-speed-num">0</div>
    <div class="pr-speed-unit">km/h</div>
    <div class="pr-bar"></div>
  </div>
  <div class="pr-count"></div>
  <div class="pr-flash"></div>
`;var Px="ABCDEFGHJKMNPQRSTUVWXYZ23456789",Lx=0;function Hd(){Lx++;let n=Qn((Date.now()^Math.imul(Lx,2654435761))>>>0),e="RUSH-";for(let t=0;t<4;t++)e+=Px[n.int(0,Px.length-1)];return e}var gt=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Dx(n){return n?typeof n=="string"?zs[n]?.name||n:n.name||zs[n.id]?.name||"":""}function AA(n){return n&&typeof n=="object"?n:pr.find(e=>e.id===n)||{id:String(n),name:String(n),icon:"\u2022"}}function Vd(n){let e=new Map;for(let i of n||[]){let s=AA(i),r=e.get(s.id);r?r.n++:e.set(s.id,{info:s,n:1})}if(!e.size)return'<span class="pr-own-none">Aucune pour l\u2019instant</span>';let t="";for(let{info:i,n:s}of e.values())t+=`<span class="pr-own">${gt(i.icon)} ${gt(i.name)}${s>1?` \xD7${s}`:""}</span>`;return t}function Gd(n){return(n||[]).map((e,t)=>`<li class="pr-srow${e.isPlayer?" pr-me":""}" style="--i:${t}"><span class="pr-rk">${t+1}</span><span class="pr-rn">${gt(e.name)}</span><span class="pr-rp">${e.points??0}<small> pts</small></span></li>`).join("")}function Nx(n){let e=document.createElement("div");e.className="pr-menu pr-off",n.appendChild(e);let t=null,i=null;function s(M){try{t&&typeof t.play=="function"&&t.play(M)}catch{}}function r(M,y){let T=i;if(!T||!T.items.length)return;let E=T.items.length,v=(M%E+E)%E,w=v!==T.index;T.index=v,T.focused=!0;for(let _=0;_<E;_++)T.items[_].classList.toggle("pr-sel",_===v);try{T.items[v].focus({preventScroll:!0})}catch{}w&&y&&s("select")}function o(M){let y=i;y&&(i=null,e.innerHTML="",e.classList.add("pr-off"),s("confirm"),y.resolve(M))}function a(M){return i=null,e.innerHTML=M.html,e.classList.remove("pr-off"),new Promise(y=>{i={items:Array.from(e.querySelectorAll("[data-nav]")),index:0,focused:!1,actions:M.actions||{},resolve:y},M.onMount&&M.onMount(e,o),r(M.initial||0,!1)})}e.addEventListener("click",M=>{let y=i;if(!y||!(M.target instanceof Element))return;let T=M.target.closest("[data-act]");if(!T||!e.contains(T)||T.disabled)return;let E=y.items.indexOf(T);E>=0&&E!==y.index&&r(E,!1);let v=y.actions[T.dataset.act];v&&v(T,o)}),e.addEventListener("mouseover",M=>{let y=i;if(!y||!(M.target instanceof Element))return;let T=M.target.closest("[data-nav]");if(!T)return;let E=y.items.indexOf(T);E>=0&&E!==y.index&&r(E,!0)}),window.addEventListener("keydown",M=>{let y=i;if(!y)return;let T=M.target,E=!!T&&T.tagName==="INPUT",v=M.key||"",w=v.toLowerCase();if(v==="ArrowUp"||!E&&(v==="ArrowLeft"||w==="z"||w==="q")){M.preventDefault(),r(y.index-1,!0);return}if(v==="ArrowDown"||!E&&(v==="ArrowRight"||w==="s"||w==="d")){M.preventDefault(),r(y.index+1,!0);return}if(E){if(v==="Enter"){M.preventDefault();let _=e.querySelector("[data-main]");_&&_.click()}return}if(v.length===1){let _=y.items.find(S=>S.dataset.key===v);_&&(M.preventDefault(),_.click())}});function l({dailySeed:M,meta:y,route:T=null,records:E=null}={}){let v=y||{};if(T)return f(T,v,E||{});let w=String(M||"RUSH-DAILY").toUpperCase(),_=Hd();return a({initial:2,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">Arcade \xB7 Proc\xE9dural \xB7 Roguelite</p>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-seed-in">Seed du run</label>
    <div class="pr-seedbox">
      <input id="pr-seed-in" class="pr-input" type="text" value="${gt(_)}" maxlength="16" autocomplete="off" spellcheck="false" data-nav data-seed>
      <button type="button" class="pr-btn pr-btn-ico" data-nav data-act="dice" title="Nouvelle seed al\xE9atoire" aria-label="Nouvelle seed al\xE9atoire">\u{1F3B2}</button>
    </div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="launch">Lancer le run</button>
    <button type="button" class="pr-btn" data-nav data-act="daily">D\xE9fi du jour<small>${gt(w)}</small></button>
  </div>
  <div class="pr-stats pr-slide" style="--i:4">
    <div><b>${v.runs??0}</b><span>runs</span></div>
    <div><b>${v.wins??0}</b><span>victoires</span></div>
    <div><b>${v.bestPoints??0}</b><span>record de points</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage \xB7 E objet</p>
</section>`,actions:{dice:S=>{let R=S.closest(".pr-screen").querySelector("[data-seed]");R&&(R.value=Hd())},launch:(S,R)=>{let D=S.closest(".pr-screen").querySelector("[data-seed]"),O=(D?D.value:"").trim().toUpperCase();O||(O=Hd()),R({seed:O})},daily:(S,R)=>R({seed:w})}})}let c=M=>`${Math.floor(M/60)}'${String(Math.floor(M%60)).padStart(2,"0")}"`,u=M=>M==null?"":` <small>${M<0?"\u2212":"+"}${Math.abs(M).toFixed(1)} s</small>`;function h(M){if(!M)return"";let y='<li style="display:flex;justify-content:space-between;gap:1.5em">',T=M.splits.map((v,w)=>`${y}<span>${w+1} \xB7 ${gt(v.name.split(" \xB7 ")[0])}</span><b>${gt(c(v.time))}${u(v.delta)}${v.record&&v.best!==null?" \u2605":""}</b></li>`).join(""),E;return M.total?M.total.best===null?E=`Temps total <b>${gt(c(M.time))}</b> \xB7 premier chrono enregistr\xE9`:M.total.record?E=`Temps total <b>${gt(c(M.time))}</b> \xB7 <b>nouveau record</b>${u(M.total.delta)}`:E=`Temps total <b>${gt(c(M.time))}</b> \xB7 record ${gt(c(M.total.best))}${u(M.total.delta)}`:E=`Temps <b>${gt(c(M.time))}</b> \xB7 le record de l'itin\xE9raire ne compte que depuis Catane`,`<p class="pr-sub">${E}</p><ul style="list-style:none;margin:.6em 0;padding:0;display:grid;gap:.25em;font-size:.82em;text-align:left">${T}</ul>`}function f(M,y,T){let E=Object.keys(T.splits||{}).length,v=(M.stages.reduce((_,S)=>_+S.length,0)/1e3).toFixed(0),w=M.stages.map((_,S)=>`<option value="${S+1}">${S+1} \xB7 ${gt(_.subtitle)}</option>`).join("");return a({initial:1,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">${gt(M.title)} \xB7 ${gt(M.roads)} \xB7 ${v} km d'une traite</p>
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
    <div><b>${T.total?gt(c(T.total)):"\u2013"}</b><span>record Catania \u2192 Falcone</span></div>
    <div><b>${T.finishes??0}</b><span>arriv\xE9es</span></div>
    <div><b>${E}</b><span>chronos de tron\xE7on</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage \xB7 E objet \xB7 1 2 3 am\xE9lioration aux relais</p>
</section>`,actions:{launch:(_,S)=>{let R=_.closest(".pr-screen").querySelector("[data-from]");S({seed:"A18-A20",stage:Number(R?R.value:1)||1})},multi:(_,S)=>S({multi:!0})}})}function p({stage:M={},index:y=1,total:T=1,standings:E=[],weather:v}={}){let w=Dx(v)||Dx(M.weather),_=M.laps??0;return a({initial:0,html:`
<section class="pr-screen pr-stage">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in pr-stage-main">
    <div class="pr-kicker">${M.real?"Itin\xE9raire r\xE9el":`\xC9tape ${gt(y)}/${gt(T)}`}</div>
    <h2 class="pr-h2">${gt(M.name)}</h2>
    <p class="pr-sub">${gt(M.subtitle)}</p>
    <dl class="pr-facts">
      <div><dt>M\xE9t\xE9o</dt><dd>${gt(w)}</dd></div>
      ${M.real?`<div><dt>Tron\xE7ons</dt><dd>${M.real.length} encha\xEEn\xE9s sans arr\xEAt</dd></div>
      <div><dt>D\xE9part</dt><dd>${gt(M.real[0].subtitle.split(" \xB7 ")[0])}</dd></div>`:`<div><dt>Tours</dt><dd>${gt(_)} ${_>1?"tours":"tour"}</dd></div>
      <div><dt>Seed du circuit</dt><dd>${gt(M.trackSeed)}</dd></div>`}
    </dl>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="go">D\xE9part</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${Gd(E)}</ol>
  </div></div>
</section>`,actions:{go:(S,R)=>R(void 0)}})}function g({results:M=[],standings:y=[],stage:T={}}={}){let v=[...M].sort((w,_)=>(w.position??99)-(_.position??99)).map((w,_)=>{let S=fc[(w.position??0)-1]??0;return`<tr class="pr-tr${w.isPlayer?" pr-me":""}" style="--i:${_}"><td class="pr-c-pos">${gt(w.position??"")}</td><td class="pr-c-name">${gt(w.name)}</td><td class="pr-c-tm">${w.time==null?"Abandon":kd(w.time)}</td><td class="pr-c-best">${w.bestLap==null?"\u2014":kd(w.bestLap)}</td><td class="pr-c-pts">${S>0?"+"+S:"0"}</td></tr>`}).join("");return a({initial:0,html:`
<section class="pr-screen pr-results">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-kicker">R\xE9sultats \xB7 ${gt(T.name)}</div>
    <table class="pr-table">
      <thead><tr><th>Pos</th><th>Pilote</th><th>Temps</th><th>Meilleur tour</th><th>Pts</th></tr></thead>
      <tbody>${v}</tbody>
    </table>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="next">Continuer</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${Gd(y)}</ol>
  </div></div>
</section>`,actions:{next:(w,_)=>_(void 0)}})}function x({choices:M=[],index:y=1,total:T=1,owned:E=[]}={}){let v=M.map((w,_)=>`<button type="button" class="pr-card pr-slide" style="--i:${_}" data-nav data-key="${_+1}" data-act="pick" data-id="${gt(w.id)}"><span class="pr-card-in"><span class="pr-card-key">${_+1}</span><span class="pr-card-ico" aria-hidden="true">${gt(w.icon)}</span><span class="pr-card-name">${gt(w.name)}</span><span class="pr-card-tag">${gt(w.tagline)}</span><span class="pr-card-pro">\u25B2 ${gt(w.pro)}</span><span class="pr-card-con">\u25BC ${gt(w.con)}</span></span></button>`).join("");return a({initial:0,html:`
<section class="pr-screen pr-upg">
  <div class="pr-kicker pr-slide" style="--i:0">\xC9tape ${gt(y)}/${gt(T)} accomplie</div>
  <h2 class="pr-h2 pr-slide" style="--i:0">Choisissez une am\xE9lioration</h2>
  <div class="pr-cards">${v}</div>
  <div class="pr-owned pr-slide" style="--i:3"><span class="pr-owned-lbl">D\xE9j\xE0 poss\xE9d\xE9es</span>${Vd(E)}</div>
</section>`,actions:{pick:(w,_)=>_(w.dataset.id)}})}function m({standings:M=[],playerPosition:y,run:T={},meta:E}={}){let v=E||{},w=y??M.findIndex(R=>R.isPlayer)+1,_=w===1,S=T.real?_?"Victoire !":`${gt(w)}e \xE0 l'arriv\xE9e`:_?"Champion !":`${gt(w)}e au championnat`;return a({initial:T.real?0:1,html:`
<section class="pr-screen pr-end">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-end-title${_?" pr-gold":""}">${S}</div>
    <ol class="pr-slist pr-slist-big">${Gd(M)}</ol>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    ${T.real?`<h3 class="pr-h3">${gt(T.stages[0].name)}</h3>
    <p class="pr-sub">${gt(T.stages[0].subtitle)}</p>${h(T.summary)}
    <h3 class="pr-h3">Am\xE9liorations prises</h3>
    <div class="pr-owned-list">${Vd(T.upgrades)}</div>`:`<h3 class="pr-h3">Am\xE9liorations du run</h3>
    <div class="pr-owned-list">${Vd(T.upgrades)}</div>
    <h3 class="pr-h3">Seed</h3>
    <div class="pr-seedline">
      <code class="pr-seedcode">${gt(T.seed)}</code>
      <button type="button" class="pr-btn pr-btn-small" data-nav data-act="copy">Copier la seed</button>
    </div>`}
    ${T.real?"":`<p class="pr-cmds">Runs : ${v.runs??0} \xB7 Victoires : ${v.wins??0} \xB7 Record : ${v.bestPoints??0} pts</p>`}
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="again">${T.real?"Repartir":"Nouveau run"}</button>
  </div></div>
</section>`,actions:{copy:R=>{let D="Copier la seed",O;try{O=navigator.clipboard.writeText(String(T.seed??""))}catch(k){O=Promise.reject(k)}let I=k=>{R.textContent=k,setTimeout(()=>{R.isConnected&&(R.textContent=D)},1500)};O.then(()=>I("Copi\xE9e !"),()=>I("Copie impossible"))},again:(R,D)=>D(void 0)}})}function d(M){t=M||null}function b(){i=null,e.innerHTML="",e.classList.add("pr-off")}return{showTitle:l,showStageIntro:p,showResults:g,showUpgradeChoice:x,showRunEnd:m,hideAll:b,setAudio:d,mount:a}}var Ux=typeof globalThis<"u"&&(globalThis.AudioContext||globalThis.webkitAudioContext)||null,Ox=.8,Wd=.56,Fx=.5,Xd=6,RA=.12,CA=25,br=n=>Number.isFinite(n)?n<0?0:n>1?1:n:0,Un=n=>440*Math.pow(2,(n-69)/12),ru=[{chord:[45,48,52],lead:[[0,69,2],[3,72,1],[4,76,2],[8,74,1],[10,72,1],[12,69,2],[14,71,2]]},{chord:[41,45,48],lead:[[0,72,3],[4,69,1],[6,72,1],[8,77,3],[12,76,2],[14,72,2]]},{chord:[43,47,50],lead:[[0,74,3],[4,71,1],[6,74,1],[8,79,3],[12,77,1],[13,76,1],[14,74,2]]},{chord:[40,43,47],lead:[[0,76,4],[4,71,2],[8,67,2],[10,71,2],[12,76,1],[13,74,1],[14,71,2]]}],Bx=[{chord:[38,41,45],lead:[[0,77,2],[2,76,1],[3,74,1],[4,69,2],[8,74,2],[10,77,2],[12,81,4]]},{chord:[43,47,50],lead:[[0,79,2],[2,77,1],[3,76,1],[4,74,2],[8,71,2],[10,74,2],[12,79,4]]},{chord:[48,52,55],lead:[[0,76,2],[2,79,2],[4,84,3],[8,83,1],[9,79,1],[10,76,2],[12,79,2],[14,76,2]]},{chord:[40,44,47],lead:[[0,76,2],[2,80,2],[4,83,4],[8,80,2],[10,76,2],[12,71,2],[14,68,2]]}],IA=ru.map(n=>({chord:n.chord,lead:[]})),PA=[{chord:[48,52,55],lead:[[0,76,4],[8,79,4]]},{chord:[45,48,52],lead:[[0,81,4],[8,76,4]]},{chord:[41,45,48],lead:[[0,77,4],[8,81,2],[12,84,4]]},{chord:[43,47,50],lead:[[0,83,4],[8,79,2],[12,74,4]]}],qd={race:{bpm:152,bars:[...IA,...ru,...ru,...Bx,...ru,...Bx],loopFrom:4,style:"race"},menu:{bpm:104,bars:PA,loopFrom:0,style:"menu"}};function zx(){let n=null,e=!1,t=null,i=null,s=null,r=null,o=null,a=null,l=null,c=null,u=null,h=null,f=!1,p=null,g=null,x=null,m=0,d=0,b=-1,M=0,y=0,T=0;function E(ae){let we=new Float32Array(32),Te=new Float32Array(32);for(let De=1;De<32;De++)we[De]=2/(De*Math.PI)*Math.sin(De*Math.PI*ae);return n.createPeriodicWave(we,Te,{disableNormalization:!1})}function v(ae){let we=new Float32Array(2048);for(let De=0;De<2048;De++)we[De]=Math.round((De*2/2047-1)*ae)/ae;let Te=n.createWaveShaper();return Te.curve=we,Te}function w(ae,Ee){let we=n.createGain();return we.gain.value=ae,Ee&&we.connect(Ee),we}function _(ae,Ee,we,Te){let De=n.createBiquadFilter();return De.type=ae,De.frequency.value=Ee,De.Q.value=we,Te&&De.connect(Te),De}function S(ae){let Ee=n.createBufferSource();return Ee.buffer=o,Ee.loop=!0,Ee.connect(ae),Ee.start(),Ee}function R(ae,Ee,we=.05){try{ae.setTargetAtTime(Ee,n.currentTime,we)}catch{}}function D(ae,Ee,we,Te,De,me,{slide:P=0,attack:A=.004,vibrato:ee=0}={}){let le=n.createOscillator();if(a[De]?le.setPeriodicWave(a[De]):le.type=De,le.frequency.setValueAtTime(Ee,ae),P&&le.frequency.exponentialRampToValueAtTime(Math.max(20,Ee*P),ae+we),ee){let fe=n.createOscillator(),Oe=w(Ee*.012);fe.frequency.value=6,fe.connect(Oe),Oe.connect(le.frequency),fe.start(ae+Math.min(.12,we*.5)),fe.stop(ae+we+.05)}let ge=w(0,me);ge.gain.setValueAtTime(0,ae),ge.gain.linearRampToValueAtTime(Te,ae+A),ge.gain.setValueAtTime(Te,ae+Math.max(A,we*.7)),ge.gain.linearRampToValueAtTime(0,ae+we),le.connect(ge),le.start(ae),le.stop(ae+we+.02)}function O(ae,Ee,we,Te,De,me,P,A=0){let ee=n.createBufferSource();ee.buffer=o,ee.loopStart=Math.random()*1.5;let le=_(Te,De,me);A&&le.frequency.exponentialRampToValueAtTime(A,ae+Ee);let ge=w(0,P);ge.gain.setValueAtTime(we,ae),ge.gain.exponentialRampToValueAtTime(8e-4,ae+Ee),ee.connect(le),le.connect(ge),ee.start(ae,Math.random()*1.5),ee.stop(ae+Ee+.02)}function I(){t=w(f?0:Ox,n.destination);let ae=n.createDynamicsCompressor();ae.threshold.value=-14,ae.ratio.value=4,ae.attack.value=.004,ae.release.value=.18,ae.connect(t),i=v(24),i.connect(ae),s=w(Fx*Y,i),r=w(0,i),a={p12:E(.125),p25:E(.25),p50:E(.5)};let Ee=n.sampleRate*2;o=n.createBuffer(1,Ee,n.sampleRate);let we=o.getChannelData(0);for(let Oe=0;Oe<Ee;Oe++)we[Oe]=Math.random()*2-1;let Te=w(0,ae),De=_("lowpass",300,.5,Te),me=_("lowpass",1400,.5,De),P=(Oe,Re)=>{let Ue=n.createOscillator();Ue.type=Oe,Ue.frequency.value=60;let Xe=w(Re,me);return Ue.connect(Xe),Ue.start(),Ue};l={out:Te,lp:De,a:P("triangle",.55),b:P("sawtooth",.1),sub:P("triangle",.7)},l.b.detune.value=6;let A=w(0,ae),ee=_("lowpass",400,.4,A);S(ee),c={out:A,f:ee};let le=w(0,ae),ge=_("bandpass",900,1.5,le);S(ge),u={out:le,f:ge};let fe=w(0,i);S(_("highpass",3500,.5,fe)),h={out:fe},e=!0}let k=(ae,Ee,we,Te,De="p25")=>Ee.forEach((me,P)=>D(ae+P*we,Un(me),we*1.6,Te,De,s)),q={beep:ae=>D(ae,Un(69),.14,.3,"p50",s),go:ae=>{D(ae,Un(81),.42,.34,"p50",s),D(ae,Un(88),.42,.18,"p25",s)},select:ae=>D(ae,Un(84),.05,.2,"p25",s),confirm:ae=>k(ae,[76,83,88],.045,.24),pick:ae=>k(ae,[72,76,79,84],.04,.24,"p12"),lap:ae=>k(ae,[79,84,88,91],.06,.26),near:ae=>{D(ae,900,.16,.2,"p12",s,{slide:2.2})},boost:ae=>{D(ae,180,.5,.3,"sawtooth",s,{slide:5}),O(ae,.5,.35,"bandpass",500,1.2,s,5e3)},pad:ae=>{D(ae,330,.22,.26,"p25",s,{slide:2.5})},jump:ae=>D(ae,260,.2,.26,"p50",s,{slide:2.2}),land:ae=>{D(ae,120,.18,.5,"triangle",s,{slide:.35}),O(ae,.12,.3,"lowpass",900,.7,s)},hit:ae=>{O(ae,.28,.6,"lowpass",2400,.8,s,200),D(ae,160,.25,.4,"p50",s,{slide:.3})},win:ae=>{k(ae,[72,76,79,84,79,84,88],.09,.26),k(ae,[48,55,60],.27,.3,"triangle")},lose:ae=>k(ae,[67,64,60,55],.16,.24,"p50"),shard:ae=>D(ae,Un(91),.07,.12,"p25",s),level:ae=>{k(ae,[72,76,79,84,88],.05,.24),D(ae,Un(48),.3,.26,"triangle",s)},item:ae=>k(ae,[76,79,83,88,91],.035,.22,"p12"),rocket:ae=>{D(ae,220,.35,.24,"sawtooth",s,{slide:3.5}),O(ae,.35,.22,"bandpass",1800,1,s,600)},boom:ae=>{O(ae,.5,.5,"lowpass",1600,.7,s,120),D(ae,110,.4,.4,"triangle",s,{slide:.3})},oil:ae=>{D(ae,320,.22,.24,"p50",s,{slide:.4})},shield:ae=>{k(ae,[64,71,76],.05,.22,"p50"),D(ae+.15,Un(88),.25,.12,"p25",s)},zap:ae=>{D(ae,1300,.3,.22,"p12",s,{slide:.15}),O(ae,.2,.18,"bandpass",2400,2,s,500)}};function Q(ae,Ee){D(ae,150,.16,Ee,"triangle",r,{slide:.28,attack:.001})}function V(ae,Ee){O(ae,.13,Ee,"bandpass",1900,.7,r),D(ae,200,.06,Ee*.5,"triangle",r,{slide:.6,attack:.001})}function $(ae,Ee){O(ae,.035,Ee,"highpass",7500,.8,r)}function oe(ae,Ee,we){let Te=60/ae.bpm/4,De=ae.bars.length*16,me=Ee<De?Ee:ae.loopFrom*16+(Ee-De)%(De-ae.loopFrom*16),P=ae.bars[Math.floor(me/16)],A=me%16,[ee,le,ge]=P.chord;ae.style==="race"?(A%2===0&&D(we,Un(ee+(A%4===2?12:0)),Te*1.7,.34,"triangle",r),D(we,Un([ee,le,ge,ee+12][A%4]+24),Te*.9,.07,"p12",r),(A===0||A===8||A===10)&&Q(we,.5),(A===4||A===12)&&V(we,.3),A%2===0&&$(we,A%4===2?.13:.07),A===15&&Math.floor(me/16)%4===3&&V(we,.22)):((A===0||A===8)&&D(we,Un(ee),Te*6,.3,"triangle",r),(A===6||A===14)&&D(we,Un(ge),Te*1.8,.22,"triangle",r),A%2===0&&D(we,Un([ee,ge,le+12,ge][A/2%4]+12),Te*1.8,.07,"p12",r),A===0&&Q(we,.3),(A===4||A===12)&&$(we,.08));for(let[fe,Oe,Re]of P.lead)fe===A&&(D(we,Un(Oe),Te*Re*.92,ae.style==="race"?.15:.12,"p25",r,{vibrato:Re>=3?1:0}),ae.style==="race"&&Re>=2&&D(we+Te*1.5,Un(Oe),Te*.8,.05,"p25",r))}function ie(){if(!e||!p)return;let ae=60/p.bpm/4;for(m<n.currentTime&&(m=n.currentTime+.03);m<n.currentTime+RA;)oe(p,d,m),d++,m+=ae}function ye(){if(Ux)try{if(n||(n=new Ux,I()),n.state==="suspended"&&n.resume(),g){let ae=g;g=null,Ne(ae)}}catch{e=!1}}function Se(ae,Ee){if(!e)return;let we=br(ae),Te=br(Ee),De=n.currentTime,me=Math.min(Xd-1,Math.floor(we*Xd)),P=we*Xd-me,A=52+16*me+118*(.3+.7*P);R(l.a.frequency,A,.03),R(l.b.frequency,A,.03),R(l.sub.frequency,A/2,.03),R(l.lp.frequency,190+520*Te*(.4+.6*P)+180*we,.06),b>=0&&me!==b&&(M=De+.09),b=me,R(l.out.gain,(De<M?.03:.06+.07*Te)*Y,.02),Te>y&&(y=Te),y>.7&&Te<.2&&we>.35&&De>T&&(O(De,.06,.12,"lowpass",450,.7,s),D(De,80,.06,.1,"triangle",s,{slide:.5,attack:.002}),T=De+.09+Math.random()*.22,Math.random()<.3&&(y=0)),Te>.5&&(T=De+.1)}function U(ae){if(!e)return;let Ee=br(ae);R(c.out.gain,.1*Ee*Ee*Y,.15),R(c.f.frequency,300+600*Ee,.15)}function X(ae){if(!e)return;let Ee=br(ae);R(u.out.gain,.09*Ee*Y,.05),R(u.f.frequency,700+400*Ee,.06)}let W=1,Y=1;function z({music:ae,sfx:Ee}={}){Number.isFinite(ae)&&(W=br(ae)),Number.isFinite(Ee)&&(Y=br(Ee)),e&&(R(s.gain,Fx*Y,.05),p&&R(r.gain,Wd*W,.05))}function G(ae){e&&R(h.out.gain,.05*br(ae)*Y,.3)}function de(ae){!e||!Object.prototype.hasOwnProperty.call(q,ae)||q[ae](n.currentTime+.01)}function xe(ae){f=!!ae,e&&R(t.gain,f?0:Ox,.015)}function Ne(ae="race"){let Ee=qd[ae]||qd.race;if(!e){g=ae;return}p!==Ee&&(p=Ee,d=0,m=n.currentTime+.06),R(r.gain,Wd*W,.08),x||(x=setInterval(ie,CA)),ie()}function He(){g=null,p=null,x&&(clearInterval(x),x=null),e&&R(r.gain,0,.06)}function Z(ae,Ee,we=.05){let Te=qd[ae];if(!e||!Te)return 0;r.gain.value=Wd;let De=60/Te.bpm/4;for(let me=0;me<Ee;me++)oe(Te,me,we+me*De);return Ee*De}return{resume:ye,setEngine:Se,setWind:U,setSkid:X,setRain:G,play:de,setMuted:xe,setVolumes:z,startMusic:Ne,stopMusic:He,preview:Z,get track(){return p?p.style:null}}}var kx="polygon-rush-settings",LA={music:.8,sfx:.8,muted:!1,ao:!0};function Hx(n=globalThis.localStorage){let e={...LA};try{let t=JSON.parse(n?.getItem(kx)||"null");if(t&&typeof t=="object"){for(let i of["music","sfx"])Number.isFinite(t[i])&&(e[i]=Math.max(0,Math.min(1,t[i])));for(let i of["muted","ao"])typeof t[i]=="boolean"&&(e[i]=t[i])}}catch{}return e}function Yd(n,e=globalThis.localStorage){try{return e?.setItem(kx,JSON.stringify(n)),!0}catch{return!1}}var un=(n,e,t,i)=>{let s=document.createElement(n);return e&&(s.className=e),i!=null&&(s.textContent=i),t?.appendChild(s),s};function Vx(n,{settings:e,onChange:t,onResume:i,onQuit:s}){let r=un("div","pm-veil",n);r.hidden=!0;let o=un("div","pm-panel",r);o.setAttribute("role","dialog"),o.setAttribute("aria-label","Menu");let a=un("h2","pm-title",o,"PAUSE"),l=un("p","pm-note",o,""),c=un("div","pm-rows",o),u={};function h(y,T){let E=un("label","pm-row",c);un("span","pm-lbl",E,T);let v=un("input","pm-range",E);v.type="range",v.min="0",v.max="100",v.step="5";let w=un("span","pm-val",E,""),_=()=>{v.value=String(Math.round(e[y]*100)),w.textContent=v.value+" %"};v.addEventListener("input",()=>{e[y]=Number(v.value)/100,w.textContent=v.value+" %",t?.(y,e[y])}),u[y]=_}function f(y,T,E="Oui",v="Non"){let w=un("div","pm-row",c);un("span","pm-lbl",w,T);let _=un("button","pm-toggle",w);_.type="button";let S=()=>{_.textContent=e[y]?E:v,_.classList.toggle("pm-on",!!e[y]),_.setAttribute("aria-pressed",String(!!e[y]))};_.addEventListener("click",()=>{e[y]=!e[y],S(),t?.(y,e[y])}),u[y]=S}h("music","Musique"),h("sfx","Bruitages et moteur"),f("muted","Son coup\xE9 (M)"),f("ao","Ombres fines","Oui","Non");{let y=un("div","pm-row",c);un("span","pm-lbl",y,"Plein \xE9cran");let T=un("button","pm-toggle",y);T.type="button";let E=()=>{let v=!!document.fullscreenElement;T.textContent=v?"Oui":"Non",T.classList.toggle("pm-on",v)};T.addEventListener("click",()=>{(document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.())?.catch?.(()=>{})}),document.addEventListener("fullscreenchange",E),u.fullscreen=E}un("p","pm-keys",o,"\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage \xB7 E objet \xB7 1 2 3 am\xE9lioration");let p=un("div","pm-btns",o),g=un("button","pm-btn pm-main",p,"Reprendre");g.type="button",g.addEventListener("click",()=>i?.());let x=un("button","pm-btn",p,"Quitter la course");x.type="button";let m=!1;x.addEventListener("click",()=>{if(!m){m=!0,x.textContent="Confirmer : quitter ?",x.classList.add("pm-warn");return}s?.()});function d({live:y=!1,racing:T=!0}={}){a.textContent=y?"MENU":T?"PAUSE":"R\xC9GLAGES",l.textContent=y?"Partie \xE0 plusieurs : la course continue pendant que ce menu est ouvert.":"",l.hidden=!y,r.classList.toggle("pm-live",y),m=!1,x.hidden=!T,x.textContent=y?"Quitter la partie":"Quitter la course",x.classList.remove("pm-warn"),g.textContent=T?"Reprendre":"Fermer";for(let E in u)u[E]();r.hidden=!1,y||g.focus({preventScroll:!0})}function b(){r.hidden=!0}function M(){for(let y in u)u[y]()}return{open:d,close:b,refresh:M,get isOpen(){return!r.hidden},el:r}}var $d=1/120,Mn=new URLSearchParams(location.search),DA=document.getElementById("game"),Pi=new zl({canvas:DA,antialias:!0,powerPreference:"high-performance"});Pi.setPixelRatio(Math.min(window.devicePixelRatio,2));Pi.shadowMap.enabled=!0;Pi.shadowMap.type=sc;Pi.toneMapping=da;Pi.toneMappingExposure=1.05;Pi.outputColorSpace=Ft;var $t=new oa,On=new jt(70,1,.3,6e3);$t.add(On);var qi=wx(On),ip=document.getElementById("ui"),Xt=Rx(ip),Wi=Nx(ip),ft=zx();Wi.setAudio?.(ft);var qa=new Set,vn={throttle:0,brake:0,steer:0,boost:!1,drift:!1};var NA=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"],UA=["KeyE","KeyF","ControlLeft","ControlRight","Enter"],Wa=!1,Gx=!1;addEventListener("keydown",n=>{if(n.code==="Escape"&&!n.repeat){OA(),n.preventDefault();return}if(!(n.target instanceof HTMLInputElement)){if(qa.add(n.code),Rt==="race"&&NA.includes(n.code)&&n.preventDefault(),Rt==="race"&&!n.repeat&&UA.includes(n.code)&&(Wa=!0),gs?.active){let e=["Digit1","Digit2","Digit3","Numpad1","Numpad2","Numpad3"].indexOf(n.code);e>=0&&gs.pick(e%3)}n.code==="KeyM"&&(er=!er,ft.setMuted(er),ms.muted=er,Yd(ms),Xa.refresh()),n.code==="KeyP"&&Rt==="race"&&!Ht&&!Xa.isOpen&&sp(!cu)}});addEventListener("keyup",n=>qa.delete(n.code));addEventListener("blur",()=>qa.clear());addEventListener("pointerdown",()=>ft.resume(),{once:!1});var ms=Hx(),er=Mn.has("mute")||ms.muted;er&&ft.setMuted(!0);ms.muted=er;ft.setVolumes(ms);ft.startMusic("menu");var cu=!1;function sp(n){cu=!!n,cu&&(ft.setEngine(.1,0),ft.setWind(0),ft.setSkid(0),qa.clear())}var Xa=Vx(ip,{settings:ms,onChange(n,e){n==="music"||n==="sfx"?ft.setVolumes(ms):n==="muted"?(er=e,ft.setMuted(er)):n==="ao"&&(vi.ao=e&&Mn.get("fx")!=="low",vi.checked=!0,Be?.post.setAO(vi.ao)),Yd(ms)},onResume:()=>Kx(),onQuit:()=>{location.href=location.pathname}});function OA(){if(Xa.isOpen){Kx();return}if(Rt==="boot"||Rt==="intro")return;let n=Rt==="race";Xa.open({live:n&&!!Ht,racing:n}),n&&!Ht&&sp(!0)}function Kx(){Xa.close(),sp(!1),lu=performance.now()}function FA(n){let e=(...s)=>s.some(r=>qa.has(r));vn.throttle=e("ArrowUp","KeyW")?1:0,vn.brake=e("ArrowDown","KeyS")?1:0;let t=(e("ArrowRight","KeyD")?1:0)-(e("ArrowLeft","KeyA")?1:0);vn.steer=t,vn.boost=e("Space"),vn.drift=e("ShiftLeft","ShiftRight","KeyX");let i=navigator.getGamepads?.()[0];if(i){let s=i.axes[0]||0;Math.abs(s)>.12&&(vn.steer=s),vn.throttle=Math.max(vn.throttle,i.buttons[7]?.value||0,i.buttons[0]?.pressed?1:0),vn.brake=Math.max(vn.brake,i.buttons[6]?.value||0),vn.boost=vn.boost||!!i.buttons[2]?.pressed,vn.drift=vn.drift||!!i.buttons[1]?.pressed||!!i.buttons[5]?.pressed;let r=!!i.buttons[3]?.pressed||!!i.buttons[4]?.pressed;r&&!Gx&&(Wa=!0),Gx=r}return vn}function BA(n){let e=new oa,t=new Ns(50,32,16),i=new H(...n.sunDir).normalize(),s=new bt({side:sn,uniforms:{uTop:{value:new Le(n.skyTop)},uHor:{value:new Le(n.skyHorizon)},uGround:{value:new Le(n.hemiGround)},uSun:{value:new Le(n.sunColor).multiplyScalar(n.sunIntensity)},uSunDir:{value:i}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 uTop, uHor, uGround, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = d.y > 0.0 ? mix(uHor, uTop, pow(d.y, 0.55)) : mix(uHor, uGround, pow(-d.y, 0.35));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 350.0) * 14.0 + pow(s, 12.0) * 0.5);
        gl_FragColor = vec4(c, 1.0);
      }`});e.add(new et(t,s));let r=new oo(Pi),o=r.fromScene(e,.02);return r.dispose(),t.dispose(),s.dispose(),o}var Wx=new Map;function Xx(n,e="#f4f2ec",t="#16181d"){let i=n+e+t,s=Wx.get(i);if(!s){let o=document.createElement("canvas");o.width=40,o.height=28;let a=o.getContext("2d");a.fillStyle=e,a.fillRect(0,0,40,28),a.fillStyle=t,a.font='italic 900 26px "Arial Narrow", Impact, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(String(n),20,15),s=new li(o),s.colorSpace=Ft,s.magFilter=Jt,s.minFilter=oi,Wx.set(i,s)}let r=new et(new Hn(1,1),new ot({map:s,roughness:.5,side:Nt,polygonOffset:!0,polygonOffsetFactor:-2}));return r.userData.ownGeometry=!0,r}var za=null;function zA(){if(za)return za;let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),za=new li(n),za.colorSpace=Ft,za}function Zd(n,e,t){let i=new aa(new uo({map:zA(),color:n,transparent:!0,opacity:t,blending:Ui,depthWrite:!1,fog:!1}));return i.scale.setScalar(e),i}var vi={ao:Mn.get("fx")!=="low"&&ms.ao,slow:0,frames:0,checked:!1},Be=null,Rt="boot",Jd=0,Qd=0,ep=0,ka=99;function kA(){if(Be){for(let n of Be.labels||[])n.material.map?.dispose(),n.material.dispose();for(let n of Be.bikes)$t.remove(n.model.group);$t.remove(Be.road.group),Be.road.dispose?.(),Be.env.dispose?.(),Be.env.group?.parent&&Be.env.group.parent.remove(Be.env.group),Be.fx.dispose?.(),Be.post.dispose?.(),Be.envMap?.dispose(),$t.environment=null,Be.mirror&&($t.remove(Be.mirror),Be.mirror.dispose()),Be.fill&&$t.remove(Be.fill),Be.scenery&&($t.remove(Be.scenery.group),Be.scenery.dispose()),Be.clouds&&($t.remove(Be.clouds),Be.clouds.geometry.dispose(),Be.clouds.material.dispose()),Be.sunGlow&&($t.remove(Be.sunGlow),Be.sunGlow.material.dispose()),Be=null}}var Va="assets/v3/world/",In=null,xi=null,jx={};function Jx({trackSeed:n,weatherId:e,laps:t,riders:i,autopilot:s,realData:r=null,final:o=!0,carry:a=null,keepClouds:l=null,startS:c=0}){let u=[performance.now()],h=Q=>{u.push(Q,Math.round(performance.now()-u[0]))};kA(),h("dispose");let f=Qn(n),p=!!r&&!!In,g=p?In.track:f0(n);h("track");let x=zs[e]||zs.sunset;On.far=p?9500:6e3,On.updateProjectionMatrix();let m=p?og($t,g,x,In.index,{base:Va,baked:jx,rng:f.fork("env")}):K0($t,g,x,f.fork("env"));p&&m.prime(c),h("env");let d=BA(x);$t.environment=d.texture,$t.environmentIntensity=x.night?.55:.5,Pi.toneMappingExposure=x.night?1.5:.82;let b=Zd(x.sunColor,x.night?900:2200,x.night?.35:.75);b.userData.dir=new H(...x.sunDir).normalize(),$t.add(b);let M=new Fi(x.night?3820160:13226728,x.night?.25:.45);M.position.set(-x.sunDir[0],.6,-x.sunDir[2]).multiplyScalar(100),M.name="fill-light",$t.add(M),h("envmap");let y=p?{group:new lt,update(){},dispose(){}}:Rc(g,x,f.fork("road"));$t.add(y.group),h("road"),p||F0(m.group,Q=>Q.geometry.attributes.position.count>2e4?1:.45);let T=p?{group:new lt,dispose(){}}:eg(g,x,f.fork("scenery"),m.heightAt);m.sun?.shadow&&(m.sun.shadow.mapSize.set(4096,4096),m.sun.shadow.radius=5,m.sun.shadow.blurSamples=16,m.sun.shadow.normalBias=.05,m.sun.shadow.map?.dispose(),m.sun.shadow.map=null),$t.add(T.group);let E=null,v=p?Math.min(.25,x.wet||.25):x.sheen??x.wet;v>.5&&!Mn.has("noreflect")&&(E=new ma(new Hn(900,900),{textureWidth:1280,textureHeight:720,clipBias:.05,multisample:4}),E.rotation.x=-Math.PI/2,E.material.colorWrite=!1,E.material.depthWrite=!1,E.material.depthTest=!1,E.frustumCulled=!1,E.renderOrder=-10,E.name="road-mirror",$t.add(E));let w=y.group.getObjectByName("road-asphalt");w&&v>.5&&(w.material.envMap=d.texture,w.material.envMapIntensity=E?.35:1.25,w.material.metalness=.3,k0(w.material,x.sheen??x.wet,E?{texture:E.getRenderTarget().texture,matrix:E.material.uniforms.textureMatrix.value}:null)),h("voxelize");let _=l||B0(x,f.fork("clouds"));$t.add(_);let S=vx($t,x),R=Tx(Pi,$t,On,x,{ao:vi.ao});h("fx");let D=S0({track:g,laps:t,env:x,rng:f.fork("race"),riders:i,final:o,carry:a,startS:c}),O=Mn.has("noitems")?null:Og({track:g,rng:f.fork("items"),startS:c,net:Ht?{id:Ht.session.id}:null});Ht&&(Ht.session.onItem=(Q,V)=>{let $=Be?.race.riders.find(oe=>oe.remote&&oe.id===Q.id);$&&Be.items?.receive(V,$)}),Oo=Oo||Vg($t),Oo.reset(),Wa=!1;let I=[],k=D.riders.map(Q=>{let V=fx({color:Q.color,accent:Q.accent,isPlayer:!!Q.isPlayer&&!!x.night,detail:Q.isPlayer?"hi":"lo"});if(V.group.rotation.order="YXZ",Q.remote){let Se=$A(Q.name,Q.color);V.group.add(Se),I.push(Se)}let $=V.group.getObjectByName("chassis")||V.group,oe=Zd(16722458,.3,.3);if(oe.position.set(0,.67,-.42),$.add(oe),x.night){let Se=Zd(16773840,1.3,.8);Se.position.set(0,.48,1.66),$.add(Se)}V.tailGlow=oe;let ie=Q.isPlayer?1:2+D.riders.indexOf(Q)*7%97;for(let Se of[-1,1]){let U=Xx(ie);U.scale.set(.24,.17,1),U.position.set(.105*Se,.6,-.2),U.rotation.y=Se*Math.PI/2,$.add(U)}let ye=Xx(ie);return ye.scale.set(.2,.14,1),ye.position.set(0,.585,1.6),ye.rotation.x=-.75,$.add(ye),$t.add(V.group),{rider:Q,model:V,pose:{},prev:new H,has:!1,w:{x:0,y:0,z:0,heading:0,slope:0}}}),q=s?gc({id:"auto",name:"auto",skill:.9,aggression:.5,jumpSkill:.8,lineSkill:.9,style:"r\xE9gulier"},f.fork("auto")):null;if(Be={labels:I,track:g,weather:x,env:m,road:y,fx:S,post:R,race:D,items:O,bikes:k,autoAI:q,envMap:d,sunGlow:b,clouds:_,scenery:T,mirror:E,fill:M,playerBike:k.find(Q=>Q.rider.isPlayer)||k[0]},h("bikes"),window.__loadTimes=u.slice(1),St?.traffic){for(let Q of D.riders)Q.ai&&(Q.ai.obstacles=St.traffic.vehicles);q&&(q.obstacles=St.traffic.vehicles)}if(p){let Q=[];for(let V of g.features)V.type==="tunnel"&&V.name&&Q.push({s:V.s0-90,text:V.name.toUpperCase()});for(let V of g.bridges)V.name&&V.s1-V.s0>150&&Q.push({s:V.s0-40,text:V.name.toUpperCase()});for(let V of In.index.signs)Q.push({s:V.s-20,text:V.name.toUpperCase()});Q.sort((V,$)=>V.s-$.s),Be.announce=Q.filter(V=>V.s>=c-60&&V.s<=g.raceEnd),Be.announceIdx=0}return Xt.setTrack(g),rv(),ev(.016),qi.snap(rp()),Qd=D.player?.position||i.length,ep=1,ka=99,window.__game={stage:Be,renderer:Pi,scene:$t,camera:On,RL:Of,audio:ft},window.__tick=iv,Be}var Gi={x:0,y:0,z:0,heading:0,yaw:0,lean:0,speedRatio:0,airborne:!1,boosting:!1,slope:0};function rp(){let n=Be.playerBike,e=n.rider.state;return Gi.x=n.w.x,Gi.y=n.w.y,Gi.z=n.w.z,Gi.heading=n.w.heading,Gi.yaw=-Qx(e),Gi.speedRatio=Math.min(1.3,e.speed/n.rider.stats.maxSpeed),Gi.airborne=e.airborne,Gi.boosting=e.boostT>0,Gi.slope=n.w.slope||0,Gi}var HA=.8,qx=.7;function Qx(n){let e=n.vdir??n.yaw;return e+HA*(n.yaw-e)}function ev(n){let{track:e,fx:t,weather:i}=Be;for(let s of Be.bikes){let r=s.rider.state;At(e,r.s,r.d,s.w),s.w.y+=r.yRel||0;let o=s.model.group;o.position.set(s.w.x,s.w.y,s.w.z),o.visible=!s.rider.hidden;let a=s.w.heading-Qx(r),l=s.w.heading-(r.vdir??r.yaw);o.rotation.y=a,o.position.x+=qx*(Math.sin(a)-Math.sin(l)),o.position.z+=qx*(Math.cos(a)-Math.cos(l)),o.rotation.x=r.airborne?0:-Math.atan(s.w.slope||0);let c=s.pose;if(c.lean=r.lean,c.steer=r.steer,c.pitch=r.pitch,c.compress=r.compress,c.wheelSpin=r.wheelSpin,c.speedRatio=r.speed/s.rider.stats.maxSpeed,c.speed=r.speed,c.airborne=r.airborne,c.drift=r.drift,c.boost=r.boostT>0,c.braking=s.rider.isPlayer?vn.brake>.1:!!s.rider.braking,s.model.update(c,n),s.model.tailGlow){let M=c.braking?1:0;s.model.tailGlow.material.opacity+=(.3+.6*M-s.model.tailGlow.material.opacity)*Math.min(1,n*12),s.model.tailGlow.scale.setScalar(.3+.55*M)}let u=o.rotation.y,h=Math.sin(u),f=Math.cos(u),p=s.w.x-h*.7,g=s.w.z-f*.7,x=s.w.y+.05,m=h*r.speed,d=f*r.speed;!r.airborne&&r.speed>8&&(r.drift>.8&&(Math.random()<r.drift*.9&&t.emit("smoke",p,x,g,m*.2,1.2,d*.2,1),s.has&&t.addSkid(s.prev.x,s.prev.y,s.prev.z,p,x,g,.16,.25+r.drift*.4)),!r.onRoad&&Math.random()<.7&&t.emit("dust",p,x,g,m*.25,1.5,d*.25,2),i.wet>.2&&r.speed>20&&Math.random()<i.wet*.8&&t.emit("spray",p,x,g,m*.35,2.5,d*.35,2)),r.boostT>0&&t.emit("boost",p-h*.4,x+.45,g-f*.4,m*.9,.2,d*.9,1),s.prev.set(p,x,g),s.has=!r.airborne;let b=s.rider.isPlayer?null:s.rider.frameEvents;b&&b.length&&tv(s,b,!1)}}function tv(n,e,t){let{fx:i}=Be,s=n.rider.state,r=n.model.group.rotation.y,o=Math.sin(r)*s.speed,a=Math.cos(r)*s.speed;for(let l of e)l==="land"||l==="hardLand"?(i.emit("land",n.w.x,n.w.y+.1,n.w.z,o*.3,1,a*.3,l==="hardLand"?40:22),t&&(ft.play("land"),qi.shake(l==="hardLand"?.9:.45))):l==="wall"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,3,a*.5,26),t&&(ft.play("hit"),qi.shake(.7))):l==="crash"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,4,a*.5,40),i.emit("dust",n.w.x,n.w.y+.2,n.w.z,o*.3,2,a*.3,30),t&&(qi.shake(1.4),Xt.flash("CHUTE !",1400))):l==="jump"?t&&ft.play("jump"):l==="boost"?t&&(ft.play("boost"),qi.shake(.3),Xt.flash("BOOST !",600)):l==="pad"&&t&&(ft.play("pad"),qi.shake(.2))}function VA(n){let{race:e,autoAI:t,track:i}=Be,s=e.player,r=vn;if(t||Rt==="finish")if(t){let a=e.riders.filter(l=>l!==s).map(l=>l.state);r=xc(t,s.state,i,s.stats,a,n)}else r=XA;if(Ht&&St&&(KA(e,n),ZA(e,n)),e.update(n,r),Ht&&St&&e.phase!=="countdown"&&(Ht.session.sendState(performance.now(),s.state.s,s.state,s.shieldT>0),s.finished&&!Ht.sentFinish&&(Ht.sentFinish=!0,Ht.session.sendFinish(s.finishTime))),St?.traffic&&e.phase!=="countdown"){St.traffic.update(n,s.state,e.riders);for(let a of St.traffic.events)a.type==="near"&&!t?(Xt.flash(a.boost?`FR\xD4LEMENT \xD7${a.combo} \xB7 BOOST +1`:`FR\xD4LEMENT \xD7${a.combo}`,900),tp(1),ft.play(a.boost?"boost":"near")):a.type==="hit"&&!t&&Xt.flash("ACCROCHAGE",900)}if(Be.items&&e.phase!=="countdown"){Wa&&!t&&Rt==="race"&&Be.items.use(s,e.riders),Be.items.update(n,e.riders,{vehicles:St?.traffic?.vehicles||null,autoPlayer:!!t||Rt!=="race"}),Be.items.events.length&&WA(Be.items.events,s,!t&&Rt==="race");let a=Be.items.outbox;if(a.length){if(Ht)for(let l of a)Ht.session.sendItem(l);a.length=0}}Wa=!1;let o=s.state.events;o.length&&(tv(Be.playerBike,o,!t),o.length=0)}var GA={nitro:"boost",rocket:"rocket",oil:"oil",shield:"shield",pulse:"zap"},Sr={};function WA(n,e,t){let{fx:i,track:s}=Be;for(let r of n){let o=r.rider?Be.bikes.find(c=>c.rider===r.rider):null,a=r.rider===e,l=r.by===e;if(r.type==="shard")t&&(ft.play("shard"),tp(1));else if(r.type==="pickup")o&&i.emit("spark",o.w.x,o.w.y+1.1,o.w.z,0,2,0,14),a&&t&&ft.play("item");else if(r.type==="use")a&&t&&(ft.play(GA[r.item]),Xt.flash(Xc[r.item].name.toUpperCase()+" !",700),r.item==="pulse"&&qi.shake(.3));else if(r.type==="hit"){if(o&&(i.emit("spark",o.w.x,o.w.y+.6,o.w.z,0,4,0,r.item==="oil"?10:36),i.emit(r.item==="oil"?"smoke":"dust",o.w.x,o.w.y+.3,o.w.z,0,2,0,18)),!t)continue;if(a){ft.play(r.item==="rocket"?"boom":r.item==="pulse"?"zap":"hit"),qi.shake(r.item==="rocket"?1.2:.7);let c=r.by&&r.by!==e?" \u2014 "+r.by.name.toUpperCase():"";Xt.flash((r.item==="oil"?"GLISSADE":r.item==="pulse"?"MOTEUR BRID\xC9":"TOUCH\xC9")+c,1300)}else l&&(r.item==="rocket"&&ft.play("boom"),tp(3),Xt.flash(`${r.rider.name.toUpperCase()} ${r.item==="oil"?"A GLISS\xC9":r.item==="pulse"?"BRID\xC9":"TOUCH\xC9"} !`,1100))}else r.type==="sent"?(o&&i.emit("spark",o.w.x,o.w.y+.6,o.w.z,0,4,0,30),l&&t&&ft.play("boom")):r.type==="block"?(o&&i.emit("spark",o.w.x,o.w.y+.8,o.w.z,0,3,0,20),a&&t?(ft.play("shield"),Xt.flash("BOUCLIER !",900)):l&&t&&Xt.flash(`${r.rider.name.toUpperCase()} : BOUCLIER`,1e3)):r.type==="boom"&&(At(s,r.s,r.d,Sr),i.emit("spark",Sr.x,Sr.y+.8,Sr.z,0,4,0,30),i.emit("smoke",Sr.x,Sr.y+.8,Sr.z,0,2,0,16))}}var XA={throttle:.3,brake:0,steer:0,boost:!1,drift:!1},tn={speedKmh:0,position:1,total:8,lap:1,laps:3,time:0,bestLap:null,boostCharges:0,boostT:0,countdown:null,wrongWay:!1},Kd=[],Yx=new H,lu=performance.now(),ou=0,Ha=0;function nv(n){requestAnimationFrame(nv);let e=Math.min(.05,(n-lu)/1e3);vi.ao&&!vi.checked&&Rt==="race"&&Be?.race.phase==="racing"&&(vi.frames++,n-lu>25&&vi.slow++,vi.frames>=240&&(vi.checked=!0,vi.slow>96&&(vi.ao=!1,Be.post.setAO(!1),console.info("Occlusion ambiante coup\xE9e : affichage trop lent.")))),lu=n,iv(e)}function iv(n){if(!Be)return;if(cu){Be.post.render(0);return}Ha+=n,Jd+=n,Rt==="race"&&(gs?.update(n),Er>0&&!gs?.active&&jA());let{race:e}=Be,t=Rt==="race"||Rt==="attract"||Rt==="finish";if(t){Rt==="race"&&FA(n),ou+=n;let a=0;for(;ou>=$d&&a++<8;)VA($d),ou-=$d;a>=8&&(ou=0)}ev(n);let i=e.player,s=i.state,r=Math.min(1.3,s.speed/i.stats.maxSpeed),o=rp();Rt==="intro"||Rt==="menu"||Rt==="finish"&&Jd>1.2?qA(o,n):qi.update(n,o),Yx.set(o.x,o.y,o.z),Be.env.update(n,Ha,Yx,(Be.race.player||Be.race.riders[0]).state.s),Be.mirror&&Be.mirror.position.set(o.x,o.y-(s.yRel||0)+.02,o.z),Be.sunGlow.position.copy(On.position).addScaledVector(Be.sunGlow.userData.dir,3200),Be.road.update(n,Ha),Be.fx.setSpeed(t?r:0,s.boostT>0),Be.fx.update(n,On),Uo&&(St?.traffic&&Rt!=="attract"?Uo.update(St.traffic,Be.track,s.s):Uo.hide()),Be.items?(Oo.show(),Oo.update(n,Ha,Be.items,Be.track,s.s,Be.bikes,t?Be.fx:null)):Oo?.hide(),Be.post.setSpeed(t?r:0,s.boostT>0),Be.post.render(n),(Rt==="race"||Rt==="finish")&&(ft.setEngine(Math.min(1,r),Rt==="race"?vn.throttle:.3),ft.setWind(Math.min(1,r)),ft.setSkid(s.airborne?0:Math.min(1,s.drift))),Rt==="race"&&YA(e,i,s)}var $x=new H;function qA(n,e){let t=Ha*.35+n.heading;$x.set(n.x+Math.sin(t)*7.5,n.y+2.6,n.z+Math.cos(t)*7.5),On.position.lerp($x,Math.min(1,e*2.5)),On.fov+=(55-On.fov)*Math.min(1,e*3),On.updateProjectionMatrix(),On.lookAt(n.x,n.y+.9,n.z)}function YA(n,e,t){tn.speedKmh=t.speed*3.6,tn.position=e.position,tn.total=n.riders.length,tn.lap=Math.min(n.laps,Math.max(1,e.lap)),tn.laps=n.laps,St&&Rt!=="attract"&&(tn.lap=St.index+1,tn.laps=St.metas.length),Xt.setLapLabel?.(St&&Rt!=="attract"?"TRON\xC7ON":"TOUR"),tn.time=n.time,tn.bestLap=e.bestLap??null,tn.boostCharges=t.boostCharges,tn.boostT=t.boostT,tn.gear=t.gear,tn.rpm=t.rpm,tn.level=at?(at.level||0)+1:1,tn.xp=at?.xp||0,tn.xpNeed=at&&Be.items?qc(at.level||0):0,tn.item=e.item?Xc[e.item]:null,tn.shieldT=e.shieldT||0,tn.countdown=n.phase==="countdown"?n.countdown:n.time<.9?0:null,tn.wrongWay=Math.abs(t.yaw)>1.4,Xt.update(tn),Kd.length=0;for(let i of n.riders)Kd.push({s:i.state.s,d:i.state.d,isPlayer:!!i.isPlayer,color:i.color});if(Xt.updateMinimap(Kd),n.phase==="countdown"){let i=Math.ceil(n.countdown);i!==ka&&(ka=i,i>0&&ft.play("beep"))}else ka!==0&&(ka=0,ft.play("go"),ft.startMusic?.("race"));if(n.phase==="racing"){let i=Be.announce;if(i)for(;Be.announceIdx<i.length&&i[Be.announceIdx].s<=t.s;)Xt.flash(i[Be.announceIdx].text,2e3),Be.announceIdx++;e.position<Qd&&!(i&&Be.announceIdx>0&&t.s-i[Be.announceIdx-1].s<120)&&Xt.flash(e.position===1?"EN T\xCATE !":"+1 PLACE",700),Qd=e.position,e.lap!==ep&&e.lap<=n.laps&&(ep=e.lap,ft.play("lap"),e.lap===n.laps&&Xt.flash("DERNIER TOUR",1400))}if(St&&Rt==="race"&&n.phase==="racing")for(;St.index<St.metas.length-1&&t.s>=St.metas[St.index].s1;)JA(n);n.phase==="finished"&&Rt==="race"&&QA()}var St=null,Uo=null,Oo=null;function $A(n,e){let t=document.createElement("canvas");t.width=256,t.height=64;let i=t.getContext("2d");i.font="bold 34px Arial, Helvetica, sans-serif";let s=Math.min(244,i.measureText(n).width+28);i.fillStyle="rgba(10,14,28,.78)",i.beginPath(),i.roundRect((256-s)/2,8,s,48,12),i.fill(),i.fillStyle="#"+e.toString(16).padStart(6,"0"),i.fillRect((256-s)/2,50,s,6),i.fillStyle="#fff",i.textAlign="center",i.textBaseline="middle",i.fillText(n,128,31,230);let r=new li(t);r.colorSpace=Ft;let o=new aa(new uo({map:r,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1}));return o.scale.set(3.6,.9,1),o.position.set(0,2.55,0),o.name="name-tag",o}var Xi=null,jd=0;function ZA(n,e){if(jd-=e,jd>0)return;jd=.25,Xi||(Xi=document.createElement("div"),Xi.style.cssText="position:fixed;left:2.2vmin;top:13vmin;z-index:30;font:bold 1.9vmin Arial,Helvetica,sans-serif;color:#fff;text-shadow:0 1px 3px #000;display:grid;gap:.5vmin;pointer-events:none",document.body.appendChild(Xi));let t=n.player.state.s,i=n.riders.filter(s=>s.remote).map(s=>{let r=Ht.session.players.get(s.id);if(!r||r.gone)return{gap:-1/0,html:`<span style="opacity:.6">\u2715 ${au(s.name)} \xB7 abandon</span>`};if(s.finished)return{gap:1/0,html:`<span>\u{1F3C1} ${au(s.name)} \xB7 arriv\xE9</span>`};if(!r.remote.known)return{gap:0,html:`<span style="opacity:.6">\u2026 ${au(s.name)}</span>`};let o=s.state.s-t,a=Math.abs(o)>=1e3?(Math.abs(o)/1e3).toFixed(1).replace(".",",")+" km":Math.round(Math.abs(o))+" m";return{gap:o,html:`<span><b style="color:#${s.color.toString(16).padStart(6,"0")}">${o>=0?"\u25B2":"\u25BC"}</b> ${au(s.name)} \xB7 ${o>=0?"+":"\u2212"}${a}</span>`}});i.sort((s,r)=>r.gap-s.gap),Xi.innerHTML=i.map(s=>s.html).join(""),Xi.style.display=""}var au=n=>String(n).replace(/[&<>]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[e]),Ht=null;function KA(n,e){let t=performance.now(),i=n.track;for(let s of n.riders){if(!s.remote)continue;let r=Ht.session.players.get(s.id),o=r&&!r.gone?r.remote.sample(t,e):null;if(!o){s.hidden=!0,(!r||r.gone)&&(s.state.s=-1e5,!s.dnf&&!s.finished&&(s.dnf=!0,Xt.flash(`${s.name.toUpperCase()} A QUITT\xC9 LA COURSE`,2200)));continue}let a=s.state;a.s=o.g,a.d=o.d,a.speed=o.v,a.lean=o.l,a.yaw=o.y,a.vdir=o.y,a.boostT=o.b?.2:0,s.shieldT=o.sh?3:0,a.wheelSpin=(a.wheelSpin||0)+o.v*e/.31,s.hidden=Math.abs(a.s-n.player.state.s)>3500||r.remote.age>4,r.finished&&!s.finished&&(s.finished=!0,s.finishTime=r.finishTime)}}var ps=Wg(),gs=null;function sv(n){let e=St.metas[St.splits.length],t=St.splits.length===0,i=qg(ps,e.id+(t?":g":":r"),n-St.splitStart);return St.splitStart=n,St.splits.push({name:e.subtitle,...i}),Yc(ps),i}var Er=0;function tp(n){if(!(!at||Rt!=="race"||!Be?.items))for(at.xp=(at.xp||0)+n,at.level=at.level||0;at.xp>=qc(at.level);)at.xp-=qc(at.level),at.level+=1,Er+=1,Xt.flash(`NIVEAU ${at.level+1}`,900),ft.play("level")}function jA(){if(Er=Math.max(0,Er-1),!at||!Be)return;at.offers=(at.offers||0)+1;let n=Sc({...at,stageIndex:"n"+at.offers},at.real?$g:null);if(!n.length){Er=0;return}let e=t=>{if(!Ec(at,t.id))return;ft.play("pick");let i=Be.race.player;if(i){let s=i.stats.boostCharges;Object.assign(i.stats,Hs(at)),i.stats.boostCharges>s&&(i.state.boostCharges+=i.stats.boostCharges-s)}Xt.flash(`${t.icon||""} ${t.name.toUpperCase()}`,1800)};if(Be.autoAI&&!Mn.has("pick")){e(n[0]);return}gs=gs||Zg(),gs.show(n,e,9)}function JA(n){let e=sv(n.time);St.index+=1;let t=St.metas[St.index];Xt.flash(`SECTION ${id(e.time)}${e.delta===null?"":" ("+Xg(e.delta)+")"}${e.record&&e.best!==null?" \xB7 RECORD":""} \u2014 ${t.subtitle.split(" \xB7 ")[0].toUpperCase()}`,3200),Er+=1}function rv(){let n=innerWidth,e=innerHeight;Pi.setSize(n,e,!1),On.aspect=n/e,On.updateProjectionMatrix(),Be?.post.setSize(n,e)}addEventListener("resize",rv);function Ga(n){Rt=n,Jd=0}var at=null,No=Df(),np=null;function QA(){if(Ga("finish"),gs?.hide(),Er=0,St&&at){let n=Be.race.player.finishTime??Be.race.time,e=sv(n),t=!!xi&&St.metas.length===xi.stages.length,i=t?Yg(ps,n):null;ps.finishes+=1,Yc(ps),at.summary={splits:St.splits,total:i,time:n,full:t,last:e}}if(Xt.flash(`ARRIV\xC9E \u2014 ${Be.race.player.position}${Be.race.player.position===1?"er":"e"}`,2200),ft.play(Be.race.player.position<=3?"win":"lose"),ft.stopMusic?.(),setTimeout(()=>{Rt!=="race"&&ft.startMusic?.("menu")},3200),Ht){let n=performance.now(),e=()=>Be.race.riders.some(i=>i.remote&&!i.finished&&!i.dnf),t=()=>{if(Rt==="finish"){if(!e()||performance.now()-n>12e4){np?.();return}performance.now()-n>3e3&&Xt.flash("EN ATTENTE DES AUTRES JOUEURS\u2026",1100),setTimeout(t,1e3)}};setTimeout(t,3200);return}setTimeout(()=>np?.(),3200)}async function Zx(){St=null,Xi&&(Xi.style.display="none"),Uo?.hide(),gs?.hide();let n=bc(Mc("ATTRACT"));for(let t of n)t.stats=Hs({upgrades:[]});let e=In?In.index.sections[Math.min(2,In.index.sections.length-1)].s0+9e3:0;In&&await qf(Va,In.index,e,1).catch(()=>{}),Jx({trackSeed:In?"REAL:"+In.index.id:"ATTRACT-"+wc(),weatherId:In?"sicily":"sunset",laps:In?1:99,riders:n,autopilot:!0,realData:!!In,startS:e}),Xt.hide(),Ga("attract")}async function e2(){if(await tx().catch(n=>console.warn("Mod\xE8le de moto indisponible, repli sur le mod\xE8le proc\xE9dural :",n)),!Mn.has("noreal")){let[n,e]=await Promise.all([fetch(Va+"index.json").then(t=>t.ok?t.json():null).catch(()=>null),fetch(Va+"track.json").then(t=>t.ok?t.json():null).catch(()=>null)]);if(n&&e&&(In={index:n,track:tg({...n,...e})},xi={title:n.title,roads:n.roads,stages:n.sections}),xi){let t=await fetch("assets/v3/props/index.json").then(s=>s.ok?s.json():[]).catch(()=>[]);await Promise.all(ng.filter(s=>t.includes(s)).map(s=>fetch(`assets/v3/props/${s}.json`).then(r=>r.ok?r.json():null).then(r=>{r&&(jx[s]=r)}).catch(()=>{})));let i=document.createElement("div");i.textContent="\xA9 contributeurs OpenStreetMap \xB7 relief Terrarium (Mapzen) \xB7 Sentinel-2 cloudless 2016 par EOX (CC BY 4.0)",i.style.cssText="position:fixed;left:50%;bottom:0.6vmin;transform:translateX(-50%);font:1.35vmin Arial,sans-serif;color:rgba(255,255,255,.72);text-shadow:0 1px 2px #000;pointer-events:none;z-index:40;white-space:nowrap",document.body.appendChild(i)}}for(await Zx(),document.getElementById("boot").remove(),requestAnimationFrame(nv);;){let n=Mn.get("seed"),e=Number(Mn.get("stage"))||0;if(!n){let s=await Wi.showTitle({dailySeed:wc(),meta:No,route:xi,records:ps});if(s.multi){let r=xi?await Tg(Wi.mount,xi):null;if(!r)continue;Ht={session:r.session,directory:r.directory,sentFinish:!1},n="MP-"+r.session.code,e=r.stage}else n=s.seed,s.stage&&(e=s.stage)}if(ft.resume(),at=Mc(n),xi){let s=Math.floor(e)-1;at.real=!0,s>0&&s<xi.stages.length||(s=0);let r=xi.stages.slice(s),o=r.reduce((a,l)=>a+l.length,0)/1e3;at.stages=[{name:xi.title,subtitle:`${xi.roads} \xB7 ${o.toFixed(0)} km d'une traite`,trackSeed:"REAL:"+r[0].id,weather:"sicily",laps:1,real:r}]}for(;!va(at);){let s=at.stages[at.stageIndex],r=Hs(at),o=bc(at).map(c=>({...c,stats:c.isPlayer?r:Hs({upgrades:[]})}));if(Ht&&s.real){at.points={},at.names={};let c=o.find(u=>u.isPlayer);o=Ht.session.roster().map(u=>u.me?{...c,name:u.name,color:u.color,accent:u.accent}:{id:u.id,name:u.name,color:u.color,accent:u.accent,isPlayer:!1,remote:!0,persona:null,stats:Hs({upgrades:[]})});for(let u of o)at.points[u.id]=0,at.names[u.id]=u.name}Wi.hideAll();let a=0;St=null,s.real&&(Xt.flash?.("CHARGEMENT\u2026"),a=s.real[0].s0,await qf(Va,In.index,a,1).catch(()=>{}),St={metas:s.real,index:0,riders:o,autopilot:Mn.has("auto"),weatherId:Mn.get("weather")||s.weather,splits:[],splitStart:0},ps.runs+=1,Yc(ps),Mn.has("notraffic")||(St.traffic=lg({rng:Qn("trafic|"+n+"|"+ps.runs),count:40,density:2.6}),Uo=Uo||Ag($t,40))),Jx({trackSeed:s.trackSeed,weatherId:Mn.get("weather")||s.weather,laps:s.laps,riders:o,autopilot:Mn.has("auto"),realData:!!s.real,startS:a}),Ga("intro"),ft.setRain(Be.weather.rain||0),!Mn.has("auto")&&!Ht&&await Wi.showStageIntro({stage:s,index:at.stageIndex+1,total:at.stages.length,standings:yo(at),weather:Be.weather}),Wi.hideAll(),qi.snap(rp()),Xt.show(),Ga("race"),await new Promise(c=>{np=c}),Xt.hide(),ft.setEngine(.1,0),ft.setWind(0),ft.setSkid(0);let l=Be.race.results();if(Ht){let c=new Set(Be.race.riders.filter(u=>u.dnf).map(u=>u.id));for(let u of l)c.has(u.id)&&(u.time=null);l.sort((u,h)=>(u.time===null)-(h.time===null)||u.position-h.position),l.forEach((u,h)=>{u.position=h+1}),Xi&&(Xi.style.display="none")}if(Pf(at,l),await Wi.showResults({results:l,standings:yo(at),stage:s}),!va(at)){let c=Sc(at),u=at.upgrades.map(f=>pr.find(p=>p.id===f)).filter(Boolean),h=await Wi.showUpgradeChoice({choices:c,index:at.stageIndex,total:at.stages.length,owned:u});Ec(at,h)}}let t=yo(at),i=t.findIndex(s=>s.isPlayer)+1;No=Uf(No,at)||No,Nf(No),Ga("menu"),await Wi.showRunEnd({standings:t,playerPosition:i,run:at,meta:No}),Wi.hideAll(),Ht&&(Ht.directory?.close(),Ht.session.leave(),Ht=null),Mn.delete("seed"),Mn.delete("stage"),await Zx()}}e2().catch(n=>{console.error(n);let e=document.getElementById("boot")||document.body.appendChild(Object.assign(document.createElement("div"),{id:"boot"}));e.className="err",e.textContent=`Erreur de d\xE9marrage :
`+(n?.stack||n)});
