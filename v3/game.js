var lx=Object.defineProperty;var cx=(n,e)=>{for(var t in e)lx(n,t,{get:e[t],enumerable:!0})};var ux=0,Pd=1,hx=2;var Ul=1,fx=2,Xi=3,Ri=0,Qt=1,Pt=2,nn=0,Vr=1,vs=2,Id=3,Ld=4,ia=5,Fn=100,dx=101,px=102,mx=103,gx=104,co=200,Ph=201,xx=202,vx=203,vu=204,Yo=205,Fl=206,yx=207,Ol=208,_x=209,Mx=210,bx=211,Sx=212,Tx=213,wx=214,yu=0,_u=1,Mu=2,qr=3,bu=4,Su=5,Tu=6,wu=7,Ih=0,Ex=1,Ax=2,xs=0,Lh=1,Dh=2,Nh=3,sa=4,Rx=5,Uh=6,Fh=7,Dd="attached",Cx="detached",jp=300,Yr=301,$r=302,Eu=303,Au=304,Bl=306,Pn=1e3,qi=1001,$o=1002,Kt=1003,Oh=1004;var kr=1005;var On=1006,Go=1007;var ti=1008;var Mi=1009,Jp=1010,Qp=1011,Zo=1012,Bh=1013,nr=1014,yi=1015,un=1016,zh=1017,kh=1018,ys=1020,em=35902,tm=1021,nm=1022,Bn=1023,im=1024,sm=1025,Gr=1026,_s=1027,Hh=1028,Vh=1029,rm=1030,Gh=1031;var Wh=1033,ll=33776,cl=33777,ul=33778,hl=33779,Ru=35840,Cu=35841,Pu=35842,Iu=35843,Lu=36196,Du=37492,Nu=37496,Uu=37808,Fu=37809,Ou=37810,Bu=37811,zu=37812,ku=37813,Hu=37814,Vu=37815,Gu=37816,Wu=37817,Xu=37818,qu=37819,Yu=37820,$u=37821,fl=36492,Zu=36494,Ku=36495,om=36283,ju=36284,Ju=36285,Qu=36286;var Zr=2300,Kr=2301,zc=2302,Nd=2400,Ud=2401,Fd=2402,Px=2500;var am=0,zl=1,ra=2,Ix=3200,Lx=3201;var kl=0,Dx=1,ps="",Rt="srgb",Sn="srgb-linear",Hl="linear",wt="srgb";var Mr=7680;var Od=519,Nx=512,Ux=513,Fx=514,lm=515,Ox=516,Bx=517,zx=518,kx=519,eh=35044,Pi=35048;var Bd="300 es",Yi=2e3,dl=2001,Ms=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zd=1234567,Wo=Math.PI/180,jr=180/Math.PI;function _i(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function _n(n,e,t){return Math.max(e,Math.min(t,n))}function Xh(n,e){return(n%e+e)%e}function Hx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Vx(n,e,t){return n!==e?(t-n)/(e-n):0}function Xo(n,e,t){return(1-t)*n+t*e}function Gx(n,e,t,i){return Xo(n,e,1-Math.exp(-t*i))}function Wx(n,e=1){return e-Math.abs(Xh(n,e*2)-e)}function Xx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function qx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Yx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function $x(n,e){return n+Math.random()*(e-n)}function Zx(n){return n*(.5-Math.random())}function Kx(n){n!==void 0&&(zd=n);let e=zd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jx(n){return n*Wo}function Jx(n){return n*jr}function Qx(n){return(n&n-1)===0&&n!==0}function ev(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function tv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function nv(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var cm={DEG2RAD:Wo,RAD2DEG:jr,generateUUID:_i,clamp:_n,euclideanModulo:Xh,mapLinear:Hx,inverseLerp:Vx,lerp:Xo,damp:Gx,pingpong:Wx,smoothstep:Xx,smootherstep:qx,randInt:Yx,randFloat:$x,randFloatSpread:Zx,seededRandom:Kx,degToRad:jx,radToDeg:Jx,isPowerOfTwo:Qx,ceilPowerOfTwo:ev,floorPowerOfTwo:tv,setQuaternionFromProperEuler:nv,normalize:At,denormalize:vi},$e=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(_n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ut=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],x=s[0],m=s[3],d=s[6],S=s[1],M=s[4],_=s[7],E=s[2],T=s[5],v=s[8];return r[0]=o*x+a*S+l*E,r[3]=o*m+a*M+l*T,r[6]=o*d+a*_+l*v,r[1]=c*x+u*S+h*E,r[4]=c*m+u*M+h*T,r[7]=c*d+u*_+h*v,r[2]=f*x+p*S+g*E,r[5]=f*m+p*M+g*T,r[8]=f*d+p*_+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=t*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kc.makeScale(e,t)),this}rotate(e){return this.premultiply(kc.makeRotation(-e)),this}translate(e,t){return this.premultiply(kc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kc=new ut;function um(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ko(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function iv(){let n=Ko("canvas");return n.style.display="block",n}var kd={};function Ho(n){n in kd||(kd[n]=!0,console.warn(n))}function sv(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function rv(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ov(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var dt={enabled:!0,workingColorSpace:Sn,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===wt&&(n.r=$i(n.r),n.g=$i(n.g),n.b=$i(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===wt&&(n.r=Wr(n.r),n.g=Wr(n.g),n.b=Wr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ps?Hl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function $i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Hd=[.64,.33,.3,.6,.15,.06],Vd=[.2126,.7152,.0722],Gd=[.3127,.329],Wd=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xd=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);dt.define({[Sn]:{primaries:Hd,whitePoint:Gd,transfer:Hl,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:Vd,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:Hd,whitePoint:Gd,transfer:wt,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:Vd,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}});var br,th=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{br===void 0&&(br=Ko("canvas")),br.width=e.width,br.height=e.height;let i=br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=br}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ko("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$i(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor($i(t[i]/255)*255):t[i]=$i(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},av=0,pl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Hc(s[o].image)):r.push(Hc(s[o]))}else r=Hc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Hc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?th.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lv=0,ln=class n extends Ms{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=qi,s=qi,r=On,o=ti,a=Bn,l=Mi,c=n.DEFAULT_ANISOTROPY,u=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=_i(),this.name="",this.source=new pl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pn:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case $o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pn:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case $o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=jp;ln.DEFAULT_ANISOTROPY=1;var _t=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,_=(p+1)/2,E=(d+1)/2,T=(u+f)/4,v=(h+x)/4,w=(g+m)/4;return M>_&&M>E?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=T/i,r=v/i):_>E?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=T/s,r=w/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=v/r,s=w/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-x)/S,this.z=(f-u)/S,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nh=class extends Ms{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new ln(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new pl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends nh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ml=class extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ih=class extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==p||u!==g){let m=1-a,d=l*f+c*p+u*g+h*x,S=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let E=Math.sqrt(M),T=Math.atan2(E,d*S);m=Math.sin(m*T)/E,a=Math.sin(a*T)/E}let _=a*S;if(l=l*m+f*_,c=c*m+p*_,u=u*m+g*_,h=h*m+x*_,m===1-a){let E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){let p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_n(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(_n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vc=new V,qd=new sn,ni=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(r,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),La.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),La.copy(i.boundingBox)),La.applyMatrix4(e.matrixWorld),this.union(La)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),Da.subVectors(this.max,Po),Sr.subVectors(e.a,Po),Tr.subVectors(e.b,Po),wr.subVectors(e.c,Po),ls.subVectors(Tr,Sr),cs.subVectors(wr,Tr),$s.subVectors(Sr,wr);let t=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-$s.z,$s.y,ls.z,0,-ls.x,cs.z,0,-cs.x,$s.z,0,-$s.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-$s.y,$s.x,0];return!Gc(t,Sr,Tr,wr,Da)||(t=[1,0,0,0,1,0,0,0,1],!Gc(t,Sr,Tr,wr,Da))?!1:(Na.crossVectors(ls,cs),t=[Na.x,Na.y,Na.z],Gc(t,Sr,Tr,wr,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},zi=[new V,new V,new V,new V,new V,new V,new V,new V],pi=new V,La=new ni,Sr=new V,Tr=new V,wr=new V,ls=new V,cs=new V,$s=new V,Po=new V,Da=new V,Na=new V,Zs=new V;function Gc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Zs.fromArray(n,r);let a=s.x*Math.abs(Zs.x)+s.y*Math.abs(Zs.y)+s.z*Math.abs(Zs.z),l=e.dot(Zs),c=t.dot(Zs),u=i.dot(Zs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var cv=new ni,Io=new V,Wc=new V,Xn=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):cv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);let t=Io.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Io,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Wc)),this.expandByPoint(Io.copy(e.center).sub(Wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ki=new V,Xc=new V,Ua=new V,us=new V,qc=new V,Fa=new V,Yc=new V,Jr=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Xc.copy(e).add(t).multiplyScalar(.5),Ua.copy(t).sub(e).normalize(),us.copy(this.origin).sub(Xc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ua),a=us.dot(this.direction),l=-us.dot(Ua),c=us.lengthSq(),u=Math.abs(1-o*o),h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Xc).addScaledVector(Ua,f),p}intersectSphere(e,t){ki.subVectors(e.center,this.origin);let i=ki.dot(this.direction),s=ki.dot(ki)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,i,s,r){qc.subVectors(t,e),Fa.subVectors(i,e),Yc.crossVectors(qc,Fa);let o=this.direction.dot(Yc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;us.subVectors(this.origin,e);let l=a*this.direction.dot(Fa.crossVectors(us,Fa));if(l<0)return null;let c=a*this.direction.dot(qc.cross(us));if(c<0||l+c>o)return null;let u=-a*us.dot(Yc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ze=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,f,p,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,p,g,x,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,p,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Er.setFromMatrixColumn(e,0).length(),r=1/Er.setFromMatrixColumn(e,1).length(),o=1/Er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,p=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,p=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,p=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,p=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uv,e,hv)}lookAt(e,t,i){let s=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),hs.crossVectors(i,Gn),hs.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),hs.crossVectors(i,Gn)),hs.normalize(),Oa.crossVectors(Gn,hs),s[0]=hs.x,s[4]=Oa.x,s[8]=Gn.x,s[1]=hs.y,s[5]=Oa.y,s[9]=Gn.y,s[2]=hs.z,s[6]=Oa.z,s[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],d=i[14],S=i[3],M=i[7],_=i[11],E=i[15],T=s[0],v=s[4],w=s[8],y=s[12],b=s[1],A=s[5],D=s[9],O=s[13],L=s[2],F=s[6],B=s[10],Y=s[14],W=s[3],H=s[7],ae=s[11],ve=s[15];return r[0]=o*T+a*b+l*L+c*W,r[4]=o*v+a*A+l*F+c*H,r[8]=o*w+a*D+l*B+c*ae,r[12]=o*y+a*O+l*Y+c*ve,r[1]=u*T+h*b+f*L+p*W,r[5]=u*v+h*A+f*F+p*H,r[9]=u*w+h*D+f*B+p*ae,r[13]=u*y+h*O+f*Y+p*ve,r[2]=g*T+x*b+m*L+d*W,r[6]=g*v+x*A+m*F+d*H,r[10]=g*w+x*D+m*B+d*ae,r[14]=g*y+x*O+m*Y+d*ve,r[3]=S*T+M*b+_*L+E*W,r[7]=S*v+M*A+_*F+E*H,r[11]=S*w+M*D+_*B+E*ae,r[15]=S*y+M*O+_*Y+E*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*p-i*l*p)+x*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+d*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],S=h*m*c-x*f*c+x*l*p-a*m*p-h*l*d+a*f*d,M=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,_=u*x*c-g*h*c+g*a*p-o*x*p-u*a*d+o*h*d,E=g*h*l-u*x*l-g*a*f+o*x*f+u*a*m-o*h*m,T=t*S+i*M+s*_+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let v=1/T;return e[0]=S*v,e[1]=(x*f*r-h*m*r-x*s*p+i*m*p+h*s*d-i*f*d)*v,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*d+i*l*d)*v,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*p-i*l*p)*v,e[4]=M*v,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*v,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*v,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*v,e[8]=_*v,e[9]=(g*h*r-u*x*r-g*i*p+t*x*p+u*i*d-t*h*d)*v,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*d+t*a*d)*v,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*v,e[12]=E*v,e[13]=(u*x*s-g*h*s+g*i*f-t*x*f-u*i*m+t*h*m)*v,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*m-t*a*m)*v,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*v,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,x=o*u,m=o*h,d=a*h,S=l*c,M=l*u,_=l*h,E=i.x,T=i.y,v=i.z;return s[0]=(1-(x+d))*E,s[1]=(p+_)*E,s[2]=(g-M)*E,s[3]=0,s[4]=(p-_)*T,s[5]=(1-(f+d))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+M)*v,s[9]=(m-S)*v,s[10]=(1-(f+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Er.set(s[0],s[1],s[2]).length(),o=Er.set(s[4],s[5],s[6]).length(),a=Er.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mi.copy(this);let c=1/r,u=1/o,h=1/a;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=u,mi.elements[5]*=u,mi.elements[6]*=u,mi.elements[8]*=h,mi.elements[9]*=h,mi.elements[10]*=h,t.setFromRotationMatrix(mi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Yi){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),p,g;if(a===Yi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===dl)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Yi){let l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,p=(i+s)*u,g,x;if(a===Yi)g=(o+r)*h,x=-2*h;else if(a===dl)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Er=new V,mi=new Ze,uv=new V(0,0,0),hv=new V(1,1,1),hs=new V,Oa=new V,Gn=new V,Yd=new Ze,$d=new sn,bi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(_n(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_n(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $d.setFromEuler(this),this.setFromQuaternion($d,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER="XYZ";var gl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fv=0,Zd=new V,Ar=new sn,Hi=new Ze,Ba=new V,Lo=new V,dv=new V,pv=new sn,Kd=new V(1,0,0),jd=new V(0,1,0),Jd=new V(0,0,1),Qd={type:"added"},mv={type:"removed"},Rr={type:"childadded",child:null},$c={type:"childremoved",child:null},Ut=class n extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new V,t=new bi,i=new sn,s=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ut}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(Kd,e)}rotateY(e){return this.rotateOnAxis(jd,e)}rotateZ(e){return this.rotateOnAxis(Jd,e)}translateOnAxis(e,t){return Zd.copy(e).applyQuaternion(this.quaternion),this.position.add(Zd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kd,e)}translateY(e){return this.translateOnAxis(jd,e)}translateZ(e){return this.translateOnAxis(Jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ba.copy(e):Ba.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Lo,Ba,this.up):Hi.lookAt(Ba,Lo,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),Ar.setFromRotationMatrix(Hi),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qd),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mv),$c.child=e,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qd),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,dv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,pv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new V(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gi=new V,Vi=new V,Zc=new V,Gi=new V,Cr=new V,Pr=new V,ep=new V,Kc=new V,jc=new V,Jc=new V,Qc=new _t,eu=new _t,tu=new _t,ms=class n{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),gi.subVectors(e,t),s.cross(gi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){gi.subVectors(s,t),Vi.subVectors(i,t),Zc.subVectors(e,t);let o=gi.dot(gi),a=gi.dot(Vi),l=gi.dot(Zc),c=Vi.dot(Vi),u=Vi.dot(Zc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gi.x),l.addScaledVector(o,Gi.y),l.addScaledVector(a,Gi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Qc.setScalar(0),eu.setScalar(0),tu.setScalar(0),Qc.fromBufferAttribute(e,t),eu.fromBufferAttribute(e,i),tu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Qc,r.x),o.addScaledVector(eu,r.y),o.addScaledVector(tu,r.z),o}static isFrontFacing(e,t,i,s){return gi.subVectors(i,t),Vi.subVectors(e,t),gi.cross(Vi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),gi.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Cr.subVectors(s,i),Pr.subVectors(r,i),Kc.subVectors(e,i);let l=Cr.dot(Kc),c=Pr.dot(Kc);if(l<=0&&c<=0)return t.copy(i);jc.subVectors(e,s);let u=Cr.dot(jc),h=Pr.dot(jc);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Cr,o);Jc.subVectors(e,r);let p=Cr.dot(Jc),g=Pr.dot(Jc);if(g>=0&&p<=g)return t.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Pr,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return ep.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(ep,a);let d=1/(m+x+f);return o=x*d,a=f*d,t.copy(i).addScaledVector(Cr,o).addScaledVector(Pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},za={h:0,s:0,l:0};function nu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ie=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=dt.workingColorSpace){if(e=Xh(e,1),t=_n(t,0,1),i=_n(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=nu(o,r,e+1/3),this.g=nu(o,r,e),this.b=nu(o,r,e-1/3)}return dt.toWorkingColorSpace(this,s),this}setStyle(e,t=Rt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let i=hm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return dt.fromWorkingColorSpace(yn.copy(this),e),Math.round(_n(yn.r*255,0,255))*65536+Math.round(_n(yn.g*255,0,255))*256+Math.round(_n(yn.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(yn.copy(this),t);let i=yn.r,s=yn.g,r=yn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Rt){dt.fromWorkingColorSpace(yn.copy(this),e);let t=yn.r,i=yn.g,s=yn.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+t,fs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fs),e.getHSL(za);let i=Xo(fs.h,za.h,t),s=Xo(fs.s,za.s,t),r=Xo(fs.l,za.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new Ie;Ie.NAMES=hm;var gv=0,Mn=class extends Ms{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=_i(),this.name="",this.blending=Vr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vu,this.blendDst=Yo,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vu&&(i.blendSrc=this.blendSrc),this.blendDst!==Yo&&(i.blendDst=this.blendDst),this.blendEquation!==Fn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Od&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Yt=class extends Mn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new V,ka=new $e,pt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=eh,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ka.fromBufferAttribute(this,t),ka.applyMatrix3(e),this.setXY(t,ka.x,ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eh&&(e.usage=this.usage),e}};var xl=class extends pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var vl=class extends pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ot=class extends pt{constructor(e,t,i){super(new Float32Array(e),t,i)}},xv=0,ei=new Ze,iu=new Ut,Ir=new V,Wn=new ni,Do=new ni,an=new V,mt=class n extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(um(e)?vl:xl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ut().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return iu.lookAt(e),iu.updateMatrix(),this.applyMatrix4(iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ot(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Wn.min,Do.min),Wn.expandByPoint(an),an.addVectors(Wn.max,Do.max),Wn.expandByPoint(an)):(Wn.expandByPoint(Do.min),Wn.expandByPoint(Do.max))}Wn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)an.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(an));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)an.fromBufferAttribute(a,c),l&&(Ir.fromBufferAttribute(e,c),an.add(Ir)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<i.count;w++)a[w]=new V,l[w]=new V;let c=new V,u=new V,h=new V,f=new $e,p=new $e,g=new $e,x=new V,m=new V;function d(w,y,b){c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,b),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,b),u.sub(c),h.sub(c),p.sub(f),g.sub(f);let A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(A),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(A),a[w].add(x),a[y].add(x),a[b].add(x),l[w].add(m),l[y].add(m),l[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let w=0,y=S.length;w<y;++w){let b=S[w],A=b.start,D=b.count;for(let O=A,L=A+D;O<L;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let M=new V,_=new V,E=new V,T=new V;function v(w){E.fromBufferAttribute(s,w),T.copy(E);let y=a[w];M.copy(y),M.sub(E.multiplyScalar(E.dot(y))).normalize(),_.crossVectors(T,y);let A=_.dot(l[w])<0?-1:1;o.setXYZW(w,M.x,M.y,M.z,A)}for(let w=0,y=S.length;w<y;++w){let b=S[w],A=b.start,D=b.count;for(let O=A,L=A+D;O<L;O+=3)v(e.getX(O+0)),v(e.getX(O+1)),v(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,h=new V;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new pt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tp=new Ze,Ks=new Jr,Ha=new Xn,np=new V,Va=new V,Ga=new V,Wa=new V,su=new V,Xa=new V,ip=new V,qa=new V,it=class extends Ut{constructor(e=new mt,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Xa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(su.fromBufferAttribute(h,e),o?Xa.addScaledVector(su,u):Xa.addScaledVector(su.sub(t),u))}t.add(Xa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(r),Ks.copy(e.ray).recast(e.near),!(Ha.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(Ha,np)===null||Ks.origin.distanceToSquared(np)>(e.far-e.near)**2))&&(tp.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(tp),!(i.boundingBox!==null&&Ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ks)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=S,E=M;_<E;_+=3){let T=a.getX(_),v=a.getX(_+1),w=a.getX(_+2);s=Ya(this,d,e,i,c,u,h,T,v,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let S=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=Ya(this,o,e,i,c,u,h,S,M,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=S,E=M;_<E;_+=3){let T=_,v=_+1,w=_+2;s=Ya(this,d,e,i,c,u,h,T,v,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let S=m,M=m+1,_=m+2;s=Ya(this,o,e,i,c,u,h,S,M,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function vv(n,e,t,i,s,r,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ri,a),l===null)return null;qa.copy(a),qa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(qa);return c<t.near||c>t.far?null:{distance:c,point:qa.clone(),object:n}}function Ya(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Va),n.getVertexPosition(l,Ga),n.getVertexPosition(c,Wa);let u=vv(n,e,t,i,Va,Ga,Wa,ip);if(u){let h=new V;ms.getBarycoord(ip,Va,Ga,Wa,h),s&&(u.uv=ms.getInterpolatedAttribute(s,a,l,c,h,new $e)),r&&(u.uv1=ms.getInterpolatedAttribute(r,a,l,c,h,new $e)),o&&(u.normal=ms.getInterpolatedAttribute(o,a,l,c,h,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new V,materialIndex:0};ms.getNormal(Va,Ga,Wa,f.normal),u.face=f,u.barycoord=h}return u}var cn=class n extends mt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(h,2));function g(x,m,d,S,M,_,E,T,v,w,y){let b=_/v,A=E/w,D=_/2,O=E/2,L=T/2,F=v+1,B=w+1,Y=0,W=0,H=new V;for(let ae=0;ae<B;ae++){let ve=ae*A-O;for(let Se=0;Se<F;Se++){let ge=Se*b-D;H[x]=ge*S,H[m]=ve*M,H[d]=L,c.push(H.x,H.y,H.z),H[x]=0,H[m]=0,H[d]=T>0?1:-1,u.push(H.x,H.y,H.z),h.push(Se/v),h.push(1-ae/w),Y+=1}}for(let ae=0;ae<w;ae++)for(let ve=0;ve<v;ve++){let Se=f+ve+F*ae,ge=f+ve+F*(ae+1),le=f+(ve+1)+F*(ae+1),se=f+(ve+1)+F*ae;l.push(Se,ge,se),l.push(ge,le,se),W+=6}a.addGroup(p,W,y),p+=W,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Qr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Cn(n){let e={};for(let t=0;t<n.length;t++){let i=Qr(n[t]);for(let s in i)e[s]=i[s]}return e}function yv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function fm(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var Tn={clone:Qr,merge:Cn},_v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vt=class extends Mn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_v,this.fragmentShader=Mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qr(e.uniforms),this.uniformsGroups=yv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},yl=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ds=new V,sp=new $e,rp=new $e,Zt=class extends yl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,t){return this.getViewBounds(e,sp,rp),t.subVectors(rp,sp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Wo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lr=-90,Dr=1,sh=class extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zt(Lr,Dr,e,t);s.layers=this.layers,this.add(s);let r=new Zt(Lr,Dr,e,t);r.layers=this.layers,this.add(r);let o=new Zt(Lr,Dr,e,t);o.layers=this.layers,this.add(o);let a=new Zt(Lr,Dr,e,t);a.layers=this.layers,this.add(a);let l=new Zt(Lr,Dr,e,t);l.layers=this.layers,this.add(l);let c=new Zt(Lr,Dr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},_l=class extends ln{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Yr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rh=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new _l(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:On}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cn(5,5,5),r=new vt({name:"CubemapFromEquirect",uniforms:Qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:nn});r.uniforms.tEquirect.value=t;let o=new it(s,r),a=t.minFilter;return t.minFilter===ti&&(t.minFilter=On),new sh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},ru=new V,bv=new V,Sv=new ut,xi=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ru.subVectors(i,t).cross(bv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ru),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Sv.getNormalMatrix(e),s=this.coplanarPoint(ru).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},js=new Xn,$a=new V,jo=class{constructor(e=new xi,t=new xi,i=new xi,s=new xi,r=new xi,o=new xi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],S=s[13],M=s[14],_=s[15];if(i[0].setComponents(l-r,f-c,m-p,_-d).normalize(),i[1].setComponents(l+r,f+c,m+p,_+d).normalize(),i[2].setComponents(l+o,f+u,m+g,_+S).normalize(),i[3].setComponents(l-o,f-u,m-g,_-S).normalize(),i[4].setComponents(l-a,f-h,m-x,_-M).normalize(),t===Yi)i[5].setComponents(l+a,f+h,m+x,_+M).normalize();else if(t===dl)i[5].setComponents(a,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(e){return js.center.set(0,0,0),js.radius=.7071067811865476,js.applyMatrix4(e.matrixWorld),this.intersectsSphere(js)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if($a.x=s.normal.x>0?e.max.x:e.min.x,$a.y=s.normal.y>0?e.max.y:e.min.y,$a.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function dm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Tv(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let x=h[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var zn=class n extends mt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){let S=d*f-o;for(let M=0;M<c;M++){let _=M*h-r;g.push(_,-S,0),x.push(0,0,1),m.push(M/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<a;S++){let M=S+c*d,_=S+c*(d+1),E=S+1+c*(d+1),T=S+1+c*d;p.push(M,_,T),p.push(_,E,T)}this.setIndex(p),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},wv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ev=`#ifdef USE_ALPHAHASH
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
}`,Ty=`
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
#endif`,wy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ey=`#if defined( RE_IndirectDiffuse )
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
#endif`,T_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w_=`uniform sampler2D t2D;
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
}`,E_=`varying vec3 vWorldDirection;
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
}`,ht={alphahash_fragment:wv,alphahash_pars_fragment:Ev,alphamap_fragment:Av,alphamap_pars_fragment:Rv,alphatest_fragment:Cv,alphatest_pars_fragment:Pv,aomap_fragment:Iv,aomap_pars_fragment:Lv,batching_pars_vertex:Dv,batching_vertex:Nv,begin_vertex:Uv,beginnormal_vertex:Fv,bsdfs:Ov,iridescence_fragment:Bv,bumpmap_pars_fragment:zv,clipping_planes_fragment:kv,clipping_planes_pars_fragment:Hv,clipping_planes_pars_vertex:Vv,clipping_planes_vertex:Gv,color_fragment:Wv,color_pars_fragment:Xv,color_pars_vertex:qv,color_vertex:Yv,common:$v,cube_uv_reflection_fragment:Zv,defaultnormal_vertex:Kv,displacementmap_pars_vertex:jv,displacementmap_vertex:Jv,emissivemap_fragment:Qv,emissivemap_pars_fragment:ey,colorspace_fragment:ty,colorspace_pars_fragment:ny,envmap_fragment:iy,envmap_common_pars_fragment:sy,envmap_pars_fragment:ry,envmap_pars_vertex:oy,envmap_physical_pars_fragment:xy,envmap_vertex:ay,fog_vertex:ly,fog_pars_vertex:cy,fog_fragment:uy,fog_pars_fragment:hy,gradientmap_pars_fragment:fy,lightmap_pars_fragment:dy,lights_lambert_fragment:py,lights_lambert_pars_fragment:my,lights_pars_begin:gy,lights_toon_fragment:vy,lights_toon_pars_fragment:yy,lights_phong_fragment:_y,lights_phong_pars_fragment:My,lights_physical_fragment:by,lights_physical_pars_fragment:Sy,lights_fragment_begin:Ty,lights_fragment_maps:wy,lights_fragment_end:Ey,logdepthbuf_fragment:Ay,logdepthbuf_pars_fragment:Ry,logdepthbuf_pars_vertex:Cy,logdepthbuf_vertex:Py,map_fragment:Iy,map_pars_fragment:Ly,map_particle_fragment:Dy,map_particle_pars_fragment:Ny,metalnessmap_fragment:Uy,metalnessmap_pars_fragment:Fy,morphinstance_vertex:Oy,morphcolor_vertex:By,morphnormal_vertex:zy,morphtarget_pars_vertex:ky,morphtarget_vertex:Hy,normal_fragment_begin:Vy,normal_fragment_maps:Gy,normal_pars_fragment:Wy,normal_pars_vertex:Xy,normal_vertex:qy,normalmap_pars_fragment:Yy,clearcoat_normal_fragment_begin:$y,clearcoat_normal_fragment_maps:Zy,clearcoat_pars_fragment:Ky,iridescence_pars_fragment:jy,opaque_fragment:Jy,packing:Qy,premultiplied_alpha_fragment:e_,project_vertex:t_,dithering_fragment:n_,dithering_pars_fragment:i_,roughnessmap_fragment:s_,roughnessmap_pars_fragment:r_,shadowmap_pars_fragment:o_,shadowmap_pars_vertex:a_,shadowmap_vertex:l_,shadowmask_pars_fragment:c_,skinbase_vertex:u_,skinning_pars_vertex:h_,skinning_vertex:f_,skinnormal_vertex:d_,specularmap_fragment:p_,specularmap_pars_fragment:m_,tonemapping_fragment:g_,tonemapping_pars_fragment:x_,transmission_fragment:v_,transmission_pars_fragment:y_,uv_pars_fragment:__,uv_pars_vertex:M_,uv_vertex:b_,worldpos_vertex:S_,background_vert:T_,background_frag:w_,backgroundCube_vert:E_,backgroundCube_frag:A_,cube_vert:R_,cube_frag:C_,depth_vert:P_,depth_frag:I_,distanceRGBA_vert:L_,distanceRGBA_frag:D_,equirect_vert:N_,equirect_frag:U_,linedashed_vert:F_,linedashed_frag:O_,meshbasic_vert:B_,meshbasic_frag:z_,meshlambert_vert:k_,meshlambert_frag:H_,meshmatcap_vert:V_,meshmatcap_frag:G_,meshnormal_vert:W_,meshnormal_frag:X_,meshphong_vert:q_,meshphong_frag:Y_,meshphysical_vert:$_,meshphysical_frag:Z_,meshtoon_vert:K_,meshtoon_frag:j_,points_vert:J_,points_frag:Q_,shadow_vert:e1,shadow_frag:t1,sprite_vert:n1,sprite_frag:i1},Ge={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Ai={basic:{uniforms:Cn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Cn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Cn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Cn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Cn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Cn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Cn([Ge.points,Ge.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Cn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Cn([Ge.common,Ge.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Cn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Cn([Ge.sprite,Ge.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Cn([Ge.common,Ge.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Cn([Ge.lights,Ge.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ai.physical={uniforms:Cn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Za={r:0,b:0,g:0},Js=new bi,s1=new Ze;function r1(n,e,t,i,s,r,o){let a=new Ie(0),l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function x(S){let M=!1,_=g(S);_===null?d(a,l):_&&_.isColor&&(d(_,1),M=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,M){let _=g(M);_&&(_.isCubeTexture||_.mapping===Bl)?(u===void 0&&(u=new it(new cn(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:Qr(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Js.copy(M.backgroundRotation),Js.x*=-1,Js.y*=-1,Js.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(s1.makeRotationFromEuler(Js)),u.material.toneMapped=dt.getTransfer(_.colorSpace)!==wt,(h!==_||f!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,p=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new it(new zn(2,2),new vt({name:"BackgroundMaterial",uniforms:Qr(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=dt.getTransfer(_.colorSpace)!==wt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,p=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,M){S.getRGB(Za,fm(n)),i.buffers.color.setClear(Za.r,Za.g,Za.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(a,l)},render:x,addToRenderList:m}}function o1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(b,A,D,O,L){let F=!1,B=h(O,D,A);r!==B&&(r=B,c(r.object)),F=p(b,O,D,L),F&&g(b,O,D,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,_(b,A,D,O),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function h(b,A,D){let O=D.wireframe===!0,L=i[b.id];L===void 0&&(L={},i[b.id]=L);let F=L[A.id];F===void 0&&(F={},L[A.id]=F);let B=F[O];return B===void 0&&(B=f(l()),F[O]=B),B}function f(b){let A=[],D=[],O=[];for(let L=0;L<t;L++)A[L]=0,D[L]=0,O[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:D,attributeDivisors:O,object:b,attributes:{},index:null}}function p(b,A,D,O){let L=r.attributes,F=A.attributes,B=0,Y=D.getAttributes();for(let W in Y)if(Y[W].location>=0){let ae=L[W],ve=F[W];if(ve===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor)),ae===void 0||ae.attribute!==ve||ve&&ae.data!==ve.data)return!0;B++}return r.attributesNum!==B||r.index!==O}function g(b,A,D,O){let L={},F=A.attributes,B=0,Y=D.getAttributes();for(let W in Y)if(Y[W].location>=0){let ae=F[W];ae===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor));let ve={};ve.attribute=ae,ae&&ae.data&&(ve.data=ae.data),L[W]=ve,B++}r.attributes=L,r.attributesNum=B,r.index=O}function x(){let b=r.newAttributes;for(let A=0,D=b.length;A<D;A++)b[A]=0}function m(b){d(b,0)}function d(b,A){let D=r.newAttributes,O=r.enabledAttributes,L=r.attributeDivisors;D[b]=1,O[b]===0&&(n.enableVertexAttribArray(b),O[b]=1),L[b]!==A&&(n.vertexAttribDivisor(b,A),L[b]=A)}function S(){let b=r.newAttributes,A=r.enabledAttributes;for(let D=0,O=A.length;D<O;D++)A[D]!==b[D]&&(n.disableVertexAttribArray(D),A[D]=0)}function M(b,A,D,O,L,F,B){B===!0?n.vertexAttribIPointer(b,A,D,L,F):n.vertexAttribPointer(b,A,D,O,L,F)}function _(b,A,D,O){x();let L=O.attributes,F=D.getAttributes(),B=A.defaultAttributeValues;for(let Y in F){let W=F[Y];if(W.location>=0){let H=L[Y];if(H===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(H=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(H=b.instanceColor)),H!==void 0){let ae=H.normalized,ve=H.itemSize,Se=e.get(H);if(Se===void 0)continue;let ge=Se.buffer,le=Se.type,se=Se.bytesPerElement,re=le===n.INT||le===n.UNSIGNED_INT||H.gpuType===Bh;if(H.isInterleavedBufferAttribute){let I=H.data,$=I.stride,q=H.offset;if(I.isInstancedInterleavedBuffer){for(let ee=0;ee<W.locationSize;ee++)d(W.location+ee,I.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let ee=0;ee<W.locationSize;ee++)m(W.location+ee);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let ee=0;ee<W.locationSize;ee++)M(W.location+ee,ve/W.locationSize,le,ae,$*se,(q+ve/W.locationSize*ee)*se,re)}else{if(H.isInstancedBufferAttribute){for(let I=0;I<W.locationSize;I++)d(W.location+I,H.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let I=0;I<W.locationSize;I++)m(W.location+I);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let I=0;I<W.locationSize;I++)M(W.location+I,ve/W.locationSize,le,ae,ve*se,ve/W.locationSize*I*se,re)}}else if(B!==void 0){let ae=B[Y];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(W.location,ae);break;case 3:n.vertexAttrib3fv(W.location,ae);break;case 4:n.vertexAttrib4fv(W.location,ae);break;default:n.vertexAttrib1fv(W.location,ae)}}}}S()}function E(){w();for(let b in i){let A=i[b];for(let D in A){let O=A[D];for(let L in O)u(O[L].object),delete O[L];delete A[D]}delete i[b]}}function T(b){if(i[b.id]===void 0)return;let A=i[b.id];for(let D in A){let O=A[D];for(let L in O)u(O[L].object),delete O[L];delete A[D]}delete i[b.id]}function v(b){for(let A in i){let D=i[A];if(D[b.id]===void 0)continue;let O=D[b.id];for(let L in O)u(O[L].object),delete O[L];delete D[b.id]}}function w(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function a1(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,i,1)}function l(c,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function l1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==Bn&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let w=v===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Mi&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==yi&&!w)}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:E,maxSamples:T}}function c1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new xi,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let S=r?0:i,M=S*4,_=d.clippingState||null;l.value=_,_=u(g,f,M,p);for(let E=0;E!==M;++E)_[E]=t[E];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let d=p+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,_=p;M!==x;++M,_+=4)o.copy(h[M]).applyMatrix4(S,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function u1(n){let e=new WeakMap;function t(o,a){return a===Eu?o.mapping=Yr:a===Au&&(o.mapping=$r),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Eu||a===Au)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new rh(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var bs=class extends yl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hr=4,op=[.125,.215,.35,.446,.526,.582],tr=20,ou=new bs,ap=new Ie,au=null,lu=0,cu=0,uu=!1,er=(1+Math.sqrt(5))/2,Nr=1/er,lp=[new V(-er,Nr,0),new V(er,Nr,0),new V(-Nr,0,er),new V(Nr,0,er),new V(0,er,-Nr),new V(0,er,Nr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],eo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){au=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(au,lu,cu),this._renderer.xr.enabled=uu,e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yr||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),au=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:un,format:Bn,colorSpace:Sn,depthBuffer:!1},s=cp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cp(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h1(r)),this._blurMaterial=f1(r,e,t)}return s}_compileMaterial(e){let t=new it(this._lodPlanes[0],e);this._renderer.compile(t,ou)}_sceneToCubeUV(e,t,i,s){let a=new Zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ap),u.toneMapping=xs,u.autoClear=!1;let p=new Yt({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new it(new cn,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(ap),x=!0);for(let d=0;d<6;d++){let S=d%3;S===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):S===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let M=this._cubeSize;Ka(s,S*M,d>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Yr||e.mapping===$r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=up());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new it(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ka(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ou)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=lp[(s-r-1)%lp.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new it(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*tr-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):tr;m>tr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${tr}`);let d=[],S=0;for(let v=0;v<tr;++v){let w=v/x,y=Math.exp(-w*w/2);d.push(y),v===0?S+=y:v<m&&(S+=2*y)}for(let v=0;v<d.length;v++)d[v]=d[v]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;let _=this._sizeLods[s],E=3*_*(s>M-Hr?s-M+Hr:0),T=4*(this._cubeSize-_);Ka(t,E,T,3*_,2*_),l.setRenderTarget(t),l.render(h,ou)}};function h1(n){let e=[],t=[],i=[],s=n,r=n-Hr+1+op.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Hr?l=op[o-n+Hr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,d=1,S=new Float32Array(x*g*p),M=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let T=0;T<p;T++){let v=T%3*2/3-1,w=T>2?0:-1,y=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];S.set(y,x*g*T),M.set(f,m*g*T);let b=[T,T,T,T,T,T];_.set(b,d*g*T)}let E=new mt;E.setAttribute("position",new pt(S,x)),E.setAttribute("uv",new pt(M,m)),E.setAttribute("faceIndex",new pt(_,d)),e.push(E),s>Hr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function cp(n,e,t){let i=new qt(n,e,t);return i.texture.mapping=Bl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ka(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function f1(n,e,t){let i=new Float32Array(tr),s=new V(0,1,0);return new vt({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qh(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function up(){return new vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function hp(){return new vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function qh(){return`

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
	`}function d1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Eu||l===Au,u=l===Yr||l===$r;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new eo(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new eo(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function p1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ho("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function m1(n,e,t,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let x=p[g];for(let m=0,d=x.length;m<d;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){let f=[],p=h.index,g=h.attributes.position,x=0;if(p!==null){let S=p.array;x=p.version;for(let M=0,_=S.length;M<_;M+=3){let E=S[M+0],T=S[M+1],v=S[M+2];f.push(E,T,T,v,v,E)}}else if(g!==void 0){let S=g.array;x=g.version;for(let M=0,_=S.length/3-1;M<_;M+=3){let E=M+0,T=M+1,v=M+2;f.push(E,T,T,v,v,E)}}else return;let m=new(um(f)?vl:xl)(f,1);m.version=x;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function g1(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function h(f,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,x,0,g);let d=0;for(let S=0;S<g;S++)d+=p[S]*x[S];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function x1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function v1(n,e,t){let i=new WeakMap,s=new _t;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let y=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;p===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*E*4*h),v=new ml(T,_,E,h);v.type=yi,v.needsUpdate=!0;let w=M*4;for(let b=0;b<h;b++){let A=m[b],D=d[b],O=S[b],L=_*E*4*b;for(let F=0;F<A.count;F++){let B=F*w;p===!0&&(s.fromBufferAttribute(A,F),T[L+B+0]=s.x,T[L+B+1]=s.y,T[L+B+2]=s.z,T[L+B+3]=0),g===!0&&(s.fromBufferAttribute(D,F),T[L+B+4]=s.x,T[L+B+5]=s.y,T[L+B+6]=s.z,T[L+B+7]=0),x===!0&&(s.fromBufferAttribute(O,F),T[L+B+8]=s.x,T[L+B+9]=s.y,T[L+B+10]=s.z,T[L+B+11]=O.itemSize===4?s.w:1)}}f={count:h,texture:v,size:new $e(_,E)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function y1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var to=class extends ln{constructor(e,t,i,s,r,o,a,l,c,u=Gr){if(u!==Gr&&u!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Gr&&(i=nr),i===void 0&&u===_s&&(i=ys),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},pm=new ln,fp=new to(1,1),mm=new ml,gm=new ih,xm=new _l,dp=[],pp=[],mp=new Float32Array(16),gp=new Float32Array(9),xp=new Float32Array(4);function uo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=dp[s];if(r===void 0&&(r=new Float32Array(s),dp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vl(n,e){let t=pp[e];t===void 0&&(t=new Int32Array(e),pp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function M1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function b1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function S1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function T1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;xp.set(i),n.uniformMatrix2fv(this.addr,!1,xp),on(t,i)}}function w1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;gp.set(i),n.uniformMatrix3fv(this.addr,!1,gp),on(t,i)}}function E1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;mp.set(i),n.uniformMatrix4fv(this.addr,!1,mp),on(t,i)}}function A1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function R1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function C1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function P1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function I1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function L1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function D1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function N1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function U1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(fp.compareFunction=lm,r=fp):r=pm,t.setTexture2D(e||r,s)}function F1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||gm,s)}function O1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||xm,s)}function B1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||mm,s)}function z1(n){switch(n){case 5126:return _1;case 35664:return M1;case 35665:return b1;case 35666:return S1;case 35674:return T1;case 35675:return w1;case 35676:return E1;case 5124:case 35670:return A1;case 35667:case 35671:return R1;case 35668:case 35672:return C1;case 35669:case 35673:return P1;case 5125:return I1;case 36294:return L1;case 36295:return D1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return B1}}function k1(n,e){n.uniform1fv(this.addr,e)}function H1(n,e){let t=uo(e,this.size,2);n.uniform2fv(this.addr,t)}function V1(n,e){let t=uo(e,this.size,3);n.uniform3fv(this.addr,t)}function G1(n,e){let t=uo(e,this.size,4);n.uniform4fv(this.addr,t)}function W1(n,e){let t=uo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function X1(n,e){let t=uo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function q1(n,e){let t=uo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Y1(n,e){n.uniform1iv(this.addr,e)}function $1(n,e){n.uniform2iv(this.addr,e)}function Z1(n,e){n.uniform3iv(this.addr,e)}function K1(n,e){n.uniform4iv(this.addr,e)}function j1(n,e){n.uniform1uiv(this.addr,e)}function J1(n,e){n.uniform2uiv(this.addr,e)}function Q1(n,e){n.uniform3uiv(this.addr,e)}function eM(n,e){n.uniform4uiv(this.addr,e)}function tM(n,e,t){let i=this.cache,s=e.length,r=Vl(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||pm,r[o])}function nM(n,e,t){let i=this.cache,s=e.length,r=Vl(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||gm,r[o])}function iM(n,e,t){let i=this.cache,s=e.length,r=Vl(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||xm,r[o])}function sM(n,e,t){let i=this.cache,s=e.length,r=Vl(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||mm,r[o])}function rM(n){switch(n){case 5126:return k1;case 35664:return H1;case 35665:return V1;case 35666:return G1;case 35674:return W1;case 35675:return X1;case 35676:return q1;case 5124:case 35670:return Y1;case 35667:case 35671:return $1;case 35668:case 35672:return Z1;case 35669:case 35673:return K1;case 5125:return j1;case 36294:return J1;case 36295:return Q1;case 36296:return eM;case 35678:case 36198:case 36298:case 36306:case 35682:return tM;case 35679:case 36299:case 36307:return nM;case 35680:case 36300:case 36308:case 36293:return iM;case 36289:case 36303:case 36311:case 36292:return sM}}var oh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=z1(t.type)}},ah=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rM(t.type)}},lh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},hu=/(\w+)(\])?(\[|\.)?/g;function vp(n,e){n.seq.push(e),n.map[e.id]=e}function oM(n,e,t){let i=n.name,s=i.length;for(hu.lastIndex=0;;){let r=hu.exec(i),o=hu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){vp(t,c===void 0?new oh(a,n,e):new ah(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new lh(a),vp(t,h)),t=h}}}var Xr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);oM(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function yp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var aM=37297,lM=0;function cM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var _p=new ut;function uM(n){dt._getMatrix(_p,dt.workingColorSpace,n);let e=`mat3( ${_p.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case Hl:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Mp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+cM(n.getShaderSource(e),o)}else return s}function hM(n,e){let t=uM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fM(n,e){let t;switch(e){case Lh:t="Linear";break;case Dh:t="Reinhard";break;case Nh:t="Cineon";break;case sa:t="ACESFilmic";break;case Uh:t="AgX";break;case Fh:t="Neutral";break;case Rx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ja=new V;function dM(){dt.getLuminanceCoefficients(ja);let n=ja.x.toFixed(4),e=ja.y.toFixed(4),t=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function mM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vo(n){return n!==""}function bp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(n){return n.replace(xM,yM)}var vM=new Map;function yM(n,e){let t=ht[e];if(t===void 0){let i=vM.get(e);if(i!==void 0)t=ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ch(t)}var _M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tp(n){return n.replace(_M,MM)}function MM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function bM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ul?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function SM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Yr:case $r:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TM(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===$r&&(e="ENVMAP_MODE_REFRACTION"),e}function wM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ih:e="ENVMAP_BLENDING_MULTIPLY";break;case Ex:e="ENVMAP_BLENDING_MIX";break;case Ax:e="ENVMAP_BLENDING_ADD";break}return e}function EM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function AM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=bM(t),c=SM(t),u=TM(t),h=wM(t),f=EM(t),p=pM(t),g=mM(r),x=s.createProgram(),m,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vo).join(`
`),d.length>0&&(d+=`
`)):(m=[wp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),d=[wp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xs?"#define TONE_MAPPING":"",t.toneMapping!==xs?ht.tonemapping_pars_fragment:"",t.toneMapping!==xs?fM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,hM("linearToOutputTexel",t.outputColorSpace),dM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vo).join(`
`)),o=ch(o),o=bp(o,t),o=Sp(o,t),a=ch(a),a=bp(a,t),a=Sp(a,t),o=Tp(o),a=Tp(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=S+m+o,_=S+d+a,E=yp(s,s.VERTEX_SHADER,M),T=yp(s,s.FRAGMENT_SHADER,_);s.attachShader(x,E),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function v(A){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(x).trim(),O=s.getShaderInfoLog(E).trim(),L=s.getShaderInfoLog(T).trim(),F=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,T);else{let Y=Mp(s,E,"vertex"),W=Mp(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+D+`
`+Y+`
`+W)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||L==="")&&(B=!1);B&&(A.diagnostics={runnable:F,programLog:D,vertexShader:{log:O,prefix:m},fragmentShader:{log:L,prefix:d}})}s.deleteShader(E),s.deleteShader(T),w=new Xr(s,x),y=gM(s,x)}let w;this.getUniforms=function(){return w===void 0&&v(this),w};let y;this.getAttributes=function(){return y===void 0&&v(this),y};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,aM)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}var RM=0,uh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new hh(e),t.set(e,i)),i}},hh=class{constructor(e){this.id=RM++,this.code=e,this.usedTimes=0}};function CM(n,e,t,i,s,r,o){let a=new gl,l=new uh,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,b,A,D,O){let L=D.fog,F=O.geometry,B=y.isMeshStandardMaterial?D.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||B),W=Y&&Y.mapping===Bl?Y.image.height:null,H=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let ae=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ve=ae!==void 0?ae.length:0,Se=0;F.morphAttributes.position!==void 0&&(Se=1),F.morphAttributes.normal!==void 0&&(Se=2),F.morphAttributes.color!==void 0&&(Se=3);let ge,le,se,re;if(H){let Ne=Ai[H];ge=Ne.vertexShader,le=Ne.fragmentShader}else ge=y.vertexShader,le=y.fragmentShader,l.update(y),se=l.getVertexShaderID(y),re=l.getFragmentShaderID(y);let I=n.getRenderTarget(),$=n.state.buffers.depth.getReversed(),q=O.isInstancedMesh===!0,ee=O.isBatchedMesh===!0,pe=!!y.map,we=!!y.matcap,Me=!!Y,X=!!y.aoMap,He=!!y.lightMap,ke=!!y.bumpMap,Ue=!!y.normalMap,Ae=!!y.displacementMap,qe=!!y.emissiveMap,Fe=!!y.metalnessMap,U=!!y.roughnessMap,R=y.anisotropy>0,te=y.clearcoat>0,_e=y.dispersion>0,Te=y.iridescence>0,me=y.sheen>0,Ve=y.transmission>0,Le=R&&!!y.anisotropyMap,Oe=te&&!!y.clearcoatMap,Xe=te&&!!y.clearcoatNormalMap,be=te&&!!y.clearcoatRoughnessMap,ue=Te&&!!y.iridescenceMap,Ee=Te&&!!y.iridescenceThicknessMap,Ce=me&&!!y.sheenColorMap,C=me&&!!y.sheenRoughnessMap,z=!!y.specularMap,k=!!y.specularColorMap,K=!!y.specularIntensityMap,N=Ve&&!!y.transmissionMap,ce=Ve&&!!y.thicknessMap,G=!!y.gradientMap,Z=!!y.alphaMap,j=y.alphaTest>0,ie=!!y.alphaHash,ye=!!y.extensions,Be=xs;y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Be=n.toneMapping);let Re={shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:ge,fragmentShader:le,defines:y.defines,customVertexShaderID:se,customFragmentShaderID:re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:ee,batchingColor:ee&&O._colorsTexture!==null,instancing:q,instancingColor:q&&O.instanceColor!==null,instancingMorph:q&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:I===null?n.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Sn,alphaToCoverage:!!y.alphaToCoverage,map:pe,matcap:we,envMap:Me,envMapMode:Me&&Y.mapping,envMapCubeUVHeight:W,aoMap:X,lightMap:He,bumpMap:ke,normalMap:Ue,displacementMap:f&&Ae,emissiveMap:qe,normalMapObjectSpace:Ue&&y.normalMapType===Dx,normalMapTangentSpace:Ue&&y.normalMapType===kl,metalnessMap:Fe,roughnessMap:U,anisotropy:R,anisotropyMap:Le,clearcoat:te,clearcoatMap:Oe,clearcoatNormalMap:Xe,clearcoatRoughnessMap:be,dispersion:_e,iridescence:Te,iridescenceMap:ue,iridescenceThicknessMap:Ee,sheen:me,sheenColorMap:Ce,sheenRoughnessMap:C,specularMap:z,specularColorMap:k,specularIntensityMap:K,transmission:Ve,transmissionMap:N,thicknessMap:ce,gradientMap:G,opaque:y.transparent===!1&&y.blending===Vr&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:j,alphaHash:ie,combine:y.combine,mapUv:pe&&x(y.map.channel),aoMapUv:X&&x(y.aoMap.channel),lightMapUv:He&&x(y.lightMap.channel),bumpMapUv:ke&&x(y.bumpMap.channel),normalMapUv:Ue&&x(y.normalMap.channel),displacementMapUv:Ae&&x(y.displacementMap.channel),emissiveMapUv:qe&&x(y.emissiveMap.channel),metalnessMapUv:Fe&&x(y.metalnessMap.channel),roughnessMapUv:U&&x(y.roughnessMap.channel),anisotropyMapUv:Le&&x(y.anisotropyMap.channel),clearcoatMapUv:Oe&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:C&&x(y.sheenRoughnessMap.channel),specularMapUv:z&&x(y.specularMap.channel),specularColorMapUv:k&&x(y.specularColorMap.channel),specularIntensityMapUv:K&&x(y.specularIntensityMap.channel),transmissionMapUv:N&&x(y.transmissionMap.channel),thicknessMapUv:ce&&x(y.thicknessMap.channel),alphaMapUv:Z&&x(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ue||R),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!F.attributes.uv&&(pe||Z),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:$,skinning:O.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Be,decodeVideoTexture:pe&&y.map.isVideoTexture===!0&&dt.getTransfer(y.map.colorSpace)===wt,decodeVideoTextureEmissive:qe&&y.emissiveMap.isVideoTexture===!0&&dt.getTransfer(y.emissiveMap.colorSpace)===wt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Pt,flipSided:y.side===Qt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ye&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&y.extensions.multiDraw===!0||ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function d(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let A in y.defines)b.push(A),b.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(S(b,y),M(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function S(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function M(y,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){let b=g[y.type],A;if(b){let D=Ai[b];A=Tn.clone(D.uniforms)}else A=y.uniforms;return A}function E(y,b){let A;for(let D=0,O=u.length;D<O;D++){let L=u[D];if(L.cacheKey===b){A=L,++A.usedTimes;break}}return A===void 0&&(A=new AM(n,b,y,r),u.push(A)),A}function T(y){if(--y.usedTimes===0){let b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function v(y){l.remove(y)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:E,releaseProgram:T,releaseShaderCache:v,programs:u,dispose:w}}function PM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function IM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ep(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ap(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,p,g,x,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function a(h,f,p,g,x,m){let d=o(h,f,p,g,x,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,g,x,m){let d=o(h,f,p,g,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||IM),i.length>1&&i.sort(f||Ep),s.length>1&&s.sort(f||Ep)}function u(){for(let h=e,f=n.length;h<f;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function LM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Ap,n.set(i,[o])):s>=r.length?(o=new Ap,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function DM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Ie};break;case"SpotLight":t={position:new V,direction:new V,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function NM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var UM=0;function FM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function OM(n){let e=new DM,t=NM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let s=new V,r=new Ze,o=new Ze;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,S=0,M=0,_=0,E=0,T=0,v=0;c.sort(FM);for(let y=0,b=c.length;y<b;y++){let A=c[y],D=A.color,O=A.intensity,L=A.distance,F=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=D.r*O,h+=D.g*O,f+=D.b*O;else if(A.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(A.sh.coefficients[B],O);v++}else if(A.isDirectionalLight){let B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let Y=A.shadow,W=t.get(A);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=F,i.directionalShadowMatrix[p]=A.shadow.matrix,S++}i.directional[p]=B,p++}else if(A.isSpotLight){let B=e.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(D).multiplyScalar(O),B.distance=L,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,i.spot[x]=B;let Y=A.shadow;if(A.map&&(i.spotLightMap[E]=A.map,E++,Y.updateMatrices(A),A.castShadow&&T++),i.spotLightMatrix[x]=Y.matrix,A.castShadow){let W=t.get(A);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=F,_++}x++}else if(A.isRectAreaLight){let B=e.get(A);B.color.copy(D).multiplyScalar(O),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=B,m++}else if(A.isPointLight){let B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){let Y=A.shadow,W=t.get(A);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=A.shadow.matrix,M++}i.point[g]=B,g++}else if(A.isHemisphereLight){let B=e.get(A);B.skyColor.copy(A.color).multiplyScalar(O),B.groundColor.copy(A.groundColor).multiplyScalar(O),i.hemi[d]=B,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ge.LTC_FLOAT_1,i.rectAreaLTC2=Ge.LTC_FLOAT_2):(i.rectAreaLTC1=Ge.LTC_HALF_1,i.rectAreaLTC2=Ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let w=i.hash;(w.directionalLength!==p||w.pointLength!==g||w.spotLength!==x||w.rectAreaLength!==m||w.hemiLength!==d||w.numDirectionalShadows!==S||w.numPointShadows!==M||w.numSpotShadows!==_||w.numSpotMaps!==E||w.numLightProbes!==v)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=_+E-T,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=v,w.directionalLength=p,w.pointLength=g,w.spotLength=x,w.rectAreaLength=m,w.hemiLength=d,w.numDirectionalShadows=S,w.numPointShadows=M,w.numSpotShadows=_,w.numSpotMaps=E,w.numLightProbes=v,i.version=UM++)}function l(c,u){let h=0,f=0,p=0,g=0,x=0,m=u.matrixWorldInverse;for(let d=0,S=c.length;d<S;d++){let M=c[d];if(M.isDirectionalLight){let _=i.directional[h];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(M.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Rp(n){let e=new OM(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function BM(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Rp(n),e.set(s,[a])):r>=o.length?(a=new Rp(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var fh=class extends Mn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ix,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dh=class extends Mn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},zM=`void main() {
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
}`;function HM(n,e,t){let i=new jo,s=new $e,r=new $e,o=new _t,a=new fh({depthPacking:Lx}),l=new dh,c={},u=t.maxTextureSize,h={[Ri]:Qt,[Qt]:Ri,[Pt]:Pt},f=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:zM,fragmentShader:kM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new mt;g.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new it(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ul;let d=this.type;this.render=function(T,v,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let y=n.getRenderTarget(),b=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),D=n.state;D.setBlending(nn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let O=d!==Xi&&this.type===Xi,L=d===Xi&&this.type!==Xi;for(let F=0,B=T.length;F<B;F++){let Y=T[F],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let H=W.getFrameExtents();if(s.multiply(H),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/H.x),s.x=r.x*H.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/H.y),s.y=r.y*H.y,W.mapSize.y=r.y)),W.map===null||O===!0||L===!0){let ve=this.type!==Xi?{minFilter:Kt,magFilter:Kt}:{};W.map!==null&&W.map.dispose(),W.map=new qt(s.x,s.y,ve),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let ae=W.getViewportCount();for(let ve=0;ve<ae;ve++){let Se=W.getViewport(ve);o.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),D.viewport(o),W.updateMatrices(Y,ve),i=W.getFrustum(),_(v,w,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Xi&&S(W,w),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(y,b,A)};function S(T,v){let w=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new qt(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(v,null,w,f,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(v,null,w,p,x,null)}function M(T,v,w,y){let b=null,A=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)b=A;else if(b=w.isPointLight===!0?l:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){let D=b.uuid,O=v.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let F=L[O];F===void 0&&(F=b.clone(),L[O]=F,v.addEventListener("dispose",E)),b=F}if(b.visible=v.visible,b.wireframe=v.wireframe,y===Xi?b.side=v.shadowSide!==null?v.shadowSide:v.side:b.side=v.shadowSide!==null?v.shadowSide:h[v.side],b.alphaMap=v.alphaMap,b.alphaTest=v.alphaTest,b.map=v.map,b.clipShadows=v.clipShadows,b.clippingPlanes=v.clippingPlanes,b.clipIntersection=v.clipIntersection,b.displacementMap=v.displacementMap,b.displacementScale=v.displacementScale,b.displacementBias=v.displacementBias,b.wireframeLinewidth=v.wireframeLinewidth,b.linewidth=v.linewidth,w.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let D=n.properties.get(b);D.light=w}return b}function _(T,v,w,y,b){if(T.visible===!1)return;if(T.layers.test(v.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Xi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let O=e.update(T),L=T.material;if(Array.isArray(L)){let F=O.groups;for(let B=0,Y=F.length;B<Y;B++){let W=F[B],H=L[W.materialIndex];if(H&&H.visible){let ae=M(T,H,y,b);T.onBeforeShadow(n,T,v,w,O,ae,W),n.renderBufferDirect(w,null,O,ae,T,W),T.onAfterShadow(n,T,v,w,O,ae,W)}}}else if(L.visible){let F=M(T,L,y,b);T.onBeforeShadow(n,T,v,w,O,F,null),n.renderBufferDirect(w,null,O,F,T,null),T.onAfterShadow(n,T,v,w,O,F,null)}}let D=T.children;for(let O=0,L=D.length;O<L;O++)_(D[O],v,w,y,b)}function E(T){T.target.removeEventListener("dispose",E);for(let w in c){let y=c[w],b=T.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}var VM={[yu]:_u,[Mu]:Tu,[bu]:wu,[qr]:Su,[_u]:yu,[Tu]:Mu,[wu]:bu,[Su]:qr};function GM(n,e){function t(){let N=!1,ce=new _t,G=null,Z=new _t(0,0,0,0);return{setMask:function(j){G!==j&&!N&&(n.colorMask(j,j,j,j),G=j)},setLocked:function(j){N=j},setClear:function(j,ie,ye,Be,Re){Re===!0&&(j*=Be,ie*=Be,ye*=Be),ce.set(j,ie,ye,Be),Z.equals(ce)===!1&&(n.clearColor(j,ie,ye,Be),Z.copy(ce))},reset:function(){N=!1,G=null,Z.set(-1,0,0,0)}}}function i(){let N=!1,ce=!1,G=null,Z=null,j=null;return{setReversed:function(ie){if(ce!==ie){let ye=e.get("EXT_clip_control");ce?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT);let Be=j;j=null,this.setClear(Be)}ce=ie},getReversed:function(){return ce},setTest:function(ie){ie?I(n.DEPTH_TEST):$(n.DEPTH_TEST)},setMask:function(ie){G!==ie&&!N&&(n.depthMask(ie),G=ie)},setFunc:function(ie){if(ce&&(ie=VM[ie]),Z!==ie){switch(ie){case yu:n.depthFunc(n.NEVER);break;case _u:n.depthFunc(n.ALWAYS);break;case Mu:n.depthFunc(n.LESS);break;case qr:n.depthFunc(n.LEQUAL);break;case bu:n.depthFunc(n.EQUAL);break;case Su:n.depthFunc(n.GEQUAL);break;case Tu:n.depthFunc(n.GREATER);break;case wu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=ie}},setLocked:function(ie){N=ie},setClear:function(ie){j!==ie&&(ce&&(ie=1-ie),n.clearDepth(ie),j=ie)},reset:function(){N=!1,G=null,Z=null,j=null,ce=!1}}}function s(){let N=!1,ce=null,G=null,Z=null,j=null,ie=null,ye=null,Be=null,Re=null;return{setTest:function(Ne){N||(Ne?I(n.STENCIL_TEST):$(n.STENCIL_TEST))},setMask:function(Ne){ce!==Ne&&!N&&(n.stencilMask(Ne),ce=Ne)},setFunc:function(Ne,J,oe){(G!==Ne||Z!==J||j!==oe)&&(n.stencilFunc(Ne,J,oe),G=Ne,Z=J,j=oe)},setOp:function(Ne,J,oe){(ie!==Ne||ye!==J||Be!==oe)&&(n.stencilOp(Ne,J,oe),ie=Ne,ye=J,Be=oe)},setLocked:function(Ne){N=Ne},setClear:function(Ne){Re!==Ne&&(n.clearStencil(Ne),Re=Ne)},reset:function(){N=!1,ce=null,G=null,Z=null,j=null,ie=null,ye=null,Be=null,Re=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,S=null,M=null,_=null,E=null,T=null,v=new Ie(0,0,0),w=0,y=!1,b=null,A=null,D=null,O=null,L=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Y=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=Y>=2);let H=null,ae={},ve=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),ge=new _t().fromArray(ve),le=new _t().fromArray(Se);function se(N,ce,G,Z){let j=new Uint8Array(4),ie=n.createTexture();n.bindTexture(N,ie),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<G;ye++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,j):n.texImage2D(ce+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,j);return ie}let re={};re[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),I(n.DEPTH_TEST),o.setFunc(qr),ke(!1),Ue(Pd),I(n.CULL_FACE),X(nn);function I(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function $(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function q(N,ce){return h[N]!==ce?(n.bindFramebuffer(N,ce),h[N]=ce,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ce),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function ee(N,ce){let G=p,Z=!1;if(N){G=f.get(ce),G===void 0&&(G=[],f.set(ce,G));let j=N.textures;if(G.length!==j.length||G[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,ye=j.length;ie<ye;ie++)G[ie]=n.COLOR_ATTACHMENT0+ie;G.length=j.length,Z=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,Z=!0);Z&&n.drawBuffers(G)}function pe(N){return g!==N?(n.useProgram(N),g=N,!0):!1}let we={[Fn]:n.FUNC_ADD,[dx]:n.FUNC_SUBTRACT,[px]:n.FUNC_REVERSE_SUBTRACT};we[mx]=n.MIN,we[gx]=n.MAX;let Me={[co]:n.ZERO,[Ph]:n.ONE,[xx]:n.SRC_COLOR,[vu]:n.SRC_ALPHA,[Mx]:n.SRC_ALPHA_SATURATE,[Ol]:n.DST_COLOR,[Fl]:n.DST_ALPHA,[vx]:n.ONE_MINUS_SRC_COLOR,[Yo]:n.ONE_MINUS_SRC_ALPHA,[_x]:n.ONE_MINUS_DST_COLOR,[yx]:n.ONE_MINUS_DST_ALPHA,[bx]:n.CONSTANT_COLOR,[Sx]:n.ONE_MINUS_CONSTANT_COLOR,[Tx]:n.CONSTANT_ALPHA,[wx]:n.ONE_MINUS_CONSTANT_ALPHA};function X(N,ce,G,Z,j,ie,ye,Be,Re,Ne){if(N===nn){x===!0&&($(n.BLEND),x=!1);return}if(x===!1&&(I(n.BLEND),x=!0),N!==ia){if(N!==m||Ne!==y){if((d!==Fn||_!==Fn)&&(n.blendEquation(n.FUNC_ADD),d=Fn,_=Fn),Ne)switch(N){case Vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vs:n.blendFunc(n.ONE,n.ONE);break;case Id:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ld:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vs:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Id:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ld:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,M=null,E=null,T=null,v.set(0,0,0),w=0,m=N,y=Ne}return}j=j||ce,ie=ie||G,ye=ye||Z,(ce!==d||j!==_)&&(n.blendEquationSeparate(we[ce],we[j]),d=ce,_=j),(G!==S||Z!==M||ie!==E||ye!==T)&&(n.blendFuncSeparate(Me[G],Me[Z],Me[ie],Me[ye]),S=G,M=Z,E=ie,T=ye),(Be.equals(v)===!1||Re!==w)&&(n.blendColor(Be.r,Be.g,Be.b,Re),v.copy(Be),w=Re),m=N,y=!1}function He(N,ce){N.side===Pt?$(n.CULL_FACE):I(n.CULL_FACE);let G=N.side===Qt;ce&&(G=!G),ke(G),N.blending===Vr&&N.transparent===!1?X(nn):X(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Z=N.stencilWrite;a.setTest(Z),Z&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),qe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?I(n.SAMPLE_ALPHA_TO_COVERAGE):$(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(N){b!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),b=N)}function Ue(N){N!==ux?(I(n.CULL_FACE),N!==A&&(N===Pd?n.cullFace(n.BACK):N===hx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$(n.CULL_FACE),A=N}function Ae(N){N!==D&&(B&&n.lineWidth(N),D=N)}function qe(N,ce,G){N?(I(n.POLYGON_OFFSET_FILL),(O!==ce||L!==G)&&(n.polygonOffset(ce,G),O=ce,L=G)):$(n.POLYGON_OFFSET_FILL)}function Fe(N){N?I(n.SCISSOR_TEST):$(n.SCISSOR_TEST)}function U(N){N===void 0&&(N=n.TEXTURE0+F-1),H!==N&&(n.activeTexture(N),H=N)}function R(N,ce,G){G===void 0&&(H===null?G=n.TEXTURE0+F-1:G=H);let Z=ae[G];Z===void 0&&(Z={type:void 0,texture:void 0},ae[G]=Z),(Z.type!==N||Z.texture!==ce)&&(H!==G&&(n.activeTexture(G),H=G),n.bindTexture(N,ce||re[N]),Z.type=N,Z.texture=ce)}function te(){let N=ae[H];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _e(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xe(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(N){ge.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ge.copy(N))}function C(N){le.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),le.copy(N))}function z(N,ce){let G=c.get(ce);G===void 0&&(G=new WeakMap,c.set(ce,G));let Z=G.get(N);Z===void 0&&(Z=n.getUniformBlockIndex(ce,N.name),G.set(N,Z))}function k(N,ce){let Z=c.get(ce).get(N);l.get(ce)!==Z&&(n.uniformBlockBinding(ce,Z,N.__bindingPointIndex),l.set(ce,Z))}function K(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},H=null,ae={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,S=null,M=null,_=null,E=null,T=null,v=new Ie(0,0,0),w=0,y=!1,b=null,A=null,D=null,O=null,L=null,ge.set(0,0,n.canvas.width,n.canvas.height),le.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:I,disable:$,bindFramebuffer:q,drawBuffers:ee,useProgram:pe,setBlending:X,setMaterial:He,setFlipSided:ke,setCullFace:Ue,setLineWidth:Ae,setPolygonOffset:qe,setScissorTest:Fe,activeTexture:U,bindTexture:R,unbindTexture:te,compressedTexImage2D:_e,compressedTexImage3D:Te,texImage2D:ue,texImage3D:Ee,updateUBOMapping:z,uniformBlockBinding:k,texStorage2D:Xe,texStorage3D:be,texSubImage2D:me,texSubImage3D:Ve,compressedTexSubImage2D:Le,compressedTexSubImage3D:Oe,scissor:Ce,viewport:C,reset:K}}function Cp(n,e,t,i){let s=WM(i);switch(t){case tm:return n*e;case im:return n*e;case sm:return n*e*2;case Hh:return n*e/s.components*s.byteLength;case Vh:return n*e/s.components*s.byteLength;case rm:return n*e*2/s.components*s.byteLength;case Gh:return n*e*2/s.components*s.byteLength;case nm:return n*e*3/s.components*s.byteLength;case Bn:return n*e*4/s.components*s.byteLength;case Wh:return n*e*4/s.components*s.byteLength;case ll:case cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ul:case hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cu:case Iu:return Math.max(n,16)*Math.max(e,8)/4;case Ru:case Pu:return Math.max(n,8)*Math.max(e,8)/2;case Lu:case Du:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ou:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ku:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Gu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case qu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Yu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $u:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case fl:case Zu:case Ku:return Math.ceil(n/4)*Math.ceil(e/4)*16;case om:case ju:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ju:case Qu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function WM(n){switch(n){case Mi:case Jp:return{byteLength:1,components:1};case Zo:case Qp:case un:return{byteLength:2,components:1};case zh:case kh:return{byteLength:2,components:4};case nr:case Bh:case yi:return{byteLength:4,components:1};case em:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function XM(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,R){return p?new OffscreenCanvas(U,R):Ko("canvas")}function x(U,R,te){let _e=1,Te=Fe(U);if((Te.width>te||Te.height>te)&&(_e=te/Math.max(Te.width,Te.height)),_e<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let me=Math.floor(_e*Te.width),Ve=Math.floor(_e*Te.height);h===void 0&&(h=g(me,Ve));let Le=R?g(me,Ve):h;return Le.width=me,Le.height=Ve,Le.getContext("2d").drawImage(U,0,0,me,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+me+"x"+Ve+")."),Le}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),U;return U}function m(U){return U.generateMipmaps}function d(U){n.generateMipmap(U)}function S(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(U,R,te,_e,Te=!1){if(U!==null){if(n[U]!==void 0)return n[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let me=R;if(R===n.RED&&(te===n.FLOAT&&(me=n.R32F),te===n.HALF_FLOAT&&(me=n.R16F),te===n.UNSIGNED_BYTE&&(me=n.R8)),R===n.RED_INTEGER&&(te===n.UNSIGNED_BYTE&&(me=n.R8UI),te===n.UNSIGNED_SHORT&&(me=n.R16UI),te===n.UNSIGNED_INT&&(me=n.R32UI),te===n.BYTE&&(me=n.R8I),te===n.SHORT&&(me=n.R16I),te===n.INT&&(me=n.R32I)),R===n.RG&&(te===n.FLOAT&&(me=n.RG32F),te===n.HALF_FLOAT&&(me=n.RG16F),te===n.UNSIGNED_BYTE&&(me=n.RG8)),R===n.RG_INTEGER&&(te===n.UNSIGNED_BYTE&&(me=n.RG8UI),te===n.UNSIGNED_SHORT&&(me=n.RG16UI),te===n.UNSIGNED_INT&&(me=n.RG32UI),te===n.BYTE&&(me=n.RG8I),te===n.SHORT&&(me=n.RG16I),te===n.INT&&(me=n.RG32I)),R===n.RGB_INTEGER&&(te===n.UNSIGNED_BYTE&&(me=n.RGB8UI),te===n.UNSIGNED_SHORT&&(me=n.RGB16UI),te===n.UNSIGNED_INT&&(me=n.RGB32UI),te===n.BYTE&&(me=n.RGB8I),te===n.SHORT&&(me=n.RGB16I),te===n.INT&&(me=n.RGB32I)),R===n.RGBA_INTEGER&&(te===n.UNSIGNED_BYTE&&(me=n.RGBA8UI),te===n.UNSIGNED_SHORT&&(me=n.RGBA16UI),te===n.UNSIGNED_INT&&(me=n.RGBA32UI),te===n.BYTE&&(me=n.RGBA8I),te===n.SHORT&&(me=n.RGBA16I),te===n.INT&&(me=n.RGBA32I)),R===n.RGB&&te===n.UNSIGNED_INT_5_9_9_9_REV&&(me=n.RGB9_E5),R===n.RGBA){let Ve=Te?Hl:dt.getTransfer(_e);te===n.FLOAT&&(me=n.RGBA32F),te===n.HALF_FLOAT&&(me=n.RGBA16F),te===n.UNSIGNED_BYTE&&(me=Ve===wt?n.SRGB8_ALPHA8:n.RGBA8),te===n.UNSIGNED_SHORT_4_4_4_4&&(me=n.RGBA4),te===n.UNSIGNED_SHORT_5_5_5_1&&(me=n.RGB5_A1)}return(me===n.R16F||me===n.R32F||me===n.RG16F||me===n.RG32F||me===n.RGBA16F||me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function _(U,R){let te;return U?R===null||R===nr||R===ys?te=n.DEPTH24_STENCIL8:R===yi?te=n.DEPTH32F_STENCIL8:R===Zo&&(te=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===nr||R===ys?te=n.DEPTH_COMPONENT24:R===yi?te=n.DEPTH_COMPONENT32F:R===Zo&&(te=n.DEPTH_COMPONENT16),te}function E(U,R){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==Kt&&U.minFilter!==On?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function T(U){let R=U.target;R.removeEventListener("dispose",T),w(R),R.isVideoTexture&&u.delete(R)}function v(U){let R=U.target;R.removeEventListener("dispose",v),b(R)}function w(U){let R=i.get(U);if(R.__webglInit===void 0)return;let te=U.source,_e=f.get(te);if(_e){let Te=_e[R.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&y(U),Object.keys(_e).length===0&&f.delete(te)}i.remove(U)}function y(U){let R=i.get(U);n.deleteTexture(R.__webglTexture);let te=U.source,_e=f.get(te);delete _e[R.__cacheKey],o.memory.textures--}function b(U){let R=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(R.__webglFramebuffer[_e]))for(let Te=0;Te<R.__webglFramebuffer[_e].length;Te++)n.deleteFramebuffer(R.__webglFramebuffer[_e][Te]);else n.deleteFramebuffer(R.__webglFramebuffer[_e]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[_e])}else{if(Array.isArray(R.__webglFramebuffer))for(let _e=0;_e<R.__webglFramebuffer.length;_e++)n.deleteFramebuffer(R.__webglFramebuffer[_e]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let _e=0;_e<R.__webglColorRenderbuffer.length;_e++)R.__webglColorRenderbuffer[_e]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[_e]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let te=U.textures;for(let _e=0,Te=te.length;_e<Te;_e++){let me=i.get(te[_e]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(te[_e])}i.remove(U)}let A=0;function D(){A=0}function O(){let U=A;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),A+=1,U}function L(U){let R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function F(U,R){let te=i.get(U);if(U.isVideoTexture&&Ae(U),U.isRenderTargetTexture===!1&&U.version>0&&te.__version!==U.version){let _e=U.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(te,U,R);return}}t.bindTexture(n.TEXTURE_2D,te.__webglTexture,n.TEXTURE0+R)}function B(U,R){let te=i.get(U);if(U.version>0&&te.__version!==U.version){le(te,U,R);return}t.bindTexture(n.TEXTURE_2D_ARRAY,te.__webglTexture,n.TEXTURE0+R)}function Y(U,R){let te=i.get(U);if(U.version>0&&te.__version!==U.version){le(te,U,R);return}t.bindTexture(n.TEXTURE_3D,te.__webglTexture,n.TEXTURE0+R)}function W(U,R){let te=i.get(U);if(U.version>0&&te.__version!==U.version){se(te,U,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture,n.TEXTURE0+R)}let H={[Pn]:n.REPEAT,[qi]:n.CLAMP_TO_EDGE,[$o]:n.MIRRORED_REPEAT},ae={[Kt]:n.NEAREST,[Oh]:n.NEAREST_MIPMAP_NEAREST,[kr]:n.NEAREST_MIPMAP_LINEAR,[On]:n.LINEAR,[Go]:n.LINEAR_MIPMAP_NEAREST,[ti]:n.LINEAR_MIPMAP_LINEAR},ve={[Nx]:n.NEVER,[kx]:n.ALWAYS,[Ux]:n.LESS,[lm]:n.LEQUAL,[Fx]:n.EQUAL,[zx]:n.GEQUAL,[Ox]:n.GREATER,[Bx]:n.NOTEQUAL};function Se(U,R){if(R.type===yi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===On||R.magFilter===Go||R.magFilter===kr||R.magFilter===ti||R.minFilter===On||R.minFilter===Go||R.minFilter===kr||R.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,H[R.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,H[R.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,H[R.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,ae[R.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,ae[R.minFilter]),R.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,ve[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Kt||R.minFilter!==kr&&R.minFilter!==ti||R.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){let te=e.get("EXT_texture_filter_anisotropic");n.texParameterf(U,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function ge(U,R){let te=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",T));let _e=R.source,Te=f.get(_e);Te===void 0&&(Te={},f.set(_e,Te));let me=L(R);if(me!==U.__cacheKey){Te[me]===void 0&&(Te[me]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,te=!0),Te[me].usedTimes++;let Ve=Te[U.__cacheKey];Ve!==void 0&&(Te[U.__cacheKey].usedTimes--,Ve.usedTimes===0&&y(R)),U.__cacheKey=me,U.__webglTexture=Te[me].texture}return te}function le(U,R,te){let _e=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(_e=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(_e=n.TEXTURE_3D);let Te=ge(U,R),me=R.source;t.bindTexture(_e,U.__webglTexture,n.TEXTURE0+te);let Ve=i.get(me);if(me.version!==Ve.__version||Te===!0){t.activeTexture(n.TEXTURE0+te);let Le=dt.getPrimaries(dt.workingColorSpace),Oe=R.colorSpace===ps?null:dt.getPrimaries(R.colorSpace),Xe=R.colorSpace===ps||Le===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let be=x(R.image,!1,s.maxTextureSize);be=qe(R,be);let ue=r.convert(R.format,R.colorSpace),Ee=r.convert(R.type),Ce=M(R.internalFormat,ue,Ee,R.colorSpace,R.isVideoTexture);Se(_e,R);let C,z=R.mipmaps,k=R.isVideoTexture!==!0,K=Ve.__version===void 0||Te===!0,N=me.dataReady,ce=E(R,be);if(R.isDepthTexture)Ce=_(R.format===_s,R.type),K&&(k?t.texStorage2D(n.TEXTURE_2D,1,Ce,be.width,be.height):t.texImage2D(n.TEXTURE_2D,0,Ce,be.width,be.height,0,ue,Ee,null));else if(R.isDataTexture)if(z.length>0){k&&K&&t.texStorage2D(n.TEXTURE_2D,ce,Ce,z[0].width,z[0].height);for(let G=0,Z=z.length;G<Z;G++)C=z[G],k?N&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,C.width,C.height,ue,Ee,C.data):t.texImage2D(n.TEXTURE_2D,G,Ce,C.width,C.height,0,ue,Ee,C.data);R.generateMipmaps=!1}else k?(K&&t.texStorage2D(n.TEXTURE_2D,ce,Ce,be.width,be.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be.width,be.height,ue,Ee,be.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,be.width,be.height,0,ue,Ee,be.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){k&&K&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Ce,z[0].width,z[0].height,be.depth);for(let G=0,Z=z.length;G<Z;G++)if(C=z[G],R.format!==Bn)if(ue!==null)if(k){if(N)if(R.layerUpdates.size>0){let j=Cp(C.width,C.height,R.format,R.type);for(let ie of R.layerUpdates){let ye=C.data.subarray(ie*j/C.data.BYTES_PER_ELEMENT,(ie+1)*j/C.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,ie,C.width,C.height,1,ue,ye)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,C.width,C.height,be.depth,ue,C.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,Ce,C.width,C.height,be.depth,0,C.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,C.width,C.height,be.depth,ue,Ee,C.data):t.texImage3D(n.TEXTURE_2D_ARRAY,G,Ce,C.width,C.height,be.depth,0,ue,Ee,C.data)}else{k&&K&&t.texStorage2D(n.TEXTURE_2D,ce,Ce,z[0].width,z[0].height);for(let G=0,Z=z.length;G<Z;G++)C=z[G],R.format!==Bn?ue!==null?k?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,C.width,C.height,ue,C.data):t.compressedTexImage2D(n.TEXTURE_2D,G,Ce,C.width,C.height,0,C.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?N&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,C.width,C.height,ue,Ee,C.data):t.texImage2D(n.TEXTURE_2D,G,Ce,C.width,C.height,0,ue,Ee,C.data)}else if(R.isDataArrayTexture)if(k){if(K&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Ce,be.width,be.height,be.depth),N)if(R.layerUpdates.size>0){let G=Cp(be.width,be.height,R.format,R.type);for(let Z of R.layerUpdates){let j=be.data.subarray(Z*G/be.data.BYTES_PER_ELEMENT,(Z+1)*G/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,be.width,be.height,1,ue,Ee,j)}R.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,ue,Ee,be.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,be.width,be.height,be.depth,0,ue,Ee,be.data);else if(R.isData3DTexture)k?(K&&t.texStorage3D(n.TEXTURE_3D,ce,Ce,be.width,be.height,be.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,ue,Ee,be.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,be.width,be.height,be.depth,0,ue,Ee,be.data);else if(R.isFramebufferTexture){if(K)if(k)t.texStorage2D(n.TEXTURE_2D,ce,Ce,be.width,be.height);else{let G=be.width,Z=be.height;for(let j=0;j<ce;j++)t.texImage2D(n.TEXTURE_2D,j,Ce,G,Z,0,ue,Ee,null),G>>=1,Z>>=1}}else if(z.length>0){if(k&&K){let G=Fe(z[0]);t.texStorage2D(n.TEXTURE_2D,ce,Ce,G.width,G.height)}for(let G=0,Z=z.length;G<Z;G++)C=z[G],k?N&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,ue,Ee,C):t.texImage2D(n.TEXTURE_2D,G,Ce,ue,Ee,C);R.generateMipmaps=!1}else if(k){if(K){let G=Fe(be);t.texStorage2D(n.TEXTURE_2D,ce,Ce,G.width,G.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,Ee,be)}else t.texImage2D(n.TEXTURE_2D,0,Ce,ue,Ee,be);m(R)&&d(_e),Ve.__version=me.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function se(U,R,te){if(R.image.length!==6)return;let _e=ge(U,R),Te=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+te);let me=i.get(Te);if(Te.version!==me.__version||_e===!0){t.activeTexture(n.TEXTURE0+te);let Ve=dt.getPrimaries(dt.workingColorSpace),Le=R.colorSpace===ps?null:dt.getPrimaries(R.colorSpace),Oe=R.colorSpace===ps||Ve===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let Xe=R.isCompressedTexture||R.image[0].isCompressedTexture,be=R.image[0]&&R.image[0].isDataTexture,ue=[];for(let Z=0;Z<6;Z++)!Xe&&!be?ue[Z]=x(R.image[Z],!0,s.maxCubemapSize):ue[Z]=be?R.image[Z].image:R.image[Z],ue[Z]=qe(R,ue[Z]);let Ee=ue[0],Ce=r.convert(R.format,R.colorSpace),C=r.convert(R.type),z=M(R.internalFormat,Ce,C,R.colorSpace),k=R.isVideoTexture!==!0,K=me.__version===void 0||_e===!0,N=Te.dataReady,ce=E(R,Ee);Se(n.TEXTURE_CUBE_MAP,R);let G;if(Xe){k&&K&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,z,Ee.width,Ee.height);for(let Z=0;Z<6;Z++){G=ue[Z].mipmaps;for(let j=0;j<G.length;j++){let ie=G[j];R.format!==Bn?Ce!==null?k?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,j,0,0,ie.width,ie.height,Ce,ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,j,z,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,j,0,0,ie.width,ie.height,Ce,C,ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,j,z,ie.width,ie.height,0,Ce,C,ie.data)}}}else{if(G=R.mipmaps,k&&K){G.length>0&&ce++;let Z=Fe(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,z,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(be){k?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ue[Z].width,ue[Z].height,Ce,C,ue[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,z,ue[Z].width,ue[Z].height,0,Ce,C,ue[Z].data);for(let j=0;j<G.length;j++){let ye=G[j].image[Z].image;k?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,j+1,0,0,ye.width,ye.height,Ce,C,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,j+1,z,ye.width,ye.height,0,Ce,C,ye.data)}}else{k?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ce,C,ue[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,z,Ce,C,ue[Z]);for(let j=0;j<G.length;j++){let ie=G[j];k?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,j+1,0,0,Ce,C,ie.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,j+1,z,Ce,C,ie.image[Z])}}}m(R)&&d(n.TEXTURE_CUBE_MAP),me.__version=Te.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function re(U,R,te,_e,Te,me){let Ve=r.convert(te.format,te.colorSpace),Le=r.convert(te.type),Oe=M(te.internalFormat,Ve,Le,te.colorSpace),Xe=i.get(R),be=i.get(te);if(be.__renderTarget=R,!Xe.__hasExternalTextures){let ue=Math.max(1,R.width>>me),Ee=Math.max(1,R.height>>me);Te===n.TEXTURE_3D||Te===n.TEXTURE_2D_ARRAY?t.texImage3D(Te,me,Oe,ue,Ee,R.depth,0,Ve,Le,null):t.texImage2D(Te,me,Oe,ue,Ee,0,Ve,Le,null)}t.bindFramebuffer(n.FRAMEBUFFER,U),Ue(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,Te,be.__webglTexture,0,ke(R)):(Te===n.TEXTURE_2D||Te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,_e,Te,be.__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(U,R,te){if(n.bindRenderbuffer(n.RENDERBUFFER,U),R.depthBuffer){let _e=R.depthTexture,Te=_e&&_e.isDepthTexture?_e.type:null,me=_(R.stencilBuffer,Te),Ve=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=ke(R);Ue(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,me,R.width,R.height):te?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,me,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,me,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ve,n.RENDERBUFFER,U)}else{let _e=R.textures;for(let Te=0;Te<_e.length;Te++){let me=_e[Te],Ve=r.convert(me.format,me.colorSpace),Le=r.convert(me.type),Oe=M(me.internalFormat,Ve,Le,me.colorSpace),Xe=ke(R);te&&Ue(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Oe,R.width,R.height):Ue(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe,Oe,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,Oe,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function $(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let _e=i.get(R.depthTexture);_e.__renderTarget=R,(!_e.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),F(R.depthTexture,0);let Te=_e.__webglTexture,me=ke(R);if(R.depthTexture.format===Gr)Ue(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Te,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Te,0);else if(R.depthTexture.format===_s)Ue(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Te,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function q(U){let R=i.get(U),te=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){let _e=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),_e){let Te=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,_e.removeEventListener("dispose",Te)};_e.addEventListener("dispose",Te),R.__depthDisposeCallback=Te}R.__boundDepthTexture=_e}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");$(R.__webglFramebuffer,U)}else if(te){R.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[_e]),R.__webglDepthbuffer[_e]===void 0)R.__webglDepthbuffer[_e]=n.createRenderbuffer(),I(R.__webglDepthbuffer[_e],U,!1);else{let Te=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=R.__webglDepthbuffer[_e];n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,me)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),I(R.__webglDepthbuffer,U,!1);else{let _e=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Te),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,Te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(U,R,te){let _e=i.get(U);R!==void 0&&re(_e.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),te!==void 0&&q(U)}function pe(U){let R=U.texture,te=i.get(U),_e=i.get(R);U.addEventListener("dispose",v);let Te=U.textures,me=U.isWebGLCubeRenderTarget===!0,Ve=Te.length>1;if(Ve||(_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture()),_e.__version=R.version,o.memory.textures++),me){te.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(R.mipmaps&&R.mipmaps.length>0){te.__webglFramebuffer[Le]=[];for(let Oe=0;Oe<R.mipmaps.length;Oe++)te.__webglFramebuffer[Le][Oe]=n.createFramebuffer()}else te.__webglFramebuffer[Le]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){te.__webglFramebuffer=[];for(let Le=0;Le<R.mipmaps.length;Le++)te.__webglFramebuffer[Le]=n.createFramebuffer()}else te.__webglFramebuffer=n.createFramebuffer();if(Ve)for(let Le=0,Oe=Te.length;Le<Oe;Le++){let Xe=i.get(Te[Le]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(U.samples>0&&Ue(U)===!1){te.__webglMultisampledFramebuffer=n.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Le=0;Le<Te.length;Le++){let Oe=Te[Le];te.__webglColorRenderbuffer[Le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,te.__webglColorRenderbuffer[Le]);let Xe=r.convert(Oe.format,Oe.colorSpace),be=r.convert(Oe.type),ue=M(Oe.internalFormat,Xe,be,Oe.colorSpace,U.isXRRenderTarget===!0),Ee=ke(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ue,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,te.__webglColorRenderbuffer[Le])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(te.__webglDepthRenderbuffer=n.createRenderbuffer(),I(te.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(me){t.bindTexture(n.TEXTURE_CUBE_MAP,_e.__webglTexture),Se(n.TEXTURE_CUBE_MAP,R);for(let Le=0;Le<6;Le++)if(R.mipmaps&&R.mipmaps.length>0)for(let Oe=0;Oe<R.mipmaps.length;Oe++)re(te.__webglFramebuffer[Le][Oe],U,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Oe);else re(te.__webglFramebuffer[Le],U,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);m(R)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let Le=0,Oe=Te.length;Le<Oe;Le++){let Xe=Te[Le],be=i.get(Xe);t.bindTexture(n.TEXTURE_2D,be.__webglTexture),Se(n.TEXTURE_2D,Xe),re(te.__webglFramebuffer,U,Xe,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,0),m(Xe)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let Le=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Le=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Le,_e.__webglTexture),Se(Le,R),R.mipmaps&&R.mipmaps.length>0)for(let Oe=0;Oe<R.mipmaps.length;Oe++)re(te.__webglFramebuffer[Oe],U,R,n.COLOR_ATTACHMENT0,Le,Oe);else re(te.__webglFramebuffer,U,R,n.COLOR_ATTACHMENT0,Le,0);m(R)&&d(Le),t.unbindTexture()}U.depthBuffer&&q(U)}function we(U){let R=U.textures;for(let te=0,_e=R.length;te<_e;te++){let Te=R[te];if(m(Te)){let me=S(U),Ve=i.get(Te).__webglTexture;t.bindTexture(me,Ve),d(me),t.unbindTexture()}}}let Me=[],X=[];function He(U){if(U.samples>0){if(Ue(U)===!1){let R=U.textures,te=U.width,_e=U.height,Te=n.COLOR_BUFFER_BIT,me=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ve=i.get(U),Le=R.length>1;if(Le)for(let Oe=0;Oe<R.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Oe=0;Oe<R.length;Oe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Te|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Te|=n.STENCIL_BUFFER_BIT)),Le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[Oe]);let Xe=i.get(R[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xe,0)}n.blitFramebuffer(0,0,te,_e,0,0,te,_e,Te,n.NEAREST),l===!0&&(Me.length=0,X.length=0,Me.push(n.COLOR_ATTACHMENT0+Oe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Me.push(me),X.push(me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,X)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Le)for(let Oe=0;Oe<R.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[Oe]);let Xe=i.get(R[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){let R=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function ke(U){return Math.min(s.maxSamples,U.samples)}function Ue(U){let R=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ae(U){let R=o.render.frame;u.get(U)!==R&&(u.set(U,R),U.update())}function qe(U,R){let te=U.colorSpace,_e=U.format,Te=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||te!==Sn&&te!==ps&&(dt.getTransfer(te)===wt?(_e!==Bn||Te!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),R}function Fe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=F,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=ee,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Ue}function qM(n,e){function t(i,s=ps){let r,o=dt.getTransfer(s);if(i===Mi)return n.UNSIGNED_BYTE;if(i===zh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===kh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===em)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jp)return n.BYTE;if(i===Qp)return n.SHORT;if(i===Zo)return n.UNSIGNED_SHORT;if(i===Bh)return n.INT;if(i===nr)return n.UNSIGNED_INT;if(i===yi)return n.FLOAT;if(i===un)return n.HALF_FLOAT;if(i===tm)return n.ALPHA;if(i===nm)return n.RGB;if(i===Bn)return n.RGBA;if(i===im)return n.LUMINANCE;if(i===sm)return n.LUMINANCE_ALPHA;if(i===Gr)return n.DEPTH_COMPONENT;if(i===_s)return n.DEPTH_STENCIL;if(i===Hh)return n.RED;if(i===Vh)return n.RED_INTEGER;if(i===rm)return n.RG;if(i===Gh)return n.RG_INTEGER;if(i===Wh)return n.RGBA_INTEGER;if(i===ll||i===cl||i===ul||i===hl)if(o===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ll)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ll)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ul)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ru||i===Cu||i===Pu||i===Iu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ru)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Iu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lu||i===Du||i===Nu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Lu||i===Du)return o===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Nu)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uu||i===Fu||i===Ou||i===Bu||i===zu||i===ku||i===Hu||i===Vu||i===Gu||i===Wu||i===Xu||i===qu||i===Yu||i===$u)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Uu)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fu)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ou)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bu)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zu)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ku)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hu)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vu)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gu)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wu)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xu)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qu)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yu)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$u)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fl||i===Zu||i===Ku)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===fl)return o===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ku)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===om||i===ju||i===Ju||i===Qu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===fl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ju)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ju)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ys?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var ph=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},at=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},YM={type:"move"},qo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(YM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new at;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},$M=`
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

}`,mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new ln,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new vt({vertexShader:$M,fragmentShader:ZM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gh=class extends Ms{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null,x=new mh,m=t.getContextAttributes(),d=null,S=null,M=[],_=[],E=new $e,T=null,v=new Zt;v.viewport=new _t;let w=new Zt;w.viewport=new _t;let y=[v,w],b=new ph,A=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let se=M[le];return se===void 0&&(se=new qo,M[le]=se),se.getTargetRaySpace()},this.getControllerGrip=function(le){let se=M[le];return se===void 0&&(se=new qo,M[le]=se),se.getGripSpace()},this.getHand=function(le){let se=M[le];return se===void 0&&(se=new qo,M[le]=se),se.getHandSpace()};function O(le){let se=_.indexOf(le.inputSource);if(se===-1)return;let re=M[se];re!==void 0&&(re.update(le.inputSource,le.frame,c||o),re.dispatchEvent({type:le.type,data:le.inputSource}))}function L(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",F);for(let le=0;le<M.length;le++){let se=_[le];se!==null&&(_[le]=null,M[le].disconnect(se))}A=null,D=null,x.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,S=null,ge.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",L),s.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0){let se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new qt(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,re=null,I=null;m.depth&&(I=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?_s:Gr,re=m.stencil?ys:nr);let $={colorFormat:t.RGBA8,depthFormat:I,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer($),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new qt(f.textureWidth,f.textureHeight,{format:Bn,type:Mi,depthTexture:new to(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ge.setContext(s),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F(le){for(let se=0;se<le.removed.length;se++){let re=le.removed[se],I=_.indexOf(re);I>=0&&(_[I]=null,M[I].disconnect(re))}for(let se=0;se<le.added.length;se++){let re=le.added[se],I=_.indexOf(re);if(I===-1){for(let q=0;q<M.length;q++)if(q>=_.length){_.push(re),I=q;break}else if(_[q]===null){_[q]=re,I=q;break}if(I===-1)break}let $=M[I];$&&$.connect(re)}}let B=new V,Y=new V;function W(le,se,re){B.setFromMatrixPosition(se.matrixWorld),Y.setFromMatrixPosition(re.matrixWorld);let I=B.distanceTo(Y),$=se.projectionMatrix.elements,q=re.projectionMatrix.elements,ee=$[14]/($[10]-1),pe=$[14]/($[10]+1),we=($[9]+1)/$[5],Me=($[9]-1)/$[5],X=($[8]-1)/$[0],He=(q[8]+1)/q[0],ke=ee*X,Ue=ee*He,Ae=I/(-X+He),qe=Ae*-X;if(se.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(qe),le.translateZ(Ae),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),$[10]===-1)le.projectionMatrix.copy(se.projectionMatrix),le.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let Fe=ee+Ae,U=pe+Ae,R=ke-qe,te=Ue+(I-qe),_e=we*pe/U*Fe,Te=Me*pe/U*Fe;le.projectionMatrix.makePerspective(R,te,_e,Te,Fe,U),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function H(le,se){se===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(se.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let se=le.near,re=le.far;x.texture!==null&&(x.depthNear>0&&(se=x.depthNear),x.depthFar>0&&(re=x.depthFar)),b.near=w.near=v.near=se,b.far=w.far=v.far=re,(A!==b.near||D!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,D=b.far),v.layers.mask=le.layers.mask|2,w.layers.mask=le.layers.mask|4,b.layers.mask=v.layers.mask|w.layers.mask;let I=le.parent,$=b.cameras;H(b,I);for(let q=0;q<$.length;q++)H($[q],I);$.length===2?W(b,v,w):b.projectionMatrix.copy(v.projectionMatrix),ae(le,b,I)};function ae(le,se,re){re===null?le.matrix.copy(se.matrixWorld):(le.matrix.copy(re.matrixWorld),le.matrix.invert(),le.matrix.multiply(se.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(se.projectionMatrix),le.projectionMatrixInverse.copy(se.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=jr*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(le){l=le,f!==null&&(f.fixedFoveation=le),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=le)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let ve=null;function Se(le,se){if(u=se.getViewerPose(c||o),g=se,u!==null){let re=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let I=!1;re.length!==b.cameras.length&&(b.cameras.length=0,I=!0);for(let q=0;q<re.length;q++){let ee=re[q],pe=null;if(p!==null)pe=p.getViewport(ee);else{let Me=h.getViewSubImage(f,ee);pe=Me.viewport,q===0&&(e.setRenderTargetTextures(S,Me.colorTexture,f.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(S))}let we=y[q];we===void 0&&(we=new Zt,we.layers.enable(q),we.viewport=new _t,y[q]=we),we.matrix.fromArray(ee.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(ee.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(pe.x,pe.y,pe.width,pe.height),q===0&&(b.matrix.copy(we.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),I===!0&&b.cameras.push(we)}let $=s.enabledFeatures;if($&&$.includes("depth-sensing")){let q=h.getDepthInformation(re[0]);q&&q.isValid&&q.texture&&x.init(e,q,s.renderState)}}for(let re=0;re<M.length;re++){let I=_[re],$=M[re];I!==null&&$!==void 0&&$.update(I,se,c||o)}ve&&ve(le,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}let ge=new dm;ge.setAnimationLoop(Se),this.setAnimationLoop=function(le){ve=le},this.dispose=function(){}}},Qs=new bi,KM=new Ze;function jM(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,fm(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,M,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,S,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Qt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Qt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let S=e.get(d),M=S.envMap,_=S.envMapRotation;M&&(m.envMap.value=M,Qs.copy(_),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),m.envMapRotation.value.setFromMatrix4(KM.makeRotationFromEuler(Qs)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,S,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Qt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function JM(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){let _=M.program;i.uniformBlockBinding(S,_)}function c(S,M){let _=s[S.id];_===void 0&&(g(S),_=u(S),s[S.id]=_,S.addEventListener("dispose",m));let E=M.program;i.updateUBOMapping(S,E);let T=e.render.frame;r[S.id]!==T&&(f(S),r[S.id]=T)}function u(S){let M=h();S.__bindingPointIndex=M;let _=n.createBuffer(),E=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,E,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,_),_}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let M=s[S.id],_=S.uniforms,E=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let T=0,v=_.length;T<v;T++){let w=Array.isArray(_[T])?_[T]:[_[T]];for(let y=0,b=w.length;y<b;y++){let A=w[y];if(p(A,T,y,E)===!0){let D=A.__offset,O=Array.isArray(A.value)?A.value:[A.value],L=0;for(let F=0;F<O.length;F++){let B=O[F],Y=x(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,D+L,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):(B.toArray(A.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,M,_,E){let T=S.value,v=M+"_"+_;if(E[v]===void 0)return typeof T=="number"||typeof T=="boolean"?E[v]=T:E[v]=T.clone(),!0;{let w=E[v];if(typeof T=="number"||typeof T=="boolean"){if(w!==T)return E[v]=T,!0}else if(w.equals(T)===!1)return w.copy(T),!0}return!1}function g(S){let M=S.uniforms,_=0,E=16;for(let v=0,w=M.length;v<w;v++){let y=Array.isArray(M[v])?M[v]:[M[v]];for(let b=0,A=y.length;b<A;b++){let D=y[b],O=Array.isArray(D.value)?D.value:[D.value];for(let L=0,F=O.length;L<F;L++){let B=O[L],Y=x(B),W=_%E,H=W%Y.boundary,ae=W+H;_+=H,ae!==0&&E-ae<Y.storage&&(_+=E-ae),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=Y.storage}}}let T=_%E;return T>0&&(_+=E-T),S.__size=_,S.__cache={},this}function x(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){let M=S.target;M.removeEventListener("dispose",m);let _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Ml=class{constructor(e={}){let{canvas:t=iv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,S=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=xs,this.toneMappingExposure=1;let _=this,E=!1,T=0,v=0,w=null,y=-1,b=null,A=new _t,D=new _t,O=null,L=new Ie(0),F=0,B=t.width,Y=t.height,W=1,H=null,ae=null,ve=new _t(0,0,B,Y),Se=new _t(0,0,B,Y),ge=!1,le=new jo,se=!1,re=!1,I=new Ze,$=new Ze,q=new V,ee=new _t,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Me(){return w===null?W:1}let X=i;function He(P,Q){return t.getContext(P,Q)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",ie,!1),X===null){let Q="webgl2";if(X=He(Q,P),X===null)throw He(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ke,Ue,Ae,qe,Fe,U,R,te,_e,Te,me,Ve,Le,Oe,Xe,be,ue,Ee,Ce,C,z,k,K,N;function ce(){ke=new p1(X),ke.init(),k=new qM(X,ke),Ue=new l1(X,ke,e,k),Ae=new GM(X,ke),Ue.reverseDepthBuffer&&f&&Ae.buffers.depth.setReversed(!0),qe=new x1(X),Fe=new PM,U=new XM(X,ke,Ae,Fe,Ue,k,qe),R=new u1(_),te=new d1(_),_e=new Tv(X),K=new o1(X,_e),Te=new m1(X,_e,qe,K),me=new y1(X,Te,_e,qe),Ce=new v1(X,Ue,U),be=new c1(Fe),Ve=new CM(_,R,te,ke,Ue,K,be),Le=new jM(_,Fe),Oe=new LM,Xe=new BM(ke),Ee=new r1(_,R,te,Ae,me,p,l),ue=new HM(_,me,Ue),N=new JM(X,qe,Ue,Ae),C=new a1(X,ke,qe),z=new g1(X,ke,qe),qe.programs=Ve.programs,_.capabilities=Ue,_.extensions=ke,_.properties=Fe,_.renderLists=Oe,_.shadowMap=ue,_.state=Ae,_.info=qe}ce();let G=new gh(_,X);this.xr=G,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let P=ke.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=ke.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(P){P!==void 0&&(W=P,this.setSize(B,Y,!1))},this.getSize=function(P){return P.set(B,Y)},this.setSize=function(P,Q,he=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=P,Y=Q,t.width=Math.floor(P*W),t.height=Math.floor(Q*W),he===!0&&(t.style.width=P+"px",t.style.height=Q+"px"),this.setViewport(0,0,P,Q)},this.getDrawingBufferSize=function(P){return P.set(B*W,Y*W).floor()},this.setDrawingBufferSize=function(P,Q,he){B=P,Y=Q,W=he,t.width=Math.floor(P*he),t.height=Math.floor(Q*he),this.setViewport(0,0,P,Q)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(ve)},this.setViewport=function(P,Q,he,de){P.isVector4?ve.set(P.x,P.y,P.z,P.w):ve.set(P,Q,he,de),Ae.viewport(A.copy(ve).multiplyScalar(W).round())},this.getScissor=function(P){return P.copy(Se)},this.setScissor=function(P,Q,he,de){P.isVector4?Se.set(P.x,P.y,P.z,P.w):Se.set(P,Q,he,de),Ae.scissor(D.copy(Se).multiplyScalar(W).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(P){Ae.setScissorTest(ge=P)},this.setOpaqueSort=function(P){H=P},this.setTransparentSort=function(P){ae=P},this.getClearColor=function(P){return P.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(P=!0,Q=!0,he=!0){let de=0;if(P){let ne=!1;if(w!==null){let ze=w.texture.format;ne=ze===Wh||ze===Gh||ze===Vh}if(ne){let ze=w.texture.type,Ye=ze===Mi||ze===nr||ze===Zo||ze===ys||ze===zh||ze===kh,je=Ee.getClearColor(),Je=Ee.getClearAlpha(),rt=je.r,ct=je.g,Qe=je.b;Ye?(g[0]=rt,g[1]=ct,g[2]=Qe,g[3]=Je,X.clearBufferuiv(X.COLOR,0,g)):(x[0]=rt,x[1]=ct,x[2]=Qe,x[3]=Je,X.clearBufferiv(X.COLOR,0,x))}else de|=X.COLOR_BUFFER_BIT}Q&&(de|=X.DEPTH_BUFFER_BIT),he&&(de|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),Oe.dispose(),Xe.dispose(),Fe.dispose(),R.dispose(),te.dispose(),me.dispose(),K.dispose(),N.dispose(),Ve.dispose(),G.dispose(),G.removeEventListener("sessionstart",fe),G.removeEventListener("sessionend",xe),Pe.stop()};function Z(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let P=qe.autoReset,Q=ue.enabled,he=ue.autoUpdate,de=ue.needsUpdate,ne=ue.type;ce(),qe.autoReset=P,ue.enabled=Q,ue.autoUpdate=he,ue.needsUpdate=de,ue.type=ne}function ie(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ye(P){let Q=P.target;Q.removeEventListener("dispose",ye),Be(Q)}function Be(P){Re(P),Fe.remove(P)}function Re(P){let Q=Fe.get(P).programs;Q!==void 0&&(Q.forEach(function(he){Ve.releaseProgram(he)}),P.isShaderMaterial&&Ve.releaseShaderCache(P))}this.renderBufferDirect=function(P,Q,he,de,ne,ze){Q===null&&(Q=pe);let Ye=ne.isMesh&&ne.matrixWorld.determinant()<0,je=Vt(P,Q,he,de,ne);Ae.setMaterial(de,Ye);let Je=he.index,rt=1;if(de.wireframe===!0){if(Je=Te.getWireframeAttribute(he),Je===void 0)return;rt=2}let ct=he.drawRange,Qe=he.attributes.position,Mt=ct.start*rt,Dt=(ct.start+ct.count)*rt;ze!==null&&(Mt=Math.max(Mt,ze.start*rt),Dt=Math.min(Dt,(ze.start+ze.count)*rt)),Je!==null?(Mt=Math.max(Mt,0),Dt=Math.min(Dt,Je.count)):Qe!=null&&(Mt=Math.max(Mt,0),Dt=Math.min(Dt,Qe.count));let Ot=Dt-Mt;if(Ot<0||Ot===1/0)return;K.setup(ne,de,je,he,Je);let Un,St=C;if(Je!==null&&(Un=_e.get(Je),St=z,St.setIndex(Un)),ne.isMesh)de.wireframe===!0?(Ae.setLineWidth(de.wireframeLinewidth*Me()),St.setMode(X.LINES)):St.setMode(X.TRIANGLES);else if(ne.isLine){let tt=de.linewidth;tt===void 0&&(tt=1),Ae.setLineWidth(tt*Me()),ne.isLineSegments?St.setMode(X.LINES):ne.isLineLoop?St.setMode(X.LINE_LOOP):St.setMode(X.LINE_STRIP)}else ne.isPoints?St.setMode(X.POINTS):ne.isSprite&&St.setMode(X.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)St.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))St.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{let tt=ne._multiDrawStarts,Bi=ne._multiDrawCounts,Tt=ne._multiDrawCount,di=Je?_e.get(Je).bytesPerElement:1,_r=Fe.get(de).currentProgram.getUniforms();for(let Vn=0;Vn<Tt;Vn++)_r.setValue(X,"_gl_DrawID",Vn),St.render(tt[Vn]/di,Bi[Vn])}else if(ne.isInstancedMesh)St.renderInstances(Mt,Ot,ne.count);else if(he.isInstancedBufferGeometry){let tt=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Bi=Math.min(he.instanceCount,tt);St.renderInstances(Mt,Ot,Bi)}else St.render(Mt,Ot)};function Ne(P,Q,he){P.transparent===!0&&P.side===Pt&&P.forceSinglePass===!1?(P.side=Qt,P.needsUpdate=!0,Et(P,Q,he),P.side=Ri,P.needsUpdate=!0,Et(P,Q,he),P.side=Pt):Et(P,Q,he)}this.compile=function(P,Q,he=null){he===null&&(he=P),d=Xe.get(he),d.init(Q),M.push(d),he.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Q.layers)&&(d.pushLight(ne),ne.castShadow&&d.pushShadow(ne))}),P!==he&&P.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Q.layers)&&(d.pushLight(ne),ne.castShadow&&d.pushShadow(ne))}),d.setupLights();let de=new Set;return P.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;let ze=ne.material;if(ze)if(Array.isArray(ze))for(let Ye=0;Ye<ze.length;Ye++){let je=ze[Ye];Ne(je,he,ne),de.add(je)}else Ne(ze,he,ne),de.add(ze)}),M.pop(),d=null,de},this.compileAsync=function(P,Q,he=null){let de=this.compile(P,Q,he);return new Promise(ne=>{function ze(){if(de.forEach(function(Ye){Fe.get(Ye).currentProgram.isReady()&&de.delete(Ye)}),de.size===0){ne(P);return}setTimeout(ze,10)}ke.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let J=null;function oe(P){J&&J(P)}function fe(){Pe.stop()}function xe(){Pe.start()}let Pe=new dm;Pe.setAnimationLoop(oe),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(P){J=P,G.setAnimationLoop(P),P===null?Pe.stop():Pe.start()},G.addEventListener("sessionstart",fe),G.addEventListener("sessionend",xe),this.render=function(P,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(Q),Q=G.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,Q,w),d=Xe.get(P,M.length),d.init(Q),M.push(d),$.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),le.setFromProjectionMatrix($),re=this.localClippingEnabled,se=be.init(this.clippingPlanes,re),m=Oe.get(P,S.length),m.init(),S.push(m),G.enabled===!0&&G.isPresenting===!0){let ze=_.xr.getDepthSensingMesh();ze!==null&&De(ze,Q,-1/0,_.sortObjects)}De(P,Q,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(H,ae),we=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,we&&Ee.addToRenderList(m,P),this.info.render.frame++,se===!0&&be.beginShadows();let he=d.state.shadowsArray;ue.render(he,P,Q),se===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();let de=m.opaque,ne=m.transmissive;if(d.setupLights(),Q.isArrayCamera){let ze=Q.cameras;if(ne.length>0)for(let Ye=0,je=ze.length;Ye<je;Ye++){let Je=ze[Ye];et(de,ne,P,Je)}we&&Ee.render(P);for(let Ye=0,je=ze.length;Ye<je;Ye++){let Je=ze[Ye];Ke(m,P,Je,Je.viewport)}}else ne.length>0&&et(de,ne,P,Q),we&&Ee.render(P),Ke(m,P,Q);w!==null&&(U.updateMultisampleRenderTarget(w),U.updateRenderTargetMipmap(w)),P.isScene===!0&&P.onAfterRender(_,P,Q),K.resetDefaultState(),y=-1,b=null,M.pop(),M.length>0?(d=M[M.length-1],se===!0&&be.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function De(P,Q,he,de){if(P.visible===!1)return;if(P.layers.test(Q.layers)){if(P.isGroup)he=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Q);else if(P.isLight)d.pushLight(P),P.castShadow&&d.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||le.intersectsSprite(P)){de&&ee.setFromMatrixPosition(P.matrixWorld).applyMatrix4($);let Ye=me.update(P),je=P.material;je.visible&&m.push(P,Ye,je,he,ee.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||le.intersectsObject(P))){let Ye=me.update(P),je=P.material;if(de&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ee.copy(P.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),ee.copy(Ye.boundingSphere.center)),ee.applyMatrix4(P.matrixWorld).applyMatrix4($)),Array.isArray(je)){let Je=Ye.groups;for(let rt=0,ct=Je.length;rt<ct;rt++){let Qe=Je[rt],Mt=je[Qe.materialIndex];Mt&&Mt.visible&&m.push(P,Ye,Mt,he,ee.z,Qe)}}else je.visible&&m.push(P,Ye,je,he,ee.z,null)}}let ze=P.children;for(let Ye=0,je=ze.length;Ye<je;Ye++)De(ze[Ye],Q,he,de)}function Ke(P,Q,he,de){let ne=P.opaque,ze=P.transmissive,Ye=P.transparent;d.setupLightsView(he),se===!0&&be.setGlobalState(_.clippingPlanes,he),de&&Ae.viewport(A.copy(de)),ne.length>0&&st(ne,Q,he),ze.length>0&&st(ze,Q,he),Ye.length>0&&st(Ye,Q,he),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function et(P,Q,he,de){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[de.id]===void 0&&(d.state.transmissionRenderTarget[de.id]=new qt(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?un:Mi,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));let ze=d.state.transmissionRenderTarget[de.id],Ye=de.viewport||A;ze.setSize(Ye.z,Ye.w);let je=_.getRenderTarget();_.setRenderTarget(ze),_.getClearColor(L),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear(),we&&Ee.render(he);let Je=_.toneMapping;_.toneMapping=xs;let rt=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),d.setupLightsView(de),se===!0&&be.setGlobalState(_.clippingPlanes,de),st(P,he,de),U.updateMultisampleRenderTarget(ze),U.updateRenderTargetMipmap(ze),ke.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Qe=0,Mt=Q.length;Qe<Mt;Qe++){let Dt=Q[Qe],Ot=Dt.object,Un=Dt.geometry,St=Dt.material,tt=Dt.group;if(St.side===Pt&&Ot.layers.test(de.layers)){let Bi=St.side;St.side=Qt,St.needsUpdate=!0,lt(Ot,he,de,Un,St,tt),St.side=Bi,St.needsUpdate=!0,ct=!0}}ct===!0&&(U.updateMultisampleRenderTarget(ze),U.updateRenderTargetMipmap(ze))}_.setRenderTarget(je),_.setClearColor(L,F),rt!==void 0&&(de.viewport=rt),_.toneMapping=Je}function st(P,Q,he){let de=Q.isScene===!0?Q.overrideMaterial:null;for(let ne=0,ze=P.length;ne<ze;ne++){let Ye=P[ne],je=Ye.object,Je=Ye.geometry,rt=de===null?Ye.material:de,ct=Ye.group;je.layers.test(he.layers)&&lt(je,Q,he,Je,rt,ct)}}function lt(P,Q,he,de,ne,ze){P.onBeforeRender(_,Q,he,de,ne,ze),P.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ne.onBeforeRender(_,Q,he,de,P,ze),ne.transparent===!0&&ne.side===Pt&&ne.forceSinglePass===!1?(ne.side=Qt,ne.needsUpdate=!0,_.renderBufferDirect(he,Q,de,ne,P,ze),ne.side=Ri,ne.needsUpdate=!0,_.renderBufferDirect(he,Q,de,ne,P,ze),ne.side=Pt):_.renderBufferDirect(he,Q,de,ne,P,ze),P.onAfterRender(_,Q,he,de,ne,ze)}function Et(P,Q,he){Q.isScene!==!0&&(Q=pe);let de=Fe.get(P),ne=d.state.lights,ze=d.state.shadowsArray,Ye=ne.state.version,je=Ve.getParameters(P,ne.state,ze,Q,he),Je=Ve.getProgramCacheKey(je),rt=de.programs;de.environment=P.isMeshStandardMaterial?Q.environment:null,de.fog=Q.fog,de.envMap=(P.isMeshStandardMaterial?te:R).get(P.envMap||de.environment),de.envMapRotation=de.environment!==null&&P.envMap===null?Q.environmentRotation:P.envMapRotation,rt===void 0&&(P.addEventListener("dispose",ye),rt=new Map,de.programs=rt);let ct=rt.get(Je);if(ct!==void 0){if(de.currentProgram===ct&&de.lightsStateVersion===Ye)return Lt(P,je),ct}else je.uniforms=Ve.getUniforms(P),P.onBeforeCompile(je,_),ct=Ve.acquireProgram(je,Je),rt.set(Je,ct),de.uniforms=je.uniforms;let Qe=de.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Qe.clippingPlanes=be.uniform),Lt(P,je),de.needsLights=gn(P),de.lightsStateVersion=Ye,de.needsLights&&(Qe.ambientLightColor.value=ne.state.ambient,Qe.lightProbe.value=ne.state.probe,Qe.directionalLights.value=ne.state.directional,Qe.directionalLightShadows.value=ne.state.directionalShadow,Qe.spotLights.value=ne.state.spot,Qe.spotLightShadows.value=ne.state.spotShadow,Qe.rectAreaLights.value=ne.state.rectArea,Qe.ltc_1.value=ne.state.rectAreaLTC1,Qe.ltc_2.value=ne.state.rectAreaLTC2,Qe.pointLights.value=ne.state.point,Qe.pointLightShadows.value=ne.state.pointShadow,Qe.hemisphereLights.value=ne.state.hemi,Qe.directionalShadowMap.value=ne.state.directionalShadowMap,Qe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Qe.spotShadowMap.value=ne.state.spotShadowMap,Qe.spotLightMatrix.value=ne.state.spotLightMatrix,Qe.spotLightMap.value=ne.state.spotLightMap,Qe.pointShadowMap.value=ne.state.pointShadowMap,Qe.pointShadowMatrix.value=ne.state.pointShadowMatrix),de.currentProgram=ct,de.uniformsList=null,ct}function Ht(P){if(P.uniformsList===null){let Q=P.currentProgram.getUniforms();P.uniformsList=Xr.seqWithValue(Q.seq,P.uniforms)}return P.uniformsList}function Lt(P,Q){let he=Fe.get(P);he.outputColorSpace=Q.outputColorSpace,he.batching=Q.batching,he.batchingColor=Q.batchingColor,he.instancing=Q.instancing,he.instancingColor=Q.instancingColor,he.instancingMorph=Q.instancingMorph,he.skinning=Q.skinning,he.morphTargets=Q.morphTargets,he.morphNormals=Q.morphNormals,he.morphColors=Q.morphColors,he.morphTargetsCount=Q.morphTargetsCount,he.numClippingPlanes=Q.numClippingPlanes,he.numIntersection=Q.numClipIntersection,he.vertexAlphas=Q.vertexAlphas,he.vertexTangents=Q.vertexTangents,he.toneMapping=Q.toneMapping}function Vt(P,Q,he,de,ne){Q.isScene!==!0&&(Q=pe),U.resetTextureUnits();let ze=Q.fog,Ye=de.isMeshStandardMaterial?Q.environment:null,je=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Sn,Je=(de.isMeshStandardMaterial?te:R).get(de.envMap||Ye),rt=de.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,ct=!!he.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),Qe=!!he.morphAttributes.position,Mt=!!he.morphAttributes.normal,Dt=!!he.morphAttributes.color,Ot=xs;de.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ot=_.toneMapping);let Un=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,St=Un!==void 0?Un.length:0,tt=Fe.get(de),Bi=d.state.lights;if(se===!0&&(re===!0||P!==b)){let Qn=P===b&&de.id===y;be.setState(de,P,Qn)}let Tt=!1;de.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Bi.state.version||tt.outputColorSpace!==je||ne.isBatchedMesh&&tt.batching===!1||!ne.isBatchedMesh&&tt.batching===!0||ne.isBatchedMesh&&tt.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&tt.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&tt.instancing===!1||!ne.isInstancedMesh&&tt.instancing===!0||ne.isSkinnedMesh&&tt.skinning===!1||!ne.isSkinnedMesh&&tt.skinning===!0||ne.isInstancedMesh&&tt.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&tt.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&tt.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&tt.instancingMorph===!1&&ne.morphTexture!==null||tt.envMap!==Je||de.fog===!0&&tt.fog!==ze||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==be.numPlanes||tt.numIntersection!==be.numIntersection)||tt.vertexAlphas!==rt||tt.vertexTangents!==ct||tt.morphTargets!==Qe||tt.morphNormals!==Mt||tt.morphColors!==Dt||tt.toneMapping!==Ot||tt.morphTargetsCount!==St)&&(Tt=!0):(Tt=!0,tt.__version=de.version);let di=tt.currentProgram;Tt===!0&&(di=Et(de,Q,ne));let _r=!1,Vn=!1,Ro=!1,Bt=di.getUniforms(),Ei=tt.uniforms;if(Ae.useProgram(di.program)&&(_r=!0,Vn=!0,Ro=!0),de.id!==y&&(y=de.id,Vn=!0),_r||b!==P){Ae.buffers.depth.getReversed()?(I.copy(P.projectionMatrix),rv(I),ov(I),Bt.setValue(X,"projectionMatrix",I)):Bt.setValue(X,"projectionMatrix",P.projectionMatrix),Bt.setValue(X,"viewMatrix",P.matrixWorldInverse);let os=Bt.map.cameraPosition;os!==void 0&&os.setValue(X,q.setFromMatrixPosition(P.matrixWorld)),Ue.logarithmicDepthBuffer&&Bt.setValue(X,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&Bt.setValue(X,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,Vn=!0,Ro=!0)}if(ne.isSkinnedMesh){Bt.setOptional(X,ne,"bindMatrix"),Bt.setOptional(X,ne,"bindMatrixInverse");let Qn=ne.skeleton;Qn&&(Qn.boneTexture===null&&Qn.computeBoneTexture(),Bt.setValue(X,"boneTexture",Qn.boneTexture,U))}ne.isBatchedMesh&&(Bt.setOptional(X,ne,"batchingTexture"),Bt.setValue(X,"batchingTexture",ne._matricesTexture,U),Bt.setOptional(X,ne,"batchingIdTexture"),Bt.setValue(X,"batchingIdTexture",ne._indirectTexture,U),Bt.setOptional(X,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Bt.setValue(X,"batchingColorTexture",ne._colorsTexture,U));let Co=he.morphAttributes;if((Co.position!==void 0||Co.normal!==void 0||Co.color!==void 0)&&Ce.update(ne,he,di),(Vn||tt.receiveShadow!==ne.receiveShadow)&&(tt.receiveShadow=ne.receiveShadow,Bt.setValue(X,"receiveShadow",ne.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(Ei.envMap.value=Je,Ei.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&Q.environment!==null&&(Ei.envMapIntensity.value=Q.environmentIntensity),Vn&&(Bt.setValue(X,"toneMappingExposure",_.toneMappingExposure),tt.needsLights&&Xt(Ei,Ro),ze&&de.fog===!0&&Le.refreshFogUniforms(Ei,ze),Le.refreshMaterialUniforms(Ei,de,W,Y,d.state.transmissionRenderTarget[P.id]),Xr.upload(X,Ht(tt),Ei,U)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(Xr.upload(X,Ht(tt),Ei,U),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&Bt.setValue(X,"center",ne.center),Bt.setValue(X,"modelViewMatrix",ne.modelViewMatrix),Bt.setValue(X,"normalMatrix",ne.normalMatrix),Bt.setValue(X,"modelMatrix",ne.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){let Qn=de.uniformsGroups;for(let os=0,as=Qn.length;os<as;os++){let Cd=Qn[os];N.update(Cd,di),N.bind(Cd,di)}}return di}function Xt(P,Q){P.ambientLightColor.needsUpdate=Q,P.lightProbe.needsUpdate=Q,P.directionalLights.needsUpdate=Q,P.directionalLightShadows.needsUpdate=Q,P.pointLights.needsUpdate=Q,P.pointLightShadows.needsUpdate=Q,P.spotLights.needsUpdate=Q,P.spotLightShadows.needsUpdate=Q,P.rectAreaLights.needsUpdate=Q,P.hemisphereLights.needsUpdate=Q}function gn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(P,Q,he){Fe.get(P.texture).__webglTexture=Q,Fe.get(P.depthTexture).__webglTexture=he;let de=Fe.get(P);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=he===void 0,de.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Q){let he=Fe.get(P);he.__webglFramebuffer=Q,he.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(P,Q=0,he=0){w=P,T=Q,v=he;let de=!0,ne=null,ze=!1,Ye=!1;if(P){let Je=Fe.get(P);if(Je.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(X.FRAMEBUFFER,null),de=!1;else if(Je.__webglFramebuffer===void 0)U.setupRenderTarget(P);else if(Je.__hasExternalTextures)U.rebindTextures(P,Fe.get(P.texture).__webglTexture,Fe.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Qe=P.depthTexture;if(Je.__boundDepthTexture!==Qe){if(Qe!==null&&Fe.has(Qe)&&(P.width!==Qe.image.width||P.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(P)}}let rt=P.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ye=!0);let ct=Fe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ct[Q])?ne=ct[Q][he]:ne=ct[Q],ze=!0):P.samples>0&&U.useMultisampledRTT(P)===!1?ne=Fe.get(P).__webglMultisampledFramebuffer:Array.isArray(ct)?ne=ct[he]:ne=ct,A.copy(P.viewport),D.copy(P.scissor),O=P.scissorTest}else A.copy(ve).multiplyScalar(W).floor(),D.copy(Se).multiplyScalar(W).floor(),O=ge;if(Ae.bindFramebuffer(X.FRAMEBUFFER,ne)&&de&&Ae.drawBuffers(P,ne),Ae.viewport(A),Ae.scissor(D),Ae.setScissorTest(O),ze){let Je=Fe.get(P.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Je.__webglTexture,he)}else if(Ye){let Je=Fe.get(P.texture),rt=Q||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Je.__webglTexture,he||0,rt)}y=-1},this.readRenderTargetPixels=function(P,Q,he,de,ne,ze,Ye){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Fe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ye!==void 0&&(je=je[Ye]),je){Ae.bindFramebuffer(X.FRAMEBUFFER,je);try{let Je=P.texture,rt=Je.format,ct=Je.type;if(!Ue.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=P.width-de&&he>=0&&he<=P.height-ne&&X.readPixels(Q,he,de,ne,k.convert(rt),k.convert(ct),ze)}finally{let Je=w!==null?Fe.get(w).__webglFramebuffer:null;Ae.bindFramebuffer(X.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(P,Q,he,de,ne,ze,Ye){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=Fe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ye!==void 0&&(je=je[Ye]),je){let Je=P.texture,rt=Je.format,ct=Je.type;if(!Ue.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=P.width-de&&he>=0&&he<=P.height-ne){Ae.bindFramebuffer(X.FRAMEBUFFER,je);let Qe=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Qe),X.bufferData(X.PIXEL_PACK_BUFFER,ze.byteLength,X.STREAM_READ),X.readPixels(Q,he,de,ne,k.convert(rt),k.convert(ct),0);let Mt=w!==null?Fe.get(w).__webglFramebuffer:null;Ae.bindFramebuffer(X.FRAMEBUFFER,Mt);let Dt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await sv(X,Dt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Qe),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,ze),X.deleteBuffer(Qe),X.deleteSync(Dt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,Q=null,he=0){P.isTexture!==!0&&(Ho("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,P=arguments[1]);let de=Math.pow(2,-he),ne=Math.floor(P.image.width*de),ze=Math.floor(P.image.height*de),Ye=Q!==null?Q.x:0,je=Q!==null?Q.y:0;U.setTexture2D(P,0),X.copyTexSubImage2D(X.TEXTURE_2D,he,0,0,Ye,je,ne,ze),Ae.unbindTexture()},this.copyTextureToTexture=function(P,Q,he=null,de=null,ne=0){P.isTexture!==!0&&(Ho("WebGLRenderer: copyTextureToTexture function signature has changed."),de=arguments[0]||null,P=arguments[1],Q=arguments[2],ne=arguments[3]||0,he=null);let ze,Ye,je,Je,rt,ct,Qe,Mt,Dt,Ot=P.isCompressedTexture?P.mipmaps[ne]:P.image;he!==null?(ze=he.max.x-he.min.x,Ye=he.max.y-he.min.y,je=he.isBox3?he.max.z-he.min.z:1,Je=he.min.x,rt=he.min.y,ct=he.isBox3?he.min.z:0):(ze=Ot.width,Ye=Ot.height,je=Ot.depth||1,Je=0,rt=0,ct=0),de!==null?(Qe=de.x,Mt=de.y,Dt=de.z):(Qe=0,Mt=0,Dt=0);let Un=k.convert(Q.format),St=k.convert(Q.type),tt;Q.isData3DTexture?(U.setTexture3D(Q,0),tt=X.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(U.setTexture2DArray(Q,0),tt=X.TEXTURE_2D_ARRAY):(U.setTexture2D(Q,0),tt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Q.unpackAlignment);let Bi=X.getParameter(X.UNPACK_ROW_LENGTH),Tt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),di=X.getParameter(X.UNPACK_SKIP_PIXELS),_r=X.getParameter(X.UNPACK_SKIP_ROWS),Vn=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Ot.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ot.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Je),X.pixelStorei(X.UNPACK_SKIP_ROWS,rt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ct);let Ro=P.isDataArrayTexture||P.isData3DTexture,Bt=Q.isDataArrayTexture||Q.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let Ei=Fe.get(P),Co=Fe.get(Q),Qn=Fe.get(Ei.__renderTarget),os=Fe.get(Co.__renderTarget);Ae.bindFramebuffer(X.READ_FRAMEBUFFER,Qn.__webglFramebuffer),Ae.bindFramebuffer(X.DRAW_FRAMEBUFFER,os.__webglFramebuffer);for(let as=0;as<je;as++)Ro&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Fe.get(P).__webglTexture,ne,ct+as),P.isDepthTexture?(Bt&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Fe.get(Q).__webglTexture,ne,Dt+as),X.blitFramebuffer(Je,rt,ze,Ye,Qe,Mt,ze,Ye,X.DEPTH_BUFFER_BIT,X.NEAREST)):Bt?X.copyTexSubImage3D(tt,ne,Qe,Mt,Dt+as,Je,rt,ze,Ye):X.copyTexSubImage2D(tt,ne,Qe,Mt,Dt+as,Je,rt,ze,Ye);Ae.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Bt?P.isDataTexture||P.isData3DTexture?X.texSubImage3D(tt,ne,Qe,Mt,Dt,ze,Ye,je,Un,St,Ot.data):Q.isCompressedArrayTexture?X.compressedTexSubImage3D(tt,ne,Qe,Mt,Dt,ze,Ye,je,Un,Ot.data):X.texSubImage3D(tt,ne,Qe,Mt,Dt,ze,Ye,je,Un,St,Ot):P.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ne,Qe,Mt,ze,Ye,Un,St,Ot.data):P.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ne,Qe,Mt,Ot.width,Ot.height,Un,Ot.data):X.texSubImage2D(X.TEXTURE_2D,ne,Qe,Mt,ze,Ye,Un,St,Ot);X.pixelStorei(X.UNPACK_ROW_LENGTH,Bi),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Tt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,di),X.pixelStorei(X.UNPACK_SKIP_ROWS,_r),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Vn),ne===0&&Q.generateMipmaps&&X.generateMipmap(tt),Ae.unbindTexture()},this.copyTextureToTexture3D=function(P,Q,he=null,de=null,ne=0){return P.isTexture!==!0&&(Ho("WebGLRenderer: copyTextureToTexture3D function signature has changed."),he=arguments[0]||null,de=arguments[1]||null,P=arguments[2],Q=arguments[3],ne=arguments[4]||0),Ho('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,Q,he,de,ne)},this.initRenderTarget=function(P){Fe.get(P).__webglFramebuffer===void 0&&U.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?U.setTextureCube(P,0):P.isData3DTexture?U.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?U.setTexture2DArray(P,0):U.setTexture2D(P,0),Ae.unbindTexture()},this.resetState=function(){T=0,v=0,w=null,Ae.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}},no=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Jo=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},io=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=eh,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Rn=new V,ir=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},so=class extends Mn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ur,No=new V,Fr=new V,Or=new V,Br=new $e,Uo=new $e,vm=new Ze,Ja=new V,Fo=new V,Qa=new V,Pp=new $e,fu=new $e,Ip=new $e,Qo=class extends Ut{constructor(e=new so){if(super(),this.isSprite=!0,this.type="Sprite",Ur===void 0){Ur=new mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new io(t,5);Ur.setIndex([0,1,2,0,2,3]),Ur.setAttribute("position",new ir(i,3,0,!1)),Ur.setAttribute("uv",new ir(i,2,3,!1))}this.geometry=Ur,this.material=e,this.center=new $e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fr.setFromMatrixScale(this.matrixWorld),vm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fr.multiplyScalar(-Or.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;el(Ja.set(-.5,-.5,0),Or,o,Fr,s,r),el(Fo.set(.5,-.5,0),Or,o,Fr,s,r),el(Qa.set(.5,.5,0),Or,o,Fr,s,r),Pp.set(0,0),fu.set(1,0),Ip.set(1,1);let a=e.ray.intersectTriangle(Ja,Fo,Qa,!1,No);if(a===null&&(el(Fo.set(-.5,.5,0),Or,o,Fr,s,r),fu.set(0,1),a=e.ray.intersectTriangle(Ja,Qa,Fo,!1,No),a===null))return;let l=e.ray.origin.distanceTo(No);l<e.near||l>e.far||t.push({distance:l,point:No.clone(),uv:ms.getInterpolation(No,Ja,Fo,Qa,Pp,fu,Ip,new $e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function el(n,e,t,i,s,r){Br.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Uo.x=r*Br.x-s*Br.y,Uo.y=s*Br.x+r*Br.y):Uo.copy(Br),n.copy(e),n.x+=Uo.x,n.y+=Uo.y,n.applyMatrix4(vm)}var Lp=new V,Dp=new _t,Np=new _t,QM=new V,Up=new Ze,tl=new V,du=new Xn,Fp=new Ze,pu=new Jr,bl=class extends it{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dd,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ni),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,tl),this.boundingBox.expandByPoint(tl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,tl),this.boundingSphere.expandByPoint(tl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),du.copy(this.boundingSphere),du.applyMatrix4(s),e.ray.intersectsSphere(du)!==!1&&(Fp.copy(s).invert(),pu.copy(e.ray).applyMatrix4(Fp),!(this.boundingBox!==null&&pu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Dd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Dp.fromBufferAttribute(s.attributes.skinIndex,e),Np.fromBufferAttribute(s.attributes.skinWeight,e),Lp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Np.getComponent(r);if(o!==0){let a=Dp.getComponent(r);Up.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(QM.copy(Lp).applyMatrix4(Up),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},ea=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ss=class extends ln{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Kt,u=Kt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Op=new Ze,eb=new Ze,Sl=class n{constructor(e=[],t=[]){this.uuid=_i(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ze;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:eb;Op.multiplyMatrices(a,t[r]),Op.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ss(t,e,e,Bn,yi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ea),this.bones.push(o),this.boneInverses.push(new Ze().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},sr=class extends pt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zr=new Ze,Bp=new Ze,nl=[],zp=new ni,tb=new Ze,Oo=new it,Bo=new Xn,bn=class extends it{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,tb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zr),zp.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(zp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zr),Bo.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(Bo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Oo.geometry=this.geometry,Oo.material=this.material,Oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bo.copy(this.boundingSphere),Bo.applyMatrix4(i),e.ray.intersectsSphere(Bo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zr),Bp.multiplyMatrices(i,zr),Oo.matrixWorld=Bp,Oo.raycast(e,nl);for(let o=0,a=nl.length;o<a;o++){let l=nl[o];l.instanceId=r,l.object=this,t.push(l)}nl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ss(new Float32Array(s*this.count),s,this.count,Hh,yi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ts=class extends Mn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Tl=new V,wl=new V,kp=new Ze,zo=new Jr,il=new Xn,mu=new V,Hp=new V,ro=class extends Ut{constructor(e=new mt,t=new Ts){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Tl.fromBufferAttribute(t,s-1),wl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Tl.distanceTo(wl);e.setAttribute("lineDistance",new ot(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(s),il.radius+=r,e.ray.intersectsSphere(il)===!1)return;kp.copy(s).invert(),zo.copy(e.ray).applyMatrix4(kp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let d=u.getX(x),S=u.getX(x+1),M=sl(this,e,zo,l,d,S);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(p),d=sl(this,e,zo,l,x,m);d&&t.push(d)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let d=sl(this,e,zo,l,x,x+1);d&&t.push(d)}if(this.isLineLoop){let x=sl(this,e,zo,l,g-1,p);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function sl(n,e,t,i,s,r){let o=n.geometry.attributes.position;if(Tl.fromBufferAttribute(o,s),wl.fromBufferAttribute(o,r),t.distanceSqToSegment(Tl,wl,mu,Hp)>i)return;mu.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(mu);if(!(l<e.near||l>e.far))return{distance:l,point:Hp.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Vp=new V,Gp=new V,rr=class extends ro{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Vp.fromBufferAttribute(t,s),Gp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Vp.distanceTo(Gp);e.setAttribute("lineDistance",new ot(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},El=class extends ro{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},or=class extends Mn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wp=new Ze,xh=new Jr,rl=new Xn,ol=new V,ws=class extends Ut{constructor(e=new mt,t=new or){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(s),rl.radius+=r,e.ray.intersectsSphere(rl)===!1)return;Wp.copy(s).invert(),xh.copy(e.ray).applyMatrix4(Wp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,x=p;g<x;g++){let m=c.getX(g);ol.fromBufferAttribute(h,m),Xp(ol,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,x=p;g<x;g++)ol.fromBufferAttribute(h,g),Xp(ol,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xp(n,e,t,i,s,r,o){let a=xh.distanceSqToPoint(n);if(a<t){let l=new V;xh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ii=class extends ln{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var In=class n extends mt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],g=0,x=[],m=i/2,d=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(f,3)),this.setAttribute("uv",new ot(p,2));function S(){let _=new V,E=new V,T=0,v=(t-e)/i;for(let w=0;w<=r;w++){let y=[],b=w/r,A=b*(t-e)+e;for(let D=0;D<=s;D++){let O=D/s,L=O*l+a,F=Math.sin(L),B=Math.cos(L);E.x=A*F,E.y=-b*i+m,E.z=A*B,h.push(E.x,E.y,E.z),_.set(F,v,B).normalize(),f.push(_.x,_.y,_.z),p.push(O,1-b),y.push(g++)}x.push(y)}for(let w=0;w<s;w++)for(let y=0;y<r;y++){let b=x[y][w],A=x[y+1][w],D=x[y+1][w+1],O=x[y][w+1];(e>0||y!==0)&&(u.push(b,A,O),T+=3),(t>0||y!==r-1)&&(u.push(A,D,O),T+=3)}c.addGroup(d,T,0),d+=T}function M(_){let E=g,T=new $e,v=new V,w=0,y=_===!0?e:t,b=_===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,m*b,0),f.push(0,b,0),p.push(.5,.5),g++;let A=g;for(let D=0;D<=s;D++){let L=D/s*l+a,F=Math.cos(L),B=Math.sin(L);v.x=y*B,v.y=m*b,v.z=y*F,h.push(v.x,v.y,v.z),f.push(0,b,0),T.x=F*.5+.5,T.y=B*.5*b+.5,p.push(T.x,T.y),g++}for(let D=0;D<s;D++){let O=E+D,L=A+D;_===!0?u.push(L,L+1,O):u.push(L+1,L,O),w+=3}c.addGroup(d,w,_===!0?1:2),d+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ar=class n extends In{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},vh=class n extends mt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let M=new V,_=new V,E=new V;for(let T=0;T<t.length;T+=3)p(t[T+0],M),p(t[T+1],_),p(t[T+2],E),l(M,_,E,S)}function l(S,M,_,E){let T=E+1,v=[];for(let w=0;w<=T;w++){v[w]=[];let y=S.clone().lerp(_,w/T),b=M.clone().lerp(_,w/T),A=T-w;for(let D=0;D<=A;D++)D===0&&w===T?v[w][D]=y:v[w][D]=y.clone().lerp(b,D/A)}for(let w=0;w<T;w++)for(let y=0;y<2*(T-w)-1;y++){let b=Math.floor(y/2);y%2===0?(f(v[w][b+1]),f(v[w+1][b]),f(v[w][b])):(f(v[w][b+1]),f(v[w+1][b+1]),f(v[w+1][b]))}}function c(S){let M=new V;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(S),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function u(){let S=new V;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];let _=m(S)/2/Math.PI+.5,E=d(S)/Math.PI+.5;o.push(_,1-E)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){let M=o[S+0],_=o[S+2],E=o[S+4],T=Math.max(M,_,E),v=Math.min(M,_,E);T>.9&&v<.1&&(M<.2&&(o[S+0]+=1),_<.2&&(o[S+2]+=1),E<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function p(S,M){let _=S*3;M.x=e[_+0],M.y=e[_+1],M.z=e[_+2]}function g(){let S=new V,M=new V,_=new V,E=new V,T=new $e,v=new $e,w=new $e;for(let y=0,b=0;y<r.length;y+=9,b+=6){S.set(r[y+0],r[y+1],r[y+2]),M.set(r[y+3],r[y+4],r[y+5]),_.set(r[y+6],r[y+7],r[y+8]),T.set(o[b+0],o[b+1]),v.set(o[b+2],o[b+3]),w.set(o[b+4],o[b+5]),E.copy(S).add(M).add(_).divideScalar(3);let A=m(E);x(T,b+0,S,A),x(v,b+2,M,A),x(w,b+4,_,A)}}function x(S,M,_,E){E<0&&S.x===1&&(o[M]=S.x-1),_.x===0&&_.z===0&&(o[M]=E/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var lr=class n extends vh{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Es=class n extends mt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new V,f=new V,p=[],g=[],x=[],m=[];for(let d=0;d<=i;d++){let S=[],M=d/i,_=0;d===0&&o===0?_=.5/t:d===i&&l===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){let T=E/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(T+_,1-M),S.push(c++)}u.push(S)}for(let d=0;d<i;d++)for(let S=0;S<t;S++){let M=u[d][S+1],_=u[d][S],E=u[d+1][S],T=u[d+1][S+1];(d!==0||o>0)&&p.push(M,_,T),(d!==i-1||l<Math.PI)&&p.push(_,E,T)}this.setIndex(p),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Al=class extends vt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},nt=class extends Mn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qn=class extends nt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _n(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Rl=class extends Mn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},si=class extends Mn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function al(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function nb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ib(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function qp(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function ym(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var As=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yh=class extends As{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nd,endingEnd:Nd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ud:r=e,a=2*t-i;break;case Fd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ud:o=e,l=2*i-t;break;case Fd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,S=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,M=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let E=0;E!==a;++E)r[E]=d*o[u+E]+S*o[c+E]+M*o[l+E]+_*o[h+E];return r}},_h=class extends As{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Mh=class extends As{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ri=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=al(t,this.TimeBufferType),this.values=al(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:al(e.times,Array),values:al(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _h(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zr:t=this.InterpolantFactoryMethodDiscrete;break;case Kr:t=this.InterpolantFactoryMethodLinear;break;case zc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return Kr;case this.InterpolantFactoryMethodSmooth:return zc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&nb(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===zc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,f=h-i,p=h+i;for(let g=0;g!==i;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=Kr;var Rs=class extends ri{constructor(e,t,i){super(e,t,i)}};Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=Zr;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends ri{};Cl.prototype.ValueTypeName="color";var Zi=class extends ri{};Zi.prototype.ValueTypeName="number";var bh=class extends As{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)sn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ki=class extends ri{InterpolantFactoryMethodLinear(e){return new bh(this.times,this.values,this.getValueSize(),e)}};Ki.prototype.ValueTypeName="quaternion";Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends ri{constructor(e,t,i){super(e,t,i)}};Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Zr;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends ri{};ji.prototype.ValueTypeName="vector";var Pl=class{constructor(e="",t=-1,i=[],s=Px){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=_i(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(rb(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(ri.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=ib(l);l=qp(l,1,u),c=qp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Zi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,f,p,g,x){if(p.length!==0){let m=[],d=[];ym(p,m,d,g),m.length!==0&&x.push(new h(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)p[f[g].morphTargets[x]]=-1;for(let x in p){let m=[],d=[];for(let S=0;S!==f[g].morphTargets.length;++S){let M=f[g];m.push(M.time),d.push(M.morphTarget===x?1:0)}s.push(new Zi(".morphTargetInfluence["+x+"]",m,d))}l=p.length*o}else{let p=".bones["+t[h].name+"]";i(ji,p+".position",f,"pos",s),i(Ki,p+".quaternion",f,"rot",s),i(ji,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function sb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zi;case"vector":case"vector2":case"vector3":case"vector4":return ji;case"color":return Cl;case"quaternion":return Ki;case"bool":case"boolean":return Rs;case"string":return Cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function rb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=sb(n.type);if(n.times===void 0){let t=[],i=[];ym(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var gs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Sh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},ob=new Sh,Ji=class{constructor(e){this.manager=e!==void 0?e:ob,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ji.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wi={},Th=class extends Error{constructor(e,t){super(e),this.response=t}},ta=class extends Ji{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=gs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Wi[e]!==void 0){Wi[e].push({onLoad:t,onProgress:i,onError:s});return}Wi[e]=[],Wi[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Wi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,x=0,m=new ReadableStream({start(d){S();function S(){h.read().then(({done:M,value:_})=>{if(M)d.close();else{x+=_.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let T=0,v=u.length;T<v;T++){let w=u[T];w.onProgress&&w.onProgress(E)}d.enqueue(_),S()}},M=>{d.error(M)})}}});return new Response(m)}else throw new Th(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{gs.add(e,c);let u=Wi[e];delete Wi[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=Wi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Wi[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var wh=class extends Ji{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=gs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Ko("img");function l(){u(),gs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Il=class extends Ji{constructor(e){super(e)}load(e,t,i,s){let r=new ln,o=new wh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},oo=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ao=class extends oo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},gu=new Ze,Yp=new V,$p=new V,na=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jo,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Yp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yp),$p.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($p),t.updateMatrixWorld(),gu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Eh=class extends na{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=jr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},lo=class extends oo{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Eh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Zp=new Ze,ko=new V,xu=new V,Ah=class extends na{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ko.setFromMatrixPosition(e.matrixWorld),i.position.copy(ko),xu.copy(i.position),xu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(xu),i.updateMatrixWorld(),s.makeTranslation(-ko.x,-ko.y,-ko.z),Zp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zp)}},Ll=class extends oo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ah}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Rh=class extends na{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ci=class extends oo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Rh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ps=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Dl=class extends Ji{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=gs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return gs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),gs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});gs.add(e,l),r.manager.itemStart(e)}};var Nl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Kp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Kp(){return performance.now()}var Yh="\\[\\]\\.:\\/",ab=new RegExp("["+Yh+"]","g"),$h="[^"+Yh+"]",lb="[^"+Yh.replace("\\.","")+"]",cb=/((?:WC+[\/:])*)/.source.replace("WC",$h),ub=/(WCOD+)?/.source.replace("WCOD",lb),hb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),fb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),db=new RegExp("^"+cb+ub+hb+fb+"$"),pb=["material","materials","bones","map"],Ch=class{constructor(e,t,i){let s=i||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Nt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ab,"")}static parseTrackName(e){let t=db.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);pb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=Ch;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var IE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var oa=class n extends it{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Zt;let i=this,s=t.color!==void 0?new Ie(t.color):new Ie(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new xi,h=new V,f=new V,p=new V,g=new Ze,x=new V(0,0,-1),m=new _t,d=new V,S=new V,M=new _t,_=new Ze,E=this.camera,T=new qt(r,o,{samples:c,type:un}),v=new vt({name:l.name!==void 0?l.name:"unspecified",uniforms:Tn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});v.uniforms.tDiffuse.value=T.texture,v.uniforms.color.value=s,v.uniforms.textureMatrix.value=_,this.material=v,this.onBeforeRender=function(w,y,b){if(f.setFromMatrixPosition(i.matrixWorld),p.setFromMatrixPosition(b.matrixWorld),g.extractRotation(i.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),d.subVectors(f,p),d.dot(h)>0)return;d.reflect(h).negate(),d.add(f),g.extractRotation(b.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(p),S.subVectors(f,x),S.reflect(h).negate(),S.add(f),E.position.copy(d),E.up.set(0,1,0),E.up.applyMatrix4(g),E.up.reflect(h),E.lookAt(S),E.far=b.far,E.updateMatrixWorld(),E.projectionMatrix.copy(b.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(E.projectionMatrix),_.multiply(E.matrixWorldInverse),_.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(E.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let A=E.projectionMatrix;M.x=(Math.sign(m.x)+A.elements[8])/A.elements[0],M.y=(Math.sign(m.y)+A.elements[9])/A.elements[5],M.z=-1,M.w=(1+A.elements[10])/A.elements[14],m.multiplyScalar(2/m.dot(M)),A.elements[2]=m.x,A.elements[6]=m.y,A.elements[10]=m.z+1-a,A.elements[14]=m.w,i.visible=!1;let D=w.getRenderTarget(),O=w.xr.enabled,L=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(T),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(y,E),w.xr.enabled=O,w.shadowMap.autoUpdate=L,w.setRenderTarget(D);let F=b.viewport;F!==void 0&&w.state.viewport(F),i.visible=!0},this.getRenderTarget=function(){return T},this.dispose=function(){T.dispose(),i.material.dispose()}}};oa.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Gl=[25,18,15,12,10,8,6,4],cr={maxSpeed:80,accel:26,brake:30,steerRate:1.7,steerHighSpeed:.75,grip:1,wetGrip:.78,driftBonus:1.6,airControl:.12,airStability:1,landing:1,boostPower:1.22,boostDuration:2.2,boostCharges:3,offroadDrag:1,wallLoss:.25,steerNoise:0,slipstream:1},Is={sunset:{id:"sunset",name:"Fin d'apr\xE8s-midi",grip:1,wet:0,rain:0,wind:0,sheen:.9,skyTop:8825052,skyHorizon:15785172,fogColor:14074548,fogDensity:52e-5,sunColor:16756316,sunIntensity:4.6,sunDir:[-.5,.21,-.62],hemiSky:12899050,hemiGround:9399366,hemiIntensity:.8,seaColor:2786996,night:!1,bloom:.34},sicily:{id:"sicily",name:"Apr\xE8s-midi sicilien",grip:1,wet:0,rain:0,wind:.1,sheen:.2,skyTop:4885468,skyHorizon:13623792,fogColor:13425124,fogDensity:5e-4,sunColor:16773854,sunIntensity:3.3,sunDir:[-.45,.62,-.4],hemiSky:12375282,hemiGround:8156256,hemiIntensity:.85,seaColor:1994664,night:!1,bloom:.25},rain:{id:"rain",name:"Nuit pluvieuse",grip:.8,wet:1,rain:1,wind:.6,skyTop:329231,skyHorizon:1711933,fogColor:1317427,fogDensity:.0028,sunColor:7375103,sunIntensity:.7,sunDir:[.4,.7,.3],hemiSky:3820170,hemiGround:1052696,hemiIntensity:.75,seaColor:662067,night:!0,bloom:1},fog:{id:"fog",name:"Brume matinale",grip:.92,wet:.35,rain:0,wind:.2,skyTop:10467535,skyHorizon:15262418,fogColor:14277846,fogDensity:.0052,sunColor:16773328,sunIntensity:1.5,sunDir:[.5,.35,.5],hemiSky:13621734,hemiGround:7301722,hemiIntensity:1.1,seaColor:6262687,night:!1,bloom:.35}};function aa(n){let e=String(n),t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t^=t>>>15,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}function Yn(n){let e=(typeof n=="number"?n>>>0:aa(n))||1,t=e,i=()=>{e=e+1831565813>>>0;let s=e;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};return{next:i,range:(s,r)=>s+(r-s)*i(),int:(s,r)=>s+Math.floor(i()*(r-s+1)),pick:s=>s[Math.floor(i()*s.length)],chance:s=>i()<s,sign:()=>i()<.5?-1:1,shuffle:s=>{let r=s.slice();for(let o=r.length-1;o>0;o--){let a=Math.floor(i()*(o+1));[r[o],r[a]]=[r[a],r[o]]}return r},fork:s=>Yn(aa(t+":"+s))}}var Wl=Math.PI*2,mb=2,_m=2800,Mm=4200,gb=34,bm=8,Sm=60,xb=.12,vb=.1,Tm=28,yb=150,Zh=52,Qh=.0025,wm=1/150,_b=10,Em=5,Am=250,Rm=38,Cm=75,Xl=150,jh=120,Dm=10,Mb=80,bb=40,Sb=20,Tb=30,wb=95,Kh=18,Pm=22,Eb=60,Jh=(n,e,t)=>n<e?e:n>t?t:n;function Ab(n){let e=n.int(10,14),t=n.range(440,520),i=[];for(let s=0;s<e;s++){let r=n.range(-.3,.3)*(Wl/e),o=s/e*Wl+r,a=Jh(t*n.range(.62,1.25),380,620);i.push([a*Math.cos(o),a*Math.sin(o)])}return i}function Rb(n,e,t,i,s,r,o,a,l){let c=(x,m,d,S)=>{let M=(l-d)/(S-d);return[x[0]+(m[0]-x[0])*M,x[1]+(m[1]-x[1])*M]},u=c(n,e,s,r),h=c(e,t,r,o),f=c(t,i,o,a),p=c(u,h,s,o),g=c(h,f,r,a);return c(p,g,r,o)}function Cb(n,e){let t=n.length,i=[];for(let s=0;s<t;s++){let r=n[(s-1+t)%t],o=n[s],a=n[(s+1)%t],l=n[(s+2)%t],c=0,u=c+Math.sqrt(Math.hypot(o[0]-r[0],o[1]-r[1])),h=u+Math.sqrt(Math.hypot(a[0]-o[0],a[1]-o[1])),f=h+Math.sqrt(Math.hypot(l[0]-a[0],l[1]-a[1]));for(let p=0;p<e;p++){let g=u+(h-u)*(p/e);i.push(Rb(r,o,a,l,c,u,h,f,g))}}return i}function Pb(n){let e=n.length,t=new Float64Array(e+1);for(let c=0;c<e;c++){let u=n[c],h=n[(c+1)%e];t[c+1]=t[c]+Math.hypot(h[0]-u[0],h[1]-u[1])}let i=t[e],s=Math.max(1,Math.round(i/mb)),r=i/s,o=new Float64Array(s),a=new Float64Array(s),l=0;for(let c=0;c<s;c++){let u=c*r;for(;l<e-1&&t[l+1]<=u;)l++;let h=n[l],f=n[(l+1)%e],p=t[l+1]-t[l],g=p>0?(u-t[l])/p:0;o[c]=h[0]+(f[0]-h[0])*g,a[c]=h[1]+(f[1]-h[1])*g}return{xs:o,zs:a,count:s,step:r}}function Im(n,e){let t=n.length,i=new Float64Array(t),s=2*e+1,r=0;for(let o=-e;o<=e;o++)r+=n[(o+t)%t];for(let o=0;o<t;o++)i[o]=r/s,r+=n[(o+1+e)%t]-n[((o-e)%t+t)%t];return i}function Ib(n,e,t){let i=n.length,s=new Float64Array(i),r=new Float64Array(i);for(let a=0;a<i;a++){let l=(a-1+i)%i,c=(a+1)%i,u=n[c]-n[l],h=e[c]-e[l],f=Math.hypot(u,h)||1;s[a]=u/f,r[a]=h/f}let o=new Float64Array(i);for(let a=0;a<i;a++){let l=(a-1+i)%i,c=(a+1)%i,u=(s[c]-s[l])/(2*t),h=(r[c]-r[l])/(2*t);o[a]=s[a]*h-r[a]*u}return o}function Lb(n,e){let t=n.length;for(let i=0;i<50;i++){let s=!1;for(let r=2*t-1;r>=0;r--){let o=r%t,a=(o+1)%t,l=Math.sqrt(n[a]*n[a]+2*bb*e);n[o]>l+1e-9&&(n[o]=l,s=!0)}for(let r=0;r<2*t;r++){let o=r%t,a=(o+1)%t,l=Math.sqrt(n[o]*n[o]+2*Sb*e);n[a]>l+1e-9&&(n[a]=l,s=!0)}if(!s)break}}function Lm(n){let e=n.length,t=-1;for(let r=0;r<e;r++)if(n[r]!==n[(r-1+e)%e]){t=r;break}if(t<0)return n[0]!==0?[{start:0,len:e,key:n[0]}]:[];let i=[],s=null;for(let r=0;r<e;r++){let o=(t+r)%e,a=n[o];s&&a===s.key?s.len++:(s&&s.key!==0&&i.push(s),s={start:o,len:1,key:a})}return s&&s.key!==0&&i.push(s),i}function Nm(n,e){let t=n.length,i=0;for(let s=0;s<t;s++){let r=n[s].vmax,o=n[(s+1)%t].vmax;i+=e/Math.max(1,.5*(r+o))}return i}function ef(n,e){let t=n.length,i=0,s=0,r=new Int8Array(t),o=new Int8Array(t);for(let c=0;c<t;c++){let u=n[c].curv,h=Math.abs(u);h>i&&(i=h);let f=Math.abs(n[c].slope);f>s&&(s=f),r[c]=u>wm?1:u<-wm?-1:0,o[c]=h<Qh?1:0}let a=0;for(let c of Lm(r))c.len*e>=_b&&a++;let l={start:0,len:0};for(let c of Lm(o))c.key===1&&c.len>l.len&&(l=c);return{minRadius:i>0?1/i:1/0,maxSlope:s,corners:a,longestStraight:l.len*e,longestStraightStart:l.start}}function Db(n,e){let t=n.length,i=Zh,s=(c,u)=>(c+4096)*8192+(u+4096),r=new Map,o=new Array(t);for(let c=0;c<t;c++){let u=Math.floor(n[c].x/i),h=Math.floor(n[c].z/i);o[c]=[u,h];let f=s(u,h),p=r.get(f);p||(p=[],r.set(f,p)),p.push(c)}let a=0,l=Zh*Zh;for(let c=0;c<t;c++){let[u,h]=o[c];for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){let g=r.get(s(u+f,h+p));if(g)for(let x of g){if(x<=c)continue;let m=Math.abs(c-x);if(Math.min(m,t-m)*e<=yb)continue;let S=n[c].x-n[x].x,M=n[c].z-n[x].z;S*S+M*M<l&&a++}}}return a}function Nb(n){let e=Ab(n),t=Cb(e,160),{xs:i,zs:s,count:r,step:o}=Pb(t),a=[[8,12],[4,7],[2,4],[1,2]],l=[1,2,4,7].map((v,w)=>({k:v,a:n.range(a[w][0],a[w][1]),p:n.range(0,Wl)})),c=new Float64Array(r),u=new Float64Array(r),h=new Float64Array(r);for(let v=0;v<r;v++){let w=(v-1+r)%r,y=(v+1)%r,b=i[y]-i[w],A=s[y]-s[w];h[v]=Math.hypot(b,A)||1e-9,c[v]=b/h[v],u[v]=A/h[v]}let f=new Float64Array(r),p=new Float64Array(r),g=1;for(let v=0;v<40;v++){for(let y=0;y<r;y++){let b=0;for(let A of l)b+=A.a*g*Math.sin(Wl*A.k*y/r+A.p);f[y]=gb+b}let w=0;for(let y=0;y<r;y++){let b=(y-1+r)%r,A=(y+1)%r;p[y]=(f[A]-f[b])/h[y],Math.abs(p[y])>w&&(w=Math.abs(p[y]))}if(w<=vb)break;g*=.9}let x=new Float64Array(r),m=new Float64Array(r),d=new Float64Array(r);for(let v=0;v<r;v++){let w=(v-1+r)%r,y=(v+1)%r,b=i[y]-i[w],A=f[y]-f[w],D=s[y]-s[w],O=Math.hypot(b,A,D)||1e-9;x[v]=b/O,m[v]=A/O,d[v]=D/O}let S=Ib(i,s,o),M=Im(S,2),_=new Float64Array(r);for(let v=0;v<r;v++){let w=Jh((Math.abs(M[v])-.016666666666666666)/.023333333333333334,0,1);_[v]=Kh+(Pm-Kh)*w}let E=Im(_,10);for(let v=0;v<r;v++)E[v]=Jh(E[v],Kh,Pm);let T=new Float64Array(r);for(let v=0;v<r;v++)T[v]=Math.min(wb,Math.sqrt(Tb/Math.max(Math.abs(M[v]),1e-9)));return Lb(T,o),{xs:i,ys:f,zs:s,count:r,step:o,fx:c,fz:u,tx:x,ty:m,tz:d,slope:p,curv:M,width:E,vmax:T}}function Ub(n){let{xs:e,ys:t,zs:i,count:s,step:r,fx:o,fz:a,tx:l,ty:c,tz:u,slope:h,curv:f,width:p,vmax:g}=n,x=[];for(let M=0;M<s;M++)x.push({curv:f[M],slope:h[M],vmax:g[M],x:e[M],z:i[M]});let m=ef(x,r),d=m.longestStraight>0?(m.longestStraightStart+Math.round(Mb/r))%s:0,S=new Array(s);for(let M=0;M<s;M++){let _=(d+M)%s;S[M]={s:M*r,x:e[_],y:t[_],z:i[_],tx:l[_],ty:c[_],tz:u[_],rx:-a[_],rz:o[_],width:p[_],curv:f[_],vmax:g[_],slope:h[_]}}return S}function Fb(n,e,t){let i=n.length,s=new Int32Array(i+1);for(let m=0;m<i;m++)s[m+1]=s[m]+(Math.abs(n[m].curv)>=Qh?1:0);let r=(m,d)=>s[d+1]-s[m]===0,o=Math.ceil(Xl/e),a=Math.floor((i*e-Xl)/e),l=Math.ceil(Dm/e),c=[],u=[],h=(m,d)=>c.every(([S,M])=>d<S||m>M),f=(m,d,S,M)=>{for(let _=0;_<400;_++){let E=Math.round(t.range(m,d)/e),T=Math.ceil(S/e),v=E+T;if(a-v<o)return null;let w=t.int(o,a-v),y=w+E;if(M&&!r(w,y+T))continue;let b=w-l,A=y+T+l;if(!(b<0||A>i-1||!h(b,A)))return c.push([b,A]),{a:w,b:y}}return null},p=t.int(2,3);for(let m=0;m<p;m++){let d=f(12,16,jh,!0);d&&u.push({type:"ramp",s0:d.a*e,s1:d.b*e,height:t.range(1.2,2.2)})}let g=t.int(2,3);for(let m=0;m<g;m++){let d=f(10,10,0,!1);d&&u.push({type:"boost",s0:d.a*e,s1:d.b*e})}let x=t.int(1,2);for(let m=0;m<x;m++){let d=f(60,140,0,!1);d&&u.push({type:"tunnel",s0:d.a*e,s1:d.b*e})}return u.sort((m,d)=>m.s0-d.s0),u}function Ob(n,e,t){let i=Nb(n),s=Ub(i),{count:r,step:o}=i,a=r*o,l=Fb(s,o,n),c=ef(s,o),u=1/0,h=-1/0,f=1/0,p=-1/0;for(let g of s)g.x<u&&(u=g.x),g.x>h&&(h=g.x),g.z<f&&(f=g.z),g.z>p&&(p=g.z);return{seed:e,attempts:t,length:a,step:o,count:r,pts:s,features:l,bounds:{minX:u,maxX:h,minZ:f,maxZ:p},stats:{minRadius:c.minRadius,maxSlope:c.maxSlope,lapTimeEstimate:Nm(s,o),corners:c.corners}}}function Bb(n){let e=[],{pts:t,count:i,step:s,length:r}=n;if(!Array.isArray(t)||t.length!==i||!(i>0)||!(s>0))return{ok:!1,reasons:["structure invalide"]};r>=_m&&r<=Mm||e.push(`longueur ${r.toFixed(0)} m hors [${_m}, ${Mm}]`),Math.abs(i*s-r)>1e-6&&e.push("count * step != length");let o=1/0,a=-1/0;for(let d of t)d.y<o&&(o=d.y),d.y>a&&(a=d.y);(o<bm||a>Sm)&&e.push(`altitude ${o.toFixed(1)}..${a.toFixed(1)} hors [${bm}, ${Sm}]`);let l=ef(t,s);l.minRadius>=Tm||e.push(`rayon min ${l.minRadius.toFixed(1)} m < ${Tm}`),l.maxSlope>xb&&e.push(`pente max ${(l.maxSlope*100).toFixed(1)} % > 12 %`),l.corners<Em&&e.push(`${l.corners} virages < ${Em}`),l.longestStraight<Am&&e.push(`ligne droite max ${l.longestStraight.toFixed(0)} m < ${Am}`);let c=Db(t,s);c>0&&e.push(`${c} paires d'\xE9chantillons trop proches (croisement ou rapprochement)`);let u=Nm(t,s);u>=Rm&&u<=Cm||e.push(`temps au tour ${u.toFixed(1)} s hors [${Rm}, ${Cm}]`);let h=n.features||[],f=h.filter(d=>d.type==="ramp").length,p=h.filter(d=>d.type==="boost").length,g=h.filter(d=>d.type==="tunnel").length;f<2&&e.push(`${f} tremplin(s) < 2`),p<2&&e.push(`${p} boost(s) < 2`),g<1&&e.push("aucun tunnel");let x=d=>Math.round((d%r+r)%r/s)%i;for(let d of h)if((d.s0<Xl||d.s1>r-Xl)&&e.push(`feature ${d.type} trop proche du d\xE9part`),d.type==="ramp"){let S=d.s1-d.s0;(S<11.5||S>16.5)&&e.push(`tremplin de ${S.toFixed(1)} m hors 12..16`),d.height>=1.2&&d.height<=2.2||e.push("hauteur de tremplin hors 1.2..2.2");let M=x(d.s0),_=x(d.s1+jh),E=!0;for(let T=M;T!==(_+1)%i;T=(T+1)%i)if(Math.abs(t[T].curv)>=Qh){E=!1;break}E||e.push("tremplin non situ\xE9 sur une ligne droite avec r\xE9ception")}let m=h.slice().sort((d,S)=>d.s0-S.s0);for(let d=0;d+1<m.length;d++){let S=m[d],M=m[d+1],_=S.s1+(S.type==="ramp"?jh:0);M.s0<_+Dm-1e-6&&e.push(`features ${S.type} et ${M.type} se chevauchent`)}return{ok:e.length===0,reasons:e}}function Um(n,e={}){let t=e.maxAttempts??Eb,i=Yn(n),s=null,r=1/0;for(let o=0;o<t;o++){let a=i.fork("try"+o),l=Ob(a,n,o+1),c=Bb(l);if(c.ok)return l;c.reasons.length<r&&(r=c.reasons.length,s=l)}return s.attempts=t,s}function tf(n,e){let t=n.length;if(n.open)return e<0?0:Math.min(e,(n.count-1.001)*n.step);let i=e%t;return i<0&&(i+=t),i>=t&&(i-=t),i}var zb=(n,e)=>{let t=Math.hypot(n,e)||1;return[n/t,e/t]};function es(n,e,t={}){let i=n.count,s=n.step,r=tf(n,e),o=r/s,a=Math.floor(o),l=a%i,c=(l+1)%i,u=o-a,h=n.pts[l],f=n.pts[c],p=(_,E)=>_+(E-_)*u,g=p(h.tx,f.tx),x=p(h.ty,f.ty),m=p(h.tz,f.tz),d=Math.hypot(g,x,m)||1,[S,M]=zb(p(h.rx,f.rx),p(h.rz,f.rz));if(t.s=r,t.x=p(h.x,f.x),t.y=p(h.y,f.y),t.z=p(h.z,f.z),n.open&&e!==r){let _=e-r;t.x+=g/d*_,t.z+=m/d*_}return t.tx=g/d,t.ty=x/d,t.tz=m/d,t.rx=S,t.rz=M,t.width=p(h.width,f.width),t.curv=p(h.curv,f.curv),t.vmax=p(h.vmax,f.vmax),t.slope=p(h.slope,f.slope),t.i=l,t}var Qi={};function Ft(n,e,t,i={}){return es(n,e,Qi),i.x=Qi.x+t*Qi.rx,i.y=Qi.y,i.z=Qi.z+t*Qi.rz,i.heading=Math.atan2(Qi.tx,Qi.tz),i.slope=Qi.slope,i}function Fm(n,e){let t=tf(n,e);for(let i of n.features)if(i.type==="ramp"&&t>=i.s0&&t<i.s1)return i.height*(t-i.s0)/(i.s1-i.s0);return 0}function Ls(n,e,t){let i=tf(n,e);for(let s of n.features)if((t===void 0||s.type===t)&&i>=s.s0&&i<=s.s1)return s;return null}var Vb=1/30,Om=.5,Bm=.4,Gb=.6,la=[.2,.36,.52,.68,.84],zm=la.length+1,Wb=.2,Xb=.1,qb=.34,Yb=4,$b=4,Zb=.2,Kb=4.9,jb=5.5,Jb=5,Qb=6,eS=1.8,tS=.03,nS=1.6,iS=.5,sS=2,rS=.785,oS=4.7,aS=2.5,ho=.196,lS=.098,cS=.5,uS=.27,hS=16,fS=11,dS=.72,pS=5,mS=.5,km=.35,gS=.42,xS=60,vS=.3,yS=5,_S=1.6,MS=3,bS=14,SS=.004,TS=1.2,wS=2,ES=.5,AS=22,Hm=.25,RS=6,CS=1.8,Vm=1,PS=["s","d","yaw","vdir","speed","yRel","vy","lean","steer","pitch","compress","drift","boostT","wheelSpin","stun","rpm","wheelie","_g","_vyG","_shiftT","_t","_pitchF","_dive","_turnF","_springA","_springP","_wallT","_apex"],$t=(n,e,t)=>n<e?e:n>t?t:n,Ii=(n,e=0)=>Number.isFinite(n)?n:e,IS=(n,e)=>{let t=n%e;return t<0?t+e:t},LS=(n,e,t)=>n<e?Math.min(e,n+t):Math.max(e,n-t);function Gm({s:n=0,d:e=0}={}){return{s:n,d:e,yaw:0,vdir:0,speed:0,yRel:0,vy:0,airborne:!1,lean:0,steer:0,pitch:0,compress:0,drift:0,boostT:0,boostCharges:cr.boostCharges,onRoad:!0,wheelSpin:0,stun:0,gear:1,rpm:0,wheelie:0,events:[],_init:!1,_g:0,_vyG:0,_prevBoost:!1,_padKey:null,_shiftT:0,_wallHit:!1,_t:0,_turnF:0,_pitchF:0,_dive:0,_springA:0,_springP:0,_wallT:0,_apex:0}}function Wm(n,e,t,i,s,r,o){let a=n.events,l=e||{},c=s||{},u=!!l.boost&&!n._prevBoost;if(n._prevBoost=!!l.boost,r=Number.isFinite(r)&&r>0?Math.min(r,Vb):0,n._init||(n._init=!0,n.boostCharges=i.boostCharges),r===0)return n;let h=t.length,f=i.maxSpeed,p=$t(Ii(l.throttle),0,1),g=$t(Ii(l.brake),0,1),x=$t(Ii(l.steer),-1,1),m=n.stun>0;m&&(n.stun=Math.max(0,n.stun-r),p=0,g=0,x=0);let d=Xe=>t.open?Xe:IS(Xe,h),S=d(n.s),M=es(t,S),_=!n.airborne;if(u&&!m&&n.boostCharges>0&&n.boostT<=0&&(n.boostCharges-=1,n.boostT=i.boostDuration,a.push("boost")),_){let Xe=Ls(t,S,"boost");if(Xe){let be=Math.floor(n.s/h)+":"+Xe.s0;n._padKey!==be&&(n._padKey=be,n.boostT=Math.max(n.boostT,TS),a.push("pad"))}}g>.5&&n.boostT>0&&(n.boostT=0);let E=n.boostT>0;E&&(p=1);let T=_&&!m&&Math.abs(x)>.3&&n.speed>wS&&(!!l.drift||g>.3),v=n.speed,w=v/f;n._shiftT>0?n._shiftT-=r:n.gear<zm&&w>la[n.gear-1]&&!(g>0&&v>3)?(n.gear+=1,n._shiftT=Wb):n.gear>1&&v<la[n.gear-2]*f-2&&(n.gear-=1,n._shiftT=Xb);let y=n.gear>1?la[n.gear-2]:0,b=n.gear<zm?la[n.gear-1]:1;n.rpm=$t(.35+.65*((w-y)/(b-y)),.1,1.05);let A=_&&Math.abs(n.d)>M.width*.5,D=Gb*f,O=A?D:f*(E?i.boostPower:1),L=Yb/(f*f),F=0;if(_){if(A&&v>D&&(F-=2*i.offroadDrag*(v-D)),p>0&&n._shiftT<=0&&v<O){let Xe=qb*f,be=.8+.2*Math.sin(Math.PI*$t(n.rpm,0,1)),ue=i.accel*p*be*Math.min(1,Xe/Math.max(v,1));E&&(ue*=sS),F+=Math.min(ue,i.accel*1.15*(E?1.3:1))}g>0&&(F-=i.brake*g*(T?.35:1)),F-=v*(.2-.03*(n.gear-1))*(1-p),F-=Zb,F-=Kb*M.slope,F-=L*v*v}else F-=L*$b*v*v;n.speed=Math.max(0,v+F*r),_&&n.speed>O&&!A&&(n.speed=Math.max(O,n.speed-10*r));let B=$t(n.speed/f,0,1),Y=1+(i.wetGrip-1)*DS(c),W=$t(i.grip*Ii(c.grip,1)*Y,.05,1.5),H=n.speed<.6?0:x,ve=Math.abs(H)>Math.abs(n.steer)||H*n.steer<0?jb:Jb*$t(Math.abs(F)/6,1,2.5);n.steer=LS(n.steer,H,ve*r);let Se=n.yaw-n.vdir,ge=n.speed*Math.sin(Se),le=Math.min(nS,1+tS*Math.abs(ge));T&&(le=i.driftBonus),E&&_&&(le*=iS);let se=1-(1-i.steerHighSpeed)*B,re=Math.min(1,n.speed/6),I=_?1:i.airControl,$=n.steer*i.steerRate*se*le*re*I*(.6+.4*Math.min(1,W)),q=Math.min(n.speed/yS,xS*Math.min(1.2,W)*(T?1.5:1)/Math.max(n.speed,1)),ee=$t($,-q,q);_&&Math.abs(x)<=.15&&(n.yaw*=Math.exp(-_S*r)),o&&i.steerNoise>0&&!m&&_&&(n.yaw+=i.steerNoise*p*(o.next()*2-1)*r);let pe=Math.max(.3,1-n.d*M.curv),we=n.speed*Math.cos(n.vdir)/pe*r,Me=n.speed*Math.sin(n.vdir)*r,X=M.curv*we,He=n.vdir,ke=X*(_?1-vS:1);if(n.yaw+=ee*r-ke,n.vdir-=ke,_){let Xe=(T?eS:Qb)*W,be=1-Math.exp(-Xe*r);n.vdir+=(n.yaw-n.vdir)*be,n.speed*=1-(1-Math.cos(Se))*be}else{let Xe=3*$t(i.airStability,0,2);n.yaw+=(n.vdir-n.yaw)*(1-Math.exp(-Xe*r)),i.airStability<1&&(n.yaw+=(n.yaw>=n.vdir?1:-1)*(1-i.airStability)*.6*r)}n.vdir=$t(Ii(n.vdir),-Om,Om),n.yaw=$t(Ii(n.yaw),n.vdir-Bm,n.vdir+Bm),n._t+=r,Me+=Ii(c.wind)*(1.2*Math.sin(n._t*.37)+.4*Math.sin(n._t*1.13+1))*r*(_?1:.5),n.s+=we,n.d+=Me;let Ue=_?$t((Math.abs(n.yaw-n.vdir)-.04)/.22,0,1)*re:0;n.drift+=(Ue-n.drift)*Math.min(1,8*r);let Ae=es(t,d(n.s));n.onRoad=Math.abs(n.d)<=Ae.width*.5;let qe=Ae.width*.5+6-.4;if(Math.abs(n.d)>=qe-.02){let Xe=n.d>=0?1:-1,be=n.vdir*Xe>0,ue=be?Math.abs(Math.sin(n.vdir)):0;if(n.d=Xe*qe,be&&(n.vdir=-Xe*.04,n.yaw=n.yaw*.4-Xe*.04),n._wallHit)n.speed*=Math.max(0,1-.8*r);else{let Ee=n.boostT>0,Ce=o?o.next():1;Ee&&n.speed>RS||ue>ES&&n.speed>AS&&Ce<Hm||n.airborne&&Ce<Hm?(n.speed*=.3,n.stun=CS,a.push("crash")):n.speed*=1-$t(i.wallLoss*1.3*(.5+ue),0,.9),a.push("wall")}n.boostT=0,n._wallT=km,n._wallHit=!0}else n._wallHit=!1;n.stun>0&&_&&(n.speed*=Math.exp(-2.2*r)),S=d(n.s);let Fe=Ii(Fm(t,S)),U=(Fe-n._g)/r;if(n.airborne||(Fe<n.yRel-.05?(n.airborne=!0,n._apex=n.yRel-Fe,n.vy=n._vyG,n.vy>MS&&a.push("jump")):(n.yRel=Fe,n.vy=$t(U,-80,80),n._vyG=n.vy)),n.airborne&&(n.vy-=26*r,n.yRel+=n.vy*r,n._apex=Math.max(n._apex,n.yRel-Fe),n.vy<=0&&n.yRel<=Fe)){let Xe=-n.vy,be=Math.abs(n.yaw-n.vdir),ue=Xe>bS/Math.max(.3,i.landing)||be>.35;n.airborne=!1,n.yRel=Fe,n.vy=0,n._vyG=0,n._springA=$t(n._springA+.35*n._apex+.03*Xe,0,1),n._springP=Math.PI/2;let Ee=SS*Xe+(ue?.08:0);n.speed*=1-$t(Ee/Math.max(.2,i.landing),0,.45),a.push(ue?"hardLand":"land")}n._g=Fe,_=!n.airborne,n.speed=$t(Ii(n.speed),0,1.5*f),n._wallT=Math.max(0,n._wallT-r);let R=Math.max(0,1-n.speed/4,n._wallT/km),te=_?(X+(n.vdir-He))/r:0;n._turnF+=(te-n._turnF)*Math.min(1,6*r);let _e=n.speed*n._turnF,Te=Math.sign(_e)*Math.max(0,Math.abs(_e)-pS),me=n.steer*gS*Math.min(1,n.speed/10),Ve=$t((1-R)*(Math.atan(Te/fS)*dS+mS*(n.yaw-n.vdir)+me),-Vm,Vm);n.stun>0&&(Ve=(n.lean>=0?1:-1)*1.35),n.lean+=(Ve-n.lean)*Math.min(1,9*r),n._dive=g>.1&&_?Math.min(ho,n._dive+ho*r):Math.max(0,n._dive-.25*r);let Le=$t(F*lS,-ho,ho)-n._dive;n._pitchF+=(Le-n._pitchF)*Math.min(1,r/cS);let Oe=$t(Le-n._pitchF,-ho,ho);n.wheelie=n.boostT>0&&_?Math.min(Math.PI/2,n.wheelie+oS*r):Math.max(0,n.wheelie-aS*r),Oe+=Math.sin(n.wheelie)*rS,_||(Oe=Math.atan2(n.vy,Math.max(8,n.speed))),n.pitch=Oe,n._springA*=Math.exp(-r/uS),n._springP+=hS*r,n.compress=Math.sin(n._springP)*n._springA,n.wheelSpin+=n.speed/.32*r,n.boostT=Math.max(0,n.boostT-r);for(let Xe of PS)Number.isFinite(n[Xe])||(n[Xe]=0);return n.speed<0&&(n.speed=0),n}function DS(n){return $t(Ii(n.wet),0,1)}var NS=8,US=25,FS=150,OS=3,BS=35,zS=2,kS=14,HS=30,VS=12,GS=2,WS={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},hn=(n,e,t)=>n<e?e:n>t?t:n,ql=(n,e,t)=>n+(e-n)*t,XS=(n,e)=>n-e*Math.round(n/e);function qS(n,e){let t=n.length,i=n.features,s=null,r=1/0;for(let o=0;o<i.length;o++){let a=i[o];if(a.type!=="ramp")continue;let l=((a.s0-e)%t+t)%t;l<r&&(r=l,s=a)}return s?{f:s,dist:r}:null}function YS(n,e){for(let t=0;t<=FS;t+=US)if(Math.abs(es(n,e+t).curv)>.004)return!1;return!0}function Yl(n,e){let t=n||WS,i={persona:t,rng:e,skill:hn(t.skill??.5,0,1),aggression:hn(t.aggression??.5,0,1),jumpSkill:hn(t.jumpSkill??.5,0,1),lineSkill:hn(t.lineSkill??.5,0,1),playerGap:0,dGoal:0,wander:0,wanderGoal:0,wanderT:0,mistakeT:0,mistakeSide:1,nextMistake:0,boostLock:0,input:{throttle:0,brake:0,steer:0,boost:!1,drift:!1}};return i.nextMistake=e.range(8,20)+(1-i.skill)*15,i}function $l(n,e,t,i,s,r){let o=n.input,a=t.length,l=n.rng,c=n.aggression,u=n.skill,h=n.jumpSkill,f=e.speed,p=e.s,g=es(t,p),x=Math.max(.8,g.width*.5-1.2);n.wanderT-=r,n.wanderT<=0&&(n.wanderT=l.range(.9,1.8),n.wanderGoal=l.range(-1,1)*(1-n.lineSkill)*.5*x),n.wander+=(n.wanderGoal-n.wander)*Math.min(1,r*1.5),n.nextMistake-=r,n.mistakeT-=r,n.mistakeT<=0&&n.nextMistake<=0&&(n.mistakeT=l.range(.5,1.2),n.mistakeSide=l.sign(),n.nextMistake=l.range(8,20)+(1-u)*15);let m=n.mistakeT>0;n.boostLock-=r;let d=ql(1.4,.6,c),S=Math.max(20,f*d),M=Math.max(S,hn(f*1.6+20,40,110)),_=1/0,E=0,T=0,v=0;for(let re=0;re<=M;re+=NS){let I=re===0?g:es(t,p+re);if(re<=S&&I.vmax<_&&(_=I.vmax),re>=8){let $=Math.abs(I.curv);$>E&&(E=$,T=Math.sign(I.curv),v=re)}}let w=hn(E/.02,0,1),y=0;if(T!==0&&w>0){let re=hn((v-10)/30,0,1),I=ql(1,-.8,re);y=T*x*n.lineSkill*w*I}y+=n.wander,m&&(y+=n.mistakeSide*1.2);let b=qS(t,p),A=b?b.dist:1/0,D=Ls(t,p,"ramp")!==null,O=A<HS;(D||O)&&h>.5&&(y*=1-hn((h-.4)/.6,0,1));let L=!D&&A>=OS&&A<=BS&&h<.5;for(let re=0;re<s.length;re++){let I=s[re];if(I===e)continue;let $=XS(I.s-p,a);if($<=0||$>=VS)continue;let q=I.d-e.d;if(!(Math.abs(q)>=GS)){if(c>.55){let ee=q!==0?Math.sign(q):e.d<0?1:-1;y+=ee*(.6+.8*c)}else{let ee=q!==0?-Math.sign(q):e.d<0?1:-1;Math.abs(e.d+ee*2)>x&&(ee=-ee),y+=ee*2*(1-c)}break}}let F=n.obstacles;if(F){let re=35+f*1.7,I=null,$=1/0;for(let q=0;q<F.length;q++){let ee=F[q],pe=ee.s-p;pe>-ee.type.len&&pe<re&&pe<$&&Math.abs(ee.d-y)<ee.type.w/2+1.5&&(ee.speed<f-3||pe<40)&&(I=ee,$=pe)}if(I){let q=I.type.w/2+2,ee=[I.d-q,I.d+q].filter(Me=>Math.abs(Me)<=x),pe=ee.filter(Me=>!F.some(X=>X!==I&&Math.abs(X.s-I.s)<30&&Math.abs(X.d-Me)<X.type.w/2+1.2)),we=pe.length?pe:ee;we.length&&(y=we.reduce((Me,X)=>Math.abs(X-e.d)<Math.abs(Me-e.d)?X:Me))}}y=hn(y,-x,x),n.dGoal+=(y-n.dGoal)*Math.min(1,r*(F?4.5:2.5));let B=hn(n.dGoal,-x,x),Y;if(e.airborne)Y=hn(-e.yaw*2,-.3,.3);else{let re=B-e.d,I=hn(re*.12,-.25,.25),$=es(t,p+hn(f*.25,4,20)).curv,q=i.steerRate*ql(1,i.steerHighSpeed,hn(f/i.maxSpeed,0,1));Y=($*f+(I-e.yaw)*3)/q}Y=hn(Y,-1,1),Number.isFinite(Y)||(Y=0);let W=hn(-n.playerGap/150,-1,1)*.06,H=ql(.86,1,u)+c*.04;m&&(H*=.85);let ae=_*H*(1+W),ve=i.maxSpeed,Se=!1;if(!e.airborne&&e.boostCharges>0&&e.boostT<=0&&n.boostLock<=0){if(h>.6&&A>=zS&&A<=kS)Se=!0;else if(f>20&&YS(t,p)){let re=n.playerGap<-20,I=.25+.5*c+(re?.3:0);Se=l.chance(I)}n.boostLock=Se?1:.4}o.boost=Se;let ge=E<.003;if(e.boostT>0){let re=ve*i.boostPower;ae=ge?re*.98:Math.min(ae,re)}else ae=Math.min(ae,ve);let le=0,se=0;if(e.airborne)le=1;else{let re=ae-f;re>-1.5?le=L?0:hn(.5+re*.25,0,1):se=hn((-re-1.5)*.15,0,1)}return o.throttle=le,o.brake=se,o.steer=Y,o.drift=!e.airborne&&c>.75&&E>.025&&f>40&&v<20,o}var $S=7,ZS=3,KS=.3,jS=3,JS=25,QS=1.5,eT=1.2,tT=1.8,Xm=.9,nT={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},Zl=(n,e,t)=>n<e?e:n>t?t:n,nf=(n,e)=>n-e*Math.round(n/e);function sf(){return{throttle:0,brake:0,steer:0,boost:!1,drift:!1}}function qm({track:n,laps:e,env:t,rng:i,riders:s,final:r=!0,carry:o=null,startS:a=0}){let l=n.length,c=n.raceEnd??l,u=e*c,f=s.filter(T=>!T.isPlayer).concat(s.filter(T=>T.isPlayer)).map((T,v)=>{let w=Math.floor(v/2),y=v%2,b=a-$S*(w+1),A=y===0?-2.5:2.5,D=o?.states.get(T.id),O=D||Gm({s:b,d:A});return{id:T.id,name:T.name,color:T.color,accent:T.accent,isPlayer:!!T.isPlayer,stats:T.stats,persona:T.persona||null,state:O,remote:!!T.remote,ai:T.isPlayer||T.remote?null:Yl(T.persona||nT,i.fork("ai:"+T.id)),rng:i.fork("rider:"+T.id),others:null,input:sf(),coast:sf(),frameEvents:[],startS:D?D.s:b,lap:1,lapTimes:[],bestLap:null,lapStartT:0,finished:!1,finishTime:null,position:v+1}});for(let T of f)T.others=f.filter(v=>v!==T).map(v=>v.state);let p=f.find(T=>T.isPlayer)||null,g=f.slice(),x=f.length,m=new Uint8Array(x*x);function d(T,v,w,y,b){if(w===v)return;let A=Math.floor(v/c),D=Math.min(Math.floor(w/c),e);for(let O=Math.max(A+1,1);O<=D;O++){let L=Zl((O*c-v)/(w-v),0,1),F=y+L*b,B=F-T.lapStartT;T.lapTimes.push(B),(T.bestLap===null||B<T.bestLap)&&(T.bestLap=B),T.lapStartT=F}if(r&&w>=u){let O=Zl((u-v)/(w-v),0,1);T.finished=!0,T.finishTime=y+O*b}}function S(T){let v=T.state,w=T.coast;return w.throttle=KS,w.brake=0,w.steer=Zl(-v.yaw*2-v.d*.05,-.5,.5),w.boost=!1,w.drift=!1,w}function M(T,v){let w=T.state;for(let y=0;y<x;y++){let b=f[y];if(b===T||b.hidden)continue;let A=nf(b.state.s-w.s,l);if(A>jS&&A<JS&&Math.abs(b.state.d-w.d)<QS){w.speed=Math.min(w.speed+eT*T.stats.slipstream*v,T.stats.maxSpeed*1.05);return}}}function _(){for(let T=0;T<x;T++)for(let v=T+1;v<x;v++){let w=f[T],y=f[v];if(w.remote&&y.remote||w.hidden||y.hidden)continue;let b=!w.remote,A=!y.remote,D=nf(y.state.s-w.state.s,l),O=y.state.d-w.state.d,L=T*x+v;if(Math.abs(D)<tT&&Math.abs(O)<Xm){let F=O!==0?Math.sign(O):i.sign(),B=((Xm-Math.abs(O))/2+.05)*(b&&A?1:2);if(b&&(w.state.d-=F*B),A&&(y.state.d+=F*B),!m[L]){m[L]=1;let Y=(w.state.speed+y.state.speed)/2;b&&(w.state.speed+=(Y-w.state.speed)*.2),A&&(y.state.speed+=(Y-y.state.speed)*.2);let W=D>=0?w:y;W.remote||(W.state.speed*=.96),(!b||!A)&&(b?w:y).state.events?.push("hit")}}else m[L]=0}}let E={phase:o?"racing":"countdown",countdown:o?0:ZS,time:o?o.time:0,final:r,laps:e,track:n,riders:f,player:p,update(T,v){if(E.phase==="countdown"){E.countdown=Math.max(0,E.countdown-T),E.countdown<=0&&(E.phase="racing");return}let w=E.time;E.time+=T;for(let y=0;y<x;y++){let b=f[y];b.remote||(b.finished?b.input=S(b):b.isPlayer?b.input=v||sf():(p&&(b.ai.playerGap=nf(b.state.s-p.state.s,l)),b.input=$l(b.ai,b.state,n,b.stats,b.others,T)))}for(let y=0;y<x;y++){let b=f[y];if(b.remote){b.lap=1;continue}let A=b.state,D=b.finished,O=A.s;if(Wm(A,b.input,n,b.stats,t,T,b.rng),D||(d(b,O,A.s,w,T),b.finished||M(b,T)),b.lap=b.finished?e:Zl(Math.floor(A.s/c)+1,1,e),!b.isPlayer){b.frameEvents.length=0;for(let L=0;L<A.events.length;L++)b.frameEvents.push(A.events[L]);A.events.length=0}}_(),g.sort((y,b)=>y.finished!==b.finished?y.finished?-1:1:y.finished?y.finishTime-b.finishTime:b.state.s-y.state.s);for(let y=0;y<x;y++)g[y].position=y+1;r?(p?p.finished:f.every(y=>y.finished))&&(E.phase="finished"):(p||g[0]).state.s>=c&&(E.phase="relay")},results(){let T=f.map(v=>{let w;if(v.finished)w=v.finishTime;else{let y=Math.max(0,v.state.s-v.startS),b=E.time>1?Math.max(5,y/E.time):40,A=Math.max(0,u-v.state.s);w=E.time+A/b}return{id:v.id,name:v.name,position:v.position,time:w,bestLap:v.bestLap,isPlayer:v.isPlayer}});return T.sort((v,w)=>v.position-w.position),T}};return E}var hf={};cx(hf,{PLAYER:()=>Li,RIVALS:()=>jl,UPGRADES:()=>ur,applyUpgrade:()=>tc,computeStats:()=>Ds,createRun:()=>Jl,dailySeed:()=>nc,isRunOver:()=>ca,loadMeta:()=>lf,offerUpgrades:()=>ec,randomSeed:()=>sT,recordResult:()=>of,runRiders:()=>Ql,saveMeta:()=>cf,standings:()=>fo,updateMeta:()=>uf});var Ym="polygon-rush-meta",iT=Object.keys(Is).filter(n=>n!=="sicily"),Li={id:"player",name:"Vous",color:14885934,accent:2312392},ur=[{id:"turbo",name:"Turbo instable",tagline:"Acc\xE9l\xE9ration brutale, pilotage nerveux.",pro:"Acc\xE9l\xE9ration \xD71,35 et vitesse de pointe \xD71,04.",con:"Direction bruit\xE9e (+0,35 rad/s) et braquage \xD70,9 \xE0 haute vitesse.",icon:"\u26A1",maxStacks:1,apply(n){n.accel*=1.35,n.maxSpeed*=1.04,n.steerNoise+=.35,n.steerHighSpeed*=.9}},{id:"rally",name:"Suspension rallye",tagline:"Les r\xE9ceptions passent mieux, la vitesse de pointe trinque.",pro:"R\xE9ception \xD71,8 et tra\xEEn\xE9e hors-piste \xD70,6.",con:"Vitesse de pointe \xD70,95.",icon:"\u{1F3D4}",maxStacks:2,apply(n){n.landing*=1.8,n.offroadDrag*=.6,n.maxSpeed*=.95}},{id:"aero",name:"A\xE9rodynamique",tagline:"Plus de vitesse, moins de tenue en l'air.",pro:"Vitesse de pointe \xD71,07.",con:"Stabilit\xE9 en saut \xD70,6 et contr\xF4le a\xE9rien \xD70,7.",icon:"\u{1F4A8}",maxStacks:2,apply(n){n.maxSpeed*=1.07,n.airStability*=.6,n.airControl*=.7}},{id:"rain",name:"Pneus pluie",tagline:"Accroche imbattable sous l'averse, sec moins mordant.",pro:"Adh\xE9rence mouill\xE9e \xD71,35 (\u2248 1,05).",con:"Adh\xE9rence s\xE8che \xD70,95.",icon:"\u{1F327}",maxStacks:1,apply(n){n.wetGrip*=1.35,n.grip*=.95}},{id:"nitro",name:"Nitro double",tagline:"Deux charges de plus, des boosts plus courts.",pro:"+2 charges de boost par course.",con:"Dur\xE9e de boost \xD70,75.",icon:"\u{1F680}",maxStacks:2,apply(n){n.boostCharges+=2,n.boostDuration*=.75}},{id:"brakes",name:"Freins c\xE9ramique",tagline:"Freinage mordant, direction plus vive, reprise plus lente.",pro:"Freinage \xD71,4 et braquage \xD71,08.",con:"Acc\xE9l\xE9ration \xD70,95.",icon:"\u{1F6D1}",maxStacks:2,apply(n){n.brake*=1.4,n.steerRate*=1.08,n.accel*=.95}},{id:"gyro",name:"Gyroscope",tagline:"Stabilisateur de vol, adh\xE9rence en retrait.",pro:"Contr\xF4le a\xE9rien \xD71,5 et stabilit\xE9 en l'air \xD71,25.",con:"Adh\xE9rence \xD70,9.",icon:"\u{1F300}",maxStacks:2,apply(n){n.airControl*=1.5,n.airStability*=1.25,n.grip*=.9}},{id:"slick",name:"Pneus slick",tagline:"Gomme tendre : accroche s\xE8che maximale, pluie interdite.",pro:"Adh\xE9rence s\xE8che \xD71,12.",con:"Adh\xE9rence mouill\xE9e \xD70,7 et braquage \xD70,95.",icon:"\u{1F3C1}",maxStacks:2,apply(n){n.grip*=1.12,n.wetGrip*=.7,n.steerRate*=.95}},{id:"carenage",name:"Car\xE9nage aspiration",tagline:"Profil fusel\xE9 : on file dans le sillage, on tourne moins vite.",pro:"Aspiration \xD71,6 dans le sillage des concurrents.",con:"Braquage \xD70,92.",icon:"\u{1F32C}",maxStacks:2,apply(n){n.slipstream*=1.6,n.steerRate*=.92}},{id:"blindage",name:"Blindage renforc\xE9",tagline:"Carrosserie en acier : les chocs co\xFBtent moins, la moto p\xE8se.",pro:"Perte de vitesse contre les glissi\xE8res \xD70,5.",con:"Acc\xE9l\xE9ration \xD70,92 et vitesse de pointe \xD70,97.",icon:"\u{1F6E1}",maxStacks:2,apply(n){n.wallLoss*=.5,n.accel*=.92,n.maxSpeed*=.97}}],jl=[{id:"vortex",name:"Vortex Solenne",color:58879,accent:728366,skill:.8,aggression:.92,jumpSkill:.6,lineSkill:.5,style:"agressif",bio:"Freine tard, plonge dans les virages et ne l\xE2che jamais un pilote \xE0 la corde."},{id:"saltamonte",name:"Brigo Saltamonte",color:16766474,accent:1118481,skill:.76,aggression:.45,jumpSkill:.97,lineSkill:.5,style:"sauteur",bio:"Vole plus haut que tout le monde, atterrit quand il veut, parfois trop tard."},{id:"lumen",name:"Lumen Ardoise",color:8190976,accent:1714704,skill:.84,aggression:.15,jumpSkill:.55,lineSkill:.97,style:"trajectoire",bio:"Trace une ligne parfaite, ne prend jamais un bord et ne commet aucune faute."},{id:"aurelio",name:"Aurelio Temp\xEAte",color:16747520,accent:0,skill:.97,aggression:.7,jumpSkill:.85,lineSkill:.9,style:"r\xE9gulier",bio:"Le champion de la c\xF4te : rien \xE0 lui reprocher, et il le sait."},{id:"maree",name:"Ingrid Mar\xE9e",color:11544319,accent:16777215,skill:.88,aggression:.78,jumpSkill:.7,lineSkill:.6,style:"agressif",bio:"Pousse ses freins jusqu'\xE0 la limite et ressort des virages en coup de vent."},{id:"gaspard",name:"Gaspard Brume",color:1989631,accent:15790320,skill:.72,aggression:.35,jumpSkill:.4,lineSkill:.6,style:"r\xE9gulier",bio:"Discret, m\xE9tronome, il finit presque toujours dans les cinq premiers."},{id:"yuki",name:"Yuki Varan",color:50316,accent:8217,skill:.91,aggression:.5,jumpSkill:.8,lineSkill:.8,style:"r\xE9gulier",bio:"Rapide sur tous les terrains, sans point faible visible, et toujours souriant."}],$m=[{name:"Coastal Rush",subtitle:"Route m\xE9diterran\xE9enne, grandes courbes et falaises"},{name:"Cliff Edge",subtitle:"Corniches \xE9troites et vent de face"},{name:"Harbor Drift",subtitle:"Quais glissants, embruns et virages en \xE9pingle"},{name:"Lighthouse Pass",subtitle:"Tunnels, ressauts et brouillard de phare"},{name:"The Final Run",subtitle:"Le champion vous attend"}],rf=$m.length;function Zm(n){return ur.find(e=>e.id===n)||null}function Km(n,e){let t=0;for(let i of n.upgrades)i===e&&t++;return t}function Jl(n){let e=String(n),t=Yn(aa(e+"|run")),i=[];for(let o=0;o<rf;o++)if(o===0)i.push("sunset");else if(o===rf-1)i.push("rain");else{let a=i[o-1],l=iT.filter(c=>c!==a&&!(o===rf-2&&c==="rain"));i.push(t.pick(l))}let s=$m.map((o,a)=>({name:o.name,subtitle:o.subtitle,trackSeed:`${e}-${a}`,weather:i[a],laps:a<2?2:3})),r={[Li.id]:0};for(let o of jl)r[o.id]=0;return{seed:e,stageIndex:0,stages:s,upgrades:[],points:r,history:[]}}function Ql(n){let e=Math.max(0,n.stageIndex),t=[{id:Li.id,name:Li.name,color:Li.color,accent:Li.accent,isPlayer:!0,persona:null,stats:Ds(n)}];for(let i of jl){let s=Math.min(.99,Math.round((i.skill+.01*e)*100)/100);t.push({id:i.id,name:i.name,color:i.color,accent:i.accent,isPlayer:!1,persona:{...i,skill:s},stats:{...cr}})}return t}function Ds(n){let e={...cr};for(let t of n.upgrades){let i=Zm(t);i&&i.apply(e)}return e}function ec(n){let e=Yn(aa(`${n.seed}|offer|${n.stageIndex}`)),t=ur.filter(i=>Km(n,i.id)<i.maxStacks);return e.shuffle(t).slice(0,3)}function tc(n,e){let t=Zm(e);return!t||Km(n,e)>=t.maxStacks?!1:(n.upgrades.push(e),!0)}function jm(n){if(n===Li.id)return Li.name;let e=jl.find(t=>t.id===n);return e?e.name:n}function of(n,e){if(ca(n))return n;let t=e.slice().sort((r,o)=>r.position-o.position),i=n.stages[n.stageIndex],s={stage:n.stageIndex,name:i.name,results:[]};return t.forEach((r,o)=>{let a=r.position??o+1,l=Gl[a-1]??0;n.points[r.id]=(n.points[r.id]||0)+l,s.results.push({id:r.id,name:r.name||n.names?.[r.id]||jm(r.id),position:a,points:l,isPlayer:r.id===Li.id})}),n.history.push(s),n.stageIndex+=1,n}function fo(n){let e={};for(let t of n.history)for(let i of t.results)e[i.id]=Math.min(e[i.id]??1/0,i.position);return Object.keys(n.points).map(t=>({id:t,name:n.names?.[t]||jm(t),points:n.points[t],isPlayer:t===Li.id,_best:e[t]??1/0})).sort((t,i)=>i.points-t.points||t._best-i._best).map(({_best:t,...i})=>i)}function ca(n){return n.stageIndex>=n.stages.length}function nc(n=new Date){let e=n instanceof Date?n:new Date(n),t=e.getUTCFullYear(),i=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`DAILY-${t}-${i}-${s}`}function sT(){let n="ABCDEFGHJKMNPQRSTUVWXYZ23456789",e="RUSH-";for(let t=0;t<4;t++)e+=n[Math.floor(Math.random()*n.length)];return e}function Kl(){return{runs:0,wins:0,bestPoints:0,unlocked:[]}}function af(n){let e=Kl();if(!n||typeof n!="object")return e;let t=i=>Number.isFinite(i)&&i>=0?Math.floor(i):0;return{runs:t(n.runs),wins:t(n.wins),bestPoints:t(n.bestPoints),unlocked:Array.isArray(n.unlocked)?n.unlocked.filter(i=>typeof i=="string"):e.unlocked}}function Jm(){try{return globalThis.localStorage??null}catch{return null}}function lf(){try{let n=Jm();if(!n)return Kl();let e=n.getItem(Ym);return e?af(JSON.parse(e)):Kl()}catch{return Kl()}}function cf(n){try{let e=Jm();return e?(e.setItem(Ym,JSON.stringify(af(n))),!0):!1}catch{return!1}}function uf(n,e){let t=af(n),i=fo(e),s=i.find(o=>o.isPlayer),r=i.length>0&&i[0].isPlayer;return{runs:t.runs+1,wins:t.wins+(r?1:0),bestPoints:Math.max(t.bestPoints,s?s.points:0),unlocked:t.unlocked.slice()}}var ai=.9,Qm=.3,ic=8,ff=3,e0=6+.8,ua=3,rT=4.5,oT=.015,aT=.004,t0=60,yt={asphaltA:[.27,.225,.2],asphaltB:[.31,.26,.23],rampDark:[.13,.13,.15],yellow:[1,.82,.05],black:[.04,.04,.05],white:[.95,.95,.92],red:[.86,.14,.12],checkW:[.95,.95,.95],checkB:[.04,.04,.05],railA:[.93,.92,.88],railB:[.8,.2,.12],neonCyan:[.2,1,1],neonMag:[1,.15,.9],sand:[.3,.48,.15],motorwayA:[.2,.2,.21],motorwayB:[.22,.22,.23],lane:[.34,.33,.31],gravel:[.24,.4,.13],tunOchreA:[.5,.39,.2],tunOchreB:[.44,.34,.17],sodium:[1,.72,.28],tunA:[.16,.18,.24],tunB:[.21,.23,.3],concrete:[.36,.38,.42],concreteB:[.3,.32,.36],post:[.12,.13,.16],beam:[.1,.1,.12],mast:[.17,.18,.22]},sc=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],n0=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],lT=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],wn=(n,e,t)=>n+(e-n)*t,kn=class{constructor(){this.pos=[],this.col=[],this.uv=[],this.idx=[],this.n=0}quad(e,t,i,s){let[r,o,a,l]=e,c=n0(sc(o,r),sc(a,r)),u=n0(sc(a,r),sc(l,r)),h=[c[0]+u[0],c[1]+u[1],c[2]+u[2]];if(!(Math.hypot(h[0],h[1],h[2])>1e-12))return;let f=lT(h,i)<0,p=this.n;for(let g=0;g<4;g++){let x=e[g];this.pos.push(x[0],x[1],x[2]),this.col.push(t[0],t[1],t[2]);let m=s?s[g]:[0,0];this.uv.push(m[0],m[1])}this.n+=4,f?this.idx.push(p,p+2,p+1,p,p+3,p+2):this.idx.push(p,p+1,p+2,p,p+2,p+3)}};function ha(n,e,t,i,s){for(let r=0;r<3;r++){let o=(r+1)%3,a=(r+2)%3;for(let l of[-1,1]){let c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([u,h])=>{let f=[0,0,0];return f[r]=l,f[o]=u,f[a]=h,[0,1,2].map(p=>e[p]+t[0][p]*f[0]*i[0]+t[1][p]*f[1]*i[1]+t[2][p]*f[2]*i[2])});n.quad(c,s,t[r].map(u=>u*l),null)}}}function df(n,e,t){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new ii(i);return s.colorSpace=Rt,s.anisotropy=4,s}function i0(n,e,t,i){n.beginPath(),e.forEach(([s,r],o)=>o?n.lineTo(s*t,r*i):n.moveTo(s*t,r*i)),n.closePath(),n.fill()}var cT=[[.12,.1],[.82,.5],[.12,.9],[.12,.68],[.5,.5],[.12,.32]];function rc(n,e,t){let i=t??Yn(n.seed??1),s=n.pts,r=s.length,o=n.step??n.length/r,a=n.length??r*o,l=n.features??[],c=l.filter(C=>C.type==="ramp"),u=l.filter(C=>C.type==="boost"),h=l.filter(C=>C.type==="tunnel"),f=Math.max(0,Math.min(1,e.sheen??e.wet??0)),p=!!e.night,g=new at;g.name="road";let x=[],m=[],d=[],S=C=>(m.push(C),C),M=df(128,128,(C,z,k)=>{C.fillStyle="#f3efe6",C.fillRect(0,0,z,k),C.fillStyle="#d6202a",i0(C,cT,z,k)}),_=df(256,128,(C,z,k)=>{C.fillStyle="#04141a",C.fillRect(0,0,z,k),C.fillStyle="#37f3ff",i0(C,[[.05,.1],[.8,.5],[.05,.9],[.05,.7],[.4,.5],[.05,.3]],z,k)}),E=df(1024,256,(C,z,k)=>{C.fillStyle="#0b0e16",C.fillRect(0,0,z,k),C.strokeStyle="#ffd21f",C.lineWidth=10,C.strokeRect(12,12,z-24,k-24),C.fillStyle="#ffd21f",C.font="bold 150px Arial, Helvetica, sans-serif",C.textAlign="center",C.textBaseline="middle",C.fillText("POLYGON RUSH",z/2,k/2+8)});for(let C of[M,_,E])C&&d.push(C);_&&(_.wrapS=Pn);let T=S(new nt({vertexColors:!0,flatShading:!0,roughness:.85-.6*f,metalness:f>0?.2:.02})),v=S(new Yt({vertexColors:!0})),w=S(new nt({vertexColors:!0,flatShading:!0,color:16777215,emissive:16777215,emissiveIntensity:.14,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),y=S(new nt({vertexColors:!0,flatShading:!0,roughness:1})),b=S(new nt({vertexColors:!0,flatShading:!0,roughness:.5,metalness:.2})),A=S(new Yt({vertexColors:!0})),D=S(new nt({color:M?16777215:16762906,map:M,emissive:M?16777215:16762906,emissiveMap:M,emissiveIntensity:.5,flatShading:!0})),O=S(new nt({color:207411,emissive:3666943,emissiveMap:_,emissiveIntensity:2.2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),L=S(new nt({vertexColors:!0,flatShading:!0,side:Pt,roughness:.9})),F=S(new Yt({vertexColors:!0})),B=S(new nt({vertexColors:!0,flatShading:!0,roughness:.6})),Y=S(new nt({color:E?16777215:16765471,map:E,emissive:E?16777215:16756736,emissiveMap:E,emissiveIntensity:.7,flatShading:!0})),W=S(new nt({color:2830138,flatShading:!0,roughness:.7})),H=S(new nt({color:16773570,emissive:16765562,emissiveIntensity:p?2.5:.8,flatShading:!0})),ae=C=>{for(let z of c)if(C>=z.s0&&C<z.s1)return z.height*(C-z.s0)/(z.s1-z.s0);return 0},ve=C=>c.some(z=>C>=z.s0&&C<z.s1),Se=C=>h.some(z=>C>=z.s0&&C<=z.s1),ge=C=>{let z=C/o,k=Math.floor(z),K=z-k;k=n.open?Math.max(0,Math.min(r-2,k)):(k%r+r)%r;let N=s[k],ce=s[(k+1)%r],G=wn(N.rx,ce.rx,K),Z=wn(N.rz,ce.rz,K),j=Math.hypot(G,Z)||1,ie=wn(N.tx,ce.tx,K),ye=wn(N.tz,ce.tz,K),Be=Math.hypot(ie,ye)||1,Re=wn(N.y,ce.y,K);return{s:C,x:wn(N.x,ce.x,K),z:wn(N.z,ce.z,K),yb:Re,y:Re,h:0,rx:G/j,rz:Z/j,tx:ie/Be,tz:ye/Be,w:wn(N.width,ce.width,K),curv:wn(N.curv,ce.curv,K),sample:!1}},le=(C,z,k)=>({x:wn(C.x,z.x,k),y:wn(C.y,z.y,k),yb:wn(C.yb,z.yb,k),z:wn(C.z,z.z,k),rx:wn(C.rx,z.rx,k),rz:wn(C.rz,z.rz,k),w:wn(C.w,z.w,k)}),se=(C,z,k=0)=>[C.x+C.rx*z,C.y+k,C.z+C.rz*z],re=(C,z,k=0)=>[C.x+C.rx*z,C.yb+k,C.z+C.rz*z],I=[];for(let C of c)I.push({s:C.s0,h:0},{s:C.s1,h:C.height},{s:C.s1,h:0});I.sort((C,z)=>C.s-z.s);let $=[],q=0,ee=(C,z,k)=>{let K=$[$.length-1];if(K&&Math.abs(K.s-C)<1e-9&&Math.abs(K.h-z)<1e-9){K.sample=K.sample||k;return}let N=ge(C);N.h=z,N.y=N.yb+z,N.sample=k,$.push(N)};for(let C=0;C<r;C++){let z=C*o;for(;q<I.length&&I[q].s<=z+1e-9;)ee(I[q].s,I[q].h,!1),q++;ee(z,ae(z),!0)}for(;q<I.length;)ee(I[q].s,I[q].h,!1),q++;let pe=$.length,we=[];for(let C=0;C<pe&&!(n.open&&C===pe-1);C++){let z=$[C],k=$[(C+1)%pe],K=z.s,N=C+1<pe?$[C+1].s:a,ce=Math.abs(N-K)<1e-9,G=(K+N)/2;we.push({a:z,b:k,sa:K,sb:N,drop:ce,mid:G,ramp:!ce&&ve(G)})}let Me=new kn,X=new kn,He=new kn,ke=new kn,Ue=new kn,Ae=new kn,qe=new kn,Fe=new kn,U=new kn,R=new kn,te=new kn,_e=new kn,Te=C=>C.w/2+6-Qm/2,me=C=>C.w/2+6+Qm/2;for(let C of we){let{a:z,b:k,sa:K,sb:N,mid:ce}=C;if(C.drop){Me.quad([se(z,-z.w/2),se(z,z.w/2),se(k,k.w/2),se(k,-k.w/2)],yt.rampDark,[z.tx,0,z.tz]);continue}let G=z.w/2,Z=k.w/2;if(C.ramp)X.quad([se(z,-G),se(z,G),se(k,Z),se(k,-Z)],Math.floor(ce/2)%2===0?yt.yellow:yt.black,[0,1,0]),Me.quad([se(z,-G),se(k,-Z),re(k,-Z),re(z,-G)],yt.rampDark,[-z.rx,0,-z.rz]),Me.quad([se(z,G),re(z,G),re(k,Z),se(k,Z)],yt.rampDark,[z.rx,0,z.rz]);else{Me.quad([se(z,-G),se(z,G),se(k,Z),se(k,-Z)],n.open?Math.floor(ce/8)%2?yt.motorwayB:yt.motorwayA:Math.floor(ce/8)%2?yt.asphaltB:yt.asphaltA,[0,1,0]);for(let Re of[-1,1])He.quad([se(z,Re*(G-.25),.02),se(z,Re*(G-.45),.02),se(k,Re*(Z-.45),.02),se(k,Re*(Z-.25),.02)],yt.white,[0,1,0]);let j=9,ie=3;for(let Re=Math.floor(K/j);Re*j<N;Re++){let Ne=Math.max(K,Re*j),J=Math.min(N,Re*j+ie);if(J-Ne<1e-6)continue;let oe=le(z,k,(Ne-K)/(N-K)),fe=le(z,k,(J-K)/(N-K));He.quad([se(oe,-.08,.02),se(oe,.08,.02),se(fe,.08,.02),se(fe,-.08,.02)],yt.white,[0,1,0])}let ye=Math.abs((z.curv+k.curv)/2)>aT?1.2:.5,Be=Math.floor(ce/2)%2?yt.red:yt.railA;for(let Re of n.open?[]:[-1,1])He.quad([se(z,Re*G,.025),se(z,Re*(G+ye),.025),se(k,Re*(Z+ye),.025),se(k,Re*Z,.025)],Be,[0,1,0])}for(let j of[-1,1]){ke.quad([re(z,j*G),re(z,j*Te(z)),re(k,j*Te(k)),re(k,j*Z)],n.open?yt.lane:yt.sand,[0,1,0]);let ie=ic/2,ye=-ff/2,Be=-ff,Re=[j*z.rx*.6,.8,j*z.rz*.6];ke.quad([re(z,j*me(z),0),re(z,j*(me(z)+ie),ye),re(k,j*(me(k)+ie),ye),re(k,j*me(k),0)],yt.gravel,Re),ke.quad([re(z,j*(me(z)+ie),ye),re(z,j*(me(z)+ic),Be),re(k,j*(me(k)+ic),Be),re(k,j*(me(k)+ie),ye)],yt.gravel,Re);let Ne=Math.floor(ce/6)%2?yt.railB:yt.railA,J=j*Te(z),oe=j*Te(k),fe=j*me(z),xe=j*me(k);!n.open&&(j<0||p||e.openRight===!1)&&(Ue.quad([re(z,J,0),re(z,J,ai),re(k,oe,ai),re(k,oe,0)],Ne,[-j*z.rx,0,-j*z.rz]),Ue.quad([re(z,fe,0),re(z,fe,ai),re(k,xe,ai),re(k,xe,0)],Ne,[j*z.rx,0,j*z.rz]),Ue.quad([re(z,J,ai),re(z,fe,ai),re(k,xe,ai),re(k,oe,ai)],Ne,[0,1,0])),p&&Ae.quad([re(z,J,ai+.02),re(z,fe,ai+.02),re(k,xe,ai+.02),re(k,oe,ai+.02)],j<0?yt.neonCyan:yt.neonMag,[0,1,0])}}for(let C of $){if(!C.sample||Math.abs(C.curv)<=oT||Math.round(C.s/o)%8!==0||Se(C.s)||ve(C.s))continue;let k=-Math.sign(C.curv)*(C.w/2+6+.6),N=C.curv>0?[[0,0],[1,0],[1,1],[0,1]]:[[1,0],[0,0],[0,1],[1,1]];qe.quad([re(C,k-.6,1),re(C,k+.6,1),re(C,k+.6,2),re(C,k-.6,2)],[1,1,1],[-C.tx,0,-C.tz],N),ha(te,[C.x+C.rx*k,C.yb+.35,C.z+C.rz*k],[[C.tx,0,C.tz],[C.rx,0,C.rz],[0,1,0]],[.08,.12,.65],yt.post)}if(!n.noStart){let C=ge(0),z=Math.max(4,Math.round(C.w)),k=C.w/z;for(let G=0;G<3;G++){let Z=ge(-2+G),j=ge(-1+G);for(let ie=0;ie<z;ie++){let ye=-C.w/2+ie*k,Be=ye+k;He.quad([se(Z,ye,.03),se(Z,Be,.03),se(j,Be,.03),se(j,ye,.03)],(G+ie)%2?yt.checkB:yt.checkW,[0,1,0])}}let K=C.w/2+6+.5,N=[[C.tx,0,C.tz],[C.rx,0,C.rz],[0,1,0]];for(let G of[-1,1])ha(te,[C.x+C.rx*G*K,C.yb+4,C.z+C.rz*G*K],N,[.3,.3,4],yt.post);ha(te,[C.x,C.yb+7.5,C.z],N,[.5,K,.5],yt.beam);let ce=(G,Z,j)=>[C.x+C.tx*G+C.rx*Z,C.yb+j,C.z+C.tz*G+C.rz*Z];_e.quad([ce(-.55,-K,5.2),ce(-.55,K,5.2),ce(-.55,K,6.8),ce(-.55,-K,6.8)],[1,1,1],[-C.tx,0,-C.tz],[[0,0],[1,0],[1,1],[0,1]]),_e.quad([ce(.55,-K,5.2),ce(.55,K,5.2),ce(.55,K,6.8),ce(.55,-K,6.8)],[1,1,1],[C.tx,0,C.tz],[[1,0],[0,0],[0,1],[1,1]]);for(let G of u){let Z=[];for(let ie=G.s0;ie<G.s1;ie+=2)Z.push(ie);Z.push(G.s1);let j=Z.map(ge);for(let ie=0;ie+1<j.length;ie++){let ye=j[ie],Be=j[ie+1],Re=(ye.s-G.s0)/4,Ne=(Be.s-G.s0)/4;Fe.quad([se(ye,-ye.w/2,.04),se(ye,ye.w/2,.04),se(Be,Be.w/2,.04),se(Be,-Be.w/2,.04)],[1,1,1],[0,1,0],[[Re,0],[Re,1],[Ne,1],[Ne,0]])}}}let Ve=C=>{let z=C.w/2+e0,k=[[-z,0],[-z,ua]];for(let K=1;K<=7;K++){let N=Math.PI-K*Math.PI/8;k.push([z*Math.cos(N),ua+rT*Math.sin(N)])}return k.push([z,ua],[z,0]),k},Le=(C,z,k,K=0)=>[C.x+C.rx*z+C.tx*K,C.yb+k,C.z+C.rz*z+C.tz*K],Oe=(C,z,k)=>{let K=-z,N=ua-k,ce=Math.hypot(K,N)||1;return[C.rx*K/ce,N/ce,C.rz*K/ce]},Xe=([C,z])=>{let k=-C,K=ua-z,N=Math.hypot(k,K)||1;return[C+k/N*.45,z+K/N*.45]};for(let C of h){let z=[];for(let K=C.s0;K<C.s1;K+=2)z.push(K);z.push(C.s1);let k=z.map(ge);for(let K=0;K+1<k.length;K++){let N=k[K],ce=k[K+1],G=Ve(N),Z=Ve(ce);for(let j=0;j<G.length-1;j++){let ie=(G[j][0]+G[j+1][0])/2,ye=(G[j][1]+G[j+1][1])/2;U.quad([Le(N,G[j][0],G[j][1]),Le(N,G[j+1][0],G[j+1][1]),Le(ce,Z[j+1][0],Z[j+1][1]),Le(ce,Z[j][0],Z[j][1])],n.open?j%2?yt.tunOchreA:yt.tunOchreB:j%2?yt.tunA:yt.tunB,Oe(N,ie,ye))}if(Math.round((N.s-C.s0)/2)%6===0)for(let j=1;j<=8;j++){let ie=Xe(G[j]),ye=Xe(G[j+1]),Be=(ie[0]+ye[0])/2,Re=(ie[1]+ye[1])/2;R.quad([Le(N,ie[0],ie[1]),Le(N,ye[0],ye[1]),Le(N,ye[0],ye[1],.6),Le(N,ie[0],ie[1],.6)],n.open?yt.sodium:j%2?yt.neonCyan:yt.neonMag,Oe(N,Be,Re))}}for(let K of[C.cutStart?null:k[0],C.cutEnd?null:k[k.length-1]]){if(!K)continue;let N=K.w/2+e0,ce=[[K.tx,0,K.tz],[K.rx,0,K.rz],[0,1,0]];for(let G of[-1,1])ha(U,[K.x+K.rx*G*(N+1.2),K.yb+5,K.z+K.rz*G*(N+1.2)],ce,[2,1.1,5],yt.concrete);ha(U,[K.x,K.yb+10.5,K.z],ce,[2,N+3.5,1.5],yt.concreteB)}}let be=(C,z,k,K=!1)=>{if(!C.idx.length)return null;let N=new mt;N.setAttribute("position",new ot(C.pos,3)),N.setAttribute("color",new ot(C.col,3)),N.setAttribute("uv",new ot(C.uv,2)),N.setIndex(C.idx),N.computeVertexNormals(),x.push(N);let ce=new it(N,z);return ce.name=k,ce.receiveShadow=K,g.add(ce),ce};be(Me,T,"road-asphalt",!0),be(X,v,"road-ramp-top"),be(He,w,"road-paint"),be(ke,y,"road-shoulder-talus"),be(Ue,b,"road-barriers"),p&&be(Ae,A,"road-barrier-neon"),be(qe,D,"road-chevrons"),be(Fe,O,"road-boost"),be(U,L,"road-tunnels"),be(R,F,"road-tunnel-neon"),be(te,B,"road-props"),be(_e,Y,"road-start-sign");let ue=[];for(let C=1;C*t0<a-5;C++){let z=C*t0;if(h.some(Z=>z>=Z.s0-15&&z<=Z.s1+15))continue;let k=ge(z),K=C%2?1:-1,N=K*(k.w/2+6+2.6),ce=k.yb-ff*Math.min(1,2.45/ic),G=i.range(8.5,9.5);ue.push({x:k.x+k.rx*N,z:k.z+k.rz*N,y:ce,h:G,hx:k.x+k.rx*(N-K*.6),hz:k.z+k.rz*(N-K*.6)})}if(ue.length){let C=new In(.18,.26,9,6,1),z=new lr(.55,0);x.push(C,z);let k=new bn(C,W,ue.length),K=new bn(z,H,ue.length);k.name="road-lamp-masts",K.name="road-lamp-heads";let N=new Ze,ce=new sn,G=new V,Z=new V;ue.forEach((j,ie)=>{Z.set(j.x,j.y+j.h/2,j.z),G.set(1,j.h/9,1),N.compose(Z,ce,G),k.setMatrixAt(ie,N),Z.set(j.hx,j.y+j.h+.2,j.hz),G.set(1,1,1),N.compose(Z,ce,G),K.setMatrixAt(ie,N)}),k.instanceMatrix.needsUpdate=!0,K.instanceMatrix.needsUpdate=!0,g.add(k,K)}return{group:g,update:(C,z)=>{_&&(_.offset.x=-(z*.9%1)),O.emissiveIntensity=2.2+.5*Math.sin(z*5)},dispose:()=>{g.removeFromParent();for(let C of x)C.dispose();for(let C of m)C.dispose();for(let C of d)C.dispose()}}}function r0(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new mt,c=0;for(let u=0;u<n.length;++u){let h=n[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let p=n[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=s0(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let p=[];for(let x=0;x<o[u].length;++x)p.push(o[u][x][f]);let g=s0(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function s0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new pt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,p=u.count;f<p;f++)for(let g=0;g<t;g++){let x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function pf(n,e){if(e===am)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===ra||e===zl){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===ra)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function hr(n,e=.5,t=1){if(!n||n.userData.voxel||!(n.isMeshStandardMaterial||n.isMeshLambertMaterial))return n;n.userData.voxel=!0;let i=n.onBeforeCompile;return n.onBeforeCompile=(s,r)=>{i?.call(n,s,r),s.uniforms.uVoxCell={value:e},s.uniforms.uVoxStrength={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"voxel-"+e+"-"+t,n.needsUpdate=!0,n}var uT=/asphalt|paint|boost|sign|ramp|neon|lamp-heads/;function fa(n,e){n.traverse(t=>{if(!t.isMesh||uT.test(t.name))return;let i=Array.isArray(t.material)?t.material:[t.material];for(let s of i)!s||s.transparent||s.emissiveIntensity>1.2||(s.roughness??1)<.35||hr(s,e(t),1)})}function o0(n,e,t=46){let i=[];for(let l=0;l<t;l++){let c=e.range(0,Math.PI*2),u=e.range(700,4200),h=Math.cos(c)*u,f=Math.sin(c)*u,p=e.range(260,520),g=e.range(26,46),x=e.int(5,11);for(let m=0;m<x;m++)i.push([h+Math.round(e.range(-3.5,3.5))*g,p+Math.round(e.range(0,1.4))*g*.6,f+Math.round(e.range(-2,2))*g,g*e.int(1,3),g*.6*e.int(1,2),g*e.int(1,2)])}let s=new cn(1,1,1),r=new si({color:n.night?2765648:16777215,fog:!1,emissive:n.night?329487:new Ie(16777215).lerp(new Ie(n.skyHorizon),.35).multiplyScalar(.5)}),o=new bn(s,r,i.length),a=new Ze;return i.forEach((l,c)=>{a.makeScale(l[3],l[4],l[5]),a.setPosition(l[0],l[1],l[2]),o.setMatrixAt(c,a)}),o.instanceMatrix.needsUpdate=!0,o.frustumCulled=!1,o.name="voxel-clouds",o}function a0(n,e,t,i,s,r,o,a,l,c){let u=e+s,h=t+r,f=i+o,p,g,x,m,d,S;s?(p=0,g=l?1:-1,x=0,m=0,d=0,S=c?1:-1):r?(p=a?1:-1,g=0,x=0,m=0,d=0,S=c?1:-1):(p=a?1:-1,g=0,x=0,m=0,d=l?1:-1,S=0);let M=n(u+p,h+g,f+x)?1:0,_=n(u+m,h+d,f+S)?1:0,E=n(u+p+m,h+g+d,f+x+S)?1:0;return .5+.1667*(M&&_?0:3-(M+_+E))}function Ns(n,e){let t=n.index?n.toNonIndexed():n,i=t.attributes.position,s=t.attributes.color,r=512,o=(m,d,S)=>m+r+(d+r)*1024+(S+r)*1048576,a=new Map,l=(m,d,S,M,_,E)=>{let T=Math.floor(m/e),v=Math.floor(d/e),w=Math.floor(S/e),y=o(T,v,w);a.has(y)||a.set(y,[T,v,w,M,_,E])};for(let m=0;m<i.count;m+=3){let d=i.getX(m),S=i.getY(m),M=i.getZ(m),_=i.getX(m+1),E=i.getY(m+1),T=i.getZ(m+1),v=i.getX(m+2),w=i.getY(m+2),y=i.getZ(m+2),b=.6,A=.6,D=.6;s&&(b=(s.getX(m)+s.getX(m+1)+s.getX(m+2))/3,A=(s.getY(m)+s.getY(m+1)+s.getY(m+2))/3,D=(s.getZ(m)+s.getZ(m+1)+s.getZ(m+2))/3);let O=Math.max(Math.hypot(_-d,E-S,T-M),Math.hypot(v-d,w-S,y-M),Math.hypot(v-_,w-E,y-T)),L=Math.max(1,Math.ceil(O/e*2));for(let F=0;F<=L;F++)for(let B=0;B<=L-F;B++){let Y=F/L,W=B/L;l(d+(_-d)*Y+(v-d)*W,S+(E-S)*Y+(w-S)*W,M+(T-M)*Y+(y-M)*W,b,A,D)}}let c=new Map;for(let m of a.values()){let d=m[0]+r+(m[2]+r)*1024,S=c.get(d);S||c.set(d,S=[]),S.push(m)}for(let m of c.values()){m.sort((d,S)=>d[1]-S[1]);for(let d=0;d<m.length-1;d++)for(let S=m[d][1]+1;S<m[d+1][1];S++)a.set(o(m[d][0],S,m[d][2]),[m[d][0],S,m[d][2],m[d][3],m[d][4],m[d][5]])}let u=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],h=[],f=[],p=[],g=(m,d,S)=>a.has(o(m,d,S));for(let m of a.values()){let[d,S,M,_,E,T]=m,v=Math.sin(d*12.9898+S*78.233+M*37.719)*43758.5453,w=.86+.24*(v-Math.floor(v));for(let[y,b,A,D]of u)if(!a.has(o(d+y,S+b,M+A)))for(let O of[0,1,2,0,2,3]){let L=D[O*3],F=D[O*3+1],B=D[O*3+2],Y=w*a0(g,d,S,M,y,b,A,L,F,B);h.push((d+L)*e,(S+F)*e,(M+B)*e),f.push(y,b,A),p.push(_*Y,E*Y,T*Y)}}let x=new mt;return x.setAttribute("position",new ot(h,3)),x.setAttribute("normal",new ot(f,3)),x.setAttribute("color",new ot(p,3)),x.computeBoundingSphere(),x}function $n(n,e,t,i,s,r=.2){let o=new Array(n*e*t),a=(x,m,d)=>x<0||m<0||d<0||x>=n||m>=e||d>=t?null:o[x+n*(m+e*d)];for(let x=0;x<t;x++)for(let m=0;m<e;m++)for(let d=0;d<n;d++)o[d+n*(m+e*x)]=s(d,m,x)||null;let l=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],c=[],u=[],h=[],f=-n/2,p=-t/2;for(let x=0;x<t;x++)for(let m=0;m<e;m++)for(let d=0;d<n;d++){let S=o[d+n*(m+e*x)];if(!S)continue;let M=Math.sin(d*12.9898+m*78.233+x*37.719)*43758.5453,_=1-r/2+r*(M-Math.floor(M));for(let[E,T,v,w]of l)if(!a(d+E,m+T,x+v)&&!(T<0&&m===0))for(let y of[0,1,2,0,2,3]){let b=w[y*3],A=w[y*3+1],D=w[y*3+2],O=_*a0(a,d,m,x,E,T,v,b,A,D);c.push((d+f+b)*i,(m+A)*i,(x+p+D)*i),u.push(E,T,v),h.push(S[0]*O,S[1]*O,S[2]*O)}}let g=new mt;return g.setAttribute("position",new ot(c,3)),g.setAttribute("normal",new ot(u,3)),g.setAttribute("color",new ot(h,3)),g.computeBoundingSphere(),g}function l0(n,e=1,t=null){if(!n||n.userData.wetRoad)return n;n.userData.wetRoad=!0;let i=n.onBeforeCompile;return n.onBeforeCompile=(s,r)=>{i?.call(n,s,r),s.uniforms.uWet={value:e},s.uniforms.tRefl={value:t?t.texture:null},s.uniforms.uReflMatrix={value:t?t.matrix:new Ze},s.uniforms.uReflOn={value:t?1:0},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"wet-road-"+e+(t?"-refl":""),n.needsUpdate=!0,n}function mf(n,e){let t=1/0,i=-1/0,s=1/0,r=-1/0,o=1/0,a=-1/0;for(let f=0;f<n.length;f+=4)t=Math.min(t,n[f]),i=Math.max(i,n[f]),s=Math.min(s,n[f+1]),r=Math.max(r,n[f+1]),o=Math.min(o,n[f+2]),a=Math.max(a,n[f+2]);let l=i-t+1,c=r-s+1,u=a-o+1,h=new Map;for(let f=0;f<n.length;f+=4){let p=n[f+3];h.set(n[f]-t+l*(n[f+1]-s+c*(n[f+2]-o)),[(p>>16&255)/255,(p>>8&255)/255,(p&255)/255])}return $n(l,c,u,e,(f,p,g)=>h.get(f+l*(p+c*g))||null,.12)}function c0(n,e=3.1,t=2.6){if(!n||!n.userData.voxel||n.userData.windows)return n;n.userData.windows=!0;let i=n.onBeforeCompile;n.onBeforeCompile=(r,o)=>{i?.call(n,r,o),r.fragmentShader=r.fragmentShader.replace("#include <roughnessmap_fragment>",`
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
        }`)},n.customProgramCacheKey=()=>"sea-waves",n.needsUpdate=!0,e}var fn=5,h0=1,Us=450,Zn=40,f0=12e3,d0=32,p0=4e3,Kn=Math.PI*2,da=new Ut,mo=new Ie,m0=new Ze,g0=new Ze,hT=new V(0,1,0),x0=n=>n<0?0:n>1?1:n,Di=(n,e,t)=>n<e?e:n>t?t:n,fr=(n,e,t)=>{let i=x0((t-n)/(e-n));return i*i*(3-2*i)};function fT(n){let e=(i,s)=>{let r=Math.imul(i|0,374761393)+Math.imul(s|0,668265263)+n|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},t=(i,s)=>{let r=Math.floor(i),o=Math.floor(s),a=i-r,l=s-o,c=a*a*(3-2*a),u=l*l*(3-2*l),h=e(r,o),f=e(r+1,o),p=e(r,o+1),g=e(r+1,o+1);return h+(f-h)*c+(p-h)*u+(h-f-p+g)*c*u};return(i,s)=>(t(i,s)*.5+t(i*2+17.3,s*2-9.1)*.25+t(i*4-3.7,s*4+11.2)*.125)/.875}var po=n=>{let e=new Ie(n);return[e.r,e.g,e.b]},Fs={sand:po(14271631),dry:po(7317050),garrigue:po(5212718),rock:po(12169890),pale:po(13617336),snow:po(15855076)},dT=[16513264,15853260,14725754,16052195],pT=[9075302,7236192,11047018,8023646],mT=[3407871,16727250,16757051],oc=0,ac=0,lc=0,pa=(n,e)=>{oc+=(n[0]-oc)*e,ac+=(n[1]-ac)*e,lc+=(n[2]-lc)*e};function gT(n,e,t,i,s,r){oc=Fs.sand[0],ac=Fs.sand[1],lc=Fs.sand[2],pa(Fs.dry,fr(2.5,7,n)),pa(Fs.garrigue,fr(25,75,n)*.55),pa(Fs.rock,fr(.4,.65,e)),pa(Fs.pale,fr(95,120,n)*.8),pa(Fs.snow,fr(125,150,n));let o=oc*t,a=ac*t,l=lc*t;i&&(o=o*.45+.02,a=a*.5+.03,l=l*.75+.09);for(let c=0;c<9;c+=3)s[r+c]=o,s[r+c+1]=a,s[r+c+2]=l}function li(n,e){let t=n.index?n.toNonIndexed():n;t.attributes.uv&&t.deleteAttribute("uv"),t.attributes.normal||t.computeVertexNormals();let i=t.attributes.position.count,s=new Float32Array(i*3);mo.setHex(e);for(let r=0;r<i;r++)s[r*3]=mo.r,s[r*3+1]=mo.g,s[r*3+2]=mo.b;return t.setAttribute("color",new pt(s,3)),t}var ma=n=>r0(n,!1);function xT(n,e,t){let i=Math.sin(n*12.9898+e*78.233+t*37.719)*43758.5453;return i-Math.floor(i)}function vT(){let n=new lr(1,0),e=n.attributes.position;for(let t=0;t<e.count;t++){let i=e.getX(t),s=e.getY(t),r=e.getZ(t),o=.8+.4*xT(i,s,r);e.setXYZ(t,i*o,s*o,r*o)}return n.computeVertexNormals(),n}function yT(){return ma([li(new In(.35,.5,6,6).translate(0,3,0),7162931),li(new lr(3.4,0).scale(1,.55,1).translate(0,7.4,0),4160058)])}function _T(){return ma([li(new In(.25,.35,1.2,5).translate(0,.6,0),7162931),li(new ar(1.1,10,6).translate(0,6,0),3037756)])}function MT(){let n=[li(new In(.22,.35,8,5).translate(0,4,0),9071178)];for(let e=0;e<7;e++){let t=new ar(.55,4.6,3).rotateZ(Math.PI/2-.45).translate(0,8.4,0).rotateY(e*Kn/7);n.push(li(t,5214010))}return ma(n)}function bT(){return ma([li(new In(1.6,2.3,13,8).translate(0,6.5,0),16052712),li(new In(2,2,2.2,8).translate(0,6.5,0),12727595),li(new In(1.3,1.3,1.8,8).translate(0,14,0),16771488),li(new ar(1.7,1.2,8).translate(0,15.4,0),3812906)])}function ST(){return ma([li(new cn(2.2,.9,6).translate(0,.45,0),15986662),li(new ar(1.9,5.4,3).scale(.1,1,1).translate(0,3.6,-.3),16775400)])}function Si(n,e,t,i=!0){let s=new bn(n,e,t.length);for(let r=0;r<t.length;r++){let o=t[r];da.position.set(o.x,o.y,o.z),da.rotation.set(0,o.ry??0,0),da.scale.set(o.sx??1,o.sy??1,o.sz??1),da.updateMatrix(),s.setMatrixAt(r,da.matrix),o.col!==void 0&&(mo.setHex(o.col).multiplyScalar(o.v??1),s.setColorAt(r,mo))}return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.castShadow=i,s}var TT=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,wT=`
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
}`;function v0(n,e,t,i){let s=e.pts,r=s.length,o=e.bounds,a=!!t.night,l=fT(i.int(1,1073741808)),c=o.minX-Us-Zn,u=o.minZ-Us-Zn,h=Math.ceil((o.maxX-o.minX+2*Us)/Zn)+3,f=Math.ceil((o.maxZ-o.minZ+2*Us)/Zn)+3,p=Array.from({length:h*f},()=>[]);for(let J=0;J<r;J++){let oe=Di(Math.floor((s[J].x-c)/Zn),0,h-1),fe=Di(Math.floor((s[J].z-u)/Zn),0,f-1);p[fe*h+oe].push(J)}let g=0;function x(J,oe){let fe=Math.floor((J-c)/Zn),xe=Math.floor((oe-u)/Zn),Pe=Math.max(h,f),De=1/0,Ke=0;for(let et=0;et<=Pe;et++){for(let lt=xe-et;lt<=xe+et;lt++){if(lt<0||lt>=f)continue;let Ht=lt===xe-et||lt===xe+et?1:2*et;for(let Lt=fe-et;Lt<=fe+et;Lt+=Ht){if(Lt<0||Lt>=h)continue;let Vt=p[lt*h+Lt];for(let Xt=0;Xt<Vt.length;Xt++){let gn=Vt[Xt],P=s[gn],Q=P.x-J,he=P.z-oe,de=Q*Q+he*he;de<De&&(De=de,Ke=gn)}}}let st=et*Zn;if(De<=st*st)break}return g=Math.sqrt(De),Ke}function m(J,oe,fe){let xe=fe*fe,Pe=1/0,De=Di(Math.floor((J-fe-c)/Zn),0,h-1),Ke=Di(Math.floor((J+fe-c)/Zn),0,h-1),et=Di(Math.floor((oe-fe-u)/Zn),0,f-1),st=Di(Math.floor((oe+fe-u)/Zn),0,f-1);for(let lt=et;lt<=st;lt++)for(let Et=De;Et<=Ke;Et++){let Ht=p[lt*h+Et];for(let Lt=0;Lt<Ht.length;Lt++){let Vt=s[Ht[Lt]],Xt=Vt.x-J,gn=Vt.z-oe;Xt*Xt+gn*gn<=xe&&Vt.y<Pe&&(Pe=Vt.y)}}return Pe}let d=Math.ceil(r/4),S=new Float64Array(d*2);for(let J=0;J<d;J++)S[2*J]=s[J*4%r].x,S[2*J+1]=s[J*4%r].z;function M(J,oe){let fe=!1;for(let xe=0,Pe=d-1;xe<d;Pe=xe++){let De=S[2*xe],Ke=S[2*xe+1],et=S[2*Pe],st=S[2*Pe+1];Ke>oe!=st>oe&&J<(et-De)*(oe-Ke)/(st-Ke)+De&&(fe=!fe)}return fe}let _=o.minX-Us,E=o.minZ-Us,T=Math.ceil((o.maxX-o.minX+2*Us)/fn)+1,v=Math.ceil((o.maxZ-o.minZ+2*Us)/fn)+1,w=new Float32Array(T*v);for(let J=0;J<v;J++)for(let oe=0;oe<T;oe++){let fe=_+oe*fn,xe=E+J*fn,Pe=x(fe,xe),De=g,Ke=s[Pe],et=Ke.width*.5,st=Ke.y;if(De<40){let Q=m(fe,xe,24);Q<st&&(st=Q)}let lt=1;if(!M(fe,xe)){let Q=De-et+(l(fe/140+31.7,xe/140-8.2)-.5)*70;lt=1-fr(110,200,Q)}let Et=l(fe/260,xe/260),Lt=-15+(10+130*Math.pow(x0((Et-.42)/.5),1.5)+6*Et+15)*lt;if(lt>=1){let Q=l(fe/90+11.3,xe/90-4.1);Lt=Math.max(Lt,st+6+38*Q)}let Vt=fr(et+6+12,et+6+62,De),Xt=st-.6,gn=Xt+(Lt-Xt)*Vt,P=st+Math.max(0,De-et-6-12)*1.2;gn>P&&(gn=P),w[J*T+oe]=gn}let y=null;function b(J,oe){if(y)return y(J,oe);let fe=(J-_)/fn,xe=(oe-E)/fn;fe=Di(fe,0,T-1.000001),xe=Di(xe,0,v-1.000001);let Pe=Math.floor(fe),De=Math.floor(xe),Ke=fe-Pe,et=xe-De,st=w[De*T+Pe],lt=w[De*T+Pe+1],Et=w[(De+1)*T+Pe],Ht=w[(De+1)*T+Pe+1],Lt=st+(lt-st)*Ke,Vt=Et+(Ht-Et)*Ke;return Lt+(Vt-Lt)*et}let A=(J,oe)=>Math.max(Math.abs(b(J+4,oe)-b(J-4,oe)),Math.abs(b(J,oe+4)-b(J,oe-4)))/8,D=(J,oe,fe)=>{let xe=x(J,oe);return g>=s[xe].width*.5+6+4+fe},O=[],L=[],F=new Float32Array(9),B=(J,oe,fe,xe,Pe,De,Ke,et,st)=>{let lt=xe-J,Et=Pe-oe,Ht=De-fe,Lt=Ke-J,Vt=et-oe,Xt=st-fe,gn=Et*Xt-Ht*Vt,P=Ht*Lt-lt*Xt,Q=lt*Vt-Et*Lt,he=Math.hypot(gn,P,Q)||1,de=1-Math.abs(P)/he;O.push(J,oe,fe,xe,Pe,De,Ke,et,st),gT((oe+Pe+et)/3,de,.9+.2*i.next(),a,F,0);for(let ne=0;ne<9;ne++)L.push(F[ne])},Y=T-1,W=v-1,H=new Float32Array(Y*W);for(let J=0;J<W;J++)for(let oe=0;oe<Y;oe++){let fe=J*T+oe,xe=(w[fe]+w[fe+1]+w[fe+T]+w[fe+T+1])/4;H[J*Y+oe]=Math.floor(xe/h0)*h0}let ae=-4;for(let J=0;J<W;J++)for(let oe=0;oe<Y;oe++){let fe=H[J*Y+oe],xe=_+oe*fn,Pe=E+J*fn,De=xe+fn,Ke=Pe+fn;if(fe>ae&&(B(xe,fe,Pe,xe,fe,Ke,De,fe,Pe),B(De,fe,Pe,xe,fe,Ke,De,fe,Ke)),oe+1<Y){let et=H[J*Y+oe+1],st=Math.min(fe,et),lt=Math.max(fe,et);lt>st&&lt>ae&&(B(De,st,Pe,De,lt,Pe,De,lt,Ke),B(De,st,Pe,De,lt,Ke,De,st,Ke))}if(J+1<W){let et=H[(J+1)*Y+oe],st=Math.min(fe,et),lt=Math.max(fe,et);lt>st&&lt>ae&&(B(xe,st,Ke,xe,lt,Ke,De,lt,Ke),B(xe,st,Ke,De,lt,Ke,De,st,Ke))}}y=(J,oe)=>{let fe=Di(Math.floor((J-_)/fn),0,Y-1),xe=Di(Math.floor((oe-E)/fn),0,W-1);return H[xe*Y+fe]};let ve=new mt;ve.setAttribute("position",new ot(O,3)),ve.setAttribute("color",new ot(L,3)),ve.computeVertexNormals(),ve.computeBoundingSphere();let Se=new it(ve,new nt({vertexColors:!0,flatShading:!0,roughness:.94,metalness:0,side:Pt}));Se.receiveShadow=!0;let ge=new at;ge.name="environment",ge.add(Se);let le=(o.minX+o.maxX)/2,se=(o.minZ+o.maxZ)/2,re=new zn(f0,f0,d0,d0);re.rotateX(-Math.PI/2);let I=re.attributes.position,$=I.count,q=new Float32Array($),ee=new Float32Array($);for(let J=0;J<$;J++)q[J]=I.getX(J),ee[J]=I.getZ(J);let pe=new it(re,new nt({color:t.seaColor,roughness:.25,metalness:.05,flatShading:!0}));pe.position.set(le,0,se),ge.add(pe);let we=new V(t.sunDir[0],t.sunDir[1],t.sunDir[2]).normalize(),Me=new at,X=new vt({uniforms:{topColor:{value:new Ie(t.skyTop)},horizonColor:{value:new Ie(t.skyHorizon)},sunColor:{value:new Ie(t.sunColor)},sunDir:{value:we},night:{value:a?1:0}},vertexShader:TT,fragmentShader:wT,side:Qt,depthWrite:!1,fog:!1}),He=new it(new Es(p0,32,16),X);if(He.renderOrder=-10,He.frustumCulled=!1,Me.add(He),a){let oe=new Float32Array(1500);for(let Pe=0;Pe<500;Pe++){let De=i.range(0,Kn),Ke=Math.asin(i.range(.05,.98)),et=p0*.97;oe[Pe*3]=et*Math.cos(Ke)*Math.cos(De),oe[Pe*3+1]=et*Math.sin(Ke),oe[Pe*3+2]=et*Math.cos(Ke)*Math.sin(De)}let fe=new mt;fe.setAttribute("position",new pt(oe,3));let xe=new ws(fe,new or({color:16777215,size:2,sizeAttenuation:!1,fog:!1,depthWrite:!1,transparent:!0,opacity:.9}));xe.frustumCulled=!1,Me.add(xe)}ge.add(Me);let ke=new ao(t.hemiSky,t.hemiGround,t.hemiIntensity),Ue=new Ci(t.sunColor,t.sunIntensity);Ue.castShadow=!0,Ue.shadow.mapSize.set(2048,2048);let Ae=Ue.shadow.camera;Ae.left=-90,Ae.right=90,Ae.top=90,Ae.bottom=-90,Ae.near=1,Ae.far=600,Ae.updateProjectionMatrix(),Ue.shadow.bias=-5e-4,ge.add(ke,Ue,Ue.target);let qe=n.fog,Fe=n.background,U=new no(t.fogColor,t.fogDensity),R=new Ie(t.skyHorizon);n.fog=U,n.background=R;let te=_+(T-1)*fn,_e=E+(v-1)*fn,Te=()=>i.range(_+30,te-30),me=()=>i.range(E+30,_e-30),Ve=(J,oe,fe)=>{let xe=[];for(let Pe=0;Pe<oe&&xe.length<J;Pe++){let De=fe(Te(),me());De&&xe.push(De)}return xe},Le=Ve(320,4e4,(J,oe)=>{let fe=b(J,oe);if(fe<4||fe>95||!D(J,oe,2)||A(J,oe)>.6)return null;let xe=i.range(.8,1.45);return{x:J,y:fe-.3,z:oe,sx:xe,sy:xe*i.range(.9,1.3),sz:xe,ry:i.range(0,Kn),col:16777215,v:i.range(.85,1.15)}}),Oe=Ve(170,4e4,(J,oe)=>{let fe=b(J,oe);if(fe<6||fe>70||!D(J,oe,1.5)||A(J,oe)>.6)return null;let xe=i.range(.8,1.3);return{x:J,y:fe-.3,z:oe,sx:xe,sy:xe*i.range(.9,1.25),sz:xe,ry:i.range(0,Kn),col:16777215,v:i.range(.85,1.15)}}),Xe=Ve(110,4e4,(J,oe)=>{let fe=b(J,oe);if(fe<1.8||fe>14||!D(J,oe,2)||A(J,oe)>.5)return null;let xe=i.range(.85,1.25);return{x:J,y:fe-.3,z:oe,sx:xe,sy:xe,sz:xe,ry:i.range(0,Kn),col:16777215,v:i.range(.9,1.1)}});ge.add(Si(Ns(yT(),.8),new nt({vertexColors:!0,flatShading:!0,roughness:.9}),Le)),ge.add(Si(Ns(_T(),.7),new nt({vertexColors:!0,flatShading:!0,roughness:.9}),Oe)),ge.add(Si(Ns(MT(),.6),new nt({vertexColors:!0,flatShading:!0,roughness:.9}),Xe));let be=Ve(300,3e4,(J,oe)=>{let fe=b(J,oe);if(fe<1.5)return null;let xe=i.range(1.2,4.5);return D(J,oe,xe*.6)?{x:J,y:fe+xe*.15,z:oe,sx:xe,sy:xe*i.range(.55,.9),sz:xe,ry:i.range(0,Kn),col:i.pick(pT),v:i.range(.85,1.15)}:null}),ue=Ve(3,3e4,(J,oe)=>{if(b(J,oe)>-4)return null;let fe=x(J,oe);if(g<s[fe].width*.5+200||g>800)return null;let xe=i.range(25,45);return{x:J,y:.1*xe,z:oe,sx:xe,sy:xe*.45,sz:xe,ry:i.range(0,Kn),col:10260344,v:1}});ge.add(Si(Ns(vT(),.42),new nt({color:16777215,flatShading:!0,roughness:.95}),be.concat(ue)));let Ee=[],Ce=[],C=[],z=i.int(3,5),k=0;for(let J=0;J<4e3&&k<z;J++){let oe=Te(),fe=me(),xe=x(oe,fe),Pe=s[xe].width*.5;if(g<Pe+25||g>Pe+80)continue;let De=b(oe,fe);if(De<6||De>40||A(oe,fe)>.35)continue;k++;let Ke=i.int(7,12);for(let et=0;et<Ke;et++){let st=i.range(0,Kn),lt=Math.sqrt(i.next())*18,Et=oe+Math.cos(st)*lt,Ht=fe+Math.sin(st)*lt,Lt=x(Et,Ht);if(g<s[Lt].width*.5+6+4+4)continue;let Vt=b(Et,Ht);if(Vt<3)continue;let Xt=i.range(4,6.5),gn=i.range(3.5,6),P=i.range(4,6.5),Q=i.pick([0,Math.PI/2])+i.range(-.15,.15),he=Vt-1;if(Ee.push({x:Et,y:he,z:Ht,ry:Q,sx:Xt,sy:gn,sz:P,col:i.pick(dT),v:1}),Ce.push({x:Et,y:he+gn,z:Ht,ry:Q,sx:Xt*1.08,sy:i.range(1.8,2.6),sz:P*1.08}),a)for(let de of[-1,1]){let ne=de*Xt*.28,ze=P/2+.03;C.push({x:Et+ne*Math.cos(Q)+ze*Math.sin(Q),y:he+gn*.55,z:Ht-ne*Math.sin(Q)+ze*Math.cos(Q),ry:Q})}}}let K=new nt({color:16777215,flatShading:!0,roughness:.85}),N=new nt({color:11818298,flatShading:!0,roughness:.8});if(Ee.length){let J=new cn(1,1,1).translate(0,.5,0),oe=Ns(new In(0,.71,1,4).rotateY(Math.PI/4).translate(0,.5,0),.125);ge.add(Si(J,K,Ee),Si(oe,N,Ce))}if(a&&C.length){let J=new cn(1.2,1.1,.12);ge.add(Si(J,new Yt({color:16761466}),C,!1))}if(a){let J=0,oe=0,fe=!1;for(let xe=0;xe<4e3&&!fe;xe++){let Pe=Te(),De=me(),Ke=x(Pe,De),et=s[Ke].width*.5;if(g<et+220||g>et+420)continue;let st=b(Pe,De);st<6||st>30||(J=Pe,oe=De,fe=!0)}if(fe){let xe=[],Pe=[],De=i.int(9,13);for(let Ke=0;Ke<De;Ke++){let et=J+i.range(-110,110),st=oe+i.range(-110,110),lt=b(et,st);if(lt<2)continue;let Et=i.range(6,10),Ht=i.range(30,70);xe.push({x:et,y:lt,z:st,sx:Et,sy:Ht,sz:Et,col:1777720,v:i.range(.8,1.2)});let Lt=i.pick(mT);for(let Vt=0;Vt<3;Vt++){let Xt=Vt*Kn/3+i.range(0,.5);Pe.push({x:et+Math.cos(Xt)*Et*.88,y:lt+Ht*.05,z:st+Math.sin(Xt)*Et*.88,ry:-Xt,sy:Ht*.9,col:Lt,v:1})}}ge.add(Si(new In(.72,1,1,6).translate(0,.5,0),new nt({color:16777215,flatShading:!0,roughness:.7}),xe),Si(new cn(.5,1,.25).translate(0,.5,0),new Yt({color:16777215}),Pe,!1))}}{let J=[],oe=[];for(let xe=1;xe<v-1;xe++)for(let Pe=1;Pe<T-1;Pe++){let De=xe*T+Pe,Ke=w[De];if(Ke<2||Ke>30)continue;let et=x(_+Pe*fn,E+xe*fn);if(g<s[et].width*.5+60)continue;(w[De-1]<0||w[De+1]<0||w[De-T]<0||w[De+T]<0?J:oe).push(De)}let fe=J.length?J:oe;if(fe.length){let xe=i.pick(fe),Pe=xe%T,De=(xe-Pe)/T,Ke=new it(Ns(bT(),.6),new nt({vertexColors:!0,flatShading:!0,roughness:.6}));Ke.position.set(_+Pe*fn,w[xe]-.5,E+De*fn),Ke.castShadow=!0,ge.add(Ke)}}let ce=Ve(4,2e4,(J,oe)=>{if(b(J,oe)>-3)return null;let fe=x(J,oe);return g<s[fe].width*.5+250||g>900?null:{x:J,y:-.2,z:oe,ry:i.range(0,Kn),col:16777215,v:1}});ce.length&&ge.add(Si(Ns(ST(),.5),new nt({vertexColors:!0,flatShading:!0,roughness:.6}),ce));let G=[],Z=[];for(let J=0;J<2e4&&G.length<3;J++){let oe=Te(),fe=me(),xe=x(oe,fe);if(g<s[xe].width*.5+60)continue;let Pe=b(oe,fe);Pe<55||G.some(De=>Math.hypot(De.x-oe,De.z-fe)<200)||G.push({x:oe,y:Pe,z:fe,ry:i.range(0,Kn),speed:i.range(.9,1.5),phase:i.range(0,Kn)})}let j=new cn(.7,14,.22).translate(0,7,0),ie=new nt({color:15659507,flatShading:!0,roughness:.6}),ye=null;if(G.length){ge.add(Si(new In(.8,.35,30,6).translate(0,15,0),ie,G));for(let J of G)Z.push(new Ze().compose(new V(J.x,J.y+30,J.z),new sn().setFromAxisAngle(hT,J.ry),new V(1,1,1)));ye=new bn(j,ie,G.length*3),ye.castShadow=!0,ge.add(ye)}function Be(J){if(ye){for(let oe=0;oe<G.length;oe++){let fe=J*G[oe].speed+G[oe].phase;for(let xe=0;xe<3;xe++)g0.makeRotationZ(fe+xe*Kn/3),m0.multiplyMatrices(Z[oe],g0),ye.setMatrixAt(oe*3+xe,m0)}ye.instanceMatrix.needsUpdate=!0}}Be(0);function Re(J,oe,fe){Ue.position.set(fe.x+we.x*200,fe.y+we.y*200,fe.z+we.z*200),Ue.target.position.set(fe.x,fe.y,fe.z),Me.position.set(fe.x,0,fe.z);for(let xe=0;xe<$;xe++)I.setY(xe,.35*Math.sin(q[xe]*.02+oe*.8)+.25*Math.cos(ee[xe]*.017-oe*.6));I.needsUpdate=!0,Be(oe)}function Ne(){n.remove(ge),ge.traverse(J=>{if(J.geometry&&J.geometry.dispose(),J.material){let oe=Array.isArray(J.material)?J.material:[J.material];for(let fe of oe)fe.dispose()}}),Ue.shadow.map&&Ue.shadow.map.dispose(),ge.clear(),n.fog===U&&(n.fog=qe??null),n.background===R&&(n.background=Fe??null)}return n.add(ge),{group:ge,sun:Ue,update:Re,dispose:Ne,heightAt:b}}var uc=[.62,.6,.55],Os=[.5,.49,.45],xf=[.72,.3,.18],_0=[.6,.24,.15],vf=[.16,.2,.28],ET=[.2,.38,.3],M0=[.36,.25,.16],go=[[.1,.27,.08],[.14,.34,.1],[.07,.2,.06],[.2,.42,.12]],pr=[[.93,.84,.62],[.9,.74,.5],[.94,.9,.8],[.88,.66,.5]],xn=(n,e,t)=>{let i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)};function cc(n,e,t,i){let s=i*3+1,r=Math.ceil(t/2);return $n(e+2,s+r+1,t+2,1,(o,a,l)=>{let c=o-1,u=l-1;if(a<s){if(c<0||u<0||c>=e||u>=t)return null;if(!(c===0||u===0||c===e-1||u===t-1))return a===s-1?n:null;let p=c===0||c===e-1?u:c,g=c===0||c===e-1?t:e;return a%3===2&&p%3===1&&p<g-1?vf:a%3===2&&p%3===2&&p<g-1&&xn(c,a,u)>.45?ET:a===0?Os:n}let h=a-s;return u>=h-1&&u<=t-h&&h<=r?(c+h)%2?xf:_0:null},.14)}function AT(n){return $n(7,23,7,1,(i,s,r)=>{let o=i-1,a=r-1;if(s<17)return o<0||a<0||o>=5||a>=5?null:o===0||a===0||o===4||a===4?(s===6||s===11||s===14)&&(o===2||a===2)?vf:s===0?Os:n:s===16?n:null;let l=s-17;return i>=l&&i<=6-l&&r>=l&&r<=6-l?(i+r)%2?xf:_0:null},.14)}function RT(n){let r=[];for(let o=0;o<6;o++)r.push([11+(xn(n,o,1)-.5)*9,13+xn(n,o,2)*6,11+(xn(n,o,3)-.5)*9,3.6+xn(n,o,4)*2.4]);return $n(22,24,22,.7,(o,a,l)=>{if(a<12&&Math.abs(o-11+.5)<1.3&&Math.abs(l-11+.5)<1.3)return M0;for(let c of r){let u=o-c[0],h=(a-c[1])*1.25,f=l-c[2];if(u*u+h*h+f*f<c[3]*c[3])return go[Math.floor(xn(o,a,l)*go.length)]}return null},.22)}function CT(){return $n(14,16,8,.5,(n,e,t)=>{let s=5+Math.floor((n-1)/2)*1.6;return n===0?e<5?(e+t)%3?uc:Os:null:n>=1&&n<13&&e<s?e>=s-1?[.42,.42,.44]:Os:n===13&&e<15&&(t===0||t===7)?[.16,.17,.2]:null},.12)}function gf(n,e){let r=e-3-9;return $n(n,e+2,5,1,(o,a,l)=>{let c=o%22,u=a>=e&&(l===0||l===4);if(a>=e)return u?Os:null;if(a>=e-2)return(o+a+l)%3?uc:Os;if(c<4)return(o+a+l)%4?uc:Os;if(a<r)return null;let h=c-4-9+.5,f=a-r;return h*h+f*f>81?(o+a+l)%3?uc:Os:null},.14)}function PT(n){return $n(6,4,6,.5,(t,i,s)=>{let r=t-3+.5,o=s-6/2+.5,a=(i-.8)*1.5,l=2.5+(xn(t+n,i,s)-.5)*1.2;return r*r+a*a+o*o<l*l?go[Math.floor(xn(t,i+n,s)*go.length)]:null},.22)}function IT(){let t=[[.12,.3,.14],[.15,.36,.16],[.1,.25,.12]];return $n(6,20,6,.6,(i,s,r)=>{let o=i-3+.5,a=r-6/2+.5;if(s<2)return Math.abs(o)<.6&&Math.abs(a)<.6?M0:null;let l=(s-2)/18,c=2.6*Math.sin(Math.PI*Math.min(1,.18+l*.82))**.7*(1-l*.55)+.3;return o*o+a*a<c*c?t[Math.floor(xn(i,s,r)*3)]:null},.2)}function y0(n){let r=(a,l)=>{let c=(a-15+.5)/15,u=(l-15+.5)/(30/2),h=Math.hypot(c,u)+(xn(Math.floor(a/3)+n,0,Math.floor(l/3))-.5)*.28,f=Math.max(0,Math.min(1,(.95-h)/.16)),p=14+Math.floor(xn(Math.floor(a/5),n,Math.floor(l/5))*3)*2;return Math.floor(p*f*f*(3-2*f))},o=[];for(let a=0;a<5;a++){let l=Math.floor(15+(xn(n,a,1)-.5)*14),c=Math.floor(15+(xn(n,a,2)-.5)*14);o.push([l,c,r(l,c),pr[Math.floor(xn(n,a,3)*pr.length)],a===0?7:3])}return $n(30,26,30,1.6,(a,l,c)=>{let u=r(a,c);for(let[p,g,x,m,d]of o){let S=Math.abs(a-p),M=Math.abs(c-g),_=d>3?1:2;if(S<=_&&M<=1&&l>=x&&l<x+d)return l===x+d-2&&S!==_&&M===1?vf:m;if(S<=_&&M<=1-(l-x-d)&&l>=x+d&&l<x+d+2)return xf}if(l>=u)return null;if(l===u-1)return xn(a,5,c)>.75?go[0]:[.36,.56,.2];let h=l%5===0?.86:1,f=.93+.14*xn(Math.floor(a/2),l,Math.floor(c/2));return xn(a,l,c)>.965?go[2]:[.74*h*f,.71*h*f,.64*h*f]},.1)}function dr(n,e,t){let i=new bn(n,e,t.length),s=new Ze,r=new sn,o=new V,a=new V,l=new V(0,1,0);return t.forEach((c,u)=>{r.setFromAxisAngle(l,c.ry||0),o.set(c.sx??c.s??1,c.sy??c.s??1,c.sz??c.s??1),a.set(c.x,c.y,c.z),s.compose(a,r,o),i.setMatrixAt(u,s),c.color&&i.setColorAt(u,c.color)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,i}function LT(){if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=1024,n.height=192;let e=n.getContext("2d");e.fillStyle="#f2efe8",e.fillRect(0,0,1024,192),e.fillStyle="#d6202a";for(let i of[0,880])for(let s=0;s<2;s++)e.beginPath(),e.moveTo(i+s*72,192),e.lineTo(i+s*72+36,192),e.lineTo(i+s*72+108,0),e.lineTo(i+s*72+72,0),e.fill();e.fillStyle="#23262e",e.font='italic 900 118px "Arial Narrow", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("POLYGON RUSH",512,104);let t=new ii(n);return t.colorSpace=Rt,t.anisotropy=8,t}function b0(n,e,t,i){let s=new at;s.name="scenery";let r=[],o=()=>{let L=new nt({vertexColors:!0,roughness:.9,metalness:0});return r.push(L),L},a=(L,F)=>{F.length&&(r.push(L),s.add(dr(L,o(),F)))},l={x:0,y:0,z:0,heading:0},c=n.length,u=L=>!!Ls(n,(L%c+c)%c,"tunnel"),h=L=>n.pts[Math.floor((L%c+c)%c/n.step)%n.pts.length].width,f=(L,F)=>{let B=1/0;for(let Y=0;Y<n.pts.length;Y+=3){let W=n.pts[Y],H=(W.x-L)*(W.x-L)+(W.z-F)*(W.z-F);H<B&&(B=H)}return Math.sqrt(B)},p=(L,F)=>{let B=Math.floor(L/n.step);for(let Y=0;Y<F/n.step;Y+=4)if(Math.abs(n.pts[(B+Y)%n.pts.length].curv)>.004)return!1;return!u(L)&&!u(L+F/2)&&!u(L+F)},g=[[24,22,-1]];for(let L=380;L<c-220&&g.length<4;L+=70)p(L-10,80)&&(g.push([L,14,t.sign()]),L+=420);let x=[],m=[],d=[],S=[14032938,2777046,15909424,15921906,2793562,9060290,15235614,2042436],M=L=>g.some(([F,B])=>L>F-12&&L<F+B*4+12);for(let[L,F,B]of g)for(let Y=0;Y<F;Y++){let W=L+Y*4,H=B*(h(W)/2+6+.6);Ft(n,W,H,l);let ae=l.heading+B*Math.PI/2,ve=Math.sin(l.heading),Se=Math.cos(l.heading),ge=-B*Se,le=B*ve;x.push({x:l.x+ge*3.5,y:l.y-.3,z:l.z+le*3.5,ry:ae});for(let se=0;se<6;se++)for(let re=0;re<4;re++){if(t.next()<.18)continue;let I=-1.6+re*1.05+t.range(-.15,.15),$=1+se*1,q=l.x+ge*$+ve*I,ee=l.z+le*$+Se*I,pe=l.y-.3+2.5+se*.8,we=new Ie(t.pick(S));m.push({x:q,y:pe+.4,z:ee,ry:l.heading,sx:.5,sy:.8,sz:.36,color:we}),d.push({x:q,y:pe+1,z:ee,ry:l.heading,sx:.36,sy:.36,sz:.36,color:new Ie(t.pick([15317386,13208414,9067066,15847334]))}),m.push({x:q-ge*.12,y:pe-.1,z:ee-le*.12,ry:l.heading,sx:.46,sy:.3,sz:.5,color:new Ie(t.pick([2042436,2829099,3820138,5916210]))}),d.push({x:q,y:pe+1.22,z:ee,ry:l.heading,sx:.4,sy:.12,sz:.4,color:new Ie(t.pick([2759698,1118481,14032938,15909424,6965802,15921906]))}),t.next()<.22&&m.push({x:q+ve*.32,y:pe+1.05,z:ee+Se*.32,ry:l.heading,sx:.14,sy:.6,sz:.14,color:we})}}if(a(CT(),x),m.length){let L=new cn(1,1,1);r.push(L);let F=new nt({roughness:.85});r.push(F),s.add(dr(L,F,m),dr(L,F,d));let B=x.map(Y=>({x:Y.x,y:Y.y+8.2,z:Y.z,ry:Y.ry,sx:8,sy:.4,sz:4.05,color:new Ie(2303534)}));s.add(dr(L,F,B))}let _=LT(),E=new nt({map:_,color:_?16777215:15921128,roughness:.7,side:Pt});r.push(E),_&&r.push(_);let T=new zn(1,1);r.push(T);let v=[],w=(L,F)=>{if(u(L))return;let B=F*(h(L)/2+6-.22);Ft(n,L,B,l),v.push({x:l.x,y:l.y+.52,z:l.z,ry:l.heading+(F<0?-Math.PI/2:Math.PI/2),sx:9,sy:.92,sz:1})};for(let L=120;L<240;L+=13)w(L,-1);for(let L=30;L<110;L+=13)w(L,1);for(let L=400;L<c-80;L+=260)w(L,-1),w(L+13,-1),w(L+120,1);if(v.length){let L=dr(T,E,v);L.castShadow=!1,s.add(L)}let y=[[],[],[]];for(let L=130;L<c-20;L+=t.range(13,28)){if(M(L)||u(L)||u(L+12)||u(L-12))continue;let B=(t.next()<.82?-1:1)*(h(L)/2+6+t.range(3.4,6.5));Ft(n,L,B,l);let Y=i?i(l.x,l.z):l.y;Y<1.5||y[t.int(0,2)].push({x:l.x,y:Y-.2,z:l.z,ry:t.range(0,6.28),s:t.range(1.3,2.05)})}if(y.forEach((L,F)=>a(RT(11+F*7),L)),i){let L=[];for(let H=200;H<c-100;H+=45)for(let ae of[-1,1]){let ve=ae*t.range(70,150);Ft(n,H,ve,l);let Se=i(l.x,l.z);Se>l.y+6&&Se>6&&f(l.x,l.z)>55&&L.push({x:l.x,z:l.z,y:Se,score:Se-l.y+t.range(0,4)})}L.sort((H,ae)=>ae.score-H.score);let F=[];for(let H of L){if(F.length>=4)break;F.every(ae=>Math.hypot(ae.x-H.x,ae.z-H.z)>220)&&F.push(H)}let B=[{geo:cc(pr[0],8,7,2),items:[]},{geo:cc(pr[1],10,7,3),items:[]},{geo:cc(pr[2],7,6,2),items:[]},{geo:cc(pr[3],9,8,3),items:[]}],Y=[],W=[];for(let H of F){for(let ae=0;ae<2;ae++){let ve=H.x+t.range(-12,12),Se=H.z+t.range(-12,12);f(ve,Se)<45||(Y.push({x:ve,y:i(ve,Se)-.5,z:Se,ry:t.int(0,3)*Math.PI/2}),W.push([ve,Se]))}for(let ae=0;ae<60&&B.reduce((ve,Se)=>ve+Se.items.length,0)<F.length*22;ae++){let ve=t.range(0,6.28),Se=t.range(8,60),ge=H.x+Math.cos(ve)*Se,le=H.z+Math.sin(ve)*Se,se=i(ge,le);se<3||f(ge,le)<42||W.some(re=>Math.hypot(re[0]-ge,re[1]-le)<12)||(W.push([ge,le]),t.pick(B).items.push({x:ge,y:se-.5,z:le,ry:t.int(0,3)*Math.PI/2}))}}for(let H of B)a(H.geo,H.items);a(AT(pr[2]),Y)}let b=[[],[]];for(let L=115;L<c-10;L+=t.range(4.5,9))if(!u(L)){if(t.next()<.3){L+=t.range(20,60);continue}for(let F of[-1,1]){if(t.next()<.35)continue;let B=F*(h(L)/2+6+t.range(1.4,2.6));Ft(n,L,B,l),b[t.int(0,1)].push({x:l.x,y:l.y-.5,z:l.z,ry:t.range(0,6.28),s:t.range(.8,1.4)})}}b.forEach((L,F)=>a(PT(3+F*5),L));let A=[];for(let L=160;L<c-60;L+=t.range(120,220)){let F=t.sign(),B=t.int(5,9);for(let Y=0;Y<B;Y++){let W=L+Y*4.2;if(u(W))continue;Ft(n,W,F*(h(W)/2+6+4.2),l);let H=i?i(l.x,l.z):l.y;H<1.5||A.push({x:l.x,y:H-.2,z:l.z,ry:t.range(0,6.28),s:t.range(.85,1.2)})}}if(a(IT(),A),i){let L=[[],[],[]],F=[];for(let B=150;B<c-50;B+=t.range(120,220))for(let Y of[-1,1]){if(t.next()<.3)continue;Ft(n,B,Y*t.range(72,125),l);let W=i(l.x,l.z);W<1||f(l.x,l.z)<56||F.some(H=>Math.hypot(H[0]-l.x,H[1]-l.z)<70)||(F.push([l.x,l.z]),L[t.int(0,2)].push({x:l.x,y:W-3,z:l.z,ry:t.range(0,6.28),s:t.range(1.2,1.9)}))}L.forEach((B,Y)=>a(y0(17+Y*13),B))}{let L=[],F=[],B=new Ie(12172998),Y=new Ie(7172730);for(let W=0;W<c;W+=4){if(u(W)||M(W))continue;let H=h(W)/2+6-.75;Ft(n,W,H,l);let ae=l.x,ve=l.y,Se=l.z,ge=l.heading;L.push({x:ae,y:ve+.4,z:Se,ry:ge,sx:.12,sy:.8,sz:.12,color:Y}),Ft(n,W+4,h(W+4)/2+6-.75,l);let le=(ae+l.x)/2,se=(ve+l.y)/2,re=(Se+l.z)/2,I=Math.hypot(l.x-ae,l.z-Se)+.05,$=Math.atan2(l.x-ae,l.z-Se);for(let q of[.42,.72])F.push({x:le,y:se+q,z:re,ry:$,sx:.07,sy:.2,sz:I,color:B})}if(L.length){let W=new cn(1,1,1),H=new nt({roughness:.35,metalness:.85});r.push(W,H),s.add(dr(W,H,L),dr(W,H,F))}}if(i){let L=[];for(let W=0;W<400&&L.length<16;W++){let H=t.range(n.bounds.minX-420,n.bounds.maxX+420),ae=t.range(n.bounds.minZ-420,n.bounds.maxZ+420),ve=f(H,ae);i(H,ae)>-3||ve<90||ve>520||L.some(Se=>Math.hypot(Se.x-H,Se.z-ae)<60)||L.push({x:H,y:-.3,z:ae,ry:t.range(0,6.28),s:t.range(.9,1.5)})}let F=[.93,.93,.9],B=[.98,.97,.93],Y=[.55,.36,.2];a($n(5,18,14,.7,(W,H,ae)=>{let ve=Math.abs(ae-6.5),Se=Math.abs(W-2);return H<2?Se<=2-(H===0?1:0)-(ve>5?1:0)&&ve<7-(H===0?1:0)?H===1&&Se<2?Y:F:null:W===2&&ae===7?[.3,.26,.22]:W===2&&ae>7&&ae<13&&H<17-(ae-7)*2.6||W===2&&ae<7&&ae>1&&H<14-(7-ae)*2.4?B:null},.06),L)}{Ft(n,0,0,l);let L=l.x,F=l.y,B=l.z,Y=l.heading,W=Math.sin(Y),H=Math.cos(Y),ae=-H,ve=W,Se=(le,se,re)=>f(le,se)>re,ge=!1;for(let le of[430,500,380,580,660]){for(let se of[70,130,0,-70,190,-140]){if(ge)break;let re=L+W*le+ae*se,I=B+H*le+ve*se;if(!Se(re,I,85))continue;let $=i?Math.max(-2,i(re,I)):F;a(y0(101),[{x:re,y:$-3,z:I,ry:Y+.6,s:2.3}]);let q=re-W*95-ae*30,ee=I-H*95-ve*30;if(Se(q,ee,45)&&Se(q+ae*90,ee+ve*90,40)&&Se(q-ae*90,ee-ve*90,40)){let pe=i?Math.max(-1,i(q,ee)):F;a(gf(198,24),[{x:q,y:Math.min(pe,F)-5,z:ee,ry:Y}])}ge=!0}if(ge)break}}for(let L of[1,-1]){let F=!0;for(let Y of[210,270,330,390])Ft(n,Y,L*62,l),f(l.x,l.z)<46&&(F=!1);if(!F||L<0)continue;Ft(n,300,L*62,l);let B=i?i(l.x,l.z):l.y;a(gf(198,22),[{x:l.x,y:B-4,z:l.z,ry:l.heading-Math.PI/2}]);break}let D=-1,O=-1/0;for(let L=300;L<c-300;L+=40){let F=Math.floor(L/n.step),B=0;for(let W=0;W<60;W+=6)B+=Math.abs(n.pts[(F+W)%n.pts.length].curv);let Y=-B*400+t.range(0,1)-(u(L)||u(L+100)?100:0);Y>O&&(O=Y,D=L)}if(D>0)for(let L of[1,-1]){Ft(n,D+90,L*95,l);let F=i?i(l.x,l.z):l.y;if(F<2)continue;a(gf(198,20),[{x:l.x,y:Math.min(F,l.y)-4,z:l.z,ry:l.heading-Math.PI/2}]);break}return{group:s,dispose(){for(let L of r)L.dispose?.()}}}function DT(n,e){let t=n.length,i=new Float64Array(t),s=0;for(let r=0;r<t;r++){let o=0;s=0;for(let a=Math.max(0,r-e);a<=Math.min(t-1,r+e);a++)s+=n[a],o++;i[r]=s/o}return i}function S0(n){let e=n.x.length,t=n.step,i=n.x,s=n.y,r=n.z,o=new Float64Array(e),a=new Float64Array(e),l=new Float64Array(e);for(let v=0;v<e;v++){let w=Math.max(0,v-1),y=Math.min(e-1,v+1),b=i[y]-i[w],A=r[y]-r[w],D=Math.hypot(b,A)||1e-9;o[v]=b/D,a[v]=A/D,l[v]=(s[y]-s[w])/D}let c=new Float64Array(e);for(let v=1;v<e-1;v++){let w=-a[v],y=o[v];c[v]=((o[v+1]-o[v-1])*w+(a[v+1]-a[v-1])*y)/(2*t)}c[0]=c[1],c[e-1]=c[e-2];let u=DT(c,12),h=new Float64Array(e);for(let v=0;v<e;v++)h[v]=Math.min(95,Math.sqrt(30/Math.max(1e-6,Math.abs(u[v]))));for(let v=e-2;v>=0;v--)h[v]=Math.min(h[v],Math.sqrt(h[v+1]**2+80*t));for(let v=1;v<e;v++)h[v]=Math.min(h[v],Math.sqrt(h[v-1]**2+40*t));let f=new Array(e),p=1/0,g=-1/0,x=1/0,m=-1/0,d=1/0,S=0;for(let v=0;v<e;v++){let w=Math.hypot(1,l[v]);f[v]={s:v*t,x:i[v],y:s[v],z:r[v],tx:o[v]/w,ty:l[v]/w,tz:a[v]/w,rx:-a[v],rz:o[v],width:n.width,curv:u[v],vmax:h[v],slope:l[v]},i[v]<p&&(p=i[v]),i[v]>g&&(g=i[v]),r[v]<x&&(x=r[v]),r[v]>m&&(m=r[v]);let y=1/Math.max(1e-9,Math.abs(u[v]));y<d&&(d=y),Math.abs(l[v])>S&&(S=Math.abs(l[v]))}let M=[],_=[];for(let v of n.features)v.type==="tunnel"?M.push({type:"tunnel",s0:v.s0,s1:v.s1,name:v.name}):_.push({s0:v.s0,s1:v.s1,name:v.name});let E=(e-1)*t,T=0;for(let v=0;v<e;v++)T+=t/Math.max(5,h[v]);return{seed:"REAL:"+n.id,attempts:1,open:!0,real:n,raceStart:n.raceStart||0,raceEnd:Math.min(n.raceEnd||E,E),length:E,step:t,count:e,pts:f,features:M,bridges:_,bounds:{minX:p,maxX:g,minZ:x,maxZ:m},stats:{minRadius:d,maxSlope:S,lapTimeEstimate:T,corners:0}}}var T0=["torre","castello","borgo","chiesa","agrumeto","peschereccio","casello"];function NT(n,e,t,i=null){let s=[],r=n.length,o=i?i.s0:0,a=i?i.s1:r,l=f=>{if(i&&Number.isFinite(f.s)&&Number.isFinite(f.dist))return{dist:f.dist,q:n.pts[Math.max(0,Math.min(n.count-1,Math.round(f.s/n.step)))]};let p=1/0,g=0;for(let x=0;x<n.count;x+=5){let m=n.pts[x],d=(m.x-f.x)**2+(m.z-f.z)**2;d<p&&(p=d,g=x)}return{dist:Math.sqrt(p),q:n.pts[g]}},c={},u=(f,p)=>(c[f]=(c[f]||0)+1)<=(i?1:p),h=e.places.map(f=>({p:f,n:l(f)})).filter(f=>f.n.dist<1600&&f.n.q.s>150&&f.n.q.s<r-150).sort((f,p)=>f.n.dist-p.n.dist);for(let{p:f,n:p}of h)s.some(g=>g.x!==void 0&&Math.hypot(g.x-f.x,g.z-f.z)<250)||(f.kind==="castle"?/^torre/i.test(f.name)?u("torre",2)&&s.push({prop:"torre",x:f.x,z:f.z,height:48,label:f.name}):/castel|rocca|forte|fort/i.test(f.name)&&u("castello",3)&&s.push({prop:"castello",x:f.x,z:f.z,width:170,label:f.name}):f.kind==="place"&&(f.rank==="village"||f.rank==="town"||f.rank===void 0)&&(t(f.x,f.z)-p.q.y>120&&p.dist>250?u("borgo",3)&&s.push({prop:"borgo",x:f.x,z:f.z,width:300}):p.dist>90&&p.dist<450&&u("chiesa",3)&&s.push({prop:"chiesa",x:f.x,z:f.z,width:46})));for(let f=900,p=0;f<r-600;f+=1300,p++){if(f<o||f>=a)continue;let g=n.pts[Math.round(f/n.step)];for(let x of[1,-1]){let m=x*560;if(t(g.x+g.rx*m,g.z+g.rz*m)<=0&&t(g.x+g.rx*m*1.3,g.z+g.rz*m*1.3)<=0)p%2===0&&s.push({prop:"peschereccio",s:f,d:m+p%3*40*x,width:34,sea:!0});else if(p%2===1){let d=x*78,S=t(g.x+g.rx*d,g.z+g.rz*d);S>1&&Math.abs(S-g.y)<14&&s.push({prop:"agrumeto",s:f,d,width:70})}}}return s}function yf(n){return n._geo||(n._geo=mf(n.cells,1)),n._geo}function w0({track:n,data:e,baked:t,heightAt:i,clearance:s,range:r=null,unit:o=!1}){let a=new at;a.name="real-props";let l=[],c=[];if(!t)return{group:a,placed:l,skipped:c,dispose(){}};let u=new si({vertexColors:!0}),h=new Map,f=n.length,p=r?Math.max(0,Math.floor((r.s0-2500)/n.step)):0,g=r?Math.min(n.count,Math.ceil((r.s1+2500)/n.step)):n.count,x=(m,d)=>{let S=1/0,M=p;for(let _=p;_<g;_+=2){let E=n.pts[_],T=(E.x-m)**2+(E.z-d)**2;T<S&&(S=T,M=_)}return{q:n.pts[M],dist:Math.sqrt(S)}};for(let m of NT(n,e,i,r)){let d=t[m.prop];if(!d?.cells?.length)continue;let S=d._ext;if(!S){let A=[1/0,1/0,1/0],D=[-1/0,-1/0,-1/0];for(let O=0;O<d.cells.length;O+=4)for(let L=0;L<3;L++)A[L]=Math.min(A[L],d.cells[O+L]),D[L]=Math.max(D[L],d.cells[O+L]+1);S=d._ext=[D[0]-A[0],D[1]-A[1],D[2]-A[2]]}let M=m.height?m.height/S[1]:m.width/Math.max(S[0],S[2]),_=Math.hypot(S[0],S[2])*M/2,E,T;if(m.x!==void 0)E=m.x,T=m.z;else{let A=n.pts[Math.max(0,Math.min(n.count-1,Math.round(m.s/n.step)))];E=A.x+A.rx*m.d,T=A.z+A.rz*m.d}let v=x(E,T);if(v.dist-_<s){if(m.x===void 0||v.dist<1){c.push(m.prop+" : trop pr\xE8s de la route");continue}let A=(_+s+2)/v.dist;if(E=v.q.x+(E-v.q.x)*A,T=v.q.z+(T-v.q.z)*A,v=x(E,T),v.dist-_<s){c.push(m.prop+" : trop pr\xE8s de la route");continue}}let w;if(m.sea){if(i(E,T)>0){c.push(m.prop+" : pas en mer");continue}w=-.12*M*S[1]}else{w=1/0;for(let[A,D]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]])w=Math.min(w,i(E+A*_*.6,T+D*_*.6));w=Math.max(w,.2)-.5}let y;if(o)y=yf(d);else{let A=m.prop+"@"+M.toFixed(3);y=h.get(A),y||h.set(A,y=mf(d.cells,M))}let b=new it(y,u);o&&b.scale.setScalar(M),b.name="prop-"+m.prop,b.position.set(E,w,T),b.rotation.y=Math.atan2(v.q.x-E,v.q.z-T),b.updateMatrix(),b.matrixAutoUpdate=!1,a.add(b),l.push({prop:m.prop,label:m.label||null,s:v.q.s,dist:v.dist,x:E,y:w,z:T,size:M})}return{group:a,placed:l,skipped:c,dispose(){u.dispose();for(let m of h.values())m.dispose()}}}var UT=(n,e,t=1.08,i=1.45)=>{let s=(n>>16&255)/255,r=(n>>8&255)/255,o=(n&255)/255,a=.3*s+.59*r+.11*o,l=(.38+(a-.38)*1.35)/Math.max(a,.001);s*=l,r*=l,o*=l,a=.3*s+.59*r+.11*o,s=Math.min(1,Math.max(0,(a+(s-a)*i)*t)),r=Math.min(1,Math.max(0,(a+(r-a)*i)*t)),o=Math.min(1,Math.max(0,(a+(o-a)*i)*t)),e[0]=s,e[1]=r,e[2]=o};function hc(n,e,{seaCut:t=.25,yOffset:i=0,tint:s=null}={}){let{cell:r,ix:o,iz:a,h:l,c}=n,u=o.length,h=1/0,f=-1/0,p=1/0,g=-1/0;for(let H=0;H<u;H++)o[H]<h&&(h=o[H]),o[H]>f&&(f=o[H]),a[H]<p&&(p=a[H]),a[H]>g&&(g=a[H]);let x=n.hx||[],m=n.hz||[],d=n.hh||[];for(let H=0;H<x.length;H++)x[H]<h&&(h=x[H]),x[H]>f&&(f=x[H]),m[H]<p&&(p=m[H]),m[H]>g&&(g=m[H]);let S=u?g-p+1:0,M=new Float32Array(u?(f-h+1)*S:0).fill(NaN),_=(H,ae)=>H<h||H>f||ae<p||ae>g?-1:(H-h)*S+(ae-p),E={get(H){if(H<0)return;let ae=M[H];return ae===ae?ae:void 0}},T=new Float32Array(u);if(u)for(let H=0;H<x.length;H++)M[(x[H]-h)*S+(m[H]-p)]=Math.floor(d[H]/10/e)*e;for(let H=0;H<u;H++)T[H]=Math.floor(l[H]/10/e)*e,M[(o[H]-h)*S+(a[H]-p)]=T[H];let v=[1,-1,0,0],w=[0,0,1,-1],y=new Float32Array(u*4),b=new Uint8Array(u),A=0;for(let H=0;H<u;H++)if(!(l[H]/10<=t)){b[H]=1,A++;for(let ae=0;ae<4;ae++){let ve=E.get(_(o[H]+v[ae],a[H]+w[ae]));ve!==void 0&&ve<T[H]?(y[H*4+ae]=ve,A++):y[H*4+ae]=NaN}}let D=new Float32Array(A*18),O=new Float32Array(A*18),L=new Float32Array(A*18),F=0,B=[0,0,0],Y=(H,ae,ve,Se,ge,le,se,re,I,$,q,ee,pe,we,Me,X,He,ke)=>{D[F]=H,D[F+1]=ae,D[F+2]=ve,D[F+3]=Se,D[F+4]=ge,D[F+5]=le,D[F+6]=se,D[F+7]=re,D[F+8]=I,D[F+9]=H,D[F+10]=ae,D[F+11]=ve,D[F+12]=se,D[F+13]=re,D[F+14]=I,D[F+15]=$,D[F+16]=q,D[F+17]=ee;for(let Ue=0;Ue<18;Ue+=3)O[F+Ue]=pe,O[F+Ue+1]=we,O[F+Ue+2]=Me,L[F+Ue]=X,L[F+Ue+1]=He,L[F+Ue+2]=ke;F+=18};for(let H=0;H<u;H++){if(!b[H])continue;let ae=T[H];UT(c[H],B),s&&s(B,(o[H]+.5)*r,(a[H]+.5)*r,ae);let ve=.92+.16*((o[H]*73856093^a[H]*19349663)>>>0)/4294967295,Se=B[0]*ve,ge=B[1]*ve,le=B[2]*ve,se=o[H]*r,re=a[H]*r,I=se+r,$=re+r,q=ae+i;Y(se,q,re,se,q,$,I,q,$,I,q,re,0,1,0,Se,ge,le);let ee=.2+.45*Se,pe=.19+.42*ge,we=.17+.38*le,Me=y[H*4];Me===Me&&Y(I,Me+i,$,I,q,$,I,q,re,I,Me+i,re,1,0,0,ee,pe,we),Me=y[H*4+1],Me===Me&&Y(se,Me+i,re,se,q,re,se,q,$,se,Me+i,$,-1,0,0,ee,pe,we),Me=y[H*4+2],Me===Me&&Y(se,Me+i,$,se,q,$,I,q,$,I,Me+i,$,0,0,1,ee,pe,we),Me=y[H*4+3],Me===Me&&Y(I,Me+i,re,I,q,re,se,q,re,se,Me+i,re,0,0,-1,ee,pe,we)}let W=new mt;return W.setAttribute("position",new pt(D,3)),W.setAttribute("normal",new pt(O,3)),W.setAttribute("color",new pt(L,3)),W.computeBoundingSphere(),{geo:W,heights:E,key:_,q:T}}function xo(n,e,t){let i=new bn(n,e,t.length),s=new Ze,r=new sn,o=new V,a=new V,l=new V(0,1,0);return t.forEach((c,u)=>{r.setFromAxisAngle(l,c.ry||0),o.set(c.sx??1,c.sy??1,c.sz??1),a.set(c.x,c.y,c.z),s.compose(a,r,o),i.setMatrixAt(u,s),c.color&&i.setColorAt(u,c.color)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.frustumCulled=!1,i}function E0(n){if(typeof document>"u")return null;let e=document.createElement("canvas");e.width=512,e.height=192;let t=e.getContext("2d");t.fillStyle="#0c7a43",t.fillRect(0,0,512,192),t.strokeStyle="#ffffff",t.lineWidth=8,t.strokeRect(8,8,496,176),t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.font="bold 62px Arial, Helvetica, sans-serif",t.fillText(n[0],256,n[1]?70:96,470),n[1]&&(t.font="bold 44px Arial, Helvetica, sans-serif",t.fillText(n[1],256,136,470));let i=new ii(e);return i.colorSpace=Rt,i.anisotropy=8,i}var _f=.12,FT=8200,OT=3,BT=1,zT=5,kT=2,vo=new Map;function A0(n,e){if(!vo.has(e)){let t=fetch(`${n}c${String(e).padStart(3,"0")}.json`).then(i=>{if(!i.ok)throw new Error("tuile indisponible : "+e);return i.json()}).then(i=>(vo.set(e,i),i));t.catch(()=>vo.delete(e)),vo.set(e,t)}return Promise.resolve(vo.get(e))}function Mf(n,e,t,i=1){let s=Math.max(0,Math.min(e.chunks-1,Math.floor(t/e.chunk))),r=[];for(let o=Math.max(0,s-1);o<=Math.min(e.chunks-1,s+i);o++)r.push(A0(n,o));return Promise.all(r)}function HT(n,e,t){let i=n.step,s=e*i,r=t*i,o=[];for(let l=e;l<=t;l++)o.push({...n.pts[l],s:(l-e)*i});let a=[];for(let l of n.features)l.type!=="tunnel"||l.s1<=s||l.s0>=r||a.push({type:"tunnel",name:l.name,s0:Math.max(l.s0,s)-s,s1:Math.min(l.s1,r)-s,cutStart:l.s0<s,cutEnd:l.s1>r});return{seed:n.seed+":"+e,open:!0,noStart:!0,length:(o.length-1)*i,step:i,count:o.length,pts:o,features:a,bridges:[]}}function R0(n,e,t,i,{base:s="assets/v3/world/",baked:r=null,rng:o,far:a=null}={}){let l=new at;l.name="environment";let c=[],u=ue=>(c.push(ue),ue),h=e.length,f=e.step,p=i.width/2,g=p+6+2,x=i.chunk,m=i.chunks,d=Math.round(x/f),S=new it(u(new zn(6e4,6e4)),u(new nt({color:t.seaColor,roughness:.16,metalness:.1}))),M=u0(S.material);S.rotation.x=-Math.PI/2,S.position.y=.05,S.name="real-sea",l.add(S);let _=new V(...t.sunDir).normalize(),E=u(new vt({side:Qt,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new Ie(t.skyTop)},uHor:{value:new Ie(t.skyHorizon)},uSun:{value:new Ie(t.sunColor)},uSunDir:{value:_}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uTop, uHor, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = mix(uHor, uTop, pow(max(d.y, 0.0), 0.5));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 600.0) * 3.0 + pow(s, 14.0) * 0.25);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`})),T=new it(u(new Es(FT,32,16)),E);T.renderOrder=-10,T.frustumCulled=!1,l.add(T);let v=n.fog,w=n.background;n.fog=new no(t.fogColor,(t.fogDensity||5e-4)*.3),n.background=new Ie(t.skyHorizon);let y=new ao(t.hemiSky,t.hemiGround,t.hemiIntensity),b=new Ci(t.sunColor,t.sunIntensity);b.castShadow=!0,b.shadow.mapSize.set(2048,2048);let A=b.shadow.camera;A.left=-90,A.right=90,A.top=90,A.bottom=-90,A.near=1,A.far=500,b.shadow.bias=-5e-4,l.add(y,b,b.target);let D=null;function O(ue){if(D||!ue)return;let Ee=new Ie(t.skyHorizon),Ce=hc(ue,60,{tint:(C,z,k,K)=>{let N=K>2300?.5:0,ce=.55;C[0]=(C[0]+(1-C[0])*N)*(1-ce)+Ee.r*ce,C[1]=(C[1]+(1-C[1])*N)*(1-ce)+Ee.g*ce,C[2]=(C[2]+(1-C[2])*N)*(1-ce)+Ee.b*ce}}).geo;D=new it(u(Ce),u(new Yt({vertexColors:!0,fog:!1,side:Pt}))),D.name="real-terrain-far",D.scale.setScalar(_f),D.frustumCulled=!1,D.renderOrder=-5,l.add(D)}a?O(a):typeof fetch=="function"&&fetch(s+"far.json").then(ue=>ue.ok?ue.json():null).then(ue=>{qe||O(ue)}).catch(()=>{});let L=u(new cn(1,1,1)),F=hr(u(new nt({vertexColors:!0,roughness:.95,metalness:0,side:Pt})),1,1),B=hr(u(new nt({vertexColors:!0,roughness:1,side:Pt})),8,.7),Y=c0(hr(u(new nt({roughness:.9})),1.5,.8)),W=u(new nt({roughness:.85})),H=hr(u(new si),1.1,.9),ae=u(new si),ve=hr(u(new nt({roughness:.9})),.8,.6),Se=u(new nt({roughness:.35,metalness:.85})),ge=u(new nt({vertexColors:!0,roughness:.9})),le=u(new zn(1,1)),se=(ue,Ee,Ce)=>{let C=Math.sin(ue*127.1+Ee*311.7+Ce*74.7)*43758.5453;return C-Math.floor(C)},re=u($n(5,5,5,.5,(ue,Ee,Ce)=>{let C=ue-2,z=Ce-2,k=(Ee-1.6)*1.2;if(C*C+k*k+z*z>5.4+se(ue,Ee,Ce))return null;let K=se(ue+3,Ee,Ce+7);return K>.72?[.92,.42,.6]:K>.62?[.96,.93,.9]:[.16,.38,.17]},.2)),I=[15983808,15321498,16117730,14924172,14472128,15784368,13620956].map(ue=>new Ie(ue)),$=[11884346,11030070,14275268,13222064,9390646].map(ue=>new Ie(ue)),q=new Ie(12170925),ee=new Ie(10131343),pe=new Ie(12764876),we=new Ie(8225160),Me=new Ie(7031346);if(r)for(let ue of Object.values(r))ue?.cells?.length&&yf(ue);let X=60,He=new Map;for(let ue=0;ue<e.count;ue+=3){let Ee=e.pts[ue],Ce=Math.floor(Ee.x/X)*100003+Math.floor(Ee.z/X),C=He.get(Ce);C||He.set(Ce,C=[]),C.push(Ee)}let ke=(ue,Ee,Ce,C)=>{let z=null,k=Math.max(Ce,C)+g;for(let K=Math.floor((ue-k)/X);K<=Math.floor((ue+k)/X);K++)for(let N=Math.floor((Ee-k)/X);N<=Math.floor((Ee+k)/X);N++){let ce=He.get(K*100003+N);if(ce)for(let G of ce){let Z=Math.max(0,Math.abs(G.x-ue)-Ce),j=Math.max(0,Math.abs(G.z-Ee)-C);Z*Z+j*j<g*g&&(z===null||G.y<z)&&(z=G.y)}}return z},Ue=ue=>!!Ls(e,Math.max(0,Math.min(h-1,ue)),"tunnel"),Ae=new Map,qe=!1,Fe={built:0,freed:0,worstStep:0,worstBy:[0,0,0,0,0,0,0,0,0,0],buildings:0,trees:0,props:[]},U=10;function R(ue,Ee){for(let Ce of Ae.values()){if(!Ce.near)continue;let C=Ce.near.heights.get(Ce.near.key(Math.floor(ue/10),Math.floor(Ee/10)));if(C!==void 0)return C}for(let Ce of Ae.values()){if(!Ce.mid)continue;let C=Ce.mid.heights.get(Ce.mid.key(Math.floor(ue/80),Math.floor(Ee/80)));if(C!==void 0)return C-3}return-5}function te(ue,Ee){let Ce=[],C=ie=>(Ce.push(ie),ie),z=ue.group,k=Ee.s0,K=Math.min(Ee.s1,h),N=Math.round(k/f),ce=Math.min(e.count-1,Math.round(K/f)),G=o.fork("tuile:"+ue.i),Z={x:0,y:0,z:0,heading:0},j={x:0,y:0,z:0,heading:0};return ue.own=Ce,[()=>{ue.near=hc(Ee.near,1);let ie=new it(C(ue.near.geo),F);ie.receiveShadow=!0,ie.name="real-terrain-near",z.add(ie)},()=>{ue.mid=hc(Ee.mid,4,{yOffset:-3});let ie=new it(C(ue.mid.geo),B);ie.name="real-terrain-mid",z.add(ie)},...[0,1,2,3].map(ie=>()=>{let ye=N+Math.round((ce-N)*ie/4),Be=N+Math.round((ce-N)*(ie+1)/4);if(Be<=ye)return;let Re=rc(HT(e,ye,Be),t,G.fork("route"+ie));fa(Re.group,()=>.4),z.add(Re.group),ue.roads.push(Re)}),()=>{let ie=Ee.buildings,ye=[],Be=[];for(let Re=0;Re<ie.x.length;Re++){let J=(ie.l[Re]>0?Math.min(ie.l[Re],9):1+Math.floor(G.next()*3)+(ie.w[Re]*ie.d[Re]>300?1:0))*3.1,oe=R(ie.x[Re],ie.z[Re]);oe<-4&&(oe=ie.y[Re]),oe=Math.max(oe,.3);let fe=ke(ie.x[Re],ie.z[Re],ie.w[Re]/2+.3,ie.d[Re]/2+.3);if(fe!==null){let xe=fe-3.2-oe;if(xe<3)continue;J>xe&&(J=xe)}ye.push({x:ie.x[Re],y:oe+J/2-.5,z:ie.z[Re],sx:ie.w[Re],sy:J+1,sz:ie.d[Re],color:G.pick(I)}),Be.push({x:ie.x[Re],y:oe+J+.35,z:ie.z[Re],sx:ie.w[Re]+.6,sy:.7,sz:ie.d[Re]+.6,color:G.pick($)})}if(ue.stats.buildings=ye.length,ye.length){let Re=xo(L,Y,ye),Ne=xo(L,W,Be);Re.name="real-buildings",Re.castShadow=!0,Re.frustumCulled=!0,Ne.frustumCulled=!0,Re.computeBoundingSphere(),Ne.computeBoundingSphere(),z.add(Re,Ne),Ce.push(Re,Ne)}},()=>{let ie=Ee.trees,ye=[],Be=[],Re=new Ie;for(let Ne=0;Ne<ie.x.length;Ne++){let J=ie.x[Ne],oe=ie.z[Ne];if(ke(J,oe,2.5,2.5)!==null)continue;let fe=ie.r[Ne]/1e3,xe=ie.y[Ne],Pe=.75+.5*fe;if(ie.k[Ne])if(fe<.55){let De=7+6*fe;Be.push({x:J,y:xe+De/2+.6,z:oe,sx:1.7,sy:De,sz:1.7,color:Re.setRGB(.1*Pe,.26*Pe,.13*Pe).clone()})}else{let De=6+5*fe;ye.push({x:J,y:xe+De/2,z:oe,sx:.7,sy:De,sz:.7,color:Me}),Be.push({x:J,y:xe+De+.9,z:oe,sx:6.5,sy:2.2,sz:6.5,color:Re.setRGB(.14*Pe,.34*Pe,.16*Pe).clone()})}else{let De=3+2.4*fe;ye.push({x:J,y:xe+.9,z:oe,sx:.6,sy:1.8,sz:.6,color:Me}),Be.push({x:J,y:xe+1.6+De/2,z:oe,sx:De,sy:De*.85,sz:De,color:Re.setRGB(.3*Pe,.44*Pe,.2*Pe).clone()})}}ue.stats.trees=Be.length;for(let[Ne,J,oe]of[[ye,ae,"real-trunks"],[Be,H,"real-trees"]]){if(!Ne.length)continue;let fe=xo(L,J,Ne);fe.name=oe,fe.frustumCulled=!0,fe.computeBoundingSphere(),z.add(fe),Ce.push(fe)}},()=>{let ie=[],ye=[],Be=[],Re=[];for(let Ne of e.bridges)if(!(Ne.s1<=k||Ne.s0>=K)){for(let J=Ne.s0+6;J<Ne.s1-2;J+=34){if(J<k||J>=K)continue;Ft(e,J,0,Z);let oe=R(Z.x,Z.z),fe=Z.y-1.6-oe;fe<3||(ie.push({x:Z.x,y:oe+fe/2,z:Z.z,ry:Z.heading,sx:p*1.5,sy:fe,sz:2.4,color:ee}),ie.push({x:Z.x,y:Z.y-1.2,z:Z.z,ry:Z.heading,sx:p*2+5,sy:1.2,sz:3.6,color:q}))}for(let J=Ne.s0;J<Ne.s1;J+=8)if(!(J<k||J>=K)){for(let oe of[-1,1])Ft(e,J+4,oe*(p+6+.4),Z),ye.push({x:Z.x,y:Z.y-.9,z:Z.z,ry:Z.heading,sx:.9,sy:1.8,sz:8.3,color:q});Ft(e,J+4,0,Z),ye.push({x:Z.x,y:Z.y-1.25,z:Z.z,ry:Z.heading,sx:p*2+12,sy:.9,sz:8.3,color:ee})}}for(let Ne=k;Ne<K&&Ne<h-4;Ne+=4)if(!Ue(Ne))for(let J of[-1,1]){let oe=J*(p+6-.7);Ft(e,Ne,oe,Z),Ft(e,Ne+4,oe,j),Be.push({x:Z.x,y:Z.y+.4,z:Z.z,ry:Z.heading,sx:.12,sy:.8,sz:.12,color:we});let fe=Math.hypot(j.x-Z.x,j.z-Z.z)+.05,xe=Math.atan2(j.x-Z.x,j.z-Z.z);for(let Pe of[.42,.72])Re.push({x:(Z.x+j.x)/2,y:(Z.y+j.y)/2+Pe,z:(Z.z+j.z)/2,ry:xe,sx:.07,sy:.2,sz:fe,color:pe})}for(let[Ne,J,oe,fe]of[[ie,ve,"real-piers",!0],[ye,ve,"real-decks",!1],[Be,Se,"real-rail-posts",!1],[Re,Se,"real-rails",!1]]){if(!Ne.length)continue;let xe=xo(L,J,Ne);xe.name=oe,xe.castShadow=fe,xe.frustumCulled=!0,xe.computeBoundingSphere(),z.add(xe),Ce.push(xe)}},()=>{for(let ye of i.signs){if(ye.s<k||ye.s>=K)continue;let Be=E0([ye.name,""]),Re=C(new Yt({map:Be,color:Be?16777215:817731,side:Pt}));Be&&C(Be),Ft(e,ye.s,p+6+2.2,Z);let Ne=new it(le,Re);Ne.scale.set(7.5,2.8,1),Ne.position.set(Z.x,Z.y+5.2,Z.z),Ne.rotation.y=Z.heading+Math.PI,Ne.name="real-sign";let J=new it(L,Se);J.scale.set(.3,5.2,.3),J.position.set(Z.x,Z.y+2.2,Z.z),z.add(Ne,J)}let ie=[];for(let ye=Math.max(60,k);ye<K&&ye<h-20;ye+=G.range(5,11)){if(Ue(ye)||e.bridges.some(Re=>ye>Re.s0-4&&ye<Re.s1+4))continue;if(G.next()<.25){ye+=G.range(15,50);continue}let Be=G.next()<.5?-1:1;Ft(e,ye,Be*(p+6+G.range(1.2,2.4)),Z),ie.push({x:Z.x,y:Z.y-.5,z:Z.z,ry:G.range(0,6.28),sx:G.range(.8,1.3),sy:G.range(.8,1.3),sz:G.range(.8,1.3)})}if(ie.length){let ye=xo(re,ge,ie);ye.castShadow=!0,ye.name="real-oleanders",ye.frustumCulled=!0,ye.computeBoundingSphere(),z.add(ye),Ce.push(ye)}if(r){let ye=w0({track:e,data:Ee,baked:r,heightAt:R,clearance:g,range:{s0:k,s1:K},unit:!0});z.add(ye.group),Ce.push(ye),ue.stats.props=ye.placed}}]}function _e(ue){if(Ae.has(ue)||ue<0||ue>=m)return;let Ee={i:ue,state:"loading",group:new at,own:[],steps:null,near:null,mid:null,roads:[],stats:{buildings:0,trees:0,props:[]}};Ee.group.name="tuile-"+ue,Ae.set(ue,Ee);let Ce=z=>{qe||Ae.get(ue)!==Ee||(Ee.steps=te(Ee,z),Ee.state="building",l.add(Ee.group))},C=vo.get(ue);C&&typeof C.then!="function"?Ce(C):A0(s,ue).then(Ce).catch(()=>{Ae.get(ue)===Ee&&Ae.delete(ue)})}function Te(ue){let Ee=U-ue.steps.length,Ce=ue.steps.shift(),C=typeof performance<"u"?performance.now():0;Ce();let z=(typeof performance<"u"?performance.now():0)-C;z>Fe.worstStep&&(Fe.worstStep=z),z>Fe.worstBy[Ee]&&(Fe.worstBy[Ee]=Math.round(z)),ue.steps.length||(ue.state="ready",Fe.built++)}function me(ue){l.remove(ue.group);for(let Ee of ue.roads)Ee.dispose?.();for(let Ee of ue.own)Ee.isInstancedMesh?Ee.dispose():Ee.dispose?.();Ae.delete(ue.i),Fe.freed++}function Ve(ue){let Ee=Math.max(0,Math.min(m-1,Math.floor(ue/x)));for(let Ce=Math.max(0,Ee-1);Ce<=Math.min(m-1,Ee+1);Ce++){_e(Ce);let C=Ae.get(Ce);for(;C&&C.steps&&C.steps.length;)Te(C)}}let Le=0,Oe=new V;function Xe(ue,Ee,Ce,C=0){T.position.set(Ce.x,0,Ce.z),S.position.x=Ce.x,S.position.z=Ce.z,M.value=Ee,b.position.copy(Ce).addScaledVector(_,200),b.target.position.copy(Ce),D&&(Oe.copy(Ce),D.position.set(Oe.x*(1-_f),-2,Oe.z*(1-_f)));let z=Math.max(0,Math.min(m-1,Math.floor(C/x)));for(let K=z-BT;K<=z+OT;K++)_e(K);for(let K of Array.from(Ae.values()))(K.i<z-kT||K.i>z+zT)&&me(K);Le+=1;let k=null;for(let K of Ae.values())K.state==="building"&&(!k||Math.abs(K.i-z)<Math.abs(k.i-z))&&(k=K);k&&(Le>=3||Math.abs(k.i-z)<=1)&&(Le=0,Te(k));for(let K of Ae.values())for(let N of K.roads)N.update?.(ue,Ee)}function be(){qe=!0;for(let ue of Array.from(Ae.values()))me(ue);n.remove(l),n.fog&&n.fog!==v&&(n.fog=v||null),n.background=w||null;for(let ue of c)ue.dispose?.()}return n.add(l),{group:l,sun:b,update:Xe,dispose:be,heightAt:R,prime:Ve,chunks:Ae,stats:Fe,readyAround(ue){let Ee=Math.floor(ue/x),Ce=Ae.get(Ee);return!!Ce&&Ce.state==="ready"}}}var VT=[-5,0,5],fc=[{id:"car",len:4.4,w:1.9,h:1.45,v:[31,37],lanes:[0,1,2]},{id:"van",len:5.8,w:2.1,h:2.35,v:[28,32],lanes:[1,2]},{id:"bus",len:11.5,w:2.5,h:3.3,v:[25,28],lanes:[2]},{id:"truck",len:13.5,w:2.5,h:3.8,v:[22,25],lanes:[2]}],C0=[0,0,0,0,0,1,1,2,3,3],GT=.45,WT=1,XT=1.5,qT=12,YT=5,$T=3,ZT=5;function P0({rng:n,count:e=22,density:t=1}={}){let i=[];for(let h=0;h<e;h++)i.push({id:h,type:fc[0],lane:1,s:-1e9,d:0,speed:30,cruise:30,color:0,passed:!0,hitT:0});let s={vehicles:i,combo:0,comboT:0,meter:0,nearMisses:0,hits:0,events:[],density:t},r=!1;function o(h,f,p=30,g=30){let x=0;for(let m of i)m!==f&&m.s>h-p&&m.s<h+g&&(x|=1<<m.lane);return x}function a(h,f){let p=fc[C0[n.int(0,C0.length-1)]],g=o(f,h,45,45),x=p.lanes.filter(d=>!(g&1<<d));return([0,1,2].filter(d=>g&1<<d).length>=2||!x.length)&&(f+=60,x=p.lanes),h.type=p,h.lane=x[n.int(0,x.length-1)],h.d=VT[h.lane]+n.range(-.35,.35),h.cruise=h.speed=n.range(p.v[0],p.v[1]),h.color=n.int(0,7),h.s=f,h.passed=!1,h.hitT=0,f}function l(h,f=350){let p=h+f;for(let g of i)p=a(g,p)+n.range(70,190)/t;r=!0}function c(h,f,p){s.events.length=0,r||l(f.s);let g=-1/0;for(let x of i)x.s>g&&(g=x.s);for(let x of i){let m=x.cruise,d=0,S=1/0;for(let M of i){if(M===x||M.lane===x.lane)continue;let _=M.s-x.s;_>-8&&_<45&&(d|=1<<M.lane,M.speed<S&&(S=M.speed))}d===(7&~(1<<x.lane))&&(m=Math.min(m,S-.5));for(let M of i){if(M===x||M.lane!==x.lane)continue;let _=M.s-x.s-(M.type.len+x.type.len)/2;_>0&&_<25&&(m=Math.min(m,M.speed))}x.speed+=(m-x.speed)*Math.min(1,h*1.5),x.s+=x.speed*h,x.hitT>0&&(x.hitT-=h),x.s<f.s-70&&(g=a(x,Math.max(g+n.range(70,190)/t,f.s+650)))}for(let x of p){let m=x.state;for(let d of i){let S=m.s-d.s,M=m.d-d.d,_=d.type.len/2+WT,E=d.type.w/2+GT;if(Math.abs(S)<_&&Math.abs(M)<E){if(d.hitT<=0||x.isPlayer){let T=M!==0?Math.sign(M):m.d<d.d?-1:1;m.d=d.d+T*(E+.05),m.speed>d.speed*.95&&(m.speed=Math.max(d.speed*.9,m.speed*.5),m.boostT=0,d.hitT<=0&&(m.events?.push("hit"),x.isPlayer&&(s.hits++,s.combo=0,s.meter=0,s.events.push({type:"hit",vehicle:d})))),d.hitT=1.2}x.isPlayer&&(d.passed=!0)}else if(x.isPlayer&&!d.passed&&S>_&&(d.passed=!0,Math.abs(M)<E+XT&&m.speed-d.speed>qT)){s.nearMisses++,s.combo++,s.comboT=YT,s.meter++;let T=!1;s.meter>=$T&&(s.meter=0,m.boostCharges<ZT&&(m.boostCharges+=1,T=!0)),s.events.push({type:"near",vehicle:d,combo:s.combo,boost:T})}}}s.comboT>0&&(s.comboT-=h,s.comboT<=0&&(s.combo=0))}function u(h){for(let f of i)f.s+=h}return Object.assign(s,{update:c,reset:l,shift:u})}var Sf="wss://tracker.openwebtorrent.com",I0=[{urls:"stun:stun.cloudflare.com:3478"}],KT=4,jT=25e3,L0=()=>{let n=crypto.getRandomValues(new Uint8Array(20)),e="";for(let t of n)e+=String.fromCharCode(t);return e},bf=n=>Array.from(n,e=>e.charCodeAt(0).toString(16).padStart(2,"0")).join("");async function JT(n){let e=new TextEncoder().encode("polygon-rush/v3/"+String(n).trim()),t=new Uint8Array(await crypto.subtle.digest("SHA-1",e)),i="";for(let s of t)i+=String.fromCharCode(s);return i}function D0(n){return n.iceGatheringState==="complete"?Promise.resolve():new Promise(e=>{let t=setTimeout(e,2500);n.addEventListener("icegatheringstatechange",()=>{n.iceGatheringState==="complete"&&(clearTimeout(t),e())})})}async function dc(n,{onPeer:e,onLeave:t,onMessage:i,onStatus:s,maxPeers:r=7}={}){let o=r,a=await JT(n),l=L0(),c=bf(l),u=new Map,h=new Map,f=null,p=null,g=!1,x=0,m=v=>s?.(v);function d(v,w,y){let b=u.get(v);if(b&&b.ch.readyState==="open"){try{w.close()}catch{}return}let A={id:v,pc:w,ch:y,send(O){y.readyState==="open"&&y.send(JSON.stringify(O))}};u.set(v,A),y.onmessage=O=>{let L;try{L=JSON.parse(O.data)}catch{return}L&&typeof L=="object"&&i?.(A,L)};let D=()=>{u.get(v)===A&&(u.delete(v),t?.(A));try{w.close()}catch{}};y.onclose=D,w.addEventListener("connectionstatechange",()=>{["failed","closed","disconnected"].includes(w.connectionState)&&D()}),e?.(A)}function S(v,w,y){w.readyState==="open"?d(y,v,w):w.onopen=()=>d(y,v,w)}async function M(){let v=[];for(let w=0;w<KT&&u.size+w<o;w++){let y=new RTCPeerConnection({iceServers:I0}),b=y.createDataChannel("jeu",{ordered:!1,maxRetransmits:0});y._ch=b,await y.setLocalDescription(await y.createOffer()),await D0(y);let A=L0();h.set(A,y),setTimeout(()=>{if(h.get(A)===y){h.delete(A);try{y.close()}catch{}}},5e4),v.push({offer_id:A,offer:{type:"offer",sdp:y.localDescription.sdp}})}return v}async function _(v){if(!f||f.readyState!==1)return;let w=u.size<o?await M():[];if(!f||f.readyState!==1)return;let y={action:"announce",info_hash:a,peer_id:l,numwant:w.length,uploaded:0,downloaded:0,left:1,offers:w};v&&(y.event=v),f.send(JSON.stringify(y))}async function E(v){let w;try{w=JSON.parse(v)}catch{return}if(!(!w||w.info_hash!==a)){if(w["failure reason"]){m("Le tracker refuse : "+w["failure reason"]);return}if(w.peer_id!==l){if(w.offer&&w.peer_id&&w.offer_id){let y=bf(w.peer_id);if(u.has(y)||u.size>=o)return;let b=new RTCPeerConnection({iceServers:I0});b.ondatachannel=A=>S(b,A.channel,y);try{await b.setRemoteDescription(w.offer),await b.setLocalDescription(await b.createAnswer()),await D0(b),f?.send(JSON.stringify({action:"announce",info_hash:a,peer_id:l,to_peer_id:w.peer_id,offer_id:w.offer_id,answer:{type:"answer",sdp:b.localDescription.sdp}}))}catch{try{b.close()}catch{}}}else if(w.answer&&w.offer_id){let y=h.get(w.offer_id);if(!y)return;h.delete(w.offer_id);let b=bf(w.peer_id);if(u.has(b)){try{y.close()}catch{}return}S(y,y._ch,b);try{await y.setRemoteDescription(w.answer)}catch{try{y.close()}catch{}}}}}}function T(){g||(m("Connexion au tracker\u2026"),f=new WebSocket(Sf),f.onopen=()=>{x=0,m("En attente d'autres joueurs"),_("started"),clearInterval(p),p=setInterval(()=>_(),jT)},f.onmessage=v=>{typeof v.data=="string"&&E(v.data)},f.onclose=()=>{clearInterval(p),!g&&(m("Tracker injoignable, nouvel essai\u2026"),setTimeout(T,Math.min(15e3,2e3*2**x++)))},f.onerror=()=>{})}return T(),{id:c,peers:u,broadcast(v){let w=JSON.stringify(v);for(let y of u.values())y.ch.readyState==="open"&&y.ch.send(w)},stopAnnouncing(){clearInterval(p);try{f?.close()}catch{}g=!0},leave(){g=!0,clearInterval(p);try{f?.close()}catch{}for(let v of u.values())try{v.pc.close()}catch{}for(let v of h.values())try{v.close()}catch{}u.clear(),h.clear()}}}function N0(){let n=null,e=0,t=null;return{get known(){return!!n},get age(){return n?(performance.now()-e)/1e3:1/0},push(i,s){!Number.isFinite(i.g)||!Number.isFinite(i.d)||!Number.isFinite(i.v)||(n={g:i.g,d:Math.max(-14,Math.min(14,i.d)),v:Math.max(0,Math.min(140,i.v)),l:+i.l||0,y:+i.y||0,b:!!i.b},e=s)},sample(i,s){if(!n)return null;let r=Math.min(.5,Math.max(0,(i-e)/1e3)),o={g:n.g+n.v*r,d:n.d,v:n.v,l:n.l,y:n.y,b:n.b};if(!t||Math.abs(t.g-o.g)>60)t={...o};else{let a=Math.min(1,s*10);t.g+=t.v*s+(o.g-(t.g+t.v*s))*a,t.d+=(o.d-t.d)*a,t.v+=(o.v-t.v)*a,t.l+=(o.l-t.l)*a,t.y+=(o.y-t.y)*a,t.b=o.b}return t}}}var ga=[[14885934,2312392],[2005987,15921906],[3129179,1053720],[15902491,1776411],[10178016,15921906],[15751836,1776411],[2279360,1776411],[15921906,14885934]];function yo(n){return String(n||"").replace(/[^\p{L}\p{N} _.-]/gu,"").trim().slice(0,14)||"Pilote"}function Tf(n){return String(n||"").toUpperCase().replace(/[^A-Z0-9-]/g,"").slice(0,16)}var pc=15e3;function wf(n){if(!n||typeof n!="object")return null;let e=Tf(n.id);return e.length<4?null:{id:e,name:String(n.name||"").replace(/[^\p{L}\p{N} _.'!-]/gu,"").trim().slice(0,24)||"Partie",host:yo(n.host),players:Math.max(1,Math.min(8,Math.floor(Number(n.players))||1)),locked:!!n.locked,started:!!n.started,stage:Math.max(1,Math.min(99,Math.floor(Number(n.stage))||1))}}function Ef(n,e){let t=!1;for(let[i,s]of n)e-s.seen>pc&&(n.delete(i),t=!0);return t}var B0={name:"ECDSA",namedCurve:"P-256"},z0={name:"ECDSA",hash:"SHA-256"},U0="ABCDEFGHJKMNPQRSTUVWXYZ23456789",k0=new TextEncoder,F0=n=>{let e="";for(let t of new Uint8Array(n))e+=String.fromCharCode(t);return btoa(e)},O0=n=>Uint8Array.from(atob(String(n)),e=>e.charCodeAt(0));async function H0(n){let e=new Uint8Array(await crypto.subtle.digest("SHA-256",n)),t="";for(let i=0;i<12;i++)t+=U0[e[i]%U0.length];return t}async function V0(){let n=await crypto.subtle.generateKey(B0,!1,["sign","verify"]),e=await crypto.subtle.exportKey("raw",n.publicKey);return{id:await H0(e),pub:F0(e),sign:async t=>F0(await crypto.subtle.sign(z0,n.privateKey,k0.encode(t)))}}async function xa(n,e,t,i){try{let s=O0(e);if(s.length!==65||typeof i!="string"||i.length>200||await H0(s)!==n)return!1;let r=await crypto.subtle.importKey("raw",s,B0,!1,["verify"]);return await crypto.subtle.verify(z0,r,O0(i),k0.encode(t))}catch{return!1}}var Af=n=>["partie",n.id,n.name,n.host,n.players,n.locked?1:0,n.started?1:0,n.stage,n.seq].join("|"),Rf=(n,e)=>["fermee",n,e].join("|"),Cf=(n,e)=>["hote",n,e].join("|");var QT=15;async function G0(n,e,{onChange:t,onStart:i,onStatus:s,password:r="",roomKey:o=null}={}){let a=!!o,l=String(n).toUpperCase(),c=Promise.resolve(null),u=new Map,h=yo(e),f=null,p=0,g=()=>t?.(),x=await dc("partie/"+String(n).toUpperCase()+(r?"/"+r:""),{onStatus:s,onPeer(d){u.set(d.id,{id:d.id,name:"Pilote",remote:N0(),finished:!1,finishTime:null,gone:!1,peer:d}),c.then(S=>d.send(S?{t:"hi",name:h,pub:o.pub,sig:S}:{t:"hi",name:h})),f&&d.send({t:"busy"}),g()},onLeave(d){let S=u.get(d.id);S&&(f?S.gone=!0:u.delete(d.id),g())},onMessage(d,S){let M=u.get(d.id);M&&(S.t==="hi"?(M.name=yo(S.name),g(),S.pub&&S.sig&&xa(l,String(S.pub),Cf(l,d.id),String(S.sig)).then(_=>{_&&(M.creator=!0,g())})):S.t==="s"?M.remote.push(S,performance.now()):S.t==="fin"&&Number.isFinite(S.time)?(M.finished=!0,M.finishTime=S.time,g()):S.t==="start"&&!f&&d.id===m.hostId?(f={stage:Math.max(1,Math.floor(Number(S.stage))||1)},x.stopAnnouncing(),i?.(f)):S.t==="busy"&&(M.busy=!0,g()))}});a&&(c=o.sign(Cf(l,x.id)).catch(()=>null));let m={code:n,locked:!!r,id:x.id,name:h,players:u,get started(){return f},get peerCount(){return x.peers.size},get hostId(){if(a)return x.id;for(let S of u.values())if(S.creator&&!S.gone)return S.id;let d=x.id;for(let S of u.keys())S<d&&(d=S);return d},get isHost(){return m.hostId===x.id},roster(){let d=[{id:x.id,name:h,me:!0},...Array.from(u.values()).filter(S=>!S.busy)];return d.sort((S,M)=>S.id<M.id?-1:1),d.map((S,M)=>({...S,color:ga[M%ga.length][0],accent:ga[M%ga.length][1]}))},start(d){return f||!m.isHost?!1:(f={stage:d},x.broadcast({t:"start",stage:d}),x.stopAnnouncing(),!0)},sendState(d,S,M){d-p<1e3/QT||(p=d,x.broadcast({t:"s",g:Math.round(S*100)/100,d:Math.round(M.d*100)/100,v:Math.round(M.speed*100)/100,l:Math.round((M.lean||0)*1e3)/1e3,y:Math.round((M.yaw||0)*1e3)/1e3,b:M.boostT>0?1:0}))},sendFinish(d){x.broadcast({t:"fin",time:d})},leave(){x.leave()}};return m}var ew=4e3,W0=60,tw=5*6e4,nw=5;async function X0({onChange:n,onStatus:e}={}){let t=new Map,i=new Map,s=null,r=!1,o=()=>performance.now(),a=()=>{r||n?.()},l=({seen:x,...m})=>({...m,age:Math.max(0,Math.round(o()-x))});async function c(x,m){let d=wf(m),S=Number(m?.seq),M=Number(m?.age);if(!d||!Number.isSafeInteger(S)||!Number.isFinite(M)||M<0||M>pc||s&&d.id===s.data.id)return;let _=t.get(d.id);if((_?_.seq>=S:t.size>=W0)||Math.abs(Date.now()-S)>tw)return;let E={...d,seq:S,pub:String(m.pub||""),sig:String(m.sig||"")};if(!await xa(d.id,E.pub,Af(E),E.sig)){i.set(x.id,(i.get(x.id)||0)+1);return}let T=t.get(d.id);T&&T.seq>=S||(t.set(d.id,{...E,seen:o()-M}),a())}let u=await dc("annuaire",{maxPeers:12,onStatus:e,onPeer(x){x.send({t:"rooms",list:h()}),a()},onLeave(x){i.delete(x.id),a()},async onMessage(x,m){if(!((i.get(x.id)||0)>=nw)){if(m.t==="rooms"&&Array.isArray(m.list))for(let d of m.list.slice(0,W0))await c(x,d);else if(m.t==="gone"&&typeof m.id=="string"){let d=t.get(m.id),S=Number(m.seq);d&&Number.isSafeInteger(S)&&S>d.seq&&await xa(d.id,d.pub,Rf(d.id,S),String(m.sig||""))&&(t.delete(m.id),u.broadcast({t:"gone",id:m.id,seq:S,sig:m.sig}),a())}}}});function h(){let x=Array.from(t.values()).filter(m=>o()-m.seen<=pc).map(l);return s?.signed&&x.push({...s.signed,age:0}),x}async function f(){if(!s)return;let x=s,m={...x.data,seq:Date.now(),pub:x.key.pub};m.sig=await x.key.sign(Af(m)),s===x&&(x.signed=m)}let p=setInterval(async()=>{Ef(t,o())&&a(),await f(),r||u.broadcast({t:"rooms",list:h()})},ew);async function g(){if(!s)return;let x=Date.now()+1,m={t:"gone",id:s.data.id,seq:x,sig:await s.key.sign(Rf(s.data.id,x))};u.broadcast(m)}return{get peers(){return u.peers.size},list(){return Ef(t,o()),Array.from(t.values()).sort((x,m)=>x.started-m.started||m.seen-x.seen)},async advertise(x,m){let d=wf({...x,id:m.id});!d||s&&JSON.stringify(s.data)===JSON.stringify(d)||(s={key:m,data:d,signed:s?.signed||null},await f(),r||u.broadcast({t:"rooms",list:h()}))},async retire(){s&&(await g(),s=null)},close(){if(r)return;let x=()=>{r=!0,clearInterval(p),u.leave()};s?g().then(x,x):x()}}}var q0="polygon-rush-name",ci=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),iw=n=>"#"+n.toString(16).padStart(6,"0"),mc="width:min(70vw,15em);font-size:2.6vmin;letter-spacing:0.04em;text-transform:none";async function Y0(n,e){let t="";try{t=localStorage.getItem(q0)||""}catch{}let i=()=>{},s="Connexion au tracker\u2026",r=null;try{r=await X0({onChange:()=>i(),onStatus:a=>{s=a,i()}})}catch(a){return console.warn("Annuaire indisponible :",a),null}let o=()=>(i=()=>{},r.close(),null);for(;;){let a=await n({initial:1,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">Multijoueur \xB7 ${ci(e.title)}</p>
  <div class="pr-seedrow pr-slide" style="--i:1">
    <label class="pr-lbl" for="pr-name-in">Pseudo</label>
    <div class="pr-seedbox"><input id="pr-name-in" class="pr-input" type="text" value="${ci(t)}" maxlength="14" autocomplete="off" spellcheck="false" data-nav data-name style="${mc}"></div>
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
  <p class="pr-cmds pr-slide" style="--i:4">Liaison directe entre joueurs : votre adresse IP est visible des autres joueurs, du tracker (${ci(Sf.replace("wss://",""))}) et du serveur STUN de Cloudflare.</p>
</section>`,onMount(v){i=()=>{let w=v.querySelector("[data-rooms]");if(!w)return;let y=r.list(),b=r.peers,A=`${b} autre${b>1?"s":""} joueur${b>1?"s":""} dans le lobby`;v.querySelector("[data-status]").textContent=y.length?`${y.length} partie${y.length>1?"s":""} annonc\xE9e${y.length>1?"s":""} \xB7 ${A}`:b?`Aucune partie pour l'instant \xB7 ${A}`:s,w.innerHTML=y.map(D=>`<li style="display:flex;align-items:center;gap:.8em"><span style="flex:1;text-align:left">${D.locked?"\u{1F512} ":""}<b>${ci(D.name)}</b> <small>\xB7 ${ci(D.host)}</small></span><span>${D.players}/8</span>`+(D.started?'<span style="opacity:.6;min-width:7em;text-align:right">en course</span>':`<button type="button" class="pr-btn pr-btn-small" data-act="join" data-id="${ci(D.id)}" data-locked="${D.locked?1:0}" data-room="${ci(D.name)}">Rejoindre</button>`)+"</li>").join("")},i()},actions:{back:(v,w)=>w(null),create:(v,w)=>w({create:!0,name:v.closest(".pr-screen").querySelector("[data-name]").value}),join:(v,w)=>w({join:v.dataset.id,locked:v.dataset.locked==="1",room:v.dataset.room,name:v.closest(".pr-screen").querySelector("[data-name]").value})}});if(i=()=>{},!a)return o();let l=yo(a.name);t=l;try{localStorage.setItem(q0,l)}catch{}let c,u,h="",f=!1,p=null;if(a.create){let v=await n({initial:0,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">Nouvelle partie</p>
  <div class="pr-seedrow pr-slide" style="--i:1">
    <label class="pr-lbl" for="pr-room-in">Nom de la partie</label>
    <div class="pr-seedbox"><input id="pr-room-in" class="pr-input" type="text" value="${ci("Partie de "+l)}" maxlength="24" autocomplete="off" spellcheck="false" data-nav data-room style="${mc}"></div>
  </div>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-pass-in">Mot de passe (laisser vide pour une partie publique)</label>
    <div class="pr-seedbox"><input id="pr-pass-in" class="pr-input" type="text" value="" maxlength="24" autocomplete="off" spellcheck="false" data-nav data-pass style="${mc}"></div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="ok">Ouvrir la partie</button>
    <button type="button" class="pr-btn" data-nav data-act="back">Retour</button>
  </div>
  <p class="pr-cmds pr-slide" style="--i:4">Une partie publique peut \xEAtre rejointe par tous ceux qui la voient dans le lobby.<br>Une partie priv\xE9e appara\xEEt avec un cadenas : il faut son mot de passe pour y entrer.</p>
</section>`,actions:{back:(w,y)=>y(null),ok:(w,y)=>{let b=w.closest(".pr-screen");y({room:b.querySelector("[data-room]").value,pass:b.querySelector("[data-pass]").value.trim()})}}});if(!v)continue;p=await V0(),c=p.id,u=v.room,h=v.pass,f=!0}else if(c=Tf(a.join),u=a.room,a.locked){let v=await n({initial:0,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">\u{1F512} ${ci(u)}</p>
  <div class="pr-seedrow pr-slide" style="--i:1">
    <label class="pr-lbl" for="pr-pass-in">Mot de passe de la partie</label>
    <div class="pr-seedbox"><input id="pr-pass-in" class="pr-input" type="text" value="" maxlength="24" autocomplete="off" spellcheck="false" data-nav data-pass style="${mc}"></div>
  </div>
  <div class="pr-btns pr-slide" style="--i:2">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="ok">Entrer</button>
    <button type="button" class="pr-btn" data-nav data-act="back">Retour</button>
  </div>
</section>`,actions:{back:(w,y)=>y(null),ok:(w,y)=>y({pass:w.closest(".pr-screen").querySelector("[data-pass]").value.trim()})}});if(!v)continue;h=v.pass}let g=null,x=null,m="Connexion au tracker\u2026",d=1;try{g=await G0(c,l,{password:h,roomKey:p,onChange:()=>i(),onStatus:v=>{m=v,i()},onStart:v=>x?.({stage:v.stage})})}catch(v){console.warn("Partie indisponible :",v);continue}let S=performance.now(),M=e.stages.map((v,w)=>`<option value="${w+1}">${w+1} \xB7 ${ci(v.subtitle)}</option>`).join(""),_=()=>{p&&r.advertise({name:u,host:l,players:g.roster().length,locked:!!h,started:!!g.started,stage:d},p)},E=null,T=await n({initial:0,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">${h?"\u{1F512} Partie priv\xE9e":"Partie publique"}</p>
  <div class="pr-logo pr-slide" style="--i:1;font-size:.45em"><span class="pr-logo-b">${ci(u)}</span></div>
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
</section>`,onMount(v,w){if(x=w,g.started){w({stage:g.started.stage});return}i=()=>{let y=v.querySelector("[data-list]");if(!y)return;let b=g.roster(),A=g.hostId;y.innerHTML=b.map(F=>`<li${F.me?' class="pr-me"':""}><span style="display:inline-block;width:.8em;height:.8em;border-radius:50%;background:${iw(F.color)};margin-right:.6em"></span><span>${ci(F.name)}${F.me?" (vous)":""}</span><b>${F.id===A?"h\xF4te":""}</b></li>`).join("");let D=b.length<2,O;D?f?O=h?"Partie priv\xE9e ouverte \xB7 donnez le mot de passe \xE0 vos amis":"Partie ouverte \xB7 visible dans le lobby":performance.now()-S>15e3?O=h?"Personne ici : mot de passe incorrect, ou la partie est ferm\xE9e":"Personne ici : la partie est peut-\xEAtre ferm\xE9e":O=m:O=`${b.length} joueurs`+(g.isHost?" \xB7 \xE0 vous de lancer la course":" \xB7 l'h\xF4te lance la course"),v.querySelector("[data-status]").textContent=O,d=Number(v.querySelector("[data-from]").value)||1;let L=v.querySelector("[data-start]");L.style.display=g.isHost?"":"none",L.disabled=D,L.style.opacity=D?"0.45":"",v.querySelector("[data-hostrow]").style.display=g.isHost?"":"none",_()},i(),v.querySelector("[data-from]").addEventListener("change",()=>i()),E=setInterval(()=>i(),3e3)},actions:{quit:(v,w)=>w(null),start:(v,w)=>{if(!g.isHost||g.roster().length<2)return;let y=Number(v.closest(".pr-screen").querySelector("[data-from]").value)||1;g.start(y)&&w({stage:y})}}});if(clearInterval(E),i=()=>{},x=null,!T){await r.retire(),g.leave();continue}return p?_():r.close(),{session:g,stage:T.stage,directory:p?r:null}}}var sw=[14212578,12067627,2051996,3093304,15788504,9080726,1928010,14722347];function Bs(n){let e=[],t=[],i=[],s=[[1,0,0,[1,-1,-1,1,1,-1,1,1,1,1,-1,1]],[-1,0,0,[-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1]],[0,1,0,[-1,1,1,1,1,1,1,1,-1,-1,1,-1]],[0,-1,0,[-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1]],[0,0,1,[1,-1,1,1,1,1,-1,1,1,-1,-1,1]],[0,0,-1,[-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1]]];for(let[o,a,l,c,u,h,f=1,p=1,g=1]of n)for(let[x,m,d,S]of s)for(let M of[0,1,2,0,2,3])e.push(o+S[M*3]*c/2,a+S[M*3+1]*u/2,l+S[M*3+2]*h/2),t.push(x,m,d),i.push(f,p,g);let r=new mt;return r.setAttribute("position",new ot(e,3)),r.setAttribute("normal",new ot(t,3)),r.setAttribute("color",new ot(i,3)),r}var gc=[.12,.16,.22],rw=[.07,.07,.08],xc=[.95,.08,.06],vc=[1,.95,.75],ow=[.86,.87,.88],aw=[.2,.21,.23];function yc(n,e,t,i){let s=[];for(let r of i)for(let o of[-1,1])s.push([o*(n/2-.12),t,r,.3,t*2,t*2,...rw]);return s}function lw(n){let{len:e,w:t,h:i}=n,s=-e/2,r=e/2,o=[[-t/2+.3,.75,s-.02,.4,.22,.08,...xc],[t/2-.3,.75,s-.02,.4,.22,.08,...xc],[-t/2+.3,.7,r+.02,.4,.2,.08,...vc],[t/2-.3,.7,r+.02,.4,.2,.08,...vc]];if(n.id==="car")return[Bs([[0,.62,0,t,.64,e],[0,1.37,-.25,t*.86,.14,e*.5]]),Bs([[0,1.1,-.25,t*.88,.42,e*.52,...gc],...yc(t,e,.32,[e*.3,-e*.3]),...o])];if(n.id==="van")return[Bs([[0,1.25,-.5,t,1.9,e-1.2],[0,.85,r-.55,t,1.1,1.1]]),Bs([[0,1.75,r-.62,t*.92,.7,1,...gc],...yc(t,e,.36,[e*.32,-e*.3]),...o])];if(n.id==="bus")return[Bs([[0,1,0,t,1.3,e],[0,3.05,0,t,.5,e]]),Bs([[0,2.2,0,t*1.01,1.15,e*.985,...gc],...yc(t,e,.5,[e*.33,-e*.3]),...o])];let a=2.5;return[Bs([[0,1.75,r-a/2,t,2.5,a]]),Bs([[0,2.25,s+(e-a-.5)/2,t,3.1,e-a-.5,...ow],[0,.75,s+(e-a)/2,t*.5,.3,e-a,...aw],[0,2.35,r-.4,t*.92,.85,.85,...gc],...yc(t,e,.52,[r-1.2,s+1.4,s+2.7,s+4]),[-t/2+.3,1,s-.02,.4,.25,.08,...xc],[t/2-.3,1,s-.02,.4,.25,.08,...xc],[-t/2+.3,.9,r+.02,.4,.2,.08,...vc],[t/2-.3,.9,r+.02,.4,.2,.08,...vc]])]}function $0(n,e){let t=new at;t.name="traffic";let i=new Map(fc.map(h=>[h.id,lw(h)])),s=sw.map(h=>new si({color:h})),r=new si({vertexColors:!0}),o=[];for(let h=0;h<e;h++){let f=new at,p=new it(i.get("car")[0],s[0]),g=new it(i.get("car")[1],r);p.castShadow=!0,g.castShadow=!0,f.add(p,g),f.visible=!1,t.add(f),o.push({g:f,body:p,detail:g,type:null,color:-1})}n.add(t);let a={};function l(h,f,p){for(let g=0;g<o.length;g++){let x=o[g],m=h.vehicles[g],d=m?m.s-p:1e9;if(!m||d<-120||d>1400){x.g.visible=!1;continue}if(x.type!==m.type.id){x.type=m.type.id;let[S,M]=i.get(m.type.id);x.body.geometry=S,x.detail.geometry=M}x.color!==m.color&&(x.color=m.color,x.body.material=s[m.color%s.length]),Ft(f,m.s,m.d,a),x.g.position.set(a.x,a.y,a.z),x.g.rotation.set(-Math.atan(a.slope||0),a.heading,0,"YXZ"),x.g.visible=!0}}function c(){for(let h of o)h.g.visible=!1}function u(){n.remove(t);for(let[h,f]of i.values())h.dispose(),f.dispose();for(let h of s)h.dispose();r.dispose()}return{group:t,update:l,hide:c,dispose:u}}var Z0="polygon-rush-v3-records",cw=new Set(["rally","rain"]);function K0(){try{let n=globalThis.localStorage?.getItem(Z0),e=n?JSON.parse(n):null;if(e&&typeof e=="object")return{splits:e.splits||{},total:e.total??null,runs:e.runs||0,finishes:e.finishes||0}}catch{}return{splits:{},total:null,runs:0,finishes:0}}function _c(n){try{return globalThis.localStorage?.setItem(Z0,JSON.stringify(n)),!0}catch{return!1}}function Pf(n){if(!Number.isFinite(n))return"\u2013";let e=Math.floor(n/60),t=n-e*60;return`${e}'${String(Math.floor(t)).padStart(2,"0")}"${Math.floor(t*10%10)}`}function j0(n){let e=Math.abs(n);return`${n<0?"\u2212":"+"}${e>=60?Pf(e):e.toFixed(1).replace(".",'"')}`}function J0(n,e,t){let i=n.splits[e]??null,s=i===null||t<i;return s&&(n.splits[e]=Math.round(t*1e3)/1e3),{time:t,best:i,delta:i===null?null:t-i,record:s}}function Q0(n,e){let t=n.total,i=t===null||e<t;return i&&(n.total=Math.round(e*1e3)/1e3),{time:e,best:t,delta:t===null?null:e-t,record:i}}function eg(n){return n.filter(e=>!cw.has(e.id))}function tg(n=document.body){let e=document.createElement("div");e.style.cssText="position:fixed;left:50%;top:13vmin;transform:translateX(-50%);display:none;gap:1.2vmin;z-index:35;font-family:Arial,Helvetica,sans-serif;pointer-events:auto;align-items:stretch";let t=document.createElement("div");t.style.cssText="position:fixed;left:50%;top:11.6vmin;transform:translateX(-50%);width:54vmin;height:0.7vmin;display:none;background:rgba(255,255,255,.18);z-index:35;border-radius:1vmin;overflow:hidden";let i=document.createElement("div");i.style.cssText="height:100%;width:100%;background:#ffd23f;transform-origin:left center",t.appendChild(i),n.append(t,e);let s=[],r=null,o=0,a=0;function l(){e.style.display="none",t.style.display="none",s=[],r=null}function c(f){if(!s.length)return!1;let p=s[Math.max(0,Math.min(s.length-1,f))],g=r;return l(),g?.(p),!0}function u(f,p,g=9){l(),f.length&&(s=f.slice(0,3),r=p,o=a=g,e.textContent="",s.forEach((x,m)=>{let d=document.createElement("button");d.type="button",d.style.cssText=`all:unset;cursor:pointer;width:27vmin;padding:1.1vmin 1.4vmin;border-radius:1vmin;color:#fff;background:rgba(12,18,34,.82);border:0.3vmin solid ${m===0?"#ffd23f":"rgba(255,255,255,.28)"};box-sizing:border-box`;let S=M=>String(M).replace(/[&<>]/g,_=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[_]);d.innerHTML=`<div style="font:bold 2.1vmin Arial;display:flex;gap:1vmin;align-items:center"><span style="background:#ffd23f;color:#111;border-radius:.6vmin;padding:.1vmin .9vmin">${m+1}</span><span>${S(x.icon||"")} ${S(x.name)}</span></div><div style="font:1.55vmin Arial;color:#8ef0a8;margin-top:.7vmin">\u25B2 ${S(x.pro)}</div><div style="font:1.55vmin Arial;color:#ff9a8a;margin-top:.3vmin">\u25BC ${S(x.con)}</div>`,d.addEventListener("click",()=>c(m)),e.appendChild(d)}),e.style.display="flex",t.style.display="block")}function h(f){s.length&&(o-=f,i.style.transform=`scaleX(${Math.max(0,o/a)})`,o<=0&&c(0))}return{show:u,pick:c,update:h,hide:l,get active(){return s.length>0},dispose(){e.remove(),t.remove()}}}var Mc=class extends Ji{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Of(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new Yf(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new Vf(t)}),this.register(function(t){return new Gf(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Wf(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new qf(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Kf(t)}),this.register(function(t){return new jf(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Ps.extractUrlBase(e);o=Ps.resolveURL(c,this.path)}else o=Ps.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ta(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===og){try{o[xt.KHR_BINARY_GLTF]=new Jf(e)}catch(h){s&&s(h);return}r=JSON.parse(o[xt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new rd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case xt.KHR_MATERIALS_UNLIT:o[h]=new Uf;break;case xt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Qf(r,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:o[h]=new ed;break;case xt.KHR_MESH_QUANTIZATION:o[h]=new td;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function uw(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Nf=class{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ie(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Sn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ci(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ll(u),c.distance=h;break;case"spot":c=new lo(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ts(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},Uf=class{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return Yt}extendParams(e,t,i){let s=[];e.color=new Ie(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Sn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(s)}},Ff=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Of=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(a,a)}return Promise.all(r)}},Bf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},zf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},kf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Sn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Rt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Hf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Vf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(a[0],a[1],a[2],Sn),Promise.all(r)}},Gf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Wf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(a[0],a[1],a[2],Sn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Rt)),Promise.all(r)}},Xf=class{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},qf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Yf=class{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},$f=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Zf=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Kf=class{constructor(e){this.name=xt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}},jf=class{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==ui.TRIANGLES&&c.mode!==ui.TRIANGLE_STRIP&&c.mode!==ui.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(let g of h){let x=new Ze,m=new V,d=new sn,S=new V(1,1,1),M=new bn(g.geometry,g.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,_),l.SCALE&&S.fromBufferAttribute(l.SCALE,_),M.setMatrixAt(_,x.compose(m,d,S));for(let _ in l)if(_==="_COLOR_0"){let E=l[_];M.instanceColor=new sr(E.array,E.itemSize,E.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);Ut.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},og="glTF",va=12,ng={JSON:1313821514,BIN:5130562},Jf=class{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,va),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==og)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-va,r=new DataView(e,va),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===ng.JSON){let c=new Uint8Array(e,va+o,a);this.content=i.decode(c)}else if(l===ng.BIN){let c=va+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Qf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=id[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=id[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],p=_o[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(p){for(let g in p.attributes){let x=p.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(p)},a,c,Sn,f)})})}},ed=class{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},td=class{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}},bc=class extends As{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,p=f*h,g=e*c,x=g-c,m=-2*p+3*f,d=p-f,S=1-m,M=d-f+h;for(let _=0;_!==a;_++){let E=o[x+_+a],T=o[x+_+l]*u,v=o[g+_+a],w=o[g+_]*u;r[_]=S*E+M*T+m*v+d*w}return r}},hw=new sn,nd=class extends bc{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return hw.fromArray(r).normalize().toArray(r),r}},ui={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_o={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ig={9728:Kt,9729:On,9984:Oh,9985:Go,9986:kr,9987:ti},sg={33071:qi,33648:$o,10497:Pn},If={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},id={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fw={CUBICSPLINE:void 0,LINEAR:Kr,STEP:Zr},Lf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dw(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new nt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ri})),n.DefaultMaterial}function mr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ts(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function pw(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(i){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function mw(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gw(n){let e,t=n.extensions&&n.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Df(t.attributes):e=n.indices+":"+Df(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Df(n.targets[i]);return e}function Df(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function sd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xw(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var vw=new Ze,rd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new uw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new Il(this.options.manager):this.textureLoader=new Dl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ta(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return mr(r,a,s),ts(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(Ps.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=If[s.type],a=_o[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new pt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=If[s.type],c=_o[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(p&&p!==h){let d=Math.floor(f/p),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,M=t.cache.get(S);M||(x=new c(a,d*p,s.count*p/u),M=new io(x,p/u),t.cache.add(S,M)),m=new ir(M,l,f%p/u,g)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new pt(x,l,g);if(s.sparse!==void 0){let d=If.SCALAR,S=_o[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,E=new S(o[1],M,s.sparse.count*d),T=new c(o[2],_,s.sparse.count*l);a!==null&&(m=new pt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let v=0,w=E.length;v<w;v++){let y=E[v];if(m.setX(y,T[v*l]),l>=2&&m.setY(y,T[v*l+1]),l>=3&&m.setZ(y,T[v*l+2]),l>=4&&m.setW(y,T[v*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=ig[f.magFilter]||On,u.minFilter=ig[f.minFilter]||ti,u.wrapS=sg[f.wrapS]||Pn,u.wrapT=sg[f.wrapT]||Pn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Kt&&u.minFilter!==On,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new ln(x);m.needsUpdate=!0,f(m)}),t.load(Ps.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),ts(h,o),h.userData.mimeType=o.mimeType||xw(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[xt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new or,Mn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Ts,Mn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return nt}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[xt.KHR_MATERIALS_UNLIT]){let h=s[xt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Sn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Rt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Pt);let u=r.alphaMode||Lf.OPAQUE;if(u===Lf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Lf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Yt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new $e(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Yt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Yt){let h=r.emissiveFactor;a.emissive=new Ie().setRGB(h[0],h[1],h[2],Sn)}return r.emissiveTexture!==void 0&&o!==Yt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),ts(h,r),t.associations.set(h,{materials:e}),r.extensions&&mr(s,h,r),h})}createUniqueName(e){let t=Nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return rg(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=gw(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=rg(new mt,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?dw(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let x=u[p],m=o[p],d,S=c[p];if(m.mode===ui.TRIANGLES||m.mode===ui.TRIANGLE_STRIP||m.mode===ui.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new bl(x,S):new it(x,S),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===ui.TRIANGLE_STRIP?d.geometry=pf(d.geometry,zl):m.mode===ui.TRIANGLE_FAN&&(d.geometry=pf(d.geometry,ra));else if(m.mode===ui.LINES)d=new rr(x,S);else if(m.mode===ui.LINE_STRIP)d=new ro(x,S);else if(m.mode===ui.LINE_LOOP)d=new El(x,S);else if(m.mode===ui.POINTS)d=new ws(x,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&mw(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),ts(d,r),m.extensions&&mr(s,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&mr(s,h[0],r),h[0];let f=new at;r.extensions&&mr(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Zt(cm.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new bs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ts(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new Ze;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Sl(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let p=s.channels[h],g=s.samplers[p.sampler],x=p.target,m=x.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],p=h[1],g=h[2],x=h[3],m=h[4],d=[];for(let S=0,M=f.length;S<M;S++){let _=f[S],E=p[S],T=g[S],v=x[S],w=m[S];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let y=i._createAnimationTracks(_,E,T,v,w);if(y)for(let b=0;b<y.length;b++)d.push(y[b])}return new Pl(r,void 0,d)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,vw)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new ea:c.length>1?u=new at:c.length===1?u=c[0]:u=new Ut,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ts(u,r),r.extensions&&mr(i,u,r),r.matrix!==void 0){let h=new Ze;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new at;i.name&&(r.name=s.createUniqueName(i.name)),ts(r,i),i.extensions&&mr(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,p]of s.associations)(f instanceof Mn||f instanceof ln)&&h.set(f,p);return u.traverse(f=>{let p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];zs[r.path]===zs.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(zs[r.path]){case zs.weights:c=Zi;break;case zs.rotation:c=Ki;break;case zs.position:case zs.scale:c=ji;break;default:i.itemSize===1?c=Zi:c=ji;break}let u=s.interpolation!==void 0?fw[s.interpolation]:Kr,h=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){let g=new c(l[f]+"."+zs[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=sd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Ki?nd:bc;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function yw(n,e,t){let i=e.attributes,s=new ni;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new V(l[0],l[1],l[2]),new V(c[0],c[1],c[2])),a.normalized){let u=sd(_o[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new V,l=new V;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let x=sd(_o[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new Xn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function rg(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=id[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return dt.workingColorSpace!==Sn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),ts(n,e),yw(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?pw(n,e.targets,t):n})}var ks={hi:null,lo:null},_w=["body","frame","bubble","headlight","tail","wheelRear","wheelFront","fork","torso","helmet","armR","armL","legR","legL"];async function od(n,e){let t=await n.loadAsync(e),i={},s={};for(let a of t.scene.children)a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.set(1,1,1),i[a.name]=a,a.traverse(l=>{l.isMesh&&l.material?.name&&(s[l.material.name]=l.material)});let r=_w.filter(a=>!i[a]);if(r.length)throw new Error(e+" incomplet : "+r.join(", "));let o=0;return i.armR.traverse(a=>{a.isMesh&&(a.geometry.computeBoundingBox(),o=Math.max(o,a.geometry.boundingBox.max.z))}),{parts:i,mats:s,armLength:o>.1?o/1.01:1}}async function ag(n="assets/"){if(ks.lo)return ks;let e=new Mc;return ks.lo=await od(e,n+"bike_voxel.glb").catch(()=>od(e,n+"bike.glb")),ks.hi=await od(e,n+"bike_voxel_hi.glb").catch(()=>ks.lo),ks}function lg(n="lo"){return ks[n]||ks.lo}var jt=0,dn=1,is=2,wc=.32,Tc=-.7,mg=.7,ns=[0,-wc,-Tc],gg=[0,-wc,-mg],cg=.62,Mw=.35,Hs=Math.PI*2,Jn=class{constructor(e){this.off=e||[0,0,0],this.pos=[],this.groups=[],this.slot=-1,this.gStart=0}setSlot(e){e!==this.slot&&(this.closeGroup(),this.slot=e)}closeGroup(){let e=this.pos.length/3;this.slot>=0&&e>this.gStart&&this.groups.push({start:this.gStart,count:e-this.gStart,materialIndex:this.slot}),this.gStart=e}tri(e,t,i,s){let r=this.off,o=e[0]+r[0],a=e[1]+r[1],l=e[2]+r[2],c=t[0]+r[0],u=t[1]+r[1],h=t[2]+r[2],f=i[0]+r[0],p=i[1]+r[1],g=i[2]+r[2],x=c-o,m=u-a,d=h-l,S=f-o,M=p-a,_=g-l,E=m*_-d*M,T=d*S-x*_,v=x*M-m*S,w=(o+c+f)/3-(s[0]+r[0]),y=(a+u+p)/3-(s[1]+r[1]),b=(l+h+g)/3-(s[2]+r[2]),A=this.pos;E*w+T*y+v*b>=0?A.push(o,a,l,c,u,h,f,p,g):A.push(o,a,l,f,p,g,c,u,h)}quad(e,t,i,s,r){this.tri(e,t,i,r),this.tri(e,i,s,r)}build(){this.closeGroup();let e=new mt;e.setAttribute("position",new ot(this.pos,3)),e.computeVertexNormals();for(let t of this.groups)e.addGroup(t.start,t.count,t.materialIndex);return e}};function bw(n){let e=0,t=0,i=0;for(let r of n)e+=r[0],t+=r[1],i+=r[2];let s=n.length;return[e/s,t/s,i/s]}function Sw(n,e){return[(n[0]+e[0])/2,(n[1]+e[1])/2,(n[2]+e[2])/2]}function ug(n,e,t,i){let s=e.length;for(let r=0;r<s;r++)n.tri(t,e[r],e[(r+1)%s],i)}function Vs(n,e,t,i,s){let r=typeof t=="function"?t:()=>t,o=e.length,a=e[0].length,l=e.map(bw);for(let c=0;c<o-1;c++){let u=e[c],h=e[c+1],f=Sw(l[c],l[c+1]);for(let p=0;p<a;p++){let g=(p+1)%a;n.setSlot(r(c,p)),n.quad(u[p],u[g],h[g],h[p],f)}}n.setSlot(i),ug(n,e[0],l[0],l[1]),n.setSlot(s),ug(n,e[o-1],l[o-1],l[o-2])}function jn(n,e,t,i,s,r,o){let a=t[0]-e[0],l=t[1]-e[1],c=t[2]-e[2],u=Math.hypot(a,l,c)||1,h=[a/u,l/u,c/u],f=Math.abs(h[1])<.9?[0,1,0]:[1,0,0],p=[h[1]*f[2]-h[2]*f[1],h[2]*f[0]-h[0]*f[2],h[0]*f[1]-h[1]*f[0]],g=Math.hypot(p[0],p[1],p[2]);p=[p[0]/g,p[1]/g,p[2]/g];let x=[p[1]*h[2]-p[2]*h[1],p[2]*h[0]-p[0]*h[2],p[0]*h[1]-p[1]*h[0]],m=(d,S)=>{let M=[];for(let _=0;_<r;_++){let E=Hs*_/r,T=Math.cos(E)*S,v=Math.sin(E)*S;M.push([d[0]+T*p[0]+v*x[0],d[1]+T*p[1]+v*x[1],d[2]+T*p[2]+v*x[2]])}return M};Vs(n,[m(e,i),m(t,s)],o,o,o)}function xr(n,e,t,i){n.setSlot(i);let s=(a,l,c)=>[e[0]+a*t[0],e[1]+l*t[1],e[2]+c*t[2]],r=[s(-1,-1,-1),s(1,-1,-1),s(1,1,-1),s(-1,1,-1),s(-1,-1,1),s(1,-1,1),s(1,1,1),s(-1,1,1)],o=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]];for(let a of o)n.tri(r[a[0]],r[a[1]],r[a[2]],e),n.tri(r[a[0]],r[a[2]],r[a[3]],e)}var Ec=3,_a=4;function Tw(n,e,t,i,s,r,o,a,l){return[[0,e,n],[o,t,n],[a,i,n],[l,s,n],[0,r,n],[-l,s,n],[-a,i,n],[-o,t,n]]}function ww(){let n=new Jn(ns),t=[[1.02,.76,.755,.74,.72,.71,.02,.03,.02],[.9,.84,.81,.75,.7,.68,.07,.12,.08],[.7,.93,.87,.76,.7,.68,.1,.19,.13],[.45,.97,.9,.68,.58,.56,.12,.23,.16],[.3,.98,.92,.62,.36,.26,.13,.23,.17],[.05,1,.94,.62,.3,.19,.14,.21,.16],[-.2,.99,.93,.66,.32,.21,.13,.19,.13],[-.35,.85,.82,.68,.42,.34,.11,.15,.1],[-.5,.8,.79,.72,.64,.62,.1,.13,.08],[-.75,.9,.87,.8,.72,.7,.09,.12,.07],[-.98,.99,.96,.92,.88,.87,.05,.07,.04],[-1.1,1.02,1.01,1,.99,.985,.01,.015,.01]].map(i=>Tw(...i));Vs(n,t,(i,s)=>{let r=s===0||s===7,o=s===1||s===6,a=s===2||s===5;return r?i===7||i===8?dn:jt:o?i>=9?Ec:jt:a?i>=2&&i<=5?Ec:i>=7&&i<=8?dn:jt:i>=3&&i<=6?is:dn},jt,jt);for(let i of[-1,1])jn(n,[.11*i,.46,-.26],[.1*i,.32,-.7],.04,.03,5,_a),jn(n,[.14*i,.44,-.3],[.22*i,.42,-.32],.018,.018,4,dn),jn(n,[.1*i,.95,.42],[.27*i,.93,.35],.02,.02,4,dn);return jn(n,[.15,.22,.1],[.17,.3,-.45],.04,.04,5,_a),jn(n,[.17,.3,-.45],[.2,.52,-.92],.05,.065,6,_a),jn(n,[.2,.52,-.92],[.205,.535,-.95],.065,.05,6,dn),xr(n,[0,.685,-.74],[.06,.012,.16],dn),n.build()}function Ew(){let n=new Jn(ns),e=(t,i,s,r)=>[[0,i,t],[r,s,t],[0,s-.02,t],[-r,s,t]];return Vs(n,[e(.76,.925,.91,.07),e(.58,1.06,.94,.12),e(.42,1.13,.97,.11)],jt,jt,jt),n.build()}function Aw(){let n=new Jn(ns);return xr(n,[0,.985,-1.085],[.04,.02,.014],jt),n.build()}function Rw(){let n=new Jn;return jn(n,[0,0,0],[0,0,-.45],.05,.004,6,jt),n.build()}function Cw(){let n=new Jn(ns);for(let e of[-1,1]){let t=[.062*e,.795,.905];n.setSlot(jt);let i=[[t[0]-.035,t[1]-.012,t[2]+.012],[t[0]+.035,t[1]+.004*e,t[2]-.02],[t[0]+.03,t[1]+.022,t[2]-.03],[t[0]-.03,t[1]+.02,t[2]-.004]];n.quad(i[0],i[1],i[2],i[3],[t[0],t[1],t[2]-.2])}return n.build()}function Pw(){let n=new Jn(gg);for(let i of[-1,1])jn(n,[.085*i,.32,.7],[.085*i,.56,.615],.032,.032,5,dn),jn(n,[.085*i,.56,.615],[.085*i,.88,.5],.024,.024,5,is),xr(n,[.1*i,.33,.74],[.012,.05,.035],_a);let e=.34,t=[];for(let i of[-.75,-.25,.3,.85,1.25]){let s=.32+Math.cos(i),r=.7+Math.sin(i),o=(a,l)=>[a,.32+l*Math.cos(i),.7+l*Math.sin(i)];t.push([o(-.075,e-.005),o(-.04,e+.03),o(.04,e+.03),o(.075,e-.005)])}return Vs(n,t,jt,jt,jt),n.build()}function hg(n,e){let t=new Jn,i=14,s=(o,a)=>{let l=[];for(let c=0;c<i;c++){let u=Hs*c/i;l.push([o,a*Math.cos(u),a*Math.sin(u)])}return l};Vs(t,[[-.62,.215],[-1,.27],[-.8,.305],[0,.32],[.8,.305],[1,.27],[.62,.215]].map(([o,a])=>s(o*n,a)),dn,dn,dn);for(let o of[-1,1]){let a=o*(.62*n+.004),l=[a,0,0],c=[0,0,0],u=10;for(let h=0;h<u;h++){let f=Hs*h/u,p=Hs*(h+1)/u;t.setSlot(h%2?dn:is),t.tri(l,[a,.215*Math.cos(f),.215*Math.sin(f)],[a,.215*Math.cos(p),.215*Math.sin(p)],c)}if(e){let h=o*(.62*n+.012);t.setSlot(_a);for(let f=0;f<u;f++){let p=Hs*f/u,g=Hs*(f+1)/u;t.quad([h,.09*Math.cos(p),.09*Math.sin(p)],[h,.16*Math.cos(p),.16*Math.sin(p)],[h,.16*Math.cos(g),.16*Math.sin(g)],[h,.09*Math.cos(g),.09*Math.sin(g)],c)}}}return t.build()}function Iw(){let n=new Jn,e=[0,.11,.015],t=[.125,.135,.155],i=10,s=6,r=[];for(let o=1;o<s;o++){let a=-Math.PI/2+Math.PI*o/s,l=Math.cos(a),c=[];for(let u=0;u<i;u++){let h=Hs*(u+.5)/i;c.push([e[0]+t[0]*l*Math.cos(h),e[1]+t[1]*Math.sin(a),e[2]+t[2]*l*Math.sin(h)])}r.push(c)}return Vs(n,r,(o,a)=>{let l=Hs*(a+1)/i;return Math.sin(l)>.45&&(o===1||o===2)?dn:Math.abs(Math.cos(l))<.35?is:jt},dn,jt),n.build()}function ya(n,e,t,i){return[[e,n,0],[e*.55,n,t],[-e*.55,n,t],[-e,n,0],[-e*.55,n,-i],[e*.55,n,-i]]}function Lw(){let n=new Jn,e=[ya(-.08,.13,.09,.1),ya(.04,.145,.1,.1),ya(.22,.185,.11,.11),ya(.38,.205,.1,.1),ya(.45,.09,.06,.07)];return Vs(n,e,(t,i)=>t===0?is:t===2&&(i===0||i===2||i===3||i===5)?Ec:jt,dn,dn),Vs(n,[[[.07,.4,-.08],[0,.42,-.06],[-.07,.4,-.08],[0,.39,-.13]],[[.06,.28,-.11],[0,.29,-.09],[-.06,.28,-.11],[0,.27,-.19]],[[.03,.14,-.1],[0,.14,-.09],[-.03,.14,-.1],[0,.14,-.13]]],is,is,is),n.build()}function fg(n){let e=new Jn,t=[.09*n,-.09,.5];return jn(e,[0,0,0],t,.058,.048,5,jt),jn(e,t,[0,0,.93],.046,.038,5,jt),xr(e,[0,0,.97],[.042,.04,.05],dn),xr(e,[0,.015,.02],[.052,.04,.05],Ec),e.build()}function dg(n){let e=new Jn,t=[.11*n,-.19,.42],i=[.085*n,-.47,.05];return jn(e,[0,0,0],t,.082,.066,6,jt),jn(e,t,i,.062,.05,5,jt),xr(e,[t[0]+.035*n,t[1]-.02,t[2]+.02],[.025,.05,.045],is),xr(e,[i[0],i[1]-.04,i[2]+.04],[.045,.05,.115],dn),e.build()}var ad=null;function Dw(){return ad||(ad={body:ww(),bubble:Ew(),tail:Aw(),flame:Rw(),fork:Pw(),headlight:Cw(),wheelRear:hg(.1,!1),wheelFront:hg(.068,!0),helmet:Iw(),torso:Lw(),armR:fg(-1),armL:fg(1),legR:dg(-1),legL:dg(1)}),ad}var Ti=(n,e,t)=>n<e?e:n>t?t:n,xg=n=>Ti(n,0,1),gr=n=>Number.isFinite(n)?n:0,Sc=n=>typeof n=="boolean"?n?1:0:xg(gr(n));function hi(n,e){return n.name=e,n}function pg(n,e,t,i){let s=new it(n,e);return s.name=t,s.castShadow=i,s.receiveShadow=!1,s}function vg({color:n=14034984,accent:e=16761395,isPlayer:t=!1,detail:i="lo"}={}){let s=Dw(),r=Me=>new nt({flatShading:!0,side:Pt,...Me}),o=r({color:new Ie(n),metalness:.35,roughness:.3}),a=r({color:1382173,metalness:.2,roughness:.7}),l=r({color:new Ie(e),metalness:.45,roughness:.35}),c=r({color:15856108,metalness:.15,roughness:.45}),u=r({color:11120312,metalness:.9,roughness:.32}),h=[o,a,l,c,u],f=r({color:792614,metalness:.6,roughness:.08,transparent:!0,opacity:.55,depthWrite:!1}),p=r({color:16777215,emissive:16774358,emissiveIntensity:2.4}),g=r({color:3342336,emissive:16718362,emissiveIntensity:.8}),x=lg(i),m=null;if(x){let Me=(X,He)=>{let ke=x.mats[X].clone();return ke.color.set(He),ke};m={Paint:Me("Paint",n),Suit:Me("Suit",n),Accent:Me("Accent",e),Tail:x.mats.Tail.clone()}}function d(Me,X,He,ke,Ue){if(!x)return pg(X,He,Me,ke);let Ae=x.parts[Me].clone(!0);return Ae.name=Me,Ue&&Ae.position.set(Ue[0],Ue[1],Ue[2]),Ae.traverse(qe=>{qe.isMesh&&(qe.material=m[qe.material.name]||qe.material,qe.castShadow=ke)}),Ae}let S=r({color:0,emissive:8382975,emissiveIntensity:1.5,transparent:!0,opacity:.85,depthWrite:!1}),M=hi(new at,"bike"),_=hi(new at,"leanPivot"),E=hi(new at,"pitchPivot");E.position.set(0,wc,Tc);let T=hi(new at,"rearWheel");T.add(d("wheelRear",s.wheelRear,h,!0));let v=hi(new at,"chassis"),w=d("body",s.body,h,!0,ns),y=d("bubble",s.bubble,f,!1,ns),b=d("tail",s.tail,g,!1,ns),A=d("headlight",s.headlight,p,!1,ns),D=pg(s.flame,S,"flame",!1);D.position.set(.205,.215,-.26),D.rotation.x=-.42,D.scale.z=.02,D.visible=!1;let O=hi(new at,"hips");O.position.set(0,cg,Mw);let L=hi(new at,"torso"),F=hi(new at,"head");F.position.set(0,.45,.01),F.add(d("helmet",s.helmet,h,!0)),L.add(d("torso",s.torso,h,!0),F);let B=d("armR",s.armR,h,!0),Y=d("armL",s.armL,h,!0),W=hi(new at,"legR");W.position.set(-.12,-.02,0),W.add(d("legR",s.legR,h,!0));let H=hi(new at,"legL");H.position.set(.12,-.02,0),H.add(d("legL",s.legL,h,!0)),O.add(L,B,Y,W,H),v.add(w,y,b,A,D,O),x&&v.add(d("frame",null,null,!0,ns));let ae=hi(new at,"steerPivot");ae.position.set(0,0,mg-Tc);let ve=d("fork",s.fork,h,!0,gg),Se=hi(new at,"frontWheel");if(Se.add(d("wheelFront",s.wheelFront,h,!0)),ae.add(ve,Se),E.add(T,v,ae),_.add(E),M.add(_),t){let Me=new lo(16773590,60,60,.5,.6,2);Me.name="headSpot",Me.castShadow=!1,Me.position.set(0,1,.9),Me.target.position.set(0,.2,30),Me.target.name="headSpotTarget",M.add(Me,Me.target)}let ge={lean:0,steer:0,pitch:0,compress:0,sr:0,brake:0,air:0,drift:0,boost:0},le=.2,se=.37,re=.02,I=[.25,.93-wc,.36-Tc],$=new V,q=new V,ee=new V(0,0,1);function pe(Me,X){$.set(le*X,se,re).applyEuler(L.rotation),q.set(I[0]*X-O.position.x,I[1]-O.position.y,I[2]-O.position.z);let He=Math.cos(-O.rotation.z),ke=Math.sin(-O.rotation.z),Ue=q.x*He-q.y*ke,Ae=q.x*ke+q.y*He;q.x=Ue,q.y=Ae,Me.position.copy($),q.sub($);let qe=q.length()||1;Me.scale.z=qe/(x?x.armLength:1),Me.quaternion.setFromUnitVectors(ee,q.multiplyScalar(1/qe))}function we(Me,X){let He=Me||{},ke=Number.isFinite(X)?Ti(X,0,.1):1/60,Ue=1-Math.exp(-ke*14),Ae=1-Math.exp(-ke*5);ge.lean+=(Ti(gr(He.lean),-1.5,1.5)-ge.lean)*Ue,ge.steer+=(Ti(gr(He.steer),-1,1)-ge.steer)*Ue,ge.pitch+=(Ti(gr(He.pitch),-.9,.9)-ge.pitch)*Ue,ge.compress+=(Ti(gr(He.compress),-1,1)-ge.compress)*Ue,ge.sr+=(xg(gr(He.speedRatio))-ge.sr)*Ae,ge.brake+=(Sc(He.braking)-ge.brake)*Ae,ge.air+=(Sc(He.airborne)-ge.air)*Ae,ge.drift+=(Sc(He.drift)-ge.drift)*Ae,ge.boost+=(Sc(He.boost)-ge.boost)*Ae;let qe=ge.lean,Fe=(Number.isFinite(He.speed)?He.speed:ge.sr*80)*3.6;_.rotation.z=qe,E.rotation.x=-ge.pitch,ae.rotation.y=-.45*ge.steer*Ti(1-2*ge.sr,0,1),v.position.y=-.07*ge.compress;let U=Ti((Fe-20)/100,0,1),R=Ti(Math.abs(qe)*2.27,0,1),te=qe>=0?1:-1,_e=R*(1-Ti((Fe-30)/30,0,1));O.position.x=-.17*R*te,O.position.y=cg+.1*ge.air,O.rotation.z=-.2*R*te,L.rotation.x=Ti(.45+.55*U-.2*ge.brake-.25*ge.air+.1*ge.boost,.2,1.05),L.rotation.z=-.1*R*te,F.rotation.x=-.35*U+.1*ge.air,F.rotation.y=-.35*R*te,F.rotation.z=-.4*qe;let Te=.55*R+.3*_e;W.rotation.y=te>0?-Te:0,H.rotation.y=te<0?Te:0,pe(B,-1),pe(Y,1),(m?m.Tail:g).emissiveIntensity=(m?2:.8)+(m?6:2.2)*ge.brake,D.visible=ge.boost>.03,D.scale.z=.02+1.3*ge.boost,S.emissiveIntensity=1.5+2*ge.boost;let me=gr(He.wheelSpin);T.rotation.x=me,Se.rotation.x=me}return we({},0),{group:M,update:we}}var yg=Math.PI*2,en=6e3,Mo=2200,_g=60,Mg=30,bg=60,Nw=3,Ma=2e3,vr=170,ud=1.5,Uw=13,Sg=Uw-ud,ld=120,Fw={dust:{life:.9,grav:-1.2,drag:2.2,spread:1.6,lift:[.6,1.8],s0:.35,s1:1.5,a0:.3,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!1},smoke:{life:.8,grav:-.8,drag:1.2,spread:.9,lift:[.5,1.3],s0:.35,s1:1.3,a0:.16,c0:[.89,.9,.92],c1:[.62,.64,.67],add:!1,bounce:!1,ring:!1},spark:{life:.6,grav:18,drag:.25,spread:5.5,lift:[1.5,4.5],s0:.22,s1:.06,a0:1,c0:[1,.88,.4],c1:[1,.48,.1],add:!0,bounce:!0,ring:!1},spray:{life:.6,grav:9,drag:.5,spread:2.2,lift:[1.2,3.2],s0:.25,s1:.9,a0:.22,c0:[.71,.93,.98],c1:[.37,.66,.8],add:!1,bounce:!1,ring:!1},gravel:{life:.7,grav:20,drag:.15,spread:3.2,lift:[1.5,3.5],s0:.08,s1:.06,a0:1,c0:[.29,.26,.22],c1:[.14,.13,.11],add:!1,bounce:!0,ring:!1},boost:{life:.3,grav:-3,drag:3,spread:.8,lift:[0,.5],s0:.55,s1:.12,a0:.9,c0:[.25,.96,1],c1:[1,.25,.78],add:!0,bounce:!1,ring:!1},land:{life:.8,grav:0,drag:4,spread:0,lift:[.4,1],s0:.5,s1:1.8,a0:.32,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!0}},Ow=new Ie(16777215),Bw=new Ie(8386303);function Hn(n,e){return n+(e-n)*Math.random()}function ba(n,e,t){return n<e?e:n>t?t:n}function Gs(n,e=0){return Number.isFinite(n)?n:e}function zw(n){return Number.isFinite(n)?ba(n,0,.1):0}function cd(n,e){return n-e*Math.floor(n/e+.5)}function kw(){let n=globalThis.innerHeight||900,e=Math.min(globalThis.devicePixelRatio||1,2);return n*e}var Hw=`
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
}`,Vw=`
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
}`,Gw=`
attribute float aAlpha;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Ww=`
uniform vec3 uColor;
varying float vAlpha;
void main() {
  gl_FragColor = vec4(uColor, vAlpha);
}`;function Tg(n,e){let t=e||{},i=Gs(t.rain,0),s=Gs(t.wind,0),r=new Float32Array(en*3),o=new Float32Array(en*3),a=new Float32Array(en*3),l=new Float32Array(en*3),c=new Float32Array(en*3),u=new Float32Array(en),h=new Float32Array(en),f=new Float32Array(en),p=new Float32Array(en),g=new Float32Array(en),x=new Float32Array(en),m=new Float32Array(en),d=new Float32Array(en),S=new Float32Array(en),M=new Float32Array(en),_=new Float32Array(en),E=new Uint8Array(en),T=0,v=!1,w=new mt,y=new pt(r,3).setUsage(Pi),b=new pt(c,3).setUsage(Pi),A=new pt(u,1).setUsage(Pi),D=new pt(h,1).setUsage(Pi),O=new pt(f,1).setUsage(Pi);w.setAttribute("position",y),w.setAttribute("aColor",b),w.setAttribute("aSize",A),w.setAttribute("aAlpha",D),w.setAttribute("aMode",O);let L=new vt({uniforms:{uScale:{value:700}},vertexShader:Hw,fragmentShader:Vw,transparent:!0,depthWrite:!1,blending:ia,blendSrc:Ph,blendDst:Yo,blendEquation:Fn}),F=new ws(w,L);F.frustumCulled=!1,n.add(F);function B(C,z,k,K,N,ce,G,Z=1){let j=Fw[C];if(!j||!Number.isFinite(z)||!Number.isFinite(k)||!Number.isFinite(K))return;let ie=Gs(N),ye=Gs(ce),Be=Gs(G),Re=Math.min(en,Math.max(0,Math.floor(Gs(Z,1))));for(let Ne=0;Ne<Re;Ne++){let J=T;T=(T+1)%en;let oe,fe,xe;if(j.ring){let De=(Re>1?Ne/Re:Math.random())*yg+Math.random()*.2,Ke=Hn(3.5,5.5);oe=Math.cos(De)*Ke+ie*.3,xe=Math.sin(De)*Ke+Be*.3,fe=Hn(j.lift[0],j.lift[1])+ye*.3}else oe=ie+Hn(-j.spread,j.spread),xe=Be+Hn(-j.spread,j.spread),fe=ye+Hn(j.lift[0],j.lift[1]);let Pe=J*3;r[Pe]=z+Hn(-.1,.1),r[Pe+1]=k,r[Pe+2]=K+Hn(-.1,.1),o[Pe]=oe,o[Pe+1]=fe,o[Pe+2]=xe,p[J]=0,g[J]=j.life*Hn(.85,1.15),x[J]=j.drag,m[J]=j.grav,d[J]=j.s0*Hn(.85,1.2),S[J]=j.s1*Hn(.85,1.2),M[J]=j.a0,_[J]=k,E[J]=j.bounce?1:0,f[J]=j.add?1:0,a[Pe]=j.c0[0],a[Pe+1]=j.c0[1],a[Pe+2]=j.c0[2],l[Pe]=j.c1[0],l[Pe+1]=j.c1[1],l[Pe+2]=j.c1[2]}Re>0&&(v=!0)}function Y(C){let z=!1;for(let k=0;k<en;k++){if(g[k]<=0)continue;if(z=!0,p[k]+=C,p[k]>=g[k]){g[k]=0,h[k]=0,u[k]=0;continue}let K=k*3,N=Math.max(0,1-x[k]*C),ce=o[K]*N,G=o[K+1]*N-m[k]*C,Z=o[K+2]*N,j=r[K]+ce*C,ie=r[K+1]+G*C,ye=r[K+2]+Z*C;E[k]&&ie<_[k]&&G<0&&(ie=_[k],G=-G*.35,ce*=.6,Z*=.6,E[k]=0),o[K]=ce,o[K+1]=G,o[K+2]=Z,r[K]=j,r[K+1]=ie,r[K+2]=ye;let Be=p[k]/g[k];u[k]=d[k]+(S[k]-d[k])*Be,h[k]=M[k]*(1-Be*Be),c[K]=a[K]+(l[K]-a[K])*Be,c[K+1]=a[K+1]+(l[K+1]-a[K+1])*Be,c[K+2]=a[K+2]+(l[K+2]-a[K+2])*Be}return z}let W=null;if(i>0){let C=new mt,z=new Float32Array(Mo*6),k=new pt(z,3).setUsage(Pi);C.setAttribute("position",k);let K=new Float32Array(Mo*3),N=new Float32Array(Mo),ce=new Float32Array(Mo);for(let j=0;j<Mo;j++)K[j*3]=(Math.random()-.5)*_g,K[j*3+1]=-12+Math.random()*Mg,K[j*3+2]=(Math.random()-.5)*bg,N[j]=Hn(22,30),ce[j]=Hn(.8,1.2);let G=new Ts({color:12900095,transparent:!0,opacity:.16,depthWrite:!1}),Z=new rr(C,G);Z.frustumCulled=!1,n.add(Z),W={geo:C,mat:G,lines:Z,attr:k,pa:z,head:K,fall:N,len:ce,windX:5.5*s,windZ:2*s}}function H(C,z,k){let K=W,N=K.pa,ce=K.head,G=K.windX,Z=K.windZ,j=z.x,ie=z.y+Nw,ye=z.z;for(let Be=0;Be<Mo;Be++){let Re=Be*3,Ne=j+cd(ce[Re]-j,_g),J=ie+cd(ce[Re+1]-ie,Mg),oe=ye+cd(ce[Re+2]-ye,bg),fe=K.fall[Be],xe=G-k.x,Pe=-fe-k.y,De=Z-k.z,Ke=.05*K.len[Be],et=Be*6;N[et]=Ne-xe*Ke,N[et+1]=J-Pe*Ke,N[et+2]=oe-De*Ke,N[et+3]=Ne,N[et+4]=J,N[et+5]=oe,ce[Re]=Ne+G*C,ce[Re+1]=J-fe*C,ce[Re+2]=oe+Z*C}K.attr.needsUpdate=!0}let ae=new Float32Array(Ma*4*3),ve=new Float32Array(Ma*4),Se=new Uint16Array(Ma*6);for(let C=0;C<Ma;C++){let z=C*4;Se.set([z,z+1,z+2,z,z+2,z+3],C*6)}let ge=new mt,le=new pt(ae,3).setUsage(Pi),se=new pt(ve,1).setUsage(Pi);ge.setAttribute("position",le),ge.setAttribute("aAlpha",se),ge.setIndex(new pt(Se,1));let re=new vt({uniforms:{uColor:{value:new Ie(1315086)}},vertexShader:Gw,fragmentShader:Ww,transparent:!0,depthWrite:!1,side:Pt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),I=new it(ge,re);I.frustumCulled=!1,n.add(I);let $=0,q=1/0,ee=-1;function pe(C,z,k,K,N,ce,G=.3,Z=.5){if(![C,z,k,K,N,ce,G,Z].every(Number.isFinite))return;let j=K-C,ie=ce-k,ye=Math.hypot(j,ie);if(ye<1e-4)return;let Be=G*.5,Re=-ie/ye*Be,Ne=j/ye*Be,J=ba(Z,0,1),oe=z+.03,fe=N+.03,xe=$*4;$=($+1)%Ma;let Pe=ae,De=xe*3;Pe[De]=C+Re,Pe[De+1]=oe,Pe[De+2]=k+Ne,Pe[De+3]=C-Re,Pe[De+4]=oe,Pe[De+5]=k-Ne,Pe[De+6]=K-Re,Pe[De+7]=fe,Pe[De+8]=ce-Ne,Pe[De+9]=K+Re,Pe[De+10]=fe,Pe[De+11]=ce+Ne,ve[xe]=J,ve[xe+1]=J,ve[xe+2]=J,ve[xe+3]=J,xe<q&&(q=xe),xe+3>ee&&(ee=xe+3)}function we(){if(ee<0)return;let C=q,z=ee-q+1;le.clearUpdateRanges(),le.addUpdateRange(C*3,z*3),le.needsUpdate=!0,se.clearUpdateRanges(),se.addUpdateRange(C,z),se.needsUpdate=!0,q=1/0,ee=-1}let Me=new at;Me.matrixAutoUpdate=!1,n.add(Me);let X=new Float32Array(vr*6),He=new pt(X,3).setUsage(Pi),ke=new mt;ke.setAttribute("position",He);let Ue=new Float32Array(vr),Ae=new Float32Array(vr),qe=new Float32Array(vr),Fe=new Float32Array(vr);for(let C=0;C<vr;C++){let z=Math.random()*yg,k=Hn(.8,1.5);Ue[C]=Math.cos(z)*k,Ae[C]=Math.sin(z)*k,qe[C]=-ud-Math.random()*Sg,Fe[C]=Hn(.5,1.2)}let U=new Ts({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),R=new rr(ke,U);R.frustumCulled=!1,R.visible=!1,Me.add(R);let te=0,_e=0,Te=0,me=0;function Ve(C,z){Te+=(te-Te)*(1-Math.exp(-6*C)),me+=(_e-me)*(1-Math.exp(-8*C)),z.updateMatrixWorld(),Me.matrix.copy(z.matrixWorld),Me.matrixWorld.copy(z.matrixWorld);let k=ba((Te-.55)/.45,0,1),K=Math.min(1,.55*k*k*(3-2*k)+.6*me),N=Math.floor(K*vr);if(N<=0){R.visible=!1;return}R.visible=!0,ke.setDrawRange(0,N*2),U.color.copy(Ow).lerp(Bw,me),U.opacity=.05+.24*K;let ce=(60+110*K)*C,G=1.5+5*K,Z=X;for(let j=0;j<N;j++){let ie=qe[j]+ce;ie>-ud&&(ie-=Sg),qe[j]=ie;let ye=-ie,Be=Ue[j]*ye*.9,Re=Ae[j]*ye*.5,Ne=G*Fe[j],J=j*6;Z[J]=Be,Z[J+1]=Re,Z[J+2]=ie,Z[J+3]=Be,Z[J+4]=Re,Z[J+5]=ie-Ne}He.needsUpdate=!0}let Le=new V,Oe=new V,Xe=!1,be=!1;function ue(C,z){if(be)return;C=zw(C);let k=z.position;Xe?C>0&&(Oe.subVectors(k,Le).divideScalar(C),Oe.lengthSq()>ld*ld&&Oe.setLength(ld),Le.copy(k)):(Le.copy(k),Oe.set(0,0,0),Xe=!0);let K=Gs(z.fov,60);L.uniforms.uScale.value=kw()/(2*Math.tan(K*Math.PI/360)),(Y(C)||v)&&(y.needsUpdate=!0,b.needsUpdate=!0,A.needsUpdate=!0,D.needsUpdate=!0,O.needsUpdate=!0,v=!1),W&&C>0&&H(C,k,Oe),Ve(C,z),we()}function Ee(C,z){let k=ba(Gs(C,0),0,1.5);te=ba((k-.7)/.3,0,1),_e=z?1:0}function Ce(){be||(be=!0,n.remove(F,I,Me),W&&n.remove(W.lines),w.dispose(),L.dispose(),ge.dispose(),re.dispose(),ke.dispose(),U.dispose(),W&&(W.geo.dispose(),W.mat.dispose()))}return{emit:B,addSkid:pe,setSpeed:Ee,update:ue,dispose:Ce}}var Ws={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Xw=new bs(-1,1,1,-1,0,1),hd=class extends mt{constructor(){super(),this.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ot([0,2,0,0,2,0],2))}},qw=new hd,Ni=class{constructor(e){this._mesh=new it(qw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var bo=class extends Ln{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Tn.clone(e.uniforms),this.material=new vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ni(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Sa=class extends Ln{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ac=class extends Ln{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Rc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new $e);this._width=i.width,this._height=i.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bo(Ws),this.copyPass.material.blending=nn,this.clock=new Nl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Sa!==void 0&&(o instanceof Sa?i=!0:o instanceof Ac&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Cc=class extends Ln{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ie}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var wg={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var So=class n extends Ln{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new $e(e.x,e.y):new $e(256,256),this.clearColor=new Ie(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(r,o,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new qt(r,o,{type:un});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new qt(r,o,{type:un});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=wg;this.highPassUniforms=Tn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new $e(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Ws;this.copyUniforms=Tn.clone(u.uniforms),this.blendMaterial=new vt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:vs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ie,this.oldClearAlpha=1,this.basic=new Yt,this.fsQuad=new Ni(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new $e(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new vt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $e(.5,.5)},direction:{value:new $e(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};So.BlurDirectionX=new $e(1,0);So.BlurDirectionY=new $e(0,1);var Eg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Pc=class extends Ln{constructor(){super();let e=Eg;this.uniforms=Tn.clone(e.uniforms),this.material=new Al({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ni(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===wt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Dh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===sa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Uh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Fh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ta={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $e},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ze},cameraProjectionMatrixInverse:{value:new Ze},cameraWorldMatrix:{value:new Ze},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new V(-1,-1,-1)},sceneBoxMax:{value:new V(1,1,1)}},vertexShader:`

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

		}`},Ic={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Ag(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=Yw(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new V(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Ss(s,e,e);return r.wrapS=Pn,r.wrapT=Pn,r.needsUpdate=!0,r}function Yw(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var Ea={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:fd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $e},cameraProjectionMatrixInverse:{value:new Ze},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function fd(n,e,t){let i=$w(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function $w(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new V(Math.cos(r),Math.sin(r),o))}return i}var Lc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,p=c-h,g=e-f,x=t-p,m,d;g>x?(m=1,d=0):(m=0,d=1);let S=g-m+u,M=x-d+u,_=g-1+2*u,E=x-1+2*u,T=l&255,v=c&255,w=this.perm[T+this.perm[v]]%12,y=this.perm[T+m+this.perm[v+d]]%12,b=this.perm[T+1+this.perm[v+1]]%12,A=.5-g*g-x*x;A<0?i=0:(A*=A,i=A*A*this.dot(this.grad3[w],g,x));let D=.5-S*S-M*M;D<0?s=0:(D*=D,s=D*D*this.dot(this.grad3[y],S,M));let O=.5-_*_-E*E;return O<0?r=0:(O*=O,r=O*O*this.dot(this.grad3[b],_,E)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),f=Math.floor(i+c),p=1/6,g=(u+h+f)*p,x=u-g,m=h-g,d=f-g,S=e-x,M=t-m,_=i-d,E,T,v,w,y,b;S>=M?M>=_?(E=1,T=0,v=0,w=1,y=1,b=0):S>=_?(E=1,T=0,v=0,w=1,y=0,b=1):(E=0,T=0,v=1,w=1,y=0,b=1):M<_?(E=0,T=0,v=1,w=0,y=1,b=1):S<_?(E=0,T=1,v=0,w=0,y=1,b=1):(E=0,T=1,v=0,w=1,y=1,b=0);let A=S-E+p,D=M-T+p,O=_-v+p,L=S-w+2*p,F=M-y+2*p,B=_-b+2*p,Y=S-1+3*p,W=M-1+3*p,H=_-1+3*p,ae=u&255,ve=h&255,Se=f&255,ge=this.perm[ae+this.perm[ve+this.perm[Se]]]%12,le=this.perm[ae+E+this.perm[ve+T+this.perm[Se+v]]]%12,se=this.perm[ae+w+this.perm[ve+y+this.perm[Se+b]]]%12,re=this.perm[ae+1+this.perm[ve+1+this.perm[Se+1]]]%12,I=.6-S*S-M*M-_*_;I<0?s=0:(I*=I,s=I*I*this.dot3(this.grad3[ge],S,M,_));let $=.6-A*A-D*D-O*O;$<0?r=0:($*=$,r=$*$*this.dot3(this.grad3[le],A,D,O));let q=.6-L*L-F*F-B*B;q<0?o=0:(q*=q,o=q*q*this.dot3(this.grad3[se],L,F,B));let ee=.6-Y*Y-W*W-H*H;return ee<0?a=0:(ee*=ee,a=ee*ee*this.dot3(this.grad3[re],Y,W,H)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,f,p,g,x=(e+t+i+s)*l,m=Math.floor(e+x),d=Math.floor(t+x),S=Math.floor(i+x),M=Math.floor(s+x),_=(m+d+S+M)*c,E=m-_,T=d-_,v=S-_,w=M-_,y=e-E,b=t-T,A=i-v,D=s-w,O=y>b?32:0,L=y>A?16:0,F=b>A?8:0,B=y>D?4:0,Y=b>D?2:0,W=A>D?1:0,H=O+L+F+B+Y+W,ae=o[H][0]>=3?1:0,ve=o[H][1]>=3?1:0,Se=o[H][2]>=3?1:0,ge=o[H][3]>=3?1:0,le=o[H][0]>=2?1:0,se=o[H][1]>=2?1:0,re=o[H][2]>=2?1:0,I=o[H][3]>=2?1:0,$=o[H][0]>=1?1:0,q=o[H][1]>=1?1:0,ee=o[H][2]>=1?1:0,pe=o[H][3]>=1?1:0,we=y-ae+c,Me=b-ve+c,X=A-Se+c,He=D-ge+c,ke=y-le+2*c,Ue=b-se+2*c,Ae=A-re+2*c,qe=D-I+2*c,Fe=y-$+3*c,U=b-q+3*c,R=A-ee+3*c,te=D-pe+3*c,_e=y-1+4*c,Te=b-1+4*c,me=A-1+4*c,Ve=D-1+4*c,Le=m&255,Oe=d&255,Xe=S&255,be=M&255,ue=a[Le+a[Oe+a[Xe+a[be]]]]%32,Ee=a[Le+ae+a[Oe+ve+a[Xe+Se+a[be+ge]]]]%32,Ce=a[Le+le+a[Oe+se+a[Xe+re+a[be+I]]]]%32,C=a[Le+$+a[Oe+q+a[Xe+ee+a[be+pe]]]]%32,z=a[Le+1+a[Oe+1+a[Xe+1+a[be+1]]]]%32,k=.6-y*y-b*b-A*A-D*D;k<0?u=0:(k*=k,u=k*k*this.dot4(r[ue],y,b,A,D));let K=.6-we*we-Me*Me-X*X-He*He;K<0?h=0:(K*=K,h=K*K*this.dot4(r[Ee],we,Me,X,He));let N=.6-ke*ke-Ue*Ue-Ae*Ae-qe*qe;N<0?f=0:(N*=N,f=N*N*this.dot4(r[Ce],ke,Ue,Ae,qe));let ce=.6-Fe*Fe-U*U-R*R-te*te;ce<0?p=0:(ce*=ce,p=ce*ce*this.dot4(r[C],Fe,U,R,te));let G=.6-_e*_e-Te*Te-me*me-Ve*Ve;return G<0?g=0:(G*=G,g=G*G*this.dot4(r[z],_e,Te,me,Ve)),27*(u+h+f+p+g)}};var Aa=class n extends Ln{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ag(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new qt(this.width,this.height,{type:un}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new vt({defines:Object.assign({},Ta.defines),uniforms:Tn.clone(Ta.uniforms),vertexShader:Ta.vertexShader,fragmentShader:Ta.fragmentShader,blending:nn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Rl,this.normalMaterial.blending=nn,this.pdMaterial=new vt({defines:Object.assign({},Ea.defines),uniforms:Tn.clone(Ea.uniforms),vertexShader:Ea.vertexShader,fragmentShader:Ea.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new vt({defines:Object.assign({},wa.defines),uniforms:Tn.clone(wa.uniforms),vertexShader:wa.vertexShader,fragmentShader:wa.fragmentShader,blending:nn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new vt({uniforms:Tn.clone(Ws.uniforms),vertexShader:Ws.vertexShader,fragmentShader:Ws.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ol,blendDst:co,blendEquation:Fn,blendSrcAlpha:Fl,blendDstAlpha:co,blendEquationAlpha:Fn}),this.blendMaterial=new vt({uniforms:Tn.clone(Ic.uniforms),vertexShader:Ic.vertexShader,fragmentShader:Ic.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ia,blendSrc:Ol,blendDst:co,blendEquation:Fn,blendSrcAlpha:Fl,blendDstAlpha:co,blendEquationAlpha:Fn}),this.fsQuad=new Ni(null),this.originalClearColor=new Ie,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new to,this.depthTexture.format=_s,this.depthTexture.type=ys,this.normalRenderTarget=new qt(this.width,this.height,{minFilter:Kt,magFilter:Kt,type:un,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=fd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new Lc,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Ss(s,e,e,Bn,Mi);return r.wrapS=Pn,r.wrapT=Pn,r.needsUpdate=!0,r}};Aa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Rg=58,Zw=82,Cg=94,Kw=9,jw=20,Pg=4.7,Jw=1.95,Qw=3,eE=4,tE=5,Dc=.6;function Xs(n,e,t){return n<e?e:n>t?t:n}function It(n,e=0){return Number.isFinite(n)?n:e}function nE(n,e,t){return n+(e-n)*t}function To(n,e){return 1-Math.exp(-n*e)}function iE(n){return Number.isFinite(n)?Xs(n,0,.1):0}function Ig(n){let e=new V,t=new V,i=new V,s=new V,r={x:1,z:0},o=!1,a=0,l=0,c=0,u=Rg,h=Pg,f=0,p=0,g=0;function x(E,T){let v=It(E.x),w=It(E.y),y=It(E.z),b=It(E.heading)+It(E.yaw),A=Math.sin(b),D=Math.cos(b),O=-D,L=A;r.x=O,r.z=L;let F=E.airborne?1:0,B=T*T,Y=Pg-.3*B+.9*F,W=Jw-.15*B+.7*F;h=Y;let H=Xs(It(E.slope),-.15,.15),ae=Xs(It(E.lean),-1.5,1.5),ve=0;e.set(v-A*Y+O*ve,w+W-H*Y,y-D*Y+L*ve),e.y<w+Dc&&(e.y=w+Dc),t.set(v+A*8.5,w+.55+H*4-1.5*F,y+D*8)}function m(E){return nE(Rg,Zw,Math.pow(E,1.6))}function d(E,T,v,w){n.position.set(i.x+r.x*T,Math.max(i.y+v,w),i.z+r.z*T),n.lookAt(s),n.rotateZ(E)}function S(E,T){if(E=iE(E),!o){M(T);return}a+=E;let v=Xs(It(T.speedRatio),0,1);x(T,v);let w=It(T.x)-f,y=It(T.y)-p,b=It(T.z)-g;w*w+y*y+b*b<400&&(i.x+=w,i.y+=y,i.z+=b,s.x+=w,s.y+=y,s.z+=b),f=It(T.x),p=It(T.y),g=It(T.z),i.lerp(e,To(Kw,E));let A=i.x-It(T.x),D=i.z-It(T.z),O=Math.hypot(A,D);O>.001&&(i.x=It(T.x)+A/O*h,i.z=It(T.z)+D/O*h),s.lerp(t,To(jw,E));let L=It(T.y)+Dc;i.y<L&&(i.y=L),c*=Math.exp(-tE*E);let F=v*v*v*2.2,B=Math.sin(a*61.3)*.6+Math.sin(a*97.1+1.7)*.4,Y=Math.sin(a*73.9+.4)*.6+Math.sin(a*113.7+2.9)*.4,W=Math.sin(a*67.8+1.1)*.6+Math.sin(a*121.4+.3)*.4,H=c*.35+F*.01,ae=B*H,ve=Y*H,Se=W*(c*.03+F*.002);l+=((T.boosting?1:0)-l)*To(eE,E);let ge=m(v),le=ge+(Cg-ge)*l;u+=(le-u)*To(Qw,E),Math.abs(n.fov-u)>1e-4&&(n.fov=u,n.updateProjectionMatrix()),d(Se,ae,ve,L)}function M(E){let T=Xs(It(E.speedRatio),0,1);x(E,T),i.copy(e),s.copy(t),f=It(E.x),p=It(E.y),g=It(E.z),o=!0,a=0,c=0,l=E.boosting?1:0,u=m(T)+(Cg-m(T))*l,n.fov=u,n.updateProjectionMatrix(),d(0,0,0,It(E.y)+Dc)}function _(E){c=Xs(c+It(E),0,1.5)}return{update:S,shake:_,snap:M}}var sE=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,rE=`
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
}`;function Lg(n,e,t,i,s={}){let r=i||{},o=It(r.bloom,.5),a=null,l=null,c=null,u=null,h=0,f=0,p=0,g=0,x=0,m=Math.min(globalThis.devicePixelRatio||1,2);try{let T=n.getSize(new $e),v=new qt(Math.max(1,T.x),Math.max(1,T.y),{type:un,samples:4});if(a=new Rc(n,v),a.setPixelRatio(m),a.addPass(new Cc(e,t)),s.ao&&!r.night){u=new Aa(e,t,Math.max(1,T.x),Math.max(1,T.y)),u.updateGtaoMaterial({radius:3.2,distanceExponent:1.4,thickness:4,scale:1.15,samples:12,screenSpaceRadius:!1}),u.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),u.blendIntensity=.6;let w=u.overrideVisibility.bind(u);u.overrideVisibility=()=>{w(),e.traverse(y=>{let b=Array.isArray(y.material)?y.material[0]:y.material;(y.isSprite||b&&(b.depthWrite===!1||b.blending===vs))&&(y.visible=!1)})},a.addPass(u)}l=new So(new $e(512,512),o*.8,.75,.9),a.addPass(l),c=new bo({uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uBoost:{value:0},uTime:{value:0}},vertexShader:sE,fragmentShader:rE}),a.addPass(c),a.addPass(new Pc)}catch(T){console.warn("Post-traitement indisponible, rendu direct :",T),a=null,l=null,c=null}function d(T,v){!Number.isFinite(T)||!Number.isFinite(v)||T<=0||v<=0||(m=Math.min(globalThis.devicePixelRatio||1,2),n.setPixelRatio(m),n.setSize(T,v),a&&(a.setPixelRatio(m),a.setSize(T,v)))}function S(T,v){h=Xs(It(T,0),0,1),f=v?1:0}function M(T){if(T=Number.isFinite(T)?Xs(T,0,.1):0,x+=T,p+=(h-p)*To(8,T),g+=(f-g)*To(8,T),c&&(c.uniforms.uSpeed.value=p,c.uniforms.uBoost.value=g,c.uniforms.uTime.value=x),a)try{a.render(T);return}catch(v){console.warn("\xC9chec du post-traitement, rendu direct :",v),a=null}n.render(e,t)}function _(T){u&&(u.enabled=!!T)}function E(){u&&u.dispose&&u.dispose(),a&&a.dispose(),l&&l.dispose&&l.dispose(),c&&c.dispose&&c.dispose(),a=null}return{render:M,setSize:d,setSpeed:S,dispose:E,setAO:_,get hasAO(){return!!u},get aoOn(){return!!u&&u.enabled}}}function Dg(n){if(!Number.isFinite(n))return`--'--"---`;let e=Math.floor(n/60),t=Math.floor(n%60),i=Math.floor(n*1e3%1e3);return`${String(e).padStart(2,"0")}'${String(t).padStart(2,"0")}"${String(i).padStart(3,"0")}`}var Gt=(n,e,t,i)=>{let s=document.createElement(n);return e&&(s.className=e),i!=null&&(s.textContent=i),t?.appendChild(s),s};function Ng(n){let e=Gt("div","h2-root",n);e.hidden=!0;let t=Gt("div","h2-pos",e),i=Gt("span","h2-pos-num",t,"1"),s=Gt("span","h2-pos-tot",t,"/8");Gt("span","h2-pos-lbl",t,"POS");let r=Gt("div","h2-right",e),o=Gt("div","h2-pill h2-lap",r),a=Gt("span","h2-lap-lbl",o,"TOUR"),l=Gt("span","h2-lap-num",o,"1"),c=Gt("span","h2-lap-tot",o,"/3"),u=Gt("div","h2-pill h2-time",r,`00'00"000`),h=Gt("div","h2-best",r,""),f=Gt("canvas","h2-map",e),p=220;f.width=f.height=p;let g=f.getContext("2d"),x=document.createElement("canvas");x.width=x.height=p;let m=null,d=1,S=0,M=0,_=Gt("div","h2-dial",e),E=Gt("canvas","h2-dial-canvas",_),T=300;E.width=E.height=T;let v=E.getContext("2d"),w=Gt("div","h2-gear",_,"1"),y=Gt("div","h2-speed",_,"0");Gt("div","h2-unit",_,"km/h");let b=Gt("div","h2-boost",_),A=[],D=Gt("div","h2-count",e,""),O=Gt("div","h2-flash",e,""),L=Gt("div","h2-wrong",e,"CONTRESENS");L.hidden=!0;let F={},B=(I,$,q)=>{F[I]!==q&&(F[I]=q,$.textContent=q)},Y=Math.PI*.75,W=Math.PI*2.25,H=-1;function ae(I){let $=Math.round(I*120)/120;if($===H)return;H=$;let q=T/2,ee=T*.44;v.clearRect(0,0,T,T),v.lineCap="butt",v.beginPath(),v.arc(q,q,ee*1.05,0,Math.PI*2),v.fillStyle="rgba(8, 10, 16, 0.42)",v.fill();let pe=(X,He,ke,Ue)=>{v.beginPath(),v.arc(q,q,ee,X,He),v.strokeStyle=ke,v.lineWidth=Ue,v.stroke()},we=Y+(W-Y)*.86;pe(Y,we,"rgba(255,255,255,0.28)",T*.05),pe(we,W,"rgba(226,40,48,0.55)",T*.05);let Me=Y+(W-Y)*Math.min(1,Math.max(0,$));pe(Y,Math.min(Me,we),"#ffffff",T*.05),Me>we&&pe(we,Me,"#e8242e",T*.05);for(let X=0;X<=8;X++){let He=Y+(W-Y)*X/8;v.beginPath(),v.moveTo(q+Math.cos(He)*ee*.8,q+Math.sin(He)*ee*.8),v.lineTo(q+Math.cos(He)*ee*.9,q+Math.sin(He)*ee*.9),v.strokeStyle=X>=7?"#e8242e":"rgba(255,255,255,0.75)",v.lineWidth=3,v.stroke()}v.beginPath(),v.moveTo(q+Math.cos(Me)*ee*.3,q+Math.sin(Me)*ee*.3),v.lineTo(q+Math.cos(Me)*ee*.98,q+Math.sin(Me)*ee*.98),v.strokeStyle="#ffffff",v.lineWidth=4,v.stroke()}ae(0);function ve(I){m=I;let $=I.bounds,q=$.maxX-$.minX,ee=$.maxZ-$.minZ;d=(p-36)/Math.max(q,ee),S=(p-q*d)/2-$.minX*d,M=(p-ee*d)/2-$.minZ*d;let pe=x.getContext("2d");pe.clearRect(0,0,p,p);let we=()=>{pe.beginPath(),I.pts.forEach((Me,X)=>{let He=Me.x*d+S,ke=Me.z*d+M;X?pe.lineTo(He,ke):pe.moveTo(He,ke)}),I.open||pe.closePath()};pe.lineJoin="round",we(),pe.strokeStyle="rgba(0,0,0,0.45)",pe.lineWidth=9,pe.stroke(),we(),pe.strokeStyle="#ffffff",pe.lineWidth=5,pe.stroke(),we(),pe.strokeStyle="rgba(20,24,34,0.9)",pe.lineWidth=2,pe.stroke(),g.clearRect(0,0,p,p),g.drawImage(x,0,0)}function Se(I){if(!m)return;g.clearRect(0,0,p,p),g.drawImage(x,0,0);let $=m.pts.length,q=(ee,pe)=>{let we=Math.floor((ee.s%m.length+m.length)%m.length/m.step);we>=$&&(we=$-1);let Me=m.pts[we],X=Me.x*d+S,He=Me.z*d+M;g.beginPath(),g.arc(X,He,pe?6:3.6,0,Math.PI*2),g.fillStyle=pe?"#e8242e":"#ffffff",g.fill(),g.lineWidth=1.5,g.strokeStyle="rgba(0,0,0,0.6)",g.stroke()};for(let ee of I)ee.isPlayer||q(ee,!1);for(let ee of I)ee.isPlayer&&q(ee,!0)}let ge=null;function le(I){B("pos",i,String(I.position)),B("tot",s,"/"+I.total),B("lap",l,String(I.lap)),B("laps",c,"/"+I.laps),B("time",u,Dg(I.time)),B("best",h,I.bestLap?"MEILLEUR "+Dg(I.bestLap):""),B("speed",y,String(Math.round(I.speedKmh))),B("gear",w,String(I.gear||1)),ae(I.rpm??Math.min(1,I.speedKmh/290));let $=I.boostCharges|0,q=I.boostT>0?1:0,ee=$+":"+q;if(F.boost!==ee){for(F.boost=ee;A.length<$+q;)A.push(Gt("span","h2-boost-dot",b));A.forEach((pe,we)=>{pe.hidden=we>=$+q,pe.classList.toggle("h2-on",q&&we===$)})}if(I.countdown===null||I.countdown===void 0)ge===null&&F.count!==""&&(F.count="",D.textContent="",D.classList.remove("h2-show"));else if(I.countdown>0){let pe=String(Math.ceil(I.countdown));F.count!==pe&&(F.count=pe,D.textContent=pe,D.classList.remove("h2-show"),D.offsetWidth,D.classList.add("h2-show"))}else F.count!=="GO !"&&(F.count="GO !",D.textContent="GO !",D.classList.remove("h2-show"),D.offsetWidth,D.classList.add("h2-show"),clearTimeout(ge),ge=setTimeout(()=>{ge=null},800));L.hidden===!!I.wrongWay&&(L.hidden=!I.wrongWay)}let se=null;function re(I,$=900){O.textContent=I,O.classList.remove("h2-show"),O.offsetWidth,O.classList.add("h2-show"),clearTimeout(se),se=setTimeout(()=>O.classList.remove("h2-show"),$)}return{show(){e.hidden=!1},hide(){e.hidden=!0},update:le,setTrack:ve,updateMinimap:Se,flash:re,setLapLabel(I){a.textContent!==I&&(a.textContent=I)},dispose(){e.remove()}}}var oR=cr.maxSpeed*3.6;var Ug=360;var Fg=n=>(n<10?"0":"")+n;function dd(n){if(n==null||!Number.isFinite(n))return"--:--.--";let e=Math.max(0,Math.floor(n*100+1e-6)),t=Math.floor(e/6e3),i=Math.floor(e/100)%60;return`${t}:${Fg(i)}.${Fg(e%100)}`}var aR=`
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
`;var Og="ABCDEFGHJKMNPQRSTUVWXYZ23456789",Bg=0;function pd(){Bg++;let n=Yn((Date.now()^Math.imul(Bg,2654435761))>>>0),e="RUSH-";for(let t=0;t<4;t++)e+=Og[n.int(0,Og.length-1)];return e}var ft=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function zg(n){return n?typeof n=="string"?Is[n]?.name||n:n.name||Is[n.id]?.name||"":""}function oE(n){return n&&typeof n=="object"?n:ur.find(e=>e.id===n)||{id:String(n),name:String(n),icon:"\u2022"}}function md(n){let e=new Map;for(let i of n||[]){let s=oE(i),r=e.get(s.id);r?r.n++:e.set(s.id,{info:s,n:1})}if(!e.size)return'<span class="pr-own-none">Aucune pour l\u2019instant</span>';let t="";for(let{info:i,n:s}of e.values())t+=`<span class="pr-own">${ft(i.icon)} ${ft(i.name)}${s>1?` \xD7${s}`:""}</span>`;return t}function gd(n){return(n||[]).map((e,t)=>`<li class="pr-srow${e.isPlayer?" pr-me":""}" style="--i:${t}"><span class="pr-rk">${t+1}</span><span class="pr-rn">${ft(e.name)}</span><span class="pr-rp">${e.points??0}<small> pts</small></span></li>`).join("")}function kg(n){let e=document.createElement("div");e.className="pr-menu pr-off",n.appendChild(e);let t=null,i=null;function s(M){try{t&&typeof t.play=="function"&&t.play(M)}catch{}}function r(M,_){let E=i;if(!E||!E.items.length)return;let T=E.items.length,v=(M%T+T)%T,w=v!==E.index;E.index=v,E.focused=!0;for(let y=0;y<T;y++)E.items[y].classList.toggle("pr-sel",y===v);try{E.items[v].focus({preventScroll:!0})}catch{}w&&_&&s("select")}function o(M){let _=i;_&&(i=null,e.innerHTML="",e.classList.add("pr-off"),s("confirm"),_.resolve(M))}function a(M){return i=null,e.innerHTML=M.html,e.classList.remove("pr-off"),new Promise(_=>{i={items:Array.from(e.querySelectorAll("[data-nav]")),index:0,focused:!1,actions:M.actions||{},resolve:_},M.onMount&&M.onMount(e,o),r(M.initial||0,!1)})}e.addEventListener("click",M=>{let _=i;if(!_||!(M.target instanceof Element))return;let E=M.target.closest("[data-act]");if(!E||!e.contains(E)||E.disabled)return;let T=_.items.indexOf(E);T>=0&&T!==_.index&&r(T,!1);let v=_.actions[E.dataset.act];v&&v(E,o)}),e.addEventListener("mouseover",M=>{let _=i;if(!_||!(M.target instanceof Element))return;let E=M.target.closest("[data-nav]");if(!E)return;let T=_.items.indexOf(E);T>=0&&T!==_.index&&r(T,!0)}),window.addEventListener("keydown",M=>{let _=i;if(!_)return;let E=M.target,T=!!E&&E.tagName==="INPUT",v=M.key||"",w=v.toLowerCase();if(v==="ArrowUp"||!T&&(v==="ArrowLeft"||w==="z"||w==="q")){M.preventDefault(),r(_.index-1,!0);return}if(v==="ArrowDown"||!T&&(v==="ArrowRight"||w==="s"||w==="d")){M.preventDefault(),r(_.index+1,!0);return}if(T){if(v==="Enter"){M.preventDefault();let y=e.querySelector("[data-main]");y&&y.click()}return}if(v.length===1){let y=_.items.find(b=>b.dataset.key===v);y&&(M.preventDefault(),y.click())}});function l({dailySeed:M,meta:_,route:E=null,records:T=null}={}){let v=_||{};if(E)return f(E,v,T||{});let w=String(M||"RUSH-DAILY").toUpperCase(),y=pd();return a({initial:2,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">Arcade \xB7 Proc\xE9dural \xB7 Roguelite</p>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-seed-in">Seed du run</label>
    <div class="pr-seedbox">
      <input id="pr-seed-in" class="pr-input" type="text" value="${ft(y)}" maxlength="16" autocomplete="off" spellcheck="false" data-nav data-seed>
      <button type="button" class="pr-btn pr-btn-ico" data-nav data-act="dice" title="Nouvelle seed al\xE9atoire" aria-label="Nouvelle seed al\xE9atoire">\u{1F3B2}</button>
    </div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="launch">Lancer le run</button>
    <button type="button" class="pr-btn" data-nav data-act="daily">D\xE9fi du jour<small>${ft(w)}</small></button>
  </div>
  <div class="pr-stats pr-slide" style="--i:4">
    <div><b>${v.runs??0}</b><span>runs</span></div>
    <div><b>${v.wins??0}</b><span>victoires</span></div>
    <div><b>${v.bestPoints??0}</b><span>record de points</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage</p>
</section>`,actions:{dice:b=>{let A=b.closest(".pr-screen").querySelector("[data-seed]");A&&(A.value=pd())},launch:(b,A)=>{let D=b.closest(".pr-screen").querySelector("[data-seed]"),O=(D?D.value:"").trim().toUpperCase();O||(O=pd()),A({seed:O})},daily:(b,A)=>A({seed:w})}})}let c=M=>`${Math.floor(M/60)}'${String(Math.floor(M%60)).padStart(2,"0")}"`,u=M=>M==null?"":` <small>${M<0?"\u2212":"+"}${Math.abs(M).toFixed(1)} s</small>`;function h(M){if(!M)return"";let _='<li style="display:flex;justify-content:space-between;gap:1.5em">',E=M.splits.map((v,w)=>`${_}<span>${w+1} \xB7 ${ft(v.name.split(" \xB7 ")[0])}</span><b>${ft(c(v.time))}${u(v.delta)}${v.record&&v.best!==null?" \u2605":""}</b></li>`).join(""),T;return M.total?M.total.best===null?T=`Temps total <b>${ft(c(M.time))}</b> \xB7 premier chrono enregistr\xE9`:M.total.record?T=`Temps total <b>${ft(c(M.time))}</b> \xB7 <b>nouveau record</b>${u(M.total.delta)}`:T=`Temps total <b>${ft(c(M.time))}</b> \xB7 record ${ft(c(M.total.best))}${u(M.total.delta)}`:T=`Temps <b>${ft(c(M.time))}</b> \xB7 le record de l'itin\xE9raire ne compte que depuis Catane`,`<p class="pr-sub">${T}</p><ul style="list-style:none;margin:.6em 0;padding:0;display:grid;gap:.25em;font-size:.82em;text-align:left">${E}</ul>`}function f(M,_,E){let T=Object.keys(E.splits||{}).length,v=(M.stages.reduce((y,b)=>y+b.length,0)/1e3).toFixed(0),w=M.stages.map((y,b)=>`<option value="${b+1}">${b+1} \xB7 ${ft(y.subtitle)}</option>`).join("");return a({initial:1,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">${ft(M.title)} \xB7 ${ft(M.roads)} \xB7 ${v} km d'une traite</p>
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
    <div><b>${E.total?ft(c(E.total)):"\u2013"}</b><span>record Catania \u2192 Falcone</span></div>
    <div><b>${E.finishes??0}</b><span>arriv\xE9es</span></div>
    <div><b>${T}</b><span>chronos de tron\xE7on</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage \xB7 1 2 3 am\xE9lioration aux relais</p>
</section>`,actions:{launch:(y,b)=>{let A=y.closest(".pr-screen").querySelector("[data-from]");b({seed:"A18-A20",stage:Number(A?A.value:1)||1})},multi:(y,b)=>b({multi:!0})}})}function p({stage:M={},index:_=1,total:E=1,standings:T=[],weather:v}={}){let w=zg(v)||zg(M.weather),y=M.laps??0;return a({initial:0,html:`
<section class="pr-screen pr-stage">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in pr-stage-main">
    <div class="pr-kicker">${M.real?"Itin\xE9raire r\xE9el":`\xC9tape ${ft(_)}/${ft(E)}`}</div>
    <h2 class="pr-h2">${ft(M.name)}</h2>
    <p class="pr-sub">${ft(M.subtitle)}</p>
    <dl class="pr-facts">
      <div><dt>M\xE9t\xE9o</dt><dd>${ft(w)}</dd></div>
      ${M.real?`<div><dt>Tron\xE7ons</dt><dd>${M.real.length} encha\xEEn\xE9s sans arr\xEAt</dd></div>
      <div><dt>D\xE9part</dt><dd>${ft(M.real[0].subtitle.split(" \xB7 ")[0])}</dd></div>`:`<div><dt>Tours</dt><dd>${ft(y)} ${y>1?"tours":"tour"}</dd></div>
      <div><dt>Seed du circuit</dt><dd>${ft(M.trackSeed)}</dd></div>`}
    </dl>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="go">D\xE9part</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${gd(T)}</ol>
  </div></div>
</section>`,actions:{go:(b,A)=>A(void 0)}})}function g({results:M=[],standings:_=[],stage:E={}}={}){let v=[...M].sort((w,y)=>(w.position??99)-(y.position??99)).map((w,y)=>{let b=Gl[(w.position??0)-1]??0;return`<tr class="pr-tr${w.isPlayer?" pr-me":""}" style="--i:${y}"><td class="pr-c-pos">${ft(w.position??"")}</td><td class="pr-c-name">${ft(w.name)}</td><td class="pr-c-tm">${w.time==null?"Abandon":dd(w.time)}</td><td class="pr-c-best">${w.bestLap==null?"\u2014":dd(w.bestLap)}</td><td class="pr-c-pts">${b>0?"+"+b:"0"}</td></tr>`}).join("");return a({initial:0,html:`
<section class="pr-screen pr-results">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-kicker">R\xE9sultats \xB7 ${ft(E.name)}</div>
    <table class="pr-table">
      <thead><tr><th>Pos</th><th>Pilote</th><th>Temps</th><th>Meilleur tour</th><th>Pts</th></tr></thead>
      <tbody>${v}</tbody>
    </table>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="next">Continuer</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${gd(_)}</ol>
  </div></div>
</section>`,actions:{next:(w,y)=>y(void 0)}})}function x({choices:M=[],index:_=1,total:E=1,owned:T=[]}={}){let v=M.map((w,y)=>`<button type="button" class="pr-card pr-slide" style="--i:${y}" data-nav data-key="${y+1}" data-act="pick" data-id="${ft(w.id)}"><span class="pr-card-in"><span class="pr-card-key">${y+1}</span><span class="pr-card-ico" aria-hidden="true">${ft(w.icon)}</span><span class="pr-card-name">${ft(w.name)}</span><span class="pr-card-tag">${ft(w.tagline)}</span><span class="pr-card-pro">\u25B2 ${ft(w.pro)}</span><span class="pr-card-con">\u25BC ${ft(w.con)}</span></span></button>`).join("");return a({initial:0,html:`
<section class="pr-screen pr-upg">
  <div class="pr-kicker pr-slide" style="--i:0">\xC9tape ${ft(_)}/${ft(E)} accomplie</div>
  <h2 class="pr-h2 pr-slide" style="--i:0">Choisissez une am\xE9lioration</h2>
  <div class="pr-cards">${v}</div>
  <div class="pr-owned pr-slide" style="--i:3"><span class="pr-owned-lbl">D\xE9j\xE0 poss\xE9d\xE9es</span>${md(T)}</div>
</section>`,actions:{pick:(w,y)=>y(w.dataset.id)}})}function m({standings:M=[],playerPosition:_,run:E={},meta:T}={}){let v=T||{},w=_??M.findIndex(A=>A.isPlayer)+1,y=w===1,b=E.real?y?"Victoire !":`${ft(w)}e \xE0 l'arriv\xE9e`:y?"Champion !":`${ft(w)}e au championnat`;return a({initial:E.real?0:1,html:`
<section class="pr-screen pr-end">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-end-title${y?" pr-gold":""}">${b}</div>
    <ol class="pr-slist pr-slist-big">${gd(M)}</ol>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    ${E.real?`<h3 class="pr-h3">${ft(E.stages[0].name)}</h3>
    <p class="pr-sub">${ft(E.stages[0].subtitle)}</p>${h(E.summary)}
    <h3 class="pr-h3">Am\xE9liorations prises</h3>
    <div class="pr-owned-list">${md(E.upgrades)}</div>`:`<h3 class="pr-h3">Am\xE9liorations du run</h3>
    <div class="pr-owned-list">${md(E.upgrades)}</div>
    <h3 class="pr-h3">Seed</h3>
    <div class="pr-seedline">
      <code class="pr-seedcode">${ft(E.seed)}</code>
      <button type="button" class="pr-btn pr-btn-small" data-nav data-act="copy">Copier la seed</button>
    </div>`}
    ${E.real?"":`<p class="pr-cmds">Runs : ${v.runs??0} \xB7 Victoires : ${v.wins??0} \xB7 Record : ${v.bestPoints??0} pts</p>`}
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="again">${E.real?"Repartir":"Nouveau run"}</button>
  </div></div>
</section>`,actions:{copy:A=>{let D="Copier la seed",O;try{O=navigator.clipboard.writeText(String(E.seed??""))}catch(F){O=Promise.reject(F)}let L=F=>{A.textContent=F,setTimeout(()=>{A.isConnected&&(A.textContent=D)},1500)};O.then(()=>L("Copi\xE9e !"),()=>L("Copie impossible"))},again:(A,D)=>D(void 0)}})}function d(M){t=M||null}function S(){i=null,e.innerHTML="",e.classList.add("pr-off")}return{showTitle:l,showStageIntro:p,showResults:g,showUpgradeChoice:x,showRunEnd:m,hideAll:S,setAudio:d,mount:a}}var Hg=typeof globalThis<"u"&&(globalThis.AudioContext||globalThis.webkitAudioContext)||null,Vg=.6,aE=.3,xd=6,yr=55,lE=.1,cE=25,Gg=60/128/4,uE=[{root:45,iv:[3,7]},{root:41,iv:[4,7]},{root:48,iv:[4,7]},{root:43,iv:[4,7]}],wo=n=>Number.isFinite(n)?n<0?0:n>1?1:n:0,Wg=n=>440*Math.pow(2,(n-69)/12);function hE(n){let t=new Float32Array(1024);for(let i=0;i<1024;i++){let s=i*2/1023-1;t[i]=(1+n)*s/(1+n*Math.abs(s))}return t}function Xg(){let n=null,e=!1,t=null,i=null,s=null,r=null,o=null,a=null,l=null,c=!1,u=!1,h=null,f=0,p=0,g=-1,x=0,m=0,d=0;function S(I){let $=Math.round(2*I),q=Math.round(.1*I),ee=new Float32Array($+q),pe=0,we=0,Me=0,X=0,He=0,ke=0,Ue=0;for(let R=0;R<$+q;R++){let te=Math.random()*2-1;pe=.99886*pe+te*.0555179,we=.99332*we+te*.0750759,Me=.969*Me+te*.153852,X=.8665*X+te*.3104856,He=.55*He+te*.5329522,ke=-.7616*ke-te*.016898,ee[R]=(pe+we+Me+X+He+ke+Ue+te*.5362)*.11,Ue=te*.115926}let Ae=n.createBuffer(1,$,I),qe=Ae.getChannelData(0),Fe=0;for(let R=0;R<$;R++){let te=R<q?ee[R]*(R/q)+ee[$+R]*(1-R/q):ee[R];qe[R]=te;let _e=Math.abs(te);_e>Fe&&(Fe=_e)}let U=Fe>0?1/Fe:1;for(let R=0;R<$;R++)qe[R]*=U;return Ae}function M(I){let $=n.createBufferSource();return $.buffer=i,$.loop=!0,$.connect(I),$.start(0,Math.random()*1.5),$}function _(I){let $=n.createGain();return $.gain.value=I,$}function E(I,$,q){let ee=n.createBiquadFilter();return ee.type=I,ee.frequency.value=$,ee.Q.value=q,ee}function T(){i=S(n.sampleRate),t=_(c?0:Vg);let I=n.createDynamicsCompressor();I.threshold.value=-16,I.knee.value=12,I.ratio.value=4,I.attack.value=.005,I.release.value=.2,t.connect(I),I.connect(n.destination);let $=n.createOscillator();$.type="sawtooth",$.frequency.value=yr,$.detune.value=-6;let q=n.createOscillator();q.type="sawtooth",q.frequency.value=yr,q.detune.value=6;let ee=n.createOscillator();ee.type="square",ee.frequency.value=yr/2;let pe=_(1);$.connect(_(.28)).connect(pe),q.connect(_(.28)).connect(pe),ee.connect(_(.22)).connect(pe);let we=E("bandpass",yr*4,1.2),Me=_(.04);M(we),we.connect(Me).connect(pe);let X=n.createWaveShaper();X.curve=hE(4),X.oversample="2x",pe.connect(X);let He=E("lowpass",300,1.3);X.connect(He);let ke=_(0);He.connect(ke).connect(t),$.start(),q.start(),ee.start(),s={osc1:$,osc2:q,osc3:ee,nBp:we,nGain:Me,lp:He,gain:ke};let Ue=E("bandpass",300,.7),Ae=_(0);M(Ue),Ue.connect(Ae).connect(t),r={filter:Ue,gain:Ae};let qe=E("bandpass",1100,4),Fe=_(3),U=_(0);M(qe),qe.connect(Fe).connect(U).connect(t),o={filter:qe,gain:U};let R=E("highpass",900,.5),te=_(3),_e=_(0);M(R),R.connect(te).connect(_e).connect(t),a={gain:_e},l=_(0),l.connect(t),e=!0}function v(I,$,q){let ee=n.currentTime;I.cancelScheduledValues(ee),I.setTargetAtTime($,ee,q)}function w(I){let $=I.t0,q=I.dur,ee=n.createOscillator();ee.type=I.type||"sine",ee.frequency.setValueAtTime(I.f0,$),I.f1&&ee.frequency.exponentialRampToValueAtTime(I.f1,$+q);let pe=n.createGain();pe.gain.setValueAtTime(1e-4,$),pe.gain.linearRampToValueAtTime(I.vol,$+(I.attack||.004)),pe.gain.exponentialRampToValueAtTime(1e-4,$+q);let we=ee;if(I.lp){let Me=E("lowpass",I.lp,.7);ee.connect(Me),we=Me}we.connect(pe),pe.connect(t),ee.start($),ee.stop($+q+.02)}function y(I){let $=I.t0,q=I.dur,ee=n.createBufferSource();ee.buffer=i;let pe=E(I.type,I.f0,I.q||1);I.f1&&pe.frequency.exponentialRampToValueAtTime(I.f1,$+q),pe.frequency.setValueAtTime(I.f0,$);let we=n.createGain();we.gain.setValueAtTime(1e-4,$),we.gain.linearRampToValueAtTime(I.vol,$+.004),we.gain.exponentialRampToValueAtTime(1e-4,$+q),ee.connect(pe),pe.connect(we),we.connect(t),ee.start($,Math.random()*1.5,q+.02)}function b(I,$){let q=n.createBufferSource();q.buffer=i;let ee=E("bandpass",700+Math.random()*900,1.2),pe=n.createGain();pe.gain.setValueAtTime(0,I),pe.gain.linearRampToValueAtTime($,I+.003),pe.gain.linearRampToValueAtTime(0,I+.03),q.connect(ee),ee.connect(pe),pe.connect(t),q.start(I,Math.random()*1.5,.05)}let A={beep(I){w({type:"square",f0:440,t0:I,dur:.12,vol:.12,lp:2400})},go(I){w({type:"sawtooth",f0:880,t0:I,dur:.4,vol:.12,lp:3e3}),w({type:"sine",f0:1320,t0:I,dur:.4,vol:.06}),w({type:"sine",f0:1760,t0:I+.02,dur:.25,vol:.04}),y({t0:I,dur:.05,vol:.1,type:"highpass",f0:3e3,q:.7})},boost(I){y({t0:I,dur:.6,vol:.25,type:"bandpass",f0:300,f1:3e3,q:1.2}),w({type:"sawtooth",f0:150,f1:600,t0:I,dur:.6,vol:.1,lp:1500,attack:.02})},jump(I){y({t0:I,dur:.25,vol:.2,type:"bandpass",f0:400,f1:1600,q:1})},land(I){w({type:"sine",f0:90,f1:50,t0:I,dur:.2,vol:.6,attack:.002}),y({t0:I,dur:.2,vol:.3,type:"lowpass",f0:800,q:.7})},hit(I){y({t0:I,dur:.08,vol:.3,type:"highpass",f0:2e3,q:.7});let $=340,q=[[1,.12,.35],[2.76,.08,.25],[5.4,.05,.2],[8.93,.03,.15]];for(let[ee,pe,we]of q)w({type:"sine",f0:$*ee,t0:I,dur:we,vol:pe,attack:.001})},select(I){w({type:"sine",f0:2400,t0:I,dur:.03,vol:.15,attack:.002})},confirm(I){w({type:"triangle",f0:660,t0:I,dur:.12,vol:.2}),w({type:"triangle",f0:990,t0:I+.09,dur:.18,vol:.2})},win(I){[523,659,784,1047,1319].forEach((q,ee)=>{let pe=ee<4?.13:.5,we=I+ee*.11;w({type:"square",f0:q,t0:we,dur:pe,vol:.1,lp:2500}),w({type:"triangle",f0:q,t0:we,dur:pe,vol:.12})})},lose(I){[392,330,262].forEach(($,q)=>{w({type:"triangle",f0:$,t0:I+q*.22,dur:.3,vol:.25,attack:.01})})},pad(I){w({type:"sawtooth",f0:300,f1:1500,t0:I,dur:.15,vol:.12,lp:4e3})},lap(I){w({type:"sine",f0:1e3,t0:I,dur:.08,vol:.2}),w({type:"sine",f0:1e3,t0:I+.15,dur:.08,vol:.2})}};function D(I){let $=n.createOscillator();$.type="sine",$.frequency.setValueAtTime(150,I),$.frequency.exponentialRampToValueAtTime(45,I+.12);let q=n.createGain();q.gain.setValueAtTime(.5,I),q.gain.exponentialRampToValueAtTime(.001,I+.3),$.connect(q),q.connect(l),$.start(I),$.stop(I+.32)}function O(I,$){let q=n.createBufferSource();q.buffer=i;let ee=E("highpass",7e3,.7),pe=n.createGain();pe.gain.setValueAtTime($,I),pe.gain.exponentialRampToValueAtTime(.001,I+.04),q.connect(ee),ee.connect(pe),pe.connect(l),q.start(I,Math.random()*1.5,.05)}function L(I,$,q){let ee=n.createOscillator();ee.type="sawtooth",ee.frequency.value=$;let pe=E("lowpass",1e3,6);pe.frequency.setValueAtTime(1e3,I),pe.frequency.exponentialRampToValueAtTime(180,I+q);let we=n.createGain();we.gain.setValueAtTime(1e-4,I),we.gain.linearRampToValueAtTime(.16,I+.01),we.gain.exponentialRampToValueAtTime(1e-4,I+q),ee.connect(pe),pe.connect(we),we.connect(l),ee.start(I),ee.stop(I+q+.02)}function F(I,$){let q=n.createOscillator();q.type="triangle",q.frequency.value=$;let ee=n.createGain();ee.gain.setValueAtTime(1e-4,I),ee.gain.linearRampToValueAtTime(.035,I+.005),ee.gain.exponentialRampToValueAtTime(1e-4,I+.11),q.connect(ee),ee.connect(l),q.start(I),q.stop(I+.13)}function B(I,$){let q=I&15,ee=uE[I>>4&3];if(q%4===0&&D($),q%2===1&&O($,q%4===2?.1:.05),q%2===0){let pe=q===6||q===14?12:0;L($,Wg(ee.root+pe),Gg*1.8);let we=[0,ee.iv[0],ee.iv[1],12];F($,Wg(ee.root+24+we[q>>1&3]))}}function Y(){if(!e||!u)return;let I=n.currentTime;f<I&&(f=I+.02);let $=I+lE;for(;f<$;)B(p,f),f+=Gg,p++}function W(){if(!e){if(!Hg)return;try{n=new Hg,T()}catch{n=null,e=!1;return}}if(n.state==="suspended")try{let I=n.resume();I&&I.catch&&I.catch(()=>{})}catch{}}function H(I,$){if(!e)return;I=wo(I),$=wo($);let q=n.currentTime,ee=I*xd,pe=Math.min(xd-1,Math.floor(ee)),Me=.45+.55*Math.min(1,ee-pe),X=wo(I/.08),He=yr+(yr*Math.pow(xd,Me)-yr)*X,ke=.5*I+.5*$,Ue=260+3200*Math.pow(ke,1.3),Ae=.07+.2*I*(.35+.65*$)+.03*$;if(v(s.osc1.frequency,He,.04),v(s.osc2.frequency,He,.04),v(s.osc3.frequency,He*.5,.04),v(s.nBp.frequency,He*4,.05),v(s.nGain.gain,.04+.22*$,.05),v(s.lp.frequency,Ue,.05),g!==-1&&pe!==g){let qe=s.gain.gain;qe.cancelScheduledValues(q),qe.setTargetAtTime(Ae*.35,q,.004),qe.setTargetAtTime(Ae,q+.06,.03),x=q+.12}if(g=pe,q>=x&&v(s.gain.gain,Ae,.05),$>=m)m=$;else if(m-$>.3){if(I>.6&&q>=d){let qe=.12+.2*I;for(let Fe=0;Fe<3;Fe++)b(q+Fe*.05+Math.random()*.02,qe*(1-Fe*.2));d=q+.4}m=$}}function ae(I){if(!e)return;let $=wo(I),q=$*$;v(r.filter.frequency,250+1600*q,.2),v(r.gain.gain,.03+.35*q,.15)}function ve(I){if(!e)return;let $=wo(I);v(o.filter.frequency,900+500*$,.05),v(o.gain.gain,$,.03)}function Se(I){e&&v(a.gain.gain,wo(I)*.25,.1)}function ge(I){e&&Object.prototype.hasOwnProperty.call(A,I)&&A[I](n.currentTime+.01)}function le(I){c=!!I,e&&v(t.gain,c?0:Vg,.015)}function se(){e&&(u||(u=!0,p=0,f=n.currentTime+.05),v(l.gain,aE,.05),h||(h=setInterval(Y,cE)),Y())}function re(){u=!1,h&&(clearInterval(h),h=null),e&&v(l.gain,0,.05)}return{resume:W,setEngine:H,setWind:ae,setSkid:ve,setRain:Se,play:ge,setMuted:le,startMusic:se,stopMusic:re}}var vd=1/120,Dn=new URLSearchParams(location.search),fE=document.getElementById("game"),wi=new Ml({canvas:fE,antialias:!0,powerPreference:"high-performance"});wi.setPixelRatio(Math.min(window.devicePixelRatio,2));wi.shadowMap.enabled=!0;wi.shadowMap.type=Ul;wi.toneMapping=sa;wi.toneMappingExposure=1.05;wi.outputColorSpace=Rt;var kt=new Jo,Nn=new Zt(70,1,.3,6e3);kt.add(Nn);var qs=Ig(Nn),Jg=document.getElementById("ui"),tn=Ng(Jg),Fi=kg(Jg),zt=Xg();Fi.setAudio?.(zt);var Bc=new Set,pn={throttle:0,brake:0,steer:0,boost:!1,drift:!1};var dE=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement)){if(Bc.add(n.code),Wt==="race"&&dE.includes(n.code)&&n.preventDefault(),Ys?.active){let e=["Digit1","Digit2","Digit3","Numpad1","Numpad2","Numpad3"].indexOf(n.code);e>=0&&Ys.pick(e%3)}n.code==="KeyM"&&(Fc=!Fc,zt.setMuted(Fc)),(n.code==="KeyP"||n.code==="Escape")&&Wt==="race"&&(Sd=!Sd)}});addEventListener("keyup",n=>Bc.delete(n.code));addEventListener("blur",()=>Bc.clear());addEventListener("pointerdown",()=>zt.resume(),{once:!1});var Fc=Dn.has("mute");Fc&&zt.setMuted(!0);var Sd=!1;function pE(n){let e=(...s)=>s.some(r=>Bc.has(r));pn.throttle=e("ArrowUp","KeyW")?1:0,pn.brake=e("ArrowDown","KeyS")?1:0;let t=(e("ArrowRight","KeyD")?1:0)-(e("ArrowLeft","KeyA")?1:0);pn.steer=t,pn.boost=e("Space"),pn.drift=e("ShiftLeft","ShiftRight","KeyX");let i=navigator.getGamepads?.()[0];if(i){let s=i.axes[0]||0;Math.abs(s)>.12&&(pn.steer=s),pn.throttle=Math.max(pn.throttle,i.buttons[7]?.value||0,i.buttons[0]?.pressed?1:0),pn.brake=Math.max(pn.brake,i.buttons[6]?.value||0),pn.boost=pn.boost||!!i.buttons[2]?.pressed,pn.drift=pn.drift||!!i.buttons[1]?.pressed||!!i.buttons[5]?.pressed}return pn}function mE(n){let e=new Jo,t=new Es(50,32,16),i=new V(...n.sunDir).normalize(),s=new vt({side:Qt,uniforms:{uTop:{value:new Ie(n.skyTop)},uHor:{value:new Ie(n.skyHorizon)},uGround:{value:new Ie(n.hemiGround)},uSun:{value:new Ie(n.sunColor).multiplyScalar(n.sunIntensity)},uSunDir:{value:i}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 uTop, uHor, uGround, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = d.y > 0.0 ? mix(uHor, uTop, pow(d.y, 0.55)) : mix(uHor, uGround, pow(-d.y, 0.35));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 350.0) * 14.0 + pow(s, 12.0) * 0.5);
        gl_FragColor = vec4(c, 1.0);
      }`});e.add(new it(t,s));let r=new eo(wi),o=r.fromScene(e,.02);return r.dispose(),t.dispose(),s.dispose(),o}var qg=new Map;function Yg(n,e="#f4f2ec",t="#16181d"){let i=n+e+t,s=qg.get(i);if(!s){let o=document.createElement("canvas");o.width=40,o.height=28;let a=o.getContext("2d");a.fillStyle=e,a.fillRect(0,0,40,28),a.fillStyle=t,a.font='italic 900 26px "Arial Narrow", Impact, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(String(n),20,15),s=new ii(o),s.colorSpace=Rt,s.magFilter=Kt,s.minFilter=ti,qg.set(i,s)}let r=new it(new zn(1,1),new nt({map:s,roughness:.5,side:Pt,polygonOffset:!0,polygonOffsetFactor:-2}));return r.userData.ownGeometry=!0,r}var Ra=null;function gE(){if(Ra)return Ra;let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Ra=new ii(n),Ra.colorSpace=Rt,Ra}function yd(n,e,t){let i=new Qo(new so({map:gE(),color:n,transparent:!0,opacity:t,blending:vs,depthWrite:!1,fog:!1}));return i.scale.setScalar(e),i}var ss={ao:Dn.get("fx")!=="low",slow:0,frames:0,checked:!1},We=null,Wt="boot",Td=0,wd=0,Ed=0,Ca=99;function xE(){if(We){for(let n of We.labels||[])n.material.map?.dispose(),n.material.dispose();for(let n of We.bikes)kt.remove(n.model.group);kt.remove(We.road.group),We.road.dispose?.(),We.env.dispose?.(),We.env.group?.parent&&We.env.group.parent.remove(We.env.group),We.fx.dispose?.(),We.post.dispose?.(),We.envMap?.dispose(),kt.environment=null,We.mirror&&(kt.remove(We.mirror),We.mirror.dispose()),We.fill&&kt.remove(We.fill),We.scenery&&(kt.remove(We.scenery.group),We.scenery.dispose()),We.clouds&&(kt.remove(We.clouds),We.clouds.geometry.dispose(),We.clouds.material.dispose()),We.sunGlow&&(kt.remove(We.sunGlow),We.sunGlow.material.dispose()),We=null}}var Pa="assets/v3/world/",An=null,fi=null,Qg={};function ex({trackSeed:n,weatherId:e,laps:t,riders:i,autopilot:s,realData:r=null,final:o=!0,carry:a=null,keepClouds:l=null,startS:c=0}){let u=[performance.now()],h=B=>{u.push(B,Math.round(performance.now()-u[0]))};xE(),h("dispose");let f=Yn(n),p=!!r&&!!An,g=p?An.track:Um(n);h("track");let x=Is[e]||Is.sunset;Nn.far=p?9500:6e3,Nn.updateProjectionMatrix();let m=p?R0(kt,g,x,An.index,{base:Pa,baked:Qg,rng:f.fork("env")}):v0(kt,g,x,f.fork("env"));p&&m.prime(c),h("env");let d=mE(x);kt.environment=d.texture,kt.environmentIntensity=x.night?.55:.5,wi.toneMappingExposure=x.night?1.5:.82;let S=yd(x.sunColor,x.night?900:2200,x.night?.35:.75);S.userData.dir=new V(...x.sunDir).normalize(),kt.add(S);let M=new Ci(x.night?3820160:13226728,x.night?.25:.45);M.position.set(-x.sunDir[0],.6,-x.sunDir[2]).multiplyScalar(100),M.name="fill-light",kt.add(M),h("envmap");let _=p?{group:new at,update(){},dispose(){}}:rc(g,x,f.fork("road"));kt.add(_.group),h("road"),p||fa(m.group,B=>B.geometry.attributes.position.count>2e4?1:.45),fa(_.group,()=>.4);let E=p?{group:new at,dispose(){}}:b0(g,x,f.fork("scenery"),m.heightAt);m.sun?.shadow&&(m.sun.shadow.mapSize.set(4096,4096),m.sun.shadow.radius=5,m.sun.shadow.blurSamples=16,m.sun.shadow.normalBias=.05,m.sun.shadow.map?.dispose(),m.sun.shadow.map=null),kt.add(E.group);let T=null,v=p?Math.min(.25,x.wet||.25):x.sheen??x.wet;v>.5&&!Dn.has("noreflect")&&(T=new oa(new zn(900,900),{textureWidth:1280,textureHeight:720,clipBias:.05,multisample:4}),T.rotation.x=-Math.PI/2,T.material.colorWrite=!1,T.material.depthWrite=!1,T.material.depthTest=!1,T.frustumCulled=!1,T.renderOrder=-10,T.name="road-mirror",kt.add(T));let w=_.group.getObjectByName("road-asphalt");w&&v>.5&&(w.material.envMap=d.texture,w.material.envMapIntensity=T?.35:1.25,w.material.metalness=.3,l0(w.material,x.sheen??x.wet,T?{texture:T.getRenderTarget().texture,matrix:T.material.uniforms.textureMatrix.value}:null)),h("voxelize");let y=l||o0(x,f.fork("clouds"));kt.add(y);let b=Tg(kt,x),A=Lg(wi,kt,Nn,x,{ao:ss.ao});h("fx");let D=qm({track:g,laps:t,env:x,rng:f.fork("race"),riders:i,final:o,carry:a,startS:c}),O=[],L=D.riders.map(B=>{let Y=vg({color:B.color,accent:B.accent,isPlayer:!!B.isPlayer&&!!x.night,detail:B.isPlayer?"hi":"lo"});if(Y.group.rotation.order="YXZ",B.remote){let Se=SE(B.name,B.color);Y.group.add(Se),O.push(Se)}let W=Y.group.getObjectByName("chassis")||Y.group,H=yd(16722458,.3,.3);if(H.position.set(0,.67,-.42),W.add(H),x.night){let Se=yd(16773840,1.3,.8);Se.position.set(0,.48,1.66),W.add(Se)}Y.tailGlow=H;let ae=B.isPlayer?1:2+D.riders.indexOf(B)*7%97;for(let Se of[-1,1]){let ge=Yg(ae);ge.scale.set(.24,.17,1),ge.position.set(.105*Se,.6,-.2),ge.rotation.y=Se*Math.PI/2,W.add(ge)}let ve=Yg(ae);return ve.scale.set(.2,.14,1),ve.position.set(0,.585,1.6),ve.rotation.x=-.75,W.add(ve),kt.add(Y.group),{rider:B,model:Y,pose:{},prev:new V,has:!1,w:{x:0,y:0,z:0,heading:0,slope:0}}}),F=s?Yl({id:"auto",name:"auto",skill:.9,aggression:.5,jumpSkill:.8,lineSkill:.9,style:"r\xE9gulier"},f.fork("auto")):null;if(We={labels:O,track:g,weather:x,env:m,road:_,fx:b,post:A,race:D,bikes:L,autoAI:F,envMap:d,sunGlow:S,clouds:y,scenery:E,mirror:T,fill:M,playerBike:L.find(B=>B.rider.isPlayer)||L[0]},h("bikes"),window.__loadTimes=u.slice(1),gt?.traffic){for(let B of D.riders)B.ai&&(B.ai.obstacles=gt.traffic.vehicles);F&&(F.obstacles=gt.traffic.vehicles)}if(p){let B=[];for(let Y of g.features)Y.type==="tunnel"&&Y.name&&B.push({s:Y.s0-90,text:Y.name.toUpperCase()});for(let Y of g.bridges)Y.name&&Y.s1-Y.s0>150&&B.push({s:Y.s0-40,text:Y.name.toUpperCase()});for(let Y of An.index.signs)B.push({s:Y.s-20,text:Y.name.toUpperCase()});B.sort((Y,W)=>Y.s-W.s),We.announce=B.filter(Y=>Y.s>=c-60&&Y.s<=g.raceEnd),We.announceIdx=0}return tn.setTrack(g),ax(),nx(.016),qs.snap(Rd()),wd=D.player?.position||i.length,Ed=1,Ca=99,window.__game={stage:We,renderer:wi,scene:kt,camera:Nn,RL:hf},window.__tick=rx,We}var Ui={x:0,y:0,z:0,heading:0,yaw:0,lean:0,speedRatio:0,airborne:!1,boosting:!1,slope:0};function Rd(){let n=We.playerBike,e=n.rider.state;return Ui.x=n.w.x,Ui.y=n.w.y,Ui.z=n.w.z,Ui.heading=n.w.heading,Ui.yaw=-tx(e),Ui.speedRatio=Math.min(1.3,e.speed/n.rider.stats.maxSpeed),Ui.airborne=e.airborne,Ui.boosting=e.boostT>0,Ui.slope=n.w.slope||0,Ui}var vE=.8,$g=.7;function tx(n){let e=n.vdir??n.yaw;return e+vE*(n.yaw-e)}function nx(n){let{track:e,fx:t,weather:i}=We;for(let s of We.bikes){let r=s.rider.state;Ft(e,r.s,r.d,s.w),s.w.y+=r.yRel||0;let o=s.model.group;o.position.set(s.w.x,s.w.y,s.w.z),o.visible=!s.rider.hidden;let a=s.w.heading-tx(r),l=s.w.heading-(r.vdir??r.yaw);o.rotation.y=a,o.position.x+=$g*(Math.sin(a)-Math.sin(l)),o.position.z+=$g*(Math.cos(a)-Math.cos(l)),o.rotation.x=r.airborne?0:-Math.atan(s.w.slope||0);let c=s.pose;if(c.lean=r.lean,c.steer=r.steer,c.pitch=r.pitch,c.compress=r.compress,c.wheelSpin=r.wheelSpin,c.speedRatio=r.speed/s.rider.stats.maxSpeed,c.speed=r.speed,c.airborne=r.airborne,c.drift=r.drift,c.boost=r.boostT>0,c.braking=s.rider.isPlayer?pn.brake>.1:!!s.rider.braking,s.model.update(c,n),s.model.tailGlow){let M=c.braking?1:0;s.model.tailGlow.material.opacity+=(.3+.6*M-s.model.tailGlow.material.opacity)*Math.min(1,n*12),s.model.tailGlow.scale.setScalar(.3+.55*M)}let u=o.rotation.y,h=Math.sin(u),f=Math.cos(u),p=s.w.x-h*.7,g=s.w.z-f*.7,x=s.w.y+.05,m=h*r.speed,d=f*r.speed;!r.airborne&&r.speed>8&&(r.drift>.8&&(Math.random()<r.drift*.9&&t.emit("smoke",p,x,g,m*.2,1.2,d*.2,1),s.has&&t.addSkid(s.prev.x,s.prev.y,s.prev.z,p,x,g,.16,.25+r.drift*.4)),!r.onRoad&&Math.random()<.7&&t.emit("dust",p,x,g,m*.25,1.5,d*.25,2),i.wet>.2&&r.speed>20&&Math.random()<i.wet*.8&&t.emit("spray",p,x,g,m*.35,2.5,d*.35,2)),r.boostT>0&&t.emit("boost",p-h*.4,x+.45,g-f*.4,m*.9,.2,d*.9,1),s.prev.set(p,x,g),s.has=!r.airborne;let S=s.rider.isPlayer?null:s.rider.frameEvents;S&&S.length&&ix(s,S,!1)}}function ix(n,e,t){let{fx:i}=We,s=n.rider.state,r=n.model.group.rotation.y,o=Math.sin(r)*s.speed,a=Math.cos(r)*s.speed;for(let l of e)l==="land"||l==="hardLand"?(i.emit("land",n.w.x,n.w.y+.1,n.w.z,o*.3,1,a*.3,l==="hardLand"?40:22),t&&(zt.play("land"),qs.shake(l==="hardLand"?.9:.45))):l==="wall"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,3,a*.5,26),t&&(zt.play("hit"),qs.shake(.7))):l==="crash"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,4,a*.5,40),i.emit("dust",n.w.x,n.w.y+.2,n.w.z,o*.3,2,a*.3,30),t&&(qs.shake(1.4),tn.flash("CHUTE !",1400))):l==="jump"?t&&zt.play("jump"):l==="boost"?t&&(zt.play("boost"),qs.shake(.3),tn.flash("BOOST !",600)):l==="pad"&&t&&(zt.play("pad"),qs.shake(.2))}function yE(n){let{race:e,autoAI:t,track:i}=We,s=e.player,r=pn;if(t||Wt==="finish")if(t){let a=e.riders.filter(l=>l!==s).map(l=>l.state);r=$l(t,s.state,i,s.stats,a,n)}else r=_E;if(mn&&gt&&(wE(e,n),TE(e,n)),e.update(n,r),mn&&gt&&e.phase!=="countdown"&&(mn.session.sendState(performance.now(),s.state.s,s.state),s.finished&&!mn.sentFinish&&(mn.sentFinish=!0,mn.session.sendFinish(s.finishTime))),gt?.traffic&&e.phase!=="countdown"){gt.traffic.update(n,s.state,e.riders);for(let a of gt.traffic.events)a.type==="near"&&!t?(tn.flash(a.boost?`FR\xD4LEMENT \xD7${a.combo} \xB7 BOOST +1`:`FR\xD4LEMENT \xD7${a.combo}`,900),zt.play(a.boost?"boost":"pad")):a.type==="hit"&&!t&&tn.flash("ACCROCHAGE",900)}let o=s.state.events;o.length&&(ix(We.playerBike,o,!t),o.length=0)}var _E={throttle:.3,brake:0,steer:0,boost:!1,drift:!1},En={speedKmh:0,position:1,total:8,lap:1,laps:3,time:0,bestLap:null,boostCharges:0,boostT:0,countdown:null,wrongWay:!1},_d=[],Zg=new V,Md=performance.now(),Nc=0,Oc=0;function sx(n){requestAnimationFrame(sx);let e=Math.min(.05,(n-Md)/1e3);ss.ao&&!ss.checked&&Wt==="race"&&We?.race.phase==="racing"&&(ss.frames++,n-Md>25&&ss.slow++,ss.frames>=240&&(ss.checked=!0,ss.slow>96&&(ss.ao=!1,We.post.setAO(!1),console.info("Occlusion ambiante coup\xE9e : affichage trop lent.")))),Md=n,rx(e)}function rx(n){if(!We)return;if(Sd){We.post.render(0);return}Oc+=n,Td+=n,Wt==="race"&&Ys?.update(n);let{race:e}=We,t=Wt==="race"||Wt==="attract"||Wt==="finish";if(t){Wt==="race"&&pE(n),Nc+=n;let a=0;for(;Nc>=vd&&a++<8;)yE(vd),Nc-=vd;a>=8&&(Nc=0)}nx(n);let i=e.player,s=i.state,r=Math.min(1.3,s.speed/i.stats.maxSpeed),o=Rd();Wt==="intro"||Wt==="menu"||Wt==="finish"&&Td>1.2?ME(o,n):qs.update(n,o),Zg.set(o.x,o.y,o.z),We.env.update(n,Oc,Zg,(We.race.player||We.race.riders[0]).state.s),We.mirror&&We.mirror.position.set(o.x,o.y-(s.yRel||0)+.02,o.z),We.sunGlow.position.copy(Nn.position).addScaledVector(We.sunGlow.userData.dir,3200),We.road.update(n,Oc),We.fx.setSpeed(t?r:0,s.boostT>0),We.fx.update(n,Nn),Ao&&(gt?.traffic&&Wt!=="attract"?Ao.update(gt.traffic,We.track,s.s):Ao.hide()),We.post.setSpeed(t?r:0,s.boostT>0),We.post.render(n),(Wt==="race"||Wt==="finish")&&(zt.setEngine(Math.min(1,r),Wt==="race"?pn.throttle:.3),zt.setWind(Math.min(1,r)),zt.setSkid(s.airborne?0:Math.min(1,s.drift))),Wt==="race"&&bE(e,i,s)}var Kg=new V;function ME(n,e){let t=Oc*.35+n.heading;Kg.set(n.x+Math.sin(t)*7.5,n.y+2.6,n.z+Math.cos(t)*7.5),Nn.position.lerp(Kg,Math.min(1,e*2.5)),Nn.fov+=(55-Nn.fov)*Math.min(1,e*3),Nn.updateProjectionMatrix(),Nn.lookAt(n.x,n.y+.9,n.z)}function bE(n,e,t){En.speedKmh=t.speed*3.6,En.position=e.position,En.total=n.riders.length,En.lap=Math.min(n.laps,Math.max(1,e.lap)),En.laps=n.laps,gt&&Wt!=="attract"&&(En.lap=gt.index+1,En.laps=gt.metas.length),tn.setLapLabel?.(gt&&Wt!=="attract"?"TRON\xC7ON":"TOUR"),En.time=n.time,En.bestLap=e.bestLap??null,En.boostCharges=t.boostCharges,En.boostT=t.boostT,En.gear=t.gear,En.rpm=t.rpm,En.countdown=n.phase==="countdown"?n.countdown:n.time<.9?0:null,En.wrongWay=Math.abs(t.yaw)>1.4,tn.update(En),_d.length=0;for(let i of n.riders)_d.push({s:i.state.s,d:i.state.d,isPlayer:!!i.isPlayer,color:i.color});if(tn.updateMinimap(_d),n.phase==="countdown"){let i=Math.ceil(n.countdown);i!==Ca&&(Ca=i,i>0&&zt.play("beep"))}else Ca!==0&&(Ca=0,zt.play("go"),zt.startMusic?.());if(n.phase==="racing"){let i=We.announce;if(i)for(;We.announceIdx<i.length&&i[We.announceIdx].s<=t.s;)tn.flash(i[We.announceIdx].text,2e3),We.announceIdx++;e.position<wd&&!(i&&We.announceIdx>0&&t.s-i[We.announceIdx-1].s<120)&&tn.flash(e.position===1?"EN T\xCATE !":"+1 PLACE",700),wd=e.position,e.lap!==Ed&&e.lap<=n.laps&&(Ed=e.lap,zt.play("lap"),e.lap===n.laps&&tn.flash("DERNIER TOUR",1400))}if(gt&&Wt==="race"&&n.phase==="racing")for(;gt.index<gt.metas.length-1&&t.s>=gt.metas[gt.index].s1;)AE(n);n.phase==="finished"&&Wt==="race"&&RE()}var gt=null,Ao=null;function SE(n,e){let t=document.createElement("canvas");t.width=256,t.height=64;let i=t.getContext("2d");i.font="bold 34px Arial, Helvetica, sans-serif";let s=Math.min(244,i.measureText(n).width+28);i.fillStyle="rgba(10,14,28,.78)",i.beginPath(),i.roundRect((256-s)/2,8,s,48,12),i.fill(),i.fillStyle="#"+e.toString(16).padStart(6,"0"),i.fillRect((256-s)/2,50,s,6),i.fillStyle="#fff",i.textAlign="center",i.textBaseline="middle",i.fillText(n,128,31,230);let r=new ii(t);r.colorSpace=Rt;let o=new Qo(new so({map:r,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1}));return o.scale.set(3.6,.9,1),o.position.set(0,2.55,0),o.name="name-tag",o}var Oi=null,bd=0;function TE(n,e){if(bd-=e,bd>0)return;bd=.25,Oi||(Oi=document.createElement("div"),Oi.style.cssText="position:fixed;left:2.2vmin;top:13vmin;z-index:30;font:bold 1.9vmin Arial,Helvetica,sans-serif;color:#fff;text-shadow:0 1px 3px #000;display:grid;gap:.5vmin;pointer-events:none",document.body.appendChild(Oi));let t=n.player.state.s,i=n.riders.filter(s=>s.remote).map(s=>{let r=mn.session.players.get(s.id);if(!r||r.gone)return{gap:-1/0,html:`<span style="opacity:.6">\u2715 ${Uc(s.name)} \xB7 abandon</span>`};if(s.finished)return{gap:1/0,html:`<span>\u{1F3C1} ${Uc(s.name)} \xB7 arriv\xE9</span>`};if(!r.remote.known)return{gap:0,html:`<span style="opacity:.6">\u2026 ${Uc(s.name)}</span>`};let o=s.state.s-t,a=Math.abs(o)>=1e3?(Math.abs(o)/1e3).toFixed(1).replace(".",",")+" km":Math.round(Math.abs(o))+" m";return{gap:o,html:`<span><b style="color:#${s.color.toString(16).padStart(6,"0")}">${o>=0?"\u25B2":"\u25BC"}</b> ${Uc(s.name)} \xB7 ${o>=0?"+":"\u2212"}${a}</span>`}});i.sort((s,r)=>r.gap-s.gap),Oi.innerHTML=i.map(s=>s.html).join(""),Oi.style.display=""}var Uc=n=>String(n).replace(/[&<>]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[e]),mn=null;function wE(n,e){let t=performance.now(),i=n.track;for(let s of n.riders){if(!s.remote)continue;let r=mn.session.players.get(s.id),o=r&&!r.gone?r.remote.sample(t,e):null;if(!o){s.hidden=!0,(!r||r.gone)&&(s.state.s=-1e5,!s.dnf&&!s.finished&&(s.dnf=!0,tn.flash(`${s.name.toUpperCase()} A QUITT\xC9 LA COURSE`,2200)));continue}let a=s.state;a.s=o.g,a.d=o.d,a.speed=o.v,a.lean=o.l,a.yaw=o.y,a.vdir=o.y,a.boostT=o.b?.2:0,a.wheelSpin=(a.wheelSpin||0)+o.v*e/.31,s.hidden=Math.abs(a.s-n.player.state.s)>3500||r.remote.age>4,r.finished&&!s.finished&&(s.finished=!0,s.finishTime=r.finishTime)}}var rs=K0(),Ys=null;function ox(n){let e=gt.metas[gt.splits.length],t=gt.splits.length===0,i=J0(rs,e.id+(t?":g":":r"),n-gt.splitStart);return gt.splitStart=n,gt.splits.push({name:e.subtitle,...i}),_c(rs),i}function EE(){if(!bt)return;let n=eg(ec({...bt,stageIndex:gt.index}));if(!n.length)return;let e=t=>{if(!tc(bt,t.id))return;let i=gt.riders.find(s=>s.isPlayer);i&&Object.assign(i.stats,Ds(bt)),tn.flash(`${t.icon||""} ${t.name.toUpperCase()}`,1800),zt.play("lap")};if(gt.autopilot&&!Dn.has("pick")){e(n[0]);return}Ys=Ys||tg(),Ys.show(n,e,9)}function AE(n){let e=ox(n.time);gt.index+=1;let t=gt.metas[gt.index];tn.flash(`SECTION ${Pf(e.time)}${e.delta===null?"":" ("+j0(e.delta)+")"}${e.record&&e.best!==null?" \xB7 RECORD":""} \u2014 ${t.subtitle.split(" \xB7 ")[0].toUpperCase()}`,3200),EE()}function ax(){let n=innerWidth,e=innerHeight;wi.setSize(n,e,!1),Nn.aspect=n/e,Nn.updateProjectionMatrix(),We?.post.setSize(n,e)}addEventListener("resize",ax);function Ia(n){Wt=n,Td=0}var bt=null,Eo=lf(),Ad=null;function RE(){if(Ia("finish"),Ys?.hide(),gt&&bt){let n=We.race.player.finishTime??We.race.time,e=ox(n),t=!!fi&&gt.metas.length===fi.stages.length,i=t?Q0(rs,n):null;rs.finishes+=1,_c(rs),bt.summary={splits:gt.splits,total:i,time:n,full:t,last:e}}if(tn.flash(`ARRIV\xC9E \u2014 ${We.race.player.position}${We.race.player.position===1?"er":"e"}`,2200),zt.play(We.race.player.position<=3?"win":"lose"),zt.stopMusic?.(),mn){let n=performance.now(),e=()=>We.race.riders.some(i=>i.remote&&!i.finished&&!i.dnf),t=()=>{if(Wt==="finish"){if(!e()||performance.now()-n>12e4){Ad?.();return}performance.now()-n>3e3&&tn.flash("EN ATTENTE DES AUTRES JOUEURS\u2026",1100),setTimeout(t,1e3)}};setTimeout(t,3200);return}setTimeout(()=>Ad?.(),3200)}async function jg(){gt=null,Oi&&(Oi.style.display="none"),Ao?.hide(),Ys?.hide();let n=Ql(Jl("ATTRACT"));for(let t of n)t.stats=Ds({upgrades:[]});let e=An?An.index.sections[Math.min(2,An.index.sections.length-1)].s0+9e3:0;An&&await Mf(Pa,An.index,e,1).catch(()=>{}),ex({trackSeed:An?"REAL:"+An.index.id:"ATTRACT-"+nc(),weatherId:An?"sicily":"sunset",laps:An?1:99,riders:n,autopilot:!0,realData:!!An,startS:e}),tn.hide(),Ia("attract")}async function CE(){if(await ag().catch(n=>console.warn("Mod\xE8le de moto indisponible, repli sur le mod\xE8le proc\xE9dural :",n)),!Dn.has("noreal")){let[n,e]=await Promise.all([fetch(Pa+"index.json").then(t=>t.ok?t.json():null).catch(()=>null),fetch(Pa+"track.json").then(t=>t.ok?t.json():null).catch(()=>null)]);if(n&&e&&(An={index:n,track:S0({...n,...e})},fi={title:n.title,roads:n.roads,stages:n.sections}),fi){let t=await fetch("assets/v3/props/index.json").then(s=>s.ok?s.json():[]).catch(()=>[]);await Promise.all(T0.filter(s=>t.includes(s)).map(s=>fetch(`assets/v3/props/${s}.json`).then(r=>r.ok?r.json():null).then(r=>{r&&(Qg[s]=r)}).catch(()=>{})));let i=document.createElement("div");i.textContent="\xA9 contributeurs OpenStreetMap \xB7 relief Terrarium (Mapzen) \xB7 Sentinel-2 cloudless 2016 par EOX (CC BY 4.0)",i.style.cssText="position:fixed;left:50%;bottom:0.6vmin;transform:translateX(-50%);font:1.35vmin Arial,sans-serif;color:rgba(255,255,255,.72);text-shadow:0 1px 2px #000;pointer-events:none;z-index:40;white-space:nowrap",document.body.appendChild(i)}}for(await jg(),document.getElementById("boot").remove(),requestAnimationFrame(sx);;){let n=Dn.get("seed"),e=Number(Dn.get("stage"))||0;if(!n){let s=await Fi.showTitle({dailySeed:nc(),meta:Eo,route:fi,records:rs});if(s.multi){let r=fi?await Y0(Fi.mount,fi):null;if(!r)continue;mn={session:r.session,directory:r.directory,sentFinish:!1},n="MP-"+r.session.code,e=r.stage}else n=s.seed,s.stage&&(e=s.stage)}if(zt.resume(),bt=Jl(n),fi){let s=Math.floor(e)-1;bt.real=!0,s>0&&s<fi.stages.length||(s=0);let r=fi.stages.slice(s),o=r.reduce((a,l)=>a+l.length,0)/1e3;bt.stages=[{name:fi.title,subtitle:`${fi.roads} \xB7 ${o.toFixed(0)} km d'une traite`,trackSeed:"REAL:"+r[0].id,weather:"sicily",laps:1,real:r}]}for(;!ca(bt);){let s=bt.stages[bt.stageIndex],r=Ds(bt),o=Ql(bt).map(c=>({...c,stats:c.isPlayer?r:Ds({upgrades:[]})}));if(mn&&s.real){bt.points={},bt.names={};let c=o.find(u=>u.isPlayer);o=mn.session.roster().map(u=>u.me?{...c,name:u.name,color:u.color,accent:u.accent}:{id:u.id,name:u.name,color:u.color,accent:u.accent,isPlayer:!1,remote:!0,persona:null,stats:Ds({upgrades:[]})});for(let u of o)bt.points[u.id]=0,bt.names[u.id]=u.name}Fi.hideAll();let a=0;gt=null,s.real&&(tn.flash?.("CHARGEMENT\u2026"),a=s.real[0].s0,await Mf(Pa,An.index,a,1).catch(()=>{}),gt={metas:s.real,index:0,riders:o,autopilot:Dn.has("auto"),weatherId:Dn.get("weather")||s.weather,splits:[],splitStart:0},rs.runs+=1,_c(rs),Dn.has("notraffic")||(gt.traffic=P0({rng:Yn("trafic|"+n+"|"+rs.runs),count:40,density:2.6}),Ao=Ao||$0(kt,40))),ex({trackSeed:s.trackSeed,weatherId:Dn.get("weather")||s.weather,laps:s.laps,riders:o,autopilot:Dn.has("auto"),realData:!!s.real,startS:a}),Ia("intro"),zt.setRain(We.weather.rain||0),!Dn.has("auto")&&!mn&&await Fi.showStageIntro({stage:s,index:bt.stageIndex+1,total:bt.stages.length,standings:fo(bt),weather:We.weather}),Fi.hideAll(),qs.snap(Rd()),tn.show(),Ia("race"),await new Promise(c=>{Ad=c}),tn.hide(),zt.setEngine(.1,0),zt.setWind(0),zt.setSkid(0);let l=We.race.results();if(mn){let c=new Set(We.race.riders.filter(u=>u.dnf).map(u=>u.id));for(let u of l)c.has(u.id)&&(u.time=null);l.sort((u,h)=>(u.time===null)-(h.time===null)||u.position-h.position),l.forEach((u,h)=>{u.position=h+1}),Oi&&(Oi.style.display="none")}if(of(bt,l),await Fi.showResults({results:l,standings:fo(bt),stage:s}),!ca(bt)){let c=ec(bt),u=bt.upgrades.map(f=>ur.find(p=>p.id===f)).filter(Boolean),h=await Fi.showUpgradeChoice({choices:c,index:bt.stageIndex,total:bt.stages.length,owned:u});tc(bt,h)}}let t=fo(bt),i=t.findIndex(s=>s.isPlayer)+1;Eo=uf(Eo,bt)||Eo,cf(Eo),Ia("menu"),await Fi.showRunEnd({standings:t,playerPosition:i,run:bt,meta:Eo}),Fi.hideAll(),mn&&(mn.directory?.close(),mn.session.leave(),mn=null),Dn.delete("seed"),Dn.delete("stage"),await jg()}}CE().catch(n=>{console.error(n);let e=document.getElementById("boot")||document.body.appendChild(Object.assign(document.createElement("div"),{id:"boot"}));e.className="err",e.textContent=`Erreur de d\xE9marrage :
`+(n?.stack||n)});
