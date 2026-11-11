var eg=Object.defineProperty;var tg=(n,e)=>{for(var t in e)eg(n,t,{get:e[t],enumerable:!0})};var ng=0,Gf=1,ig=2;var xc=1,sg=2,Fi=3,yi=0,Jt=1,Ct=2,_i=0,Lr=1,Fr=2,Wf=3,Xf=4,Qu=5,Oi=100,rg=101,og=102,ag=103,cg=104,lg=200,eh=201,ug=202,hg=203,Hl=204,Uo=205,fg=206,dg=207,pg=208,mg=209,gg=210,xg=211,_g=212,yg=213,vg=214,Vl=0,Gl=1,Wl=2,Or=3,Xl=4,ql=5,Yl=6,$l=7,th=0,Mg=1,bg=2,ds=0,nh=1,ih=2,sh=3,Xo=4,Sg=5,rh=6,oh=7,qf="attached",Eg="detached",up=300,Br=301,zr=302,Zl=303,Kl=304,_c=306,Hi=1e3,Bi=1001,Fo=1002,rn=1003,ah=1004;var Ir=1005;var In=1006,Po=1007;var Zn=1008;var Vi=1009,hp=1010,fp=1011,Oo=1012,ch=1013,Xs=1014,li=1015,An=1016,lh=1017,uh=1018,kr=1020,dp=35902,pp=1021,mp=1022,Kn=1023,gp=1024,xp=1025,Dr=1026,Hr=1027,hh=1028,fh=1029,_p=1030,dh=1031;var ph=1033,Va=33776,Ga=33777,Wa=33778,Xa=33779,Jl=35840,jl=35841,Ql=35842,eu=35843,tu=36196,nu=37492,iu=37496,su=37808,ru=37809,ou=37810,au=37811,cu=37812,lu=37813,uu=37814,hu=37815,fu=37816,du=37817,pu=37818,mu=37819,gu=37820,xu=37821,qa=36492,_u=36494,yu=36495,yp=36283,vu=36284,Mu=36285,bu=36286;var Vr=2300,Gr=2301,cl=2302,Yf=2400,$f=2401,Zf=2402,Tg=2500;var vp=0,yc=1,qo=2,wg=3200,Ag=3201;var mh=0,Rg=1,us="",Rt="srgb",yn="srgb-linear",vc="linear",St="srgb";var hr=7680;var Kf=519,Cg=512,Ig=513,Pg=514,Mp=515,Lg=516,Dg=517,Ng=518,Ug=519,Su=35044,Mi=35048;var Jf="300 es",zi=2e3,Ya=2001,ps=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jf=1234567,Lo=Math.PI/180,Wr=180/Math.PI;function ui(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function xn(n,e,t){return Math.max(e,Math.min(t,n))}function gh(n,e){return(n%e+e)%e}function Fg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Og(n,e,t){return n!==e?(t-n)/(e-n):0}function Do(n,e,t){return(1-t)*n+t*e}function Bg(n,e,t,i){return Do(n,e,1-Math.exp(-t*i))}function zg(n,e=1){return e-Math.abs(gh(n,e*2)-e)}function kg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Hg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Vg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Gg(n,e){return n+Math.random()*(e-n)}function Wg(n){return n*(.5-Math.random())}function Xg(n){n!==void 0&&(jf=n);let e=jf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qg(n){return n*Lo}function Yg(n){return n*Wr}function $g(n){return(n&n-1)===0&&n!==0}function Zg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Kg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Jg(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ci(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var bp={DEG2RAD:Lo,RAD2DEG:Wr,generateUUID:ui,clamp:xn,euclideanModulo:gh,mapLinear:Fg,inverseLerp:Og,lerp:Do,damp:Bg,pingpong:zg,smoothstep:kg,smootherstep:Hg,randInt:Vg,randFloat:Gg,randFloatSpread:Wg,seededRandom:Xg,degToRad:qg,radToDeg:Yg,isPowerOfTwo:$g,ceilPowerOfTwo:Zg,floorPowerOfTwo:Kg,setQuaternionFromProperEuler:Jg,normalize:wt,denormalize:ci},Ke=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(xn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lt=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],b=s[1],v=s[4],x=s[7],E=s[2],T=s[5],y=s[8];return r[0]=o*_+a*b+c*E,r[3]=o*m+a*v+c*T,r[6]=o*p+a*x+c*y,r[1]=l*_+h*b+u*E,r[4]=l*m+h*v+u*T,r[7]=l*p+h*x+u*y,r[2]=f*_+d*b+g*E,r[5]=f*m+d*v+g*T,r[8]=f*p+d*x+g*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=t*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ll.makeScale(e,t)),this}rotate(e){return this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ll=new lt;function Sp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jg(){let n=Bo("canvas");return n.style.display="block",n}var Qf={};function Co(n){n in Qf||(Qf[n]=!0,console.warn(n))}function Qg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function ex(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tx(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var dt={enabled:!0,workingColorSpace:yn,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===St&&(n.r=ki(n.r),n.g=ki(n.g),n.b=ki(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===St&&(n.r=Nr(n.r),n.g=Nr(n.g),n.b=Nr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===us?vc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ed=[.64,.33,.3,.6,.15,.06],td=[.2126,.7152,.0722],nd=[.3127,.329],id=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sd=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);dt.define({[yn]:{primaries:ed,whitePoint:nd,transfer:vc,toXYZ:id,fromXYZ:sd,luminanceCoefficients:td,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:ed,whitePoint:nd,transfer:St,toXYZ:id,fromXYZ:sd,luminanceCoefficients:td,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}});var fr,Eu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fr===void 0&&(fr=Bo("canvas")),fr.width=e.width,fr.height=e.height;let i=fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Bo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ki(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ki(t[i]/255)*255):t[i]=ki(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},nx=0,$a=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ul(s[o].image)):r.push(ul(s[o]))}else r=ul(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ul(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Eu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ix=0,on=class n extends ps{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Bi,s=Bi,r=In,o=Zn,a=Kn,c=Vi,l=n.DEFAULT_ANISOTROPY,h=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=ui(),this.name="",this.source=new $a(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==up)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hi:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case Fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hi:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case Fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=up;on.DEFAULT_ANISOTROPY=1;var yt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,x=(d+1)/2,E=(p+1)/2,T=(h+f)/4,y=(u+_)/4,w=(g+m)/4;return v>x&&v>E?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=T/i,r=y/i):x>E?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=T/s,r=w/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=y/r,s=w/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(f-h)/b,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tu=class extends ps{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new on(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new $a(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends Tu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Za=class extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var wu=class extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var en=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-a,p=c*f+l*d+h*g+u*_,b=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let E=Math.sqrt(v),T=Math.atan2(E,p*b);m=Math.sin(m*T)/E,a=Math.sin(a*T)/E}let x=a*b;if(c=c*m+f*x,l=l*m+d*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-a*d,e[t+2]=l*g+h*d+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),f=c(i/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hl.copy(this).projectOnVector(e),this.sub(hl)}reflect(e){return this.sub(hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(xn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hl=new k,rd=new en,Jn=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fa.copy(i.boundingBox)),fa.applyMatrix4(e.matrixWorld),this.union(fa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),da.subVectors(this.max,_o),dr.subVectors(e.a,_o),pr.subVectors(e.b,_o),mr.subVectors(e.c,_o),ss.subVectors(pr,dr),rs.subVectors(mr,pr),Os.subVectors(dr,mr);let t=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Os.z,Os.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Os.z,0,-Os.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Os.y,Os.x,0];return!fl(t,dr,pr,mr,da)||(t=[1,0,0,0,1,0,0,0,1],!fl(t,dr,pr,mr,da))?!1:(pa.crossVectors(ss,rs),t=[pa.x,pa.y,pa.z],fl(t,dr,pr,mr,da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ii=[new k,new k,new k,new k,new k,new k,new k,new k],si=new k,fa=new Jn,dr=new k,pr=new k,mr=new k,ss=new k,rs=new k,Os=new k,_o=new k,da=new k,pa=new k,Bs=new k;function fl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Bs.fromArray(n,r);let a=s.x*Math.abs(Bs.x)+s.y*Math.abs(Bs.y)+s.z*Math.abs(Bs.z),c=e.dot(Bs),l=t.dot(Bs),h=i.dot(Bs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var sx=new Jn,yo=new k,dl=new k,On=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):sx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);let t=yo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(yo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(dl)),this.expandByPoint(yo.copy(e.center).sub(dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pi=new k,pl=new k,ma=new k,os=new k,ml=new k,ga=new k,gl=new k,Xr=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){pl.copy(e).add(t).multiplyScalar(.5),ma.copy(t).sub(e).normalize(),os.copy(this.origin).sub(pl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ma),a=os.dot(this.direction),c=-os.dot(ma),l=os.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(pl).addScaledVector(ma,f),d}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);let i=Pi.dot(this.direction),s=Pi.dot(Pi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,i,s,r){ml.subVectors(t,e),ga.subVectors(i,e),gl.crossVectors(ml,ga);let o=this.direction.dot(gl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;os.subVectors(this.origin,e);let c=a*this.direction.dot(ga.crossVectors(os,ga));if(c<0)return null;let l=a*this.direction.dot(ml.cross(os));if(l<0||c+l>o)return null;let h=-a*os.dot(gl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class n{constructor(e,t,i,s,r,o,a,c,l,h,u,f,d,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,f,d,g,_,m)}set(e,t,i,s,r,o,a,c,l,h,u,f,d,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/gr.setFromMatrixColumn(e,0).length(),r=1/gr.setFromMatrixColumn(e,1).length(),o=1/gr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rx,e,ox)}lookAt(e,t,i){let s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),as.crossVectors(i,Un),as.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),as.crossVectors(i,Un)),as.normalize(),xa.crossVectors(Un,as),s[0]=as.x,s[4]=xa.x,s[8]=Un.x,s[1]=as.y,s[5]=xa.y,s[9]=Un.y,s[2]=as.z,s[6]=xa.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],b=i[3],v=i[7],x=i[11],E=i[15],T=s[0],y=s[4],w=s[8],M=s[12],S=s[1],I=s[5],B=s[9],z=s[13],L=s[2],F=s[6],U=s[10],Y=s[14],H=s[3],ne=s[7],ue=s[11],me=s[15];return r[0]=o*T+a*S+c*L+l*H,r[4]=o*y+a*I+c*F+l*ne,r[8]=o*w+a*B+c*U+l*ue,r[12]=o*M+a*z+c*Y+l*me,r[1]=h*T+u*S+f*L+d*H,r[5]=h*y+u*I+f*F+d*ne,r[9]=h*w+u*B+f*U+d*ue,r[13]=h*M+u*z+f*Y+d*me,r[2]=g*T+_*S+m*L+p*H,r[6]=g*y+_*I+m*F+p*ne,r[10]=g*w+_*B+m*U+p*ue,r[14]=g*M+_*z+m*Y+p*me,r[3]=b*T+v*S+x*L+E*H,r[7]=b*y+v*I+x*F+E*ne,r[11]=b*w+v*B+x*U+E*ue,r[15]=b*M+v*z+x*Y+E*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*f+i*l*f+s*a*d-i*c*d)+_*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+t*l*u-t*a*d-r*o*u+i*o*d+r*a*h-i*l*h)+p*(-s*a*h-t*c*u+t*a*f+s*o*u-i*o*f+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=u*m*l-_*f*l+_*c*d-a*m*d-u*c*p+a*f*p,v=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,x=h*_*l-g*u*l+g*a*d-o*_*d-h*a*p+o*u*p,E=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,T=t*b+i*v+s*x+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let y=1/T;return e[0]=b*y,e[1]=(_*f*r-u*m*r-_*s*d+i*m*d+u*s*p-i*f*p)*y,e[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*p+i*c*p)*y,e[3]=(u*c*r-a*f*r-u*s*l+i*f*l+a*s*d-i*c*d)*y,e[4]=v*y,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*y,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*y,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*y,e[8]=x*y,e[9]=(g*u*r-h*_*r-g*i*d+t*_*d+h*i*p-t*u*p)*y,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*p+t*a*p)*y,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*d-t*a*d)*y,e[12]=E*y,e[13]=(h*_*s-g*u*s+g*i*f-t*_*f-h*i*m+t*u*m)*y,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*m-t*a*m)*y,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*f+t*a*f)*y,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,b=c*l,v=c*h,x=c*u,E=i.x,T=i.y,y=i.z;return s[0]=(1-(_+p))*E,s[1]=(d+x)*E,s[2]=(g-v)*E,s[3]=0,s[4]=(d-x)*T,s[5]=(1-(f+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+v)*y,s[9]=(m-b)*y,s[10]=(1-(f+_))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=gr.set(s[0],s[1],s[2]).length(),o=gr.set(s[4],s[5],s[6]).length(),a=gr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ri.copy(this);let l=1/r,h=1/o,u=1/a;return ri.elements[0]*=l,ri.elements[1]*=l,ri.elements[2]*=l,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=u,ri.elements[9]*=u,ri.elements[10]*=u,t.setFromRotationMatrix(ri),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=zi){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),d,g;if(a===zi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ya)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=zi){let c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*l,d=(i+s)*h,g,_;if(a===zi)g=(o+r)*u,_=-2*u;else if(a===Ya)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},gr=new k,ri=new et,rx=new k(0,0,0),ox=new k(1,1,1),as=new k,xa=new k,Un=new k,od=new et,ad=new en,hi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(xn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(od,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ad.setFromEuler(this),this.setFromQuaternion(ad,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var Ka=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ax=0,cd=new k,xr=new en,Li=new et,_a=new k,vo=new k,cx=new k,lx=new en,ld=new k(1,0,0),ud=new k(0,1,0),hd=new k(0,0,1),fd={type:"added"},ux={type:"removed"},_r={type:"childadded",child:null},xl={type:"childremoved",child:null},Ut=class n extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new k,t=new hi,i=new en,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new lt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(ld,e)}rotateY(e){return this.rotateOnAxis(ud,e)}rotateZ(e){return this.rotateOnAxis(hd,e)}translateOnAxis(e,t){return cd.copy(e).applyQuaternion(this.quaternion),this.position.add(cd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ld,e)}translateY(e){return this.translateOnAxis(ud,e)}translateZ(e){return this.translateOnAxis(hd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_a.copy(e):_a.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(vo,_a,this.up):Li.lookAt(_a,vo,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),xr.setFromRotationMatrix(Li),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fd),_r.child=e,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ux),xl.child=e,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fd),_r.child=e,this.dispatchEvent(_r),_r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,e,cx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,lx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new k(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oi=new k,Di=new k,_l=new k,Ni=new k,yr=new k,vr=new k,dd=new k,yl=new k,vl=new k,Ml=new k,bl=new yt,Sl=new yt,El=new yt,hs=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),oi.subVectors(e,t),s.cross(oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){oi.subVectors(s,t),Di.subVectors(i,t),_l.subVectors(e,t);let o=oi.dot(oi),a=oi.dot(Di),c=oi.dot(_l),l=Di.dot(Di),h=Di.dot(_l),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ni.x),c.addScaledVector(o,Ni.y),c.addScaledVector(a,Ni.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return bl.setScalar(0),Sl.setScalar(0),El.setScalar(0),bl.fromBufferAttribute(e,t),Sl.fromBufferAttribute(e,i),El.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(bl,r.x),o.addScaledVector(Sl,r.y),o.addScaledVector(El,r.z),o}static isFrontFacing(e,t,i,s){return oi.subVectors(i,t),Di.subVectors(e,t),oi.cross(Di).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),oi.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;yr.subVectors(s,i),vr.subVectors(r,i),yl.subVectors(e,i);let c=yr.dot(yl),l=vr.dot(yl);if(c<=0&&l<=0)return t.copy(i);vl.subVectors(e,s);let h=yr.dot(vl),u=vr.dot(vl);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(yr,o);Ml.subVectors(e,r);let d=yr.dot(Ml),g=vr.dot(Ml);if(g>=0&&d<=g)return t.copy(r);let _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(vr,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return dd.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(dd,a);let p=1/(m+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(yr,o).addScaledVector(vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},ya={h:0,s:0,l:0};function Tl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Re=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=dt.workingColorSpace){if(e=gh(e,1),t=xn(t,0,1),i=xn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Tl(o,r,e+1/3),this.g=Tl(o,r,e),this.b=Tl(o,r,e-1/3)}return dt.toWorkingColorSpace(this,s),this}setStyle(e,t=Rt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let i=Ep[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return dt.fromWorkingColorSpace(gn.copy(this),e),Math.round(xn(gn.r*255,0,255))*65536+Math.round(xn(gn.g*255,0,255))*256+Math.round(xn(gn.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(gn.copy(this),t);let i=gn.r,s=gn.g,r=gn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Rt){dt.fromWorkingColorSpace(gn.copy(this),e);let t=gn.r,i=gn.g,s=gn.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+t,cs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cs),e.getHSL(ya);let i=Do(cs.h,ya.h,t),s=Do(cs.s,ya.s,t),r=Do(cs.l,ya.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Re;Re.NAMES=Ep;var hx=0,Tn=class extends ps{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=ui(),this.name="",this.blending=Lr,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hl,this.blendDst=Uo,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hl&&(i.blendSrc=this.blendSrc),this.blendDst!==Uo&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Xt=class extends Tn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Kt=new k,va=new Ke,mt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Su,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Su&&(e.usage=this.usage),e}};var Ja=class extends mt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ja=class extends mt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ht=class extends mt{constructor(e,t,i){super(new Float32Array(e),t,i)}},fx=0,$n=new et,wl=new Ut,Mr=new k,Fn=new Jn,Mo=new Jn,sn=new k,xt=class n extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sp(e)?ja:Ja)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new lt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,i){return $n.makeTranslation(e,t,i),this.applyMatrix4($n),this}scale(e,t,i){return $n.makeScale(e,t,i),this.applyMatrix4($n),this}lookAt(e){return wl.lookAt(e),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Mo.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Fn.min,Mo.min),Fn.expandByPoint(sn),sn.addVectors(Fn.max,Mo.max),Fn.expandByPoint(sn)):(Fn.expandByPoint(Mo.min),Fn.expandByPoint(Mo.max))}Fn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)sn.fromBufferAttribute(a,l),c&&(Mr.fromBufferAttribute(e,l),sn.add(Mr)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<i.count;w++)a[w]=new k,c[w]=new k;let l=new k,h=new k,u=new k,f=new Ke,d=new Ke,g=new Ke,_=new k,m=new k;function p(w,M,S){l.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,S),f.fromBufferAttribute(r,w),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(I),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),a[w].add(_),a[M].add(_),a[S].add(_),c[w].add(m),c[M].add(m),c[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,M=b.length;w<M;++w){let S=b[w],I=S.start,B=S.count;for(let z=I,L=I+B;z<L;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let v=new k,x=new k,E=new k,T=new k;function y(w){E.fromBufferAttribute(s,w),T.copy(E);let M=a[w];v.copy(M),v.sub(E.multiplyScalar(E.dot(M))).normalize(),x.crossVectors(T,M);let I=x.dot(c[w])<0?-1:1;o.setXYZW(w,v.x,v.y,v.z,I)}for(let w=0,M=b.length;w<M;++w){let S=b[w],I=S.start,B=S.count;for(let z=I,L=I+B;z<L;z+=3)y(e.getX(z+0)),y(e.getX(z+1)),y(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new k,r=new k,o=new k,a=new k,c=new k,l=new k,h=new k,u=new k;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new mt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pd=new et,zs=new Xr,Ma=new On,md=new k,ba=new k,Sa=new k,Ea=new k,Al=new k,Ta=new k,gd=new k,wa=new k,at=class extends Ut{constructor(e=new xt,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ta.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Al.fromBufferAttribute(u,e),o?Ta.addScaledVector(Al,h):Ta.addScaledVector(Al.sub(t),h))}t.add(Ta)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(r),zs.copy(e.ray).recast(e.near),!(Ma.containsPoint(zs.origin)===!1&&(zs.intersectSphere(Ma,md)===null||zs.origin.distanceToSquared(md)>(e.far-e.near)**2))&&(pd.copy(r).invert(),zs.copy(e.ray).applyMatrix4(pd),!(i.boundingBox!==null&&zs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=b,E=v;x<E;x+=3){let T=a.getX(x),y=a.getX(x+1),w=a.getX(x+2);s=Aa(this,p,e,i,l,h,u,T,y,w),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let b=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);s=Aa(this,o,e,i,l,h,u,b,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=b,E=v;x<E;x+=3){let T=x,y=x+1,w=x+2;s=Aa(this,p,e,i,l,h,u,T,y,w),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let b=m,v=m+1,x=m+2;s=Aa(this,o,e,i,l,h,u,b,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function dx(n,e,t,i,s,r,o,a){let c;if(e.side===Jt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===yi,a),c===null)return null;wa.copy(a),wa.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(wa);return l<t.near||l>t.far?null:{distance:l,point:wa.clone(),object:n}}function Aa(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ba),n.getVertexPosition(c,Sa),n.getVertexPosition(l,Ea);let h=dx(n,e,t,i,ba,Sa,Ea,gd);if(h){let u=new k;hs.getBarycoord(gd,ba,Sa,Ea,u),s&&(h.uv=hs.getInterpolatedAttribute(s,a,c,l,u,new Ke)),r&&(h.uv1=hs.getInterpolatedAttribute(r,a,c,l,u,new Ke)),o&&(h.normal=hs.getInterpolatedAttribute(o,a,c,l,u,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new k,materialIndex:0};hs.getNormal(ba,Sa,Ea,f.normal),h.face=f,h.barycoord=u}return h}var an=class n extends xt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function g(_,m,p,b,v,x,E,T,y,w,M){let S=x/y,I=E/w,B=x/2,z=E/2,L=T/2,F=y+1,U=w+1,Y=0,H=0,ne=new k;for(let ue=0;ue<U;ue++){let me=ue*I-z;for(let be=0;be<F;be++){let le=be*S-B;ne[_]=le*b,ne[m]=me*v,ne[p]=L,l.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[p]=T>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(be/y),u.push(1-ue/w),Y+=1}}for(let ue=0;ue<w;ue++)for(let me=0;me<y;me++){let be=f+me+F*ue,le=f+me+F*(ue+1),te=f+(me+1)+F*(ue+1),$=f+(me+1)+F*ue;c.push(be,le,$),c.push(le,te,$),H+=6}a.addGroup(d,H,M),d+=H,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function qr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function En(n){let e={};for(let t=0;t<n.length;t++){let i=qr(n[t]);for(let s in i)e[s]=i[s]}return e}function px(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Tp(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var bi={clone:qr,merge:En},mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Et=class extends Tn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mx,this.fragmentShader=gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=px(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Qa=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ls=new k,xd=new Ke,_d=new Ke,Yt=class extends Qa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,xd,_d),t.subVectors(_d,xd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Lo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},br=-90,Sr=1,Au=class extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Yt(br,Sr,e,t);s.layers=this.layers,this.add(s);let r=new Yt(br,Sr,e,t);r.layers=this.layers,this.add(r);let o=new Yt(br,Sr,e,t);o.layers=this.layers,this.add(o);let a=new Yt(br,Sr,e,t);a.layers=this.layers,this.add(a);let c=new Yt(br,Sr,e,t);c.layers=this.layers,this.add(c);let l=new Yt(br,Sr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ec=class extends on{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Br,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ru=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ec(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:In}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new an(5,5,5),r=new Et({name:"CubemapFromEquirect",uniforms:qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:_i});r.uniforms.tEquirect.value=t;let o=new at(s,r),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=In),new Au(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Rl=new k,xx=new k,_x=new lt,ai=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Rl.subVectors(i,t).cross(xx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Rl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||_x.getNormalMatrix(e),s=this.coplanarPoint(Rl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ks=new On,Ra=new k,zo=class{constructor(e=new ai,t=new ai,i=new ai,s=new ai,r=new ai,o=new ai){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],b=s[13],v=s[14],x=s[15];if(i[0].setComponents(c-r,f-l,m-d,x-p).normalize(),i[1].setComponents(c+r,f+l,m+d,x+p).normalize(),i[2].setComponents(c+o,f+h,m+g,x+b).normalize(),i[3].setComponents(c-o,f-h,m-g,x-b).normalize(),i[4].setComponents(c-a,f-u,m-_,x-v).normalize(),t===zi)i[5].setComponents(c+a,f+u,m+_,x+v).normalize();else if(t===Ya)i[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(e){return ks.center.set(0,0,0),ks.radius=.7071067811865476,ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ra.x=s.normal.x>0?e.max.x:e.min.x,Ra.y=s.normal.y>0?e.max.y:e.min.y,Ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function wp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function yx(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Pn=class n extends xt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let b=p*f-o;for(let v=0;v<l;v++){let x=v*u-r;g.push(x,-b,0),_.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){let v=b+l*p,x=b+l*(p+1),E=b+1+l*(p+1),T=b+1+l*p;d.push(v,x,T),d.push(x,E,T)}this.setIndex(d),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},vx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mx=`#ifdef USE_ALPHAHASH
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
#endif`,bx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ex=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wx=`#ifdef USE_AOMAP
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
#endif`,Ax=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rx=`#ifdef USE_BATCHING
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
#endif`,Cx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ix=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Px=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dx=`#ifdef USE_IRIDESCENCE
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
#endif`,Nx=`#ifdef USE_BUMPMAP
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
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gx=`#define PI 3.141592653589793
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
} // validated`,Wx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xx=`vec3 transformedNormal = objectNormal;
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
#endif`,qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$x=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e_=`#ifdef USE_ENVMAP
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
#endif`,t_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n_=`#ifdef USE_ENVMAP
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
#endif`,i_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a_=`#ifdef USE_GRADIENTMAP
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
}`,c_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h_=`uniform bool receiveShadow;
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
#endif`,f_=`#ifdef USE_ENVMAP
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
#endif`,d_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x_=`PhysicalMaterial material;
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
#endif`,__=`struct PhysicalMaterial {
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
}`,y_=`
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
#endif`,v_=`#if defined( RE_IndirectDiffuse )
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
#endif`,M_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,C_=`#if defined( USE_POINTS_UV )
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
#endif`,I_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U_=`#ifdef USE_MORPHTARGETS
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
#endif`,F_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,B_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V_=`#ifdef USE_NORMALMAP
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
#endif`,G_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ty=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sy=`float getShadowMask() {
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
}`,ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oy=`#ifdef USE_SKINNING
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
#endif`,ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cy=`#ifdef USE_SKINNING
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
#endif`,ly=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dy=`#ifdef USE_TRANSMISSION
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
#endif`,py=`#ifdef USE_TRANSMISSION
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
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vy=`uniform sampler2D t2D;
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
}`,My=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ey=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`#include <common>
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
}`,wy=`#if DEPTH_PACKING == 3200
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
}`,Ay=`#define DISTANCE
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
}`,Ry=`#define DISTANCE
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
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`uniform float scale;
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Dy=`#include <common>
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
}`,Ny=`uniform vec3 diffuse;
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
}`,Uy=`#define LAMBERT
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
}`,Fy=`#define LAMBERT
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
}`,Oy=`#define MATCAP
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
}`,By=`#define MATCAP
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
}`,zy=`#define NORMAL
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
}`,ky=`#define NORMAL
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
}`,Hy=`#define PHONG
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
}`,Vy=`#define PHONG
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
}`,Gy=`#define STANDARD
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
}`,Wy=`#define STANDARD
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
}`,Xy=`#define TOON
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
}`,qy=`#define TOON
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
}`,Yy=`uniform float size;
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
}`,$y=`uniform vec3 diffuse;
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
}`,Zy=`#include <common>
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
}`,Ky=`uniform vec3 color;
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
}`,Jy=`uniform float rotation;
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
}`,jy=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:vx,alphahash_pars_fragment:Mx,alphamap_fragment:bx,alphamap_pars_fragment:Sx,alphatest_fragment:Ex,alphatest_pars_fragment:Tx,aomap_fragment:wx,aomap_pars_fragment:Ax,batching_pars_vertex:Rx,batching_vertex:Cx,begin_vertex:Ix,beginnormal_vertex:Px,bsdfs:Lx,iridescence_fragment:Dx,bumpmap_pars_fragment:Nx,clipping_planes_fragment:Ux,clipping_planes_pars_fragment:Fx,clipping_planes_pars_vertex:Ox,clipping_planes_vertex:Bx,color_fragment:zx,color_pars_fragment:kx,color_pars_vertex:Hx,color_vertex:Vx,common:Gx,cube_uv_reflection_fragment:Wx,defaultnormal_vertex:Xx,displacementmap_pars_vertex:qx,displacementmap_vertex:Yx,emissivemap_fragment:$x,emissivemap_pars_fragment:Zx,colorspace_fragment:Kx,colorspace_pars_fragment:Jx,envmap_fragment:jx,envmap_common_pars_fragment:Qx,envmap_pars_fragment:e_,envmap_pars_vertex:t_,envmap_physical_pars_fragment:f_,envmap_vertex:n_,fog_vertex:i_,fog_pars_vertex:s_,fog_fragment:r_,fog_pars_fragment:o_,gradientmap_pars_fragment:a_,lightmap_pars_fragment:c_,lights_lambert_fragment:l_,lights_lambert_pars_fragment:u_,lights_pars_begin:h_,lights_toon_fragment:d_,lights_toon_pars_fragment:p_,lights_phong_fragment:m_,lights_phong_pars_fragment:g_,lights_physical_fragment:x_,lights_physical_pars_fragment:__,lights_fragment_begin:y_,lights_fragment_maps:v_,lights_fragment_end:M_,logdepthbuf_fragment:b_,logdepthbuf_pars_fragment:S_,logdepthbuf_pars_vertex:E_,logdepthbuf_vertex:T_,map_fragment:w_,map_pars_fragment:A_,map_particle_fragment:R_,map_particle_pars_fragment:C_,metalnessmap_fragment:I_,metalnessmap_pars_fragment:P_,morphinstance_vertex:L_,morphcolor_vertex:D_,morphnormal_vertex:N_,morphtarget_pars_vertex:U_,morphtarget_vertex:F_,normal_fragment_begin:O_,normal_fragment_maps:B_,normal_pars_fragment:z_,normal_pars_vertex:k_,normal_vertex:H_,normalmap_pars_fragment:V_,clearcoat_normal_fragment_begin:G_,clearcoat_normal_fragment_maps:W_,clearcoat_pars_fragment:X_,iridescence_pars_fragment:q_,opaque_fragment:Y_,packing:$_,premultiplied_alpha_fragment:Z_,project_vertex:K_,dithering_fragment:J_,dithering_pars_fragment:j_,roughnessmap_fragment:Q_,roughnessmap_pars_fragment:ey,shadowmap_pars_fragment:ty,shadowmap_pars_vertex:ny,shadowmap_vertex:iy,shadowmask_pars_fragment:sy,skinbase_vertex:ry,skinning_pars_vertex:oy,skinning_vertex:ay,skinnormal_vertex:cy,specularmap_fragment:ly,specularmap_pars_fragment:uy,tonemapping_fragment:hy,tonemapping_pars_fragment:fy,transmission_fragment:dy,transmission_pars_fragment:py,uv_pars_fragment:my,uv_pars_vertex:gy,uv_vertex:xy,worldpos_vertex:_y,background_vert:yy,background_frag:vy,backgroundCube_vert:My,backgroundCube_frag:by,cube_vert:Sy,cube_frag:Ey,depth_vert:Ty,depth_frag:wy,distanceRGBA_vert:Ay,distanceRGBA_frag:Ry,equirect_vert:Cy,equirect_frag:Iy,linedashed_vert:Py,linedashed_frag:Ly,meshbasic_vert:Dy,meshbasic_frag:Ny,meshlambert_vert:Uy,meshlambert_frag:Fy,meshmatcap_vert:Oy,meshmatcap_frag:By,meshnormal_vert:zy,meshnormal_frag:ky,meshphong_vert:Hy,meshphong_frag:Vy,meshphysical_vert:Gy,meshphysical_frag:Wy,meshtoon_vert:Xy,meshtoon_frag:qy,points_vert:Yy,points_frag:$y,shadow_vert:Zy,shadow_frag:Ky,sprite_vert:Jy,sprite_frag:jy},We={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},xi={basic:{uniforms:En([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:En([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Re(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:En([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:En([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:En([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Re(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:En([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:En([We.points,We.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:En([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:En([We.common,We.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:En([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:En([We.sprite,We.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:En([We.common,We.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:En([We.lights,We.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};xi.physical={uniforms:En([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var Ca={r:0,b:0,g:0},Hs=new hi,Qy=new et;function ev(n,e,t,i,s,r,o){let a=new Re(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function _(b){let v=!1,x=g(b);x===null?p(a,c):x&&x.isColor&&(p(x,1),v=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,v){let x=g(v);x&&(x.isCubeTexture||x.mapping===_c)?(h===void 0&&(h=new at(new an(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:qr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Hs.copy(v.backgroundRotation),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(Hs)),h.material.toneMapped=dt.getTransfer(x.colorSpace)!==St,(u!==x||f!==x.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new at(new Pn(2,2),new Et({name:"BackgroundMaterial",uniforms:qr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=dt.getTransfer(x.colorSpace)!==St,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,v){b.getRGB(Ca,Tp(n)),i.buffers.color.setClear(Ca.r,Ca.g,Ca.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:_,addToRenderList:m}}function tv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(S,I,B,z,L){let F=!1,U=u(z,B,I);r!==U&&(r=U,l(r.object)),F=d(S,z,B,L),F&&g(S,z,B,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,x(S,I,B,z),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function u(S,I,B){let z=B.wireframe===!0,L=i[S.id];L===void 0&&(L={},i[S.id]=L);let F=L[I.id];F===void 0&&(F={},L[I.id]=F);let U=F[z];return U===void 0&&(U=f(c()),F[z]=U),U}function f(S){let I=[],B=[],z=[];for(let L=0;L<t;L++)I[L]=0,B[L]=0,z[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:z,object:S,attributes:{},index:null}}function d(S,I,B,z){let L=r.attributes,F=I.attributes,U=0,Y=B.getAttributes();for(let H in Y)if(Y[H].location>=0){let ue=L[H],me=F[H];if(me===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(me=S.instanceColor)),ue===void 0||ue.attribute!==me||me&&ue.data!==me.data)return!0;U++}return r.attributesNum!==U||r.index!==z}function g(S,I,B,z){let L={},F=I.attributes,U=0,Y=B.getAttributes();for(let H in Y)if(Y[H].location>=0){let ue=F[H];ue===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor));let me={};me.attribute=ue,ue&&ue.data&&(me.data=ue.data),L[H]=me,U++}r.attributes=L,r.attributesNum=U,r.index=z}function _(){let S=r.newAttributes;for(let I=0,B=S.length;I<B;I++)S[I]=0}function m(S){p(S,0)}function p(S,I){let B=r.newAttributes,z=r.enabledAttributes,L=r.attributeDivisors;B[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),L[S]!==I&&(n.vertexAttribDivisor(S,I),L[S]=I)}function b(){let S=r.newAttributes,I=r.enabledAttributes;for(let B=0,z=I.length;B<z;B++)I[B]!==S[B]&&(n.disableVertexAttribArray(B),I[B]=0)}function v(S,I,B,z,L,F,U){U===!0?n.vertexAttribIPointer(S,I,B,L,F):n.vertexAttribPointer(S,I,B,z,L,F)}function x(S,I,B,z){_();let L=z.attributes,F=B.getAttributes(),U=I.defaultAttributeValues;for(let Y in F){let H=F[Y];if(H.location>=0){let ne=L[Y];if(ne===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),ne!==void 0){let ue=ne.normalized,me=ne.itemSize,be=e.get(ne);if(be===void 0)continue;let le=be.buffer,te=be.type,$=be.bytesPerElement,se=te===n.INT||te===n.UNSIGNED_INT||ne.gpuType===ch;if(ne.isInterleavedBufferAttribute){let C=ne.data,X=C.stride,q=ne.offset;if(C.isInstancedInterleavedBuffer){for(let ee=0;ee<H.locationSize;ee++)p(H.location+ee,C.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let ee=0;ee<H.locationSize;ee++)m(H.location+ee);n.bindBuffer(n.ARRAY_BUFFER,le);for(let ee=0;ee<H.locationSize;ee++)v(H.location+ee,me/H.locationSize,te,ue,X*$,(q+me/H.locationSize*ee)*$,se)}else{if(ne.isInstancedBufferAttribute){for(let C=0;C<H.locationSize;C++)p(H.location+C,ne.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let C=0;C<H.locationSize;C++)m(H.location+C);n.bindBuffer(n.ARRAY_BUFFER,le);for(let C=0;C<H.locationSize;C++)v(H.location+C,me/H.locationSize,te,ue,me*$,me/H.locationSize*C*$,se)}}else if(U!==void 0){let ue=U[Y];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(H.location,ue);break;case 3:n.vertexAttrib3fv(H.location,ue);break;case 4:n.vertexAttrib4fv(H.location,ue);break;default:n.vertexAttrib1fv(H.location,ue)}}}}b()}function E(){w();for(let S in i){let I=i[S];for(let B in I){let z=I[B];for(let L in z)h(z[L].object),delete z[L];delete I[B]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;let I=i[S.id];for(let B in I){let z=I[B];for(let L in z)h(z[L].object),delete z[L];delete I[B]}delete i[S.id]}function y(S){for(let I in i){let B=i[I];if(B[S.id]===void 0)continue;let z=B[S.id];for(let L in z)h(z[L].object),delete z[L];delete B[S.id]}}function w(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function nv(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,i,1)}function c(l,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function iv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(y){return!(y!==Kn&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let w=y===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Vi&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==li&&!w)}function c(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:E,maxSamples:T}}function sv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ai,a=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let b=r?0:i,v=b*4,x=p.clippingState||null;c.value=x,x=h(g,f,v,d);for(let E=0;E!==v;++E)x[E]=t[E];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=d+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=d;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function rv(n){let e=new WeakMap;function t(o,a){return a===Zl?o.mapping=Br:a===Kl&&(o.mapping=zr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Zl||a===Kl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ru(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var ms=class extends Qa{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pr=4,yd=[.125,.215,.35,.446,.526,.582],Ws=20,Cl=new ms,vd=new Re,Il=null,Pl=0,Ll=0,Dl=!1,Gs=(1+Math.sqrt(5))/2,Er=1/Gs,Md=[new k(-Gs,Er,0),new k(Gs,Er,0),new k(-Er,0,Gs),new k(Er,0,Gs),new k(0,Gs,-Er),new k(0,Gs,Er),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Yr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Il=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Il,Pl,Ll),this._renderer.xr.enabled=Dl,e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Br||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Il=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:An,format:Kn,colorSpace:yn,depthBuffer:!1},s=bd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ov(r)),this._blurMaterial=av(r,e,t)}return s}_compileMaterial(e){let t=new at(this._lodPlanes[0],e);this._renderer.compile(t,Cl)}_sceneToCubeUV(e,t,i,s){let a=new Yt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(vd),h.toneMapping=ds,h.autoClear=!1;let d=new Xt({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new at(new an,d),_=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(vd),_=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):b===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;Ia(s,b*v,p>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Br||e.mapping===zr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Ia(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Cl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Md[(s-r-1)%Md.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new at(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ws-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ws;m>Ws&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ws}`);let p=[],b=0;for(let y=0;y<Ws;++y){let w=y/_,M=Math.exp(-w*w/2);p.push(M),y===0?b+=M:y<m&&(b+=2*M)}for(let y=0;y<p.length;y++)p[y]=p[y]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;let x=this._sizeLods[s],E=3*x*(s>v-Pr?s-v+Pr:0),T=4*(this._cubeSize-x);Ia(t,E,T,3*x,2*x),c.setRenderTarget(t),c.render(u,Cl)}};function ov(n){let e=[],t=[],i=[],s=n,r=n-Pr+1+yd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Pr?c=yd[o-n+Pr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*d),v=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let T=0;T<d;T++){let y=T%3*2/3-1,w=T>2?0:-1,M=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];b.set(M,_*g*T),v.set(f,m*g*T);let S=[T,T,T,T,T,T];x.set(S,p*g*T)}let E=new xt;E.setAttribute("position",new mt(b,_)),E.setAttribute("uv",new mt(v,m)),E.setAttribute("faceIndex",new mt(x,p)),e.push(E),s>Pr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function bd(n,e,t){let i=new Qt(n,e,t);return i.texture.mapping=_c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ia(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function av(n,e,t){let i=new Float32Array(Ws),s=new k(0,1,0);return new Et({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xh(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Sd(){return new Et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xh(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Ed(){return new Et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function xh(){return`

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
	`}function cv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Zl||c===Kl,h=c===Br||c===zr;if(l||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Yr(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Yr(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function lv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Co("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function uv(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let b=d.array;_=d.version;for(let v=0,x=b.length;v<x;v+=3){let E=b[v+0],T=b[v+1],y=b[v+2];f.push(E,T,T,y,y,E)}}else if(g!==void 0){let b=g.array;_=g.version;for(let v=0,x=b.length/3-1;v<x;v+=3){let E=v+0,T=v+1,y=v+2;f.push(E,T,T,y,y,E)}}else return;let m=new(Sp(f)?ja:Ja)(f,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function hv(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function u(f,d,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*_[b];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function fv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function dv(n,e,t){let i=new WeakMap,s=new yt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let M=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=a.attributes.position.count*v,E=1;x>e.maxTextureSize&&(E=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*E*4*u),y=new Za(T,x,E,u);y.type=li,y.needsUpdate=!0;let w=v*4;for(let S=0;S<u;S++){let I=m[S],B=p[S],z=b[S],L=x*E*4*S;for(let F=0;F<I.count;F++){let U=F*w;d===!0&&(s.fromBufferAttribute(I,F),T[L+U+0]=s.x,T[L+U+1]=s.y,T[L+U+2]=s.z,T[L+U+3]=0),g===!0&&(s.fromBufferAttribute(B,F),T[L+U+4]=s.x,T[L+U+5]=s.y,T[L+U+6]=s.z,T[L+U+7]=0),_===!0&&(s.fromBufferAttribute(z,F),T[L+U+8]=s.x,T[L+U+9]=s.y,T[L+U+10]=s.z,T[L+U+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:y,size:new Ke(x,E)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function pv(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var tc=class extends on{constructor(e,t,i,s,r,o,a,c,l,h=Dr){if(h!==Dr&&h!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Dr&&(i=Xs),i===void 0&&h===Hr&&(i=kr),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:rn,this.minFilter=c!==void 0?c:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ap=new on,Td=new tc(1,1),Rp=new Za,Cp=new wu,Ip=new ec,wd=[],Ad=[],Rd=new Float32Array(16),Cd=new Float32Array(9),Id=new Float32Array(4);function eo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=wd[s];if(r===void 0&&(r=new Float32Array(s),wd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function tn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function nn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Mc(n,e){let t=Ad[e];t===void 0&&(t=new Int32Array(e),Ad[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2fv(this.addr,e),nn(t,e)}}function xv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;n.uniform3fv(this.addr,e),nn(t,e)}}function _v(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4fv(this.addr,e),nn(t,e)}}function yv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Id.set(i),n.uniformMatrix2fv(this.addr,!1,Id),nn(t,i)}}function vv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Cd.set(i),n.uniformMatrix3fv(this.addr,!1,Cd),nn(t,i)}}function Mv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Rd.set(i),n.uniformMatrix4fv(this.addr,!1,Rd),nn(t,i)}}function bv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Sv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2iv(this.addr,e),nn(t,e)}}function Ev(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3iv(this.addr,e),nn(t,e)}}function Tv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4iv(this.addr,e),nn(t,e)}}function wv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Av(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2uiv(this.addr,e),nn(t,e)}}function Rv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3uiv(this.addr,e),nn(t,e)}}function Cv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4uiv(this.addr,e),nn(t,e)}}function Iv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Td.compareFunction=Mp,r=Td):r=Ap,t.setTexture2D(e||r,s)}function Pv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Cp,s)}function Lv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ip,s)}function Dv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Rp,s)}function Nv(n){switch(n){case 5126:return mv;case 35664:return gv;case 35665:return xv;case 35666:return _v;case 35674:return yv;case 35675:return vv;case 35676:return Mv;case 5124:case 35670:return bv;case 35667:case 35671:return Sv;case 35668:case 35672:return Ev;case 35669:case 35673:return Tv;case 5125:return wv;case 36294:return Av;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Dv}}function Uv(n,e){n.uniform1fv(this.addr,e)}function Fv(n,e){let t=eo(e,this.size,2);n.uniform2fv(this.addr,t)}function Ov(n,e){let t=eo(e,this.size,3);n.uniform3fv(this.addr,t)}function Bv(n,e){let t=eo(e,this.size,4);n.uniform4fv(this.addr,t)}function zv(n,e){let t=eo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function kv(n,e){let t=eo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Hv(n,e){let t=eo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Vv(n,e){n.uniform1iv(this.addr,e)}function Gv(n,e){n.uniform2iv(this.addr,e)}function Wv(n,e){n.uniform3iv(this.addr,e)}function Xv(n,e){n.uniform4iv(this.addr,e)}function qv(n,e){n.uniform1uiv(this.addr,e)}function Yv(n,e){n.uniform2uiv(this.addr,e)}function $v(n,e){n.uniform3uiv(this.addr,e)}function Zv(n,e){n.uniform4uiv(this.addr,e)}function Kv(n,e,t){let i=this.cache,s=e.length,r=Mc(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ap,r[o])}function Jv(n,e,t){let i=this.cache,s=e.length,r=Mc(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Cp,r[o])}function jv(n,e,t){let i=this.cache,s=e.length,r=Mc(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ip,r[o])}function Qv(n,e,t){let i=this.cache,s=e.length,r=Mc(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Rp,r[o])}function eM(n){switch(n){case 5126:return Uv;case 35664:return Fv;case 35665:return Ov;case 35666:return Bv;case 35674:return zv;case 35675:return kv;case 35676:return Hv;case 5124:case 35670:return Vv;case 35667:case 35671:return Gv;case 35668:case 35672:return Wv;case 35669:case 35673:return Xv;case 5125:return qv;case 36294:return Yv;case 36295:return $v;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return Qv}}var Cu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Nv(t.type)}},Iu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eM(t.type)}},Pu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Nl=/(\w+)(\])?(\[|\.)?/g;function Pd(n,e){n.seq.push(e),n.map[e.id]=e}function tM(n,e,t){let i=n.name,s=i.length;for(Nl.lastIndex=0;;){let r=Nl.exec(i),o=Nl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Pd(t,l===void 0?new Cu(a,n,e):new Iu(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Pu(a),Pd(t,u)),t=u}}}var Ur=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);tM(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Ld(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var nM=37297,iM=0;function sM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Dd=new lt;function rM(n){dt._getMatrix(Dd,dt.workingColorSpace,n);let e=`mat3( ${Dd.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case vc:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Nd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+sM(n.getShaderSource(e),o)}else return s}function oM(n,e){let t=rM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function aM(n,e){let t;switch(e){case nh:t="Linear";break;case ih:t="Reinhard";break;case sh:t="Cineon";break;case Xo:t="ACESFilmic";break;case rh:t="AgX";break;case oh:t="Neutral";break;case Sg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Pa=new k;function cM(){dt.getLuminanceCoefficients(Pa);let n=Pa.x.toFixed(4),e=Pa.y.toFixed(4),t=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function uM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Io(n){return n!==""}function Ud(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lu(n){return n.replace(fM,pM)}var dM=new Map;function pM(n,e){let t=ut[e];if(t===void 0){let i=dM.get(e);if(i!==void 0)t=ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lu(t)}var mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Od(n){return n.replace(mM,gM)}function gM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function xM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===sg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function _M(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Br:case zr:e="ENVMAP_TYPE_CUBE";break;case _c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yM(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===zr&&(e="ENVMAP_MODE_REFRACTION"),e}function vM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case th:e="ENVMAP_BLENDING_MULTIPLY";break;case Mg:e="ENVMAP_BLENDING_MIX";break;case bg:e="ENVMAP_BLENDING_ADD";break}return e}function MM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function bM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=xM(t),l=_M(t),h=yM(t),u=vM(t),f=MM(t),d=lM(t),g=uM(r),_=s.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Io).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Io).join(`
`),p.length>0&&(p+=`
`)):(m=[Bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),p=[Bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ds?"#define TONE_MAPPING":"",t.toneMapping!==ds?ut.tonemapping_pars_fragment:"",t.toneMapping!==ds?aM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,oM("linearToOutputTexel",t.outputColorSpace),cM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Io).join(`
`)),o=Lu(o),o=Ud(o,t),o=Fd(o,t),a=Lu(a),a=Ud(a,t),a=Fd(a,t),o=Od(o),a=Od(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=b+m+o,x=b+p+a,E=Ld(s,s.VERTEX_SHADER,v),T=Ld(s,s.FRAGMENT_SHADER,x);s.attachShader(_,E),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function y(I){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(E).trim(),L=s.getShaderInfoLog(T).trim(),F=!0,U=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,E,T);else{let Y=Nd(s,E,"vertex"),H=Nd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+Y+`
`+H)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||L==="")&&(U=!1);U&&(I.diagnostics={runnable:F,programLog:B,vertexShader:{log:z,prefix:m},fragmentShader:{log:L,prefix:p}})}s.deleteShader(E),s.deleteShader(T),w=new Ur(s,_),M=hM(s,_)}let w;this.getUniforms=function(){return w===void 0&&y(this),w};let M;this.getAttributes=function(){return M===void 0&&y(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,nM)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=T,this}var SM=0,Du=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Nu(e),t.set(e,i)),i}},Nu=class{constructor(e){this.id=SM++,this.code=e,this.usedTimes=0}};function EM(n,e,t,i,s,r,o){let a=new Ka,c=new Du,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,I,B,z){let L=B.fog,F=z.geometry,U=M.isMeshStandardMaterial?B.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||U),H=Y&&Y.mapping===_c?Y.image.height:null,ne=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let ue=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,me=ue!==void 0?ue.length:0,be=0;F.morphAttributes.position!==void 0&&(be=1),F.morphAttributes.normal!==void 0&&(be=2),F.morphAttributes.color!==void 0&&(be=3);let le,te,$,se;if(ne){let He=xi[ne];le=He.vertexShader,te=He.fragmentShader}else le=M.vertexShader,te=M.fragmentShader,c.update(M),$=c.getVertexShaderID(M),se=c.getFragmentShaderID(M);let C=n.getRenderTarget(),X=n.state.buffers.depth.getReversed(),q=z.isInstancedMesh===!0,ee=z.isBatchedMesh===!0,pe=!!M.map,Te=!!M.matcap,Ie=!!Y,G=!!M.aoMap,Ve=!!M.lightMap,ke=!!M.bumpMap,ze=!!M.normalMap,De=!!M.displacementMap,Ye=!!M.emissiveMap,Ne=!!M.metalnessMap,N=!!M.roughnessMap,A=M.anisotropy>0,j=M.clearcoat>0,xe=M.dispersion>0,_e=M.iridescence>0,fe=M.sheen>0,Ce=M.transmission>0,Fe=A&&!!M.anisotropyMap,Oe=j&&!!M.clearcoatMap,Ge=j&&!!M.clearcoatNormalMap,Se=j&&!!M.clearcoatRoughnessMap,J=_e&&!!M.iridescenceMap,Me=_e&&!!M.iridescenceThicknessMap,ve=fe&&!!M.sheenColorMap,ie=fe&&!!M.sheenRoughnessMap,we=!!M.specularMap,oe=!!M.specularColorMap,Ee=!!M.specularIntensityMap,W=Ce&&!!M.transmissionMap,Ae=Ce&&!!M.thicknessMap,R=!!M.gradientMap,D=!!M.alphaMap,O=M.alphaTest>0,K=!!M.alphaHash,he=!!M.extensions,Pe=ds;M.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Pe=n.toneMapping);let Be={shaderID:ne,shaderType:M.type,shaderName:M.name,vertexShader:le,fragmentShader:te,defines:M.defines,customVertexShaderID:$,customFragmentShaderID:se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:ee,batchingColor:ee&&z._colorsTexture!==null,instancing:q,instancingColor:q&&z.instanceColor!==null,instancingMorph:q&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:C===null?n.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:yn,alphaToCoverage:!!M.alphaToCoverage,map:pe,matcap:Te,envMap:Ie,envMapMode:Ie&&Y.mapping,envMapCubeUVHeight:H,aoMap:G,lightMap:Ve,bumpMap:ke,normalMap:ze,displacementMap:f&&De,emissiveMap:Ye,normalMapObjectSpace:ze&&M.normalMapType===Rg,normalMapTangentSpace:ze&&M.normalMapType===mh,metalnessMap:Ne,roughnessMap:N,anisotropy:A,anisotropyMap:Fe,clearcoat:j,clearcoatMap:Oe,clearcoatNormalMap:Ge,clearcoatRoughnessMap:Se,dispersion:xe,iridescence:_e,iridescenceMap:J,iridescenceThicknessMap:Me,sheen:fe,sheenColorMap:ve,sheenRoughnessMap:ie,specularMap:we,specularColorMap:oe,specularIntensityMap:Ee,transmission:Ce,transmissionMap:W,thicknessMap:Ae,gradientMap:R,opaque:M.transparent===!1&&M.blending===Lr&&M.alphaToCoverage===!1,alphaMap:D,alphaTest:O,alphaHash:K,combine:M.combine,mapUv:pe&&_(M.map.channel),aoMapUv:G&&_(M.aoMap.channel),lightMapUv:Ve&&_(M.lightMap.channel),bumpMapUv:ke&&_(M.bumpMap.channel),normalMapUv:ze&&_(M.normalMap.channel),displacementMapUv:De&&_(M.displacementMap.channel),emissiveMapUv:Ye&&_(M.emissiveMap.channel),metalnessMapUv:Ne&&_(M.metalnessMap.channel),roughnessMapUv:N&&_(M.roughnessMap.channel),anisotropyMapUv:Fe&&_(M.anisotropyMap.channel),clearcoatMapUv:Oe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ie&&_(M.sheenRoughnessMap.channel),specularMapUv:we&&_(M.specularMap.channel),specularColorMapUv:oe&&_(M.specularColorMap.channel),specularIntensityMapUv:Ee&&_(M.specularIntensityMap.channel),transmissionMapUv:W&&_(M.transmissionMap.channel),thicknessMapUv:Ae&&_(M.thicknessMap.channel),alphaMapUv:D&&_(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ze||A),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!F.attributes.uv&&(pe||D),fog:!!L,useFog:M.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:X,skinning:z.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:be,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pe,decodeVideoTexture:pe&&M.map.isVideoTexture===!0&&dt.getTransfer(M.map.colorSpace)===St,decodeVideoTextureEmissive:Ye&&M.emissiveMap.isVideoTexture===!0&&dt.getTransfer(M.emissiveMap.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ct,flipSided:M.side===Jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:he&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&M.extensions.multiDraw===!0||ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(b(S,M),v(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function b(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){let S=g[M.type],I;if(S){let B=xi[S];I=bi.clone(B.uniforms)}else I=M.uniforms;return I}function E(M,S){let I;for(let B=0,z=h.length;B<z;B++){let L=h[B];if(L.cacheKey===S){I=L,++I.usedTimes;break}}return I===void 0&&(I=new bM(n,S,M,r),h.push(I)),I}function T(M){if(--M.usedTimes===0){let S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function y(M){c.remove(M)}function w(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:E,releaseProgram:T,releaseShaderCache:y,programs:h,dispose:w}}function TM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function wM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function kd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||wM),i.length>1&&i.sort(f||zd),s.length>1&&s.sort(f||zd)}function h(){for(let u=e,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function AM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new kd,n.set(i,[o])):s>=r.length?(o=new kd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function RM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Re};break;case"SpotLight":t={position:new k,direction:new k,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function CM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var IM=0;function PM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function LM(n){let e=new RM,t=CM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);let s=new k,r=new et,o=new et;function a(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,b=0,v=0,x=0,E=0,T=0,y=0;l.sort(PM);for(let M=0,S=l.length;M<S;M++){let I=l[M],B=I.color,z=I.intensity,L=I.distance,F=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=B.r*z,u+=B.g*z,f+=B.b*z;else if(I.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(I.sh.coefficients[U],z);y++}else if(I.isDirectionalLight){let U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,H=t.get(I);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=F,i.directionalShadowMatrix[d]=I.shadow.matrix,b++}i.directional[d]=U,d++}else if(I.isSpotLight){let U=e.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(B).multiplyScalar(z),U.distance=L,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,i.spot[_]=U;let Y=I.shadow;if(I.map&&(i.spotLightMap[E]=I.map,E++,Y.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[_]=Y.matrix,I.castShadow){let H=t.get(I);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=F,x++}_++}else if(I.isRectAreaLight){let U=e.get(I);U.color.copy(B).multiplyScalar(z),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=U,m++}else if(I.isPointLight){let U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),U.distance=I.distance,U.decay=I.decay,I.castShadow){let Y=I.shadow,H=t.get(I);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=I.shadow.matrix,v++}i.point[g]=U,g++}else if(I.isHemisphereLight){let U=e.get(I);U.skyColor.copy(I.color).multiplyScalar(z),U.groundColor.copy(I.groundColor).multiplyScalar(z),i.hemi[p]=U,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=We.LTC_FLOAT_1,i.rectAreaLTC2=We.LTC_FLOAT_2):(i.rectAreaLTC1=We.LTC_HALF_1,i.rectAreaLTC2=We.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let w=i.hash;(w.directionalLength!==d||w.pointLength!==g||w.spotLength!==_||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==b||w.numPointShadows!==v||w.numSpotShadows!==x||w.numSpotMaps!==E||w.numLightProbes!==y)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+E-T,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=y,w.directionalLength=d,w.pointLength=g,w.spotLength=_,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=b,w.numPointShadows=v,w.numSpotShadows=x,w.numSpotMaps=E,w.numLightProbes=y,i.version=IM++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let v=l[p];if(v.isDirectionalLight){let x=i.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(v.isSpotLight){let x=i.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(v.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let x=i.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function Hd(n){let e=new LM(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function DM(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Hd(n),e.set(s,[a])):r>=o.length?(a=new Hd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Uu=class extends Tn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fu=class extends Tn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},NM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UM=`uniform sampler2D shadow_pass;
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
}`;function FM(n,e,t){let i=new zo,s=new Ke,r=new Ke,o=new yt,a=new Uu({depthPacking:Ag}),c=new Fu,l={},h=t.maxTextureSize,u={[yi]:Jt,[Jt]:yi,[Ct]:Ct},f=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:NM,fragmentShader:UM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new xt;g.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new at(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc;let p=this.type;this.render=function(T,y,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let M=n.getRenderTarget(),S=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),B=n.state;B.setBlending(_i),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let z=p!==Fi&&this.type===Fi,L=p===Fi&&this.type!==Fi;for(let F=0,U=T.length;F<U;F++){let Y=T[F],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ne=H.getFrameExtents();if(s.multiply(ne),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,H.mapSize.y=r.y)),H.map===null||z===!0||L===!0){let me=this.type!==Fi?{minFilter:rn,magFilter:rn}:{};H.map!==null&&H.map.dispose(),H.map=new Qt(s.x,s.y,me),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let ue=H.getViewportCount();for(let me=0;me<ue;me++){let be=H.getViewport(me);o.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),B.viewport(o),H.updateMatrices(Y,me),i=H.getFrustum(),x(y,w,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Fi&&b(H,w),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,I)};function b(T,y){let w=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qt(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(y,null,w,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(y,null,w,d,_,null)}function v(T,y,w,M){let S=null,I=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)S=I;else if(S=w.isPointLight===!0?c:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){let B=S.uuid,z=y.uuid,L=l[B];L===void 0&&(L={},l[B]=L);let F=L[z];F===void 0&&(F=S.clone(),L[z]=F,y.addEventListener("dispose",E)),S=F}if(S.visible=y.visible,S.wireframe=y.wireframe,M===Fi?S.side=y.shadowSide!==null?y.shadowSide:y.side:S.side=y.shadowSide!==null?y.shadowSide:u[y.side],S.alphaMap=y.alphaMap,S.alphaTest=y.alphaTest,S.map=y.map,S.clipShadows=y.clipShadows,S.clippingPlanes=y.clippingPlanes,S.clipIntersection=y.clipIntersection,S.displacementMap=y.displacementMap,S.displacementScale=y.displacementScale,S.displacementBias=y.displacementBias,S.wireframeLinewidth=y.wireframeLinewidth,S.linewidth=y.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let B=n.properties.get(S);B.light=w}return S}function x(T,y,w,M,S){if(T.visible===!1)return;if(T.layers.test(y.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Fi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let z=e.update(T),L=T.material;if(Array.isArray(L)){let F=z.groups;for(let U=0,Y=F.length;U<Y;U++){let H=F[U],ne=L[H.materialIndex];if(ne&&ne.visible){let ue=v(T,ne,M,S);T.onBeforeShadow(n,T,y,w,z,ue,H),n.renderBufferDirect(w,null,z,ue,T,H),T.onAfterShadow(n,T,y,w,z,ue,H)}}}else if(L.visible){let F=v(T,L,M,S);T.onBeforeShadow(n,T,y,w,z,F,null),n.renderBufferDirect(w,null,z,F,T,null),T.onAfterShadow(n,T,y,w,z,F,null)}}let B=T.children;for(let z=0,L=B.length;z<L;z++)x(B[z],y,w,M,S)}function E(T){T.target.removeEventListener("dispose",E);for(let w in l){let M=l[w],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}var OM={[Vl]:Gl,[Wl]:Yl,[Xl]:$l,[Or]:ql,[Gl]:Vl,[Yl]:Wl,[$l]:Xl,[ql]:Or};function BM(n,e){function t(){let W=!1,Ae=new yt,R=null,D=new yt(0,0,0,0);return{setMask:function(O){R!==O&&!W&&(n.colorMask(O,O,O,O),R=O)},setLocked:function(O){W=O},setClear:function(O,K,he,Pe,Be){Be===!0&&(O*=Pe,K*=Pe,he*=Pe),Ae.set(O,K,he,Pe),D.equals(Ae)===!1&&(n.clearColor(O,K,he,Pe),D.copy(Ae))},reset:function(){W=!1,R=null,D.set(-1,0,0,0)}}}function i(){let W=!1,Ae=!1,R=null,D=null,O=null;return{setReversed:function(K){if(Ae!==K){let he=e.get("EXT_clip_control");Ae?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT);let Pe=O;O=null,this.setClear(Pe)}Ae=K},getReversed:function(){return Ae},setTest:function(K){K?C(n.DEPTH_TEST):X(n.DEPTH_TEST)},setMask:function(K){R!==K&&!W&&(n.depthMask(K),R=K)},setFunc:function(K){if(Ae&&(K=OM[K]),D!==K){switch(K){case Vl:n.depthFunc(n.NEVER);break;case Gl:n.depthFunc(n.ALWAYS);break;case Wl:n.depthFunc(n.LESS);break;case Or:n.depthFunc(n.LEQUAL);break;case Xl:n.depthFunc(n.EQUAL);break;case ql:n.depthFunc(n.GEQUAL);break;case Yl:n.depthFunc(n.GREATER);break;case $l:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}D=K}},setLocked:function(K){W=K},setClear:function(K){O!==K&&(Ae&&(K=1-K),n.clearDepth(K),O=K)},reset:function(){W=!1,R=null,D=null,O=null,Ae=!1}}}function s(){let W=!1,Ae=null,R=null,D=null,O=null,K=null,he=null,Pe=null,Be=null;return{setTest:function(He){W||(He?C(n.STENCIL_TEST):X(n.STENCIL_TEST))},setMask:function(He){Ae!==He&&!W&&(n.stencilMask(He),Ae=He)},setFunc:function(He,V,re){(R!==He||D!==V||O!==re)&&(n.stencilFunc(He,V,re),R=He,D=V,O=re)},setOp:function(He,V,re){(K!==He||he!==V||Pe!==re)&&(n.stencilOp(He,V,re),K=He,he=V,Pe=re)},setLocked:function(He){W=He},setClear:function(He){Be!==He&&(n.clearStencil(He),Be=He)},reset:function(){W=!1,Ae=null,R=null,D=null,O=null,K=null,he=null,Pe=null,Be=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,v=null,x=null,E=null,T=null,y=new Re(0,0,0),w=0,M=!1,S=null,I=null,B=null,z=null,L=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,Y=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),U=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),U=Y>=2);let ne=null,ue={},me=n.getParameter(n.SCISSOR_BOX),be=n.getParameter(n.VIEWPORT),le=new yt().fromArray(me),te=new yt().fromArray(be);function $(W,Ae,R,D){let O=new Uint8Array(4),K=n.createTexture();n.bindTexture(W,K),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let he=0;he<R;he++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,D,0,n.RGBA,n.UNSIGNED_BYTE,O):n.texImage2D(Ae+he,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,O);return K}let se={};se[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),C(n.DEPTH_TEST),o.setFunc(Or),ke(!1),ze(Gf),C(n.CULL_FACE),G(_i);function C(W){h[W]!==!0&&(n.enable(W),h[W]=!0)}function X(W){h[W]!==!1&&(n.disable(W),h[W]=!1)}function q(W,Ae){return u[W]!==Ae?(n.bindFramebuffer(W,Ae),u[W]=Ae,W===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Ae),W===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function ee(W,Ae){let R=d,D=!1;if(W){R=f.get(Ae),R===void 0&&(R=[],f.set(Ae,R));let O=W.textures;if(R.length!==O.length||R[0]!==n.COLOR_ATTACHMENT0){for(let K=0,he=O.length;K<he;K++)R[K]=n.COLOR_ATTACHMENT0+K;R.length=O.length,D=!0}}else R[0]!==n.BACK&&(R[0]=n.BACK,D=!0);D&&n.drawBuffers(R)}function pe(W){return g!==W?(n.useProgram(W),g=W,!0):!1}let Te={[Oi]:n.FUNC_ADD,[rg]:n.FUNC_SUBTRACT,[og]:n.FUNC_REVERSE_SUBTRACT};Te[ag]=n.MIN,Te[cg]=n.MAX;let Ie={[lg]:n.ZERO,[eh]:n.ONE,[ug]:n.SRC_COLOR,[Hl]:n.SRC_ALPHA,[gg]:n.SRC_ALPHA_SATURATE,[pg]:n.DST_COLOR,[fg]:n.DST_ALPHA,[hg]:n.ONE_MINUS_SRC_COLOR,[Uo]:n.ONE_MINUS_SRC_ALPHA,[mg]:n.ONE_MINUS_DST_COLOR,[dg]:n.ONE_MINUS_DST_ALPHA,[xg]:n.CONSTANT_COLOR,[_g]:n.ONE_MINUS_CONSTANT_COLOR,[yg]:n.CONSTANT_ALPHA,[vg]:n.ONE_MINUS_CONSTANT_ALPHA};function G(W,Ae,R,D,O,K,he,Pe,Be,He){if(W===_i){_===!0&&(X(n.BLEND),_=!1);return}if(_===!1&&(C(n.BLEND),_=!0),W!==Qu){if(W!==m||He!==M){if((p!==Oi||x!==Oi)&&(n.blendEquation(n.FUNC_ADD),p=Oi,x=Oi),He)switch(W){case Lr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fr:n.blendFunc(n.ONE,n.ONE);break;case Wf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}b=null,v=null,E=null,T=null,y.set(0,0,0),w=0,m=W,M=He}return}O=O||Ae,K=K||R,he=he||D,(Ae!==p||O!==x)&&(n.blendEquationSeparate(Te[Ae],Te[O]),p=Ae,x=O),(R!==b||D!==v||K!==E||he!==T)&&(n.blendFuncSeparate(Ie[R],Ie[D],Ie[K],Ie[he]),b=R,v=D,E=K,T=he),(Pe.equals(y)===!1||Be!==w)&&(n.blendColor(Pe.r,Pe.g,Pe.b,Be),y.copy(Pe),w=Be),m=W,M=!1}function Ve(W,Ae){W.side===Ct?X(n.CULL_FACE):C(n.CULL_FACE);let R=W.side===Jt;Ae&&(R=!R),ke(R),W.blending===Lr&&W.transparent===!1?G(_i):G(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let D=W.stencilWrite;a.setTest(D),D&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ye(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?C(n.SAMPLE_ALPHA_TO_COVERAGE):X(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(W){S!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),S=W)}function ze(W){W!==ng?(C(n.CULL_FACE),W!==I&&(W===Gf?n.cullFace(n.BACK):W===ig?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):X(n.CULL_FACE),I=W}function De(W){W!==B&&(U&&n.lineWidth(W),B=W)}function Ye(W,Ae,R){W?(C(n.POLYGON_OFFSET_FILL),(z!==Ae||L!==R)&&(n.polygonOffset(Ae,R),z=Ae,L=R)):X(n.POLYGON_OFFSET_FILL)}function Ne(W){W?C(n.SCISSOR_TEST):X(n.SCISSOR_TEST)}function N(W){W===void 0&&(W=n.TEXTURE0+F-1),ne!==W&&(n.activeTexture(W),ne=W)}function A(W,Ae,R){R===void 0&&(ne===null?R=n.TEXTURE0+F-1:R=ne);let D=ue[R];D===void 0&&(D={type:void 0,texture:void 0},ue[R]=D),(D.type!==W||D.texture!==Ae)&&(ne!==R&&(n.activeTexture(R),ne=R),n.bindTexture(W,Ae||se[W]),D.type=W,D.texture=Ae)}function j(){let W=ue[ne];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function xe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ge(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function J(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(W){le.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),le.copy(W))}function ie(W){te.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),te.copy(W))}function we(W,Ae){let R=l.get(Ae);R===void 0&&(R=new WeakMap,l.set(Ae,R));let D=R.get(W);D===void 0&&(D=n.getUniformBlockIndex(Ae,W.name),R.set(W,D))}function oe(W,Ae){let D=l.get(Ae).get(W);c.get(Ae)!==D&&(n.uniformBlockBinding(Ae,D,W.__bindingPointIndex),c.set(Ae,D))}function Ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ne=null,ue={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,v=null,x=null,E=null,T=null,y=new Re(0,0,0),w=0,M=!1,S=null,I=null,B=null,z=null,L=null,le.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:C,disable:X,bindFramebuffer:q,drawBuffers:ee,useProgram:pe,setBlending:G,setMaterial:Ve,setFlipSided:ke,setCullFace:ze,setLineWidth:De,setPolygonOffset:Ye,setScissorTest:Ne,activeTexture:N,bindTexture:A,unbindTexture:j,compressedTexImage2D:xe,compressedTexImage3D:_e,texImage2D:J,texImage3D:Me,updateUBOMapping:we,uniformBlockBinding:oe,texStorage2D:Ge,texStorage3D:Se,texSubImage2D:fe,texSubImage3D:Ce,compressedTexSubImage2D:Fe,compressedTexSubImage3D:Oe,scissor:ve,viewport:ie,reset:Ee}}function Vd(n,e,t,i){let s=zM(i);switch(t){case pp:return n*e;case gp:return n*e;case xp:return n*e*2;case hh:return n*e/s.components*s.byteLength;case fh:return n*e/s.components*s.byteLength;case _p:return n*e*2/s.components*s.byteLength;case dh:return n*e*2/s.components*s.byteLength;case mp:return n*e*3/s.components*s.byteLength;case Kn:return n*e*4/s.components*s.byteLength;case ph:return n*e*4/s.components*s.byteLength;case Va:case Ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jl:case eu:return Math.max(n,16)*Math.max(e,8)/4;case Jl:case Ql:return Math.max(n,8)*Math.max(e,8)/2;case tu:case nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case iu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case su:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ru:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ou:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case au:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case cu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case lu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case uu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case fu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case du:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case pu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case mu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case gu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case qa:case _u:case yu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case yp:case vu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Mu:case bu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zM(n){switch(n){case Vi:case hp:return{byteLength:1,components:1};case Oo:case fp:case An:return{byteLength:2,components:1};case lh:case uh:return{byteLength:2,components:4};case Xs:case ch:case li:return{byteLength:4,components:1};case dp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function kM(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ke,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,A){return d?new OffscreenCanvas(N,A):Bo("canvas")}function _(N,A,j){let xe=1,_e=Ne(N);if((_e.width>j||_e.height>j)&&(xe=j/Math.max(_e.width,_e.height)),xe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let fe=Math.floor(xe*_e.width),Ce=Math.floor(xe*_e.height);u===void 0&&(u=g(fe,Ce));let Fe=A?g(fe,Ce):u;return Fe.width=fe,Fe.height=Ce,Fe.getContext("2d").drawImage(N,0,0,fe,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+Ce+")."),Fe}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),N;return N}function m(N){return N.generateMipmaps}function p(N){n.generateMipmap(N)}function b(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(N,A,j,xe,_e=!1){if(N!==null){if(n[N]!==void 0)return n[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let fe=A;if(A===n.RED&&(j===n.FLOAT&&(fe=n.R32F),j===n.HALF_FLOAT&&(fe=n.R16F),j===n.UNSIGNED_BYTE&&(fe=n.R8)),A===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.R8UI),j===n.UNSIGNED_SHORT&&(fe=n.R16UI),j===n.UNSIGNED_INT&&(fe=n.R32UI),j===n.BYTE&&(fe=n.R8I),j===n.SHORT&&(fe=n.R16I),j===n.INT&&(fe=n.R32I)),A===n.RG&&(j===n.FLOAT&&(fe=n.RG32F),j===n.HALF_FLOAT&&(fe=n.RG16F),j===n.UNSIGNED_BYTE&&(fe=n.RG8)),A===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RG8UI),j===n.UNSIGNED_SHORT&&(fe=n.RG16UI),j===n.UNSIGNED_INT&&(fe=n.RG32UI),j===n.BYTE&&(fe=n.RG8I),j===n.SHORT&&(fe=n.RG16I),j===n.INT&&(fe=n.RG32I)),A===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),j===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),j===n.UNSIGNED_INT&&(fe=n.RGB32UI),j===n.BYTE&&(fe=n.RGB8I),j===n.SHORT&&(fe=n.RGB16I),j===n.INT&&(fe=n.RGB32I)),A===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),j===n.UNSIGNED_INT&&(fe=n.RGBA32UI),j===n.BYTE&&(fe=n.RGBA8I),j===n.SHORT&&(fe=n.RGBA16I),j===n.INT&&(fe=n.RGBA32I)),A===n.RGB&&j===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),A===n.RGBA){let Ce=_e?vc:dt.getTransfer(xe);j===n.FLOAT&&(fe=n.RGBA32F),j===n.HALF_FLOAT&&(fe=n.RGBA16F),j===n.UNSIGNED_BYTE&&(fe=Ce===St?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function x(N,A){let j;return N?A===null||A===Xs||A===kr?j=n.DEPTH24_STENCIL8:A===li?j=n.DEPTH32F_STENCIL8:A===Oo&&(j=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Xs||A===kr?j=n.DEPTH_COMPONENT24:A===li?j=n.DEPTH_COMPONENT32F:A===Oo&&(j=n.DEPTH_COMPONENT16),j}function E(N,A){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==rn&&N.minFilter!==In?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function T(N){let A=N.target;A.removeEventListener("dispose",T),w(A),A.isVideoTexture&&h.delete(A)}function y(N){let A=N.target;A.removeEventListener("dispose",y),S(A)}function w(N){let A=i.get(N);if(A.__webglInit===void 0)return;let j=N.source,xe=f.get(j);if(xe){let _e=xe[A.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&M(N),Object.keys(xe).length===0&&f.delete(j)}i.remove(N)}function M(N){let A=i.get(N);n.deleteTexture(A.__webglTexture);let j=N.source,xe=f.get(j);delete xe[A.__cacheKey],o.memory.textures--}function S(N){let A=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(A.__webglFramebuffer[xe]))for(let _e=0;_e<A.__webglFramebuffer[xe].length;_e++)n.deleteFramebuffer(A.__webglFramebuffer[xe][_e]);else n.deleteFramebuffer(A.__webglFramebuffer[xe]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[xe])}else{if(Array.isArray(A.__webglFramebuffer))for(let xe=0;xe<A.__webglFramebuffer.length;xe++)n.deleteFramebuffer(A.__webglFramebuffer[xe]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let xe=0;xe<A.__webglColorRenderbuffer.length;xe++)A.__webglColorRenderbuffer[xe]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[xe]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let j=N.textures;for(let xe=0,_e=j.length;xe<_e;xe++){let fe=i.get(j[xe]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(j[xe])}i.remove(N)}let I=0;function B(){I=0}function z(){let N=I;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),I+=1,N}function L(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function F(N,A){let j=i.get(N);if(N.isVideoTexture&&De(N),N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){let xe=N.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(j,N,A);return}}t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+A)}function U(N,A){let j=i.get(N);if(N.version>0&&j.__version!==N.version){te(j,N,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+A)}function Y(N,A){let j=i.get(N);if(N.version>0&&j.__version!==N.version){te(j,N,A);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+A)}function H(N,A){let j=i.get(N);if(N.version>0&&j.__version!==N.version){$(j,N,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+A)}let ne={[Hi]:n.REPEAT,[Bi]:n.CLAMP_TO_EDGE,[Fo]:n.MIRRORED_REPEAT},ue={[rn]:n.NEAREST,[ah]:n.NEAREST_MIPMAP_NEAREST,[Ir]:n.NEAREST_MIPMAP_LINEAR,[In]:n.LINEAR,[Po]:n.LINEAR_MIPMAP_NEAREST,[Zn]:n.LINEAR_MIPMAP_LINEAR},me={[Cg]:n.NEVER,[Ug]:n.ALWAYS,[Ig]:n.LESS,[Mp]:n.LEQUAL,[Pg]:n.EQUAL,[Ng]:n.GEQUAL,[Lg]:n.GREATER,[Dg]:n.NOTEQUAL};function be(N,A){if(A.type===li&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===In||A.magFilter===Po||A.magFilter===Ir||A.magFilter===Zn||A.minFilter===In||A.minFilter===Po||A.minFilter===Ir||A.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,ne[A.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,ne[A.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,ne[A.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,ue[A.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,ue[A.minFilter]),A.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,me[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===rn||A.minFilter!==Ir&&A.minFilter!==Zn||A.type===li&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function le(N,A){let j=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",T));let xe=A.source,_e=f.get(xe);_e===void 0&&(_e={},f.set(xe,_e));let fe=L(A);if(fe!==N.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),_e[fe].usedTimes++;let Ce=_e[N.__cacheKey];Ce!==void 0&&(_e[N.__cacheKey].usedTimes--,Ce.usedTimes===0&&M(A)),N.__cacheKey=fe,N.__webglTexture=_e[fe].texture}return j}function te(N,A,j){let xe=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(xe=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(xe=n.TEXTURE_3D);let _e=le(N,A),fe=A.source;t.bindTexture(xe,N.__webglTexture,n.TEXTURE0+j);let Ce=i.get(fe);if(fe.version!==Ce.__version||_e===!0){t.activeTexture(n.TEXTURE0+j);let Fe=dt.getPrimaries(dt.workingColorSpace),Oe=A.colorSpace===us?null:dt.getPrimaries(A.colorSpace),Ge=A.colorSpace===us||Fe===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let Se=_(A.image,!1,s.maxTextureSize);Se=Ye(A,Se);let J=r.convert(A.format,A.colorSpace),Me=r.convert(A.type),ve=v(A.internalFormat,J,Me,A.colorSpace,A.isVideoTexture);be(xe,A);let ie,we=A.mipmaps,oe=A.isVideoTexture!==!0,Ee=Ce.__version===void 0||_e===!0,W=fe.dataReady,Ae=E(A,Se);if(A.isDepthTexture)ve=x(A.format===Hr,A.type),Ee&&(oe?t.texStorage2D(n.TEXTURE_2D,1,ve,Se.width,Se.height):t.texImage2D(n.TEXTURE_2D,0,ve,Se.width,Se.height,0,J,Me,null));else if(A.isDataTexture)if(we.length>0){oe&&Ee&&t.texStorage2D(n.TEXTURE_2D,Ae,ve,we[0].width,we[0].height);for(let R=0,D=we.length;R<D;R++)ie=we[R],oe?W&&t.texSubImage2D(n.TEXTURE_2D,R,0,0,ie.width,ie.height,J,Me,ie.data):t.texImage2D(n.TEXTURE_2D,R,ve,ie.width,ie.height,0,J,Me,ie.data);A.generateMipmaps=!1}else oe?(Ee&&t.texStorage2D(n.TEXTURE_2D,Ae,ve,Se.width,Se.height),W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se.width,Se.height,J,Me,Se.data)):t.texImage2D(n.TEXTURE_2D,0,ve,Se.width,Se.height,0,J,Me,Se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){oe&&Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,ve,we[0].width,we[0].height,Se.depth);for(let R=0,D=we.length;R<D;R++)if(ie=we[R],A.format!==Kn)if(J!==null)if(oe){if(W)if(A.layerUpdates.size>0){let O=Vd(ie.width,ie.height,A.format,A.type);for(let K of A.layerUpdates){let he=ie.data.subarray(K*O/ie.data.BYTES_PER_ELEMENT,(K+1)*O/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,R,0,0,K,ie.width,ie.height,1,J,he)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,R,0,0,0,ie.width,ie.height,Se.depth,J,ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,R,ve,ie.width,ie.height,Se.depth,0,ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,R,0,0,0,ie.width,ie.height,Se.depth,J,Me,ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,R,ve,ie.width,ie.height,Se.depth,0,J,Me,ie.data)}else{oe&&Ee&&t.texStorage2D(n.TEXTURE_2D,Ae,ve,we[0].width,we[0].height);for(let R=0,D=we.length;R<D;R++)ie=we[R],A.format!==Kn?J!==null?oe?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,R,0,0,ie.width,ie.height,J,ie.data):t.compressedTexImage2D(n.TEXTURE_2D,R,ve,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?W&&t.texSubImage2D(n.TEXTURE_2D,R,0,0,ie.width,ie.height,J,Me,ie.data):t.texImage2D(n.TEXTURE_2D,R,ve,ie.width,ie.height,0,J,Me,ie.data)}else if(A.isDataArrayTexture)if(oe){if(Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,ve,Se.width,Se.height,Se.depth),W)if(A.layerUpdates.size>0){let R=Vd(Se.width,Se.height,A.format,A.type);for(let D of A.layerUpdates){let O=Se.data.subarray(D*R/Se.data.BYTES_PER_ELEMENT,(D+1)*R/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,D,Se.width,Se.height,1,J,Me,O)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,J,Me,Se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,Se.width,Se.height,Se.depth,0,J,Me,Se.data);else if(A.isData3DTexture)oe?(Ee&&t.texStorage3D(n.TEXTURE_3D,Ae,ve,Se.width,Se.height,Se.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,J,Me,Se.data)):t.texImage3D(n.TEXTURE_3D,0,ve,Se.width,Se.height,Se.depth,0,J,Me,Se.data);else if(A.isFramebufferTexture){if(Ee)if(oe)t.texStorage2D(n.TEXTURE_2D,Ae,ve,Se.width,Se.height);else{let R=Se.width,D=Se.height;for(let O=0;O<Ae;O++)t.texImage2D(n.TEXTURE_2D,O,ve,R,D,0,J,Me,null),R>>=1,D>>=1}}else if(we.length>0){if(oe&&Ee){let R=Ne(we[0]);t.texStorage2D(n.TEXTURE_2D,Ae,ve,R.width,R.height)}for(let R=0,D=we.length;R<D;R++)ie=we[R],oe?W&&t.texSubImage2D(n.TEXTURE_2D,R,0,0,J,Me,ie):t.texImage2D(n.TEXTURE_2D,R,ve,J,Me,ie);A.generateMipmaps=!1}else if(oe){if(Ee){let R=Ne(Se);t.texStorage2D(n.TEXTURE_2D,Ae,ve,R.width,R.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,J,Me,Se)}else t.texImage2D(n.TEXTURE_2D,0,ve,J,Me,Se);m(A)&&p(xe),Ce.__version=fe.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function $(N,A,j){if(A.image.length!==6)return;let xe=le(N,A),_e=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+j);let fe=i.get(_e);if(_e.version!==fe.__version||xe===!0){t.activeTexture(n.TEXTURE0+j);let Ce=dt.getPrimaries(dt.workingColorSpace),Fe=A.colorSpace===us?null:dt.getPrimaries(A.colorSpace),Oe=A.colorSpace===us||Ce===Fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let Ge=A.isCompressedTexture||A.image[0].isCompressedTexture,Se=A.image[0]&&A.image[0].isDataTexture,J=[];for(let D=0;D<6;D++)!Ge&&!Se?J[D]=_(A.image[D],!0,s.maxCubemapSize):J[D]=Se?A.image[D].image:A.image[D],J[D]=Ye(A,J[D]);let Me=J[0],ve=r.convert(A.format,A.colorSpace),ie=r.convert(A.type),we=v(A.internalFormat,ve,ie,A.colorSpace),oe=A.isVideoTexture!==!0,Ee=fe.__version===void 0||xe===!0,W=_e.dataReady,Ae=E(A,Me);be(n.TEXTURE_CUBE_MAP,A);let R;if(Ge){oe&&Ee&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,we,Me.width,Me.height);for(let D=0;D<6;D++){R=J[D].mipmaps;for(let O=0;O<R.length;O++){let K=R[O];A.format!==Kn?ve!==null?oe?W&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,O,0,0,K.width,K.height,ve,K.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,O,we,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,O,0,0,K.width,K.height,ve,ie,K.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,O,we,K.width,K.height,0,ve,ie,K.data)}}}else{if(R=A.mipmaps,oe&&Ee){R.length>0&&Ae++;let D=Ne(J[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,we,D.width,D.height)}for(let D=0;D<6;D++)if(Se){oe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,J[D].width,J[D].height,ve,ie,J[D].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,we,J[D].width,J[D].height,0,ve,ie,J[D].data);for(let O=0;O<R.length;O++){let he=R[O].image[D].image;oe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,O+1,0,0,he.width,he.height,ve,ie,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,O+1,we,he.width,he.height,0,ve,ie,he.data)}}else{oe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,ve,ie,J[D]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,we,ve,ie,J[D]);for(let O=0;O<R.length;O++){let K=R[O];oe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,O+1,0,0,ve,ie,K.image[D]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,O+1,we,ve,ie,K.image[D])}}}m(A)&&p(n.TEXTURE_CUBE_MAP),fe.__version=_e.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function se(N,A,j,xe,_e,fe){let Ce=r.convert(j.format,j.colorSpace),Fe=r.convert(j.type),Oe=v(j.internalFormat,Ce,Fe,j.colorSpace),Ge=i.get(A),Se=i.get(j);if(Se.__renderTarget=A,!Ge.__hasExternalTextures){let J=Math.max(1,A.width>>fe),Me=Math.max(1,A.height>>fe);_e===n.TEXTURE_3D||_e===n.TEXTURE_2D_ARRAY?t.texImage3D(_e,fe,Oe,J,Me,A.depth,0,Ce,Fe,null):t.texImage2D(_e,fe,Oe,J,Me,0,Ce,Fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),ze(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,_e,Se.__webglTexture,0,ke(A)):(_e===n.TEXTURE_2D||_e>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,xe,_e,Se.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(N,A,j){if(n.bindRenderbuffer(n.RENDERBUFFER,N),A.depthBuffer){let xe=A.depthTexture,_e=xe&&xe.isDepthTexture?xe.type:null,fe=x(A.stencilBuffer,_e),Ce=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=ke(A);ze(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,fe,A.width,A.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,fe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,fe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,N)}else{let xe=A.textures;for(let _e=0;_e<xe.length;_e++){let fe=xe[_e],Ce=r.convert(fe.format,fe.colorSpace),Fe=r.convert(fe.type),Oe=v(fe.internalFormat,Ce,Fe,fe.colorSpace),Ge=ke(A);j&&ze(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Oe,A.width,A.height):ze(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge,Oe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Oe,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function X(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let xe=i.get(A.depthTexture);xe.__renderTarget=A,(!xe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);let _e=xe.__webglTexture,fe=ke(A);if(A.depthTexture.format===Dr)ze(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_e,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_e,0);else if(A.depthTexture.format===Hr)ze(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_e,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function q(N){let A=i.get(N),j=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){let xe=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),xe){let _e=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,xe.removeEventListener("dispose",_e)};xe.addEventListener("dispose",_e),A.__depthDisposeCallback=_e}A.__boundDepthTexture=xe}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");X(A.__webglFramebuffer,N)}else if(j){A.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[xe]),A.__webglDepthbuffer[xe]===void 0)A.__webglDepthbuffer[xe]=n.createRenderbuffer(),C(A.__webglDepthbuffer[xe],N,!1);else{let _e=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer[xe];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),C(A.__webglDepthbuffer,N,!1);else{let xe=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,_e)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(N,A,j){let xe=i.get(N);A!==void 0&&se(xe.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&q(N)}function pe(N){let A=N.texture,j=i.get(N),xe=i.get(A);N.addEventListener("dispose",y);let _e=N.textures,fe=N.isWebGLCubeRenderTarget===!0,Ce=_e.length>1;if(Ce||(xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture()),xe.__version=A.version,o.memory.textures++),fe){j.__webglFramebuffer=[];for(let Fe=0;Fe<6;Fe++)if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[Fe]=[];for(let Oe=0;Oe<A.mipmaps.length;Oe++)j.__webglFramebuffer[Fe][Oe]=n.createFramebuffer()}else j.__webglFramebuffer[Fe]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let Fe=0;Fe<A.mipmaps.length;Fe++)j.__webglFramebuffer[Fe]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let Fe=0,Oe=_e.length;Fe<Oe;Fe++){let Ge=i.get(_e[Fe]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&ze(N)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Fe=0;Fe<_e.length;Fe++){let Oe=_e[Fe];j.__webglColorRenderbuffer[Fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[Fe]);let Ge=r.convert(Oe.format,Oe.colorSpace),Se=r.convert(Oe.type),J=v(Oe.internalFormat,Ge,Se,Oe.colorSpace,N.isXRRenderTarget===!0),Me=ke(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,J,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,j.__webglColorRenderbuffer[Fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),C(j.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,xe.__webglTexture),be(n.TEXTURE_CUBE_MAP,A);for(let Fe=0;Fe<6;Fe++)if(A.mipmaps&&A.mipmaps.length>0)for(let Oe=0;Oe<A.mipmaps.length;Oe++)se(j.__webglFramebuffer[Fe][Oe],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Oe);else se(j.__webglFramebuffer[Fe],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0);m(A)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let Fe=0,Oe=_e.length;Fe<Oe;Fe++){let Ge=_e[Fe],Se=i.get(Ge);t.bindTexture(n.TEXTURE_2D,Se.__webglTexture),be(n.TEXTURE_2D,Ge),se(j.__webglFramebuffer,N,Ge,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,0),m(Ge)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let Fe=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Fe=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Fe,xe.__webglTexture),be(Fe,A),A.mipmaps&&A.mipmaps.length>0)for(let Oe=0;Oe<A.mipmaps.length;Oe++)se(j.__webglFramebuffer[Oe],N,A,n.COLOR_ATTACHMENT0,Fe,Oe);else se(j.__webglFramebuffer,N,A,n.COLOR_ATTACHMENT0,Fe,0);m(A)&&p(Fe),t.unbindTexture()}N.depthBuffer&&q(N)}function Te(N){let A=N.textures;for(let j=0,xe=A.length;j<xe;j++){let _e=A[j];if(m(_e)){let fe=b(N),Ce=i.get(_e).__webglTexture;t.bindTexture(fe,Ce),p(fe),t.unbindTexture()}}}let Ie=[],G=[];function Ve(N){if(N.samples>0){if(ze(N)===!1){let A=N.textures,j=N.width,xe=N.height,_e=n.COLOR_BUFFER_BIT,fe=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(N),Fe=A.length>1;if(Fe)for(let Oe=0;Oe<A.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Oe=0;Oe<A.length;Oe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(_e|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(_e|=n.STENCIL_BUFFER_BIT)),Fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Oe]);let Ge=i.get(A[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,j,xe,0,0,j,xe,_e,n.NEAREST),c===!0&&(Ie.length=0,G.length=0,Ie.push(n.COLOR_ATTACHMENT0+Oe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ie.push(fe),G.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,G)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Fe)for(let Oe=0;Oe<A.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Oe]);let Ge=i.get(A[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){let A=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function ke(N){return Math.min(s.maxSamples,N.samples)}function ze(N){let A=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function De(N){let A=o.render.frame;h.get(N)!==A&&(h.set(N,A),N.update())}function Ye(N,A){let j=N.colorSpace,xe=N.format,_e=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||j!==yn&&j!==us&&(dt.getTransfer(j)===St?(xe!==Kn||_e!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),A}function Ne(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=F,this.setTexture2DArray=U,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=ee,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=se,this.useMultisampledRTT=ze}function HM(n,e){function t(i,s=us){let r,o=dt.getTransfer(s);if(i===Vi)return n.UNSIGNED_BYTE;if(i===lh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===uh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===dp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hp)return n.BYTE;if(i===fp)return n.SHORT;if(i===Oo)return n.UNSIGNED_SHORT;if(i===ch)return n.INT;if(i===Xs)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===An)return n.HALF_FLOAT;if(i===pp)return n.ALPHA;if(i===mp)return n.RGB;if(i===Kn)return n.RGBA;if(i===gp)return n.LUMINANCE;if(i===xp)return n.LUMINANCE_ALPHA;if(i===Dr)return n.DEPTH_COMPONENT;if(i===Hr)return n.DEPTH_STENCIL;if(i===hh)return n.RED;if(i===fh)return n.RED_INTEGER;if(i===_p)return n.RG;if(i===dh)return n.RG_INTEGER;if(i===ph)return n.RGBA_INTEGER;if(i===Va||i===Ga||i===Wa||i===Xa)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ga)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jl||i===jl||i===Ql||i===eu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===eu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tu||i===nu||i===iu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===tu||i===nu)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===iu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===su||i===ru||i===ou||i===au||i===cu||i===lu||i===uu||i===hu||i===fu||i===du||i===pu||i===mu||i===gu||i===xu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===su)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ru)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ou)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===au)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===du)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qa||i===_u||i===yu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===qa)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_u)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yp||i===vu||i===Mu||i===bu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===qa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===vu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===kr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Ou=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},pt=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},VM={type:"move"},No=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(VM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new pt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},GM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WM=`
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

}`,Bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new on,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Et({vertexShader:GM,fragmentShader:WM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new Pn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zu=class extends ps{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,_=new Bu,m=t.getContextAttributes(),p=null,b=null,v=[],x=[],E=new Ke,T=null,y=new Yt;y.viewport=new yt;let w=new Yt;w.viewport=new yt;let M=[y,w],S=new Ou,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let $=v[te];return $===void 0&&($=new No,v[te]=$),$.getTargetRaySpace()},this.getControllerGrip=function(te){let $=v[te];return $===void 0&&($=new No,v[te]=$),$.getGripSpace()},this.getHand=function(te){let $=v[te];return $===void 0&&($=new No,v[te]=$),$.getHandSpace()};function z(te){let $=x.indexOf(te.inputSource);if($===-1)return;let se=v[$];se!==void 0&&(se.update(te.inputSource,te.frame,l||o),se.dispatchEvent({type:te.type,data:te.inputSource}))}function L(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",F);for(let te=0;te<v.length;te++){let $=x[te];$!==null&&(x[te]=null,v[te].disconnect($))}I=null,B=null,_.reset(),e.setRenderTarget(p),d=null,f=null,u=null,s=null,b=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",L),s.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0){let $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Qt(d.framebufferWidth,d.framebufferHeight,{format:Kn,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,se=null,C=null;m.depth&&(C=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=m.stencil?Hr:Dr,se=m.stencil?kr:Xs);let X={colorFormat:t.RGBA8,depthFormat:C,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(X),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Qt(f.textureWidth,f.textureHeight,{format:Kn,type:Vi,depthTexture:new tc(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),le.setContext(s),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(te){for(let $=0;$<te.removed.length;$++){let se=te.removed[$],C=x.indexOf(se);C>=0&&(x[C]=null,v[C].disconnect(se))}for(let $=0;$<te.added.length;$++){let se=te.added[$],C=x.indexOf(se);if(C===-1){for(let q=0;q<v.length;q++)if(q>=x.length){x.push(se),C=q;break}else if(x[q]===null){x[q]=se,C=q;break}if(C===-1)break}let X=v[C];X&&X.connect(se)}}let U=new k,Y=new k;function H(te,$,se){U.setFromMatrixPosition($.matrixWorld),Y.setFromMatrixPosition(se.matrixWorld);let C=U.distanceTo(Y),X=$.projectionMatrix.elements,q=se.projectionMatrix.elements,ee=X[14]/(X[10]-1),pe=X[14]/(X[10]+1),Te=(X[9]+1)/X[5],Ie=(X[9]-1)/X[5],G=(X[8]-1)/X[0],Ve=(q[8]+1)/q[0],ke=ee*G,ze=ee*Ve,De=C/(-G+Ve),Ye=De*-G;if($.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ye),te.translateZ(De),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),X[10]===-1)te.projectionMatrix.copy($.projectionMatrix),te.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let Ne=ee+De,N=pe+De,A=ke-Ye,j=ze+(C-Ye),xe=Te*pe/N*Ne,_e=Ie*pe/N*Ne;te.projectionMatrix.makePerspective(A,j,xe,_e,Ne,N),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ne(te,$){$===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices($.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let $=te.near,se=te.far;_.texture!==null&&(_.depthNear>0&&($=_.depthNear),_.depthFar>0&&(se=_.depthFar)),S.near=w.near=y.near=$,S.far=w.far=y.far=se,(I!==S.near||B!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,B=S.far),y.layers.mask=te.layers.mask|2,w.layers.mask=te.layers.mask|4,S.layers.mask=y.layers.mask|w.layers.mask;let C=te.parent,X=S.cameras;ne(S,C);for(let q=0;q<X.length;q++)ne(X[q],C);X.length===2?H(S,y,w):S.projectionMatrix.copy(y.projectionMatrix),ue(te,S,C)};function ue(te,$,se){se===null?te.matrix.copy($.matrixWorld):(te.matrix.copy(se.matrixWorld),te.matrix.invert(),te.matrix.multiply($.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy($.projectionMatrix),te.projectionMatrixInverse.copy($.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Wr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(te){c=te,f!==null&&(f.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let me=null;function be(te,$){if(h=$.getViewerPose(l||o),g=$,h!==null){let se=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let C=!1;se.length!==S.cameras.length&&(S.cameras.length=0,C=!0);for(let q=0;q<se.length;q++){let ee=se[q],pe=null;if(d!==null)pe=d.getViewport(ee);else{let Ie=u.getViewSubImage(f,ee);pe=Ie.viewport,q===0&&(e.setRenderTargetTextures(b,Ie.colorTexture,f.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(b))}let Te=M[q];Te===void 0&&(Te=new Yt,Te.layers.enable(q),Te.viewport=new yt,M[q]=Te),Te.matrix.fromArray(ee.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(ee.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(pe.x,pe.y,pe.width,pe.height),q===0&&(S.matrix.copy(Te.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),C===!0&&S.cameras.push(Te)}let X=s.enabledFeatures;if(X&&X.includes("depth-sensing")){let q=u.getDepthInformation(se[0]);q&&q.isValid&&q.texture&&_.init(e,q,s.renderState)}}for(let se=0;se<v.length;se++){let C=x[se],X=v[se];C!==null&&X!==void 0&&X.update(C,$,l||o)}me&&me(te,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}let le=new wp;le.setAnimationLoop(be),this.setAnimationLoop=function(te){me=te},this.dispose=function(){}}},Vs=new hi,XM=new et;function qM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Tp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),v=b.envMap,x=b.envMapRotation;v&&(m.envMap.value=v,Vs.copy(x),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),m.envMapRotation.value.setFromMatrix4(XM.makeRotationFromEuler(Vs)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function YM(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,v){let x=v.program;i.uniformBlockBinding(b,x)}function l(b,v){let x=s[b.id];x===void 0&&(g(b),x=h(b),s[b.id]=x,b.addEventListener("dispose",m));let E=v.program;i.updateUBOMapping(b,E);let T=e.render.frame;r[b.id]!==T&&(f(b),r[b.id]=T)}function h(b){let v=u();b.__bindingPointIndex=v;let x=n.createBuffer(),E=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,E,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,x),x}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let v=s[b.id],x=b.uniforms,E=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,y=x.length;T<y;T++){let w=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,S=w.length;M<S;M++){let I=w[M];if(d(I,T,M,E)===!0){let B=I.__offset,z=Array.isArray(I.value)?I.value:[I.value],L=0;for(let F=0;F<z.length;F++){let U=z[F],Y=_(U);typeof U=="number"||typeof U=="boolean"?(I.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,B+L,I.__data)):U.isMatrix3?(I.__data[0]=U.elements[0],I.__data[1]=U.elements[1],I.__data[2]=U.elements[2],I.__data[3]=0,I.__data[4]=U.elements[3],I.__data[5]=U.elements[4],I.__data[6]=U.elements[5],I.__data[7]=0,I.__data[8]=U.elements[6],I.__data[9]=U.elements[7],I.__data[10]=U.elements[8],I.__data[11]=0):(U.toArray(I.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,v,x,E){let T=b.value,y=v+"_"+x;if(E[y]===void 0)return typeof T=="number"||typeof T=="boolean"?E[y]=T:E[y]=T.clone(),!0;{let w=E[y];if(typeof T=="number"||typeof T=="boolean"){if(w!==T)return E[y]=T,!0}else if(w.equals(T)===!1)return w.copy(T),!0}return!1}function g(b){let v=b.uniforms,x=0,E=16;for(let y=0,w=v.length;y<w;y++){let M=Array.isArray(v[y])?v[y]:[v[y]];for(let S=0,I=M.length;S<I;S++){let B=M[S],z=Array.isArray(B.value)?B.value:[B.value];for(let L=0,F=z.length;L<F;L++){let U=z[L],Y=_(U),H=x%E,ne=H%Y.boundary,ue=H+ne;x+=ne,ue!==0&&E-ue<Y.storage&&(x+=E-ue),B.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=Y.storage}}}let T=x%E;return T>0&&(x+=E-T),b.__size=x,b.__cache={},this}function _(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){let v=b.target;v.removeEventListener("dispose",m);let x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var nc=class{constructor(e={}){let{canvas:t=jg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,b=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=ds,this.toneMappingExposure=1;let x=this,E=!1,T=0,y=0,w=null,M=-1,S=null,I=new yt,B=new yt,z=null,L=new Re(0),F=0,U=t.width,Y=t.height,H=1,ne=null,ue=null,me=new yt(0,0,U,Y),be=new yt(0,0,U,Y),le=!1,te=new zo,$=!1,se=!1,C=new et,X=new et,q=new k,ee=new yt,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Ie(){return w===null?H:1}let G=i;function Ve(P,Z){return t.getContext(P,Z)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",D,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",K,!1),G===null){let Z="webgl2";if(G=Ve(Z,P),G===null)throw Ve(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ke,ze,De,Ye,Ne,N,A,j,xe,_e,fe,Ce,Fe,Oe,Ge,Se,J,Me,ve,ie,we,oe,Ee,W;function Ae(){ke=new lv(G),ke.init(),oe=new HM(G,ke),ze=new iv(G,ke,e,oe),De=new BM(G,ke),ze.reverseDepthBuffer&&f&&De.buffers.depth.setReversed(!0),Ye=new fv(G),Ne=new TM,N=new kM(G,ke,De,Ne,ze,oe,Ye),A=new rv(x),j=new cv(x),xe=new yx(G),Ee=new tv(G,xe),_e=new uv(G,xe,Ye,Ee),fe=new pv(G,_e,xe,Ye),ve=new dv(G,ze,N),Se=new sv(Ne),Ce=new EM(x,A,j,ke,ze,Ee,Se),Fe=new qM(x,Ne),Oe=new AM,Ge=new DM(ke),Me=new ev(x,A,j,De,fe,d,c),J=new FM(x,fe,ze),W=new YM(G,Ye,ze,De),ie=new nv(G,ke,Ye),we=new hv(G,ke,Ye),Ye.programs=Ce.programs,x.capabilities=ze,x.extensions=ke,x.properties=Ne,x.renderLists=Oe,x.shadowMap=J,x.state=De,x.info=Ye}Ae();let R=new zu(x,G);this.xr=R,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let P=ke.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=ke.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(P){P!==void 0&&(H=P,this.setSize(U,Y,!1))},this.getSize=function(P){return P.set(U,Y)},this.setSize=function(P,Z,ae=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=P,Y=Z,t.width=Math.floor(P*H),t.height=Math.floor(Z*H),ae===!0&&(t.style.width=P+"px",t.style.height=Z+"px"),this.setViewport(0,0,P,Z)},this.getDrawingBufferSize=function(P){return P.set(U*H,Y*H).floor()},this.setDrawingBufferSize=function(P,Z,ae){U=P,Y=Z,H=ae,t.width=Math.floor(P*ae),t.height=Math.floor(Z*ae),this.setViewport(0,0,P,Z)},this.getCurrentViewport=function(P){return P.copy(I)},this.getViewport=function(P){return P.copy(me)},this.setViewport=function(P,Z,ae,ce){P.isVector4?me.set(P.x,P.y,P.z,P.w):me.set(P,Z,ae,ce),De.viewport(I.copy(me).multiplyScalar(H).round())},this.getScissor=function(P){return P.copy(be)},this.setScissor=function(P,Z,ae,ce){P.isVector4?be.set(P.x,P.y,P.z,P.w):be.set(P,Z,ae,ce),De.scissor(B.copy(be).multiplyScalar(H).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(P){De.setScissorTest(le=P)},this.setOpaqueSort=function(P){ne=P},this.setTransparentSort=function(P){ue=P},this.getClearColor=function(P){return P.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(P=!0,Z=!0,ae=!0){let ce=0;if(P){let Q=!1;if(w!==null){let Ue=w.texture.format;Q=Ue===ph||Ue===dh||Ue===fh}if(Q){let Ue=w.texture.type,qe=Ue===Vi||Ue===Xs||Ue===Oo||Ue===kr||Ue===lh||Ue===uh,Je=Me.getClearColor(),je=Me.getClearAlpha(),ot=Je.r,ct=Je.g,Qe=Je.b;qe?(g[0]=ot,g[1]=ct,g[2]=Qe,g[3]=je,G.clearBufferuiv(G.COLOR,0,g)):(_[0]=ot,_[1]=ct,_[2]=Qe,_[3]=je,G.clearBufferiv(G.COLOR,0,_))}else ce|=G.COLOR_BUFFER_BIT}Z&&(ce|=G.DEPTH_BUFFER_BIT),ae&&(ce|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",D,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",K,!1),Oe.dispose(),Ge.dispose(),Ne.dispose(),A.dispose(),j.dispose(),fe.dispose(),Ee.dispose(),W.dispose(),Ce.dispose(),R.dispose(),R.removeEventListener("sessionstart",de),R.removeEventListener("sessionend",ge),ye.stop()};function D(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let P=Ye.autoReset,Z=J.enabled,ae=J.autoUpdate,ce=J.needsUpdate,Q=J.type;Ae(),Ye.autoReset=P,J.enabled=Z,J.autoUpdate=ae,J.needsUpdate=ce,J.type=Q}function K(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function he(P){let Z=P.target;Z.removeEventListener("dispose",he),Pe(Z)}function Pe(P){Be(P),Ne.remove(P)}function Be(P){let Z=Ne.get(P).programs;Z!==void 0&&(Z.forEach(function(ae){Ce.releaseProgram(ae)}),P.isShaderMaterial&&Ce.releaseShaderCache(P))}this.renderBufferDirect=function(P,Z,ae,ce,Q,Ue){Z===null&&(Z=pe);let qe=Q.isMesh&&Q.matrixWorld.determinant()<0,Je=Vt(P,Z,ae,ce,Q);De.setMaterial(ce,qe);let je=ae.index,ot=1;if(ce.wireframe===!0){if(je=_e.getWireframeAttribute(ae),je===void 0)return;ot=2}let ct=ae.drawRange,Qe=ae.attributes.position,vt=ct.start*ot,Dt=(ct.start+ct.count)*ot;Ue!==null&&(vt=Math.max(vt,Ue.start*ot),Dt=Math.min(Dt,(Ue.start+Ue.count)*ot)),je!==null?(vt=Math.max(vt,0),Dt=Math.min(Dt,je.count)):Qe!=null&&(vt=Math.max(vt,0),Dt=Math.min(Dt,Qe.count));let Ot=Dt-vt;if(Ot<0||Ot===1/0)return;Ee.setup(Q,ce,Je,ae,je);let Cn,Mt=ie;if(je!==null&&(Cn=xe.get(je),Mt=we,Mt.setIndex(Cn)),Q.isMesh)ce.wireframe===!0?(De.setLineWidth(ce.wireframeLinewidth*Ie()),Mt.setMode(G.LINES)):Mt.setMode(G.TRIANGLES);else if(Q.isLine){let tt=ce.linewidth;tt===void 0&&(tt=1),De.setLineWidth(tt*Ie()),Q.isLineSegments?Mt.setMode(G.LINES):Q.isLineLoop?Mt.setMode(G.LINE_LOOP):Mt.setMode(G.LINE_STRIP)}else Q.isPoints?Mt.setMode(G.POINTS):Q.isSprite&&Mt.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Mt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))Mt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let tt=Q._multiDrawStarts,Ci=Q._multiDrawCounts,bt=Q._multiDrawCount,ii=je?xe.get(je).bytesPerElement:1,ur=Ne.get(ce).currentProgram.getUniforms();for(let Nn=0;Nn<bt;Nn++)ur.setValue(G,"_gl_DrawID",Nn),Mt.render(tt[Nn]/ii,Ci[Nn])}else if(Q.isInstancedMesh)Mt.renderInstances(vt,Ot,Q.count);else if(ae.isInstancedBufferGeometry){let tt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ci=Math.min(ae.instanceCount,tt);Mt.renderInstances(vt,Ot,Ci)}else Mt.render(vt,Ot)};function He(P,Z,ae){P.transparent===!0&&P.side===Ct&&P.forceSinglePass===!1?(P.side=Jt,P.needsUpdate=!0,Tt(P,Z,ae),P.side=yi,P.needsUpdate=!0,Tt(P,Z,ae),P.side=Ct):Tt(P,Z,ae)}this.compile=function(P,Z,ae=null){ae===null&&(ae=P),p=Ge.get(ae),p.init(Z),v.push(p),ae.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),P!==ae&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),p.setupLights();let ce=new Set;return P.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ue=Q.material;if(Ue)if(Array.isArray(Ue))for(let qe=0;qe<Ue.length;qe++){let Je=Ue[qe];He(Je,ae,Q),ce.add(Je)}else He(Ue,ae,Q),ce.add(Ue)}),v.pop(),p=null,ce},this.compileAsync=function(P,Z,ae=null){let ce=this.compile(P,Z,ae);return new Promise(Q=>{function Ue(){if(ce.forEach(function(qe){Ne.get(qe).currentProgram.isReady()&&ce.delete(qe)}),ce.size===0){Q(P);return}setTimeout(Ue,10)}ke.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let V=null;function re(P){V&&V(P)}function de(){ye.stop()}function ge(){ye.start()}let ye=new wp;ye.setAnimationLoop(re),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(P){V=P,R.setAnimationLoop(P),P===null?ye.stop():ye.start()},R.addEventListener("sessionstart",de),R.addEventListener("sessionend",ge),this.render=function(P,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(Z),Z=R.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,Z,w),p=Ge.get(P,v.length),p.init(Z),v.push(p),X.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),te.setFromProjectionMatrix(X),se=this.localClippingEnabled,$=Se.init(this.clippingPlanes,se),m=Oe.get(P,b.length),m.init(),b.push(m),R.enabled===!0&&R.isPresenting===!0){let Ue=x.xr.getDepthSensingMesh();Ue!==null&&Le(Ue,Z,-1/0,x.sortObjects)}Le(P,Z,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ne,ue),Te=R.enabled===!1||R.isPresenting===!1||R.hasDepthSensing()===!1,Te&&Me.addToRenderList(m,P),this.info.render.frame++,$===!0&&Se.beginShadows();let ae=p.state.shadowsArray;J.render(ae,P,Z),$===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();let ce=m.opaque,Q=m.transmissive;if(p.setupLights(),Z.isArrayCamera){let Ue=Z.cameras;if(Q.length>0)for(let qe=0,Je=Ue.length;qe<Je;qe++){let je=Ue[qe];Ze(ce,Q,P,je)}Te&&Me.render(P);for(let qe=0,Je=Ue.length;qe<Je;qe++){let je=Ue[qe];$e(m,P,je,je.viewport)}}else Q.length>0&&Ze(ce,Q,P,Z),Te&&Me.render(P),$e(m,P,Z);w!==null&&(N.updateMultisampleRenderTarget(w),N.updateRenderTargetMipmap(w)),P.isScene===!0&&P.onAfterRender(x,P,Z),Ee.resetDefaultState(),M=-1,S=null,v.pop(),v.length>0?(p=v[v.length-1],$===!0&&Se.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Le(P,Z,ae,ce){if(P.visible===!1)return;if(P.layers.test(Z.layers)){if(P.isGroup)ae=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Z);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||te.intersectsSprite(P)){ce&&ee.setFromMatrixPosition(P.matrixWorld).applyMatrix4(X);let qe=fe.update(P),Je=P.material;Je.visible&&m.push(P,qe,Je,ae,ee.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||te.intersectsObject(P))){let qe=fe.update(P),Je=P.material;if(ce&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ee.copy(P.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),ee.copy(qe.boundingSphere.center)),ee.applyMatrix4(P.matrixWorld).applyMatrix4(X)),Array.isArray(Je)){let je=qe.groups;for(let ot=0,ct=je.length;ot<ct;ot++){let Qe=je[ot],vt=Je[Qe.materialIndex];vt&&vt.visible&&m.push(P,qe,vt,ae,ee.z,Qe)}}else Je.visible&&m.push(P,qe,Je,ae,ee.z,null)}}let Ue=P.children;for(let qe=0,Je=Ue.length;qe<Je;qe++)Le(Ue[qe],Z,ae,ce)}function $e(P,Z,ae,ce){let Q=P.opaque,Ue=P.transmissive,qe=P.transparent;p.setupLightsView(ae),$===!0&&Se.setGlobalState(x.clippingPlanes,ae),ce&&De.viewport(I.copy(ce)),Q.length>0&&nt(Q,Z,ae),Ue.length>0&&nt(Ue,Z,ae),qe.length>0&&nt(qe,Z,ae),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Ze(P,Z,ae,ce){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ce.id]===void 0&&(p.state.transmissionRenderTarget[ce.id]=new Qt(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?An:Vi,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));let Ue=p.state.transmissionRenderTarget[ce.id],qe=ce.viewport||I;Ue.setSize(qe.z,qe.w);let Je=x.getRenderTarget();x.setRenderTarget(Ue),x.getClearColor(L),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear(),Te&&Me.render(ae);let je=x.toneMapping;x.toneMapping=ds;let ot=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),p.setupLightsView(ce),$===!0&&Se.setGlobalState(x.clippingPlanes,ce),nt(P,ae,ce),N.updateMultisampleRenderTarget(Ue),N.updateRenderTargetMipmap(Ue),ke.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Qe=0,vt=Z.length;Qe<vt;Qe++){let Dt=Z[Qe],Ot=Dt.object,Cn=Dt.geometry,Mt=Dt.material,tt=Dt.group;if(Mt.side===Ct&&Ot.layers.test(ce.layers)){let Ci=Mt.side;Mt.side=Jt,Mt.needsUpdate=!0,rt(Ot,ae,ce,Cn,Mt,tt),Mt.side=Ci,Mt.needsUpdate=!0,ct=!0}}ct===!0&&(N.updateMultisampleRenderTarget(Ue),N.updateRenderTargetMipmap(Ue))}x.setRenderTarget(Je),x.setClearColor(L,F),ot!==void 0&&(ce.viewport=ot),x.toneMapping=je}function nt(P,Z,ae){let ce=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Ue=P.length;Q<Ue;Q++){let qe=P[Q],Je=qe.object,je=qe.geometry,ot=ce===null?qe.material:ce,ct=qe.group;Je.layers.test(ae.layers)&&rt(Je,Z,ae,je,ot,ct)}}function rt(P,Z,ae,ce,Q,Ue){P.onBeforeRender(x,Z,ae,ce,Q,Ue),P.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(x,Z,ae,ce,P,Ue),Q.transparent===!0&&Q.side===Ct&&Q.forceSinglePass===!1?(Q.side=Jt,Q.needsUpdate=!0,x.renderBufferDirect(ae,Z,ce,Q,P,Ue),Q.side=yi,Q.needsUpdate=!0,x.renderBufferDirect(ae,Z,ce,Q,P,Ue),Q.side=Ct):x.renderBufferDirect(ae,Z,ce,Q,P,Ue),P.onAfterRender(x,Z,ae,ce,Q,Ue)}function Tt(P,Z,ae){Z.isScene!==!0&&(Z=pe);let ce=Ne.get(P),Q=p.state.lights,Ue=p.state.shadowsArray,qe=Q.state.version,Je=Ce.getParameters(P,Q.state,Ue,Z,ae),je=Ce.getProgramCacheKey(Je),ot=ce.programs;ce.environment=P.isMeshStandardMaterial?Z.environment:null,ce.fog=Z.fog,ce.envMap=(P.isMeshStandardMaterial?j:A).get(P.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&P.envMap===null?Z.environmentRotation:P.envMapRotation,ot===void 0&&(P.addEventListener("dispose",he),ot=new Map,ce.programs=ot);let ct=ot.get(je);if(ct!==void 0){if(ce.currentProgram===ct&&ce.lightsStateVersion===qe)return Lt(P,Je),ct}else Je.uniforms=Ce.getUniforms(P),P.onBeforeCompile(Je,x),ct=Ce.acquireProgram(Je,je),ot.set(je,ct),ce.uniforms=Je.uniforms;let Qe=ce.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Qe.clippingPlanes=Se.uniform),Lt(P,Je),ce.needsLights=fn(P),ce.lightsStateVersion=qe,ce.needsLights&&(Qe.ambientLightColor.value=Q.state.ambient,Qe.lightProbe.value=Q.state.probe,Qe.directionalLights.value=Q.state.directional,Qe.directionalLightShadows.value=Q.state.directionalShadow,Qe.spotLights.value=Q.state.spot,Qe.spotLightShadows.value=Q.state.spotShadow,Qe.rectAreaLights.value=Q.state.rectArea,Qe.ltc_1.value=Q.state.rectAreaLTC1,Qe.ltc_2.value=Q.state.rectAreaLTC2,Qe.pointLights.value=Q.state.point,Qe.pointLightShadows.value=Q.state.pointShadow,Qe.hemisphereLights.value=Q.state.hemi,Qe.directionalShadowMap.value=Q.state.directionalShadowMap,Qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Qe.spotShadowMap.value=Q.state.spotShadowMap,Qe.spotLightMatrix.value=Q.state.spotLightMatrix,Qe.spotLightMap.value=Q.state.spotLightMap,Qe.pointShadowMap.value=Q.state.pointShadowMap,Qe.pointShadowMatrix.value=Q.state.pointShadowMatrix),ce.currentProgram=ct,ce.uniformsList=null,ct}function Ht(P){if(P.uniformsList===null){let Z=P.currentProgram.getUniforms();P.uniformsList=Ur.seqWithValue(Z.seq,P.uniforms)}return P.uniformsList}function Lt(P,Z){let ae=Ne.get(P);ae.outputColorSpace=Z.outputColorSpace,ae.batching=Z.batching,ae.batchingColor=Z.batchingColor,ae.instancing=Z.instancing,ae.instancingColor=Z.instancingColor,ae.instancingMorph=Z.instancingMorph,ae.skinning=Z.skinning,ae.morphTargets=Z.morphTargets,ae.morphNormals=Z.morphNormals,ae.morphColors=Z.morphColors,ae.morphTargetsCount=Z.morphTargetsCount,ae.numClippingPlanes=Z.numClippingPlanes,ae.numIntersection=Z.numClipIntersection,ae.vertexAlphas=Z.vertexAlphas,ae.vertexTangents=Z.vertexTangents,ae.toneMapping=Z.toneMapping}function Vt(P,Z,ae,ce,Q){Z.isScene!==!0&&(Z=pe),N.resetTextureUnits();let Ue=Z.fog,qe=ce.isMeshStandardMaterial?Z.environment:null,Je=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:yn,je=(ce.isMeshStandardMaterial?j:A).get(ce.envMap||qe),ot=ce.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ct=!!ae.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Qe=!!ae.morphAttributes.position,vt=!!ae.morphAttributes.normal,Dt=!!ae.morphAttributes.color,Ot=ds;ce.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ot=x.toneMapping);let Cn=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Mt=Cn!==void 0?Cn.length:0,tt=Ne.get(ce),Ci=p.state.lights;if($===!0&&(se===!0||P!==S)){let Yn=P===S&&ce.id===M;Se.setState(ce,P,Yn)}let bt=!1;ce.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Ci.state.version||tt.outputColorSpace!==Je||Q.isBatchedMesh&&tt.batching===!1||!Q.isBatchedMesh&&tt.batching===!0||Q.isBatchedMesh&&tt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&tt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&tt.instancing===!1||!Q.isInstancedMesh&&tt.instancing===!0||Q.isSkinnedMesh&&tt.skinning===!1||!Q.isSkinnedMesh&&tt.skinning===!0||Q.isInstancedMesh&&tt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&tt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&tt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&tt.instancingMorph===!1&&Q.morphTexture!==null||tt.envMap!==je||ce.fog===!0&&tt.fog!==Ue||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Se.numPlanes||tt.numIntersection!==Se.numIntersection)||tt.vertexAlphas!==ot||tt.vertexTangents!==ct||tt.morphTargets!==Qe||tt.morphNormals!==vt||tt.morphColors!==Dt||tt.toneMapping!==Ot||tt.morphTargetsCount!==Mt)&&(bt=!0):(bt=!0,tt.__version=ce.version);let ii=tt.currentProgram;bt===!0&&(ii=Tt(ce,Z,Q));let ur=!1,Nn=!1,go=!1,Bt=ii.getUniforms(),gi=tt.uniforms;if(De.useProgram(ii.program)&&(ur=!0,Nn=!0,go=!0),ce.id!==M&&(M=ce.id,Nn=!0),ur||S!==P){De.buffers.depth.getReversed()?(C.copy(P.projectionMatrix),ex(C),tx(C),Bt.setValue(G,"projectionMatrix",C)):Bt.setValue(G,"projectionMatrix",P.projectionMatrix),Bt.setValue(G,"viewMatrix",P.matrixWorldInverse);let ns=Bt.map.cameraPosition;ns!==void 0&&ns.setValue(G,q.setFromMatrixPosition(P.matrixWorld)),ze.logarithmicDepthBuffer&&Bt.setValue(G,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Bt.setValue(G,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,Nn=!0,go=!0)}if(Q.isSkinnedMesh){Bt.setOptional(G,Q,"bindMatrix"),Bt.setOptional(G,Q,"bindMatrixInverse");let Yn=Q.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),Bt.setValue(G,"boneTexture",Yn.boneTexture,N))}Q.isBatchedMesh&&(Bt.setOptional(G,Q,"batchingTexture"),Bt.setValue(G,"batchingTexture",Q._matricesTexture,N),Bt.setOptional(G,Q,"batchingIdTexture"),Bt.setValue(G,"batchingIdTexture",Q._indirectTexture,N),Bt.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Bt.setValue(G,"batchingColorTexture",Q._colorsTexture,N));let xo=ae.morphAttributes;if((xo.position!==void 0||xo.normal!==void 0||xo.color!==void 0)&&ve.update(Q,ae,ii),(Nn||tt.receiveShadow!==Q.receiveShadow)&&(tt.receiveShadow=Q.receiveShadow,Bt.setValue(G,"receiveShadow",Q.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(gi.envMap.value=je,gi.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&Z.environment!==null&&(gi.envMapIntensity.value=Z.environmentIntensity),Nn&&(Bt.setValue(G,"toneMappingExposure",x.toneMappingExposure),tt.needsLights&&Wt(gi,go),Ue&&ce.fog===!0&&Fe.refreshFogUniforms(gi,Ue),Fe.refreshMaterialUniforms(gi,ce,H,Y,p.state.transmissionRenderTarget[P.id]),Ur.upload(G,Ht(tt),gi,N)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Ur.upload(G,Ht(tt),gi,N),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Bt.setValue(G,"center",Q.center),Bt.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Bt.setValue(G,"normalMatrix",Q.normalMatrix),Bt.setValue(G,"modelMatrix",Q.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){let Yn=ce.uniformsGroups;for(let ns=0,is=Yn.length;ns<is;ns++){let Vf=Yn[ns];W.update(Vf,ii),W.bind(Vf,ii)}}return ii}function Wt(P,Z){P.ambientLightColor.needsUpdate=Z,P.lightProbe.needsUpdate=Z,P.directionalLights.needsUpdate=Z,P.directionalLightShadows.needsUpdate=Z,P.pointLights.needsUpdate=Z,P.pointLightShadows.needsUpdate=Z,P.spotLights.needsUpdate=Z,P.spotLightShadows.needsUpdate=Z,P.rectAreaLights.needsUpdate=Z,P.hemisphereLights.needsUpdate=Z}function fn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(P,Z,ae){Ne.get(P.texture).__webglTexture=Z,Ne.get(P.depthTexture).__webglTexture=ae;let ce=Ne.get(P);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=ae===void 0,ce.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Z){let ae=Ne.get(P);ae.__webglFramebuffer=Z,ae.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(P,Z=0,ae=0){w=P,T=Z,y=ae;let ce=!0,Q=null,Ue=!1,qe=!1;if(P){let je=Ne.get(P);if(je.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(G.FRAMEBUFFER,null),ce=!1;else if(je.__webglFramebuffer===void 0)N.setupRenderTarget(P);else if(je.__hasExternalTextures)N.rebindTextures(P,Ne.get(P.texture).__webglTexture,Ne.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Qe=P.depthTexture;if(je.__boundDepthTexture!==Qe){if(Qe!==null&&Ne.has(Qe)&&(P.width!==Qe.image.width||P.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(P)}}let ot=P.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(qe=!0);let ct=Ne.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ct[Z])?Q=ct[Z][ae]:Q=ct[Z],Ue=!0):P.samples>0&&N.useMultisampledRTT(P)===!1?Q=Ne.get(P).__webglMultisampledFramebuffer:Array.isArray(ct)?Q=ct[ae]:Q=ct,I.copy(P.viewport),B.copy(P.scissor),z=P.scissorTest}else I.copy(me).multiplyScalar(H).floor(),B.copy(be).multiplyScalar(H).floor(),z=le;if(De.bindFramebuffer(G.FRAMEBUFFER,Q)&&ce&&De.drawBuffers(P,Q),De.viewport(I),De.scissor(B),De.setScissorTest(z),Ue){let je=Ne.get(P.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Z,je.__webglTexture,ae)}else if(qe){let je=Ne.get(P.texture),ot=Z||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,je.__webglTexture,ae||0,ot)}M=-1},this.readRenderTargetPixels=function(P,Z,ae,ce,Q,Ue,qe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=Ne.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&qe!==void 0&&(Je=Je[qe]),Je){De.bindFramebuffer(G.FRAMEBUFFER,Je);try{let je=P.texture,ot=je.format,ct=je.type;if(!ze.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=P.width-ce&&ae>=0&&ae<=P.height-Q&&G.readPixels(Z,ae,ce,Q,oe.convert(ot),oe.convert(ct),Ue)}finally{let je=w!==null?Ne.get(w).__webglFramebuffer:null;De.bindFramebuffer(G.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(P,Z,ae,ce,Q,Ue,qe){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=Ne.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&qe!==void 0&&(Je=Je[qe]),Je){let je=P.texture,ot=je.format,ct=je.type;if(!ze.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=P.width-ce&&ae>=0&&ae<=P.height-Q){De.bindFramebuffer(G.FRAMEBUFFER,Je);let Qe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Qe),G.bufferData(G.PIXEL_PACK_BUFFER,Ue.byteLength,G.STREAM_READ),G.readPixels(Z,ae,ce,Q,oe.convert(ot),oe.convert(ct),0);let vt=w!==null?Ne.get(w).__webglFramebuffer:null;De.bindFramebuffer(G.FRAMEBUFFER,vt);let Dt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Qg(G,Dt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Qe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ue),G.deleteBuffer(Qe),G.deleteSync(Dt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,Z=null,ae=0){P.isTexture!==!0&&(Co("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,P=arguments[1]);let ce=Math.pow(2,-ae),Q=Math.floor(P.image.width*ce),Ue=Math.floor(P.image.height*ce),qe=Z!==null?Z.x:0,Je=Z!==null?Z.y:0;N.setTexture2D(P,0),G.copyTexSubImage2D(G.TEXTURE_2D,ae,0,0,qe,Je,Q,Ue),De.unbindTexture()},this.copyTextureToTexture=function(P,Z,ae=null,ce=null,Q=0){P.isTexture!==!0&&(Co("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,P=arguments[1],Z=arguments[2],Q=arguments[3]||0,ae=null);let Ue,qe,Je,je,ot,ct,Qe,vt,Dt,Ot=P.isCompressedTexture?P.mipmaps[Q]:P.image;ae!==null?(Ue=ae.max.x-ae.min.x,qe=ae.max.y-ae.min.y,Je=ae.isBox3?ae.max.z-ae.min.z:1,je=ae.min.x,ot=ae.min.y,ct=ae.isBox3?ae.min.z:0):(Ue=Ot.width,qe=Ot.height,Je=Ot.depth||1,je=0,ot=0,ct=0),ce!==null?(Qe=ce.x,vt=ce.y,Dt=ce.z):(Qe=0,vt=0,Dt=0);let Cn=oe.convert(Z.format),Mt=oe.convert(Z.type),tt;Z.isData3DTexture?(N.setTexture3D(Z,0),tt=G.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(N.setTexture2DArray(Z,0),tt=G.TEXTURE_2D_ARRAY):(N.setTexture2D(Z,0),tt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment);let Ci=G.getParameter(G.UNPACK_ROW_LENGTH),bt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ii=G.getParameter(G.UNPACK_SKIP_PIXELS),ur=G.getParameter(G.UNPACK_SKIP_ROWS),Nn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ot.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ot.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,je),G.pixelStorei(G.UNPACK_SKIP_ROWS,ot),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ct);let go=P.isDataArrayTexture||P.isData3DTexture,Bt=Z.isDataArrayTexture||Z.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let gi=Ne.get(P),xo=Ne.get(Z),Yn=Ne.get(gi.__renderTarget),ns=Ne.get(xo.__renderTarget);De.bindFramebuffer(G.READ_FRAMEBUFFER,Yn.__webglFramebuffer),De.bindFramebuffer(G.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let is=0;is<Je;is++)go&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ne.get(P).__webglTexture,Q,ct+is),P.isDepthTexture?(Bt&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ne.get(Z).__webglTexture,Q,Dt+is),G.blitFramebuffer(je,ot,Ue,qe,Qe,vt,Ue,qe,G.DEPTH_BUFFER_BIT,G.NEAREST)):Bt?G.copyTexSubImage3D(tt,Q,Qe,vt,Dt+is,je,ot,Ue,qe):G.copyTexSubImage2D(tt,Q,Qe,vt,Dt+is,je,ot,Ue,qe);De.bindFramebuffer(G.READ_FRAMEBUFFER,null),De.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Bt?P.isDataTexture||P.isData3DTexture?G.texSubImage3D(tt,Q,Qe,vt,Dt,Ue,qe,Je,Cn,Mt,Ot.data):Z.isCompressedArrayTexture?G.compressedTexSubImage3D(tt,Q,Qe,vt,Dt,Ue,qe,Je,Cn,Ot.data):G.texSubImage3D(tt,Q,Qe,vt,Dt,Ue,qe,Je,Cn,Mt,Ot):P.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Q,Qe,vt,Ue,qe,Cn,Mt,Ot.data):P.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Q,Qe,vt,Ot.width,Ot.height,Cn,Ot.data):G.texSubImage2D(G.TEXTURE_2D,Q,Qe,vt,Ue,qe,Cn,Mt,Ot);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ci),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,bt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ii),G.pixelStorei(G.UNPACK_SKIP_ROWS,ur),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Nn),Q===0&&Z.generateMipmaps&&G.generateMipmap(tt),De.unbindTexture()},this.copyTextureToTexture3D=function(P,Z,ae=null,ce=null,Q=0){return P.isTexture!==!0&&(Co("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,ce=arguments[1]||null,P=arguments[2],Z=arguments[3],Q=arguments[4]||0),Co('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,Z,ae,ce,Q)},this.initRenderTarget=function(P){Ne.get(P).__webglFramebuffer===void 0&&N.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?N.setTextureCube(P,0):P.isData3DTexture?N.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?N.setTexture2DArray(P,0):N.setTexture2D(P,0),De.unbindTexture()},this.resetState=function(){T=0,y=0,w=null,De.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}},$r=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ko=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Su,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new k,qs=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ho=class extends Tn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tr,bo=new k,wr=new k,Ar=new k,Rr=new Ke,So=new Ke,Pp=new et,La=new k,Eo=new k,Da=new k,Gd=new Ke,Ul=new Ke,Wd=new Ke,ic=class extends Ut{constructor(e=new Ho){if(super(),this.isSprite=!0,this.type="Sprite",Tr===void 0){Tr=new xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Zr(t,5);Tr.setIndex([0,1,2,0,2,3]),Tr.setAttribute("position",new qs(i,3,0,!1)),Tr.setAttribute("uv",new qs(i,2,3,!1))}this.geometry=Tr,this.material=e,this.center=new Ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wr.setFromMatrixScale(this.matrixWorld),Pp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ar.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wr.multiplyScalar(-Ar.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Na(La.set(-.5,-.5,0),Ar,o,wr,s,r),Na(Eo.set(.5,-.5,0),Ar,o,wr,s,r),Na(Da.set(.5,.5,0),Ar,o,wr,s,r),Gd.set(0,0),Ul.set(1,0),Wd.set(1,1);let a=e.ray.intersectTriangle(La,Eo,Da,!1,bo);if(a===null&&(Na(Eo.set(-.5,.5,0),Ar,o,wr,s,r),Ul.set(0,1),a=e.ray.intersectTriangle(La,Da,Eo,!1,bo),a===null))return;let c=e.ray.origin.distanceTo(bo);c<e.near||c>e.far||t.push({distance:c,point:bo.clone(),uv:hs.getInterpolation(bo,La,Eo,Da,Gd,Ul,Wd,new Ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Na(n,e,t,i,s,r){Rr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(So.x=r*Rr.x-s*Rr.y,So.y=s*Rr.x+r*Rr.y):So.copy(Rr),n.copy(e),n.x+=So.x,n.y+=So.y,n.applyMatrix4(Pp)}var Xd=new k,qd=new yt,Yd=new yt,$M=new k,$d=new et,Ua=new k,Fl=new On,Zd=new et,Ol=new Xr,sc=class extends at{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qf,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ua),this.boundingBox.expandByPoint(Ua)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ua),this.boundingSphere.expandByPoint(Ua)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fl.copy(this.boundingSphere),Fl.applyMatrix4(s),e.ray.intersectsSphere(Fl)!==!1&&(Zd.copy(s).invert(),Ol.copy(e.ray).applyMatrix4(Zd),!(this.boundingBox!==null&&Ol.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ol)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Eg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;qd.fromBufferAttribute(s.attributes.skinIndex,e),Yd.fromBufferAttribute(s.attributes.skinWeight,e),Xd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Yd.getComponent(r);if(o!==0){let a=qd.getComponent(r);$d.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector($M.copy(Xd).applyMatrix4($d),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Vo=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},rc=class extends on{constructor(e=null,t=1,i=1,s,r,o,a,c,l=rn,h=rn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kd=new et,ZM=new et,oc=class n{constructor(e=[],t=[]){this.uuid=ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new et;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:ZM;Kd.multiplyMatrices(a,t[r]),Kd.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new rc(t,e,e,Kn,li);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Vo),this.bones.push(o),this.boneInverses.push(new et().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},Ys=class extends mt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Cr=new et,Jd=new et,Fa=[],jd=new Jn,KM=new et,To=new at,wo=new On,_n=class extends at{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ys(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,KM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cr),jd.copy(e.boundingBox).applyMatrix4(Cr),this.boundingBox.union(jd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cr),wo.copy(e.boundingSphere).applyMatrix4(Cr),this.boundingSphere.union(wo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(To.geometry=this.geometry,To.material=this.material,To.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wo.copy(this.boundingSphere),wo.applyMatrix4(i),e.ray.intersectsSphere(wo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cr),Jd.multiplyMatrices(i,Cr),To.matrixWorld=Jd,To.raycast(e,Fa);for(let o=0,a=Fa.length;o<a;o++){let c=Fa[o];c.instanceId=r,c.object=this,t.push(c)}Fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ys(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new rc(new Float32Array(s*this.count),s,this.count,hh,li));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var gs=class extends Tn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ac=new k,cc=new k,Qd=new et,Ao=new Xr,Oa=new On,Bl=new k,ep=new k,Kr=class extends Ut{constructor(e=new xt,t=new gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ac.fromBufferAttribute(t,s-1),cc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ac.distanceTo(cc);e.setAttribute("lineDistance",new ht(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(s),Oa.radius+=r,e.ray.intersectsSphere(Oa)===!1)return;Qd.copy(s).invert(),Ao.copy(e.ray).applyMatrix4(Qd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){let p=h.getX(_),b=h.getX(_+1),v=Ba(this,e,Ao,c,p,b);v&&t.push(v)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(d),p=Ba(this,e,Ao,c,_,m);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){let p=Ba(this,e,Ao,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){let _=Ba(this,e,Ao,c,g-1,d);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ba(n,e,t,i,s,r){let o=n.geometry.attributes.position;if(ac.fromBufferAttribute(o,s),cc.fromBufferAttribute(o,r),t.distanceSqToSegment(ac,cc,Bl,ep)>i)return;Bl.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Bl);if(!(c<e.near||c>e.far))return{distance:c,point:ep.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var tp=new k,np=new k,$s=class extends Kr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)tp.fromBufferAttribute(t,s),np.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+tp.distanceTo(np);e.setAttribute("lineDistance",new ht(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},lc=class extends Kr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Zs=class extends Tn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ip=new et,ku=new Xr,za=new On,ka=new k,xs=class extends Ut{constructor(e=new xt,t=new Zs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),za.radius+=r,e.ray.intersectsSphere(za)===!1)return;ip.copy(s).invert(),ku.copy(e.ray).applyMatrix4(ip);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){let m=l.getX(g);ka.fromBufferAttribute(u,m),sp(ka,m,c,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)ka.fromBufferAttribute(u,g),sp(ka,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function sp(n,e,t,i,s,r,o){let a=ku.distanceSqToPoint(n);if(a<t){let c=new k;ku.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var fi=class extends on{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wn=class n extends xt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],m=i/2,p=0;b(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(d,2));function b(){let x=new k,E=new k,T=0,y=(t-e)/i;for(let w=0;w<=r;w++){let M=[],S=w/r,I=S*(t-e)+e;for(let B=0;B<=s;B++){let z=B/s,L=z*c+a,F=Math.sin(L),U=Math.cos(L);E.x=I*F,E.y=-S*i+m,E.z=I*U,u.push(E.x,E.y,E.z),x.set(F,y,U).normalize(),f.push(x.x,x.y,x.z),d.push(z,1-S),M.push(g++)}_.push(M)}for(let w=0;w<s;w++)for(let M=0;M<r;M++){let S=_[M][w],I=_[M+1][w],B=_[M+1][w+1],z=_[M][w+1];(e>0||M!==0)&&(h.push(S,I,z),T+=3),(t>0||M!==r-1)&&(h.push(I,B,z),T+=3)}l.addGroup(p,T,0),p+=T}function v(x){let E=g,T=new Ke,y=new k,w=0,M=x===!0?e:t,S=x===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;let I=g;for(let B=0;B<=s;B++){let L=B/s*c+a,F=Math.cos(L),U=Math.sin(L);y.x=M*U,y.y=m*S,y.z=M*F,u.push(y.x,y.y,y.z),f.push(0,S,0),T.x=F*.5+.5,T.y=U*.5*S+.5,d.push(T.x,T.y),g++}for(let B=0;B<s;B++){let z=E+B,L=I+B;x===!0?h.push(L,L+1,z):h.push(L+1,L,z),w+=3}l.addGroup(p,w,x===!0?1:2),p+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ks=class n extends wn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Hu=class n extends xt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let v=new k,x=new k,E=new k;for(let T=0;T<t.length;T+=3)d(t[T+0],v),d(t[T+1],x),d(t[T+2],E),c(v,x,E,b)}function c(b,v,x,E){let T=E+1,y=[];for(let w=0;w<=T;w++){y[w]=[];let M=b.clone().lerp(x,w/T),S=v.clone().lerp(x,w/T),I=T-w;for(let B=0;B<=I;B++)B===0&&w===T?y[w][B]=M:y[w][B]=M.clone().lerp(S,B/I)}for(let w=0;w<T;w++)for(let M=0;M<2*(T-w)-1;M++){let S=Math.floor(M/2);M%2===0?(f(y[w][S+1]),f(y[w+1][S]),f(y[w][S])):(f(y[w][S+1]),f(y[w+1][S+1]),f(y[w+1][S]))}}function l(b){let v=new k;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(b),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){let b=new k;for(let v=0;v<r.length;v+=3){b.x=r[v+0],b.y=r[v+1],b.z=r[v+2];let x=m(b)/2/Math.PI+.5,E=p(b)/Math.PI+.5;o.push(x,1-E)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){let v=o[b+0],x=o[b+2],E=o[b+4],T=Math.max(v,x,E),y=Math.min(v,x,E);T>.9&&y<.1&&(v<.2&&(o[b+0]+=1),x<.2&&(o[b+2]+=1),E<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,v){let x=b*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function g(){let b=new k,v=new k,x=new k,E=new k,T=new Ke,y=new Ke,w=new Ke;for(let M=0,S=0;M<r.length;M+=9,S+=6){b.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),T.set(o[S+0],o[S+1]),y.set(o[S+2],o[S+3]),w.set(o[S+4],o[S+5]),E.copy(b).add(v).add(x).divideScalar(3);let I=m(E);_(T,S+0,b,I),_(y,S+2,v,I),_(w,S+4,x,I)}}function _(b,v,x,E){E<0&&b.x===1&&(o[v]=b.x-1),x.x===0&&x.z===0&&(o[v]=E/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Js=class n extends Hu{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var _s=class n extends xt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new k,f=new k,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let b=[],v=p/i,x=0;p===0&&o===0?x=.5/t:p===i&&c===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){let T=E/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(T+x,1-v),b.push(l++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){let v=h[p][b+1],x=h[p][b],E=h[p+1][b],T=h[p+1][b+1];(p!==0||o>0)&&d.push(v,x,T),(p!==i-1||c<Math.PI)&&d.push(x,E,T)}this.setIndex(d),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var uc=class extends Et{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},it=class extends Tn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bn=class extends it{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Gi=class extends Tn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ha(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function JM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function jM(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function rp(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function Lp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var ys=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vu=class extends ys{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yf,endingEnd:Yf}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $f:r=e,a=2*t-i;break;case Zf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case $f:o=e,c=2*i-t;break;case Zf:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,b=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+b*o[l+E]+v*o[c+E]+x*o[u+E];return r}},Gu=class extends ys{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Wu=class extends ys{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},jn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ha(t,this.TimeBufferType),this.values=Ha(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ha(e.times,Array),values:Ha(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Wu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vr:t=this.InterpolantFactoryMethodDiscrete;break;case Gr:t=this.InterpolantFactoryMethodLinear;break;case cl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return Gr;case this.InterpolantFactoryMethodSmooth:return cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&JM(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===cl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Gr;var vs=class extends jn{constructor(e,t,i){super(e,t,i)}};vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Vr;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var hc=class extends jn{};hc.prototype.ValueTypeName="color";var Wi=class extends jn{};Wi.prototype.ValueTypeName="number";var Xu=class extends ys{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)en.slerpFlat(r,0,o,l-a,o,l,c);return r}},Xi=class extends jn{InterpolantFactoryMethodLinear(e){return new Xu(this.times,this.values,this.getValueSize(),e)}};Xi.prototype.ValueTypeName="quaternion";Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends jn{constructor(e,t,i){super(e,t,i)}};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Vr;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends jn{};qi.prototype.ValueTypeName="vector";var fc=class{constructor(e="",t=-1,i=[],s=Tg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=ui(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(e1(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(jn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=jM(c);c=rp(c,1,h),l=rp(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Wi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,f,d,g,_){if(d.length!==0){let m=[],p=[];Lp(d,m,p,g),m.length!==0&&_.push(new u(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(let _ in d){let m=[],p=[];for(let b=0;b!==f[g].morphTargets.length;++b){let v=f[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}s.push(new Wi(".morphTargetInfluence["+_+"]",m,p))}c=d.length*o}else{let d=".bones["+t[u].name+"]";i(qi,d+".position",f,"pos",s),i(Xi,d+".quaternion",f,"rot",s),i(qi,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function QM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wi;case"vector":case"vector2":case"vector3":case"vector4":return qi;case"color":return hc;case"quaternion":return Xi;case"bool":case"boolean":return vs;case"string":return Ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function e1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=QM(n.type);if(n.times===void 0){let t=[],i=[];Lp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var fs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},qu=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},t1=new qu,Yi=class{constructor(e){this.manager=e!==void 0?e:t1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Yi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ui={},Yu=class extends Error{constructor(e,t){super(e),this.response=t}},Go=class extends Yi{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=fs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ui[e]!==void 0){Ui[e].push({onLoad:t,onProgress:i,onError:s});return}Ui[e]=[],Ui[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ui[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,_=0,m=new ReadableStream({start(p){b();function b(){u.read().then(({done:v,value:x})=>{if(v)p.close();else{_+=x.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let T=0,y=h.length;T<y;T++){let w=h[T];w.onProgress&&w.onProgress(E)}p.enqueue(x),b()}},v=>{p.error(v)})}}});return new Response(m)}else throw new Yu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{fs.add(e,l);let h=Ui[e];delete Ui[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=Ui[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ui[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var $u=class extends Yi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=fs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Bo("img");function c(){h(),fs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var dc=class extends Yi{constructor(e){super(e)}load(e,t,i,s){let r=new on,o=new $u(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Jr=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},jr=class extends Jr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},zl=new et,op=new k,ap=new k,Wo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zo,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;op.setFromMatrixPosition(e.matrixWorld),t.position.copy(op),ap.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ap),t.updateMatrixWorld(),zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zu=class extends Wo{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Wr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Qr=class extends Jr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Zu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},cp=new et,Ro=new k,kl=new k,Ku=class extends Wo{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ro.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ro),kl.copy(i.position),kl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(kl),i.updateMatrixWorld(),s.makeTranslation(-Ro.x,-Ro.y,-Ro.z),cp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cp)}},pc=class extends Jr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ku}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ju=class extends Wo{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vi=class extends Jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Ju}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var bs=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var mc=class extends Yi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=fs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return fs.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),fs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});fs.add(e,c),r.manager.itemStart(e)}};var gc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=lp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function lp(){return performance.now()}var _h="\\[\\]\\.:\\/",n1=new RegExp("["+_h+"]","g"),yh="[^"+_h+"]",i1="[^"+_h.replace("\\.","")+"]",s1=/((?:WC+[\/:])*)/.source.replace("WC",yh),r1=/(WCOD+)?/.source.replace("WCOD",i1),o1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yh),a1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yh),c1=new RegExp("^"+s1+r1+o1+a1+"$"),l1=["material","materials","bones","map"],ju=class{constructor(e,t,i){let s=i||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Nt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(n1,"")}static parseTrackName(e){let t=c1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);l1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=ju;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var JE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Yo=class n extends at{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Yt;let i=this,s=t.color!==void 0?new Re(t.color):new Re(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,c=t.shader||n.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,h=new ai,u=new k,f=new k,d=new k,g=new et,_=new k(0,0,-1),m=new yt,p=new k,b=new k,v=new yt,x=new et,E=this.camera,T=new Qt(r,o,{samples:l,type:An}),y=new Et({name:c.name!==void 0?c.name:"unspecified",uniforms:bi.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});y.uniforms.tDiffuse.value=T.texture,y.uniforms.color.value=s,y.uniforms.textureMatrix.value=x,this.material=y,this.onBeforeRender=function(w,M,S){if(f.setFromMatrixPosition(i.matrixWorld),d.setFromMatrixPosition(S.matrixWorld),g.extractRotation(i.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),p.subVectors(f,d),p.dot(u)>0)return;p.reflect(u).negate(),p.add(f),g.extractRotation(S.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(d),b.subVectors(f,_),b.reflect(u).negate(),b.add(f),E.position.copy(p),E.up.set(0,1,0),E.up.applyMatrix4(g),E.up.reflect(u),E.lookAt(b),E.far=S.far,E.updateMatrixWorld(),E.projectionMatrix.copy(S.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(E.projectionMatrix),x.multiply(E.matrixWorldInverse),x.multiply(i.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(E.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let I=E.projectionMatrix;v.x=(Math.sign(m.x)+I.elements[8])/I.elements[0],v.y=(Math.sign(m.y)+I.elements[9])/I.elements[5],v.z=-1,v.w=(1+I.elements[10])/I.elements[14],m.multiplyScalar(2/m.dot(v)),I.elements[2]=m.x,I.elements[6]=m.y,I.elements[10]=m.z+1-a,I.elements[14]=m.w,i.visible=!1;let B=w.getRenderTarget(),z=w.xr.enabled,L=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(T),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(M,E),w.xr.enabled=z,w.shadowMap.autoUpdate=L,w.setRenderTarget(B);let F=S.viewport;F!==void 0&&w.state.viewport(F),i.visible=!0},this.getRenderTarget=function(){return T},this.dispose=function(){T.dispose(),i.material.dispose()}}};Yo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var bc=[25,18,15,12,10,8,6,4],js={maxSpeed:80,accel:26,brake:30,steerRate:1.7,steerHighSpeed:.75,grip:1,wetGrip:.78,driftBonus:1.6,airControl:.12,airStability:1,landing:1,boostPower:1.22,boostDuration:2.2,boostCharges:3,offroadDrag:1,wallLoss:.25,steerNoise:0,slipstream:1},Ei={sunset:{id:"sunset",name:"Fin d'apr\xE8s-midi",grip:1,wet:0,rain:0,wind:0,sheen:.9,skyTop:8825052,skyHorizon:15785172,fogColor:14074548,fogDensity:52e-5,sunColor:16756316,sunIntensity:4.6,sunDir:[-.5,.21,-.62],hemiSky:12899050,hemiGround:9399366,hemiIntensity:.8,seaColor:2786996,night:!1,bloom:.34},sicily:{id:"sicily",name:"Apr\xE8s-midi sicilien",grip:1,wet:0,rain:0,wind:.1,sheen:.2,skyTop:4885468,skyHorizon:13623792,fogColor:13425124,fogDensity:5e-4,sunColor:16773854,sunIntensity:3.3,sunDir:[-.45,.62,-.4],hemiSky:12375282,hemiGround:8156256,hemiIntensity:.85,seaColor:1994664,night:!1,bloom:.25},rain:{id:"rain",name:"Nuit pluvieuse",grip:.8,wet:1,rain:1,wind:.6,skyTop:329231,skyHorizon:1711933,fogColor:1317427,fogDensity:.0028,sunColor:7375103,sunIntensity:.7,sunDir:[.4,.7,.3],hemiSky:3820170,hemiGround:1052696,hemiIntensity:.75,seaColor:662067,night:!0,bloom:1},fog:{id:"fog",name:"Brume matinale",grip:.92,wet:.35,rain:0,wind:.2,skyTop:10467535,skyHorizon:15262418,fogColor:14277846,fogDensity:.0052,sunColor:16773328,sunIntensity:1.5,sunDir:[.5,.35,.5],hemiSky:13621734,hemiGround:7301722,hemiIntensity:1.1,seaColor:6262687,night:!1,bloom:.35}};function $o(n){let e=String(n),t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t^=t>>>15,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}function zn(n){let e=(typeof n=="number"?n>>>0:$o(n))||1,t=e,i=()=>{e=e+1831565813>>>0;let s=e;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};return{next:i,range:(s,r)=>s+(r-s)*i(),int:(s,r)=>s+Math.floor(i()*(r-s+1)),pick:s=>s[Math.floor(i()*s.length)],chance:s=>i()<s,sign:()=>i()<.5?-1:1,shuffle:s=>{let r=s.slice();for(let o=r.length-1;o>0;o--){let a=Math.floor(i()*(o+1));[r[o],r[a]]=[r[a],r[o]]}return r},fork:s=>zn($o(t+":"+s))}}var Sc=Math.PI*2,u1=2,Dp=2800,Np=4200,h1=34,Up=8,Fp=60,f1=.12,d1=.1,Op=28,p1=150,vh=52,Eh=.0025,Bp=1/150,m1=10,zp=5,kp=250,Hp=38,Vp=75,Ec=150,bh=120,qp=10,g1=80,x1=40,_1=20,y1=30,v1=95,Mh=18,Gp=22,M1=60,Sh=(n,e,t)=>n<e?e:n>t?t:n;function b1(n){let e=n.int(10,14),t=n.range(440,520),i=[];for(let s=0;s<e;s++){let r=n.range(-.3,.3)*(Sc/e),o=s/e*Sc+r,a=Sh(t*n.range(.62,1.25),380,620);i.push([a*Math.cos(o),a*Math.sin(o)])}return i}function S1(n,e,t,i,s,r,o,a,c){let l=(_,m,p,b)=>{let v=(c-p)/(b-p);return[_[0]+(m[0]-_[0])*v,_[1]+(m[1]-_[1])*v]},h=l(n,e,s,r),u=l(e,t,r,o),f=l(t,i,o,a),d=l(h,u,s,o),g=l(u,f,r,a);return l(d,g,r,o)}function E1(n,e){let t=n.length,i=[];for(let s=0;s<t;s++){let r=n[(s-1+t)%t],o=n[s],a=n[(s+1)%t],c=n[(s+2)%t],l=0,h=l+Math.sqrt(Math.hypot(o[0]-r[0],o[1]-r[1])),u=h+Math.sqrt(Math.hypot(a[0]-o[0],a[1]-o[1])),f=u+Math.sqrt(Math.hypot(c[0]-a[0],c[1]-a[1]));for(let d=0;d<e;d++){let g=h+(u-h)*(d/e);i.push(S1(r,o,a,c,l,h,u,f,g))}}return i}function T1(n){let e=n.length,t=new Float64Array(e+1);for(let l=0;l<e;l++){let h=n[l],u=n[(l+1)%e];t[l+1]=t[l]+Math.hypot(u[0]-h[0],u[1]-h[1])}let i=t[e],s=Math.max(1,Math.round(i/u1)),r=i/s,o=new Float64Array(s),a=new Float64Array(s),c=0;for(let l=0;l<s;l++){let h=l*r;for(;c<e-1&&t[c+1]<=h;)c++;let u=n[c],f=n[(c+1)%e],d=t[c+1]-t[c],g=d>0?(h-t[c])/d:0;o[l]=u[0]+(f[0]-u[0])*g,a[l]=u[1]+(f[1]-u[1])*g}return{xs:o,zs:a,count:s,step:r}}function Wp(n,e){let t=n.length,i=new Float64Array(t),s=2*e+1,r=0;for(let o=-e;o<=e;o++)r+=n[(o+t)%t];for(let o=0;o<t;o++)i[o]=r/s,r+=n[(o+1+e)%t]-n[((o-e)%t+t)%t];return i}function w1(n,e,t){let i=n.length,s=new Float64Array(i),r=new Float64Array(i);for(let a=0;a<i;a++){let c=(a-1+i)%i,l=(a+1)%i,h=n[l]-n[c],u=e[l]-e[c],f=Math.hypot(h,u)||1;s[a]=h/f,r[a]=u/f}let o=new Float64Array(i);for(let a=0;a<i;a++){let c=(a-1+i)%i,l=(a+1)%i,h=(s[l]-s[c])/(2*t),u=(r[l]-r[c])/(2*t);o[a]=s[a]*u-r[a]*h}return o}function A1(n,e){let t=n.length;for(let i=0;i<50;i++){let s=!1;for(let r=2*t-1;r>=0;r--){let o=r%t,a=(o+1)%t,c=Math.sqrt(n[a]*n[a]+2*x1*e);n[o]>c+1e-9&&(n[o]=c,s=!0)}for(let r=0;r<2*t;r++){let o=r%t,a=(o+1)%t,c=Math.sqrt(n[o]*n[o]+2*_1*e);n[a]>c+1e-9&&(n[a]=c,s=!0)}if(!s)break}}function Xp(n){let e=n.length,t=-1;for(let r=0;r<e;r++)if(n[r]!==n[(r-1+e)%e]){t=r;break}if(t<0)return n[0]!==0?[{start:0,len:e,key:n[0]}]:[];let i=[],s=null;for(let r=0;r<e;r++){let o=(t+r)%e,a=n[o];s&&a===s.key?s.len++:(s&&s.key!==0&&i.push(s),s={start:o,len:1,key:a})}return s&&s.key!==0&&i.push(s),i}function Yp(n,e){let t=n.length,i=0;for(let s=0;s<t;s++){let r=n[s].vmax,o=n[(s+1)%t].vmax;i+=e/Math.max(1,.5*(r+o))}return i}function Th(n,e){let t=n.length,i=0,s=0,r=new Int8Array(t),o=new Int8Array(t);for(let l=0;l<t;l++){let h=n[l].curv,u=Math.abs(h);u>i&&(i=u);let f=Math.abs(n[l].slope);f>s&&(s=f),r[l]=h>Bp?1:h<-Bp?-1:0,o[l]=u<Eh?1:0}let a=0;for(let l of Xp(r))l.len*e>=m1&&a++;let c={start:0,len:0};for(let l of Xp(o))l.key===1&&l.len>c.len&&(c=l);return{minRadius:i>0?1/i:1/0,maxSlope:s,corners:a,longestStraight:c.len*e,longestStraightStart:c.start}}function R1(n,e){let t=n.length,i=vh,s=(l,h)=>(l+4096)*8192+(h+4096),r=new Map,o=new Array(t);for(let l=0;l<t;l++){let h=Math.floor(n[l].x/i),u=Math.floor(n[l].z/i);o[l]=[h,u];let f=s(h,u),d=r.get(f);d||(d=[],r.set(f,d)),d.push(l)}let a=0,c=vh*vh;for(let l=0;l<t;l++){let[h,u]=o[l];for(let f=-1;f<=1;f++)for(let d=-1;d<=1;d++){let g=r.get(s(h+f,u+d));if(g)for(let _ of g){if(_<=l)continue;let m=Math.abs(l-_);if(Math.min(m,t-m)*e<=p1)continue;let b=n[l].x-n[_].x,v=n[l].z-n[_].z;b*b+v*v<c&&a++}}}return a}function C1(n){let e=b1(n),t=E1(e,160),{xs:i,zs:s,count:r,step:o}=T1(t),a=[[8,12],[4,7],[2,4],[1,2]],c=[1,2,4,7].map((y,w)=>({k:y,a:n.range(a[w][0],a[w][1]),p:n.range(0,Sc)})),l=new Float64Array(r),h=new Float64Array(r),u=new Float64Array(r);for(let y=0;y<r;y++){let w=(y-1+r)%r,M=(y+1)%r,S=i[M]-i[w],I=s[M]-s[w];u[y]=Math.hypot(S,I)||1e-9,l[y]=S/u[y],h[y]=I/u[y]}let f=new Float64Array(r),d=new Float64Array(r),g=1;for(let y=0;y<40;y++){for(let M=0;M<r;M++){let S=0;for(let I of c)S+=I.a*g*Math.sin(Sc*I.k*M/r+I.p);f[M]=h1+S}let w=0;for(let M=0;M<r;M++){let S=(M-1+r)%r,I=(M+1)%r;d[M]=(f[I]-f[S])/u[M],Math.abs(d[M])>w&&(w=Math.abs(d[M]))}if(w<=d1)break;g*=.9}let _=new Float64Array(r),m=new Float64Array(r),p=new Float64Array(r);for(let y=0;y<r;y++){let w=(y-1+r)%r,M=(y+1)%r,S=i[M]-i[w],I=f[M]-f[w],B=s[M]-s[w],z=Math.hypot(S,I,B)||1e-9;_[y]=S/z,m[y]=I/z,p[y]=B/z}let b=w1(i,s,o),v=Wp(b,2),x=new Float64Array(r);for(let y=0;y<r;y++){let w=Sh((Math.abs(v[y])-.016666666666666666)/.023333333333333334,0,1);x[y]=Mh+(Gp-Mh)*w}let E=Wp(x,10);for(let y=0;y<r;y++)E[y]=Sh(E[y],Mh,Gp);let T=new Float64Array(r);for(let y=0;y<r;y++)T[y]=Math.min(v1,Math.sqrt(y1/Math.max(Math.abs(v[y]),1e-9)));return A1(T,o),{xs:i,ys:f,zs:s,count:r,step:o,fx:l,fz:h,tx:_,ty:m,tz:p,slope:d,curv:v,width:E,vmax:T}}function I1(n){let{xs:e,ys:t,zs:i,count:s,step:r,fx:o,fz:a,tx:c,ty:l,tz:h,slope:u,curv:f,width:d,vmax:g}=n,_=[];for(let v=0;v<s;v++)_.push({curv:f[v],slope:u[v],vmax:g[v],x:e[v],z:i[v]});let m=Th(_,r),p=m.longestStraight>0?(m.longestStraightStart+Math.round(g1/r))%s:0,b=new Array(s);for(let v=0;v<s;v++){let x=(p+v)%s;b[v]={s:v*r,x:e[x],y:t[x],z:i[x],tx:c[x],ty:l[x],tz:h[x],rx:-a[x],rz:o[x],width:d[x],curv:f[x],vmax:g[x],slope:u[x]}}return b}function P1(n,e,t){let i=n.length,s=new Int32Array(i+1);for(let m=0;m<i;m++)s[m+1]=s[m]+(Math.abs(n[m].curv)>=Eh?1:0);let r=(m,p)=>s[p+1]-s[m]===0,o=Math.ceil(Ec/e),a=Math.floor((i*e-Ec)/e),c=Math.ceil(qp/e),l=[],h=[],u=(m,p)=>l.every(([b,v])=>p<b||m>v),f=(m,p,b,v)=>{for(let x=0;x<400;x++){let E=Math.round(t.range(m,p)/e),T=Math.ceil(b/e),y=E+T;if(a-y<o)return null;let w=t.int(o,a-y),M=w+E;if(v&&!r(w,M+T))continue;let S=w-c,I=M+T+c;if(!(S<0||I>i-1||!u(S,I)))return l.push([S,I]),{a:w,b:M}}return null},d=t.int(2,3);for(let m=0;m<d;m++){let p=f(12,16,bh,!0);p&&h.push({type:"ramp",s0:p.a*e,s1:p.b*e,height:t.range(1.2,2.2)})}let g=t.int(2,3);for(let m=0;m<g;m++){let p=f(10,10,0,!1);p&&h.push({type:"boost",s0:p.a*e,s1:p.b*e})}let _=t.int(1,2);for(let m=0;m<_;m++){let p=f(60,140,0,!1);p&&h.push({type:"tunnel",s0:p.a*e,s1:p.b*e})}return h.sort((m,p)=>m.s0-p.s0),h}function L1(n,e,t){let i=C1(n),s=I1(i),{count:r,step:o}=i,a=r*o,c=P1(s,o,n),l=Th(s,o),h=1/0,u=-1/0,f=1/0,d=-1/0;for(let g of s)g.x<h&&(h=g.x),g.x>u&&(u=g.x),g.z<f&&(f=g.z),g.z>d&&(d=g.z);return{seed:e,attempts:t,length:a,step:o,count:r,pts:s,features:c,bounds:{minX:h,maxX:u,minZ:f,maxZ:d},stats:{minRadius:l.minRadius,maxSlope:l.maxSlope,lapTimeEstimate:Yp(s,o),corners:l.corners}}}function D1(n){let e=[],{pts:t,count:i,step:s,length:r}=n;if(!Array.isArray(t)||t.length!==i||!(i>0)||!(s>0))return{ok:!1,reasons:["structure invalide"]};r>=Dp&&r<=Np||e.push(`longueur ${r.toFixed(0)} m hors [${Dp}, ${Np}]`),Math.abs(i*s-r)>1e-6&&e.push("count * step != length");let o=1/0,a=-1/0;for(let p of t)p.y<o&&(o=p.y),p.y>a&&(a=p.y);(o<Up||a>Fp)&&e.push(`altitude ${o.toFixed(1)}..${a.toFixed(1)} hors [${Up}, ${Fp}]`);let c=Th(t,s);c.minRadius>=Op||e.push(`rayon min ${c.minRadius.toFixed(1)} m < ${Op}`),c.maxSlope>f1&&e.push(`pente max ${(c.maxSlope*100).toFixed(1)} % > 12 %`),c.corners<zp&&e.push(`${c.corners} virages < ${zp}`),c.longestStraight<kp&&e.push(`ligne droite max ${c.longestStraight.toFixed(0)} m < ${kp}`);let l=R1(t,s);l>0&&e.push(`${l} paires d'\xE9chantillons trop proches (croisement ou rapprochement)`);let h=Yp(t,s);h>=Hp&&h<=Vp||e.push(`temps au tour ${h.toFixed(1)} s hors [${Hp}, ${Vp}]`);let u=n.features||[],f=u.filter(p=>p.type==="ramp").length,d=u.filter(p=>p.type==="boost").length,g=u.filter(p=>p.type==="tunnel").length;f<2&&e.push(`${f} tremplin(s) < 2`),d<2&&e.push(`${d} boost(s) < 2`),g<1&&e.push("aucun tunnel");let _=p=>Math.round((p%r+r)%r/s)%i;for(let p of u)if((p.s0<Ec||p.s1>r-Ec)&&e.push(`feature ${p.type} trop proche du d\xE9part`),p.type==="ramp"){let b=p.s1-p.s0;(b<11.5||b>16.5)&&e.push(`tremplin de ${b.toFixed(1)} m hors 12..16`),p.height>=1.2&&p.height<=2.2||e.push("hauteur de tremplin hors 1.2..2.2");let v=_(p.s0),x=_(p.s1+bh),E=!0;for(let T=v;T!==(x+1)%i;T=(T+1)%i)if(Math.abs(t[T].curv)>=Eh){E=!1;break}E||e.push("tremplin non situ\xE9 sur une ligne droite avec r\xE9ception")}let m=u.slice().sort((p,b)=>p.s0-b.s0);for(let p=0;p+1<m.length;p++){let b=m[p],v=m[p+1],x=b.s1+(b.type==="ramp"?bh:0);v.s0<x+qp-1e-6&&e.push(`features ${b.type} et ${v.type} se chevauchent`)}return{ok:e.length===0,reasons:e}}function $p(n,e={}){let t=e.maxAttempts??M1,i=zn(n),s=null,r=1/0;for(let o=0;o<t;o++){let a=i.fork("try"+o),c=L1(a,n,o+1),l=D1(c);if(l.ok)return c;l.reasons.length<r&&(r=l.reasons.length,s=c)}return s.attempts=t,s}function wh(n,e){let t=n.length;if(n.open)return e<0?0:Math.min(e,(n.count-1.001)*n.step);let i=e%t;return i<0&&(i+=t),i>=t&&(i-=t),i}var N1=(n,e)=>{let t=Math.hypot(n,e)||1;return[n/t,e/t]};function Zi(n,e,t={}){let i=n.count,s=n.step,r=wh(n,e),o=r/s,a=Math.floor(o),c=a%i,l=(c+1)%i,h=o-a,u=n.pts[c],f=n.pts[l],d=(x,E)=>x+(E-x)*h,g=d(u.tx,f.tx),_=d(u.ty,f.ty),m=d(u.tz,f.tz),p=Math.hypot(g,_,m)||1,[b,v]=N1(d(u.rx,f.rx),d(u.rz,f.rz));if(t.s=r,t.x=d(u.x,f.x),t.y=d(u.y,f.y),t.z=d(u.z,f.z),n.open&&e!==r){let x=e-r;t.x+=g/p*x,t.z+=m/p*x}return t.tx=g/p,t.ty=_/p,t.tz=m/p,t.rx=b,t.rz=v,t.width=d(u.width,f.width),t.curv=d(u.curv,f.curv),t.vmax=d(u.vmax,f.vmax),t.slope=d(u.slope,f.slope),t.i=c,t}var $i={};function Ft(n,e,t,i={}){return Zi(n,e,$i),i.x=$i.x+t*$i.rx,i.y=$i.y,i.z=$i.z+t*$i.rz,i.heading=Math.atan2($i.tx,$i.tz),i.slope=$i.slope,i}function Zp(n,e){let t=wh(n,e);for(let i of n.features)if(i.type==="ramp"&&t>=i.s0&&t<i.s1)return i.height*(t-i.s0)/(i.s1-i.s0);return 0}function Ss(n,e,t){let i=wh(n,e);for(let s of n.features)if((t===void 0||s.type===t)&&i>=s.s0&&i<=s.s1)return s;return null}var O1=1/30,Kp=.5,Jp=.4,B1=.6,Zo=[.2,.36,.52,.68,.84],jp=Zo.length+1,z1=.2,k1=.1,H1=.34,V1=4,G1=4,W1=.2,X1=4.9,q1=5.5,Y1=5,$1=6,Z1=1.8,K1=.03,J1=1.6,j1=.5,Q1=2,eb=.785,tb=4.7,nb=2.5,to=.196,ib=.098,sb=.5,rb=.27,ob=16,ab=11,cb=.72,lb=5,ub=.5,Qp=.35,hb=.42,fb=60,db=.3,pb=5,mb=1.6,gb=3,xb=14,_b=.004,yb=1.2,vb=2,Mb=.5,bb=22,em=.25,Sb=6,Eb=1.8,tm=1,Tb=["s","d","yaw","vdir","speed","yRel","vy","lean","steer","pitch","compress","drift","boostT","wheelSpin","stun","rpm","wheelie","_g","_vyG","_shiftT","_t","_pitchF","_dive","_turnF","_springA","_springP","_wallT","_apex"],qt=(n,e,t)=>n<e?e:n>t?t:n,Ti=(n,e=0)=>Number.isFinite(n)?n:e,wb=(n,e)=>{let t=n%e;return t<0?t+e:t},Ab=(n,e,t)=>n<e?Math.min(e,n+t):Math.max(e,n-t);function nm({s:n=0,d:e=0}={}){return{s:n,d:e,yaw:0,vdir:0,speed:0,yRel:0,vy:0,airborne:!1,lean:0,steer:0,pitch:0,compress:0,drift:0,boostT:0,boostCharges:js.boostCharges,onRoad:!0,wheelSpin:0,stun:0,gear:1,rpm:0,wheelie:0,events:[],_init:!1,_g:0,_vyG:0,_prevBoost:!1,_padKey:null,_shiftT:0,_wallHit:!1,_t:0,_turnF:0,_pitchF:0,_dive:0,_springA:0,_springP:0,_wallT:0,_apex:0}}function im(n,e,t,i,s,r,o){let a=n.events,c=e||{},l=s||{},h=!!c.boost&&!n._prevBoost;if(n._prevBoost=!!c.boost,r=Number.isFinite(r)&&r>0?Math.min(r,O1):0,n._init||(n._init=!0,n.boostCharges=i.boostCharges),r===0)return n;let u=t.length,f=i.maxSpeed,d=qt(Ti(c.throttle),0,1),g=qt(Ti(c.brake),0,1),_=qt(Ti(c.steer),-1,1),m=n.stun>0;m&&(n.stun=Math.max(0,n.stun-r),d=0,g=0,_=0);let p=Ge=>t.open?Ge:wb(Ge,u),b=p(n.s),v=Zi(t,b),x=!n.airborne;if(h&&!m&&n.boostCharges>0&&n.boostT<=0&&(n.boostCharges-=1,n.boostT=i.boostDuration,a.push("boost")),x){let Ge=Ss(t,b,"boost");if(Ge){let Se=Math.floor(n.s/u)+":"+Ge.s0;n._padKey!==Se&&(n._padKey=Se,n.boostT=Math.max(n.boostT,yb),a.push("pad"))}}g>.5&&n.boostT>0&&(n.boostT=0);let E=n.boostT>0;E&&(d=1);let T=x&&!m&&Math.abs(_)>.3&&n.speed>vb&&(!!c.drift||g>.3),y=n.speed,w=y/f;n._shiftT>0?n._shiftT-=r:n.gear<jp&&w>Zo[n.gear-1]&&!(g>0&&y>3)?(n.gear+=1,n._shiftT=z1):n.gear>1&&y<Zo[n.gear-2]*f-2&&(n.gear-=1,n._shiftT=k1);let M=n.gear>1?Zo[n.gear-2]:0,S=n.gear<jp?Zo[n.gear-1]:1;n.rpm=qt(.35+.65*((w-M)/(S-M)),.1,1.05);let I=x&&Math.abs(n.d)>v.width*.5,B=B1*f,z=I?B:f*(E?i.boostPower:1),L=V1/(f*f),F=0;if(x){if(I&&y>B&&(F-=2*i.offroadDrag*(y-B)),d>0&&n._shiftT<=0&&y<z){let Ge=H1*f,Se=.8+.2*Math.sin(Math.PI*qt(n.rpm,0,1)),J=i.accel*d*Se*Math.min(1,Ge/Math.max(y,1));E&&(J*=Q1),F+=Math.min(J,i.accel*1.15*(E?1.3:1))}g>0&&(F-=i.brake*g*(T?.35:1)),F-=y*(.2-.03*(n.gear-1))*(1-d),F-=W1,F-=X1*v.slope,F-=L*y*y}else F-=L*G1*y*y;n.speed=Math.max(0,y+F*r),x&&n.speed>z&&!I&&(n.speed=Math.max(z,n.speed-10*r));let U=qt(n.speed/f,0,1),Y=1+(i.wetGrip-1)*Rb(l),H=qt(i.grip*Ti(l.grip,1)*Y,.05,1.5),ne=n.speed<.6?0:_,me=Math.abs(ne)>Math.abs(n.steer)||ne*n.steer<0?q1:Y1*qt(Math.abs(F)/6,1,2.5);n.steer=Ab(n.steer,ne,me*r);let be=n.yaw-n.vdir,le=n.speed*Math.sin(be),te=Math.min(J1,1+K1*Math.abs(le));T&&(te=i.driftBonus),E&&x&&(te*=j1);let $=1-(1-i.steerHighSpeed)*U,se=Math.min(1,n.speed/6),C=x?1:i.airControl,X=n.steer*i.steerRate*$*te*se*C*(.6+.4*Math.min(1,H)),q=Math.min(n.speed/pb,fb*Math.min(1.2,H)*(T?1.5:1)/Math.max(n.speed,1)),ee=qt(X,-q,q);x&&Math.abs(_)<=.15&&(n.yaw*=Math.exp(-mb*r)),o&&i.steerNoise>0&&!m&&x&&(n.yaw+=i.steerNoise*d*(o.next()*2-1)*r);let pe=Math.max(.3,1-n.d*v.curv),Te=n.speed*Math.cos(n.vdir)/pe*r,Ie=n.speed*Math.sin(n.vdir)*r,G=v.curv*Te,Ve=n.vdir,ke=G*(x?1-db:1);if(n.yaw+=ee*r-ke,n.vdir-=ke,x){let Ge=(T?Z1:$1)*H,Se=1-Math.exp(-Ge*r);n.vdir+=(n.yaw-n.vdir)*Se,n.speed*=1-(1-Math.cos(be))*Se}else{let Ge=3*qt(i.airStability,0,2);n.yaw+=(n.vdir-n.yaw)*(1-Math.exp(-Ge*r)),i.airStability<1&&(n.yaw+=(n.yaw>=n.vdir?1:-1)*(1-i.airStability)*.6*r)}n.vdir=qt(Ti(n.vdir),-Kp,Kp),n.yaw=qt(Ti(n.yaw),n.vdir-Jp,n.vdir+Jp),n._t+=r,Ie+=Ti(l.wind)*(1.2*Math.sin(n._t*.37)+.4*Math.sin(n._t*1.13+1))*r*(x?1:.5),n.s+=Te,n.d+=Ie;let ze=x?qt((Math.abs(n.yaw-n.vdir)-.04)/.22,0,1)*se:0;n.drift+=(ze-n.drift)*Math.min(1,8*r);let De=Zi(t,p(n.s));n.onRoad=Math.abs(n.d)<=De.width*.5;let Ye=De.width*.5+6-.4;if(Math.abs(n.d)>=Ye-.02){let Ge=n.d>=0?1:-1,Se=n.vdir*Ge>0,J=Se?Math.abs(Math.sin(n.vdir)):0;if(n.d=Ge*Ye,Se&&(n.vdir=-Ge*.04,n.yaw=n.yaw*.4-Ge*.04),n._wallHit)n.speed*=Math.max(0,1-.8*r);else{let Me=n.boostT>0,ve=o?o.next():1;Me&&n.speed>Sb||J>Mb&&n.speed>bb&&ve<em||n.airborne&&ve<em?(n.speed*=.3,n.stun=Eb,a.push("crash")):n.speed*=1-qt(i.wallLoss*1.3*(.5+J),0,.9),a.push("wall")}n.boostT=0,n._wallT=Qp,n._wallHit=!0}else n._wallHit=!1;n.stun>0&&x&&(n.speed*=Math.exp(-2.2*r)),b=p(n.s);let Ne=Ti(Zp(t,b)),N=(Ne-n._g)/r;if(n.airborne||(Ne<n.yRel-.05?(n.airborne=!0,n._apex=n.yRel-Ne,n.vy=n._vyG,n.vy>gb&&a.push("jump")):(n.yRel=Ne,n.vy=qt(N,-80,80),n._vyG=n.vy)),n.airborne&&(n.vy-=26*r,n.yRel+=n.vy*r,n._apex=Math.max(n._apex,n.yRel-Ne),n.vy<=0&&n.yRel<=Ne)){let Ge=-n.vy,Se=Math.abs(n.yaw-n.vdir),J=Ge>xb/Math.max(.3,i.landing)||Se>.35;n.airborne=!1,n.yRel=Ne,n.vy=0,n._vyG=0,n._springA=qt(n._springA+.35*n._apex+.03*Ge,0,1),n._springP=Math.PI/2;let Me=_b*Ge+(J?.08:0);n.speed*=1-qt(Me/Math.max(.2,i.landing),0,.45),a.push(J?"hardLand":"land")}n._g=Ne,x=!n.airborne,n.speed=qt(Ti(n.speed),0,1.5*f),n._wallT=Math.max(0,n._wallT-r);let A=Math.max(0,1-n.speed/4,n._wallT/Qp),j=x?(G+(n.vdir-Ve))/r:0;n._turnF+=(j-n._turnF)*Math.min(1,6*r);let xe=n.speed*n._turnF,_e=Math.sign(xe)*Math.max(0,Math.abs(xe)-lb),fe=n.steer*hb*Math.min(1,n.speed/10),Ce=qt((1-A)*(Math.atan(_e/ab)*cb+ub*(n.yaw-n.vdir)+fe),-tm,tm);n.stun>0&&(Ce=(n.lean>=0?1:-1)*1.35),n.lean+=(Ce-n.lean)*Math.min(1,9*r),n._dive=g>.1&&x?Math.min(to,n._dive+to*r):Math.max(0,n._dive-.25*r);let Fe=qt(F*ib,-to,to)-n._dive;n._pitchF+=(Fe-n._pitchF)*Math.min(1,r/sb);let Oe=qt(Fe-n._pitchF,-to,to);n.wheelie=n.boostT>0&&x?Math.min(Math.PI/2,n.wheelie+tb*r):Math.max(0,n.wheelie-nb*r),Oe+=Math.sin(n.wheelie)*eb,x||(Oe=Math.atan2(n.vy,Math.max(8,n.speed))),n.pitch=Oe,n._springA*=Math.exp(-r/rb),n._springP+=ob*r,n.compress=Math.sin(n._springP)*n._springA,n.wheelSpin+=n.speed/.32*r,n.boostT=Math.max(0,n.boostT-r);for(let Ge of Tb)Number.isFinite(n[Ge])||(n[Ge]=0);return n.speed<0&&(n.speed=0),n}function Rb(n){return qt(Ti(n.wet),0,1)}var Cb=8,Ib=25,Pb=150,Lb=3,Db=35,Nb=2,Ub=14,Fb=30,Ob=12,Bb=2,zb={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},cn=(n,e,t)=>n<e?e:n>t?t:n,Tc=(n,e,t)=>n+(e-n)*t,kb=(n,e)=>n-e*Math.round(n/e);function Hb(n,e){let t=n.length,i=n.features,s=null,r=1/0;for(let o=0;o<i.length;o++){let a=i[o];if(a.type!=="ramp")continue;let c=((a.s0-e)%t+t)%t;c<r&&(r=c,s=a)}return s?{f:s,dist:r}:null}function Vb(n,e){for(let t=0;t<=Pb;t+=Ib)if(Math.abs(Zi(n,e+t).curv)>.004)return!1;return!0}function wc(n,e){let t=n||zb,i={persona:t,rng:e,skill:cn(t.skill??.5,0,1),aggression:cn(t.aggression??.5,0,1),jumpSkill:cn(t.jumpSkill??.5,0,1),lineSkill:cn(t.lineSkill??.5,0,1),playerGap:0,dGoal:0,wander:0,wanderGoal:0,wanderT:0,mistakeT:0,mistakeSide:1,nextMistake:0,boostLock:0,input:{throttle:0,brake:0,steer:0,boost:!1,drift:!1}};return i.nextMistake=e.range(8,20)+(1-i.skill)*15,i}function Ac(n,e,t,i,s,r){let o=n.input,a=t.length,c=n.rng,l=n.aggression,h=n.skill,u=n.jumpSkill,f=e.speed,d=e.s,g=Zi(t,d),_=Math.max(.8,g.width*.5-1.2);n.wanderT-=r,n.wanderT<=0&&(n.wanderT=c.range(.9,1.8),n.wanderGoal=c.range(-1,1)*(1-n.lineSkill)*.5*_),n.wander+=(n.wanderGoal-n.wander)*Math.min(1,r*1.5),n.nextMistake-=r,n.mistakeT-=r,n.mistakeT<=0&&n.nextMistake<=0&&(n.mistakeT=c.range(.5,1.2),n.mistakeSide=c.sign(),n.nextMistake=c.range(8,20)+(1-h)*15);let m=n.mistakeT>0;n.boostLock-=r;let p=Tc(1.4,.6,l),b=Math.max(20,f*p),v=Math.max(b,cn(f*1.6+20,40,110)),x=1/0,E=0,T=0,y=0;for(let $=0;$<=v;$+=Cb){let se=$===0?g:Zi(t,d+$);if($<=b&&se.vmax<x&&(x=se.vmax),$>=8){let C=Math.abs(se.curv);C>E&&(E=C,T=Math.sign(se.curv),y=$)}}let w=cn(E/.02,0,1),M=0;if(T!==0&&w>0){let $=cn((y-10)/30,0,1),se=Tc(1,-.8,$);M=T*_*n.lineSkill*w*se}M+=n.wander,m&&(M+=n.mistakeSide*1.2);let S=Hb(t,d),I=S?S.dist:1/0,B=Ss(t,d,"ramp")!==null,z=I<Fb;(B||z)&&u>.5&&(M*=1-cn((u-.4)/.6,0,1));let L=!B&&I>=Lb&&I<=Db&&u<.5;for(let $=0;$<s.length;$++){let se=s[$];if(se===e)continue;let C=kb(se.s-d,a);if(C<=0||C>=Ob)continue;let X=se.d-e.d;if(!(Math.abs(X)>=Bb)){if(l>.55){let q=X!==0?Math.sign(X):e.d<0?1:-1;M+=q*(.6+.8*l)}else{let q=X!==0?-Math.sign(X):e.d<0?1:-1;Math.abs(e.d+q*2)>_&&(q=-q),M+=q*2*(1-l)}break}}M=cn(M,-_,_),n.dGoal+=(M-n.dGoal)*Math.min(1,r*2.5);let F=cn(n.dGoal,-_,_),U;if(e.airborne)U=cn(-e.yaw*2,-.3,.3);else{let $=F-e.d,se=cn($*.12,-.25,.25),C=Zi(t,d+cn(f*.25,4,20)).curv,X=i.steerRate*Tc(1,i.steerHighSpeed,cn(f/i.maxSpeed,0,1));U=(C*f+(se-e.yaw)*3)/X}U=cn(U,-1,1),Number.isFinite(U)||(U=0);let Y=cn(-n.playerGap/150,-1,1)*.06,H=Tc(.86,1,h)+l*.04;m&&(H*=.85);let ne=x*H*(1+Y),ue=i.maxSpeed,me=!1;if(!e.airborne&&e.boostCharges>0&&e.boostT<=0&&n.boostLock<=0){if(u>.6&&I>=Nb&&I<=Ub)me=!0;else if(f>20&&Vb(t,d)){let $=n.playerGap<-20,se=.25+.5*l+($?.3:0);me=c.chance(se)}n.boostLock=me?1:.4}o.boost=me;let be=E<.003;if(e.boostT>0){let $=ue*i.boostPower;ne=be?$*.98:Math.min(ne,$)}else ne=Math.min(ne,ue);let le=0,te=0;if(e.airborne)le=1;else{let $=ne-f;$>-1.5?le=L?0:cn(.5+$*.25,0,1):te=cn((-$-1.5)*.15,0,1)}return o.throttle=le,o.brake=te,o.steer=U,o.drift=!e.airborne&&l>.75&&E>.025&&f>40&&y<20,o}var Gb=7,Wb=3,Xb=.3,qb=3,Yb=25,$b=1.5,Zb=1.2,Kb=1.8,sm=.9,Jb={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},Rc=(n,e,t)=>n<e?e:n>t?t:n,Ah=(n,e)=>n-e*Math.round(n/e);function Rh(){return{throttle:0,brake:0,steer:0,boost:!1,drift:!1}}function rm({track:n,laps:e,env:t,rng:i,riders:s,final:r=!0,carry:o=null}){let a=n.length,c=n.raceEnd??a,l=e*c,u=s.filter(E=>!E.isPlayer).concat(s.filter(E=>E.isPlayer)).map((E,T)=>{let y=Math.floor(T/2),w=T%2,M=-Gb*(y+1),S=w===0?-2.5:2.5,I=o?.states.get(E.id),B=I||nm({s:M,d:S});return{id:E.id,name:E.name,color:E.color,accent:E.accent,isPlayer:!!E.isPlayer,stats:E.stats,persona:E.persona||null,state:B,ai:E.isPlayer?null:wc(E.persona||Jb,i.fork("ai:"+E.id)),rng:i.fork("rider:"+E.id),others:null,input:Rh(),coast:Rh(),frameEvents:[],startS:I?I.s:M,lap:1,lapTimes:[],bestLap:null,lapStartT:0,finished:!1,finishTime:null,position:T+1}});for(let E of u)E.others=u.filter(T=>T!==E).map(T=>T.state);let f=u.find(E=>E.isPlayer)||null,d=u.slice(),g=u.length,_=new Uint8Array(g*g);function m(E,T,y,w,M){if(y===T)return;let S=Math.floor(T/c),I=Math.min(Math.floor(y/c),e);for(let B=Math.max(S+1,1);B<=I;B++){let z=Rc((B*c-T)/(y-T),0,1),L=w+z*M,F=L-E.lapStartT;E.lapTimes.push(F),(E.bestLap===null||F<E.bestLap)&&(E.bestLap=F),E.lapStartT=L}if(r&&y>=l){let B=Rc((l-T)/(y-T),0,1);E.finished=!0,E.finishTime=w+B*M}}function p(E){let T=E.state,y=E.coast;return y.throttle=Xb,y.brake=0,y.steer=Rc(-T.yaw*2-T.d*.05,-.5,.5),y.boost=!1,y.drift=!1,y}function b(E,T){let y=E.state;for(let w=0;w<g;w++){let M=u[w];if(M===E)continue;let S=Ah(M.state.s-y.s,a);if(S>qb&&S<Yb&&Math.abs(M.state.d-y.d)<$b){y.speed=Math.min(y.speed+Zb*E.stats.slipstream*T,E.stats.maxSpeed*1.05);return}}}function v(){for(let E=0;E<g;E++)for(let T=E+1;T<g;T++){let y=u[E],w=u[T],M=Ah(w.state.s-y.state.s,a),S=w.state.d-y.state.d,I=E*g+T;if(Math.abs(M)<Kb&&Math.abs(S)<sm){let B=S!==0?Math.sign(S):i.sign(),z=(sm-Math.abs(S))/2+.05;if(y.state.d-=B*z,w.state.d+=B*z,!_[I]){_[I]=1;let L=(y.state.speed+w.state.speed)/2;y.state.speed+=(L-y.state.speed)*.2,w.state.speed+=(L-w.state.speed)*.2;let F=M>=0?y:w;F.state.speed*=.96}}else _[I]=0}}let x={phase:o?"racing":"countdown",countdown:o?0:Wb,time:o?o.time:0,final:r,laps:e,track:n,riders:u,player:f,update(E,T){if(x.phase==="countdown"){x.countdown=Math.max(0,x.countdown-E),x.countdown<=0&&(x.phase="racing");return}let y=x.time;x.time+=E;for(let w=0;w<g;w++){let M=u[w];M.finished?M.input=p(M):M.isPlayer?M.input=T||Rh():(f&&(M.ai.playerGap=Ah(M.state.s-f.state.s,a)),M.input=Ac(M.ai,M.state,n,M.stats,M.others,E))}for(let w=0;w<g;w++){let M=u[w],S=M.state,I=M.finished,B=S.s;if(im(S,M.input,n,M.stats,t,E,M.rng),I||(m(M,B,S.s,y,E),M.finished||b(M,E)),M.lap=M.finished?e:Rc(Math.floor(S.s/c)+1,1,e),!M.isPlayer){M.frameEvents.length=0;for(let z=0;z<S.events.length;z++)M.frameEvents.push(S.events[z]);S.events.length=0}}v(),d.sort((w,M)=>w.finished!==M.finished?w.finished?-1:1:w.finished?w.finishTime-M.finishTime:M.state.s-w.state.s);for(let w=0;w<g;w++)d[w].position=w+1;r?(f?f.finished:u.every(w=>w.finished))&&(x.phase="finished"):(f||d[0]).state.s>=c&&(x.phase="relay")},results(){let E=u.map(T=>{let y;if(T.finished)y=T.finishTime;else{let w=Math.max(0,T.state.s-T.startS),M=x.time>1?Math.max(5,w/x.time):40,S=Math.max(0,l-T.state.s);y=x.time+S/M}return{id:T.id,name:T.name,position:T.position,time:y,bestLap:T.bestLap,isPlayer:T.isPlayer}});return E.sort((T,y)=>T.position-y.position),E}};return x}var Uh={};tg(Uh,{PLAYER:()=>wi,RIVALS:()=>Ic,UPGRADES:()=>Qs,applyUpgrade:()=>Nc,computeStats:()=>er,createRun:()=>Pc,dailySeed:()=>Uc,isRunOver:()=>Ko,loadMeta:()=>Lh,offerUpgrades:()=>Dc,randomSeed:()=>Qb,recordResult:()=>Ih,runRiders:()=>Lc,saveMeta:()=>Dh,standings:()=>no,updateMeta:()=>Nh});var om="polygon-rush-meta",jb=Object.keys(Ei).filter(n=>n!=="sicily"),wi={id:"player",name:"Vous",color:14885934,accent:2312392},Qs=[{id:"turbo",name:"Turbo instable",tagline:"Acc\xE9l\xE9ration brutale, pilotage nerveux.",pro:"Acc\xE9l\xE9ration \xD71,35 et vitesse de pointe \xD71,04.",con:"Direction bruit\xE9e (+0,35 rad/s) et braquage \xD70,9 \xE0 haute vitesse.",icon:"\u26A1",maxStacks:1,apply(n){n.accel*=1.35,n.maxSpeed*=1.04,n.steerNoise+=.35,n.steerHighSpeed*=.9}},{id:"rally",name:"Suspension rallye",tagline:"Les r\xE9ceptions passent mieux, la vitesse de pointe trinque.",pro:"R\xE9ception \xD71,8 et tra\xEEn\xE9e hors-piste \xD70,6.",con:"Vitesse de pointe \xD70,95.",icon:"\u{1F3D4}",maxStacks:2,apply(n){n.landing*=1.8,n.offroadDrag*=.6,n.maxSpeed*=.95}},{id:"aero",name:"A\xE9rodynamique",tagline:"Plus de vitesse, moins de tenue en l'air.",pro:"Vitesse de pointe \xD71,07.",con:"Stabilit\xE9 en saut \xD70,6 et contr\xF4le a\xE9rien \xD70,7.",icon:"\u{1F4A8}",maxStacks:2,apply(n){n.maxSpeed*=1.07,n.airStability*=.6,n.airControl*=.7}},{id:"rain",name:"Pneus pluie",tagline:"Accroche imbattable sous l'averse, sec moins mordant.",pro:"Adh\xE9rence mouill\xE9e \xD71,35 (\u2248 1,05).",con:"Adh\xE9rence s\xE8che \xD70,95.",icon:"\u{1F327}",maxStacks:1,apply(n){n.wetGrip*=1.35,n.grip*=.95}},{id:"nitro",name:"Nitro double",tagline:"Deux charges de plus, des boosts plus courts.",pro:"+2 charges de boost par course.",con:"Dur\xE9e de boost \xD70,75.",icon:"\u{1F680}",maxStacks:2,apply(n){n.boostCharges+=2,n.boostDuration*=.75}},{id:"brakes",name:"Freins c\xE9ramique",tagline:"Freinage mordant, direction plus vive, reprise plus lente.",pro:"Freinage \xD71,4 et braquage \xD71,08.",con:"Acc\xE9l\xE9ration \xD70,95.",icon:"\u{1F6D1}",maxStacks:2,apply(n){n.brake*=1.4,n.steerRate*=1.08,n.accel*=.95}},{id:"gyro",name:"Gyroscope",tagline:"Stabilisateur de vol, adh\xE9rence en retrait.",pro:"Contr\xF4le a\xE9rien \xD71,5 et stabilit\xE9 en l'air \xD71,25.",con:"Adh\xE9rence \xD70,9.",icon:"\u{1F300}",maxStacks:2,apply(n){n.airControl*=1.5,n.airStability*=1.25,n.grip*=.9}},{id:"slick",name:"Pneus slick",tagline:"Gomme tendre : accroche s\xE8che maximale, pluie interdite.",pro:"Adh\xE9rence s\xE8che \xD71,12.",con:"Adh\xE9rence mouill\xE9e \xD70,7 et braquage \xD70,95.",icon:"\u{1F3C1}",maxStacks:2,apply(n){n.grip*=1.12,n.wetGrip*=.7,n.steerRate*=.95}},{id:"carenage",name:"Car\xE9nage aspiration",tagline:"Profil fusel\xE9 : on file dans le sillage, on tourne moins vite.",pro:"Aspiration \xD71,6 dans le sillage des concurrents.",con:"Braquage \xD70,92.",icon:"\u{1F32C}",maxStacks:2,apply(n){n.slipstream*=1.6,n.steerRate*=.92}},{id:"blindage",name:"Blindage renforc\xE9",tagline:"Carrosserie en acier : les chocs co\xFBtent moins, la moto p\xE8se.",pro:"Perte de vitesse contre les glissi\xE8res \xD70,5.",con:"Acc\xE9l\xE9ration \xD70,92 et vitesse de pointe \xD70,97.",icon:"\u{1F6E1}",maxStacks:2,apply(n){n.wallLoss*=.5,n.accel*=.92,n.maxSpeed*=.97}}],Ic=[{id:"vortex",name:"Vortex Solenne",color:58879,accent:728366,skill:.8,aggression:.92,jumpSkill:.6,lineSkill:.5,style:"agressif",bio:"Freine tard, plonge dans les virages et ne l\xE2che jamais un pilote \xE0 la corde."},{id:"saltamonte",name:"Brigo Saltamonte",color:16766474,accent:1118481,skill:.76,aggression:.45,jumpSkill:.97,lineSkill:.5,style:"sauteur",bio:"Vole plus haut que tout le monde, atterrit quand il veut, parfois trop tard."},{id:"lumen",name:"Lumen Ardoise",color:8190976,accent:1714704,skill:.84,aggression:.15,jumpSkill:.55,lineSkill:.97,style:"trajectoire",bio:"Trace une ligne parfaite, ne prend jamais un bord et ne commet aucune faute."},{id:"aurelio",name:"Aurelio Temp\xEAte",color:16747520,accent:0,skill:.97,aggression:.7,jumpSkill:.85,lineSkill:.9,style:"r\xE9gulier",bio:"Le champion de la c\xF4te : rien \xE0 lui reprocher, et il le sait."},{id:"maree",name:"Ingrid Mar\xE9e",color:11544319,accent:16777215,skill:.88,aggression:.78,jumpSkill:.7,lineSkill:.6,style:"agressif",bio:"Pousse ses freins jusqu'\xE0 la limite et ressort des virages en coup de vent."},{id:"gaspard",name:"Gaspard Brume",color:1989631,accent:15790320,skill:.72,aggression:.35,jumpSkill:.4,lineSkill:.6,style:"r\xE9gulier",bio:"Discret, m\xE9tronome, il finit presque toujours dans les cinq premiers."},{id:"yuki",name:"Yuki Varan",color:50316,accent:8217,skill:.91,aggression:.5,jumpSkill:.8,lineSkill:.8,style:"r\xE9gulier",bio:"Rapide sur tous les terrains, sans point faible visible, et toujours souriant."}],am=[{name:"Coastal Rush",subtitle:"Route m\xE9diterran\xE9enne, grandes courbes et falaises"},{name:"Cliff Edge",subtitle:"Corniches \xE9troites et vent de face"},{name:"Harbor Drift",subtitle:"Quais glissants, embruns et virages en \xE9pingle"},{name:"Lighthouse Pass",subtitle:"Tunnels, ressauts et brouillard de phare"},{name:"The Final Run",subtitle:"Le champion vous attend"}],Ch=am.length;function cm(n){return Qs.find(e=>e.id===n)||null}function lm(n,e){let t=0;for(let i of n.upgrades)i===e&&t++;return t}function Pc(n){let e=String(n),t=zn($o(e+"|run")),i=[];for(let o=0;o<Ch;o++)if(o===0)i.push("sunset");else if(o===Ch-1)i.push("rain");else{let a=i[o-1],c=jb.filter(l=>l!==a&&!(o===Ch-2&&l==="rain"));i.push(t.pick(c))}let s=am.map((o,a)=>({name:o.name,subtitle:o.subtitle,trackSeed:`${e}-${a}`,weather:i[a],laps:a<2?2:3})),r={[wi.id]:0};for(let o of Ic)r[o.id]=0;return{seed:e,stageIndex:0,stages:s,upgrades:[],points:r,history:[]}}function Lc(n){let e=Math.max(0,n.stageIndex),t=[{id:wi.id,name:wi.name,color:wi.color,accent:wi.accent,isPlayer:!0,persona:null,stats:er(n)}];for(let i of Ic){let s=Math.min(.99,Math.round((i.skill+.01*e)*100)/100);t.push({id:i.id,name:i.name,color:i.color,accent:i.accent,isPlayer:!1,persona:{...i,skill:s},stats:{...js}})}return t}function er(n){let e={...js};for(let t of n.upgrades){let i=cm(t);i&&i.apply(e)}return e}function Dc(n){let e=zn($o(`${n.seed}|offer|${n.stageIndex}`)),t=Qs.filter(i=>lm(n,i.id)<i.maxStacks);return e.shuffle(t).slice(0,3)}function Nc(n,e){let t=cm(e);return!t||lm(n,e)>=t.maxStacks?!1:(n.upgrades.push(e),!0)}function um(n){if(n===wi.id)return wi.name;let e=Ic.find(t=>t.id===n);return e?e.name:n}function Ih(n,e){if(Ko(n))return n;let t=e.slice().sort((r,o)=>r.position-o.position),i=n.stages[n.stageIndex],s={stage:n.stageIndex,name:i.name,results:[]};return t.forEach((r,o)=>{let a=r.position??o+1,c=bc[a-1]??0;n.points[r.id]=(n.points[r.id]||0)+c,s.results.push({id:r.id,name:r.name||um(r.id),position:a,points:c,isPlayer:r.id===wi.id})}),n.history.push(s),n.stageIndex+=1,n}function no(n){let e={};for(let t of n.history)for(let i of t.results)e[i.id]=Math.min(e[i.id]??1/0,i.position);return Object.keys(n.points).map(t=>({id:t,name:um(t),points:n.points[t],isPlayer:t===wi.id,_best:e[t]??1/0})).sort((t,i)=>i.points-t.points||t._best-i._best).map(({_best:t,...i})=>i)}function Ko(n){return n.stageIndex>=n.stages.length}function Uc(n=new Date){let e=n instanceof Date?n:new Date(n),t=e.getUTCFullYear(),i=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`DAILY-${t}-${i}-${s}`}function Qb(){let n="ABCDEFGHJKMNPQRSTUVWXYZ23456789",e="RUSH-";for(let t=0;t<4;t++)e+=n[Math.floor(Math.random()*n.length)];return e}function Cc(){return{runs:0,wins:0,bestPoints:0,unlocked:[]}}function Ph(n){let e=Cc();if(!n||typeof n!="object")return e;let t=i=>Number.isFinite(i)&&i>=0?Math.floor(i):0;return{runs:t(n.runs),wins:t(n.wins),bestPoints:t(n.bestPoints),unlocked:Array.isArray(n.unlocked)?n.unlocked.filter(i=>typeof i=="string"):e.unlocked}}function hm(){try{return globalThis.localStorage??null}catch{return null}}function Lh(){try{let n=hm();if(!n)return Cc();let e=n.getItem(om);return e?Ph(JSON.parse(e)):Cc()}catch{return Cc()}}function Dh(n){try{let e=hm();return e?(e.setItem(om,JSON.stringify(Ph(n))),!0):!1}catch{return!1}}function Nh(n,e){let t=Ph(n),i=no(e),s=i.find(o=>o.isPlayer),r=i.length>0&&i[0].isPlayer;return{runs:t.runs+1,wins:t.wins+(r?1:0),bestPoints:Math.max(t.bestPoints,s?s.points:0),unlocked:t.unlocked.slice()}}var Qn=.9,fm=.3,Fc=8,Fh=3,dm=6+.8,Jo=3,eS=4.5,tS=.015,nS=.004,pm=60,_t={asphaltA:[.27,.225,.2],asphaltB:[.31,.26,.23],rampDark:[.13,.13,.15],yellow:[1,.82,.05],black:[.04,.04,.05],white:[.95,.95,.92],red:[.86,.14,.12],checkW:[.95,.95,.95],checkB:[.04,.04,.05],railA:[.93,.92,.88],railB:[.8,.2,.12],neonCyan:[.2,1,1],neonMag:[1,.15,.9],sand:[.3,.48,.15],motorwayA:[.2,.2,.21],motorwayB:[.22,.22,.23],lane:[.34,.33,.31],gravel:[.24,.4,.13],tunOchreA:[.5,.39,.2],tunOchreB:[.44,.34,.17],sodium:[1,.72,.28],tunA:[.16,.18,.24],tunB:[.21,.23,.3],concrete:[.36,.38,.42],concreteB:[.3,.32,.36],post:[.12,.13,.16],beam:[.1,.1,.12],mast:[.17,.18,.22]},Oc=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],mm=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],iS=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],vn=(n,e,t)=>n+(e-n)*t,Ln=class{constructor(){this.pos=[],this.col=[],this.uv=[],this.idx=[],this.n=0}quad(e,t,i,s){let[r,o,a,c]=e,l=mm(Oc(o,r),Oc(a,r)),h=mm(Oc(a,r),Oc(c,r)),u=[l[0]+h[0],l[1]+h[1],l[2]+h[2]];if(!(Math.hypot(u[0],u[1],u[2])>1e-12))return;let f=iS(u,i)<0,d=this.n;for(let g=0;g<4;g++){let _=e[g];this.pos.push(_[0],_[1],_[2]),this.col.push(t[0],t[1],t[2]);let m=s?s[g]:[0,0];this.uv.push(m[0],m[1])}this.n+=4,f?this.idx.push(d,d+2,d+1,d,d+3,d+2):this.idx.push(d,d+1,d+2,d,d+2,d+3)}};function jo(n,e,t,i,s){for(let r=0;r<3;r++){let o=(r+1)%3,a=(r+2)%3;for(let c of[-1,1]){let l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([h,u])=>{let f=[0,0,0];return f[r]=c,f[o]=h,f[a]=u,[0,1,2].map(d=>e[d]+t[0][d]*f[0]*i[0]+t[1][d]*f[1]*i[1]+t[2][d]*f[2]*i[2])});n.quad(l,s,t[r].map(h=>h*c),null)}}}function Oh(n,e,t){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new fi(i);return s.colorSpace=Rt,s.anisotropy=4,s}function gm(n,e,t,i){n.beginPath(),e.forEach(([s,r],o)=>o?n.lineTo(s*t,r*i):n.moveTo(s*t,r*i)),n.closePath(),n.fill()}var sS=[[.12,.1],[.82,.5],[.12,.9],[.12,.68],[.5,.5],[.12,.32]];function Bh(n,e,t){let i=t??zn(n.seed??1),s=n.pts,r=s.length,o=n.step??n.length/r,a=n.length??r*o,c=n.features??[],l=c.filter(R=>R.type==="ramp"),h=c.filter(R=>R.type==="boost"),u=c.filter(R=>R.type==="tunnel"),f=Math.max(0,Math.min(1,e.sheen??e.wet??0)),d=!!e.night,g=new pt;g.name="road";let _=[],m=[],p=[],b=R=>(m.push(R),R),v=Oh(128,128,(R,D,O)=>{R.fillStyle="#f3efe6",R.fillRect(0,0,D,O),R.fillStyle="#d6202a",gm(R,sS,D,O)}),x=Oh(256,128,(R,D,O)=>{R.fillStyle="#04141a",R.fillRect(0,0,D,O),R.fillStyle="#37f3ff",gm(R,[[.05,.1],[.8,.5],[.05,.9],[.05,.7],[.4,.5],[.05,.3]],D,O)}),E=Oh(1024,256,(R,D,O)=>{R.fillStyle="#0b0e16",R.fillRect(0,0,D,O),R.strokeStyle="#ffd21f",R.lineWidth=10,R.strokeRect(12,12,D-24,O-24),R.fillStyle="#ffd21f",R.font="bold 150px Arial, Helvetica, sans-serif",R.textAlign="center",R.textBaseline="middle",R.fillText("POLYGON RUSH",D/2,O/2+8)});for(let R of[v,x,E])R&&p.push(R);x&&(x.wrapS=Hi);let T=b(new it({vertexColors:!0,flatShading:!0,roughness:.85-.6*f,metalness:f>0?.2:.02})),y=b(new Xt({vertexColors:!0})),w=b(new it({vertexColors:!0,flatShading:!0,color:16777215,emissive:16777215,emissiveIntensity:.14,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),M=b(new it({vertexColors:!0,flatShading:!0,roughness:1})),S=b(new it({vertexColors:!0,flatShading:!0,roughness:.5,metalness:.2})),I=b(new Xt({vertexColors:!0})),B=b(new it({color:v?16777215:16762906,map:v,emissive:v?16777215:16762906,emissiveMap:v,emissiveIntensity:.5,flatShading:!0})),z=b(new it({color:207411,emissive:3666943,emissiveMap:x,emissiveIntensity:2.2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),L=b(new it({vertexColors:!0,flatShading:!0,side:Ct,roughness:.9})),F=b(new Xt({vertexColors:!0})),U=b(new it({vertexColors:!0,flatShading:!0,roughness:.6})),Y=b(new it({color:E?16777215:16765471,map:E,emissive:E?16777215:16756736,emissiveMap:E,emissiveIntensity:.7,flatShading:!0})),H=b(new it({color:2830138,flatShading:!0,roughness:.7})),ne=b(new it({color:16773570,emissive:16765562,emissiveIntensity:d?2.5:.8,flatShading:!0})),ue=R=>{for(let D of l)if(R>=D.s0&&R<D.s1)return D.height*(R-D.s0)/(D.s1-D.s0);return 0},me=R=>l.some(D=>R>=D.s0&&R<D.s1),be=R=>u.some(D=>R>=D.s0&&R<=D.s1),le=R=>{let D=R/o,O=Math.floor(D),K=D-O;O=n.open?Math.max(0,Math.min(r-2,O)):(O%r+r)%r;let he=s[O],Pe=s[(O+1)%r],Be=vn(he.rx,Pe.rx,K),He=vn(he.rz,Pe.rz,K),V=Math.hypot(Be,He)||1,re=vn(he.tx,Pe.tx,K),de=vn(he.tz,Pe.tz,K),ge=Math.hypot(re,de)||1,ye=vn(he.y,Pe.y,K);return{s:R,x:vn(he.x,Pe.x,K),z:vn(he.z,Pe.z,K),yb:ye,y:ye,h:0,rx:Be/V,rz:He/V,tx:re/ge,tz:de/ge,w:vn(he.width,Pe.width,K),curv:vn(he.curv,Pe.curv,K),sample:!1}},te=(R,D,O)=>({x:vn(R.x,D.x,O),y:vn(R.y,D.y,O),yb:vn(R.yb,D.yb,O),z:vn(R.z,D.z,O),rx:vn(R.rx,D.rx,O),rz:vn(R.rz,D.rz,O),w:vn(R.w,D.w,O)}),$=(R,D,O=0)=>[R.x+R.rx*D,R.y+O,R.z+R.rz*D],se=(R,D,O=0)=>[R.x+R.rx*D,R.yb+O,R.z+R.rz*D],C=[];for(let R of l)C.push({s:R.s0,h:0},{s:R.s1,h:R.height},{s:R.s1,h:0});C.sort((R,D)=>R.s-D.s);let X=[],q=0,ee=(R,D,O)=>{let K=X[X.length-1];if(K&&Math.abs(K.s-R)<1e-9&&Math.abs(K.h-D)<1e-9){K.sample=K.sample||O;return}let he=le(R);he.h=D,he.y=he.yb+D,he.sample=O,X.push(he)};for(let R=0;R<r;R++){let D=R*o;for(;q<C.length&&C[q].s<=D+1e-9;)ee(C[q].s,C[q].h,!1),q++;ee(D,ue(D),!0)}for(;q<C.length;)ee(C[q].s,C[q].h,!1),q++;let pe=X.length,Te=[];for(let R=0;R<pe&&!(n.open&&R===pe-1);R++){let D=X[R],O=X[(R+1)%pe],K=D.s,he=R+1<pe?X[R+1].s:a,Pe=Math.abs(he-K)<1e-9,Be=(K+he)/2;Te.push({a:D,b:O,sa:K,sb:he,drop:Pe,mid:Be,ramp:!Pe&&me(Be)})}let Ie=new Ln,G=new Ln,Ve=new Ln,ke=new Ln,ze=new Ln,De=new Ln,Ye=new Ln,Ne=new Ln,N=new Ln,A=new Ln,j=new Ln,xe=new Ln,_e=R=>R.w/2+6-fm/2,fe=R=>R.w/2+6+fm/2;for(let R of Te){let{a:D,b:O,sa:K,sb:he,mid:Pe}=R;if(R.drop){Ie.quad([$(D,-D.w/2),$(D,D.w/2),$(O,O.w/2),$(O,-O.w/2)],_t.rampDark,[D.tx,0,D.tz]);continue}let Be=D.w/2,He=O.w/2;if(R.ramp)G.quad([$(D,-Be),$(D,Be),$(O,He),$(O,-He)],Math.floor(Pe/2)%2===0?_t.yellow:_t.black,[0,1,0]),Ie.quad([$(D,-Be),$(O,-He),se(O,-He),se(D,-Be)],_t.rampDark,[-D.rx,0,-D.rz]),Ie.quad([$(D,Be),se(D,Be),se(O,He),$(O,He)],_t.rampDark,[D.rx,0,D.rz]);else{Ie.quad([$(D,-Be),$(D,Be),$(O,He),$(O,-He)],n.open?Math.floor(Pe/8)%2?_t.motorwayB:_t.motorwayA:Math.floor(Pe/8)%2?_t.asphaltB:_t.asphaltA,[0,1,0]);for(let ye of[-1,1])Ve.quad([$(D,ye*(Be-.25),.02),$(D,ye*(Be-.45),.02),$(O,ye*(He-.45),.02),$(O,ye*(He-.25),.02)],_t.white,[0,1,0]);let V=9,re=3;for(let ye=Math.floor(K/V);ye*V<he;ye++){let Le=Math.max(K,ye*V),$e=Math.min(he,ye*V+re);if($e-Le<1e-6)continue;let Ze=te(D,O,(Le-K)/(he-K)),nt=te(D,O,($e-K)/(he-K));Ve.quad([$(Ze,-.08,.02),$(Ze,.08,.02),$(nt,.08,.02),$(nt,-.08,.02)],_t.white,[0,1,0])}let de=Math.abs((D.curv+O.curv)/2)>nS?1.2:.5,ge=Math.floor(Pe/2)%2?_t.red:_t.railA;for(let ye of n.open?[]:[-1,1])Ve.quad([$(D,ye*Be,.025),$(D,ye*(Be+de),.025),$(O,ye*(He+de),.025),$(O,ye*He,.025)],ge,[0,1,0])}for(let V of[-1,1]){ke.quad([se(D,V*Be),se(D,V*_e(D)),se(O,V*_e(O)),se(O,V*He)],n.open?_t.lane:_t.sand,[0,1,0]);let re=Fc/2,de=-Fh/2,ge=-Fh,ye=[V*D.rx*.6,.8,V*D.rz*.6];ke.quad([se(D,V*fe(D),0),se(D,V*(fe(D)+re),de),se(O,V*(fe(O)+re),de),se(O,V*fe(O),0)],_t.gravel,ye),ke.quad([se(D,V*(fe(D)+re),de),se(D,V*(fe(D)+Fc),ge),se(O,V*(fe(O)+Fc),ge),se(O,V*(fe(O)+re),de)],_t.gravel,ye);let Le=Math.floor(Pe/6)%2?_t.railB:_t.railA,$e=V*_e(D),Ze=V*_e(O),nt=V*fe(D),rt=V*fe(O);!n.open&&(V<0||d||e.openRight===!1)&&(ze.quad([se(D,$e,0),se(D,$e,Qn),se(O,Ze,Qn),se(O,Ze,0)],Le,[-V*D.rx,0,-V*D.rz]),ze.quad([se(D,nt,0),se(D,nt,Qn),se(O,rt,Qn),se(O,rt,0)],Le,[V*D.rx,0,V*D.rz]),ze.quad([se(D,$e,Qn),se(D,nt,Qn),se(O,rt,Qn),se(O,Ze,Qn)],Le,[0,1,0])),d&&De.quad([se(D,$e,Qn+.02),se(D,nt,Qn+.02),se(O,rt,Qn+.02),se(O,Ze,Qn+.02)],V<0?_t.neonCyan:_t.neonMag,[0,1,0])}}for(let R of X){if(!R.sample||Math.abs(R.curv)<=tS||Math.round(R.s/o)%8!==0||be(R.s)||me(R.s))continue;let O=-Math.sign(R.curv)*(R.w/2+6+.6),he=R.curv>0?[[0,0],[1,0],[1,1],[0,1]]:[[1,0],[0,0],[0,1],[1,1]];Ye.quad([se(R,O-.6,1),se(R,O+.6,1),se(R,O+.6,2),se(R,O-.6,2)],[1,1,1],[-R.tx,0,-R.tz],he),jo(j,[R.x+R.rx*O,R.yb+.35,R.z+R.rz*O],[[R.tx,0,R.tz],[R.rx,0,R.rz],[0,1,0]],[.08,.12,.65],_t.post)}let Ce=le(0),Fe=Math.max(4,Math.round(Ce.w)),Oe=Ce.w/Fe;for(let R=0;R<3;R++){let D=le(-2+R),O=le(-1+R);for(let K=0;K<Fe;K++){let he=-Ce.w/2+K*Oe,Pe=he+Oe;Ve.quad([$(D,he,.03),$(D,Pe,.03),$(O,Pe,.03),$(O,he,.03)],(R+K)%2?_t.checkB:_t.checkW,[0,1,0])}}let Ge=Ce.w/2+6+.5,Se=[[Ce.tx,0,Ce.tz],[Ce.rx,0,Ce.rz],[0,1,0]];for(let R of[-1,1])jo(j,[Ce.x+Ce.rx*R*Ge,Ce.yb+4,Ce.z+Ce.rz*R*Ge],Se,[.3,.3,4],_t.post);jo(j,[Ce.x,Ce.yb+7.5,Ce.z],Se,[.5,Ge,.5],_t.beam);let J=(R,D,O)=>[Ce.x+Ce.tx*R+Ce.rx*D,Ce.yb+O,Ce.z+Ce.tz*R+Ce.rz*D];xe.quad([J(-.55,-Ge,5.2),J(-.55,Ge,5.2),J(-.55,Ge,6.8),J(-.55,-Ge,6.8)],[1,1,1],[-Ce.tx,0,-Ce.tz],[[0,0],[1,0],[1,1],[0,1]]),xe.quad([J(.55,-Ge,5.2),J(.55,Ge,5.2),J(.55,Ge,6.8),J(.55,-Ge,6.8)],[1,1,1],[Ce.tx,0,Ce.tz],[[1,0],[0,0],[0,1],[1,1]]);for(let R of h){let D=[];for(let K=R.s0;K<R.s1;K+=2)D.push(K);D.push(R.s1);let O=D.map(le);for(let K=0;K+1<O.length;K++){let he=O[K],Pe=O[K+1],Be=(he.s-R.s0)/4,He=(Pe.s-R.s0)/4;Ne.quad([$(he,-he.w/2,.04),$(he,he.w/2,.04),$(Pe,Pe.w/2,.04),$(Pe,-Pe.w/2,.04)],[1,1,1],[0,1,0],[[Be,0],[Be,1],[He,1],[He,0]])}}let Me=R=>{let D=R.w/2+dm,O=[[-D,0],[-D,Jo]];for(let K=1;K<=7;K++){let he=Math.PI-K*Math.PI/8;O.push([D*Math.cos(he),Jo+eS*Math.sin(he)])}return O.push([D,Jo],[D,0]),O},ve=(R,D,O,K=0)=>[R.x+R.rx*D+R.tx*K,R.yb+O,R.z+R.rz*D+R.tz*K],ie=(R,D,O)=>{let K=-D,he=Jo-O,Pe=Math.hypot(K,he)||1;return[R.rx*K/Pe,he/Pe,R.rz*K/Pe]},we=([R,D])=>{let O=-R,K=Jo-D,he=Math.hypot(O,K)||1;return[R+O/he*.45,D+K/he*.45]};for(let R of u){let D=[];for(let K=R.s0;K<R.s1;K+=2)D.push(K);D.push(R.s1);let O=D.map(le);for(let K=0;K+1<O.length;K++){let he=O[K],Pe=O[K+1],Be=Me(he),He=Me(Pe);for(let V=0;V<Be.length-1;V++){let re=(Be[V][0]+Be[V+1][0])/2,de=(Be[V][1]+Be[V+1][1])/2;N.quad([ve(he,Be[V][0],Be[V][1]),ve(he,Be[V+1][0],Be[V+1][1]),ve(Pe,He[V+1][0],He[V+1][1]),ve(Pe,He[V][0],He[V][1])],n.open?V%2?_t.tunOchreA:_t.tunOchreB:V%2?_t.tunA:_t.tunB,ie(he,re,de))}if(Math.round((he.s-R.s0)/2)%6===0)for(let V=1;V<=8;V++){let re=we(Be[V]),de=we(Be[V+1]),ge=(re[0]+de[0])/2,ye=(re[1]+de[1])/2;A.quad([ve(he,re[0],re[1]),ve(he,de[0],de[1]),ve(he,de[0],de[1],.6),ve(he,re[0],re[1],.6)],n.open?_t.sodium:V%2?_t.neonCyan:_t.neonMag,ie(he,ge,ye))}}for(let K of[O[0],O[O.length-1]]){let he=K.w/2+dm,Pe=[[K.tx,0,K.tz],[K.rx,0,K.rz],[0,1,0]];for(let Be of[-1,1])jo(N,[K.x+K.rx*Be*(he+1.2),K.yb+5,K.z+K.rz*Be*(he+1.2)],Pe,[2,1.1,5],_t.concrete);jo(N,[K.x,K.yb+10.5,K.z],Pe,[2,he+3.5,1.5],_t.concreteB)}}let oe=(R,D,O,K=!1)=>{if(!R.idx.length)return null;let he=new xt;he.setAttribute("position",new ht(R.pos,3)),he.setAttribute("color",new ht(R.col,3)),he.setAttribute("uv",new ht(R.uv,2)),he.setIndex(R.idx),he.computeVertexNormals(),_.push(he);let Pe=new at(he,D);return Pe.name=O,Pe.receiveShadow=K,g.add(Pe),Pe};oe(Ie,T,"road-asphalt",!0),oe(G,y,"road-ramp-top"),oe(Ve,w,"road-paint"),oe(ke,M,"road-shoulder-talus"),oe(ze,S,"road-barriers"),d&&oe(De,I,"road-barrier-neon"),oe(Ye,B,"road-chevrons"),oe(Ne,z,"road-boost"),oe(N,L,"road-tunnels"),oe(A,F,"road-tunnel-neon"),oe(j,U,"road-props"),oe(xe,Y,"road-start-sign");let Ee=[];for(let R=1;R*pm<a-5;R++){let D=R*pm;if(u.some(He=>D>=He.s0-15&&D<=He.s1+15))continue;let O=le(D),K=R%2?1:-1,he=K*(O.w/2+6+2.6),Pe=O.yb-Fh*Math.min(1,2.45/Fc),Be=i.range(8.5,9.5);Ee.push({x:O.x+O.rx*he,z:O.z+O.rz*he,y:Pe,h:Be,hx:O.x+O.rx*(he-K*.6),hz:O.z+O.rz*(he-K*.6)})}if(Ee.length){let R=new wn(.18,.26,9,6,1),D=new Js(.55,0);_.push(R,D);let O=new _n(R,H,Ee.length),K=new _n(D,ne,Ee.length);O.name="road-lamp-masts",K.name="road-lamp-heads";let he=new et,Pe=new en,Be=new k,He=new k;Ee.forEach((V,re)=>{He.set(V.x,V.y+V.h/2,V.z),Be.set(1,V.h/9,1),he.compose(He,Pe,Be),O.setMatrixAt(re,he),He.set(V.hx,V.y+V.h+.2,V.hz),Be.set(1,1,1),he.compose(He,Pe,Be),K.setMatrixAt(re,he)}),O.instanceMatrix.needsUpdate=!0,K.instanceMatrix.needsUpdate=!0,g.add(O,K)}return{group:g,update:(R,D)=>{x&&(x.offset.x=-(D*.9%1)),z.emissiveIntensity=2.2+.5*Math.sin(D*5)},dispose:()=>{g.removeFromParent();for(let R of _)R.dispose();for(let R of m)R.dispose();for(let R of p)R.dispose()}}}function _m(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new xt,l=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=xm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let g=xm(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function xm(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new mt(o,t,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){let _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function zh(n,e){if(e===vp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===qo||e===yc){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===qo)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function tr(n,e=.5,t=1){if(!n||n.userData.voxel||!(n.isMeshStandardMaterial||n.isMeshLambertMaterial))return n;n.userData.voxel=!0;let i=n.onBeforeCompile;return n.onBeforeCompile=(s,r)=>{i?.call(n,s,r),s.uniforms.uVoxCell={value:e},s.uniforms.uVoxStrength={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"voxel-"+e+"-"+t,n.needsUpdate=!0,n}var rS=/asphalt|paint|boost|sign|ramp|neon|lamp-heads/;function kh(n,e){n.traverse(t=>{if(!t.isMesh||rS.test(t.name))return;let i=Array.isArray(t.material)?t.material:[t.material];for(let s of i)!s||s.transparent||s.emissiveIntensity>1.2||(s.roughness??1)<.35||tr(s,e(t),1)})}function ym(n,e,t=46){let i=[];for(let c=0;c<t;c++){let l=e.range(0,Math.PI*2),h=e.range(700,4200),u=Math.cos(l)*h,f=Math.sin(l)*h,d=e.range(260,520),g=e.range(26,46),_=e.int(5,11);for(let m=0;m<_;m++)i.push([u+Math.round(e.range(-3.5,3.5))*g,d+Math.round(e.range(0,1.4))*g*.6,f+Math.round(e.range(-2,2))*g,g*e.int(1,3),g*.6*e.int(1,2),g*e.int(1,2)])}let s=new an(1,1,1),r=new Gi({color:n.night?2765648:16777215,fog:!1,emissive:n.night?329487:new Re(16777215).lerp(new Re(n.skyHorizon),.35).multiplyScalar(.5)}),o=new _n(s,r,i.length),a=new et;return i.forEach((c,l)=>{a.makeScale(c[3],c[4],c[5]),a.setPosition(c[0],c[1],c[2]),o.setMatrixAt(l,a)}),o.instanceMatrix.needsUpdate=!0,o.frustumCulled=!1,o.name="voxel-clouds",o}function vm(n,e,t,i,s,r,o,a,c,l){let h=e+s,u=t+r,f=i+o,d,g,_,m,p,b;s?(d=0,g=c?1:-1,_=0,m=0,p=0,b=l?1:-1):r?(d=a?1:-1,g=0,_=0,m=0,p=0,b=l?1:-1):(d=a?1:-1,g=0,_=0,m=0,p=c?1:-1,b=0);let v=n(h+d,u+g,f+_)?1:0,x=n(h+m,u+p,f+b)?1:0,E=n(h+d+m,u+g+p,f+_+b)?1:0;return .5+.1667*(v&&x?0:3-(v+x+E))}function Es(n,e){let t=n.index?n.toNonIndexed():n,i=t.attributes.position,s=t.attributes.color,r=512,o=(m,p,b)=>m+r+(p+r)*1024+(b+r)*1048576,a=new Map,c=(m,p,b,v,x,E)=>{let T=Math.floor(m/e),y=Math.floor(p/e),w=Math.floor(b/e),M=o(T,y,w);a.has(M)||a.set(M,[T,y,w,v,x,E])};for(let m=0;m<i.count;m+=3){let p=i.getX(m),b=i.getY(m),v=i.getZ(m),x=i.getX(m+1),E=i.getY(m+1),T=i.getZ(m+1),y=i.getX(m+2),w=i.getY(m+2),M=i.getZ(m+2),S=.6,I=.6,B=.6;s&&(S=(s.getX(m)+s.getX(m+1)+s.getX(m+2))/3,I=(s.getY(m)+s.getY(m+1)+s.getY(m+2))/3,B=(s.getZ(m)+s.getZ(m+1)+s.getZ(m+2))/3);let z=Math.max(Math.hypot(x-p,E-b,T-v),Math.hypot(y-p,w-b,M-v),Math.hypot(y-x,w-E,M-T)),L=Math.max(1,Math.ceil(z/e*2));for(let F=0;F<=L;F++)for(let U=0;U<=L-F;U++){let Y=F/L,H=U/L;c(p+(x-p)*Y+(y-p)*H,b+(E-b)*Y+(w-b)*H,v+(T-v)*Y+(M-v)*H,S,I,B)}}let l=new Map;for(let m of a.values()){let p=m[0]+r+(m[2]+r)*1024,b=l.get(p);b||l.set(p,b=[]),b.push(m)}for(let m of l.values()){m.sort((p,b)=>p[1]-b[1]);for(let p=0;p<m.length-1;p++)for(let b=m[p][1]+1;b<m[p+1][1];b++)a.set(o(m[p][0],b,m[p][2]),[m[p][0],b,m[p][2],m[p][3],m[p][4],m[p][5]])}let h=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],u=[],f=[],d=[],g=(m,p,b)=>a.has(o(m,p,b));for(let m of a.values()){let[p,b,v,x,E,T]=m,y=Math.sin(p*12.9898+b*78.233+v*37.719)*43758.5453,w=.86+.24*(y-Math.floor(y));for(let[M,S,I,B]of h)if(!a.has(o(p+M,b+S,v+I)))for(let z of[0,1,2,0,2,3]){let L=B[z*3],F=B[z*3+1],U=B[z*3+2],Y=w*vm(g,p,b,v,M,S,I,L,F,U);u.push((p+L)*e,(b+F)*e,(v+U)*e),f.push(M,S,I),d.push(x*Y,E*Y,T*Y)}}let _=new xt;return _.setAttribute("position",new ht(u,3)),_.setAttribute("normal",new ht(f,3)),_.setAttribute("color",new ht(d,3)),_.computeBoundingSphere(),_}function kn(n,e,t,i,s,r=.2){let o=new Array(n*e*t),a=(_,m,p)=>_<0||m<0||p<0||_>=n||m>=e||p>=t?null:o[_+n*(m+e*p)];for(let _=0;_<t;_++)for(let m=0;m<e;m++)for(let p=0;p<n;p++)o[p+n*(m+e*_)]=s(p,m,_)||null;let c=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],l=[],h=[],u=[],f=-n/2,d=-t/2;for(let _=0;_<t;_++)for(let m=0;m<e;m++)for(let p=0;p<n;p++){let b=o[p+n*(m+e*_)];if(!b)continue;let v=Math.sin(p*12.9898+m*78.233+_*37.719)*43758.5453,x=1-r/2+r*(v-Math.floor(v));for(let[E,T,y,w]of c)if(!a(p+E,m+T,_+y)&&!(T<0&&m===0))for(let M of[0,1,2,0,2,3]){let S=w[M*3],I=w[M*3+1],B=w[M*3+2],z=x*vm(a,p,m,_,E,T,y,S,I,B);l.push((p+f+S)*i,(m+I)*i,(_+d+B)*i),h.push(E,T,y),u.push(b[0]*z,b[1]*z,b[2]*z)}}let g=new xt;return g.setAttribute("position",new ht(l,3)),g.setAttribute("normal",new ht(h,3)),g.setAttribute("color",new ht(u,3)),g.computeBoundingSphere(),g}function Mm(n,e=1,t=null){if(!n||n.userData.wetRoad)return n;n.userData.wetRoad=!0;let i=n.onBeforeCompile;return n.onBeforeCompile=(s,r)=>{i?.call(n,s,r),s.uniforms.uWet={value:e},s.uniforms.tRefl={value:t?t.texture:null},s.uniforms.uReflMatrix={value:t?t.matrix:new et},s.uniforms.uReflOn={value:t?1:0},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"wet-road-"+e+(t?"-refl":""),n.needsUpdate=!0,n}function bm(n,e){let t=1/0,i=-1/0,s=1/0,r=-1/0,o=1/0,a=-1/0;for(let f=0;f<n.length;f+=4)t=Math.min(t,n[f]),i=Math.max(i,n[f]),s=Math.min(s,n[f+1]),r=Math.max(r,n[f+1]),o=Math.min(o,n[f+2]),a=Math.max(a,n[f+2]);let c=i-t+1,l=r-s+1,h=a-o+1,u=new Map;for(let f=0;f<n.length;f+=4){let d=n[f+3];u.set(n[f]-t+c*(n[f+1]-s+l*(n[f+2]-o)),[(d>>16&255)/255,(d>>8&255)/255,(d&255)/255])}return kn(c,l,h,e,(f,d,g)=>u.get(f+c*(d+l*g))||null,.12)}function Sm(n,e=3.1,t=2.6){if(!n||!n.userData.voxel||n.userData.windows)return n;n.userData.windows=!0;let i=n.onBeforeCompile;n.onBeforeCompile=(r,o)=>{i?.call(n,r,o),r.fragmentShader=r.fragmentShader.replace("#include <roughnessmap_fragment>",`
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
        #include <roughnessmap_fragment>`)};let s=n.customProgramCacheKey?.()||"";return n.customProgramCacheKey=()=>s+"-win-"+e+"-"+t,n.needsUpdate=!0,n}var ln=5,Em=1,Ts=450,Hn=40,Tm=12e3,wm=32,Am=4e3,Vn=Math.PI*2,Qo=new Ut,so=new Re,Rm=new et,Cm=new et,oS=new k(0,1,0),Im=n=>n<0?0:n>1?1:n,Ai=(n,e,t)=>n<e?e:n>t?t:n,nr=(n,e,t)=>{let i=Im((t-n)/(e-n));return i*i*(3-2*i)};function aS(n){let e=(i,s)=>{let r=Math.imul(i|0,374761393)+Math.imul(s|0,668265263)+n|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},t=(i,s)=>{let r=Math.floor(i),o=Math.floor(s),a=i-r,c=s-o,l=a*a*(3-2*a),h=c*c*(3-2*c),u=e(r,o),f=e(r+1,o),d=e(r,o+1),g=e(r+1,o+1);return u+(f-u)*l+(d-u)*h+(u-f-d+g)*l*h};return(i,s)=>(t(i,s)*.5+t(i*2+17.3,s*2-9.1)*.25+t(i*4-3.7,s*4+11.2)*.125)/.875}var io=n=>{let e=new Re(n);return[e.r,e.g,e.b]},ws={sand:io(14271631),dry:io(7317050),garrigue:io(5212718),rock:io(12169890),pale:io(13617336),snow:io(15855076)},cS=[16513264,15853260,14725754,16052195],lS=[9075302,7236192,11047018,8023646],uS=[3407871,16727250,16757051],Bc=0,zc=0,kc=0,ea=(n,e)=>{Bc+=(n[0]-Bc)*e,zc+=(n[1]-zc)*e,kc+=(n[2]-kc)*e};function hS(n,e,t,i,s,r){Bc=ws.sand[0],zc=ws.sand[1],kc=ws.sand[2],ea(ws.dry,nr(2.5,7,n)),ea(ws.garrigue,nr(25,75,n)*.55),ea(ws.rock,nr(.4,.65,e)),ea(ws.pale,nr(95,120,n)*.8),ea(ws.snow,nr(125,150,n));let o=Bc*t,a=zc*t,c=kc*t;i&&(o=o*.45+.02,a=a*.5+.03,c=c*.75+.09);for(let l=0;l<9;l+=3)s[r+l]=o,s[r+l+1]=a,s[r+l+2]=c}function ei(n,e){let t=n.index?n.toNonIndexed():n;t.attributes.uv&&t.deleteAttribute("uv"),t.attributes.normal||t.computeVertexNormals();let i=t.attributes.position.count,s=new Float32Array(i*3);so.setHex(e);for(let r=0;r<i;r++)s[r*3]=so.r,s[r*3+1]=so.g,s[r*3+2]=so.b;return t.setAttribute("color",new mt(s,3)),t}var ta=n=>_m(n,!1);function fS(n,e,t){let i=Math.sin(n*12.9898+e*78.233+t*37.719)*43758.5453;return i-Math.floor(i)}function dS(){let n=new Js(1,0),e=n.attributes.position;for(let t=0;t<e.count;t++){let i=e.getX(t),s=e.getY(t),r=e.getZ(t),o=.8+.4*fS(i,s,r);e.setXYZ(t,i*o,s*o,r*o)}return n.computeVertexNormals(),n}function pS(){return ta([ei(new wn(.35,.5,6,6).translate(0,3,0),7162931),ei(new Js(3.4,0).scale(1,.55,1).translate(0,7.4,0),4160058)])}function mS(){return ta([ei(new wn(.25,.35,1.2,5).translate(0,.6,0),7162931),ei(new Ks(1.1,10,6).translate(0,6,0),3037756)])}function gS(){let n=[ei(new wn(.22,.35,8,5).translate(0,4,0),9071178)];for(let e=0;e<7;e++){let t=new Ks(.55,4.6,3).rotateZ(Math.PI/2-.45).translate(0,8.4,0).rotateY(e*Vn/7);n.push(ei(t,5214010))}return ta(n)}function xS(){return ta([ei(new wn(1.6,2.3,13,8).translate(0,6.5,0),16052712),ei(new wn(2,2,2.2,8).translate(0,6.5,0),12727595),ei(new wn(1.3,1.3,1.8,8).translate(0,14,0),16771488),ei(new Ks(1.7,1.2,8).translate(0,15.4,0),3812906)])}function _S(){return ta([ei(new an(2.2,.9,6).translate(0,.45,0),15986662),ei(new Ks(1.9,5.4,3).scale(.1,1,1).translate(0,3.6,-.3),16775400)])}function di(n,e,t,i=!0){let s=new _n(n,e,t.length);for(let r=0;r<t.length;r++){let o=t[r];Qo.position.set(o.x,o.y,o.z),Qo.rotation.set(0,o.ry??0,0),Qo.scale.set(o.sx??1,o.sy??1,o.sz??1),Qo.updateMatrix(),s.setMatrixAt(r,Qo.matrix),o.col!==void 0&&(so.setHex(o.col).multiplyScalar(o.v??1),s.setColorAt(r,so))}return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.castShadow=i,s}var yS=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,vS=`
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
}`;function Pm(n,e,t,i){let s=e.pts,r=s.length,o=e.bounds,a=!!t.night,c=aS(i.int(1,1073741808)),l=o.minX-Ts-Hn,h=o.minZ-Ts-Hn,u=Math.ceil((o.maxX-o.minX+2*Ts)/Hn)+3,f=Math.ceil((o.maxZ-o.minZ+2*Ts)/Hn)+3,d=Array.from({length:u*f},()=>[]);for(let V=0;V<r;V++){let re=Ai(Math.floor((s[V].x-l)/Hn),0,u-1),de=Ai(Math.floor((s[V].z-h)/Hn),0,f-1);d[de*u+re].push(V)}let g=0;function _(V,re){let de=Math.floor((V-l)/Hn),ge=Math.floor((re-h)/Hn),ye=Math.max(u,f),Le=1/0,$e=0;for(let Ze=0;Ze<=ye;Ze++){for(let rt=ge-Ze;rt<=ge+Ze;rt++){if(rt<0||rt>=f)continue;let Ht=rt===ge-Ze||rt===ge+Ze?1:2*Ze;for(let Lt=de-Ze;Lt<=de+Ze;Lt+=Ht){if(Lt<0||Lt>=u)continue;let Vt=d[rt*u+Lt];for(let Wt=0;Wt<Vt.length;Wt++){let fn=Vt[Wt],P=s[fn],Z=P.x-V,ae=P.z-re,ce=Z*Z+ae*ae;ce<Le&&(Le=ce,$e=fn)}}}let nt=Ze*Hn;if(Le<=nt*nt)break}return g=Math.sqrt(Le),$e}function m(V,re,de){let ge=de*de,ye=1/0,Le=Ai(Math.floor((V-de-l)/Hn),0,u-1),$e=Ai(Math.floor((V+de-l)/Hn),0,u-1),Ze=Ai(Math.floor((re-de-h)/Hn),0,f-1),nt=Ai(Math.floor((re+de-h)/Hn),0,f-1);for(let rt=Ze;rt<=nt;rt++)for(let Tt=Le;Tt<=$e;Tt++){let Ht=d[rt*u+Tt];for(let Lt=0;Lt<Ht.length;Lt++){let Vt=s[Ht[Lt]],Wt=Vt.x-V,fn=Vt.z-re;Wt*Wt+fn*fn<=ge&&Vt.y<ye&&(ye=Vt.y)}}return ye}let p=Math.ceil(r/4),b=new Float64Array(p*2);for(let V=0;V<p;V++)b[2*V]=s[V*4%r].x,b[2*V+1]=s[V*4%r].z;function v(V,re){let de=!1;for(let ge=0,ye=p-1;ge<p;ye=ge++){let Le=b[2*ge],$e=b[2*ge+1],Ze=b[2*ye],nt=b[2*ye+1];$e>re!=nt>re&&V<(Ze-Le)*(re-$e)/(nt-$e)+Le&&(de=!de)}return de}let x=o.minX-Ts,E=o.minZ-Ts,T=Math.ceil((o.maxX-o.minX+2*Ts)/ln)+1,y=Math.ceil((o.maxZ-o.minZ+2*Ts)/ln)+1,w=new Float32Array(T*y);for(let V=0;V<y;V++)for(let re=0;re<T;re++){let de=x+re*ln,ge=E+V*ln,ye=_(de,ge),Le=g,$e=s[ye],Ze=$e.width*.5,nt=$e.y;if(Le<40){let Z=m(de,ge,24);Z<nt&&(nt=Z)}let rt=1;if(!v(de,ge)){let Z=Le-Ze+(c(de/140+31.7,ge/140-8.2)-.5)*70;rt=1-nr(110,200,Z)}let Tt=c(de/260,ge/260),Lt=-15+(10+130*Math.pow(Im((Tt-.42)/.5),1.5)+6*Tt+15)*rt;if(rt>=1){let Z=c(de/90+11.3,ge/90-4.1);Lt=Math.max(Lt,nt+6+38*Z)}let Vt=nr(Ze+6+12,Ze+6+62,Le),Wt=nt-.6,fn=Wt+(Lt-Wt)*Vt,P=nt+Math.max(0,Le-Ze-6-12)*1.2;fn>P&&(fn=P),w[V*T+re]=fn}let M=null;function S(V,re){if(M)return M(V,re);let de=(V-x)/ln,ge=(re-E)/ln;de=Ai(de,0,T-1.000001),ge=Ai(ge,0,y-1.000001);let ye=Math.floor(de),Le=Math.floor(ge),$e=de-ye,Ze=ge-Le,nt=w[Le*T+ye],rt=w[Le*T+ye+1],Tt=w[(Le+1)*T+ye],Ht=w[(Le+1)*T+ye+1],Lt=nt+(rt-nt)*$e,Vt=Tt+(Ht-Tt)*$e;return Lt+(Vt-Lt)*Ze}let I=(V,re)=>Math.max(Math.abs(S(V+4,re)-S(V-4,re)),Math.abs(S(V,re+4)-S(V,re-4)))/8,B=(V,re,de)=>{let ge=_(V,re);return g>=s[ge].width*.5+6+4+de},z=[],L=[],F=new Float32Array(9),U=(V,re,de,ge,ye,Le,$e,Ze,nt)=>{let rt=ge-V,Tt=ye-re,Ht=Le-de,Lt=$e-V,Vt=Ze-re,Wt=nt-de,fn=Tt*Wt-Ht*Vt,P=Ht*Lt-rt*Wt,Z=rt*Vt-Tt*Lt,ae=Math.hypot(fn,P,Z)||1,ce=1-Math.abs(P)/ae;z.push(V,re,de,ge,ye,Le,$e,Ze,nt),hS((re+ye+Ze)/3,ce,.9+.2*i.next(),a,F,0);for(let Q=0;Q<9;Q++)L.push(F[Q])},Y=T-1,H=y-1,ne=new Float32Array(Y*H);for(let V=0;V<H;V++)for(let re=0;re<Y;re++){let de=V*T+re,ge=(w[de]+w[de+1]+w[de+T]+w[de+T+1])/4;ne[V*Y+re]=Math.floor(ge/Em)*Em}let ue=-4;for(let V=0;V<H;V++)for(let re=0;re<Y;re++){let de=ne[V*Y+re],ge=x+re*ln,ye=E+V*ln,Le=ge+ln,$e=ye+ln;if(de>ue&&(U(ge,de,ye,ge,de,$e,Le,de,ye),U(Le,de,ye,ge,de,$e,Le,de,$e)),re+1<Y){let Ze=ne[V*Y+re+1],nt=Math.min(de,Ze),rt=Math.max(de,Ze);rt>nt&&rt>ue&&(U(Le,nt,ye,Le,rt,ye,Le,rt,$e),U(Le,nt,ye,Le,rt,$e,Le,nt,$e))}if(V+1<H){let Ze=ne[(V+1)*Y+re],nt=Math.min(de,Ze),rt=Math.max(de,Ze);rt>nt&&rt>ue&&(U(ge,nt,$e,ge,rt,$e,Le,rt,$e),U(ge,nt,$e,Le,rt,$e,Le,nt,$e))}}M=(V,re)=>{let de=Ai(Math.floor((V-x)/ln),0,Y-1),ge=Ai(Math.floor((re-E)/ln),0,H-1);return ne[ge*Y+de]};let me=new xt;me.setAttribute("position",new ht(z,3)),me.setAttribute("color",new ht(L,3)),me.computeVertexNormals(),me.computeBoundingSphere();let be=new at(me,new it({vertexColors:!0,flatShading:!0,roughness:.94,metalness:0,side:Ct}));be.receiveShadow=!0;let le=new pt;le.name="environment",le.add(be);let te=(o.minX+o.maxX)/2,$=(o.minZ+o.maxZ)/2,se=new Pn(Tm,Tm,wm,wm);se.rotateX(-Math.PI/2);let C=se.attributes.position,X=C.count,q=new Float32Array(X),ee=new Float32Array(X);for(let V=0;V<X;V++)q[V]=C.getX(V),ee[V]=C.getZ(V);let pe=new at(se,new it({color:t.seaColor,roughness:.25,metalness:.05,flatShading:!0}));pe.position.set(te,0,$),le.add(pe);let Te=new k(t.sunDir[0],t.sunDir[1],t.sunDir[2]).normalize(),Ie=new pt,G=new Et({uniforms:{topColor:{value:new Re(t.skyTop)},horizonColor:{value:new Re(t.skyHorizon)},sunColor:{value:new Re(t.sunColor)},sunDir:{value:Te},night:{value:a?1:0}},vertexShader:yS,fragmentShader:vS,side:Jt,depthWrite:!1,fog:!1}),Ve=new at(new _s(Am,32,16),G);if(Ve.renderOrder=-10,Ve.frustumCulled=!1,Ie.add(Ve),a){let re=new Float32Array(1500);for(let ye=0;ye<500;ye++){let Le=i.range(0,Vn),$e=Math.asin(i.range(.05,.98)),Ze=Am*.97;re[ye*3]=Ze*Math.cos($e)*Math.cos(Le),re[ye*3+1]=Ze*Math.sin($e),re[ye*3+2]=Ze*Math.cos($e)*Math.sin(Le)}let de=new xt;de.setAttribute("position",new mt(re,3));let ge=new xs(de,new Zs({color:16777215,size:2,sizeAttenuation:!1,fog:!1,depthWrite:!1,transparent:!0,opacity:.9}));ge.frustumCulled=!1,Ie.add(ge)}le.add(Ie);let ke=new jr(t.hemiSky,t.hemiGround,t.hemiIntensity),ze=new vi(t.sunColor,t.sunIntensity);ze.castShadow=!0,ze.shadow.mapSize.set(2048,2048);let De=ze.shadow.camera;De.left=-90,De.right=90,De.top=90,De.bottom=-90,De.near=1,De.far=600,De.updateProjectionMatrix(),ze.shadow.bias=-5e-4,le.add(ke,ze,ze.target);let Ye=n.fog,Ne=n.background,N=new $r(t.fogColor,t.fogDensity),A=new Re(t.skyHorizon);n.fog=N,n.background=A;let j=x+(T-1)*ln,xe=E+(y-1)*ln,_e=()=>i.range(x+30,j-30),fe=()=>i.range(E+30,xe-30),Ce=(V,re,de)=>{let ge=[];for(let ye=0;ye<re&&ge.length<V;ye++){let Le=de(_e(),fe());Le&&ge.push(Le)}return ge},Fe=Ce(320,4e4,(V,re)=>{let de=S(V,re);if(de<4||de>95||!B(V,re,2)||I(V,re)>.6)return null;let ge=i.range(.8,1.45);return{x:V,y:de-.3,z:re,sx:ge,sy:ge*i.range(.9,1.3),sz:ge,ry:i.range(0,Vn),col:16777215,v:i.range(.85,1.15)}}),Oe=Ce(170,4e4,(V,re)=>{let de=S(V,re);if(de<6||de>70||!B(V,re,1.5)||I(V,re)>.6)return null;let ge=i.range(.8,1.3);return{x:V,y:de-.3,z:re,sx:ge,sy:ge*i.range(.9,1.25),sz:ge,ry:i.range(0,Vn),col:16777215,v:i.range(.85,1.15)}}),Ge=Ce(110,4e4,(V,re)=>{let de=S(V,re);if(de<1.8||de>14||!B(V,re,2)||I(V,re)>.5)return null;let ge=i.range(.85,1.25);return{x:V,y:de-.3,z:re,sx:ge,sy:ge,sz:ge,ry:i.range(0,Vn),col:16777215,v:i.range(.9,1.1)}});le.add(di(Es(pS(),.8),new it({vertexColors:!0,flatShading:!0,roughness:.9}),Fe)),le.add(di(Es(mS(),.7),new it({vertexColors:!0,flatShading:!0,roughness:.9}),Oe)),le.add(di(Es(gS(),.6),new it({vertexColors:!0,flatShading:!0,roughness:.9}),Ge));let Se=Ce(300,3e4,(V,re)=>{let de=S(V,re);if(de<1.5)return null;let ge=i.range(1.2,4.5);return B(V,re,ge*.6)?{x:V,y:de+ge*.15,z:re,sx:ge,sy:ge*i.range(.55,.9),sz:ge,ry:i.range(0,Vn),col:i.pick(lS),v:i.range(.85,1.15)}:null}),J=Ce(3,3e4,(V,re)=>{if(S(V,re)>-4)return null;let de=_(V,re);if(g<s[de].width*.5+200||g>800)return null;let ge=i.range(25,45);return{x:V,y:.1*ge,z:re,sx:ge,sy:ge*.45,sz:ge,ry:i.range(0,Vn),col:10260344,v:1}});le.add(di(Es(dS(),.42),new it({color:16777215,flatShading:!0,roughness:.95}),Se.concat(J)));let Me=[],ve=[],ie=[],we=i.int(3,5),oe=0;for(let V=0;V<4e3&&oe<we;V++){let re=_e(),de=fe(),ge=_(re,de),ye=s[ge].width*.5;if(g<ye+25||g>ye+80)continue;let Le=S(re,de);if(Le<6||Le>40||I(re,de)>.35)continue;oe++;let $e=i.int(7,12);for(let Ze=0;Ze<$e;Ze++){let nt=i.range(0,Vn),rt=Math.sqrt(i.next())*18,Tt=re+Math.cos(nt)*rt,Ht=de+Math.sin(nt)*rt,Lt=_(Tt,Ht);if(g<s[Lt].width*.5+6+4+4)continue;let Vt=S(Tt,Ht);if(Vt<3)continue;let Wt=i.range(4,6.5),fn=i.range(3.5,6),P=i.range(4,6.5),Z=i.pick([0,Math.PI/2])+i.range(-.15,.15),ae=Vt-1;if(Me.push({x:Tt,y:ae,z:Ht,ry:Z,sx:Wt,sy:fn,sz:P,col:i.pick(cS),v:1}),ve.push({x:Tt,y:ae+fn,z:Ht,ry:Z,sx:Wt*1.08,sy:i.range(1.8,2.6),sz:P*1.08}),a)for(let ce of[-1,1]){let Q=ce*Wt*.28,Ue=P/2+.03;ie.push({x:Tt+Q*Math.cos(Z)+Ue*Math.sin(Z),y:ae+fn*.55,z:Ht-Q*Math.sin(Z)+Ue*Math.cos(Z),ry:Z})}}}let Ee=new it({color:16777215,flatShading:!0,roughness:.85}),W=new it({color:11818298,flatShading:!0,roughness:.8});if(Me.length){let V=new an(1,1,1).translate(0,.5,0),re=Es(new wn(0,.71,1,4).rotateY(Math.PI/4).translate(0,.5,0),.125);le.add(di(V,Ee,Me),di(re,W,ve))}if(a&&ie.length){let V=new an(1.2,1.1,.12);le.add(di(V,new Xt({color:16761466}),ie,!1))}if(a){let V=0,re=0,de=!1;for(let ge=0;ge<4e3&&!de;ge++){let ye=_e(),Le=fe(),$e=_(ye,Le),Ze=s[$e].width*.5;if(g<Ze+220||g>Ze+420)continue;let nt=S(ye,Le);nt<6||nt>30||(V=ye,re=Le,de=!0)}if(de){let ge=[],ye=[],Le=i.int(9,13);for(let $e=0;$e<Le;$e++){let Ze=V+i.range(-110,110),nt=re+i.range(-110,110),rt=S(Ze,nt);if(rt<2)continue;let Tt=i.range(6,10),Ht=i.range(30,70);ge.push({x:Ze,y:rt,z:nt,sx:Tt,sy:Ht,sz:Tt,col:1777720,v:i.range(.8,1.2)});let Lt=i.pick(uS);for(let Vt=0;Vt<3;Vt++){let Wt=Vt*Vn/3+i.range(0,.5);ye.push({x:Ze+Math.cos(Wt)*Tt*.88,y:rt+Ht*.05,z:nt+Math.sin(Wt)*Tt*.88,ry:-Wt,sy:Ht*.9,col:Lt,v:1})}}le.add(di(new wn(.72,1,1,6).translate(0,.5,0),new it({color:16777215,flatShading:!0,roughness:.7}),ge),di(new an(.5,1,.25).translate(0,.5,0),new Xt({color:16777215}),ye,!1))}}{let V=[],re=[];for(let ge=1;ge<y-1;ge++)for(let ye=1;ye<T-1;ye++){let Le=ge*T+ye,$e=w[Le];if($e<2||$e>30)continue;let Ze=_(x+ye*ln,E+ge*ln);if(g<s[Ze].width*.5+60)continue;(w[Le-1]<0||w[Le+1]<0||w[Le-T]<0||w[Le+T]<0?V:re).push(Le)}let de=V.length?V:re;if(de.length){let ge=i.pick(de),ye=ge%T,Le=(ge-ye)/T,$e=new at(Es(xS(),.6),new it({vertexColors:!0,flatShading:!0,roughness:.6}));$e.position.set(x+ye*ln,w[ge]-.5,E+Le*ln),$e.castShadow=!0,le.add($e)}}let Ae=Ce(4,2e4,(V,re)=>{if(S(V,re)>-3)return null;let de=_(V,re);return g<s[de].width*.5+250||g>900?null:{x:V,y:-.2,z:re,ry:i.range(0,Vn),col:16777215,v:1}});Ae.length&&le.add(di(Es(_S(),.5),new it({vertexColors:!0,flatShading:!0,roughness:.6}),Ae));let R=[],D=[];for(let V=0;V<2e4&&R.length<3;V++){let re=_e(),de=fe(),ge=_(re,de);if(g<s[ge].width*.5+60)continue;let ye=S(re,de);ye<55||R.some(Le=>Math.hypot(Le.x-re,Le.z-de)<200)||R.push({x:re,y:ye,z:de,ry:i.range(0,Vn),speed:i.range(.9,1.5),phase:i.range(0,Vn)})}let O=new an(.7,14,.22).translate(0,7,0),K=new it({color:15659507,flatShading:!0,roughness:.6}),he=null;if(R.length){le.add(di(new wn(.8,.35,30,6).translate(0,15,0),K,R));for(let V of R)D.push(new et().compose(new k(V.x,V.y+30,V.z),new en().setFromAxisAngle(oS,V.ry),new k(1,1,1)));he=new _n(O,K,R.length*3),he.castShadow=!0,le.add(he)}function Pe(V){if(he){for(let re=0;re<R.length;re++){let de=V*R[re].speed+R[re].phase;for(let ge=0;ge<3;ge++)Cm.makeRotationZ(de+ge*Vn/3),Rm.multiplyMatrices(D[re],Cm),he.setMatrixAt(re*3+ge,Rm)}he.instanceMatrix.needsUpdate=!0}}Pe(0);function Be(V,re,de){ze.position.set(de.x+Te.x*200,de.y+Te.y*200,de.z+Te.z*200),ze.target.position.set(de.x,de.y,de.z),Ie.position.set(de.x,0,de.z);for(let ge=0;ge<X;ge++)C.setY(ge,.35*Math.sin(q[ge]*.02+re*.8)+.25*Math.cos(ee[ge]*.017-re*.6));C.needsUpdate=!0,Pe(re)}function He(){n.remove(le),le.traverse(V=>{if(V.geometry&&V.geometry.dispose(),V.material){let re=Array.isArray(V.material)?V.material:[V.material];for(let de of re)de.dispose()}}),ze.shadow.map&&ze.shadow.map.dispose(),le.clear(),n.fog===N&&(n.fog=Ye??null),n.background===A&&(n.background=Ne??null)}return n.add(le),{group:le,sun:ze,update:Be,dispose:He,heightAt:S}}var Vc=[.62,.6,.55],As=[.5,.49,.45],Vh=[.72,.3,.18],Dm=[.6,.24,.15],Gh=[.16,.2,.28],MS=[.2,.38,.3],Nm=[.36,.25,.16],ro=[[.1,.27,.08],[.14,.34,.1],[.07,.2,.06],[.2,.42,.12]],sr=[[.93,.84,.62],[.9,.74,.5],[.94,.9,.8],[.88,.66,.5]],dn=(n,e,t)=>{let i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)};function Hc(n,e,t,i){let s=i*3+1,r=Math.ceil(t/2);return kn(e+2,s+r+1,t+2,1,(o,a,c)=>{let l=o-1,h=c-1;if(a<s){if(l<0||h<0||l>=e||h>=t)return null;if(!(l===0||h===0||l===e-1||h===t-1))return a===s-1?n:null;let d=l===0||l===e-1?h:l,g=l===0||l===e-1?t:e;return a%3===2&&d%3===1&&d<g-1?Gh:a%3===2&&d%3===2&&d<g-1&&dn(l,a,h)>.45?MS:a===0?As:n}let u=a-s;return h>=u-1&&h<=t-u&&u<=r?(l+u)%2?Vh:Dm:null},.14)}function bS(n){return kn(7,23,7,1,(i,s,r)=>{let o=i-1,a=r-1;if(s<17)return o<0||a<0||o>=5||a>=5?null:o===0||a===0||o===4||a===4?(s===6||s===11||s===14)&&(o===2||a===2)?Gh:s===0?As:n:s===16?n:null;let c=s-17;return i>=c&&i<=6-c&&r>=c&&r<=6-c?(i+r)%2?Vh:Dm:null},.14)}function SS(n){let r=[];for(let o=0;o<6;o++)r.push([11+(dn(n,o,1)-.5)*9,13+dn(n,o,2)*6,11+(dn(n,o,3)-.5)*9,3.6+dn(n,o,4)*2.4]);return kn(22,24,22,.7,(o,a,c)=>{if(a<12&&Math.abs(o-11+.5)<1.3&&Math.abs(c-11+.5)<1.3)return Nm;for(let l of r){let h=o-l[0],u=(a-l[1])*1.25,f=c-l[2];if(h*h+u*u+f*f<l[3]*l[3])return ro[Math.floor(dn(o,a,c)*ro.length)]}return null},.22)}function ES(){return kn(14,16,8,.5,(n,e,t)=>{let s=5+Math.floor((n-1)/2)*1.6;return n===0?e<5?(e+t)%3?Vc:As:null:n>=1&&n<13&&e<s?e>=s-1?[.42,.42,.44]:As:n===13&&e<15&&(t===0||t===7)?[.16,.17,.2]:null},.12)}function Hh(n,e){let r=e-3-9;return kn(n,e+2,5,1,(o,a,c)=>{let l=o%22,h=a>=e&&(c===0||c===4);if(a>=e)return h?As:null;if(a>=e-2)return(o+a+c)%3?Vc:As;if(l<4)return(o+a+c)%4?Vc:As;if(a<r)return null;let u=l-4-9+.5,f=a-r;return u*u+f*f>81?(o+a+c)%3?Vc:As:null},.14)}function TS(n){return kn(6,4,6,.5,(t,i,s)=>{let r=t-3+.5,o=s-6/2+.5,a=(i-.8)*1.5,c=2.5+(dn(t+n,i,s)-.5)*1.2;return r*r+a*a+o*o<c*c?ro[Math.floor(dn(t,i+n,s)*ro.length)]:null},.22)}function wS(){let t=[[.12,.3,.14],[.15,.36,.16],[.1,.25,.12]];return kn(6,20,6,.6,(i,s,r)=>{let o=i-3+.5,a=r-6/2+.5;if(s<2)return Math.abs(o)<.6&&Math.abs(a)<.6?Nm:null;let c=(s-2)/18,l=2.6*Math.sin(Math.PI*Math.min(1,.18+c*.82))**.7*(1-c*.55)+.3;return o*o+a*a<l*l?t[Math.floor(dn(i,s,r)*3)]:null},.2)}function Lm(n){let r=(a,c)=>{let l=(a-15+.5)/15,h=(c-15+.5)/(30/2),u=Math.hypot(l,h)+(dn(Math.floor(a/3)+n,0,Math.floor(c/3))-.5)*.28,f=Math.max(0,Math.min(1,(.95-u)/.16)),d=14+Math.floor(dn(Math.floor(a/5),n,Math.floor(c/5))*3)*2;return Math.floor(d*f*f*(3-2*f))},o=[];for(let a=0;a<5;a++){let c=Math.floor(15+(dn(n,a,1)-.5)*14),l=Math.floor(15+(dn(n,a,2)-.5)*14);o.push([c,l,r(c,l),sr[Math.floor(dn(n,a,3)*sr.length)],a===0?7:3])}return kn(30,26,30,1.6,(a,c,l)=>{let h=r(a,l);for(let[d,g,_,m,p]of o){let b=Math.abs(a-d),v=Math.abs(l-g),x=p>3?1:2;if(b<=x&&v<=1&&c>=_&&c<_+p)return c===_+p-2&&b!==x&&v===1?Gh:m;if(b<=x&&v<=1-(c-_-p)&&c>=_+p&&c<_+p+2)return Vh}if(c>=h)return null;if(c===h-1)return dn(a,5,l)>.75?ro[0]:[.36,.56,.2];let u=c%5===0?.86:1,f=.93+.14*dn(Math.floor(a/2),c,Math.floor(l/2));return dn(a,c,l)>.965?ro[2]:[.74*u*f,.71*u*f,.64*u*f]},.1)}function ir(n,e,t){let i=new _n(n,e,t.length),s=new et,r=new en,o=new k,a=new k,c=new k(0,1,0);return t.forEach((l,h)=>{r.setFromAxisAngle(c,l.ry||0),o.set(l.sx??l.s??1,l.sy??l.s??1,l.sz??l.s??1),a.set(l.x,l.y,l.z),s.compose(a,r,o),i.setMatrixAt(h,s),l.color&&i.setColorAt(h,l.color)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,i}function AS(){if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=1024,n.height=192;let e=n.getContext("2d");e.fillStyle="#f2efe8",e.fillRect(0,0,1024,192),e.fillStyle="#d6202a";for(let i of[0,880])for(let s=0;s<2;s++)e.beginPath(),e.moveTo(i+s*72,192),e.lineTo(i+s*72+36,192),e.lineTo(i+s*72+108,0),e.lineTo(i+s*72+72,0),e.fill();e.fillStyle="#23262e",e.font='italic 900 118px "Arial Narrow", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("POLYGON RUSH",512,104);let t=new fi(n);return t.colorSpace=Rt,t.anisotropy=8,t}function Um(n,e,t,i){let s=new pt;s.name="scenery";let r=[],o=()=>{let L=new it({vertexColors:!0,roughness:.9,metalness:0});return r.push(L),L},a=(L,F)=>{F.length&&(r.push(L),s.add(ir(L,o(),F)))},c={x:0,y:0,z:0,heading:0},l=n.length,h=L=>!!Ss(n,(L%l+l)%l,"tunnel"),u=L=>n.pts[Math.floor((L%l+l)%l/n.step)%n.pts.length].width,f=(L,F)=>{let U=1/0;for(let Y=0;Y<n.pts.length;Y+=3){let H=n.pts[Y],ne=(H.x-L)*(H.x-L)+(H.z-F)*(H.z-F);ne<U&&(U=ne)}return Math.sqrt(U)},d=(L,F)=>{let U=Math.floor(L/n.step);for(let Y=0;Y<F/n.step;Y+=4)if(Math.abs(n.pts[(U+Y)%n.pts.length].curv)>.004)return!1;return!h(L)&&!h(L+F/2)&&!h(L+F)},g=[[24,22,-1]];for(let L=380;L<l-220&&g.length<4;L+=70)d(L-10,80)&&(g.push([L,14,t.sign()]),L+=420);let _=[],m=[],p=[],b=[14032938,2777046,15909424,15921906,2793562,9060290,15235614,2042436],v=L=>g.some(([F,U])=>L>F-12&&L<F+U*4+12);for(let[L,F,U]of g)for(let Y=0;Y<F;Y++){let H=L+Y*4,ne=U*(u(H)/2+6+.6);Ft(n,H,ne,c);let ue=c.heading+U*Math.PI/2,me=Math.sin(c.heading),be=Math.cos(c.heading),le=-U*be,te=U*me;_.push({x:c.x+le*3.5,y:c.y-.3,z:c.z+te*3.5,ry:ue});for(let $=0;$<6;$++)for(let se=0;se<4;se++){if(t.next()<.18)continue;let C=-1.6+se*1.05+t.range(-.15,.15),X=1+$*1,q=c.x+le*X+me*C,ee=c.z+te*X+be*C,pe=c.y-.3+2.5+$*.8,Te=new Re(t.pick(b));m.push({x:q,y:pe+.4,z:ee,ry:c.heading,sx:.5,sy:.8,sz:.36,color:Te}),p.push({x:q,y:pe+1,z:ee,ry:c.heading,sx:.36,sy:.36,sz:.36,color:new Re(t.pick([15317386,13208414,9067066,15847334]))}),m.push({x:q-le*.12,y:pe-.1,z:ee-te*.12,ry:c.heading,sx:.46,sy:.3,sz:.5,color:new Re(t.pick([2042436,2829099,3820138,5916210]))}),p.push({x:q,y:pe+1.22,z:ee,ry:c.heading,sx:.4,sy:.12,sz:.4,color:new Re(t.pick([2759698,1118481,14032938,15909424,6965802,15921906]))}),t.next()<.22&&m.push({x:q+me*.32,y:pe+1.05,z:ee+be*.32,ry:c.heading,sx:.14,sy:.6,sz:.14,color:Te})}}if(a(ES(),_),m.length){let L=new an(1,1,1);r.push(L);let F=new it({roughness:.85});r.push(F),s.add(ir(L,F,m),ir(L,F,p));let U=_.map(Y=>({x:Y.x,y:Y.y+8.2,z:Y.z,ry:Y.ry,sx:8,sy:.4,sz:4.05,color:new Re(2303534)}));s.add(ir(L,F,U))}let x=AS(),E=new it({map:x,color:x?16777215:15921128,roughness:.7,side:Ct});r.push(E),x&&r.push(x);let T=new Pn(1,1);r.push(T);let y=[],w=(L,F)=>{if(h(L))return;let U=F*(u(L)/2+6-.22);Ft(n,L,U,c),y.push({x:c.x,y:c.y+.52,z:c.z,ry:c.heading+(F<0?-Math.PI/2:Math.PI/2),sx:9,sy:.92,sz:1})};for(let L=120;L<240;L+=13)w(L,-1);for(let L=30;L<110;L+=13)w(L,1);for(let L=400;L<l-80;L+=260)w(L,-1),w(L+13,-1),w(L+120,1);if(y.length){let L=ir(T,E,y);L.castShadow=!1,s.add(L)}let M=[[],[],[]];for(let L=130;L<l-20;L+=t.range(13,28)){if(v(L)||h(L)||h(L+12)||h(L-12))continue;let U=(t.next()<.82?-1:1)*(u(L)/2+6+t.range(3.4,6.5));Ft(n,L,U,c);let Y=i?i(c.x,c.z):c.y;Y<1.5||M[t.int(0,2)].push({x:c.x,y:Y-.2,z:c.z,ry:t.range(0,6.28),s:t.range(1.3,2.05)})}if(M.forEach((L,F)=>a(SS(11+F*7),L)),i){let L=[];for(let ne=200;ne<l-100;ne+=45)for(let ue of[-1,1]){let me=ue*t.range(70,150);Ft(n,ne,me,c);let be=i(c.x,c.z);be>c.y+6&&be>6&&f(c.x,c.z)>55&&L.push({x:c.x,z:c.z,y:be,score:be-c.y+t.range(0,4)})}L.sort((ne,ue)=>ue.score-ne.score);let F=[];for(let ne of L){if(F.length>=4)break;F.every(ue=>Math.hypot(ue.x-ne.x,ue.z-ne.z)>220)&&F.push(ne)}let U=[{geo:Hc(sr[0],8,7,2),items:[]},{geo:Hc(sr[1],10,7,3),items:[]},{geo:Hc(sr[2],7,6,2),items:[]},{geo:Hc(sr[3],9,8,3),items:[]}],Y=[],H=[];for(let ne of F){for(let ue=0;ue<2;ue++){let me=ne.x+t.range(-12,12),be=ne.z+t.range(-12,12);f(me,be)<45||(Y.push({x:me,y:i(me,be)-.5,z:be,ry:t.int(0,3)*Math.PI/2}),H.push([me,be]))}for(let ue=0;ue<60&&U.reduce((me,be)=>me+be.items.length,0)<F.length*22;ue++){let me=t.range(0,6.28),be=t.range(8,60),le=ne.x+Math.cos(me)*be,te=ne.z+Math.sin(me)*be,$=i(le,te);$<3||f(le,te)<42||H.some(se=>Math.hypot(se[0]-le,se[1]-te)<12)||(H.push([le,te]),t.pick(U).items.push({x:le,y:$-.5,z:te,ry:t.int(0,3)*Math.PI/2}))}}for(let ne of U)a(ne.geo,ne.items);a(bS(sr[2]),Y)}let S=[[],[]];for(let L=115;L<l-10;L+=t.range(4.5,9))if(!h(L)){if(t.next()<.3){L+=t.range(20,60);continue}for(let F of[-1,1]){if(t.next()<.35)continue;let U=F*(u(L)/2+6+t.range(1.4,2.6));Ft(n,L,U,c),S[t.int(0,1)].push({x:c.x,y:c.y-.5,z:c.z,ry:t.range(0,6.28),s:t.range(.8,1.4)})}}S.forEach((L,F)=>a(TS(3+F*5),L));let I=[];for(let L=160;L<l-60;L+=t.range(120,220)){let F=t.sign(),U=t.int(5,9);for(let Y=0;Y<U;Y++){let H=L+Y*4.2;if(h(H))continue;Ft(n,H,F*(u(H)/2+6+4.2),c);let ne=i?i(c.x,c.z):c.y;ne<1.5||I.push({x:c.x,y:ne-.2,z:c.z,ry:t.range(0,6.28),s:t.range(.85,1.2)})}}if(a(wS(),I),i){let L=[[],[],[]],F=[];for(let U=150;U<l-50;U+=t.range(120,220))for(let Y of[-1,1]){if(t.next()<.3)continue;Ft(n,U,Y*t.range(72,125),c);let H=i(c.x,c.z);H<1||f(c.x,c.z)<56||F.some(ne=>Math.hypot(ne[0]-c.x,ne[1]-c.z)<70)||(F.push([c.x,c.z]),L[t.int(0,2)].push({x:c.x,y:H-3,z:c.z,ry:t.range(0,6.28),s:t.range(1.2,1.9)}))}L.forEach((U,Y)=>a(Lm(17+Y*13),U))}{let L=[],F=[],U=new Re(12172998),Y=new Re(7172730);for(let H=0;H<l;H+=4){if(h(H)||v(H))continue;let ne=u(H)/2+6-.75;Ft(n,H,ne,c);let ue=c.x,me=c.y,be=c.z,le=c.heading;L.push({x:ue,y:me+.4,z:be,ry:le,sx:.12,sy:.8,sz:.12,color:Y}),Ft(n,H+4,u(H+4)/2+6-.75,c);let te=(ue+c.x)/2,$=(me+c.y)/2,se=(be+c.z)/2,C=Math.hypot(c.x-ue,c.z-be)+.05,X=Math.atan2(c.x-ue,c.z-be);for(let q of[.42,.72])F.push({x:te,y:$+q,z:se,ry:X,sx:.07,sy:.2,sz:C,color:U})}if(L.length){let H=new an(1,1,1),ne=new it({roughness:.35,metalness:.85});r.push(H,ne),s.add(ir(H,ne,L),ir(H,ne,F))}}if(i){let L=[];for(let H=0;H<400&&L.length<16;H++){let ne=t.range(n.bounds.minX-420,n.bounds.maxX+420),ue=t.range(n.bounds.minZ-420,n.bounds.maxZ+420),me=f(ne,ue);i(ne,ue)>-3||me<90||me>520||L.some(be=>Math.hypot(be.x-ne,be.z-ue)<60)||L.push({x:ne,y:-.3,z:ue,ry:t.range(0,6.28),s:t.range(.9,1.5)})}let F=[.93,.93,.9],U=[.98,.97,.93],Y=[.55,.36,.2];a(kn(5,18,14,.7,(H,ne,ue)=>{let me=Math.abs(ue-6.5),be=Math.abs(H-2);return ne<2?be<=2-(ne===0?1:0)-(me>5?1:0)&&me<7-(ne===0?1:0)?ne===1&&be<2?Y:F:null:H===2&&ue===7?[.3,.26,.22]:H===2&&ue>7&&ue<13&&ne<17-(ue-7)*2.6||H===2&&ue<7&&ue>1&&ne<14-(7-ue)*2.4?U:null},.06),L)}{Ft(n,0,0,c);let L=c.x,F=c.y,U=c.z,Y=c.heading,H=Math.sin(Y),ne=Math.cos(Y),ue=-ne,me=H,be=(te,$,se)=>f(te,$)>se,le=!1;for(let te of[430,500,380,580,660]){for(let $ of[70,130,0,-70,190,-140]){if(le)break;let se=L+H*te+ue*$,C=U+ne*te+me*$;if(!be(se,C,85))continue;let X=i?Math.max(-2,i(se,C)):F;a(Lm(101),[{x:se,y:X-3,z:C,ry:Y+.6,s:2.3}]);let q=se-H*95-ue*30,ee=C-ne*95-me*30;if(be(q,ee,45)&&be(q+ue*90,ee+me*90,40)&&be(q-ue*90,ee-me*90,40)){let pe=i?Math.max(-1,i(q,ee)):F;a(Hh(198,24),[{x:q,y:Math.min(pe,F)-5,z:ee,ry:Y}])}le=!0}if(le)break}}for(let L of[1,-1]){let F=!0;for(let Y of[210,270,330,390])Ft(n,Y,L*62,c),f(c.x,c.z)<46&&(F=!1);if(!F||L<0)continue;Ft(n,300,L*62,c);let U=i?i(c.x,c.z):c.y;a(Hh(198,22),[{x:c.x,y:U-4,z:c.z,ry:c.heading-Math.PI/2}]);break}let B=-1,z=-1/0;for(let L=300;L<l-300;L+=40){let F=Math.floor(L/n.step),U=0;for(let H=0;H<60;H+=6)U+=Math.abs(n.pts[(F+H)%n.pts.length].curv);let Y=-U*400+t.range(0,1)-(h(L)||h(L+100)?100:0);Y>z&&(z=Y,B=L)}if(B>0)for(let L of[1,-1]){Ft(n,B+90,L*95,c);let F=i?i(c.x,c.z):c.y;if(F<2)continue;a(Hh(198,20),[{x:c.x,y:Math.min(F,c.y)-4,z:c.z,ry:c.heading-Math.PI/2}]);break}return{group:s,dispose(){for(let L of r)L.dispose?.()}}}function RS(n,e){let t=n.length,i=new Float64Array(t),s=0;for(let r=0;r<t;r++){let o=0;s=0;for(let a=Math.max(0,r-e);a<=Math.min(t-1,r+e);a++)s+=n[a],o++;i[r]=s/o}return i}function Wh(n){let e=n.x.length,t=n.step,i=n.x,s=n.y,r=n.z,o=new Float64Array(e),a=new Float64Array(e),c=new Float64Array(e);for(let y=0;y<e;y++){let w=Math.max(0,y-1),M=Math.min(e-1,y+1),S=i[M]-i[w],I=r[M]-r[w],B=Math.hypot(S,I)||1e-9;o[y]=S/B,a[y]=I/B,c[y]=(s[M]-s[w])/B}let l=new Float64Array(e);for(let y=1;y<e-1;y++){let w=-a[y],M=o[y];l[y]=((o[y+1]-o[y-1])*w+(a[y+1]-a[y-1])*M)/(2*t)}l[0]=l[1],l[e-1]=l[e-2];let h=RS(l,12),u=new Float64Array(e);for(let y=0;y<e;y++)u[y]=Math.min(95,Math.sqrt(30/Math.max(1e-6,Math.abs(h[y]))));for(let y=e-2;y>=0;y--)u[y]=Math.min(u[y],Math.sqrt(u[y+1]**2+80*t));for(let y=1;y<e;y++)u[y]=Math.min(u[y],Math.sqrt(u[y-1]**2+40*t));let f=new Array(e),d=1/0,g=-1/0,_=1/0,m=-1/0,p=1/0,b=0;for(let y=0;y<e;y++){let w=Math.hypot(1,c[y]);f[y]={s:y*t,x:i[y],y:s[y],z:r[y],tx:o[y]/w,ty:c[y]/w,tz:a[y]/w,rx:-a[y],rz:o[y],width:n.width,curv:h[y],vmax:u[y],slope:c[y]},i[y]<d&&(d=i[y]),i[y]>g&&(g=i[y]),r[y]<_&&(_=r[y]),r[y]>m&&(m=r[y]);let M=1/Math.max(1e-9,Math.abs(h[y]));M<p&&(p=M),Math.abs(c[y])>b&&(b=Math.abs(c[y]))}let v=[],x=[];for(let y of n.features)y.type==="tunnel"?v.push({type:"tunnel",s0:y.s0,s1:y.s1,name:y.name}):x.push({s0:y.s0,s1:y.s1,name:y.name});let E=(e-1)*t,T=0;for(let y=0;y<e;y++)T+=t/Math.max(5,u[y]);return{seed:"REAL:"+n.id,attempts:1,open:!0,real:n,raceStart:n.raceStart||0,raceEnd:Math.min(n.raceEnd||E,E),length:E,step:t,count:e,pts:f,features:v,bridges:x,bounds:{minX:d,maxX:g,minZ:_,maxZ:m},stats:{minRadius:p,maxSlope:b,lapTimeEstimate:T,corners:0}}}var Fm=["torre","castello","borgo","chiesa","agrumeto","peschereccio","casello"];function CS(n,e,t){let i=[],s=n.length,r=l=>{let h=1/0,u=0;for(let f=0;f<n.count;f+=5){let d=n.pts[f],g=(d.x-l.x)**2+(d.z-l.z)**2;g<h&&(h=g,u=f)}return{dist:Math.sqrt(h),q:n.pts[u]}},o={},a=(l,h)=>(o[l]=(o[l]||0)+1)<=h,c=e.places.map(l=>({p:l,n:r(l)})).filter(l=>l.n.dist<1600&&l.n.q.s>150&&l.n.q.s<s-150).sort((l,h)=>l.n.dist-h.n.dist);for(let{p:l,n:h}of c)i.some(u=>u.x!==void 0&&Math.hypot(u.x-l.x,u.z-l.z)<250)||(l.kind==="castle"?/^torre/i.test(l.name)?a("torre",2)&&i.push({prop:"torre",x:l.x,z:l.z,height:48,label:l.name}):/castel|rocca|forte|fort/i.test(l.name)&&a("castello",3)&&i.push({prop:"castello",x:l.x,z:l.z,width:170,label:l.name}):l.kind==="place"&&(l.rank==="village"||l.rank==="town"||l.rank===void 0)&&(t(l.x,l.z)-h.q.y>120&&h.dist>250?a("borgo",3)&&i.push({prop:"borgo",x:l.x,z:l.z,width:300}):h.dist>90&&h.dist<450&&a("chiesa",3)&&i.push({prop:"chiesa",x:l.x,z:l.z,width:46})));for(let l=900,h=0;l<s-600;l+=1300,h++){let u=n.pts[Math.round(l/n.step)];for(let f of[1,-1]){let d=f*560;if(t(u.x+u.rx*d,u.z+u.rz*d)<=0&&t(u.x+u.rx*d*1.3,u.z+u.rz*d*1.3)<=0)h%2===0&&i.push({prop:"peschereccio",s:l,d:d+h%3*40*f,width:34,sea:!0});else if(h%2===1){let g=f*78,_=t(u.x+u.rx*g,u.z+u.rz*g);_>1&&Math.abs(_-u.y)<14&&i.push({prop:"agrumeto",s:l,d:g,width:70})}}}return i}function Om({track:n,data:e,baked:t,heightAt:i,clearance:s}){let r=new pt;r.name="real-props";let o=[],a=[];if(!t)return{group:r,placed:o,skipped:a,dispose(){}};let c=new Gi({vertexColors:!0}),l=new Map,h=n.length,u=(f,d)=>{let g=1/0,_=0;for(let m=0;m<n.count;m+=2){let p=n.pts[m],b=(p.x-f)**2+(p.z-d)**2;b<g&&(g=b,_=m)}return{q:n.pts[_],dist:Math.sqrt(g)}};for(let f of CS(n,e,i)){let d=t[f.prop];if(!d?.cells?.length)continue;let g=d._ext;if(!g){let w=[1/0,1/0,1/0],M=[-1/0,-1/0,-1/0];for(let S=0;S<d.cells.length;S+=4)for(let I=0;I<3;I++)w[I]=Math.min(w[I],d.cells[S+I]),M[I]=Math.max(M[I],d.cells[S+I]+1);g=d._ext=[M[0]-w[0],M[1]-w[1],M[2]-w[2]]}let _=f.height?f.height/g[1]:f.width/Math.max(g[0],g[2]),m=Math.hypot(g[0],g[2])*_/2,p,b;if(f.x!==void 0)p=f.x,b=f.z;else{let w=n.pts[Math.max(0,Math.min(n.count-1,Math.round(f.s/n.step)))];p=w.x+w.rx*f.d,b=w.z+w.rz*f.d}let v=u(p,b);if(v.dist-m<s){if(f.x===void 0||v.dist<1){a.push(f.prop+" : trop pr\xE8s de la route");continue}let w=(m+s+2)/v.dist;if(p=v.q.x+(p-v.q.x)*w,b=v.q.z+(b-v.q.z)*w,v=u(p,b),v.dist-m<s){a.push(f.prop+" : trop pr\xE8s de la route");continue}}let x;if(f.sea){if(i(p,b)>0){a.push(f.prop+" : pas en mer");continue}x=-.12*_*g[1]}else{x=1/0;for(let[w,M]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]])x=Math.min(x,i(p+w*m*.6,b+M*m*.6));x=Math.max(x,.2)-.5}let E=f.prop+"@"+_.toFixed(3),T=l.get(E);T||l.set(E,T=bm(d.cells,_));let y=new at(T,c);y.name="prop-"+f.prop,y.position.set(p,x,b),y.rotation.y=Math.atan2(v.q.x-p,v.q.z-b),y.updateMatrix(),y.matrixAutoUpdate=!1,r.add(y),o.push({prop:f.prop,label:f.label||null,s:v.q.s,dist:v.dist,x:p,y:x,z:b,size:_})}return{group:r,placed:o,skipped:a,dispose(){c.dispose();for(let f of l.values())f.dispose()}}}var Xh=.12,IS=8200,PS=(n,e,t=1.08,i=1.45)=>{let s=(n>>16&255)/255,r=(n>>8&255)/255,o=(n&255)/255,a=.3*s+.59*r+.11*o,c=(.38+(a-.38)*1.35)/Math.max(a,.001);s*=c,r*=c,o*=c,a=.3*s+.59*r+.11*o,s=Math.min(1,Math.max(0,(a+(s-a)*i)*t)),r=Math.min(1,Math.max(0,(a+(r-a)*i)*t)),o=Math.min(1,Math.max(0,(a+(o-a)*i)*t)),e[0]=s,e[1]=r,e[2]=o};function na(n,e,{seaCut:t=.25,yOffset:i=0,tint:s=null}={}){let{cell:r,ix:o,iz:a,h:c,c:l}=n,h=o.length,u=1/0,f=-1/0,d=1/0,g=-1/0;for(let U=0;U<h;U++)o[U]<u&&(u=o[U]),o[U]>f&&(f=o[U]),a[U]<d&&(d=a[U]),a[U]>g&&(g=a[U]);let _=h?g-d+1:0,m=new Float32Array(h?(f-u+1)*_:0).fill(NaN),p=(U,Y)=>U<u||U>f||Y<d||Y>g?-1:(U-u)*_+(Y-d),b={get(U){if(U<0)return;let Y=m[U];return Y===Y?Y:void 0}},v=new Float32Array(h);for(let U=0;U<h;U++)v[U]=Math.floor(c[U]/10/e)*e,m[(o[U]-u)*_+(a[U]-d)]=v[U];let x=[1,-1,0,0],E=[0,0,1,-1],T=new Float32Array(h*4),y=new Uint8Array(h),w=0;for(let U=0;U<h;U++)if(!(c[U]/10<=t)){y[U]=1,w++;for(let Y=0;Y<4;Y++){let H=b.get(p(o[U]+x[Y],a[U]+E[Y]));H!==void 0&&H<v[U]?(T[U*4+Y]=H,w++):T[U*4+Y]=NaN}}let M=new Float32Array(w*18),S=new Float32Array(w*18),I=new Float32Array(w*18),B=0,z=[0,0,0],L=(U,Y,H,ne,ue,me,be,le,te,$,se,C,X,q,ee,pe,Te,Ie)=>{M[B]=U,M[B+1]=Y,M[B+2]=H,M[B+3]=ne,M[B+4]=ue,M[B+5]=me,M[B+6]=be,M[B+7]=le,M[B+8]=te,M[B+9]=U,M[B+10]=Y,M[B+11]=H,M[B+12]=be,M[B+13]=le,M[B+14]=te,M[B+15]=$,M[B+16]=se,M[B+17]=C;for(let G=0;G<18;G+=3)S[B+G]=X,S[B+G+1]=q,S[B+G+2]=ee,I[B+G]=pe,I[B+G+1]=Te,I[B+G+2]=Ie;B+=18};for(let U=0;U<h;U++){if(!y[U])continue;let Y=v[U];PS(l[U],z),s&&s(z,(o[U]+.5)*r,(a[U]+.5)*r,Y);let H=.92+.16*((o[U]*73856093^a[U]*19349663)>>>0)/4294967295,ne=z[0]*H,ue=z[1]*H,me=z[2]*H,be=o[U]*r,le=a[U]*r,te=be+r,$=le+r,se=Y+i;L(be,se,le,be,se,$,te,se,$,te,se,le,0,1,0,ne,ue,me);let C=.2+.45*ne,X=.19+.42*ue,q=.17+.38*me,ee=T[U*4];ee===ee&&L(te,ee+i,$,te,se,$,te,se,le,te,ee+i,le,1,0,0,C,X,q),ee=T[U*4+1],ee===ee&&L(be,ee+i,le,be,se,le,be,se,$,be,ee+i,$,-1,0,0,C,X,q),ee=T[U*4+2],ee===ee&&L(be,ee+i,$,be,se,$,te,se,$,te,ee+i,$,0,0,1,C,X,q),ee=T[U*4+3],ee===ee&&L(te,ee+i,le,te,se,le,be,se,le,be,ee+i,le,0,0,-1,C,X,q)}let F=new xt;return F.setAttribute("position",new mt(M,3)),F.setAttribute("normal",new mt(S,3)),F.setAttribute("color",new mt(I,3)),F.computeBoundingSphere(),{geo:F,heights:b,key:p,q:v}}function Ki(n,e,t){let i=new _n(n,e,t.length),s=new et,r=new en,o=new k,a=new k,c=new k(0,1,0);return t.forEach((l,h)=>{r.setFromAxisAngle(c,l.ry||0),o.set(l.sx??1,l.sy??1,l.sz??1),a.set(l.x,l.y,l.z),s.compose(a,r,o),i.setMatrixAt(h,s),l.color&&i.setColorAt(h,l.color)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.frustumCulled=!1,i}function LS(n){if(typeof document>"u")return null;let e=document.createElement("canvas");e.width=512,e.height=192;let t=e.getContext("2d");t.fillStyle="#0c7a43",t.fillRect(0,0,512,192),t.strokeStyle="#ffffff",t.lineWidth=8,t.strokeRect(8,8,496,176),t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.font="bold 62px Arial, Helvetica, sans-serif",t.fillText(n[0],256,n[1]?70:96,470),n[1]&&(t.font="bold 44px Arial, Helvetica, sans-serif",t.fillText(n[1],256,136,470));let i=new fi(e);return i.colorSpace=Rt,i.anisotropy=8,i}function Bm(n,e){e==="near"?n._near=n._near||na(n.near,1):e==="mid"&&(n._mid=n._mid||na(n.mid,4,{yOffset:-3}))}function zm(n,e,t,i){let s=e.real,r=new pt;r.name="environment";let o=[],a=J=>(o.push(J),J),c=!!t.night,l=()=>tr(a(new it({vertexColors:!0,roughness:.95,metalness:0,side:Ct})),1,1),h=s._near||na(s.near,1);s._near=null;let u=new at(a(h.geo),l());u.receiveShadow=!0,u.name="real-terrain-near";let f=s._mid||na(s.mid,4,{yOffset:-3});s._mid=null;let d=new at(a(f.geo),tr(a(new it({vertexColors:!0,roughness:1,side:Ct})),8,.7));d.name="real-terrain-mid";let g=new Re(t.skyHorizon),_=(e.bounds.minX+e.bounds.maxX)/2,m=(e.bounds.minZ+e.bounds.maxZ)/2,p=na(s.far,60,{tint:(J,Me,ve,ie)=>{let we=Math.hypot(Me-_,ve-m),oe=Math.min(.82,1-Math.exp(-we/3e4)),Ee=ie>2300?.5:0;J[0]=(J[0]+(1-J[0])*Ee)*(1-oe)+g.r*oe,J[1]=(J[1]+(1-J[1])*Ee)*(1-oe)+g.g*oe,J[2]=(J[2]+(1-J[2])*Ee)*(1-oe)+g.b*oe}}),b=new at(a(p.geo),a(new Xt({vertexColors:!0,fog:!1,side:Ct})));b.name="real-terrain-far",b.scale.setScalar(Xh),b.frustumCulled=!1,b.renderOrder=-5,r.add(u,d,b);let v=(J,Me)=>{let ve=s.near.cell,ie=h.heights.get(h.key(Math.floor(J/ve),Math.floor(Me/ve)));if(ie!==void 0)return ie;let we=s.mid.cell,oe=f.heights.get(f.key(Math.floor(J/we),Math.floor(Me/we)));return oe!==void 0?oe-3:-5},x=new at(a(new Pn(6e4,6e4)),a(new it({color:t.seaColor,roughness:.25,metalness:.2})));x.rotation.x=-Math.PI/2,x.position.y=.05,x.name="real-sea",r.add(x);let E=new k(...t.sunDir).normalize(),T=a(new Et({side:Jt,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new Re(t.skyTop)},uHor:{value:new Re(t.skyHorizon)},uSun:{value:new Re(t.sunColor)},uSunDir:{value:E}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uTop, uHor, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = mix(uHor, uTop, pow(max(d.y, 0.0), 0.5));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 600.0) * 3.0 + pow(s, 14.0) * 0.25);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`})),y=new at(a(new _s(IS,32,16)),T);y.renderOrder=-10,y.frustumCulled=!1,r.add(y);let w=n.fog,M=n.background;n.fog=new $r(t.fogColor,(t.fogDensity||5e-4)*.3),n.background=new Re(t.skyHorizon);let S=new jr(t.hemiSky,t.hemiGround,t.hemiIntensity),I=new vi(t.sunColor,t.sunIntensity);I.castShadow=!0,I.shadow.mapSize.set(2048,2048);let B=I.shadow.camera;B.left=-90,B.right=90,B.top=90,B.bottom=-90,B.near=1,B.far=500,I.shadow.bias=-5e-4,r.add(S,I,I.target);let z=s.buildings,L=[15983808,15321498,16117730,14924172,14472128,15784368,13620956],F=[11884346,11030070,14275268,13222064,9390646],U=[],Y=[],H=60,ne=new Map;for(let J=0;J<e.count;J+=3){let Me=e.pts[J],ve=Math.floor(Me.x/H)+","+Math.floor(Me.z/H),ie=ne.get(ve);ie||ne.set(ve,ie=[]),ie.push(Me)}let ue=s.width/2+6+2,me=(J,Me,ve,ie)=>{let we=null,oe=Math.max(ve,ie)+ue;for(let Ee=Math.floor((J-oe)/H);Ee<=Math.floor((J+oe)/H);Ee++)for(let W=Math.floor((Me-oe)/H);W<=Math.floor((Me+oe)/H);W++){let Ae=ne.get(Ee+","+W);if(Ae)for(let R of Ae){let D=Math.max(0,Math.abs(R.x-J)-ve),O=Math.max(0,Math.abs(R.z-Me)-ie);D*D+O*O<ue*ue&&(we===null||R.y<we)&&(we=R.y)}}return we},be=0,le=0;for(let J=0;J<z.x.length;J++){let ve=(z.l[J]>0?Math.min(z.l[J],9):1+Math.floor(i.next()*3)+(z.w[J]*z.d[J]>300?1:0))*3.1,ie=Math.max(v(z.x[J],z.z[J]),.3),we=me(z.x[J],z.z[J],z.w[J]/2+.3,z.d[J]/2+.3);if(we!==null){let oe=we-3.2-ie;if(oe<3){be++;continue}ve>oe&&(ve=oe,le++)}U.push({x:z.x[J],y:ie+ve/2-.5,z:z.z[J],sx:z.w[J],sy:ve+1,sz:z.d[J],color:new Re(i.pick(L))}),Y.push({x:z.x[J],y:ie+ve+.35,z:z.z[J],sx:z.w[J]+.6,sy:.7,sz:z.d[J]+.6,color:new Re(i.pick(F))})}let te=a(new an(1,1,1));if(U.length){let J=Sm(tr(a(new it({roughness:.9})),1.5,.8)),Me=a(new it({roughness:.85})),ve=Ki(te,J,U),ie=Ki(te,Me,Y);ve.name="real-buildings",ve.castShadow=!0,r.add(ve,ie)}let $=s.trees,se=0;if($&&$.x.length){let J=[],Me=[],ve=new Re(7031346),ie=new Re;for(let oe=0;oe<$.x.length;oe++){let Ee=$.x[oe],W=$.z[oe];if(me(Ee,W,2.5,2.5)!==null)continue;let Ae=Math.sin(Ee*12.9898+W*78.233)*43758.5453,R=$.r?$.r[oe]/1e3:Ae-Math.floor(Ae),D=$.y[oe],O=.75+.5*R;if($.k[oe])if(R<.55){let K=7+6*R;Me.push({x:Ee,y:D+K/2+.6,z:W,sx:1.7,sy:K,sz:1.7,color:ie.setRGB(.1*O,.26*O,.13*O).clone()})}else{let K=6+5*R;J.push({x:Ee,y:D+K/2,z:W,sx:.7,sy:K,sz:.7,color:ve}),Me.push({x:Ee,y:D+K+.9,z:W,sx:6.5,sy:2.2,sz:6.5,color:ie.setRGB(.14*O,.34*O,.16*O).clone()})}else{let K=3+2.4*R;J.push({x:Ee,y:D+.9,z:W,sx:.6,sy:1.8,sz:.6,color:ve}),Me.push({x:Ee,y:D+1.6+K/2,z:W,sx:K,sy:K*.85,sz:K,color:ie.setRGB(.3*O,.44*O,.2*O).clone()})}}se=Me.length;let we=tr(a(new Gi),1.1,.9);if(J.length){let oe=Ki(te,a(new Gi),J);oe.name="real-trunks",r.add(oe)}if(Me.length){let oe=Ki(te,we,Me);oe.name="real-trees",r.add(oe)}}let C={x:0,y:0,z:0,heading:0},X=s.width/2,q=new Re(12170925),ee=new Re(10131343),pe=[],Te=[];for(let J of e.bridges){for(let Me=J.s0+6;Me<J.s1-2;Me+=34){Ft(e,Me,0,C);let ve=v(C.x,C.z),ie=C.y-1.6-ve;ie<3||(pe.push({x:C.x,y:ve+ie/2,z:C.z,ry:C.heading,sx:X*1.5,sy:ie,sz:2.4,color:ee}),pe.push({x:C.x,y:C.y-1.2,z:C.z,ry:C.heading,sx:X*2+5,sy:1.2,sz:3.6,color:q}))}for(let Me=J.s0;Me<J.s1;Me+=8){for(let ve of[-1,1])Ft(e,Me+4,ve*(X+6+.4),C),Te.push({x:C.x,y:C.y-.9,z:C.z,ry:C.heading,sx:.9,sy:1.8,sz:8.3,color:q});Ft(e,Me+4,0,C),Te.push({x:C.x,y:C.y-1.25,z:C.z,ry:C.heading,sx:X*2+12,sy:.9,sz:8.3,color:ee})}}let Ie=tr(a(new it({roughness:.9})),.8,.6);if(pe.length){let J=Ki(te,Ie,pe);J.castShadow=!0,J.name="real-piers",r.add(J)}Te.length&&r.add(Ki(te,Ie,Te));let G=e.length,Ve=J=>!!Ss(e,Math.max(0,Math.min(G-1,J)),"tunnel"),ke=[],ze=[],De=new Re(12764876),Ye=new Re(8225160),Ne={x:0,y:0,z:0,heading:0};for(let J=0;J<G-4;J+=4)if(!Ve(J))for(let Me of[-1,1]){let ve=Me*(X+6-.7);Ft(e,J,ve,C),Ft(e,J+4,ve,Ne),ke.push({x:C.x,y:C.y+.4,z:C.z,ry:C.heading,sx:.12,sy:.8,sz:.12,color:Ye});let ie=Math.hypot(Ne.x-C.x,Ne.z-C.z)+.05,we=Math.atan2(Ne.x-C.x,Ne.z-C.z);for(let oe of[.42,.72])ze.push({x:(C.x+Ne.x)/2,y:(C.y+Ne.y)/2+oe,z:(C.z+Ne.z)/2,ry:we,sx:.07,sy:.2,sz:ie,color:De})}let N=a(new it({roughness:.35,metalness:.85}));ke.length&&r.add(Ki(te,N,ke),Ki(te,N,ze));let A=Om({track:e,data:s,baked:s.props,heightAt:v,clearance:ue});r.add(A.group),o.push(A);let j=[];for(let J of s.places){if(J.kind!=="place")continue;let Me=1/0,ve=0;for(let we=0;we<e.count;we+=10){let oe=e.pts[we],Ee=(oe.x-J.x)**2+(oe.z-J.z)**2;Ee<Me&&(Me=Ee,ve=we)}let ie=Math.sqrt(Me);ie<2600&&j.push({name:J.name,s:ve*e.step,dist:ie})}j.sort((J,Me)=>J.s-Me.s);let xe=a(new Pn(1,1)),_e=[];for(let J of j){if(_e.some(oe=>Math.abs(oe.s-J.s)<500)||J.s<120||J.s>G-150||Ve(J.s)||Ve(J.s-60))continue;_e.push(J);let Me=LS([J.name,J.dist>600?`${(J.dist/1e3).toFixed(1).replace(".",",")} km`:""]),ve=a(new Xt({map:Me,color:Me?16777215:817731,side:Ct}));Me&&a(Me),Ft(e,J.s,X+6+2.2,C);let ie=new at(xe,ve);ie.scale.set(7.5,2.8,1),ie.position.set(C.x,C.y+5.2,C.z),ie.rotation.y=C.heading+Math.PI,r.add(ie);let we=new at(te,N);we.scale.set(.3,5.2,.3),we.position.set(C.x,C.y+2.2,C.z),r.add(we)}let fe=(J,Me,ve)=>{let ie=Math.sin(J*127.1+Me*311.7+ve*74.7)*43758.5453;return ie-Math.floor(ie)},Ce=kn(5,5,5,.5,(J,Me,ve)=>{let ie=J-2,we=ve-2,oe=(Me-1.6)*1.2;if(ie*ie+oe*oe+we*we>5.4+fe(J,Me,ve))return null;let Ee=fe(J+3,Me,ve+7);return Ee>.72?[.92,.42,.6]:Ee>.62?[.96,.93,.9]:[.16,.38,.17]},.2);a(Ce);let Fe=[];for(let J=60;J<G-20;J+=i.range(5,11)){if(Ve(J)||e.bridges.some(ve=>J>ve.s0-4&&J<ve.s1+4))continue;if(i.next()<.25){J+=i.range(15,50);continue}let Me=i.next()<.5?-1:1;Ft(e,J,Me*(X+6+i.range(1.2,2.4)),C),Fe.push({x:C.x,y:C.y-.5,z:C.z,ry:i.range(0,6.28),sx:i.range(.8,1.3),sy:i.range(.8,1.3),sz:i.range(.8,1.3)})}if(Fe.length){let J=Ki(Ce,a(new it({vertexColors:!0,roughness:.9})),Fe);J.castShadow=!0,J.name="real-oleanders",r.add(J)}n.add(r);let Oe=new k;function Ge(J,Me,ve){y.position.set(ve.x,0,ve.z),x.position.x=ve.x,x.position.z=ve.z,I.position.copy(ve).addScaledVector(E,200),I.target.position.copy(ve),Oe.copy(ve),b.position.set(Oe.x*(1-Xh),-2,Oe.z*(1-Xh))}function Se(){n.remove(r),n.fog&&n.fog!==w&&(n.fog=w||null),n.background=M||null;for(let J of o)J.dispose?.()}return{group:r,sun:I,update:Ge,dispose:Se,heightAt:v,places:_e,allPlaces:j,buildingStats:{kept:U.length,dropped:be,lowered:le},treeCount:se,props:A.placed,propsSkipped:A.skipped}}var km="polygon-rush-v3-records",DS=new Set(["rally","rain"]);function Hm(){try{let n=globalThis.localStorage?.getItem(km),e=n?JSON.parse(n):null;if(e&&typeof e=="object")return{splits:e.splits||{},total:e.total??null,runs:e.runs||0,finishes:e.finishes||0}}catch{}return{splits:{},total:null,runs:0,finishes:0}}function Gc(n){try{return globalThis.localStorage?.setItem(km,JSON.stringify(n)),!0}catch{return!1}}function qh(n){if(!Number.isFinite(n))return"\u2013";let e=Math.floor(n/60),t=n-e*60;return`${e}'${String(Math.floor(t)).padStart(2,"0")}"${Math.floor(t*10%10)}`}function Vm(n){let e=Math.abs(n);return`${n<0?"\u2212":"+"}${e>=60?qh(e):e.toFixed(1).replace(".",'"')}`}function Gm(n,e,t){let i=n.splits[e]??null,s=i===null||t<i;return s&&(n.splits[e]=Math.round(t*1e3)/1e3),{time:t,best:i,delta:i===null?null:t-i,record:s}}function Wm(n,e){let t=n.total,i=t===null||e<t;return i&&(n.total=Math.round(e*1e3)/1e3),{time:e,best:t,delta:t===null?null:e-t,record:i}}function Xm(n){return n.filter(e=>!DS.has(e.id))}function qm(n=document.body){let e=document.createElement("div");e.style.cssText="position:fixed;left:50%;top:13vmin;transform:translateX(-50%);display:none;gap:1.2vmin;z-index:35;font-family:Arial,Helvetica,sans-serif;pointer-events:auto;align-items:stretch";let t=document.createElement("div");t.style.cssText="position:fixed;left:50%;top:11.6vmin;transform:translateX(-50%);width:54vmin;height:0.7vmin;display:none;background:rgba(255,255,255,.18);z-index:35;border-radius:1vmin;overflow:hidden";let i=document.createElement("div");i.style.cssText="height:100%;width:100%;background:#ffd23f;transform-origin:left center",t.appendChild(i),n.append(t,e);let s=[],r=null,o=0,a=0;function c(){e.style.display="none",t.style.display="none",s=[],r=null}function l(f){if(!s.length)return!1;let d=s[Math.max(0,Math.min(s.length-1,f))],g=r;return c(),g?.(d),!0}function h(f,d,g=9){c(),f.length&&(s=f.slice(0,3),r=d,o=a=g,e.textContent="",s.forEach((_,m)=>{let p=document.createElement("button");p.type="button",p.style.cssText=`all:unset;cursor:pointer;width:27vmin;padding:1.1vmin 1.4vmin;border-radius:1vmin;color:#fff;background:rgba(12,18,34,.82);border:0.3vmin solid ${m===0?"#ffd23f":"rgba(255,255,255,.28)"};box-sizing:border-box`;let b=v=>String(v).replace(/[&<>]/g,x=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[x]);p.innerHTML=`<div style="font:bold 2.1vmin Arial;display:flex;gap:1vmin;align-items:center"><span style="background:#ffd23f;color:#111;border-radius:.6vmin;padding:.1vmin .9vmin">${m+1}</span><span>${b(_.icon||"")} ${b(_.name)}</span></div><div style="font:1.55vmin Arial;color:#8ef0a8;margin-top:.7vmin">\u25B2 ${b(_.pro)}</div><div style="font:1.55vmin Arial;color:#ff9a8a;margin-top:.3vmin">\u25BC ${b(_.con)}</div>`,p.addEventListener("click",()=>l(m)),e.appendChild(p)}),e.style.display="flex",t.style.display="block")}function u(f){s.length&&(o-=f,i.style.transform=`scaleX(${Math.max(0,o/a)})`,o<=0&&l(0))}return{show:h,pick:l,update:u,hide:c,get active(){return s.length>0},dispose(){e.remove(),t.remove()}}}var Wc=class extends Yi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Qh(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new pf(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=bs.extractUrlBase(e);o=bs.resolveURL(l,this.path)}else o=bs.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Go(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Jm){try{o[gt.KHR_BINARY_GLTF]=new mf(e)}catch(u){s&&s(u);return}r=JSON.parse(o[gt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new bf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case gt.KHR_MATERIALS_UNLIT:o[u]=new Jh;break;case gt.KHR_DRACO_MESH_COMPRESSION:o[u]=new gf(r,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:o[u]=new xf;break;case gt.KHR_MESH_QUANTIZATION:o[u]=new _f;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function NS(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Kh=class{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Re(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],yn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new vi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new pc(h),l.distance=u;break;case"spot":l=new Qr(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ji(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}},Jh=class{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return Xt}extendParams(e,t,i){let s=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],yn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(s)}},jh=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Qh=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(a,a)}return Promise.all(r)}},ef=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},tf=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},nf=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],yn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Rt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},sf=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},rf=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(a[0],a[1],a[2],yn),Promise.all(r)}},of=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},af=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(a[0],a[1],a[2],yn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Rt)),Promise.all(r)}},cf=class{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},lf=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},uf=class{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},hf=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ff=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},df=class{constructor(e){this.name=gt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},pf=class{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let l of s.primitives)if(l.mode!==ti.TRIANGLES&&l.mode!==ti.TRIANGLE_STRIP&&l.mode!==ti.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let g of u){let _=new et,m=new k,p=new en,b=new k(1,1,1),v=new _n(g.geometry,g.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&b.fromBufferAttribute(c.SCALE,x),v.setMatrixAt(x,_.compose(m,p,b));for(let x in c)if(x==="_COLOR_0"){let E=c[x];v.instanceColor=new Ys(E.array,E.itemSize,E.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);Ut.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Jm="glTF",ia=12,Ym={JSON:1313821514,BIN:5130562},mf=class{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ia),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ia,r=new DataView(e,ia),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Ym.JSON){let l=new Uint8Array(e,ia+o,a);this.content=i.decode(l)}else if(c===Ym.BIN){let l=ia+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},gf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=vf[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=vf[h]||h.toLowerCase();if(o[h]!==void 0){let f=i.accessors[e.attributes[h]],d=oo[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let g in d.attributes){let _=d.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(d)},a,l,yn,f)})})}},xf=class{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},_f=class{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}},Xc=class extends ys{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(i-t)/h,f=u*u,d=f*u,g=e*l,_=g-l,m=-2*d+3*f,p=d-f,b=1-m,v=p-f+u;for(let x=0;x!==a;x++){let E=o[_+x+a],T=o[_+x+c]*h,y=o[g+x+a],w=o[g+x]*h;r[x]=b*E+v*T+m*y+p*w}return r}},US=new en,yf=class extends Xc{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return US.fromArray(r).normalize().toArray(r),r}},ti={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},oo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$m={9728:rn,9729:In,9984:ah,9985:Po,9986:Ir,9987:Zn},Zm={33071:Bi,33648:Fo,10497:Hi},Yh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Rs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},FS={CUBICSPLINE:void 0,LINEAR:Gr,STEP:Vr},$h={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function OS(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new it({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),n.DefaultMaterial}function rr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ji(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function BS(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(i){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function zS(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kS(n){let e,t=n.extensions&&n.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Zh(t.attributes):e=n.indices+":"+Zh(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Zh(n.targets[i]);return e}function Zh(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Mf(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function HS(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var VS=new et,bf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new NS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new dc(this.options.manager):this.textureLoader=new mc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Go(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return rr(r,a,s),Ji(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(bs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Yh[s.type],a=oo[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new mt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Yh[s.type],l=oo[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,m;if(d&&d!==u){let p=Math.floor(f/d),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,v=t.cache.get(b);v||(_=new l(a,p*d,s.count*d/h),v=new Zr(_,d/h),t.cache.add(b,v)),m=new qs(v,c,f%d/h,g)}else a===null?_=new l(s.count*c):_=new l(a,f,s.count*c),m=new mt(_,c,g);if(s.sparse!==void 0){let p=Yh.SCALAR,b=oo[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,E=new b(o[1],v,s.sparse.count*p),T=new l(o[2],x,s.sparse.count*c);a!==null&&(m=new mt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let y=0,w=E.length;y<w;y++){let M=E[y];if(m.setX(M,T[y*c]),c>=2&&m.setY(M,T[y*c+1]),c>=3&&m.setZ(M,T[y*c+2]),c>=4&&m.setW(M,T[y*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=$m[f.magFilter]||In,h.minFilter=$m[f.minFilter]||Zn,h.wrapS=Zm[f.wrapS]||Hi,h.wrapT=Zm[f.wrapT]||Hi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==rn&&h.minFilter!==In,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){let m=new on(_);m.needsUpdate=!0,f(m)}),t.load(bs.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Ji(u,o),u.userData.mimeType=o.mimeType||HS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[gt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new Zs,Tn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new gs,Tn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return it}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},c=r.extensions||{},l=[];if(c[gt.KHR_MATERIALS_UNLIT]){let u=s[gt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],yn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Rt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ct);let h=r.alphaMode||$h.OPAQUE;if(h===$h.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===$h.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Xt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ke(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Xt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Xt){let u=r.emissiveFactor;a.emissive=new Re().setRGB(u[0],u[1],u[2],yn)}return r.emissiveTexture!==void 0&&o!==Xt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ji(u,r),t.associations.set(u,{materials:e}),r.extensions&&rr(s,u,r),u})}createUniqueName(e){let t=Nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Km(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=kS(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Km(new xt,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?OS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let _=h[d],m=o[d],p,b=l[d];if(m.mode===ti.TRIANGLES||m.mode===ti.TRIANGLE_STRIP||m.mode===ti.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new sc(_,b):new at(_,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ti.TRIANGLE_STRIP?p.geometry=zh(p.geometry,yc):m.mode===ti.TRIANGLE_FAN&&(p.geometry=zh(p.geometry,qo));else if(m.mode===ti.LINES)p=new $s(_,b);else if(m.mode===ti.LINE_STRIP)p=new Kr(_,b);else if(m.mode===ti.LINE_LOOP)p=new lc(_,b);else if(m.mode===ti.POINTS)p=new xs(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&zS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ji(p,r),m.extensions&&rr(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&rr(s,u[0],r),u[0];let f=new pt;r.extensions&&rr(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Yt(bp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new ms(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ji(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new et;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new oc(a,c)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,b=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",b)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let b=0,v=f.length;b<v;b++){let x=f[b],E=d[b],T=g[b],y=_[b],w=m[b];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let M=i._createAnimationTracks(x,E,T,y,w);if(M)for(let S=0;S<M.length;S++)p.push(M[S])}return new fc(r,void 0,p)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,VS)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Vo:l.length>1?h=new pt:l.length===1?h=l[0]:h=new Ut,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ji(h,r),r.extensions&&rr(i,h,r),r.matrix!==void 0){let u=new et;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new pt;i.name&&(r.name=s.createUniqueName(i.name)),Ji(r,i),i.extensions&&rr(t,r,i);let o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof Tn||f instanceof on)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];Rs[r.path]===Rs.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Rs[r.path]){case Rs.weights:l=Wi;break;case Rs.rotation:l=Xi;break;case Rs.position:case Rs.scale:l=qi;break;default:i.itemSize===1?l=Wi:l=qi;break}let h=s.interpolation!==void 0?FS[s.interpolation]:Gr,u=this._getArrayFromAccessor(i);for(let f=0,d=c.length;f<d;f++){let g=new l(c[f]+"."+Rs[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Mf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Xi?yf:Xc;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function GS(n,e,t){let i=e.attributes,s=new Jn;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new k(c[0],c[1],c[2]),new k(l[0],l[1],l[2])),a.normalized){let h=Mf(oo[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new k,c=new k;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let _=Mf(oo[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new On;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Km(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(let o in i){let a=vf[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return dt.workingColorSpace!==yn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),Ji(n,e),GS(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?BS(n,e.targets,t):n})}var Cs={hi:null,lo:null},WS=["body","frame","bubble","headlight","tail","wheelRear","wheelFront","fork","torso","helmet","armR","armL","legR","legL"];async function Sf(n,e){let t=await n.loadAsync(e),i={},s={};for(let a of t.scene.children)a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.set(1,1,1),i[a.name]=a,a.traverse(c=>{c.isMesh&&c.material?.name&&(s[c.material.name]=c.material)});let r=WS.filter(a=>!i[a]);if(r.length)throw new Error(e+" incomplet : "+r.join(", "));let o=0;return i.armR.traverse(a=>{a.isMesh&&(a.geometry.computeBoundingBox(),o=Math.max(o,a.geometry.boundingBox.max.z))}),{parts:i,mats:s,armLength:o>.1?o/1.01:1}}async function jm(n="assets/"){if(Cs.lo)return Cs;let e=new Wc;return Cs.lo=await Sf(e,n+"bike_voxel.glb").catch(()=>Sf(e,n+"bike.glb")),Cs.hi=await Sf(e,n+"bike_voxel_hi.glb").catch(()=>Cs.lo),Cs}function Qm(n="lo"){return Cs[n]||Cs.lo}var $t=0,un=1,Qi=2,$c=.32,Yc=-.7,o0=.7,ji=[0,-$c,-Yc],a0=[0,-$c,-o0],e0=.62,XS=.35,Is=Math.PI*2,Wn=class{constructor(e){this.off=e||[0,0,0],this.pos=[],this.groups=[],this.slot=-1,this.gStart=0}setSlot(e){e!==this.slot&&(this.closeGroup(),this.slot=e)}closeGroup(){let e=this.pos.length/3;this.slot>=0&&e>this.gStart&&this.groups.push({start:this.gStart,count:e-this.gStart,materialIndex:this.slot}),this.gStart=e}tri(e,t,i,s){let r=this.off,o=e[0]+r[0],a=e[1]+r[1],c=e[2]+r[2],l=t[0]+r[0],h=t[1]+r[1],u=t[2]+r[2],f=i[0]+r[0],d=i[1]+r[1],g=i[2]+r[2],_=l-o,m=h-a,p=u-c,b=f-o,v=d-a,x=g-c,E=m*x-p*v,T=p*b-_*x,y=_*v-m*b,w=(o+l+f)/3-(s[0]+r[0]),M=(a+h+d)/3-(s[1]+r[1]),S=(c+u+g)/3-(s[2]+r[2]),I=this.pos;E*w+T*M+y*S>=0?I.push(o,a,c,l,h,u,f,d,g):I.push(o,a,c,f,d,g,l,h,u)}quad(e,t,i,s,r){this.tri(e,t,i,r),this.tri(e,i,s,r)}build(){this.closeGroup();let e=new xt;e.setAttribute("position",new ht(this.pos,3)),e.computeVertexNormals();for(let t of this.groups)e.addGroup(t.start,t.count,t.materialIndex);return e}};function qS(n){let e=0,t=0,i=0;for(let r of n)e+=r[0],t+=r[1],i+=r[2];let s=n.length;return[e/s,t/s,i/s]}function YS(n,e){return[(n[0]+e[0])/2,(n[1]+e[1])/2,(n[2]+e[2])/2]}function t0(n,e,t,i){let s=e.length;for(let r=0;r<s;r++)n.tri(t,e[r],e[(r+1)%s],i)}function Ps(n,e,t,i,s){let r=typeof t=="function"?t:()=>t,o=e.length,a=e[0].length,c=e.map(qS);for(let l=0;l<o-1;l++){let h=e[l],u=e[l+1],f=YS(c[l],c[l+1]);for(let d=0;d<a;d++){let g=(d+1)%a;n.setSlot(r(l,d)),n.quad(h[d],h[g],u[g],u[d],f)}}n.setSlot(i),t0(n,e[0],c[0],c[1]),n.setSlot(s),t0(n,e[o-1],c[o-1],c[o-2])}function Gn(n,e,t,i,s,r,o){let a=t[0]-e[0],c=t[1]-e[1],l=t[2]-e[2],h=Math.hypot(a,c,l)||1,u=[a/h,c/h,l/h],f=Math.abs(u[1])<.9?[0,1,0]:[1,0,0],d=[u[1]*f[2]-u[2]*f[1],u[2]*f[0]-u[0]*f[2],u[0]*f[1]-u[1]*f[0]],g=Math.hypot(d[0],d[1],d[2]);d=[d[0]/g,d[1]/g,d[2]/g];let _=[d[1]*u[2]-d[2]*u[1],d[2]*u[0]-d[0]*u[2],d[0]*u[1]-d[1]*u[0]],m=(p,b)=>{let v=[];for(let x=0;x<r;x++){let E=Is*x/r,T=Math.cos(E)*b,y=Math.sin(E)*b;v.push([p[0]+T*d[0]+y*_[0],p[1]+T*d[1]+y*_[1],p[2]+T*d[2]+y*_[2]])}return v};Ps(n,[m(e,i),m(t,s)],o,o,o)}function ar(n,e,t,i){n.setSlot(i);let s=(a,c,l)=>[e[0]+a*t[0],e[1]+c*t[1],e[2]+l*t[2]],r=[s(-1,-1,-1),s(1,-1,-1),s(1,1,-1),s(-1,1,-1),s(-1,-1,1),s(1,-1,1),s(1,1,1),s(-1,1,1)],o=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]];for(let a of o)n.tri(r[a[0]],r[a[1]],r[a[2]],e),n.tri(r[a[0]],r[a[2]],r[a[3]],e)}var Zc=3,ra=4;function $S(n,e,t,i,s,r,o,a,c){return[[0,e,n],[o,t,n],[a,i,n],[c,s,n],[0,r,n],[-c,s,n],[-a,i,n],[-o,t,n]]}function ZS(){let n=new Wn(ji),t=[[1.02,.76,.755,.74,.72,.71,.02,.03,.02],[.9,.84,.81,.75,.7,.68,.07,.12,.08],[.7,.93,.87,.76,.7,.68,.1,.19,.13],[.45,.97,.9,.68,.58,.56,.12,.23,.16],[.3,.98,.92,.62,.36,.26,.13,.23,.17],[.05,1,.94,.62,.3,.19,.14,.21,.16],[-.2,.99,.93,.66,.32,.21,.13,.19,.13],[-.35,.85,.82,.68,.42,.34,.11,.15,.1],[-.5,.8,.79,.72,.64,.62,.1,.13,.08],[-.75,.9,.87,.8,.72,.7,.09,.12,.07],[-.98,.99,.96,.92,.88,.87,.05,.07,.04],[-1.1,1.02,1.01,1,.99,.985,.01,.015,.01]].map(i=>$S(...i));Ps(n,t,(i,s)=>{let r=s===0||s===7,o=s===1||s===6,a=s===2||s===5;return r?i===7||i===8?un:$t:o?i>=9?Zc:$t:a?i>=2&&i<=5?Zc:i>=7&&i<=8?un:$t:i>=3&&i<=6?Qi:un},$t,$t);for(let i of[-1,1])Gn(n,[.11*i,.46,-.26],[.1*i,.32,-.7],.04,.03,5,ra),Gn(n,[.14*i,.44,-.3],[.22*i,.42,-.32],.018,.018,4,un),Gn(n,[.1*i,.95,.42],[.27*i,.93,.35],.02,.02,4,un);return Gn(n,[.15,.22,.1],[.17,.3,-.45],.04,.04,5,ra),Gn(n,[.17,.3,-.45],[.2,.52,-.92],.05,.065,6,ra),Gn(n,[.2,.52,-.92],[.205,.535,-.95],.065,.05,6,un),ar(n,[0,.685,-.74],[.06,.012,.16],un),n.build()}function KS(){let n=new Wn(ji),e=(t,i,s,r)=>[[0,i,t],[r,s,t],[0,s-.02,t],[-r,s,t]];return Ps(n,[e(.76,.925,.91,.07),e(.58,1.06,.94,.12),e(.42,1.13,.97,.11)],$t,$t,$t),n.build()}function JS(){let n=new Wn(ji);return ar(n,[0,.985,-1.085],[.04,.02,.014],$t),n.build()}function jS(){let n=new Wn;return Gn(n,[0,0,0],[0,0,-.45],.05,.004,6,$t),n.build()}function QS(){let n=new Wn(ji);for(let e of[-1,1]){let t=[.062*e,.795,.905];n.setSlot($t);let i=[[t[0]-.035,t[1]-.012,t[2]+.012],[t[0]+.035,t[1]+.004*e,t[2]-.02],[t[0]+.03,t[1]+.022,t[2]-.03],[t[0]-.03,t[1]+.02,t[2]-.004]];n.quad(i[0],i[1],i[2],i[3],[t[0],t[1],t[2]-.2])}return n.build()}function eE(){let n=new Wn(a0);for(let i of[-1,1])Gn(n,[.085*i,.32,.7],[.085*i,.56,.615],.032,.032,5,un),Gn(n,[.085*i,.56,.615],[.085*i,.88,.5],.024,.024,5,Qi),ar(n,[.1*i,.33,.74],[.012,.05,.035],ra);let e=.34,t=[];for(let i of[-.75,-.25,.3,.85,1.25]){let s=.32+Math.cos(i),r=.7+Math.sin(i),o=(a,c)=>[a,.32+c*Math.cos(i),.7+c*Math.sin(i)];t.push([o(-.075,e-.005),o(-.04,e+.03),o(.04,e+.03),o(.075,e-.005)])}return Ps(n,t,$t,$t,$t),n.build()}function n0(n,e){let t=new Wn,i=14,s=(o,a)=>{let c=[];for(let l=0;l<i;l++){let h=Is*l/i;c.push([o,a*Math.cos(h),a*Math.sin(h)])}return c};Ps(t,[[-.62,.215],[-1,.27],[-.8,.305],[0,.32],[.8,.305],[1,.27],[.62,.215]].map(([o,a])=>s(o*n,a)),un,un,un);for(let o of[-1,1]){let a=o*(.62*n+.004),c=[a,0,0],l=[0,0,0],h=10;for(let u=0;u<h;u++){let f=Is*u/h,d=Is*(u+1)/h;t.setSlot(u%2?un:Qi),t.tri(c,[a,.215*Math.cos(f),.215*Math.sin(f)],[a,.215*Math.cos(d),.215*Math.sin(d)],l)}if(e){let u=o*(.62*n+.012);t.setSlot(ra);for(let f=0;f<h;f++){let d=Is*f/h,g=Is*(f+1)/h;t.quad([u,.09*Math.cos(d),.09*Math.sin(d)],[u,.16*Math.cos(d),.16*Math.sin(d)],[u,.16*Math.cos(g),.16*Math.sin(g)],[u,.09*Math.cos(g),.09*Math.sin(g)],l)}}}return t.build()}function tE(){let n=new Wn,e=[0,.11,.015],t=[.125,.135,.155],i=10,s=6,r=[];for(let o=1;o<s;o++){let a=-Math.PI/2+Math.PI*o/s,c=Math.cos(a),l=[];for(let h=0;h<i;h++){let u=Is*(h+.5)/i;l.push([e[0]+t[0]*c*Math.cos(u),e[1]+t[1]*Math.sin(a),e[2]+t[2]*c*Math.sin(u)])}r.push(l)}return Ps(n,r,(o,a)=>{let c=Is*(a+1)/i;return Math.sin(c)>.45&&(o===1||o===2)?un:Math.abs(Math.cos(c))<.35?Qi:$t},un,$t),n.build()}function sa(n,e,t,i){return[[e,n,0],[e*.55,n,t],[-e*.55,n,t],[-e,n,0],[-e*.55,n,-i],[e*.55,n,-i]]}function nE(){let n=new Wn,e=[sa(-.08,.13,.09,.1),sa(.04,.145,.1,.1),sa(.22,.185,.11,.11),sa(.38,.205,.1,.1),sa(.45,.09,.06,.07)];return Ps(n,e,(t,i)=>t===0?Qi:t===2&&(i===0||i===2||i===3||i===5)?Zc:$t,un,un),Ps(n,[[[.07,.4,-.08],[0,.42,-.06],[-.07,.4,-.08],[0,.39,-.13]],[[.06,.28,-.11],[0,.29,-.09],[-.06,.28,-.11],[0,.27,-.19]],[[.03,.14,-.1],[0,.14,-.09],[-.03,.14,-.1],[0,.14,-.13]]],Qi,Qi,Qi),n.build()}function i0(n){let e=new Wn,t=[.09*n,-.09,.5];return Gn(e,[0,0,0],t,.058,.048,5,$t),Gn(e,t,[0,0,.93],.046,.038,5,$t),ar(e,[0,0,.97],[.042,.04,.05],un),ar(e,[0,.015,.02],[.052,.04,.05],Zc),e.build()}function s0(n){let e=new Wn,t=[.11*n,-.19,.42],i=[.085*n,-.47,.05];return Gn(e,[0,0,0],t,.082,.066,6,$t),Gn(e,t,i,.062,.05,5,$t),ar(e,[t[0]+.035*n,t[1]-.02,t[2]+.02],[.025,.05,.045],Qi),ar(e,[i[0],i[1]-.04,i[2]+.04],[.045,.05,.115],un),e.build()}var Ef=null;function iE(){return Ef||(Ef={body:ZS(),bubble:KS(),tail:JS(),flame:jS(),fork:eE(),headlight:QS(),wheelRear:n0(.1,!1),wheelFront:n0(.068,!0),helmet:tE(),torso:nE(),armR:i0(-1),armL:i0(1),legR:s0(-1),legL:s0(1)}),Ef}var pi=(n,e,t)=>n<e?e:n>t?t:n,c0=n=>pi(n,0,1),or=n=>Number.isFinite(n)?n:0,qc=n=>typeof n=="boolean"?n?1:0:c0(or(n));function ni(n,e){return n.name=e,n}function r0(n,e,t,i){let s=new at(n,e);return s.name=t,s.castShadow=i,s.receiveShadow=!1,s}function l0({color:n=14034984,accent:e=16761395,isPlayer:t=!1,detail:i="lo"}={}){let s=iE(),r=Ie=>new it({flatShading:!0,side:Ct,...Ie}),o=r({color:new Re(n),metalness:.35,roughness:.3}),a=r({color:1382173,metalness:.2,roughness:.7}),c=r({color:new Re(e),metalness:.45,roughness:.35}),l=r({color:15856108,metalness:.15,roughness:.45}),h=r({color:11120312,metalness:.9,roughness:.32}),u=[o,a,c,l,h],f=r({color:792614,metalness:.6,roughness:.08,transparent:!0,opacity:.55,depthWrite:!1}),d=r({color:16777215,emissive:16774358,emissiveIntensity:2.4}),g=r({color:3342336,emissive:16718362,emissiveIntensity:.8}),_=Qm(i),m=null;if(_){let Ie=(G,Ve)=>{let ke=_.mats[G].clone();return ke.color.set(Ve),ke};m={Paint:Ie("Paint",n),Suit:Ie("Suit",n),Accent:Ie("Accent",e),Tail:_.mats.Tail.clone()}}function p(Ie,G,Ve,ke,ze){if(!_)return r0(G,Ve,Ie,ke);let De=_.parts[Ie].clone(!0);return De.name=Ie,ze&&De.position.set(ze[0],ze[1],ze[2]),De.traverse(Ye=>{Ye.isMesh&&(Ye.material=m[Ye.material.name]||Ye.material,Ye.castShadow=ke)}),De}let b=r({color:0,emissive:8382975,emissiveIntensity:1.5,transparent:!0,opacity:.85,depthWrite:!1}),v=ni(new pt,"bike"),x=ni(new pt,"leanPivot"),E=ni(new pt,"pitchPivot");E.position.set(0,$c,Yc);let T=ni(new pt,"rearWheel");T.add(p("wheelRear",s.wheelRear,u,!0));let y=ni(new pt,"chassis"),w=p("body",s.body,u,!0,ji),M=p("bubble",s.bubble,f,!1,ji),S=p("tail",s.tail,g,!1,ji),I=p("headlight",s.headlight,d,!1,ji),B=r0(s.flame,b,"flame",!1);B.position.set(.205,.215,-.26),B.rotation.x=-.42,B.scale.z=.02,B.visible=!1;let z=ni(new pt,"hips");z.position.set(0,e0,XS);let L=ni(new pt,"torso"),F=ni(new pt,"head");F.position.set(0,.45,.01),F.add(p("helmet",s.helmet,u,!0)),L.add(p("torso",s.torso,u,!0),F);let U=p("armR",s.armR,u,!0),Y=p("armL",s.armL,u,!0),H=ni(new pt,"legR");H.position.set(-.12,-.02,0),H.add(p("legR",s.legR,u,!0));let ne=ni(new pt,"legL");ne.position.set(.12,-.02,0),ne.add(p("legL",s.legL,u,!0)),z.add(L,U,Y,H,ne),y.add(w,M,S,I,B,z),_&&y.add(p("frame",null,null,!0,ji));let ue=ni(new pt,"steerPivot");ue.position.set(0,0,o0-Yc);let me=p("fork",s.fork,u,!0,a0),be=ni(new pt,"frontWheel");if(be.add(p("wheelFront",s.wheelFront,u,!0)),ue.add(me,be),E.add(T,y,ue),x.add(E),v.add(x),t){let Ie=new Qr(16773590,60,60,.5,.6,2);Ie.name="headSpot",Ie.castShadow=!1,Ie.position.set(0,1,.9),Ie.target.position.set(0,.2,30),Ie.target.name="headSpotTarget",v.add(Ie,Ie.target)}let le={lean:0,steer:0,pitch:0,compress:0,sr:0,brake:0,air:0,drift:0,boost:0},te=.2,$=.37,se=.02,C=[.25,.93-$c,.36-Yc],X=new k,q=new k,ee=new k(0,0,1);function pe(Ie,G){X.set(te*G,$,se).applyEuler(L.rotation),q.set(C[0]*G-z.position.x,C[1]-z.position.y,C[2]-z.position.z);let Ve=Math.cos(-z.rotation.z),ke=Math.sin(-z.rotation.z),ze=q.x*Ve-q.y*ke,De=q.x*ke+q.y*Ve;q.x=ze,q.y=De,Ie.position.copy(X),q.sub(X);let Ye=q.length()||1;Ie.scale.z=Ye/(_?_.armLength:1),Ie.quaternion.setFromUnitVectors(ee,q.multiplyScalar(1/Ye))}function Te(Ie,G){let Ve=Ie||{},ke=Number.isFinite(G)?pi(G,0,.1):1/60,ze=1-Math.exp(-ke*14),De=1-Math.exp(-ke*5);le.lean+=(pi(or(Ve.lean),-1.5,1.5)-le.lean)*ze,le.steer+=(pi(or(Ve.steer),-1,1)-le.steer)*ze,le.pitch+=(pi(or(Ve.pitch),-.9,.9)-le.pitch)*ze,le.compress+=(pi(or(Ve.compress),-1,1)-le.compress)*ze,le.sr+=(c0(or(Ve.speedRatio))-le.sr)*De,le.brake+=(qc(Ve.braking)-le.brake)*De,le.air+=(qc(Ve.airborne)-le.air)*De,le.drift+=(qc(Ve.drift)-le.drift)*De,le.boost+=(qc(Ve.boost)-le.boost)*De;let Ye=le.lean,Ne=(Number.isFinite(Ve.speed)?Ve.speed:le.sr*80)*3.6;x.rotation.z=Ye,E.rotation.x=-le.pitch,ue.rotation.y=-.45*le.steer*pi(1-2*le.sr,0,1),y.position.y=-.07*le.compress;let N=pi((Ne-20)/100,0,1),A=pi(Math.abs(Ye)*2.27,0,1),j=Ye>=0?1:-1,xe=A*(1-pi((Ne-30)/30,0,1));z.position.x=-.17*A*j,z.position.y=e0+.1*le.air,z.rotation.z=-.2*A*j,L.rotation.x=pi(.45+.55*N-.2*le.brake-.25*le.air+.1*le.boost,.2,1.05),L.rotation.z=-.1*A*j,F.rotation.x=-.35*N+.1*le.air,F.rotation.y=-.35*A*j,F.rotation.z=-.4*Ye;let _e=.55*A+.3*xe;H.rotation.y=j>0?-_e:0,ne.rotation.y=j<0?_e:0,pe(U,-1),pe(Y,1),(m?m.Tail:g).emissiveIntensity=(m?2:.8)+(m?6:2.2)*le.brake,B.visible=le.boost>.03,B.scale.z=.02+1.3*le.boost,b.emissiveIntensity=1.5+2*le.boost;let fe=or(Ve.wheelSpin);T.rotation.x=fe,be.rotation.x=fe}return Te({},0),{group:v,update:Te}}var u0=Math.PI*2,jt=6e3,ao=2200,h0=60,f0=30,d0=60,sE=3,oa=2e3,cr=170,Af=1.5,rE=13,p0=rE-Af,Tf=120,oE={dust:{life:.9,grav:-1.2,drag:2.2,spread:1.6,lift:[.6,1.8],s0:.35,s1:1.5,a0:.3,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!1},smoke:{life:.8,grav:-.8,drag:1.2,spread:.9,lift:[.5,1.3],s0:.35,s1:1.3,a0:.16,c0:[.89,.9,.92],c1:[.62,.64,.67],add:!1,bounce:!1,ring:!1},spark:{life:.6,grav:18,drag:.25,spread:5.5,lift:[1.5,4.5],s0:.22,s1:.06,a0:1,c0:[1,.88,.4],c1:[1,.48,.1],add:!0,bounce:!0,ring:!1},spray:{life:.6,grav:9,drag:.5,spread:2.2,lift:[1.2,3.2],s0:.25,s1:.9,a0:.22,c0:[.71,.93,.98],c1:[.37,.66,.8],add:!1,bounce:!1,ring:!1},gravel:{life:.7,grav:20,drag:.15,spread:3.2,lift:[1.5,3.5],s0:.08,s1:.06,a0:1,c0:[.29,.26,.22],c1:[.14,.13,.11],add:!1,bounce:!0,ring:!1},boost:{life:.3,grav:-3,drag:3,spread:.8,lift:[0,.5],s0:.55,s1:.12,a0:.9,c0:[.25,.96,1],c1:[1,.25,.78],add:!0,bounce:!1,ring:!1},land:{life:.8,grav:0,drag:4,spread:0,lift:[.4,1],s0:.5,s1:1.8,a0:.32,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!0}},aE=new Re(16777215),cE=new Re(8386303);function Dn(n,e){return n+(e-n)*Math.random()}function aa(n,e,t){return n<e?e:n>t?t:n}function Ls(n,e=0){return Number.isFinite(n)?n:e}function lE(n){return Number.isFinite(n)?aa(n,0,.1):0}function wf(n,e){return n-e*Math.floor(n/e+.5)}function uE(){let n=globalThis.innerHeight||900,e=Math.min(globalThis.devicePixelRatio||1,2);return n*e}var hE=`
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
}`,fE=`
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
}`,dE=`
attribute float aAlpha;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,pE=`
uniform vec3 uColor;
varying float vAlpha;
void main() {
  gl_FragColor = vec4(uColor, vAlpha);
}`;function m0(n,e){let t=e||{},i=Ls(t.rain,0),s=Ls(t.wind,0),r=new Float32Array(jt*3),o=new Float32Array(jt*3),a=new Float32Array(jt*3),c=new Float32Array(jt*3),l=new Float32Array(jt*3),h=new Float32Array(jt),u=new Float32Array(jt),f=new Float32Array(jt),d=new Float32Array(jt),g=new Float32Array(jt),_=new Float32Array(jt),m=new Float32Array(jt),p=new Float32Array(jt),b=new Float32Array(jt),v=new Float32Array(jt),x=new Float32Array(jt),E=new Uint8Array(jt),T=0,y=!1,w=new xt,M=new mt(r,3).setUsage(Mi),S=new mt(l,3).setUsage(Mi),I=new mt(h,1).setUsage(Mi),B=new mt(u,1).setUsage(Mi),z=new mt(f,1).setUsage(Mi);w.setAttribute("position",M),w.setAttribute("aColor",S),w.setAttribute("aSize",I),w.setAttribute("aAlpha",B),w.setAttribute("aMode",z);let L=new Et({uniforms:{uScale:{value:700}},vertexShader:hE,fragmentShader:fE,transparent:!0,depthWrite:!1,blending:Qu,blendSrc:eh,blendDst:Uo,blendEquation:Oi}),F=new xs(w,L);F.frustumCulled=!1,n.add(F);function U(ie,we,oe,Ee,W,Ae,R,D=1){let O=oE[ie];if(!O||!Number.isFinite(we)||!Number.isFinite(oe)||!Number.isFinite(Ee))return;let K=Ls(W),he=Ls(Ae),Pe=Ls(R),Be=Math.min(jt,Math.max(0,Math.floor(Ls(D,1))));for(let He=0;He<Be;He++){let V=T;T=(T+1)%jt;let re,de,ge;if(O.ring){let Le=(Be>1?He/Be:Math.random())*u0+Math.random()*.2,$e=Dn(3.5,5.5);re=Math.cos(Le)*$e+K*.3,ge=Math.sin(Le)*$e+Pe*.3,de=Dn(O.lift[0],O.lift[1])+he*.3}else re=K+Dn(-O.spread,O.spread),ge=Pe+Dn(-O.spread,O.spread),de=he+Dn(O.lift[0],O.lift[1]);let ye=V*3;r[ye]=we+Dn(-.1,.1),r[ye+1]=oe,r[ye+2]=Ee+Dn(-.1,.1),o[ye]=re,o[ye+1]=de,o[ye+2]=ge,d[V]=0,g[V]=O.life*Dn(.85,1.15),_[V]=O.drag,m[V]=O.grav,p[V]=O.s0*Dn(.85,1.2),b[V]=O.s1*Dn(.85,1.2),v[V]=O.a0,x[V]=oe,E[V]=O.bounce?1:0,f[V]=O.add?1:0,a[ye]=O.c0[0],a[ye+1]=O.c0[1],a[ye+2]=O.c0[2],c[ye]=O.c1[0],c[ye+1]=O.c1[1],c[ye+2]=O.c1[2]}Be>0&&(y=!0)}function Y(ie){let we=!1;for(let oe=0;oe<jt;oe++){if(g[oe]<=0)continue;if(we=!0,d[oe]+=ie,d[oe]>=g[oe]){g[oe]=0,u[oe]=0,h[oe]=0;continue}let Ee=oe*3,W=Math.max(0,1-_[oe]*ie),Ae=o[Ee]*W,R=o[Ee+1]*W-m[oe]*ie,D=o[Ee+2]*W,O=r[Ee]+Ae*ie,K=r[Ee+1]+R*ie,he=r[Ee+2]+D*ie;E[oe]&&K<x[oe]&&R<0&&(K=x[oe],R=-R*.35,Ae*=.6,D*=.6,E[oe]=0),o[Ee]=Ae,o[Ee+1]=R,o[Ee+2]=D,r[Ee]=O,r[Ee+1]=K,r[Ee+2]=he;let Pe=d[oe]/g[oe];h[oe]=p[oe]+(b[oe]-p[oe])*Pe,u[oe]=v[oe]*(1-Pe*Pe),l[Ee]=a[Ee]+(c[Ee]-a[Ee])*Pe,l[Ee+1]=a[Ee+1]+(c[Ee+1]-a[Ee+1])*Pe,l[Ee+2]=a[Ee+2]+(c[Ee+2]-a[Ee+2])*Pe}return we}let H=null;if(i>0){let ie=new xt,we=new Float32Array(ao*6),oe=new mt(we,3).setUsage(Mi);ie.setAttribute("position",oe);let Ee=new Float32Array(ao*3),W=new Float32Array(ao),Ae=new Float32Array(ao);for(let O=0;O<ao;O++)Ee[O*3]=(Math.random()-.5)*h0,Ee[O*3+1]=-12+Math.random()*f0,Ee[O*3+2]=(Math.random()-.5)*d0,W[O]=Dn(22,30),Ae[O]=Dn(.8,1.2);let R=new gs({color:12900095,transparent:!0,opacity:.16,depthWrite:!1}),D=new $s(ie,R);D.frustumCulled=!1,n.add(D),H={geo:ie,mat:R,lines:D,attr:oe,pa:we,head:Ee,fall:W,len:Ae,windX:5.5*s,windZ:2*s}}function ne(ie,we,oe){let Ee=H,W=Ee.pa,Ae=Ee.head,R=Ee.windX,D=Ee.windZ,O=we.x,K=we.y+sE,he=we.z;for(let Pe=0;Pe<ao;Pe++){let Be=Pe*3,He=O+wf(Ae[Be]-O,h0),V=K+wf(Ae[Be+1]-K,f0),re=he+wf(Ae[Be+2]-he,d0),de=Ee.fall[Pe],ge=R-oe.x,ye=-de-oe.y,Le=D-oe.z,$e=.05*Ee.len[Pe],Ze=Pe*6;W[Ze]=He-ge*$e,W[Ze+1]=V-ye*$e,W[Ze+2]=re-Le*$e,W[Ze+3]=He,W[Ze+4]=V,W[Ze+5]=re,Ae[Be]=He+R*ie,Ae[Be+1]=V-de*ie,Ae[Be+2]=re+D*ie}Ee.attr.needsUpdate=!0}let ue=new Float32Array(oa*4*3),me=new Float32Array(oa*4),be=new Uint16Array(oa*6);for(let ie=0;ie<oa;ie++){let we=ie*4;be.set([we,we+1,we+2,we,we+2,we+3],ie*6)}let le=new xt,te=new mt(ue,3).setUsage(Mi),$=new mt(me,1).setUsage(Mi);le.setAttribute("position",te),le.setAttribute("aAlpha",$),le.setIndex(new mt(be,1));let se=new Et({uniforms:{uColor:{value:new Re(1315086)}},vertexShader:dE,fragmentShader:pE,transparent:!0,depthWrite:!1,side:Ct,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),C=new at(le,se);C.frustumCulled=!1,n.add(C);let X=0,q=1/0,ee=-1;function pe(ie,we,oe,Ee,W,Ae,R=.3,D=.5){if(![ie,we,oe,Ee,W,Ae,R,D].every(Number.isFinite))return;let O=Ee-ie,K=Ae-oe,he=Math.hypot(O,K);if(he<1e-4)return;let Pe=R*.5,Be=-K/he*Pe,He=O/he*Pe,V=aa(D,0,1),re=we+.03,de=W+.03,ge=X*4;X=(X+1)%oa;let ye=ue,Le=ge*3;ye[Le]=ie+Be,ye[Le+1]=re,ye[Le+2]=oe+He,ye[Le+3]=ie-Be,ye[Le+4]=re,ye[Le+5]=oe-He,ye[Le+6]=Ee-Be,ye[Le+7]=de,ye[Le+8]=Ae-He,ye[Le+9]=Ee+Be,ye[Le+10]=de,ye[Le+11]=Ae+He,me[ge]=V,me[ge+1]=V,me[ge+2]=V,me[ge+3]=V,ge<q&&(q=ge),ge+3>ee&&(ee=ge+3)}function Te(){if(ee<0)return;let ie=q,we=ee-q+1;te.clearUpdateRanges(),te.addUpdateRange(ie*3,we*3),te.needsUpdate=!0,$.clearUpdateRanges(),$.addUpdateRange(ie,we),$.needsUpdate=!0,q=1/0,ee=-1}let Ie=new pt;Ie.matrixAutoUpdate=!1,n.add(Ie);let G=new Float32Array(cr*6),Ve=new mt(G,3).setUsage(Mi),ke=new xt;ke.setAttribute("position",Ve);let ze=new Float32Array(cr),De=new Float32Array(cr),Ye=new Float32Array(cr),Ne=new Float32Array(cr);for(let ie=0;ie<cr;ie++){let we=Math.random()*u0,oe=Dn(.8,1.5);ze[ie]=Math.cos(we)*oe,De[ie]=Math.sin(we)*oe,Ye[ie]=-Af-Math.random()*p0,Ne[ie]=Dn(.5,1.2)}let N=new gs({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),A=new $s(ke,N);A.frustumCulled=!1,A.visible=!1,Ie.add(A);let j=0,xe=0,_e=0,fe=0;function Ce(ie,we){_e+=(j-_e)*(1-Math.exp(-6*ie)),fe+=(xe-fe)*(1-Math.exp(-8*ie)),we.updateMatrixWorld(),Ie.matrix.copy(we.matrixWorld),Ie.matrixWorld.copy(we.matrixWorld);let oe=aa((_e-.55)/.45,0,1),Ee=Math.min(1,.55*oe*oe*(3-2*oe)+.6*fe),W=Math.floor(Ee*cr);if(W<=0){A.visible=!1;return}A.visible=!0,ke.setDrawRange(0,W*2),N.color.copy(aE).lerp(cE,fe),N.opacity=.05+.24*Ee;let Ae=(60+110*Ee)*ie,R=1.5+5*Ee,D=G;for(let O=0;O<W;O++){let K=Ye[O]+Ae;K>-Af&&(K-=p0),Ye[O]=K;let he=-K,Pe=ze[O]*he*.9,Be=De[O]*he*.5,He=R*Ne[O],V=O*6;D[V]=Pe,D[V+1]=Be,D[V+2]=K,D[V+3]=Pe,D[V+4]=Be,D[V+5]=K-He}Ve.needsUpdate=!0}let Fe=new k,Oe=new k,Ge=!1,Se=!1;function J(ie,we){if(Se)return;ie=lE(ie);let oe=we.position;Ge?ie>0&&(Oe.subVectors(oe,Fe).divideScalar(ie),Oe.lengthSq()>Tf*Tf&&Oe.setLength(Tf),Fe.copy(oe)):(Fe.copy(oe),Oe.set(0,0,0),Ge=!0);let Ee=Ls(we.fov,60);L.uniforms.uScale.value=uE()/(2*Math.tan(Ee*Math.PI/360)),(Y(ie)||y)&&(M.needsUpdate=!0,S.needsUpdate=!0,I.needsUpdate=!0,B.needsUpdate=!0,z.needsUpdate=!0,y=!1),H&&ie>0&&ne(ie,oe,Oe),Ce(ie,we),Te()}function Me(ie,we){let oe=aa(Ls(ie,0),0,1.5);j=aa((oe-.7)/.3,0,1),xe=we?1:0}function ve(){Se||(Se=!0,n.remove(F,C,Ie),H&&n.remove(H.lines),w.dispose(),L.dispose(),le.dispose(),se.dispose(),ke.dispose(),N.dispose(),H&&(H.geo.dispose(),H.mat.dispose()))}return{emit:U,addSkid:pe,setSpeed:Me,update:J,dispose:ve}}var Kc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},mE=new ms(-1,1,1,-1,0,1),Rf=class extends xt{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}},gE=new Rf,Ds=class{constructor(e){this._mesh=new at(gE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,mE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var co=class extends Xn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Et?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=bi.clone(e.uniforms),this.material=new Et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ds(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ca=class extends Xn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Jc=class extends Xn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var jc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Ke);this._width=i.width,this._height=i.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:An}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new co(Kc),this.copyPass.material.blending=_i,this.clock=new gc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ca!==void 0&&(o instanceof ca?i=!0:o instanceof Jc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Qc=class extends Xn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var g0={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var lo=class n extends Xn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Ke(e.x,e.y):new Ke(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(r,o,{type:An}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Qt(r,o,{type:An});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Qt(r,o,{type:An});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=g0;this.highPassUniforms=bi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Et({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ke(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Kc;this.copyUniforms=bi.clone(h.uniforms),this.blendMaterial=new Et({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Fr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new Xt,this.fsQuad=new Ds(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ke(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Et({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ke(.5,.5)},direction:{value:new Ke(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};lo.BlurDirectionX=new Ke(1,0);lo.BlurDirectionY=new Ke(0,1);var x0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var el=class extends Xn{constructor(){super();let e=x0;this.uniforms=bi.clone(e.uniforms),this.material=new uc({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ds(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===nh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ih?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===sh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===rh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===oh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var _0=58,xE=82,y0=94,_E=9,yE=20,v0=4.7,vE=1.95,ME=3,bE=4,SE=5,tl=.6;function Ns(n,e,t){return n<e?e:n>t?t:n}function Pt(n,e=0){return Number.isFinite(n)?n:e}function EE(n,e,t){return n+(e-n)*t}function uo(n,e){return 1-Math.exp(-n*e)}function TE(n){return Number.isFinite(n)?Ns(n,0,.1):0}function M0(n){let e=new k,t=new k,i=new k,s=new k,r={x:1,z:0},o=!1,a=0,c=0,l=0,h=_0,u=v0,f=0,d=0,g=0;function _(E,T){let y=Pt(E.x),w=Pt(E.y),M=Pt(E.z),S=Pt(E.heading)+Pt(E.yaw),I=Math.sin(S),B=Math.cos(S),z=-B,L=I;r.x=z,r.z=L;let F=E.airborne?1:0,U=T*T,Y=v0-.3*U+.9*F,H=vE-.15*U+.7*F;u=Y;let ne=Ns(Pt(E.slope),-.15,.15),ue=Ns(Pt(E.lean),-1.5,1.5),me=0;e.set(y-I*Y+z*me,w+H-ne*Y,M-B*Y+L*me),e.y<w+tl&&(e.y=w+tl),t.set(y+I*8.5,w+.55+ne*4-1.5*F,M+B*8)}function m(E){return EE(_0,xE,Math.pow(E,1.6))}function p(E,T,y,w){n.position.set(i.x+r.x*T,Math.max(i.y+y,w),i.z+r.z*T),n.lookAt(s),n.rotateZ(E)}function b(E,T){if(E=TE(E),!o){v(T);return}a+=E;let y=Ns(Pt(T.speedRatio),0,1);_(T,y);let w=Pt(T.x)-f,M=Pt(T.y)-d,S=Pt(T.z)-g;w*w+M*M+S*S<400&&(i.x+=w,i.y+=M,i.z+=S,s.x+=w,s.y+=M,s.z+=S),f=Pt(T.x),d=Pt(T.y),g=Pt(T.z),i.lerp(e,uo(_E,E));let I=i.x-Pt(T.x),B=i.z-Pt(T.z),z=Math.hypot(I,B);z>.001&&(i.x=Pt(T.x)+I/z*u,i.z=Pt(T.z)+B/z*u),s.lerp(t,uo(yE,E));let L=Pt(T.y)+tl;i.y<L&&(i.y=L),l*=Math.exp(-SE*E);let F=y*y*y*2.2,U=Math.sin(a*61.3)*.6+Math.sin(a*97.1+1.7)*.4,Y=Math.sin(a*73.9+.4)*.6+Math.sin(a*113.7+2.9)*.4,H=Math.sin(a*67.8+1.1)*.6+Math.sin(a*121.4+.3)*.4,ne=l*.35+F*.01,ue=U*ne,me=Y*ne,be=H*(l*.03+F*.002);c+=((T.boosting?1:0)-c)*uo(bE,E);let le=m(y),te=le+(y0-le)*c;h+=(te-h)*uo(ME,E),Math.abs(n.fov-h)>1e-4&&(n.fov=h,n.updateProjectionMatrix()),p(be,ue,me,L)}function v(E){let T=Ns(Pt(E.speedRatio),0,1);_(E,T),i.copy(e),s.copy(t),f=Pt(E.x),d=Pt(E.y),g=Pt(E.z),o=!0,a=0,l=0,c=E.boosting?1:0,h=m(T)+(y0-m(T))*c,n.fov=h,n.updateProjectionMatrix(),p(0,0,0,Pt(E.y)+tl)}function x(E){l=Ns(l+Pt(E),0,1.5)}return{update:b,shake:x,snap:v}}var wE=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,AE=`
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
}`;function b0(n,e,t,i){let r=Pt((i||{}).bloom,.5),o=null,a=null,c=null,l=0,h=0,u=0,f=0,d=0,g=Math.min(globalThis.devicePixelRatio||1,2);try{let v=n.getSize(new Ke),x=new Qt(Math.max(1,v.x),Math.max(1,v.y),{type:An,samples:4});o=new jc(n,x),o.setPixelRatio(g),o.addPass(new Qc(e,t)),a=new lo(new Ke(512,512),r*.8,.75,.9),o.addPass(a),c=new co({uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uBoost:{value:0},uTime:{value:0}},vertexShader:wE,fragmentShader:AE}),o.addPass(c),o.addPass(new el)}catch(v){console.warn("Post-traitement indisponible, rendu direct :",v),o=null,a=null,c=null}function _(v,x){!Number.isFinite(v)||!Number.isFinite(x)||v<=0||x<=0||(g=Math.min(globalThis.devicePixelRatio||1,2),n.setPixelRatio(g),n.setSize(v,x),o&&(o.setPixelRatio(g),o.setSize(v,x)))}function m(v,x){l=Ns(Pt(v,0),0,1),h=x?1:0}function p(v){if(v=Number.isFinite(v)?Ns(v,0,.1):0,d+=v,u+=(l-u)*uo(8,v),f+=(h-f)*uo(8,v),c&&(c.uniforms.uSpeed.value=u,c.uniforms.uBoost.value=f,c.uniforms.uTime.value=d),o)try{o.render(v);return}catch(x){console.warn("\xC9chec du post-traitement, rendu direct :",x),o=null}n.render(e,t)}function b(){o&&o.dispose(),a&&a.dispose&&a.dispose(),c&&c.dispose&&c.dispose(),o=null}return{render:p,setSize:_,setSpeed:m,dispose:b}}function S0(n){if(!Number.isFinite(n))return`--'--"---`;let e=Math.floor(n/60),t=Math.floor(n%60),i=Math.floor(n*1e3%1e3);return`${String(e).padStart(2,"0")}'${String(t).padStart(2,"0")}"${String(i).padStart(3,"0")}`}var Gt=(n,e,t,i)=>{let s=document.createElement(n);return e&&(s.className=e),i!=null&&(s.textContent=i),t?.appendChild(s),s};function E0(n){let e=Gt("div","h2-root",n);e.hidden=!0;let t=Gt("div","h2-pos",e),i=Gt("span","h2-pos-num",t,"1"),s=Gt("span","h2-pos-tot",t,"/8");Gt("span","h2-pos-lbl",t,"POS");let r=Gt("div","h2-right",e),o=Gt("div","h2-pill h2-lap",r),a=Gt("span","h2-lap-lbl",o,"TOUR"),c=Gt("span","h2-lap-num",o,"1"),l=Gt("span","h2-lap-tot",o,"/3"),h=Gt("div","h2-pill h2-time",r,`00'00"000`),u=Gt("div","h2-best",r,""),f=Gt("canvas","h2-map",e),d=220;f.width=f.height=d;let g=f.getContext("2d"),_=document.createElement("canvas");_.width=_.height=d;let m=null,p=1,b=0,v=0,x=Gt("div","h2-dial",e),E=Gt("canvas","h2-dial-canvas",x),T=300;E.width=E.height=T;let y=E.getContext("2d"),w=Gt("div","h2-gear",x,"1"),M=Gt("div","h2-speed",x,"0");Gt("div","h2-unit",x,"km/h");let S=Gt("div","h2-boost",x),I=[],B=Gt("div","h2-count",e,""),z=Gt("div","h2-flash",e,""),L=Gt("div","h2-wrong",e,"CONTRESENS");L.hidden=!0;let F={},U=(C,X,q)=>{F[C]!==q&&(F[C]=q,X.textContent=q)},Y=Math.PI*.75,H=Math.PI*2.25,ne=-1;function ue(C){let X=Math.round(C*120)/120;if(X===ne)return;ne=X;let q=T/2,ee=T*.44;y.clearRect(0,0,T,T),y.lineCap="butt",y.beginPath(),y.arc(q,q,ee*1.05,0,Math.PI*2),y.fillStyle="rgba(8, 10, 16, 0.42)",y.fill();let pe=(G,Ve,ke,ze)=>{y.beginPath(),y.arc(q,q,ee,G,Ve),y.strokeStyle=ke,y.lineWidth=ze,y.stroke()},Te=Y+(H-Y)*.86;pe(Y,Te,"rgba(255,255,255,0.28)",T*.05),pe(Te,H,"rgba(226,40,48,0.55)",T*.05);let Ie=Y+(H-Y)*Math.min(1,Math.max(0,X));pe(Y,Math.min(Ie,Te),"#ffffff",T*.05),Ie>Te&&pe(Te,Ie,"#e8242e",T*.05);for(let G=0;G<=8;G++){let Ve=Y+(H-Y)*G/8;y.beginPath(),y.moveTo(q+Math.cos(Ve)*ee*.8,q+Math.sin(Ve)*ee*.8),y.lineTo(q+Math.cos(Ve)*ee*.9,q+Math.sin(Ve)*ee*.9),y.strokeStyle=G>=7?"#e8242e":"rgba(255,255,255,0.75)",y.lineWidth=3,y.stroke()}y.beginPath(),y.moveTo(q+Math.cos(Ie)*ee*.3,q+Math.sin(Ie)*ee*.3),y.lineTo(q+Math.cos(Ie)*ee*.98,q+Math.sin(Ie)*ee*.98),y.strokeStyle="#ffffff",y.lineWidth=4,y.stroke()}ue(0);function me(C){m=C;let X=C.bounds,q=X.maxX-X.minX,ee=X.maxZ-X.minZ;p=(d-36)/Math.max(q,ee),b=(d-q*p)/2-X.minX*p,v=(d-ee*p)/2-X.minZ*p;let pe=_.getContext("2d");pe.clearRect(0,0,d,d);let Te=()=>{pe.beginPath(),C.pts.forEach((Ie,G)=>{let Ve=Ie.x*p+b,ke=Ie.z*p+v;G?pe.lineTo(Ve,ke):pe.moveTo(Ve,ke)}),C.open||pe.closePath()};pe.lineJoin="round",Te(),pe.strokeStyle="rgba(0,0,0,0.45)",pe.lineWidth=9,pe.stroke(),Te(),pe.strokeStyle="#ffffff",pe.lineWidth=5,pe.stroke(),Te(),pe.strokeStyle="rgba(20,24,34,0.9)",pe.lineWidth=2,pe.stroke(),g.clearRect(0,0,d,d),g.drawImage(_,0,0)}function be(C){if(!m)return;g.clearRect(0,0,d,d),g.drawImage(_,0,0);let X=m.pts.length,q=(ee,pe)=>{let Te=Math.floor((ee.s%m.length+m.length)%m.length/m.step);Te>=X&&(Te=X-1);let Ie=m.pts[Te],G=Ie.x*p+b,Ve=Ie.z*p+v;g.beginPath(),g.arc(G,Ve,pe?6:3.6,0,Math.PI*2),g.fillStyle=pe?"#e8242e":"#ffffff",g.fill(),g.lineWidth=1.5,g.strokeStyle="rgba(0,0,0,0.6)",g.stroke()};for(let ee of C)ee.isPlayer||q(ee,!1);for(let ee of C)ee.isPlayer&&q(ee,!0)}let le=null;function te(C){U("pos",i,String(C.position)),U("tot",s,"/"+C.total),U("lap",c,String(C.lap)),U("laps",l,"/"+C.laps),U("time",h,S0(C.time)),U("best",u,C.bestLap?"MEILLEUR "+S0(C.bestLap):""),U("speed",M,String(Math.round(C.speedKmh))),U("gear",w,String(C.gear||1)),ue(C.rpm??Math.min(1,C.speedKmh/290));let X=C.boostCharges|0,q=C.boostT>0?1:0,ee=X+":"+q;if(F.boost!==ee){for(F.boost=ee;I.length<X+q;)I.push(Gt("span","h2-boost-dot",S));I.forEach((pe,Te)=>{pe.hidden=Te>=X+q,pe.classList.toggle("h2-on",q&&Te===X)})}if(C.countdown===null||C.countdown===void 0)le===null&&F.count!==""&&(F.count="",B.textContent="",B.classList.remove("h2-show"));else if(C.countdown>0){let pe=String(Math.ceil(C.countdown));F.count!==pe&&(F.count=pe,B.textContent=pe,B.classList.remove("h2-show"),B.offsetWidth,B.classList.add("h2-show"))}else F.count!=="GO !"&&(F.count="GO !",B.textContent="GO !",B.classList.remove("h2-show"),B.offsetWidth,B.classList.add("h2-show"),clearTimeout(le),le=setTimeout(()=>{le=null},800));L.hidden===!!C.wrongWay&&(L.hidden=!C.wrongWay)}let $=null;function se(C,X=900){z.textContent=C,z.classList.remove("h2-show"),z.offsetWidth,z.classList.add("h2-show"),clearTimeout($),$=setTimeout(()=>z.classList.remove("h2-show"),X)}return{show(){e.hidden=!1},hide(){e.hidden=!0},update:te,setTrack:me,updateMinimap:be,flash:se,setLapLabel(C){a.textContent!==C&&(a.textContent=C)},dispose(){e.remove()}}}var Pw=js.maxSpeed*3.6;var T0=360;var w0=n=>(n<10?"0":"")+n;function Cf(n){if(n==null||!Number.isFinite(n))return"--:--.--";let e=Math.max(0,Math.floor(n*100+1e-6)),t=Math.floor(e/6e3),i=Math.floor(e/100)%60;return`${t}:${w0(i)}.${w0(e%100)}`}var Lw=`
  <div class="pr-pos"><span class="pr-pos-cur">-</span><span class="pr-pos-sep">/</span><span class="pr-pos-tot">-</span></div>
  <div class="pr-wrong">Sens interdit</div>
  <div class="pr-timing">
    <div class="pr-lap">Tour -/-</div>
    <div class="pr-time">0:00.00</div>
    <div class="pr-best">Meilleur <span class="pr-best-v">--:--.--</span></div>
  </div>
  <div class="pr-left">
    <div class="pr-mm-wrap"><canvas class="pr-minimap" width="${T0}" height="${T0}"></canvas></div>
    <div class="pr-boosts"><span class="pr-boost-lbl">Boost</span><div class="pr-dias"></div></div>
  </div>
  <div class="pr-speed">
    <div class="pr-speed-num">0</div>
    <div class="pr-speed-unit">km/h</div>
    <div class="pr-bar"></div>
  </div>
  <div class="pr-count"></div>
  <div class="pr-flash"></div>
`;var A0="ABCDEFGHJKMNPQRSTUVWXYZ23456789",R0=0;function If(){R0++;let n=zn((Date.now()^Math.imul(R0,2654435761))>>>0),e="RUSH-";for(let t=0;t<4;t++)e+=A0[n.int(0,A0.length-1)];return e}var ft=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function C0(n){return n?typeof n=="string"?Ei[n]?.name||n:n.name||Ei[n.id]?.name||"":""}function RE(n){return n&&typeof n=="object"?n:Qs.find(e=>e.id===n)||{id:String(n),name:String(n),icon:"\u2022"}}function Pf(n){let e=new Map;for(let i of n||[]){let s=RE(i),r=e.get(s.id);r?r.n++:e.set(s.id,{info:s,n:1})}if(!e.size)return'<span class="pr-own-none">Aucune pour l\u2019instant</span>';let t="";for(let{info:i,n:s}of e.values())t+=`<span class="pr-own">${ft(i.icon)} ${ft(i.name)}${s>1?` \xD7${s}`:""}</span>`;return t}function Lf(n){return(n||[]).map((e,t)=>`<li class="pr-srow${e.isPlayer?" pr-me":""}" style="--i:${t}"><span class="pr-rk">${t+1}</span><span class="pr-rn">${ft(e.name)}</span><span class="pr-rp">${e.points??0}<small> pts</small></span></li>`).join("")}function I0(n){let e=document.createElement("div");e.className="pr-menu pr-off",n.appendChild(e);let t=null,i=null;function s(v){try{t&&typeof t.play=="function"&&t.play(v)}catch{}}function r(v,x){let E=i;if(!E||!E.items.length)return;let T=E.items.length,y=(v%T+T)%T,w=y!==E.index;E.index=y,E.focused=!0;for(let M=0;M<T;M++)E.items[M].classList.toggle("pr-sel",M===y);try{E.items[y].focus({preventScroll:!0})}catch{}w&&x&&s("select")}function o(v){let x=i;x&&(i=null,e.innerHTML="",e.classList.add("pr-off"),s("confirm"),x.resolve(v))}function a(v){return i=null,e.innerHTML=v.html,e.classList.remove("pr-off"),new Promise(x=>{i={items:Array.from(e.querySelectorAll("[data-nav]")),index:0,focused:!1,actions:v.actions||{},resolve:x},v.onMount&&v.onMount(e,o),r(v.initial||0,!1)})}e.addEventListener("click",v=>{let x=i;if(!x||!(v.target instanceof Element))return;let E=v.target.closest("[data-act]");if(!E||!e.contains(E)||E.disabled)return;let T=x.items.indexOf(E);T>=0&&T!==x.index&&r(T,!1);let y=x.actions[E.dataset.act];y&&y(E,o)}),e.addEventListener("mouseover",v=>{let x=i;if(!x||!(v.target instanceof Element))return;let E=v.target.closest("[data-nav]");if(!E)return;let T=x.items.indexOf(E);T>=0&&T!==x.index&&r(T,!0)}),window.addEventListener("keydown",v=>{let x=i;if(!x)return;let E=v.target,T=!!E&&E.tagName==="INPUT",y=v.key||"",w=y.toLowerCase();if(y==="ArrowUp"||!T&&(y==="ArrowLeft"||w==="z"||w==="q")){v.preventDefault(),r(x.index-1,!0);return}if(y==="ArrowDown"||!T&&(y==="ArrowRight"||w==="s"||w==="d")){v.preventDefault(),r(x.index+1,!0);return}if(T){if(y==="Enter"){v.preventDefault();let M=e.querySelector("[data-main]");M&&M.click()}return}if(y.length===1){let M=x.items.find(S=>S.dataset.key===y);M&&(v.preventDefault(),M.click())}});function c({dailySeed:v,meta:x,route:E=null,records:T=null}={}){let y=x||{};if(E)return f(E,y,T||{});let w=String(v||"RUSH-DAILY").toUpperCase(),M=If();return a({initial:2,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">Arcade \xB7 Proc\xE9dural \xB7 Roguelite</p>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-seed-in">Seed du run</label>
    <div class="pr-seedbox">
      <input id="pr-seed-in" class="pr-input" type="text" value="${ft(M)}" maxlength="16" autocomplete="off" spellcheck="false" data-nav data-seed>
      <button type="button" class="pr-btn pr-btn-ico" data-nav data-act="dice" title="Nouvelle seed al\xE9atoire" aria-label="Nouvelle seed al\xE9atoire">\u{1F3B2}</button>
    </div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="launch">Lancer le run</button>
    <button type="button" class="pr-btn" data-nav data-act="daily">D\xE9fi du jour<small>${ft(w)}</small></button>
  </div>
  <div class="pr-stats pr-slide" style="--i:4">
    <div><b>${y.runs??0}</b><span>runs</span></div>
    <div><b>${y.wins??0}</b><span>victoires</span></div>
    <div><b>${y.bestPoints??0}</b><span>record de points</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage</p>
</section>`,actions:{dice:S=>{let I=S.closest(".pr-screen").querySelector("[data-seed]");I&&(I.value=If())},launch:(S,I)=>{let B=S.closest(".pr-screen").querySelector("[data-seed]"),z=(B?B.value:"").trim().toUpperCase();z||(z=If()),I({seed:z})},daily:(S,I)=>I({seed:w})}})}let l=v=>`${Math.floor(v/60)}'${String(Math.floor(v%60)).padStart(2,"0")}"`,h=v=>v==null?"":` <small>${v<0?"\u2212":"+"}${Math.abs(v).toFixed(1)} s</small>`;function u(v){if(!v)return"";let x='<li style="display:flex;justify-content:space-between;gap:1.5em">',E=v.splits.map((y,w)=>`${x}<span>${w+1} \xB7 ${ft(y.name.split(" \xB7 ")[0])}</span><b>${ft(l(y.time))}${h(y.delta)}${y.record&&y.best!==null?" \u2605":""}</b></li>`).join(""),T;return v.total?v.total.best===null?T=`Temps total <b>${ft(l(v.time))}</b> \xB7 premier chrono enregistr\xE9`:v.total.record?T=`Temps total <b>${ft(l(v.time))}</b> \xB7 <b>nouveau record</b>${h(v.total.delta)}`:T=`Temps total <b>${ft(l(v.time))}</b> \xB7 record ${ft(l(v.total.best))}${h(v.total.delta)}`:T=`Temps <b>${ft(l(v.time))}</b> \xB7 le record de l'itin\xE9raire ne compte que depuis Catane`,`<p class="pr-sub">${T}</p><ul style="list-style:none;margin:.6em 0;padding:0;display:grid;gap:.25em;font-size:.82em;text-align:left">${E}</ul>`}function f(v,x,E){let T=Object.keys(E.splits||{}).length,y=(v.stages.reduce((M,S)=>M+S.length,0)/1e3).toFixed(0),w=v.stages.map((M,S)=>`<option value="${S+1}">${S+1} \xB7 ${ft(M.subtitle)}</option>`).join("");return a({initial:1,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">${ft(v.title)} \xB7 ${ft(v.roads)} \xB7 ${y} km d'une traite</p>
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
    <div><b>${E.total?ft(l(E.total)):"\u2013"}</b><span>record Catania \u2192 Falcone</span></div>
    <div><b>${E.finishes??0}</b><span>arriv\xE9es</span></div>
    <div><b>${T}</b><span>chronos de tron\xE7on</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage \xB7 1 2 3 am\xE9lioration aux relais</p>
</section>`,actions:{launch:(M,S)=>{let I=M.closest(".pr-screen").querySelector("[data-from]");S({seed:"A18-A20",stage:Number(I?I.value:1)||1})}}})}function d({stage:v={},index:x=1,total:E=1,standings:T=[],weather:y}={}){let w=C0(y)||C0(v.weather),M=v.laps??0;return a({initial:0,html:`
<section class="pr-screen pr-stage">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in pr-stage-main">
    <div class="pr-kicker">${v.real?"Itin\xE9raire r\xE9el":`\xC9tape ${ft(x)}/${ft(E)}`}</div>
    <h2 class="pr-h2">${ft(v.name)}</h2>
    <p class="pr-sub">${ft(v.subtitle)}</p>
    <dl class="pr-facts">
      <div><dt>M\xE9t\xE9o</dt><dd>${ft(w)}</dd></div>
      ${v.real?`<div><dt>Tron\xE7ons</dt><dd>${v.real.length} encha\xEEn\xE9s sans arr\xEAt</dd></div>
      <div><dt>D\xE9part</dt><dd>${ft(v.real[0].subtitle.split(" \xB7 ")[0])}</dd></div>`:`<div><dt>Tours</dt><dd>${ft(M)} ${M>1?"tours":"tour"}</dd></div>
      <div><dt>Seed du circuit</dt><dd>${ft(v.trackSeed)}</dd></div>`}
    </dl>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="go">D\xE9part</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${Lf(T)}</ol>
  </div></div>
</section>`,actions:{go:(S,I)=>I(void 0)}})}function g({results:v=[],standings:x=[],stage:E={}}={}){let y=[...v].sort((w,M)=>(w.position??99)-(M.position??99)).map((w,M)=>{let S=bc[(w.position??0)-1]??0;return`<tr class="pr-tr${w.isPlayer?" pr-me":""}" style="--i:${M}"><td class="pr-c-pos">${ft(w.position??"")}</td><td class="pr-c-name">${ft(w.name)}</td><td class="pr-c-tm">${w.time==null?"Abandon":Cf(w.time)}</td><td class="pr-c-best">${w.bestLap==null?"\u2014":Cf(w.bestLap)}</td><td class="pr-c-pts">${S>0?"+"+S:"0"}</td></tr>`}).join("");return a({initial:0,html:`
<section class="pr-screen pr-results">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-kicker">R\xE9sultats \xB7 ${ft(E.name)}</div>
    <table class="pr-table">
      <thead><tr><th>Pos</th><th>Pilote</th><th>Temps</th><th>Meilleur tour</th><th>Pts</th></tr></thead>
      <tbody>${y}</tbody>
    </table>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="next">Continuer</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${Lf(x)}</ol>
  </div></div>
</section>`,actions:{next:(w,M)=>M(void 0)}})}function _({choices:v=[],index:x=1,total:E=1,owned:T=[]}={}){let y=v.map((w,M)=>`<button type="button" class="pr-card pr-slide" style="--i:${M}" data-nav data-key="${M+1}" data-act="pick" data-id="${ft(w.id)}"><span class="pr-card-in"><span class="pr-card-key">${M+1}</span><span class="pr-card-ico" aria-hidden="true">${ft(w.icon)}</span><span class="pr-card-name">${ft(w.name)}</span><span class="pr-card-tag">${ft(w.tagline)}</span><span class="pr-card-pro">\u25B2 ${ft(w.pro)}</span><span class="pr-card-con">\u25BC ${ft(w.con)}</span></span></button>`).join("");return a({initial:0,html:`
<section class="pr-screen pr-upg">
  <div class="pr-kicker pr-slide" style="--i:0">\xC9tape ${ft(x)}/${ft(E)} accomplie</div>
  <h2 class="pr-h2 pr-slide" style="--i:0">Choisissez une am\xE9lioration</h2>
  <div class="pr-cards">${y}</div>
  <div class="pr-owned pr-slide" style="--i:3"><span class="pr-owned-lbl">D\xE9j\xE0 poss\xE9d\xE9es</span>${Pf(T)}</div>
</section>`,actions:{pick:(w,M)=>M(w.dataset.id)}})}function m({standings:v=[],playerPosition:x,run:E={},meta:T}={}){let y=T||{},w=x??v.findIndex(I=>I.isPlayer)+1,M=w===1,S=E.real?M?"Victoire !":`${ft(w)}e \xE0 l'arriv\xE9e`:M?"Champion !":`${ft(w)}e au championnat`;return a({initial:E.real?0:1,html:`
<section class="pr-screen pr-end">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-end-title${M?" pr-gold":""}">${S}</div>
    <ol class="pr-slist pr-slist-big">${Lf(v)}</ol>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    ${E.real?`<h3 class="pr-h3">${ft(E.stages[0].name)}</h3>
    <p class="pr-sub">${ft(E.stages[0].subtitle)}</p>${u(E.summary)}
    <h3 class="pr-h3">Am\xE9liorations prises</h3>
    <div class="pr-owned-list">${Pf(E.upgrades)}</div>`:`<h3 class="pr-h3">Am\xE9liorations du run</h3>
    <div class="pr-owned-list">${Pf(E.upgrades)}</div>
    <h3 class="pr-h3">Seed</h3>
    <div class="pr-seedline">
      <code class="pr-seedcode">${ft(E.seed)}</code>
      <button type="button" class="pr-btn pr-btn-small" data-nav data-act="copy">Copier la seed</button>
    </div>`}
    ${E.real?"":`<p class="pr-cmds">Runs : ${y.runs??0} \xB7 Victoires : ${y.wins??0} \xB7 Record : ${y.bestPoints??0} pts</p>`}
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="again">${E.real?"Repartir":"Nouveau run"}</button>
  </div></div>
</section>`,actions:{copy:I=>{let B="Copier la seed",z;try{z=navigator.clipboard.writeText(String(E.seed??""))}catch(F){z=Promise.reject(F)}let L=F=>{I.textContent=F,setTimeout(()=>{I.isConnected&&(I.textContent=B)},1500)};z.then(()=>L("Copi\xE9e !"),()=>L("Copie impossible"))},again:(I,B)=>B(void 0)}})}function p(v){t=v||null}function b(){i=null,e.innerHTML="",e.classList.add("pr-off")}return{showTitle:c,showStageIntro:d,showResults:g,showUpgradeChoice:_,showRunEnd:m,hideAll:b,setAudio:p}}var P0=typeof globalThis<"u"&&(globalThis.AudioContext||globalThis.webkitAudioContext)||null,L0=.6,CE=.3,Df=6,lr=55,IE=.1,PE=25,D0=60/128/4,LE=[{root:45,iv:[3,7]},{root:41,iv:[4,7]},{root:48,iv:[4,7]},{root:43,iv:[4,7]}],ho=n=>Number.isFinite(n)?n<0?0:n>1?1:n:0,N0=n=>440*Math.pow(2,(n-69)/12);function DE(n){let t=new Float32Array(1024);for(let i=0;i<1024;i++){let s=i*2/1023-1;t[i]=(1+n)*s/(1+n*Math.abs(s))}return t}function U0(){let n=null,e=!1,t=null,i=null,s=null,r=null,o=null,a=null,c=null,l=!1,h=!1,u=null,f=0,d=0,g=-1,_=0,m=0,p=0;function b(C){let X=Math.round(2*C),q=Math.round(.1*C),ee=new Float32Array(X+q),pe=0,Te=0,Ie=0,G=0,Ve=0,ke=0,ze=0;for(let A=0;A<X+q;A++){let j=Math.random()*2-1;pe=.99886*pe+j*.0555179,Te=.99332*Te+j*.0750759,Ie=.969*Ie+j*.153852,G=.8665*G+j*.3104856,Ve=.55*Ve+j*.5329522,ke=-.7616*ke-j*.016898,ee[A]=(pe+Te+Ie+G+Ve+ke+ze+j*.5362)*.11,ze=j*.115926}let De=n.createBuffer(1,X,C),Ye=De.getChannelData(0),Ne=0;for(let A=0;A<X;A++){let j=A<q?ee[A]*(A/q)+ee[X+A]*(1-A/q):ee[A];Ye[A]=j;let xe=Math.abs(j);xe>Ne&&(Ne=xe)}let N=Ne>0?1/Ne:1;for(let A=0;A<X;A++)Ye[A]*=N;return De}function v(C){let X=n.createBufferSource();return X.buffer=i,X.loop=!0,X.connect(C),X.start(0,Math.random()*1.5),X}function x(C){let X=n.createGain();return X.gain.value=C,X}function E(C,X,q){let ee=n.createBiquadFilter();return ee.type=C,ee.frequency.value=X,ee.Q.value=q,ee}function T(){i=b(n.sampleRate),t=x(l?0:L0);let C=n.createDynamicsCompressor();C.threshold.value=-16,C.knee.value=12,C.ratio.value=4,C.attack.value=.005,C.release.value=.2,t.connect(C),C.connect(n.destination);let X=n.createOscillator();X.type="sawtooth",X.frequency.value=lr,X.detune.value=-6;let q=n.createOscillator();q.type="sawtooth",q.frequency.value=lr,q.detune.value=6;let ee=n.createOscillator();ee.type="square",ee.frequency.value=lr/2;let pe=x(1);X.connect(x(.28)).connect(pe),q.connect(x(.28)).connect(pe),ee.connect(x(.22)).connect(pe);let Te=E("bandpass",lr*4,1.2),Ie=x(.04);v(Te),Te.connect(Ie).connect(pe);let G=n.createWaveShaper();G.curve=DE(4),G.oversample="2x",pe.connect(G);let Ve=E("lowpass",300,1.3);G.connect(Ve);let ke=x(0);Ve.connect(ke).connect(t),X.start(),q.start(),ee.start(),s={osc1:X,osc2:q,osc3:ee,nBp:Te,nGain:Ie,lp:Ve,gain:ke};let ze=E("bandpass",300,.7),De=x(0);v(ze),ze.connect(De).connect(t),r={filter:ze,gain:De};let Ye=E("bandpass",1100,4),Ne=x(3),N=x(0);v(Ye),Ye.connect(Ne).connect(N).connect(t),o={filter:Ye,gain:N};let A=E("highpass",900,.5),j=x(3),xe=x(0);v(A),A.connect(j).connect(xe).connect(t),a={gain:xe},c=x(0),c.connect(t),e=!0}function y(C,X,q){let ee=n.currentTime;C.cancelScheduledValues(ee),C.setTargetAtTime(X,ee,q)}function w(C){let X=C.t0,q=C.dur,ee=n.createOscillator();ee.type=C.type||"sine",ee.frequency.setValueAtTime(C.f0,X),C.f1&&ee.frequency.exponentialRampToValueAtTime(C.f1,X+q);let pe=n.createGain();pe.gain.setValueAtTime(1e-4,X),pe.gain.linearRampToValueAtTime(C.vol,X+(C.attack||.004)),pe.gain.exponentialRampToValueAtTime(1e-4,X+q);let Te=ee;if(C.lp){let Ie=E("lowpass",C.lp,.7);ee.connect(Ie),Te=Ie}Te.connect(pe),pe.connect(t),ee.start(X),ee.stop(X+q+.02)}function M(C){let X=C.t0,q=C.dur,ee=n.createBufferSource();ee.buffer=i;let pe=E(C.type,C.f0,C.q||1);C.f1&&pe.frequency.exponentialRampToValueAtTime(C.f1,X+q),pe.frequency.setValueAtTime(C.f0,X);let Te=n.createGain();Te.gain.setValueAtTime(1e-4,X),Te.gain.linearRampToValueAtTime(C.vol,X+.004),Te.gain.exponentialRampToValueAtTime(1e-4,X+q),ee.connect(pe),pe.connect(Te),Te.connect(t),ee.start(X,Math.random()*1.5,q+.02)}function S(C,X){let q=n.createBufferSource();q.buffer=i;let ee=E("bandpass",700+Math.random()*900,1.2),pe=n.createGain();pe.gain.setValueAtTime(0,C),pe.gain.linearRampToValueAtTime(X,C+.003),pe.gain.linearRampToValueAtTime(0,C+.03),q.connect(ee),ee.connect(pe),pe.connect(t),q.start(C,Math.random()*1.5,.05)}let I={beep(C){w({type:"square",f0:440,t0:C,dur:.12,vol:.12,lp:2400})},go(C){w({type:"sawtooth",f0:880,t0:C,dur:.4,vol:.12,lp:3e3}),w({type:"sine",f0:1320,t0:C,dur:.4,vol:.06}),w({type:"sine",f0:1760,t0:C+.02,dur:.25,vol:.04}),M({t0:C,dur:.05,vol:.1,type:"highpass",f0:3e3,q:.7})},boost(C){M({t0:C,dur:.6,vol:.25,type:"bandpass",f0:300,f1:3e3,q:1.2}),w({type:"sawtooth",f0:150,f1:600,t0:C,dur:.6,vol:.1,lp:1500,attack:.02})},jump(C){M({t0:C,dur:.25,vol:.2,type:"bandpass",f0:400,f1:1600,q:1})},land(C){w({type:"sine",f0:90,f1:50,t0:C,dur:.2,vol:.6,attack:.002}),M({t0:C,dur:.2,vol:.3,type:"lowpass",f0:800,q:.7})},hit(C){M({t0:C,dur:.08,vol:.3,type:"highpass",f0:2e3,q:.7});let X=340,q=[[1,.12,.35],[2.76,.08,.25],[5.4,.05,.2],[8.93,.03,.15]];for(let[ee,pe,Te]of q)w({type:"sine",f0:X*ee,t0:C,dur:Te,vol:pe,attack:.001})},select(C){w({type:"sine",f0:2400,t0:C,dur:.03,vol:.15,attack:.002})},confirm(C){w({type:"triangle",f0:660,t0:C,dur:.12,vol:.2}),w({type:"triangle",f0:990,t0:C+.09,dur:.18,vol:.2})},win(C){[523,659,784,1047,1319].forEach((q,ee)=>{let pe=ee<4?.13:.5,Te=C+ee*.11;w({type:"square",f0:q,t0:Te,dur:pe,vol:.1,lp:2500}),w({type:"triangle",f0:q,t0:Te,dur:pe,vol:.12})})},lose(C){[392,330,262].forEach((X,q)=>{w({type:"triangle",f0:X,t0:C+q*.22,dur:.3,vol:.25,attack:.01})})},pad(C){w({type:"sawtooth",f0:300,f1:1500,t0:C,dur:.15,vol:.12,lp:4e3})},lap(C){w({type:"sine",f0:1e3,t0:C,dur:.08,vol:.2}),w({type:"sine",f0:1e3,t0:C+.15,dur:.08,vol:.2})}};function B(C){let X=n.createOscillator();X.type="sine",X.frequency.setValueAtTime(150,C),X.frequency.exponentialRampToValueAtTime(45,C+.12);let q=n.createGain();q.gain.setValueAtTime(.5,C),q.gain.exponentialRampToValueAtTime(.001,C+.3),X.connect(q),q.connect(c),X.start(C),X.stop(C+.32)}function z(C,X){let q=n.createBufferSource();q.buffer=i;let ee=E("highpass",7e3,.7),pe=n.createGain();pe.gain.setValueAtTime(X,C),pe.gain.exponentialRampToValueAtTime(.001,C+.04),q.connect(ee),ee.connect(pe),pe.connect(c),q.start(C,Math.random()*1.5,.05)}function L(C,X,q){let ee=n.createOscillator();ee.type="sawtooth",ee.frequency.value=X;let pe=E("lowpass",1e3,6);pe.frequency.setValueAtTime(1e3,C),pe.frequency.exponentialRampToValueAtTime(180,C+q);let Te=n.createGain();Te.gain.setValueAtTime(1e-4,C),Te.gain.linearRampToValueAtTime(.16,C+.01),Te.gain.exponentialRampToValueAtTime(1e-4,C+q),ee.connect(pe),pe.connect(Te),Te.connect(c),ee.start(C),ee.stop(C+q+.02)}function F(C,X){let q=n.createOscillator();q.type="triangle",q.frequency.value=X;let ee=n.createGain();ee.gain.setValueAtTime(1e-4,C),ee.gain.linearRampToValueAtTime(.035,C+.005),ee.gain.exponentialRampToValueAtTime(1e-4,C+.11),q.connect(ee),ee.connect(c),q.start(C),q.stop(C+.13)}function U(C,X){let q=C&15,ee=LE[C>>4&3];if(q%4===0&&B(X),q%2===1&&z(X,q%4===2?.1:.05),q%2===0){let pe=q===6||q===14?12:0;L(X,N0(ee.root+pe),D0*1.8);let Te=[0,ee.iv[0],ee.iv[1],12];F(X,N0(ee.root+24+Te[q>>1&3]))}}function Y(){if(!e||!h)return;let C=n.currentTime;f<C&&(f=C+.02);let X=C+IE;for(;f<X;)U(d,f),f+=D0,d++}function H(){if(!e){if(!P0)return;try{n=new P0,T()}catch{n=null,e=!1;return}}if(n.state==="suspended")try{let C=n.resume();C&&C.catch&&C.catch(()=>{})}catch{}}function ne(C,X){if(!e)return;C=ho(C),X=ho(X);let q=n.currentTime,ee=C*Df,pe=Math.min(Df-1,Math.floor(ee)),Ie=.45+.55*Math.min(1,ee-pe),G=ho(C/.08),Ve=lr+(lr*Math.pow(Df,Ie)-lr)*G,ke=.5*C+.5*X,ze=260+3200*Math.pow(ke,1.3),De=.07+.2*C*(.35+.65*X)+.03*X;if(y(s.osc1.frequency,Ve,.04),y(s.osc2.frequency,Ve,.04),y(s.osc3.frequency,Ve*.5,.04),y(s.nBp.frequency,Ve*4,.05),y(s.nGain.gain,.04+.22*X,.05),y(s.lp.frequency,ze,.05),g!==-1&&pe!==g){let Ye=s.gain.gain;Ye.cancelScheduledValues(q),Ye.setTargetAtTime(De*.35,q,.004),Ye.setTargetAtTime(De,q+.06,.03),_=q+.12}if(g=pe,q>=_&&y(s.gain.gain,De,.05),X>=m)m=X;else if(m-X>.3){if(C>.6&&q>=p){let Ye=.12+.2*C;for(let Ne=0;Ne<3;Ne++)S(q+Ne*.05+Math.random()*.02,Ye*(1-Ne*.2));p=q+.4}m=X}}function ue(C){if(!e)return;let X=ho(C),q=X*X;y(r.filter.frequency,250+1600*q,.2),y(r.gain.gain,.03+.35*q,.15)}function me(C){if(!e)return;let X=ho(C);y(o.filter.frequency,900+500*X,.05),y(o.gain.gain,X,.03)}function be(C){e&&y(a.gain.gain,ho(C)*.25,.1)}function le(C){e&&Object.prototype.hasOwnProperty.call(I,C)&&I[C](n.currentTime+.01)}function te(C){l=!!C,e&&y(t.gain,l?0:L0,.015)}function $(){e&&(h||(h=!0,d=0,f=n.currentTime+.05),y(c.gain,CE,.05),u||(u=setInterval(Y,PE)),Y())}function se(){h=!1,u&&(clearInterval(u),u=null),e&&y(c.gain,0,.05)}return{resume:H,setEngine:ne,setWind:ue,setSkid:me,setRain:be,play:le,setMuted:te,startMusic:$,stopMusic:se}}var Nf=1/120,qn=new URLSearchParams(location.search),NE=document.getElementById("game"),mi=new nc({canvas:NE,antialias:!0,powerPreference:"high-performance"});mi.setPixelRatio(Math.min(window.devicePixelRatio,2));mi.shadowMap.enabled=!0;mi.shadowMap.type=xc;mi.toneMapping=Xo;mi.toneMappingExposure=1.05;mi.outputColorSpace=Rt;var zt=new ko,Rn=new Yt(70,1,.3,6e3);zt.add(Rn);var ts=M0(Rn),W0=document.getElementById("ui"),pn=E0(W0),es=I0(W0),kt=U0();es.setAudio?.(kt);var ol=new Set,hn={throttle:0,brake:0,steer:0,boost:!1,drift:!1};var UE=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement)){if(ol.add(n.code),Zt==="race"&&UE.includes(n.code)&&n.preventDefault(),Fs?.active){let e=["Digit1","Digit2","Digit3","Numpad1","Numpad2","Numpad3"].indexOf(n.code);e>=0&&Fs.pick(e%3)}n.code==="KeyM"&&(il=!il,kt.setMuted(il)),(n.code==="KeyP"||n.code==="Escape")&&Zt==="race"&&(Of=!Of)}});addEventListener("keyup",n=>ol.delete(n.code));addEventListener("blur",()=>ol.clear());addEventListener("pointerdown",()=>kt.resume(),{once:!1});var il=qn.has("mute");il&&kt.setMuted(!0);var Of=!1;function FE(n){let e=(...s)=>s.some(r=>ol.has(r));hn.throttle=e("ArrowUp","KeyW")?1:0,hn.brake=e("ArrowDown","KeyS")?1:0;let t=(e("ArrowRight","KeyD")?1:0)-(e("ArrowLeft","KeyA")?1:0);hn.steer=t,hn.boost=e("Space"),hn.drift=e("ShiftLeft","ShiftRight","KeyX");let i=navigator.getGamepads?.()[0];if(i){let s=i.axes[0]||0;Math.abs(s)>.12&&(hn.steer=s),hn.throttle=Math.max(hn.throttle,i.buttons[7]?.value||0,i.buttons[0]?.pressed?1:0),hn.brake=Math.max(hn.brake,i.buttons[6]?.value||0),hn.boost=hn.boost||!!i.buttons[2]?.pressed,hn.drift=hn.drift||!!i.buttons[1]?.pressed||!!i.buttons[5]?.pressed}return hn}function OE(n){let e=new ko,t=new _s(50,32,16),i=new k(...n.sunDir).normalize(),s=new Et({side:Jt,uniforms:{uTop:{value:new Re(n.skyTop)},uHor:{value:new Re(n.skyHorizon)},uGround:{value:new Re(n.hemiGround)},uSun:{value:new Re(n.sunColor).multiplyScalar(n.sunIntensity)},uSunDir:{value:i}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 uTop, uHor, uGround, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = d.y > 0.0 ? mix(uHor, uTop, pow(d.y, 0.55)) : mix(uHor, uGround, pow(-d.y, 0.35));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 350.0) * 14.0 + pow(s, 12.0) * 0.5);
        gl_FragColor = vec4(c, 1.0);
      }`});e.add(new at(t,s));let r=new Yr(mi),o=r.fromScene(e,.02);return r.dispose(),t.dispose(),s.dispose(),o}var F0=new Map;function O0(n,e="#f4f2ec",t="#16181d"){let i=n+e+t,s=F0.get(i);if(!s){let o=document.createElement("canvas");o.width=40,o.height=28;let a=o.getContext("2d");a.fillStyle=e,a.fillRect(0,0,40,28),a.fillStyle=t,a.font='italic 900 26px "Arial Narrow", Impact, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(String(n),20,15),s=new fi(o),s.colorSpace=Rt,s.magFilter=rn,s.minFilter=Zn,F0.set(i,s)}let r=new at(new Pn(1,1),new it({map:s,roughness:.5,side:Ct,polygonOffset:!0,polygonOffsetFactor:-2}));return r.userData.ownGeometry=!0,r}var la=null;function BE(){if(la)return la;let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),la=new fi(n),la.colorSpace=Rt,la}function Uf(n,e,t){let i=new ic(new Ho({map:BE(),color:n,transparent:!0,opacity:t,blending:Fr,depthWrite:!1,fog:!1}));return i.scale.setScalar(e),i}var Xe=null,Zt="boot",Bf=0,zf=0,kf=0,mo=99;function zE(){if(Xe){for(let n of Xe.bikes)zt.remove(n.model.group);zt.remove(Xe.road.group),Xe.road.dispose?.(),Xe.env.dispose?.(),Xe.env.group?.parent&&Xe.env.group.parent.remove(Xe.env.group),Xe.fx.dispose?.(),Xe.post.dispose?.(),Xe.envMap?.dispose(),zt.environment=null,Xe.mirror&&(zt.remove(Xe.mirror),Xe.mirror.dispose()),Xe.fill&&zt.remove(Xe.fill),Xe.scenery&&(zt.remove(Xe.scenery.group),Xe.scenery.dispose()),Xe.clouds&&(zt.remove(Xe.clouds),Xe.clouds.geometry.dispose(),Xe.clouds.material.dispose()),Xe.sunGlow&&(zt.remove(Xe.sunGlow),Xe.sunGlow.material.dispose()),Xe=null}}var bn=null,X0={},fo=new Map,rl=new Map;function ha(n){if(!fo.has(n.id)){fo.set(n.id,fetch("assets/v3/"+n.file).then(e=>{if(!e.ok)throw new Error("\xE9tape indisponible : "+n.id);return e.json()}).then(e=>(e.props=X0,rl.set(n.id,e),e)));for(let e of fo.keys()){if(fo.size<=2)break;e!==n.id&&(fo.delete(e),rl.delete(e))}}return fo.get(n.id)}function Hf({trackSeed:n,weatherId:e,laps:t,riders:i,autopilot:s,realData:r=null,final:o=!0,carry:a=null,keepClouds:c=null}){let l=[performance.now()],h=L=>{l.push(L,Math.round(performance.now()-l[0]))};zE(),h("dispose");let u=zn(n),f=!!r,d=f?r._track||Wh(r):$p(n);f&&(r._track=null),h("track");let g=Ei[e]||Ei.sunset;Rn.far=f?9500:6e3,Rn.updateProjectionMatrix();let _=f?zm(zt,d,g,u.fork("env")):Pm(zt,d,g,u.fork("env"));h("env");let m=OE(g);zt.environment=m.texture,zt.environmentIntensity=g.night?.55:.5,mi.toneMappingExposure=g.night?1.5:.82;let p=Uf(g.sunColor,g.night?900:2200,g.night?.35:.75);p.userData.dir=new k(...g.sunDir).normalize(),zt.add(p);let b=new vi(g.night?3820160:13226728,g.night?.25:.45);b.position.set(-g.sunDir[0],.6,-g.sunDir[2]).multiplyScalar(100),b.name="fill-light",zt.add(b),h("envmap");let v=f&&r._road||Bh(d,g,u.fork("road"));f&&(r._road=null),zt.add(v.group),h("road"),f||kh(_.group,L=>L.geometry.attributes.position.count>2e4?1:.45),kh(v.group,()=>.4);let x=f?{group:new pt,dispose(){}}:Um(d,g,u.fork("scenery"),_.heightAt);_.sun?.shadow&&(_.sun.shadow.mapSize.set(4096,4096),_.sun.shadow.radius=5,_.sun.shadow.blurSamples=16,_.sun.shadow.normalBias=.05,_.sun.shadow.map?.dispose(),_.sun.shadow.map=null),zt.add(x.group);let E=null,T=f?Math.min(.25,g.wet||.25):g.sheen??g.wet;T>.5&&!qn.has("noreflect")&&(E=new Yo(new Pn(900,900),{textureWidth:1280,textureHeight:720,clipBias:.05,multisample:4}),E.rotation.x=-Math.PI/2,E.material.colorWrite=!1,E.material.depthWrite=!1,E.material.depthTest=!1,E.frustumCulled=!1,E.renderOrder=-10,E.name="road-mirror",zt.add(E));let y=v.group.getObjectByName("road-asphalt");y&&T>.5&&(y.material.envMap=m.texture,y.material.envMapIntensity=E?.35:1.25,y.material.metalness=.3,Mm(y.material,g.sheen??g.wet,E?{texture:E.getRenderTarget().texture,matrix:E.material.uniforms.textureMatrix.value}:null)),h("voxelize");let w=c||ym(g,u.fork("clouds"));zt.add(w);let M=m0(zt,g),S=b0(mi,zt,Rn,g);h("fx");let I=rm({track:d,laps:t,env:g,rng:u.fork("race"),riders:i,final:o,carry:a}),B=I.riders.map(L=>{let F=l0({color:L.color,accent:L.accent,isPlayer:!!L.isPlayer&&!!g.night,detail:L.isPlayer?"hi":"lo"});F.group.rotation.order="YXZ";let U=F.group.getObjectByName("chassis")||F.group,Y=Uf(16722458,.3,.3);if(Y.position.set(0,.67,-.42),U.add(Y),g.night){let ue=Uf(16773840,1.3,.8);ue.position.set(0,.48,1.66),U.add(ue)}F.tailGlow=Y;let H=L.isPlayer?1:2+I.riders.indexOf(L)*7%97;for(let ue of[-1,1]){let me=O0(H);me.scale.set(.24,.17,1),me.position.set(.105*ue,.6,-.2),me.rotation.y=ue*Math.PI/2,U.add(me)}let ne=O0(H);return ne.scale.set(.2,.14,1),ne.position.set(0,.585,1.6),ne.rotation.x=-.75,U.add(ne),zt.add(F.group),{rider:L,model:F,pose:{},prev:new k,has:!1,w:{x:0,y:0,z:0,heading:0,slope:0}}}),z=s?wc({id:"auto",name:"auto",skill:.9,aggression:.5,jumpSkill:.8,lineSkill:.9,style:"r\xE9gulier"},u.fork("auto")):null;if(Xe={track:d,weather:g,env:_,road:v,fx:M,post:S,race:I,bikes:B,autoAI:z,envMap:m,sunGlow:p,clouds:w,scenery:x,mirror:E,fill:b,playerBike:B.find(L=>L.rider.isPlayer)||B[0]},h("bikes"),window.__loadTimes=l.slice(1),f){let L=[];for(let F of d.features)F.type==="tunnel"&&F.name&&L.push({s:F.s0-90,text:F.name.toUpperCase()});for(let F of d.bridges)F.name&&F.s1-F.s0>150&&L.push({s:F.s0-40,text:F.name.toUpperCase()});for(let F of _.places||[])L.push({s:F.s-20,text:F.name.toUpperCase()});for(let F of _.props||[])F.label&&F.dist<700&&L.push({s:Math.max(0,F.s-500),text:F.label.toUpperCase()});L.sort((F,U)=>F.s-U.s),Xe.announce=L.filter(F=>F.s>=(d.raceStart||0)-60&&F.s<=d.raceEnd),Xe.announceIdx=0}return pn.setTrack(d),j0(),Y0(.016),ts.snap(al()),zf=I.player?.position||i.length,kf=1,mo=99,window.__game={stage:Xe,renderer:mi,scene:zt,camera:Rn,RL:Uh},window.__tick=K0,Xe}var Ri={x:0,y:0,z:0,heading:0,yaw:0,lean:0,speedRatio:0,airborne:!1,boosting:!1,slope:0};function al(){let n=Xe.playerBike,e=n.rider.state;return Ri.x=n.w.x,Ri.y=n.w.y,Ri.z=n.w.z,Ri.heading=n.w.heading,Ri.yaw=-q0(e),Ri.speedRatio=Math.min(1.3,e.speed/n.rider.stats.maxSpeed),Ri.airborne=e.airborne,Ri.boosting=e.boostT>0,Ri.slope=n.w.slope||0,Ri}var kE=.8,B0=.7;function q0(n){let e=n.vdir??n.yaw;return e+kE*(n.yaw-e)}function Y0(n){let{track:e,fx:t,weather:i}=Xe;for(let s of Xe.bikes){let r=s.rider.state;Ft(e,r.s,r.d,s.w),s.w.y+=r.yRel||0;let o=s.model.group;o.position.set(s.w.x,s.w.y,s.w.z);let a=s.w.heading-q0(r),c=s.w.heading-(r.vdir??r.yaw);o.rotation.y=a,o.position.x+=B0*(Math.sin(a)-Math.sin(c)),o.position.z+=B0*(Math.cos(a)-Math.cos(c)),o.rotation.x=r.airborne?0:-Math.atan(s.w.slope||0);let l=s.pose;if(l.lean=r.lean,l.steer=r.steer,l.pitch=r.pitch,l.compress=r.compress,l.wheelSpin=r.wheelSpin,l.speedRatio=r.speed/s.rider.stats.maxSpeed,l.speed=r.speed,l.airborne=r.airborne,l.drift=r.drift,l.boost=r.boostT>0,l.braking=s.rider.isPlayer?hn.brake>.1:!!s.rider.braking,s.model.update(l,n),s.model.tailGlow){let v=l.braking?1:0;s.model.tailGlow.material.opacity+=(.3+.6*v-s.model.tailGlow.material.opacity)*Math.min(1,n*12),s.model.tailGlow.scale.setScalar(.3+.55*v)}let h=o.rotation.y,u=Math.sin(h),f=Math.cos(h),d=s.w.x-u*.7,g=s.w.z-f*.7,_=s.w.y+.05,m=u*r.speed,p=f*r.speed;!r.airborne&&r.speed>8&&(r.drift>.8&&(Math.random()<r.drift*.9&&t.emit("smoke",d,_,g,m*.2,1.2,p*.2,1),s.has&&t.addSkid(s.prev.x,s.prev.y,s.prev.z,d,_,g,.16,.25+r.drift*.4)),!r.onRoad&&Math.random()<.7&&t.emit("dust",d,_,g,m*.25,1.5,p*.25,2),i.wet>.2&&r.speed>20&&Math.random()<i.wet*.8&&t.emit("spray",d,_,g,m*.35,2.5,p*.35,2)),r.boostT>0&&t.emit("boost",d-u*.4,_+.45,g-f*.4,m*.9,.2,p*.9,1),s.prev.set(d,_,g),s.has=!r.airborne;let b=s.rider.isPlayer?null:s.rider.frameEvents;b&&b.length&&$0(s,b,!1)}}function $0(n,e,t){let{fx:i}=Xe,s=n.rider.state,r=n.model.group.rotation.y,o=Math.sin(r)*s.speed,a=Math.cos(r)*s.speed;for(let c of e)c==="land"||c==="hardLand"?(i.emit("land",n.w.x,n.w.y+.1,n.w.z,o*.3,1,a*.3,c==="hardLand"?40:22),t&&(kt.play("land"),ts.shake(c==="hardLand"?.9:.45))):c==="wall"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,3,a*.5,26),t&&(kt.play("hit"),ts.shake(.7))):c==="crash"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,4,a*.5,40),i.emit("dust",n.w.x,n.w.y+.2,n.w.z,o*.3,2,a*.3,30),t&&(ts.shake(1.4),pn.flash("CHUTE !",1400))):c==="jump"?t&&kt.play("jump"):c==="boost"?t&&(kt.play("boost"),ts.shake(.3),pn.flash("BOOST !",600)):c==="pad"&&t&&(kt.play("pad"),ts.shake(.2))}function HE(n){let{race:e,autoAI:t,track:i}=Xe,s=e.player,r=hn;if(t||Zt==="finish")if(t){let a=e.riders.filter(c=>c!==s).map(c=>c.state);r=Ac(t,s.state,i,s.stats,a,n)}else r=VE;e.update(n,r);let o=s.state.events;o.length&&($0(Xe.playerBike,o,!t),o.length=0)}var VE={throttle:.3,brake:0,steer:0,boost:!1,drift:!1},Mn={speedKmh:0,position:1,total:8,lap:1,laps:3,time:0,bestLap:null,boostCharges:0,boostT:0,countdown:null,wrongWay:!1},Ff=[],z0=new k,k0=performance.now(),nl=0,sl=0;function Z0(n){requestAnimationFrame(Z0);let e=Math.min(.05,(n-k0)/1e3);k0=n,K0(e)}function K0(n){if(!Xe)return;if(Of){Xe.post.render(0);return}sl+=n,Bf+=n,Zt==="race"&&Fs?.update(n);let{race:e}=Xe,t=Zt==="race"||Zt==="attract"||Zt==="finish";if(t){Zt==="race"&&FE(n),nl+=n;let a=0;for(;nl>=Nf&&a++<8;)HE(Nf),nl-=Nf;a>=8&&(nl=0)}Y0(n);let i=e.player,s=i.state,r=Math.min(1.3,s.speed/i.stats.maxSpeed),o=al();Zt==="intro"||Zt==="menu"||Zt==="finish"&&Bf>1.2?GE(o,n):ts.update(n,o),z0.set(o.x,o.y,o.z),Xe.env.update(n,sl,z0),Xe.mirror&&Xe.mirror.position.set(o.x,o.y-(s.yRel||0)+.02,o.z),Xe.sunGlow.position.copy(Rn.position).addScaledVector(Xe.sunGlow.userData.dir,3200),Xe.road.update(n,sl),Xe.fx.setSpeed(t?r:0,s.boostT>0),Xe.fx.update(n,Rn),Xe.post.setSpeed(t?r:0,s.boostT>0),Xe.post.render(n),(Zt==="race"||Zt==="finish")&&(kt.setEngine(Math.min(1,r),Zt==="race"?hn.throttle:.3),kt.setWind(Math.min(1,r)),kt.setSkid(s.airborne?0:Math.min(1,s.drift))),Zt==="race"&&WE(e,i,s)}var H0=new k;function GE(n,e){let t=sl*.35+n.heading;H0.set(n.x+Math.sin(t)*7.5,n.y+2.6,n.z+Math.cos(t)*7.5),Rn.position.lerp(H0,Math.min(1,e*2.5)),Rn.fov+=(55-Rn.fov)*Math.min(1,e*3),Rn.updateProjectionMatrix(),Rn.lookAt(n.x,n.y+.9,n.z)}function WE(n,e,t){Mn.speedKmh=t.speed*3.6,Mn.position=e.position,Mn.total=n.riders.length,Mn.lap=Math.min(n.laps,Math.max(1,e.lap)),Mn.laps=n.laps,st&&Zt!=="attract"&&(Mn.lap=st.index+1,Mn.laps=st.metas.length),pn.setLapLabel?.(st&&Zt!=="attract"?"TRON\xC7ON":"TOUR"),Mn.time=n.time,Mn.bestLap=e.bestLap??null,Mn.boostCharges=t.boostCharges,Mn.boostT=t.boostT,Mn.gear=t.gear,Mn.rpm=t.rpm,Mn.countdown=n.phase==="countdown"?n.countdown:n.time<.9?0:null,Mn.wrongWay=Math.abs(t.yaw)>1.4,pn.update(Mn),Ff.length=0;for(let i of n.riders)Ff.push({s:i.state.s,d:i.state.d,isPlayer:!!i.isPlayer,color:i.color});if(pn.updateMinimap(Ff),n.phase==="countdown"){let i=Math.ceil(n.countdown);i!==mo&&(mo=i,i>0&&kt.play("beep"))}else mo!==0&&(mo=0,kt.play("go"),kt.startMusic?.());if(n.phase==="racing"){let i=Xe.announce;if(i)for(;Xe.announceIdx<i.length&&i[Xe.announceIdx].s<=t.s;)pn.flash(i[Xe.announceIdx].text,2e3),Xe.announceIdx++;e.position<zf&&!(i&&Xe.announceIdx>0&&t.s-i[Xe.announceIdx-1].s<120)&&pn.flash(e.position===1?"EN T\xCATE !":"+1 PLACE",700),zf=e.position,e.lap!==kf&&e.lap<=n.laps&&(kf=e.lap,kt.play("lap"),e.lap===n.laps&&pn.flash("DERNIER TOUR",1400))}st&&Zt==="race"&&n.phase==="racing"&&XE(t.s),n.phase==="relay"&&Zt==="race"&&YE(),n.phase==="finished"&&Zt==="race"&&$E()}var st=null,V0=["track","near","mid","road"];function XE(n){let e=st.metas[st.index+1];if(!e||n<Xe.track.raceEnd*.35)return;let t=rl.get(e.id);if(!t||(st.prepFor!==e.id&&(st.prepFor=e.id,st.prepStep=0,st.prepWait=0),st.prepStep>=V0.length||st.prepWait-- >0))return;let i=V0[st.prepStep++];st.prepWait=20,i==="track"?t._track=Wh(t):i==="road"?t._road=Bh(t._track,Ei[st.weatherId]||Ei.sunset,zn("REAL:"+e.id).fork("road")):Bm(t,i)}var Us=Hm(),Fs=null;function J0(n){let e=st.metas[st.splits.length],t=st.splits.length===0,i=Gm(Us,e.id+(t?":g":":r"),n-st.splitStart);return st.splitStart=n,st.splits.push({name:e.subtitle,...i}),Gc(Us),i}function qE(){if(!It)return;let n=Xm(Dc({...It,stageIndex:st.index}));if(!n.length)return;let e=t=>{if(!Nc(It,t.id))return;let i=st.riders.find(s=>s.isPlayer);i&&Object.assign(i.stats,er(It)),pn.flash(`${t.icon||""} ${t.name.toUpperCase()}`,1800),kt.play("lap")};if(st.autopilot&&!qn.has("pick")){e(n[0]);return}Fs=Fs||qm(),Fs.show(n,e,9)}function YE(){let n=st&&st.metas[st.index+1];if(!n)return;let e=rl.get(n.id);if(!e){st.waiting||(st.waiting=!0,pn.flash("CHARGEMENT\u2026",1500),ha(n).catch(()=>{}));return}let t=Xe.race,i=t.player||t.riders[0],s=Ft(t.track,i.state.s,i.state.d,{}),r=Xe.clouds;Xe.clouds=null,r&&zt.remove(r);let o=(e.raceStart||0)-(t.track.raceEnd??t.track.length),a=new Map;for(let u of t.riders)u.state.s+=o,u.state._padKey=null,a.set(u.id,u.state);st.index+=1,st.waiting=!1;let c=performance.now();if(Hf({trackSeed:"REAL:"+n.id,weatherId:st.weatherId,laps:1,riders:st.riders,autopilot:st.autopilot,realData:e,final:st.index===st.metas.length-1,carry:{time:t.time,states:a},keepClouds:r}),r){let u=Ft(Xe.track,i.state.s,i.state.d,{});r.position.x+=u.x-s.x,r.position.z+=u.z-s.z}mo=0,ts.snap(al()),st.hitch=Math.max(st.hitch||0,performance.now()-c),window.__relay={index:st.index,ms:Math.round(performance.now()-c)};let l=J0(t.time);pn.flash(`TRON\xC7ON ${qh(l.time)}${l.delta===null?"":" ("+Vm(l.delta)+")"}${l.record&&l.best!==null?" \xB7 RECORD":""} \u2014 ${n.subtitle.split(" \xB7 ")[0].toUpperCase()}`,3200),qE();let h=st.metas[st.index+1];h&&setTimeout(()=>ha(h).catch(()=>{}),3e3)}function j0(){let n=innerWidth,e=innerHeight;mi.setSize(n,e,!1),Rn.aspect=n/e,Rn.updateProjectionMatrix(),Xe?.post.setSize(n,e)}addEventListener("resize",j0);function ua(n){Zt=n,Bf=0}var It=null,po=Lh(),Q0=null;function $E(){if(ua("finish"),Fs?.hide(),st&&It){let n=Xe.race.player.finishTime??Xe.race.time,e=J0(n),t=!!bn&&st.metas.length===bn.stages.length,i=t?Wm(Us,n):null;Us.finishes+=1,Gc(Us),It.summary={splits:st.splits,total:i,time:n,full:t,last:e}}pn.flash(`ARRIV\xC9E \u2014 ${Xe.race.player.position}${Xe.race.player.position===1?"er":"e"}`,2200),kt.play(Xe.race.player.position<=3?"win":"lose"),kt.stopMusic?.(),setTimeout(()=>Q0?.(),3200)}async function G0(){st=null,Fs?.hide();let n=Lc(Pc("ATTRACT"));for(let i of n)i.stats=er({upgrades:[]});let e=bn?bn.stages[Math.min(3,bn.stages.length-1)]:null,t=e?await ha(e).catch(()=>null):null;Hf({trackSeed:t?"REAL:"+t.id:"ATTRACT-"+Uc(),weatherId:t?"sicily":"sunset",laps:t?1:99,riders:n,autopilot:!0,realData:t}),pn.hide(),ua("attract")}async function ZE(){if(await jm().catch(n=>console.warn("Mod\xE8le de moto indisponible, repli sur le mod\xE8le proc\xE9dural :",n)),!qn.has("noreal")&&(bn=await fetch("assets/v3/route.json").then(n=>n.ok?n.json():null).catch(()=>null),bn&&!bn.stages?.length&&(bn=null),bn)){let n=await fetch("assets/v3/props/index.json").then(t=>t.ok?t.json():[]).catch(()=>[]);await Promise.all(Fm.filter(t=>n.includes(t)).map(t=>fetch(`assets/v3/props/${t}.json`).then(i=>i.ok?i.json():null).then(i=>{i&&(X0[t]=i)}).catch(()=>{})));let e=document.createElement("div");e.textContent="\xA9 contributeurs OpenStreetMap \xB7 relief Terrarium (Mapzen) \xB7 Sentinel-2 cloudless 2016 par EOX (CC BY 4.0)",e.style.cssText="position:fixed;left:50%;bottom:0.6vmin;transform:translateX(-50%);font:1.35vmin Arial,sans-serif;color:rgba(255,255,255,.72);text-shadow:0 1px 2px #000;pointer-events:none;z-index:40;white-space:nowrap",document.body.appendChild(e)}for(await G0(),document.getElementById("boot").remove(),requestAnimationFrame(Z0);;){let n=qn.get("seed"),e=Number(qn.get("stage"))||0;if(!n){let s=await es.showTitle({dailySeed:Uc(),meta:po,route:bn,records:Us});n=s.seed,s.stage&&(e=s.stage)}if(kt.resume(),It=Pc(n),bn){let s=Math.floor(e)-1;It.real=!0,s>0&&s<bn.stages.length||(s=0);let r=bn.stages.slice(s),o=r.reduce((a,c)=>a+c.length,0)/1e3;It.stages=[{name:bn.title,subtitle:`${bn.roads} \xB7 ${o.toFixed(0)} km d'une traite`,trackSeed:"REAL:"+r[0].id,weather:"sicily",laps:1,real:r}]}for(;!Ko(It);){let s=It.stages[It.stageIndex],r=er(It),o=Lc(It).map(l=>({...l,stats:l.isPlayer?r:er({upgrades:[]})}));es.hideAll();let a=null;st=null,s.real&&(pn.flash?.("CHARGEMENT\u2026"),a=await ha(s.real[0]),st={metas:s.real,index:0,riders:o,autopilot:qn.has("auto"),weatherId:qn.get("weather")||s.weather,splits:[],splitStart:0},Us.runs+=1,Gc(Us),s.real[1]&&setTimeout(()=>ha(s.real[1]).catch(()=>{}),4e3)),Hf({trackSeed:s.trackSeed,weatherId:qn.get("weather")||s.weather,laps:s.laps,riders:o,autopilot:qn.has("auto"),realData:a,final:!s.real||s.real.length===1}),ua("intro"),kt.setRain(Xe.weather.rain||0),qn.has("auto")||await es.showStageIntro({stage:s,index:It.stageIndex+1,total:It.stages.length,standings:no(It),weather:Xe.weather}),es.hideAll(),ts.snap(al()),pn.show(),ua("race"),await new Promise(l=>{Q0=l}),pn.hide(),kt.setEngine(.1,0),kt.setWind(0),kt.setSkid(0);let c=Xe.race.results();if(Ih(It,c),await es.showResults({results:c,standings:no(It),stage:s}),!Ko(It)){let l=Dc(It),h=It.upgrades.map(f=>Qs.find(d=>d.id===f)).filter(Boolean),u=await es.showUpgradeChoice({choices:l,index:It.stageIndex,total:It.stages.length,owned:h});Nc(It,u)}}let t=no(It),i=t.findIndex(s=>s.isPlayer)+1;po=Nh(po,It)||po,Dh(po),ua("menu"),await es.showRunEnd({standings:t,playerPosition:i,run:It,meta:po}),es.hideAll(),qn.delete("seed"),qn.delete("stage"),await G0()}}ZE().catch(n=>{console.error(n);let e=document.getElementById("boot")||document.body.appendChild(Object.assign(document.createElement("div"),{id:"boot"}));e.className="err",e.textContent=`Erreur de d\xE9marrage :
`+(n?.stack||n)});
