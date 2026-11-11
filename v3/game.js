var Wg=Object.defineProperty;var Xg=(n,e)=>{for(var t in e)Wg(n,t,{get:e[t],enumerable:!0})};var qg=0,gd=1,Yg=2;var Ll=1,$g=2,Gi=3,wi=0,Qt=1,Pt=2,tn=0,kr=1,Wr=2,xd=3,vd=4,ea=5,Fn=100,Zg=101,Kg=102,jg=103,Jg=104,ao=200,Sh=201,Qg=202,ex=203,hu=204,Wo=205,Dl=206,tx=207,Nl=208,nx=209,ix=210,sx=211,rx=212,ox=213,ax=214,fu=0,du=1,pu=2,Xr=3,mu=4,gu=5,xu=6,vu=7,Th=0,lx=1,cx=2,xs=0,Eh=1,wh=2,Ah=3,ta=4,ux=5,Rh=6,Ch=7,yd="attached",hx="detached",Op=300,qr=301,Yr=302,yu=303,_u=304,Ul=306,Pn=1e3,Wi=1001,Xo=1002,Kt=1003,Ph=1004;var Br=1005;var On=1006,ko=1007;var ti=1008;var xi=1009,Bp=1010,zp=1011,qo=1012,Ih=1013,Qs=1014,mi=1015,un=1016,Lh=1017,Dh=1018,vs=1020,kp=35902,Hp=1021,Vp=1022,Bn=1023,Gp=1024,Wp=1025,Hr=1026,ys=1027,Nh=1028,Uh=1029,Xp=1030,Fh=1031;var Oh=1033,sl=33776,rl=33777,ol=33778,al=33779,Mu=35840,bu=35841,Su=35842,Tu=35843,Eu=36196,wu=37492,Au=37496,Ru=37808,Cu=37809,Pu=37810,Iu=37811,Lu=37812,Du=37813,Nu=37814,Uu=37815,Fu=37816,Ou=37817,Bu=37818,zu=37819,ku=37820,Hu=37821,ll=36492,Vu=36494,Gu=36495,qp=36283,Wu=36284,Xu=36285,qu=36286;var $r=2300,Zr=2301,Lc=2302,_d=2400,Md=2401,bd=2402,fx=2500;var Yp=0,Fl=1,na=2,dx=3200,px=3201;var Ol=0,mx=1,ps="",Ct="srgb",Tn="srgb-linear",Bl="linear",Et="srgb";var yr=7680;var Sd=519,gx=512,xx=513,vx=514,$p=515,yx=516,_x=517,Mx=518,bx=519,Yu=35044,Ri=35048;var Td="300 es",Xi=2e3,cl=2001,_s=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ed=1234567,Ho=Math.PI/180,Kr=180/Math.PI;function gi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function Mn(n,e,t){return Math.max(e,Math.min(t,n))}function Bh(n,e){return(n%e+e)%e}function Sx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Tx(n,e,t){return n!==e?(t-n)/(e-n):0}function Vo(n,e,t){return(1-t)*n+t*e}function Ex(n,e,t,i){return Vo(n,e,1-Math.exp(-t*i))}function wx(n,e=1){return e-Math.abs(Bh(n,e*2)-e)}function Ax(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Rx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Cx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Px(n,e){return n+Math.random()*(e-n)}function Ix(n){return n*(.5-Math.random())}function Lx(n){n!==void 0&&(Ed=n);let e=Ed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dx(n){return n*Ho}function Nx(n){return n*Kr}function Ux(n){return(n&n-1)===0&&n!==0}function Fx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ox(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bx(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Zp={DEG2RAD:Ho,RAD2DEG:Kr,generateUUID:gi,clamp:Mn,euclideanModulo:Bh,mapLinear:Sx,inverseLerp:Tx,lerp:Vo,damp:Ex,pingpong:wx,smoothstep:Ax,smootherstep:Rx,randInt:Cx,randFloat:Px,randFloatSpread:Ix,seededRandom:Lx,degToRad:Dx,radToDeg:Nx,isPowerOfTwo:Ux,ceilPowerOfTwo:Fx,floorPowerOfTwo:Ox,setQuaternionFromProperEuler:Bx,normalize:At,denormalize:pi},$e=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ut=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],S=s[1],M=s[4],y=s[7],T=s[2],b=s[5],v=s[8];return r[0]=o*x+a*S+l*T,r[3]=o*m+a*M+l*b,r[6]=o*p+a*y+l*v,r[1]=c*x+u*S+h*T,r[4]=c*m+u*M+h*b,r[7]=c*p+u*y+h*v,r[2]=f*x+d*S+g*T,r[5]=f*m+d*M+g*b,r[8]=f*p+d*y+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Dc.makeScale(e,t)),this}rotate(e){return this.premultiply(Dc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Dc=new ut;function Kp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Yo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zx(){let n=Yo("canvas");return n.style.display="block",n}var wd={};function Bo(n){n in wd||(wd[n]=!0,console.warn(n))}function kx(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Hx(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Vx(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var pt={enabled:!0,workingColorSpace:Tn,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Et&&(n.r=qi(n.r),n.g=qi(n.g),n.b=qi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Et&&(n.r=Vr(n.r),n.g=Vr(n.g),n.b=Vr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ps?Bl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ad=[.64,.33,.3,.6,.15,.06],Rd=[.2126,.7152,.0722],Cd=[.3127,.329],Pd=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Id=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pt.define({[Tn]:{primaries:Ad,whitePoint:Cd,transfer:Bl,toXYZ:Pd,fromXYZ:Id,luminanceCoefficients:Rd,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:Ad,whitePoint:Cd,transfer:Et,toXYZ:Pd,fromXYZ:Id,luminanceCoefficients:Rd,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}});var _r,$u=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_r===void 0&&(_r=Yo("canvas")),_r.width=e.width,_r.height=e.height;let i=_r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=_r}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Yo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qi(t[i]/255)*255):t[i]=qi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gx=0,ul=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nc(s[o].image)):r.push(Nc(s[o]))}else r=Nc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Nc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$u.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wx=0,ln=class n extends _s{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Wi,s=Wi,r=On,o=ti,a=Bn,l=xi,c=n.DEFAULT_ANISOTROPY,u=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=gi(),this.name="",this.source=new ul(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Op)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pn:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pn:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Op;ln.DEFAULT_ANISOTROPY=1;var _t=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(d+1)/2,T=(p+1)/2,b=(u+f)/4,v=(h+x)/4,w=(g+m)/4;return M>y&&M>T?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=b/i,r=v/i):y>T?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=b/s,r=w/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=v/r,s=w/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-x)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zu=class extends _s{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new ln(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ul(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends Zu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},hl=class extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ku=class extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==g){let m=1-a,p=l*f+c*d+u*g+h*x,S=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let T=Math.sqrt(M),b=Math.atan2(T,p*S);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}let y=a*S;if(l=l*m+f*y,c=c*m+d*y,u=u*m+g*y,h=h*m+x*y,m===1-a){let T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ld.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ld.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uc.copy(this).projectOnVector(e),this.sub(Uc)}reflect(e){return this.sub(Uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uc=new k,Ld=new nn,ni=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ui):ui.fromBufferAttribute(r,o),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ra.copy(i.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),Ca.subVectors(this.max,Ao),Mr.subVectors(e.a,Ao),br.subVectors(e.b,Ao),Sr.subVectors(e.c,Ao),ls.subVectors(br,Mr),cs.subVectors(Sr,br),Xs.subVectors(Mr,Sr);let t=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Xs.z,Xs.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Xs.z,0,-Xs.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Xs.y,Xs.x,0];return!Fc(t,Mr,br,Sr,Ca)||(t=[1,0,0,0,1,0,0,0,1],!Fc(t,Mr,br,Sr,Ca))?!1:(Pa.crossVectors(ls,cs),t=[Pa.x,Pa.y,Pa.z],Fc(t,Mr,br,Sr,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Oi=[new k,new k,new k,new k,new k,new k,new k,new k],ui=new k,Ra=new ni,Mr=new k,br=new k,Sr=new k,ls=new k,cs=new k,Xs=new k,Ao=new k,Ca=new k,Pa=new k,qs=new k;function Fc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){qs.fromArray(n,r);let a=s.x*Math.abs(qs.x)+s.y*Math.abs(qs.y)+s.z*Math.abs(qs.z),l=e.dot(qs),c=t.dot(qs),u=i.dot(qs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Xx=new ni,Ro=new k,Oc=new k,qn=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Xx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);let t=Ro.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ro,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Oc)),this.expandByPoint(Ro.copy(e.center).sub(Oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Bi=new k,Bc=new k,Ia=new k,us=new k,zc=new k,La=new k,kc=new k,jr=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Bc.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),us.copy(this.origin).sub(Bc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ia),a=us.dot(this.direction),l=-us.dot(Ia),c=us.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Bc).addScaledVector(Ia,f),d}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);let i=Bi.dot(this.direction),s=Bi.dot(Bi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,i,s,r){zc.subVectors(t,e),La.subVectors(i,e),kc.crossVectors(zc,La);let o=this.direction.dot(kc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;us.subVectors(this.origin,e);let l=a*this.direction.dot(La.crossVectors(us,La));if(l<0)return null;let c=a*this.direction.dot(zc.cross(us));if(c<0||l+c>o)return null;let u=-a*us.dot(kc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,x,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Tr.setFromMatrixColumn(e,0).length(),r=1/Tr.setFromMatrixColumn(e,1).length(),o=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qx,e,Yx)}lookAt(e,t,i){let s=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),hs.crossVectors(i,Wn),hs.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),hs.crossVectors(i,Wn)),hs.normalize(),Da.crossVectors(Wn,hs),s[0]=hs.x,s[4]=Da.x,s[8]=Wn.x,s[1]=hs.y,s[5]=Da.y,s[9]=Wn.y,s[2]=hs.z,s[6]=Da.z,s[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],S=i[3],M=i[7],y=i[11],T=i[15],b=s[0],v=s[4],w=s[8],_=s[12],E=s[1],R=s[5],U=s[9],H=s[13],P=s[2],F=s[6],O=s[10],Y=s[14],G=s[3],J=s[7],re=s[11],me=s[15];return r[0]=o*b+a*E+l*P+c*G,r[4]=o*v+a*R+l*F+c*J,r[8]=o*w+a*U+l*O+c*re,r[12]=o*_+a*H+l*Y+c*me,r[1]=u*b+h*E+f*P+d*G,r[5]=u*v+h*R+f*F+d*J,r[9]=u*w+h*U+f*O+d*re,r[13]=u*_+h*H+f*Y+d*me,r[2]=g*b+x*E+m*P+p*G,r[6]=g*v+x*R+m*F+p*J,r[10]=g*w+x*U+m*O+p*re,r[14]=g*_+x*H+m*Y+p*me,r[3]=S*b+M*E+y*P+T*G,r[7]=S*v+M*R+y*F+T*J,r[11]=S*w+M*U+y*O+T*re,r[15]=S*_+M*H+y*Y+T*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+x*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],S=h*m*c-x*f*c+x*l*d-a*m*d-h*l*p+a*f*p,M=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,y=u*x*c-g*h*c+g*a*d-o*x*d-u*a*p+o*h*p,T=g*h*l-u*x*l-g*a*f+o*x*f+u*a*m-o*h*m,b=t*S+i*M+s*y+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let v=1/b;return e[0]=S*v,e[1]=(x*f*r-h*m*r-x*s*d+i*m*d+h*s*p-i*f*p)*v,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*v,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*v,e[4]=M*v,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*v,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*v,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*v,e[8]=y*v,e[9]=(g*h*r-u*x*r-g*i*d+t*x*d+u*i*p-t*h*p)*v,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*p+t*a*p)*v,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*v,e[12]=T*v,e[13]=(u*x*s-g*h*s+g*i*f-t*x*f-u*i*m+t*h*m)*v,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*m-t*a*m)*v,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*v,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,x=o*u,m=o*h,p=a*h,S=l*c,M=l*u,y=l*h,T=i.x,b=i.y,v=i.z;return s[0]=(1-(x+p))*T,s[1]=(d+y)*T,s[2]=(g-M)*T,s[3]=0,s[4]=(d-y)*b,s[5]=(1-(f+p))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(g+M)*v,s[9]=(m-S)*v,s[10]=(1-(f+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Tr.set(s[0],s[1],s[2]).length(),o=Tr.set(s[4],s[5],s[6]).length(),a=Tr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hi.copy(this);let c=1/r,u=1/o,h=1/a;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=u,hi.elements[5]*=u,hi.elements[6]*=u,hi.elements[8]*=h,hi.elements[9]*=h,hi.elements[10]*=h,t.setFromRotationMatrix(hi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Xi){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),d,g;if(a===Xi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===cl)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Xi){let l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,d=(i+s)*u,g,x;if(a===Xi)g=(o+r)*h,x=-2*h;else if(a===cl)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Tr=new k,hi=new je,qx=new k(0,0,0),Yx=new k(1,1,1),hs=new k,Da=new k,Wn=new k,Dd=new je,Nd=new nn,vi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nd.setFromEuler(this),this.setFromQuaternion(Nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vi.DEFAULT_ORDER="XYZ";var fl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$x=0,Ud=new k,Er=new nn,zi=new je,Na=new k,Co=new k,Zx=new k,Kx=new nn,Fd=new k(1,0,0),Od=new k(0,1,0),Bd=new k(0,0,1),zd={type:"added"},jx={type:"removed"},wr={type:"childadded",child:null},Hc={type:"childremoved",child:null},Ft=class n extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new k,t=new vi,i=new nn,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new ut}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(Fd,e)}rotateY(e){return this.rotateOnAxis(Od,e)}rotateZ(e){return this.rotateOnAxis(Bd,e)}translateOnAxis(e,t){return Ud.copy(e).applyQuaternion(this.quaternion),this.position.add(Ud.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fd,e)}translateY(e){return this.translateOnAxis(Od,e)}translateZ(e){return this.translateOnAxis(Bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Na.copy(e):Na.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Co,Na,this.up):zi.lookAt(Na,Co,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),Er.setFromRotationMatrix(zi),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zd),wr.child=e,this.dispatchEvent(wr),wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jx),Hc.child=e,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zd),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,Zx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,Kx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ft.DEFAULT_UP=new k(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=new k,ki=new k,Vc=new k,Hi=new k,Ar=new k,Rr=new k,kd=new k,Gc=new k,Wc=new k,Xc=new k,qc=new _t,Yc=new _t,$c=new _t,ms=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),fi.subVectors(e,t),s.cross(fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){fi.subVectors(s,t),ki.subVectors(i,t),Vc.subVectors(e,t);let o=fi.dot(fi),a=fi.dot(ki),l=fi.dot(Vc),c=ki.dot(ki),u=ki.dot(Vc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hi.x),l.addScaledVector(o,Hi.y),l.addScaledVector(a,Hi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return qc.setScalar(0),Yc.setScalar(0),$c.setScalar(0),qc.fromBufferAttribute(e,t),Yc.fromBufferAttribute(e,i),$c.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(qc,r.x),o.addScaledVector(Yc,r.y),o.addScaledVector($c,r.z),o}static isFrontFacing(e,t,i,s){return fi.subVectors(i,t),ki.subVectors(e,t),fi.cross(ki).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),fi.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Ar.subVectors(s,i),Rr.subVectors(r,i),Gc.subVectors(e,i);let l=Ar.dot(Gc),c=Rr.dot(Gc);if(l<=0&&c<=0)return t.copy(i);Wc.subVectors(e,s);let u=Ar.dot(Wc),h=Rr.dot(Wc);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ar,o);Xc.subVectors(e,r);let d=Ar.dot(Xc),g=Rr.dot(Xc);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Rr,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return kd.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(kd,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(Ar,o).addScaledVector(Rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function Zc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Re=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=pt.workingColorSpace){if(e=Bh(e,1),t=Mn(t,0,1),i=Mn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Zc(o,r,e+1/3),this.g=Zc(o,r,e),this.b=Zc(o,r,e-1/3)}return pt.toWorkingColorSpace(this,s),this}setStyle(e,t=Ct){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let i=jp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return pt.fromWorkingColorSpace(_n.copy(this),e),Math.round(Mn(_n.r*255,0,255))*65536+Math.round(Mn(_n.g*255,0,255))*256+Math.round(Mn(_n.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(_n.copy(this),t);let i=_n.r,s=_n.g,r=_n.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Ct){pt.fromWorkingColorSpace(_n.copy(this),e);let t=_n.r,i=_n.g,s=_n.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+t,fs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fs),e.getHSL(Ua);let i=Vo(fs.h,Ua.h,t),s=Vo(fs.s,Ua.s,t),r=Vo(fs.l,Ua.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new Re;Re.NAMES=jp;var Jx=0,bn=class extends _s{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=gi(),this.name="",this.blending=kr,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hu,this.blendDst=Wo,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hu&&(i.blendSrc=this.blendSrc),this.blendDst!==Wo&&(i.blendDst=this.blendDst),this.blendEquation!==Fn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Yt=class extends bn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new k,Fa=new $e,mt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yu,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fa.fromBufferAttribute(this,t),Fa.applyMatrix3(e),this.setXY(t,Fa.x,Fa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yu&&(e.usage=this.usage),e}};var dl=class extends mt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var pl=class extends mt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var lt=class extends mt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Qx=0,ei=new je,Kc=new Ft,Cr=new k,Xn=new ni,Po=new ni,an=new k,gt=class n extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kp(e)?pl:dl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ut().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return Kc.lookAt(e),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Xn.min,Po.min),Xn.expandByPoint(an),an.addVectors(Xn.max,Po.max),Xn.expandByPoint(an)):(Xn.expandByPoint(Po.min),Xn.expandByPoint(Po.max))}Xn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)an.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(an));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)an.fromBufferAttribute(a,c),l&&(Cr.fromBufferAttribute(e,c),an.add(Cr)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<i.count;w++)a[w]=new k,l[w]=new k;let c=new k,u=new k,h=new k,f=new $e,d=new $e,g=new $e,x=new k,m=new k;function p(w,_,E){c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,_),h.fromBufferAttribute(i,E),f.fromBufferAttribute(r,w),d.fromBufferAttribute(r,_),g.fromBufferAttribute(r,E),u.sub(c),h.sub(c),d.sub(f),g.sub(f);let R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),a[w].add(x),a[_].add(x),a[E].add(x),l[w].add(m),l[_].add(m),l[E].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let w=0,_=S.length;w<_;++w){let E=S[w],R=E.start,U=E.count;for(let H=R,P=R+U;H<P;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let M=new k,y=new k,T=new k,b=new k;function v(w){T.fromBufferAttribute(s,w),b.copy(T);let _=a[w];M.copy(_),M.sub(T.multiplyScalar(T.dot(_))).normalize(),y.crossVectors(b,_);let R=y.dot(l[w])<0?-1:1;o.setXYZW(w,M.x,M.y,M.z,R)}for(let w=0,_=S.length;w<_;++w){let E=S[w],R=E.start,U=E.count;for(let H=R,P=R+U;H<P;H+=3)v(e.getX(H+0)),v(e.getX(H+1)),v(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new mt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hd=new je,Ys=new jr,Oa=new qn,Vd=new k,Ba=new k,za=new k,ka=new k,jc=new k,Ha=new k,Gd=new k,Va=new k,ot=class extends Ft{constructor(e=new gt,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(jc.fromBufferAttribute(h,e),o?Ha.addScaledVector(jc,u):Ha.addScaledVector(jc.sub(t),u))}t.add(Ha)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(r),Ys.copy(e.ray).recast(e.near),!(Oa.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(Oa,Vd)===null||Ys.origin.distanceToSquared(Vd)>(e.far-e.near)**2))&&(Hd.copy(r).invert(),Ys.copy(e.ray).applyMatrix4(Hd),!(i.boundingBox!==null&&Ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,T=M;y<T;y+=3){let b=a.getX(y),v=a.getX(y+1),w=a.getX(y+2);s=Ga(this,p,e,i,c,u,h,b,v,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let S=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=Ga(this,o,e,i,c,u,h,S,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,T=M;y<T;y+=3){let b=y,v=y+1,w=y+2;s=Ga(this,p,e,i,c,u,h,b,v,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let S=m,M=m+1,y=m+2;s=Ga(this,o,e,i,c,u,h,S,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ev(n,e,t,i,s,r,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===wi,a),l===null)return null;Va.copy(a),Va.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Va);return c<t.near||c>t.far?null:{distance:c,point:Va.clone(),object:n}}function Ga(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ba),n.getVertexPosition(l,za),n.getVertexPosition(c,ka);let u=ev(n,e,t,i,Ba,za,ka,Gd);if(u){let h=new k;ms.getBarycoord(Gd,Ba,za,ka,h),s&&(u.uv=ms.getInterpolatedAttribute(s,a,l,c,h,new $e)),r&&(u.uv1=ms.getInterpolatedAttribute(r,a,l,c,h,new $e)),o&&(u.normal=ms.getInterpolatedAttribute(o,a,l,c,h,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new k,materialIndex:0};ms.getNormal(Ba,za,ka,f.normal),u.face=f,u.barycoord=h}return u}var cn=class n extends gt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(h,2));function g(x,m,p,S,M,y,T,b,v,w,_){let E=y/v,R=T/w,U=y/2,H=T/2,P=b/2,F=v+1,O=w+1,Y=0,G=0,J=new k;for(let re=0;re<O;re++){let me=re*R-H;for(let ye=0;ye<F;ye++){let ce=ye*E-U;J[x]=ce*S,J[m]=me*M,J[p]=P,c.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[p]=b>0?1:-1,u.push(J.x,J.y,J.z),h.push(ye/v),h.push(1-re/w),Y+=1}}for(let re=0;re<w;re++)for(let me=0;me<v;me++){let ye=f+me+F*re,ce=f+me+F*(re+1),ie=f+(me+1)+F*(re+1),Q=f+(me+1)+F*re;l.push(ye,ce,Q),l.push(ce,ie,Q),G+=6}a.addGroup(d,G,_),d+=G,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Jr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Cn(n){let e={};for(let t=0;t<n.length;t++){let i=Jr(n[t]);for(let s in i)e[s]=i[s]}return e}function tv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Jp(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var En={clone:Jr,merge:Cn},nv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vt=class extends bn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nv,this.fragmentShader=iv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=tv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ml=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ds=new k,Wd=new $e,Xd=new $e,Zt=class extends ml{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(Ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,t){return this.getViewBounds(e,Wd,Xd),t.subVectors(Xd,Wd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ho*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pr=-90,Ir=1,ju=class extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zt(Pr,Ir,e,t);s.layers=this.layers,this.add(s);let r=new Zt(Pr,Ir,e,t);r.layers=this.layers,this.add(r);let o=new Zt(Pr,Ir,e,t);o.layers=this.layers,this.add(o);let a=new Zt(Pr,Ir,e,t);a.layers=this.layers,this.add(a);let l=new Zt(Pr,Ir,e,t);l.layers=this.layers,this.add(l);let c=new Zt(Pr,Ir,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},gl=class extends ln{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:qr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ju=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new gl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:On}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cn(5,5,5),r=new vt({name:"CubemapFromEquirect",uniforms:Jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:tn});r.uniforms.tEquirect.value=t;let o=new ot(s,r),a=t.minFilter;return t.minFilter===ti&&(t.minFilter=On),new ju(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Jc=new k,sv=new k,rv=new ut,di=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Jc.subVectors(i,t).cross(sv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Jc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||rv.getNormalMatrix(e),s=this.coplanarPoint(Jc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},$s=new qn,Wa=new k,$o=class{constructor(e=new di,t=new di,i=new di,s=new di,r=new di,o=new di){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],S=s[13],M=s[14],y=s[15];if(i[0].setComponents(l-r,f-c,m-d,y-p).normalize(),i[1].setComponents(l+r,f+c,m+d,y+p).normalize(),i[2].setComponents(l+o,f+u,m+g,y+S).normalize(),i[3].setComponents(l-o,f-u,m-g,y-S).normalize(),i[4].setComponents(l-a,f-h,m-x,y-M).normalize(),t===Xi)i[5].setComponents(l+a,f+h,m+x,y+M).normalize();else if(t===cl)i[5].setComponents(a,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(e){return $s.center.set(0,0,0),$s.radius=.7071067811865476,$s.applyMatrix4(e.matrixWorld),this.intersectsSphere($s)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Wa.x=s.normal.x>0?e.max.x:e.min.x,Wa.y=s.normal.y>0?e.max.y:e.min.y,Wa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Qp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ov(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var zn=class n extends gt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let S=p*f-o;for(let M=0;M<c;M++){let y=M*h-r;g.push(y,-S,0),x.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let M=S+c*p,y=S+c*(p+1),T=S+1+c*(p+1),b=S+1+c*p;d.push(M,y,b),d.push(y,T,b)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},av=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lv=`#ifdef USE_ALPHAHASH
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
#endif`,cv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dv=`#ifdef USE_AOMAP
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
#endif`,pv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mv=`#ifdef USE_BATCHING
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
#endif`,gv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_v=`#ifdef USE_IRIDESCENCE
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
#endif`,Mv=`#ifdef USE_BUMPMAP
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
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Av=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pv=`#define PI 3.141592653589793
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
} // validated`,Iv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lv=`vec3 transformedNormal = objectNormal;
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
#endif`,Dv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ov="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hv=`#ifdef USE_ENVMAP
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
#endif`,Vv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gv=`#ifdef USE_ENVMAP
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
#endif`,Wv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$v=`#ifdef USE_GRADIENTMAP
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
}`,Zv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jv=`uniform bool receiveShadow;
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
#endif`,Qv=`#ifdef USE_ENVMAP
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
#endif`,ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ny=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sy=`PhysicalMaterial material;
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
#endif`,ry=`struct PhysicalMaterial {
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
}`,oy=`
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
#endif`,ay=`#if defined( RE_IndirectDiffuse )
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
#endif`,ly=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,py=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,my=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gy=`#if defined( USE_POINTS_UV )
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
#endif`,xy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_y=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,My=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`#ifdef USE_MORPHTARGETS
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
#endif`,Sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ty=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ey=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cy=`#ifdef USE_NORMALMAP
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
#endif`,Py=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ly=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,By=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ky=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xy=`float getShadowMask() {
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
}`,qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yy=`#ifdef USE_SKINNING
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
#endif`,$y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zy=`#ifdef USE_SKINNING
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
#endif`,Ky=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e_=`#ifdef USE_TRANSMISSION
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
#endif`,t_=`#ifdef USE_TRANSMISSION
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
#endif`,n_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,o_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a_=`uniform sampler2D t2D;
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
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`#include <common>
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
}`,d_=`#if DEPTH_PACKING == 3200
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
}`,p_=`#define DISTANCE
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
}`,m_=`#define DISTANCE
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
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`uniform float scale;
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
}`,y_=`uniform vec3 diffuse;
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
}`,__=`#include <common>
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
}`,M_=`uniform vec3 diffuse;
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
}`,b_=`#define LAMBERT
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
}`,S_=`#define LAMBERT
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
}`,T_=`#define MATCAP
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
}`,E_=`#define MATCAP
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
}`,w_=`#define NORMAL
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
}`,A_=`#define NORMAL
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
}`,R_=`#define PHONG
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
}`,C_=`#define PHONG
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
}`,P_=`#define STANDARD
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
}`,I_=`#define STANDARD
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
}`,L_=`#define TOON
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
}`,D_=`#define TOON
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
}`,N_=`uniform float size;
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
}`,U_=`uniform vec3 diffuse;
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
}`,F_=`#include <common>
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
}`,O_=`uniform vec3 color;
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
}`,B_=`uniform float rotation;
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
}`,z_=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:av,alphahash_pars_fragment:lv,alphamap_fragment:cv,alphamap_pars_fragment:uv,alphatest_fragment:hv,alphatest_pars_fragment:fv,aomap_fragment:dv,aomap_pars_fragment:pv,batching_pars_vertex:mv,batching_vertex:gv,begin_vertex:xv,beginnormal_vertex:vv,bsdfs:yv,iridescence_fragment:_v,bumpmap_pars_fragment:Mv,clipping_planes_fragment:bv,clipping_planes_pars_fragment:Sv,clipping_planes_pars_vertex:Tv,clipping_planes_vertex:Ev,color_fragment:wv,color_pars_fragment:Av,color_pars_vertex:Rv,color_vertex:Cv,common:Pv,cube_uv_reflection_fragment:Iv,defaultnormal_vertex:Lv,displacementmap_pars_vertex:Dv,displacementmap_vertex:Nv,emissivemap_fragment:Uv,emissivemap_pars_fragment:Fv,colorspace_fragment:Ov,colorspace_pars_fragment:Bv,envmap_fragment:zv,envmap_common_pars_fragment:kv,envmap_pars_fragment:Hv,envmap_pars_vertex:Vv,envmap_physical_pars_fragment:Qv,envmap_vertex:Gv,fog_vertex:Wv,fog_pars_vertex:Xv,fog_fragment:qv,fog_pars_fragment:Yv,gradientmap_pars_fragment:$v,lightmap_pars_fragment:Zv,lights_lambert_fragment:Kv,lights_lambert_pars_fragment:jv,lights_pars_begin:Jv,lights_toon_fragment:ey,lights_toon_pars_fragment:ty,lights_phong_fragment:ny,lights_phong_pars_fragment:iy,lights_physical_fragment:sy,lights_physical_pars_fragment:ry,lights_fragment_begin:oy,lights_fragment_maps:ay,lights_fragment_end:ly,logdepthbuf_fragment:cy,logdepthbuf_pars_fragment:uy,logdepthbuf_pars_vertex:hy,logdepthbuf_vertex:fy,map_fragment:dy,map_pars_fragment:py,map_particle_fragment:my,map_particle_pars_fragment:gy,metalnessmap_fragment:xy,metalnessmap_pars_fragment:vy,morphinstance_vertex:yy,morphcolor_vertex:_y,morphnormal_vertex:My,morphtarget_pars_vertex:by,morphtarget_vertex:Sy,normal_fragment_begin:Ty,normal_fragment_maps:Ey,normal_pars_fragment:wy,normal_pars_vertex:Ay,normal_vertex:Ry,normalmap_pars_fragment:Cy,clearcoat_normal_fragment_begin:Py,clearcoat_normal_fragment_maps:Iy,clearcoat_pars_fragment:Ly,iridescence_pars_fragment:Dy,opaque_fragment:Ny,packing:Uy,premultiplied_alpha_fragment:Fy,project_vertex:Oy,dithering_fragment:By,dithering_pars_fragment:zy,roughnessmap_fragment:ky,roughnessmap_pars_fragment:Hy,shadowmap_pars_fragment:Vy,shadowmap_pars_vertex:Gy,shadowmap_vertex:Wy,shadowmask_pars_fragment:Xy,skinbase_vertex:qy,skinning_pars_vertex:Yy,skinning_vertex:$y,skinnormal_vertex:Zy,specularmap_fragment:Ky,specularmap_pars_fragment:jy,tonemapping_fragment:Jy,tonemapping_pars_fragment:Qy,transmission_fragment:e_,transmission_pars_fragment:t_,uv_pars_fragment:n_,uv_pars_vertex:i_,uv_vertex:s_,worldpos_vertex:r_,background_vert:o_,background_frag:a_,backgroundCube_vert:l_,backgroundCube_frag:c_,cube_vert:u_,cube_frag:h_,depth_vert:f_,depth_frag:d_,distanceRGBA_vert:p_,distanceRGBA_frag:m_,equirect_vert:g_,equirect_frag:x_,linedashed_vert:v_,linedashed_frag:y_,meshbasic_vert:__,meshbasic_frag:M_,meshlambert_vert:b_,meshlambert_frag:S_,meshmatcap_vert:T_,meshmatcap_frag:E_,meshnormal_vert:w_,meshnormal_frag:A_,meshphong_vert:R_,meshphong_frag:C_,meshphysical_vert:P_,meshphysical_frag:I_,meshtoon_vert:L_,meshtoon_frag:D_,points_vert:N_,points_frag:U_,shadow_vert:F_,shadow_frag:O_,sprite_vert:B_,sprite_frag:z_},We={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Ei={basic:{uniforms:Cn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Cn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Re(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Cn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Cn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Cn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Re(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Cn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Cn([We.points,We.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Cn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Cn([We.common,We.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Cn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Cn([We.sprite,We.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Cn([We.common,We.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Cn([We.lights,We.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ei.physical={uniforms:Cn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Xa={r:0,b:0,g:0},Zs=new vi,k_=new je;function H_(n,e,t,i,s,r,o){let a=new Re(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function x(S){let M=!1,y=g(S);y===null?p(a,l):y&&y.isColor&&(p(y,1),M=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,M){let y=g(M);y&&(y.isCubeTexture||y.mapping===Ul)?(u===void 0&&(u=new ot(new cn(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:Jr(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,b,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Zs.copy(M.backgroundRotation),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(k_.makeRotationFromEuler(Zs)),u.material.toneMapped=pt.getTransfer(y.colorSpace)!==Et,(h!==y||f!==y.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ot(new zn(2,2),new vt({name:"BackgroundMaterial",uniforms:Jr(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=pt.getTransfer(y.colorSpace)!==Et,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,M){S.getRGB(Xa,Jp(n)),i.buffers.color.setClear(Xa.r,Xa.g,Xa.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:x,addToRenderList:m}}function V_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(E,R,U,H,P){let F=!1,O=h(H,U,R);r!==O&&(r=O,c(r.object)),F=d(E,H,U,P),F&&g(E,H,U,P),P!==null&&e.update(P,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,y(E,R,U,H),P!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function h(E,R,U){let H=U.wireframe===!0,P=i[E.id];P===void 0&&(P={},i[E.id]=P);let F=P[R.id];F===void 0&&(F={},P[R.id]=F);let O=F[H];return O===void 0&&(O=f(l()),F[H]=O),O}function f(E){let R=[],U=[],H=[];for(let P=0;P<t;P++)R[P]=0,U[P]=0,H[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:H,object:E,attributes:{},index:null}}function d(E,R,U,H){let P=r.attributes,F=R.attributes,O=0,Y=U.getAttributes();for(let G in Y)if(Y[G].location>=0){let re=P[G],me=F[G];if(me===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(me=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(me=E.instanceColor)),re===void 0||re.attribute!==me||me&&re.data!==me.data)return!0;O++}return r.attributesNum!==O||r.index!==H}function g(E,R,U,H){let P={},F=R.attributes,O=0,Y=U.getAttributes();for(let G in Y)if(Y[G].location>=0){let re=F[G];re===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(re=E.instanceColor));let me={};me.attribute=re,re&&re.data&&(me.data=re.data),P[G]=me,O++}r.attributes=P,r.attributesNum=O,r.index=H}function x(){let E=r.newAttributes;for(let R=0,U=E.length;R<U;R++)E[R]=0}function m(E){p(E,0)}function p(E,R){let U=r.newAttributes,H=r.enabledAttributes,P=r.attributeDivisors;U[E]=1,H[E]===0&&(n.enableVertexAttribArray(E),H[E]=1),P[E]!==R&&(n.vertexAttribDivisor(E,R),P[E]=R)}function S(){let E=r.newAttributes,R=r.enabledAttributes;for(let U=0,H=R.length;U<H;U++)R[U]!==E[U]&&(n.disableVertexAttribArray(U),R[U]=0)}function M(E,R,U,H,P,F,O){O===!0?n.vertexAttribIPointer(E,R,U,P,F):n.vertexAttribPointer(E,R,U,H,P,F)}function y(E,R,U,H){x();let P=H.attributes,F=U.getAttributes(),O=R.defaultAttributeValues;for(let Y in F){let G=F[Y];if(G.location>=0){let J=P[Y];if(J===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(J=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(J=E.instanceColor)),J!==void 0){let re=J.normalized,me=J.itemSize,ye=e.get(J);if(ye===void 0)continue;let ce=ye.buffer,ie=ye.type,Q=ye.bytesPerElement,ee=ie===n.INT||ie===n.UNSIGNED_INT||J.gpuType===Ih;if(J.isInterleavedBufferAttribute){let L=J.data,B=L.stride,X=J.offset;if(L.isInstancedInterleavedBuffer){for(let $=0;$<G.locationSize;$++)p(G.location+$,L.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let $=0;$<G.locationSize;$++)m(G.location+$);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let $=0;$<G.locationSize;$++)M(G.location+$,me/G.locationSize,ie,re,B*Q,(X+me/G.locationSize*$)*Q,ee)}else{if(J.isInstancedBufferAttribute){for(let L=0;L<G.locationSize;L++)p(G.location+L,J.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let L=0;L<G.locationSize;L++)m(G.location+L);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let L=0;L<G.locationSize;L++)M(G.location+L,me/G.locationSize,ie,re,me*Q,me/G.locationSize*L*Q,ee)}}else if(O!==void 0){let re=O[Y];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(G.location,re);break;case 3:n.vertexAttrib3fv(G.location,re);break;case 4:n.vertexAttrib4fv(G.location,re);break;default:n.vertexAttrib1fv(G.location,re)}}}}S()}function T(){w();for(let E in i){let R=i[E];for(let U in R){let H=R[U];for(let P in H)u(H[P].object),delete H[P];delete R[U]}delete i[E]}}function b(E){if(i[E.id]===void 0)return;let R=i[E.id];for(let U in R){let H=R[U];for(let P in H)u(H[P].object),delete H[P];delete R[U]}delete i[E.id]}function v(E){for(let R in i){let U=i[R];if(U[E.id]===void 0)continue;let H=U[E.id];for(let P in H)u(H[P].object),delete H[P];delete U[E.id]}}function w(){_(),o=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:_,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function G_(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function W_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==Bn&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let w=v===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==xi&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==mi&&!w)}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:T,maxSamples:b}}function X_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new di,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let S=r?0:i,M=S*4,y=p.clippingState||null;l.value=y,y=u(g,f,M,d);for(let T=0;T!==M;++T)y[T]=t[T];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=d;M!==x;++M,y+=4)o.copy(h[M]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function q_(n){let e=new WeakMap;function t(o,a){return a===yu?o.mapping=qr:a===_u&&(o.mapping=Yr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===yu||a===_u)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ju(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ms=class extends ml{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zr=4,qd=[.125,.215,.35,.446,.526,.582],Js=20,Qc=new Ms,Yd=new Re,eu=null,tu=0,nu=0,iu=!1,js=(1+Math.sqrt(5))/2,Lr=1/js,$d=[new k(-js,Lr,0),new k(js,Lr,0),new k(-Lr,0,js),new k(Lr,0,js),new k(0,js,-Lr),new k(0,js,Lr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Qr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){eu=this._renderer.getRenderTarget(),tu=this._renderer.getActiveCubeFace(),nu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(eu,tu,nu),this._renderer.xr.enabled=iu,e.scissorTest=!1,qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qr||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eu=this._renderer.getRenderTarget(),tu=this._renderer.getActiveCubeFace(),nu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:un,format:Bn,colorSpace:Tn,depthBuffer:!1},s=Zd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y_(r)),this._blurMaterial=$_(r,e,t)}return s}_compileMaterial(e){let t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,Qc)}_sceneToCubeUV(e,t,i,s){let a=new Zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Yd),u.toneMapping=xs,u.autoClear=!1;let d=new Yt({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new ot(new cn,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(Yd),x=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let M=this._cubeSize;qa(s,S*M,p>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===qr||e.mapping===Yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;qa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Qc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$d[(s-r-1)%$d.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ot(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Js-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Js;m>Js&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Js}`);let p=[],S=0;for(let v=0;v<Js;++v){let w=v/x,_=Math.exp(-w*w/2);p.push(_),v===0?S+=_:v<m&&(S+=2*_)}for(let v=0;v<p.length;v++)p[v]=p[v]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;let y=this._sizeLods[s],T=3*y*(s>M-zr?s-M+zr:0),b=4*(this._cubeSize-y);qa(t,T,b,3*y,2*y),l.setRenderTarget(t),l.render(h,Qc)}};function Y_(n){let e=[],t=[],i=[],s=n,r=n-zr+1+qd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-zr?l=qd[o-n+zr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*d),M=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let b=0;b<d;b++){let v=b%3*2/3-1,w=b>2?0:-1,_=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];S.set(_,x*g*b),M.set(f,m*g*b);let E=[b,b,b,b,b,b];y.set(E,p*g*b)}let T=new gt;T.setAttribute("position",new mt(S,x)),T.setAttribute("uv",new mt(M,m)),T.setAttribute("faceIndex",new mt(y,p)),e.push(T),s>zr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Zd(n,e,t){let i=new qt(n,e,t);return i.texture.mapping=Ul,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function $_(n,e,t){let i=new Float32Array(Js),s=new k(0,1,0);return new vt({name:"SphericalGaussianBlur",defines:{n:Js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zh(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Kd(){return new vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zh(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function jd(){return new vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function zh(){return`

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
	`}function Z_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===yu||l===_u,u=l===qr||l===Yr;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Qr(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Qr(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function K_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Bo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function j_(n,e,t,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let d=h.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){let f=[],d=h.index,g=h.attributes.position,x=0;if(d!==null){let S=d.array;x=d.version;for(let M=0,y=S.length;M<y;M+=3){let T=S[M+0],b=S[M+1],v=S[M+2];f.push(T,b,b,v,v,T)}}else if(g!==void 0){let S=g.array;x=g.version;for(let M=0,y=S.length/3-1;M<y;M+=3){let T=M+0,b=M+1,v=M+2;f.push(T,b,b,v,v,T)}}else return;let m=new(Kp(f)?pl:dl)(f,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function J_(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*x[S];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Q_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function e1(n,e,t){let i=new WeakMap,s=new _t;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let _=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*T*4*h),v=new hl(b,y,T,h);v.type=mi,v.needsUpdate=!0;let w=M*4;for(let E=0;E<h;E++){let R=m[E],U=p[E],H=S[E],P=y*T*4*E;for(let F=0;F<R.count;F++){let O=F*w;d===!0&&(s.fromBufferAttribute(R,F),b[P+O+0]=s.x,b[P+O+1]=s.y,b[P+O+2]=s.z,b[P+O+3]=0),g===!0&&(s.fromBufferAttribute(U,F),b[P+O+4]=s.x,b[P+O+5]=s.y,b[P+O+6]=s.z,b[P+O+7]=0),x===!0&&(s.fromBufferAttribute(H,F),b[P+O+8]=s.x,b[P+O+9]=s.y,b[P+O+10]=s.z,b[P+O+11]=H.itemSize===4?s.w:1)}}f={count:h,texture:v,size:new $e(y,T)},i.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function t1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var eo=class extends ln{constructor(e,t,i,s,r,o,a,l,c,u=Hr){if(u!==Hr&&u!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Hr&&(i=Qs),i===void 0&&u===ys&&(i=vs),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},em=new ln,Jd=new eo(1,1),tm=new hl,nm=new Ku,im=new gl,Qd=[],ep=[],tp=new Float32Array(16),np=new Float32Array(9),ip=new Float32Array(4);function lo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Qd[s];if(r===void 0&&(r=new Float32Array(s),Qd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function sn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zl(n,e){let t=ep[e];t===void 0&&(t=new Int32Array(e),ep[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function n1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function i1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function s1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function r1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function o1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;ip.set(i),n.uniformMatrix2fv(this.addr,!1,ip),rn(t,i)}}function a1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;np.set(i),n.uniformMatrix3fv(this.addr,!1,np),rn(t,i)}}function l1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;tp.set(i),n.uniformMatrix4fv(this.addr,!1,tp),rn(t,i)}}function c1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function u1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function h1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function f1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function d1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function p1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function m1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function g1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function x1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Jd.compareFunction=$p,r=Jd):r=em,t.setTexture2D(e||r,s)}function v1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||nm,s)}function y1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||im,s)}function _1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||tm,s)}function M1(n){switch(n){case 5126:return n1;case 35664:return i1;case 35665:return s1;case 35666:return r1;case 35674:return o1;case 35675:return a1;case 35676:return l1;case 5124:case 35670:return c1;case 35667:case 35671:return u1;case 35668:case 35672:return h1;case 35669:case 35673:return f1;case 5125:return d1;case 36294:return p1;case 36295:return m1;case 36296:return g1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return _1}}function b1(n,e){n.uniform1fv(this.addr,e)}function S1(n,e){let t=lo(e,this.size,2);n.uniform2fv(this.addr,t)}function T1(n,e){let t=lo(e,this.size,3);n.uniform3fv(this.addr,t)}function E1(n,e){let t=lo(e,this.size,4);n.uniform4fv(this.addr,t)}function w1(n,e){let t=lo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function A1(n,e){let t=lo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function R1(n,e){let t=lo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function C1(n,e){n.uniform1iv(this.addr,e)}function P1(n,e){n.uniform2iv(this.addr,e)}function I1(n,e){n.uniform3iv(this.addr,e)}function L1(n,e){n.uniform4iv(this.addr,e)}function D1(n,e){n.uniform1uiv(this.addr,e)}function N1(n,e){n.uniform2uiv(this.addr,e)}function U1(n,e){n.uniform3uiv(this.addr,e)}function F1(n,e){n.uniform4uiv(this.addr,e)}function O1(n,e,t){let i=this.cache,s=e.length,r=zl(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||em,r[o])}function B1(n,e,t){let i=this.cache,s=e.length,r=zl(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||nm,r[o])}function z1(n,e,t){let i=this.cache,s=e.length,r=zl(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||im,r[o])}function k1(n,e,t){let i=this.cache,s=e.length,r=zl(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||tm,r[o])}function H1(n){switch(n){case 5126:return b1;case 35664:return S1;case 35665:return T1;case 35666:return E1;case 35674:return w1;case 35675:return A1;case 35676:return R1;case 5124:case 35670:return C1;case 35667:case 35671:return P1;case 35668:case 35672:return I1;case 35669:case 35673:return L1;case 5125:return D1;case 36294:return N1;case 36295:return U1;case 36296:return F1;case 35678:case 36198:case 36298:case 36306:case 35682:return O1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return z1;case 36289:case 36303:case 36311:case 36292:return k1}}var Qu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=M1(t.type)}},eh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H1(t.type)}},th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},su=/(\w+)(\])?(\[|\.)?/g;function sp(n,e){n.seq.push(e),n.map[e.id]=e}function V1(n,e,t){let i=n.name,s=i.length;for(su.lastIndex=0;;){let r=su.exec(i),o=su.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){sp(t,c===void 0?new Qu(a,n,e):new eh(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new th(a),sp(t,h)),t=h}}}var Gr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);V1(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function rp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var G1=37297,W1=0;function X1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var op=new ut;function q1(n){pt._getMatrix(op,pt.workingColorSpace,n);let e=`mat3( ${op.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(n)){case Bl:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ap(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+X1(n.getShaderSource(e),o)}else return s}function Y1(n,e){let t=q1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $1(n,e){let t;switch(e){case Eh:t="Linear";break;case wh:t="Reinhard";break;case Ah:t="Cineon";break;case ta:t="ACESFilmic";break;case Rh:t="AgX";break;case Ch:t="Neutral";break;case ux:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ya=new k;function Z1(){pt.getLuminanceCoefficients(Ya);let n=Ya.x.toFixed(4),e=Ya.y.toFixed(4),t=Ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function j1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function J1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function zo(n){return n!==""}function lp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(n){return n.replace(Q1,tM)}var eM=new Map;function tM(n,e){let t=ft[e];if(t===void 0){let i=eM.get(e);if(i!==void 0)t=ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nh(t)}var nM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function up(n){return n.replace(nM,iM)}function iM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function sM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ll?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$g?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function rM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qr:case Yr:e="ENVMAP_TYPE_CUBE";break;case Ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oM(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Yr&&(e="ENVMAP_MODE_REFRACTION"),e}function aM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Th:e="ENVMAP_BLENDING_MULTIPLY";break;case lx:e="ENVMAP_BLENDING_MIX";break;case cx:e="ENVMAP_BLENDING_ADD";break}return e}function lM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function cM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=sM(t),c=rM(t),u=oM(t),h=aM(t),f=lM(t),d=K1(t),g=j1(r),x=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zo).join(`
`),p.length>0&&(p+=`
`)):(m=[hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),p=[hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xs?"#define TONE_MAPPING":"",t.toneMapping!==xs?ft.tonemapping_pars_fragment:"",t.toneMapping!==xs?$1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Y1("linearToOutputTexel",t.outputColorSpace),Z1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zo).join(`
`)),o=nh(o),o=lp(o,t),o=cp(o,t),a=nh(a),a=lp(a,t),a=cp(a,t),o=up(o),a=up(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Td?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=S+m+o,y=S+p+a,T=rp(s,s.VERTEX_SHADER,M),b=rp(s,s.FRAGMENT_SHADER,y);s.attachShader(x,T),s.attachShader(x,b),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function v(R){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(x).trim(),H=s.getShaderInfoLog(T).trim(),P=s.getShaderInfoLog(b).trim(),F=!0,O=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,T,b);else{let Y=ap(s,T,"vertex"),G=ap(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+Y+`
`+G)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(H===""||P==="")&&(O=!1);O&&(R.diagnostics={runnable:F,programLog:U,vertexShader:{log:H,prefix:m},fragmentShader:{log:P,prefix:p}})}s.deleteShader(T),s.deleteShader(b),w=new Gr(s,x),_=J1(s,x)}let w;this.getUniforms=function(){return w===void 0&&v(this),w};let _;this.getAttributes=function(){return _===void 0&&v(this),_};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,G1)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=b,this}var uM=0,ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new sh(e),t.set(e,i)),i}},sh=class{constructor(e){this.id=uM++,this.code=e,this.usedTimes=0}};function hM(n,e,t,i,s,r,o){let a=new fl,l=new ih,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,E,R,U,H){let P=U.fog,F=H.geometry,O=_.isMeshStandardMaterial?U.environment:null,Y=(_.isMeshStandardMaterial?t:e).get(_.envMap||O),G=Y&&Y.mapping===Ul?Y.image.height:null,J=g[_.type];_.precision!==null&&(d=s.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,me=re!==void 0?re.length:0,ye=0;F.morphAttributes.position!==void 0&&(ye=1),F.morphAttributes.normal!==void 0&&(ye=2),F.morphAttributes.color!==void 0&&(ye=3);let ce,ie,Q,ee;if(J){let Ge=Ei[J];ce=Ge.vertexShader,ie=Ge.fragmentShader}else ce=_.vertexShader,ie=_.fragmentShader,l.update(_),Q=l.getVertexShaderID(_),ee=l.getFragmentShaderID(_);let L=n.getRenderTarget(),B=n.state.buffers.depth.getReversed(),X=H.isInstancedMesh===!0,$=H.isBatchedMesh===!0,de=!!_.map,we=!!_.matcap,Ae=!!Y,V=!!_.aoMap,Ve=!!_.lightMap,ze=!!_.bumpMap,Be=!!_.normalMap,Ie=!!_.displacementMap,qe=!!_.emissiveMap,Fe=!!_.metalnessMap,D=!!_.roughnessMap,A=_.anisotropy>0,j=_.clearcoat>0,xe=_.dispersion>0,_e=_.iridescence>0,he=_.sheen>0,Ce=_.transmission>0,Le=A&&!!_.anisotropyMap,Ne=j&&!!_.clearcoatMap,ke=j&&!!_.clearcoatNormalMap,Ee=j&&!!_.clearcoatRoughnessMap,Ue=_e&&!!_.iridescenceMap,se=_e&&!!_.iridescenceThicknessMap,be=he&&!!_.sheenColorMap,ne=he&&!!_.sheenRoughnessMap,Me=!!_.specularMap,fe=!!_.specularColorMap,ge=!!_.specularIntensityMap,W=Ce&&!!_.transmissionMap,Te=Ce&&!!_.thicknessMap,C=!!_.gradientMap,N=!!_.alphaMap,z=_.alphaTest>0,Z=!!_.alphaHash,ae=!!_.extensions,Pe=xs;_.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Pe=n.toneMapping);let He={shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:ce,fragmentShader:ie,defines:_.defines,customVertexShaderID:Q,customFragmentShaderID:ee,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:$,batchingColor:$&&H._colorsTexture!==null,instancing:X,instancingColor:X&&H.instanceColor!==null,instancingMorph:X&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:L===null?n.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Tn,alphaToCoverage:!!_.alphaToCoverage,map:de,matcap:we,envMap:Ae,envMapMode:Ae&&Y.mapping,envMapCubeUVHeight:G,aoMap:V,lightMap:Ve,bumpMap:ze,normalMap:Be,displacementMap:f&&Ie,emissiveMap:qe,normalMapObjectSpace:Be&&_.normalMapType===mx,normalMapTangentSpace:Be&&_.normalMapType===Ol,metalnessMap:Fe,roughnessMap:D,anisotropy:A,anisotropyMap:Le,clearcoat:j,clearcoatMap:Ne,clearcoatNormalMap:ke,clearcoatRoughnessMap:Ee,dispersion:xe,iridescence:_e,iridescenceMap:Ue,iridescenceThicknessMap:se,sheen:he,sheenColorMap:be,sheenRoughnessMap:ne,specularMap:Me,specularColorMap:fe,specularIntensityMap:ge,transmission:Ce,transmissionMap:W,thicknessMap:Te,gradientMap:C,opaque:_.transparent===!1&&_.blending===kr&&_.alphaToCoverage===!1,alphaMap:N,alphaTest:z,alphaHash:Z,combine:_.combine,mapUv:de&&x(_.map.channel),aoMapUv:V&&x(_.aoMap.channel),lightMapUv:Ve&&x(_.lightMap.channel),bumpMapUv:ze&&x(_.bumpMap.channel),normalMapUv:Be&&x(_.normalMap.channel),displacementMapUv:Ie&&x(_.displacementMap.channel),emissiveMapUv:qe&&x(_.emissiveMap.channel),metalnessMapUv:Fe&&x(_.metalnessMap.channel),roughnessMapUv:D&&x(_.roughnessMap.channel),anisotropyMapUv:Le&&x(_.anisotropyMap.channel),clearcoatMapUv:Ne&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ke&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:se&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:ne&&x(_.sheenRoughnessMap.channel),specularMapUv:Me&&x(_.specularMap.channel),specularColorMapUv:fe&&x(_.specularColorMap.channel),specularIntensityMapUv:ge&&x(_.specularIntensityMap.channel),transmissionMapUv:W&&x(_.transmissionMap.channel),thicknessMapUv:Te&&x(_.thicknessMap.channel),alphaMapUv:N&&x(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Be||A),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!F.attributes.uv&&(de||N),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:B,skinning:H.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:ye,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pe,decodeVideoTexture:de&&_.map.isVideoTexture===!0&&pt.getTransfer(_.map.colorSpace)===Et,decodeVideoTextureEmissive:qe&&_.emissiveMap.isVideoTexture===!0&&pt.getTransfer(_.emissiveMap.colorSpace)===Et,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pt,flipSided:_.side===Qt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ae&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&_.extensions.multiDraw===!0||$)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function p(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)E.push(R),E.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(S(E,_),M(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function S(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function M(_,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),_.push(a.mask)}function y(_){let E=g[_.type],R;if(E){let U=Ei[E];R=En.clone(U.uniforms)}else R=_.uniforms;return R}function T(_,E){let R;for(let U=0,H=u.length;U<H;U++){let P=u[U];if(P.cacheKey===E){R=P,++R.usedTimes;break}}return R===void 0&&(R=new cM(n,E,_,r),u.push(R)),R}function b(_){if(--_.usedTimes===0){let E=u.indexOf(_);u[E]=u[u.length-1],u.pop(),_.destroy()}}function v(_){l.remove(_)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:b,releaseShaderCache:v,programs:u,dispose:w}}function fM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function dM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function fp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function dp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,g,x,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,f,d,g,x,m){let p=o(h,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,x,m){let p=o(h,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||dM),i.length>1&&i.sort(f||fp),s.length>1&&s.sort(f||fp)}function u(){for(let h=e,f=n.length;h<f;h++){let d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function pM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new dp,n.set(i,[o])):s>=r.length?(o=new dp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function mM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Re};break;case"SpotLight":t={position:new k,direction:new k,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function gM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var xM=0;function vM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function yM(n){let e=new mM,t=gM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let s=new k,r=new je,o=new je;function a(c){let u=0,h=0,f=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,S=0,M=0,y=0,T=0,b=0,v=0;c.sort(vM);for(let _=0,E=c.length;_<E;_++){let R=c[_],U=R.color,H=R.intensity,P=R.distance,F=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=U.r*H,h+=U.g*H,f+=U.b*H;else if(R.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(R.sh.coefficients[O],H);v++}else if(R.isDirectionalLight){let O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Y=R.shadow,G=t.get(R);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=F,i.directionalShadowMatrix[d]=R.shadow.matrix,S++}i.directional[d]=O,d++}else if(R.isSpotLight){let O=e.get(R);O.position.setFromMatrixPosition(R.matrixWorld),O.color.copy(U).multiplyScalar(H),O.distance=P,O.coneCos=Math.cos(R.angle),O.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),O.decay=R.decay,i.spot[x]=O;let Y=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,Y.updateMatrices(R),R.castShadow&&b++),i.spotLightMatrix[x]=Y.matrix,R.castShadow){let G=t.get(R);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=F,y++}x++}else if(R.isRectAreaLight){let O=e.get(R);O.color.copy(U).multiplyScalar(H),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=O,m++}else if(R.isPointLight){let O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),O.distance=R.distance,O.decay=R.decay,R.castShadow){let Y=R.shadow,G=t.get(R);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=R.shadow.matrix,M++}i.point[g]=O,g++}else if(R.isHemisphereLight){let O=e.get(R);O.skyColor.copy(R.color).multiplyScalar(H),O.groundColor.copy(R.groundColor).multiplyScalar(H),i.hemi[p]=O,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=We.LTC_FLOAT_1,i.rectAreaLTC2=We.LTC_FLOAT_2):(i.rectAreaLTC1=We.LTC_HALF_1,i.rectAreaLTC2=We.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let w=i.hash;(w.directionalLength!==d||w.pointLength!==g||w.spotLength!==x||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==S||w.numPointShadows!==M||w.numSpotShadows!==y||w.numSpotMaps!==T||w.numLightProbes!==v)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=v,w.directionalLength=d,w.pointLength=g,w.spotLength=x,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=S,w.numPointShadows=M,w.numSpotShadows=y,w.numSpotMaps=T,w.numLightProbes=v,i.version=xM++)}function l(c,u){let h=0,f=0,d=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let M=c[p];if(M.isDirectionalLight){let y=i.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(M.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(M.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function pp(n){let e=new yM(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function _M(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new pp(n),e.set(s,[a])):r>=o.length?(a=new pp(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var rh=class extends bn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=dx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oh=class extends bn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},MM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bM=`uniform sampler2D shadow_pass;
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
}`;function SM(n,e,t){let i=new $o,s=new $e,r=new $e,o=new _t,a=new rh({depthPacking:px}),l=new oh,c={},u=t.maxTextureSize,h={[wi]:Qt,[Qt]:wi,[Pt]:Pt},f=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:MM,fragmentShader:bM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new gt;g.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ot(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ll;let p=this.type;this.render=function(b,v,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let _=n.getRenderTarget(),E=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),U=n.state;U.setBlending(tn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=p!==Gi&&this.type===Gi,P=p===Gi&&this.type!==Gi;for(let F=0,O=b.length;F<O;F++){let Y=b[F],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let J=G.getFrameExtents();if(s.multiply(J),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,G.mapSize.y=r.y)),G.map===null||H===!0||P===!0){let me=this.type!==Gi?{minFilter:Kt,magFilter:Kt}:{};G.map!==null&&G.map.dispose(),G.map=new qt(s.x,s.y,me),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();let re=G.getViewportCount();for(let me=0;me<re;me++){let ye=G.getViewport(me);o.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),U.viewport(o),G.updateMatrices(Y,me),i=G.getFrustum(),y(v,w,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===Gi&&S(G,w),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(_,E,R)};function S(b,v){let w=e.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new qt(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(v,null,w,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(v,null,w,d,x,null)}function M(b,v,w,_){let E=null,R=w.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)E=R;else if(E=w.isPointLight===!0?l:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){let U=E.uuid,H=v.uuid,P=c[U];P===void 0&&(P={},c[U]=P);let F=P[H];F===void 0&&(F=E.clone(),P[H]=F,v.addEventListener("dispose",T)),E=F}if(E.visible=v.visible,E.wireframe=v.wireframe,_===Gi?E.side=v.shadowSide!==null?v.shadowSide:v.side:E.side=v.shadowSide!==null?v.shadowSide:h[v.side],E.alphaMap=v.alphaMap,E.alphaTest=v.alphaTest,E.map=v.map,E.clipShadows=v.clipShadows,E.clippingPlanes=v.clippingPlanes,E.clipIntersection=v.clipIntersection,E.displacementMap=v.displacementMap,E.displacementScale=v.displacementScale,E.displacementBias=v.displacementBias,E.wireframeLinewidth=v.wireframeLinewidth,E.linewidth=v.linewidth,w.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let U=n.properties.get(E);U.light=w}return E}function y(b,v,w,_,E){if(b.visible===!1)return;if(b.layers.test(v.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Gi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,b.matrixWorld);let H=e.update(b),P=b.material;if(Array.isArray(P)){let F=H.groups;for(let O=0,Y=F.length;O<Y;O++){let G=F[O],J=P[G.materialIndex];if(J&&J.visible){let re=M(b,J,_,E);b.onBeforeShadow(n,b,v,w,H,re,G),n.renderBufferDirect(w,null,H,re,b,G),b.onAfterShadow(n,b,v,w,H,re,G)}}}else if(P.visible){let F=M(b,P,_,E);b.onBeforeShadow(n,b,v,w,H,F,null),n.renderBufferDirect(w,null,H,F,b,null),b.onAfterShadow(n,b,v,w,H,F,null)}}let U=b.children;for(let H=0,P=U.length;H<P;H++)y(U[H],v,w,_,E)}function T(b){b.target.removeEventListener("dispose",T);for(let w in c){let _=c[w],E=b.target.uuid;E in _&&(_[E].dispose(),delete _[E])}}}var TM={[fu]:du,[pu]:xu,[mu]:vu,[Xr]:gu,[du]:fu,[xu]:pu,[vu]:mu,[gu]:Xr};function EM(n,e){function t(){let W=!1,Te=new _t,C=null,N=new _t(0,0,0,0);return{setMask:function(z){C!==z&&!W&&(n.colorMask(z,z,z,z),C=z)},setLocked:function(z){W=z},setClear:function(z,Z,ae,Pe,He){He===!0&&(z*=Pe,Z*=Pe,ae*=Pe),Te.set(z,Z,ae,Pe),N.equals(Te)===!1&&(n.clearColor(z,Z,ae,Pe),N.copy(Te))},reset:function(){W=!1,C=null,N.set(-1,0,0,0)}}}function i(){let W=!1,Te=!1,C=null,N=null,z=null;return{setReversed:function(Z){if(Te!==Z){let ae=e.get("EXT_clip_control");Te?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT);let Pe=z;z=null,this.setClear(Pe)}Te=Z},getReversed:function(){return Te},setTest:function(Z){Z?L(n.DEPTH_TEST):B(n.DEPTH_TEST)},setMask:function(Z){C!==Z&&!W&&(n.depthMask(Z),C=Z)},setFunc:function(Z){if(Te&&(Z=TM[Z]),N!==Z){switch(Z){case fu:n.depthFunc(n.NEVER);break;case du:n.depthFunc(n.ALWAYS);break;case pu:n.depthFunc(n.LESS);break;case Xr:n.depthFunc(n.LEQUAL);break;case mu:n.depthFunc(n.EQUAL);break;case gu:n.depthFunc(n.GEQUAL);break;case xu:n.depthFunc(n.GREATER);break;case vu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}N=Z}},setLocked:function(Z){W=Z},setClear:function(Z){z!==Z&&(Te&&(Z=1-Z),n.clearDepth(Z),z=Z)},reset:function(){W=!1,C=null,N=null,z=null,Te=!1}}}function s(){let W=!1,Te=null,C=null,N=null,z=null,Z=null,ae=null,Pe=null,He=null;return{setTest:function(Ge){W||(Ge?L(n.STENCIL_TEST):B(n.STENCIL_TEST))},setMask:function(Ge){Te!==Ge&&!W&&(n.stencilMask(Ge),Te=Ge)},setFunc:function(Ge,q,oe){(C!==Ge||N!==q||z!==oe)&&(n.stencilFunc(Ge,q,oe),C=Ge,N=q,z=oe)},setOp:function(Ge,q,oe){(Z!==Ge||ae!==q||Pe!==oe)&&(n.stencilOp(Ge,q,oe),Z=Ge,ae=q,Pe=oe)},setLocked:function(Ge){W=Ge},setClear:function(Ge){He!==Ge&&(n.clearStencil(Ge),He=Ge)},reset:function(){W=!1,Te=null,C=null,N=null,z=null,Z=null,ae=null,Pe=null,He=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,S=null,M=null,y=null,T=null,b=null,v=new Re(0,0,0),w=0,_=!1,E=null,R=null,U=null,H=null,P=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Y=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=Y>=2);let J=null,re={},me=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),ce=new _t().fromArray(me),ie=new _t().fromArray(ye);function Q(W,Te,C,N){let z=new Uint8Array(4),Z=n.createTexture();n.bindTexture(W,Z),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ae=0;ae<C;ae++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,N,0,n.RGBA,n.UNSIGNED_BYTE,z):n.texImage2D(Te+ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,z);return Z}let ee={};ee[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),L(n.DEPTH_TEST),o.setFunc(Xr),ze(!1),Be(gd),L(n.CULL_FACE),V(tn);function L(W){u[W]!==!0&&(n.enable(W),u[W]=!0)}function B(W){u[W]!==!1&&(n.disable(W),u[W]=!1)}function X(W,Te){return h[W]!==Te?(n.bindFramebuffer(W,Te),h[W]=Te,W===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Te),W===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function $(W,Te){let C=d,N=!1;if(W){C=f.get(Te),C===void 0&&(C=[],f.set(Te,C));let z=W.textures;if(C.length!==z.length||C[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,ae=z.length;Z<ae;Z++)C[Z]=n.COLOR_ATTACHMENT0+Z;C.length=z.length,N=!0}}else C[0]!==n.BACK&&(C[0]=n.BACK,N=!0);N&&n.drawBuffers(C)}function de(W){return g!==W?(n.useProgram(W),g=W,!0):!1}let we={[Fn]:n.FUNC_ADD,[Zg]:n.FUNC_SUBTRACT,[Kg]:n.FUNC_REVERSE_SUBTRACT};we[jg]=n.MIN,we[Jg]=n.MAX;let Ae={[ao]:n.ZERO,[Sh]:n.ONE,[Qg]:n.SRC_COLOR,[hu]:n.SRC_ALPHA,[ix]:n.SRC_ALPHA_SATURATE,[Nl]:n.DST_COLOR,[Dl]:n.DST_ALPHA,[ex]:n.ONE_MINUS_SRC_COLOR,[Wo]:n.ONE_MINUS_SRC_ALPHA,[nx]:n.ONE_MINUS_DST_COLOR,[tx]:n.ONE_MINUS_DST_ALPHA,[sx]:n.CONSTANT_COLOR,[rx]:n.ONE_MINUS_CONSTANT_COLOR,[ox]:n.CONSTANT_ALPHA,[ax]:n.ONE_MINUS_CONSTANT_ALPHA};function V(W,Te,C,N,z,Z,ae,Pe,He,Ge){if(W===tn){x===!0&&(B(n.BLEND),x=!1);return}if(x===!1&&(L(n.BLEND),x=!0),W!==ea){if(W!==m||Ge!==_){if((p!==Fn||y!==Fn)&&(n.blendEquation(n.FUNC_ADD),p=Fn,y=Fn),Ge)switch(W){case kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wr:n.blendFunc(n.ONE,n.ONE);break;case xd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}S=null,M=null,T=null,b=null,v.set(0,0,0),w=0,m=W,_=Ge}return}z=z||Te,Z=Z||C,ae=ae||N,(Te!==p||z!==y)&&(n.blendEquationSeparate(we[Te],we[z]),p=Te,y=z),(C!==S||N!==M||Z!==T||ae!==b)&&(n.blendFuncSeparate(Ae[C],Ae[N],Ae[Z],Ae[ae]),S=C,M=N,T=Z,b=ae),(Pe.equals(v)===!1||He!==w)&&(n.blendColor(Pe.r,Pe.g,Pe.b,He),v.copy(Pe),w=He),m=W,_=!1}function Ve(W,Te){W.side===Pt?B(n.CULL_FACE):L(n.CULL_FACE);let C=W.side===Qt;Te&&(C=!C),ze(C),W.blending===kr&&W.transparent===!1?V(tn):V(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let N=W.stencilWrite;a.setTest(N),N&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),qe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?L(n.SAMPLE_ALPHA_TO_COVERAGE):B(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(W){E!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),E=W)}function Be(W){W!==qg?(L(n.CULL_FACE),W!==R&&(W===gd?n.cullFace(n.BACK):W===Yg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):B(n.CULL_FACE),R=W}function Ie(W){W!==U&&(O&&n.lineWidth(W),U=W)}function qe(W,Te,C){W?(L(n.POLYGON_OFFSET_FILL),(H!==Te||P!==C)&&(n.polygonOffset(Te,C),H=Te,P=C)):B(n.POLYGON_OFFSET_FILL)}function Fe(W){W?L(n.SCISSOR_TEST):B(n.SCISSOR_TEST)}function D(W){W===void 0&&(W=n.TEXTURE0+F-1),J!==W&&(n.activeTexture(W),J=W)}function A(W,Te,C){C===void 0&&(J===null?C=n.TEXTURE0+F-1:C=J);let N=re[C];N===void 0&&(N={type:void 0,texture:void 0},re[C]=N),(N.type!==W||N.texture!==Te)&&(J!==C&&(n.activeTexture(C),J=C),n.bindTexture(W,Te||ee[W]),N.type=W,N.texture=Te)}function j(){let W=re[J];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function xe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ue(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function se(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(W){ce.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),ce.copy(W))}function ne(W){ie.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),ie.copy(W))}function Me(W,Te){let C=c.get(Te);C===void 0&&(C=new WeakMap,c.set(Te,C));let N=C.get(W);N===void 0&&(N=n.getUniformBlockIndex(Te,W.name),C.set(W,N))}function fe(W,Te){let N=c.get(Te).get(W);l.get(Te)!==N&&(n.uniformBlockBinding(Te,N,W.__bindingPointIndex),l.set(Te,N))}function ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},J=null,re={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,S=null,M=null,y=null,T=null,b=null,v=new Re(0,0,0),w=0,_=!1,E=null,R=null,U=null,H=null,P=null,ce.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:L,disable:B,bindFramebuffer:X,drawBuffers:$,useProgram:de,setBlending:V,setMaterial:Ve,setFlipSided:ze,setCullFace:Be,setLineWidth:Ie,setPolygonOffset:qe,setScissorTest:Fe,activeTexture:D,bindTexture:A,unbindTexture:j,compressedTexImage2D:xe,compressedTexImage3D:_e,texImage2D:Ue,texImage3D:se,updateUBOMapping:Me,uniformBlockBinding:fe,texStorage2D:ke,texStorage3D:Ee,texSubImage2D:he,texSubImage3D:Ce,compressedTexSubImage2D:Le,compressedTexSubImage3D:Ne,scissor:be,viewport:ne,reset:ge}}function mp(n,e,t,i){let s=wM(i);switch(t){case Hp:return n*e;case Gp:return n*e;case Wp:return n*e*2;case Nh:return n*e/s.components*s.byteLength;case Uh:return n*e/s.components*s.byteLength;case Xp:return n*e*2/s.components*s.byteLength;case Fh:return n*e*2/s.components*s.byteLength;case Vp:return n*e*3/s.components*s.byteLength;case Bn:return n*e*4/s.components*s.byteLength;case Oh:return n*e*4/s.components*s.byteLength;case sl:case rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ol:case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bu:case Tu:return Math.max(n,16)*Math.max(e,8)/4;case Mu:case Su:return Math.max(n,8)*Math.max(e,8)/2;case Eu:case wu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Au:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ru:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Du:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ou:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Bu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ku:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Hu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ll:case Vu:case Gu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case qp:case Wu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xu:case qu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wM(n){switch(n){case xi:case Bp:return{byteLength:1,components:1};case qo:case zp:case un:return{byteLength:2,components:1};case Lh:case Dh:return{byteLength:2,components:4};case Qs:case Ih:case mi:return{byteLength:4,components:1};case kp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function AM(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,A){return d?new OffscreenCanvas(D,A):Yo("canvas")}function x(D,A,j){let xe=1,_e=Fe(D);if((_e.width>j||_e.height>j)&&(xe=j/Math.max(_e.width,_e.height)),xe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let he=Math.floor(xe*_e.width),Ce=Math.floor(xe*_e.height);h===void 0&&(h=g(he,Ce));let Le=A?g(he,Ce):h;return Le.width=he,Le.height=Ce,Le.getContext("2d").drawImage(D,0,0,he,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+Ce+")."),Le}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){n.generateMipmap(D)}function S(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(D,A,j,xe,_e=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let he=A;if(A===n.RED&&(j===n.FLOAT&&(he=n.R32F),j===n.HALF_FLOAT&&(he=n.R16F),j===n.UNSIGNED_BYTE&&(he=n.R8)),A===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(he=n.R8UI),j===n.UNSIGNED_SHORT&&(he=n.R16UI),j===n.UNSIGNED_INT&&(he=n.R32UI),j===n.BYTE&&(he=n.R8I),j===n.SHORT&&(he=n.R16I),j===n.INT&&(he=n.R32I)),A===n.RG&&(j===n.FLOAT&&(he=n.RG32F),j===n.HALF_FLOAT&&(he=n.RG16F),j===n.UNSIGNED_BYTE&&(he=n.RG8)),A===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(he=n.RG8UI),j===n.UNSIGNED_SHORT&&(he=n.RG16UI),j===n.UNSIGNED_INT&&(he=n.RG32UI),j===n.BYTE&&(he=n.RG8I),j===n.SHORT&&(he=n.RG16I),j===n.INT&&(he=n.RG32I)),A===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(he=n.RGB8UI),j===n.UNSIGNED_SHORT&&(he=n.RGB16UI),j===n.UNSIGNED_INT&&(he=n.RGB32UI),j===n.BYTE&&(he=n.RGB8I),j===n.SHORT&&(he=n.RGB16I),j===n.INT&&(he=n.RGB32I)),A===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(he=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(he=n.RGBA16UI),j===n.UNSIGNED_INT&&(he=n.RGBA32UI),j===n.BYTE&&(he=n.RGBA8I),j===n.SHORT&&(he=n.RGBA16I),j===n.INT&&(he=n.RGBA32I)),A===n.RGB&&j===n.UNSIGNED_INT_5_9_9_9_REV&&(he=n.RGB9_E5),A===n.RGBA){let Ce=_e?Bl:pt.getTransfer(xe);j===n.FLOAT&&(he=n.RGBA32F),j===n.HALF_FLOAT&&(he=n.RGBA16F),j===n.UNSIGNED_BYTE&&(he=Ce===Et?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(he=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(he=n.RGB5_A1)}return(he===n.R16F||he===n.R32F||he===n.RG16F||he===n.RG32F||he===n.RGBA16F||he===n.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function y(D,A){let j;return D?A===null||A===Qs||A===vs?j=n.DEPTH24_STENCIL8:A===mi?j=n.DEPTH32F_STENCIL8:A===qo&&(j=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Qs||A===vs?j=n.DEPTH_COMPONENT24:A===mi?j=n.DEPTH_COMPONENT32F:A===qo&&(j=n.DEPTH_COMPONENT16),j}function T(D,A){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Kt&&D.minFilter!==On?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function b(D){let A=D.target;A.removeEventListener("dispose",b),w(A),A.isVideoTexture&&u.delete(A)}function v(D){let A=D.target;A.removeEventListener("dispose",v),E(A)}function w(D){let A=i.get(D);if(A.__webglInit===void 0)return;let j=D.source,xe=f.get(j);if(xe){let _e=xe[A.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&_(D),Object.keys(xe).length===0&&f.delete(j)}i.remove(D)}function _(D){let A=i.get(D);n.deleteTexture(A.__webglTexture);let j=D.source,xe=f.get(j);delete xe[A.__cacheKey],o.memory.textures--}function E(D){let A=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(A.__webglFramebuffer[xe]))for(let _e=0;_e<A.__webglFramebuffer[xe].length;_e++)n.deleteFramebuffer(A.__webglFramebuffer[xe][_e]);else n.deleteFramebuffer(A.__webglFramebuffer[xe]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[xe])}else{if(Array.isArray(A.__webglFramebuffer))for(let xe=0;xe<A.__webglFramebuffer.length;xe++)n.deleteFramebuffer(A.__webglFramebuffer[xe]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let xe=0;xe<A.__webglColorRenderbuffer.length;xe++)A.__webglColorRenderbuffer[xe]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[xe]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let j=D.textures;for(let xe=0,_e=j.length;xe<_e;xe++){let he=i.get(j[xe]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),o.memory.textures--),i.remove(j[xe])}i.remove(D)}let R=0;function U(){R=0}function H(){let D=R;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),R+=1,D}function P(D){let A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function F(D,A){let j=i.get(D);if(D.isVideoTexture&&Ie(D),D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){let xe=D.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(j,D,A);return}}t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+A)}function O(D,A){let j=i.get(D);if(D.version>0&&j.__version!==D.version){ie(j,D,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+A)}function Y(D,A){let j=i.get(D);if(D.version>0&&j.__version!==D.version){ie(j,D,A);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+A)}function G(D,A){let j=i.get(D);if(D.version>0&&j.__version!==D.version){Q(j,D,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+A)}let J={[Pn]:n.REPEAT,[Wi]:n.CLAMP_TO_EDGE,[Xo]:n.MIRRORED_REPEAT},re={[Kt]:n.NEAREST,[Ph]:n.NEAREST_MIPMAP_NEAREST,[Br]:n.NEAREST_MIPMAP_LINEAR,[On]:n.LINEAR,[ko]:n.LINEAR_MIPMAP_NEAREST,[ti]:n.LINEAR_MIPMAP_LINEAR},me={[gx]:n.NEVER,[bx]:n.ALWAYS,[xx]:n.LESS,[$p]:n.LEQUAL,[vx]:n.EQUAL,[Mx]:n.GEQUAL,[yx]:n.GREATER,[_x]:n.NOTEQUAL};function ye(D,A){if(A.type===mi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===On||A.magFilter===ko||A.magFilter===Br||A.magFilter===ti||A.minFilter===On||A.minFilter===ko||A.minFilter===Br||A.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,J[A.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,J[A.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,J[A.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,re[A.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,re[A.minFilter]),A.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,me[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Kt||A.minFilter!==Br&&A.minFilter!==ti||A.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function ce(D,A){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",b));let xe=A.source,_e=f.get(xe);_e===void 0&&(_e={},f.set(xe,_e));let he=P(A);if(he!==D.__cacheKey){_e[he]===void 0&&(_e[he]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),_e[he].usedTimes++;let Ce=_e[D.__cacheKey];Ce!==void 0&&(_e[D.__cacheKey].usedTimes--,Ce.usedTimes===0&&_(A)),D.__cacheKey=he,D.__webglTexture=_e[he].texture}return j}function ie(D,A,j){let xe=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(xe=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(xe=n.TEXTURE_3D);let _e=ce(D,A),he=A.source;t.bindTexture(xe,D.__webglTexture,n.TEXTURE0+j);let Ce=i.get(he);if(he.version!==Ce.__version||_e===!0){t.activeTexture(n.TEXTURE0+j);let Le=pt.getPrimaries(pt.workingColorSpace),Ne=A.colorSpace===ps?null:pt.getPrimaries(A.colorSpace),ke=A.colorSpace===ps||Le===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let Ee=x(A.image,!1,s.maxTextureSize);Ee=qe(A,Ee);let Ue=r.convert(A.format,A.colorSpace),se=r.convert(A.type),be=M(A.internalFormat,Ue,se,A.colorSpace,A.isVideoTexture);ye(xe,A);let ne,Me=A.mipmaps,fe=A.isVideoTexture!==!0,ge=Ce.__version===void 0||_e===!0,W=he.dataReady,Te=T(A,Ee);if(A.isDepthTexture)be=y(A.format===ys,A.type),ge&&(fe?t.texStorage2D(n.TEXTURE_2D,1,be,Ee.width,Ee.height):t.texImage2D(n.TEXTURE_2D,0,be,Ee.width,Ee.height,0,Ue,se,null));else if(A.isDataTexture)if(Me.length>0){fe&&ge&&t.texStorage2D(n.TEXTURE_2D,Te,be,Me[0].width,Me[0].height);for(let C=0,N=Me.length;C<N;C++)ne=Me[C],fe?W&&t.texSubImage2D(n.TEXTURE_2D,C,0,0,ne.width,ne.height,Ue,se,ne.data):t.texImage2D(n.TEXTURE_2D,C,be,ne.width,ne.height,0,Ue,se,ne.data);A.generateMipmaps=!1}else fe?(ge&&t.texStorage2D(n.TEXTURE_2D,Te,be,Ee.width,Ee.height),W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ue,se,Ee.data)):t.texImage2D(n.TEXTURE_2D,0,be,Ee.width,Ee.height,0,Ue,se,Ee.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){fe&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,be,Me[0].width,Me[0].height,Ee.depth);for(let C=0,N=Me.length;C<N;C++)if(ne=Me[C],A.format!==Bn)if(Ue!==null)if(fe){if(W)if(A.layerUpdates.size>0){let z=mp(ne.width,ne.height,A.format,A.type);for(let Z of A.layerUpdates){let ae=ne.data.subarray(Z*z/ne.data.BYTES_PER_ELEMENT,(Z+1)*z/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,C,0,0,Z,ne.width,ne.height,1,Ue,ae)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,C,0,0,0,ne.width,ne.height,Ee.depth,Ue,ne.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,C,be,ne.width,ne.height,Ee.depth,0,ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,C,0,0,0,ne.width,ne.height,Ee.depth,Ue,se,ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,C,be,ne.width,ne.height,Ee.depth,0,Ue,se,ne.data)}else{fe&&ge&&t.texStorage2D(n.TEXTURE_2D,Te,be,Me[0].width,Me[0].height);for(let C=0,N=Me.length;C<N;C++)ne=Me[C],A.format!==Bn?Ue!==null?fe?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,C,0,0,ne.width,ne.height,Ue,ne.data):t.compressedTexImage2D(n.TEXTURE_2D,C,be,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?W&&t.texSubImage2D(n.TEXTURE_2D,C,0,0,ne.width,ne.height,Ue,se,ne.data):t.texImage2D(n.TEXTURE_2D,C,be,ne.width,ne.height,0,Ue,se,ne.data)}else if(A.isDataArrayTexture)if(fe){if(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,be,Ee.width,Ee.height,Ee.depth),W)if(A.layerUpdates.size>0){let C=mp(Ee.width,Ee.height,A.format,A.type);for(let N of A.layerUpdates){let z=Ee.data.subarray(N*C/Ee.data.BYTES_PER_ELEMENT,(N+1)*C/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,N,Ee.width,Ee.height,1,Ue,se,z)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ue,se,Ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,Ee.width,Ee.height,Ee.depth,0,Ue,se,Ee.data);else if(A.isData3DTexture)fe?(ge&&t.texStorage3D(n.TEXTURE_3D,Te,be,Ee.width,Ee.height,Ee.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ue,se,Ee.data)):t.texImage3D(n.TEXTURE_3D,0,be,Ee.width,Ee.height,Ee.depth,0,Ue,se,Ee.data);else if(A.isFramebufferTexture){if(ge)if(fe)t.texStorage2D(n.TEXTURE_2D,Te,be,Ee.width,Ee.height);else{let C=Ee.width,N=Ee.height;for(let z=0;z<Te;z++)t.texImage2D(n.TEXTURE_2D,z,be,C,N,0,Ue,se,null),C>>=1,N>>=1}}else if(Me.length>0){if(fe&&ge){let C=Fe(Me[0]);t.texStorage2D(n.TEXTURE_2D,Te,be,C.width,C.height)}for(let C=0,N=Me.length;C<N;C++)ne=Me[C],fe?W&&t.texSubImage2D(n.TEXTURE_2D,C,0,0,Ue,se,ne):t.texImage2D(n.TEXTURE_2D,C,be,Ue,se,ne);A.generateMipmaps=!1}else if(fe){if(ge){let C=Fe(Ee);t.texStorage2D(n.TEXTURE_2D,Te,be,C.width,C.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,se,Ee)}else t.texImage2D(n.TEXTURE_2D,0,be,Ue,se,Ee);m(A)&&p(xe),Ce.__version=he.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Q(D,A,j){if(A.image.length!==6)return;let xe=ce(D,A),_e=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+j);let he=i.get(_e);if(_e.version!==he.__version||xe===!0){t.activeTexture(n.TEXTURE0+j);let Ce=pt.getPrimaries(pt.workingColorSpace),Le=A.colorSpace===ps?null:pt.getPrimaries(A.colorSpace),Ne=A.colorSpace===ps||Ce===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ke=A.isCompressedTexture||A.image[0].isCompressedTexture,Ee=A.image[0]&&A.image[0].isDataTexture,Ue=[];for(let N=0;N<6;N++)!ke&&!Ee?Ue[N]=x(A.image[N],!0,s.maxCubemapSize):Ue[N]=Ee?A.image[N].image:A.image[N],Ue[N]=qe(A,Ue[N]);let se=Ue[0],be=r.convert(A.format,A.colorSpace),ne=r.convert(A.type),Me=M(A.internalFormat,be,ne,A.colorSpace),fe=A.isVideoTexture!==!0,ge=he.__version===void 0||xe===!0,W=_e.dataReady,Te=T(A,se);ye(n.TEXTURE_CUBE_MAP,A);let C;if(ke){fe&&ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Me,se.width,se.height);for(let N=0;N<6;N++){C=Ue[N].mipmaps;for(let z=0;z<C.length;z++){let Z=C[z];A.format!==Bn?be!==null?fe?W&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,z,0,0,Z.width,Z.height,be,Z.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,z,Me,Z.width,Z.height,0,Z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,z,0,0,Z.width,Z.height,be,ne,Z.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,z,Me,Z.width,Z.height,0,be,ne,Z.data)}}}else{if(C=A.mipmaps,fe&&ge){C.length>0&&Te++;let N=Fe(Ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Me,N.width,N.height)}for(let N=0;N<6;N++)if(Ee){fe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Ue[N].width,Ue[N].height,be,ne,Ue[N].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Me,Ue[N].width,Ue[N].height,0,be,ne,Ue[N].data);for(let z=0;z<C.length;z++){let ae=C[z].image[N].image;fe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,z+1,0,0,ae.width,ae.height,be,ne,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,z+1,Me,ae.width,ae.height,0,be,ne,ae.data)}}else{fe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,be,ne,Ue[N]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Me,be,ne,Ue[N]);for(let z=0;z<C.length;z++){let Z=C[z];fe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,z+1,0,0,be,ne,Z.image[N]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,z+1,Me,be,ne,Z.image[N])}}}m(A)&&p(n.TEXTURE_CUBE_MAP),he.__version=_e.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ee(D,A,j,xe,_e,he){let Ce=r.convert(j.format,j.colorSpace),Le=r.convert(j.type),Ne=M(j.internalFormat,Ce,Le,j.colorSpace),ke=i.get(A),Ee=i.get(j);if(Ee.__renderTarget=A,!ke.__hasExternalTextures){let Ue=Math.max(1,A.width>>he),se=Math.max(1,A.height>>he);_e===n.TEXTURE_3D||_e===n.TEXTURE_2D_ARRAY?t.texImage3D(_e,he,Ne,Ue,se,A.depth,0,Ce,Le,null):t.texImage2D(_e,he,Ne,Ue,se,0,Ce,Le,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Be(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,_e,Ee.__webglTexture,0,ze(A)):(_e===n.TEXTURE_2D||_e>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,xe,_e,Ee.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function L(D,A,j){if(n.bindRenderbuffer(n.RENDERBUFFER,D),A.depthBuffer){let xe=A.depthTexture,_e=xe&&xe.isDepthTexture?xe.type:null,he=y(A.stencilBuffer,_e),Ce=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=ze(A);Be(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,he,A.width,A.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,he,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,he,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,D)}else{let xe=A.textures;for(let _e=0;_e<xe.length;_e++){let he=xe[_e],Ce=r.convert(he.format,he.colorSpace),Le=r.convert(he.type),Ne=M(he.internalFormat,Ce,Le,he.colorSpace),ke=ze(A);j&&Be(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,Ne,A.width,A.height):Be(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke,Ne,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Ne,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function B(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let xe=i.get(A.depthTexture);xe.__renderTarget=A,(!xe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);let _e=xe.__webglTexture,he=ze(A);if(A.depthTexture.format===Hr)Be(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_e,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_e,0);else if(A.depthTexture.format===ys)Be(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_e,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function X(D){let A=i.get(D),j=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){let xe=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),xe){let _e=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,xe.removeEventListener("dispose",_e)};xe.addEventListener("dispose",_e),A.__depthDisposeCallback=_e}A.__boundDepthTexture=xe}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");B(A.__webglFramebuffer,D)}else if(j){A.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[xe]),A.__webglDepthbuffer[xe]===void 0)A.__webglDepthbuffer[xe]=n.createRenderbuffer(),L(A.__webglDepthbuffer[xe],D,!1);else{let _e=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer[xe];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,he)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),L(A.__webglDepthbuffer,D,!1);else{let xe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,_e)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function $(D,A,j){let xe=i.get(D);A!==void 0&&ee(xe.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&X(D)}function de(D){let A=D.texture,j=i.get(D),xe=i.get(A);D.addEventListener("dispose",v);let _e=D.textures,he=D.isWebGLCubeRenderTarget===!0,Ce=_e.length>1;if(Ce||(xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture()),xe.__version=A.version,o.memory.textures++),he){j.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[Le]=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)j.__webglFramebuffer[Le][Ne]=n.createFramebuffer()}else j.__webglFramebuffer[Le]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let Le=0;Le<A.mipmaps.length;Le++)j.__webglFramebuffer[Le]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let Le=0,Ne=_e.length;Le<Ne;Le++){let ke=i.get(_e[Le]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&Be(D)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Le=0;Le<_e.length;Le++){let Ne=_e[Le];j.__webglColorRenderbuffer[Le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[Le]);let ke=r.convert(Ne.format,Ne.colorSpace),Ee=r.convert(Ne.type),Ue=M(Ne.internalFormat,ke,Ee,Ne.colorSpace,D.isXRRenderTarget===!0),se=ze(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,se,Ue,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,j.__webglColorRenderbuffer[Le])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),L(j.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,xe.__webglTexture),ye(n.TEXTURE_CUBE_MAP,A);for(let Le=0;Le<6;Le++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)ee(j.__webglFramebuffer[Le][Ne],D,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ne);else ee(j.__webglFramebuffer[Le],D,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);m(A)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let Le=0,Ne=_e.length;Le<Ne;Le++){let ke=_e[Le],Ee=i.get(ke);t.bindTexture(n.TEXTURE_2D,Ee.__webglTexture),ye(n.TEXTURE_2D,ke),ee(j.__webglFramebuffer,D,ke,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,0),m(ke)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let Le=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Le=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Le,xe.__webglTexture),ye(Le,A),A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)ee(j.__webglFramebuffer[Ne],D,A,n.COLOR_ATTACHMENT0,Le,Ne);else ee(j.__webglFramebuffer,D,A,n.COLOR_ATTACHMENT0,Le,0);m(A)&&p(Le),t.unbindTexture()}D.depthBuffer&&X(D)}function we(D){let A=D.textures;for(let j=0,xe=A.length;j<xe;j++){let _e=A[j];if(m(_e)){let he=S(D),Ce=i.get(_e).__webglTexture;t.bindTexture(he,Ce),p(he),t.unbindTexture()}}}let Ae=[],V=[];function Ve(D){if(D.samples>0){if(Be(D)===!1){let A=D.textures,j=D.width,xe=D.height,_e=n.COLOR_BUFFER_BIT,he=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(D),Le=A.length>1;if(Le)for(let Ne=0;Ne<A.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ne=0;Ne<A.length;Ne++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=n.STENCIL_BUFFER_BIT)),Le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ne]);let ke=i.get(A[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,j,xe,0,0,j,xe,_e,n.NEAREST),l===!0&&(Ae.length=0,V.length=0,Ae.push(n.COLOR_ATTACHMENT0+Ne),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ae.push(he),V.push(he),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,V)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Le)for(let Ne=0;Ne<A.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ne]);let ke=i.get(A[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let A=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function ze(D){return Math.min(s.maxSamples,D.samples)}function Be(D){let A=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ie(D){let A=o.render.frame;u.get(D)!==A&&(u.set(D,A),D.update())}function qe(D,A){let j=D.colorSpace,xe=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==Tn&&j!==ps&&(pt.getTransfer(j)===Et?(xe!==Bn||_e!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),A}function Fe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=U,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=Y,this.setTextureCube=G,this.rebindTextures=$,this.setupRenderTarget=de,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Be}function RM(n,e){function t(i,s=ps){let r,o=pt.getTransfer(s);if(i===xi)return n.UNSIGNED_BYTE;if(i===Lh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bp)return n.BYTE;if(i===zp)return n.SHORT;if(i===qo)return n.UNSIGNED_SHORT;if(i===Ih)return n.INT;if(i===Qs)return n.UNSIGNED_INT;if(i===mi)return n.FLOAT;if(i===un)return n.HALF_FLOAT;if(i===Hp)return n.ALPHA;if(i===Vp)return n.RGB;if(i===Bn)return n.RGBA;if(i===Gp)return n.LUMINANCE;if(i===Wp)return n.LUMINANCE_ALPHA;if(i===Hr)return n.DEPTH_COMPONENT;if(i===ys)return n.DEPTH_STENCIL;if(i===Nh)return n.RED;if(i===Uh)return n.RED_INTEGER;if(i===Xp)return n.RG;if(i===Fh)return n.RG_INTEGER;if(i===Oh)return n.RGBA_INTEGER;if(i===sl||i===rl||i===ol||i===al)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ol)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ol)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===al)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mu||i===bu||i===Su||i===Tu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Mu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Su)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Eu||i===wu||i===Au)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Eu||i===wu)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Au)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ru||i===Cu||i===Pu||i===Iu||i===Lu||i===Du||i===Nu||i===Uu||i===Fu||i===Ou||i===Bu||i===zu||i===ku||i===Hu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ru)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Iu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Du)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ou)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ku)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ll||i===Vu||i===Gu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ll)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qp||i===Wu||i===Xu||i===qu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ll)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var ah=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ht=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},CM={type:"move"},Go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(CM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ht;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},PM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IM=`
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

}`,lh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new ln,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new vt({vertexShader:PM,fragmentShader:IM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ch=class extends _s{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,x=new lh,m=t.getContextAttributes(),p=null,S=null,M=[],y=[],T=new $e,b=null,v=new Zt;v.viewport=new _t;let w=new Zt;w.viewport=new _t;let _=[v,w],E=new ah,R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let Q=M[ie];return Q===void 0&&(Q=new Go,M[ie]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(ie){let Q=M[ie];return Q===void 0&&(Q=new Go,M[ie]=Q),Q.getGripSpace()},this.getHand=function(ie){let Q=M[ie];return Q===void 0&&(Q=new Go,M[ie]=Q),Q.getHandSpace()};function H(ie){let Q=y.indexOf(ie.inputSource);if(Q===-1)return;let ee=M[Q];ee!==void 0&&(ee.update(ie.inputSource,ie.frame,c||o),ee.dispatchEvent({type:ie.type,data:ie.inputSource}))}function P(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",F);for(let ie=0;ie<M.length;ie++){let Q=y[ie];Q!==null&&(y[ie]=null,M[ie].disconnect(Q))}R=null,U=null,x.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,S=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",P),s.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new qt(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ee=null,L=null;m.depth&&(L=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?ys:Hr,ee=m.stencil?vs:Qs);let B={colorFormat:t.RGBA8,depthFormat:L,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(B),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new qt(f.textureWidth,f.textureHeight,{format:Bn,type:xi,depthTexture:new eo(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F(ie){for(let Q=0;Q<ie.removed.length;Q++){let ee=ie.removed[Q],L=y.indexOf(ee);L>=0&&(y[L]=null,M[L].disconnect(ee))}for(let Q=0;Q<ie.added.length;Q++){let ee=ie.added[Q],L=y.indexOf(ee);if(L===-1){for(let X=0;X<M.length;X++)if(X>=y.length){y.push(ee),L=X;break}else if(y[X]===null){y[X]=ee,L=X;break}if(L===-1)break}let B=M[L];B&&B.connect(ee)}}let O=new k,Y=new k;function G(ie,Q,ee){O.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(ee.matrixWorld);let L=O.distanceTo(Y),B=Q.projectionMatrix.elements,X=ee.projectionMatrix.elements,$=B[14]/(B[10]-1),de=B[14]/(B[10]+1),we=(B[9]+1)/B[5],Ae=(B[9]-1)/B[5],V=(B[8]-1)/B[0],Ve=(X[8]+1)/X[0],ze=$*V,Be=$*Ve,Ie=L/(-V+Ve),qe=Ie*-V;if(Q.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(qe),ie.translateZ(Ie),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),B[10]===-1)ie.projectionMatrix.copy(Q.projectionMatrix),ie.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Fe=$+Ie,D=de+Ie,A=ze-qe,j=Be+(L-qe),xe=we*de/D*Fe,_e=Ae*de/D*Fe;ie.projectionMatrix.makePerspective(A,j,xe,_e,Fe,D),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function J(ie,Q){Q===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(Q.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let Q=ie.near,ee=ie.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(ee=x.depthFar)),E.near=w.near=v.near=Q,E.far=w.far=v.far=ee,(R!==E.near||U!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,U=E.far),v.layers.mask=ie.layers.mask|2,w.layers.mask=ie.layers.mask|4,E.layers.mask=v.layers.mask|w.layers.mask;let L=ie.parent,B=E.cameras;J(E,L);for(let X=0;X<B.length;X++)J(B[X],L);B.length===2?G(E,v,w):E.projectionMatrix.copy(v.projectionMatrix),re(ie,E,L)};function re(ie,Q,ee){ee===null?ie.matrix.copy(Q.matrixWorld):(ie.matrix.copy(ee.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(Q.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(Q.projectionMatrix),ie.projectionMatrixInverse.copy(Q.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Kr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let me=null;function ye(ie,Q){if(u=Q.getViewerPose(c||o),g=Q,u!==null){let ee=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let L=!1;ee.length!==E.cameras.length&&(E.cameras.length=0,L=!0);for(let X=0;X<ee.length;X++){let $=ee[X],de=null;if(d!==null)de=d.getViewport($);else{let Ae=h.getViewSubImage(f,$);de=Ae.viewport,X===0&&(e.setRenderTargetTextures(S,Ae.colorTexture,f.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(S))}let we=_[X];we===void 0&&(we=new Zt,we.layers.enable(X),we.viewport=new _t,_[X]=we),we.matrix.fromArray($.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray($.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(de.x,de.y,de.width,de.height),X===0&&(E.matrix.copy(we.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),L===!0&&E.cameras.push(we)}let B=s.enabledFeatures;if(B&&B.includes("depth-sensing")){let X=h.getDepthInformation(ee[0]);X&&X.isValid&&X.texture&&x.init(e,X,s.renderState)}}for(let ee=0;ee<M.length;ee++){let L=y[ee],B=M[ee];L!==null&&B!==void 0&&B.update(L,Q,c||o)}me&&me(ie,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}let ce=new Qp;ce.setAnimationLoop(ye),this.setAnimationLoop=function(ie){me=ie},this.dispose=function(){}}},Ks=new vi,LM=new je;function DM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Jp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),M=S.envMap,y=S.envMapRotation;M&&(m.envMap.value=M,Ks.copy(y),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),m.envMapRotation.value.setFromMatrix4(LM.makeRotationFromEuler(Ks)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function NM(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){let y=M.program;i.uniformBlockBinding(S,y)}function c(S,M){let y=s[S.id];y===void 0&&(g(S),y=u(S),s[S.id]=y,S.addEventListener("dispose",m));let T=M.program;i.updateUBOMapping(S,T);let b=e.render.frame;r[S.id]!==b&&(f(S),r[S.id]=b)}function u(S){let M=h();S.__bindingPointIndex=M;let y=n.createBuffer(),T=S.__size,b=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let M=s[S.id],y=S.uniforms,T=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let b=0,v=y.length;b<v;b++){let w=Array.isArray(y[b])?y[b]:[y[b]];for(let _=0,E=w.length;_<E;_++){let R=w[_];if(d(R,b,_,T)===!0){let U=R.__offset,H=Array.isArray(R.value)?R.value:[R.value],P=0;for(let F=0;F<H.length;F++){let O=H[F],Y=x(O);typeof O=="number"||typeof O=="boolean"?(R.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,U+P,R.__data)):O.isMatrix3?(R.__data[0]=O.elements[0],R.__data[1]=O.elements[1],R.__data[2]=O.elements[2],R.__data[3]=0,R.__data[4]=O.elements[3],R.__data[5]=O.elements[4],R.__data[6]=O.elements[5],R.__data[7]=0,R.__data[8]=O.elements[6],R.__data[9]=O.elements[7],R.__data[10]=O.elements[8],R.__data[11]=0):(O.toArray(R.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,M,y,T){let b=S.value,v=M+"_"+y;if(T[v]===void 0)return typeof b=="number"||typeof b=="boolean"?T[v]=b:T[v]=b.clone(),!0;{let w=T[v];if(typeof b=="number"||typeof b=="boolean"){if(w!==b)return T[v]=b,!0}else if(w.equals(b)===!1)return w.copy(b),!0}return!1}function g(S){let M=S.uniforms,y=0,T=16;for(let v=0,w=M.length;v<w;v++){let _=Array.isArray(M[v])?M[v]:[M[v]];for(let E=0,R=_.length;E<R;E++){let U=_[E],H=Array.isArray(U.value)?U.value:[U.value];for(let P=0,F=H.length;P<F;P++){let O=H[P],Y=x(O),G=y%T,J=G%Y.boundary,re=G+J;y+=J,re!==0&&T-re<Y.storage&&(y+=T-re),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=Y.storage}}}let b=y%T;return b>0&&(y+=T-b),S.__size=y,S.__cache={},this}function x(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){let M=S.target;M.removeEventListener("dispose",m);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var xl=class{constructor(e={}){let{canvas:t=zx(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,S=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=xs,this.toneMappingExposure=1;let y=this,T=!1,b=0,v=0,w=null,_=-1,E=null,R=new _t,U=new _t,H=null,P=new Re(0),F=0,O=t.width,Y=t.height,G=1,J=null,re=null,me=new _t(0,0,O,Y),ye=new _t(0,0,O,Y),ce=!1,ie=new $o,Q=!1,ee=!1,L=new je,B=new je,X=new k,$=new _t,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Ae(){return w===null?G:1}let V=i;function Ve(I,K){return t.getContext(I,K)}try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",N,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",Z,!1),V===null){let K="webgl2";if(V=Ve(K,I),V===null)throw Ve(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ze,Be,Ie,qe,Fe,D,A,j,xe,_e,he,Ce,Le,Ne,ke,Ee,Ue,se,be,ne,Me,fe,ge,W;function Te(){ze=new K_(V),ze.init(),fe=new RM(V,ze),Be=new W_(V,ze,e,fe),Ie=new EM(V,ze),Be.reverseDepthBuffer&&f&&Ie.buffers.depth.setReversed(!0),qe=new Q_(V),Fe=new fM,D=new AM(V,ze,Ie,Fe,Be,fe,qe),A=new q_(y),j=new Z_(y),xe=new ov(V),ge=new V_(V,xe),_e=new j_(V,xe,qe,ge),he=new t1(V,_e,xe,qe),be=new e1(V,Be,D),Ee=new X_(Fe),Ce=new hM(y,A,j,ze,Be,ge,Ee),Le=new DM(y,Fe),Ne=new pM,ke=new _M(ze),se=new H_(y,A,j,Ie,he,d,l),Ue=new SM(y,he,Be),W=new NM(V,qe,Be,Ie),ne=new G_(V,ze,qe),Me=new J_(V,ze,qe),qe.programs=Ce.programs,y.capabilities=Be,y.extensions=ze,y.properties=Fe,y.renderLists=Ne,y.shadowMap=Ue,y.state=Ie,y.info=qe}Te();let C=new ch(y,V);this.xr=C,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let I=ze.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=ze.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(I){I!==void 0&&(G=I,this.setSize(O,Y,!1))},this.getSize=function(I){return I.set(O,Y)},this.setSize=function(I,K,le=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=I,Y=K,t.width=Math.floor(I*G),t.height=Math.floor(K*G),le===!0&&(t.style.width=I+"px",t.style.height=K+"px"),this.setViewport(0,0,I,K)},this.getDrawingBufferSize=function(I){return I.set(O*G,Y*G).floor()},this.setDrawingBufferSize=function(I,K,le){O=I,Y=K,G=le,t.width=Math.floor(I*le),t.height=Math.floor(K*le),this.setViewport(0,0,I,K)},this.getCurrentViewport=function(I){return I.copy(R)},this.getViewport=function(I){return I.copy(me)},this.setViewport=function(I,K,le,ue){I.isVector4?me.set(I.x,I.y,I.z,I.w):me.set(I,K,le,ue),Ie.viewport(R.copy(me).multiplyScalar(G).round())},this.getScissor=function(I){return I.copy(ye)},this.setScissor=function(I,K,le,ue){I.isVector4?ye.set(I.x,I.y,I.z,I.w):ye.set(I,K,le,ue),Ie.scissor(U.copy(ye).multiplyScalar(G).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(I){Ie.setScissorTest(ce=I)},this.setOpaqueSort=function(I){J=I},this.setTransparentSort=function(I){re=I},this.getClearColor=function(I){return I.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(I=!0,K=!0,le=!0){let ue=0;if(I){let te=!1;if(w!==null){let Oe=w.texture.format;te=Oe===Oh||Oe===Fh||Oe===Uh}if(te){let Oe=w.texture.type,Ye=Oe===xi||Oe===Qs||Oe===qo||Oe===vs||Oe===Lh||Oe===Dh,Qe=se.getClearColor(),et=se.getClearAlpha(),at=Qe.r,ct=Qe.g,tt=Qe.b;Ye?(g[0]=at,g[1]=ct,g[2]=tt,g[3]=et,V.clearBufferuiv(V.COLOR,0,g)):(x[0]=at,x[1]=ct,x[2]=tt,x[3]=et,V.clearBufferiv(V.COLOR,0,x))}else ue|=V.COLOR_BUFFER_BIT}K&&(ue|=V.DEPTH_BUFFER_BIT),le&&(ue|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",N,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),Ne.dispose(),ke.dispose(),Fe.dispose(),A.dispose(),j.dispose(),he.dispose(),ge.dispose(),W.dispose(),Ce.dispose(),C.dispose(),C.removeEventListener("sessionstart",pe),C.removeEventListener("sessionend",ve),Se.stop()};function N(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let I=qe.autoReset,K=Ue.enabled,le=Ue.autoUpdate,ue=Ue.needsUpdate,te=Ue.type;Te(),qe.autoReset=I,Ue.enabled=K,Ue.autoUpdate=le,Ue.needsUpdate=ue,Ue.type=te}function Z(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ae(I){let K=I.target;K.removeEventListener("dispose",ae),Pe(K)}function Pe(I){He(I),Fe.remove(I)}function He(I){let K=Fe.get(I).programs;K!==void 0&&(K.forEach(function(le){Ce.releaseProgram(le)}),I.isShaderMaterial&&Ce.releaseShaderCache(I))}this.renderBufferDirect=function(I,K,le,ue,te,Oe){K===null&&(K=de);let Ye=te.isMesh&&te.matrixWorld.determinant()<0,Qe=Vt(I,K,le,ue,te);Ie.setMaterial(ue,Ye);let et=le.index,at=1;if(ue.wireframe===!0){if(et=_e.getWireframeAttribute(le),et===void 0)return;at=2}let ct=le.drawRange,tt=le.attributes.position,Mt=ct.start*at,Nt=(ct.start+ct.count)*at;Oe!==null&&(Mt=Math.max(Mt,Oe.start*at),Nt=Math.min(Nt,(Oe.start+Oe.count)*at)),et!==null?(Mt=Math.max(Mt,0),Nt=Math.min(Nt,et.count)):tt!=null&&(Mt=Math.max(Mt,0),Nt=Math.min(Nt,tt.count));let Ot=Nt-Mt;if(Ot<0||Ot===1/0)return;ge.setup(te,ue,Qe,le,et);let Un,St=ne;if(et!==null&&(Un=xe.get(et),St=Me,St.setIndex(Un)),te.isMesh)ue.wireframe===!0?(Ie.setLineWidth(ue.wireframeLinewidth*Ae()),St.setMode(V.LINES)):St.setMode(V.TRIANGLES);else if(te.isLine){let nt=ue.linewidth;nt===void 0&&(nt=1),Ie.setLineWidth(nt*Ae()),te.isLineSegments?St.setMode(V.LINES):te.isLineLoop?St.setMode(V.LINE_LOOP):St.setMode(V.LINE_STRIP)}else te.isPoints?St.setMode(V.POINTS):te.isSprite&&St.setMode(V.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)St.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))St.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let nt=te._multiDrawStarts,Fi=te._multiDrawCounts,Tt=te._multiDrawCount,ci=et?xe.get(et).bytesPerElement:1,vr=Fe.get(ue).currentProgram.getUniforms();for(let Gn=0;Gn<Tt;Gn++)vr.setValue(V,"_gl_DrawID",Gn),St.render(nt[Gn]/ci,Fi[Gn])}else if(te.isInstancedMesh)St.renderInstances(Mt,Ot,te.count);else if(le.isInstancedBufferGeometry){let nt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Fi=Math.min(le.instanceCount,nt);St.renderInstances(Mt,Ot,Fi)}else St.render(Mt,Ot)};function Ge(I,K,le){I.transparent===!0&&I.side===Pt&&I.forceSinglePass===!1?(I.side=Qt,I.needsUpdate=!0,wt(I,K,le),I.side=wi,I.needsUpdate=!0,wt(I,K,le),I.side=Pt):wt(I,K,le)}this.compile=function(I,K,le=null){le===null&&(le=I),p=ke.get(le),p.init(K),M.push(p),le.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),I!==le&&I.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),p.setupLights();let ue=new Set;return I.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Oe=te.material;if(Oe)if(Array.isArray(Oe))for(let Ye=0;Ye<Oe.length;Ye++){let Qe=Oe[Ye];Ge(Qe,le,te),ue.add(Qe)}else Ge(Oe,le,te),ue.add(Oe)}),M.pop(),p=null,ue},this.compileAsync=function(I,K,le=null){let ue=this.compile(I,K,le);return new Promise(te=>{function Oe(){if(ue.forEach(function(Ye){Fe.get(Ye).currentProgram.isReady()&&ue.delete(Ye)}),ue.size===0){te(I);return}setTimeout(Oe,10)}ze.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let q=null;function oe(I){q&&q(I)}function pe(){Se.stop()}function ve(){Se.start()}let Se=new Qp;Se.setAnimationLoop(oe),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(I){q=I,C.setAnimationLoop(I),I===null?Se.stop():Se.start()},C.addEventListener("sessionstart",pe),C.addEventListener("sessionend",ve),this.render=function(I,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(K),K=C.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,K,w),p=ke.get(I,M.length),p.init(K),M.push(p),B.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ie.setFromProjectionMatrix(B),ee=this.localClippingEnabled,Q=Ee.init(this.clippingPlanes,ee),m=Ne.get(I,S.length),m.init(),S.push(m),C.enabled===!0&&C.isPresenting===!0){let Oe=y.xr.getDepthSensingMesh();Oe!==null&&De(Oe,K,-1/0,y.sortObjects)}De(I,K,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(J,re),we=C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1,we&&se.addToRenderList(m,I),this.info.render.frame++,Q===!0&&Ee.beginShadows();let le=p.state.shadowsArray;Ue.render(le,I,K),Q===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let ue=m.opaque,te=m.transmissive;if(p.setupLights(),K.isArrayCamera){let Oe=K.cameras;if(te.length>0)for(let Ye=0,Qe=Oe.length;Ye<Qe;Ye++){let et=Oe[Ye];Ke(ue,te,I,et)}we&&se.render(I);for(let Ye=0,Qe=Oe.length;Ye<Qe;Ye++){let et=Oe[Ye];Ze(m,I,et,et.viewport)}}else te.length>0&&Ke(ue,te,I,K),we&&se.render(I),Ze(m,I,K);w!==null&&(D.updateMultisampleRenderTarget(w),D.updateRenderTargetMipmap(w)),I.isScene===!0&&I.onAfterRender(y,I,K),ge.resetDefaultState(),_=-1,E=null,M.pop(),M.length>0?(p=M[M.length-1],Q===!0&&Ee.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function De(I,K,le,ue){if(I.visible===!1)return;if(I.layers.test(K.layers)){if(I.isGroup)le=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(K);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ie.intersectsSprite(I)){ue&&$.setFromMatrixPosition(I.matrixWorld).applyMatrix4(B);let Ye=he.update(I),Qe=I.material;Qe.visible&&m.push(I,Ye,Qe,le,$.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ie.intersectsObject(I))){let Ye=he.update(I),Qe=I.material;if(ue&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),$.copy(I.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),$.copy(Ye.boundingSphere.center)),$.applyMatrix4(I.matrixWorld).applyMatrix4(B)),Array.isArray(Qe)){let et=Ye.groups;for(let at=0,ct=et.length;at<ct;at++){let tt=et[at],Mt=Qe[tt.materialIndex];Mt&&Mt.visible&&m.push(I,Ye,Mt,le,$.z,tt)}}else Qe.visible&&m.push(I,Ye,Qe,le,$.z,null)}}let Oe=I.children;for(let Ye=0,Qe=Oe.length;Ye<Qe;Ye++)De(Oe[Ye],K,le,ue)}function Ze(I,K,le,ue){let te=I.opaque,Oe=I.transmissive,Ye=I.transparent;p.setupLightsView(le),Q===!0&&Ee.setGlobalState(y.clippingPlanes,le),ue&&Ie.viewport(R.copy(ue)),te.length>0&&it(te,K,le),Oe.length>0&&it(Oe,K,le),Ye.length>0&&it(Ye,K,le),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Ke(I,K,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ue.id]===void 0&&(p.state.transmissionRenderTarget[ue.id]=new qt(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?un:xi,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));let Oe=p.state.transmissionRenderTarget[ue.id],Ye=ue.viewport||R;Oe.setSize(Ye.z,Ye.w);let Qe=y.getRenderTarget();y.setRenderTarget(Oe),y.getClearColor(P),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear(),we&&se.render(le);let et=y.toneMapping;y.toneMapping=xs;let at=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),p.setupLightsView(ue),Q===!0&&Ee.setGlobalState(y.clippingPlanes,ue),it(I,le,ue),D.updateMultisampleRenderTarget(Oe),D.updateRenderTargetMipmap(Oe),ze.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let tt=0,Mt=K.length;tt<Mt;tt++){let Nt=K[tt],Ot=Nt.object,Un=Nt.geometry,St=Nt.material,nt=Nt.group;if(St.side===Pt&&Ot.layers.test(ue.layers)){let Fi=St.side;St.side=Qt,St.needsUpdate=!0,rt(Ot,le,ue,Un,St,nt),St.side=Fi,St.needsUpdate=!0,ct=!0}}ct===!0&&(D.updateMultisampleRenderTarget(Oe),D.updateRenderTargetMipmap(Oe))}y.setRenderTarget(Qe),y.setClearColor(P,F),at!==void 0&&(ue.viewport=at),y.toneMapping=et}function it(I,K,le){let ue=K.isScene===!0?K.overrideMaterial:null;for(let te=0,Oe=I.length;te<Oe;te++){let Ye=I[te],Qe=Ye.object,et=Ye.geometry,at=ue===null?Ye.material:ue,ct=Ye.group;Qe.layers.test(le.layers)&&rt(Qe,K,le,et,at,ct)}}function rt(I,K,le,ue,te,Oe){I.onBeforeRender(y,K,le,ue,te,Oe),I.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),te.onBeforeRender(y,K,le,ue,I,Oe),te.transparent===!0&&te.side===Pt&&te.forceSinglePass===!1?(te.side=Qt,te.needsUpdate=!0,y.renderBufferDirect(le,K,ue,te,I,Oe),te.side=wi,te.needsUpdate=!0,y.renderBufferDirect(le,K,ue,te,I,Oe),te.side=Pt):y.renderBufferDirect(le,K,ue,te,I,Oe),I.onAfterRender(y,K,le,ue,te,Oe)}function wt(I,K,le){K.isScene!==!0&&(K=de);let ue=Fe.get(I),te=p.state.lights,Oe=p.state.shadowsArray,Ye=te.state.version,Qe=Ce.getParameters(I,te.state,Oe,K,le),et=Ce.getProgramCacheKey(Qe),at=ue.programs;ue.environment=I.isMeshStandardMaterial?K.environment:null,ue.fog=K.fog,ue.envMap=(I.isMeshStandardMaterial?j:A).get(I.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&I.envMap===null?K.environmentRotation:I.envMapRotation,at===void 0&&(I.addEventListener("dispose",ae),at=new Map,ue.programs=at);let ct=at.get(et);if(ct!==void 0){if(ue.currentProgram===ct&&ue.lightsStateVersion===Ye)return Dt(I,Qe),ct}else Qe.uniforms=Ce.getUniforms(I),I.onBeforeCompile(Qe,y),ct=Ce.acquireProgram(Qe,et),at.set(et,ct),ue.uniforms=Qe.uniforms;let tt=ue.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(tt.clippingPlanes=Ee.uniform),Dt(I,Qe),ue.needsLights=gn(I),ue.lightsStateVersion=Ye,ue.needsLights&&(tt.ambientLightColor.value=te.state.ambient,tt.lightProbe.value=te.state.probe,tt.directionalLights.value=te.state.directional,tt.directionalLightShadows.value=te.state.directionalShadow,tt.spotLights.value=te.state.spot,tt.spotLightShadows.value=te.state.spotShadow,tt.rectAreaLights.value=te.state.rectArea,tt.ltc_1.value=te.state.rectAreaLTC1,tt.ltc_2.value=te.state.rectAreaLTC2,tt.pointLights.value=te.state.point,tt.pointLightShadows.value=te.state.pointShadow,tt.hemisphereLights.value=te.state.hemi,tt.directionalShadowMap.value=te.state.directionalShadowMap,tt.directionalShadowMatrix.value=te.state.directionalShadowMatrix,tt.spotShadowMap.value=te.state.spotShadowMap,tt.spotLightMatrix.value=te.state.spotLightMatrix,tt.spotLightMap.value=te.state.spotLightMap,tt.pointShadowMap.value=te.state.pointShadowMap,tt.pointShadowMatrix.value=te.state.pointShadowMatrix),ue.currentProgram=ct,ue.uniformsList=null,ct}function Ht(I){if(I.uniformsList===null){let K=I.currentProgram.getUniforms();I.uniformsList=Gr.seqWithValue(K.seq,I.uniforms)}return I.uniformsList}function Dt(I,K){let le=Fe.get(I);le.outputColorSpace=K.outputColorSpace,le.batching=K.batching,le.batchingColor=K.batchingColor,le.instancing=K.instancing,le.instancingColor=K.instancingColor,le.instancingMorph=K.instancingMorph,le.skinning=K.skinning,le.morphTargets=K.morphTargets,le.morphNormals=K.morphNormals,le.morphColors=K.morphColors,le.morphTargetsCount=K.morphTargetsCount,le.numClippingPlanes=K.numClippingPlanes,le.numIntersection=K.numClipIntersection,le.vertexAlphas=K.vertexAlphas,le.vertexTangents=K.vertexTangents,le.toneMapping=K.toneMapping}function Vt(I,K,le,ue,te){K.isScene!==!0&&(K=de),D.resetTextureUnits();let Oe=K.fog,Ye=ue.isMeshStandardMaterial?K.environment:null,Qe=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Tn,et=(ue.isMeshStandardMaterial?j:A).get(ue.envMap||Ye),at=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ct=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),tt=!!le.morphAttributes.position,Mt=!!le.morphAttributes.normal,Nt=!!le.morphAttributes.color,Ot=xs;ue.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ot=y.toneMapping);let Un=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,St=Un!==void 0?Un.length:0,nt=Fe.get(ue),Fi=p.state.lights;if(Q===!0&&(ee===!0||I!==E)){let Qn=I===E&&ue.id===_;Ee.setState(ue,I,Qn)}let Tt=!1;ue.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Fi.state.version||nt.outputColorSpace!==Qe||te.isBatchedMesh&&nt.batching===!1||!te.isBatchedMesh&&nt.batching===!0||te.isBatchedMesh&&nt.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&nt.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&nt.instancing===!1||!te.isInstancedMesh&&nt.instancing===!0||te.isSkinnedMesh&&nt.skinning===!1||!te.isSkinnedMesh&&nt.skinning===!0||te.isInstancedMesh&&nt.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&nt.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&nt.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&nt.instancingMorph===!1&&te.morphTexture!==null||nt.envMap!==et||ue.fog===!0&&nt.fog!==Oe||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ee.numPlanes||nt.numIntersection!==Ee.numIntersection)||nt.vertexAlphas!==at||nt.vertexTangents!==ct||nt.morphTargets!==tt||nt.morphNormals!==Mt||nt.morphColors!==Nt||nt.toneMapping!==Ot||nt.morphTargetsCount!==St)&&(Tt=!0):(Tt=!0,nt.__version=ue.version);let ci=nt.currentProgram;Tt===!0&&(ci=wt(ue,K,te));let vr=!1,Gn=!1,Eo=!1,Bt=ci.getUniforms(),Ti=nt.uniforms;if(Ie.useProgram(ci.program)&&(vr=!0,Gn=!0,Eo=!0),ue.id!==_&&(_=ue.id,Gn=!0),vr||E!==I){Ie.buffers.depth.getReversed()?(L.copy(I.projectionMatrix),Hx(L),Vx(L),Bt.setValue(V,"projectionMatrix",L)):Bt.setValue(V,"projectionMatrix",I.projectionMatrix),Bt.setValue(V,"viewMatrix",I.matrixWorldInverse);let os=Bt.map.cameraPosition;os!==void 0&&os.setValue(V,X.setFromMatrixPosition(I.matrixWorld)),Be.logarithmicDepthBuffer&&Bt.setValue(V,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Bt.setValue(V,"isOrthographic",I.isOrthographicCamera===!0),E!==I&&(E=I,Gn=!0,Eo=!0)}if(te.isSkinnedMesh){Bt.setOptional(V,te,"bindMatrix"),Bt.setOptional(V,te,"bindMatrixInverse");let Qn=te.skeleton;Qn&&(Qn.boneTexture===null&&Qn.computeBoneTexture(),Bt.setValue(V,"boneTexture",Qn.boneTexture,D))}te.isBatchedMesh&&(Bt.setOptional(V,te,"batchingTexture"),Bt.setValue(V,"batchingTexture",te._matricesTexture,D),Bt.setOptional(V,te,"batchingIdTexture"),Bt.setValue(V,"batchingIdTexture",te._indirectTexture,D),Bt.setOptional(V,te,"batchingColorTexture"),te._colorsTexture!==null&&Bt.setValue(V,"batchingColorTexture",te._colorsTexture,D));let wo=le.morphAttributes;if((wo.position!==void 0||wo.normal!==void 0||wo.color!==void 0)&&be.update(te,le,ci),(Gn||nt.receiveShadow!==te.receiveShadow)&&(nt.receiveShadow=te.receiveShadow,Bt.setValue(V,"receiveShadow",te.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Ti.envMap.value=et,Ti.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&K.environment!==null&&(Ti.envMapIntensity.value=K.environmentIntensity),Gn&&(Bt.setValue(V,"toneMappingExposure",y.toneMappingExposure),nt.needsLights&&Xt(Ti,Eo),Oe&&ue.fog===!0&&Le.refreshFogUniforms(Ti,Oe),Le.refreshMaterialUniforms(Ti,ue,G,Y,p.state.transmissionRenderTarget[I.id]),Gr.upload(V,Ht(nt),Ti,D)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Gr.upload(V,Ht(nt),Ti,D),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Bt.setValue(V,"center",te.center),Bt.setValue(V,"modelViewMatrix",te.modelViewMatrix),Bt.setValue(V,"normalMatrix",te.normalMatrix),Bt.setValue(V,"modelMatrix",te.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){let Qn=ue.uniformsGroups;for(let os=0,as=Qn.length;os<as;os++){let md=Qn[os];W.update(md,ci),W.bind(md,ci)}}return ci}function Xt(I,K){I.ambientLightColor.needsUpdate=K,I.lightProbe.needsUpdate=K,I.directionalLights.needsUpdate=K,I.directionalLightShadows.needsUpdate=K,I.pointLights.needsUpdate=K,I.pointLightShadows.needsUpdate=K,I.spotLights.needsUpdate=K,I.spotLightShadows.needsUpdate=K,I.rectAreaLights.needsUpdate=K,I.hemisphereLights.needsUpdate=K}function gn(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(I,K,le){Fe.get(I.texture).__webglTexture=K,Fe.get(I.depthTexture).__webglTexture=le;let ue=Fe.get(I);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=le===void 0,ue.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,K){let le=Fe.get(I);le.__webglFramebuffer=K,le.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(I,K=0,le=0){w=I,b=K,v=le;let ue=!0,te=null,Oe=!1,Ye=!1;if(I){let et=Fe.get(I);if(et.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(V.FRAMEBUFFER,null),ue=!1;else if(et.__webglFramebuffer===void 0)D.setupRenderTarget(I);else if(et.__hasExternalTextures)D.rebindTextures(I,Fe.get(I.texture).__webglTexture,Fe.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let tt=I.depthTexture;if(et.__boundDepthTexture!==tt){if(tt!==null&&Fe.has(tt)&&(I.width!==tt.image.width||I.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(I)}}let at=I.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ye=!0);let ct=Fe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ct[K])?te=ct[K][le]:te=ct[K],Oe=!0):I.samples>0&&D.useMultisampledRTT(I)===!1?te=Fe.get(I).__webglMultisampledFramebuffer:Array.isArray(ct)?te=ct[le]:te=ct,R.copy(I.viewport),U.copy(I.scissor),H=I.scissorTest}else R.copy(me).multiplyScalar(G).floor(),U.copy(ye).multiplyScalar(G).floor(),H=ce;if(Ie.bindFramebuffer(V.FRAMEBUFFER,te)&&ue&&Ie.drawBuffers(I,te),Ie.viewport(R),Ie.scissor(U),Ie.setScissorTest(H),Oe){let et=Fe.get(I.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+K,et.__webglTexture,le)}else if(Ye){let et=Fe.get(I.texture),at=K||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,et.__webglTexture,le||0,at)}_=-1},this.readRenderTargetPixels=function(I,K,le,ue,te,Oe,Ye){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=Fe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ye!==void 0&&(Qe=Qe[Ye]),Qe){Ie.bindFramebuffer(V.FRAMEBUFFER,Qe);try{let et=I.texture,at=et.format,ct=et.type;if(!Be.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=I.width-ue&&le>=0&&le<=I.height-te&&V.readPixels(K,le,ue,te,fe.convert(at),fe.convert(ct),Oe)}finally{let et=w!==null?Fe.get(w).__webglFramebuffer:null;Ie.bindFramebuffer(V.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(I,K,le,ue,te,Oe,Ye){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=Fe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ye!==void 0&&(Qe=Qe[Ye]),Qe){let et=I.texture,at=et.format,ct=et.type;if(!Be.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=I.width-ue&&le>=0&&le<=I.height-te){Ie.bindFramebuffer(V.FRAMEBUFFER,Qe);let tt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,tt),V.bufferData(V.PIXEL_PACK_BUFFER,Oe.byteLength,V.STREAM_READ),V.readPixels(K,le,ue,te,fe.convert(at),fe.convert(ct),0);let Mt=w!==null?Fe.get(w).__webglFramebuffer:null;Ie.bindFramebuffer(V.FRAMEBUFFER,Mt);let Nt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await kx(V,Nt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,tt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Oe),V.deleteBuffer(tt),V.deleteSync(Nt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,K=null,le=0){I.isTexture!==!0&&(Bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,I=arguments[1]);let ue=Math.pow(2,-le),te=Math.floor(I.image.width*ue),Oe=Math.floor(I.image.height*ue),Ye=K!==null?K.x:0,Qe=K!==null?K.y:0;D.setTexture2D(I,0),V.copyTexSubImage2D(V.TEXTURE_2D,le,0,0,Ye,Qe,te,Oe),Ie.unbindTexture()},this.copyTextureToTexture=function(I,K,le=null,ue=null,te=0){I.isTexture!==!0&&(Bo("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,I=arguments[1],K=arguments[2],te=arguments[3]||0,le=null);let Oe,Ye,Qe,et,at,ct,tt,Mt,Nt,Ot=I.isCompressedTexture?I.mipmaps[te]:I.image;le!==null?(Oe=le.max.x-le.min.x,Ye=le.max.y-le.min.y,Qe=le.isBox3?le.max.z-le.min.z:1,et=le.min.x,at=le.min.y,ct=le.isBox3?le.min.z:0):(Oe=Ot.width,Ye=Ot.height,Qe=Ot.depth||1,et=0,at=0,ct=0),ue!==null?(tt=ue.x,Mt=ue.y,Nt=ue.z):(tt=0,Mt=0,Nt=0);let Un=fe.convert(K.format),St=fe.convert(K.type),nt;K.isData3DTexture?(D.setTexture3D(K,0),nt=V.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(D.setTexture2DArray(K,0),nt=V.TEXTURE_2D_ARRAY):(D.setTexture2D(K,0),nt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);let Fi=V.getParameter(V.UNPACK_ROW_LENGTH),Tt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ci=V.getParameter(V.UNPACK_SKIP_PIXELS),vr=V.getParameter(V.UNPACK_SKIP_ROWS),Gn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ot.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ot.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,et),V.pixelStorei(V.UNPACK_SKIP_ROWS,at),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ct);let Eo=I.isDataArrayTexture||I.isData3DTexture,Bt=K.isDataArrayTexture||K.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let Ti=Fe.get(I),wo=Fe.get(K),Qn=Fe.get(Ti.__renderTarget),os=Fe.get(wo.__renderTarget);Ie.bindFramebuffer(V.READ_FRAMEBUFFER,Qn.__webglFramebuffer),Ie.bindFramebuffer(V.DRAW_FRAMEBUFFER,os.__webglFramebuffer);for(let as=0;as<Qe;as++)Eo&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Fe.get(I).__webglTexture,te,ct+as),I.isDepthTexture?(Bt&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Fe.get(K).__webglTexture,te,Nt+as),V.blitFramebuffer(et,at,Oe,Ye,tt,Mt,Oe,Ye,V.DEPTH_BUFFER_BIT,V.NEAREST)):Bt?V.copyTexSubImage3D(nt,te,tt,Mt,Nt+as,et,at,Oe,Ye):V.copyTexSubImage2D(nt,te,tt,Mt,Nt+as,et,at,Oe,Ye);Ie.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Bt?I.isDataTexture||I.isData3DTexture?V.texSubImage3D(nt,te,tt,Mt,Nt,Oe,Ye,Qe,Un,St,Ot.data):K.isCompressedArrayTexture?V.compressedTexSubImage3D(nt,te,tt,Mt,Nt,Oe,Ye,Qe,Un,Ot.data):V.texSubImage3D(nt,te,tt,Mt,Nt,Oe,Ye,Qe,Un,St,Ot):I.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,te,tt,Mt,Oe,Ye,Un,St,Ot.data):I.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,te,tt,Mt,Ot.width,Ot.height,Un,Ot.data):V.texSubImage2D(V.TEXTURE_2D,te,tt,Mt,Oe,Ye,Un,St,Ot);V.pixelStorei(V.UNPACK_ROW_LENGTH,Fi),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Tt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ci),V.pixelStorei(V.UNPACK_SKIP_ROWS,vr),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Gn),te===0&&K.generateMipmaps&&V.generateMipmap(nt),Ie.unbindTexture()},this.copyTextureToTexture3D=function(I,K,le=null,ue=null,te=0){return I.isTexture!==!0&&(Bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ue=arguments[1]||null,I=arguments[2],K=arguments[3],te=arguments[4]||0),Bo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,K,le,ue,te)},this.initRenderTarget=function(I){Fe.get(I).__webglFramebuffer===void 0&&D.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?D.setTextureCube(I,0):I.isData3DTexture?D.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?D.setTexture2DArray(I,0):D.setTexture2D(I,0),Ie.unbindTexture()},this.resetState=function(){b=0,v=0,w=null,Ie.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}},to=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Zo=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},no=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yu,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Rn=new k,er=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ko=class extends bn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dr,Io=new k,Nr=new k,Ur=new k,Fr=new $e,Lo=new $e,sm=new je,$a=new k,Do=new k,Za=new k,gp=new $e,ru=new $e,xp=new $e,vl=class extends Ft{constructor(e=new Ko){if(super(),this.isSprite=!0,this.type="Sprite",Dr===void 0){Dr=new gt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new no(t,5);Dr.setIndex([0,1,2,0,2,3]),Dr.setAttribute("position",new er(i,3,0,!1)),Dr.setAttribute("uv",new er(i,2,3,!1))}this.geometry=Dr,this.material=e,this.center=new $e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Nr.setFromMatrixScale(this.matrixWorld),sm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Nr.multiplyScalar(-Ur.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ka($a.set(-.5,-.5,0),Ur,o,Nr,s,r),Ka(Do.set(.5,-.5,0),Ur,o,Nr,s,r),Ka(Za.set(.5,.5,0),Ur,o,Nr,s,r),gp.set(0,0),ru.set(1,0),xp.set(1,1);let a=e.ray.intersectTriangle($a,Do,Za,!1,Io);if(a===null&&(Ka(Do.set(-.5,.5,0),Ur,o,Nr,s,r),ru.set(0,1),a=e.ray.intersectTriangle($a,Za,Do,!1,Io),a===null))return;let l=e.ray.origin.distanceTo(Io);l<e.near||l>e.far||t.push({distance:l,point:Io.clone(),uv:ms.getInterpolation(Io,$a,Do,Za,gp,ru,xp,new $e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ka(n,e,t,i,s,r){Fr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Lo.x=r*Fr.x-s*Fr.y,Lo.y=s*Fr.x+r*Fr.y):Lo.copy(Fr),n.copy(e),n.x+=Lo.x,n.y+=Lo.y,n.applyMatrix4(sm)}var vp=new k,yp=new _t,_p=new _t,UM=new k,Mp=new je,ja=new k,ou=new qn,bp=new je,au=new jr,yl=class extends ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yd,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ni),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ja),this.boundingBox.expandByPoint(ja)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ja),this.boundingSphere.expandByPoint(ja)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ou.copy(this.boundingSphere),ou.applyMatrix4(s),e.ray.intersectsSphere(ou)!==!1&&(bp.copy(s).invert(),au.copy(e.ray).applyMatrix4(bp),!(this.boundingBox!==null&&au.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,au)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;yp.fromBufferAttribute(s.attributes.skinIndex,e),_p.fromBufferAttribute(s.attributes.skinWeight,e),vp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=_p.getComponent(r);if(o!==0){let a=yp.getComponent(r);Mp.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(UM.copy(vp).applyMatrix4(Mp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},jo=class extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},bs=class extends ln{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Kt,u=Kt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Sp=new je,FM=new je,_l=class n{constructor(e=[],t=[]){this.uuid=gi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new je;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:FM;Sp.multiplyMatrices(a,t[r]),Sp.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new bs(t,e,e,Bn,mi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new jo),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},tr=class extends mt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Or=new je,Tp=new je,Ja=[],Ep=new ni,OM=new je,No=new ot,Uo=new qn,Sn=class extends ot{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new tr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,OM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Or),Ep.copy(e.boundingBox).applyMatrix4(Or),this.boundingBox.union(Ep)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Or),Uo.copy(e.boundingSphere).applyMatrix4(Or),this.boundingSphere.union(Uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(No.geometry=this.geometry,No.material=this.material,No.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(i),e.ray.intersectsSphere(Uo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Or),Tp.multiplyMatrices(i,Or),No.matrixWorld=Tp,No.raycast(e,Ja);for(let o=0,a=Ja.length;o<a;o++){let l=Ja[o];l.instanceId=r,l.object=this,t.push(l)}Ja.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new bs(new Float32Array(s*this.count),s,this.count,Nh,mi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ss=class extends bn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ml=new k,bl=new k,wp=new je,Fo=new jr,Qa=new qn,lu=new k,Ap=new k,io=class extends Ft{constructor(e=new gt,t=new Ss){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ml.fromBufferAttribute(t,s-1),bl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ml.distanceTo(bl);e.setAttribute("lineDistance",new lt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(s),Qa.radius+=r,e.ray.intersectsSphere(Qa)===!1)return;wp.copy(s).invert(),Fo.copy(e.ray).applyMatrix4(wp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=u.getX(x),S=u.getX(x+1),M=el(this,e,Fo,l,p,S);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=el(this,e,Fo,l,x,m);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=el(this,e,Fo,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=el(this,e,Fo,l,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function el(n,e,t,i,s,r){let o=n.geometry.attributes.position;if(Ml.fromBufferAttribute(o,s),bl.fromBufferAttribute(o,r),t.distanceSqToSegment(Ml,bl,lu,Ap)>i)return;lu.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(lu);if(!(l<e.near||l>e.far))return{distance:l,point:Ap.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Rp=new k,Cp=new k,nr=class extends io{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Rp.fromBufferAttribute(t,s),Cp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Rp.distanceTo(Cp);e.setAttribute("lineDistance",new lt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Sl=class extends io{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ir=class extends bn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pp=new je,uh=new jr,tl=new qn,nl=new k,Ts=class extends Ft{constructor(e=new gt,t=new ir){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(s),tl.radius+=r,e.ray.intersectsSphere(tl)===!1)return;Pp.copy(s).invert(),uh.copy(e.ray).applyMatrix4(Pp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);nl.fromBufferAttribute(h,m),Ip(nl,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)nl.fromBufferAttribute(h,g),Ip(nl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ip(n,e,t,i,s,r,o){let a=uh.distanceSqToPoint(n);if(a<t){let l=new k;uh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var yi=class extends ln{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var In=class n extends gt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],g=0,x=[],m=i/2,p=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new lt(h,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(d,2));function S(){let y=new k,T=new k,b=0,v=(t-e)/i;for(let w=0;w<=r;w++){let _=[],E=w/r,R=E*(t-e)+e;for(let U=0;U<=s;U++){let H=U/s,P=H*l+a,F=Math.sin(P),O=Math.cos(P);T.x=R*F,T.y=-E*i+m,T.z=R*O,h.push(T.x,T.y,T.z),y.set(F,v,O).normalize(),f.push(y.x,y.y,y.z),d.push(H,1-E),_.push(g++)}x.push(_)}for(let w=0;w<s;w++)for(let _=0;_<r;_++){let E=x[_][w],R=x[_+1][w],U=x[_+1][w+1],H=x[_][w+1];(e>0||_!==0)&&(u.push(E,R,H),b+=3),(t>0||_!==r-1)&&(u.push(R,U,H),b+=3)}c.addGroup(p,b,0),p+=b}function M(y){let T=g,b=new $e,v=new k,w=0,_=y===!0?e:t,E=y===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,m*E,0),f.push(0,E,0),d.push(.5,.5),g++;let R=g;for(let U=0;U<=s;U++){let P=U/s*l+a,F=Math.cos(P),O=Math.sin(P);v.x=_*O,v.y=m*E,v.z=_*F,h.push(v.x,v.y,v.z),f.push(0,E,0),b.x=F*.5+.5,b.y=O*.5*E+.5,d.push(b.x,b.y),g++}for(let U=0;U<s;U++){let H=T+U,P=R+U;y===!0?u.push(P,P+1,H):u.push(P+1,P,H),w+=3}c.addGroup(p,w,y===!0?1:2),p+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},sr=class n extends In{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hh=class n extends gt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let M=new k,y=new k,T=new k;for(let b=0;b<t.length;b+=3)d(t[b+0],M),d(t[b+1],y),d(t[b+2],T),l(M,y,T,S)}function l(S,M,y,T){let b=T+1,v=[];for(let w=0;w<=b;w++){v[w]=[];let _=S.clone().lerp(y,w/b),E=M.clone().lerp(y,w/b),R=b-w;for(let U=0;U<=R;U++)U===0&&w===b?v[w][U]=_:v[w][U]=_.clone().lerp(E,U/R)}for(let w=0;w<b;w++)for(let _=0;_<2*(b-w)-1;_++){let E=Math.floor(_/2);_%2===0?(f(v[w][E+1]),f(v[w+1][E]),f(v[w][E])):(f(v[w][E+1]),f(v[w+1][E+1]),f(v[w+1][E]))}}function c(S){let M=new k;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(S),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function u(){let S=new k;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];let y=m(S)/2/Math.PI+.5,T=p(S)/Math.PI+.5;o.push(y,1-T)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){let M=o[S+0],y=o[S+2],T=o[S+4],b=Math.max(M,y,T),v=Math.min(M,y,T);b>.9&&v<.1&&(M<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),T<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,M){let y=S*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function g(){let S=new k,M=new k,y=new k,T=new k,b=new $e,v=new $e,w=new $e;for(let _=0,E=0;_<r.length;_+=9,E+=6){S.set(r[_+0],r[_+1],r[_+2]),M.set(r[_+3],r[_+4],r[_+5]),y.set(r[_+6],r[_+7],r[_+8]),b.set(o[E+0],o[E+1]),v.set(o[E+2],o[E+3]),w.set(o[E+4],o[E+5]),T.copy(S).add(M).add(y).divideScalar(3);let R=m(T);x(b,E+0,S,R),x(v,E+2,M,R),x(w,E+4,y,R)}}function x(S,M,y,T){T<0&&S.x===1&&(o[M]=S.x-1),y.x===0&&y.z===0&&(o[M]=T/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var rr=class n extends hh{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Es=class n extends gt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new k,f=new k,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let S=[],M=p/i,y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){let b=T/t;h.x=-e*Math.cos(s+b*r)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(s+b*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(b+y,1-M),S.push(c++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){let M=u[p][S+1],y=u[p][S],T=u[p+1][S],b=u[p+1][S+1];(p!==0||o>0)&&d.push(M,y,b),(p!==i-1||l<Math.PI)&&d.push(y,T,b)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Tl=class extends vt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},st=class extends bn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yn=class extends st{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var El=class extends bn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},ii=class extends bn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function il(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function BM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function zM(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Lp(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function rm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var ws=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fh=class extends ws{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_d,endingEnd:_d}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Md:r=e,a=2*t-i;break;case bd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Md:o=e,l=2*i-t;break;case bd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,S=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,M=(-1-d)*m+(1.5+d)*x+.5*g,y=d*m-d*x;for(let T=0;T!==a;++T)r[T]=p*o[u+T]+S*o[c+T]+M*o[l+T]+y*o[h+T];return r}},dh=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},ph=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},si=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=il(t,this.TimeBufferType),this.values=il(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:il(e.times,Array),values:il(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $r:t=this.InterpolantFactoryMethodDiscrete;break;case Zr:t=this.InterpolantFactoryMethodLinear;break;case Lc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return Zr;case this.InterpolantFactoryMethodSmooth:return Lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&BM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Lc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Zr;var As=class extends si{constructor(e,t,i){super(e,t,i)}};As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=$r;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var wl=class extends si{};wl.prototype.ValueTypeName="color";var Yi=class extends si{};Yi.prototype.ValueTypeName="number";var mh=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)nn.slerpFlat(r,0,o,c-a,o,c,l);return r}},$i=class extends si{InterpolantFactoryMethodLinear(e){return new mh(this.times,this.values,this.getValueSize(),e)}};$i.prototype.ValueTypeName="quaternion";$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Rs=class extends si{constructor(e,t,i){super(e,t,i)}};Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=$r;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends si{};Zi.prototype.ValueTypeName="vector";var Al=class{constructor(e="",t=-1,i=[],s=fx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=gi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(HM(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(si.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=zM(l);l=Lp(l,1,u),c=Lp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Yi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,f,d,g,x){if(d.length!==0){let m=[],p=[];rm(d,m,p,g),m.length!==0&&x.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(let x in d){let m=[],p=[];for(let S=0;S!==f[g].morphTargets.length;++S){let M=f[g];m.push(M.time),p.push(M.morphTarget===x?1:0)}s.push(new Yi(".morphTargetInfluence["+x+"]",m,p))}l=d.length*o}else{let d=".bones["+t[h].name+"]";i(Zi,d+".position",f,"pos",s),i($i,d+".quaternion",f,"rot",s),i(Zi,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function kM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yi;case"vector":case"vector2":case"vector3":case"vector4":return Zi;case"color":return wl;case"quaternion":return $i;case"bool":case"boolean":return As;case"string":return Rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function HM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=kM(n.type);if(n.times===void 0){let t=[],i=[];rm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var gs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},gh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},VM=new gh,Ki=class{constructor(e){this.manager=e!==void 0?e:VM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ki.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vi={},xh=class extends Error{constructor(e,t){super(e),this.response=t}},Jo=class extends Ki{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=gs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Vi[e]!==void 0){Vi[e].push({onLoad:t,onProgress:i,onError:s});return}Vi[e]=[],Vi[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Vi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,m=new ReadableStream({start(p){S();function S(){h.read().then(({done:M,value:y})=>{if(M)p.close();else{x+=y.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let b=0,v=u.length;b<v;b++){let w=u[b];w.onProgress&&w.onProgress(T)}p.enqueue(y),S()}},M=>{p.error(M)})}}});return new Response(m)}else throw new xh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{gs.add(e,c);let u=Vi[e];delete Vi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Vi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Vi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var vh=class extends Ki{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=gs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Yo("img");function l(){u(),gs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Rl=class extends Ki{constructor(e){super(e)}load(e,t,i,s){let r=new ln,o=new vh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},so=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ro=class extends so{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},cu=new je,Dp=new k,Np=new k,Qo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Dp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dp),Np.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Np),t.updateMatrixWorld(),cu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yh=class extends Qo{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Kr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},oo=class extends so{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new yh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Up=new je,Oo=new k,uu=new k,_h=class extends Qo{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Oo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Oo),uu.copy(i.position),uu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(uu),i.updateMatrixWorld(),s.makeTranslation(-Oo.x,-Oo.y,-Oo.z),Up.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Up)}},Cl=class extends so{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new _h}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Mh=class extends Qo{constructor(){super(new Ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ai=class extends so{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Mh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Cs=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Pl=class extends Ki{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=gs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return gs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),gs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});gs.add(e,l),r.manager.itemStart(e)}};var Il=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Fp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Fp(){return performance.now()}var kh="\\[\\]\\.:\\/",GM=new RegExp("["+kh+"]","g"),Hh="[^"+kh+"]",WM="[^"+kh.replace("\\.","")+"]",XM=/((?:WC+[\/:])*)/.source.replace("WC",Hh),qM=/(WCOD+)?/.source.replace("WCOD",WM),YM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hh),$M=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hh),ZM=new RegExp("^"+XM+qM+YM+$M+"$"),KM=["material","materials","bones","map"],bh=class{constructor(e,t,i){let s=i||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ut=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(GM,"")}static parseTrackName(e){let t=ZM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);KM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=bh;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rw=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var ia=class n extends ot{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Zt;let i=this,s=t.color!==void 0?new Re(t.color):new Re(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new di,h=new k,f=new k,d=new k,g=new je,x=new k(0,0,-1),m=new _t,p=new k,S=new k,M=new _t,y=new je,T=this.camera,b=new qt(r,o,{samples:c,type:un}),v=new vt({name:l.name!==void 0?l.name:"unspecified",uniforms:En.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});v.uniforms.tDiffuse.value=b.texture,v.uniforms.color.value=s,v.uniforms.textureMatrix.value=y,this.material=v,this.onBeforeRender=function(w,_,E){if(f.setFromMatrixPosition(i.matrixWorld),d.setFromMatrixPosition(E.matrixWorld),g.extractRotation(i.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(f,d),p.dot(h)>0)return;p.reflect(h).negate(),p.add(f),g.extractRotation(E.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(d),S.subVectors(f,x),S.reflect(h).negate(),S.add(f),T.position.copy(p),T.up.set(0,1,0),T.up.applyMatrix4(g),T.up.reflect(h),T.lookAt(S),T.far=E.far,T.updateMatrixWorld(),T.projectionMatrix.copy(E.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(T.projectionMatrix),y.multiply(T.matrixWorldInverse),y.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(T.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let R=T.projectionMatrix;M.x=(Math.sign(m.x)+R.elements[8])/R.elements[0],M.y=(Math.sign(m.y)+R.elements[9])/R.elements[5],M.z=-1,M.w=(1+R.elements[10])/R.elements[14],m.multiplyScalar(2/m.dot(M)),R.elements[2]=m.x,R.elements[6]=m.y,R.elements[10]=m.z+1-a,R.elements[14]=m.w,i.visible=!1;let U=w.getRenderTarget(),H=w.xr.enabled,P=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(b),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(_,T),w.xr.enabled=H,w.shadowMap.autoUpdate=P,w.setRenderTarget(U);let F=E.viewport;F!==void 0&&w.state.viewport(F),i.visible=!0},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),i.material.dispose()}}};ia.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var kl=[25,18,15,12,10,8,6,4],or={maxSpeed:80,accel:26,brake:30,steerRate:1.7,steerHighSpeed:.75,grip:1,wetGrip:.78,driftBonus:1.6,airControl:.12,airStability:1,landing:1,boostPower:1.22,boostDuration:2.2,boostCharges:3,offroadDrag:1,wallLoss:.25,steerNoise:0,slipstream:1},Ci={sunset:{id:"sunset",name:"Fin d'apr\xE8s-midi",grip:1,wet:0,rain:0,wind:0,sheen:.9,skyTop:8825052,skyHorizon:15785172,fogColor:14074548,fogDensity:52e-5,sunColor:16756316,sunIntensity:4.6,sunDir:[-.5,.21,-.62],hemiSky:12899050,hemiGround:9399366,hemiIntensity:.8,seaColor:2786996,night:!1,bloom:.34},sicily:{id:"sicily",name:"Apr\xE8s-midi sicilien",grip:1,wet:0,rain:0,wind:.1,sheen:.2,skyTop:4885468,skyHorizon:13623792,fogColor:13425124,fogDensity:5e-4,sunColor:16773854,sunIntensity:3.3,sunDir:[-.45,.62,-.4],hemiSky:12375282,hemiGround:8156256,hemiIntensity:.85,seaColor:1994664,night:!1,bloom:.25},rain:{id:"rain",name:"Nuit pluvieuse",grip:.8,wet:1,rain:1,wind:.6,skyTop:329231,skyHorizon:1711933,fogColor:1317427,fogDensity:.0028,sunColor:7375103,sunIntensity:.7,sunDir:[.4,.7,.3],hemiSky:3820170,hemiGround:1052696,hemiIntensity:.75,seaColor:662067,night:!0,bloom:1},fog:{id:"fog",name:"Brume matinale",grip:.92,wet:.35,rain:0,wind:.2,skyTop:10467535,skyHorizon:15262418,fogColor:14277846,fogDensity:.0052,sunColor:16773328,sunIntensity:1.5,sunDir:[.5,.35,.5],hemiSky:13621734,hemiGround:7301722,hemiIntensity:1.1,seaColor:6262687,night:!1,bloom:.35}};function sa(n){let e=String(n),t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t^=t>>>15,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}function kn(n){let e=(typeof n=="number"?n>>>0:sa(n))||1,t=e,i=()=>{e=e+1831565813>>>0;let s=e;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};return{next:i,range:(s,r)=>s+(r-s)*i(),int:(s,r)=>s+Math.floor(i()*(r-s+1)),pick:s=>s[Math.floor(i()*s.length)],chance:s=>i()<s,sign:()=>i()<.5?-1:1,shuffle:s=>{let r=s.slice();for(let o=r.length-1;o>0;o--){let a=Math.floor(i()*(o+1));[r[o],r[a]]=[r[a],r[o]]}return r},fork:s=>kn(sa(t+":"+s))}}var Hl=Math.PI*2,jM=2,om=2800,am=4200,JM=34,lm=8,cm=60,QM=.12,eb=.1,um=28,tb=150,Vh=52,qh=.0025,hm=1/150,nb=10,fm=5,dm=250,pm=38,mm=75,Vl=150,Wh=120,ym=10,ib=80,sb=40,rb=20,ob=30,ab=95,Gh=18,gm=22,lb=60,Xh=(n,e,t)=>n<e?e:n>t?t:n;function cb(n){let e=n.int(10,14),t=n.range(440,520),i=[];for(let s=0;s<e;s++){let r=n.range(-.3,.3)*(Hl/e),o=s/e*Hl+r,a=Xh(t*n.range(.62,1.25),380,620);i.push([a*Math.cos(o),a*Math.sin(o)])}return i}function ub(n,e,t,i,s,r,o,a,l){let c=(x,m,p,S)=>{let M=(l-p)/(S-p);return[x[0]+(m[0]-x[0])*M,x[1]+(m[1]-x[1])*M]},u=c(n,e,s,r),h=c(e,t,r,o),f=c(t,i,o,a),d=c(u,h,s,o),g=c(h,f,r,a);return c(d,g,r,o)}function hb(n,e){let t=n.length,i=[];for(let s=0;s<t;s++){let r=n[(s-1+t)%t],o=n[s],a=n[(s+1)%t],l=n[(s+2)%t],c=0,u=c+Math.sqrt(Math.hypot(o[0]-r[0],o[1]-r[1])),h=u+Math.sqrt(Math.hypot(a[0]-o[0],a[1]-o[1])),f=h+Math.sqrt(Math.hypot(l[0]-a[0],l[1]-a[1]));for(let d=0;d<e;d++){let g=u+(h-u)*(d/e);i.push(ub(r,o,a,l,c,u,h,f,g))}}return i}function fb(n){let e=n.length,t=new Float64Array(e+1);for(let c=0;c<e;c++){let u=n[c],h=n[(c+1)%e];t[c+1]=t[c]+Math.hypot(h[0]-u[0],h[1]-u[1])}let i=t[e],s=Math.max(1,Math.round(i/jM)),r=i/s,o=new Float64Array(s),a=new Float64Array(s),l=0;for(let c=0;c<s;c++){let u=c*r;for(;l<e-1&&t[l+1]<=u;)l++;let h=n[l],f=n[(l+1)%e],d=t[l+1]-t[l],g=d>0?(u-t[l])/d:0;o[c]=h[0]+(f[0]-h[0])*g,a[c]=h[1]+(f[1]-h[1])*g}return{xs:o,zs:a,count:s,step:r}}function xm(n,e){let t=n.length,i=new Float64Array(t),s=2*e+1,r=0;for(let o=-e;o<=e;o++)r+=n[(o+t)%t];for(let o=0;o<t;o++)i[o]=r/s,r+=n[(o+1+e)%t]-n[((o-e)%t+t)%t];return i}function db(n,e,t){let i=n.length,s=new Float64Array(i),r=new Float64Array(i);for(let a=0;a<i;a++){let l=(a-1+i)%i,c=(a+1)%i,u=n[c]-n[l],h=e[c]-e[l],f=Math.hypot(u,h)||1;s[a]=u/f,r[a]=h/f}let o=new Float64Array(i);for(let a=0;a<i;a++){let l=(a-1+i)%i,c=(a+1)%i,u=(s[c]-s[l])/(2*t),h=(r[c]-r[l])/(2*t);o[a]=s[a]*h-r[a]*u}return o}function pb(n,e){let t=n.length;for(let i=0;i<50;i++){let s=!1;for(let r=2*t-1;r>=0;r--){let o=r%t,a=(o+1)%t,l=Math.sqrt(n[a]*n[a]+2*sb*e);n[o]>l+1e-9&&(n[o]=l,s=!0)}for(let r=0;r<2*t;r++){let o=r%t,a=(o+1)%t,l=Math.sqrt(n[o]*n[o]+2*rb*e);n[a]>l+1e-9&&(n[a]=l,s=!0)}if(!s)break}}function vm(n){let e=n.length,t=-1;for(let r=0;r<e;r++)if(n[r]!==n[(r-1+e)%e]){t=r;break}if(t<0)return n[0]!==0?[{start:0,len:e,key:n[0]}]:[];let i=[],s=null;for(let r=0;r<e;r++){let o=(t+r)%e,a=n[o];s&&a===s.key?s.len++:(s&&s.key!==0&&i.push(s),s={start:o,len:1,key:a})}return s&&s.key!==0&&i.push(s),i}function _m(n,e){let t=n.length,i=0;for(let s=0;s<t;s++){let r=n[s].vmax,o=n[(s+1)%t].vmax;i+=e/Math.max(1,.5*(r+o))}return i}function Yh(n,e){let t=n.length,i=0,s=0,r=new Int8Array(t),o=new Int8Array(t);for(let c=0;c<t;c++){let u=n[c].curv,h=Math.abs(u);h>i&&(i=h);let f=Math.abs(n[c].slope);f>s&&(s=f),r[c]=u>hm?1:u<-hm?-1:0,o[c]=h<qh?1:0}let a=0;for(let c of vm(r))c.len*e>=nb&&a++;let l={start:0,len:0};for(let c of vm(o))c.key===1&&c.len>l.len&&(l=c);return{minRadius:i>0?1/i:1/0,maxSlope:s,corners:a,longestStraight:l.len*e,longestStraightStart:l.start}}function mb(n,e){let t=n.length,i=Vh,s=(c,u)=>(c+4096)*8192+(u+4096),r=new Map,o=new Array(t);for(let c=0;c<t;c++){let u=Math.floor(n[c].x/i),h=Math.floor(n[c].z/i);o[c]=[u,h];let f=s(u,h),d=r.get(f);d||(d=[],r.set(f,d)),d.push(c)}let a=0,l=Vh*Vh;for(let c=0;c<t;c++){let[u,h]=o[c];for(let f=-1;f<=1;f++)for(let d=-1;d<=1;d++){let g=r.get(s(u+f,h+d));if(g)for(let x of g){if(x<=c)continue;let m=Math.abs(c-x);if(Math.min(m,t-m)*e<=tb)continue;let S=n[c].x-n[x].x,M=n[c].z-n[x].z;S*S+M*M<l&&a++}}}return a}function gb(n){let e=cb(n),t=hb(e,160),{xs:i,zs:s,count:r,step:o}=fb(t),a=[[8,12],[4,7],[2,4],[1,2]],l=[1,2,4,7].map((v,w)=>({k:v,a:n.range(a[w][0],a[w][1]),p:n.range(0,Hl)})),c=new Float64Array(r),u=new Float64Array(r),h=new Float64Array(r);for(let v=0;v<r;v++){let w=(v-1+r)%r,_=(v+1)%r,E=i[_]-i[w],R=s[_]-s[w];h[v]=Math.hypot(E,R)||1e-9,c[v]=E/h[v],u[v]=R/h[v]}let f=new Float64Array(r),d=new Float64Array(r),g=1;for(let v=0;v<40;v++){for(let _=0;_<r;_++){let E=0;for(let R of l)E+=R.a*g*Math.sin(Hl*R.k*_/r+R.p);f[_]=JM+E}let w=0;for(let _=0;_<r;_++){let E=(_-1+r)%r,R=(_+1)%r;d[_]=(f[R]-f[E])/h[_],Math.abs(d[_])>w&&(w=Math.abs(d[_]))}if(w<=eb)break;g*=.9}let x=new Float64Array(r),m=new Float64Array(r),p=new Float64Array(r);for(let v=0;v<r;v++){let w=(v-1+r)%r,_=(v+1)%r,E=i[_]-i[w],R=f[_]-f[w],U=s[_]-s[w],H=Math.hypot(E,R,U)||1e-9;x[v]=E/H,m[v]=R/H,p[v]=U/H}let S=db(i,s,o),M=xm(S,2),y=new Float64Array(r);for(let v=0;v<r;v++){let w=Xh((Math.abs(M[v])-.016666666666666666)/.023333333333333334,0,1);y[v]=Gh+(gm-Gh)*w}let T=xm(y,10);for(let v=0;v<r;v++)T[v]=Xh(T[v],Gh,gm);let b=new Float64Array(r);for(let v=0;v<r;v++)b[v]=Math.min(ab,Math.sqrt(ob/Math.max(Math.abs(M[v]),1e-9)));return pb(b,o),{xs:i,ys:f,zs:s,count:r,step:o,fx:c,fz:u,tx:x,ty:m,tz:p,slope:d,curv:M,width:T,vmax:b}}function xb(n){let{xs:e,ys:t,zs:i,count:s,step:r,fx:o,fz:a,tx:l,ty:c,tz:u,slope:h,curv:f,width:d,vmax:g}=n,x=[];for(let M=0;M<s;M++)x.push({curv:f[M],slope:h[M],vmax:g[M],x:e[M],z:i[M]});let m=Yh(x,r),p=m.longestStraight>0?(m.longestStraightStart+Math.round(ib/r))%s:0,S=new Array(s);for(let M=0;M<s;M++){let y=(p+M)%s;S[M]={s:M*r,x:e[y],y:t[y],z:i[y],tx:l[y],ty:c[y],tz:u[y],rx:-a[y],rz:o[y],width:d[y],curv:f[y],vmax:g[y],slope:h[y]}}return S}function vb(n,e,t){let i=n.length,s=new Int32Array(i+1);for(let m=0;m<i;m++)s[m+1]=s[m]+(Math.abs(n[m].curv)>=qh?1:0);let r=(m,p)=>s[p+1]-s[m]===0,o=Math.ceil(Vl/e),a=Math.floor((i*e-Vl)/e),l=Math.ceil(ym/e),c=[],u=[],h=(m,p)=>c.every(([S,M])=>p<S||m>M),f=(m,p,S,M)=>{for(let y=0;y<400;y++){let T=Math.round(t.range(m,p)/e),b=Math.ceil(S/e),v=T+b;if(a-v<o)return null;let w=t.int(o,a-v),_=w+T;if(M&&!r(w,_+b))continue;let E=w-l,R=_+b+l;if(!(E<0||R>i-1||!h(E,R)))return c.push([E,R]),{a:w,b:_}}return null},d=t.int(2,3);for(let m=0;m<d;m++){let p=f(12,16,Wh,!0);p&&u.push({type:"ramp",s0:p.a*e,s1:p.b*e,height:t.range(1.2,2.2)})}let g=t.int(2,3);for(let m=0;m<g;m++){let p=f(10,10,0,!1);p&&u.push({type:"boost",s0:p.a*e,s1:p.b*e})}let x=t.int(1,2);for(let m=0;m<x;m++){let p=f(60,140,0,!1);p&&u.push({type:"tunnel",s0:p.a*e,s1:p.b*e})}return u.sort((m,p)=>m.s0-p.s0),u}function yb(n,e,t){let i=gb(n),s=xb(i),{count:r,step:o}=i,a=r*o,l=vb(s,o,n),c=Yh(s,o),u=1/0,h=-1/0,f=1/0,d=-1/0;for(let g of s)g.x<u&&(u=g.x),g.x>h&&(h=g.x),g.z<f&&(f=g.z),g.z>d&&(d=g.z);return{seed:e,attempts:t,length:a,step:o,count:r,pts:s,features:l,bounds:{minX:u,maxX:h,minZ:f,maxZ:d},stats:{minRadius:c.minRadius,maxSlope:c.maxSlope,lapTimeEstimate:_m(s,o),corners:c.corners}}}function _b(n){let e=[],{pts:t,count:i,step:s,length:r}=n;if(!Array.isArray(t)||t.length!==i||!(i>0)||!(s>0))return{ok:!1,reasons:["structure invalide"]};r>=om&&r<=am||e.push(`longueur ${r.toFixed(0)} m hors [${om}, ${am}]`),Math.abs(i*s-r)>1e-6&&e.push("count * step != length");let o=1/0,a=-1/0;for(let p of t)p.y<o&&(o=p.y),p.y>a&&(a=p.y);(o<lm||a>cm)&&e.push(`altitude ${o.toFixed(1)}..${a.toFixed(1)} hors [${lm}, ${cm}]`);let l=Yh(t,s);l.minRadius>=um||e.push(`rayon min ${l.minRadius.toFixed(1)} m < ${um}`),l.maxSlope>QM&&e.push(`pente max ${(l.maxSlope*100).toFixed(1)} % > 12 %`),l.corners<fm&&e.push(`${l.corners} virages < ${fm}`),l.longestStraight<dm&&e.push(`ligne droite max ${l.longestStraight.toFixed(0)} m < ${dm}`);let c=mb(t,s);c>0&&e.push(`${c} paires d'\xE9chantillons trop proches (croisement ou rapprochement)`);let u=_m(t,s);u>=pm&&u<=mm||e.push(`temps au tour ${u.toFixed(1)} s hors [${pm}, ${mm}]`);let h=n.features||[],f=h.filter(p=>p.type==="ramp").length,d=h.filter(p=>p.type==="boost").length,g=h.filter(p=>p.type==="tunnel").length;f<2&&e.push(`${f} tremplin(s) < 2`),d<2&&e.push(`${d} boost(s) < 2`),g<1&&e.push("aucun tunnel");let x=p=>Math.round((p%r+r)%r/s)%i;for(let p of h)if((p.s0<Vl||p.s1>r-Vl)&&e.push(`feature ${p.type} trop proche du d\xE9part`),p.type==="ramp"){let S=p.s1-p.s0;(S<11.5||S>16.5)&&e.push(`tremplin de ${S.toFixed(1)} m hors 12..16`),p.height>=1.2&&p.height<=2.2||e.push("hauteur de tremplin hors 1.2..2.2");let M=x(p.s0),y=x(p.s1+Wh),T=!0;for(let b=M;b!==(y+1)%i;b=(b+1)%i)if(Math.abs(t[b].curv)>=qh){T=!1;break}T||e.push("tremplin non situ\xE9 sur une ligne droite avec r\xE9ception")}let m=h.slice().sort((p,S)=>p.s0-S.s0);for(let p=0;p+1<m.length;p++){let S=m[p],M=m[p+1],y=S.s1+(S.type==="ramp"?Wh:0);M.s0<y+ym-1e-6&&e.push(`features ${S.type} et ${M.type} se chevauchent`)}return{ok:e.length===0,reasons:e}}function Mm(n,e={}){let t=e.maxAttempts??lb,i=kn(n),s=null,r=1/0;for(let o=0;o<t;o++){let a=i.fork("try"+o),l=yb(a,n,o+1),c=_b(l);if(c.ok)return l;c.reasons.length<r&&(r=c.reasons.length,s=l)}return s.attempts=t,s}function $h(n,e){let t=n.length;if(n.open)return e<0?0:Math.min(e,(n.count-1.001)*n.step);let i=e%t;return i<0&&(i+=t),i>=t&&(i-=t),i}var Mb=(n,e)=>{let t=Math.hypot(n,e)||1;return[n/t,e/t]};function Ji(n,e,t={}){let i=n.count,s=n.step,r=$h(n,e),o=r/s,a=Math.floor(o),l=a%i,c=(l+1)%i,u=o-a,h=n.pts[l],f=n.pts[c],d=(y,T)=>y+(T-y)*u,g=d(h.tx,f.tx),x=d(h.ty,f.ty),m=d(h.tz,f.tz),p=Math.hypot(g,x,m)||1,[S,M]=Mb(d(h.rx,f.rx),d(h.rz,f.rz));if(t.s=r,t.x=d(h.x,f.x),t.y=d(h.y,f.y),t.z=d(h.z,f.z),n.open&&e!==r){let y=e-r;t.x+=g/p*y,t.z+=m/p*y}return t.tx=g/p,t.ty=x/p,t.tz=m/p,t.rx=S,t.rz=M,t.width=d(h.width,f.width),t.curv=d(h.curv,f.curv),t.vmax=d(h.vmax,f.vmax),t.slope=d(h.slope,f.slope),t.i=l,t}var ji={};function It(n,e,t,i={}){return Ji(n,e,ji),i.x=ji.x+t*ji.rx,i.y=ji.y,i.z=ji.z+t*ji.rz,i.heading=Math.atan2(ji.tx,ji.tz),i.slope=ji.slope,i}function bm(n,e){let t=$h(n,e);for(let i of n.features)if(i.type==="ramp"&&t>=i.s0&&t<i.s1)return i.height*(t-i.s0)/(i.s1-i.s0);return 0}function Ps(n,e,t){let i=$h(n,e);for(let s of n.features)if((t===void 0||s.type===t)&&i>=s.s0&&i<=s.s1)return s;return null}var Tb=1/30,Sm=.5,Tm=.4,Eb=.6,ra=[.2,.36,.52,.68,.84],Em=ra.length+1,wb=.2,Ab=.1,Rb=.34,Cb=4,Pb=4,Ib=.2,Lb=4.9,Db=5.5,Nb=5,Ub=6,Fb=1.8,Ob=.03,Bb=1.6,zb=.5,kb=2,Hb=.785,Vb=4.7,Gb=2.5,co=.196,Wb=.098,Xb=.5,qb=.27,Yb=16,$b=11,Zb=.72,Kb=5,jb=.5,wm=.35,Jb=.42,Qb=60,eS=.3,tS=5,nS=1.6,iS=3,sS=14,rS=.004,oS=1.2,aS=2,lS=.5,cS=22,Am=.25,uS=6,hS=1.8,Rm=1,fS=["s","d","yaw","vdir","speed","yRel","vy","lean","steer","pitch","compress","drift","boostT","wheelSpin","stun","rpm","wheelie","_g","_vyG","_shiftT","_t","_pitchF","_dive","_turnF","_springA","_springP","_wallT","_apex"],$t=(n,e,t)=>n<e?e:n>t?t:n,Pi=(n,e=0)=>Number.isFinite(n)?n:e,dS=(n,e)=>{let t=n%e;return t<0?t+e:t},pS=(n,e,t)=>n<e?Math.min(e,n+t):Math.max(e,n-t);function Cm({s:n=0,d:e=0}={}){return{s:n,d:e,yaw:0,vdir:0,speed:0,yRel:0,vy:0,airborne:!1,lean:0,steer:0,pitch:0,compress:0,drift:0,boostT:0,boostCharges:or.boostCharges,onRoad:!0,wheelSpin:0,stun:0,gear:1,rpm:0,wheelie:0,events:[],_init:!1,_g:0,_vyG:0,_prevBoost:!1,_padKey:null,_shiftT:0,_wallHit:!1,_t:0,_turnF:0,_pitchF:0,_dive:0,_springA:0,_springP:0,_wallT:0,_apex:0}}function Pm(n,e,t,i,s,r,o){let a=n.events,l=e||{},c=s||{},u=!!l.boost&&!n._prevBoost;if(n._prevBoost=!!l.boost,r=Number.isFinite(r)&&r>0?Math.min(r,Tb):0,n._init||(n._init=!0,n.boostCharges=i.boostCharges),r===0)return n;let h=t.length,f=i.maxSpeed,d=$t(Pi(l.throttle),0,1),g=$t(Pi(l.brake),0,1),x=$t(Pi(l.steer),-1,1),m=n.stun>0;m&&(n.stun=Math.max(0,n.stun-r),d=0,g=0,x=0);let p=ke=>t.open?ke:dS(ke,h),S=p(n.s),M=Ji(t,S),y=!n.airborne;if(u&&!m&&n.boostCharges>0&&n.boostT<=0&&(n.boostCharges-=1,n.boostT=i.boostDuration,a.push("boost")),y){let ke=Ps(t,S,"boost");if(ke){let Ee=Math.floor(n.s/h)+":"+ke.s0;n._padKey!==Ee&&(n._padKey=Ee,n.boostT=Math.max(n.boostT,oS),a.push("pad"))}}g>.5&&n.boostT>0&&(n.boostT=0);let T=n.boostT>0;T&&(d=1);let b=y&&!m&&Math.abs(x)>.3&&n.speed>aS&&(!!l.drift||g>.3),v=n.speed,w=v/f;n._shiftT>0?n._shiftT-=r:n.gear<Em&&w>ra[n.gear-1]&&!(g>0&&v>3)?(n.gear+=1,n._shiftT=wb):n.gear>1&&v<ra[n.gear-2]*f-2&&(n.gear-=1,n._shiftT=Ab);let _=n.gear>1?ra[n.gear-2]:0,E=n.gear<Em?ra[n.gear-1]:1;n.rpm=$t(.35+.65*((w-_)/(E-_)),.1,1.05);let R=y&&Math.abs(n.d)>M.width*.5,U=Eb*f,H=R?U:f*(T?i.boostPower:1),P=Cb/(f*f),F=0;if(y){if(R&&v>U&&(F-=2*i.offroadDrag*(v-U)),d>0&&n._shiftT<=0&&v<H){let ke=Rb*f,Ee=.8+.2*Math.sin(Math.PI*$t(n.rpm,0,1)),Ue=i.accel*d*Ee*Math.min(1,ke/Math.max(v,1));T&&(Ue*=kb),F+=Math.min(Ue,i.accel*1.15*(T?1.3:1))}g>0&&(F-=i.brake*g*(b?.35:1)),F-=v*(.2-.03*(n.gear-1))*(1-d),F-=Ib,F-=Lb*M.slope,F-=P*v*v}else F-=P*Pb*v*v;n.speed=Math.max(0,v+F*r),y&&n.speed>H&&!R&&(n.speed=Math.max(H,n.speed-10*r));let O=$t(n.speed/f,0,1),Y=1+(i.wetGrip-1)*mS(c),G=$t(i.grip*Pi(c.grip,1)*Y,.05,1.5),J=n.speed<.6?0:x,me=Math.abs(J)>Math.abs(n.steer)||J*n.steer<0?Db:Nb*$t(Math.abs(F)/6,1,2.5);n.steer=pS(n.steer,J,me*r);let ye=n.yaw-n.vdir,ce=n.speed*Math.sin(ye),ie=Math.min(Bb,1+Ob*Math.abs(ce));b&&(ie=i.driftBonus),T&&y&&(ie*=zb);let Q=1-(1-i.steerHighSpeed)*O,ee=Math.min(1,n.speed/6),L=y?1:i.airControl,B=n.steer*i.steerRate*Q*ie*ee*L*(.6+.4*Math.min(1,G)),X=Math.min(n.speed/tS,Qb*Math.min(1.2,G)*(b?1.5:1)/Math.max(n.speed,1)),$=$t(B,-X,X);y&&Math.abs(x)<=.15&&(n.yaw*=Math.exp(-nS*r)),o&&i.steerNoise>0&&!m&&y&&(n.yaw+=i.steerNoise*d*(o.next()*2-1)*r);let de=Math.max(.3,1-n.d*M.curv),we=n.speed*Math.cos(n.vdir)/de*r,Ae=n.speed*Math.sin(n.vdir)*r,V=M.curv*we,Ve=n.vdir,ze=V*(y?1-eS:1);if(n.yaw+=$*r-ze,n.vdir-=ze,y){let ke=(b?Fb:Ub)*G,Ee=1-Math.exp(-ke*r);n.vdir+=(n.yaw-n.vdir)*Ee,n.speed*=1-(1-Math.cos(ye))*Ee}else{let ke=3*$t(i.airStability,0,2);n.yaw+=(n.vdir-n.yaw)*(1-Math.exp(-ke*r)),i.airStability<1&&(n.yaw+=(n.yaw>=n.vdir?1:-1)*(1-i.airStability)*.6*r)}n.vdir=$t(Pi(n.vdir),-Sm,Sm),n.yaw=$t(Pi(n.yaw),n.vdir-Tm,n.vdir+Tm),n._t+=r,Ae+=Pi(c.wind)*(1.2*Math.sin(n._t*.37)+.4*Math.sin(n._t*1.13+1))*r*(y?1:.5),n.s+=we,n.d+=Ae;let Be=y?$t((Math.abs(n.yaw-n.vdir)-.04)/.22,0,1)*ee:0;n.drift+=(Be-n.drift)*Math.min(1,8*r);let Ie=Ji(t,p(n.s));n.onRoad=Math.abs(n.d)<=Ie.width*.5;let qe=Ie.width*.5+6-.4;if(Math.abs(n.d)>=qe-.02){let ke=n.d>=0?1:-1,Ee=n.vdir*ke>0,Ue=Ee?Math.abs(Math.sin(n.vdir)):0;if(n.d=ke*qe,Ee&&(n.vdir=-ke*.04,n.yaw=n.yaw*.4-ke*.04),n._wallHit)n.speed*=Math.max(0,1-.8*r);else{let se=n.boostT>0,be=o?o.next():1;se&&n.speed>uS||Ue>lS&&n.speed>cS&&be<Am||n.airborne&&be<Am?(n.speed*=.3,n.stun=hS,a.push("crash")):n.speed*=1-$t(i.wallLoss*1.3*(.5+Ue),0,.9),a.push("wall")}n.boostT=0,n._wallT=wm,n._wallHit=!0}else n._wallHit=!1;n.stun>0&&y&&(n.speed*=Math.exp(-2.2*r)),S=p(n.s);let Fe=Pi(bm(t,S)),D=(Fe-n._g)/r;if(n.airborne||(Fe<n.yRel-.05?(n.airborne=!0,n._apex=n.yRel-Fe,n.vy=n._vyG,n.vy>iS&&a.push("jump")):(n.yRel=Fe,n.vy=$t(D,-80,80),n._vyG=n.vy)),n.airborne&&(n.vy-=26*r,n.yRel+=n.vy*r,n._apex=Math.max(n._apex,n.yRel-Fe),n.vy<=0&&n.yRel<=Fe)){let ke=-n.vy,Ee=Math.abs(n.yaw-n.vdir),Ue=ke>sS/Math.max(.3,i.landing)||Ee>.35;n.airborne=!1,n.yRel=Fe,n.vy=0,n._vyG=0,n._springA=$t(n._springA+.35*n._apex+.03*ke,0,1),n._springP=Math.PI/2;let se=rS*ke+(Ue?.08:0);n.speed*=1-$t(se/Math.max(.2,i.landing),0,.45),a.push(Ue?"hardLand":"land")}n._g=Fe,y=!n.airborne,n.speed=$t(Pi(n.speed),0,1.5*f),n._wallT=Math.max(0,n._wallT-r);let A=Math.max(0,1-n.speed/4,n._wallT/wm),j=y?(V+(n.vdir-Ve))/r:0;n._turnF+=(j-n._turnF)*Math.min(1,6*r);let xe=n.speed*n._turnF,_e=Math.sign(xe)*Math.max(0,Math.abs(xe)-Kb),he=n.steer*Jb*Math.min(1,n.speed/10),Ce=$t((1-A)*(Math.atan(_e/$b)*Zb+jb*(n.yaw-n.vdir)+he),-Rm,Rm);n.stun>0&&(Ce=(n.lean>=0?1:-1)*1.35),n.lean+=(Ce-n.lean)*Math.min(1,9*r),n._dive=g>.1&&y?Math.min(co,n._dive+co*r):Math.max(0,n._dive-.25*r);let Le=$t(F*Wb,-co,co)-n._dive;n._pitchF+=(Le-n._pitchF)*Math.min(1,r/Xb);let Ne=$t(Le-n._pitchF,-co,co);n.wheelie=n.boostT>0&&y?Math.min(Math.PI/2,n.wheelie+Vb*r):Math.max(0,n.wheelie-Gb*r),Ne+=Math.sin(n.wheelie)*Hb,y||(Ne=Math.atan2(n.vy,Math.max(8,n.speed))),n.pitch=Ne,n._springA*=Math.exp(-r/qb),n._springP+=Yb*r,n.compress=Math.sin(n._springP)*n._springA,n.wheelSpin+=n.speed/.32*r,n.boostT=Math.max(0,n.boostT-r);for(let ke of fS)Number.isFinite(n[ke])||(n[ke]=0);return n.speed<0&&(n.speed=0),n}function mS(n){return $t(Pi(n.wet),0,1)}var gS=8,xS=25,vS=150,yS=3,_S=35,MS=2,bS=14,SS=30,TS=12,ES=2,wS={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},hn=(n,e,t)=>n<e?e:n>t?t:n,Gl=(n,e,t)=>n+(e-n)*t,AS=(n,e)=>n-e*Math.round(n/e);function RS(n,e){let t=n.length,i=n.features,s=null,r=1/0;for(let o=0;o<i.length;o++){let a=i[o];if(a.type!=="ramp")continue;let l=((a.s0-e)%t+t)%t;l<r&&(r=l,s=a)}return s?{f:s,dist:r}:null}function CS(n,e){for(let t=0;t<=vS;t+=xS)if(Math.abs(Ji(n,e+t).curv)>.004)return!1;return!0}function Wl(n,e){let t=n||wS,i={persona:t,rng:e,skill:hn(t.skill??.5,0,1),aggression:hn(t.aggression??.5,0,1),jumpSkill:hn(t.jumpSkill??.5,0,1),lineSkill:hn(t.lineSkill??.5,0,1),playerGap:0,dGoal:0,wander:0,wanderGoal:0,wanderT:0,mistakeT:0,mistakeSide:1,nextMistake:0,boostLock:0,input:{throttle:0,brake:0,steer:0,boost:!1,drift:!1}};return i.nextMistake=e.range(8,20)+(1-i.skill)*15,i}function Xl(n,e,t,i,s,r){let o=n.input,a=t.length,l=n.rng,c=n.aggression,u=n.skill,h=n.jumpSkill,f=e.speed,d=e.s,g=Ji(t,d),x=Math.max(.8,g.width*.5-1.2);n.wanderT-=r,n.wanderT<=0&&(n.wanderT=l.range(.9,1.8),n.wanderGoal=l.range(-1,1)*(1-n.lineSkill)*.5*x),n.wander+=(n.wanderGoal-n.wander)*Math.min(1,r*1.5),n.nextMistake-=r,n.mistakeT-=r,n.mistakeT<=0&&n.nextMistake<=0&&(n.mistakeT=l.range(.5,1.2),n.mistakeSide=l.sign(),n.nextMistake=l.range(8,20)+(1-u)*15);let m=n.mistakeT>0;n.boostLock-=r;let p=Gl(1.4,.6,c),S=Math.max(20,f*p),M=Math.max(S,hn(f*1.6+20,40,110)),y=1/0,T=0,b=0,v=0;for(let ee=0;ee<=M;ee+=gS){let L=ee===0?g:Ji(t,d+ee);if(ee<=S&&L.vmax<y&&(y=L.vmax),ee>=8){let B=Math.abs(L.curv);B>T&&(T=B,b=Math.sign(L.curv),v=ee)}}let w=hn(T/.02,0,1),_=0;if(b!==0&&w>0){let ee=hn((v-10)/30,0,1),L=Gl(1,-.8,ee);_=b*x*n.lineSkill*w*L}_+=n.wander,m&&(_+=n.mistakeSide*1.2);let E=RS(t,d),R=E?E.dist:1/0,U=Ps(t,d,"ramp")!==null,H=R<SS;(U||H)&&h>.5&&(_*=1-hn((h-.4)/.6,0,1));let P=!U&&R>=yS&&R<=_S&&h<.5;for(let ee=0;ee<s.length;ee++){let L=s[ee];if(L===e)continue;let B=AS(L.s-d,a);if(B<=0||B>=TS)continue;let X=L.d-e.d;if(!(Math.abs(X)>=ES)){if(c>.55){let $=X!==0?Math.sign(X):e.d<0?1:-1;_+=$*(.6+.8*c)}else{let $=X!==0?-Math.sign(X):e.d<0?1:-1;Math.abs(e.d+$*2)>x&&($=-$),_+=$*2*(1-c)}break}}let F=n.obstacles;if(F){let ee=35+f*1.7,L=null,B=1/0;for(let X=0;X<F.length;X++){let $=F[X],de=$.s-d;de>-$.type.len&&de<ee&&de<B&&Math.abs($.d-_)<$.type.w/2+1.5&&$.speed<f-3&&(L=$,B=de)}if(L){let X=L.type.w/2+2,$=[L.d-X,L.d+X].filter(Ae=>Math.abs(Ae)<=x),de=$.filter(Ae=>!F.some(V=>V!==L&&Math.abs(V.s-L.s)<30&&Math.abs(V.d-Ae)<V.type.w/2+1.2)),we=de.length?de:$;we.length&&(_=we.reduce((Ae,V)=>Math.abs(V-e.d)<Math.abs(Ae-e.d)?V:Ae))}}_=hn(_,-x,x),n.dGoal+=(_-n.dGoal)*Math.min(1,r*(F?4.5:2.5));let O=hn(n.dGoal,-x,x),Y;if(e.airborne)Y=hn(-e.yaw*2,-.3,.3);else{let ee=O-e.d,L=hn(ee*.12,-.25,.25),B=Ji(t,d+hn(f*.25,4,20)).curv,X=i.steerRate*Gl(1,i.steerHighSpeed,hn(f/i.maxSpeed,0,1));Y=(B*f+(L-e.yaw)*3)/X}Y=hn(Y,-1,1),Number.isFinite(Y)||(Y=0);let G=hn(-n.playerGap/150,-1,1)*.06,J=Gl(.86,1,u)+c*.04;m&&(J*=.85);let re=y*J*(1+G),me=i.maxSpeed,ye=!1;if(!e.airborne&&e.boostCharges>0&&e.boostT<=0&&n.boostLock<=0){if(h>.6&&R>=MS&&R<=bS)ye=!0;else if(f>20&&CS(t,d)){let ee=n.playerGap<-20,L=.25+.5*c+(ee?.3:0);ye=l.chance(L)}n.boostLock=ye?1:.4}o.boost=ye;let ce=T<.003;if(e.boostT>0){let ee=me*i.boostPower;re=ce?ee*.98:Math.min(re,ee)}else re=Math.min(re,me);let ie=0,Q=0;if(e.airborne)ie=1;else{let ee=re-f;ee>-1.5?ie=P?0:hn(.5+ee*.25,0,1):Q=hn((-ee-1.5)*.15,0,1)}return o.throttle=ie,o.brake=Q,o.steer=Y,o.drift=!e.airborne&&c>.75&&T>.025&&f>40&&v<20,o}var PS=7,IS=3,LS=.3,DS=3,NS=25,US=1.5,FS=1.2,OS=1.8,Im=.9,BS={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},ql=(n,e,t)=>n<e?e:n>t?t:n,Zh=(n,e)=>n-e*Math.round(n/e);function Kh(){return{throttle:0,brake:0,steer:0,boost:!1,drift:!1}}function Lm({track:n,laps:e,env:t,rng:i,riders:s,final:r=!0,carry:o=null}){let a=n.length,l=n.raceEnd??a,c=e*l,h=s.filter(T=>!T.isPlayer).concat(s.filter(T=>T.isPlayer)).map((T,b)=>{let v=Math.floor(b/2),w=b%2,_=-PS*(v+1),E=w===0?-2.5:2.5,R=o?.states.get(T.id),U=R||Cm({s:_,d:E});return{id:T.id,name:T.name,color:T.color,accent:T.accent,isPlayer:!!T.isPlayer,stats:T.stats,persona:T.persona||null,state:U,remote:!!T.remote,ai:T.isPlayer||T.remote?null:Wl(T.persona||BS,i.fork("ai:"+T.id)),rng:i.fork("rider:"+T.id),others:null,input:Kh(),coast:Kh(),frameEvents:[],startS:R?R.s:_,lap:1,lapTimes:[],bestLap:null,lapStartT:0,finished:!1,finishTime:null,position:b+1}});for(let T of h)T.others=h.filter(b=>b!==T).map(b=>b.state);let f=h.find(T=>T.isPlayer)||null,d=h.slice(),g=h.length,x=new Uint8Array(g*g);function m(T,b,v,w,_){if(v===b)return;let E=Math.floor(b/l),R=Math.min(Math.floor(v/l),e);for(let U=Math.max(E+1,1);U<=R;U++){let H=ql((U*l-b)/(v-b),0,1),P=w+H*_,F=P-T.lapStartT;T.lapTimes.push(F),(T.bestLap===null||F<T.bestLap)&&(T.bestLap=F),T.lapStartT=P}if(r&&v>=c){let U=ql((c-b)/(v-b),0,1);T.finished=!0,T.finishTime=w+U*_}}function p(T){let b=T.state,v=T.coast;return v.throttle=LS,v.brake=0,v.steer=ql(-b.yaw*2-b.d*.05,-.5,.5),v.boost=!1,v.drift=!1,v}function S(T,b){let v=T.state;for(let w=0;w<g;w++){let _=h[w];if(_===T||_.hidden)continue;let E=Zh(_.state.s-v.s,a);if(E>DS&&E<NS&&Math.abs(_.state.d-v.d)<US){v.speed=Math.min(v.speed+FS*T.stats.slipstream*b,T.stats.maxSpeed*1.05);return}}}function M(){for(let T=0;T<g;T++)for(let b=T+1;b<g;b++){let v=h[T],w=h[b];if(v.remote||w.remote)continue;let _=Zh(w.state.s-v.state.s,a),E=w.state.d-v.state.d,R=T*g+b;if(Math.abs(_)<OS&&Math.abs(E)<Im){let U=E!==0?Math.sign(E):i.sign(),H=(Im-Math.abs(E))/2+.05;if(v.state.d-=U*H,w.state.d+=U*H,!x[R]){x[R]=1;let P=(v.state.speed+w.state.speed)/2;v.state.speed+=(P-v.state.speed)*.2,w.state.speed+=(P-w.state.speed)*.2;let F=_>=0?v:w;F.state.speed*=.96}}else x[R]=0}}let y={phase:o?"racing":"countdown",countdown:o?0:IS,time:o?o.time:0,final:r,laps:e,track:n,riders:h,player:f,update(T,b){if(y.phase==="countdown"){y.countdown=Math.max(0,y.countdown-T),y.countdown<=0&&(y.phase="racing");return}let v=y.time;y.time+=T;for(let w=0;w<g;w++){let _=h[w];_.remote||(_.finished?_.input=p(_):_.isPlayer?_.input=b||Kh():(f&&(_.ai.playerGap=Zh(_.state.s-f.state.s,a)),_.input=Xl(_.ai,_.state,n,_.stats,_.others,T)))}for(let w=0;w<g;w++){let _=h[w];if(_.remote){_.lap=1;continue}let E=_.state,R=_.finished,U=E.s;if(Pm(E,_.input,n,_.stats,t,T,_.rng),R||(m(_,U,E.s,v,T),_.finished||S(_,T)),_.lap=_.finished?e:ql(Math.floor(E.s/l)+1,1,e),!_.isPlayer){_.frameEvents.length=0;for(let H=0;H<E.events.length;H++)_.frameEvents.push(E.events[H]);E.events.length=0}}M(),d.sort((w,_)=>w.finished!==_.finished?w.finished?-1:1:w.finished?w.finishTime-_.finishTime:_.state.s-w.state.s);for(let w=0;w<g;w++)d[w].position=w+1;r?(f?f.finished:h.every(w=>w.finished))&&(y.phase="finished"):(f||d[0]).state.s>=l&&(y.phase="relay")},results(){let T=h.map(b=>{let v;if(b.finished)v=b.finishTime;else{let w=Math.max(0,b.state.s-b.startS),_=y.time>1?Math.max(5,w/y.time):40,E=Math.max(0,c-b.state.s);v=y.time+E/_}return{id:b.id,name:b.name,position:b.position,time:v,bestLap:b.bestLap,isPlayer:b.isPlayer}});return T.sort((b,v)=>b.position-v.position),T}};return y}var sf={};Xg(sf,{PLAYER:()=>Ii,RIVALS:()=>$l,UPGRADES:()=>ar,applyUpgrade:()=>Jl,computeStats:()=>Is,createRun:()=>Zl,dailySeed:()=>Ql,isRunOver:()=>oa,loadMeta:()=>ef,offerUpgrades:()=>jl,randomSeed:()=>kS,recordResult:()=>Jh,runRiders:()=>Kl,saveMeta:()=>tf,standings:()=>uo,updateMeta:()=>nf});var Dm="polygon-rush-meta",zS=Object.keys(Ci).filter(n=>n!=="sicily"),Ii={id:"player",name:"Vous",color:14885934,accent:2312392},ar=[{id:"turbo",name:"Turbo instable",tagline:"Acc\xE9l\xE9ration brutale, pilotage nerveux.",pro:"Acc\xE9l\xE9ration \xD71,35 et vitesse de pointe \xD71,04.",con:"Direction bruit\xE9e (+0,35 rad/s) et braquage \xD70,9 \xE0 haute vitesse.",icon:"\u26A1",maxStacks:1,apply(n){n.accel*=1.35,n.maxSpeed*=1.04,n.steerNoise+=.35,n.steerHighSpeed*=.9}},{id:"rally",name:"Suspension rallye",tagline:"Les r\xE9ceptions passent mieux, la vitesse de pointe trinque.",pro:"R\xE9ception \xD71,8 et tra\xEEn\xE9e hors-piste \xD70,6.",con:"Vitesse de pointe \xD70,95.",icon:"\u{1F3D4}",maxStacks:2,apply(n){n.landing*=1.8,n.offroadDrag*=.6,n.maxSpeed*=.95}},{id:"aero",name:"A\xE9rodynamique",tagline:"Plus de vitesse, moins de tenue en l'air.",pro:"Vitesse de pointe \xD71,07.",con:"Stabilit\xE9 en saut \xD70,6 et contr\xF4le a\xE9rien \xD70,7.",icon:"\u{1F4A8}",maxStacks:2,apply(n){n.maxSpeed*=1.07,n.airStability*=.6,n.airControl*=.7}},{id:"rain",name:"Pneus pluie",tagline:"Accroche imbattable sous l'averse, sec moins mordant.",pro:"Adh\xE9rence mouill\xE9e \xD71,35 (\u2248 1,05).",con:"Adh\xE9rence s\xE8che \xD70,95.",icon:"\u{1F327}",maxStacks:1,apply(n){n.wetGrip*=1.35,n.grip*=.95}},{id:"nitro",name:"Nitro double",tagline:"Deux charges de plus, des boosts plus courts.",pro:"+2 charges de boost par course.",con:"Dur\xE9e de boost \xD70,75.",icon:"\u{1F680}",maxStacks:2,apply(n){n.boostCharges+=2,n.boostDuration*=.75}},{id:"brakes",name:"Freins c\xE9ramique",tagline:"Freinage mordant, direction plus vive, reprise plus lente.",pro:"Freinage \xD71,4 et braquage \xD71,08.",con:"Acc\xE9l\xE9ration \xD70,95.",icon:"\u{1F6D1}",maxStacks:2,apply(n){n.brake*=1.4,n.steerRate*=1.08,n.accel*=.95}},{id:"gyro",name:"Gyroscope",tagline:"Stabilisateur de vol, adh\xE9rence en retrait.",pro:"Contr\xF4le a\xE9rien \xD71,5 et stabilit\xE9 en l'air \xD71,25.",con:"Adh\xE9rence \xD70,9.",icon:"\u{1F300}",maxStacks:2,apply(n){n.airControl*=1.5,n.airStability*=1.25,n.grip*=.9}},{id:"slick",name:"Pneus slick",tagline:"Gomme tendre : accroche s\xE8che maximale, pluie interdite.",pro:"Adh\xE9rence s\xE8che \xD71,12.",con:"Adh\xE9rence mouill\xE9e \xD70,7 et braquage \xD70,95.",icon:"\u{1F3C1}",maxStacks:2,apply(n){n.grip*=1.12,n.wetGrip*=.7,n.steerRate*=.95}},{id:"carenage",name:"Car\xE9nage aspiration",tagline:"Profil fusel\xE9 : on file dans le sillage, on tourne moins vite.",pro:"Aspiration \xD71,6 dans le sillage des concurrents.",con:"Braquage \xD70,92.",icon:"\u{1F32C}",maxStacks:2,apply(n){n.slipstream*=1.6,n.steerRate*=.92}},{id:"blindage",name:"Blindage renforc\xE9",tagline:"Carrosserie en acier : les chocs co\xFBtent moins, la moto p\xE8se.",pro:"Perte de vitesse contre les glissi\xE8res \xD70,5.",con:"Acc\xE9l\xE9ration \xD70,92 et vitesse de pointe \xD70,97.",icon:"\u{1F6E1}",maxStacks:2,apply(n){n.wallLoss*=.5,n.accel*=.92,n.maxSpeed*=.97}}],$l=[{id:"vortex",name:"Vortex Solenne",color:58879,accent:728366,skill:.8,aggression:.92,jumpSkill:.6,lineSkill:.5,style:"agressif",bio:"Freine tard, plonge dans les virages et ne l\xE2che jamais un pilote \xE0 la corde."},{id:"saltamonte",name:"Brigo Saltamonte",color:16766474,accent:1118481,skill:.76,aggression:.45,jumpSkill:.97,lineSkill:.5,style:"sauteur",bio:"Vole plus haut que tout le monde, atterrit quand il veut, parfois trop tard."},{id:"lumen",name:"Lumen Ardoise",color:8190976,accent:1714704,skill:.84,aggression:.15,jumpSkill:.55,lineSkill:.97,style:"trajectoire",bio:"Trace une ligne parfaite, ne prend jamais un bord et ne commet aucune faute."},{id:"aurelio",name:"Aurelio Temp\xEAte",color:16747520,accent:0,skill:.97,aggression:.7,jumpSkill:.85,lineSkill:.9,style:"r\xE9gulier",bio:"Le champion de la c\xF4te : rien \xE0 lui reprocher, et il le sait."},{id:"maree",name:"Ingrid Mar\xE9e",color:11544319,accent:16777215,skill:.88,aggression:.78,jumpSkill:.7,lineSkill:.6,style:"agressif",bio:"Pousse ses freins jusqu'\xE0 la limite et ressort des virages en coup de vent."},{id:"gaspard",name:"Gaspard Brume",color:1989631,accent:15790320,skill:.72,aggression:.35,jumpSkill:.4,lineSkill:.6,style:"r\xE9gulier",bio:"Discret, m\xE9tronome, il finit presque toujours dans les cinq premiers."},{id:"yuki",name:"Yuki Varan",color:50316,accent:8217,skill:.91,aggression:.5,jumpSkill:.8,lineSkill:.8,style:"r\xE9gulier",bio:"Rapide sur tous les terrains, sans point faible visible, et toujours souriant."}],Nm=[{name:"Coastal Rush",subtitle:"Route m\xE9diterran\xE9enne, grandes courbes et falaises"},{name:"Cliff Edge",subtitle:"Corniches \xE9troites et vent de face"},{name:"Harbor Drift",subtitle:"Quais glissants, embruns et virages en \xE9pingle"},{name:"Lighthouse Pass",subtitle:"Tunnels, ressauts et brouillard de phare"},{name:"The Final Run",subtitle:"Le champion vous attend"}],jh=Nm.length;function Um(n){return ar.find(e=>e.id===n)||null}function Fm(n,e){let t=0;for(let i of n.upgrades)i===e&&t++;return t}function Zl(n){let e=String(n),t=kn(sa(e+"|run")),i=[];for(let o=0;o<jh;o++)if(o===0)i.push("sunset");else if(o===jh-1)i.push("rain");else{let a=i[o-1],l=zS.filter(c=>c!==a&&!(o===jh-2&&c==="rain"));i.push(t.pick(l))}let s=Nm.map((o,a)=>({name:o.name,subtitle:o.subtitle,trackSeed:`${e}-${a}`,weather:i[a],laps:a<2?2:3})),r={[Ii.id]:0};for(let o of $l)r[o.id]=0;return{seed:e,stageIndex:0,stages:s,upgrades:[],points:r,history:[]}}function Kl(n){let e=Math.max(0,n.stageIndex),t=[{id:Ii.id,name:Ii.name,color:Ii.color,accent:Ii.accent,isPlayer:!0,persona:null,stats:Is(n)}];for(let i of $l){let s=Math.min(.99,Math.round((i.skill+.01*e)*100)/100);t.push({id:i.id,name:i.name,color:i.color,accent:i.accent,isPlayer:!1,persona:{...i,skill:s},stats:{...or}})}return t}function Is(n){let e={...or};for(let t of n.upgrades){let i=Um(t);i&&i.apply(e)}return e}function jl(n){let e=kn(sa(`${n.seed}|offer|${n.stageIndex}`)),t=ar.filter(i=>Fm(n,i.id)<i.maxStacks);return e.shuffle(t).slice(0,3)}function Jl(n,e){let t=Um(e);return!t||Fm(n,e)>=t.maxStacks?!1:(n.upgrades.push(e),!0)}function Om(n){if(n===Ii.id)return Ii.name;let e=$l.find(t=>t.id===n);return e?e.name:n}function Jh(n,e){if(oa(n))return n;let t=e.slice().sort((r,o)=>r.position-o.position),i=n.stages[n.stageIndex],s={stage:n.stageIndex,name:i.name,results:[]};return t.forEach((r,o)=>{let a=r.position??o+1,l=kl[a-1]??0;n.points[r.id]=(n.points[r.id]||0)+l,s.results.push({id:r.id,name:r.name||n.names?.[r.id]||Om(r.id),position:a,points:l,isPlayer:r.id===Ii.id})}),n.history.push(s),n.stageIndex+=1,n}function uo(n){let e={};for(let t of n.history)for(let i of t.results)e[i.id]=Math.min(e[i.id]??1/0,i.position);return Object.keys(n.points).map(t=>({id:t,name:n.names?.[t]||Om(t),points:n.points[t],isPlayer:t===Ii.id,_best:e[t]??1/0})).sort((t,i)=>i.points-t.points||t._best-i._best).map(({_best:t,...i})=>i)}function oa(n){return n.stageIndex>=n.stages.length}function Ql(n=new Date){let e=n instanceof Date?n:new Date(n),t=e.getUTCFullYear(),i=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`DAILY-${t}-${i}-${s}`}function kS(){let n="ABCDEFGHJKMNPQRSTUVWXYZ23456789",e="RUSH-";for(let t=0;t<4;t++)e+=n[Math.floor(Math.random()*n.length)];return e}function Yl(){return{runs:0,wins:0,bestPoints:0,unlocked:[]}}function Qh(n){let e=Yl();if(!n||typeof n!="object")return e;let t=i=>Number.isFinite(i)&&i>=0?Math.floor(i):0;return{runs:t(n.runs),wins:t(n.wins),bestPoints:t(n.bestPoints),unlocked:Array.isArray(n.unlocked)?n.unlocked.filter(i=>typeof i=="string"):e.unlocked}}function Bm(){try{return globalThis.localStorage??null}catch{return null}}function ef(){try{let n=Bm();if(!n)return Yl();let e=n.getItem(Dm);return e?Qh(JSON.parse(e)):Yl()}catch{return Yl()}}function tf(n){try{let e=Bm();return e?(e.setItem(Dm,JSON.stringify(Qh(n))),!0):!1}catch{return!1}}function nf(n,e){let t=Qh(n),i=uo(e),s=i.find(o=>o.isPlayer),r=i.length>0&&i[0].isPlayer;return{runs:t.runs+1,wins:t.wins+(r?1:0),bestPoints:Math.max(t.bestPoints,s?s.points:0),unlocked:t.unlocked.slice()}}var ri=.9,zm=.3,ec=8,rf=3,km=6+.8,aa=3,HS=4.5,VS=.015,GS=.004,Hm=60,yt={asphaltA:[.27,.225,.2],asphaltB:[.31,.26,.23],rampDark:[.13,.13,.15],yellow:[1,.82,.05],black:[.04,.04,.05],white:[.95,.95,.92],red:[.86,.14,.12],checkW:[.95,.95,.95],checkB:[.04,.04,.05],railA:[.93,.92,.88],railB:[.8,.2,.12],neonCyan:[.2,1,1],neonMag:[1,.15,.9],sand:[.3,.48,.15],motorwayA:[.2,.2,.21],motorwayB:[.22,.22,.23],lane:[.34,.33,.31],gravel:[.24,.4,.13],tunOchreA:[.5,.39,.2],tunOchreB:[.44,.34,.17],sodium:[1,.72,.28],tunA:[.16,.18,.24],tunB:[.21,.23,.3],concrete:[.36,.38,.42],concreteB:[.3,.32,.36],post:[.12,.13,.16],beam:[.1,.1,.12],mast:[.17,.18,.22]},tc=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],Vm=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],WS=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],wn=(n,e,t)=>n+(e-n)*t,Hn=class{constructor(){this.pos=[],this.col=[],this.uv=[],this.idx=[],this.n=0}quad(e,t,i,s){let[r,o,a,l]=e,c=Vm(tc(o,r),tc(a,r)),u=Vm(tc(a,r),tc(l,r)),h=[c[0]+u[0],c[1]+u[1],c[2]+u[2]];if(!(Math.hypot(h[0],h[1],h[2])>1e-12))return;let f=WS(h,i)<0,d=this.n;for(let g=0;g<4;g++){let x=e[g];this.pos.push(x[0],x[1],x[2]),this.col.push(t[0],t[1],t[2]);let m=s?s[g]:[0,0];this.uv.push(m[0],m[1])}this.n+=4,f?this.idx.push(d,d+2,d+1,d,d+3,d+2):this.idx.push(d,d+1,d+2,d,d+2,d+3)}};function la(n,e,t,i,s){for(let r=0;r<3;r++){let o=(r+1)%3,a=(r+2)%3;for(let l of[-1,1]){let c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([u,h])=>{let f=[0,0,0];return f[r]=l,f[o]=u,f[a]=h,[0,1,2].map(d=>e[d]+t[0][d]*f[0]*i[0]+t[1][d]*f[1]*i[1]+t[2][d]*f[2]*i[2])});n.quad(c,s,t[r].map(u=>u*l),null)}}}function of(n,e,t){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new yi(i);return s.colorSpace=Ct,s.anisotropy=4,s}function Gm(n,e,t,i){n.beginPath(),e.forEach(([s,r],o)=>o?n.lineTo(s*t,r*i):n.moveTo(s*t,r*i)),n.closePath(),n.fill()}var XS=[[.12,.1],[.82,.5],[.12,.9],[.12,.68],[.5,.5],[.12,.32]];function af(n,e,t){let i=t??kn(n.seed??1),s=n.pts,r=s.length,o=n.step??n.length/r,a=n.length??r*o,l=n.features??[],c=l.filter(C=>C.type==="ramp"),u=l.filter(C=>C.type==="boost"),h=l.filter(C=>C.type==="tunnel"),f=Math.max(0,Math.min(1,e.sheen??e.wet??0)),d=!!e.night,g=new ht;g.name="road";let x=[],m=[],p=[],S=C=>(m.push(C),C),M=of(128,128,(C,N,z)=>{C.fillStyle="#f3efe6",C.fillRect(0,0,N,z),C.fillStyle="#d6202a",Gm(C,XS,N,z)}),y=of(256,128,(C,N,z)=>{C.fillStyle="#04141a",C.fillRect(0,0,N,z),C.fillStyle="#37f3ff",Gm(C,[[.05,.1],[.8,.5],[.05,.9],[.05,.7],[.4,.5],[.05,.3]],N,z)}),T=of(1024,256,(C,N,z)=>{C.fillStyle="#0b0e16",C.fillRect(0,0,N,z),C.strokeStyle="#ffd21f",C.lineWidth=10,C.strokeRect(12,12,N-24,z-24),C.fillStyle="#ffd21f",C.font="bold 150px Arial, Helvetica, sans-serif",C.textAlign="center",C.textBaseline="middle",C.fillText("POLYGON RUSH",N/2,z/2+8)});for(let C of[M,y,T])C&&p.push(C);y&&(y.wrapS=Pn);let b=S(new st({vertexColors:!0,flatShading:!0,roughness:.85-.6*f,metalness:f>0?.2:.02})),v=S(new Yt({vertexColors:!0})),w=S(new st({vertexColors:!0,flatShading:!0,color:16777215,emissive:16777215,emissiveIntensity:.14,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),_=S(new st({vertexColors:!0,flatShading:!0,roughness:1})),E=S(new st({vertexColors:!0,flatShading:!0,roughness:.5,metalness:.2})),R=S(new Yt({vertexColors:!0})),U=S(new st({color:M?16777215:16762906,map:M,emissive:M?16777215:16762906,emissiveMap:M,emissiveIntensity:.5,flatShading:!0})),H=S(new st({color:207411,emissive:3666943,emissiveMap:y,emissiveIntensity:2.2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),P=S(new st({vertexColors:!0,flatShading:!0,side:Pt,roughness:.9})),F=S(new Yt({vertexColors:!0})),O=S(new st({vertexColors:!0,flatShading:!0,roughness:.6})),Y=S(new st({color:T?16777215:16765471,map:T,emissive:T?16777215:16756736,emissiveMap:T,emissiveIntensity:.7,flatShading:!0})),G=S(new st({color:2830138,flatShading:!0,roughness:.7})),J=S(new st({color:16773570,emissive:16765562,emissiveIntensity:d?2.5:.8,flatShading:!0})),re=C=>{for(let N of c)if(C>=N.s0&&C<N.s1)return N.height*(C-N.s0)/(N.s1-N.s0);return 0},me=C=>c.some(N=>C>=N.s0&&C<N.s1),ye=C=>h.some(N=>C>=N.s0&&C<=N.s1),ce=C=>{let N=C/o,z=Math.floor(N),Z=N-z;z=n.open?Math.max(0,Math.min(r-2,z)):(z%r+r)%r;let ae=s[z],Pe=s[(z+1)%r],He=wn(ae.rx,Pe.rx,Z),Ge=wn(ae.rz,Pe.rz,Z),q=Math.hypot(He,Ge)||1,oe=wn(ae.tx,Pe.tx,Z),pe=wn(ae.tz,Pe.tz,Z),ve=Math.hypot(oe,pe)||1,Se=wn(ae.y,Pe.y,Z);return{s:C,x:wn(ae.x,Pe.x,Z),z:wn(ae.z,Pe.z,Z),yb:Se,y:Se,h:0,rx:He/q,rz:Ge/q,tx:oe/ve,tz:pe/ve,w:wn(ae.width,Pe.width,Z),curv:wn(ae.curv,Pe.curv,Z),sample:!1}},ie=(C,N,z)=>({x:wn(C.x,N.x,z),y:wn(C.y,N.y,z),yb:wn(C.yb,N.yb,z),z:wn(C.z,N.z,z),rx:wn(C.rx,N.rx,z),rz:wn(C.rz,N.rz,z),w:wn(C.w,N.w,z)}),Q=(C,N,z=0)=>[C.x+C.rx*N,C.y+z,C.z+C.rz*N],ee=(C,N,z=0)=>[C.x+C.rx*N,C.yb+z,C.z+C.rz*N],L=[];for(let C of c)L.push({s:C.s0,h:0},{s:C.s1,h:C.height},{s:C.s1,h:0});L.sort((C,N)=>C.s-N.s);let B=[],X=0,$=(C,N,z)=>{let Z=B[B.length-1];if(Z&&Math.abs(Z.s-C)<1e-9&&Math.abs(Z.h-N)<1e-9){Z.sample=Z.sample||z;return}let ae=ce(C);ae.h=N,ae.y=ae.yb+N,ae.sample=z,B.push(ae)};for(let C=0;C<r;C++){let N=C*o;for(;X<L.length&&L[X].s<=N+1e-9;)$(L[X].s,L[X].h,!1),X++;$(N,re(N),!0)}for(;X<L.length;)$(L[X].s,L[X].h,!1),X++;let de=B.length,we=[];for(let C=0;C<de&&!(n.open&&C===de-1);C++){let N=B[C],z=B[(C+1)%de],Z=N.s,ae=C+1<de?B[C+1].s:a,Pe=Math.abs(ae-Z)<1e-9,He=(Z+ae)/2;we.push({a:N,b:z,sa:Z,sb:ae,drop:Pe,mid:He,ramp:!Pe&&me(He)})}let Ae=new Hn,V=new Hn,Ve=new Hn,ze=new Hn,Be=new Hn,Ie=new Hn,qe=new Hn,Fe=new Hn,D=new Hn,A=new Hn,j=new Hn,xe=new Hn,_e=C=>C.w/2+6-zm/2,he=C=>C.w/2+6+zm/2;for(let C of we){let{a:N,b:z,sa:Z,sb:ae,mid:Pe}=C;if(C.drop){Ae.quad([Q(N,-N.w/2),Q(N,N.w/2),Q(z,z.w/2),Q(z,-z.w/2)],yt.rampDark,[N.tx,0,N.tz]);continue}let He=N.w/2,Ge=z.w/2;if(C.ramp)V.quad([Q(N,-He),Q(N,He),Q(z,Ge),Q(z,-Ge)],Math.floor(Pe/2)%2===0?yt.yellow:yt.black,[0,1,0]),Ae.quad([Q(N,-He),Q(z,-Ge),ee(z,-Ge),ee(N,-He)],yt.rampDark,[-N.rx,0,-N.rz]),Ae.quad([Q(N,He),ee(N,He),ee(z,Ge),Q(z,Ge)],yt.rampDark,[N.rx,0,N.rz]);else{Ae.quad([Q(N,-He),Q(N,He),Q(z,Ge),Q(z,-Ge)],n.open?Math.floor(Pe/8)%2?yt.motorwayB:yt.motorwayA:Math.floor(Pe/8)%2?yt.asphaltB:yt.asphaltA,[0,1,0]);for(let Se of[-1,1])Ve.quad([Q(N,Se*(He-.25),.02),Q(N,Se*(He-.45),.02),Q(z,Se*(Ge-.45),.02),Q(z,Se*(Ge-.25),.02)],yt.white,[0,1,0]);let q=9,oe=3;for(let Se=Math.floor(Z/q);Se*q<ae;Se++){let De=Math.max(Z,Se*q),Ze=Math.min(ae,Se*q+oe);if(Ze-De<1e-6)continue;let Ke=ie(N,z,(De-Z)/(ae-Z)),it=ie(N,z,(Ze-Z)/(ae-Z));Ve.quad([Q(Ke,-.08,.02),Q(Ke,.08,.02),Q(it,.08,.02),Q(it,-.08,.02)],yt.white,[0,1,0])}let pe=Math.abs((N.curv+z.curv)/2)>GS?1.2:.5,ve=Math.floor(Pe/2)%2?yt.red:yt.railA;for(let Se of n.open?[]:[-1,1])Ve.quad([Q(N,Se*He,.025),Q(N,Se*(He+pe),.025),Q(z,Se*(Ge+pe),.025),Q(z,Se*Ge,.025)],ve,[0,1,0])}for(let q of[-1,1]){ze.quad([ee(N,q*He),ee(N,q*_e(N)),ee(z,q*_e(z)),ee(z,q*Ge)],n.open?yt.lane:yt.sand,[0,1,0]);let oe=ec/2,pe=-rf/2,ve=-rf,Se=[q*N.rx*.6,.8,q*N.rz*.6];ze.quad([ee(N,q*he(N),0),ee(N,q*(he(N)+oe),pe),ee(z,q*(he(z)+oe),pe),ee(z,q*he(z),0)],yt.gravel,Se),ze.quad([ee(N,q*(he(N)+oe),pe),ee(N,q*(he(N)+ec),ve),ee(z,q*(he(z)+ec),ve),ee(z,q*(he(z)+oe),pe)],yt.gravel,Se);let De=Math.floor(Pe/6)%2?yt.railB:yt.railA,Ze=q*_e(N),Ke=q*_e(z),it=q*he(N),rt=q*he(z);!n.open&&(q<0||d||e.openRight===!1)&&(Be.quad([ee(N,Ze,0),ee(N,Ze,ri),ee(z,Ke,ri),ee(z,Ke,0)],De,[-q*N.rx,0,-q*N.rz]),Be.quad([ee(N,it,0),ee(N,it,ri),ee(z,rt,ri),ee(z,rt,0)],De,[q*N.rx,0,q*N.rz]),Be.quad([ee(N,Ze,ri),ee(N,it,ri),ee(z,rt,ri),ee(z,Ke,ri)],De,[0,1,0])),d&&Ie.quad([ee(N,Ze,ri+.02),ee(N,it,ri+.02),ee(z,rt,ri+.02),ee(z,Ke,ri+.02)],q<0?yt.neonCyan:yt.neonMag,[0,1,0])}}for(let C of B){if(!C.sample||Math.abs(C.curv)<=VS||Math.round(C.s/o)%8!==0||ye(C.s)||me(C.s))continue;let z=-Math.sign(C.curv)*(C.w/2+6+.6),ae=C.curv>0?[[0,0],[1,0],[1,1],[0,1]]:[[1,0],[0,0],[0,1],[1,1]];qe.quad([ee(C,z-.6,1),ee(C,z+.6,1),ee(C,z+.6,2),ee(C,z-.6,2)],[1,1,1],[-C.tx,0,-C.tz],ae),la(j,[C.x+C.rx*z,C.yb+.35,C.z+C.rz*z],[[C.tx,0,C.tz],[C.rx,0,C.rz],[0,1,0]],[.08,.12,.65],yt.post)}let Ce=ce(0),Le=Math.max(4,Math.round(Ce.w)),Ne=Ce.w/Le;for(let C=0;C<3;C++){let N=ce(-2+C),z=ce(-1+C);for(let Z=0;Z<Le;Z++){let ae=-Ce.w/2+Z*Ne,Pe=ae+Ne;Ve.quad([Q(N,ae,.03),Q(N,Pe,.03),Q(z,Pe,.03),Q(z,ae,.03)],(C+Z)%2?yt.checkB:yt.checkW,[0,1,0])}}let ke=Ce.w/2+6+.5,Ee=[[Ce.tx,0,Ce.tz],[Ce.rx,0,Ce.rz],[0,1,0]];for(let C of[-1,1])la(j,[Ce.x+Ce.rx*C*ke,Ce.yb+4,Ce.z+Ce.rz*C*ke],Ee,[.3,.3,4],yt.post);la(j,[Ce.x,Ce.yb+7.5,Ce.z],Ee,[.5,ke,.5],yt.beam);let Ue=(C,N,z)=>[Ce.x+Ce.tx*C+Ce.rx*N,Ce.yb+z,Ce.z+Ce.tz*C+Ce.rz*N];xe.quad([Ue(-.55,-ke,5.2),Ue(-.55,ke,5.2),Ue(-.55,ke,6.8),Ue(-.55,-ke,6.8)],[1,1,1],[-Ce.tx,0,-Ce.tz],[[0,0],[1,0],[1,1],[0,1]]),xe.quad([Ue(.55,-ke,5.2),Ue(.55,ke,5.2),Ue(.55,ke,6.8),Ue(.55,-ke,6.8)],[1,1,1],[Ce.tx,0,Ce.tz],[[1,0],[0,0],[0,1],[1,1]]);for(let C of u){let N=[];for(let Z=C.s0;Z<C.s1;Z+=2)N.push(Z);N.push(C.s1);let z=N.map(ce);for(let Z=0;Z+1<z.length;Z++){let ae=z[Z],Pe=z[Z+1],He=(ae.s-C.s0)/4,Ge=(Pe.s-C.s0)/4;Fe.quad([Q(ae,-ae.w/2,.04),Q(ae,ae.w/2,.04),Q(Pe,Pe.w/2,.04),Q(Pe,-Pe.w/2,.04)],[1,1,1],[0,1,0],[[He,0],[He,1],[Ge,1],[Ge,0]])}}let se=C=>{let N=C.w/2+km,z=[[-N,0],[-N,aa]];for(let Z=1;Z<=7;Z++){let ae=Math.PI-Z*Math.PI/8;z.push([N*Math.cos(ae),aa+HS*Math.sin(ae)])}return z.push([N,aa],[N,0]),z},be=(C,N,z,Z=0)=>[C.x+C.rx*N+C.tx*Z,C.yb+z,C.z+C.rz*N+C.tz*Z],ne=(C,N,z)=>{let Z=-N,ae=aa-z,Pe=Math.hypot(Z,ae)||1;return[C.rx*Z/Pe,ae/Pe,C.rz*Z/Pe]},Me=([C,N])=>{let z=-C,Z=aa-N,ae=Math.hypot(z,Z)||1;return[C+z/ae*.45,N+Z/ae*.45]};for(let C of h){let N=[];for(let Z=C.s0;Z<C.s1;Z+=2)N.push(Z);N.push(C.s1);let z=N.map(ce);for(let Z=0;Z+1<z.length;Z++){let ae=z[Z],Pe=z[Z+1],He=se(ae),Ge=se(Pe);for(let q=0;q<He.length-1;q++){let oe=(He[q][0]+He[q+1][0])/2,pe=(He[q][1]+He[q+1][1])/2;D.quad([be(ae,He[q][0],He[q][1]),be(ae,He[q+1][0],He[q+1][1]),be(Pe,Ge[q+1][0],Ge[q+1][1]),be(Pe,Ge[q][0],Ge[q][1])],n.open?q%2?yt.tunOchreA:yt.tunOchreB:q%2?yt.tunA:yt.tunB,ne(ae,oe,pe))}if(Math.round((ae.s-C.s0)/2)%6===0)for(let q=1;q<=8;q++){let oe=Me(He[q]),pe=Me(He[q+1]),ve=(oe[0]+pe[0])/2,Se=(oe[1]+pe[1])/2;A.quad([be(ae,oe[0],oe[1]),be(ae,pe[0],pe[1]),be(ae,pe[0],pe[1],.6),be(ae,oe[0],oe[1],.6)],n.open?yt.sodium:q%2?yt.neonCyan:yt.neonMag,ne(ae,ve,Se))}}for(let Z of[z[0],z[z.length-1]]){let ae=Z.w/2+km,Pe=[[Z.tx,0,Z.tz],[Z.rx,0,Z.rz],[0,1,0]];for(let He of[-1,1])la(D,[Z.x+Z.rx*He*(ae+1.2),Z.yb+5,Z.z+Z.rz*He*(ae+1.2)],Pe,[2,1.1,5],yt.concrete);la(D,[Z.x,Z.yb+10.5,Z.z],Pe,[2,ae+3.5,1.5],yt.concreteB)}}let fe=(C,N,z,Z=!1)=>{if(!C.idx.length)return null;let ae=new gt;ae.setAttribute("position",new lt(C.pos,3)),ae.setAttribute("color",new lt(C.col,3)),ae.setAttribute("uv",new lt(C.uv,2)),ae.setIndex(C.idx),ae.computeVertexNormals(),x.push(ae);let Pe=new ot(ae,N);return Pe.name=z,Pe.receiveShadow=Z,g.add(Pe),Pe};fe(Ae,b,"road-asphalt",!0),fe(V,v,"road-ramp-top"),fe(Ve,w,"road-paint"),fe(ze,_,"road-shoulder-talus"),fe(Be,E,"road-barriers"),d&&fe(Ie,R,"road-barrier-neon"),fe(qe,U,"road-chevrons"),fe(Fe,H,"road-boost"),fe(D,P,"road-tunnels"),fe(A,F,"road-tunnel-neon"),fe(j,O,"road-props"),fe(xe,Y,"road-start-sign");let ge=[];for(let C=1;C*Hm<a-5;C++){let N=C*Hm;if(h.some(Ge=>N>=Ge.s0-15&&N<=Ge.s1+15))continue;let z=ce(N),Z=C%2?1:-1,ae=Z*(z.w/2+6+2.6),Pe=z.yb-rf*Math.min(1,2.45/ec),He=i.range(8.5,9.5);ge.push({x:z.x+z.rx*ae,z:z.z+z.rz*ae,y:Pe,h:He,hx:z.x+z.rx*(ae-Z*.6),hz:z.z+z.rz*(ae-Z*.6)})}if(ge.length){let C=new In(.18,.26,9,6,1),N=new rr(.55,0);x.push(C,N);let z=new Sn(C,G,ge.length),Z=new Sn(N,J,ge.length);z.name="road-lamp-masts",Z.name="road-lamp-heads";let ae=new je,Pe=new nn,He=new k,Ge=new k;ge.forEach((q,oe)=>{Ge.set(q.x,q.y+q.h/2,q.z),He.set(1,q.h/9,1),ae.compose(Ge,Pe,He),z.setMatrixAt(oe,ae),Ge.set(q.hx,q.y+q.h+.2,q.hz),He.set(1,1,1),ae.compose(Ge,Pe,He),Z.setMatrixAt(oe,ae)}),z.instanceMatrix.needsUpdate=!0,Z.instanceMatrix.needsUpdate=!0,g.add(z,Z)}return{group:g,update:(C,N)=>{y&&(y.offset.x=-(N*.9%1)),H.emissiveIntensity=2.2+.5*Math.sin(N*5)},dispose:()=>{g.removeFromParent();for(let C of x)C.dispose();for(let C of m)C.dispose();for(let C of p)C.dispose()}}}function Xm(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new gt,c=0;for(let u=0;u<n.length;++u){let h=n[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Wm(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);let g=Wm(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Wm(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new mt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){let x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function lf(n,e){if(e===Yp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===na||e===Fl){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===na)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function lr(n,e=.5,t=1){if(!n||n.userData.voxel||!(n.isMeshStandardMaterial||n.isMeshLambertMaterial))return n;n.userData.voxel=!0;let i=n.onBeforeCompile;return n.onBeforeCompile=(s,r)=>{i?.call(n,s,r),s.uniforms.uVoxCell={value:e},s.uniforms.uVoxStrength={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"voxel-"+e+"-"+t,n.needsUpdate=!0,n}var qS=/asphalt|paint|boost|sign|ramp|neon|lamp-heads/;function cf(n,e){n.traverse(t=>{if(!t.isMesh||qS.test(t.name))return;let i=Array.isArray(t.material)?t.material:[t.material];for(let s of i)!s||s.transparent||s.emissiveIntensity>1.2||(s.roughness??1)<.35||lr(s,e(t),1)})}function qm(n,e,t=46){let i=[];for(let l=0;l<t;l++){let c=e.range(0,Math.PI*2),u=e.range(700,4200),h=Math.cos(c)*u,f=Math.sin(c)*u,d=e.range(260,520),g=e.range(26,46),x=e.int(5,11);for(let m=0;m<x;m++)i.push([h+Math.round(e.range(-3.5,3.5))*g,d+Math.round(e.range(0,1.4))*g*.6,f+Math.round(e.range(-2,2))*g,g*e.int(1,3),g*.6*e.int(1,2),g*e.int(1,2)])}let s=new cn(1,1,1),r=new ii({color:n.night?2765648:16777215,fog:!1,emissive:n.night?329487:new Re(16777215).lerp(new Re(n.skyHorizon),.35).multiplyScalar(.5)}),o=new Sn(s,r,i.length),a=new je;return i.forEach((l,c)=>{a.makeScale(l[3],l[4],l[5]),a.setPosition(l[0],l[1],l[2]),o.setMatrixAt(c,a)}),o.instanceMatrix.needsUpdate=!0,o.frustumCulled=!1,o.name="voxel-clouds",o}function Ym(n,e,t,i,s,r,o,a,l,c){let u=e+s,h=t+r,f=i+o,d,g,x,m,p,S;s?(d=0,g=l?1:-1,x=0,m=0,p=0,S=c?1:-1):r?(d=a?1:-1,g=0,x=0,m=0,p=0,S=c?1:-1):(d=a?1:-1,g=0,x=0,m=0,p=l?1:-1,S=0);let M=n(u+d,h+g,f+x)?1:0,y=n(u+m,h+p,f+S)?1:0,T=n(u+d+m,h+g+p,f+x+S)?1:0;return .5+.1667*(M&&y?0:3-(M+y+T))}function Ls(n,e){let t=n.index?n.toNonIndexed():n,i=t.attributes.position,s=t.attributes.color,r=512,o=(m,p,S)=>m+r+(p+r)*1024+(S+r)*1048576,a=new Map,l=(m,p,S,M,y,T)=>{let b=Math.floor(m/e),v=Math.floor(p/e),w=Math.floor(S/e),_=o(b,v,w);a.has(_)||a.set(_,[b,v,w,M,y,T])};for(let m=0;m<i.count;m+=3){let p=i.getX(m),S=i.getY(m),M=i.getZ(m),y=i.getX(m+1),T=i.getY(m+1),b=i.getZ(m+1),v=i.getX(m+2),w=i.getY(m+2),_=i.getZ(m+2),E=.6,R=.6,U=.6;s&&(E=(s.getX(m)+s.getX(m+1)+s.getX(m+2))/3,R=(s.getY(m)+s.getY(m+1)+s.getY(m+2))/3,U=(s.getZ(m)+s.getZ(m+1)+s.getZ(m+2))/3);let H=Math.max(Math.hypot(y-p,T-S,b-M),Math.hypot(v-p,w-S,_-M),Math.hypot(v-y,w-T,_-b)),P=Math.max(1,Math.ceil(H/e*2));for(let F=0;F<=P;F++)for(let O=0;O<=P-F;O++){let Y=F/P,G=O/P;l(p+(y-p)*Y+(v-p)*G,S+(T-S)*Y+(w-S)*G,M+(b-M)*Y+(_-M)*G,E,R,U)}}let c=new Map;for(let m of a.values()){let p=m[0]+r+(m[2]+r)*1024,S=c.get(p);S||c.set(p,S=[]),S.push(m)}for(let m of c.values()){m.sort((p,S)=>p[1]-S[1]);for(let p=0;p<m.length-1;p++)for(let S=m[p][1]+1;S<m[p+1][1];S++)a.set(o(m[p][0],S,m[p][2]),[m[p][0],S,m[p][2],m[p][3],m[p][4],m[p][5]])}let u=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],h=[],f=[],d=[],g=(m,p,S)=>a.has(o(m,p,S));for(let m of a.values()){let[p,S,M,y,T,b]=m,v=Math.sin(p*12.9898+S*78.233+M*37.719)*43758.5453,w=.86+.24*(v-Math.floor(v));for(let[_,E,R,U]of u)if(!a.has(o(p+_,S+E,M+R)))for(let H of[0,1,2,0,2,3]){let P=U[H*3],F=U[H*3+1],O=U[H*3+2],Y=w*Ym(g,p,S,M,_,E,R,P,F,O);h.push((p+P)*e,(S+F)*e,(M+O)*e),f.push(_,E,R),d.push(y*Y,T*Y,b*Y)}}let x=new gt;return x.setAttribute("position",new lt(h,3)),x.setAttribute("normal",new lt(f,3)),x.setAttribute("color",new lt(d,3)),x.computeBoundingSphere(),x}function $n(n,e,t,i,s,r=.2){let o=new Array(n*e*t),a=(x,m,p)=>x<0||m<0||p<0||x>=n||m>=e||p>=t?null:o[x+n*(m+e*p)];for(let x=0;x<t;x++)for(let m=0;m<e;m++)for(let p=0;p<n;p++)o[p+n*(m+e*x)]=s(p,m,x)||null;let l=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],c=[],u=[],h=[],f=-n/2,d=-t/2;for(let x=0;x<t;x++)for(let m=0;m<e;m++)for(let p=0;p<n;p++){let S=o[p+n*(m+e*x)];if(!S)continue;let M=Math.sin(p*12.9898+m*78.233+x*37.719)*43758.5453,y=1-r/2+r*(M-Math.floor(M));for(let[T,b,v,w]of l)if(!a(p+T,m+b,x+v)&&!(b<0&&m===0))for(let _ of[0,1,2,0,2,3]){let E=w[_*3],R=w[_*3+1],U=w[_*3+2],H=y*Ym(a,p,m,x,T,b,v,E,R,U);c.push((p+f+E)*i,(m+R)*i,(x+d+U)*i),u.push(T,b,v),h.push(S[0]*H,S[1]*H,S[2]*H)}}let g=new gt;return g.setAttribute("position",new lt(c,3)),g.setAttribute("normal",new lt(u,3)),g.setAttribute("color",new lt(h,3)),g.computeBoundingSphere(),g}function $m(n,e=1,t=null){if(!n||n.userData.wetRoad)return n;n.userData.wetRoad=!0;let i=n.onBeforeCompile;return n.onBeforeCompile=(s,r)=>{i?.call(n,s,r),s.uniforms.uWet={value:e},s.uniforms.tRefl={value:t?t.texture:null},s.uniforms.uReflMatrix={value:t?t.matrix:new je},s.uniforms.uReflOn={value:t?1:0},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"wet-road-"+e+(t?"-refl":""),n.needsUpdate=!0,n}function Zm(n,e){let t=1/0,i=-1/0,s=1/0,r=-1/0,o=1/0,a=-1/0;for(let f=0;f<n.length;f+=4)t=Math.min(t,n[f]),i=Math.max(i,n[f]),s=Math.min(s,n[f+1]),r=Math.max(r,n[f+1]),o=Math.min(o,n[f+2]),a=Math.max(a,n[f+2]);let l=i-t+1,c=r-s+1,u=a-o+1,h=new Map;for(let f=0;f<n.length;f+=4){let d=n[f+3];h.set(n[f]-t+l*(n[f+1]-s+c*(n[f+2]-o)),[(d>>16&255)/255,(d>>8&255)/255,(d&255)/255])}return $n(l,c,u,e,(f,d,g)=>h.get(f+l*(d+c*g))||null,.12)}function Km(n,e=3.1,t=2.6){if(!n||!n.userData.voxel||n.userData.windows)return n;n.userData.windows=!0;let i=n.onBeforeCompile;n.onBeforeCompile=(r,o)=>{i?.call(n,r,o),r.fragmentShader=r.fragmentShader.replace("#include <roughnessmap_fragment>",`
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
        #include <roughnessmap_fragment>`)};let s=n.customProgramCacheKey?.()||"";return n.customProgramCacheKey=()=>s+"-win-"+e+"-"+t,n.needsUpdate=!0,n}function jm(n){let e={value:0};return n.onBeforeCompile=t=>{t.uniforms.uSeaTime=e,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"sea-waves",n.needsUpdate=!0,e}var fn=5,Jm=1,Ds=450,Zn=40,Qm=12e3,e0=32,t0=4e3,Kn=Math.PI*2,ca=new Ft,fo=new Re,n0=new je,i0=new je,YS=new k(0,1,0),s0=n=>n<0?0:n>1?1:n,Li=(n,e,t)=>n<e?e:n>t?t:n,cr=(n,e,t)=>{let i=s0((t-n)/(e-n));return i*i*(3-2*i)};function $S(n){let e=(i,s)=>{let r=Math.imul(i|0,374761393)+Math.imul(s|0,668265263)+n|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},t=(i,s)=>{let r=Math.floor(i),o=Math.floor(s),a=i-r,l=s-o,c=a*a*(3-2*a),u=l*l*(3-2*l),h=e(r,o),f=e(r+1,o),d=e(r,o+1),g=e(r+1,o+1);return h+(f-h)*c+(d-h)*u+(h-f-d+g)*c*u};return(i,s)=>(t(i,s)*.5+t(i*2+17.3,s*2-9.1)*.25+t(i*4-3.7,s*4+11.2)*.125)/.875}var ho=n=>{let e=new Re(n);return[e.r,e.g,e.b]},Ns={sand:ho(14271631),dry:ho(7317050),garrigue:ho(5212718),rock:ho(12169890),pale:ho(13617336),snow:ho(15855076)},ZS=[16513264,15853260,14725754,16052195],KS=[9075302,7236192,11047018,8023646],jS=[3407871,16727250,16757051],nc=0,ic=0,sc=0,ua=(n,e)=>{nc+=(n[0]-nc)*e,ic+=(n[1]-ic)*e,sc+=(n[2]-sc)*e};function JS(n,e,t,i,s,r){nc=Ns.sand[0],ic=Ns.sand[1],sc=Ns.sand[2],ua(Ns.dry,cr(2.5,7,n)),ua(Ns.garrigue,cr(25,75,n)*.55),ua(Ns.rock,cr(.4,.65,e)),ua(Ns.pale,cr(95,120,n)*.8),ua(Ns.snow,cr(125,150,n));let o=nc*t,a=ic*t,l=sc*t;i&&(o=o*.45+.02,a=a*.5+.03,l=l*.75+.09);for(let c=0;c<9;c+=3)s[r+c]=o,s[r+c+1]=a,s[r+c+2]=l}function oi(n,e){let t=n.index?n.toNonIndexed():n;t.attributes.uv&&t.deleteAttribute("uv"),t.attributes.normal||t.computeVertexNormals();let i=t.attributes.position.count,s=new Float32Array(i*3);fo.setHex(e);for(let r=0;r<i;r++)s[r*3]=fo.r,s[r*3+1]=fo.g,s[r*3+2]=fo.b;return t.setAttribute("color",new mt(s,3)),t}var ha=n=>Xm(n,!1);function QS(n,e,t){let i=Math.sin(n*12.9898+e*78.233+t*37.719)*43758.5453;return i-Math.floor(i)}function eT(){let n=new rr(1,0),e=n.attributes.position;for(let t=0;t<e.count;t++){let i=e.getX(t),s=e.getY(t),r=e.getZ(t),o=.8+.4*QS(i,s,r);e.setXYZ(t,i*o,s*o,r*o)}return n.computeVertexNormals(),n}function tT(){return ha([oi(new In(.35,.5,6,6).translate(0,3,0),7162931),oi(new rr(3.4,0).scale(1,.55,1).translate(0,7.4,0),4160058)])}function nT(){return ha([oi(new In(.25,.35,1.2,5).translate(0,.6,0),7162931),oi(new sr(1.1,10,6).translate(0,6,0),3037756)])}function iT(){let n=[oi(new In(.22,.35,8,5).translate(0,4,0),9071178)];for(let e=0;e<7;e++){let t=new sr(.55,4.6,3).rotateZ(Math.PI/2-.45).translate(0,8.4,0).rotateY(e*Kn/7);n.push(oi(t,5214010))}return ha(n)}function sT(){return ha([oi(new In(1.6,2.3,13,8).translate(0,6.5,0),16052712),oi(new In(2,2,2.2,8).translate(0,6.5,0),12727595),oi(new In(1.3,1.3,1.8,8).translate(0,14,0),16771488),oi(new sr(1.7,1.2,8).translate(0,15.4,0),3812906)])}function rT(){return ha([oi(new cn(2.2,.9,6).translate(0,.45,0),15986662),oi(new sr(1.9,5.4,3).scale(.1,1,1).translate(0,3.6,-.3),16775400)])}function Mi(n,e,t,i=!0){let s=new Sn(n,e,t.length);for(let r=0;r<t.length;r++){let o=t[r];ca.position.set(o.x,o.y,o.z),ca.rotation.set(0,o.ry??0,0),ca.scale.set(o.sx??1,o.sy??1,o.sz??1),ca.updateMatrix(),s.setMatrixAt(r,ca.matrix),o.col!==void 0&&(fo.setHex(o.col).multiplyScalar(o.v??1),s.setColorAt(r,fo))}return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.castShadow=i,s}var oT=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,aT=`
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
}`;function r0(n,e,t,i){let s=e.pts,r=s.length,o=e.bounds,a=!!t.night,l=$S(i.int(1,1073741808)),c=o.minX-Ds-Zn,u=o.minZ-Ds-Zn,h=Math.ceil((o.maxX-o.minX+2*Ds)/Zn)+3,f=Math.ceil((o.maxZ-o.minZ+2*Ds)/Zn)+3,d=Array.from({length:h*f},()=>[]);for(let q=0;q<r;q++){let oe=Li(Math.floor((s[q].x-c)/Zn),0,h-1),pe=Li(Math.floor((s[q].z-u)/Zn),0,f-1);d[pe*h+oe].push(q)}let g=0;function x(q,oe){let pe=Math.floor((q-c)/Zn),ve=Math.floor((oe-u)/Zn),Se=Math.max(h,f),De=1/0,Ze=0;for(let Ke=0;Ke<=Se;Ke++){for(let rt=ve-Ke;rt<=ve+Ke;rt++){if(rt<0||rt>=f)continue;let Ht=rt===ve-Ke||rt===ve+Ke?1:2*Ke;for(let Dt=pe-Ke;Dt<=pe+Ke;Dt+=Ht){if(Dt<0||Dt>=h)continue;let Vt=d[rt*h+Dt];for(let Xt=0;Xt<Vt.length;Xt++){let gn=Vt[Xt],I=s[gn],K=I.x-q,le=I.z-oe,ue=K*K+le*le;ue<De&&(De=ue,Ze=gn)}}}let it=Ke*Zn;if(De<=it*it)break}return g=Math.sqrt(De),Ze}function m(q,oe,pe){let ve=pe*pe,Se=1/0,De=Li(Math.floor((q-pe-c)/Zn),0,h-1),Ze=Li(Math.floor((q+pe-c)/Zn),0,h-1),Ke=Li(Math.floor((oe-pe-u)/Zn),0,f-1),it=Li(Math.floor((oe+pe-u)/Zn),0,f-1);for(let rt=Ke;rt<=it;rt++)for(let wt=De;wt<=Ze;wt++){let Ht=d[rt*h+wt];for(let Dt=0;Dt<Ht.length;Dt++){let Vt=s[Ht[Dt]],Xt=Vt.x-q,gn=Vt.z-oe;Xt*Xt+gn*gn<=ve&&Vt.y<Se&&(Se=Vt.y)}}return Se}let p=Math.ceil(r/4),S=new Float64Array(p*2);for(let q=0;q<p;q++)S[2*q]=s[q*4%r].x,S[2*q+1]=s[q*4%r].z;function M(q,oe){let pe=!1;for(let ve=0,Se=p-1;ve<p;Se=ve++){let De=S[2*ve],Ze=S[2*ve+1],Ke=S[2*Se],it=S[2*Se+1];Ze>oe!=it>oe&&q<(Ke-De)*(oe-Ze)/(it-Ze)+De&&(pe=!pe)}return pe}let y=o.minX-Ds,T=o.minZ-Ds,b=Math.ceil((o.maxX-o.minX+2*Ds)/fn)+1,v=Math.ceil((o.maxZ-o.minZ+2*Ds)/fn)+1,w=new Float32Array(b*v);for(let q=0;q<v;q++)for(let oe=0;oe<b;oe++){let pe=y+oe*fn,ve=T+q*fn,Se=x(pe,ve),De=g,Ze=s[Se],Ke=Ze.width*.5,it=Ze.y;if(De<40){let K=m(pe,ve,24);K<it&&(it=K)}let rt=1;if(!M(pe,ve)){let K=De-Ke+(l(pe/140+31.7,ve/140-8.2)-.5)*70;rt=1-cr(110,200,K)}let wt=l(pe/260,ve/260),Dt=-15+(10+130*Math.pow(s0((wt-.42)/.5),1.5)+6*wt+15)*rt;if(rt>=1){let K=l(pe/90+11.3,ve/90-4.1);Dt=Math.max(Dt,it+6+38*K)}let Vt=cr(Ke+6+12,Ke+6+62,De),Xt=it-.6,gn=Xt+(Dt-Xt)*Vt,I=it+Math.max(0,De-Ke-6-12)*1.2;gn>I&&(gn=I),w[q*b+oe]=gn}let _=null;function E(q,oe){if(_)return _(q,oe);let pe=(q-y)/fn,ve=(oe-T)/fn;pe=Li(pe,0,b-1.000001),ve=Li(ve,0,v-1.000001);let Se=Math.floor(pe),De=Math.floor(ve),Ze=pe-Se,Ke=ve-De,it=w[De*b+Se],rt=w[De*b+Se+1],wt=w[(De+1)*b+Se],Ht=w[(De+1)*b+Se+1],Dt=it+(rt-it)*Ze,Vt=wt+(Ht-wt)*Ze;return Dt+(Vt-Dt)*Ke}let R=(q,oe)=>Math.max(Math.abs(E(q+4,oe)-E(q-4,oe)),Math.abs(E(q,oe+4)-E(q,oe-4)))/8,U=(q,oe,pe)=>{let ve=x(q,oe);return g>=s[ve].width*.5+6+4+pe},H=[],P=[],F=new Float32Array(9),O=(q,oe,pe,ve,Se,De,Ze,Ke,it)=>{let rt=ve-q,wt=Se-oe,Ht=De-pe,Dt=Ze-q,Vt=Ke-oe,Xt=it-pe,gn=wt*Xt-Ht*Vt,I=Ht*Dt-rt*Xt,K=rt*Vt-wt*Dt,le=Math.hypot(gn,I,K)||1,ue=1-Math.abs(I)/le;H.push(q,oe,pe,ve,Se,De,Ze,Ke,it),JS((oe+Se+Ke)/3,ue,.9+.2*i.next(),a,F,0);for(let te=0;te<9;te++)P.push(F[te])},Y=b-1,G=v-1,J=new Float32Array(Y*G);for(let q=0;q<G;q++)for(let oe=0;oe<Y;oe++){let pe=q*b+oe,ve=(w[pe]+w[pe+1]+w[pe+b]+w[pe+b+1])/4;J[q*Y+oe]=Math.floor(ve/Jm)*Jm}let re=-4;for(let q=0;q<G;q++)for(let oe=0;oe<Y;oe++){let pe=J[q*Y+oe],ve=y+oe*fn,Se=T+q*fn,De=ve+fn,Ze=Se+fn;if(pe>re&&(O(ve,pe,Se,ve,pe,Ze,De,pe,Se),O(De,pe,Se,ve,pe,Ze,De,pe,Ze)),oe+1<Y){let Ke=J[q*Y+oe+1],it=Math.min(pe,Ke),rt=Math.max(pe,Ke);rt>it&&rt>re&&(O(De,it,Se,De,rt,Se,De,rt,Ze),O(De,it,Se,De,rt,Ze,De,it,Ze))}if(q+1<G){let Ke=J[(q+1)*Y+oe],it=Math.min(pe,Ke),rt=Math.max(pe,Ke);rt>it&&rt>re&&(O(ve,it,Ze,ve,rt,Ze,De,rt,Ze),O(ve,it,Ze,De,rt,Ze,De,it,Ze))}}_=(q,oe)=>{let pe=Li(Math.floor((q-y)/fn),0,Y-1),ve=Li(Math.floor((oe-T)/fn),0,G-1);return J[ve*Y+pe]};let me=new gt;me.setAttribute("position",new lt(H,3)),me.setAttribute("color",new lt(P,3)),me.computeVertexNormals(),me.computeBoundingSphere();let ye=new ot(me,new st({vertexColors:!0,flatShading:!0,roughness:.94,metalness:0,side:Pt}));ye.receiveShadow=!0;let ce=new ht;ce.name="environment",ce.add(ye);let ie=(o.minX+o.maxX)/2,Q=(o.minZ+o.maxZ)/2,ee=new zn(Qm,Qm,e0,e0);ee.rotateX(-Math.PI/2);let L=ee.attributes.position,B=L.count,X=new Float32Array(B),$=new Float32Array(B);for(let q=0;q<B;q++)X[q]=L.getX(q),$[q]=L.getZ(q);let de=new ot(ee,new st({color:t.seaColor,roughness:.25,metalness:.05,flatShading:!0}));de.position.set(ie,0,Q),ce.add(de);let we=new k(t.sunDir[0],t.sunDir[1],t.sunDir[2]).normalize(),Ae=new ht,V=new vt({uniforms:{topColor:{value:new Re(t.skyTop)},horizonColor:{value:new Re(t.skyHorizon)},sunColor:{value:new Re(t.sunColor)},sunDir:{value:we},night:{value:a?1:0}},vertexShader:oT,fragmentShader:aT,side:Qt,depthWrite:!1,fog:!1}),Ve=new ot(new Es(t0,32,16),V);if(Ve.renderOrder=-10,Ve.frustumCulled=!1,Ae.add(Ve),a){let oe=new Float32Array(1500);for(let Se=0;Se<500;Se++){let De=i.range(0,Kn),Ze=Math.asin(i.range(.05,.98)),Ke=t0*.97;oe[Se*3]=Ke*Math.cos(Ze)*Math.cos(De),oe[Se*3+1]=Ke*Math.sin(Ze),oe[Se*3+2]=Ke*Math.cos(Ze)*Math.sin(De)}let pe=new gt;pe.setAttribute("position",new mt(oe,3));let ve=new Ts(pe,new ir({color:16777215,size:2,sizeAttenuation:!1,fog:!1,depthWrite:!1,transparent:!0,opacity:.9}));ve.frustumCulled=!1,Ae.add(ve)}ce.add(Ae);let ze=new ro(t.hemiSky,t.hemiGround,t.hemiIntensity),Be=new Ai(t.sunColor,t.sunIntensity);Be.castShadow=!0,Be.shadow.mapSize.set(2048,2048);let Ie=Be.shadow.camera;Ie.left=-90,Ie.right=90,Ie.top=90,Ie.bottom=-90,Ie.near=1,Ie.far=600,Ie.updateProjectionMatrix(),Be.shadow.bias=-5e-4,ce.add(ze,Be,Be.target);let qe=n.fog,Fe=n.background,D=new to(t.fogColor,t.fogDensity),A=new Re(t.skyHorizon);n.fog=D,n.background=A;let j=y+(b-1)*fn,xe=T+(v-1)*fn,_e=()=>i.range(y+30,j-30),he=()=>i.range(T+30,xe-30),Ce=(q,oe,pe)=>{let ve=[];for(let Se=0;Se<oe&&ve.length<q;Se++){let De=pe(_e(),he());De&&ve.push(De)}return ve},Le=Ce(320,4e4,(q,oe)=>{let pe=E(q,oe);if(pe<4||pe>95||!U(q,oe,2)||R(q,oe)>.6)return null;let ve=i.range(.8,1.45);return{x:q,y:pe-.3,z:oe,sx:ve,sy:ve*i.range(.9,1.3),sz:ve,ry:i.range(0,Kn),col:16777215,v:i.range(.85,1.15)}}),Ne=Ce(170,4e4,(q,oe)=>{let pe=E(q,oe);if(pe<6||pe>70||!U(q,oe,1.5)||R(q,oe)>.6)return null;let ve=i.range(.8,1.3);return{x:q,y:pe-.3,z:oe,sx:ve,sy:ve*i.range(.9,1.25),sz:ve,ry:i.range(0,Kn),col:16777215,v:i.range(.85,1.15)}}),ke=Ce(110,4e4,(q,oe)=>{let pe=E(q,oe);if(pe<1.8||pe>14||!U(q,oe,2)||R(q,oe)>.5)return null;let ve=i.range(.85,1.25);return{x:q,y:pe-.3,z:oe,sx:ve,sy:ve,sz:ve,ry:i.range(0,Kn),col:16777215,v:i.range(.9,1.1)}});ce.add(Mi(Ls(tT(),.8),new st({vertexColors:!0,flatShading:!0,roughness:.9}),Le)),ce.add(Mi(Ls(nT(),.7),new st({vertexColors:!0,flatShading:!0,roughness:.9}),Ne)),ce.add(Mi(Ls(iT(),.6),new st({vertexColors:!0,flatShading:!0,roughness:.9}),ke));let Ee=Ce(300,3e4,(q,oe)=>{let pe=E(q,oe);if(pe<1.5)return null;let ve=i.range(1.2,4.5);return U(q,oe,ve*.6)?{x:q,y:pe+ve*.15,z:oe,sx:ve,sy:ve*i.range(.55,.9),sz:ve,ry:i.range(0,Kn),col:i.pick(KS),v:i.range(.85,1.15)}:null}),Ue=Ce(3,3e4,(q,oe)=>{if(E(q,oe)>-4)return null;let pe=x(q,oe);if(g<s[pe].width*.5+200||g>800)return null;let ve=i.range(25,45);return{x:q,y:.1*ve,z:oe,sx:ve,sy:ve*.45,sz:ve,ry:i.range(0,Kn),col:10260344,v:1}});ce.add(Mi(Ls(eT(),.42),new st({color:16777215,flatShading:!0,roughness:.95}),Ee.concat(Ue)));let se=[],be=[],ne=[],Me=i.int(3,5),fe=0;for(let q=0;q<4e3&&fe<Me;q++){let oe=_e(),pe=he(),ve=x(oe,pe),Se=s[ve].width*.5;if(g<Se+25||g>Se+80)continue;let De=E(oe,pe);if(De<6||De>40||R(oe,pe)>.35)continue;fe++;let Ze=i.int(7,12);for(let Ke=0;Ke<Ze;Ke++){let it=i.range(0,Kn),rt=Math.sqrt(i.next())*18,wt=oe+Math.cos(it)*rt,Ht=pe+Math.sin(it)*rt,Dt=x(wt,Ht);if(g<s[Dt].width*.5+6+4+4)continue;let Vt=E(wt,Ht);if(Vt<3)continue;let Xt=i.range(4,6.5),gn=i.range(3.5,6),I=i.range(4,6.5),K=i.pick([0,Math.PI/2])+i.range(-.15,.15),le=Vt-1;if(se.push({x:wt,y:le,z:Ht,ry:K,sx:Xt,sy:gn,sz:I,col:i.pick(ZS),v:1}),be.push({x:wt,y:le+gn,z:Ht,ry:K,sx:Xt*1.08,sy:i.range(1.8,2.6),sz:I*1.08}),a)for(let ue of[-1,1]){let te=ue*Xt*.28,Oe=I/2+.03;ne.push({x:wt+te*Math.cos(K)+Oe*Math.sin(K),y:le+gn*.55,z:Ht-te*Math.sin(K)+Oe*Math.cos(K),ry:K})}}}let ge=new st({color:16777215,flatShading:!0,roughness:.85}),W=new st({color:11818298,flatShading:!0,roughness:.8});if(se.length){let q=new cn(1,1,1).translate(0,.5,0),oe=Ls(new In(0,.71,1,4).rotateY(Math.PI/4).translate(0,.5,0),.125);ce.add(Mi(q,ge,se),Mi(oe,W,be))}if(a&&ne.length){let q=new cn(1.2,1.1,.12);ce.add(Mi(q,new Yt({color:16761466}),ne,!1))}if(a){let q=0,oe=0,pe=!1;for(let ve=0;ve<4e3&&!pe;ve++){let Se=_e(),De=he(),Ze=x(Se,De),Ke=s[Ze].width*.5;if(g<Ke+220||g>Ke+420)continue;let it=E(Se,De);it<6||it>30||(q=Se,oe=De,pe=!0)}if(pe){let ve=[],Se=[],De=i.int(9,13);for(let Ze=0;Ze<De;Ze++){let Ke=q+i.range(-110,110),it=oe+i.range(-110,110),rt=E(Ke,it);if(rt<2)continue;let wt=i.range(6,10),Ht=i.range(30,70);ve.push({x:Ke,y:rt,z:it,sx:wt,sy:Ht,sz:wt,col:1777720,v:i.range(.8,1.2)});let Dt=i.pick(jS);for(let Vt=0;Vt<3;Vt++){let Xt=Vt*Kn/3+i.range(0,.5);Se.push({x:Ke+Math.cos(Xt)*wt*.88,y:rt+Ht*.05,z:it+Math.sin(Xt)*wt*.88,ry:-Xt,sy:Ht*.9,col:Dt,v:1})}}ce.add(Mi(new In(.72,1,1,6).translate(0,.5,0),new st({color:16777215,flatShading:!0,roughness:.7}),ve),Mi(new cn(.5,1,.25).translate(0,.5,0),new Yt({color:16777215}),Se,!1))}}{let q=[],oe=[];for(let ve=1;ve<v-1;ve++)for(let Se=1;Se<b-1;Se++){let De=ve*b+Se,Ze=w[De];if(Ze<2||Ze>30)continue;let Ke=x(y+Se*fn,T+ve*fn);if(g<s[Ke].width*.5+60)continue;(w[De-1]<0||w[De+1]<0||w[De-b]<0||w[De+b]<0?q:oe).push(De)}let pe=q.length?q:oe;if(pe.length){let ve=i.pick(pe),Se=ve%b,De=(ve-Se)/b,Ze=new ot(Ls(sT(),.6),new st({vertexColors:!0,flatShading:!0,roughness:.6}));Ze.position.set(y+Se*fn,w[ve]-.5,T+De*fn),Ze.castShadow=!0,ce.add(Ze)}}let Te=Ce(4,2e4,(q,oe)=>{if(E(q,oe)>-3)return null;let pe=x(q,oe);return g<s[pe].width*.5+250||g>900?null:{x:q,y:-.2,z:oe,ry:i.range(0,Kn),col:16777215,v:1}});Te.length&&ce.add(Mi(Ls(rT(),.5),new st({vertexColors:!0,flatShading:!0,roughness:.6}),Te));let C=[],N=[];for(let q=0;q<2e4&&C.length<3;q++){let oe=_e(),pe=he(),ve=x(oe,pe);if(g<s[ve].width*.5+60)continue;let Se=E(oe,pe);Se<55||C.some(De=>Math.hypot(De.x-oe,De.z-pe)<200)||C.push({x:oe,y:Se,z:pe,ry:i.range(0,Kn),speed:i.range(.9,1.5),phase:i.range(0,Kn)})}let z=new cn(.7,14,.22).translate(0,7,0),Z=new st({color:15659507,flatShading:!0,roughness:.6}),ae=null;if(C.length){ce.add(Mi(new In(.8,.35,30,6).translate(0,15,0),Z,C));for(let q of C)N.push(new je().compose(new k(q.x,q.y+30,q.z),new nn().setFromAxisAngle(YS,q.ry),new k(1,1,1)));ae=new Sn(z,Z,C.length*3),ae.castShadow=!0,ce.add(ae)}function Pe(q){if(ae){for(let oe=0;oe<C.length;oe++){let pe=q*C[oe].speed+C[oe].phase;for(let ve=0;ve<3;ve++)i0.makeRotationZ(pe+ve*Kn/3),n0.multiplyMatrices(N[oe],i0),ae.setMatrixAt(oe*3+ve,n0)}ae.instanceMatrix.needsUpdate=!0}}Pe(0);function He(q,oe,pe){Be.position.set(pe.x+we.x*200,pe.y+we.y*200,pe.z+we.z*200),Be.target.position.set(pe.x,pe.y,pe.z),Ae.position.set(pe.x,0,pe.z);for(let ve=0;ve<B;ve++)L.setY(ve,.35*Math.sin(X[ve]*.02+oe*.8)+.25*Math.cos($[ve]*.017-oe*.6));L.needsUpdate=!0,Pe(oe)}function Ge(){n.remove(ce),ce.traverse(q=>{if(q.geometry&&q.geometry.dispose(),q.material){let oe=Array.isArray(q.material)?q.material:[q.material];for(let pe of oe)pe.dispose()}}),Be.shadow.map&&Be.shadow.map.dispose(),ce.clear(),n.fog===D&&(n.fog=qe??null),n.background===A&&(n.background=Fe??null)}return n.add(ce),{group:ce,sun:Be,update:He,dispose:Ge,heightAt:E}}var oc=[.62,.6,.55],Us=[.5,.49,.45],hf=[.72,.3,.18],a0=[.6,.24,.15],ff=[.16,.2,.28],lT=[.2,.38,.3],l0=[.36,.25,.16],po=[[.1,.27,.08],[.14,.34,.1],[.07,.2,.06],[.2,.42,.12]],hr=[[.93,.84,.62],[.9,.74,.5],[.94,.9,.8],[.88,.66,.5]],xn=(n,e,t)=>{let i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)};function rc(n,e,t,i){let s=i*3+1,r=Math.ceil(t/2);return $n(e+2,s+r+1,t+2,1,(o,a,l)=>{let c=o-1,u=l-1;if(a<s){if(c<0||u<0||c>=e||u>=t)return null;if(!(c===0||u===0||c===e-1||u===t-1))return a===s-1?n:null;let d=c===0||c===e-1?u:c,g=c===0||c===e-1?t:e;return a%3===2&&d%3===1&&d<g-1?ff:a%3===2&&d%3===2&&d<g-1&&xn(c,a,u)>.45?lT:a===0?Us:n}let h=a-s;return u>=h-1&&u<=t-h&&h<=r?(c+h)%2?hf:a0:null},.14)}function cT(n){return $n(7,23,7,1,(i,s,r)=>{let o=i-1,a=r-1;if(s<17)return o<0||a<0||o>=5||a>=5?null:o===0||a===0||o===4||a===4?(s===6||s===11||s===14)&&(o===2||a===2)?ff:s===0?Us:n:s===16?n:null;let l=s-17;return i>=l&&i<=6-l&&r>=l&&r<=6-l?(i+r)%2?hf:a0:null},.14)}function uT(n){let r=[];for(let o=0;o<6;o++)r.push([11+(xn(n,o,1)-.5)*9,13+xn(n,o,2)*6,11+(xn(n,o,3)-.5)*9,3.6+xn(n,o,4)*2.4]);return $n(22,24,22,.7,(o,a,l)=>{if(a<12&&Math.abs(o-11+.5)<1.3&&Math.abs(l-11+.5)<1.3)return l0;for(let c of r){let u=o-c[0],h=(a-c[1])*1.25,f=l-c[2];if(u*u+h*h+f*f<c[3]*c[3])return po[Math.floor(xn(o,a,l)*po.length)]}return null},.22)}function hT(){return $n(14,16,8,.5,(n,e,t)=>{let s=5+Math.floor((n-1)/2)*1.6;return n===0?e<5?(e+t)%3?oc:Us:null:n>=1&&n<13&&e<s?e>=s-1?[.42,.42,.44]:Us:n===13&&e<15&&(t===0||t===7)?[.16,.17,.2]:null},.12)}function uf(n,e){let r=e-3-9;return $n(n,e+2,5,1,(o,a,l)=>{let c=o%22,u=a>=e&&(l===0||l===4);if(a>=e)return u?Us:null;if(a>=e-2)return(o+a+l)%3?oc:Us;if(c<4)return(o+a+l)%4?oc:Us;if(a<r)return null;let h=c-4-9+.5,f=a-r;return h*h+f*f>81?(o+a+l)%3?oc:Us:null},.14)}function fT(n){return $n(6,4,6,.5,(t,i,s)=>{let r=t-3+.5,o=s-6/2+.5,a=(i-.8)*1.5,l=2.5+(xn(t+n,i,s)-.5)*1.2;return r*r+a*a+o*o<l*l?po[Math.floor(xn(t,i+n,s)*po.length)]:null},.22)}function dT(){let t=[[.12,.3,.14],[.15,.36,.16],[.1,.25,.12]];return $n(6,20,6,.6,(i,s,r)=>{let o=i-3+.5,a=r-6/2+.5;if(s<2)return Math.abs(o)<.6&&Math.abs(a)<.6?l0:null;let l=(s-2)/18,c=2.6*Math.sin(Math.PI*Math.min(1,.18+l*.82))**.7*(1-l*.55)+.3;return o*o+a*a<c*c?t[Math.floor(xn(i,s,r)*3)]:null},.2)}function o0(n){let r=(a,l)=>{let c=(a-15+.5)/15,u=(l-15+.5)/(30/2),h=Math.hypot(c,u)+(xn(Math.floor(a/3)+n,0,Math.floor(l/3))-.5)*.28,f=Math.max(0,Math.min(1,(.95-h)/.16)),d=14+Math.floor(xn(Math.floor(a/5),n,Math.floor(l/5))*3)*2;return Math.floor(d*f*f*(3-2*f))},o=[];for(let a=0;a<5;a++){let l=Math.floor(15+(xn(n,a,1)-.5)*14),c=Math.floor(15+(xn(n,a,2)-.5)*14);o.push([l,c,r(l,c),hr[Math.floor(xn(n,a,3)*hr.length)],a===0?7:3])}return $n(30,26,30,1.6,(a,l,c)=>{let u=r(a,c);for(let[d,g,x,m,p]of o){let S=Math.abs(a-d),M=Math.abs(c-g),y=p>3?1:2;if(S<=y&&M<=1&&l>=x&&l<x+p)return l===x+p-2&&S!==y&&M===1?ff:m;if(S<=y&&M<=1-(l-x-p)&&l>=x+p&&l<x+p+2)return hf}if(l>=u)return null;if(l===u-1)return xn(a,5,c)>.75?po[0]:[.36,.56,.2];let h=l%5===0?.86:1,f=.93+.14*xn(Math.floor(a/2),l,Math.floor(c/2));return xn(a,l,c)>.965?po[2]:[.74*h*f,.71*h*f,.64*h*f]},.1)}function ur(n,e,t){let i=new Sn(n,e,t.length),s=new je,r=new nn,o=new k,a=new k,l=new k(0,1,0);return t.forEach((c,u)=>{r.setFromAxisAngle(l,c.ry||0),o.set(c.sx??c.s??1,c.sy??c.s??1,c.sz??c.s??1),a.set(c.x,c.y,c.z),s.compose(a,r,o),i.setMatrixAt(u,s),c.color&&i.setColorAt(u,c.color)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,i}function pT(){if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=1024,n.height=192;let e=n.getContext("2d");e.fillStyle="#f2efe8",e.fillRect(0,0,1024,192),e.fillStyle="#d6202a";for(let i of[0,880])for(let s=0;s<2;s++)e.beginPath(),e.moveTo(i+s*72,192),e.lineTo(i+s*72+36,192),e.lineTo(i+s*72+108,0),e.lineTo(i+s*72+72,0),e.fill();e.fillStyle="#23262e",e.font='italic 900 118px "Arial Narrow", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("POLYGON RUSH",512,104);let t=new yi(n);return t.colorSpace=Ct,t.anisotropy=8,t}function c0(n,e,t,i){let s=new ht;s.name="scenery";let r=[],o=()=>{let P=new st({vertexColors:!0,roughness:.9,metalness:0});return r.push(P),P},a=(P,F)=>{F.length&&(r.push(P),s.add(ur(P,o(),F)))},l={x:0,y:0,z:0,heading:0},c=n.length,u=P=>!!Ps(n,(P%c+c)%c,"tunnel"),h=P=>n.pts[Math.floor((P%c+c)%c/n.step)%n.pts.length].width,f=(P,F)=>{let O=1/0;for(let Y=0;Y<n.pts.length;Y+=3){let G=n.pts[Y],J=(G.x-P)*(G.x-P)+(G.z-F)*(G.z-F);J<O&&(O=J)}return Math.sqrt(O)},d=(P,F)=>{let O=Math.floor(P/n.step);for(let Y=0;Y<F/n.step;Y+=4)if(Math.abs(n.pts[(O+Y)%n.pts.length].curv)>.004)return!1;return!u(P)&&!u(P+F/2)&&!u(P+F)},g=[[24,22,-1]];for(let P=380;P<c-220&&g.length<4;P+=70)d(P-10,80)&&(g.push([P,14,t.sign()]),P+=420);let x=[],m=[],p=[],S=[14032938,2777046,15909424,15921906,2793562,9060290,15235614,2042436],M=P=>g.some(([F,O])=>P>F-12&&P<F+O*4+12);for(let[P,F,O]of g)for(let Y=0;Y<F;Y++){let G=P+Y*4,J=O*(h(G)/2+6+.6);It(n,G,J,l);let re=l.heading+O*Math.PI/2,me=Math.sin(l.heading),ye=Math.cos(l.heading),ce=-O*ye,ie=O*me;x.push({x:l.x+ce*3.5,y:l.y-.3,z:l.z+ie*3.5,ry:re});for(let Q=0;Q<6;Q++)for(let ee=0;ee<4;ee++){if(t.next()<.18)continue;let L=-1.6+ee*1.05+t.range(-.15,.15),B=1+Q*1,X=l.x+ce*B+me*L,$=l.z+ie*B+ye*L,de=l.y-.3+2.5+Q*.8,we=new Re(t.pick(S));m.push({x:X,y:de+.4,z:$,ry:l.heading,sx:.5,sy:.8,sz:.36,color:we}),p.push({x:X,y:de+1,z:$,ry:l.heading,sx:.36,sy:.36,sz:.36,color:new Re(t.pick([15317386,13208414,9067066,15847334]))}),m.push({x:X-ce*.12,y:de-.1,z:$-ie*.12,ry:l.heading,sx:.46,sy:.3,sz:.5,color:new Re(t.pick([2042436,2829099,3820138,5916210]))}),p.push({x:X,y:de+1.22,z:$,ry:l.heading,sx:.4,sy:.12,sz:.4,color:new Re(t.pick([2759698,1118481,14032938,15909424,6965802,15921906]))}),t.next()<.22&&m.push({x:X+me*.32,y:de+1.05,z:$+ye*.32,ry:l.heading,sx:.14,sy:.6,sz:.14,color:we})}}if(a(hT(),x),m.length){let P=new cn(1,1,1);r.push(P);let F=new st({roughness:.85});r.push(F),s.add(ur(P,F,m),ur(P,F,p));let O=x.map(Y=>({x:Y.x,y:Y.y+8.2,z:Y.z,ry:Y.ry,sx:8,sy:.4,sz:4.05,color:new Re(2303534)}));s.add(ur(P,F,O))}let y=pT(),T=new st({map:y,color:y?16777215:15921128,roughness:.7,side:Pt});r.push(T),y&&r.push(y);let b=new zn(1,1);r.push(b);let v=[],w=(P,F)=>{if(u(P))return;let O=F*(h(P)/2+6-.22);It(n,P,O,l),v.push({x:l.x,y:l.y+.52,z:l.z,ry:l.heading+(F<0?-Math.PI/2:Math.PI/2),sx:9,sy:.92,sz:1})};for(let P=120;P<240;P+=13)w(P,-1);for(let P=30;P<110;P+=13)w(P,1);for(let P=400;P<c-80;P+=260)w(P,-1),w(P+13,-1),w(P+120,1);if(v.length){let P=ur(b,T,v);P.castShadow=!1,s.add(P)}let _=[[],[],[]];for(let P=130;P<c-20;P+=t.range(13,28)){if(M(P)||u(P)||u(P+12)||u(P-12))continue;let O=(t.next()<.82?-1:1)*(h(P)/2+6+t.range(3.4,6.5));It(n,P,O,l);let Y=i?i(l.x,l.z):l.y;Y<1.5||_[t.int(0,2)].push({x:l.x,y:Y-.2,z:l.z,ry:t.range(0,6.28),s:t.range(1.3,2.05)})}if(_.forEach((P,F)=>a(uT(11+F*7),P)),i){let P=[];for(let J=200;J<c-100;J+=45)for(let re of[-1,1]){let me=re*t.range(70,150);It(n,J,me,l);let ye=i(l.x,l.z);ye>l.y+6&&ye>6&&f(l.x,l.z)>55&&P.push({x:l.x,z:l.z,y:ye,score:ye-l.y+t.range(0,4)})}P.sort((J,re)=>re.score-J.score);let F=[];for(let J of P){if(F.length>=4)break;F.every(re=>Math.hypot(re.x-J.x,re.z-J.z)>220)&&F.push(J)}let O=[{geo:rc(hr[0],8,7,2),items:[]},{geo:rc(hr[1],10,7,3),items:[]},{geo:rc(hr[2],7,6,2),items:[]},{geo:rc(hr[3],9,8,3),items:[]}],Y=[],G=[];for(let J of F){for(let re=0;re<2;re++){let me=J.x+t.range(-12,12),ye=J.z+t.range(-12,12);f(me,ye)<45||(Y.push({x:me,y:i(me,ye)-.5,z:ye,ry:t.int(0,3)*Math.PI/2}),G.push([me,ye]))}for(let re=0;re<60&&O.reduce((me,ye)=>me+ye.items.length,0)<F.length*22;re++){let me=t.range(0,6.28),ye=t.range(8,60),ce=J.x+Math.cos(me)*ye,ie=J.z+Math.sin(me)*ye,Q=i(ce,ie);Q<3||f(ce,ie)<42||G.some(ee=>Math.hypot(ee[0]-ce,ee[1]-ie)<12)||(G.push([ce,ie]),t.pick(O).items.push({x:ce,y:Q-.5,z:ie,ry:t.int(0,3)*Math.PI/2}))}}for(let J of O)a(J.geo,J.items);a(cT(hr[2]),Y)}let E=[[],[]];for(let P=115;P<c-10;P+=t.range(4.5,9))if(!u(P)){if(t.next()<.3){P+=t.range(20,60);continue}for(let F of[-1,1]){if(t.next()<.35)continue;let O=F*(h(P)/2+6+t.range(1.4,2.6));It(n,P,O,l),E[t.int(0,1)].push({x:l.x,y:l.y-.5,z:l.z,ry:t.range(0,6.28),s:t.range(.8,1.4)})}}E.forEach((P,F)=>a(fT(3+F*5),P));let R=[];for(let P=160;P<c-60;P+=t.range(120,220)){let F=t.sign(),O=t.int(5,9);for(let Y=0;Y<O;Y++){let G=P+Y*4.2;if(u(G))continue;It(n,G,F*(h(G)/2+6+4.2),l);let J=i?i(l.x,l.z):l.y;J<1.5||R.push({x:l.x,y:J-.2,z:l.z,ry:t.range(0,6.28),s:t.range(.85,1.2)})}}if(a(dT(),R),i){let P=[[],[],[]],F=[];for(let O=150;O<c-50;O+=t.range(120,220))for(let Y of[-1,1]){if(t.next()<.3)continue;It(n,O,Y*t.range(72,125),l);let G=i(l.x,l.z);G<1||f(l.x,l.z)<56||F.some(J=>Math.hypot(J[0]-l.x,J[1]-l.z)<70)||(F.push([l.x,l.z]),P[t.int(0,2)].push({x:l.x,y:G-3,z:l.z,ry:t.range(0,6.28),s:t.range(1.2,1.9)}))}P.forEach((O,Y)=>a(o0(17+Y*13),O))}{let P=[],F=[],O=new Re(12172998),Y=new Re(7172730);for(let G=0;G<c;G+=4){if(u(G)||M(G))continue;let J=h(G)/2+6-.75;It(n,G,J,l);let re=l.x,me=l.y,ye=l.z,ce=l.heading;P.push({x:re,y:me+.4,z:ye,ry:ce,sx:.12,sy:.8,sz:.12,color:Y}),It(n,G+4,h(G+4)/2+6-.75,l);let ie=(re+l.x)/2,Q=(me+l.y)/2,ee=(ye+l.z)/2,L=Math.hypot(l.x-re,l.z-ye)+.05,B=Math.atan2(l.x-re,l.z-ye);for(let X of[.42,.72])F.push({x:ie,y:Q+X,z:ee,ry:B,sx:.07,sy:.2,sz:L,color:O})}if(P.length){let G=new cn(1,1,1),J=new st({roughness:.35,metalness:.85});r.push(G,J),s.add(ur(G,J,P),ur(G,J,F))}}if(i){let P=[];for(let G=0;G<400&&P.length<16;G++){let J=t.range(n.bounds.minX-420,n.bounds.maxX+420),re=t.range(n.bounds.minZ-420,n.bounds.maxZ+420),me=f(J,re);i(J,re)>-3||me<90||me>520||P.some(ye=>Math.hypot(ye.x-J,ye.z-re)<60)||P.push({x:J,y:-.3,z:re,ry:t.range(0,6.28),s:t.range(.9,1.5)})}let F=[.93,.93,.9],O=[.98,.97,.93],Y=[.55,.36,.2];a($n(5,18,14,.7,(G,J,re)=>{let me=Math.abs(re-6.5),ye=Math.abs(G-2);return J<2?ye<=2-(J===0?1:0)-(me>5?1:0)&&me<7-(J===0?1:0)?J===1&&ye<2?Y:F:null:G===2&&re===7?[.3,.26,.22]:G===2&&re>7&&re<13&&J<17-(re-7)*2.6||G===2&&re<7&&re>1&&J<14-(7-re)*2.4?O:null},.06),P)}{It(n,0,0,l);let P=l.x,F=l.y,O=l.z,Y=l.heading,G=Math.sin(Y),J=Math.cos(Y),re=-J,me=G,ye=(ie,Q,ee)=>f(ie,Q)>ee,ce=!1;for(let ie of[430,500,380,580,660]){for(let Q of[70,130,0,-70,190,-140]){if(ce)break;let ee=P+G*ie+re*Q,L=O+J*ie+me*Q;if(!ye(ee,L,85))continue;let B=i?Math.max(-2,i(ee,L)):F;a(o0(101),[{x:ee,y:B-3,z:L,ry:Y+.6,s:2.3}]);let X=ee-G*95-re*30,$=L-J*95-me*30;if(ye(X,$,45)&&ye(X+re*90,$+me*90,40)&&ye(X-re*90,$-me*90,40)){let de=i?Math.max(-1,i(X,$)):F;a(uf(198,24),[{x:X,y:Math.min(de,F)-5,z:$,ry:Y}])}ce=!0}if(ce)break}}for(let P of[1,-1]){let F=!0;for(let Y of[210,270,330,390])It(n,Y,P*62,l),f(l.x,l.z)<46&&(F=!1);if(!F||P<0)continue;It(n,300,P*62,l);let O=i?i(l.x,l.z):l.y;a(uf(198,22),[{x:l.x,y:O-4,z:l.z,ry:l.heading-Math.PI/2}]);break}let U=-1,H=-1/0;for(let P=300;P<c-300;P+=40){let F=Math.floor(P/n.step),O=0;for(let G=0;G<60;G+=6)O+=Math.abs(n.pts[(F+G)%n.pts.length].curv);let Y=-O*400+t.range(0,1)-(u(P)||u(P+100)?100:0);Y>H&&(H=Y,U=P)}if(U>0)for(let P of[1,-1]){It(n,U+90,P*95,l);let F=i?i(l.x,l.z):l.y;if(F<2)continue;a(uf(198,20),[{x:l.x,y:Math.min(F,l.y)-4,z:l.z,ry:l.heading-Math.PI/2}]);break}return{group:s,dispose(){for(let P of r)P.dispose?.()}}}function mT(n,e){let t=n.length,i=new Float64Array(t),s=0;for(let r=0;r<t;r++){let o=0;s=0;for(let a=Math.max(0,r-e);a<=Math.min(t-1,r+e);a++)s+=n[a],o++;i[r]=s/o}return i}function df(n){let e=n.x.length,t=n.step,i=n.x,s=n.y,r=n.z,o=new Float64Array(e),a=new Float64Array(e),l=new Float64Array(e);for(let v=0;v<e;v++){let w=Math.max(0,v-1),_=Math.min(e-1,v+1),E=i[_]-i[w],R=r[_]-r[w],U=Math.hypot(E,R)||1e-9;o[v]=E/U,a[v]=R/U,l[v]=(s[_]-s[w])/U}let c=new Float64Array(e);for(let v=1;v<e-1;v++){let w=-a[v],_=o[v];c[v]=((o[v+1]-o[v-1])*w+(a[v+1]-a[v-1])*_)/(2*t)}c[0]=c[1],c[e-1]=c[e-2];let u=mT(c,12),h=new Float64Array(e);for(let v=0;v<e;v++)h[v]=Math.min(95,Math.sqrt(30/Math.max(1e-6,Math.abs(u[v]))));for(let v=e-2;v>=0;v--)h[v]=Math.min(h[v],Math.sqrt(h[v+1]**2+80*t));for(let v=1;v<e;v++)h[v]=Math.min(h[v],Math.sqrt(h[v-1]**2+40*t));let f=new Array(e),d=1/0,g=-1/0,x=1/0,m=-1/0,p=1/0,S=0;for(let v=0;v<e;v++){let w=Math.hypot(1,l[v]);f[v]={s:v*t,x:i[v],y:s[v],z:r[v],tx:o[v]/w,ty:l[v]/w,tz:a[v]/w,rx:-a[v],rz:o[v],width:n.width,curv:u[v],vmax:h[v],slope:l[v]},i[v]<d&&(d=i[v]),i[v]>g&&(g=i[v]),r[v]<x&&(x=r[v]),r[v]>m&&(m=r[v]);let _=1/Math.max(1e-9,Math.abs(u[v]));_<p&&(p=_),Math.abs(l[v])>S&&(S=Math.abs(l[v]))}let M=[],y=[];for(let v of n.features)v.type==="tunnel"?M.push({type:"tunnel",s0:v.s0,s1:v.s1,name:v.name}):y.push({s0:v.s0,s1:v.s1,name:v.name});let T=(e-1)*t,b=0;for(let v=0;v<e;v++)b+=t/Math.max(5,h[v]);return{seed:"REAL:"+n.id,attempts:1,open:!0,real:n,raceStart:n.raceStart||0,raceEnd:Math.min(n.raceEnd||T,T),length:T,step:t,count:e,pts:f,features:M,bridges:y,bounds:{minX:d,maxX:g,minZ:x,maxZ:m},stats:{minRadius:p,maxSlope:S,lapTimeEstimate:b,corners:0}}}var u0=["torre","castello","borgo","chiesa","agrumeto","peschereccio","casello"];function gT(n,e,t){let i=[],s=n.length,r=c=>{let u=1/0,h=0;for(let f=0;f<n.count;f+=5){let d=n.pts[f],g=(d.x-c.x)**2+(d.z-c.z)**2;g<u&&(u=g,h=f)}return{dist:Math.sqrt(u),q:n.pts[h]}},o={},a=(c,u)=>(o[c]=(o[c]||0)+1)<=u,l=e.places.map(c=>({p:c,n:r(c)})).filter(c=>c.n.dist<1600&&c.n.q.s>150&&c.n.q.s<s-150).sort((c,u)=>c.n.dist-u.n.dist);for(let{p:c,n:u}of l)i.some(h=>h.x!==void 0&&Math.hypot(h.x-c.x,h.z-c.z)<250)||(c.kind==="castle"?/^torre/i.test(c.name)?a("torre",2)&&i.push({prop:"torre",x:c.x,z:c.z,height:48,label:c.name}):/castel|rocca|forte|fort/i.test(c.name)&&a("castello",3)&&i.push({prop:"castello",x:c.x,z:c.z,width:170,label:c.name}):c.kind==="place"&&(c.rank==="village"||c.rank==="town"||c.rank===void 0)&&(t(c.x,c.z)-u.q.y>120&&u.dist>250?a("borgo",3)&&i.push({prop:"borgo",x:c.x,z:c.z,width:300}):u.dist>90&&u.dist<450&&a("chiesa",3)&&i.push({prop:"chiesa",x:c.x,z:c.z,width:46})));for(let c=900,u=0;c<s-600;c+=1300,u++){let h=n.pts[Math.round(c/n.step)];for(let f of[1,-1]){let d=f*560;if(t(h.x+h.rx*d,h.z+h.rz*d)<=0&&t(h.x+h.rx*d*1.3,h.z+h.rz*d*1.3)<=0)u%2===0&&i.push({prop:"peschereccio",s:c,d:d+u%3*40*f,width:34,sea:!0});else if(u%2===1){let g=f*78,x=t(h.x+h.rx*g,h.z+h.rz*g);x>1&&Math.abs(x-h.y)<14&&i.push({prop:"agrumeto",s:c,d:g,width:70})}}}return i}function h0({track:n,data:e,baked:t,heightAt:i,clearance:s}){let r=new ht;r.name="real-props";let o=[],a=[];if(!t)return{group:r,placed:o,skipped:a,dispose(){}};let l=new ii({vertexColors:!0}),c=new Map,u=n.length,h=(f,d)=>{let g=1/0,x=0;for(let m=0;m<n.count;m+=2){let p=n.pts[m],S=(p.x-f)**2+(p.z-d)**2;S<g&&(g=S,x=m)}return{q:n.pts[x],dist:Math.sqrt(g)}};for(let f of gT(n,e,i)){let d=t[f.prop];if(!d?.cells?.length)continue;let g=d._ext;if(!g){let w=[1/0,1/0,1/0],_=[-1/0,-1/0,-1/0];for(let E=0;E<d.cells.length;E+=4)for(let R=0;R<3;R++)w[R]=Math.min(w[R],d.cells[E+R]),_[R]=Math.max(_[R],d.cells[E+R]+1);g=d._ext=[_[0]-w[0],_[1]-w[1],_[2]-w[2]]}let x=f.height?f.height/g[1]:f.width/Math.max(g[0],g[2]),m=Math.hypot(g[0],g[2])*x/2,p,S;if(f.x!==void 0)p=f.x,S=f.z;else{let w=n.pts[Math.max(0,Math.min(n.count-1,Math.round(f.s/n.step)))];p=w.x+w.rx*f.d,S=w.z+w.rz*f.d}let M=h(p,S);if(M.dist-m<s){if(f.x===void 0||M.dist<1){a.push(f.prop+" : trop pr\xE8s de la route");continue}let w=(m+s+2)/M.dist;if(p=M.q.x+(p-M.q.x)*w,S=M.q.z+(S-M.q.z)*w,M=h(p,S),M.dist-m<s){a.push(f.prop+" : trop pr\xE8s de la route");continue}}let y;if(f.sea){if(i(p,S)>0){a.push(f.prop+" : pas en mer");continue}y=-.12*x*g[1]}else{y=1/0;for(let[w,_]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]])y=Math.min(y,i(p+w*m*.6,S+_*m*.6));y=Math.max(y,.2)-.5}let T=f.prop+"@"+x.toFixed(3),b=c.get(T);b||c.set(T,b=Zm(d.cells,x));let v=new ot(b,l);v.name="prop-"+f.prop,v.position.set(p,y,S),v.rotation.y=Math.atan2(M.q.x-p,M.q.z-S),v.updateMatrix(),v.matrixAutoUpdate=!1,r.add(v),o.push({prop:f.prop,label:f.label||null,s:M.q.s,dist:M.dist,x:p,y,z:S,size:x})}return{group:r,placed:o,skipped:a,dispose(){l.dispose();for(let f of c.values())f.dispose()}}}var pf=.12,xT=8200,vT=(n,e,t=1.08,i=1.45)=>{let s=(n>>16&255)/255,r=(n>>8&255)/255,o=(n&255)/255,a=.3*s+.59*r+.11*o,l=(.38+(a-.38)*1.35)/Math.max(a,.001);s*=l,r*=l,o*=l,a=.3*s+.59*r+.11*o,s=Math.min(1,Math.max(0,(a+(s-a)*i)*t)),r=Math.min(1,Math.max(0,(a+(r-a)*i)*t)),o=Math.min(1,Math.max(0,(a+(o-a)*i)*t)),e[0]=s,e[1]=r,e[2]=o};function fa(n,e,{seaCut:t=.25,yOffset:i=0,tint:s=null}={}){let{cell:r,ix:o,iz:a,h:l,c}=n,u=o.length,h=1/0,f=-1/0,d=1/0,g=-1/0;for(let O=0;O<u;O++)o[O]<h&&(h=o[O]),o[O]>f&&(f=o[O]),a[O]<d&&(d=a[O]),a[O]>g&&(g=a[O]);let x=u?g-d+1:0,m=new Float32Array(u?(f-h+1)*x:0).fill(NaN),p=(O,Y)=>O<h||O>f||Y<d||Y>g?-1:(O-h)*x+(Y-d),S={get(O){if(O<0)return;let Y=m[O];return Y===Y?Y:void 0}},M=new Float32Array(u);for(let O=0;O<u;O++)M[O]=Math.floor(l[O]/10/e)*e,m[(o[O]-h)*x+(a[O]-d)]=M[O];let y=[1,-1,0,0],T=[0,0,1,-1],b=new Float32Array(u*4),v=new Uint8Array(u),w=0;for(let O=0;O<u;O++)if(!(l[O]/10<=t)){v[O]=1,w++;for(let Y=0;Y<4;Y++){let G=S.get(p(o[O]+y[Y],a[O]+T[Y]));G!==void 0&&G<M[O]?(b[O*4+Y]=G,w++):b[O*4+Y]=NaN}}let _=new Float32Array(w*18),E=new Float32Array(w*18),R=new Float32Array(w*18),U=0,H=[0,0,0],P=(O,Y,G,J,re,me,ye,ce,ie,Q,ee,L,B,X,$,de,we,Ae)=>{_[U]=O,_[U+1]=Y,_[U+2]=G,_[U+3]=J,_[U+4]=re,_[U+5]=me,_[U+6]=ye,_[U+7]=ce,_[U+8]=ie,_[U+9]=O,_[U+10]=Y,_[U+11]=G,_[U+12]=ye,_[U+13]=ce,_[U+14]=ie,_[U+15]=Q,_[U+16]=ee,_[U+17]=L;for(let V=0;V<18;V+=3)E[U+V]=B,E[U+V+1]=X,E[U+V+2]=$,R[U+V]=de,R[U+V+1]=we,R[U+V+2]=Ae;U+=18};for(let O=0;O<u;O++){if(!v[O])continue;let Y=M[O];vT(c[O],H),s&&s(H,(o[O]+.5)*r,(a[O]+.5)*r,Y);let G=.92+.16*((o[O]*73856093^a[O]*19349663)>>>0)/4294967295,J=H[0]*G,re=H[1]*G,me=H[2]*G,ye=o[O]*r,ce=a[O]*r,ie=ye+r,Q=ce+r,ee=Y+i;P(ye,ee,ce,ye,ee,Q,ie,ee,Q,ie,ee,ce,0,1,0,J,re,me);let L=.2+.45*J,B=.19+.42*re,X=.17+.38*me,$=b[O*4];$===$&&P(ie,$+i,Q,ie,ee,Q,ie,ee,ce,ie,$+i,ce,1,0,0,L,B,X),$=b[O*4+1],$===$&&P(ye,$+i,ce,ye,ee,ce,ye,ee,Q,ye,$+i,Q,-1,0,0,L,B,X),$=b[O*4+2],$===$&&P(ye,$+i,Q,ye,ee,Q,ie,ee,Q,ie,$+i,Q,0,0,1,L,B,X),$=b[O*4+3],$===$&&P(ie,$+i,ce,ie,ee,ce,ye,ee,ce,ye,$+i,ce,0,0,-1,L,B,X)}let F=new gt;return F.setAttribute("position",new mt(_,3)),F.setAttribute("normal",new mt(E,3)),F.setAttribute("color",new mt(R,3)),F.computeBoundingSphere(),{geo:F,heights:S,key:p,q:M}}function Qi(n,e,t){let i=new Sn(n,e,t.length),s=new je,r=new nn,o=new k,a=new k,l=new k(0,1,0);return t.forEach((c,u)=>{r.setFromAxisAngle(l,c.ry||0),o.set(c.sx??1,c.sy??1,c.sz??1),a.set(c.x,c.y,c.z),s.compose(a,r,o),i.setMatrixAt(u,s),c.color&&i.setColorAt(u,c.color)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.frustumCulled=!1,i}function yT(n){if(typeof document>"u")return null;let e=document.createElement("canvas");e.width=512,e.height=192;let t=e.getContext("2d");t.fillStyle="#0c7a43",t.fillRect(0,0,512,192),t.strokeStyle="#ffffff",t.lineWidth=8,t.strokeRect(8,8,496,176),t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.font="bold 62px Arial, Helvetica, sans-serif",t.fillText(n[0],256,n[1]?70:96,470),n[1]&&(t.font="bold 44px Arial, Helvetica, sans-serif",t.fillText(n[1],256,136,470));let i=new yi(e);return i.colorSpace=Ct,i.anisotropy=8,i}function f0(n,e){e==="near"?n._near=n._near||fa(n.near,1):e==="mid"&&(n._mid=n._mid||fa(n.mid,4,{yOffset:-3}))}function d0(n,e,t,i){let s=e.real,r=new ht;r.name="environment";let o=[],a=se=>(o.push(se),se),l=!!t.night,c=()=>lr(a(new st({vertexColors:!0,roughness:.95,metalness:0,side:Pt})),1,1),u=s._near||fa(s.near,1);s._near=null;let h=new ot(a(u.geo),c());h.receiveShadow=!0,h.name="real-terrain-near";let f=s._mid||fa(s.mid,4,{yOffset:-3});s._mid=null;let d=new ot(a(f.geo),lr(a(new st({vertexColors:!0,roughness:1,side:Pt})),8,.7));d.name="real-terrain-mid";let g=new Re(t.skyHorizon),x=(e.bounds.minX+e.bounds.maxX)/2,m=(e.bounds.minZ+e.bounds.maxZ)/2,p=fa(s.far,60,{tint:(se,be,ne,Me)=>{let fe=Math.hypot(be-x,ne-m),ge=Math.min(.82,1-Math.exp(-fe/3e4)),W=Me>2300?.5:0;se[0]=(se[0]+(1-se[0])*W)*(1-ge)+g.r*ge,se[1]=(se[1]+(1-se[1])*W)*(1-ge)+g.g*ge,se[2]=(se[2]+(1-se[2])*W)*(1-ge)+g.b*ge}}),S=new ot(a(p.geo),a(new Yt({vertexColors:!0,fog:!1,side:Pt})));S.name="real-terrain-far",S.scale.setScalar(pf),S.frustumCulled=!1,S.renderOrder=-5,r.add(h,d,S);let M=(se,be)=>{let ne=s.near.cell,Me=u.heights.get(u.key(Math.floor(se/ne),Math.floor(be/ne)));if(Me!==void 0)return Me;let fe=s.mid.cell,ge=f.heights.get(f.key(Math.floor(se/fe),Math.floor(be/fe)));return ge!==void 0?ge-3:-5},y=new ot(a(new zn(6e4,6e4)),a(new st({color:t.seaColor,roughness:.16,metalness:.1}))),T=jm(y.material);y.rotation.x=-Math.PI/2,y.position.y=.05,y.name="real-sea",r.add(y);let b=new k(...t.sunDir).normalize(),v=a(new vt({side:Qt,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new Re(t.skyTop)},uHor:{value:new Re(t.skyHorizon)},uSun:{value:new Re(t.sunColor)},uSunDir:{value:b}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uTop, uHor, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = mix(uHor, uTop, pow(max(d.y, 0.0), 0.5));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 600.0) * 3.0 + pow(s, 14.0) * 0.25);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`})),w=new ot(a(new Es(xT,32,16)),v);w.renderOrder=-10,w.frustumCulled=!1,r.add(w);let _=n.fog,E=n.background;n.fog=new to(t.fogColor,(t.fogDensity||5e-4)*.3),n.background=new Re(t.skyHorizon);let R=new ro(t.hemiSky,t.hemiGround,t.hemiIntensity),U=new Ai(t.sunColor,t.sunIntensity);U.castShadow=!0,U.shadow.mapSize.set(2048,2048);let H=U.shadow.camera;H.left=-90,H.right=90,H.top=90,H.bottom=-90,H.near=1,H.far=500,U.shadow.bias=-5e-4,r.add(R,U,U.target);let P=s.buildings,F=[15983808,15321498,16117730,14924172,14472128,15784368,13620956],O=[11884346,11030070,14275268,13222064,9390646],Y=[],G=[],J=60,re=new Map;for(let se=0;se<e.count;se+=3){let be=e.pts[se],ne=Math.floor(be.x/J)+","+Math.floor(be.z/J),Me=re.get(ne);Me||re.set(ne,Me=[]),Me.push(be)}let me=s.width/2+6+2,ye=(se,be,ne,Me)=>{let fe=null,ge=Math.max(ne,Me)+me;for(let W=Math.floor((se-ge)/J);W<=Math.floor((se+ge)/J);W++)for(let Te=Math.floor((be-ge)/J);Te<=Math.floor((be+ge)/J);Te++){let C=re.get(W+","+Te);if(C)for(let N of C){let z=Math.max(0,Math.abs(N.x-se)-ne),Z=Math.max(0,Math.abs(N.z-be)-Me);z*z+Z*Z<me*me&&(fe===null||N.y<fe)&&(fe=N.y)}}return fe},ce=0,ie=0;for(let se=0;se<P.x.length;se++){let ne=(P.l[se]>0?Math.min(P.l[se],9):1+Math.floor(i.next()*3)+(P.w[se]*P.d[se]>300?1:0))*3.1,Me=Math.max(M(P.x[se],P.z[se]),.3),fe=ye(P.x[se],P.z[se],P.w[se]/2+.3,P.d[se]/2+.3);if(fe!==null){let ge=fe-3.2-Me;if(ge<3){ce++;continue}ne>ge&&(ne=ge,ie++)}Y.push({x:P.x[se],y:Me+ne/2-.5,z:P.z[se],sx:P.w[se],sy:ne+1,sz:P.d[se],color:new Re(i.pick(F))}),G.push({x:P.x[se],y:Me+ne+.35,z:P.z[se],sx:P.w[se]+.6,sy:.7,sz:P.d[se]+.6,color:new Re(i.pick(O))})}let Q=a(new cn(1,1,1));if(Y.length){let se=Km(lr(a(new st({roughness:.9})),1.5,.8)),be=a(new st({roughness:.85})),ne=Qi(Q,se,Y),Me=Qi(Q,be,G);ne.name="real-buildings",ne.castShadow=!0,r.add(ne,Me)}let ee=s.trees,L=0;if(ee&&ee.x.length){let se=[],be=[],ne=new Re(7031346),Me=new Re;for(let ge=0;ge<ee.x.length;ge++){let W=ee.x[ge],Te=ee.z[ge];if(ye(W,Te,2.5,2.5)!==null)continue;let C=Math.sin(W*12.9898+Te*78.233)*43758.5453,N=ee.r?ee.r[ge]/1e3:C-Math.floor(C),z=ee.y[ge],Z=.75+.5*N;if(ee.k[ge])if(N<.55){let ae=7+6*N;be.push({x:W,y:z+ae/2+.6,z:Te,sx:1.7,sy:ae,sz:1.7,color:Me.setRGB(.1*Z,.26*Z,.13*Z).clone()})}else{let ae=6+5*N;se.push({x:W,y:z+ae/2,z:Te,sx:.7,sy:ae,sz:.7,color:ne}),be.push({x:W,y:z+ae+.9,z:Te,sx:6.5,sy:2.2,sz:6.5,color:Me.setRGB(.14*Z,.34*Z,.16*Z).clone()})}else{let ae=3+2.4*N;se.push({x:W,y:z+.9,z:Te,sx:.6,sy:1.8,sz:.6,color:ne}),be.push({x:W,y:z+1.6+ae/2,z:Te,sx:ae,sy:ae*.85,sz:ae,color:Me.setRGB(.3*Z,.44*Z,.2*Z).clone()})}}L=be.length;let fe=lr(a(new ii),1.1,.9);if(se.length){let ge=Qi(Q,a(new ii),se);ge.name="real-trunks",r.add(ge)}if(be.length){let ge=Qi(Q,fe,be);ge.name="real-trees",r.add(ge)}}let B={x:0,y:0,z:0,heading:0},X=s.width/2,$=new Re(12170925),de=new Re(10131343),we=[],Ae=[];for(let se of e.bridges){for(let be=se.s0+6;be<se.s1-2;be+=34){It(e,be,0,B);let ne=M(B.x,B.z),Me=B.y-1.6-ne;Me<3||(we.push({x:B.x,y:ne+Me/2,z:B.z,ry:B.heading,sx:X*1.5,sy:Me,sz:2.4,color:de}),we.push({x:B.x,y:B.y-1.2,z:B.z,ry:B.heading,sx:X*2+5,sy:1.2,sz:3.6,color:$}))}for(let be=se.s0;be<se.s1;be+=8){for(let ne of[-1,1])It(e,be+4,ne*(X+6+.4),B),Ae.push({x:B.x,y:B.y-.9,z:B.z,ry:B.heading,sx:.9,sy:1.8,sz:8.3,color:$});It(e,be+4,0,B),Ae.push({x:B.x,y:B.y-1.25,z:B.z,ry:B.heading,sx:X*2+12,sy:.9,sz:8.3,color:de})}}let V=lr(a(new st({roughness:.9})),.8,.6);if(we.length){let se=Qi(Q,V,we);se.castShadow=!0,se.name="real-piers",r.add(se)}Ae.length&&r.add(Qi(Q,V,Ae));let Ve=e.length,ze=se=>!!Ps(e,Math.max(0,Math.min(Ve-1,se)),"tunnel"),Be=[],Ie=[],qe=new Re(12764876),Fe=new Re(8225160),D={x:0,y:0,z:0,heading:0};for(let se=0;se<Ve-4;se+=4)if(!ze(se))for(let be of[-1,1]){let ne=be*(X+6-.7);It(e,se,ne,B),It(e,se+4,ne,D),Be.push({x:B.x,y:B.y+.4,z:B.z,ry:B.heading,sx:.12,sy:.8,sz:.12,color:Fe});let Me=Math.hypot(D.x-B.x,D.z-B.z)+.05,fe=Math.atan2(D.x-B.x,D.z-B.z);for(let ge of[.42,.72])Ie.push({x:(B.x+D.x)/2,y:(B.y+D.y)/2+ge,z:(B.z+D.z)/2,ry:fe,sx:.07,sy:.2,sz:Me,color:qe})}let A=a(new st({roughness:.35,metalness:.85}));Be.length&&r.add(Qi(Q,A,Be),Qi(Q,A,Ie));let j=h0({track:e,data:s,baked:s.props,heightAt:M,clearance:me});r.add(j.group),o.push(j);let xe=[];for(let se of s.places){if(se.kind!=="place")continue;let be=1/0,ne=0;for(let fe=0;fe<e.count;fe+=10){let ge=e.pts[fe],W=(ge.x-se.x)**2+(ge.z-se.z)**2;W<be&&(be=W,ne=fe)}let Me=Math.sqrt(be);Me<2600&&xe.push({name:se.name,s:ne*e.step,dist:Me})}xe.sort((se,be)=>se.s-be.s);let _e=a(new zn(1,1)),he=[];for(let se of xe){if(he.some(ge=>Math.abs(ge.s-se.s)<500)||se.s<120||se.s>Ve-150||ze(se.s)||ze(se.s-60))continue;he.push(se);let be=yT([se.name,se.dist>600?`${(se.dist/1e3).toFixed(1).replace(".",",")} km`:""]),ne=a(new Yt({map:be,color:be?16777215:817731,side:Pt}));be&&a(be),It(e,se.s,X+6+2.2,B);let Me=new ot(_e,ne);Me.scale.set(7.5,2.8,1),Me.position.set(B.x,B.y+5.2,B.z),Me.rotation.y=B.heading+Math.PI,r.add(Me);let fe=new ot(Q,A);fe.scale.set(.3,5.2,.3),fe.position.set(B.x,B.y+2.2,B.z),r.add(fe)}let Ce=(se,be,ne)=>{let Me=Math.sin(se*127.1+be*311.7+ne*74.7)*43758.5453;return Me-Math.floor(Me)},Le=$n(5,5,5,.5,(se,be,ne)=>{let Me=se-2,fe=ne-2,ge=(be-1.6)*1.2;if(Me*Me+ge*ge+fe*fe>5.4+Ce(se,be,ne))return null;let W=Ce(se+3,be,ne+7);return W>.72?[.92,.42,.6]:W>.62?[.96,.93,.9]:[.16,.38,.17]},.2);a(Le);let Ne=[];for(let se=60;se<Ve-20;se+=i.range(5,11)){if(ze(se)||e.bridges.some(ne=>se>ne.s0-4&&se<ne.s1+4))continue;if(i.next()<.25){se+=i.range(15,50);continue}let be=i.next()<.5?-1:1;It(e,se,be*(X+6+i.range(1.2,2.4)),B),Ne.push({x:B.x,y:B.y-.5,z:B.z,ry:i.range(0,6.28),sx:i.range(.8,1.3),sy:i.range(.8,1.3),sz:i.range(.8,1.3)})}if(Ne.length){let se=Qi(Le,a(new st({vertexColors:!0,roughness:.9})),Ne);se.castShadow=!0,se.name="real-oleanders",r.add(se)}n.add(r);let ke=new k;function Ee(se,be,ne){w.position.set(ne.x,0,ne.z),y.position.x=ne.x,y.position.z=ne.z,T.value=be,U.position.copy(ne).addScaledVector(b,200),U.target.position.copy(ne),ke.copy(ne),S.position.set(ke.x*(1-pf),-2,ke.z*(1-pf))}function Ue(){n.remove(r),n.fog&&n.fog!==_&&(n.fog=_||null),n.background=E||null;for(let se of o)se.dispose?.()}return{group:r,sun:U,update:Ee,dispose:Ue,heightAt:M,places:he,allPlaces:xe,buildingStats:{kept:Y.length,dropped:ce,lowered:ie},treeCount:L,props:j.placed,propsSkipped:j.skipped}}var _T=[-5,0,5],ac=[{id:"car",len:4.4,w:1.9,h:1.45,v:[31,37],lanes:[0,1,2]},{id:"van",len:5.8,w:2.1,h:2.35,v:[28,32],lanes:[1,2]},{id:"bus",len:11.5,w:2.5,h:3.3,v:[25,28],lanes:[2]},{id:"truck",len:13.5,w:2.5,h:3.8,v:[22,25],lanes:[2]}],p0=[0,0,0,0,0,1,1,2,3,3],MT=.45,bT=1,ST=1.5,TT=12,ET=5,wT=3,AT=5;function m0({rng:n,count:e=22,density:t=1}={}){let i=[];for(let h=0;h<e;h++)i.push({id:h,type:ac[0],lane:1,s:-1e9,d:0,speed:30,cruise:30,color:0,passed:!0,hitT:0});let s={vehicles:i,combo:0,comboT:0,meter:0,nearMisses:0,hits:0,events:[],density:t},r=!1;function o(h,f,d=30,g=30){let x=0;for(let m of i)m!==f&&m.s>h-d&&m.s<h+g&&(x|=1<<m.lane);return x}function a(h,f){let d=ac[p0[n.int(0,p0.length-1)]],g=o(f,h,45,45),x=d.lanes.filter(p=>!(g&1<<p));return([0,1,2].filter(p=>g&1<<p).length>=2||!x.length)&&(f+=60,x=d.lanes),h.type=d,h.lane=x[n.int(0,x.length-1)],h.d=_T[h.lane]+n.range(-.35,.35),h.cruise=h.speed=n.range(d.v[0],d.v[1]),h.color=n.int(0,7),h.s=f,h.passed=!1,h.hitT=0,f}function l(h,f=350){let d=h+f;for(let g of i)d=a(g,d)+n.range(70,190)/t;r=!0}function c(h,f,d){s.events.length=0,r||l(f.s);let g=-1/0;for(let x of i)x.s>g&&(g=x.s);for(let x of i){let m=x.cruise,p=0,S=1/0;for(let M of i){if(M===x||M.lane===x.lane)continue;let y=M.s-x.s;y>-8&&y<45&&(p|=1<<M.lane,M.speed<S&&(S=M.speed))}p===(7&~(1<<x.lane))&&(m=Math.min(m,S-.5));for(let M of i){if(M===x||M.lane!==x.lane)continue;let y=M.s-x.s-(M.type.len+x.type.len)/2;y>0&&y<25&&(m=Math.min(m,M.speed))}x.speed+=(m-x.speed)*Math.min(1,h*1.5),x.s+=x.speed*h,x.hitT>0&&(x.hitT-=h),x.s<f.s-70&&(g=a(x,Math.max(g+n.range(70,190)/t,f.s+650)))}for(let x of d){let m=x.state;for(let p of i){let S=m.s-p.s,M=m.d-p.d,y=p.type.len/2+bT,T=p.type.w/2+MT;if(Math.abs(S)<y&&Math.abs(M)<T){if(p.hitT<=0||x.isPlayer){let b=M!==0?Math.sign(M):m.d<p.d?-1:1;m.d=p.d+b*(T+.05),m.speed>p.speed*.95&&(m.speed=Math.max(p.speed*.9,m.speed*.5),m.boostT=0,p.hitT<=0&&(m.events?.push("hit"),x.isPlayer&&(s.hits++,s.combo=0,s.meter=0,s.events.push({type:"hit",vehicle:p})))),p.hitT=1.2}x.isPlayer&&(p.passed=!0)}else if(x.isPlayer&&!p.passed&&S>y&&(p.passed=!0,Math.abs(M)<T+ST&&m.speed-p.speed>TT)){s.nearMisses++,s.combo++,s.comboT=ET,s.meter++;let b=!1;s.meter>=wT&&(s.meter=0,m.boostCharges<AT&&(m.boostCharges+=1,b=!0)),s.events.push({type:"near",vehicle:p,combo:s.combo,boost:b})}}}s.comboT>0&&(s.comboT-=h,s.comboT<=0&&(s.combo=0))}function u(h){for(let f of i)f.s+=h}return Object.assign(s,{update:c,reset:l,shift:u})}var xf="wss://tracker.openwebtorrent.com",g0=[{urls:"stun:stun.cloudflare.com:3478"}],RT=4,mf=7,CT=25e3,x0=()=>{let n=crypto.getRandomValues(new Uint8Array(20)),e="";for(let t of n)e+=String.fromCharCode(t);return e},gf=n=>Array.from(n,e=>e.charCodeAt(0).toString(16).padStart(2,"0")).join("");async function PT(n){let e=new TextEncoder().encode("polygon-rush/v3/"+String(n).trim().toUpperCase()),t=new Uint8Array(await crypto.subtle.digest("SHA-1",e)),i="";for(let s of t)i+=String.fromCharCode(s);return i}function v0(n){return n.iceGatheringState==="complete"?Promise.resolve():new Promise(e=>{let t=setTimeout(e,2500);n.addEventListener("icegatheringstatechange",()=>{n.iceGatheringState==="complete"&&(clearTimeout(t),e())})})}async function y0(n,{onPeer:e,onLeave:t,onMessage:i,onStatus:s}={}){let r=await PT(n),o=x0(),a=gf(o),l=new Map,c=new Map,u=null,h=null,f=!1,d=0,g=T=>s?.(T);function x(T,b,v){let w=l.get(T);if(w&&w.ch.readyState==="open"){try{b.close()}catch{}return}let _={id:T,pc:b,ch:v,send(R){v.readyState==="open"&&v.send(JSON.stringify(R))}};l.set(T,_),v.onmessage=R=>{let U;try{U=JSON.parse(R.data)}catch{return}U&&typeof U=="object"&&i?.(_,U)};let E=()=>{l.get(T)===_&&(l.delete(T),t?.(_));try{b.close()}catch{}};v.onclose=E,b.addEventListener("connectionstatechange",()=>{["failed","closed","disconnected"].includes(b.connectionState)&&E()}),e?.(_)}function m(T,b,v){b.readyState==="open"?x(v,T,b):b.onopen=()=>x(v,T,b)}async function p(){let T=[];for(let b=0;b<RT&&l.size+b<mf;b++){let v=new RTCPeerConnection({iceServers:g0}),w=v.createDataChannel("jeu",{ordered:!1,maxRetransmits:0});v._ch=w,await v.setLocalDescription(await v.createOffer()),await v0(v);let _=x0();c.set(_,v),setTimeout(()=>{if(c.get(_)===v){c.delete(_);try{v.close()}catch{}}},5e4),T.push({offer_id:_,offer:{type:"offer",sdp:v.localDescription.sdp}})}return T}async function S(T){if(!u||u.readyState!==1)return;let b=l.size<mf?await p():[];if(!u||u.readyState!==1)return;let v={action:"announce",info_hash:r,peer_id:o,numwant:b.length,uploaded:0,downloaded:0,left:1,offers:b};T&&(v.event=T),u.send(JSON.stringify(v))}async function M(T){let b;try{b=JSON.parse(T)}catch{return}if(!(!b||b.info_hash!==r)){if(b["failure reason"]){g("Le tracker refuse : "+b["failure reason"]);return}if(b.peer_id!==o){if(b.offer&&b.peer_id&&b.offer_id){let v=gf(b.peer_id);if(l.has(v)||l.size>=mf)return;let w=new RTCPeerConnection({iceServers:g0});w.ondatachannel=_=>m(w,_.channel,v);try{await w.setRemoteDescription(b.offer),await w.setLocalDescription(await w.createAnswer()),await v0(w),u?.send(JSON.stringify({action:"announce",info_hash:r,peer_id:o,to_peer_id:b.peer_id,offer_id:b.offer_id,answer:{type:"answer",sdp:w.localDescription.sdp}}))}catch{try{w.close()}catch{}}}else if(b.answer&&b.offer_id){let v=c.get(b.offer_id);if(!v)return;c.delete(b.offer_id);let w=gf(b.peer_id);if(l.has(w)){try{v.close()}catch{}return}m(v,v._ch,w);try{await v.setRemoteDescription(b.answer)}catch{try{v.close()}catch{}}}}}}function y(){f||(g("Connexion au tracker\u2026"),u=new WebSocket(xf),u.onopen=()=>{d=0,g("En attente d'autres joueurs"),S("started"),clearInterval(h),h=setInterval(()=>S(),CT)},u.onmessage=T=>{typeof T.data=="string"&&M(T.data)},u.onclose=()=>{clearInterval(h),!f&&(g("Tracker injoignable, nouvel essai\u2026"),setTimeout(y,Math.min(15e3,2e3*2**d++)))},u.onerror=()=>{})}return y(),{id:a,peers:l,broadcast(T){let b=JSON.stringify(T);for(let v of l.values())v.ch.readyState==="open"&&v.ch.send(b)},stopAnnouncing(){clearInterval(h);try{u?.close()}catch{}f=!0},leave(){f=!0,clearInterval(h);try{u?.close()}catch{}for(let T of l.values())try{T.pc.close()}catch{}for(let T of c.values())try{T.close()}catch{}l.clear(),c.clear()}}}function _0(n){let e=[0];for(let t of n)e.push(e[e.length-1]+t.length);return e}function M0(n,e,t,i){return n[e]+(i-(t.raceStart||0))}function b0(n,e,t,i){return(t.raceStart||0)+(i-n[e])}function S0(){let n=null,e=0,t=null;return{get known(){return!!n},get age(){return n?(performance.now()-e)/1e3:1/0},push(i,s){!Number.isFinite(i.g)||!Number.isFinite(i.d)||!Number.isFinite(i.v)||(n={g:i.g,d:Math.max(-14,Math.min(14,i.d)),v:Math.max(0,Math.min(140,i.v)),l:+i.l||0,y:+i.y||0,b:!!i.b},e=s)},sample(i,s){if(!n)return null;let r=Math.min(.5,Math.max(0,(i-e)/1e3)),o={g:n.g+n.v*r,d:n.d,v:n.v,l:n.l,y:n.y,b:n.b};if(!t||Math.abs(t.g-o.g)>60)t={...o};else{let a=Math.min(1,s*10);t.g+=t.v*s+(o.g-(t.g+t.v*s))*a,t.d+=(o.d-t.d)*a,t.v+=(o.v-t.v)*a,t.l+=(o.l-t.l)*a,t.y+=(o.y-t.y)*a,t.b=o.b}return t}}}var da=[[14885934,2312392],[2005987,15921906],[3129179,1053720],[15902491,1776411],[10178016,15921906],[15751836,1776411],[2279360,1776411],[15921906,14885934]];function pa(n){return String(n||"").replace(/[^\p{L}\p{N} _.-]/gu,"").trim().slice(0,14)||"Pilote"}function T0(n){return String(n||"").toUpperCase().replace(/[^A-Z0-9-]/g,"").slice(0,16)}var IT=15;async function E0(n,e,{onChange:t,onStart:i,onStatus:s}={}){let r=new Map,o=pa(e),a=null,l=0,c=()=>t?.(),u=await y0(n,{onStatus:s,onPeer(f){r.set(f.id,{id:f.id,name:"Pilote",remote:S0(),finished:!1,finishTime:null,gone:!1,peer:f}),f.send({t:"hi",name:o}),a&&f.send({t:"busy"}),c()},onLeave(f){let d=r.get(f.id);d&&(a?d.gone=!0:r.delete(f.id),c())},onMessage(f,d){let g=r.get(f.id);g&&(d.t==="hi"?(g.name=pa(d.name),c()):d.t==="s"?g.remote.push(d,performance.now()):d.t==="fin"&&Number.isFinite(d.time)?(g.finished=!0,g.finishTime=d.time,c()):d.t==="start"&&!a&&f.id===h.hostId?(a={stage:Math.max(1,Math.floor(Number(d.stage))||1)},u.stopAnnouncing(),i?.(a)):d.t==="busy"&&(g.busy=!0,c()))}}),h={code:n,id:u.id,name:o,players:r,get started(){return a},get hostId(){let f=u.id;for(let d of r.keys())d<f&&(f=d);return f},get isHost(){return h.hostId===u.id},roster(){let f=[{id:u.id,name:o,me:!0},...Array.from(r.values()).filter(d=>!d.busy)];return f.sort((d,g)=>d.id<g.id?-1:1),f.map((d,g)=>({...d,color:da[g%da.length][0],accent:da[g%da.length][1]}))},start(f){return a||!h.isHost?!1:(a={stage:f},u.broadcast({t:"start",stage:f}),u.stopAnnouncing(),!0)},sendState(f,d,g){f-l<1e3/IT||(l=f,u.broadcast({t:"s",g:Math.round(d*100)/100,d:Math.round(g.d*100)/100,v:Math.round(g.speed*100)/100,l:Math.round((g.lean||0)*1e3)/1e3,y:Math.round((g.yaw||0)*1e3)/1e3,b:g.boostT>0?1:0}))},sendFinish(f){u.broadcast({t:"fin",time:f})},leave(){u.leave()}};return h}var w0="polygon-rush-name",fr=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),LT=n=>"#"+n.toString(16).padStart(6,"0");function A0(){let n="ABCDEFGHJKMNPQRSTUVWXYZ23456789",e=crypto.getRandomValues(new Uint8Array(6));return"ETNA-"+Array.from(e,t=>n[t%n.length]).join("")}async function R0(n,e){let t="";try{t=localStorage.getItem(w0)||""}catch{}let i=await n({initial:3,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">Course \xE0 plusieurs \xB7 ${fr(e.title)}</p>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-name-in">Pseudo</label>
    <div class="pr-seedbox"><input id="pr-name-in" class="pr-input" type="text" value="${fr(t)}" maxlength="14" autocomplete="off" spellcheck="false" data-nav data-name></div>
  </div>
  <div class="pr-seedrow pr-slide" style="--i:3">
    <label class="pr-lbl" for="pr-code-in">Code du salon</label>
    <div class="pr-seedbox">
      <input id="pr-code-in" class="pr-input" type="text" value="${fr(A0())}" maxlength="16" autocomplete="off" spellcheck="false" data-nav data-code style="width:min(70vw,13em)">
      <button type="button" class="pr-btn pr-btn-ico" data-nav data-act="dice" title="Nouveau code" aria-label="Nouveau code">\u{1F3B2}</button>
    </div>
  </div>
  <div class="pr-btns pr-slide" style="--i:4">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="go">Entrer dans le salon</button>
    <button type="button" class="pr-btn" data-nav data-act="back">Retour</button>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">Donnez le m\xEAme code \xE0 vos amis : tous ceux qui l'entrent se retrouvent ici.<br>
  Connexion directe entre joueurs : votre adresse IP est visible des autres joueurs, du tracker (${fr(xf.replace("wss://",""))}) et du serveur STUN de Cloudflare.</p>
</section>`,actions:{dice:u=>{let h=u.closest(".pr-screen").querySelector("[data-code]");h&&(h.value=A0())},back:(u,h)=>h(null),go:(u,h)=>{let f=u.closest(".pr-screen"),d=T0(f.querySelector("[data-code]").value),g=pa(f.querySelector("[data-name]").value);if(d.length<4){f.querySelector("[data-code]").focus();return}h({code:d,name:g})}}});if(!i)return null;try{localStorage.setItem(w0,i.name)}catch{}let s=null,r=()=>{},o="Connexion au tracker\u2026",a=null;try{s=await E0(i.code,i.name,{onChange:()=>r(),onStatus:u=>{o=u,r()},onStart:u=>a?.({stage:u.stage})})}catch(u){return console.warn("Salon indisponible :",u),null}let l=e.stages.map((u,h)=>`<option value="${h+1}">${h+1} \xB7 ${fr(u.subtitle)}</option>`).join(""),c=await n({initial:0,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">Salon</p>
  <div class="pr-logo pr-slide" style="--i:1;font-size:.55em"><span class="pr-logo-b" style="user-select:all">${fr(i.code)}</span></div>
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
</section>`,onMount(u,h){if(a=h,s.started){h({stage:s.started.stage});return}r=()=>{let f=u.querySelector("[data-list]");if(!f)return;let d=s.roster(),g=s.hostId;f.innerHTML=d.map(m=>`<li${m.me?' class="pr-me"':""}><span style="display:inline-block;width:.8em;height:.8em;border-radius:50%;background:${LT(m.color)};margin-right:.6em"></span><span>${fr(m.name)}${m.me?" (vous)":""}</span><b>${m.id===g?"h\xF4te":""}</b></li>`).join(""),u.querySelector("[data-status]").textContent=d.length>1?`${d.length} joueurs dans le salon`+(s.isHost?" \xB7 \xE0 vous de lancer la course":" \xB7 l'h\xF4te lance la course"):o;let x=u.querySelector("[data-start]");x.style.display=s.isHost?"":"none",x.disabled=d.length<2,x.style.opacity=d.length<2?"0.45":"",u.querySelector("[data-hostrow]").style.display=s.isHost?"":"none"},r()},actions:{quit:(u,h)=>h(null),start:(u,h)=>{if(!s.isHost||s.roster().length<2)return;let f=Number(u.closest(".pr-screen").querySelector("[data-from]").value)||1;s.start(f)&&h({stage:f})}}});return r=()=>{},a=null,c?{session:s,stage:c.stage}:(s.leave(),null)}var DT=[14212578,12067627,2051996,3093304,15788504,9080726,1928010,14722347];function Fs(n){let e=[],t=[],i=[],s=[[1,0,0,[1,-1,-1,1,1,-1,1,1,1,1,-1,1]],[-1,0,0,[-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1]],[0,1,0,[-1,1,1,1,1,1,1,1,-1,-1,1,-1]],[0,-1,0,[-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1]],[0,0,1,[1,-1,1,1,1,1,-1,1,1,-1,-1,1]],[0,0,-1,[-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1]]];for(let[o,a,l,c,u,h,f=1,d=1,g=1]of n)for(let[x,m,p,S]of s)for(let M of[0,1,2,0,2,3])e.push(o+S[M*3]*c/2,a+S[M*3+1]*u/2,l+S[M*3+2]*h/2),t.push(x,m,p),i.push(f,d,g);let r=new gt;return r.setAttribute("position",new lt(e,3)),r.setAttribute("normal",new lt(t,3)),r.setAttribute("color",new lt(i,3)),r}var lc=[.12,.16,.22],NT=[.07,.07,.08],cc=[.95,.08,.06],uc=[1,.95,.75],UT=[.86,.87,.88],FT=[.2,.21,.23];function hc(n,e,t,i){let s=[];for(let r of i)for(let o of[-1,1])s.push([o*(n/2-.12),t,r,.3,t*2,t*2,...NT]);return s}function OT(n){let{len:e,w:t,h:i}=n,s=-e/2,r=e/2,o=[[-t/2+.3,.75,s-.02,.4,.22,.08,...cc],[t/2-.3,.75,s-.02,.4,.22,.08,...cc],[-t/2+.3,.7,r+.02,.4,.2,.08,...uc],[t/2-.3,.7,r+.02,.4,.2,.08,...uc]];if(n.id==="car")return[Fs([[0,.62,0,t,.64,e],[0,1.37,-.25,t*.86,.14,e*.5]]),Fs([[0,1.1,-.25,t*.88,.42,e*.52,...lc],...hc(t,e,.32,[e*.3,-e*.3]),...o])];if(n.id==="van")return[Fs([[0,1.25,-.5,t,1.9,e-1.2],[0,.85,r-.55,t,1.1,1.1]]),Fs([[0,1.75,r-.62,t*.92,.7,1,...lc],...hc(t,e,.36,[e*.32,-e*.3]),...o])];if(n.id==="bus")return[Fs([[0,1,0,t,1.3,e],[0,3.05,0,t,.5,e]]),Fs([[0,2.2,0,t*1.01,1.15,e*.985,...lc],...hc(t,e,.5,[e*.33,-e*.3]),...o])];let a=2.5;return[Fs([[0,1.75,r-a/2,t,2.5,a]]),Fs([[0,2.25,s+(e-a-.5)/2,t,3.1,e-a-.5,...UT],[0,.75,s+(e-a)/2,t*.5,.3,e-a,...FT],[0,2.35,r-.4,t*.92,.85,.85,...lc],...hc(t,e,.52,[r-1.2,s+1.4,s+2.7,s+4]),[-t/2+.3,1,s-.02,.4,.25,.08,...cc],[t/2-.3,1,s-.02,.4,.25,.08,...cc],[-t/2+.3,.9,r+.02,.4,.2,.08,...uc],[t/2-.3,.9,r+.02,.4,.2,.08,...uc]])]}function C0(n,e){let t=new ht;t.name="traffic";let i=new Map(ac.map(h=>[h.id,OT(h)])),s=DT.map(h=>new ii({color:h})),r=new ii({vertexColors:!0}),o=[];for(let h=0;h<e;h++){let f=new ht,d=new ot(i.get("car")[0],s[0]),g=new ot(i.get("car")[1],r);d.castShadow=!0,g.castShadow=!0,f.add(d,g),f.visible=!1,t.add(f),o.push({g:f,body:d,detail:g,type:null,color:-1})}n.add(t);let a={};function l(h,f,d){for(let g=0;g<o.length;g++){let x=o[g],m=h.vehicles[g],p=m?m.s-d:1e9;if(!m||p<-120||p>1400){x.g.visible=!1;continue}if(x.type!==m.type.id){x.type=m.type.id;let[S,M]=i.get(m.type.id);x.body.geometry=S,x.detail.geometry=M}x.color!==m.color&&(x.color=m.color,x.body.material=s[m.color%s.length]),It(f,m.s,m.d,a),x.g.position.set(a.x,a.y,a.z),x.g.rotation.set(-Math.atan(a.slope||0),a.heading,0,"YXZ"),x.g.visible=!0}}function c(){for(let h of o)h.g.visible=!1}function u(){n.remove(t);for(let[h,f]of i.values())h.dispose(),f.dispose();for(let h of s)h.dispose();r.dispose()}return{group:t,update:l,hide:c,dispose:u}}var P0="polygon-rush-v3-records",BT=new Set(["rally","rain"]);function I0(){try{let n=globalThis.localStorage?.getItem(P0),e=n?JSON.parse(n):null;if(e&&typeof e=="object")return{splits:e.splits||{},total:e.total??null,runs:e.runs||0,finishes:e.finishes||0}}catch{}return{splits:{},total:null,runs:0,finishes:0}}function fc(n){try{return globalThis.localStorage?.setItem(P0,JSON.stringify(n)),!0}catch{return!1}}function vf(n){if(!Number.isFinite(n))return"\u2013";let e=Math.floor(n/60),t=n-e*60;return`${e}'${String(Math.floor(t)).padStart(2,"0")}"${Math.floor(t*10%10)}`}function L0(n){let e=Math.abs(n);return`${n<0?"\u2212":"+"}${e>=60?vf(e):e.toFixed(1).replace(".",'"')}`}function D0(n,e,t){let i=n.splits[e]??null,s=i===null||t<i;return s&&(n.splits[e]=Math.round(t*1e3)/1e3),{time:t,best:i,delta:i===null?null:t-i,record:s}}function N0(n,e){let t=n.total,i=t===null||e<t;return i&&(n.total=Math.round(e*1e3)/1e3),{time:e,best:t,delta:t===null?null:e-t,record:i}}function U0(n){return n.filter(e=>!BT.has(e.id))}function F0(n=document.body){let e=document.createElement("div");e.style.cssText="position:fixed;left:50%;top:13vmin;transform:translateX(-50%);display:none;gap:1.2vmin;z-index:35;font-family:Arial,Helvetica,sans-serif;pointer-events:auto;align-items:stretch";let t=document.createElement("div");t.style.cssText="position:fixed;left:50%;top:11.6vmin;transform:translateX(-50%);width:54vmin;height:0.7vmin;display:none;background:rgba(255,255,255,.18);z-index:35;border-radius:1vmin;overflow:hidden";let i=document.createElement("div");i.style.cssText="height:100%;width:100%;background:#ffd23f;transform-origin:left center",t.appendChild(i),n.append(t,e);let s=[],r=null,o=0,a=0;function l(){e.style.display="none",t.style.display="none",s=[],r=null}function c(f){if(!s.length)return!1;let d=s[Math.max(0,Math.min(s.length-1,f))],g=r;return l(),g?.(d),!0}function u(f,d,g=9){l(),f.length&&(s=f.slice(0,3),r=d,o=a=g,e.textContent="",s.forEach((x,m)=>{let p=document.createElement("button");p.type="button",p.style.cssText=`all:unset;cursor:pointer;width:27vmin;padding:1.1vmin 1.4vmin;border-radius:1vmin;color:#fff;background:rgba(12,18,34,.82);border:0.3vmin solid ${m===0?"#ffd23f":"rgba(255,255,255,.28)"};box-sizing:border-box`;let S=M=>String(M).replace(/[&<>]/g,y=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[y]);p.innerHTML=`<div style="font:bold 2.1vmin Arial;display:flex;gap:1vmin;align-items:center"><span style="background:#ffd23f;color:#111;border-radius:.6vmin;padding:.1vmin .9vmin">${m+1}</span><span>${S(x.icon||"")} ${S(x.name)}</span></div><div style="font:1.55vmin Arial;color:#8ef0a8;margin-top:.7vmin">\u25B2 ${S(x.pro)}</div><div style="font:1.55vmin Arial;color:#ff9a8a;margin-top:.3vmin">\u25BC ${S(x.con)}</div>`,p.addEventListener("click",()=>c(m)),e.appendChild(p)}),e.style.display="flex",t.style.display="block")}function h(f){s.length&&(o-=f,i.style.transform=`scaleX(${Math.max(0,o/a)})`,o<=0&&c(0))}return{show:u,pick:c,update:h,hide:l,get active(){return s.length>0},dispose(){e.remove(),t.remove()}}}var dc=class extends Ki{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ef(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new zf(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Cs.extractUrlBase(e);o=Cs.resolveURL(c,this.path)}else o=Cs.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Jo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===H0){try{o[xt.KHR_BINARY_GLTF]=new kf(e)}catch(h){s&&s(h);return}r=JSON.parse(o[xt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Yf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case xt.KHR_MATERIALS_UNLIT:o[h]=new Sf;break;case xt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Hf(r,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:o[h]=new Vf;break;case xt.KHR_MESH_QUANTIZATION:o[h]=new Gf;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function zT(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},bf=class{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Re(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Tn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ai(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Cl(u),c.distance=h;break;case"spot":c=new oo(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,es(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},Sf=class{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return Yt}extendParams(e,t,i){let s=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Tn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Ct))}return Promise.all(s)}},Tf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Ef=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(a,a)}return Promise.all(r)}},wf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Af=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Rf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Tn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ct)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Cf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Pf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(a[0],a[1],a[2],Tn),Promise.all(r)}},If=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Lf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(a[0],a[1],a[2],Tn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Ct)),Promise.all(r)}},Df=class{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Nf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Uf=class{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Ff=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Of=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Bf=class{constructor(e){this.name=xt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}},zf=class{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==ai.TRIANGLES&&c.mode!==ai.TRIANGLE_STRIP&&c.mode!==ai.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let g of h){let x=new je,m=new k,p=new nn,S=new k(1,1,1),M=new Sn(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&S.fromBufferAttribute(l.SCALE,y),M.setMatrixAt(y,x.compose(m,p,S));for(let y in l)if(y==="_COLOR_0"){let T=l[y];M.instanceColor=new tr(T.array,T.itemSize,T.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);Ft.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},H0="glTF",ma=12,O0={JSON:1313821514,BIN:5130562},kf=class{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ma),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==H0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ma,r=new DataView(e,ma),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===O0.JSON){let c=new Uint8Array(e,ma+o,a);this.content=i.decode(c)}else if(l===O0.BIN){let c=ma+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Hf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Xf[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Xf[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],d=mo[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(let g in d.attributes){let x=d.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(d)},a,c,Tn,f)})})}},Vf=class{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Gf=class{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}},pc=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,g=e*c,x=g-c,m=-2*d+3*f,p=d-f,S=1-m,M=p-f+h;for(let y=0;y!==a;y++){let T=o[x+y+a],b=o[x+y+l]*u,v=o[g+y+a],w=o[g+y]*u;r[y]=S*T+M*b+m*v+p*w}return r}},kT=new nn,Wf=class extends pc{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return kT.fromArray(r).normalize().toArray(r),r}},ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},mo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},B0={9728:Kt,9729:On,9984:Ph,9985:ko,9986:Br,9987:ti},z0={33071:Wi,33648:Xo,10497:Pn},yf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Os={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},HT={CUBICSPLINE:void 0,LINEAR:Zr,STEP:$r},_f={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function VT(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new st({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wi})),n.DefaultMaterial}function dr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function es(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function GT(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(i){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function WT(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function XT(n){let e,t=n.extensions&&n.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Mf(t.attributes):e=n.indices+":"+Mf(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Mf(n.targets[i]);return e}function Mf(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function qf(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function qT(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var YT=new je,Yf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new zT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new Rl(this.options.manager):this.textureLoader=new Pl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Jo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return dr(r,a,s),es(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(Cs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=yf[s.type],a=mo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new mt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=yf[s.type],c=mo[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(d&&d!==h){let p=Math.floor(f/d),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,M=t.cache.get(S);M||(x=new c(a,p*d,s.count*d/u),M=new no(x,d/u),t.cache.add(S,M)),m=new er(M,l,f%d/u,g)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new mt(x,l,g);if(s.sparse!==void 0){let p=yf.SCALAR,S=mo[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,T=new S(o[1],M,s.sparse.count*p),b=new c(o[2],y,s.sparse.count*l);a!==null&&(m=new mt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let v=0,w=T.length;v<w;v++){let _=T[v];if(m.setX(_,b[v*l]),l>=2&&m.setY(_,b[v*l+1]),l>=3&&m.setZ(_,b[v*l+2]),l>=4&&m.setW(_,b[v*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=B0[f.magFilter]||On,u.minFilter=B0[f.minFilter]||ti,u.wrapS=z0[f.wrapS]||Pn,u.wrapT=z0[f.wrapT]||Pn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Kt&&u.minFilter!==On,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new ln(x);m.needsUpdate=!0,f(m)}),t.load(Cs.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),es(h,o),h.userData.mimeType=o.mimeType||qT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[xt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new ir,bn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Ss,bn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return st}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[xt.KHR_MATERIALS_UNLIT]){let h=s[xt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Tn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ct)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Pt);let u=r.alphaMode||_f.OPAQUE;if(u===_f.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===_f.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Yt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new $e(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Yt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Yt){let h=r.emissiveFactor;a.emissive=new Re().setRGB(h[0],h[1],h[2],Tn)}return r.emissiveTexture!==void 0&&o!==Yt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ct)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),es(h,r),t.associations.set(h,{materials:e}),r.extensions&&dr(s,h,r),h})}createUniqueName(e){let t=Ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return k0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=XT(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=k0(new gt,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?VT(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){let x=u[d],m=o[d],p,S=c[d];if(m.mode===ai.TRIANGLES||m.mode===ai.TRIANGLE_STRIP||m.mode===ai.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new yl(x,S):new ot(x,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ai.TRIANGLE_STRIP?p.geometry=lf(p.geometry,Fl):m.mode===ai.TRIANGLE_FAN&&(p.geometry=lf(p.geometry,na));else if(m.mode===ai.LINES)p=new nr(x,S);else if(m.mode===ai.LINE_STRIP)p=new io(x,S);else if(m.mode===ai.LINE_LOOP)p=new Sl(x,S);else if(m.mode===ai.POINTS)p=new Ts(x,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&WT(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),es(p,r),m.extensions&&dr(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&dr(s,h[0],r),h[0];let f=new ht;r.extensions&&dr(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Zt(Zp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Ms(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),es(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new je;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new _l(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let d=s.channels[h],g=s.samplers[d.sampler],x=d.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let S=0,M=f.length;S<M;S++){let y=f[S],T=d[S],b=g[S],v=x[S],w=m[S];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let _=i._createAnimationTracks(y,T,b,v,w);if(_)for(let E=0;E<_.length;E++)p.push(_[E])}return new Al(r,void 0,p)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,YT)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new jo:c.length>1?u=new ht:c.length===1?u=c[0]:u=new Ft,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),es(u,r),r.extensions&&dr(i,u,r),r.matrix!==void 0){let h=new je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new ht;i.name&&(r.name=s.createUniqueName(i.name)),es(r,i),i.extensions&&dr(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,d]of s.associations)(f instanceof bn||f instanceof ln)&&h.set(f,d);return u.traverse(f=>{let d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Os[r.path]===Os.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Os[r.path]){case Os.weights:c=Yi;break;case Os.rotation:c=$i;break;case Os.position:case Os.scale:c=Zi;break;default:i.itemSize===1?c=Yi:c=Zi;break}let u=s.interpolation!==void 0?HT[s.interpolation]:Zr,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){let g=new c(l[f]+"."+Os[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=qf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof $i?Wf:pc;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function $T(n,e,t){let i=e.attributes,s=new ni;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),a.normalized){let u=qf(mo[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new k,l=new k;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=qf(mo[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new qn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function k0(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=Xf[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return pt.workingColorSpace!==Tn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),es(n,e),$T(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?GT(n,e.targets,t):n})}var Bs={hi:null,lo:null},ZT=["body","frame","bubble","headlight","tail","wheelRear","wheelFront","fork","torso","helmet","armR","armL","legR","legL"];async function $f(n,e){let t=await n.loadAsync(e),i={},s={};for(let a of t.scene.children)a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.set(1,1,1),i[a.name]=a,a.traverse(l=>{l.isMesh&&l.material?.name&&(s[l.material.name]=l.material)});let r=ZT.filter(a=>!i[a]);if(r.length)throw new Error(e+" incomplet : "+r.join(", "));let o=0;return i.armR.traverse(a=>{a.isMesh&&(a.geometry.computeBoundingBox(),o=Math.max(o,a.geometry.boundingBox.max.z))}),{parts:i,mats:s,armLength:o>.1?o/1.01:1}}async function V0(n="assets/"){if(Bs.lo)return Bs;let e=new dc;return Bs.lo=await $f(e,n+"bike_voxel.glb").catch(()=>$f(e,n+"bike.glb")),Bs.hi=await $f(e,n+"bike_voxel_hi.glb").catch(()=>Bs.lo),Bs}function G0(n="lo"){return Bs[n]||Bs.lo}var jt=0,dn=1,ns=2,xc=.32,gc=-.7,K0=.7,ts=[0,-xc,-gc],j0=[0,-xc,-K0],W0=.62,KT=.35,zs=Math.PI*2,Jn=class{constructor(e){this.off=e||[0,0,0],this.pos=[],this.groups=[],this.slot=-1,this.gStart=0}setSlot(e){e!==this.slot&&(this.closeGroup(),this.slot=e)}closeGroup(){let e=this.pos.length/3;this.slot>=0&&e>this.gStart&&this.groups.push({start:this.gStart,count:e-this.gStart,materialIndex:this.slot}),this.gStart=e}tri(e,t,i,s){let r=this.off,o=e[0]+r[0],a=e[1]+r[1],l=e[2]+r[2],c=t[0]+r[0],u=t[1]+r[1],h=t[2]+r[2],f=i[0]+r[0],d=i[1]+r[1],g=i[2]+r[2],x=c-o,m=u-a,p=h-l,S=f-o,M=d-a,y=g-l,T=m*y-p*M,b=p*S-x*y,v=x*M-m*S,w=(o+c+f)/3-(s[0]+r[0]),_=(a+u+d)/3-(s[1]+r[1]),E=(l+h+g)/3-(s[2]+r[2]),R=this.pos;T*w+b*_+v*E>=0?R.push(o,a,l,c,u,h,f,d,g):R.push(o,a,l,f,d,g,c,u,h)}quad(e,t,i,s,r){this.tri(e,t,i,r),this.tri(e,i,s,r)}build(){this.closeGroup();let e=new gt;e.setAttribute("position",new lt(this.pos,3)),e.computeVertexNormals();for(let t of this.groups)e.addGroup(t.start,t.count,t.materialIndex);return e}};function jT(n){let e=0,t=0,i=0;for(let r of n)e+=r[0],t+=r[1],i+=r[2];let s=n.length;return[e/s,t/s,i/s]}function JT(n,e){return[(n[0]+e[0])/2,(n[1]+e[1])/2,(n[2]+e[2])/2]}function X0(n,e,t,i){let s=e.length;for(let r=0;r<s;r++)n.tri(t,e[r],e[(r+1)%s],i)}function ks(n,e,t,i,s){let r=typeof t=="function"?t:()=>t,o=e.length,a=e[0].length,l=e.map(jT);for(let c=0;c<o-1;c++){let u=e[c],h=e[c+1],f=JT(l[c],l[c+1]);for(let d=0;d<a;d++){let g=(d+1)%a;n.setSlot(r(c,d)),n.quad(u[d],u[g],h[g],h[d],f)}}n.setSlot(i),X0(n,e[0],l[0],l[1]),n.setSlot(s),X0(n,e[o-1],l[o-1],l[o-2])}function jn(n,e,t,i,s,r,o){let a=t[0]-e[0],l=t[1]-e[1],c=t[2]-e[2],u=Math.hypot(a,l,c)||1,h=[a/u,l/u,c/u],f=Math.abs(h[1])<.9?[0,1,0]:[1,0,0],d=[h[1]*f[2]-h[2]*f[1],h[2]*f[0]-h[0]*f[2],h[0]*f[1]-h[1]*f[0]],g=Math.hypot(d[0],d[1],d[2]);d=[d[0]/g,d[1]/g,d[2]/g];let x=[d[1]*h[2]-d[2]*h[1],d[2]*h[0]-d[0]*h[2],d[0]*h[1]-d[1]*h[0]],m=(p,S)=>{let M=[];for(let y=0;y<r;y++){let T=zs*y/r,b=Math.cos(T)*S,v=Math.sin(T)*S;M.push([p[0]+b*d[0]+v*x[0],p[1]+b*d[1]+v*x[1],p[2]+b*d[2]+v*x[2]])}return M};ks(n,[m(e,i),m(t,s)],o,o,o)}function mr(n,e,t,i){n.setSlot(i);let s=(a,l,c)=>[e[0]+a*t[0],e[1]+l*t[1],e[2]+c*t[2]],r=[s(-1,-1,-1),s(1,-1,-1),s(1,1,-1),s(-1,1,-1),s(-1,-1,1),s(1,-1,1),s(1,1,1),s(-1,1,1)],o=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]];for(let a of o)n.tri(r[a[0]],r[a[1]],r[a[2]],e),n.tri(r[a[0]],r[a[2]],r[a[3]],e)}var vc=3,xa=4;function QT(n,e,t,i,s,r,o,a,l){return[[0,e,n],[o,t,n],[a,i,n],[l,s,n],[0,r,n],[-l,s,n],[-a,i,n],[-o,t,n]]}function eE(){let n=new Jn(ts),t=[[1.02,.76,.755,.74,.72,.71,.02,.03,.02],[.9,.84,.81,.75,.7,.68,.07,.12,.08],[.7,.93,.87,.76,.7,.68,.1,.19,.13],[.45,.97,.9,.68,.58,.56,.12,.23,.16],[.3,.98,.92,.62,.36,.26,.13,.23,.17],[.05,1,.94,.62,.3,.19,.14,.21,.16],[-.2,.99,.93,.66,.32,.21,.13,.19,.13],[-.35,.85,.82,.68,.42,.34,.11,.15,.1],[-.5,.8,.79,.72,.64,.62,.1,.13,.08],[-.75,.9,.87,.8,.72,.7,.09,.12,.07],[-.98,.99,.96,.92,.88,.87,.05,.07,.04],[-1.1,1.02,1.01,1,.99,.985,.01,.015,.01]].map(i=>QT(...i));ks(n,t,(i,s)=>{let r=s===0||s===7,o=s===1||s===6,a=s===2||s===5;return r?i===7||i===8?dn:jt:o?i>=9?vc:jt:a?i>=2&&i<=5?vc:i>=7&&i<=8?dn:jt:i>=3&&i<=6?ns:dn},jt,jt);for(let i of[-1,1])jn(n,[.11*i,.46,-.26],[.1*i,.32,-.7],.04,.03,5,xa),jn(n,[.14*i,.44,-.3],[.22*i,.42,-.32],.018,.018,4,dn),jn(n,[.1*i,.95,.42],[.27*i,.93,.35],.02,.02,4,dn);return jn(n,[.15,.22,.1],[.17,.3,-.45],.04,.04,5,xa),jn(n,[.17,.3,-.45],[.2,.52,-.92],.05,.065,6,xa),jn(n,[.2,.52,-.92],[.205,.535,-.95],.065,.05,6,dn),mr(n,[0,.685,-.74],[.06,.012,.16],dn),n.build()}function tE(){let n=new Jn(ts),e=(t,i,s,r)=>[[0,i,t],[r,s,t],[0,s-.02,t],[-r,s,t]];return ks(n,[e(.76,.925,.91,.07),e(.58,1.06,.94,.12),e(.42,1.13,.97,.11)],jt,jt,jt),n.build()}function nE(){let n=new Jn(ts);return mr(n,[0,.985,-1.085],[.04,.02,.014],jt),n.build()}function iE(){let n=new Jn;return jn(n,[0,0,0],[0,0,-.45],.05,.004,6,jt),n.build()}function sE(){let n=new Jn(ts);for(let e of[-1,1]){let t=[.062*e,.795,.905];n.setSlot(jt);let i=[[t[0]-.035,t[1]-.012,t[2]+.012],[t[0]+.035,t[1]+.004*e,t[2]-.02],[t[0]+.03,t[1]+.022,t[2]-.03],[t[0]-.03,t[1]+.02,t[2]-.004]];n.quad(i[0],i[1],i[2],i[3],[t[0],t[1],t[2]-.2])}return n.build()}function rE(){let n=new Jn(j0);for(let i of[-1,1])jn(n,[.085*i,.32,.7],[.085*i,.56,.615],.032,.032,5,dn),jn(n,[.085*i,.56,.615],[.085*i,.88,.5],.024,.024,5,ns),mr(n,[.1*i,.33,.74],[.012,.05,.035],xa);let e=.34,t=[];for(let i of[-.75,-.25,.3,.85,1.25]){let s=.32+Math.cos(i),r=.7+Math.sin(i),o=(a,l)=>[a,.32+l*Math.cos(i),.7+l*Math.sin(i)];t.push([o(-.075,e-.005),o(-.04,e+.03),o(.04,e+.03),o(.075,e-.005)])}return ks(n,t,jt,jt,jt),n.build()}function q0(n,e){let t=new Jn,i=14,s=(o,a)=>{let l=[];for(let c=0;c<i;c++){let u=zs*c/i;l.push([o,a*Math.cos(u),a*Math.sin(u)])}return l};ks(t,[[-.62,.215],[-1,.27],[-.8,.305],[0,.32],[.8,.305],[1,.27],[.62,.215]].map(([o,a])=>s(o*n,a)),dn,dn,dn);for(let o of[-1,1]){let a=o*(.62*n+.004),l=[a,0,0],c=[0,0,0],u=10;for(let h=0;h<u;h++){let f=zs*h/u,d=zs*(h+1)/u;t.setSlot(h%2?dn:ns),t.tri(l,[a,.215*Math.cos(f),.215*Math.sin(f)],[a,.215*Math.cos(d),.215*Math.sin(d)],c)}if(e){let h=o*(.62*n+.012);t.setSlot(xa);for(let f=0;f<u;f++){let d=zs*f/u,g=zs*(f+1)/u;t.quad([h,.09*Math.cos(d),.09*Math.sin(d)],[h,.16*Math.cos(d),.16*Math.sin(d)],[h,.16*Math.cos(g),.16*Math.sin(g)],[h,.09*Math.cos(g),.09*Math.sin(g)],c)}}}return t.build()}function oE(){let n=new Jn,e=[0,.11,.015],t=[.125,.135,.155],i=10,s=6,r=[];for(let o=1;o<s;o++){let a=-Math.PI/2+Math.PI*o/s,l=Math.cos(a),c=[];for(let u=0;u<i;u++){let h=zs*(u+.5)/i;c.push([e[0]+t[0]*l*Math.cos(h),e[1]+t[1]*Math.sin(a),e[2]+t[2]*l*Math.sin(h)])}r.push(c)}return ks(n,r,(o,a)=>{let l=zs*(a+1)/i;return Math.sin(l)>.45&&(o===1||o===2)?dn:Math.abs(Math.cos(l))<.35?ns:jt},dn,jt),n.build()}function ga(n,e,t,i){return[[e,n,0],[e*.55,n,t],[-e*.55,n,t],[-e,n,0],[-e*.55,n,-i],[e*.55,n,-i]]}function aE(){let n=new Jn,e=[ga(-.08,.13,.09,.1),ga(.04,.145,.1,.1),ga(.22,.185,.11,.11),ga(.38,.205,.1,.1),ga(.45,.09,.06,.07)];return ks(n,e,(t,i)=>t===0?ns:t===2&&(i===0||i===2||i===3||i===5)?vc:jt,dn,dn),ks(n,[[[.07,.4,-.08],[0,.42,-.06],[-.07,.4,-.08],[0,.39,-.13]],[[.06,.28,-.11],[0,.29,-.09],[-.06,.28,-.11],[0,.27,-.19]],[[.03,.14,-.1],[0,.14,-.09],[-.03,.14,-.1],[0,.14,-.13]]],ns,ns,ns),n.build()}function Y0(n){let e=new Jn,t=[.09*n,-.09,.5];return jn(e,[0,0,0],t,.058,.048,5,jt),jn(e,t,[0,0,.93],.046,.038,5,jt),mr(e,[0,0,.97],[.042,.04,.05],dn),mr(e,[0,.015,.02],[.052,.04,.05],vc),e.build()}function $0(n){let e=new Jn,t=[.11*n,-.19,.42],i=[.085*n,-.47,.05];return jn(e,[0,0,0],t,.082,.066,6,jt),jn(e,t,i,.062,.05,5,jt),mr(e,[t[0]+.035*n,t[1]-.02,t[2]+.02],[.025,.05,.045],ns),mr(e,[i[0],i[1]-.04,i[2]+.04],[.045,.05,.115],dn),e.build()}var Zf=null;function lE(){return Zf||(Zf={body:eE(),bubble:tE(),tail:nE(),flame:iE(),fork:rE(),headlight:sE(),wheelRear:q0(.1,!1),wheelFront:q0(.068,!0),helmet:oE(),torso:aE(),armR:Y0(-1),armL:Y0(1),legR:$0(-1),legL:$0(1)}),Zf}var bi=(n,e,t)=>n<e?e:n>t?t:n,J0=n=>bi(n,0,1),pr=n=>Number.isFinite(n)?n:0,mc=n=>typeof n=="boolean"?n?1:0:J0(pr(n));function li(n,e){return n.name=e,n}function Z0(n,e,t,i){let s=new ot(n,e);return s.name=t,s.castShadow=i,s.receiveShadow=!1,s}function Q0({color:n=14034984,accent:e=16761395,isPlayer:t=!1,detail:i="lo"}={}){let s=lE(),r=Ae=>new st({flatShading:!0,side:Pt,...Ae}),o=r({color:new Re(n),metalness:.35,roughness:.3}),a=r({color:1382173,metalness:.2,roughness:.7}),l=r({color:new Re(e),metalness:.45,roughness:.35}),c=r({color:15856108,metalness:.15,roughness:.45}),u=r({color:11120312,metalness:.9,roughness:.32}),h=[o,a,l,c,u],f=r({color:792614,metalness:.6,roughness:.08,transparent:!0,opacity:.55,depthWrite:!1}),d=r({color:16777215,emissive:16774358,emissiveIntensity:2.4}),g=r({color:3342336,emissive:16718362,emissiveIntensity:.8}),x=G0(i),m=null;if(x){let Ae=(V,Ve)=>{let ze=x.mats[V].clone();return ze.color.set(Ve),ze};m={Paint:Ae("Paint",n),Suit:Ae("Suit",n),Accent:Ae("Accent",e),Tail:x.mats.Tail.clone()}}function p(Ae,V,Ve,ze,Be){if(!x)return Z0(V,Ve,Ae,ze);let Ie=x.parts[Ae].clone(!0);return Ie.name=Ae,Be&&Ie.position.set(Be[0],Be[1],Be[2]),Ie.traverse(qe=>{qe.isMesh&&(qe.material=m[qe.material.name]||qe.material,qe.castShadow=ze)}),Ie}let S=r({color:0,emissive:8382975,emissiveIntensity:1.5,transparent:!0,opacity:.85,depthWrite:!1}),M=li(new ht,"bike"),y=li(new ht,"leanPivot"),T=li(new ht,"pitchPivot");T.position.set(0,xc,gc);let b=li(new ht,"rearWheel");b.add(p("wheelRear",s.wheelRear,h,!0));let v=li(new ht,"chassis"),w=p("body",s.body,h,!0,ts),_=p("bubble",s.bubble,f,!1,ts),E=p("tail",s.tail,g,!1,ts),R=p("headlight",s.headlight,d,!1,ts),U=Z0(s.flame,S,"flame",!1);U.position.set(.205,.215,-.26),U.rotation.x=-.42,U.scale.z=.02,U.visible=!1;let H=li(new ht,"hips");H.position.set(0,W0,KT);let P=li(new ht,"torso"),F=li(new ht,"head");F.position.set(0,.45,.01),F.add(p("helmet",s.helmet,h,!0)),P.add(p("torso",s.torso,h,!0),F);let O=p("armR",s.armR,h,!0),Y=p("armL",s.armL,h,!0),G=li(new ht,"legR");G.position.set(-.12,-.02,0),G.add(p("legR",s.legR,h,!0));let J=li(new ht,"legL");J.position.set(.12,-.02,0),J.add(p("legL",s.legL,h,!0)),H.add(P,O,Y,G,J),v.add(w,_,E,R,U,H),x&&v.add(p("frame",null,null,!0,ts));let re=li(new ht,"steerPivot");re.position.set(0,0,K0-gc);let me=p("fork",s.fork,h,!0,j0),ye=li(new ht,"frontWheel");if(ye.add(p("wheelFront",s.wheelFront,h,!0)),re.add(me,ye),T.add(b,v,re),y.add(T),M.add(y),t){let Ae=new oo(16773590,60,60,.5,.6,2);Ae.name="headSpot",Ae.castShadow=!1,Ae.position.set(0,1,.9),Ae.target.position.set(0,.2,30),Ae.target.name="headSpotTarget",M.add(Ae,Ae.target)}let ce={lean:0,steer:0,pitch:0,compress:0,sr:0,brake:0,air:0,drift:0,boost:0},ie=.2,Q=.37,ee=.02,L=[.25,.93-xc,.36-gc],B=new k,X=new k,$=new k(0,0,1);function de(Ae,V){B.set(ie*V,Q,ee).applyEuler(P.rotation),X.set(L[0]*V-H.position.x,L[1]-H.position.y,L[2]-H.position.z);let Ve=Math.cos(-H.rotation.z),ze=Math.sin(-H.rotation.z),Be=X.x*Ve-X.y*ze,Ie=X.x*ze+X.y*Ve;X.x=Be,X.y=Ie,Ae.position.copy(B),X.sub(B);let qe=X.length()||1;Ae.scale.z=qe/(x?x.armLength:1),Ae.quaternion.setFromUnitVectors($,X.multiplyScalar(1/qe))}function we(Ae,V){let Ve=Ae||{},ze=Number.isFinite(V)?bi(V,0,.1):1/60,Be=1-Math.exp(-ze*14),Ie=1-Math.exp(-ze*5);ce.lean+=(bi(pr(Ve.lean),-1.5,1.5)-ce.lean)*Be,ce.steer+=(bi(pr(Ve.steer),-1,1)-ce.steer)*Be,ce.pitch+=(bi(pr(Ve.pitch),-.9,.9)-ce.pitch)*Be,ce.compress+=(bi(pr(Ve.compress),-1,1)-ce.compress)*Be,ce.sr+=(J0(pr(Ve.speedRatio))-ce.sr)*Ie,ce.brake+=(mc(Ve.braking)-ce.brake)*Ie,ce.air+=(mc(Ve.airborne)-ce.air)*Ie,ce.drift+=(mc(Ve.drift)-ce.drift)*Ie,ce.boost+=(mc(Ve.boost)-ce.boost)*Ie;let qe=ce.lean,Fe=(Number.isFinite(Ve.speed)?Ve.speed:ce.sr*80)*3.6;y.rotation.z=qe,T.rotation.x=-ce.pitch,re.rotation.y=-.45*ce.steer*bi(1-2*ce.sr,0,1),v.position.y=-.07*ce.compress;let D=bi((Fe-20)/100,0,1),A=bi(Math.abs(qe)*2.27,0,1),j=qe>=0?1:-1,xe=A*(1-bi((Fe-30)/30,0,1));H.position.x=-.17*A*j,H.position.y=W0+.1*ce.air,H.rotation.z=-.2*A*j,P.rotation.x=bi(.45+.55*D-.2*ce.brake-.25*ce.air+.1*ce.boost,.2,1.05),P.rotation.z=-.1*A*j,F.rotation.x=-.35*D+.1*ce.air,F.rotation.y=-.35*A*j,F.rotation.z=-.4*qe;let _e=.55*A+.3*xe;G.rotation.y=j>0?-_e:0,J.rotation.y=j<0?_e:0,de(O,-1),de(Y,1),(m?m.Tail:g).emissiveIntensity=(m?2:.8)+(m?6:2.2)*ce.brake,U.visible=ce.boost>.03,U.scale.z=.02+1.3*ce.boost,S.emissiveIntensity=1.5+2*ce.boost;let he=pr(Ve.wheelSpin);b.rotation.x=he,ye.rotation.x=he}return we({},0),{group:M,update:we}}var eg=Math.PI*2,en=6e3,go=2200,tg=60,ng=30,ig=60,cE=3,va=2e3,gr=170,Jf=1.5,uE=13,sg=uE-Jf,Kf=120,hE={dust:{life:.9,grav:-1.2,drag:2.2,spread:1.6,lift:[.6,1.8],s0:.35,s1:1.5,a0:.3,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!1},smoke:{life:.8,grav:-.8,drag:1.2,spread:.9,lift:[.5,1.3],s0:.35,s1:1.3,a0:.16,c0:[.89,.9,.92],c1:[.62,.64,.67],add:!1,bounce:!1,ring:!1},spark:{life:.6,grav:18,drag:.25,spread:5.5,lift:[1.5,4.5],s0:.22,s1:.06,a0:1,c0:[1,.88,.4],c1:[1,.48,.1],add:!0,bounce:!0,ring:!1},spray:{life:.6,grav:9,drag:.5,spread:2.2,lift:[1.2,3.2],s0:.25,s1:.9,a0:.22,c0:[.71,.93,.98],c1:[.37,.66,.8],add:!1,bounce:!1,ring:!1},gravel:{life:.7,grav:20,drag:.15,spread:3.2,lift:[1.5,3.5],s0:.08,s1:.06,a0:1,c0:[.29,.26,.22],c1:[.14,.13,.11],add:!1,bounce:!0,ring:!1},boost:{life:.3,grav:-3,drag:3,spread:.8,lift:[0,.5],s0:.55,s1:.12,a0:.9,c0:[.25,.96,1],c1:[1,.25,.78],add:!0,bounce:!1,ring:!1},land:{life:.8,grav:0,drag:4,spread:0,lift:[.4,1],s0:.5,s1:1.8,a0:.32,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!0}},fE=new Re(16777215),dE=new Re(8386303);function Vn(n,e){return n+(e-n)*Math.random()}function ya(n,e,t){return n<e?e:n>t?t:n}function Hs(n,e=0){return Number.isFinite(n)?n:e}function pE(n){return Number.isFinite(n)?ya(n,0,.1):0}function jf(n,e){return n-e*Math.floor(n/e+.5)}function mE(){let n=globalThis.innerHeight||900,e=Math.min(globalThis.devicePixelRatio||1,2);return n*e}var gE=`
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
}`,xE=`
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
}`,vE=`
attribute float aAlpha;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,yE=`
uniform vec3 uColor;
varying float vAlpha;
void main() {
  gl_FragColor = vec4(uColor, vAlpha);
}`;function rg(n,e){let t=e||{},i=Hs(t.rain,0),s=Hs(t.wind,0),r=new Float32Array(en*3),o=new Float32Array(en*3),a=new Float32Array(en*3),l=new Float32Array(en*3),c=new Float32Array(en*3),u=new Float32Array(en),h=new Float32Array(en),f=new Float32Array(en),d=new Float32Array(en),g=new Float32Array(en),x=new Float32Array(en),m=new Float32Array(en),p=new Float32Array(en),S=new Float32Array(en),M=new Float32Array(en),y=new Float32Array(en),T=new Uint8Array(en),b=0,v=!1,w=new gt,_=new mt(r,3).setUsage(Ri),E=new mt(c,3).setUsage(Ri),R=new mt(u,1).setUsage(Ri),U=new mt(h,1).setUsage(Ri),H=new mt(f,1).setUsage(Ri);w.setAttribute("position",_),w.setAttribute("aColor",E),w.setAttribute("aSize",R),w.setAttribute("aAlpha",U),w.setAttribute("aMode",H);let P=new vt({uniforms:{uScale:{value:700}},vertexShader:gE,fragmentShader:xE,transparent:!0,depthWrite:!1,blending:ea,blendSrc:Sh,blendDst:Wo,blendEquation:Fn}),F=new Ts(w,P);F.frustumCulled=!1,n.add(F);function O(ne,Me,fe,ge,W,Te,C,N=1){let z=hE[ne];if(!z||!Number.isFinite(Me)||!Number.isFinite(fe)||!Number.isFinite(ge))return;let Z=Hs(W),ae=Hs(Te),Pe=Hs(C),He=Math.min(en,Math.max(0,Math.floor(Hs(N,1))));for(let Ge=0;Ge<He;Ge++){let q=b;b=(b+1)%en;let oe,pe,ve;if(z.ring){let De=(He>1?Ge/He:Math.random())*eg+Math.random()*.2,Ze=Vn(3.5,5.5);oe=Math.cos(De)*Ze+Z*.3,ve=Math.sin(De)*Ze+Pe*.3,pe=Vn(z.lift[0],z.lift[1])+ae*.3}else oe=Z+Vn(-z.spread,z.spread),ve=Pe+Vn(-z.spread,z.spread),pe=ae+Vn(z.lift[0],z.lift[1]);let Se=q*3;r[Se]=Me+Vn(-.1,.1),r[Se+1]=fe,r[Se+2]=ge+Vn(-.1,.1),o[Se]=oe,o[Se+1]=pe,o[Se+2]=ve,d[q]=0,g[q]=z.life*Vn(.85,1.15),x[q]=z.drag,m[q]=z.grav,p[q]=z.s0*Vn(.85,1.2),S[q]=z.s1*Vn(.85,1.2),M[q]=z.a0,y[q]=fe,T[q]=z.bounce?1:0,f[q]=z.add?1:0,a[Se]=z.c0[0],a[Se+1]=z.c0[1],a[Se+2]=z.c0[2],l[Se]=z.c1[0],l[Se+1]=z.c1[1],l[Se+2]=z.c1[2]}He>0&&(v=!0)}function Y(ne){let Me=!1;for(let fe=0;fe<en;fe++){if(g[fe]<=0)continue;if(Me=!0,d[fe]+=ne,d[fe]>=g[fe]){g[fe]=0,h[fe]=0,u[fe]=0;continue}let ge=fe*3,W=Math.max(0,1-x[fe]*ne),Te=o[ge]*W,C=o[ge+1]*W-m[fe]*ne,N=o[ge+2]*W,z=r[ge]+Te*ne,Z=r[ge+1]+C*ne,ae=r[ge+2]+N*ne;T[fe]&&Z<y[fe]&&C<0&&(Z=y[fe],C=-C*.35,Te*=.6,N*=.6,T[fe]=0),o[ge]=Te,o[ge+1]=C,o[ge+2]=N,r[ge]=z,r[ge+1]=Z,r[ge+2]=ae;let Pe=d[fe]/g[fe];u[fe]=p[fe]+(S[fe]-p[fe])*Pe,h[fe]=M[fe]*(1-Pe*Pe),c[ge]=a[ge]+(l[ge]-a[ge])*Pe,c[ge+1]=a[ge+1]+(l[ge+1]-a[ge+1])*Pe,c[ge+2]=a[ge+2]+(l[ge+2]-a[ge+2])*Pe}return Me}let G=null;if(i>0){let ne=new gt,Me=new Float32Array(go*6),fe=new mt(Me,3).setUsage(Ri);ne.setAttribute("position",fe);let ge=new Float32Array(go*3),W=new Float32Array(go),Te=new Float32Array(go);for(let z=0;z<go;z++)ge[z*3]=(Math.random()-.5)*tg,ge[z*3+1]=-12+Math.random()*ng,ge[z*3+2]=(Math.random()-.5)*ig,W[z]=Vn(22,30),Te[z]=Vn(.8,1.2);let C=new Ss({color:12900095,transparent:!0,opacity:.16,depthWrite:!1}),N=new nr(ne,C);N.frustumCulled=!1,n.add(N),G={geo:ne,mat:C,lines:N,attr:fe,pa:Me,head:ge,fall:W,len:Te,windX:5.5*s,windZ:2*s}}function J(ne,Me,fe){let ge=G,W=ge.pa,Te=ge.head,C=ge.windX,N=ge.windZ,z=Me.x,Z=Me.y+cE,ae=Me.z;for(let Pe=0;Pe<go;Pe++){let He=Pe*3,Ge=z+jf(Te[He]-z,tg),q=Z+jf(Te[He+1]-Z,ng),oe=ae+jf(Te[He+2]-ae,ig),pe=ge.fall[Pe],ve=C-fe.x,Se=-pe-fe.y,De=N-fe.z,Ze=.05*ge.len[Pe],Ke=Pe*6;W[Ke]=Ge-ve*Ze,W[Ke+1]=q-Se*Ze,W[Ke+2]=oe-De*Ze,W[Ke+3]=Ge,W[Ke+4]=q,W[Ke+5]=oe,Te[He]=Ge+C*ne,Te[He+1]=q-pe*ne,Te[He+2]=oe+N*ne}ge.attr.needsUpdate=!0}let re=new Float32Array(va*4*3),me=new Float32Array(va*4),ye=new Uint16Array(va*6);for(let ne=0;ne<va;ne++){let Me=ne*4;ye.set([Me,Me+1,Me+2,Me,Me+2,Me+3],ne*6)}let ce=new gt,ie=new mt(re,3).setUsage(Ri),Q=new mt(me,1).setUsage(Ri);ce.setAttribute("position",ie),ce.setAttribute("aAlpha",Q),ce.setIndex(new mt(ye,1));let ee=new vt({uniforms:{uColor:{value:new Re(1315086)}},vertexShader:vE,fragmentShader:yE,transparent:!0,depthWrite:!1,side:Pt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),L=new ot(ce,ee);L.frustumCulled=!1,n.add(L);let B=0,X=1/0,$=-1;function de(ne,Me,fe,ge,W,Te,C=.3,N=.5){if(![ne,Me,fe,ge,W,Te,C,N].every(Number.isFinite))return;let z=ge-ne,Z=Te-fe,ae=Math.hypot(z,Z);if(ae<1e-4)return;let Pe=C*.5,He=-Z/ae*Pe,Ge=z/ae*Pe,q=ya(N,0,1),oe=Me+.03,pe=W+.03,ve=B*4;B=(B+1)%va;let Se=re,De=ve*3;Se[De]=ne+He,Se[De+1]=oe,Se[De+2]=fe+Ge,Se[De+3]=ne-He,Se[De+4]=oe,Se[De+5]=fe-Ge,Se[De+6]=ge-He,Se[De+7]=pe,Se[De+8]=Te-Ge,Se[De+9]=ge+He,Se[De+10]=pe,Se[De+11]=Te+Ge,me[ve]=q,me[ve+1]=q,me[ve+2]=q,me[ve+3]=q,ve<X&&(X=ve),ve+3>$&&($=ve+3)}function we(){if($<0)return;let ne=X,Me=$-X+1;ie.clearUpdateRanges(),ie.addUpdateRange(ne*3,Me*3),ie.needsUpdate=!0,Q.clearUpdateRanges(),Q.addUpdateRange(ne,Me),Q.needsUpdate=!0,X=1/0,$=-1}let Ae=new ht;Ae.matrixAutoUpdate=!1,n.add(Ae);let V=new Float32Array(gr*6),Ve=new mt(V,3).setUsage(Ri),ze=new gt;ze.setAttribute("position",Ve);let Be=new Float32Array(gr),Ie=new Float32Array(gr),qe=new Float32Array(gr),Fe=new Float32Array(gr);for(let ne=0;ne<gr;ne++){let Me=Math.random()*eg,fe=Vn(.8,1.5);Be[ne]=Math.cos(Me)*fe,Ie[ne]=Math.sin(Me)*fe,qe[ne]=-Jf-Math.random()*sg,Fe[ne]=Vn(.5,1.2)}let D=new Ss({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),A=new nr(ze,D);A.frustumCulled=!1,A.visible=!1,Ae.add(A);let j=0,xe=0,_e=0,he=0;function Ce(ne,Me){_e+=(j-_e)*(1-Math.exp(-6*ne)),he+=(xe-he)*(1-Math.exp(-8*ne)),Me.updateMatrixWorld(),Ae.matrix.copy(Me.matrixWorld),Ae.matrixWorld.copy(Me.matrixWorld);let fe=ya((_e-.55)/.45,0,1),ge=Math.min(1,.55*fe*fe*(3-2*fe)+.6*he),W=Math.floor(ge*gr);if(W<=0){A.visible=!1;return}A.visible=!0,ze.setDrawRange(0,W*2),D.color.copy(fE).lerp(dE,he),D.opacity=.05+.24*ge;let Te=(60+110*ge)*ne,C=1.5+5*ge,N=V;for(let z=0;z<W;z++){let Z=qe[z]+Te;Z>-Jf&&(Z-=sg),qe[z]=Z;let ae=-Z,Pe=Be[z]*ae*.9,He=Ie[z]*ae*.5,Ge=C*Fe[z],q=z*6;N[q]=Pe,N[q+1]=He,N[q+2]=Z,N[q+3]=Pe,N[q+4]=He,N[q+5]=Z-Ge}Ve.needsUpdate=!0}let Le=new k,Ne=new k,ke=!1,Ee=!1;function Ue(ne,Me){if(Ee)return;ne=pE(ne);let fe=Me.position;ke?ne>0&&(Ne.subVectors(fe,Le).divideScalar(ne),Ne.lengthSq()>Kf*Kf&&Ne.setLength(Kf),Le.copy(fe)):(Le.copy(fe),Ne.set(0,0,0),ke=!0);let ge=Hs(Me.fov,60);P.uniforms.uScale.value=mE()/(2*Math.tan(ge*Math.PI/360)),(Y(ne)||v)&&(_.needsUpdate=!0,E.needsUpdate=!0,R.needsUpdate=!0,U.needsUpdate=!0,H.needsUpdate=!0,v=!1),G&&ne>0&&J(ne,fe,Ne),Ce(ne,Me),we()}function se(ne,Me){let fe=ya(Hs(ne,0),0,1.5);j=ya((fe-.7)/.3,0,1),xe=Me?1:0}function be(){Ee||(Ee=!0,n.remove(F,L,Ae),G&&n.remove(G.lines),w.dispose(),P.dispose(),ce.dispose(),ee.dispose(),ze.dispose(),D.dispose(),G&&(G.geo.dispose(),G.mat.dispose()))}return{emit:O,addSkid:de,setSpeed:se,update:Ue,dispose:be}}var Vs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},_E=new Ms(-1,1,1,-1,0,1),Qf=class extends gt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}},ME=new Qf,Di=class{constructor(e){this._mesh=new ot(ME,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_E)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var xo=class extends Ln{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=En.clone(e.uniforms),this.material=new vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Di(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var _a=class extends Ln{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},yc=class extends Ln{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var _c=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new $e);this._width=i.width,this._height=i.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xo(Vs),this.copyPass.material.blending=tn,this.clock=new Il}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_a!==void 0&&(o instanceof _a?i=!0:o instanceof yc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Mc=class extends Ln{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var og={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var vo=class n extends Ln{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new $e(e.x,e.y):new $e(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(r,o,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new qt(r,o,{type:un});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new qt(r,o,{type:un});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=og;this.highPassUniforms=En.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new $e(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Vs;this.copyUniforms=En.clone(u.uniforms),this.blendMaterial=new vt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Wr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new Yt,this.fsQuad=new Di(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new $e(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new vt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $e(.5,.5)},direction:{value:new $e(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};vo.BlurDirectionX=new $e(1,0);vo.BlurDirectionY=new $e(0,1);var ag={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var bc=class extends Ln{constructor(){super();let e=ag;this.uniforms=En.clone(e.uniforms),this.material=new Tl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Di(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===Et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Eh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===wh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ah?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ta?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Rh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ch&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ma={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $e},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new je},cameraProjectionMatrixInverse:{value:new je},cameraWorldMatrix:{value:new je},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new k(-1,-1,-1)},sceneBoxMax:{value:new k(1,1,1)}},vertexShader:`

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
		}`},ba={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Sc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function lg(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=bE(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new k(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new bs(s,e,e);return r.wrapS=Pn,r.wrapT=Pn,r.needsUpdate=!0,r}function bE(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var Sa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:ed(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $e},cameraProjectionMatrixInverse:{value:new je},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function ed(n,e,t){let i=SE(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function SE(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new k(Math.cos(r),Math.sin(r),o))}return i}var Tc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,d=c-h,g=e-f,x=t-d,m,p;g>x?(m=1,p=0):(m=0,p=1);let S=g-m+u,M=x-p+u,y=g-1+2*u,T=x-1+2*u,b=l&255,v=c&255,w=this.perm[b+this.perm[v]]%12,_=this.perm[b+m+this.perm[v+p]]%12,E=this.perm[b+1+this.perm[v+1]]%12,R=.5-g*g-x*x;R<0?i=0:(R*=R,i=R*R*this.dot(this.grad3[w],g,x));let U=.5-S*S-M*M;U<0?s=0:(U*=U,s=U*U*this.dot(this.grad3[_],S,M));let H=.5-y*y-T*T;return H<0?r=0:(H*=H,r=H*H*this.dot(this.grad3[E],y,T)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),f=Math.floor(i+c),d=1/6,g=(u+h+f)*d,x=u-g,m=h-g,p=f-g,S=e-x,M=t-m,y=i-p,T,b,v,w,_,E;S>=M?M>=y?(T=1,b=0,v=0,w=1,_=1,E=0):S>=y?(T=1,b=0,v=0,w=1,_=0,E=1):(T=0,b=0,v=1,w=1,_=0,E=1):M<y?(T=0,b=0,v=1,w=0,_=1,E=1):S<y?(T=0,b=1,v=0,w=0,_=1,E=1):(T=0,b=1,v=0,w=1,_=1,E=0);let R=S-T+d,U=M-b+d,H=y-v+d,P=S-w+2*d,F=M-_+2*d,O=y-E+2*d,Y=S-1+3*d,G=M-1+3*d,J=y-1+3*d,re=u&255,me=h&255,ye=f&255,ce=this.perm[re+this.perm[me+this.perm[ye]]]%12,ie=this.perm[re+T+this.perm[me+b+this.perm[ye+v]]]%12,Q=this.perm[re+w+this.perm[me+_+this.perm[ye+E]]]%12,ee=this.perm[re+1+this.perm[me+1+this.perm[ye+1]]]%12,L=.6-S*S-M*M-y*y;L<0?s=0:(L*=L,s=L*L*this.dot3(this.grad3[ce],S,M,y));let B=.6-R*R-U*U-H*H;B<0?r=0:(B*=B,r=B*B*this.dot3(this.grad3[ie],R,U,H));let X=.6-P*P-F*F-O*O;X<0?o=0:(X*=X,o=X*X*this.dot3(this.grad3[Q],P,F,O));let $=.6-Y*Y-G*G-J*J;return $<0?a=0:($*=$,a=$*$*this.dot3(this.grad3[ee],Y,G,J)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,f,d,g,x=(e+t+i+s)*l,m=Math.floor(e+x),p=Math.floor(t+x),S=Math.floor(i+x),M=Math.floor(s+x),y=(m+p+S+M)*c,T=m-y,b=p-y,v=S-y,w=M-y,_=e-T,E=t-b,R=i-v,U=s-w,H=_>E?32:0,P=_>R?16:0,F=E>R?8:0,O=_>U?4:0,Y=E>U?2:0,G=R>U?1:0,J=H+P+F+O+Y+G,re=o[J][0]>=3?1:0,me=o[J][1]>=3?1:0,ye=o[J][2]>=3?1:0,ce=o[J][3]>=3?1:0,ie=o[J][0]>=2?1:0,Q=o[J][1]>=2?1:0,ee=o[J][2]>=2?1:0,L=o[J][3]>=2?1:0,B=o[J][0]>=1?1:0,X=o[J][1]>=1?1:0,$=o[J][2]>=1?1:0,de=o[J][3]>=1?1:0,we=_-re+c,Ae=E-me+c,V=R-ye+c,Ve=U-ce+c,ze=_-ie+2*c,Be=E-Q+2*c,Ie=R-ee+2*c,qe=U-L+2*c,Fe=_-B+3*c,D=E-X+3*c,A=R-$+3*c,j=U-de+3*c,xe=_-1+4*c,_e=E-1+4*c,he=R-1+4*c,Ce=U-1+4*c,Le=m&255,Ne=p&255,ke=S&255,Ee=M&255,Ue=a[Le+a[Ne+a[ke+a[Ee]]]]%32,se=a[Le+re+a[Ne+me+a[ke+ye+a[Ee+ce]]]]%32,be=a[Le+ie+a[Ne+Q+a[ke+ee+a[Ee+L]]]]%32,ne=a[Le+B+a[Ne+X+a[ke+$+a[Ee+de]]]]%32,Me=a[Le+1+a[Ne+1+a[ke+1+a[Ee+1]]]]%32,fe=.6-_*_-E*E-R*R-U*U;fe<0?u=0:(fe*=fe,u=fe*fe*this.dot4(r[Ue],_,E,R,U));let ge=.6-we*we-Ae*Ae-V*V-Ve*Ve;ge<0?h=0:(ge*=ge,h=ge*ge*this.dot4(r[se],we,Ae,V,Ve));let W=.6-ze*ze-Be*Be-Ie*Ie-qe*qe;W<0?f=0:(W*=W,f=W*W*this.dot4(r[be],ze,Be,Ie,qe));let Te=.6-Fe*Fe-D*D-A*A-j*j;Te<0?d=0:(Te*=Te,d=Te*Te*this.dot4(r[ne],Fe,D,A,j));let C=.6-xe*xe-_e*_e-he*he-Ce*Ce;return C<0?g=0:(C*=C,g=C*C*this.dot4(r[Me],xe,_e,he,Ce)),27*(u+h+f+d+g)}};var Ta=class n extends Ln{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=lg(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new qt(this.width,this.height,{type:un}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new vt({defines:Object.assign({},Ma.defines),uniforms:En.clone(Ma.uniforms),vertexShader:Ma.vertexShader,fragmentShader:Ma.fragmentShader,blending:tn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new El,this.normalMaterial.blending=tn,this.pdMaterial=new vt({defines:Object.assign({},Sa.defines),uniforms:En.clone(Sa.uniforms),vertexShader:Sa.vertexShader,fragmentShader:Sa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new vt({defines:Object.assign({},ba.defines),uniforms:En.clone(ba.uniforms),vertexShader:ba.vertexShader,fragmentShader:ba.fragmentShader,blending:tn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new vt({uniforms:En.clone(Vs.uniforms),vertexShader:Vs.vertexShader,fragmentShader:Vs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Nl,blendDst:ao,blendEquation:Fn,blendSrcAlpha:Dl,blendDstAlpha:ao,blendEquationAlpha:Fn}),this.blendMaterial=new vt({uniforms:En.clone(Sc.uniforms),vertexShader:Sc.vertexShader,fragmentShader:Sc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ea,blendSrc:Nl,blendDst:ao,blendEquation:Fn,blendSrcAlpha:Dl,blendDstAlpha:ao,blendEquationAlpha:Fn}),this.fsQuad=new Di(null),this.originalClearColor=new Re,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new eo,this.depthTexture.format=ys,this.depthTexture.type=vs,this.normalRenderTarget=new qt(this.width,this.height,{minFilter:Kt,magFilter:Kt,type:un,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=ed(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new Tc,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new bs(s,e,e,Bn,xi);return r.wrapS=Pn,r.wrapT=Pn,r.needsUpdate=!0,r}};Ta.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var cg=58,TE=82,ug=94,EE=9,wE=20,hg=4.7,AE=1.95,RE=3,CE=4,PE=5,Ec=.6;function Gs(n,e,t){return n<e?e:n>t?t:n}function Lt(n,e=0){return Number.isFinite(n)?n:e}function IE(n,e,t){return n+(e-n)*t}function yo(n,e){return 1-Math.exp(-n*e)}function LE(n){return Number.isFinite(n)?Gs(n,0,.1):0}function fg(n){let e=new k,t=new k,i=new k,s=new k,r={x:1,z:0},o=!1,a=0,l=0,c=0,u=cg,h=hg,f=0,d=0,g=0;function x(T,b){let v=Lt(T.x),w=Lt(T.y),_=Lt(T.z),E=Lt(T.heading)+Lt(T.yaw),R=Math.sin(E),U=Math.cos(E),H=-U,P=R;r.x=H,r.z=P;let F=T.airborne?1:0,O=b*b,Y=hg-.3*O+.9*F,G=AE-.15*O+.7*F;h=Y;let J=Gs(Lt(T.slope),-.15,.15),re=Gs(Lt(T.lean),-1.5,1.5),me=0;e.set(v-R*Y+H*me,w+G-J*Y,_-U*Y+P*me),e.y<w+Ec&&(e.y=w+Ec),t.set(v+R*8.5,w+.55+J*4-1.5*F,_+U*8)}function m(T){return IE(cg,TE,Math.pow(T,1.6))}function p(T,b,v,w){n.position.set(i.x+r.x*b,Math.max(i.y+v,w),i.z+r.z*b),n.lookAt(s),n.rotateZ(T)}function S(T,b){if(T=LE(T),!o){M(b);return}a+=T;let v=Gs(Lt(b.speedRatio),0,1);x(b,v);let w=Lt(b.x)-f,_=Lt(b.y)-d,E=Lt(b.z)-g;w*w+_*_+E*E<400&&(i.x+=w,i.y+=_,i.z+=E,s.x+=w,s.y+=_,s.z+=E),f=Lt(b.x),d=Lt(b.y),g=Lt(b.z),i.lerp(e,yo(EE,T));let R=i.x-Lt(b.x),U=i.z-Lt(b.z),H=Math.hypot(R,U);H>.001&&(i.x=Lt(b.x)+R/H*h,i.z=Lt(b.z)+U/H*h),s.lerp(t,yo(wE,T));let P=Lt(b.y)+Ec;i.y<P&&(i.y=P),c*=Math.exp(-PE*T);let F=v*v*v*2.2,O=Math.sin(a*61.3)*.6+Math.sin(a*97.1+1.7)*.4,Y=Math.sin(a*73.9+.4)*.6+Math.sin(a*113.7+2.9)*.4,G=Math.sin(a*67.8+1.1)*.6+Math.sin(a*121.4+.3)*.4,J=c*.35+F*.01,re=O*J,me=Y*J,ye=G*(c*.03+F*.002);l+=((b.boosting?1:0)-l)*yo(CE,T);let ce=m(v),ie=ce+(ug-ce)*l;u+=(ie-u)*yo(RE,T),Math.abs(n.fov-u)>1e-4&&(n.fov=u,n.updateProjectionMatrix()),p(ye,re,me,P)}function M(T){let b=Gs(Lt(T.speedRatio),0,1);x(T,b),i.copy(e),s.copy(t),f=Lt(T.x),d=Lt(T.y),g=Lt(T.z),o=!0,a=0,c=0,l=T.boosting?1:0,u=m(b)+(ug-m(b))*l,n.fov=u,n.updateProjectionMatrix(),p(0,0,0,Lt(T.y)+Ec)}function y(T){c=Gs(c+Lt(T),0,1.5)}return{update:S,shake:y,snap:M}}var DE=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,NE=`
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
}`;function dg(n,e,t,i,s={}){let r=i||{},o=Lt(r.bloom,.5),a=null,l=null,c=null,u=null,h=0,f=0,d=0,g=0,x=0,m=Math.min(globalThis.devicePixelRatio||1,2);try{let b=n.getSize(new $e),v=new qt(Math.max(1,b.x),Math.max(1,b.y),{type:un,samples:4});a=new _c(n,v),a.setPixelRatio(m),a.addPass(new Mc(e,t)),s.ao&&!r.night&&(u=new Ta(e,t,Math.max(1,b.x),Math.max(1,b.y)),u.updateGtaoMaterial({radius:3.2,distanceExponent:1.4,thickness:4,scale:1.15,samples:12,screenSpaceRadius:!1}),u.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),u.blendIntensity=.6,a.addPass(u)),l=new vo(new $e(512,512),o*.8,.75,.9),a.addPass(l),c=new xo({uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uBoost:{value:0},uTime:{value:0}},vertexShader:DE,fragmentShader:NE}),a.addPass(c),a.addPass(new bc)}catch(b){console.warn("Post-traitement indisponible, rendu direct :",b),a=null,l=null,c=null}function p(b,v){!Number.isFinite(b)||!Number.isFinite(v)||b<=0||v<=0||(m=Math.min(globalThis.devicePixelRatio||1,2),n.setPixelRatio(m),n.setSize(b,v),a&&(a.setPixelRatio(m),a.setSize(b,v)))}function S(b,v){h=Gs(Lt(b,0),0,1),f=v?1:0}function M(b){if(b=Number.isFinite(b)?Gs(b,0,.1):0,x+=b,d+=(h-d)*yo(8,b),g+=(f-g)*yo(8,b),c&&(c.uniforms.uSpeed.value=d,c.uniforms.uBoost.value=g,c.uniforms.uTime.value=x),a)try{a.render(b);return}catch(v){console.warn("\xC9chec du post-traitement, rendu direct :",v),a=null}n.render(e,t)}function y(b){u&&(u.enabled=!!b)}function T(){u&&u.dispose&&u.dispose(),a&&a.dispose(),l&&l.dispose&&l.dispose(),c&&c.dispose&&c.dispose(),a=null}return{render:M,setSize:p,setSpeed:S,dispose:T,setAO:y,get hasAO(){return!!u},get aoOn(){return!!u&&u.enabled}}}function pg(n){if(!Number.isFinite(n))return`--'--"---`;let e=Math.floor(n/60),t=Math.floor(n%60),i=Math.floor(n*1e3%1e3);return`${String(e).padStart(2,"0")}'${String(t).padStart(2,"0")}"${String(i).padStart(3,"0")}`}var Gt=(n,e,t,i)=>{let s=document.createElement(n);return e&&(s.className=e),i!=null&&(s.textContent=i),t?.appendChild(s),s};function mg(n){let e=Gt("div","h2-root",n);e.hidden=!0;let t=Gt("div","h2-pos",e),i=Gt("span","h2-pos-num",t,"1"),s=Gt("span","h2-pos-tot",t,"/8");Gt("span","h2-pos-lbl",t,"POS");let r=Gt("div","h2-right",e),o=Gt("div","h2-pill h2-lap",r),a=Gt("span","h2-lap-lbl",o,"TOUR"),l=Gt("span","h2-lap-num",o,"1"),c=Gt("span","h2-lap-tot",o,"/3"),u=Gt("div","h2-pill h2-time",r,`00'00"000`),h=Gt("div","h2-best",r,""),f=Gt("canvas","h2-map",e),d=220;f.width=f.height=d;let g=f.getContext("2d"),x=document.createElement("canvas");x.width=x.height=d;let m=null,p=1,S=0,M=0,y=Gt("div","h2-dial",e),T=Gt("canvas","h2-dial-canvas",y),b=300;T.width=T.height=b;let v=T.getContext("2d"),w=Gt("div","h2-gear",y,"1"),_=Gt("div","h2-speed",y,"0");Gt("div","h2-unit",y,"km/h");let E=Gt("div","h2-boost",y),R=[],U=Gt("div","h2-count",e,""),H=Gt("div","h2-flash",e,""),P=Gt("div","h2-wrong",e,"CONTRESENS");P.hidden=!0;let F={},O=(L,B,X)=>{F[L]!==X&&(F[L]=X,B.textContent=X)},Y=Math.PI*.75,G=Math.PI*2.25,J=-1;function re(L){let B=Math.round(L*120)/120;if(B===J)return;J=B;let X=b/2,$=b*.44;v.clearRect(0,0,b,b),v.lineCap="butt",v.beginPath(),v.arc(X,X,$*1.05,0,Math.PI*2),v.fillStyle="rgba(8, 10, 16, 0.42)",v.fill();let de=(V,Ve,ze,Be)=>{v.beginPath(),v.arc(X,X,$,V,Ve),v.strokeStyle=ze,v.lineWidth=Be,v.stroke()},we=Y+(G-Y)*.86;de(Y,we,"rgba(255,255,255,0.28)",b*.05),de(we,G,"rgba(226,40,48,0.55)",b*.05);let Ae=Y+(G-Y)*Math.min(1,Math.max(0,B));de(Y,Math.min(Ae,we),"#ffffff",b*.05),Ae>we&&de(we,Ae,"#e8242e",b*.05);for(let V=0;V<=8;V++){let Ve=Y+(G-Y)*V/8;v.beginPath(),v.moveTo(X+Math.cos(Ve)*$*.8,X+Math.sin(Ve)*$*.8),v.lineTo(X+Math.cos(Ve)*$*.9,X+Math.sin(Ve)*$*.9),v.strokeStyle=V>=7?"#e8242e":"rgba(255,255,255,0.75)",v.lineWidth=3,v.stroke()}v.beginPath(),v.moveTo(X+Math.cos(Ae)*$*.3,X+Math.sin(Ae)*$*.3),v.lineTo(X+Math.cos(Ae)*$*.98,X+Math.sin(Ae)*$*.98),v.strokeStyle="#ffffff",v.lineWidth=4,v.stroke()}re(0);function me(L){m=L;let B=L.bounds,X=B.maxX-B.minX,$=B.maxZ-B.minZ;p=(d-36)/Math.max(X,$),S=(d-X*p)/2-B.minX*p,M=(d-$*p)/2-B.minZ*p;let de=x.getContext("2d");de.clearRect(0,0,d,d);let we=()=>{de.beginPath(),L.pts.forEach((Ae,V)=>{let Ve=Ae.x*p+S,ze=Ae.z*p+M;V?de.lineTo(Ve,ze):de.moveTo(Ve,ze)}),L.open||de.closePath()};de.lineJoin="round",we(),de.strokeStyle="rgba(0,0,0,0.45)",de.lineWidth=9,de.stroke(),we(),de.strokeStyle="#ffffff",de.lineWidth=5,de.stroke(),we(),de.strokeStyle="rgba(20,24,34,0.9)",de.lineWidth=2,de.stroke(),g.clearRect(0,0,d,d),g.drawImage(x,0,0)}function ye(L){if(!m)return;g.clearRect(0,0,d,d),g.drawImage(x,0,0);let B=m.pts.length,X=($,de)=>{let we=Math.floor(($.s%m.length+m.length)%m.length/m.step);we>=B&&(we=B-1);let Ae=m.pts[we],V=Ae.x*p+S,Ve=Ae.z*p+M;g.beginPath(),g.arc(V,Ve,de?6:3.6,0,Math.PI*2),g.fillStyle=de?"#e8242e":"#ffffff",g.fill(),g.lineWidth=1.5,g.strokeStyle="rgba(0,0,0,0.6)",g.stroke()};for(let $ of L)$.isPlayer||X($,!1);for(let $ of L)$.isPlayer&&X($,!0)}let ce=null;function ie(L){O("pos",i,String(L.position)),O("tot",s,"/"+L.total),O("lap",l,String(L.lap)),O("laps",c,"/"+L.laps),O("time",u,pg(L.time)),O("best",h,L.bestLap?"MEILLEUR "+pg(L.bestLap):""),O("speed",_,String(Math.round(L.speedKmh))),O("gear",w,String(L.gear||1)),re(L.rpm??Math.min(1,L.speedKmh/290));let B=L.boostCharges|0,X=L.boostT>0?1:0,$=B+":"+X;if(F.boost!==$){for(F.boost=$;R.length<B+X;)R.push(Gt("span","h2-boost-dot",E));R.forEach((de,we)=>{de.hidden=we>=B+X,de.classList.toggle("h2-on",X&&we===B)})}if(L.countdown===null||L.countdown===void 0)ce===null&&F.count!==""&&(F.count="",U.textContent="",U.classList.remove("h2-show"));else if(L.countdown>0){let de=String(Math.ceil(L.countdown));F.count!==de&&(F.count=de,U.textContent=de,U.classList.remove("h2-show"),U.offsetWidth,U.classList.add("h2-show"))}else F.count!=="GO !"&&(F.count="GO !",U.textContent="GO !",U.classList.remove("h2-show"),U.offsetWidth,U.classList.add("h2-show"),clearTimeout(ce),ce=setTimeout(()=>{ce=null},800));P.hidden===!!L.wrongWay&&(P.hidden=!L.wrongWay)}let Q=null;function ee(L,B=900){H.textContent=L,H.classList.remove("h2-show"),H.offsetWidth,H.classList.add("h2-show"),clearTimeout(Q),Q=setTimeout(()=>H.classList.remove("h2-show"),B)}return{show(){e.hidden=!1},hide(){e.hidden=!0},update:ie,setTrack:me,updateMinimap:ye,flash:ee,setLapLabel(L){a.textContent!==L&&(a.textContent=L)},dispose(){e.remove()}}}var h2=or.maxSpeed*3.6;var gg=360;var xg=n=>(n<10?"0":"")+n;function td(n){if(n==null||!Number.isFinite(n))return"--:--.--";let e=Math.max(0,Math.floor(n*100+1e-6)),t=Math.floor(e/6e3),i=Math.floor(e/100)%60;return`${t}:${xg(i)}.${xg(e%100)}`}var f2=`
  <div class="pr-pos"><span class="pr-pos-cur">-</span><span class="pr-pos-sep">/</span><span class="pr-pos-tot">-</span></div>
  <div class="pr-wrong">Sens interdit</div>
  <div class="pr-timing">
    <div class="pr-lap">Tour -/-</div>
    <div class="pr-time">0:00.00</div>
    <div class="pr-best">Meilleur <span class="pr-best-v">--:--.--</span></div>
  </div>
  <div class="pr-left">
    <div class="pr-mm-wrap"><canvas class="pr-minimap" width="${gg}" height="${gg}"></canvas></div>
    <div class="pr-boosts"><span class="pr-boost-lbl">Boost</span><div class="pr-dias"></div></div>
  </div>
  <div class="pr-speed">
    <div class="pr-speed-num">0</div>
    <div class="pr-speed-unit">km/h</div>
    <div class="pr-bar"></div>
  </div>
  <div class="pr-count"></div>
  <div class="pr-flash"></div>
`;var vg="ABCDEFGHJKMNPQRSTUVWXYZ23456789",yg=0;function nd(){yg++;let n=kn((Date.now()^Math.imul(yg,2654435761))>>>0),e="RUSH-";for(let t=0;t<4;t++)e+=vg[n.int(0,vg.length-1)];return e}var dt=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function _g(n){return n?typeof n=="string"?Ci[n]?.name||n:n.name||Ci[n.id]?.name||"":""}function UE(n){return n&&typeof n=="object"?n:ar.find(e=>e.id===n)||{id:String(n),name:String(n),icon:"\u2022"}}function id(n){let e=new Map;for(let i of n||[]){let s=UE(i),r=e.get(s.id);r?r.n++:e.set(s.id,{info:s,n:1})}if(!e.size)return'<span class="pr-own-none">Aucune pour l\u2019instant</span>';let t="";for(let{info:i,n:s}of e.values())t+=`<span class="pr-own">${dt(i.icon)} ${dt(i.name)}${s>1?` \xD7${s}`:""}</span>`;return t}function sd(n){return(n||[]).map((e,t)=>`<li class="pr-srow${e.isPlayer?" pr-me":""}" style="--i:${t}"><span class="pr-rk">${t+1}</span><span class="pr-rn">${dt(e.name)}</span><span class="pr-rp">${e.points??0}<small> pts</small></span></li>`).join("")}function Mg(n){let e=document.createElement("div");e.className="pr-menu pr-off",n.appendChild(e);let t=null,i=null;function s(M){try{t&&typeof t.play=="function"&&t.play(M)}catch{}}function r(M,y){let T=i;if(!T||!T.items.length)return;let b=T.items.length,v=(M%b+b)%b,w=v!==T.index;T.index=v,T.focused=!0;for(let _=0;_<b;_++)T.items[_].classList.toggle("pr-sel",_===v);try{T.items[v].focus({preventScroll:!0})}catch{}w&&y&&s("select")}function o(M){let y=i;y&&(i=null,e.innerHTML="",e.classList.add("pr-off"),s("confirm"),y.resolve(M))}function a(M){return i=null,e.innerHTML=M.html,e.classList.remove("pr-off"),new Promise(y=>{i={items:Array.from(e.querySelectorAll("[data-nav]")),index:0,focused:!1,actions:M.actions||{},resolve:y},M.onMount&&M.onMount(e,o),r(M.initial||0,!1)})}e.addEventListener("click",M=>{let y=i;if(!y||!(M.target instanceof Element))return;let T=M.target.closest("[data-act]");if(!T||!e.contains(T)||T.disabled)return;let b=y.items.indexOf(T);b>=0&&b!==y.index&&r(b,!1);let v=y.actions[T.dataset.act];v&&v(T,o)}),e.addEventListener("mouseover",M=>{let y=i;if(!y||!(M.target instanceof Element))return;let T=M.target.closest("[data-nav]");if(!T)return;let b=y.items.indexOf(T);b>=0&&b!==y.index&&r(b,!0)}),window.addEventListener("keydown",M=>{let y=i;if(!y)return;let T=M.target,b=!!T&&T.tagName==="INPUT",v=M.key||"",w=v.toLowerCase();if(v==="ArrowUp"||!b&&(v==="ArrowLeft"||w==="z"||w==="q")){M.preventDefault(),r(y.index-1,!0);return}if(v==="ArrowDown"||!b&&(v==="ArrowRight"||w==="s"||w==="d")){M.preventDefault(),r(y.index+1,!0);return}if(b){if(v==="Enter"){M.preventDefault();let _=e.querySelector("[data-main]");_&&_.click()}return}if(v.length===1){let _=y.items.find(E=>E.dataset.key===v);_&&(M.preventDefault(),_.click())}});function l({dailySeed:M,meta:y,route:T=null,records:b=null}={}){let v=y||{};if(T)return f(T,v,b||{});let w=String(M||"RUSH-DAILY").toUpperCase(),_=nd();return a({initial:2,html:`
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
</section>`,actions:{dice:E=>{let R=E.closest(".pr-screen").querySelector("[data-seed]");R&&(R.value=nd())},launch:(E,R)=>{let U=E.closest(".pr-screen").querySelector("[data-seed]"),H=(U?U.value:"").trim().toUpperCase();H||(H=nd()),R({seed:H})},daily:(E,R)=>R({seed:w})}})}let c=M=>`${Math.floor(M/60)}'${String(Math.floor(M%60)).padStart(2,"0")}"`,u=M=>M==null?"":` <small>${M<0?"\u2212":"+"}${Math.abs(M).toFixed(1)} s</small>`;function h(M){if(!M)return"";let y='<li style="display:flex;justify-content:space-between;gap:1.5em">',T=M.splits.map((v,w)=>`${y}<span>${w+1} \xB7 ${dt(v.name.split(" \xB7 ")[0])}</span><b>${dt(c(v.time))}${u(v.delta)}${v.record&&v.best!==null?" \u2605":""}</b></li>`).join(""),b;return M.total?M.total.best===null?b=`Temps total <b>${dt(c(M.time))}</b> \xB7 premier chrono enregistr\xE9`:M.total.record?b=`Temps total <b>${dt(c(M.time))}</b> \xB7 <b>nouveau record</b>${u(M.total.delta)}`:b=`Temps total <b>${dt(c(M.time))}</b> \xB7 record ${dt(c(M.total.best))}${u(M.total.delta)}`:b=`Temps <b>${dt(c(M.time))}</b> \xB7 le record de l'itin\xE9raire ne compte que depuis Catane`,`<p class="pr-sub">${b}</p><ul style="list-style:none;margin:.6em 0;padding:0;display:grid;gap:.25em;font-size:.82em;text-align:left">${T}</ul>`}function f(M,y,T){let b=Object.keys(T.splits||{}).length,v=(M.stages.reduce((_,E)=>_+E.length,0)/1e3).toFixed(0),w=M.stages.map((_,E)=>`<option value="${E+1}">${E+1} \xB7 ${dt(_.subtitle)}</option>`).join("");return a({initial:1,html:`
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
</section>`,actions:{launch:(_,E)=>{let R=_.closest(".pr-screen").querySelector("[data-from]");E({seed:"A18-A20",stage:Number(R?R.value:1)||1})},multi:(_,E)=>E({multi:!0})}})}function d({stage:M={},index:y=1,total:T=1,standings:b=[],weather:v}={}){let w=_g(v)||_g(M.weather),_=M.laps??0;return a({initial:0,html:`
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
    <ol class="pr-slist">${sd(b)}</ol>
  </div></div>
</section>`,actions:{go:(E,R)=>R(void 0)}})}function g({results:M=[],standings:y=[],stage:T={}}={}){let v=[...M].sort((w,_)=>(w.position??99)-(_.position??99)).map((w,_)=>{let E=kl[(w.position??0)-1]??0;return`<tr class="pr-tr${w.isPlayer?" pr-me":""}" style="--i:${_}"><td class="pr-c-pos">${dt(w.position??"")}</td><td class="pr-c-name">${dt(w.name)}</td><td class="pr-c-tm">${w.time==null?"Abandon":td(w.time)}</td><td class="pr-c-best">${w.bestLap==null?"\u2014":td(w.bestLap)}</td><td class="pr-c-pts">${E>0?"+"+E:"0"}</td></tr>`}).join("");return a({initial:0,html:`
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
    <ol class="pr-slist">${sd(y)}</ol>
  </div></div>
</section>`,actions:{next:(w,_)=>_(void 0)}})}function x({choices:M=[],index:y=1,total:T=1,owned:b=[]}={}){let v=M.map((w,_)=>`<button type="button" class="pr-card pr-slide" style="--i:${_}" data-nav data-key="${_+1}" data-act="pick" data-id="${dt(w.id)}"><span class="pr-card-in"><span class="pr-card-key">${_+1}</span><span class="pr-card-ico" aria-hidden="true">${dt(w.icon)}</span><span class="pr-card-name">${dt(w.name)}</span><span class="pr-card-tag">${dt(w.tagline)}</span><span class="pr-card-pro">\u25B2 ${dt(w.pro)}</span><span class="pr-card-con">\u25BC ${dt(w.con)}</span></span></button>`).join("");return a({initial:0,html:`
<section class="pr-screen pr-upg">
  <div class="pr-kicker pr-slide" style="--i:0">\xC9tape ${dt(y)}/${dt(T)} accomplie</div>
  <h2 class="pr-h2 pr-slide" style="--i:0">Choisissez une am\xE9lioration</h2>
  <div class="pr-cards">${v}</div>
  <div class="pr-owned pr-slide" style="--i:3"><span class="pr-owned-lbl">D\xE9j\xE0 poss\xE9d\xE9es</span>${id(b)}</div>
</section>`,actions:{pick:(w,_)=>_(w.dataset.id)}})}function m({standings:M=[],playerPosition:y,run:T={},meta:b}={}){let v=b||{},w=y??M.findIndex(R=>R.isPlayer)+1,_=w===1,E=T.real?_?"Victoire !":`${dt(w)}e \xE0 l'arriv\xE9e`:_?"Champion !":`${dt(w)}e au championnat`;return a({initial:T.real?0:1,html:`
<section class="pr-screen pr-end">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-end-title${_?" pr-gold":""}">${E}</div>
    <ol class="pr-slist pr-slist-big">${sd(M)}</ol>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    ${T.real?`<h3 class="pr-h3">${dt(T.stages[0].name)}</h3>
    <p class="pr-sub">${dt(T.stages[0].subtitle)}</p>${h(T.summary)}
    <h3 class="pr-h3">Am\xE9liorations prises</h3>
    <div class="pr-owned-list">${id(T.upgrades)}</div>`:`<h3 class="pr-h3">Am\xE9liorations du run</h3>
    <div class="pr-owned-list">${id(T.upgrades)}</div>
    <h3 class="pr-h3">Seed</h3>
    <div class="pr-seedline">
      <code class="pr-seedcode">${dt(T.seed)}</code>
      <button type="button" class="pr-btn pr-btn-small" data-nav data-act="copy">Copier la seed</button>
    </div>`}
    ${T.real?"":`<p class="pr-cmds">Runs : ${v.runs??0} \xB7 Victoires : ${v.wins??0} \xB7 Record : ${v.bestPoints??0} pts</p>`}
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="again">${T.real?"Repartir":"Nouveau run"}</button>
  </div></div>
</section>`,actions:{copy:R=>{let U="Copier la seed",H;try{H=navigator.clipboard.writeText(String(T.seed??""))}catch(F){H=Promise.reject(F)}let P=F=>{R.textContent=F,setTimeout(()=>{R.isConnected&&(R.textContent=U)},1500)};H.then(()=>P("Copi\xE9e !"),()=>P("Copie impossible"))},again:(R,U)=>U(void 0)}})}function p(M){t=M||null}function S(){i=null,e.innerHTML="",e.classList.add("pr-off")}return{showTitle:l,showStageIntro:d,showResults:g,showUpgradeChoice:x,showRunEnd:m,hideAll:S,setAudio:p,mount:a}}var bg=typeof globalThis<"u"&&(globalThis.AudioContext||globalThis.webkitAudioContext)||null,Sg=.6,FE=.3,rd=6,xr=55,OE=.1,BE=25,Tg=60/128/4,zE=[{root:45,iv:[3,7]},{root:41,iv:[4,7]},{root:48,iv:[4,7]},{root:43,iv:[4,7]}],_o=n=>Number.isFinite(n)?n<0?0:n>1?1:n:0,Eg=n=>440*Math.pow(2,(n-69)/12);function kE(n){let t=new Float32Array(1024);for(let i=0;i<1024;i++){let s=i*2/1023-1;t[i]=(1+n)*s/(1+n*Math.abs(s))}return t}function wg(){let n=null,e=!1,t=null,i=null,s=null,r=null,o=null,a=null,l=null,c=!1,u=!1,h=null,f=0,d=0,g=-1,x=0,m=0,p=0;function S(L){let B=Math.round(2*L),X=Math.round(.1*L),$=new Float32Array(B+X),de=0,we=0,Ae=0,V=0,Ve=0,ze=0,Be=0;for(let A=0;A<B+X;A++){let j=Math.random()*2-1;de=.99886*de+j*.0555179,we=.99332*we+j*.0750759,Ae=.969*Ae+j*.153852,V=.8665*V+j*.3104856,Ve=.55*Ve+j*.5329522,ze=-.7616*ze-j*.016898,$[A]=(de+we+Ae+V+Ve+ze+Be+j*.5362)*.11,Be=j*.115926}let Ie=n.createBuffer(1,B,L),qe=Ie.getChannelData(0),Fe=0;for(let A=0;A<B;A++){let j=A<X?$[A]*(A/X)+$[B+A]*(1-A/X):$[A];qe[A]=j;let xe=Math.abs(j);xe>Fe&&(Fe=xe)}let D=Fe>0?1/Fe:1;for(let A=0;A<B;A++)qe[A]*=D;return Ie}function M(L){let B=n.createBufferSource();return B.buffer=i,B.loop=!0,B.connect(L),B.start(0,Math.random()*1.5),B}function y(L){let B=n.createGain();return B.gain.value=L,B}function T(L,B,X){let $=n.createBiquadFilter();return $.type=L,$.frequency.value=B,$.Q.value=X,$}function b(){i=S(n.sampleRate),t=y(c?0:Sg);let L=n.createDynamicsCompressor();L.threshold.value=-16,L.knee.value=12,L.ratio.value=4,L.attack.value=.005,L.release.value=.2,t.connect(L),L.connect(n.destination);let B=n.createOscillator();B.type="sawtooth",B.frequency.value=xr,B.detune.value=-6;let X=n.createOscillator();X.type="sawtooth",X.frequency.value=xr,X.detune.value=6;let $=n.createOscillator();$.type="square",$.frequency.value=xr/2;let de=y(1);B.connect(y(.28)).connect(de),X.connect(y(.28)).connect(de),$.connect(y(.22)).connect(de);let we=T("bandpass",xr*4,1.2),Ae=y(.04);M(we),we.connect(Ae).connect(de);let V=n.createWaveShaper();V.curve=kE(4),V.oversample="2x",de.connect(V);let Ve=T("lowpass",300,1.3);V.connect(Ve);let ze=y(0);Ve.connect(ze).connect(t),B.start(),X.start(),$.start(),s={osc1:B,osc2:X,osc3:$,nBp:we,nGain:Ae,lp:Ve,gain:ze};let Be=T("bandpass",300,.7),Ie=y(0);M(Be),Be.connect(Ie).connect(t),r={filter:Be,gain:Ie};let qe=T("bandpass",1100,4),Fe=y(3),D=y(0);M(qe),qe.connect(Fe).connect(D).connect(t),o={filter:qe,gain:D};let A=T("highpass",900,.5),j=y(3),xe=y(0);M(A),A.connect(j).connect(xe).connect(t),a={gain:xe},l=y(0),l.connect(t),e=!0}function v(L,B,X){let $=n.currentTime;L.cancelScheduledValues($),L.setTargetAtTime(B,$,X)}function w(L){let B=L.t0,X=L.dur,$=n.createOscillator();$.type=L.type||"sine",$.frequency.setValueAtTime(L.f0,B),L.f1&&$.frequency.exponentialRampToValueAtTime(L.f1,B+X);let de=n.createGain();de.gain.setValueAtTime(1e-4,B),de.gain.linearRampToValueAtTime(L.vol,B+(L.attack||.004)),de.gain.exponentialRampToValueAtTime(1e-4,B+X);let we=$;if(L.lp){let Ae=T("lowpass",L.lp,.7);$.connect(Ae),we=Ae}we.connect(de),de.connect(t),$.start(B),$.stop(B+X+.02)}function _(L){let B=L.t0,X=L.dur,$=n.createBufferSource();$.buffer=i;let de=T(L.type,L.f0,L.q||1);L.f1&&de.frequency.exponentialRampToValueAtTime(L.f1,B+X),de.frequency.setValueAtTime(L.f0,B);let we=n.createGain();we.gain.setValueAtTime(1e-4,B),we.gain.linearRampToValueAtTime(L.vol,B+.004),we.gain.exponentialRampToValueAtTime(1e-4,B+X),$.connect(de),de.connect(we),we.connect(t),$.start(B,Math.random()*1.5,X+.02)}function E(L,B){let X=n.createBufferSource();X.buffer=i;let $=T("bandpass",700+Math.random()*900,1.2),de=n.createGain();de.gain.setValueAtTime(0,L),de.gain.linearRampToValueAtTime(B,L+.003),de.gain.linearRampToValueAtTime(0,L+.03),X.connect($),$.connect(de),de.connect(t),X.start(L,Math.random()*1.5,.05)}let R={beep(L){w({type:"square",f0:440,t0:L,dur:.12,vol:.12,lp:2400})},go(L){w({type:"sawtooth",f0:880,t0:L,dur:.4,vol:.12,lp:3e3}),w({type:"sine",f0:1320,t0:L,dur:.4,vol:.06}),w({type:"sine",f0:1760,t0:L+.02,dur:.25,vol:.04}),_({t0:L,dur:.05,vol:.1,type:"highpass",f0:3e3,q:.7})},boost(L){_({t0:L,dur:.6,vol:.25,type:"bandpass",f0:300,f1:3e3,q:1.2}),w({type:"sawtooth",f0:150,f1:600,t0:L,dur:.6,vol:.1,lp:1500,attack:.02})},jump(L){_({t0:L,dur:.25,vol:.2,type:"bandpass",f0:400,f1:1600,q:1})},land(L){w({type:"sine",f0:90,f1:50,t0:L,dur:.2,vol:.6,attack:.002}),_({t0:L,dur:.2,vol:.3,type:"lowpass",f0:800,q:.7})},hit(L){_({t0:L,dur:.08,vol:.3,type:"highpass",f0:2e3,q:.7});let B=340,X=[[1,.12,.35],[2.76,.08,.25],[5.4,.05,.2],[8.93,.03,.15]];for(let[$,de,we]of X)w({type:"sine",f0:B*$,t0:L,dur:we,vol:de,attack:.001})},select(L){w({type:"sine",f0:2400,t0:L,dur:.03,vol:.15,attack:.002})},confirm(L){w({type:"triangle",f0:660,t0:L,dur:.12,vol:.2}),w({type:"triangle",f0:990,t0:L+.09,dur:.18,vol:.2})},win(L){[523,659,784,1047,1319].forEach((X,$)=>{let de=$<4?.13:.5,we=L+$*.11;w({type:"square",f0:X,t0:we,dur:de,vol:.1,lp:2500}),w({type:"triangle",f0:X,t0:we,dur:de,vol:.12})})},lose(L){[392,330,262].forEach((B,X)=>{w({type:"triangle",f0:B,t0:L+X*.22,dur:.3,vol:.25,attack:.01})})},pad(L){w({type:"sawtooth",f0:300,f1:1500,t0:L,dur:.15,vol:.12,lp:4e3})},lap(L){w({type:"sine",f0:1e3,t0:L,dur:.08,vol:.2}),w({type:"sine",f0:1e3,t0:L+.15,dur:.08,vol:.2})}};function U(L){let B=n.createOscillator();B.type="sine",B.frequency.setValueAtTime(150,L),B.frequency.exponentialRampToValueAtTime(45,L+.12);let X=n.createGain();X.gain.setValueAtTime(.5,L),X.gain.exponentialRampToValueAtTime(.001,L+.3),B.connect(X),X.connect(l),B.start(L),B.stop(L+.32)}function H(L,B){let X=n.createBufferSource();X.buffer=i;let $=T("highpass",7e3,.7),de=n.createGain();de.gain.setValueAtTime(B,L),de.gain.exponentialRampToValueAtTime(.001,L+.04),X.connect($),$.connect(de),de.connect(l),X.start(L,Math.random()*1.5,.05)}function P(L,B,X){let $=n.createOscillator();$.type="sawtooth",$.frequency.value=B;let de=T("lowpass",1e3,6);de.frequency.setValueAtTime(1e3,L),de.frequency.exponentialRampToValueAtTime(180,L+X);let we=n.createGain();we.gain.setValueAtTime(1e-4,L),we.gain.linearRampToValueAtTime(.16,L+.01),we.gain.exponentialRampToValueAtTime(1e-4,L+X),$.connect(de),de.connect(we),we.connect(l),$.start(L),$.stop(L+X+.02)}function F(L,B){let X=n.createOscillator();X.type="triangle",X.frequency.value=B;let $=n.createGain();$.gain.setValueAtTime(1e-4,L),$.gain.linearRampToValueAtTime(.035,L+.005),$.gain.exponentialRampToValueAtTime(1e-4,L+.11),X.connect($),$.connect(l),X.start(L),X.stop(L+.13)}function O(L,B){let X=L&15,$=zE[L>>4&3];if(X%4===0&&U(B),X%2===1&&H(B,X%4===2?.1:.05),X%2===0){let de=X===6||X===14?12:0;P(B,Eg($.root+de),Tg*1.8);let we=[0,$.iv[0],$.iv[1],12];F(B,Eg($.root+24+we[X>>1&3]))}}function Y(){if(!e||!u)return;let L=n.currentTime;f<L&&(f=L+.02);let B=L+OE;for(;f<B;)O(d,f),f+=Tg,d++}function G(){if(!e){if(!bg)return;try{n=new bg,b()}catch{n=null,e=!1;return}}if(n.state==="suspended")try{let L=n.resume();L&&L.catch&&L.catch(()=>{})}catch{}}function J(L,B){if(!e)return;L=_o(L),B=_o(B);let X=n.currentTime,$=L*rd,de=Math.min(rd-1,Math.floor($)),Ae=.45+.55*Math.min(1,$-de),V=_o(L/.08),Ve=xr+(xr*Math.pow(rd,Ae)-xr)*V,ze=.5*L+.5*B,Be=260+3200*Math.pow(ze,1.3),Ie=.07+.2*L*(.35+.65*B)+.03*B;if(v(s.osc1.frequency,Ve,.04),v(s.osc2.frequency,Ve,.04),v(s.osc3.frequency,Ve*.5,.04),v(s.nBp.frequency,Ve*4,.05),v(s.nGain.gain,.04+.22*B,.05),v(s.lp.frequency,Be,.05),g!==-1&&de!==g){let qe=s.gain.gain;qe.cancelScheduledValues(X),qe.setTargetAtTime(Ie*.35,X,.004),qe.setTargetAtTime(Ie,X+.06,.03),x=X+.12}if(g=de,X>=x&&v(s.gain.gain,Ie,.05),B>=m)m=B;else if(m-B>.3){if(L>.6&&X>=p){let qe=.12+.2*L;for(let Fe=0;Fe<3;Fe++)E(X+Fe*.05+Math.random()*.02,qe*(1-Fe*.2));p=X+.4}m=B}}function re(L){if(!e)return;let B=_o(L),X=B*B;v(r.filter.frequency,250+1600*X,.2),v(r.gain.gain,.03+.35*X,.15)}function me(L){if(!e)return;let B=_o(L);v(o.filter.frequency,900+500*B,.05),v(o.gain.gain,B,.03)}function ye(L){e&&v(a.gain.gain,_o(L)*.25,.1)}function ce(L){e&&Object.prototype.hasOwnProperty.call(R,L)&&R[L](n.currentTime+.01)}function ie(L){c=!!L,e&&v(t.gain,c?0:Sg,.015)}function Q(){e&&(u||(u=!0,d=0,f=n.currentTime+.05),v(l.gain,FE,.05),h||(h=setInterval(Y,BE)),Y())}function ee(){u=!1,h&&(clearInterval(h),h=null),e&&v(l.gain,0,.05)}return{resume:G,setEngine:J,setWind:re,setSkid:me,setRain:ye,play:ce,setMuted:ie,startMusic:Q,stopMusic:ee}}var od=1/120,Dn=new URLSearchParams(location.search),HE=document.getElementById("game"),Si=new xl({canvas:HE,antialias:!0,powerPreference:"high-performance"});Si.setPixelRatio(Math.min(window.devicePixelRatio,2));Si.shadowMap.enabled=!0;Si.shadowMap.type=Ll;Si.toneMapping=ta;Si.toneMappingExposure=1.05;Si.outputColorSpace=Ct;var zt=new Zo,Nn=new Zt(70,1,.3,6e3);zt.add(Nn);var ss=fg(Nn),Ng=document.getElementById("ui"),on=mg(Ng),Ui=Mg(Ng),kt=wg();Ui.setAudio?.(kt);var Pc=new Set,pn={throttle:0,brake:0,steer:0,boost:!1,drift:!1};var VE=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement)){if(Pc.add(n.code),Wt==="race"&&VE.includes(n.code)&&n.preventDefault(),Ws?.active){let e=["Digit1","Digit2","Digit3","Numpad1","Numpad2","Numpad3"].indexOf(n.code);e>=0&&Ws.pick(e%3)}n.code==="KeyM"&&(Ac=!Ac,kt.setMuted(Ac)),(n.code==="KeyP"||n.code==="Escape")&&Wt==="race"&&(ud=!ud)}});addEventListener("keyup",n=>Pc.delete(n.code));addEventListener("blur",()=>Pc.clear());addEventListener("pointerdown",()=>kt.resume(),{once:!1});var Ac=Dn.has("mute");Ac&&kt.setMuted(!0);var ud=!1;function GE(n){let e=(...s)=>s.some(r=>Pc.has(r));pn.throttle=e("ArrowUp","KeyW")?1:0,pn.brake=e("ArrowDown","KeyS")?1:0;let t=(e("ArrowRight","KeyD")?1:0)-(e("ArrowLeft","KeyA")?1:0);pn.steer=t,pn.boost=e("Space"),pn.drift=e("ShiftLeft","ShiftRight","KeyX");let i=navigator.getGamepads?.()[0];if(i){let s=i.axes[0]||0;Math.abs(s)>.12&&(pn.steer=s),pn.throttle=Math.max(pn.throttle,i.buttons[7]?.value||0,i.buttons[0]?.pressed?1:0),pn.brake=Math.max(pn.brake,i.buttons[6]?.value||0),pn.boost=pn.boost||!!i.buttons[2]?.pressed,pn.drift=pn.drift||!!i.buttons[1]?.pressed||!!i.buttons[5]?.pressed}return pn}function WE(n){let e=new Zo,t=new Es(50,32,16),i=new k(...n.sunDir).normalize(),s=new vt({side:Qt,uniforms:{uTop:{value:new Re(n.skyTop)},uHor:{value:new Re(n.skyHorizon)},uGround:{value:new Re(n.hemiGround)},uSun:{value:new Re(n.sunColor).multiplyScalar(n.sunIntensity)},uSunDir:{value:i}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 uTop, uHor, uGround, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = d.y > 0.0 ? mix(uHor, uTop, pow(d.y, 0.55)) : mix(uHor, uGround, pow(-d.y, 0.35));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 350.0) * 14.0 + pow(s, 12.0) * 0.5);
        gl_FragColor = vec4(c, 1.0);
      }`});e.add(new ot(t,s));let r=new Qr(Si),o=r.fromScene(e,.02);return r.dispose(),t.dispose(),s.dispose(),o}var Ag=new Map;function Rg(n,e="#f4f2ec",t="#16181d"){let i=n+e+t,s=Ag.get(i);if(!s){let o=document.createElement("canvas");o.width=40,o.height=28;let a=o.getContext("2d");a.fillStyle=e,a.fillRect(0,0,40,28),a.fillStyle=t,a.font='italic 900 26px "Arial Narrow", Impact, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(String(n),20,15),s=new yi(o),s.colorSpace=Ct,s.magFilter=Kt,s.minFilter=ti,Ag.set(i,s)}let r=new ot(new zn(1,1),new st({map:s,roughness:.5,side:Pt,polygonOffset:!0,polygonOffsetFactor:-2}));return r.userData.ownGeometry=!0,r}var Ea=null;function XE(){if(Ea)return Ea;let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Ea=new yi(n),Ea.colorSpace=Ct,Ea}function ad(n,e,t){let i=new vl(new Ko({map:XE(),color:n,transparent:!0,opacity:t,blending:Wr,depthWrite:!1,fog:!1}));return i.scale.setScalar(e),i}var is={ao:Dn.get("fx")!=="low",slow:0,frames:0,checked:!1},Xe=null,Wt="boot",hd=0,fd=0,dd=0,So=99;function qE(){if(Xe){for(let n of Xe.bikes)zt.remove(n.model.group);zt.remove(Xe.road.group),Xe.road.dispose?.(),Xe.env.dispose?.(),Xe.env.group?.parent&&Xe.env.group.parent.remove(Xe.env.group),Xe.fx.dispose?.(),Xe.post.dispose?.(),Xe.envMap?.dispose(),zt.environment=null,Xe.mirror&&(zt.remove(Xe.mirror),Xe.mirror.dispose()),Xe.fill&&zt.remove(Xe.fill),Xe.scenery&&(zt.remove(Xe.scenery.group),Xe.scenery.dispose()),Xe.clouds&&(zt.remove(Xe.clouds),Xe.clouds.geometry.dispose(),Xe.clouds.material.dispose()),Xe.sunGlow&&(zt.remove(Xe.sunGlow),Xe.sunGlow.material.dispose()),Xe=null}}var mn=null,Ug={},Mo=new Map,Cc=new Map;function Aa(n){if(!Mo.has(n.id)){Mo.set(n.id,fetch("assets/v3/"+n.file).then(e=>{if(!e.ok)throw new Error("\xE9tape indisponible : "+n.id);return e.json()}).then(e=>(e.props=Ug,Cc.set(n.id,e),e)));for(let e of Mo.keys()){if(Mo.size<=2)break;e!==n.id&&(Mo.delete(e),Cc.delete(e))}}return Mo.get(n.id)}function pd({trackSeed:n,weatherId:e,laps:t,riders:i,autopilot:s,realData:r=null,final:o=!0,carry:a=null,keepClouds:l=null}){let c=[performance.now()],u=P=>{c.push(P,Math.round(performance.now()-c[0]))};qE(),u("dispose");let h=kn(n),f=!!r,d=f?r._track||df(r):Mm(n);f&&(r._track=null),u("track");let g=Ci[e]||Ci.sunset;Nn.far=f?9500:6e3,Nn.updateProjectionMatrix();let x=f?d0(zt,d,g,h.fork("env")):r0(zt,d,g,h.fork("env"));u("env");let m=WE(g);zt.environment=m.texture,zt.environmentIntensity=g.night?.55:.5,Si.toneMappingExposure=g.night?1.5:.82;let p=ad(g.sunColor,g.night?900:2200,g.night?.35:.75);p.userData.dir=new k(...g.sunDir).normalize(),zt.add(p);let S=new Ai(g.night?3820160:13226728,g.night?.25:.45);S.position.set(-g.sunDir[0],.6,-g.sunDir[2]).multiplyScalar(100),S.name="fill-light",zt.add(S),u("envmap");let M=f&&r._road||af(d,g,h.fork("road"));f&&(r._road=null),zt.add(M.group),u("road"),f||cf(x.group,P=>P.geometry.attributes.position.count>2e4?1:.45),cf(M.group,()=>.4);let y=f?{group:new ht,dispose(){}}:c0(d,g,h.fork("scenery"),x.heightAt);x.sun?.shadow&&(x.sun.shadow.mapSize.set(4096,4096),x.sun.shadow.radius=5,x.sun.shadow.blurSamples=16,x.sun.shadow.normalBias=.05,x.sun.shadow.map?.dispose(),x.sun.shadow.map=null),zt.add(y.group);let T=null,b=f?Math.min(.25,g.wet||.25):g.sheen??g.wet;b>.5&&!Dn.has("noreflect")&&(T=new ia(new zn(900,900),{textureWidth:1280,textureHeight:720,clipBias:.05,multisample:4}),T.rotation.x=-Math.PI/2,T.material.colorWrite=!1,T.material.depthWrite=!1,T.material.depthTest=!1,T.frustumCulled=!1,T.renderOrder=-10,T.name="road-mirror",zt.add(T));let v=M.group.getObjectByName("road-asphalt");v&&b>.5&&(v.material.envMap=m.texture,v.material.envMapIntensity=T?.35:1.25,v.material.metalness=.3,$m(v.material,g.sheen??g.wet,T?{texture:T.getRenderTarget().texture,matrix:T.material.uniforms.textureMatrix.value}:null)),u("voxelize");let w=l||qm(g,h.fork("clouds"));zt.add(w);let _=rg(zt,g),E=dg(Si,zt,Nn,g,{ao:is.ao});u("fx");let R=Lm({track:d,laps:t,env:g,rng:h.fork("race"),riders:i,final:o,carry:a}),U=R.riders.map(P=>{let F=Q0({color:P.color,accent:P.accent,isPlayer:!!P.isPlayer&&!!g.night,detail:P.isPlayer?"hi":"lo"});F.group.rotation.order="YXZ";let O=F.group.getObjectByName("chassis")||F.group,Y=ad(16722458,.3,.3);if(Y.position.set(0,.67,-.42),O.add(Y),g.night){let re=ad(16773840,1.3,.8);re.position.set(0,.48,1.66),O.add(re)}F.tailGlow=Y;let G=P.isPlayer?1:2+R.riders.indexOf(P)*7%97;for(let re of[-1,1]){let me=Rg(G);me.scale.set(.24,.17,1),me.position.set(.105*re,.6,-.2),me.rotation.y=re*Math.PI/2,O.add(me)}let J=Rg(G);return J.scale.set(.2,.14,1),J.position.set(0,.585,1.6),J.rotation.x=-.75,O.add(J),zt.add(F.group),{rider:P,model:F,pose:{},prev:new k,has:!1,w:{x:0,y:0,z:0,heading:0,slope:0}}}),H=s?Wl({id:"auto",name:"auto",skill:.9,aggression:.5,jumpSkill:.8,lineSkill:.9,style:"r\xE9gulier"},h.fork("auto")):null;if(Xe={track:d,weather:g,env:x,road:M,fx:_,post:E,race:R,bikes:U,autoAI:H,envMap:m,sunGlow:p,clouds:w,scenery:y,mirror:T,fill:S,playerBike:U.find(P=>P.rider.isPlayer)||U[0]},u("bikes"),window.__loadTimes=c.slice(1),Je?.traffic){for(let P of R.riders)P.ai&&(P.ai.obstacles=Je.traffic.vehicles);H&&(H.obstacles=Je.traffic.vehicles)}if(f){let P=[];for(let F of d.features)F.type==="tunnel"&&F.name&&P.push({s:F.s0-90,text:F.name.toUpperCase()});for(let F of d.bridges)F.name&&F.s1-F.s0>150&&P.push({s:F.s0-40,text:F.name.toUpperCase()});for(let F of x.places||[])P.push({s:F.s-20,text:F.name.toUpperCase()});for(let F of x.props||[])F.label&&F.dist<700&&P.push({s:Math.max(0,F.s-500),text:F.label.toUpperCase()});P.sort((F,O)=>F.s-O.s),Xe.announce=P.filter(F=>F.s>=(d.raceStart||0)-60&&F.s<=d.raceEnd),Xe.announceIdx=0}return on.setTrack(d),Vg(),Og(.016),ss.snap(Ic()),fd=R.player?.position||i.length,dd=1,So=99,window.__game={stage:Xe,renderer:Si,scene:zt,camera:Nn,RL:sf},window.__tick=kg,Xe}var Ni={x:0,y:0,z:0,heading:0,yaw:0,lean:0,speedRatio:0,airborne:!1,boosting:!1,slope:0};function Ic(){let n=Xe.playerBike,e=n.rider.state;return Ni.x=n.w.x,Ni.y=n.w.y,Ni.z=n.w.z,Ni.heading=n.w.heading,Ni.yaw=-Fg(e),Ni.speedRatio=Math.min(1.3,e.speed/n.rider.stats.maxSpeed),Ni.airborne=e.airborne,Ni.boosting=e.boostT>0,Ni.slope=n.w.slope||0,Ni}var YE=.8,Cg=.7;function Fg(n){let e=n.vdir??n.yaw;return e+YE*(n.yaw-e)}function Og(n){let{track:e,fx:t,weather:i}=Xe;for(let s of Xe.bikes){let r=s.rider.state;It(e,r.s,r.d,s.w),s.w.y+=r.yRel||0;let o=s.model.group;o.position.set(s.w.x,s.w.y,s.w.z),o.visible=!s.rider.hidden;let a=s.w.heading-Fg(r),l=s.w.heading-(r.vdir??r.yaw);o.rotation.y=a,o.position.x+=Cg*(Math.sin(a)-Math.sin(l)),o.position.z+=Cg*(Math.cos(a)-Math.cos(l)),o.rotation.x=r.airborne?0:-Math.atan(s.w.slope||0);let c=s.pose;if(c.lean=r.lean,c.steer=r.steer,c.pitch=r.pitch,c.compress=r.compress,c.wheelSpin=r.wheelSpin,c.speedRatio=r.speed/s.rider.stats.maxSpeed,c.speed=r.speed,c.airborne=r.airborne,c.drift=r.drift,c.boost=r.boostT>0,c.braking=s.rider.isPlayer?pn.brake>.1:!!s.rider.braking,s.model.update(c,n),s.model.tailGlow){let M=c.braking?1:0;s.model.tailGlow.material.opacity+=(.3+.6*M-s.model.tailGlow.material.opacity)*Math.min(1,n*12),s.model.tailGlow.scale.setScalar(.3+.55*M)}let u=o.rotation.y,h=Math.sin(u),f=Math.cos(u),d=s.w.x-h*.7,g=s.w.z-f*.7,x=s.w.y+.05,m=h*r.speed,p=f*r.speed;!r.airborne&&r.speed>8&&(r.drift>.8&&(Math.random()<r.drift*.9&&t.emit("smoke",d,x,g,m*.2,1.2,p*.2,1),s.has&&t.addSkid(s.prev.x,s.prev.y,s.prev.z,d,x,g,.16,.25+r.drift*.4)),!r.onRoad&&Math.random()<.7&&t.emit("dust",d,x,g,m*.25,1.5,p*.25,2),i.wet>.2&&r.speed>20&&Math.random()<i.wet*.8&&t.emit("spray",d,x,g,m*.35,2.5,p*.35,2)),r.boostT>0&&t.emit("boost",d-h*.4,x+.45,g-f*.4,m*.9,.2,p*.9,1),s.prev.set(d,x,g),s.has=!r.airborne;let S=s.rider.isPlayer?null:s.rider.frameEvents;S&&S.length&&Bg(s,S,!1)}}function Bg(n,e,t){let{fx:i}=Xe,s=n.rider.state,r=n.model.group.rotation.y,o=Math.sin(r)*s.speed,a=Math.cos(r)*s.speed;for(let l of e)l==="land"||l==="hardLand"?(i.emit("land",n.w.x,n.w.y+.1,n.w.z,o*.3,1,a*.3,l==="hardLand"?40:22),t&&(kt.play("land"),ss.shake(l==="hardLand"?.9:.45))):l==="wall"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,3,a*.5,26),t&&(kt.play("hit"),ss.shake(.7))):l==="crash"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,4,a*.5,40),i.emit("dust",n.w.x,n.w.y+.2,n.w.z,o*.3,2,a*.3,30),t&&(ss.shake(1.4),on.flash("CHUTE !",1400))):l==="jump"?t&&kt.play("jump"):l==="boost"?t&&(kt.play("boost"),ss.shake(.3),on.flash("BOOST !",600)):l==="pad"&&t&&(kt.play("pad"),ss.shake(.2))}function $E(n){let{race:e,autoAI:t,track:i}=Xe,s=e.player,r=pn;if(t||Wt==="finish")if(t){let a=e.riders.filter(l=>l!==s).map(l=>l.state);r=Xl(t,s.state,i,s.stats,a,n)}else r=ZE;if(vn&&Je&&QE(e,n),e.update(n,r),vn&&Je&&e.phase!=="countdown"&&(vn.session.sendState(performance.now(),M0(vn.cum,Je.index,i,s.state.s),s.state),s.finished&&!vn.sentFinish&&(vn.sentFinish=!0,vn.session.sendFinish(s.finishTime))),Je?.traffic&&e.phase!=="countdown"){Je.traffic.update(n,s.state,e.riders);for(let a of Je.traffic.events)a.type==="near"&&!t?(on.flash(a.boost?`FR\xD4LEMENT \xD7${a.combo} \xB7 BOOST +1`:`FR\xD4LEMENT \xD7${a.combo}`,900),kt.play(a.boost?"boost":"pad")):a.type==="hit"&&!t&&on.flash("ACCROCHAGE",900)}let o=s.state.events;o.length&&(Bg(Xe.playerBike,o,!t),o.length=0)}var ZE={throttle:.3,brake:0,steer:0,boost:!1,drift:!1},An={speedKmh:0,position:1,total:8,lap:1,laps:3,time:0,bestLap:null,boostCharges:0,boostT:0,countdown:null,wrongWay:!1},ld=[],Pg=new k,cd=performance.now(),wc=0,Rc=0;function zg(n){requestAnimationFrame(zg);let e=Math.min(.05,(n-cd)/1e3);is.ao&&!is.checked&&Wt==="race"&&Xe?.race.phase==="racing"&&(is.frames++,n-cd>25&&is.slow++,is.frames>=240&&(is.checked=!0,is.slow>96&&(is.ao=!1,Xe.post.setAO(!1),console.info("Occlusion ambiante coup\xE9e : affichage trop lent.")))),cd=n,kg(e)}function kg(n){if(!Xe)return;if(ud){Xe.post.render(0);return}Rc+=n,hd+=n,Wt==="race"&&Ws?.update(n);let{race:e}=Xe,t=Wt==="race"||Wt==="attract"||Wt==="finish";if(t){Wt==="race"&&GE(n),wc+=n;let a=0;for(;wc>=od&&a++<8;)$E(od),wc-=od;a>=8&&(wc=0)}Og(n);let i=e.player,s=i.state,r=Math.min(1.3,s.speed/i.stats.maxSpeed),o=Ic();Wt==="intro"||Wt==="menu"||Wt==="finish"&&hd>1.2?KE(o,n):ss.update(n,o),Pg.set(o.x,o.y,o.z),Xe.env.update(n,Rc,Pg),Xe.mirror&&Xe.mirror.position.set(o.x,o.y-(s.yRel||0)+.02,o.z),Xe.sunGlow.position.copy(Nn.position).addScaledVector(Xe.sunGlow.userData.dir,3200),Xe.road.update(n,Rc),Xe.fx.setSpeed(t?r:0,s.boostT>0),Xe.fx.update(n,Nn),To&&(Je?.traffic&&Wt!=="attract"?To.update(Je.traffic,Xe.track,s.s):To.hide()),Xe.post.setSpeed(t?r:0,s.boostT>0),Xe.post.render(n),(Wt==="race"||Wt==="finish")&&(kt.setEngine(Math.min(1,r),Wt==="race"?pn.throttle:.3),kt.setWind(Math.min(1,r)),kt.setSkid(s.airborne?0:Math.min(1,s.drift))),Wt==="race"&&jE(e,i,s)}var Ig=new k;function KE(n,e){let t=Rc*.35+n.heading;Ig.set(n.x+Math.sin(t)*7.5,n.y+2.6,n.z+Math.cos(t)*7.5),Nn.position.lerp(Ig,Math.min(1,e*2.5)),Nn.fov+=(55-Nn.fov)*Math.min(1,e*3),Nn.updateProjectionMatrix(),Nn.lookAt(n.x,n.y+.9,n.z)}function jE(n,e,t){An.speedKmh=t.speed*3.6,An.position=e.position,An.total=n.riders.length,An.lap=Math.min(n.laps,Math.max(1,e.lap)),An.laps=n.laps,Je&&Wt!=="attract"&&(An.lap=Je.index+1,An.laps=Je.metas.length),on.setLapLabel?.(Je&&Wt!=="attract"?"TRON\xC7ON":"TOUR"),An.time=n.time,An.bestLap=e.bestLap??null,An.boostCharges=t.boostCharges,An.boostT=t.boostT,An.gear=t.gear,An.rpm=t.rpm,An.countdown=n.phase==="countdown"?n.countdown:n.time<.9?0:null,An.wrongWay=Math.abs(t.yaw)>1.4,on.update(An),ld.length=0;for(let i of n.riders)ld.push({s:i.state.s,d:i.state.d,isPlayer:!!i.isPlayer,color:i.color});if(on.updateMinimap(ld),n.phase==="countdown"){let i=Math.ceil(n.countdown);i!==So&&(So=i,i>0&&kt.play("beep"))}else So!==0&&(So=0,kt.play("go"),kt.startMusic?.());if(n.phase==="racing"){let i=Xe.announce;if(i)for(;Xe.announceIdx<i.length&&i[Xe.announceIdx].s<=t.s;)on.flash(i[Xe.announceIdx].text,2e3),Xe.announceIdx++;e.position<fd&&!(i&&Xe.announceIdx>0&&t.s-i[Xe.announceIdx-1].s<120)&&on.flash(e.position===1?"EN T\xCATE !":"+1 PLACE",700),fd=e.position,e.lap!==dd&&e.lap<=n.laps&&(dd=e.lap,kt.play("lap"),e.lap===n.laps&&on.flash("DERNIER TOUR",1400))}Je&&Wt==="race"&&n.phase==="racing"&&JE(t.s),n.phase==="relay"&&Wt==="race"&&tw(),n.phase==="finished"&&Wt==="race"&&nw()}var Je=null,Lg=["track","near","mid","road"];function JE(n){let e=Je.metas[Je.index+1];if(!e||n<Xe.track.raceEnd*.35)return;let t=Cc.get(e.id);if(!t||(Je.prepFor!==e.id&&(Je.prepFor=e.id,Je.prepStep=0,Je.prepWait=0),Je.prepStep>=Lg.length||Je.prepWait-- >0))return;let i=Lg[Je.prepStep++];Je.prepWait=20,i==="track"?t._track=df(t):i==="road"?t._road=af(t._track,Ci[Je.weatherId]||Ci.sunset,kn("REAL:"+e.id).fork("road")):f0(t,i)}var To=null,vn=null;function QE(n,e){let t=performance.now(),i=n.track;for(let s of n.riders){if(!s.remote)continue;let r=vn.session.players.get(s.id),o=r&&!r.gone?r.remote.sample(t,e):null;if(!o){s.hidden=!0,(!r||r.gone)&&(s.state.s=-1e5);continue}let a=s.state;a.s=b0(vn.cum,Je.index,i,o.g),a.d=o.d,a.speed=o.v,a.lean=o.l,a.yaw=o.y,a.vdir=o.y,a.boostT=o.b?.2:0,a.wheelSpin=(a.wheelSpin||0)+o.v*e/.31,s.hidden=a.s<-150||a.s>i.length-4||r.remote.age>4,r.finished&&!s.finished&&(s.finished=!0,s.finishTime=r.finishTime)}}var rs=I0(),Ws=null;function Hg(n){let e=Je.metas[Je.splits.length],t=Je.splits.length===0,i=D0(rs,e.id+(t?":g":":r"),n-Je.splitStart);return Je.splitStart=n,Je.splits.push({name:e.subtitle,...i}),fc(rs),i}function ew(){if(!bt)return;let n=U0(jl({...bt,stageIndex:Je.index}));if(!n.length)return;let e=t=>{if(!Jl(bt,t.id))return;let i=Je.riders.find(s=>s.isPlayer);i&&Object.assign(i.stats,Is(bt)),on.flash(`${t.icon||""} ${t.name.toUpperCase()}`,1800),kt.play("lap")};if(Je.autopilot&&!Dn.has("pick")){e(n[0]);return}Ws=Ws||F0(),Ws.show(n,e,9)}function tw(){let n=Je&&Je.metas[Je.index+1];if(!n)return;let e=Cc.get(n.id);if(!e){Je.waiting||(Je.waiting=!0,on.flash("CHARGEMENT\u2026",1500),Aa(n).catch(()=>{}));return}let t=Xe.race,i=t.player||t.riders[0],s=It(t.track,i.state.s,i.state.d,{}),r=Xe.clouds;Xe.clouds=null,r&&zt.remove(r);let o=(e.raceStart||0)-(t.track.raceEnd??t.track.length),a=new Map;for(let h of t.riders)h.state.s+=o,h.state._padKey=null,a.set(h.id,h.state);Je.traffic?.shift(o),Je.index+=1,Je.waiting=!1;let l=performance.now();if(pd({trackSeed:"REAL:"+n.id,weatherId:Je.weatherId,laps:1,riders:Je.riders,autopilot:Je.autopilot,realData:e,final:Je.index===Je.metas.length-1,carry:{time:t.time,states:a},keepClouds:r}),r){let h=It(Xe.track,i.state.s,i.state.d,{});r.position.x+=h.x-s.x,r.position.z+=h.z-s.z}So=0,ss.snap(Ic()),Je.hitch=Math.max(Je.hitch||0,performance.now()-l),window.__relay={index:Je.index,ms:Math.round(performance.now()-l)};let c=Hg(t.time);on.flash(`TRON\xC7ON ${vf(c.time)}${c.delta===null?"":" ("+L0(c.delta)+")"}${c.record&&c.best!==null?" \xB7 RECORD":""} \u2014 ${n.subtitle.split(" \xB7 ")[0].toUpperCase()}`,3200),ew();let u=Je.metas[Je.index+1];u&&setTimeout(()=>Aa(u).catch(()=>{}),3e3)}function Vg(){let n=innerWidth,e=innerHeight;Si.setSize(n,e,!1),Nn.aspect=n/e,Nn.updateProjectionMatrix(),Xe?.post.setSize(n,e)}addEventListener("resize",Vg);function wa(n){Wt=n,hd=0}var bt=null,bo=ef(),Gg=null;function nw(){if(wa("finish"),Ws?.hide(),Je&&bt){let n=Xe.race.player.finishTime??Xe.race.time,e=Hg(n),t=!!mn&&Je.metas.length===mn.stages.length,i=t?N0(rs,n):null;rs.finishes+=1,fc(rs),bt.summary={splits:Je.splits,total:i,time:n,full:t,last:e}}on.flash(`ARRIV\xC9E \u2014 ${Xe.race.player.position}${Xe.race.player.position===1?"er":"e"}`,2200),kt.play(Xe.race.player.position<=3?"win":"lose"),kt.stopMusic?.(),setTimeout(()=>Gg?.(),3200)}async function Dg(){Je=null,To?.hide(),Ws?.hide();let n=Kl(Zl("ATTRACT"));for(let i of n)i.stats=Is({upgrades:[]});let e=mn?mn.stages[Math.min(3,mn.stages.length-1)]:null,t=e?await Aa(e).catch(()=>null):null;pd({trackSeed:t?"REAL:"+t.id:"ATTRACT-"+Ql(),weatherId:t?"sicily":"sunset",laps:t?1:99,riders:n,autopilot:!0,realData:t}),on.hide(),wa("attract")}async function iw(){if(await V0().catch(n=>console.warn("Mod\xE8le de moto indisponible, repli sur le mod\xE8le proc\xE9dural :",n)),!Dn.has("noreal")&&(mn=await fetch("assets/v3/route.json").then(n=>n.ok?n.json():null).catch(()=>null),mn&&!mn.stages?.length&&(mn=null),mn)){let n=await fetch("assets/v3/props/index.json").then(t=>t.ok?t.json():[]).catch(()=>[]);await Promise.all(u0.filter(t=>n.includes(t)).map(t=>fetch(`assets/v3/props/${t}.json`).then(i=>i.ok?i.json():null).then(i=>{i&&(Ug[t]=i)}).catch(()=>{})));let e=document.createElement("div");e.textContent="\xA9 contributeurs OpenStreetMap \xB7 relief Terrarium (Mapzen) \xB7 Sentinel-2 cloudless 2016 par EOX (CC BY 4.0)",e.style.cssText="position:fixed;left:50%;bottom:0.6vmin;transform:translateX(-50%);font:1.35vmin Arial,sans-serif;color:rgba(255,255,255,.72);text-shadow:0 1px 2px #000;pointer-events:none;z-index:40;white-space:nowrap",document.body.appendChild(e)}for(await Dg(),document.getElementById("boot").remove(),requestAnimationFrame(zg);;){let n=Dn.get("seed"),e=Number(Dn.get("stage"))||0;if(!n){let s=await Ui.showTitle({dailySeed:Ql(),meta:bo,route:mn,records:rs});if(s.multi){let r=mn?await R0(Ui.mount,mn):null;if(!r)continue;vn={session:r.session,cum:null,sentFinish:!1},n="MP-"+r.session.code,e=r.stage}else n=s.seed,s.stage&&(e=s.stage)}if(kt.resume(),bt=Zl(n),mn){let s=Math.floor(e)-1;bt.real=!0,s>0&&s<mn.stages.length||(s=0);let r=mn.stages.slice(s),o=r.reduce((a,l)=>a+l.length,0)/1e3;bt.stages=[{name:mn.title,subtitle:`${mn.roads} \xB7 ${o.toFixed(0)} km d'une traite`,trackSeed:"REAL:"+r[0].id,weather:"sicily",laps:1,real:r}]}for(;!oa(bt);){let s=bt.stages[bt.stageIndex],r=Is(bt),o=Kl(bt).map(c=>({...c,stats:c.isPlayer?r:Is({upgrades:[]})}));if(vn&&s.real){vn.cum=_0(s.real),bt.points={},bt.names={};let c=o.find(u=>u.isPlayer);o=vn.session.roster().map(u=>u.me?{...c,name:u.name,color:u.color,accent:u.accent}:{id:u.id,name:u.name,color:u.color,accent:u.accent,isPlayer:!1,remote:!0,persona:null,stats:Is({upgrades:[]})});for(let u of o)bt.points[u.id]=0,bt.names[u.id]=u.name}Ui.hideAll();let a=null;Je=null,s.real&&(on.flash?.("CHARGEMENT\u2026"),a=await Aa(s.real[0]),Je={metas:s.real,index:0,riders:o,autopilot:Dn.has("auto"),weatherId:Dn.get("weather")||s.weather,splits:[],splitStart:0},rs.runs+=1,fc(rs),Dn.has("notraffic")||(Je.traffic=m0({rng:kn("trafic|"+n+"|"+rs.runs),count:40,density:2.6}),To=To||C0(zt,40)),s.real[1]&&setTimeout(()=>Aa(s.real[1]).catch(()=>{}),4e3)),pd({trackSeed:s.trackSeed,weatherId:Dn.get("weather")||s.weather,laps:s.laps,riders:o,autopilot:Dn.has("auto"),realData:a,final:!s.real||s.real.length===1}),wa("intro"),kt.setRain(Xe.weather.rain||0),!Dn.has("auto")&&!vn&&await Ui.showStageIntro({stage:s,index:bt.stageIndex+1,total:bt.stages.length,standings:uo(bt),weather:Xe.weather}),Ui.hideAll(),ss.snap(Ic()),on.show(),wa("race"),await new Promise(c=>{Gg=c}),on.hide(),kt.setEngine(.1,0),kt.setWind(0),kt.setSkid(0);let l=Xe.race.results();if(Jh(bt,l),await Ui.showResults({results:l,standings:uo(bt),stage:s}),!oa(bt)){let c=jl(bt),u=bt.upgrades.map(f=>ar.find(d=>d.id===f)).filter(Boolean),h=await Ui.showUpgradeChoice({choices:c,index:bt.stageIndex,total:bt.stages.length,owned:u});Jl(bt,h)}}let t=uo(bt),i=t.findIndex(s=>s.isPlayer)+1;bo=nf(bo,bt)||bo,tf(bo),wa("menu"),await Ui.showRunEnd({standings:t,playerPosition:i,run:bt,meta:bo}),Ui.hideAll(),vn&&(vn.session.leave(),vn=null),Dn.delete("seed"),Dn.delete("stage"),await Dg()}}iw().catch(n=>{console.error(n);let e=document.getElementById("boot")||document.body.appendChild(Object.assign(document.createElement("div"),{id:"boot"}));e.className="err",e.textContent=`Erreur de d\xE9marrage :
`+(n?.stack||n)});
