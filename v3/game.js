var Yg=Object.defineProperty;var $g=(n,e)=>{for(var t in e)Yg(n,t,{get:e[t],enumerable:!0})};var Zg=0,_d=1,Kg=2;var Dl=1,jg=2,Wi=3,wi=0,en=1,Pt=2,sn=0,Hr=1,Xr=2,Md=3,bd=4,na=5,Fn=100,Jg=101,Qg=102,ex=103,tx=104,co=200,Eh=201,nx=202,ix=203,du=204,qo=205,Nl=206,sx=207,Ul=208,rx=209,ox=210,ax=211,lx=212,cx=213,ux=214,pu=0,mu=1,gu=2,qr=3,xu=4,vu=5,yu=6,_u=7,wh=0,hx=1,fx=2,vs=0,Ah=1,Rh=2,Ch=3,ia=4,dx=5,Ph=6,Ih=7,Sd="attached",px="detached",Hp=300,Yr=301,$r=302,Mu=303,bu=304,Fl=306,Pn=1e3,Xi=1001,Yo=1002,Kt=1003,Lh=1004;var zr=1005;var On=1006,Vo=1007;var ti=1008;var vi=1009,Vp=1010,Gp=1011,$o=1012,Dh=1013,er=1014,gi=1015,hn=1016,Nh=1017,Uh=1018,ys=1020,Wp=35902,Xp=1021,qp=1022,Bn=1023,Yp=1024,$p=1025,Vr=1026,_s=1027,Fh=1028,Oh=1029,Zp=1030,Bh=1031;var zh=1033,ol=33776,al=33777,ll=33778,cl=33779,Su=35840,Tu=35841,Eu=35842,wu=35843,Au=36196,Ru=37492,Cu=37496,Pu=37808,Iu=37809,Lu=37810,Du=37811,Nu=37812,Uu=37813,Fu=37814,Ou=37815,Bu=37816,zu=37817,ku=37818,Hu=37819,Vu=37820,Gu=37821,ul=36492,Wu=36494,Xu=36495,Kp=36283,qu=36284,Yu=36285,$u=36286;var Zr=2300,Kr=2301,Nc=2302,Td=2400,Ed=2401,wd=2402,mx=2500;var jp=0,Ol=1,sa=2,gx=3200,xx=3201;var Bl=0,vx=1,ms="",Rt="srgb",Tn="srgb-linear",zl="linear",Et="srgb";var _r=7680;var Ad=519,yx=512,_x=513,Mx=514,Jp=515,bx=516,Sx=517,Tx=518,Ex=519,Zu=35044,Ri=35048;var Rd="300 es",qi=2e3,hl=2001,Ms=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cd=1234567,Go=Math.PI/180,jr=180/Math.PI;function xi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function Mn(n,e,t){return Math.max(e,Math.min(t,n))}function kh(n,e){return(n%e+e)%e}function wx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Ax(n,e,t){return n!==e?(t-n)/(e-n):0}function Wo(n,e,t){return(1-t)*n+t*e}function Rx(n,e,t,i){return Wo(n,e,1-Math.exp(-t*i))}function Cx(n,e=1){return e-Math.abs(kh(n,e*2)-e)}function Px(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ix(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Lx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Dx(n,e){return n+Math.random()*(e-n)}function Nx(n){return n*(.5-Math.random())}function Ux(n){n!==void 0&&(Cd=n);let e=Cd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fx(n){return n*Go}function Ox(n){return n*jr}function Bx(n){return(n&n-1)===0&&n!==0}function zx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function kx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Hx(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Qp={DEG2RAD:Go,RAD2DEG:jr,generateUUID:xi,clamp:Mn,euclideanModulo:kh,mapLinear:wx,inverseLerp:Ax,lerp:Wo,damp:Rx,pingpong:Cx,smoothstep:Px,smootherstep:Ix,randInt:Lx,randFloat:Dx,randFloatSpread:Nx,seededRandom:Ux,degToRad:Fx,radToDeg:Ox,isPowerOfTwo:Bx,ceilPowerOfTwo:zx,floorPowerOfTwo:kx,setQuaternionFromProperEuler:Hx,normalize:At,denormalize:mi},$e=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ut=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],S=s[1],M=s[4],y=s[7],T=s[2],b=s[5],v=s[8];return r[0]=o*x+a*S+l*T,r[3]=o*m+a*M+l*b,r[6]=o*p+a*y+l*v,r[1]=c*x+u*S+h*T,r[4]=c*m+u*M+h*b,r[7]=c*p+u*y+h*v,r[2]=f*x+d*S+g*T,r[5]=f*m+d*M+g*b,r[8]=f*p+d*y+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Uc.makeScale(e,t)),this}rotate(e){return this.premultiply(Uc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Uc=new ut;function em(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vx(){let n=Zo("canvas");return n.style.display="block",n}var Pd={};function ko(n){n in Pd||(Pd[n]=!0,console.warn(n))}function Gx(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Wx(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Xx(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var pt={enabled:!0,workingColorSpace:Tn,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Et&&(n.r=Yi(n.r),n.g=Yi(n.g),n.b=Yi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Et&&(n.r=Gr(n.r),n.g=Gr(n.g),n.b=Gr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ms?zl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Id=[.64,.33,.3,.6,.15,.06],Ld=[.2126,.7152,.0722],Dd=[.3127,.329],Nd=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ud=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pt.define({[Tn]:{primaries:Id,whitePoint:Dd,transfer:zl,toXYZ:Nd,fromXYZ:Ud,luminanceCoefficients:Ld,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:Id,whitePoint:Dd,transfer:Et,toXYZ:Nd,fromXYZ:Ud,luminanceCoefficients:Ld,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}});var Mr,Ku=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mr===void 0&&(Mr=Zo("canvas")),Mr.width=e.width,Mr.height=e.height;let i=Mr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Mr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yi(t[i]/255)*255):t[i]=Yi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},qx=0,fl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fc(s[o].image)):r.push(Fc(s[o]))}else r=Fc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Fc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ku.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yx=0,cn=class n extends Ms{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Xi,s=Xi,r=On,o=ti,a=Bn,l=vi,c=n.DEFAULT_ANISOTROPY,u=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=xi(),this.name="",this.source=new fl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pn:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pn:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Hp;cn.DEFAULT_ANISOTROPY=1;var _t=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(d+1)/2,T=(p+1)/2,b=(u+f)/4,v=(h+x)/4,w=(g+m)/4;return M>y&&M>T?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=b/i,r=v/i):y>T?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=b/s,r=w/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=v/r,s=w/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-x)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ju=class extends Ms{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new fl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends ju{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},dl=class extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ju=class extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==g){let m=1-a,p=l*f+c*d+u*g+h*x,S=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let T=Math.sqrt(M),b=Math.atan2(T,p*S);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}let y=a*S;if(l=l*m+f*y,c=c*m+d*y,u=u*m+g*y,h=h*m+x*y,m===1-a){let T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Oc.copy(this).projectOnVector(e),this.sub(Oc)}reflect(e){return this.sub(Oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oc=new H,Fd=new rn,ni=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hi):hi.fromBufferAttribute(r,o),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pa.copy(i.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),Ia.subVectors(this.max,Co),br.subVectors(e.a,Co),Sr.subVectors(e.b,Co),Tr.subVectors(e.c,Co),cs.subVectors(Sr,br),us.subVectors(Tr,Sr),qs.subVectors(br,Tr);let t=[0,-cs.z,cs.y,0,-us.z,us.y,0,-qs.z,qs.y,cs.z,0,-cs.x,us.z,0,-us.x,qs.z,0,-qs.x,-cs.y,cs.x,0,-us.y,us.x,0,-qs.y,qs.x,0];return!Bc(t,br,Sr,Tr,Ia)||(t=[1,0,0,0,1,0,0,0,1],!Bc(t,br,Sr,Tr,Ia))?!1:(La.crossVectors(cs,us),t=[La.x,La.y,La.z],Bc(t,br,Sr,Tr,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Bi=[new H,new H,new H,new H,new H,new H,new H,new H],hi=new H,Pa=new ni,br=new H,Sr=new H,Tr=new H,cs=new H,us=new H,qs=new H,Co=new H,Ia=new H,La=new H,Ys=new H;function Bc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ys.fromArray(n,r);let a=s.x*Math.abs(Ys.x)+s.y*Math.abs(Ys.y)+s.z*Math.abs(Ys.z),l=e.dot(Ys),c=t.dot(Ys),u=i.dot(Ys);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var $x=new ni,Po=new H,zc=new H,qn=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):$x.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);let t=Po.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Po,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(zc)),this.expandByPoint(Po.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},zi=new H,kc=new H,Da=new H,hs=new H,Hc=new H,Na=new H,Vc=new H,Jr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){kc.copy(e).add(t).multiplyScalar(.5),Da.copy(t).sub(e).normalize(),hs.copy(this.origin).sub(kc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Da),a=hs.dot(this.direction),l=-hs.dot(Da),c=hs.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(kc).addScaledVector(Da,f),d}intersectSphere(e,t){zi.subVectors(e.center,this.origin);let i=zi.dot(this.direction),s=zi.dot(zi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,i,s,r){Hc.subVectors(t,e),Na.subVectors(i,e),Vc.crossVectors(Hc,Na);let o=this.direction.dot(Vc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hs.subVectors(this.origin,e);let l=a*this.direction.dot(Na.crossVectors(hs,Na));if(l<0)return null;let c=a*this.direction.dot(Hc.cross(hs));if(c<0||l+c>o)return null;let u=-a*hs.dot(Vc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,x,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Er.setFromMatrixColumn(e,0).length(),r=1/Er.setFromMatrixColumn(e,1).length(),o=1/Er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zx,e,Kx)}lookAt(e,t,i){let s=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),fs.crossVectors(i,Wn),fs.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),fs.crossVectors(i,Wn)),fs.normalize(),Ua.crossVectors(Wn,fs),s[0]=fs.x,s[4]=Ua.x,s[8]=Wn.x,s[1]=fs.y,s[5]=Ua.y,s[9]=Wn.y,s[2]=fs.z,s[6]=Ua.z,s[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],S=i[3],M=i[7],y=i[11],T=i[15],b=s[0],v=s[4],w=s[8],_=s[12],E=s[1],R=s[5],F=s[9],k=s[13],L=s[2],O=s[6],D=s[10],Y=s[14],V=s[3],J=s[7],oe=s[11],de=s[15];return r[0]=o*b+a*E+l*L+c*V,r[4]=o*v+a*R+l*O+c*J,r[8]=o*w+a*F+l*D+c*oe,r[12]=o*_+a*k+l*Y+c*de,r[1]=u*b+h*E+f*L+d*V,r[5]=u*v+h*R+f*O+d*J,r[9]=u*w+h*F+f*D+d*oe,r[13]=u*_+h*k+f*Y+d*de,r[2]=g*b+x*E+m*L+p*V,r[6]=g*v+x*R+m*O+p*J,r[10]=g*w+x*F+m*D+p*oe,r[14]=g*_+x*k+m*Y+p*de,r[3]=S*b+M*E+y*L+T*V,r[7]=S*v+M*R+y*O+T*J,r[11]=S*w+M*F+y*D+T*oe,r[15]=S*_+M*k+y*Y+T*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+x*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],S=h*m*c-x*f*c+x*l*d-a*m*d-h*l*p+a*f*p,M=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,y=u*x*c-g*h*c+g*a*d-o*x*d-u*a*p+o*h*p,T=g*h*l-u*x*l-g*a*f+o*x*f+u*a*m-o*h*m,b=t*S+i*M+s*y+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let v=1/b;return e[0]=S*v,e[1]=(x*f*r-h*m*r-x*s*d+i*m*d+h*s*p-i*f*p)*v,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*v,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*v,e[4]=M*v,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*v,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*v,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*v,e[8]=y*v,e[9]=(g*h*r-u*x*r-g*i*d+t*x*d+u*i*p-t*h*p)*v,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*p+t*a*p)*v,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*v,e[12]=T*v,e[13]=(u*x*s-g*h*s+g*i*f-t*x*f-u*i*m+t*h*m)*v,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*m-t*a*m)*v,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*v,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,x=o*u,m=o*h,p=a*h,S=l*c,M=l*u,y=l*h,T=i.x,b=i.y,v=i.z;return s[0]=(1-(x+p))*T,s[1]=(d+y)*T,s[2]=(g-M)*T,s[3]=0,s[4]=(d-y)*b,s[5]=(1-(f+p))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(g+M)*v,s[9]=(m-S)*v,s[10]=(1-(f+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Er.set(s[0],s[1],s[2]).length(),o=Er.set(s[4],s[5],s[6]).length(),a=Er.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],fi.copy(this);let c=1/r,u=1/o,h=1/a;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=h,fi.elements[9]*=h,fi.elements[10]*=h,t.setFromRotationMatrix(fi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=qi){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),d,g;if(a===qi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===hl)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=qi){let l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,d=(i+s)*u,g,x;if(a===qi)g=(o+r)*h,x=-2*h;else if(a===hl)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Er=new H,fi=new je,Zx=new H(0,0,0),Kx=new H(1,1,1),fs=new H,Ua=new H,Wn=new H,Od=new je,Bd=new rn,yi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Od,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bd.setFromEuler(this),this.setFromQuaternion(Bd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yi.DEFAULT_ORDER="XYZ";var pl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},jx=0,zd=new H,wr=new rn,ki=new je,Fa=new H,Io=new H,Jx=new H,Qx=new rn,kd=new H(1,0,0),Hd=new H(0,1,0),Vd=new H(0,0,1),Gd={type:"added"},ev={type:"removed"},Ar={type:"childadded",child:null},Gc={type:"childremoved",child:null},Ft=class n extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new H,t=new yi,i=new rn,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new ut}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(kd,e)}rotateY(e){return this.rotateOnAxis(Hd,e)}rotateZ(e){return this.rotateOnAxis(Vd,e)}translateOnAxis(e,t){return zd.copy(e).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kd,e)}translateY(e){return this.translateOnAxis(Hd,e)}translateZ(e){return this.translateOnAxis(Vd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fa.copy(e):Fa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Io,Fa,this.up):ki.lookAt(Fa,Io,this.up),this.quaternion.setFromRotationMatrix(ki),s&&(ki.extractRotation(s.matrixWorld),wr.setFromRotationMatrix(ki),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gd),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ev),Gc.child=e,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gd),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,Jx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,Qx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ft.DEFAULT_UP=new H(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var di=new H,Hi=new H,Wc=new H,Vi=new H,Rr=new H,Cr=new H,Wd=new H,Xc=new H,qc=new H,Yc=new H,$c=new _t,Zc=new _t,Kc=new _t,gs=class n{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),di.subVectors(e,t),s.cross(di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){di.subVectors(s,t),Hi.subVectors(i,t),Wc.subVectors(e,t);let o=di.dot(di),a=di.dot(Hi),l=di.dot(Wc),c=Hi.dot(Hi),u=Hi.dot(Wc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vi.x),l.addScaledVector(o,Vi.y),l.addScaledVector(a,Vi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return $c.setScalar(0),Zc.setScalar(0),Kc.setScalar(0),$c.fromBufferAttribute(e,t),Zc.fromBufferAttribute(e,i),Kc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector($c,r.x),o.addScaledVector(Zc,r.y),o.addScaledVector(Kc,r.z),o}static isFrontFacing(e,t,i,s){return di.subVectors(i,t),Hi.subVectors(e,t),di.cross(Hi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),di.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Rr.subVectors(s,i),Cr.subVectors(r,i),Xc.subVectors(e,i);let l=Rr.dot(Xc),c=Cr.dot(Xc);if(l<=0&&c<=0)return t.copy(i);qc.subVectors(e,s);let u=Rr.dot(qc),h=Cr.dot(qc);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Rr,o);Yc.subVectors(e,r);let d=Rr.dot(Yc),g=Cr.dot(Yc);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Cr,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Wd.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Wd,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(Rr,o).addScaledVector(Cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function jc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Re=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=pt.workingColorSpace){if(e=kh(e,1),t=Mn(t,0,1),i=Mn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=jc(o,r,e+1/3),this.g=jc(o,r,e),this.b=jc(o,r,e-1/3)}return pt.toWorkingColorSpace(this,s),this}setStyle(e,t=Rt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let i=tm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return pt.fromWorkingColorSpace(_n.copy(this),e),Math.round(Mn(_n.r*255,0,255))*65536+Math.round(Mn(_n.g*255,0,255))*256+Math.round(Mn(_n.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(_n.copy(this),t);let i=_n.r,s=_n.g,r=_n.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Rt){pt.fromWorkingColorSpace(_n.copy(this),e);let t=_n.r,i=_n.g,s=_n.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+t,ds.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ds),e.getHSL(Oa);let i=Wo(ds.h,Oa.h,t),s=Wo(ds.s,Oa.s,t),r=Wo(ds.l,Oa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new Re;Re.NAMES=tm;var tv=0,bn=class extends Ms{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=xi(),this.name="",this.blending=Hr,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=du,this.blendDst=qo,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==du&&(i.blendSrc=this.blendSrc),this.blendDst!==qo&&(i.blendDst=this.blendDst),this.blendEquation!==Fn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ad&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Yt=class extends bn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Qt=new H,Ba=new $e,mt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zu,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zu&&(e.usage=this.usage),e}};var ml=class extends mt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var gl=class extends mt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var lt=class extends mt{constructor(e,t,i){super(new Float32Array(e),t,i)}},nv=0,ei=new je,Jc=new Ft,Pr=new H,Xn=new ni,Lo=new ni,ln=new H,gt=class n extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(em(e)?gl:ml)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ut().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return Jc.lookAt(e),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(Xn.min,Lo.min),Xn.expandByPoint(ln),ln.addVectors(Xn.max,Lo.max),Xn.expandByPoint(ln)):(Xn.expandByPoint(Lo.min),Xn.expandByPoint(Lo.max))}Xn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ln));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ln.fromBufferAttribute(a,c),l&&(Pr.fromBufferAttribute(e,c),ln.add(Pr)),s=Math.max(s,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<i.count;w++)a[w]=new H,l[w]=new H;let c=new H,u=new H,h=new H,f=new $e,d=new $e,g=new $e,x=new H,m=new H;function p(w,_,E){c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,_),h.fromBufferAttribute(i,E),f.fromBufferAttribute(r,w),d.fromBufferAttribute(r,_),g.fromBufferAttribute(r,E),u.sub(c),h.sub(c),d.sub(f),g.sub(f);let R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),a[w].add(x),a[_].add(x),a[E].add(x),l[w].add(m),l[_].add(m),l[E].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let w=0,_=S.length;w<_;++w){let E=S[w],R=E.start,F=E.count;for(let k=R,L=R+F;k<L;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let M=new H,y=new H,T=new H,b=new H;function v(w){T.fromBufferAttribute(s,w),b.copy(T);let _=a[w];M.copy(_),M.sub(T.multiplyScalar(T.dot(_))).normalize(),y.crossVectors(b,_);let R=y.dot(l[w])<0?-1:1;o.setXYZW(w,M.x,M.y,M.z,R)}for(let w=0,_=S.length;w<_;++w){let E=S[w],R=E.start,F=E.count;for(let k=R,L=R+F;k<L;k+=3)v(e.getX(k+0)),v(e.getX(k+1)),v(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new mt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xd=new je,$s=new Jr,za=new qn,qd=new H,ka=new H,Ha=new H,Va=new H,Qc=new H,Ga=new H,Yd=new H,Wa=new H,ot=class extends Ft{constructor(e=new gt,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Qc.fromBufferAttribute(h,e),o?Ga.addScaledVector(Qc,u):Ga.addScaledVector(Qc.sub(t),u))}t.add(Ga)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(r),$s.copy(e.ray).recast(e.near),!(za.containsPoint($s.origin)===!1&&($s.intersectSphere(za,qd)===null||$s.origin.distanceToSquared(qd)>(e.far-e.near)**2))&&(Xd.copy(r).invert(),$s.copy(e.ray).applyMatrix4(Xd),!(i.boundingBox!==null&&$s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$s)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,T=M;y<T;y+=3){let b=a.getX(y),v=a.getX(y+1),w=a.getX(y+2);s=Xa(this,p,e,i,c,u,h,b,v,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let S=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=Xa(this,o,e,i,c,u,h,S,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,T=M;y<T;y+=3){let b=y,v=y+1,w=y+2;s=Xa(this,p,e,i,c,u,h,b,v,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let S=m,M=m+1,y=m+2;s=Xa(this,o,e,i,c,u,h,S,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function iv(n,e,t,i,s,r,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===wi,a),l===null)return null;Wa.copy(a),Wa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Wa);return c<t.near||c>t.far?null:{distance:c,point:Wa.clone(),object:n}}function Xa(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ka),n.getVertexPosition(l,Ha),n.getVertexPosition(c,Va);let u=iv(n,e,t,i,ka,Ha,Va,Yd);if(u){let h=new H;gs.getBarycoord(Yd,ka,Ha,Va,h),s&&(u.uv=gs.getInterpolatedAttribute(s,a,l,c,h,new $e)),r&&(u.uv1=gs.getInterpolatedAttribute(r,a,l,c,h,new $e)),o&&(u.normal=gs.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new H,materialIndex:0};gs.getNormal(ka,Ha,Va,f.normal),u.face=f,u.barycoord=h}return u}var un=class n extends gt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(h,2));function g(x,m,p,S,M,y,T,b,v,w,_){let E=y/v,R=T/w,F=y/2,k=T/2,L=b/2,O=v+1,D=w+1,Y=0,V=0,J=new H;for(let oe=0;oe<D;oe++){let de=oe*R-k;for(let ve=0;ve<O;ve++){let ce=ve*E-F;J[x]=ce*S,J[m]=de*M,J[p]=L,c.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[p]=b>0?1:-1,u.push(J.x,J.y,J.z),h.push(ve/v),h.push(1-oe/w),Y+=1}}for(let oe=0;oe<w;oe++)for(let de=0;de<v;de++){let ve=f+de+O*oe,ce=f+de+O*(oe+1),ie=f+(de+1)+O*(oe+1),Q=f+(de+1)+O*oe;l.push(ve,ce,Q),l.push(ce,ie,Q),V+=6}a.addGroup(d,V,_),d+=V,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Qr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Cn(n){let e={};for(let t=0;t<n.length;t++){let i=Qr(n[t]);for(let s in i)e[s]=i[s]}return e}function sv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nm(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var En={clone:Qr,merge:Cn},rv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vt=class extends bn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rv,this.fragmentShader=ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qr(e.uniforms),this.uniformsGroups=sv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},xl=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ps=new H,$d=new $e,Zd=new $e,Zt=class extends xl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ps.x,ps.y).multiplyScalar(-e/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ps.x,ps.y).multiplyScalar(-e/ps.z)}getViewSize(e,t){return this.getViewBounds(e,$d,Zd),t.subVectors(Zd,$d)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Go*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ir=-90,Lr=1,Qu=class extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zt(Ir,Lr,e,t);s.layers=this.layers,this.add(s);let r=new Zt(Ir,Lr,e,t);r.layers=this.layers,this.add(r);let o=new Zt(Ir,Lr,e,t);o.layers=this.layers,this.add(o);let a=new Zt(Ir,Lr,e,t);a.layers=this.layers,this.add(a);let l=new Zt(Ir,Lr,e,t);l.layers=this.layers,this.add(l);let c=new Zt(Ir,Lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===qi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},vl=class extends cn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Yr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},eh=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new vl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:On}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new un(5,5,5),r=new vt({name:"CubemapFromEquirect",uniforms:Qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:sn});r.uniforms.tEquirect.value=t;let o=new ot(s,r),a=t.minFilter;return t.minFilter===ti&&(t.minFilter=On),new Qu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},eu=new H,av=new H,lv=new ut,pi=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=eu.subVectors(i,t).cross(av.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(eu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||lv.getNormalMatrix(e),s=this.coplanarPoint(eu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zs=new qn,qa=new H,Ko=class{constructor(e=new pi,t=new pi,i=new pi,s=new pi,r=new pi,o=new pi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],S=s[13],M=s[14],y=s[15];if(i[0].setComponents(l-r,f-c,m-d,y-p).normalize(),i[1].setComponents(l+r,f+c,m+d,y+p).normalize(),i[2].setComponents(l+o,f+u,m+g,y+S).normalize(),i[3].setComponents(l-o,f-u,m-g,y-S).normalize(),i[4].setComponents(l-a,f-h,m-x,y-M).normalize(),t===qi)i[5].setComponents(l+a,f+h,m+x,y+M).normalize();else if(t===hl)i[5].setComponents(a,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(e){return Zs.center.set(0,0,0),Zs.radius=.7071067811865476,Zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(qa.x=s.normal.x>0?e.max.x:e.min.x,qa.y=s.normal.y>0?e.max.y:e.min.y,qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function im(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function cv(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var zn=class n extends gt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let S=p*f-o;for(let M=0;M<c;M++){let y=M*h-r;g.push(y,-S,0),x.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let M=S+c*p,y=S+c*(p+1),T=S+1+c*(p+1),b=S+1+c*p;d.push(M,y,b),d.push(y,T,b)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},uv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hv=`#ifdef USE_ALPHAHASH
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
#endif`,fv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gv=`#ifdef USE_AOMAP
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
#endif`,xv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vv=`#ifdef USE_BATCHING
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
#endif`,yv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sv=`#ifdef USE_IRIDESCENCE
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
#endif`,Tv=`#ifdef USE_BUMPMAP
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
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Av=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dv=`#define PI 3.141592653589793
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
} // validated`,Nv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Uv=`vec3 transformedNormal = objectNormal;
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
#endif`,Fv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ov=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wv=`#ifdef USE_ENVMAP
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
#endif`,Xv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qv=`#ifdef USE_ENVMAP
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
#endif`,Yv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$v=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jv=`#ifdef USE_GRADIENTMAP
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
}`,Jv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ty=`uniform bool receiveShadow;
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
#endif`,ny=`#ifdef USE_ENVMAP
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
#endif`,iy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ry=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ay=`PhysicalMaterial material;
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
#endif`,ly=`struct PhysicalMaterial {
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
}`,cy=`
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
#endif`,uy=`#if defined( RE_IndirectDiffuse )
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
#endif`,hy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,py=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,my=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yy=`#if defined( USE_POINTS_UV )
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
#endif`,_y=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,My=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,by=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ty=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`#ifdef USE_MORPHTARGETS
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
#endif`,wy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ly=`#ifdef USE_NORMALMAP
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
#endif`,Dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Oy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,By=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ky=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$y=`float getShadowMask() {
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
}`,Zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ky=`#ifdef USE_SKINNING
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
#endif`,jy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jy=`#ifdef USE_SKINNING
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
#endif`,Qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i_=`#ifdef USE_TRANSMISSION
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
#endif`,s_=`#ifdef USE_TRANSMISSION
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
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,c_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u_=`uniform sampler2D t2D;
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
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m_=`#include <common>
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
}`,g_=`#if DEPTH_PACKING == 3200
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
}`,x_=`#define DISTANCE
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
}`,v_=`#define DISTANCE
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
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,__=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`uniform float scale;
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
}`,b_=`uniform vec3 diffuse;
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
}`,S_=`#include <common>
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
}`,T_=`uniform vec3 diffuse;
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
}`,E_=`#define LAMBERT
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
}`,w_=`#define LAMBERT
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
}`,A_=`#define MATCAP
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
}`,R_=`#define MATCAP
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
}`,C_=`#define NORMAL
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
}`,P_=`#define NORMAL
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
}`,I_=`#define PHONG
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
}`,L_=`#define PHONG
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
}`,D_=`#define STANDARD
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
}`,N_=`#define STANDARD
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
}`,U_=`#define TOON
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
}`,F_=`#define TOON
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
}`,O_=`uniform float size;
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
}`,B_=`uniform vec3 diffuse;
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
}`,z_=`#include <common>
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
}`,k_=`uniform vec3 color;
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
}`,H_=`uniform float rotation;
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
}`,V_=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:uv,alphahash_pars_fragment:hv,alphamap_fragment:fv,alphamap_pars_fragment:dv,alphatest_fragment:pv,alphatest_pars_fragment:mv,aomap_fragment:gv,aomap_pars_fragment:xv,batching_pars_vertex:vv,batching_vertex:yv,begin_vertex:_v,beginnormal_vertex:Mv,bsdfs:bv,iridescence_fragment:Sv,bumpmap_pars_fragment:Tv,clipping_planes_fragment:Ev,clipping_planes_pars_fragment:wv,clipping_planes_pars_vertex:Av,clipping_planes_vertex:Rv,color_fragment:Cv,color_pars_fragment:Pv,color_pars_vertex:Iv,color_vertex:Lv,common:Dv,cube_uv_reflection_fragment:Nv,defaultnormal_vertex:Uv,displacementmap_pars_vertex:Fv,displacementmap_vertex:Ov,emissivemap_fragment:Bv,emissivemap_pars_fragment:zv,colorspace_fragment:kv,colorspace_pars_fragment:Hv,envmap_fragment:Vv,envmap_common_pars_fragment:Gv,envmap_pars_fragment:Wv,envmap_pars_vertex:Xv,envmap_physical_pars_fragment:ny,envmap_vertex:qv,fog_vertex:Yv,fog_pars_vertex:$v,fog_fragment:Zv,fog_pars_fragment:Kv,gradientmap_pars_fragment:jv,lightmap_pars_fragment:Jv,lights_lambert_fragment:Qv,lights_lambert_pars_fragment:ey,lights_pars_begin:ty,lights_toon_fragment:iy,lights_toon_pars_fragment:sy,lights_phong_fragment:ry,lights_phong_pars_fragment:oy,lights_physical_fragment:ay,lights_physical_pars_fragment:ly,lights_fragment_begin:cy,lights_fragment_maps:uy,lights_fragment_end:hy,logdepthbuf_fragment:fy,logdepthbuf_pars_fragment:dy,logdepthbuf_pars_vertex:py,logdepthbuf_vertex:my,map_fragment:gy,map_pars_fragment:xy,map_particle_fragment:vy,map_particle_pars_fragment:yy,metalnessmap_fragment:_y,metalnessmap_pars_fragment:My,morphinstance_vertex:by,morphcolor_vertex:Sy,morphnormal_vertex:Ty,morphtarget_pars_vertex:Ey,morphtarget_vertex:wy,normal_fragment_begin:Ay,normal_fragment_maps:Ry,normal_pars_fragment:Cy,normal_pars_vertex:Py,normal_vertex:Iy,normalmap_pars_fragment:Ly,clearcoat_normal_fragment_begin:Dy,clearcoat_normal_fragment_maps:Ny,clearcoat_pars_fragment:Uy,iridescence_pars_fragment:Fy,opaque_fragment:Oy,packing:By,premultiplied_alpha_fragment:zy,project_vertex:ky,dithering_fragment:Hy,dithering_pars_fragment:Vy,roughnessmap_fragment:Gy,roughnessmap_pars_fragment:Wy,shadowmap_pars_fragment:Xy,shadowmap_pars_vertex:qy,shadowmap_vertex:Yy,shadowmask_pars_fragment:$y,skinbase_vertex:Zy,skinning_pars_vertex:Ky,skinning_vertex:jy,skinnormal_vertex:Jy,specularmap_fragment:Qy,specularmap_pars_fragment:e_,tonemapping_fragment:t_,tonemapping_pars_fragment:n_,transmission_fragment:i_,transmission_pars_fragment:s_,uv_pars_fragment:r_,uv_pars_vertex:o_,uv_vertex:a_,worldpos_vertex:l_,background_vert:c_,background_frag:u_,backgroundCube_vert:h_,backgroundCube_frag:f_,cube_vert:d_,cube_frag:p_,depth_vert:m_,depth_frag:g_,distanceRGBA_vert:x_,distanceRGBA_frag:v_,equirect_vert:y_,equirect_frag:__,linedashed_vert:M_,linedashed_frag:b_,meshbasic_vert:S_,meshbasic_frag:T_,meshlambert_vert:E_,meshlambert_frag:w_,meshmatcap_vert:A_,meshmatcap_frag:R_,meshnormal_vert:C_,meshnormal_frag:P_,meshphong_vert:I_,meshphong_frag:L_,meshphysical_vert:D_,meshphysical_frag:N_,meshtoon_vert:U_,meshtoon_frag:F_,points_vert:O_,points_frag:B_,shadow_vert:z_,shadow_frag:k_,sprite_vert:H_,sprite_frag:V_},Xe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Ei={basic:{uniforms:Cn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Cn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Re(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Cn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Cn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Cn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new Re(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Cn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Cn([Xe.points,Xe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Cn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Cn([Xe.common,Xe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Cn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Cn([Xe.sprite,Xe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Cn([Xe.common,Xe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Cn([Xe.lights,Xe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ei.physical={uniforms:Cn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Ya={r:0,b:0,g:0},Ks=new yi,G_=new je;function W_(n,e,t,i,s,r,o){let a=new Re(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function x(S){let M=!1,y=g(S);y===null?p(a,l):y&&y.isColor&&(p(y,1),M=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,M){let y=g(M);y&&(y.isCubeTexture||y.mapping===Fl)?(u===void 0&&(u=new ot(new un(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:Qr(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,b,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ks.copy(M.backgroundRotation),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(G_.makeRotationFromEuler(Ks)),u.material.toneMapped=pt.getTransfer(y.colorSpace)!==Et,(h!==y||f!==y.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ot(new zn(2,2),new vt({name:"BackgroundMaterial",uniforms:Qr(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=pt.getTransfer(y.colorSpace)!==Et,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,M){S.getRGB(Ya,nm(n)),i.buffers.color.setClear(Ya.r,Ya.g,Ya.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:x,addToRenderList:m}}function X_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(E,R,F,k,L){let O=!1,D=h(k,F,R);r!==D&&(r=D,c(r.object)),O=d(E,k,F,L),O&&g(E,k,F,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,y(E,R,F,k),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function h(E,R,F){let k=F.wireframe===!0,L=i[E.id];L===void 0&&(L={},i[E.id]=L);let O=L[R.id];O===void 0&&(O={},L[R.id]=O);let D=O[k];return D===void 0&&(D=f(l()),O[k]=D),D}function f(E){let R=[],F=[],k=[];for(let L=0;L<t;L++)R[L]=0,F[L]=0,k[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:k,object:E,attributes:{},index:null}}function d(E,R,F,k){let L=r.attributes,O=R.attributes,D=0,Y=F.getAttributes();for(let V in Y)if(Y[V].location>=0){let oe=L[V],de=O[V];if(de===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(de=E.instanceColor)),oe===void 0||oe.attribute!==de||de&&oe.data!==de.data)return!0;D++}return r.attributesNum!==D||r.index!==k}function g(E,R,F,k){let L={},O=R.attributes,D=0,Y=F.getAttributes();for(let V in Y)if(Y[V].location>=0){let oe=O[V];oe===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor));let de={};de.attribute=oe,oe&&oe.data&&(de.data=oe.data),L[V]=de,D++}r.attributes=L,r.attributesNum=D,r.index=k}function x(){let E=r.newAttributes;for(let R=0,F=E.length;R<F;R++)E[R]=0}function m(E){p(E,0)}function p(E,R){let F=r.newAttributes,k=r.enabledAttributes,L=r.attributeDivisors;F[E]=1,k[E]===0&&(n.enableVertexAttribArray(E),k[E]=1),L[E]!==R&&(n.vertexAttribDivisor(E,R),L[E]=R)}function S(){let E=r.newAttributes,R=r.enabledAttributes;for(let F=0,k=R.length;F<k;F++)R[F]!==E[F]&&(n.disableVertexAttribArray(F),R[F]=0)}function M(E,R,F,k,L,O,D){D===!0?n.vertexAttribIPointer(E,R,F,L,O):n.vertexAttribPointer(E,R,F,k,L,O)}function y(E,R,F,k){x();let L=k.attributes,O=F.getAttributes(),D=R.defaultAttributeValues;for(let Y in O){let V=O[Y];if(V.location>=0){let J=L[Y];if(J===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(J=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(J=E.instanceColor)),J!==void 0){let oe=J.normalized,de=J.itemSize,ve=e.get(J);if(ve===void 0)continue;let ce=ve.buffer,ie=ve.type,Q=ve.bytesPerElement,ee=ie===n.INT||ie===n.UNSIGNED_INT||J.gpuType===Dh;if(J.isInterleavedBufferAttribute){let I=J.data,B=I.stride,X=J.offset;if(I.isInstancedInterleavedBuffer){for(let $=0;$<V.locationSize;$++)p(V.location+$,I.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let $=0;$<V.locationSize;$++)m(V.location+$);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let $=0;$<V.locationSize;$++)M(V.location+$,de/V.locationSize,ie,oe,B*Q,(X+de/V.locationSize*$)*Q,ee)}else{if(J.isInstancedBufferAttribute){for(let I=0;I<V.locationSize;I++)p(V.location+I,J.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let I=0;I<V.locationSize;I++)m(V.location+I);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let I=0;I<V.locationSize;I++)M(V.location+I,de/V.locationSize,ie,oe,de*Q,de/V.locationSize*I*Q,ee)}}else if(D!==void 0){let oe=D[Y];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(V.location,oe);break;case 3:n.vertexAttrib3fv(V.location,oe);break;case 4:n.vertexAttrib4fv(V.location,oe);break;default:n.vertexAttrib1fv(V.location,oe)}}}}S()}function T(){w();for(let E in i){let R=i[E];for(let F in R){let k=R[F];for(let L in k)u(k[L].object),delete k[L];delete R[F]}delete i[E]}}function b(E){if(i[E.id]===void 0)return;let R=i[E.id];for(let F in R){let k=R[F];for(let L in k)u(k[L].object),delete k[L];delete R[F]}delete i[E.id]}function v(E){for(let R in i){let F=i[R];if(F[E.id]===void 0)continue;let k=F[E.id];for(let L in k)u(k[L].object),delete k[L];delete F[E.id]}}function w(){_(),o=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:_,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function q_(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Y_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==Bn&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let w=v===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==vi&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==gi&&!w)}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:T,maxSamples:b}}function $_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new pi,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let S=r?0:i,M=S*4,y=p.clippingState||null;l.value=y,y=u(g,f,M,d);for(let T=0;T!==M;++T)y[T]=t[T];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=d;M!==x;++M,y+=4)o.copy(h[M]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Z_(n){let e=new WeakMap;function t(o,a){return a===Mu?o.mapping=Yr:a===bu&&(o.mapping=$r),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Mu||a===bu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new eh(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var bs=class extends xl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},kr=4,Kd=[.125,.215,.35,.446,.526,.582],Qs=20,tu=new bs,jd=new Re,nu=null,iu=0,su=0,ru=!1,Js=(1+Math.sqrt(5))/2,Dr=1/Js,Jd=[new H(-Js,Dr,0),new H(Js,Dr,0),new H(-Dr,0,Js),new H(Dr,0,Js),new H(0,Js,-Dr),new H(0,Js,Dr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],eo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nu,iu,su),this._renderer.xr.enabled=ru,e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yr||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:hn,format:Bn,colorSpace:Tn,depthBuffer:!1},s=Qd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K_(r)),this._blurMaterial=j_(r,e,t)}return s}_compileMaterial(e){let t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,tu)}_sceneToCubeUV(e,t,i,s){let a=new Zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(jd),u.toneMapping=vs,u.autoClear=!1;let d=new Yt({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new ot(new un,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(jd),x=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let M=this._cubeSize;$a(s,S*M,p>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Yr||e.mapping===$r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ep());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;$a(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,tu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jd[(s-r-1)%Jd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ot(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Qs-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Qs;m>Qs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qs}`);let p=[],S=0;for(let v=0;v<Qs;++v){let w=v/x,_=Math.exp(-w*w/2);p.push(_),v===0?S+=_:v<m&&(S+=2*_)}for(let v=0;v<p.length;v++)p[v]=p[v]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;let y=this._sizeLods[s],T=3*y*(s>M-kr?s-M+kr:0),b=4*(this._cubeSize-y);$a(t,T,b,3*y,2*y),l.setRenderTarget(t),l.render(h,tu)}};function K_(n){let e=[],t=[],i=[],s=n,r=n-kr+1+Kd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-kr?l=Kd[o-n+kr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*d),M=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let b=0;b<d;b++){let v=b%3*2/3-1,w=b>2?0:-1,_=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];S.set(_,x*g*b),M.set(f,m*g*b);let E=[b,b,b,b,b,b];y.set(E,p*g*b)}let T=new gt;T.setAttribute("position",new mt(S,x)),T.setAttribute("uv",new mt(M,m)),T.setAttribute("faceIndex",new mt(y,p)),e.push(T),s>kr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qd(n,e,t){let i=new qt(n,e,t);return i.texture.mapping=Fl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $a(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function j_(n,e,t){let i=new Float32Array(Qs),s=new H(0,1,0);return new vt({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:sn,depthTest:!1,depthWrite:!1})}function ep(){return new vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:sn,depthTest:!1,depthWrite:!1})}function tp(){return new vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Hh(){return`

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
	`}function J_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Mu||l===bu,u=l===Yr||l===$r;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new eo(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new eo(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Q_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ko("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function e1(n,e,t,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let d=h.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){let f=[],d=h.index,g=h.attributes.position,x=0;if(d!==null){let S=d.array;x=d.version;for(let M=0,y=S.length;M<y;M+=3){let T=S[M+0],b=S[M+1],v=S[M+2];f.push(T,b,b,v,v,T)}}else if(g!==void 0){let S=g.array;x=g.version;for(let M=0,y=S.length/3-1;M<y;M+=3){let T=M+0,b=M+1,v=M+2;f.push(T,b,b,v,v,T)}}else return;let m=new(em(f)?gl:ml)(f,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function t1(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*x[S];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function n1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function i1(n,e,t){let i=new WeakMap,s=new _t;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let _=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*T*4*h),v=new dl(b,y,T,h);v.type=gi,v.needsUpdate=!0;let w=M*4;for(let E=0;E<h;E++){let R=m[E],F=p[E],k=S[E],L=y*T*4*E;for(let O=0;O<R.count;O++){let D=O*w;d===!0&&(s.fromBufferAttribute(R,O),b[L+D+0]=s.x,b[L+D+1]=s.y,b[L+D+2]=s.z,b[L+D+3]=0),g===!0&&(s.fromBufferAttribute(F,O),b[L+D+4]=s.x,b[L+D+5]=s.y,b[L+D+6]=s.z,b[L+D+7]=0),x===!0&&(s.fromBufferAttribute(k,O),b[L+D+8]=s.x,b[L+D+9]=s.y,b[L+D+10]=s.z,b[L+D+11]=k.itemSize===4?s.w:1)}}f={count:h,texture:v,size:new $e(y,T)},i.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function s1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var to=class extends cn{constructor(e,t,i,s,r,o,a,l,c,u=Vr){if(u!==Vr&&u!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Vr&&(i=er),i===void 0&&u===_s&&(i=ys),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},sm=new cn,np=new to(1,1),rm=new dl,om=new Ju,am=new vl,ip=[],sp=[],rp=new Float32Array(16),op=new Float32Array(9),ap=new Float32Array(4);function uo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ip[s];if(r===void 0&&(r=new Float32Array(s),ip[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function an(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function kl(n,e){let t=sp[e];t===void 0&&(t=new Int32Array(e),sp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function r1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function o1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),an(t,e)}}function a1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),an(t,e)}}function l1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),an(t,e)}}function c1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;ap.set(i),n.uniformMatrix2fv(this.addr,!1,ap),an(t,i)}}function u1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;op.set(i),n.uniformMatrix3fv(this.addr,!1,op),an(t,i)}}function h1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;rp.set(i),n.uniformMatrix4fv(this.addr,!1,rp),an(t,i)}}function f1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function d1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2iv(this.addr,e),an(t,e)}}function p1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3iv(this.addr,e),an(t,e)}}function m1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4iv(this.addr,e),an(t,e)}}function g1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function x1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2uiv(this.addr,e),an(t,e)}}function v1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3uiv(this.addr,e),an(t,e)}}function y1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4uiv(this.addr,e),an(t,e)}}function _1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(np.compareFunction=Jp,r=np):r=sm,t.setTexture2D(e||r,s)}function M1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||om,s)}function b1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||am,s)}function S1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||rm,s)}function T1(n){switch(n){case 5126:return r1;case 35664:return o1;case 35665:return a1;case 35666:return l1;case 35674:return c1;case 35675:return u1;case 35676:return h1;case 5124:case 35670:return f1;case 35667:case 35671:return d1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return x1;case 36295:return v1;case 36296:return y1;case 35678:case 36198:case 36298:case 36306:case 35682:return _1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return S1}}function E1(n,e){n.uniform1fv(this.addr,e)}function w1(n,e){let t=uo(e,this.size,2);n.uniform2fv(this.addr,t)}function A1(n,e){let t=uo(e,this.size,3);n.uniform3fv(this.addr,t)}function R1(n,e){let t=uo(e,this.size,4);n.uniform4fv(this.addr,t)}function C1(n,e){let t=uo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function P1(n,e){let t=uo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function I1(n,e){let t=uo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function L1(n,e){n.uniform1iv(this.addr,e)}function D1(n,e){n.uniform2iv(this.addr,e)}function N1(n,e){n.uniform3iv(this.addr,e)}function U1(n,e){n.uniform4iv(this.addr,e)}function F1(n,e){n.uniform1uiv(this.addr,e)}function O1(n,e){n.uniform2uiv(this.addr,e)}function B1(n,e){n.uniform3uiv(this.addr,e)}function z1(n,e){n.uniform4uiv(this.addr,e)}function k1(n,e,t){let i=this.cache,s=e.length,r=kl(t,s);on(i,r)||(n.uniform1iv(this.addr,r),an(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||sm,r[o])}function H1(n,e,t){let i=this.cache,s=e.length,r=kl(t,s);on(i,r)||(n.uniform1iv(this.addr,r),an(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||om,r[o])}function V1(n,e,t){let i=this.cache,s=e.length,r=kl(t,s);on(i,r)||(n.uniform1iv(this.addr,r),an(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||am,r[o])}function G1(n,e,t){let i=this.cache,s=e.length,r=kl(t,s);on(i,r)||(n.uniform1iv(this.addr,r),an(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||rm,r[o])}function W1(n){switch(n){case 5126:return E1;case 35664:return w1;case 35665:return A1;case 35666:return R1;case 35674:return C1;case 35675:return P1;case 35676:return I1;case 5124:case 35670:return L1;case 35667:case 35671:return D1;case 35668:case 35672:return N1;case 35669:case 35673:return U1;case 5125:return F1;case 36294:return O1;case 36295:return B1;case 36296:return z1;case 35678:case 36198:case 36298:case 36306:case 35682:return k1;case 35679:case 36299:case 36307:return H1;case 35680:case 36300:case 36308:case 36293:return V1;case 36289:case 36303:case 36311:case 36292:return G1}}var th=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=T1(t.type)}},nh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=W1(t.type)}},ih=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},ou=/(\w+)(\])?(\[|\.)?/g;function lp(n,e){n.seq.push(e),n.map[e.id]=e}function X1(n,e,t){let i=n.name,s=i.length;for(ou.lastIndex=0;;){let r=ou.exec(i),o=ou.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){lp(t,c===void 0?new th(a,n,e):new nh(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new ih(a),lp(t,h)),t=h}}}var Wr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);X1(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function cp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var q1=37297,Y1=0;function $1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var up=new ut;function Z1(n){pt._getMatrix(up,pt.workingColorSpace,n);let e=`mat3( ${up.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(n)){case zl:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function hp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+$1(n.getShaderSource(e),o)}else return s}function K1(n,e){let t=Z1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function j1(n,e){let t;switch(e){case Ah:t="Linear";break;case Rh:t="Reinhard";break;case Ch:t="Cineon";break;case ia:t="ACESFilmic";break;case Ph:t="AgX";break;case Ih:t="Neutral";break;case dx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Za=new H;function J1(){pt.getLuminanceCoefficients(Za);let n=Za.x.toFixed(4),e=Za.y.toFixed(4),t=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function eM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ho(n){return n!==""}function fp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var nM=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(n){return n.replace(nM,sM)}var iM=new Map;function sM(n,e){let t=ft[e];if(t===void 0){let i=iM.get(e);if(i!==void 0)t=ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sh(t)}var rM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pp(n){return n.replace(rM,oM)}function oM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function aM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Dl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===jg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function lM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Yr:case $r:e="ENVMAP_TYPE_CUBE";break;case Fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cM(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===$r&&(e="ENVMAP_MODE_REFRACTION"),e}function uM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wh:e="ENVMAP_BLENDING_MULTIPLY";break;case hx:e="ENVMAP_BLENDING_MIX";break;case fx:e="ENVMAP_BLENDING_ADD";break}return e}function hM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function fM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=aM(t),c=lM(t),u=cM(t),h=uM(t),f=hM(t),d=Q1(t),g=eM(r),x=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ho).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ho).join(`
`),p.length>0&&(p+=`
`)):(m=[mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),p=[mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vs?"#define TONE_MAPPING":"",t.toneMapping!==vs?ft.tonemapping_pars_fragment:"",t.toneMapping!==vs?j1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,K1("linearToOutputTexel",t.outputColorSpace),J1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ho).join(`
`)),o=sh(o),o=fp(o,t),o=dp(o,t),a=sh(a),a=fp(a,t),a=dp(a,t),o=pp(o),a=pp(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=S+m+o,y=S+p+a,T=cp(s,s.VERTEX_SHADER,M),b=cp(s,s.FRAGMENT_SHADER,y);s.attachShader(x,T),s.attachShader(x,b),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function v(R){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(T).trim(),L=s.getShaderInfoLog(b).trim(),O=!0,D=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,T,b);else{let Y=hp(s,T,"vertex"),V=hp(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+Y+`
`+V)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||L==="")&&(D=!1);D&&(R.diagnostics={runnable:O,programLog:F,vertexShader:{log:k,prefix:m},fragmentShader:{log:L,prefix:p}})}s.deleteShader(T),s.deleteShader(b),w=new Wr(s,x),_=tM(s,x)}let w;this.getUniforms=function(){return w===void 0&&v(this),w};let _;this.getAttributes=function(){return _===void 0&&v(this),_};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,q1)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=b,this}var dM=0,rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new oh(e),t.set(e,i)),i}},oh=class{constructor(e){this.id=dM++,this.code=e,this.usedTimes=0}};function pM(n,e,t,i,s,r,o){let a=new pl,l=new rh,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,E,R,F,k){let L=F.fog,O=k.geometry,D=_.isMeshStandardMaterial?F.environment:null,Y=(_.isMeshStandardMaterial?t:e).get(_.envMap||D),V=Y&&Y.mapping===Fl?Y.image.height:null,J=g[_.type];_.precision!==null&&(d=s.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let oe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,de=oe!==void 0?oe.length:0,ve=0;O.morphAttributes.position!==void 0&&(ve=1),O.morphAttributes.normal!==void 0&&(ve=2),O.morphAttributes.color!==void 0&&(ve=3);let ce,ie,Q,ee;if(J){let Ge=Ei[J];ce=Ge.vertexShader,ie=Ge.fragmentShader}else ce=_.vertexShader,ie=_.fragmentShader,l.update(_),Q=l.getVertexShaderID(_),ee=l.getFragmentShaderID(_);let I=n.getRenderTarget(),B=n.state.buffers.depth.getReversed(),X=k.isInstancedMesh===!0,$=k.isBatchedMesh===!0,pe=!!_.map,we=!!_.matcap,Ae=!!Y,G=!!_.aoMap,Ve=!!_.lightMap,ze=!!_.bumpMap,Be=!!_.normalMap,Ie=!!_.displacementMap,qe=!!_.emissiveMap,Fe=!!_.metalnessMap,N=!!_.roughnessMap,A=_.anisotropy>0,j=_.clearcoat>0,xe=_.dispersion>0,_e=_.iridescence>0,he=_.sheen>0,Ce=_.transmission>0,Le=A&&!!_.anisotropyMap,Ne=j&&!!_.clearcoatMap,ke=j&&!!_.clearcoatNormalMap,Ee=j&&!!_.clearcoatRoughnessMap,Ue=_e&&!!_.iridescenceMap,se=_e&&!!_.iridescenceThicknessMap,be=he&&!!_.sheenColorMap,ne=he&&!!_.sheenRoughnessMap,Me=!!_.specularMap,fe=!!_.specularColorMap,ge=!!_.specularIntensityMap,W=Ce&&!!_.transmissionMap,Te=Ce&&!!_.thicknessMap,C=!!_.gradientMap,U=!!_.alphaMap,z=_.alphaTest>0,Z=!!_.alphaHash,ae=!!_.extensions,Pe=vs;_.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Pe=n.toneMapping);let He={shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:ce,fragmentShader:ie,defines:_.defines,customVertexShaderID:Q,customFragmentShaderID:ee,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:$,batchingColor:$&&k._colorsTexture!==null,instancing:X,instancingColor:X&&k.instanceColor!==null,instancingMorph:X&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:I===null?n.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Tn,alphaToCoverage:!!_.alphaToCoverage,map:pe,matcap:we,envMap:Ae,envMapMode:Ae&&Y.mapping,envMapCubeUVHeight:V,aoMap:G,lightMap:Ve,bumpMap:ze,normalMap:Be,displacementMap:f&&Ie,emissiveMap:qe,normalMapObjectSpace:Be&&_.normalMapType===vx,normalMapTangentSpace:Be&&_.normalMapType===Bl,metalnessMap:Fe,roughnessMap:N,anisotropy:A,anisotropyMap:Le,clearcoat:j,clearcoatMap:Ne,clearcoatNormalMap:ke,clearcoatRoughnessMap:Ee,dispersion:xe,iridescence:_e,iridescenceMap:Ue,iridescenceThicknessMap:se,sheen:he,sheenColorMap:be,sheenRoughnessMap:ne,specularMap:Me,specularColorMap:fe,specularIntensityMap:ge,transmission:Ce,transmissionMap:W,thicknessMap:Te,gradientMap:C,opaque:_.transparent===!1&&_.blending===Hr&&_.alphaToCoverage===!1,alphaMap:U,alphaTest:z,alphaHash:Z,combine:_.combine,mapUv:pe&&x(_.map.channel),aoMapUv:G&&x(_.aoMap.channel),lightMapUv:Ve&&x(_.lightMap.channel),bumpMapUv:ze&&x(_.bumpMap.channel),normalMapUv:Be&&x(_.normalMap.channel),displacementMapUv:Ie&&x(_.displacementMap.channel),emissiveMapUv:qe&&x(_.emissiveMap.channel),metalnessMapUv:Fe&&x(_.metalnessMap.channel),roughnessMapUv:N&&x(_.roughnessMap.channel),anisotropyMapUv:Le&&x(_.anisotropyMap.channel),clearcoatMapUv:Ne&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ke&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:se&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:ne&&x(_.sheenRoughnessMap.channel),specularMapUv:Me&&x(_.specularMap.channel),specularColorMapUv:fe&&x(_.specularColorMap.channel),specularIntensityMapUv:ge&&x(_.specularIntensityMap.channel),transmissionMapUv:W&&x(_.transmissionMap.channel),thicknessMapUv:Te&&x(_.thicknessMap.channel),alphaMapUv:U&&x(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Be||A),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(pe||U),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:B,skinning:k.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ve,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pe,decodeVideoTexture:pe&&_.map.isVideoTexture===!0&&pt.getTransfer(_.map.colorSpace)===Et,decodeVideoTextureEmissive:qe&&_.emissiveMap.isVideoTexture===!0&&pt.getTransfer(_.emissiveMap.colorSpace)===Et,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pt,flipSided:_.side===en,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ae&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&_.extensions.multiDraw===!0||$)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function p(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)E.push(R),E.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(S(E,_),M(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function S(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function M(_,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),_.push(a.mask)}function y(_){let E=g[_.type],R;if(E){let F=Ei[E];R=En.clone(F.uniforms)}else R=_.uniforms;return R}function T(_,E){let R;for(let F=0,k=u.length;F<k;F++){let L=u[F];if(L.cacheKey===E){R=L,++R.usedTimes;break}}return R===void 0&&(R=new fM(n,E,_,r),u.push(R)),R}function b(_){if(--_.usedTimes===0){let E=u.indexOf(_);u[E]=u[u.length-1],u.pop(),_.destroy()}}function v(_){l.remove(_)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:b,releaseShaderCache:v,programs:u,dispose:w}}function mM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function gM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function gp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,g,x,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,f,d,g,x,m){let p=o(h,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,x,m){let p=o(h,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||gM),i.length>1&&i.sort(f||gp),s.length>1&&s.sort(f||gp)}function u(){for(let h=e,f=n.length;h<f;h++){let d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function xM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new xp,n.set(i,[o])):s>=r.length?(o=new xp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function vM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Re};break;case"SpotLight":t={position:new H,direction:new H,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function yM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var _M=0;function MM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bM(n){let e=new vM,t=yM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);let s=new H,r=new je,o=new je;function a(c){let u=0,h=0,f=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,S=0,M=0,y=0,T=0,b=0,v=0;c.sort(MM);for(let _=0,E=c.length;_<E;_++){let R=c[_],F=R.color,k=R.intensity,L=R.distance,O=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=F.r*k,h+=F.g*k,f+=F.b*k;else if(R.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(R.sh.coefficients[D],k);v++}else if(R.isDirectionalLight){let D=e.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Y=R.shadow,V=t.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,i.directionalShadow[d]=V,i.directionalShadowMap[d]=O,i.directionalShadowMatrix[d]=R.shadow.matrix,S++}i.directional[d]=D,d++}else if(R.isSpotLight){let D=e.get(R);D.position.setFromMatrixPosition(R.matrixWorld),D.color.copy(F).multiplyScalar(k),D.distance=L,D.coneCos=Math.cos(R.angle),D.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),D.decay=R.decay,i.spot[x]=D;let Y=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,Y.updateMatrices(R),R.castShadow&&b++),i.spotLightMatrix[x]=Y.matrix,R.castShadow){let V=t.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=O,y++}x++}else if(R.isRectAreaLight){let D=e.get(R);D.color.copy(F).multiplyScalar(k),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=D,m++}else if(R.isPointLight){let D=e.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity),D.distance=R.distance,D.decay=R.decay,R.castShadow){let Y=R.shadow,V=t.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=R.shadow.matrix,M++}i.point[g]=D,g++}else if(R.isHemisphereLight){let D=e.get(R);D.skyColor.copy(R.color).multiplyScalar(k),D.groundColor.copy(R.groundColor).multiplyScalar(k),i.hemi[p]=D,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Xe.LTC_FLOAT_1,i.rectAreaLTC2=Xe.LTC_FLOAT_2):(i.rectAreaLTC1=Xe.LTC_HALF_1,i.rectAreaLTC2=Xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let w=i.hash;(w.directionalLength!==d||w.pointLength!==g||w.spotLength!==x||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==S||w.numPointShadows!==M||w.numSpotShadows!==y||w.numSpotMaps!==T||w.numLightProbes!==v)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=v,w.directionalLength=d,w.pointLength=g,w.spotLength=x,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=S,w.numPointShadows=M,w.numSpotShadows=y,w.numSpotMaps=T,w.numLightProbes=v,i.version=_M++)}function l(c,u){let h=0,f=0,d=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let M=c[p];if(M.isDirectionalLight){let y=i.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(M.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(M.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function vp(n){let e=new bM(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function SM(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new vp(n),e.set(s,[a])):r>=o.length?(a=new vp(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var ah=class extends bn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},lh=class extends bn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},TM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EM=`uniform sampler2D shadow_pass;
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
}`;function wM(n,e,t){let i=new Ko,s=new $e,r=new $e,o=new _t,a=new ah({depthPacking:xx}),l=new lh,c={},u=t.maxTextureSize,h={[wi]:en,[en]:wi,[Pt]:Pt},f=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:TM,fragmentShader:EM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new gt;g.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ot(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dl;let p=this.type;this.render=function(b,v,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let _=n.getRenderTarget(),E=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),F=n.state;F.setBlending(sn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=p!==Wi&&this.type===Wi,L=p===Wi&&this.type!==Wi;for(let O=0,D=b.length;O<D;O++){let Y=b[O],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let J=V.getFrameExtents();if(s.multiply(J),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,V.mapSize.y=r.y)),V.map===null||k===!0||L===!0){let de=this.type!==Wi?{minFilter:Kt,magFilter:Kt}:{};V.map!==null&&V.map.dispose(),V.map=new qt(s.x,s.y,de),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let oe=V.getViewportCount();for(let de=0;de<oe;de++){let ve=V.getViewport(de);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),F.viewport(o),V.updateMatrices(Y,de),i=V.getFrustum(),y(v,w,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Wi&&S(V,w),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(_,E,R)};function S(b,v){let w=e.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new qt(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(v,null,w,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(v,null,w,d,x,null)}function M(b,v,w,_){let E=null,R=w.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)E=R;else if(E=w.isPointLight===!0?l:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){let F=E.uuid,k=v.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let O=L[k];O===void 0&&(O=E.clone(),L[k]=O,v.addEventListener("dispose",T)),E=O}if(E.visible=v.visible,E.wireframe=v.wireframe,_===Wi?E.side=v.shadowSide!==null?v.shadowSide:v.side:E.side=v.shadowSide!==null?v.shadowSide:h[v.side],E.alphaMap=v.alphaMap,E.alphaTest=v.alphaTest,E.map=v.map,E.clipShadows=v.clipShadows,E.clippingPlanes=v.clippingPlanes,E.clipIntersection=v.clipIntersection,E.displacementMap=v.displacementMap,E.displacementScale=v.displacementScale,E.displacementBias=v.displacementBias,E.wireframeLinewidth=v.wireframeLinewidth,E.linewidth=v.linewidth,w.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let F=n.properties.get(E);F.light=w}return E}function y(b,v,w,_,E){if(b.visible===!1)return;if(b.layers.test(v.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Wi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,b.matrixWorld);let k=e.update(b),L=b.material;if(Array.isArray(L)){let O=k.groups;for(let D=0,Y=O.length;D<Y;D++){let V=O[D],J=L[V.materialIndex];if(J&&J.visible){let oe=M(b,J,_,E);b.onBeforeShadow(n,b,v,w,k,oe,V),n.renderBufferDirect(w,null,k,oe,b,V),b.onAfterShadow(n,b,v,w,k,oe,V)}}}else if(L.visible){let O=M(b,L,_,E);b.onBeforeShadow(n,b,v,w,k,O,null),n.renderBufferDirect(w,null,k,O,b,null),b.onAfterShadow(n,b,v,w,k,O,null)}}let F=b.children;for(let k=0,L=F.length;k<L;k++)y(F[k],v,w,_,E)}function T(b){b.target.removeEventListener("dispose",T);for(let w in c){let _=c[w],E=b.target.uuid;E in _&&(_[E].dispose(),delete _[E])}}}var AM={[pu]:mu,[gu]:yu,[xu]:_u,[qr]:vu,[mu]:pu,[yu]:gu,[_u]:xu,[vu]:qr};function RM(n,e){function t(){let W=!1,Te=new _t,C=null,U=new _t(0,0,0,0);return{setMask:function(z){C!==z&&!W&&(n.colorMask(z,z,z,z),C=z)},setLocked:function(z){W=z},setClear:function(z,Z,ae,Pe,He){He===!0&&(z*=Pe,Z*=Pe,ae*=Pe),Te.set(z,Z,ae,Pe),U.equals(Te)===!1&&(n.clearColor(z,Z,ae,Pe),U.copy(Te))},reset:function(){W=!1,C=null,U.set(-1,0,0,0)}}}function i(){let W=!1,Te=!1,C=null,U=null,z=null;return{setReversed:function(Z){if(Te!==Z){let ae=e.get("EXT_clip_control");Te?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT);let Pe=z;z=null,this.setClear(Pe)}Te=Z},getReversed:function(){return Te},setTest:function(Z){Z?I(n.DEPTH_TEST):B(n.DEPTH_TEST)},setMask:function(Z){C!==Z&&!W&&(n.depthMask(Z),C=Z)},setFunc:function(Z){if(Te&&(Z=AM[Z]),U!==Z){switch(Z){case pu:n.depthFunc(n.NEVER);break;case mu:n.depthFunc(n.ALWAYS);break;case gu:n.depthFunc(n.LESS);break;case qr:n.depthFunc(n.LEQUAL);break;case xu:n.depthFunc(n.EQUAL);break;case vu:n.depthFunc(n.GEQUAL);break;case yu:n.depthFunc(n.GREATER);break;case _u:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}U=Z}},setLocked:function(Z){W=Z},setClear:function(Z){z!==Z&&(Te&&(Z=1-Z),n.clearDepth(Z),z=Z)},reset:function(){W=!1,C=null,U=null,z=null,Te=!1}}}function s(){let W=!1,Te=null,C=null,U=null,z=null,Z=null,ae=null,Pe=null,He=null;return{setTest:function(Ge){W||(Ge?I(n.STENCIL_TEST):B(n.STENCIL_TEST))},setMask:function(Ge){Te!==Ge&&!W&&(n.stencilMask(Ge),Te=Ge)},setFunc:function(Ge,q,re){(C!==Ge||U!==q||z!==re)&&(n.stencilFunc(Ge,q,re),C=Ge,U=q,z=re)},setOp:function(Ge,q,re){(Z!==Ge||ae!==q||Pe!==re)&&(n.stencilOp(Ge,q,re),Z=Ge,ae=q,Pe=re)},setLocked:function(Ge){W=Ge},setClear:function(Ge){He!==Ge&&(n.clearStencil(Ge),He=Ge)},reset:function(){W=!1,Te=null,C=null,U=null,z=null,Z=null,ae=null,Pe=null,He=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,S=null,M=null,y=null,T=null,b=null,v=new Re(0,0,0),w=0,_=!1,E=null,R=null,F=null,k=null,L=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,Y=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),D=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),D=Y>=2);let J=null,oe={},de=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),ce=new _t().fromArray(de),ie=new _t().fromArray(ve);function Q(W,Te,C,U){let z=new Uint8Array(4),Z=n.createTexture();n.bindTexture(W,Z),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ae=0;ae<C;ae++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,U,0,n.RGBA,n.UNSIGNED_BYTE,z):n.texImage2D(Te+ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,z);return Z}let ee={};ee[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),I(n.DEPTH_TEST),o.setFunc(qr),ze(!1),Be(_d),I(n.CULL_FACE),G(sn);function I(W){u[W]!==!0&&(n.enable(W),u[W]=!0)}function B(W){u[W]!==!1&&(n.disable(W),u[W]=!1)}function X(W,Te){return h[W]!==Te?(n.bindFramebuffer(W,Te),h[W]=Te,W===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Te),W===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function $(W,Te){let C=d,U=!1;if(W){C=f.get(Te),C===void 0&&(C=[],f.set(Te,C));let z=W.textures;if(C.length!==z.length||C[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,ae=z.length;Z<ae;Z++)C[Z]=n.COLOR_ATTACHMENT0+Z;C.length=z.length,U=!0}}else C[0]!==n.BACK&&(C[0]=n.BACK,U=!0);U&&n.drawBuffers(C)}function pe(W){return g!==W?(n.useProgram(W),g=W,!0):!1}let we={[Fn]:n.FUNC_ADD,[Jg]:n.FUNC_SUBTRACT,[Qg]:n.FUNC_REVERSE_SUBTRACT};we[ex]=n.MIN,we[tx]=n.MAX;let Ae={[co]:n.ZERO,[Eh]:n.ONE,[nx]:n.SRC_COLOR,[du]:n.SRC_ALPHA,[ox]:n.SRC_ALPHA_SATURATE,[Ul]:n.DST_COLOR,[Nl]:n.DST_ALPHA,[ix]:n.ONE_MINUS_SRC_COLOR,[qo]:n.ONE_MINUS_SRC_ALPHA,[rx]:n.ONE_MINUS_DST_COLOR,[sx]:n.ONE_MINUS_DST_ALPHA,[ax]:n.CONSTANT_COLOR,[lx]:n.ONE_MINUS_CONSTANT_COLOR,[cx]:n.CONSTANT_ALPHA,[ux]:n.ONE_MINUS_CONSTANT_ALPHA};function G(W,Te,C,U,z,Z,ae,Pe,He,Ge){if(W===sn){x===!0&&(B(n.BLEND),x=!1);return}if(x===!1&&(I(n.BLEND),x=!0),W!==na){if(W!==m||Ge!==_){if((p!==Fn||y!==Fn)&&(n.blendEquation(n.FUNC_ADD),p=Fn,y=Fn),Ge)switch(W){case Hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xr:n.blendFunc(n.ONE,n.ONE);break;case Md:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Md:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}S=null,M=null,T=null,b=null,v.set(0,0,0),w=0,m=W,_=Ge}return}z=z||Te,Z=Z||C,ae=ae||U,(Te!==p||z!==y)&&(n.blendEquationSeparate(we[Te],we[z]),p=Te,y=z),(C!==S||U!==M||Z!==T||ae!==b)&&(n.blendFuncSeparate(Ae[C],Ae[U],Ae[Z],Ae[ae]),S=C,M=U,T=Z,b=ae),(Pe.equals(v)===!1||He!==w)&&(n.blendColor(Pe.r,Pe.g,Pe.b,He),v.copy(Pe),w=He),m=W,_=!1}function Ve(W,Te){W.side===Pt?B(n.CULL_FACE):I(n.CULL_FACE);let C=W.side===en;Te&&(C=!C),ze(C),W.blending===Hr&&W.transparent===!1?G(sn):G(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let U=W.stencilWrite;a.setTest(U),U&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),qe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?I(n.SAMPLE_ALPHA_TO_COVERAGE):B(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(W){E!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),E=W)}function Be(W){W!==Zg?(I(n.CULL_FACE),W!==R&&(W===_d?n.cullFace(n.BACK):W===Kg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):B(n.CULL_FACE),R=W}function Ie(W){W!==F&&(D&&n.lineWidth(W),F=W)}function qe(W,Te,C){W?(I(n.POLYGON_OFFSET_FILL),(k!==Te||L!==C)&&(n.polygonOffset(Te,C),k=Te,L=C)):B(n.POLYGON_OFFSET_FILL)}function Fe(W){W?I(n.SCISSOR_TEST):B(n.SCISSOR_TEST)}function N(W){W===void 0&&(W=n.TEXTURE0+O-1),J!==W&&(n.activeTexture(W),J=W)}function A(W,Te,C){C===void 0&&(J===null?C=n.TEXTURE0+O-1:C=J);let U=oe[C];U===void 0&&(U={type:void 0,texture:void 0},oe[C]=U),(U.type!==W||U.texture!==Te)&&(J!==C&&(n.activeTexture(C),J=C),n.bindTexture(W,Te||ee[W]),U.type=W,U.texture=Te)}function j(){let W=oe[J];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function xe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ue(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function se(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(W){ce.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),ce.copy(W))}function ne(W){ie.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),ie.copy(W))}function Me(W,Te){let C=c.get(Te);C===void 0&&(C=new WeakMap,c.set(Te,C));let U=C.get(W);U===void 0&&(U=n.getUniformBlockIndex(Te,W.name),C.set(W,U))}function fe(W,Te){let U=c.get(Te).get(W);l.get(Te)!==U&&(n.uniformBlockBinding(Te,U,W.__bindingPointIndex),l.set(Te,U))}function ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},J=null,oe={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,S=null,M=null,y=null,T=null,b=null,v=new Re(0,0,0),w=0,_=!1,E=null,R=null,F=null,k=null,L=null,ce.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:I,disable:B,bindFramebuffer:X,drawBuffers:$,useProgram:pe,setBlending:G,setMaterial:Ve,setFlipSided:ze,setCullFace:Be,setLineWidth:Ie,setPolygonOffset:qe,setScissorTest:Fe,activeTexture:N,bindTexture:A,unbindTexture:j,compressedTexImage2D:xe,compressedTexImage3D:_e,texImage2D:Ue,texImage3D:se,updateUBOMapping:Me,uniformBlockBinding:fe,texStorage2D:ke,texStorage3D:Ee,texSubImage2D:he,texSubImage3D:Ce,compressedTexSubImage2D:Le,compressedTexSubImage3D:Ne,scissor:be,viewport:ne,reset:ge}}function yp(n,e,t,i){let s=CM(i);switch(t){case Xp:return n*e;case Yp:return n*e;case $p:return n*e*2;case Fh:return n*e/s.components*s.byteLength;case Oh:return n*e/s.components*s.byteLength;case Zp:return n*e*2/s.components*s.byteLength;case Bh:return n*e*2/s.components*s.byteLength;case qp:return n*e*3/s.components*s.byteLength;case Bn:return n*e*4/s.components*s.byteLength;case zh:return n*e*4/s.components*s.byteLength;case ol:case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ll:case cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tu:case wu:return Math.max(n,16)*Math.max(e,8)/4;case Su:case Eu:return Math.max(n,8)*Math.max(e,8)/2;case Au:case Ru:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Iu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Lu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Du:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Nu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Fu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ou:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Bu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case zu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ku:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Hu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Gu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ul:case Wu:case Xu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Kp:case qu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Yu:case $u:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function CM(n){switch(n){case vi:case Vp:return{byteLength:1,components:1};case $o:case Gp:case hn:return{byteLength:2,components:1};case Nh:case Uh:return{byteLength:2,components:4};case er:case Dh:case gi:return{byteLength:4,components:1};case Wp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function PM(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,A){return d?new OffscreenCanvas(N,A):Zo("canvas")}function x(N,A,j){let xe=1,_e=Fe(N);if((_e.width>j||_e.height>j)&&(xe=j/Math.max(_e.width,_e.height)),xe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let he=Math.floor(xe*_e.width),Ce=Math.floor(xe*_e.height);h===void 0&&(h=g(he,Ce));let Le=A?g(he,Ce):h;return Le.width=he,Le.height=Ce,Le.getContext("2d").drawImage(N,0,0,he,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+Ce+")."),Le}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),N;return N}function m(N){return N.generateMipmaps}function p(N){n.generateMipmap(N)}function S(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(N,A,j,xe,_e=!1){if(N!==null){if(n[N]!==void 0)return n[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let he=A;if(A===n.RED&&(j===n.FLOAT&&(he=n.R32F),j===n.HALF_FLOAT&&(he=n.R16F),j===n.UNSIGNED_BYTE&&(he=n.R8)),A===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(he=n.R8UI),j===n.UNSIGNED_SHORT&&(he=n.R16UI),j===n.UNSIGNED_INT&&(he=n.R32UI),j===n.BYTE&&(he=n.R8I),j===n.SHORT&&(he=n.R16I),j===n.INT&&(he=n.R32I)),A===n.RG&&(j===n.FLOAT&&(he=n.RG32F),j===n.HALF_FLOAT&&(he=n.RG16F),j===n.UNSIGNED_BYTE&&(he=n.RG8)),A===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(he=n.RG8UI),j===n.UNSIGNED_SHORT&&(he=n.RG16UI),j===n.UNSIGNED_INT&&(he=n.RG32UI),j===n.BYTE&&(he=n.RG8I),j===n.SHORT&&(he=n.RG16I),j===n.INT&&(he=n.RG32I)),A===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(he=n.RGB8UI),j===n.UNSIGNED_SHORT&&(he=n.RGB16UI),j===n.UNSIGNED_INT&&(he=n.RGB32UI),j===n.BYTE&&(he=n.RGB8I),j===n.SHORT&&(he=n.RGB16I),j===n.INT&&(he=n.RGB32I)),A===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(he=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(he=n.RGBA16UI),j===n.UNSIGNED_INT&&(he=n.RGBA32UI),j===n.BYTE&&(he=n.RGBA8I),j===n.SHORT&&(he=n.RGBA16I),j===n.INT&&(he=n.RGBA32I)),A===n.RGB&&j===n.UNSIGNED_INT_5_9_9_9_REV&&(he=n.RGB9_E5),A===n.RGBA){let Ce=_e?zl:pt.getTransfer(xe);j===n.FLOAT&&(he=n.RGBA32F),j===n.HALF_FLOAT&&(he=n.RGBA16F),j===n.UNSIGNED_BYTE&&(he=Ce===Et?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(he=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(he=n.RGB5_A1)}return(he===n.R16F||he===n.R32F||he===n.RG16F||he===n.RG32F||he===n.RGBA16F||he===n.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function y(N,A){let j;return N?A===null||A===er||A===ys?j=n.DEPTH24_STENCIL8:A===gi?j=n.DEPTH32F_STENCIL8:A===$o&&(j=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===er||A===ys?j=n.DEPTH_COMPONENT24:A===gi?j=n.DEPTH_COMPONENT32F:A===$o&&(j=n.DEPTH_COMPONENT16),j}function T(N,A){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Kt&&N.minFilter!==On?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function b(N){let A=N.target;A.removeEventListener("dispose",b),w(A),A.isVideoTexture&&u.delete(A)}function v(N){let A=N.target;A.removeEventListener("dispose",v),E(A)}function w(N){let A=i.get(N);if(A.__webglInit===void 0)return;let j=N.source,xe=f.get(j);if(xe){let _e=xe[A.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&_(N),Object.keys(xe).length===0&&f.delete(j)}i.remove(N)}function _(N){let A=i.get(N);n.deleteTexture(A.__webglTexture);let j=N.source,xe=f.get(j);delete xe[A.__cacheKey],o.memory.textures--}function E(N){let A=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(A.__webglFramebuffer[xe]))for(let _e=0;_e<A.__webglFramebuffer[xe].length;_e++)n.deleteFramebuffer(A.__webglFramebuffer[xe][_e]);else n.deleteFramebuffer(A.__webglFramebuffer[xe]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[xe])}else{if(Array.isArray(A.__webglFramebuffer))for(let xe=0;xe<A.__webglFramebuffer.length;xe++)n.deleteFramebuffer(A.__webglFramebuffer[xe]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let xe=0;xe<A.__webglColorRenderbuffer.length;xe++)A.__webglColorRenderbuffer[xe]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[xe]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let j=N.textures;for(let xe=0,_e=j.length;xe<_e;xe++){let he=i.get(j[xe]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),o.memory.textures--),i.remove(j[xe])}i.remove(N)}let R=0;function F(){R=0}function k(){let N=R;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),R+=1,N}function L(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function O(N,A){let j=i.get(N);if(N.isVideoTexture&&Ie(N),N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){let xe=N.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(j,N,A);return}}t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+A)}function D(N,A){let j=i.get(N);if(N.version>0&&j.__version!==N.version){ie(j,N,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+A)}function Y(N,A){let j=i.get(N);if(N.version>0&&j.__version!==N.version){ie(j,N,A);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+A)}function V(N,A){let j=i.get(N);if(N.version>0&&j.__version!==N.version){Q(j,N,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+A)}let J={[Pn]:n.REPEAT,[Xi]:n.CLAMP_TO_EDGE,[Yo]:n.MIRRORED_REPEAT},oe={[Kt]:n.NEAREST,[Lh]:n.NEAREST_MIPMAP_NEAREST,[zr]:n.NEAREST_MIPMAP_LINEAR,[On]:n.LINEAR,[Vo]:n.LINEAR_MIPMAP_NEAREST,[ti]:n.LINEAR_MIPMAP_LINEAR},de={[yx]:n.NEVER,[Ex]:n.ALWAYS,[_x]:n.LESS,[Jp]:n.LEQUAL,[Mx]:n.EQUAL,[Tx]:n.GEQUAL,[bx]:n.GREATER,[Sx]:n.NOTEQUAL};function ve(N,A){if(A.type===gi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===On||A.magFilter===Vo||A.magFilter===zr||A.magFilter===ti||A.minFilter===On||A.minFilter===Vo||A.minFilter===zr||A.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,J[A.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,J[A.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,J[A.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,oe[A.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,oe[A.minFilter]),A.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,de[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Kt||A.minFilter!==zr&&A.minFilter!==ti||A.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function ce(N,A){let j=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",b));let xe=A.source,_e=f.get(xe);_e===void 0&&(_e={},f.set(xe,_e));let he=L(A);if(he!==N.__cacheKey){_e[he]===void 0&&(_e[he]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),_e[he].usedTimes++;let Ce=_e[N.__cacheKey];Ce!==void 0&&(_e[N.__cacheKey].usedTimes--,Ce.usedTimes===0&&_(A)),N.__cacheKey=he,N.__webglTexture=_e[he].texture}return j}function ie(N,A,j){let xe=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(xe=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(xe=n.TEXTURE_3D);let _e=ce(N,A),he=A.source;t.bindTexture(xe,N.__webglTexture,n.TEXTURE0+j);let Ce=i.get(he);if(he.version!==Ce.__version||_e===!0){t.activeTexture(n.TEXTURE0+j);let Le=pt.getPrimaries(pt.workingColorSpace),Ne=A.colorSpace===ms?null:pt.getPrimaries(A.colorSpace),ke=A.colorSpace===ms||Le===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let Ee=x(A.image,!1,s.maxTextureSize);Ee=qe(A,Ee);let Ue=r.convert(A.format,A.colorSpace),se=r.convert(A.type),be=M(A.internalFormat,Ue,se,A.colorSpace,A.isVideoTexture);ve(xe,A);let ne,Me=A.mipmaps,fe=A.isVideoTexture!==!0,ge=Ce.__version===void 0||_e===!0,W=he.dataReady,Te=T(A,Ee);if(A.isDepthTexture)be=y(A.format===_s,A.type),ge&&(fe?t.texStorage2D(n.TEXTURE_2D,1,be,Ee.width,Ee.height):t.texImage2D(n.TEXTURE_2D,0,be,Ee.width,Ee.height,0,Ue,se,null));else if(A.isDataTexture)if(Me.length>0){fe&&ge&&t.texStorage2D(n.TEXTURE_2D,Te,be,Me[0].width,Me[0].height);for(let C=0,U=Me.length;C<U;C++)ne=Me[C],fe?W&&t.texSubImage2D(n.TEXTURE_2D,C,0,0,ne.width,ne.height,Ue,se,ne.data):t.texImage2D(n.TEXTURE_2D,C,be,ne.width,ne.height,0,Ue,se,ne.data);A.generateMipmaps=!1}else fe?(ge&&t.texStorage2D(n.TEXTURE_2D,Te,be,Ee.width,Ee.height),W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ue,se,Ee.data)):t.texImage2D(n.TEXTURE_2D,0,be,Ee.width,Ee.height,0,Ue,se,Ee.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){fe&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,be,Me[0].width,Me[0].height,Ee.depth);for(let C=0,U=Me.length;C<U;C++)if(ne=Me[C],A.format!==Bn)if(Ue!==null)if(fe){if(W)if(A.layerUpdates.size>0){let z=yp(ne.width,ne.height,A.format,A.type);for(let Z of A.layerUpdates){let ae=ne.data.subarray(Z*z/ne.data.BYTES_PER_ELEMENT,(Z+1)*z/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,C,0,0,Z,ne.width,ne.height,1,Ue,ae)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,C,0,0,0,ne.width,ne.height,Ee.depth,Ue,ne.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,C,be,ne.width,ne.height,Ee.depth,0,ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,C,0,0,0,ne.width,ne.height,Ee.depth,Ue,se,ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,C,be,ne.width,ne.height,Ee.depth,0,Ue,se,ne.data)}else{fe&&ge&&t.texStorage2D(n.TEXTURE_2D,Te,be,Me[0].width,Me[0].height);for(let C=0,U=Me.length;C<U;C++)ne=Me[C],A.format!==Bn?Ue!==null?fe?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,C,0,0,ne.width,ne.height,Ue,ne.data):t.compressedTexImage2D(n.TEXTURE_2D,C,be,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?W&&t.texSubImage2D(n.TEXTURE_2D,C,0,0,ne.width,ne.height,Ue,se,ne.data):t.texImage2D(n.TEXTURE_2D,C,be,ne.width,ne.height,0,Ue,se,ne.data)}else if(A.isDataArrayTexture)if(fe){if(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,be,Ee.width,Ee.height,Ee.depth),W)if(A.layerUpdates.size>0){let C=yp(Ee.width,Ee.height,A.format,A.type);for(let U of A.layerUpdates){let z=Ee.data.subarray(U*C/Ee.data.BYTES_PER_ELEMENT,(U+1)*C/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,U,Ee.width,Ee.height,1,Ue,se,z)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ue,se,Ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,Ee.width,Ee.height,Ee.depth,0,Ue,se,Ee.data);else if(A.isData3DTexture)fe?(ge&&t.texStorage3D(n.TEXTURE_3D,Te,be,Ee.width,Ee.height,Ee.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ue,se,Ee.data)):t.texImage3D(n.TEXTURE_3D,0,be,Ee.width,Ee.height,Ee.depth,0,Ue,se,Ee.data);else if(A.isFramebufferTexture){if(ge)if(fe)t.texStorage2D(n.TEXTURE_2D,Te,be,Ee.width,Ee.height);else{let C=Ee.width,U=Ee.height;for(let z=0;z<Te;z++)t.texImage2D(n.TEXTURE_2D,z,be,C,U,0,Ue,se,null),C>>=1,U>>=1}}else if(Me.length>0){if(fe&&ge){let C=Fe(Me[0]);t.texStorage2D(n.TEXTURE_2D,Te,be,C.width,C.height)}for(let C=0,U=Me.length;C<U;C++)ne=Me[C],fe?W&&t.texSubImage2D(n.TEXTURE_2D,C,0,0,Ue,se,ne):t.texImage2D(n.TEXTURE_2D,C,be,Ue,se,ne);A.generateMipmaps=!1}else if(fe){if(ge){let C=Fe(Ee);t.texStorage2D(n.TEXTURE_2D,Te,be,C.width,C.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,se,Ee)}else t.texImage2D(n.TEXTURE_2D,0,be,Ue,se,Ee);m(A)&&p(xe),Ce.__version=he.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function Q(N,A,j){if(A.image.length!==6)return;let xe=ce(N,A),_e=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+j);let he=i.get(_e);if(_e.version!==he.__version||xe===!0){t.activeTexture(n.TEXTURE0+j);let Ce=pt.getPrimaries(pt.workingColorSpace),Le=A.colorSpace===ms?null:pt.getPrimaries(A.colorSpace),Ne=A.colorSpace===ms||Ce===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ke=A.isCompressedTexture||A.image[0].isCompressedTexture,Ee=A.image[0]&&A.image[0].isDataTexture,Ue=[];for(let U=0;U<6;U++)!ke&&!Ee?Ue[U]=x(A.image[U],!0,s.maxCubemapSize):Ue[U]=Ee?A.image[U].image:A.image[U],Ue[U]=qe(A,Ue[U]);let se=Ue[0],be=r.convert(A.format,A.colorSpace),ne=r.convert(A.type),Me=M(A.internalFormat,be,ne,A.colorSpace),fe=A.isVideoTexture!==!0,ge=he.__version===void 0||xe===!0,W=_e.dataReady,Te=T(A,se);ve(n.TEXTURE_CUBE_MAP,A);let C;if(ke){fe&&ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Me,se.width,se.height);for(let U=0;U<6;U++){C=Ue[U].mipmaps;for(let z=0;z<C.length;z++){let Z=C[z];A.format!==Bn?be!==null?fe?W&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+U,z,0,0,Z.width,Z.height,be,Z.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+U,z,Me,Z.width,Z.height,0,Z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+U,z,0,0,Z.width,Z.height,be,ne,Z.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+U,z,Me,Z.width,Z.height,0,be,ne,Z.data)}}}else{if(C=A.mipmaps,fe&&ge){C.length>0&&Te++;let U=Fe(Ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Me,U.width,U.height)}for(let U=0;U<6;U++)if(Ee){fe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,Ue[U].width,Ue[U].height,be,ne,Ue[U].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Me,Ue[U].width,Ue[U].height,0,be,ne,Ue[U].data);for(let z=0;z<C.length;z++){let ae=C[z].image[U].image;fe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+U,z+1,0,0,ae.width,ae.height,be,ne,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+U,z+1,Me,ae.width,ae.height,0,be,ne,ae.data)}}else{fe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,be,ne,Ue[U]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Me,be,ne,Ue[U]);for(let z=0;z<C.length;z++){let Z=C[z];fe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+U,z+1,0,0,be,ne,Z.image[U]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+U,z+1,Me,be,ne,Z.image[U])}}}m(A)&&p(n.TEXTURE_CUBE_MAP),he.__version=_e.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function ee(N,A,j,xe,_e,he){let Ce=r.convert(j.format,j.colorSpace),Le=r.convert(j.type),Ne=M(j.internalFormat,Ce,Le,j.colorSpace),ke=i.get(A),Ee=i.get(j);if(Ee.__renderTarget=A,!ke.__hasExternalTextures){let Ue=Math.max(1,A.width>>he),se=Math.max(1,A.height>>he);_e===n.TEXTURE_3D||_e===n.TEXTURE_2D_ARRAY?t.texImage3D(_e,he,Ne,Ue,se,A.depth,0,Ce,Le,null):t.texImage2D(_e,he,Ne,Ue,se,0,Ce,Le,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),Be(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,_e,Ee.__webglTexture,0,ze(A)):(_e===n.TEXTURE_2D||_e>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,xe,_e,Ee.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(N,A,j){if(n.bindRenderbuffer(n.RENDERBUFFER,N),A.depthBuffer){let xe=A.depthTexture,_e=xe&&xe.isDepthTexture?xe.type:null,he=y(A.stencilBuffer,_e),Ce=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=ze(A);Be(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,he,A.width,A.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,he,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,he,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,N)}else{let xe=A.textures;for(let _e=0;_e<xe.length;_e++){let he=xe[_e],Ce=r.convert(he.format,he.colorSpace),Le=r.convert(he.type),Ne=M(he.internalFormat,Ce,Le,he.colorSpace),ke=ze(A);j&&Be(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,Ne,A.width,A.height):Be(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke,Ne,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Ne,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function B(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let xe=i.get(A.depthTexture);xe.__renderTarget=A,(!xe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),O(A.depthTexture,0);let _e=xe.__webglTexture,he=ze(A);if(A.depthTexture.format===Vr)Be(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_e,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_e,0);else if(A.depthTexture.format===_s)Be(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_e,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function X(N){let A=i.get(N),j=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){let xe=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),xe){let _e=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,xe.removeEventListener("dispose",_e)};xe.addEventListener("dispose",_e),A.__depthDisposeCallback=_e}A.__boundDepthTexture=xe}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");B(A.__webglFramebuffer,N)}else if(j){A.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[xe]),A.__webglDepthbuffer[xe]===void 0)A.__webglDepthbuffer[xe]=n.createRenderbuffer(),I(A.__webglDepthbuffer[xe],N,!1);else{let _e=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer[xe];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,he)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),I(A.__webglDepthbuffer,N,!1);else{let xe=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,_e)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function $(N,A,j){let xe=i.get(N);A!==void 0&&ee(xe.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&X(N)}function pe(N){let A=N.texture,j=i.get(N),xe=i.get(A);N.addEventListener("dispose",v);let _e=N.textures,he=N.isWebGLCubeRenderTarget===!0,Ce=_e.length>1;if(Ce||(xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture()),xe.__version=A.version,o.memory.textures++),he){j.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[Le]=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)j.__webglFramebuffer[Le][Ne]=n.createFramebuffer()}else j.__webglFramebuffer[Le]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let Le=0;Le<A.mipmaps.length;Le++)j.__webglFramebuffer[Le]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let Le=0,Ne=_e.length;Le<Ne;Le++){let ke=i.get(_e[Le]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&Be(N)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Le=0;Le<_e.length;Le++){let Ne=_e[Le];j.__webglColorRenderbuffer[Le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[Le]);let ke=r.convert(Ne.format,Ne.colorSpace),Ee=r.convert(Ne.type),Ue=M(Ne.internalFormat,ke,Ee,Ne.colorSpace,N.isXRRenderTarget===!0),se=ze(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,se,Ue,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,j.__webglColorRenderbuffer[Le])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),I(j.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,xe.__webglTexture),ve(n.TEXTURE_CUBE_MAP,A);for(let Le=0;Le<6;Le++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)ee(j.__webglFramebuffer[Le][Ne],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ne);else ee(j.__webglFramebuffer[Le],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);m(A)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let Le=0,Ne=_e.length;Le<Ne;Le++){let ke=_e[Le],Ee=i.get(ke);t.bindTexture(n.TEXTURE_2D,Ee.__webglTexture),ve(n.TEXTURE_2D,ke),ee(j.__webglFramebuffer,N,ke,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,0),m(ke)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let Le=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Le=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Le,xe.__webglTexture),ve(Le,A),A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)ee(j.__webglFramebuffer[Ne],N,A,n.COLOR_ATTACHMENT0,Le,Ne);else ee(j.__webglFramebuffer,N,A,n.COLOR_ATTACHMENT0,Le,0);m(A)&&p(Le),t.unbindTexture()}N.depthBuffer&&X(N)}function we(N){let A=N.textures;for(let j=0,xe=A.length;j<xe;j++){let _e=A[j];if(m(_e)){let he=S(N),Ce=i.get(_e).__webglTexture;t.bindTexture(he,Ce),p(he),t.unbindTexture()}}}let Ae=[],G=[];function Ve(N){if(N.samples>0){if(Be(N)===!1){let A=N.textures,j=N.width,xe=N.height,_e=n.COLOR_BUFFER_BIT,he=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(N),Le=A.length>1;if(Le)for(let Ne=0;Ne<A.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ne=0;Ne<A.length;Ne++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(_e|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(_e|=n.STENCIL_BUFFER_BIT)),Le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ne]);let ke=i.get(A[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,j,xe,0,0,j,xe,_e,n.NEAREST),l===!0&&(Ae.length=0,G.length=0,Ae.push(n.COLOR_ATTACHMENT0+Ne),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ae.push(he),G.push(he),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,G)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Le)for(let Ne=0;Ne<A.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ne]);let ke=i.get(A[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){let A=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function ze(N){return Math.min(s.maxSamples,N.samples)}function Be(N){let A=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ie(N){let A=o.render.frame;u.get(N)!==A&&(u.set(N,A),N.update())}function qe(N,A){let j=N.colorSpace,xe=N.format,_e=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||j!==Tn&&j!==ms&&(pt.getTransfer(j)===Et?(xe!==Bn||_e!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),A}function Fe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=O,this.setTexture2DArray=D,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=$,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Be}function IM(n,e){function t(i,s=ms){let r,o=pt.getTransfer(s);if(i===vi)return n.UNSIGNED_BYTE;if(i===Nh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Vp)return n.BYTE;if(i===Gp)return n.SHORT;if(i===$o)return n.UNSIGNED_SHORT;if(i===Dh)return n.INT;if(i===er)return n.UNSIGNED_INT;if(i===gi)return n.FLOAT;if(i===hn)return n.HALF_FLOAT;if(i===Xp)return n.ALPHA;if(i===qp)return n.RGB;if(i===Bn)return n.RGBA;if(i===Yp)return n.LUMINANCE;if(i===$p)return n.LUMINANCE_ALPHA;if(i===Vr)return n.DEPTH_COMPONENT;if(i===_s)return n.DEPTH_STENCIL;if(i===Fh)return n.RED;if(i===Oh)return n.RED_INTEGER;if(i===Zp)return n.RG;if(i===Bh)return n.RG_INTEGER;if(i===zh)return n.RGBA_INTEGER;if(i===ol||i===al||i===ll||i===cl)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ol)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ll)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ol)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===al)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ll)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Su||i===Tu||i===Eu||i===wu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Su)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Eu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Au||i===Ru||i===Cu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Au||i===Ru)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Cu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pu||i===Iu||i===Lu||i===Du||i===Nu||i===Uu||i===Fu||i===Ou||i===Bu||i===zu||i===ku||i===Hu||i===Vu||i===Gu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Pu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Iu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Du)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ou)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ku)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ul||i===Wu||i===Xu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ul)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kp||i===qu||i===Yu||i===$u)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ul)return r.COMPRESSED_RED_RGTC1_EXT;if(i===qu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$u)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ys?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var ch=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ht=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},LM={type:"move"},Xo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(LM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ht;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},DM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NM=`
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

}`,uh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new cn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new vt({vertexShader:DM,fragmentShader:NM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hh=class extends Ms{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,x=new uh,m=t.getContextAttributes(),p=null,S=null,M=[],y=[],T=new $e,b=null,v=new Zt;v.viewport=new _t;let w=new Zt;w.viewport=new _t;let _=[v,w],E=new ch,R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let Q=M[ie];return Q===void 0&&(Q=new Xo,M[ie]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(ie){let Q=M[ie];return Q===void 0&&(Q=new Xo,M[ie]=Q),Q.getGripSpace()},this.getHand=function(ie){let Q=M[ie];return Q===void 0&&(Q=new Xo,M[ie]=Q),Q.getHandSpace()};function k(ie){let Q=y.indexOf(ie.inputSource);if(Q===-1)return;let ee=M[Q];ee!==void 0&&(ee.update(ie.inputSource,ie.frame,c||o),ee.dispatchEvent({type:ie.type,data:ie.inputSource}))}function L(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",O);for(let ie=0;ie<M.length;ie++){let Q=y[ie];Q!==null&&(y[ie]=null,M[ie].disconnect(Q))}R=null,F=null,x.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,S=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",L),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new qt(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ee=null,I=null;m.depth&&(I=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?_s:Vr,ee=m.stencil?ys:er);let B={colorFormat:t.RGBA8,depthFormat:I,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(B),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new qt(f.textureWidth,f.textureHeight,{format:Bn,type:vi,depthTexture:new to(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(ie){for(let Q=0;Q<ie.removed.length;Q++){let ee=ie.removed[Q],I=y.indexOf(ee);I>=0&&(y[I]=null,M[I].disconnect(ee))}for(let Q=0;Q<ie.added.length;Q++){let ee=ie.added[Q],I=y.indexOf(ee);if(I===-1){for(let X=0;X<M.length;X++)if(X>=y.length){y.push(ee),I=X;break}else if(y[X]===null){y[X]=ee,I=X;break}if(I===-1)break}let B=M[I];B&&B.connect(ee)}}let D=new H,Y=new H;function V(ie,Q,ee){D.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(ee.matrixWorld);let I=D.distanceTo(Y),B=Q.projectionMatrix.elements,X=ee.projectionMatrix.elements,$=B[14]/(B[10]-1),pe=B[14]/(B[10]+1),we=(B[9]+1)/B[5],Ae=(B[9]-1)/B[5],G=(B[8]-1)/B[0],Ve=(X[8]+1)/X[0],ze=$*G,Be=$*Ve,Ie=I/(-G+Ve),qe=Ie*-G;if(Q.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(qe),ie.translateZ(Ie),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),B[10]===-1)ie.projectionMatrix.copy(Q.projectionMatrix),ie.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Fe=$+Ie,N=pe+Ie,A=ze-qe,j=Be+(I-qe),xe=we*pe/N*Fe,_e=Ae*pe/N*Fe;ie.projectionMatrix.makePerspective(A,j,xe,_e,Fe,N),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function J(ie,Q){Q===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(Q.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let Q=ie.near,ee=ie.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(ee=x.depthFar)),E.near=w.near=v.near=Q,E.far=w.far=v.far=ee,(R!==E.near||F!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,F=E.far),v.layers.mask=ie.layers.mask|2,w.layers.mask=ie.layers.mask|4,E.layers.mask=v.layers.mask|w.layers.mask;let I=ie.parent,B=E.cameras;J(E,I);for(let X=0;X<B.length;X++)J(B[X],I);B.length===2?V(E,v,w):E.projectionMatrix.copy(v.projectionMatrix),oe(ie,E,I)};function oe(ie,Q,ee){ee===null?ie.matrix.copy(Q.matrixWorld):(ie.matrix.copy(ee.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(Q.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(Q.projectionMatrix),ie.projectionMatrixInverse.copy(Q.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=jr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let de=null;function ve(ie,Q){if(u=Q.getViewerPose(c||o),g=Q,u!==null){let ee=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let I=!1;ee.length!==E.cameras.length&&(E.cameras.length=0,I=!0);for(let X=0;X<ee.length;X++){let $=ee[X],pe=null;if(d!==null)pe=d.getViewport($);else{let Ae=h.getViewSubImage(f,$);pe=Ae.viewport,X===0&&(e.setRenderTargetTextures(S,Ae.colorTexture,f.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(S))}let we=_[X];we===void 0&&(we=new Zt,we.layers.enable(X),we.viewport=new _t,_[X]=we),we.matrix.fromArray($.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray($.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(pe.x,pe.y,pe.width,pe.height),X===0&&(E.matrix.copy(we.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),I===!0&&E.cameras.push(we)}let B=s.enabledFeatures;if(B&&B.includes("depth-sensing")){let X=h.getDepthInformation(ee[0]);X&&X.isValid&&X.texture&&x.init(e,X,s.renderState)}}for(let ee=0;ee<M.length;ee++){let I=y[ee],B=M[ee];I!==null&&B!==void 0&&B.update(I,Q,c||o)}de&&de(ie,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}let ce=new im;ce.setAnimationLoop(ve),this.setAnimationLoop=function(ie){de=ie},this.dispose=function(){}}},js=new yi,UM=new je;function FM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,nm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),M=S.envMap,y=S.envMapRotation;M&&(m.envMap.value=M,js.copy(y),js.x*=-1,js.y*=-1,js.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),m.envMapRotation.value.setFromMatrix4(UM.makeRotationFromEuler(js)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function OM(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){let y=M.program;i.uniformBlockBinding(S,y)}function c(S,M){let y=s[S.id];y===void 0&&(g(S),y=u(S),s[S.id]=y,S.addEventListener("dispose",m));let T=M.program;i.updateUBOMapping(S,T);let b=e.render.frame;r[S.id]!==b&&(f(S),r[S.id]=b)}function u(S){let M=h();S.__bindingPointIndex=M;let y=n.createBuffer(),T=S.__size,b=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let M=s[S.id],y=S.uniforms,T=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let b=0,v=y.length;b<v;b++){let w=Array.isArray(y[b])?y[b]:[y[b]];for(let _=0,E=w.length;_<E;_++){let R=w[_];if(d(R,b,_,T)===!0){let F=R.__offset,k=Array.isArray(R.value)?R.value:[R.value],L=0;for(let O=0;O<k.length;O++){let D=k[O],Y=x(D);typeof D=="number"||typeof D=="boolean"?(R.__data[0]=D,n.bufferSubData(n.UNIFORM_BUFFER,F+L,R.__data)):D.isMatrix3?(R.__data[0]=D.elements[0],R.__data[1]=D.elements[1],R.__data[2]=D.elements[2],R.__data[3]=0,R.__data[4]=D.elements[3],R.__data[5]=D.elements[4],R.__data[6]=D.elements[5],R.__data[7]=0,R.__data[8]=D.elements[6],R.__data[9]=D.elements[7],R.__data[10]=D.elements[8],R.__data[11]=0):(D.toArray(R.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,M,y,T){let b=S.value,v=M+"_"+y;if(T[v]===void 0)return typeof b=="number"||typeof b=="boolean"?T[v]=b:T[v]=b.clone(),!0;{let w=T[v];if(typeof b=="number"||typeof b=="boolean"){if(w!==b)return T[v]=b,!0}else if(w.equals(b)===!1)return w.copy(b),!0}return!1}function g(S){let M=S.uniforms,y=0,T=16;for(let v=0,w=M.length;v<w;v++){let _=Array.isArray(M[v])?M[v]:[M[v]];for(let E=0,R=_.length;E<R;E++){let F=_[E],k=Array.isArray(F.value)?F.value:[F.value];for(let L=0,O=k.length;L<O;L++){let D=k[L],Y=x(D),V=y%T,J=V%Y.boundary,oe=V+J;y+=J,oe!==0&&T-oe<Y.storage&&(y+=T-oe),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=Y.storage}}}let b=y%T;return b>0&&(y+=T-b),S.__size=y,S.__cache={},this}function x(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){let M=S.target;M.removeEventListener("dispose",m);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var yl=class{constructor(e={}){let{canvas:t=Vx(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,S=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=vs,this.toneMappingExposure=1;let y=this,T=!1,b=0,v=0,w=null,_=-1,E=null,R=new _t,F=new _t,k=null,L=new Re(0),O=0,D=t.width,Y=t.height,V=1,J=null,oe=null,de=new _t(0,0,D,Y),ve=new _t(0,0,D,Y),ce=!1,ie=new Ko,Q=!1,ee=!1,I=new je,B=new je,X=new H,$=new _t,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Ae(){return w===null?V:1}let G=i;function Ve(P,K){return t.getContext(P,K)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",U,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",Z,!1),G===null){let K="webgl2";if(G=Ve(K,P),G===null)throw Ve(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ze,Be,Ie,qe,Fe,N,A,j,xe,_e,he,Ce,Le,Ne,ke,Ee,Ue,se,be,ne,Me,fe,ge,W;function Te(){ze=new Q_(G),ze.init(),fe=new IM(G,ze),Be=new Y_(G,ze,e,fe),Ie=new RM(G,ze),Be.reverseDepthBuffer&&f&&Ie.buffers.depth.setReversed(!0),qe=new n1(G),Fe=new mM,N=new PM(G,ze,Ie,Fe,Be,fe,qe),A=new Z_(y),j=new J_(y),xe=new cv(G),ge=new X_(G,xe),_e=new e1(G,xe,qe,ge),he=new s1(G,_e,xe,qe),be=new i1(G,Be,N),Ee=new $_(Fe),Ce=new pM(y,A,j,ze,Be,ge,Ee),Le=new FM(y,Fe),Ne=new xM,ke=new SM(ze),se=new W_(y,A,j,Ie,he,d,l),Ue=new wM(y,he,Be),W=new OM(G,qe,Be,Ie),ne=new q_(G,ze,qe),Me=new t1(G,ze,qe),qe.programs=Ce.programs,y.capabilities=Be,y.extensions=ze,y.properties=Fe,y.renderLists=Ne,y.shadowMap=Ue,y.state=Ie,y.info=qe}Te();let C=new hh(y,G);this.xr=C,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let P=ze.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=ze.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(P){P!==void 0&&(V=P,this.setSize(D,Y,!1))},this.getSize=function(P){return P.set(D,Y)},this.setSize=function(P,K,le=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=P,Y=K,t.width=Math.floor(P*V),t.height=Math.floor(K*V),le===!0&&(t.style.width=P+"px",t.style.height=K+"px"),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(D*V,Y*V).floor()},this.setDrawingBufferSize=function(P,K,le){D=P,Y=K,V=le,t.width=Math.floor(P*le),t.height=Math.floor(K*le),this.setViewport(0,0,P,K)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(de)},this.setViewport=function(P,K,le,ue){P.isVector4?de.set(P.x,P.y,P.z,P.w):de.set(P,K,le,ue),Ie.viewport(R.copy(de).multiplyScalar(V).round())},this.getScissor=function(P){return P.copy(ve)},this.setScissor=function(P,K,le,ue){P.isVector4?ve.set(P.x,P.y,P.z,P.w):ve.set(P,K,le,ue),Ie.scissor(F.copy(ve).multiplyScalar(V).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(P){Ie.setScissorTest(ce=P)},this.setOpaqueSort=function(P){J=P},this.setTransparentSort=function(P){oe=P},this.getClearColor=function(P){return P.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(P=!0,K=!0,le=!0){let ue=0;if(P){let te=!1;if(w!==null){let Oe=w.texture.format;te=Oe===zh||Oe===Bh||Oe===Oh}if(te){let Oe=w.texture.type,Ye=Oe===vi||Oe===er||Oe===$o||Oe===ys||Oe===Nh||Oe===Uh,Qe=se.getClearColor(),et=se.getClearAlpha(),at=Qe.r,ct=Qe.g,tt=Qe.b;Ye?(g[0]=at,g[1]=ct,g[2]=tt,g[3]=et,G.clearBufferuiv(G.COLOR,0,g)):(x[0]=at,x[1]=ct,x[2]=tt,x[3]=et,G.clearBufferiv(G.COLOR,0,x))}else ue|=G.COLOR_BUFFER_BIT}K&&(ue|=G.DEPTH_BUFFER_BIT),le&&(ue|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",U,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),Ne.dispose(),ke.dispose(),Fe.dispose(),A.dispose(),j.dispose(),he.dispose(),ge.dispose(),W.dispose(),Ce.dispose(),C.dispose(),C.removeEventListener("sessionstart",me),C.removeEventListener("sessionend",ye),Se.stop()};function U(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let P=qe.autoReset,K=Ue.enabled,le=Ue.autoUpdate,ue=Ue.needsUpdate,te=Ue.type;Te(),qe.autoReset=P,Ue.enabled=K,Ue.autoUpdate=le,Ue.needsUpdate=ue,Ue.type=te}function Z(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ae(P){let K=P.target;K.removeEventListener("dispose",ae),Pe(K)}function Pe(P){He(P),Fe.remove(P)}function He(P){let K=Fe.get(P).programs;K!==void 0&&(K.forEach(function(le){Ce.releaseProgram(le)}),P.isShaderMaterial&&Ce.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,le,ue,te,Oe){K===null&&(K=pe);let Ye=te.isMesh&&te.matrixWorld.determinant()<0,Qe=Gt(P,K,le,ue,te);Ie.setMaterial(ue,Ye);let et=le.index,at=1;if(ue.wireframe===!0){if(et=_e.getWireframeAttribute(le),et===void 0)return;at=2}let ct=le.drawRange,tt=le.attributes.position,Mt=ct.start*at,Nt=(ct.start+ct.count)*at;Oe!==null&&(Mt=Math.max(Mt,Oe.start*at),Nt=Math.min(Nt,(Oe.start+Oe.count)*at)),et!==null?(Mt=Math.max(Mt,0),Nt=Math.min(Nt,et.count)):tt!=null&&(Mt=Math.max(Mt,0),Nt=Math.min(Nt,tt.count));let Ot=Nt-Mt;if(Ot<0||Ot===1/0)return;ge.setup(te,ue,Qe,le,et);let Un,St=ne;if(et!==null&&(Un=xe.get(et),St=Me,St.setIndex(Un)),te.isMesh)ue.wireframe===!0?(Ie.setLineWidth(ue.wireframeLinewidth*Ae()),St.setMode(G.LINES)):St.setMode(G.TRIANGLES);else if(te.isLine){let nt=ue.linewidth;nt===void 0&&(nt=1),Ie.setLineWidth(nt*Ae()),te.isLineSegments?St.setMode(G.LINES):te.isLineLoop?St.setMode(G.LINE_LOOP):St.setMode(G.LINE_STRIP)}else te.isPoints?St.setMode(G.POINTS):te.isSprite&&St.setMode(G.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)St.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))St.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let nt=te._multiDrawStarts,Oi=te._multiDrawCounts,Tt=te._multiDrawCount,ui=et?xe.get(et).bytesPerElement:1,yr=Fe.get(ue).currentProgram.getUniforms();for(let Gn=0;Gn<Tt;Gn++)yr.setValue(G,"_gl_DrawID",Gn),St.render(nt[Gn]/ui,Oi[Gn])}else if(te.isInstancedMesh)St.renderInstances(Mt,Ot,te.count);else if(le.isInstancedBufferGeometry){let nt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Oi=Math.min(le.instanceCount,nt);St.renderInstances(Mt,Ot,Oi)}else St.render(Mt,Ot)};function Ge(P,K,le){P.transparent===!0&&P.side===Pt&&P.forceSinglePass===!1?(P.side=en,P.needsUpdate=!0,wt(P,K,le),P.side=wi,P.needsUpdate=!0,wt(P,K,le),P.side=Pt):wt(P,K,le)}this.compile=function(P,K,le=null){le===null&&(le=P),p=ke.get(le),p.init(K),M.push(p),le.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),P!==le&&P.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),p.setupLights();let ue=new Set;return P.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Oe=te.material;if(Oe)if(Array.isArray(Oe))for(let Ye=0;Ye<Oe.length;Ye++){let Qe=Oe[Ye];Ge(Qe,le,te),ue.add(Qe)}else Ge(Oe,le,te),ue.add(Oe)}),M.pop(),p=null,ue},this.compileAsync=function(P,K,le=null){let ue=this.compile(P,K,le);return new Promise(te=>{function Oe(){if(ue.forEach(function(Ye){Fe.get(Ye).currentProgram.isReady()&&ue.delete(Ye)}),ue.size===0){te(P);return}setTimeout(Oe,10)}ze.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let q=null;function re(P){q&&q(P)}function me(){Se.stop()}function ye(){Se.start()}let Se=new im;Se.setAnimationLoop(re),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(P){q=P,C.setAnimationLoop(P),P===null?Se.stop():Se.start()},C.addEventListener("sessionstart",me),C.addEventListener("sessionend",ye),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(K),K=C.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,K,w),p=ke.get(P,M.length),p.init(K),M.push(p),B.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ie.setFromProjectionMatrix(B),ee=this.localClippingEnabled,Q=Ee.init(this.clippingPlanes,ee),m=Ne.get(P,S.length),m.init(),S.push(m),C.enabled===!0&&C.isPresenting===!0){let Oe=y.xr.getDepthSensingMesh();Oe!==null&&De(Oe,K,-1/0,y.sortObjects)}De(P,K,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(J,oe),we=C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1,we&&se.addToRenderList(m,P),this.info.render.frame++,Q===!0&&Ee.beginShadows();let le=p.state.shadowsArray;Ue.render(le,P,K),Q===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let ue=m.opaque,te=m.transmissive;if(p.setupLights(),K.isArrayCamera){let Oe=K.cameras;if(te.length>0)for(let Ye=0,Qe=Oe.length;Ye<Qe;Ye++){let et=Oe[Ye];Ke(ue,te,P,et)}we&&se.render(P);for(let Ye=0,Qe=Oe.length;Ye<Qe;Ye++){let et=Oe[Ye];Ze(m,P,et,et.viewport)}}else te.length>0&&Ke(ue,te,P,K),we&&se.render(P),Ze(m,P,K);w!==null&&(N.updateMultisampleRenderTarget(w),N.updateRenderTargetMipmap(w)),P.isScene===!0&&P.onAfterRender(y,P,K),ge.resetDefaultState(),_=-1,E=null,M.pop(),M.length>0?(p=M[M.length-1],Q===!0&&Ee.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function De(P,K,le,ue){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)le=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ie.intersectsSprite(P)){ue&&$.setFromMatrixPosition(P.matrixWorld).applyMatrix4(B);let Ye=he.update(P),Qe=P.material;Qe.visible&&m.push(P,Ye,Qe,le,$.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ie.intersectsObject(P))){let Ye=he.update(P),Qe=P.material;if(ue&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),$.copy(P.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),$.copy(Ye.boundingSphere.center)),$.applyMatrix4(P.matrixWorld).applyMatrix4(B)),Array.isArray(Qe)){let et=Ye.groups;for(let at=0,ct=et.length;at<ct;at++){let tt=et[at],Mt=Qe[tt.materialIndex];Mt&&Mt.visible&&m.push(P,Ye,Mt,le,$.z,tt)}}else Qe.visible&&m.push(P,Ye,Qe,le,$.z,null)}}let Oe=P.children;for(let Ye=0,Qe=Oe.length;Ye<Qe;Ye++)De(Oe[Ye],K,le,ue)}function Ze(P,K,le,ue){let te=P.opaque,Oe=P.transmissive,Ye=P.transparent;p.setupLightsView(le),Q===!0&&Ee.setGlobalState(y.clippingPlanes,le),ue&&Ie.viewport(R.copy(ue)),te.length>0&&it(te,K,le),Oe.length>0&&it(Oe,K,le),Ye.length>0&&it(Ye,K,le),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Ke(P,K,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ue.id]===void 0&&(p.state.transmissionRenderTarget[ue.id]=new qt(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?hn:vi,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));let Oe=p.state.transmissionRenderTarget[ue.id],Ye=ue.viewport||R;Oe.setSize(Ye.z,Ye.w);let Qe=y.getRenderTarget();y.setRenderTarget(Oe),y.getClearColor(L),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear(),we&&se.render(le);let et=y.toneMapping;y.toneMapping=vs;let at=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),p.setupLightsView(ue),Q===!0&&Ee.setGlobalState(y.clippingPlanes,ue),it(P,le,ue),N.updateMultisampleRenderTarget(Oe),N.updateRenderTargetMipmap(Oe),ze.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let tt=0,Mt=K.length;tt<Mt;tt++){let Nt=K[tt],Ot=Nt.object,Un=Nt.geometry,St=Nt.material,nt=Nt.group;if(St.side===Pt&&Ot.layers.test(ue.layers)){let Oi=St.side;St.side=en,St.needsUpdate=!0,rt(Ot,le,ue,Un,St,nt),St.side=Oi,St.needsUpdate=!0,ct=!0}}ct===!0&&(N.updateMultisampleRenderTarget(Oe),N.updateRenderTargetMipmap(Oe))}y.setRenderTarget(Qe),y.setClearColor(L,O),at!==void 0&&(ue.viewport=at),y.toneMapping=et}function it(P,K,le){let ue=K.isScene===!0?K.overrideMaterial:null;for(let te=0,Oe=P.length;te<Oe;te++){let Ye=P[te],Qe=Ye.object,et=Ye.geometry,at=ue===null?Ye.material:ue,ct=Ye.group;Qe.layers.test(le.layers)&&rt(Qe,K,le,et,at,ct)}}function rt(P,K,le,ue,te,Oe){P.onBeforeRender(y,K,le,ue,te,Oe),P.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),te.onBeforeRender(y,K,le,ue,P,Oe),te.transparent===!0&&te.side===Pt&&te.forceSinglePass===!1?(te.side=en,te.needsUpdate=!0,y.renderBufferDirect(le,K,ue,te,P,Oe),te.side=wi,te.needsUpdate=!0,y.renderBufferDirect(le,K,ue,te,P,Oe),te.side=Pt):y.renderBufferDirect(le,K,ue,te,P,Oe),P.onAfterRender(y,K,le,ue,te,Oe)}function wt(P,K,le){K.isScene!==!0&&(K=pe);let ue=Fe.get(P),te=p.state.lights,Oe=p.state.shadowsArray,Ye=te.state.version,Qe=Ce.getParameters(P,te.state,Oe,K,le),et=Ce.getProgramCacheKey(Qe),at=ue.programs;ue.environment=P.isMeshStandardMaterial?K.environment:null,ue.fog=K.fog,ue.envMap=(P.isMeshStandardMaterial?j:A).get(P.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&P.envMap===null?K.environmentRotation:P.envMapRotation,at===void 0&&(P.addEventListener("dispose",ae),at=new Map,ue.programs=at);let ct=at.get(et);if(ct!==void 0){if(ue.currentProgram===ct&&ue.lightsStateVersion===Ye)return Dt(P,Qe),ct}else Qe.uniforms=Ce.getUniforms(P),P.onBeforeCompile(Qe,y),ct=Ce.acquireProgram(Qe,et),at.set(et,ct),ue.uniforms=Qe.uniforms;let tt=ue.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(tt.clippingPlanes=Ee.uniform),Dt(P,Qe),ue.needsLights=xn(P),ue.lightsStateVersion=Ye,ue.needsLights&&(tt.ambientLightColor.value=te.state.ambient,tt.lightProbe.value=te.state.probe,tt.directionalLights.value=te.state.directional,tt.directionalLightShadows.value=te.state.directionalShadow,tt.spotLights.value=te.state.spot,tt.spotLightShadows.value=te.state.spotShadow,tt.rectAreaLights.value=te.state.rectArea,tt.ltc_1.value=te.state.rectAreaLTC1,tt.ltc_2.value=te.state.rectAreaLTC2,tt.pointLights.value=te.state.point,tt.pointLightShadows.value=te.state.pointShadow,tt.hemisphereLights.value=te.state.hemi,tt.directionalShadowMap.value=te.state.directionalShadowMap,tt.directionalShadowMatrix.value=te.state.directionalShadowMatrix,tt.spotShadowMap.value=te.state.spotShadowMap,tt.spotLightMatrix.value=te.state.spotLightMatrix,tt.spotLightMap.value=te.state.spotLightMap,tt.pointShadowMap.value=te.state.pointShadowMap,tt.pointShadowMatrix.value=te.state.pointShadowMatrix),ue.currentProgram=ct,ue.uniformsList=null,ct}function Vt(P){if(P.uniformsList===null){let K=P.currentProgram.getUniforms();P.uniformsList=Wr.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function Dt(P,K){let le=Fe.get(P);le.outputColorSpace=K.outputColorSpace,le.batching=K.batching,le.batchingColor=K.batchingColor,le.instancing=K.instancing,le.instancingColor=K.instancingColor,le.instancingMorph=K.instancingMorph,le.skinning=K.skinning,le.morphTargets=K.morphTargets,le.morphNormals=K.morphNormals,le.morphColors=K.morphColors,le.morphTargetsCount=K.morphTargetsCount,le.numClippingPlanes=K.numClippingPlanes,le.numIntersection=K.numClipIntersection,le.vertexAlphas=K.vertexAlphas,le.vertexTangents=K.vertexTangents,le.toneMapping=K.toneMapping}function Gt(P,K,le,ue,te){K.isScene!==!0&&(K=pe),N.resetTextureUnits();let Oe=K.fog,Ye=ue.isMeshStandardMaterial?K.environment:null,Qe=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Tn,et=(ue.isMeshStandardMaterial?j:A).get(ue.envMap||Ye),at=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ct=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),tt=!!le.morphAttributes.position,Mt=!!le.morphAttributes.normal,Nt=!!le.morphAttributes.color,Ot=vs;ue.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ot=y.toneMapping);let Un=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,St=Un!==void 0?Un.length:0,nt=Fe.get(ue),Oi=p.state.lights;if(Q===!0&&(ee===!0||P!==E)){let Qn=P===E&&ue.id===_;Ee.setState(ue,P,Qn)}let Tt=!1;ue.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Oi.state.version||nt.outputColorSpace!==Qe||te.isBatchedMesh&&nt.batching===!1||!te.isBatchedMesh&&nt.batching===!0||te.isBatchedMesh&&nt.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&nt.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&nt.instancing===!1||!te.isInstancedMesh&&nt.instancing===!0||te.isSkinnedMesh&&nt.skinning===!1||!te.isSkinnedMesh&&nt.skinning===!0||te.isInstancedMesh&&nt.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&nt.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&nt.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&nt.instancingMorph===!1&&te.morphTexture!==null||nt.envMap!==et||ue.fog===!0&&nt.fog!==Oe||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ee.numPlanes||nt.numIntersection!==Ee.numIntersection)||nt.vertexAlphas!==at||nt.vertexTangents!==ct||nt.morphTargets!==tt||nt.morphNormals!==Mt||nt.morphColors!==Nt||nt.toneMapping!==Ot||nt.morphTargetsCount!==St)&&(Tt=!0):(Tt=!0,nt.__version=ue.version);let ui=nt.currentProgram;Tt===!0&&(ui=wt(ue,K,te));let yr=!1,Gn=!1,Ao=!1,Bt=ui.getUniforms(),Ti=nt.uniforms;if(Ie.useProgram(ui.program)&&(yr=!0,Gn=!0,Ao=!0),ue.id!==_&&(_=ue.id,Gn=!0),yr||E!==P){Ie.buffers.depth.getReversed()?(I.copy(P.projectionMatrix),Wx(I),Xx(I),Bt.setValue(G,"projectionMatrix",I)):Bt.setValue(G,"projectionMatrix",P.projectionMatrix),Bt.setValue(G,"viewMatrix",P.matrixWorldInverse);let as=Bt.map.cameraPosition;as!==void 0&&as.setValue(G,X.setFromMatrixPosition(P.matrixWorld)),Be.logarithmicDepthBuffer&&Bt.setValue(G,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Bt.setValue(G,"isOrthographic",P.isOrthographicCamera===!0),E!==P&&(E=P,Gn=!0,Ao=!0)}if(te.isSkinnedMesh){Bt.setOptional(G,te,"bindMatrix"),Bt.setOptional(G,te,"bindMatrixInverse");let Qn=te.skeleton;Qn&&(Qn.boneTexture===null&&Qn.computeBoneTexture(),Bt.setValue(G,"boneTexture",Qn.boneTexture,N))}te.isBatchedMesh&&(Bt.setOptional(G,te,"batchingTexture"),Bt.setValue(G,"batchingTexture",te._matricesTexture,N),Bt.setOptional(G,te,"batchingIdTexture"),Bt.setValue(G,"batchingIdTexture",te._indirectTexture,N),Bt.setOptional(G,te,"batchingColorTexture"),te._colorsTexture!==null&&Bt.setValue(G,"batchingColorTexture",te._colorsTexture,N));let Ro=le.morphAttributes;if((Ro.position!==void 0||Ro.normal!==void 0||Ro.color!==void 0)&&be.update(te,le,ui),(Gn||nt.receiveShadow!==te.receiveShadow)&&(nt.receiveShadow=te.receiveShadow,Bt.setValue(G,"receiveShadow",te.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Ti.envMap.value=et,Ti.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&K.environment!==null&&(Ti.envMapIntensity.value=K.environmentIntensity),Gn&&(Bt.setValue(G,"toneMappingExposure",y.toneMappingExposure),nt.needsLights&&Xt(Ti,Ao),Oe&&ue.fog===!0&&Le.refreshFogUniforms(Ti,Oe),Le.refreshMaterialUniforms(Ti,ue,V,Y,p.state.transmissionRenderTarget[P.id]),Wr.upload(G,Vt(nt),Ti,N)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Wr.upload(G,Vt(nt),Ti,N),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Bt.setValue(G,"center",te.center),Bt.setValue(G,"modelViewMatrix",te.modelViewMatrix),Bt.setValue(G,"normalMatrix",te.normalMatrix),Bt.setValue(G,"modelMatrix",te.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){let Qn=ue.uniformsGroups;for(let as=0,ls=Qn.length;as<ls;as++){let yd=Qn[as];W.update(yd,ui),W.bind(yd,ui)}}return ui}function Xt(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function xn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(P,K,le){Fe.get(P.texture).__webglTexture=K,Fe.get(P.depthTexture).__webglTexture=le;let ue=Fe.get(P);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=le===void 0,ue.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,K){let le=Fe.get(P);le.__webglFramebuffer=K,le.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(P,K=0,le=0){w=P,b=K,v=le;let ue=!0,te=null,Oe=!1,Ye=!1;if(P){let et=Fe.get(P);if(et.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(G.FRAMEBUFFER,null),ue=!1;else if(et.__webglFramebuffer===void 0)N.setupRenderTarget(P);else if(et.__hasExternalTextures)N.rebindTextures(P,Fe.get(P.texture).__webglTexture,Fe.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let tt=P.depthTexture;if(et.__boundDepthTexture!==tt){if(tt!==null&&Fe.has(tt)&&(P.width!==tt.image.width||P.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(P)}}let at=P.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ye=!0);let ct=Fe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ct[K])?te=ct[K][le]:te=ct[K],Oe=!0):P.samples>0&&N.useMultisampledRTT(P)===!1?te=Fe.get(P).__webglMultisampledFramebuffer:Array.isArray(ct)?te=ct[le]:te=ct,R.copy(P.viewport),F.copy(P.scissor),k=P.scissorTest}else R.copy(de).multiplyScalar(V).floor(),F.copy(ve).multiplyScalar(V).floor(),k=ce;if(Ie.bindFramebuffer(G.FRAMEBUFFER,te)&&ue&&Ie.drawBuffers(P,te),Ie.viewport(R),Ie.scissor(F),Ie.setScissorTest(k),Oe){let et=Fe.get(P.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+K,et.__webglTexture,le)}else if(Ye){let et=Fe.get(P.texture),at=K||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,et.__webglTexture,le||0,at)}_=-1},this.readRenderTargetPixels=function(P,K,le,ue,te,Oe,Ye){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=Fe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ye!==void 0&&(Qe=Qe[Ye]),Qe){Ie.bindFramebuffer(G.FRAMEBUFFER,Qe);try{let et=P.texture,at=et.format,ct=et.type;if(!Be.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-ue&&le>=0&&le<=P.height-te&&G.readPixels(K,le,ue,te,fe.convert(at),fe.convert(ct),Oe)}finally{let et=w!==null?Fe.get(w).__webglFramebuffer:null;Ie.bindFramebuffer(G.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(P,K,le,ue,te,Oe,Ye){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=Fe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ye!==void 0&&(Qe=Qe[Ye]),Qe){let et=P.texture,at=et.format,ct=et.type;if(!Be.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=P.width-ue&&le>=0&&le<=P.height-te){Ie.bindFramebuffer(G.FRAMEBUFFER,Qe);let tt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,tt),G.bufferData(G.PIXEL_PACK_BUFFER,Oe.byteLength,G.STREAM_READ),G.readPixels(K,le,ue,te,fe.convert(at),fe.convert(ct),0);let Mt=w!==null?Fe.get(w).__webglFramebuffer:null;Ie.bindFramebuffer(G.FRAMEBUFFER,Mt);let Nt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Gx(G,Nt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,tt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Oe),G.deleteBuffer(tt),G.deleteSync(Nt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,K=null,le=0){P.isTexture!==!0&&(ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,P=arguments[1]);let ue=Math.pow(2,-le),te=Math.floor(P.image.width*ue),Oe=Math.floor(P.image.height*ue),Ye=K!==null?K.x:0,Qe=K!==null?K.y:0;N.setTexture2D(P,0),G.copyTexSubImage2D(G.TEXTURE_2D,le,0,0,Ye,Qe,te,Oe),Ie.unbindTexture()},this.copyTextureToTexture=function(P,K,le=null,ue=null,te=0){P.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,P=arguments[1],K=arguments[2],te=arguments[3]||0,le=null);let Oe,Ye,Qe,et,at,ct,tt,Mt,Nt,Ot=P.isCompressedTexture?P.mipmaps[te]:P.image;le!==null?(Oe=le.max.x-le.min.x,Ye=le.max.y-le.min.y,Qe=le.isBox3?le.max.z-le.min.z:1,et=le.min.x,at=le.min.y,ct=le.isBox3?le.min.z:0):(Oe=Ot.width,Ye=Ot.height,Qe=Ot.depth||1,et=0,at=0,ct=0),ue!==null?(tt=ue.x,Mt=ue.y,Nt=ue.z):(tt=0,Mt=0,Nt=0);let Un=fe.convert(K.format),St=fe.convert(K.type),nt;K.isData3DTexture?(N.setTexture3D(K,0),nt=G.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(N.setTexture2DArray(K,0),nt=G.TEXTURE_2D_ARRAY):(N.setTexture2D(K,0),nt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment);let Oi=G.getParameter(G.UNPACK_ROW_LENGTH),Tt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ui=G.getParameter(G.UNPACK_SKIP_PIXELS),yr=G.getParameter(G.UNPACK_SKIP_ROWS),Gn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ot.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ot.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,et),G.pixelStorei(G.UNPACK_SKIP_ROWS,at),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ct);let Ao=P.isDataArrayTexture||P.isData3DTexture,Bt=K.isDataArrayTexture||K.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let Ti=Fe.get(P),Ro=Fe.get(K),Qn=Fe.get(Ti.__renderTarget),as=Fe.get(Ro.__renderTarget);Ie.bindFramebuffer(G.READ_FRAMEBUFFER,Qn.__webglFramebuffer),Ie.bindFramebuffer(G.DRAW_FRAMEBUFFER,as.__webglFramebuffer);for(let ls=0;ls<Qe;ls++)Ao&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Fe.get(P).__webglTexture,te,ct+ls),P.isDepthTexture?(Bt&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Fe.get(K).__webglTexture,te,Nt+ls),G.blitFramebuffer(et,at,Oe,Ye,tt,Mt,Oe,Ye,G.DEPTH_BUFFER_BIT,G.NEAREST)):Bt?G.copyTexSubImage3D(nt,te,tt,Mt,Nt+ls,et,at,Oe,Ye):G.copyTexSubImage2D(nt,te,tt,Mt,Nt+ls,et,at,Oe,Ye);Ie.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Bt?P.isDataTexture||P.isData3DTexture?G.texSubImage3D(nt,te,tt,Mt,Nt,Oe,Ye,Qe,Un,St,Ot.data):K.isCompressedArrayTexture?G.compressedTexSubImage3D(nt,te,tt,Mt,Nt,Oe,Ye,Qe,Un,Ot.data):G.texSubImage3D(nt,te,tt,Mt,Nt,Oe,Ye,Qe,Un,St,Ot):P.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,te,tt,Mt,Oe,Ye,Un,St,Ot.data):P.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,te,tt,Mt,Ot.width,Ot.height,Un,Ot.data):G.texSubImage2D(G.TEXTURE_2D,te,tt,Mt,Oe,Ye,Un,St,Ot);G.pixelStorei(G.UNPACK_ROW_LENGTH,Oi),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Tt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ui),G.pixelStorei(G.UNPACK_SKIP_ROWS,yr),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Gn),te===0&&K.generateMipmaps&&G.generateMipmap(nt),Ie.unbindTexture()},this.copyTextureToTexture3D=function(P,K,le=null,ue=null,te=0){return P.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ue=arguments[1]||null,P=arguments[2],K=arguments[3],te=arguments[4]||0),ko('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,K,le,ue,te)},this.initRenderTarget=function(P){Fe.get(P).__webglFramebuffer===void 0&&N.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?N.setTextureCube(P,0):P.isData3DTexture?N.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?N.setTexture2DArray(P,0):N.setTexture2D(P,0),Ie.unbindTexture()},this.resetState=function(){b=0,v=0,w=null,Ie.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}},no=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var jo=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},io=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zu,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Rn=new H,tr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},so=class extends bn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nr,Do=new H,Ur=new H,Fr=new H,Or=new $e,No=new $e,lm=new je,Ka=new H,Uo=new H,ja=new H,_p=new $e,au=new $e,Mp=new $e,Jo=class extends Ft{constructor(e=new so){if(super(),this.isSprite=!0,this.type="Sprite",Nr===void 0){Nr=new gt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new io(t,5);Nr.setIndex([0,1,2,0,2,3]),Nr.setAttribute("position",new tr(i,3,0,!1)),Nr.setAttribute("uv",new tr(i,2,3,!1))}this.geometry=Nr,this.material=e,this.center=new $e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ur.setFromMatrixScale(this.matrixWorld),lm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ur.multiplyScalar(-Fr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ja(Ka.set(-.5,-.5,0),Fr,o,Ur,s,r),Ja(Uo.set(.5,-.5,0),Fr,o,Ur,s,r),Ja(ja.set(.5,.5,0),Fr,o,Ur,s,r),_p.set(0,0),au.set(1,0),Mp.set(1,1);let a=e.ray.intersectTriangle(Ka,Uo,ja,!1,Do);if(a===null&&(Ja(Uo.set(-.5,.5,0),Fr,o,Ur,s,r),au.set(0,1),a=e.ray.intersectTriangle(Ka,ja,Uo,!1,Do),a===null))return;let l=e.ray.origin.distanceTo(Do);l<e.near||l>e.far||t.push({distance:l,point:Do.clone(),uv:gs.getInterpolation(Do,Ka,Uo,ja,_p,au,Mp,new $e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ja(n,e,t,i,s,r){Or.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(No.x=r*Or.x-s*Or.y,No.y=s*Or.x+r*Or.y):No.copy(Or),n.copy(e),n.x+=No.x,n.y+=No.y,n.applyMatrix4(lm)}var bp=new H,Sp=new _t,Tp=new _t,BM=new H,Ep=new je,Qa=new H,lu=new qn,wp=new je,cu=new Jr,_l=class extends ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sd,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ni),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Qa),this.boundingBox.expandByPoint(Qa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Qa),this.boundingSphere.expandByPoint(Qa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lu.copy(this.boundingSphere),lu.applyMatrix4(s),e.ray.intersectsSphere(lu)!==!1&&(wp.copy(s).invert(),cu.copy(e.ray).applyMatrix4(wp),!(this.boundingBox!==null&&cu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,cu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===px?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Sp.fromBufferAttribute(s.attributes.skinIndex,e),Tp.fromBufferAttribute(s.attributes.skinWeight,e),bp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Tp.getComponent(r);if(o!==0){let a=Sp.getComponent(r);Ep.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(BM.copy(bp).applyMatrix4(Ep),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Qo=class extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ss=class extends cn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Kt,u=Kt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ap=new je,zM=new je,Ml=class n{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new je;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:zM;Ap.multiplyMatrices(a,t[r]),Ap.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ss(t,e,e,Bn,gi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Qo),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},nr=class extends mt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Br=new je,Rp=new je,el=[],Cp=new ni,kM=new je,Fo=new ot,Oo=new qn,Sn=class extends ot{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,kM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Br),Cp.copy(e.boundingBox).applyMatrix4(Br),this.boundingBox.union(Cp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Br),Oo.copy(e.boundingSphere).applyMatrix4(Br),this.boundingSphere.union(Oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Fo.geometry=this.geometry,Fo.material=this.material,Fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oo.copy(this.boundingSphere),Oo.applyMatrix4(i),e.ray.intersectsSphere(Oo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Br),Rp.multiplyMatrices(i,Br),Fo.matrixWorld=Rp,Fo.raycast(e,el);for(let o=0,a=el.length;o<a;o++){let l=el[o];l.instanceId=r,l.object=this,t.push(l)}el.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new nr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ss(new Float32Array(s*this.count),s,this.count,Fh,gi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ts=class extends bn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},bl=new H,Sl=new H,Pp=new je,Bo=new Jr,tl=new qn,uu=new H,Ip=new H,ro=class extends Ft{constructor(e=new gt,t=new Ts){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)bl.fromBufferAttribute(t,s-1),Sl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=bl.distanceTo(Sl);e.setAttribute("lineDistance",new lt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(s),tl.radius+=r,e.ray.intersectsSphere(tl)===!1)return;Pp.copy(s).invert(),Bo.copy(e.ray).applyMatrix4(Pp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=u.getX(x),S=u.getX(x+1),M=nl(this,e,Bo,l,p,S);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=nl(this,e,Bo,l,x,m);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=nl(this,e,Bo,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=nl(this,e,Bo,l,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function nl(n,e,t,i,s,r){let o=n.geometry.attributes.position;if(bl.fromBufferAttribute(o,s),Sl.fromBufferAttribute(o,r),t.distanceSqToSegment(bl,Sl,uu,Ip)>i)return;uu.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(uu);if(!(l<e.near||l>e.far))return{distance:l,point:Ip.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Lp=new H,Dp=new H,ir=class extends ro{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Lp.fromBufferAttribute(t,s),Dp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Lp.distanceTo(Dp);e.setAttribute("lineDistance",new lt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Tl=class extends ro{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},sr=class extends bn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Np=new je,fh=new Jr,il=new qn,sl=new H,Es=class extends Ft{constructor(e=new gt,t=new sr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(s),il.radius+=r,e.ray.intersectsSphere(il)===!1)return;Np.copy(s).invert(),fh.copy(e.ray).applyMatrix4(Np);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);sl.fromBufferAttribute(h,m),Up(sl,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)sl.fromBufferAttribute(h,g),Up(sl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Up(n,e,t,i,s,r,o){let a=fh.distanceSqToPoint(n);if(a<t){let l=new H;fh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ii=class extends cn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var In=class n extends gt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],g=0,x=[],m=i/2,p=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new lt(h,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(d,2));function S(){let y=new H,T=new H,b=0,v=(t-e)/i;for(let w=0;w<=r;w++){let _=[],E=w/r,R=E*(t-e)+e;for(let F=0;F<=s;F++){let k=F/s,L=k*l+a,O=Math.sin(L),D=Math.cos(L);T.x=R*O,T.y=-E*i+m,T.z=R*D,h.push(T.x,T.y,T.z),y.set(O,v,D).normalize(),f.push(y.x,y.y,y.z),d.push(k,1-E),_.push(g++)}x.push(_)}for(let w=0;w<s;w++)for(let _=0;_<r;_++){let E=x[_][w],R=x[_+1][w],F=x[_+1][w+1],k=x[_][w+1];(e>0||_!==0)&&(u.push(E,R,k),b+=3),(t>0||_!==r-1)&&(u.push(R,F,k),b+=3)}c.addGroup(p,b,0),p+=b}function M(y){let T=g,b=new $e,v=new H,w=0,_=y===!0?e:t,E=y===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*E,0),f.push(0,E,0),d.push(.5,.5),g++;let R=g;for(let F=0;F<=s;F++){let L=F/s*l+a,O=Math.cos(L),D=Math.sin(L);v.x=_*D,v.y=m*E,v.z=_*O,h.push(v.x,v.y,v.z),f.push(0,E,0),b.x=O*.5+.5,b.y=D*.5*E+.5,d.push(b.x,b.y),g++}for(let F=0;F<s;F++){let k=T+F,L=R+F;y===!0?u.push(L,L+1,k):u.push(L+1,L,k),w+=3}c.addGroup(p,w,y===!0?1:2),p+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},rr=class n extends In{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},dh=class n extends gt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let M=new H,y=new H,T=new H;for(let b=0;b<t.length;b+=3)d(t[b+0],M),d(t[b+1],y),d(t[b+2],T),l(M,y,T,S)}function l(S,M,y,T){let b=T+1,v=[];for(let w=0;w<=b;w++){v[w]=[];let _=S.clone().lerp(y,w/b),E=M.clone().lerp(y,w/b),R=b-w;for(let F=0;F<=R;F++)F===0&&w===b?v[w][F]=_:v[w][F]=_.clone().lerp(E,F/R)}for(let w=0;w<b;w++)for(let _=0;_<2*(b-w)-1;_++){let E=Math.floor(_/2);_%2===0?(f(v[w][E+1]),f(v[w+1][E]),f(v[w][E])):(f(v[w][E+1]),f(v[w+1][E+1]),f(v[w+1][E]))}}function c(S){let M=new H;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(S),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function u(){let S=new H;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];let y=m(S)/2/Math.PI+.5,T=p(S)/Math.PI+.5;o.push(y,1-T)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){let M=o[S+0],y=o[S+2],T=o[S+4],b=Math.max(M,y,T),v=Math.min(M,y,T);b>.9&&v<.1&&(M<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),T<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,M){let y=S*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function g(){let S=new H,M=new H,y=new H,T=new H,b=new $e,v=new $e,w=new $e;for(let _=0,E=0;_<r.length;_+=9,E+=6){S.set(r[_+0],r[_+1],r[_+2]),M.set(r[_+3],r[_+4],r[_+5]),y.set(r[_+6],r[_+7],r[_+8]),b.set(o[E+0],o[E+1]),v.set(o[E+2],o[E+3]),w.set(o[E+4],o[E+5]),T.copy(S).add(M).add(y).divideScalar(3);let R=m(T);x(b,E+0,S,R),x(v,E+2,M,R),x(w,E+4,y,R)}}function x(S,M,y,T){T<0&&S.x===1&&(o[M]=S.x-1),y.x===0&&y.z===0&&(o[M]=T/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var or=class n extends dh{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var ws=class n extends gt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new H,f=new H,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let S=[],M=p/i,y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){let b=T/t;h.x=-e*Math.cos(s+b*r)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(s+b*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(b+y,1-M),S.push(c++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){let M=u[p][S+1],y=u[p][S],T=u[p+1][S],b=u[p+1][S+1];(p!==0||o>0)&&d.push(M,y,b),(p!==i-1||l<Math.PI)&&d.push(y,T,b)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var El=class extends vt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},st=class extends bn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yn=class extends st{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var wl=class extends bn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},si=class extends bn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function rl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function HM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function VM(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Fp(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function cm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var As=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ph=class extends As{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Td,endingEnd:Td}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ed:r=e,a=2*t-i;break;case wd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ed:o=e,l=2*i-t;break;case wd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,S=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,M=(-1-d)*m+(1.5+d)*x+.5*g,y=d*m-d*x;for(let T=0;T!==a;++T)r[T]=p*o[u+T]+S*o[c+T]+M*o[l+T]+y*o[h+T];return r}},mh=class extends As{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},gh=class extends As{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ri=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rl(t,this.TimeBufferType),this.values=rl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:rl(e.times,Array),values:rl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new gh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ph(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zr:t=this.InterpolantFactoryMethodDiscrete;break;case Kr:t=this.InterpolantFactoryMethodLinear;break;case Nc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return Kr;case this.InterpolantFactoryMethodSmooth:return Nc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&HM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Nc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=Kr;var Rs=class extends ri{constructor(e,t,i){super(e,t,i)}};Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=Zr;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends ri{};Al.prototype.ValueTypeName="color";var $i=class extends ri{};$i.prototype.ValueTypeName="number";var xh=class extends As{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)rn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Zi=class extends ri{InterpolantFactoryMethodLinear(e){return new xh(this.times,this.values,this.getValueSize(),e)}};Zi.prototype.ValueTypeName="quaternion";Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends ri{constructor(e,t,i){super(e,t,i)}};Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Zr;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends ri{};Ki.prototype.ValueTypeName="vector";var Rl=class{constructor(e="",t=-1,i=[],s=mx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=xi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(WM(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(ri.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=VM(l);l=Fp(l,1,u),c=Fp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new $i(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,f,d,g,x){if(d.length!==0){let m=[],p=[];cm(d,m,p,g),m.length!==0&&x.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(let x in d){let m=[],p=[];for(let S=0;S!==f[g].morphTargets.length;++S){let M=f[g];m.push(M.time),p.push(M.morphTarget===x?1:0)}s.push(new $i(".morphTargetInfluence["+x+"]",m,p))}l=d.length*o}else{let d=".bones["+t[h].name+"]";i(Ki,d+".position",f,"pos",s),i(Zi,d+".quaternion",f,"rot",s),i(Ki,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function GM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $i;case"vector":case"vector2":case"vector3":case"vector4":return Ki;case"color":return Al;case"quaternion":return Zi;case"bool":case"boolean":return Rs;case"string":return Cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function WM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=GM(n.type);if(n.times===void 0){let t=[],i=[];cm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var xs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},vh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},XM=new vh,ji=class{constructor(e){this.manager=e!==void 0?e:XM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ji.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gi={},yh=class extends Error{constructor(e,t){super(e),this.response=t}},ea=class extends ji{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=xs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Gi[e]!==void 0){Gi[e].push({onLoad:t,onProgress:i,onError:s});return}Gi[e]=[],Gi[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Gi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,m=new ReadableStream({start(p){S();function S(){h.read().then(({done:M,value:y})=>{if(M)p.close();else{x+=y.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let b=0,v=u.length;b<v;b++){let w=u[b];w.onProgress&&w.onProgress(T)}p.enqueue(y),S()}},M=>{p.error(M)})}}});return new Response(m)}else throw new yh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{xs.add(e,c);let u=Gi[e];delete Gi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Gi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Gi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var _h=class extends ji{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=xs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Zo("img");function l(){u(),xs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Cl=class extends ji{constructor(e){super(e)}load(e,t,i,s){let r=new cn,o=new _h(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},oo=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ao=class extends oo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},hu=new je,Op=new H,Bp=new H,ta=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ko,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Op.setFromMatrixPosition(e.matrixWorld),t.position.copy(Op),Bp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bp),t.updateMatrixWorld(),hu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Mh=class extends ta{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=jr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},lo=class extends oo{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Mh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},zp=new je,zo=new H,fu=new H,bh=class extends ta{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),zo.setFromMatrixPosition(e.matrixWorld),i.position.copy(zo),fu.copy(i.position),fu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(fu),i.updateMatrixWorld(),s.makeTranslation(-zo.x,-zo.y,-zo.z),zp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zp)}},Pl=class extends oo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new bh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Sh=class extends ta{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ai=class extends oo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Sh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ps=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Il=class extends ji{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=xs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return xs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),xs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});xs.add(e,l),r.manager.itemStart(e)}};var Ll=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=kp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function kp(){return performance.now()}var Vh="\\[\\]\\.:\\/",qM=new RegExp("["+Vh+"]","g"),Gh="[^"+Vh+"]",YM="[^"+Vh.replace("\\.","")+"]",$M=/((?:WC+[\/:])*)/.source.replace("WC",Gh),ZM=/(WCOD+)?/.source.replace("WCOD",YM),KM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gh),jM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gh),JM=new RegExp("^"+$M+ZM+KM+jM+"$"),QM=["material","materials","bones","map"],Th=class{constructor(e,t,i){let s=i||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ut=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qM,"")}static parseTrackName(e){let t=JM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);QM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=Th;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uw=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var ra=class n extends ot{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Zt;let i=this,s=t.color!==void 0?new Re(t.color):new Re(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new pi,h=new H,f=new H,d=new H,g=new je,x=new H(0,0,-1),m=new _t,p=new H,S=new H,M=new _t,y=new je,T=this.camera,b=new qt(r,o,{samples:c,type:hn}),v=new vt({name:l.name!==void 0?l.name:"unspecified",uniforms:En.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});v.uniforms.tDiffuse.value=b.texture,v.uniforms.color.value=s,v.uniforms.textureMatrix.value=y,this.material=v,this.onBeforeRender=function(w,_,E){if(f.setFromMatrixPosition(i.matrixWorld),d.setFromMatrixPosition(E.matrixWorld),g.extractRotation(i.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(f,d),p.dot(h)>0)return;p.reflect(h).negate(),p.add(f),g.extractRotation(E.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(d),S.subVectors(f,x),S.reflect(h).negate(),S.add(f),T.position.copy(p),T.up.set(0,1,0),T.up.applyMatrix4(g),T.up.reflect(h),T.lookAt(S),T.far=E.far,T.updateMatrixWorld(),T.projectionMatrix.copy(E.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(T.projectionMatrix),y.multiply(T.matrixWorldInverse),y.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(T.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let R=T.projectionMatrix;M.x=(Math.sign(m.x)+R.elements[8])/R.elements[0],M.y=(Math.sign(m.y)+R.elements[9])/R.elements[5],M.z=-1,M.w=(1+R.elements[10])/R.elements[14],m.multiplyScalar(2/m.dot(M)),R.elements[2]=m.x,R.elements[6]=m.y,R.elements[10]=m.z+1-a,R.elements[14]=m.w,i.visible=!1;let F=w.getRenderTarget(),k=w.xr.enabled,L=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(b),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(_,T),w.xr.enabled=k,w.shadowMap.autoUpdate=L,w.setRenderTarget(F);let O=E.viewport;O!==void 0&&w.state.viewport(O),i.visible=!0},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),i.material.dispose()}}};ra.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Hl=[25,18,15,12,10,8,6,4],ar={maxSpeed:80,accel:26,brake:30,steerRate:1.7,steerHighSpeed:.75,grip:1,wetGrip:.78,driftBonus:1.6,airControl:.12,airStability:1,landing:1,boostPower:1.22,boostDuration:2.2,boostCharges:3,offroadDrag:1,wallLoss:.25,steerNoise:0,slipstream:1},Ci={sunset:{id:"sunset",name:"Fin d'apr\xE8s-midi",grip:1,wet:0,rain:0,wind:0,sheen:.9,skyTop:8825052,skyHorizon:15785172,fogColor:14074548,fogDensity:52e-5,sunColor:16756316,sunIntensity:4.6,sunDir:[-.5,.21,-.62],hemiSky:12899050,hemiGround:9399366,hemiIntensity:.8,seaColor:2786996,night:!1,bloom:.34},sicily:{id:"sicily",name:"Apr\xE8s-midi sicilien",grip:1,wet:0,rain:0,wind:.1,sheen:.2,skyTop:4885468,skyHorizon:13623792,fogColor:13425124,fogDensity:5e-4,sunColor:16773854,sunIntensity:3.3,sunDir:[-.45,.62,-.4],hemiSky:12375282,hemiGround:8156256,hemiIntensity:.85,seaColor:1994664,night:!1,bloom:.25},rain:{id:"rain",name:"Nuit pluvieuse",grip:.8,wet:1,rain:1,wind:.6,skyTop:329231,skyHorizon:1711933,fogColor:1317427,fogDensity:.0028,sunColor:7375103,sunIntensity:.7,sunDir:[.4,.7,.3],hemiSky:3820170,hemiGround:1052696,hemiIntensity:.75,seaColor:662067,night:!0,bloom:1},fog:{id:"fog",name:"Brume matinale",grip:.92,wet:.35,rain:0,wind:.2,skyTop:10467535,skyHorizon:15262418,fogColor:14277846,fogDensity:.0052,sunColor:16773328,sunIntensity:1.5,sunDir:[.5,.35,.5],hemiSky:13621734,hemiGround:7301722,hemiIntensity:1.1,seaColor:6262687,night:!1,bloom:.35}};function oa(n){let e=String(n),t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t^=t>>>15,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}function kn(n){let e=(typeof n=="number"?n>>>0:oa(n))||1,t=e,i=()=>{e=e+1831565813>>>0;let s=e;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};return{next:i,range:(s,r)=>s+(r-s)*i(),int:(s,r)=>s+Math.floor(i()*(r-s+1)),pick:s=>s[Math.floor(i()*s.length)],chance:s=>i()<s,sign:()=>i()<.5?-1:1,shuffle:s=>{let r=s.slice();for(let o=r.length-1;o>0;o--){let a=Math.floor(i()*(o+1));[r[o],r[a]]=[r[a],r[o]]}return r},fork:s=>kn(oa(t+":"+s))}}var Vl=Math.PI*2,eb=2,um=2800,hm=4200,tb=34,fm=8,dm=60,nb=.12,ib=.1,pm=28,sb=150,Wh=52,$h=.0025,mm=1/150,rb=10,gm=5,xm=250,vm=38,ym=75,Gl=150,qh=120,Sm=10,ob=80,ab=40,lb=20,cb=30,ub=95,Xh=18,_m=22,hb=60,Yh=(n,e,t)=>n<e?e:n>t?t:n;function fb(n){let e=n.int(10,14),t=n.range(440,520),i=[];for(let s=0;s<e;s++){let r=n.range(-.3,.3)*(Vl/e),o=s/e*Vl+r,a=Yh(t*n.range(.62,1.25),380,620);i.push([a*Math.cos(o),a*Math.sin(o)])}return i}function db(n,e,t,i,s,r,o,a,l){let c=(x,m,p,S)=>{let M=(l-p)/(S-p);return[x[0]+(m[0]-x[0])*M,x[1]+(m[1]-x[1])*M]},u=c(n,e,s,r),h=c(e,t,r,o),f=c(t,i,o,a),d=c(u,h,s,o),g=c(h,f,r,a);return c(d,g,r,o)}function pb(n,e){let t=n.length,i=[];for(let s=0;s<t;s++){let r=n[(s-1+t)%t],o=n[s],a=n[(s+1)%t],l=n[(s+2)%t],c=0,u=c+Math.sqrt(Math.hypot(o[0]-r[0],o[1]-r[1])),h=u+Math.sqrt(Math.hypot(a[0]-o[0],a[1]-o[1])),f=h+Math.sqrt(Math.hypot(l[0]-a[0],l[1]-a[1]));for(let d=0;d<e;d++){let g=u+(h-u)*(d/e);i.push(db(r,o,a,l,c,u,h,f,g))}}return i}function mb(n){let e=n.length,t=new Float64Array(e+1);for(let c=0;c<e;c++){let u=n[c],h=n[(c+1)%e];t[c+1]=t[c]+Math.hypot(h[0]-u[0],h[1]-u[1])}let i=t[e],s=Math.max(1,Math.round(i/eb)),r=i/s,o=new Float64Array(s),a=new Float64Array(s),l=0;for(let c=0;c<s;c++){let u=c*r;for(;l<e-1&&t[l+1]<=u;)l++;let h=n[l],f=n[(l+1)%e],d=t[l+1]-t[l],g=d>0?(u-t[l])/d:0;o[c]=h[0]+(f[0]-h[0])*g,a[c]=h[1]+(f[1]-h[1])*g}return{xs:o,zs:a,count:s,step:r}}function Mm(n,e){let t=n.length,i=new Float64Array(t),s=2*e+1,r=0;for(let o=-e;o<=e;o++)r+=n[(o+t)%t];for(let o=0;o<t;o++)i[o]=r/s,r+=n[(o+1+e)%t]-n[((o-e)%t+t)%t];return i}function gb(n,e,t){let i=n.length,s=new Float64Array(i),r=new Float64Array(i);for(let a=0;a<i;a++){let l=(a-1+i)%i,c=(a+1)%i,u=n[c]-n[l],h=e[c]-e[l],f=Math.hypot(u,h)||1;s[a]=u/f,r[a]=h/f}let o=new Float64Array(i);for(let a=0;a<i;a++){let l=(a-1+i)%i,c=(a+1)%i,u=(s[c]-s[l])/(2*t),h=(r[c]-r[l])/(2*t);o[a]=s[a]*h-r[a]*u}return o}function xb(n,e){let t=n.length;for(let i=0;i<50;i++){let s=!1;for(let r=2*t-1;r>=0;r--){let o=r%t,a=(o+1)%t,l=Math.sqrt(n[a]*n[a]+2*ab*e);n[o]>l+1e-9&&(n[o]=l,s=!0)}for(let r=0;r<2*t;r++){let o=r%t,a=(o+1)%t,l=Math.sqrt(n[o]*n[o]+2*lb*e);n[a]>l+1e-9&&(n[a]=l,s=!0)}if(!s)break}}function bm(n){let e=n.length,t=-1;for(let r=0;r<e;r++)if(n[r]!==n[(r-1+e)%e]){t=r;break}if(t<0)return n[0]!==0?[{start:0,len:e,key:n[0]}]:[];let i=[],s=null;for(let r=0;r<e;r++){let o=(t+r)%e,a=n[o];s&&a===s.key?s.len++:(s&&s.key!==0&&i.push(s),s={start:o,len:1,key:a})}return s&&s.key!==0&&i.push(s),i}function Tm(n,e){let t=n.length,i=0;for(let s=0;s<t;s++){let r=n[s].vmax,o=n[(s+1)%t].vmax;i+=e/Math.max(1,.5*(r+o))}return i}function Zh(n,e){let t=n.length,i=0,s=0,r=new Int8Array(t),o=new Int8Array(t);for(let c=0;c<t;c++){let u=n[c].curv,h=Math.abs(u);h>i&&(i=h);let f=Math.abs(n[c].slope);f>s&&(s=f),r[c]=u>mm?1:u<-mm?-1:0,o[c]=h<$h?1:0}let a=0;for(let c of bm(r))c.len*e>=rb&&a++;let l={start:0,len:0};for(let c of bm(o))c.key===1&&c.len>l.len&&(l=c);return{minRadius:i>0?1/i:1/0,maxSlope:s,corners:a,longestStraight:l.len*e,longestStraightStart:l.start}}function vb(n,e){let t=n.length,i=Wh,s=(c,u)=>(c+4096)*8192+(u+4096),r=new Map,o=new Array(t);for(let c=0;c<t;c++){let u=Math.floor(n[c].x/i),h=Math.floor(n[c].z/i);o[c]=[u,h];let f=s(u,h),d=r.get(f);d||(d=[],r.set(f,d)),d.push(c)}let a=0,l=Wh*Wh;for(let c=0;c<t;c++){let[u,h]=o[c];for(let f=-1;f<=1;f++)for(let d=-1;d<=1;d++){let g=r.get(s(u+f,h+d));if(g)for(let x of g){if(x<=c)continue;let m=Math.abs(c-x);if(Math.min(m,t-m)*e<=sb)continue;let S=n[c].x-n[x].x,M=n[c].z-n[x].z;S*S+M*M<l&&a++}}}return a}function yb(n){let e=fb(n),t=pb(e,160),{xs:i,zs:s,count:r,step:o}=mb(t),a=[[8,12],[4,7],[2,4],[1,2]],l=[1,2,4,7].map((v,w)=>({k:v,a:n.range(a[w][0],a[w][1]),p:n.range(0,Vl)})),c=new Float64Array(r),u=new Float64Array(r),h=new Float64Array(r);for(let v=0;v<r;v++){let w=(v-1+r)%r,_=(v+1)%r,E=i[_]-i[w],R=s[_]-s[w];h[v]=Math.hypot(E,R)||1e-9,c[v]=E/h[v],u[v]=R/h[v]}let f=new Float64Array(r),d=new Float64Array(r),g=1;for(let v=0;v<40;v++){for(let _=0;_<r;_++){let E=0;for(let R of l)E+=R.a*g*Math.sin(Vl*R.k*_/r+R.p);f[_]=tb+E}let w=0;for(let _=0;_<r;_++){let E=(_-1+r)%r,R=(_+1)%r;d[_]=(f[R]-f[E])/h[_],Math.abs(d[_])>w&&(w=Math.abs(d[_]))}if(w<=ib)break;g*=.9}let x=new Float64Array(r),m=new Float64Array(r),p=new Float64Array(r);for(let v=0;v<r;v++){let w=(v-1+r)%r,_=(v+1)%r,E=i[_]-i[w],R=f[_]-f[w],F=s[_]-s[w],k=Math.hypot(E,R,F)||1e-9;x[v]=E/k,m[v]=R/k,p[v]=F/k}let S=gb(i,s,o),M=Mm(S,2),y=new Float64Array(r);for(let v=0;v<r;v++){let w=Yh((Math.abs(M[v])-.016666666666666666)/.023333333333333334,0,1);y[v]=Xh+(_m-Xh)*w}let T=Mm(y,10);for(let v=0;v<r;v++)T[v]=Yh(T[v],Xh,_m);let b=new Float64Array(r);for(let v=0;v<r;v++)b[v]=Math.min(ub,Math.sqrt(cb/Math.max(Math.abs(M[v]),1e-9)));return xb(b,o),{xs:i,ys:f,zs:s,count:r,step:o,fx:c,fz:u,tx:x,ty:m,tz:p,slope:d,curv:M,width:T,vmax:b}}function _b(n){let{xs:e,ys:t,zs:i,count:s,step:r,fx:o,fz:a,tx:l,ty:c,tz:u,slope:h,curv:f,width:d,vmax:g}=n,x=[];for(let M=0;M<s;M++)x.push({curv:f[M],slope:h[M],vmax:g[M],x:e[M],z:i[M]});let m=Zh(x,r),p=m.longestStraight>0?(m.longestStraightStart+Math.round(ob/r))%s:0,S=new Array(s);for(let M=0;M<s;M++){let y=(p+M)%s;S[M]={s:M*r,x:e[y],y:t[y],z:i[y],tx:l[y],ty:c[y],tz:u[y],rx:-a[y],rz:o[y],width:d[y],curv:f[y],vmax:g[y],slope:h[y]}}return S}function Mb(n,e,t){let i=n.length,s=new Int32Array(i+1);for(let m=0;m<i;m++)s[m+1]=s[m]+(Math.abs(n[m].curv)>=$h?1:0);let r=(m,p)=>s[p+1]-s[m]===0,o=Math.ceil(Gl/e),a=Math.floor((i*e-Gl)/e),l=Math.ceil(Sm/e),c=[],u=[],h=(m,p)=>c.every(([S,M])=>p<S||m>M),f=(m,p,S,M)=>{for(let y=0;y<400;y++){let T=Math.round(t.range(m,p)/e),b=Math.ceil(S/e),v=T+b;if(a-v<o)return null;let w=t.int(o,a-v),_=w+T;if(M&&!r(w,_+b))continue;let E=w-l,R=_+b+l;if(!(E<0||R>i-1||!h(E,R)))return c.push([E,R]),{a:w,b:_}}return null},d=t.int(2,3);for(let m=0;m<d;m++){let p=f(12,16,qh,!0);p&&u.push({type:"ramp",s0:p.a*e,s1:p.b*e,height:t.range(1.2,2.2)})}let g=t.int(2,3);for(let m=0;m<g;m++){let p=f(10,10,0,!1);p&&u.push({type:"boost",s0:p.a*e,s1:p.b*e})}let x=t.int(1,2);for(let m=0;m<x;m++){let p=f(60,140,0,!1);p&&u.push({type:"tunnel",s0:p.a*e,s1:p.b*e})}return u.sort((m,p)=>m.s0-p.s0),u}function bb(n,e,t){let i=yb(n),s=_b(i),{count:r,step:o}=i,a=r*o,l=Mb(s,o,n),c=Zh(s,o),u=1/0,h=-1/0,f=1/0,d=-1/0;for(let g of s)g.x<u&&(u=g.x),g.x>h&&(h=g.x),g.z<f&&(f=g.z),g.z>d&&(d=g.z);return{seed:e,attempts:t,length:a,step:o,count:r,pts:s,features:l,bounds:{minX:u,maxX:h,minZ:f,maxZ:d},stats:{minRadius:c.minRadius,maxSlope:c.maxSlope,lapTimeEstimate:Tm(s,o),corners:c.corners}}}function Sb(n){let e=[],{pts:t,count:i,step:s,length:r}=n;if(!Array.isArray(t)||t.length!==i||!(i>0)||!(s>0))return{ok:!1,reasons:["structure invalide"]};r>=um&&r<=hm||e.push(`longueur ${r.toFixed(0)} m hors [${um}, ${hm}]`),Math.abs(i*s-r)>1e-6&&e.push("count * step != length");let o=1/0,a=-1/0;for(let p of t)p.y<o&&(o=p.y),p.y>a&&(a=p.y);(o<fm||a>dm)&&e.push(`altitude ${o.toFixed(1)}..${a.toFixed(1)} hors [${fm}, ${dm}]`);let l=Zh(t,s);l.minRadius>=pm||e.push(`rayon min ${l.minRadius.toFixed(1)} m < ${pm}`),l.maxSlope>nb&&e.push(`pente max ${(l.maxSlope*100).toFixed(1)} % > 12 %`),l.corners<gm&&e.push(`${l.corners} virages < ${gm}`),l.longestStraight<xm&&e.push(`ligne droite max ${l.longestStraight.toFixed(0)} m < ${xm}`);let c=vb(t,s);c>0&&e.push(`${c} paires d'\xE9chantillons trop proches (croisement ou rapprochement)`);let u=Tm(t,s);u>=vm&&u<=ym||e.push(`temps au tour ${u.toFixed(1)} s hors [${vm}, ${ym}]`);let h=n.features||[],f=h.filter(p=>p.type==="ramp").length,d=h.filter(p=>p.type==="boost").length,g=h.filter(p=>p.type==="tunnel").length;f<2&&e.push(`${f} tremplin(s) < 2`),d<2&&e.push(`${d} boost(s) < 2`),g<1&&e.push("aucun tunnel");let x=p=>Math.round((p%r+r)%r/s)%i;for(let p of h)if((p.s0<Gl||p.s1>r-Gl)&&e.push(`feature ${p.type} trop proche du d\xE9part`),p.type==="ramp"){let S=p.s1-p.s0;(S<11.5||S>16.5)&&e.push(`tremplin de ${S.toFixed(1)} m hors 12..16`),p.height>=1.2&&p.height<=2.2||e.push("hauteur de tremplin hors 1.2..2.2");let M=x(p.s0),y=x(p.s1+qh),T=!0;for(let b=M;b!==(y+1)%i;b=(b+1)%i)if(Math.abs(t[b].curv)>=$h){T=!1;break}T||e.push("tremplin non situ\xE9 sur une ligne droite avec r\xE9ception")}let m=h.slice().sort((p,S)=>p.s0-S.s0);for(let p=0;p+1<m.length;p++){let S=m[p],M=m[p+1],y=S.s1+(S.type==="ramp"?qh:0);M.s0<y+Sm-1e-6&&e.push(`features ${S.type} et ${M.type} se chevauchent`)}return{ok:e.length===0,reasons:e}}function Em(n,e={}){let t=e.maxAttempts??hb,i=kn(n),s=null,r=1/0;for(let o=0;o<t;o++){let a=i.fork("try"+o),l=bb(a,n,o+1),c=Sb(l);if(c.ok)return l;c.reasons.length<r&&(r=c.reasons.length,s=l)}return s.attempts=t,s}function Kh(n,e){let t=n.length;if(n.open)return e<0?0:Math.min(e,(n.count-1.001)*n.step);let i=e%t;return i<0&&(i+=t),i>=t&&(i-=t),i}var Tb=(n,e)=>{let t=Math.hypot(n,e)||1;return[n/t,e/t]};function Qi(n,e,t={}){let i=n.count,s=n.step,r=Kh(n,e),o=r/s,a=Math.floor(o),l=a%i,c=(l+1)%i,u=o-a,h=n.pts[l],f=n.pts[c],d=(y,T)=>y+(T-y)*u,g=d(h.tx,f.tx),x=d(h.ty,f.ty),m=d(h.tz,f.tz),p=Math.hypot(g,x,m)||1,[S,M]=Tb(d(h.rx,f.rx),d(h.rz,f.rz));if(t.s=r,t.x=d(h.x,f.x),t.y=d(h.y,f.y),t.z=d(h.z,f.z),n.open&&e!==r){let y=e-r;t.x+=g/p*y,t.z+=m/p*y}return t.tx=g/p,t.ty=x/p,t.tz=m/p,t.rx=S,t.rz=M,t.width=d(h.width,f.width),t.curv=d(h.curv,f.curv),t.vmax=d(h.vmax,f.vmax),t.slope=d(h.slope,f.slope),t.i=l,t}var Ji={};function It(n,e,t,i={}){return Qi(n,e,Ji),i.x=Ji.x+t*Ji.rx,i.y=Ji.y,i.z=Ji.z+t*Ji.rz,i.heading=Math.atan2(Ji.tx,Ji.tz),i.slope=Ji.slope,i}function wm(n,e){let t=Kh(n,e);for(let i of n.features)if(i.type==="ramp"&&t>=i.s0&&t<i.s1)return i.height*(t-i.s0)/(i.s1-i.s0);return 0}function Is(n,e,t){let i=Kh(n,e);for(let s of n.features)if((t===void 0||s.type===t)&&i>=s.s0&&i<=s.s1)return s;return null}var Ab=1/30,Am=.5,Rm=.4,Rb=.6,aa=[.2,.36,.52,.68,.84],Cm=aa.length+1,Cb=.2,Pb=.1,Ib=.34,Lb=4,Db=4,Nb=.2,Ub=4.9,Fb=5.5,Ob=5,Bb=6,zb=1.8,kb=.03,Hb=1.6,Vb=.5,Gb=2,Wb=.785,Xb=4.7,qb=2.5,ho=.196,Yb=.098,$b=.5,Zb=.27,Kb=16,jb=11,Jb=.72,Qb=5,eS=.5,Pm=.35,tS=.42,nS=60,iS=.3,sS=5,rS=1.6,oS=3,aS=14,lS=.004,cS=1.2,uS=2,hS=.5,fS=22,Im=.25,dS=6,pS=1.8,Lm=1,mS=["s","d","yaw","vdir","speed","yRel","vy","lean","steer","pitch","compress","drift","boostT","wheelSpin","stun","rpm","wheelie","_g","_vyG","_shiftT","_t","_pitchF","_dive","_turnF","_springA","_springP","_wallT","_apex"],$t=(n,e,t)=>n<e?e:n>t?t:n,Pi=(n,e=0)=>Number.isFinite(n)?n:e,gS=(n,e)=>{let t=n%e;return t<0?t+e:t},xS=(n,e,t)=>n<e?Math.min(e,n+t):Math.max(e,n-t);function Dm({s:n=0,d:e=0}={}){return{s:n,d:e,yaw:0,vdir:0,speed:0,yRel:0,vy:0,airborne:!1,lean:0,steer:0,pitch:0,compress:0,drift:0,boostT:0,boostCharges:ar.boostCharges,onRoad:!0,wheelSpin:0,stun:0,gear:1,rpm:0,wheelie:0,events:[],_init:!1,_g:0,_vyG:0,_prevBoost:!1,_padKey:null,_shiftT:0,_wallHit:!1,_t:0,_turnF:0,_pitchF:0,_dive:0,_springA:0,_springP:0,_wallT:0,_apex:0}}function Nm(n,e,t,i,s,r,o){let a=n.events,l=e||{},c=s||{},u=!!l.boost&&!n._prevBoost;if(n._prevBoost=!!l.boost,r=Number.isFinite(r)&&r>0?Math.min(r,Ab):0,n._init||(n._init=!0,n.boostCharges=i.boostCharges),r===0)return n;let h=t.length,f=i.maxSpeed,d=$t(Pi(l.throttle),0,1),g=$t(Pi(l.brake),0,1),x=$t(Pi(l.steer),-1,1),m=n.stun>0;m&&(n.stun=Math.max(0,n.stun-r),d=0,g=0,x=0);let p=ke=>t.open?ke:gS(ke,h),S=p(n.s),M=Qi(t,S),y=!n.airborne;if(u&&!m&&n.boostCharges>0&&n.boostT<=0&&(n.boostCharges-=1,n.boostT=i.boostDuration,a.push("boost")),y){let ke=Is(t,S,"boost");if(ke){let Ee=Math.floor(n.s/h)+":"+ke.s0;n._padKey!==Ee&&(n._padKey=Ee,n.boostT=Math.max(n.boostT,cS),a.push("pad"))}}g>.5&&n.boostT>0&&(n.boostT=0);let T=n.boostT>0;T&&(d=1);let b=y&&!m&&Math.abs(x)>.3&&n.speed>uS&&(!!l.drift||g>.3),v=n.speed,w=v/f;n._shiftT>0?n._shiftT-=r:n.gear<Cm&&w>aa[n.gear-1]&&!(g>0&&v>3)?(n.gear+=1,n._shiftT=Cb):n.gear>1&&v<aa[n.gear-2]*f-2&&(n.gear-=1,n._shiftT=Pb);let _=n.gear>1?aa[n.gear-2]:0,E=n.gear<Cm?aa[n.gear-1]:1;n.rpm=$t(.35+.65*((w-_)/(E-_)),.1,1.05);let R=y&&Math.abs(n.d)>M.width*.5,F=Rb*f,k=R?F:f*(T?i.boostPower:1),L=Lb/(f*f),O=0;if(y){if(R&&v>F&&(O-=2*i.offroadDrag*(v-F)),d>0&&n._shiftT<=0&&v<k){let ke=Ib*f,Ee=.8+.2*Math.sin(Math.PI*$t(n.rpm,0,1)),Ue=i.accel*d*Ee*Math.min(1,ke/Math.max(v,1));T&&(Ue*=Gb),O+=Math.min(Ue,i.accel*1.15*(T?1.3:1))}g>0&&(O-=i.brake*g*(b?.35:1)),O-=v*(.2-.03*(n.gear-1))*(1-d),O-=Nb,O-=Ub*M.slope,O-=L*v*v}else O-=L*Db*v*v;n.speed=Math.max(0,v+O*r),y&&n.speed>k&&!R&&(n.speed=Math.max(k,n.speed-10*r));let D=$t(n.speed/f,0,1),Y=1+(i.wetGrip-1)*vS(c),V=$t(i.grip*Pi(c.grip,1)*Y,.05,1.5),J=n.speed<.6?0:x,de=Math.abs(J)>Math.abs(n.steer)||J*n.steer<0?Fb:Ob*$t(Math.abs(O)/6,1,2.5);n.steer=xS(n.steer,J,de*r);let ve=n.yaw-n.vdir,ce=n.speed*Math.sin(ve),ie=Math.min(Hb,1+kb*Math.abs(ce));b&&(ie=i.driftBonus),T&&y&&(ie*=Vb);let Q=1-(1-i.steerHighSpeed)*D,ee=Math.min(1,n.speed/6),I=y?1:i.airControl,B=n.steer*i.steerRate*Q*ie*ee*I*(.6+.4*Math.min(1,V)),X=Math.min(n.speed/sS,nS*Math.min(1.2,V)*(b?1.5:1)/Math.max(n.speed,1)),$=$t(B,-X,X);y&&Math.abs(x)<=.15&&(n.yaw*=Math.exp(-rS*r)),o&&i.steerNoise>0&&!m&&y&&(n.yaw+=i.steerNoise*d*(o.next()*2-1)*r);let pe=Math.max(.3,1-n.d*M.curv),we=n.speed*Math.cos(n.vdir)/pe*r,Ae=n.speed*Math.sin(n.vdir)*r,G=M.curv*we,Ve=n.vdir,ze=G*(y?1-iS:1);if(n.yaw+=$*r-ze,n.vdir-=ze,y){let ke=(b?zb:Bb)*V,Ee=1-Math.exp(-ke*r);n.vdir+=(n.yaw-n.vdir)*Ee,n.speed*=1-(1-Math.cos(ve))*Ee}else{let ke=3*$t(i.airStability,0,2);n.yaw+=(n.vdir-n.yaw)*(1-Math.exp(-ke*r)),i.airStability<1&&(n.yaw+=(n.yaw>=n.vdir?1:-1)*(1-i.airStability)*.6*r)}n.vdir=$t(Pi(n.vdir),-Am,Am),n.yaw=$t(Pi(n.yaw),n.vdir-Rm,n.vdir+Rm),n._t+=r,Ae+=Pi(c.wind)*(1.2*Math.sin(n._t*.37)+.4*Math.sin(n._t*1.13+1))*r*(y?1:.5),n.s+=we,n.d+=Ae;let Be=y?$t((Math.abs(n.yaw-n.vdir)-.04)/.22,0,1)*ee:0;n.drift+=(Be-n.drift)*Math.min(1,8*r);let Ie=Qi(t,p(n.s));n.onRoad=Math.abs(n.d)<=Ie.width*.5;let qe=Ie.width*.5+6-.4;if(Math.abs(n.d)>=qe-.02){let ke=n.d>=0?1:-1,Ee=n.vdir*ke>0,Ue=Ee?Math.abs(Math.sin(n.vdir)):0;if(n.d=ke*qe,Ee&&(n.vdir=-ke*.04,n.yaw=n.yaw*.4-ke*.04),n._wallHit)n.speed*=Math.max(0,1-.8*r);else{let se=n.boostT>0,be=o?o.next():1;se&&n.speed>dS||Ue>hS&&n.speed>fS&&be<Im||n.airborne&&be<Im?(n.speed*=.3,n.stun=pS,a.push("crash")):n.speed*=1-$t(i.wallLoss*1.3*(.5+Ue),0,.9),a.push("wall")}n.boostT=0,n._wallT=Pm,n._wallHit=!0}else n._wallHit=!1;n.stun>0&&y&&(n.speed*=Math.exp(-2.2*r)),S=p(n.s);let Fe=Pi(wm(t,S)),N=(Fe-n._g)/r;if(n.airborne||(Fe<n.yRel-.05?(n.airborne=!0,n._apex=n.yRel-Fe,n.vy=n._vyG,n.vy>oS&&a.push("jump")):(n.yRel=Fe,n.vy=$t(N,-80,80),n._vyG=n.vy)),n.airborne&&(n.vy-=26*r,n.yRel+=n.vy*r,n._apex=Math.max(n._apex,n.yRel-Fe),n.vy<=0&&n.yRel<=Fe)){let ke=-n.vy,Ee=Math.abs(n.yaw-n.vdir),Ue=ke>aS/Math.max(.3,i.landing)||Ee>.35;n.airborne=!1,n.yRel=Fe,n.vy=0,n._vyG=0,n._springA=$t(n._springA+.35*n._apex+.03*ke,0,1),n._springP=Math.PI/2;let se=lS*ke+(Ue?.08:0);n.speed*=1-$t(se/Math.max(.2,i.landing),0,.45),a.push(Ue?"hardLand":"land")}n._g=Fe,y=!n.airborne,n.speed=$t(Pi(n.speed),0,1.5*f),n._wallT=Math.max(0,n._wallT-r);let A=Math.max(0,1-n.speed/4,n._wallT/Pm),j=y?(G+(n.vdir-Ve))/r:0;n._turnF+=(j-n._turnF)*Math.min(1,6*r);let xe=n.speed*n._turnF,_e=Math.sign(xe)*Math.max(0,Math.abs(xe)-Qb),he=n.steer*tS*Math.min(1,n.speed/10),Ce=$t((1-A)*(Math.atan(_e/jb)*Jb+eS*(n.yaw-n.vdir)+he),-Lm,Lm);n.stun>0&&(Ce=(n.lean>=0?1:-1)*1.35),n.lean+=(Ce-n.lean)*Math.min(1,9*r),n._dive=g>.1&&y?Math.min(ho,n._dive+ho*r):Math.max(0,n._dive-.25*r);let Le=$t(O*Yb,-ho,ho)-n._dive;n._pitchF+=(Le-n._pitchF)*Math.min(1,r/$b);let Ne=$t(Le-n._pitchF,-ho,ho);n.wheelie=n.boostT>0&&y?Math.min(Math.PI/2,n.wheelie+Xb*r):Math.max(0,n.wheelie-qb*r),Ne+=Math.sin(n.wheelie)*Wb,y||(Ne=Math.atan2(n.vy,Math.max(8,n.speed))),n.pitch=Ne,n._springA*=Math.exp(-r/Zb),n._springP+=Kb*r,n.compress=Math.sin(n._springP)*n._springA,n.wheelSpin+=n.speed/.32*r,n.boostT=Math.max(0,n.boostT-r);for(let ke of mS)Number.isFinite(n[ke])||(n[ke]=0);return n.speed<0&&(n.speed=0),n}function vS(n){return $t(Pi(n.wet),0,1)}var yS=8,_S=25,MS=150,bS=3,SS=35,TS=2,ES=14,wS=30,AS=12,RS=2,CS={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},fn=(n,e,t)=>n<e?e:n>t?t:n,Wl=(n,e,t)=>n+(e-n)*t,PS=(n,e)=>n-e*Math.round(n/e);function IS(n,e){let t=n.length,i=n.features,s=null,r=1/0;for(let o=0;o<i.length;o++){let a=i[o];if(a.type!=="ramp")continue;let l=((a.s0-e)%t+t)%t;l<r&&(r=l,s=a)}return s?{f:s,dist:r}:null}function LS(n,e){for(let t=0;t<=MS;t+=_S)if(Math.abs(Qi(n,e+t).curv)>.004)return!1;return!0}function Xl(n,e){let t=n||CS,i={persona:t,rng:e,skill:fn(t.skill??.5,0,1),aggression:fn(t.aggression??.5,0,1),jumpSkill:fn(t.jumpSkill??.5,0,1),lineSkill:fn(t.lineSkill??.5,0,1),playerGap:0,dGoal:0,wander:0,wanderGoal:0,wanderT:0,mistakeT:0,mistakeSide:1,nextMistake:0,boostLock:0,input:{throttle:0,brake:0,steer:0,boost:!1,drift:!1}};return i.nextMistake=e.range(8,20)+(1-i.skill)*15,i}function ql(n,e,t,i,s,r){let o=n.input,a=t.length,l=n.rng,c=n.aggression,u=n.skill,h=n.jumpSkill,f=e.speed,d=e.s,g=Qi(t,d),x=Math.max(.8,g.width*.5-1.2);n.wanderT-=r,n.wanderT<=0&&(n.wanderT=l.range(.9,1.8),n.wanderGoal=l.range(-1,1)*(1-n.lineSkill)*.5*x),n.wander+=(n.wanderGoal-n.wander)*Math.min(1,r*1.5),n.nextMistake-=r,n.mistakeT-=r,n.mistakeT<=0&&n.nextMistake<=0&&(n.mistakeT=l.range(.5,1.2),n.mistakeSide=l.sign(),n.nextMistake=l.range(8,20)+(1-u)*15);let m=n.mistakeT>0;n.boostLock-=r;let p=Wl(1.4,.6,c),S=Math.max(20,f*p),M=Math.max(S,fn(f*1.6+20,40,110)),y=1/0,T=0,b=0,v=0;for(let ee=0;ee<=M;ee+=yS){let I=ee===0?g:Qi(t,d+ee);if(ee<=S&&I.vmax<y&&(y=I.vmax),ee>=8){let B=Math.abs(I.curv);B>T&&(T=B,b=Math.sign(I.curv),v=ee)}}let w=fn(T/.02,0,1),_=0;if(b!==0&&w>0){let ee=fn((v-10)/30,0,1),I=Wl(1,-.8,ee);_=b*x*n.lineSkill*w*I}_+=n.wander,m&&(_+=n.mistakeSide*1.2);let E=IS(t,d),R=E?E.dist:1/0,F=Is(t,d,"ramp")!==null,k=R<wS;(F||k)&&h>.5&&(_*=1-fn((h-.4)/.6,0,1));let L=!F&&R>=bS&&R<=SS&&h<.5;for(let ee=0;ee<s.length;ee++){let I=s[ee];if(I===e)continue;let B=PS(I.s-d,a);if(B<=0||B>=AS)continue;let X=I.d-e.d;if(!(Math.abs(X)>=RS)){if(c>.55){let $=X!==0?Math.sign(X):e.d<0?1:-1;_+=$*(.6+.8*c)}else{let $=X!==0?-Math.sign(X):e.d<0?1:-1;Math.abs(e.d+$*2)>x&&($=-$),_+=$*2*(1-c)}break}}let O=n.obstacles;if(O){let ee=35+f*1.7,I=null,B=1/0;for(let X=0;X<O.length;X++){let $=O[X],pe=$.s-d;pe>-$.type.len&&pe<ee&&pe<B&&Math.abs($.d-_)<$.type.w/2+1.5&&$.speed<f-3&&(I=$,B=pe)}if(I){let X=I.type.w/2+2,$=[I.d-X,I.d+X].filter(Ae=>Math.abs(Ae)<=x),pe=$.filter(Ae=>!O.some(G=>G!==I&&Math.abs(G.s-I.s)<30&&Math.abs(G.d-Ae)<G.type.w/2+1.2)),we=pe.length?pe:$;we.length&&(_=we.reduce((Ae,G)=>Math.abs(G-e.d)<Math.abs(Ae-e.d)?G:Ae))}}_=fn(_,-x,x),n.dGoal+=(_-n.dGoal)*Math.min(1,r*(O?4.5:2.5));let D=fn(n.dGoal,-x,x),Y;if(e.airborne)Y=fn(-e.yaw*2,-.3,.3);else{let ee=D-e.d,I=fn(ee*.12,-.25,.25),B=Qi(t,d+fn(f*.25,4,20)).curv,X=i.steerRate*Wl(1,i.steerHighSpeed,fn(f/i.maxSpeed,0,1));Y=(B*f+(I-e.yaw)*3)/X}Y=fn(Y,-1,1),Number.isFinite(Y)||(Y=0);let V=fn(-n.playerGap/150,-1,1)*.06,J=Wl(.86,1,u)+c*.04;m&&(J*=.85);let oe=y*J*(1+V),de=i.maxSpeed,ve=!1;if(!e.airborne&&e.boostCharges>0&&e.boostT<=0&&n.boostLock<=0){if(h>.6&&R>=TS&&R<=ES)ve=!0;else if(f>20&&LS(t,d)){let ee=n.playerGap<-20,I=.25+.5*c+(ee?.3:0);ve=l.chance(I)}n.boostLock=ve?1:.4}o.boost=ve;let ce=T<.003;if(e.boostT>0){let ee=de*i.boostPower;oe=ce?ee*.98:Math.min(oe,ee)}else oe=Math.min(oe,de);let ie=0,Q=0;if(e.airborne)ie=1;else{let ee=oe-f;ee>-1.5?ie=L?0:fn(.5+ee*.25,0,1):Q=fn((-ee-1.5)*.15,0,1)}return o.throttle=ie,o.brake=Q,o.steer=Y,o.drift=!e.airborne&&c>.75&&T>.025&&f>40&&v<20,o}var DS=7,NS=3,US=.3,FS=3,OS=25,BS=1.5,zS=1.2,kS=1.8,Um=.9,HS={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},Yl=(n,e,t)=>n<e?e:n>t?t:n,jh=(n,e)=>n-e*Math.round(n/e);function Jh(){return{throttle:0,brake:0,steer:0,boost:!1,drift:!1}}function Fm({track:n,laps:e,env:t,rng:i,riders:s,final:r=!0,carry:o=null}){let a=n.length,l=n.raceEnd??a,c=e*l,h=s.filter(T=>!T.isPlayer).concat(s.filter(T=>T.isPlayer)).map((T,b)=>{let v=Math.floor(b/2),w=b%2,_=-DS*(v+1),E=w===0?-2.5:2.5,R=o?.states.get(T.id),F=R||Dm({s:_,d:E});return{id:T.id,name:T.name,color:T.color,accent:T.accent,isPlayer:!!T.isPlayer,stats:T.stats,persona:T.persona||null,state:F,remote:!!T.remote,ai:T.isPlayer||T.remote?null:Xl(T.persona||HS,i.fork("ai:"+T.id)),rng:i.fork("rider:"+T.id),others:null,input:Jh(),coast:Jh(),frameEvents:[],startS:R?R.s:_,lap:1,lapTimes:[],bestLap:null,lapStartT:0,finished:!1,finishTime:null,position:b+1}});for(let T of h)T.others=h.filter(b=>b!==T).map(b=>b.state);let f=h.find(T=>T.isPlayer)||null,d=h.slice(),g=h.length,x=new Uint8Array(g*g);function m(T,b,v,w,_){if(v===b)return;let E=Math.floor(b/l),R=Math.min(Math.floor(v/l),e);for(let F=Math.max(E+1,1);F<=R;F++){let k=Yl((F*l-b)/(v-b),0,1),L=w+k*_,O=L-T.lapStartT;T.lapTimes.push(O),(T.bestLap===null||O<T.bestLap)&&(T.bestLap=O),T.lapStartT=L}if(r&&v>=c){let F=Yl((c-b)/(v-b),0,1);T.finished=!0,T.finishTime=w+F*_}}function p(T){let b=T.state,v=T.coast;return v.throttle=US,v.brake=0,v.steer=Yl(-b.yaw*2-b.d*.05,-.5,.5),v.boost=!1,v.drift=!1,v}function S(T,b){let v=T.state;for(let w=0;w<g;w++){let _=h[w];if(_===T||_.hidden)continue;let E=jh(_.state.s-v.s,a);if(E>FS&&E<OS&&Math.abs(_.state.d-v.d)<BS){v.speed=Math.min(v.speed+zS*T.stats.slipstream*b,T.stats.maxSpeed*1.05);return}}}function M(){for(let T=0;T<g;T++)for(let b=T+1;b<g;b++){let v=h[T],w=h[b];if(v.remote&&w.remote||v.hidden||w.hidden)continue;let _=!v.remote,E=!w.remote,R=jh(w.state.s-v.state.s,a),F=w.state.d-v.state.d,k=T*g+b;if(Math.abs(R)<kS&&Math.abs(F)<Um){let L=F!==0?Math.sign(F):i.sign(),O=((Um-Math.abs(F))/2+.05)*(_&&E?1:2);if(_&&(v.state.d-=L*O),E&&(w.state.d+=L*O),!x[k]){x[k]=1;let D=(v.state.speed+w.state.speed)/2;_&&(v.state.speed+=(D-v.state.speed)*.2),E&&(w.state.speed+=(D-w.state.speed)*.2);let Y=R>=0?v:w;Y.remote||(Y.state.speed*=.96),(!_||!E)&&(_?v:w).state.events?.push("hit")}}else x[k]=0}}let y={phase:o?"racing":"countdown",countdown:o?0:NS,time:o?o.time:0,final:r,laps:e,track:n,riders:h,player:f,update(T,b){if(y.phase==="countdown"){y.countdown=Math.max(0,y.countdown-T),y.countdown<=0&&(y.phase="racing");return}let v=y.time;y.time+=T;for(let w=0;w<g;w++){let _=h[w];_.remote||(_.finished?_.input=p(_):_.isPlayer?_.input=b||Jh():(f&&(_.ai.playerGap=jh(_.state.s-f.state.s,a)),_.input=ql(_.ai,_.state,n,_.stats,_.others,T)))}for(let w=0;w<g;w++){let _=h[w];if(_.remote){_.lap=1;continue}let E=_.state,R=_.finished,F=E.s;if(Nm(E,_.input,n,_.stats,t,T,_.rng),R||(m(_,F,E.s,v,T),_.finished||S(_,T)),_.lap=_.finished?e:Yl(Math.floor(E.s/l)+1,1,e),!_.isPlayer){_.frameEvents.length=0;for(let k=0;k<E.events.length;k++)_.frameEvents.push(E.events[k]);E.events.length=0}}M(),d.sort((w,_)=>w.finished!==_.finished?w.finished?-1:1:w.finished?w.finishTime-_.finishTime:_.state.s-w.state.s);for(let w=0;w<g;w++)d[w].position=w+1;r?(f?f.finished:h.every(w=>w.finished))&&(y.phase="finished"):(f||d[0]).state.s>=l&&(y.phase="relay")},results(){let T=h.map(b=>{let v;if(b.finished)v=b.finishTime;else{let w=Math.max(0,b.state.s-b.startS),_=y.time>1?Math.max(5,w/y.time):40,E=Math.max(0,c-b.state.s);v=y.time+E/_}return{id:b.id,name:b.name,position:b.position,time:v,bestLap:b.bestLap,isPlayer:b.isPlayer}});return T.sort((b,v)=>b.position-v.position),T}};return y}var of={};$g(of,{PLAYER:()=>Ii,RIVALS:()=>Zl,UPGRADES:()=>lr,applyUpgrade:()=>Ql,computeStats:()=>Ls,createRun:()=>Kl,dailySeed:()=>ec,isRunOver:()=>la,loadMeta:()=>nf,offerUpgrades:()=>Jl,randomSeed:()=>GS,recordResult:()=>ef,runRiders:()=>jl,saveMeta:()=>sf,standings:()=>fo,updateMeta:()=>rf});var Om="polygon-rush-meta",VS=Object.keys(Ci).filter(n=>n!=="sicily"),Ii={id:"player",name:"Vous",color:14885934,accent:2312392},lr=[{id:"turbo",name:"Turbo instable",tagline:"Acc\xE9l\xE9ration brutale, pilotage nerveux.",pro:"Acc\xE9l\xE9ration \xD71,35 et vitesse de pointe \xD71,04.",con:"Direction bruit\xE9e (+0,35 rad/s) et braquage \xD70,9 \xE0 haute vitesse.",icon:"\u26A1",maxStacks:1,apply(n){n.accel*=1.35,n.maxSpeed*=1.04,n.steerNoise+=.35,n.steerHighSpeed*=.9}},{id:"rally",name:"Suspension rallye",tagline:"Les r\xE9ceptions passent mieux, la vitesse de pointe trinque.",pro:"R\xE9ception \xD71,8 et tra\xEEn\xE9e hors-piste \xD70,6.",con:"Vitesse de pointe \xD70,95.",icon:"\u{1F3D4}",maxStacks:2,apply(n){n.landing*=1.8,n.offroadDrag*=.6,n.maxSpeed*=.95}},{id:"aero",name:"A\xE9rodynamique",tagline:"Plus de vitesse, moins de tenue en l'air.",pro:"Vitesse de pointe \xD71,07.",con:"Stabilit\xE9 en saut \xD70,6 et contr\xF4le a\xE9rien \xD70,7.",icon:"\u{1F4A8}",maxStacks:2,apply(n){n.maxSpeed*=1.07,n.airStability*=.6,n.airControl*=.7}},{id:"rain",name:"Pneus pluie",tagline:"Accroche imbattable sous l'averse, sec moins mordant.",pro:"Adh\xE9rence mouill\xE9e \xD71,35 (\u2248 1,05).",con:"Adh\xE9rence s\xE8che \xD70,95.",icon:"\u{1F327}",maxStacks:1,apply(n){n.wetGrip*=1.35,n.grip*=.95}},{id:"nitro",name:"Nitro double",tagline:"Deux charges de plus, des boosts plus courts.",pro:"+2 charges de boost par course.",con:"Dur\xE9e de boost \xD70,75.",icon:"\u{1F680}",maxStacks:2,apply(n){n.boostCharges+=2,n.boostDuration*=.75}},{id:"brakes",name:"Freins c\xE9ramique",tagline:"Freinage mordant, direction plus vive, reprise plus lente.",pro:"Freinage \xD71,4 et braquage \xD71,08.",con:"Acc\xE9l\xE9ration \xD70,95.",icon:"\u{1F6D1}",maxStacks:2,apply(n){n.brake*=1.4,n.steerRate*=1.08,n.accel*=.95}},{id:"gyro",name:"Gyroscope",tagline:"Stabilisateur de vol, adh\xE9rence en retrait.",pro:"Contr\xF4le a\xE9rien \xD71,5 et stabilit\xE9 en l'air \xD71,25.",con:"Adh\xE9rence \xD70,9.",icon:"\u{1F300}",maxStacks:2,apply(n){n.airControl*=1.5,n.airStability*=1.25,n.grip*=.9}},{id:"slick",name:"Pneus slick",tagline:"Gomme tendre : accroche s\xE8che maximale, pluie interdite.",pro:"Adh\xE9rence s\xE8che \xD71,12.",con:"Adh\xE9rence mouill\xE9e \xD70,7 et braquage \xD70,95.",icon:"\u{1F3C1}",maxStacks:2,apply(n){n.grip*=1.12,n.wetGrip*=.7,n.steerRate*=.95}},{id:"carenage",name:"Car\xE9nage aspiration",tagline:"Profil fusel\xE9 : on file dans le sillage, on tourne moins vite.",pro:"Aspiration \xD71,6 dans le sillage des concurrents.",con:"Braquage \xD70,92.",icon:"\u{1F32C}",maxStacks:2,apply(n){n.slipstream*=1.6,n.steerRate*=.92}},{id:"blindage",name:"Blindage renforc\xE9",tagline:"Carrosserie en acier : les chocs co\xFBtent moins, la moto p\xE8se.",pro:"Perte de vitesse contre les glissi\xE8res \xD70,5.",con:"Acc\xE9l\xE9ration \xD70,92 et vitesse de pointe \xD70,97.",icon:"\u{1F6E1}",maxStacks:2,apply(n){n.wallLoss*=.5,n.accel*=.92,n.maxSpeed*=.97}}],Zl=[{id:"vortex",name:"Vortex Solenne",color:58879,accent:728366,skill:.8,aggression:.92,jumpSkill:.6,lineSkill:.5,style:"agressif",bio:"Freine tard, plonge dans les virages et ne l\xE2che jamais un pilote \xE0 la corde."},{id:"saltamonte",name:"Brigo Saltamonte",color:16766474,accent:1118481,skill:.76,aggression:.45,jumpSkill:.97,lineSkill:.5,style:"sauteur",bio:"Vole plus haut que tout le monde, atterrit quand il veut, parfois trop tard."},{id:"lumen",name:"Lumen Ardoise",color:8190976,accent:1714704,skill:.84,aggression:.15,jumpSkill:.55,lineSkill:.97,style:"trajectoire",bio:"Trace une ligne parfaite, ne prend jamais un bord et ne commet aucune faute."},{id:"aurelio",name:"Aurelio Temp\xEAte",color:16747520,accent:0,skill:.97,aggression:.7,jumpSkill:.85,lineSkill:.9,style:"r\xE9gulier",bio:"Le champion de la c\xF4te : rien \xE0 lui reprocher, et il le sait."},{id:"maree",name:"Ingrid Mar\xE9e",color:11544319,accent:16777215,skill:.88,aggression:.78,jumpSkill:.7,lineSkill:.6,style:"agressif",bio:"Pousse ses freins jusqu'\xE0 la limite et ressort des virages en coup de vent."},{id:"gaspard",name:"Gaspard Brume",color:1989631,accent:15790320,skill:.72,aggression:.35,jumpSkill:.4,lineSkill:.6,style:"r\xE9gulier",bio:"Discret, m\xE9tronome, il finit presque toujours dans les cinq premiers."},{id:"yuki",name:"Yuki Varan",color:50316,accent:8217,skill:.91,aggression:.5,jumpSkill:.8,lineSkill:.8,style:"r\xE9gulier",bio:"Rapide sur tous les terrains, sans point faible visible, et toujours souriant."}],Bm=[{name:"Coastal Rush",subtitle:"Route m\xE9diterran\xE9enne, grandes courbes et falaises"},{name:"Cliff Edge",subtitle:"Corniches \xE9troites et vent de face"},{name:"Harbor Drift",subtitle:"Quais glissants, embruns et virages en \xE9pingle"},{name:"Lighthouse Pass",subtitle:"Tunnels, ressauts et brouillard de phare"},{name:"The Final Run",subtitle:"Le champion vous attend"}],Qh=Bm.length;function zm(n){return lr.find(e=>e.id===n)||null}function km(n,e){let t=0;for(let i of n.upgrades)i===e&&t++;return t}function Kl(n){let e=String(n),t=kn(oa(e+"|run")),i=[];for(let o=0;o<Qh;o++)if(o===0)i.push("sunset");else if(o===Qh-1)i.push("rain");else{let a=i[o-1],l=VS.filter(c=>c!==a&&!(o===Qh-2&&c==="rain"));i.push(t.pick(l))}let s=Bm.map((o,a)=>({name:o.name,subtitle:o.subtitle,trackSeed:`${e}-${a}`,weather:i[a],laps:a<2?2:3})),r={[Ii.id]:0};for(let o of Zl)r[o.id]=0;return{seed:e,stageIndex:0,stages:s,upgrades:[],points:r,history:[]}}function jl(n){let e=Math.max(0,n.stageIndex),t=[{id:Ii.id,name:Ii.name,color:Ii.color,accent:Ii.accent,isPlayer:!0,persona:null,stats:Ls(n)}];for(let i of Zl){let s=Math.min(.99,Math.round((i.skill+.01*e)*100)/100);t.push({id:i.id,name:i.name,color:i.color,accent:i.accent,isPlayer:!1,persona:{...i,skill:s},stats:{...ar}})}return t}function Ls(n){let e={...ar};for(let t of n.upgrades){let i=zm(t);i&&i.apply(e)}return e}function Jl(n){let e=kn(oa(`${n.seed}|offer|${n.stageIndex}`)),t=lr.filter(i=>km(n,i.id)<i.maxStacks);return e.shuffle(t).slice(0,3)}function Ql(n,e){let t=zm(e);return!t||km(n,e)>=t.maxStacks?!1:(n.upgrades.push(e),!0)}function Hm(n){if(n===Ii.id)return Ii.name;let e=Zl.find(t=>t.id===n);return e?e.name:n}function ef(n,e){if(la(n))return n;let t=e.slice().sort((r,o)=>r.position-o.position),i=n.stages[n.stageIndex],s={stage:n.stageIndex,name:i.name,results:[]};return t.forEach((r,o)=>{let a=r.position??o+1,l=Hl[a-1]??0;n.points[r.id]=(n.points[r.id]||0)+l,s.results.push({id:r.id,name:r.name||n.names?.[r.id]||Hm(r.id),position:a,points:l,isPlayer:r.id===Ii.id})}),n.history.push(s),n.stageIndex+=1,n}function fo(n){let e={};for(let t of n.history)for(let i of t.results)e[i.id]=Math.min(e[i.id]??1/0,i.position);return Object.keys(n.points).map(t=>({id:t,name:n.names?.[t]||Hm(t),points:n.points[t],isPlayer:t===Ii.id,_best:e[t]??1/0})).sort((t,i)=>i.points-t.points||t._best-i._best).map(({_best:t,...i})=>i)}function la(n){return n.stageIndex>=n.stages.length}function ec(n=new Date){let e=n instanceof Date?n:new Date(n),t=e.getUTCFullYear(),i=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`DAILY-${t}-${i}-${s}`}function GS(){let n="ABCDEFGHJKMNPQRSTUVWXYZ23456789",e="RUSH-";for(let t=0;t<4;t++)e+=n[Math.floor(Math.random()*n.length)];return e}function $l(){return{runs:0,wins:0,bestPoints:0,unlocked:[]}}function tf(n){let e=$l();if(!n||typeof n!="object")return e;let t=i=>Number.isFinite(i)&&i>=0?Math.floor(i):0;return{runs:t(n.runs),wins:t(n.wins),bestPoints:t(n.bestPoints),unlocked:Array.isArray(n.unlocked)?n.unlocked.filter(i=>typeof i=="string"):e.unlocked}}function Vm(){try{return globalThis.localStorage??null}catch{return null}}function nf(){try{let n=Vm();if(!n)return $l();let e=n.getItem(Om);return e?tf(JSON.parse(e)):$l()}catch{return $l()}}function sf(n){try{let e=Vm();return e?(e.setItem(Om,JSON.stringify(tf(n))),!0):!1}catch{return!1}}function rf(n,e){let t=tf(n),i=fo(e),s=i.find(o=>o.isPlayer),r=i.length>0&&i[0].isPlayer;return{runs:t.runs+1,wins:t.wins+(r?1:0),bestPoints:Math.max(t.bestPoints,s?s.points:0),unlocked:t.unlocked.slice()}}var oi=.9,Gm=.3,tc=8,af=3,Wm=6+.8,ca=3,WS=4.5,XS=.015,qS=.004,Xm=60,yt={asphaltA:[.27,.225,.2],asphaltB:[.31,.26,.23],rampDark:[.13,.13,.15],yellow:[1,.82,.05],black:[.04,.04,.05],white:[.95,.95,.92],red:[.86,.14,.12],checkW:[.95,.95,.95],checkB:[.04,.04,.05],railA:[.93,.92,.88],railB:[.8,.2,.12],neonCyan:[.2,1,1],neonMag:[1,.15,.9],sand:[.3,.48,.15],motorwayA:[.2,.2,.21],motorwayB:[.22,.22,.23],lane:[.34,.33,.31],gravel:[.24,.4,.13],tunOchreA:[.5,.39,.2],tunOchreB:[.44,.34,.17],sodium:[1,.72,.28],tunA:[.16,.18,.24],tunB:[.21,.23,.3],concrete:[.36,.38,.42],concreteB:[.3,.32,.36],post:[.12,.13,.16],beam:[.1,.1,.12],mast:[.17,.18,.22]},nc=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],qm=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],YS=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],wn=(n,e,t)=>n+(e-n)*t,Hn=class{constructor(){this.pos=[],this.col=[],this.uv=[],this.idx=[],this.n=0}quad(e,t,i,s){let[r,o,a,l]=e,c=qm(nc(o,r),nc(a,r)),u=qm(nc(a,r),nc(l,r)),h=[c[0]+u[0],c[1]+u[1],c[2]+u[2]];if(!(Math.hypot(h[0],h[1],h[2])>1e-12))return;let f=YS(h,i)<0,d=this.n;for(let g=0;g<4;g++){let x=e[g];this.pos.push(x[0],x[1],x[2]),this.col.push(t[0],t[1],t[2]);let m=s?s[g]:[0,0];this.uv.push(m[0],m[1])}this.n+=4,f?this.idx.push(d,d+2,d+1,d,d+3,d+2):this.idx.push(d,d+1,d+2,d,d+2,d+3)}};function ua(n,e,t,i,s){for(let r=0;r<3;r++){let o=(r+1)%3,a=(r+2)%3;for(let l of[-1,1]){let c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([u,h])=>{let f=[0,0,0];return f[r]=l,f[o]=u,f[a]=h,[0,1,2].map(d=>e[d]+t[0][d]*f[0]*i[0]+t[1][d]*f[1]*i[1]+t[2][d]*f[2]*i[2])});n.quad(c,s,t[r].map(u=>u*l),null)}}}function lf(n,e,t){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new ii(i);return s.colorSpace=Rt,s.anisotropy=4,s}function Ym(n,e,t,i){n.beginPath(),e.forEach(([s,r],o)=>o?n.lineTo(s*t,r*i):n.moveTo(s*t,r*i)),n.closePath(),n.fill()}var $S=[[.12,.1],[.82,.5],[.12,.9],[.12,.68],[.5,.5],[.12,.32]];function cf(n,e,t){let i=t??kn(n.seed??1),s=n.pts,r=s.length,o=n.step??n.length/r,a=n.length??r*o,l=n.features??[],c=l.filter(C=>C.type==="ramp"),u=l.filter(C=>C.type==="boost"),h=l.filter(C=>C.type==="tunnel"),f=Math.max(0,Math.min(1,e.sheen??e.wet??0)),d=!!e.night,g=new ht;g.name="road";let x=[],m=[],p=[],S=C=>(m.push(C),C),M=lf(128,128,(C,U,z)=>{C.fillStyle="#f3efe6",C.fillRect(0,0,U,z),C.fillStyle="#d6202a",Ym(C,$S,U,z)}),y=lf(256,128,(C,U,z)=>{C.fillStyle="#04141a",C.fillRect(0,0,U,z),C.fillStyle="#37f3ff",Ym(C,[[.05,.1],[.8,.5],[.05,.9],[.05,.7],[.4,.5],[.05,.3]],U,z)}),T=lf(1024,256,(C,U,z)=>{C.fillStyle="#0b0e16",C.fillRect(0,0,U,z),C.strokeStyle="#ffd21f",C.lineWidth=10,C.strokeRect(12,12,U-24,z-24),C.fillStyle="#ffd21f",C.font="bold 150px Arial, Helvetica, sans-serif",C.textAlign="center",C.textBaseline="middle",C.fillText("POLYGON RUSH",U/2,z/2+8)});for(let C of[M,y,T])C&&p.push(C);y&&(y.wrapS=Pn);let b=S(new st({vertexColors:!0,flatShading:!0,roughness:.85-.6*f,metalness:f>0?.2:.02})),v=S(new Yt({vertexColors:!0})),w=S(new st({vertexColors:!0,flatShading:!0,color:16777215,emissive:16777215,emissiveIntensity:.14,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),_=S(new st({vertexColors:!0,flatShading:!0,roughness:1})),E=S(new st({vertexColors:!0,flatShading:!0,roughness:.5,metalness:.2})),R=S(new Yt({vertexColors:!0})),F=S(new st({color:M?16777215:16762906,map:M,emissive:M?16777215:16762906,emissiveMap:M,emissiveIntensity:.5,flatShading:!0})),k=S(new st({color:207411,emissive:3666943,emissiveMap:y,emissiveIntensity:2.2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),L=S(new st({vertexColors:!0,flatShading:!0,side:Pt,roughness:.9})),O=S(new Yt({vertexColors:!0})),D=S(new st({vertexColors:!0,flatShading:!0,roughness:.6})),Y=S(new st({color:T?16777215:16765471,map:T,emissive:T?16777215:16756736,emissiveMap:T,emissiveIntensity:.7,flatShading:!0})),V=S(new st({color:2830138,flatShading:!0,roughness:.7})),J=S(new st({color:16773570,emissive:16765562,emissiveIntensity:d?2.5:.8,flatShading:!0})),oe=C=>{for(let U of c)if(C>=U.s0&&C<U.s1)return U.height*(C-U.s0)/(U.s1-U.s0);return 0},de=C=>c.some(U=>C>=U.s0&&C<U.s1),ve=C=>h.some(U=>C>=U.s0&&C<=U.s1),ce=C=>{let U=C/o,z=Math.floor(U),Z=U-z;z=n.open?Math.max(0,Math.min(r-2,z)):(z%r+r)%r;let ae=s[z],Pe=s[(z+1)%r],He=wn(ae.rx,Pe.rx,Z),Ge=wn(ae.rz,Pe.rz,Z),q=Math.hypot(He,Ge)||1,re=wn(ae.tx,Pe.tx,Z),me=wn(ae.tz,Pe.tz,Z),ye=Math.hypot(re,me)||1,Se=wn(ae.y,Pe.y,Z);return{s:C,x:wn(ae.x,Pe.x,Z),z:wn(ae.z,Pe.z,Z),yb:Se,y:Se,h:0,rx:He/q,rz:Ge/q,tx:re/ye,tz:me/ye,w:wn(ae.width,Pe.width,Z),curv:wn(ae.curv,Pe.curv,Z),sample:!1}},ie=(C,U,z)=>({x:wn(C.x,U.x,z),y:wn(C.y,U.y,z),yb:wn(C.yb,U.yb,z),z:wn(C.z,U.z,z),rx:wn(C.rx,U.rx,z),rz:wn(C.rz,U.rz,z),w:wn(C.w,U.w,z)}),Q=(C,U,z=0)=>[C.x+C.rx*U,C.y+z,C.z+C.rz*U],ee=(C,U,z=0)=>[C.x+C.rx*U,C.yb+z,C.z+C.rz*U],I=[];for(let C of c)I.push({s:C.s0,h:0},{s:C.s1,h:C.height},{s:C.s1,h:0});I.sort((C,U)=>C.s-U.s);let B=[],X=0,$=(C,U,z)=>{let Z=B[B.length-1];if(Z&&Math.abs(Z.s-C)<1e-9&&Math.abs(Z.h-U)<1e-9){Z.sample=Z.sample||z;return}let ae=ce(C);ae.h=U,ae.y=ae.yb+U,ae.sample=z,B.push(ae)};for(let C=0;C<r;C++){let U=C*o;for(;X<I.length&&I[X].s<=U+1e-9;)$(I[X].s,I[X].h,!1),X++;$(U,oe(U),!0)}for(;X<I.length;)$(I[X].s,I[X].h,!1),X++;let pe=B.length,we=[];for(let C=0;C<pe&&!(n.open&&C===pe-1);C++){let U=B[C],z=B[(C+1)%pe],Z=U.s,ae=C+1<pe?B[C+1].s:a,Pe=Math.abs(ae-Z)<1e-9,He=(Z+ae)/2;we.push({a:U,b:z,sa:Z,sb:ae,drop:Pe,mid:He,ramp:!Pe&&de(He)})}let Ae=new Hn,G=new Hn,Ve=new Hn,ze=new Hn,Be=new Hn,Ie=new Hn,qe=new Hn,Fe=new Hn,N=new Hn,A=new Hn,j=new Hn,xe=new Hn,_e=C=>C.w/2+6-Gm/2,he=C=>C.w/2+6+Gm/2;for(let C of we){let{a:U,b:z,sa:Z,sb:ae,mid:Pe}=C;if(C.drop){Ae.quad([Q(U,-U.w/2),Q(U,U.w/2),Q(z,z.w/2),Q(z,-z.w/2)],yt.rampDark,[U.tx,0,U.tz]);continue}let He=U.w/2,Ge=z.w/2;if(C.ramp)G.quad([Q(U,-He),Q(U,He),Q(z,Ge),Q(z,-Ge)],Math.floor(Pe/2)%2===0?yt.yellow:yt.black,[0,1,0]),Ae.quad([Q(U,-He),Q(z,-Ge),ee(z,-Ge),ee(U,-He)],yt.rampDark,[-U.rx,0,-U.rz]),Ae.quad([Q(U,He),ee(U,He),ee(z,Ge),Q(z,Ge)],yt.rampDark,[U.rx,0,U.rz]);else{Ae.quad([Q(U,-He),Q(U,He),Q(z,Ge),Q(z,-Ge)],n.open?Math.floor(Pe/8)%2?yt.motorwayB:yt.motorwayA:Math.floor(Pe/8)%2?yt.asphaltB:yt.asphaltA,[0,1,0]);for(let Se of[-1,1])Ve.quad([Q(U,Se*(He-.25),.02),Q(U,Se*(He-.45),.02),Q(z,Se*(Ge-.45),.02),Q(z,Se*(Ge-.25),.02)],yt.white,[0,1,0]);let q=9,re=3;for(let Se=Math.floor(Z/q);Se*q<ae;Se++){let De=Math.max(Z,Se*q),Ze=Math.min(ae,Se*q+re);if(Ze-De<1e-6)continue;let Ke=ie(U,z,(De-Z)/(ae-Z)),it=ie(U,z,(Ze-Z)/(ae-Z));Ve.quad([Q(Ke,-.08,.02),Q(Ke,.08,.02),Q(it,.08,.02),Q(it,-.08,.02)],yt.white,[0,1,0])}let me=Math.abs((U.curv+z.curv)/2)>qS?1.2:.5,ye=Math.floor(Pe/2)%2?yt.red:yt.railA;for(let Se of n.open?[]:[-1,1])Ve.quad([Q(U,Se*He,.025),Q(U,Se*(He+me),.025),Q(z,Se*(Ge+me),.025),Q(z,Se*Ge,.025)],ye,[0,1,0])}for(let q of[-1,1]){ze.quad([ee(U,q*He),ee(U,q*_e(U)),ee(z,q*_e(z)),ee(z,q*Ge)],n.open?yt.lane:yt.sand,[0,1,0]);let re=tc/2,me=-af/2,ye=-af,Se=[q*U.rx*.6,.8,q*U.rz*.6];ze.quad([ee(U,q*he(U),0),ee(U,q*(he(U)+re),me),ee(z,q*(he(z)+re),me),ee(z,q*he(z),0)],yt.gravel,Se),ze.quad([ee(U,q*(he(U)+re),me),ee(U,q*(he(U)+tc),ye),ee(z,q*(he(z)+tc),ye),ee(z,q*(he(z)+re),me)],yt.gravel,Se);let De=Math.floor(Pe/6)%2?yt.railB:yt.railA,Ze=q*_e(U),Ke=q*_e(z),it=q*he(U),rt=q*he(z);!n.open&&(q<0||d||e.openRight===!1)&&(Be.quad([ee(U,Ze,0),ee(U,Ze,oi),ee(z,Ke,oi),ee(z,Ke,0)],De,[-q*U.rx,0,-q*U.rz]),Be.quad([ee(U,it,0),ee(U,it,oi),ee(z,rt,oi),ee(z,rt,0)],De,[q*U.rx,0,q*U.rz]),Be.quad([ee(U,Ze,oi),ee(U,it,oi),ee(z,rt,oi),ee(z,Ke,oi)],De,[0,1,0])),d&&Ie.quad([ee(U,Ze,oi+.02),ee(U,it,oi+.02),ee(z,rt,oi+.02),ee(z,Ke,oi+.02)],q<0?yt.neonCyan:yt.neonMag,[0,1,0])}}for(let C of B){if(!C.sample||Math.abs(C.curv)<=XS||Math.round(C.s/o)%8!==0||ve(C.s)||de(C.s))continue;let z=-Math.sign(C.curv)*(C.w/2+6+.6),ae=C.curv>0?[[0,0],[1,0],[1,1],[0,1]]:[[1,0],[0,0],[0,1],[1,1]];qe.quad([ee(C,z-.6,1),ee(C,z+.6,1),ee(C,z+.6,2),ee(C,z-.6,2)],[1,1,1],[-C.tx,0,-C.tz],ae),ua(j,[C.x+C.rx*z,C.yb+.35,C.z+C.rz*z],[[C.tx,0,C.tz],[C.rx,0,C.rz],[0,1,0]],[.08,.12,.65],yt.post)}let Ce=ce(0),Le=Math.max(4,Math.round(Ce.w)),Ne=Ce.w/Le;for(let C=0;C<3;C++){let U=ce(-2+C),z=ce(-1+C);for(let Z=0;Z<Le;Z++){let ae=-Ce.w/2+Z*Ne,Pe=ae+Ne;Ve.quad([Q(U,ae,.03),Q(U,Pe,.03),Q(z,Pe,.03),Q(z,ae,.03)],(C+Z)%2?yt.checkB:yt.checkW,[0,1,0])}}let ke=Ce.w/2+6+.5,Ee=[[Ce.tx,0,Ce.tz],[Ce.rx,0,Ce.rz],[0,1,0]];for(let C of[-1,1])ua(j,[Ce.x+Ce.rx*C*ke,Ce.yb+4,Ce.z+Ce.rz*C*ke],Ee,[.3,.3,4],yt.post);ua(j,[Ce.x,Ce.yb+7.5,Ce.z],Ee,[.5,ke,.5],yt.beam);let Ue=(C,U,z)=>[Ce.x+Ce.tx*C+Ce.rx*U,Ce.yb+z,Ce.z+Ce.tz*C+Ce.rz*U];xe.quad([Ue(-.55,-ke,5.2),Ue(-.55,ke,5.2),Ue(-.55,ke,6.8),Ue(-.55,-ke,6.8)],[1,1,1],[-Ce.tx,0,-Ce.tz],[[0,0],[1,0],[1,1],[0,1]]),xe.quad([Ue(.55,-ke,5.2),Ue(.55,ke,5.2),Ue(.55,ke,6.8),Ue(.55,-ke,6.8)],[1,1,1],[Ce.tx,0,Ce.tz],[[1,0],[0,0],[0,1],[1,1]]);for(let C of u){let U=[];for(let Z=C.s0;Z<C.s1;Z+=2)U.push(Z);U.push(C.s1);let z=U.map(ce);for(let Z=0;Z+1<z.length;Z++){let ae=z[Z],Pe=z[Z+1],He=(ae.s-C.s0)/4,Ge=(Pe.s-C.s0)/4;Fe.quad([Q(ae,-ae.w/2,.04),Q(ae,ae.w/2,.04),Q(Pe,Pe.w/2,.04),Q(Pe,-Pe.w/2,.04)],[1,1,1],[0,1,0],[[He,0],[He,1],[Ge,1],[Ge,0]])}}let se=C=>{let U=C.w/2+Wm,z=[[-U,0],[-U,ca]];for(let Z=1;Z<=7;Z++){let ae=Math.PI-Z*Math.PI/8;z.push([U*Math.cos(ae),ca+WS*Math.sin(ae)])}return z.push([U,ca],[U,0]),z},be=(C,U,z,Z=0)=>[C.x+C.rx*U+C.tx*Z,C.yb+z,C.z+C.rz*U+C.tz*Z],ne=(C,U,z)=>{let Z=-U,ae=ca-z,Pe=Math.hypot(Z,ae)||1;return[C.rx*Z/Pe,ae/Pe,C.rz*Z/Pe]},Me=([C,U])=>{let z=-C,Z=ca-U,ae=Math.hypot(z,Z)||1;return[C+z/ae*.45,U+Z/ae*.45]};for(let C of h){let U=[];for(let Z=C.s0;Z<C.s1;Z+=2)U.push(Z);U.push(C.s1);let z=U.map(ce);for(let Z=0;Z+1<z.length;Z++){let ae=z[Z],Pe=z[Z+1],He=se(ae),Ge=se(Pe);for(let q=0;q<He.length-1;q++){let re=(He[q][0]+He[q+1][0])/2,me=(He[q][1]+He[q+1][1])/2;N.quad([be(ae,He[q][0],He[q][1]),be(ae,He[q+1][0],He[q+1][1]),be(Pe,Ge[q+1][0],Ge[q+1][1]),be(Pe,Ge[q][0],Ge[q][1])],n.open?q%2?yt.tunOchreA:yt.tunOchreB:q%2?yt.tunA:yt.tunB,ne(ae,re,me))}if(Math.round((ae.s-C.s0)/2)%6===0)for(let q=1;q<=8;q++){let re=Me(He[q]),me=Me(He[q+1]),ye=(re[0]+me[0])/2,Se=(re[1]+me[1])/2;A.quad([be(ae,re[0],re[1]),be(ae,me[0],me[1]),be(ae,me[0],me[1],.6),be(ae,re[0],re[1],.6)],n.open?yt.sodium:q%2?yt.neonCyan:yt.neonMag,ne(ae,ye,Se))}}for(let Z of[z[0],z[z.length-1]]){let ae=Z.w/2+Wm,Pe=[[Z.tx,0,Z.tz],[Z.rx,0,Z.rz],[0,1,0]];for(let He of[-1,1])ua(N,[Z.x+Z.rx*He*(ae+1.2),Z.yb+5,Z.z+Z.rz*He*(ae+1.2)],Pe,[2,1.1,5],yt.concrete);ua(N,[Z.x,Z.yb+10.5,Z.z],Pe,[2,ae+3.5,1.5],yt.concreteB)}}let fe=(C,U,z,Z=!1)=>{if(!C.idx.length)return null;let ae=new gt;ae.setAttribute("position",new lt(C.pos,3)),ae.setAttribute("color",new lt(C.col,3)),ae.setAttribute("uv",new lt(C.uv,2)),ae.setIndex(C.idx),ae.computeVertexNormals(),x.push(ae);let Pe=new ot(ae,U);return Pe.name=z,Pe.receiveShadow=Z,g.add(Pe),Pe};fe(Ae,b,"road-asphalt",!0),fe(G,v,"road-ramp-top"),fe(Ve,w,"road-paint"),fe(ze,_,"road-shoulder-talus"),fe(Be,E,"road-barriers"),d&&fe(Ie,R,"road-barrier-neon"),fe(qe,F,"road-chevrons"),fe(Fe,k,"road-boost"),fe(N,L,"road-tunnels"),fe(A,O,"road-tunnel-neon"),fe(j,D,"road-props"),fe(xe,Y,"road-start-sign");let ge=[];for(let C=1;C*Xm<a-5;C++){let U=C*Xm;if(h.some(Ge=>U>=Ge.s0-15&&U<=Ge.s1+15))continue;let z=ce(U),Z=C%2?1:-1,ae=Z*(z.w/2+6+2.6),Pe=z.yb-af*Math.min(1,2.45/tc),He=i.range(8.5,9.5);ge.push({x:z.x+z.rx*ae,z:z.z+z.rz*ae,y:Pe,h:He,hx:z.x+z.rx*(ae-Z*.6),hz:z.z+z.rz*(ae-Z*.6)})}if(ge.length){let C=new In(.18,.26,9,6,1),U=new or(.55,0);x.push(C,U);let z=new Sn(C,V,ge.length),Z=new Sn(U,J,ge.length);z.name="road-lamp-masts",Z.name="road-lamp-heads";let ae=new je,Pe=new rn,He=new H,Ge=new H;ge.forEach((q,re)=>{Ge.set(q.x,q.y+q.h/2,q.z),He.set(1,q.h/9,1),ae.compose(Ge,Pe,He),z.setMatrixAt(re,ae),Ge.set(q.hx,q.y+q.h+.2,q.hz),He.set(1,1,1),ae.compose(Ge,Pe,He),Z.setMatrixAt(re,ae)}),z.instanceMatrix.needsUpdate=!0,Z.instanceMatrix.needsUpdate=!0,g.add(z,Z)}return{group:g,update:(C,U)=>{y&&(y.offset.x=-(U*.9%1)),k.emissiveIntensity=2.2+.5*Math.sin(U*5)},dispose:()=>{g.removeFromParent();for(let C of x)C.dispose();for(let C of m)C.dispose();for(let C of p)C.dispose()}}}function Zm(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new gt,c=0;for(let u=0;u<n.length;++u){let h=n[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=$m(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);let g=$m(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function $m(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new mt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){let x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function uf(n,e){if(e===jp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===sa||e===Ol){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===sa)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function cr(n,e=.5,t=1){if(!n||n.userData.voxel||!(n.isMeshStandardMaterial||n.isMeshLambertMaterial))return n;n.userData.voxel=!0;let i=n.onBeforeCompile;return n.onBeforeCompile=(s,r)=>{i?.call(n,s,r),s.uniforms.uVoxCell={value:e},s.uniforms.uVoxStrength={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"voxel-"+e+"-"+t,n.needsUpdate=!0,n}var ZS=/asphalt|paint|boost|sign|ramp|neon|lamp-heads/;function hf(n,e){n.traverse(t=>{if(!t.isMesh||ZS.test(t.name))return;let i=Array.isArray(t.material)?t.material:[t.material];for(let s of i)!s||s.transparent||s.emissiveIntensity>1.2||(s.roughness??1)<.35||cr(s,e(t),1)})}function Km(n,e,t=46){let i=[];for(let l=0;l<t;l++){let c=e.range(0,Math.PI*2),u=e.range(700,4200),h=Math.cos(c)*u,f=Math.sin(c)*u,d=e.range(260,520),g=e.range(26,46),x=e.int(5,11);for(let m=0;m<x;m++)i.push([h+Math.round(e.range(-3.5,3.5))*g,d+Math.round(e.range(0,1.4))*g*.6,f+Math.round(e.range(-2,2))*g,g*e.int(1,3),g*.6*e.int(1,2),g*e.int(1,2)])}let s=new un(1,1,1),r=new si({color:n.night?2765648:16777215,fog:!1,emissive:n.night?329487:new Re(16777215).lerp(new Re(n.skyHorizon),.35).multiplyScalar(.5)}),o=new Sn(s,r,i.length),a=new je;return i.forEach((l,c)=>{a.makeScale(l[3],l[4],l[5]),a.setPosition(l[0],l[1],l[2]),o.setMatrixAt(c,a)}),o.instanceMatrix.needsUpdate=!0,o.frustumCulled=!1,o.name="voxel-clouds",o}function jm(n,e,t,i,s,r,o,a,l,c){let u=e+s,h=t+r,f=i+o,d,g,x,m,p,S;s?(d=0,g=l?1:-1,x=0,m=0,p=0,S=c?1:-1):r?(d=a?1:-1,g=0,x=0,m=0,p=0,S=c?1:-1):(d=a?1:-1,g=0,x=0,m=0,p=l?1:-1,S=0);let M=n(u+d,h+g,f+x)?1:0,y=n(u+m,h+p,f+S)?1:0,T=n(u+d+m,h+g+p,f+x+S)?1:0;return .5+.1667*(M&&y?0:3-(M+y+T))}function Ds(n,e){let t=n.index?n.toNonIndexed():n,i=t.attributes.position,s=t.attributes.color,r=512,o=(m,p,S)=>m+r+(p+r)*1024+(S+r)*1048576,a=new Map,l=(m,p,S,M,y,T)=>{let b=Math.floor(m/e),v=Math.floor(p/e),w=Math.floor(S/e),_=o(b,v,w);a.has(_)||a.set(_,[b,v,w,M,y,T])};for(let m=0;m<i.count;m+=3){let p=i.getX(m),S=i.getY(m),M=i.getZ(m),y=i.getX(m+1),T=i.getY(m+1),b=i.getZ(m+1),v=i.getX(m+2),w=i.getY(m+2),_=i.getZ(m+2),E=.6,R=.6,F=.6;s&&(E=(s.getX(m)+s.getX(m+1)+s.getX(m+2))/3,R=(s.getY(m)+s.getY(m+1)+s.getY(m+2))/3,F=(s.getZ(m)+s.getZ(m+1)+s.getZ(m+2))/3);let k=Math.max(Math.hypot(y-p,T-S,b-M),Math.hypot(v-p,w-S,_-M),Math.hypot(v-y,w-T,_-b)),L=Math.max(1,Math.ceil(k/e*2));for(let O=0;O<=L;O++)for(let D=0;D<=L-O;D++){let Y=O/L,V=D/L;l(p+(y-p)*Y+(v-p)*V,S+(T-S)*Y+(w-S)*V,M+(b-M)*Y+(_-M)*V,E,R,F)}}let c=new Map;for(let m of a.values()){let p=m[0]+r+(m[2]+r)*1024,S=c.get(p);S||c.set(p,S=[]),S.push(m)}for(let m of c.values()){m.sort((p,S)=>p[1]-S[1]);for(let p=0;p<m.length-1;p++)for(let S=m[p][1]+1;S<m[p+1][1];S++)a.set(o(m[p][0],S,m[p][2]),[m[p][0],S,m[p][2],m[p][3],m[p][4],m[p][5]])}let u=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],h=[],f=[],d=[],g=(m,p,S)=>a.has(o(m,p,S));for(let m of a.values()){let[p,S,M,y,T,b]=m,v=Math.sin(p*12.9898+S*78.233+M*37.719)*43758.5453,w=.86+.24*(v-Math.floor(v));for(let[_,E,R,F]of u)if(!a.has(o(p+_,S+E,M+R)))for(let k of[0,1,2,0,2,3]){let L=F[k*3],O=F[k*3+1],D=F[k*3+2],Y=w*jm(g,p,S,M,_,E,R,L,O,D);h.push((p+L)*e,(S+O)*e,(M+D)*e),f.push(_,E,R),d.push(y*Y,T*Y,b*Y)}}let x=new gt;return x.setAttribute("position",new lt(h,3)),x.setAttribute("normal",new lt(f,3)),x.setAttribute("color",new lt(d,3)),x.computeBoundingSphere(),x}function $n(n,e,t,i,s,r=.2){let o=new Array(n*e*t),a=(x,m,p)=>x<0||m<0||p<0||x>=n||m>=e||p>=t?null:o[x+n*(m+e*p)];for(let x=0;x<t;x++)for(let m=0;m<e;m++)for(let p=0;p<n;p++)o[p+n*(m+e*x)]=s(p,m,x)||null;let l=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],c=[],u=[],h=[],f=-n/2,d=-t/2;for(let x=0;x<t;x++)for(let m=0;m<e;m++)for(let p=0;p<n;p++){let S=o[p+n*(m+e*x)];if(!S)continue;let M=Math.sin(p*12.9898+m*78.233+x*37.719)*43758.5453,y=1-r/2+r*(M-Math.floor(M));for(let[T,b,v,w]of l)if(!a(p+T,m+b,x+v)&&!(b<0&&m===0))for(let _ of[0,1,2,0,2,3]){let E=w[_*3],R=w[_*3+1],F=w[_*3+2],k=y*jm(a,p,m,x,T,b,v,E,R,F);c.push((p+f+E)*i,(m+R)*i,(x+d+F)*i),u.push(T,b,v),h.push(S[0]*k,S[1]*k,S[2]*k)}}let g=new gt;return g.setAttribute("position",new lt(c,3)),g.setAttribute("normal",new lt(u,3)),g.setAttribute("color",new lt(h,3)),g.computeBoundingSphere(),g}function Jm(n,e=1,t=null){if(!n||n.userData.wetRoad)return n;n.userData.wetRoad=!0;let i=n.onBeforeCompile;return n.onBeforeCompile=(s,r)=>{i?.call(n,s,r),s.uniforms.uWet={value:e},s.uniforms.tRefl={value:t?t.texture:null},s.uniforms.uReflMatrix={value:t?t.matrix:new je},s.uniforms.uReflOn={value:t?1:0},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"wet-road-"+e+(t?"-refl":""),n.needsUpdate=!0,n}function Qm(n,e){let t=1/0,i=-1/0,s=1/0,r=-1/0,o=1/0,a=-1/0;for(let f=0;f<n.length;f+=4)t=Math.min(t,n[f]),i=Math.max(i,n[f]),s=Math.min(s,n[f+1]),r=Math.max(r,n[f+1]),o=Math.min(o,n[f+2]),a=Math.max(a,n[f+2]);let l=i-t+1,c=r-s+1,u=a-o+1,h=new Map;for(let f=0;f<n.length;f+=4){let d=n[f+3];h.set(n[f]-t+l*(n[f+1]-s+c*(n[f+2]-o)),[(d>>16&255)/255,(d>>8&255)/255,(d&255)/255])}return $n(l,c,u,e,(f,d,g)=>h.get(f+l*(d+c*g))||null,.12)}function e0(n,e=3.1,t=2.6){if(!n||!n.userData.voxel||n.userData.windows)return n;n.userData.windows=!0;let i=n.onBeforeCompile;n.onBeforeCompile=(r,o)=>{i?.call(n,r,o),r.fragmentShader=r.fragmentShader.replace("#include <roughnessmap_fragment>",`
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
        #include <roughnessmap_fragment>`)};let s=n.customProgramCacheKey?.()||"";return n.customProgramCacheKey=()=>s+"-win-"+e+"-"+t,n.needsUpdate=!0,n}function t0(n){let e={value:0};return n.onBeforeCompile=t=>{t.uniforms.uSeaTime=e,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"sea-waves",n.needsUpdate=!0,e}var dn=5,n0=1,Ns=450,Zn=40,i0=12e3,s0=32,r0=4e3,Kn=Math.PI*2,ha=new Ft,mo=new Re,o0=new je,a0=new je,KS=new H(0,1,0),l0=n=>n<0?0:n>1?1:n,Li=(n,e,t)=>n<e?e:n>t?t:n,ur=(n,e,t)=>{let i=l0((t-n)/(e-n));return i*i*(3-2*i)};function jS(n){let e=(i,s)=>{let r=Math.imul(i|0,374761393)+Math.imul(s|0,668265263)+n|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},t=(i,s)=>{let r=Math.floor(i),o=Math.floor(s),a=i-r,l=s-o,c=a*a*(3-2*a),u=l*l*(3-2*l),h=e(r,o),f=e(r+1,o),d=e(r,o+1),g=e(r+1,o+1);return h+(f-h)*c+(d-h)*u+(h-f-d+g)*c*u};return(i,s)=>(t(i,s)*.5+t(i*2+17.3,s*2-9.1)*.25+t(i*4-3.7,s*4+11.2)*.125)/.875}var po=n=>{let e=new Re(n);return[e.r,e.g,e.b]},Us={sand:po(14271631),dry:po(7317050),garrigue:po(5212718),rock:po(12169890),pale:po(13617336),snow:po(15855076)},JS=[16513264,15853260,14725754,16052195],QS=[9075302,7236192,11047018,8023646],eT=[3407871,16727250,16757051],ic=0,sc=0,rc=0,fa=(n,e)=>{ic+=(n[0]-ic)*e,sc+=(n[1]-sc)*e,rc+=(n[2]-rc)*e};function tT(n,e,t,i,s,r){ic=Us.sand[0],sc=Us.sand[1],rc=Us.sand[2],fa(Us.dry,ur(2.5,7,n)),fa(Us.garrigue,ur(25,75,n)*.55),fa(Us.rock,ur(.4,.65,e)),fa(Us.pale,ur(95,120,n)*.8),fa(Us.snow,ur(125,150,n));let o=ic*t,a=sc*t,l=rc*t;i&&(o=o*.45+.02,a=a*.5+.03,l=l*.75+.09);for(let c=0;c<9;c+=3)s[r+c]=o,s[r+c+1]=a,s[r+c+2]=l}function ai(n,e){let t=n.index?n.toNonIndexed():n;t.attributes.uv&&t.deleteAttribute("uv"),t.attributes.normal||t.computeVertexNormals();let i=t.attributes.position.count,s=new Float32Array(i*3);mo.setHex(e);for(let r=0;r<i;r++)s[r*3]=mo.r,s[r*3+1]=mo.g,s[r*3+2]=mo.b;return t.setAttribute("color",new mt(s,3)),t}var da=n=>Zm(n,!1);function nT(n,e,t){let i=Math.sin(n*12.9898+e*78.233+t*37.719)*43758.5453;return i-Math.floor(i)}function iT(){let n=new or(1,0),e=n.attributes.position;for(let t=0;t<e.count;t++){let i=e.getX(t),s=e.getY(t),r=e.getZ(t),o=.8+.4*nT(i,s,r);e.setXYZ(t,i*o,s*o,r*o)}return n.computeVertexNormals(),n}function sT(){return da([ai(new In(.35,.5,6,6).translate(0,3,0),7162931),ai(new or(3.4,0).scale(1,.55,1).translate(0,7.4,0),4160058)])}function rT(){return da([ai(new In(.25,.35,1.2,5).translate(0,.6,0),7162931),ai(new rr(1.1,10,6).translate(0,6,0),3037756)])}function oT(){let n=[ai(new In(.22,.35,8,5).translate(0,4,0),9071178)];for(let e=0;e<7;e++){let t=new rr(.55,4.6,3).rotateZ(Math.PI/2-.45).translate(0,8.4,0).rotateY(e*Kn/7);n.push(ai(t,5214010))}return da(n)}function aT(){return da([ai(new In(1.6,2.3,13,8).translate(0,6.5,0),16052712),ai(new In(2,2,2.2,8).translate(0,6.5,0),12727595),ai(new In(1.3,1.3,1.8,8).translate(0,14,0),16771488),ai(new rr(1.7,1.2,8).translate(0,15.4,0),3812906)])}function lT(){return da([ai(new un(2.2,.9,6).translate(0,.45,0),15986662),ai(new rr(1.9,5.4,3).scale(.1,1,1).translate(0,3.6,-.3),16775400)])}function Mi(n,e,t,i=!0){let s=new Sn(n,e,t.length);for(let r=0;r<t.length;r++){let o=t[r];ha.position.set(o.x,o.y,o.z),ha.rotation.set(0,o.ry??0,0),ha.scale.set(o.sx??1,o.sy??1,o.sz??1),ha.updateMatrix(),s.setMatrixAt(r,ha.matrix),o.col!==void 0&&(mo.setHex(o.col).multiplyScalar(o.v??1),s.setColorAt(r,mo))}return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.castShadow=i,s}var cT=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,uT=`
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
}`;function c0(n,e,t,i){let s=e.pts,r=s.length,o=e.bounds,a=!!t.night,l=jS(i.int(1,1073741808)),c=o.minX-Ns-Zn,u=o.minZ-Ns-Zn,h=Math.ceil((o.maxX-o.minX+2*Ns)/Zn)+3,f=Math.ceil((o.maxZ-o.minZ+2*Ns)/Zn)+3,d=Array.from({length:h*f},()=>[]);for(let q=0;q<r;q++){let re=Li(Math.floor((s[q].x-c)/Zn),0,h-1),me=Li(Math.floor((s[q].z-u)/Zn),0,f-1);d[me*h+re].push(q)}let g=0;function x(q,re){let me=Math.floor((q-c)/Zn),ye=Math.floor((re-u)/Zn),Se=Math.max(h,f),De=1/0,Ze=0;for(let Ke=0;Ke<=Se;Ke++){for(let rt=ye-Ke;rt<=ye+Ke;rt++){if(rt<0||rt>=f)continue;let Vt=rt===ye-Ke||rt===ye+Ke?1:2*Ke;for(let Dt=me-Ke;Dt<=me+Ke;Dt+=Vt){if(Dt<0||Dt>=h)continue;let Gt=d[rt*h+Dt];for(let Xt=0;Xt<Gt.length;Xt++){let xn=Gt[Xt],P=s[xn],K=P.x-q,le=P.z-re,ue=K*K+le*le;ue<De&&(De=ue,Ze=xn)}}}let it=Ke*Zn;if(De<=it*it)break}return g=Math.sqrt(De),Ze}function m(q,re,me){let ye=me*me,Se=1/0,De=Li(Math.floor((q-me-c)/Zn),0,h-1),Ze=Li(Math.floor((q+me-c)/Zn),0,h-1),Ke=Li(Math.floor((re-me-u)/Zn),0,f-1),it=Li(Math.floor((re+me-u)/Zn),0,f-1);for(let rt=Ke;rt<=it;rt++)for(let wt=De;wt<=Ze;wt++){let Vt=d[rt*h+wt];for(let Dt=0;Dt<Vt.length;Dt++){let Gt=s[Vt[Dt]],Xt=Gt.x-q,xn=Gt.z-re;Xt*Xt+xn*xn<=ye&&Gt.y<Se&&(Se=Gt.y)}}return Se}let p=Math.ceil(r/4),S=new Float64Array(p*2);for(let q=0;q<p;q++)S[2*q]=s[q*4%r].x,S[2*q+1]=s[q*4%r].z;function M(q,re){let me=!1;for(let ye=0,Se=p-1;ye<p;Se=ye++){let De=S[2*ye],Ze=S[2*ye+1],Ke=S[2*Se],it=S[2*Se+1];Ze>re!=it>re&&q<(Ke-De)*(re-Ze)/(it-Ze)+De&&(me=!me)}return me}let y=o.minX-Ns,T=o.minZ-Ns,b=Math.ceil((o.maxX-o.minX+2*Ns)/dn)+1,v=Math.ceil((o.maxZ-o.minZ+2*Ns)/dn)+1,w=new Float32Array(b*v);for(let q=0;q<v;q++)for(let re=0;re<b;re++){let me=y+re*dn,ye=T+q*dn,Se=x(me,ye),De=g,Ze=s[Se],Ke=Ze.width*.5,it=Ze.y;if(De<40){let K=m(me,ye,24);K<it&&(it=K)}let rt=1;if(!M(me,ye)){let K=De-Ke+(l(me/140+31.7,ye/140-8.2)-.5)*70;rt=1-ur(110,200,K)}let wt=l(me/260,ye/260),Dt=-15+(10+130*Math.pow(l0((wt-.42)/.5),1.5)+6*wt+15)*rt;if(rt>=1){let K=l(me/90+11.3,ye/90-4.1);Dt=Math.max(Dt,it+6+38*K)}let Gt=ur(Ke+6+12,Ke+6+62,De),Xt=it-.6,xn=Xt+(Dt-Xt)*Gt,P=it+Math.max(0,De-Ke-6-12)*1.2;xn>P&&(xn=P),w[q*b+re]=xn}let _=null;function E(q,re){if(_)return _(q,re);let me=(q-y)/dn,ye=(re-T)/dn;me=Li(me,0,b-1.000001),ye=Li(ye,0,v-1.000001);let Se=Math.floor(me),De=Math.floor(ye),Ze=me-Se,Ke=ye-De,it=w[De*b+Se],rt=w[De*b+Se+1],wt=w[(De+1)*b+Se],Vt=w[(De+1)*b+Se+1],Dt=it+(rt-it)*Ze,Gt=wt+(Vt-wt)*Ze;return Dt+(Gt-Dt)*Ke}let R=(q,re)=>Math.max(Math.abs(E(q+4,re)-E(q-4,re)),Math.abs(E(q,re+4)-E(q,re-4)))/8,F=(q,re,me)=>{let ye=x(q,re);return g>=s[ye].width*.5+6+4+me},k=[],L=[],O=new Float32Array(9),D=(q,re,me,ye,Se,De,Ze,Ke,it)=>{let rt=ye-q,wt=Se-re,Vt=De-me,Dt=Ze-q,Gt=Ke-re,Xt=it-me,xn=wt*Xt-Vt*Gt,P=Vt*Dt-rt*Xt,K=rt*Gt-wt*Dt,le=Math.hypot(xn,P,K)||1,ue=1-Math.abs(P)/le;k.push(q,re,me,ye,Se,De,Ze,Ke,it),tT((re+Se+Ke)/3,ue,.9+.2*i.next(),a,O,0);for(let te=0;te<9;te++)L.push(O[te])},Y=b-1,V=v-1,J=new Float32Array(Y*V);for(let q=0;q<V;q++)for(let re=0;re<Y;re++){let me=q*b+re,ye=(w[me]+w[me+1]+w[me+b]+w[me+b+1])/4;J[q*Y+re]=Math.floor(ye/n0)*n0}let oe=-4;for(let q=0;q<V;q++)for(let re=0;re<Y;re++){let me=J[q*Y+re],ye=y+re*dn,Se=T+q*dn,De=ye+dn,Ze=Se+dn;if(me>oe&&(D(ye,me,Se,ye,me,Ze,De,me,Se),D(De,me,Se,ye,me,Ze,De,me,Ze)),re+1<Y){let Ke=J[q*Y+re+1],it=Math.min(me,Ke),rt=Math.max(me,Ke);rt>it&&rt>oe&&(D(De,it,Se,De,rt,Se,De,rt,Ze),D(De,it,Se,De,rt,Ze,De,it,Ze))}if(q+1<V){let Ke=J[(q+1)*Y+re],it=Math.min(me,Ke),rt=Math.max(me,Ke);rt>it&&rt>oe&&(D(ye,it,Ze,ye,rt,Ze,De,rt,Ze),D(ye,it,Ze,De,rt,Ze,De,it,Ze))}}_=(q,re)=>{let me=Li(Math.floor((q-y)/dn),0,Y-1),ye=Li(Math.floor((re-T)/dn),0,V-1);return J[ye*Y+me]};let de=new gt;de.setAttribute("position",new lt(k,3)),de.setAttribute("color",new lt(L,3)),de.computeVertexNormals(),de.computeBoundingSphere();let ve=new ot(de,new st({vertexColors:!0,flatShading:!0,roughness:.94,metalness:0,side:Pt}));ve.receiveShadow=!0;let ce=new ht;ce.name="environment",ce.add(ve);let ie=(o.minX+o.maxX)/2,Q=(o.minZ+o.maxZ)/2,ee=new zn(i0,i0,s0,s0);ee.rotateX(-Math.PI/2);let I=ee.attributes.position,B=I.count,X=new Float32Array(B),$=new Float32Array(B);for(let q=0;q<B;q++)X[q]=I.getX(q),$[q]=I.getZ(q);let pe=new ot(ee,new st({color:t.seaColor,roughness:.25,metalness:.05,flatShading:!0}));pe.position.set(ie,0,Q),ce.add(pe);let we=new H(t.sunDir[0],t.sunDir[1],t.sunDir[2]).normalize(),Ae=new ht,G=new vt({uniforms:{topColor:{value:new Re(t.skyTop)},horizonColor:{value:new Re(t.skyHorizon)},sunColor:{value:new Re(t.sunColor)},sunDir:{value:we},night:{value:a?1:0}},vertexShader:cT,fragmentShader:uT,side:en,depthWrite:!1,fog:!1}),Ve=new ot(new ws(r0,32,16),G);if(Ve.renderOrder=-10,Ve.frustumCulled=!1,Ae.add(Ve),a){let re=new Float32Array(1500);for(let Se=0;Se<500;Se++){let De=i.range(0,Kn),Ze=Math.asin(i.range(.05,.98)),Ke=r0*.97;re[Se*3]=Ke*Math.cos(Ze)*Math.cos(De),re[Se*3+1]=Ke*Math.sin(Ze),re[Se*3+2]=Ke*Math.cos(Ze)*Math.sin(De)}let me=new gt;me.setAttribute("position",new mt(re,3));let ye=new Es(me,new sr({color:16777215,size:2,sizeAttenuation:!1,fog:!1,depthWrite:!1,transparent:!0,opacity:.9}));ye.frustumCulled=!1,Ae.add(ye)}ce.add(Ae);let ze=new ao(t.hemiSky,t.hemiGround,t.hemiIntensity),Be=new Ai(t.sunColor,t.sunIntensity);Be.castShadow=!0,Be.shadow.mapSize.set(2048,2048);let Ie=Be.shadow.camera;Ie.left=-90,Ie.right=90,Ie.top=90,Ie.bottom=-90,Ie.near=1,Ie.far=600,Ie.updateProjectionMatrix(),Be.shadow.bias=-5e-4,ce.add(ze,Be,Be.target);let qe=n.fog,Fe=n.background,N=new no(t.fogColor,t.fogDensity),A=new Re(t.skyHorizon);n.fog=N,n.background=A;let j=y+(b-1)*dn,xe=T+(v-1)*dn,_e=()=>i.range(y+30,j-30),he=()=>i.range(T+30,xe-30),Ce=(q,re,me)=>{let ye=[];for(let Se=0;Se<re&&ye.length<q;Se++){let De=me(_e(),he());De&&ye.push(De)}return ye},Le=Ce(320,4e4,(q,re)=>{let me=E(q,re);if(me<4||me>95||!F(q,re,2)||R(q,re)>.6)return null;let ye=i.range(.8,1.45);return{x:q,y:me-.3,z:re,sx:ye,sy:ye*i.range(.9,1.3),sz:ye,ry:i.range(0,Kn),col:16777215,v:i.range(.85,1.15)}}),Ne=Ce(170,4e4,(q,re)=>{let me=E(q,re);if(me<6||me>70||!F(q,re,1.5)||R(q,re)>.6)return null;let ye=i.range(.8,1.3);return{x:q,y:me-.3,z:re,sx:ye,sy:ye*i.range(.9,1.25),sz:ye,ry:i.range(0,Kn),col:16777215,v:i.range(.85,1.15)}}),ke=Ce(110,4e4,(q,re)=>{let me=E(q,re);if(me<1.8||me>14||!F(q,re,2)||R(q,re)>.5)return null;let ye=i.range(.85,1.25);return{x:q,y:me-.3,z:re,sx:ye,sy:ye,sz:ye,ry:i.range(0,Kn),col:16777215,v:i.range(.9,1.1)}});ce.add(Mi(Ds(sT(),.8),new st({vertexColors:!0,flatShading:!0,roughness:.9}),Le)),ce.add(Mi(Ds(rT(),.7),new st({vertexColors:!0,flatShading:!0,roughness:.9}),Ne)),ce.add(Mi(Ds(oT(),.6),new st({vertexColors:!0,flatShading:!0,roughness:.9}),ke));let Ee=Ce(300,3e4,(q,re)=>{let me=E(q,re);if(me<1.5)return null;let ye=i.range(1.2,4.5);return F(q,re,ye*.6)?{x:q,y:me+ye*.15,z:re,sx:ye,sy:ye*i.range(.55,.9),sz:ye,ry:i.range(0,Kn),col:i.pick(QS),v:i.range(.85,1.15)}:null}),Ue=Ce(3,3e4,(q,re)=>{if(E(q,re)>-4)return null;let me=x(q,re);if(g<s[me].width*.5+200||g>800)return null;let ye=i.range(25,45);return{x:q,y:.1*ye,z:re,sx:ye,sy:ye*.45,sz:ye,ry:i.range(0,Kn),col:10260344,v:1}});ce.add(Mi(Ds(iT(),.42),new st({color:16777215,flatShading:!0,roughness:.95}),Ee.concat(Ue)));let se=[],be=[],ne=[],Me=i.int(3,5),fe=0;for(let q=0;q<4e3&&fe<Me;q++){let re=_e(),me=he(),ye=x(re,me),Se=s[ye].width*.5;if(g<Se+25||g>Se+80)continue;let De=E(re,me);if(De<6||De>40||R(re,me)>.35)continue;fe++;let Ze=i.int(7,12);for(let Ke=0;Ke<Ze;Ke++){let it=i.range(0,Kn),rt=Math.sqrt(i.next())*18,wt=re+Math.cos(it)*rt,Vt=me+Math.sin(it)*rt,Dt=x(wt,Vt);if(g<s[Dt].width*.5+6+4+4)continue;let Gt=E(wt,Vt);if(Gt<3)continue;let Xt=i.range(4,6.5),xn=i.range(3.5,6),P=i.range(4,6.5),K=i.pick([0,Math.PI/2])+i.range(-.15,.15),le=Gt-1;if(se.push({x:wt,y:le,z:Vt,ry:K,sx:Xt,sy:xn,sz:P,col:i.pick(JS),v:1}),be.push({x:wt,y:le+xn,z:Vt,ry:K,sx:Xt*1.08,sy:i.range(1.8,2.6),sz:P*1.08}),a)for(let ue of[-1,1]){let te=ue*Xt*.28,Oe=P/2+.03;ne.push({x:wt+te*Math.cos(K)+Oe*Math.sin(K),y:le+xn*.55,z:Vt-te*Math.sin(K)+Oe*Math.cos(K),ry:K})}}}let ge=new st({color:16777215,flatShading:!0,roughness:.85}),W=new st({color:11818298,flatShading:!0,roughness:.8});if(se.length){let q=new un(1,1,1).translate(0,.5,0),re=Ds(new In(0,.71,1,4).rotateY(Math.PI/4).translate(0,.5,0),.125);ce.add(Mi(q,ge,se),Mi(re,W,be))}if(a&&ne.length){let q=new un(1.2,1.1,.12);ce.add(Mi(q,new Yt({color:16761466}),ne,!1))}if(a){let q=0,re=0,me=!1;for(let ye=0;ye<4e3&&!me;ye++){let Se=_e(),De=he(),Ze=x(Se,De),Ke=s[Ze].width*.5;if(g<Ke+220||g>Ke+420)continue;let it=E(Se,De);it<6||it>30||(q=Se,re=De,me=!0)}if(me){let ye=[],Se=[],De=i.int(9,13);for(let Ze=0;Ze<De;Ze++){let Ke=q+i.range(-110,110),it=re+i.range(-110,110),rt=E(Ke,it);if(rt<2)continue;let wt=i.range(6,10),Vt=i.range(30,70);ye.push({x:Ke,y:rt,z:it,sx:wt,sy:Vt,sz:wt,col:1777720,v:i.range(.8,1.2)});let Dt=i.pick(eT);for(let Gt=0;Gt<3;Gt++){let Xt=Gt*Kn/3+i.range(0,.5);Se.push({x:Ke+Math.cos(Xt)*wt*.88,y:rt+Vt*.05,z:it+Math.sin(Xt)*wt*.88,ry:-Xt,sy:Vt*.9,col:Dt,v:1})}}ce.add(Mi(new In(.72,1,1,6).translate(0,.5,0),new st({color:16777215,flatShading:!0,roughness:.7}),ye),Mi(new un(.5,1,.25).translate(0,.5,0),new Yt({color:16777215}),Se,!1))}}{let q=[],re=[];for(let ye=1;ye<v-1;ye++)for(let Se=1;Se<b-1;Se++){let De=ye*b+Se,Ze=w[De];if(Ze<2||Ze>30)continue;let Ke=x(y+Se*dn,T+ye*dn);if(g<s[Ke].width*.5+60)continue;(w[De-1]<0||w[De+1]<0||w[De-b]<0||w[De+b]<0?q:re).push(De)}let me=q.length?q:re;if(me.length){let ye=i.pick(me),Se=ye%b,De=(ye-Se)/b,Ze=new ot(Ds(aT(),.6),new st({vertexColors:!0,flatShading:!0,roughness:.6}));Ze.position.set(y+Se*dn,w[ye]-.5,T+De*dn),Ze.castShadow=!0,ce.add(Ze)}}let Te=Ce(4,2e4,(q,re)=>{if(E(q,re)>-3)return null;let me=x(q,re);return g<s[me].width*.5+250||g>900?null:{x:q,y:-.2,z:re,ry:i.range(0,Kn),col:16777215,v:1}});Te.length&&ce.add(Mi(Ds(lT(),.5),new st({vertexColors:!0,flatShading:!0,roughness:.6}),Te));let C=[],U=[];for(let q=0;q<2e4&&C.length<3;q++){let re=_e(),me=he(),ye=x(re,me);if(g<s[ye].width*.5+60)continue;let Se=E(re,me);Se<55||C.some(De=>Math.hypot(De.x-re,De.z-me)<200)||C.push({x:re,y:Se,z:me,ry:i.range(0,Kn),speed:i.range(.9,1.5),phase:i.range(0,Kn)})}let z=new un(.7,14,.22).translate(0,7,0),Z=new st({color:15659507,flatShading:!0,roughness:.6}),ae=null;if(C.length){ce.add(Mi(new In(.8,.35,30,6).translate(0,15,0),Z,C));for(let q of C)U.push(new je().compose(new H(q.x,q.y+30,q.z),new rn().setFromAxisAngle(KS,q.ry),new H(1,1,1)));ae=new Sn(z,Z,C.length*3),ae.castShadow=!0,ce.add(ae)}function Pe(q){if(ae){for(let re=0;re<C.length;re++){let me=q*C[re].speed+C[re].phase;for(let ye=0;ye<3;ye++)a0.makeRotationZ(me+ye*Kn/3),o0.multiplyMatrices(U[re],a0),ae.setMatrixAt(re*3+ye,o0)}ae.instanceMatrix.needsUpdate=!0}}Pe(0);function He(q,re,me){Be.position.set(me.x+we.x*200,me.y+we.y*200,me.z+we.z*200),Be.target.position.set(me.x,me.y,me.z),Ae.position.set(me.x,0,me.z);for(let ye=0;ye<B;ye++)I.setY(ye,.35*Math.sin(X[ye]*.02+re*.8)+.25*Math.cos($[ye]*.017-re*.6));I.needsUpdate=!0,Pe(re)}function Ge(){n.remove(ce),ce.traverse(q=>{if(q.geometry&&q.geometry.dispose(),q.material){let re=Array.isArray(q.material)?q.material:[q.material];for(let me of re)me.dispose()}}),Be.shadow.map&&Be.shadow.map.dispose(),ce.clear(),n.fog===N&&(n.fog=qe??null),n.background===A&&(n.background=Fe??null)}return n.add(ce),{group:ce,sun:Be,update:He,dispose:Ge,heightAt:E}}var ac=[.62,.6,.55],Fs=[.5,.49,.45],df=[.72,.3,.18],h0=[.6,.24,.15],pf=[.16,.2,.28],hT=[.2,.38,.3],f0=[.36,.25,.16],go=[[.1,.27,.08],[.14,.34,.1],[.07,.2,.06],[.2,.42,.12]],fr=[[.93,.84,.62],[.9,.74,.5],[.94,.9,.8],[.88,.66,.5]],vn=(n,e,t)=>{let i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)};function oc(n,e,t,i){let s=i*3+1,r=Math.ceil(t/2);return $n(e+2,s+r+1,t+2,1,(o,a,l)=>{let c=o-1,u=l-1;if(a<s){if(c<0||u<0||c>=e||u>=t)return null;if(!(c===0||u===0||c===e-1||u===t-1))return a===s-1?n:null;let d=c===0||c===e-1?u:c,g=c===0||c===e-1?t:e;return a%3===2&&d%3===1&&d<g-1?pf:a%3===2&&d%3===2&&d<g-1&&vn(c,a,u)>.45?hT:a===0?Fs:n}let h=a-s;return u>=h-1&&u<=t-h&&h<=r?(c+h)%2?df:h0:null},.14)}function fT(n){return $n(7,23,7,1,(i,s,r)=>{let o=i-1,a=r-1;if(s<17)return o<0||a<0||o>=5||a>=5?null:o===0||a===0||o===4||a===4?(s===6||s===11||s===14)&&(o===2||a===2)?pf:s===0?Fs:n:s===16?n:null;let l=s-17;return i>=l&&i<=6-l&&r>=l&&r<=6-l?(i+r)%2?df:h0:null},.14)}function dT(n){let r=[];for(let o=0;o<6;o++)r.push([11+(vn(n,o,1)-.5)*9,13+vn(n,o,2)*6,11+(vn(n,o,3)-.5)*9,3.6+vn(n,o,4)*2.4]);return $n(22,24,22,.7,(o,a,l)=>{if(a<12&&Math.abs(o-11+.5)<1.3&&Math.abs(l-11+.5)<1.3)return f0;for(let c of r){let u=o-c[0],h=(a-c[1])*1.25,f=l-c[2];if(u*u+h*h+f*f<c[3]*c[3])return go[Math.floor(vn(o,a,l)*go.length)]}return null},.22)}function pT(){return $n(14,16,8,.5,(n,e,t)=>{let s=5+Math.floor((n-1)/2)*1.6;return n===0?e<5?(e+t)%3?ac:Fs:null:n>=1&&n<13&&e<s?e>=s-1?[.42,.42,.44]:Fs:n===13&&e<15&&(t===0||t===7)?[.16,.17,.2]:null},.12)}function ff(n,e){let r=e-3-9;return $n(n,e+2,5,1,(o,a,l)=>{let c=o%22,u=a>=e&&(l===0||l===4);if(a>=e)return u?Fs:null;if(a>=e-2)return(o+a+l)%3?ac:Fs;if(c<4)return(o+a+l)%4?ac:Fs;if(a<r)return null;let h=c-4-9+.5,f=a-r;return h*h+f*f>81?(o+a+l)%3?ac:Fs:null},.14)}function mT(n){return $n(6,4,6,.5,(t,i,s)=>{let r=t-3+.5,o=s-6/2+.5,a=(i-.8)*1.5,l=2.5+(vn(t+n,i,s)-.5)*1.2;return r*r+a*a+o*o<l*l?go[Math.floor(vn(t,i+n,s)*go.length)]:null},.22)}function gT(){let t=[[.12,.3,.14],[.15,.36,.16],[.1,.25,.12]];return $n(6,20,6,.6,(i,s,r)=>{let o=i-3+.5,a=r-6/2+.5;if(s<2)return Math.abs(o)<.6&&Math.abs(a)<.6?f0:null;let l=(s-2)/18,c=2.6*Math.sin(Math.PI*Math.min(1,.18+l*.82))**.7*(1-l*.55)+.3;return o*o+a*a<c*c?t[Math.floor(vn(i,s,r)*3)]:null},.2)}function u0(n){let r=(a,l)=>{let c=(a-15+.5)/15,u=(l-15+.5)/(30/2),h=Math.hypot(c,u)+(vn(Math.floor(a/3)+n,0,Math.floor(l/3))-.5)*.28,f=Math.max(0,Math.min(1,(.95-h)/.16)),d=14+Math.floor(vn(Math.floor(a/5),n,Math.floor(l/5))*3)*2;return Math.floor(d*f*f*(3-2*f))},o=[];for(let a=0;a<5;a++){let l=Math.floor(15+(vn(n,a,1)-.5)*14),c=Math.floor(15+(vn(n,a,2)-.5)*14);o.push([l,c,r(l,c),fr[Math.floor(vn(n,a,3)*fr.length)],a===0?7:3])}return $n(30,26,30,1.6,(a,l,c)=>{let u=r(a,c);for(let[d,g,x,m,p]of o){let S=Math.abs(a-d),M=Math.abs(c-g),y=p>3?1:2;if(S<=y&&M<=1&&l>=x&&l<x+p)return l===x+p-2&&S!==y&&M===1?pf:m;if(S<=y&&M<=1-(l-x-p)&&l>=x+p&&l<x+p+2)return df}if(l>=u)return null;if(l===u-1)return vn(a,5,c)>.75?go[0]:[.36,.56,.2];let h=l%5===0?.86:1,f=.93+.14*vn(Math.floor(a/2),l,Math.floor(c/2));return vn(a,l,c)>.965?go[2]:[.74*h*f,.71*h*f,.64*h*f]},.1)}function hr(n,e,t){let i=new Sn(n,e,t.length),s=new je,r=new rn,o=new H,a=new H,l=new H(0,1,0);return t.forEach((c,u)=>{r.setFromAxisAngle(l,c.ry||0),o.set(c.sx??c.s??1,c.sy??c.s??1,c.sz??c.s??1),a.set(c.x,c.y,c.z),s.compose(a,r,o),i.setMatrixAt(u,s),c.color&&i.setColorAt(u,c.color)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,i}function xT(){if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=1024,n.height=192;let e=n.getContext("2d");e.fillStyle="#f2efe8",e.fillRect(0,0,1024,192),e.fillStyle="#d6202a";for(let i of[0,880])for(let s=0;s<2;s++)e.beginPath(),e.moveTo(i+s*72,192),e.lineTo(i+s*72+36,192),e.lineTo(i+s*72+108,0),e.lineTo(i+s*72+72,0),e.fill();e.fillStyle="#23262e",e.font='italic 900 118px "Arial Narrow", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("POLYGON RUSH",512,104);let t=new ii(n);return t.colorSpace=Rt,t.anisotropy=8,t}function d0(n,e,t,i){let s=new ht;s.name="scenery";let r=[],o=()=>{let L=new st({vertexColors:!0,roughness:.9,metalness:0});return r.push(L),L},a=(L,O)=>{O.length&&(r.push(L),s.add(hr(L,o(),O)))},l={x:0,y:0,z:0,heading:0},c=n.length,u=L=>!!Is(n,(L%c+c)%c,"tunnel"),h=L=>n.pts[Math.floor((L%c+c)%c/n.step)%n.pts.length].width,f=(L,O)=>{let D=1/0;for(let Y=0;Y<n.pts.length;Y+=3){let V=n.pts[Y],J=(V.x-L)*(V.x-L)+(V.z-O)*(V.z-O);J<D&&(D=J)}return Math.sqrt(D)},d=(L,O)=>{let D=Math.floor(L/n.step);for(let Y=0;Y<O/n.step;Y+=4)if(Math.abs(n.pts[(D+Y)%n.pts.length].curv)>.004)return!1;return!u(L)&&!u(L+O/2)&&!u(L+O)},g=[[24,22,-1]];for(let L=380;L<c-220&&g.length<4;L+=70)d(L-10,80)&&(g.push([L,14,t.sign()]),L+=420);let x=[],m=[],p=[],S=[14032938,2777046,15909424,15921906,2793562,9060290,15235614,2042436],M=L=>g.some(([O,D])=>L>O-12&&L<O+D*4+12);for(let[L,O,D]of g)for(let Y=0;Y<O;Y++){let V=L+Y*4,J=D*(h(V)/2+6+.6);It(n,V,J,l);let oe=l.heading+D*Math.PI/2,de=Math.sin(l.heading),ve=Math.cos(l.heading),ce=-D*ve,ie=D*de;x.push({x:l.x+ce*3.5,y:l.y-.3,z:l.z+ie*3.5,ry:oe});for(let Q=0;Q<6;Q++)for(let ee=0;ee<4;ee++){if(t.next()<.18)continue;let I=-1.6+ee*1.05+t.range(-.15,.15),B=1+Q*1,X=l.x+ce*B+de*I,$=l.z+ie*B+ve*I,pe=l.y-.3+2.5+Q*.8,we=new Re(t.pick(S));m.push({x:X,y:pe+.4,z:$,ry:l.heading,sx:.5,sy:.8,sz:.36,color:we}),p.push({x:X,y:pe+1,z:$,ry:l.heading,sx:.36,sy:.36,sz:.36,color:new Re(t.pick([15317386,13208414,9067066,15847334]))}),m.push({x:X-ce*.12,y:pe-.1,z:$-ie*.12,ry:l.heading,sx:.46,sy:.3,sz:.5,color:new Re(t.pick([2042436,2829099,3820138,5916210]))}),p.push({x:X,y:pe+1.22,z:$,ry:l.heading,sx:.4,sy:.12,sz:.4,color:new Re(t.pick([2759698,1118481,14032938,15909424,6965802,15921906]))}),t.next()<.22&&m.push({x:X+de*.32,y:pe+1.05,z:$+ve*.32,ry:l.heading,sx:.14,sy:.6,sz:.14,color:we})}}if(a(pT(),x),m.length){let L=new un(1,1,1);r.push(L);let O=new st({roughness:.85});r.push(O),s.add(hr(L,O,m),hr(L,O,p));let D=x.map(Y=>({x:Y.x,y:Y.y+8.2,z:Y.z,ry:Y.ry,sx:8,sy:.4,sz:4.05,color:new Re(2303534)}));s.add(hr(L,O,D))}let y=xT(),T=new st({map:y,color:y?16777215:15921128,roughness:.7,side:Pt});r.push(T),y&&r.push(y);let b=new zn(1,1);r.push(b);let v=[],w=(L,O)=>{if(u(L))return;let D=O*(h(L)/2+6-.22);It(n,L,D,l),v.push({x:l.x,y:l.y+.52,z:l.z,ry:l.heading+(O<0?-Math.PI/2:Math.PI/2),sx:9,sy:.92,sz:1})};for(let L=120;L<240;L+=13)w(L,-1);for(let L=30;L<110;L+=13)w(L,1);for(let L=400;L<c-80;L+=260)w(L,-1),w(L+13,-1),w(L+120,1);if(v.length){let L=hr(b,T,v);L.castShadow=!1,s.add(L)}let _=[[],[],[]];for(let L=130;L<c-20;L+=t.range(13,28)){if(M(L)||u(L)||u(L+12)||u(L-12))continue;let D=(t.next()<.82?-1:1)*(h(L)/2+6+t.range(3.4,6.5));It(n,L,D,l);let Y=i?i(l.x,l.z):l.y;Y<1.5||_[t.int(0,2)].push({x:l.x,y:Y-.2,z:l.z,ry:t.range(0,6.28),s:t.range(1.3,2.05)})}if(_.forEach((L,O)=>a(dT(11+O*7),L)),i){let L=[];for(let J=200;J<c-100;J+=45)for(let oe of[-1,1]){let de=oe*t.range(70,150);It(n,J,de,l);let ve=i(l.x,l.z);ve>l.y+6&&ve>6&&f(l.x,l.z)>55&&L.push({x:l.x,z:l.z,y:ve,score:ve-l.y+t.range(0,4)})}L.sort((J,oe)=>oe.score-J.score);let O=[];for(let J of L){if(O.length>=4)break;O.every(oe=>Math.hypot(oe.x-J.x,oe.z-J.z)>220)&&O.push(J)}let D=[{geo:oc(fr[0],8,7,2),items:[]},{geo:oc(fr[1],10,7,3),items:[]},{geo:oc(fr[2],7,6,2),items:[]},{geo:oc(fr[3],9,8,3),items:[]}],Y=[],V=[];for(let J of O){for(let oe=0;oe<2;oe++){let de=J.x+t.range(-12,12),ve=J.z+t.range(-12,12);f(de,ve)<45||(Y.push({x:de,y:i(de,ve)-.5,z:ve,ry:t.int(0,3)*Math.PI/2}),V.push([de,ve]))}for(let oe=0;oe<60&&D.reduce((de,ve)=>de+ve.items.length,0)<O.length*22;oe++){let de=t.range(0,6.28),ve=t.range(8,60),ce=J.x+Math.cos(de)*ve,ie=J.z+Math.sin(de)*ve,Q=i(ce,ie);Q<3||f(ce,ie)<42||V.some(ee=>Math.hypot(ee[0]-ce,ee[1]-ie)<12)||(V.push([ce,ie]),t.pick(D).items.push({x:ce,y:Q-.5,z:ie,ry:t.int(0,3)*Math.PI/2}))}}for(let J of D)a(J.geo,J.items);a(fT(fr[2]),Y)}let E=[[],[]];for(let L=115;L<c-10;L+=t.range(4.5,9))if(!u(L)){if(t.next()<.3){L+=t.range(20,60);continue}for(let O of[-1,1]){if(t.next()<.35)continue;let D=O*(h(L)/2+6+t.range(1.4,2.6));It(n,L,D,l),E[t.int(0,1)].push({x:l.x,y:l.y-.5,z:l.z,ry:t.range(0,6.28),s:t.range(.8,1.4)})}}E.forEach((L,O)=>a(mT(3+O*5),L));let R=[];for(let L=160;L<c-60;L+=t.range(120,220)){let O=t.sign(),D=t.int(5,9);for(let Y=0;Y<D;Y++){let V=L+Y*4.2;if(u(V))continue;It(n,V,O*(h(V)/2+6+4.2),l);let J=i?i(l.x,l.z):l.y;J<1.5||R.push({x:l.x,y:J-.2,z:l.z,ry:t.range(0,6.28),s:t.range(.85,1.2)})}}if(a(gT(),R),i){let L=[[],[],[]],O=[];for(let D=150;D<c-50;D+=t.range(120,220))for(let Y of[-1,1]){if(t.next()<.3)continue;It(n,D,Y*t.range(72,125),l);let V=i(l.x,l.z);V<1||f(l.x,l.z)<56||O.some(J=>Math.hypot(J[0]-l.x,J[1]-l.z)<70)||(O.push([l.x,l.z]),L[t.int(0,2)].push({x:l.x,y:V-3,z:l.z,ry:t.range(0,6.28),s:t.range(1.2,1.9)}))}L.forEach((D,Y)=>a(u0(17+Y*13),D))}{let L=[],O=[],D=new Re(12172998),Y=new Re(7172730);for(let V=0;V<c;V+=4){if(u(V)||M(V))continue;let J=h(V)/2+6-.75;It(n,V,J,l);let oe=l.x,de=l.y,ve=l.z,ce=l.heading;L.push({x:oe,y:de+.4,z:ve,ry:ce,sx:.12,sy:.8,sz:.12,color:Y}),It(n,V+4,h(V+4)/2+6-.75,l);let ie=(oe+l.x)/2,Q=(de+l.y)/2,ee=(ve+l.z)/2,I=Math.hypot(l.x-oe,l.z-ve)+.05,B=Math.atan2(l.x-oe,l.z-ve);for(let X of[.42,.72])O.push({x:ie,y:Q+X,z:ee,ry:B,sx:.07,sy:.2,sz:I,color:D})}if(L.length){let V=new un(1,1,1),J=new st({roughness:.35,metalness:.85});r.push(V,J),s.add(hr(V,J,L),hr(V,J,O))}}if(i){let L=[];for(let V=0;V<400&&L.length<16;V++){let J=t.range(n.bounds.minX-420,n.bounds.maxX+420),oe=t.range(n.bounds.minZ-420,n.bounds.maxZ+420),de=f(J,oe);i(J,oe)>-3||de<90||de>520||L.some(ve=>Math.hypot(ve.x-J,ve.z-oe)<60)||L.push({x:J,y:-.3,z:oe,ry:t.range(0,6.28),s:t.range(.9,1.5)})}let O=[.93,.93,.9],D=[.98,.97,.93],Y=[.55,.36,.2];a($n(5,18,14,.7,(V,J,oe)=>{let de=Math.abs(oe-6.5),ve=Math.abs(V-2);return J<2?ve<=2-(J===0?1:0)-(de>5?1:0)&&de<7-(J===0?1:0)?J===1&&ve<2?Y:O:null:V===2&&oe===7?[.3,.26,.22]:V===2&&oe>7&&oe<13&&J<17-(oe-7)*2.6||V===2&&oe<7&&oe>1&&J<14-(7-oe)*2.4?D:null},.06),L)}{It(n,0,0,l);let L=l.x,O=l.y,D=l.z,Y=l.heading,V=Math.sin(Y),J=Math.cos(Y),oe=-J,de=V,ve=(ie,Q,ee)=>f(ie,Q)>ee,ce=!1;for(let ie of[430,500,380,580,660]){for(let Q of[70,130,0,-70,190,-140]){if(ce)break;let ee=L+V*ie+oe*Q,I=D+J*ie+de*Q;if(!ve(ee,I,85))continue;let B=i?Math.max(-2,i(ee,I)):O;a(u0(101),[{x:ee,y:B-3,z:I,ry:Y+.6,s:2.3}]);let X=ee-V*95-oe*30,$=I-J*95-de*30;if(ve(X,$,45)&&ve(X+oe*90,$+de*90,40)&&ve(X-oe*90,$-de*90,40)){let pe=i?Math.max(-1,i(X,$)):O;a(ff(198,24),[{x:X,y:Math.min(pe,O)-5,z:$,ry:Y}])}ce=!0}if(ce)break}}for(let L of[1,-1]){let O=!0;for(let Y of[210,270,330,390])It(n,Y,L*62,l),f(l.x,l.z)<46&&(O=!1);if(!O||L<0)continue;It(n,300,L*62,l);let D=i?i(l.x,l.z):l.y;a(ff(198,22),[{x:l.x,y:D-4,z:l.z,ry:l.heading-Math.PI/2}]);break}let F=-1,k=-1/0;for(let L=300;L<c-300;L+=40){let O=Math.floor(L/n.step),D=0;for(let V=0;V<60;V+=6)D+=Math.abs(n.pts[(O+V)%n.pts.length].curv);let Y=-D*400+t.range(0,1)-(u(L)||u(L+100)?100:0);Y>k&&(k=Y,F=L)}if(F>0)for(let L of[1,-1]){It(n,F+90,L*95,l);let O=i?i(l.x,l.z):l.y;if(O<2)continue;a(ff(198,20),[{x:l.x,y:Math.min(O,l.y)-4,z:l.z,ry:l.heading-Math.PI/2}]);break}return{group:s,dispose(){for(let L of r)L.dispose?.()}}}function vT(n,e){let t=n.length,i=new Float64Array(t),s=0;for(let r=0;r<t;r++){let o=0;s=0;for(let a=Math.max(0,r-e);a<=Math.min(t-1,r+e);a++)s+=n[a],o++;i[r]=s/o}return i}function mf(n){let e=n.x.length,t=n.step,i=n.x,s=n.y,r=n.z,o=new Float64Array(e),a=new Float64Array(e),l=new Float64Array(e);for(let v=0;v<e;v++){let w=Math.max(0,v-1),_=Math.min(e-1,v+1),E=i[_]-i[w],R=r[_]-r[w],F=Math.hypot(E,R)||1e-9;o[v]=E/F,a[v]=R/F,l[v]=(s[_]-s[w])/F}let c=new Float64Array(e);for(let v=1;v<e-1;v++){let w=-a[v],_=o[v];c[v]=((o[v+1]-o[v-1])*w+(a[v+1]-a[v-1])*_)/(2*t)}c[0]=c[1],c[e-1]=c[e-2];let u=vT(c,12),h=new Float64Array(e);for(let v=0;v<e;v++)h[v]=Math.min(95,Math.sqrt(30/Math.max(1e-6,Math.abs(u[v]))));for(let v=e-2;v>=0;v--)h[v]=Math.min(h[v],Math.sqrt(h[v+1]**2+80*t));for(let v=1;v<e;v++)h[v]=Math.min(h[v],Math.sqrt(h[v-1]**2+40*t));let f=new Array(e),d=1/0,g=-1/0,x=1/0,m=-1/0,p=1/0,S=0;for(let v=0;v<e;v++){let w=Math.hypot(1,l[v]);f[v]={s:v*t,x:i[v],y:s[v],z:r[v],tx:o[v]/w,ty:l[v]/w,tz:a[v]/w,rx:-a[v],rz:o[v],width:n.width,curv:u[v],vmax:h[v],slope:l[v]},i[v]<d&&(d=i[v]),i[v]>g&&(g=i[v]),r[v]<x&&(x=r[v]),r[v]>m&&(m=r[v]);let _=1/Math.max(1e-9,Math.abs(u[v]));_<p&&(p=_),Math.abs(l[v])>S&&(S=Math.abs(l[v]))}let M=[],y=[];for(let v of n.features)v.type==="tunnel"?M.push({type:"tunnel",s0:v.s0,s1:v.s1,name:v.name}):y.push({s0:v.s0,s1:v.s1,name:v.name});let T=(e-1)*t,b=0;for(let v=0;v<e;v++)b+=t/Math.max(5,h[v]);return{seed:"REAL:"+n.id,attempts:1,open:!0,real:n,raceStart:n.raceStart||0,raceEnd:Math.min(n.raceEnd||T,T),length:T,step:t,count:e,pts:f,features:M,bridges:y,bounds:{minX:d,maxX:g,minZ:x,maxZ:m},stats:{minRadius:p,maxSlope:S,lapTimeEstimate:b,corners:0}}}var p0=["torre","castello","borgo","chiesa","agrumeto","peschereccio","casello"];function yT(n,e,t){let i=[],s=n.length,r=c=>{let u=1/0,h=0;for(let f=0;f<n.count;f+=5){let d=n.pts[f],g=(d.x-c.x)**2+(d.z-c.z)**2;g<u&&(u=g,h=f)}return{dist:Math.sqrt(u),q:n.pts[h]}},o={},a=(c,u)=>(o[c]=(o[c]||0)+1)<=u,l=e.places.map(c=>({p:c,n:r(c)})).filter(c=>c.n.dist<1600&&c.n.q.s>150&&c.n.q.s<s-150).sort((c,u)=>c.n.dist-u.n.dist);for(let{p:c,n:u}of l)i.some(h=>h.x!==void 0&&Math.hypot(h.x-c.x,h.z-c.z)<250)||(c.kind==="castle"?/^torre/i.test(c.name)?a("torre",2)&&i.push({prop:"torre",x:c.x,z:c.z,height:48,label:c.name}):/castel|rocca|forte|fort/i.test(c.name)&&a("castello",3)&&i.push({prop:"castello",x:c.x,z:c.z,width:170,label:c.name}):c.kind==="place"&&(c.rank==="village"||c.rank==="town"||c.rank===void 0)&&(t(c.x,c.z)-u.q.y>120&&u.dist>250?a("borgo",3)&&i.push({prop:"borgo",x:c.x,z:c.z,width:300}):u.dist>90&&u.dist<450&&a("chiesa",3)&&i.push({prop:"chiesa",x:c.x,z:c.z,width:46})));for(let c=900,u=0;c<s-600;c+=1300,u++){let h=n.pts[Math.round(c/n.step)];for(let f of[1,-1]){let d=f*560;if(t(h.x+h.rx*d,h.z+h.rz*d)<=0&&t(h.x+h.rx*d*1.3,h.z+h.rz*d*1.3)<=0)u%2===0&&i.push({prop:"peschereccio",s:c,d:d+u%3*40*f,width:34,sea:!0});else if(u%2===1){let g=f*78,x=t(h.x+h.rx*g,h.z+h.rz*g);x>1&&Math.abs(x-h.y)<14&&i.push({prop:"agrumeto",s:c,d:g,width:70})}}}return i}function m0({track:n,data:e,baked:t,heightAt:i,clearance:s}){let r=new ht;r.name="real-props";let o=[],a=[];if(!t)return{group:r,placed:o,skipped:a,dispose(){}};let l=new si({vertexColors:!0}),c=new Map,u=n.length,h=(f,d)=>{let g=1/0,x=0;for(let m=0;m<n.count;m+=2){let p=n.pts[m],S=(p.x-f)**2+(p.z-d)**2;S<g&&(g=S,x=m)}return{q:n.pts[x],dist:Math.sqrt(g)}};for(let f of yT(n,e,i)){let d=t[f.prop];if(!d?.cells?.length)continue;let g=d._ext;if(!g){let w=[1/0,1/0,1/0],_=[-1/0,-1/0,-1/0];for(let E=0;E<d.cells.length;E+=4)for(let R=0;R<3;R++)w[R]=Math.min(w[R],d.cells[E+R]),_[R]=Math.max(_[R],d.cells[E+R]+1);g=d._ext=[_[0]-w[0],_[1]-w[1],_[2]-w[2]]}let x=f.height?f.height/g[1]:f.width/Math.max(g[0],g[2]),m=Math.hypot(g[0],g[2])*x/2,p,S;if(f.x!==void 0)p=f.x,S=f.z;else{let w=n.pts[Math.max(0,Math.min(n.count-1,Math.round(f.s/n.step)))];p=w.x+w.rx*f.d,S=w.z+w.rz*f.d}let M=h(p,S);if(M.dist-m<s){if(f.x===void 0||M.dist<1){a.push(f.prop+" : trop pr\xE8s de la route");continue}let w=(m+s+2)/M.dist;if(p=M.q.x+(p-M.q.x)*w,S=M.q.z+(S-M.q.z)*w,M=h(p,S),M.dist-m<s){a.push(f.prop+" : trop pr\xE8s de la route");continue}}let y;if(f.sea){if(i(p,S)>0){a.push(f.prop+" : pas en mer");continue}y=-.12*x*g[1]}else{y=1/0;for(let[w,_]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]])y=Math.min(y,i(p+w*m*.6,S+_*m*.6));y=Math.max(y,.2)-.5}let T=f.prop+"@"+x.toFixed(3),b=c.get(T);b||c.set(T,b=Qm(d.cells,x));let v=new ot(b,l);v.name="prop-"+f.prop,v.position.set(p,y,S),v.rotation.y=Math.atan2(M.q.x-p,M.q.z-S),v.updateMatrix(),v.matrixAutoUpdate=!1,r.add(v),o.push({prop:f.prop,label:f.label||null,s:M.q.s,dist:M.dist,x:p,y,z:S,size:x})}return{group:r,placed:o,skipped:a,dispose(){l.dispose();for(let f of c.values())f.dispose()}}}var gf=.12,_T=8200,MT=(n,e,t=1.08,i=1.45)=>{let s=(n>>16&255)/255,r=(n>>8&255)/255,o=(n&255)/255,a=.3*s+.59*r+.11*o,l=(.38+(a-.38)*1.35)/Math.max(a,.001);s*=l,r*=l,o*=l,a=.3*s+.59*r+.11*o,s=Math.min(1,Math.max(0,(a+(s-a)*i)*t)),r=Math.min(1,Math.max(0,(a+(r-a)*i)*t)),o=Math.min(1,Math.max(0,(a+(o-a)*i)*t)),e[0]=s,e[1]=r,e[2]=o};function pa(n,e,{seaCut:t=.25,yOffset:i=0,tint:s=null}={}){let{cell:r,ix:o,iz:a,h:l,c}=n,u=o.length,h=1/0,f=-1/0,d=1/0,g=-1/0;for(let D=0;D<u;D++)o[D]<h&&(h=o[D]),o[D]>f&&(f=o[D]),a[D]<d&&(d=a[D]),a[D]>g&&(g=a[D]);let x=u?g-d+1:0,m=new Float32Array(u?(f-h+1)*x:0).fill(NaN),p=(D,Y)=>D<h||D>f||Y<d||Y>g?-1:(D-h)*x+(Y-d),S={get(D){if(D<0)return;let Y=m[D];return Y===Y?Y:void 0}},M=new Float32Array(u);for(let D=0;D<u;D++)M[D]=Math.floor(l[D]/10/e)*e,m[(o[D]-h)*x+(a[D]-d)]=M[D];let y=[1,-1,0,0],T=[0,0,1,-1],b=new Float32Array(u*4),v=new Uint8Array(u),w=0;for(let D=0;D<u;D++)if(!(l[D]/10<=t)){v[D]=1,w++;for(let Y=0;Y<4;Y++){let V=S.get(p(o[D]+y[Y],a[D]+T[Y]));V!==void 0&&V<M[D]?(b[D*4+Y]=V,w++):b[D*4+Y]=NaN}}let _=new Float32Array(w*18),E=new Float32Array(w*18),R=new Float32Array(w*18),F=0,k=[0,0,0],L=(D,Y,V,J,oe,de,ve,ce,ie,Q,ee,I,B,X,$,pe,we,Ae)=>{_[F]=D,_[F+1]=Y,_[F+2]=V,_[F+3]=J,_[F+4]=oe,_[F+5]=de,_[F+6]=ve,_[F+7]=ce,_[F+8]=ie,_[F+9]=D,_[F+10]=Y,_[F+11]=V,_[F+12]=ve,_[F+13]=ce,_[F+14]=ie,_[F+15]=Q,_[F+16]=ee,_[F+17]=I;for(let G=0;G<18;G+=3)E[F+G]=B,E[F+G+1]=X,E[F+G+2]=$,R[F+G]=pe,R[F+G+1]=we,R[F+G+2]=Ae;F+=18};for(let D=0;D<u;D++){if(!v[D])continue;let Y=M[D];MT(c[D],k),s&&s(k,(o[D]+.5)*r,(a[D]+.5)*r,Y);let V=.92+.16*((o[D]*73856093^a[D]*19349663)>>>0)/4294967295,J=k[0]*V,oe=k[1]*V,de=k[2]*V,ve=o[D]*r,ce=a[D]*r,ie=ve+r,Q=ce+r,ee=Y+i;L(ve,ee,ce,ve,ee,Q,ie,ee,Q,ie,ee,ce,0,1,0,J,oe,de);let I=.2+.45*J,B=.19+.42*oe,X=.17+.38*de,$=b[D*4];$===$&&L(ie,$+i,Q,ie,ee,Q,ie,ee,ce,ie,$+i,ce,1,0,0,I,B,X),$=b[D*4+1],$===$&&L(ve,$+i,ce,ve,ee,ce,ve,ee,Q,ve,$+i,Q,-1,0,0,I,B,X),$=b[D*4+2],$===$&&L(ve,$+i,Q,ve,ee,Q,ie,ee,Q,ie,$+i,Q,0,0,1,I,B,X),$=b[D*4+3],$===$&&L(ie,$+i,ce,ie,ee,ce,ve,ee,ce,ve,$+i,ce,0,0,-1,I,B,X)}let O=new gt;return O.setAttribute("position",new mt(_,3)),O.setAttribute("normal",new mt(E,3)),O.setAttribute("color",new mt(R,3)),O.computeBoundingSphere(),{geo:O,heights:S,key:p,q:M}}function es(n,e,t){let i=new Sn(n,e,t.length),s=new je,r=new rn,o=new H,a=new H,l=new H(0,1,0);return t.forEach((c,u)=>{r.setFromAxisAngle(l,c.ry||0),o.set(c.sx??1,c.sy??1,c.sz??1),a.set(c.x,c.y,c.z),s.compose(a,r,o),i.setMatrixAt(u,s),c.color&&i.setColorAt(u,c.color)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.frustumCulled=!1,i}function bT(n){if(typeof document>"u")return null;let e=document.createElement("canvas");e.width=512,e.height=192;let t=e.getContext("2d");t.fillStyle="#0c7a43",t.fillRect(0,0,512,192),t.strokeStyle="#ffffff",t.lineWidth=8,t.strokeRect(8,8,496,176),t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.font="bold 62px Arial, Helvetica, sans-serif",t.fillText(n[0],256,n[1]?70:96,470),n[1]&&(t.font="bold 44px Arial, Helvetica, sans-serif",t.fillText(n[1],256,136,470));let i=new ii(e);return i.colorSpace=Rt,i.anisotropy=8,i}function g0(n,e){e==="near"?n._near=n._near||pa(n.near,1):e==="mid"&&(n._mid=n._mid||pa(n.mid,4,{yOffset:-3}))}function x0(n,e,t,i){let s=e.real,r=new ht;r.name="environment";let o=[],a=se=>(o.push(se),se),l=!!t.night,c=()=>cr(a(new st({vertexColors:!0,roughness:.95,metalness:0,side:Pt})),1,1),u=s._near||pa(s.near,1);s._near=null;let h=new ot(a(u.geo),c());h.receiveShadow=!0,h.name="real-terrain-near";let f=s._mid||pa(s.mid,4,{yOffset:-3});s._mid=null;let d=new ot(a(f.geo),cr(a(new st({vertexColors:!0,roughness:1,side:Pt})),8,.7));d.name="real-terrain-mid";let g=new Re(t.skyHorizon),x=(e.bounds.minX+e.bounds.maxX)/2,m=(e.bounds.minZ+e.bounds.maxZ)/2,p=pa(s.far,60,{tint:(se,be,ne,Me)=>{let fe=Math.hypot(be-x,ne-m),ge=Math.min(.82,1-Math.exp(-fe/3e4)),W=Me>2300?.5:0;se[0]=(se[0]+(1-se[0])*W)*(1-ge)+g.r*ge,se[1]=(se[1]+(1-se[1])*W)*(1-ge)+g.g*ge,se[2]=(se[2]+(1-se[2])*W)*(1-ge)+g.b*ge}}),S=new ot(a(p.geo),a(new Yt({vertexColors:!0,fog:!1,side:Pt})));S.name="real-terrain-far",S.scale.setScalar(gf),S.frustumCulled=!1,S.renderOrder=-5,r.add(h,d,S);let M=(se,be)=>{let ne=s.near.cell,Me=u.heights.get(u.key(Math.floor(se/ne),Math.floor(be/ne)));if(Me!==void 0)return Me;let fe=s.mid.cell,ge=f.heights.get(f.key(Math.floor(se/fe),Math.floor(be/fe)));return ge!==void 0?ge-3:-5},y=new ot(a(new zn(6e4,6e4)),a(new st({color:t.seaColor,roughness:.16,metalness:.1}))),T=t0(y.material);y.rotation.x=-Math.PI/2,y.position.y=.05,y.name="real-sea",r.add(y);let b=new H(...t.sunDir).normalize(),v=a(new vt({side:en,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new Re(t.skyTop)},uHor:{value:new Re(t.skyHorizon)},uSun:{value:new Re(t.sunColor)},uSunDir:{value:b}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uTop, uHor, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = mix(uHor, uTop, pow(max(d.y, 0.0), 0.5));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 600.0) * 3.0 + pow(s, 14.0) * 0.25);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`})),w=new ot(a(new ws(_T,32,16)),v);w.renderOrder=-10,w.frustumCulled=!1,r.add(w);let _=n.fog,E=n.background;n.fog=new no(t.fogColor,(t.fogDensity||5e-4)*.3),n.background=new Re(t.skyHorizon);let R=new ao(t.hemiSky,t.hemiGround,t.hemiIntensity),F=new Ai(t.sunColor,t.sunIntensity);F.castShadow=!0,F.shadow.mapSize.set(2048,2048);let k=F.shadow.camera;k.left=-90,k.right=90,k.top=90,k.bottom=-90,k.near=1,k.far=500,F.shadow.bias=-5e-4,r.add(R,F,F.target);let L=s.buildings,O=[15983808,15321498,16117730,14924172,14472128,15784368,13620956],D=[11884346,11030070,14275268,13222064,9390646],Y=[],V=[],J=60,oe=new Map;for(let se=0;se<e.count;se+=3){let be=e.pts[se],ne=Math.floor(be.x/J)+","+Math.floor(be.z/J),Me=oe.get(ne);Me||oe.set(ne,Me=[]),Me.push(be)}let de=s.width/2+6+2,ve=(se,be,ne,Me)=>{let fe=null,ge=Math.max(ne,Me)+de;for(let W=Math.floor((se-ge)/J);W<=Math.floor((se+ge)/J);W++)for(let Te=Math.floor((be-ge)/J);Te<=Math.floor((be+ge)/J);Te++){let C=oe.get(W+","+Te);if(C)for(let U of C){let z=Math.max(0,Math.abs(U.x-se)-ne),Z=Math.max(0,Math.abs(U.z-be)-Me);z*z+Z*Z<de*de&&(fe===null||U.y<fe)&&(fe=U.y)}}return fe},ce=0,ie=0;for(let se=0;se<L.x.length;se++){let ne=(L.l[se]>0?Math.min(L.l[se],9):1+Math.floor(i.next()*3)+(L.w[se]*L.d[se]>300?1:0))*3.1,Me=Math.max(M(L.x[se],L.z[se]),.3),fe=ve(L.x[se],L.z[se],L.w[se]/2+.3,L.d[se]/2+.3);if(fe!==null){let ge=fe-3.2-Me;if(ge<3){ce++;continue}ne>ge&&(ne=ge,ie++)}Y.push({x:L.x[se],y:Me+ne/2-.5,z:L.z[se],sx:L.w[se],sy:ne+1,sz:L.d[se],color:new Re(i.pick(O))}),V.push({x:L.x[se],y:Me+ne+.35,z:L.z[se],sx:L.w[se]+.6,sy:.7,sz:L.d[se]+.6,color:new Re(i.pick(D))})}let Q=a(new un(1,1,1));if(Y.length){let se=e0(cr(a(new st({roughness:.9})),1.5,.8)),be=a(new st({roughness:.85})),ne=es(Q,se,Y),Me=es(Q,be,V);ne.name="real-buildings",ne.castShadow=!0,r.add(ne,Me)}let ee=s.trees,I=0;if(ee&&ee.x.length){let se=[],be=[],ne=new Re(7031346),Me=new Re;for(let ge=0;ge<ee.x.length;ge++){let W=ee.x[ge],Te=ee.z[ge];if(ve(W,Te,2.5,2.5)!==null)continue;let C=Math.sin(W*12.9898+Te*78.233)*43758.5453,U=ee.r?ee.r[ge]/1e3:C-Math.floor(C),z=ee.y[ge],Z=.75+.5*U;if(ee.k[ge])if(U<.55){let ae=7+6*U;be.push({x:W,y:z+ae/2+.6,z:Te,sx:1.7,sy:ae,sz:1.7,color:Me.setRGB(.1*Z,.26*Z,.13*Z).clone()})}else{let ae=6+5*U;se.push({x:W,y:z+ae/2,z:Te,sx:.7,sy:ae,sz:.7,color:ne}),be.push({x:W,y:z+ae+.9,z:Te,sx:6.5,sy:2.2,sz:6.5,color:Me.setRGB(.14*Z,.34*Z,.16*Z).clone()})}else{let ae=3+2.4*U;se.push({x:W,y:z+.9,z:Te,sx:.6,sy:1.8,sz:.6,color:ne}),be.push({x:W,y:z+1.6+ae/2,z:Te,sx:ae,sy:ae*.85,sz:ae,color:Me.setRGB(.3*Z,.44*Z,.2*Z).clone()})}}I=be.length;let fe=cr(a(new si),1.1,.9);if(se.length){let ge=es(Q,a(new si),se);ge.name="real-trunks",r.add(ge)}if(be.length){let ge=es(Q,fe,be);ge.name="real-trees",r.add(ge)}}let B={x:0,y:0,z:0,heading:0},X=s.width/2,$=new Re(12170925),pe=new Re(10131343),we=[],Ae=[];for(let se of e.bridges){for(let be=se.s0+6;be<se.s1-2;be+=34){It(e,be,0,B);let ne=M(B.x,B.z),Me=B.y-1.6-ne;Me<3||(we.push({x:B.x,y:ne+Me/2,z:B.z,ry:B.heading,sx:X*1.5,sy:Me,sz:2.4,color:pe}),we.push({x:B.x,y:B.y-1.2,z:B.z,ry:B.heading,sx:X*2+5,sy:1.2,sz:3.6,color:$}))}for(let be=se.s0;be<se.s1;be+=8){for(let ne of[-1,1])It(e,be+4,ne*(X+6+.4),B),Ae.push({x:B.x,y:B.y-.9,z:B.z,ry:B.heading,sx:.9,sy:1.8,sz:8.3,color:$});It(e,be+4,0,B),Ae.push({x:B.x,y:B.y-1.25,z:B.z,ry:B.heading,sx:X*2+12,sy:.9,sz:8.3,color:pe})}}let G=cr(a(new st({roughness:.9})),.8,.6);if(we.length){let se=es(Q,G,we);se.castShadow=!0,se.name="real-piers",r.add(se)}Ae.length&&r.add(es(Q,G,Ae));let Ve=e.length,ze=se=>!!Is(e,Math.max(0,Math.min(Ve-1,se)),"tunnel"),Be=[],Ie=[],qe=new Re(12764876),Fe=new Re(8225160),N={x:0,y:0,z:0,heading:0};for(let se=0;se<Ve-4;se+=4)if(!ze(se))for(let be of[-1,1]){let ne=be*(X+6-.7);It(e,se,ne,B),It(e,se+4,ne,N),Be.push({x:B.x,y:B.y+.4,z:B.z,ry:B.heading,sx:.12,sy:.8,sz:.12,color:Fe});let Me=Math.hypot(N.x-B.x,N.z-B.z)+.05,fe=Math.atan2(N.x-B.x,N.z-B.z);for(let ge of[.42,.72])Ie.push({x:(B.x+N.x)/2,y:(B.y+N.y)/2+ge,z:(B.z+N.z)/2,ry:fe,sx:.07,sy:.2,sz:Me,color:qe})}let A=a(new st({roughness:.35,metalness:.85}));Be.length&&r.add(es(Q,A,Be),es(Q,A,Ie));let j=m0({track:e,data:s,baked:s.props,heightAt:M,clearance:de});r.add(j.group),o.push(j);let xe=[];for(let se of s.places){if(se.kind!=="place")continue;let be=1/0,ne=0;for(let fe=0;fe<e.count;fe+=10){let ge=e.pts[fe],W=(ge.x-se.x)**2+(ge.z-se.z)**2;W<be&&(be=W,ne=fe)}let Me=Math.sqrt(be);Me<2600&&xe.push({name:se.name,s:ne*e.step,dist:Me})}xe.sort((se,be)=>se.s-be.s);let _e=a(new zn(1,1)),he=[];for(let se of xe){if(he.some(ge=>Math.abs(ge.s-se.s)<500)||se.s<120||se.s>Ve-150||ze(se.s)||ze(se.s-60))continue;he.push(se);let be=bT([se.name,se.dist>600?`${(se.dist/1e3).toFixed(1).replace(".",",")} km`:""]),ne=a(new Yt({map:be,color:be?16777215:817731,side:Pt}));be&&a(be),It(e,se.s,X+6+2.2,B);let Me=new ot(_e,ne);Me.scale.set(7.5,2.8,1),Me.position.set(B.x,B.y+5.2,B.z),Me.rotation.y=B.heading+Math.PI,r.add(Me);let fe=new ot(Q,A);fe.scale.set(.3,5.2,.3),fe.position.set(B.x,B.y+2.2,B.z),r.add(fe)}let Ce=(se,be,ne)=>{let Me=Math.sin(se*127.1+be*311.7+ne*74.7)*43758.5453;return Me-Math.floor(Me)},Le=$n(5,5,5,.5,(se,be,ne)=>{let Me=se-2,fe=ne-2,ge=(be-1.6)*1.2;if(Me*Me+ge*ge+fe*fe>5.4+Ce(se,be,ne))return null;let W=Ce(se+3,be,ne+7);return W>.72?[.92,.42,.6]:W>.62?[.96,.93,.9]:[.16,.38,.17]},.2);a(Le);let Ne=[];for(let se=60;se<Ve-20;se+=i.range(5,11)){if(ze(se)||e.bridges.some(ne=>se>ne.s0-4&&se<ne.s1+4))continue;if(i.next()<.25){se+=i.range(15,50);continue}let be=i.next()<.5?-1:1;It(e,se,be*(X+6+i.range(1.2,2.4)),B),Ne.push({x:B.x,y:B.y-.5,z:B.z,ry:i.range(0,6.28),sx:i.range(.8,1.3),sy:i.range(.8,1.3),sz:i.range(.8,1.3)})}if(Ne.length){let se=es(Le,a(new st({vertexColors:!0,roughness:.9})),Ne);se.castShadow=!0,se.name="real-oleanders",r.add(se)}n.add(r);let ke=new H;function Ee(se,be,ne){w.position.set(ne.x,0,ne.z),y.position.x=ne.x,y.position.z=ne.z,T.value=be,F.position.copy(ne).addScaledVector(b,200),F.target.position.copy(ne),ke.copy(ne),S.position.set(ke.x*(1-gf),-2,ke.z*(1-gf))}function Ue(){n.remove(r),n.fog&&n.fog!==_&&(n.fog=_||null),n.background=E||null;for(let se of o)se.dispose?.()}return{group:r,sun:F,update:Ee,dispose:Ue,heightAt:M,places:he,allPlaces:xe,buildingStats:{kept:Y.length,dropped:ce,lowered:ie},treeCount:I,props:j.placed,propsSkipped:j.skipped}}var ST=[-5,0,5],lc=[{id:"car",len:4.4,w:1.9,h:1.45,v:[31,37],lanes:[0,1,2]},{id:"van",len:5.8,w:2.1,h:2.35,v:[28,32],lanes:[1,2]},{id:"bus",len:11.5,w:2.5,h:3.3,v:[25,28],lanes:[2]},{id:"truck",len:13.5,w:2.5,h:3.8,v:[22,25],lanes:[2]}],v0=[0,0,0,0,0,1,1,2,3,3],TT=.45,ET=1,wT=1.5,AT=12,RT=5,CT=3,PT=5;function y0({rng:n,count:e=22,density:t=1}={}){let i=[];for(let h=0;h<e;h++)i.push({id:h,type:lc[0],lane:1,s:-1e9,d:0,speed:30,cruise:30,color:0,passed:!0,hitT:0});let s={vehicles:i,combo:0,comboT:0,meter:0,nearMisses:0,hits:0,events:[],density:t},r=!1;function o(h,f,d=30,g=30){let x=0;for(let m of i)m!==f&&m.s>h-d&&m.s<h+g&&(x|=1<<m.lane);return x}function a(h,f){let d=lc[v0[n.int(0,v0.length-1)]],g=o(f,h,45,45),x=d.lanes.filter(p=>!(g&1<<p));return([0,1,2].filter(p=>g&1<<p).length>=2||!x.length)&&(f+=60,x=d.lanes),h.type=d,h.lane=x[n.int(0,x.length-1)],h.d=ST[h.lane]+n.range(-.35,.35),h.cruise=h.speed=n.range(d.v[0],d.v[1]),h.color=n.int(0,7),h.s=f,h.passed=!1,h.hitT=0,f}function l(h,f=350){let d=h+f;for(let g of i)d=a(g,d)+n.range(70,190)/t;r=!0}function c(h,f,d){s.events.length=0,r||l(f.s);let g=-1/0;for(let x of i)x.s>g&&(g=x.s);for(let x of i){let m=x.cruise,p=0,S=1/0;for(let M of i){if(M===x||M.lane===x.lane)continue;let y=M.s-x.s;y>-8&&y<45&&(p|=1<<M.lane,M.speed<S&&(S=M.speed))}p===(7&~(1<<x.lane))&&(m=Math.min(m,S-.5));for(let M of i){if(M===x||M.lane!==x.lane)continue;let y=M.s-x.s-(M.type.len+x.type.len)/2;y>0&&y<25&&(m=Math.min(m,M.speed))}x.speed+=(m-x.speed)*Math.min(1,h*1.5),x.s+=x.speed*h,x.hitT>0&&(x.hitT-=h),x.s<f.s-70&&(g=a(x,Math.max(g+n.range(70,190)/t,f.s+650)))}for(let x of d){let m=x.state;for(let p of i){let S=m.s-p.s,M=m.d-p.d,y=p.type.len/2+ET,T=p.type.w/2+TT;if(Math.abs(S)<y&&Math.abs(M)<T){if(p.hitT<=0||x.isPlayer){let b=M!==0?Math.sign(M):m.d<p.d?-1:1;m.d=p.d+b*(T+.05),m.speed>p.speed*.95&&(m.speed=Math.max(p.speed*.9,m.speed*.5),m.boostT=0,p.hitT<=0&&(m.events?.push("hit"),x.isPlayer&&(s.hits++,s.combo=0,s.meter=0,s.events.push({type:"hit",vehicle:p})))),p.hitT=1.2}x.isPlayer&&(p.passed=!0)}else if(x.isPlayer&&!p.passed&&S>y&&(p.passed=!0,Math.abs(M)<T+wT&&m.speed-p.speed>AT)){s.nearMisses++,s.combo++,s.comboT=RT,s.meter++;let b=!1;s.meter>=CT&&(s.meter=0,m.boostCharges<PT&&(m.boostCharges+=1,b=!0)),s.events.push({type:"near",vehicle:p,combo:s.combo,boost:b})}}}s.comboT>0&&(s.comboT-=h,s.comboT<=0&&(s.combo=0))}function u(h){for(let f of i)f.s+=h}return Object.assign(s,{update:c,reset:l,shift:u})}var yf="wss://tracker.openwebtorrent.com",_0=[{urls:"stun:stun.cloudflare.com:3478"}],IT=4,xf=7,LT=25e3,M0=()=>{let n=crypto.getRandomValues(new Uint8Array(20)),e="";for(let t of n)e+=String.fromCharCode(t);return e},vf=n=>Array.from(n,e=>e.charCodeAt(0).toString(16).padStart(2,"0")).join("");async function DT(n){let e=new TextEncoder().encode("polygon-rush/v3/"+String(n).trim().toUpperCase()),t=new Uint8Array(await crypto.subtle.digest("SHA-1",e)),i="";for(let s of t)i+=String.fromCharCode(s);return i}function b0(n){return n.iceGatheringState==="complete"?Promise.resolve():new Promise(e=>{let t=setTimeout(e,2500);n.addEventListener("icegatheringstatechange",()=>{n.iceGatheringState==="complete"&&(clearTimeout(t),e())})})}async function S0(n,{onPeer:e,onLeave:t,onMessage:i,onStatus:s}={}){let r=await DT(n),o=M0(),a=vf(o),l=new Map,c=new Map,u=null,h=null,f=!1,d=0,g=T=>s?.(T);function x(T,b,v){let w=l.get(T);if(w&&w.ch.readyState==="open"){try{b.close()}catch{}return}let _={id:T,pc:b,ch:v,send(R){v.readyState==="open"&&v.send(JSON.stringify(R))}};l.set(T,_),v.onmessage=R=>{let F;try{F=JSON.parse(R.data)}catch{return}F&&typeof F=="object"&&i?.(_,F)};let E=()=>{l.get(T)===_&&(l.delete(T),t?.(_));try{b.close()}catch{}};v.onclose=E,b.addEventListener("connectionstatechange",()=>{["failed","closed","disconnected"].includes(b.connectionState)&&E()}),e?.(_)}function m(T,b,v){b.readyState==="open"?x(v,T,b):b.onopen=()=>x(v,T,b)}async function p(){let T=[];for(let b=0;b<IT&&l.size+b<xf;b++){let v=new RTCPeerConnection({iceServers:_0}),w=v.createDataChannel("jeu",{ordered:!1,maxRetransmits:0});v._ch=w,await v.setLocalDescription(await v.createOffer()),await b0(v);let _=M0();c.set(_,v),setTimeout(()=>{if(c.get(_)===v){c.delete(_);try{v.close()}catch{}}},5e4),T.push({offer_id:_,offer:{type:"offer",sdp:v.localDescription.sdp}})}return T}async function S(T){if(!u||u.readyState!==1)return;let b=l.size<xf?await p():[];if(!u||u.readyState!==1)return;let v={action:"announce",info_hash:r,peer_id:o,numwant:b.length,uploaded:0,downloaded:0,left:1,offers:b};T&&(v.event=T),u.send(JSON.stringify(v))}async function M(T){let b;try{b=JSON.parse(T)}catch{return}if(!(!b||b.info_hash!==r)){if(b["failure reason"]){g("Le tracker refuse : "+b["failure reason"]);return}if(b.peer_id!==o){if(b.offer&&b.peer_id&&b.offer_id){let v=vf(b.peer_id);if(l.has(v)||l.size>=xf)return;let w=new RTCPeerConnection({iceServers:_0});w.ondatachannel=_=>m(w,_.channel,v);try{await w.setRemoteDescription(b.offer),await w.setLocalDescription(await w.createAnswer()),await b0(w),u?.send(JSON.stringify({action:"announce",info_hash:r,peer_id:o,to_peer_id:b.peer_id,offer_id:b.offer_id,answer:{type:"answer",sdp:w.localDescription.sdp}}))}catch{try{w.close()}catch{}}}else if(b.answer&&b.offer_id){let v=c.get(b.offer_id);if(!v)return;c.delete(b.offer_id);let w=vf(b.peer_id);if(l.has(w)){try{v.close()}catch{}return}m(v,v._ch,w);try{await v.setRemoteDescription(b.answer)}catch{try{v.close()}catch{}}}}}}function y(){f||(g("Connexion au tracker\u2026"),u=new WebSocket(yf),u.onopen=()=>{d=0,g("En attente d'autres joueurs"),S("started"),clearInterval(h),h=setInterval(()=>S(),LT)},u.onmessage=T=>{typeof T.data=="string"&&M(T.data)},u.onclose=()=>{clearInterval(h),!f&&(g("Tracker injoignable, nouvel essai\u2026"),setTimeout(y,Math.min(15e3,2e3*2**d++)))},u.onerror=()=>{})}return y(),{id:a,peers:l,broadcast(T){let b=JSON.stringify(T);for(let v of l.values())v.ch.readyState==="open"&&v.ch.send(b)},stopAnnouncing(){clearInterval(h);try{u?.close()}catch{}f=!0},leave(){f=!0,clearInterval(h);try{u?.close()}catch{}for(let T of l.values())try{T.pc.close()}catch{}for(let T of c.values())try{T.close()}catch{}l.clear(),c.clear()}}}function T0(n){let e=[0];for(let t of n)e.push(e[e.length-1]+t.length);return e}function E0(n,e,t,i){return n[e]+(i-(t.raceStart||0))}function w0(n,e,t,i){return(t.raceStart||0)+(i-n[e])}function A0(){let n=null,e=0,t=null;return{get known(){return!!n},get age(){return n?(performance.now()-e)/1e3:1/0},push(i,s){!Number.isFinite(i.g)||!Number.isFinite(i.d)||!Number.isFinite(i.v)||(n={g:i.g,d:Math.max(-14,Math.min(14,i.d)),v:Math.max(0,Math.min(140,i.v)),l:+i.l||0,y:+i.y||0,b:!!i.b},e=s)},sample(i,s){if(!n)return null;let r=Math.min(.5,Math.max(0,(i-e)/1e3)),o={g:n.g+n.v*r,d:n.d,v:n.v,l:n.l,y:n.y,b:n.b};if(!t||Math.abs(t.g-o.g)>60)t={...o};else{let a=Math.min(1,s*10);t.g+=t.v*s+(o.g-(t.g+t.v*s))*a,t.d+=(o.d-t.d)*a,t.v+=(o.v-t.v)*a,t.l+=(o.l-t.l)*a,t.y+=(o.y-t.y)*a,t.b=o.b}return t}}}var ma=[[14885934,2312392],[2005987,15921906],[3129179,1053720],[15902491,1776411],[10178016,15921906],[15751836,1776411],[2279360,1776411],[15921906,14885934]];function ga(n){return String(n||"").replace(/[^\p{L}\p{N} _.-]/gu,"").trim().slice(0,14)||"Pilote"}function R0(n){return String(n||"").toUpperCase().replace(/[^A-Z0-9-]/g,"").slice(0,16)}var NT=15;async function C0(n,e,{onChange:t,onStart:i,onStatus:s}={}){let r=new Map,o=ga(e),a=null,l=0,c=()=>t?.(),u=await S0(n,{onStatus:s,onPeer(f){r.set(f.id,{id:f.id,name:"Pilote",remote:A0(),finished:!1,finishTime:null,gone:!1,peer:f}),f.send({t:"hi",name:o}),a&&f.send({t:"busy"}),c()},onLeave(f){let d=r.get(f.id);d&&(a?d.gone=!0:r.delete(f.id),c())},onMessage(f,d){let g=r.get(f.id);g&&(d.t==="hi"?(g.name=ga(d.name),c()):d.t==="s"?g.remote.push(d,performance.now()):d.t==="fin"&&Number.isFinite(d.time)?(g.finished=!0,g.finishTime=d.time,c()):d.t==="start"&&!a&&f.id===h.hostId?(a={stage:Math.max(1,Math.floor(Number(d.stage))||1)},u.stopAnnouncing(),i?.(a)):d.t==="busy"&&(g.busy=!0,c()))}}),h={code:n,id:u.id,name:o,players:r,get started(){return a},get hostId(){let f=u.id;for(let d of r.keys())d<f&&(f=d);return f},get isHost(){return h.hostId===u.id},roster(){let f=[{id:u.id,name:o,me:!0},...Array.from(r.values()).filter(d=>!d.busy)];return f.sort((d,g)=>d.id<g.id?-1:1),f.map((d,g)=>({...d,color:ma[g%ma.length][0],accent:ma[g%ma.length][1]}))},start(f){return a||!h.isHost?!1:(a={stage:f},u.broadcast({t:"start",stage:f}),u.stopAnnouncing(),!0)},sendState(f,d,g){f-l<1e3/NT||(l=f,u.broadcast({t:"s",g:Math.round(d*100)/100,d:Math.round(g.d*100)/100,v:Math.round(g.speed*100)/100,l:Math.round((g.lean||0)*1e3)/1e3,y:Math.round((g.yaw||0)*1e3)/1e3,b:g.boostT>0?1:0}))},sendFinish(f){u.broadcast({t:"fin",time:f})},leave(){u.leave()}};return h}var P0="polygon-rush-name",dr=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),UT=n=>"#"+n.toString(16).padStart(6,"0");function I0(){let n="ABCDEFGHJKMNPQRSTUVWXYZ23456789",e=crypto.getRandomValues(new Uint8Array(6));return"ETNA-"+Array.from(e,t=>n[t%n.length]).join("")}async function L0(n,e){let t="";try{t=localStorage.getItem(P0)||""}catch{}let i=await n({initial:3,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">Course \xE0 plusieurs \xB7 ${dr(e.title)}</p>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-name-in">Pseudo</label>
    <div class="pr-seedbox"><input id="pr-name-in" class="pr-input" type="text" value="${dr(t)}" maxlength="14" autocomplete="off" spellcheck="false" data-nav data-name></div>
  </div>
  <div class="pr-seedrow pr-slide" style="--i:3">
    <label class="pr-lbl" for="pr-code-in">Code du salon</label>
    <div class="pr-seedbox">
      <input id="pr-code-in" class="pr-input" type="text" value="${dr(I0())}" maxlength="16" autocomplete="off" spellcheck="false" data-nav data-code style="width:min(70vw,13em)">
      <button type="button" class="pr-btn pr-btn-ico" data-nav data-act="dice" title="Nouveau code" aria-label="Nouveau code">\u{1F3B2}</button>
    </div>
  </div>
  <div class="pr-btns pr-slide" style="--i:4">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="go">Entrer dans le salon</button>
    <button type="button" class="pr-btn" data-nav data-act="back">Retour</button>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">Donnez le m\xEAme code \xE0 vos amis : tous ceux qui l'entrent se retrouvent ici.<br>
  Connexion directe entre joueurs : votre adresse IP est visible des autres joueurs, du tracker (${dr(yf.replace("wss://",""))}) et du serveur STUN de Cloudflare.</p>
</section>`,actions:{dice:u=>{let h=u.closest(".pr-screen").querySelector("[data-code]");h&&(h.value=I0())},back:(u,h)=>h(null),go:(u,h)=>{let f=u.closest(".pr-screen"),d=R0(f.querySelector("[data-code]").value),g=ga(f.querySelector("[data-name]").value);if(d.length<4){f.querySelector("[data-code]").focus();return}h({code:d,name:g})}}});if(!i)return null;try{localStorage.setItem(P0,i.name)}catch{}let s=null,r=()=>{},o="Connexion au tracker\u2026",a=null;try{s=await C0(i.code,i.name,{onChange:()=>r(),onStatus:u=>{o=u,r()},onStart:u=>a?.({stage:u.stage})})}catch(u){return console.warn("Salon indisponible :",u),null}let l=e.stages.map((u,h)=>`<option value="${h+1}">${h+1} \xB7 ${dr(u.subtitle)}</option>`).join(""),c=await n({initial:0,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">Salon</p>
  <div class="pr-logo pr-slide" style="--i:1;font-size:.55em"><span class="pr-logo-b" style="user-select:all">${dr(i.code)}</span></div>
  <p class="pr-cmds pr-slide" style="--i:2" data-status></p>
  <ol class="pr-slist pr-slide" style="--i:3;min-width:min(80vw,26em)" data-list></ol>
  <div class="pr-seedrow pr-slide" style="--i:4" data-hostrow>
    <label class="pr-lbl" for="pr-from-mp">D\xE9part</label>
    <div class="pr-seedbox"><select id="pr-from-mp" class="pr-input" data-nav data-from style="width:min(86vw,34em);font-size:2.3vmin;letter-spacing:0.04em;text-align:left;text-transform:none">${l}</select></div>
  </div>
  <div class="pr-btns pr-slide" style="--i:5">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="start" data-start>D\xE9part</button>
    <button type="button" class="pr-btn" data-nav data-act="quit">Quitter</button>
  </div>
</section>`,onMount(u,h){if(a=h,s.started){h({stage:s.started.stage});return}r=()=>{let f=u.querySelector("[data-list]");if(!f)return;let d=s.roster(),g=s.hostId;f.innerHTML=d.map(m=>`<li${m.me?' class="pr-me"':""}><span style="display:inline-block;width:.8em;height:.8em;border-radius:50%;background:${UT(m.color)};margin-right:.6em"></span><span>${dr(m.name)}${m.me?" (vous)":""}</span><b>${m.id===g?"h\xF4te":""}</b></li>`).join(""),u.querySelector("[data-status]").textContent=d.length>1?`${d.length} joueurs dans le salon`+(s.isHost?" \xB7 \xE0 vous de lancer la course":" \xB7 l'h\xF4te lance la course"):o;let x=u.querySelector("[data-start]");x.style.display=s.isHost?"":"none",x.disabled=d.length<2,x.style.opacity=d.length<2?"0.45":"",u.querySelector("[data-hostrow]").style.display=s.isHost?"":"none"},r()},actions:{quit:(u,h)=>h(null),start:(u,h)=>{if(!s.isHost||s.roster().length<2)return;let f=Number(u.closest(".pr-screen").querySelector("[data-from]").value)||1;s.start(f)&&h({stage:f})}}});return r=()=>{},a=null,c?{session:s,stage:c.stage}:(s.leave(),null)}var FT=[14212578,12067627,2051996,3093304,15788504,9080726,1928010,14722347];function Os(n){let e=[],t=[],i=[],s=[[1,0,0,[1,-1,-1,1,1,-1,1,1,1,1,-1,1]],[-1,0,0,[-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1]],[0,1,0,[-1,1,1,1,1,1,1,1,-1,-1,1,-1]],[0,-1,0,[-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1]],[0,0,1,[1,-1,1,1,1,1,-1,1,1,-1,-1,1]],[0,0,-1,[-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1]]];for(let[o,a,l,c,u,h,f=1,d=1,g=1]of n)for(let[x,m,p,S]of s)for(let M of[0,1,2,0,2,3])e.push(o+S[M*3]*c/2,a+S[M*3+1]*u/2,l+S[M*3+2]*h/2),t.push(x,m,p),i.push(f,d,g);let r=new gt;return r.setAttribute("position",new lt(e,3)),r.setAttribute("normal",new lt(t,3)),r.setAttribute("color",new lt(i,3)),r}var cc=[.12,.16,.22],OT=[.07,.07,.08],uc=[.95,.08,.06],hc=[1,.95,.75],BT=[.86,.87,.88],zT=[.2,.21,.23];function fc(n,e,t,i){let s=[];for(let r of i)for(let o of[-1,1])s.push([o*(n/2-.12),t,r,.3,t*2,t*2,...OT]);return s}function kT(n){let{len:e,w:t,h:i}=n,s=-e/2,r=e/2,o=[[-t/2+.3,.75,s-.02,.4,.22,.08,...uc],[t/2-.3,.75,s-.02,.4,.22,.08,...uc],[-t/2+.3,.7,r+.02,.4,.2,.08,...hc],[t/2-.3,.7,r+.02,.4,.2,.08,...hc]];if(n.id==="car")return[Os([[0,.62,0,t,.64,e],[0,1.37,-.25,t*.86,.14,e*.5]]),Os([[0,1.1,-.25,t*.88,.42,e*.52,...cc],...fc(t,e,.32,[e*.3,-e*.3]),...o])];if(n.id==="van")return[Os([[0,1.25,-.5,t,1.9,e-1.2],[0,.85,r-.55,t,1.1,1.1]]),Os([[0,1.75,r-.62,t*.92,.7,1,...cc],...fc(t,e,.36,[e*.32,-e*.3]),...o])];if(n.id==="bus")return[Os([[0,1,0,t,1.3,e],[0,3.05,0,t,.5,e]]),Os([[0,2.2,0,t*1.01,1.15,e*.985,...cc],...fc(t,e,.5,[e*.33,-e*.3]),...o])];let a=2.5;return[Os([[0,1.75,r-a/2,t,2.5,a]]),Os([[0,2.25,s+(e-a-.5)/2,t,3.1,e-a-.5,...BT],[0,.75,s+(e-a)/2,t*.5,.3,e-a,...zT],[0,2.35,r-.4,t*.92,.85,.85,...cc],...fc(t,e,.52,[r-1.2,s+1.4,s+2.7,s+4]),[-t/2+.3,1,s-.02,.4,.25,.08,...uc],[t/2-.3,1,s-.02,.4,.25,.08,...uc],[-t/2+.3,.9,r+.02,.4,.2,.08,...hc],[t/2-.3,.9,r+.02,.4,.2,.08,...hc]])]}function D0(n,e){let t=new ht;t.name="traffic";let i=new Map(lc.map(h=>[h.id,kT(h)])),s=FT.map(h=>new si({color:h})),r=new si({vertexColors:!0}),o=[];for(let h=0;h<e;h++){let f=new ht,d=new ot(i.get("car")[0],s[0]),g=new ot(i.get("car")[1],r);d.castShadow=!0,g.castShadow=!0,f.add(d,g),f.visible=!1,t.add(f),o.push({g:f,body:d,detail:g,type:null,color:-1})}n.add(t);let a={};function l(h,f,d){for(let g=0;g<o.length;g++){let x=o[g],m=h.vehicles[g],p=m?m.s-d:1e9;if(!m||p<-120||p>1400){x.g.visible=!1;continue}if(x.type!==m.type.id){x.type=m.type.id;let[S,M]=i.get(m.type.id);x.body.geometry=S,x.detail.geometry=M}x.color!==m.color&&(x.color=m.color,x.body.material=s[m.color%s.length]),It(f,m.s,m.d,a),x.g.position.set(a.x,a.y,a.z),x.g.rotation.set(-Math.atan(a.slope||0),a.heading,0,"YXZ"),x.g.visible=!0}}function c(){for(let h of o)h.g.visible=!1}function u(){n.remove(t);for(let[h,f]of i.values())h.dispose(),f.dispose();for(let h of s)h.dispose();r.dispose()}return{group:t,update:l,hide:c,dispose:u}}var N0="polygon-rush-v3-records",HT=new Set(["rally","rain"]);function U0(){try{let n=globalThis.localStorage?.getItem(N0),e=n?JSON.parse(n):null;if(e&&typeof e=="object")return{splits:e.splits||{},total:e.total??null,runs:e.runs||0,finishes:e.finishes||0}}catch{}return{splits:{},total:null,runs:0,finishes:0}}function dc(n){try{return globalThis.localStorage?.setItem(N0,JSON.stringify(n)),!0}catch{return!1}}function _f(n){if(!Number.isFinite(n))return"\u2013";let e=Math.floor(n/60),t=n-e*60;return`${e}'${String(Math.floor(t)).padStart(2,"0")}"${Math.floor(t*10%10)}`}function F0(n){let e=Math.abs(n);return`${n<0?"\u2212":"+"}${e>=60?_f(e):e.toFixed(1).replace(".",'"')}`}function O0(n,e,t){let i=n.splits[e]??null,s=i===null||t<i;return s&&(n.splits[e]=Math.round(t*1e3)/1e3),{time:t,best:i,delta:i===null?null:t-i,record:s}}function B0(n,e){let t=n.total,i=t===null||e<t;return i&&(n.total=Math.round(e*1e3)/1e3),{time:e,best:t,delta:t===null?null:e-t,record:i}}function z0(n){return n.filter(e=>!HT.has(e.id))}function k0(n=document.body){let e=document.createElement("div");e.style.cssText="position:fixed;left:50%;top:13vmin;transform:translateX(-50%);display:none;gap:1.2vmin;z-index:35;font-family:Arial,Helvetica,sans-serif;pointer-events:auto;align-items:stretch";let t=document.createElement("div");t.style.cssText="position:fixed;left:50%;top:11.6vmin;transform:translateX(-50%);width:54vmin;height:0.7vmin;display:none;background:rgba(255,255,255,.18);z-index:35;border-radius:1vmin;overflow:hidden";let i=document.createElement("div");i.style.cssText="height:100%;width:100%;background:#ffd23f;transform-origin:left center",t.appendChild(i),n.append(t,e);let s=[],r=null,o=0,a=0;function l(){e.style.display="none",t.style.display="none",s=[],r=null}function c(f){if(!s.length)return!1;let d=s[Math.max(0,Math.min(s.length-1,f))],g=r;return l(),g?.(d),!0}function u(f,d,g=9){l(),f.length&&(s=f.slice(0,3),r=d,o=a=g,e.textContent="",s.forEach((x,m)=>{let p=document.createElement("button");p.type="button",p.style.cssText=`all:unset;cursor:pointer;width:27vmin;padding:1.1vmin 1.4vmin;border-radius:1vmin;color:#fff;background:rgba(12,18,34,.82);border:0.3vmin solid ${m===0?"#ffd23f":"rgba(255,255,255,.28)"};box-sizing:border-box`;let S=M=>String(M).replace(/[&<>]/g,y=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[y]);p.innerHTML=`<div style="font:bold 2.1vmin Arial;display:flex;gap:1vmin;align-items:center"><span style="background:#ffd23f;color:#111;border-radius:.6vmin;padding:.1vmin .9vmin">${m+1}</span><span>${S(x.icon||"")} ${S(x.name)}</span></div><div style="font:1.55vmin Arial;color:#8ef0a8;margin-top:.7vmin">\u25B2 ${S(x.pro)}</div><div style="font:1.55vmin Arial;color:#ff9a8a;margin-top:.3vmin">\u25BC ${S(x.con)}</div>`,p.addEventListener("click",()=>c(m)),e.appendChild(p)}),e.style.display="flex",t.style.display="block")}function h(f){s.length&&(o-=f,i.style.transform=`scaleX(${Math.max(0,o/a)})`,o<=0&&c(0))}return{show:u,pick:c,update:h,hide:l,get active(){return s.length>0},dispose(){e.remove(),t.remove()}}}var pc=class extends ji{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Af(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new Hf(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Ps.extractUrlBase(e);o=Ps.resolveURL(c,this.path)}else o=Ps.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ea(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===X0){try{o[xt.KHR_BINARY_GLTF]=new Vf(e)}catch(h){s&&s(h);return}r=JSON.parse(o[xt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Zf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case xt.KHR_MATERIALS_UNLIT:o[h]=new Ef;break;case xt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Gf(r,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:o[h]=new Wf;break;case xt.KHR_MESH_QUANTIZATION:o[h]=new Xf;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function VT(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Tf=class{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Re(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Tn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ai(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Pl(u),c.distance=h;break;case"spot":c=new lo(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ts(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},Ef=class{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return Yt}extendParams(e,t,i){let s=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Tn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(s)}},wf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Af=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(a,a)}return Promise.all(r)}},Rf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Cf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Pf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Tn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Rt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},If=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Lf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(a[0],a[1],a[2],Tn),Promise.all(r)}},Df=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Nf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(a[0],a[1],a[2],Tn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Rt)),Promise.all(r)}},Uf=class{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Ff=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Of=class{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Bf=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},zf=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},kf=class{constructor(e){this.name=xt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}},Hf=class{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==li.TRIANGLES&&c.mode!==li.TRIANGLE_STRIP&&c.mode!==li.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let g of h){let x=new je,m=new H,p=new rn,S=new H(1,1,1),M=new Sn(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&S.fromBufferAttribute(l.SCALE,y),M.setMatrixAt(y,x.compose(m,p,S));for(let y in l)if(y==="_COLOR_0"){let T=l[y];M.instanceColor=new nr(T.array,T.itemSize,T.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);Ft.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},X0="glTF",xa=12,H0={JSON:1313821514,BIN:5130562},Vf=class{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,xa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==X0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-xa,r=new DataView(e,xa),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===H0.JSON){let c=new Uint8Array(e,xa+o,a);this.content=i.decode(c)}else if(l===H0.BIN){let c=xa+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Gf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Yf[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Yf[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],d=xo[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(let g in d.attributes){let x=d.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(d)},a,c,Tn,f)})})}},Wf=class{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Xf=class{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}},mc=class extends As{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,g=e*c,x=g-c,m=-2*d+3*f,p=d-f,S=1-m,M=p-f+h;for(let y=0;y!==a;y++){let T=o[x+y+a],b=o[x+y+l]*u,v=o[g+y+a],w=o[g+y]*u;r[y]=S*T+M*b+m*v+p*w}return r}},GT=new rn,qf=class extends mc{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return GT.fromArray(r).normalize().toArray(r),r}},li={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},xo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},V0={9728:Kt,9729:On,9984:Lh,9985:Vo,9986:zr,9987:ti},G0={33071:Xi,33648:Yo,10497:Pn},Mf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},WT={CUBICSPLINE:void 0,LINEAR:Kr,STEP:Zr},bf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function XT(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new st({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wi})),n.DefaultMaterial}function pr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ts(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function qT(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(i){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function YT(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $T(n){let e,t=n.extensions&&n.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Sf(t.attributes):e=n.indices+":"+Sf(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Sf(n.targets[i]);return e}function Sf(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function $f(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ZT(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var KT=new je,Zf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new VT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new Cl(this.options.manager):this.textureLoader=new Il(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ea(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return pr(r,a,s),ts(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(Ps.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Mf[s.type],a=xo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new mt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Mf[s.type],c=xo[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(d&&d!==h){let p=Math.floor(f/d),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,M=t.cache.get(S);M||(x=new c(a,p*d,s.count*d/u),M=new io(x,d/u),t.cache.add(S,M)),m=new tr(M,l,f%d/u,g)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new mt(x,l,g);if(s.sparse!==void 0){let p=Mf.SCALAR,S=xo[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,T=new S(o[1],M,s.sparse.count*p),b=new c(o[2],y,s.sparse.count*l);a!==null&&(m=new mt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let v=0,w=T.length;v<w;v++){let _=T[v];if(m.setX(_,b[v*l]),l>=2&&m.setY(_,b[v*l+1]),l>=3&&m.setZ(_,b[v*l+2]),l>=4&&m.setW(_,b[v*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=V0[f.magFilter]||On,u.minFilter=V0[f.minFilter]||ti,u.wrapS=G0[f.wrapS]||Pn,u.wrapT=G0[f.wrapT]||Pn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Kt&&u.minFilter!==On,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new cn(x);m.needsUpdate=!0,f(m)}),t.load(Ps.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),ts(h,o),h.userData.mimeType=o.mimeType||ZT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[xt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new sr,bn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Ts,bn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return st}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[xt.KHR_MATERIALS_UNLIT]){let h=s[xt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Tn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Rt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Pt);let u=r.alphaMode||bf.OPAQUE;if(u===bf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===bf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Yt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new $e(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Yt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Yt){let h=r.emissiveFactor;a.emissive=new Re().setRGB(h[0],h[1],h[2],Tn)}return r.emissiveTexture!==void 0&&o!==Yt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),ts(h,r),t.associations.set(h,{materials:e}),r.extensions&&pr(s,h,r),h})}createUniqueName(e){let t=Ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return W0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=$T(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=W0(new gt,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?XT(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){let x=u[d],m=o[d],p,S=c[d];if(m.mode===li.TRIANGLES||m.mode===li.TRIANGLE_STRIP||m.mode===li.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new _l(x,S):new ot(x,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===li.TRIANGLE_STRIP?p.geometry=uf(p.geometry,Ol):m.mode===li.TRIANGLE_FAN&&(p.geometry=uf(p.geometry,sa));else if(m.mode===li.LINES)p=new ir(x,S);else if(m.mode===li.LINE_STRIP)p=new ro(x,S);else if(m.mode===li.LINE_LOOP)p=new Tl(x,S);else if(m.mode===li.POINTS)p=new Es(x,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&YT(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ts(p,r),m.extensions&&pr(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&pr(s,h[0],r),h[0];let f=new ht;r.extensions&&pr(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Zt(Qp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new bs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ts(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new je;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ml(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let d=s.channels[h],g=s.samplers[d.sampler],x=d.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let S=0,M=f.length;S<M;S++){let y=f[S],T=d[S],b=g[S],v=x[S],w=m[S];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let _=i._createAnimationTracks(y,T,b,v,w);if(_)for(let E=0;E<_.length;E++)p.push(_[E])}return new Rl(r,void 0,p)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,KT)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Qo:c.length>1?u=new ht:c.length===1?u=c[0]:u=new Ft,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ts(u,r),r.extensions&&pr(i,u,r),r.matrix!==void 0){let h=new je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new ht;i.name&&(r.name=s.createUniqueName(i.name)),ts(r,i),i.extensions&&pr(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,d]of s.associations)(f instanceof bn||f instanceof cn)&&h.set(f,d);return u.traverse(f=>{let d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Bs[r.path]===Bs.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Bs[r.path]){case Bs.weights:c=$i;break;case Bs.rotation:c=Zi;break;case Bs.position:case Bs.scale:c=Ki;break;default:i.itemSize===1?c=$i:c=Ki;break}let u=s.interpolation!==void 0?WT[s.interpolation]:Kr,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){let g=new c(l[f]+"."+Bs[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=$f(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Zi?qf:mc;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function jT(n,e,t){let i=e.attributes,s=new ni;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){let u=$f(xo[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new H,l=new H;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=$f(xo[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new qn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function W0(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=Yf[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return pt.workingColorSpace!==Tn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),ts(n,e),jT(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?qT(n,e.targets,t):n})}var zs={hi:null,lo:null},JT=["body","frame","bubble","headlight","tail","wheelRear","wheelFront","fork","torso","helmet","armR","armL","legR","legL"];async function Kf(n,e){let t=await n.loadAsync(e),i={},s={};for(let a of t.scene.children)a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.set(1,1,1),i[a.name]=a,a.traverse(l=>{l.isMesh&&l.material?.name&&(s[l.material.name]=l.material)});let r=JT.filter(a=>!i[a]);if(r.length)throw new Error(e+" incomplet : "+r.join(", "));let o=0;return i.armR.traverse(a=>{a.isMesh&&(a.geometry.computeBoundingBox(),o=Math.max(o,a.geometry.boundingBox.max.z))}),{parts:i,mats:s,armLength:o>.1?o/1.01:1}}async function q0(n="assets/"){if(zs.lo)return zs;let e=new pc;return zs.lo=await Kf(e,n+"bike_voxel.glb").catch(()=>Kf(e,n+"bike.glb")),zs.hi=await Kf(e,n+"bike_voxel_hi.glb").catch(()=>zs.lo),zs}function Y0(n="lo"){return zs[n]||zs.lo}var jt=0,pn=1,is=2,vc=.32,xc=-.7,eg=.7,ns=[0,-vc,-xc],tg=[0,-vc,-eg],$0=.62,QT=.35,ks=Math.PI*2,Jn=class{constructor(e){this.off=e||[0,0,0],this.pos=[],this.groups=[],this.slot=-1,this.gStart=0}setSlot(e){e!==this.slot&&(this.closeGroup(),this.slot=e)}closeGroup(){let e=this.pos.length/3;this.slot>=0&&e>this.gStart&&this.groups.push({start:this.gStart,count:e-this.gStart,materialIndex:this.slot}),this.gStart=e}tri(e,t,i,s){let r=this.off,o=e[0]+r[0],a=e[1]+r[1],l=e[2]+r[2],c=t[0]+r[0],u=t[1]+r[1],h=t[2]+r[2],f=i[0]+r[0],d=i[1]+r[1],g=i[2]+r[2],x=c-o,m=u-a,p=h-l,S=f-o,M=d-a,y=g-l,T=m*y-p*M,b=p*S-x*y,v=x*M-m*S,w=(o+c+f)/3-(s[0]+r[0]),_=(a+u+d)/3-(s[1]+r[1]),E=(l+h+g)/3-(s[2]+r[2]),R=this.pos;T*w+b*_+v*E>=0?R.push(o,a,l,c,u,h,f,d,g):R.push(o,a,l,f,d,g,c,u,h)}quad(e,t,i,s,r){this.tri(e,t,i,r),this.tri(e,i,s,r)}build(){this.closeGroup();let e=new gt;e.setAttribute("position",new lt(this.pos,3)),e.computeVertexNormals();for(let t of this.groups)e.addGroup(t.start,t.count,t.materialIndex);return e}};function eE(n){let e=0,t=0,i=0;for(let r of n)e+=r[0],t+=r[1],i+=r[2];let s=n.length;return[e/s,t/s,i/s]}function tE(n,e){return[(n[0]+e[0])/2,(n[1]+e[1])/2,(n[2]+e[2])/2]}function Z0(n,e,t,i){let s=e.length;for(let r=0;r<s;r++)n.tri(t,e[r],e[(r+1)%s],i)}function Hs(n,e,t,i,s){let r=typeof t=="function"?t:()=>t,o=e.length,a=e[0].length,l=e.map(eE);for(let c=0;c<o-1;c++){let u=e[c],h=e[c+1],f=tE(l[c],l[c+1]);for(let d=0;d<a;d++){let g=(d+1)%a;n.setSlot(r(c,d)),n.quad(u[d],u[g],h[g],h[d],f)}}n.setSlot(i),Z0(n,e[0],l[0],l[1]),n.setSlot(s),Z0(n,e[o-1],l[o-1],l[o-2])}function jn(n,e,t,i,s,r,o){let a=t[0]-e[0],l=t[1]-e[1],c=t[2]-e[2],u=Math.hypot(a,l,c)||1,h=[a/u,l/u,c/u],f=Math.abs(h[1])<.9?[0,1,0]:[1,0,0],d=[h[1]*f[2]-h[2]*f[1],h[2]*f[0]-h[0]*f[2],h[0]*f[1]-h[1]*f[0]],g=Math.hypot(d[0],d[1],d[2]);d=[d[0]/g,d[1]/g,d[2]/g];let x=[d[1]*h[2]-d[2]*h[1],d[2]*h[0]-d[0]*h[2],d[0]*h[1]-d[1]*h[0]],m=(p,S)=>{let M=[];for(let y=0;y<r;y++){let T=ks*y/r,b=Math.cos(T)*S,v=Math.sin(T)*S;M.push([p[0]+b*d[0]+v*x[0],p[1]+b*d[1]+v*x[1],p[2]+b*d[2]+v*x[2]])}return M};Hs(n,[m(e,i),m(t,s)],o,o,o)}function gr(n,e,t,i){n.setSlot(i);let s=(a,l,c)=>[e[0]+a*t[0],e[1]+l*t[1],e[2]+c*t[2]],r=[s(-1,-1,-1),s(1,-1,-1),s(1,1,-1),s(-1,1,-1),s(-1,-1,1),s(1,-1,1),s(1,1,1),s(-1,1,1)],o=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]];for(let a of o)n.tri(r[a[0]],r[a[1]],r[a[2]],e),n.tri(r[a[0]],r[a[2]],r[a[3]],e)}var yc=3,ya=4;function nE(n,e,t,i,s,r,o,a,l){return[[0,e,n],[o,t,n],[a,i,n],[l,s,n],[0,r,n],[-l,s,n],[-a,i,n],[-o,t,n]]}function iE(){let n=new Jn(ns),t=[[1.02,.76,.755,.74,.72,.71,.02,.03,.02],[.9,.84,.81,.75,.7,.68,.07,.12,.08],[.7,.93,.87,.76,.7,.68,.1,.19,.13],[.45,.97,.9,.68,.58,.56,.12,.23,.16],[.3,.98,.92,.62,.36,.26,.13,.23,.17],[.05,1,.94,.62,.3,.19,.14,.21,.16],[-.2,.99,.93,.66,.32,.21,.13,.19,.13],[-.35,.85,.82,.68,.42,.34,.11,.15,.1],[-.5,.8,.79,.72,.64,.62,.1,.13,.08],[-.75,.9,.87,.8,.72,.7,.09,.12,.07],[-.98,.99,.96,.92,.88,.87,.05,.07,.04],[-1.1,1.02,1.01,1,.99,.985,.01,.015,.01]].map(i=>nE(...i));Hs(n,t,(i,s)=>{let r=s===0||s===7,o=s===1||s===6,a=s===2||s===5;return r?i===7||i===8?pn:jt:o?i>=9?yc:jt:a?i>=2&&i<=5?yc:i>=7&&i<=8?pn:jt:i>=3&&i<=6?is:pn},jt,jt);for(let i of[-1,1])jn(n,[.11*i,.46,-.26],[.1*i,.32,-.7],.04,.03,5,ya),jn(n,[.14*i,.44,-.3],[.22*i,.42,-.32],.018,.018,4,pn),jn(n,[.1*i,.95,.42],[.27*i,.93,.35],.02,.02,4,pn);return jn(n,[.15,.22,.1],[.17,.3,-.45],.04,.04,5,ya),jn(n,[.17,.3,-.45],[.2,.52,-.92],.05,.065,6,ya),jn(n,[.2,.52,-.92],[.205,.535,-.95],.065,.05,6,pn),gr(n,[0,.685,-.74],[.06,.012,.16],pn),n.build()}function sE(){let n=new Jn(ns),e=(t,i,s,r)=>[[0,i,t],[r,s,t],[0,s-.02,t],[-r,s,t]];return Hs(n,[e(.76,.925,.91,.07),e(.58,1.06,.94,.12),e(.42,1.13,.97,.11)],jt,jt,jt),n.build()}function rE(){let n=new Jn(ns);return gr(n,[0,.985,-1.085],[.04,.02,.014],jt),n.build()}function oE(){let n=new Jn;return jn(n,[0,0,0],[0,0,-.45],.05,.004,6,jt),n.build()}function aE(){let n=new Jn(ns);for(let e of[-1,1]){let t=[.062*e,.795,.905];n.setSlot(jt);let i=[[t[0]-.035,t[1]-.012,t[2]+.012],[t[0]+.035,t[1]+.004*e,t[2]-.02],[t[0]+.03,t[1]+.022,t[2]-.03],[t[0]-.03,t[1]+.02,t[2]-.004]];n.quad(i[0],i[1],i[2],i[3],[t[0],t[1],t[2]-.2])}return n.build()}function lE(){let n=new Jn(tg);for(let i of[-1,1])jn(n,[.085*i,.32,.7],[.085*i,.56,.615],.032,.032,5,pn),jn(n,[.085*i,.56,.615],[.085*i,.88,.5],.024,.024,5,is),gr(n,[.1*i,.33,.74],[.012,.05,.035],ya);let e=.34,t=[];for(let i of[-.75,-.25,.3,.85,1.25]){let s=.32+Math.cos(i),r=.7+Math.sin(i),o=(a,l)=>[a,.32+l*Math.cos(i),.7+l*Math.sin(i)];t.push([o(-.075,e-.005),o(-.04,e+.03),o(.04,e+.03),o(.075,e-.005)])}return Hs(n,t,jt,jt,jt),n.build()}function K0(n,e){let t=new Jn,i=14,s=(o,a)=>{let l=[];for(let c=0;c<i;c++){let u=ks*c/i;l.push([o,a*Math.cos(u),a*Math.sin(u)])}return l};Hs(t,[[-.62,.215],[-1,.27],[-.8,.305],[0,.32],[.8,.305],[1,.27],[.62,.215]].map(([o,a])=>s(o*n,a)),pn,pn,pn);for(let o of[-1,1]){let a=o*(.62*n+.004),l=[a,0,0],c=[0,0,0],u=10;for(let h=0;h<u;h++){let f=ks*h/u,d=ks*(h+1)/u;t.setSlot(h%2?pn:is),t.tri(l,[a,.215*Math.cos(f),.215*Math.sin(f)],[a,.215*Math.cos(d),.215*Math.sin(d)],c)}if(e){let h=o*(.62*n+.012);t.setSlot(ya);for(let f=0;f<u;f++){let d=ks*f/u,g=ks*(f+1)/u;t.quad([h,.09*Math.cos(d),.09*Math.sin(d)],[h,.16*Math.cos(d),.16*Math.sin(d)],[h,.16*Math.cos(g),.16*Math.sin(g)],[h,.09*Math.cos(g),.09*Math.sin(g)],c)}}}return t.build()}function cE(){let n=new Jn,e=[0,.11,.015],t=[.125,.135,.155],i=10,s=6,r=[];for(let o=1;o<s;o++){let a=-Math.PI/2+Math.PI*o/s,l=Math.cos(a),c=[];for(let u=0;u<i;u++){let h=ks*(u+.5)/i;c.push([e[0]+t[0]*l*Math.cos(h),e[1]+t[1]*Math.sin(a),e[2]+t[2]*l*Math.sin(h)])}r.push(c)}return Hs(n,r,(o,a)=>{let l=ks*(a+1)/i;return Math.sin(l)>.45&&(o===1||o===2)?pn:Math.abs(Math.cos(l))<.35?is:jt},pn,jt),n.build()}function va(n,e,t,i){return[[e,n,0],[e*.55,n,t],[-e*.55,n,t],[-e,n,0],[-e*.55,n,-i],[e*.55,n,-i]]}function uE(){let n=new Jn,e=[va(-.08,.13,.09,.1),va(.04,.145,.1,.1),va(.22,.185,.11,.11),va(.38,.205,.1,.1),va(.45,.09,.06,.07)];return Hs(n,e,(t,i)=>t===0?is:t===2&&(i===0||i===2||i===3||i===5)?yc:jt,pn,pn),Hs(n,[[[.07,.4,-.08],[0,.42,-.06],[-.07,.4,-.08],[0,.39,-.13]],[[.06,.28,-.11],[0,.29,-.09],[-.06,.28,-.11],[0,.27,-.19]],[[.03,.14,-.1],[0,.14,-.09],[-.03,.14,-.1],[0,.14,-.13]]],is,is,is),n.build()}function j0(n){let e=new Jn,t=[.09*n,-.09,.5];return jn(e,[0,0,0],t,.058,.048,5,jt),jn(e,t,[0,0,.93],.046,.038,5,jt),gr(e,[0,0,.97],[.042,.04,.05],pn),gr(e,[0,.015,.02],[.052,.04,.05],yc),e.build()}function J0(n){let e=new Jn,t=[.11*n,-.19,.42],i=[.085*n,-.47,.05];return jn(e,[0,0,0],t,.082,.066,6,jt),jn(e,t,i,.062,.05,5,jt),gr(e,[t[0]+.035*n,t[1]-.02,t[2]+.02],[.025,.05,.045],is),gr(e,[i[0],i[1]-.04,i[2]+.04],[.045,.05,.115],pn),e.build()}var jf=null;function hE(){return jf||(jf={body:iE(),bubble:sE(),tail:rE(),flame:oE(),fork:lE(),headlight:aE(),wheelRear:K0(.1,!1),wheelFront:K0(.068,!0),helmet:cE(),torso:uE(),armR:j0(-1),armL:j0(1),legR:J0(-1),legL:J0(1)}),jf}var bi=(n,e,t)=>n<e?e:n>t?t:n,ng=n=>bi(n,0,1),mr=n=>Number.isFinite(n)?n:0,gc=n=>typeof n=="boolean"?n?1:0:ng(mr(n));function ci(n,e){return n.name=e,n}function Q0(n,e,t,i){let s=new ot(n,e);return s.name=t,s.castShadow=i,s.receiveShadow=!1,s}function ig({color:n=14034984,accent:e=16761395,isPlayer:t=!1,detail:i="lo"}={}){let s=hE(),r=Ae=>new st({flatShading:!0,side:Pt,...Ae}),o=r({color:new Re(n),metalness:.35,roughness:.3}),a=r({color:1382173,metalness:.2,roughness:.7}),l=r({color:new Re(e),metalness:.45,roughness:.35}),c=r({color:15856108,metalness:.15,roughness:.45}),u=r({color:11120312,metalness:.9,roughness:.32}),h=[o,a,l,c,u],f=r({color:792614,metalness:.6,roughness:.08,transparent:!0,opacity:.55,depthWrite:!1}),d=r({color:16777215,emissive:16774358,emissiveIntensity:2.4}),g=r({color:3342336,emissive:16718362,emissiveIntensity:.8}),x=Y0(i),m=null;if(x){let Ae=(G,Ve)=>{let ze=x.mats[G].clone();return ze.color.set(Ve),ze};m={Paint:Ae("Paint",n),Suit:Ae("Suit",n),Accent:Ae("Accent",e),Tail:x.mats.Tail.clone()}}function p(Ae,G,Ve,ze,Be){if(!x)return Q0(G,Ve,Ae,ze);let Ie=x.parts[Ae].clone(!0);return Ie.name=Ae,Be&&Ie.position.set(Be[0],Be[1],Be[2]),Ie.traverse(qe=>{qe.isMesh&&(qe.material=m[qe.material.name]||qe.material,qe.castShadow=ze)}),Ie}let S=r({color:0,emissive:8382975,emissiveIntensity:1.5,transparent:!0,opacity:.85,depthWrite:!1}),M=ci(new ht,"bike"),y=ci(new ht,"leanPivot"),T=ci(new ht,"pitchPivot");T.position.set(0,vc,xc);let b=ci(new ht,"rearWheel");b.add(p("wheelRear",s.wheelRear,h,!0));let v=ci(new ht,"chassis"),w=p("body",s.body,h,!0,ns),_=p("bubble",s.bubble,f,!1,ns),E=p("tail",s.tail,g,!1,ns),R=p("headlight",s.headlight,d,!1,ns),F=Q0(s.flame,S,"flame",!1);F.position.set(.205,.215,-.26),F.rotation.x=-.42,F.scale.z=.02,F.visible=!1;let k=ci(new ht,"hips");k.position.set(0,$0,QT);let L=ci(new ht,"torso"),O=ci(new ht,"head");O.position.set(0,.45,.01),O.add(p("helmet",s.helmet,h,!0)),L.add(p("torso",s.torso,h,!0),O);let D=p("armR",s.armR,h,!0),Y=p("armL",s.armL,h,!0),V=ci(new ht,"legR");V.position.set(-.12,-.02,0),V.add(p("legR",s.legR,h,!0));let J=ci(new ht,"legL");J.position.set(.12,-.02,0),J.add(p("legL",s.legL,h,!0)),k.add(L,D,Y,V,J),v.add(w,_,E,R,F,k),x&&v.add(p("frame",null,null,!0,ns));let oe=ci(new ht,"steerPivot");oe.position.set(0,0,eg-xc);let de=p("fork",s.fork,h,!0,tg),ve=ci(new ht,"frontWheel");if(ve.add(p("wheelFront",s.wheelFront,h,!0)),oe.add(de,ve),T.add(b,v,oe),y.add(T),M.add(y),t){let Ae=new lo(16773590,60,60,.5,.6,2);Ae.name="headSpot",Ae.castShadow=!1,Ae.position.set(0,1,.9),Ae.target.position.set(0,.2,30),Ae.target.name="headSpotTarget",M.add(Ae,Ae.target)}let ce={lean:0,steer:0,pitch:0,compress:0,sr:0,brake:0,air:0,drift:0,boost:0},ie=.2,Q=.37,ee=.02,I=[.25,.93-vc,.36-xc],B=new H,X=new H,$=new H(0,0,1);function pe(Ae,G){B.set(ie*G,Q,ee).applyEuler(L.rotation),X.set(I[0]*G-k.position.x,I[1]-k.position.y,I[2]-k.position.z);let Ve=Math.cos(-k.rotation.z),ze=Math.sin(-k.rotation.z),Be=X.x*Ve-X.y*ze,Ie=X.x*ze+X.y*Ve;X.x=Be,X.y=Ie,Ae.position.copy(B),X.sub(B);let qe=X.length()||1;Ae.scale.z=qe/(x?x.armLength:1),Ae.quaternion.setFromUnitVectors($,X.multiplyScalar(1/qe))}function we(Ae,G){let Ve=Ae||{},ze=Number.isFinite(G)?bi(G,0,.1):1/60,Be=1-Math.exp(-ze*14),Ie=1-Math.exp(-ze*5);ce.lean+=(bi(mr(Ve.lean),-1.5,1.5)-ce.lean)*Be,ce.steer+=(bi(mr(Ve.steer),-1,1)-ce.steer)*Be,ce.pitch+=(bi(mr(Ve.pitch),-.9,.9)-ce.pitch)*Be,ce.compress+=(bi(mr(Ve.compress),-1,1)-ce.compress)*Be,ce.sr+=(ng(mr(Ve.speedRatio))-ce.sr)*Ie,ce.brake+=(gc(Ve.braking)-ce.brake)*Ie,ce.air+=(gc(Ve.airborne)-ce.air)*Ie,ce.drift+=(gc(Ve.drift)-ce.drift)*Ie,ce.boost+=(gc(Ve.boost)-ce.boost)*Ie;let qe=ce.lean,Fe=(Number.isFinite(Ve.speed)?Ve.speed:ce.sr*80)*3.6;y.rotation.z=qe,T.rotation.x=-ce.pitch,oe.rotation.y=-.45*ce.steer*bi(1-2*ce.sr,0,1),v.position.y=-.07*ce.compress;let N=bi((Fe-20)/100,0,1),A=bi(Math.abs(qe)*2.27,0,1),j=qe>=0?1:-1,xe=A*(1-bi((Fe-30)/30,0,1));k.position.x=-.17*A*j,k.position.y=$0+.1*ce.air,k.rotation.z=-.2*A*j,L.rotation.x=bi(.45+.55*N-.2*ce.brake-.25*ce.air+.1*ce.boost,.2,1.05),L.rotation.z=-.1*A*j,O.rotation.x=-.35*N+.1*ce.air,O.rotation.y=-.35*A*j,O.rotation.z=-.4*qe;let _e=.55*A+.3*xe;V.rotation.y=j>0?-_e:0,J.rotation.y=j<0?_e:0,pe(D,-1),pe(Y,1),(m?m.Tail:g).emissiveIntensity=(m?2:.8)+(m?6:2.2)*ce.brake,F.visible=ce.boost>.03,F.scale.z=.02+1.3*ce.boost,S.emissiveIntensity=1.5+2*ce.boost;let he=mr(Ve.wheelSpin);b.rotation.x=he,ve.rotation.x=he}return we({},0),{group:M,update:we}}var sg=Math.PI*2,tn=6e3,vo=2200,rg=60,og=30,ag=60,fE=3,_a=2e3,xr=170,ed=1.5,dE=13,lg=dE-ed,Jf=120,pE={dust:{life:.9,grav:-1.2,drag:2.2,spread:1.6,lift:[.6,1.8],s0:.35,s1:1.5,a0:.3,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!1},smoke:{life:.8,grav:-.8,drag:1.2,spread:.9,lift:[.5,1.3],s0:.35,s1:1.3,a0:.16,c0:[.89,.9,.92],c1:[.62,.64,.67],add:!1,bounce:!1,ring:!1},spark:{life:.6,grav:18,drag:.25,spread:5.5,lift:[1.5,4.5],s0:.22,s1:.06,a0:1,c0:[1,.88,.4],c1:[1,.48,.1],add:!0,bounce:!0,ring:!1},spray:{life:.6,grav:9,drag:.5,spread:2.2,lift:[1.2,3.2],s0:.25,s1:.9,a0:.22,c0:[.71,.93,.98],c1:[.37,.66,.8],add:!1,bounce:!1,ring:!1},gravel:{life:.7,grav:20,drag:.15,spread:3.2,lift:[1.5,3.5],s0:.08,s1:.06,a0:1,c0:[.29,.26,.22],c1:[.14,.13,.11],add:!1,bounce:!0,ring:!1},boost:{life:.3,grav:-3,drag:3,spread:.8,lift:[0,.5],s0:.55,s1:.12,a0:.9,c0:[.25,.96,1],c1:[1,.25,.78],add:!0,bounce:!1,ring:!1},land:{life:.8,grav:0,drag:4,spread:0,lift:[.4,1],s0:.5,s1:1.8,a0:.32,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!0}},mE=new Re(16777215),gE=new Re(8386303);function Vn(n,e){return n+(e-n)*Math.random()}function Ma(n,e,t){return n<e?e:n>t?t:n}function Vs(n,e=0){return Number.isFinite(n)?n:e}function xE(n){return Number.isFinite(n)?Ma(n,0,.1):0}function Qf(n,e){return n-e*Math.floor(n/e+.5)}function vE(){let n=globalThis.innerHeight||900,e=Math.min(globalThis.devicePixelRatio||1,2);return n*e}var yE=`
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
}`,_E=`
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
}`,ME=`
attribute float aAlpha;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,bE=`
uniform vec3 uColor;
varying float vAlpha;
void main() {
  gl_FragColor = vec4(uColor, vAlpha);
}`;function cg(n,e){let t=e||{},i=Vs(t.rain,0),s=Vs(t.wind,0),r=new Float32Array(tn*3),o=new Float32Array(tn*3),a=new Float32Array(tn*3),l=new Float32Array(tn*3),c=new Float32Array(tn*3),u=new Float32Array(tn),h=new Float32Array(tn),f=new Float32Array(tn),d=new Float32Array(tn),g=new Float32Array(tn),x=new Float32Array(tn),m=new Float32Array(tn),p=new Float32Array(tn),S=new Float32Array(tn),M=new Float32Array(tn),y=new Float32Array(tn),T=new Uint8Array(tn),b=0,v=!1,w=new gt,_=new mt(r,3).setUsage(Ri),E=new mt(c,3).setUsage(Ri),R=new mt(u,1).setUsage(Ri),F=new mt(h,1).setUsage(Ri),k=new mt(f,1).setUsage(Ri);w.setAttribute("position",_),w.setAttribute("aColor",E),w.setAttribute("aSize",R),w.setAttribute("aAlpha",F),w.setAttribute("aMode",k);let L=new vt({uniforms:{uScale:{value:700}},vertexShader:yE,fragmentShader:_E,transparent:!0,depthWrite:!1,blending:na,blendSrc:Eh,blendDst:qo,blendEquation:Fn}),O=new Es(w,L);O.frustumCulled=!1,n.add(O);function D(ne,Me,fe,ge,W,Te,C,U=1){let z=pE[ne];if(!z||!Number.isFinite(Me)||!Number.isFinite(fe)||!Number.isFinite(ge))return;let Z=Vs(W),ae=Vs(Te),Pe=Vs(C),He=Math.min(tn,Math.max(0,Math.floor(Vs(U,1))));for(let Ge=0;Ge<He;Ge++){let q=b;b=(b+1)%tn;let re,me,ye;if(z.ring){let De=(He>1?Ge/He:Math.random())*sg+Math.random()*.2,Ze=Vn(3.5,5.5);re=Math.cos(De)*Ze+Z*.3,ye=Math.sin(De)*Ze+Pe*.3,me=Vn(z.lift[0],z.lift[1])+ae*.3}else re=Z+Vn(-z.spread,z.spread),ye=Pe+Vn(-z.spread,z.spread),me=ae+Vn(z.lift[0],z.lift[1]);let Se=q*3;r[Se]=Me+Vn(-.1,.1),r[Se+1]=fe,r[Se+2]=ge+Vn(-.1,.1),o[Se]=re,o[Se+1]=me,o[Se+2]=ye,d[q]=0,g[q]=z.life*Vn(.85,1.15),x[q]=z.drag,m[q]=z.grav,p[q]=z.s0*Vn(.85,1.2),S[q]=z.s1*Vn(.85,1.2),M[q]=z.a0,y[q]=fe,T[q]=z.bounce?1:0,f[q]=z.add?1:0,a[Se]=z.c0[0],a[Se+1]=z.c0[1],a[Se+2]=z.c0[2],l[Se]=z.c1[0],l[Se+1]=z.c1[1],l[Se+2]=z.c1[2]}He>0&&(v=!0)}function Y(ne){let Me=!1;for(let fe=0;fe<tn;fe++){if(g[fe]<=0)continue;if(Me=!0,d[fe]+=ne,d[fe]>=g[fe]){g[fe]=0,h[fe]=0,u[fe]=0;continue}let ge=fe*3,W=Math.max(0,1-x[fe]*ne),Te=o[ge]*W,C=o[ge+1]*W-m[fe]*ne,U=o[ge+2]*W,z=r[ge]+Te*ne,Z=r[ge+1]+C*ne,ae=r[ge+2]+U*ne;T[fe]&&Z<y[fe]&&C<0&&(Z=y[fe],C=-C*.35,Te*=.6,U*=.6,T[fe]=0),o[ge]=Te,o[ge+1]=C,o[ge+2]=U,r[ge]=z,r[ge+1]=Z,r[ge+2]=ae;let Pe=d[fe]/g[fe];u[fe]=p[fe]+(S[fe]-p[fe])*Pe,h[fe]=M[fe]*(1-Pe*Pe),c[ge]=a[ge]+(l[ge]-a[ge])*Pe,c[ge+1]=a[ge+1]+(l[ge+1]-a[ge+1])*Pe,c[ge+2]=a[ge+2]+(l[ge+2]-a[ge+2])*Pe}return Me}let V=null;if(i>0){let ne=new gt,Me=new Float32Array(vo*6),fe=new mt(Me,3).setUsage(Ri);ne.setAttribute("position",fe);let ge=new Float32Array(vo*3),W=new Float32Array(vo),Te=new Float32Array(vo);for(let z=0;z<vo;z++)ge[z*3]=(Math.random()-.5)*rg,ge[z*3+1]=-12+Math.random()*og,ge[z*3+2]=(Math.random()-.5)*ag,W[z]=Vn(22,30),Te[z]=Vn(.8,1.2);let C=new Ts({color:12900095,transparent:!0,opacity:.16,depthWrite:!1}),U=new ir(ne,C);U.frustumCulled=!1,n.add(U),V={geo:ne,mat:C,lines:U,attr:fe,pa:Me,head:ge,fall:W,len:Te,windX:5.5*s,windZ:2*s}}function J(ne,Me,fe){let ge=V,W=ge.pa,Te=ge.head,C=ge.windX,U=ge.windZ,z=Me.x,Z=Me.y+fE,ae=Me.z;for(let Pe=0;Pe<vo;Pe++){let He=Pe*3,Ge=z+Qf(Te[He]-z,rg),q=Z+Qf(Te[He+1]-Z,og),re=ae+Qf(Te[He+2]-ae,ag),me=ge.fall[Pe],ye=C-fe.x,Se=-me-fe.y,De=U-fe.z,Ze=.05*ge.len[Pe],Ke=Pe*6;W[Ke]=Ge-ye*Ze,W[Ke+1]=q-Se*Ze,W[Ke+2]=re-De*Ze,W[Ke+3]=Ge,W[Ke+4]=q,W[Ke+5]=re,Te[He]=Ge+C*ne,Te[He+1]=q-me*ne,Te[He+2]=re+U*ne}ge.attr.needsUpdate=!0}let oe=new Float32Array(_a*4*3),de=new Float32Array(_a*4),ve=new Uint16Array(_a*6);for(let ne=0;ne<_a;ne++){let Me=ne*4;ve.set([Me,Me+1,Me+2,Me,Me+2,Me+3],ne*6)}let ce=new gt,ie=new mt(oe,3).setUsage(Ri),Q=new mt(de,1).setUsage(Ri);ce.setAttribute("position",ie),ce.setAttribute("aAlpha",Q),ce.setIndex(new mt(ve,1));let ee=new vt({uniforms:{uColor:{value:new Re(1315086)}},vertexShader:ME,fragmentShader:bE,transparent:!0,depthWrite:!1,side:Pt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),I=new ot(ce,ee);I.frustumCulled=!1,n.add(I);let B=0,X=1/0,$=-1;function pe(ne,Me,fe,ge,W,Te,C=.3,U=.5){if(![ne,Me,fe,ge,W,Te,C,U].every(Number.isFinite))return;let z=ge-ne,Z=Te-fe,ae=Math.hypot(z,Z);if(ae<1e-4)return;let Pe=C*.5,He=-Z/ae*Pe,Ge=z/ae*Pe,q=Ma(U,0,1),re=Me+.03,me=W+.03,ye=B*4;B=(B+1)%_a;let Se=oe,De=ye*3;Se[De]=ne+He,Se[De+1]=re,Se[De+2]=fe+Ge,Se[De+3]=ne-He,Se[De+4]=re,Se[De+5]=fe-Ge,Se[De+6]=ge-He,Se[De+7]=me,Se[De+8]=Te-Ge,Se[De+9]=ge+He,Se[De+10]=me,Se[De+11]=Te+Ge,de[ye]=q,de[ye+1]=q,de[ye+2]=q,de[ye+3]=q,ye<X&&(X=ye),ye+3>$&&($=ye+3)}function we(){if($<0)return;let ne=X,Me=$-X+1;ie.clearUpdateRanges(),ie.addUpdateRange(ne*3,Me*3),ie.needsUpdate=!0,Q.clearUpdateRanges(),Q.addUpdateRange(ne,Me),Q.needsUpdate=!0,X=1/0,$=-1}let Ae=new ht;Ae.matrixAutoUpdate=!1,n.add(Ae);let G=new Float32Array(xr*6),Ve=new mt(G,3).setUsage(Ri),ze=new gt;ze.setAttribute("position",Ve);let Be=new Float32Array(xr),Ie=new Float32Array(xr),qe=new Float32Array(xr),Fe=new Float32Array(xr);for(let ne=0;ne<xr;ne++){let Me=Math.random()*sg,fe=Vn(.8,1.5);Be[ne]=Math.cos(Me)*fe,Ie[ne]=Math.sin(Me)*fe,qe[ne]=-ed-Math.random()*lg,Fe[ne]=Vn(.5,1.2)}let N=new Ts({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),A=new ir(ze,N);A.frustumCulled=!1,A.visible=!1,Ae.add(A);let j=0,xe=0,_e=0,he=0;function Ce(ne,Me){_e+=(j-_e)*(1-Math.exp(-6*ne)),he+=(xe-he)*(1-Math.exp(-8*ne)),Me.updateMatrixWorld(),Ae.matrix.copy(Me.matrixWorld),Ae.matrixWorld.copy(Me.matrixWorld);let fe=Ma((_e-.55)/.45,0,1),ge=Math.min(1,.55*fe*fe*(3-2*fe)+.6*he),W=Math.floor(ge*xr);if(W<=0){A.visible=!1;return}A.visible=!0,ze.setDrawRange(0,W*2),N.color.copy(mE).lerp(gE,he),N.opacity=.05+.24*ge;let Te=(60+110*ge)*ne,C=1.5+5*ge,U=G;for(let z=0;z<W;z++){let Z=qe[z]+Te;Z>-ed&&(Z-=lg),qe[z]=Z;let ae=-Z,Pe=Be[z]*ae*.9,He=Ie[z]*ae*.5,Ge=C*Fe[z],q=z*6;U[q]=Pe,U[q+1]=He,U[q+2]=Z,U[q+3]=Pe,U[q+4]=He,U[q+5]=Z-Ge}Ve.needsUpdate=!0}let Le=new H,Ne=new H,ke=!1,Ee=!1;function Ue(ne,Me){if(Ee)return;ne=xE(ne);let fe=Me.position;ke?ne>0&&(Ne.subVectors(fe,Le).divideScalar(ne),Ne.lengthSq()>Jf*Jf&&Ne.setLength(Jf),Le.copy(fe)):(Le.copy(fe),Ne.set(0,0,0),ke=!0);let ge=Vs(Me.fov,60);L.uniforms.uScale.value=vE()/(2*Math.tan(ge*Math.PI/360)),(Y(ne)||v)&&(_.needsUpdate=!0,E.needsUpdate=!0,R.needsUpdate=!0,F.needsUpdate=!0,k.needsUpdate=!0,v=!1),V&&ne>0&&J(ne,fe,Ne),Ce(ne,Me),we()}function se(ne,Me){let fe=Ma(Vs(ne,0),0,1.5);j=Ma((fe-.7)/.3,0,1),xe=Me?1:0}function be(){Ee||(Ee=!0,n.remove(O,I,Ae),V&&n.remove(V.lines),w.dispose(),L.dispose(),ce.dispose(),ee.dispose(),ze.dispose(),N.dispose(),V&&(V.geo.dispose(),V.mat.dispose()))}return{emit:D,addSkid:pe,setSpeed:se,update:Ue,dispose:be}}var Gs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},SE=new bs(-1,1,1,-1,0,1),td=class extends gt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}},TE=new td,Di=class{constructor(e){this._mesh=new ot(TE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,SE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var yo=class extends Ln{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=En.clone(e.uniforms),this.material=new vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Di(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ba=class extends Ln{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},_c=class extends Ln{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Mc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new $e);this._width=i.width,this._height=i.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yo(Gs),this.copyPass.material.blending=sn,this.clock=new Ll}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ba!==void 0&&(o instanceof ba?i=!0:o instanceof _c&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var bc=class extends Ln{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var ug={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var _o=class n extends Ln{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new $e(e.x,e.y):new $e(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(r,o,{type:hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new qt(r,o,{type:hn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new qt(r,o,{type:hn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=ug;this.highPassUniforms=En.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new $e(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Gs;this.copyUniforms=En.clone(u.uniforms),this.blendMaterial=new vt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Xr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new Yt,this.fsQuad=new Di(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new $e(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new vt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $e(.5,.5)},direction:{value:new $e(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};_o.BlurDirectionX=new $e(1,0);_o.BlurDirectionY=new $e(0,1);var hg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Sc=class extends Ln{constructor(){super();let e=hg;this.uniforms=En.clone(e.uniforms),this.material=new El({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Di(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===Et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ah?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Rh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ch?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ia?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ph?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ih&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Sa={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $e},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new je},cameraProjectionMatrixInverse:{value:new je},cameraWorldMatrix:{value:new je},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new H(-1,-1,-1)},sceneBoxMax:{value:new H(1,1,1)}},vertexShader:`

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
		}`},Ta={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Tc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function fg(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=EE(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new H(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Ss(s,e,e);return r.wrapS=Pn,r.wrapT=Pn,r.needsUpdate=!0,r}function EE(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var Ea={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:nd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $e},cameraProjectionMatrixInverse:{value:new je},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function nd(n,e,t){let i=wE(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function wE(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new H(Math.cos(r),Math.sin(r),o))}return i}var Ec=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,d=c-h,g=e-f,x=t-d,m,p;g>x?(m=1,p=0):(m=0,p=1);let S=g-m+u,M=x-p+u,y=g-1+2*u,T=x-1+2*u,b=l&255,v=c&255,w=this.perm[b+this.perm[v]]%12,_=this.perm[b+m+this.perm[v+p]]%12,E=this.perm[b+1+this.perm[v+1]]%12,R=.5-g*g-x*x;R<0?i=0:(R*=R,i=R*R*this.dot(this.grad3[w],g,x));let F=.5-S*S-M*M;F<0?s=0:(F*=F,s=F*F*this.dot(this.grad3[_],S,M));let k=.5-y*y-T*T;return k<0?r=0:(k*=k,r=k*k*this.dot(this.grad3[E],y,T)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),f=Math.floor(i+c),d=1/6,g=(u+h+f)*d,x=u-g,m=h-g,p=f-g,S=e-x,M=t-m,y=i-p,T,b,v,w,_,E;S>=M?M>=y?(T=1,b=0,v=0,w=1,_=1,E=0):S>=y?(T=1,b=0,v=0,w=1,_=0,E=1):(T=0,b=0,v=1,w=1,_=0,E=1):M<y?(T=0,b=0,v=1,w=0,_=1,E=1):S<y?(T=0,b=1,v=0,w=0,_=1,E=1):(T=0,b=1,v=0,w=1,_=1,E=0);let R=S-T+d,F=M-b+d,k=y-v+d,L=S-w+2*d,O=M-_+2*d,D=y-E+2*d,Y=S-1+3*d,V=M-1+3*d,J=y-1+3*d,oe=u&255,de=h&255,ve=f&255,ce=this.perm[oe+this.perm[de+this.perm[ve]]]%12,ie=this.perm[oe+T+this.perm[de+b+this.perm[ve+v]]]%12,Q=this.perm[oe+w+this.perm[de+_+this.perm[ve+E]]]%12,ee=this.perm[oe+1+this.perm[de+1+this.perm[ve+1]]]%12,I=.6-S*S-M*M-y*y;I<0?s=0:(I*=I,s=I*I*this.dot3(this.grad3[ce],S,M,y));let B=.6-R*R-F*F-k*k;B<0?r=0:(B*=B,r=B*B*this.dot3(this.grad3[ie],R,F,k));let X=.6-L*L-O*O-D*D;X<0?o=0:(X*=X,o=X*X*this.dot3(this.grad3[Q],L,O,D));let $=.6-Y*Y-V*V-J*J;return $<0?a=0:($*=$,a=$*$*this.dot3(this.grad3[ee],Y,V,J)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,f,d,g,x=(e+t+i+s)*l,m=Math.floor(e+x),p=Math.floor(t+x),S=Math.floor(i+x),M=Math.floor(s+x),y=(m+p+S+M)*c,T=m-y,b=p-y,v=S-y,w=M-y,_=e-T,E=t-b,R=i-v,F=s-w,k=_>E?32:0,L=_>R?16:0,O=E>R?8:0,D=_>F?4:0,Y=E>F?2:0,V=R>F?1:0,J=k+L+O+D+Y+V,oe=o[J][0]>=3?1:0,de=o[J][1]>=3?1:0,ve=o[J][2]>=3?1:0,ce=o[J][3]>=3?1:0,ie=o[J][0]>=2?1:0,Q=o[J][1]>=2?1:0,ee=o[J][2]>=2?1:0,I=o[J][3]>=2?1:0,B=o[J][0]>=1?1:0,X=o[J][1]>=1?1:0,$=o[J][2]>=1?1:0,pe=o[J][3]>=1?1:0,we=_-oe+c,Ae=E-de+c,G=R-ve+c,Ve=F-ce+c,ze=_-ie+2*c,Be=E-Q+2*c,Ie=R-ee+2*c,qe=F-I+2*c,Fe=_-B+3*c,N=E-X+3*c,A=R-$+3*c,j=F-pe+3*c,xe=_-1+4*c,_e=E-1+4*c,he=R-1+4*c,Ce=F-1+4*c,Le=m&255,Ne=p&255,ke=S&255,Ee=M&255,Ue=a[Le+a[Ne+a[ke+a[Ee]]]]%32,se=a[Le+oe+a[Ne+de+a[ke+ve+a[Ee+ce]]]]%32,be=a[Le+ie+a[Ne+Q+a[ke+ee+a[Ee+I]]]]%32,ne=a[Le+B+a[Ne+X+a[ke+$+a[Ee+pe]]]]%32,Me=a[Le+1+a[Ne+1+a[ke+1+a[Ee+1]]]]%32,fe=.6-_*_-E*E-R*R-F*F;fe<0?u=0:(fe*=fe,u=fe*fe*this.dot4(r[Ue],_,E,R,F));let ge=.6-we*we-Ae*Ae-G*G-Ve*Ve;ge<0?h=0:(ge*=ge,h=ge*ge*this.dot4(r[se],we,Ae,G,Ve));let W=.6-ze*ze-Be*Be-Ie*Ie-qe*qe;W<0?f=0:(W*=W,f=W*W*this.dot4(r[be],ze,Be,Ie,qe));let Te=.6-Fe*Fe-N*N-A*A-j*j;Te<0?d=0:(Te*=Te,d=Te*Te*this.dot4(r[ne],Fe,N,A,j));let C=.6-xe*xe-_e*_e-he*he-Ce*Ce;return C<0?g=0:(C*=C,g=C*C*this.dot4(r[Me],xe,_e,he,Ce)),27*(u+h+f+d+g)}};var wa=class n extends Ln{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=fg(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new qt(this.width,this.height,{type:hn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new vt({defines:Object.assign({},Sa.defines),uniforms:En.clone(Sa.uniforms),vertexShader:Sa.vertexShader,fragmentShader:Sa.fragmentShader,blending:sn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new wl,this.normalMaterial.blending=sn,this.pdMaterial=new vt({defines:Object.assign({},Ea.defines),uniforms:En.clone(Ea.uniforms),vertexShader:Ea.vertexShader,fragmentShader:Ea.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new vt({defines:Object.assign({},Ta.defines),uniforms:En.clone(Ta.uniforms),vertexShader:Ta.vertexShader,fragmentShader:Ta.fragmentShader,blending:sn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new vt({uniforms:En.clone(Gs.uniforms),vertexShader:Gs.vertexShader,fragmentShader:Gs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ul,blendDst:co,blendEquation:Fn,blendSrcAlpha:Nl,blendDstAlpha:co,blendEquationAlpha:Fn}),this.blendMaterial=new vt({uniforms:En.clone(Tc.uniforms),vertexShader:Tc.vertexShader,fragmentShader:Tc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:na,blendSrc:Ul,blendDst:co,blendEquation:Fn,blendSrcAlpha:Nl,blendDstAlpha:co,blendEquationAlpha:Fn}),this.fsQuad=new Di(null),this.originalClearColor=new Re,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new to,this.depthTexture.format=_s,this.depthTexture.type=ys,this.normalRenderTarget=new qt(this.width,this.height,{minFilter:Kt,magFilter:Kt,type:hn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=nd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=sn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=sn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=sn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=sn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=sn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new Ec,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Ss(s,e,e,Bn,vi);return r.wrapS=Pn,r.wrapT=Pn,r.needsUpdate=!0,r}};wa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var dg=58,AE=82,pg=94,RE=9,CE=20,mg=4.7,PE=1.95,IE=3,LE=4,DE=5,wc=.6;function Ws(n,e,t){return n<e?e:n>t?t:n}function Lt(n,e=0){return Number.isFinite(n)?n:e}function NE(n,e,t){return n+(e-n)*t}function Mo(n,e){return 1-Math.exp(-n*e)}function UE(n){return Number.isFinite(n)?Ws(n,0,.1):0}function gg(n){let e=new H,t=new H,i=new H,s=new H,r={x:1,z:0},o=!1,a=0,l=0,c=0,u=dg,h=mg,f=0,d=0,g=0;function x(T,b){let v=Lt(T.x),w=Lt(T.y),_=Lt(T.z),E=Lt(T.heading)+Lt(T.yaw),R=Math.sin(E),F=Math.cos(E),k=-F,L=R;r.x=k,r.z=L;let O=T.airborne?1:0,D=b*b,Y=mg-.3*D+.9*O,V=PE-.15*D+.7*O;h=Y;let J=Ws(Lt(T.slope),-.15,.15),oe=Ws(Lt(T.lean),-1.5,1.5),de=0;e.set(v-R*Y+k*de,w+V-J*Y,_-F*Y+L*de),e.y<w+wc&&(e.y=w+wc),t.set(v+R*8.5,w+.55+J*4-1.5*O,_+F*8)}function m(T){return NE(dg,AE,Math.pow(T,1.6))}function p(T,b,v,w){n.position.set(i.x+r.x*b,Math.max(i.y+v,w),i.z+r.z*b),n.lookAt(s),n.rotateZ(T)}function S(T,b){if(T=UE(T),!o){M(b);return}a+=T;let v=Ws(Lt(b.speedRatio),0,1);x(b,v);let w=Lt(b.x)-f,_=Lt(b.y)-d,E=Lt(b.z)-g;w*w+_*_+E*E<400&&(i.x+=w,i.y+=_,i.z+=E,s.x+=w,s.y+=_,s.z+=E),f=Lt(b.x),d=Lt(b.y),g=Lt(b.z),i.lerp(e,Mo(RE,T));let R=i.x-Lt(b.x),F=i.z-Lt(b.z),k=Math.hypot(R,F);k>.001&&(i.x=Lt(b.x)+R/k*h,i.z=Lt(b.z)+F/k*h),s.lerp(t,Mo(CE,T));let L=Lt(b.y)+wc;i.y<L&&(i.y=L),c*=Math.exp(-DE*T);let O=v*v*v*2.2,D=Math.sin(a*61.3)*.6+Math.sin(a*97.1+1.7)*.4,Y=Math.sin(a*73.9+.4)*.6+Math.sin(a*113.7+2.9)*.4,V=Math.sin(a*67.8+1.1)*.6+Math.sin(a*121.4+.3)*.4,J=c*.35+O*.01,oe=D*J,de=Y*J,ve=V*(c*.03+O*.002);l+=((b.boosting?1:0)-l)*Mo(LE,T);let ce=m(v),ie=ce+(pg-ce)*l;u+=(ie-u)*Mo(IE,T),Math.abs(n.fov-u)>1e-4&&(n.fov=u,n.updateProjectionMatrix()),p(ve,oe,de,L)}function M(T){let b=Ws(Lt(T.speedRatio),0,1);x(T,b),i.copy(e),s.copy(t),f=Lt(T.x),d=Lt(T.y),g=Lt(T.z),o=!0,a=0,c=0,l=T.boosting?1:0,u=m(b)+(pg-m(b))*l,n.fov=u,n.updateProjectionMatrix(),p(0,0,0,Lt(T.y)+wc)}function y(T){c=Ws(c+Lt(T),0,1.5)}return{update:S,shake:y,snap:M}}var FE=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,OE=`
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
}`;function xg(n,e,t,i,s={}){let r=i||{},o=Lt(r.bloom,.5),a=null,l=null,c=null,u=null,h=0,f=0,d=0,g=0,x=0,m=Math.min(globalThis.devicePixelRatio||1,2);try{let b=n.getSize(new $e),v=new qt(Math.max(1,b.x),Math.max(1,b.y),{type:hn,samples:4});a=new Mc(n,v),a.setPixelRatio(m),a.addPass(new bc(e,t)),s.ao&&!r.night&&(u=new wa(e,t,Math.max(1,b.x),Math.max(1,b.y)),u.updateGtaoMaterial({radius:3.2,distanceExponent:1.4,thickness:4,scale:1.15,samples:12,screenSpaceRadius:!1}),u.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),u.blendIntensity=.6,a.addPass(u)),l=new _o(new $e(512,512),o*.8,.75,.9),a.addPass(l),c=new yo({uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uBoost:{value:0},uTime:{value:0}},vertexShader:FE,fragmentShader:OE}),a.addPass(c),a.addPass(new Sc)}catch(b){console.warn("Post-traitement indisponible, rendu direct :",b),a=null,l=null,c=null}function p(b,v){!Number.isFinite(b)||!Number.isFinite(v)||b<=0||v<=0||(m=Math.min(globalThis.devicePixelRatio||1,2),n.setPixelRatio(m),n.setSize(b,v),a&&(a.setPixelRatio(m),a.setSize(b,v)))}function S(b,v){h=Ws(Lt(b,0),0,1),f=v?1:0}function M(b){if(b=Number.isFinite(b)?Ws(b,0,.1):0,x+=b,d+=(h-d)*Mo(8,b),g+=(f-g)*Mo(8,b),c&&(c.uniforms.uSpeed.value=d,c.uniforms.uBoost.value=g,c.uniforms.uTime.value=x),a)try{a.render(b);return}catch(v){console.warn("\xC9chec du post-traitement, rendu direct :",v),a=null}n.render(e,t)}function y(b){u&&(u.enabled=!!b)}function T(){u&&u.dispose&&u.dispose(),a&&a.dispose(),l&&l.dispose&&l.dispose(),c&&c.dispose&&c.dispose(),a=null}return{render:M,setSize:p,setSpeed:S,dispose:T,setAO:y,get hasAO(){return!!u},get aoOn(){return!!u&&u.enabled}}}function vg(n){if(!Number.isFinite(n))return`--'--"---`;let e=Math.floor(n/60),t=Math.floor(n%60),i=Math.floor(n*1e3%1e3);return`${String(e).padStart(2,"0")}'${String(t).padStart(2,"0")}"${String(i).padStart(3,"0")}`}var Wt=(n,e,t,i)=>{let s=document.createElement(n);return e&&(s.className=e),i!=null&&(s.textContent=i),t?.appendChild(s),s};function yg(n){let e=Wt("div","h2-root",n);e.hidden=!0;let t=Wt("div","h2-pos",e),i=Wt("span","h2-pos-num",t,"1"),s=Wt("span","h2-pos-tot",t,"/8");Wt("span","h2-pos-lbl",t,"POS");let r=Wt("div","h2-right",e),o=Wt("div","h2-pill h2-lap",r),a=Wt("span","h2-lap-lbl",o,"TOUR"),l=Wt("span","h2-lap-num",o,"1"),c=Wt("span","h2-lap-tot",o,"/3"),u=Wt("div","h2-pill h2-time",r,`00'00"000`),h=Wt("div","h2-best",r,""),f=Wt("canvas","h2-map",e),d=220;f.width=f.height=d;let g=f.getContext("2d"),x=document.createElement("canvas");x.width=x.height=d;let m=null,p=1,S=0,M=0,y=Wt("div","h2-dial",e),T=Wt("canvas","h2-dial-canvas",y),b=300;T.width=T.height=b;let v=T.getContext("2d"),w=Wt("div","h2-gear",y,"1"),_=Wt("div","h2-speed",y,"0");Wt("div","h2-unit",y,"km/h");let E=Wt("div","h2-boost",y),R=[],F=Wt("div","h2-count",e,""),k=Wt("div","h2-flash",e,""),L=Wt("div","h2-wrong",e,"CONTRESENS");L.hidden=!0;let O={},D=(I,B,X)=>{O[I]!==X&&(O[I]=X,B.textContent=X)},Y=Math.PI*.75,V=Math.PI*2.25,J=-1;function oe(I){let B=Math.round(I*120)/120;if(B===J)return;J=B;let X=b/2,$=b*.44;v.clearRect(0,0,b,b),v.lineCap="butt",v.beginPath(),v.arc(X,X,$*1.05,0,Math.PI*2),v.fillStyle="rgba(8, 10, 16, 0.42)",v.fill();let pe=(G,Ve,ze,Be)=>{v.beginPath(),v.arc(X,X,$,G,Ve),v.strokeStyle=ze,v.lineWidth=Be,v.stroke()},we=Y+(V-Y)*.86;pe(Y,we,"rgba(255,255,255,0.28)",b*.05),pe(we,V,"rgba(226,40,48,0.55)",b*.05);let Ae=Y+(V-Y)*Math.min(1,Math.max(0,B));pe(Y,Math.min(Ae,we),"#ffffff",b*.05),Ae>we&&pe(we,Ae,"#e8242e",b*.05);for(let G=0;G<=8;G++){let Ve=Y+(V-Y)*G/8;v.beginPath(),v.moveTo(X+Math.cos(Ve)*$*.8,X+Math.sin(Ve)*$*.8),v.lineTo(X+Math.cos(Ve)*$*.9,X+Math.sin(Ve)*$*.9),v.strokeStyle=G>=7?"#e8242e":"rgba(255,255,255,0.75)",v.lineWidth=3,v.stroke()}v.beginPath(),v.moveTo(X+Math.cos(Ae)*$*.3,X+Math.sin(Ae)*$*.3),v.lineTo(X+Math.cos(Ae)*$*.98,X+Math.sin(Ae)*$*.98),v.strokeStyle="#ffffff",v.lineWidth=4,v.stroke()}oe(0);function de(I){m=I;let B=I.bounds,X=B.maxX-B.minX,$=B.maxZ-B.minZ;p=(d-36)/Math.max(X,$),S=(d-X*p)/2-B.minX*p,M=(d-$*p)/2-B.minZ*p;let pe=x.getContext("2d");pe.clearRect(0,0,d,d);let we=()=>{pe.beginPath(),I.pts.forEach((Ae,G)=>{let Ve=Ae.x*p+S,ze=Ae.z*p+M;G?pe.lineTo(Ve,ze):pe.moveTo(Ve,ze)}),I.open||pe.closePath()};pe.lineJoin="round",we(),pe.strokeStyle="rgba(0,0,0,0.45)",pe.lineWidth=9,pe.stroke(),we(),pe.strokeStyle="#ffffff",pe.lineWidth=5,pe.stroke(),we(),pe.strokeStyle="rgba(20,24,34,0.9)",pe.lineWidth=2,pe.stroke(),g.clearRect(0,0,d,d),g.drawImage(x,0,0)}function ve(I){if(!m)return;g.clearRect(0,0,d,d),g.drawImage(x,0,0);let B=m.pts.length,X=($,pe)=>{let we=Math.floor(($.s%m.length+m.length)%m.length/m.step);we>=B&&(we=B-1);let Ae=m.pts[we],G=Ae.x*p+S,Ve=Ae.z*p+M;g.beginPath(),g.arc(G,Ve,pe?6:3.6,0,Math.PI*2),g.fillStyle=pe?"#e8242e":"#ffffff",g.fill(),g.lineWidth=1.5,g.strokeStyle="rgba(0,0,0,0.6)",g.stroke()};for(let $ of I)$.isPlayer||X($,!1);for(let $ of I)$.isPlayer&&X($,!0)}let ce=null;function ie(I){D("pos",i,String(I.position)),D("tot",s,"/"+I.total),D("lap",l,String(I.lap)),D("laps",c,"/"+I.laps),D("time",u,vg(I.time)),D("best",h,I.bestLap?"MEILLEUR "+vg(I.bestLap):""),D("speed",_,String(Math.round(I.speedKmh))),D("gear",w,String(I.gear||1)),oe(I.rpm??Math.min(1,I.speedKmh/290));let B=I.boostCharges|0,X=I.boostT>0?1:0,$=B+":"+X;if(O.boost!==$){for(O.boost=$;R.length<B+X;)R.push(Wt("span","h2-boost-dot",E));R.forEach((pe,we)=>{pe.hidden=we>=B+X,pe.classList.toggle("h2-on",X&&we===B)})}if(I.countdown===null||I.countdown===void 0)ce===null&&O.count!==""&&(O.count="",F.textContent="",F.classList.remove("h2-show"));else if(I.countdown>0){let pe=String(Math.ceil(I.countdown));O.count!==pe&&(O.count=pe,F.textContent=pe,F.classList.remove("h2-show"),F.offsetWidth,F.classList.add("h2-show"))}else O.count!=="GO !"&&(O.count="GO !",F.textContent="GO !",F.classList.remove("h2-show"),F.offsetWidth,F.classList.add("h2-show"),clearTimeout(ce),ce=setTimeout(()=>{ce=null},800));L.hidden===!!I.wrongWay&&(L.hidden=!I.wrongWay)}let Q=null;function ee(I,B=900){k.textContent=I,k.classList.remove("h2-show"),k.offsetWidth,k.classList.add("h2-show"),clearTimeout(Q),Q=setTimeout(()=>k.classList.remove("h2-show"),B)}return{show(){e.hidden=!1},hide(){e.hidden=!0},update:ie,setTrack:de,updateMinimap:ve,flash:ee,setLapLabel(I){a.textContent!==I&&(a.textContent=I)},dispose(){e.remove()}}}var g2=ar.maxSpeed*3.6;var _g=360;var Mg=n=>(n<10?"0":"")+n;function id(n){if(n==null||!Number.isFinite(n))return"--:--.--";let e=Math.max(0,Math.floor(n*100+1e-6)),t=Math.floor(e/6e3),i=Math.floor(e/100)%60;return`${t}:${Mg(i)}.${Mg(e%100)}`}var x2=`
  <div class="pr-pos"><span class="pr-pos-cur">-</span><span class="pr-pos-sep">/</span><span class="pr-pos-tot">-</span></div>
  <div class="pr-wrong">Sens interdit</div>
  <div class="pr-timing">
    <div class="pr-lap">Tour -/-</div>
    <div class="pr-time">0:00.00</div>
    <div class="pr-best">Meilleur <span class="pr-best-v">--:--.--</span></div>
  </div>
  <div class="pr-left">
    <div class="pr-mm-wrap"><canvas class="pr-minimap" width="${_g}" height="${_g}"></canvas></div>
    <div class="pr-boosts"><span class="pr-boost-lbl">Boost</span><div class="pr-dias"></div></div>
  </div>
  <div class="pr-speed">
    <div class="pr-speed-num">0</div>
    <div class="pr-speed-unit">km/h</div>
    <div class="pr-bar"></div>
  </div>
  <div class="pr-count"></div>
  <div class="pr-flash"></div>
`;var bg="ABCDEFGHJKMNPQRSTUVWXYZ23456789",Sg=0;function sd(){Sg++;let n=kn((Date.now()^Math.imul(Sg,2654435761))>>>0),e="RUSH-";for(let t=0;t<4;t++)e+=bg[n.int(0,bg.length-1)];return e}var dt=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Tg(n){return n?typeof n=="string"?Ci[n]?.name||n:n.name||Ci[n.id]?.name||"":""}function BE(n){return n&&typeof n=="object"?n:lr.find(e=>e.id===n)||{id:String(n),name:String(n),icon:"\u2022"}}function rd(n){let e=new Map;for(let i of n||[]){let s=BE(i),r=e.get(s.id);r?r.n++:e.set(s.id,{info:s,n:1})}if(!e.size)return'<span class="pr-own-none">Aucune pour l\u2019instant</span>';let t="";for(let{info:i,n:s}of e.values())t+=`<span class="pr-own">${dt(i.icon)} ${dt(i.name)}${s>1?` \xD7${s}`:""}</span>`;return t}function od(n){return(n||[]).map((e,t)=>`<li class="pr-srow${e.isPlayer?" pr-me":""}" style="--i:${t}"><span class="pr-rk">${t+1}</span><span class="pr-rn">${dt(e.name)}</span><span class="pr-rp">${e.points??0}<small> pts</small></span></li>`).join("")}function Eg(n){let e=document.createElement("div");e.className="pr-menu pr-off",n.appendChild(e);let t=null,i=null;function s(M){try{t&&typeof t.play=="function"&&t.play(M)}catch{}}function r(M,y){let T=i;if(!T||!T.items.length)return;let b=T.items.length,v=(M%b+b)%b,w=v!==T.index;T.index=v,T.focused=!0;for(let _=0;_<b;_++)T.items[_].classList.toggle("pr-sel",_===v);try{T.items[v].focus({preventScroll:!0})}catch{}w&&y&&s("select")}function o(M){let y=i;y&&(i=null,e.innerHTML="",e.classList.add("pr-off"),s("confirm"),y.resolve(M))}function a(M){return i=null,e.innerHTML=M.html,e.classList.remove("pr-off"),new Promise(y=>{i={items:Array.from(e.querySelectorAll("[data-nav]")),index:0,focused:!1,actions:M.actions||{},resolve:y},M.onMount&&M.onMount(e,o),r(M.initial||0,!1)})}e.addEventListener("click",M=>{let y=i;if(!y||!(M.target instanceof Element))return;let T=M.target.closest("[data-act]");if(!T||!e.contains(T)||T.disabled)return;let b=y.items.indexOf(T);b>=0&&b!==y.index&&r(b,!1);let v=y.actions[T.dataset.act];v&&v(T,o)}),e.addEventListener("mouseover",M=>{let y=i;if(!y||!(M.target instanceof Element))return;let T=M.target.closest("[data-nav]");if(!T)return;let b=y.items.indexOf(T);b>=0&&b!==y.index&&r(b,!0)}),window.addEventListener("keydown",M=>{let y=i;if(!y)return;let T=M.target,b=!!T&&T.tagName==="INPUT",v=M.key||"",w=v.toLowerCase();if(v==="ArrowUp"||!b&&(v==="ArrowLeft"||w==="z"||w==="q")){M.preventDefault(),r(y.index-1,!0);return}if(v==="ArrowDown"||!b&&(v==="ArrowRight"||w==="s"||w==="d")){M.preventDefault(),r(y.index+1,!0);return}if(b){if(v==="Enter"){M.preventDefault();let _=e.querySelector("[data-main]");_&&_.click()}return}if(v.length===1){let _=y.items.find(E=>E.dataset.key===v);_&&(M.preventDefault(),_.click())}});function l({dailySeed:M,meta:y,route:T=null,records:b=null}={}){let v=y||{};if(T)return f(T,v,b||{});let w=String(M||"RUSH-DAILY").toUpperCase(),_=sd();return a({initial:2,html:`
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
    <button type="button" class="pr-btn" data-nav data-act="daily">D\xE9fi du jour<small>${dt(w)}</small></button>
  </div>
  <div class="pr-stats pr-slide" style="--i:4">
    <div><b>${v.runs??0}</b><span>runs</span></div>
    <div><b>${v.wins??0}</b><span>victoires</span></div>
    <div><b>${v.bestPoints??0}</b><span>record de points</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage</p>
</section>`,actions:{dice:E=>{let R=E.closest(".pr-screen").querySelector("[data-seed]");R&&(R.value=sd())},launch:(E,R)=>{let F=E.closest(".pr-screen").querySelector("[data-seed]"),k=(F?F.value:"").trim().toUpperCase();k||(k=sd()),R({seed:k})},daily:(E,R)=>R({seed:w})}})}let c=M=>`${Math.floor(M/60)}'${String(Math.floor(M%60)).padStart(2,"0")}"`,u=M=>M==null?"":` <small>${M<0?"\u2212":"+"}${Math.abs(M).toFixed(1)} s</small>`;function h(M){if(!M)return"";let y='<li style="display:flex;justify-content:space-between;gap:1.5em">',T=M.splits.map((v,w)=>`${y}<span>${w+1} \xB7 ${dt(v.name.split(" \xB7 ")[0])}</span><b>${dt(c(v.time))}${u(v.delta)}${v.record&&v.best!==null?" \u2605":""}</b></li>`).join(""),b;return M.total?M.total.best===null?b=`Temps total <b>${dt(c(M.time))}</b> \xB7 premier chrono enregistr\xE9`:M.total.record?b=`Temps total <b>${dt(c(M.time))}</b> \xB7 <b>nouveau record</b>${u(M.total.delta)}`:b=`Temps total <b>${dt(c(M.time))}</b> \xB7 record ${dt(c(M.total.best))}${u(M.total.delta)}`:b=`Temps <b>${dt(c(M.time))}</b> \xB7 le record de l'itin\xE9raire ne compte que depuis Catane`,`<p class="pr-sub">${b}</p><ul style="list-style:none;margin:.6em 0;padding:0;display:grid;gap:.25em;font-size:.82em;text-align:left">${T}</ul>`}function f(M,y,T){let b=Object.keys(T.splits||{}).length,v=(M.stages.reduce((_,E)=>_+E.length,0)/1e3).toFixed(0),w=M.stages.map((_,E)=>`<option value="${E+1}">${E+1} \xB7 ${dt(_.subtitle)}</option>`).join("");return a({initial:1,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">${dt(M.title)} \xB7 ${dt(M.roads)} \xB7 ${v} km d'une traite</p>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-from-in">D\xE9part</label>
    <div class="pr-seedbox">
      <select id="pr-from-in" class="pr-input" data-nav data-from style="width:min(86vw,34em);font-size:2.3vmin;letter-spacing:0.04em;text-align:left;text-transform:none">${w}</select>
    </div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="launch">Prendre la route</button>
    <button type="button" class="pr-btn" data-nav data-act="multi">Multijoueur<small>salon par code</small></button>
  </div>
  <div class="pr-stats pr-slide" style="--i:4">
    <div><b>${T.total?dt(c(T.total)):"\u2013"}</b><span>record Catania \u2192 Falcone</span></div>
    <div><b>${T.finishes??0}</b><span>arriv\xE9es</span></div>
    <div><b>${b}</b><span>chronos de tron\xE7on</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage \xB7 1 2 3 am\xE9lioration aux relais</p>
</section>`,actions:{launch:(_,E)=>{let R=_.closest(".pr-screen").querySelector("[data-from]");E({seed:"A18-A20",stage:Number(R?R.value:1)||1})},multi:(_,E)=>E({multi:!0})}})}function d({stage:M={},index:y=1,total:T=1,standings:b=[],weather:v}={}){let w=Tg(v)||Tg(M.weather),_=M.laps??0;return a({initial:0,html:`
<section class="pr-screen pr-stage">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in pr-stage-main">
    <div class="pr-kicker">${M.real?"Itin\xE9raire r\xE9el":`\xC9tape ${dt(y)}/${dt(T)}`}</div>
    <h2 class="pr-h2">${dt(M.name)}</h2>
    <p class="pr-sub">${dt(M.subtitle)}</p>
    <dl class="pr-facts">
      <div><dt>M\xE9t\xE9o</dt><dd>${dt(w)}</dd></div>
      ${M.real?`<div><dt>Tron\xE7ons</dt><dd>${M.real.length} encha\xEEn\xE9s sans arr\xEAt</dd></div>
      <div><dt>D\xE9part</dt><dd>${dt(M.real[0].subtitle.split(" \xB7 ")[0])}</dd></div>`:`<div><dt>Tours</dt><dd>${dt(_)} ${_>1?"tours":"tour"}</dd></div>
      <div><dt>Seed du circuit</dt><dd>${dt(M.trackSeed)}</dd></div>`}
    </dl>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="go">D\xE9part</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${od(b)}</ol>
  </div></div>
</section>`,actions:{go:(E,R)=>R(void 0)}})}function g({results:M=[],standings:y=[],stage:T={}}={}){let v=[...M].sort((w,_)=>(w.position??99)-(_.position??99)).map((w,_)=>{let E=Hl[(w.position??0)-1]??0;return`<tr class="pr-tr${w.isPlayer?" pr-me":""}" style="--i:${_}"><td class="pr-c-pos">${dt(w.position??"")}</td><td class="pr-c-name">${dt(w.name)}</td><td class="pr-c-tm">${w.time==null?"Abandon":id(w.time)}</td><td class="pr-c-best">${w.bestLap==null?"\u2014":id(w.bestLap)}</td><td class="pr-c-pts">${E>0?"+"+E:"0"}</td></tr>`}).join("");return a({initial:0,html:`
<section class="pr-screen pr-results">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-kicker">R\xE9sultats \xB7 ${dt(T.name)}</div>
    <table class="pr-table">
      <thead><tr><th>Pos</th><th>Pilote</th><th>Temps</th><th>Meilleur tour</th><th>Pts</th></tr></thead>
      <tbody>${v}</tbody>
    </table>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="next">Continuer</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${od(y)}</ol>
  </div></div>
</section>`,actions:{next:(w,_)=>_(void 0)}})}function x({choices:M=[],index:y=1,total:T=1,owned:b=[]}={}){let v=M.map((w,_)=>`<button type="button" class="pr-card pr-slide" style="--i:${_}" data-nav data-key="${_+1}" data-act="pick" data-id="${dt(w.id)}"><span class="pr-card-in"><span class="pr-card-key">${_+1}</span><span class="pr-card-ico" aria-hidden="true">${dt(w.icon)}</span><span class="pr-card-name">${dt(w.name)}</span><span class="pr-card-tag">${dt(w.tagline)}</span><span class="pr-card-pro">\u25B2 ${dt(w.pro)}</span><span class="pr-card-con">\u25BC ${dt(w.con)}</span></span></button>`).join("");return a({initial:0,html:`
<section class="pr-screen pr-upg">
  <div class="pr-kicker pr-slide" style="--i:0">\xC9tape ${dt(y)}/${dt(T)} accomplie</div>
  <h2 class="pr-h2 pr-slide" style="--i:0">Choisissez une am\xE9lioration</h2>
  <div class="pr-cards">${v}</div>
  <div class="pr-owned pr-slide" style="--i:3"><span class="pr-owned-lbl">D\xE9j\xE0 poss\xE9d\xE9es</span>${rd(b)}</div>
</section>`,actions:{pick:(w,_)=>_(w.dataset.id)}})}function m({standings:M=[],playerPosition:y,run:T={},meta:b}={}){let v=b||{},w=y??M.findIndex(R=>R.isPlayer)+1,_=w===1,E=T.real?_?"Victoire !":`${dt(w)}e \xE0 l'arriv\xE9e`:_?"Champion !":`${dt(w)}e au championnat`;return a({initial:T.real?0:1,html:`
<section class="pr-screen pr-end">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-end-title${_?" pr-gold":""}">${E}</div>
    <ol class="pr-slist pr-slist-big">${od(M)}</ol>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    ${T.real?`<h3 class="pr-h3">${dt(T.stages[0].name)}</h3>
    <p class="pr-sub">${dt(T.stages[0].subtitle)}</p>${h(T.summary)}
    <h3 class="pr-h3">Am\xE9liorations prises</h3>
    <div class="pr-owned-list">${rd(T.upgrades)}</div>`:`<h3 class="pr-h3">Am\xE9liorations du run</h3>
    <div class="pr-owned-list">${rd(T.upgrades)}</div>
    <h3 class="pr-h3">Seed</h3>
    <div class="pr-seedline">
      <code class="pr-seedcode">${dt(T.seed)}</code>
      <button type="button" class="pr-btn pr-btn-small" data-nav data-act="copy">Copier la seed</button>
    </div>`}
    ${T.real?"":`<p class="pr-cmds">Runs : ${v.runs??0} \xB7 Victoires : ${v.wins??0} \xB7 Record : ${v.bestPoints??0} pts</p>`}
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="again">${T.real?"Repartir":"Nouveau run"}</button>
  </div></div>
</section>`,actions:{copy:R=>{let F="Copier la seed",k;try{k=navigator.clipboard.writeText(String(T.seed??""))}catch(O){k=Promise.reject(O)}let L=O=>{R.textContent=O,setTimeout(()=>{R.isConnected&&(R.textContent=F)},1500)};k.then(()=>L("Copi\xE9e !"),()=>L("Copie impossible"))},again:(R,F)=>F(void 0)}})}function p(M){t=M||null}function S(){i=null,e.innerHTML="",e.classList.add("pr-off")}return{showTitle:l,showStageIntro:d,showResults:g,showUpgradeChoice:x,showRunEnd:m,hideAll:S,setAudio:p,mount:a}}var wg=typeof globalThis<"u"&&(globalThis.AudioContext||globalThis.webkitAudioContext)||null,Ag=.6,zE=.3,ad=6,vr=55,kE=.1,HE=25,Rg=60/128/4,VE=[{root:45,iv:[3,7]},{root:41,iv:[4,7]},{root:48,iv:[4,7]},{root:43,iv:[4,7]}],bo=n=>Number.isFinite(n)?n<0?0:n>1?1:n:0,Cg=n=>440*Math.pow(2,(n-69)/12);function GE(n){let t=new Float32Array(1024);for(let i=0;i<1024;i++){let s=i*2/1023-1;t[i]=(1+n)*s/(1+n*Math.abs(s))}return t}function Pg(){let n=null,e=!1,t=null,i=null,s=null,r=null,o=null,a=null,l=null,c=!1,u=!1,h=null,f=0,d=0,g=-1,x=0,m=0,p=0;function S(I){let B=Math.round(2*I),X=Math.round(.1*I),$=new Float32Array(B+X),pe=0,we=0,Ae=0,G=0,Ve=0,ze=0,Be=0;for(let A=0;A<B+X;A++){let j=Math.random()*2-1;pe=.99886*pe+j*.0555179,we=.99332*we+j*.0750759,Ae=.969*Ae+j*.153852,G=.8665*G+j*.3104856,Ve=.55*Ve+j*.5329522,ze=-.7616*ze-j*.016898,$[A]=(pe+we+Ae+G+Ve+ze+Be+j*.5362)*.11,Be=j*.115926}let Ie=n.createBuffer(1,B,I),qe=Ie.getChannelData(0),Fe=0;for(let A=0;A<B;A++){let j=A<X?$[A]*(A/X)+$[B+A]*(1-A/X):$[A];qe[A]=j;let xe=Math.abs(j);xe>Fe&&(Fe=xe)}let N=Fe>0?1/Fe:1;for(let A=0;A<B;A++)qe[A]*=N;return Ie}function M(I){let B=n.createBufferSource();return B.buffer=i,B.loop=!0,B.connect(I),B.start(0,Math.random()*1.5),B}function y(I){let B=n.createGain();return B.gain.value=I,B}function T(I,B,X){let $=n.createBiquadFilter();return $.type=I,$.frequency.value=B,$.Q.value=X,$}function b(){i=S(n.sampleRate),t=y(c?0:Ag);let I=n.createDynamicsCompressor();I.threshold.value=-16,I.knee.value=12,I.ratio.value=4,I.attack.value=.005,I.release.value=.2,t.connect(I),I.connect(n.destination);let B=n.createOscillator();B.type="sawtooth",B.frequency.value=vr,B.detune.value=-6;let X=n.createOscillator();X.type="sawtooth",X.frequency.value=vr,X.detune.value=6;let $=n.createOscillator();$.type="square",$.frequency.value=vr/2;let pe=y(1);B.connect(y(.28)).connect(pe),X.connect(y(.28)).connect(pe),$.connect(y(.22)).connect(pe);let we=T("bandpass",vr*4,1.2),Ae=y(.04);M(we),we.connect(Ae).connect(pe);let G=n.createWaveShaper();G.curve=GE(4),G.oversample="2x",pe.connect(G);let Ve=T("lowpass",300,1.3);G.connect(Ve);let ze=y(0);Ve.connect(ze).connect(t),B.start(),X.start(),$.start(),s={osc1:B,osc2:X,osc3:$,nBp:we,nGain:Ae,lp:Ve,gain:ze};let Be=T("bandpass",300,.7),Ie=y(0);M(Be),Be.connect(Ie).connect(t),r={filter:Be,gain:Ie};let qe=T("bandpass",1100,4),Fe=y(3),N=y(0);M(qe),qe.connect(Fe).connect(N).connect(t),o={filter:qe,gain:N};let A=T("highpass",900,.5),j=y(3),xe=y(0);M(A),A.connect(j).connect(xe).connect(t),a={gain:xe},l=y(0),l.connect(t),e=!0}function v(I,B,X){let $=n.currentTime;I.cancelScheduledValues($),I.setTargetAtTime(B,$,X)}function w(I){let B=I.t0,X=I.dur,$=n.createOscillator();$.type=I.type||"sine",$.frequency.setValueAtTime(I.f0,B),I.f1&&$.frequency.exponentialRampToValueAtTime(I.f1,B+X);let pe=n.createGain();pe.gain.setValueAtTime(1e-4,B),pe.gain.linearRampToValueAtTime(I.vol,B+(I.attack||.004)),pe.gain.exponentialRampToValueAtTime(1e-4,B+X);let we=$;if(I.lp){let Ae=T("lowpass",I.lp,.7);$.connect(Ae),we=Ae}we.connect(pe),pe.connect(t),$.start(B),$.stop(B+X+.02)}function _(I){let B=I.t0,X=I.dur,$=n.createBufferSource();$.buffer=i;let pe=T(I.type,I.f0,I.q||1);I.f1&&pe.frequency.exponentialRampToValueAtTime(I.f1,B+X),pe.frequency.setValueAtTime(I.f0,B);let we=n.createGain();we.gain.setValueAtTime(1e-4,B),we.gain.linearRampToValueAtTime(I.vol,B+.004),we.gain.exponentialRampToValueAtTime(1e-4,B+X),$.connect(pe),pe.connect(we),we.connect(t),$.start(B,Math.random()*1.5,X+.02)}function E(I,B){let X=n.createBufferSource();X.buffer=i;let $=T("bandpass",700+Math.random()*900,1.2),pe=n.createGain();pe.gain.setValueAtTime(0,I),pe.gain.linearRampToValueAtTime(B,I+.003),pe.gain.linearRampToValueAtTime(0,I+.03),X.connect($),$.connect(pe),pe.connect(t),X.start(I,Math.random()*1.5,.05)}let R={beep(I){w({type:"square",f0:440,t0:I,dur:.12,vol:.12,lp:2400})},go(I){w({type:"sawtooth",f0:880,t0:I,dur:.4,vol:.12,lp:3e3}),w({type:"sine",f0:1320,t0:I,dur:.4,vol:.06}),w({type:"sine",f0:1760,t0:I+.02,dur:.25,vol:.04}),_({t0:I,dur:.05,vol:.1,type:"highpass",f0:3e3,q:.7})},boost(I){_({t0:I,dur:.6,vol:.25,type:"bandpass",f0:300,f1:3e3,q:1.2}),w({type:"sawtooth",f0:150,f1:600,t0:I,dur:.6,vol:.1,lp:1500,attack:.02})},jump(I){_({t0:I,dur:.25,vol:.2,type:"bandpass",f0:400,f1:1600,q:1})},land(I){w({type:"sine",f0:90,f1:50,t0:I,dur:.2,vol:.6,attack:.002}),_({t0:I,dur:.2,vol:.3,type:"lowpass",f0:800,q:.7})},hit(I){_({t0:I,dur:.08,vol:.3,type:"highpass",f0:2e3,q:.7});let B=340,X=[[1,.12,.35],[2.76,.08,.25],[5.4,.05,.2],[8.93,.03,.15]];for(let[$,pe,we]of X)w({type:"sine",f0:B*$,t0:I,dur:we,vol:pe,attack:.001})},select(I){w({type:"sine",f0:2400,t0:I,dur:.03,vol:.15,attack:.002})},confirm(I){w({type:"triangle",f0:660,t0:I,dur:.12,vol:.2}),w({type:"triangle",f0:990,t0:I+.09,dur:.18,vol:.2})},win(I){[523,659,784,1047,1319].forEach((X,$)=>{let pe=$<4?.13:.5,we=I+$*.11;w({type:"square",f0:X,t0:we,dur:pe,vol:.1,lp:2500}),w({type:"triangle",f0:X,t0:we,dur:pe,vol:.12})})},lose(I){[392,330,262].forEach((B,X)=>{w({type:"triangle",f0:B,t0:I+X*.22,dur:.3,vol:.25,attack:.01})})},pad(I){w({type:"sawtooth",f0:300,f1:1500,t0:I,dur:.15,vol:.12,lp:4e3})},lap(I){w({type:"sine",f0:1e3,t0:I,dur:.08,vol:.2}),w({type:"sine",f0:1e3,t0:I+.15,dur:.08,vol:.2})}};function F(I){let B=n.createOscillator();B.type="sine",B.frequency.setValueAtTime(150,I),B.frequency.exponentialRampToValueAtTime(45,I+.12);let X=n.createGain();X.gain.setValueAtTime(.5,I),X.gain.exponentialRampToValueAtTime(.001,I+.3),B.connect(X),X.connect(l),B.start(I),B.stop(I+.32)}function k(I,B){let X=n.createBufferSource();X.buffer=i;let $=T("highpass",7e3,.7),pe=n.createGain();pe.gain.setValueAtTime(B,I),pe.gain.exponentialRampToValueAtTime(.001,I+.04),X.connect($),$.connect(pe),pe.connect(l),X.start(I,Math.random()*1.5,.05)}function L(I,B,X){let $=n.createOscillator();$.type="sawtooth",$.frequency.value=B;let pe=T("lowpass",1e3,6);pe.frequency.setValueAtTime(1e3,I),pe.frequency.exponentialRampToValueAtTime(180,I+X);let we=n.createGain();we.gain.setValueAtTime(1e-4,I),we.gain.linearRampToValueAtTime(.16,I+.01),we.gain.exponentialRampToValueAtTime(1e-4,I+X),$.connect(pe),pe.connect(we),we.connect(l),$.start(I),$.stop(I+X+.02)}function O(I,B){let X=n.createOscillator();X.type="triangle",X.frequency.value=B;let $=n.createGain();$.gain.setValueAtTime(1e-4,I),$.gain.linearRampToValueAtTime(.035,I+.005),$.gain.exponentialRampToValueAtTime(1e-4,I+.11),X.connect($),$.connect(l),X.start(I),X.stop(I+.13)}function D(I,B){let X=I&15,$=VE[I>>4&3];if(X%4===0&&F(B),X%2===1&&k(B,X%4===2?.1:.05),X%2===0){let pe=X===6||X===14?12:0;L(B,Cg($.root+pe),Rg*1.8);let we=[0,$.iv[0],$.iv[1],12];O(B,Cg($.root+24+we[X>>1&3]))}}function Y(){if(!e||!u)return;let I=n.currentTime;f<I&&(f=I+.02);let B=I+kE;for(;f<B;)D(d,f),f+=Rg,d++}function V(){if(!e){if(!wg)return;try{n=new wg,b()}catch{n=null,e=!1;return}}if(n.state==="suspended")try{let I=n.resume();I&&I.catch&&I.catch(()=>{})}catch{}}function J(I,B){if(!e)return;I=bo(I),B=bo(B);let X=n.currentTime,$=I*ad,pe=Math.min(ad-1,Math.floor($)),Ae=.45+.55*Math.min(1,$-pe),G=bo(I/.08),Ve=vr+(vr*Math.pow(ad,Ae)-vr)*G,ze=.5*I+.5*B,Be=260+3200*Math.pow(ze,1.3),Ie=.07+.2*I*(.35+.65*B)+.03*B;if(v(s.osc1.frequency,Ve,.04),v(s.osc2.frequency,Ve,.04),v(s.osc3.frequency,Ve*.5,.04),v(s.nBp.frequency,Ve*4,.05),v(s.nGain.gain,.04+.22*B,.05),v(s.lp.frequency,Be,.05),g!==-1&&pe!==g){let qe=s.gain.gain;qe.cancelScheduledValues(X),qe.setTargetAtTime(Ie*.35,X,.004),qe.setTargetAtTime(Ie,X+.06,.03),x=X+.12}if(g=pe,X>=x&&v(s.gain.gain,Ie,.05),B>=m)m=B;else if(m-B>.3){if(I>.6&&X>=p){let qe=.12+.2*I;for(let Fe=0;Fe<3;Fe++)E(X+Fe*.05+Math.random()*.02,qe*(1-Fe*.2));p=X+.4}m=B}}function oe(I){if(!e)return;let B=bo(I),X=B*B;v(r.filter.frequency,250+1600*X,.2),v(r.gain.gain,.03+.35*X,.15)}function de(I){if(!e)return;let B=bo(I);v(o.filter.frequency,900+500*B,.05),v(o.gain.gain,B,.03)}function ve(I){e&&v(a.gain.gain,bo(I)*.25,.1)}function ce(I){e&&Object.prototype.hasOwnProperty.call(R,I)&&R[I](n.currentTime+.01)}function ie(I){c=!!I,e&&v(t.gain,c?0:Ag,.015)}function Q(){e&&(u||(u=!0,d=0,f=n.currentTime+.05),v(l.gain,zE,.05),h||(h=setInterval(Y,HE)),Y())}function ee(){u=!1,h&&(clearInterval(h),h=null),e&&v(l.gain,0,.05)}return{resume:V,setEngine:J,setWind:oe,setSkid:de,setRain:ve,play:ce,setMuted:ie,startMusic:Q,stopMusic:ee}}var ld=1/120,Dn=new URLSearchParams(location.search),WE=document.getElementById("game"),Si=new yl({canvas:WE,antialias:!0,powerPreference:"high-performance"});Si.setPixelRatio(Math.min(window.devicePixelRatio,2));Si.shadowMap.enabled=!0;Si.shadowMap.type=Dl;Si.toneMapping=ia;Si.toneMappingExposure=1.05;Si.outputColorSpace=Rt;var zt=new jo,Nn=new Zt(70,1,.3,6e3);zt.add(Nn);var rs=gg(Nn),Bg=document.getElementById("ui"),Jt=yg(Bg),Ui=Eg(Bg),kt=Pg();Ui.setAudio?.(kt);var Lc=new Set,mn={throttle:0,brake:0,steer:0,boost:!1,drift:!1};var XE=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement)){if(Lc.add(n.code),Ht==="race"&&XE.includes(n.code)&&n.preventDefault(),Xs?.active){let e=["Digit1","Digit2","Digit3","Numpad1","Numpad2","Numpad3"].indexOf(n.code);e>=0&&Xs.pick(e%3)}n.code==="KeyM"&&(Cc=!Cc,kt.setMuted(Cc)),(n.code==="KeyP"||n.code==="Escape")&&Ht==="race"&&(dd=!dd)}});addEventListener("keyup",n=>Lc.delete(n.code));addEventListener("blur",()=>Lc.clear());addEventListener("pointerdown",()=>kt.resume(),{once:!1});var Cc=Dn.has("mute");Cc&&kt.setMuted(!0);var dd=!1;function qE(n){let e=(...s)=>s.some(r=>Lc.has(r));mn.throttle=e("ArrowUp","KeyW")?1:0,mn.brake=e("ArrowDown","KeyS")?1:0;let t=(e("ArrowRight","KeyD")?1:0)-(e("ArrowLeft","KeyA")?1:0);mn.steer=t,mn.boost=e("Space"),mn.drift=e("ShiftLeft","ShiftRight","KeyX");let i=navigator.getGamepads?.()[0];if(i){let s=i.axes[0]||0;Math.abs(s)>.12&&(mn.steer=s),mn.throttle=Math.max(mn.throttle,i.buttons[7]?.value||0,i.buttons[0]?.pressed?1:0),mn.brake=Math.max(mn.brake,i.buttons[6]?.value||0),mn.boost=mn.boost||!!i.buttons[2]?.pressed,mn.drift=mn.drift||!!i.buttons[1]?.pressed||!!i.buttons[5]?.pressed}return mn}function YE(n){let e=new jo,t=new ws(50,32,16),i=new H(...n.sunDir).normalize(),s=new vt({side:en,uniforms:{uTop:{value:new Re(n.skyTop)},uHor:{value:new Re(n.skyHorizon)},uGround:{value:new Re(n.hemiGround)},uSun:{value:new Re(n.sunColor).multiplyScalar(n.sunIntensity)},uSunDir:{value:i}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 uTop, uHor, uGround, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = d.y > 0.0 ? mix(uHor, uTop, pow(d.y, 0.55)) : mix(uHor, uGround, pow(-d.y, 0.35));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 350.0) * 14.0 + pow(s, 12.0) * 0.5);
        gl_FragColor = vec4(c, 1.0);
      }`});e.add(new ot(t,s));let r=new eo(Si),o=r.fromScene(e,.02);return r.dispose(),t.dispose(),s.dispose(),o}var Ig=new Map;function Lg(n,e="#f4f2ec",t="#16181d"){let i=n+e+t,s=Ig.get(i);if(!s){let o=document.createElement("canvas");o.width=40,o.height=28;let a=o.getContext("2d");a.fillStyle=e,a.fillRect(0,0,40,28),a.fillStyle=t,a.font='italic 900 26px "Arial Narrow", Impact, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(String(n),20,15),s=new ii(o),s.colorSpace=Rt,s.magFilter=Kt,s.minFilter=ti,Ig.set(i,s)}let r=new ot(new zn(1,1),new st({map:s,roughness:.5,side:Pt,polygonOffset:!0,polygonOffsetFactor:-2}));return r.userData.ownGeometry=!0,r}var Aa=null;function $E(){if(Aa)return Aa;let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Aa=new ii(n),Aa.colorSpace=Rt,Aa}function cd(n,e,t){let i=new Jo(new so({map:$E(),color:n,transparent:!0,opacity:t,blending:Xr,depthWrite:!1,fog:!1}));return i.scale.setScalar(e),i}var ss={ao:Dn.get("fx")!=="low",slow:0,frames:0,checked:!1},We=null,Ht="boot",pd=0,md=0,gd=0,Eo=99;function ZE(){if(We){for(let n of We.labels||[])n.material.map?.dispose(),n.material.dispose();for(let n of We.bikes)zt.remove(n.model.group);zt.remove(We.road.group),We.road.dispose?.(),We.env.dispose?.(),We.env.group?.parent&&We.env.group.parent.remove(We.env.group),We.fx.dispose?.(),We.post.dispose?.(),We.envMap?.dispose(),zt.environment=null,We.mirror&&(zt.remove(We.mirror),We.mirror.dispose()),We.fill&&zt.remove(We.fill),We.scenery&&(zt.remove(We.scenery.group),We.scenery.dispose()),We.clouds&&(zt.remove(We.clouds),We.clouds.geometry.dispose(),We.clouds.material.dispose()),We.sunGlow&&(zt.remove(We.sunGlow),We.sunGlow.material.dispose()),We=null}}var gn=null,zg={},So=new Map,Ic=new Map;function Ca(n){if(!So.has(n.id)){So.set(n.id,fetch("assets/v3/"+n.file).then(e=>{if(!e.ok)throw new Error("\xE9tape indisponible : "+n.id);return e.json()}).then(e=>(e.props=zg,Ic.set(n.id,e),e)));for(let e of So.keys()){if(So.size<=2)break;e!==n.id&&(So.delete(e),Ic.delete(e))}}return So.get(n.id)}function vd({trackSeed:n,weatherId:e,laps:t,riders:i,autopilot:s,realData:r=null,final:o=!0,carry:a=null,keepClouds:l=null}){let c=[performance.now()],u=O=>{c.push(O,Math.round(performance.now()-c[0]))};ZE(),u("dispose");let h=kn(n),f=!!r,d=f?r._track||mf(r):Em(n);f&&(r._track=null),u("track");let g=Ci[e]||Ci.sunset;Nn.far=f?9500:6e3,Nn.updateProjectionMatrix();let x=f?x0(zt,d,g,h.fork("env")):c0(zt,d,g,h.fork("env"));u("env");let m=YE(g);zt.environment=m.texture,zt.environmentIntensity=g.night?.55:.5,Si.toneMappingExposure=g.night?1.5:.82;let p=cd(g.sunColor,g.night?900:2200,g.night?.35:.75);p.userData.dir=new H(...g.sunDir).normalize(),zt.add(p);let S=new Ai(g.night?3820160:13226728,g.night?.25:.45);S.position.set(-g.sunDir[0],.6,-g.sunDir[2]).multiplyScalar(100),S.name="fill-light",zt.add(S),u("envmap");let M=f&&r._road||cf(d,g,h.fork("road"));f&&(r._road=null),zt.add(M.group),u("road"),f||hf(x.group,O=>O.geometry.attributes.position.count>2e4?1:.45),hf(M.group,()=>.4);let y=f?{group:new ht,dispose(){}}:d0(d,g,h.fork("scenery"),x.heightAt);x.sun?.shadow&&(x.sun.shadow.mapSize.set(4096,4096),x.sun.shadow.radius=5,x.sun.shadow.blurSamples=16,x.sun.shadow.normalBias=.05,x.sun.shadow.map?.dispose(),x.sun.shadow.map=null),zt.add(y.group);let T=null,b=f?Math.min(.25,g.wet||.25):g.sheen??g.wet;b>.5&&!Dn.has("noreflect")&&(T=new ra(new zn(900,900),{textureWidth:1280,textureHeight:720,clipBias:.05,multisample:4}),T.rotation.x=-Math.PI/2,T.material.colorWrite=!1,T.material.depthWrite=!1,T.material.depthTest=!1,T.frustumCulled=!1,T.renderOrder=-10,T.name="road-mirror",zt.add(T));let v=M.group.getObjectByName("road-asphalt");v&&b>.5&&(v.material.envMap=m.texture,v.material.envMapIntensity=T?.35:1.25,v.material.metalness=.3,Jm(v.material,g.sheen??g.wet,T?{texture:T.getRenderTarget().texture,matrix:T.material.uniforms.textureMatrix.value}:null)),u("voxelize");let w=l||Km(g,h.fork("clouds"));zt.add(w);let _=cg(zt,g),E=xg(Si,zt,Nn,g,{ao:ss.ao});u("fx");let R=Fm({track:d,laps:t,env:g,rng:h.fork("race"),riders:i,final:o,carry:a}),F=[],k=R.riders.map(O=>{let D=ig({color:O.color,accent:O.accent,isPlayer:!!O.isPlayer&&!!g.night,detail:O.isPlayer?"hi":"lo"});if(D.group.rotation.order="YXZ",O.remote){let de=nw(O.name,O.color);D.group.add(de),F.push(de)}let Y=D.group.getObjectByName("chassis")||D.group,V=cd(16722458,.3,.3);if(V.position.set(0,.67,-.42),Y.add(V),g.night){let de=cd(16773840,1.3,.8);de.position.set(0,.48,1.66),Y.add(de)}D.tailGlow=V;let J=O.isPlayer?1:2+R.riders.indexOf(O)*7%97;for(let de of[-1,1]){let ve=Lg(J);ve.scale.set(.24,.17,1),ve.position.set(.105*de,.6,-.2),ve.rotation.y=de*Math.PI/2,Y.add(ve)}let oe=Lg(J);return oe.scale.set(.2,.14,1),oe.position.set(0,.585,1.6),oe.rotation.x=-.75,Y.add(oe),zt.add(D.group),{rider:O,model:D,pose:{},prev:new H,has:!1,w:{x:0,y:0,z:0,heading:0,slope:0}}}),L=s?Xl({id:"auto",name:"auto",skill:.9,aggression:.5,jumpSkill:.8,lineSkill:.9,style:"r\xE9gulier"},h.fork("auto")):null;if(We={labels:F,track:d,weather:g,env:x,road:M,fx:_,post:E,race:R,bikes:k,autoAI:L,envMap:m,sunGlow:p,clouds:w,scenery:y,mirror:T,fill:S,playerBike:k.find(O=>O.rider.isPlayer)||k[0]},u("bikes"),window.__loadTimes=c.slice(1),Je?.traffic){for(let O of R.riders)O.ai&&(O.ai.obstacles=Je.traffic.vehicles);L&&(L.obstacles=Je.traffic.vehicles)}if(f){let O=[];for(let D of d.features)D.type==="tunnel"&&D.name&&O.push({s:D.s0-90,text:D.name.toUpperCase()});for(let D of d.bridges)D.name&&D.s1-D.s0>150&&O.push({s:D.s0-40,text:D.name.toUpperCase()});for(let D of x.places||[])O.push({s:D.s-20,text:D.name.toUpperCase()});for(let D of x.props||[])D.label&&D.dist<700&&O.push({s:Math.max(0,D.s-500),text:D.label.toUpperCase()});O.sort((D,Y)=>D.s-Y.s),We.announce=O.filter(D=>D.s>=(d.raceStart||0)-60&&D.s<=d.raceEnd),We.announceIdx=0}return Jt.setTrack(d),qg(),Hg(.016),rs.snap(Dc()),md=R.player?.position||i.length,gd=1,Eo=99,window.__game={stage:We,renderer:Si,scene:zt,camera:Nn,RL:of},window.__tick=Wg,We}var Ni={x:0,y:0,z:0,heading:0,yaw:0,lean:0,speedRatio:0,airborne:!1,boosting:!1,slope:0};function Dc(){let n=We.playerBike,e=n.rider.state;return Ni.x=n.w.x,Ni.y=n.w.y,Ni.z=n.w.z,Ni.heading=n.w.heading,Ni.yaw=-kg(e),Ni.speedRatio=Math.min(1.3,e.speed/n.rider.stats.maxSpeed),Ni.airborne=e.airborne,Ni.boosting=e.boostT>0,Ni.slope=n.w.slope||0,Ni}var KE=.8,Dg=.7;function kg(n){let e=n.vdir??n.yaw;return e+KE*(n.yaw-e)}function Hg(n){let{track:e,fx:t,weather:i}=We;for(let s of We.bikes){let r=s.rider.state;It(e,r.s,r.d,s.w),s.w.y+=r.yRel||0;let o=s.model.group;o.position.set(s.w.x,s.w.y,s.w.z),o.visible=!s.rider.hidden;let a=s.w.heading-kg(r),l=s.w.heading-(r.vdir??r.yaw);o.rotation.y=a,o.position.x+=Dg*(Math.sin(a)-Math.sin(l)),o.position.z+=Dg*(Math.cos(a)-Math.cos(l)),o.rotation.x=r.airborne?0:-Math.atan(s.w.slope||0);let c=s.pose;if(c.lean=r.lean,c.steer=r.steer,c.pitch=r.pitch,c.compress=r.compress,c.wheelSpin=r.wheelSpin,c.speedRatio=r.speed/s.rider.stats.maxSpeed,c.speed=r.speed,c.airborne=r.airborne,c.drift=r.drift,c.boost=r.boostT>0,c.braking=s.rider.isPlayer?mn.brake>.1:!!s.rider.braking,s.model.update(c,n),s.model.tailGlow){let M=c.braking?1:0;s.model.tailGlow.material.opacity+=(.3+.6*M-s.model.tailGlow.material.opacity)*Math.min(1,n*12),s.model.tailGlow.scale.setScalar(.3+.55*M)}let u=o.rotation.y,h=Math.sin(u),f=Math.cos(u),d=s.w.x-h*.7,g=s.w.z-f*.7,x=s.w.y+.05,m=h*r.speed,p=f*r.speed;!r.airborne&&r.speed>8&&(r.drift>.8&&(Math.random()<r.drift*.9&&t.emit("smoke",d,x,g,m*.2,1.2,p*.2,1),s.has&&t.addSkid(s.prev.x,s.prev.y,s.prev.z,d,x,g,.16,.25+r.drift*.4)),!r.onRoad&&Math.random()<.7&&t.emit("dust",d,x,g,m*.25,1.5,p*.25,2),i.wet>.2&&r.speed>20&&Math.random()<i.wet*.8&&t.emit("spray",d,x,g,m*.35,2.5,p*.35,2)),r.boostT>0&&t.emit("boost",d-h*.4,x+.45,g-f*.4,m*.9,.2,p*.9,1),s.prev.set(d,x,g),s.has=!r.airborne;let S=s.rider.isPlayer?null:s.rider.frameEvents;S&&S.length&&Vg(s,S,!1)}}function Vg(n,e,t){let{fx:i}=We,s=n.rider.state,r=n.model.group.rotation.y,o=Math.sin(r)*s.speed,a=Math.cos(r)*s.speed;for(let l of e)l==="land"||l==="hardLand"?(i.emit("land",n.w.x,n.w.y+.1,n.w.z,o*.3,1,a*.3,l==="hardLand"?40:22),t&&(kt.play("land"),rs.shake(l==="hardLand"?.9:.45))):l==="wall"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,3,a*.5,26),t&&(kt.play("hit"),rs.shake(.7))):l==="crash"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,4,a*.5,40),i.emit("dust",n.w.x,n.w.y+.2,n.w.z,o*.3,2,a*.3,30),t&&(rs.shake(1.4),Jt.flash("CHUTE !",1400))):l==="jump"?t&&kt.play("jump"):l==="boost"?t&&(kt.play("boost"),rs.shake(.3),Jt.flash("BOOST !",600)):l==="pad"&&t&&(kt.play("pad"),rs.shake(.2))}function jE(n){let{race:e,autoAI:t,track:i}=We,s=e.player,r=mn;if(t||Ht==="finish")if(t){let a=e.riders.filter(l=>l!==s).map(l=>l.state);r=ql(t,s.state,i,s.stats,a,n)}else r=JE;if(nn&&Je&&(sw(e,n),iw(e,n)),e.update(n,r),nn&&Je&&e.phase!=="countdown"&&(nn.session.sendState(performance.now(),E0(nn.cum,Je.index,i,s.state.s),s.state),s.finished&&!nn.sentFinish&&(nn.sentFinish=!0,nn.session.sendFinish(s.finishTime))),Je?.traffic&&e.phase!=="countdown"){Je.traffic.update(n,s.state,e.riders);for(let a of Je.traffic.events)a.type==="near"&&!t?(Jt.flash(a.boost?`FR\xD4LEMENT \xD7${a.combo} \xB7 BOOST +1`:`FR\xD4LEMENT \xD7${a.combo}`,900),kt.play(a.boost?"boost":"pad")):a.type==="hit"&&!t&&Jt.flash("ACCROCHAGE",900)}let o=s.state.events;o.length&&(Vg(We.playerBike,o,!t),o.length=0)}var JE={throttle:.3,brake:0,steer:0,boost:!1,drift:!1},An={speedKmh:0,position:1,total:8,lap:1,laps:3,time:0,bestLap:null,boostCharges:0,boostT:0,countdown:null,wrongWay:!1},ud=[],Ng=new H,hd=performance.now(),Ac=0,Pc=0;function Gg(n){requestAnimationFrame(Gg);let e=Math.min(.05,(n-hd)/1e3);ss.ao&&!ss.checked&&Ht==="race"&&We?.race.phase==="racing"&&(ss.frames++,n-hd>25&&ss.slow++,ss.frames>=240&&(ss.checked=!0,ss.slow>96&&(ss.ao=!1,We.post.setAO(!1),console.info("Occlusion ambiante coup\xE9e : affichage trop lent.")))),hd=n,Wg(e)}function Wg(n){if(!We)return;if(dd){We.post.render(0);return}Pc+=n,pd+=n,Ht==="race"&&Xs?.update(n);let{race:e}=We,t=Ht==="race"||Ht==="attract"||Ht==="finish";if(t){Ht==="race"&&qE(n),Ac+=n;let a=0;for(;Ac>=ld&&a++<8;)jE(ld),Ac-=ld;a>=8&&(Ac=0)}Hg(n);let i=e.player,s=i.state,r=Math.min(1.3,s.speed/i.stats.maxSpeed),o=Dc();Ht==="intro"||Ht==="menu"||Ht==="finish"&&pd>1.2?QE(o,n):rs.update(n,o),Ng.set(o.x,o.y,o.z),We.env.update(n,Pc,Ng),We.mirror&&We.mirror.position.set(o.x,o.y-(s.yRel||0)+.02,o.z),We.sunGlow.position.copy(Nn.position).addScaledVector(We.sunGlow.userData.dir,3200),We.road.update(n,Pc),We.fx.setSpeed(t?r:0,s.boostT>0),We.fx.update(n,Nn),wo&&(Je?.traffic&&Ht!=="attract"?wo.update(Je.traffic,We.track,s.s):wo.hide()),We.post.setSpeed(t?r:0,s.boostT>0),We.post.render(n),(Ht==="race"||Ht==="finish")&&(kt.setEngine(Math.min(1,r),Ht==="race"?mn.throttle:.3),kt.setWind(Math.min(1,r)),kt.setSkid(s.airborne?0:Math.min(1,s.drift))),Ht==="race"&&ew(e,i,s)}var Ug=new H;function QE(n,e){let t=Pc*.35+n.heading;Ug.set(n.x+Math.sin(t)*7.5,n.y+2.6,n.z+Math.cos(t)*7.5),Nn.position.lerp(Ug,Math.min(1,e*2.5)),Nn.fov+=(55-Nn.fov)*Math.min(1,e*3),Nn.updateProjectionMatrix(),Nn.lookAt(n.x,n.y+.9,n.z)}function ew(n,e,t){An.speedKmh=t.speed*3.6,An.position=e.position,An.total=n.riders.length,An.lap=Math.min(n.laps,Math.max(1,e.lap)),An.laps=n.laps,Je&&Ht!=="attract"&&(An.lap=Je.index+1,An.laps=Je.metas.length),Jt.setLapLabel?.(Je&&Ht!=="attract"?"TRON\xC7ON":"TOUR"),An.time=n.time,An.bestLap=e.bestLap??null,An.boostCharges=t.boostCharges,An.boostT=t.boostT,An.gear=t.gear,An.rpm=t.rpm,An.countdown=n.phase==="countdown"?n.countdown:n.time<.9?0:null,An.wrongWay=Math.abs(t.yaw)>1.4,Jt.update(An),ud.length=0;for(let i of n.riders)ud.push({s:i.state.s,d:i.state.d,isPlayer:!!i.isPlayer,color:i.color});if(Jt.updateMinimap(ud),n.phase==="countdown"){let i=Math.ceil(n.countdown);i!==Eo&&(Eo=i,i>0&&kt.play("beep"))}else Eo!==0&&(Eo=0,kt.play("go"),kt.startMusic?.());if(n.phase==="racing"){let i=We.announce;if(i)for(;We.announceIdx<i.length&&i[We.announceIdx].s<=t.s;)Jt.flash(i[We.announceIdx].text,2e3),We.announceIdx++;e.position<md&&!(i&&We.announceIdx>0&&t.s-i[We.announceIdx-1].s<120)&&Jt.flash(e.position===1?"EN T\xCATE !":"+1 PLACE",700),md=e.position,e.lap!==gd&&e.lap<=n.laps&&(gd=e.lap,kt.play("lap"),e.lap===n.laps&&Jt.flash("DERNIER TOUR",1400))}Je&&Ht==="race"&&n.phase==="racing"&&tw(t.s),n.phase==="relay"&&Ht==="race"&&ow(),n.phase==="finished"&&Ht==="race"&&aw()}var Je=null,Fg=["track","near","mid","road"];function tw(n){let e=Je.metas[Je.index+1];if(!e||n<We.track.raceEnd*.35)return;let t=Ic.get(e.id);if(!t||(Je.prepFor!==e.id&&(Je.prepFor=e.id,Je.prepStep=0,Je.prepWait=0),Je.prepStep>=Fg.length||Je.prepWait-- >0))return;let i=Fg[Je.prepStep++];Je.prepWait=20,i==="track"?t._track=mf(t):i==="road"?t._road=cf(t._track,Ci[Je.weatherId]||Ci.sunset,kn("REAL:"+e.id).fork("road")):g0(t,i)}var wo=null;function nw(n,e){let t=document.createElement("canvas");t.width=256,t.height=64;let i=t.getContext("2d");i.font="bold 34px Arial, Helvetica, sans-serif";let s=Math.min(244,i.measureText(n).width+28);i.fillStyle="rgba(10,14,28,.78)",i.beginPath(),i.roundRect((256-s)/2,8,s,48,12),i.fill(),i.fillStyle="#"+e.toString(16).padStart(6,"0"),i.fillRect((256-s)/2,50,s,6),i.fillStyle="#fff",i.textAlign="center",i.textBaseline="middle",i.fillText(n,128,31,230);let r=new ii(t);r.colorSpace=Rt;let o=new Jo(new so({map:r,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1}));return o.scale.set(3.6,.9,1),o.position.set(0,2.55,0),o.name="name-tag",o}var Fi=null,fd=0;function iw(n,e){if(fd-=e,fd>0)return;fd=.25,Fi||(Fi=document.createElement("div"),Fi.style.cssText="position:fixed;left:2.2vmin;top:13vmin;z-index:30;font:bold 1.9vmin Arial,Helvetica,sans-serif;color:#fff;text-shadow:0 1px 3px #000;display:grid;gap:.5vmin;pointer-events:none",document.body.appendChild(Fi));let t=n.player.state.s,i=n.riders.filter(s=>s.remote).map(s=>{let r=nn.session.players.get(s.id);if(!r||r.gone)return{gap:-1/0,html:`<span style="opacity:.6">\u2715 ${Rc(s.name)} \xB7 abandon</span>`};if(s.finished)return{gap:1/0,html:`<span>\u{1F3C1} ${Rc(s.name)} \xB7 arriv\xE9</span>`};if(!r.remote.known)return{gap:0,html:`<span style="opacity:.6">\u2026 ${Rc(s.name)}</span>`};let o=s.state.s-t,a=Math.abs(o)>=1e3?(Math.abs(o)/1e3).toFixed(1).replace(".",",")+" km":Math.round(Math.abs(o))+" m";return{gap:o,html:`<span><b style="color:#${s.color.toString(16).padStart(6,"0")}">${o>=0?"\u25B2":"\u25BC"}</b> ${Rc(s.name)} \xB7 ${o>=0?"+":"\u2212"}${a}</span>`}});i.sort((s,r)=>r.gap-s.gap),Fi.innerHTML=i.map(s=>s.html).join(""),Fi.style.display=""}var Rc=n=>String(n).replace(/[&<>]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[e]),nn=null;function sw(n,e){let t=performance.now(),i=n.track;for(let s of n.riders){if(!s.remote)continue;let r=nn.session.players.get(s.id),o=r&&!r.gone?r.remote.sample(t,e):null;if(!o){s.hidden=!0,(!r||r.gone)&&(s.state.s=-1e5,!s.dnf&&!s.finished&&(s.dnf=!0,Jt.flash(`${s.name.toUpperCase()} A QUITT\xC9 LA COURSE`,2200)));continue}let a=s.state;a.s=w0(nn.cum,Je.index,i,o.g),a.d=o.d,a.speed=o.v,a.lean=o.l,a.yaw=o.y,a.vdir=o.y,a.boostT=o.b?.2:0,a.wheelSpin=(a.wheelSpin||0)+o.v*e/.31,s.hidden=a.s<-150||a.s>i.length-4||r.remote.age>4,r.finished&&!s.finished&&(s.finished=!0,s.finishTime=r.finishTime)}}var os=U0(),Xs=null;function Xg(n){let e=Je.metas[Je.splits.length],t=Je.splits.length===0,i=O0(os,e.id+(t?":g":":r"),n-Je.splitStart);return Je.splitStart=n,Je.splits.push({name:e.subtitle,...i}),dc(os),i}function rw(){if(!bt)return;let n=z0(Jl({...bt,stageIndex:Je.index}));if(!n.length)return;let e=t=>{if(!Ql(bt,t.id))return;let i=Je.riders.find(s=>s.isPlayer);i&&Object.assign(i.stats,Ls(bt)),Jt.flash(`${t.icon||""} ${t.name.toUpperCase()}`,1800),kt.play("lap")};if(Je.autopilot&&!Dn.has("pick")){e(n[0]);return}Xs=Xs||k0(),Xs.show(n,e,9)}function ow(){let n=Je&&Je.metas[Je.index+1];if(!n)return;let e=Ic.get(n.id);if(!e){Je.waiting||(Je.waiting=!0,Jt.flash("CHARGEMENT\u2026",1500),Ca(n).catch(()=>{}));return}let t=We.race,i=t.player||t.riders[0],s=It(t.track,i.state.s,i.state.d,{}),r=We.clouds;We.clouds=null,r&&zt.remove(r);let o=(e.raceStart||0)-(t.track.raceEnd??t.track.length),a=new Map;for(let h of t.riders)h.state.s+=o,h.state._padKey=null,a.set(h.id,h.state);Je.traffic?.shift(o),Je.index+=1,Je.waiting=!1;let l=performance.now();if(vd({trackSeed:"REAL:"+n.id,weatherId:Je.weatherId,laps:1,riders:Je.riders,autopilot:Je.autopilot,realData:e,final:Je.index===Je.metas.length-1,carry:{time:t.time,states:a},keepClouds:r}),r){let h=It(We.track,i.state.s,i.state.d,{});r.position.x+=h.x-s.x,r.position.z+=h.z-s.z}Eo=0,rs.snap(Dc()),Je.hitch=Math.max(Je.hitch||0,performance.now()-l),window.__relay={index:Je.index,ms:Math.round(performance.now()-l)};let c=Xg(t.time);Jt.flash(`TRON\xC7ON ${_f(c.time)}${c.delta===null?"":" ("+F0(c.delta)+")"}${c.record&&c.best!==null?" \xB7 RECORD":""} \u2014 ${n.subtitle.split(" \xB7 ")[0].toUpperCase()}`,3200),rw();let u=Je.metas[Je.index+1];u&&setTimeout(()=>Ca(u).catch(()=>{}),3e3)}function qg(){let n=innerWidth,e=innerHeight;Si.setSize(n,e,!1),Nn.aspect=n/e,Nn.updateProjectionMatrix(),We?.post.setSize(n,e)}addEventListener("resize",qg);function Ra(n){Ht=n,pd=0}var bt=null,To=nf(),xd=null;function aw(){if(Ra("finish"),Xs?.hide(),Je&&bt){let n=We.race.player.finishTime??We.race.time,e=Xg(n),t=!!gn&&Je.metas.length===gn.stages.length,i=t?B0(os,n):null;os.finishes+=1,dc(os),bt.summary={splits:Je.splits,total:i,time:n,full:t,last:e}}if(Jt.flash(`ARRIV\xC9E \u2014 ${We.race.player.position}${We.race.player.position===1?"er":"e"}`,2200),kt.play(We.race.player.position<=3?"win":"lose"),kt.stopMusic?.(),nn){let n=performance.now(),e=()=>We.race.riders.some(i=>i.remote&&!i.finished&&!i.dnf),t=()=>{if(Ht==="finish"){if(!e()||performance.now()-n>12e4){xd?.();return}performance.now()-n>3e3&&Jt.flash("EN ATTENTE DES AUTRES JOUEURS\u2026",1100),setTimeout(t,1e3)}};setTimeout(t,3200);return}setTimeout(()=>xd?.(),3200)}async function Og(){Je=null,Fi&&(Fi.style.display="none"),wo?.hide(),Xs?.hide();let n=jl(Kl("ATTRACT"));for(let i of n)i.stats=Ls({upgrades:[]});let e=gn?gn.stages[Math.min(3,gn.stages.length-1)]:null,t=e?await Ca(e).catch(()=>null):null;vd({trackSeed:t?"REAL:"+t.id:"ATTRACT-"+ec(),weatherId:t?"sicily":"sunset",laps:t?1:99,riders:n,autopilot:!0,realData:t}),Jt.hide(),Ra("attract")}async function lw(){if(await q0().catch(n=>console.warn("Mod\xE8le de moto indisponible, repli sur le mod\xE8le proc\xE9dural :",n)),!Dn.has("noreal")&&(gn=await fetch("assets/v3/route.json").then(n=>n.ok?n.json():null).catch(()=>null),gn&&!gn.stages?.length&&(gn=null),gn)){let n=await fetch("assets/v3/props/index.json").then(t=>t.ok?t.json():[]).catch(()=>[]);await Promise.all(p0.filter(t=>n.includes(t)).map(t=>fetch(`assets/v3/props/${t}.json`).then(i=>i.ok?i.json():null).then(i=>{i&&(zg[t]=i)}).catch(()=>{})));let e=document.createElement("div");e.textContent="\xA9 contributeurs OpenStreetMap \xB7 relief Terrarium (Mapzen) \xB7 Sentinel-2 cloudless 2016 par EOX (CC BY 4.0)",e.style.cssText="position:fixed;left:50%;bottom:0.6vmin;transform:translateX(-50%);font:1.35vmin Arial,sans-serif;color:rgba(255,255,255,.72);text-shadow:0 1px 2px #000;pointer-events:none;z-index:40;white-space:nowrap",document.body.appendChild(e)}for(await Og(),document.getElementById("boot").remove(),requestAnimationFrame(Gg);;){let n=Dn.get("seed"),e=Number(Dn.get("stage"))||0;if(!n){let s=await Ui.showTitle({dailySeed:ec(),meta:To,route:gn,records:os});if(s.multi){let r=gn?await L0(Ui.mount,gn):null;if(!r)continue;nn={session:r.session,cum:null,sentFinish:!1},n="MP-"+r.session.code,e=r.stage}else n=s.seed,s.stage&&(e=s.stage)}if(kt.resume(),bt=Kl(n),gn){let s=Math.floor(e)-1;bt.real=!0,s>0&&s<gn.stages.length||(s=0);let r=gn.stages.slice(s),o=r.reduce((a,l)=>a+l.length,0)/1e3;bt.stages=[{name:gn.title,subtitle:`${gn.roads} \xB7 ${o.toFixed(0)} km d'une traite`,trackSeed:"REAL:"+r[0].id,weather:"sicily",laps:1,real:r}]}for(;!la(bt);){let s=bt.stages[bt.stageIndex],r=Ls(bt),o=jl(bt).map(c=>({...c,stats:c.isPlayer?r:Ls({upgrades:[]})}));if(nn&&s.real){nn.cum=T0(s.real),bt.points={},bt.names={};let c=o.find(u=>u.isPlayer);o=nn.session.roster().map(u=>u.me?{...c,name:u.name,color:u.color,accent:u.accent}:{id:u.id,name:u.name,color:u.color,accent:u.accent,isPlayer:!1,remote:!0,persona:null,stats:Ls({upgrades:[]})});for(let u of o)bt.points[u.id]=0,bt.names[u.id]=u.name}Ui.hideAll();let a=null;Je=null,s.real&&(Jt.flash?.("CHARGEMENT\u2026"),a=await Ca(s.real[0]),Je={metas:s.real,index:0,riders:o,autopilot:Dn.has("auto"),weatherId:Dn.get("weather")||s.weather,splits:[],splitStart:0},os.runs+=1,dc(os),Dn.has("notraffic")||(Je.traffic=y0({rng:kn("trafic|"+n+"|"+os.runs),count:40,density:2.6}),wo=wo||D0(zt,40)),s.real[1]&&setTimeout(()=>Ca(s.real[1]).catch(()=>{}),4e3)),vd({trackSeed:s.trackSeed,weatherId:Dn.get("weather")||s.weather,laps:s.laps,riders:o,autopilot:Dn.has("auto"),realData:a,final:!s.real||s.real.length===1}),Ra("intro"),kt.setRain(We.weather.rain||0),!Dn.has("auto")&&!nn&&await Ui.showStageIntro({stage:s,index:bt.stageIndex+1,total:bt.stages.length,standings:fo(bt),weather:We.weather}),Ui.hideAll(),rs.snap(Dc()),Jt.show(),Ra("race"),await new Promise(c=>{xd=c}),Jt.hide(),kt.setEngine(.1,0),kt.setWind(0),kt.setSkid(0);let l=We.race.results();if(nn){let c=new Set(We.race.riders.filter(u=>u.dnf).map(u=>u.id));for(let u of l)c.has(u.id)&&(u.time=null);l.sort((u,h)=>(u.time===null)-(h.time===null)||u.position-h.position),l.forEach((u,h)=>{u.position=h+1}),Fi&&(Fi.style.display="none")}if(ef(bt,l),await Ui.showResults({results:l,standings:fo(bt),stage:s}),!la(bt)){let c=Jl(bt),u=bt.upgrades.map(f=>lr.find(d=>d.id===f)).filter(Boolean),h=await Ui.showUpgradeChoice({choices:c,index:bt.stageIndex,total:bt.stages.length,owned:u});Ql(bt,h)}}let t=fo(bt),i=t.findIndex(s=>s.isPlayer)+1;To=rf(To,bt)||To,sf(To),Ra("menu"),await Ui.showRunEnd({standings:t,playerPosition:i,run:bt,meta:To}),Ui.hideAll(),nn&&(nn.session.leave(),nn=null),Dn.delete("seed"),Dn.delete("stage"),await Og()}}lw().catch(n=>{console.error(n);let e=document.getElementById("boot")||document.body.appendChild(Object.assign(document.createElement("div"),{id:"boot"}));e.className="err",e.textContent=`Erreur de d\xE9marrage :
`+(n?.stack||n)});
