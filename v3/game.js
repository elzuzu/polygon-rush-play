var ug=Object.defineProperty;var hg=(n,e)=>{for(var t in e)ug(n,t,{get:e[t],enumerable:!0})};var fg=0,Kf=1,dg=2;var yc=1,pg=2,Oi=3,Mi=0,Jt=1,Ct=2,vi=0,Dr=1,Or=2,Jf=3,jf=4,oh=5,Bi=100,mg=101,gg=102,xg=103,_g=104,yg=200,ah=201,vg=202,Mg=203,$l=204,Oo=205,bg=206,Sg=207,Eg=208,Tg=209,wg=210,Ag=211,Rg=212,Cg=213,Ig=214,Zl=0,Kl=1,Jl=2,Br=3,jl=4,Ql=5,eu=6,tu=7,ch=0,Pg=1,Lg=2,ps=0,lh=1,uh=2,hh=3,Yo=4,Dg=5,fh=6,dh=7,Qf="attached",Ng="detached",xp=300,zr=301,kr=302,nu=303,iu=304,vc=306,Vi=1e3,zi=1001,Bo=1002,on=1003,ph=1004;var Pr=1005;var In=1006,Do=1007;var Zn=1008;var Gi=1009,_p=1010,yp=1011,zo=1012,mh=1013,qs=1014,ui=1015,An=1016,gh=1017,xh=1018,Hr=1020,vp=35902,Mp=1021,bp=1022,Kn=1023,Sp=1024,Ep=1025,Nr=1026,Vr=1027,_h=1028,yh=1029,Tp=1030,vh=1031;var Mh=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,su=35840,ru=35841,ou=35842,au=35843,cu=36196,lu=37492,uu=37496,hu=37808,fu=37809,du=37810,pu=37811,mu=37812,gu=37813,xu=37814,_u=37815,yu=37816,vu=37817,Mu=37818,bu=37819,Su=37820,Eu=37821,$a=36492,Tu=36494,wu=36495,wp=36283,Au=36284,Ru=36285,Cu=36286;var Gr=2300,Wr=2301,ml=2302,ed=2400,td=2401,nd=2402,Ug=2500;var Ap=0,Mc=1,$o=2,Fg=3200,Og=3201;var bh=0,Bg=1,hs="",Rt="srgb",yn="srgb-linear",bc="linear",St="srgb";var fr=7680;var id=519,zg=512,kg=513,Hg=514,Rp=515,Vg=516,Gg=517,Wg=518,Xg=519,Iu=35044,Si=35048;var sd="300 es",ki=2e3,Za=2001,ms=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=1234567,No=Math.PI/180,Xr=180/Math.PI;function hi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function xn(n,e,t){return Math.max(e,Math.min(t,n))}function Sh(n,e){return(n%e+e)%e}function qg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Yg(n,e,t){return n!==e?(t-n)/(e-n):0}function Uo(n,e,t){return(1-t)*n+t*e}function $g(n,e,t,i){return Uo(n,e,1-Math.exp(-t*i))}function Zg(n,e=1){return e-Math.abs(Sh(n,e*2)-e)}function Kg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Jg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function jg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Qg(n,e){return n+Math.random()*(e-n)}function ex(n){return n*(.5-Math.random())}function tx(n){n!==void 0&&(rd=n);let e=rd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nx(n){return n*No}function ix(n){return n*Xr}function sx(n){return(n&n-1)===0&&n!==0}function rx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ox(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ax(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function li(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Cp={DEG2RAD:No,RAD2DEG:Xr,generateUUID:hi,clamp:xn,euclideanModulo:Sh,mapLinear:qg,inverseLerp:Yg,lerp:Uo,damp:$g,pingpong:Zg,smoothstep:Kg,smootherstep:Jg,randInt:jg,randFloat:Qg,randFloatSpread:ex,seededRandom:tx,degToRad:nx,radToDeg:ix,isPowerOfTwo:sx,ceilPowerOfTwo:rx,floorPowerOfTwo:ox,setQuaternionFromProperEuler:ax,normalize:wt,denormalize:li},Ke=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(xn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ut=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],x=s[0],m=s[3],d=s[6],b=s[1],y=s[4],_=s[7],E=s[2],T=s[5],v=s[8];return r[0]=o*x+a*b+c*E,r[3]=o*m+a*y+c*T,r[6]=o*d+a*_+c*v,r[1]=l*x+h*b+u*E,r[4]=l*m+h*y+u*T,r[7]=l*d+h*_+u*v,r[2]=f*x+p*b+g*E,r[5]=f*m+p*y+g*T,r[8]=f*d+p*_+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=t*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gl.makeScale(e,t)),this}rotate(e){return this.premultiply(gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gl=new ut;function Ip(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ko(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cx(){let n=ko("canvas");return n.style.display="block",n}var od={};function Po(n){n in od||(od[n]=!0,console.warn(n))}function lx(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function ux(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function hx(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var pt={enabled:!0,workingColorSpace:yn,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===St&&(n.r=Hi(n.r),n.g=Hi(n.g),n.b=Hi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===St&&(n.r=Ur(n.r),n.g=Ur(n.g),n.b=Ur(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===hs?bc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ad=[.64,.33,.3,.6,.15,.06],cd=[.2126,.7152,.0722],ld=[.3127,.329],ud=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hd=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pt.define({[yn]:{primaries:ad,whitePoint:ld,transfer:bc,toXYZ:ud,fromXYZ:hd,luminanceCoefficients:cd,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:ad,whitePoint:ld,transfer:St,toXYZ:ud,fromXYZ:hd,luminanceCoefficients:cd,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}});var dr,Pu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{dr===void 0&&(dr=ko("canvas")),dr.width=e.width,dr.height=e.height;let i=dr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=dr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ko("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hi(t[i]/255)*255):t[i]=Hi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fx=0,Ka=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xl(s[o].image)):r.push(xl(s[o]))}else r=xl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function xl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dx=0,an=class n extends ms{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=zi,s=zi,r=In,o=Zn,a=Kn,c=Gi,l=n.DEFAULT_ANISOTROPY,h=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=hi(),this.name="",this.source=new Ka(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vi:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vi:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=xp;an.DEFAULT_ANISOTROPY=1;var yt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,_=(p+1)/2,E=(d+1)/2,T=(h+f)/4,v=(u+x)/4,w=(g+m)/4;return y>_&&y>E?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=T/i,r=v/i):_>E?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=T/s,r=w/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=v/r,s=w/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lu=class extends ms{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new an(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ka(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends Lu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ja=class extends an{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Du=class extends an{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var en=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==f||l!==p||h!==g){let m=1-a,d=c*f+l*p+h*g+u*x,b=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let E=Math.sqrt(y),T=Math.atan2(E,d*b);m=Math.sin(m*T)/E,a=Math.sin(a*T)/E}let _=a*b;if(c=c*m+f*_,l=l*m+p*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*f,e[t+1]=c*g+h*f+l*u-a*p,e[t+2]=l*g+h*p+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),f=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _l.copy(this).projectOnVector(e),this.sub(_l)}reflect(e){return this.sub(_l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(xn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_l=new k,fd=new en,Jn=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(r,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pa.copy(i.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),ma.subVectors(this.max,vo),pr.subVectors(e.a,vo),mr.subVectors(e.b,vo),gr.subVectors(e.c,vo),rs.subVectors(mr,pr),os.subVectors(gr,mr),Bs.subVectors(pr,gr);let t=[0,-rs.z,rs.y,0,-os.z,os.y,0,-Bs.z,Bs.y,rs.z,0,-rs.x,os.z,0,-os.x,Bs.z,0,-Bs.x,-rs.y,rs.x,0,-os.y,os.x,0,-Bs.y,Bs.x,0];return!yl(t,pr,mr,gr,ma)||(t=[1,0,0,0,1,0,0,0,1],!yl(t,pr,mr,gr,ma))?!1:(ga.crossVectors(rs,os),t=[ga.x,ga.y,ga.z],yl(t,pr,mr,gr,ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Pi=[new k,new k,new k,new k,new k,new k,new k,new k],ri=new k,pa=new Jn,pr=new k,mr=new k,gr=new k,rs=new k,os=new k,Bs=new k,vo=new k,ma=new k,ga=new k,zs=new k;function yl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){zs.fromArray(n,r);let a=s.x*Math.abs(zs.x)+s.y*Math.abs(zs.y)+s.z*Math.abs(zs.z),c=e.dot(zs),l=t.dot(zs),h=i.dot(zs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var px=new Jn,Mo=new k,vl=new k,zn=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):px.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);let t=Mo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Mo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(vl)),this.expandByPoint(Mo.copy(e.center).sub(vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Li=new k,Ml=new k,xa=new k,as=new k,bl=new k,_a=new k,Sl=new k,qr=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ml.copy(e).add(t).multiplyScalar(.5),xa.copy(t).sub(e).normalize(),as.copy(this.origin).sub(Ml);let r=e.distanceTo(t)*.5,o=-this.direction.dot(xa),a=as.dot(this.direction),c=-as.dot(xa),l=as.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ml).addScaledVector(xa,f),p}intersectSphere(e,t){Li.subVectors(e.center,this.origin);let i=Li.dot(this.direction),s=Li.dot(Li)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,s,r){bl.subVectors(t,e),_a.subVectors(i,e),Sl.crossVectors(bl,_a);let o=this.direction.dot(Sl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;as.subVectors(this.origin,e);let c=a*this.direction.dot(_a.crossVectors(as,_a));if(c<0)return null;let l=a*this.direction.dot(bl.cross(as));if(l<0||c+l>o)return null;let h=-a*as.dot(Sl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class n{constructor(e,t,i,s,r,o,a,c,l,h,u,f,p,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,f,p,g,x,m)}set(e,t,i,s,r,o,a,c,l,h,u,f,p,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/xr.setFromMatrixColumn(e,0).length(),r=1/xr.setFromMatrixColumn(e,1).length(),o=1/xr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,p=c*u,g=l*h,x=l*u;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,p=c*u,g=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,p=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mx,e,gx)}lookAt(e,t,i){let s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),cs.crossVectors(i,On),cs.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),cs.crossVectors(i,On)),cs.normalize(),ya.crossVectors(On,cs),s[0]=cs.x,s[4]=ya.x,s[8]=On.x,s[1]=cs.y,s[5]=ya.y,s[9]=On.y,s[2]=cs.z,s[6]=ya.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],d=i[14],b=i[3],y=i[7],_=i[11],E=i[15],T=s[0],v=s[4],w=s[8],M=s[12],S=s[1],I=s[5],B=s[9],z=s[13],L=s[2],F=s[6],U=s[10],Y=s[14],V=s[3],ie=s[7],ce=s[11],xe=s[15];return r[0]=o*T+a*S+c*L+l*V,r[4]=o*v+a*I+c*F+l*ie,r[8]=o*w+a*B+c*U+l*ce,r[12]=o*M+a*z+c*Y+l*xe,r[1]=h*T+u*S+f*L+p*V,r[5]=h*v+u*I+f*F+p*ie,r[9]=h*w+u*B+f*U+p*ce,r[13]=h*M+u*z+f*Y+p*xe,r[2]=g*T+x*S+m*L+d*V,r[6]=g*v+x*I+m*F+d*ie,r[10]=g*w+x*B+m*U+d*ce,r[14]=g*M+x*z+m*Y+d*xe,r[3]=b*T+y*S+_*L+E*V,r[7]=b*v+y*I+_*F+E*ie,r[11]=b*w+y*B+_*U+E*ce,r[15]=b*M+y*z+_*Y+E*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+r*c*u-s*l*u-r*a*f+i*l*f+s*a*p-i*c*p)+x*(+t*c*p-t*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+i*o*p+r*a*h-i*l*h)+d*(-s*a*h-t*c*u+t*a*f+s*o*u-i*o*f+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],b=u*m*l-x*f*l+x*c*p-a*m*p-u*c*d+a*f*d,y=g*f*l-h*m*l-g*c*p+o*m*p+h*c*d-o*f*d,_=h*x*l-g*u*l+g*a*p-o*x*p-h*a*d+o*u*d,E=g*u*c-h*x*c-g*a*f+o*x*f+h*a*m-o*u*m,T=t*b+i*y+s*_+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let v=1/T;return e[0]=b*v,e[1]=(x*f*r-u*m*r-x*s*p+i*m*p+u*s*d-i*f*d)*v,e[2]=(a*m*r-x*c*r+x*s*l-i*m*l-a*s*d+i*c*d)*v,e[3]=(u*c*r-a*f*r-u*s*l+i*f*l+a*s*p-i*c*p)*v,e[4]=y*v,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*v,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*d-t*c*d)*v,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*p+t*c*p)*v,e[8]=_*v,e[9]=(g*u*r-h*x*r-g*i*p+t*x*p+h*i*d-t*u*d)*v,e[10]=(o*x*r-g*a*r+g*i*l-t*x*l-o*i*d+t*a*d)*v,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*p-t*a*p)*v,e[12]=E*v,e[13]=(h*x*s-g*u*s+g*i*f-t*x*f-h*i*m+t*u*m)*v,e[14]=(g*a*s-o*x*s-g*i*c+t*x*c+o*i*m-t*a*m)*v,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*f+t*a*f)*v,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,g=r*u,x=o*h,m=o*u,d=a*u,b=c*l,y=c*h,_=c*u,E=i.x,T=i.y,v=i.z;return s[0]=(1-(x+d))*E,s[1]=(p+_)*E,s[2]=(g-y)*E,s[3]=0,s[4]=(p-_)*T,s[5]=(1-(f+d))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+y)*v,s[9]=(m-b)*v,s[10]=(1-(f+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=xr.set(s[0],s[1],s[2]).length(),o=xr.set(s[4],s[5],s[6]).length(),a=xr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],oi.copy(this);let l=1/r,h=1/o,u=1/a;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,t.setFromRotationMatrix(oi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ki){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),p,g;if(a===ki)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Za)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ki){let c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*l,p=(i+s)*h,g,x;if(a===ki)g=(o+r)*u,x=-2*u;else if(a===Za)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},xr=new k,oi=new et,mx=new k(0,0,0),gx=new k(1,1,1),cs=new k,ya=new k,On=new k,dd=new et,pd=new en,fi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(xn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pd.setFromEuler(this),this.setFromQuaternion(pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var ja=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},xx=0,md=new k,_r=new en,Di=new et,va=new k,bo=new k,_x=new k,yx=new en,gd=new k(1,0,0),xd=new k(0,1,0),_d=new k(0,0,1),yd={type:"added"},vx={type:"removed"},yr={type:"childadded",child:null},El={type:"childremoved",child:null},Ft=class n extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new k,t=new fi,i=new en,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new ut}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(gd,e)}rotateY(e){return this.rotateOnAxis(xd,e)}rotateZ(e){return this.rotateOnAxis(_d,e)}translateOnAxis(e,t){return md.copy(e).applyQuaternion(this.quaternion),this.position.add(md.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gd,e)}translateY(e){return this.translateOnAxis(xd,e)}translateZ(e){return this.translateOnAxis(_d,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?va.copy(e):va.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(bo,va,this.up):Di.lookAt(va,bo,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),_r.setFromRotationMatrix(Di),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yd),yr.child=e,this.dispatchEvent(yr),yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vx),El.child=e,this.dispatchEvent(El),El.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yd),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,_x),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,yx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ft.DEFAULT_UP=new k(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ai=new k,Ni=new k,Tl=new k,Ui=new k,vr=new k,Mr=new k,vd=new k,wl=new k,Al=new k,Rl=new k,Cl=new yt,Il=new yt,Pl=new yt,fs=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ai.subVectors(e,t),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ai.subVectors(s,t),Ni.subVectors(i,t),Tl.subVectors(e,t);let o=ai.dot(ai),a=ai.dot(Ni),c=ai.dot(Tl),l=Ni.dot(Ni),h=Ni.dot(Tl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ui.x),c.addScaledVector(o,Ui.y),c.addScaledVector(a,Ui.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Cl.setScalar(0),Il.setScalar(0),Pl.setScalar(0),Cl.fromBufferAttribute(e,t),Il.fromBufferAttribute(e,i),Pl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Cl,r.x),o.addScaledVector(Il,r.y),o.addScaledVector(Pl,r.z),o}static isFrontFacing(e,t,i,s){return ai.subVectors(i,t),Ni.subVectors(e,t),ai.cross(Ni).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ai.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;vr.subVectors(s,i),Mr.subVectors(r,i),wl.subVectors(e,i);let c=vr.dot(wl),l=Mr.dot(wl);if(c<=0&&l<=0)return t.copy(i);Al.subVectors(e,s);let h=vr.dot(Al),u=Mr.dot(Al);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(vr,o);Rl.subVectors(e,r);let p=vr.dot(Rl),g=Mr.dot(Rl);if(g>=0&&p<=g)return t.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Mr,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return vd.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(vd,a);let d=1/(m+x+f);return o=x*d,a=f*d,t.copy(i).addScaledVector(vr,o).addScaledVector(Mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function Ll(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Re=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=pt.workingColorSpace){if(e=Sh(e,1),t=xn(t,0,1),i=xn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ll(o,r,e+1/3),this.g=Ll(o,r,e),this.b=Ll(o,r,e-1/3)}return pt.toWorkingColorSpace(this,s),this}setStyle(e,t=Rt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let i=Pp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return pt.fromWorkingColorSpace(gn.copy(this),e),Math.round(xn(gn.r*255,0,255))*65536+Math.round(xn(gn.g*255,0,255))*256+Math.round(xn(gn.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(gn.copy(this),t);let i=gn.r,s=gn.g,r=gn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Rt){pt.fromWorkingColorSpace(gn.copy(this),e);let t=gn.r,i=gn.g,s=gn.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(Ma);let i=Uo(ls.h,Ma.h,t),s=Uo(ls.s,Ma.s,t),r=Uo(ls.l,Ma.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Re;Re.NAMES=Pp;var Mx=0,Tn=class extends ms{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=hi(),this.name="",this.blending=Dr,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=Oo,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$l&&(i.blendSrc=this.blendSrc),this.blendDst!==Oo&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==id&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Xt=class extends Tn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Kt=new k,ba=new Ke,mt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Iu,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ba.fromBufferAttribute(this,t),ba.applyMatrix3(e),this.setXY(t,ba.x,ba.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Iu&&(e.usage=this.usage),e}};var Qa=class extends mt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ec=class extends mt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ct=class extends mt{constructor(e,t,i){super(new Float32Array(e),t,i)}},bx=0,$n=new et,Dl=new Ft,br=new k,Bn=new Jn,So=new Jn,rn=new k,gt=class n extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ip(e)?ec:Qa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ut().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,i){return $n.makeTranslation(e,t,i),this.applyMatrix4($n),this}scale(e,t,i){return $n.makeScale(e,t,i),this.applyMatrix4($n),this}lookAt(e){return Dl.lookAt(e),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];So.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Bn.min,So.min),Bn.expandByPoint(rn),rn.addVectors(Bn.max,So.max),Bn.expandByPoint(rn)):(Bn.expandByPoint(So.min),Bn.expandByPoint(So.max))}Bn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)rn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(rn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)rn.fromBufferAttribute(a,l),c&&(br.fromBufferAttribute(e,l),rn.add(br)),s=Math.max(s,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<i.count;w++)a[w]=new k,c[w]=new k;let l=new k,h=new k,u=new k,f=new Ke,p=new Ke,g=new Ke,x=new k,m=new k;function d(w,M,S){l.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,S),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),p.sub(f),g.sub(f);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[w].add(x),a[M].add(x),a[S].add(x),c[w].add(m),c[M].add(m),c[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,M=b.length;w<M;++w){let S=b[w],I=S.start,B=S.count;for(let z=I,L=I+B;z<L;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let y=new k,_=new k,E=new k,T=new k;function v(w){E.fromBufferAttribute(s,w),T.copy(E);let M=a[w];y.copy(M),y.sub(E.multiplyScalar(E.dot(M))).normalize(),_.crossVectors(T,M);let I=_.dot(c[w])<0?-1:1;o.setXYZW(w,y.x,y.y,y.z,I)}for(let w=0,M=b.length;w<M;++w){let S=b[w],I=S.start,B=S.count;for(let z=I,L=I+B;z<L;z+=3)v(e.getX(z+0)),v(e.getX(z+1)),v(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new k,r=new k,o=new k,a=new k,c=new k,l=new k,h=new k,u=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new mt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=e(f,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Md=new et,ks=new qr,Sa=new zn,bd=new k,Ea=new k,Ta=new k,wa=new k,Nl=new k,Aa=new k,Sd=new k,Ra=new k,ot=class extends Ft{constructor(e=new gt,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Aa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Nl.fromBufferAttribute(u,e),o?Aa.addScaledVector(Nl,h):Aa.addScaledVector(Nl.sub(t),h))}t.add(Aa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(r),ks.copy(e.ray).recast(e.near),!(Sa.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Sa,bd)===null||ks.origin.distanceToSquared(bd)>(e.far-e.near)**2))&&(Md.copy(r).invert(),ks.copy(e.ray).applyMatrix4(Md),!(i.boundingBox!==null&&ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ks)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=b,E=y;_<E;_+=3){let T=a.getX(_),v=a.getX(_+1),w=a.getX(_+2);s=Ca(this,d,e,i,l,h,u,T,v,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let b=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=Ca(this,o,e,i,l,h,u,b,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=b,E=y;_<E;_+=3){let T=_,v=_+1,w=_+2;s=Ca(this,d,e,i,l,h,u,T,v,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let b=m,y=m+1,_=m+2;s=Ca(this,o,e,i,l,h,u,b,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Sx(n,e,t,i,s,r,o,a){let c;if(e.side===Jt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Mi,a),c===null)return null;Ra.copy(a),Ra.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ra);return l<t.near||l>t.far?null:{distance:l,point:Ra.clone(),object:n}}function Ca(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Ea),n.getVertexPosition(c,Ta),n.getVertexPosition(l,wa);let h=Sx(n,e,t,i,Ea,Ta,wa,Sd);if(h){let u=new k;fs.getBarycoord(Sd,Ea,Ta,wa,u),s&&(h.uv=fs.getInterpolatedAttribute(s,a,c,l,u,new Ke)),r&&(h.uv1=fs.getInterpolatedAttribute(r,a,c,l,u,new Ke)),o&&(h.normal=fs.getInterpolatedAttribute(o,a,c,l,u,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new k,materialIndex:0};fs.getNormal(Ea,Ta,wa,f.normal),h.face=f,h.barycoord=u}return h}var cn=class n extends gt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2));function g(x,m,d,b,y,_,E,T,v,w,M){let S=_/v,I=E/w,B=_/2,z=E/2,L=T/2,F=v+1,U=w+1,Y=0,V=0,ie=new k;for(let ce=0;ce<U;ce++){let xe=ce*I-z;for(let ve=0;ve<F;ve++){let ue=ve*S-B;ie[x]=ue*b,ie[m]=xe*y,ie[d]=L,l.push(ie.x,ie.y,ie.z),ie[x]=0,ie[m]=0,ie[d]=T>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(ve/v),u.push(1-ce/w),Y+=1}}for(let ce=0;ce<w;ce++)for(let xe=0;xe<v;xe++){let ve=f+xe+F*ce,ue=f+xe+F*(ce+1),ee=f+(xe+1)+F*(ce+1),te=f+(xe+1)+F*ce;c.push(ve,ue,te),c.push(ue,ee,te),V+=6}a.addGroup(p,V,M),p+=V,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Yr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function En(n){let e={};for(let t=0;t<n.length;t++){let i=Yr(n[t]);for(let s in i)e[s]=i[s]}return e}function Ex(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lp(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var Ei={clone:Yr,merge:En},Tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Et=class extends Tn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tx,this.fragmentShader=wx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=Ex(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},tc=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},us=new k,Ed=new Ke,Td=new Ke,$t=class extends tc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,Ed,Td),t.subVectors(Td,Ed)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(No*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Sr=-90,Er=1,Nu=class extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(Sr,Er,e,t);s.layers=this.layers,this.add(s);let r=new $t(Sr,Er,e,t);r.layers=this.layers,this.add(r);let o=new $t(Sr,Er,e,t);o.layers=this.layers,this.add(o);let a=new $t(Sr,Er,e,t);a.layers=this.layers,this.add(a);let c=new $t(Sr,Er,e,t);c.layers=this.layers,this.add(c);let l=new $t(Sr,Er,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ki)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Za)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},nc=class extends an{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:zr,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Uu=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new nc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:In}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cn(5,5,5),r=new Et({name:"CubemapFromEquirect",uniforms:Yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:vi});r.uniforms.tEquirect.value=t;let o=new ot(s,r),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=In),new Nu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Ul=new k,Ax=new k,Rx=new ut,ci=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ul.subVectors(i,t).cross(Ax.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ul),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Rx.getNormalMatrix(e),s=this.coplanarPoint(Ul).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hs=new zn,Ia=new k,Ho=class{constructor(e=new ci,t=new ci,i=new ci,s=new ci,r=new ci,o=new ci){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ki){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],b=s[13],y=s[14],_=s[15];if(i[0].setComponents(c-r,f-l,m-p,_-d).normalize(),i[1].setComponents(c+r,f+l,m+p,_+d).normalize(),i[2].setComponents(c+o,f+h,m+g,_+b).normalize(),i[3].setComponents(c-o,f-h,m-g,_-b).normalize(),i[4].setComponents(c-a,f-u,m-x,_-y).normalize(),t===ki)i[5].setComponents(c+a,f+u,m+x,_+y).normalize();else if(t===Za)i[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(e){return Hs.center.set(0,0,0),Hs.radius=.7071067811865476,Hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ia.x=s.normal.x>0?e.max.x:e.min.x,Ia.y=s.normal.y>0?e.max.y:e.min.y,Ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Dp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Cx(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Pn=class n extends gt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){let b=d*f-o;for(let y=0;y<l;y++){let _=y*u-r;g.push(_,-b,0),x.push(0,0,1),m.push(y/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<a;b++){let y=b+l*d,_=b+l*(d+1),E=b+1+l*(d+1),T=b+1+l*d;p.push(y,_,T),p.push(_,E,T)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ix=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Px=`#ifdef USE_ALPHAHASH
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
#endif`,Lx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ux=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fx=`#ifdef USE_AOMAP
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
#endif`,Ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bx=`#ifdef USE_BATCHING
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
#endif`,zx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gx=`#ifdef USE_IRIDESCENCE
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
#endif`,Wx=`#ifdef USE_BUMPMAP
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
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qx=`#define PI 3.141592653589793
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
} // validated`,e_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,t_=`vec3 transformedNormal = objectNormal;
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
#endif`,n_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o_="gl_FragColor = linearToOutputTexel( gl_FragColor );",a_=`vec4 LinearTransferOETF( in vec4 value ) {
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
#endif`,l_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,u_=`#ifdef USE_ENVMAP
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
#endif`,h_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f_=`#ifdef USE_ENVMAP
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
#endif`,d_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x_=`#ifdef USE_GRADIENTMAP
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
}`,__=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M_=`uniform bool receiveShadow;
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
#endif`,b_=`#ifdef USE_ENVMAP
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
#endif`,S_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E_=`varying vec3 vViewPosition;
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
material.specularStrength = specularStrength;`,w_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A_=`PhysicalMaterial material;
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
#endif`,R_=`struct PhysicalMaterial {
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
}`,C_=`
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
#endif`,P_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z_=`#if defined( USE_POINTS_UV )
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
#endif`,k_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X_=`#ifdef USE_MORPHTARGETS
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
#endif`,q_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K_=`#ifndef FLAT_SHADED
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
#endif`,j_=`#ifdef USE_NORMALMAP
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
#endif`,Q_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ey=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ny=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ay=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,py=`float getShadowMask() {
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
}`,my=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gy=`#ifdef USE_SKINNING
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
#endif`,xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_y=`#ifdef USE_SKINNING
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
#endif`,yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,My=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,by=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sy=`#ifdef USE_TRANSMISSION
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
#endif`,Ey=`#ifdef USE_TRANSMISSION
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
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ry=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iy=`uniform sampler2D t2D;
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
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`#include <common>
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
}`,Fy=`#if DEPTH_PACKING == 3200
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
}`,Oy=`#define DISTANCE
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
}`,By=`#define DISTANCE
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
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`uniform float scale;
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
}`,Vy=`uniform vec3 diffuse;
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
}`,Gy=`#include <common>
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
}`,Wy=`uniform vec3 diffuse;
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
}`,Xy=`#define LAMBERT
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
}`,qy=`#define LAMBERT
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
}`,Yy=`#define MATCAP
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
}`,$y=`#define MATCAP
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
}`,Zy=`#define NORMAL
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
}`,Ky=`#define NORMAL
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
}`,Jy=`#define PHONG
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
}`,jy=`#define PHONG
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
}`,Qy=`#define STANDARD
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
}`,ev=`#define STANDARD
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
}`,tv=`#define TOON
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
}`,nv=`#define TOON
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
}`,iv=`uniform float size;
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
}`,sv=`uniform vec3 diffuse;
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
}`,rv=`#include <common>
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
}`,ov=`uniform vec3 color;
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
}`,av=`uniform float rotation;
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
}`,cv=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Ix,alphahash_pars_fragment:Px,alphamap_fragment:Lx,alphamap_pars_fragment:Dx,alphatest_fragment:Nx,alphatest_pars_fragment:Ux,aomap_fragment:Fx,aomap_pars_fragment:Ox,batching_pars_vertex:Bx,batching_vertex:zx,begin_vertex:kx,beginnormal_vertex:Hx,bsdfs:Vx,iridescence_fragment:Gx,bumpmap_pars_fragment:Wx,clipping_planes_fragment:Xx,clipping_planes_pars_fragment:qx,clipping_planes_pars_vertex:Yx,clipping_planes_vertex:$x,color_fragment:Zx,color_pars_fragment:Kx,color_pars_vertex:Jx,color_vertex:jx,common:Qx,cube_uv_reflection_fragment:e_,defaultnormal_vertex:t_,displacementmap_pars_vertex:n_,displacementmap_vertex:i_,emissivemap_fragment:s_,emissivemap_pars_fragment:r_,colorspace_fragment:o_,colorspace_pars_fragment:a_,envmap_fragment:c_,envmap_common_pars_fragment:l_,envmap_pars_fragment:u_,envmap_pars_vertex:h_,envmap_physical_pars_fragment:b_,envmap_vertex:f_,fog_vertex:d_,fog_pars_vertex:p_,fog_fragment:m_,fog_pars_fragment:g_,gradientmap_pars_fragment:x_,lightmap_pars_fragment:__,lights_lambert_fragment:y_,lights_lambert_pars_fragment:v_,lights_pars_begin:M_,lights_toon_fragment:S_,lights_toon_pars_fragment:E_,lights_phong_fragment:T_,lights_phong_pars_fragment:w_,lights_physical_fragment:A_,lights_physical_pars_fragment:R_,lights_fragment_begin:C_,lights_fragment_maps:I_,lights_fragment_end:P_,logdepthbuf_fragment:L_,logdepthbuf_pars_fragment:D_,logdepthbuf_pars_vertex:N_,logdepthbuf_vertex:U_,map_fragment:F_,map_pars_fragment:O_,map_particle_fragment:B_,map_particle_pars_fragment:z_,metalnessmap_fragment:k_,metalnessmap_pars_fragment:H_,morphinstance_vertex:V_,morphcolor_vertex:G_,morphnormal_vertex:W_,morphtarget_pars_vertex:X_,morphtarget_vertex:q_,normal_fragment_begin:Y_,normal_fragment_maps:$_,normal_pars_fragment:Z_,normal_pars_vertex:K_,normal_vertex:J_,normalmap_pars_fragment:j_,clearcoat_normal_fragment_begin:Q_,clearcoat_normal_fragment_maps:ey,clearcoat_pars_fragment:ty,iridescence_pars_fragment:ny,opaque_fragment:iy,packing:sy,premultiplied_alpha_fragment:ry,project_vertex:oy,dithering_fragment:ay,dithering_pars_fragment:cy,roughnessmap_fragment:ly,roughnessmap_pars_fragment:uy,shadowmap_pars_fragment:hy,shadowmap_pars_vertex:fy,shadowmap_vertex:dy,shadowmask_pars_fragment:py,skinbase_vertex:my,skinning_pars_vertex:gy,skinning_vertex:xy,skinnormal_vertex:_y,specularmap_fragment:yy,specularmap_pars_fragment:vy,tonemapping_fragment:My,tonemapping_pars_fragment:by,transmission_fragment:Sy,transmission_pars_fragment:Ey,uv_pars_fragment:Ty,uv_pars_vertex:wy,uv_vertex:Ay,worldpos_vertex:Ry,background_vert:Cy,background_frag:Iy,backgroundCube_vert:Py,backgroundCube_frag:Ly,cube_vert:Dy,cube_frag:Ny,depth_vert:Uy,depth_frag:Fy,distanceRGBA_vert:Oy,distanceRGBA_frag:By,equirect_vert:zy,equirect_frag:ky,linedashed_vert:Hy,linedashed_frag:Vy,meshbasic_vert:Gy,meshbasic_frag:Wy,meshlambert_vert:Xy,meshlambert_frag:qy,meshmatcap_vert:Yy,meshmatcap_frag:$y,meshnormal_vert:Zy,meshnormal_frag:Ky,meshphong_vert:Jy,meshphong_frag:jy,meshphysical_vert:Qy,meshphysical_frag:ev,meshtoon_vert:tv,meshtoon_frag:nv,points_vert:iv,points_frag:sv,shadow_vert:rv,shadow_frag:ov,sprite_vert:av,sprite_frag:cv},We={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},yi={basic:{uniforms:En([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:En([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Re(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:En([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:En([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:En([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Re(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:En([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:En([We.points,We.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:En([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:En([We.common,We.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:En([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:En([We.sprite,We.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:En([We.common,We.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:En([We.lights,We.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};yi.physical={uniforms:En([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Pa={r:0,b:0,g:0},Vs=new fi,lv=new et;function uv(n,e,t,i,s,r,o){let a=new Re(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function x(b){let y=!1,_=g(b);_===null?d(a,c):_&&_.isColor&&(d(_,1),y=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,y){let _=g(y);_&&(_.isCubeTexture||_.mapping===vc)?(h===void 0&&(h=new ot(new cn(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:Yr(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vs.copy(y.backgroundRotation),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lv.makeRotationFromEuler(Vs)),h.material.toneMapped=pt.getTransfer(_.colorSpace)!==St,(u!==_||f!==_.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,p=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ot(new Pn(2,2),new Et({name:"BackgroundMaterial",uniforms:Yr(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=pt.getTransfer(_.colorSpace)!==St,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function d(b,y){b.getRGB(Pa,Lp(n)),i.buffers.color.setClear(Pa.r,Pa.g,Pa.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),c=y,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,d(a,c)},render:x,addToRenderList:m}}function hv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(S,I,B,z,L){let F=!1,U=u(z,B,I);r!==U&&(r=U,l(r.object)),F=p(S,z,B,L),F&&g(S,z,B,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,_(S,I,B,z),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function u(S,I,B){let z=B.wireframe===!0,L=i[S.id];L===void 0&&(L={},i[S.id]=L);let F=L[I.id];F===void 0&&(F={},L[I.id]=F);let U=F[z];return U===void 0&&(U=f(c()),F[z]=U),U}function f(S){let I=[],B=[],z=[];for(let L=0;L<t;L++)I[L]=0,B[L]=0,z[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,I,B,z){let L=r.attributes,F=I.attributes,U=0,Y=B.getAttributes();for(let V in Y)if(Y[V].location>=0){let ce=L[V],xe=F[V];if(xe===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(xe=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(xe=S.instanceColor)),ce===void 0||ce.attribute!==xe||xe&&ce.data!==xe.data)return!0;U++}return r.attributesNum!==U||r.index!==z}function g(S,I,B,z){let L={},F=I.attributes,U=0,Y=B.getAttributes();for(let V in Y)if(Y[V].location>=0){let ce=F[V];ce===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor));let xe={};xe.attribute=ce,ce&&ce.data&&(xe.data=ce.data),L[V]=xe,U++}r.attributes=L,r.attributesNum=U,r.index=z}function x(){let S=r.newAttributes;for(let I=0,B=S.length;I<B;I++)S[I]=0}function m(S){d(S,0)}function d(S,I){let B=r.newAttributes,z=r.enabledAttributes,L=r.attributeDivisors;B[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),L[S]!==I&&(n.vertexAttribDivisor(S,I),L[S]=I)}function b(){let S=r.newAttributes,I=r.enabledAttributes;for(let B=0,z=I.length;B<z;B++)I[B]!==S[B]&&(n.disableVertexAttribArray(B),I[B]=0)}function y(S,I,B,z,L,F,U){U===!0?n.vertexAttribIPointer(S,I,B,L,F):n.vertexAttribPointer(S,I,B,z,L,F)}function _(S,I,B,z){x();let L=z.attributes,F=B.getAttributes(),U=I.defaultAttributeValues;for(let Y in F){let V=F[Y];if(V.location>=0){let ie=L[Y];if(ie===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),ie!==void 0){let ce=ie.normalized,xe=ie.itemSize,ve=e.get(ie);if(ve===void 0)continue;let ue=ve.buffer,ee=ve.type,te=ve.bytesPerElement,ne=ee===n.INT||ee===n.UNSIGNED_INT||ie.gpuType===mh;if(ie.isInterleavedBufferAttribute){let R=ie.data,q=R.stride,X=ie.offset;if(R.isInstancedInterleavedBuffer){for(let Z=0;Z<V.locationSize;Z++)d(V.location+Z,R.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let Z=0;Z<V.locationSize;Z++)m(V.location+Z);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let Z=0;Z<V.locationSize;Z++)y(V.location+Z,xe/V.locationSize,ee,ce,q*te,(X+xe/V.locationSize*Z)*te,ne)}else{if(ie.isInstancedBufferAttribute){for(let R=0;R<V.locationSize;R++)d(V.location+R,ie.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let R=0;R<V.locationSize;R++)m(V.location+R);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let R=0;R<V.locationSize;R++)y(V.location+R,xe/V.locationSize,ee,ce,xe*te,xe/V.locationSize*R*te,ne)}}else if(U!==void 0){let ce=U[Y];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(V.location,ce);break;case 3:n.vertexAttrib3fv(V.location,ce);break;case 4:n.vertexAttrib4fv(V.location,ce);break;default:n.vertexAttrib1fv(V.location,ce)}}}}b()}function E(){w();for(let S in i){let I=i[S];for(let B in I){let z=I[B];for(let L in z)h(z[L].object),delete z[L];delete I[B]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;let I=i[S.id];for(let B in I){let z=I[B];for(let L in z)h(z[L].object),delete z[L];delete I[B]}delete i[S.id]}function v(S){for(let I in i){let B=i[I];if(B[S.id]===void 0)continue;let z=B[S.id];for(let L in z)h(z[L].object),delete z[L];delete B[S.id]}}function w(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function fv(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function c(l,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function dv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==Kn&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let w=v===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Gi&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==ui&&!w)}function c(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:E,maxSamples:T}}function pv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ci,a=new ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let b=r?0:i,y=b*4,_=d.clippingState||null;c.value=_,_=h(g,f,y,p);for(let E=0;E!==y;++E)_[E]=t[E];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let d=p+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,_=p;y!==x;++y,_+=4)o.copy(u[y]).applyMatrix4(b,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function mv(n){let e=new WeakMap;function t(o,a){return a===nu?o.mapping=zr:a===iu&&(o.mapping=kr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===nu||a===iu)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Uu(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var gs=class extends tc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Lr=4,wd=[.125,.215,.35,.446,.526,.582],Xs=20,Fl=new gs,Ad=new Re,Ol=null,Bl=0,zl=0,kl=!1,Ws=(1+Math.sqrt(5))/2,Tr=1/Ws,Rd=[new k(-Ws,Tr,0),new k(Ws,Tr,0),new k(-Tr,0,Ws),new k(Tr,0,Ws),new k(0,Ws,-Tr),new k(0,Ws,Tr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],$r=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ol,Bl,zl),this._renderer.xr.enabled=kl,e.scissorTest=!1,La(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zr||e.mapping===kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:An,format:Kn,colorSpace:yn,depthBuffer:!1},s=Cd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gv(r)),this._blurMaterial=xv(r,e,t)}return s}_compileMaterial(e){let t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,Fl)}_sceneToCubeUV(e,t,i,s){let a=new $t(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ad),h.toneMapping=ps,h.autoClear=!1;let p=new Xt({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new ot(new cn,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Ad),x=!0);for(let d=0;d<6;d++){let b=d%3;b===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):b===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let y=this._cubeSize;La(s,b*y,d>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===zr||e.mapping===kr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Id());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;La(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Fl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Rd[(s-r-1)%Rd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ot(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Xs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Xs;m>Xs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xs}`);let d=[],b=0;for(let v=0;v<Xs;++v){let w=v/x,M=Math.exp(-w*w/2);d.push(M),v===0?b+=M:v<m&&(b+=2*M)}for(let v=0;v<d.length;v++)d[v]=d[v]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;let _=this._sizeLods[s],E=3*_*(s>y-Lr?s-y+Lr:0),T=4*(this._cubeSize-_);La(t,E,T,3*_,2*_),c.setRenderTarget(t),c.render(u,Fl)}};function gv(n){let e=[],t=[],i=[],s=n,r=n-Lr+1+wd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Lr?c=wd[o-n+Lr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,d=1,b=new Float32Array(x*g*p),y=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let T=0;T<p;T++){let v=T%3*2/3-1,w=T>2?0:-1,M=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];b.set(M,x*g*T),y.set(f,m*g*T);let S=[T,T,T,T,T,T];_.set(S,d*g*T)}let E=new gt;E.setAttribute("position",new mt(b,x)),E.setAttribute("uv",new mt(y,m)),E.setAttribute("faceIndex",new mt(_,d)),e.push(E),s>Lr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Cd(n,e,t){let i=new Qt(n,e,t);return i.texture.mapping=vc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function La(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function xv(n,e,t){let i=new Float32Array(Xs),s=new k(0,1,0);return new Et({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Id(){return new Et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Pd(){return new Et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Eh(){return`

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
	`}function _v(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===nu||c===iu,h=c===zr||c===kr;if(l||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new $r(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new $r(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function yv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Po("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function vv(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,d=x.length;m<d;m++)e.update(x[m],n.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let b=p.array;x=p.version;for(let y=0,_=b.length;y<_;y+=3){let E=b[y+0],T=b[y+1],v=b[y+2];f.push(E,T,T,v,v,E)}}else if(g!==void 0){let b=g.array;x=g.version;for(let y=0,_=b.length/3-1;y<_;y+=3){let E=y+0,T=y+1,v=y+2;f.push(E,T,T,v,v,E)}}else return;let m=new(Ip(f)?ec:Qa)(f,1);m.version=x;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Mv(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),t.update(p,i,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function u(f,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,x,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b]*x[b];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function bv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Sv(n,e,t){let i=new WeakMap,s=new yt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let M=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],y=0;p===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*E*4*u),v=new Ja(T,_,E,u);v.type=ui,v.needsUpdate=!0;let w=y*4;for(let S=0;S<u;S++){let I=m[S],B=d[S],z=b[S],L=_*E*4*S;for(let F=0;F<I.count;F++){let U=F*w;p===!0&&(s.fromBufferAttribute(I,F),T[L+U+0]=s.x,T[L+U+1]=s.y,T[L+U+2]=s.z,T[L+U+3]=0),g===!0&&(s.fromBufferAttribute(B,F),T[L+U+4]=s.x,T[L+U+5]=s.y,T[L+U+6]=s.z,T[L+U+7]=0),x===!0&&(s.fromBufferAttribute(z,F),T[L+U+8]=s.x,T[L+U+9]=s.y,T[L+U+10]=s.z,T[L+U+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:v,size:new Ke(_,E)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Ev(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var ic=class extends an{constructor(e,t,i,s,r,o,a,c,l,h=Nr){if(h!==Nr&&h!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Nr&&(i=qs),i===void 0&&h===Vr&&(i=Hr),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Np=new an,Ld=new ic(1,1),Up=new Ja,Fp=new Du,Op=new nc,Dd=[],Nd=[],Ud=new Float32Array(16),Fd=new Float32Array(9),Od=new Float32Array(4);function to(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Dd[s];if(r===void 0&&(r=new Float32Array(s),Dd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function tn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function nn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Sc(n,e){let t=Nd[e];t===void 0&&(t=new Int32Array(e),Nd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Tv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2fv(this.addr,e),nn(t,e)}}function Av(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;n.uniform3fv(this.addr,e),nn(t,e)}}function Rv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4fv(this.addr,e),nn(t,e)}}function Cv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Od.set(i),n.uniformMatrix2fv(this.addr,!1,Od),nn(t,i)}}function Iv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Fd.set(i),n.uniformMatrix3fv(this.addr,!1,Fd),nn(t,i)}}function Pv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Ud.set(i),n.uniformMatrix4fv(this.addr,!1,Ud),nn(t,i)}}function Lv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Dv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2iv(this.addr,e),nn(t,e)}}function Nv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3iv(this.addr,e),nn(t,e)}}function Uv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4iv(this.addr,e),nn(t,e)}}function Fv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ov(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2uiv(this.addr,e),nn(t,e)}}function Bv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3uiv(this.addr,e),nn(t,e)}}function zv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4uiv(this.addr,e),nn(t,e)}}function kv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ld.compareFunction=Rp,r=Ld):r=Np,t.setTexture2D(e||r,s)}function Hv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Fp,s)}function Vv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Op,s)}function Gv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Up,s)}function Wv(n){switch(n){case 5126:return Tv;case 35664:return wv;case 35665:return Av;case 35666:return Rv;case 35674:return Cv;case 35675:return Iv;case 35676:return Pv;case 5124:case 35670:return Lv;case 35667:case 35671:return Dv;case 35668:case 35672:return Nv;case 35669:case 35673:return Uv;case 5125:return Fv;case 36294:return Ov;case 36295:return Bv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return Gv}}function Xv(n,e){n.uniform1fv(this.addr,e)}function qv(n,e){let t=to(e,this.size,2);n.uniform2fv(this.addr,t)}function Yv(n,e){let t=to(e,this.size,3);n.uniform3fv(this.addr,t)}function $v(n,e){let t=to(e,this.size,4);n.uniform4fv(this.addr,t)}function Zv(n,e){let t=to(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Kv(n,e){let t=to(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Jv(n,e){let t=to(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jv(n,e){n.uniform1iv(this.addr,e)}function Qv(n,e){n.uniform2iv(this.addr,e)}function e1(n,e){n.uniform3iv(this.addr,e)}function t1(n,e){n.uniform4iv(this.addr,e)}function n1(n,e){n.uniform1uiv(this.addr,e)}function i1(n,e){n.uniform2uiv(this.addr,e)}function s1(n,e){n.uniform3uiv(this.addr,e)}function r1(n,e){n.uniform4uiv(this.addr,e)}function o1(n,e,t){let i=this.cache,s=e.length,r=Sc(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Np,r[o])}function a1(n,e,t){let i=this.cache,s=e.length,r=Sc(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Fp,r[o])}function c1(n,e,t){let i=this.cache,s=e.length,r=Sc(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Op,r[o])}function l1(n,e,t){let i=this.cache,s=e.length,r=Sc(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Up,r[o])}function u1(n){switch(n){case 5126:return Xv;case 35664:return qv;case 35665:return Yv;case 35666:return $v;case 35674:return Zv;case 35675:return Kv;case 35676:return Jv;case 5124:case 35670:return jv;case 35667:case 35671:return Qv;case 35668:case 35672:return e1;case 35669:case 35673:return t1;case 5125:return n1;case 36294:return i1;case 36295:return s1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return a1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return l1}}var Fu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Wv(t.type)}},Ou=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u1(t.type)}},Bu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Hl=/(\w+)(\])?(\[|\.)?/g;function Bd(n,e){n.seq.push(e),n.map[e.id]=e}function h1(n,e,t){let i=n.name,s=i.length;for(Hl.lastIndex=0;;){let r=Hl.exec(i),o=Hl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Bd(t,l===void 0?new Fu(a,n,e):new Ou(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Bu(a),Bd(t,u)),t=u}}}var Fr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);h1(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function zd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var f1=37297,d1=0;function p1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var kd=new ut;function m1(n){pt._getMatrix(kd,pt.workingColorSpace,n);let e=`mat3( ${kd.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(n)){case bc:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Hd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+p1(n.getShaderSource(e),o)}else return s}function g1(n,e){let t=m1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function x1(n,e){let t;switch(e){case lh:t="Linear";break;case uh:t="Reinhard";break;case hh:t="Cineon";break;case Yo:t="ACESFilmic";break;case fh:t="AgX";break;case dh:t="Neutral";break;case Dg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Da=new k;function _1(){pt.getLuminanceCoefficients(Da);let n=Da.x.toFixed(4),e=Da.y.toFixed(4),t=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function v1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function M1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Lo(n){return n!==""}function Vd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var b1=/^[ \t]*#include +<([\w\d./]+)>/gm;function zu(n){return n.replace(b1,E1)}var S1=new Map;function E1(n,e){let t=ft[e];if(t===void 0){let i=S1.get(e);if(i!==void 0)t=ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zu(t)}var T1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wd(n){return n.replace(T1,w1)}function w1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function A1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===pg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function R1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zr:case kr:e="ENVMAP_TYPE_CUBE";break;case vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C1(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===kr&&(e="ENVMAP_MODE_REFRACTION"),e}function I1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ch:e="ENVMAP_BLENDING_MULTIPLY";break;case Pg:e="ENVMAP_BLENDING_MIX";break;case Lg:e="ENVMAP_BLENDING_ADD";break}return e}function P1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function L1(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=A1(t),l=R1(t),h=C1(t),u=I1(t),f=P1(t),p=y1(t),g=v1(r),x=s.createProgram(),m,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Lo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Lo).join(`
`),d.length>0&&(d+=`
`)):(m=[Xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),d=[Xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ps?"#define TONE_MAPPING":"",t.toneMapping!==ps?ft.tonemapping_pars_fragment:"",t.toneMapping!==ps?x1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,g1("linearToOutputTexel",t.outputColorSpace),_1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),o=zu(o),o=Vd(o,t),o=Gd(o,t),a=zu(a),a=Vd(a,t),a=Gd(a,t),o=Wd(o),a=Wd(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===sd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let y=b+m+o,_=b+d+a,E=zd(s,s.VERTEX_SHADER,y),T=zd(s,s.FRAGMENT_SHADER,_);s.attachShader(x,E),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function v(I){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(E).trim(),L=s.getShaderInfoLog(T).trim(),F=!0,U=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,T);else{let Y=Hd(s,E,"vertex"),V=Hd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+Y+`
`+V)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||L==="")&&(U=!1);U&&(I.diagnostics={runnable:F,programLog:B,vertexShader:{log:z,prefix:m},fragmentShader:{log:L,prefix:d}})}s.deleteShader(E),s.deleteShader(T),w=new Fr(s,x),M=M1(s,x)}let w;this.getUniforms=function(){return w===void 0&&v(this),w};let M;this.getAttributes=function(){return M===void 0&&v(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,f1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}var D1=0,ku=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Hu(e),t.set(e,i)),i}},Hu=class{constructor(e){this.id=D1++,this.code=e,this.usedTimes=0}};function N1(n,e,t,i,s,r,o){let a=new ja,c=new ku,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,I,B,z){let L=B.fog,F=z.geometry,U=M.isMeshStandardMaterial?B.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||U),V=Y&&Y.mapping===vc?Y.image.height:null,ie=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ce=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,xe=ce!==void 0?ce.length:0,ve=0;F.morphAttributes.position!==void 0&&(ve=1),F.morphAttributes.normal!==void 0&&(ve=2),F.morphAttributes.color!==void 0&&(ve=3);let ue,ee,te,ne;if(ie){let He=yi[ie];ue=He.vertexShader,ee=He.fragmentShader}else ue=M.vertexShader,ee=M.fragmentShader,c.update(M),te=c.getVertexShaderID(M),ne=c.getFragmentShaderID(M);let R=n.getRenderTarget(),q=n.state.buffers.depth.getReversed(),X=z.isInstancedMesh===!0,Z=z.isBatchedMesh===!0,de=!!M.map,Se=!!M.matcap,Ce=!!Y,H=!!M.aoMap,Ve=!!M.lightMap,ke=!!M.bumpMap,ze=!!M.normalMap,De=!!M.displacementMap,Ye=!!M.emissiveMap,Ne=!!M.metalnessMap,N=!!M.roughnessMap,A=M.anisotropy>0,j=M.clearcoat>0,ge=M.dispersion>0,_e=M.iridescence>0,fe=M.sheen>0,Ie=M.transmission>0,Fe=A&&!!M.anisotropyMap,Oe=j&&!!M.clearcoatMap,Ge=j&&!!M.clearcoatNormalMap,Ee=j&&!!M.clearcoatRoughnessMap,J=_e&&!!M.iridescenceMap,be=_e&&!!M.iridescenceThicknessMap,Me=fe&&!!M.sheenColorMap,se=fe&&!!M.sheenRoughnessMap,we=!!M.specularMap,oe=!!M.specularColorMap,Te=!!M.specularIntensityMap,W=Ie&&!!M.transmissionMap,Ae=Ie&&!!M.thicknessMap,C=!!M.gradientMap,D=!!M.alphaMap,O=M.alphaTest>0,K=!!M.alphaHash,he=!!M.extensions,Pe=ps;M.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Pe=n.toneMapping);let Be={shaderID:ie,shaderType:M.type,shaderName:M.name,vertexShader:ue,fragmentShader:ee,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:ne,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Z,batchingColor:Z&&z._colorsTexture!==null,instancing:X,instancingColor:X&&z.instanceColor!==null,instancingMorph:X&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:R===null?n.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:yn,alphaToCoverage:!!M.alphaToCoverage,map:de,matcap:Se,envMap:Ce,envMapMode:Ce&&Y.mapping,envMapCubeUVHeight:V,aoMap:H,lightMap:Ve,bumpMap:ke,normalMap:ze,displacementMap:f&&De,emissiveMap:Ye,normalMapObjectSpace:ze&&M.normalMapType===Bg,normalMapTangentSpace:ze&&M.normalMapType===bh,metalnessMap:Ne,roughnessMap:N,anisotropy:A,anisotropyMap:Fe,clearcoat:j,clearcoatMap:Oe,clearcoatNormalMap:Ge,clearcoatRoughnessMap:Ee,dispersion:ge,iridescence:_e,iridescenceMap:J,iridescenceThicknessMap:be,sheen:fe,sheenColorMap:Me,sheenRoughnessMap:se,specularMap:we,specularColorMap:oe,specularIntensityMap:Te,transmission:Ie,transmissionMap:W,thicknessMap:Ae,gradientMap:C,opaque:M.transparent===!1&&M.blending===Dr&&M.alphaToCoverage===!1,alphaMap:D,alphaTest:O,alphaHash:K,combine:M.combine,mapUv:de&&x(M.map.channel),aoMapUv:H&&x(M.aoMap.channel),lightMapUv:Ve&&x(M.lightMap.channel),bumpMapUv:ke&&x(M.bumpMap.channel),normalMapUv:ze&&x(M.normalMap.channel),displacementMapUv:De&&x(M.displacementMap.channel),emissiveMapUv:Ye&&x(M.emissiveMap.channel),metalnessMapUv:Ne&&x(M.metalnessMap.channel),roughnessMapUv:N&&x(M.roughnessMap.channel),anisotropyMapUv:Fe&&x(M.anisotropyMap.channel),clearcoatMapUv:Oe&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:be&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:se&&x(M.sheenRoughnessMap.channel),specularMapUv:we&&x(M.specularMap.channel),specularColorMapUv:oe&&x(M.specularColorMap.channel),specularIntensityMapUv:Te&&x(M.specularIntensityMap.channel),transmissionMapUv:W&&x(M.transmissionMap.channel),thicknessMapUv:Ae&&x(M.thicknessMap.channel),alphaMapUv:D&&x(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ze||A),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!F.attributes.uv&&(de||D),fog:!!L,useFog:M.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:q,skinning:z.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:ve,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pe,decodeVideoTexture:de&&M.map.isVideoTexture===!0&&pt.getTransfer(M.map.colorSpace)===St,decodeVideoTextureEmissive:Ye&&M.emissiveMap.isVideoTexture===!0&&pt.getTransfer(M.emissiveMap.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ct,flipSided:M.side===Jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:he&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&M.extensions.multiDraw===!0||Z)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function d(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(b(S,M),y(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function b(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){let S=g[M.type],I;if(S){let B=yi[S];I=Ei.clone(B.uniforms)}else I=M.uniforms;return I}function E(M,S){let I;for(let B=0,z=h.length;B<z;B++){let L=h[B];if(L.cacheKey===S){I=L,++I.usedTimes;break}}return I===void 0&&(I=new L1(n,S,M,r),h.push(I)),I}function T(M){if(--M.usedTimes===0){let S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function v(M){c.remove(M)}function w(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:E,releaseProgram:T,releaseShaderCache:v,programs:h,dispose:w}}function U1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function F1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function qd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,p,g,x,m){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),e++,d}function a(u,f,p,g,x,m){let d=o(u,f,p,g,x,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(u,f,p,g,x,m){let d=o(u,f,p,g,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||F1),i.length>1&&i.sort(f||qd),s.length>1&&s.sort(f||qd)}function h(){for(let u=e,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function O1(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Yd,n.set(i,[o])):s>=r.length?(o=new Yd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function B1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Re};break;case"SpotLight":t={position:new k,direction:new k,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function z1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var k1=0;function H1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function V1(n){let e=new B1,t=z1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);let s=new k,r=new et,o=new et;function a(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,b=0,y=0,_=0,E=0,T=0,v=0;l.sort(H1);for(let M=0,S=l.length;M<S;M++){let I=l[M],B=I.color,z=I.intensity,L=I.distance,F=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=B.r*z,u+=B.g*z,f+=B.b*z;else if(I.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(I.sh.coefficients[U],z);v++}else if(I.isDirectionalLight){let U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,V=t.get(I);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=F,i.directionalShadowMatrix[p]=I.shadow.matrix,b++}i.directional[p]=U,p++}else if(I.isSpotLight){let U=e.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(B).multiplyScalar(z),U.distance=L,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,i.spot[x]=U;let Y=I.shadow;if(I.map&&(i.spotLightMap[E]=I.map,E++,Y.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[x]=Y.matrix,I.castShadow){let V=t.get(I);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=F,_++}x++}else if(I.isRectAreaLight){let U=e.get(I);U.color.copy(B).multiplyScalar(z),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=U,m++}else if(I.isPointLight){let U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),U.distance=I.distance,U.decay=I.decay,I.castShadow){let Y=I.shadow,V=t.get(I);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=I.shadow.matrix,y++}i.point[g]=U,g++}else if(I.isHemisphereLight){let U=e.get(I);U.skyColor.copy(I.color).multiplyScalar(z),U.groundColor.copy(I.groundColor).multiplyScalar(z),i.hemi[d]=U,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=We.LTC_FLOAT_1,i.rectAreaLTC2=We.LTC_FLOAT_2):(i.rectAreaLTC1=We.LTC_HALF_1,i.rectAreaLTC2=We.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let w=i.hash;(w.directionalLength!==p||w.pointLength!==g||w.spotLength!==x||w.rectAreaLength!==m||w.hemiLength!==d||w.numDirectionalShadows!==b||w.numPointShadows!==y||w.numSpotShadows!==_||w.numSpotMaps!==E||w.numLightProbes!==v)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+E-T,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=v,w.directionalLength=p,w.pointLength=g,w.spotLength=x,w.rectAreaLength=m,w.hemiLength=d,w.numDirectionalShadows=b,w.numPointShadows=y,w.numSpotShadows=_,w.numSpotMaps=E,w.numLightProbes=v,i.version=k1++)}function c(l,h){let u=0,f=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let d=0,b=l.length;d<b;d++){let y=l[d];if(y.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(y.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function $d(n){let e=new V1(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function G1(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new $d(n),e.set(s,[a])):r>=o.length?(a=new $d(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Vu=class extends Tn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Fg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gu=class extends Tn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},W1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X1=`uniform sampler2D shadow_pass;
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
}`;function q1(n,e,t){let i=new Ho,s=new Ke,r=new Ke,o=new yt,a=new Vu({depthPacking:Og}),c=new Gu,l={},h=t.maxTextureSize,u={[Mi]:Jt,[Jt]:Mi,[Ct]:Ct},f=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:W1,fragmentShader:X1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new gt;g.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ot(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let d=this.type;this.render=function(T,v,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let M=n.getRenderTarget(),S=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),B=n.state;B.setBlending(vi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let z=d!==Oi&&this.type===Oi,L=d===Oi&&this.type!==Oi;for(let F=0,U=T.length;F<U;F++){let Y=T[F],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ie=V.getFrameExtents();if(s.multiply(ie),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,V.mapSize.y=r.y)),V.map===null||z===!0||L===!0){let xe=this.type!==Oi?{minFilter:on,magFilter:on}:{};V.map!==null&&V.map.dispose(),V.map=new Qt(s.x,s.y,xe),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let ce=V.getViewportCount();for(let xe=0;xe<ce;xe++){let ve=V.getViewport(xe);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),B.viewport(o),V.updateMatrices(Y,xe),i=V.getFrustum(),_(v,w,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Oi&&b(V,w),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,I)};function b(T,v){let w=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qt(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(v,null,w,f,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(v,null,w,p,x,null)}function y(T,v,w,M){let S=null,I=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)S=I;else if(S=w.isPointLight===!0?c:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){let B=S.uuid,z=v.uuid,L=l[B];L===void 0&&(L={},l[B]=L);let F=L[z];F===void 0&&(F=S.clone(),L[z]=F,v.addEventListener("dispose",E)),S=F}if(S.visible=v.visible,S.wireframe=v.wireframe,M===Oi?S.side=v.shadowSide!==null?v.shadowSide:v.side:S.side=v.shadowSide!==null?v.shadowSide:u[v.side],S.alphaMap=v.alphaMap,S.alphaTest=v.alphaTest,S.map=v.map,S.clipShadows=v.clipShadows,S.clippingPlanes=v.clippingPlanes,S.clipIntersection=v.clipIntersection,S.displacementMap=v.displacementMap,S.displacementScale=v.displacementScale,S.displacementBias=v.displacementBias,S.wireframeLinewidth=v.wireframeLinewidth,S.linewidth=v.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let B=n.properties.get(S);B.light=w}return S}function _(T,v,w,M,S){if(T.visible===!1)return;if(T.layers.test(v.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Oi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let z=e.update(T),L=T.material;if(Array.isArray(L)){let F=z.groups;for(let U=0,Y=F.length;U<Y;U++){let V=F[U],ie=L[V.materialIndex];if(ie&&ie.visible){let ce=y(T,ie,M,S);T.onBeforeShadow(n,T,v,w,z,ce,V),n.renderBufferDirect(w,null,z,ce,T,V),T.onAfterShadow(n,T,v,w,z,ce,V)}}}else if(L.visible){let F=y(T,L,M,S);T.onBeforeShadow(n,T,v,w,z,F,null),n.renderBufferDirect(w,null,z,F,T,null),T.onAfterShadow(n,T,v,w,z,F,null)}}let B=T.children;for(let z=0,L=B.length;z<L;z++)_(B[z],v,w,M,S)}function E(T){T.target.removeEventListener("dispose",E);for(let w in l){let M=l[w],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}var Y1={[Zl]:Kl,[Jl]:eu,[jl]:tu,[Br]:Ql,[Kl]:Zl,[eu]:Jl,[tu]:jl,[Ql]:Br};function $1(n,e){function t(){let W=!1,Ae=new yt,C=null,D=new yt(0,0,0,0);return{setMask:function(O){C!==O&&!W&&(n.colorMask(O,O,O,O),C=O)},setLocked:function(O){W=O},setClear:function(O,K,he,Pe,Be){Be===!0&&(O*=Pe,K*=Pe,he*=Pe),Ae.set(O,K,he,Pe),D.equals(Ae)===!1&&(n.clearColor(O,K,he,Pe),D.copy(Ae))},reset:function(){W=!1,C=null,D.set(-1,0,0,0)}}}function i(){let W=!1,Ae=!1,C=null,D=null,O=null;return{setReversed:function(K){if(Ae!==K){let he=e.get("EXT_clip_control");Ae?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT);let Pe=O;O=null,this.setClear(Pe)}Ae=K},getReversed:function(){return Ae},setTest:function(K){K?R(n.DEPTH_TEST):q(n.DEPTH_TEST)},setMask:function(K){C!==K&&!W&&(n.depthMask(K),C=K)},setFunc:function(K){if(Ae&&(K=Y1[K]),D!==K){switch(K){case Zl:n.depthFunc(n.NEVER);break;case Kl:n.depthFunc(n.ALWAYS);break;case Jl:n.depthFunc(n.LESS);break;case Br:n.depthFunc(n.LEQUAL);break;case jl:n.depthFunc(n.EQUAL);break;case Ql:n.depthFunc(n.GEQUAL);break;case eu:n.depthFunc(n.GREATER);break;case tu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}D=K}},setLocked:function(K){W=K},setClear:function(K){O!==K&&(Ae&&(K=1-K),n.clearDepth(K),O=K)},reset:function(){W=!1,C=null,D=null,O=null,Ae=!1}}}function s(){let W=!1,Ae=null,C=null,D=null,O=null,K=null,he=null,Pe=null,Be=null;return{setTest:function(He){W||(He?R(n.STENCIL_TEST):q(n.STENCIL_TEST))},setMask:function(He){Ae!==He&&!W&&(n.stencilMask(He),Ae=He)},setFunc:function(He,G,re){(C!==He||D!==G||O!==re)&&(n.stencilFunc(He,G,re),C=He,D=G,O=re)},setOp:function(He,G,re){(K!==He||he!==G||Pe!==re)&&(n.stencilOp(He,G,re),K=He,he=G,Pe=re)},setLocked:function(He){W=He},setClear:function(He){Be!==He&&(n.clearStencil(He),Be=He)},reset:function(){W=!1,Ae=null,C=null,D=null,O=null,K=null,he=null,Pe=null,Be=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,b=null,y=null,_=null,E=null,T=null,v=new Re(0,0,0),w=0,M=!1,S=null,I=null,B=null,z=null,L=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,Y=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),U=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),U=Y>=2);let ie=null,ce={},xe=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),ue=new yt().fromArray(xe),ee=new yt().fromArray(ve);function te(W,Ae,C,D){let O=new Uint8Array(4),K=n.createTexture();n.bindTexture(W,K),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let he=0;he<C;he++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,D,0,n.RGBA,n.UNSIGNED_BYTE,O):n.texImage2D(Ae+he,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,O);return K}let ne={};ne[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),R(n.DEPTH_TEST),o.setFunc(Br),ke(!1),ze(Kf),R(n.CULL_FACE),H(vi);function R(W){h[W]!==!0&&(n.enable(W),h[W]=!0)}function q(W){h[W]!==!1&&(n.disable(W),h[W]=!1)}function X(W,Ae){return u[W]!==Ae?(n.bindFramebuffer(W,Ae),u[W]=Ae,W===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Ae),W===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Z(W,Ae){let C=p,D=!1;if(W){C=f.get(Ae),C===void 0&&(C=[],f.set(Ae,C));let O=W.textures;if(C.length!==O.length||C[0]!==n.COLOR_ATTACHMENT0){for(let K=0,he=O.length;K<he;K++)C[K]=n.COLOR_ATTACHMENT0+K;C.length=O.length,D=!0}}else C[0]!==n.BACK&&(C[0]=n.BACK,D=!0);D&&n.drawBuffers(C)}function de(W){return g!==W?(n.useProgram(W),g=W,!0):!1}let Se={[Bi]:n.FUNC_ADD,[mg]:n.FUNC_SUBTRACT,[gg]:n.FUNC_REVERSE_SUBTRACT};Se[xg]=n.MIN,Se[_g]=n.MAX;let Ce={[yg]:n.ZERO,[ah]:n.ONE,[vg]:n.SRC_COLOR,[$l]:n.SRC_ALPHA,[wg]:n.SRC_ALPHA_SATURATE,[Eg]:n.DST_COLOR,[bg]:n.DST_ALPHA,[Mg]:n.ONE_MINUS_SRC_COLOR,[Oo]:n.ONE_MINUS_SRC_ALPHA,[Tg]:n.ONE_MINUS_DST_COLOR,[Sg]:n.ONE_MINUS_DST_ALPHA,[Ag]:n.CONSTANT_COLOR,[Rg]:n.ONE_MINUS_CONSTANT_COLOR,[Cg]:n.CONSTANT_ALPHA,[Ig]:n.ONE_MINUS_CONSTANT_ALPHA};function H(W,Ae,C,D,O,K,he,Pe,Be,He){if(W===vi){x===!0&&(q(n.BLEND),x=!1);return}if(x===!1&&(R(n.BLEND),x=!0),W!==oh){if(W!==m||He!==M){if((d!==Bi||_!==Bi)&&(n.blendEquation(n.FUNC_ADD),d=Bi,_=Bi),He)switch(W){case Dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Or:n.blendFunc(n.ONE,n.ONE);break;case Jf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Or:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}b=null,y=null,E=null,T=null,v.set(0,0,0),w=0,m=W,M=He}return}O=O||Ae,K=K||C,he=he||D,(Ae!==d||O!==_)&&(n.blendEquationSeparate(Se[Ae],Se[O]),d=Ae,_=O),(C!==b||D!==y||K!==E||he!==T)&&(n.blendFuncSeparate(Ce[C],Ce[D],Ce[K],Ce[he]),b=C,y=D,E=K,T=he),(Pe.equals(v)===!1||Be!==w)&&(n.blendColor(Pe.r,Pe.g,Pe.b,Be),v.copy(Pe),w=Be),m=W,M=!1}function Ve(W,Ae){W.side===Ct?q(n.CULL_FACE):R(n.CULL_FACE);let C=W.side===Jt;Ae&&(C=!C),ke(C),W.blending===Dr&&W.transparent===!1?H(vi):H(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let D=W.stencilWrite;a.setTest(D),D&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ye(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?R(n.SAMPLE_ALPHA_TO_COVERAGE):q(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(W){S!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),S=W)}function ze(W){W!==fg?(R(n.CULL_FACE),W!==I&&(W===Kf?n.cullFace(n.BACK):W===dg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):q(n.CULL_FACE),I=W}function De(W){W!==B&&(U&&n.lineWidth(W),B=W)}function Ye(W,Ae,C){W?(R(n.POLYGON_OFFSET_FILL),(z!==Ae||L!==C)&&(n.polygonOffset(Ae,C),z=Ae,L=C)):q(n.POLYGON_OFFSET_FILL)}function Ne(W){W?R(n.SCISSOR_TEST):q(n.SCISSOR_TEST)}function N(W){W===void 0&&(W=n.TEXTURE0+F-1),ie!==W&&(n.activeTexture(W),ie=W)}function A(W,Ae,C){C===void 0&&(ie===null?C=n.TEXTURE0+F-1:C=ie);let D=ce[C];D===void 0&&(D={type:void 0,texture:void 0},ce[C]=D),(D.type!==W||D.texture!==Ae)&&(ie!==C&&(n.activeTexture(C),ie=C),n.bindTexture(W,Ae||ne[W]),D.type=W,D.texture=Ae)}function j(){let W=ce[ie];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ge(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ge(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function J(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(W){ue.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),ue.copy(W))}function se(W){ee.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),ee.copy(W))}function we(W,Ae){let C=l.get(Ae);C===void 0&&(C=new WeakMap,l.set(Ae,C));let D=C.get(W);D===void 0&&(D=n.getUniformBlockIndex(Ae,W.name),C.set(W,D))}function oe(W,Ae){let D=l.get(Ae).get(W);c.get(Ae)!==D&&(n.uniformBlockBinding(Ae,D,W.__bindingPointIndex),c.set(Ae,D))}function Te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ie=null,ce={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,b=null,y=null,_=null,E=null,T=null,v=new Re(0,0,0),w=0,M=!1,S=null,I=null,B=null,z=null,L=null,ue.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:R,disable:q,bindFramebuffer:X,drawBuffers:Z,useProgram:de,setBlending:H,setMaterial:Ve,setFlipSided:ke,setCullFace:ze,setLineWidth:De,setPolygonOffset:Ye,setScissorTest:Ne,activeTexture:N,bindTexture:A,unbindTexture:j,compressedTexImage2D:ge,compressedTexImage3D:_e,texImage2D:J,texImage3D:be,updateUBOMapping:we,uniformBlockBinding:oe,texStorage2D:Ge,texStorage3D:Ee,texSubImage2D:fe,texSubImage3D:Ie,compressedTexSubImage2D:Fe,compressedTexSubImage3D:Oe,scissor:Me,viewport:se,reset:Te}}function Zd(n,e,t,i){let s=Z1(i);switch(t){case Mp:return n*e;case Sp:return n*e;case Ep:return n*e*2;case _h:return n*e/s.components*s.byteLength;case yh:return n*e/s.components*s.byteLength;case Tp:return n*e*2/s.components*s.byteLength;case vh:return n*e*2/s.components*s.byteLength;case bp:return n*e*3/s.components*s.byteLength;case Kn:return n*e*4/s.components*s.byteLength;case Mh:return n*e*4/s.components*s.byteLength;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qa:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ru:case au:return Math.max(n,16)*Math.max(e,8)/4;case su:case ou:return Math.max(n,8)*Math.max(e,8)/2;case cu:case lu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case du:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _u:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Su:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Eu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $a:case Tu:case wu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case wp:case Au:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ru:case Cu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Z1(n){switch(n){case Gi:case _p:return{byteLength:1,components:1};case zo:case yp:case An:return{byteLength:2,components:1};case gh:case xh:return{byteLength:2,components:4};case qs:case mh:case ui:return{byteLength:4,components:1};case vp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function K1(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ke,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,A){return p?new OffscreenCanvas(N,A):ko("canvas")}function x(N,A,j){let ge=1,_e=Ne(N);if((_e.width>j||_e.height>j)&&(ge=j/Math.max(_e.width,_e.height)),ge<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let fe=Math.floor(ge*_e.width),Ie=Math.floor(ge*_e.height);u===void 0&&(u=g(fe,Ie));let Fe=A?g(fe,Ie):u;return Fe.width=fe,Fe.height=Ie,Fe.getContext("2d").drawImage(N,0,0,fe,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+Ie+")."),Fe}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),N;return N}function m(N){return N.generateMipmaps}function d(N){n.generateMipmap(N)}function b(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(N,A,j,ge,_e=!1){if(N!==null){if(n[N]!==void 0)return n[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let fe=A;if(A===n.RED&&(j===n.FLOAT&&(fe=n.R32F),j===n.HALF_FLOAT&&(fe=n.R16F),j===n.UNSIGNED_BYTE&&(fe=n.R8)),A===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.R8UI),j===n.UNSIGNED_SHORT&&(fe=n.R16UI),j===n.UNSIGNED_INT&&(fe=n.R32UI),j===n.BYTE&&(fe=n.R8I),j===n.SHORT&&(fe=n.R16I),j===n.INT&&(fe=n.R32I)),A===n.RG&&(j===n.FLOAT&&(fe=n.RG32F),j===n.HALF_FLOAT&&(fe=n.RG16F),j===n.UNSIGNED_BYTE&&(fe=n.RG8)),A===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RG8UI),j===n.UNSIGNED_SHORT&&(fe=n.RG16UI),j===n.UNSIGNED_INT&&(fe=n.RG32UI),j===n.BYTE&&(fe=n.RG8I),j===n.SHORT&&(fe=n.RG16I),j===n.INT&&(fe=n.RG32I)),A===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),j===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),j===n.UNSIGNED_INT&&(fe=n.RGB32UI),j===n.BYTE&&(fe=n.RGB8I),j===n.SHORT&&(fe=n.RGB16I),j===n.INT&&(fe=n.RGB32I)),A===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),j===n.UNSIGNED_INT&&(fe=n.RGBA32UI),j===n.BYTE&&(fe=n.RGBA8I),j===n.SHORT&&(fe=n.RGBA16I),j===n.INT&&(fe=n.RGBA32I)),A===n.RGB&&j===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),A===n.RGBA){let Ie=_e?bc:pt.getTransfer(ge);j===n.FLOAT&&(fe=n.RGBA32F),j===n.HALF_FLOAT&&(fe=n.RGBA16F),j===n.UNSIGNED_BYTE&&(fe=Ie===St?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function _(N,A){let j;return N?A===null||A===qs||A===Hr?j=n.DEPTH24_STENCIL8:A===ui?j=n.DEPTH32F_STENCIL8:A===zo&&(j=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===qs||A===Hr?j=n.DEPTH_COMPONENT24:A===ui?j=n.DEPTH_COMPONENT32F:A===zo&&(j=n.DEPTH_COMPONENT16),j}function E(N,A){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==on&&N.minFilter!==In?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function T(N){let A=N.target;A.removeEventListener("dispose",T),w(A),A.isVideoTexture&&h.delete(A)}function v(N){let A=N.target;A.removeEventListener("dispose",v),S(A)}function w(N){let A=i.get(N);if(A.__webglInit===void 0)return;let j=N.source,ge=f.get(j);if(ge){let _e=ge[A.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&M(N),Object.keys(ge).length===0&&f.delete(j)}i.remove(N)}function M(N){let A=i.get(N);n.deleteTexture(A.__webglTexture);let j=N.source,ge=f.get(j);delete ge[A.__cacheKey],o.memory.textures--}function S(N){let A=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(A.__webglFramebuffer[ge]))for(let _e=0;_e<A.__webglFramebuffer[ge].length;_e++)n.deleteFramebuffer(A.__webglFramebuffer[ge][_e]);else n.deleteFramebuffer(A.__webglFramebuffer[ge]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[ge])}else{if(Array.isArray(A.__webglFramebuffer))for(let ge=0;ge<A.__webglFramebuffer.length;ge++)n.deleteFramebuffer(A.__webglFramebuffer[ge]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ge=0;ge<A.__webglColorRenderbuffer.length;ge++)A.__webglColorRenderbuffer[ge]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[ge]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let j=N.textures;for(let ge=0,_e=j.length;ge<_e;ge++){let fe=i.get(j[ge]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(j[ge])}i.remove(N)}let I=0;function B(){I=0}function z(){let N=I;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),I+=1,N}function L(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function F(N,A){let j=i.get(N);if(N.isVideoTexture&&De(N),N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){let ge=N.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(j,N,A);return}}t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+A)}function U(N,A){let j=i.get(N);if(N.version>0&&j.__version!==N.version){ee(j,N,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+A)}function Y(N,A){let j=i.get(N);if(N.version>0&&j.__version!==N.version){ee(j,N,A);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+A)}function V(N,A){let j=i.get(N);if(N.version>0&&j.__version!==N.version){te(j,N,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+A)}let ie={[Vi]:n.REPEAT,[zi]:n.CLAMP_TO_EDGE,[Bo]:n.MIRRORED_REPEAT},ce={[on]:n.NEAREST,[ph]:n.NEAREST_MIPMAP_NEAREST,[Pr]:n.NEAREST_MIPMAP_LINEAR,[In]:n.LINEAR,[Do]:n.LINEAR_MIPMAP_NEAREST,[Zn]:n.LINEAR_MIPMAP_LINEAR},xe={[zg]:n.NEVER,[Xg]:n.ALWAYS,[kg]:n.LESS,[Rp]:n.LEQUAL,[Hg]:n.EQUAL,[Wg]:n.GEQUAL,[Vg]:n.GREATER,[Gg]:n.NOTEQUAL};function ve(N,A){if(A.type===ui&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===In||A.magFilter===Do||A.magFilter===Pr||A.magFilter===Zn||A.minFilter===In||A.minFilter===Do||A.minFilter===Pr||A.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,ie[A.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,ie[A.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,ie[A.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,ce[A.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,ce[A.minFilter]),A.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,xe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===on||A.minFilter!==Pr&&A.minFilter!==Zn||A.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function ue(N,A){let j=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",T));let ge=A.source,_e=f.get(ge);_e===void 0&&(_e={},f.set(ge,_e));let fe=L(A);if(fe!==N.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),_e[fe].usedTimes++;let Ie=_e[N.__cacheKey];Ie!==void 0&&(_e[N.__cacheKey].usedTimes--,Ie.usedTimes===0&&M(A)),N.__cacheKey=fe,N.__webglTexture=_e[fe].texture}return j}function ee(N,A,j){let ge=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ge=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ge=n.TEXTURE_3D);let _e=ue(N,A),fe=A.source;t.bindTexture(ge,N.__webglTexture,n.TEXTURE0+j);let Ie=i.get(fe);if(fe.version!==Ie.__version||_e===!0){t.activeTexture(n.TEXTURE0+j);let Fe=pt.getPrimaries(pt.workingColorSpace),Oe=A.colorSpace===hs?null:pt.getPrimaries(A.colorSpace),Ge=A.colorSpace===hs||Fe===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let Ee=x(A.image,!1,s.maxTextureSize);Ee=Ye(A,Ee);let J=r.convert(A.format,A.colorSpace),be=r.convert(A.type),Me=y(A.internalFormat,J,be,A.colorSpace,A.isVideoTexture);ve(ge,A);let se,we=A.mipmaps,oe=A.isVideoTexture!==!0,Te=Ie.__version===void 0||_e===!0,W=fe.dataReady,Ae=E(A,Ee);if(A.isDepthTexture)Me=_(A.format===Vr,A.type),Te&&(oe?t.texStorage2D(n.TEXTURE_2D,1,Me,Ee.width,Ee.height):t.texImage2D(n.TEXTURE_2D,0,Me,Ee.width,Ee.height,0,J,be,null));else if(A.isDataTexture)if(we.length>0){oe&&Te&&t.texStorage2D(n.TEXTURE_2D,Ae,Me,we[0].width,we[0].height);for(let C=0,D=we.length;C<D;C++)se=we[C],oe?W&&t.texSubImage2D(n.TEXTURE_2D,C,0,0,se.width,se.height,J,be,se.data):t.texImage2D(n.TEXTURE_2D,C,Me,se.width,se.height,0,J,be,se.data);A.generateMipmaps=!1}else oe?(Te&&t.texStorage2D(n.TEXTURE_2D,Ae,Me,Ee.width,Ee.height),W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee.width,Ee.height,J,be,Ee.data)):t.texImage2D(n.TEXTURE_2D,0,Me,Ee.width,Ee.height,0,J,be,Ee.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){oe&&Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Me,we[0].width,we[0].height,Ee.depth);for(let C=0,D=we.length;C<D;C++)if(se=we[C],A.format!==Kn)if(J!==null)if(oe){if(W)if(A.layerUpdates.size>0){let O=Zd(se.width,se.height,A.format,A.type);for(let K of A.layerUpdates){let he=se.data.subarray(K*O/se.data.BYTES_PER_ELEMENT,(K+1)*O/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,C,0,0,K,se.width,se.height,1,J,he)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,C,0,0,0,se.width,se.height,Ee.depth,J,se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,C,Me,se.width,se.height,Ee.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,C,0,0,0,se.width,se.height,Ee.depth,J,be,se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,C,Me,se.width,se.height,Ee.depth,0,J,be,se.data)}else{oe&&Te&&t.texStorage2D(n.TEXTURE_2D,Ae,Me,we[0].width,we[0].height);for(let C=0,D=we.length;C<D;C++)se=we[C],A.format!==Kn?J!==null?oe?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,C,0,0,se.width,se.height,J,se.data):t.compressedTexImage2D(n.TEXTURE_2D,C,Me,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?W&&t.texSubImage2D(n.TEXTURE_2D,C,0,0,se.width,se.height,J,be,se.data):t.texImage2D(n.TEXTURE_2D,C,Me,se.width,se.height,0,J,be,se.data)}else if(A.isDataArrayTexture)if(oe){if(Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Me,Ee.width,Ee.height,Ee.depth),W)if(A.layerUpdates.size>0){let C=Zd(Ee.width,Ee.height,A.format,A.type);for(let D of A.layerUpdates){let O=Ee.data.subarray(D*C/Ee.data.BYTES_PER_ELEMENT,(D+1)*C/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,D,Ee.width,Ee.height,1,J,be,O)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,J,be,Ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,Ee.width,Ee.height,Ee.depth,0,J,be,Ee.data);else if(A.isData3DTexture)oe?(Te&&t.texStorage3D(n.TEXTURE_3D,Ae,Me,Ee.width,Ee.height,Ee.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,J,be,Ee.data)):t.texImage3D(n.TEXTURE_3D,0,Me,Ee.width,Ee.height,Ee.depth,0,J,be,Ee.data);else if(A.isFramebufferTexture){if(Te)if(oe)t.texStorage2D(n.TEXTURE_2D,Ae,Me,Ee.width,Ee.height);else{let C=Ee.width,D=Ee.height;for(let O=0;O<Ae;O++)t.texImage2D(n.TEXTURE_2D,O,Me,C,D,0,J,be,null),C>>=1,D>>=1}}else if(we.length>0){if(oe&&Te){let C=Ne(we[0]);t.texStorage2D(n.TEXTURE_2D,Ae,Me,C.width,C.height)}for(let C=0,D=we.length;C<D;C++)se=we[C],oe?W&&t.texSubImage2D(n.TEXTURE_2D,C,0,0,J,be,se):t.texImage2D(n.TEXTURE_2D,C,Me,J,be,se);A.generateMipmaps=!1}else if(oe){if(Te){let C=Ne(Ee);t.texStorage2D(n.TEXTURE_2D,Ae,Me,C.width,C.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,J,be,Ee)}else t.texImage2D(n.TEXTURE_2D,0,Me,J,be,Ee);m(A)&&d(ge),Ie.__version=fe.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function te(N,A,j){if(A.image.length!==6)return;let ge=ue(N,A),_e=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+j);let fe=i.get(_e);if(_e.version!==fe.__version||ge===!0){t.activeTexture(n.TEXTURE0+j);let Ie=pt.getPrimaries(pt.workingColorSpace),Fe=A.colorSpace===hs?null:pt.getPrimaries(A.colorSpace),Oe=A.colorSpace===hs||Ie===Fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let Ge=A.isCompressedTexture||A.image[0].isCompressedTexture,Ee=A.image[0]&&A.image[0].isDataTexture,J=[];for(let D=0;D<6;D++)!Ge&&!Ee?J[D]=x(A.image[D],!0,s.maxCubemapSize):J[D]=Ee?A.image[D].image:A.image[D],J[D]=Ye(A,J[D]);let be=J[0],Me=r.convert(A.format,A.colorSpace),se=r.convert(A.type),we=y(A.internalFormat,Me,se,A.colorSpace),oe=A.isVideoTexture!==!0,Te=fe.__version===void 0||ge===!0,W=_e.dataReady,Ae=E(A,be);ve(n.TEXTURE_CUBE_MAP,A);let C;if(Ge){oe&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,we,be.width,be.height);for(let D=0;D<6;D++){C=J[D].mipmaps;for(let O=0;O<C.length;O++){let K=C[O];A.format!==Kn?Me!==null?oe?W&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,O,0,0,K.width,K.height,Me,K.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,O,we,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,O,0,0,K.width,K.height,Me,se,K.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,O,we,K.width,K.height,0,Me,se,K.data)}}}else{if(C=A.mipmaps,oe&&Te){C.length>0&&Ae++;let D=Ne(J[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,we,D.width,D.height)}for(let D=0;D<6;D++)if(Ee){oe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,J[D].width,J[D].height,Me,se,J[D].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,we,J[D].width,J[D].height,0,Me,se,J[D].data);for(let O=0;O<C.length;O++){let he=C[O].image[D].image;oe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,O+1,0,0,he.width,he.height,Me,se,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,O+1,we,he.width,he.height,0,Me,se,he.data)}}else{oe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Me,se,J[D]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,we,Me,se,J[D]);for(let O=0;O<C.length;O++){let K=C[O];oe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,O+1,0,0,Me,se,K.image[D]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,O+1,we,Me,se,K.image[D])}}}m(A)&&d(n.TEXTURE_CUBE_MAP),fe.__version=_e.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function ne(N,A,j,ge,_e,fe){let Ie=r.convert(j.format,j.colorSpace),Fe=r.convert(j.type),Oe=y(j.internalFormat,Ie,Fe,j.colorSpace),Ge=i.get(A),Ee=i.get(j);if(Ee.__renderTarget=A,!Ge.__hasExternalTextures){let J=Math.max(1,A.width>>fe),be=Math.max(1,A.height>>fe);_e===n.TEXTURE_3D||_e===n.TEXTURE_2D_ARRAY?t.texImage3D(_e,fe,Oe,J,be,A.depth,0,Ie,Fe,null):t.texImage2D(_e,fe,Oe,J,be,0,Ie,Fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),ze(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,_e,Ee.__webglTexture,0,ke(A)):(_e===n.TEXTURE_2D||_e>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ge,_e,Ee.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(N,A,j){if(n.bindRenderbuffer(n.RENDERBUFFER,N),A.depthBuffer){let ge=A.depthTexture,_e=ge&&ge.isDepthTexture?ge.type:null,fe=_(A.stencilBuffer,_e),Ie=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=ke(A);ze(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,fe,A.width,A.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,fe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,fe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,N)}else{let ge=A.textures;for(let _e=0;_e<ge.length;_e++){let fe=ge[_e],Ie=r.convert(fe.format,fe.colorSpace),Fe=r.convert(fe.type),Oe=y(fe.internalFormat,Ie,Fe,fe.colorSpace),Ge=ke(A);j&&ze(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Oe,A.width,A.height):ze(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge,Oe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Oe,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function q(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ge=i.get(A.depthTexture);ge.__renderTarget=A,(!ge.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);let _e=ge.__webglTexture,fe=ke(A);if(A.depthTexture.format===Nr)ze(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_e,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_e,0);else if(A.depthTexture.format===Vr)ze(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_e,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function X(N){let A=i.get(N),j=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){let ge=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ge){let _e=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ge.removeEventListener("dispose",_e)};ge.addEventListener("dispose",_e),A.__depthDisposeCallback=_e}A.__boundDepthTexture=ge}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");q(A.__webglFramebuffer,N)}else if(j){A.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ge]),A.__webglDepthbuffer[ge]===void 0)A.__webglDepthbuffer[ge]=n.createRenderbuffer(),R(A.__webglDepthbuffer[ge],N,!1);else{let _e=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer[ge];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),R(A.__webglDepthbuffer,N,!1);else{let ge=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,_e)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(N,A,j){let ge=i.get(N);A!==void 0&&ne(ge.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&X(N)}function de(N){let A=N.texture,j=i.get(N),ge=i.get(A);N.addEventListener("dispose",v);let _e=N.textures,fe=N.isWebGLCubeRenderTarget===!0,Ie=_e.length>1;if(Ie||(ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture()),ge.__version=A.version,o.memory.textures++),fe){j.__webglFramebuffer=[];for(let Fe=0;Fe<6;Fe++)if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[Fe]=[];for(let Oe=0;Oe<A.mipmaps.length;Oe++)j.__webglFramebuffer[Fe][Oe]=n.createFramebuffer()}else j.__webglFramebuffer[Fe]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let Fe=0;Fe<A.mipmaps.length;Fe++)j.__webglFramebuffer[Fe]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let Fe=0,Oe=_e.length;Fe<Oe;Fe++){let Ge=i.get(_e[Fe]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&ze(N)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Fe=0;Fe<_e.length;Fe++){let Oe=_e[Fe];j.__webglColorRenderbuffer[Fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[Fe]);let Ge=r.convert(Oe.format,Oe.colorSpace),Ee=r.convert(Oe.type),J=y(Oe.internalFormat,Ge,Ee,Oe.colorSpace,N.isXRRenderTarget===!0),be=ke(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,J,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,j.__webglColorRenderbuffer[Fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),R(j.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),ve(n.TEXTURE_CUBE_MAP,A);for(let Fe=0;Fe<6;Fe++)if(A.mipmaps&&A.mipmaps.length>0)for(let Oe=0;Oe<A.mipmaps.length;Oe++)ne(j.__webglFramebuffer[Fe][Oe],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Oe);else ne(j.__webglFramebuffer[Fe],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0);m(A)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let Fe=0,Oe=_e.length;Fe<Oe;Fe++){let Ge=_e[Fe],Ee=i.get(Ge);t.bindTexture(n.TEXTURE_2D,Ee.__webglTexture),ve(n.TEXTURE_2D,Ge),ne(j.__webglFramebuffer,N,Ge,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,0),m(Ge)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let Fe=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Fe=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Fe,ge.__webglTexture),ve(Fe,A),A.mipmaps&&A.mipmaps.length>0)for(let Oe=0;Oe<A.mipmaps.length;Oe++)ne(j.__webglFramebuffer[Oe],N,A,n.COLOR_ATTACHMENT0,Fe,Oe);else ne(j.__webglFramebuffer,N,A,n.COLOR_ATTACHMENT0,Fe,0);m(A)&&d(Fe),t.unbindTexture()}N.depthBuffer&&X(N)}function Se(N){let A=N.textures;for(let j=0,ge=A.length;j<ge;j++){let _e=A[j];if(m(_e)){let fe=b(N),Ie=i.get(_e).__webglTexture;t.bindTexture(fe,Ie),d(fe),t.unbindTexture()}}}let Ce=[],H=[];function Ve(N){if(N.samples>0){if(ze(N)===!1){let A=N.textures,j=N.width,ge=N.height,_e=n.COLOR_BUFFER_BIT,fe=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(N),Fe=A.length>1;if(Fe)for(let Oe=0;Oe<A.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Oe=0;Oe<A.length;Oe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(_e|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(_e|=n.STENCIL_BUFFER_BIT)),Fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Oe]);let Ge=i.get(A[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,j,ge,0,0,j,ge,_e,n.NEAREST),c===!0&&(Ce.length=0,H.length=0,Ce.push(n.COLOR_ATTACHMENT0+Oe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ce.push(fe),H.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ce))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Fe)for(let Oe=0;Oe<A.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Oe]);let Ge=i.get(A[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){let A=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function ke(N){return Math.min(s.maxSamples,N.samples)}function ze(N){let A=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function De(N){let A=o.render.frame;h.get(N)!==A&&(h.set(N,A),N.update())}function Ye(N,A){let j=N.colorSpace,ge=N.format,_e=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||j!==yn&&j!==hs&&(pt.getTransfer(j)===St?(ge!==Kn||_e!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),A}function Ne(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=F,this.setTexture2DArray=U,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=Z,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ze}function J1(n,e){function t(i,s=hs){let r,o=pt.getTransfer(s);if(i===Gi)return n.UNSIGNED_BYTE;if(i===gh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_p)return n.BYTE;if(i===yp)return n.SHORT;if(i===zo)return n.UNSIGNED_SHORT;if(i===mh)return n.INT;if(i===qs)return n.UNSIGNED_INT;if(i===ui)return n.FLOAT;if(i===An)return n.HALF_FLOAT;if(i===Mp)return n.ALPHA;if(i===bp)return n.RGB;if(i===Kn)return n.RGBA;if(i===Sp)return n.LUMINANCE;if(i===Ep)return n.LUMINANCE_ALPHA;if(i===Nr)return n.DEPTH_COMPONENT;if(i===Vr)return n.DEPTH_STENCIL;if(i===_h)return n.RED;if(i===yh)return n.RED_INTEGER;if(i===Tp)return n.RG;if(i===vh)return n.RG_INTEGER;if(i===Mh)return n.RGBA_INTEGER;if(i===Wa||i===Xa||i===qa||i===Ya)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===su||i===ru||i===ou||i===au)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===su)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ru)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ou)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===au)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cu||i===lu||i===uu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cu||i===lu)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===uu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hu||i===fu||i===du||i===pu||i===mu||i===gu||i===xu||i===_u||i===yu||i===vu||i===Mu||i===bu||i===Su||i===Eu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===hu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===du)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_u)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Su)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Eu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$a||i===Tu||i===wu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===$a)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wp||i===Au||i===Ru||i===Cu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===$a)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Au)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ru)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Wu=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ht=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},j1={type:"move"},Fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ht;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Q1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eM=`
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

}`,Xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new an,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Et({vertexShader:Q1,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new Pn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qu=class extends ms{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null,x=new Xu,m=t.getContextAttributes(),d=null,b=null,y=[],_=[],E=new Ke,T=null,v=new $t;v.viewport=new yt;let w=new $t;w.viewport=new yt;let M=[v,w],S=new Wu,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let te=y[ee];return te===void 0&&(te=new Fo,y[ee]=te),te.getTargetRaySpace()},this.getControllerGrip=function(ee){let te=y[ee];return te===void 0&&(te=new Fo,y[ee]=te),te.getGripSpace()},this.getHand=function(ee){let te=y[ee];return te===void 0&&(te=new Fo,y[ee]=te),te.getHandSpace()};function z(ee){let te=_.indexOf(ee.inputSource);if(te===-1)return;let ne=y[te];ne!==void 0&&(ne.update(ee.inputSource,ee.frame,l||o),ne.dispatchEvent({type:ee.type,data:ee.inputSource}))}function L(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",F);for(let ee=0;ee<y.length;ee++){let te=_[ee];te!==null&&(_[ee]=null,y[ee].disconnect(te))}I=null,B=null,x.reset(),e.setRenderTarget(d),p=null,f=null,u=null,s=null,b=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",L),s.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0){let te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Qt(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ne=null,R=null;m.depth&&(R=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?Vr:Nr,ne=m.stencil?Hr:qs);let q={colorFormat:t.RGBA8,depthFormat:R,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(q),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Qt(f.textureWidth,f.textureHeight,{format:Kn,type:Gi,depthTexture:new ic(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F(ee){for(let te=0;te<ee.removed.length;te++){let ne=ee.removed[te],R=_.indexOf(ne);R>=0&&(_[R]=null,y[R].disconnect(ne))}for(let te=0;te<ee.added.length;te++){let ne=ee.added[te],R=_.indexOf(ne);if(R===-1){for(let X=0;X<y.length;X++)if(X>=_.length){_.push(ne),R=X;break}else if(_[X]===null){_[X]=ne,R=X;break}if(R===-1)break}let q=y[R];q&&q.connect(ne)}}let U=new k,Y=new k;function V(ee,te,ne){U.setFromMatrixPosition(te.matrixWorld),Y.setFromMatrixPosition(ne.matrixWorld);let R=U.distanceTo(Y),q=te.projectionMatrix.elements,X=ne.projectionMatrix.elements,Z=q[14]/(q[10]-1),de=q[14]/(q[10]+1),Se=(q[9]+1)/q[5],Ce=(q[9]-1)/q[5],H=(q[8]-1)/q[0],Ve=(X[8]+1)/X[0],ke=Z*H,ze=Z*Ve,De=R/(-H+Ve),Ye=De*-H;if(te.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ye),ee.translateZ(De),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),q[10]===-1)ee.projectionMatrix.copy(te.projectionMatrix),ee.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Ne=Z+De,N=de+De,A=ke-Ye,j=ze+(R-Ye),ge=Se*de/N*Ne,_e=Ce*de/N*Ne;ee.projectionMatrix.makePerspective(A,j,ge,_e,Ne,N),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ie(ee,te){te===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(te.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let te=ee.near,ne=ee.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(ne=x.depthFar)),S.near=w.near=v.near=te,S.far=w.far=v.far=ne,(I!==S.near||B!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,B=S.far),v.layers.mask=ee.layers.mask|2,w.layers.mask=ee.layers.mask|4,S.layers.mask=v.layers.mask|w.layers.mask;let R=ee.parent,q=S.cameras;ie(S,R);for(let X=0;X<q.length;X++)ie(q[X],R);q.length===2?V(S,v,w):S.projectionMatrix.copy(v.projectionMatrix),ce(ee,S,R)};function ce(ee,te,ne){ne===null?ee.matrix.copy(te.matrixWorld):(ee.matrix.copy(ne.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(te.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(te.projectionMatrix),ee.projectionMatrixInverse.copy(te.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Xr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(ee){c=ee,f!==null&&(f.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let xe=null;function ve(ee,te){if(h=te.getViewerPose(l||o),g=te,h!==null){let ne=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let R=!1;ne.length!==S.cameras.length&&(S.cameras.length=0,R=!0);for(let X=0;X<ne.length;X++){let Z=ne[X],de=null;if(p!==null)de=p.getViewport(Z);else{let Ce=u.getViewSubImage(f,Z);de=Ce.viewport,X===0&&(e.setRenderTargetTextures(b,Ce.colorTexture,f.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(b))}let Se=M[X];Se===void 0&&(Se=new $t,Se.layers.enable(X),Se.viewport=new yt,M[X]=Se),Se.matrix.fromArray(Z.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Z.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(de.x,de.y,de.width,de.height),X===0&&(S.matrix.copy(Se.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),R===!0&&S.cameras.push(Se)}let q=s.enabledFeatures;if(q&&q.includes("depth-sensing")){let X=u.getDepthInformation(ne[0]);X&&X.isValid&&X.texture&&x.init(e,X,s.renderState)}}for(let ne=0;ne<y.length;ne++){let R=_[ne],q=y[ne];R!==null&&q!==void 0&&q.update(R,te,l||o)}xe&&xe(ee,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}let ue=new Dp;ue.setAnimationLoop(ve),this.setAnimationLoop=function(ee){xe=ee},this.dispose=function(){}}},Gs=new fi,tM=new et;function nM(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Lp(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,b,y,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,b,y):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Jt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Jt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let b=e.get(d),y=b.envMap,_=b.envMapRotation;y&&(m.envMap.value=y,Gs.copy(_),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),m.envMapRotation.value.setFromMatrix4(tM.makeRotationFromEuler(Gs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,b,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Jt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iM(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){let _=y.program;i.uniformBlockBinding(b,_)}function l(b,y){let _=s[b.id];_===void 0&&(g(b),_=h(b),s[b.id]=_,b.addEventListener("dispose",m));let E=y.program;i.updateUBOMapping(b,E);let T=e.render.frame;r[b.id]!==T&&(f(b),r[b.id]=T)}function h(b){let y=u();b.__bindingPointIndex=y;let _=n.createBuffer(),E=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,E,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let y=s[b.id],_=b.uniforms,E=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,v=_.length;T<v;T++){let w=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,S=w.length;M<S;M++){let I=w[M];if(p(I,T,M,E)===!0){let B=I.__offset,z=Array.isArray(I.value)?I.value:[I.value],L=0;for(let F=0;F<z.length;F++){let U=z[F],Y=x(U);typeof U=="number"||typeof U=="boolean"?(I.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,B+L,I.__data)):U.isMatrix3?(I.__data[0]=U.elements[0],I.__data[1]=U.elements[1],I.__data[2]=U.elements[2],I.__data[3]=0,I.__data[4]=U.elements[3],I.__data[5]=U.elements[4],I.__data[6]=U.elements[5],I.__data[7]=0,I.__data[8]=U.elements[6],I.__data[9]=U.elements[7],I.__data[10]=U.elements[8],I.__data[11]=0):(U.toArray(I.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,y,_,E){let T=b.value,v=y+"_"+_;if(E[v]===void 0)return typeof T=="number"||typeof T=="boolean"?E[v]=T:E[v]=T.clone(),!0;{let w=E[v];if(typeof T=="number"||typeof T=="boolean"){if(w!==T)return E[v]=T,!0}else if(w.equals(T)===!1)return w.copy(T),!0}return!1}function g(b){let y=b.uniforms,_=0,E=16;for(let v=0,w=y.length;v<w;v++){let M=Array.isArray(y[v])?y[v]:[y[v]];for(let S=0,I=M.length;S<I;S++){let B=M[S],z=Array.isArray(B.value)?B.value:[B.value];for(let L=0,F=z.length;L<F;L++){let U=z[L],Y=x(U),V=_%E,ie=V%Y.boundary,ce=V+ie;_+=ie,ce!==0&&E-ce<Y.storage&&(_+=E-ce),B.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=Y.storage}}}let T=_%E;return T>0&&(_+=E-T),b.__size=_,b.__cache={},this}function x(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){let y=b.target;y.removeEventListener("dispose",m);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var sc=class{constructor(e={}){let{canvas:t=cx(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,b=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=ps,this.toneMappingExposure=1;let _=this,E=!1,T=0,v=0,w=null,M=-1,S=null,I=new yt,B=new yt,z=null,L=new Re(0),F=0,U=t.width,Y=t.height,V=1,ie=null,ce=null,xe=new yt(0,0,U,Y),ve=new yt(0,0,U,Y),ue=!1,ee=new Ho,te=!1,ne=!1,R=new et,q=new et,X=new k,Z=new yt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Ce(){return w===null?V:1}let H=i;function Ve(P,$){return t.getContext(P,$)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",D,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",K,!1),H===null){let $="webgl2";if(H=Ve($,P),H===null)throw Ve($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ke,ze,De,Ye,Ne,N,A,j,ge,_e,fe,Ie,Fe,Oe,Ge,Ee,J,be,Me,se,we,oe,Te,W;function Ae(){ke=new yv(H),ke.init(),oe=new J1(H,ke),ze=new dv(H,ke,e,oe),De=new $1(H,ke),ze.reverseDepthBuffer&&f&&De.buffers.depth.setReversed(!0),Ye=new bv(H),Ne=new U1,N=new K1(H,ke,De,Ne,ze,oe,Ye),A=new mv(_),j=new _v(_),ge=new Cx(H),Te=new hv(H,ge),_e=new vv(H,ge,Ye,Te),fe=new Ev(H,_e,ge,Ye),Me=new Sv(H,ze,N),Ee=new pv(Ne),Ie=new N1(_,A,j,ke,ze,Te,Ee),Fe=new nM(_,Ne),Oe=new O1,Ge=new G1(ke),be=new uv(_,A,j,De,fe,p,c),J=new q1(_,fe,ze),W=new iM(H,Ye,ze,De),se=new fv(H,ke,Ye),we=new Mv(H,ke,Ye),Ye.programs=Ie.programs,_.capabilities=ze,_.extensions=ke,_.properties=Ne,_.renderLists=Oe,_.shadowMap=J,_.state=De,_.info=Ye}Ae();let C=new qu(_,H);this.xr=C,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let P=ke.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=ke.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(P){P!==void 0&&(V=P,this.setSize(U,Y,!1))},this.getSize=function(P){return P.set(U,Y)},this.setSize=function(P,$,ae=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=P,Y=$,t.width=Math.floor(P*V),t.height=Math.floor($*V),ae===!0&&(t.style.width=P+"px",t.style.height=$+"px"),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(U*V,Y*V).floor()},this.setDrawingBufferSize=function(P,$,ae){U=P,Y=$,V=ae,t.width=Math.floor(P*ae),t.height=Math.floor($*ae),this.setViewport(0,0,P,$)},this.getCurrentViewport=function(P){return P.copy(I)},this.getViewport=function(P){return P.copy(xe)},this.setViewport=function(P,$,ae,le){P.isVector4?xe.set(P.x,P.y,P.z,P.w):xe.set(P,$,ae,le),De.viewport(I.copy(xe).multiplyScalar(V).round())},this.getScissor=function(P){return P.copy(ve)},this.setScissor=function(P,$,ae,le){P.isVector4?ve.set(P.x,P.y,P.z,P.w):ve.set(P,$,ae,le),De.scissor(B.copy(ve).multiplyScalar(V).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(P){De.setScissorTest(ue=P)},this.setOpaqueSort=function(P){ie=P},this.setTransparentSort=function(P){ce=P},this.getClearColor=function(P){return P.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(P=!0,$=!0,ae=!0){let le=0;if(P){let Q=!1;if(w!==null){let Ue=w.texture.format;Q=Ue===Mh||Ue===vh||Ue===yh}if(Q){let Ue=w.texture.type,qe=Ue===Gi||Ue===qs||Ue===zo||Ue===Hr||Ue===gh||Ue===xh,Je=be.getClearColor(),je=be.getClearAlpha(),at=Je.r,lt=Je.g,Qe=Je.b;qe?(g[0]=at,g[1]=lt,g[2]=Qe,g[3]=je,H.clearBufferuiv(H.COLOR,0,g)):(x[0]=at,x[1]=lt,x[2]=Qe,x[3]=je,H.clearBufferiv(H.COLOR,0,x))}else le|=H.COLOR_BUFFER_BIT}$&&(le|=H.DEPTH_BUFFER_BIT),ae&&(le|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",D,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",K,!1),Oe.dispose(),Ge.dispose(),Ne.dispose(),A.dispose(),j.dispose(),fe.dispose(),Te.dispose(),W.dispose(),Ie.dispose(),C.dispose(),C.removeEventListener("sessionstart",pe),C.removeEventListener("sessionend",me),ye.stop()};function D(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let P=Ye.autoReset,$=J.enabled,ae=J.autoUpdate,le=J.needsUpdate,Q=J.type;Ae(),Ye.autoReset=P,J.enabled=$,J.autoUpdate=ae,J.needsUpdate=le,J.type=Q}function K(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function he(P){let $=P.target;$.removeEventListener("dispose",he),Pe($)}function Pe(P){Be(P),Ne.remove(P)}function Be(P){let $=Ne.get(P).programs;$!==void 0&&($.forEach(function(ae){Ie.releaseProgram(ae)}),P.isShaderMaterial&&Ie.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,ae,le,Q,Ue){$===null&&($=de);let qe=Q.isMesh&&Q.matrixWorld.determinant()<0,Je=Vt(P,$,ae,le,Q);De.setMaterial(le,qe);let je=ae.index,at=1;if(le.wireframe===!0){if(je=_e.getWireframeAttribute(ae),je===void 0)return;at=2}let lt=ae.drawRange,Qe=ae.attributes.position,vt=lt.start*at,Nt=(lt.start+lt.count)*at;Ue!==null&&(vt=Math.max(vt,Ue.start*at),Nt=Math.min(Nt,(Ue.start+Ue.count)*at)),je!==null?(vt=Math.max(vt,0),Nt=Math.min(Nt,je.count)):Qe!=null&&(vt=Math.max(vt,0),Nt=Math.min(Nt,Qe.count));let Ot=Nt-vt;if(Ot<0||Ot===1/0)return;Te.setup(Q,le,Je,ae,je);let Cn,Mt=se;if(je!==null&&(Cn=ge.get(je),Mt=we,Mt.setIndex(Cn)),Q.isMesh)le.wireframe===!0?(De.setLineWidth(le.wireframeLinewidth*Ce()),Mt.setMode(H.LINES)):Mt.setMode(H.TRIANGLES);else if(Q.isLine){let nt=le.linewidth;nt===void 0&&(nt=1),De.setLineWidth(nt*Ce()),Q.isLineSegments?Mt.setMode(H.LINES):Q.isLineLoop?Mt.setMode(H.LINE_LOOP):Mt.setMode(H.LINE_STRIP)}else Q.isPoints?Mt.setMode(H.POINTS):Q.isSprite&&Mt.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Mt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))Mt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let nt=Q._multiDrawStarts,Ii=Q._multiDrawCounts,bt=Q._multiDrawCount,si=je?ge.get(je).bytesPerElement:1,hr=Ne.get(le).currentProgram.getUniforms();for(let Fn=0;Fn<bt;Fn++)hr.setValue(H,"_gl_DrawID",Fn),Mt.render(nt[Fn]/si,Ii[Fn])}else if(Q.isInstancedMesh)Mt.renderInstances(vt,Ot,Q.count);else if(ae.isInstancedBufferGeometry){let nt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ii=Math.min(ae.instanceCount,nt);Mt.renderInstances(vt,Ot,Ii)}else Mt.render(vt,Ot)};function He(P,$,ae){P.transparent===!0&&P.side===Ct&&P.forceSinglePass===!1?(P.side=Jt,P.needsUpdate=!0,Tt(P,$,ae),P.side=Mi,P.needsUpdate=!0,Tt(P,$,ae),P.side=Ct):Tt(P,$,ae)}this.compile=function(P,$,ae=null){ae===null&&(ae=P),d=Ge.get(ae),d.init($),y.push(d),ae.traverseVisible(function(Q){Q.isLight&&Q.layers.test($.layers)&&(d.pushLight(Q),Q.castShadow&&d.pushShadow(Q))}),P!==ae&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test($.layers)&&(d.pushLight(Q),Q.castShadow&&d.pushShadow(Q))}),d.setupLights();let le=new Set;return P.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ue=Q.material;if(Ue)if(Array.isArray(Ue))for(let qe=0;qe<Ue.length;qe++){let Je=Ue[qe];He(Je,ae,Q),le.add(Je)}else He(Ue,ae,Q),le.add(Ue)}),y.pop(),d=null,le},this.compileAsync=function(P,$,ae=null){let le=this.compile(P,$,ae);return new Promise(Q=>{function Ue(){if(le.forEach(function(qe){Ne.get(qe).currentProgram.isReady()&&le.delete(qe)}),le.size===0){Q(P);return}setTimeout(Ue,10)}ke.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let G=null;function re(P){G&&G(P)}function pe(){ye.stop()}function me(){ye.start()}let ye=new Dp;ye.setAnimationLoop(re),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(P){G=P,C.setAnimationLoop(P),P===null?ye.stop():ye.start()},C.addEventListener("sessionstart",pe),C.addEventListener("sessionend",me),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera($),$=C.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,$,w),d=Ge.get(P,y.length),d.init($),y.push(d),q.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ee.setFromProjectionMatrix(q),ne=this.localClippingEnabled,te=Ee.init(this.clippingPlanes,ne),m=Oe.get(P,b.length),m.init(),b.push(m),C.enabled===!0&&C.isPresenting===!0){let Ue=_.xr.getDepthSensingMesh();Ue!==null&&Le(Ue,$,-1/0,_.sortObjects)}Le(P,$,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ie,ce),Se=C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1,Se&&be.addToRenderList(m,P),this.info.render.frame++,te===!0&&Ee.beginShadows();let ae=d.state.shadowsArray;J.render(ae,P,$),te===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let le=m.opaque,Q=m.transmissive;if(d.setupLights(),$.isArrayCamera){let Ue=$.cameras;if(Q.length>0)for(let qe=0,Je=Ue.length;qe<Je;qe++){let je=Ue[qe];Ze(le,Q,P,je)}Se&&be.render(P);for(let qe=0,Je=Ue.length;qe<Je;qe++){let je=Ue[qe];$e(m,P,je,je.viewport)}}else Q.length>0&&Ze(le,Q,P,$),Se&&be.render(P),$e(m,P,$);w!==null&&(N.updateMultisampleRenderTarget(w),N.updateRenderTargetMipmap(w)),P.isScene===!0&&P.onAfterRender(_,P,$),Te.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(d=y[y.length-1],te===!0&&Ee.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Le(P,$,ae,le){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)ae=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)d.pushLight(P),P.castShadow&&d.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ee.intersectsSprite(P)){le&&Z.setFromMatrixPosition(P.matrixWorld).applyMatrix4(q);let qe=fe.update(P),Je=P.material;Je.visible&&m.push(P,qe,Je,ae,Z.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ee.intersectsObject(P))){let qe=fe.update(P),Je=P.material;if(le&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Z.copy(P.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),Z.copy(qe.boundingSphere.center)),Z.applyMatrix4(P.matrixWorld).applyMatrix4(q)),Array.isArray(Je)){let je=qe.groups;for(let at=0,lt=je.length;at<lt;at++){let Qe=je[at],vt=Je[Qe.materialIndex];vt&&vt.visible&&m.push(P,qe,vt,ae,Z.z,Qe)}}else Je.visible&&m.push(P,qe,Je,ae,Z.z,null)}}let Ue=P.children;for(let qe=0,Je=Ue.length;qe<Je;qe++)Le(Ue[qe],$,ae,le)}function $e(P,$,ae,le){let Q=P.opaque,Ue=P.transmissive,qe=P.transparent;d.setupLightsView(ae),te===!0&&Ee.setGlobalState(_.clippingPlanes,ae),le&&De.viewport(I.copy(le)),Q.length>0&&it(Q,$,ae),Ue.length>0&&it(Ue,$,ae),qe.length>0&&it(qe,$,ae),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Ze(P,$,ae,le){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[le.id]===void 0&&(d.state.transmissionRenderTarget[le.id]=new Qt(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?An:Gi,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));let Ue=d.state.transmissionRenderTarget[le.id],qe=le.viewport||I;Ue.setSize(qe.z,qe.w);let Je=_.getRenderTarget();_.setRenderTarget(Ue),_.getClearColor(L),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear(),Se&&be.render(ae);let je=_.toneMapping;_.toneMapping=ps;let at=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),d.setupLightsView(le),te===!0&&Ee.setGlobalState(_.clippingPlanes,le),it(P,ae,le),N.updateMultisampleRenderTarget(Ue),N.updateRenderTargetMipmap(Ue),ke.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Qe=0,vt=$.length;Qe<vt;Qe++){let Nt=$[Qe],Ot=Nt.object,Cn=Nt.geometry,Mt=Nt.material,nt=Nt.group;if(Mt.side===Ct&&Ot.layers.test(le.layers)){let Ii=Mt.side;Mt.side=Jt,Mt.needsUpdate=!0,rt(Ot,ae,le,Cn,Mt,nt),Mt.side=Ii,Mt.needsUpdate=!0,lt=!0}}lt===!0&&(N.updateMultisampleRenderTarget(Ue),N.updateRenderTargetMipmap(Ue))}_.setRenderTarget(Je),_.setClearColor(L,F),at!==void 0&&(le.viewport=at),_.toneMapping=je}function it(P,$,ae){let le=$.isScene===!0?$.overrideMaterial:null;for(let Q=0,Ue=P.length;Q<Ue;Q++){let qe=P[Q],Je=qe.object,je=qe.geometry,at=le===null?qe.material:le,lt=qe.group;Je.layers.test(ae.layers)&&rt(Je,$,ae,je,at,lt)}}function rt(P,$,ae,le,Q,Ue){P.onBeforeRender(_,$,ae,le,Q,Ue),P.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(_,$,ae,le,P,Ue),Q.transparent===!0&&Q.side===Ct&&Q.forceSinglePass===!1?(Q.side=Jt,Q.needsUpdate=!0,_.renderBufferDirect(ae,$,le,Q,P,Ue),Q.side=Mi,Q.needsUpdate=!0,_.renderBufferDirect(ae,$,le,Q,P,Ue),Q.side=Ct):_.renderBufferDirect(ae,$,le,Q,P,Ue),P.onAfterRender(_,$,ae,le,Q,Ue)}function Tt(P,$,ae){$.isScene!==!0&&($=de);let le=Ne.get(P),Q=d.state.lights,Ue=d.state.shadowsArray,qe=Q.state.version,Je=Ie.getParameters(P,Q.state,Ue,$,ae),je=Ie.getProgramCacheKey(Je),at=le.programs;le.environment=P.isMeshStandardMaterial?$.environment:null,le.fog=$.fog,le.envMap=(P.isMeshStandardMaterial?j:A).get(P.envMap||le.environment),le.envMapRotation=le.environment!==null&&P.envMap===null?$.environmentRotation:P.envMapRotation,at===void 0&&(P.addEventListener("dispose",he),at=new Map,le.programs=at);let lt=at.get(je);if(lt!==void 0){if(le.currentProgram===lt&&le.lightsStateVersion===qe)return Dt(P,Je),lt}else Je.uniforms=Ie.getUniforms(P),P.onBeforeCompile(Je,_),lt=Ie.acquireProgram(Je,je),at.set(je,lt),le.uniforms=Je.uniforms;let Qe=le.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Qe.clippingPlanes=Ee.uniform),Dt(P,Je),le.needsLights=dn(P),le.lightsStateVersion=qe,le.needsLights&&(Qe.ambientLightColor.value=Q.state.ambient,Qe.lightProbe.value=Q.state.probe,Qe.directionalLights.value=Q.state.directional,Qe.directionalLightShadows.value=Q.state.directionalShadow,Qe.spotLights.value=Q.state.spot,Qe.spotLightShadows.value=Q.state.spotShadow,Qe.rectAreaLights.value=Q.state.rectArea,Qe.ltc_1.value=Q.state.rectAreaLTC1,Qe.ltc_2.value=Q.state.rectAreaLTC2,Qe.pointLights.value=Q.state.point,Qe.pointLightShadows.value=Q.state.pointShadow,Qe.hemisphereLights.value=Q.state.hemi,Qe.directionalShadowMap.value=Q.state.directionalShadowMap,Qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Qe.spotShadowMap.value=Q.state.spotShadowMap,Qe.spotLightMatrix.value=Q.state.spotLightMatrix,Qe.spotLightMap.value=Q.state.spotLightMap,Qe.pointShadowMap.value=Q.state.pointShadowMap,Qe.pointShadowMatrix.value=Q.state.pointShadowMatrix),le.currentProgram=lt,le.uniformsList=null,lt}function Ht(P){if(P.uniformsList===null){let $=P.currentProgram.getUniforms();P.uniformsList=Fr.seqWithValue($.seq,P.uniforms)}return P.uniformsList}function Dt(P,$){let ae=Ne.get(P);ae.outputColorSpace=$.outputColorSpace,ae.batching=$.batching,ae.batchingColor=$.batchingColor,ae.instancing=$.instancing,ae.instancingColor=$.instancingColor,ae.instancingMorph=$.instancingMorph,ae.skinning=$.skinning,ae.morphTargets=$.morphTargets,ae.morphNormals=$.morphNormals,ae.morphColors=$.morphColors,ae.morphTargetsCount=$.morphTargetsCount,ae.numClippingPlanes=$.numClippingPlanes,ae.numIntersection=$.numClipIntersection,ae.vertexAlphas=$.vertexAlphas,ae.vertexTangents=$.vertexTangents,ae.toneMapping=$.toneMapping}function Vt(P,$,ae,le,Q){$.isScene!==!0&&($=de),N.resetTextureUnits();let Ue=$.fog,qe=le.isMeshStandardMaterial?$.environment:null,Je=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:yn,je=(le.isMeshStandardMaterial?j:A).get(le.envMap||qe),at=le.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,lt=!!ae.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Qe=!!ae.morphAttributes.position,vt=!!ae.morphAttributes.normal,Nt=!!ae.morphAttributes.color,Ot=ps;le.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ot=_.toneMapping);let Cn=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Mt=Cn!==void 0?Cn.length:0,nt=Ne.get(le),Ii=d.state.lights;if(te===!0&&(ne===!0||P!==S)){let Yn=P===S&&le.id===M;Ee.setState(le,P,Yn)}let bt=!1;le.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Ii.state.version||nt.outputColorSpace!==Je||Q.isBatchedMesh&&nt.batching===!1||!Q.isBatchedMesh&&nt.batching===!0||Q.isBatchedMesh&&nt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&nt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&nt.instancing===!1||!Q.isInstancedMesh&&nt.instancing===!0||Q.isSkinnedMesh&&nt.skinning===!1||!Q.isSkinnedMesh&&nt.skinning===!0||Q.isInstancedMesh&&nt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&nt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&nt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&nt.instancingMorph===!1&&Q.morphTexture!==null||nt.envMap!==je||le.fog===!0&&nt.fog!==Ue||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ee.numPlanes||nt.numIntersection!==Ee.numIntersection)||nt.vertexAlphas!==at||nt.vertexTangents!==lt||nt.morphTargets!==Qe||nt.morphNormals!==vt||nt.morphColors!==Nt||nt.toneMapping!==Ot||nt.morphTargetsCount!==Mt)&&(bt=!0):(bt=!0,nt.__version=le.version);let si=nt.currentProgram;bt===!0&&(si=Tt(le,$,Q));let hr=!1,Fn=!1,_o=!1,Bt=si.getUniforms(),_i=nt.uniforms;if(De.useProgram(si.program)&&(hr=!0,Fn=!0,_o=!0),le.id!==M&&(M=le.id,Fn=!0),hr||S!==P){De.buffers.depth.getReversed()?(R.copy(P.projectionMatrix),ux(R),hx(R),Bt.setValue(H,"projectionMatrix",R)):Bt.setValue(H,"projectionMatrix",P.projectionMatrix),Bt.setValue(H,"viewMatrix",P.matrixWorldInverse);let is=Bt.map.cameraPosition;is!==void 0&&is.setValue(H,X.setFromMatrixPosition(P.matrixWorld)),ze.logarithmicDepthBuffer&&Bt.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Bt.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,Fn=!0,_o=!0)}if(Q.isSkinnedMesh){Bt.setOptional(H,Q,"bindMatrix"),Bt.setOptional(H,Q,"bindMatrixInverse");let Yn=Q.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),Bt.setValue(H,"boneTexture",Yn.boneTexture,N))}Q.isBatchedMesh&&(Bt.setOptional(H,Q,"batchingTexture"),Bt.setValue(H,"batchingTexture",Q._matricesTexture,N),Bt.setOptional(H,Q,"batchingIdTexture"),Bt.setValue(H,"batchingIdTexture",Q._indirectTexture,N),Bt.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Bt.setValue(H,"batchingColorTexture",Q._colorsTexture,N));let yo=ae.morphAttributes;if((yo.position!==void 0||yo.normal!==void 0||yo.color!==void 0)&&Me.update(Q,ae,si),(Fn||nt.receiveShadow!==Q.receiveShadow)&&(nt.receiveShadow=Q.receiveShadow,Bt.setValue(H,"receiveShadow",Q.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(_i.envMap.value=je,_i.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&$.environment!==null&&(_i.envMapIntensity.value=$.environmentIntensity),Fn&&(Bt.setValue(H,"toneMappingExposure",_.toneMappingExposure),nt.needsLights&&Wt(_i,_o),Ue&&le.fog===!0&&Fe.refreshFogUniforms(_i,Ue),Fe.refreshMaterialUniforms(_i,le,V,Y,d.state.transmissionRenderTarget[P.id]),Fr.upload(H,Ht(nt),_i,N)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Fr.upload(H,Ht(nt),_i,N),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Bt.setValue(H,"center",Q.center),Bt.setValue(H,"modelViewMatrix",Q.modelViewMatrix),Bt.setValue(H,"normalMatrix",Q.normalMatrix),Bt.setValue(H,"modelMatrix",Q.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){let Yn=le.uniformsGroups;for(let is=0,ss=Yn.length;is<ss;is++){let Zf=Yn[is];W.update(Zf,si),W.bind(Zf,si)}}return si}function Wt(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function dn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(P,$,ae){Ne.get(P.texture).__webglTexture=$,Ne.get(P.depthTexture).__webglTexture=ae;let le=Ne.get(P);le.__hasExternalTextures=!0,le.__autoAllocateDepthBuffer=ae===void 0,le.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,$){let ae=Ne.get(P);ae.__webglFramebuffer=$,ae.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(P,$=0,ae=0){w=P,T=$,v=ae;let le=!0,Q=null,Ue=!1,qe=!1;if(P){let je=Ne.get(P);if(je.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(H.FRAMEBUFFER,null),le=!1;else if(je.__webglFramebuffer===void 0)N.setupRenderTarget(P);else if(je.__hasExternalTextures)N.rebindTextures(P,Ne.get(P.texture).__webglTexture,Ne.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Qe=P.depthTexture;if(je.__boundDepthTexture!==Qe){if(Qe!==null&&Ne.has(Qe)&&(P.width!==Qe.image.width||P.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(P)}}let at=P.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(qe=!0);let lt=Ne.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(lt[$])?Q=lt[$][ae]:Q=lt[$],Ue=!0):P.samples>0&&N.useMultisampledRTT(P)===!1?Q=Ne.get(P).__webglMultisampledFramebuffer:Array.isArray(lt)?Q=lt[ae]:Q=lt,I.copy(P.viewport),B.copy(P.scissor),z=P.scissorTest}else I.copy(xe).multiplyScalar(V).floor(),B.copy(ve).multiplyScalar(V).floor(),z=ue;if(De.bindFramebuffer(H.FRAMEBUFFER,Q)&&le&&De.drawBuffers(P,Q),De.viewport(I),De.scissor(B),De.setScissorTest(z),Ue){let je=Ne.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+$,je.__webglTexture,ae)}else if(qe){let je=Ne.get(P.texture),at=$||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,je.__webglTexture,ae||0,at)}M=-1},this.readRenderTargetPixels=function(P,$,ae,le,Q,Ue,qe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=Ne.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&qe!==void 0&&(Je=Je[qe]),Je){De.bindFramebuffer(H.FRAMEBUFFER,Je);try{let je=P.texture,at=je.format,lt=je.type;if(!ze.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-le&&ae>=0&&ae<=P.height-Q&&H.readPixels($,ae,le,Q,oe.convert(at),oe.convert(lt),Ue)}finally{let je=w!==null?Ne.get(w).__webglFramebuffer:null;De.bindFramebuffer(H.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(P,$,ae,le,Q,Ue,qe){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=Ne.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&qe!==void 0&&(Je=Je[qe]),Je){let je=P.texture,at=je.format,lt=je.type;if(!ze.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=P.width-le&&ae>=0&&ae<=P.height-Q){De.bindFramebuffer(H.FRAMEBUFFER,Je);let Qe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Qe),H.bufferData(H.PIXEL_PACK_BUFFER,Ue.byteLength,H.STREAM_READ),H.readPixels($,ae,le,Q,oe.convert(at),oe.convert(lt),0);let vt=w!==null?Ne.get(w).__webglFramebuffer:null;De.bindFramebuffer(H.FRAMEBUFFER,vt);let Nt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await lx(H,Nt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Qe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ue),H.deleteBuffer(Qe),H.deleteSync(Nt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,$=null,ae=0){P.isTexture!==!0&&(Po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1]);let le=Math.pow(2,-ae),Q=Math.floor(P.image.width*le),Ue=Math.floor(P.image.height*le),qe=$!==null?$.x:0,Je=$!==null?$.y:0;N.setTexture2D(P,0),H.copyTexSubImage2D(H.TEXTURE_2D,ae,0,0,qe,Je,Q,Ue),De.unbindTexture()},this.copyTextureToTexture=function(P,$,ae=null,le=null,Q=0){P.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture function signature has changed."),le=arguments[0]||null,P=arguments[1],$=arguments[2],Q=arguments[3]||0,ae=null);let Ue,qe,Je,je,at,lt,Qe,vt,Nt,Ot=P.isCompressedTexture?P.mipmaps[Q]:P.image;ae!==null?(Ue=ae.max.x-ae.min.x,qe=ae.max.y-ae.min.y,Je=ae.isBox3?ae.max.z-ae.min.z:1,je=ae.min.x,at=ae.min.y,lt=ae.isBox3?ae.min.z:0):(Ue=Ot.width,qe=Ot.height,Je=Ot.depth||1,je=0,at=0,lt=0),le!==null?(Qe=le.x,vt=le.y,Nt=le.z):(Qe=0,vt=0,Nt=0);let Cn=oe.convert($.format),Mt=oe.convert($.type),nt;$.isData3DTexture?(N.setTexture3D($,0),nt=H.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(N.setTexture2DArray($,0),nt=H.TEXTURE_2D_ARRAY):(N.setTexture2D($,0),nt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,$.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,$.unpackAlignment);let Ii=H.getParameter(H.UNPACK_ROW_LENGTH),bt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),si=H.getParameter(H.UNPACK_SKIP_PIXELS),hr=H.getParameter(H.UNPACK_SKIP_ROWS),Fn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ot.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ot.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,je),H.pixelStorei(H.UNPACK_SKIP_ROWS,at),H.pixelStorei(H.UNPACK_SKIP_IMAGES,lt);let _o=P.isDataArrayTexture||P.isData3DTexture,Bt=$.isDataArrayTexture||$.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let _i=Ne.get(P),yo=Ne.get($),Yn=Ne.get(_i.__renderTarget),is=Ne.get(yo.__renderTarget);De.bindFramebuffer(H.READ_FRAMEBUFFER,Yn.__webglFramebuffer),De.bindFramebuffer(H.DRAW_FRAMEBUFFER,is.__webglFramebuffer);for(let ss=0;ss<Je;ss++)_o&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ne.get(P).__webglTexture,Q,lt+ss),P.isDepthTexture?(Bt&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ne.get($).__webglTexture,Q,Nt+ss),H.blitFramebuffer(je,at,Ue,qe,Qe,vt,Ue,qe,H.DEPTH_BUFFER_BIT,H.NEAREST)):Bt?H.copyTexSubImage3D(nt,Q,Qe,vt,Nt+ss,je,at,Ue,qe):H.copyTexSubImage2D(nt,Q,Qe,vt,Nt+ss,je,at,Ue,qe);De.bindFramebuffer(H.READ_FRAMEBUFFER,null),De.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Bt?P.isDataTexture||P.isData3DTexture?H.texSubImage3D(nt,Q,Qe,vt,Nt,Ue,qe,Je,Cn,Mt,Ot.data):$.isCompressedArrayTexture?H.compressedTexSubImage3D(nt,Q,Qe,vt,Nt,Ue,qe,Je,Cn,Ot.data):H.texSubImage3D(nt,Q,Qe,vt,Nt,Ue,qe,Je,Cn,Mt,Ot):P.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Q,Qe,vt,Ue,qe,Cn,Mt,Ot.data):P.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Q,Qe,vt,Ot.width,Ot.height,Cn,Ot.data):H.texSubImage2D(H.TEXTURE_2D,Q,Qe,vt,Ue,qe,Cn,Mt,Ot);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ii),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,bt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,si),H.pixelStorei(H.UNPACK_SKIP_ROWS,hr),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Fn),Q===0&&$.generateMipmaps&&H.generateMipmap(nt),De.unbindTexture()},this.copyTextureToTexture3D=function(P,$,ae=null,le=null,Q=0){return P.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,le=arguments[1]||null,P=arguments[2],$=arguments[3],Q=arguments[4]||0),Po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,$,ae,le,Q)},this.initRenderTarget=function(P){Ne.get(P).__webglFramebuffer===void 0&&N.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?N.setTextureCube(P,0):P.isData3DTexture?N.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?N.setTexture2DArray(P,0):N.setTexture2D(P,0),De.unbindTexture()},this.resetState=function(){T=0,v=0,w=null,De.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}},Zr=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Vo=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Kr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Iu,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new k,Ys=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=li(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Go=class extends Tn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wr,Eo=new k,Ar=new k,Rr=new k,Cr=new Ke,To=new Ke,Bp=new et,Na=new k,wo=new k,Ua=new k,Kd=new Ke,Vl=new Ke,Jd=new Ke,rc=class extends Ft{constructor(e=new Go){if(super(),this.isSprite=!0,this.type="Sprite",wr===void 0){wr=new gt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Kr(t,5);wr.setIndex([0,1,2,0,2,3]),wr.setAttribute("position",new Ys(i,3,0,!1)),wr.setAttribute("uv",new Ys(i,2,3,!1))}this.geometry=wr,this.material=e,this.center=new Ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ar.setFromMatrixScale(this.matrixWorld),Bp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ar.multiplyScalar(-Rr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Fa(Na.set(-.5,-.5,0),Rr,o,Ar,s,r),Fa(wo.set(.5,-.5,0),Rr,o,Ar,s,r),Fa(Ua.set(.5,.5,0),Rr,o,Ar,s,r),Kd.set(0,0),Vl.set(1,0),Jd.set(1,1);let a=e.ray.intersectTriangle(Na,wo,Ua,!1,Eo);if(a===null&&(Fa(wo.set(-.5,.5,0),Rr,o,Ar,s,r),Vl.set(0,1),a=e.ray.intersectTriangle(Na,Ua,wo,!1,Eo),a===null))return;let c=e.ray.origin.distanceTo(Eo);c<e.near||c>e.far||t.push({distance:c,point:Eo.clone(),uv:fs.getInterpolation(Eo,Na,wo,Ua,Kd,Vl,Jd,new Ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Fa(n,e,t,i,s,r){Cr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(To.x=r*Cr.x-s*Cr.y,To.y=s*Cr.x+r*Cr.y):To.copy(Cr),n.copy(e),n.x+=To.x,n.y+=To.y,n.applyMatrix4(Bp)}var jd=new k,Qd=new yt,ep=new yt,sM=new k,tp=new et,Oa=new k,Gl=new zn,np=new et,Wl=new qr,oc=class extends ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qf,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Oa),this.boundingBox.expandByPoint(Oa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Oa),this.boundingSphere.expandByPoint(Oa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gl.copy(this.boundingSphere),Gl.applyMatrix4(s),e.ray.intersectsSphere(Gl)!==!1&&(np.copy(s).invert(),Wl.copy(e.ray).applyMatrix4(np),!(this.boundingBox!==null&&Wl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ng?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Qd.fromBufferAttribute(s.attributes.skinIndex,e),ep.fromBufferAttribute(s.attributes.skinWeight,e),jd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=ep.getComponent(r);if(o!==0){let a=Qd.getComponent(r);tp.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(sM.copy(jd).applyMatrix4(tp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Wo=class extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},ac=class extends an{constructor(e=null,t=1,i=1,s,r,o,a,c,l=on,h=on,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ip=new et,rM=new et,cc=class n{constructor(e=[],t=[]){this.uuid=hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new et;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:rM;ip.multiplyMatrices(a,t[r]),ip.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new ac(t,e,e,Kn,ui);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Wo),this.bones.push(o),this.boneInverses.push(new et().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},$s=class extends mt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ir=new et,sp=new et,Ba=[],rp=new Jn,oM=new et,Ao=new ot,Ro=new zn,_n=class extends ot{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $s(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,oM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ir),rp.copy(e.boundingBox).applyMatrix4(Ir),this.boundingBox.union(rp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ir),Ro.copy(e.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union(Ro)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ao.geometry=this.geometry,Ao.material=this.material,Ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(i),e.ray.intersectsSphere(Ro)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ir),sp.multiplyMatrices(i,Ir),Ao.matrixWorld=sp,Ao.raycast(e,Ba);for(let o=0,a=Ba.length;o<a;o++){let c=Ba[o];c.instanceId=r,c.object=this,t.push(c)}Ba.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $s(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ac(new Float32Array(s*this.count),s,this.count,_h,ui));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var xs=class extends Tn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},lc=new k,uc=new k,op=new et,Co=new qr,za=new zn,Xl=new k,ap=new k,Jr=class extends Ft{constructor(e=new gt,t=new xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)lc.fromBufferAttribute(t,s-1),uc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=lc.distanceTo(uc);e.setAttribute("lineDistance",new ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),za.radius+=r,e.ray.intersectsSphere(za)===!1)return;op.copy(s).invert(),Co.copy(e.ray).applyMatrix4(op);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let d=h.getX(x),b=h.getX(x+1),y=ka(this,e,Co,c,d,b);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),d=ka(this,e,Co,c,x,m);d&&t.push(d)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let d=ka(this,e,Co,c,x,x+1);d&&t.push(d)}if(this.isLineLoop){let x=ka(this,e,Co,c,g-1,p);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ka(n,e,t,i,s,r){let o=n.geometry.attributes.position;if(lc.fromBufferAttribute(o,s),uc.fromBufferAttribute(o,r),t.distanceSqToSegment(lc,uc,Xl,ap)>i)return;Xl.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Xl);if(!(c<e.near||c>e.far))return{distance:c,point:ap.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var cp=new k,lp=new k,Zs=class extends Jr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)cp.fromBufferAttribute(t,s),lp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+cp.distanceTo(lp);e.setAttribute("lineDistance",new ct(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},hc=class extends Jr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ks=class extends Tn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},up=new et,Yu=new qr,Ha=new zn,Va=new k,_s=class extends Ft{constructor(e=new gt,t=new Ks){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(s),Ha.radius+=r,e.ray.intersectsSphere(Ha)===!1)return;up.copy(s).invert(),Yu.copy(e.ray).applyMatrix4(up);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,x=p;g<x;g++){let m=l.getX(g);Va.fromBufferAttribute(u,m),hp(Va,m,c,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,x=p;g<x;g++)Va.fromBufferAttribute(u,g),hp(Va,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hp(n,e,t,i,s,r,o){let a=Yu.distanceSqToPoint(n);if(a<t){let c=new k;Yu.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var di=class extends an{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wn=class n extends gt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,x=[],m=i/2,d=0;b(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(p,2));function b(){let _=new k,E=new k,T=0,v=(t-e)/i;for(let w=0;w<=r;w++){let M=[],S=w/r,I=S*(t-e)+e;for(let B=0;B<=s;B++){let z=B/s,L=z*c+a,F=Math.sin(L),U=Math.cos(L);E.x=I*F,E.y=-S*i+m,E.z=I*U,u.push(E.x,E.y,E.z),_.set(F,v,U).normalize(),f.push(_.x,_.y,_.z),p.push(z,1-S),M.push(g++)}x.push(M)}for(let w=0;w<s;w++)for(let M=0;M<r;M++){let S=x[M][w],I=x[M+1][w],B=x[M+1][w+1],z=x[M][w+1];(e>0||M!==0)&&(h.push(S,I,z),T+=3),(t>0||M!==r-1)&&(h.push(I,B,z),T+=3)}l.addGroup(d,T,0),d+=T}function y(_){let E=g,T=new Ke,v=new k,w=0,M=_===!0?e:t,S=_===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),g++;let I=g;for(let B=0;B<=s;B++){let L=B/s*c+a,F=Math.cos(L),U=Math.sin(L);v.x=M*U,v.y=m*S,v.z=M*F,u.push(v.x,v.y,v.z),f.push(0,S,0),T.x=F*.5+.5,T.y=U*.5*S+.5,p.push(T.x,T.y),g++}for(let B=0;B<s;B++){let z=E+B,L=I+B;_===!0?h.push(L,L+1,z):h.push(L+1,L,z),w+=3}l.addGroup(d,w,_===!0?1:2),d+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Js=class n extends wn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$u=class n extends gt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let y=new k,_=new k,E=new k;for(let T=0;T<t.length;T+=3)p(t[T+0],y),p(t[T+1],_),p(t[T+2],E),c(y,_,E,b)}function c(b,y,_,E){let T=E+1,v=[];for(let w=0;w<=T;w++){v[w]=[];let M=b.clone().lerp(_,w/T),S=y.clone().lerp(_,w/T),I=T-w;for(let B=0;B<=I;B++)B===0&&w===T?v[w][B]=M:v[w][B]=M.clone().lerp(S,B/I)}for(let w=0;w<T;w++)for(let M=0;M<2*(T-w)-1;M++){let S=Math.floor(M/2);M%2===0?(f(v[w][S+1]),f(v[w+1][S]),f(v[w][S])):(f(v[w][S+1]),f(v[w+1][S+1]),f(v[w+1][S]))}}function l(b){let y=new k;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(b),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let b=new k;for(let y=0;y<r.length;y+=3){b.x=r[y+0],b.y=r[y+1],b.z=r[y+2];let _=m(b)/2/Math.PI+.5,E=d(b)/Math.PI+.5;o.push(_,1-E)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){let y=o[b+0],_=o[b+2],E=o[b+4],T=Math.max(y,_,E),v=Math.min(y,_,E);T>.9&&v<.1&&(y<.2&&(o[b+0]+=1),_<.2&&(o[b+2]+=1),E<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function p(b,y){let _=b*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){let b=new k,y=new k,_=new k,E=new k,T=new Ke,v=new Ke,w=new Ke;for(let M=0,S=0;M<r.length;M+=9,S+=6){b.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),T.set(o[S+0],o[S+1]),v.set(o[S+2],o[S+3]),w.set(o[S+4],o[S+5]),E.copy(b).add(y).add(_).divideScalar(3);let I=m(E);x(T,S+0,b,I),x(v,S+2,y,I),x(w,S+4,_,I)}}function x(b,y,_,E){E<0&&b.x===1&&(o[y]=b.x-1),_.x===0&&_.z===0&&(o[y]=E/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var js=class n extends $u{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var ys=class n extends gt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new k,f=new k,p=[],g=[],x=[],m=[];for(let d=0;d<=i;d++){let b=[],y=d/i,_=0;d===0&&o===0?_=.5/t:d===i&&c===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){let T=E/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(T+_,1-y),b.push(l++)}h.push(b)}for(let d=0;d<i;d++)for(let b=0;b<t;b++){let y=h[d][b+1],_=h[d][b],E=h[d+1][b],T=h[d+1][b+1];(d!==0||o>0)&&p.push(y,_,T),(d!==i-1||c<Math.PI)&&p.push(_,E,T)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var fc=class extends Et{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},st=class extends Tn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kn=class extends st{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var jn=class extends Tn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ga(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function aM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function cM(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function fp(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function zp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var vs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zu=class extends vs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ed,endingEnd:ed}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case td:r=e,a=2*t-i;break;case nd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case td:o=e,c=2*i-t;break;case nd:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,b=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let E=0;E!==a;++E)r[E]=d*o[h+E]+b*o[l+E]+y*o[c+E]+_*o[u+E];return r}},Ku=class extends vs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Ju=class extends vs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ga(t,this.TimeBufferType),this.values=Ga(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ga(e.times,Array),values:Ga(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ju(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ku(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Gr:t=this.InterpolantFactoryMethodDiscrete;break;case Wr:t=this.InterpolantFactoryMethodLinear;break;case ml:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return Wr;case this.InterpolantFactoryMethodSmooth:return ml}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&aM(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ml,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,f=u-i,p=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Wr;var Ms=class extends Qn{constructor(e,t,i){super(e,t,i)}};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Gr;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var dc=class extends Qn{};dc.prototype.ValueTypeName="color";var Wi=class extends Qn{};Wi.prototype.ValueTypeName="number";var ju=class extends vs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)en.slerpFlat(r,0,o,l-a,o,l,c);return r}},Xi=class extends Qn{InterpolantFactoryMethodLinear(e){return new ju(this.times,this.values,this.getValueSize(),e)}};Xi.prototype.ValueTypeName="quaternion";Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends Qn{constructor(e,t,i){super(e,t,i)}};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Gr;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Qn{};qi.prototype.ValueTypeName="vector";var pc=class{constructor(e="",t=-1,i=[],s=Ug){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=hi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(uM(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Qn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=cM(c);c=fp(c,1,h),l=fp(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Wi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,f,p,g,x){if(p.length!==0){let m=[],d=[];zp(p,m,d,g),m.length!==0&&x.push(new u(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)p[f[g].morphTargets[x]]=-1;for(let x in p){let m=[],d=[];for(let b=0;b!==f[g].morphTargets.length;++b){let y=f[g];m.push(y.time),d.push(y.morphTarget===x?1:0)}s.push(new Wi(".morphTargetInfluence["+x+"]",m,d))}c=p.length*o}else{let p=".bones["+t[u].name+"]";i(qi,p+".position",f,"pos",s),i(Xi,p+".quaternion",f,"rot",s),i(qi,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function lM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wi;case"vector":case"vector2":case"vector3":case"vector4":return qi;case"color":return dc;case"quaternion":return Xi;case"bool":case"boolean":return Ms;case"string":return bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function uM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=lM(n.type);if(n.times===void 0){let t=[],i=[];zp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var ds={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Qu=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},hM=new Qu,Yi=class{constructor(e){this.manager=e!==void 0?e:hM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Yi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fi={},eh=class extends Error{constructor(e,t){super(e),this.response=t}},Xo=class extends Yi{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ds.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Fi[e]!==void 0){Fi[e].push({onLoad:t,onProgress:i,onError:s});return}Fi[e]=[],Fi[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Fi[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,x=0,m=new ReadableStream({start(d){b();function b(){u.read().then(({done:y,value:_})=>{if(y)d.close();else{x+=_.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let T=0,v=h.length;T<v;T++){let w=h[T];w.onProgress&&w.onProgress(E)}d.enqueue(_),b()}},y=>{d.error(y)})}}});return new Response(m)}else throw new eh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{ds.add(e,l);let h=Fi[e];delete Fi[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=Fi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Fi[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var th=class extends Yi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ds.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=ko("img");function c(){h(),ds.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var mc=class extends Yi{constructor(e){super(e)}load(e,t,i,s){let r=new an,o=new th(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},jr=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Qr=class extends jr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ql=new et,dp=new k,pp=new k,qo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ho,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;dp.setFromMatrixPosition(e.matrixWorld),t.position.copy(dp),pp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pp),t.updateMatrixWorld(),ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},nh=class extends qo{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Xr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},eo=class extends jr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new nh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},mp=new et,Io=new k,Yl=new k,ih=class extends qo{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Io.setFromMatrixPosition(e.matrixWorld),i.position.copy(Io),Yl.copy(i.position),Yl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Yl),i.updateMatrixWorld(),s.makeTranslation(-Io.x,-Io.y,-Io.z),mp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mp)}},gc=class extends jr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ih}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},sh=class extends qo{constructor(){super(new gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bi=class extends jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new sh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ss=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var xc=class extends Yi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ds.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ds.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ds.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ds.add(e,c),r.manager.itemStart(e)}};var _c=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=gp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function gp(){return performance.now()}var Th="\\[\\]\\.:\\/",fM=new RegExp("["+Th+"]","g"),wh="[^"+Th+"]",dM="[^"+Th.replace("\\.","")+"]",pM=/((?:WC+[\/:])*)/.source.replace("WC",wh),mM=/(WCOD+)?/.source.replace("WCOD",dM),gM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wh),xM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wh),_M=new RegExp("^"+pM+mM+gM+xM+"$"),yM=["material","materials","bones","map"],rh=class{constructor(e,t,i){let s=i||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ut=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fM,"")}static parseTrackName(e){let t=_M.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);yM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=rh;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vT=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Zo=class n extends ot{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new $t;let i=this,s=t.color!==void 0?new Re(t.color):new Re(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,c=t.shader||n.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,h=new ci,u=new k,f=new k,p=new k,g=new et,x=new k(0,0,-1),m=new yt,d=new k,b=new k,y=new yt,_=new et,E=this.camera,T=new Qt(r,o,{samples:l,type:An}),v=new Et({name:c.name!==void 0?c.name:"unspecified",uniforms:Ei.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});v.uniforms.tDiffuse.value=T.texture,v.uniforms.color.value=s,v.uniforms.textureMatrix.value=_,this.material=v,this.onBeforeRender=function(w,M,S){if(f.setFromMatrixPosition(i.matrixWorld),p.setFromMatrixPosition(S.matrixWorld),g.extractRotation(i.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),d.subVectors(f,p),d.dot(u)>0)return;d.reflect(u).negate(),d.add(f),g.extractRotation(S.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(p),b.subVectors(f,x),b.reflect(u).negate(),b.add(f),E.position.copy(d),E.up.set(0,1,0),E.up.applyMatrix4(g),E.up.reflect(u),E.lookAt(b),E.far=S.far,E.updateMatrixWorld(),E.projectionMatrix.copy(S.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(E.projectionMatrix),_.multiply(E.matrixWorldInverse),_.multiply(i.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(E.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let I=E.projectionMatrix;y.x=(Math.sign(m.x)+I.elements[8])/I.elements[0],y.y=(Math.sign(m.y)+I.elements[9])/I.elements[5],y.z=-1,y.w=(1+I.elements[10])/I.elements[14],m.multiplyScalar(2/m.dot(y)),I.elements[2]=m.x,I.elements[6]=m.y,I.elements[10]=m.z+1-a,I.elements[14]=m.w,i.visible=!1;let B=w.getRenderTarget(),z=w.xr.enabled,L=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(T),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(M,E),w.xr.enabled=z,w.shadowMap.autoUpdate=L,w.setRenderTarget(B);let F=S.viewport;F!==void 0&&w.state.viewport(F),i.visible=!0},this.getRenderTarget=function(){return T},this.dispose=function(){T.dispose(),i.material.dispose()}}};Zo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Ec=[25,18,15,12,10,8,6,4],Qs={maxSpeed:80,accel:26,brake:30,steerRate:1.7,steerHighSpeed:.75,grip:1,wetGrip:.78,driftBonus:1.6,airControl:.12,airStability:1,landing:1,boostPower:1.22,boostDuration:2.2,boostCharges:3,offroadDrag:1,wallLoss:.25,steerNoise:0,slipstream:1},Ti={sunset:{id:"sunset",name:"Fin d'apr\xE8s-midi",grip:1,wet:0,rain:0,wind:0,sheen:.9,skyTop:8825052,skyHorizon:15785172,fogColor:14074548,fogDensity:52e-5,sunColor:16756316,sunIntensity:4.6,sunDir:[-.5,.21,-.62],hemiSky:12899050,hemiGround:9399366,hemiIntensity:.8,seaColor:2786996,night:!1,bloom:.34},sicily:{id:"sicily",name:"Apr\xE8s-midi sicilien",grip:1,wet:0,rain:0,wind:.1,sheen:.2,skyTop:4885468,skyHorizon:13623792,fogColor:13425124,fogDensity:5e-4,sunColor:16773854,sunIntensity:3.3,sunDir:[-.45,.62,-.4],hemiSky:12375282,hemiGround:8156256,hemiIntensity:.85,seaColor:1994664,night:!1,bloom:.25},rain:{id:"rain",name:"Nuit pluvieuse",grip:.8,wet:1,rain:1,wind:.6,skyTop:329231,skyHorizon:1711933,fogColor:1317427,fogDensity:.0028,sunColor:7375103,sunIntensity:.7,sunDir:[.4,.7,.3],hemiSky:3820170,hemiGround:1052696,hemiIntensity:.75,seaColor:662067,night:!0,bloom:1},fog:{id:"fog",name:"Brume matinale",grip:.92,wet:.35,rain:0,wind:.2,skyTop:10467535,skyHorizon:15262418,fogColor:14277846,fogDensity:.0052,sunColor:16773328,sunIntensity:1.5,sunDir:[.5,.35,.5],hemiSky:13621734,hemiGround:7301722,hemiIntensity:1.1,seaColor:6262687,night:!1,bloom:.35}};function Ko(n){let e=String(n),t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t^=t>>>15,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}function Ln(n){let e=(typeof n=="number"?n>>>0:Ko(n))||1,t=e,i=()=>{e=e+1831565813>>>0;let s=e;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};return{next:i,range:(s,r)=>s+(r-s)*i(),int:(s,r)=>s+Math.floor(i()*(r-s+1)),pick:s=>s[Math.floor(i()*s.length)],chance:s=>i()<s,sign:()=>i()<.5?-1:1,shuffle:s=>{let r=s.slice();for(let o=r.length-1;o>0;o--){let a=Math.floor(i()*(o+1));[r[o],r[a]]=[r[a],r[o]]}return r},fork:s=>Ln(Ko(t+":"+s))}}var Tc=Math.PI*2,vM=2,kp=2800,Hp=4200,MM=34,Vp=8,Gp=60,bM=.12,SM=.1,Wp=28,EM=150,Ah=52,Ph=.0025,Xp=1/150,TM=10,qp=5,Yp=250,$p=38,Zp=75,wc=150,Ch=120,Qp=10,wM=80,AM=40,RM=20,CM=30,IM=95,Rh=18,Kp=22,PM=60,Ih=(n,e,t)=>n<e?e:n>t?t:n;function LM(n){let e=n.int(10,14),t=n.range(440,520),i=[];for(let s=0;s<e;s++){let r=n.range(-.3,.3)*(Tc/e),o=s/e*Tc+r,a=Ih(t*n.range(.62,1.25),380,620);i.push([a*Math.cos(o),a*Math.sin(o)])}return i}function DM(n,e,t,i,s,r,o,a,c){let l=(x,m,d,b)=>{let y=(c-d)/(b-d);return[x[0]+(m[0]-x[0])*y,x[1]+(m[1]-x[1])*y]},h=l(n,e,s,r),u=l(e,t,r,o),f=l(t,i,o,a),p=l(h,u,s,o),g=l(u,f,r,a);return l(p,g,r,o)}function NM(n,e){let t=n.length,i=[];for(let s=0;s<t;s++){let r=n[(s-1+t)%t],o=n[s],a=n[(s+1)%t],c=n[(s+2)%t],l=0,h=l+Math.sqrt(Math.hypot(o[0]-r[0],o[1]-r[1])),u=h+Math.sqrt(Math.hypot(a[0]-o[0],a[1]-o[1])),f=u+Math.sqrt(Math.hypot(c[0]-a[0],c[1]-a[1]));for(let p=0;p<e;p++){let g=h+(u-h)*(p/e);i.push(DM(r,o,a,c,l,h,u,f,g))}}return i}function UM(n){let e=n.length,t=new Float64Array(e+1);for(let l=0;l<e;l++){let h=n[l],u=n[(l+1)%e];t[l+1]=t[l]+Math.hypot(u[0]-h[0],u[1]-h[1])}let i=t[e],s=Math.max(1,Math.round(i/vM)),r=i/s,o=new Float64Array(s),a=new Float64Array(s),c=0;for(let l=0;l<s;l++){let h=l*r;for(;c<e-1&&t[c+1]<=h;)c++;let u=n[c],f=n[(c+1)%e],p=t[c+1]-t[c],g=p>0?(h-t[c])/p:0;o[l]=u[0]+(f[0]-u[0])*g,a[l]=u[1]+(f[1]-u[1])*g}return{xs:o,zs:a,count:s,step:r}}function Jp(n,e){let t=n.length,i=new Float64Array(t),s=2*e+1,r=0;for(let o=-e;o<=e;o++)r+=n[(o+t)%t];for(let o=0;o<t;o++)i[o]=r/s,r+=n[(o+1+e)%t]-n[((o-e)%t+t)%t];return i}function FM(n,e,t){let i=n.length,s=new Float64Array(i),r=new Float64Array(i);for(let a=0;a<i;a++){let c=(a-1+i)%i,l=(a+1)%i,h=n[l]-n[c],u=e[l]-e[c],f=Math.hypot(h,u)||1;s[a]=h/f,r[a]=u/f}let o=new Float64Array(i);for(let a=0;a<i;a++){let c=(a-1+i)%i,l=(a+1)%i,h=(s[l]-s[c])/(2*t),u=(r[l]-r[c])/(2*t);o[a]=s[a]*u-r[a]*h}return o}function OM(n,e){let t=n.length;for(let i=0;i<50;i++){let s=!1;for(let r=2*t-1;r>=0;r--){let o=r%t,a=(o+1)%t,c=Math.sqrt(n[a]*n[a]+2*AM*e);n[o]>c+1e-9&&(n[o]=c,s=!0)}for(let r=0;r<2*t;r++){let o=r%t,a=(o+1)%t,c=Math.sqrt(n[o]*n[o]+2*RM*e);n[a]>c+1e-9&&(n[a]=c,s=!0)}if(!s)break}}function jp(n){let e=n.length,t=-1;for(let r=0;r<e;r++)if(n[r]!==n[(r-1+e)%e]){t=r;break}if(t<0)return n[0]!==0?[{start:0,len:e,key:n[0]}]:[];let i=[],s=null;for(let r=0;r<e;r++){let o=(t+r)%e,a=n[o];s&&a===s.key?s.len++:(s&&s.key!==0&&i.push(s),s={start:o,len:1,key:a})}return s&&s.key!==0&&i.push(s),i}function em(n,e){let t=n.length,i=0;for(let s=0;s<t;s++){let r=n[s].vmax,o=n[(s+1)%t].vmax;i+=e/Math.max(1,.5*(r+o))}return i}function Lh(n,e){let t=n.length,i=0,s=0,r=new Int8Array(t),o=new Int8Array(t);for(let l=0;l<t;l++){let h=n[l].curv,u=Math.abs(h);u>i&&(i=u);let f=Math.abs(n[l].slope);f>s&&(s=f),r[l]=h>Xp?1:h<-Xp?-1:0,o[l]=u<Ph?1:0}let a=0;for(let l of jp(r))l.len*e>=TM&&a++;let c={start:0,len:0};for(let l of jp(o))l.key===1&&l.len>c.len&&(c=l);return{minRadius:i>0?1/i:1/0,maxSlope:s,corners:a,longestStraight:c.len*e,longestStraightStart:c.start}}function BM(n,e){let t=n.length,i=Ah,s=(l,h)=>(l+4096)*8192+(h+4096),r=new Map,o=new Array(t);for(let l=0;l<t;l++){let h=Math.floor(n[l].x/i),u=Math.floor(n[l].z/i);o[l]=[h,u];let f=s(h,u),p=r.get(f);p||(p=[],r.set(f,p)),p.push(l)}let a=0,c=Ah*Ah;for(let l=0;l<t;l++){let[h,u]=o[l];for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){let g=r.get(s(h+f,u+p));if(g)for(let x of g){if(x<=l)continue;let m=Math.abs(l-x);if(Math.min(m,t-m)*e<=EM)continue;let b=n[l].x-n[x].x,y=n[l].z-n[x].z;b*b+y*y<c&&a++}}}return a}function zM(n){let e=LM(n),t=NM(e,160),{xs:i,zs:s,count:r,step:o}=UM(t),a=[[8,12],[4,7],[2,4],[1,2]],c=[1,2,4,7].map((v,w)=>({k:v,a:n.range(a[w][0],a[w][1]),p:n.range(0,Tc)})),l=new Float64Array(r),h=new Float64Array(r),u=new Float64Array(r);for(let v=0;v<r;v++){let w=(v-1+r)%r,M=(v+1)%r,S=i[M]-i[w],I=s[M]-s[w];u[v]=Math.hypot(S,I)||1e-9,l[v]=S/u[v],h[v]=I/u[v]}let f=new Float64Array(r),p=new Float64Array(r),g=1;for(let v=0;v<40;v++){for(let M=0;M<r;M++){let S=0;for(let I of c)S+=I.a*g*Math.sin(Tc*I.k*M/r+I.p);f[M]=MM+S}let w=0;for(let M=0;M<r;M++){let S=(M-1+r)%r,I=(M+1)%r;p[M]=(f[I]-f[S])/u[M],Math.abs(p[M])>w&&(w=Math.abs(p[M]))}if(w<=SM)break;g*=.9}let x=new Float64Array(r),m=new Float64Array(r),d=new Float64Array(r);for(let v=0;v<r;v++){let w=(v-1+r)%r,M=(v+1)%r,S=i[M]-i[w],I=f[M]-f[w],B=s[M]-s[w],z=Math.hypot(S,I,B)||1e-9;x[v]=S/z,m[v]=I/z,d[v]=B/z}let b=FM(i,s,o),y=Jp(b,2),_=new Float64Array(r);for(let v=0;v<r;v++){let w=Ih((Math.abs(y[v])-.016666666666666666)/.023333333333333334,0,1);_[v]=Rh+(Kp-Rh)*w}let E=Jp(_,10);for(let v=0;v<r;v++)E[v]=Ih(E[v],Rh,Kp);let T=new Float64Array(r);for(let v=0;v<r;v++)T[v]=Math.min(IM,Math.sqrt(CM/Math.max(Math.abs(y[v]),1e-9)));return OM(T,o),{xs:i,ys:f,zs:s,count:r,step:o,fx:l,fz:h,tx:x,ty:m,tz:d,slope:p,curv:y,width:E,vmax:T}}function kM(n){let{xs:e,ys:t,zs:i,count:s,step:r,fx:o,fz:a,tx:c,ty:l,tz:h,slope:u,curv:f,width:p,vmax:g}=n,x=[];for(let y=0;y<s;y++)x.push({curv:f[y],slope:u[y],vmax:g[y],x:e[y],z:i[y]});let m=Lh(x,r),d=m.longestStraight>0?(m.longestStraightStart+Math.round(wM/r))%s:0,b=new Array(s);for(let y=0;y<s;y++){let _=(d+y)%s;b[y]={s:y*r,x:e[_],y:t[_],z:i[_],tx:c[_],ty:l[_],tz:h[_],rx:-a[_],rz:o[_],width:p[_],curv:f[_],vmax:g[_],slope:u[_]}}return b}function HM(n,e,t){let i=n.length,s=new Int32Array(i+1);for(let m=0;m<i;m++)s[m+1]=s[m]+(Math.abs(n[m].curv)>=Ph?1:0);let r=(m,d)=>s[d+1]-s[m]===0,o=Math.ceil(wc/e),a=Math.floor((i*e-wc)/e),c=Math.ceil(Qp/e),l=[],h=[],u=(m,d)=>l.every(([b,y])=>d<b||m>y),f=(m,d,b,y)=>{for(let _=0;_<400;_++){let E=Math.round(t.range(m,d)/e),T=Math.ceil(b/e),v=E+T;if(a-v<o)return null;let w=t.int(o,a-v),M=w+E;if(y&&!r(w,M+T))continue;let S=w-c,I=M+T+c;if(!(S<0||I>i-1||!u(S,I)))return l.push([S,I]),{a:w,b:M}}return null},p=t.int(2,3);for(let m=0;m<p;m++){let d=f(12,16,Ch,!0);d&&h.push({type:"ramp",s0:d.a*e,s1:d.b*e,height:t.range(1.2,2.2)})}let g=t.int(2,3);for(let m=0;m<g;m++){let d=f(10,10,0,!1);d&&h.push({type:"boost",s0:d.a*e,s1:d.b*e})}let x=t.int(1,2);for(let m=0;m<x;m++){let d=f(60,140,0,!1);d&&h.push({type:"tunnel",s0:d.a*e,s1:d.b*e})}return h.sort((m,d)=>m.s0-d.s0),h}function VM(n,e,t){let i=zM(n),s=kM(i),{count:r,step:o}=i,a=r*o,c=HM(s,o,n),l=Lh(s,o),h=1/0,u=-1/0,f=1/0,p=-1/0;for(let g of s)g.x<h&&(h=g.x),g.x>u&&(u=g.x),g.z<f&&(f=g.z),g.z>p&&(p=g.z);return{seed:e,attempts:t,length:a,step:o,count:r,pts:s,features:c,bounds:{minX:h,maxX:u,minZ:f,maxZ:p},stats:{minRadius:l.minRadius,maxSlope:l.maxSlope,lapTimeEstimate:em(s,o),corners:l.corners}}}function GM(n){let e=[],{pts:t,count:i,step:s,length:r}=n;if(!Array.isArray(t)||t.length!==i||!(i>0)||!(s>0))return{ok:!1,reasons:["structure invalide"]};r>=kp&&r<=Hp||e.push(`longueur ${r.toFixed(0)} m hors [${kp}, ${Hp}]`),Math.abs(i*s-r)>1e-6&&e.push("count * step != length");let o=1/0,a=-1/0;for(let d of t)d.y<o&&(o=d.y),d.y>a&&(a=d.y);(o<Vp||a>Gp)&&e.push(`altitude ${o.toFixed(1)}..${a.toFixed(1)} hors [${Vp}, ${Gp}]`);let c=Lh(t,s);c.minRadius>=Wp||e.push(`rayon min ${c.minRadius.toFixed(1)} m < ${Wp}`),c.maxSlope>bM&&e.push(`pente max ${(c.maxSlope*100).toFixed(1)} % > 12 %`),c.corners<qp&&e.push(`${c.corners} virages < ${qp}`),c.longestStraight<Yp&&e.push(`ligne droite max ${c.longestStraight.toFixed(0)} m < ${Yp}`);let l=BM(t,s);l>0&&e.push(`${l} paires d'\xE9chantillons trop proches (croisement ou rapprochement)`);let h=em(t,s);h>=$p&&h<=Zp||e.push(`temps au tour ${h.toFixed(1)} s hors [${$p}, ${Zp}]`);let u=n.features||[],f=u.filter(d=>d.type==="ramp").length,p=u.filter(d=>d.type==="boost").length,g=u.filter(d=>d.type==="tunnel").length;f<2&&e.push(`${f} tremplin(s) < 2`),p<2&&e.push(`${p} boost(s) < 2`),g<1&&e.push("aucun tunnel");let x=d=>Math.round((d%r+r)%r/s)%i;for(let d of u)if((d.s0<wc||d.s1>r-wc)&&e.push(`feature ${d.type} trop proche du d\xE9part`),d.type==="ramp"){let b=d.s1-d.s0;(b<11.5||b>16.5)&&e.push(`tremplin de ${b.toFixed(1)} m hors 12..16`),d.height>=1.2&&d.height<=2.2||e.push("hauteur de tremplin hors 1.2..2.2");let y=x(d.s0),_=x(d.s1+Ch),E=!0;for(let T=y;T!==(_+1)%i;T=(T+1)%i)if(Math.abs(t[T].curv)>=Ph){E=!1;break}E||e.push("tremplin non situ\xE9 sur une ligne droite avec r\xE9ception")}let m=u.slice().sort((d,b)=>d.s0-b.s0);for(let d=0;d+1<m.length;d++){let b=m[d],y=m[d+1],_=b.s1+(b.type==="ramp"?Ch:0);y.s0<_+Qp-1e-6&&e.push(`features ${b.type} et ${y.type} se chevauchent`)}return{ok:e.length===0,reasons:e}}function tm(n,e={}){let t=e.maxAttempts??PM,i=Ln(n),s=null,r=1/0;for(let o=0;o<t;o++){let a=i.fork("try"+o),c=VM(a,n,o+1),l=GM(c);if(l.ok)return c;l.reasons.length<r&&(r=l.reasons.length,s=c)}return s.attempts=t,s}function Dh(n,e){let t=n.length;if(n.open)return e<0?0:Math.min(e,(n.count-1.001)*n.step);let i=e%t;return i<0&&(i+=t),i>=t&&(i-=t),i}var WM=(n,e)=>{let t=Math.hypot(n,e)||1;return[n/t,e/t]};function Zi(n,e,t={}){let i=n.count,s=n.step,r=Dh(n,e),o=r/s,a=Math.floor(o),c=a%i,l=(c+1)%i,h=o-a,u=n.pts[c],f=n.pts[l],p=(_,E)=>_+(E-_)*h,g=p(u.tx,f.tx),x=p(u.ty,f.ty),m=p(u.tz,f.tz),d=Math.hypot(g,x,m)||1,[b,y]=WM(p(u.rx,f.rx),p(u.rz,f.rz));if(t.s=r,t.x=p(u.x,f.x),t.y=p(u.y,f.y),t.z=p(u.z,f.z),n.open&&e!==r){let _=e-r;t.x+=g/d*_,t.z+=m/d*_}return t.tx=g/d,t.ty=x/d,t.tz=m/d,t.rx=b,t.rz=y,t.width=p(u.width,f.width),t.curv=p(u.curv,f.curv),t.vmax=p(u.vmax,f.vmax),t.slope=p(u.slope,f.slope),t.i=c,t}var $i={};function It(n,e,t,i={}){return Zi(n,e,$i),i.x=$i.x+t*$i.rx,i.y=$i.y,i.z=$i.z+t*$i.rz,i.heading=Math.atan2($i.tx,$i.tz),i.slope=$i.slope,i}function nm(n,e){let t=Dh(n,e);for(let i of n.features)if(i.type==="ramp"&&t>=i.s0&&t<i.s1)return i.height*(t-i.s0)/(i.s1-i.s0);return 0}function Es(n,e,t){let i=Dh(n,e);for(let s of n.features)if((t===void 0||s.type===t)&&i>=s.s0&&i<=s.s1)return s;return null}var YM=1/30,im=.5,sm=.4,$M=.6,Jo=[.2,.36,.52,.68,.84],rm=Jo.length+1,ZM=.2,KM=.1,JM=.34,jM=4,QM=4,eb=.2,tb=4.9,nb=5.5,ib=5,sb=6,rb=1.8,ob=.03,ab=1.6,cb=.5,lb=2,ub=.785,hb=4.7,fb=2.5,no=.196,db=.098,pb=.5,mb=.27,gb=16,xb=11,_b=.72,yb=5,vb=.5,om=.35,Mb=.42,bb=60,Sb=.3,Eb=5,Tb=1.6,wb=3,Ab=14,Rb=.004,Cb=1.2,Ib=2,Pb=.5,Lb=22,am=.25,Db=6,Nb=1.8,cm=1,Ub=["s","d","yaw","vdir","speed","yRel","vy","lean","steer","pitch","compress","drift","boostT","wheelSpin","stun","rpm","wheelie","_g","_vyG","_shiftT","_t","_pitchF","_dive","_turnF","_springA","_springP","_wallT","_apex"],qt=(n,e,t)=>n<e?e:n>t?t:n,wi=(n,e=0)=>Number.isFinite(n)?n:e,Fb=(n,e)=>{let t=n%e;return t<0?t+e:t},Ob=(n,e,t)=>n<e?Math.min(e,n+t):Math.max(e,n-t);function lm({s:n=0,d:e=0}={}){return{s:n,d:e,yaw:0,vdir:0,speed:0,yRel:0,vy:0,airborne:!1,lean:0,steer:0,pitch:0,compress:0,drift:0,boostT:0,boostCharges:Qs.boostCharges,onRoad:!0,wheelSpin:0,stun:0,gear:1,rpm:0,wheelie:0,events:[],_init:!1,_g:0,_vyG:0,_prevBoost:!1,_padKey:null,_shiftT:0,_wallHit:!1,_t:0,_turnF:0,_pitchF:0,_dive:0,_springA:0,_springP:0,_wallT:0,_apex:0}}function um(n,e,t,i,s,r,o){let a=n.events,c=e||{},l=s||{},h=!!c.boost&&!n._prevBoost;if(n._prevBoost=!!c.boost,r=Number.isFinite(r)&&r>0?Math.min(r,YM):0,n._init||(n._init=!0,n.boostCharges=i.boostCharges),r===0)return n;let u=t.length,f=i.maxSpeed,p=qt(wi(c.throttle),0,1),g=qt(wi(c.brake),0,1),x=qt(wi(c.steer),-1,1),m=n.stun>0;m&&(n.stun=Math.max(0,n.stun-r),p=0,g=0,x=0);let d=Ge=>t.open?Ge:Fb(Ge,u),b=d(n.s),y=Zi(t,b),_=!n.airborne;if(h&&!m&&n.boostCharges>0&&n.boostT<=0&&(n.boostCharges-=1,n.boostT=i.boostDuration,a.push("boost")),_){let Ge=Es(t,b,"boost");if(Ge){let Ee=Math.floor(n.s/u)+":"+Ge.s0;n._padKey!==Ee&&(n._padKey=Ee,n.boostT=Math.max(n.boostT,Cb),a.push("pad"))}}g>.5&&n.boostT>0&&(n.boostT=0);let E=n.boostT>0;E&&(p=1);let T=_&&!m&&Math.abs(x)>.3&&n.speed>Ib&&(!!c.drift||g>.3),v=n.speed,w=v/f;n._shiftT>0?n._shiftT-=r:n.gear<rm&&w>Jo[n.gear-1]&&!(g>0&&v>3)?(n.gear+=1,n._shiftT=ZM):n.gear>1&&v<Jo[n.gear-2]*f-2&&(n.gear-=1,n._shiftT=KM);let M=n.gear>1?Jo[n.gear-2]:0,S=n.gear<rm?Jo[n.gear-1]:1;n.rpm=qt(.35+.65*((w-M)/(S-M)),.1,1.05);let I=_&&Math.abs(n.d)>y.width*.5,B=$M*f,z=I?B:f*(E?i.boostPower:1),L=jM/(f*f),F=0;if(_){if(I&&v>B&&(F-=2*i.offroadDrag*(v-B)),p>0&&n._shiftT<=0&&v<z){let Ge=JM*f,Ee=.8+.2*Math.sin(Math.PI*qt(n.rpm,0,1)),J=i.accel*p*Ee*Math.min(1,Ge/Math.max(v,1));E&&(J*=lb),F+=Math.min(J,i.accel*1.15*(E?1.3:1))}g>0&&(F-=i.brake*g*(T?.35:1)),F-=v*(.2-.03*(n.gear-1))*(1-p),F-=eb,F-=tb*y.slope,F-=L*v*v}else F-=L*QM*v*v;n.speed=Math.max(0,v+F*r),_&&n.speed>z&&!I&&(n.speed=Math.max(z,n.speed-10*r));let U=qt(n.speed/f,0,1),Y=1+(i.wetGrip-1)*Bb(l),V=qt(i.grip*wi(l.grip,1)*Y,.05,1.5),ie=n.speed<.6?0:x,xe=Math.abs(ie)>Math.abs(n.steer)||ie*n.steer<0?nb:ib*qt(Math.abs(F)/6,1,2.5);n.steer=Ob(n.steer,ie,xe*r);let ve=n.yaw-n.vdir,ue=n.speed*Math.sin(ve),ee=Math.min(ab,1+ob*Math.abs(ue));T&&(ee=i.driftBonus),E&&_&&(ee*=cb);let te=1-(1-i.steerHighSpeed)*U,ne=Math.min(1,n.speed/6),R=_?1:i.airControl,q=n.steer*i.steerRate*te*ee*ne*R*(.6+.4*Math.min(1,V)),X=Math.min(n.speed/Eb,bb*Math.min(1.2,V)*(T?1.5:1)/Math.max(n.speed,1)),Z=qt(q,-X,X);_&&Math.abs(x)<=.15&&(n.yaw*=Math.exp(-Tb*r)),o&&i.steerNoise>0&&!m&&_&&(n.yaw+=i.steerNoise*p*(o.next()*2-1)*r);let de=Math.max(.3,1-n.d*y.curv),Se=n.speed*Math.cos(n.vdir)/de*r,Ce=n.speed*Math.sin(n.vdir)*r,H=y.curv*Se,Ve=n.vdir,ke=H*(_?1-Sb:1);if(n.yaw+=Z*r-ke,n.vdir-=ke,_){let Ge=(T?rb:sb)*V,Ee=1-Math.exp(-Ge*r);n.vdir+=(n.yaw-n.vdir)*Ee,n.speed*=1-(1-Math.cos(ve))*Ee}else{let Ge=3*qt(i.airStability,0,2);n.yaw+=(n.vdir-n.yaw)*(1-Math.exp(-Ge*r)),i.airStability<1&&(n.yaw+=(n.yaw>=n.vdir?1:-1)*(1-i.airStability)*.6*r)}n.vdir=qt(wi(n.vdir),-im,im),n.yaw=qt(wi(n.yaw),n.vdir-sm,n.vdir+sm),n._t+=r,Ce+=wi(l.wind)*(1.2*Math.sin(n._t*.37)+.4*Math.sin(n._t*1.13+1))*r*(_?1:.5),n.s+=Se,n.d+=Ce;let ze=_?qt((Math.abs(n.yaw-n.vdir)-.04)/.22,0,1)*ne:0;n.drift+=(ze-n.drift)*Math.min(1,8*r);let De=Zi(t,d(n.s));n.onRoad=Math.abs(n.d)<=De.width*.5;let Ye=De.width*.5+6-.4;if(Math.abs(n.d)>=Ye-.02){let Ge=n.d>=0?1:-1,Ee=n.vdir*Ge>0,J=Ee?Math.abs(Math.sin(n.vdir)):0;if(n.d=Ge*Ye,Ee&&(n.vdir=-Ge*.04,n.yaw=n.yaw*.4-Ge*.04),n._wallHit)n.speed*=Math.max(0,1-.8*r);else{let be=n.boostT>0,Me=o?o.next():1;be&&n.speed>Db||J>Pb&&n.speed>Lb&&Me<am||n.airborne&&Me<am?(n.speed*=.3,n.stun=Nb,a.push("crash")):n.speed*=1-qt(i.wallLoss*1.3*(.5+J),0,.9),a.push("wall")}n.boostT=0,n._wallT=om,n._wallHit=!0}else n._wallHit=!1;n.stun>0&&_&&(n.speed*=Math.exp(-2.2*r)),b=d(n.s);let Ne=wi(nm(t,b)),N=(Ne-n._g)/r;if(n.airborne||(Ne<n.yRel-.05?(n.airborne=!0,n._apex=n.yRel-Ne,n.vy=n._vyG,n.vy>wb&&a.push("jump")):(n.yRel=Ne,n.vy=qt(N,-80,80),n._vyG=n.vy)),n.airborne&&(n.vy-=26*r,n.yRel+=n.vy*r,n._apex=Math.max(n._apex,n.yRel-Ne),n.vy<=0&&n.yRel<=Ne)){let Ge=-n.vy,Ee=Math.abs(n.yaw-n.vdir),J=Ge>Ab/Math.max(.3,i.landing)||Ee>.35;n.airborne=!1,n.yRel=Ne,n.vy=0,n._vyG=0,n._springA=qt(n._springA+.35*n._apex+.03*Ge,0,1),n._springP=Math.PI/2;let be=Rb*Ge+(J?.08:0);n.speed*=1-qt(be/Math.max(.2,i.landing),0,.45),a.push(J?"hardLand":"land")}n._g=Ne,_=!n.airborne,n.speed=qt(wi(n.speed),0,1.5*f),n._wallT=Math.max(0,n._wallT-r);let A=Math.max(0,1-n.speed/4,n._wallT/om),j=_?(H+(n.vdir-Ve))/r:0;n._turnF+=(j-n._turnF)*Math.min(1,6*r);let ge=n.speed*n._turnF,_e=Math.sign(ge)*Math.max(0,Math.abs(ge)-yb),fe=n.steer*Mb*Math.min(1,n.speed/10),Ie=qt((1-A)*(Math.atan(_e/xb)*_b+vb*(n.yaw-n.vdir)+fe),-cm,cm);n.stun>0&&(Ie=(n.lean>=0?1:-1)*1.35),n.lean+=(Ie-n.lean)*Math.min(1,9*r),n._dive=g>.1&&_?Math.min(no,n._dive+no*r):Math.max(0,n._dive-.25*r);let Fe=qt(F*db,-no,no)-n._dive;n._pitchF+=(Fe-n._pitchF)*Math.min(1,r/pb);let Oe=qt(Fe-n._pitchF,-no,no);n.wheelie=n.boostT>0&&_?Math.min(Math.PI/2,n.wheelie+hb*r):Math.max(0,n.wheelie-fb*r),Oe+=Math.sin(n.wheelie)*ub,_||(Oe=Math.atan2(n.vy,Math.max(8,n.speed))),n.pitch=Oe,n._springA*=Math.exp(-r/mb),n._springP+=gb*r,n.compress=Math.sin(n._springP)*n._springA,n.wheelSpin+=n.speed/.32*r,n.boostT=Math.max(0,n.boostT-r);for(let Ge of Ub)Number.isFinite(n[Ge])||(n[Ge]=0);return n.speed<0&&(n.speed=0),n}function Bb(n){return qt(wi(n.wet),0,1)}var zb=8,kb=25,Hb=150,Vb=3,Gb=35,Wb=2,Xb=14,qb=30,Yb=12,$b=2,Zb={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},ln=(n,e,t)=>n<e?e:n>t?t:n,Ac=(n,e,t)=>n+(e-n)*t,Kb=(n,e)=>n-e*Math.round(n/e);function Jb(n,e){let t=n.length,i=n.features,s=null,r=1/0;for(let o=0;o<i.length;o++){let a=i[o];if(a.type!=="ramp")continue;let c=((a.s0-e)%t+t)%t;c<r&&(r=c,s=a)}return s?{f:s,dist:r}:null}function jb(n,e){for(let t=0;t<=Hb;t+=kb)if(Math.abs(Zi(n,e+t).curv)>.004)return!1;return!0}function Rc(n,e){let t=n||Zb,i={persona:t,rng:e,skill:ln(t.skill??.5,0,1),aggression:ln(t.aggression??.5,0,1),jumpSkill:ln(t.jumpSkill??.5,0,1),lineSkill:ln(t.lineSkill??.5,0,1),playerGap:0,dGoal:0,wander:0,wanderGoal:0,wanderT:0,mistakeT:0,mistakeSide:1,nextMistake:0,boostLock:0,input:{throttle:0,brake:0,steer:0,boost:!1,drift:!1}};return i.nextMistake=e.range(8,20)+(1-i.skill)*15,i}function Cc(n,e,t,i,s,r){let o=n.input,a=t.length,c=n.rng,l=n.aggression,h=n.skill,u=n.jumpSkill,f=e.speed,p=e.s,g=Zi(t,p),x=Math.max(.8,g.width*.5-1.2);n.wanderT-=r,n.wanderT<=0&&(n.wanderT=c.range(.9,1.8),n.wanderGoal=c.range(-1,1)*(1-n.lineSkill)*.5*x),n.wander+=(n.wanderGoal-n.wander)*Math.min(1,r*1.5),n.nextMistake-=r,n.mistakeT-=r,n.mistakeT<=0&&n.nextMistake<=0&&(n.mistakeT=c.range(.5,1.2),n.mistakeSide=c.sign(),n.nextMistake=c.range(8,20)+(1-h)*15);let m=n.mistakeT>0;n.boostLock-=r;let d=Ac(1.4,.6,l),b=Math.max(20,f*d),y=Math.max(b,ln(f*1.6+20,40,110)),_=1/0,E=0,T=0,v=0;for(let ne=0;ne<=y;ne+=zb){let R=ne===0?g:Zi(t,p+ne);if(ne<=b&&R.vmax<_&&(_=R.vmax),ne>=8){let q=Math.abs(R.curv);q>E&&(E=q,T=Math.sign(R.curv),v=ne)}}let w=ln(E/.02,0,1),M=0;if(T!==0&&w>0){let ne=ln((v-10)/30,0,1),R=Ac(1,-.8,ne);M=T*x*n.lineSkill*w*R}M+=n.wander,m&&(M+=n.mistakeSide*1.2);let S=Jb(t,p),I=S?S.dist:1/0,B=Es(t,p,"ramp")!==null,z=I<qb;(B||z)&&u>.5&&(M*=1-ln((u-.4)/.6,0,1));let L=!B&&I>=Vb&&I<=Gb&&u<.5;for(let ne=0;ne<s.length;ne++){let R=s[ne];if(R===e)continue;let q=Kb(R.s-p,a);if(q<=0||q>=Yb)continue;let X=R.d-e.d;if(!(Math.abs(X)>=$b)){if(l>.55){let Z=X!==0?Math.sign(X):e.d<0?1:-1;M+=Z*(.6+.8*l)}else{let Z=X!==0?-Math.sign(X):e.d<0?1:-1;Math.abs(e.d+Z*2)>x&&(Z=-Z),M+=Z*2*(1-l)}break}}let F=n.obstacles;if(F){let ne=35+f*1.7,R=null,q=1/0;for(let X=0;X<F.length;X++){let Z=F[X],de=Z.s-p;de>-Z.type.len&&de<ne&&de<q&&Math.abs(Z.d-M)<Z.type.w/2+1.5&&Z.speed<f-3&&(R=Z,q=de)}if(R){let X=R.type.w/2+2,Z=[R.d-X,R.d+X].filter(Ce=>Math.abs(Ce)<=x),de=Z.filter(Ce=>!F.some(H=>H!==R&&Math.abs(H.s-R.s)<30&&Math.abs(H.d-Ce)<H.type.w/2+1.2)),Se=de.length?de:Z;Se.length&&(M=Se.reduce((Ce,H)=>Math.abs(H-e.d)<Math.abs(Ce-e.d)?H:Ce))}}M=ln(M,-x,x),n.dGoal+=(M-n.dGoal)*Math.min(1,r*(F?4.5:2.5));let U=ln(n.dGoal,-x,x),Y;if(e.airborne)Y=ln(-e.yaw*2,-.3,.3);else{let ne=U-e.d,R=ln(ne*.12,-.25,.25),q=Zi(t,p+ln(f*.25,4,20)).curv,X=i.steerRate*Ac(1,i.steerHighSpeed,ln(f/i.maxSpeed,0,1));Y=(q*f+(R-e.yaw)*3)/X}Y=ln(Y,-1,1),Number.isFinite(Y)||(Y=0);let V=ln(-n.playerGap/150,-1,1)*.06,ie=Ac(.86,1,h)+l*.04;m&&(ie*=.85);let ce=_*ie*(1+V),xe=i.maxSpeed,ve=!1;if(!e.airborne&&e.boostCharges>0&&e.boostT<=0&&n.boostLock<=0){if(u>.6&&I>=Wb&&I<=Xb)ve=!0;else if(f>20&&jb(t,p)){let ne=n.playerGap<-20,R=.25+.5*l+(ne?.3:0);ve=c.chance(R)}n.boostLock=ve?1:.4}o.boost=ve;let ue=E<.003;if(e.boostT>0){let ne=xe*i.boostPower;ce=ue?ne*.98:Math.min(ce,ne)}else ce=Math.min(ce,xe);let ee=0,te=0;if(e.airborne)ee=1;else{let ne=ce-f;ne>-1.5?ee=L?0:ln(.5+ne*.25,0,1):te=ln((-ne-1.5)*.15,0,1)}return o.throttle=ee,o.brake=te,o.steer=Y,o.drift=!e.airborne&&l>.75&&E>.025&&f>40&&v<20,o}var Qb=7,eS=3,tS=.3,nS=3,iS=25,sS=1.5,rS=1.2,oS=1.8,hm=.9,aS={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},Ic=(n,e,t)=>n<e?e:n>t?t:n,Nh=(n,e)=>n-e*Math.round(n/e);function Uh(){return{throttle:0,brake:0,steer:0,boost:!1,drift:!1}}function fm({track:n,laps:e,env:t,rng:i,riders:s,final:r=!0,carry:o=null}){let a=n.length,c=n.raceEnd??a,l=e*c,u=s.filter(E=>!E.isPlayer).concat(s.filter(E=>E.isPlayer)).map((E,T)=>{let v=Math.floor(T/2),w=T%2,M=-Qb*(v+1),S=w===0?-2.5:2.5,I=o?.states.get(E.id),B=I||lm({s:M,d:S});return{id:E.id,name:E.name,color:E.color,accent:E.accent,isPlayer:!!E.isPlayer,stats:E.stats,persona:E.persona||null,state:B,ai:E.isPlayer?null:Rc(E.persona||aS,i.fork("ai:"+E.id)),rng:i.fork("rider:"+E.id),others:null,input:Uh(),coast:Uh(),frameEvents:[],startS:I?I.s:M,lap:1,lapTimes:[],bestLap:null,lapStartT:0,finished:!1,finishTime:null,position:T+1}});for(let E of u)E.others=u.filter(T=>T!==E).map(T=>T.state);let f=u.find(E=>E.isPlayer)||null,p=u.slice(),g=u.length,x=new Uint8Array(g*g);function m(E,T,v,w,M){if(v===T)return;let S=Math.floor(T/c),I=Math.min(Math.floor(v/c),e);for(let B=Math.max(S+1,1);B<=I;B++){let z=Ic((B*c-T)/(v-T),0,1),L=w+z*M,F=L-E.lapStartT;E.lapTimes.push(F),(E.bestLap===null||F<E.bestLap)&&(E.bestLap=F),E.lapStartT=L}if(r&&v>=l){let B=Ic((l-T)/(v-T),0,1);E.finished=!0,E.finishTime=w+B*M}}function d(E){let T=E.state,v=E.coast;return v.throttle=tS,v.brake=0,v.steer=Ic(-T.yaw*2-T.d*.05,-.5,.5),v.boost=!1,v.drift=!1,v}function b(E,T){let v=E.state;for(let w=0;w<g;w++){let M=u[w];if(M===E)continue;let S=Nh(M.state.s-v.s,a);if(S>nS&&S<iS&&Math.abs(M.state.d-v.d)<sS){v.speed=Math.min(v.speed+rS*E.stats.slipstream*T,E.stats.maxSpeed*1.05);return}}}function y(){for(let E=0;E<g;E++)for(let T=E+1;T<g;T++){let v=u[E],w=u[T],M=Nh(w.state.s-v.state.s,a),S=w.state.d-v.state.d,I=E*g+T;if(Math.abs(M)<oS&&Math.abs(S)<hm){let B=S!==0?Math.sign(S):i.sign(),z=(hm-Math.abs(S))/2+.05;if(v.state.d-=B*z,w.state.d+=B*z,!x[I]){x[I]=1;let L=(v.state.speed+w.state.speed)/2;v.state.speed+=(L-v.state.speed)*.2,w.state.speed+=(L-w.state.speed)*.2;let F=M>=0?v:w;F.state.speed*=.96}}else x[I]=0}}let _={phase:o?"racing":"countdown",countdown:o?0:eS,time:o?o.time:0,final:r,laps:e,track:n,riders:u,player:f,update(E,T){if(_.phase==="countdown"){_.countdown=Math.max(0,_.countdown-E),_.countdown<=0&&(_.phase="racing");return}let v=_.time;_.time+=E;for(let w=0;w<g;w++){let M=u[w];M.finished?M.input=d(M):M.isPlayer?M.input=T||Uh():(f&&(M.ai.playerGap=Nh(M.state.s-f.state.s,a)),M.input=Cc(M.ai,M.state,n,M.stats,M.others,E))}for(let w=0;w<g;w++){let M=u[w],S=M.state,I=M.finished,B=S.s;if(um(S,M.input,n,M.stats,t,E,M.rng),I||(m(M,B,S.s,v,E),M.finished||b(M,E)),M.lap=M.finished?e:Ic(Math.floor(S.s/c)+1,1,e),!M.isPlayer){M.frameEvents.length=0;for(let z=0;z<S.events.length;z++)M.frameEvents.push(S.events[z]);S.events.length=0}}y(),p.sort((w,M)=>w.finished!==M.finished?w.finished?-1:1:w.finished?w.finishTime-M.finishTime:M.state.s-w.state.s);for(let w=0;w<g;w++)p[w].position=w+1;r?(f?f.finished:u.every(w=>w.finished))&&(_.phase="finished"):(f||p[0]).state.s>=c&&(_.phase="relay")},results(){let E=u.map(T=>{let v;if(T.finished)v=T.finishTime;else{let w=Math.max(0,T.state.s-T.startS),M=_.time>1?Math.max(5,w/_.time):40,S=Math.max(0,l-T.state.s);v=_.time+S/M}return{id:T.id,name:T.name,position:T.position,time:v,bestLap:T.bestLap,isPlayer:T.isPlayer}});return E.sort((T,v)=>T.position-v.position),E}};return _}var Vh={};hg(Vh,{PLAYER:()=>Ai,RIVALS:()=>Lc,UPGRADES:()=>er,applyUpgrade:()=>Fc,computeStats:()=>tr,createRun:()=>Dc,dailySeed:()=>Oc,isRunOver:()=>jo,loadMeta:()=>zh,offerUpgrades:()=>Uc,randomSeed:()=>lS,recordResult:()=>Oh,runRiders:()=>Nc,saveMeta:()=>kh,standings:()=>io,updateMeta:()=>Hh});var dm="polygon-rush-meta",cS=Object.keys(Ti).filter(n=>n!=="sicily"),Ai={id:"player",name:"Vous",color:14885934,accent:2312392},er=[{id:"turbo",name:"Turbo instable",tagline:"Acc\xE9l\xE9ration brutale, pilotage nerveux.",pro:"Acc\xE9l\xE9ration \xD71,35 et vitesse de pointe \xD71,04.",con:"Direction bruit\xE9e (+0,35 rad/s) et braquage \xD70,9 \xE0 haute vitesse.",icon:"\u26A1",maxStacks:1,apply(n){n.accel*=1.35,n.maxSpeed*=1.04,n.steerNoise+=.35,n.steerHighSpeed*=.9}},{id:"rally",name:"Suspension rallye",tagline:"Les r\xE9ceptions passent mieux, la vitesse de pointe trinque.",pro:"R\xE9ception \xD71,8 et tra\xEEn\xE9e hors-piste \xD70,6.",con:"Vitesse de pointe \xD70,95.",icon:"\u{1F3D4}",maxStacks:2,apply(n){n.landing*=1.8,n.offroadDrag*=.6,n.maxSpeed*=.95}},{id:"aero",name:"A\xE9rodynamique",tagline:"Plus de vitesse, moins de tenue en l'air.",pro:"Vitesse de pointe \xD71,07.",con:"Stabilit\xE9 en saut \xD70,6 et contr\xF4le a\xE9rien \xD70,7.",icon:"\u{1F4A8}",maxStacks:2,apply(n){n.maxSpeed*=1.07,n.airStability*=.6,n.airControl*=.7}},{id:"rain",name:"Pneus pluie",tagline:"Accroche imbattable sous l'averse, sec moins mordant.",pro:"Adh\xE9rence mouill\xE9e \xD71,35 (\u2248 1,05).",con:"Adh\xE9rence s\xE8che \xD70,95.",icon:"\u{1F327}",maxStacks:1,apply(n){n.wetGrip*=1.35,n.grip*=.95}},{id:"nitro",name:"Nitro double",tagline:"Deux charges de plus, des boosts plus courts.",pro:"+2 charges de boost par course.",con:"Dur\xE9e de boost \xD70,75.",icon:"\u{1F680}",maxStacks:2,apply(n){n.boostCharges+=2,n.boostDuration*=.75}},{id:"brakes",name:"Freins c\xE9ramique",tagline:"Freinage mordant, direction plus vive, reprise plus lente.",pro:"Freinage \xD71,4 et braquage \xD71,08.",con:"Acc\xE9l\xE9ration \xD70,95.",icon:"\u{1F6D1}",maxStacks:2,apply(n){n.brake*=1.4,n.steerRate*=1.08,n.accel*=.95}},{id:"gyro",name:"Gyroscope",tagline:"Stabilisateur de vol, adh\xE9rence en retrait.",pro:"Contr\xF4le a\xE9rien \xD71,5 et stabilit\xE9 en l'air \xD71,25.",con:"Adh\xE9rence \xD70,9.",icon:"\u{1F300}",maxStacks:2,apply(n){n.airControl*=1.5,n.airStability*=1.25,n.grip*=.9}},{id:"slick",name:"Pneus slick",tagline:"Gomme tendre : accroche s\xE8che maximale, pluie interdite.",pro:"Adh\xE9rence s\xE8che \xD71,12.",con:"Adh\xE9rence mouill\xE9e \xD70,7 et braquage \xD70,95.",icon:"\u{1F3C1}",maxStacks:2,apply(n){n.grip*=1.12,n.wetGrip*=.7,n.steerRate*=.95}},{id:"carenage",name:"Car\xE9nage aspiration",tagline:"Profil fusel\xE9 : on file dans le sillage, on tourne moins vite.",pro:"Aspiration \xD71,6 dans le sillage des concurrents.",con:"Braquage \xD70,92.",icon:"\u{1F32C}",maxStacks:2,apply(n){n.slipstream*=1.6,n.steerRate*=.92}},{id:"blindage",name:"Blindage renforc\xE9",tagline:"Carrosserie en acier : les chocs co\xFBtent moins, la moto p\xE8se.",pro:"Perte de vitesse contre les glissi\xE8res \xD70,5.",con:"Acc\xE9l\xE9ration \xD70,92 et vitesse de pointe \xD70,97.",icon:"\u{1F6E1}",maxStacks:2,apply(n){n.wallLoss*=.5,n.accel*=.92,n.maxSpeed*=.97}}],Lc=[{id:"vortex",name:"Vortex Solenne",color:58879,accent:728366,skill:.8,aggression:.92,jumpSkill:.6,lineSkill:.5,style:"agressif",bio:"Freine tard, plonge dans les virages et ne l\xE2che jamais un pilote \xE0 la corde."},{id:"saltamonte",name:"Brigo Saltamonte",color:16766474,accent:1118481,skill:.76,aggression:.45,jumpSkill:.97,lineSkill:.5,style:"sauteur",bio:"Vole plus haut que tout le monde, atterrit quand il veut, parfois trop tard."},{id:"lumen",name:"Lumen Ardoise",color:8190976,accent:1714704,skill:.84,aggression:.15,jumpSkill:.55,lineSkill:.97,style:"trajectoire",bio:"Trace une ligne parfaite, ne prend jamais un bord et ne commet aucune faute."},{id:"aurelio",name:"Aurelio Temp\xEAte",color:16747520,accent:0,skill:.97,aggression:.7,jumpSkill:.85,lineSkill:.9,style:"r\xE9gulier",bio:"Le champion de la c\xF4te : rien \xE0 lui reprocher, et il le sait."},{id:"maree",name:"Ingrid Mar\xE9e",color:11544319,accent:16777215,skill:.88,aggression:.78,jumpSkill:.7,lineSkill:.6,style:"agressif",bio:"Pousse ses freins jusqu'\xE0 la limite et ressort des virages en coup de vent."},{id:"gaspard",name:"Gaspard Brume",color:1989631,accent:15790320,skill:.72,aggression:.35,jumpSkill:.4,lineSkill:.6,style:"r\xE9gulier",bio:"Discret, m\xE9tronome, il finit presque toujours dans les cinq premiers."},{id:"yuki",name:"Yuki Varan",color:50316,accent:8217,skill:.91,aggression:.5,jumpSkill:.8,lineSkill:.8,style:"r\xE9gulier",bio:"Rapide sur tous les terrains, sans point faible visible, et toujours souriant."}],pm=[{name:"Coastal Rush",subtitle:"Route m\xE9diterran\xE9enne, grandes courbes et falaises"},{name:"Cliff Edge",subtitle:"Corniches \xE9troites et vent de face"},{name:"Harbor Drift",subtitle:"Quais glissants, embruns et virages en \xE9pingle"},{name:"Lighthouse Pass",subtitle:"Tunnels, ressauts et brouillard de phare"},{name:"The Final Run",subtitle:"Le champion vous attend"}],Fh=pm.length;function mm(n){return er.find(e=>e.id===n)||null}function gm(n,e){let t=0;for(let i of n.upgrades)i===e&&t++;return t}function Dc(n){let e=String(n),t=Ln(Ko(e+"|run")),i=[];for(let o=0;o<Fh;o++)if(o===0)i.push("sunset");else if(o===Fh-1)i.push("rain");else{let a=i[o-1],c=cS.filter(l=>l!==a&&!(o===Fh-2&&l==="rain"));i.push(t.pick(c))}let s=pm.map((o,a)=>({name:o.name,subtitle:o.subtitle,trackSeed:`${e}-${a}`,weather:i[a],laps:a<2?2:3})),r={[Ai.id]:0};for(let o of Lc)r[o.id]=0;return{seed:e,stageIndex:0,stages:s,upgrades:[],points:r,history:[]}}function Nc(n){let e=Math.max(0,n.stageIndex),t=[{id:Ai.id,name:Ai.name,color:Ai.color,accent:Ai.accent,isPlayer:!0,persona:null,stats:tr(n)}];for(let i of Lc){let s=Math.min(.99,Math.round((i.skill+.01*e)*100)/100);t.push({id:i.id,name:i.name,color:i.color,accent:i.accent,isPlayer:!1,persona:{...i,skill:s},stats:{...Qs}})}return t}function tr(n){let e={...Qs};for(let t of n.upgrades){let i=mm(t);i&&i.apply(e)}return e}function Uc(n){let e=Ln(Ko(`${n.seed}|offer|${n.stageIndex}`)),t=er.filter(i=>gm(n,i.id)<i.maxStacks);return e.shuffle(t).slice(0,3)}function Fc(n,e){let t=mm(e);return!t||gm(n,e)>=t.maxStacks?!1:(n.upgrades.push(e),!0)}function xm(n){if(n===Ai.id)return Ai.name;let e=Lc.find(t=>t.id===n);return e?e.name:n}function Oh(n,e){if(jo(n))return n;let t=e.slice().sort((r,o)=>r.position-o.position),i=n.stages[n.stageIndex],s={stage:n.stageIndex,name:i.name,results:[]};return t.forEach((r,o)=>{let a=r.position??o+1,c=Ec[a-1]??0;n.points[r.id]=(n.points[r.id]||0)+c,s.results.push({id:r.id,name:r.name||xm(r.id),position:a,points:c,isPlayer:r.id===Ai.id})}),n.history.push(s),n.stageIndex+=1,n}function io(n){let e={};for(let t of n.history)for(let i of t.results)e[i.id]=Math.min(e[i.id]??1/0,i.position);return Object.keys(n.points).map(t=>({id:t,name:xm(t),points:n.points[t],isPlayer:t===Ai.id,_best:e[t]??1/0})).sort((t,i)=>i.points-t.points||t._best-i._best).map(({_best:t,...i})=>i)}function jo(n){return n.stageIndex>=n.stages.length}function Oc(n=new Date){let e=n instanceof Date?n:new Date(n),t=e.getUTCFullYear(),i=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`DAILY-${t}-${i}-${s}`}function lS(){let n="ABCDEFGHJKMNPQRSTUVWXYZ23456789",e="RUSH-";for(let t=0;t<4;t++)e+=n[Math.floor(Math.random()*n.length)];return e}function Pc(){return{runs:0,wins:0,bestPoints:0,unlocked:[]}}function Bh(n){let e=Pc();if(!n||typeof n!="object")return e;let t=i=>Number.isFinite(i)&&i>=0?Math.floor(i):0;return{runs:t(n.runs),wins:t(n.wins),bestPoints:t(n.bestPoints),unlocked:Array.isArray(n.unlocked)?n.unlocked.filter(i=>typeof i=="string"):e.unlocked}}function _m(){try{return globalThis.localStorage??null}catch{return null}}function zh(){try{let n=_m();if(!n)return Pc();let e=n.getItem(dm);return e?Bh(JSON.parse(e)):Pc()}catch{return Pc()}}function kh(n){try{let e=_m();return e?(e.setItem(dm,JSON.stringify(Bh(n))),!0):!1}catch{return!1}}function Hh(n,e){let t=Bh(n),i=io(e),s=i.find(o=>o.isPlayer),r=i.length>0&&i[0].isPlayer;return{runs:t.runs+1,wins:t.wins+(r?1:0),bestPoints:Math.max(t.bestPoints,s?s.points:0),unlocked:t.unlocked.slice()}}var ei=.9,ym=.3,Bc=8,Gh=3,vm=6+.8,Qo=3,uS=4.5,hS=.015,fS=.004,Mm=60,_t={asphaltA:[.27,.225,.2],asphaltB:[.31,.26,.23],rampDark:[.13,.13,.15],yellow:[1,.82,.05],black:[.04,.04,.05],white:[.95,.95,.92],red:[.86,.14,.12],checkW:[.95,.95,.95],checkB:[.04,.04,.05],railA:[.93,.92,.88],railB:[.8,.2,.12],neonCyan:[.2,1,1],neonMag:[1,.15,.9],sand:[.3,.48,.15],motorwayA:[.2,.2,.21],motorwayB:[.22,.22,.23],lane:[.34,.33,.31],gravel:[.24,.4,.13],tunOchreA:[.5,.39,.2],tunOchreB:[.44,.34,.17],sodium:[1,.72,.28],tunA:[.16,.18,.24],tunB:[.21,.23,.3],concrete:[.36,.38,.42],concreteB:[.3,.32,.36],post:[.12,.13,.16],beam:[.1,.1,.12],mast:[.17,.18,.22]},zc=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],bm=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],dS=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],vn=(n,e,t)=>n+(e-n)*t,Dn=class{constructor(){this.pos=[],this.col=[],this.uv=[],this.idx=[],this.n=0}quad(e,t,i,s){let[r,o,a,c]=e,l=bm(zc(o,r),zc(a,r)),h=bm(zc(a,r),zc(c,r)),u=[l[0]+h[0],l[1]+h[1],l[2]+h[2]];if(!(Math.hypot(u[0],u[1],u[2])>1e-12))return;let f=dS(u,i)<0,p=this.n;for(let g=0;g<4;g++){let x=e[g];this.pos.push(x[0],x[1],x[2]),this.col.push(t[0],t[1],t[2]);let m=s?s[g]:[0,0];this.uv.push(m[0],m[1])}this.n+=4,f?this.idx.push(p,p+2,p+1,p,p+3,p+2):this.idx.push(p,p+1,p+2,p,p+2,p+3)}};function ea(n,e,t,i,s){for(let r=0;r<3;r++){let o=(r+1)%3,a=(r+2)%3;for(let c of[-1,1]){let l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([h,u])=>{let f=[0,0,0];return f[r]=c,f[o]=h,f[a]=u,[0,1,2].map(p=>e[p]+t[0][p]*f[0]*i[0]+t[1][p]*f[1]*i[1]+t[2][p]*f[2]*i[2])});n.quad(l,s,t[r].map(h=>h*c),null)}}}function Wh(n,e,t){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new di(i);return s.colorSpace=Rt,s.anisotropy=4,s}function Sm(n,e,t,i){n.beginPath(),e.forEach(([s,r],o)=>o?n.lineTo(s*t,r*i):n.moveTo(s*t,r*i)),n.closePath(),n.fill()}var pS=[[.12,.1],[.82,.5],[.12,.9],[.12,.68],[.5,.5],[.12,.32]];function Xh(n,e,t){let i=t??Ln(n.seed??1),s=n.pts,r=s.length,o=n.step??n.length/r,a=n.length??r*o,c=n.features??[],l=c.filter(C=>C.type==="ramp"),h=c.filter(C=>C.type==="boost"),u=c.filter(C=>C.type==="tunnel"),f=Math.max(0,Math.min(1,e.sheen??e.wet??0)),p=!!e.night,g=new ht;g.name="road";let x=[],m=[],d=[],b=C=>(m.push(C),C),y=Wh(128,128,(C,D,O)=>{C.fillStyle="#f3efe6",C.fillRect(0,0,D,O),C.fillStyle="#d6202a",Sm(C,pS,D,O)}),_=Wh(256,128,(C,D,O)=>{C.fillStyle="#04141a",C.fillRect(0,0,D,O),C.fillStyle="#37f3ff",Sm(C,[[.05,.1],[.8,.5],[.05,.9],[.05,.7],[.4,.5],[.05,.3]],D,O)}),E=Wh(1024,256,(C,D,O)=>{C.fillStyle="#0b0e16",C.fillRect(0,0,D,O),C.strokeStyle="#ffd21f",C.lineWidth=10,C.strokeRect(12,12,D-24,O-24),C.fillStyle="#ffd21f",C.font="bold 150px Arial, Helvetica, sans-serif",C.textAlign="center",C.textBaseline="middle",C.fillText("POLYGON RUSH",D/2,O/2+8)});for(let C of[y,_,E])C&&d.push(C);_&&(_.wrapS=Vi);let T=b(new st({vertexColors:!0,flatShading:!0,roughness:.85-.6*f,metalness:f>0?.2:.02})),v=b(new Xt({vertexColors:!0})),w=b(new st({vertexColors:!0,flatShading:!0,color:16777215,emissive:16777215,emissiveIntensity:.14,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),M=b(new st({vertexColors:!0,flatShading:!0,roughness:1})),S=b(new st({vertexColors:!0,flatShading:!0,roughness:.5,metalness:.2})),I=b(new Xt({vertexColors:!0})),B=b(new st({color:y?16777215:16762906,map:y,emissive:y?16777215:16762906,emissiveMap:y,emissiveIntensity:.5,flatShading:!0})),z=b(new st({color:207411,emissive:3666943,emissiveMap:_,emissiveIntensity:2.2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),L=b(new st({vertexColors:!0,flatShading:!0,side:Ct,roughness:.9})),F=b(new Xt({vertexColors:!0})),U=b(new st({vertexColors:!0,flatShading:!0,roughness:.6})),Y=b(new st({color:E?16777215:16765471,map:E,emissive:E?16777215:16756736,emissiveMap:E,emissiveIntensity:.7,flatShading:!0})),V=b(new st({color:2830138,flatShading:!0,roughness:.7})),ie=b(new st({color:16773570,emissive:16765562,emissiveIntensity:p?2.5:.8,flatShading:!0})),ce=C=>{for(let D of l)if(C>=D.s0&&C<D.s1)return D.height*(C-D.s0)/(D.s1-D.s0);return 0},xe=C=>l.some(D=>C>=D.s0&&C<D.s1),ve=C=>u.some(D=>C>=D.s0&&C<=D.s1),ue=C=>{let D=C/o,O=Math.floor(D),K=D-O;O=n.open?Math.max(0,Math.min(r-2,O)):(O%r+r)%r;let he=s[O],Pe=s[(O+1)%r],Be=vn(he.rx,Pe.rx,K),He=vn(he.rz,Pe.rz,K),G=Math.hypot(Be,He)||1,re=vn(he.tx,Pe.tx,K),pe=vn(he.tz,Pe.tz,K),me=Math.hypot(re,pe)||1,ye=vn(he.y,Pe.y,K);return{s:C,x:vn(he.x,Pe.x,K),z:vn(he.z,Pe.z,K),yb:ye,y:ye,h:0,rx:Be/G,rz:He/G,tx:re/me,tz:pe/me,w:vn(he.width,Pe.width,K),curv:vn(he.curv,Pe.curv,K),sample:!1}},ee=(C,D,O)=>({x:vn(C.x,D.x,O),y:vn(C.y,D.y,O),yb:vn(C.yb,D.yb,O),z:vn(C.z,D.z,O),rx:vn(C.rx,D.rx,O),rz:vn(C.rz,D.rz,O),w:vn(C.w,D.w,O)}),te=(C,D,O=0)=>[C.x+C.rx*D,C.y+O,C.z+C.rz*D],ne=(C,D,O=0)=>[C.x+C.rx*D,C.yb+O,C.z+C.rz*D],R=[];for(let C of l)R.push({s:C.s0,h:0},{s:C.s1,h:C.height},{s:C.s1,h:0});R.sort((C,D)=>C.s-D.s);let q=[],X=0,Z=(C,D,O)=>{let K=q[q.length-1];if(K&&Math.abs(K.s-C)<1e-9&&Math.abs(K.h-D)<1e-9){K.sample=K.sample||O;return}let he=ue(C);he.h=D,he.y=he.yb+D,he.sample=O,q.push(he)};for(let C=0;C<r;C++){let D=C*o;for(;X<R.length&&R[X].s<=D+1e-9;)Z(R[X].s,R[X].h,!1),X++;Z(D,ce(D),!0)}for(;X<R.length;)Z(R[X].s,R[X].h,!1),X++;let de=q.length,Se=[];for(let C=0;C<de&&!(n.open&&C===de-1);C++){let D=q[C],O=q[(C+1)%de],K=D.s,he=C+1<de?q[C+1].s:a,Pe=Math.abs(he-K)<1e-9,Be=(K+he)/2;Se.push({a:D,b:O,sa:K,sb:he,drop:Pe,mid:Be,ramp:!Pe&&xe(Be)})}let Ce=new Dn,H=new Dn,Ve=new Dn,ke=new Dn,ze=new Dn,De=new Dn,Ye=new Dn,Ne=new Dn,N=new Dn,A=new Dn,j=new Dn,ge=new Dn,_e=C=>C.w/2+6-ym/2,fe=C=>C.w/2+6+ym/2;for(let C of Se){let{a:D,b:O,sa:K,sb:he,mid:Pe}=C;if(C.drop){Ce.quad([te(D,-D.w/2),te(D,D.w/2),te(O,O.w/2),te(O,-O.w/2)],_t.rampDark,[D.tx,0,D.tz]);continue}let Be=D.w/2,He=O.w/2;if(C.ramp)H.quad([te(D,-Be),te(D,Be),te(O,He),te(O,-He)],Math.floor(Pe/2)%2===0?_t.yellow:_t.black,[0,1,0]),Ce.quad([te(D,-Be),te(O,-He),ne(O,-He),ne(D,-Be)],_t.rampDark,[-D.rx,0,-D.rz]),Ce.quad([te(D,Be),ne(D,Be),ne(O,He),te(O,He)],_t.rampDark,[D.rx,0,D.rz]);else{Ce.quad([te(D,-Be),te(D,Be),te(O,He),te(O,-He)],n.open?Math.floor(Pe/8)%2?_t.motorwayB:_t.motorwayA:Math.floor(Pe/8)%2?_t.asphaltB:_t.asphaltA,[0,1,0]);for(let ye of[-1,1])Ve.quad([te(D,ye*(Be-.25),.02),te(D,ye*(Be-.45),.02),te(O,ye*(He-.45),.02),te(O,ye*(He-.25),.02)],_t.white,[0,1,0]);let G=9,re=3;for(let ye=Math.floor(K/G);ye*G<he;ye++){let Le=Math.max(K,ye*G),$e=Math.min(he,ye*G+re);if($e-Le<1e-6)continue;let Ze=ee(D,O,(Le-K)/(he-K)),it=ee(D,O,($e-K)/(he-K));Ve.quad([te(Ze,-.08,.02),te(Ze,.08,.02),te(it,.08,.02),te(it,-.08,.02)],_t.white,[0,1,0])}let pe=Math.abs((D.curv+O.curv)/2)>fS?1.2:.5,me=Math.floor(Pe/2)%2?_t.red:_t.railA;for(let ye of n.open?[]:[-1,1])Ve.quad([te(D,ye*Be,.025),te(D,ye*(Be+pe),.025),te(O,ye*(He+pe),.025),te(O,ye*He,.025)],me,[0,1,0])}for(let G of[-1,1]){ke.quad([ne(D,G*Be),ne(D,G*_e(D)),ne(O,G*_e(O)),ne(O,G*He)],n.open?_t.lane:_t.sand,[0,1,0]);let re=Bc/2,pe=-Gh/2,me=-Gh,ye=[G*D.rx*.6,.8,G*D.rz*.6];ke.quad([ne(D,G*fe(D),0),ne(D,G*(fe(D)+re),pe),ne(O,G*(fe(O)+re),pe),ne(O,G*fe(O),0)],_t.gravel,ye),ke.quad([ne(D,G*(fe(D)+re),pe),ne(D,G*(fe(D)+Bc),me),ne(O,G*(fe(O)+Bc),me),ne(O,G*(fe(O)+re),pe)],_t.gravel,ye);let Le=Math.floor(Pe/6)%2?_t.railB:_t.railA,$e=G*_e(D),Ze=G*_e(O),it=G*fe(D),rt=G*fe(O);!n.open&&(G<0||p||e.openRight===!1)&&(ze.quad([ne(D,$e,0),ne(D,$e,ei),ne(O,Ze,ei),ne(O,Ze,0)],Le,[-G*D.rx,0,-G*D.rz]),ze.quad([ne(D,it,0),ne(D,it,ei),ne(O,rt,ei),ne(O,rt,0)],Le,[G*D.rx,0,G*D.rz]),ze.quad([ne(D,$e,ei),ne(D,it,ei),ne(O,rt,ei),ne(O,Ze,ei)],Le,[0,1,0])),p&&De.quad([ne(D,$e,ei+.02),ne(D,it,ei+.02),ne(O,rt,ei+.02),ne(O,Ze,ei+.02)],G<0?_t.neonCyan:_t.neonMag,[0,1,0])}}for(let C of q){if(!C.sample||Math.abs(C.curv)<=hS||Math.round(C.s/o)%8!==0||ve(C.s)||xe(C.s))continue;let O=-Math.sign(C.curv)*(C.w/2+6+.6),he=C.curv>0?[[0,0],[1,0],[1,1],[0,1]]:[[1,0],[0,0],[0,1],[1,1]];Ye.quad([ne(C,O-.6,1),ne(C,O+.6,1),ne(C,O+.6,2),ne(C,O-.6,2)],[1,1,1],[-C.tx,0,-C.tz],he),ea(j,[C.x+C.rx*O,C.yb+.35,C.z+C.rz*O],[[C.tx,0,C.tz],[C.rx,0,C.rz],[0,1,0]],[.08,.12,.65],_t.post)}let Ie=ue(0),Fe=Math.max(4,Math.round(Ie.w)),Oe=Ie.w/Fe;for(let C=0;C<3;C++){let D=ue(-2+C),O=ue(-1+C);for(let K=0;K<Fe;K++){let he=-Ie.w/2+K*Oe,Pe=he+Oe;Ve.quad([te(D,he,.03),te(D,Pe,.03),te(O,Pe,.03),te(O,he,.03)],(C+K)%2?_t.checkB:_t.checkW,[0,1,0])}}let Ge=Ie.w/2+6+.5,Ee=[[Ie.tx,0,Ie.tz],[Ie.rx,0,Ie.rz],[0,1,0]];for(let C of[-1,1])ea(j,[Ie.x+Ie.rx*C*Ge,Ie.yb+4,Ie.z+Ie.rz*C*Ge],Ee,[.3,.3,4],_t.post);ea(j,[Ie.x,Ie.yb+7.5,Ie.z],Ee,[.5,Ge,.5],_t.beam);let J=(C,D,O)=>[Ie.x+Ie.tx*C+Ie.rx*D,Ie.yb+O,Ie.z+Ie.tz*C+Ie.rz*D];ge.quad([J(-.55,-Ge,5.2),J(-.55,Ge,5.2),J(-.55,Ge,6.8),J(-.55,-Ge,6.8)],[1,1,1],[-Ie.tx,0,-Ie.tz],[[0,0],[1,0],[1,1],[0,1]]),ge.quad([J(.55,-Ge,5.2),J(.55,Ge,5.2),J(.55,Ge,6.8),J(.55,-Ge,6.8)],[1,1,1],[Ie.tx,0,Ie.tz],[[1,0],[0,0],[0,1],[1,1]]);for(let C of h){let D=[];for(let K=C.s0;K<C.s1;K+=2)D.push(K);D.push(C.s1);let O=D.map(ue);for(let K=0;K+1<O.length;K++){let he=O[K],Pe=O[K+1],Be=(he.s-C.s0)/4,He=(Pe.s-C.s0)/4;Ne.quad([te(he,-he.w/2,.04),te(he,he.w/2,.04),te(Pe,Pe.w/2,.04),te(Pe,-Pe.w/2,.04)],[1,1,1],[0,1,0],[[Be,0],[Be,1],[He,1],[He,0]])}}let be=C=>{let D=C.w/2+vm,O=[[-D,0],[-D,Qo]];for(let K=1;K<=7;K++){let he=Math.PI-K*Math.PI/8;O.push([D*Math.cos(he),Qo+uS*Math.sin(he)])}return O.push([D,Qo],[D,0]),O},Me=(C,D,O,K=0)=>[C.x+C.rx*D+C.tx*K,C.yb+O,C.z+C.rz*D+C.tz*K],se=(C,D,O)=>{let K=-D,he=Qo-O,Pe=Math.hypot(K,he)||1;return[C.rx*K/Pe,he/Pe,C.rz*K/Pe]},we=([C,D])=>{let O=-C,K=Qo-D,he=Math.hypot(O,K)||1;return[C+O/he*.45,D+K/he*.45]};for(let C of u){let D=[];for(let K=C.s0;K<C.s1;K+=2)D.push(K);D.push(C.s1);let O=D.map(ue);for(let K=0;K+1<O.length;K++){let he=O[K],Pe=O[K+1],Be=be(he),He=be(Pe);for(let G=0;G<Be.length-1;G++){let re=(Be[G][0]+Be[G+1][0])/2,pe=(Be[G][1]+Be[G+1][1])/2;N.quad([Me(he,Be[G][0],Be[G][1]),Me(he,Be[G+1][0],Be[G+1][1]),Me(Pe,He[G+1][0],He[G+1][1]),Me(Pe,He[G][0],He[G][1])],n.open?G%2?_t.tunOchreA:_t.tunOchreB:G%2?_t.tunA:_t.tunB,se(he,re,pe))}if(Math.round((he.s-C.s0)/2)%6===0)for(let G=1;G<=8;G++){let re=we(Be[G]),pe=we(Be[G+1]),me=(re[0]+pe[0])/2,ye=(re[1]+pe[1])/2;A.quad([Me(he,re[0],re[1]),Me(he,pe[0],pe[1]),Me(he,pe[0],pe[1],.6),Me(he,re[0],re[1],.6)],n.open?_t.sodium:G%2?_t.neonCyan:_t.neonMag,se(he,me,ye))}}for(let K of[O[0],O[O.length-1]]){let he=K.w/2+vm,Pe=[[K.tx,0,K.tz],[K.rx,0,K.rz],[0,1,0]];for(let Be of[-1,1])ea(N,[K.x+K.rx*Be*(he+1.2),K.yb+5,K.z+K.rz*Be*(he+1.2)],Pe,[2,1.1,5],_t.concrete);ea(N,[K.x,K.yb+10.5,K.z],Pe,[2,he+3.5,1.5],_t.concreteB)}}let oe=(C,D,O,K=!1)=>{if(!C.idx.length)return null;let he=new gt;he.setAttribute("position",new ct(C.pos,3)),he.setAttribute("color",new ct(C.col,3)),he.setAttribute("uv",new ct(C.uv,2)),he.setIndex(C.idx),he.computeVertexNormals(),x.push(he);let Pe=new ot(he,D);return Pe.name=O,Pe.receiveShadow=K,g.add(Pe),Pe};oe(Ce,T,"road-asphalt",!0),oe(H,v,"road-ramp-top"),oe(Ve,w,"road-paint"),oe(ke,M,"road-shoulder-talus"),oe(ze,S,"road-barriers"),p&&oe(De,I,"road-barrier-neon"),oe(Ye,B,"road-chevrons"),oe(Ne,z,"road-boost"),oe(N,L,"road-tunnels"),oe(A,F,"road-tunnel-neon"),oe(j,U,"road-props"),oe(ge,Y,"road-start-sign");let Te=[];for(let C=1;C*Mm<a-5;C++){let D=C*Mm;if(u.some(He=>D>=He.s0-15&&D<=He.s1+15))continue;let O=ue(D),K=C%2?1:-1,he=K*(O.w/2+6+2.6),Pe=O.yb-Gh*Math.min(1,2.45/Bc),Be=i.range(8.5,9.5);Te.push({x:O.x+O.rx*he,z:O.z+O.rz*he,y:Pe,h:Be,hx:O.x+O.rx*(he-K*.6),hz:O.z+O.rz*(he-K*.6)})}if(Te.length){let C=new wn(.18,.26,9,6,1),D=new js(.55,0);x.push(C,D);let O=new _n(C,V,Te.length),K=new _n(D,ie,Te.length);O.name="road-lamp-masts",K.name="road-lamp-heads";let he=new et,Pe=new en,Be=new k,He=new k;Te.forEach((G,re)=>{He.set(G.x,G.y+G.h/2,G.z),Be.set(1,G.h/9,1),he.compose(He,Pe,Be),O.setMatrixAt(re,he),He.set(G.hx,G.y+G.h+.2,G.hz),Be.set(1,1,1),he.compose(He,Pe,Be),K.setMatrixAt(re,he)}),O.instanceMatrix.needsUpdate=!0,K.instanceMatrix.needsUpdate=!0,g.add(O,K)}return{group:g,update:(C,D)=>{_&&(_.offset.x=-(D*.9%1)),z.emissiveIntensity=2.2+.5*Math.sin(D*5)},dispose:()=>{g.removeFromParent();for(let C of x)C.dispose();for(let C of m)C.dispose();for(let C of d)C.dispose()}}}function Tm(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new gt,l=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,u=[];for(let f=0;f<n.length;++f){let p=n[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Em(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][f]);let g=Em(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Em(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new mt(o,t,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<t;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function qh(n,e){if(e===Ap)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===$o||e===Mc){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===$o)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function nr(n,e=.5,t=1){if(!n||n.userData.voxel||!(n.isMeshStandardMaterial||n.isMeshLambertMaterial))return n;n.userData.voxel=!0;let i=n.onBeforeCompile;return n.onBeforeCompile=(s,r)=>{i?.call(n,s,r),s.uniforms.uVoxCell={value:e},s.uniforms.uVoxStrength={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"voxel-"+e+"-"+t,n.needsUpdate=!0,n}var mS=/asphalt|paint|boost|sign|ramp|neon|lamp-heads/;function Yh(n,e){n.traverse(t=>{if(!t.isMesh||mS.test(t.name))return;let i=Array.isArray(t.material)?t.material:[t.material];for(let s of i)!s||s.transparent||s.emissiveIntensity>1.2||(s.roughness??1)<.35||nr(s,e(t),1)})}function wm(n,e,t=46){let i=[];for(let c=0;c<t;c++){let l=e.range(0,Math.PI*2),h=e.range(700,4200),u=Math.cos(l)*h,f=Math.sin(l)*h,p=e.range(260,520),g=e.range(26,46),x=e.int(5,11);for(let m=0;m<x;m++)i.push([u+Math.round(e.range(-3.5,3.5))*g,p+Math.round(e.range(0,1.4))*g*.6,f+Math.round(e.range(-2,2))*g,g*e.int(1,3),g*.6*e.int(1,2),g*e.int(1,2)])}let s=new cn(1,1,1),r=new jn({color:n.night?2765648:16777215,fog:!1,emissive:n.night?329487:new Re(16777215).lerp(new Re(n.skyHorizon),.35).multiplyScalar(.5)}),o=new _n(s,r,i.length),a=new et;return i.forEach((c,l)=>{a.makeScale(c[3],c[4],c[5]),a.setPosition(c[0],c[1],c[2]),o.setMatrixAt(l,a)}),o.instanceMatrix.needsUpdate=!0,o.frustumCulled=!1,o.name="voxel-clouds",o}function Am(n,e,t,i,s,r,o,a,c,l){let h=e+s,u=t+r,f=i+o,p,g,x,m,d,b;s?(p=0,g=c?1:-1,x=0,m=0,d=0,b=l?1:-1):r?(p=a?1:-1,g=0,x=0,m=0,d=0,b=l?1:-1):(p=a?1:-1,g=0,x=0,m=0,d=c?1:-1,b=0);let y=n(h+p,u+g,f+x)?1:0,_=n(h+m,u+d,f+b)?1:0,E=n(h+p+m,u+g+d,f+x+b)?1:0;return .5+.1667*(y&&_?0:3-(y+_+E))}function Ts(n,e){let t=n.index?n.toNonIndexed():n,i=t.attributes.position,s=t.attributes.color,r=512,o=(m,d,b)=>m+r+(d+r)*1024+(b+r)*1048576,a=new Map,c=(m,d,b,y,_,E)=>{let T=Math.floor(m/e),v=Math.floor(d/e),w=Math.floor(b/e),M=o(T,v,w);a.has(M)||a.set(M,[T,v,w,y,_,E])};for(let m=0;m<i.count;m+=3){let d=i.getX(m),b=i.getY(m),y=i.getZ(m),_=i.getX(m+1),E=i.getY(m+1),T=i.getZ(m+1),v=i.getX(m+2),w=i.getY(m+2),M=i.getZ(m+2),S=.6,I=.6,B=.6;s&&(S=(s.getX(m)+s.getX(m+1)+s.getX(m+2))/3,I=(s.getY(m)+s.getY(m+1)+s.getY(m+2))/3,B=(s.getZ(m)+s.getZ(m+1)+s.getZ(m+2))/3);let z=Math.max(Math.hypot(_-d,E-b,T-y),Math.hypot(v-d,w-b,M-y),Math.hypot(v-_,w-E,M-T)),L=Math.max(1,Math.ceil(z/e*2));for(let F=0;F<=L;F++)for(let U=0;U<=L-F;U++){let Y=F/L,V=U/L;c(d+(_-d)*Y+(v-d)*V,b+(E-b)*Y+(w-b)*V,y+(T-y)*Y+(M-y)*V,S,I,B)}}let l=new Map;for(let m of a.values()){let d=m[0]+r+(m[2]+r)*1024,b=l.get(d);b||l.set(d,b=[]),b.push(m)}for(let m of l.values()){m.sort((d,b)=>d[1]-b[1]);for(let d=0;d<m.length-1;d++)for(let b=m[d][1]+1;b<m[d+1][1];b++)a.set(o(m[d][0],b,m[d][2]),[m[d][0],b,m[d][2],m[d][3],m[d][4],m[d][5]])}let h=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],u=[],f=[],p=[],g=(m,d,b)=>a.has(o(m,d,b));for(let m of a.values()){let[d,b,y,_,E,T]=m,v=Math.sin(d*12.9898+b*78.233+y*37.719)*43758.5453,w=.86+.24*(v-Math.floor(v));for(let[M,S,I,B]of h)if(!a.has(o(d+M,b+S,y+I)))for(let z of[0,1,2,0,2,3]){let L=B[z*3],F=B[z*3+1],U=B[z*3+2],Y=w*Am(g,d,b,y,M,S,I,L,F,U);u.push((d+L)*e,(b+F)*e,(y+U)*e),f.push(M,S,I),p.push(_*Y,E*Y,T*Y)}}let x=new gt;return x.setAttribute("position",new ct(u,3)),x.setAttribute("normal",new ct(f,3)),x.setAttribute("color",new ct(p,3)),x.computeBoundingSphere(),x}function Hn(n,e,t,i,s,r=.2){let o=new Array(n*e*t),a=(x,m,d)=>x<0||m<0||d<0||x>=n||m>=e||d>=t?null:o[x+n*(m+e*d)];for(let x=0;x<t;x++)for(let m=0;m<e;m++)for(let d=0;d<n;d++)o[d+n*(m+e*x)]=s(d,m,x)||null;let c=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],l=[],h=[],u=[],f=-n/2,p=-t/2;for(let x=0;x<t;x++)for(let m=0;m<e;m++)for(let d=0;d<n;d++){let b=o[d+n*(m+e*x)];if(!b)continue;let y=Math.sin(d*12.9898+m*78.233+x*37.719)*43758.5453,_=1-r/2+r*(y-Math.floor(y));for(let[E,T,v,w]of c)if(!a(d+E,m+T,x+v)&&!(T<0&&m===0))for(let M of[0,1,2,0,2,3]){let S=w[M*3],I=w[M*3+1],B=w[M*3+2],z=_*Am(a,d,m,x,E,T,v,S,I,B);l.push((d+f+S)*i,(m+I)*i,(x+p+B)*i),h.push(E,T,v),u.push(b[0]*z,b[1]*z,b[2]*z)}}let g=new gt;return g.setAttribute("position",new ct(l,3)),g.setAttribute("normal",new ct(h,3)),g.setAttribute("color",new ct(u,3)),g.computeBoundingSphere(),g}function Rm(n,e=1,t=null){if(!n||n.userData.wetRoad)return n;n.userData.wetRoad=!0;let i=n.onBeforeCompile;return n.onBeforeCompile=(s,r)=>{i?.call(n,s,r),s.uniforms.uWet={value:e},s.uniforms.tRefl={value:t?t.texture:null},s.uniforms.uReflMatrix={value:t?t.matrix:new et},s.uniforms.uReflOn={value:t?1:0},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"wet-road-"+e+(t?"-refl":""),n.needsUpdate=!0,n}function Cm(n,e){let t=1/0,i=-1/0,s=1/0,r=-1/0,o=1/0,a=-1/0;for(let f=0;f<n.length;f+=4)t=Math.min(t,n[f]),i=Math.max(i,n[f]),s=Math.min(s,n[f+1]),r=Math.max(r,n[f+1]),o=Math.min(o,n[f+2]),a=Math.max(a,n[f+2]);let c=i-t+1,l=r-s+1,h=a-o+1,u=new Map;for(let f=0;f<n.length;f+=4){let p=n[f+3];u.set(n[f]-t+c*(n[f+1]-s+l*(n[f+2]-o)),[(p>>16&255)/255,(p>>8&255)/255,(p&255)/255])}return Hn(c,l,h,e,(f,p,g)=>u.get(f+c*(p+l*g))||null,.12)}function Im(n,e=3.1,t=2.6){if(!n||!n.userData.voxel||n.userData.windows)return n;n.userData.windows=!0;let i=n.onBeforeCompile;n.onBeforeCompile=(r,o)=>{i?.call(n,r,o),r.fragmentShader=r.fragmentShader.replace("#include <roughnessmap_fragment>",`
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
        #include <roughnessmap_fragment>`)};let s=n.customProgramCacheKey?.()||"";return n.customProgramCacheKey=()=>s+"-win-"+e+"-"+t,n.needsUpdate=!0,n}var un=5,Pm=1,ws=450,Vn=40,Lm=12e3,Dm=32,Nm=4e3,Gn=Math.PI*2,ta=new Ft,ro=new Re,Um=new et,Fm=new et,gS=new k(0,1,0),Om=n=>n<0?0:n>1?1:n,Ri=(n,e,t)=>n<e?e:n>t?t:n,ir=(n,e,t)=>{let i=Om((t-n)/(e-n));return i*i*(3-2*i)};function xS(n){let e=(i,s)=>{let r=Math.imul(i|0,374761393)+Math.imul(s|0,668265263)+n|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},t=(i,s)=>{let r=Math.floor(i),o=Math.floor(s),a=i-r,c=s-o,l=a*a*(3-2*a),h=c*c*(3-2*c),u=e(r,o),f=e(r+1,o),p=e(r,o+1),g=e(r+1,o+1);return u+(f-u)*l+(p-u)*h+(u-f-p+g)*l*h};return(i,s)=>(t(i,s)*.5+t(i*2+17.3,s*2-9.1)*.25+t(i*4-3.7,s*4+11.2)*.125)/.875}var so=n=>{let e=new Re(n);return[e.r,e.g,e.b]},As={sand:so(14271631),dry:so(7317050),garrigue:so(5212718),rock:so(12169890),pale:so(13617336),snow:so(15855076)},_S=[16513264,15853260,14725754,16052195],yS=[9075302,7236192,11047018,8023646],vS=[3407871,16727250,16757051],kc=0,Hc=0,Vc=0,na=(n,e)=>{kc+=(n[0]-kc)*e,Hc+=(n[1]-Hc)*e,Vc+=(n[2]-Vc)*e};function MS(n,e,t,i,s,r){kc=As.sand[0],Hc=As.sand[1],Vc=As.sand[2],na(As.dry,ir(2.5,7,n)),na(As.garrigue,ir(25,75,n)*.55),na(As.rock,ir(.4,.65,e)),na(As.pale,ir(95,120,n)*.8),na(As.snow,ir(125,150,n));let o=kc*t,a=Hc*t,c=Vc*t;i&&(o=o*.45+.02,a=a*.5+.03,c=c*.75+.09);for(let l=0;l<9;l+=3)s[r+l]=o,s[r+l+1]=a,s[r+l+2]=c}function ti(n,e){let t=n.index?n.toNonIndexed():n;t.attributes.uv&&t.deleteAttribute("uv"),t.attributes.normal||t.computeVertexNormals();let i=t.attributes.position.count,s=new Float32Array(i*3);ro.setHex(e);for(let r=0;r<i;r++)s[r*3]=ro.r,s[r*3+1]=ro.g,s[r*3+2]=ro.b;return t.setAttribute("color",new mt(s,3)),t}var ia=n=>Tm(n,!1);function bS(n,e,t){let i=Math.sin(n*12.9898+e*78.233+t*37.719)*43758.5453;return i-Math.floor(i)}function SS(){let n=new js(1,0),e=n.attributes.position;for(let t=0;t<e.count;t++){let i=e.getX(t),s=e.getY(t),r=e.getZ(t),o=.8+.4*bS(i,s,r);e.setXYZ(t,i*o,s*o,r*o)}return n.computeVertexNormals(),n}function ES(){return ia([ti(new wn(.35,.5,6,6).translate(0,3,0),7162931),ti(new js(3.4,0).scale(1,.55,1).translate(0,7.4,0),4160058)])}function TS(){return ia([ti(new wn(.25,.35,1.2,5).translate(0,.6,0),7162931),ti(new Js(1.1,10,6).translate(0,6,0),3037756)])}function wS(){let n=[ti(new wn(.22,.35,8,5).translate(0,4,0),9071178)];for(let e=0;e<7;e++){let t=new Js(.55,4.6,3).rotateZ(Math.PI/2-.45).translate(0,8.4,0).rotateY(e*Gn/7);n.push(ti(t,5214010))}return ia(n)}function AS(){return ia([ti(new wn(1.6,2.3,13,8).translate(0,6.5,0),16052712),ti(new wn(2,2,2.2,8).translate(0,6.5,0),12727595),ti(new wn(1.3,1.3,1.8,8).translate(0,14,0),16771488),ti(new Js(1.7,1.2,8).translate(0,15.4,0),3812906)])}function RS(){return ia([ti(new cn(2.2,.9,6).translate(0,.45,0),15986662),ti(new Js(1.9,5.4,3).scale(.1,1,1).translate(0,3.6,-.3),16775400)])}function mi(n,e,t,i=!0){let s=new _n(n,e,t.length);for(let r=0;r<t.length;r++){let o=t[r];ta.position.set(o.x,o.y,o.z),ta.rotation.set(0,o.ry??0,0),ta.scale.set(o.sx??1,o.sy??1,o.sz??1),ta.updateMatrix(),s.setMatrixAt(r,ta.matrix),o.col!==void 0&&(ro.setHex(o.col).multiplyScalar(o.v??1),s.setColorAt(r,ro))}return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.castShadow=i,s}var CS=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,IS=`
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
}`;function Bm(n,e,t,i){let s=e.pts,r=s.length,o=e.bounds,a=!!t.night,c=xS(i.int(1,1073741808)),l=o.minX-ws-Vn,h=o.minZ-ws-Vn,u=Math.ceil((o.maxX-o.minX+2*ws)/Vn)+3,f=Math.ceil((o.maxZ-o.minZ+2*ws)/Vn)+3,p=Array.from({length:u*f},()=>[]);for(let G=0;G<r;G++){let re=Ri(Math.floor((s[G].x-l)/Vn),0,u-1),pe=Ri(Math.floor((s[G].z-h)/Vn),0,f-1);p[pe*u+re].push(G)}let g=0;function x(G,re){let pe=Math.floor((G-l)/Vn),me=Math.floor((re-h)/Vn),ye=Math.max(u,f),Le=1/0,$e=0;for(let Ze=0;Ze<=ye;Ze++){for(let rt=me-Ze;rt<=me+Ze;rt++){if(rt<0||rt>=f)continue;let Ht=rt===me-Ze||rt===me+Ze?1:2*Ze;for(let Dt=pe-Ze;Dt<=pe+Ze;Dt+=Ht){if(Dt<0||Dt>=u)continue;let Vt=p[rt*u+Dt];for(let Wt=0;Wt<Vt.length;Wt++){let dn=Vt[Wt],P=s[dn],$=P.x-G,ae=P.z-re,le=$*$+ae*ae;le<Le&&(Le=le,$e=dn)}}}let it=Ze*Vn;if(Le<=it*it)break}return g=Math.sqrt(Le),$e}function m(G,re,pe){let me=pe*pe,ye=1/0,Le=Ri(Math.floor((G-pe-l)/Vn),0,u-1),$e=Ri(Math.floor((G+pe-l)/Vn),0,u-1),Ze=Ri(Math.floor((re-pe-h)/Vn),0,f-1),it=Ri(Math.floor((re+pe-h)/Vn),0,f-1);for(let rt=Ze;rt<=it;rt++)for(let Tt=Le;Tt<=$e;Tt++){let Ht=p[rt*u+Tt];for(let Dt=0;Dt<Ht.length;Dt++){let Vt=s[Ht[Dt]],Wt=Vt.x-G,dn=Vt.z-re;Wt*Wt+dn*dn<=me&&Vt.y<ye&&(ye=Vt.y)}}return ye}let d=Math.ceil(r/4),b=new Float64Array(d*2);for(let G=0;G<d;G++)b[2*G]=s[G*4%r].x,b[2*G+1]=s[G*4%r].z;function y(G,re){let pe=!1;for(let me=0,ye=d-1;me<d;ye=me++){let Le=b[2*me],$e=b[2*me+1],Ze=b[2*ye],it=b[2*ye+1];$e>re!=it>re&&G<(Ze-Le)*(re-$e)/(it-$e)+Le&&(pe=!pe)}return pe}let _=o.minX-ws,E=o.minZ-ws,T=Math.ceil((o.maxX-o.minX+2*ws)/un)+1,v=Math.ceil((o.maxZ-o.minZ+2*ws)/un)+1,w=new Float32Array(T*v);for(let G=0;G<v;G++)for(let re=0;re<T;re++){let pe=_+re*un,me=E+G*un,ye=x(pe,me),Le=g,$e=s[ye],Ze=$e.width*.5,it=$e.y;if(Le<40){let $=m(pe,me,24);$<it&&(it=$)}let rt=1;if(!y(pe,me)){let $=Le-Ze+(c(pe/140+31.7,me/140-8.2)-.5)*70;rt=1-ir(110,200,$)}let Tt=c(pe/260,me/260),Dt=-15+(10+130*Math.pow(Om((Tt-.42)/.5),1.5)+6*Tt+15)*rt;if(rt>=1){let $=c(pe/90+11.3,me/90-4.1);Dt=Math.max(Dt,it+6+38*$)}let Vt=ir(Ze+6+12,Ze+6+62,Le),Wt=it-.6,dn=Wt+(Dt-Wt)*Vt,P=it+Math.max(0,Le-Ze-6-12)*1.2;dn>P&&(dn=P),w[G*T+re]=dn}let M=null;function S(G,re){if(M)return M(G,re);let pe=(G-_)/un,me=(re-E)/un;pe=Ri(pe,0,T-1.000001),me=Ri(me,0,v-1.000001);let ye=Math.floor(pe),Le=Math.floor(me),$e=pe-ye,Ze=me-Le,it=w[Le*T+ye],rt=w[Le*T+ye+1],Tt=w[(Le+1)*T+ye],Ht=w[(Le+1)*T+ye+1],Dt=it+(rt-it)*$e,Vt=Tt+(Ht-Tt)*$e;return Dt+(Vt-Dt)*Ze}let I=(G,re)=>Math.max(Math.abs(S(G+4,re)-S(G-4,re)),Math.abs(S(G,re+4)-S(G,re-4)))/8,B=(G,re,pe)=>{let me=x(G,re);return g>=s[me].width*.5+6+4+pe},z=[],L=[],F=new Float32Array(9),U=(G,re,pe,me,ye,Le,$e,Ze,it)=>{let rt=me-G,Tt=ye-re,Ht=Le-pe,Dt=$e-G,Vt=Ze-re,Wt=it-pe,dn=Tt*Wt-Ht*Vt,P=Ht*Dt-rt*Wt,$=rt*Vt-Tt*Dt,ae=Math.hypot(dn,P,$)||1,le=1-Math.abs(P)/ae;z.push(G,re,pe,me,ye,Le,$e,Ze,it),MS((re+ye+Ze)/3,le,.9+.2*i.next(),a,F,0);for(let Q=0;Q<9;Q++)L.push(F[Q])},Y=T-1,V=v-1,ie=new Float32Array(Y*V);for(let G=0;G<V;G++)for(let re=0;re<Y;re++){let pe=G*T+re,me=(w[pe]+w[pe+1]+w[pe+T]+w[pe+T+1])/4;ie[G*Y+re]=Math.floor(me/Pm)*Pm}let ce=-4;for(let G=0;G<V;G++)for(let re=0;re<Y;re++){let pe=ie[G*Y+re],me=_+re*un,ye=E+G*un,Le=me+un,$e=ye+un;if(pe>ce&&(U(me,pe,ye,me,pe,$e,Le,pe,ye),U(Le,pe,ye,me,pe,$e,Le,pe,$e)),re+1<Y){let Ze=ie[G*Y+re+1],it=Math.min(pe,Ze),rt=Math.max(pe,Ze);rt>it&&rt>ce&&(U(Le,it,ye,Le,rt,ye,Le,rt,$e),U(Le,it,ye,Le,rt,$e,Le,it,$e))}if(G+1<V){let Ze=ie[(G+1)*Y+re],it=Math.min(pe,Ze),rt=Math.max(pe,Ze);rt>it&&rt>ce&&(U(me,it,$e,me,rt,$e,Le,rt,$e),U(me,it,$e,Le,rt,$e,Le,it,$e))}}M=(G,re)=>{let pe=Ri(Math.floor((G-_)/un),0,Y-1),me=Ri(Math.floor((re-E)/un),0,V-1);return ie[me*Y+pe]};let xe=new gt;xe.setAttribute("position",new ct(z,3)),xe.setAttribute("color",new ct(L,3)),xe.computeVertexNormals(),xe.computeBoundingSphere();let ve=new ot(xe,new st({vertexColors:!0,flatShading:!0,roughness:.94,metalness:0,side:Ct}));ve.receiveShadow=!0;let ue=new ht;ue.name="environment",ue.add(ve);let ee=(o.minX+o.maxX)/2,te=(o.minZ+o.maxZ)/2,ne=new Pn(Lm,Lm,Dm,Dm);ne.rotateX(-Math.PI/2);let R=ne.attributes.position,q=R.count,X=new Float32Array(q),Z=new Float32Array(q);for(let G=0;G<q;G++)X[G]=R.getX(G),Z[G]=R.getZ(G);let de=new ot(ne,new st({color:t.seaColor,roughness:.25,metalness:.05,flatShading:!0}));de.position.set(ee,0,te),ue.add(de);let Se=new k(t.sunDir[0],t.sunDir[1],t.sunDir[2]).normalize(),Ce=new ht,H=new Et({uniforms:{topColor:{value:new Re(t.skyTop)},horizonColor:{value:new Re(t.skyHorizon)},sunColor:{value:new Re(t.sunColor)},sunDir:{value:Se},night:{value:a?1:0}},vertexShader:CS,fragmentShader:IS,side:Jt,depthWrite:!1,fog:!1}),Ve=new ot(new ys(Nm,32,16),H);if(Ve.renderOrder=-10,Ve.frustumCulled=!1,Ce.add(Ve),a){let re=new Float32Array(1500);for(let ye=0;ye<500;ye++){let Le=i.range(0,Gn),$e=Math.asin(i.range(.05,.98)),Ze=Nm*.97;re[ye*3]=Ze*Math.cos($e)*Math.cos(Le),re[ye*3+1]=Ze*Math.sin($e),re[ye*3+2]=Ze*Math.cos($e)*Math.sin(Le)}let pe=new gt;pe.setAttribute("position",new mt(re,3));let me=new _s(pe,new Ks({color:16777215,size:2,sizeAttenuation:!1,fog:!1,depthWrite:!1,transparent:!0,opacity:.9}));me.frustumCulled=!1,Ce.add(me)}ue.add(Ce);let ke=new Qr(t.hemiSky,t.hemiGround,t.hemiIntensity),ze=new bi(t.sunColor,t.sunIntensity);ze.castShadow=!0,ze.shadow.mapSize.set(2048,2048);let De=ze.shadow.camera;De.left=-90,De.right=90,De.top=90,De.bottom=-90,De.near=1,De.far=600,De.updateProjectionMatrix(),ze.shadow.bias=-5e-4,ue.add(ke,ze,ze.target);let Ye=n.fog,Ne=n.background,N=new Zr(t.fogColor,t.fogDensity),A=new Re(t.skyHorizon);n.fog=N,n.background=A;let j=_+(T-1)*un,ge=E+(v-1)*un,_e=()=>i.range(_+30,j-30),fe=()=>i.range(E+30,ge-30),Ie=(G,re,pe)=>{let me=[];for(let ye=0;ye<re&&me.length<G;ye++){let Le=pe(_e(),fe());Le&&me.push(Le)}return me},Fe=Ie(320,4e4,(G,re)=>{let pe=S(G,re);if(pe<4||pe>95||!B(G,re,2)||I(G,re)>.6)return null;let me=i.range(.8,1.45);return{x:G,y:pe-.3,z:re,sx:me,sy:me*i.range(.9,1.3),sz:me,ry:i.range(0,Gn),col:16777215,v:i.range(.85,1.15)}}),Oe=Ie(170,4e4,(G,re)=>{let pe=S(G,re);if(pe<6||pe>70||!B(G,re,1.5)||I(G,re)>.6)return null;let me=i.range(.8,1.3);return{x:G,y:pe-.3,z:re,sx:me,sy:me*i.range(.9,1.25),sz:me,ry:i.range(0,Gn),col:16777215,v:i.range(.85,1.15)}}),Ge=Ie(110,4e4,(G,re)=>{let pe=S(G,re);if(pe<1.8||pe>14||!B(G,re,2)||I(G,re)>.5)return null;let me=i.range(.85,1.25);return{x:G,y:pe-.3,z:re,sx:me,sy:me,sz:me,ry:i.range(0,Gn),col:16777215,v:i.range(.9,1.1)}});ue.add(mi(Ts(ES(),.8),new st({vertexColors:!0,flatShading:!0,roughness:.9}),Fe)),ue.add(mi(Ts(TS(),.7),new st({vertexColors:!0,flatShading:!0,roughness:.9}),Oe)),ue.add(mi(Ts(wS(),.6),new st({vertexColors:!0,flatShading:!0,roughness:.9}),Ge));let Ee=Ie(300,3e4,(G,re)=>{let pe=S(G,re);if(pe<1.5)return null;let me=i.range(1.2,4.5);return B(G,re,me*.6)?{x:G,y:pe+me*.15,z:re,sx:me,sy:me*i.range(.55,.9),sz:me,ry:i.range(0,Gn),col:i.pick(yS),v:i.range(.85,1.15)}:null}),J=Ie(3,3e4,(G,re)=>{if(S(G,re)>-4)return null;let pe=x(G,re);if(g<s[pe].width*.5+200||g>800)return null;let me=i.range(25,45);return{x:G,y:.1*me,z:re,sx:me,sy:me*.45,sz:me,ry:i.range(0,Gn),col:10260344,v:1}});ue.add(mi(Ts(SS(),.42),new st({color:16777215,flatShading:!0,roughness:.95}),Ee.concat(J)));let be=[],Me=[],se=[],we=i.int(3,5),oe=0;for(let G=0;G<4e3&&oe<we;G++){let re=_e(),pe=fe(),me=x(re,pe),ye=s[me].width*.5;if(g<ye+25||g>ye+80)continue;let Le=S(re,pe);if(Le<6||Le>40||I(re,pe)>.35)continue;oe++;let $e=i.int(7,12);for(let Ze=0;Ze<$e;Ze++){let it=i.range(0,Gn),rt=Math.sqrt(i.next())*18,Tt=re+Math.cos(it)*rt,Ht=pe+Math.sin(it)*rt,Dt=x(Tt,Ht);if(g<s[Dt].width*.5+6+4+4)continue;let Vt=S(Tt,Ht);if(Vt<3)continue;let Wt=i.range(4,6.5),dn=i.range(3.5,6),P=i.range(4,6.5),$=i.pick([0,Math.PI/2])+i.range(-.15,.15),ae=Vt-1;if(be.push({x:Tt,y:ae,z:Ht,ry:$,sx:Wt,sy:dn,sz:P,col:i.pick(_S),v:1}),Me.push({x:Tt,y:ae+dn,z:Ht,ry:$,sx:Wt*1.08,sy:i.range(1.8,2.6),sz:P*1.08}),a)for(let le of[-1,1]){let Q=le*Wt*.28,Ue=P/2+.03;se.push({x:Tt+Q*Math.cos($)+Ue*Math.sin($),y:ae+dn*.55,z:Ht-Q*Math.sin($)+Ue*Math.cos($),ry:$})}}}let Te=new st({color:16777215,flatShading:!0,roughness:.85}),W=new st({color:11818298,flatShading:!0,roughness:.8});if(be.length){let G=new cn(1,1,1).translate(0,.5,0),re=Ts(new wn(0,.71,1,4).rotateY(Math.PI/4).translate(0,.5,0),.125);ue.add(mi(G,Te,be),mi(re,W,Me))}if(a&&se.length){let G=new cn(1.2,1.1,.12);ue.add(mi(G,new Xt({color:16761466}),se,!1))}if(a){let G=0,re=0,pe=!1;for(let me=0;me<4e3&&!pe;me++){let ye=_e(),Le=fe(),$e=x(ye,Le),Ze=s[$e].width*.5;if(g<Ze+220||g>Ze+420)continue;let it=S(ye,Le);it<6||it>30||(G=ye,re=Le,pe=!0)}if(pe){let me=[],ye=[],Le=i.int(9,13);for(let $e=0;$e<Le;$e++){let Ze=G+i.range(-110,110),it=re+i.range(-110,110),rt=S(Ze,it);if(rt<2)continue;let Tt=i.range(6,10),Ht=i.range(30,70);me.push({x:Ze,y:rt,z:it,sx:Tt,sy:Ht,sz:Tt,col:1777720,v:i.range(.8,1.2)});let Dt=i.pick(vS);for(let Vt=0;Vt<3;Vt++){let Wt=Vt*Gn/3+i.range(0,.5);ye.push({x:Ze+Math.cos(Wt)*Tt*.88,y:rt+Ht*.05,z:it+Math.sin(Wt)*Tt*.88,ry:-Wt,sy:Ht*.9,col:Dt,v:1})}}ue.add(mi(new wn(.72,1,1,6).translate(0,.5,0),new st({color:16777215,flatShading:!0,roughness:.7}),me),mi(new cn(.5,1,.25).translate(0,.5,0),new Xt({color:16777215}),ye,!1))}}{let G=[],re=[];for(let me=1;me<v-1;me++)for(let ye=1;ye<T-1;ye++){let Le=me*T+ye,$e=w[Le];if($e<2||$e>30)continue;let Ze=x(_+ye*un,E+me*un);if(g<s[Ze].width*.5+60)continue;(w[Le-1]<0||w[Le+1]<0||w[Le-T]<0||w[Le+T]<0?G:re).push(Le)}let pe=G.length?G:re;if(pe.length){let me=i.pick(pe),ye=me%T,Le=(me-ye)/T,$e=new ot(Ts(AS(),.6),new st({vertexColors:!0,flatShading:!0,roughness:.6}));$e.position.set(_+ye*un,w[me]-.5,E+Le*un),$e.castShadow=!0,ue.add($e)}}let Ae=Ie(4,2e4,(G,re)=>{if(S(G,re)>-3)return null;let pe=x(G,re);return g<s[pe].width*.5+250||g>900?null:{x:G,y:-.2,z:re,ry:i.range(0,Gn),col:16777215,v:1}});Ae.length&&ue.add(mi(Ts(RS(),.5),new st({vertexColors:!0,flatShading:!0,roughness:.6}),Ae));let C=[],D=[];for(let G=0;G<2e4&&C.length<3;G++){let re=_e(),pe=fe(),me=x(re,pe);if(g<s[me].width*.5+60)continue;let ye=S(re,pe);ye<55||C.some(Le=>Math.hypot(Le.x-re,Le.z-pe)<200)||C.push({x:re,y:ye,z:pe,ry:i.range(0,Gn),speed:i.range(.9,1.5),phase:i.range(0,Gn)})}let O=new cn(.7,14,.22).translate(0,7,0),K=new st({color:15659507,flatShading:!0,roughness:.6}),he=null;if(C.length){ue.add(mi(new wn(.8,.35,30,6).translate(0,15,0),K,C));for(let G of C)D.push(new et().compose(new k(G.x,G.y+30,G.z),new en().setFromAxisAngle(gS,G.ry),new k(1,1,1)));he=new _n(O,K,C.length*3),he.castShadow=!0,ue.add(he)}function Pe(G){if(he){for(let re=0;re<C.length;re++){let pe=G*C[re].speed+C[re].phase;for(let me=0;me<3;me++)Fm.makeRotationZ(pe+me*Gn/3),Um.multiplyMatrices(D[re],Fm),he.setMatrixAt(re*3+me,Um)}he.instanceMatrix.needsUpdate=!0}}Pe(0);function Be(G,re,pe){ze.position.set(pe.x+Se.x*200,pe.y+Se.y*200,pe.z+Se.z*200),ze.target.position.set(pe.x,pe.y,pe.z),Ce.position.set(pe.x,0,pe.z);for(let me=0;me<q;me++)R.setY(me,.35*Math.sin(X[me]*.02+re*.8)+.25*Math.cos(Z[me]*.017-re*.6));R.needsUpdate=!0,Pe(re)}function He(){n.remove(ue),ue.traverse(G=>{if(G.geometry&&G.geometry.dispose(),G.material){let re=Array.isArray(G.material)?G.material:[G.material];for(let pe of re)pe.dispose()}}),ze.shadow.map&&ze.shadow.map.dispose(),ue.clear(),n.fog===N&&(n.fog=Ye??null),n.background===A&&(n.background=Ne??null)}return n.add(ue),{group:ue,sun:ze,update:Be,dispose:He,heightAt:S}}var Wc=[.62,.6,.55],Rs=[.5,.49,.45],Zh=[.72,.3,.18],km=[.6,.24,.15],Kh=[.16,.2,.28],PS=[.2,.38,.3],Hm=[.36,.25,.16],oo=[[.1,.27,.08],[.14,.34,.1],[.07,.2,.06],[.2,.42,.12]],rr=[[.93,.84,.62],[.9,.74,.5],[.94,.9,.8],[.88,.66,.5]],pn=(n,e,t)=>{let i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)};function Gc(n,e,t,i){let s=i*3+1,r=Math.ceil(t/2);return Hn(e+2,s+r+1,t+2,1,(o,a,c)=>{let l=o-1,h=c-1;if(a<s){if(l<0||h<0||l>=e||h>=t)return null;if(!(l===0||h===0||l===e-1||h===t-1))return a===s-1?n:null;let p=l===0||l===e-1?h:l,g=l===0||l===e-1?t:e;return a%3===2&&p%3===1&&p<g-1?Kh:a%3===2&&p%3===2&&p<g-1&&pn(l,a,h)>.45?PS:a===0?Rs:n}let u=a-s;return h>=u-1&&h<=t-u&&u<=r?(l+u)%2?Zh:km:null},.14)}function LS(n){return Hn(7,23,7,1,(i,s,r)=>{let o=i-1,a=r-1;if(s<17)return o<0||a<0||o>=5||a>=5?null:o===0||a===0||o===4||a===4?(s===6||s===11||s===14)&&(o===2||a===2)?Kh:s===0?Rs:n:s===16?n:null;let c=s-17;return i>=c&&i<=6-c&&r>=c&&r<=6-c?(i+r)%2?Zh:km:null},.14)}function DS(n){let r=[];for(let o=0;o<6;o++)r.push([11+(pn(n,o,1)-.5)*9,13+pn(n,o,2)*6,11+(pn(n,o,3)-.5)*9,3.6+pn(n,o,4)*2.4]);return Hn(22,24,22,.7,(o,a,c)=>{if(a<12&&Math.abs(o-11+.5)<1.3&&Math.abs(c-11+.5)<1.3)return Hm;for(let l of r){let h=o-l[0],u=(a-l[1])*1.25,f=c-l[2];if(h*h+u*u+f*f<l[3]*l[3])return oo[Math.floor(pn(o,a,c)*oo.length)]}return null},.22)}function NS(){return Hn(14,16,8,.5,(n,e,t)=>{let s=5+Math.floor((n-1)/2)*1.6;return n===0?e<5?(e+t)%3?Wc:Rs:null:n>=1&&n<13&&e<s?e>=s-1?[.42,.42,.44]:Rs:n===13&&e<15&&(t===0||t===7)?[.16,.17,.2]:null},.12)}function $h(n,e){let r=e-3-9;return Hn(n,e+2,5,1,(o,a,c)=>{let l=o%22,h=a>=e&&(c===0||c===4);if(a>=e)return h?Rs:null;if(a>=e-2)return(o+a+c)%3?Wc:Rs;if(l<4)return(o+a+c)%4?Wc:Rs;if(a<r)return null;let u=l-4-9+.5,f=a-r;return u*u+f*f>81?(o+a+c)%3?Wc:Rs:null},.14)}function US(n){return Hn(6,4,6,.5,(t,i,s)=>{let r=t-3+.5,o=s-6/2+.5,a=(i-.8)*1.5,c=2.5+(pn(t+n,i,s)-.5)*1.2;return r*r+a*a+o*o<c*c?oo[Math.floor(pn(t,i+n,s)*oo.length)]:null},.22)}function FS(){let t=[[.12,.3,.14],[.15,.36,.16],[.1,.25,.12]];return Hn(6,20,6,.6,(i,s,r)=>{let o=i-3+.5,a=r-6/2+.5;if(s<2)return Math.abs(o)<.6&&Math.abs(a)<.6?Hm:null;let c=(s-2)/18,l=2.6*Math.sin(Math.PI*Math.min(1,.18+c*.82))**.7*(1-c*.55)+.3;return o*o+a*a<l*l?t[Math.floor(pn(i,s,r)*3)]:null},.2)}function zm(n){let r=(a,c)=>{let l=(a-15+.5)/15,h=(c-15+.5)/(30/2),u=Math.hypot(l,h)+(pn(Math.floor(a/3)+n,0,Math.floor(c/3))-.5)*.28,f=Math.max(0,Math.min(1,(.95-u)/.16)),p=14+Math.floor(pn(Math.floor(a/5),n,Math.floor(c/5))*3)*2;return Math.floor(p*f*f*(3-2*f))},o=[];for(let a=0;a<5;a++){let c=Math.floor(15+(pn(n,a,1)-.5)*14),l=Math.floor(15+(pn(n,a,2)-.5)*14);o.push([c,l,r(c,l),rr[Math.floor(pn(n,a,3)*rr.length)],a===0?7:3])}return Hn(30,26,30,1.6,(a,c,l)=>{let h=r(a,l);for(let[p,g,x,m,d]of o){let b=Math.abs(a-p),y=Math.abs(l-g),_=d>3?1:2;if(b<=_&&y<=1&&c>=x&&c<x+d)return c===x+d-2&&b!==_&&y===1?Kh:m;if(b<=_&&y<=1-(c-x-d)&&c>=x+d&&c<x+d+2)return Zh}if(c>=h)return null;if(c===h-1)return pn(a,5,l)>.75?oo[0]:[.36,.56,.2];let u=c%5===0?.86:1,f=.93+.14*pn(Math.floor(a/2),c,Math.floor(l/2));return pn(a,c,l)>.965?oo[2]:[.74*u*f,.71*u*f,.64*u*f]},.1)}function sr(n,e,t){let i=new _n(n,e,t.length),s=new et,r=new en,o=new k,a=new k,c=new k(0,1,0);return t.forEach((l,h)=>{r.setFromAxisAngle(c,l.ry||0),o.set(l.sx??l.s??1,l.sy??l.s??1,l.sz??l.s??1),a.set(l.x,l.y,l.z),s.compose(a,r,o),i.setMatrixAt(h,s),l.color&&i.setColorAt(h,l.color)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,i}function OS(){if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=1024,n.height=192;let e=n.getContext("2d");e.fillStyle="#f2efe8",e.fillRect(0,0,1024,192),e.fillStyle="#d6202a";for(let i of[0,880])for(let s=0;s<2;s++)e.beginPath(),e.moveTo(i+s*72,192),e.lineTo(i+s*72+36,192),e.lineTo(i+s*72+108,0),e.lineTo(i+s*72+72,0),e.fill();e.fillStyle="#23262e",e.font='italic 900 118px "Arial Narrow", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("POLYGON RUSH",512,104);let t=new di(n);return t.colorSpace=Rt,t.anisotropy=8,t}function Vm(n,e,t,i){let s=new ht;s.name="scenery";let r=[],o=()=>{let L=new st({vertexColors:!0,roughness:.9,metalness:0});return r.push(L),L},a=(L,F)=>{F.length&&(r.push(L),s.add(sr(L,o(),F)))},c={x:0,y:0,z:0,heading:0},l=n.length,h=L=>!!Es(n,(L%l+l)%l,"tunnel"),u=L=>n.pts[Math.floor((L%l+l)%l/n.step)%n.pts.length].width,f=(L,F)=>{let U=1/0;for(let Y=0;Y<n.pts.length;Y+=3){let V=n.pts[Y],ie=(V.x-L)*(V.x-L)+(V.z-F)*(V.z-F);ie<U&&(U=ie)}return Math.sqrt(U)},p=(L,F)=>{let U=Math.floor(L/n.step);for(let Y=0;Y<F/n.step;Y+=4)if(Math.abs(n.pts[(U+Y)%n.pts.length].curv)>.004)return!1;return!h(L)&&!h(L+F/2)&&!h(L+F)},g=[[24,22,-1]];for(let L=380;L<l-220&&g.length<4;L+=70)p(L-10,80)&&(g.push([L,14,t.sign()]),L+=420);let x=[],m=[],d=[],b=[14032938,2777046,15909424,15921906,2793562,9060290,15235614,2042436],y=L=>g.some(([F,U])=>L>F-12&&L<F+U*4+12);for(let[L,F,U]of g)for(let Y=0;Y<F;Y++){let V=L+Y*4,ie=U*(u(V)/2+6+.6);It(n,V,ie,c);let ce=c.heading+U*Math.PI/2,xe=Math.sin(c.heading),ve=Math.cos(c.heading),ue=-U*ve,ee=U*xe;x.push({x:c.x+ue*3.5,y:c.y-.3,z:c.z+ee*3.5,ry:ce});for(let te=0;te<6;te++)for(let ne=0;ne<4;ne++){if(t.next()<.18)continue;let R=-1.6+ne*1.05+t.range(-.15,.15),q=1+te*1,X=c.x+ue*q+xe*R,Z=c.z+ee*q+ve*R,de=c.y-.3+2.5+te*.8,Se=new Re(t.pick(b));m.push({x:X,y:de+.4,z:Z,ry:c.heading,sx:.5,sy:.8,sz:.36,color:Se}),d.push({x:X,y:de+1,z:Z,ry:c.heading,sx:.36,sy:.36,sz:.36,color:new Re(t.pick([15317386,13208414,9067066,15847334]))}),m.push({x:X-ue*.12,y:de-.1,z:Z-ee*.12,ry:c.heading,sx:.46,sy:.3,sz:.5,color:new Re(t.pick([2042436,2829099,3820138,5916210]))}),d.push({x:X,y:de+1.22,z:Z,ry:c.heading,sx:.4,sy:.12,sz:.4,color:new Re(t.pick([2759698,1118481,14032938,15909424,6965802,15921906]))}),t.next()<.22&&m.push({x:X+xe*.32,y:de+1.05,z:Z+ve*.32,ry:c.heading,sx:.14,sy:.6,sz:.14,color:Se})}}if(a(NS(),x),m.length){let L=new cn(1,1,1);r.push(L);let F=new st({roughness:.85});r.push(F),s.add(sr(L,F,m),sr(L,F,d));let U=x.map(Y=>({x:Y.x,y:Y.y+8.2,z:Y.z,ry:Y.ry,sx:8,sy:.4,sz:4.05,color:new Re(2303534)}));s.add(sr(L,F,U))}let _=OS(),E=new st({map:_,color:_?16777215:15921128,roughness:.7,side:Ct});r.push(E),_&&r.push(_);let T=new Pn(1,1);r.push(T);let v=[],w=(L,F)=>{if(h(L))return;let U=F*(u(L)/2+6-.22);It(n,L,U,c),v.push({x:c.x,y:c.y+.52,z:c.z,ry:c.heading+(F<0?-Math.PI/2:Math.PI/2),sx:9,sy:.92,sz:1})};for(let L=120;L<240;L+=13)w(L,-1);for(let L=30;L<110;L+=13)w(L,1);for(let L=400;L<l-80;L+=260)w(L,-1),w(L+13,-1),w(L+120,1);if(v.length){let L=sr(T,E,v);L.castShadow=!1,s.add(L)}let M=[[],[],[]];for(let L=130;L<l-20;L+=t.range(13,28)){if(y(L)||h(L)||h(L+12)||h(L-12))continue;let U=(t.next()<.82?-1:1)*(u(L)/2+6+t.range(3.4,6.5));It(n,L,U,c);let Y=i?i(c.x,c.z):c.y;Y<1.5||M[t.int(0,2)].push({x:c.x,y:Y-.2,z:c.z,ry:t.range(0,6.28),s:t.range(1.3,2.05)})}if(M.forEach((L,F)=>a(DS(11+F*7),L)),i){let L=[];for(let ie=200;ie<l-100;ie+=45)for(let ce of[-1,1]){let xe=ce*t.range(70,150);It(n,ie,xe,c);let ve=i(c.x,c.z);ve>c.y+6&&ve>6&&f(c.x,c.z)>55&&L.push({x:c.x,z:c.z,y:ve,score:ve-c.y+t.range(0,4)})}L.sort((ie,ce)=>ce.score-ie.score);let F=[];for(let ie of L){if(F.length>=4)break;F.every(ce=>Math.hypot(ce.x-ie.x,ce.z-ie.z)>220)&&F.push(ie)}let U=[{geo:Gc(rr[0],8,7,2),items:[]},{geo:Gc(rr[1],10,7,3),items:[]},{geo:Gc(rr[2],7,6,2),items:[]},{geo:Gc(rr[3],9,8,3),items:[]}],Y=[],V=[];for(let ie of F){for(let ce=0;ce<2;ce++){let xe=ie.x+t.range(-12,12),ve=ie.z+t.range(-12,12);f(xe,ve)<45||(Y.push({x:xe,y:i(xe,ve)-.5,z:ve,ry:t.int(0,3)*Math.PI/2}),V.push([xe,ve]))}for(let ce=0;ce<60&&U.reduce((xe,ve)=>xe+ve.items.length,0)<F.length*22;ce++){let xe=t.range(0,6.28),ve=t.range(8,60),ue=ie.x+Math.cos(xe)*ve,ee=ie.z+Math.sin(xe)*ve,te=i(ue,ee);te<3||f(ue,ee)<42||V.some(ne=>Math.hypot(ne[0]-ue,ne[1]-ee)<12)||(V.push([ue,ee]),t.pick(U).items.push({x:ue,y:te-.5,z:ee,ry:t.int(0,3)*Math.PI/2}))}}for(let ie of U)a(ie.geo,ie.items);a(LS(rr[2]),Y)}let S=[[],[]];for(let L=115;L<l-10;L+=t.range(4.5,9))if(!h(L)){if(t.next()<.3){L+=t.range(20,60);continue}for(let F of[-1,1]){if(t.next()<.35)continue;let U=F*(u(L)/2+6+t.range(1.4,2.6));It(n,L,U,c),S[t.int(0,1)].push({x:c.x,y:c.y-.5,z:c.z,ry:t.range(0,6.28),s:t.range(.8,1.4)})}}S.forEach((L,F)=>a(US(3+F*5),L));let I=[];for(let L=160;L<l-60;L+=t.range(120,220)){let F=t.sign(),U=t.int(5,9);for(let Y=0;Y<U;Y++){let V=L+Y*4.2;if(h(V))continue;It(n,V,F*(u(V)/2+6+4.2),c);let ie=i?i(c.x,c.z):c.y;ie<1.5||I.push({x:c.x,y:ie-.2,z:c.z,ry:t.range(0,6.28),s:t.range(.85,1.2)})}}if(a(FS(),I),i){let L=[[],[],[]],F=[];for(let U=150;U<l-50;U+=t.range(120,220))for(let Y of[-1,1]){if(t.next()<.3)continue;It(n,U,Y*t.range(72,125),c);let V=i(c.x,c.z);V<1||f(c.x,c.z)<56||F.some(ie=>Math.hypot(ie[0]-c.x,ie[1]-c.z)<70)||(F.push([c.x,c.z]),L[t.int(0,2)].push({x:c.x,y:V-3,z:c.z,ry:t.range(0,6.28),s:t.range(1.2,1.9)}))}L.forEach((U,Y)=>a(zm(17+Y*13),U))}{let L=[],F=[],U=new Re(12172998),Y=new Re(7172730);for(let V=0;V<l;V+=4){if(h(V)||y(V))continue;let ie=u(V)/2+6-.75;It(n,V,ie,c);let ce=c.x,xe=c.y,ve=c.z,ue=c.heading;L.push({x:ce,y:xe+.4,z:ve,ry:ue,sx:.12,sy:.8,sz:.12,color:Y}),It(n,V+4,u(V+4)/2+6-.75,c);let ee=(ce+c.x)/2,te=(xe+c.y)/2,ne=(ve+c.z)/2,R=Math.hypot(c.x-ce,c.z-ve)+.05,q=Math.atan2(c.x-ce,c.z-ve);for(let X of[.42,.72])F.push({x:ee,y:te+X,z:ne,ry:q,sx:.07,sy:.2,sz:R,color:U})}if(L.length){let V=new cn(1,1,1),ie=new st({roughness:.35,metalness:.85});r.push(V,ie),s.add(sr(V,ie,L),sr(V,ie,F))}}if(i){let L=[];for(let V=0;V<400&&L.length<16;V++){let ie=t.range(n.bounds.minX-420,n.bounds.maxX+420),ce=t.range(n.bounds.minZ-420,n.bounds.maxZ+420),xe=f(ie,ce);i(ie,ce)>-3||xe<90||xe>520||L.some(ve=>Math.hypot(ve.x-ie,ve.z-ce)<60)||L.push({x:ie,y:-.3,z:ce,ry:t.range(0,6.28),s:t.range(.9,1.5)})}let F=[.93,.93,.9],U=[.98,.97,.93],Y=[.55,.36,.2];a(Hn(5,18,14,.7,(V,ie,ce)=>{let xe=Math.abs(ce-6.5),ve=Math.abs(V-2);return ie<2?ve<=2-(ie===0?1:0)-(xe>5?1:0)&&xe<7-(ie===0?1:0)?ie===1&&ve<2?Y:F:null:V===2&&ce===7?[.3,.26,.22]:V===2&&ce>7&&ce<13&&ie<17-(ce-7)*2.6||V===2&&ce<7&&ce>1&&ie<14-(7-ce)*2.4?U:null},.06),L)}{It(n,0,0,c);let L=c.x,F=c.y,U=c.z,Y=c.heading,V=Math.sin(Y),ie=Math.cos(Y),ce=-ie,xe=V,ve=(ee,te,ne)=>f(ee,te)>ne,ue=!1;for(let ee of[430,500,380,580,660]){for(let te of[70,130,0,-70,190,-140]){if(ue)break;let ne=L+V*ee+ce*te,R=U+ie*ee+xe*te;if(!ve(ne,R,85))continue;let q=i?Math.max(-2,i(ne,R)):F;a(zm(101),[{x:ne,y:q-3,z:R,ry:Y+.6,s:2.3}]);let X=ne-V*95-ce*30,Z=R-ie*95-xe*30;if(ve(X,Z,45)&&ve(X+ce*90,Z+xe*90,40)&&ve(X-ce*90,Z-xe*90,40)){let de=i?Math.max(-1,i(X,Z)):F;a($h(198,24),[{x:X,y:Math.min(de,F)-5,z:Z,ry:Y}])}ue=!0}if(ue)break}}for(let L of[1,-1]){let F=!0;for(let Y of[210,270,330,390])It(n,Y,L*62,c),f(c.x,c.z)<46&&(F=!1);if(!F||L<0)continue;It(n,300,L*62,c);let U=i?i(c.x,c.z):c.y;a($h(198,22),[{x:c.x,y:U-4,z:c.z,ry:c.heading-Math.PI/2}]);break}let B=-1,z=-1/0;for(let L=300;L<l-300;L+=40){let F=Math.floor(L/n.step),U=0;for(let V=0;V<60;V+=6)U+=Math.abs(n.pts[(F+V)%n.pts.length].curv);let Y=-U*400+t.range(0,1)-(h(L)||h(L+100)?100:0);Y>z&&(z=Y,B=L)}if(B>0)for(let L of[1,-1]){It(n,B+90,L*95,c);let F=i?i(c.x,c.z):c.y;if(F<2)continue;a($h(198,20),[{x:c.x,y:Math.min(F,c.y)-4,z:c.z,ry:c.heading-Math.PI/2}]);break}return{group:s,dispose(){for(let L of r)L.dispose?.()}}}function BS(n,e){let t=n.length,i=new Float64Array(t),s=0;for(let r=0;r<t;r++){let o=0;s=0;for(let a=Math.max(0,r-e);a<=Math.min(t-1,r+e);a++)s+=n[a],o++;i[r]=s/o}return i}function Jh(n){let e=n.x.length,t=n.step,i=n.x,s=n.y,r=n.z,o=new Float64Array(e),a=new Float64Array(e),c=new Float64Array(e);for(let v=0;v<e;v++){let w=Math.max(0,v-1),M=Math.min(e-1,v+1),S=i[M]-i[w],I=r[M]-r[w],B=Math.hypot(S,I)||1e-9;o[v]=S/B,a[v]=I/B,c[v]=(s[M]-s[w])/B}let l=new Float64Array(e);for(let v=1;v<e-1;v++){let w=-a[v],M=o[v];l[v]=((o[v+1]-o[v-1])*w+(a[v+1]-a[v-1])*M)/(2*t)}l[0]=l[1],l[e-1]=l[e-2];let h=BS(l,12),u=new Float64Array(e);for(let v=0;v<e;v++)u[v]=Math.min(95,Math.sqrt(30/Math.max(1e-6,Math.abs(h[v]))));for(let v=e-2;v>=0;v--)u[v]=Math.min(u[v],Math.sqrt(u[v+1]**2+80*t));for(let v=1;v<e;v++)u[v]=Math.min(u[v],Math.sqrt(u[v-1]**2+40*t));let f=new Array(e),p=1/0,g=-1/0,x=1/0,m=-1/0,d=1/0,b=0;for(let v=0;v<e;v++){let w=Math.hypot(1,c[v]);f[v]={s:v*t,x:i[v],y:s[v],z:r[v],tx:o[v]/w,ty:c[v]/w,tz:a[v]/w,rx:-a[v],rz:o[v],width:n.width,curv:h[v],vmax:u[v],slope:c[v]},i[v]<p&&(p=i[v]),i[v]>g&&(g=i[v]),r[v]<x&&(x=r[v]),r[v]>m&&(m=r[v]);let M=1/Math.max(1e-9,Math.abs(h[v]));M<d&&(d=M),Math.abs(c[v])>b&&(b=Math.abs(c[v]))}let y=[],_=[];for(let v of n.features)v.type==="tunnel"?y.push({type:"tunnel",s0:v.s0,s1:v.s1,name:v.name}):_.push({s0:v.s0,s1:v.s1,name:v.name});let E=(e-1)*t,T=0;for(let v=0;v<e;v++)T+=t/Math.max(5,u[v]);return{seed:"REAL:"+n.id,attempts:1,open:!0,real:n,raceStart:n.raceStart||0,raceEnd:Math.min(n.raceEnd||E,E),length:E,step:t,count:e,pts:f,features:y,bridges:_,bounds:{minX:p,maxX:g,minZ:x,maxZ:m},stats:{minRadius:d,maxSlope:b,lapTimeEstimate:T,corners:0}}}var Gm=["torre","castello","borgo","chiesa","agrumeto","peschereccio","casello"];function zS(n,e,t){let i=[],s=n.length,r=l=>{let h=1/0,u=0;for(let f=0;f<n.count;f+=5){let p=n.pts[f],g=(p.x-l.x)**2+(p.z-l.z)**2;g<h&&(h=g,u=f)}return{dist:Math.sqrt(h),q:n.pts[u]}},o={},a=(l,h)=>(o[l]=(o[l]||0)+1)<=h,c=e.places.map(l=>({p:l,n:r(l)})).filter(l=>l.n.dist<1600&&l.n.q.s>150&&l.n.q.s<s-150).sort((l,h)=>l.n.dist-h.n.dist);for(let{p:l,n:h}of c)i.some(u=>u.x!==void 0&&Math.hypot(u.x-l.x,u.z-l.z)<250)||(l.kind==="castle"?/^torre/i.test(l.name)?a("torre",2)&&i.push({prop:"torre",x:l.x,z:l.z,height:48,label:l.name}):/castel|rocca|forte|fort/i.test(l.name)&&a("castello",3)&&i.push({prop:"castello",x:l.x,z:l.z,width:170,label:l.name}):l.kind==="place"&&(l.rank==="village"||l.rank==="town"||l.rank===void 0)&&(t(l.x,l.z)-h.q.y>120&&h.dist>250?a("borgo",3)&&i.push({prop:"borgo",x:l.x,z:l.z,width:300}):h.dist>90&&h.dist<450&&a("chiesa",3)&&i.push({prop:"chiesa",x:l.x,z:l.z,width:46})));for(let l=900,h=0;l<s-600;l+=1300,h++){let u=n.pts[Math.round(l/n.step)];for(let f of[1,-1]){let p=f*560;if(t(u.x+u.rx*p,u.z+u.rz*p)<=0&&t(u.x+u.rx*p*1.3,u.z+u.rz*p*1.3)<=0)h%2===0&&i.push({prop:"peschereccio",s:l,d:p+h%3*40*f,width:34,sea:!0});else if(h%2===1){let g=f*78,x=t(u.x+u.rx*g,u.z+u.rz*g);x>1&&Math.abs(x-u.y)<14&&i.push({prop:"agrumeto",s:l,d:g,width:70})}}}return i}function Wm({track:n,data:e,baked:t,heightAt:i,clearance:s}){let r=new ht;r.name="real-props";let o=[],a=[];if(!t)return{group:r,placed:o,skipped:a,dispose(){}};let c=new jn({vertexColors:!0}),l=new Map,h=n.length,u=(f,p)=>{let g=1/0,x=0;for(let m=0;m<n.count;m+=2){let d=n.pts[m],b=(d.x-f)**2+(d.z-p)**2;b<g&&(g=b,x=m)}return{q:n.pts[x],dist:Math.sqrt(g)}};for(let f of zS(n,e,i)){let p=t[f.prop];if(!p?.cells?.length)continue;let g=p._ext;if(!g){let w=[1/0,1/0,1/0],M=[-1/0,-1/0,-1/0];for(let S=0;S<p.cells.length;S+=4)for(let I=0;I<3;I++)w[I]=Math.min(w[I],p.cells[S+I]),M[I]=Math.max(M[I],p.cells[S+I]+1);g=p._ext=[M[0]-w[0],M[1]-w[1],M[2]-w[2]]}let x=f.height?f.height/g[1]:f.width/Math.max(g[0],g[2]),m=Math.hypot(g[0],g[2])*x/2,d,b;if(f.x!==void 0)d=f.x,b=f.z;else{let w=n.pts[Math.max(0,Math.min(n.count-1,Math.round(f.s/n.step)))];d=w.x+w.rx*f.d,b=w.z+w.rz*f.d}let y=u(d,b);if(y.dist-m<s){if(f.x===void 0||y.dist<1){a.push(f.prop+" : trop pr\xE8s de la route");continue}let w=(m+s+2)/y.dist;if(d=y.q.x+(d-y.q.x)*w,b=y.q.z+(b-y.q.z)*w,y=u(d,b),y.dist-m<s){a.push(f.prop+" : trop pr\xE8s de la route");continue}}let _;if(f.sea){if(i(d,b)>0){a.push(f.prop+" : pas en mer");continue}_=-.12*x*g[1]}else{_=1/0;for(let[w,M]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]])_=Math.min(_,i(d+w*m*.6,b+M*m*.6));_=Math.max(_,.2)-.5}let E=f.prop+"@"+x.toFixed(3),T=l.get(E);T||l.set(E,T=Cm(p.cells,x));let v=new ot(T,c);v.name="prop-"+f.prop,v.position.set(d,_,b),v.rotation.y=Math.atan2(y.q.x-d,y.q.z-b),v.updateMatrix(),v.matrixAutoUpdate=!1,r.add(v),o.push({prop:f.prop,label:f.label||null,s:y.q.s,dist:y.dist,x:d,y:_,z:b,size:x})}return{group:r,placed:o,skipped:a,dispose(){c.dispose();for(let f of l.values())f.dispose()}}}var jh=.12,kS=8200,HS=(n,e,t=1.08,i=1.45)=>{let s=(n>>16&255)/255,r=(n>>8&255)/255,o=(n&255)/255,a=.3*s+.59*r+.11*o,c=(.38+(a-.38)*1.35)/Math.max(a,.001);s*=c,r*=c,o*=c,a=.3*s+.59*r+.11*o,s=Math.min(1,Math.max(0,(a+(s-a)*i)*t)),r=Math.min(1,Math.max(0,(a+(r-a)*i)*t)),o=Math.min(1,Math.max(0,(a+(o-a)*i)*t)),e[0]=s,e[1]=r,e[2]=o};function sa(n,e,{seaCut:t=.25,yOffset:i=0,tint:s=null}={}){let{cell:r,ix:o,iz:a,h:c,c:l}=n,h=o.length,u=1/0,f=-1/0,p=1/0,g=-1/0;for(let U=0;U<h;U++)o[U]<u&&(u=o[U]),o[U]>f&&(f=o[U]),a[U]<p&&(p=a[U]),a[U]>g&&(g=a[U]);let x=h?g-p+1:0,m=new Float32Array(h?(f-u+1)*x:0).fill(NaN),d=(U,Y)=>U<u||U>f||Y<p||Y>g?-1:(U-u)*x+(Y-p),b={get(U){if(U<0)return;let Y=m[U];return Y===Y?Y:void 0}},y=new Float32Array(h);for(let U=0;U<h;U++)y[U]=Math.floor(c[U]/10/e)*e,m[(o[U]-u)*x+(a[U]-p)]=y[U];let _=[1,-1,0,0],E=[0,0,1,-1],T=new Float32Array(h*4),v=new Uint8Array(h),w=0;for(let U=0;U<h;U++)if(!(c[U]/10<=t)){v[U]=1,w++;for(let Y=0;Y<4;Y++){let V=b.get(d(o[U]+_[Y],a[U]+E[Y]));V!==void 0&&V<y[U]?(T[U*4+Y]=V,w++):T[U*4+Y]=NaN}}let M=new Float32Array(w*18),S=new Float32Array(w*18),I=new Float32Array(w*18),B=0,z=[0,0,0],L=(U,Y,V,ie,ce,xe,ve,ue,ee,te,ne,R,q,X,Z,de,Se,Ce)=>{M[B]=U,M[B+1]=Y,M[B+2]=V,M[B+3]=ie,M[B+4]=ce,M[B+5]=xe,M[B+6]=ve,M[B+7]=ue,M[B+8]=ee,M[B+9]=U,M[B+10]=Y,M[B+11]=V,M[B+12]=ve,M[B+13]=ue,M[B+14]=ee,M[B+15]=te,M[B+16]=ne,M[B+17]=R;for(let H=0;H<18;H+=3)S[B+H]=q,S[B+H+1]=X,S[B+H+2]=Z,I[B+H]=de,I[B+H+1]=Se,I[B+H+2]=Ce;B+=18};for(let U=0;U<h;U++){if(!v[U])continue;let Y=y[U];HS(l[U],z),s&&s(z,(o[U]+.5)*r,(a[U]+.5)*r,Y);let V=.92+.16*((o[U]*73856093^a[U]*19349663)>>>0)/4294967295,ie=z[0]*V,ce=z[1]*V,xe=z[2]*V,ve=o[U]*r,ue=a[U]*r,ee=ve+r,te=ue+r,ne=Y+i;L(ve,ne,ue,ve,ne,te,ee,ne,te,ee,ne,ue,0,1,0,ie,ce,xe);let R=.2+.45*ie,q=.19+.42*ce,X=.17+.38*xe,Z=T[U*4];Z===Z&&L(ee,Z+i,te,ee,ne,te,ee,ne,ue,ee,Z+i,ue,1,0,0,R,q,X),Z=T[U*4+1],Z===Z&&L(ve,Z+i,ue,ve,ne,ue,ve,ne,te,ve,Z+i,te,-1,0,0,R,q,X),Z=T[U*4+2],Z===Z&&L(ve,Z+i,te,ve,ne,te,ee,ne,te,ee,Z+i,te,0,0,1,R,q,X),Z=T[U*4+3],Z===Z&&L(ee,Z+i,ue,ee,ne,ue,ve,ne,ue,ve,Z+i,ue,0,0,-1,R,q,X)}let F=new gt;return F.setAttribute("position",new mt(M,3)),F.setAttribute("normal",new mt(S,3)),F.setAttribute("color",new mt(I,3)),F.computeBoundingSphere(),{geo:F,heights:b,key:d,q:y}}function Ki(n,e,t){let i=new _n(n,e,t.length),s=new et,r=new en,o=new k,a=new k,c=new k(0,1,0);return t.forEach((l,h)=>{r.setFromAxisAngle(c,l.ry||0),o.set(l.sx??1,l.sy??1,l.sz??1),a.set(l.x,l.y,l.z),s.compose(a,r,o),i.setMatrixAt(h,s),l.color&&i.setColorAt(h,l.color)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.frustumCulled=!1,i}function VS(n){if(typeof document>"u")return null;let e=document.createElement("canvas");e.width=512,e.height=192;let t=e.getContext("2d");t.fillStyle="#0c7a43",t.fillRect(0,0,512,192),t.strokeStyle="#ffffff",t.lineWidth=8,t.strokeRect(8,8,496,176),t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.font="bold 62px Arial, Helvetica, sans-serif",t.fillText(n[0],256,n[1]?70:96,470),n[1]&&(t.font="bold 44px Arial, Helvetica, sans-serif",t.fillText(n[1],256,136,470));let i=new di(e);return i.colorSpace=Rt,i.anisotropy=8,i}function Xm(n,e){e==="near"?n._near=n._near||sa(n.near,1):e==="mid"&&(n._mid=n._mid||sa(n.mid,4,{yOffset:-3}))}function qm(n,e,t,i){let s=e.real,r=new ht;r.name="environment";let o=[],a=J=>(o.push(J),J),c=!!t.night,l=()=>nr(a(new st({vertexColors:!0,roughness:.95,metalness:0,side:Ct})),1,1),h=s._near||sa(s.near,1);s._near=null;let u=new ot(a(h.geo),l());u.receiveShadow=!0,u.name="real-terrain-near";let f=s._mid||sa(s.mid,4,{yOffset:-3});s._mid=null;let p=new ot(a(f.geo),nr(a(new st({vertexColors:!0,roughness:1,side:Ct})),8,.7));p.name="real-terrain-mid";let g=new Re(t.skyHorizon),x=(e.bounds.minX+e.bounds.maxX)/2,m=(e.bounds.minZ+e.bounds.maxZ)/2,d=sa(s.far,60,{tint:(J,be,Me,se)=>{let we=Math.hypot(be-x,Me-m),oe=Math.min(.82,1-Math.exp(-we/3e4)),Te=se>2300?.5:0;J[0]=(J[0]+(1-J[0])*Te)*(1-oe)+g.r*oe,J[1]=(J[1]+(1-J[1])*Te)*(1-oe)+g.g*oe,J[2]=(J[2]+(1-J[2])*Te)*(1-oe)+g.b*oe}}),b=new ot(a(d.geo),a(new Xt({vertexColors:!0,fog:!1,side:Ct})));b.name="real-terrain-far",b.scale.setScalar(jh),b.frustumCulled=!1,b.renderOrder=-5,r.add(u,p,b);let y=(J,be)=>{let Me=s.near.cell,se=h.heights.get(h.key(Math.floor(J/Me),Math.floor(be/Me)));if(se!==void 0)return se;let we=s.mid.cell,oe=f.heights.get(f.key(Math.floor(J/we),Math.floor(be/we)));return oe!==void 0?oe-3:-5},_=new ot(a(new Pn(6e4,6e4)),a(new st({color:t.seaColor,roughness:.25,metalness:.2})));_.rotation.x=-Math.PI/2,_.position.y=.05,_.name="real-sea",r.add(_);let E=new k(...t.sunDir).normalize(),T=a(new Et({side:Jt,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new Re(t.skyTop)},uHor:{value:new Re(t.skyHorizon)},uSun:{value:new Re(t.sunColor)},uSunDir:{value:E}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uTop, uHor, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = mix(uHor, uTop, pow(max(d.y, 0.0), 0.5));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 600.0) * 3.0 + pow(s, 14.0) * 0.25);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`})),v=new ot(a(new ys(kS,32,16)),T);v.renderOrder=-10,v.frustumCulled=!1,r.add(v);let w=n.fog,M=n.background;n.fog=new Zr(t.fogColor,(t.fogDensity||5e-4)*.3),n.background=new Re(t.skyHorizon);let S=new Qr(t.hemiSky,t.hemiGround,t.hemiIntensity),I=new bi(t.sunColor,t.sunIntensity);I.castShadow=!0,I.shadow.mapSize.set(2048,2048);let B=I.shadow.camera;B.left=-90,B.right=90,B.top=90,B.bottom=-90,B.near=1,B.far=500,I.shadow.bias=-5e-4,r.add(S,I,I.target);let z=s.buildings,L=[15983808,15321498,16117730,14924172,14472128,15784368,13620956],F=[11884346,11030070,14275268,13222064,9390646],U=[],Y=[],V=60,ie=new Map;for(let J=0;J<e.count;J+=3){let be=e.pts[J],Me=Math.floor(be.x/V)+","+Math.floor(be.z/V),se=ie.get(Me);se||ie.set(Me,se=[]),se.push(be)}let ce=s.width/2+6+2,xe=(J,be,Me,se)=>{let we=null,oe=Math.max(Me,se)+ce;for(let Te=Math.floor((J-oe)/V);Te<=Math.floor((J+oe)/V);Te++)for(let W=Math.floor((be-oe)/V);W<=Math.floor((be+oe)/V);W++){let Ae=ie.get(Te+","+W);if(Ae)for(let C of Ae){let D=Math.max(0,Math.abs(C.x-J)-Me),O=Math.max(0,Math.abs(C.z-be)-se);D*D+O*O<ce*ce&&(we===null||C.y<we)&&(we=C.y)}}return we},ve=0,ue=0;for(let J=0;J<z.x.length;J++){let Me=(z.l[J]>0?Math.min(z.l[J],9):1+Math.floor(i.next()*3)+(z.w[J]*z.d[J]>300?1:0))*3.1,se=Math.max(y(z.x[J],z.z[J]),.3),we=xe(z.x[J],z.z[J],z.w[J]/2+.3,z.d[J]/2+.3);if(we!==null){let oe=we-3.2-se;if(oe<3){ve++;continue}Me>oe&&(Me=oe,ue++)}U.push({x:z.x[J],y:se+Me/2-.5,z:z.z[J],sx:z.w[J],sy:Me+1,sz:z.d[J],color:new Re(i.pick(L))}),Y.push({x:z.x[J],y:se+Me+.35,z:z.z[J],sx:z.w[J]+.6,sy:.7,sz:z.d[J]+.6,color:new Re(i.pick(F))})}let ee=a(new cn(1,1,1));if(U.length){let J=Im(nr(a(new st({roughness:.9})),1.5,.8)),be=a(new st({roughness:.85})),Me=Ki(ee,J,U),se=Ki(ee,be,Y);Me.name="real-buildings",Me.castShadow=!0,r.add(Me,se)}let te=s.trees,ne=0;if(te&&te.x.length){let J=[],be=[],Me=new Re(7031346),se=new Re;for(let oe=0;oe<te.x.length;oe++){let Te=te.x[oe],W=te.z[oe];if(xe(Te,W,2.5,2.5)!==null)continue;let Ae=Math.sin(Te*12.9898+W*78.233)*43758.5453,C=te.r?te.r[oe]/1e3:Ae-Math.floor(Ae),D=te.y[oe],O=.75+.5*C;if(te.k[oe])if(C<.55){let K=7+6*C;be.push({x:Te,y:D+K/2+.6,z:W,sx:1.7,sy:K,sz:1.7,color:se.setRGB(.1*O,.26*O,.13*O).clone()})}else{let K=6+5*C;J.push({x:Te,y:D+K/2,z:W,sx:.7,sy:K,sz:.7,color:Me}),be.push({x:Te,y:D+K+.9,z:W,sx:6.5,sy:2.2,sz:6.5,color:se.setRGB(.14*O,.34*O,.16*O).clone()})}else{let K=3+2.4*C;J.push({x:Te,y:D+.9,z:W,sx:.6,sy:1.8,sz:.6,color:Me}),be.push({x:Te,y:D+1.6+K/2,z:W,sx:K,sy:K*.85,sz:K,color:se.setRGB(.3*O,.44*O,.2*O).clone()})}}ne=be.length;let we=nr(a(new jn),1.1,.9);if(J.length){let oe=Ki(ee,a(new jn),J);oe.name="real-trunks",r.add(oe)}if(be.length){let oe=Ki(ee,we,be);oe.name="real-trees",r.add(oe)}}let R={x:0,y:0,z:0,heading:0},q=s.width/2,X=new Re(12170925),Z=new Re(10131343),de=[],Se=[];for(let J of e.bridges){for(let be=J.s0+6;be<J.s1-2;be+=34){It(e,be,0,R);let Me=y(R.x,R.z),se=R.y-1.6-Me;se<3||(de.push({x:R.x,y:Me+se/2,z:R.z,ry:R.heading,sx:q*1.5,sy:se,sz:2.4,color:Z}),de.push({x:R.x,y:R.y-1.2,z:R.z,ry:R.heading,sx:q*2+5,sy:1.2,sz:3.6,color:X}))}for(let be=J.s0;be<J.s1;be+=8){for(let Me of[-1,1])It(e,be+4,Me*(q+6+.4),R),Se.push({x:R.x,y:R.y-.9,z:R.z,ry:R.heading,sx:.9,sy:1.8,sz:8.3,color:X});It(e,be+4,0,R),Se.push({x:R.x,y:R.y-1.25,z:R.z,ry:R.heading,sx:q*2+12,sy:.9,sz:8.3,color:Z})}}let Ce=nr(a(new st({roughness:.9})),.8,.6);if(de.length){let J=Ki(ee,Ce,de);J.castShadow=!0,J.name="real-piers",r.add(J)}Se.length&&r.add(Ki(ee,Ce,Se));let H=e.length,Ve=J=>!!Es(e,Math.max(0,Math.min(H-1,J)),"tunnel"),ke=[],ze=[],De=new Re(12764876),Ye=new Re(8225160),Ne={x:0,y:0,z:0,heading:0};for(let J=0;J<H-4;J+=4)if(!Ve(J))for(let be of[-1,1]){let Me=be*(q+6-.7);It(e,J,Me,R),It(e,J+4,Me,Ne),ke.push({x:R.x,y:R.y+.4,z:R.z,ry:R.heading,sx:.12,sy:.8,sz:.12,color:Ye});let se=Math.hypot(Ne.x-R.x,Ne.z-R.z)+.05,we=Math.atan2(Ne.x-R.x,Ne.z-R.z);for(let oe of[.42,.72])ze.push({x:(R.x+Ne.x)/2,y:(R.y+Ne.y)/2+oe,z:(R.z+Ne.z)/2,ry:we,sx:.07,sy:.2,sz:se,color:De})}let N=a(new st({roughness:.35,metalness:.85}));ke.length&&r.add(Ki(ee,N,ke),Ki(ee,N,ze));let A=Wm({track:e,data:s,baked:s.props,heightAt:y,clearance:ce});r.add(A.group),o.push(A);let j=[];for(let J of s.places){if(J.kind!=="place")continue;let be=1/0,Me=0;for(let we=0;we<e.count;we+=10){let oe=e.pts[we],Te=(oe.x-J.x)**2+(oe.z-J.z)**2;Te<be&&(be=Te,Me=we)}let se=Math.sqrt(be);se<2600&&j.push({name:J.name,s:Me*e.step,dist:se})}j.sort((J,be)=>J.s-be.s);let ge=a(new Pn(1,1)),_e=[];for(let J of j){if(_e.some(oe=>Math.abs(oe.s-J.s)<500)||J.s<120||J.s>H-150||Ve(J.s)||Ve(J.s-60))continue;_e.push(J);let be=VS([J.name,J.dist>600?`${(J.dist/1e3).toFixed(1).replace(".",",")} km`:""]),Me=a(new Xt({map:be,color:be?16777215:817731,side:Ct}));be&&a(be),It(e,J.s,q+6+2.2,R);let se=new ot(ge,Me);se.scale.set(7.5,2.8,1),se.position.set(R.x,R.y+5.2,R.z),se.rotation.y=R.heading+Math.PI,r.add(se);let we=new ot(ee,N);we.scale.set(.3,5.2,.3),we.position.set(R.x,R.y+2.2,R.z),r.add(we)}let fe=(J,be,Me)=>{let se=Math.sin(J*127.1+be*311.7+Me*74.7)*43758.5453;return se-Math.floor(se)},Ie=Hn(5,5,5,.5,(J,be,Me)=>{let se=J-2,we=Me-2,oe=(be-1.6)*1.2;if(se*se+oe*oe+we*we>5.4+fe(J,be,Me))return null;let Te=fe(J+3,be,Me+7);return Te>.72?[.92,.42,.6]:Te>.62?[.96,.93,.9]:[.16,.38,.17]},.2);a(Ie);let Fe=[];for(let J=60;J<H-20;J+=i.range(5,11)){if(Ve(J)||e.bridges.some(Me=>J>Me.s0-4&&J<Me.s1+4))continue;if(i.next()<.25){J+=i.range(15,50);continue}let be=i.next()<.5?-1:1;It(e,J,be*(q+6+i.range(1.2,2.4)),R),Fe.push({x:R.x,y:R.y-.5,z:R.z,ry:i.range(0,6.28),sx:i.range(.8,1.3),sy:i.range(.8,1.3),sz:i.range(.8,1.3)})}if(Fe.length){let J=Ki(Ie,a(new st({vertexColors:!0,roughness:.9})),Fe);J.castShadow=!0,J.name="real-oleanders",r.add(J)}n.add(r);let Oe=new k;function Ge(J,be,Me){v.position.set(Me.x,0,Me.z),_.position.x=Me.x,_.position.z=Me.z,I.position.copy(Me).addScaledVector(E,200),I.target.position.copy(Me),Oe.copy(Me),b.position.set(Oe.x*(1-jh),-2,Oe.z*(1-jh))}function Ee(){n.remove(r),n.fog&&n.fog!==w&&(n.fog=w||null),n.background=M||null;for(let J of o)J.dispose?.()}return{group:r,sun:I,update:Ge,dispose:Ee,heightAt:y,places:_e,allPlaces:j,buildingStats:{kept:U.length,dropped:ve,lowered:ue},treeCount:ne,props:A.placed,propsSkipped:A.skipped}}var GS=[-5,0,5],Xc=[{id:"car",len:4.4,w:1.9,h:1.45,v:[31,37],lanes:[0,1,2]},{id:"van",len:5.8,w:2.1,h:2.35,v:[28,32],lanes:[1,2]},{id:"bus",len:11.5,w:2.5,h:3.3,v:[25,28],lanes:[2]},{id:"truck",len:13.5,w:2.5,h:3.8,v:[22,25],lanes:[2]}],Ym=[0,0,0,0,0,1,1,2,3,3],WS=.45,XS=1,qS=1.5,YS=12,$S=5,ZS=3,KS=5;function $m({rng:n,count:e=22,density:t=1}={}){let i=[];for(let u=0;u<e;u++)i.push({id:u,type:Xc[0],lane:1,s:-1e9,d:0,speed:30,cruise:30,color:0,passed:!0,hitT:0});let s={vehicles:i,combo:0,comboT:0,meter:0,nearMisses:0,hits:0,events:[],density:t},r=!1;function o(u,f,p=30,g=30){let x=0;for(let m of i)m!==f&&m.s>u-p&&m.s<u+g&&(x|=1<<m.lane);return x}function a(u,f){let p=Xc[Ym[n.int(0,Ym.length-1)]],g=o(f,u,45,45),x=p.lanes.filter(d=>!(g&1<<d));return([0,1,2].filter(d=>g&1<<d).length>=2||!x.length)&&(f+=60,x=p.lanes),u.type=p,u.lane=x[n.int(0,x.length-1)],u.d=GS[u.lane]+n.range(-.35,.35),u.cruise=u.speed=n.range(p.v[0],p.v[1]),u.color=n.int(0,7),u.s=f,u.passed=!1,u.hitT=0,f}function c(u,f=350){let p=u+f;for(let g of i)p=a(g,p)+n.range(70,190)/t;r=!0}function l(u,f,p){s.events.length=0,r||c(f.s);let g=-1/0;for(let x of i)x.s>g&&(g=x.s);for(let x of i){let m=x.cruise,d=0,b=1/0;for(let y of i){if(y===x||y.lane===x.lane)continue;let _=y.s-x.s;_>-8&&_<45&&(d|=1<<y.lane,y.speed<b&&(b=y.speed))}d===(7&~(1<<x.lane))&&(m=Math.min(m,b-.5));for(let y of i){if(y===x||y.lane!==x.lane)continue;let _=y.s-x.s-(y.type.len+x.type.len)/2;_>0&&_<25&&(m=Math.min(m,y.speed))}x.speed+=(m-x.speed)*Math.min(1,u*1.5),x.s+=x.speed*u,x.hitT>0&&(x.hitT-=u),x.s<f.s-70&&(g=a(x,Math.max(g+n.range(70,190)/t,f.s+650)))}for(let x of p){let m=x.state;for(let d of i){let b=m.s-d.s,y=m.d-d.d,_=d.type.len/2+XS,E=d.type.w/2+WS;if(Math.abs(b)<_&&Math.abs(y)<E){if(d.hitT<=0||x.isPlayer){let T=y!==0?Math.sign(y):m.d<d.d?-1:1;m.d=d.d+T*(E+.05),m.speed>d.speed*.95&&(m.speed=Math.max(d.speed*.9,m.speed*.5),m.boostT=0,d.hitT<=0&&(m.events?.push("hit"),x.isPlayer&&(s.hits++,s.combo=0,s.meter=0,s.events.push({type:"hit",vehicle:d})))),d.hitT=1.2}x.isPlayer&&(d.passed=!0)}else if(x.isPlayer&&!d.passed&&b>_&&(d.passed=!0,Math.abs(y)<E+qS&&m.speed-d.speed>YS)){s.nearMisses++,s.combo++,s.comboT=$S,s.meter++;let T=!1;s.meter>=ZS&&(s.meter=0,m.boostCharges<KS&&(m.boostCharges+=1,T=!0)),s.events.push({type:"near",vehicle:d,combo:s.combo,boost:T})}}}s.comboT>0&&(s.comboT-=u,s.comboT<=0&&(s.combo=0))}function h(u){for(let f of i)f.s+=u}return Object.assign(s,{update:l,reset:c,shift:h})}var JS=[14212578,12067627,2051996,3093304,15788504,9080726,1928010,14722347];function Cs(n){let e=[],t=[],i=[],s=[[1,0,0,[1,-1,-1,1,1,-1,1,1,1,1,-1,1]],[-1,0,0,[-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1]],[0,1,0,[-1,1,1,1,1,1,1,1,-1,-1,1,-1]],[0,-1,0,[-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1]],[0,0,1,[1,-1,1,1,1,1,-1,1,1,-1,-1,1]],[0,0,-1,[-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1]]];for(let[o,a,c,l,h,u,f=1,p=1,g=1]of n)for(let[x,m,d,b]of s)for(let y of[0,1,2,0,2,3])e.push(o+b[y*3]*l/2,a+b[y*3+1]*h/2,c+b[y*3+2]*u/2),t.push(x,m,d),i.push(f,p,g);let r=new gt;return r.setAttribute("position",new ct(e,3)),r.setAttribute("normal",new ct(t,3)),r.setAttribute("color",new ct(i,3)),r}var qc=[.12,.16,.22],jS=[.07,.07,.08],Yc=[.95,.08,.06],$c=[1,.95,.75],QS=[.86,.87,.88],eE=[.2,.21,.23];function Zc(n,e,t,i){let s=[];for(let r of i)for(let o of[-1,1])s.push([o*(n/2-.12),t,r,.3,t*2,t*2,...jS]);return s}function tE(n){let{len:e,w:t,h:i}=n,s=-e/2,r=e/2,o=[[-t/2+.3,.75,s-.02,.4,.22,.08,...Yc],[t/2-.3,.75,s-.02,.4,.22,.08,...Yc],[-t/2+.3,.7,r+.02,.4,.2,.08,...$c],[t/2-.3,.7,r+.02,.4,.2,.08,...$c]];if(n.id==="car")return[Cs([[0,.62,0,t,.64,e],[0,1.37,-.25,t*.86,.14,e*.5]]),Cs([[0,1.1,-.25,t*.88,.42,e*.52,...qc],...Zc(t,e,.32,[e*.3,-e*.3]),...o])];if(n.id==="van")return[Cs([[0,1.25,-.5,t,1.9,e-1.2],[0,.85,r-.55,t,1.1,1.1]]),Cs([[0,1.75,r-.62,t*.92,.7,1,...qc],...Zc(t,e,.36,[e*.32,-e*.3]),...o])];if(n.id==="bus")return[Cs([[0,1,0,t,1.3,e],[0,3.05,0,t,.5,e]]),Cs([[0,2.2,0,t*1.01,1.15,e*.985,...qc],...Zc(t,e,.5,[e*.33,-e*.3]),...o])];let a=2.5;return[Cs([[0,1.75,r-a/2,t,2.5,a]]),Cs([[0,2.25,s+(e-a-.5)/2,t,3.1,e-a-.5,...QS],[0,.75,s+(e-a)/2,t*.5,.3,e-a,...eE],[0,2.35,r-.4,t*.92,.85,.85,...qc],...Zc(t,e,.52,[r-1.2,s+1.4,s+2.7,s+4]),[-t/2+.3,1,s-.02,.4,.25,.08,...Yc],[t/2-.3,1,s-.02,.4,.25,.08,...Yc],[-t/2+.3,.9,r+.02,.4,.2,.08,...$c],[t/2-.3,.9,r+.02,.4,.2,.08,...$c]])]}function Zm(n,e){let t=new ht;t.name="traffic";let i=new Map(Xc.map(u=>[u.id,tE(u)])),s=JS.map(u=>new jn({color:u})),r=new jn({vertexColors:!0}),o=[];for(let u=0;u<e;u++){let f=new ht,p=new ot(i.get("car")[0],s[0]),g=new ot(i.get("car")[1],r);p.castShadow=!0,g.castShadow=!0,f.add(p,g),f.visible=!1,t.add(f),o.push({g:f,body:p,detail:g,type:null,color:-1})}n.add(t);let a={};function c(u,f,p){for(let g=0;g<o.length;g++){let x=o[g],m=u.vehicles[g],d=m?m.s-p:1e9;if(!m||d<-120||d>1400){x.g.visible=!1;continue}if(x.type!==m.type.id){x.type=m.type.id;let[b,y]=i.get(m.type.id);x.body.geometry=b,x.detail.geometry=y}x.color!==m.color&&(x.color=m.color,x.body.material=s[m.color%s.length]),It(f,m.s,m.d,a),x.g.position.set(a.x,a.y,a.z),x.g.rotation.set(-Math.atan(a.slope||0),a.heading,0,"YXZ"),x.g.visible=!0}}function l(){for(let u of o)u.g.visible=!1}function h(){n.remove(t);for(let[u,f]of i.values())u.dispose(),f.dispose();for(let u of s)u.dispose();r.dispose()}return{group:t,update:c,hide:l,dispose:h}}var Km="polygon-rush-v3-records",nE=new Set(["rally","rain"]);function Jm(){try{let n=globalThis.localStorage?.getItem(Km),e=n?JSON.parse(n):null;if(e&&typeof e=="object")return{splits:e.splits||{},total:e.total??null,runs:e.runs||0,finishes:e.finishes||0}}catch{}return{splits:{},total:null,runs:0,finishes:0}}function Kc(n){try{return globalThis.localStorage?.setItem(Km,JSON.stringify(n)),!0}catch{return!1}}function Qh(n){if(!Number.isFinite(n))return"\u2013";let e=Math.floor(n/60),t=n-e*60;return`${e}'${String(Math.floor(t)).padStart(2,"0")}"${Math.floor(t*10%10)}`}function jm(n){let e=Math.abs(n);return`${n<0?"\u2212":"+"}${e>=60?Qh(e):e.toFixed(1).replace(".",'"')}`}function Qm(n,e,t){let i=n.splits[e]??null,s=i===null||t<i;return s&&(n.splits[e]=Math.round(t*1e3)/1e3),{time:t,best:i,delta:i===null?null:t-i,record:s}}function e0(n,e){let t=n.total,i=t===null||e<t;return i&&(n.total=Math.round(e*1e3)/1e3),{time:e,best:t,delta:t===null?null:e-t,record:i}}function t0(n){return n.filter(e=>!nE.has(e.id))}function n0(n=document.body){let e=document.createElement("div");e.style.cssText="position:fixed;left:50%;top:13vmin;transform:translateX(-50%);display:none;gap:1.2vmin;z-index:35;font-family:Arial,Helvetica,sans-serif;pointer-events:auto;align-items:stretch";let t=document.createElement("div");t.style.cssText="position:fixed;left:50%;top:11.6vmin;transform:translateX(-50%);width:54vmin;height:0.7vmin;display:none;background:rgba(255,255,255,.18);z-index:35;border-radius:1vmin;overflow:hidden";let i=document.createElement("div");i.style.cssText="height:100%;width:100%;background:#ffd23f;transform-origin:left center",t.appendChild(i),n.append(t,e);let s=[],r=null,o=0,a=0;function c(){e.style.display="none",t.style.display="none",s=[],r=null}function l(f){if(!s.length)return!1;let p=s[Math.max(0,Math.min(s.length-1,f))],g=r;return c(),g?.(p),!0}function h(f,p,g=9){c(),f.length&&(s=f.slice(0,3),r=p,o=a=g,e.textContent="",s.forEach((x,m)=>{let d=document.createElement("button");d.type="button",d.style.cssText=`all:unset;cursor:pointer;width:27vmin;padding:1.1vmin 1.4vmin;border-radius:1vmin;color:#fff;background:rgba(12,18,34,.82);border:0.3vmin solid ${m===0?"#ffd23f":"rgba(255,255,255,.28)"};box-sizing:border-box`;let b=y=>String(y).replace(/[&<>]/g,_=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[_]);d.innerHTML=`<div style="font:bold 2.1vmin Arial;display:flex;gap:1vmin;align-items:center"><span style="background:#ffd23f;color:#111;border-radius:.6vmin;padding:.1vmin .9vmin">${m+1}</span><span>${b(x.icon||"")} ${b(x.name)}</span></div><div style="font:1.55vmin Arial;color:#8ef0a8;margin-top:.7vmin">\u25B2 ${b(x.pro)}</div><div style="font:1.55vmin Arial;color:#ff9a8a;margin-top:.3vmin">\u25BC ${b(x.con)}</div>`,d.addEventListener("click",()=>l(m)),e.appendChild(d)}),e.style.display="flex",t.style.display="block")}function u(f){s.length&&(o-=f,i.style.transform=`scaleX(${Math.max(0,o/a)})`,o<=0&&l(0))}return{show:h,pick:l,update:u,hide:c,get active(){return s.length>0},dispose(){e.remove(),t.remove()}}}var Jc=class extends Yi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new af(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new xf(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new yf(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new pf(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new gf(t)}),this.register(function(t){return new mf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new vf(t)}),this.register(function(t){return new Mf(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ss.extractUrlBase(e);o=Ss.resolveURL(l,this.path)}else o=Ss.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Xo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===a0){try{o[xt.KHR_BINARY_GLTF]=new bf(e)}catch(u){s&&s(u);return}r=JSON.parse(o[xt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Cf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case xt.KHR_MATERIALS_UNLIT:o[u]=new rf;break;case xt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Sf(r,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:o[u]=new Ef;break;case xt.KHR_MESH_QUANTIZATION:o[u]=new Tf;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function iE(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},sf=class{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Re(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],yn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new bi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new gc(h),l.distance=u;break;case"spot":l=new eo(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ji(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}},rf=class{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return Xt}extendParams(e,t,i){let s=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],yn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(s)}},of=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},af=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:kn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(a,a)}return Promise.all(r)}},cf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:kn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},lf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:kn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},uf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:kn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],yn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Rt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},hf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:kn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},ff=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:kn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(a[0],a[1],a[2],yn),Promise.all(r)}},df=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:kn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},pf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:kn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(a[0],a[1],a[2],yn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Rt)),Promise.all(r)}},mf=class{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:kn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},gf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:kn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},xf=class{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},_f=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},yf=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},vf=class{constructor(e){this.name=xt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,f,s.mode,s.filter),p})})}else return null}},Mf=class{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let l of s.primitives)if(l.mode!==ni.TRIANGLES&&l.mode!==ni.TRIANGLE_STRIP&&l.mode!==ni.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,p=[];for(let g of u){let x=new et,m=new k,d=new en,b=new k(1,1,1),y=new _n(g.geometry,g.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,_),c.SCALE&&b.fromBufferAttribute(c.SCALE,_),y.setMatrixAt(_,x.compose(m,d,b));for(let _ in c)if(_==="_COLOR_0"){let E=c[_];y.instanceColor=new $s(E.array,E.itemSize,E.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);Ft.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},a0="glTF",ra=12,i0={JSON:1313821514,BIN:5130562},bf=class{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ra),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==a0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ra,r=new DataView(e,ra),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===i0.JSON){let l=new Uint8Array(e,ra+o,a);this.content=i.decode(l)}else if(c===i0.BIN){let l=ra+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Sf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Af[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Af[h]||h.toLowerCase();if(o[h]!==void 0){let f=i.accessors[e.attributes[h]],p=ao[f.componentType];l[u]=p.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(p){for(let g in p.attributes){let x=p.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(p)},a,l,yn,f)})})}},Ef=class{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Tf=class{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}},jc=class extends vs{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(i-t)/h,f=u*u,p=f*u,g=e*l,x=g-l,m=-2*p+3*f,d=p-f,b=1-m,y=d-f+u;for(let _=0;_!==a;_++){let E=o[x+_+a],T=o[x+_+c]*h,v=o[g+_+a],w=o[g+_]*h;r[_]=b*E+y*T+m*v+d*w}return r}},sE=new en,wf=class extends jc{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return sE.fromArray(r).normalize().toArray(r),r}},ni={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ao={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},s0={9728:on,9729:In,9984:ph,9985:Do,9986:Pr,9987:Zn},r0={33071:zi,33648:Bo,10497:Vi},ef={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Af={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},rE={CUBICSPLINE:void 0,LINEAR:Wr,STEP:Gr},tf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function oE(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new st({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mi})),n.DefaultMaterial}function or(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ji(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function aE(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(i){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function cE(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lE(n){let e,t=n.extensions&&n.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+nf(t.attributes):e=n.indices+":"+nf(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+nf(n.targets[i]);return e}function nf(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Rf(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uE(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var hE=new et,Cf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new iE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new mc(this.options.manager):this.textureLoader=new xc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return or(r,a,s),Ji(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(Ss.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=ef[s.type],a=ao[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new mt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=ef[s.type],l=ao[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(p&&p!==u){let d=Math.floor(f/p),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,y=t.cache.get(b);y||(x=new l(a,d*p,s.count*p/h),y=new Kr(x,p/h),t.cache.add(b,y)),m=new Ys(y,c,f%p/h,g)}else a===null?x=new l(s.count*c):x=new l(a,f,s.count*c),m=new mt(x,c,g);if(s.sparse!==void 0){let d=ef.SCALAR,b=ao[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,E=new b(o[1],y,s.sparse.count*d),T=new l(o[2],_,s.sparse.count*c);a!==null&&(m=new mt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let v=0,w=E.length;v<w;v++){let M=E[v];if(m.setX(M,T[v*c]),c>=2&&m.setY(M,T[v*c+1]),c>=3&&m.setZ(M,T[v*c+2]),c>=4&&m.setW(M,T[v*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=s0[f.magFilter]||In,h.minFilter=s0[f.minFilter]||Zn,h.wrapS=r0[f.wrapS]||Vi,h.wrapT=r0[f.wrapT]||Vi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==on&&h.minFilter!==In,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new an(x);m.needsUpdate=!0,f(m)}),t.load(Ss.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Ji(u,o),u.userData.mimeType=o.mimeType||uE(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[xt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new Ks,Tn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new xs,Tn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return st}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},c=r.extensions||{},l=[];if(c[xt.KHR_MATERIALS_UNLIT]){let u=s[xt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],yn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Rt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ct);let h=r.alphaMode||tf.OPAQUE;if(h===tf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===tf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Xt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ke(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Xt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Xt){let u=r.emissiveFactor;a.emissive=new Re().setRGB(u[0],u[1],u[2],yn)}return r.emissiveTexture!==void 0&&o!==Xt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ji(u,r),t.associations.set(u,{materials:e}),r.extensions&&or(s,u,r),u})}createUniqueName(e){let t=Ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return o0(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=lE(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=o0(new gt,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?oE(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){let x=h[p],m=o[p],d,b=l[p];if(m.mode===ni.TRIANGLES||m.mode===ni.TRIANGLE_STRIP||m.mode===ni.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new oc(x,b):new ot(x,b),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===ni.TRIANGLE_STRIP?d.geometry=qh(d.geometry,Mc):m.mode===ni.TRIANGLE_FAN&&(d.geometry=qh(d.geometry,$o));else if(m.mode===ni.LINES)d=new Zs(x,b);else if(m.mode===ni.LINE_STRIP)d=new Jr(x,b);else if(m.mode===ni.LINE_LOOP)d=new hc(x,b);else if(m.mode===ni.POINTS)d=new _s(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&cE(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),Ji(d,r),m.extensions&&or(s,d,m),t.assignFinalMaterial(d),u.push(d)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&or(s,u[0],r),u[0];let f=new ht;r.extensions&&or(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=u.length;p<g;p++)f.add(u[p]);return f})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new $t(Cp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new gs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ji(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new et;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new cc(a,c)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let p=s.channels[u],g=s.samplers[p.sampler],x=p.target,m=x.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,b=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",b)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],g=u[2],x=u[3],m=u[4],d=[];for(let b=0,y=f.length;b<y;b++){let _=f[b],E=p[b],T=g[b],v=x[b],w=m[b];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let M=i._createAnimationTracks(_,E,T,v,w);if(M)for(let S=0;S<M.length;S++)d.push(M[S])}return new pc(r,void 0,d)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,hE)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Wo:l.length>1?h=new ht:l.length===1?h=l[0]:h=new Ft,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ji(h,r),r.extensions&&or(i,h,r),r.matrix!==void 0){let u=new et;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new ht;i.name&&(r.name=s.createUniqueName(i.name)),Ji(r,i),i.extensions&&or(t,r,i);let o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,p]of s.associations)(f instanceof Tn||f instanceof an)&&u.set(f,p);return h.traverse(f=>{let p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];Is[r.path]===Is.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Is[r.path]){case Is.weights:l=Wi;break;case Is.rotation:l=Xi;break;case Is.position:case Is.scale:l=qi;break;default:i.itemSize===1?l=Wi:l=qi;break}let h=s.interpolation!==void 0?rE[s.interpolation]:Wr,u=this._getArrayFromAccessor(i);for(let f=0,p=c.length;f<p;f++){let g=new l(c[f]+"."+Is[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Rf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Xi?wf:jc;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function fE(n,e,t){let i=e.attributes,s=new Jn;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new k(c[0],c[1],c[2]),new k(l[0],l[1],l[2])),a.normalized){let h=Rf(ao[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new k,c=new k;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let x=Rf(ao[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new zn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function o0(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(let o in i){let a=Af[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return pt.workingColorSpace!==yn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),Ji(n,e),fE(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?aE(n,e.targets,t):n})}var Ps={hi:null,lo:null},dE=["body","frame","bubble","headlight","tail","wheelRear","wheelFront","fork","torso","helmet","armR","armL","legR","legL"];async function If(n,e){let t=await n.loadAsync(e),i={},s={};for(let a of t.scene.children)a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.set(1,1,1),i[a.name]=a,a.traverse(c=>{c.isMesh&&c.material?.name&&(s[c.material.name]=c.material)});let r=dE.filter(a=>!i[a]);if(r.length)throw new Error(e+" incomplet : "+r.join(", "));let o=0;return i.armR.traverse(a=>{a.isMesh&&(a.geometry.computeBoundingBox(),o=Math.max(o,a.geometry.boundingBox.max.z))}),{parts:i,mats:s,armLength:o>.1?o/1.01:1}}async function c0(n="assets/"){if(Ps.lo)return Ps;let e=new Jc;return Ps.lo=await If(e,n+"bike_voxel.glb").catch(()=>If(e,n+"bike.glb")),Ps.hi=await If(e,n+"bike_voxel_hi.glb").catch(()=>Ps.lo),Ps}function l0(n="lo"){return Ps[n]||Ps.lo}var Zt=0,hn=1,Qi=2,tl=.32,el=-.7,g0=.7,ji=[0,-tl,-el],x0=[0,-tl,-g0],u0=.62,pE=.35,Ls=Math.PI*2,Xn=class{constructor(e){this.off=e||[0,0,0],this.pos=[],this.groups=[],this.slot=-1,this.gStart=0}setSlot(e){e!==this.slot&&(this.closeGroup(),this.slot=e)}closeGroup(){let e=this.pos.length/3;this.slot>=0&&e>this.gStart&&this.groups.push({start:this.gStart,count:e-this.gStart,materialIndex:this.slot}),this.gStart=e}tri(e,t,i,s){let r=this.off,o=e[0]+r[0],a=e[1]+r[1],c=e[2]+r[2],l=t[0]+r[0],h=t[1]+r[1],u=t[2]+r[2],f=i[0]+r[0],p=i[1]+r[1],g=i[2]+r[2],x=l-o,m=h-a,d=u-c,b=f-o,y=p-a,_=g-c,E=m*_-d*y,T=d*b-x*_,v=x*y-m*b,w=(o+l+f)/3-(s[0]+r[0]),M=(a+h+p)/3-(s[1]+r[1]),S=(c+u+g)/3-(s[2]+r[2]),I=this.pos;E*w+T*M+v*S>=0?I.push(o,a,c,l,h,u,f,p,g):I.push(o,a,c,f,p,g,l,h,u)}quad(e,t,i,s,r){this.tri(e,t,i,r),this.tri(e,i,s,r)}build(){this.closeGroup();let e=new gt;e.setAttribute("position",new ct(this.pos,3)),e.computeVertexNormals();for(let t of this.groups)e.addGroup(t.start,t.count,t.materialIndex);return e}};function mE(n){let e=0,t=0,i=0;for(let r of n)e+=r[0],t+=r[1],i+=r[2];let s=n.length;return[e/s,t/s,i/s]}function gE(n,e){return[(n[0]+e[0])/2,(n[1]+e[1])/2,(n[2]+e[2])/2]}function h0(n,e,t,i){let s=e.length;for(let r=0;r<s;r++)n.tri(t,e[r],e[(r+1)%s],i)}function Ds(n,e,t,i,s){let r=typeof t=="function"?t:()=>t,o=e.length,a=e[0].length,c=e.map(mE);for(let l=0;l<o-1;l++){let h=e[l],u=e[l+1],f=gE(c[l],c[l+1]);for(let p=0;p<a;p++){let g=(p+1)%a;n.setSlot(r(l,p)),n.quad(h[p],h[g],u[g],u[p],f)}}n.setSlot(i),h0(n,e[0],c[0],c[1]),n.setSlot(s),h0(n,e[o-1],c[o-1],c[o-2])}function Wn(n,e,t,i,s,r,o){let a=t[0]-e[0],c=t[1]-e[1],l=t[2]-e[2],h=Math.hypot(a,c,l)||1,u=[a/h,c/h,l/h],f=Math.abs(u[1])<.9?[0,1,0]:[1,0,0],p=[u[1]*f[2]-u[2]*f[1],u[2]*f[0]-u[0]*f[2],u[0]*f[1]-u[1]*f[0]],g=Math.hypot(p[0],p[1],p[2]);p=[p[0]/g,p[1]/g,p[2]/g];let x=[p[1]*u[2]-p[2]*u[1],p[2]*u[0]-p[0]*u[2],p[0]*u[1]-p[1]*u[0]],m=(d,b)=>{let y=[];for(let _=0;_<r;_++){let E=Ls*_/r,T=Math.cos(E)*b,v=Math.sin(E)*b;y.push([d[0]+T*p[0]+v*x[0],d[1]+T*p[1]+v*x[1],d[2]+T*p[2]+v*x[2]])}return y};Ds(n,[m(e,i),m(t,s)],o,o,o)}function cr(n,e,t,i){n.setSlot(i);let s=(a,c,l)=>[e[0]+a*t[0],e[1]+c*t[1],e[2]+l*t[2]],r=[s(-1,-1,-1),s(1,-1,-1),s(1,1,-1),s(-1,1,-1),s(-1,-1,1),s(1,-1,1),s(1,1,1),s(-1,1,1)],o=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]];for(let a of o)n.tri(r[a[0]],r[a[1]],r[a[2]],e),n.tri(r[a[0]],r[a[2]],r[a[3]],e)}var nl=3,aa=4;function xE(n,e,t,i,s,r,o,a,c){return[[0,e,n],[o,t,n],[a,i,n],[c,s,n],[0,r,n],[-c,s,n],[-a,i,n],[-o,t,n]]}function _E(){let n=new Xn(ji),t=[[1.02,.76,.755,.74,.72,.71,.02,.03,.02],[.9,.84,.81,.75,.7,.68,.07,.12,.08],[.7,.93,.87,.76,.7,.68,.1,.19,.13],[.45,.97,.9,.68,.58,.56,.12,.23,.16],[.3,.98,.92,.62,.36,.26,.13,.23,.17],[.05,1,.94,.62,.3,.19,.14,.21,.16],[-.2,.99,.93,.66,.32,.21,.13,.19,.13],[-.35,.85,.82,.68,.42,.34,.11,.15,.1],[-.5,.8,.79,.72,.64,.62,.1,.13,.08],[-.75,.9,.87,.8,.72,.7,.09,.12,.07],[-.98,.99,.96,.92,.88,.87,.05,.07,.04],[-1.1,1.02,1.01,1,.99,.985,.01,.015,.01]].map(i=>xE(...i));Ds(n,t,(i,s)=>{let r=s===0||s===7,o=s===1||s===6,a=s===2||s===5;return r?i===7||i===8?hn:Zt:o?i>=9?nl:Zt:a?i>=2&&i<=5?nl:i>=7&&i<=8?hn:Zt:i>=3&&i<=6?Qi:hn},Zt,Zt);for(let i of[-1,1])Wn(n,[.11*i,.46,-.26],[.1*i,.32,-.7],.04,.03,5,aa),Wn(n,[.14*i,.44,-.3],[.22*i,.42,-.32],.018,.018,4,hn),Wn(n,[.1*i,.95,.42],[.27*i,.93,.35],.02,.02,4,hn);return Wn(n,[.15,.22,.1],[.17,.3,-.45],.04,.04,5,aa),Wn(n,[.17,.3,-.45],[.2,.52,-.92],.05,.065,6,aa),Wn(n,[.2,.52,-.92],[.205,.535,-.95],.065,.05,6,hn),cr(n,[0,.685,-.74],[.06,.012,.16],hn),n.build()}function yE(){let n=new Xn(ji),e=(t,i,s,r)=>[[0,i,t],[r,s,t],[0,s-.02,t],[-r,s,t]];return Ds(n,[e(.76,.925,.91,.07),e(.58,1.06,.94,.12),e(.42,1.13,.97,.11)],Zt,Zt,Zt),n.build()}function vE(){let n=new Xn(ji);return cr(n,[0,.985,-1.085],[.04,.02,.014],Zt),n.build()}function ME(){let n=new Xn;return Wn(n,[0,0,0],[0,0,-.45],.05,.004,6,Zt),n.build()}function bE(){let n=new Xn(ji);for(let e of[-1,1]){let t=[.062*e,.795,.905];n.setSlot(Zt);let i=[[t[0]-.035,t[1]-.012,t[2]+.012],[t[0]+.035,t[1]+.004*e,t[2]-.02],[t[0]+.03,t[1]+.022,t[2]-.03],[t[0]-.03,t[1]+.02,t[2]-.004]];n.quad(i[0],i[1],i[2],i[3],[t[0],t[1],t[2]-.2])}return n.build()}function SE(){let n=new Xn(x0);for(let i of[-1,1])Wn(n,[.085*i,.32,.7],[.085*i,.56,.615],.032,.032,5,hn),Wn(n,[.085*i,.56,.615],[.085*i,.88,.5],.024,.024,5,Qi),cr(n,[.1*i,.33,.74],[.012,.05,.035],aa);let e=.34,t=[];for(let i of[-.75,-.25,.3,.85,1.25]){let s=.32+Math.cos(i),r=.7+Math.sin(i),o=(a,c)=>[a,.32+c*Math.cos(i),.7+c*Math.sin(i)];t.push([o(-.075,e-.005),o(-.04,e+.03),o(.04,e+.03),o(.075,e-.005)])}return Ds(n,t,Zt,Zt,Zt),n.build()}function f0(n,e){let t=new Xn,i=14,s=(o,a)=>{let c=[];for(let l=0;l<i;l++){let h=Ls*l/i;c.push([o,a*Math.cos(h),a*Math.sin(h)])}return c};Ds(t,[[-.62,.215],[-1,.27],[-.8,.305],[0,.32],[.8,.305],[1,.27],[.62,.215]].map(([o,a])=>s(o*n,a)),hn,hn,hn);for(let o of[-1,1]){let a=o*(.62*n+.004),c=[a,0,0],l=[0,0,0],h=10;for(let u=0;u<h;u++){let f=Ls*u/h,p=Ls*(u+1)/h;t.setSlot(u%2?hn:Qi),t.tri(c,[a,.215*Math.cos(f),.215*Math.sin(f)],[a,.215*Math.cos(p),.215*Math.sin(p)],l)}if(e){let u=o*(.62*n+.012);t.setSlot(aa);for(let f=0;f<h;f++){let p=Ls*f/h,g=Ls*(f+1)/h;t.quad([u,.09*Math.cos(p),.09*Math.sin(p)],[u,.16*Math.cos(p),.16*Math.sin(p)],[u,.16*Math.cos(g),.16*Math.sin(g)],[u,.09*Math.cos(g),.09*Math.sin(g)],l)}}}return t.build()}function EE(){let n=new Xn,e=[0,.11,.015],t=[.125,.135,.155],i=10,s=6,r=[];for(let o=1;o<s;o++){let a=-Math.PI/2+Math.PI*o/s,c=Math.cos(a),l=[];for(let h=0;h<i;h++){let u=Ls*(h+.5)/i;l.push([e[0]+t[0]*c*Math.cos(u),e[1]+t[1]*Math.sin(a),e[2]+t[2]*c*Math.sin(u)])}r.push(l)}return Ds(n,r,(o,a)=>{let c=Ls*(a+1)/i;return Math.sin(c)>.45&&(o===1||o===2)?hn:Math.abs(Math.cos(c))<.35?Qi:Zt},hn,Zt),n.build()}function oa(n,e,t,i){return[[e,n,0],[e*.55,n,t],[-e*.55,n,t],[-e,n,0],[-e*.55,n,-i],[e*.55,n,-i]]}function TE(){let n=new Xn,e=[oa(-.08,.13,.09,.1),oa(.04,.145,.1,.1),oa(.22,.185,.11,.11),oa(.38,.205,.1,.1),oa(.45,.09,.06,.07)];return Ds(n,e,(t,i)=>t===0?Qi:t===2&&(i===0||i===2||i===3||i===5)?nl:Zt,hn,hn),Ds(n,[[[.07,.4,-.08],[0,.42,-.06],[-.07,.4,-.08],[0,.39,-.13]],[[.06,.28,-.11],[0,.29,-.09],[-.06,.28,-.11],[0,.27,-.19]],[[.03,.14,-.1],[0,.14,-.09],[-.03,.14,-.1],[0,.14,-.13]]],Qi,Qi,Qi),n.build()}function d0(n){let e=new Xn,t=[.09*n,-.09,.5];return Wn(e,[0,0,0],t,.058,.048,5,Zt),Wn(e,t,[0,0,.93],.046,.038,5,Zt),cr(e,[0,0,.97],[.042,.04,.05],hn),cr(e,[0,.015,.02],[.052,.04,.05],nl),e.build()}function p0(n){let e=new Xn,t=[.11*n,-.19,.42],i=[.085*n,-.47,.05];return Wn(e,[0,0,0],t,.082,.066,6,Zt),Wn(e,t,i,.062,.05,5,Zt),cr(e,[t[0]+.035*n,t[1]-.02,t[2]+.02],[.025,.05,.045],Qi),cr(e,[i[0],i[1]-.04,i[2]+.04],[.045,.05,.115],hn),e.build()}var Pf=null;function wE(){return Pf||(Pf={body:_E(),bubble:yE(),tail:vE(),flame:ME(),fork:SE(),headlight:bE(),wheelRear:f0(.1,!1),wheelFront:f0(.068,!0),helmet:EE(),torso:TE(),armR:d0(-1),armL:d0(1),legR:p0(-1),legL:p0(1)}),Pf}var gi=(n,e,t)=>n<e?e:n>t?t:n,_0=n=>gi(n,0,1),ar=n=>Number.isFinite(n)?n:0,Qc=n=>typeof n=="boolean"?n?1:0:_0(ar(n));function ii(n,e){return n.name=e,n}function m0(n,e,t,i){let s=new ot(n,e);return s.name=t,s.castShadow=i,s.receiveShadow=!1,s}function y0({color:n=14034984,accent:e=16761395,isPlayer:t=!1,detail:i="lo"}={}){let s=wE(),r=Ce=>new st({flatShading:!0,side:Ct,...Ce}),o=r({color:new Re(n),metalness:.35,roughness:.3}),a=r({color:1382173,metalness:.2,roughness:.7}),c=r({color:new Re(e),metalness:.45,roughness:.35}),l=r({color:15856108,metalness:.15,roughness:.45}),h=r({color:11120312,metalness:.9,roughness:.32}),u=[o,a,c,l,h],f=r({color:792614,metalness:.6,roughness:.08,transparent:!0,opacity:.55,depthWrite:!1}),p=r({color:16777215,emissive:16774358,emissiveIntensity:2.4}),g=r({color:3342336,emissive:16718362,emissiveIntensity:.8}),x=l0(i),m=null;if(x){let Ce=(H,Ve)=>{let ke=x.mats[H].clone();return ke.color.set(Ve),ke};m={Paint:Ce("Paint",n),Suit:Ce("Suit",n),Accent:Ce("Accent",e),Tail:x.mats.Tail.clone()}}function d(Ce,H,Ve,ke,ze){if(!x)return m0(H,Ve,Ce,ke);let De=x.parts[Ce].clone(!0);return De.name=Ce,ze&&De.position.set(ze[0],ze[1],ze[2]),De.traverse(Ye=>{Ye.isMesh&&(Ye.material=m[Ye.material.name]||Ye.material,Ye.castShadow=ke)}),De}let b=r({color:0,emissive:8382975,emissiveIntensity:1.5,transparent:!0,opacity:.85,depthWrite:!1}),y=ii(new ht,"bike"),_=ii(new ht,"leanPivot"),E=ii(new ht,"pitchPivot");E.position.set(0,tl,el);let T=ii(new ht,"rearWheel");T.add(d("wheelRear",s.wheelRear,u,!0));let v=ii(new ht,"chassis"),w=d("body",s.body,u,!0,ji),M=d("bubble",s.bubble,f,!1,ji),S=d("tail",s.tail,g,!1,ji),I=d("headlight",s.headlight,p,!1,ji),B=m0(s.flame,b,"flame",!1);B.position.set(.205,.215,-.26),B.rotation.x=-.42,B.scale.z=.02,B.visible=!1;let z=ii(new ht,"hips");z.position.set(0,u0,pE);let L=ii(new ht,"torso"),F=ii(new ht,"head");F.position.set(0,.45,.01),F.add(d("helmet",s.helmet,u,!0)),L.add(d("torso",s.torso,u,!0),F);let U=d("armR",s.armR,u,!0),Y=d("armL",s.armL,u,!0),V=ii(new ht,"legR");V.position.set(-.12,-.02,0),V.add(d("legR",s.legR,u,!0));let ie=ii(new ht,"legL");ie.position.set(.12,-.02,0),ie.add(d("legL",s.legL,u,!0)),z.add(L,U,Y,V,ie),v.add(w,M,S,I,B,z),x&&v.add(d("frame",null,null,!0,ji));let ce=ii(new ht,"steerPivot");ce.position.set(0,0,g0-el);let xe=d("fork",s.fork,u,!0,x0),ve=ii(new ht,"frontWheel");if(ve.add(d("wheelFront",s.wheelFront,u,!0)),ce.add(xe,ve),E.add(T,v,ce),_.add(E),y.add(_),t){let Ce=new eo(16773590,60,60,.5,.6,2);Ce.name="headSpot",Ce.castShadow=!1,Ce.position.set(0,1,.9),Ce.target.position.set(0,.2,30),Ce.target.name="headSpotTarget",y.add(Ce,Ce.target)}let ue={lean:0,steer:0,pitch:0,compress:0,sr:0,brake:0,air:0,drift:0,boost:0},ee=.2,te=.37,ne=.02,R=[.25,.93-tl,.36-el],q=new k,X=new k,Z=new k(0,0,1);function de(Ce,H){q.set(ee*H,te,ne).applyEuler(L.rotation),X.set(R[0]*H-z.position.x,R[1]-z.position.y,R[2]-z.position.z);let Ve=Math.cos(-z.rotation.z),ke=Math.sin(-z.rotation.z),ze=X.x*Ve-X.y*ke,De=X.x*ke+X.y*Ve;X.x=ze,X.y=De,Ce.position.copy(q),X.sub(q);let Ye=X.length()||1;Ce.scale.z=Ye/(x?x.armLength:1),Ce.quaternion.setFromUnitVectors(Z,X.multiplyScalar(1/Ye))}function Se(Ce,H){let Ve=Ce||{},ke=Number.isFinite(H)?gi(H,0,.1):1/60,ze=1-Math.exp(-ke*14),De=1-Math.exp(-ke*5);ue.lean+=(gi(ar(Ve.lean),-1.5,1.5)-ue.lean)*ze,ue.steer+=(gi(ar(Ve.steer),-1,1)-ue.steer)*ze,ue.pitch+=(gi(ar(Ve.pitch),-.9,.9)-ue.pitch)*ze,ue.compress+=(gi(ar(Ve.compress),-1,1)-ue.compress)*ze,ue.sr+=(_0(ar(Ve.speedRatio))-ue.sr)*De,ue.brake+=(Qc(Ve.braking)-ue.brake)*De,ue.air+=(Qc(Ve.airborne)-ue.air)*De,ue.drift+=(Qc(Ve.drift)-ue.drift)*De,ue.boost+=(Qc(Ve.boost)-ue.boost)*De;let Ye=ue.lean,Ne=(Number.isFinite(Ve.speed)?Ve.speed:ue.sr*80)*3.6;_.rotation.z=Ye,E.rotation.x=-ue.pitch,ce.rotation.y=-.45*ue.steer*gi(1-2*ue.sr,0,1),v.position.y=-.07*ue.compress;let N=gi((Ne-20)/100,0,1),A=gi(Math.abs(Ye)*2.27,0,1),j=Ye>=0?1:-1,ge=A*(1-gi((Ne-30)/30,0,1));z.position.x=-.17*A*j,z.position.y=u0+.1*ue.air,z.rotation.z=-.2*A*j,L.rotation.x=gi(.45+.55*N-.2*ue.brake-.25*ue.air+.1*ue.boost,.2,1.05),L.rotation.z=-.1*A*j,F.rotation.x=-.35*N+.1*ue.air,F.rotation.y=-.35*A*j,F.rotation.z=-.4*Ye;let _e=.55*A+.3*ge;V.rotation.y=j>0?-_e:0,ie.rotation.y=j<0?_e:0,de(U,-1),de(Y,1),(m?m.Tail:g).emissiveIntensity=(m?2:.8)+(m?6:2.2)*ue.brake,B.visible=ue.boost>.03,B.scale.z=.02+1.3*ue.boost,b.emissiveIntensity=1.5+2*ue.boost;let fe=ar(Ve.wheelSpin);T.rotation.x=fe,ve.rotation.x=fe}return Se({},0),{group:y,update:Se}}var v0=Math.PI*2,jt=6e3,co=2200,M0=60,b0=30,S0=60,AE=3,ca=2e3,lr=170,Nf=1.5,RE=13,E0=RE-Nf,Lf=120,CE={dust:{life:.9,grav:-1.2,drag:2.2,spread:1.6,lift:[.6,1.8],s0:.35,s1:1.5,a0:.3,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!1},smoke:{life:.8,grav:-.8,drag:1.2,spread:.9,lift:[.5,1.3],s0:.35,s1:1.3,a0:.16,c0:[.89,.9,.92],c1:[.62,.64,.67],add:!1,bounce:!1,ring:!1},spark:{life:.6,grav:18,drag:.25,spread:5.5,lift:[1.5,4.5],s0:.22,s1:.06,a0:1,c0:[1,.88,.4],c1:[1,.48,.1],add:!0,bounce:!0,ring:!1},spray:{life:.6,grav:9,drag:.5,spread:2.2,lift:[1.2,3.2],s0:.25,s1:.9,a0:.22,c0:[.71,.93,.98],c1:[.37,.66,.8],add:!1,bounce:!1,ring:!1},gravel:{life:.7,grav:20,drag:.15,spread:3.2,lift:[1.5,3.5],s0:.08,s1:.06,a0:1,c0:[.29,.26,.22],c1:[.14,.13,.11],add:!1,bounce:!0,ring:!1},boost:{life:.3,grav:-3,drag:3,spread:.8,lift:[0,.5],s0:.55,s1:.12,a0:.9,c0:[.25,.96,1],c1:[1,.25,.78],add:!0,bounce:!1,ring:!1},land:{life:.8,grav:0,drag:4,spread:0,lift:[.4,1],s0:.5,s1:1.8,a0:.32,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!0}},IE=new Re(16777215),PE=new Re(8386303);function Nn(n,e){return n+(e-n)*Math.random()}function la(n,e,t){return n<e?e:n>t?t:n}function Ns(n,e=0){return Number.isFinite(n)?n:e}function LE(n){return Number.isFinite(n)?la(n,0,.1):0}function Df(n,e){return n-e*Math.floor(n/e+.5)}function DE(){let n=globalThis.innerHeight||900,e=Math.min(globalThis.devicePixelRatio||1,2);return n*e}var NE=`
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
}`,UE=`
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
}`,FE=`
attribute float aAlpha;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,OE=`
uniform vec3 uColor;
varying float vAlpha;
void main() {
  gl_FragColor = vec4(uColor, vAlpha);
}`;function T0(n,e){let t=e||{},i=Ns(t.rain,0),s=Ns(t.wind,0),r=new Float32Array(jt*3),o=new Float32Array(jt*3),a=new Float32Array(jt*3),c=new Float32Array(jt*3),l=new Float32Array(jt*3),h=new Float32Array(jt),u=new Float32Array(jt),f=new Float32Array(jt),p=new Float32Array(jt),g=new Float32Array(jt),x=new Float32Array(jt),m=new Float32Array(jt),d=new Float32Array(jt),b=new Float32Array(jt),y=new Float32Array(jt),_=new Float32Array(jt),E=new Uint8Array(jt),T=0,v=!1,w=new gt,M=new mt(r,3).setUsage(Si),S=new mt(l,3).setUsage(Si),I=new mt(h,1).setUsage(Si),B=new mt(u,1).setUsage(Si),z=new mt(f,1).setUsage(Si);w.setAttribute("position",M),w.setAttribute("aColor",S),w.setAttribute("aSize",I),w.setAttribute("aAlpha",B),w.setAttribute("aMode",z);let L=new Et({uniforms:{uScale:{value:700}},vertexShader:NE,fragmentShader:UE,transparent:!0,depthWrite:!1,blending:oh,blendSrc:ah,blendDst:Oo,blendEquation:Bi}),F=new _s(w,L);F.frustumCulled=!1,n.add(F);function U(se,we,oe,Te,W,Ae,C,D=1){let O=CE[se];if(!O||!Number.isFinite(we)||!Number.isFinite(oe)||!Number.isFinite(Te))return;let K=Ns(W),he=Ns(Ae),Pe=Ns(C),Be=Math.min(jt,Math.max(0,Math.floor(Ns(D,1))));for(let He=0;He<Be;He++){let G=T;T=(T+1)%jt;let re,pe,me;if(O.ring){let Le=(Be>1?He/Be:Math.random())*v0+Math.random()*.2,$e=Nn(3.5,5.5);re=Math.cos(Le)*$e+K*.3,me=Math.sin(Le)*$e+Pe*.3,pe=Nn(O.lift[0],O.lift[1])+he*.3}else re=K+Nn(-O.spread,O.spread),me=Pe+Nn(-O.spread,O.spread),pe=he+Nn(O.lift[0],O.lift[1]);let ye=G*3;r[ye]=we+Nn(-.1,.1),r[ye+1]=oe,r[ye+2]=Te+Nn(-.1,.1),o[ye]=re,o[ye+1]=pe,o[ye+2]=me,p[G]=0,g[G]=O.life*Nn(.85,1.15),x[G]=O.drag,m[G]=O.grav,d[G]=O.s0*Nn(.85,1.2),b[G]=O.s1*Nn(.85,1.2),y[G]=O.a0,_[G]=oe,E[G]=O.bounce?1:0,f[G]=O.add?1:0,a[ye]=O.c0[0],a[ye+1]=O.c0[1],a[ye+2]=O.c0[2],c[ye]=O.c1[0],c[ye+1]=O.c1[1],c[ye+2]=O.c1[2]}Be>0&&(v=!0)}function Y(se){let we=!1;for(let oe=0;oe<jt;oe++){if(g[oe]<=0)continue;if(we=!0,p[oe]+=se,p[oe]>=g[oe]){g[oe]=0,u[oe]=0,h[oe]=0;continue}let Te=oe*3,W=Math.max(0,1-x[oe]*se),Ae=o[Te]*W,C=o[Te+1]*W-m[oe]*se,D=o[Te+2]*W,O=r[Te]+Ae*se,K=r[Te+1]+C*se,he=r[Te+2]+D*se;E[oe]&&K<_[oe]&&C<0&&(K=_[oe],C=-C*.35,Ae*=.6,D*=.6,E[oe]=0),o[Te]=Ae,o[Te+1]=C,o[Te+2]=D,r[Te]=O,r[Te+1]=K,r[Te+2]=he;let Pe=p[oe]/g[oe];h[oe]=d[oe]+(b[oe]-d[oe])*Pe,u[oe]=y[oe]*(1-Pe*Pe),l[Te]=a[Te]+(c[Te]-a[Te])*Pe,l[Te+1]=a[Te+1]+(c[Te+1]-a[Te+1])*Pe,l[Te+2]=a[Te+2]+(c[Te+2]-a[Te+2])*Pe}return we}let V=null;if(i>0){let se=new gt,we=new Float32Array(co*6),oe=new mt(we,3).setUsage(Si);se.setAttribute("position",oe);let Te=new Float32Array(co*3),W=new Float32Array(co),Ae=new Float32Array(co);for(let O=0;O<co;O++)Te[O*3]=(Math.random()-.5)*M0,Te[O*3+1]=-12+Math.random()*b0,Te[O*3+2]=(Math.random()-.5)*S0,W[O]=Nn(22,30),Ae[O]=Nn(.8,1.2);let C=new xs({color:12900095,transparent:!0,opacity:.16,depthWrite:!1}),D=new Zs(se,C);D.frustumCulled=!1,n.add(D),V={geo:se,mat:C,lines:D,attr:oe,pa:we,head:Te,fall:W,len:Ae,windX:5.5*s,windZ:2*s}}function ie(se,we,oe){let Te=V,W=Te.pa,Ae=Te.head,C=Te.windX,D=Te.windZ,O=we.x,K=we.y+AE,he=we.z;for(let Pe=0;Pe<co;Pe++){let Be=Pe*3,He=O+Df(Ae[Be]-O,M0),G=K+Df(Ae[Be+1]-K,b0),re=he+Df(Ae[Be+2]-he,S0),pe=Te.fall[Pe],me=C-oe.x,ye=-pe-oe.y,Le=D-oe.z,$e=.05*Te.len[Pe],Ze=Pe*6;W[Ze]=He-me*$e,W[Ze+1]=G-ye*$e,W[Ze+2]=re-Le*$e,W[Ze+3]=He,W[Ze+4]=G,W[Ze+5]=re,Ae[Be]=He+C*se,Ae[Be+1]=G-pe*se,Ae[Be+2]=re+D*se}Te.attr.needsUpdate=!0}let ce=new Float32Array(ca*4*3),xe=new Float32Array(ca*4),ve=new Uint16Array(ca*6);for(let se=0;se<ca;se++){let we=se*4;ve.set([we,we+1,we+2,we,we+2,we+3],se*6)}let ue=new gt,ee=new mt(ce,3).setUsage(Si),te=new mt(xe,1).setUsage(Si);ue.setAttribute("position",ee),ue.setAttribute("aAlpha",te),ue.setIndex(new mt(ve,1));let ne=new Et({uniforms:{uColor:{value:new Re(1315086)}},vertexShader:FE,fragmentShader:OE,transparent:!0,depthWrite:!1,side:Ct,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),R=new ot(ue,ne);R.frustumCulled=!1,n.add(R);let q=0,X=1/0,Z=-1;function de(se,we,oe,Te,W,Ae,C=.3,D=.5){if(![se,we,oe,Te,W,Ae,C,D].every(Number.isFinite))return;let O=Te-se,K=Ae-oe,he=Math.hypot(O,K);if(he<1e-4)return;let Pe=C*.5,Be=-K/he*Pe,He=O/he*Pe,G=la(D,0,1),re=we+.03,pe=W+.03,me=q*4;q=(q+1)%ca;let ye=ce,Le=me*3;ye[Le]=se+Be,ye[Le+1]=re,ye[Le+2]=oe+He,ye[Le+3]=se-Be,ye[Le+4]=re,ye[Le+5]=oe-He,ye[Le+6]=Te-Be,ye[Le+7]=pe,ye[Le+8]=Ae-He,ye[Le+9]=Te+Be,ye[Le+10]=pe,ye[Le+11]=Ae+He,xe[me]=G,xe[me+1]=G,xe[me+2]=G,xe[me+3]=G,me<X&&(X=me),me+3>Z&&(Z=me+3)}function Se(){if(Z<0)return;let se=X,we=Z-X+1;ee.clearUpdateRanges(),ee.addUpdateRange(se*3,we*3),ee.needsUpdate=!0,te.clearUpdateRanges(),te.addUpdateRange(se,we),te.needsUpdate=!0,X=1/0,Z=-1}let Ce=new ht;Ce.matrixAutoUpdate=!1,n.add(Ce);let H=new Float32Array(lr*6),Ve=new mt(H,3).setUsage(Si),ke=new gt;ke.setAttribute("position",Ve);let ze=new Float32Array(lr),De=new Float32Array(lr),Ye=new Float32Array(lr),Ne=new Float32Array(lr);for(let se=0;se<lr;se++){let we=Math.random()*v0,oe=Nn(.8,1.5);ze[se]=Math.cos(we)*oe,De[se]=Math.sin(we)*oe,Ye[se]=-Nf-Math.random()*E0,Ne[se]=Nn(.5,1.2)}let N=new xs({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),A=new Zs(ke,N);A.frustumCulled=!1,A.visible=!1,Ce.add(A);let j=0,ge=0,_e=0,fe=0;function Ie(se,we){_e+=(j-_e)*(1-Math.exp(-6*se)),fe+=(ge-fe)*(1-Math.exp(-8*se)),we.updateMatrixWorld(),Ce.matrix.copy(we.matrixWorld),Ce.matrixWorld.copy(we.matrixWorld);let oe=la((_e-.55)/.45,0,1),Te=Math.min(1,.55*oe*oe*(3-2*oe)+.6*fe),W=Math.floor(Te*lr);if(W<=0){A.visible=!1;return}A.visible=!0,ke.setDrawRange(0,W*2),N.color.copy(IE).lerp(PE,fe),N.opacity=.05+.24*Te;let Ae=(60+110*Te)*se,C=1.5+5*Te,D=H;for(let O=0;O<W;O++){let K=Ye[O]+Ae;K>-Nf&&(K-=E0),Ye[O]=K;let he=-K,Pe=ze[O]*he*.9,Be=De[O]*he*.5,He=C*Ne[O],G=O*6;D[G]=Pe,D[G+1]=Be,D[G+2]=K,D[G+3]=Pe,D[G+4]=Be,D[G+5]=K-He}Ve.needsUpdate=!0}let Fe=new k,Oe=new k,Ge=!1,Ee=!1;function J(se,we){if(Ee)return;se=LE(se);let oe=we.position;Ge?se>0&&(Oe.subVectors(oe,Fe).divideScalar(se),Oe.lengthSq()>Lf*Lf&&Oe.setLength(Lf),Fe.copy(oe)):(Fe.copy(oe),Oe.set(0,0,0),Ge=!0);let Te=Ns(we.fov,60);L.uniforms.uScale.value=DE()/(2*Math.tan(Te*Math.PI/360)),(Y(se)||v)&&(M.needsUpdate=!0,S.needsUpdate=!0,I.needsUpdate=!0,B.needsUpdate=!0,z.needsUpdate=!0,v=!1),V&&se>0&&ie(se,oe,Oe),Ie(se,we),Se()}function be(se,we){let oe=la(Ns(se,0),0,1.5);j=la((oe-.7)/.3,0,1),ge=we?1:0}function Me(){Ee||(Ee=!0,n.remove(F,R,Ce),V&&n.remove(V.lines),w.dispose(),L.dispose(),ue.dispose(),ne.dispose(),ke.dispose(),N.dispose(),V&&(V.geo.dispose(),V.mat.dispose()))}return{emit:U,addSkid:de,setSpeed:be,update:J,dispose:Me}}var il={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var qn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},BE=new gs(-1,1,1,-1,0,1),Uf=class extends gt{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}},zE=new Uf,Us=class{constructor(e){this._mesh=new ot(zE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,BE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var lo=class extends qn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Et?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ei.clone(e.uniforms),this.material=new Et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Us(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ua=class extends qn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},sl=class extends qn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var rl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Ke);this._width=i.width,this._height=i.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:An}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lo(il),this.copyPass.material.blending=vi,this.clock=new _c}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ua!==void 0&&(o instanceof ua?i=!0:o instanceof sl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ol=class extends qn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var w0={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var uo=class n extends qn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Ke(e.x,e.y):new Ke(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(r,o,{type:An}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Qt(r,o,{type:An});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new Qt(r,o,{type:An});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=w0;this.highPassUniforms=Ei.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Et({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ke(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=il;this.copyUniforms=Ei.clone(h.uniforms),this.blendMaterial=new Et({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Or,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new Xt,this.fsQuad=new Us(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ke(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Et({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ke(.5,.5)},direction:{value:new Ke(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Et({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};uo.BlurDirectionX=new Ke(1,0);uo.BlurDirectionY=new Ke(0,1);var A0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var al=class extends qn{constructor(){super();let e=A0;this.uniforms=Ei.clone(e.uniforms),this.material=new fc({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Us(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===lh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===uh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===hh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Yo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===fh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===dh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var R0=58,kE=82,C0=94,HE=9,VE=20,I0=4.7,GE=1.95,WE=3,XE=4,qE=5,cl=.6;function Fs(n,e,t){return n<e?e:n>t?t:n}function Lt(n,e=0){return Number.isFinite(n)?n:e}function YE(n,e,t){return n+(e-n)*t}function ho(n,e){return 1-Math.exp(-n*e)}function $E(n){return Number.isFinite(n)?Fs(n,0,.1):0}function P0(n){let e=new k,t=new k,i=new k,s=new k,r={x:1,z:0},o=!1,a=0,c=0,l=0,h=R0,u=I0,f=0,p=0,g=0;function x(E,T){let v=Lt(E.x),w=Lt(E.y),M=Lt(E.z),S=Lt(E.heading)+Lt(E.yaw),I=Math.sin(S),B=Math.cos(S),z=-B,L=I;r.x=z,r.z=L;let F=E.airborne?1:0,U=T*T,Y=I0-.3*U+.9*F,V=GE-.15*U+.7*F;u=Y;let ie=Fs(Lt(E.slope),-.15,.15),ce=Fs(Lt(E.lean),-1.5,1.5),xe=0;e.set(v-I*Y+z*xe,w+V-ie*Y,M-B*Y+L*xe),e.y<w+cl&&(e.y=w+cl),t.set(v+I*8.5,w+.55+ie*4-1.5*F,M+B*8)}function m(E){return YE(R0,kE,Math.pow(E,1.6))}function d(E,T,v,w){n.position.set(i.x+r.x*T,Math.max(i.y+v,w),i.z+r.z*T),n.lookAt(s),n.rotateZ(E)}function b(E,T){if(E=$E(E),!o){y(T);return}a+=E;let v=Fs(Lt(T.speedRatio),0,1);x(T,v);let w=Lt(T.x)-f,M=Lt(T.y)-p,S=Lt(T.z)-g;w*w+M*M+S*S<400&&(i.x+=w,i.y+=M,i.z+=S,s.x+=w,s.y+=M,s.z+=S),f=Lt(T.x),p=Lt(T.y),g=Lt(T.z),i.lerp(e,ho(HE,E));let I=i.x-Lt(T.x),B=i.z-Lt(T.z),z=Math.hypot(I,B);z>.001&&(i.x=Lt(T.x)+I/z*u,i.z=Lt(T.z)+B/z*u),s.lerp(t,ho(VE,E));let L=Lt(T.y)+cl;i.y<L&&(i.y=L),l*=Math.exp(-qE*E);let F=v*v*v*2.2,U=Math.sin(a*61.3)*.6+Math.sin(a*97.1+1.7)*.4,Y=Math.sin(a*73.9+.4)*.6+Math.sin(a*113.7+2.9)*.4,V=Math.sin(a*67.8+1.1)*.6+Math.sin(a*121.4+.3)*.4,ie=l*.35+F*.01,ce=U*ie,xe=Y*ie,ve=V*(l*.03+F*.002);c+=((T.boosting?1:0)-c)*ho(XE,E);let ue=m(v),ee=ue+(C0-ue)*c;h+=(ee-h)*ho(WE,E),Math.abs(n.fov-h)>1e-4&&(n.fov=h,n.updateProjectionMatrix()),d(ve,ce,xe,L)}function y(E){let T=Fs(Lt(E.speedRatio),0,1);x(E,T),i.copy(e),s.copy(t),f=Lt(E.x),p=Lt(E.y),g=Lt(E.z),o=!0,a=0,l=0,c=E.boosting?1:0,h=m(T)+(C0-m(T))*c,n.fov=h,n.updateProjectionMatrix(),d(0,0,0,Lt(E.y)+cl)}function _(E){l=Fs(l+Lt(E),0,1.5)}return{update:b,shake:_,snap:y}}var ZE=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,KE=`
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
}`;function L0(n,e,t,i){let r=Lt((i||{}).bloom,.5),o=null,a=null,c=null,l=0,h=0,u=0,f=0,p=0,g=Math.min(globalThis.devicePixelRatio||1,2);try{let y=n.getSize(new Ke),_=new Qt(Math.max(1,y.x),Math.max(1,y.y),{type:An,samples:4});o=new rl(n,_),o.setPixelRatio(g),o.addPass(new ol(e,t)),a=new uo(new Ke(512,512),r*.8,.75,.9),o.addPass(a),c=new lo({uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uBoost:{value:0},uTime:{value:0}},vertexShader:ZE,fragmentShader:KE}),o.addPass(c),o.addPass(new al)}catch(y){console.warn("Post-traitement indisponible, rendu direct :",y),o=null,a=null,c=null}function x(y,_){!Number.isFinite(y)||!Number.isFinite(_)||y<=0||_<=0||(g=Math.min(globalThis.devicePixelRatio||1,2),n.setPixelRatio(g),n.setSize(y,_),o&&(o.setPixelRatio(g),o.setSize(y,_)))}function m(y,_){l=Fs(Lt(y,0),0,1),h=_?1:0}function d(y){if(y=Number.isFinite(y)?Fs(y,0,.1):0,p+=y,u+=(l-u)*ho(8,y),f+=(h-f)*ho(8,y),c&&(c.uniforms.uSpeed.value=u,c.uniforms.uBoost.value=f,c.uniforms.uTime.value=p),o)try{o.render(y);return}catch(_){console.warn("\xC9chec du post-traitement, rendu direct :",_),o=null}n.render(e,t)}function b(){o&&o.dispose(),a&&a.dispose&&a.dispose(),c&&c.dispose&&c.dispose(),o=null}return{render:d,setSize:x,setSpeed:m,dispose:b}}function D0(n){if(!Number.isFinite(n))return`--'--"---`;let e=Math.floor(n/60),t=Math.floor(n%60),i=Math.floor(n*1e3%1e3);return`${String(e).padStart(2,"0")}'${String(t).padStart(2,"0")}"${String(i).padStart(3,"0")}`}var Gt=(n,e,t,i)=>{let s=document.createElement(n);return e&&(s.className=e),i!=null&&(s.textContent=i),t?.appendChild(s),s};function N0(n){let e=Gt("div","h2-root",n);e.hidden=!0;let t=Gt("div","h2-pos",e),i=Gt("span","h2-pos-num",t,"1"),s=Gt("span","h2-pos-tot",t,"/8");Gt("span","h2-pos-lbl",t,"POS");let r=Gt("div","h2-right",e),o=Gt("div","h2-pill h2-lap",r),a=Gt("span","h2-lap-lbl",o,"TOUR"),c=Gt("span","h2-lap-num",o,"1"),l=Gt("span","h2-lap-tot",o,"/3"),h=Gt("div","h2-pill h2-time",r,`00'00"000`),u=Gt("div","h2-best",r,""),f=Gt("canvas","h2-map",e),p=220;f.width=f.height=p;let g=f.getContext("2d"),x=document.createElement("canvas");x.width=x.height=p;let m=null,d=1,b=0,y=0,_=Gt("div","h2-dial",e),E=Gt("canvas","h2-dial-canvas",_),T=300;E.width=E.height=T;let v=E.getContext("2d"),w=Gt("div","h2-gear",_,"1"),M=Gt("div","h2-speed",_,"0");Gt("div","h2-unit",_,"km/h");let S=Gt("div","h2-boost",_),I=[],B=Gt("div","h2-count",e,""),z=Gt("div","h2-flash",e,""),L=Gt("div","h2-wrong",e,"CONTRESENS");L.hidden=!0;let F={},U=(R,q,X)=>{F[R]!==X&&(F[R]=X,q.textContent=X)},Y=Math.PI*.75,V=Math.PI*2.25,ie=-1;function ce(R){let q=Math.round(R*120)/120;if(q===ie)return;ie=q;let X=T/2,Z=T*.44;v.clearRect(0,0,T,T),v.lineCap="butt",v.beginPath(),v.arc(X,X,Z*1.05,0,Math.PI*2),v.fillStyle="rgba(8, 10, 16, 0.42)",v.fill();let de=(H,Ve,ke,ze)=>{v.beginPath(),v.arc(X,X,Z,H,Ve),v.strokeStyle=ke,v.lineWidth=ze,v.stroke()},Se=Y+(V-Y)*.86;de(Y,Se,"rgba(255,255,255,0.28)",T*.05),de(Se,V,"rgba(226,40,48,0.55)",T*.05);let Ce=Y+(V-Y)*Math.min(1,Math.max(0,q));de(Y,Math.min(Ce,Se),"#ffffff",T*.05),Ce>Se&&de(Se,Ce,"#e8242e",T*.05);for(let H=0;H<=8;H++){let Ve=Y+(V-Y)*H/8;v.beginPath(),v.moveTo(X+Math.cos(Ve)*Z*.8,X+Math.sin(Ve)*Z*.8),v.lineTo(X+Math.cos(Ve)*Z*.9,X+Math.sin(Ve)*Z*.9),v.strokeStyle=H>=7?"#e8242e":"rgba(255,255,255,0.75)",v.lineWidth=3,v.stroke()}v.beginPath(),v.moveTo(X+Math.cos(Ce)*Z*.3,X+Math.sin(Ce)*Z*.3),v.lineTo(X+Math.cos(Ce)*Z*.98,X+Math.sin(Ce)*Z*.98),v.strokeStyle="#ffffff",v.lineWidth=4,v.stroke()}ce(0);function xe(R){m=R;let q=R.bounds,X=q.maxX-q.minX,Z=q.maxZ-q.minZ;d=(p-36)/Math.max(X,Z),b=(p-X*d)/2-q.minX*d,y=(p-Z*d)/2-q.minZ*d;let de=x.getContext("2d");de.clearRect(0,0,p,p);let Se=()=>{de.beginPath(),R.pts.forEach((Ce,H)=>{let Ve=Ce.x*d+b,ke=Ce.z*d+y;H?de.lineTo(Ve,ke):de.moveTo(Ve,ke)}),R.open||de.closePath()};de.lineJoin="round",Se(),de.strokeStyle="rgba(0,0,0,0.45)",de.lineWidth=9,de.stroke(),Se(),de.strokeStyle="#ffffff",de.lineWidth=5,de.stroke(),Se(),de.strokeStyle="rgba(20,24,34,0.9)",de.lineWidth=2,de.stroke(),g.clearRect(0,0,p,p),g.drawImage(x,0,0)}function ve(R){if(!m)return;g.clearRect(0,0,p,p),g.drawImage(x,0,0);let q=m.pts.length,X=(Z,de)=>{let Se=Math.floor((Z.s%m.length+m.length)%m.length/m.step);Se>=q&&(Se=q-1);let Ce=m.pts[Se],H=Ce.x*d+b,Ve=Ce.z*d+y;g.beginPath(),g.arc(H,Ve,de?6:3.6,0,Math.PI*2),g.fillStyle=de?"#e8242e":"#ffffff",g.fill(),g.lineWidth=1.5,g.strokeStyle="rgba(0,0,0,0.6)",g.stroke()};for(let Z of R)Z.isPlayer||X(Z,!1);for(let Z of R)Z.isPlayer&&X(Z,!0)}let ue=null;function ee(R){U("pos",i,String(R.position)),U("tot",s,"/"+R.total),U("lap",c,String(R.lap)),U("laps",l,"/"+R.laps),U("time",h,D0(R.time)),U("best",u,R.bestLap?"MEILLEUR "+D0(R.bestLap):""),U("speed",M,String(Math.round(R.speedKmh))),U("gear",w,String(R.gear||1)),ce(R.rpm??Math.min(1,R.speedKmh/290));let q=R.boostCharges|0,X=R.boostT>0?1:0,Z=q+":"+X;if(F.boost!==Z){for(F.boost=Z;I.length<q+X;)I.push(Gt("span","h2-boost-dot",S));I.forEach((de,Se)=>{de.hidden=Se>=q+X,de.classList.toggle("h2-on",X&&Se===q)})}if(R.countdown===null||R.countdown===void 0)ue===null&&F.count!==""&&(F.count="",B.textContent="",B.classList.remove("h2-show"));else if(R.countdown>0){let de=String(Math.ceil(R.countdown));F.count!==de&&(F.count=de,B.textContent=de,B.classList.remove("h2-show"),B.offsetWidth,B.classList.add("h2-show"))}else F.count!=="GO !"&&(F.count="GO !",B.textContent="GO !",B.classList.remove("h2-show"),B.offsetWidth,B.classList.add("h2-show"),clearTimeout(ue),ue=setTimeout(()=>{ue=null},800));L.hidden===!!R.wrongWay&&(L.hidden=!R.wrongWay)}let te=null;function ne(R,q=900){z.textContent=R,z.classList.remove("h2-show"),z.offsetWidth,z.classList.add("h2-show"),clearTimeout(te),te=setTimeout(()=>z.classList.remove("h2-show"),q)}return{show(){e.hidden=!1},hide(){e.hidden=!0},update:ee,setTrack:xe,updateMinimap:ve,flash:ne,setLapLabel(R){a.textContent!==R&&(a.textContent=R)},dispose(){e.remove()}}}var sA=Qs.maxSpeed*3.6;var U0=360;var F0=n=>(n<10?"0":"")+n;function Ff(n){if(n==null||!Number.isFinite(n))return"--:--.--";let e=Math.max(0,Math.floor(n*100+1e-6)),t=Math.floor(e/6e3),i=Math.floor(e/100)%60;return`${t}:${F0(i)}.${F0(e%100)}`}var rA=`
  <div class="pr-pos"><span class="pr-pos-cur">-</span><span class="pr-pos-sep">/</span><span class="pr-pos-tot">-</span></div>
  <div class="pr-wrong">Sens interdit</div>
  <div class="pr-timing">
    <div class="pr-lap">Tour -/-</div>
    <div class="pr-time">0:00.00</div>
    <div class="pr-best">Meilleur <span class="pr-best-v">--:--.--</span></div>
  </div>
  <div class="pr-left">
    <div class="pr-mm-wrap"><canvas class="pr-minimap" width="${U0}" height="${U0}"></canvas></div>
    <div class="pr-boosts"><span class="pr-boost-lbl">Boost</span><div class="pr-dias"></div></div>
  </div>
  <div class="pr-speed">
    <div class="pr-speed-num">0</div>
    <div class="pr-speed-unit">km/h</div>
    <div class="pr-bar"></div>
  </div>
  <div class="pr-count"></div>
  <div class="pr-flash"></div>
`;var O0="ABCDEFGHJKMNPQRSTUVWXYZ23456789",B0=0;function Of(){B0++;let n=Ln((Date.now()^Math.imul(B0,2654435761))>>>0),e="RUSH-";for(let t=0;t<4;t++)e+=O0[n.int(0,O0.length-1)];return e}var dt=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function z0(n){return n?typeof n=="string"?Ti[n]?.name||n:n.name||Ti[n.id]?.name||"":""}function JE(n){return n&&typeof n=="object"?n:er.find(e=>e.id===n)||{id:String(n),name:String(n),icon:"\u2022"}}function Bf(n){let e=new Map;for(let i of n||[]){let s=JE(i),r=e.get(s.id);r?r.n++:e.set(s.id,{info:s,n:1})}if(!e.size)return'<span class="pr-own-none">Aucune pour l\u2019instant</span>';let t="";for(let{info:i,n:s}of e.values())t+=`<span class="pr-own">${dt(i.icon)} ${dt(i.name)}${s>1?` \xD7${s}`:""}</span>`;return t}function zf(n){return(n||[]).map((e,t)=>`<li class="pr-srow${e.isPlayer?" pr-me":""}" style="--i:${t}"><span class="pr-rk">${t+1}</span><span class="pr-rn">${dt(e.name)}</span><span class="pr-rp">${e.points??0}<small> pts</small></span></li>`).join("")}function k0(n){let e=document.createElement("div");e.className="pr-menu pr-off",n.appendChild(e);let t=null,i=null;function s(y){try{t&&typeof t.play=="function"&&t.play(y)}catch{}}function r(y,_){let E=i;if(!E||!E.items.length)return;let T=E.items.length,v=(y%T+T)%T,w=v!==E.index;E.index=v,E.focused=!0;for(let M=0;M<T;M++)E.items[M].classList.toggle("pr-sel",M===v);try{E.items[v].focus({preventScroll:!0})}catch{}w&&_&&s("select")}function o(y){let _=i;_&&(i=null,e.innerHTML="",e.classList.add("pr-off"),s("confirm"),_.resolve(y))}function a(y){return i=null,e.innerHTML=y.html,e.classList.remove("pr-off"),new Promise(_=>{i={items:Array.from(e.querySelectorAll("[data-nav]")),index:0,focused:!1,actions:y.actions||{},resolve:_},y.onMount&&y.onMount(e,o),r(y.initial||0,!1)})}e.addEventListener("click",y=>{let _=i;if(!_||!(y.target instanceof Element))return;let E=y.target.closest("[data-act]");if(!E||!e.contains(E)||E.disabled)return;let T=_.items.indexOf(E);T>=0&&T!==_.index&&r(T,!1);let v=_.actions[E.dataset.act];v&&v(E,o)}),e.addEventListener("mouseover",y=>{let _=i;if(!_||!(y.target instanceof Element))return;let E=y.target.closest("[data-nav]");if(!E)return;let T=_.items.indexOf(E);T>=0&&T!==_.index&&r(T,!0)}),window.addEventListener("keydown",y=>{let _=i;if(!_)return;let E=y.target,T=!!E&&E.tagName==="INPUT",v=y.key||"",w=v.toLowerCase();if(v==="ArrowUp"||!T&&(v==="ArrowLeft"||w==="z"||w==="q")){y.preventDefault(),r(_.index-1,!0);return}if(v==="ArrowDown"||!T&&(v==="ArrowRight"||w==="s"||w==="d")){y.preventDefault(),r(_.index+1,!0);return}if(T){if(v==="Enter"){y.preventDefault();let M=e.querySelector("[data-main]");M&&M.click()}return}if(v.length===1){let M=_.items.find(S=>S.dataset.key===v);M&&(y.preventDefault(),M.click())}});function c({dailySeed:y,meta:_,route:E=null,records:T=null}={}){let v=_||{};if(E)return f(E,v,T||{});let w=String(y||"RUSH-DAILY").toUpperCase(),M=Of();return a({initial:2,html:`
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
    <div><b>${v.runs??0}</b><span>runs</span></div>
    <div><b>${v.wins??0}</b><span>victoires</span></div>
    <div><b>${v.bestPoints??0}</b><span>record de points</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage</p>
</section>`,actions:{dice:S=>{let I=S.closest(".pr-screen").querySelector("[data-seed]");I&&(I.value=Of())},launch:(S,I)=>{let B=S.closest(".pr-screen").querySelector("[data-seed]"),z=(B?B.value:"").trim().toUpperCase();z||(z=Of()),I({seed:z})},daily:(S,I)=>I({seed:w})}})}let l=y=>`${Math.floor(y/60)}'${String(Math.floor(y%60)).padStart(2,"0")}"`,h=y=>y==null?"":` <small>${y<0?"\u2212":"+"}${Math.abs(y).toFixed(1)} s</small>`;function u(y){if(!y)return"";let _='<li style="display:flex;justify-content:space-between;gap:1.5em">',E=y.splits.map((v,w)=>`${_}<span>${w+1} \xB7 ${dt(v.name.split(" \xB7 ")[0])}</span><b>${dt(l(v.time))}${h(v.delta)}${v.record&&v.best!==null?" \u2605":""}</b></li>`).join(""),T;return y.total?y.total.best===null?T=`Temps total <b>${dt(l(y.time))}</b> \xB7 premier chrono enregistr\xE9`:y.total.record?T=`Temps total <b>${dt(l(y.time))}</b> \xB7 <b>nouveau record</b>${h(y.total.delta)}`:T=`Temps total <b>${dt(l(y.time))}</b> \xB7 record ${dt(l(y.total.best))}${h(y.total.delta)}`:T=`Temps <b>${dt(l(y.time))}</b> \xB7 le record de l'itin\xE9raire ne compte que depuis Catane`,`<p class="pr-sub">${T}</p><ul style="list-style:none;margin:.6em 0;padding:0;display:grid;gap:.25em;font-size:.82em;text-align:left">${E}</ul>`}function f(y,_,E){let T=Object.keys(E.splits||{}).length,v=(y.stages.reduce((M,S)=>M+S.length,0)/1e3).toFixed(0),w=y.stages.map((M,S)=>`<option value="${S+1}">${S+1} \xB7 ${dt(M.subtitle)}</option>`).join("");return a({initial:1,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">${dt(y.title)} \xB7 ${dt(y.roads)} \xB7 ${v} km d'une traite</p>
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
    <div><b>${E.total?dt(l(E.total)):"\u2013"}</b><span>record Catania \u2192 Falcone</span></div>
    <div><b>${E.finishes??0}</b><span>arriv\xE9es</span></div>
    <div><b>${T}</b><span>chronos de tron\xE7on</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage \xB7 1 2 3 am\xE9lioration aux relais</p>
</section>`,actions:{launch:(M,S)=>{let I=M.closest(".pr-screen").querySelector("[data-from]");S({seed:"A18-A20",stage:Number(I?I.value:1)||1})}}})}function p({stage:y={},index:_=1,total:E=1,standings:T=[],weather:v}={}){let w=z0(v)||z0(y.weather),M=y.laps??0;return a({initial:0,html:`
<section class="pr-screen pr-stage">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in pr-stage-main">
    <div class="pr-kicker">${y.real?"Itin\xE9raire r\xE9el":`\xC9tape ${dt(_)}/${dt(E)}`}</div>
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
    <ol class="pr-slist">${zf(T)}</ol>
  </div></div>
</section>`,actions:{go:(S,I)=>I(void 0)}})}function g({results:y=[],standings:_=[],stage:E={}}={}){let v=[...y].sort((w,M)=>(w.position??99)-(M.position??99)).map((w,M)=>{let S=Ec[(w.position??0)-1]??0;return`<tr class="pr-tr${w.isPlayer?" pr-me":""}" style="--i:${M}"><td class="pr-c-pos">${dt(w.position??"")}</td><td class="pr-c-name">${dt(w.name)}</td><td class="pr-c-tm">${w.time==null?"Abandon":Ff(w.time)}</td><td class="pr-c-best">${w.bestLap==null?"\u2014":Ff(w.bestLap)}</td><td class="pr-c-pts">${S>0?"+"+S:"0"}</td></tr>`}).join("");return a({initial:0,html:`
<section class="pr-screen pr-results">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-kicker">R\xE9sultats \xB7 ${dt(E.name)}</div>
    <table class="pr-table">
      <thead><tr><th>Pos</th><th>Pilote</th><th>Temps</th><th>Meilleur tour</th><th>Pts</th></tr></thead>
      <tbody>${v}</tbody>
    </table>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="next">Continuer</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${zf(_)}</ol>
  </div></div>
</section>`,actions:{next:(w,M)=>M(void 0)}})}function x({choices:y=[],index:_=1,total:E=1,owned:T=[]}={}){let v=y.map((w,M)=>`<button type="button" class="pr-card pr-slide" style="--i:${M}" data-nav data-key="${M+1}" data-act="pick" data-id="${dt(w.id)}"><span class="pr-card-in"><span class="pr-card-key">${M+1}</span><span class="pr-card-ico" aria-hidden="true">${dt(w.icon)}</span><span class="pr-card-name">${dt(w.name)}</span><span class="pr-card-tag">${dt(w.tagline)}</span><span class="pr-card-pro">\u25B2 ${dt(w.pro)}</span><span class="pr-card-con">\u25BC ${dt(w.con)}</span></span></button>`).join("");return a({initial:0,html:`
<section class="pr-screen pr-upg">
  <div class="pr-kicker pr-slide" style="--i:0">\xC9tape ${dt(_)}/${dt(E)} accomplie</div>
  <h2 class="pr-h2 pr-slide" style="--i:0">Choisissez une am\xE9lioration</h2>
  <div class="pr-cards">${v}</div>
  <div class="pr-owned pr-slide" style="--i:3"><span class="pr-owned-lbl">D\xE9j\xE0 poss\xE9d\xE9es</span>${Bf(T)}</div>
</section>`,actions:{pick:(w,M)=>M(w.dataset.id)}})}function m({standings:y=[],playerPosition:_,run:E={},meta:T}={}){let v=T||{},w=_??y.findIndex(I=>I.isPlayer)+1,M=w===1,S=E.real?M?"Victoire !":`${dt(w)}e \xE0 l'arriv\xE9e`:M?"Champion !":`${dt(w)}e au championnat`;return a({initial:E.real?0:1,html:`
<section class="pr-screen pr-end">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-end-title${M?" pr-gold":""}">${S}</div>
    <ol class="pr-slist pr-slist-big">${zf(y)}</ol>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    ${E.real?`<h3 class="pr-h3">${dt(E.stages[0].name)}</h3>
    <p class="pr-sub">${dt(E.stages[0].subtitle)}</p>${u(E.summary)}
    <h3 class="pr-h3">Am\xE9liorations prises</h3>
    <div class="pr-owned-list">${Bf(E.upgrades)}</div>`:`<h3 class="pr-h3">Am\xE9liorations du run</h3>
    <div class="pr-owned-list">${Bf(E.upgrades)}</div>
    <h3 class="pr-h3">Seed</h3>
    <div class="pr-seedline">
      <code class="pr-seedcode">${dt(E.seed)}</code>
      <button type="button" class="pr-btn pr-btn-small" data-nav data-act="copy">Copier la seed</button>
    </div>`}
    ${E.real?"":`<p class="pr-cmds">Runs : ${v.runs??0} \xB7 Victoires : ${v.wins??0} \xB7 Record : ${v.bestPoints??0} pts</p>`}
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="again">${E.real?"Repartir":"Nouveau run"}</button>
  </div></div>
</section>`,actions:{copy:I=>{let B="Copier la seed",z;try{z=navigator.clipboard.writeText(String(E.seed??""))}catch(F){z=Promise.reject(F)}let L=F=>{I.textContent=F,setTimeout(()=>{I.isConnected&&(I.textContent=B)},1500)};z.then(()=>L("Copi\xE9e !"),()=>L("Copie impossible"))},again:(I,B)=>B(void 0)}})}function d(y){t=y||null}function b(){i=null,e.innerHTML="",e.classList.add("pr-off")}return{showTitle:c,showStageIntro:p,showResults:g,showUpgradeChoice:x,showRunEnd:m,hideAll:b,setAudio:d}}var H0=typeof globalThis<"u"&&(globalThis.AudioContext||globalThis.webkitAudioContext)||null,V0=.6,jE=.3,kf=6,ur=55,QE=.1,eT=25,G0=60/128/4,tT=[{root:45,iv:[3,7]},{root:41,iv:[4,7]},{root:48,iv:[4,7]},{root:43,iv:[4,7]}],fo=n=>Number.isFinite(n)?n<0?0:n>1?1:n:0,W0=n=>440*Math.pow(2,(n-69)/12);function nT(n){let t=new Float32Array(1024);for(let i=0;i<1024;i++){let s=i*2/1023-1;t[i]=(1+n)*s/(1+n*Math.abs(s))}return t}function X0(){let n=null,e=!1,t=null,i=null,s=null,r=null,o=null,a=null,c=null,l=!1,h=!1,u=null,f=0,p=0,g=-1,x=0,m=0,d=0;function b(R){let q=Math.round(2*R),X=Math.round(.1*R),Z=new Float32Array(q+X),de=0,Se=0,Ce=0,H=0,Ve=0,ke=0,ze=0;for(let A=0;A<q+X;A++){let j=Math.random()*2-1;de=.99886*de+j*.0555179,Se=.99332*Se+j*.0750759,Ce=.969*Ce+j*.153852,H=.8665*H+j*.3104856,Ve=.55*Ve+j*.5329522,ke=-.7616*ke-j*.016898,Z[A]=(de+Se+Ce+H+Ve+ke+ze+j*.5362)*.11,ze=j*.115926}let De=n.createBuffer(1,q,R),Ye=De.getChannelData(0),Ne=0;for(let A=0;A<q;A++){let j=A<X?Z[A]*(A/X)+Z[q+A]*(1-A/X):Z[A];Ye[A]=j;let ge=Math.abs(j);ge>Ne&&(Ne=ge)}let N=Ne>0?1/Ne:1;for(let A=0;A<q;A++)Ye[A]*=N;return De}function y(R){let q=n.createBufferSource();return q.buffer=i,q.loop=!0,q.connect(R),q.start(0,Math.random()*1.5),q}function _(R){let q=n.createGain();return q.gain.value=R,q}function E(R,q,X){let Z=n.createBiquadFilter();return Z.type=R,Z.frequency.value=q,Z.Q.value=X,Z}function T(){i=b(n.sampleRate),t=_(l?0:V0);let R=n.createDynamicsCompressor();R.threshold.value=-16,R.knee.value=12,R.ratio.value=4,R.attack.value=.005,R.release.value=.2,t.connect(R),R.connect(n.destination);let q=n.createOscillator();q.type="sawtooth",q.frequency.value=ur,q.detune.value=-6;let X=n.createOscillator();X.type="sawtooth",X.frequency.value=ur,X.detune.value=6;let Z=n.createOscillator();Z.type="square",Z.frequency.value=ur/2;let de=_(1);q.connect(_(.28)).connect(de),X.connect(_(.28)).connect(de),Z.connect(_(.22)).connect(de);let Se=E("bandpass",ur*4,1.2),Ce=_(.04);y(Se),Se.connect(Ce).connect(de);let H=n.createWaveShaper();H.curve=nT(4),H.oversample="2x",de.connect(H);let Ve=E("lowpass",300,1.3);H.connect(Ve);let ke=_(0);Ve.connect(ke).connect(t),q.start(),X.start(),Z.start(),s={osc1:q,osc2:X,osc3:Z,nBp:Se,nGain:Ce,lp:Ve,gain:ke};let ze=E("bandpass",300,.7),De=_(0);y(ze),ze.connect(De).connect(t),r={filter:ze,gain:De};let Ye=E("bandpass",1100,4),Ne=_(3),N=_(0);y(Ye),Ye.connect(Ne).connect(N).connect(t),o={filter:Ye,gain:N};let A=E("highpass",900,.5),j=_(3),ge=_(0);y(A),A.connect(j).connect(ge).connect(t),a={gain:ge},c=_(0),c.connect(t),e=!0}function v(R,q,X){let Z=n.currentTime;R.cancelScheduledValues(Z),R.setTargetAtTime(q,Z,X)}function w(R){let q=R.t0,X=R.dur,Z=n.createOscillator();Z.type=R.type||"sine",Z.frequency.setValueAtTime(R.f0,q),R.f1&&Z.frequency.exponentialRampToValueAtTime(R.f1,q+X);let de=n.createGain();de.gain.setValueAtTime(1e-4,q),de.gain.linearRampToValueAtTime(R.vol,q+(R.attack||.004)),de.gain.exponentialRampToValueAtTime(1e-4,q+X);let Se=Z;if(R.lp){let Ce=E("lowpass",R.lp,.7);Z.connect(Ce),Se=Ce}Se.connect(de),de.connect(t),Z.start(q),Z.stop(q+X+.02)}function M(R){let q=R.t0,X=R.dur,Z=n.createBufferSource();Z.buffer=i;let de=E(R.type,R.f0,R.q||1);R.f1&&de.frequency.exponentialRampToValueAtTime(R.f1,q+X),de.frequency.setValueAtTime(R.f0,q);let Se=n.createGain();Se.gain.setValueAtTime(1e-4,q),Se.gain.linearRampToValueAtTime(R.vol,q+.004),Se.gain.exponentialRampToValueAtTime(1e-4,q+X),Z.connect(de),de.connect(Se),Se.connect(t),Z.start(q,Math.random()*1.5,X+.02)}function S(R,q){let X=n.createBufferSource();X.buffer=i;let Z=E("bandpass",700+Math.random()*900,1.2),de=n.createGain();de.gain.setValueAtTime(0,R),de.gain.linearRampToValueAtTime(q,R+.003),de.gain.linearRampToValueAtTime(0,R+.03),X.connect(Z),Z.connect(de),de.connect(t),X.start(R,Math.random()*1.5,.05)}let I={beep(R){w({type:"square",f0:440,t0:R,dur:.12,vol:.12,lp:2400})},go(R){w({type:"sawtooth",f0:880,t0:R,dur:.4,vol:.12,lp:3e3}),w({type:"sine",f0:1320,t0:R,dur:.4,vol:.06}),w({type:"sine",f0:1760,t0:R+.02,dur:.25,vol:.04}),M({t0:R,dur:.05,vol:.1,type:"highpass",f0:3e3,q:.7})},boost(R){M({t0:R,dur:.6,vol:.25,type:"bandpass",f0:300,f1:3e3,q:1.2}),w({type:"sawtooth",f0:150,f1:600,t0:R,dur:.6,vol:.1,lp:1500,attack:.02})},jump(R){M({t0:R,dur:.25,vol:.2,type:"bandpass",f0:400,f1:1600,q:1})},land(R){w({type:"sine",f0:90,f1:50,t0:R,dur:.2,vol:.6,attack:.002}),M({t0:R,dur:.2,vol:.3,type:"lowpass",f0:800,q:.7})},hit(R){M({t0:R,dur:.08,vol:.3,type:"highpass",f0:2e3,q:.7});let q=340,X=[[1,.12,.35],[2.76,.08,.25],[5.4,.05,.2],[8.93,.03,.15]];for(let[Z,de,Se]of X)w({type:"sine",f0:q*Z,t0:R,dur:Se,vol:de,attack:.001})},select(R){w({type:"sine",f0:2400,t0:R,dur:.03,vol:.15,attack:.002})},confirm(R){w({type:"triangle",f0:660,t0:R,dur:.12,vol:.2}),w({type:"triangle",f0:990,t0:R+.09,dur:.18,vol:.2})},win(R){[523,659,784,1047,1319].forEach((X,Z)=>{let de=Z<4?.13:.5,Se=R+Z*.11;w({type:"square",f0:X,t0:Se,dur:de,vol:.1,lp:2500}),w({type:"triangle",f0:X,t0:Se,dur:de,vol:.12})})},lose(R){[392,330,262].forEach((q,X)=>{w({type:"triangle",f0:q,t0:R+X*.22,dur:.3,vol:.25,attack:.01})})},pad(R){w({type:"sawtooth",f0:300,f1:1500,t0:R,dur:.15,vol:.12,lp:4e3})},lap(R){w({type:"sine",f0:1e3,t0:R,dur:.08,vol:.2}),w({type:"sine",f0:1e3,t0:R+.15,dur:.08,vol:.2})}};function B(R){let q=n.createOscillator();q.type="sine",q.frequency.setValueAtTime(150,R),q.frequency.exponentialRampToValueAtTime(45,R+.12);let X=n.createGain();X.gain.setValueAtTime(.5,R),X.gain.exponentialRampToValueAtTime(.001,R+.3),q.connect(X),X.connect(c),q.start(R),q.stop(R+.32)}function z(R,q){let X=n.createBufferSource();X.buffer=i;let Z=E("highpass",7e3,.7),de=n.createGain();de.gain.setValueAtTime(q,R),de.gain.exponentialRampToValueAtTime(.001,R+.04),X.connect(Z),Z.connect(de),de.connect(c),X.start(R,Math.random()*1.5,.05)}function L(R,q,X){let Z=n.createOscillator();Z.type="sawtooth",Z.frequency.value=q;let de=E("lowpass",1e3,6);de.frequency.setValueAtTime(1e3,R),de.frequency.exponentialRampToValueAtTime(180,R+X);let Se=n.createGain();Se.gain.setValueAtTime(1e-4,R),Se.gain.linearRampToValueAtTime(.16,R+.01),Se.gain.exponentialRampToValueAtTime(1e-4,R+X),Z.connect(de),de.connect(Se),Se.connect(c),Z.start(R),Z.stop(R+X+.02)}function F(R,q){let X=n.createOscillator();X.type="triangle",X.frequency.value=q;let Z=n.createGain();Z.gain.setValueAtTime(1e-4,R),Z.gain.linearRampToValueAtTime(.035,R+.005),Z.gain.exponentialRampToValueAtTime(1e-4,R+.11),X.connect(Z),Z.connect(c),X.start(R),X.stop(R+.13)}function U(R,q){let X=R&15,Z=tT[R>>4&3];if(X%4===0&&B(q),X%2===1&&z(q,X%4===2?.1:.05),X%2===0){let de=X===6||X===14?12:0;L(q,W0(Z.root+de),G0*1.8);let Se=[0,Z.iv[0],Z.iv[1],12];F(q,W0(Z.root+24+Se[X>>1&3]))}}function Y(){if(!e||!h)return;let R=n.currentTime;f<R&&(f=R+.02);let q=R+QE;for(;f<q;)U(p,f),f+=G0,p++}function V(){if(!e){if(!H0)return;try{n=new H0,T()}catch{n=null,e=!1;return}}if(n.state==="suspended")try{let R=n.resume();R&&R.catch&&R.catch(()=>{})}catch{}}function ie(R,q){if(!e)return;R=fo(R),q=fo(q);let X=n.currentTime,Z=R*kf,de=Math.min(kf-1,Math.floor(Z)),Ce=.45+.55*Math.min(1,Z-de),H=fo(R/.08),Ve=ur+(ur*Math.pow(kf,Ce)-ur)*H,ke=.5*R+.5*q,ze=260+3200*Math.pow(ke,1.3),De=.07+.2*R*(.35+.65*q)+.03*q;if(v(s.osc1.frequency,Ve,.04),v(s.osc2.frequency,Ve,.04),v(s.osc3.frequency,Ve*.5,.04),v(s.nBp.frequency,Ve*4,.05),v(s.nGain.gain,.04+.22*q,.05),v(s.lp.frequency,ze,.05),g!==-1&&de!==g){let Ye=s.gain.gain;Ye.cancelScheduledValues(X),Ye.setTargetAtTime(De*.35,X,.004),Ye.setTargetAtTime(De,X+.06,.03),x=X+.12}if(g=de,X>=x&&v(s.gain.gain,De,.05),q>=m)m=q;else if(m-q>.3){if(R>.6&&X>=d){let Ye=.12+.2*R;for(let Ne=0;Ne<3;Ne++)S(X+Ne*.05+Math.random()*.02,Ye*(1-Ne*.2));d=X+.4}m=q}}function ce(R){if(!e)return;let q=fo(R),X=q*q;v(r.filter.frequency,250+1600*X,.2),v(r.gain.gain,.03+.35*X,.15)}function xe(R){if(!e)return;let q=fo(R);v(o.filter.frequency,900+500*q,.05),v(o.gain.gain,q,.03)}function ve(R){e&&v(a.gain.gain,fo(R)*.25,.1)}function ue(R){e&&Object.prototype.hasOwnProperty.call(I,R)&&I[R](n.currentTime+.01)}function ee(R){l=!!R,e&&v(t.gain,l?0:V0,.015)}function te(){e&&(h||(h=!0,p=0,f=n.currentTime+.05),v(c.gain,jE,.05),u||(u=setInterval(Y,eT)),Y())}function ne(){h=!1,u&&(clearInterval(u),u=null),e&&v(c.gain,0,.05)}return{resume:V,setEngine:ie,setWind:ce,setSkid:xe,setRain:ve,play:ue,setMuted:ee,startMusic:te,stopMusic:ne}}var Hf=1/120,Un=new URLSearchParams(location.search),iT=document.getElementById("game"),xi=new sc({canvas:iT,antialias:!0,powerPreference:"high-performance"});xi.setPixelRatio(Math.min(window.devicePixelRatio,2));xi.shadowMap.enabled=!0;xi.shadowMap.type=yc;xi.toneMapping=Yo;xi.toneMappingExposure=1.05;xi.outputColorSpace=Rt;var zt=new Vo,Rn=new $t(70,1,.3,6e3);zt.add(Rn);var ts=P0(Rn),eg=document.getElementById("ui"),sn=N0(eg),es=k0(eg),kt=X0();es.setAudio?.(kt);var dl=new Set,fn={throttle:0,brake:0,steer:0,boost:!1,drift:!1};var sT=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement)){if(dl.add(n.code),Yt==="race"&&sT.includes(n.code)&&n.preventDefault(),Os?.active){let e=["Digit1","Digit2","Digit3","Numpad1","Numpad2","Numpad3"].indexOf(n.code);e>=0&&Os.pick(e%3)}n.code==="KeyM"&&(ul=!ul,kt.setMuted(ul)),(n.code==="KeyP"||n.code==="Escape")&&Yt==="race"&&(Wf=!Wf)}});addEventListener("keyup",n=>dl.delete(n.code));addEventListener("blur",()=>dl.clear());addEventListener("pointerdown",()=>kt.resume(),{once:!1});var ul=Un.has("mute");ul&&kt.setMuted(!0);var Wf=!1;function rT(n){let e=(...s)=>s.some(r=>dl.has(r));fn.throttle=e("ArrowUp","KeyW")?1:0,fn.brake=e("ArrowDown","KeyS")?1:0;let t=(e("ArrowRight","KeyD")?1:0)-(e("ArrowLeft","KeyA")?1:0);fn.steer=t,fn.boost=e("Space"),fn.drift=e("ShiftLeft","ShiftRight","KeyX");let i=navigator.getGamepads?.()[0];if(i){let s=i.axes[0]||0;Math.abs(s)>.12&&(fn.steer=s),fn.throttle=Math.max(fn.throttle,i.buttons[7]?.value||0,i.buttons[0]?.pressed?1:0),fn.brake=Math.max(fn.brake,i.buttons[6]?.value||0),fn.boost=fn.boost||!!i.buttons[2]?.pressed,fn.drift=fn.drift||!!i.buttons[1]?.pressed||!!i.buttons[5]?.pressed}return fn}function oT(n){let e=new Vo,t=new ys(50,32,16),i=new k(...n.sunDir).normalize(),s=new Et({side:Jt,uniforms:{uTop:{value:new Re(n.skyTop)},uHor:{value:new Re(n.skyHorizon)},uGround:{value:new Re(n.hemiGround)},uSun:{value:new Re(n.sunColor).multiplyScalar(n.sunIntensity)},uSunDir:{value:i}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 uTop, uHor, uGround, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = d.y > 0.0 ? mix(uHor, uTop, pow(d.y, 0.55)) : mix(uHor, uGround, pow(-d.y, 0.35));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 350.0) * 14.0 + pow(s, 12.0) * 0.5);
        gl_FragColor = vec4(c, 1.0);
      }`});e.add(new ot(t,s));let r=new $r(xi),o=r.fromScene(e,.02);return r.dispose(),t.dispose(),s.dispose(),o}var q0=new Map;function Y0(n,e="#f4f2ec",t="#16181d"){let i=n+e+t,s=q0.get(i);if(!s){let o=document.createElement("canvas");o.width=40,o.height=28;let a=o.getContext("2d");a.fillStyle=e,a.fillRect(0,0,40,28),a.fillStyle=t,a.font='italic 900 26px "Arial Narrow", Impact, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(String(n),20,15),s=new di(o),s.colorSpace=Rt,s.magFilter=on,s.minFilter=Zn,q0.set(i,s)}let r=new ot(new Pn(1,1),new st({map:s,roughness:.5,side:Ct,polygonOffset:!0,polygonOffsetFactor:-2}));return r.userData.ownGeometry=!0,r}var ha=null;function aT(){if(ha)return ha;let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),ha=new di(n),ha.colorSpace=Rt,ha}function Vf(n,e,t){let i=new rc(new Go({map:aT(),color:n,transparent:!0,opacity:t,blending:Or,depthWrite:!1,fog:!1}));return i.scale.setScalar(e),i}var Xe=null,Yt="boot",Xf=0,qf=0,Yf=0,go=99;function cT(){if(Xe){for(let n of Xe.bikes)zt.remove(n.model.group);zt.remove(Xe.road.group),Xe.road.dispose?.(),Xe.env.dispose?.(),Xe.env.group?.parent&&Xe.env.group.parent.remove(Xe.env.group),Xe.fx.dispose?.(),Xe.post.dispose?.(),Xe.envMap?.dispose(),zt.environment=null,Xe.mirror&&(zt.remove(Xe.mirror),Xe.mirror.dispose()),Xe.fill&&zt.remove(Xe.fill),Xe.scenery&&(zt.remove(Xe.scenery.group),Xe.scenery.dispose()),Xe.clouds&&(zt.remove(Xe.clouds),Xe.clouds.geometry.dispose(),Xe.clouds.material.dispose()),Xe.sunGlow&&(zt.remove(Xe.sunGlow),Xe.sunGlow.material.dispose()),Xe=null}}var bn=null,tg={},po=new Map,fl=new Map;function da(n){if(!po.has(n.id)){po.set(n.id,fetch("assets/v3/"+n.file).then(e=>{if(!e.ok)throw new Error("\xE9tape indisponible : "+n.id);return e.json()}).then(e=>(e.props=tg,fl.set(n.id,e),e)));for(let e of po.keys()){if(po.size<=2)break;e!==n.id&&(po.delete(e),fl.delete(e))}}return po.get(n.id)}function $f({trackSeed:n,weatherId:e,laps:t,riders:i,autopilot:s,realData:r=null,final:o=!0,carry:a=null,keepClouds:c=null}){let l=[performance.now()],h=L=>{l.push(L,Math.round(performance.now()-l[0]))};cT(),h("dispose");let u=Ln(n),f=!!r,p=f?r._track||Jh(r):tm(n);f&&(r._track=null),h("track");let g=Ti[e]||Ti.sunset;Rn.far=f?9500:6e3,Rn.updateProjectionMatrix();let x=f?qm(zt,p,g,u.fork("env")):Bm(zt,p,g,u.fork("env"));h("env");let m=oT(g);zt.environment=m.texture,zt.environmentIntensity=g.night?.55:.5,xi.toneMappingExposure=g.night?1.5:.82;let d=Vf(g.sunColor,g.night?900:2200,g.night?.35:.75);d.userData.dir=new k(...g.sunDir).normalize(),zt.add(d);let b=new bi(g.night?3820160:13226728,g.night?.25:.45);b.position.set(-g.sunDir[0],.6,-g.sunDir[2]).multiplyScalar(100),b.name="fill-light",zt.add(b),h("envmap");let y=f&&r._road||Xh(p,g,u.fork("road"));f&&(r._road=null),zt.add(y.group),h("road"),f||Yh(x.group,L=>L.geometry.attributes.position.count>2e4?1:.45),Yh(y.group,()=>.4);let _=f?{group:new ht,dispose(){}}:Vm(p,g,u.fork("scenery"),x.heightAt);x.sun?.shadow&&(x.sun.shadow.mapSize.set(4096,4096),x.sun.shadow.radius=5,x.sun.shadow.blurSamples=16,x.sun.shadow.normalBias=.05,x.sun.shadow.map?.dispose(),x.sun.shadow.map=null),zt.add(_.group);let E=null,T=f?Math.min(.25,g.wet||.25):g.sheen??g.wet;T>.5&&!Un.has("noreflect")&&(E=new Zo(new Pn(900,900),{textureWidth:1280,textureHeight:720,clipBias:.05,multisample:4}),E.rotation.x=-Math.PI/2,E.material.colorWrite=!1,E.material.depthWrite=!1,E.material.depthTest=!1,E.frustumCulled=!1,E.renderOrder=-10,E.name="road-mirror",zt.add(E));let v=y.group.getObjectByName("road-asphalt");v&&T>.5&&(v.material.envMap=m.texture,v.material.envMapIntensity=E?.35:1.25,v.material.metalness=.3,Rm(v.material,g.sheen??g.wet,E?{texture:E.getRenderTarget().texture,matrix:E.material.uniforms.textureMatrix.value}:null)),h("voxelize");let w=c||wm(g,u.fork("clouds"));zt.add(w);let M=T0(zt,g),S=L0(xi,zt,Rn,g);h("fx");let I=fm({track:p,laps:t,env:g,rng:u.fork("race"),riders:i,final:o,carry:a}),B=I.riders.map(L=>{let F=y0({color:L.color,accent:L.accent,isPlayer:!!L.isPlayer&&!!g.night,detail:L.isPlayer?"hi":"lo"});F.group.rotation.order="YXZ";let U=F.group.getObjectByName("chassis")||F.group,Y=Vf(16722458,.3,.3);if(Y.position.set(0,.67,-.42),U.add(Y),g.night){let ce=Vf(16773840,1.3,.8);ce.position.set(0,.48,1.66),U.add(ce)}F.tailGlow=Y;let V=L.isPlayer?1:2+I.riders.indexOf(L)*7%97;for(let ce of[-1,1]){let xe=Y0(V);xe.scale.set(.24,.17,1),xe.position.set(.105*ce,.6,-.2),xe.rotation.y=ce*Math.PI/2,U.add(xe)}let ie=Y0(V);return ie.scale.set(.2,.14,1),ie.position.set(0,.585,1.6),ie.rotation.x=-.75,U.add(ie),zt.add(F.group),{rider:L,model:F,pose:{},prev:new k,has:!1,w:{x:0,y:0,z:0,heading:0,slope:0}}}),z=s?Rc({id:"auto",name:"auto",skill:.9,aggression:.5,jumpSkill:.8,lineSkill:.9,style:"r\xE9gulier"},u.fork("auto")):null;if(Xe={track:p,weather:g,env:x,road:y,fx:M,post:S,race:I,bikes:B,autoAI:z,envMap:m,sunGlow:d,clouds:w,scenery:_,mirror:E,fill:b,playerBike:B.find(L=>L.rider.isPlayer)||B[0]},h("bikes"),window.__loadTimes=l.slice(1),tt?.traffic){for(let L of I.riders)L.ai&&(L.ai.obstacles=tt.traffic.vehicles);z&&(z.obstacles=tt.traffic.vehicles)}if(f){let L=[];for(let F of p.features)F.type==="tunnel"&&F.name&&L.push({s:F.s0-90,text:F.name.toUpperCase()});for(let F of p.bridges)F.name&&F.s1-F.s0>150&&L.push({s:F.s0-40,text:F.name.toUpperCase()});for(let F of x.places||[])L.push({s:F.s-20,text:F.name.toUpperCase()});for(let F of x.props||[])F.label&&F.dist<700&&L.push({s:Math.max(0,F.s-500),text:F.label.toUpperCase()});L.sort((F,U)=>F.s-U.s),Xe.announce=L.filter(F=>F.s>=(p.raceStart||0)-60&&F.s<=p.raceEnd),Xe.announceIdx=0}return sn.setTrack(p),cg(),ig(.016),ts.snap(pl()),qf=I.player?.position||i.length,Yf=1,go=99,window.__game={stage:Xe,renderer:xi,scene:zt,camera:Rn,RL:Vh},window.__tick=og,Xe}var Ci={x:0,y:0,z:0,heading:0,yaw:0,lean:0,speedRatio:0,airborne:!1,boosting:!1,slope:0};function pl(){let n=Xe.playerBike,e=n.rider.state;return Ci.x=n.w.x,Ci.y=n.w.y,Ci.z=n.w.z,Ci.heading=n.w.heading,Ci.yaw=-ng(e),Ci.speedRatio=Math.min(1.3,e.speed/n.rider.stats.maxSpeed),Ci.airborne=e.airborne,Ci.boosting=e.boostT>0,Ci.slope=n.w.slope||0,Ci}var lT=.8,$0=.7;function ng(n){let e=n.vdir??n.yaw;return e+lT*(n.yaw-e)}function ig(n){let{track:e,fx:t,weather:i}=Xe;for(let s of Xe.bikes){let r=s.rider.state;It(e,r.s,r.d,s.w),s.w.y+=r.yRel||0;let o=s.model.group;o.position.set(s.w.x,s.w.y,s.w.z);let a=s.w.heading-ng(r),c=s.w.heading-(r.vdir??r.yaw);o.rotation.y=a,o.position.x+=$0*(Math.sin(a)-Math.sin(c)),o.position.z+=$0*(Math.cos(a)-Math.cos(c)),o.rotation.x=r.airborne?0:-Math.atan(s.w.slope||0);let l=s.pose;if(l.lean=r.lean,l.steer=r.steer,l.pitch=r.pitch,l.compress=r.compress,l.wheelSpin=r.wheelSpin,l.speedRatio=r.speed/s.rider.stats.maxSpeed,l.speed=r.speed,l.airborne=r.airborne,l.drift=r.drift,l.boost=r.boostT>0,l.braking=s.rider.isPlayer?fn.brake>.1:!!s.rider.braking,s.model.update(l,n),s.model.tailGlow){let y=l.braking?1:0;s.model.tailGlow.material.opacity+=(.3+.6*y-s.model.tailGlow.material.opacity)*Math.min(1,n*12),s.model.tailGlow.scale.setScalar(.3+.55*y)}let h=o.rotation.y,u=Math.sin(h),f=Math.cos(h),p=s.w.x-u*.7,g=s.w.z-f*.7,x=s.w.y+.05,m=u*r.speed,d=f*r.speed;!r.airborne&&r.speed>8&&(r.drift>.8&&(Math.random()<r.drift*.9&&t.emit("smoke",p,x,g,m*.2,1.2,d*.2,1),s.has&&t.addSkid(s.prev.x,s.prev.y,s.prev.z,p,x,g,.16,.25+r.drift*.4)),!r.onRoad&&Math.random()<.7&&t.emit("dust",p,x,g,m*.25,1.5,d*.25,2),i.wet>.2&&r.speed>20&&Math.random()<i.wet*.8&&t.emit("spray",p,x,g,m*.35,2.5,d*.35,2)),r.boostT>0&&t.emit("boost",p-u*.4,x+.45,g-f*.4,m*.9,.2,d*.9,1),s.prev.set(p,x,g),s.has=!r.airborne;let b=s.rider.isPlayer?null:s.rider.frameEvents;b&&b.length&&sg(s,b,!1)}}function sg(n,e,t){let{fx:i}=Xe,s=n.rider.state,r=n.model.group.rotation.y,o=Math.sin(r)*s.speed,a=Math.cos(r)*s.speed;for(let c of e)c==="land"||c==="hardLand"?(i.emit("land",n.w.x,n.w.y+.1,n.w.z,o*.3,1,a*.3,c==="hardLand"?40:22),t&&(kt.play("land"),ts.shake(c==="hardLand"?.9:.45))):c==="wall"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,3,a*.5,26),t&&(kt.play("hit"),ts.shake(.7))):c==="crash"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,4,a*.5,40),i.emit("dust",n.w.x,n.w.y+.2,n.w.z,o*.3,2,a*.3,30),t&&(ts.shake(1.4),sn.flash("CHUTE !",1400))):c==="jump"?t&&kt.play("jump"):c==="boost"?t&&(kt.play("boost"),ts.shake(.3),sn.flash("BOOST !",600)):c==="pad"&&t&&(kt.play("pad"),ts.shake(.2))}function uT(n){let{race:e,autoAI:t,track:i}=Xe,s=e.player,r=fn;if(t||Yt==="finish")if(t){let a=e.riders.filter(c=>c!==s).map(c=>c.state);r=Cc(t,s.state,i,s.stats,a,n)}else r=hT;if(e.update(n,r),tt?.traffic&&e.phase!=="countdown"){tt.traffic.update(n,s.state,e.riders);for(let a of tt.traffic.events)a.type==="near"&&!t?(sn.flash(a.boost?`FR\xD4LEMENT \xD7${a.combo} \xB7 BOOST +1`:`FR\xD4LEMENT \xD7${a.combo}`,900),kt.play(a.boost?"boost":"pad")):a.type==="hit"&&!t&&sn.flash("ACCROCHAGE",900)}let o=s.state.events;o.length&&(sg(Xe.playerBike,o,!t),o.length=0)}var hT={throttle:.3,brake:0,steer:0,boost:!1,drift:!1},Mn={speedKmh:0,position:1,total:8,lap:1,laps:3,time:0,bestLap:null,boostCharges:0,boostT:0,countdown:null,wrongWay:!1},Gf=[],Z0=new k,K0=performance.now(),ll=0,hl=0;function rg(n){requestAnimationFrame(rg);let e=Math.min(.05,(n-K0)/1e3);K0=n,og(e)}function og(n){if(!Xe)return;if(Wf){Xe.post.render(0);return}hl+=n,Xf+=n,Yt==="race"&&Os?.update(n);let{race:e}=Xe,t=Yt==="race"||Yt==="attract"||Yt==="finish";if(t){Yt==="race"&&rT(n),ll+=n;let a=0;for(;ll>=Hf&&a++<8;)uT(Hf),ll-=Hf;a>=8&&(ll=0)}ig(n);let i=e.player,s=i.state,r=Math.min(1.3,s.speed/i.stats.maxSpeed),o=pl();Yt==="intro"||Yt==="menu"||Yt==="finish"&&Xf>1.2?fT(o,n):ts.update(n,o),Z0.set(o.x,o.y,o.z),Xe.env.update(n,hl,Z0),Xe.mirror&&Xe.mirror.position.set(o.x,o.y-(s.yRel||0)+.02,o.z),Xe.sunGlow.position.copy(Rn.position).addScaledVector(Xe.sunGlow.userData.dir,3200),Xe.road.update(n,hl),Xe.fx.setSpeed(t?r:0,s.boostT>0),Xe.fx.update(n,Rn),xo&&(tt?.traffic&&Yt!=="attract"?xo.update(tt.traffic,Xe.track,s.s):xo.hide()),Xe.post.setSpeed(t?r:0,s.boostT>0),Xe.post.render(n),(Yt==="race"||Yt==="finish")&&(kt.setEngine(Math.min(1,r),Yt==="race"?fn.throttle:.3),kt.setWind(Math.min(1,r)),kt.setSkid(s.airborne?0:Math.min(1,s.drift))),Yt==="race"&&dT(e,i,s)}var J0=new k;function fT(n,e){let t=hl*.35+n.heading;J0.set(n.x+Math.sin(t)*7.5,n.y+2.6,n.z+Math.cos(t)*7.5),Rn.position.lerp(J0,Math.min(1,e*2.5)),Rn.fov+=(55-Rn.fov)*Math.min(1,e*3),Rn.updateProjectionMatrix(),Rn.lookAt(n.x,n.y+.9,n.z)}function dT(n,e,t){Mn.speedKmh=t.speed*3.6,Mn.position=e.position,Mn.total=n.riders.length,Mn.lap=Math.min(n.laps,Math.max(1,e.lap)),Mn.laps=n.laps,tt&&Yt!=="attract"&&(Mn.lap=tt.index+1,Mn.laps=tt.metas.length),sn.setLapLabel?.(tt&&Yt!=="attract"?"TRON\xC7ON":"TOUR"),Mn.time=n.time,Mn.bestLap=e.bestLap??null,Mn.boostCharges=t.boostCharges,Mn.boostT=t.boostT,Mn.gear=t.gear,Mn.rpm=t.rpm,Mn.countdown=n.phase==="countdown"?n.countdown:n.time<.9?0:null,Mn.wrongWay=Math.abs(t.yaw)>1.4,sn.update(Mn),Gf.length=0;for(let i of n.riders)Gf.push({s:i.state.s,d:i.state.d,isPlayer:!!i.isPlayer,color:i.color});if(sn.updateMinimap(Gf),n.phase==="countdown"){let i=Math.ceil(n.countdown);i!==go&&(go=i,i>0&&kt.play("beep"))}else go!==0&&(go=0,kt.play("go"),kt.startMusic?.());if(n.phase==="racing"){let i=Xe.announce;if(i)for(;Xe.announceIdx<i.length&&i[Xe.announceIdx].s<=t.s;)sn.flash(i[Xe.announceIdx].text,2e3),Xe.announceIdx++;e.position<qf&&!(i&&Xe.announceIdx>0&&t.s-i[Xe.announceIdx-1].s<120)&&sn.flash(e.position===1?"EN T\xCATE !":"+1 PLACE",700),qf=e.position,e.lap!==Yf&&e.lap<=n.laps&&(Yf=e.lap,kt.play("lap"),e.lap===n.laps&&sn.flash("DERNIER TOUR",1400))}tt&&Yt==="race"&&n.phase==="racing"&&pT(t.s),n.phase==="relay"&&Yt==="race"&&gT(),n.phase==="finished"&&Yt==="race"&&xT()}var tt=null,j0=["track","near","mid","road"];function pT(n){let e=tt.metas[tt.index+1];if(!e||n<Xe.track.raceEnd*.35)return;let t=fl.get(e.id);if(!t||(tt.prepFor!==e.id&&(tt.prepFor=e.id,tt.prepStep=0,tt.prepWait=0),tt.prepStep>=j0.length||tt.prepWait-- >0))return;let i=j0[tt.prepStep++];tt.prepWait=20,i==="track"?t._track=Jh(t):i==="road"?t._road=Xh(t._track,Ti[tt.weatherId]||Ti.sunset,Ln("REAL:"+e.id).fork("road")):Xm(t,i)}var xo=null,ns=Jm(),Os=null;function ag(n){let e=tt.metas[tt.splits.length],t=tt.splits.length===0,i=Qm(ns,e.id+(t?":g":":r"),n-tt.splitStart);return tt.splitStart=n,tt.splits.push({name:e.subtitle,...i}),Kc(ns),i}function mT(){if(!Pt)return;let n=t0(Uc({...Pt,stageIndex:tt.index}));if(!n.length)return;let e=t=>{if(!Fc(Pt,t.id))return;let i=tt.riders.find(s=>s.isPlayer);i&&Object.assign(i.stats,tr(Pt)),sn.flash(`${t.icon||""} ${t.name.toUpperCase()}`,1800),kt.play("lap")};if(tt.autopilot&&!Un.has("pick")){e(n[0]);return}Os=Os||n0(),Os.show(n,e,9)}function gT(){let n=tt&&tt.metas[tt.index+1];if(!n)return;let e=fl.get(n.id);if(!e){tt.waiting||(tt.waiting=!0,sn.flash("CHARGEMENT\u2026",1500),da(n).catch(()=>{}));return}let t=Xe.race,i=t.player||t.riders[0],s=It(t.track,i.state.s,i.state.d,{}),r=Xe.clouds;Xe.clouds=null,r&&zt.remove(r);let o=(e.raceStart||0)-(t.track.raceEnd??t.track.length),a=new Map;for(let u of t.riders)u.state.s+=o,u.state._padKey=null,a.set(u.id,u.state);tt.traffic?.shift(o),tt.index+=1,tt.waiting=!1;let c=performance.now();if($f({trackSeed:"REAL:"+n.id,weatherId:tt.weatherId,laps:1,riders:tt.riders,autopilot:tt.autopilot,realData:e,final:tt.index===tt.metas.length-1,carry:{time:t.time,states:a},keepClouds:r}),r){let u=It(Xe.track,i.state.s,i.state.d,{});r.position.x+=u.x-s.x,r.position.z+=u.z-s.z}go=0,ts.snap(pl()),tt.hitch=Math.max(tt.hitch||0,performance.now()-c),window.__relay={index:tt.index,ms:Math.round(performance.now()-c)};let l=ag(t.time);sn.flash(`TRON\xC7ON ${Qh(l.time)}${l.delta===null?"":" ("+jm(l.delta)+")"}${l.record&&l.best!==null?" \xB7 RECORD":""} \u2014 ${n.subtitle.split(" \xB7 ")[0].toUpperCase()}`,3200),mT();let h=tt.metas[tt.index+1];h&&setTimeout(()=>da(h).catch(()=>{}),3e3)}function cg(){let n=innerWidth,e=innerHeight;xi.setSize(n,e,!1),Rn.aspect=n/e,Rn.updateProjectionMatrix(),Xe?.post.setSize(n,e)}addEventListener("resize",cg);function fa(n){Yt=n,Xf=0}var Pt=null,mo=zh(),lg=null;function xT(){if(fa("finish"),Os?.hide(),tt&&Pt){let n=Xe.race.player.finishTime??Xe.race.time,e=ag(n),t=!!bn&&tt.metas.length===bn.stages.length,i=t?e0(ns,n):null;ns.finishes+=1,Kc(ns),Pt.summary={splits:tt.splits,total:i,time:n,full:t,last:e}}sn.flash(`ARRIV\xC9E \u2014 ${Xe.race.player.position}${Xe.race.player.position===1?"er":"e"}`,2200),kt.play(Xe.race.player.position<=3?"win":"lose"),kt.stopMusic?.(),setTimeout(()=>lg?.(),3200)}async function Q0(){tt=null,xo?.hide(),Os?.hide();let n=Nc(Dc("ATTRACT"));for(let i of n)i.stats=tr({upgrades:[]});let e=bn?bn.stages[Math.min(3,bn.stages.length-1)]:null,t=e?await da(e).catch(()=>null):null;$f({trackSeed:t?"REAL:"+t.id:"ATTRACT-"+Oc(),weatherId:t?"sicily":"sunset",laps:t?1:99,riders:n,autopilot:!0,realData:t}),sn.hide(),fa("attract")}async function _T(){if(await c0().catch(n=>console.warn("Mod\xE8le de moto indisponible, repli sur le mod\xE8le proc\xE9dural :",n)),!Un.has("noreal")&&(bn=await fetch("assets/v3/route.json").then(n=>n.ok?n.json():null).catch(()=>null),bn&&!bn.stages?.length&&(bn=null),bn)){let n=await fetch("assets/v3/props/index.json").then(t=>t.ok?t.json():[]).catch(()=>[]);await Promise.all(Gm.filter(t=>n.includes(t)).map(t=>fetch(`assets/v3/props/${t}.json`).then(i=>i.ok?i.json():null).then(i=>{i&&(tg[t]=i)}).catch(()=>{})));let e=document.createElement("div");e.textContent="\xA9 contributeurs OpenStreetMap \xB7 relief Terrarium (Mapzen) \xB7 Sentinel-2 cloudless 2016 par EOX (CC BY 4.0)",e.style.cssText="position:fixed;left:50%;bottom:0.6vmin;transform:translateX(-50%);font:1.35vmin Arial,sans-serif;color:rgba(255,255,255,.72);text-shadow:0 1px 2px #000;pointer-events:none;z-index:40;white-space:nowrap",document.body.appendChild(e)}for(await Q0(),document.getElementById("boot").remove(),requestAnimationFrame(rg);;){let n=Un.get("seed"),e=Number(Un.get("stage"))||0;if(!n){let s=await es.showTitle({dailySeed:Oc(),meta:mo,route:bn,records:ns});n=s.seed,s.stage&&(e=s.stage)}if(kt.resume(),Pt=Dc(n),bn){let s=Math.floor(e)-1;Pt.real=!0,s>0&&s<bn.stages.length||(s=0);let r=bn.stages.slice(s),o=r.reduce((a,c)=>a+c.length,0)/1e3;Pt.stages=[{name:bn.title,subtitle:`${bn.roads} \xB7 ${o.toFixed(0)} km d'une traite`,trackSeed:"REAL:"+r[0].id,weather:"sicily",laps:1,real:r}]}for(;!jo(Pt);){let s=Pt.stages[Pt.stageIndex],r=tr(Pt),o=Nc(Pt).map(l=>({...l,stats:l.isPlayer?r:tr({upgrades:[]})}));es.hideAll();let a=null;tt=null,s.real&&(sn.flash?.("CHARGEMENT\u2026"),a=await da(s.real[0]),tt={metas:s.real,index:0,riders:o,autopilot:Un.has("auto"),weatherId:Un.get("weather")||s.weather,splits:[],splitStart:0},ns.runs+=1,Kc(ns),Un.has("notraffic")||(tt.traffic=$m({rng:Ln("trafic|"+n+"|"+ns.runs),count:40,density:2.6}),xo=xo||Zm(zt,40)),s.real[1]&&setTimeout(()=>da(s.real[1]).catch(()=>{}),4e3)),$f({trackSeed:s.trackSeed,weatherId:Un.get("weather")||s.weather,laps:s.laps,riders:o,autopilot:Un.has("auto"),realData:a,final:!s.real||s.real.length===1}),fa("intro"),kt.setRain(Xe.weather.rain||0),Un.has("auto")||await es.showStageIntro({stage:s,index:Pt.stageIndex+1,total:Pt.stages.length,standings:io(Pt),weather:Xe.weather}),es.hideAll(),ts.snap(pl()),sn.show(),fa("race"),await new Promise(l=>{lg=l}),sn.hide(),kt.setEngine(.1,0),kt.setWind(0),kt.setSkid(0);let c=Xe.race.results();if(Oh(Pt,c),await es.showResults({results:c,standings:io(Pt),stage:s}),!jo(Pt)){let l=Uc(Pt),h=Pt.upgrades.map(f=>er.find(p=>p.id===f)).filter(Boolean),u=await es.showUpgradeChoice({choices:l,index:Pt.stageIndex,total:Pt.stages.length,owned:h});Fc(Pt,u)}}let t=io(Pt),i=t.findIndex(s=>s.isPlayer)+1;mo=Hh(mo,Pt)||mo,kh(mo),fa("menu"),await es.showRunEnd({standings:t,playerPosition:i,run:Pt,meta:mo}),es.hideAll(),Un.delete("seed"),Un.delete("stage"),await Q0()}}_T().catch(n=>{console.error(n);let e=document.getElementById("boot")||document.body.appendChild(Object.assign(document.createElement("div"),{id:"boot"}));e.className="err",e.textContent=`Erreur de d\xE9marrage :
`+(n?.stack||n)});
