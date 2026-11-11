var pv=Object.defineProperty;var mv=(n,e)=>{for(var t in e)pv(n,t,{get:e[t],enumerable:!0})};var gv=0,cp=1,xv=2;var ac=1,vv=2,ts=3,Ui=0,an=1,Pt=2,cn=0,Kr=1,Oi=2,up=3,hp=4,ma=5,Hn=100,yv=101,_v=102,Mv=103,bv=104,yo=200,sf=201,Sv=202,Ev=203,qu=204,ra=205,lc=206,wv=207,cc=208,Tv=209,Av=210,Rv=211,Cv=212,Pv=213,Iv=214,Yu=0,$u=1,Zu=2,to=3,Ku=4,ju=5,Ju=6,Qu=7,rf=0,Lv=1,Dv=2,As=0,of=1,af=2,lf=3,ga=4,Nv=5,cf=6,uf=7,fp="attached",Uv="detached",Pm=300,no=301,io=302,eh=303,th=304,uc=306,Nn=1e3,is=1001,oa=1002,sn=1003,hf=1004;var $r=1005;var Vn=1006,na=1007;var ci=1008;var Ci=1009,Im=1010,Lm=1011,aa=1012,ff=1013,ur=1014,Ai=1015,gn=1016,df=1017,pf=1018,Rs=1020,Dm=35902,Nm=1021,Um=1022,Gn=1023,Om=1024,Fm=1025,jr=1026,Cs=1027,mf=1028,gf=1029,Bm=1030,xf=1031;var vf=1033,Cl=33776,Pl=33777,Il=33778,Ll=33779,nh=35840,ih=35841,sh=35842,rh=35843,oh=36196,ah=37492,lh=37496,ch=37808,uh=37809,hh=37810,fh=37811,dh=37812,ph=37813,mh=37814,gh=37815,xh=37816,vh=37817,yh=37818,_h=37819,Mh=37820,bh=37821,Dl=36492,Sh=36494,Eh=36495,zm=36283,wh=36284,Th=36285,Ah=36286;var so=2300,ro=2301,fu=2302,dp=2400,pp=2401,mp=2402,Ov=2500;var km=0,hc=1,xa=2,Fv=3200,Bv=3201;var fc=0,zv=1,ws="",Bt="srgb",Rn="srgb-linear",dc="linear",Ot="srgb";var Cr=7680;var gp=519,kv=512,Hv=513,Vv=514,Hm=515,Gv=516,Wv=517,Xv=518,qv=519,Rh=35044,zi=35048;var xp="300 es",ss=2e3,Nl=2001,Ps=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vp=1234567,Jr=Math.PI/180,oo=180/Math.PI;function Ri(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function wn(n,e,t){return Math.max(e,Math.min(t,n))}function yf(n,e){return(n%e+e)%e}function Yv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function $v(n,e,t){return n!==e?(t-n)/(e-n):0}function ia(n,e,t){return(1-t)*n+t*e}function Zv(n,e,t,i){return ia(n,e,1-Math.exp(-t*i))}function Kv(n,e=1){return e-Math.abs(yf(n,e*2)-e)}function jv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Jv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Qv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ey(n,e){return n+Math.random()*(e-n)}function ty(n){return n*(.5-Math.random())}function ny(n){n!==void 0&&(vp=n);let e=vp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iy(n){return n*Jr}function sy(n){return n*oo}function ry(n){return(n&n-1)===0&&n!==0}function oy(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ay(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ly(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Vm={DEG2RAD:Jr,RAD2DEG:oo,generateUUID:Ri,clamp:wn,euclideanModulo:yf,mapLinear:Yv,inverseLerp:$v,lerp:ia,damp:Zv,pingpong:Kv,smoothstep:jv,smootherstep:Jv,randInt:Qv,randFloat:ey,randFloatSpread:ty,seededRandom:ny,degToRad:iy,radToDeg:sy,isPowerOfTwo:ry,ceilPowerOfTwo:oy,floorPowerOfTwo:ay,setQuaternionFromProperEuler:ly,normalize:Ft,denormalize:Ti},Je=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(wn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],x=s[0],m=s[3],d=s[6],E=s[1],v=s[4],M=s[7],T=s[2],b=s[5],y=s[8];return r[0]=o*x+a*E+l*T,r[3]=o*m+a*v+l*b,r[6]=o*d+a*M+l*y,r[1]=c*x+h*E+u*T,r[4]=c*m+h*v+u*b,r[7]=c*d+h*M+u*y,r[2]=f*x+p*E+g*T,r[5]=f*m+p*v+g*b,r[8]=f*d+p*M+g*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=t*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(du.makeScale(e,t)),this}rotate(e){return this.premultiply(du.makeRotation(-e)),this}translate(e,t){return this.premultiply(du.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},du=new mt;function Gm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function la(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cy(){let n=la("canvas");return n.style.display="block",n}var yp={};function ea(n){n in yp||(yp[n]=!0,console.warn(n))}function uy(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function hy(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fy(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var yt={enabled:!0,workingColorSpace:Rn,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ot&&(n.r=rs(n.r),n.g=rs(n.g),n.b=rs(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ot&&(n.r=Qr(n.r),n.g=Qr(n.g),n.b=Qr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ws?dc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function rs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var _p=[.64,.33,.3,.6,.15,.06],Mp=[.2126,.7152,.0722],bp=[.3127,.329],Sp=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ep=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);yt.define({[Rn]:{primaries:_p,whitePoint:bp,transfer:dc,toXYZ:Sp,fromXYZ:Ep,luminanceCoefficients:Mp,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:_p,whitePoint:bp,transfer:Ot,toXYZ:Sp,fromXYZ:Ep,luminanceCoefficients:Mp,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}});var Pr,Ch=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pr===void 0&&(Pr=la("canvas")),Pr.width=e.width,Pr.height=e.height;let i=Pr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=la("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=rs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rs(t[i]/255)*255):t[i]=rs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},dy=0,Ul=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pu(s[o].image)):r.push(pu(s[o]))}else r=pu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function pu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ch.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var py=0,pn=class n extends Ps{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=is,s=is,r=Vn,o=ci,a=Gn,l=Ci,c=n.DEFAULT_ANISOTROPY,h=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Ri(),this.name="",this.source=new Ul(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nn:e.x=e.x-Math.floor(e.x);break;case is:e.x=e.x<0?0:1;break;case oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nn:e.y=e.y-Math.floor(e.y);break;case is:e.y=e.y<0?0:1;break;case oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Pm;pn.DEFAULT_ANISOTROPY=1;var Tt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(p+1)/2,T=(d+1)/2,b=(h+f)/4,y=(u+x)/4,w=(g+m)/4;return v>M&&v>T?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=b/i,r=y/i):M>T?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=b/s,r=w/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=y/r,s=w/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-x)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ph=class extends Ps{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new pn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ul(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends Ph{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ol=class extends pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ih=class extends pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var un=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==p||h!==g){let m=1-a,d=l*f+c*p+h*g+u*x,E=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let T=Math.sqrt(v),b=Math.atan2(T,d*E);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}let M=a*E;if(l=l*m+f*M,c=c*m+p*M,h=h*m+g*M,u=u*m+x*M,m===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-a*p,e[t+2]=c*g+h*p+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mu.copy(this).projectOnVector(e),this.sub(mu)}reflect(e){return this.sub(mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(wn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mu=new H,wp=new un,Wn=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bi):bi.fromBufferAttribute(r,o),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ka.copy(i.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),ja.subVectors(this.max,Go),Ir.subVectors(e.a,Go),Lr.subVectors(e.b,Go),Dr.subVectors(e.c,Go),ys.subVectors(Lr,Ir),_s.subVectors(Dr,Lr),nr.subVectors(Ir,Dr);let t=[0,-ys.z,ys.y,0,-_s.z,_s.y,0,-nr.z,nr.y,ys.z,0,-ys.x,_s.z,0,-_s.x,nr.z,0,-nr.x,-ys.y,ys.x,0,-_s.y,_s.x,0,-nr.y,nr.x,0];return!gu(t,Ir,Lr,Dr,ja)||(t=[1,0,0,0,1,0,0,0,1],!gu(t,Ir,Lr,Dr,ja))?!1:(Ja.crossVectors(ys,_s),t=[Ja.x,Ja.y,Ja.z],gu(t,Ir,Lr,Dr,ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Zi=[new H,new H,new H,new H,new H,new H,new H,new H],bi=new H,Ka=new Wn,Ir=new H,Lr=new H,Dr=new H,ys=new H,_s=new H,nr=new H,Go=new H,ja=new H,Ja=new H,ir=new H;function gu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ir.fromArray(n,r);let a=s.x*Math.abs(ir.x)+s.y*Math.abs(ir.y)+s.z*Math.abs(ir.z),l=e.dot(ir),c=t.dot(ir),h=i.dot(ir);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var my=new Wn,Wo=new H,xu=new H,Jn=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):my.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);let t=Wo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Wo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(xu)),this.expandByPoint(Wo.copy(e.center).sub(xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ki=new H,vu=new H,Qa=new H,Ms=new H,yu=new H,el=new H,_u=new H,ao=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){vu.copy(e).add(t).multiplyScalar(.5),Qa.copy(t).sub(e).normalize(),Ms.copy(this.origin).sub(vu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Qa),a=Ms.dot(this.direction),l=-Ms.dot(Qa),c=Ms.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vu).addScaledVector(Qa,f),p}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);let i=Ki.dot(this.direction),s=Ki.dot(Ki)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,i,s,r){yu.subVectors(t,e),el.subVectors(i,e),_u.crossVectors(yu,el);let o=this.direction.dot(_u),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ms.subVectors(this.origin,e);let l=a*this.direction.dot(el.crossVectors(Ms,el));if(l<0)return null;let c=a*this.direction.dot(yu.cross(Ms));if(c<0||l+c>o)return null;let h=-a*Ms.dot(_u);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qe=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,f,p,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,p,g,x,m)}set(e,t,i,s,r,o,a,l,c,h,u,f,p,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Nr.setFromMatrixColumn(e,0).length(),r=1/Nr.setFromMatrixColumn(e,1).length(),o=1/Nr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,g=c*h,x=c*u;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,g=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gy,e,xy)}lookAt(e,t,i){let s=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),bs.crossVectors(i,Kn),bs.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),bs.crossVectors(i,Kn)),bs.normalize(),tl.crossVectors(Kn,bs),s[0]=bs.x,s[4]=tl.x,s[8]=Kn.x,s[1]=bs.y,s[5]=tl.y,s[9]=Kn.y,s[2]=bs.z,s[6]=tl.z,s[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],d=i[14],E=i[3],v=i[7],M=i[11],T=i[15],b=s[0],y=s[4],w=s[8],_=s[12],S=s[1],A=s[5],I=s[9],N=s[13],L=s[2],B=s[6],Y=s[10],ie=s[14],k=s[3],G=s[7],se=s[11],te=s[15];return r[0]=o*b+a*S+l*L+c*k,r[4]=o*y+a*A+l*B+c*G,r[8]=o*w+a*I+l*Y+c*se,r[12]=o*_+a*N+l*ie+c*te,r[1]=h*b+u*S+f*L+p*k,r[5]=h*y+u*A+f*B+p*G,r[9]=h*w+u*I+f*Y+p*se,r[13]=h*_+u*N+f*ie+p*te,r[2]=g*b+x*S+m*L+d*k,r[6]=g*y+x*A+m*B+d*G,r[10]=g*w+x*I+m*Y+d*se,r[14]=g*_+x*N+m*ie+d*te,r[3]=E*b+v*S+M*L+T*k,r[7]=E*y+v*A+M*B+T*G,r[11]=E*w+v*I+M*Y+T*se,r[15]=E*_+v*N+M*ie+T*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*p-i*l*p)+x*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+d*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],E=u*m*c-x*f*c+x*l*p-a*m*p-u*l*d+a*f*d,v=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,M=h*x*c-g*u*c+g*a*p-o*x*p-h*a*d+o*u*d,T=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,b=t*E+i*v+s*M+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let y=1/b;return e[0]=E*y,e[1]=(x*f*r-u*m*r-x*s*p+i*m*p+u*s*d-i*f*d)*y,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*d+i*l*d)*y,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*p-i*l*p)*y,e[4]=v*y,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*y,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*y,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*p+t*l*p)*y,e[8]=M*y,e[9]=(g*u*r-h*x*r-g*i*p+t*x*p+h*i*d-t*u*d)*y,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*d+t*a*d)*y,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*p-t*a*p)*y,e[12]=T*y,e[13]=(h*x*s-g*u*s+g*i*f-t*x*f-h*i*m+t*u*m)*y,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*m-t*a*m)*y,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*y,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,x=o*h,m=o*u,d=a*u,E=l*c,v=l*h,M=l*u,T=i.x,b=i.y,y=i.z;return s[0]=(1-(x+d))*T,s[1]=(p+M)*T,s[2]=(g-v)*T,s[3]=0,s[4]=(p-M)*b,s[5]=(1-(f+d))*b,s[6]=(m+E)*b,s[7]=0,s[8]=(g+v)*y,s[9]=(m-E)*y,s[10]=(1-(f+x))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Nr.set(s[0],s[1],s[2]).length(),o=Nr.set(s[4],s[5],s[6]).length(),a=Nr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Si.copy(this);let c=1/r,h=1/o,u=1/a;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=h,Si.elements[5]*=h,Si.elements[6]*=h,Si.elements[8]*=u,Si.elements[9]*=u,Si.elements[10]*=u,t.setFromRotationMatrix(Si),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ss){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),p,g;if(a===ss)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Nl)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ss){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*c,p=(i+s)*h,g,x;if(a===ss)g=(o+r)*u,x=-2*u;else if(a===Nl)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Nr=new H,Si=new Qe,gy=new H(0,0,0),xy=new H(1,1,1),bs=new H,tl=new H,Kn=new H,Tp=new Qe,Ap=new un,Pi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(wn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-wn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ap.setFromEuler(this),this.setFromQuaternion(Ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var Fl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vy=0,Rp=new H,Ur=new un,ji=new Qe,nl=new H,Xo=new H,yy=new H,_y=new un,Cp=new H(1,0,0),Pp=new H(0,1,0),Ip=new H(0,0,1),Lp={type:"added"},My={type:"removed"},Or={type:"childadded",child:null},Mu={type:"childremoved",child:null},Yt=class n extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new H,t=new Pi,i=new un,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new mt}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(Cp,e)}rotateY(e){return this.rotateOnAxis(Pp,e)}rotateZ(e){return this.rotateOnAxis(Ip,e)}translateOnAxis(e,t){return Rp.copy(e).applyQuaternion(this.quaternion),this.position.add(Rp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cp,e)}translateY(e){return this.translateOnAxis(Pp,e)}translateZ(e){return this.translateOnAxis(Ip,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?nl.copy(e):nl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Xo,nl,this.up):ji.lookAt(nl,Xo,this.up),this.quaternion.setFromRotationMatrix(ji),s&&(ji.extractRotation(s.matrixWorld),Ur.setFromRotationMatrix(ji),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lp),Or.child=e,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(My),Mu.child=e,this.dispatchEvent(Mu),Mu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lp),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,yy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,_y,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Yt.DEFAULT_UP=new H(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ei=new H,Ji=new H,bu=new H,Qi=new H,Fr=new H,Br=new H,Dp=new H,Su=new H,Eu=new H,wu=new H,Tu=new Tt,Au=new Tt,Ru=new Tt,ns=class n{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ei.subVectors(e,t),s.cross(Ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ei.subVectors(s,t),Ji.subVectors(i,t),bu.subVectors(e,t);let o=Ei.dot(Ei),a=Ei.dot(Ji),l=Ei.dot(bu),c=Ji.dot(Ji),h=Ji.dot(bu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qi.x),l.addScaledVector(o,Qi.y),l.addScaledVector(a,Qi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Tu.setScalar(0),Au.setScalar(0),Ru.setScalar(0),Tu.fromBufferAttribute(e,t),Au.fromBufferAttribute(e,i),Ru.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Tu,r.x),o.addScaledVector(Au,r.y),o.addScaledVector(Ru,r.z),o}static isFrontFacing(e,t,i,s){return Ei.subVectors(i,t),Ji.subVectors(e,t),Ei.cross(Ji).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Ei.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Fr.subVectors(s,i),Br.subVectors(r,i),Su.subVectors(e,i);let l=Fr.dot(Su),c=Br.dot(Su);if(l<=0&&c<=0)return t.copy(i);Eu.subVectors(e,s);let h=Fr.dot(Eu),u=Br.dot(Eu);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Fr,o);wu.subVectors(e,r);let p=Fr.dot(wu),g=Br.dot(wu);if(g>=0&&p<=g)return t.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Br,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Dp.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Dp,a);let d=1/(m+x+f);return o=x*d,a=f*d,t.copy(i).addScaledVector(Fr,o).addScaledVector(Br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},il={h:0,s:0,l:0};function Cu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ne=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=yt.workingColorSpace){if(e=yf(e,1),t=wn(t,0,1),i=wn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Cu(o,r,e+1/3),this.g=Cu(o,r,e),this.b=Cu(o,r,e-1/3)}return yt.toWorkingColorSpace(this,s),this}setStyle(e,t=Bt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let i=Wm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return yt.fromWorkingColorSpace(En.copy(this),e),Math.round(wn(En.r*255,0,255))*65536+Math.round(wn(En.g*255,0,255))*256+Math.round(wn(En.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(En.copy(this),t);let i=En.r,s=En.g,r=En.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=Bt){yt.fromWorkingColorSpace(En.copy(this),e);let t=En.r,i=En.g,s=En.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+t,Ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ss),e.getHSL(il);let i=ia(Ss.h,il.h,t),s=ia(Ss.s,il.s,t),r=ia(Ss.l,il.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new Ne;Ne.NAMES=Wm;var by=0,Tn=class extends Ps{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Ri(),this.name="",this.blending=Kr,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qu,this.blendDst=ra,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qu&&(i.blendSrc=this.blendSrc),this.blendDst!==ra&&(i.blendDst=this.blendDst),this.blendEquation!==Hn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Lt=class extends Tn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var on=new H,sl=new Je,_t=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rh,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sl.fromBufferAttribute(this,t),sl.applyMatrix3(e),this.setXY(t,sl.x,sl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rh&&(e.usage=this.usage),e}};var Bl=class extends _t{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var zl=class extends _t{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var rt=class extends _t{constructor(e,t,i){super(new Float32Array(e),t,i)}},Sy=0,li=new Qe,Pu=new Yt,zr=new H,jn=new Wn,qo=new Wn,dn=new H,dt=class n extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gm(e)?zl:Bl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new mt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,i){return li.makeTranslation(e,t,i),this.applyMatrix4(li),this}scale(e,t,i){return li.makeScale(e,t,i),this.applyMatrix4(li),this}lookAt(e){return Pu.lookAt(e),Pu.updateMatrix(),this.applyMatrix4(Pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];jn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let i=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];qo.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(jn.min,qo.min),jn.expandByPoint(dn),dn.addVectors(jn.max,qo.max),jn.expandByPoint(dn)):(jn.expandByPoint(qo.min),jn.expandByPoint(qo.max))}jn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)dn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(dn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)dn.fromBufferAttribute(a,c),l&&(zr.fromBufferAttribute(e,c),dn.add(zr)),s=Math.max(s,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<i.count;w++)a[w]=new H,l[w]=new H;let c=new H,h=new H,u=new H,f=new Je,p=new Je,g=new Je,x=new H,m=new H;function d(w,_,S){c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,_),u.fromBufferAttribute(i,S),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,_),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),p.sub(f),g.sub(f);let A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(A),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(A),a[w].add(x),a[_].add(x),a[S].add(x),l[w].add(m),l[_].add(m),l[S].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let w=0,_=E.length;w<_;++w){let S=E[w],A=S.start,I=S.count;for(let N=A,L=A+I;N<L;N+=3)d(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let v=new H,M=new H,T=new H,b=new H;function y(w){T.fromBufferAttribute(s,w),b.copy(T);let _=a[w];v.copy(_),v.sub(T.multiplyScalar(T.dot(_))).normalize(),M.crossVectors(b,_);let A=M.dot(l[w])<0?-1:1;o.setXYZW(w,v.x,v.y,v.z,A)}for(let w=0,_=E.length;w<_;++w){let S=E[w],A=S.start,I=S.count;for(let N=A,L=A+I;N<L;N+=3)y(e.getX(N+0)),y(e.getX(N+1)),y(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,u=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new _t(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Np=new Qe,sr=new ao,rl=new Jn,Up=new H,ol=new H,al=new H,ll=new H,Iu=new H,cl=new H,Op=new H,ul=new H,et=class extends Yt{constructor(e=new dt,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){cl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Iu.fromBufferAttribute(u,e),o?cl.addScaledVector(Iu,h):cl.addScaledVector(Iu.sub(t),h))}t.add(cl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(r),sr.copy(e.ray).recast(e.near),!(rl.containsPoint(sr.origin)===!1&&(sr.intersectSphere(rl,Up)===null||sr.origin.distanceToSquared(Up)>(e.far-e.near)**2))&&(Np.copy(r).invert(),sr.copy(e.ray).applyMatrix4(Np),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,T=v;M<T;M+=3){let b=a.getX(M),y=a.getX(M+1),w=a.getX(M+2);s=hl(this,d,e,i,c,h,u,b,y,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let E=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);s=hl(this,o,e,i,c,h,u,E,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,T=v;M<T;M+=3){let b=M,y=M+1,w=M+2;s=hl(this,d,e,i,c,h,u,b,y,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let E=m,v=m+1,M=m+2;s=hl(this,o,e,i,c,h,u,E,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ey(n,e,t,i,s,r,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ui,a),l===null)return null;ul.copy(a),ul.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ul);return c<t.near||c>t.far?null:{distance:c,point:ul.clone(),object:n}}function hl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ol),n.getVertexPosition(l,al),n.getVertexPosition(c,ll);let h=Ey(n,e,t,i,ol,al,ll,Op);if(h){let u=new H;ns.getBarycoord(Op,ol,al,ll,u),s&&(h.uv=ns.getInterpolatedAttribute(s,a,l,c,u,new Je)),r&&(h.uv1=ns.getInterpolatedAttribute(r,a,l,c,u,new Je)),o&&(h.normal=ns.getInterpolatedAttribute(o,a,l,c,u,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new H,materialIndex:0};ns.getNormal(ol,al,ll,f.normal),h.face=f,h.barycoord=u}return h}var mn=class n extends dt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function g(x,m,d,E,v,M,T,b,y,w,_){let S=M/y,A=T/w,I=M/2,N=T/2,L=b/2,B=y+1,Y=w+1,ie=0,k=0,G=new H;for(let se=0;se<Y;se++){let te=se*A-N;for(let ve=0;ve<B;ve++){let Se=ve*S-I;G[x]=Se*E,G[m]=te*v,G[d]=L,c.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[d]=b>0?1:-1,h.push(G.x,G.y,G.z),u.push(ve/y),u.push(1-se/w),ie+=1}}for(let se=0;se<w;se++)for(let te=0;te<y;te++){let ve=f+te+B*se,Se=f+te+B*(se+1),O=f+(te+1)+B*(se+1),W=f+(te+1)+B*se;l.push(ve,Se,W),l.push(Se,O,W),k+=6}a.addGroup(p,k,_),p+=k,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function lo(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Dn(n){let e={};for(let t=0;t<n.length;t++){let i=lo(n[t]);for(let s in i)e[s]=i[s]}return e}function wy(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xm(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var Cn={clone:lo,merge:Dn},Ty=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ay=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,St=class extends Tn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ty,this.fragmentShader=Ay,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=wy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},kl=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=ss}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Es=new H,Fp=new Je,Bp=new Je,en=class extends kl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Es.x,Es.y).multiplyScalar(-e/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Es.x,Es.y).multiplyScalar(-e/Es.z)}getViewSize(e,t){return this.getViewBounds(e,Fp,Bp),t.subVectors(Bp,Fp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Jr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},kr=-90,Hr=1,Lh=class extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(kr,Hr,e,t);s.layers=this.layers,this.add(s);let r=new en(kr,Hr,e,t);r.layers=this.layers,this.add(r);let o=new en(kr,Hr,e,t);o.layers=this.layers,this.add(o);let a=new en(kr,Hr,e,t);a.layers=this.layers,this.add(a);let l=new en(kr,Hr,e,t);l.layers=this.layers,this.add(l);let c=new en(kr,Hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ss)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Hl=class extends pn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:no,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Dh=class extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Hl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mn(5,5,5),r=new St({name:"CubemapFromEquirect",uniforms:lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:cn});r.uniforms.tEquirect.value=t;let o=new et(s,r),a=t.minFilter;return t.minFilter===ci&&(t.minFilter=Vn),new Lh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Lu=new H,Ry=new H,Cy=new mt,wi=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Lu.subVectors(i,t).cross(Ry.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Lu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Cy.getNormalMatrix(e),s=this.coplanarPoint(Lu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},rr=new Jn,fl=new H,ca=class{constructor(e=new wi,t=new wi,i=new wi,s=new wi,r=new wi,o=new wi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ss){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],E=s[13],v=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,m-p,M-d).normalize(),i[1].setComponents(l+r,f+c,m+p,M+d).normalize(),i[2].setComponents(l+o,f+h,m+g,M+E).normalize(),i[3].setComponents(l-o,f-h,m-g,M-E).normalize(),i[4].setComponents(l-a,f-u,m-x,M-v).normalize(),t===ss)i[5].setComponents(l+a,f+u,m+x,M+v).normalize();else if(t===Nl)i[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(fl.x=s.normal.x>0?e.max.x:e.min.x,fl.y=s.normal.y>0?e.max.y:e.min.y,fl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Py(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Xn=class n extends dt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){let E=d*f-o;for(let v=0;v<c;v++){let M=v*u-r;g.push(M,-E,0),x.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){let v=E+c*d,M=E+c*(d+1),T=E+1+c*(d+1),b=E+1+c*d;p.push(v,M,b),p.push(M,T,b)}this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Iy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ly=`#ifdef USE_ALPHAHASH
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
#endif`,Dy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ny=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fy=`#ifdef USE_AOMAP
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
#endif`,By=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zy=`#ifdef USE_BATCHING
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
#endif`,ky=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wy=`#ifdef USE_IRIDESCENCE
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
#endif`,Xy=`#ifdef USE_BUMPMAP
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
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,e_=`#define PI 3.141592653589793
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
} // validated`,t_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,n_=`vec3 transformedNormal = objectNormal;
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
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a_="gl_FragColor = linearToOutputTexel( gl_FragColor );",l_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c_=`#ifdef USE_ENVMAP
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
#endif`,u_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,h_=`#ifdef USE_ENVMAP
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
#endif`,f_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
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
#endif`,p_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v_=`#ifdef USE_GRADIENTMAP
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
}`,y_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,__=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b_=`uniform bool receiveShadow;
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
#endif`,S_=`#ifdef USE_ENVMAP
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
#endif`,E_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R_=`PhysicalMaterial material;
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
#endif`,C_=`struct PhysicalMaterial {
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
}`,P_=`
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
#endif`,I_=`#if defined( RE_IndirectDiffuse )
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
#endif`,L_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k_=`#if defined( USE_POINTS_UV )
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
#endif`,H_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q_=`#ifdef USE_MORPHTARGETS
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
#endif`,Y_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Z_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q_=`#ifdef USE_NORMALMAP
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
#endif`,e1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,o1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,m1=`float getShadowMask() {
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
}`,g1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x1=`#ifdef USE_SKINNING
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
#endif`,v1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y1=`#ifdef USE_SKINNING
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
#endif`,_1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,E1=`#ifdef USE_TRANSMISSION
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
#endif`,w1=`#ifdef USE_TRANSMISSION
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
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,P1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I1=`uniform sampler2D t2D;
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
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`#include <common>
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
}`,F1=`#if DEPTH_PACKING == 3200
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
}`,B1=`#define DISTANCE
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
}`,z1=`#define DISTANCE
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
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V1=`uniform float scale;
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
}`,G1=`uniform vec3 diffuse;
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
}`,W1=`#include <common>
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
}`,X1=`uniform vec3 diffuse;
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
}`,q1=`#define LAMBERT
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
}`,Y1=`#define LAMBERT
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
}`,$1=`#define MATCAP
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
}`,Z1=`#define MATCAP
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
}`,K1=`#define NORMAL
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
}`,j1=`#define NORMAL
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
}`,J1=`#define PHONG
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
}`,Q1=`#define PHONG
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
}`,eM=`#define STANDARD
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
}`,tM=`#define STANDARD
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
}`,nM=`#define TOON
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
}`,iM=`#define TOON
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
}`,sM=`uniform float size;
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
}`,rM=`uniform vec3 diffuse;
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
}`,oM=`#include <common>
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
}`,aM=`uniform vec3 color;
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
}`,lM=`uniform float rotation;
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
}`,cM=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:Iy,alphahash_pars_fragment:Ly,alphamap_fragment:Dy,alphamap_pars_fragment:Ny,alphatest_fragment:Uy,alphatest_pars_fragment:Oy,aomap_fragment:Fy,aomap_pars_fragment:By,batching_pars_vertex:zy,batching_vertex:ky,begin_vertex:Hy,beginnormal_vertex:Vy,bsdfs:Gy,iridescence_fragment:Wy,bumpmap_pars_fragment:Xy,clipping_planes_fragment:qy,clipping_planes_pars_fragment:Yy,clipping_planes_pars_vertex:$y,clipping_planes_vertex:Zy,color_fragment:Ky,color_pars_fragment:jy,color_pars_vertex:Jy,color_vertex:Qy,common:e_,cube_uv_reflection_fragment:t_,defaultnormal_vertex:n_,displacementmap_pars_vertex:i_,displacementmap_vertex:s_,emissivemap_fragment:r_,emissivemap_pars_fragment:o_,colorspace_fragment:a_,colorspace_pars_fragment:l_,envmap_fragment:c_,envmap_common_pars_fragment:u_,envmap_pars_fragment:h_,envmap_pars_vertex:f_,envmap_physical_pars_fragment:S_,envmap_vertex:d_,fog_vertex:p_,fog_pars_vertex:m_,fog_fragment:g_,fog_pars_fragment:x_,gradientmap_pars_fragment:v_,lightmap_pars_fragment:y_,lights_lambert_fragment:__,lights_lambert_pars_fragment:M_,lights_pars_begin:b_,lights_toon_fragment:E_,lights_toon_pars_fragment:w_,lights_phong_fragment:T_,lights_phong_pars_fragment:A_,lights_physical_fragment:R_,lights_physical_pars_fragment:C_,lights_fragment_begin:P_,lights_fragment_maps:I_,lights_fragment_end:L_,logdepthbuf_fragment:D_,logdepthbuf_pars_fragment:N_,logdepthbuf_pars_vertex:U_,logdepthbuf_vertex:O_,map_fragment:F_,map_pars_fragment:B_,map_particle_fragment:z_,map_particle_pars_fragment:k_,metalnessmap_fragment:H_,metalnessmap_pars_fragment:V_,morphinstance_vertex:G_,morphcolor_vertex:W_,morphnormal_vertex:X_,morphtarget_pars_vertex:q_,morphtarget_vertex:Y_,normal_fragment_begin:$_,normal_fragment_maps:Z_,normal_pars_fragment:K_,normal_pars_vertex:j_,normal_vertex:J_,normalmap_pars_fragment:Q_,clearcoat_normal_fragment_begin:e1,clearcoat_normal_fragment_maps:t1,clearcoat_pars_fragment:n1,iridescence_pars_fragment:i1,opaque_fragment:s1,packing:r1,premultiplied_alpha_fragment:o1,project_vertex:a1,dithering_fragment:l1,dithering_pars_fragment:c1,roughnessmap_fragment:u1,roughnessmap_pars_fragment:h1,shadowmap_pars_fragment:f1,shadowmap_pars_vertex:d1,shadowmap_vertex:p1,shadowmask_pars_fragment:m1,skinbase_vertex:g1,skinning_pars_vertex:x1,skinning_vertex:v1,skinnormal_vertex:y1,specularmap_fragment:_1,specularmap_pars_fragment:M1,tonemapping_fragment:b1,tonemapping_pars_fragment:S1,transmission_fragment:E1,transmission_pars_fragment:w1,uv_pars_fragment:T1,uv_pars_vertex:A1,uv_vertex:R1,worldpos_vertex:C1,background_vert:P1,background_frag:I1,backgroundCube_vert:L1,backgroundCube_frag:D1,cube_vert:N1,cube_frag:U1,depth_vert:O1,depth_frag:F1,distanceRGBA_vert:B1,distanceRGBA_frag:z1,equirect_vert:k1,equirect_frag:H1,linedashed_vert:V1,linedashed_frag:G1,meshbasic_vert:W1,meshbasic_frag:X1,meshlambert_vert:q1,meshlambert_frag:Y1,meshmatcap_vert:$1,meshmatcap_frag:Z1,meshnormal_vert:K1,meshnormal_frag:j1,meshphong_vert:J1,meshphong_frag:Q1,meshphysical_vert:eM,meshphysical_frag:tM,meshtoon_vert:nM,meshtoon_frag:iM,points_vert:sM,points_frag:rM,shadow_vert:oM,shadow_frag:aM,sprite_vert:lM,sprite_frag:cM},Ze={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Ni={basic:{uniforms:Dn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Dn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Ne(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Dn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Dn([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Dn([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new Ne(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Dn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Dn([Ze.points,Ze.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Dn([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Dn([Ze.common,Ze.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Dn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Dn([Ze.sprite,Ze.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:Dn([Ze.common,Ze.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:Dn([Ze.lights,Ze.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ni.physical={uniforms:Dn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var dl={r:0,b:0,g:0},or=new Pi,uM=new Qe;function hM(n,e,t,i,s,r,o){let a=new Ne(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?t:e).get(v)),v}function x(E){let v=!1,M=g(E);M===null?d(a,l):M&&M.isColor&&(d(M,1),v=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,v){let M=g(v);M&&(M.isCubeTexture||M.mapping===uc)?(h===void 0&&(h=new et(new mn(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:lo(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),or.copy(v.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(uM.makeRotationFromEuler(or)),h.material.toneMapped=yt.getTransfer(M.colorSpace)!==Ot,(u!==M||f!==M.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,p=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new et(new Xn(2,2),new St({name:"BackgroundMaterial",uniforms:lo(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=yt.getTransfer(M.colorSpace)!==Ot,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,p=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,v){E.getRGB(dl,Xm(n)),i.buffers.color.setClear(dl.r,dl.g,dl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(a,l)},render:x,addToRenderList:m}}function fM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(S,A,I,N,L){let B=!1,Y=u(N,I,A);r!==Y&&(r=Y,c(r.object)),B=p(S,N,I,L),B&&g(S,N,I,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,M(S,A,I,N),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function u(S,A,I){let N=I.wireframe===!0,L=i[S.id];L===void 0&&(L={},i[S.id]=L);let B=L[A.id];B===void 0&&(B={},L[A.id]=B);let Y=B[N];return Y===void 0&&(Y=f(l()),B[N]=Y),Y}function f(S){let A=[],I=[],N=[];for(let L=0;L<t;L++)A[L]=0,I[L]=0,N[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:I,attributeDivisors:N,object:S,attributes:{},index:null}}function p(S,A,I,N){let L=r.attributes,B=A.attributes,Y=0,ie=I.getAttributes();for(let k in ie)if(ie[k].location>=0){let se=L[k],te=B[k];if(te===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),se===void 0||se.attribute!==te||te&&se.data!==te.data)return!0;Y++}return r.attributesNum!==Y||r.index!==N}function g(S,A,I,N){let L={},B=A.attributes,Y=0,ie=I.getAttributes();for(let k in ie)if(ie[k].location>=0){let se=B[k];se===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(se=S.instanceColor));let te={};te.attribute=se,se&&se.data&&(te.data=se.data),L[k]=te,Y++}r.attributes=L,r.attributesNum=Y,r.index=N}function x(){let S=r.newAttributes;for(let A=0,I=S.length;A<I;A++)S[A]=0}function m(S){d(S,0)}function d(S,A){let I=r.newAttributes,N=r.enabledAttributes,L=r.attributeDivisors;I[S]=1,N[S]===0&&(n.enableVertexAttribArray(S),N[S]=1),L[S]!==A&&(n.vertexAttribDivisor(S,A),L[S]=A)}function E(){let S=r.newAttributes,A=r.enabledAttributes;for(let I=0,N=A.length;I<N;I++)A[I]!==S[I]&&(n.disableVertexAttribArray(I),A[I]=0)}function v(S,A,I,N,L,B,Y){Y===!0?n.vertexAttribIPointer(S,A,I,L,B):n.vertexAttribPointer(S,A,I,N,L,B)}function M(S,A,I,N){x();let L=N.attributes,B=I.getAttributes(),Y=A.defaultAttributeValues;for(let ie in B){let k=B[ie];if(k.location>=0){let G=L[ie];if(G===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(G=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(G=S.instanceColor)),G!==void 0){let se=G.normalized,te=G.itemSize,ve=e.get(G);if(ve===void 0)continue;let Se=ve.buffer,O=ve.type,W=ve.bytesPerElement,X=O===n.INT||O===n.UNSIGNED_INT||G.gpuType===ff;if(G.isInterleavedBufferAttribute){let J=G.data,V=J.stride,$=G.offset;if(J.isInstancedInterleavedBuffer){for(let fe=0;fe<k.locationSize;fe++)d(k.location+fe,J.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let fe=0;fe<k.locationSize;fe++)m(k.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let fe=0;fe<k.locationSize;fe++)v(k.location+fe,te/k.locationSize,O,se,V*W,($+te/k.locationSize*fe)*W,X)}else{if(G.isInstancedBufferAttribute){for(let J=0;J<k.locationSize;J++)d(k.location+J,G.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let J=0;J<k.locationSize;J++)m(k.location+J);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let J=0;J<k.locationSize;J++)v(k.location+J,te/k.locationSize,O,se,te*W,te/k.locationSize*J*W,X)}}else if(Y!==void 0){let se=Y[ie];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(k.location,se);break;case 3:n.vertexAttrib3fv(k.location,se);break;case 4:n.vertexAttrib4fv(k.location,se);break;default:n.vertexAttrib1fv(k.location,se)}}}}E()}function T(){w();for(let S in i){let A=i[S];for(let I in A){let N=A[I];for(let L in N)h(N[L].object),delete N[L];delete A[I]}delete i[S]}}function b(S){if(i[S.id]===void 0)return;let A=i[S.id];for(let I in A){let N=A[I];for(let L in N)h(N[L].object),delete N[L];delete A[I]}delete i[S.id]}function y(S){for(let A in i){let I=i[A];if(I[S.id]===void 0)continue;let N=I[S.id];for(let L in N)h(N[L].object),delete N[L];delete I[S.id]}}function w(){_(),o=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:_,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function dM(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function l(c,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(y){return!(y!==Gn&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let w=y===gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Ci&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==Ai&&!w)}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:T,maxSamples:b}}function mM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new wi,a=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:i,v=E*4,M=d.clippingState||null;l.value=M,M=h(g,f,v,p);for(let T=0;T!==v;++T)M[T]=t[T];d.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let d=p+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,M=p;v!==x;++v,M+=4)o.copy(u[v]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function gM(n){let e=new WeakMap;function t(o,a){return a===eh?o.mapping=no:a===th&&(o.mapping=io),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===eh||a===th)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Dh(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Is=class extends kl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zr=4,zp=[.125,.215,.35,.446,.526,.582],cr=20,Du=new Is,kp=new Ne,Nu=null,Uu=0,Ou=0,Fu=!1,lr=(1+Math.sqrt(5))/2,Vr=1/lr,Hp=[new H(-lr,Vr,0),new H(lr,Vr,0),new H(-Vr,0,lr),new H(Vr,0,lr),new H(0,lr,-Vr),new H(0,lr,Vr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],co=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Nu=this._renderer.getRenderTarget(),Uu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),Fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nu,Uu,Ou),this._renderer.xr.enabled=Fu,e.scissorTest=!1,pl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===no||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nu=this._renderer.getRenderTarget(),Uu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),Fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:gn,format:Gn,colorSpace:Rn,depthBuffer:!1},s=Vp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vp(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xM(r)),this._blurMaterial=vM(r,e,t)}return s}_compileMaterial(e){let t=new et(this._lodPlanes[0],e);this._renderer.compile(t,Du)}_sceneToCubeUV(e,t,i,s){let a=new en(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(kp),h.toneMapping=As,h.autoClear=!1;let p=new Lt({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new et(new mn,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(kp),x=!0);for(let d=0;d<6;d++){let E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let v=this._cubeSize;pl(s,E*v,d>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===no||e.mapping===io;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;pl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Du)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hp[(s-r-1)%Hp.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new et(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*cr-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):cr;m>cr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cr}`);let d=[],E=0;for(let y=0;y<cr;++y){let w=y/x,_=Math.exp(-w*w/2);d.push(_),y===0?E+=_:y<m&&(E+=2*_)}for(let y=0;y<d.length;y++)d[y]=d[y]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;let M=this._sizeLods[s],T=3*M*(s>v-Zr?s-v+Zr:0),b=4*(this._cubeSize-M);pl(t,T,b,3*M,2*M),l.setRenderTarget(t),l.render(u,Du)}};function xM(n){let e=[],t=[],i=[],s=n,r=n-Zr+1+zp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Zr?l=zp[o-n+Zr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,d=1,E=new Float32Array(x*g*p),v=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let b=0;b<p;b++){let y=b%3*2/3-1,w=b>2?0:-1,_=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];E.set(_,x*g*b),v.set(f,m*g*b);let S=[b,b,b,b,b,b];M.set(S,d*g*b)}let T=new dt;T.setAttribute("position",new _t(E,x)),T.setAttribute("uv",new _t(v,m)),T.setAttribute("faceIndex",new _t(M,d)),e.push(T),s>Zr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Vp(n,e,t){let i=new tn(n,e,t);return i.texture.mapping=uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function vM(n,e,t){let i=new Float32Array(cr),s=new H(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_f(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Gp(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_f(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Wp(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function _f(){return`

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
	`}function yM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===eh||l===th,h=l===no||l===io;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new co(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new co(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function _M(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ea("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function MM(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,d=x.length;m<d;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let E=p.array;x=p.version;for(let v=0,M=E.length;v<M;v+=3){let T=E[v+0],b=E[v+1],y=E[v+2];f.push(T,b,b,y,y,T)}}else if(g!==void 0){let E=g.array;x=g.version;for(let v=0,M=E.length/3-1;v<M;v+=3){let T=v+0,b=v+1,y=v+2;f.push(T,b,b,y,y,T)}}else return;let m=new(Gm(f)?zl:Bl)(f,1);m.version=x;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function bM(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),t.update(p,i,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function u(f,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,x,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*x[E];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function SM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function EM(n,e,t){let i=new WeakMap,s=new Tt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let _=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let M=a.attributes.position.count*v,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let b=new Float32Array(M*T*4*u),y=new Ol(b,M,T,u);y.type=Ai,y.needsUpdate=!0;let w=v*4;for(let S=0;S<u;S++){let A=m[S],I=d[S],N=E[S],L=M*T*4*S;for(let B=0;B<A.count;B++){let Y=B*w;p===!0&&(s.fromBufferAttribute(A,B),b[L+Y+0]=s.x,b[L+Y+1]=s.y,b[L+Y+2]=s.z,b[L+Y+3]=0),g===!0&&(s.fromBufferAttribute(I,B),b[L+Y+4]=s.x,b[L+Y+5]=s.y,b[L+Y+6]=s.z,b[L+Y+7]=0),x===!0&&(s.fromBufferAttribute(N,B),b[L+Y+8]=s.x,b[L+Y+9]=s.y,b[L+Y+10]=s.z,b[L+Y+11]=N.itemSize===4?s.w:1)}}f={count:u,texture:y,size:new Je(M,T)},i.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function wM(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var uo=class extends pn{constructor(e,t,i,s,r,o,a,l,c,h=jr){if(h!==jr&&h!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===jr&&(i=ur),i===void 0&&h===Cs&&(i=Rs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ym=new pn,Xp=new uo(1,1),$m=new Ol,Zm=new Ih,Km=new Hl,qp=[],Yp=[],$p=new Float32Array(16),Zp=new Float32Array(9),Kp=new Float32Array(4);function _o(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=qp[s];if(r===void 0&&(r=new Float32Array(s),qp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function hn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function fn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pc(n,e){let t=Yp[e];t===void 0&&(t=new Int32Array(e),Yp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function TM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function AM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2fv(this.addr,e),fn(t,e)}}function RM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;n.uniform3fv(this.addr,e),fn(t,e)}}function CM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4fv(this.addr,e),fn(t,e)}}function PM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,i))return;Kp.set(i),n.uniformMatrix2fv(this.addr,!1,Kp),fn(t,i)}}function IM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,i))return;Zp.set(i),n.uniformMatrix3fv(this.addr,!1,Zp),fn(t,i)}}function LM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,i))return;$p.set(i),n.uniformMatrix4fv(this.addr,!1,$p),fn(t,i)}}function DM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function NM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2iv(this.addr,e),fn(t,e)}}function UM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3iv(this.addr,e),fn(t,e)}}function OM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4iv(this.addr,e),fn(t,e)}}function FM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function BM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2uiv(this.addr,e),fn(t,e)}}function zM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3uiv(this.addr,e),fn(t,e)}}function kM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4uiv(this.addr,e),fn(t,e)}}function HM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Xp.compareFunction=Hm,r=Xp):r=Ym,t.setTexture2D(e||r,s)}function VM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Zm,s)}function GM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Km,s)}function WM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||$m,s)}function XM(n){switch(n){case 5126:return TM;case 35664:return AM;case 35665:return RM;case 35666:return CM;case 35674:return PM;case 35675:return IM;case 35676:return LM;case 5124:case 35670:return DM;case 35667:case 35671:return NM;case 35668:case 35672:return UM;case 35669:case 35673:return OM;case 5125:return FM;case 36294:return BM;case 36295:return zM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return GM;case 36289:case 36303:case 36311:case 36292:return WM}}function qM(n,e){n.uniform1fv(this.addr,e)}function YM(n,e){let t=_o(e,this.size,2);n.uniform2fv(this.addr,t)}function $M(n,e){let t=_o(e,this.size,3);n.uniform3fv(this.addr,t)}function ZM(n,e){let t=_o(e,this.size,4);n.uniform4fv(this.addr,t)}function KM(n,e){let t=_o(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jM(n,e){let t=_o(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function JM(n,e){let t=_o(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function QM(n,e){n.uniform1iv(this.addr,e)}function eb(n,e){n.uniform2iv(this.addr,e)}function tb(n,e){n.uniform3iv(this.addr,e)}function nb(n,e){n.uniform4iv(this.addr,e)}function ib(n,e){n.uniform1uiv(this.addr,e)}function sb(n,e){n.uniform2uiv(this.addr,e)}function rb(n,e){n.uniform3uiv(this.addr,e)}function ob(n,e){n.uniform4uiv(this.addr,e)}function ab(n,e,t){let i=this.cache,s=e.length,r=pc(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ym,r[o])}function lb(n,e,t){let i=this.cache,s=e.length,r=pc(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Zm,r[o])}function cb(n,e,t){let i=this.cache,s=e.length,r=pc(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Km,r[o])}function ub(n,e,t){let i=this.cache,s=e.length,r=pc(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||$m,r[o])}function hb(n){switch(n){case 5126:return qM;case 35664:return YM;case 35665:return $M;case 35666:return ZM;case 35674:return KM;case 35675:return jM;case 35676:return JM;case 5124:case 35670:return QM;case 35667:case 35671:return eb;case 35668:case 35672:return tb;case 35669:case 35673:return nb;case 5125:return ib;case 36294:return sb;case 36295:return rb;case 36296:return ob;case 35678:case 36198:case 36298:case 36306:case 35682:return ab;case 35679:case 36299:case 36307:return lb;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return ub}}var Nh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=XM(t.type)}},Uh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hb(t.type)}},Oh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Bu=/(\w+)(\])?(\[|\.)?/g;function jp(n,e){n.seq.push(e),n.map[e.id]=e}function fb(n,e,t){let i=n.name,s=i.length;for(Bu.lastIndex=0;;){let r=Bu.exec(i),o=Bu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){jp(t,c===void 0?new Nh(a,n,e):new Uh(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Oh(a),jp(t,u)),t=u}}}var eo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);fb(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Jp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var db=37297,pb=0;function mb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Qp=new mt;function gb(n){yt._getMatrix(Qp,yt.workingColorSpace,n);let e=`mat3( ${Qp.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(n)){case dc:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function em(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+mb(n.getShaderSource(e),o)}else return s}function xb(n,e){let t=gb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vb(n,e){let t;switch(e){case of:t="Linear";break;case af:t="Reinhard";break;case lf:t="Cineon";break;case ga:t="ACESFilmic";break;case cf:t="AgX";break;case uf:t="Neutral";break;case Nv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ml=new H;function yb(){yt.getLuminanceCoefficients(ml);let n=ml.x.toFixed(4),e=ml.y.toFixed(4),t=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _b(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function Mb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ta(n){return n!==""}function tm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(n){return n.replace(Sb,wb)}var Eb=new Map;function wb(n,e){let t=gt[e];if(t===void 0){let i=Eb.get(e);if(i!==void 0)t=gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fh(t)}var Tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function im(n){return n.replace(Tb,Ab)}function Ab(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sm(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Rb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ac?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===vv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ts&&(e="SHADOWMAP_TYPE_VSM"),e}function Cb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case no:case io:e="ENVMAP_TYPE_CUBE";break;case uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pb(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===io&&(e="ENVMAP_MODE_REFRACTION"),e}function Ib(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rf:e="ENVMAP_BLENDING_MULTIPLY";break;case Lv:e="ENVMAP_BLENDING_MIX";break;case Dv:e="ENVMAP_BLENDING_ADD";break}return e}function Lb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Db(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Rb(t),c=Cb(t),h=Pb(t),u=Ib(t),f=Lb(t),p=_b(t),g=Mb(r),x=s.createProgram(),m,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ta).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ta).join(`
`),d.length>0&&(d+=`
`)):(m=[sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),d=[sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==As?"#define TONE_MAPPING":"",t.toneMapping!==As?gt.tonemapping_pars_fragment:"",t.toneMapping!==As?vb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,xb("linearToOutputTexel",t.outputColorSpace),yb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),o=Fh(o),o=tm(o,t),o=nm(o,t),a=Fh(a),a=tm(a,t),a=nm(a,t),o=im(o),a=im(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let v=E+m+o,M=E+d+a,T=Jp(s,s.VERTEX_SHADER,v),b=Jp(s,s.FRAGMENT_SHADER,M);s.attachShader(x,T),s.attachShader(x,b),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function y(A){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(x).trim(),N=s.getShaderInfoLog(T).trim(),L=s.getShaderInfoLog(b).trim(),B=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,T,b);else{let ie=em(s,T,"vertex"),k=em(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+ie+`
`+k)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(N===""||L==="")&&(Y=!1);Y&&(A.diagnostics={runnable:B,programLog:I,vertexShader:{log:N,prefix:m},fragmentShader:{log:L,prefix:d}})}s.deleteShader(T),s.deleteShader(b),w=new eo(s,x),_=bb(s,x)}let w;this.getUniforms=function(){return w===void 0&&y(this),w};let _;this.getAttributes=function(){return _===void 0&&y(this),_};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,db)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=b,this}var Nb=0,Bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new zh(e),t.set(e,i)),i}},zh=class{constructor(e){this.id=Nb++,this.code=e,this.usedTimes=0}};function Ub(n,e,t,i,s,r,o){let a=new Fl,l=new Bh,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,S,A,I,N){let L=I.fog,B=N.geometry,Y=_.isMeshStandardMaterial?I.environment:null,ie=(_.isMeshStandardMaterial?t:e).get(_.envMap||Y),k=ie&&ie.mapping===uc?ie.image.height:null,G=g[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let se=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,te=se!==void 0?se.length:0,ve=0;B.morphAttributes.position!==void 0&&(ve=1),B.morphAttributes.normal!==void 0&&(ve=2),B.morphAttributes.color!==void 0&&(ve=3);let Se,O,W,X;if(G){let Ve=Ni[G];Se=Ve.vertexShader,O=Ve.fragmentShader}else Se=_.vertexShader,O=_.fragmentShader,l.update(_),W=l.getVertexShaderID(_),X=l.getFragmentShaderID(_);let J=n.getRenderTarget(),V=n.state.buffers.depth.getReversed(),$=N.isInstancedMesh===!0,fe=N.isBatchedMesh===!0,ge=!!_.map,Fe=!!_.matcap,Ge=!!ie,Q=!!_.aoMap,oe=!!_.lightMap,Ee=!!_.bumpMap,be=!!_.normalMap,Te=!!_.displacementMap,Ue=!!_.emissiveMap,Pe=!!_.metalnessMap,U=!!_.roughnessMap,R=_.anisotropy>0,re=_.clearcoat>0,_e=_.dispersion>0,pe=_.iridescence>0,me=_.sheen>0,Be=_.transmission>0,De=R&&!!_.anisotropyMap,Oe=re&&!!_.clearcoatMap,Ye=re&&!!_.clearcoatNormalMap,Ae=re&&!!_.clearcoatRoughnessMap,ze=pe&&!!_.iridescenceMap,xe=pe&&!!_.iridescenceThicknessMap,ke=me&&!!_.sheenColorMap,P=me&&!!_.sheenRoughnessMap,q=!!_.specularMap,z=!!_.specularColorMap,ne=!!_.specularIntensityMap,C=Be&&!!_.transmissionMap,Z=Be&&!!_.thicknessMap,F=!!_.gradientMap,j=!!_.alphaMap,K=_.alphaTest>0,ue=!!_.alphaHash,we=!!_.extensions,He=As;_.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(He=n.toneMapping);let We={shaderID:G,shaderType:_.type,shaderName:_.name,vertexShader:Se,fragmentShader:O,defines:_.defines,customVertexShaderID:W,customFragmentShaderID:X,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:fe,batchingColor:fe&&N._colorsTexture!==null,instancing:$,instancingColor:$&&N.instanceColor!==null,instancingMorph:$&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Rn,alphaToCoverage:!!_.alphaToCoverage,map:ge,matcap:Fe,envMap:Ge,envMapMode:Ge&&ie.mapping,envMapCubeUVHeight:k,aoMap:Q,lightMap:oe,bumpMap:Ee,normalMap:be,displacementMap:f&&Te,emissiveMap:Ue,normalMapObjectSpace:be&&_.normalMapType===zv,normalMapTangentSpace:be&&_.normalMapType===fc,metalnessMap:Pe,roughnessMap:U,anisotropy:R,anisotropyMap:De,clearcoat:re,clearcoatMap:Oe,clearcoatNormalMap:Ye,clearcoatRoughnessMap:Ae,dispersion:_e,iridescence:pe,iridescenceMap:ze,iridescenceThicknessMap:xe,sheen:me,sheenColorMap:ke,sheenRoughnessMap:P,specularMap:q,specularColorMap:z,specularIntensityMap:ne,transmission:Be,transmissionMap:C,thicknessMap:Z,gradientMap:F,opaque:_.transparent===!1&&_.blending===Kr&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:K,alphaHash:ue,combine:_.combine,mapUv:ge&&x(_.map.channel),aoMapUv:Q&&x(_.aoMap.channel),lightMapUv:oe&&x(_.lightMap.channel),bumpMapUv:Ee&&x(_.bumpMap.channel),normalMapUv:be&&x(_.normalMap.channel),displacementMapUv:Te&&x(_.displacementMap.channel),emissiveMapUv:Ue&&x(_.emissiveMap.channel),metalnessMapUv:Pe&&x(_.metalnessMap.channel),roughnessMapUv:U&&x(_.roughnessMap.channel),anisotropyMapUv:De&&x(_.anisotropyMap.channel),clearcoatMapUv:Oe&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:P&&x(_.sheenRoughnessMap.channel),specularMapUv:q&&x(_.specularMap.channel),specularColorMapUv:z&&x(_.specularColorMap.channel),specularIntensityMapUv:ne&&x(_.specularIntensityMap.channel),transmissionMapUv:C&&x(_.transmissionMap.channel),thicknessMapUv:Z&&x(_.thicknessMap.channel),alphaMapUv:j&&x(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(be||R),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(ge||j),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:V,skinning:N.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ve,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:ge&&_.map.isVideoTexture===!0&&yt.getTransfer(_.map.colorSpace)===Ot,decodeVideoTextureEmissive:Ue&&_.emissiveMap.isVideoTexture===!0&&yt.getTransfer(_.emissiveMap.colorSpace)===Ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pt,flipSided:_.side===an,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:we&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&_.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function d(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)S.push(A),S.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(E(S,_),v(S,_),S.push(n.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function E(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function v(_,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),_.push(a.mask)}function M(_){let S=g[_.type],A;if(S){let I=Ni[S];A=Cn.clone(I.uniforms)}else A=_.uniforms;return A}function T(_,S){let A;for(let I=0,N=h.length;I<N;I++){let L=h[I];if(L.cacheKey===S){A=L,++A.usedTimes;break}}return A===void 0&&(A=new Db(n,S,_,r),h.push(A)),A}function b(_){if(--_.usedTimes===0){let S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),_.destroy()}}function y(_){l.remove(_)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:T,releaseProgram:b,releaseShaderCache:y,programs:h,dispose:w}}function Ob(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Fb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function rm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function om(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,p,g,x,m){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),e++,d}function a(u,f,p,g,x,m){let d=o(u,f,p,g,x,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(u,f,p,g,x,m){let d=o(u,f,p,g,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||Fb),i.length>1&&i.sort(f||rm),s.length>1&&s.sort(f||rm)}function h(){for(let u=e,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Bb(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new om,n.set(i,[o])):s>=r.length?(o=new om,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function zb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ne};break;case"SpotLight":t={position:new H,direction:new H,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function kb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Hb=0;function Vb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Gb(n){let e=new zb,t=kb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);let s=new H,r=new Qe,o=new Qe;function a(c){let h=0,u=0,f=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,E=0,v=0,M=0,T=0,b=0,y=0;c.sort(Vb);for(let _=0,S=c.length;_<S;_++){let A=c[_],I=A.color,N=A.intensity,L=A.distance,B=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=I.r*N,u+=I.g*N,f+=I.b*N;else if(A.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(A.sh.coefficients[Y],N);y++}else if(A.isDirectionalLight){let Y=e.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let ie=A.shadow,k=t.get(A);k.shadowIntensity=ie.intensity,k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=A.shadow.matrix,E++}i.directional[p]=Y,p++}else if(A.isSpotLight){let Y=e.get(A);Y.position.setFromMatrixPosition(A.matrixWorld),Y.color.copy(I).multiplyScalar(N),Y.distance=L,Y.coneCos=Math.cos(A.angle),Y.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),Y.decay=A.decay,i.spot[x]=Y;let ie=A.shadow;if(A.map&&(i.spotLightMap[T]=A.map,T++,ie.updateMatrices(A),A.castShadow&&b++),i.spotLightMatrix[x]=ie.matrix,A.castShadow){let k=t.get(A);k.shadowIntensity=ie.intensity,k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=B,M++}x++}else if(A.isRectAreaLight){let Y=e.get(A);Y.color.copy(I).multiplyScalar(N),Y.halfWidth.set(A.width*.5,0,0),Y.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=Y,m++}else if(A.isPointLight){let Y=e.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),Y.distance=A.distance,Y.decay=A.decay,A.castShadow){let ie=A.shadow,k=t.get(A);k.shadowIntensity=ie.intensity,k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,k.shadowCameraNear=ie.camera.near,k.shadowCameraFar=ie.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=A.shadow.matrix,v++}i.point[g]=Y,g++}else if(A.isHemisphereLight){let Y=e.get(A);Y.skyColor.copy(A.color).multiplyScalar(N),Y.groundColor.copy(A.groundColor).multiplyScalar(N),i.hemi[d]=Y,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ze.LTC_FLOAT_1,i.rectAreaLTC2=Ze.LTC_FLOAT_2):(i.rectAreaLTC1=Ze.LTC_HALF_1,i.rectAreaLTC2=Ze.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let w=i.hash;(w.directionalLength!==p||w.pointLength!==g||w.spotLength!==x||w.rectAreaLength!==m||w.hemiLength!==d||w.numDirectionalShadows!==E||w.numPointShadows!==v||w.numSpotShadows!==M||w.numSpotMaps!==T||w.numLightProbes!==y)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=y,w.directionalLength=p,w.pointLength=g,w.spotLength=x,w.rectAreaLength=m,w.hemiLength=d,w.numDirectionalShadows=E,w.numPointShadows=v,w.numSpotShadows=M,w.numSpotMaps=T,w.numLightProbes=y,i.version=Hb++)}function l(c,h){let u=0,f=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){let v=c[d];if(v.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(v.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let M=i.hemi[x];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function am(n){let e=new Gb(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Wb(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new am(n),e.set(s,[a])):r>=o.length?(a=new am(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var kh=class extends Tn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Fv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hh=class extends Tn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Xb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qb=`uniform sampler2D shadow_pass;
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
}`;function Yb(n,e,t){let i=new ca,s=new Je,r=new Je,o=new Tt,a=new kh({depthPacking:Bv}),l=new Hh,c={},h=t.maxTextureSize,u={[Ui]:an,[an]:Ui,[Pt]:Pt},f=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Xb,fragmentShader:qb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new dt;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new et(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let d=this.type;this.render=function(b,y,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let _=n.getRenderTarget(),S=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),I=n.state;I.setBlending(cn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let N=d!==ts&&this.type===ts,L=d===ts&&this.type!==ts;for(let B=0,Y=b.length;B<Y;B++){let ie=b[B],k=ie.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let G=k.getFrameExtents();if(s.multiply(G),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,k.mapSize.y=r.y)),k.map===null||N===!0||L===!0){let te=this.type!==ts?{minFilter:sn,magFilter:sn}:{};k.map!==null&&k.map.dispose(),k.map=new tn(s.x,s.y,te),k.map.texture.name=ie.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();let se=k.getViewportCount();for(let te=0;te<se;te++){let ve=k.getViewport(te);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),I.viewport(o),k.updateMatrices(ie,te),i=k.getFrustum(),M(y,w,k.camera,ie,this.type)}k.isPointLightShadow!==!0&&this.type===ts&&E(k,w),k.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(_,S,A)};function E(b,y){let w=e.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new tn(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(y,null,w,f,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(y,null,w,p,x,null)}function v(b,y,w,_){let S=null,A=w.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)S=A;else if(S=w.isPointLight===!0?l:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){let I=S.uuid,N=y.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let B=L[N];B===void 0&&(B=S.clone(),L[N]=B,y.addEventListener("dispose",T)),S=B}if(S.visible=y.visible,S.wireframe=y.wireframe,_===ts?S.side=y.shadowSide!==null?y.shadowSide:y.side:S.side=y.shadowSide!==null?y.shadowSide:u[y.side],S.alphaMap=y.alphaMap,S.alphaTest=y.alphaTest,S.map=y.map,S.clipShadows=y.clipShadows,S.clippingPlanes=y.clippingPlanes,S.clipIntersection=y.clipIntersection,S.displacementMap=y.displacementMap,S.displacementScale=y.displacementScale,S.displacementBias=y.displacementBias,S.wireframeLinewidth=y.wireframeLinewidth,S.linewidth=y.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let I=n.properties.get(S);I.light=w}return S}function M(b,y,w,_,S){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===ts)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,b.matrixWorld);let N=e.update(b),L=b.material;if(Array.isArray(L)){let B=N.groups;for(let Y=0,ie=B.length;Y<ie;Y++){let k=B[Y],G=L[k.materialIndex];if(G&&G.visible){let se=v(b,G,_,S);b.onBeforeShadow(n,b,y,w,N,se,k),n.renderBufferDirect(w,null,N,se,b,k),b.onAfterShadow(n,b,y,w,N,se,k)}}}else if(L.visible){let B=v(b,L,_,S);b.onBeforeShadow(n,b,y,w,N,B,null),n.renderBufferDirect(w,null,N,B,b,null),b.onAfterShadow(n,b,y,w,N,B,null)}}let I=b.children;for(let N=0,L=I.length;N<L;N++)M(I[N],y,w,_,S)}function T(b){b.target.removeEventListener("dispose",T);for(let w in c){let _=c[w],S=b.target.uuid;S in _&&(_[S].dispose(),delete _[S])}}}var $b={[Yu]:$u,[Zu]:Ju,[Ku]:Qu,[to]:ju,[$u]:Yu,[Ju]:Zu,[Qu]:Ku,[ju]:to};function Zb(n,e){function t(){let C=!1,Z=new Tt,F=null,j=new Tt(0,0,0,0);return{setMask:function(K){F!==K&&!C&&(n.colorMask(K,K,K,K),F=K)},setLocked:function(K){C=K},setClear:function(K,ue,we,He,We){We===!0&&(K*=He,ue*=He,we*=He),Z.set(K,ue,we,He),j.equals(Z)===!1&&(n.clearColor(K,ue,we,He),j.copy(Z))},reset:function(){C=!1,F=null,j.set(-1,0,0,0)}}}function i(){let C=!1,Z=!1,F=null,j=null,K=null;return{setReversed:function(ue){if(Z!==ue){let we=e.get("EXT_clip_control");Z?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT);let He=K;K=null,this.setClear(He)}Z=ue},getReversed:function(){return Z},setTest:function(ue){ue?J(n.DEPTH_TEST):V(n.DEPTH_TEST)},setMask:function(ue){F!==ue&&!C&&(n.depthMask(ue),F=ue)},setFunc:function(ue){if(Z&&(ue=$b[ue]),j!==ue){switch(ue){case Yu:n.depthFunc(n.NEVER);break;case $u:n.depthFunc(n.ALWAYS);break;case Zu:n.depthFunc(n.LESS);break;case to:n.depthFunc(n.LEQUAL);break;case Ku:n.depthFunc(n.EQUAL);break;case ju:n.depthFunc(n.GEQUAL);break;case Ju:n.depthFunc(n.GREATER);break;case Qu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=ue}},setLocked:function(ue){C=ue},setClear:function(ue){K!==ue&&(Z&&(ue=1-ue),n.clearDepth(ue),K=ue)},reset:function(){C=!1,F=null,j=null,K=null,Z=!1}}}function s(){let C=!1,Z=null,F=null,j=null,K=null,ue=null,we=null,He=null,We=null;return{setTest:function(Ve){C||(Ve?J(n.STENCIL_TEST):V(n.STENCIL_TEST))},setMask:function(Ve){Z!==Ve&&!C&&(n.stencilMask(Ve),Z=Ve)},setFunc:function(Ve,ee,de){(F!==Ve||j!==ee||K!==de)&&(n.stencilFunc(Ve,ee,de),F=Ve,j=ee,K=de)},setOp:function(Ve,ee,de){(ue!==Ve||we!==ee||He!==de)&&(n.stencilOp(Ve,ee,de),ue=Ve,we=ee,He=de)},setLocked:function(Ve){C=Ve},setClear:function(Ve){We!==Ve&&(n.clearStencil(Ve),We=Ve)},reset:function(){C=!1,Z=null,F=null,j=null,K=null,ue=null,we=null,He=null,We=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,E=null,v=null,M=null,T=null,b=null,y=new Ne(0,0,0),w=0,_=!1,S=null,A=null,I=null,N=null,L=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ie=0,k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(k)[1]),Y=ie>=1):k.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),Y=ie>=2);let G=null,se={},te=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),Se=new Tt().fromArray(te),O=new Tt().fromArray(ve);function W(C,Z,F,j){let K=new Uint8Array(4),ue=n.createTexture();n.bindTexture(C,ue),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<F;we++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(Z,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,K):n.texImage2D(Z+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,K);return ue}let X={};X[n.TEXTURE_2D]=W(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=W(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=W(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=W(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(n.DEPTH_TEST),o.setFunc(to),Ee(!1),be(cp),J(n.CULL_FACE),Q(cn);function J(C){h[C]!==!0&&(n.enable(C),h[C]=!0)}function V(C){h[C]!==!1&&(n.disable(C),h[C]=!1)}function $(C,Z){return u[C]!==Z?(n.bindFramebuffer(C,Z),u[C]=Z,C===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Z),C===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Z),!0):!1}function fe(C,Z){let F=p,j=!1;if(C){F=f.get(Z),F===void 0&&(F=[],f.set(Z,F));let K=C.textures;if(F.length!==K.length||F[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,we=K.length;ue<we;ue++)F[ue]=n.COLOR_ATTACHMENT0+ue;F.length=K.length,j=!0}}else F[0]!==n.BACK&&(F[0]=n.BACK,j=!0);j&&n.drawBuffers(F)}function ge(C){return g!==C?(n.useProgram(C),g=C,!0):!1}let Fe={[Hn]:n.FUNC_ADD,[yv]:n.FUNC_SUBTRACT,[_v]:n.FUNC_REVERSE_SUBTRACT};Fe[Mv]=n.MIN,Fe[bv]=n.MAX;let Ge={[yo]:n.ZERO,[sf]:n.ONE,[Sv]:n.SRC_COLOR,[qu]:n.SRC_ALPHA,[Av]:n.SRC_ALPHA_SATURATE,[cc]:n.DST_COLOR,[lc]:n.DST_ALPHA,[Ev]:n.ONE_MINUS_SRC_COLOR,[ra]:n.ONE_MINUS_SRC_ALPHA,[Tv]:n.ONE_MINUS_DST_COLOR,[wv]:n.ONE_MINUS_DST_ALPHA,[Rv]:n.CONSTANT_COLOR,[Cv]:n.ONE_MINUS_CONSTANT_COLOR,[Pv]:n.CONSTANT_ALPHA,[Iv]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(C,Z,F,j,K,ue,we,He,We,Ve){if(C===cn){x===!0&&(V(n.BLEND),x=!1);return}if(x===!1&&(J(n.BLEND),x=!0),C!==ma){if(C!==m||Ve!==_){if((d!==Hn||M!==Hn)&&(n.blendEquation(n.FUNC_ADD),d=Hn,M=Hn),Ve)switch(C){case Kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oi:n.blendFunc(n.ONE,n.ONE);break;case up:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case up:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,v=null,T=null,b=null,y.set(0,0,0),w=0,m=C,_=Ve}return}K=K||Z,ue=ue||F,we=we||j,(Z!==d||K!==M)&&(n.blendEquationSeparate(Fe[Z],Fe[K]),d=Z,M=K),(F!==E||j!==v||ue!==T||we!==b)&&(n.blendFuncSeparate(Ge[F],Ge[j],Ge[ue],Ge[we]),E=F,v=j,T=ue,b=we),(He.equals(y)===!1||We!==w)&&(n.blendColor(He.r,He.g,He.b,We),y.copy(He),w=We),m=C,_=!1}function oe(C,Z){C.side===Pt?V(n.CULL_FACE):J(n.CULL_FACE);let F=C.side===an;Z&&(F=!F),Ee(F),C.blending===Kr&&C.transparent===!1?Q(cn):Q(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let j=C.stencilWrite;a.setTest(j),j&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ue(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):V(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(C){S!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),S=C)}function be(C){C!==gv?(J(n.CULL_FACE),C!==A&&(C===cp?n.cullFace(n.BACK):C===xv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):V(n.CULL_FACE),A=C}function Te(C){C!==I&&(Y&&n.lineWidth(C),I=C)}function Ue(C,Z,F){C?(J(n.POLYGON_OFFSET_FILL),(N!==Z||L!==F)&&(n.polygonOffset(Z,F),N=Z,L=F)):V(n.POLYGON_OFFSET_FILL)}function Pe(C){C?J(n.SCISSOR_TEST):V(n.SCISSOR_TEST)}function U(C){C===void 0&&(C=n.TEXTURE0+B-1),G!==C&&(n.activeTexture(C),G=C)}function R(C,Z,F){F===void 0&&(G===null?F=n.TEXTURE0+B-1:F=G);let j=se[F];j===void 0&&(j={type:void 0,texture:void 0},se[F]=j),(j.type!==C||j.texture!==Z)&&(G!==F&&(n.activeTexture(F),G=F),n.bindTexture(C,Z||X[C]),j.type=C,j.texture=Z)}function re(){let C=se[G];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function _e(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Be(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function De(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Oe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ye(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ke(C){Se.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),Se.copy(C))}function P(C){O.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),O.copy(C))}function q(C,Z){let F=c.get(Z);F===void 0&&(F=new WeakMap,c.set(Z,F));let j=F.get(C);j===void 0&&(j=n.getUniformBlockIndex(Z,C.name),F.set(C,j))}function z(C,Z){let j=c.get(Z).get(C);l.get(Z)!==j&&(n.uniformBlockBinding(Z,j,C.__bindingPointIndex),l.set(Z,j))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},G=null,se={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,E=null,v=null,M=null,T=null,b=null,y=new Ne(0,0,0),w=0,_=!1,S=null,A=null,I=null,N=null,L=null,Se.set(0,0,n.canvas.width,n.canvas.height),O.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:V,bindFramebuffer:$,drawBuffers:fe,useProgram:ge,setBlending:Q,setMaterial:oe,setFlipSided:Ee,setCullFace:be,setLineWidth:Te,setPolygonOffset:Ue,setScissorTest:Pe,activeTexture:U,bindTexture:R,unbindTexture:re,compressedTexImage2D:_e,compressedTexImage3D:pe,texImage2D:ze,texImage3D:xe,updateUBOMapping:q,uniformBlockBinding:z,texStorage2D:Ye,texStorage3D:Ae,texSubImage2D:me,texSubImage3D:Be,compressedTexSubImage2D:De,compressedTexSubImage3D:Oe,scissor:ke,viewport:P,reset:ne}}function lm(n,e,t,i){let s=Kb(i);switch(t){case Nm:return n*e;case Om:return n*e;case Fm:return n*e*2;case mf:return n*e/s.components*s.byteLength;case gf:return n*e/s.components*s.byteLength;case Bm:return n*e*2/s.components*s.byteLength;case xf:return n*e*2/s.components*s.byteLength;case Um:return n*e*3/s.components*s.byteLength;case Gn:return n*e*4/s.components*s.byteLength;case vf:return n*e*4/s.components*s.byteLength;case Cl:case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Il:case Ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ih:case rh:return Math.max(n,16)*Math.max(e,8)/4;case nh:case sh:return Math.max(n,8)*Math.max(e,8)/2;case oh:case ah:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case hh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case fh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case dh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ph:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case mh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case yh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _h:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case bh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Dl:case Sh:case Eh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case zm:case wh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Th:case Ah:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kb(n){switch(n){case Ci:case Im:return{byteLength:1,components:1};case aa:case Lm:case gn:return{byteLength:2,components:1};case df:case pf:return{byteLength:2,components:4};case ur:case ff:case Ai:return{byteLength:4,components:1};case Dm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function jb(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,R){return p?new OffscreenCanvas(U,R):la("canvas")}function x(U,R,re){let _e=1,pe=Pe(U);if((pe.width>re||pe.height>re)&&(_e=re/Math.max(pe.width,pe.height)),_e<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let me=Math.floor(_e*pe.width),Be=Math.floor(_e*pe.height);u===void 0&&(u=g(me,Be));let De=R?g(me,Be):u;return De.width=me,De.height=Be,De.getContext("2d").drawImage(U,0,0,me,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+me+"x"+Be+")."),De}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),U;return U}function m(U){return U.generateMipmaps}function d(U){n.generateMipmap(U)}function E(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(U,R,re,_e,pe=!1){if(U!==null){if(n[U]!==void 0)return n[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let me=R;if(R===n.RED&&(re===n.FLOAT&&(me=n.R32F),re===n.HALF_FLOAT&&(me=n.R16F),re===n.UNSIGNED_BYTE&&(me=n.R8)),R===n.RED_INTEGER&&(re===n.UNSIGNED_BYTE&&(me=n.R8UI),re===n.UNSIGNED_SHORT&&(me=n.R16UI),re===n.UNSIGNED_INT&&(me=n.R32UI),re===n.BYTE&&(me=n.R8I),re===n.SHORT&&(me=n.R16I),re===n.INT&&(me=n.R32I)),R===n.RG&&(re===n.FLOAT&&(me=n.RG32F),re===n.HALF_FLOAT&&(me=n.RG16F),re===n.UNSIGNED_BYTE&&(me=n.RG8)),R===n.RG_INTEGER&&(re===n.UNSIGNED_BYTE&&(me=n.RG8UI),re===n.UNSIGNED_SHORT&&(me=n.RG16UI),re===n.UNSIGNED_INT&&(me=n.RG32UI),re===n.BYTE&&(me=n.RG8I),re===n.SHORT&&(me=n.RG16I),re===n.INT&&(me=n.RG32I)),R===n.RGB_INTEGER&&(re===n.UNSIGNED_BYTE&&(me=n.RGB8UI),re===n.UNSIGNED_SHORT&&(me=n.RGB16UI),re===n.UNSIGNED_INT&&(me=n.RGB32UI),re===n.BYTE&&(me=n.RGB8I),re===n.SHORT&&(me=n.RGB16I),re===n.INT&&(me=n.RGB32I)),R===n.RGBA_INTEGER&&(re===n.UNSIGNED_BYTE&&(me=n.RGBA8UI),re===n.UNSIGNED_SHORT&&(me=n.RGBA16UI),re===n.UNSIGNED_INT&&(me=n.RGBA32UI),re===n.BYTE&&(me=n.RGBA8I),re===n.SHORT&&(me=n.RGBA16I),re===n.INT&&(me=n.RGBA32I)),R===n.RGB&&re===n.UNSIGNED_INT_5_9_9_9_REV&&(me=n.RGB9_E5),R===n.RGBA){let Be=pe?dc:yt.getTransfer(_e);re===n.FLOAT&&(me=n.RGBA32F),re===n.HALF_FLOAT&&(me=n.RGBA16F),re===n.UNSIGNED_BYTE&&(me=Be===Ot?n.SRGB8_ALPHA8:n.RGBA8),re===n.UNSIGNED_SHORT_4_4_4_4&&(me=n.RGBA4),re===n.UNSIGNED_SHORT_5_5_5_1&&(me=n.RGB5_A1)}return(me===n.R16F||me===n.R32F||me===n.RG16F||me===n.RG32F||me===n.RGBA16F||me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function M(U,R){let re;return U?R===null||R===ur||R===Rs?re=n.DEPTH24_STENCIL8:R===Ai?re=n.DEPTH32F_STENCIL8:R===aa&&(re=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ur||R===Rs?re=n.DEPTH_COMPONENT24:R===Ai?re=n.DEPTH_COMPONENT32F:R===aa&&(re=n.DEPTH_COMPONENT16),re}function T(U,R){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==sn&&U.minFilter!==Vn?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function b(U){let R=U.target;R.removeEventListener("dispose",b),w(R),R.isVideoTexture&&h.delete(R)}function y(U){let R=U.target;R.removeEventListener("dispose",y),S(R)}function w(U){let R=i.get(U);if(R.__webglInit===void 0)return;let re=U.source,_e=f.get(re);if(_e){let pe=_e[R.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&_(U),Object.keys(_e).length===0&&f.delete(re)}i.remove(U)}function _(U){let R=i.get(U);n.deleteTexture(R.__webglTexture);let re=U.source,_e=f.get(re);delete _e[R.__cacheKey],o.memory.textures--}function S(U){let R=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(R.__webglFramebuffer[_e]))for(let pe=0;pe<R.__webglFramebuffer[_e].length;pe++)n.deleteFramebuffer(R.__webglFramebuffer[_e][pe]);else n.deleteFramebuffer(R.__webglFramebuffer[_e]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[_e])}else{if(Array.isArray(R.__webglFramebuffer))for(let _e=0;_e<R.__webglFramebuffer.length;_e++)n.deleteFramebuffer(R.__webglFramebuffer[_e]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let _e=0;_e<R.__webglColorRenderbuffer.length;_e++)R.__webglColorRenderbuffer[_e]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[_e]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let re=U.textures;for(let _e=0,pe=re.length;_e<pe;_e++){let me=i.get(re[_e]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(re[_e])}i.remove(U)}let A=0;function I(){A=0}function N(){let U=A;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),A+=1,U}function L(U){let R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function B(U,R){let re=i.get(U);if(U.isVideoTexture&&Te(U),U.isRenderTargetTexture===!1&&U.version>0&&re.__version!==U.version){let _e=U.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(re,U,R);return}}t.bindTexture(n.TEXTURE_2D,re.__webglTexture,n.TEXTURE0+R)}function Y(U,R){let re=i.get(U);if(U.version>0&&re.__version!==U.version){O(re,U,R);return}t.bindTexture(n.TEXTURE_2D_ARRAY,re.__webglTexture,n.TEXTURE0+R)}function ie(U,R){let re=i.get(U);if(U.version>0&&re.__version!==U.version){O(re,U,R);return}t.bindTexture(n.TEXTURE_3D,re.__webglTexture,n.TEXTURE0+R)}function k(U,R){let re=i.get(U);if(U.version>0&&re.__version!==U.version){W(re,U,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture,n.TEXTURE0+R)}let G={[Nn]:n.REPEAT,[is]:n.CLAMP_TO_EDGE,[oa]:n.MIRRORED_REPEAT},se={[sn]:n.NEAREST,[hf]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[Vn]:n.LINEAR,[na]:n.LINEAR_MIPMAP_NEAREST,[ci]:n.LINEAR_MIPMAP_LINEAR},te={[kv]:n.NEVER,[qv]:n.ALWAYS,[Hv]:n.LESS,[Hm]:n.LEQUAL,[Vv]:n.EQUAL,[Xv]:n.GEQUAL,[Gv]:n.GREATER,[Wv]:n.NOTEQUAL};function ve(U,R){if(R.type===Ai&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Vn||R.magFilter===na||R.magFilter===$r||R.magFilter===ci||R.minFilter===Vn||R.minFilter===na||R.minFilter===$r||R.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,G[R.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,G[R.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,G[R.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,se[R.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,se[R.minFilter]),R.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,te[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===sn||R.minFilter!==$r&&R.minFilter!==ci||R.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){let re=e.get("EXT_texture_filter_anisotropic");n.texParameterf(U,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function Se(U,R){let re=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",b));let _e=R.source,pe=f.get(_e);pe===void 0&&(pe={},f.set(_e,pe));let me=L(R);if(me!==U.__cacheKey){pe[me]===void 0&&(pe[me]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,re=!0),pe[me].usedTimes++;let Be=pe[U.__cacheKey];Be!==void 0&&(pe[U.__cacheKey].usedTimes--,Be.usedTimes===0&&_(R)),U.__cacheKey=me,U.__webglTexture=pe[me].texture}return re}function O(U,R,re){let _e=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(_e=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(_e=n.TEXTURE_3D);let pe=Se(U,R),me=R.source;t.bindTexture(_e,U.__webglTexture,n.TEXTURE0+re);let Be=i.get(me);if(me.version!==Be.__version||pe===!0){t.activeTexture(n.TEXTURE0+re);let De=yt.getPrimaries(yt.workingColorSpace),Oe=R.colorSpace===ws?null:yt.getPrimaries(R.colorSpace),Ye=R.colorSpace===ws||De===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Ae=x(R.image,!1,s.maxTextureSize);Ae=Ue(R,Ae);let ze=r.convert(R.format,R.colorSpace),xe=r.convert(R.type),ke=v(R.internalFormat,ze,xe,R.colorSpace,R.isVideoTexture);ve(_e,R);let P,q=R.mipmaps,z=R.isVideoTexture!==!0,ne=Be.__version===void 0||pe===!0,C=me.dataReady,Z=T(R,Ae);if(R.isDepthTexture)ke=M(R.format===Cs,R.type),ne&&(z?t.texStorage2D(n.TEXTURE_2D,1,ke,Ae.width,Ae.height):t.texImage2D(n.TEXTURE_2D,0,ke,Ae.width,Ae.height,0,ze,xe,null));else if(R.isDataTexture)if(q.length>0){z&&ne&&t.texStorage2D(n.TEXTURE_2D,Z,ke,q[0].width,q[0].height);for(let F=0,j=q.length;F<j;F++)P=q[F],z?C&&t.texSubImage2D(n.TEXTURE_2D,F,0,0,P.width,P.height,ze,xe,P.data):t.texImage2D(n.TEXTURE_2D,F,ke,P.width,P.height,0,ze,xe,P.data);R.generateMipmaps=!1}else z?(ne&&t.texStorage2D(n.TEXTURE_2D,Z,ke,Ae.width,Ae.height),C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae.width,Ae.height,ze,xe,Ae.data)):t.texImage2D(n.TEXTURE_2D,0,ke,Ae.width,Ae.height,0,ze,xe,Ae.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){z&&ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Z,ke,q[0].width,q[0].height,Ae.depth);for(let F=0,j=q.length;F<j;F++)if(P=q[F],R.format!==Gn)if(ze!==null)if(z){if(C)if(R.layerUpdates.size>0){let K=lm(P.width,P.height,R.format,R.type);for(let ue of R.layerUpdates){let we=P.data.subarray(ue*K/P.data.BYTES_PER_ELEMENT,(ue+1)*K/P.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,F,0,0,ue,P.width,P.height,1,ze,we)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,F,0,0,0,P.width,P.height,Ae.depth,ze,P.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,F,ke,P.width,P.height,Ae.depth,0,P.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?C&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,F,0,0,0,P.width,P.height,Ae.depth,ze,xe,P.data):t.texImage3D(n.TEXTURE_2D_ARRAY,F,ke,P.width,P.height,Ae.depth,0,ze,xe,P.data)}else{z&&ne&&t.texStorage2D(n.TEXTURE_2D,Z,ke,q[0].width,q[0].height);for(let F=0,j=q.length;F<j;F++)P=q[F],R.format!==Gn?ze!==null?z?C&&t.compressedTexSubImage2D(n.TEXTURE_2D,F,0,0,P.width,P.height,ze,P.data):t.compressedTexImage2D(n.TEXTURE_2D,F,ke,P.width,P.height,0,P.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?C&&t.texSubImage2D(n.TEXTURE_2D,F,0,0,P.width,P.height,ze,xe,P.data):t.texImage2D(n.TEXTURE_2D,F,ke,P.width,P.height,0,ze,xe,P.data)}else if(R.isDataArrayTexture)if(z){if(ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Z,ke,Ae.width,Ae.height,Ae.depth),C)if(R.layerUpdates.size>0){let F=lm(Ae.width,Ae.height,R.format,R.type);for(let j of R.layerUpdates){let K=Ae.data.subarray(j*F/Ae.data.BYTES_PER_ELEMENT,(j+1)*F/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,Ae.width,Ae.height,1,ze,xe,K)}R.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,ze,xe,Ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,Ae.width,Ae.height,Ae.depth,0,ze,xe,Ae.data);else if(R.isData3DTexture)z?(ne&&t.texStorage3D(n.TEXTURE_3D,Z,ke,Ae.width,Ae.height,Ae.depth),C&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,ze,xe,Ae.data)):t.texImage3D(n.TEXTURE_3D,0,ke,Ae.width,Ae.height,Ae.depth,0,ze,xe,Ae.data);else if(R.isFramebufferTexture){if(ne)if(z)t.texStorage2D(n.TEXTURE_2D,Z,ke,Ae.width,Ae.height);else{let F=Ae.width,j=Ae.height;for(let K=0;K<Z;K++)t.texImage2D(n.TEXTURE_2D,K,ke,F,j,0,ze,xe,null),F>>=1,j>>=1}}else if(q.length>0){if(z&&ne){let F=Pe(q[0]);t.texStorage2D(n.TEXTURE_2D,Z,ke,F.width,F.height)}for(let F=0,j=q.length;F<j;F++)P=q[F],z?C&&t.texSubImage2D(n.TEXTURE_2D,F,0,0,ze,xe,P):t.texImage2D(n.TEXTURE_2D,F,ke,ze,xe,P);R.generateMipmaps=!1}else if(z){if(ne){let F=Pe(Ae);t.texStorage2D(n.TEXTURE_2D,Z,ke,F.width,F.height)}C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,xe,Ae)}else t.texImage2D(n.TEXTURE_2D,0,ke,ze,xe,Ae);m(R)&&d(_e),Be.__version=me.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function W(U,R,re){if(R.image.length!==6)return;let _e=Se(U,R),pe=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+re);let me=i.get(pe);if(pe.version!==me.__version||_e===!0){t.activeTexture(n.TEXTURE0+re);let Be=yt.getPrimaries(yt.workingColorSpace),De=R.colorSpace===ws?null:yt.getPrimaries(R.colorSpace),Oe=R.colorSpace===ws||Be===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let Ye=R.isCompressedTexture||R.image[0].isCompressedTexture,Ae=R.image[0]&&R.image[0].isDataTexture,ze=[];for(let j=0;j<6;j++)!Ye&&!Ae?ze[j]=x(R.image[j],!0,s.maxCubemapSize):ze[j]=Ae?R.image[j].image:R.image[j],ze[j]=Ue(R,ze[j]);let xe=ze[0],ke=r.convert(R.format,R.colorSpace),P=r.convert(R.type),q=v(R.internalFormat,ke,P,R.colorSpace),z=R.isVideoTexture!==!0,ne=me.__version===void 0||_e===!0,C=pe.dataReady,Z=T(R,xe);ve(n.TEXTURE_CUBE_MAP,R);let F;if(Ye){z&&ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Z,q,xe.width,xe.height);for(let j=0;j<6;j++){F=ze[j].mipmaps;for(let K=0;K<F.length;K++){let ue=F[K];R.format!==Gn?ke!==null?z?C&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,K,0,0,ue.width,ue.height,ke,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,K,q,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,K,0,0,ue.width,ue.height,ke,P,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,K,q,ue.width,ue.height,0,ke,P,ue.data)}}}else{if(F=R.mipmaps,z&&ne){F.length>0&&Z++;let j=Pe(ze[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Z,q,j.width,j.height)}for(let j=0;j<6;j++)if(Ae){z?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ze[j].width,ze[j].height,ke,P,ze[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,q,ze[j].width,ze[j].height,0,ke,P,ze[j].data);for(let K=0;K<F.length;K++){let we=F[K].image[j].image;z?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,K+1,0,0,we.width,we.height,ke,P,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,K+1,q,we.width,we.height,0,ke,P,we.data)}}else{z?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ke,P,ze[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,q,ke,P,ze[j]);for(let K=0;K<F.length;K++){let ue=F[K];z?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,K+1,0,0,ke,P,ue.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,K+1,q,ke,P,ue.image[j])}}}m(R)&&d(n.TEXTURE_CUBE_MAP),me.__version=pe.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function X(U,R,re,_e,pe,me){let Be=r.convert(re.format,re.colorSpace),De=r.convert(re.type),Oe=v(re.internalFormat,Be,De,re.colorSpace),Ye=i.get(R),Ae=i.get(re);if(Ae.__renderTarget=R,!Ye.__hasExternalTextures){let ze=Math.max(1,R.width>>me),xe=Math.max(1,R.height>>me);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,me,Oe,ze,xe,R.depth,0,Be,De,null):t.texImage2D(pe,me,Oe,ze,xe,0,Be,De,null)}t.bindFramebuffer(n.FRAMEBUFFER,U),be(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,pe,Ae.__webglTexture,0,Ee(R)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,_e,pe,Ae.__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function J(U,R,re){if(n.bindRenderbuffer(n.RENDERBUFFER,U),R.depthBuffer){let _e=R.depthTexture,pe=_e&&_e.isDepthTexture?_e.type:null,me=M(R.stencilBuffer,pe),Be=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=Ee(R);be(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,me,R.width,R.height):re?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,me,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,me,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Be,n.RENDERBUFFER,U)}else{let _e=R.textures;for(let pe=0;pe<_e.length;pe++){let me=_e[pe],Be=r.convert(me.format,me.colorSpace),De=r.convert(me.type),Oe=v(me.internalFormat,Be,De,me.colorSpace),Ye=Ee(R);re&&be(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,Oe,R.width,R.height):be(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,Oe,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,Oe,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function V(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let _e=i.get(R.depthTexture);_e.__renderTarget=R,(!_e.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),B(R.depthTexture,0);let pe=_e.__webglTexture,me=Ee(R);if(R.depthTexture.format===jr)be(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0);else if(R.depthTexture.format===Cs)be(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function $(U){let R=i.get(U),re=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){let _e=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),_e){let pe=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,_e.removeEventListener("dispose",pe)};_e.addEventListener("dispose",pe),R.__depthDisposeCallback=pe}R.__boundDepthTexture=_e}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");V(R.__webglFramebuffer,U)}else if(re){R.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[_e]),R.__webglDepthbuffer[_e]===void 0)R.__webglDepthbuffer[_e]=n.createRenderbuffer(),J(R.__webglDepthbuffer[_e],U,!1);else{let pe=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=R.__webglDepthbuffer[_e];n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,me)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),J(R.__webglDepthbuffer,U,!1);else{let _e=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,pe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(U,R,re){let _e=i.get(U);R!==void 0&&X(_e.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),re!==void 0&&$(U)}function ge(U){let R=U.texture,re=i.get(U),_e=i.get(R);U.addEventListener("dispose",y);let pe=U.textures,me=U.isWebGLCubeRenderTarget===!0,Be=pe.length>1;if(Be||(_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture()),_e.__version=R.version,o.memory.textures++),me){re.__webglFramebuffer=[];for(let De=0;De<6;De++)if(R.mipmaps&&R.mipmaps.length>0){re.__webglFramebuffer[De]=[];for(let Oe=0;Oe<R.mipmaps.length;Oe++)re.__webglFramebuffer[De][Oe]=n.createFramebuffer()}else re.__webglFramebuffer[De]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){re.__webglFramebuffer=[];for(let De=0;De<R.mipmaps.length;De++)re.__webglFramebuffer[De]=n.createFramebuffer()}else re.__webglFramebuffer=n.createFramebuffer();if(Be)for(let De=0,Oe=pe.length;De<Oe;De++){let Ye=i.get(pe[De]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(U.samples>0&&be(U)===!1){re.__webglMultisampledFramebuffer=n.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let De=0;De<pe.length;De++){let Oe=pe[De];re.__webglColorRenderbuffer[De]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,re.__webglColorRenderbuffer[De]);let Ye=r.convert(Oe.format,Oe.colorSpace),Ae=r.convert(Oe.type),ze=v(Oe.internalFormat,Ye,Ae,Oe.colorSpace,U.isXRRenderTarget===!0),xe=Ee(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,ze,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,re.__webglColorRenderbuffer[De])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(re.__webglDepthRenderbuffer=n.createRenderbuffer(),J(re.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(me){t.bindTexture(n.TEXTURE_CUBE_MAP,_e.__webglTexture),ve(n.TEXTURE_CUBE_MAP,R);for(let De=0;De<6;De++)if(R.mipmaps&&R.mipmaps.length>0)for(let Oe=0;Oe<R.mipmaps.length;Oe++)X(re.__webglFramebuffer[De][Oe],U,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+De,Oe);else X(re.__webglFramebuffer[De],U,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);m(R)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let De=0,Oe=pe.length;De<Oe;De++){let Ye=pe[De],Ae=i.get(Ye);t.bindTexture(n.TEXTURE_2D,Ae.__webglTexture),ve(n.TEXTURE_2D,Ye),X(re.__webglFramebuffer,U,Ye,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,0),m(Ye)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let De=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(De=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(De,_e.__webglTexture),ve(De,R),R.mipmaps&&R.mipmaps.length>0)for(let Oe=0;Oe<R.mipmaps.length;Oe++)X(re.__webglFramebuffer[Oe],U,R,n.COLOR_ATTACHMENT0,De,Oe);else X(re.__webglFramebuffer,U,R,n.COLOR_ATTACHMENT0,De,0);m(R)&&d(De),t.unbindTexture()}U.depthBuffer&&$(U)}function Fe(U){let R=U.textures;for(let re=0,_e=R.length;re<_e;re++){let pe=R[re];if(m(pe)){let me=E(U),Be=i.get(pe).__webglTexture;t.bindTexture(me,Be),d(me),t.unbindTexture()}}}let Ge=[],Q=[];function oe(U){if(U.samples>0){if(be(U)===!1){let R=U.textures,re=U.width,_e=U.height,pe=n.COLOR_BUFFER_BIT,me=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Be=i.get(U),De=R.length>1;if(De)for(let Oe=0;Oe<R.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Oe=0;Oe<R.length;Oe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),De){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Be.__webglColorRenderbuffer[Oe]);let Ye=i.get(R[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,re,_e,0,0,re,_e,pe,n.NEAREST),l===!0&&(Ge.length=0,Q.length=0,Ge.push(n.COLOR_ATTACHMENT0+Oe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ge.push(me),Q.push(me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),De)for(let Oe=0;Oe<R.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,Be.__webglColorRenderbuffer[Oe]);let Ye=i.get(R[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){let R=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function Ee(U){return Math.min(s.maxSamples,U.samples)}function be(U){let R=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Te(U){let R=o.render.frame;h.get(U)!==R&&(h.set(U,R),U.update())}function Ue(U,R){let re=U.colorSpace,_e=U.format,pe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||re!==Rn&&re!==ws&&(yt.getTransfer(re)===Ot?(_e!==Gn||pe!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),R}function Pe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=Y,this.setTexture3D=ie,this.setTextureCube=k,this.rebindTextures=fe,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=X,this.useMultisampledRTT=be}function Jb(n,e){function t(i,s=ws){let r,o=yt.getTransfer(s);if(i===Ci)return n.UNSIGNED_BYTE;if(i===df)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Dm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Im)return n.BYTE;if(i===Lm)return n.SHORT;if(i===aa)return n.UNSIGNED_SHORT;if(i===ff)return n.INT;if(i===ur)return n.UNSIGNED_INT;if(i===Ai)return n.FLOAT;if(i===gn)return n.HALF_FLOAT;if(i===Nm)return n.ALPHA;if(i===Um)return n.RGB;if(i===Gn)return n.RGBA;if(i===Om)return n.LUMINANCE;if(i===Fm)return n.LUMINANCE_ALPHA;if(i===jr)return n.DEPTH_COMPONENT;if(i===Cs)return n.DEPTH_STENCIL;if(i===mf)return n.RED;if(i===gf)return n.RED_INTEGER;if(i===Bm)return n.RG;if(i===xf)return n.RG_INTEGER;if(i===vf)return n.RGBA_INTEGER;if(i===Cl||i===Pl||i===Il||i===Ll)if(o===Ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Cl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Il)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ll)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Cl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Il)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ll)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nh||i===ih||i===sh||i===rh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===nh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ih)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oh||i===ah||i===lh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===oh||i===ah)return o===Ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===lh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ch||i===uh||i===hh||i===fh||i===dh||i===ph||i===mh||i===gh||i===xh||i===vh||i===yh||i===_h||i===Mh||i===bh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ch)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ph)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_h)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Dl||i===Sh||i===Eh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Dl)return o===Ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Eh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zm||i===wh||i===Th||i===Ah)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Dl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===wh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Th)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ah)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Vh=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},at=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qb={type:"move"},sa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new at;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},eS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tS=`
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

}`,Gh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new pn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new St({vertexShader:eS,fragmentShader:tS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new Xn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wh=class extends Ps{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,x=new Gh,m=t.getContextAttributes(),d=null,E=null,v=[],M=[],T=new Je,b=null,y=new en;y.viewport=new Tt;let w=new en;w.viewport=new Tt;let _=[y,w],S=new Vh,A=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let W=v[O];return W===void 0&&(W=new sa,v[O]=W),W.getTargetRaySpace()},this.getControllerGrip=function(O){let W=v[O];return W===void 0&&(W=new sa,v[O]=W),W.getGripSpace()},this.getHand=function(O){let W=v[O];return W===void 0&&(W=new sa,v[O]=W),W.getHandSpace()};function N(O){let W=M.indexOf(O.inputSource);if(W===-1)return;let X=v[W];X!==void 0&&(X.update(O.inputSource,O.frame,c||o),X.dispatchEvent({type:O.type,data:O.inputSource}))}function L(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",B);for(let O=0;O<v.length;O++){let W=M[O];W!==null&&(M[O]=null,v[O].disconnect(W))}A=null,I=null,x.reset(),e.setRenderTarget(d),p=null,f=null,u=null,s=null,E=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",L),s.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0){let W={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,W),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new tn(p.framebufferWidth,p.framebufferHeight,{format:Gn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let W=null,X=null,J=null;m.depth&&(J=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=m.stencil?Cs:jr,X=m.stencil?Rs:ur);let V={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(V),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new tn(f.textureWidth,f.textureHeight,{format:Gn,type:Ci,depthTexture:new uo(f.textureWidth,f.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Se.setContext(s),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(O){for(let W=0;W<O.removed.length;W++){let X=O.removed[W],J=M.indexOf(X);J>=0&&(M[J]=null,v[J].disconnect(X))}for(let W=0;W<O.added.length;W++){let X=O.added[W],J=M.indexOf(X);if(J===-1){for(let $=0;$<v.length;$++)if($>=M.length){M.push(X),J=$;break}else if(M[$]===null){M[$]=X,J=$;break}if(J===-1)break}let V=v[J];V&&V.connect(X)}}let Y=new H,ie=new H;function k(O,W,X){Y.setFromMatrixPosition(W.matrixWorld),ie.setFromMatrixPosition(X.matrixWorld);let J=Y.distanceTo(ie),V=W.projectionMatrix.elements,$=X.projectionMatrix.elements,fe=V[14]/(V[10]-1),ge=V[14]/(V[10]+1),Fe=(V[9]+1)/V[5],Ge=(V[9]-1)/V[5],Q=(V[8]-1)/V[0],oe=($[8]+1)/$[0],Ee=fe*Q,be=fe*oe,Te=J/(-Q+oe),Ue=Te*-Q;if(W.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ue),O.translateZ(Te),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),V[10]===-1)O.projectionMatrix.copy(W.projectionMatrix),O.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let Pe=fe+Te,U=ge+Te,R=Ee-Ue,re=be+(J-Ue),_e=Fe*ge/U*Pe,pe=Ge*ge/U*Pe;O.projectionMatrix.makePerspective(R,re,_e,pe,Pe,U),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function G(O,W){W===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(W.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let W=O.near,X=O.far;x.texture!==null&&(x.depthNear>0&&(W=x.depthNear),x.depthFar>0&&(X=x.depthFar)),S.near=w.near=y.near=W,S.far=w.far=y.far=X,(A!==S.near||I!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,I=S.far),y.layers.mask=O.layers.mask|2,w.layers.mask=O.layers.mask|4,S.layers.mask=y.layers.mask|w.layers.mask;let J=O.parent,V=S.cameras;G(S,J);for(let $=0;$<V.length;$++)G(V[$],J);V.length===2?k(S,y,w):S.projectionMatrix.copy(y.projectionMatrix),se(O,S,J)};function se(O,W,X){X===null?O.matrix.copy(W.matrixWorld):(O.matrix.copy(X.matrixWorld),O.matrix.invert(),O.matrix.multiply(W.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(W.projectionMatrix),O.projectionMatrixInverse.copy(W.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=oo*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(O){l=O,f!==null&&(f.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let te=null;function ve(O,W){if(h=W.getViewerPose(c||o),g=W,h!==null){let X=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let J=!1;X.length!==S.cameras.length&&(S.cameras.length=0,J=!0);for(let $=0;$<X.length;$++){let fe=X[$],ge=null;if(p!==null)ge=p.getViewport(fe);else{let Ge=u.getViewSubImage(f,fe);ge=Ge.viewport,$===0&&(e.setRenderTargetTextures(E,Ge.colorTexture,f.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(E))}let Fe=_[$];Fe===void 0&&(Fe=new en,Fe.layers.enable($),Fe.viewport=new Tt,_[$]=Fe),Fe.matrix.fromArray(fe.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(fe.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(ge.x,ge.y,ge.width,ge.height),$===0&&(S.matrix.copy(Fe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),J===!0&&S.cameras.push(Fe)}let V=s.enabledFeatures;if(V&&V.includes("depth-sensing")){let $=u.getDepthInformation(X[0]);$&&$.isValid&&$.texture&&x.init(e,$,s.renderState)}}for(let X=0;X<v.length;X++){let J=M[X],V=v[X];J!==null&&V!==void 0&&V.update(J,W,c||o)}te&&te(O,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),g=null}let Se=new qm;Se.setAnimationLoop(ve),this.setAnimationLoop=function(O){te=O},this.dispose=function(){}}},ar=new Pi,nS=new Qe;function iS(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Xm(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,v,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===an&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===an&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=e.get(d),v=E.envMap,M=E.envMapRotation;v&&(m.envMap.value=v,ar.copy(M),ar.x*=-1,ar.y*=-1,ar.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),m.envMapRotation.value.setFromMatrix4(nS.makeRotationFromEuler(ar)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===an&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function sS(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,v){let M=v.program;i.uniformBlockBinding(E,M)}function c(E,v){let M=s[E.id];M===void 0&&(g(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",m));let T=v.program;i.updateUBOMapping(E,T);let b=e.render.frame;r[E.id]!==b&&(f(E),r[E.id]=b)}function h(E){let v=u();E.__bindingPointIndex=v;let M=n.createBuffer(),T=E.__size,b=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,T,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let v=s[E.id],M=E.uniforms,T=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let b=0,y=M.length;b<y;b++){let w=Array.isArray(M[b])?M[b]:[M[b]];for(let _=0,S=w.length;_<S;_++){let A=w[_];if(p(A,b,_,T)===!0){let I=A.__offset,N=Array.isArray(A.value)?A.value:[A.value],L=0;for(let B=0;B<N.length;B++){let Y=N[B],ie=x(Y);typeof Y=="number"||typeof Y=="boolean"?(A.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,I+L,A.__data)):Y.isMatrix3?(A.__data[0]=Y.elements[0],A.__data[1]=Y.elements[1],A.__data[2]=Y.elements[2],A.__data[3]=0,A.__data[4]=Y.elements[3],A.__data[5]=Y.elements[4],A.__data[6]=Y.elements[5],A.__data[7]=0,A.__data[8]=Y.elements[6],A.__data[9]=Y.elements[7],A.__data[10]=Y.elements[8],A.__data[11]=0):(Y.toArray(A.__data,L),L+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,v,M,T){let b=E.value,y=v+"_"+M;if(T[y]===void 0)return typeof b=="number"||typeof b=="boolean"?T[y]=b:T[y]=b.clone(),!0;{let w=T[y];if(typeof b=="number"||typeof b=="boolean"){if(w!==b)return T[y]=b,!0}else if(w.equals(b)===!1)return w.copy(b),!0}return!1}function g(E){let v=E.uniforms,M=0,T=16;for(let y=0,w=v.length;y<w;y++){let _=Array.isArray(v[y])?v[y]:[v[y]];for(let S=0,A=_.length;S<A;S++){let I=_[S],N=Array.isArray(I.value)?I.value:[I.value];for(let L=0,B=N.length;L<B;L++){let Y=N[L],ie=x(Y),k=M%T,G=k%ie.boundary,se=k+G;M+=G,se!==0&&T-se<ie.storage&&(M+=T-se),I.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=ie.storage}}}let b=M%T;return b>0&&(M+=T-b),E.__size=M,E.__cache={},this}function x(E){let v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(E){let v=E.target;v.removeEventListener("dispose",m);let M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Vl=class{constructor(e={}){let{canvas:t=cy(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,E=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this.toneMapping=As,this.toneMappingExposure=1;let M=this,T=!1,b=0,y=0,w=null,_=-1,S=null,A=new Tt,I=new Tt,N=null,L=new Ne(0),B=0,Y=t.width,ie=t.height,k=1,G=null,se=null,te=new Tt(0,0,Y,ie),ve=new Tt(0,0,Y,ie),Se=!1,O=new ca,W=!1,X=!1,J=new Qe,V=new Qe,$=new H,fe=new Tt,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function Ge(){return w===null?k:1}let Q=i;function oe(D,ae){return t.getContext(D,ae)}try{let D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",ue,!1),Q===null){let ae="webgl2";if(Q=oe(ae,D),Q===null)throw oe(ae)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Ee,be,Te,Ue,Pe,U,R,re,_e,pe,me,Be,De,Oe,Ye,Ae,ze,xe,ke,P,q,z,ne,C;function Z(){Ee=new _M(Q),Ee.init(),z=new Jb(Q,Ee),be=new pM(Q,Ee,e,z),Te=new Zb(Q,Ee),be.reverseDepthBuffer&&f&&Te.buffers.depth.setReversed(!0),Ue=new SM(Q),Pe=new Ob,U=new jb(Q,Ee,Te,Pe,be,z,Ue),R=new gM(M),re=new yM(M),_e=new Py(Q),ne=new fM(Q,_e),pe=new MM(Q,_e,Ue,ne),me=new wM(Q,pe,_e,Ue),ke=new EM(Q,be,U),Ae=new mM(Pe),Be=new Ub(M,R,re,Ee,be,ne,Ae),De=new iS(M,Pe),Oe=new Bb,Ye=new Wb(Ee),xe=new hM(M,R,re,Te,me,p,l),ze=new Yb(M,me,be),C=new sS(Q,Ue,be,Te),P=new dM(Q,Ee,Ue),q=new bM(Q,Ee,Ue),Ue.programs=Be.programs,M.capabilities=be,M.extensions=Ee,M.properties=Pe,M.renderLists=Oe,M.shadowMap=ze,M.state=Te,M.info=Ue}Z();let F=new Wh(M,Q);this.xr=F,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){let D=Ee.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=Ee.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(D){D!==void 0&&(k=D,this.setSize(Y,ie,!1))},this.getSize=function(D){return D.set(Y,ie)},this.setSize=function(D,ae,ye=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=D,ie=ae,t.width=Math.floor(D*k),t.height=Math.floor(ae*k),ye===!0&&(t.style.width=D+"px",t.style.height=ae+"px"),this.setViewport(0,0,D,ae)},this.getDrawingBufferSize=function(D){return D.set(Y*k,ie*k).floor()},this.setDrawingBufferSize=function(D,ae,ye){Y=D,ie=ae,k=ye,t.width=Math.floor(D*ye),t.height=Math.floor(ae*ye),this.setViewport(0,0,D,ae)},this.getCurrentViewport=function(D){return D.copy(A)},this.getViewport=function(D){return D.copy(te)},this.setViewport=function(D,ae,ye,Me){D.isVector4?te.set(D.x,D.y,D.z,D.w):te.set(D,ae,ye,Me),Te.viewport(A.copy(te).multiplyScalar(k).round())},this.getScissor=function(D){return D.copy(ve)},this.setScissor=function(D,ae,ye,Me){D.isVector4?ve.set(D.x,D.y,D.z,D.w):ve.set(D,ae,ye,Me),Te.scissor(I.copy(ve).multiplyScalar(k).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(D){Te.setScissorTest(Se=D)},this.setOpaqueSort=function(D){G=D},this.setTransparentSort=function(D){se=D},this.getClearColor=function(D){return D.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(D=!0,ae=!0,ye=!0){let Me=0;if(D){let ce=!1;if(w!==null){let Xe=w.texture.format;ce=Xe===vf||Xe===xf||Xe===gf}if(ce){let Xe=w.texture.type,je=Xe===Ci||Xe===ur||Xe===aa||Xe===Rs||Xe===df||Xe===pf,tt=xe.getClearColor(),nt=xe.getClearAlpha(),ut=tt.r,pt=tt.g,it=tt.b;je?(g[0]=ut,g[1]=pt,g[2]=it,g[3]=nt,Q.clearBufferuiv(Q.COLOR,0,g)):(x[0]=ut,x[1]=pt,x[2]=it,x[3]=nt,Q.clearBufferiv(Q.COLOR,0,x))}else Me|=Q.COLOR_BUFFER_BIT}ae&&(Me|=Q.DEPTH_BUFFER_BIT),ye&&(Me|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q.clear(Me)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Oe.dispose(),Ye.dispose(),Pe.dispose(),R.dispose(),re.dispose(),me.dispose(),ne.dispose(),C.dispose(),Be.dispose(),F.dispose(),F.removeEventListener("sessionstart",le),F.removeEventListener("sessionend",he),Ce.stop()};function j(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let D=Ue.autoReset,ae=ze.enabled,ye=ze.autoUpdate,Me=ze.needsUpdate,ce=ze.type;Z(),Ue.autoReset=D,ze.enabled=ae,ze.autoUpdate=ye,ze.needsUpdate=Me,ze.type=ce}function ue(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function we(D){let ae=D.target;ae.removeEventListener("dispose",we),He(ae)}function He(D){We(D),Pe.remove(D)}function We(D){let ae=Pe.get(D).programs;ae!==void 0&&(ae.forEach(function(ye){Be.releaseProgram(ye)}),D.isShaderMaterial&&Be.releaseShaderCache(D))}this.renderBufferDirect=function(D,ae,ye,Me,ce,Xe){ae===null&&(ae=ge);let je=ce.isMesh&&ce.matrixWorld.determinant()<0,tt=Rt(D,ae,ye,Me,ce);Te.setMaterial(Me,je);let nt=ye.index,ut=1;if(Me.wireframe===!0){if(nt=pe.getWireframeAttribute(ye),nt===void 0)return;ut=2}let pt=ye.drawRange,it=ye.attributes.position,Ct=pt.start*ut,Xt=(pt.start+pt.count)*ut;Xe!==null&&(Ct=Math.max(Ct,Xe.start*ut),Xt=Math.min(Xt,(Xe.start+Xe.count)*ut)),nt!==null?(Ct=Math.max(Ct,0),Xt=Math.min(Xt,nt.count)):it!=null&&(Ct=Math.max(Ct,0),Xt=Math.min(Xt,it.count));let Zt=Xt-Ct;if(Zt<0||Zt===1/0)return;ne.setup(ce,Me,tt,ye,nt);let kn,Nt=P;if(nt!==null&&(kn=_e.get(nt),Nt=q,Nt.setIndex(kn)),ce.isMesh)Me.wireframe===!0?(Te.setLineWidth(Me.wireframeLinewidth*Ge()),Nt.setMode(Q.LINES)):Nt.setMode(Q.TRIANGLES);else if(ce.isLine){let st=Me.linewidth;st===void 0&&(st=1),Te.setLineWidth(st*Ge()),ce.isLineSegments?Nt.setMode(Q.LINES):ce.isLineLoop?Nt.setMode(Q.LINE_LOOP):Nt.setMode(Q.LINE_STRIP)}else ce.isPoints?Nt.setMode(Q.POINTS):ce.isSprite&&Nt.setMode(Q.TRIANGLES);if(ce.isBatchedMesh)if(ce._multiDrawInstances!==null)Nt.renderMultiDrawInstances(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount,ce._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Nt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{let st=ce._multiDrawStarts,$i=ce._multiDrawCounts,Ut=ce._multiDrawCount,Mi=nt?_e.get(nt).bytesPerElement:1,Rr=Pe.get(Me).currentProgram.getUniforms();for(let Zn=0;Zn<Ut;Zn++)Rr.setValue(Q,"_gl_DrawID",Zn),Nt.render(st[Zn]/Mi,$i[Zn])}else if(ce.isInstancedMesh)Nt.renderInstances(Ct,Zt,ce.count);else if(ye.isInstancedBufferGeometry){let st=ye._maxInstanceCount!==void 0?ye._maxInstanceCount:1/0,$i=Math.min(ye.instanceCount,st);Nt.renderInstances(Ct,Zt,$i)}else Nt.render(Ct,Zt)};function Ve(D,ae,ye){D.transparent===!0&&D.side===Pt&&D.forceSinglePass===!1?(D.side=an,D.needsUpdate=!0,ct(D,ae,ye),D.side=Ui,D.needsUpdate=!0,ct(D,ae,ye),D.side=Pt):ct(D,ae,ye)}this.compile=function(D,ae,ye=null){ye===null&&(ye=D),d=Ye.get(ye),d.init(ae),v.push(d),ye.traverseVisible(function(ce){ce.isLight&&ce.layers.test(ae.layers)&&(d.pushLight(ce),ce.castShadow&&d.pushShadow(ce))}),D!==ye&&D.traverseVisible(function(ce){ce.isLight&&ce.layers.test(ae.layers)&&(d.pushLight(ce),ce.castShadow&&d.pushShadow(ce))}),d.setupLights();let Me=new Set;return D.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;let Xe=ce.material;if(Xe)if(Array.isArray(Xe))for(let je=0;je<Xe.length;je++){let tt=Xe[je];Ve(tt,ye,ce),Me.add(tt)}else Ve(Xe,ye,ce),Me.add(Xe)}),v.pop(),d=null,Me},this.compileAsync=function(D,ae,ye=null){let Me=this.compile(D,ae,ye);return new Promise(ce=>{function Xe(){if(Me.forEach(function(je){Pe.get(je).currentProgram.isReady()&&Me.delete(je)}),Me.size===0){ce(D);return}setTimeout(Xe,10)}Ee.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let ee=null;function de(D){ee&&ee(D)}function le(){Ce.stop()}function he(){Ce.start()}let Ce=new qm;Ce.setAnimationLoop(de),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(D){ee=D,F.setAnimationLoop(D),D===null?Ce.stop():Ce.start()},F.addEventListener("sessionstart",le),F.addEventListener("sessionend",he),this.render=function(D,ae){if(ae!==void 0&&ae.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ae.parent===null&&ae.matrixWorldAutoUpdate===!0&&ae.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(ae),ae=F.getCamera()),D.isScene===!0&&D.onBeforeRender(M,D,ae,w),d=Ye.get(D,v.length),d.init(ae),v.push(d),V.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),O.setFromProjectionMatrix(V),X=this.localClippingEnabled,W=Ae.init(this.clippingPlanes,X),m=Oe.get(D,E.length),m.init(),E.push(m),F.enabled===!0&&F.isPresenting===!0){let Xe=M.xr.getDepthSensingMesh();Xe!==null&&Le(Xe,ae,-1/0,M.sortObjects)}Le(D,ae,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(G,se),Fe=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,Fe&&xe.addToRenderList(m,D),this.info.render.frame++,W===!0&&Ae.beginShadows();let ye=d.state.shadowsArray;ze.render(ye,D,ae),W===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let Me=m.opaque,ce=m.transmissive;if(d.setupLights(),ae.isArrayCamera){let Xe=ae.cameras;if(ce.length>0)for(let je=0,tt=Xe.length;je<tt;je++){let nt=Xe[je];qe(Me,ce,D,nt)}Fe&&xe.render(D);for(let je=0,tt=Xe.length;je<tt;je++){let nt=Xe[je];Re(m,D,nt,nt.viewport)}}else ce.length>0&&qe(Me,ce,D,ae),Fe&&xe.render(D),Re(m,D,ae);w!==null&&(U.updateMultisampleRenderTarget(w),U.updateRenderTargetMipmap(w)),D.isScene===!0&&D.onAfterRender(M,D,ae),ne.resetDefaultState(),_=-1,S=null,v.pop(),v.length>0?(d=v[v.length-1],W===!0&&Ae.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Le(D,ae,ye,Me){if(D.visible===!1)return;if(D.layers.test(ae.layers)){if(D.isGroup)ye=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(ae);else if(D.isLight)d.pushLight(D),D.castShadow&&d.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||O.intersectsSprite(D)){Me&&fe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(V);let je=me.update(D),tt=D.material;tt.visible&&m.push(D,je,tt,ye,fe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||O.intersectsObject(D))){let je=me.update(D),tt=D.material;if(Me&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),fe.copy(D.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),fe.copy(je.boundingSphere.center)),fe.applyMatrix4(D.matrixWorld).applyMatrix4(V)),Array.isArray(tt)){let nt=je.groups;for(let ut=0,pt=nt.length;ut<pt;ut++){let it=nt[ut],Ct=tt[it.materialIndex];Ct&&Ct.visible&&m.push(D,je,Ct,ye,fe.z,it)}}else tt.visible&&m.push(D,je,tt,ye,fe.z,null)}}let Xe=D.children;for(let je=0,tt=Xe.length;je<tt;je++)Le(Xe[je],ae,ye,Me)}function Re(D,ae,ye,Me){let ce=D.opaque,Xe=D.transmissive,je=D.transparent;d.setupLightsView(ye),W===!0&&Ae.setGlobalState(M.clippingPlanes,ye),Me&&Te.viewport(A.copy(Me)),ce.length>0&&$e(ce,ae,ye),Xe.length>0&&$e(Xe,ae,ye),je.length>0&&$e(je,ae,ye),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function qe(D,ae,ye,Me){if((ye.isScene===!0?ye.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Me.id]===void 0&&(d.state.transmissionRenderTarget[Me.id]=new tn(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?gn:Ci,minFilter:ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));let Xe=d.state.transmissionRenderTarget[Me.id],je=Me.viewport||A;Xe.setSize(je.z,je.w);let tt=M.getRenderTarget();M.setRenderTarget(Xe),M.getClearColor(L),B=M.getClearAlpha(),B<1&&M.setClearColor(16777215,.5),M.clear(),Fe&&xe.render(ye);let nt=M.toneMapping;M.toneMapping=As;let ut=Me.viewport;if(Me.viewport!==void 0&&(Me.viewport=void 0),d.setupLightsView(Me),W===!0&&Ae.setGlobalState(M.clippingPlanes,Me),$e(D,ye,Me),U.updateMultisampleRenderTarget(Xe),U.updateRenderTargetMipmap(Xe),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let it=0,Ct=ae.length;it<Ct;it++){let Xt=ae[it],Zt=Xt.object,kn=Xt.geometry,Nt=Xt.material,st=Xt.group;if(Nt.side===Pt&&Zt.layers.test(Me.layers)){let $i=Nt.side;Nt.side=an,Nt.needsUpdate=!0,Ke(Zt,ye,Me,kn,Nt,st),Nt.side=$i,Nt.needsUpdate=!0,pt=!0}}pt===!0&&(U.updateMultisampleRenderTarget(Xe),U.updateRenderTargetMipmap(Xe))}M.setRenderTarget(tt),M.setClearColor(L,B),ut!==void 0&&(Me.viewport=ut),M.toneMapping=nt}function $e(D,ae,ye){let Me=ae.isScene===!0?ae.overrideMaterial:null;for(let ce=0,Xe=D.length;ce<Xe;ce++){let je=D[ce],tt=je.object,nt=je.geometry,ut=Me===null?je.material:Me,pt=je.group;tt.layers.test(ye.layers)&&Ke(tt,ae,ye,nt,ut,pt)}}function Ke(D,ae,ye,Me,ce,Xe){D.onBeforeRender(M,ae,ye,Me,ce,Xe),D.modelViewMatrix.multiplyMatrices(ye.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ce.onBeforeRender(M,ae,ye,Me,D,Xe),ce.transparent===!0&&ce.side===Pt&&ce.forceSinglePass===!1?(ce.side=an,ce.needsUpdate=!0,M.renderBufferDirect(ye,ae,Me,ce,D,Xe),ce.side=Ui,ce.needsUpdate=!0,M.renderBufferDirect(ye,ae,Me,ce,D,Xe),ce.side=Pt):M.renderBufferDirect(ye,ae,Me,ce,D,Xe),D.onAfterRender(M,ae,ye,Me,ce,Xe)}function ct(D,ae,ye){ae.isScene!==!0&&(ae=ge);let Me=Pe.get(D),ce=d.state.lights,Xe=d.state.shadowsArray,je=ce.state.version,tt=Be.getParameters(D,ce.state,Xe,ae,ye),nt=Be.getProgramCacheKey(tt),ut=Me.programs;Me.environment=D.isMeshStandardMaterial?ae.environment:null,Me.fog=ae.fog,Me.envMap=(D.isMeshStandardMaterial?re:R).get(D.envMap||Me.environment),Me.envMapRotation=Me.environment!==null&&D.envMap===null?ae.environmentRotation:D.envMapRotation,ut===void 0&&(D.addEventListener("dispose",we),ut=new Map,Me.programs=ut);let pt=ut.get(nt);if(pt!==void 0){if(Me.currentProgram===pt&&Me.lightsStateVersion===je)return ft(D,tt),pt}else tt.uniforms=Be.getUniforms(D),D.onBeforeCompile(tt,M),pt=Be.acquireProgram(tt,nt),ut.set(nt,pt),Me.uniforms=tt.uniforms;let it=Me.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(it.clippingPlanes=Ae.uniform),ft(D,tt),Me.needsLights=Wt(D),Me.lightsStateVersion=je,Me.needsLights&&(it.ambientLightColor.value=ce.state.ambient,it.lightProbe.value=ce.state.probe,it.directionalLights.value=ce.state.directional,it.directionalLightShadows.value=ce.state.directionalShadow,it.spotLights.value=ce.state.spot,it.spotLightShadows.value=ce.state.spotShadow,it.rectAreaLights.value=ce.state.rectArea,it.ltc_1.value=ce.state.rectAreaLTC1,it.ltc_2.value=ce.state.rectAreaLTC2,it.pointLights.value=ce.state.point,it.pointLightShadows.value=ce.state.pointShadow,it.hemisphereLights.value=ce.state.hemi,it.directionalShadowMap.value=ce.state.directionalShadowMap,it.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,it.spotShadowMap.value=ce.state.spotShadowMap,it.spotLightMatrix.value=ce.state.spotLightMatrix,it.spotLightMap.value=ce.state.spotLightMap,it.pointShadowMap.value=ce.state.pointShadowMap,it.pointShadowMatrix.value=ce.state.pointShadowMatrix),Me.currentProgram=pt,Me.uniformsList=null,pt}function Mt(D){if(D.uniformsList===null){let ae=D.currentProgram.getUniforms();D.uniformsList=eo.seqWithValue(ae.seq,D.uniforms)}return D.uniformsList}function ft(D,ae){let ye=Pe.get(D);ye.outputColorSpace=ae.outputColorSpace,ye.batching=ae.batching,ye.batchingColor=ae.batchingColor,ye.instancing=ae.instancing,ye.instancingColor=ae.instancingColor,ye.instancingMorph=ae.instancingMorph,ye.skinning=ae.skinning,ye.morphTargets=ae.morphTargets,ye.morphNormals=ae.morphNormals,ye.morphColors=ae.morphColors,ye.morphTargetsCount=ae.morphTargetsCount,ye.numClippingPlanes=ae.numClippingPlanes,ye.numIntersection=ae.numClipIntersection,ye.vertexAlphas=ae.vertexAlphas,ye.vertexTangents=ae.vertexTangents,ye.toneMapping=ae.toneMapping}function Rt(D,ae,ye,Me,ce){ae.isScene!==!0&&(ae=ge),U.resetTextureUnits();let Xe=ae.fog,je=Me.isMeshStandardMaterial?ae.environment:null,tt=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Rn,nt=(Me.isMeshStandardMaterial?re:R).get(Me.envMap||je),ut=Me.vertexColors===!0&&!!ye.attributes.color&&ye.attributes.color.itemSize===4,pt=!!ye.attributes.tangent&&(!!Me.normalMap||Me.anisotropy>0),it=!!ye.morphAttributes.position,Ct=!!ye.morphAttributes.normal,Xt=!!ye.morphAttributes.color,Zt=As;Me.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Zt=M.toneMapping);let kn=ye.morphAttributes.position||ye.morphAttributes.normal||ye.morphAttributes.color,Nt=kn!==void 0?kn.length:0,st=Pe.get(Me),$i=d.state.lights;if(W===!0&&(X===!0||D!==S)){let ai=D===S&&Me.id===_;Ae.setState(Me,D,ai)}let Ut=!1;Me.version===st.__version?(st.needsLights&&st.lightsStateVersion!==$i.state.version||st.outputColorSpace!==tt||ce.isBatchedMesh&&st.batching===!1||!ce.isBatchedMesh&&st.batching===!0||ce.isBatchedMesh&&st.batchingColor===!0&&ce.colorTexture===null||ce.isBatchedMesh&&st.batchingColor===!1&&ce.colorTexture!==null||ce.isInstancedMesh&&st.instancing===!1||!ce.isInstancedMesh&&st.instancing===!0||ce.isSkinnedMesh&&st.skinning===!1||!ce.isSkinnedMesh&&st.skinning===!0||ce.isInstancedMesh&&st.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&st.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&st.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&st.instancingMorph===!1&&ce.morphTexture!==null||st.envMap!==nt||Me.fog===!0&&st.fog!==Xe||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==Ae.numPlanes||st.numIntersection!==Ae.numIntersection)||st.vertexAlphas!==ut||st.vertexTangents!==pt||st.morphTargets!==it||st.morphNormals!==Ct||st.morphColors!==Xt||st.toneMapping!==Zt||st.morphTargetsCount!==Nt)&&(Ut=!0):(Ut=!0,st.__version=Me.version);let Mi=st.currentProgram;Ut===!0&&(Mi=ct(Me,ae,ce));let Rr=!1,Zn=!1,Ho=!1,Kt=Mi.getUniforms(),Di=st.uniforms;if(Te.useProgram(Mi.program)&&(Rr=!0,Zn=!0,Ho=!0),Me.id!==_&&(_=Me.id,Zn=!0),Rr||S!==D){Te.buffers.depth.getReversed()?(J.copy(D.projectionMatrix),hy(J),fy(J),Kt.setValue(Q,"projectionMatrix",J)):Kt.setValue(Q,"projectionMatrix",D.projectionMatrix),Kt.setValue(Q,"viewMatrix",D.matrixWorldInverse);let xs=Kt.map.cameraPosition;xs!==void 0&&xs.setValue(Q,$.setFromMatrixPosition(D.matrixWorld)),be.logarithmicDepthBuffer&&Kt.setValue(Q,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(Me.isMeshPhongMaterial||Me.isMeshToonMaterial||Me.isMeshLambertMaterial||Me.isMeshBasicMaterial||Me.isMeshStandardMaterial||Me.isShaderMaterial)&&Kt.setValue(Q,"isOrthographic",D.isOrthographicCamera===!0),S!==D&&(S=D,Zn=!0,Ho=!0)}if(ce.isSkinnedMesh){Kt.setOptional(Q,ce,"bindMatrix"),Kt.setOptional(Q,ce,"bindMatrixInverse");let ai=ce.skeleton;ai&&(ai.boneTexture===null&&ai.computeBoneTexture(),Kt.setValue(Q,"boneTexture",ai.boneTexture,U))}ce.isBatchedMesh&&(Kt.setOptional(Q,ce,"batchingTexture"),Kt.setValue(Q,"batchingTexture",ce._matricesTexture,U),Kt.setOptional(Q,ce,"batchingIdTexture"),Kt.setValue(Q,"batchingIdTexture",ce._indirectTexture,U),Kt.setOptional(Q,ce,"batchingColorTexture"),ce._colorsTexture!==null&&Kt.setValue(Q,"batchingColorTexture",ce._colorsTexture,U));let Vo=ye.morphAttributes;if((Vo.position!==void 0||Vo.normal!==void 0||Vo.color!==void 0)&&ke.update(ce,ye,Mi),(Zn||st.receiveShadow!==ce.receiveShadow)&&(st.receiveShadow=ce.receiveShadow,Kt.setValue(Q,"receiveShadow",ce.receiveShadow)),Me.isMeshGouraudMaterial&&Me.envMap!==null&&(Di.envMap.value=nt,Di.flipEnvMap.value=nt.isCubeTexture&&nt.isRenderTargetTexture===!1?-1:1),Me.isMeshStandardMaterial&&Me.envMap===null&&ae.environment!==null&&(Di.envMapIntensity.value=ae.environmentIntensity),Zn&&(Kt.setValue(Q,"toneMappingExposure",M.toneMappingExposure),st.needsLights&&kt(Di,Ho),Xe&&Me.fog===!0&&De.refreshFogUniforms(Di,Xe),De.refreshMaterialUniforms(Di,Me,k,ie,d.state.transmissionRenderTarget[D.id]),eo.upload(Q,Mt(st),Di,U)),Me.isShaderMaterial&&Me.uniformsNeedUpdate===!0&&(eo.upload(Q,Mt(st),Di,U),Me.uniformsNeedUpdate=!1),Me.isSpriteMaterial&&Kt.setValue(Q,"center",ce.center),Kt.setValue(Q,"modelViewMatrix",ce.modelViewMatrix),Kt.setValue(Q,"normalMatrix",ce.normalMatrix),Kt.setValue(Q,"modelMatrix",ce.matrixWorld),Me.isShaderMaterial||Me.isRawShaderMaterial){let ai=Me.uniformsGroups;for(let xs=0,vs=ai.length;xs<vs;xs++){let lp=ai[xs];C.update(lp,Mi),C.bind(lp,Mi)}}return Mi}function kt(D,ae){D.ambientLightColor.needsUpdate=ae,D.lightProbe.needsUpdate=ae,D.directionalLights.needsUpdate=ae,D.directionalLightShadows.needsUpdate=ae,D.pointLights.needsUpdate=ae,D.pointLightShadows.needsUpdate=ae,D.spotLights.needsUpdate=ae,D.spotLightShadows.needsUpdate=ae,D.rectAreaLights.needsUpdate=ae,D.hemisphereLights.needsUpdate=ae}function Wt(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(D,ae,ye){Pe.get(D.texture).__webglTexture=ae,Pe.get(D.depthTexture).__webglTexture=ye;let Me=Pe.get(D);Me.__hasExternalTextures=!0,Me.__autoAllocateDepthBuffer=ye===void 0,Me.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Me.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,ae){let ye=Pe.get(D);ye.__webglFramebuffer=ae,ye.__useDefaultFramebuffer=ae===void 0},this.setRenderTarget=function(D,ae=0,ye=0){w=D,b=ae,y=ye;let Me=!0,ce=null,Xe=!1,je=!1;if(D){let nt=Pe.get(D);if(nt.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(Q.FRAMEBUFFER,null),Me=!1;else if(nt.__webglFramebuffer===void 0)U.setupRenderTarget(D);else if(nt.__hasExternalTextures)U.rebindTextures(D,Pe.get(D.texture).__webglTexture,Pe.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let it=D.depthTexture;if(nt.__boundDepthTexture!==it){if(it!==null&&Pe.has(it)&&(D.width!==it.image.width||D.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(D)}}let ut=D.texture;(ut.isData3DTexture||ut.isDataArrayTexture||ut.isCompressedArrayTexture)&&(je=!0);let pt=Pe.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(pt[ae])?ce=pt[ae][ye]:ce=pt[ae],Xe=!0):D.samples>0&&U.useMultisampledRTT(D)===!1?ce=Pe.get(D).__webglMultisampledFramebuffer:Array.isArray(pt)?ce=pt[ye]:ce=pt,A.copy(D.viewport),I.copy(D.scissor),N=D.scissorTest}else A.copy(te).multiplyScalar(k).floor(),I.copy(ve).multiplyScalar(k).floor(),N=Se;if(Te.bindFramebuffer(Q.FRAMEBUFFER,ce)&&Me&&Te.drawBuffers(D,ce),Te.viewport(A),Te.scissor(I),Te.setScissorTest(N),Xe){let nt=Pe.get(D.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+ae,nt.__webglTexture,ye)}else if(je){let nt=Pe.get(D.texture),ut=ae||0;Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,nt.__webglTexture,ye||0,ut)}_=-1},this.readRenderTargetPixels=function(D,ae,ye,Me,ce,Xe,je){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=Pe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&je!==void 0&&(tt=tt[je]),tt){Te.bindFramebuffer(Q.FRAMEBUFFER,tt);try{let nt=D.texture,ut=nt.format,pt=nt.type;if(!be.textureFormatReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ae>=0&&ae<=D.width-Me&&ye>=0&&ye<=D.height-ce&&Q.readPixels(ae,ye,Me,ce,z.convert(ut),z.convert(pt),Xe)}finally{let nt=w!==null?Pe.get(w).__webglFramebuffer:null;Te.bindFramebuffer(Q.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(D,ae,ye,Me,ce,Xe,je){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=Pe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&je!==void 0&&(tt=tt[je]),tt){let nt=D.texture,ut=nt.format,pt=nt.type;if(!be.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ae>=0&&ae<=D.width-Me&&ye>=0&&ye<=D.height-ce){Te.bindFramebuffer(Q.FRAMEBUFFER,tt);let it=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,it),Q.bufferData(Q.PIXEL_PACK_BUFFER,Xe.byteLength,Q.STREAM_READ),Q.readPixels(ae,ye,Me,ce,z.convert(ut),z.convert(pt),0);let Ct=w!==null?Pe.get(w).__webglFramebuffer:null;Te.bindFramebuffer(Q.FRAMEBUFFER,Ct);let Xt=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await uy(Q,Xt,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,it),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Xe),Q.deleteBuffer(it),Q.deleteSync(Xt),Xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,ae=null,ye=0){D.isTexture!==!0&&(ea("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ae=arguments[0]||null,D=arguments[1]);let Me=Math.pow(2,-ye),ce=Math.floor(D.image.width*Me),Xe=Math.floor(D.image.height*Me),je=ae!==null?ae.x:0,tt=ae!==null?ae.y:0;U.setTexture2D(D,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,ye,0,0,je,tt,ce,Xe),Te.unbindTexture()},this.copyTextureToTexture=function(D,ae,ye=null,Me=null,ce=0){D.isTexture!==!0&&(ea("WebGLRenderer: copyTextureToTexture function signature has changed."),Me=arguments[0]||null,D=arguments[1],ae=arguments[2],ce=arguments[3]||0,ye=null);let Xe,je,tt,nt,ut,pt,it,Ct,Xt,Zt=D.isCompressedTexture?D.mipmaps[ce]:D.image;ye!==null?(Xe=ye.max.x-ye.min.x,je=ye.max.y-ye.min.y,tt=ye.isBox3?ye.max.z-ye.min.z:1,nt=ye.min.x,ut=ye.min.y,pt=ye.isBox3?ye.min.z:0):(Xe=Zt.width,je=Zt.height,tt=Zt.depth||1,nt=0,ut=0,pt=0),Me!==null?(it=Me.x,Ct=Me.y,Xt=Me.z):(it=0,Ct=0,Xt=0);let kn=z.convert(ae.format),Nt=z.convert(ae.type),st;ae.isData3DTexture?(U.setTexture3D(ae,0),st=Q.TEXTURE_3D):ae.isDataArrayTexture||ae.isCompressedArrayTexture?(U.setTexture2DArray(ae,0),st=Q.TEXTURE_2D_ARRAY):(U.setTexture2D(ae,0),st=Q.TEXTURE_2D),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,ae.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,ae.unpackAlignment);let $i=Q.getParameter(Q.UNPACK_ROW_LENGTH),Ut=Q.getParameter(Q.UNPACK_IMAGE_HEIGHT),Mi=Q.getParameter(Q.UNPACK_SKIP_PIXELS),Rr=Q.getParameter(Q.UNPACK_SKIP_ROWS),Zn=Q.getParameter(Q.UNPACK_SKIP_IMAGES);Q.pixelStorei(Q.UNPACK_ROW_LENGTH,Zt.width),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Zt.height),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,nt),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,ut),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,pt);let Ho=D.isDataArrayTexture||D.isData3DTexture,Kt=ae.isDataArrayTexture||ae.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){let Di=Pe.get(D),Vo=Pe.get(ae),ai=Pe.get(Di.__renderTarget),xs=Pe.get(Vo.__renderTarget);Te.bindFramebuffer(Q.READ_FRAMEBUFFER,ai.__webglFramebuffer),Te.bindFramebuffer(Q.DRAW_FRAMEBUFFER,xs.__webglFramebuffer);for(let vs=0;vs<tt;vs++)Ho&&Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Pe.get(D).__webglTexture,ce,pt+vs),D.isDepthTexture?(Kt&&Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Pe.get(ae).__webglTexture,ce,Xt+vs),Q.blitFramebuffer(nt,ut,Xe,je,it,Ct,Xe,je,Q.DEPTH_BUFFER_BIT,Q.NEAREST)):Kt?Q.copyTexSubImage3D(st,ce,it,Ct,Xt+vs,nt,ut,Xe,je):Q.copyTexSubImage2D(st,ce,it,Ct,Xt+vs,nt,ut,Xe,je);Te.bindFramebuffer(Q.READ_FRAMEBUFFER,null),Te.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Kt?D.isDataTexture||D.isData3DTexture?Q.texSubImage3D(st,ce,it,Ct,Xt,Xe,je,tt,kn,Nt,Zt.data):ae.isCompressedArrayTexture?Q.compressedTexSubImage3D(st,ce,it,Ct,Xt,Xe,je,tt,kn,Zt.data):Q.texSubImage3D(st,ce,it,Ct,Xt,Xe,je,tt,kn,Nt,Zt):D.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,ce,it,Ct,Xe,je,kn,Nt,Zt.data):D.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,ce,it,Ct,Zt.width,Zt.height,kn,Zt.data):Q.texSubImage2D(Q.TEXTURE_2D,ce,it,Ct,Xe,je,kn,Nt,Zt);Q.pixelStorei(Q.UNPACK_ROW_LENGTH,$i),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Ut),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,Mi),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,Rr),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,Zn),ce===0&&ae.generateMipmaps&&Q.generateMipmap(st),Te.unbindTexture()},this.copyTextureToTexture3D=function(D,ae,ye=null,Me=null,ce=0){return D.isTexture!==!0&&(ea("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ye=arguments[0]||null,Me=arguments[1]||null,D=arguments[2],ae=arguments[3],ce=arguments[4]||0),ea('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,ae,ye,Me,ce)},this.initRenderTarget=function(D){Pe.get(D).__webglFramebuffer===void 0&&U.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?U.setTextureCube(D,0):D.isData3DTexture?U.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?U.setTexture2DArray(D,0):U.setTexture2D(D,0),Te.unbindTexture()},this.resetState=function(){b=0,y=0,w=null,Te.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ss}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}},ho=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ua=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},fo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rh,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ln=new H,hr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},po=class extends Tn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gr,Yo=new H,Wr=new H,Xr=new H,qr=new Je,$o=new Je,jm=new Qe,gl=new H,Zo=new H,xl=new H,cm=new Je,zu=new Je,um=new Je,ha=class extends Yt{constructor(e=new po){if(super(),this.isSprite=!0,this.type="Sprite",Gr===void 0){Gr=new dt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new fo(t,5);Gr.setIndex([0,1,2,0,2,3]),Gr.setAttribute("position",new hr(i,3,0,!1)),Gr.setAttribute("uv",new hr(i,2,3,!1))}this.geometry=Gr,this.material=e,this.center=new Je(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wr.setFromMatrixScale(this.matrixWorld),jm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wr.multiplyScalar(-Xr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;vl(gl.set(-.5,-.5,0),Xr,o,Wr,s,r),vl(Zo.set(.5,-.5,0),Xr,o,Wr,s,r),vl(xl.set(.5,.5,0),Xr,o,Wr,s,r),cm.set(0,0),zu.set(1,0),um.set(1,1);let a=e.ray.intersectTriangle(gl,Zo,xl,!1,Yo);if(a===null&&(vl(Zo.set(-.5,.5,0),Xr,o,Wr,s,r),zu.set(0,1),a=e.ray.intersectTriangle(gl,xl,Zo,!1,Yo),a===null))return;let l=e.ray.origin.distanceTo(Yo);l<e.near||l>e.far||t.push({distance:l,point:Yo.clone(),uv:ns.getInterpolation(Yo,gl,Zo,xl,cm,zu,um,new Je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function vl(n,e,t,i,s,r){qr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?($o.x=r*qr.x-s*qr.y,$o.y=s*qr.x+r*qr.y):$o.copy(qr),n.copy(e),n.x+=$o.x,n.y+=$o.y,n.applyMatrix4(jm)}var hm=new H,fm=new Tt,dm=new Tt,rS=new H,pm=new Qe,yl=new H,ku=new Jn,mm=new Qe,Hu=new ao,Gl=class extends et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fp,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,yl),this.boundingBox.expandByPoint(yl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,yl),this.boundingSphere.expandByPoint(yl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ku.copy(this.boundingSphere),ku.applyMatrix4(s),e.ray.intersectsSphere(ku)!==!1&&(mm.copy(s).invert(),Hu.copy(e.ray).applyMatrix4(mm),!(this.boundingBox!==null&&Hu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Hu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Tt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Uv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;fm.fromBufferAttribute(s.attributes.skinIndex,e),dm.fromBufferAttribute(s.attributes.skinWeight,e),hm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=dm.getComponent(r);if(o!==0){let a=fm.getComponent(r);pm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(rS.copy(hm).applyMatrix4(pm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},fa=class extends Yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ls=class extends pn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=sn,h=sn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gm=new Qe,oS=new Qe,Wl=class n{constructor(e=[],t=[]){this.uuid=Ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:oS;gm.multiplyMatrices(a,t[r]),gm.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ls(t,e,e,Gn,Ai);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new fa),this.bones.push(o),this.boneInverses.push(new Qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},fr=class extends _t{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Yr=new Qe,xm=new Qe,_l=[],vm=new Wn,aS=new Qe,Ko=new et,jo=new Jn,An=class extends et{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,aS)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yr),vm.copy(e.boundingBox).applyMatrix4(Yr),this.boundingBox.union(vm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yr),jo.copy(e.boundingSphere).applyMatrix4(Yr),this.boundingSphere.union(jo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ko.geometry=this.geometry,Ko.material=this.material,Ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jo.copy(this.boundingSphere),jo.applyMatrix4(i),e.ray.intersectsSphere(jo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yr),xm.multiplyMatrices(i,Yr),Ko.matrixWorld=xm,Ko.raycast(e,_l);for(let o=0,a=_l.length;o<a;o++){let l=_l[o];l.instanceId=r,l.object=this,t.push(l)}_l.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ls(new Float32Array(s*this.count),s,this.count,mf,Ai));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Fi=class extends Tn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Xl=new H,ql=new H,ym=new Qe,Jo=new ao,Ml=new Jn,Vu=new H,_m=new H,mo=class extends Yt{constructor(e=new dt,t=new Fi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Xl.fromBufferAttribute(t,s-1),ql.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Xl.distanceTo(ql);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ml.copy(i.boundingSphere),Ml.applyMatrix4(s),Ml.radius+=r,e.ray.intersectsSphere(Ml)===!1)return;ym.copy(s).invert(),Jo.copy(e.ray).applyMatrix4(ym);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let d=h.getX(x),E=h.getX(x+1),v=bl(this,e,Jo,l,d,E);v&&t.push(v)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),d=bl(this,e,Jo,l,x,m);d&&t.push(d)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let d=bl(this,e,Jo,l,x,x+1);d&&t.push(d)}if(this.isLineLoop){let x=bl(this,e,Jo,l,g-1,p);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function bl(n,e,t,i,s,r){let o=n.geometry.attributes.position;if(Xl.fromBufferAttribute(o,s),ql.fromBufferAttribute(o,r),t.distanceSqToSegment(Xl,ql,Vu,_m)>i)return;Vu.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Vu);if(!(l<e.near||l>e.far))return{distance:l,point:_m.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Mm=new H,bm=new H,os=class extends mo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Mm.fromBufferAttribute(t,s),bm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Mm.distanceTo(bm);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Yl=class extends mo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},dr=class extends Tn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sm=new Qe,Xh=new ao,Sl=new Jn,El=new H,Ds=class extends Yt{constructor(e=new dt,t=new dr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(s),Sl.radius+=r,e.ray.intersectsSphere(Sl)===!1)return;Sm.copy(s).invert(),Xh.copy(e.ray).applyMatrix4(Sm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,x=p;g<x;g++){let m=c.getX(g);El.fromBufferAttribute(u,m),Em(El,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,x=p;g<x;g++)El.fromBufferAttribute(u,g),Em(El,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Em(n,e,t,i,s,r,o){let a=Xh.distanceSqToPoint(n);if(a<t){let l=new H;Xh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ui=class extends pn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $l=class n extends dt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new H,h=new Je;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=i+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(a,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Jt=class n extends dt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,x=[],m=i/2,d=0;E(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(p,2));function E(){let M=new H,T=new H,b=0,y=(t-e)/i;for(let w=0;w<=r;w++){let _=[],S=w/r,A=S*(t-e)+e;for(let I=0;I<=s;I++){let N=I/s,L=N*l+a,B=Math.sin(L),Y=Math.cos(L);T.x=A*B,T.y=-S*i+m,T.z=A*Y,u.push(T.x,T.y,T.z),M.set(B,y,Y).normalize(),f.push(M.x,M.y,M.z),p.push(N,1-S),_.push(g++)}x.push(_)}for(let w=0;w<s;w++)for(let _=0;_<r;_++){let S=x[_][w],A=x[_+1][w],I=x[_+1][w+1],N=x[_][w+1];(e>0||_!==0)&&(h.push(S,A,N),b+=3),(t>0||_!==r-1)&&(h.push(A,I,N),b+=3)}c.addGroup(d,b,0),d+=b}function v(M){let T=g,b=new Je,y=new H,w=0,_=M===!0?e:t,S=M===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),g++;let A=g;for(let I=0;I<=s;I++){let L=I/s*l+a,B=Math.cos(L),Y=Math.sin(L);y.x=_*Y,y.y=m*S,y.z=_*B,u.push(y.x,y.y,y.z),f.push(0,S,0),b.x=B*.5+.5,b.y=Y*.5*S+.5,p.push(b.x,b.y),g++}for(let I=0;I<s;I++){let N=T+I,L=A+I;M===!0?h.push(L,L+1,N):h.push(L+1,L,N),w+=3}c.addGroup(d,w,M===!0?1:2),d+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qn=class n extends Jt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zl=class n extends dt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let v=new H,M=new H,T=new H;for(let b=0;b<t.length;b+=3)p(t[b+0],v),p(t[b+1],M),p(t[b+2],T),l(v,M,T,E)}function l(E,v,M,T){let b=T+1,y=[];for(let w=0;w<=b;w++){y[w]=[];let _=E.clone().lerp(M,w/b),S=v.clone().lerp(M,w/b),A=b-w;for(let I=0;I<=A;I++)I===0&&w===b?y[w][I]=_:y[w][I]=_.clone().lerp(S,I/A)}for(let w=0;w<b;w++)for(let _=0;_<2*(b-w)-1;_++){let S=Math.floor(_/2);_%2===0?(f(y[w][S+1]),f(y[w+1][S]),f(y[w][S])):(f(y[w][S+1]),f(y[w+1][S+1]),f(y[w+1][S]))}}function c(E){let v=new H;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(E),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){let E=new H;for(let v=0;v<r.length;v+=3){E.x=r[v+0],E.y=r[v+1],E.z=r[v+2];let M=m(E)/2/Math.PI+.5,T=d(E)/Math.PI+.5;o.push(M,1-T)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){let v=o[E+0],M=o[E+2],T=o[E+4],b=Math.max(v,M,T),y=Math.min(v,M,T);b>.9&&y<.1&&(v<.2&&(o[E+0]+=1),M<.2&&(o[E+2]+=1),T<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function p(E,v){let M=E*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function g(){let E=new H,v=new H,M=new H,T=new H,b=new Je,y=new Je,w=new Je;for(let _=0,S=0;_<r.length;_+=9,S+=6){E.set(r[_+0],r[_+1],r[_+2]),v.set(r[_+3],r[_+4],r[_+5]),M.set(r[_+6],r[_+7],r[_+8]),b.set(o[S+0],o[S+1]),y.set(o[S+2],o[S+3]),w.set(o[S+4],o[S+5]),T.copy(E).add(v).add(M).divideScalar(3);let A=m(T);x(b,S+0,E,A),x(y,S+2,v,A),x(w,S+4,M,A)}}function x(E,v,M,T){T<0&&E.x===1&&(o[v]=E.x-1),M.x===0&&M.z===0&&(o[v]=T/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var wl=new H,Tl=new H,Gu=new H,Al=new ns,Kl=class extends dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Jr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:d}=Al;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),Al.getNormal(Gu),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let E=0;E<3;E++){let v=(E+1)%3,M=u[E],T=u[v],b=Al[h[E]],y=Al[h[v]],w=`${M}_${T}`,_=`${T}_${M}`;_ in f&&f[_]?(Gu.dot(f[_].normal)<=r&&(p.push(b.x,b.y,b.z),p.push(y.x,y.y,y.z)),f[_]=null):w in f||(f[w]={index0:c[E],index1:c[v],normal:Gu.clone()})}}for(let g in f)if(f[g]){let{index0:x,index1:m}=f[g];wl.fromBufferAttribute(a,x),Tl.fromBufferAttribute(a,m),p.push(wl.x,wl.y,wl.z),p.push(Tl.x,Tl.y,Tl.z)}this.setAttribute("position",new rt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var ei=class n extends Zl{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},pr=class n extends Zl{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},jl=class n extends dt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,p=new H,g=new Je;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let d=r+m/i*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(i+1);for(let d=0;d<i;d++){let E=d+m,v=E,M=E+i+1,T=E+i+2,b=E+1;a.push(v,M,b),a.push(M,T,b)}}this.setIndex(a),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ns=class n extends dt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new H,f=new H,p=[],g=[],x=[],m=[];for(let d=0;d<=i;d++){let E=[],v=d/i,M=0;d===0&&o===0?M=.5/t:d===i&&l===Math.PI&&(M=-.5/t);for(let T=0;T<=t;T++){let b=T/t;u.x=-e*Math.cos(s+b*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+b*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(b+M,1-v),E.push(c++)}h.push(E)}for(let d=0;d<i;d++)for(let E=0;E<t;E++){let v=h[d][E+1],M=h[d][E],T=h[d+1][E],b=h[d+1][E+1];(d!==0||o>0)&&p.push(v,M,b),(d!==i-1||l<Math.PI)&&p.push(M,T,b)}this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Jl=class n extends dt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new H,u=new H,f=new H;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let x=g/s*r,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,E=(s+1)*p+g;o.push(x,m,E),o.push(m,d,E)}this.setIndex(o),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ql=class extends St{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},ot=class extends Tn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ti=class extends ot{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ec=class extends Tn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Un=class extends Tn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Rl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function lS(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function cS(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function wm(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Jm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Us=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qh=class extends Us{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dp,endingEnd:dp}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case pp:r=e,a=2*t-i;break;case mp:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case pp:o=e,l=2*i-t;break;case mp:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,E=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-p)*m+(1.5+p)*x+.5*g,M=p*m-p*x;for(let T=0;T!==a;++T)r[T]=d*o[h+T]+E*o[c+T]+v*o[l+T]+M*o[u+T];return r}},Yh=class extends Us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},$h=class extends Us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},hi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rl(t,this.TimeBufferType),this.values=Rl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Rl(e.times,Array),values:Rl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new $h(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case so:t=this.InterpolantFactoryMethodDiscrete;break;case ro:t=this.InterpolantFactoryMethodLinear;break;case fu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return so;case this.InterpolantFactoryMethodLinear:return ro;case this.InterpolantFactoryMethodSmooth:return fu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&lS(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===fu,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,p=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=ro;var Os=class extends hi{constructor(e,t,i){super(e,t,i)}};Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=so;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var tc=class extends hi{};tc.prototype.ValueTypeName="color";var as=class extends hi{};as.prototype.ValueTypeName="number";var Zh=class extends Us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)un.slerpFlat(r,0,o,c-a,o,c,l);return r}},ls=class extends hi{InterpolantFactoryMethodLinear(e){return new Zh(this.times,this.values,this.getValueSize(),e)}};ls.prototype.ValueTypeName="quaternion";ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Fs=class extends hi{constructor(e,t,i){super(e,t,i)}};Fs.prototype.ValueTypeName="string";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=so;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends hi{};cs.prototype.ValueTypeName="vector";var nc=class{constructor(e="",t=-1,i=[],s=Ov){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ri(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(hS(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(hi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=cS(l);l=wm(l,1,h),c=wm(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new as(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,f,p,g,x){if(p.length!==0){let m=[],d=[];Jm(p,m,d,g),m.length!==0&&x.push(new u(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)p[f[g].morphTargets[x]]=-1;for(let x in p){let m=[],d=[];for(let E=0;E!==f[g].morphTargets.length;++E){let v=f[g];m.push(v.time),d.push(v.morphTarget===x?1:0)}s.push(new as(".morphTargetInfluence["+x+"]",m,d))}l=p.length*o}else{let p=".bones["+t[u].name+"]";i(cs,p+".position",f,"pos",s),i(ls,p+".quaternion",f,"rot",s),i(cs,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function uS(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return as;case"vector":case"vector2":case"vector3":case"vector4":return cs;case"color":return tc;case"quaternion":return ls;case"bool":case"boolean":return Os;case"string":return Fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function hS(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=uS(n.type);if(n.times===void 0){let t=[],i=[];Jm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Ts={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Kh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},fS=new Kh,us=class{constructor(e){this.manager=e!==void 0?e:fS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};us.DEFAULT_MATERIAL_NAME="__DEFAULT";var es={},jh=class extends Error{constructor(e,t){super(e),this.response=t}},da=class extends us{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ts.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(es[e]!==void 0){es[e].push({onLoad:t,onProgress:i,onError:s});return}es[e]=[],es[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=es[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,x=0,m=new ReadableStream({start(d){E();function E(){u.read().then(({done:v,value:M})=>{if(v)d.close();else{x+=M.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let b=0,y=h.length;b<y;b++){let w=h[b];w.onProgress&&w.onProgress(T)}d.enqueue(M),E()}},v=>{d.error(v)})}}});return new Response(m)}else throw new jh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ts.add(e,c);let h=es[e];delete es[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=es[e];if(h===void 0)throw this.manager.itemError(e),c;delete es[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Jh=class extends us{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ts.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=la("img");function l(){h(),Ts.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var ic=class extends us{constructor(e){super(e)}load(e,t,i,s){let r=new pn,o=new Jh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},go=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},xo=class extends go{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Wu=new Qe,Tm=new H,Am=new H,pa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Tm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tm),Am.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Am),t.updateMatrixWorld(),Wu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Qh=class extends pa{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=oo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},vo=class extends go{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Qh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Rm=new Qe,Qo=new H,Xu=new H,ef=class extends pa{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Qo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Qo),Xu.copy(i.position),Xu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Xu),i.updateMatrixWorld(),s.makeTranslation(-Qo.x,-Qo.y,-Qo.z),Rm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rm)}},sc=class extends go{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ef}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},tf=class extends pa{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bi=class extends go{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new tf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Bs=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var rc=class extends us{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ts.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ts.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ts.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ts.add(e,l),r.manager.itemStart(e)}};var oc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Cm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Cm(){return performance.now()}var Mf="\\[\\]\\.:\\/",dS=new RegExp("["+Mf+"]","g"),bf="[^"+Mf+"]",pS="[^"+Mf.replace("\\.","")+"]",mS=/((?:WC+[\/:])*)/.source.replace("WC",bf),gS=/(WCOD+)?/.source.replace("WCOD",pS),xS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bf),vS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bf),yS=new RegExp("^"+mS+gS+xS+vS+"$"),_S=["material","materials","bones","map"],nf=class{constructor(e,t,i){let s=i||qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},qt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dS,"")}static parseTrackName(e){let t=yS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);_S.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qt.Composite=nf;qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray];qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var g2=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var va=class n extends et{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new en;let i=this,s=t.color!==void 0?new Ne(t.color):new Ne(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new wi,u=new H,f=new H,p=new H,g=new Qe,x=new H(0,0,-1),m=new Tt,d=new H,E=new H,v=new Tt,M=new Qe,T=this.camera,b=new tn(r,o,{samples:c,type:gn}),y=new St({name:l.name!==void 0?l.name:"unspecified",uniforms:Cn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});y.uniforms.tDiffuse.value=b.texture,y.uniforms.color.value=s,y.uniforms.textureMatrix.value=M,this.material=y,this.onBeforeRender=function(w,_,S){if(f.setFromMatrixPosition(i.matrixWorld),p.setFromMatrixPosition(S.matrixWorld),g.extractRotation(i.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),d.subVectors(f,p),d.dot(u)>0)return;d.reflect(u).negate(),d.add(f),g.extractRotation(S.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(p),E.subVectors(f,x),E.reflect(u).negate(),E.add(f),T.position.copy(d),T.up.set(0,1,0),T.up.applyMatrix4(g),T.up.reflect(u),T.lookAt(E),T.far=S.far,T.updateMatrixWorld(),T.projectionMatrix.copy(S.projectionMatrix),M.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),M.multiply(T.projectionMatrix),M.multiply(T.matrixWorldInverse),M.multiply(i.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(T.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let A=T.projectionMatrix;v.x=(Math.sign(m.x)+A.elements[8])/A.elements[0],v.y=(Math.sign(m.y)+A.elements[9])/A.elements[5],v.z=-1,v.w=(1+A.elements[10])/A.elements[14],m.multiplyScalar(2/m.dot(v)),A.elements[2]=m.x,A.elements[6]=m.y,A.elements[10]=m.z+1-a,A.elements[14]=m.w,i.visible=!1;let I=w.getRenderTarget(),N=w.xr.enabled,L=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(b),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(_,T),w.xr.enabled=N,w.shadowMap.autoUpdate=L,w.setRenderTarget(I);let B=S.viewport;B!==void 0&&w.state.viewport(B),i.visible=!0},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),i.material.dispose()}}};va.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var mc=[25,18,15,12,10,8,6,4],mr={maxSpeed:80,accel:26,brake:30,steerRate:1.7,steerHighSpeed:.75,grip:1,wetGrip:.78,driftBonus:1.6,airControl:.12,airStability:1,landing:1,boostPower:1.22,boostDuration:2.2,boostCharges:3,offroadDrag:1,wallLoss:.25,steerNoise:0,slipstream:1},zs={sunset:{id:"sunset",name:"Fin d'apr\xE8s-midi",grip:1,wet:0,rain:0,wind:0,sheen:.9,skyTop:8825052,skyHorizon:15785172,fogColor:14074548,fogDensity:52e-5,sunColor:16756316,sunIntensity:4.6,sunDir:[-.5,.21,-.62],hemiSky:12899050,hemiGround:9399366,hemiIntensity:.8,seaColor:2786996,night:!1,bloom:.34},sicily:{id:"sicily",name:"Apr\xE8s-midi sicilien",grip:1,wet:0,rain:0,wind:.1,sheen:.2,skyTop:4885468,skyHorizon:13623792,fogColor:13425124,fogDensity:5e-4,sunColor:16773854,sunIntensity:3.3,sunDir:[-.45,.62,-.4],hemiSky:12375282,hemiGround:8156256,hemiIntensity:.85,seaColor:1994664,night:!1,bloom:.25},rain:{id:"rain",name:"Nuit pluvieuse",grip:.8,wet:1,rain:1,wind:.6,skyTop:329231,skyHorizon:1711933,fogColor:1317427,fogDensity:.0028,sunColor:7375103,sunIntensity:.7,sunDir:[.4,.7,.3],hemiSky:3820170,hemiGround:1052696,hemiIntensity:.75,seaColor:662067,night:!0,bloom:1},fog:{id:"fog",name:"Brume matinale",grip:.92,wet:.35,rain:0,wind:.2,skyTop:10467535,skyHorizon:15262418,fogColor:14277846,fogDensity:.0052,sunColor:16773328,sunIntensity:1.5,sunDir:[.5,.35,.5],hemiSky:13621734,hemiGround:7301722,hemiIntensity:1.1,seaColor:6262687,night:!1,bloom:.35}};function ya(n){let e=String(n),t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t^=t>>>15,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}function ni(n){let e=(typeof n=="number"?n>>>0:ya(n))||1,t=e,i=()=>{e=e+1831565813>>>0;let s=e;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};return{next:i,range:(s,r)=>s+(r-s)*i(),int:(s,r)=>s+Math.floor(i()*(r-s+1)),pick:s=>s[Math.floor(i()*s.length)],chance:s=>i()<s,sign:()=>i()<.5?-1:1,shuffle:s=>{let r=s.slice();for(let o=r.length-1;o>0;o--){let a=Math.floor(i()*(o+1));[r[o],r[a]]=[r[a],r[o]]}return r},fork:s=>ni(ya(t+":"+s))}}var gc=Math.PI*2,MS=2,Qm=2800,e0=4200,bS=34,t0=8,n0=60,SS=.12,ES=.1,i0=28,wS=150,Sf=52,Af=.0025,s0=1/150,TS=10,r0=5,o0=250,a0=38,l0=75,xc=150,wf=120,f0=10,AS=80,RS=40,CS=20,PS=30,IS=95,Ef=18,c0=22,LS=60,Tf=(n,e,t)=>n<e?e:n>t?t:n;function DS(n){let e=n.int(10,14),t=n.range(440,520),i=[];for(let s=0;s<e;s++){let r=n.range(-.3,.3)*(gc/e),o=s/e*gc+r,a=Tf(t*n.range(.62,1.25),380,620);i.push([a*Math.cos(o),a*Math.sin(o)])}return i}function NS(n,e,t,i,s,r,o,a,l){let c=(x,m,d,E)=>{let v=(l-d)/(E-d);return[x[0]+(m[0]-x[0])*v,x[1]+(m[1]-x[1])*v]},h=c(n,e,s,r),u=c(e,t,r,o),f=c(t,i,o,a),p=c(h,u,s,o),g=c(u,f,r,a);return c(p,g,r,o)}function US(n,e){let t=n.length,i=[];for(let s=0;s<t;s++){let r=n[(s-1+t)%t],o=n[s],a=n[(s+1)%t],l=n[(s+2)%t],c=0,h=c+Math.sqrt(Math.hypot(o[0]-r[0],o[1]-r[1])),u=h+Math.sqrt(Math.hypot(a[0]-o[0],a[1]-o[1])),f=u+Math.sqrt(Math.hypot(l[0]-a[0],l[1]-a[1]));for(let p=0;p<e;p++){let g=h+(u-h)*(p/e);i.push(NS(r,o,a,l,c,h,u,f,g))}}return i}function OS(n){let e=n.length,t=new Float64Array(e+1);for(let c=0;c<e;c++){let h=n[c],u=n[(c+1)%e];t[c+1]=t[c]+Math.hypot(u[0]-h[0],u[1]-h[1])}let i=t[e],s=Math.max(1,Math.round(i/MS)),r=i/s,o=new Float64Array(s),a=new Float64Array(s),l=0;for(let c=0;c<s;c++){let h=c*r;for(;l<e-1&&t[l+1]<=h;)l++;let u=n[l],f=n[(l+1)%e],p=t[l+1]-t[l],g=p>0?(h-t[l])/p:0;o[c]=u[0]+(f[0]-u[0])*g,a[c]=u[1]+(f[1]-u[1])*g}return{xs:o,zs:a,count:s,step:r}}function u0(n,e){let t=n.length,i=new Float64Array(t),s=2*e+1,r=0;for(let o=-e;o<=e;o++)r+=n[(o+t)%t];for(let o=0;o<t;o++)i[o]=r/s,r+=n[(o+1+e)%t]-n[((o-e)%t+t)%t];return i}function FS(n,e,t){let i=n.length,s=new Float64Array(i),r=new Float64Array(i);for(let a=0;a<i;a++){let l=(a-1+i)%i,c=(a+1)%i,h=n[c]-n[l],u=e[c]-e[l],f=Math.hypot(h,u)||1;s[a]=h/f,r[a]=u/f}let o=new Float64Array(i);for(let a=0;a<i;a++){let l=(a-1+i)%i,c=(a+1)%i,h=(s[c]-s[l])/(2*t),u=(r[c]-r[l])/(2*t);o[a]=s[a]*u-r[a]*h}return o}function BS(n,e){let t=n.length;for(let i=0;i<50;i++){let s=!1;for(let r=2*t-1;r>=0;r--){let o=r%t,a=(o+1)%t,l=Math.sqrt(n[a]*n[a]+2*RS*e);n[o]>l+1e-9&&(n[o]=l,s=!0)}for(let r=0;r<2*t;r++){let o=r%t,a=(o+1)%t,l=Math.sqrt(n[o]*n[o]+2*CS*e);n[a]>l+1e-9&&(n[a]=l,s=!0)}if(!s)break}}function h0(n){let e=n.length,t=-1;for(let r=0;r<e;r++)if(n[r]!==n[(r-1+e)%e]){t=r;break}if(t<0)return n[0]!==0?[{start:0,len:e,key:n[0]}]:[];let i=[],s=null;for(let r=0;r<e;r++){let o=(t+r)%e,a=n[o];s&&a===s.key?s.len++:(s&&s.key!==0&&i.push(s),s={start:o,len:1,key:a})}return s&&s.key!==0&&i.push(s),i}function d0(n,e){let t=n.length,i=0;for(let s=0;s<t;s++){let r=n[s].vmax,o=n[(s+1)%t].vmax;i+=e/Math.max(1,.5*(r+o))}return i}function Rf(n,e){let t=n.length,i=0,s=0,r=new Int8Array(t),o=new Int8Array(t);for(let c=0;c<t;c++){let h=n[c].curv,u=Math.abs(h);u>i&&(i=u);let f=Math.abs(n[c].slope);f>s&&(s=f),r[c]=h>s0?1:h<-s0?-1:0,o[c]=u<Af?1:0}let a=0;for(let c of h0(r))c.len*e>=TS&&a++;let l={start:0,len:0};for(let c of h0(o))c.key===1&&c.len>l.len&&(l=c);return{minRadius:i>0?1/i:1/0,maxSlope:s,corners:a,longestStraight:l.len*e,longestStraightStart:l.start}}function zS(n,e){let t=n.length,i=Sf,s=(c,h)=>(c+4096)*8192+(h+4096),r=new Map,o=new Array(t);for(let c=0;c<t;c++){let h=Math.floor(n[c].x/i),u=Math.floor(n[c].z/i);o[c]=[h,u];let f=s(h,u),p=r.get(f);p||(p=[],r.set(f,p)),p.push(c)}let a=0,l=Sf*Sf;for(let c=0;c<t;c++){let[h,u]=o[c];for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){let g=r.get(s(h+f,u+p));if(g)for(let x of g){if(x<=c)continue;let m=Math.abs(c-x);if(Math.min(m,t-m)*e<=wS)continue;let E=n[c].x-n[x].x,v=n[c].z-n[x].z;E*E+v*v<l&&a++}}}return a}function kS(n){let e=DS(n),t=US(e,160),{xs:i,zs:s,count:r,step:o}=OS(t),a=[[8,12],[4,7],[2,4],[1,2]],l=[1,2,4,7].map((y,w)=>({k:y,a:n.range(a[w][0],a[w][1]),p:n.range(0,gc)})),c=new Float64Array(r),h=new Float64Array(r),u=new Float64Array(r);for(let y=0;y<r;y++){let w=(y-1+r)%r,_=(y+1)%r,S=i[_]-i[w],A=s[_]-s[w];u[y]=Math.hypot(S,A)||1e-9,c[y]=S/u[y],h[y]=A/u[y]}let f=new Float64Array(r),p=new Float64Array(r),g=1;for(let y=0;y<40;y++){for(let _=0;_<r;_++){let S=0;for(let A of l)S+=A.a*g*Math.sin(gc*A.k*_/r+A.p);f[_]=bS+S}let w=0;for(let _=0;_<r;_++){let S=(_-1+r)%r,A=(_+1)%r;p[_]=(f[A]-f[S])/u[_],Math.abs(p[_])>w&&(w=Math.abs(p[_]))}if(w<=ES)break;g*=.9}let x=new Float64Array(r),m=new Float64Array(r),d=new Float64Array(r);for(let y=0;y<r;y++){let w=(y-1+r)%r,_=(y+1)%r,S=i[_]-i[w],A=f[_]-f[w],I=s[_]-s[w],N=Math.hypot(S,A,I)||1e-9;x[y]=S/N,m[y]=A/N,d[y]=I/N}let E=FS(i,s,o),v=u0(E,2),M=new Float64Array(r);for(let y=0;y<r;y++){let w=Tf((Math.abs(v[y])-.016666666666666666)/.023333333333333334,0,1);M[y]=Ef+(c0-Ef)*w}let T=u0(M,10);for(let y=0;y<r;y++)T[y]=Tf(T[y],Ef,c0);let b=new Float64Array(r);for(let y=0;y<r;y++)b[y]=Math.min(IS,Math.sqrt(PS/Math.max(Math.abs(v[y]),1e-9)));return BS(b,o),{xs:i,ys:f,zs:s,count:r,step:o,fx:c,fz:h,tx:x,ty:m,tz:d,slope:p,curv:v,width:T,vmax:b}}function HS(n){let{xs:e,ys:t,zs:i,count:s,step:r,fx:o,fz:a,tx:l,ty:c,tz:h,slope:u,curv:f,width:p,vmax:g}=n,x=[];for(let v=0;v<s;v++)x.push({curv:f[v],slope:u[v],vmax:g[v],x:e[v],z:i[v]});let m=Rf(x,r),d=m.longestStraight>0?(m.longestStraightStart+Math.round(AS/r))%s:0,E=new Array(s);for(let v=0;v<s;v++){let M=(d+v)%s;E[v]={s:v*r,x:e[M],y:t[M],z:i[M],tx:l[M],ty:c[M],tz:h[M],rx:-a[M],rz:o[M],width:p[M],curv:f[M],vmax:g[M],slope:u[M]}}return E}function VS(n,e,t){let i=n.length,s=new Int32Array(i+1);for(let m=0;m<i;m++)s[m+1]=s[m]+(Math.abs(n[m].curv)>=Af?1:0);let r=(m,d)=>s[d+1]-s[m]===0,o=Math.ceil(xc/e),a=Math.floor((i*e-xc)/e),l=Math.ceil(f0/e),c=[],h=[],u=(m,d)=>c.every(([E,v])=>d<E||m>v),f=(m,d,E,v)=>{for(let M=0;M<400;M++){let T=Math.round(t.range(m,d)/e),b=Math.ceil(E/e),y=T+b;if(a-y<o)return null;let w=t.int(o,a-y),_=w+T;if(v&&!r(w,_+b))continue;let S=w-l,A=_+b+l;if(!(S<0||A>i-1||!u(S,A)))return c.push([S,A]),{a:w,b:_}}return null},p=t.int(2,3);for(let m=0;m<p;m++){let d=f(12,16,wf,!0);d&&h.push({type:"ramp",s0:d.a*e,s1:d.b*e,height:t.range(1.2,2.2)})}let g=t.int(2,3);for(let m=0;m<g;m++){let d=f(10,10,0,!1);d&&h.push({type:"boost",s0:d.a*e,s1:d.b*e})}let x=t.int(1,2);for(let m=0;m<x;m++){let d=f(60,140,0,!1);d&&h.push({type:"tunnel",s0:d.a*e,s1:d.b*e})}return h.sort((m,d)=>m.s0-d.s0),h}function GS(n,e,t){let i=kS(n),s=HS(i),{count:r,step:o}=i,a=r*o,l=VS(s,o,n),c=Rf(s,o),h=1/0,u=-1/0,f=1/0,p=-1/0;for(let g of s)g.x<h&&(h=g.x),g.x>u&&(u=g.x),g.z<f&&(f=g.z),g.z>p&&(p=g.z);return{seed:e,attempts:t,length:a,step:o,count:r,pts:s,features:l,bounds:{minX:h,maxX:u,minZ:f,maxZ:p},stats:{minRadius:c.minRadius,maxSlope:c.maxSlope,lapTimeEstimate:d0(s,o),corners:c.corners}}}function WS(n){let e=[],{pts:t,count:i,step:s,length:r}=n;if(!Array.isArray(t)||t.length!==i||!(i>0)||!(s>0))return{ok:!1,reasons:["structure invalide"]};r>=Qm&&r<=e0||e.push(`longueur ${r.toFixed(0)} m hors [${Qm}, ${e0}]`),Math.abs(i*s-r)>1e-6&&e.push("count * step != length");let o=1/0,a=-1/0;for(let d of t)d.y<o&&(o=d.y),d.y>a&&(a=d.y);(o<t0||a>n0)&&e.push(`altitude ${o.toFixed(1)}..${a.toFixed(1)} hors [${t0}, ${n0}]`);let l=Rf(t,s);l.minRadius>=i0||e.push(`rayon min ${l.minRadius.toFixed(1)} m < ${i0}`),l.maxSlope>SS&&e.push(`pente max ${(l.maxSlope*100).toFixed(1)} % > 12 %`),l.corners<r0&&e.push(`${l.corners} virages < ${r0}`),l.longestStraight<o0&&e.push(`ligne droite max ${l.longestStraight.toFixed(0)} m < ${o0}`);let c=zS(t,s);c>0&&e.push(`${c} paires d'\xE9chantillons trop proches (croisement ou rapprochement)`);let h=d0(t,s);h>=a0&&h<=l0||e.push(`temps au tour ${h.toFixed(1)} s hors [${a0}, ${l0}]`);let u=n.features||[],f=u.filter(d=>d.type==="ramp").length,p=u.filter(d=>d.type==="boost").length,g=u.filter(d=>d.type==="tunnel").length;f<2&&e.push(`${f} tremplin(s) < 2`),p<2&&e.push(`${p} boost(s) < 2`),g<1&&e.push("aucun tunnel");let x=d=>Math.round((d%r+r)%r/s)%i;for(let d of u)if((d.s0<xc||d.s1>r-xc)&&e.push(`feature ${d.type} trop proche du d\xE9part`),d.type==="ramp"){let E=d.s1-d.s0;(E<11.5||E>16.5)&&e.push(`tremplin de ${E.toFixed(1)} m hors 12..16`),d.height>=1.2&&d.height<=2.2||e.push("hauteur de tremplin hors 1.2..2.2");let v=x(d.s0),M=x(d.s1+wf),T=!0;for(let b=v;b!==(M+1)%i;b=(b+1)%i)if(Math.abs(t[b].curv)>=Af){T=!1;break}T||e.push("tremplin non situ\xE9 sur une ligne droite avec r\xE9ception")}let m=u.slice().sort((d,E)=>d.s0-E.s0);for(let d=0;d+1<m.length;d++){let E=m[d],v=m[d+1],M=E.s1+(E.type==="ramp"?wf:0);v.s0<M+f0-1e-6&&e.push(`features ${E.type} et ${v.type} se chevauchent`)}return{ok:e.length===0,reasons:e}}function p0(n,e={}){let t=e.maxAttempts??LS,i=ni(n),s=null,r=1/0;for(let o=0;o<t;o++){let a=i.fork("try"+o),l=GS(a,n,o+1),c=WS(l);if(c.ok)return l;c.reasons.length<r&&(r=c.reasons.length,s=l)}return s.attempts=t,s}function Cf(n,e){let t=n.length;if(n.open)return e<0?0:Math.min(e,(n.count-1.001)*n.step);let i=e%t;return i<0&&(i+=t),i>=t&&(i-=t),i}var XS=(n,e)=>{let t=Math.hypot(n,e)||1;return[n/t,e/t]};function fi(n,e,t={}){let i=n.count,s=n.step,r=Cf(n,e),o=r/s,a=Math.floor(o),l=a%i,c=(l+1)%i,h=o-a,u=n.pts[l],f=n.pts[c],p=(M,T)=>M+(T-M)*h,g=p(u.tx,f.tx),x=p(u.ty,f.ty),m=p(u.tz,f.tz),d=Math.hypot(g,x,m)||1,[E,v]=XS(p(u.rx,f.rx),p(u.rz,f.rz));if(t.s=r,t.x=p(u.x,f.x),t.y=p(u.y,f.y),t.z=p(u.z,f.z),n.open&&e!==r){let M=e-r;t.x+=g/d*M,t.z+=m/d*M}return t.tx=g/d,t.ty=x/d,t.tz=m/d,t.rx=E,t.rz=v,t.width=p(u.width,f.width),t.curv=p(u.curv,f.curv),t.vmax=p(u.vmax,f.vmax),t.slope=p(u.slope,f.slope),t.i=l,t}var hs={};function It(n,e,t,i={}){return fi(n,e,hs),i.x=hs.x+t*hs.rx,i.y=hs.y,i.z=hs.z+t*hs.rz,i.heading=Math.atan2(hs.tx,hs.tz),i.slope=hs.slope,i}function m0(n,e){let t=Cf(n,e);for(let i of n.features)if(i.type==="ramp"&&t>=i.s0&&t<i.s1)return i.height*(t-i.s0)/(i.s1-i.s0);return 0}function ks(n,e,t){let i=Cf(n,e);for(let s of n.features)if((t===void 0||s.type===t)&&i>=s.s0&&i<=s.s1)return s;return null}var $S=1/30,g0=.5,x0=.4,ZS=.6,_a=[.2,.36,.52,.68,.84],v0=_a.length+1,KS=.2,jS=.1,JS=.34,QS=4,eE=4,tE=.2,nE=4.9,iE=5.5,sE=5,rE=6,oE=1.8,aE=.03,lE=1.6,cE=.5,uE=2,hE=.785,fE=4.7,dE=2.5,Mo=.196,pE=.098,mE=.5,gE=.27,xE=16,vE=11,yE=.72,_E=5,ME=.5,y0=.35,bE=.42,SE=60,EE=.3,wE=5,TE=1.6,AE=3,RE=14,CE=.004,PE=1.2,IE=2,LE=.5,DE=22,_0=.25,NE=6,UE=1.8,M0=1,OE=["s","d","yaw","vdir","speed","yRel","vy","lean","steer","pitch","compress","drift","boostT","wheelSpin","stun","rpm","wheelie","_g","_vyG","_shiftT","_t","_pitchF","_dive","_turnF","_springA","_springP","_wallT","_apex"],nn=(n,e,t)=>n<e?e:n>t?t:n,ki=(n,e=0)=>Number.isFinite(n)?n:e,FE=(n,e)=>{let t=n%e;return t<0?t+e:t},BE=(n,e,t)=>n<e?Math.min(e,n+t):Math.max(e,n-t);function b0({s:n=0,d:e=0}={}){return{s:n,d:e,yaw:0,vdir:0,speed:0,yRel:0,vy:0,airborne:!1,lean:0,steer:0,pitch:0,compress:0,drift:0,boostT:0,boostCharges:mr.boostCharges,onRoad:!0,wheelSpin:0,stun:0,gear:1,rpm:0,wheelie:0,events:[],_init:!1,_g:0,_vyG:0,_prevBoost:!1,_padKey:null,_shiftT:0,_wallHit:!1,_t:0,_turnF:0,_pitchF:0,_dive:0,_springA:0,_springP:0,_wallT:0,_apex:0}}function S0(n,e,t,i,s,r,o){let a=n.events,l=e||{},c=s||{},h=!!l.boost&&!n._prevBoost;if(n._prevBoost=!!l.boost,r=Number.isFinite(r)&&r>0?Math.min(r,$S):0,n._init||(n._init=!0,n.boostCharges=i.boostCharges),r===0)return n;let u=t.length,f=i.maxSpeed,p=nn(ki(l.throttle),0,1),g=nn(ki(l.brake),0,1),x=nn(ki(l.steer),-1,1),m=n.stun>0;m&&(n.stun=Math.max(0,n.stun-r),p=0,g=0,x=0);let d=Ye=>t.open?Ye:FE(Ye,u),E=d(n.s),v=fi(t,E),M=!n.airborne;if(h&&!m&&n.boostCharges>0&&n.boostT<=0&&(n.boostCharges-=1,n.boostT=i.boostDuration,a.push("boost")),M){let Ye=ks(t,E,"boost");if(Ye){let Ae=Math.floor(n.s/u)+":"+Ye.s0;n._padKey!==Ae&&(n._padKey=Ae,n.boostT=Math.max(n.boostT,PE),a.push("pad"))}}g>.5&&n.boostT>0&&(n.boostT=0);let T=n.boostT>0;T&&(p=1);let b=M&&!m&&Math.abs(x)>.3&&n.speed>IE&&(!!l.drift||g>.3),y=n.speed,w=y/f;n._shiftT>0?n._shiftT-=r:n.gear<v0&&w>_a[n.gear-1]&&!(g>0&&y>3)?(n.gear+=1,n._shiftT=KS):n.gear>1&&y<_a[n.gear-2]*f-2&&(n.gear-=1,n._shiftT=jS);let _=n.gear>1?_a[n.gear-2]:0,S=n.gear<v0?_a[n.gear-1]:1;n.rpm=nn(.35+.65*((w-_)/(S-_)),.1,1.05);let A=M&&Math.abs(n.d)>v.width*.5,I=ZS*f,N=A?I:f*(T?i.boostPower:1),L=QS/(f*f),B=0;if(M){if(A&&y>I&&(B-=2*i.offroadDrag*(y-I)),p>0&&n._shiftT<=0&&y<N){let Ye=JS*f,Ae=.8+.2*Math.sin(Math.PI*nn(n.rpm,0,1)),ze=i.accel*p*Ae*Math.min(1,Ye/Math.max(y,1));T&&(ze*=uE),B+=Math.min(ze,i.accel*1.15*(T?1.3:1))}g>0&&(B-=i.brake*g*(b?.35:1)),B-=y*(.2-.03*(n.gear-1))*(1-p),B-=tE,B-=nE*v.slope,B-=L*y*y}else B-=L*eE*y*y;n.speed=Math.max(0,y+B*r),M&&n.speed>N&&!A&&(n.speed=Math.max(N,n.speed-10*r));let Y=nn(n.speed/f,0,1),ie=1+(i.wetGrip-1)*zE(c),k=nn(i.grip*ki(c.grip,1)*ie,.05,1.5),G=n.speed<.6?0:x,te=Math.abs(G)>Math.abs(n.steer)||G*n.steer<0?iE:sE*nn(Math.abs(B)/6,1,2.5);n.steer=BE(n.steer,G,te*r);let ve=n.yaw-n.vdir,Se=n.speed*Math.sin(ve),O=Math.min(lE,1+aE*Math.abs(Se));b&&(O=i.driftBonus),T&&M&&(O*=cE);let W=1-(1-i.steerHighSpeed)*Y,X=Math.min(1,n.speed/6),J=M?1:i.airControl,V=n.steer*i.steerRate*W*O*X*J*(.6+.4*Math.min(1,k)),$=Math.min(n.speed/wE,SE*Math.min(1.2,k)*(b?1.5:1)/Math.max(n.speed,1)),fe=nn(V,-$,$);M&&Math.abs(x)<=.15&&(n.yaw*=Math.exp(-TE*r)),o&&i.steerNoise>0&&!m&&M&&(n.yaw+=i.steerNoise*p*(o.next()*2-1)*r);let ge=Math.max(.3,1-n.d*v.curv),Fe=n.speed*Math.cos(n.vdir)/ge*r,Ge=n.speed*Math.sin(n.vdir)*r,Q=v.curv*Fe,oe=n.vdir,Ee=Q*(M?1-EE:1);if(n.yaw+=fe*r-Ee,n.vdir-=Ee,M){let Ye=(b?oE:rE)*k,Ae=1-Math.exp(-Ye*r);n.vdir+=(n.yaw-n.vdir)*Ae,n.speed*=1-(1-Math.cos(ve))*Ae}else{let Ye=3*nn(i.airStability,0,2);n.yaw+=(n.vdir-n.yaw)*(1-Math.exp(-Ye*r)),i.airStability<1&&(n.yaw+=(n.yaw>=n.vdir?1:-1)*(1-i.airStability)*.6*r)}n.vdir=nn(ki(n.vdir),-g0,g0),n.yaw=nn(ki(n.yaw),n.vdir-x0,n.vdir+x0),n._t+=r,Ge+=ki(c.wind)*(1.2*Math.sin(n._t*.37)+.4*Math.sin(n._t*1.13+1))*r*(M?1:.5),n.s+=Fe,n.d+=Ge;let be=M?nn((Math.abs(n.yaw-n.vdir)-.04)/.22,0,1)*X:0;n.drift+=(be-n.drift)*Math.min(1,8*r);let Te=fi(t,d(n.s));n.onRoad=Math.abs(n.d)<=Te.width*.5;let Ue=Te.width*.5+6-.4;if(Math.abs(n.d)>=Ue-.02){let Ye=n.d>=0?1:-1,Ae=n.vdir*Ye>0,ze=Ae?Math.abs(Math.sin(n.vdir)):0;if(n.d=Ye*Ue,Ae&&(n.vdir=-Ye*.04,n.yaw=n.yaw*.4-Ye*.04),n._wallHit)n.speed*=Math.max(0,1-.8*r);else{let xe=n.boostT>0,ke=o?o.next():1;xe&&n.speed>NE||ze>LE&&n.speed>DE&&ke<_0||n.airborne&&ke<_0?(n.speed*=.3,n.stun=UE,a.push("crash")):n.speed*=1-nn(i.wallLoss*1.3*(.5+ze),0,.9),a.push("wall")}n.boostT=0,n._wallT=y0,n._wallHit=!0}else n._wallHit=!1;n.stun>0&&M&&(n.speed*=Math.exp(-2.2*r)),E=d(n.s);let Pe=ki(m0(t,E)),U=(Pe-n._g)/r;if(n.airborne||(Pe<n.yRel-.05?(n.airborne=!0,n._apex=n.yRel-Pe,n.vy=n._vyG,n.vy>AE&&a.push("jump")):(n.yRel=Pe,n.vy=nn(U,-80,80),n._vyG=n.vy)),n.airborne&&(n.vy-=26*r,n.yRel+=n.vy*r,n._apex=Math.max(n._apex,n.yRel-Pe),n.vy<=0&&n.yRel<=Pe)){let Ye=-n.vy,Ae=Math.abs(n.yaw-n.vdir),ze=Ye>RE/Math.max(.3,i.landing)||Ae>.35;n.airborne=!1,n.yRel=Pe,n.vy=0,n._vyG=0,n._springA=nn(n._springA+.35*n._apex+.03*Ye,0,1),n._springP=Math.PI/2;let xe=CE*Ye+(ze?.08:0);n.speed*=1-nn(xe/Math.max(.2,i.landing),0,.45),a.push(ze?"hardLand":"land")}n._g=Pe,M=!n.airborne,n.speed=nn(ki(n.speed),0,1.5*f),n._wallT=Math.max(0,n._wallT-r);let R=Math.max(0,1-n.speed/4,n._wallT/y0),re=M?(Q+(n.vdir-oe))/r:0;n._turnF+=(re-n._turnF)*Math.min(1,6*r);let _e=n.speed*n._turnF,pe=Math.sign(_e)*Math.max(0,Math.abs(_e)-_E),me=n.steer*bE*Math.min(1,n.speed/10),Be=nn((1-R)*(Math.atan(pe/vE)*yE+ME*(n.yaw-n.vdir)+me),-M0,M0);n.stun>0&&(Be=(n.lean>=0?1:-1)*1.35),n.lean+=(Be-n.lean)*Math.min(1,9*r),n._dive=g>.1&&M?Math.min(Mo,n._dive+Mo*r):Math.max(0,n._dive-.25*r);let De=nn(B*pE,-Mo,Mo)-n._dive;n._pitchF+=(De-n._pitchF)*Math.min(1,r/mE);let Oe=nn(De-n._pitchF,-Mo,Mo);n.wheelie=n.boostT>0&&M?Math.min(Math.PI/2,n.wheelie+fE*r):Math.max(0,n.wheelie-dE*r),Oe+=Math.sin(n.wheelie)*hE,M||(Oe=Math.atan2(n.vy,Math.max(8,n.speed))),n.pitch=Oe,n._springA*=Math.exp(-r/gE),n._springP+=xE*r,n.compress=Math.sin(n._springP)*n._springA,n.wheelSpin+=n.speed/.32*r,n.boostT=Math.max(0,n.boostT-r);for(let Ye of OE)Number.isFinite(n[Ye])||(n[Ye]=0);return n.speed<0&&(n.speed=0),n}function zE(n){return nn(ki(n.wet),0,1)}var kE=8,HE=25,VE=150,GE=3,WE=35,XE=2,qE=14,YE=30,$E=12,ZE=2,KE={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},xn=(n,e,t)=>n<e?e:n>t?t:n,vc=(n,e,t)=>n+(e-n)*t,jE=(n,e)=>n-e*Math.round(n/e);function JE(n,e){let t=n.length,i=n.features,s=null,r=1/0;for(let o=0;o<i.length;o++){let a=i[o];if(a.type!=="ramp")continue;let l=((a.s0-e)%t+t)%t;l<r&&(r=l,s=a)}return s?{f:s,dist:r}:null}function QE(n,e){for(let t=0;t<=VE;t+=HE)if(Math.abs(fi(n,e+t).curv)>.004)return!1;return!0}function yc(n,e){let t=n||KE,i={persona:t,rng:e,skill:xn(t.skill??.5,0,1),aggression:xn(t.aggression??.5,0,1),jumpSkill:xn(t.jumpSkill??.5,0,1),lineSkill:xn(t.lineSkill??.5,0,1),playerGap:0,dGoal:0,wander:0,wanderGoal:0,wanderT:0,mistakeT:0,mistakeSide:1,nextMistake:0,boostLock:0,input:{throttle:0,brake:0,steer:0,boost:!1,drift:!1}};return i.nextMistake=e.range(8,20)+(1-i.skill)*15,i}function _c(n,e,t,i,s,r){let o=n.input,a=t.length,l=n.rng,c=n.aggression,h=n.skill,u=n.jumpSkill,f=e.speed,p=e.s,g=fi(t,p),x=Math.max(.8,g.width*.5-1.2);n.wanderT-=r,n.wanderT<=0&&(n.wanderT=l.range(.9,1.8),n.wanderGoal=l.range(-1,1)*(1-n.lineSkill)*.5*x),n.wander+=(n.wanderGoal-n.wander)*Math.min(1,r*1.5),n.nextMistake-=r,n.mistakeT-=r,n.mistakeT<=0&&n.nextMistake<=0&&(n.mistakeT=l.range(.5,1.2),n.mistakeSide=l.sign(),n.nextMistake=l.range(8,20)+(1-h)*15);let m=n.mistakeT>0;n.boostLock-=r;let d=vc(1.4,.6,c),E=Math.max(20,f*d),v=Math.max(E,xn(f*1.6+20,40,110)),M=1/0,T=0,b=0,y=0;for(let X=0;X<=v;X+=kE){let J=X===0?g:fi(t,p+X);if(X<=E&&J.vmax<M&&(M=J.vmax),X>=8){let V=Math.abs(J.curv);V>T&&(T=V,b=Math.sign(J.curv),y=X)}}let w=xn(T/.02,0,1),_=0;if(b!==0&&w>0){let X=xn((y-10)/30,0,1),J=vc(1,-.8,X);_=b*x*n.lineSkill*w*J}_+=n.wander,m&&(_+=n.mistakeSide*1.2);let S=JE(t,p),A=S?S.dist:1/0,I=ks(t,p,"ramp")!==null,N=A<YE;(I||N)&&u>.5&&(_*=1-xn((u-.4)/.6,0,1));let L=!I&&A>=GE&&A<=WE&&u<.5;for(let X=0;X<s.length;X++){let J=s[X];if(J===e)continue;let V=jE(J.s-p,a);if(V<=0||V>=$E)continue;let $=J.d-e.d;if(!(Math.abs($)>=ZE)){if(c>.55){let fe=$!==0?Math.sign($):e.d<0?1:-1;_+=fe*(.6+.8*c)}else{let fe=$!==0?-Math.sign($):e.d<0?1:-1;Math.abs(e.d+fe*2)>x&&(fe=-fe),_+=fe*2*(1-c)}break}}let B=n.obstacles;if(B){let X=35+f*1.7,J=null,V=1/0;for(let $=0;$<B.length;$++){let fe=B[$],ge=fe.s-p;ge>-fe.type.len&&ge<X&&ge<V&&Math.abs(fe.d-_)<fe.type.w/2+1.5&&(fe.speed<f-3||ge<40)&&(J=fe,V=ge)}if(J){let $=J.type.w/2+2,fe=[J.d-$,J.d+$].filter(Ge=>Math.abs(Ge)<=x),ge=fe.filter(Ge=>!B.some(Q=>Q!==J&&Math.abs(Q.s-J.s)<30&&Math.abs(Q.d-Ge)<Q.type.w/2+1.2)),Fe=ge.length?ge:fe;Fe.length&&(_=Fe.reduce((Ge,Q)=>Math.abs(Q-e.d)<Math.abs(Ge-e.d)?Q:Ge))}}_=xn(_,-x,x),n.dGoal+=(_-n.dGoal)*Math.min(1,r*(B?4.5:2.5));let Y=xn(n.dGoal,-x,x),ie;if(e.airborne)ie=xn(-e.yaw*2,-.3,.3);else{let X=Y-e.d,J=xn(X*.12,-.25,.25),V=fi(t,p+xn(f*.25,4,20)).curv,$=i.steerRate*vc(1,i.steerHighSpeed,xn(f/i.maxSpeed,0,1));ie=(V*f+(J-e.yaw)*3)/$}ie=xn(ie,-1,1),Number.isFinite(ie)||(ie=0);let k=xn(-n.playerGap/150,-1,1)*.06,G=vc(.86,1,h)+c*.04;m&&(G*=.85);let se=M*G*(1+k),te=i.maxSpeed,ve=!1;if(!e.airborne&&e.boostCharges>0&&e.boostT<=0&&n.boostLock<=0){if(u>.6&&A>=XE&&A<=qE)ve=!0;else if(f>20&&QE(t,p)){let X=n.playerGap<-20,J=.25+.5*c+(X?.3:0);ve=l.chance(J)}n.boostLock=ve?1:.4}o.boost=ve;let Se=T<.003;if(e.boostT>0){let X=te*i.boostPower;se=Se?X*.98:Math.min(se,X)}else se=Math.min(se,te);let O=0,W=0;if(e.airborne)O=1;else{let X=se-f;X>-1.5?O=L?0:xn(.5+X*.25,0,1):W=xn((-X-1.5)*.15,0,1)}return o.throttle=O,o.brake=W,o.steer=ie,o.drift=!e.airborne&&c>.75&&T>.025&&f>40&&y<20,o}var ew=7,tw=3,nw=.3,iw=3,sw=25,rw=1.5,ow=1.2,aw=1.8,E0=.9,lw={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},Mc=(n,e,t)=>n<e?e:n>t?t:n,Pf=(n,e)=>n-e*Math.round(n/e);function If(){return{throttle:0,brake:0,steer:0,boost:!1,drift:!1}}function w0({track:n,laps:e,env:t,rng:i,riders:s,final:r=!0,carry:o=null,startS:a=0}){let l=n.length,c=n.raceEnd??l,h=e*c,f=s.filter(b=>!b.isPlayer).concat(s.filter(b=>b.isPlayer)).map((b,y)=>{let w=Math.floor(y/2),_=y%2,S=a-ew*(w+1),A=_===0?-2.5:2.5,I=o?.states.get(b.id),N=I||b0({s:S,d:A});return{id:b.id,name:b.name,color:b.color,accent:b.accent,isPlayer:!!b.isPlayer,stats:b.stats,persona:b.persona||null,state:N,remote:!!b.remote,ai:b.isPlayer||b.remote?null:yc(b.persona||lw,i.fork("ai:"+b.id)),rng:i.fork("rider:"+b.id),others:null,input:If(),coast:If(),frameEvents:[],startS:I?I.s:S,lap:1,lapTimes:[],bestLap:null,lapStartT:0,finished:!1,finishTime:null,position:y+1}});for(let b of f)b.others=f.filter(y=>y!==b).map(y=>y.state);let p=f.find(b=>b.isPlayer)||null,g=f.slice(),x=f.length,m=new Uint8Array(x*x);function d(b,y,w,_,S){if(w===y)return;let A=Math.floor(y/c),I=Math.min(Math.floor(w/c),e);for(let N=Math.max(A+1,1);N<=I;N++){let L=Mc((N*c-y)/(w-y),0,1),B=_+L*S,Y=B-b.lapStartT;b.lapTimes.push(Y),(b.bestLap===null||Y<b.bestLap)&&(b.bestLap=Y),b.lapStartT=B}if(r&&w>=h){let N=Mc((h-y)/(w-y),0,1);b.finished=!0,b.finishTime=_+N*S}}function E(b){let y=b.state,w=b.coast;return w.throttle=nw,w.brake=0,w.steer=Mc(-y.yaw*2-y.d*.05,-.5,.5),w.boost=!1,w.drift=!1,w}function v(b,y){let w=b.state;for(let _=0;_<x;_++){let S=f[_];if(S===b||S.hidden)continue;let A=Pf(S.state.s-w.s,l);if(A>iw&&A<sw&&Math.abs(S.state.d-w.d)<rw){w.speed=Math.min(w.speed+ow*b.stats.slipstream*y,b.stats.maxSpeed*1.05);return}}}function M(){for(let b=0;b<x;b++)for(let y=b+1;y<x;y++){let w=f[b],_=f[y];if(w.remote&&_.remote||w.hidden||_.hidden)continue;let S=!w.remote,A=!_.remote,I=Pf(_.state.s-w.state.s,l),N=_.state.d-w.state.d,L=b*x+y;if(Math.abs(I)<aw&&Math.abs(N)<E0){let B=N!==0?Math.sign(N):i.sign(),Y=((E0-Math.abs(N))/2+.05)*(S&&A?1:2);if(S&&(w.state.d-=B*Y),A&&(_.state.d+=B*Y),!m[L]){m[L]=1;let ie=(w.state.speed+_.state.speed)/2;S&&(w.state.speed+=(ie-w.state.speed)*.2),A&&(_.state.speed+=(ie-_.state.speed)*.2);let k=I>=0?w:_;k.remote||(k.state.speed*=.96),(!S||!A)&&(S?w:_).state.events?.push("hit")}}else m[L]=0}}let T={phase:o?"racing":"countdown",countdown:o?0:tw,time:o?o.time:0,final:r,laps:e,track:n,riders:f,player:p,update(b,y){if(T.phase==="countdown"){T.countdown=Math.max(0,T.countdown-b),T.countdown<=0&&(T.phase="racing");return}let w=T.time;T.time+=b;for(let _=0;_<x;_++){let S=f[_];S.remote||(S.finished?S.input=E(S):S.isPlayer?S.input=y||If():(p&&(S.ai.playerGap=Pf(S.state.s-p.state.s,l)),S.input=_c(S.ai,S.state,n,S.stats,S.others,b)))}for(let _=0;_<x;_++){let S=f[_];if(S.remote){S.lap=1;continue}let A=S.state,I=S.finished,N=A.s;if(S0(A,S.input,n,S.stats,t,b,S.rng),I||(d(S,N,A.s,w,b),S.finished||v(S,b)),S.lap=S.finished?e:Mc(Math.floor(A.s/c)+1,1,e),!S.isPlayer){S.frameEvents.length=0;for(let L=0;L<A.events.length;L++)S.frameEvents.push(A.events[L]);A.events.length=0}}M(),g.sort((_,S)=>_.finished!==S.finished?_.finished?-1:1:_.finished?_.finishTime-S.finishTime:S.state.s-_.state.s);for(let _=0;_<x;_++)g[_].position=_+1;r?(p?p.finished:f.every(_=>_.finished))&&(T.phase="finished"):(p||g[0]).state.s>=c&&(T.phase="relay")},results(){let b=f.map(y=>{let w;if(y.finished)w=y.finishTime;else{let _=Math.max(0,y.state.s-y.startS),S=T.time>1?Math.max(5,_/T.time):40,A=Math.max(0,h-y.state.s);w=T.time+A/S}return{id:y.id,name:y.name,position:y.position,time:w,bestLap:y.bestLap,isPlayer:y.isPlayer}});return b.sort((y,w)=>y.position-w.position),b}};return T}var Bf={};mv(Bf,{PLAYER:()=>Hi,RIVALS:()=>Sc,UPGRADES:()=>gr,applyUpgrade:()=>Ac,computeStats:()=>Hs,createRun:()=>Ec,dailySeed:()=>Rc,isRunOver:()=>Ma,loadMeta:()=>Uf,offerUpgrades:()=>Tc,randomSeed:()=>uw,recordResult:()=>Df,runRiders:()=>wc,saveMeta:()=>Of,standings:()=>bo,updateMeta:()=>Ff});var T0="polygon-rush-meta",cw=Object.keys(zs).filter(n=>n!=="sicily"),Hi={id:"player",name:"Vous",color:14885934,accent:2312392},gr=[{id:"turbo",name:"Turbo instable",tagline:"Acc\xE9l\xE9ration brutale, pilotage nerveux.",pro:"Acc\xE9l\xE9ration \xD71,35 et vitesse de pointe \xD71,04.",con:"Direction bruit\xE9e (+0,35 rad/s) et braquage \xD70,9 \xE0 haute vitesse.",icon:"\u26A1",maxStacks:1,apply(n){n.accel*=1.35,n.maxSpeed*=1.04,n.steerNoise+=.35,n.steerHighSpeed*=.9}},{id:"rally",name:"Suspension rallye",tagline:"Les r\xE9ceptions passent mieux, la vitesse de pointe trinque.",pro:"R\xE9ception \xD71,8 et tra\xEEn\xE9e hors-piste \xD70,6.",con:"Vitesse de pointe \xD70,95.",icon:"\u{1F3D4}",maxStacks:2,apply(n){n.landing*=1.8,n.offroadDrag*=.6,n.maxSpeed*=.95}},{id:"aero",name:"A\xE9rodynamique",tagline:"Plus de vitesse, moins de tenue en l'air.",pro:"Vitesse de pointe \xD71,07.",con:"Stabilit\xE9 en saut \xD70,6 et contr\xF4le a\xE9rien \xD70,7.",icon:"\u{1F4A8}",maxStacks:2,apply(n){n.maxSpeed*=1.07,n.airStability*=.6,n.airControl*=.7}},{id:"rain",name:"Pneus pluie",tagline:"Accroche imbattable sous l'averse, sec moins mordant.",pro:"Adh\xE9rence mouill\xE9e \xD71,35 (\u2248 1,05).",con:"Adh\xE9rence s\xE8che \xD70,95.",icon:"\u{1F327}",maxStacks:1,apply(n){n.wetGrip*=1.35,n.grip*=.95}},{id:"nitro",name:"Nitro double",tagline:"Deux charges de plus, des boosts plus courts.",pro:"+2 charges de boost par course.",con:"Dur\xE9e de boost \xD70,75.",icon:"\u{1F680}",maxStacks:2,apply(n){n.boostCharges+=2,n.boostDuration*=.75}},{id:"brakes",name:"Freins c\xE9ramique",tagline:"Freinage mordant, direction plus vive, reprise plus lente.",pro:"Freinage \xD71,4 et braquage \xD71,08.",con:"Acc\xE9l\xE9ration \xD70,95.",icon:"\u{1F6D1}",maxStacks:2,apply(n){n.brake*=1.4,n.steerRate*=1.08,n.accel*=.95}},{id:"gyro",name:"Gyroscope",tagline:"Stabilisateur de vol, adh\xE9rence en retrait.",pro:"Contr\xF4le a\xE9rien \xD71,5 et stabilit\xE9 en l'air \xD71,25.",con:"Adh\xE9rence \xD70,9.",icon:"\u{1F300}",maxStacks:2,apply(n){n.airControl*=1.5,n.airStability*=1.25,n.grip*=.9}},{id:"slick",name:"Pneus slick",tagline:"Gomme tendre : accroche s\xE8che maximale, pluie interdite.",pro:"Adh\xE9rence s\xE8che \xD71,12.",con:"Adh\xE9rence mouill\xE9e \xD70,7 et braquage \xD70,95.",icon:"\u{1F3C1}",maxStacks:2,apply(n){n.grip*=1.12,n.wetGrip*=.7,n.steerRate*=.95}},{id:"carenage",name:"Car\xE9nage aspiration",tagline:"Profil fusel\xE9 : on file dans le sillage, on tourne moins vite.",pro:"Aspiration \xD71,6 dans le sillage des concurrents.",con:"Braquage \xD70,92.",icon:"\u{1F32C}",maxStacks:2,apply(n){n.slipstream*=1.6,n.steerRate*=.92}},{id:"blindage",name:"Blindage renforc\xE9",tagline:"Carrosserie en acier : les chocs co\xFBtent moins, la moto p\xE8se.",pro:"Perte de vitesse contre les glissi\xE8res \xD70,5.",con:"Acc\xE9l\xE9ration \xD70,92 et vitesse de pointe \xD70,97.",icon:"\u{1F6E1}",maxStacks:2,apply(n){n.wallLoss*=.5,n.accel*=.92,n.maxSpeed*=.97}}],Sc=[{id:"vortex",name:"Vortex Solenne",color:58879,accent:728366,skill:.8,aggression:.92,jumpSkill:.6,lineSkill:.5,style:"agressif",bio:"Freine tard, plonge dans les virages et ne l\xE2che jamais un pilote \xE0 la corde."},{id:"saltamonte",name:"Brigo Saltamonte",color:16766474,accent:1118481,skill:.76,aggression:.45,jumpSkill:.97,lineSkill:.5,style:"sauteur",bio:"Vole plus haut que tout le monde, atterrit quand il veut, parfois trop tard."},{id:"lumen",name:"Lumen Ardoise",color:8190976,accent:1714704,skill:.84,aggression:.15,jumpSkill:.55,lineSkill:.97,style:"trajectoire",bio:"Trace une ligne parfaite, ne prend jamais un bord et ne commet aucune faute."},{id:"aurelio",name:"Aurelio Temp\xEAte",color:16747520,accent:0,skill:.97,aggression:.7,jumpSkill:.85,lineSkill:.9,style:"r\xE9gulier",bio:"Le champion de la c\xF4te : rien \xE0 lui reprocher, et il le sait."},{id:"maree",name:"Ingrid Mar\xE9e",color:11544319,accent:16777215,skill:.88,aggression:.78,jumpSkill:.7,lineSkill:.6,style:"agressif",bio:"Pousse ses freins jusqu'\xE0 la limite et ressort des virages en coup de vent."},{id:"gaspard",name:"Gaspard Brume",color:1989631,accent:15790320,skill:.72,aggression:.35,jumpSkill:.4,lineSkill:.6,style:"r\xE9gulier",bio:"Discret, m\xE9tronome, il finit presque toujours dans les cinq premiers."},{id:"yuki",name:"Yuki Varan",color:50316,accent:8217,skill:.91,aggression:.5,jumpSkill:.8,lineSkill:.8,style:"r\xE9gulier",bio:"Rapide sur tous les terrains, sans point faible visible, et toujours souriant."}],A0=[{name:"Coastal Rush",subtitle:"Route m\xE9diterran\xE9enne, grandes courbes et falaises"},{name:"Cliff Edge",subtitle:"Corniches \xE9troites et vent de face"},{name:"Harbor Drift",subtitle:"Quais glissants, embruns et virages en \xE9pingle"},{name:"Lighthouse Pass",subtitle:"Tunnels, ressauts et brouillard de phare"},{name:"The Final Run",subtitle:"Le champion vous attend"}],Lf=A0.length;function R0(n){return gr.find(e=>e.id===n)||null}function C0(n,e){let t=0;for(let i of n.upgrades)i===e&&t++;return t}function Ec(n){let e=String(n),t=ni(ya(e+"|run")),i=[];for(let o=0;o<Lf;o++)if(o===0)i.push("sunset");else if(o===Lf-1)i.push("rain");else{let a=i[o-1],l=cw.filter(c=>c!==a&&!(o===Lf-2&&c==="rain"));i.push(t.pick(l))}let s=A0.map((o,a)=>({name:o.name,subtitle:o.subtitle,trackSeed:`${e}-${a}`,weather:i[a],laps:a<2?2:3})),r={[Hi.id]:0};for(let o of Sc)r[o.id]=0;return{seed:e,stageIndex:0,stages:s,upgrades:[],points:r,history:[]}}function wc(n){let e=Math.max(0,n.stageIndex),t=[{id:Hi.id,name:Hi.name,color:Hi.color,accent:Hi.accent,isPlayer:!0,persona:null,stats:Hs(n)}];for(let i of Sc){let s=Math.min(.99,Math.round((i.skill+.01*e)*100)/100);t.push({id:i.id,name:i.name,color:i.color,accent:i.accent,isPlayer:!1,persona:{...i,skill:s},stats:{...mr}})}return t}function Hs(n){let e={...mr};for(let t of n.upgrades){let i=R0(t);i&&i.apply(e)}return e}function Tc(n,e=null){let t=ni(ya(`${n.seed}|offer|${n.stageIndex}`)),i=gr.filter(s=>C0(n,s.id)<s.maxStacks&&!(e&&e.has(s.id)));return t.shuffle(i).slice(0,3)}function Ac(n,e){let t=R0(e);return!t||C0(n,e)>=t.maxStacks?!1:(n.upgrades.push(e),!0)}function P0(n){if(n===Hi.id)return Hi.name;let e=Sc.find(t=>t.id===n);return e?e.name:n}function Df(n,e){if(Ma(n))return n;let t=e.slice().sort((r,o)=>r.position-o.position),i=n.stages[n.stageIndex],s={stage:n.stageIndex,name:i.name,results:[]};return t.forEach((r,o)=>{let a=r.position??o+1,l=mc[a-1]??0;n.points[r.id]=(n.points[r.id]||0)+l,s.results.push({id:r.id,name:r.name||n.names?.[r.id]||P0(r.id),position:a,points:l,isPlayer:r.id===Hi.id})}),n.history.push(s),n.stageIndex+=1,n}function bo(n){let e={};for(let t of n.history)for(let i of t.results)e[i.id]=Math.min(e[i.id]??1/0,i.position);return Object.keys(n.points).map(t=>({id:t,name:n.names?.[t]||P0(t),points:n.points[t],isPlayer:t===Hi.id,_best:e[t]??1/0})).sort((t,i)=>i.points-t.points||t._best-i._best).map(({_best:t,...i})=>i)}function Ma(n){return n.stageIndex>=n.stages.length}function Rc(n=new Date){let e=n instanceof Date?n:new Date(n),t=e.getUTCFullYear(),i=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`DAILY-${t}-${i}-${s}`}function uw(){let n="ABCDEFGHJKMNPQRSTUVWXYZ23456789",e="RUSH-";for(let t=0;t<4;t++)e+=n[Math.floor(Math.random()*n.length)];return e}function bc(){return{runs:0,wins:0,bestPoints:0,unlocked:[]}}function Nf(n){let e=bc();if(!n||typeof n!="object")return e;let t=i=>Number.isFinite(i)&&i>=0?Math.floor(i):0;return{runs:t(n.runs),wins:t(n.wins),bestPoints:t(n.bestPoints),unlocked:Array.isArray(n.unlocked)?n.unlocked.filter(i=>typeof i=="string"):e.unlocked}}function I0(){try{return globalThis.localStorage??null}catch{return null}}function Uf(){try{let n=I0();if(!n)return bc();let e=n.getItem(T0);return e?Nf(JSON.parse(e)):bc()}catch{return bc()}}function Of(n){try{let e=I0();return e?(e.setItem(T0,JSON.stringify(Nf(n))),!0):!1}catch{return!1}}function Ff(n,e){let t=Nf(n),i=bo(e),s=i.find(o=>o.isPlayer),r=i.length>0&&i[0].isPlayer;return{runs:t.runs+1,wins:t.wins+(r?1:0),bestPoints:Math.max(t.bestPoints,s?s.points:0),unlocked:t.unlocked.slice()}}var di=.9,L0=.3,Cc=8,zf=3,D0=6+.8,ba=3,hw=4.5,fw=.015,dw=.004,N0=60,wt={asphaltA:[.27,.225,.2],asphaltB:[.31,.26,.23],rampDark:[.13,.13,.15],yellow:[1,.82,.05],black:[.04,.04,.05],white:[.95,.95,.92],red:[.86,.14,.12],checkW:[.95,.95,.95],checkB:[.04,.04,.05],railA:[.93,.92,.88],railB:[.8,.2,.12],neonCyan:[.2,1,1],neonMag:[1,.15,.9],sand:[.3,.48,.15],motorwayA:[.2,.2,.21],motorwayB:[.22,.22,.23],lane:[.34,.33,.31],gravel:[.24,.4,.13],tunOchreA:[.5,.39,.2],tunOchreB:[.44,.34,.17],sodium:[1,.72,.28],tunA:[.16,.18,.24],tunB:[.21,.23,.3],concrete:[.36,.38,.42],concreteB:[.3,.32,.36],post:[.12,.13,.16],beam:[.1,.1,.12],mast:[.17,.18,.22]},Pc=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],U0=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],pw=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],Pn=(n,e,t)=>n+(e-n)*t,Yn=class{constructor(){this.pos=[],this.col=[],this.uv=[],this.idx=[],this.n=0}quad(e,t,i,s){let[r,o,a,l]=e,c=U0(Pc(o,r),Pc(a,r)),h=U0(Pc(a,r),Pc(l,r)),u=[c[0]+h[0],c[1]+h[1],c[2]+h[2]];if(!(Math.hypot(u[0],u[1],u[2])>1e-12))return;let f=pw(u,i)<0,p=this.n;for(let g=0;g<4;g++){let x=e[g];this.pos.push(x[0],x[1],x[2]),this.col.push(t[0],t[1],t[2]);let m=s?s[g]:[0,0];this.uv.push(m[0],m[1])}this.n+=4,f?this.idx.push(p,p+2,p+1,p,p+3,p+2):this.idx.push(p,p+1,p+2,p,p+2,p+3)}};function Sa(n,e,t,i,s){for(let r=0;r<3;r++){let o=(r+1)%3,a=(r+2)%3;for(let l of[-1,1]){let c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([h,u])=>{let f=[0,0,0];return f[r]=l,f[o]=h,f[a]=u,[0,1,2].map(p=>e[p]+t[0][p]*f[0]*i[0]+t[1][p]*f[1]*i[1]+t[2][p]*f[2]*i[2])});n.quad(c,s,t[r].map(h=>h*l),null)}}}function kf(n,e,t){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new ui(i);return s.colorSpace=Bt,s.anisotropy=4,s}function O0(n,e,t,i){n.beginPath(),e.forEach(([s,r],o)=>o?n.lineTo(s*t,r*i):n.moveTo(s*t,r*i)),n.closePath(),n.fill()}var mw=[[.12,.1],[.82,.5],[.12,.9],[.12,.68],[.5,.5],[.12,.32]];function Ic(n,e,t){let i=t??ni(n.seed??1),s=n.pts,r=s.length,o=n.step??n.length/r,a=n.length??r*o,l=n.features??[],c=l.filter(P=>P.type==="ramp"),h=l.filter(P=>P.type==="boost"),u=l.filter(P=>P.type==="tunnel"),f=Math.max(0,Math.min(1,e.sheen??e.wet??0)),p=!!e.night,g=new at;g.name="road";let x=[],m=[],d=[],E=P=>(m.push(P),P),v=kf(128,128,(P,q,z)=>{P.fillStyle="#f3efe6",P.fillRect(0,0,q,z),P.fillStyle="#d6202a",O0(P,mw,q,z)}),M=kf(256,128,(P,q,z)=>{P.fillStyle="#04141a",P.fillRect(0,0,q,z),P.fillStyle="#37f3ff",O0(P,[[.05,.1],[.8,.5],[.05,.9],[.05,.7],[.4,.5],[.05,.3]],q,z)}),T=kf(1024,256,(P,q,z)=>{P.fillStyle="#0b0e16",P.fillRect(0,0,q,z),P.strokeStyle="#ffd21f",P.lineWidth=10,P.strokeRect(12,12,q-24,z-24),P.fillStyle="#ffd21f",P.font="bold 150px Arial, Helvetica, sans-serif",P.textAlign="center",P.textBaseline="middle",P.fillText("POLYGON RUSH",q/2,z/2+8)});for(let P of[v,M,T])P&&d.push(P);M&&(M.wrapS=Nn);let b=E(new ot({vertexColors:!0,flatShading:!0,roughness:.85-.6*f,metalness:f>0?.2:.02})),y=E(new Lt({vertexColors:!0})),w=E(new ot({vertexColors:!0,flatShading:!0,color:16777215,emissive:16777215,emissiveIntensity:.14,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),_=E(new ot({vertexColors:!0,flatShading:!0,roughness:1})),S=E(new ot({vertexColors:!0,flatShading:!0,roughness:.5,metalness:.2})),A=E(new Lt({vertexColors:!0})),I=E(new ot({color:v?16777215:16762906,map:v,emissive:v?16777215:16762906,emissiveMap:v,emissiveIntensity:.5,flatShading:!0})),N=E(new ot({color:207411,emissive:3666943,emissiveMap:M,emissiveIntensity:2.2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),L=E(new ot({vertexColors:!0,flatShading:!0,side:Pt,roughness:.9})),B=E(new Lt({vertexColors:!0})),Y=E(new ot({vertexColors:!0,flatShading:!0,roughness:.6})),ie=E(new ot({color:T?16777215:16765471,map:T,emissive:T?16777215:16756736,emissiveMap:T,emissiveIntensity:.7,flatShading:!0})),k=E(new ot({color:2830138,flatShading:!0,roughness:.7})),G=E(new ot({color:16773570,emissive:16765562,emissiveIntensity:p?2.5:.8,flatShading:!0})),se=P=>{for(let q of c)if(P>=q.s0&&P<q.s1)return q.height*(P-q.s0)/(q.s1-q.s0);return 0},te=P=>c.some(q=>P>=q.s0&&P<q.s1),ve=P=>u.some(q=>P>=q.s0&&P<=q.s1),Se=P=>{let q=P/o,z=Math.floor(q),ne=q-z;z=n.open?Math.max(0,Math.min(r-2,z)):(z%r+r)%r;let C=s[z],Z=s[(z+1)%r],F=Pn(C.rx,Z.rx,ne),j=Pn(C.rz,Z.rz,ne),K=Math.hypot(F,j)||1,ue=Pn(C.tx,Z.tx,ne),we=Pn(C.tz,Z.tz,ne),He=Math.hypot(ue,we)||1,We=Pn(C.y,Z.y,ne);return{s:P,x:Pn(C.x,Z.x,ne),z:Pn(C.z,Z.z,ne),yb:We,y:We,h:0,rx:F/K,rz:j/K,tx:ue/He,tz:we/He,w:Pn(C.width,Z.width,ne),curv:Pn(C.curv,Z.curv,ne),sample:!1}},O=(P,q,z)=>({x:Pn(P.x,q.x,z),y:Pn(P.y,q.y,z),yb:Pn(P.yb,q.yb,z),z:Pn(P.z,q.z,z),rx:Pn(P.rx,q.rx,z),rz:Pn(P.rz,q.rz,z),w:Pn(P.w,q.w,z)}),W=(P,q,z=0)=>[P.x+P.rx*q,P.y+z,P.z+P.rz*q],X=(P,q,z=0)=>[P.x+P.rx*q,P.yb+z,P.z+P.rz*q],J=[];for(let P of c)J.push({s:P.s0,h:0},{s:P.s1,h:P.height},{s:P.s1,h:0});J.sort((P,q)=>P.s-q.s);let V=[],$=0,fe=(P,q,z)=>{let ne=V[V.length-1];if(ne&&Math.abs(ne.s-P)<1e-9&&Math.abs(ne.h-q)<1e-9){ne.sample=ne.sample||z;return}let C=Se(P);C.h=q,C.y=C.yb+q,C.sample=z,V.push(C)};for(let P=0;P<r;P++){let q=P*o;for(;$<J.length&&J[$].s<=q+1e-9;)fe(J[$].s,J[$].h,!1),$++;fe(q,se(q),!0)}for(;$<J.length;)fe(J[$].s,J[$].h,!1),$++;let ge=V.length,Fe=[];for(let P=0;P<ge&&!(n.open&&P===ge-1);P++){let q=V[P],z=V[(P+1)%ge],ne=q.s,C=P+1<ge?V[P+1].s:a,Z=Math.abs(C-ne)<1e-9,F=(ne+C)/2;Fe.push({a:q,b:z,sa:ne,sb:C,drop:Z,mid:F,ramp:!Z&&te(F)})}let Ge=new Yn,Q=new Yn,oe=new Yn,Ee=new Yn,be=new Yn,Te=new Yn,Ue=new Yn,Pe=new Yn,U=new Yn,R=new Yn,re=new Yn,_e=new Yn,pe=P=>P.w/2+6-L0/2,me=P=>P.w/2+6+L0/2;for(let P of Fe){let{a:q,b:z,sa:ne,sb:C,mid:Z}=P;if(P.drop){Ge.quad([W(q,-q.w/2),W(q,q.w/2),W(z,z.w/2),W(z,-z.w/2)],wt.rampDark,[q.tx,0,q.tz]);continue}let F=q.w/2,j=z.w/2;if(P.ramp)Q.quad([W(q,-F),W(q,F),W(z,j),W(z,-j)],Math.floor(Z/2)%2===0?wt.yellow:wt.black,[0,1,0]),Ge.quad([W(q,-F),W(z,-j),X(z,-j),X(q,-F)],wt.rampDark,[-q.rx,0,-q.rz]),Ge.quad([W(q,F),X(q,F),X(z,j),W(z,j)],wt.rampDark,[q.rx,0,q.rz]);else{Ge.quad([W(q,-F),W(q,F),W(z,j),W(z,-j)],n.open?Math.floor(Z/8)%2?wt.motorwayB:wt.motorwayA:Math.floor(Z/8)%2?wt.asphaltB:wt.asphaltA,[0,1,0]);for(let We of[-1,1])oe.quad([W(q,We*(F-.25),.02),W(q,We*(F-.45),.02),W(z,We*(j-.45),.02),W(z,We*(j-.25),.02)],wt.white,[0,1,0]);let K=9,ue=3;for(let We=Math.floor(ne/K);We*K<C;We++){let Ve=Math.max(ne,We*K),ee=Math.min(C,We*K+ue);if(ee-Ve<1e-6)continue;let de=O(q,z,(Ve-ne)/(C-ne)),le=O(q,z,(ee-ne)/(C-ne));oe.quad([W(de,-.08,.02),W(de,.08,.02),W(le,.08,.02),W(le,-.08,.02)],wt.white,[0,1,0])}let we=Math.abs((q.curv+z.curv)/2)>dw?1.2:.5,He=Math.floor(Z/2)%2?wt.red:wt.railA;for(let We of n.open?[]:[-1,1])oe.quad([W(q,We*F,.025),W(q,We*(F+we),.025),W(z,We*(j+we),.025),W(z,We*j,.025)],He,[0,1,0])}for(let K of[-1,1]){Ee.quad([X(q,K*F),X(q,K*pe(q)),X(z,K*pe(z)),X(z,K*j)],n.open?wt.lane:wt.sand,[0,1,0]);let ue=Cc/2,we=-zf/2,He=-zf,We=[K*q.rx*.6,.8,K*q.rz*.6];Ee.quad([X(q,K*me(q),0),X(q,K*(me(q)+ue),we),X(z,K*(me(z)+ue),we),X(z,K*me(z),0)],wt.gravel,We),Ee.quad([X(q,K*(me(q)+ue),we),X(q,K*(me(q)+Cc),He),X(z,K*(me(z)+Cc),He),X(z,K*(me(z)+ue),we)],wt.gravel,We);let Ve=Math.floor(Z/6)%2?wt.railB:wt.railA,ee=K*pe(q),de=K*pe(z),le=K*me(q),he=K*me(z);!n.open&&(K<0||p||e.openRight===!1)&&(be.quad([X(q,ee,0),X(q,ee,di),X(z,de,di),X(z,de,0)],Ve,[-K*q.rx,0,-K*q.rz]),be.quad([X(q,le,0),X(q,le,di),X(z,he,di),X(z,he,0)],Ve,[K*q.rx,0,K*q.rz]),be.quad([X(q,ee,di),X(q,le,di),X(z,he,di),X(z,de,di)],Ve,[0,1,0])),p&&Te.quad([X(q,ee,di+.02),X(q,le,di+.02),X(z,he,di+.02),X(z,de,di+.02)],K<0?wt.neonCyan:wt.neonMag,[0,1,0])}}for(let P of V){if(!P.sample||Math.abs(P.curv)<=fw||Math.round(P.s/o)%8!==0||ve(P.s)||te(P.s))continue;let z=-Math.sign(P.curv)*(P.w/2+6+.6),C=P.curv>0?[[0,0],[1,0],[1,1],[0,1]]:[[1,0],[0,0],[0,1],[1,1]];Ue.quad([X(P,z-.6,1),X(P,z+.6,1),X(P,z+.6,2),X(P,z-.6,2)],[1,1,1],[-P.tx,0,-P.tz],C),Sa(re,[P.x+P.rx*z,P.yb+.35,P.z+P.rz*z],[[P.tx,0,P.tz],[P.rx,0,P.rz],[0,1,0]],[.08,.12,.65],wt.post)}if(!n.noStart){let P=Se(0),q=Math.max(4,Math.round(P.w)),z=P.w/q;for(let F=0;F<3;F++){let j=Se(-2+F),K=Se(-1+F);for(let ue=0;ue<q;ue++){let we=-P.w/2+ue*z,He=we+z;oe.quad([W(j,we,.03),W(j,He,.03),W(K,He,.03),W(K,we,.03)],(F+ue)%2?wt.checkB:wt.checkW,[0,1,0])}}let ne=P.w/2+6+.5,C=[[P.tx,0,P.tz],[P.rx,0,P.rz],[0,1,0]];for(let F of[-1,1])Sa(re,[P.x+P.rx*F*ne,P.yb+4,P.z+P.rz*F*ne],C,[.3,.3,4],wt.post);Sa(re,[P.x,P.yb+7.5,P.z],C,[.5,ne,.5],wt.beam);let Z=(F,j,K)=>[P.x+P.tx*F+P.rx*j,P.yb+K,P.z+P.tz*F+P.rz*j];_e.quad([Z(-.55,-ne,5.2),Z(-.55,ne,5.2),Z(-.55,ne,6.8),Z(-.55,-ne,6.8)],[1,1,1],[-P.tx,0,-P.tz],[[0,0],[1,0],[1,1],[0,1]]),_e.quad([Z(.55,-ne,5.2),Z(.55,ne,5.2),Z(.55,ne,6.8),Z(.55,-ne,6.8)],[1,1,1],[P.tx,0,P.tz],[[1,0],[0,0],[0,1],[1,1]]);for(let F of h){let j=[];for(let ue=F.s0;ue<F.s1;ue+=2)j.push(ue);j.push(F.s1);let K=j.map(Se);for(let ue=0;ue+1<K.length;ue++){let we=K[ue],He=K[ue+1],We=(we.s-F.s0)/4,Ve=(He.s-F.s0)/4;Pe.quad([W(we,-we.w/2,.04),W(we,we.w/2,.04),W(He,He.w/2,.04),W(He,-He.w/2,.04)],[1,1,1],[0,1,0],[[We,0],[We,1],[Ve,1],[Ve,0]])}}}let Be=P=>{let q=P.w/2+D0,z=[[-q,0],[-q,ba]];for(let ne=1;ne<=7;ne++){let C=Math.PI-ne*Math.PI/8;z.push([q*Math.cos(C),ba+hw*Math.sin(C)])}return z.push([q,ba],[q,0]),z},De=(P,q,z,ne=0)=>[P.x+P.rx*q+P.tx*ne,P.yb+z,P.z+P.rz*q+P.tz*ne],Oe=(P,q,z)=>{let ne=-q,C=ba-z,Z=Math.hypot(ne,C)||1;return[P.rx*ne/Z,C/Z,P.rz*ne/Z]},Ye=([P,q])=>{let z=-P,ne=ba-q,C=Math.hypot(z,ne)||1;return[P+z/C*.45,q+ne/C*.45]};for(let P of u){let q=[];for(let ne=P.s0;ne<P.s1;ne+=2)q.push(ne);q.push(P.s1);let z=q.map(Se);for(let ne=0;ne+1<z.length;ne++){let C=z[ne],Z=z[ne+1],F=Be(C),j=Be(Z);for(let K=0;K<F.length-1;K++){let ue=(F[K][0]+F[K+1][0])/2,we=(F[K][1]+F[K+1][1])/2;U.quad([De(C,F[K][0],F[K][1]),De(C,F[K+1][0],F[K+1][1]),De(Z,j[K+1][0],j[K+1][1]),De(Z,j[K][0],j[K][1])],n.open?K%2?wt.tunOchreA:wt.tunOchreB:K%2?wt.tunA:wt.tunB,Oe(C,ue,we))}if(Math.round((C.s-P.s0)/2)%6===0)for(let K=1;K<=8;K++){let ue=Ye(F[K]),we=Ye(F[K+1]),He=(ue[0]+we[0])/2,We=(ue[1]+we[1])/2;R.quad([De(C,ue[0],ue[1]),De(C,we[0],we[1]),De(C,we[0],we[1],.6),De(C,ue[0],ue[1],.6)],n.open?wt.sodium:K%2?wt.neonCyan:wt.neonMag,Oe(C,He,We))}}for(let ne of[P.cutStart?null:z[0],P.cutEnd?null:z[z.length-1]]){if(!ne)continue;let C=ne.w/2+D0,Z=[[ne.tx,0,ne.tz],[ne.rx,0,ne.rz],[0,1,0]];for(let F of[-1,1])Sa(U,[ne.x+ne.rx*F*(C+1.2),ne.yb+5,ne.z+ne.rz*F*(C+1.2)],Z,[2,1.1,5],wt.concrete);Sa(U,[ne.x,ne.yb+10.5,ne.z],Z,[2,C+3.5,1.5],wt.concreteB)}}let Ae=(P,q,z,ne=!1)=>{if(!P.idx.length)return null;let C=new dt;C.setAttribute("position",new rt(P.pos,3)),C.setAttribute("color",new rt(P.col,3)),C.setAttribute("uv",new rt(P.uv,2)),C.setIndex(P.idx),C.computeVertexNormals(),x.push(C);let Z=new et(C,q);return Z.name=z,Z.receiveShadow=ne,g.add(Z),Z};Ae(Ge,b,"road-asphalt",!0),Ae(Q,y,"road-ramp-top"),Ae(oe,w,"road-paint"),Ae(Ee,_,"road-shoulder-talus"),Ae(be,S,"road-barriers"),p&&Ae(Te,A,"road-barrier-neon"),Ae(Ue,I,"road-chevrons"),Ae(Pe,N,"road-boost"),Ae(U,L,"road-tunnels"),Ae(R,B,"road-tunnel-neon"),Ae(re,Y,"road-props"),Ae(_e,ie,"road-start-sign");let ze=[];for(let P=1;P*N0<a-5;P++){let q=P*N0;if(u.some(j=>q>=j.s0-15&&q<=j.s1+15))continue;let z=Se(q),ne=P%2?1:-1,C=ne*(z.w/2+6+2.6),Z=z.yb-zf*Math.min(1,2.45/Cc),F=i.range(8.5,9.5);ze.push({x:z.x+z.rx*C,z:z.z+z.rz*C,y:Z,h:F,hx:z.x+z.rx*(C-ne*.6),hz:z.z+z.rz*(C-ne*.6)})}if(ze.length){let P=new Jt(.18,.26,9,6,1),q=new ei(.55,0);x.push(P,q);let z=new An(P,k,ze.length),ne=new An(q,G,ze.length);z.name="road-lamp-masts",ne.name="road-lamp-heads";let C=new Qe,Z=new un,F=new H,j=new H;ze.forEach((K,ue)=>{j.set(K.x,K.y+K.h/2,K.z),F.set(1,K.h/9,1),C.compose(j,Z,F),z.setMatrixAt(ue,C),j.set(K.hx,K.y+K.h+.2,K.hz),F.set(1,1,1),C.compose(j,Z,F),ne.setMatrixAt(ue,C)}),z.instanceMatrix.needsUpdate=!0,ne.instanceMatrix.needsUpdate=!0,g.add(z,ne)}return{group:g,update:(P,q)=>{M&&(M.offset.x=-(q*.9%1)),N.emissiveIntensity=2.2+.5*Math.sin(q*5)},dispose:()=>{g.removeFromParent();for(let P of x)P.dispose();for(let P of m)P.dispose();for(let P of d)P.dispose()}}}function B0(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new dt,c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let f=0;f<n.length;++f){let p=n[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=F0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][f]);let g=F0(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function F0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new _t(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<t;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Hf(n,e){if(e===km)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===xa||e===hc){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===xa)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var gw=0;function So(n,e=.5,t=1){if(!n||n.userData.voxel||!(n.isMeshStandardMaterial||n.isMeshLambertMaterial))return n;n.userData.voxel=!0;let i=n.onBeforeCompile;return n.onBeforeCompile=(s,r)=>{i?.call(n,s,r),s.uniforms.uVoxCell={value:e},s.uniforms.uVoxStrength={value:t*gw},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"voxel-"+e+"-"+t,n.needsUpdate=!0,n}var xw=/asphalt|paint|boost|sign|ramp|neon|lamp-heads/;function z0(n,e){n.traverse(t=>{if(!t.isMesh||xw.test(t.name))return;let i=Array.isArray(t.material)?t.material:[t.material];for(let s of i)!s||s.transparent||s.emissiveIntensity>1.2||(s.roughness??1)<.35||So(s,e(t),1)})}function k0(n,e,t=46){let i=[];for(let l=0;l<t;l++){let c=e.range(0,Math.PI*2),h=e.range(700,4200),u=Math.cos(c)*h,f=Math.sin(c)*h,p=e.range(260,520),g=e.range(26,46),x=e.int(5,11);for(let m=0;m<x;m++)i.push([u+Math.round(e.range(-3.5,3.5))*g,p+Math.round(e.range(0,1.4))*g*.6,f+Math.round(e.range(-2,2))*g,g*e.int(1,3),g*.6*e.int(1,2),g*e.int(1,2)])}let s=new ei(.72,0),r=new Un({color:n.night?2765648:16777215,fog:!1,flatShading:!0,emissive:n.night?329487:new Ne(16777215).lerp(new Ne(n.skyHorizon),.35).multiplyScalar(.5)}),o=new An(s,r,i.length),a=new Qe;return i.forEach((l,c)=>{a.makeScale(l[3],l[4],l[5]),a.setPosition(l[0],l[1],l[2]),o.setMatrixAt(c,a)}),o.instanceMatrix.needsUpdate=!0,o.frustumCulled=!1,o.name="voxel-clouds",o}function H0(n,e,t,i,s,r,o,a,l,c){let h=e+s,u=t+r,f=i+o,p,g,x,m,d,E;s?(p=0,g=l?1:-1,x=0,m=0,d=0,E=c?1:-1):r?(p=a?1:-1,g=0,x=0,m=0,d=0,E=c?1:-1):(p=a?1:-1,g=0,x=0,m=0,d=l?1:-1,E=0);let v=n(h+p,u+g,f+x)?1:0,M=n(h+m,u+d,f+E)?1:0,T=n(h+p+m,u+g+d,f+x+E)?1:0;return .5+.1667*(v&&M?0:3-(v+M+T))}function Vs(n,e){let t=n.index?n.toNonIndexed():n,i=t.attributes.position,s=t.attributes.color,r=512,o=(m,d,E)=>m+r+(d+r)*1024+(E+r)*1048576,a=new Map,l=(m,d,E,v,M,T)=>{let b=Math.floor(m/e),y=Math.floor(d/e),w=Math.floor(E/e),_=o(b,y,w);a.has(_)||a.set(_,[b,y,w,v,M,T])};for(let m=0;m<i.count;m+=3){let d=i.getX(m),E=i.getY(m),v=i.getZ(m),M=i.getX(m+1),T=i.getY(m+1),b=i.getZ(m+1),y=i.getX(m+2),w=i.getY(m+2),_=i.getZ(m+2),S=.6,A=.6,I=.6;s&&(S=(s.getX(m)+s.getX(m+1)+s.getX(m+2))/3,A=(s.getY(m)+s.getY(m+1)+s.getY(m+2))/3,I=(s.getZ(m)+s.getZ(m+1)+s.getZ(m+2))/3);let N=Math.max(Math.hypot(M-d,T-E,b-v),Math.hypot(y-d,w-E,_-v),Math.hypot(y-M,w-T,_-b)),L=Math.max(1,Math.ceil(N/e*2));for(let B=0;B<=L;B++)for(let Y=0;Y<=L-B;Y++){let ie=B/L,k=Y/L;l(d+(M-d)*ie+(y-d)*k,E+(T-E)*ie+(w-E)*k,v+(b-v)*ie+(_-v)*k,S,A,I)}}let c=new Map;for(let m of a.values()){let d=m[0]+r+(m[2]+r)*1024,E=c.get(d);E||c.set(d,E=[]),E.push(m)}for(let m of c.values()){m.sort((d,E)=>d[1]-E[1]);for(let d=0;d<m.length-1;d++)for(let E=m[d][1]+1;E<m[d+1][1];E++)a.set(o(m[d][0],E,m[d][2]),[m[d][0],E,m[d][2],m[d][3],m[d][4],m[d][5]])}let h=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],u=[],f=[],p=[],g=(m,d,E)=>a.has(o(m,d,E));for(let m of a.values()){let[d,E,v,M,T,b]=m,y=Math.sin(d*12.9898+E*78.233+v*37.719)*43758.5453,w=.86+.24*(y-Math.floor(y));for(let[_,S,A,I]of h)if(!a.has(o(d+_,E+S,v+A)))for(let N of[0,1,2,0,2,3]){let L=I[N*3],B=I[N*3+1],Y=I[N*3+2],ie=w*H0(g,d,E,v,_,S,A,L,B,Y);u.push((d+L)*e,(E+B)*e,(v+Y)*e),f.push(_,S,A),p.push(M*ie,T*ie,b*ie)}}let x=new dt;return x.setAttribute("position",new rt(u,3)),x.setAttribute("normal",new rt(f,3)),x.setAttribute("color",new rt(p,3)),x.computeBoundingSphere(),x}function Ii(n,e,t,i,s,r=.2){let o=new Array(n*e*t),a=(x,m,d)=>x<0||m<0||d<0||x>=n||m>=e||d>=t?null:o[x+n*(m+e*d)];for(let x=0;x<t;x++)for(let m=0;m<e;m++)for(let d=0;d<n;d++)o[d+n*(m+e*x)]=s(d,m,x)||null;let l=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],c=[],h=[],u=[],f=-n/2,p=-t/2;for(let x=0;x<t;x++)for(let m=0;m<e;m++)for(let d=0;d<n;d++){let E=o[d+n*(m+e*x)];if(!E)continue;let v=Math.sin(d*12.9898+m*78.233+x*37.719)*43758.5453,M=1-r/2+r*(v-Math.floor(v));for(let[T,b,y,w]of l)if(!a(d+T,m+b,x+y)&&!(b<0&&m===0))for(let _ of[0,1,2,0,2,3]){let S=w[_*3],A=w[_*3+1],I=w[_*3+2],N=M*H0(a,d,m,x,T,b,y,S,A,I);c.push((d+f+S)*i,(m+A)*i,(x+p+I)*i),h.push(T,b,y),u.push(E[0]*N,E[1]*N,E[2]*N)}}let g=new dt;return g.setAttribute("position",new rt(c,3)),g.setAttribute("normal",new rt(h,3)),g.setAttribute("color",new rt(u,3)),g.computeBoundingSphere(),g}function V0(n,e=1,t=null){if(!n||n.userData.wetRoad)return n;n.userData.wetRoad=!0;let i=n.onBeforeCompile;return n.onBeforeCompile=(s,r)=>{i?.call(n,s,r),s.uniforms.uWet={value:e},s.uniforms.tRefl={value:t?t.texture:null},s.uniforms.uReflMatrix={value:t?t.matrix:new Qe},s.uniforms.uReflOn={value:t?1:0},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"wet-road-"+e+(t?"-refl":""),n.needsUpdate=!0,n}function Vf(n,e){let t=1/0,i=-1/0,s=1/0,r=-1/0,o=1/0,a=-1/0;for(let f=0;f<n.length;f+=4)t=Math.min(t,n[f]),i=Math.max(i,n[f]),s=Math.min(s,n[f+1]),r=Math.max(r,n[f+1]),o=Math.min(o,n[f+2]),a=Math.max(a,n[f+2]);let l=i-t+1,c=r-s+1,h=a-o+1,u=new Map;for(let f=0;f<n.length;f+=4){let p=n[f+3];u.set(n[f]-t+l*(n[f+1]-s+c*(n[f+2]-o)),[(p>>16&255)/255,(p>>8&255)/255,(p&255)/255])}return Ii(l,c,h,e,(f,p,g)=>u.get(f+l*(p+c*g))||null,.12)}function G0(n,e=3.1,t=2.6){if(!n||!n.userData.voxel||n.userData.windows)return n;n.userData.windows=!0;let i=n.onBeforeCompile;n.onBeforeCompile=(r,o)=>{i?.call(n,r,o),r.fragmentShader=r.fragmentShader.replace("#include <roughnessmap_fragment>",`
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
        #include <roughnessmap_fragment>`)};let s=n.customProgramCacheKey?.()||"";return n.customProgramCacheKey=()=>s+"-win-"+e+"-"+t,n.needsUpdate=!0,n}function W0(n){let e={value:0};return n.onBeforeCompile=t=>{t.uniforms.uSeaTime=e,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"sea-waves",n.needsUpdate=!0,e}var vn=5,X0=1,Gs=450,ii=40,q0=12e3,Y0=32,$0=4e3,si=Math.PI*2,Ea=new Yt,wo=new Ne,Z0=new Qe,K0=new Qe,vw=new H(0,1,0),j0=n=>n<0?0:n>1?1:n,Vi=(n,e,t)=>n<e?e:n>t?t:n,xr=(n,e,t)=>{let i=j0((t-n)/(e-n));return i*i*(3-2*i)};function yw(n){let e=(i,s)=>{let r=Math.imul(i|0,374761393)+Math.imul(s|0,668265263)+n|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},t=(i,s)=>{let r=Math.floor(i),o=Math.floor(s),a=i-r,l=s-o,c=a*a*(3-2*a),h=l*l*(3-2*l),u=e(r,o),f=e(r+1,o),p=e(r,o+1),g=e(r+1,o+1);return u+(f-u)*c+(p-u)*h+(u-f-p+g)*c*h};return(i,s)=>(t(i,s)*.5+t(i*2+17.3,s*2-9.1)*.25+t(i*4-3.7,s*4+11.2)*.125)/.875}var Eo=n=>{let e=new Ne(n);return[e.r,e.g,e.b]},Ws={sand:Eo(14271631),dry:Eo(7317050),garrigue:Eo(5212718),rock:Eo(12169890),pale:Eo(13617336),snow:Eo(15855076)},_w=[16513264,15853260,14725754,16052195],Mw=[9075302,7236192,11047018,8023646],bw=[3407871,16727250,16757051],Lc=0,Dc=0,Nc=0,wa=(n,e)=>{Lc+=(n[0]-Lc)*e,Dc+=(n[1]-Dc)*e,Nc+=(n[2]-Nc)*e};function Sw(n,e,t,i,s,r){Lc=Ws.sand[0],Dc=Ws.sand[1],Nc=Ws.sand[2],wa(Ws.dry,xr(2.5,7,n)),wa(Ws.garrigue,xr(25,75,n)*.55),wa(Ws.rock,xr(.4,.65,e)),wa(Ws.pale,xr(95,120,n)*.8),wa(Ws.snow,xr(125,150,n));let o=Lc*t,a=Dc*t,l=Nc*t;i&&(o=o*.45+.02,a=a*.5+.03,l=l*.75+.09);for(let c=0;c<9;c+=3)s[r+c]=o,s[r+c+1]=a,s[r+c+2]=l}function pi(n,e){let t=n.index?n.toNonIndexed():n;t.attributes.uv&&t.deleteAttribute("uv"),t.attributes.normal||t.computeVertexNormals();let i=t.attributes.position.count,s=new Float32Array(i*3);wo.setHex(e);for(let r=0;r<i;r++)s[r*3]=wo.r,s[r*3+1]=wo.g,s[r*3+2]=wo.b;return t.setAttribute("color",new _t(s,3)),t}var Ta=n=>B0(n,!1);function Ew(n,e,t){let i=Math.sin(n*12.9898+e*78.233+t*37.719)*43758.5453;return i-Math.floor(i)}function ww(){let n=new ei(1,0),e=n.attributes.position;for(let t=0;t<e.count;t++){let i=e.getX(t),s=e.getY(t),r=e.getZ(t),o=.8+.4*Ew(i,s,r);e.setXYZ(t,i*o,s*o,r*o)}return n.computeVertexNormals(),n}function Tw(){return Ta([pi(new Jt(.35,.5,6,6).translate(0,3,0),7162931),pi(new ei(3.4,0).scale(1,.55,1).translate(0,7.4,0),4160058)])}function Aw(){return Ta([pi(new Jt(.25,.35,1.2,5).translate(0,.6,0),7162931),pi(new Qn(1.1,10,6).translate(0,6,0),3037756)])}function Rw(){let n=[pi(new Jt(.22,.35,8,5).translate(0,4,0),9071178)];for(let e=0;e<7;e++){let t=new Qn(.55,4.6,3).rotateZ(Math.PI/2-.45).translate(0,8.4,0).rotateY(e*si/7);n.push(pi(t,5214010))}return Ta(n)}function Cw(){return Ta([pi(new Jt(1.6,2.3,13,8).translate(0,6.5,0),16052712),pi(new Jt(2,2,2.2,8).translate(0,6.5,0),12727595),pi(new Jt(1.3,1.3,1.8,8).translate(0,14,0),16771488),pi(new Qn(1.7,1.2,8).translate(0,15.4,0),3812906)])}function Pw(){return Ta([pi(new mn(2.2,.9,6).translate(0,.45,0),15986662),pi(new Qn(1.9,5.4,3).scale(.1,1,1).translate(0,3.6,-.3),16775400)])}function Li(n,e,t,i=!0){let s=new An(n,e,t.length);for(let r=0;r<t.length;r++){let o=t[r];Ea.position.set(o.x,o.y,o.z),Ea.rotation.set(0,o.ry??0,0),Ea.scale.set(o.sx??1,o.sy??1,o.sz??1),Ea.updateMatrix(),s.setMatrixAt(r,Ea.matrix),o.col!==void 0&&(wo.setHex(o.col).multiplyScalar(o.v??1),s.setColorAt(r,wo))}return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.castShadow=i,s}var Iw=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Lw=`
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
}`;function J0(n,e,t,i){let s=e.pts,r=s.length,o=e.bounds,a=!!t.night,l=yw(i.int(1,1073741808)),c=o.minX-Gs-ii,h=o.minZ-Gs-ii,u=Math.ceil((o.maxX-o.minX+2*Gs)/ii)+3,f=Math.ceil((o.maxZ-o.minZ+2*Gs)/ii)+3,p=Array.from({length:u*f},()=>[]);for(let ee=0;ee<r;ee++){let de=Vi(Math.floor((s[ee].x-c)/ii),0,u-1),le=Vi(Math.floor((s[ee].z-h)/ii),0,f-1);p[le*u+de].push(ee)}let g=0;function x(ee,de){let le=Math.floor((ee-c)/ii),he=Math.floor((de-h)/ii),Ce=Math.max(u,f),Le=1/0,Re=0;for(let qe=0;qe<=Ce;qe++){for(let Ke=he-qe;Ke<=he+qe;Ke++){if(Ke<0||Ke>=f)continue;let Mt=Ke===he-qe||Ke===he+qe?1:2*qe;for(let ft=le-qe;ft<=le+qe;ft+=Mt){if(ft<0||ft>=u)continue;let Rt=p[Ke*u+ft];for(let kt=0;kt<Rt.length;kt++){let Wt=Rt[kt],D=s[Wt],ae=D.x-ee,ye=D.z-de,Me=ae*ae+ye*ye;Me<Le&&(Le=Me,Re=Wt)}}}let $e=qe*ii;if(Le<=$e*$e)break}return g=Math.sqrt(Le),Re}function m(ee,de,le){let he=le*le,Ce=1/0,Le=Vi(Math.floor((ee-le-c)/ii),0,u-1),Re=Vi(Math.floor((ee+le-c)/ii),0,u-1),qe=Vi(Math.floor((de-le-h)/ii),0,f-1),$e=Vi(Math.floor((de+le-h)/ii),0,f-1);for(let Ke=qe;Ke<=$e;Ke++)for(let ct=Le;ct<=Re;ct++){let Mt=p[Ke*u+ct];for(let ft=0;ft<Mt.length;ft++){let Rt=s[Mt[ft]],kt=Rt.x-ee,Wt=Rt.z-de;kt*kt+Wt*Wt<=he&&Rt.y<Ce&&(Ce=Rt.y)}}return Ce}let d=Math.ceil(r/4),E=new Float64Array(d*2);for(let ee=0;ee<d;ee++)E[2*ee]=s[ee*4%r].x,E[2*ee+1]=s[ee*4%r].z;function v(ee,de){let le=!1;for(let he=0,Ce=d-1;he<d;Ce=he++){let Le=E[2*he],Re=E[2*he+1],qe=E[2*Ce],$e=E[2*Ce+1];Re>de!=$e>de&&ee<(qe-Le)*(de-Re)/($e-Re)+Le&&(le=!le)}return le}let M=o.minX-Gs,T=o.minZ-Gs,b=Math.ceil((o.maxX-o.minX+2*Gs)/vn)+1,y=Math.ceil((o.maxZ-o.minZ+2*Gs)/vn)+1,w=new Float32Array(b*y);for(let ee=0;ee<y;ee++)for(let de=0;de<b;de++){let le=M+de*vn,he=T+ee*vn,Ce=x(le,he),Le=g,Re=s[Ce],qe=Re.width*.5,$e=Re.y;if(Le<40){let ae=m(le,he,24);ae<$e&&($e=ae)}let Ke=1;if(!v(le,he)){let ae=Le-qe+(l(le/140+31.7,he/140-8.2)-.5)*70;Ke=1-xr(110,200,ae)}let ct=l(le/260,he/260),ft=-15+(10+130*Math.pow(j0((ct-.42)/.5),1.5)+6*ct+15)*Ke;if(Ke>=1){let ae=l(le/90+11.3,he/90-4.1);ft=Math.max(ft,$e+6+38*ae)}let Rt=xr(qe+6+12,qe+6+62,Le),kt=$e-.6,Wt=kt+(ft-kt)*Rt,D=$e+Math.max(0,Le-qe-6-12)*1.2;Wt>D&&(Wt=D),w[ee*b+de]=Wt}let _=null;function S(ee,de){if(_)return _(ee,de);let le=(ee-M)/vn,he=(de-T)/vn;le=Vi(le,0,b-1.000001),he=Vi(he,0,y-1.000001);let Ce=Math.floor(le),Le=Math.floor(he),Re=le-Ce,qe=he-Le,$e=w[Le*b+Ce],Ke=w[Le*b+Ce+1],ct=w[(Le+1)*b+Ce],Mt=w[(Le+1)*b+Ce+1],ft=$e+(Ke-$e)*Re,Rt=ct+(Mt-ct)*Re;return ft+(Rt-ft)*qe}let A=(ee,de)=>Math.max(Math.abs(S(ee+4,de)-S(ee-4,de)),Math.abs(S(ee,de+4)-S(ee,de-4)))/8,I=(ee,de,le)=>{let he=x(ee,de);return g>=s[he].width*.5+6+4+le},N=[],L=[],B=new Float32Array(9),Y=(ee,de,le,he,Ce,Le,Re,qe,$e)=>{let Ke=he-ee,ct=Ce-de,Mt=Le-le,ft=Re-ee,Rt=qe-de,kt=$e-le,Wt=ct*kt-Mt*Rt,D=Mt*ft-Ke*kt,ae=Ke*Rt-ct*ft,ye=Math.hypot(Wt,D,ae)||1,Me=1-Math.abs(D)/ye;N.push(ee,de,le,he,Ce,Le,Re,qe,$e),Sw((de+Ce+qe)/3,Me,.9+.2*i.next(),a,B,0);for(let ce=0;ce<9;ce++)L.push(B[ce])},ie=b-1,k=y-1,G=new Float32Array(ie*k);for(let ee=0;ee<k;ee++)for(let de=0;de<ie;de++){let le=ee*b+de,he=(w[le]+w[le+1]+w[le+b]+w[le+b+1])/4;G[ee*ie+de]=Math.floor(he/X0)*X0}let se=-4;for(let ee=0;ee<k;ee++)for(let de=0;de<ie;de++){let le=G[ee*ie+de],he=M+de*vn,Ce=T+ee*vn,Le=he+vn,Re=Ce+vn;if(le>se&&(Y(he,le,Ce,he,le,Re,Le,le,Ce),Y(Le,le,Ce,he,le,Re,Le,le,Re)),de+1<ie){let qe=G[ee*ie+de+1],$e=Math.min(le,qe),Ke=Math.max(le,qe);Ke>$e&&Ke>se&&(Y(Le,$e,Ce,Le,Ke,Ce,Le,Ke,Re),Y(Le,$e,Ce,Le,Ke,Re,Le,$e,Re))}if(ee+1<k){let qe=G[(ee+1)*ie+de],$e=Math.min(le,qe),Ke=Math.max(le,qe);Ke>$e&&Ke>se&&(Y(he,$e,Re,he,Ke,Re,Le,Ke,Re),Y(he,$e,Re,Le,Ke,Re,Le,$e,Re))}}_=(ee,de)=>{let le=Vi(Math.floor((ee-M)/vn),0,ie-1),he=Vi(Math.floor((de-T)/vn),0,k-1);return G[he*ie+le]};let te=new dt;te.setAttribute("position",new rt(N,3)),te.setAttribute("color",new rt(L,3)),te.computeVertexNormals(),te.computeBoundingSphere();let ve=new et(te,new ot({vertexColors:!0,flatShading:!0,roughness:.94,metalness:0,side:Pt}));ve.receiveShadow=!0;let Se=new at;Se.name="environment",Se.add(ve);let O=(o.minX+o.maxX)/2,W=(o.minZ+o.maxZ)/2,X=new Xn(q0,q0,Y0,Y0);X.rotateX(-Math.PI/2);let J=X.attributes.position,V=J.count,$=new Float32Array(V),fe=new Float32Array(V);for(let ee=0;ee<V;ee++)$[ee]=J.getX(ee),fe[ee]=J.getZ(ee);let ge=new et(X,new ot({color:t.seaColor,roughness:.25,metalness:.05,flatShading:!0}));ge.position.set(O,0,W),Se.add(ge);let Fe=new H(t.sunDir[0],t.sunDir[1],t.sunDir[2]).normalize(),Ge=new at,Q=new St({uniforms:{topColor:{value:new Ne(t.skyTop)},horizonColor:{value:new Ne(t.skyHorizon)},sunColor:{value:new Ne(t.sunColor)},sunDir:{value:Fe},night:{value:a?1:0}},vertexShader:Iw,fragmentShader:Lw,side:an,depthWrite:!1,fog:!1}),oe=new et(new Ns($0,32,16),Q);if(oe.renderOrder=-10,oe.frustumCulled=!1,Ge.add(oe),a){let de=new Float32Array(1500);for(let Ce=0;Ce<500;Ce++){let Le=i.range(0,si),Re=Math.asin(i.range(.05,.98)),qe=$0*.97;de[Ce*3]=qe*Math.cos(Re)*Math.cos(Le),de[Ce*3+1]=qe*Math.sin(Re),de[Ce*3+2]=qe*Math.cos(Re)*Math.sin(Le)}let le=new dt;le.setAttribute("position",new _t(de,3));let he=new Ds(le,new dr({color:16777215,size:2,sizeAttenuation:!1,fog:!1,depthWrite:!1,transparent:!0,opacity:.9}));he.frustumCulled=!1,Ge.add(he)}Se.add(Ge);let Ee=new xo(t.hemiSky,t.hemiGround,t.hemiIntensity),be=new Bi(t.sunColor,t.sunIntensity);be.castShadow=!0,be.shadow.mapSize.set(2048,2048);let Te=be.shadow.camera;Te.left=-90,Te.right=90,Te.top=90,Te.bottom=-90,Te.near=1,Te.far=600,Te.updateProjectionMatrix(),be.shadow.bias=-5e-4,Se.add(Ee,be,be.target);let Ue=n.fog,Pe=n.background,U=new ho(t.fogColor,t.fogDensity),R=new Ne(t.skyHorizon);n.fog=U,n.background=R;let re=M+(b-1)*vn,_e=T+(y-1)*vn,pe=()=>i.range(M+30,re-30),me=()=>i.range(T+30,_e-30),Be=(ee,de,le)=>{let he=[];for(let Ce=0;Ce<de&&he.length<ee;Ce++){let Le=le(pe(),me());Le&&he.push(Le)}return he},De=Be(320,4e4,(ee,de)=>{let le=S(ee,de);if(le<4||le>95||!I(ee,de,2)||A(ee,de)>.6)return null;let he=i.range(.8,1.45);return{x:ee,y:le-.3,z:de,sx:he,sy:he*i.range(.9,1.3),sz:he,ry:i.range(0,si),col:16777215,v:i.range(.85,1.15)}}),Oe=Be(170,4e4,(ee,de)=>{let le=S(ee,de);if(le<6||le>70||!I(ee,de,1.5)||A(ee,de)>.6)return null;let he=i.range(.8,1.3);return{x:ee,y:le-.3,z:de,sx:he,sy:he*i.range(.9,1.25),sz:he,ry:i.range(0,si),col:16777215,v:i.range(.85,1.15)}}),Ye=Be(110,4e4,(ee,de)=>{let le=S(ee,de);if(le<1.8||le>14||!I(ee,de,2)||A(ee,de)>.5)return null;let he=i.range(.85,1.25);return{x:ee,y:le-.3,z:de,sx:he,sy:he,sz:he,ry:i.range(0,si),col:16777215,v:i.range(.9,1.1)}});Se.add(Li(Vs(Tw(),.8),new ot({vertexColors:!0,flatShading:!0,roughness:.9}),De)),Se.add(Li(Vs(Aw(),.7),new ot({vertexColors:!0,flatShading:!0,roughness:.9}),Oe)),Se.add(Li(Vs(Rw(),.6),new ot({vertexColors:!0,flatShading:!0,roughness:.9}),Ye));let Ae=Be(300,3e4,(ee,de)=>{let le=S(ee,de);if(le<1.5)return null;let he=i.range(1.2,4.5);return I(ee,de,he*.6)?{x:ee,y:le+he*.15,z:de,sx:he,sy:he*i.range(.55,.9),sz:he,ry:i.range(0,si),col:i.pick(Mw),v:i.range(.85,1.15)}:null}),ze=Be(3,3e4,(ee,de)=>{if(S(ee,de)>-4)return null;let le=x(ee,de);if(g<s[le].width*.5+200||g>800)return null;let he=i.range(25,45);return{x:ee,y:.1*he,z:de,sx:he,sy:he*.45,sz:he,ry:i.range(0,si),col:10260344,v:1}});Se.add(Li(Vs(ww(),.42),new ot({color:16777215,flatShading:!0,roughness:.95}),Ae.concat(ze)));let xe=[],ke=[],P=[],q=i.int(3,5),z=0;for(let ee=0;ee<4e3&&z<q;ee++){let de=pe(),le=me(),he=x(de,le),Ce=s[he].width*.5;if(g<Ce+25||g>Ce+80)continue;let Le=S(de,le);if(Le<6||Le>40||A(de,le)>.35)continue;z++;let Re=i.int(7,12);for(let qe=0;qe<Re;qe++){let $e=i.range(0,si),Ke=Math.sqrt(i.next())*18,ct=de+Math.cos($e)*Ke,Mt=le+Math.sin($e)*Ke,ft=x(ct,Mt);if(g<s[ft].width*.5+6+4+4)continue;let Rt=S(ct,Mt);if(Rt<3)continue;let kt=i.range(4,6.5),Wt=i.range(3.5,6),D=i.range(4,6.5),ae=i.pick([0,Math.PI/2])+i.range(-.15,.15),ye=Rt-1;if(xe.push({x:ct,y:ye,z:Mt,ry:ae,sx:kt,sy:Wt,sz:D,col:i.pick(_w),v:1}),ke.push({x:ct,y:ye+Wt,z:Mt,ry:ae,sx:kt*1.08,sy:i.range(1.8,2.6),sz:D*1.08}),a)for(let Me of[-1,1]){let ce=Me*kt*.28,Xe=D/2+.03;P.push({x:ct+ce*Math.cos(ae)+Xe*Math.sin(ae),y:ye+Wt*.55,z:Mt-ce*Math.sin(ae)+Xe*Math.cos(ae),ry:ae})}}}let ne=new ot({color:16777215,flatShading:!0,roughness:.85}),C=new ot({color:11818298,flatShading:!0,roughness:.8});if(xe.length){let ee=new mn(1,1,1).translate(0,.5,0),de=Vs(new Jt(0,.71,1,4).rotateY(Math.PI/4).translate(0,.5,0),.125);Se.add(Li(ee,ne,xe),Li(de,C,ke))}if(a&&P.length){let ee=new mn(1.2,1.1,.12);Se.add(Li(ee,new Lt({color:16761466}),P,!1))}if(a){let ee=0,de=0,le=!1;for(let he=0;he<4e3&&!le;he++){let Ce=pe(),Le=me(),Re=x(Ce,Le),qe=s[Re].width*.5;if(g<qe+220||g>qe+420)continue;let $e=S(Ce,Le);$e<6||$e>30||(ee=Ce,de=Le,le=!0)}if(le){let he=[],Ce=[],Le=i.int(9,13);for(let Re=0;Re<Le;Re++){let qe=ee+i.range(-110,110),$e=de+i.range(-110,110),Ke=S(qe,$e);if(Ke<2)continue;let ct=i.range(6,10),Mt=i.range(30,70);he.push({x:qe,y:Ke,z:$e,sx:ct,sy:Mt,sz:ct,col:1777720,v:i.range(.8,1.2)});let ft=i.pick(bw);for(let Rt=0;Rt<3;Rt++){let kt=Rt*si/3+i.range(0,.5);Ce.push({x:qe+Math.cos(kt)*ct*.88,y:Ke+Mt*.05,z:$e+Math.sin(kt)*ct*.88,ry:-kt,sy:Mt*.9,col:ft,v:1})}}Se.add(Li(new Jt(.72,1,1,6).translate(0,.5,0),new ot({color:16777215,flatShading:!0,roughness:.7}),he),Li(new mn(.5,1,.25).translate(0,.5,0),new Lt({color:16777215}),Ce,!1))}}{let ee=[],de=[];for(let he=1;he<y-1;he++)for(let Ce=1;Ce<b-1;Ce++){let Le=he*b+Ce,Re=w[Le];if(Re<2||Re>30)continue;let qe=x(M+Ce*vn,T+he*vn);if(g<s[qe].width*.5+60)continue;(w[Le-1]<0||w[Le+1]<0||w[Le-b]<0||w[Le+b]<0?ee:de).push(Le)}let le=ee.length?ee:de;if(le.length){let he=i.pick(le),Ce=he%b,Le=(he-Ce)/b,Re=new et(Vs(Cw(),.6),new ot({vertexColors:!0,flatShading:!0,roughness:.6}));Re.position.set(M+Ce*vn,w[he]-.5,T+Le*vn),Re.castShadow=!0,Se.add(Re)}}let Z=Be(4,2e4,(ee,de)=>{if(S(ee,de)>-3)return null;let le=x(ee,de);return g<s[le].width*.5+250||g>900?null:{x:ee,y:-.2,z:de,ry:i.range(0,si),col:16777215,v:1}});Z.length&&Se.add(Li(Vs(Pw(),.5),new ot({vertexColors:!0,flatShading:!0,roughness:.6}),Z));let F=[],j=[];for(let ee=0;ee<2e4&&F.length<3;ee++){let de=pe(),le=me(),he=x(de,le);if(g<s[he].width*.5+60)continue;let Ce=S(de,le);Ce<55||F.some(Le=>Math.hypot(Le.x-de,Le.z-le)<200)||F.push({x:de,y:Ce,z:le,ry:i.range(0,si),speed:i.range(.9,1.5),phase:i.range(0,si)})}let K=new mn(.7,14,.22).translate(0,7,0),ue=new ot({color:15659507,flatShading:!0,roughness:.6}),we=null;if(F.length){Se.add(Li(new Jt(.8,.35,30,6).translate(0,15,0),ue,F));for(let ee of F)j.push(new Qe().compose(new H(ee.x,ee.y+30,ee.z),new un().setFromAxisAngle(vw,ee.ry),new H(1,1,1)));we=new An(K,ue,F.length*3),we.castShadow=!0,Se.add(we)}function He(ee){if(we){for(let de=0;de<F.length;de++){let le=ee*F[de].speed+F[de].phase;for(let he=0;he<3;he++)K0.makeRotationZ(le+he*si/3),Z0.multiplyMatrices(j[de],K0),we.setMatrixAt(de*3+he,Z0)}we.instanceMatrix.needsUpdate=!0}}He(0);function We(ee,de,le){be.position.set(le.x+Fe.x*200,le.y+Fe.y*200,le.z+Fe.z*200),be.target.position.set(le.x,le.y,le.z),Ge.position.set(le.x,0,le.z);for(let he=0;he<V;he++)J.setY(he,.35*Math.sin($[he]*.02+de*.8)+.25*Math.cos(fe[he]*.017-de*.6));J.needsUpdate=!0,He(de)}function Ve(){n.remove(Se),Se.traverse(ee=>{if(ee.geometry&&ee.geometry.dispose(),ee.material){let de=Array.isArray(ee.material)?ee.material:[ee.material];for(let le of de)le.dispose()}}),be.shadow.map&&be.shadow.map.dispose(),Se.clear(),n.fog===U&&(n.fog=Ue??null),n.background===R&&(n.background=Pe??null)}return n.add(Se),{group:Se,sun:be,update:We,dispose:Ve,heightAt:S}}var Oc=[.62,.6,.55],Xs=[.5,.49,.45],Wf=[.72,.3,.18],eg=[.6,.24,.15],Xf=[.16,.2,.28],Dw=[.2,.38,.3],tg=[.36,.25,.16],To=[[.1,.27,.08],[.14,.34,.1],[.07,.2,.06],[.2,.42,.12]],yr=[[.93,.84,.62],[.9,.74,.5],[.94,.9,.8],[.88,.66,.5]],bn=(n,e,t)=>{let i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)};function Uc(n,e,t,i){let s=i*3+1,r=Math.ceil(t/2);return Ii(e+2,s+r+1,t+2,1,(o,a,l)=>{let c=o-1,h=l-1;if(a<s){if(c<0||h<0||c>=e||h>=t)return null;if(!(c===0||h===0||c===e-1||h===t-1))return a===s-1?n:null;let p=c===0||c===e-1?h:c,g=c===0||c===e-1?t:e;return a%3===2&&p%3===1&&p<g-1?Xf:a%3===2&&p%3===2&&p<g-1&&bn(c,a,h)>.45?Dw:a===0?Xs:n}let u=a-s;return h>=u-1&&h<=t-u&&u<=r?(c+u)%2?Wf:eg:null},.14)}function Nw(n){return Ii(7,23,7,1,(i,s,r)=>{let o=i-1,a=r-1;if(s<17)return o<0||a<0||o>=5||a>=5?null:o===0||a===0||o===4||a===4?(s===6||s===11||s===14)&&(o===2||a===2)?Xf:s===0?Xs:n:s===16?n:null;let l=s-17;return i>=l&&i<=6-l&&r>=l&&r<=6-l?(i+r)%2?Wf:eg:null},.14)}function Uw(n){let r=[];for(let o=0;o<6;o++)r.push([11+(bn(n,o,1)-.5)*9,13+bn(n,o,2)*6,11+(bn(n,o,3)-.5)*9,3.6+bn(n,o,4)*2.4]);return Ii(22,24,22,.7,(o,a,l)=>{if(a<12&&Math.abs(o-11+.5)<1.3&&Math.abs(l-11+.5)<1.3)return tg;for(let c of r){let h=o-c[0],u=(a-c[1])*1.25,f=l-c[2];if(h*h+u*u+f*f<c[3]*c[3])return To[Math.floor(bn(o,a,l)*To.length)]}return null},.22)}function Ow(){return Ii(14,16,8,.5,(n,e,t)=>{let s=5+Math.floor((n-1)/2)*1.6;return n===0?e<5?(e+t)%3?Oc:Xs:null:n>=1&&n<13&&e<s?e>=s-1?[.42,.42,.44]:Xs:n===13&&e<15&&(t===0||t===7)?[.16,.17,.2]:null},.12)}function Gf(n,e){let r=e-3-9;return Ii(n,e+2,5,1,(o,a,l)=>{let c=o%22,h=a>=e&&(l===0||l===4);if(a>=e)return h?Xs:null;if(a>=e-2)return(o+a+l)%3?Oc:Xs;if(c<4)return(o+a+l)%4?Oc:Xs;if(a<r)return null;let u=c-4-9+.5,f=a-r;return u*u+f*f>81?(o+a+l)%3?Oc:Xs:null},.14)}function Fw(n){return Ii(6,4,6,.5,(t,i,s)=>{let r=t-3+.5,o=s-6/2+.5,a=(i-.8)*1.5,l=2.5+(bn(t+n,i,s)-.5)*1.2;return r*r+a*a+o*o<l*l?To[Math.floor(bn(t,i+n,s)*To.length)]:null},.22)}function Bw(){let t=[[.12,.3,.14],[.15,.36,.16],[.1,.25,.12]];return Ii(6,20,6,.6,(i,s,r)=>{let o=i-3+.5,a=r-6/2+.5;if(s<2)return Math.abs(o)<.6&&Math.abs(a)<.6?tg:null;let l=(s-2)/18,c=2.6*Math.sin(Math.PI*Math.min(1,.18+l*.82))**.7*(1-l*.55)+.3;return o*o+a*a<c*c?t[Math.floor(bn(i,s,r)*3)]:null},.2)}function Q0(n){let r=(a,l)=>{let c=(a-15+.5)/15,h=(l-15+.5)/(30/2),u=Math.hypot(c,h)+(bn(Math.floor(a/3)+n,0,Math.floor(l/3))-.5)*.28,f=Math.max(0,Math.min(1,(.95-u)/.16)),p=14+Math.floor(bn(Math.floor(a/5),n,Math.floor(l/5))*3)*2;return Math.floor(p*f*f*(3-2*f))},o=[];for(let a=0;a<5;a++){let l=Math.floor(15+(bn(n,a,1)-.5)*14),c=Math.floor(15+(bn(n,a,2)-.5)*14);o.push([l,c,r(l,c),yr[Math.floor(bn(n,a,3)*yr.length)],a===0?7:3])}return Ii(30,26,30,1.6,(a,l,c)=>{let h=r(a,c);for(let[p,g,x,m,d]of o){let E=Math.abs(a-p),v=Math.abs(c-g),M=d>3?1:2;if(E<=M&&v<=1&&l>=x&&l<x+d)return l===x+d-2&&E!==M&&v===1?Xf:m;if(E<=M&&v<=1-(l-x-d)&&l>=x+d&&l<x+d+2)return Wf}if(l>=h)return null;if(l===h-1)return bn(a,5,c)>.75?To[0]:[.36,.56,.2];let u=l%5===0?.86:1,f=.93+.14*bn(Math.floor(a/2),l,Math.floor(c/2));return bn(a,l,c)>.965?To[2]:[.74*u*f,.71*u*f,.64*u*f]},.1)}function vr(n,e,t){let i=new An(n,e,t.length),s=new Qe,r=new un,o=new H,a=new H,l=new H(0,1,0);return t.forEach((c,h)=>{r.setFromAxisAngle(l,c.ry||0),o.set(c.sx??c.s??1,c.sy??c.s??1,c.sz??c.s??1),a.set(c.x,c.y,c.z),s.compose(a,r,o),i.setMatrixAt(h,s),c.color&&i.setColorAt(h,c.color)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,i}function zw(){if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=1024,n.height=192;let e=n.getContext("2d");e.fillStyle="#f2efe8",e.fillRect(0,0,1024,192),e.fillStyle="#d6202a";for(let i of[0,880])for(let s=0;s<2;s++)e.beginPath(),e.moveTo(i+s*72,192),e.lineTo(i+s*72+36,192),e.lineTo(i+s*72+108,0),e.lineTo(i+s*72+72,0),e.fill();e.fillStyle="#23262e",e.font='italic 900 118px "Arial Narrow", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("POLYGON RUSH",512,104);let t=new ui(n);return t.colorSpace=Bt,t.anisotropy=8,t}function ng(n,e,t,i){let s=new at;s.name="scenery";let r=[],o=()=>{let L=new ot({vertexColors:!0,roughness:.9,metalness:0});return r.push(L),L},a=(L,B)=>{B.length&&(r.push(L),s.add(vr(L,o(),B)))},l={x:0,y:0,z:0,heading:0},c=n.length,h=L=>!!ks(n,(L%c+c)%c,"tunnel"),u=L=>n.pts[Math.floor((L%c+c)%c/n.step)%n.pts.length].width,f=(L,B)=>{let Y=1/0;for(let ie=0;ie<n.pts.length;ie+=3){let k=n.pts[ie],G=(k.x-L)*(k.x-L)+(k.z-B)*(k.z-B);G<Y&&(Y=G)}return Math.sqrt(Y)},p=(L,B)=>{let Y=Math.floor(L/n.step);for(let ie=0;ie<B/n.step;ie+=4)if(Math.abs(n.pts[(Y+ie)%n.pts.length].curv)>.004)return!1;return!h(L)&&!h(L+B/2)&&!h(L+B)},g=[[24,22,-1]];for(let L=380;L<c-220&&g.length<4;L+=70)p(L-10,80)&&(g.push([L,14,t.sign()]),L+=420);let x=[],m=[],d=[],E=[14032938,2777046,15909424,15921906,2793562,9060290,15235614,2042436],v=L=>g.some(([B,Y])=>L>B-12&&L<B+Y*4+12);for(let[L,B,Y]of g)for(let ie=0;ie<B;ie++){let k=L+ie*4,G=Y*(u(k)/2+6+.6);It(n,k,G,l);let se=l.heading+Y*Math.PI/2,te=Math.sin(l.heading),ve=Math.cos(l.heading),Se=-Y*ve,O=Y*te;x.push({x:l.x+Se*3.5,y:l.y-.3,z:l.z+O*3.5,ry:se});for(let W=0;W<6;W++)for(let X=0;X<4;X++){if(t.next()<.18)continue;let J=-1.6+X*1.05+t.range(-.15,.15),V=1+W*1,$=l.x+Se*V+te*J,fe=l.z+O*V+ve*J,ge=l.y-.3+2.5+W*.8,Fe=new Ne(t.pick(E));m.push({x:$,y:ge+.4,z:fe,ry:l.heading,sx:.5,sy:.8,sz:.36,color:Fe}),d.push({x:$,y:ge+1,z:fe,ry:l.heading,sx:.36,sy:.36,sz:.36,color:new Ne(t.pick([15317386,13208414,9067066,15847334]))}),m.push({x:$-Se*.12,y:ge-.1,z:fe-O*.12,ry:l.heading,sx:.46,sy:.3,sz:.5,color:new Ne(t.pick([2042436,2829099,3820138,5916210]))}),d.push({x:$,y:ge+1.22,z:fe,ry:l.heading,sx:.4,sy:.12,sz:.4,color:new Ne(t.pick([2759698,1118481,14032938,15909424,6965802,15921906]))}),t.next()<.22&&m.push({x:$+te*.32,y:ge+1.05,z:fe+ve*.32,ry:l.heading,sx:.14,sy:.6,sz:.14,color:Fe})}}if(a(Ow(),x),m.length){let L=new mn(1,1,1);r.push(L);let B=new ot({roughness:.85});r.push(B),s.add(vr(L,B,m),vr(L,B,d));let Y=x.map(ie=>({x:ie.x,y:ie.y+8.2,z:ie.z,ry:ie.ry,sx:8,sy:.4,sz:4.05,color:new Ne(2303534)}));s.add(vr(L,B,Y))}let M=zw(),T=new ot({map:M,color:M?16777215:15921128,roughness:.7,side:Pt});r.push(T),M&&r.push(M);let b=new Xn(1,1);r.push(b);let y=[],w=(L,B)=>{if(h(L))return;let Y=B*(u(L)/2+6-.22);It(n,L,Y,l),y.push({x:l.x,y:l.y+.52,z:l.z,ry:l.heading+(B<0?-Math.PI/2:Math.PI/2),sx:9,sy:.92,sz:1})};for(let L=120;L<240;L+=13)w(L,-1);for(let L=30;L<110;L+=13)w(L,1);for(let L=400;L<c-80;L+=260)w(L,-1),w(L+13,-1),w(L+120,1);if(y.length){let L=vr(b,T,y);L.castShadow=!1,s.add(L)}let _=[[],[],[]];for(let L=130;L<c-20;L+=t.range(13,28)){if(v(L)||h(L)||h(L+12)||h(L-12))continue;let Y=(t.next()<.82?-1:1)*(u(L)/2+6+t.range(3.4,6.5));It(n,L,Y,l);let ie=i?i(l.x,l.z):l.y;ie<1.5||_[t.int(0,2)].push({x:l.x,y:ie-.2,z:l.z,ry:t.range(0,6.28),s:t.range(1.3,2.05)})}if(_.forEach((L,B)=>a(Uw(11+B*7),L)),i){let L=[];for(let G=200;G<c-100;G+=45)for(let se of[-1,1]){let te=se*t.range(70,150);It(n,G,te,l);let ve=i(l.x,l.z);ve>l.y+6&&ve>6&&f(l.x,l.z)>55&&L.push({x:l.x,z:l.z,y:ve,score:ve-l.y+t.range(0,4)})}L.sort((G,se)=>se.score-G.score);let B=[];for(let G of L){if(B.length>=4)break;B.every(se=>Math.hypot(se.x-G.x,se.z-G.z)>220)&&B.push(G)}let Y=[{geo:Uc(yr[0],8,7,2),items:[]},{geo:Uc(yr[1],10,7,3),items:[]},{geo:Uc(yr[2],7,6,2),items:[]},{geo:Uc(yr[3],9,8,3),items:[]}],ie=[],k=[];for(let G of B){for(let se=0;se<2;se++){let te=G.x+t.range(-12,12),ve=G.z+t.range(-12,12);f(te,ve)<45||(ie.push({x:te,y:i(te,ve)-.5,z:ve,ry:t.int(0,3)*Math.PI/2}),k.push([te,ve]))}for(let se=0;se<60&&Y.reduce((te,ve)=>te+ve.items.length,0)<B.length*22;se++){let te=t.range(0,6.28),ve=t.range(8,60),Se=G.x+Math.cos(te)*ve,O=G.z+Math.sin(te)*ve,W=i(Se,O);W<3||f(Se,O)<42||k.some(X=>Math.hypot(X[0]-Se,X[1]-O)<12)||(k.push([Se,O]),t.pick(Y).items.push({x:Se,y:W-.5,z:O,ry:t.int(0,3)*Math.PI/2}))}}for(let G of Y)a(G.geo,G.items);a(Nw(yr[2]),ie)}let S=[[],[]];for(let L=115;L<c-10;L+=t.range(4.5,9))if(!h(L)){if(t.next()<.3){L+=t.range(20,60);continue}for(let B of[-1,1]){if(t.next()<.35)continue;let Y=B*(u(L)/2+6+t.range(1.4,2.6));It(n,L,Y,l),S[t.int(0,1)].push({x:l.x,y:l.y-.5,z:l.z,ry:t.range(0,6.28),s:t.range(.8,1.4)})}}S.forEach((L,B)=>a(Fw(3+B*5),L));let A=[];for(let L=160;L<c-60;L+=t.range(120,220)){let B=t.sign(),Y=t.int(5,9);for(let ie=0;ie<Y;ie++){let k=L+ie*4.2;if(h(k))continue;It(n,k,B*(u(k)/2+6+4.2),l);let G=i?i(l.x,l.z):l.y;G<1.5||A.push({x:l.x,y:G-.2,z:l.z,ry:t.range(0,6.28),s:t.range(.85,1.2)})}}if(a(Bw(),A),i){let L=[[],[],[]],B=[];for(let Y=150;Y<c-50;Y+=t.range(120,220))for(let ie of[-1,1]){if(t.next()<.3)continue;It(n,Y,ie*t.range(72,125),l);let k=i(l.x,l.z);k<1||f(l.x,l.z)<56||B.some(G=>Math.hypot(G[0]-l.x,G[1]-l.z)<70)||(B.push([l.x,l.z]),L[t.int(0,2)].push({x:l.x,y:k-3,z:l.z,ry:t.range(0,6.28),s:t.range(1.2,1.9)}))}L.forEach((Y,ie)=>a(Q0(17+ie*13),Y))}{let L=[],B=[],Y=new Ne(12172998),ie=new Ne(7172730);for(let k=0;k<c;k+=4){if(h(k)||v(k))continue;let G=u(k)/2+6-.75;It(n,k,G,l);let se=l.x,te=l.y,ve=l.z,Se=l.heading;L.push({x:se,y:te+.4,z:ve,ry:Se,sx:.12,sy:.8,sz:.12,color:ie}),It(n,k+4,u(k+4)/2+6-.75,l);let O=(se+l.x)/2,W=(te+l.y)/2,X=(ve+l.z)/2,J=Math.hypot(l.x-se,l.z-ve)+.05,V=Math.atan2(l.x-se,l.z-ve);for(let $ of[.42,.72])B.push({x:O,y:W+$,z:X,ry:V,sx:.07,sy:.2,sz:J,color:Y})}if(L.length){let k=new mn(1,1,1),G=new ot({roughness:.35,metalness:.85});r.push(k,G),s.add(vr(k,G,L),vr(k,G,B))}}if(i){let L=[];for(let k=0;k<400&&L.length<16;k++){let G=t.range(n.bounds.minX-420,n.bounds.maxX+420),se=t.range(n.bounds.minZ-420,n.bounds.maxZ+420),te=f(G,se);i(G,se)>-3||te<90||te>520||L.some(ve=>Math.hypot(ve.x-G,ve.z-se)<60)||L.push({x:G,y:-.3,z:se,ry:t.range(0,6.28),s:t.range(.9,1.5)})}let B=[.93,.93,.9],Y=[.98,.97,.93],ie=[.55,.36,.2];a(Ii(5,18,14,.7,(k,G,se)=>{let te=Math.abs(se-6.5),ve=Math.abs(k-2);return G<2?ve<=2-(G===0?1:0)-(te>5?1:0)&&te<7-(G===0?1:0)?G===1&&ve<2?ie:B:null:k===2&&se===7?[.3,.26,.22]:k===2&&se>7&&se<13&&G<17-(se-7)*2.6||k===2&&se<7&&se>1&&G<14-(7-se)*2.4?Y:null},.06),L)}{It(n,0,0,l);let L=l.x,B=l.y,Y=l.z,ie=l.heading,k=Math.sin(ie),G=Math.cos(ie),se=-G,te=k,ve=(O,W,X)=>f(O,W)>X,Se=!1;for(let O of[430,500,380,580,660]){for(let W of[70,130,0,-70,190,-140]){if(Se)break;let X=L+k*O+se*W,J=Y+G*O+te*W;if(!ve(X,J,85))continue;let V=i?Math.max(-2,i(X,J)):B;a(Q0(101),[{x:X,y:V-3,z:J,ry:ie+.6,s:2.3}]);let $=X-k*95-se*30,fe=J-G*95-te*30;if(ve($,fe,45)&&ve($+se*90,fe+te*90,40)&&ve($-se*90,fe-te*90,40)){let ge=i?Math.max(-1,i($,fe)):B;a(Gf(198,24),[{x:$,y:Math.min(ge,B)-5,z:fe,ry:ie}])}Se=!0}if(Se)break}}for(let L of[1,-1]){let B=!0;for(let ie of[210,270,330,390])It(n,ie,L*62,l),f(l.x,l.z)<46&&(B=!1);if(!B||L<0)continue;It(n,300,L*62,l);let Y=i?i(l.x,l.z):l.y;a(Gf(198,22),[{x:l.x,y:Y-4,z:l.z,ry:l.heading-Math.PI/2}]);break}let I=-1,N=-1/0;for(let L=300;L<c-300;L+=40){let B=Math.floor(L/n.step),Y=0;for(let k=0;k<60;k+=6)Y+=Math.abs(n.pts[(B+k)%n.pts.length].curv);let ie=-Y*400+t.range(0,1)-(h(L)||h(L+100)?100:0);ie>N&&(N=ie,I=L)}if(I>0)for(let L of[1,-1]){It(n,I+90,L*95,l);let B=i?i(l.x,l.z):l.y;if(B<2)continue;a(Gf(198,20),[{x:l.x,y:Math.min(B,l.y)-4,z:l.z,ry:l.heading-Math.PI/2}]);break}return{group:s,dispose(){for(let L of r)L.dispose?.()}}}function kw(n,e){let t=n.length,i=new Float64Array(t),s=0;for(let r=0;r<t;r++){let o=0;s=0;for(let a=Math.max(0,r-e);a<=Math.min(t-1,r+e);a++)s+=n[a],o++;i[r]=s/o}return i}function ig(n){let e=n.x.length,t=n.step,i=n.x,s=n.y,r=n.z,o=new Float64Array(e),a=new Float64Array(e),l=new Float64Array(e);for(let y=0;y<e;y++){let w=Math.max(0,y-1),_=Math.min(e-1,y+1),S=i[_]-i[w],A=r[_]-r[w],I=Math.hypot(S,A)||1e-9;o[y]=S/I,a[y]=A/I,l[y]=(s[_]-s[w])/I}let c=new Float64Array(e);for(let y=1;y<e-1;y++){let w=-a[y],_=o[y];c[y]=((o[y+1]-o[y-1])*w+(a[y+1]-a[y-1])*_)/(2*t)}c[0]=c[1],c[e-1]=c[e-2];let h=kw(c,12),u=new Float64Array(e);for(let y=0;y<e;y++)u[y]=Math.min(95,Math.sqrt(30/Math.max(1e-6,Math.abs(h[y]))));for(let y=e-2;y>=0;y--)u[y]=Math.min(u[y],Math.sqrt(u[y+1]**2+80*t));for(let y=1;y<e;y++)u[y]=Math.min(u[y],Math.sqrt(u[y-1]**2+40*t));let f=new Array(e),p=1/0,g=-1/0,x=1/0,m=-1/0,d=1/0,E=0;for(let y=0;y<e;y++){let w=Math.hypot(1,l[y]);f[y]={s:y*t,x:i[y],y:s[y],z:r[y],tx:o[y]/w,ty:l[y]/w,tz:a[y]/w,rx:-a[y],rz:o[y],width:n.width,curv:h[y],vmax:u[y],slope:l[y]},i[y]<p&&(p=i[y]),i[y]>g&&(g=i[y]),r[y]<x&&(x=r[y]),r[y]>m&&(m=r[y]);let _=1/Math.max(1e-9,Math.abs(h[y]));_<d&&(d=_),Math.abs(l[y])>E&&(E=Math.abs(l[y]))}let v=[],M=[];for(let y of n.features)y.type==="tunnel"?v.push({type:"tunnel",s0:y.s0,s1:y.s1,name:y.name}):M.push({s0:y.s0,s1:y.s1,name:y.name});let T=(e-1)*t,b=0;for(let y=0;y<e;y++)b+=t/Math.max(5,u[y]);return{seed:"REAL:"+n.id,attempts:1,open:!0,real:n,raceStart:n.raceStart||0,raceEnd:Math.min(n.raceEnd||T,T),length:T,step:t,count:e,pts:f,features:v,bridges:M,bounds:{minX:p,maxX:g,minZ:x,maxZ:m},stats:{minRadius:d,maxSlope:E,lapTimeEstimate:b,corners:0}}}var sg=["torre","castello","borgo","chiesa","agrumeto","peschereccio","casello"];function Hw(n,e,t,i=null,s=null){let r=[],o=g=>!!s&&s.some(x=>Math.hypot(x.x-g.x,x.z-g.z)<(x.width||200)*.5+350),a=n.length,l=i?i.s0:0,c=i?i.s1:a,h=g=>{if(i&&Number.isFinite(g.s)&&Number.isFinite(g.dist))return{dist:g.dist,q:n.pts[Math.max(0,Math.min(n.count-1,Math.round(g.s/n.step)))]};let x=1/0,m=0;for(let d=0;d<n.count;d+=5){let E=n.pts[d],v=(E.x-g.x)**2+(E.z-g.z)**2;v<x&&(x=v,m=d)}return{dist:Math.sqrt(x),q:n.pts[m]}},u={},f=(g,x)=>(u[g]=(u[g]||0)+1)<=(i?1:x),p=e.places.map(g=>({p:g,n:h(g)})).filter(g=>g.n.dist<1600&&g.n.q.s>150&&g.n.q.s<a-150).sort((g,x)=>g.n.dist-x.n.dist);for(let{p:g,n:x}of p)r.some(m=>m.x!==void 0&&Math.hypot(m.x-g.x,m.z-g.z)<250)||o(g)||(g.kind==="castle"?/^torre/i.test(g.name)?f("torre",2)&&r.push({prop:"torre",x:g.x,z:g.z,height:48,label:g.name}):/castel|rocca|forte|fort/i.test(g.name)&&f("castello",3)&&r.push({prop:"castello",x:g.x,z:g.z,width:170,label:g.name}):g.kind==="place"&&(g.rank==="village"||g.rank==="town"||g.rank===void 0)&&(t(g.x,g.z)-x.q.y>120&&x.dist>250?f("borgo",3)&&r.push({prop:"borgo",x:g.x,z:g.z,width:300}):x.dist>90&&x.dist<450&&f("chiesa",3)&&r.push({prop:"chiesa",x:g.x,z:g.z,width:46})));for(let g=900,x=0;g<a-600;g+=1300,x++){if(g<l||g>=c)continue;let m=n.pts[Math.round(g/n.step)];for(let d of[1,-1]){let E=d*560;if(t(m.x+m.rx*E,m.z+m.rz*E)<=0&&t(m.x+m.rx*E*1.3,m.z+m.rz*E*1.3)<=0)x%2===0&&r.push({prop:"peschereccio",s:g,d:E+x%3*40*d,width:34,sea:!0});else if(x%2===1){let v=d*78,M=t(m.x+m.rx*v,m.z+m.rz*v);M>1&&Math.abs(M-m.y)<14&&r.push({prop:"agrumeto",s:g,d:v,width:70})}}}return r}function qf(n){return n._geo||(n._geo=Vf(n.cells,1)),n._geo}function rg({track:n,data:e,baked:t,heightAt:i,clearance:s,range:r=null,unit:o=!1,avoid:a=null}){let l=new at;l.name="real-props";let c=[],h=[];if(!t)return{group:l,placed:c,skipped:h,dispose(){}};let u=new Un({vertexColors:!0}),f=new Map,p=n.length,g=r?Math.max(0,Math.floor((r.s0-2500)/n.step)):0,x=r?Math.min(n.count,Math.ceil((r.s1+2500)/n.step)):n.count,m=(d,E)=>{let v=1/0,M=g;for(let T=g;T<x;T+=2){let b=n.pts[T],y=(b.x-d)**2+(b.z-E)**2;y<v&&(v=y,M=T)}return{q:n.pts[M],dist:Math.sqrt(v)}};for(let d of Hw(n,e,i,r,a)){let E=t[d.prop];if(!E?.cells?.length)continue;let v=E._ext;if(!v){let I=[1/0,1/0,1/0],N=[-1/0,-1/0,-1/0];for(let L=0;L<E.cells.length;L+=4)for(let B=0;B<3;B++)I[B]=Math.min(I[B],E.cells[L+B]),N[B]=Math.max(N[B],E.cells[L+B]+1);v=E._ext=[N[0]-I[0],N[1]-I[1],N[2]-I[2]]}let M=d.height?d.height/v[1]:d.width/Math.max(v[0],v[2]),T=Math.hypot(v[0],v[2])*M/2,b,y;if(d.x!==void 0)b=d.x,y=d.z;else{let I=n.pts[Math.max(0,Math.min(n.count-1,Math.round(d.s/n.step)))];b=I.x+I.rx*d.d,y=I.z+I.rz*d.d}let w=m(b,y);if(w.dist-T<s){if(d.x===void 0||w.dist<1){h.push(d.prop+" : trop pr\xE8s de la route");continue}let I=(T+s+2)/w.dist;if(b=w.q.x+(b-w.q.x)*I,y=w.q.z+(y-w.q.z)*I,w=m(b,y),w.dist-T<s){h.push(d.prop+" : trop pr\xE8s de la route");continue}}let _;if(d.sea){if(i(b,y)>0){h.push(d.prop+" : pas en mer");continue}_=-.12*M*v[1]}else{_=1/0;for(let[I,N]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]])_=Math.min(_,i(b+I*T*.6,y+N*T*.6));_=Math.max(_,.2)-.5}let S;if(o)S=qf(E);else{let I=d.prop+"@"+M.toFixed(3);S=f.get(I),S||f.set(I,S=Vf(E.cells,M))}let A=new et(S,u);o&&A.scale.setScalar(M),A.name="prop-"+d.prop,A.position.set(b,_,y),A.rotation.y=Math.atan2(w.q.x-b,w.q.z-y),A.updateMatrix(),A.matrixAutoUpdate=!1,l.add(A),c.push({prop:d.prop,label:d.label||null,s:w.q.s,dist:w.dist,x:b,y:_,z:y,size:M})}return{group:l,placed:c,skipped:h,dispose(){u.dispose();for(let d of f.values())d.dispose()}}}var Vw=(n,e,t=1.08,i=1.45)=>{let s=(n>>16&255)/255,r=(n>>8&255)/255,o=(n&255)/255,a=.3*s+.59*r+.11*o,l=(.38+(a-.38)*1.35)/Math.max(a,.001);s*=l,r*=l,o*=l,a=.3*s+.59*r+.11*o,s=Math.min(1,Math.max(0,(a+(s-a)*i)*t)),r=Math.min(1,Math.max(0,(a+(r-a)*i)*t)),o=Math.min(1,Math.max(0,(a+(o-a)*i)*t)),e[0]=s,e[1]=r,e[2]=o};function Fc(n,e,{seaCut:t=.25,yOffset:i=0,tint:s=null,lower:r=.2}={}){let{cell:o,ix:a,iz:l,h:c,c:h}=n,u=a.length,f=1/0,p=-1/0,g=1/0,x=-1/0;for(let te=0;te<u;te++)a[te]<f&&(f=a[te]),a[te]>p&&(p=a[te]),l[te]<g&&(g=l[te]),l[te]>x&&(x=l[te]);let m=n.hx||[],d=n.hz||[],E=n.hh||[];for(let te=0;te<m.length;te++)m[te]<f&&(f=m[te]),m[te]>p&&(p=m[te]),d[te]<g&&(g=d[te]),d[te]>x&&(x=d[te]);let v=u?p-f+1:0,M=u?x-g+1:0,T=new Float32Array(v*M).fill(NaN),b=new Float32Array(v*M).fill(NaN),y=(te,ve)=>te<f||te>p||ve<g||ve>x?-1:(te-f)*M+(ve-g),w={get(te){if(te<0)return;let ve=T[te];return ve===ve?ve:void 0}},_=new Float32Array(u);for(let te=0;te<m.length&&u;te++){let ve=(m[te]-f)*M+(d[te]-g);b[ve]=E[te]/10,T[ve]=Math.floor(E[te]/10/e)*e}let S=0;for(let te=0;te<u;te++){let ve=(a[te]-f)*M+(l[te]-g);_[te]=Math.floor(c[te]/10/e)*e,T[ve]=_[te],b[ve]=c[te]/10,c[te]/10>t&&(S+=2)}let A=M+1,I=new Float32Array((v+1)*A);for(let te=0;te<=v;te++)for(let ve=0;ve<=M;ve++){let Se=0,O=0,W=1/0;for(let J=te-1;J<=te;J++)if(!(J<0||J>=v))for(let V=ve-1;V<=ve;V++){if(V<0||V>=M)continue;let $=b[J*M+V];$===$&&(Se+=$,O++,$<W&&(W=$))}let X=O?Se/O:0;I[te*A+ve]=O?X-(X-W)*r+i:0}let N=new Float32Array(S*9),L=new Float32Array(S*9),B=new Float32Array(S*9),Y=0,ie=[0,0,0],k=(te,ve,Se,O,W,X,J,V,$,fe,ge,Fe)=>{let Ge=O-te,Q=W-ve,oe=X-Se,Ee=J-te,be=V-ve,Te=$-Se,Ue=Q*Te-oe*be,Pe=oe*Ee-Ge*Te,U=Ge*be-Q*Ee,R=Math.hypot(Ue,Pe,U)||1;Ue/=R,Pe/=R,U/=R,N[Y]=te,N[Y+1]=ve,N[Y+2]=Se,N[Y+3]=O,N[Y+4]=W,N[Y+5]=X,N[Y+6]=J,N[Y+7]=V,N[Y+8]=$;for(let re=0;re<9;re+=3)L[Y+re]=Ue,L[Y+re+1]=Pe,L[Y+re+2]=U,B[Y+re]=fe,B[Y+re+1]=ge,B[Y+re+2]=Fe;Y+=9};for(let te=0;te<u;te++){if(c[te]/10<=t)continue;Vw(h[te],ie),s&&s(ie,(a[te]+.5)*o,(l[te]+.5)*o,_[te]);let ve=a[te]-f,Se=l[te]-g,O=I[ve*A+Se],W=I[ve*A+Se+1],X=I[(ve+1)*A+Se],J=I[(ve+1)*A+Se+1],V=a[te]*o,$=l[te]*o,fe=V+o,ge=$+o,Fe=.94+.12*((a[te]*73856093^l[te]*19349663)>>>0)/4294967295,Ge=ie[0]*Fe,Q=ie[1]*Fe,oe=ie[2]*Fe,Ee=.93;Math.abs(O-J)<=Math.abs(W-X)?(k(V,O,$,V,W,ge,fe,J,ge,Ge,Q,oe),k(V,O,$,fe,J,ge,fe,X,$,Ge*Ee,Q*Ee,oe*Ee)):(k(V,O,$,V,W,ge,fe,X,$,Ge,Q,oe),k(V,W,ge,fe,J,ge,fe,X,$,Ge*Ee,Q*Ee,oe*Ee))}let G=new dt;return G.setAttribute("position",new _t(N,3)),G.setAttribute("normal",new _t(L,3)),G.setAttribute("color",new _t(B,3)),G.computeBoundingSphere(),{geo:G,heights:w,key:y,q:_,surfaceAt:(te,ve)=>{let Se=te/o-f,O=ve/o-g,W=Math.floor(Se),X=Math.floor(O);if(W<0||W>=v||X<0||X>=M||b[W*M+X]!==b[W*M+X])return;let J=Se-W,V=O-X,$=I[W*A+X],fe=I[W*A+X+1],ge=I[(W+1)*A+X],Fe=I[(W+1)*A+X+1];return($*(1-V)+fe*V)*(1-J)+(ge*(1-V)+Fe*V)*J}}}function Ao(n,e,t){let i=new An(n,e,t.length),s=new Qe,r=new un,o=new H,a=new H,l=new H(0,1,0);return t.forEach((c,h)=>{r.setFromAxisAngle(l,c.ry||0),o.set(c.sx??1,c.sy??1,c.sz??1),a.set(c.x,c.y,c.z),s.compose(a,r,o),i.setMatrixAt(h,s),c.color&&i.setColorAt(h,c.color)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.frustumCulled=!1,i}function og(n){if(typeof document>"u")return null;let e=document.createElement("canvas");e.width=512,e.height=192;let t=e.getContext("2d");t.fillStyle="#0c7a43",t.fillRect(0,0,512,192),t.strokeStyle="#ffffff",t.lineWidth=8,t.strokeRect(8,8,496,176),t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.font="bold 62px Arial, Helvetica, sans-serif",t.fillText(n[0],256,n[1]?70:96,470),n[1]&&(t.font="bold 44px Arial, Helvetica, sans-serif",t.fillText(n[1],256,136,470));let i=new ui(e);return i.colorSpace=Bt,i.anisotropy=8,i}var Yf=.12,Gw=8200,Ww=3,Xw=1,qw=5,Yw=2,Ro=new Map;function ag(n,e){if(!Ro.has(e)){let t=fetch(`${n}c${String(e).padStart(3,"0")}.json`).then(i=>{if(!i.ok)throw new Error("tuile indisponible : "+e);return i.json()}).then(i=>(Ro.set(e,i),i));t.catch(()=>Ro.delete(e)),Ro.set(e,t)}return Promise.resolve(Ro.get(e))}function $f(n,e,t,i=1){let s=Math.max(0,Math.min(e.chunks-1,Math.floor(t/e.chunk))),r=[];for(let o=Math.max(0,s-1);o<=Math.min(e.chunks-1,s+i);o++)r.push(ag(n,o));return Promise.all(r)}function $w(n,e,t){let i=n.step,s=e*i,r=t*i,o=[];for(let l=e;l<=t;l++)o.push({...n.pts[l],s:(l-e)*i});let a=[];for(let l of n.features)l.type!=="tunnel"||l.s1<=s||l.s0>=r||a.push({type:"tunnel",name:l.name,s0:Math.max(l.s0,s)-s,s1:Math.min(l.s1,r)-s,cutStart:l.s0<s,cutEnd:l.s1>r});return{seed:n.seed+":"+e,open:!0,noStart:!0,length:(o.length-1)*i,step:i,count:o.length,pts:o,features:a,bridges:[]}}function lg(n,e,t,i,{base:s="assets/v3/world/",baked:r=null,rng:o,far:a=null,avoid:l=null}={}){let c=new at;c.name="environment";let h=[],u=C=>(h.push(C),C),f=e.length,p=e.step,g=i.width/2,x=g+6+2,m=i.chunk,d=i.chunks,E=Math.round(m/p),v=new et(u(new Xn(6e4,6e4)),u(new ot({color:t.seaColor,roughness:.16,metalness:.1}))),M=W0(v.material);v.rotation.x=-Math.PI/2,v.position.y=.05,v.name="real-sea",c.add(v);let T=new H(...t.sunDir).normalize(),b=u(new St({side:an,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new Ne(t.skyTop)},uHor:{value:new Ne(t.skyHorizon)},uSun:{value:new Ne(t.sunColor)},uSunDir:{value:T}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uTop, uHor, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = mix(uHor, uTop, pow(max(d.y, 0.0), 0.5));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 600.0) * 3.0 + pow(s, 14.0) * 0.25);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`})),y=new et(u(new Ns(Gw,32,16)),b);y.renderOrder=-10,y.frustumCulled=!1,c.add(y);let w=n.fog,_=n.background;n.fog=new ho(t.fogColor,(t.fogDensity||5e-4)*.3),n.background=new Ne(t.skyHorizon);let S=new xo(t.hemiSky,t.hemiGround,t.hemiIntensity),A=new Bi(t.sunColor,t.sunIntensity);A.castShadow=!0,A.shadow.mapSize.set(2048,2048);let I=A.shadow.camera;I.left=-90,I.right=90,I.top=90,I.bottom=-90,I.near=1,I.far=500,A.shadow.bias=-5e-4,c.add(S,A,A.target);let N=null;function L(C){if(N||!C)return;let Z=new Ne(t.skyHorizon),F=Fc(C,60,{tint:(j,K,ue,we)=>{let He=we>2300?.5:0,We=.55;j[0]=(j[0]+(1-j[0])*He)*(1-We)+Z.r*We,j[1]=(j[1]+(1-j[1])*He)*(1-We)+Z.g*We,j[2]=(j[2]+(1-j[2])*He)*(1-We)+Z.b*We}}).geo;N=new et(u(F),u(new Lt({vertexColors:!0,fog:!1,side:Pt}))),N.name="real-terrain-far",N.scale.setScalar(Yf),N.frustumCulled=!1,N.renderOrder=-5,c.add(N)}a?L(a):typeof fetch=="function"&&fetch(s+"far.json").then(C=>C.ok?C.json():null).then(C=>{me||L(C)}).catch(()=>{});let B=u(new mn(1,1,1)),Y=C=>{let Z=C.index?C.toNonIndexed():C;return Z.computeVertexNormals(),u(Z)},ie=Y(new Qn(Math.SQRT1_2,1,4,1).rotateY(Math.PI/4).translate(0,.5,0)),k=Y(new Qn(.5,1,6,1).translate(0,.5,0)),G=Y(new Jt(.22,.5,1,7,1).translate(0,.5,0)),se=Y(new ei(.5,0).translate(0,.5,0)),te=Y(new Jt(.4,.5,1,5,1).translate(0,.5,0)),ve=So(u(new ot({vertexColors:!0,roughness:.95,metalness:0,side:Pt})),1,1),Se=So(u(new ot({vertexColors:!0,roughness:1,side:Pt})),8,.7),O=G0(So(u(new ot({roughness:.9})),1.5,.8)),W=u(new ot({roughness:.85})),X=u(new Un),J=u(new Un),V=So(u(new ot({roughness:.9})),.8,.6),$=u(new ot({roughness:.35,metalness:.85})),fe=u(new Un),ge=u(new Xn(1,1)),Fe=(C,Z,F)=>{let j=Math.sin(C*127.1+Z*311.7+F*74.7)*43758.5453;return j-Math.floor(j)},Ge=[2910768,2910768,3503416,15231644,15920356].map(C=>new Ne(C)),Q=[15983808,15321498,16117730,14924172,14472128,15784368,13620956].map(C=>new Ne(C)),oe=[11884346,11030070,14275268,13222064,9390646].map(C=>new Ne(C)),Ee=new Ne(12170925),be=new Ne(10131343),Te=new Ne(12764876),Ue=new Ne(8225160),Pe=new Ne(7031346);if(r)for(let C of Object.values(r))C?.cells?.length&&qf(C);let U=60,R=new Map;for(let C=0;C<e.count;C+=3){let Z=e.pts[C],F=Math.floor(Z.x/U)*100003+Math.floor(Z.z/U),j=R.get(F);j||R.set(F,j=[]),j.push(Z)}let re=(C,Z,F,j)=>{let K=null,ue=Math.max(F,j)+x;for(let we=Math.floor((C-ue)/U);we<=Math.floor((C+ue)/U);we++)for(let He=Math.floor((Z-ue)/U);He<=Math.floor((Z+ue)/U);He++){let We=R.get(we*100003+He);if(We)for(let Ve of We){let ee=Math.max(0,Math.abs(Ve.x-C)-F),de=Math.max(0,Math.abs(Ve.z-Z)-j);ee*ee+de*de<x*x&&(K===null||Ve.y<K)&&(K=Ve.y)}}return K},_e=C=>!!ks(e,Math.max(0,Math.min(f-1,C)),"tunnel"),pe=new Map,me=!1,Be={built:0,freed:0,worstStep:0,worstBy:[0,0,0,0,0,0,0,0,0,0],buildings:0,trees:0,props:[]},De=10;function Oe(C,Z){for(let F of pe.values()){if(!F.near)continue;let j=F.near.heights.get(F.near.key(Math.floor(C/10),Math.floor(Z/10)));if(j!==void 0)return j}for(let F of pe.values()){if(!F.mid)continue;let j=F.mid.heights.get(F.mid.key(Math.floor(C/80),Math.floor(Z/80)));if(j!==void 0)return j-3}return-5}function Ye(C,Z){let F=[],j=le=>(F.push(le),le),K=C.group,ue=Z.s0,we=Math.min(Z.s1,f),He=Math.round(ue/p),We=Math.min(e.count-1,Math.round(we/p)),Ve=o.fork("tuile:"+C.i),ee={x:0,y:0,z:0,heading:0},de={x:0,y:0,z:0,heading:0};return C.own=F,[()=>{C.near=Fc(Z.near,1);let le=new et(j(C.near.geo),ve);le.receiveShadow=!0,le.name="real-terrain-near",K.add(le)},()=>{C.mid=Fc(Z.mid,4,{yOffset:-3});let le=new et(j(C.mid.geo),Se);le.name="real-terrain-mid",K.add(le)},...[0,1,2,3].map(le=>()=>{let he=He+Math.round((We-He)*le/4),Ce=He+Math.round((We-He)*(le+1)/4);if(Ce<=he)return;let Le=Ic($w(e,he,Ce),t,Ve.fork("route"+le));K.add(Le.group),C.roads.push(Le)}),()=>{let le=Z.buildings,he=[],Ce=[],Le=[];for(let Re=0;Re<le.x.length;Re++){let qe=le.l[Re]>0?Math.min(le.l[Re],9):1+Math.floor(Ve.next()*3)+(le.w[Re]*le.d[Re]>300?1:0),$e=qe*3.1,Ke=Oe(le.x[Re],le.z[Re]);Ke<-4&&(Ke=le.y[Re]),Ke=Math.max(Ke,.3);let ct=re(le.x[Re],le.z[Re],le.w[Re]/2+.3,le.d[Re]/2+.3);if(ct!==null){let ft=ct-3.2-Ke;if(ft<3)continue;$e>ft&&($e=ft)}he.push({x:le.x[Re],y:Ke+$e/2-.5,z:le.z[Re],sx:le.w[Re],sy:$e+1,sz:le.d[Re],color:Ve.pick(Q)});let Mt=Ve.pick(oe);qe<=3&&le.w[Re]*le.d[Re]<260&&ct===null?Le.push({x:le.x[Re],y:Ke+$e,z:le.z[Re],sx:le.w[Re]+.8,sy:1.6+.12*Math.min(le.w[Re],le.d[Re]),sz:le.d[Re]+.8,color:Mt}):Ce.push({x:le.x[Re],y:Ke+$e+.35,z:le.z[Re],sx:le.w[Re]+.6,sy:.7,sz:le.d[Re]+.6,color:Mt})}if(C.stats.buildings=he.length,he.length){let Re=Ao(B,O,he);Re.name="real-buildings",Re.castShadow=!0,Re.frustumCulled=!0,Re.computeBoundingSphere(),K.add(Re),F.push(Re);for(let[qe,$e]of[[B,Ce],[ie,Le]]){if(!$e.length)continue;let Ke=Ao(qe,W,$e);Ke.name="real-roofs",Ke.frustumCulled=!0,Ke.computeBoundingSphere(),K.add(Ke),F.push(Ke)}}},()=>{let le=Z.trees,he=[],Ce=[],Le=[],Re=[],qe=new Ne;for(let $e=0;$e<le.x.length;$e++){let Ke=le.x[$e],ct=le.z[$e];if(re(Ke,ct,2.5,2.5)!==null)continue;let Mt=le.r[$e]/1e3,ft=le.y[$e]-.4,Rt=.75+.5*Mt,kt=Mt*40;if(le.k[$e])if(Mt<.55){let Wt=8+6*Mt;Ce.push({x:Ke,y:ft,z:ct,ry:kt,sx:2.4,sy:Wt,sz:2.4,color:qe.setRGB(.1*Rt,.26*Rt,.13*Rt).clone()})}else{let Wt=6+5*Mt;he.push({x:Ke,y:ft,z:ct,ry:kt,sx:.8,sy:Wt+.3,sz:.8,color:Pe}),Le.push({x:Ke,y:ft+Wt,z:ct,ry:kt,sx:7.5,sy:2.6,sz:7.5,color:qe.setRGB(.14*Rt,.34*Rt,.16*Rt).clone()})}else{let Wt=3.4+2.6*Mt;he.push({x:Ke,y:ft,z:ct,ry:kt,sx:.7,sy:2,sz:.7,color:Pe}),Re.push({x:Ke,y:ft+1.5,z:ct,ry:kt,sx:Wt,sy:Wt*.85,sz:Wt,color:qe.setRGB(.3*Rt,.44*Rt,.2*Rt).clone()})}}C.stats.trees=Ce.length+Le.length+Re.length;for(let[$e,Ke,ct,Mt]of[[he,te,J,"real-trunks"],[Ce,k,X,"real-trees"],[Le,G,X,"real-trees"],[Re,se,X,"real-trees"]]){if(!$e.length)continue;let ft=Ao(Ke,ct,$e);ft.name=Mt,ft.frustumCulled=!0,ft.computeBoundingSphere(),K.add(ft),F.push(ft)}},()=>{let le=[],he=[],Ce=[],Le=[];for(let Re of e.bridges)if(!(Re.s1<=ue||Re.s0>=we)){for(let qe=Re.s0+6;qe<Re.s1-2;qe+=34){if(qe<ue||qe>=we)continue;It(e,qe,0,ee);let $e=Oe(ee.x,ee.z),Ke=ee.y-1.6-$e;Ke<3||(le.push({x:ee.x,y:$e+Ke/2,z:ee.z,ry:ee.heading,sx:g*1.5,sy:Ke,sz:2.4,color:be}),le.push({x:ee.x,y:ee.y-1.2,z:ee.z,ry:ee.heading,sx:g*2+5,sy:1.2,sz:3.6,color:Ee}))}for(let qe=Re.s0;qe<Re.s1;qe+=8)if(!(qe<ue||qe>=we)){for(let $e of[-1,1])It(e,qe+4,$e*(g+6+.4),ee),he.push({x:ee.x,y:ee.y-.9,z:ee.z,ry:ee.heading,sx:.9,sy:1.8,sz:8.3,color:Ee});It(e,qe+4,0,ee),he.push({x:ee.x,y:ee.y-1.25,z:ee.z,ry:ee.heading,sx:g*2+12,sy:.9,sz:8.3,color:be})}}for(let Re=ue;Re<we&&Re<f-4;Re+=4)if(!_e(Re))for(let qe of[-1,1]){let $e=qe*(g+6-.7);It(e,Re,$e,ee),It(e,Re+4,$e,de),Ce.push({x:ee.x,y:ee.y+.4,z:ee.z,ry:ee.heading,sx:.12,sy:.8,sz:.12,color:Ue});let Ke=Math.hypot(de.x-ee.x,de.z-ee.z)+.05,ct=Math.atan2(de.x-ee.x,de.z-ee.z);for(let Mt of[.42,.72])Le.push({x:(ee.x+de.x)/2,y:(ee.y+de.y)/2+Mt,z:(ee.z+de.z)/2,ry:ct,sx:.07,sy:.2,sz:Ke,color:Te})}for(let[Re,qe,$e,Ke]of[[le,V,"real-piers",!0],[he,V,"real-decks",!1],[Ce,$,"real-rail-posts",!1],[Le,$,"real-rails",!1]]){if(!Re.length)continue;let ct=Ao(B,qe,Re);ct.name=$e,ct.castShadow=Ke,ct.frustumCulled=!0,ct.computeBoundingSphere(),K.add(ct),F.push(ct)}},()=>{for(let he of i.signs){if(he.s<ue||he.s>=we)continue;let Ce=og([he.name,""]),Le=j(new Lt({map:Ce,color:Ce?16777215:817731,side:Pt}));Ce&&j(Ce),It(e,he.s,g+6+2.2,ee);let Re=new et(ge,Le);Re.scale.set(7.5,2.8,1),Re.position.set(ee.x,ee.y+5.2,ee.z),Re.rotation.y=ee.heading+Math.PI,Re.name="real-sign";let qe=new et(B,$);qe.scale.set(.3,5.2,.3),qe.position.set(ee.x,ee.y+2.2,ee.z),K.add(Re,qe)}let le=[];for(let he=Math.max(60,ue);he<we&&he<f-20;he+=Ve.range(5,11)){if(_e(he)||e.bridges.some(Le=>he>Le.s0-4&&he<Le.s1+4))continue;if(Ve.next()<.25){he+=Ve.range(15,50);continue}let Ce=Ve.next()<.5?-1:1;It(e,he,Ce*(g+6+Ve.range(1.2,2.4)),ee),le.push({x:ee.x,y:ee.y-.6,z:ee.z,ry:Ve.range(0,6.28),sx:Ve.range(1.8,3),sy:Ve.range(1.6,2.6),sz:Ve.range(1.8,3),color:Ve.pick(Ge)})}if(le.length){let he=Ao(se,fe,le);he.castShadow=!0,he.name="real-oleanders",he.frustumCulled=!0,he.computeBoundingSphere(),K.add(he),F.push(he)}if(r){let he=rg({track:e,data:Z,baked:r,heightAt:Oe,clearance:x,range:{s0:ue,s1:we},unit:!0,avoid:l});K.add(he.group),F.push(he),C.stats.props=he.placed}}]}function Ae(C){if(pe.has(C)||C<0||C>=d)return;let Z={i:C,state:"loading",group:new at,own:[],steps:null,near:null,mid:null,roads:[],stats:{buildings:0,trees:0,props:[]}};Z.group.name="tuile-"+C,pe.set(C,Z);let F=K=>{me||pe.get(C)!==Z||(Z.steps=Ye(Z,K),Z.state="building",c.add(Z.group))},j=Ro.get(C);j&&typeof j.then!="function"?F(j):ag(s,C).then(F).catch(()=>{pe.get(C)===Z&&pe.delete(C)})}function ze(C){let Z=De-C.steps.length,F=C.steps.shift(),j=typeof performance<"u"?performance.now():0;F();let K=(typeof performance<"u"?performance.now():0)-j;K>Be.worstStep&&(Be.worstStep=K),K>Be.worstBy[Z]&&(Be.worstBy[Z]=Math.round(K)),C.steps.length||(C.state="ready",Be.built++)}function xe(C){c.remove(C.group);for(let Z of C.roads)Z.dispose?.();for(let Z of C.own)Z.isInstancedMesh?Z.dispose():Z.dispose?.();pe.delete(C.i),Be.freed++}function ke(C){let Z=Math.max(0,Math.min(d-1,Math.floor(C/m)));for(let F=Math.max(0,Z-1);F<=Math.min(d-1,Z+1);F++){Ae(F);let j=pe.get(F);for(;j&&j.steps&&j.steps.length;)ze(j)}}let P=0,q=new H;function z(C,Z,F,j=0){y.position.set(F.x,0,F.z),v.position.x=F.x,v.position.z=F.z,M.value=Z,A.position.copy(F).addScaledVector(T,200),A.target.position.copy(F),N&&(q.copy(F),N.position.set(q.x*(1-Yf),-2,q.z*(1-Yf)));let K=Math.max(0,Math.min(d-1,Math.floor(j/m)));for(let we=K-Xw;we<=K+Ww;we++)Ae(we);for(let we of Array.from(pe.values()))(we.i<K-Yw||we.i>K+qw)&&xe(we);P+=1;let ue=null;for(let we of pe.values())we.state==="building"&&(!ue||Math.abs(we.i-K)<Math.abs(ue.i-K))&&(ue=we);ue&&(P>=3||Math.abs(ue.i-K)<=1)&&(P=0,ze(ue));for(let we of pe.values())for(let He of we.roads)He.update?.(C,Z)}function ne(){me=!0;for(let C of Array.from(pe.values()))xe(C);n.remove(c),n.fog&&n.fog!==w&&(n.fog=w||null),n.background=_||null;for(let C of h)C.dispose?.()}return n.add(c),{group:c,sun:A,update:z,dispose:ne,heightAt:Oe,prime:ke,chunks:pe,stats:Be,readyAround(C){let Z=Math.floor(C/m),F=pe.get(Z);return!!F&&F.state==="ready"}}}var Zw=[-5,0,5],Bc=[{id:"car",len:4.4,w:1.9,h:1.45,v:[31,37],lanes:[0,1,2]},{id:"van",len:5.8,w:2.1,h:2.35,v:[28,32],lanes:[1,2]},{id:"bus",len:11.5,w:2.5,h:3.3,v:[25,28],lanes:[2]},{id:"truck",len:13.5,w:2.5,h:3.8,v:[22,25],lanes:[2]}],cg=[0,0,0,0,0,1,1,2,3,3],Kw=.45,jw=1,Jw=1.5,Qw=12,eT=5,tT=3,nT=5;function ug({rng:n,count:e=22,density:t=1}={}){let i=[];for(let u=0;u<e;u++)i.push({id:u,type:Bc[0],lane:1,s:-1e9,d:0,speed:30,cruise:30,color:0,passed:!0,hitT:0});let s={vehicles:i,combo:0,comboT:0,meter:0,nearMisses:0,hits:0,events:[],density:t},r=!1;function o(u,f,p=30,g=30){let x=0;for(let m of i)m!==f&&m.s>u-p&&m.s<u+g&&(x|=1<<m.lane);return x}function a(u,f){let p=Bc[cg[n.int(0,cg.length-1)]],g=o(f,u,45,45),x=p.lanes.filter(d=>!(g&1<<d));return([0,1,2].filter(d=>g&1<<d).length>=2||!x.length)&&(f+=60,x=p.lanes),u.type=p,u.lane=x[n.int(0,x.length-1)],u.d=Zw[u.lane]+n.range(-.35,.35),u.cruise=u.speed=n.range(p.v[0],p.v[1]),u.color=n.int(0,7),u.s=f,u.passed=!1,u.hitT=0,f}function l(u,f=350){let p=u+f;for(let g of i)p=a(g,p)+n.range(70,190)/t;r=!0}function c(u,f,p){s.events.length=0,r||l(f.s);let g=-1/0;for(let x of i)x.s>g&&(g=x.s);for(let x of i){let m=x.cruise,d=0,E=1/0;for(let v of i){if(v===x||v.lane===x.lane)continue;let M=v.s-x.s;M>-8&&M<45&&(d|=1<<v.lane,v.speed<E&&(E=v.speed))}d===(7&~(1<<x.lane))&&(m=Math.min(m,E-.5));for(let v of i){if(v===x||v.lane!==x.lane)continue;let M=v.s-x.s-(v.type.len+x.type.len)/2;M>0&&M<25&&(m=Math.min(m,v.speed))}x.speed+=(m-x.speed)*Math.min(1,u*1.5),x.s+=x.speed*u,x.hitT>0&&(x.hitT-=u),x.s<f.s-70&&(g=a(x,Math.max(g+n.range(70,190)/t,f.s+650)))}for(let x of p){let m=x.state;for(let d of i){let E=m.s-d.s,v=m.d-d.d,M=d.type.len/2+jw,T=d.type.w/2+Kw;if(Math.abs(E)<M&&Math.abs(v)<T){if(d.hitT<=0||x.isPlayer){let b=v!==0?Math.sign(v):m.d<d.d?-1:1;m.d=d.d+b*(T+.05),m.speed>d.speed*.95&&(m.speed=Math.max(d.speed*.9,m.speed*.5),m.boostT=0,d.hitT<=0&&(m.events?.push("hit"),x.isPlayer&&(s.hits++,s.combo=0,s.meter=0,s.events.push({type:"hit",vehicle:d})))),d.hitT=1.2}x.isPlayer&&(d.passed=!0)}else if(x.isPlayer&&!d.passed&&E>M&&(d.passed=!0,Math.abs(v)<T+Jw&&m.speed-d.speed>Qw)){s.nearMisses++,s.combo++,s.comboT=eT,s.meter++;let b=!1;s.meter>=tT&&(s.meter=0,m.boostCharges<nT&&(m.boostCharges+=1,b=!0)),s.events.push({type:"near",vehicle:d,combo:s.combo,boost:b})}}}s.comboT>0&&(s.comboT-=u,s.comboT<=0&&(s.combo=0))}function h(u){for(let f of i)f.s+=u}return Object.assign(s,{update:c,reset:l,shift:h})}var Kf="wss://tracker.openwebtorrent.com",hg=[{urls:"stun:stun.cloudflare.com:3478"}],iT=4,sT=25e3,fg=()=>{let n=crypto.getRandomValues(new Uint8Array(20)),e="";for(let t of n)e+=String.fromCharCode(t);return e},Zf=n=>Array.from(n,e=>e.charCodeAt(0).toString(16).padStart(2,"0")).join("");async function rT(n){let e=new TextEncoder().encode("polygon-rush/v3/"+String(n).trim()),t=new Uint8Array(await crypto.subtle.digest("SHA-1",e)),i="";for(let s of t)i+=String.fromCharCode(s);return i}function dg(n){return n.iceGatheringState==="complete"?Promise.resolve():new Promise(e=>{let t=setTimeout(e,2500);n.addEventListener("icegatheringstatechange",()=>{n.iceGatheringState==="complete"&&(clearTimeout(t),e())})})}async function zc(n,{onPeer:e,onLeave:t,onMessage:i,onStatus:s,maxPeers:r=7}={}){let o=r,a=await rT(n),l=fg(),c=Zf(l),h=new Map,u=new Map,f=null,p=null,g=!1,x=0,m=y=>s?.(y);function d(y,w,_){let S=h.get(y);if(S&&S.ch.readyState==="open"){try{w.close()}catch{}return}let A={id:y,pc:w,ch:_,send(N){_.readyState==="open"&&_.send(JSON.stringify(N))}};h.set(y,A),_.onmessage=N=>{let L;try{L=JSON.parse(N.data)}catch{return}L&&typeof L=="object"&&i?.(A,L)};let I=()=>{h.get(y)===A&&(h.delete(y),t?.(A));try{w.close()}catch{}};_.onclose=I,w.addEventListener("connectionstatechange",()=>{["failed","closed","disconnected"].includes(w.connectionState)&&I()}),e?.(A)}function E(y,w,_){w.readyState==="open"?d(_,y,w):w.onopen=()=>d(_,y,w)}async function v(){let y=[];for(let w=0;w<iT&&h.size+w<o;w++){let _=new RTCPeerConnection({iceServers:hg}),S=_.createDataChannel("jeu",{ordered:!1,maxRetransmits:0});_._ch=S,await _.setLocalDescription(await _.createOffer()),await dg(_);let A=fg();u.set(A,_),setTimeout(()=>{if(u.get(A)===_){u.delete(A);try{_.close()}catch{}}},5e4),y.push({offer_id:A,offer:{type:"offer",sdp:_.localDescription.sdp}})}return y}async function M(y){if(!f||f.readyState!==1)return;let w=h.size<o?await v():[];if(!f||f.readyState!==1)return;let _={action:"announce",info_hash:a,peer_id:l,numwant:w.length,uploaded:0,downloaded:0,left:1,offers:w};y&&(_.event=y),f.send(JSON.stringify(_))}async function T(y){let w;try{w=JSON.parse(y)}catch{return}if(!(!w||w.info_hash!==a)){if(w["failure reason"]){m("Le tracker refuse : "+w["failure reason"]);return}if(w.peer_id!==l){if(w.offer&&w.peer_id&&w.offer_id){let _=Zf(w.peer_id);if(h.has(_)||h.size>=o)return;let S=new RTCPeerConnection({iceServers:hg});S.ondatachannel=A=>E(S,A.channel,_);try{await S.setRemoteDescription(w.offer),await S.setLocalDescription(await S.createAnswer()),await dg(S),f?.send(JSON.stringify({action:"announce",info_hash:a,peer_id:l,to_peer_id:w.peer_id,offer_id:w.offer_id,answer:{type:"answer",sdp:S.localDescription.sdp}}))}catch{try{S.close()}catch{}}}else if(w.answer&&w.offer_id){let _=u.get(w.offer_id);if(!_)return;u.delete(w.offer_id);let S=Zf(w.peer_id);if(h.has(S)){try{_.close()}catch{}return}E(_,_._ch,S);try{await _.setRemoteDescription(w.answer)}catch{try{_.close()}catch{}}}}}}function b(){g||(m("Connexion au tracker\u2026"),f=new WebSocket(Kf),f.onopen=()=>{x=0,m("En attente d'autres joueurs"),M("started"),clearInterval(p),p=setInterval(()=>M(),sT)},f.onmessage=y=>{typeof y.data=="string"&&T(y.data)},f.onclose=()=>{clearInterval(p),!g&&(m("Tracker injoignable, nouvel essai\u2026"),setTimeout(b,Math.min(15e3,2e3*2**x++)))},f.onerror=()=>{})}return b(),{id:c,peers:h,broadcast(y){let w=JSON.stringify(y);for(let _ of h.values())_.ch.readyState==="open"&&_.ch.send(w)},stopAnnouncing(){clearInterval(p);try{f?.close()}catch{}g=!0},leave(){g=!0,clearInterval(p);try{f?.close()}catch{}for(let y of h.values())try{y.pc.close()}catch{}for(let y of u.values())try{y.close()}catch{}h.clear(),u.clear()}}}function pg(){let n=null,e=0,t=null;return{get known(){return!!n},get age(){return n?(performance.now()-e)/1e3:1/0},push(i,s){!Number.isFinite(i.g)||!Number.isFinite(i.d)||!Number.isFinite(i.v)||(n={g:i.g,d:Math.max(-14,Math.min(14,i.d)),v:Math.max(0,Math.min(140,i.v)),l:+i.l||0,y:+i.y||0,b:!!i.b,sh:!!i.sh},e=s)},sample(i,s){if(!n)return null;let r=Math.min(.5,Math.max(0,(i-e)/1e3)),o={g:n.g+n.v*r,d:n.d,v:n.v,l:n.l,y:n.y,b:n.b,sh:n.sh};if(!t||Math.abs(t.g-o.g)>60)t={...o};else{let a=Math.min(1,s*10);t.g+=t.v*s+(o.g-(t.g+t.v*s))*a,t.d+=(o.d-t.d)*a,t.v+=(o.v-t.v)*a,t.l+=(o.l-t.l)*a,t.y+=(o.y-t.y)*a,t.b=o.b,t.sh=o.sh}return t}}}var Aa=[[14885934,2312392],[2005987,15921906],[3129179,1053720],[15902491,1776411],[10178016,15921906],[15751836,1776411],[2279360,1776411],[15921906,14885934]];function Co(n){return String(n||"").replace(/[^\p{L}\p{N} _.-]/gu,"").trim().slice(0,14)||"Pilote"}function jf(n){return String(n||"").toUpperCase().replace(/[^A-Z0-9-]/g,"").slice(0,16)}var kc=15e3;function Jf(n){if(!n||typeof n!="object")return null;let e=jf(n.id);return e.length<4?null:{id:e,name:String(n.name||"").replace(/[^\p{L}\p{N} _.'!-]/gu,"").trim().slice(0,24)||"Partie",host:Co(n.host),players:Math.max(1,Math.min(8,Math.floor(Number(n.players))||1)),locked:!!n.locked,started:!!n.started,stage:Math.max(1,Math.min(99,Math.floor(Number(n.stage))||1))}}function Qf(n,e){let t=!1;for(let[i,s]of n)e-s.seen>kc&&(n.delete(i),t=!0);return t}var vg={name:"ECDSA",namedCurve:"P-256"},yg={name:"ECDSA",hash:"SHA-256"},mg="ABCDEFGHJKMNPQRSTUVWXYZ23456789",_g=new TextEncoder,gg=n=>{let e="";for(let t of new Uint8Array(n))e+=String.fromCharCode(t);return btoa(e)},xg=n=>Uint8Array.from(atob(String(n)),e=>e.charCodeAt(0));async function Mg(n){let e=new Uint8Array(await crypto.subtle.digest("SHA-256",n)),t="";for(let i=0;i<12;i++)t+=mg[e[i]%mg.length];return t}async function bg(){let n=await crypto.subtle.generateKey(vg,!1,["sign","verify"]),e=await crypto.subtle.exportKey("raw",n.publicKey);return{id:await Mg(e),pub:gg(e),sign:async t=>gg(await crypto.subtle.sign(yg,n.privateKey,_g.encode(t)))}}async function Ra(n,e,t,i){try{let s=xg(e);if(s.length!==65||typeof i!="string"||i.length>200||await Mg(s)!==n)return!1;let r=await crypto.subtle.importKey("raw",s,vg,!1,["verify"]);return await crypto.subtle.verify(yg,r,xg(i),_g.encode(t))}catch{return!1}}var ed=n=>["partie",n.id,n.name,n.host,n.players,n.locked?1:0,n.started?1:0,n.stage,n.seq].join("|"),td=(n,e)=>["fermee",n,e].join("|"),nd=(n,e)=>["hote",n,e].join("|");var oT=15,Sg=new Set(["it","hit","gone","res"]);async function Eg(n,e,{onChange:t,onStart:i,onStatus:s,password:r="",roomKey:o=null}={}){let a=!!o,l=String(n).toUpperCase(),c=Promise.resolve(null),h=new Map,u=Co(e),f=null,p=0,g=()=>t?.(),x=await zc("partie/"+String(n).toUpperCase()+(r?"/"+r:""),{onStatus:s,onPeer(d){h.set(d.id,{id:d.id,name:"Pilote",remote:pg(),finished:!1,finishTime:null,gone:!1,peer:d}),c.then(E=>d.send(E?{t:"hi",name:u,pub:o.pub,sig:E}:{t:"hi",name:u})),f&&d.send({t:"busy"}),g()},onLeave(d){let E=h.get(d.id);E&&(f?E.gone=!0:h.delete(d.id),g())},onMessage(d,E){let v=h.get(d.id);v&&(E.t==="hi"?(v.name=Co(E.name),g(),E.pub&&E.sig&&Ra(l,String(E.pub),nd(l,d.id),String(E.sig)).then(M=>{M&&(v.creator=!0,g())})):E.t==="s"?v.remote.push(E,performance.now()):E.t==="fin"&&Number.isFinite(E.time)?(v.finished=!0,v.finishTime=E.time,g()):E.t==="start"&&!f&&d.id===m.hostId?(f={stage:Math.max(1,Math.floor(Number(E.stage))||1)},x.stopAnnouncing(),i?.(f)):E.t==="busy"?(v.busy=!0,g()):Sg.has(E.t)&&m.onItem?.(v,E))}});a&&(c=o.sign(nd(l,x.id)).catch(()=>null));let m={code:n,locked:!!r,id:x.id,name:u,players:h,get started(){return f},get peerCount(){return x.peers.size},get hostId(){if(a)return x.id;for(let E of h.values())if(E.creator&&!E.gone)return E.id;let d=x.id;for(let E of h.keys())E<d&&(d=E);return d},get isHost(){return m.hostId===x.id},roster(){let d=[{id:x.id,name:u,me:!0},...Array.from(h.values()).filter(E=>!E.busy)];return d.sort((E,v)=>E.id<v.id?-1:1),d.map((E,v)=>({...E,color:Aa[v%Aa.length][0],accent:Aa[v%Aa.length][1]}))},start(d){return f||!m.isHost?!1:(f={stage:d},x.broadcast({t:"start",stage:d}),x.stopAnnouncing(),!0)},onItem:null,sendItem(d){d&&Sg.has(d.t)&&x.broadcast(d)},sendState(d,E,v,M=!1){d-p<1e3/oT||(p=d,x.broadcast({t:"s",g:Math.round(E*100)/100,d:Math.round(v.d*100)/100,v:Math.round(v.speed*100)/100,l:Math.round((v.lean||0)*1e3)/1e3,y:Math.round((v.yaw||0)*1e3)/1e3,b:v.boostT>0?1:0,sh:M?1:0}))},sendFinish(d){x.broadcast({t:"fin",time:d})},leave(){x.leave()}};return m}var aT=4e3,wg=60,lT=5*6e4,cT=5;async function Tg({onChange:n,onStatus:e}={}){let t=new Map,i=new Map,s=null,r=!1,o=()=>performance.now(),a=()=>{r||n?.()},l=({seen:x,...m})=>({...m,age:Math.max(0,Math.round(o()-x))});async function c(x,m){let d=Jf(m),E=Number(m?.seq),v=Number(m?.age);if(!d||!Number.isSafeInteger(E)||!Number.isFinite(v)||v<0||v>kc||s&&d.id===s.data.id)return;let M=t.get(d.id);if((M?M.seq>=E:t.size>=wg)||Math.abs(Date.now()-E)>lT)return;let T={...d,seq:E,pub:String(m.pub||""),sig:String(m.sig||"")};if(!await Ra(d.id,T.pub,ed(T),T.sig)){i.set(x.id,(i.get(x.id)||0)+1);return}let b=t.get(d.id);b&&b.seq>=E||(t.set(d.id,{...T,seen:o()-v}),a())}let h=await zc("annuaire",{maxPeers:12,onStatus:e,onPeer(x){x.send({t:"rooms",list:u()}),a()},onLeave(x){i.delete(x.id),a()},async onMessage(x,m){if(!((i.get(x.id)||0)>=cT)){if(m.t==="rooms"&&Array.isArray(m.list))for(let d of m.list.slice(0,wg))await c(x,d);else if(m.t==="gone"&&typeof m.id=="string"){let d=t.get(m.id),E=Number(m.seq);d&&Number.isSafeInteger(E)&&E>d.seq&&await Ra(d.id,d.pub,td(d.id,E),String(m.sig||""))&&(t.delete(m.id),h.broadcast({t:"gone",id:m.id,seq:E,sig:m.sig}),a())}}}});function u(){let x=Array.from(t.values()).filter(m=>o()-m.seen<=kc).map(l);return s?.signed&&x.push({...s.signed,age:0}),x}async function f(){if(!s)return;let x=s,m={...x.data,seq:Date.now(),pub:x.key.pub};m.sig=await x.key.sign(ed(m)),s===x&&(x.signed=m)}let p=setInterval(async()=>{Qf(t,o())&&a(),await f(),r||h.broadcast({t:"rooms",list:u()})},aT);async function g(){if(!s)return;let x=Date.now()+1,m={t:"gone",id:s.data.id,seq:x,sig:await s.key.sign(td(s.data.id,x))};h.broadcast(m)}return{get peers(){return h.peers.size},list(){return Qf(t,o()),Array.from(t.values()).sort((x,m)=>x.started-m.started||m.seen-x.seen)},async advertise(x,m){let d=Jf({...x,id:m.id});!d||s&&JSON.stringify(s.data)===JSON.stringify(d)||(s={key:m,data:d,signed:s?.signed||null},await f(),r||h.broadcast({t:"rooms",list:u()}))},async retire(){s&&(await g(),s=null)},close(){if(r)return;let x=()=>{r=!0,clearInterval(p),h.leave()};s?g().then(x,x):x()}}}var Ag="polygon-rush-name",mi=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),uT=n=>"#"+n.toString(16).padStart(6,"0"),Hc="width:min(70vw,15em);font-size:2.6vmin;letter-spacing:0.04em;text-transform:none";async function Rg(n,e){let t="";try{t=localStorage.getItem(Ag)||""}catch{}let i=()=>{},s="Connexion au tracker\u2026",r=null;try{r=await Tg({onChange:()=>i(),onStatus:a=>{s=a,i()}})}catch(a){return console.warn("Annuaire indisponible :",a),null}let o=()=>(i=()=>{},r.close(),null);for(;;){let a=await n({initial:1,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">Multijoueur \xB7 ${mi(e.title)}</p>
  <div class="pr-seedrow pr-slide" style="--i:1">
    <label class="pr-lbl" for="pr-name-in">Pseudo</label>
    <div class="pr-seedbox"><input id="pr-name-in" class="pr-input" type="text" value="${mi(t)}" maxlength="14" autocomplete="off" spellcheck="false" data-nav data-name style="${Hc}"></div>
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
  <p class="pr-cmds pr-slide" style="--i:4">Liaison directe entre joueurs : votre adresse IP est visible des autres joueurs, du tracker (${mi(Kf.replace("wss://",""))}) et du serveur STUN de Cloudflare.</p>
</section>`,onMount(y){i=()=>{let w=y.querySelector("[data-rooms]");if(!w)return;let _=r.list(),S=r.peers,A=`${S} autre${S>1?"s":""} joueur${S>1?"s":""} dans le lobby`;y.querySelector("[data-status]").textContent=_.length?`${_.length} partie${_.length>1?"s":""} annonc\xE9e${_.length>1?"s":""} \xB7 ${A}`:S?`Aucune partie pour l'instant \xB7 ${A}`:s,w.innerHTML=_.map(I=>`<li style="display:flex;align-items:center;gap:.8em"><span style="flex:1;text-align:left">${I.locked?"\u{1F512} ":""}<b>${mi(I.name)}</b> <small>\xB7 ${mi(I.host)}</small></span><span>${I.players}/8</span>`+(I.started?'<span style="opacity:.6;min-width:7em;text-align:right">en course</span>':`<button type="button" class="pr-btn pr-btn-small" data-act="join" data-id="${mi(I.id)}" data-locked="${I.locked?1:0}" data-room="${mi(I.name)}">Rejoindre</button>`)+"</li>").join("")},i()},actions:{back:(y,w)=>w(null),create:(y,w)=>w({create:!0,name:y.closest(".pr-screen").querySelector("[data-name]").value}),join:(y,w)=>w({join:y.dataset.id,locked:y.dataset.locked==="1",room:y.dataset.room,name:y.closest(".pr-screen").querySelector("[data-name]").value})}});if(i=()=>{},!a)return o();let l=Co(a.name);t=l;try{localStorage.setItem(Ag,l)}catch{}let c,h,u="",f=!1,p=null;if(a.create){let y=await n({initial:0,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">Nouvelle partie</p>
  <div class="pr-seedrow pr-slide" style="--i:1">
    <label class="pr-lbl" for="pr-room-in">Nom de la partie</label>
    <div class="pr-seedbox"><input id="pr-room-in" class="pr-input" type="text" value="${mi("Partie de "+l)}" maxlength="24" autocomplete="off" spellcheck="false" data-nav data-room style="${Hc}"></div>
  </div>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-pass-in">Mot de passe (laisser vide pour une partie publique)</label>
    <div class="pr-seedbox"><input id="pr-pass-in" class="pr-input" type="text" value="" maxlength="24" autocomplete="off" spellcheck="false" data-nav data-pass style="${Hc}"></div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="ok">Ouvrir la partie</button>
    <button type="button" class="pr-btn" data-nav data-act="back">Retour</button>
  </div>
  <p class="pr-cmds pr-slide" style="--i:4">Une partie publique peut \xEAtre rejointe par tous ceux qui la voient dans le lobby.<br>Une partie priv\xE9e appara\xEEt avec un cadenas : il faut son mot de passe pour y entrer.</p>
</section>`,actions:{back:(w,_)=>_(null),ok:(w,_)=>{let S=w.closest(".pr-screen");_({room:S.querySelector("[data-room]").value,pass:S.querySelector("[data-pass]").value.trim()})}}});if(!y)continue;p=await bg(),c=p.id,h=y.room,u=y.pass,f=!0}else if(c=jf(a.join),h=a.room,a.locked){let y=await n({initial:0,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">\u{1F512} ${mi(h)}</p>
  <div class="pr-seedrow pr-slide" style="--i:1">
    <label class="pr-lbl" for="pr-pass-in">Mot de passe de la partie</label>
    <div class="pr-seedbox"><input id="pr-pass-in" class="pr-input" type="text" value="" maxlength="24" autocomplete="off" spellcheck="false" data-nav data-pass style="${Hc}"></div>
  </div>
  <div class="pr-btns pr-slide" style="--i:2">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="ok">Entrer</button>
    <button type="button" class="pr-btn" data-nav data-act="back">Retour</button>
  </div>
</section>`,actions:{back:(w,_)=>_(null),ok:(w,_)=>_({pass:w.closest(".pr-screen").querySelector("[data-pass]").value.trim()})}});if(!y)continue;u=y.pass}let g=null,x=null,m="Connexion au tracker\u2026",d=1;try{g=await Eg(c,l,{password:u,roomKey:p,onChange:()=>i(),onStatus:y=>{m=y,i()},onStart:y=>x?.({stage:y.stage})})}catch(y){console.warn("Partie indisponible :",y);continue}let E=performance.now(),v=e.stages.map((y,w)=>`<option value="${w+1}">${w+1} \xB7 ${mi(y.subtitle)}</option>`).join(""),M=()=>{p&&r.advertise({name:h,host:l,players:g.roster().length,locked:!!u,started:!!g.started,stage:d},p)},T=null,b=await n({initial:0,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">${u?"\u{1F512} Partie priv\xE9e":"Partie publique"}</p>
  <div class="pr-logo pr-slide" style="--i:1;font-size:.45em"><span class="pr-logo-b">${mi(h)}</span></div>
  <p class="pr-cmds pr-slide" style="--i:2" data-status></p>
  <ol class="pr-slist pr-slide" style="--i:3;min-width:min(80vw,26em)" data-list></ol>
  <div class="pr-seedrow pr-slide" style="--i:4" data-hostrow>
    <label class="pr-lbl" for="pr-from-mp">D\xE9part</label>
    <div class="pr-seedbox"><select id="pr-from-mp" class="pr-input" data-nav data-from style="width:min(86vw,34em);font-size:2.3vmin;letter-spacing:0.04em;text-align:left;text-transform:none">${v}</select></div>
  </div>
  <div class="pr-btns pr-slide" style="--i:5">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="start" data-start>D\xE9part</button>
    <button type="button" class="pr-btn" data-nav data-act="quit">Quitter</button>
  </div>
</section>`,onMount(y,w){if(x=w,g.started){w({stage:g.started.stage});return}i=()=>{let _=y.querySelector("[data-list]");if(!_)return;let S=g.roster(),A=g.hostId;_.innerHTML=S.map(B=>`<li${B.me?' class="pr-me"':""}><span style="display:inline-block;width:.8em;height:.8em;border-radius:50%;background:${uT(B.color)};margin-right:.6em"></span><span>${mi(B.name)}${B.me?" (vous)":""}</span><b>${B.id===A?"h\xF4te":""}</b></li>`).join("");let I=S.length<2,N;I?f?N=u?"Partie priv\xE9e ouverte \xB7 donnez le mot de passe \xE0 vos amis":"Partie ouverte \xB7 visible dans le lobby":performance.now()-E>15e3?N=u?"Personne ici : mot de passe incorrect, ou la partie est ferm\xE9e":"Personne ici : la partie est peut-\xEAtre ferm\xE9e":N=m:N=`${S.length} joueurs`+(g.isHost?" \xB7 \xE0 vous de lancer la course":" \xB7 l'h\xF4te lance la course"),y.querySelector("[data-status]").textContent=N,d=Number(y.querySelector("[data-from]").value)||1;let L=y.querySelector("[data-start]");L.style.display=g.isHost?"":"none",L.disabled=I,L.style.opacity=I?"0.45":"",y.querySelector("[data-hostrow]").style.display=g.isHost?"":"none",M()},i(),y.querySelector("[data-from]").addEventListener("change",()=>i()),T=setInterval(()=>i(),3e3)},actions:{quit:(y,w)=>w(null),start:(y,w)=>{if(!g.isHost||g.roster().length<2)return;let _=Number(y.closest(".pr-screen").querySelector("[data-from]").value)||1;g.start(_)&&w({stage:_})}}});if(clearInterval(T),i=()=>{},x=null,!b){await r.retire(),g.leave();continue}return p?M():r.close(),{session:g,stage:b.stage,directory:p?r:null}}}var hT=[14212578,12067627,2051996,3093304,15788504,9080726,1928010,14722347];function qs(n){let e=[],t=[],i=[],s=[[1,0,0,[1,-1,-1,1,1,-1,1,1,1,1,-1,1]],[-1,0,0,[-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1]],[0,1,0,[-1,1,1,1,1,1,1,1,-1,-1,1,-1]],[0,-1,0,[-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1]],[0,0,1,[1,-1,1,1,1,1,-1,1,1,-1,-1,1]],[0,0,-1,[-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1]]];for(let[o,a,l,c,h,u,f=1,p=1,g=1,x=0,m=0]of n){let d=(E,v)=>{let M=v[E*3+1]>0,T=v[E*3+2];return[o+v[E*3]*c/2,a+v[E*3+1]*h/2,l+T*u/2-(M?T>0?x:-m:0)]};for(let[E,v,M,T]of s){let b=d(0,T),y=d(1,T),w=d(2,T),_=(y[1]-b[1])*(w[2]-b[2])-(y[2]-b[2])*(w[1]-b[1]),S=(y[2]-b[2])*(w[0]-b[0])-(y[0]-b[0])*(w[2]-b[2]),A=(y[0]-b[0])*(w[1]-b[1])-(y[1]-b[1])*(w[0]-b[0]),I=Math.hypot(_,S,A)||1,N=_*E+S*v+A*M<0?-1:1;_*=N/I,S*=N/I,A*=N/I;for(let L of[0,1,2,0,2,3])e.push(...d(L,T)),t.push(_,S,A),i.push(f,p,g)}}let r=new dt;return r.setAttribute("position",new rt(e,3)),r.setAttribute("normal",new rt(t,3)),r.setAttribute("color",new rt(i,3)),r}var Vc=[.12,.16,.22],fT=[.07,.07,.08],Gc=[.95,.08,.06],Wc=[1,.95,.75],dT=[.86,.87,.88],pT=[.2,.21,.23];function Xc(n,e,t,i){let s=[];for(let r of i)for(let o of[-1,1])s.push([o*(n/2-.12),t,r,.3,t*2,t*2,...fT]);return s}function mT(n){let{len:e,w:t,h:i}=n,s=-e/2,r=e/2,o=[[-t/2+.3,.75,s-.02,.4,.22,.08,...Gc],[t/2-.3,.75,s-.02,.4,.22,.08,...Gc],[-t/2+.3,.7,r+.02,.4,.2,.08,...Wc],[t/2-.3,.7,r+.02,.4,.2,.08,...Wc]];if(n.id==="car")return[qs([[0,.62,0,t,.64,e,1,1,1,.35,.12],[0,1.4,-.33,t*.8,.08,e*.52-.95]]),qs([[0,1.13,-.25,t*.86,.5,e*.52,...Vc,.55,.4],...Xc(t,e,.32,[e*.3,-e*.3]),...o])];if(n.id==="van")return[qs([[0,1.25,-.5,t,1.9,e-1.2],[0,.85,r-.55,t,1.1,1.1,1,1,1,.25,0]]),qs([[0,1.75,r-.62,t*.92,.7,1,...Vc,.5,0],...Xc(t,e,.36,[e*.32,-e*.3]),...o])];if(n.id==="bus")return[qs([[0,1,0,t,1.3,e],[0,3.05,0,t,.5,e]]),qs([[0,2.2,0,t*1.01,1.15,e*.985,...Vc],...Xc(t,e,.5,[e*.33,-e*.3]),...o])];let a=2.5;return[qs([[0,1.75,r-a/2,t,2.5,a,1,1,1,.3,0]]),qs([[0,2.25,s+(e-a-.5)/2,t,3.1,e-a-.5,...dT],[0,.75,s+(e-a)/2,t*.5,.3,e-a,...pT],[0,2.35,r-.36,t*.92,.85,.85,...Vc,.2,0],...Xc(t,e,.52,[r-1.2,s+1.4,s+2.7,s+4]),[-t/2+.3,1,s-.02,.4,.25,.08,...Gc],[t/2-.3,1,s-.02,.4,.25,.08,...Gc],[-t/2+.3,.9,r+.02,.4,.2,.08,...Wc],[t/2-.3,.9,r+.02,.4,.2,.08,...Wc]])]}function Cg(n,e){let t=new at;t.name="traffic";let i=new Map(Bc.map(u=>[u.id,mT(u)])),s=hT.map(u=>new Un({color:u})),r=new Un({vertexColors:!0}),o=[];for(let u=0;u<e;u++){let f=new at,p=new et(i.get("car")[0],s[0]),g=new et(i.get("car")[1],r);p.castShadow=!0,g.castShadow=!0,f.add(p,g),f.visible=!1,t.add(f),o.push({g:f,body:p,detail:g,type:null,color:-1})}n.add(t);let a={};function l(u,f,p){for(let g=0;g<o.length;g++){let x=o[g],m=u.vehicles[g],d=m?m.s-p:1e9;if(!m||d<-120||d>1400){x.g.visible=!1;continue}if(x.type!==m.type.id){x.type=m.type.id;let[E,v]=i.get(m.type.id);x.body.geometry=E,x.detail.geometry=v}x.color!==m.color&&(x.color=m.color,x.body.material=s[m.color%s.length]),It(f,m.s,m.d,a),x.g.position.set(a.x,a.y,a.z),x.g.rotation.set(-Math.atan(a.slope||0),a.heading,0,"YXZ"),x.g.visible=!0}}function c(){for(let u of o)u.g.visible=!1}function h(){n.remove(t);for(let[u,f]of i.values())u.dispose(),f.dispose();for(let u of s)u.dispose();r.dispose()}return{group:t,update:l,hide:c,dispose:h}}var $c={nitro:{id:"nitro",name:"Nitro",icon:"\u{1F680}"},rocket:{id:"rocket",name:"Fus\xE9e",icon:"\u{1F3AF}"},oil:{id:"oil",name:"Huile",icon:"\u{1F6E2}"},shield:{id:"shield",name:"Bouclier",icon:"\u{1F6E1}"},pulse:{id:"pulse",name:"Impulsion",icon:"\u26A1"}},Pg=Object.keys($c),Ca=5,gT=650,xT=420,vT=320,yT=1.25,_T=3.5,MT=2.6,bT=10,ST=38,Ig=95,Lg=7,ET=420,wT=9,Dg=2.4,TT=1.1,Ng=40,AT=1.3,RT=1.8,CT=.6,id=700,PT=3,IT=.68,LT={rocket:1.1,oil:.8},DT={rocket:.5,oil:.62},qc=5,sd=9,Yc=[.3,.65],NT=1.4,Ug=24,Og=12,UT=1,Fg=new Set(["oil","rocket","pulse"]),Po=(n,e)=>n-e*Math.round(n/e);function Zc(n){return 10+5*Math.max(0,n|0)}function OT(n,{solo:e=!1}={}){return e?{nitro:1,rocket:0,oil:0,shield:0,pulse:0}:{nitro:3,rocket:n<=0?0:1+3.5*n,oil:1+3*(1-n),shield:2,pulse:n>.5?2.4*n:0}}function Bg({track:n,rng:e,startS:t=0,attacks:i=!0,net:s=null}){let r=n.length,o=!!n.open,a=n.raceEnd??r,l=o?gT:r/Math.max(2,Math.round(r/xT)),c=t+vT,h=new Map,u=[],f=[],p=[],g=[],x=[],m=0,d=0,E=O=>O&&O.isPlayer&&s?s.id:O?O.id:null,v={},M=0,T=O=>c+O*l,b=O=>Math.floor((O-c)/l);function y(O,W){let X=fi(n,T(O),v).width;return(W-(Ca-1)/2)*X*.19}let w=O=>O>=0&&(!o||T(O)<a-150),_=new Set,S=(O,W,X)=>(O*Yc.length+W)*qc+X,A=(O,W,X)=>T(O)+l*Yc[W]+X*sd;function I(O,W){let X=fi(n,A(O,W,2),v).width;return(((O*7+W*3)%5+5)%5-2)*.15*X}function N(O,W){let X=W.length,J=X>1?(O.position-1)/(X-1):0,V=OT(J,{solo:!i}),$=0;for(let ge of Pg)$+=V[ge];let fe=e.next()*$;for(let ge of Pg)if(fe-=V[ge],fe<0)return ge;return"nitro"}function L(O,W,X){if(O.shieldT>0)return O.shieldT=0,p.push({type:"block",rider:O,by:W,item:X}),!1;let J=O.state;return X==="pulse"?(O.slowT=PT,J.speed*=.75):(J.stun=Math.max(J.stun||0,LT[X]),J.speed*=DT[X]),J.boostT=0,p.push({type:"hit",rider:O,by:W,item:X}),!0}function B(O,W,X,J){let V=null,$=J;for(let fe of W){if(fe===O||fe.hidden||fe.finished)continue;let ge=X*(o?fe.state.s-O.state.s:Po(fe.state.s-O.state.s,r));ge>0&&ge<$&&(V=fe,$=ge)}return V?{rider:V,gap:$}:null}function Y(O,W){let X=O.item;if(!X||O.finished||(O.state.stun||0)>0)return!1;let J=O.state;if(O.item=null,O.itemT=0,X==="nitro")J.boostT=Math.max(J.boostT,MT);else if(X==="shield")O.shieldT=bT;else if(X==="oil"){u.length>=Ug&&u.shift();let V={s:J.s-2.5,d:J.d,t:Ng,owner:O,arm:CT,id:E(O)+":"+ ++m};u.push(V),s&&g.push({t:"it",k:"oil",id:V.id,g:V.s,d:V.d})}else if(X==="rocket"){f.length>=Og&&f.shift();let V=B(O,W,1,ET),$={s:J.s+2,d:J.d,v:Math.max(Ig,J.speed+ST),t:Lg,owner:O,target:V?V.rider:null};f.push($),s&&g.push({t:"it",k:"rocket",g:$.s,d:$.d,v:$.v,to:E($.target)})}else if(X==="pulse"){for(let V of W){if(V===O||V.hidden||V.remote||V.finished)continue;let $=o?V.state.s-J.s:Po(V.state.s-J.s,r);$>0&&$<id&&L(V,O,"pulse")}s&&g.push({t:"it",k:"pulse",g:J.s})}return p.push({type:"use",rider:O,item:X}),!0}function ie(O,W,X){if(O.itemT=(O.itemT||0)+X,O.itemT<O.itemWait)return;let J=O.itemT>O.itemWait+9,V=O.item,$=J;V==="nitro"?$=$||Math.abs(O.state.lean||0)<.25&&O.state.boostT<=0&&!O.state.airborne:V==="shield"?$=!0:V==="rocket"?$=$||!!B(O,W,1,220):V==="oil"?$=$||!!B(O,W,-1,35):V==="pulse"&&($=$||!!B(O,W,1,id*.6)),$&&Y(O,W)}function k(O,W,{vehicles:X=null,autoPlayer:J=!1}={}){if(p.length=0,M+=O,d>0&&(d-=O),x.length){for(let[V,$]of x)te(V,$,W);x.length=0}for(let V of W){if(V.remote||V.hidden)continue;let $=V.state;if(V.shieldT>0&&(V.shieldT=Math.max(0,V.shieldT-O)),V.slowT>0){V.slowT=Math.max(0,V.slowT-O);let ge=V.stats.maxSpeed*IT;$.speed>ge&&($.speed+=(ge-$.speed)*Math.min(1,O*4)),$.boostT=0}let fe=V.itemPrevS??$.s;if(V.itemPrevS=$.s,!V.finished){if(V.isPlayer&&$.s>fe){for(let ge=Math.max(0,b(fe)-1);ge<=b($.s);ge++)if(w(ge))for(let Fe=0;Fe<Yc.length;Fe++){let Ge=A(ge,Fe,0);if(!($.s<Ge||fe>Ge+qc*sd)&&!(Math.abs($.d-I(ge,Fe))>NT))for(let Q=0;Q<qc;Q++){let oe=Ge+Q*sd,Ee=S(ge,Fe,Q);oe>fe&&oe<=$.s&&!_.has(Ee)&&(_.add(Ee),p.push({type:"shard",rider:V}))}}}if(!V.item&&$.s>fe&&!$.airborne){for(let ge=b(fe)+1;ge<=b($.s);ge++)if(w(ge)){for(let Fe=0;Fe<Ca;Fe++){let Ge=ge*Ca+Fe;if(!((h.get(Ge)||0)>M||Math.abs($.d-y(ge,Fe))>yT)){h.set(Ge,M+_T),V.item=N(V,W),V.itemT=0,V.itemWait=.8+e.next()*4,p.push({type:"pickup",rider:V,item:V.item,row:ge,box:Fe});break}}if(V.item)break}}V.item&&(!V.isPlayer||J)&&ie(V,W,O)}}for(let V=u.length-1;V>=0;V--){let $=u[V];$.t-=O,$.arm>0&&($.arm-=O);let fe=$.t<=0;if(!fe)for(let ge of W){if(ge.remote||ge.hidden||ge.finished||ge.state.airborne||ge===$.owner&&$.arm>0)continue;let Fe=o?ge.state.s-$.s:Po(ge.state.s-$.s,r);if(Math.abs(Fe)<RT&&Math.abs(ge.state.d-$.d)<AT){let Ge=L(ge,$.owner,"oil");s&&(g.push({t:"gone",id:$.id}),$.owner&&$.owner.remote&&g.push({t:"res",by:$.owner.id,k:"oil",ok:Ge?1:0})),fe=!0;break}}fe&&u.splice(V,1)}for(let V=f.length-1;V>=0;V--){let $=f[V];$.t-=O;let fe=$.s;$.s+=$.v*O;let ge=$.target;if(ge&&!ge.finished&&!ge.hidden){let Q=ge.state.d-$.d;$.d+=Math.sign(Q)*Math.min(Math.abs(Q),wT*O)}let Fe=$.t<=0,Ge=null;if($.ghost){!Fe&&ge&&$.s>(o?ge.state.s:fe+Po(ge.state.s-fe,r))+4&&(Fe=!0),Fe&&f.splice(V,1);continue}if(!Fe){for(let Q of W){if(Q===$.owner||Q.hidden||Q.finished)continue;let oe=o?Q.state.s:$.s+Po(Q.state.s-$.s,r);if(oe>fe-Dg&&oe<$.s+Dg&&Math.abs(Q.state.d-$.d)<TT){Ge=Q;break}}if(Ge&&Ge.remote)g.push({t:"hit",to:Ge.id,k:"rocket"}),p.push({type:"sent",rider:Ge,by:$.owner,item:"rocket"}),Fe=!0;else if(Ge)L(Ge,$.owner,"rocket"),Fe=!0;else if(X){for(let Q of X)if(Q.s>fe-Q.type.len/2&&Q.s<$.s+Q.type.len/2&&Math.abs(Q.d-$.d)<Q.type.w/2+.3){p.push({type:"boom",s:$.s,d:$.d}),Fe=!0;break}}}Fe&&f.splice(V,1)}if(h.size>400)for(let[V,$]of h)$<M&&h.delete(V)}function G(O,W){return!s||!O||!W||!W.remote||x.length>=32?!1:(x.push([O,W]),!0)}let se=(O,W,X)=>Number.isFinite(O)?Math.max(W,Math.min(X,O)):null;function te(O,W,X){let J=X.find(V=>V.isPlayer);if(J){if(O.t==="it"&&Fg.has(O.k)){let V=se(O.g,-1e6,1e7);if(V===null)return;if(O.k==="oil"){let $=se(O.d,-20,20),fe=String(O.id||"").slice(0,48);if($===null||!fe||u.some(ge=>ge.id===fe))return;u.length>=Ug&&u.shift(),u.push({s:V,d:$,t:Ng,owner:W,arm:0,id:fe})}else if(O.k==="rocket"){let $=se(O.d,-20,20),fe=se(O.v,Ig,180);if($===null||fe===null)return;f.length>=Og&&f.shift();let ge=O.to===s.id?J:X.find(Fe=>Fe.remote&&Fe.id===O.to)||null;f.push({s:V,d:$,v:fe,t:Lg,owner:W,target:ge,ghost:!0})}else if(O.k==="pulse"){let $=o?J.state.s-V:Po(J.state.s-V,r);if(J.finished||!($>0&&$<id))return;let fe=L(J,W,"pulse");g.push({t:"res",by:W.id,k:"pulse",ok:fe?1:0})}}else if(O.t==="hit"){if(O.to!==s.id||O.k!=="rocket"||J.finished||d>0)return;d=UT;let V=L(J,W,"rocket");g.push({t:"res",by:W.id,k:"rocket",ok:V?1:0});let $=f.findIndex(fe=>fe.ghost&&fe.owner===W);$>=0&&f.splice($,1)}else if(O.t==="gone"){let V=String(O.id||""),$=u.findIndex(fe=>fe.id===V);$>=0&&u.splice($,1)}else if(O.t==="res"&&Fg.has(O.k)){let V=O.by===s.id?J:X.find($=>$.remote&&$.id===O.by)||null;p.push({type:O.ok?"hit":"block",rider:W,by:V,item:O.k})}}}function ve(O,W=[],X=1300,J=60){W.length=0;for(let V=Math.max(0,b(O-J)+1);T(V)<=O+X;V++){if(!w(V)){if(o)break;continue}for(let $=0;$<Ca;$++){let fe=V*Ca+$;(h.get(fe)||0)>M||W.push({s:T(V),d:y(V,$),key:fe})}}return W}function Se(O,W=[],X=650,J=15){W.length=0;for(let V=Math.max(0,b(O-J)-1);T(V)<=O+X;V++){if(!w(V)){if(o)break;continue}for(let $=0;$<Yc.length;$++){let fe=I(V,$);for(let ge=0;ge<qc;ge++){let Fe=A(V,$,ge),Ge=S(V,$,ge);Fe<O-J||Fe>O+X||_.has(Ge)||W.push({s:Fe,d:fe,key:Ge})}}}return W}return{outbox:g,receive:G,shardsAround:Se,shardS:A,shardD:I,update:k,use:Y,boxesAround:ve,hazards:u,rockets:f,events:p,spacing:l,rowS:T,boxD:y,strike:L}}var zg=30,kg=25,Hg=24,Vg=12,Gg=[16761370,2746367,16732064,8257370];function Io(n){let e=n.index?n.toNonIndexed():n;return e.computeVertexNormals(),e}function Wg(n){let e=new at;e.name="items",n.add(e);let t={},i=[],s=Io(new pr(.85,0)),r=Io(new Jl(1.3,.09,4,8)),o=new Jt(.22,.6,16,6,1,!0);o.translate(0,7.6,0);let a=[];for(let G=0;G<kg;G++){let se=Gg[G%Gg.length],te=new at,ve=new et(s,new ot({color:se,emissive:se,emissiveIntensity:.55,roughness:.25,metalness:.2,flatShading:!0})),Se=new et(r,new ot({color:16777215,emissive:16777215,emissiveIntensity:.35,roughness:.4,flatShading:!0})),O=new et(o,new Lt({color:se,transparent:!0,opacity:.5,depthWrite:!1,fog:!1}));te.add(ve,Se,O),te.visible=!1,e.add(te),a.push({g:te,crystal:ve,ring:Se,beam:O,phase:G*1.7})}let l=Io(new pr(.3,0));l.scale(.8,1.35,.8);let c=new ot({color:5111706,emissive:2285690,emissiveIntensity:.9,roughness:.3,flatShading:!0}),h=[],u=[];for(let G=0;G<zg;G++){let se=new et(l,c);se.visible=!1,e.add(se),h.push(se)}let f=new $l(1.35,9);f.rotateX(-Math.PI/2);let p=new jl(1.35,1.6,9);p.rotateX(-Math.PI/2);let g=new Lt({color:460299,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),x=new Lt({color:10112511,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),m=[];for(let G=0;G<Hg;G++){let se=new et(f,g);se.add(new et(p,x)),se.visible=!1,se.rotation.order="YXZ",e.add(se),m.push(se)}let d=(()=>{let G=new Jt(.11,.11,.8,6);return G.rotateX(Math.PI/2),Io(G)})(),E=(()=>{let G=new Qn(.11,.34,6);return G.rotateX(Math.PI/2),G.translate(0,0,.57),Io(G)})(),v=(()=>{let G=new mn(.5,.03,.22);return G.translate(0,0,-.32),G})(),M=new ot({color:15921906,roughness:.4,flatShading:!0}),T=new ot({color:14885934,roughness:.4,flatShading:!0}),b=new Lt({color:16756800}),y=(()=>{let G=new Qn(.09,.5,5);return G.rotateX(-Math.PI/2),G.translate(0,0,-.65),G})(),w=[];for(let G=0;G<Vg;G++){let se=new at,te=new et(v,T);te.rotation.z=Math.PI/2,se.add(new et(d,M),new et(E,T),new et(v,T),te,new et(y,b)),se.visible=!1,se.rotation.order="YXZ",e.add(se),w.push(se)}let _=Io(new ei(1,1)),S=new Lt({color:5953791,transparent:!0,opacity:.16,blending:Oi,depthWrite:!1,side:Pt}),A=new Fi({color:12579583,transparent:!0,opacity:.55,depthWrite:!1}),I=new Kl(_),N=new Map;function L(G){let se=N.get(G);return se||(se=new at,se.add(new et(_,S),new os(I,A)),se.position.set(0,.75,.1),se.scale.set(.8,.85,1.25),se.name="shield",G.add(se),N.set(G,se)),se}function B(G,se,te,ve,Se,O,W){te.boxesAround(Se,i);for(let X=0;X<kg;X++){let J=a[X],V=i[X];if(J.g.visible=!!V,!V)continue;It(ve,V.s,V.d,t);let $=J.phase+V.key%7;J.g.position.set(t.x,t.y+1.3+Math.sin(se*2.4+$)*.12,t.z),J.crystal.rotation.y=se*2.2+$;let fe=Math.min(2.6,Math.max(1,(V.s-Se)/55));J.crystal.scale.setScalar(fe),J.ring.scale.setScalar(fe),J.beam.scale.set(fe,1,fe),J.beam.material.opacity=.2+.3*Math.min(1,(V.s-Se)/120),J.ring.rotation.set(Math.PI/2+Math.sin(se*1.3+$)*.5,se*1.1+$,0)}te.shardsAround(Se,u);for(let X=0;X<zg;X++){let J=h[X],V=u[X];J.visible=!!V,V&&(It(ve,V.s,V.d,t),J.position.set(t.x,t.y+.8+Math.sin(se*3+V.key)*.08,t.z),J.rotation.y=se*3+V.key,J.scale.setScalar(Math.min(2.4,Math.max(1,(V.s-Se)/45))))}for(let X=0;X<Hg;X++){let J=m[X],V=te.hazards[X];J.visible=!!V,V&&(It(ve,V.s,V.d,t),J.position.set(t.x,t.y+.04,t.z),J.rotation.set(-Math.atan(t.slope||0),t.heading,0),J.scale.setScalar(Math.min(1,(40-V.t)*4+.15)))}for(let X=0;X<Vg;X++){let J=w[X],V=te.rockets[X];if(J.visible=!!V,!V)continue;It(ve,V.s,V.d,t),J.position.set(t.x,t.y+.7,t.z),J.rotation.set(-Math.atan(t.slope||0),t.heading,se*9);let $=Math.sin(t.heading),fe=Math.cos(t.heading);W?.emit("boost",t.x-$*.9,t.y+.7,t.z-fe*.9,$*V.v*.6,.2,fe*V.v*.6,1),W?.emit("smoke",t.x-$*1.2,t.y+.7,t.z-fe*1.2,$*V.v*.3,.6,fe*V.v*.3,1)}for(let X of O){let J=(X.rider.shieldT||0)>0;if(!J&&!N.has(X.model.group))continue;let V=L(X.model.group);V.visible=J,J&&(V.rotation.y=se*1.6,V.children[0].visible=X.rider.shieldT>2||Math.sin(se*22)>0)}}function Y(){e.visible=!1}function ie(){e.visible=!0}function k(){N.clear()}return{group:e,update:B,hide:Y,show:ie,reset:k}}var Do=class extends us{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new wd(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Bs.extractUrlBase(e);o=Bs.resolveURL(c,this.path)}else o=Bs.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new da(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Zg){try{o[bt.KHR_BINARY_GLTF]=new Td(e)}catch(u){s&&s(u);return}r=JSON.parse(o[bt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Dd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case bt.KHR_MATERIALS_UNLIT:o[u]=new cd;break;case bt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Ad(r,this.dracoLoader);break;case bt.KHR_TEXTURE_TRANSFORM:o[u]=new Rd;break;case bt.KHR_MESH_QUANTIZATION:o[u]=new Cd;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function FT(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var bt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ld=class{constructor(e){this.parser=e,this.name=bt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ne(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Rn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Bi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new sc(h),c.distance=u;break;case"spot":c=new vo(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,fs(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},cd=class{constructor(){this.name=bt.KHR_MATERIALS_UNLIT}getMaterialType(){return Lt}extendParams(e,t,i){let s=[];e.color=new Ne(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Rn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Bt))}return Promise.all(s)}},ud=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},hd=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ti}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(a,a)}return Promise.all(r)}},fd=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ti}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},dd=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ti}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},pd=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ti}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Rn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Bt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},md=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ti}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},gd=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ti}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(a[0],a[1],a[2],Rn),Promise.all(r)}},xd=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ti}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},vd=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ti}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(a[0],a[1],a[2],Rn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Bt)),Promise.all(r)}},yd=class{constructor(e){this.parser=e,this.name=bt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ti}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},_d=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ti}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Md=class{constructor(e){this.parser=e,this.name=bt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},bd=class{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Sd=class{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ed=class{constructor(e){this.name=bt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,f,s.mode,s.filter),p})})}else return null}},wd=class{constructor(e){this.name=bt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==gi.TRIANGLES&&c.mode!==gi.TRIANGLE_STRIP&&c.mode!==gi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,p=[];for(let g of u){let x=new Qe,m=new H,d=new un,E=new H(1,1,1),v=new An(g.geometry,g.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,M),l.SCALE&&E.fromBufferAttribute(l.SCALE,M),v.setMatrixAt(M,x.compose(m,d,E));for(let M in l)if(M==="_COLOR_0"){let T=l[M];v.instanceColor=new fr(T.array,T.itemSize,T.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);Yt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Zg="glTF",Pa=12,Xg={JSON:1313821514,BIN:5130562},Td=class{constructor(e){this.name=bt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Pa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Zg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Pa,r=new DataView(e,Pa),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Xg.JSON){let c=new Uint8Array(e,Pa+o,a);this.content=i.decode(c)}else if(l===Xg.BIN){let c=Pa+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ad=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=bt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Id[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Id[h]||h.toLowerCase();if(o[h]!==void 0){let f=i.accessors[e.attributes[h]],p=Lo[f.componentType];c[u]=p.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(p){for(let g in p.attributes){let x=p.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(p)},a,c,Rn,f)})})}},Rd=class{constructor(){this.name=bt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Cd=class{constructor(){this.name=bt.KHR_MESH_QUANTIZATION}},Kc=class extends Us{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(i-t)/h,f=u*u,p=f*u,g=e*c,x=g-c,m=-2*p+3*f,d=p-f,E=1-m,v=d-f+u;for(let M=0;M!==a;M++){let T=o[x+M+a],b=o[x+M+l]*h,y=o[g+M+a],w=o[g+M]*h;r[M]=E*T+v*b+m*y+d*w}return r}},BT=new un,Pd=class extends Kc{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return BT.fromArray(r).normalize().toArray(r),r}},gi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Lo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},qg={9728:sn,9729:Vn,9984:hf,9985:na,9986:$r,9987:ci},Yg={33071:is,33648:oa,10497:Nn},rd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Id={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ys={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zT={CUBICSPLINE:void 0,LINEAR:ro,STEP:so},od={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kT(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new ot({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ui})),n.DefaultMaterial}function _r(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function fs(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function HT(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function VT(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function GT(n){let e,t=n.extensions&&n.extensions[bt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ad(t.attributes):e=n.indices+":"+ad(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+ad(n.targets[i]);return e}function ad(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Ld(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function WT(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var XT=new Qe,Dd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new FT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new ic(this.options.manager):this.textureLoader=new rc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new da(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return _r(r,a,s),fs(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[bt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(Bs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=rd[s.type],a=Lo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new _t(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=rd[s.type],c=Lo[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(p&&p!==u){let d=Math.floor(f/p),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,v=t.cache.get(E);v||(x=new c(a,d*p,s.count*p/h),v=new fo(x,p/h),t.cache.add(E,v)),m=new hr(v,l,f%p/h,g)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new _t(x,l,g);if(s.sparse!==void 0){let d=rd.SCALAR,E=Lo[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,T=new E(o[1],v,s.sparse.count*d),b=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new _t(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let y=0,w=T.length;y<w;y++){let _=T[y];if(m.setX(_,b[y*l]),l>=2&&m.setY(_,b[y*l+1]),l>=3&&m.setZ(_,b[y*l+2]),l>=4&&m.setW(_,b[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=qg[f.magFilter]||Vn,h.minFilter=qg[f.minFilter]||ci,h.wrapS=Yg[f.wrapS]||Nn,h.wrapT=Yg[f.wrapT]||Nn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==sn&&h.minFilter!==Vn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new pn(x);m.needsUpdate=!0,f(m)}),t.load(Bs.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),fs(u,o),u.userData.mimeType=o.mimeType||WT(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[bt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[bt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[bt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new dr,Tn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Fi,Tn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return ot}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[bt.KHR_MATERIALS_UNLIT]){let u=s[bt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Rn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Bt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Pt);let h=r.alphaMode||od.OPAQUE;if(h===od.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===od.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Lt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Je(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Lt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Lt){let u=r.emissiveFactor;a.emissive=new Ne().setRGB(u[0],u[1],u[2],Rn)}return r.emissiveTexture!==void 0&&o!==Lt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Bt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),fs(u,r),t.associations.set(u,{materials:e}),r.extensions&&_r(s,u,r),u})}createUniqueName(e){let t=qt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[bt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return $g(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=GT(c),u=s[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[bt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=$g(new dt,c,t),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?kT(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){let x=h[p],m=o[p],d,E=c[p];if(m.mode===gi.TRIANGLES||m.mode===gi.TRIANGLE_STRIP||m.mode===gi.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new Gl(x,E):new et(x,E),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===gi.TRIANGLE_STRIP?d.geometry=Hf(d.geometry,hc):m.mode===gi.TRIANGLE_FAN&&(d.geometry=Hf(d.geometry,xa));else if(m.mode===gi.LINES)d=new os(x,E);else if(m.mode===gi.LINE_STRIP)d=new mo(x,E);else if(m.mode===gi.LINE_LOOP)d=new Yl(x,E);else if(m.mode===gi.POINTS)d=new Ds(x,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&VT(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),fs(d,r),m.extensions&&_r(s,d,m),t.assignFinalMaterial(d),u.push(d)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&_r(s,u[0],r),u[0];let f=new at;r.extensions&&_r(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=u.length;p<g;p++)f.add(u[p]);return f})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new en(Vm.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Is(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),fs(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Qe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Wl(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let p=s.channels[u],g=s.samplers[p.sampler],x=p.target,m=x.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,E=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",E)),c.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],g=u[2],x=u[3],m=u[4],d=[];for(let E=0,v=f.length;E<v;E++){let M=f[E],T=p[E],b=g[E],y=x[E],w=m[E];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let _=i._createAnimationTracks(M,T,b,y,w);if(_)for(let S=0;S<_.length;S++)d.push(_[S])}return new nc(r,void 0,d)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,XT)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new fa:c.length>1?h=new at:c.length===1?h=c[0]:h=new Yt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),fs(h,r),r.extensions&&_r(i,h,r),r.matrix!==void 0){let u=new Qe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new at;i.name&&(r.name=s.createUniqueName(i.name)),fs(r,i),i.extensions&&_r(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,p]of s.associations)(f instanceof Tn||f instanceof pn)&&u.set(f,p);return h.traverse(f=>{let p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Ys[r.path]===Ys.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Ys[r.path]){case Ys.weights:c=as;break;case Ys.rotation:c=ls;break;case Ys.position:case Ys.scale:c=cs;break;default:i.itemSize===1?c=as:c=cs;break}let h=s.interpolation!==void 0?zT[s.interpolation]:ro,u=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){let g=new c(l[f]+"."+Ys[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Ld(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof ls?Pd:Kc;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function qT(n,e,t){let i=e.attributes,s=new Wn;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){let h=Ld(Lo[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new H,l=new H;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let x=Ld(Lo[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new Jn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function $g(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=Id[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return yt.workingColorSpace!==Rn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),fs(n,e),qT(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?HT(n,e.targets,t):n})}var YT=9e3,$T=2500,ZT=2400,KT=600;async function Kg(n="assets/v3/poi/"){try{let e=await fetch(n+"index.json"),t=e.ok?await e.json():[];return Array.isArray(t)?t.filter(i=>i&&i.id&&Number.isFinite(i.x)&&Number.isFinite(i.z)&&Number.isFinite(i.view)):[]}catch{return[]}}function jT(n,e){let t=null;for(let i of n){let s=i.view-e;s<=ZT&&s>=-KT&&(!t||s<t.view-e)&&(t=i)}return t}function JT(n,e,t){return e<t&&t-e<500?n.filter(i=>e<i.view&&i.view<=t):[]}function jg(n,e,{base:t="assets/v3/poi/"}={}){let i=new at;i.name="poi",n.add(i);let s=new Do,r=e.map(v=>({poi:v,state:"idle",node:null,beacon:null,own:[]})),o=[],a=null,l=!1,c=new Jt(.5,1,1,6,1,!0);c.translate(0,.5,0);let h=new pr(1,0),u=[c,h];function f(v,M){let T=M.scene,b=new Wn().setFromObject(T),y=b.getSize(new H),w=v.poi.width/Math.max(y.x,y.z,.001);T.traverse(k=>{if(!k.isMesh)return;let G=k.material,se=(Array.isArray(G)?G:[G]).map(te=>{let ve=new Un({color:te.color?te.color.clone():16777215,flatShading:!0});return ve.emissive.copy(ve.color).multiplyScalar(.22),ve.name=te.name,v.own.push(ve),te.dispose?.(),ve});k.material=Array.isArray(G)?se:se[0],v.own.push(k.geometry),k.castShadow=!1,k.receiveShadow=!1});let _=new at;_.name="poi-"+v.poi.id,T.scale.setScalar(w),T.position.y=-b.min.y*w-v.poi.width*.03,_.add(T),_.position.set(v.poi.x,v.poi.y,v.poi.z),_.rotation.y=v.poi.yaw||0;let S=y.y*w,A=new Lt({color:16766826,transparent:!0,opacity:.32,depthWrite:!1,fog:!1,side:Pt}),I=new et(c,A),N=Math.max(6,v.poi.width*.035);I.scale.set(N,S*1.6+120,N),I.position.y=S*.55;let L=new Lt({color:16761370,fog:!1}),B=new et(h,L),Y=Math.max(10,v.poi.width*.06);B.scale.set(Y,Y*1.5,Y),B.position.y=S*1.18+Y*2;let ie=new at;ie.add(I,B),_.add(ie),v.own.push(A,L),v.beacon={group:ie,beam:I,mark:B,baseY:B.position.y},v.node=_,v.height=S,i.add(_)}function p(v){v.node&&i.remove(v.node);for(let M of v.own)M.dispose?.();v.own.length=0,v.node=null,v.beacon=null,v.state="idle"}function g(v,M,T){if(o.length=0,a!==null)for(let b of JT(e,a,T))o.push(b);a=T;for(let b of r){let y=b.poi.view-T,w=y<YT&&y>-$T;if(w&&b.state==="idle"?(b.state="loading",s.loadAsync(t+b.poi.id+".glb").then(_=>{l||b.state!=="loading"||(f(b,_),b.state="ready")}).catch(_=>{b.state="failed",console.warn("Lieu remarquable indisponible :",b.poi.id,_?.message||_)})):!w&&b.state==="ready"&&p(b),b.beacon){let _=y>-60&&y<5e3&&!b.beacon.group.userData.hide;b.beacon.group.visible=_,_&&(b.beacon.mark.rotation.y=M*1.8,b.beacon.mark.position.y=b.beacon.baseY+Math.sin(M*2.2)*b.poi.width*.012,b.beacon.beam.material.opacity=.18+.16*(.5+.5*Math.sin(M*3)))}}}let x=new H;function m(v,M,T,b,y,w){let _=r.find(G=>G.poi===v);if(!_||!_.node)return!1;let S=v.width,A=_.height||S*.6,I=M-v.x,N=T-v.z,L=Math.hypot(I,N)||1;I/=L,N/=L;let B=Math.sin(w*.25)*.22,Y=I*Math.cos(B)-N*Math.sin(B),ie=I*Math.sin(B)+N*Math.cos(B),k=Math.max(S,A)*1.55;return x.set(v.x,v.y+A*.42,v.z),b.position.set(v.x+Y*k,v.y+A*.55+S*.22,v.z+ie*k),b.fov=38,b.aspect=y,b.near=2,b.far=12e3,b.updateProjectionMatrix(),b.lookAt(x),!0}function d(v){for(let M of r)M.beacon&&(M.beacon.group.userData.hide=!v)}function E(){l=!0;for(let v of r)p(v);for(let v of u)v.dispose();n.remove(i)}return{frame:m,beacons:d,group:i,update:g,events:o,dispose:E,entries:r,current:v=>jT(e,v)}}var Jg="polygon-rush-v3-records",QT=new Set(["rally","rain"]);function Qg(){try{let n=globalThis.localStorage?.getItem(Jg),e=n?JSON.parse(n):null;if(e&&typeof e=="object")return{splits:e.splits||{},total:e.total??null,runs:e.runs||0,finishes:e.finishes||0,pois:Array.isArray(e.pois)?e.pois.filter(t=>typeof t=="string").slice(0,64):[]}}catch{}return{splits:{},total:null,runs:0,finishes:0,pois:[]}}function Ia(n){try{return globalThis.localStorage?.setItem(Jg,JSON.stringify(n)),!0}catch{return!1}}function Nd(n){if(!Number.isFinite(n))return"\u2013";let e=Math.floor(n/60),t=n-e*60;return`${e}'${String(Math.floor(t)).padStart(2,"0")}"${Math.floor(t*10%10)}`}function ex(n){let e=Math.abs(n);return`${n<0?"\u2212":"+"}${e>=60?Nd(e):e.toFixed(1).replace(".",'"')}`}function tx(n,e,t){let i=n.splits[e]??null,s=i===null||t<i;return s&&(n.splits[e]=Math.round(t*1e3)/1e3),{time:t,best:i,delta:i===null?null:t-i,record:s}}function nx(n,e){let t=n.total,i=t===null||e<t;return i&&(n.total=Math.round(e*1e3)/1e3),{time:e,best:t,delta:t===null?null:e-t,record:i}}var ix=QT;function sx(n=document.body){let e=document.createElement("div");e.style.cssText="position:fixed;left:50%;top:13vmin;transform:translateX(-50%);display:none;gap:1.2vmin;z-index:35;font-family:Arial,Helvetica,sans-serif;pointer-events:auto;align-items:stretch";let t=document.createElement("div");t.style.cssText="position:fixed;left:50%;top:11.6vmin;transform:translateX(-50%);width:54vmin;height:0.7vmin;display:none;background:rgba(255,255,255,.18);z-index:35;border-radius:1vmin;overflow:hidden";let i=document.createElement("div");i.style.cssText="height:100%;width:100%;background:#ffd23f;transform-origin:left center",t.appendChild(i),n.append(t,e);let s=[],r=null,o=0,a=0;function l(){e.style.display="none",t.style.display="none",s=[],r=null}function c(f){if(!s.length)return!1;let p=s[Math.max(0,Math.min(s.length-1,f))],g=r;return l(),g?.(p),!0}function h(f,p,g=9){l(),f.length&&(s=f.slice(0,3),r=p,o=a=g,e.textContent="",s.forEach((x,m)=>{let d=document.createElement("button");d.type="button",d.style.cssText=`all:unset;cursor:pointer;width:27vmin;padding:1.1vmin 1.4vmin;border-radius:1vmin;color:#fff;background:rgba(12,18,34,.82);border:0.3vmin solid ${m===0?"#ffd23f":"rgba(255,255,255,.28)"};box-sizing:border-box`;let E=v=>String(v).replace(/[&<>]/g,M=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[M]);d.innerHTML=`<div style="font:bold 2.1vmin Arial;display:flex;gap:1vmin;align-items:center"><span style="background:#ffd23f;color:#111;border-radius:.6vmin;padding:.1vmin .9vmin">${m+1}</span><span>${E(x.icon||"")} ${E(x.name)}</span></div><div style="font:1.55vmin Arial;color:#8ef0a8;margin-top:.7vmin">\u25B2 ${E(x.pro)}</div><div style="font:1.55vmin Arial;color:#ff9a8a;margin-top:.3vmin">\u25BC ${E(x.con)}</div>`,d.addEventListener("click",()=>c(m)),e.appendChild(d)}),e.style.display="flex",t.style.display="block")}function u(f){s.length&&(o-=f,i.style.transform=`scaleX(${Math.max(0,o/a)})`,o<=0&&c(0))}return{show:h,pick:c,update:u,hide:l,get active(){return s.length>0},dispose(){e.remove(),t.remove()}}}var $s={hi:null,lo:null},eA=["body","frame","bubble","headlight","tail","wheelRear","wheelFront","fork","torso","helmet","armR","armL"],tA=[["legR","legL"],["thighR","thighL","shinR","shinL"]];async function Ud(n,e){let t=await n.loadAsync(e),i={},s={};for(let a of t.scene.children)a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.set(1,1,1),i[a.name]=a,a.traverse(l=>{l.isMesh&&l.material?.name&&(s[l.material.name]=l.material)});let r=eA.filter(a=>!i[a]);if(tA.some(a=>a.every(l=>i[l]))||r.push("jambes"),r.length)throw new Error(e+" incomplet : "+r.join(", "));let o=0;return i.armR.traverse(a=>{a.isMesh&&(a.geometry.computeBoundingBox(),o=Math.max(o,a.geometry.boundingBox.max.z))}),{parts:i,mats:s,armLength:o>.1?o/1.01:1}}async function rx(n="assets/"){if($s.lo)return $s;let e=new Do,t=()=>Ud(e,n+"bike_low.glb");return $s.lo=await Ud(e,n+"bike_mid.glb").catch(t),$s.hi=await Ud(e,n+"bike_hi.glb").catch(()=>$s.lo),$s}function ox(n="lo"){return $s[n]||$s.lo}var rn=0,yn=1,ps=2,Na=.32,Da=-.7,dx=.7,ds=[0,-Na,-Da],px=[0,-Na,-dx],ax=.58,nA=.4,Zs=Math.PI*2,oi=class{constructor(e){this.off=e||[0,0,0],this.pos=[],this.groups=[],this.slot=-1,this.gStart=0}setSlot(e){e!==this.slot&&(this.closeGroup(),this.slot=e)}closeGroup(){let e=this.pos.length/3;this.slot>=0&&e>this.gStart&&this.groups.push({start:this.gStart,count:e-this.gStart,materialIndex:this.slot}),this.gStart=e}tri(e,t,i,s){let r=this.off,o=e[0]+r[0],a=e[1]+r[1],l=e[2]+r[2],c=t[0]+r[0],h=t[1]+r[1],u=t[2]+r[2],f=i[0]+r[0],p=i[1]+r[1],g=i[2]+r[2],x=c-o,m=h-a,d=u-l,E=f-o,v=p-a,M=g-l,T=m*M-d*v,b=d*E-x*M,y=x*v-m*E,w=(o+c+f)/3-(s[0]+r[0]),_=(a+h+p)/3-(s[1]+r[1]),S=(l+u+g)/3-(s[2]+r[2]),A=this.pos;T*w+b*_+y*S>=0?A.push(o,a,l,c,h,u,f,p,g):A.push(o,a,l,f,p,g,c,h,u)}quad(e,t,i,s,r){this.tri(e,t,i,r),this.tri(e,i,s,r)}build(){this.closeGroup();let e=new dt;e.setAttribute("position",new rt(this.pos,3)),e.computeVertexNormals();for(let t of this.groups)e.addGroup(t.start,t.count,t.materialIndex);return e}};function iA(n){let e=0,t=0,i=0;for(let r of n)e+=r[0],t+=r[1],i+=r[2];let s=n.length;return[e/s,t/s,i/s]}function sA(n,e){return[(n[0]+e[0])/2,(n[1]+e[1])/2,(n[2]+e[2])/2]}function lx(n,e,t,i){let s=e.length;for(let r=0;r<s;r++)n.tri(t,e[r],e[(r+1)%s],i)}function Ks(n,e,t,i,s){let r=typeof t=="function"?t:()=>t,o=e.length,a=e[0].length,l=e.map(iA);for(let c=0;c<o-1;c++){let h=e[c],u=e[c+1],f=sA(l[c],l[c+1]);for(let p=0;p<a;p++){let g=(p+1)%a;n.setSlot(r(c,p)),n.quad(h[p],h[g],u[g],u[p],f)}}n.setSlot(i),lx(n,e[0],l[0],l[1]),n.setSlot(s),lx(n,e[o-1],l[o-1],l[o-2])}function ri(n,e,t,i,s,r,o){let a=t[0]-e[0],l=t[1]-e[1],c=t[2]-e[2],h=Math.hypot(a,l,c)||1,u=[a/h,l/h,c/h],f=Math.abs(u[1])<.9?[0,1,0]:[1,0,0],p=[u[1]*f[2]-u[2]*f[1],u[2]*f[0]-u[0]*f[2],u[0]*f[1]-u[1]*f[0]],g=Math.hypot(p[0],p[1],p[2]);p=[p[0]/g,p[1]/g,p[2]/g];let x=[p[1]*u[2]-p[2]*u[1],p[2]*u[0]-p[0]*u[2],p[0]*u[1]-p[1]*u[0]],m=(d,E)=>{let v=[];for(let M=0;M<r;M++){let T=Zs*M/r,b=Math.cos(T)*E,y=Math.sin(T)*E;v.push([d[0]+b*p[0]+y*x[0],d[1]+b*p[1]+y*x[1],d[2]+b*p[2]+y*x[2]])}return v};Ks(n,[m(e,i),m(t,s)],o,o,o)}function br(n,e,t,i){n.setSlot(i);let s=(a,l,c)=>[e[0]+a*t[0],e[1]+l*t[1],e[2]+c*t[2]],r=[s(-1,-1,-1),s(1,-1,-1),s(1,1,-1),s(-1,1,-1),s(-1,-1,1),s(1,-1,1),s(1,1,1),s(-1,1,1)],o=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]];for(let a of o)n.tri(r[a[0]],r[a[1]],r[a[2]],e),n.tri(r[a[0]],r[a[2]],r[a[3]],e)}var Jc=3,Ua=4;function rA(n,e,t,i,s,r,o,a,l){return[[0,e,n],[o,t,n],[a,i,n],[l,s,n],[0,r,n],[-l,s,n],[-a,i,n],[-o,t,n]]}function oA(){let n=new oi(ds),t=[[1.02,.76,.755,.74,.72,.71,.02,.03,.02],[.9,.84,.81,.75,.7,.68,.07,.12,.08],[.7,.93,.87,.76,.7,.68,.1,.19,.13],[.45,.97,.9,.68,.58,.56,.12,.23,.16],[.3,.98,.92,.62,.36,.26,.13,.23,.17],[.05,1,.94,.62,.3,.19,.14,.21,.16],[-.2,.99,.93,.66,.32,.21,.13,.19,.13],[-.35,.85,.82,.68,.42,.34,.11,.15,.1],[-.5,.8,.79,.72,.64,.62,.1,.13,.08],[-.75,.9,.87,.8,.72,.7,.09,.12,.07],[-.98,.99,.96,.92,.88,.87,.05,.07,.04],[-1.1,1.02,1.01,1,.99,.985,.01,.015,.01]].map(i=>rA(...i));Ks(n,t,(i,s)=>{let r=s===0||s===7,o=s===1||s===6,a=s===2||s===5;return r?i===7||i===8?yn:rn:o?i>=9?Jc:rn:a?i>=2&&i<=5?Jc:i>=7&&i<=8?yn:rn:i>=3&&i<=6?ps:yn},rn,rn);for(let i of[-1,1])ri(n,[.11*i,.46,-.26],[.1*i,.32,-.7],.04,.03,5,Ua),ri(n,[.14*i,.44,-.3],[.22*i,.42,-.32],.018,.018,4,yn),ri(n,[.1*i,.95,.42],[.27*i,.93,.35],.02,.02,4,yn);return ri(n,[.15,.22,.1],[.17,.3,-.45],.04,.04,5,Ua),ri(n,[.17,.3,-.45],[.2,.52,-.92],.05,.065,6,Ua),ri(n,[.2,.52,-.92],[.205,.535,-.95],.065,.05,6,yn),br(n,[0,.685,-.74],[.06,.012,.16],yn),n.build()}function aA(){let n=new oi(ds),e=(t,i,s,r)=>[[0,i,t],[r,s,t],[0,s-.02,t],[-r,s,t]];return Ks(n,[e(.76,.925,.91,.07),e(.58,1.06,.94,.12),e(.42,1.13,.97,.11)],rn,rn,rn),n.build()}function lA(){let n=new oi(ds);return br(n,[0,.985,-1.085],[.04,.02,.014],rn),n.build()}function cA(){let n=new oi;return ri(n,[0,0,0],[0,0,-.45],.05,.004,6,rn),n.build()}function uA(){let n=new oi(ds);for(let e of[-1,1]){let t=[.062*e,.795,.905];n.setSlot(rn);let i=[[t[0]-.035,t[1]-.012,t[2]+.012],[t[0]+.035,t[1]+.004*e,t[2]-.02],[t[0]+.03,t[1]+.022,t[2]-.03],[t[0]-.03,t[1]+.02,t[2]-.004]];n.quad(i[0],i[1],i[2],i[3],[t[0],t[1],t[2]-.2])}return n.build()}function hA(){let n=new oi(px);for(let i of[-1,1])ri(n,[.085*i,.32,.7],[.085*i,.56,.615],.032,.032,5,yn),ri(n,[.085*i,.56,.615],[.085*i,.88,.5],.024,.024,5,ps),br(n,[.1*i,.33,.74],[.012,.05,.035],Ua);let e=.34,t=[];for(let i of[-.75,-.25,.3,.85,1.25]){let s=.32+Math.cos(i),r=.7+Math.sin(i),o=(a,l)=>[a,.32+l*Math.cos(i),.7+l*Math.sin(i)];t.push([o(-.075,e-.005),o(-.04,e+.03),o(.04,e+.03),o(.075,e-.005)])}return Ks(n,t,rn,rn,rn),n.build()}function cx(n,e){let t=new oi,i=14,s=(o,a)=>{let l=[];for(let c=0;c<i;c++){let h=Zs*c/i;l.push([o,a*Math.cos(h),a*Math.sin(h)])}return l};Ks(t,[[-.62,.215],[-1,.27],[-.8,.305],[0,.32],[.8,.305],[1,.27],[.62,.215]].map(([o,a])=>s(o*n,a)),yn,yn,yn);for(let o of[-1,1]){let a=o*(.62*n+.004),l=[a,0,0],c=[0,0,0],h=10;for(let u=0;u<h;u++){let f=Zs*u/h,p=Zs*(u+1)/h;t.setSlot(u%2?yn:ps),t.tri(l,[a,.215*Math.cos(f),.215*Math.sin(f)],[a,.215*Math.cos(p),.215*Math.sin(p)],c)}if(e){let u=o*(.62*n+.012);t.setSlot(Ua);for(let f=0;f<h;f++){let p=Zs*f/h,g=Zs*(f+1)/h;t.quad([u,.09*Math.cos(p),.09*Math.sin(p)],[u,.16*Math.cos(p),.16*Math.sin(p)],[u,.16*Math.cos(g),.16*Math.sin(g)],[u,.09*Math.cos(g),.09*Math.sin(g)],c)}}}return t.build()}function fA(){let n=new oi,e=[0,.11,.015],t=[.125,.135,.155],i=10,s=6,r=[];for(let o=1;o<s;o++){let a=-Math.PI/2+Math.PI*o/s,l=Math.cos(a),c=[];for(let h=0;h<i;h++){let u=Zs*(h+.5)/i;c.push([e[0]+t[0]*l*Math.cos(u),e[1]+t[1]*Math.sin(a),e[2]+t[2]*l*Math.sin(u)])}r.push(c)}return Ks(n,r,(o,a)=>{let l=Zs*(a+1)/i;return Math.sin(l)>.45&&(o===1||o===2)?yn:Math.abs(Math.cos(l))<.35?ps:rn},yn,rn),n.build()}function La(n,e,t,i){return[[e,n,0],[e*.55,n,t],[-e*.55,n,t],[-e,n,0],[-e*.55,n,-i],[e*.55,n,-i]]}function dA(){let n=new oi,e=[La(-.08,.13,.09,.1),La(.04,.145,.1,.1),La(.22,.185,.11,.11),La(.38,.205,.1,.1),La(.45,.09,.06,.07)];return Ks(n,e,(t,i)=>t===0?ps:t===2&&(i===0||i===2||i===3||i===5)?Jc:rn,yn,yn),Ks(n,[[[.07,.4,-.08],[0,.42,-.06],[-.07,.4,-.08],[0,.39,-.13]],[[.06,.28,-.11],[0,.29,-.09],[-.06,.28,-.11],[0,.27,-.19]],[[.03,.14,-.1],[0,.14,-.09],[-.03,.14,-.1],[0,.14,-.13]]],ps,ps,ps),n.build()}function ux(n){let e=new oi,t=[.09*n,-.09,.5];return ri(e,[0,0,0],t,.058,.048,5,rn),ri(e,t,[0,0,.93],.046,.038,5,rn),br(e,[0,0,.97],[.042,.04,.05],yn),br(e,[0,.015,.02],[.052,.04,.05],Jc),e.build()}function hx(n){let e=new oi,t=[.11*n,-.19,.42],i=[.085*n,-.47,.05];return ri(e,[0,0,0],t,.082,.066,6,rn),ri(e,t,i,.062,.05,5,rn),br(e,[t[0]+.035*n,t[1]-.02,t[2]+.02],[.025,.05,.045],ps),br(e,[i[0],i[1]-.04,i[2]+.04],[.045,.05,.115],yn),e.build()}var Od=null;function pA(){return Od||(Od={body:oA(),bubble:aA(),tail:lA(),flame:cA(),fork:hA(),headlight:uA(),wheelRear:cx(.1,!1),wheelFront:cx(.068,!0),helmet:fA(),torso:dA(),armR:ux(-1),armL:ux(1),legR:hx(-1),legL:hx(1)}),Od}var vi=(n,e,t)=>n<e?e:n>t?t:n,mx=n=>vi(n,0,1),Mr=n=>Number.isFinite(n)?n:0,jc=n=>typeof n=="boolean"?n?1:0:mx(Mr(n));function xi(n,e){return n.name=e,n}function fx(n,e,t,i){let s=new et(n,e);return s.name=t,s.castShadow=i,s.receiveShadow=!1,s}function gx({color:n=14034984,accent:e=16761395,isPlayer:t=!1,detail:i="lo"}={}){let s=pA(),r=ne=>new ot({flatShading:!0,side:Pt,...ne}),o=r({color:new Ne(n),metalness:.35,roughness:.3}),a=r({color:1382173,metalness:.2,roughness:.7}),l=r({color:new Ne(e),metalness:.45,roughness:.35}),c=r({color:15856108,metalness:.15,roughness:.45}),h=r({color:11120312,metalness:.9,roughness:.32}),u=[o,a,l,c,h],f=r({color:792614,metalness:.6,roughness:.08,transparent:!0,opacity:.55,depthWrite:!1}),p=r({color:16777215,emissive:16774358,emissiveIntensity:2.4}),g=r({color:3342336,emissive:16718362,emissiveIntensity:.8}),x=ox(i),m=null;if(x){let ne=(C,Z)=>{let F=x.mats[C].clone();return F.color.set(Z),F};m={Paint:ne("Paint",n),Suit:ne("Suit",n),Accent:ne("Accent",e),Tail:x.mats.Tail.clone()}}function d(ne,C,Z,F,j){if(!x)return fx(C,Z,ne,F);let K=x.parts[ne].clone(!0);return K.name=ne,j&&K.position.set(j[0],j[1],j[2]),K.traverse(ue=>{ue.isMesh&&(ue.material.name==="Number"&&!t&&(ue.visible=!1),ue.material=m[ue.material.name]||ue.material,ue.castShadow=F)}),K}let E=r({color:0,emissive:8382975,emissiveIntensity:1.5,transparent:!0,opacity:.85,depthWrite:!1}),v=xi(new at,"bike"),M=xi(new at,"leanPivot"),T=xi(new at,"pitchPivot");T.position.set(0,Na,Da);let b=xi(new at,"rearWheel");b.add(d("wheelRear",s.wheelRear,u,!0));let y=xi(new at,"chassis"),w=d("body",s.body,u,!0,ds),_=d("bubble",s.bubble,f,!1,ds),S=d("tail",s.tail,g,!1,ds),A=d("headlight",s.headlight,p,!1,ds),I=fx(s.flame,E,"flame",!1);I.position.set(-.187,.435,-.02),I.rotation.x=-.42,I.scale.z=.02,I.visible=!1;let N=xi(new at,"hips");N.position.set(0,ax,nA);let L=xi(new at,"torso"),B=xi(new at,"head");B.position.set(0,.45,.01),B.add(d("helmet",s.helmet,u,!0)),L.add(d("torso",s.torso,u,!0),B);let Y=d("armR",s.armR,u,!0),ie=d("armL",s.armL,u,!0),k=xi(new at,"legR");k.position.set(-.12,-.02,0);let G=!!(x&&x.parts.thighR&&x.parts.shinR&&x.parts.thighL&&x.parts.shinL);G||k.add(d("legR",s.legR,u,!0));let se=xi(new at,"legL");se.position.set(.12,-.02,0),G||se.add(d("legL",s.legL,u,!0));let te=!!(x&&x.parts.forearmR&&x.parts.forearmL),ve=te?d("forearmR",null,null,!0):null,Se=te?d("forearmL",null,null,!0):null;N.add(L,Y,ie,k,se),te&&N.add(ve,Se);let O=G?d("thighR",null,null,!0):null,W=G?d("shinR",null,null,!0):null,X=G?d("thighL",null,null,!0):null,J=G?d("shinL",null,null,!0):null;G&&N.add(O,W,X,J),x&&x.parts.pelvis&&N.add(d("pelvis",null,null,!0)),y.add(w,_,S,A,I,N),x&&y.add(d("frame",null,null,!0,ds));let V=xi(new at,"steerPivot");V.position.set(0,0,dx-Da);let $=d("fork",s.fork,u,!0,px),fe=xi(new at,"frontWheel");if(fe.add(d("wheelFront",s.wheelFront,u,!0)),V.add($,fe),T.add(b,y,V),M.add(T),v.add(M),t){let ne=new vo(16773590,60,60,.5,.6,2);ne.name="headSpot",ne.castShadow=!1,ne.position.set(0,1,.9),ne.target.position.set(0,.2,30),ne.target.name="headSpotTarget",v.add(ne,ne.target)}let ge={lean:0,steer:0,pitch:0,compress:0,sr:0,brake:0,air:0,drift:0,boost:0},Fe=.2,Ge=.37,Q=.02,oe=[.25,.9-Na,.34-Da],Ee=new H,be=new H,Te=new H,Ue=new H,Pe=new H,U=new H(0,0,1),R=.3,re=.31;function _e(ne,C,Z){Ee.set(Fe*Z,Ge,Q).applyEuler(L.rotation),be.set(oe[0]*Z-N.position.x,oe[1]-N.position.y,oe[2]-N.position.z);let F=Math.cos(-N.rotation.z),j=Math.sin(-N.rotation.z),K=be.x*F-be.y*j,ue=be.x*j+be.y*F;be.x=K,be.y=ue,ne.position.copy(Ee),Te.copy(be).sub(Ee);let we=Te.length()||1;if(Te.multiplyScalar(1/we),!C){ne.scale.z=we/(x?x.armLength:1),ne.quaternion.setFromUnitVectors(U,Te);return}let He=Math.max(1,we/(R+re-.004)),We=R*He,Ve=re*He,ee=(We*We-Ve*Ve+we*we)/(2*we),de=Math.sqrt(Math.max(0,We*We-ee*ee));Ue.set(.5*Z,-.87,0),Ue.addScaledVector(Te,-Ue.dot(Te)).normalize(),Pe.copy(Ee).addScaledVector(Te,ee).addScaledVector(Ue,de),ne.scale.z=He,ne.quaternion.setFromUnitVectors(U,Ue.copy(Pe).sub(Ee).normalize()),C.position.copy(Pe),C.scale.z=He,C.quaternion.setFromUnitVectors(U,Ue.copy(be).sub(Pe).normalize())}let pe=.47,me=.44,Be=.12,De=[.205,.495-Na,-.29-Da],Oe=new H,Ye=new H,Ae=new H,ze=new H,xe=new H,ke=new Qe;function P(ne,C,Z,F,j){xe.copy(C).normalize(),ze.set(Z,F,j).addScaledVector(xe,-(Z*xe.x+F*xe.y+j*xe.z)),ze.lengthSq()<1e-8&&ze.set(0,1,0),ze.normalize(),Ae.crossVectors(ze,xe),ne.quaternion.setFromRotationMatrix(ke.makeBasis(Ae,ze,xe))}function q(ne,C,Z,F){Oe.set(Be*Z,-.02,0),be.set(De[0]*Z-N.position.x,De[1]-N.position.y,De[2]-N.position.z);let j=Math.cos(-N.rotation.z),K=Math.sin(-N.rotation.z),ue=be.x*j-be.y*K,we=be.x*K+be.y*j;be.x=ue,be.y=we,Te.copy(be).sub(Oe);let He=Math.min(Te.length()||1,pe+me-.004);Te.normalize();let We=(pe*pe-me*me+He*He)/(2*He),Ve=Math.sqrt(Math.max(0,pe*pe-We*We));Ue.set(F*Z,.25,1),Ue.addScaledVector(Te,-Ue.dot(Te)).normalize(),Ye.copy(Oe).addScaledVector(Te,We).addScaledVector(Ue,Ve),ne.position.copy(Oe),P(ne,Ue.copy(Ye).sub(Oe),0,1,0),C.position.copy(Ye),P(C,Ue.copy(be).sub(Ye),0,.2,1)}function z(ne,C){let Z=ne||{},F=Number.isFinite(C)?vi(C,0,.1):1/60,j=1-Math.exp(-F*14),K=1-Math.exp(-F*5);ge.lean+=(vi(Mr(Z.lean),-1.5,1.5)-ge.lean)*j,ge.steer+=(vi(Mr(Z.steer),-1,1)-ge.steer)*j,ge.pitch+=(vi(Mr(Z.pitch),-.9,.9)-ge.pitch)*j,ge.compress+=(vi(Mr(Z.compress),-1,1)-ge.compress)*j,ge.sr+=(mx(Mr(Z.speedRatio))-ge.sr)*K,ge.brake+=(jc(Z.braking)-ge.brake)*K,ge.air+=(jc(Z.airborne)-ge.air)*K,ge.drift+=(jc(Z.drift)-ge.drift)*K,ge.boost+=(jc(Z.boost)-ge.boost)*K;let ue=ge.lean,we=(Number.isFinite(Z.speed)?Z.speed:ge.sr*80)*3.6;M.rotation.z=ue,T.rotation.x=-ge.pitch,V.rotation.y=-.45*ge.steer*vi(1-2*ge.sr,0,1),y.position.y=-.07*ge.compress;let He=vi((we-20)/100,0,1),We=Le=>Le*Le*(3-2*Le),Ve=We(vi(Math.abs(ue)/.52,0,1)),ee=We(vi((Math.abs(ue)-.17)/.6,0,1)),de=ue>=0?1:-1,le=Ve*(1-vi((we-30)/30,0,1));N.position.x=-.17*Ve*de,N.position.y=ax+.1*ge.air,N.rotation.z=-.2*Ve*de,L.rotation.x=vi(.5+.62*He-.2*ge.brake-.25*ge.air+.08*ge.boost,.2,1.16),L.rotation.z=-.15*Ve*de,L.rotation.y=-.12*Ve*de,B.rotation.x=-.68*He+.1*ge.air,B.rotation.y=-.35*Ve*de,B.rotation.z=-.4*ue;let he=.12*Ve+.5*ee+.3*le;if(k.rotation.y=de>0?-he:0,se.rotation.y=de<0?he:0,G){let Le=1.6*ee+.25*Ve+.8*le;q(O,W,-1,.35+(de<0?Le:0)),q(X,J,1,.35+(de>0?Le:0))}_e(Y,ve,-1),_e(ie,Se,1),(m?m.Tail:g).emissiveIntensity=(m?2:.8)+(m?6:2.2)*ge.brake,I.visible=ge.boost>.03,I.scale.z=.02+1.3*ge.boost,E.emissiveIntensity=1.5+2*ge.boost;let Ce=Mr(Z.wheelSpin);b.rotation.x=Ce,fe.rotation.x=Ce}return z({},0),{group:v,update:z}}var xx=Math.PI*2,ln=6e3,No=2200,vx=60,yx=30,_x=60,mA=3,Oa=2e3,Sr=170,zd=1.5,gA=13,Mx=gA-zd,Fd=120,xA={dust:{life:.9,grav:-1.2,drag:2.2,spread:1.6,lift:[.6,1.8],s0:.35,s1:1.5,a0:.3,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!1},smoke:{life:.8,grav:-.8,drag:1.2,spread:.9,lift:[.5,1.3],s0:.35,s1:1.3,a0:.16,c0:[.89,.9,.92],c1:[.62,.64,.67],add:!1,bounce:!1,ring:!1},spark:{life:.6,grav:18,drag:.25,spread:5.5,lift:[1.5,4.5],s0:.22,s1:.06,a0:1,c0:[1,.88,.4],c1:[1,.48,.1],add:!0,bounce:!0,ring:!1},spray:{life:.6,grav:9,drag:.5,spread:2.2,lift:[1.2,3.2],s0:.25,s1:.9,a0:.22,c0:[.71,.93,.98],c1:[.37,.66,.8],add:!1,bounce:!1,ring:!1},gravel:{life:.7,grav:20,drag:.15,spread:3.2,lift:[1.5,3.5],s0:.08,s1:.06,a0:1,c0:[.29,.26,.22],c1:[.14,.13,.11],add:!1,bounce:!0,ring:!1},boost:{life:.3,grav:-3,drag:3,spread:.8,lift:[0,.5],s0:.55,s1:.12,a0:.9,c0:[.25,.96,1],c1:[1,.25,.78],add:!0,bounce:!1,ring:!1},land:{life:.8,grav:0,drag:4,spread:0,lift:[.4,1],s0:.5,s1:1.8,a0:.32,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!0}},vA=new Ne(16777215),yA=new Ne(8386303);function $n(n,e){return n+(e-n)*Math.random()}function Fa(n,e,t){return n<e?e:n>t?t:n}function js(n,e=0){return Number.isFinite(n)?n:e}function _A(n){return Number.isFinite(n)?Fa(n,0,.1):0}function Bd(n,e){return n-e*Math.floor(n/e+.5)}function MA(){let n=globalThis.innerHeight||900,e=Math.min(globalThis.devicePixelRatio||1,2);return n*e}var bA=`
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
}`,SA=`
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
}`,EA=`
attribute float aAlpha;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,wA=`
uniform vec3 uColor;
varying float vAlpha;
void main() {
  gl_FragColor = vec4(uColor, vAlpha);
}`;function bx(n,e){let t=e||{},i=js(t.rain,0),s=js(t.wind,0),r=new Float32Array(ln*3),o=new Float32Array(ln*3),a=new Float32Array(ln*3),l=new Float32Array(ln*3),c=new Float32Array(ln*3),h=new Float32Array(ln),u=new Float32Array(ln),f=new Float32Array(ln),p=new Float32Array(ln),g=new Float32Array(ln),x=new Float32Array(ln),m=new Float32Array(ln),d=new Float32Array(ln),E=new Float32Array(ln),v=new Float32Array(ln),M=new Float32Array(ln),T=new Uint8Array(ln),b=0,y=!1,w=new dt,_=new _t(r,3).setUsage(zi),S=new _t(c,3).setUsage(zi),A=new _t(h,1).setUsage(zi),I=new _t(u,1).setUsage(zi),N=new _t(f,1).setUsage(zi);w.setAttribute("position",_),w.setAttribute("aColor",S),w.setAttribute("aSize",A),w.setAttribute("aAlpha",I),w.setAttribute("aMode",N);let L=new St({uniforms:{uScale:{value:700}},vertexShader:bA,fragmentShader:SA,transparent:!0,depthWrite:!1,blending:ma,blendSrc:sf,blendDst:ra,blendEquation:Hn}),B=new Ds(w,L);B.frustumCulled=!1,n.add(B);function Y(P,q,z,ne,C,Z,F,j=1){let K=xA[P];if(!K||!Number.isFinite(q)||!Number.isFinite(z)||!Number.isFinite(ne))return;let ue=js(C),we=js(Z),He=js(F),We=Math.min(ln,Math.max(0,Math.floor(js(j,1))));for(let Ve=0;Ve<We;Ve++){let ee=b;b=(b+1)%ln;let de,le,he;if(K.ring){let Le=(We>1?Ve/We:Math.random())*xx+Math.random()*.2,Re=$n(3.5,5.5);de=Math.cos(Le)*Re+ue*.3,he=Math.sin(Le)*Re+He*.3,le=$n(K.lift[0],K.lift[1])+we*.3}else de=ue+$n(-K.spread,K.spread),he=He+$n(-K.spread,K.spread),le=we+$n(K.lift[0],K.lift[1]);let Ce=ee*3;r[Ce]=q+$n(-.1,.1),r[Ce+1]=z,r[Ce+2]=ne+$n(-.1,.1),o[Ce]=de,o[Ce+1]=le,o[Ce+2]=he,p[ee]=0,g[ee]=K.life*$n(.85,1.15),x[ee]=K.drag,m[ee]=K.grav,d[ee]=K.s0*$n(.85,1.2),E[ee]=K.s1*$n(.85,1.2),v[ee]=K.a0,M[ee]=z,T[ee]=K.bounce?1:0,f[ee]=K.add?1:0,a[Ce]=K.c0[0],a[Ce+1]=K.c0[1],a[Ce+2]=K.c0[2],l[Ce]=K.c1[0],l[Ce+1]=K.c1[1],l[Ce+2]=K.c1[2]}We>0&&(y=!0)}function ie(P){let q=!1;for(let z=0;z<ln;z++){if(g[z]<=0)continue;if(q=!0,p[z]+=P,p[z]>=g[z]){g[z]=0,u[z]=0,h[z]=0;continue}let ne=z*3,C=Math.max(0,1-x[z]*P),Z=o[ne]*C,F=o[ne+1]*C-m[z]*P,j=o[ne+2]*C,K=r[ne]+Z*P,ue=r[ne+1]+F*P,we=r[ne+2]+j*P;T[z]&&ue<M[z]&&F<0&&(ue=M[z],F=-F*.35,Z*=.6,j*=.6,T[z]=0),o[ne]=Z,o[ne+1]=F,o[ne+2]=j,r[ne]=K,r[ne+1]=ue,r[ne+2]=we;let He=p[z]/g[z];h[z]=d[z]+(E[z]-d[z])*He,u[z]=v[z]*(1-He*He),c[ne]=a[ne]+(l[ne]-a[ne])*He,c[ne+1]=a[ne+1]+(l[ne+1]-a[ne+1])*He,c[ne+2]=a[ne+2]+(l[ne+2]-a[ne+2])*He}return q}let k=null;if(i>0){let P=new dt,q=new Float32Array(No*6),z=new _t(q,3).setUsage(zi);P.setAttribute("position",z);let ne=new Float32Array(No*3),C=new Float32Array(No),Z=new Float32Array(No);for(let K=0;K<No;K++)ne[K*3]=(Math.random()-.5)*vx,ne[K*3+1]=-12+Math.random()*yx,ne[K*3+2]=(Math.random()-.5)*_x,C[K]=$n(22,30),Z[K]=$n(.8,1.2);let F=new Fi({color:12900095,transparent:!0,opacity:.16,depthWrite:!1}),j=new os(P,F);j.frustumCulled=!1,n.add(j),k={geo:P,mat:F,lines:j,attr:z,pa:q,head:ne,fall:C,len:Z,windX:5.5*s,windZ:2*s}}function G(P,q,z){let ne=k,C=ne.pa,Z=ne.head,F=ne.windX,j=ne.windZ,K=q.x,ue=q.y+mA,we=q.z;for(let He=0;He<No;He++){let We=He*3,Ve=K+Bd(Z[We]-K,vx),ee=ue+Bd(Z[We+1]-ue,yx),de=we+Bd(Z[We+2]-we,_x),le=ne.fall[He],he=F-z.x,Ce=-le-z.y,Le=j-z.z,Re=.05*ne.len[He],qe=He*6;C[qe]=Ve-he*Re,C[qe+1]=ee-Ce*Re,C[qe+2]=de-Le*Re,C[qe+3]=Ve,C[qe+4]=ee,C[qe+5]=de,Z[We]=Ve+F*P,Z[We+1]=ee-le*P,Z[We+2]=de+j*P}ne.attr.needsUpdate=!0}let se=new Float32Array(Oa*4*3),te=new Float32Array(Oa*4),ve=new Uint16Array(Oa*6);for(let P=0;P<Oa;P++){let q=P*4;ve.set([q,q+1,q+2,q,q+2,q+3],P*6)}let Se=new dt,O=new _t(se,3).setUsage(zi),W=new _t(te,1).setUsage(zi);Se.setAttribute("position",O),Se.setAttribute("aAlpha",W),Se.setIndex(new _t(ve,1));let X=new St({uniforms:{uColor:{value:new Ne(1315086)}},vertexShader:EA,fragmentShader:wA,transparent:!0,depthWrite:!1,side:Pt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),J=new et(Se,X);J.frustumCulled=!1,n.add(J);let V=0,$=1/0,fe=-1;function ge(P,q,z,ne,C,Z,F=.3,j=.5){if(![P,q,z,ne,C,Z,F,j].every(Number.isFinite))return;let K=ne-P,ue=Z-z,we=Math.hypot(K,ue);if(we<1e-4)return;let He=F*.5,We=-ue/we*He,Ve=K/we*He,ee=Fa(j,0,1),de=q+.03,le=C+.03,he=V*4;V=(V+1)%Oa;let Ce=se,Le=he*3;Ce[Le]=P+We,Ce[Le+1]=de,Ce[Le+2]=z+Ve,Ce[Le+3]=P-We,Ce[Le+4]=de,Ce[Le+5]=z-Ve,Ce[Le+6]=ne-We,Ce[Le+7]=le,Ce[Le+8]=Z-Ve,Ce[Le+9]=ne+We,Ce[Le+10]=le,Ce[Le+11]=Z+Ve,te[he]=ee,te[he+1]=ee,te[he+2]=ee,te[he+3]=ee,he<$&&($=he),he+3>fe&&(fe=he+3)}function Fe(){if(fe<0)return;let P=$,q=fe-$+1;O.clearUpdateRanges(),O.addUpdateRange(P*3,q*3),O.needsUpdate=!0,W.clearUpdateRanges(),W.addUpdateRange(P,q),W.needsUpdate=!0,$=1/0,fe=-1}let Ge=new at;Ge.matrixAutoUpdate=!1,n.add(Ge);let Q=new Float32Array(Sr*6),oe=new _t(Q,3).setUsage(zi),Ee=new dt;Ee.setAttribute("position",oe);let be=new Float32Array(Sr),Te=new Float32Array(Sr),Ue=new Float32Array(Sr),Pe=new Float32Array(Sr);for(let P=0;P<Sr;P++){let q=Math.random()*xx,z=$n(.8,1.5);be[P]=Math.cos(q)*z,Te[P]=Math.sin(q)*z,Ue[P]=-zd-Math.random()*Mx,Pe[P]=$n(.5,1.2)}let U=new Fi({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),R=new os(Ee,U);R.frustumCulled=!1,R.visible=!1,Ge.add(R);let re=0,_e=0,pe=0,me=0;function Be(P,q){pe+=(re-pe)*(1-Math.exp(-6*P)),me+=(_e-me)*(1-Math.exp(-8*P)),q.updateMatrixWorld(),Ge.matrix.copy(q.matrixWorld),Ge.matrixWorld.copy(q.matrixWorld);let z=Fa((pe-.55)/.45,0,1),ne=Math.min(1,.55*z*z*(3-2*z)+.6*me),C=Math.floor(ne*Sr);if(C<=0){R.visible=!1;return}R.visible=!0,Ee.setDrawRange(0,C*2),U.color.copy(vA).lerp(yA,me),U.opacity=.05+.24*ne;let Z=(60+110*ne)*P,F=1.5+5*ne,j=Q;for(let K=0;K<C;K++){let ue=Ue[K]+Z;ue>-zd&&(ue-=Mx),Ue[K]=ue;let we=-ue,He=be[K]*we*.9,We=Te[K]*we*.5,Ve=F*Pe[K],ee=K*6;j[ee]=He,j[ee+1]=We,j[ee+2]=ue,j[ee+3]=He,j[ee+4]=We,j[ee+5]=ue-Ve}oe.needsUpdate=!0}let De=new H,Oe=new H,Ye=!1,Ae=!1;function ze(P,q){if(Ae)return;P=_A(P);let z=q.position;Ye?P>0&&(Oe.subVectors(z,De).divideScalar(P),Oe.lengthSq()>Fd*Fd&&Oe.setLength(Fd),De.copy(z)):(De.copy(z),Oe.set(0,0,0),Ye=!0);let ne=js(q.fov,60);L.uniforms.uScale.value=MA()/(2*Math.tan(ne*Math.PI/360)),(ie(P)||y)&&(_.needsUpdate=!0,S.needsUpdate=!0,A.needsUpdate=!0,I.needsUpdate=!0,N.needsUpdate=!0,y=!1),k&&P>0&&G(P,z,Oe),Be(P,q),Fe()}function xe(P,q){let z=Fa(js(P,0),0,1.5);re=Fa((z-.7)/.3,0,1),_e=q?1:0}function ke(){Ae||(Ae=!0,n.remove(B,J,Ge),k&&n.remove(k.lines),w.dispose(),L.dispose(),Se.dispose(),X.dispose(),Ee.dispose(),U.dispose(),k&&(k.geo.dispose(),k.mat.dispose()))}return{emit:Y,addSkid:ge,setSpeed:xe,update:ze,dispose:ke}}var Js={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var On=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},TA=new Is(-1,1,1,-1,0,1),kd=class extends dt{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}},AA=new kd,Gi=class{constructor(e){this._mesh=new et(AA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,TA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Uo=class extends On{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof St?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cn.clone(e.uniforms),this.material=new St({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Gi(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ba=class extends On{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Qc=class extends On{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var eu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Je);this._width=i.width,this._height=i.height,t=new tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Uo(Js),this.copyPass.material.blending=cn,this.clock=new oc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ba!==void 0&&(o instanceof Ba?i=!0:o instanceof Qc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Je);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var tu=class extends On{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Sx={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Oo=class n extends On{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Je(e.x,e.y):new Je(256,256),this.clearColor=new Ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new tn(r,o,{type:gn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new tn(r,o,{type:gn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new tn(r,o,{type:gn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Sx;this.highPassUniforms=Cn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new St({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Je(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Js;this.copyUniforms=Cn.clone(h.uniforms),this.blendMaterial=new St({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Oi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ne,this.oldClearAlpha=1,this.basic=new Lt,this.fsQuad=new Gi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Je(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new St({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Je(.5,.5)},direction:{value:new Je(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};Oo.BlurDirectionX=new Je(1,0);Oo.BlurDirectionY=new Je(0,1);var Ex={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var nu=class extends On{constructor(){super();let e=Ex;this.uniforms=Cn.clone(e.uniforms),this.material=new Ql({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Gi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},yt.getTransfer(this._outputColorSpace)===Ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===of?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===af?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===lf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ga?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===cf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===uf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var za={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Je},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Qe},cameraProjectionMatrixInverse:{value:new Qe},cameraWorldMatrix:{value:new Qe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new H(-1,-1,-1)},sceneBoxMax:{value:new H(1,1,1)}},vertexShader:`

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
		}`},ka={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},iu={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function wx(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=RA(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new H(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Ls(s,e,e);return r.wrapS=Nn,r.wrapT=Nn,r.needsUpdate=!0,r}function RA(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var Ha={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Hd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Je},cameraProjectionMatrixInverse:{value:new Qe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Hd(n,e,t){let i=CA(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function CA(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new H(Math.cos(r),Math.sin(r),o))}return i}var su=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,p=c-u,g=e-f,x=t-p,m,d;g>x?(m=1,d=0):(m=0,d=1);let E=g-m+h,v=x-d+h,M=g-1+2*h,T=x-1+2*h,b=l&255,y=c&255,w=this.perm[b+this.perm[y]]%12,_=this.perm[b+m+this.perm[y+d]]%12,S=this.perm[b+1+this.perm[y+1]]%12,A=.5-g*g-x*x;A<0?i=0:(A*=A,i=A*A*this.dot(this.grad3[w],g,x));let I=.5-E*E-v*v;I<0?s=0:(I*=I,s=I*I*this.dot(this.grad3[_],E,v));let N=.5-M*M-T*T;return N<0?r=0:(N*=N,r=N*N*this.dot(this.grad3[S],M,T)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(i+c),p=1/6,g=(h+u+f)*p,x=h-g,m=u-g,d=f-g,E=e-x,v=t-m,M=i-d,T,b,y,w,_,S;E>=v?v>=M?(T=1,b=0,y=0,w=1,_=1,S=0):E>=M?(T=1,b=0,y=0,w=1,_=0,S=1):(T=0,b=0,y=1,w=1,_=0,S=1):v<M?(T=0,b=0,y=1,w=0,_=1,S=1):E<M?(T=0,b=1,y=0,w=0,_=1,S=1):(T=0,b=1,y=0,w=1,_=1,S=0);let A=E-T+p,I=v-b+p,N=M-y+p,L=E-w+2*p,B=v-_+2*p,Y=M-S+2*p,ie=E-1+3*p,k=v-1+3*p,G=M-1+3*p,se=h&255,te=u&255,ve=f&255,Se=this.perm[se+this.perm[te+this.perm[ve]]]%12,O=this.perm[se+T+this.perm[te+b+this.perm[ve+y]]]%12,W=this.perm[se+w+this.perm[te+_+this.perm[ve+S]]]%12,X=this.perm[se+1+this.perm[te+1+this.perm[ve+1]]]%12,J=.6-E*E-v*v-M*M;J<0?s=0:(J*=J,s=J*J*this.dot3(this.grad3[Se],E,v,M));let V=.6-A*A-I*I-N*N;V<0?r=0:(V*=V,r=V*V*this.dot3(this.grad3[O],A,I,N));let $=.6-L*L-B*B-Y*Y;$<0?o=0:($*=$,o=$*$*this.dot3(this.grad3[W],L,B,Y));let fe=.6-ie*ie-k*k-G*G;return fe<0?a=0:(fe*=fe,a=fe*fe*this.dot3(this.grad3[X],ie,k,G)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,p,g,x=(e+t+i+s)*l,m=Math.floor(e+x),d=Math.floor(t+x),E=Math.floor(i+x),v=Math.floor(s+x),M=(m+d+E+v)*c,T=m-M,b=d-M,y=E-M,w=v-M,_=e-T,S=t-b,A=i-y,I=s-w,N=_>S?32:0,L=_>A?16:0,B=S>A?8:0,Y=_>I?4:0,ie=S>I?2:0,k=A>I?1:0,G=N+L+B+Y+ie+k,se=o[G][0]>=3?1:0,te=o[G][1]>=3?1:0,ve=o[G][2]>=3?1:0,Se=o[G][3]>=3?1:0,O=o[G][0]>=2?1:0,W=o[G][1]>=2?1:0,X=o[G][2]>=2?1:0,J=o[G][3]>=2?1:0,V=o[G][0]>=1?1:0,$=o[G][1]>=1?1:0,fe=o[G][2]>=1?1:0,ge=o[G][3]>=1?1:0,Fe=_-se+c,Ge=S-te+c,Q=A-ve+c,oe=I-Se+c,Ee=_-O+2*c,be=S-W+2*c,Te=A-X+2*c,Ue=I-J+2*c,Pe=_-V+3*c,U=S-$+3*c,R=A-fe+3*c,re=I-ge+3*c,_e=_-1+4*c,pe=S-1+4*c,me=A-1+4*c,Be=I-1+4*c,De=m&255,Oe=d&255,Ye=E&255,Ae=v&255,ze=a[De+a[Oe+a[Ye+a[Ae]]]]%32,xe=a[De+se+a[Oe+te+a[Ye+ve+a[Ae+Se]]]]%32,ke=a[De+O+a[Oe+W+a[Ye+X+a[Ae+J]]]]%32,P=a[De+V+a[Oe+$+a[Ye+fe+a[Ae+ge]]]]%32,q=a[De+1+a[Oe+1+a[Ye+1+a[Ae+1]]]]%32,z=.6-_*_-S*S-A*A-I*I;z<0?h=0:(z*=z,h=z*z*this.dot4(r[ze],_,S,A,I));let ne=.6-Fe*Fe-Ge*Ge-Q*Q-oe*oe;ne<0?u=0:(ne*=ne,u=ne*ne*this.dot4(r[xe],Fe,Ge,Q,oe));let C=.6-Ee*Ee-be*be-Te*Te-Ue*Ue;C<0?f=0:(C*=C,f=C*C*this.dot4(r[ke],Ee,be,Te,Ue));let Z=.6-Pe*Pe-U*U-R*R-re*re;Z<0?p=0:(Z*=Z,p=Z*Z*this.dot4(r[P],Pe,U,R,re));let F=.6-_e*_e-pe*pe-me*me-Be*Be;return F<0?g=0:(F*=F,g=F*F*this.dot4(r[q],_e,pe,me,Be)),27*(h+u+f+p+g)}};var Va=class n extends On{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=wx(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new tn(this.width,this.height,{type:gn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new St({defines:Object.assign({},za.defines),uniforms:Cn.clone(za.uniforms),vertexShader:za.vertexShader,fragmentShader:za.fragmentShader,blending:cn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ec,this.normalMaterial.blending=cn,this.pdMaterial=new St({defines:Object.assign({},Ha.defines),uniforms:Cn.clone(Ha.uniforms),vertexShader:Ha.vertexShader,fragmentShader:Ha.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new St({defines:Object.assign({},ka.defines),uniforms:Cn.clone(ka.uniforms),vertexShader:ka.vertexShader,fragmentShader:ka.fragmentShader,blending:cn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new St({uniforms:Cn.clone(Js.uniforms),vertexShader:Js.vertexShader,fragmentShader:Js.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:cc,blendDst:yo,blendEquation:Hn,blendSrcAlpha:lc,blendDstAlpha:yo,blendEquationAlpha:Hn}),this.blendMaterial=new St({uniforms:Cn.clone(iu.uniforms),vertexShader:iu.vertexShader,fragmentShader:iu.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ma,blendSrc:cc,blendDst:yo,blendEquation:Hn,blendSrcAlpha:lc,blendDstAlpha:yo,blendEquationAlpha:Hn}),this.fsQuad=new Gi(null),this.originalClearColor=new Ne,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new uo,this.depthTexture.format=Cs,this.depthTexture.type=Rs,this.normalRenderTarget=new tn(this.width,this.height,{minFilter:sn,magFilter:sn,type:gn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Hd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=cn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=cn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=cn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=cn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=cn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new su,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Ls(s,e,e,Gn,Ci);return r.wrapS=Nn,r.wrapT=Nn,r.needsUpdate=!0,r}};Va.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Tx=58,PA=82,Ax=94,IA=9,LA=20,Rx=4.7,DA=1.95,NA=3,UA=4,OA=5,ru=.6;function Qs(n,e,t){return n<e?e:n>t?t:n}function Ht(n,e=0){return Number.isFinite(n)?n:e}function FA(n,e,t){return n+(e-n)*t}function Fo(n,e){return 1-Math.exp(-n*e)}function BA(n){return Number.isFinite(n)?Qs(n,0,.1):0}function Cx(n){let e=new H,t=new H,i=new H,s=new H,r={x:1,z:0},o=!1,a=0,l=0,c=0,h=Tx,u=Rx,f=0,p=0,g=0;function x(T,b){let y=Ht(T.x),w=Ht(T.y),_=Ht(T.z),S=Ht(T.heading)+Ht(T.yaw),A=Math.sin(S),I=Math.cos(S),N=-I,L=A;r.x=N,r.z=L;let B=T.airborne?1:0,Y=b*b,ie=Rx-.3*Y+.9*B,k=DA-.15*Y+.7*B;u=ie;let G=Qs(Ht(T.slope),-.15,.15),se=Qs(Ht(T.lean),-1.5,1.5),te=0;e.set(y-A*ie+N*te,w+k-G*ie,_-I*ie+L*te),e.y<w+ru&&(e.y=w+ru),t.set(y+A*8.5,w+.55+G*4-1.5*B,_+I*8)}function m(T){return FA(Tx,PA,Math.pow(T,1.6))}function d(T,b,y,w){n.position.set(i.x+r.x*b,Math.max(i.y+y,w),i.z+r.z*b),n.lookAt(s),n.rotateZ(T)}function E(T,b){if(T=BA(T),!o){v(b);return}a+=T;let y=Qs(Ht(b.speedRatio),0,1);x(b,y);let w=Ht(b.x)-f,_=Ht(b.y)-p,S=Ht(b.z)-g;w*w+_*_+S*S<400&&(i.x+=w,i.y+=_,i.z+=S,s.x+=w,s.y+=_,s.z+=S),f=Ht(b.x),p=Ht(b.y),g=Ht(b.z),i.lerp(e,Fo(IA,T));let A=i.x-Ht(b.x),I=i.z-Ht(b.z),N=Math.hypot(A,I);N>.001&&(i.x=Ht(b.x)+A/N*u,i.z=Ht(b.z)+I/N*u),s.lerp(t,Fo(LA,T));let L=Ht(b.y)+ru;i.y<L&&(i.y=L),c*=Math.exp(-OA*T);let B=y*y*y*2.2,Y=Math.sin(a*61.3)*.6+Math.sin(a*97.1+1.7)*.4,ie=Math.sin(a*73.9+.4)*.6+Math.sin(a*113.7+2.9)*.4,k=Math.sin(a*67.8+1.1)*.6+Math.sin(a*121.4+.3)*.4,G=c*.35+B*.01,se=Y*G,te=ie*G,ve=k*(c*.03+B*.002);l+=((b.boosting?1:0)-l)*Fo(UA,T);let Se=m(y),O=Se+(Ax-Se)*l;h+=(O-h)*Fo(NA,T),Math.abs(n.fov-h)>1e-4&&(n.fov=h,n.updateProjectionMatrix()),d(ve,se,te,L)}function v(T){let b=Qs(Ht(T.speedRatio),0,1);x(T,b),i.copy(e),s.copy(t),f=Ht(T.x),p=Ht(T.y),g=Ht(T.z),o=!0,a=0,c=0,l=T.boosting?1:0,h=m(b)+(Ax-m(b))*l,n.fov=h,n.updateProjectionMatrix(),d(0,0,0,Ht(T.y)+ru)}function M(T){c=Qs(c+Ht(T),0,1.5)}return{update:E,shake:M,snap:v}}var zA=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,kA=`
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
}`;function Px(n,e,t,i,s={}){let r=i||{},o=Ht(r.bloom,.5),a=null,l=null,c=null,h=null,u=0,f=0,p=0,g=0,x=0,m=Math.min(globalThis.devicePixelRatio||1,2);try{let b=n.getSize(new Je),y=new tn(Math.max(1,b.x),Math.max(1,b.y),{type:gn,samples:4});if(a=new eu(n,y),a.setPixelRatio(m),a.addPass(new tu(e,t)),s.ao&&!r.night){h=new Va(e,t,Math.max(1,b.x),Math.max(1,b.y)),h.updateGtaoMaterial({radius:3.2,distanceExponent:1.4,thickness:4,scale:1.15,samples:12,screenSpaceRadius:!1}),h.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),h.blendIntensity=.6;let w=h.overrideVisibility.bind(h);h.overrideVisibility=()=>{w(),e.traverse(_=>{let S=Array.isArray(_.material)?_.material[0]:_.material;(_.isSprite||S&&(S.depthWrite===!1||S.blending===Oi))&&(_.visible=!1)})},a.addPass(h)}l=new Oo(new Je(512,512),o*.8,.75,.9),a.addPass(l),c=new Uo({uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uBoost:{value:0},uTime:{value:0}},vertexShader:zA,fragmentShader:kA}),a.addPass(c),a.addPass(new nu)}catch(b){console.warn("Post-traitement indisponible, rendu direct :",b),a=null,l=null,c=null}function d(b,y){!Number.isFinite(b)||!Number.isFinite(y)||b<=0||y<=0||(m=Math.min(globalThis.devicePixelRatio||1,2),n.setPixelRatio(m),n.setSize(b,y),a&&(a.setPixelRatio(m),a.setSize(b,y)))}function E(b,y){u=Qs(Ht(b,0),0,1),f=y?1:0}function v(b){if(b=Number.isFinite(b)?Qs(b,0,.1):0,x+=b,p+=(u-p)*Fo(8,b),g+=(f-g)*Fo(8,b),c&&(c.uniforms.uSpeed.value=p,c.uniforms.uBoost.value=g,c.uniforms.uTime.value=x),a)try{a.render(b);return}catch(y){console.warn("\xC9chec du post-traitement, rendu direct :",y),a=null}n.render(e,t)}function M(b){h&&(h.enabled=!!b)}function T(){h&&h.dispose&&h.dispose(),a&&a.dispose(),l&&l.dispose&&l.dispose(),c&&c.dispose&&c.dispose(),a=null}return{render:v,setSize:d,setSpeed:E,dispose:T,setAO:M,get hasAO(){return!!h},get aoOn(){return!!h&&h.enabled}}}function Ix(n){if(!Number.isFinite(n))return`--'--"---`;let e=Math.floor(n/60),t=Math.floor(n%60),i=Math.floor(n*1e3%1e3);return`${String(e).padStart(2,"0")}'${String(t).padStart(2,"0")}"${String(i).padStart(3,"0")}`}var xt=(n,e,t,i)=>{let s=document.createElement(n);return e&&(s.className=e),i!=null&&(s.textContent=i),t?.appendChild(s),s};function Lx(n){let e=xt("div","h2-root",n);e.hidden=!0;let t=xt("div","h2-pos",e),i=xt("span","h2-pos-num",t,"1"),s=xt("span","h2-pos-tot",t,"/8");xt("span","h2-pos-lbl",t,"POS");let r=xt("div","h2-right",e),o=xt("div","h2-pill h2-lap",r),a=xt("span","h2-lap-lbl",o,"TOUR"),l=xt("span","h2-lap-num",o,"1"),c=xt("span","h2-lap-tot",o,"/3"),h=xt("div","h2-pill h2-time",r,`00'00"000`),u=xt("div","h2-best",r,""),f=xt("canvas","h2-map",e),p=220;f.width=f.height=p;let g=f.getContext("2d"),x=document.createElement("canvas");x.width=x.height=p;let m=null,d=1,E=0,v=0,M=xt("div","h2-dial",e),T=xt("canvas","h2-dial-canvas",M),b=300;T.width=T.height=b;let y=T.getContext("2d"),w=xt("div","h2-gear",M,"1"),_=xt("div","h2-speed",M,"0");xt("div","h2-unit",M,"km/h");let S=xt("div","h2-boost",M),A=[],I=xt("div","h2-item",e),N=xt("span","h2-item-icon",I,""),L=xt("span","h2-item-name",I,"");xt("span","h2-item-key",I,"E");let B=null,Y=null,ie=["\u{1F680}","\u{1F3AF}","\u{1F6E2}","\u{1F6E1}","\u26A1"];function k(xe){let ke=xe?xe.id:"";if(Y===ke)return;if(Y=ke,clearInterval(B),I.classList.toggle("h2-has",!!xe),!xe){N.textContent="",L.textContent="";return}let P=0;L.textContent="",N.textContent=ie[0],B=setInterval(()=>{if(++P>6){clearInterval(B),N.textContent=xe.icon,L.textContent=xe.name.toUpperCase();return}N.textContent=ie[P%ie.length]},70)}let G=xt("div","h2-xp",e),se=xt("span","h2-xp-lbl",G,"NIV 1"),te=xt("span","h2-xp-bar",G),ve=xt("span","h2-xp-fill",te),Se="";function O(xe){let ke=xe.xpNeed>0,P=ke?xe.level+":"+xe.xp+":"+xe.xpNeed:"";if(P===Se)return;let q=ke&&Se&&Number(Se.split(":")[0])<xe.level;Se=P,G.hidden=!ke,ke&&(se.textContent="NIV "+xe.level,ve.style.transform=`scaleX(${Math.min(1,xe.xp/xe.xpNeed)})`,q&&(G.classList.remove("h2-up"),G.offsetWidth,G.classList.add("h2-up")))}let W=xt("div","h2-poi",e);W.hidden=!0;let X=xt("div","h2-poi-live",W),J=xt("img","h2-poi-img",X);J.alt="";let V=xt("div","h2-poi-txt",W),$=xt("div","h2-poi-tag",V,"LIEU REMARQUABLE"),fe=xt("div","h2-poi-name",V,""),ge=xt("div","h2-poi-blurb",V,""),Fe=xt("div","h2-poi-dist",V,""),Ge=xt("div","h2-poi-stamp",W,"CARTE POSTALE \u2713"),Q="",oe="";function Ee(xe){if(!xe){oe&&(oe="",Q="",W.hidden=!0);return}oe!==xe.id&&(oe=xe.id,W.hidden=!1,J.src=xe.thumb,fe.textContent=xe.name.toUpperCase(),ge.textContent=xe.blurb,W.classList.remove("h2-in"),W.offsetWidth,W.classList.add("h2-in"));let ke=Math.max(0,Math.round(xe.ahead/100)*100),P=ke+":"+xe.side+":"+(xe.seen?1:0)+":"+(xe.fresh?1:0);if(P===Q)return;Q=P,$.textContent=xe.place.toUpperCase()+(xe.seen&&!xe.fresh?" \xB7 D\xC9J\xC0 AU CARNET":"");let q=xe.side>0?"\xE0 droite \u25B6":"\u25C0 \xE0 gauche";Fe.textContent=xe.ahead>60?`${ke>=1e3?(ke/1e3).toFixed(1).replace(".",",")+" km":ke+" m"} \xB7 ${q}`:q,W.classList.toggle("h2-got",!!xe.fresh),W.classList.toggle("h2-poi-right",xe.side<0),Ge.hidden=!xe.fresh}let be=xt("div","h2-count",e,""),Te=xt("div","h2-flash",e,""),Ue=xt("div","h2-wrong",e,"CONTRESENS");Ue.hidden=!0;let Pe={},U=(xe,ke,P)=>{Pe[xe]!==P&&(Pe[xe]=P,ke.textContent=P)},R=Math.PI*.75,re=Math.PI*2.25,_e=-1;function pe(xe){let ke=Math.round(xe*120)/120;if(ke===_e)return;_e=ke;let P=b/2,q=b*.44;y.clearRect(0,0,b,b),y.lineCap="butt",y.beginPath(),y.arc(P,P,q*1.05,0,Math.PI*2),y.fillStyle="rgba(8, 10, 16, 0.42)",y.fill();let z=(Z,F,j,K)=>{y.beginPath(),y.arc(P,P,q,Z,F),y.strokeStyle=j,y.lineWidth=K,y.stroke()},ne=R+(re-R)*.86;z(R,ne,"rgba(255,255,255,0.28)",b*.05),z(ne,re,"rgba(226,40,48,0.55)",b*.05);let C=R+(re-R)*Math.min(1,Math.max(0,ke));z(R,Math.min(C,ne),"#ffffff",b*.05),C>ne&&z(ne,C,"#e8242e",b*.05);for(let Z=0;Z<=8;Z++){let F=R+(re-R)*Z/8;y.beginPath(),y.moveTo(P+Math.cos(F)*q*.8,P+Math.sin(F)*q*.8),y.lineTo(P+Math.cos(F)*q*.9,P+Math.sin(F)*q*.9),y.strokeStyle=Z>=7?"#e8242e":"rgba(255,255,255,0.75)",y.lineWidth=3,y.stroke()}y.beginPath(),y.moveTo(P+Math.cos(C)*q*.3,P+Math.sin(C)*q*.3),y.lineTo(P+Math.cos(C)*q*.98,P+Math.sin(C)*q*.98),y.strokeStyle="#ffffff",y.lineWidth=4,y.stroke()}pe(0);let me=[];function Be(xe){m=xe;let ke=xe.bounds,P=ke.maxX-ke.minX,q=ke.maxZ-ke.minZ;d=(p-36)/Math.max(P,q),E=(p-P*d)/2-ke.minX*d,v=(p-q*d)/2-ke.minZ*d;let z=x.getContext("2d");z.clearRect(0,0,p,p);let ne=()=>{z.beginPath(),xe.pts.forEach((C,Z)=>{let F=C.x*d+E,j=C.z*d+v;Z?z.lineTo(F,j):z.moveTo(F,j)}),xe.open||z.closePath()};z.lineJoin="round",ne(),z.strokeStyle="rgba(0,0,0,0.45)",z.lineWidth=9,z.stroke(),ne(),z.strokeStyle="#ffffff",z.lineWidth=5,z.stroke(),ne(),z.strokeStyle="rgba(20,24,34,0.9)",z.lineWidth=2,z.stroke();for(let C of me){let Z=xe.pts[Math.max(0,Math.min(xe.pts.length-1,Math.round(C.view/xe.step)))];if(!Z)continue;let F=Z.x*d+E,j=Z.z*d+v;z.beginPath(),z.moveTo(F,j-5),z.lineTo(F+4,j),z.lineTo(F,j+5),z.lineTo(F-4,j),z.closePath(),z.fillStyle="#ffd23f",z.fill(),z.lineWidth=1,z.strokeStyle="rgba(0,0,0,0.7)",z.stroke()}g.clearRect(0,0,p,p),g.drawImage(x,0,0)}function De(xe){if(!m)return;g.clearRect(0,0,p,p),g.drawImage(x,0,0);let ke=m.pts.length,P=(q,z)=>{let ne=Math.floor((q.s%m.length+m.length)%m.length/m.step);ne>=ke&&(ne=ke-1);let C=m.pts[ne],Z=C.x*d+E,F=C.z*d+v;g.beginPath(),g.arc(Z,F,z?6:3.6,0,Math.PI*2),g.fillStyle=z?"#e8242e":"#ffffff",g.fill(),g.lineWidth=1.5,g.strokeStyle="rgba(0,0,0,0.6)",g.stroke()};for(let q of xe)q.isPlayer||P(q,!1);for(let q of xe)q.isPlayer&&P(q,!0)}let Oe=null;function Ye(xe){U("pos",i,String(xe.position)),U("tot",s,"/"+xe.total),U("lap",l,String(xe.lap)),U("laps",c,"/"+xe.laps),U("time",h,Ix(xe.time)),U("best",u,xe.bestLap?"MEILLEUR "+Ix(xe.bestLap):""),U("speed",_,String(Math.round(xe.speedKmh))),U("gear",w,String(xe.gear||1)),pe(xe.rpm??Math.min(1,xe.speedKmh/290));let ke=xe.boostCharges|0,P=xe.boostT>0?1:0,q=ke+":"+P;if(Pe.boost!==q){for(Pe.boost=q;A.length<ke+P;)A.push(xt("span","h2-boost-dot",S));A.forEach((z,ne)=>{z.hidden=ne>=ke+P,z.classList.toggle("h2-on",P&&ne===ke)})}if(xe.countdown===null||xe.countdown===void 0)Oe===null&&Pe.count!==""&&(Pe.count="",be.textContent="",be.classList.remove("h2-show"));else if(xe.countdown>0){let z=String(Math.ceil(xe.countdown));Pe.count!==z&&(Pe.count=z,be.textContent=z,be.classList.remove("h2-show"),be.offsetWidth,be.classList.add("h2-show"))}else Pe.count!=="GO !"&&(Pe.count="GO !",be.textContent="GO !",be.classList.remove("h2-show"),be.offsetWidth,be.classList.add("h2-show"),clearTimeout(Oe),Oe=setTimeout(()=>{Oe=null},800));k(xe.item||null),Ee(xe.poi||null),O(xe),I.classList.toggle("h2-shield",(xe.shieldT||0)>0),Ue.hidden===!!xe.wrongWay&&(Ue.hidden=!xe.wrongWay)}let Ae=null;function ze(xe,ke=900){Te.textContent=xe,Te.classList.remove("h2-show"),Te.offsetWidth,Te.classList.add("h2-show"),clearTimeout(Ae),Ae=setTimeout(()=>Te.classList.remove("h2-show"),ke)}return{show(){e.hidden=!1},hide(){e.hidden=!0},update:Ye,setTrack:Be,updateMinimap:De,flash:ze,setPois(xe){me=Array.isArray(xe)?xe:[]},poiViewRect(){return e.hidden||W.hidden?null:X.getBoundingClientRect()},setPoiLive(xe){J.hidden!==!!xe&&(J.hidden=!!xe)},setLapLabel(xe){a.textContent!==xe&&(a.textContent=xe)},dispose(){e.remove()}}}var jC=mr.maxSpeed*3.6;var Dx=360;var Nx=n=>(n<10?"0":"")+n;function Vd(n){if(n==null||!Number.isFinite(n))return"--:--.--";let e=Math.max(0,Math.floor(n*100+1e-6)),t=Math.floor(e/6e3),i=Math.floor(e/100)%60;return`${t}:${Nx(i)}.${Nx(e%100)}`}var JC=`
  <div class="pr-pos"><span class="pr-pos-cur">-</span><span class="pr-pos-sep">/</span><span class="pr-pos-tot">-</span></div>
  <div class="pr-wrong">Sens interdit</div>
  <div class="pr-timing">
    <div class="pr-lap">Tour -/-</div>
    <div class="pr-time">0:00.00</div>
    <div class="pr-best">Meilleur <span class="pr-best-v">--:--.--</span></div>
  </div>
  <div class="pr-left">
    <div class="pr-mm-wrap"><canvas class="pr-minimap" width="${Dx}" height="${Dx}"></canvas></div>
    <div class="pr-boosts"><span class="pr-boost-lbl">Boost</span><div class="pr-dias"></div></div>
  </div>
  <div class="pr-speed">
    <div class="pr-speed-num">0</div>
    <div class="pr-speed-unit">km/h</div>
    <div class="pr-bar"></div>
  </div>
  <div class="pr-count"></div>
  <div class="pr-flash"></div>
`;var Ux="ABCDEFGHJKMNPQRSTUVWXYZ23456789",Ox=0;function Gd(){Ox++;let n=ni((Date.now()^Math.imul(Ox,2654435761))>>>0),e="RUSH-";for(let t=0;t<4;t++)e+=Ux[n.int(0,Ux.length-1)];return e}var vt=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Fx(n){return n?typeof n=="string"?zs[n]?.name||n:n.name||zs[n.id]?.name||"":""}function HA(n){return n&&typeof n=="object"?n:gr.find(e=>e.id===n)||{id:String(n),name:String(n),icon:"\u2022"}}function Wd(n){let e=new Map;for(let i of n||[]){let s=HA(i),r=e.get(s.id);r?r.n++:e.set(s.id,{info:s,n:1})}if(!e.size)return'<span class="pr-own-none">Aucune pour l\u2019instant</span>';let t="";for(let{info:i,n:s}of e.values())t+=`<span class="pr-own">${vt(i.icon)} ${vt(i.name)}${s>1?` \xD7${s}`:""}</span>`;return t}function Xd(n){return(n||[]).map((e,t)=>`<li class="pr-srow${e.isPlayer?" pr-me":""}" style="--i:${t}"><span class="pr-rk">${t+1}</span><span class="pr-rn">${vt(e.name)}</span><span class="pr-rp">${e.points??0}<small> pts</small></span></li>`).join("")}function Bx(n){let e=document.createElement("div");e.className="pr-menu pr-off",n.appendChild(e);let t=null,i=null;function s(v){try{t&&typeof t.play=="function"&&t.play(v)}catch{}}function r(v,M){let T=i;if(!T||!T.items.length)return;let b=T.items.length,y=(v%b+b)%b,w=y!==T.index;T.index=y,T.focused=!0;for(let _=0;_<b;_++)T.items[_].classList.toggle("pr-sel",_===y);try{T.items[y].focus({preventScroll:!0})}catch{}w&&M&&s("select")}function o(v){let M=i;M&&(i=null,e.innerHTML="",e.classList.add("pr-off"),s("confirm"),M.resolve(v))}function a(v){return i=null,e.innerHTML=v.html,e.classList.remove("pr-off"),new Promise(M=>{i={items:Array.from(e.querySelectorAll("[data-nav]")),index:0,focused:!1,actions:v.actions||{},resolve:M},v.onMount&&v.onMount(e,o),r(v.initial||0,!1)})}e.addEventListener("click",v=>{let M=i;if(!M||!(v.target instanceof Element))return;let T=v.target.closest("[data-act]");if(!T||!e.contains(T)||T.disabled)return;let b=M.items.indexOf(T);b>=0&&b!==M.index&&r(b,!1);let y=M.actions[T.dataset.act];y&&y(T,o)}),e.addEventListener("mouseover",v=>{let M=i;if(!M||!(v.target instanceof Element))return;let T=v.target.closest("[data-nav]");if(!T)return;let b=M.items.indexOf(T);b>=0&&b!==M.index&&r(b,!0)}),window.addEventListener("keydown",v=>{let M=i;if(!M)return;let T=v.target,b=!!T&&T.tagName==="INPUT",y=v.key||"",w=y.toLowerCase();if(y==="ArrowUp"||!b&&(y==="ArrowLeft"||w==="z"||w==="q")){v.preventDefault(),r(M.index-1,!0);return}if(y==="ArrowDown"||!b&&(y==="ArrowRight"||w==="s"||w==="d")){v.preventDefault(),r(M.index+1,!0);return}if(b){if(y==="Enter"){v.preventDefault();let _=e.querySelector("[data-main]");_&&_.click()}return}if(y.length===1){let _=M.items.find(S=>S.dataset.key===y);_&&(v.preventDefault(),_.click())}});function l({dailySeed:v,meta:M,route:T=null,records:b=null}={}){let y=M||{};if(T)return f(T,y,b||{});let w=String(v||"RUSH-DAILY").toUpperCase(),_=Gd();return a({initial:2,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">Arcade \xB7 Proc\xE9dural \xB7 Roguelite</p>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-seed-in">Seed du run</label>
    <div class="pr-seedbox">
      <input id="pr-seed-in" class="pr-input" type="text" value="${vt(_)}" maxlength="16" autocomplete="off" spellcheck="false" data-nav data-seed>
      <button type="button" class="pr-btn pr-btn-ico" data-nav data-act="dice" title="Nouvelle seed al\xE9atoire" aria-label="Nouvelle seed al\xE9atoire">\u{1F3B2}</button>
    </div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="launch">Lancer le run</button>
    <button type="button" class="pr-btn" data-nav data-act="daily">D\xE9fi du jour<small>${vt(w)}</small></button>
  </div>
  <div class="pr-stats pr-slide" style="--i:4">
    <div><b>${y.runs??0}</b><span>runs</span></div>
    <div><b>${y.wins??0}</b><span>victoires</span></div>
    <div><b>${y.bestPoints??0}</b><span>record de points</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage \xB7 E objet</p>
</section>`,actions:{dice:S=>{let A=S.closest(".pr-screen").querySelector("[data-seed]");A&&(A.value=Gd())},launch:(S,A)=>{let I=S.closest(".pr-screen").querySelector("[data-seed]"),N=(I?I.value:"").trim().toUpperCase();N||(N=Gd()),A({seed:N})},daily:(S,A)=>A({seed:w})}})}let c=v=>`${Math.floor(v/60)}'${String(Math.floor(v%60)).padStart(2,"0")}"`,h=v=>v==null?"":` <small>${v<0?"\u2212":"+"}${Math.abs(v).toFixed(1)} s</small>`;function u(v){if(!v)return"";let M='<li style="display:flex;justify-content:space-between;gap:1.5em">',T=v.splits.map((y,w)=>`${M}<span>${w+1} \xB7 ${vt(y.name.split(" \xB7 ")[0])}</span><b>${vt(c(y.time))}${h(y.delta)}${y.record&&y.best!==null?" \u2605":""}</b></li>`).join(""),b;return v.total?v.total.best===null?b=`Temps total <b>${vt(c(v.time))}</b> \xB7 premier chrono enregistr\xE9`:v.total.record?b=`Temps total <b>${vt(c(v.time))}</b> \xB7 <b>nouveau record</b>${h(v.total.delta)}`:b=`Temps total <b>${vt(c(v.time))}</b> \xB7 record ${vt(c(v.total.best))}${h(v.total.delta)}`:b=`Temps <b>${vt(c(v.time))}</b> \xB7 le record de l'itin\xE9raire ne compte que depuis Catane`,`<p class="pr-sub">${b}</p><ul style="list-style:none;margin:.6em 0;padding:0;display:grid;gap:.25em;font-size:.82em;text-align:left">${T}</ul>`}function f(v,M,T){let b=Object.keys(T.splits||{}).length,y=(v.stages.reduce((_,S)=>_+S.length,0)/1e3).toFixed(0),w=v.stages.map((_,S)=>`<option value="${S+1}">${S+1} \xB7 ${vt(_.subtitle)}</option>`).join("");return a({initial:1,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">${vt(v.title)} \xB7 ${vt(v.roads)} \xB7 ${y} km d'une traite</p>
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
    <div><b>${T.total?vt(c(T.total)):"\u2013"}</b><span>record Catania \u2192 Falcone</span></div>
    <div><b>${T.finishes??0}</b><span>arriv\xE9es</span></div>
    <div><b>${b}</b><span>chronos de tron\xE7on</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage \xB7 E objet \xB7 1 2 3 am\xE9lioration aux relais</p>
</section>`,actions:{launch:(_,S)=>{let A=_.closest(".pr-screen").querySelector("[data-from]");S({seed:"A18-A20",stage:Number(A?A.value:1)||1})},multi:(_,S)=>S({multi:!0})}})}function p({stage:v={},index:M=1,total:T=1,standings:b=[],weather:y}={}){let w=Fx(y)||Fx(v.weather),_=v.laps??0;return a({initial:0,html:`
<section class="pr-screen pr-stage">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in pr-stage-main">
    <div class="pr-kicker">${v.real?"Itin\xE9raire r\xE9el":`\xC9tape ${vt(M)}/${vt(T)}`}</div>
    <h2 class="pr-h2">${vt(v.name)}</h2>
    <p class="pr-sub">${vt(v.subtitle)}</p>
    <dl class="pr-facts">
      <div><dt>M\xE9t\xE9o</dt><dd>${vt(w)}</dd></div>
      ${v.real?`<div><dt>Tron\xE7ons</dt><dd>${v.real.length} encha\xEEn\xE9s sans arr\xEAt</dd></div>
      <div><dt>D\xE9part</dt><dd>${vt(v.real[0].subtitle.split(" \xB7 ")[0])}</dd></div>`:`<div><dt>Tours</dt><dd>${vt(_)} ${_>1?"tours":"tour"}</dd></div>
      <div><dt>Seed du circuit</dt><dd>${vt(v.trackSeed)}</dd></div>`}
    </dl>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="go">D\xE9part</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${Xd(b)}</ol>
  </div></div>
</section>`,actions:{go:(S,A)=>A(void 0)}})}function g({results:v=[],standings:M=[],stage:T={}}={}){let y=[...v].sort((w,_)=>(w.position??99)-(_.position??99)).map((w,_)=>{let S=mc[(w.position??0)-1]??0;return`<tr class="pr-tr${w.isPlayer?" pr-me":""}" style="--i:${_}"><td class="pr-c-pos">${vt(w.position??"")}</td><td class="pr-c-name">${vt(w.name)}</td><td class="pr-c-tm">${w.time==null?"Abandon":Vd(w.time)}</td><td class="pr-c-best">${w.bestLap==null?"\u2014":Vd(w.bestLap)}</td><td class="pr-c-pts">${S>0?"+"+S:"0"}</td></tr>`}).join("");return a({initial:0,html:`
<section class="pr-screen pr-results">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-kicker">R\xE9sultats \xB7 ${vt(T.name)}</div>
    <table class="pr-table">
      <thead><tr><th>Pos</th><th>Pilote</th><th>Temps</th><th>Meilleur tour</th><th>Pts</th></tr></thead>
      <tbody>${y}</tbody>
    </table>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="next">Continuer</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${Xd(M)}</ol>
  </div></div>
</section>`,actions:{next:(w,_)=>_(void 0)}})}function x({choices:v=[],index:M=1,total:T=1,owned:b=[]}={}){let y=v.map((w,_)=>`<button type="button" class="pr-card pr-slide" style="--i:${_}" data-nav data-key="${_+1}" data-act="pick" data-id="${vt(w.id)}"><span class="pr-card-in"><span class="pr-card-key">${_+1}</span><span class="pr-card-ico" aria-hidden="true">${vt(w.icon)}</span><span class="pr-card-name">${vt(w.name)}</span><span class="pr-card-tag">${vt(w.tagline)}</span><span class="pr-card-pro">\u25B2 ${vt(w.pro)}</span><span class="pr-card-con">\u25BC ${vt(w.con)}</span></span></button>`).join("");return a({initial:0,html:`
<section class="pr-screen pr-upg">
  <div class="pr-kicker pr-slide" style="--i:0">\xC9tape ${vt(M)}/${vt(T)} accomplie</div>
  <h2 class="pr-h2 pr-slide" style="--i:0">Choisissez une am\xE9lioration</h2>
  <div class="pr-cards">${y}</div>
  <div class="pr-owned pr-slide" style="--i:3"><span class="pr-owned-lbl">D\xE9j\xE0 poss\xE9d\xE9es</span>${Wd(b)}</div>
</section>`,actions:{pick:(w,_)=>_(w.dataset.id)}})}function m({standings:v=[],playerPosition:M,run:T={},meta:b}={}){let y=b||{},w=M??v.findIndex(A=>A.isPlayer)+1,_=w===1,S=T.real?_?"Victoire !":`${vt(w)}e \xE0 l'arriv\xE9e`:_?"Champion !":`${vt(w)}e au championnat`;return a({initial:T.real?0:1,html:`
<section class="pr-screen pr-end">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-end-title${_?" pr-gold":""}">${S}</div>
    <ol class="pr-slist pr-slist-big">${Xd(v)}</ol>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    ${T.real?`<h3 class="pr-h3">${vt(T.stages[0].name)}</h3>
    <p class="pr-sub">${vt(T.stages[0].subtitle)}</p>${u(T.summary)}
    <h3 class="pr-h3">Am\xE9liorations prises</h3>
    <div class="pr-owned-list">${Wd(T.upgrades)}</div>`:`<h3 class="pr-h3">Am\xE9liorations du run</h3>
    <div class="pr-owned-list">${Wd(T.upgrades)}</div>
    <h3 class="pr-h3">Seed</h3>
    <div class="pr-seedline">
      <code class="pr-seedcode">${vt(T.seed)}</code>
      <button type="button" class="pr-btn pr-btn-small" data-nav data-act="copy">Copier la seed</button>
    </div>`}
    ${T.real?"":`<p class="pr-cmds">Runs : ${y.runs??0} \xB7 Victoires : ${y.wins??0} \xB7 Record : ${y.bestPoints??0} pts</p>`}
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="again">${T.real?"Repartir":"Nouveau run"}</button>
  </div></div>
</section>`,actions:{copy:A=>{let I="Copier la seed",N;try{N=navigator.clipboard.writeText(String(T.seed??""))}catch(B){N=Promise.reject(B)}let L=B=>{A.textContent=B,setTimeout(()=>{A.isConnected&&(A.textContent=I)},1500)};N.then(()=>L("Copi\xE9e !"),()=>L("Copie impossible"))},again:(A,I)=>I(void 0)}})}function d(v){t=v||null}function E(){i=null,e.innerHTML="",e.classList.add("pr-off")}return{showTitle:l,showStageIntro:p,showResults:g,showUpgradeChoice:x,showRunEnd:m,hideAll:E,setAudio:d,mount:a}}var zx=typeof globalThis<"u"&&(globalThis.AudioContext||globalThis.webkitAudioContext)||null,kx=.8,qd=.56,Hx=.5,Yd=6,VA=.12,GA=25,Er=n=>Number.isFinite(n)?n<0?0:n>1?1:n:0,Fn=n=>440*Math.pow(2,(n-69)/12),ou=[{chord:[45,48,52],lead:[[0,69,2],[3,72,1],[4,76,2],[8,74,1],[10,72,1],[12,69,2],[14,71,2]]},{chord:[41,45,48],lead:[[0,72,3],[4,69,1],[6,72,1],[8,77,3],[12,76,2],[14,72,2]]},{chord:[43,47,50],lead:[[0,74,3],[4,71,1],[6,74,1],[8,79,3],[12,77,1],[13,76,1],[14,74,2]]},{chord:[40,43,47],lead:[[0,76,4],[4,71,2],[8,67,2],[10,71,2],[12,76,1],[13,74,1],[14,71,2]]}],Vx=[{chord:[38,41,45],lead:[[0,77,2],[2,76,1],[3,74,1],[4,69,2],[8,74,2],[10,77,2],[12,81,4]]},{chord:[43,47,50],lead:[[0,79,2],[2,77,1],[3,76,1],[4,74,2],[8,71,2],[10,74,2],[12,79,4]]},{chord:[48,52,55],lead:[[0,76,2],[2,79,2],[4,84,3],[8,83,1],[9,79,1],[10,76,2],[12,79,2],[14,76,2]]},{chord:[40,44,47],lead:[[0,76,2],[2,80,2],[4,83,4],[8,80,2],[10,76,2],[12,71,2],[14,68,2]]}],WA=ou.map(n=>({chord:n.chord,lead:[]})),XA=[{chord:[48,52,55],lead:[[0,76,4],[8,79,4]]},{chord:[45,48,52],lead:[[0,81,4],[8,76,4]]},{chord:[41,45,48],lead:[[0,77,4],[8,81,2],[12,84,4]]},{chord:[43,47,50],lead:[[0,83,4],[8,79,2],[12,74,4]]}],$d={race:{bpm:152,bars:[...WA,...ou,...ou,...Vx,...ou,...Vx],loopFrom:4,style:"race"},menu:{bpm:104,bars:XA,loopFrom:0,style:"menu"}};function Gx(){let n=null,e=!1,t=null,i=null,s=null,r=null,o=null,a=null,l=null,c=null,h=null,u=null,f=!1,p=null,g=null,x=null,m=0,d=0,E=-1,v=0,M=0,T=0;function b(oe){let be=new Float32Array(32),Te=new Float32Array(32);for(let Ue=1;Ue<32;Ue++)be[Ue]=2/(Ue*Math.PI)*Math.sin(Ue*Math.PI*oe);return n.createPeriodicWave(be,Te,{disableNormalization:!1})}function y(oe){let be=new Float32Array(2048);for(let Ue=0;Ue<2048;Ue++)be[Ue]=Math.round((Ue*2/2047-1)*oe)/oe;let Te=n.createWaveShaper();return Te.curve=be,Te}function w(oe,Ee){let be=n.createGain();return be.gain.value=oe,Ee&&be.connect(Ee),be}function _(oe,Ee,be,Te){let Ue=n.createBiquadFilter();return Ue.type=oe,Ue.frequency.value=Ee,Ue.Q.value=be,Te&&Ue.connect(Te),Ue}function S(oe){let Ee=n.createBufferSource();return Ee.buffer=o,Ee.loop=!0,Ee.connect(oe),Ee.start(),Ee}function A(oe,Ee,be=.05){try{oe.setTargetAtTime(Ee,n.currentTime,be)}catch{}}function I(oe,Ee,be,Te,Ue,Pe,{slide:U=0,attack:R=.004,vibrato:re=0}={}){let _e=n.createOscillator();if(a[Ue]?_e.setPeriodicWave(a[Ue]):_e.type=Ue,_e.frequency.setValueAtTime(Ee,oe),U&&_e.frequency.exponentialRampToValueAtTime(Math.max(20,Ee*U),oe+be),re){let me=n.createOscillator(),Be=w(Ee*.012);me.frequency.value=6,me.connect(Be),Be.connect(_e.frequency),me.start(oe+Math.min(.12,be*.5)),me.stop(oe+be+.05)}let pe=w(0,Pe);pe.gain.setValueAtTime(0,oe),pe.gain.linearRampToValueAtTime(Te,oe+R),pe.gain.setValueAtTime(Te,oe+Math.max(R,be*.7)),pe.gain.linearRampToValueAtTime(0,oe+be),_e.connect(pe),_e.start(oe),_e.stop(oe+be+.02)}function N(oe,Ee,be,Te,Ue,Pe,U,R=0){let re=n.createBufferSource();re.buffer=o,re.loopStart=Math.random()*1.5;let _e=_(Te,Ue,Pe);R&&_e.frequency.exponentialRampToValueAtTime(R,oe+Ee);let pe=w(0,U);pe.gain.setValueAtTime(be,oe),pe.gain.exponentialRampToValueAtTime(8e-4,oe+Ee),re.connect(_e),_e.connect(pe),re.start(oe,Math.random()*1.5),re.stop(oe+Ee+.02)}function L(){t=w(f?0:kx,n.destination);let oe=n.createDynamicsCompressor();oe.threshold.value=-14,oe.ratio.value=4,oe.attack.value=.004,oe.release.value=.18,oe.connect(t),i=y(24),i.connect(oe),s=w(Hx*J,i),r=w(0,i),a={p12:b(.125),p25:b(.25),p50:b(.5)};let Ee=n.sampleRate*2;o=n.createBuffer(1,Ee,n.sampleRate);let be=o.getChannelData(0);for(let Be=0;Be<Ee;Be++)be[Be]=Math.random()*2-1;let Te=w(0,oe),Ue=_("lowpass",300,.5,Te),Pe=_("lowpass",1400,.5,Ue),U=(Be,De)=>{let Oe=n.createOscillator();Oe.type=Be,Oe.frequency.value=60;let Ye=w(De,Pe);return Oe.connect(Ye),Oe.start(),Oe};l={out:Te,lp:Ue,a:U("triangle",.55),b:U("sawtooth",.1),sub:U("triangle",.7)},l.b.detune.value=6;let R=w(0,oe),re=_("lowpass",400,.4,R);S(re),c={out:R,f:re};let _e=w(0,oe),pe=_("bandpass",900,1.5,_e);S(pe),h={out:_e,f:pe};let me=w(0,i);S(_("highpass",3500,.5,me)),u={out:me},e=!0}let B=(oe,Ee,be,Te,Ue="p25")=>Ee.forEach((Pe,U)=>I(oe+U*be,Fn(Pe),be*1.6,Te,Ue,s)),Y={beep:oe=>I(oe,Fn(69),.14,.3,"p50",s),go:oe=>{I(oe,Fn(81),.42,.34,"p50",s),I(oe,Fn(88),.42,.18,"p25",s)},select:oe=>I(oe,Fn(84),.05,.2,"p25",s),confirm:oe=>B(oe,[76,83,88],.045,.24),pick:oe=>B(oe,[72,76,79,84],.04,.24,"p12"),lap:oe=>B(oe,[79,84,88,91],.06,.26),near:oe=>{I(oe,900,.16,.2,"p12",s,{slide:2.2})},boost:oe=>{I(oe,180,.5,.3,"sawtooth",s,{slide:5}),N(oe,.5,.35,"bandpass",500,1.2,s,5e3)},pad:oe=>{I(oe,330,.22,.26,"p25",s,{slide:2.5})},jump:oe=>I(oe,260,.2,.26,"p50",s,{slide:2.2}),land:oe=>{I(oe,120,.18,.5,"triangle",s,{slide:.35}),N(oe,.12,.3,"lowpass",900,.7,s)},hit:oe=>{N(oe,.28,.6,"lowpass",2400,.8,s,200),I(oe,160,.25,.4,"p50",s,{slide:.3})},win:oe=>{B(oe,[72,76,79,84,79,84,88],.09,.26),B(oe,[48,55,60],.27,.3,"triangle")},lose:oe=>B(oe,[67,64,60,55],.16,.24,"p50"),photo:oe=>{N(oe,.05,.3,"highpass",3e3,.7,s),N(oe+.09,.07,.24,"bandpass",1800,1,s),B(oe+.18,[79,84,91],.07,.2)},shard:oe=>I(oe,Fn(91),.07,.12,"p25",s),level:oe=>{B(oe,[72,76,79,84,88],.05,.24),I(oe,Fn(48),.3,.26,"triangle",s)},item:oe=>B(oe,[76,79,83,88,91],.035,.22,"p12"),rocket:oe=>{I(oe,220,.35,.24,"sawtooth",s,{slide:3.5}),N(oe,.35,.22,"bandpass",1800,1,s,600)},boom:oe=>{N(oe,.5,.5,"lowpass",1600,.7,s,120),I(oe,110,.4,.4,"triangle",s,{slide:.3})},oil:oe=>{I(oe,320,.22,.24,"p50",s,{slide:.4})},shield:oe=>{B(oe,[64,71,76],.05,.22,"p50"),I(oe+.15,Fn(88),.25,.12,"p25",s)},zap:oe=>{I(oe,1300,.3,.22,"p12",s,{slide:.15}),N(oe,.2,.18,"bandpass",2400,2,s,500)}};function ie(oe,Ee){I(oe,150,.16,Ee,"triangle",r,{slide:.28,attack:.001})}function k(oe,Ee){N(oe,.13,Ee,"bandpass",1900,.7,r),I(oe,200,.06,Ee*.5,"triangle",r,{slide:.6,attack:.001})}function G(oe,Ee){N(oe,.035,Ee,"highpass",7500,.8,r)}function se(oe,Ee,be){let Te=60/oe.bpm/4,Ue=oe.bars.length*16,Pe=Ee<Ue?Ee:oe.loopFrom*16+(Ee-Ue)%(Ue-oe.loopFrom*16),U=oe.bars[Math.floor(Pe/16)],R=Pe%16,[re,_e,pe]=U.chord;oe.style==="race"?(R%2===0&&I(be,Fn(re+(R%4===2?12:0)),Te*1.7,.34,"triangle",r),I(be,Fn([re,_e,pe,re+12][R%4]+24),Te*.9,.07,"p12",r),(R===0||R===8||R===10)&&ie(be,.5),(R===4||R===12)&&k(be,.3),R%2===0&&G(be,R%4===2?.13:.07),R===15&&Math.floor(Pe/16)%4===3&&k(be,.22)):((R===0||R===8)&&I(be,Fn(re),Te*6,.3,"triangle",r),(R===6||R===14)&&I(be,Fn(pe),Te*1.8,.22,"triangle",r),R%2===0&&I(be,Fn([re,pe,_e+12,pe][R/2%4]+12),Te*1.8,.07,"p12",r),R===0&&ie(be,.3),(R===4||R===12)&&G(be,.08));for(let[me,Be,De]of U.lead)me===R&&(I(be,Fn(Be),Te*De*.92,oe.style==="race"?.15:.12,"p25",r,{vibrato:De>=3?1:0}),oe.style==="race"&&De>=2&&I(be+Te*1.5,Fn(Be),Te*.8,.05,"p25",r))}function te(){if(!e||!p)return;let oe=60/p.bpm/4;for(m<n.currentTime&&(m=n.currentTime+.03);m<n.currentTime+VA;)se(p,d,m),d++,m+=oe}function ve(){if(zx)try{if(n||(n=new zx,L()),n.state==="suspended"&&n.resume(),g){let oe=g;g=null,Fe(oe)}}catch{e=!1}}function Se(oe,Ee){if(!e)return;let be=Er(oe),Te=Er(Ee),Ue=n.currentTime,Pe=Math.min(Yd-1,Math.floor(be*Yd)),U=be*Yd-Pe,R=52+16*Pe+118*(.3+.7*U);A(l.a.frequency,R,.03),A(l.b.frequency,R,.03),A(l.sub.frequency,R/2,.03),A(l.lp.frequency,190+520*Te*(.4+.6*U)+180*be,.06),E>=0&&Pe!==E&&(v=Ue+.09),E=Pe,A(l.out.gain,(Ue<v?.03:.06+.07*Te)*J,.02),Te>M&&(M=Te),M>.7&&Te<.2&&be>.35&&Ue>T&&(N(Ue,.06,.12,"lowpass",450,.7,s),I(Ue,80,.06,.1,"triangle",s,{slide:.5,attack:.002}),T=Ue+.09+Math.random()*.22,Math.random()<.3&&(M=0)),Te>.5&&(T=Ue+.1)}function O(oe){if(!e)return;let Ee=Er(oe);A(c.out.gain,.1*Ee*Ee*J,.15),A(c.f.frequency,300+600*Ee,.15)}function W(oe){if(!e)return;let Ee=Er(oe);A(h.out.gain,.09*Ee*J,.05),A(h.f.frequency,700+400*Ee,.06)}let X=1,J=1;function V({music:oe,sfx:Ee}={}){Number.isFinite(oe)&&(X=Er(oe)),Number.isFinite(Ee)&&(J=Er(Ee)),e&&(A(s.gain,Hx*J,.05),p&&A(r.gain,qd*X,.05))}function $(oe){e&&A(u.out.gain,.05*Er(oe)*J,.3)}function fe(oe){!e||!Object.prototype.hasOwnProperty.call(Y,oe)||Y[oe](n.currentTime+.01)}function ge(oe){f=!!oe,e&&A(t.gain,f?0:kx,.015)}function Fe(oe="race"){let Ee=$d[oe]||$d.race;if(!e){g=oe;return}p!==Ee&&(p=Ee,d=0,m=n.currentTime+.06),A(r.gain,qd*X,.08),x||(x=setInterval(te,GA)),te()}function Ge(){g=null,p=null,x&&(clearInterval(x),x=null),e&&A(r.gain,0,.06)}function Q(oe,Ee,be=.05){let Te=$d[oe];if(!e||!Te)return 0;r.gain.value=qd;let Ue=60/Te.bpm/4;for(let Pe=0;Pe<Ee;Pe++)se(Te,Pe,be+Pe*Ue);return Ee*Ue}return{resume:ve,setEngine:Se,setWind:O,setSkid:W,setRain:$,play:fe,setMuted:ge,setVolumes:V,startMusic:Fe,stopMusic:Ge,preview:Q,get track(){return p?p.style:null}}}var Wx="polygon-rush-settings",qA={music:.8,sfx:.8,muted:!1,ao:!0};function Xx(n=globalThis.localStorage){let e={...qA};try{let t=JSON.parse(n?.getItem(Wx)||"null");if(t&&typeof t=="object"){for(let i of["music","sfx"])Number.isFinite(t[i])&&(e[i]=Math.max(0,Math.min(1,t[i])));for(let i of["muted","ao"])typeof t[i]=="boolean"&&(e[i]=t[i])}}catch{}return e}function Zd(n,e=globalThis.localStorage){try{return e?.setItem(Wx,JSON.stringify(n)),!0}catch{return!1}}var Qt=(n,e,t,i)=>{let s=document.createElement(n);return e&&(s.className=e),i!=null&&(s.textContent=i),t?.appendChild(s),s};function qx(n,{settings:e,onChange:t,onResume:i,onQuit:s,carnet:r=null}){let o=Qt("div","pm-veil",n);o.hidden=!0;let a=Qt("div","pm-panel",o);a.setAttribute("role","dialog"),a.setAttribute("aria-label","Menu");let l=Qt("h2","pm-title",a,"PAUSE"),c=Qt("p","pm-note",a,""),h=Qt("div","pm-rows",a),u={};function f(_,S){let A=Qt("label","pm-row",h);Qt("span","pm-lbl",A,S);let I=Qt("input","pm-range",A);I.type="range",I.min="0",I.max="100",I.step="5";let N=Qt("span","pm-val",A,""),L=()=>{I.value=String(Math.round(e[_]*100)),N.textContent=I.value+" %"};I.addEventListener("input",()=>{e[_]=Number(I.value)/100,N.textContent=I.value+" %",t?.(_,e[_])}),u[_]=L}function p(_,S,A="Oui",I="Non"){let N=Qt("div","pm-row",h);Qt("span","pm-lbl",N,S);let L=Qt("button","pm-toggle",N);L.type="button";let B=()=>{L.textContent=e[_]?A:I,L.classList.toggle("pm-on",!!e[_]),L.setAttribute("aria-pressed",String(!!e[_]))};L.addEventListener("click",()=>{e[_]=!e[_],B(),t?.(_,e[_])}),u[_]=B}f("music","Musique"),f("sfx","Bruitages et moteur"),p("muted","Son coup\xE9 (M)"),p("ao","Ombres fines","Oui","Non");{let _=Qt("div","pm-row",h);Qt("span","pm-lbl",_,"Plein \xE9cran");let S=Qt("button","pm-toggle",_);S.type="button";let A=()=>{let I=!!document.fullscreenElement;S.textContent=I?"Oui":"Non",S.classList.toggle("pm-on",I)};S.addEventListener("click",()=>{(document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.())?.catch?.(()=>{})}),document.addEventListener("fullscreenchange",A),u.fullscreen=A}let g=Qt("div","pm-carnet",a);g.hidden=!0;let x=Qt("div","pm-carnet-title",g,""),m=Qt("div","pm-carnet-list",g);function d(){let _=r?r():[];if(g.hidden=!_.length,!!_.length){x.textContent=`Carnet de voyage \xB7 ${_.filter(S=>S.seen).length} / ${_.length}`,m.textContent="";for(let S of _)Qt("span","pm-stamp"+(S.seen?" pm-seen":""),m,(S.seen?"\u2713 ":"")+S.name)}}Qt("p","pm-keys",a,"\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage \xB7 E objet \xB7 1 2 3 am\xE9lioration");let E=Qt("div","pm-btns",a),v=Qt("button","pm-btn pm-main",E,"Reprendre");v.type="button",v.addEventListener("click",()=>i?.());let M=Qt("button","pm-btn",E,"Quitter la course");M.type="button";let T=!1;M.addEventListener("click",()=>{if(!T){T=!0,M.textContent="Confirmer : quitter ?",M.classList.add("pm-warn");return}s?.()});function b({live:_=!1,racing:S=!0}={}){l.textContent=_?"MENU":S?"PAUSE":"R\xC9GLAGES",c.textContent=_?"Partie \xE0 plusieurs : la course continue pendant que ce menu est ouvert.":"",c.hidden=!_,o.classList.toggle("pm-live",_),T=!1,M.hidden=!S,M.textContent=_?"Quitter la partie":"Quitter la course",M.classList.remove("pm-warn"),v.textContent=S?"Reprendre":"Fermer";for(let A in u)u[A]();d(),o.hidden=!1,_||v.focus({preventScroll:!0})}function y(){o.hidden=!0}function w(){for(let _ in u)u[_]()}return{open:b,close:y,refresh:w,get isOpen(){return!o.hidden},el:o}}var Kd=1/120,Mn=new URLSearchParams(location.search),nv=document.getElementById("game"),jt=new Vl({canvas:nv,antialias:!0,powerPreference:"high-performance"});jt.setPixelRatio(Math.min(window.devicePixelRatio,2));jt.shadowMap.enabled=!0;jt.shadowMap.type=ac;jt.toneMapping=ga;jt.toneMappingExposure=1.05;jt.outputColorSpace=Bt;var Vt=new ua,Bn=new en(70,1,.3,6e3);Vt.add(Bn);var Yi=Cx(Bn),sp=document.getElementById("ui"),Dt=Lx(sp),Xi=Bx(sp),ht=Gx();Xi.setAudio?.(ht);var Za=new Set,_n={throttle:0,brake:0,steer:0,boost:!1,drift:!1};var YA=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"],$A=["KeyE","KeyF","ControlLeft","ControlRight","Enter"],Ya=!1,Yx=!1;addEventListener("keydown",n=>{if(n.code==="Escape"&&!n.repeat){ZA(),n.preventDefault();return}if(!(n.target instanceof HTMLInputElement)){if(Za.add(n.code),At==="race"&&YA.includes(n.code)&&n.preventDefault(),At==="race"&&!n.repeat&&$A.includes(n.code)&&(Ya=!0),gs?.active){let e=["Digit1","Digit2","Digit3","Numpad1","Numpad2","Numpad3"].indexOf(n.code);e>=0&&gs.pick(e%3)}n.code==="KeyM"&&(tr=!tr,ht.setMuted(tr),ms.muted=tr,Zd(ms),$a.refresh()),n.code==="KeyP"&&At==="race"&&!Gt&&!$a.isOpen&&rp(!uu)}});addEventListener("keyup",n=>Za.delete(n.code));addEventListener("blur",()=>Za.clear());addEventListener("pointerdown",()=>ht.resume(),{once:!1});var ms=Xx(),tr=Mn.has("mute")||ms.muted;tr&&ht.setMuted(!0);ms.muted=tr;ht.setVolumes(ms);ht.startMusic("menu");var uu=!1;function rp(n){uu=!!n,uu&&(ht.setEngine(.1,0),ht.setWind(0),ht.setSkid(0),Za.clear())}var $a=qx(sp,{settings:ms,carnet:()=>Tr.map(n=>({name:n.name,seen:zn.pois.includes(n.id)})),onChange(n,e){n==="music"||n==="sfx"?ht.setVolumes(ms):n==="muted"?(tr=e,ht.setMuted(tr)):n==="ao"&&(_i.ao=e&&Mn.get("fx")!=="low",_i.checked=!0,Ie?.post.setAO(_i.ao)),Zd(ms)},onResume:()=>iv(),onQuit:()=>{location.href=location.pathname}});function ZA(){if($a.isOpen){iv();return}if(At==="boot"||At==="intro")return;let n=At==="race";$a.open({live:n&&!!Gt,racing:n}),n&&!Gt&&rp(!0)}function iv(){$a.close(),rp(!1),cu=performance.now()}function KA(n){let e=(...s)=>s.some(r=>Za.has(r));_n.throttle=e("ArrowUp","KeyW")?1:0,_n.brake=e("ArrowDown","KeyS")?1:0;let t=(e("ArrowRight","KeyD")?1:0)-(e("ArrowLeft","KeyA")?1:0);_n.steer=t,_n.boost=e("Space"),_n.drift=e("ShiftLeft","ShiftRight","KeyX");let i=navigator.getGamepads?.()[0];if(i){let s=i.axes[0]||0;Math.abs(s)>.12&&(_n.steer=s),_n.throttle=Math.max(_n.throttle,i.buttons[7]?.value||0,i.buttons[0]?.pressed?1:0),_n.brake=Math.max(_n.brake,i.buttons[6]?.value||0),_n.boost=_n.boost||!!i.buttons[2]?.pressed,_n.drift=_n.drift||!!i.buttons[1]?.pressed||!!i.buttons[5]?.pressed;let r=!!i.buttons[3]?.pressed||!!i.buttons[4]?.pressed;r&&!Yx&&(Ya=!0),Yx=r}return _n}function jA(n){let e=new ua,t=new Ns(50,32,16),i=new H(...n.sunDir).normalize(),s=new St({side:an,uniforms:{uTop:{value:new Ne(n.skyTop)},uHor:{value:new Ne(n.skyHorizon)},uGround:{value:new Ne(n.hemiGround)},uSun:{value:new Ne(n.sunColor).multiplyScalar(n.sunIntensity)},uSunDir:{value:i}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 uTop, uHor, uGround, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = d.y > 0.0 ? mix(uHor, uTop, pow(d.y, 0.55)) : mix(uHor, uGround, pow(-d.y, 0.35));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 350.0) * 14.0 + pow(s, 12.0) * 0.5);
        gl_FragColor = vec4(c, 1.0);
      }`});e.add(new et(t,s));let r=new co(jt),o=r.fromScene(e,.02);return r.dispose(),t.dispose(),s.dispose(),o}var $x=new Map;function Zx(n,e="#f4f2ec",t="#16181d"){let i=n+e+t,s=$x.get(i);if(!s){let o=document.createElement("canvas");o.width=40,o.height=28;let a=o.getContext("2d");a.fillStyle=e,a.fillRect(0,0,40,28),a.fillStyle=t,a.font='italic 900 26px "Arial Narrow", Impact, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(String(n),20,15),s=new ui(o),s.colorSpace=Bt,s.magFilter=sn,s.minFilter=ci,$x.set(i,s)}let r=new et(new Xn(1,1),new ot({map:s,roughness:.5,side:Pt,polygonOffset:!0,polygonOffsetFactor:-2}));return r.userData.ownGeometry=!0,r}var Ga=null;function JA(){if(Ga)return Ga;let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Ga=new ui(n),Ga.colorSpace=Bt,Ga}function jd(n,e,t){let i=new ha(new po({map:JA(),color:n,transparent:!0,opacity:t,blending:Oi,depthWrite:!1,fog:!1}));return i.scale.setScalar(e),i}var _i={ao:Mn.get("fx")!=="low"&&ms.ao,slow:0,frames:0,checked:!1},Ie=null,At="boot",ep=0,tp=0,np=0,Wa=99;function QA(){if(Ie){for(let n of Ie.labels||[])n.material.map?.dispose(),n.material.dispose();for(let n of Ie.bikes)Vt.remove(n.model.group);Vt.remove(Ie.road.group),Ie.road.dispose?.(),Ie.env.dispose?.(),Ie.env.group?.parent&&Ie.env.group.parent.remove(Ie.env.group),Ie.fx.dispose?.(),Ie.pois?.dispose(),Ie.post.dispose?.(),Ie.envMap?.dispose(),Vt.environment=null,Ie.mirror&&(Vt.remove(Ie.mirror),Ie.mirror.dispose()),Ie.fill&&Vt.remove(Ie.fill),Ie.scenery&&(Vt.remove(Ie.scenery.group),Ie.scenery.dispose()),Ie.clouds&&(Vt.remove(Ie.clouds),Ie.clouds.geometry.dispose(),Ie.clouds.material.dispose()),Ie.sunGlow&&(Vt.remove(Ie.sunGlow),Ie.sunGlow.material.dispose()),Ie=null}}var Xa="assets/v3/world/",In=null,yi=null,op="assets/v3/poi/",Tr=[],sv={};function rv({trackSeed:n,weatherId:e,laps:t,riders:i,autopilot:s,realData:r=null,final:o=!0,carry:a=null,keepClouds:l=null,startS:c=0}){let h=[performance.now()],u=k=>{h.push(k,Math.round(performance.now()-h[0]))};QA(),u("dispose");let f=ni(n),p=!!r&&!!In,g=p?In.track:p0(n);u("track");let x=zs[e]||zs.sunset;Bn.far=p?9500:6e3,Bn.updateProjectionMatrix();let m=p?lg(Vt,g,x,In.index,{base:Xa,baked:sv,rng:f.fork("env"),avoid:Tr}):J0(Vt,g,x,f.fork("env"));p&&m.prime(c),u("env");let d=jA(x);Vt.environment=d.texture,Vt.environmentIntensity=x.night?.55:.5,jt.toneMappingExposure=x.night?1.5:.82;let E=jd(x.sunColor,x.night?900:2200,x.night?.35:.75);E.userData.dir=new H(...x.sunDir).normalize(),Vt.add(E);let v=new Bi(x.night?3820160:13226728,x.night?.25:.45);v.position.set(-x.sunDir[0],.6,-x.sunDir[2]).multiplyScalar(100),v.name="fill-light",Vt.add(v),u("envmap");let M=p?{group:new at,update(){},dispose(){}}:Ic(g,x,f.fork("road"));Vt.add(M.group),u("road"),p||z0(m.group,k=>k.geometry.attributes.position.count>2e4?1:.45);let T=p?{group:new at,dispose(){}}:ng(g,x,f.fork("scenery"),m.heightAt);m.sun?.shadow&&(m.sun.shadow.mapSize.set(4096,4096),m.sun.shadow.radius=5,m.sun.shadow.blurSamples=16,m.sun.shadow.normalBias=.05,m.sun.shadow.map?.dispose(),m.sun.shadow.map=null),Vt.add(T.group);let b=null,y=p?Math.min(.25,x.wet||.25):x.sheen??x.wet;y>.5&&!Mn.has("noreflect")&&(b=new va(new Xn(900,900),{textureWidth:1280,textureHeight:720,clipBias:.05,multisample:4}),b.rotation.x=-Math.PI/2,b.material.colorWrite=!1,b.material.depthWrite=!1,b.material.depthTest=!1,b.frustumCulled=!1,b.renderOrder=-10,b.name="road-mirror",Vt.add(b));let w=M.group.getObjectByName("road-asphalt");w&&y>.5&&(w.material.envMap=d.texture,w.material.envMapIntensity=b?.35:1.25,w.material.metalness=.3,V0(w.material,x.sheen??x.wet,b?{texture:b.getRenderTarget().texture,matrix:b.material.uniforms.textureMatrix.value}:null)),u("voxelize");let _=l||k0(x,f.fork("clouds"));Vt.add(_);let S=p&&Tr.length&&!Mn.has("nopoi")?jg(Vt,Tr,{base:op}):null,A=bx(Vt,x),I=Px(jt,Vt,Bn,x,{ao:_i.ao});u("fx");let N=w0({track:g,laps:t,env:x,rng:f.fork("race"),riders:i,final:o,carry:a,startS:c}),L=Mn.has("noitems")?null:Bg({track:g,rng:f.fork("items"),startS:c,net:Gt?{id:Gt.session.id}:null});Gt&&(Gt.session.onItem=(k,G)=>{let se=Ie?.race.riders.find(te=>te.remote&&te.id===k.id);se&&Ie.items?.receive(G,se)}),ko=ko||Wg(Vt),ko.reset(),Ya=!1;let B=[],Y=N.riders.map(k=>{let G=gx({color:k.color,accent:k.accent,isPlayer:!!k.isPlayer&&!!x.night,detail:k.isPlayer?"hi":"lo"});if(G.group.rotation.order="YXZ",k.remote){let O=a2(k.name,k.color);G.group.add(O),B.push(O)}let se=G.group.getObjectByName("chassis")||G.group,te=jd(16722458,.3,.3);if(te.position.set(0,.67,-.42),se.add(te),x.night){let O=jd(16773840,1.3,.8);O.position.set(0,.48,1.66),se.add(O)}G.tailGlow=te;let ve=k.isPlayer?1:2+N.riders.indexOf(k)*7%97;for(let O of[-1,1]){let W=Zx(ve);W.scale.set(.24,.17,1),W.position.set(.105*O,.6,-.2),W.rotation.y=O*Math.PI/2,se.add(W)}let Se=Zx(ve);return Se.scale.set(.2,.14,1),Se.position.set(0,.585,1.6),Se.rotation.x=-.75,se.add(Se),Vt.add(G.group),{rider:k,model:G,pose:{},prev:new H,has:!1,w:{x:0,y:0,z:0,heading:0,slope:0}}}),ie=s?yc({id:"auto",name:"auto",skill:.9,aggression:.5,jumpSkill:.8,lineSkill:.9,style:"r\xE9gulier"},f.fork("auto")):null;if(Ie={labels:B,track:g,weather:x,env:m,road:M,fx:A,post:I,race:N,items:L,pois:S,bikes:Y,autoAI:ie,envMap:d,sunGlow:E,clouds:_,scenery:T,mirror:b,fill:v,playerBike:Y.find(k=>k.rider.isPlayer)||Y[0]},u("bikes"),window.__loadTimes=h.slice(1),Et?.traffic){for(let k of N.riders)k.ai&&(k.ai.obstacles=Et.traffic.vehicles);ie&&(ie.obstacles=Et.traffic.vehicles)}if(p){let k=[];for(let G of g.features)G.type==="tunnel"&&G.name&&k.push({s:G.s0-90,text:G.name.toUpperCase()});for(let G of g.bridges)G.name&&G.s1-G.s0>150&&k.push({s:G.s0-40,text:G.name.toUpperCase()});for(let G of In.index.signs)k.push({s:G.s-20,text:G.name.toUpperCase()});k.sort((G,se)=>G.s-se.s),Ie.announce=k.filter(G=>G.s>=c-60&&G.s<=g.raceEnd),Ie.announceIdx=0}return Dt.setPois?.(S?Tr:[]),Dt.setTrack(g),dv(),av(.016),Yi.snap(ap()),tp=N.player?.position||i.length,np=1,Wa=99,window.__game={stage:Ie,renderer:jt,scene:Vt,camera:Bn,RL:Bf,audio:ht},window.__tick=uv,Ie}var Wi={x:0,y:0,z:0,heading:0,yaw:0,lean:0,speedRatio:0,airborne:!1,boosting:!1,slope:0};function ap(){let n=Ie.playerBike,e=n.rider.state;return Wi.x=n.w.x,Wi.y=n.w.y,Wi.z=n.w.z,Wi.heading=n.w.heading,Wi.yaw=-ov(e),Wi.speedRatio=Math.min(1.3,e.speed/n.rider.stats.maxSpeed),Wi.airborne=e.airborne,Wi.boosting=e.boostT>0,Wi.slope=n.w.slope||0,Wi}var e2=.8,Kx=.7;function ov(n){let e=n.vdir??n.yaw;return e+e2*(n.yaw-e)}function av(n){let{track:e,fx:t,weather:i}=Ie;for(let s of Ie.bikes){let r=s.rider.state;It(e,r.s,r.d,s.w),s.w.y+=r.yRel||0;let o=s.model.group;o.position.set(s.w.x,s.w.y,s.w.z),o.visible=!s.rider.hidden;let a=s.w.heading-ov(r),l=s.w.heading-(r.vdir??r.yaw);o.rotation.y=a,o.position.x+=Kx*(Math.sin(a)-Math.sin(l)),o.position.z+=Kx*(Math.cos(a)-Math.cos(l)),o.rotation.x=r.airborne?0:-Math.atan(s.w.slope||0);let c=s.pose;if(c.lean=r.lean,c.steer=r.steer,c.pitch=r.pitch,c.compress=r.compress,c.wheelSpin=r.wheelSpin,c.speedRatio=r.speed/s.rider.stats.maxSpeed,c.speed=r.speed,c.airborne=r.airborne,c.drift=r.drift,c.boost=r.boostT>0,c.braking=s.rider.isPlayer?_n.brake>.1:!!s.rider.braking,s.model.update(c,n),s.model.tailGlow){let v=c.braking?1:0;s.model.tailGlow.material.opacity+=(.3+.6*v-s.model.tailGlow.material.opacity)*Math.min(1,n*12),s.model.tailGlow.scale.setScalar(.3+.55*v)}let h=o.rotation.y,u=Math.sin(h),f=Math.cos(h),p=s.w.x-u*.7,g=s.w.z-f*.7,x=s.w.y+.05,m=u*r.speed,d=f*r.speed;!r.airborne&&r.speed>8&&(r.drift>.8&&(Math.random()<r.drift*.9&&t.emit("smoke",p,x,g,m*.2,1.2,d*.2,1),s.has&&t.addSkid(s.prev.x,s.prev.y,s.prev.z,p,x,g,.16,.25+r.drift*.4)),!r.onRoad&&Math.random()<.7&&t.emit("dust",p,x,g,m*.25,1.5,d*.25,2),i.wet>.2&&r.speed>20&&Math.random()<i.wet*.8&&t.emit("spray",p,x,g,m*.35,2.5,d*.35,2)),r.boostT>0&&t.emit("boost",p-u*.4,x+.45,g-f*.4,m*.9,.2,d*.9,1),s.prev.set(p,x,g),s.has=!r.airborne;let E=s.rider.isPlayer?null:s.rider.frameEvents;E&&E.length&&lv(s,E,!1)}}function lv(n,e,t){let{fx:i}=Ie,s=n.rider.state,r=n.model.group.rotation.y,o=Math.sin(r)*s.speed,a=Math.cos(r)*s.speed;for(let l of e)l==="land"||l==="hardLand"?(i.emit("land",n.w.x,n.w.y+.1,n.w.z,o*.3,1,a*.3,l==="hardLand"?40:22),t&&(ht.play("land"),Yi.shake(l==="hardLand"?.9:.45))):l==="wall"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,3,a*.5,26),t&&(ht.play("hit"),Yi.shake(.7))):l==="crash"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,4,a*.5,40),i.emit("dust",n.w.x,n.w.y+.2,n.w.z,o*.3,2,a*.3,30),t&&(Yi.shake(1.4),Dt.flash("CHUTE !",1400))):l==="jump"?t&&ht.play("jump"):l==="boost"?t&&(ht.play("boost"),Yi.shake(.3),Dt.flash("BOOST !",600)):l==="pad"&&t&&(ht.play("pad"),Yi.shake(.2))}function t2(n){let{race:e,autoAI:t,track:i}=Ie,s=e.player,r=_n;if(t||At==="finish")if(t){let a=e.riders.filter(l=>l!==s).map(l=>l.state);r=_c(t,s.state,i,s.stats,a,n)}else r=s2;if(Gt&&Et&&(c2(e,n),l2(e,n)),e.update(n,r),Gt&&Et&&e.phase!=="countdown"&&(Gt.session.sendState(performance.now(),s.state.s,s.state,s.shieldT>0),s.finished&&!Gt.sentFinish&&(Gt.sentFinish=!0,Gt.session.sendFinish(s.finishTime))),Et?.traffic&&e.phase!=="countdown"){Et.traffic.update(n,s.state,e.riders);for(let a of Et.traffic.events)a.type==="near"&&!t?(Dt.flash(a.boost?`FR\xD4LEMENT \xD7${a.combo} \xB7 BOOST +1`:`FR\xD4LEMENT \xD7${a.combo}`,900),hu(1),ht.play(a.boost?"boost":"near")):a.type==="hit"&&!t&&Dt.flash("ACCROCHAGE",900)}if(Ie.items&&e.phase!=="countdown"){Ya&&!t&&At==="race"&&Ie.items.use(s,e.riders),Ie.items.update(n,e.riders,{vehicles:Et?.traffic?.vehicles||null,autoPlayer:!!t||At!=="race"}),Ie.items.events.length&&i2(Ie.items.events,s,!t&&At==="race");let a=Ie.items.outbox;if(a.length){if(Gt)for(let l of a)Gt.session.sendItem(l);a.length=0}}Ya=!1;let o=s.state.events;o.length&&(lv(Ie.playerBike,o,!t),o.length=0)}var n2={nitro:"boost",rocket:"rocket",oil:"oil",shield:"shield",pulse:"zap"},wr={};function i2(n,e,t){let{fx:i,track:s}=Ie;for(let r of n){let o=r.rider?Ie.bikes.find(c=>c.rider===r.rider):null,a=r.rider===e,l=r.by===e;if(r.type==="shard")t&&(ht.play("shard"),hu(1));else if(r.type==="pickup")o&&i.emit("spark",o.w.x,o.w.y+1.1,o.w.z,0,2,0,14),a&&t&&ht.play("item");else if(r.type==="use")a&&t&&(ht.play(n2[r.item]),Dt.flash($c[r.item].name.toUpperCase()+" !",700),r.item==="pulse"&&Yi.shake(.3));else if(r.type==="hit"){if(o&&(i.emit("spark",o.w.x,o.w.y+.6,o.w.z,0,4,0,r.item==="oil"?10:36),i.emit(r.item==="oil"?"smoke":"dust",o.w.x,o.w.y+.3,o.w.z,0,2,0,18)),!t)continue;if(a){ht.play(r.item==="rocket"?"boom":r.item==="pulse"?"zap":"hit"),Yi.shake(r.item==="rocket"?1.2:.7);let c=r.by&&r.by!==e?" \u2014 "+r.by.name.toUpperCase():"";Dt.flash((r.item==="oil"?"GLISSADE":r.item==="pulse"?"MOTEUR BRID\xC9":"TOUCH\xC9")+c,1300)}else l&&(r.item==="rocket"&&ht.play("boom"),hu(3),Dt.flash(`${r.rider.name.toUpperCase()} ${r.item==="oil"?"A GLISS\xC9":r.item==="pulse"?"BRID\xC9":"TOUCH\xC9"} !`,1100))}else r.type==="sent"?(o&&i.emit("spark",o.w.x,o.w.y+.6,o.w.z,0,4,0,30),l&&t&&ht.play("boom")):r.type==="block"?(o&&i.emit("spark",o.w.x,o.w.y+.8,o.w.z,0,3,0,20),a&&t?(ht.play("shield"),Dt.flash("BOUCLIER !",900)):l&&t&&Dt.flash(`${r.rider.name.toUpperCase()} : BOUCLIER`,1e3)):r.type==="boom"&&(It(s,r.s,r.d,wr),i.emit("spark",wr.x,wr.y+.8,wr.z,0,4,0,30),i.emit("smoke",wr.x,wr.y+.8,wr.z,0,2,0,16))}}var s2={throttle:.3,brake:0,steer:0,boost:!1,drift:!1},$t={speedKmh:0,position:1,total:8,lap:1,laps:3,time:0,bestLap:null,boostCharges:0,boostT:0,countdown:null,wrongWay:!1},Jd=[],jx=new H,cu=performance.now(),au=0,er=0;function cv(n){requestAnimationFrame(cv);let e=Math.min(.05,(n-cu)/1e3);_i.ao&&!_i.checked&&At==="race"&&Ie?.race.phase==="racing"&&(_i.frames++,n-cu>25&&_i.slow++,_i.frames>=240&&(_i.checked=!0,_i.slow>96&&(_i.ao=!1,Ie.post.setAO(!1),console.info("Occlusion ambiante coup\xE9e : affichage trop lent.")))),cu=n,uv(e)}function uv(n){if(!Ie)return;if(uu){Ie.post.render(0),ev(Ie.race.player.state);return}er+=n,ep+=n,At==="race"&&(gs?.update(n),Ar>0&&!gs?.active&&h2());let{race:e}=Ie,t=At==="race"||At==="attract"||At==="finish";if(t){At==="race"&&KA(n),au+=n;let a=0;for(;au>=Kd&&a++<8;)t2(Kd),au-=Kd;a>=8&&(au=0)}av(n);let i=e.player,s=i.state,r=Math.min(1.3,s.speed/i.stats.maxSpeed),o=ap();At==="intro"||At==="menu"||At==="finish"&&ep>1.2?r2(o,n):Yi.update(n,o),jx.set(o.x,o.y,o.z),Ie.env.update(n,er,jx,(Ie.race.player||Ie.race.riders[0]).state.s),Ie.mirror&&Ie.mirror.position.set(o.x,o.y-(s.yRel||0)+.02,o.z),Ie.sunGlow.position.copy(Bn.position).addScaledVector(Ie.sunGlow.userData.dir,3200),Ie.road.update(n,er),Ie.fx.setSpeed(t?r:0,s.boostT>0),Ie.fx.update(n,Bn),zo&&(Et?.traffic&&At!=="attract"?zo.update(Et.traffic,Ie.track,s.s):zo.hide()),Ie.pois&&(Ie.pois.update(n,er,s.s),Ie.pois.events.length&&u2(Ie.pois.events)),Ie.items?(ko.show(),ko.update(n,er,Ie.items,Ie.track,s.s,Ie.bikes,t?Ie.fx:null)):ko?.hide(),Ie.post.setSpeed(t?r:0,s.boostT>0),Ie.post.render(n),ev(s),(At==="race"||At==="finish")&&(ht.setEngine(Math.min(1,r),At==="race"?_n.throttle:.3),ht.setWind(Math.min(1,r)),ht.setSkid(s.airborne?0:Math.min(1,s.drift))),At==="race"&&o2(e,i,s)}var Jx=new H;function r2(n,e){let t=er*.35+n.heading;Jx.set(n.x+Math.sin(t)*7.5,n.y+2.6,n.z+Math.cos(t)*7.5),Bn.position.lerp(Jx,Math.min(1,e*2.5)),Bn.fov+=(55-Bn.fov)*Math.min(1,e*3),Bn.updateProjectionMatrix(),Bn.lookAt(n.x,n.y+.9,n.z)}function o2(n,e,t){$t.speedKmh=t.speed*3.6,$t.position=e.position,$t.total=n.riders.length,$t.lap=Math.min(n.laps,Math.max(1,e.lap)),$t.laps=n.laps,Et&&At!=="attract"&&($t.lap=Et.index+1,$t.laps=Et.metas.length),Dt.setLapLabel?.(Et&&At!=="attract"?"TRON\xC7ON":"TOUR"),$t.time=n.time,$t.bestLap=e.bestLap??null,$t.boostCharges=t.boostCharges,$t.boostT=t.boostT,$t.gear=t.gear,$t.rpm=t.rpm,$t.level=lt?(lt.level||0)+1:1,$t.xp=lt?.xp||0,$t.xpNeed=lt&&Ie.items?Zc(lt.level||0):0;let i=Ie.pois?.current(t.s)||null;if(i){let s=$t.poi&&$t.poi.id===i.id?$t.poi:$t.poi={id:i.id,name:i.name,place:i.place,blurb:i.blurb,thumb:op+i.id+".png",side:i.side};s.ahead=i.view-t.s,s.seen=zn.pois.includes(i.id),s.fresh=hv===i.id}else $t.poi=null;$t.item=e.item?$c[e.item]:null,$t.shieldT=e.shieldT||0,$t.countdown=n.phase==="countdown"?n.countdown:n.time<.9?0:null,$t.wrongWay=Math.abs(t.yaw)>1.4,Dt.update($t),Jd.length=0;for(let s of n.riders)Jd.push({s:s.state.s,d:s.state.d,isPlayer:!!s.isPlayer,color:s.color});if(Dt.updateMinimap(Jd),n.phase==="countdown"){let s=Math.ceil(n.countdown);s!==Wa&&(Wa=s,s>0&&ht.play("beep"))}else Wa!==0&&(Wa=0,ht.play("go"),ht.startMusic?.("race"));if(n.phase==="racing"){let s=Ie.announce;if(s)for(;Ie.announceIdx<s.length&&s[Ie.announceIdx].s<=t.s;)Dt.flash(s[Ie.announceIdx].text,2e3),Ie.announceIdx++;e.position<tp&&!(s&&Ie.announceIdx>0&&t.s-s[Ie.announceIdx-1].s<120)&&Dt.flash(e.position===1?"EN T\xCATE !":"+1 PLACE",700),tp=e.position,e.lap!==np&&e.lap<=n.laps&&(np=e.lap,ht.play("lap"),e.lap===n.laps&&Dt.flash("DERNIER TOUR",1400))}if(Et&&At==="race"&&n.phase==="racing")for(;Et.index<Et.metas.length-1&&t.s>=Et.metas[Et.index].s1;)f2(n);n.phase==="finished"&&At==="race"&&d2()}var Et=null,zo=null,ko=null;function a2(n,e){let t=document.createElement("canvas");t.width=256,t.height=64;let i=t.getContext("2d");i.font="bold 34px Arial, Helvetica, sans-serif";let s=Math.min(244,i.measureText(n).width+28);i.fillStyle="rgba(10,14,28,.78)",i.beginPath(),i.roundRect((256-s)/2,8,s,48,12),i.fill(),i.fillStyle="#"+e.toString(16).padStart(6,"0"),i.fillRect((256-s)/2,50,s,6),i.fillStyle="#fff",i.textAlign="center",i.textBaseline="middle",i.fillText(n,128,31,230);let r=new ui(t);r.colorSpace=Bt;let o=new ha(new po({map:r,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1}));return o.scale.set(3.6,.9,1),o.position.set(0,2.55,0),o.name="name-tag",o}var qi=null,Qd=0;function l2(n,e){if(Qd-=e,Qd>0)return;Qd=.25,qi||(qi=document.createElement("div"),qi.style.cssText="position:fixed;left:2.2vmin;top:13vmin;z-index:30;font:bold 1.9vmin Arial,Helvetica,sans-serif;color:#fff;text-shadow:0 1px 3px #000;display:grid;gap:.5vmin;pointer-events:none",document.body.appendChild(qi));let t=n.player.state.s,i=n.riders.filter(s=>s.remote).map(s=>{let r=Gt.session.players.get(s.id);if(!r||r.gone)return{gap:-1/0,html:`<span style="opacity:.6">\u2715 ${lu(s.name)} \xB7 abandon</span>`};if(s.finished)return{gap:1/0,html:`<span>\u{1F3C1} ${lu(s.name)} \xB7 arriv\xE9</span>`};if(!r.remote.known)return{gap:0,html:`<span style="opacity:.6">\u2026 ${lu(s.name)}</span>`};let o=s.state.s-t,a=Math.abs(o)>=1e3?(Math.abs(o)/1e3).toFixed(1).replace(".",",")+" km":Math.round(Math.abs(o))+" m";return{gap:o,html:`<span><b style="color:#${s.color.toString(16).padStart(6,"0")}">${o>=0?"\u25B2":"\u25BC"}</b> ${lu(s.name)} \xB7 ${o>=0?"+":"\u2212"}${a}</span>`}});i.sort((s,r)=>r.gap-s.gap),qi.innerHTML=i.map(s=>s.html).join(""),qi.style.display=""}var lu=n=>String(n).replace(/[&<>]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[e]),Gt=null;function c2(n,e){let t=performance.now(),i=n.track;for(let s of n.riders){if(!s.remote)continue;let r=Gt.session.players.get(s.id),o=r&&!r.gone?r.remote.sample(t,e):null;if(!o){s.hidden=!0,(!r||r.gone)&&(s.state.s=-1e5,!s.dnf&&!s.finished&&(s.dnf=!0,Dt.flash(`${s.name.toUpperCase()} A QUITT\xC9 LA COURSE`,2200)));continue}let a=s.state;a.s=o.g,a.d=o.d,a.speed=o.v,a.lean=o.l,a.yaw=o.y,a.vdir=o.y,a.boostT=o.b?.2:0,s.shieldT=o.sh?3:0,a.wheelSpin=(a.wheelSpin||0)+o.v*e/.31,s.hidden=Math.abs(a.s-n.player.state.s)>3500||r.remote.age>4,r.finished&&!s.finished&&(s.finished=!0,s.finishTime=r.finishTime)}}var Qx=new en(38,16/9,2,12e3);function ev(n){let e=At==="race"&&Ie.pois?Ie.pois.current(n.s):null,t=e?Dt.poiViewRect?.():null;if(!t||t.width<8){Dt.setPoiLive?.(!1);return}let i=Ie.playerBike.w,s=Ie.pois.frame(e,i.x,i.z,Qx,t.width/t.height,er);if(Dt.setPoiLive?.(s),!s)return;let r=nv.getBoundingClientRect(),o=t.left-r.left,a=r.bottom-t.bottom,l=jt.shadowMap.autoUpdate,c=jt.autoClear;Ie.pois.beacons(!1),Ie.pois.update(0,er,n.s),Ie.pois.events.length=0,jt.shadowMap.autoUpdate=!1,jt.autoClear=!1,jt.setRenderTarget(null),jt.setViewport(o,a,t.width,t.height),jt.setScissor(o,a,t.width,t.height),jt.setScissorTest(!0),jt.clear(!0,!0,!1),jt.render(Vt,Qx),jt.setScissorTest(!1),jt.setViewport(0,0,r.width,r.height),jt.autoClear=c,jt.shadowMap.autoUpdate=l,Ie.pois.beacons(!0)}var hv="";function u2(n){if(!(At!=="race"||Ie.autoAI))for(let e of n){let t=!zn.pois.includes(e.id);t&&(zn.pois.push(e.id),Ia(zn)),hv=e.id,ht.play("photo"),Dt.flash(t?`CARTE POSTALE \xB7 ${zn.pois.length} / ${Tr.length}`:"CARTE POSTALE",1600),hu(t?6:2)}}var zn=Qg(),gs=null;function fv(n){let e=Et.metas[Et.splits.length],t=Et.splits.length===0,i=tx(zn,e.id+(t?":g":":r"),n-Et.splitStart);return Et.splitStart=n,Et.splits.push({name:e.subtitle,...i}),Ia(zn),i}var Ar=0;function hu(n){if(!(!lt||At!=="race"||!Ie?.items))for(lt.xp=(lt.xp||0)+n,lt.level=lt.level||0;lt.xp>=Zc(lt.level);)lt.xp-=Zc(lt.level),lt.level+=1,Ar+=1,Dt.flash(`NIVEAU ${lt.level+1}`,900),ht.play("level")}function h2(){if(Ar=Math.max(0,Ar-1),!lt||!Ie)return;lt.offers=(lt.offers||0)+1;let n=Tc({...lt,stageIndex:"n"+lt.offers},lt.real?ix:null);if(!n.length){Ar=0;return}let e=t=>{if(!Ac(lt,t.id))return;ht.play("pick");let i=Ie.race.player;if(i){let s=i.stats.boostCharges;Object.assign(i.stats,Hs(lt)),i.stats.boostCharges>s&&(i.state.boostCharges+=i.stats.boostCharges-s)}Dt.flash(`${t.icon||""} ${t.name.toUpperCase()}`,1800)};if(Ie.autoAI&&!Mn.has("pick")){e(n[0]);return}gs=gs||sx(),gs.show(n,e,9)}function f2(n){let e=fv(n.time);Et.index+=1;let t=Et.metas[Et.index];Dt.flash(`SECTION ${Nd(e.time)}${e.delta===null?"":" ("+ex(e.delta)+")"}${e.record&&e.best!==null?" \xB7 RECORD":""} \u2014 ${t.subtitle.split(" \xB7 ")[0].toUpperCase()}`,3200),Ar+=1}function dv(){let n=innerWidth,e=innerHeight;jt.setSize(n,e,!1),Bn.aspect=n/e,Bn.updateProjectionMatrix(),Ie?.post.setSize(n,e)}addEventListener("resize",dv);function qa(n){At=n,ep=0}var lt=null,Bo=Uf(),ip=null;function d2(){if(qa("finish"),gs?.hide(),Ar=0,Et&&lt){let n=Ie.race.player.finishTime??Ie.race.time,e=fv(n),t=!!yi&&Et.metas.length===yi.stages.length,i=t?nx(zn,n):null;zn.finishes+=1,Ia(zn),lt.summary={splits:Et.splits,total:i,time:n,full:t,last:e}}if(Dt.flash(`ARRIV\xC9E \u2014 ${Ie.race.player.position}${Ie.race.player.position===1?"er":"e"}`,2200),ht.play(Ie.race.player.position<=3?"win":"lose"),ht.stopMusic?.(),setTimeout(()=>{At!=="race"&&ht.startMusic?.("menu")},3200),Gt){let n=performance.now(),e=()=>Ie.race.riders.some(i=>i.remote&&!i.finished&&!i.dnf),t=()=>{if(At==="finish"){if(!e()||performance.now()-n>12e4){ip?.();return}performance.now()-n>3e3&&Dt.flash("EN ATTENTE DES AUTRES JOUEURS\u2026",1100),setTimeout(t,1e3)}};setTimeout(t,3200);return}setTimeout(()=>ip?.(),3200)}async function tv(){Et=null,qi&&(qi.style.display="none"),zo?.hide(),gs?.hide();let n=wc(Ec("ATTRACT"));for(let t of n)t.stats=Hs({upgrades:[]});let e=In?In.index.sections[Math.min(2,In.index.sections.length-1)].s0+9e3:0;In&&await $f(Xa,In.index,e,1).catch(()=>{}),rv({trackSeed:In?"REAL:"+In.index.id:"ATTRACT-"+Rc(),weatherId:In?"sicily":"sunset",laps:In?1:99,riders:n,autopilot:!0,realData:!!In,startS:e}),Dt.hide(),qa("attract")}async function p2(){if(await rx().catch(n=>console.warn("Mod\xE8le de moto indisponible, repli sur le mod\xE8le proc\xE9dural :",n)),!Mn.has("noreal")){let[n,e]=await Promise.all([fetch(Xa+"index.json").then(t=>t.ok?t.json():null).catch(()=>null),fetch(Xa+"track.json").then(t=>t.ok?t.json():null).catch(()=>null)]);if(n&&e&&(In={index:n,track:ig({...n,...e})},yi={title:n.title,roads:n.roads,stages:n.sections}),yi){Tr=await Kg(op);let t=await fetch("assets/v3/props/index.json").then(s=>s.ok?s.json():[]).catch(()=>[]);await Promise.all(sg.filter(s=>t.includes(s)).map(s=>fetch(`assets/v3/props/${s}.json`).then(r=>r.ok?r.json():null).then(r=>{r&&(sv[s]=r)}).catch(()=>{})));let i=document.createElement("div");i.textContent="\xA9 contributeurs OpenStreetMap \xB7 relief Terrarium (Mapzen) \xB7 Sentinel-2 cloudless 2016 par EOX (CC BY 4.0)",i.style.cssText="position:fixed;left:50%;bottom:0.6vmin;transform:translateX(-50%);font:1.35vmin Arial,sans-serif;color:rgba(255,255,255,.72);text-shadow:0 1px 2px #000;pointer-events:none;z-index:40;white-space:nowrap",document.body.appendChild(i)}}for(await tv(),document.getElementById("boot").remove(),requestAnimationFrame(cv);;){let n=Mn.get("seed"),e=Number(Mn.get("stage"))||0;if(!n){let s=await Xi.showTitle({dailySeed:Rc(),meta:Bo,route:yi,records:zn});if(s.multi){let r=yi?await Rg(Xi.mount,yi):null;if(!r)continue;Gt={session:r.session,directory:r.directory,sentFinish:!1},n="MP-"+r.session.code,e=r.stage}else n=s.seed,s.stage&&(e=s.stage)}if(ht.resume(),lt=Ec(n),yi){let s=Math.floor(e)-1;lt.real=!0,s>0&&s<yi.stages.length||(s=0);let r=yi.stages.slice(s),o=r.reduce((a,l)=>a+l.length,0)/1e3;lt.stages=[{name:yi.title,subtitle:`${yi.roads} \xB7 ${o.toFixed(0)} km d'une traite`,trackSeed:"REAL:"+r[0].id,weather:"sicily",laps:1,real:r}]}for(;!Ma(lt);){let s=lt.stages[lt.stageIndex],r=Hs(lt),o=wc(lt).map(c=>({...c,stats:c.isPlayer?r:Hs({upgrades:[]})}));if(Gt&&s.real){lt.points={},lt.names={};let c=o.find(h=>h.isPlayer);o=Gt.session.roster().map(h=>h.me?{...c,name:h.name,color:h.color,accent:h.accent}:{id:h.id,name:h.name,color:h.color,accent:h.accent,isPlayer:!1,remote:!0,persona:null,stats:Hs({upgrades:[]})});for(let h of o)lt.points[h.id]=0,lt.names[h.id]=h.name}Xi.hideAll();let a=0;Et=null,s.real&&(Dt.flash?.("CHARGEMENT\u2026"),a=s.real[0].s0,await $f(Xa,In.index,a,1).catch(()=>{}),Et={metas:s.real,index:0,riders:o,autopilot:Mn.has("auto"),weatherId:Mn.get("weather")||s.weather,splits:[],splitStart:0},zn.runs+=1,Ia(zn),Mn.has("notraffic")||(Et.traffic=ug({rng:ni("trafic|"+n+"|"+zn.runs),count:40,density:2.6}),zo=zo||Cg(Vt,40))),rv({trackSeed:s.trackSeed,weatherId:Mn.get("weather")||s.weather,laps:s.laps,riders:o,autopilot:Mn.has("auto"),realData:!!s.real,startS:a}),qa("intro"),ht.setRain(Ie.weather.rain||0),!Mn.has("auto")&&!Gt&&await Xi.showStageIntro({stage:s,index:lt.stageIndex+1,total:lt.stages.length,standings:bo(lt),weather:Ie.weather}),Xi.hideAll(),Yi.snap(ap()),Dt.show(),qa("race"),await new Promise(c=>{ip=c}),Dt.hide(),ht.setEngine(.1,0),ht.setWind(0),ht.setSkid(0);let l=Ie.race.results();if(Gt){let c=new Set(Ie.race.riders.filter(h=>h.dnf).map(h=>h.id));for(let h of l)c.has(h.id)&&(h.time=null);l.sort((h,u)=>(h.time===null)-(u.time===null)||h.position-u.position),l.forEach((h,u)=>{h.position=u+1}),qi&&(qi.style.display="none")}if(Df(lt,l),await Xi.showResults({results:l,standings:bo(lt),stage:s}),!Ma(lt)){let c=Tc(lt),h=lt.upgrades.map(f=>gr.find(p=>p.id===f)).filter(Boolean),u=await Xi.showUpgradeChoice({choices:c,index:lt.stageIndex,total:lt.stages.length,owned:h});Ac(lt,u)}}let t=bo(lt),i=t.findIndex(s=>s.isPlayer)+1;Bo=Ff(Bo,lt)||Bo,Of(Bo),qa("menu"),await Xi.showRunEnd({standings:t,playerPosition:i,run:lt,meta:Bo}),Xi.hideAll(),Gt&&(Gt.directory?.close(),Gt.session.leave(),Gt=null),Mn.delete("seed"),Mn.delete("stage"),await tv()}}p2().catch(n=>{console.error(n);let e=document.getElementById("boot")||document.body.appendChild(Object.assign(document.createElement("div"),{id:"boot"}));e.className="err",e.textContent=`Erreur de d\xE9marrage :
`+(n?.stack||n)});
