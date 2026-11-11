var V0=Object.defineProperty;var G0=(i,e)=>{for(var t in e)V0(i,t,{get:e[t],enumerable:!0})};var W0=0,Bf=1,X0=2;var mc=1,q0=2,Fi=3,yi=0,$t=1,Rt=2,_i=0,Cr=1,Dr=2,zf=3,kf=4,Zu=5,Oi=100,Y0=101,Z0=102,K0=103,$0=104,J0=200,Ku=201,j0=202,Q0=203,Fl=204,Do=205,eg=206,tg=207,ng=208,ig=209,sg=210,rg=211,og=212,ag=213,cg=214,Ol=0,Bl=1,zl=2,Nr=3,kl=4,Hl=5,Vl=6,Gl=7,$u=0,lg=1,ug=2,ds=0,Ju=1,ju=2,Qu=3,Go=4,hg=5,eh=6,th=7,Hf="attached",fg="detached",rp=300,Ur=301,Fr=302,Wl=303,Xl=304,gc=306,Hi=1e3,Bi=1001,No=1002,sn=1003,nh=1004;var Ar=1005;var Rn=1006,Co=1007;var Zn=1008;var Vi=1009,op=1010,ap=1011,Uo=1012,ih=1013,Gs=1014,li=1015,En=1016,sh=1017,rh=1018,Or=1020,cp=35902,lp=1021,up=1022,Kn=1023,hp=1024,fp=1025,Ir=1026,Br=1027,oh=1028,ah=1029,dp=1030,ch=1031;var lh=1033,ka=33776,Ha=33777,Va=33778,Ga=33779,ql=35840,Yl=35841,Zl=35842,Kl=35843,$l=36196,Jl=37492,jl=37496,Ql=37808,eu=37809,tu=37810,nu=37811,iu=37812,su=37813,ru=37814,ou=37815,au=37816,cu=37817,lu=37818,uu=37819,hu=37820,fu=37821,Wa=36492,du=36494,pu=36495,pp=36283,mu=36284,gu=36285,xu=36286;var zr=2300,kr=2301,il=2302,Vf=2400,Gf=2401,Wf=2402,dg=2500;var mp=0,xc=1,Wo=2,pg=3200,mg=3201;var uh=0,gg=1,us="",At="srgb",_n="srgb-linear",_c="linear",St="srgb";var cr=7680;var Xf=519,xg=512,_g=513,yg=514,gp=515,vg=516,Mg=517,Sg=518,bg=519,_u=35044,Mi=35048;var qf="300 es",zi=2e3,Xa=2001,ps=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yf=1234567,Io=Math.PI/180,Hr=180/Math.PI;function ui(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function gn(i,e,t){return Math.max(e,Math.min(t,i))}function hh(i,e){return(i%e+e)%e}function Eg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Tg(i,e,t){return i!==e?(t-i)/(e-i):0}function Po(i,e,t){return(1-t)*i+t*e}function wg(i,e,t,n){return Po(i,e,1-Math.exp(-t*n))}function Ag(i,e=1){return e-Math.abs(hh(i,e*2)-e)}function Rg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Cg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ig(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Pg(i,e){return i+Math.random()*(e-i)}function Lg(i){return i*(.5-Math.random())}function Dg(i){i!==void 0&&(Yf=i);let e=Yf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ng(i){return i*Io}function Ug(i){return i*Hr}function Fg(i){return(i&i-1)===0&&i!==0}function Og(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xp={DEG2RAD:Io,RAD2DEG:Hr,generateUUID:ui,clamp:gn,euclideanModulo:hh,mapLinear:Eg,inverseLerp:Tg,lerp:Po,damp:wg,pingpong:Ag,smoothstep:Rg,smootherstep:Cg,randInt:Ig,randFloat:Pg,randFloatSpread:Lg,seededRandom:Dg,degToRad:Ng,radToDeg:Ug,isPowerOfTwo:Fg,ceilPowerOfTwo:Og,floorPowerOfTwo:Bg,setQuaternionFromProperEuler:zg,normalize:Tt,denormalize:ci},$e=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ct=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],v=s[1],M=s[4],_=s[7],E=s[2],T=s[5],y=s[8];return r[0]=o*x+a*v+c*E,r[3]=o*m+a*M+c*T,r[6]=o*d+a*_+c*y,r[1]=l*x+u*v+h*E,r[4]=l*m+u*M+h*T,r[7]=l*d+u*_+h*y,r[2]=f*x+p*v+g*E,r[5]=f*m+p*M+g*T,r[8]=f*d+p*_+g*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,p=l*r-o*c,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*l-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(sl.makeScale(e,t)),this}rotate(e){return this.premultiply(sl.makeRotation(-e)),this}translate(e,t){return this.premultiply(sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},sl=new ct;function _p(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kg(){let i=Fo("canvas");return i.style.display="block",i}var Zf={};function Ao(i){i in Zf||(Zf[i]=!0,console.warn(i))}function Hg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Vg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Gg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ht={enabled:!0,workingColorSpace:_n,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===St&&(i.r=ki(i.r),i.g=ki(i.g),i.b=ki(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===St&&(i.r=Pr(i.r),i.g=Pr(i.g),i.b=Pr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===us?_c:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Kf=[.64,.33,.3,.6,.15,.06],$f=[.2126,.7152,.0722],Jf=[.3127,.329],jf=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qf=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ht.define({[_n]:{primaries:Kf,whitePoint:Jf,transfer:_c,toXYZ:jf,fromXYZ:Qf,luminanceCoefficients:$f,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:Kf,whitePoint:Jf,transfer:St,toXYZ:jf,fromXYZ:Qf,luminanceCoefficients:$f,outputColorSpaceConfig:{drawingBufferColorSpace:At}}});var lr,yu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{lr===void 0&&(lr=Fo("canvas")),lr.width=e.width,lr.height=e.height;let n=lr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=lr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ki(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Wg=0,qa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(rl(s[o].image)):r.push(rl(s[o]))}else r=rl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function rl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Xg=0,rn=class i extends ps{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Bi,s=Bi,r=Rn,o=Zn,a=Kn,c=Vi,l=i.DEFAULT_ANISOTROPY,u=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=ui(),this.name="",this.source=new qa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hi:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case No:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hi:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case No:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=rp;rn.DEFAULT_ANISOTROPY=1;var xt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,_=(p+1)/2,E=(d+1)/2,T=(u+f)/4,y=(h+x)/4,w=(g+m)/4;return M>_&&M>E?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=y/n):_>E?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=w/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=y/r,s=w/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(f-u)/v,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vu=class extends ps{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new qa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends vu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ya=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mu=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==f||l!==p||u!==g){let m=1-a,d=c*f+l*p+u*g+h*x,v=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let E=Math.sqrt(M),T=Math.atan2(E,d*v);m=Math.sin(m*T)/E,a=Math.sin(a*T)/E}let _=a*v;if(c=c*m+f*_,l=l*m+p*_,u=u*m+g*_,h=h*m+x*_,m===1-a){let E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*p-l*f,e[t+1]=c*g+u*f+l*h-a*p,e[t+2]=l*g+u*p+a*f-c*h,e[t+3]=u*g-a*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ed.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ed.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ol=new z,ed=new Qt,$n=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ua.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(e.matrixWorld),this.union(ua)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),ha.subVectors(this.max,go),ur.subVectors(e.a,go),hr.subVectors(e.b,go),fr.subVectors(e.c,go),ss.subVectors(hr,ur),rs.subVectors(fr,hr),Us.subVectors(ur,fr);let t=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Us.z,Us.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Us.z,0,-Us.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Us.y,Us.x,0];return!al(t,ur,hr,fr,ha)||(t=[1,0,0,0,1,0,0,0,1],!al(t,ur,hr,fr,ha))?!1:(fa.crossVectors(ss,rs),t=[fa.x,fa.y,fa.z],al(t,ur,hr,fr,ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ii=[new z,new z,new z,new z,new z,new z,new z,new z],si=new z,ua=new $n,ur=new z,hr=new z,fr=new z,ss=new z,rs=new z,Us=new z,go=new z,ha=new z,fa=new z,Fs=new z;function al(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Fs.fromArray(i,r);let a=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),c=e.dot(Fs),l=t.dot(Fs),u=n.dot(Fs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var qg=new $n,xo=new z,cl=new z,Fn=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):qg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);let t=xo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(xo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(cl)),this.expandByPoint(xo.copy(e.center).sub(cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pi=new z,ll=new z,da=new z,os=new z,ul=new z,pa=new z,hl=new z,Vr=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ll.copy(e).add(t).multiplyScalar(.5),da.copy(t).sub(e).normalize(),os.copy(this.origin).sub(ll);let r=e.distanceTo(t)*.5,o=-this.direction.dot(da),a=os.dot(this.direction),c=-os.dot(da),l=os.lengthSq(),u=Math.abs(1-o*o),h,f,p,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ll).addScaledVector(da,f),p}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);let n=Pi.dot(this.direction),s=Pi.dot(Pi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,n,s,r){ul.subVectors(t,e),pa.subVectors(n,e),hl.crossVectors(ul,pa);let o=this.direction.dot(hl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;os.subVectors(this.origin,e);let c=a*this.direction.dot(pa.crossVectors(os,pa));if(c<0)return null;let l=a*this.direction.dot(ul.cross(os));if(l<0||c+l>o)return null;let u=-a*os.dot(hl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class i{constructor(e,t,n,s,r,o,a,c,l,u,h,f,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,f,p,g,x,m)}set(e,t,n,s,r,o,a,c,l,u,h,f,p,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/dr.setFromMatrixColumn(e,0).length(),r=1/dr.setFromMatrixColumn(e,1).length(),o=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,p=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,p=c*h,g=l*u,x=l*h;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,p=c*h,g=l*u,x=l*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,p=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+x,t[1]=c*h,t[5]=x*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+x,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yg,e,Zg)}lookAt(e,t,n){let s=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),as.crossVectors(n,Nn),as.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),as.crossVectors(n,Nn)),as.normalize(),ma.crossVectors(Nn,as),s[0]=as.x,s[4]=ma.x,s[8]=Nn.x,s[1]=as.y,s[5]=ma.y,s[9]=Nn.y,s[2]=as.z,s[6]=ma.z,s[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],v=n[3],M=n[7],_=n[11],E=n[15],T=s[0],y=s[4],w=s[8],S=s[12],b=s[1],I=s[5],B=s[9],k=s[13],L=s[2],O=s[6],U=s[10],Y=s[14],H=s[3],ie=s[7],le=s[11],pe=s[15];return r[0]=o*T+a*b+c*L+l*H,r[4]=o*y+a*I+c*O+l*ie,r[8]=o*w+a*B+c*U+l*le,r[12]=o*S+a*k+c*Y+l*pe,r[1]=u*T+h*b+f*L+p*H,r[5]=u*y+h*I+f*O+p*ie,r[9]=u*w+h*B+f*U+p*le,r[13]=u*S+h*k+f*Y+p*pe,r[2]=g*T+x*b+m*L+d*H,r[6]=g*y+x*I+m*O+d*ie,r[10]=g*w+x*B+m*U+d*le,r[14]=g*S+x*k+m*Y+d*pe,r[3]=v*T+M*b+_*L+E*H,r[7]=v*y+M*I+_*O+E*ie,r[11]=v*w+M*B+_*U+E*le,r[15]=v*S+M*k+_*Y+E*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+r*c*h-s*l*h-r*a*f+n*l*f+s*a*p-n*c*p)+x*(+t*c*p-t*l*f+r*o*f-s*o*p+s*l*u-r*c*u)+m*(+t*l*h-t*a*p-r*o*h+n*o*p+r*a*u-n*l*u)+d*(-s*a*u-t*c*h+t*a*f+s*o*h-n*o*f+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],v=h*m*l-x*f*l+x*c*p-a*m*p-h*c*d+a*f*d,M=g*f*l-u*m*l-g*c*p+o*m*p+u*c*d-o*f*d,_=u*x*l-g*h*l+g*a*p-o*x*p-u*a*d+o*h*d,E=g*h*c-u*x*c-g*a*f+o*x*f+u*a*m-o*h*m,T=t*v+n*M+s*_+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let y=1/T;return e[0]=v*y,e[1]=(x*f*r-h*m*r-x*s*p+n*m*p+h*s*d-n*f*d)*y,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*d+n*c*d)*y,e[3]=(h*c*r-a*f*r-h*s*l+n*f*l+a*s*p-n*c*p)*y,e[4]=M*y,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*y,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*d-t*c*d)*y,e[7]=(o*f*r-u*c*r+u*s*l-t*f*l-o*s*p+t*c*p)*y,e[8]=_*y,e[9]=(g*h*r-u*x*r-g*n*p+t*x*p+u*n*d-t*h*d)*y,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*d+t*a*d)*y,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*p-t*a*p)*y,e[12]=E*y,e[13]=(u*x*s-g*h*s+g*n*f-t*x*f-u*n*m+t*h*m)*y,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*m-t*a*m)*y,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*f+t*a*f)*y,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,p=r*u,g=r*h,x=o*u,m=o*h,d=a*h,v=c*l,M=c*u,_=c*h,E=n.x,T=n.y,y=n.z;return s[0]=(1-(x+d))*E,s[1]=(p+_)*E,s[2]=(g-M)*E,s[3]=0,s[4]=(p-_)*T,s[5]=(1-(f+d))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+M)*y,s[9]=(m-v)*y,s[10]=(1-(f+x))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=dr.set(s[0],s[1],s[2]).length(),o=dr.set(s[4],s[5],s[6]).length(),a=dr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ri.copy(this);let l=1/r,u=1/o,h=1/a;return ri.elements[0]*=l,ri.elements[1]*=l,ri.elements[2]*=l,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=h,ri.elements[9]*=h,ri.elements[10]*=h,t.setFromRotationMatrix(ri),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=zi){let c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(a===zi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Xa)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=zi){let c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*l,p=(n+s)*u,g,x;if(a===zi)g=(o+r)*h,x=-2*h;else if(a===Xa)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},dr=new z,ri=new et,Yg=new z(0,0,0),Zg=new z(1,1,1),as=new z,ma=new z,Nn=new z,td=new et,nd=new Qt,hi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(gn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(gn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return td.makeRotationFromQuaternion(e),this.setFromRotationMatrix(td,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nd.setFromEuler(this),this.setFromQuaternion(nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var Za=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kg=0,id=new z,pr=new Qt,Li=new et,ga=new z,_o=new z,$g=new z,Jg=new Qt,sd=new z(1,0,0),rd=new z(0,1,0),od=new z(0,0,1),ad={type:"added"},jg={type:"removed"},mr={type:"childadded",child:null},fl={type:"childremoved",child:null},Dt=class i extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new hi,n=new Qt,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new ct}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(sd,e)}rotateY(e){return this.rotateOnAxis(rd,e)}rotateZ(e){return this.rotateOnAxis(od,e)}translateOnAxis(e,t){return id.copy(e).applyQuaternion(this.quaternion),this.position.add(id.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sd,e)}translateY(e){return this.translateOnAxis(rd,e)}translateZ(e){return this.translateOnAxis(od,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ga.copy(e):ga.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(_o,ga,this.up):Li.lookAt(ga,_o,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(Li),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ad),mr.child=e,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jg),fl.child=e,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ad),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,$g),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,Jg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Dt.DEFAULT_UP=new z(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oi=new z,Di=new z,dl=new z,Ni=new z,gr=new z,xr=new z,cd=new z,pl=new z,ml=new z,gl=new z,xl=new xt,_l=new xt,yl=new xt,hs=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),oi.subVectors(e,t),s.cross(oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){oi.subVectors(s,t),Di.subVectors(n,t),dl.subVectors(e,t);let o=oi.dot(oi),a=oi.dot(Di),c=oi.dot(dl),l=Di.dot(Di),u=Di.dot(dl),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ni.x),c.addScaledVector(o,Ni.y),c.addScaledVector(a,Ni.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return xl.setScalar(0),_l.setScalar(0),yl.setScalar(0),xl.fromBufferAttribute(e,t),_l.fromBufferAttribute(e,n),yl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(xl,r.x),o.addScaledVector(_l,r.y),o.addScaledVector(yl,r.z),o}static isFrontFacing(e,t,n,s){return oi.subVectors(n,t),Di.subVectors(e,t),oi.cross(Di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),oi.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;gr.subVectors(s,n),xr.subVectors(r,n),pl.subVectors(e,n);let c=gr.dot(pl),l=xr.dot(pl);if(c<=0&&l<=0)return t.copy(n);ml.subVectors(e,s);let u=gr.dot(ml),h=xr.dot(ml);if(u>=0&&h<=u)return t.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(gr,o);gl.subVectors(e,r);let p=gr.dot(gl),g=xr.dot(gl);if(g>=0&&p<=g)return t.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(xr,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return cd.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(cd,a);let d=1/(m+x+f);return o=x*d,a=f*d,t.copy(n).addScaledVector(gr,o).addScaledVector(xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},xa={h:0,s:0,l:0};function vl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=hh(e,1),t=gn(t,0,1),n=gn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=vl(o,r,e+1/3),this.g=vl(o,r,e),this.b=vl(o,r,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=yp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return ht.fromWorkingColorSpace(mn.copy(this),e),Math.round(gn(mn.r*255,0,255))*65536+Math.round(gn(mn.g*255,0,255))*256+Math.round(gn(mn.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(mn.copy(this),t);let n=mn.r,s=mn.g,r=mn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=At){ht.fromWorkingColorSpace(mn.copy(this),e);let t=mn.r,n=mn.g,s=mn.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+t,cs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cs),e.getHSL(xa);let n=Po(cs.h,xa.h,t),s=Po(cs.s,xa.s,t),r=Po(cs.l,xa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new Ae;Ae.NAMES=yp;var Qg=0,Sn=class extends ps{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=ui(),this.name="",this.blending=Cr,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Do,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fl&&(n.blendSrc=this.blendSrc),this.blendDst!==Do&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Wt=class extends Sn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=$u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Kt=new z,_a=new $e,dt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_u,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_a.fromBufferAttribute(this,t),_a.applyMatrix3(e),this.setXY(t,_a.x,_a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_u&&(e.usage=this.usage),e}};var Ka=class extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var $a=class extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ex=0,Yn=new et,Ml=new Dt,_r=new z,Un=new $n,yo=new $n,nn=new z,mt=class i extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_p(e)?$a:Ka)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ct().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return Ml.lookAt(e),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];yo.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Un.min,yo.min),Un.expandByPoint(nn),nn.addVectors(Un.max,yo.max),Un.expandByPoint(nn)):(Un.expandByPoint(yo.min),Un.expandByPoint(yo.max))}Un.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)nn.fromBufferAttribute(a,l),c&&(_r.fromBufferAttribute(e,l),nn.add(_r)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<n.count;w++)a[w]=new z,c[w]=new z;let l=new z,u=new z,h=new z,f=new $e,p=new $e,g=new $e,x=new z,m=new z;function d(w,S,b){l.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,b),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),u.sub(l),h.sub(l),p.sub(f),g.sub(f);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[w].add(x),a[S].add(x),a[b].add(x),c[w].add(m),c[S].add(m),c[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let w=0,S=v.length;w<S;++w){let b=v[w],I=b.start,B=b.count;for(let k=I,L=I+B;k<L;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let M=new z,_=new z,E=new z,T=new z;function y(w){E.fromBufferAttribute(s,w),T.copy(E);let S=a[w];M.copy(S),M.sub(E.multiplyScalar(E.dot(S))).normalize(),_.crossVectors(T,S);let I=_.dot(c[w])<0?-1:1;o.setXYZW(w,M.x,M.y,M.z,I)}for(let w=0,S=v.length;w<S;++w){let b=v[w],I=b.start,B=b.count;for(let k=I,L=I+B;k<L;k+=3)y(e.getX(k+0)),y(e.getX(k+1)),y(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new z,r=new z,o=new z,a=new z,c=new z,l=new z,u=new z,h=new z;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new dt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ld=new et,Os=new Vr,ya=new Fn,ud=new z,va=new z,Ma=new z,Sa=new z,Sl=new z,ba=new z,hd=new z,Ea=new z,ot=class extends Dt{constructor(e=new mt,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ba.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(Sl.fromBufferAttribute(h,e),o?ba.addScaledVector(Sl,u):ba.addScaledVector(Sl.sub(t),u))}t.add(ba)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(r),Os.copy(e.ray).recast(e.near),!(ya.containsPoint(Os.origin)===!1&&(Os.intersectSphere(ya,ud)===null||Os.origin.distanceToSquared(ud)>(e.far-e.near)**2))&&(ld.copy(r).invert(),Os.copy(e.ray).applyMatrix4(ld),!(n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,E=M;_<E;_+=3){let T=a.getX(_),y=a.getX(_+1),w=a.getX(_+2);s=Ta(this,d,e,n,l,u,h,T,y,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=Ta(this,o,e,n,l,u,h,v,M,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,E=M;_<E;_+=3){let T=_,y=_+1,w=_+2;s=Ta(this,d,e,n,l,u,h,T,y,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=m,M=m+1,_=m+2;s=Ta(this,o,e,n,l,u,h,v,M,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function tx(i,e,t,n,s,r,o,a){let c;if(e.side===$t?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===yi,a),c===null)return null;Ea.copy(a),Ea.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ea);return l<t.near||l>t.far?null:{distance:l,point:Ea.clone(),object:i}}function Ta(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,va),i.getVertexPosition(c,Ma),i.getVertexPosition(l,Sa);let u=tx(i,e,t,n,va,Ma,Sa,hd);if(u){let h=new z;hs.getBarycoord(hd,va,Ma,Sa,h),s&&(u.uv=hs.getInterpolatedAttribute(s,a,c,l,h,new $e)),r&&(u.uv1=hs.getInterpolatedAttribute(r,a,c,l,h,new $e)),o&&(u.normal=hs.getInterpolatedAttribute(o,a,c,l,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new z,materialIndex:0};hs.getNormal(va,Ma,Sa,f.normal),u.face=f,u.barycoord=h}return u}var on=class i extends mt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(h,2));function g(x,m,d,v,M,_,E,T,y,w,S){let b=_/y,I=E/w,B=_/2,k=E/2,L=T/2,O=y+1,U=w+1,Y=0,H=0,ie=new z;for(let le=0;le<U;le++){let pe=le*I-k;for(let ve=0;ve<O;ve++){let ue=ve*b-B;ie[x]=ue*v,ie[m]=pe*M,ie[d]=L,l.push(ie.x,ie.y,ie.z),ie[x]=0,ie[m]=0,ie[d]=T>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(ve/y),h.push(1-le/w),Y+=1}}for(let le=0;le<w;le++)for(let pe=0;pe<y;pe++){let ve=f+pe+O*le,ue=f+pe+O*(le+1),ne=f+(pe+1)+O*(le+1),Z=f+(pe+1)+O*le;c.push(ve,ue,Z),c.push(ue,ne,Z),H+=6}a.addGroup(p,H,S),p+=H,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Gr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Mn(i){let e={};for(let t=0;t<i.length;t++){let n=Gr(i[t]);for(let s in n)e[s]=n[s]}return e}function nx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Si={clone:Gr,merge:Mn},ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bt=class extends Sn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ix,this.fragmentShader=sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=nx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ja=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ls=new z,fd=new $e,dd=new $e,qt=class extends Ja{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,fd,dd),t.subVectors(dd,fd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Io*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},yr=-90,vr=1,Su=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qt(yr,vr,e,t);s.layers=this.layers,this.add(s);let r=new qt(yr,vr,e,t);r.layers=this.layers,this.add(r);let o=new qt(yr,vr,e,t);o.layers=this.layers,this.add(o);let a=new qt(yr,vr,e,t);a.layers=this.layers,this.add(a);let c=new qt(yr,vr,e,t);c.layers=this.layers,this.add(c);let l=new qt(yr,vr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===zi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ja=class extends rn{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ur,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bu=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ja(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new on(5,5,5),r=new bt({name:"CubemapFromEquirect",uniforms:Gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:_i});r.uniforms.tEquirect.value=t;let o=new ot(s,r),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Rn),new Su(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},bl=new z,rx=new z,ox=new ct,ai=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=bl.subVectors(n,t).cross(rx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(bl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ox.getNormalMatrix(e),s=this.coplanarPoint(bl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bs=new Fn,wa=new z,Oo=class{constructor(e=new ai,t=new ai,n=new ai,s=new ai,r=new ai,o=new ai){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],v=s[13],M=s[14],_=s[15];if(n[0].setComponents(c-r,f-l,m-p,_-d).normalize(),n[1].setComponents(c+r,f+l,m+p,_+d).normalize(),n[2].setComponents(c+o,f+u,m+g,_+v).normalize(),n[3].setComponents(c-o,f-u,m-g,_-v).normalize(),n[4].setComponents(c-a,f-h,m-x,_-M).normalize(),t===zi)n[5].setComponents(c+a,f+h,m+x,_+M).normalize();else if(t===Xa)n[5].setComponents(a,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){return Bs.center.set(0,0,0),Bs.radius=.7071067811865476,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(wa.x=s.normal.x>0?e.max.x:e.min.x,wa.y=s.normal.y>0?e.max.y:e.min.y,wa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Mp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ax(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let x=h[p];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Cn=class i extends mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,f=t/c,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){let v=d*f-o;for(let M=0;M<l;M++){let _=M*h-r;g.push(_,-v,0),x.push(0,0,1),m.push(M/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<a;v++){let M=v+l*d,_=v+l*(d+1),E=v+1+l*(d+1),T=v+1+l*d;p.push(M,_,T),p.push(_,E,T)}this.setIndex(p),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lx=`#ifdef USE_ALPHAHASH
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
#endif`,ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,px=`#ifdef USE_AOMAP
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
#endif`,mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gx=`#ifdef USE_BATCHING
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
#endif`,xx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_x=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mx=`#ifdef USE_IRIDESCENCE
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
#endif`,Sx=`#ifdef USE_BUMPMAP
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
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Px=`#define PI 3.141592653589793
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
} // validated`,Lx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dx=`vec3 transformedNormal = objectNormal;
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
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",zx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kx=`#ifdef USE_GRADIENTMAP
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
}`,$x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qx=`uniform bool receiveShadow;
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
#endif`,e_=`#ifdef USE_ENVMAP
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
#endif`,t_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r_=`PhysicalMaterial material;
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
#endif`,o_=`struct PhysicalMaterial {
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
}`,a_=`
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
#endif`,c_=`#if defined( RE_IndirectDiffuse )
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
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x_=`#if defined( USE_POINTS_UV )
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
#endif`,__=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b_=`#ifdef USE_MORPHTARGETS
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
#endif`,E_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I_=`#ifdef USE_NORMALMAP
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
#endif`,P_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,q_=`float getShadowMask() {
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
}`,Y_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z_=`#ifdef USE_SKINNING
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
#endif`,K_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$_=`#ifdef USE_SKINNING
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
#endif`,J_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ey=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ty=`#ifdef USE_TRANSMISSION
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
#endif`,ny=`#ifdef USE_TRANSMISSION
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
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cy=`uniform sampler2D t2D;
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
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`#include <common>
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
}`,py=`#if DEPTH_PACKING == 3200
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
}`,my=`#define DISTANCE
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
}`,gy=`#define DISTANCE
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
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_y=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`uniform float scale;
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
}`,vy=`uniform vec3 diffuse;
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
}`,My=`#include <common>
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
}`,Sy=`uniform vec3 diffuse;
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
}`,by=`#define LAMBERT
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
}`,Ey=`#define LAMBERT
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
}`,Ty=`#define MATCAP
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
}`,wy=`#define MATCAP
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
}`,Ay=`#define NORMAL
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
}`,Ry=`#define NORMAL
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
}`,Cy=`#define PHONG
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
}`,Iy=`#define PHONG
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
}`,Py=`#define STANDARD
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
}`,Ly=`#define STANDARD
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
}`,Dy=`#define TOON
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
}`,Ny=`#define TOON
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
}`,Uy=`uniform float size;
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
}`,Fy=`uniform vec3 diffuse;
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
}`,Oy=`#include <common>
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
}`,By=`uniform vec3 color;
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
}`,zy=`uniform float rotation;
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
}`,ky=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:cx,alphahash_pars_fragment:lx,alphamap_fragment:ux,alphamap_pars_fragment:hx,alphatest_fragment:fx,alphatest_pars_fragment:dx,aomap_fragment:px,aomap_pars_fragment:mx,batching_pars_vertex:gx,batching_vertex:xx,begin_vertex:_x,beginnormal_vertex:yx,bsdfs:vx,iridescence_fragment:Mx,bumpmap_pars_fragment:Sx,clipping_planes_fragment:bx,clipping_planes_pars_fragment:Ex,clipping_planes_pars_vertex:Tx,clipping_planes_vertex:wx,color_fragment:Ax,color_pars_fragment:Rx,color_pars_vertex:Cx,color_vertex:Ix,common:Px,cube_uv_reflection_fragment:Lx,defaultnormal_vertex:Dx,displacementmap_pars_vertex:Nx,displacementmap_vertex:Ux,emissivemap_fragment:Fx,emissivemap_pars_fragment:Ox,colorspace_fragment:Bx,colorspace_pars_fragment:zx,envmap_fragment:kx,envmap_common_pars_fragment:Hx,envmap_pars_fragment:Vx,envmap_pars_vertex:Gx,envmap_physical_pars_fragment:e_,envmap_vertex:Wx,fog_vertex:Xx,fog_pars_vertex:qx,fog_fragment:Yx,fog_pars_fragment:Zx,gradientmap_pars_fragment:Kx,lightmap_pars_fragment:$x,lights_lambert_fragment:Jx,lights_lambert_pars_fragment:jx,lights_pars_begin:Qx,lights_toon_fragment:t_,lights_toon_pars_fragment:n_,lights_phong_fragment:i_,lights_phong_pars_fragment:s_,lights_physical_fragment:r_,lights_physical_pars_fragment:o_,lights_fragment_begin:a_,lights_fragment_maps:c_,lights_fragment_end:l_,logdepthbuf_fragment:u_,logdepthbuf_pars_fragment:h_,logdepthbuf_pars_vertex:f_,logdepthbuf_vertex:d_,map_fragment:p_,map_pars_fragment:m_,map_particle_fragment:g_,map_particle_pars_fragment:x_,metalnessmap_fragment:__,metalnessmap_pars_fragment:y_,morphinstance_vertex:v_,morphcolor_vertex:M_,morphnormal_vertex:S_,morphtarget_pars_vertex:b_,morphtarget_vertex:E_,normal_fragment_begin:T_,normal_fragment_maps:w_,normal_pars_fragment:A_,normal_pars_vertex:R_,normal_vertex:C_,normalmap_pars_fragment:I_,clearcoat_normal_fragment_begin:P_,clearcoat_normal_fragment_maps:L_,clearcoat_pars_fragment:D_,iridescence_pars_fragment:N_,opaque_fragment:U_,packing:F_,premultiplied_alpha_fragment:O_,project_vertex:B_,dithering_fragment:z_,dithering_pars_fragment:k_,roughnessmap_fragment:H_,roughnessmap_pars_fragment:V_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:W_,shadowmap_vertex:X_,shadowmask_pars_fragment:q_,skinbase_vertex:Y_,skinning_pars_vertex:Z_,skinning_vertex:K_,skinnormal_vertex:$_,specularmap_fragment:J_,specularmap_pars_fragment:j_,tonemapping_fragment:Q_,tonemapping_pars_fragment:ey,transmission_fragment:ty,transmission_pars_fragment:ny,uv_pars_fragment:iy,uv_pars_vertex:sy,uv_vertex:ry,worldpos_vertex:oy,background_vert:ay,background_frag:cy,backgroundCube_vert:ly,backgroundCube_frag:uy,cube_vert:hy,cube_frag:fy,depth_vert:dy,depth_frag:py,distanceRGBA_vert:my,distanceRGBA_frag:gy,equirect_vert:xy,equirect_frag:_y,linedashed_vert:yy,linedashed_frag:vy,meshbasic_vert:My,meshbasic_frag:Sy,meshlambert_vert:by,meshlambert_frag:Ey,meshmatcap_vert:Ty,meshmatcap_frag:wy,meshnormal_vert:Ay,meshnormal_frag:Ry,meshphong_vert:Cy,meshphong_frag:Iy,meshphysical_vert:Py,meshphysical_frag:Ly,meshtoon_vert:Dy,meshtoon_frag:Ny,points_vert:Uy,points_frag:Fy,shadow_vert:Oy,shadow_frag:By,sprite_vert:zy,sprite_frag:ky},Ge={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},xi={basic:{uniforms:Mn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Mn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ae(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Mn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Mn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Mn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Ae(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Mn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Mn([Ge.points,Ge.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Mn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Mn([Ge.common,Ge.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Mn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Mn([Ge.sprite,Ge.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Mn([Ge.common,Ge.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Mn([Ge.lights,Ge.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};xi.physical={uniforms:Mn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var Aa={r:0,b:0,g:0},zs=new hi,Hy=new et;function Vy(i,e,t,n,s,r,o){let a=new Ae(0),c=r===!0?0:1,l,u,h=null,f=0,p=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?t:e).get(M)),M}function x(v){let M=!1,_=g(v);_===null?d(a,c):_&&_.isColor&&(d(_,1),M=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,M){let _=g(M);_&&(_.isCubeTexture||_.mapping===gc)?(u===void 0&&(u=new ot(new on(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:Gr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),zs.copy(M.backgroundRotation),zs.x*=-1,zs.y*=-1,zs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hy.makeRotationFromEuler(zs)),u.material.toneMapped=ht.getTransfer(_.colorSpace)!==St,(h!==_||f!==_.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,p=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ot(new Cn(2,2),new bt({name:"BackgroundMaterial",uniforms:Gr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ht.getTransfer(_.colorSpace)!==St,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,p=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function d(v,M){v.getRGB(Aa,vp(i)),n.buffers.color.setClear(Aa.r,Aa.g,Aa.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,d(a,c)},render:x,addToRenderList:m}}function Gy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(b,I,B,k,L){let O=!1,U=h(k,B,I);r!==U&&(r=U,l(r.object)),O=p(b,k,B,L),O&&g(b,k,B,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,_(b,I,B,k),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,I,B){let k=B.wireframe===!0,L=n[b.id];L===void 0&&(L={},n[b.id]=L);let O=L[I.id];O===void 0&&(O={},L[I.id]=O);let U=O[k];return U===void 0&&(U=f(c()),O[k]=U),U}function f(b){let I=[],B=[],k=[];for(let L=0;L<t;L++)I[L]=0,B[L]=0,k[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:k,object:b,attributes:{},index:null}}function p(b,I,B,k){let L=r.attributes,O=I.attributes,U=0,Y=B.getAttributes();for(let H in Y)if(Y[H].location>=0){let le=L[H],pe=O[H];if(pe===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor)),le===void 0||le.attribute!==pe||pe&&le.data!==pe.data)return!0;U++}return r.attributesNum!==U||r.index!==k}function g(b,I,B,k){let L={},O=I.attributes,U=0,Y=B.getAttributes();for(let H in Y)if(Y[H].location>=0){let le=O[H];le===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(le=b.instanceColor));let pe={};pe.attribute=le,le&&le.data&&(pe.data=le.data),L[H]=pe,U++}r.attributes=L,r.attributesNum=U,r.index=k}function x(){let b=r.newAttributes;for(let I=0,B=b.length;I<B;I++)b[I]=0}function m(b){d(b,0)}function d(b,I){let B=r.newAttributes,k=r.enabledAttributes,L=r.attributeDivisors;B[b]=1,k[b]===0&&(i.enableVertexAttribArray(b),k[b]=1),L[b]!==I&&(i.vertexAttribDivisor(b,I),L[b]=I)}function v(){let b=r.newAttributes,I=r.enabledAttributes;for(let B=0,k=I.length;B<k;B++)I[B]!==b[B]&&(i.disableVertexAttribArray(B),I[B]=0)}function M(b,I,B,k,L,O,U){U===!0?i.vertexAttribIPointer(b,I,B,L,O):i.vertexAttribPointer(b,I,B,k,L,O)}function _(b,I,B,k){x();let L=k.attributes,O=B.getAttributes(),U=I.defaultAttributeValues;for(let Y in O){let H=O[Y];if(H.location>=0){let ie=L[Y];if(ie===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor)),ie!==void 0){let le=ie.normalized,pe=ie.itemSize,ve=e.get(ie);if(ve===void 0)continue;let ue=ve.buffer,ne=ve.type,Z=ve.bytesPerElement,j=ne===i.INT||ne===i.UNSIGNED_INT||ie.gpuType===ih;if(ie.isInterleavedBufferAttribute){let P=ie.data,X=P.stride,q=ie.offset;if(P.isInstancedInterleavedBuffer){for(let ee=0;ee<H.locationSize;ee++)d(H.location+ee,P.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let ee=0;ee<H.locationSize;ee++)m(H.location+ee);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let ee=0;ee<H.locationSize;ee++)M(H.location+ee,pe/H.locationSize,ne,le,X*Z,(q+pe/H.locationSize*ee)*Z,j)}else{if(ie.isInstancedBufferAttribute){for(let P=0;P<H.locationSize;P++)d(H.location+P,ie.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let P=0;P<H.locationSize;P++)m(H.location+P);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let P=0;P<H.locationSize;P++)M(H.location+P,pe/H.locationSize,ne,le,pe*Z,pe/H.locationSize*P*Z,j)}}else if(U!==void 0){let le=U[Y];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(H.location,le);break;case 3:i.vertexAttrib3fv(H.location,le);break;case 4:i.vertexAttrib4fv(H.location,le);break;default:i.vertexAttrib1fv(H.location,le)}}}}v()}function E(){w();for(let b in n){let I=n[b];for(let B in I){let k=I[B];for(let L in k)u(k[L].object),delete k[L];delete I[B]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;let I=n[b.id];for(let B in I){let k=I[B];for(let L in k)u(k[L].object),delete k[L];delete I[B]}delete n[b.id]}function y(b){for(let I in n){let B=n[I];if(B[b.id]===void 0)continue;let k=B[b.id];for(let L in k)u(k[L].object),delete k[L];delete B[b.id]}}function w(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Wy(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function c(l,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Xy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(y){return!(y!==Kn&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let w=y===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Vi&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==li&&!w)}function c(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:E,maxSamples:T}}function qy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ai,a=new ct,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let v=r?0:n,M=v*4,_=d.clippingState||null;c.value=_,_=u(g,f,M,p);for(let E=0;E!==M;++E)_[E]=t[E];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let d=p+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,_=p;M!==x;++M,_+=4)o.copy(h[M]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Yy(i){let e=new WeakMap;function t(o,a){return a===Wl?o.mapping=Ur:a===Xl&&(o.mapping=Fr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Wl||a===Xl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new bu(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ms=class extends Ja{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rr=4,pd=[.125,.215,.35,.446,.526,.582],Vs=20,El=new ms,md=new Ae,Tl=null,wl=0,Al=0,Rl=!1,Hs=(1+Math.sqrt(5))/2,Mr=1/Hs,gd=[new z(-Hs,Mr,0),new z(Hs,Mr,0),new z(-Mr,0,Hs),new z(Mr,0,Hs),new z(0,Hs,-Mr),new z(0,Hs,Mr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Wr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Tl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tl,wl,Al),this._renderer.xr.enabled=Rl,e.scissorTest=!1,Ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ur||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:En,format:Kn,colorSpace:_n,depthBuffer:!1},s=xd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zy(r)),this._blurMaterial=Ky(r,e,t)}return s}_compileMaterial(e){let t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,El)}_sceneToCubeUV(e,t,n,s){let a=new qt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(md),u.toneMapping=ds,u.autoClear=!1;let p=new Wt({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),g=new ot(new on,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(md),x=!0);for(let d=0;d<6;d++){let v=d%3;v===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):v===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let M=this._cubeSize;Ra(s,v*M,d>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ur||e.mapping===Fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_d());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Ra(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,El)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gd[(s-r-1)%gd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ot(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Vs-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Vs;m>Vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vs}`);let d=[],v=0;for(let y=0;y<Vs;++y){let w=y/x,S=Math.exp(-w*w/2);d.push(S),y===0?v+=S:y<m&&(v+=2*S)}for(let y=0;y<d.length;y++)d[y]=d[y]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;let _=this._sizeLods[s],E=3*_*(s>M-Rr?s-M+Rr:0),T=4*(this._cubeSize-_);Ra(t,E,T,3*_,2*_),c.setRenderTarget(t),c.render(h,El)}};function Zy(i){let e=[],t=[],n=[],s=i,r=i-Rr+1+pd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Rr?c=pd[o-i+Rr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,d=1,v=new Float32Array(x*g*p),M=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let T=0;T<p;T++){let y=T%3*2/3-1,w=T>2?0:-1,S=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];v.set(S,x*g*T),M.set(f,m*g*T);let b=[T,T,T,T,T,T];_.set(b,d*g*T)}let E=new mt;E.setAttribute("position",new dt(v,x)),E.setAttribute("uv",new dt(M,m)),E.setAttribute("faceIndex",new dt(_,d)),e.push(E),s>Rr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xd(i,e,t){let n=new jt(i,e,t);return n.texture.mapping=gc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ra(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ky(i,e,t){let n=new Float32Array(Vs),s=new z(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fh(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function _d(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function yd(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function fh(){return`

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
	`}function $y(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Wl||c===Xl,u=c===Ur||c===Fr;if(l||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Wr(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Wr(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Jy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ao("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function jy(i,e,t,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let x=p[g];for(let m=0,d=x.length;m<d;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(h){let f=[],p=h.index,g=h.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let M=0,_=v.length;M<_;M+=3){let E=v[M+0],T=v[M+1],y=v[M+2];f.push(E,T,T,y,y,E)}}else if(g!==void 0){let v=g.array;x=g.version;for(let M=0,_=v.length/3-1;M<_;M+=3){let E=M+0,T=M+1,y=M+2;f.push(E,T,T,y,y,E)}}else return;let m=new(_p(f)?$a:Ka)(f,1);m.version=x;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Qy(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v]*x[v];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ev(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function tv(i,e,t){let n=new WeakMap,s=new xt;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let S=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;p===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*E*4*h),y=new Ya(T,_,E,h);y.type=li,y.needsUpdate=!0;let w=M*4;for(let b=0;b<h;b++){let I=m[b],B=d[b],k=v[b],L=_*E*4*b;for(let O=0;O<I.count;O++){let U=O*w;p===!0&&(s.fromBufferAttribute(I,O),T[L+U+0]=s.x,T[L+U+1]=s.y,T[L+U+2]=s.z,T[L+U+3]=0),g===!0&&(s.fromBufferAttribute(B,O),T[L+U+4]=s.x,T[L+U+5]=s.y,T[L+U+6]=s.z,T[L+U+7]=0),x===!0&&(s.fromBufferAttribute(k,O),T[L+U+8]=s.x,T[L+U+9]=s.y,T[L+U+10]=s.z,T[L+U+11]=k.itemSize===4?s.w:1)}}f={count:h,texture:y,size:new $e(_,E)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function nv(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Qa=class extends rn{constructor(e,t,n,s,r,o,a,c,l,u=Ir){if(u!==Ir&&u!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ir&&(n=Gs),n===void 0&&u===Br&&(n=Or),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:sn,this.minFilter=c!==void 0?c:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Sp=new rn,vd=new Qa(1,1),bp=new Ya,Ep=new Mu,Tp=new ja,Md=[],Sd=[],bd=new Float32Array(16),Ed=new Float32Array(9),Td=new Float32Array(4);function Jr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Md[s];if(r===void 0&&(r=new Float32Array(s),Md[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yc(i,e){let t=Sd[e];t===void 0&&(t=new Int32Array(e),Sd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function iv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function av(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Td.set(n),i.uniformMatrix2fv(this.addr,!1,Td),tn(t,n)}}function cv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Ed.set(n),i.uniformMatrix3fv(this.addr,!1,Ed),tn(t,n)}}function lv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;bd.set(n),i.uniformMatrix4fv(this.addr,!1,bd),tn(t,n)}}function uv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function pv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function _v(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vd.compareFunction=gp,r=vd):r=Sp,t.setTexture2D(e||r,s)}function yv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ep,s)}function vv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Tp,s)}function Mv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bp,s)}function Sv(i){switch(i){case 5126:return iv;case 35664:return sv;case 35665:return rv;case 35666:return ov;case 35674:return av;case 35675:return cv;case 35676:return lv;case 5124:case 35670:return uv;case 35667:case 35671:return hv;case 35668:case 35672:return fv;case 35669:case 35673:return dv;case 5125:return pv;case 36294:return mv;case 36295:return gv;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return Mv}}function bv(i,e){i.uniform1fv(this.addr,e)}function Ev(i,e){let t=Jr(e,this.size,2);i.uniform2fv(this.addr,t)}function Tv(i,e){let t=Jr(e,this.size,3);i.uniform3fv(this.addr,t)}function wv(i,e){let t=Jr(e,this.size,4);i.uniform4fv(this.addr,t)}function Av(i,e){let t=Jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Rv(i,e){let t=Jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Cv(i,e){let t=Jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Iv(i,e){i.uniform1iv(this.addr,e)}function Pv(i,e){i.uniform2iv(this.addr,e)}function Lv(i,e){i.uniform3iv(this.addr,e)}function Dv(i,e){i.uniform4iv(this.addr,e)}function Nv(i,e){i.uniform1uiv(this.addr,e)}function Uv(i,e){i.uniform2uiv(this.addr,e)}function Fv(i,e){i.uniform3uiv(this.addr,e)}function Ov(i,e){i.uniform4uiv(this.addr,e)}function Bv(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Sp,r[o])}function zv(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ep,r[o])}function kv(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Tp,r[o])}function Hv(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||bp,r[o])}function Vv(i){switch(i){case 5126:return bv;case 35664:return Ev;case 35665:return Tv;case 35666:return wv;case 35674:return Av;case 35675:return Rv;case 35676:return Cv;case 5124:case 35670:return Iv;case 35667:case 35671:return Pv;case 35668:case 35672:return Lv;case 35669:case 35673:return Dv;case 5125:return Nv;case 36294:return Uv;case 36295:return Fv;case 36296:return Ov;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return zv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Hv}}var Eu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sv(t.type)}},Tu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vv(t.type)}},wu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Cl=/(\w+)(\])?(\[|\.)?/g;function wd(i,e){i.seq.push(e),i.map[e.id]=e}function Gv(i,e,t){let n=i.name,s=n.length;for(Cl.lastIndex=0;;){let r=Cl.exec(n),o=Cl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){wd(t,l===void 0?new Eu(a,i,e):new Tu(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new wu(a),wd(t,h)),t=h}}}var Lr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Gv(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Ad(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Wv=37297,Xv=0;function qv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Rd=new ct;function Yv(i){ht._getMatrix(Rd,ht.workingColorSpace,i);let e=`mat3( ${Rd.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case _c:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Cd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+qv(i.getShaderSource(e),o)}else return s}function Zv(i,e){let t=Yv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Kv(i,e){let t;switch(e){case Ju:t="Linear";break;case ju:t="Reinhard";break;case Qu:t="Cineon";break;case Go:t="ACESFilmic";break;case eh:t="AgX";break;case th:t="Neutral";break;case hg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ca=new z;function $v(){ht.getLuminanceCoefficients(Ca);let i=Ca.x.toFixed(4),e=Ca.y.toFixed(4),t=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function jv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ro(i){return i!==""}function Id(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var eM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Au(i){return i.replace(eM,nM)}var tM=new Map;function nM(i,e){let t=lt[e];if(t===void 0){let n=tM.get(e);if(n!==void 0)t=lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Au(t)}var iM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ld(i){return i.replace(iM,sM)}function sM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function rM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===q0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function oM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ur:case Fr:e="ENVMAP_TYPE_CUBE";break;case gc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aM(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Fr&&(e="ENVMAP_MODE_REFRACTION"),e}function cM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $u:e="ENVMAP_BLENDING_MULTIPLY";break;case lg:e="ENVMAP_BLENDING_MIX";break;case ug:e="ENVMAP_BLENDING_ADD";break}return e}function lM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function uM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=rM(t),l=oM(t),u=aM(t),h=cM(t),f=lM(t),p=Jv(t),g=jv(r),x=s.createProgram(),m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ro).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ro).join(`
`),d.length>0&&(d+=`
`)):(m=[Dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),d=[Dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ds?"#define TONE_MAPPING":"",t.toneMapping!==ds?lt.tonemapping_pars_fragment:"",t.toneMapping!==ds?Kv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,Zv("linearToOutputTexel",t.outputColorSpace),$v(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ro).join(`
`)),o=Au(o),o=Id(o,t),o=Pd(o,t),a=Au(a),a=Id(a,t),a=Pd(a,t),o=Ld(o),a=Ld(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===qf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=v+m+o,_=v+d+a,E=Ad(s,s.VERTEX_SHADER,M),T=Ad(s,s.FRAGMENT_SHADER,_);s.attachShader(x,E),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function y(I){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(E).trim(),L=s.getShaderInfoLog(T).trim(),O=!0,U=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,T);else{let Y=Cd(s,E,"vertex"),H=Cd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+Y+`
`+H)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||L==="")&&(U=!1);U&&(I.diagnostics={runnable:O,programLog:B,vertexShader:{log:k,prefix:m},fragmentShader:{log:L,prefix:d}})}s.deleteShader(E),s.deleteShader(T),w=new Lr(s,x),S=Qv(s,x)}let w;this.getUniforms=function(){return w===void 0&&y(this),w};let S;this.getAttributes=function(){return S===void 0&&y(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,Wv)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}var hM=0,Ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cu(e),t.set(e,n)),n}},Cu=class{constructor(e){this.id=hM++,this.code=e,this.usedTimes=0}};function fM(i,e,t,n,s,r,o){let a=new Za,c=new Ru,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,b,I,B,k){let L=B.fog,O=k.geometry,U=S.isMeshStandardMaterial?B.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||U),H=Y&&Y.mapping===gc?Y.image.height:null,ie=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let le=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,pe=le!==void 0?le.length:0,ve=0;O.morphAttributes.position!==void 0&&(ve=1),O.morphAttributes.normal!==void 0&&(ve=2),O.morphAttributes.color!==void 0&&(ve=3);let ue,ne,Z,j;if(ie){let ke=xi[ie];ue=ke.vertexShader,ne=ke.fragmentShader}else ue=S.vertexShader,ne=S.fragmentShader,c.update(S),Z=c.getVertexShaderID(S),j=c.getFragmentShaderID(S);let P=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),q=k.isInstancedMesh===!0,ee=k.isBatchedMesh===!0,_e=!!S.map,Re=!!S.matcap,Pe=!!Y,V=!!S.aoMap,We=!!S.lightMap,He=!!S.bumpMap,ze=!!S.normalMap,De=!!S.displacementMap,Ye=!!S.emissiveMap,Ne=!!S.metalnessMap,N=!!S.roughnessMap,A=S.anisotropy>0,Q=S.clearcoat>0,ge=S.dispersion>0,xe=S.iridescence>0,fe=S.sheen>0,Ce=S.transmission>0,Fe=A&&!!S.anisotropyMap,Oe=Q&&!!S.clearcoatMap,Ve=Q&&!!S.clearcoatNormalMap,be=Q&&!!S.clearcoatRoughnessMap,J=xe&&!!S.iridescenceMap,Se=xe&&!!S.iridescenceThicknessMap,Me=fe&&!!S.sheenColorMap,se=fe&&!!S.sheenRoughnessMap,Te=!!S.specularMap,oe=!!S.specularColorMap,Ee=!!S.specularIntensityMap,W=Ce&&!!S.transmissionMap,we=Ce&&!!S.thicknessMap,R=!!S.gradientMap,D=!!S.alphaMap,F=S.alphaTest>0,$=!!S.alphaHash,he=!!S.extensions,Ie=ds;S.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ie=i.toneMapping);let Be={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:ue,fragmentShader:ne,defines:S.defines,customVertexShaderID:Z,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:ee,batchingColor:ee&&k._colorsTexture!==null,instancing:q,instancingColor:q&&k.instanceColor!==null,instancingMorph:q&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:P===null?i.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:_n,alphaToCoverage:!!S.alphaToCoverage,map:_e,matcap:Re,envMap:Pe,envMapMode:Pe&&Y.mapping,envMapCubeUVHeight:H,aoMap:V,lightMap:We,bumpMap:He,normalMap:ze,displacementMap:f&&De,emissiveMap:Ye,normalMapObjectSpace:ze&&S.normalMapType===gg,normalMapTangentSpace:ze&&S.normalMapType===uh,metalnessMap:Ne,roughnessMap:N,anisotropy:A,anisotropyMap:Fe,clearcoat:Q,clearcoatMap:Oe,clearcoatNormalMap:Ve,clearcoatRoughnessMap:be,dispersion:ge,iridescence:xe,iridescenceMap:J,iridescenceThicknessMap:Se,sheen:fe,sheenColorMap:Me,sheenRoughnessMap:se,specularMap:Te,specularColorMap:oe,specularIntensityMap:Ee,transmission:Ce,transmissionMap:W,thicknessMap:we,gradientMap:R,opaque:S.transparent===!1&&S.blending===Cr&&S.alphaToCoverage===!1,alphaMap:D,alphaTest:F,alphaHash:$,combine:S.combine,mapUv:_e&&x(S.map.channel),aoMapUv:V&&x(S.aoMap.channel),lightMapUv:We&&x(S.lightMap.channel),bumpMapUv:He&&x(S.bumpMap.channel),normalMapUv:ze&&x(S.normalMap.channel),displacementMapUv:De&&x(S.displacementMap.channel),emissiveMapUv:Ye&&x(S.emissiveMap.channel),metalnessMapUv:Ne&&x(S.metalnessMap.channel),roughnessMapUv:N&&x(S.roughnessMap.channel),anisotropyMapUv:Fe&&x(S.anisotropyMap.channel),clearcoatMapUv:Oe&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:se&&x(S.sheenRoughnessMap.channel),specularMapUv:Te&&x(S.specularMap.channel),specularColorMapUv:oe&&x(S.specularColorMap.channel),specularIntensityMapUv:Ee&&x(S.specularIntensityMap.channel),transmissionMapUv:W&&x(S.transmissionMap.channel),thicknessMapUv:we&&x(S.thicknessMap.channel),alphaMapUv:D&&x(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ze||A),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(_e||D),fog:!!L,useFog:S.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:X,skinning:k.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:ve,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:_e&&S.map.isVideoTexture===!0&&ht.getTransfer(S.map.colorSpace)===St,decodeVideoTextureEmissive:Ye&&S.emissiveMap.isVideoTexture===!0&&ht.getTransfer(S.emissiveMap.colorSpace)===St,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Rt,flipSided:S.side===$t,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:he&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&S.extensions.multiDraw===!0||ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function d(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)b.push(I),b.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(v(b,S),M(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function v(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function M(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let b=g[S.type],I;if(b){let B=xi[b];I=Si.clone(B.uniforms)}else I=S.uniforms;return I}function E(S,b){let I;for(let B=0,k=u.length;B<k;B++){let L=u[B];if(L.cacheKey===b){I=L,++I.usedTimes;break}}return I===void 0&&(I=new uM(i,b,S,r),u.push(I)),I}function T(S){if(--S.usedTimes===0){let b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function y(S){c.remove(S)}function w(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:E,releaseProgram:T,releaseShaderCache:y,programs:u,dispose:w}}function dM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function pM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Nd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ud(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,p,g,x,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function a(h,f,p,g,x,m){let d=o(h,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(h,f,p,g,x,m){let d=o(h,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||pM),n.length>1&&n.sort(f||Nd),s.length>1&&s.sort(f||Nd)}function u(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function mM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Ud,i.set(n,[o])):s>=r.length?(o=new Ud,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function gM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ae};break;case"SpotLight":t={position:new z,direction:new z,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function xM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var _M=0;function yM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vM(i){let e=new gM,t=xM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);let s=new z,r=new et,o=new et;function a(l){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,v=0,M=0,_=0,E=0,T=0,y=0;l.sort(yM);for(let S=0,b=l.length;S<b;S++){let I=l[S],B=I.color,k=I.intensity,L=I.distance,O=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=B.r*k,h+=B.g*k,f+=B.b*k;else if(I.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(I.sh.coefficients[U],k);y++}else if(I.isDirectionalLight){let U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,H=t.get(I);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=I.shadow.matrix,v++}n.directional[p]=U,p++}else if(I.isSpotLight){let U=e.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(B).multiplyScalar(k),U.distance=L,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,n.spot[x]=U;let Y=I.shadow;if(I.map&&(n.spotLightMap[E]=I.map,E++,Y.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[x]=Y.matrix,I.castShadow){let H=t.get(I);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=O,_++}x++}else if(I.isRectAreaLight){let U=e.get(I);U.color.copy(B).multiplyScalar(k),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=U,m++}else if(I.isPointLight){let U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),U.distance=I.distance,U.decay=I.decay,I.castShadow){let Y=I.shadow,H=t.get(I);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=I.shadow.matrix,M++}n.point[g]=U,g++}else if(I.isHemisphereLight){let U=e.get(I);U.skyColor.copy(I.color).multiplyScalar(k),U.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[d]=U,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ge.LTC_FLOAT_1,n.rectAreaLTC2=Ge.LTC_FLOAT_2):(n.rectAreaLTC1=Ge.LTC_HALF_1,n.rectAreaLTC2=Ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let w=n.hash;(w.directionalLength!==p||w.pointLength!==g||w.spotLength!==x||w.rectAreaLength!==m||w.hemiLength!==d||w.numDirectionalShadows!==v||w.numPointShadows!==M||w.numSpotShadows!==_||w.numSpotMaps!==E||w.numLightProbes!==y)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=y,w.directionalLength=p,w.pointLength=g,w.spotLength=x,w.rectAreaLength=m,w.hemiLength=d,w.numDirectionalShadows=v,w.numPointShadows=M,w.numSpotShadows=_,w.numSpotMaps=E,w.numLightProbes=y,n.version=_M++)}function c(l,u){let h=0,f=0,p=0,g=0,x=0,m=u.matrixWorldInverse;for(let d=0,v=l.length;d<v;d++){let M=l[d];if(M.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(M.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Fd(i){let e=new vM(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function MM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Fd(i),e.set(s,[a])):r>=o.length?(a=new Fd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Iu=class extends Sn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=pg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pu=class extends Sn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},SM=`void main() {
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
}`;function EM(i,e,t){let n=new Oo,s=new $e,r=new $e,o=new xt,a=new Iu({depthPacking:mg}),c=new Pu,l={},u=t.maxTextureSize,h={[yi]:$t,[$t]:yi,[Rt]:Rt},f=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:SM,fragmentShader:bM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new mt;g.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ot(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mc;let d=this.type;this.render=function(T,y,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),B=i.state;B.setBlending(_i),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let k=d!==Fi&&this.type===Fi,L=d===Fi&&this.type!==Fi;for(let O=0,U=T.length;O<U;O++){let Y=T[O],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ie=H.getFrameExtents();if(s.multiply(ie),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,H.mapSize.y=r.y)),H.map===null||k===!0||L===!0){let pe=this.type!==Fi?{minFilter:sn,magFilter:sn}:{};H.map!==null&&H.map.dispose(),H.map=new jt(s.x,s.y,pe),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let le=H.getViewportCount();for(let pe=0;pe<le;pe++){let ve=H.getViewport(pe);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),B.viewport(o),H.updateMatrices(Y,pe),n=H.getFrustum(),_(y,w,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Fi&&v(H,w),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,I)};function v(T,y){let w=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new jt(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(y,null,w,f,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(y,null,w,p,x,null)}function M(T,y,w,S){let b=null,I=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)b=I;else if(b=w.isPointLight===!0?c:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){let B=b.uuid,k=y.uuid,L=l[B];L===void 0&&(L={},l[B]=L);let O=L[k];O===void 0&&(O=b.clone(),L[k]=O,y.addEventListener("dispose",E)),b=O}if(b.visible=y.visible,b.wireframe=y.wireframe,S===Fi?b.side=y.shadowSide!==null?y.shadowSide:y.side:b.side=y.shadowSide!==null?y.shadowSide:h[y.side],b.alphaMap=y.alphaMap,b.alphaTest=y.alphaTest,b.map=y.map,b.clipShadows=y.clipShadows,b.clippingPlanes=y.clippingPlanes,b.clipIntersection=y.clipIntersection,b.displacementMap=y.displacementMap,b.displacementScale=y.displacementScale,b.displacementBias=y.displacementBias,b.wireframeLinewidth=y.wireframeLinewidth,b.linewidth=y.linewidth,w.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let B=i.properties.get(b);B.light=w}return b}function _(T,y,w,S,b){if(T.visible===!1)return;if(T.layers.test(y.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Fi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let k=e.update(T),L=T.material;if(Array.isArray(L)){let O=k.groups;for(let U=0,Y=O.length;U<Y;U++){let H=O[U],ie=L[H.materialIndex];if(ie&&ie.visible){let le=M(T,ie,S,b);T.onBeforeShadow(i,T,y,w,k,le,H),i.renderBufferDirect(w,null,k,le,T,H),T.onAfterShadow(i,T,y,w,k,le,H)}}}else if(L.visible){let O=M(T,L,S,b);T.onBeforeShadow(i,T,y,w,k,O,null),i.renderBufferDirect(w,null,k,O,T,null),T.onAfterShadow(i,T,y,w,k,O,null)}}let B=T.children;for(let k=0,L=B.length;k<L;k++)_(B[k],y,w,S,b)}function E(T){T.target.removeEventListener("dispose",E);for(let w in l){let S=l[w],b=T.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var TM={[Ol]:Bl,[zl]:Vl,[kl]:Gl,[Nr]:Hl,[Bl]:Ol,[Vl]:zl,[Gl]:kl,[Hl]:Nr};function wM(i,e){function t(){let W=!1,we=new xt,R=null,D=new xt(0,0,0,0);return{setMask:function(F){R!==F&&!W&&(i.colorMask(F,F,F,F),R=F)},setLocked:function(F){W=F},setClear:function(F,$,he,Ie,Be){Be===!0&&(F*=Ie,$*=Ie,he*=Ie),we.set(F,$,he,Ie),D.equals(we)===!1&&(i.clearColor(F,$,he,Ie),D.copy(we))},reset:function(){W=!1,R=null,D.set(-1,0,0,0)}}}function n(){let W=!1,we=!1,R=null,D=null,F=null;return{setReversed:function($){if(we!==$){let he=e.get("EXT_clip_control");we?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT);let Ie=F;F=null,this.setClear(Ie)}we=$},getReversed:function(){return we},setTest:function($){$?P(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function($){R!==$&&!W&&(i.depthMask($),R=$)},setFunc:function($){if(we&&($=TM[$]),D!==$){switch($){case Ol:i.depthFunc(i.NEVER);break;case Bl:i.depthFunc(i.ALWAYS);break;case zl:i.depthFunc(i.LESS);break;case Nr:i.depthFunc(i.LEQUAL);break;case kl:i.depthFunc(i.EQUAL);break;case Hl:i.depthFunc(i.GEQUAL);break;case Vl:i.depthFunc(i.GREATER);break;case Gl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}D=$}},setLocked:function($){W=$},setClear:function($){F!==$&&(we&&($=1-$),i.clearDepth($),F=$)},reset:function(){W=!1,R=null,D=null,F=null,we=!1}}}function s(){let W=!1,we=null,R=null,D=null,F=null,$=null,he=null,Ie=null,Be=null;return{setTest:function(ke){W||(ke?P(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(ke){we!==ke&&!W&&(i.stencilMask(ke),we=ke)},setFunc:function(ke,G,re){(R!==ke||D!==G||F!==re)&&(i.stencilFunc(ke,G,re),R=ke,D=G,F=re)},setOp:function(ke,G,re){($!==ke||he!==G||Ie!==re)&&(i.stencilOp(ke,G,re),$=ke,he=G,Ie=re)},setLocked:function(ke){W=ke},setClear:function(ke){Be!==ke&&(i.clearStencil(ke),Be=ke)},reset:function(){W=!1,we=null,R=null,D=null,F=null,$=null,he=null,Ie=null,Be=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,v=null,M=null,_=null,E=null,T=null,y=new Ae(0,0,0),w=0,S=!1,b=null,I=null,B=null,k=null,L=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,Y=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),U=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),U=Y>=2);let ie=null,le={},pe=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),ue=new xt().fromArray(pe),ne=new xt().fromArray(ve);function Z(W,we,R,D){let F=new Uint8Array(4),$=i.createTexture();i.bindTexture(W,$),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<R;he++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,D,0,i.RGBA,i.UNSIGNED_BYTE,F):i.texImage2D(we+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,F);return $}let j={};j[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),P(i.DEPTH_TEST),o.setFunc(Nr),He(!1),ze(Bf),P(i.CULL_FACE),V(_i);function P(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function X(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function q(W,we){return h[W]!==we?(i.bindFramebuffer(W,we),h[W]=we,W===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=we),W===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=we),!0):!1}function ee(W,we){let R=p,D=!1;if(W){R=f.get(we),R===void 0&&(R=[],f.set(we,R));let F=W.textures;if(R.length!==F.length||R[0]!==i.COLOR_ATTACHMENT0){for(let $=0,he=F.length;$<he;$++)R[$]=i.COLOR_ATTACHMENT0+$;R.length=F.length,D=!0}}else R[0]!==i.BACK&&(R[0]=i.BACK,D=!0);D&&i.drawBuffers(R)}function _e(W){return g!==W?(i.useProgram(W),g=W,!0):!1}let Re={[Oi]:i.FUNC_ADD,[Y0]:i.FUNC_SUBTRACT,[Z0]:i.FUNC_REVERSE_SUBTRACT};Re[K0]=i.MIN,Re[$0]=i.MAX;let Pe={[J0]:i.ZERO,[Ku]:i.ONE,[j0]:i.SRC_COLOR,[Fl]:i.SRC_ALPHA,[sg]:i.SRC_ALPHA_SATURATE,[ng]:i.DST_COLOR,[eg]:i.DST_ALPHA,[Q0]:i.ONE_MINUS_SRC_COLOR,[Do]:i.ONE_MINUS_SRC_ALPHA,[ig]:i.ONE_MINUS_DST_COLOR,[tg]:i.ONE_MINUS_DST_ALPHA,[rg]:i.CONSTANT_COLOR,[og]:i.ONE_MINUS_CONSTANT_COLOR,[ag]:i.CONSTANT_ALPHA,[cg]:i.ONE_MINUS_CONSTANT_ALPHA};function V(W,we,R,D,F,$,he,Ie,Be,ke){if(W===_i){x===!0&&(X(i.BLEND),x=!1);return}if(x===!1&&(P(i.BLEND),x=!0),W!==Zu){if(W!==m||ke!==S){if((d!==Oi||_!==Oi)&&(i.blendEquation(i.FUNC_ADD),d=Oi,_=Oi),ke)switch(W){case Cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dr:i.blendFunc(i.ONE,i.ONE);break;case zf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}v=null,M=null,E=null,T=null,y.set(0,0,0),w=0,m=W,S=ke}return}F=F||we,$=$||R,he=he||D,(we!==d||F!==_)&&(i.blendEquationSeparate(Re[we],Re[F]),d=we,_=F),(R!==v||D!==M||$!==E||he!==T)&&(i.blendFuncSeparate(Pe[R],Pe[D],Pe[$],Pe[he]),v=R,M=D,E=$,T=he),(Ie.equals(y)===!1||Be!==w)&&(i.blendColor(Ie.r,Ie.g,Ie.b,Be),y.copy(Ie),w=Be),m=W,S=!1}function We(W,we){W.side===Rt?X(i.CULL_FACE):P(i.CULL_FACE);let R=W.side===$t;we&&(R=!R),He(R),W.blending===Cr&&W.transparent===!1?V(_i):V(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let D=W.stencilWrite;a.setTest(D),D&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ye(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?P(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(W){b!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),b=W)}function ze(W){W!==W0?(P(i.CULL_FACE),W!==I&&(W===Bf?i.cullFace(i.BACK):W===X0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),I=W}function De(W){W!==B&&(U&&i.lineWidth(W),B=W)}function Ye(W,we,R){W?(P(i.POLYGON_OFFSET_FILL),(k!==we||L!==R)&&(i.polygonOffset(we,R),k=we,L=R)):X(i.POLYGON_OFFSET_FILL)}function Ne(W){W?P(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function N(W){W===void 0&&(W=i.TEXTURE0+O-1),ie!==W&&(i.activeTexture(W),ie=W)}function A(W,we,R){R===void 0&&(ie===null?R=i.TEXTURE0+O-1:R=ie);let D=le[R];D===void 0&&(D={type:void 0,texture:void 0},le[R]=D),(D.type!==W||D.texture!==we)&&(ie!==R&&(i.activeTexture(R),ie=R),i.bindTexture(W,we||j[W]),D.type=W,D.texture=we)}function Q(){let W=le[ie];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ge(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ve(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function J(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(W){ue.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),ue.copy(W))}function se(W){ne.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ne.copy(W))}function Te(W,we){let R=l.get(we);R===void 0&&(R=new WeakMap,l.set(we,R));let D=R.get(W);D===void 0&&(D=i.getUniformBlockIndex(we,W.name),R.set(W,D))}function oe(W,we){let D=l.get(we).get(W);c.get(we)!==D&&(i.uniformBlockBinding(we,D,W.__bindingPointIndex),c.set(we,D))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ie=null,le={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,v=null,M=null,_=null,E=null,T=null,y=new Ae(0,0,0),w=0,S=!1,b=null,I=null,B=null,k=null,L=null,ue.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:P,disable:X,bindFramebuffer:q,drawBuffers:ee,useProgram:_e,setBlending:V,setMaterial:We,setFlipSided:He,setCullFace:ze,setLineWidth:De,setPolygonOffset:Ye,setScissorTest:Ne,activeTexture:N,bindTexture:A,unbindTexture:Q,compressedTexImage2D:ge,compressedTexImage3D:xe,texImage2D:J,texImage3D:Se,updateUBOMapping:Te,uniformBlockBinding:oe,texStorage2D:Ve,texStorage3D:be,texSubImage2D:fe,texSubImage3D:Ce,compressedTexSubImage2D:Fe,compressedTexSubImage3D:Oe,scissor:Me,viewport:se,reset:Ee}}function Od(i,e,t,n){let s=AM(n);switch(t){case lp:return i*e;case hp:return i*e;case fp:return i*e*2;case oh:return i*e/s.components*s.byteLength;case ah:return i*e/s.components*s.byteLength;case dp:return i*e*2/s.components*s.byteLength;case ch:return i*e*2/s.components*s.byteLength;case up:return i*e*3/s.components*s.byteLength;case Kn:return i*e*4/s.components*s.byteLength;case lh:return i*e*4/s.components*s.byteLength;case ka:case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:case Kl:return Math.max(i,16)*Math.max(e,8)/4;case ql:case Zl:return Math.max(i,8)*Math.max(e,8)/2;case $l:case Jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case tu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case nu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case iu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case su:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ru:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ou:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case au:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case cu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case lu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case uu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wa:case du:case pu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case pp:case mu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case gu:case xu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function AM(i){switch(i){case Vi:case op:return{byteLength:1,components:1};case Uo:case ap:case En:return{byteLength:2,components:1};case sh:case rh:return{byteLength:2,components:4};case Gs:case ih:case li:return{byteLength:4,components:1};case cp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function RM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $e,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,A){return p?new OffscreenCanvas(N,A):Fo("canvas")}function x(N,A,Q){let ge=1,xe=Ne(N);if((xe.width>Q||xe.height>Q)&&(ge=Q/Math.max(xe.width,xe.height)),ge<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let fe=Math.floor(ge*xe.width),Ce=Math.floor(ge*xe.height);h===void 0&&(h=g(fe,Ce));let Fe=A?g(fe,Ce):h;return Fe.width=fe,Fe.height=Ce,Fe.getContext("2d").drawImage(N,0,0,fe,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+fe+"x"+Ce+")."),Fe}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),N;return N}function m(N){return N.generateMipmaps}function d(N){i.generateMipmap(N)}function v(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(N,A,Q,ge,xe=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let fe=A;if(A===i.RED&&(Q===i.FLOAT&&(fe=i.R32F),Q===i.HALF_FLOAT&&(fe=i.R16F),Q===i.UNSIGNED_BYTE&&(fe=i.R8)),A===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(fe=i.R8UI),Q===i.UNSIGNED_SHORT&&(fe=i.R16UI),Q===i.UNSIGNED_INT&&(fe=i.R32UI),Q===i.BYTE&&(fe=i.R8I),Q===i.SHORT&&(fe=i.R16I),Q===i.INT&&(fe=i.R32I)),A===i.RG&&(Q===i.FLOAT&&(fe=i.RG32F),Q===i.HALF_FLOAT&&(fe=i.RG16F),Q===i.UNSIGNED_BYTE&&(fe=i.RG8)),A===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(fe=i.RG8UI),Q===i.UNSIGNED_SHORT&&(fe=i.RG16UI),Q===i.UNSIGNED_INT&&(fe=i.RG32UI),Q===i.BYTE&&(fe=i.RG8I),Q===i.SHORT&&(fe=i.RG16I),Q===i.INT&&(fe=i.RG32I)),A===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(fe=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(fe=i.RGB16UI),Q===i.UNSIGNED_INT&&(fe=i.RGB32UI),Q===i.BYTE&&(fe=i.RGB8I),Q===i.SHORT&&(fe=i.RGB16I),Q===i.INT&&(fe=i.RGB32I)),A===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(fe=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(fe=i.RGBA16UI),Q===i.UNSIGNED_INT&&(fe=i.RGBA32UI),Q===i.BYTE&&(fe=i.RGBA8I),Q===i.SHORT&&(fe=i.RGBA16I),Q===i.INT&&(fe=i.RGBA32I)),A===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(fe=i.RGB9_E5),A===i.RGBA){let Ce=xe?_c:ht.getTransfer(ge);Q===i.FLOAT&&(fe=i.RGBA32F),Q===i.HALF_FLOAT&&(fe=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(fe=Ce===St?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(fe=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(fe=i.RGB5_A1)}return(fe===i.R16F||fe===i.R32F||fe===i.RG16F||fe===i.RG32F||fe===i.RGBA16F||fe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function _(N,A){let Q;return N?A===null||A===Gs||A===Or?Q=i.DEPTH24_STENCIL8:A===li?Q=i.DEPTH32F_STENCIL8:A===Uo&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Gs||A===Or?Q=i.DEPTH_COMPONENT24:A===li?Q=i.DEPTH_COMPONENT32F:A===Uo&&(Q=i.DEPTH_COMPONENT16),Q}function E(N,A){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==sn&&N.minFilter!==Rn?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function T(N){let A=N.target;A.removeEventListener("dispose",T),w(A),A.isVideoTexture&&u.delete(A)}function y(N){let A=N.target;A.removeEventListener("dispose",y),b(A)}function w(N){let A=n.get(N);if(A.__webglInit===void 0)return;let Q=N.source,ge=f.get(Q);if(ge){let xe=ge[A.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&S(N),Object.keys(ge).length===0&&f.delete(Q)}n.remove(N)}function S(N){let A=n.get(N);i.deleteTexture(A.__webglTexture);let Q=N.source,ge=f.get(Q);delete ge[A.__cacheKey],o.memory.textures--}function b(N){let A=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(A.__webglFramebuffer[ge]))for(let xe=0;xe<A.__webglFramebuffer[ge].length;xe++)i.deleteFramebuffer(A.__webglFramebuffer[ge][xe]);else i.deleteFramebuffer(A.__webglFramebuffer[ge]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[ge])}else{if(Array.isArray(A.__webglFramebuffer))for(let ge=0;ge<A.__webglFramebuffer.length;ge++)i.deleteFramebuffer(A.__webglFramebuffer[ge]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ge=0;ge<A.__webglColorRenderbuffer.length;ge++)A.__webglColorRenderbuffer[ge]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[ge]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let Q=N.textures;for(let ge=0,xe=Q.length;ge<xe;ge++){let fe=n.get(Q[ge]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(Q[ge])}n.remove(N)}let I=0;function B(){I=0}function k(){let N=I;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),I+=1,N}function L(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function O(N,A){let Q=n.get(N);if(N.isVideoTexture&&De(N),N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){let ge=N.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(Q,N,A);return}}t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+A)}function U(N,A){let Q=n.get(N);if(N.version>0&&Q.__version!==N.version){ne(Q,N,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+A)}function Y(N,A){let Q=n.get(N);if(N.version>0&&Q.__version!==N.version){ne(Q,N,A);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+A)}function H(N,A){let Q=n.get(N);if(N.version>0&&Q.__version!==N.version){Z(Q,N,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+A)}let ie={[Hi]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[No]:i.MIRRORED_REPEAT},le={[sn]:i.NEAREST,[nh]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[Co]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},pe={[xg]:i.NEVER,[bg]:i.ALWAYS,[_g]:i.LESS,[gp]:i.LEQUAL,[yg]:i.EQUAL,[Sg]:i.GEQUAL,[vg]:i.GREATER,[Mg]:i.NOTEQUAL};function ve(N,A){if(A.type===li&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Rn||A.magFilter===Co||A.magFilter===Ar||A.magFilter===Zn||A.minFilter===Rn||A.minFilter===Co||A.minFilter===Ar||A.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,ie[A.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,ie[A.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,ie[A.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,le[A.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,le[A.minFilter]),A.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,pe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===sn||A.minFilter!==Ar&&A.minFilter!==Zn||A.type===li&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let Q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ue(N,A){let Q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",T));let ge=A.source,xe=f.get(ge);xe===void 0&&(xe={},f.set(ge,xe));let fe=L(A);if(fe!==N.__cacheKey){xe[fe]===void 0&&(xe[fe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),xe[fe].usedTimes++;let Ce=xe[N.__cacheKey];Ce!==void 0&&(xe[N.__cacheKey].usedTimes--,Ce.usedTimes===0&&S(A)),N.__cacheKey=fe,N.__webglTexture=xe[fe].texture}return Q}function ne(N,A,Q){let ge=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ge=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ge=i.TEXTURE_3D);let xe=ue(N,A),fe=A.source;t.bindTexture(ge,N.__webglTexture,i.TEXTURE0+Q);let Ce=n.get(fe);if(fe.version!==Ce.__version||xe===!0){t.activeTexture(i.TEXTURE0+Q);let Fe=ht.getPrimaries(ht.workingColorSpace),Oe=A.colorSpace===us?null:ht.getPrimaries(A.colorSpace),Ve=A.colorSpace===us||Fe===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let be=x(A.image,!1,s.maxTextureSize);be=Ye(A,be);let J=r.convert(A.format,A.colorSpace),Se=r.convert(A.type),Me=M(A.internalFormat,J,Se,A.colorSpace,A.isVideoTexture);ve(ge,A);let se,Te=A.mipmaps,oe=A.isVideoTexture!==!0,Ee=Ce.__version===void 0||xe===!0,W=fe.dataReady,we=E(A,be);if(A.isDepthTexture)Me=_(A.format===Br,A.type),Ee&&(oe?t.texStorage2D(i.TEXTURE_2D,1,Me,be.width,be.height):t.texImage2D(i.TEXTURE_2D,0,Me,be.width,be.height,0,J,Se,null));else if(A.isDataTexture)if(Te.length>0){oe&&Ee&&t.texStorage2D(i.TEXTURE_2D,we,Me,Te[0].width,Te[0].height);for(let R=0,D=Te.length;R<D;R++)se=Te[R],oe?W&&t.texSubImage2D(i.TEXTURE_2D,R,0,0,se.width,se.height,J,Se,se.data):t.texImage2D(i.TEXTURE_2D,R,Me,se.width,se.height,0,J,Se,se.data);A.generateMipmaps=!1}else oe?(Ee&&t.texStorage2D(i.TEXTURE_2D,we,Me,be.width,be.height),W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be.width,be.height,J,Se,be.data)):t.texImage2D(i.TEXTURE_2D,0,Me,be.width,be.height,0,J,Se,be.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){oe&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Me,Te[0].width,Te[0].height,be.depth);for(let R=0,D=Te.length;R<D;R++)if(se=Te[R],A.format!==Kn)if(J!==null)if(oe){if(W)if(A.layerUpdates.size>0){let F=Od(se.width,se.height,A.format,A.type);for(let $ of A.layerUpdates){let he=se.data.subarray($*F/se.data.BYTES_PER_ELEMENT,($+1)*F/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,$,se.width,se.height,1,J,he)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,0,se.width,se.height,be.depth,J,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,R,Me,se.width,se.height,be.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,0,se.width,se.height,be.depth,J,Se,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,R,Me,se.width,se.height,be.depth,0,J,Se,se.data)}else{oe&&Ee&&t.texStorage2D(i.TEXTURE_2D,we,Me,Te[0].width,Te[0].height);for(let R=0,D=Te.length;R<D;R++)se=Te[R],A.format!==Kn?J!==null?oe?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,R,0,0,se.width,se.height,J,se.data):t.compressedTexImage2D(i.TEXTURE_2D,R,Me,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?W&&t.texSubImage2D(i.TEXTURE_2D,R,0,0,se.width,se.height,J,Se,se.data):t.texImage2D(i.TEXTURE_2D,R,Me,se.width,se.height,0,J,Se,se.data)}else if(A.isDataArrayTexture)if(oe){if(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Me,be.width,be.height,be.depth),W)if(A.layerUpdates.size>0){let R=Od(be.width,be.height,A.format,A.type);for(let D of A.layerUpdates){let F=be.data.subarray(D*R/be.data.BYTES_PER_ELEMENT,(D+1)*R/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,D,be.width,be.height,1,J,Se,F)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,J,Se,be.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,be.width,be.height,be.depth,0,J,Se,be.data);else if(A.isData3DTexture)oe?(Ee&&t.texStorage3D(i.TEXTURE_3D,we,Me,be.width,be.height,be.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,J,Se,be.data)):t.texImage3D(i.TEXTURE_3D,0,Me,be.width,be.height,be.depth,0,J,Se,be.data);else if(A.isFramebufferTexture){if(Ee)if(oe)t.texStorage2D(i.TEXTURE_2D,we,Me,be.width,be.height);else{let R=be.width,D=be.height;for(let F=0;F<we;F++)t.texImage2D(i.TEXTURE_2D,F,Me,R,D,0,J,Se,null),R>>=1,D>>=1}}else if(Te.length>0){if(oe&&Ee){let R=Ne(Te[0]);t.texStorage2D(i.TEXTURE_2D,we,Me,R.width,R.height)}for(let R=0,D=Te.length;R<D;R++)se=Te[R],oe?W&&t.texSubImage2D(i.TEXTURE_2D,R,0,0,J,Se,se):t.texImage2D(i.TEXTURE_2D,R,Me,J,Se,se);A.generateMipmaps=!1}else if(oe){if(Ee){let R=Ne(be);t.texStorage2D(i.TEXTURE_2D,we,Me,R.width,R.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J,Se,be)}else t.texImage2D(i.TEXTURE_2D,0,Me,J,Se,be);m(A)&&d(ge),Ce.__version=fe.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function Z(N,A,Q){if(A.image.length!==6)return;let ge=ue(N,A),xe=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+Q);let fe=n.get(xe);if(xe.version!==fe.__version||ge===!0){t.activeTexture(i.TEXTURE0+Q);let Ce=ht.getPrimaries(ht.workingColorSpace),Fe=A.colorSpace===us?null:ht.getPrimaries(A.colorSpace),Oe=A.colorSpace===us||Ce===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let Ve=A.isCompressedTexture||A.image[0].isCompressedTexture,be=A.image[0]&&A.image[0].isDataTexture,J=[];for(let D=0;D<6;D++)!Ve&&!be?J[D]=x(A.image[D],!0,s.maxCubemapSize):J[D]=be?A.image[D].image:A.image[D],J[D]=Ye(A,J[D]);let Se=J[0],Me=r.convert(A.format,A.colorSpace),se=r.convert(A.type),Te=M(A.internalFormat,Me,se,A.colorSpace),oe=A.isVideoTexture!==!0,Ee=fe.__version===void 0||ge===!0,W=xe.dataReady,we=E(A,Se);ve(i.TEXTURE_CUBE_MAP,A);let R;if(Ve){oe&&Ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Te,Se.width,Se.height);for(let D=0;D<6;D++){R=J[D].mipmaps;for(let F=0;F<R.length;F++){let $=R[F];A.format!==Kn?Me!==null?oe?W&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,F,0,0,$.width,$.height,Me,$.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,F,Te,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,F,0,0,$.width,$.height,Me,se,$.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,F,Te,$.width,$.height,0,Me,se,$.data)}}}else{if(R=A.mipmaps,oe&&Ee){R.length>0&&we++;let D=Ne(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Te,D.width,D.height)}for(let D=0;D<6;D++)if(be){oe?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,J[D].width,J[D].height,Me,se,J[D].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Te,J[D].width,J[D].height,0,Me,se,J[D].data);for(let F=0;F<R.length;F++){let he=R[F].image[D].image;oe?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,F+1,0,0,he.width,he.height,Me,se,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,F+1,Te,he.width,he.height,0,Me,se,he.data)}}else{oe?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Me,se,J[D]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Te,Me,se,J[D]);for(let F=0;F<R.length;F++){let $=R[F];oe?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,F+1,0,0,Me,se,$.image[D]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,F+1,Te,Me,se,$.image[D])}}}m(A)&&d(i.TEXTURE_CUBE_MAP),fe.__version=xe.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function j(N,A,Q,ge,xe,fe){let Ce=r.convert(Q.format,Q.colorSpace),Fe=r.convert(Q.type),Oe=M(Q.internalFormat,Ce,Fe,Q.colorSpace),Ve=n.get(A),be=n.get(Q);if(be.__renderTarget=A,!Ve.__hasExternalTextures){let J=Math.max(1,A.width>>fe),Se=Math.max(1,A.height>>fe);xe===i.TEXTURE_3D||xe===i.TEXTURE_2D_ARRAY?t.texImage3D(xe,fe,Oe,J,Se,A.depth,0,Ce,Fe,null):t.texImage2D(xe,fe,Oe,J,Se,0,Ce,Fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),ze(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,xe,be.__webglTexture,0,He(A)):(xe===i.TEXTURE_2D||xe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ge,xe,be.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function P(N,A,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,N),A.depthBuffer){let ge=A.depthTexture,xe=ge&&ge.isDepthTexture?ge.type:null,fe=_(A.stencilBuffer,xe),Ce=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=He(A);ze(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe,fe,A.width,A.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,fe,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,fe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,N)}else{let ge=A.textures;for(let xe=0;xe<ge.length;xe++){let fe=ge[xe],Ce=r.convert(fe.format,fe.colorSpace),Fe=r.convert(fe.type),Oe=M(fe.internalFormat,Ce,Fe,fe.colorSpace),Ve=He(A);Q&&ze(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Oe,A.width,A.height):ze(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,Oe,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Oe,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function X(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ge=n.get(A.depthTexture);ge.__renderTarget=A,(!ge.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),O(A.depthTexture,0);let xe=ge.__webglTexture,fe=He(A);if(A.depthTexture.format===Ir)ze(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(A.depthTexture.format===Br)ze(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function q(N){let A=n.get(N),Q=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){let ge=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ge){let xe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ge.removeEventListener("dispose",xe)};ge.addEventListener("dispose",xe),A.__depthDisposeCallback=xe}A.__boundDepthTexture=ge}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");X(A.__webglFramebuffer,N)}else if(Q){A.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ge]),A.__webglDepthbuffer[ge]===void 0)A.__webglDepthbuffer[ge]=i.createRenderbuffer(),P(A.__webglDepthbuffer[ge],N,!1);else{let xe=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer[ge];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),P(A.__webglDepthbuffer,N,!1);else{let ge=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,xe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(N,A,Q){let ge=n.get(N);A!==void 0&&j(ge.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&q(N)}function _e(N){let A=N.texture,Q=n.get(N),ge=n.get(A);N.addEventListener("dispose",y);let xe=N.textures,fe=N.isWebGLCubeRenderTarget===!0,Ce=xe.length>1;if(Ce||(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=A.version,o.memory.textures++),fe){Q.__webglFramebuffer=[];for(let Fe=0;Fe<6;Fe++)if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer[Fe]=[];for(let Oe=0;Oe<A.mipmaps.length;Oe++)Q.__webglFramebuffer[Fe][Oe]=i.createFramebuffer()}else Q.__webglFramebuffer[Fe]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Fe=0;Fe<A.mipmaps.length;Fe++)Q.__webglFramebuffer[Fe]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let Fe=0,Oe=xe.length;Fe<Oe;Fe++){let Ve=n.get(xe[Fe]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&ze(N)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Fe=0;Fe<xe.length;Fe++){let Oe=xe[Fe];Q.__webglColorRenderbuffer[Fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[Fe]);let Ve=r.convert(Oe.format,Oe.colorSpace),be=r.convert(Oe.type),J=M(Oe.internalFormat,Ve,be,Oe.colorSpace,N.isXRRenderTarget===!0),Se=He(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,J,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),P(Q.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),ve(i.TEXTURE_CUBE_MAP,A);for(let Fe=0;Fe<6;Fe++)if(A.mipmaps&&A.mipmaps.length>0)for(let Oe=0;Oe<A.mipmaps.length;Oe++)j(Q.__webglFramebuffer[Fe][Oe],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Oe);else j(Q.__webglFramebuffer[Fe],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0);m(A)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let Fe=0,Oe=xe.length;Fe<Oe;Fe++){let Ve=xe[Fe],be=n.get(Ve);t.bindTexture(i.TEXTURE_2D,be.__webglTexture),ve(i.TEXTURE_2D,Ve),j(Q.__webglFramebuffer,N,Ve,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,0),m(Ve)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let Fe=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Fe=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Fe,ge.__webglTexture),ve(Fe,A),A.mipmaps&&A.mipmaps.length>0)for(let Oe=0;Oe<A.mipmaps.length;Oe++)j(Q.__webglFramebuffer[Oe],N,A,i.COLOR_ATTACHMENT0,Fe,Oe);else j(Q.__webglFramebuffer,N,A,i.COLOR_ATTACHMENT0,Fe,0);m(A)&&d(Fe),t.unbindTexture()}N.depthBuffer&&q(N)}function Re(N){let A=N.textures;for(let Q=0,ge=A.length;Q<ge;Q++){let xe=A[Q];if(m(xe)){let fe=v(N),Ce=n.get(xe).__webglTexture;t.bindTexture(fe,Ce),d(fe),t.unbindTexture()}}}let Pe=[],V=[];function We(N){if(N.samples>0){if(ze(N)===!1){let A=N.textures,Q=N.width,ge=N.height,xe=i.COLOR_BUFFER_BIT,fe=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(N),Fe=A.length>1;if(Fe)for(let Oe=0;Oe<A.length;Oe++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Oe=0;Oe<A.length;Oe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xe|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xe|=i.STENCIL_BUFFER_BIT)),Fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Oe]);let Ve=n.get(A[Oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ve,0)}i.blitFramebuffer(0,0,Q,ge,0,0,Q,ge,xe,i.NEAREST),c===!0&&(Pe.length=0,V.length=0,Pe.push(i.COLOR_ATTACHMENT0+Oe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Pe.push(fe),V.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,V)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Fe)for(let Oe=0;Oe<A.length;Oe++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Oe]);let Ve=n.get(A[Oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){let A=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function He(N){return Math.min(s.maxSamples,N.samples)}function ze(N){let A=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function De(N){let A=o.render.frame;u.get(N)!==A&&(u.set(N,A),N.update())}function Ye(N,A){let Q=N.colorSpace,ge=N.format,xe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Q!==_n&&Q!==us&&(ht.getTransfer(Q)===St?(ge!==Kn||xe!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),A}function Ne(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=O,this.setTexture2DArray=U,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=ee,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=j,this.useMultisampledRTT=ze}function CM(i,e){function t(n,s=us){let r,o=ht.getTransfer(s);if(n===Vi)return i.UNSIGNED_BYTE;if(n===sh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===cp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===op)return i.BYTE;if(n===ap)return i.SHORT;if(n===Uo)return i.UNSIGNED_SHORT;if(n===ih)return i.INT;if(n===Gs)return i.UNSIGNED_INT;if(n===li)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===lp)return i.ALPHA;if(n===up)return i.RGB;if(n===Kn)return i.RGBA;if(n===hp)return i.LUMINANCE;if(n===fp)return i.LUMINANCE_ALPHA;if(n===Ir)return i.DEPTH_COMPONENT;if(n===Br)return i.DEPTH_STENCIL;if(n===oh)return i.RED;if(n===ah)return i.RED_INTEGER;if(n===dp)return i.RG;if(n===ch)return i.RG_INTEGER;if(n===lh)return i.RGBA_INTEGER;if(n===ka||n===Ha||n===Va||n===Ga)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ql||n===Yl||n===Zl||n===Kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$l||n===Jl||n===jl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$l||n===Jl)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ql||n===eu||n===tu||n===nu||n===iu||n===su||n===ru||n===ou||n===au||n===cu||n===lu||n===uu||n===hu||n===fu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ql)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===iu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===su)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ru)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ou)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===au)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wa||n===du||n===pu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wa)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===du)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pp||n===mu||n===gu||n===xu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Lu=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ft=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},IM={type:"move"},Lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(IM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},PM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LM=`
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

}`,Du=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new rn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new bt({vertexShader:PM,fragmentShader:LM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nu=class extends ps{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null,x=new Du,m=t.getContextAttributes(),d=null,v=null,M=[],_=[],E=new $e,T=null,y=new qt;y.viewport=new xt;let w=new qt;w.viewport=new xt;let S=[y,w],b=new Lu,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let Z=M[ne];return Z===void 0&&(Z=new Lo,M[ne]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(ne){let Z=M[ne];return Z===void 0&&(Z=new Lo,M[ne]=Z),Z.getGripSpace()},this.getHand=function(ne){let Z=M[ne];return Z===void 0&&(Z=new Lo,M[ne]=Z),Z.getHandSpace()};function k(ne){let Z=_.indexOf(ne.inputSource);if(Z===-1)return;let j=M[Z];j!==void 0&&(j.update(ne.inputSource,ne.frame,l||o),j.dispatchEvent({type:ne.type,data:ne.inputSource}))}function L(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",O);for(let ne=0;ne<M.length;ne++){let Z=_[ne];Z!==null&&(_[ne]=null,M[ne].disconnect(Z))}I=null,B=null,x.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,v=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",L),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0){let Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new jt(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,j=null,P=null;m.depth&&(P=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=m.stencil?Br:Ir,j=m.stencil?Or:Gs);let X={colorFormat:t.RGBA8,depthFormat:P,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(X),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new jt(f.textureWidth,f.textureHeight,{format:Kn,type:Vi,depthTexture:new Qa(f.textureWidth,f.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(ne){for(let Z=0;Z<ne.removed.length;Z++){let j=ne.removed[Z],P=_.indexOf(j);P>=0&&(_[P]=null,M[P].disconnect(j))}for(let Z=0;Z<ne.added.length;Z++){let j=ne.added[Z],P=_.indexOf(j);if(P===-1){for(let q=0;q<M.length;q++)if(q>=_.length){_.push(j),P=q;break}else if(_[q]===null){_[q]=j,P=q;break}if(P===-1)break}let X=M[P];X&&X.connect(j)}}let U=new z,Y=new z;function H(ne,Z,j){U.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(j.matrixWorld);let P=U.distanceTo(Y),X=Z.projectionMatrix.elements,q=j.projectionMatrix.elements,ee=X[14]/(X[10]-1),_e=X[14]/(X[10]+1),Re=(X[9]+1)/X[5],Pe=(X[9]-1)/X[5],V=(X[8]-1)/X[0],We=(q[8]+1)/q[0],He=ee*V,ze=ee*We,De=P/(-V+We),Ye=De*-V;if(Z.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Ye),ne.translateZ(De),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),X[10]===-1)ne.projectionMatrix.copy(Z.projectionMatrix),ne.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let Ne=ee+De,N=_e+De,A=He-Ye,Q=ze+(P-Ye),ge=Re*_e/N*Ne,xe=Pe*_e/N*Ne;ne.projectionMatrix.makePerspective(A,Q,ge,xe,Ne,N),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ie(ne,Z){Z===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(Z.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let Z=ne.near,j=ne.far;x.texture!==null&&(x.depthNear>0&&(Z=x.depthNear),x.depthFar>0&&(j=x.depthFar)),b.near=w.near=y.near=Z,b.far=w.far=y.far=j,(I!==b.near||B!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,B=b.far),y.layers.mask=ne.layers.mask|2,w.layers.mask=ne.layers.mask|4,b.layers.mask=y.layers.mask|w.layers.mask;let P=ne.parent,X=b.cameras;ie(b,P);for(let q=0;q<X.length;q++)ie(X[q],P);X.length===2?H(b,y,w):b.projectionMatrix.copy(y.projectionMatrix),le(ne,b,P)};function le(ne,Z,j){j===null?ne.matrix.copy(Z.matrixWorld):(ne.matrix.copy(j.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(Z.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(Z.projectionMatrix),ne.projectionMatrixInverse.copy(Z.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Hr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(ne){c=ne,f!==null&&(f.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let pe=null;function ve(ne,Z){if(u=Z.getViewerPose(l||o),g=Z,u!==null){let j=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let P=!1;j.length!==b.cameras.length&&(b.cameras.length=0,P=!0);for(let q=0;q<j.length;q++){let ee=j[q],_e=null;if(p!==null)_e=p.getViewport(ee);else{let Pe=h.getViewSubImage(f,ee);_e=Pe.viewport,q===0&&(e.setRenderTargetTextures(v,Pe.colorTexture,f.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(v))}let Re=S[q];Re===void 0&&(Re=new qt,Re.layers.enable(q),Re.viewport=new xt,S[q]=Re),Re.matrix.fromArray(ee.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(ee.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(_e.x,_e.y,_e.width,_e.height),q===0&&(b.matrix.copy(Re.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),P===!0&&b.cameras.push(Re)}let X=s.enabledFeatures;if(X&&X.includes("depth-sensing")){let q=h.getDepthInformation(j[0]);q&&q.isValid&&q.texture&&x.init(e,q,s.renderState)}}for(let j=0;j<M.length;j++){let P=_[j],X=M[j];P!==null&&X!==void 0&&X.update(P,Z,l||o)}pe&&pe(ne,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let ue=new Mp;ue.setAnimationLoop(ve),this.setAnimationLoop=function(ne){pe=ne},this.dispose=function(){}}},ks=new hi,DM=new et;function NM(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,vp(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,M,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,v,M):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===$t&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===$t&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=e.get(d),M=v.envMap,_=v.envMapRotation;M&&(m.envMap.value=M,ks.copy(_),ks.x*=-1,ks.y*=-1,ks.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),m.envMapRotation.value.setFromMatrix4(DM.makeRotationFromEuler(ks)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$t&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function UM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){let _=M.program;n.uniformBlockBinding(v,_)}function l(v,M){let _=s[v.id];_===void 0&&(g(v),_=u(v),s[v.id]=_,v.addEventListener("dispose",m));let E=M.program;n.updateUBOMapping(v,E);let T=e.render.frame;r[v.id]!==T&&(f(v),r[v.id]=T)}function u(v){let M=h();v.__bindingPointIndex=M;let _=i.createBuffer(),E=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,E,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=s[v.id],_=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,y=_.length;T<y;T++){let w=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,b=w.length;S<b;S++){let I=w[S];if(p(I,T,S,E)===!0){let B=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],L=0;for(let O=0;O<k.length;O++){let U=k[O],Y=x(U);typeof U=="number"||typeof U=="boolean"?(I.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,B+L,I.__data)):U.isMatrix3?(I.__data[0]=U.elements[0],I.__data[1]=U.elements[1],I.__data[2]=U.elements[2],I.__data[3]=0,I.__data[4]=U.elements[3],I.__data[5]=U.elements[4],I.__data[6]=U.elements[5],I.__data[7]=0,I.__data[8]=U.elements[6],I.__data[9]=U.elements[7],I.__data[10]=U.elements[8],I.__data[11]=0):(U.toArray(I.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,M,_,E){let T=v.value,y=M+"_"+_;if(E[y]===void 0)return typeof T=="number"||typeof T=="boolean"?E[y]=T:E[y]=T.clone(),!0;{let w=E[y];if(typeof T=="number"||typeof T=="boolean"){if(w!==T)return E[y]=T,!0}else if(w.equals(T)===!1)return w.copy(T),!0}return!1}function g(v){let M=v.uniforms,_=0,E=16;for(let y=0,w=M.length;y<w;y++){let S=Array.isArray(M[y])?M[y]:[M[y]];for(let b=0,I=S.length;b<I;b++){let B=S[b],k=Array.isArray(B.value)?B.value:[B.value];for(let L=0,O=k.length;L<O;L++){let U=k[L],Y=x(U),H=_%E,ie=H%Y.boundary,le=H+ie;_+=ie,le!==0&&E-le<Y.storage&&(_+=E-le),B.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=Y.storage}}}let T=_%E;return T>0&&(_+=E-T),v.__size=_,v.__cache={},this}function x(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){let M=v.target;M.removeEventListener("dispose",m);let _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var ec=class{constructor(e={}){let{canvas:t=kg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this.toneMapping=ds,this.toneMappingExposure=1;let _=this,E=!1,T=0,y=0,w=null,S=-1,b=null,I=new xt,B=new xt,k=null,L=new Ae(0),O=0,U=t.width,Y=t.height,H=1,ie=null,le=null,pe=new xt(0,0,U,Y),ve=new xt(0,0,U,Y),ue=!1,ne=new Oo,Z=!1,j=!1,P=new et,X=new et,q=new z,ee=new xt,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function Pe(){return w===null?H:1}let V=n;function We(C,K){return t.getContext(C,K)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",D,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",$,!1),V===null){let K="webgl2";if(V=We(K,C),V===null)throw We(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let He,ze,De,Ye,Ne,N,A,Q,ge,xe,fe,Ce,Fe,Oe,Ve,be,J,Se,Me,se,Te,oe,Ee,W;function we(){He=new Jy(V),He.init(),oe=new CM(V,He),ze=new Xy(V,He,e,oe),De=new wM(V,He),ze.reverseDepthBuffer&&f&&De.buffers.depth.setReversed(!0),Ye=new ev(V),Ne=new dM,N=new RM(V,He,De,Ne,ze,oe,Ye),A=new Yy(_),Q=new $y(_),ge=new ax(V),Ee=new Gy(V,ge),xe=new jy(V,ge,Ye,Ee),fe=new nv(V,xe,ge,Ye),Me=new tv(V,ze,N),be=new qy(Ne),Ce=new fM(_,A,Q,He,ze,Ee,be),Fe=new NM(_,Ne),Oe=new mM,Ve=new MM(He),Se=new Vy(_,A,Q,De,fe,p,c),J=new EM(_,fe,ze),W=new UM(V,Ye,ze,De),se=new Wy(V,He,Ye),Te=new Qy(V,He,Ye),Ye.programs=Ce.programs,_.capabilities=ze,_.extensions=He,_.properties=Ne,_.renderLists=Oe,_.shadowMap=J,_.state=De,_.info=Ye}we();let R=new Nu(_,V);this.xr=R,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let C=He.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=He.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(U,Y,!1))},this.getSize=function(C){return C.set(U,Y)},this.setSize=function(C,K,ae=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,Y=K,t.width=Math.floor(C*H),t.height=Math.floor(K*H),ae===!0&&(t.style.width=C+"px",t.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(U*H,Y*H).floor()},this.setDrawingBufferSize=function(C,K,ae){U=C,Y=K,H=ae,t.width=Math.floor(C*ae),t.height=Math.floor(K*ae),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(pe)},this.setViewport=function(C,K,ae,ce){C.isVector4?pe.set(C.x,C.y,C.z,C.w):pe.set(C,K,ae,ce),De.viewport(I.copy(pe).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(ve)},this.setScissor=function(C,K,ae,ce){C.isVector4?ve.set(C.x,C.y,C.z,C.w):ve.set(C,K,ae,ce),De.scissor(B.copy(ve).multiplyScalar(H).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(C){De.setScissorTest(ue=C)},this.setOpaqueSort=function(C){ie=C},this.setTransparentSort=function(C){le=C},this.getClearColor=function(C){return C.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(C=!0,K=!0,ae=!0){let ce=0;if(C){let te=!1;if(w!==null){let Ue=w.texture.format;te=Ue===lh||Ue===ch||Ue===ah}if(te){let Ue=w.texture.type,Xe=Ue===Vi||Ue===Gs||Ue===Uo||Ue===Or||Ue===sh||Ue===rh,Je=Se.getClearColor(),je=Se.getClearAlpha(),rt=Je.r,at=Je.g,Qe=Je.b;Xe?(g[0]=rt,g[1]=at,g[2]=Qe,g[3]=je,V.clearBufferuiv(V.COLOR,0,g)):(x[0]=rt,x[1]=at,x[2]=Qe,x[3]=je,V.clearBufferiv(V.COLOR,0,x))}else ce|=V.COLOR_BUFFER_BIT}K&&(ce|=V.DEPTH_BUFFER_BIT),ae&&(ce|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",D,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",$,!1),Oe.dispose(),Ve.dispose(),Ne.dispose(),A.dispose(),Q.dispose(),fe.dispose(),Ee.dispose(),W.dispose(),Ce.dispose(),R.dispose(),R.removeEventListener("sessionstart",de),R.removeEventListener("sessionend",me),ye.stop()};function D(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let C=Ye.autoReset,K=J.enabled,ae=J.autoUpdate,ce=J.needsUpdate,te=J.type;we(),Ye.autoReset=C,J.enabled=K,J.autoUpdate=ae,J.needsUpdate=ce,J.type=te}function $(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function he(C){let K=C.target;K.removeEventListener("dispose",he),Ie(K)}function Ie(C){Be(C),Ne.remove(C)}function Be(C){let K=Ne.get(C).programs;K!==void 0&&(K.forEach(function(ae){Ce.releaseProgram(ae)}),C.isShaderMaterial&&Ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,ae,ce,te,Ue){K===null&&(K=_e);let Xe=te.isMesh&&te.matrixWorld.determinant()<0,Je=kt(C,K,ae,ce,te);De.setMaterial(ce,Xe);let je=ae.index,rt=1;if(ce.wireframe===!0){if(je=xe.getWireframeAttribute(ae),je===void 0)return;rt=2}let at=ae.drawRange,Qe=ae.attributes.position,yt=at.start*rt,Pt=(at.start+at.count)*rt;Ue!==null&&(yt=Math.max(yt,Ue.start*rt),Pt=Math.min(Pt,(Ue.start+Ue.count)*rt)),je!==null?(yt=Math.max(yt,0),Pt=Math.min(Pt,je.count)):Qe!=null&&(yt=Math.max(yt,0),Pt=Math.min(Pt,Qe.count));let Ut=Pt-yt;if(Ut<0||Ut===1/0)return;Ee.setup(te,ce,Je,ae,je);let An,vt=se;if(je!==null&&(An=ge.get(je),vt=Te,vt.setIndex(An)),te.isMesh)ce.wireframe===!0?(De.setLineWidth(ce.wireframeLinewidth*Pe()),vt.setMode(V.LINES)):vt.setMode(V.TRIANGLES);else if(te.isLine){let tt=ce.linewidth;tt===void 0&&(tt=1),De.setLineWidth(tt*Pe()),te.isLineSegments?vt.setMode(V.LINES):te.isLineLoop?vt.setMode(V.LINE_LOOP):vt.setMode(V.LINE_STRIP)}else te.isPoints?vt.setMode(V.POINTS):te.isSprite&&vt.setMode(V.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)vt.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))vt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let tt=te._multiDrawStarts,Ci=te._multiDrawCounts,Mt=te._multiDrawCount,ii=je?ge.get(je).bytesPerElement:1,ar=Ne.get(ce).currentProgram.getUniforms();for(let Dn=0;Dn<Mt;Dn++)ar.setValue(V,"_gl_DrawID",Dn),vt.render(tt[Dn]/ii,Ci[Dn])}else if(te.isInstancedMesh)vt.renderInstances(yt,Ut,te.count);else if(ae.isInstancedBufferGeometry){let tt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ci=Math.min(ae.instanceCount,tt);vt.renderInstances(yt,Ut,Ci)}else vt.render(yt,Ut)};function ke(C,K,ae){C.transparent===!0&&C.side===Rt&&C.forceSinglePass===!1?(C.side=$t,C.needsUpdate=!0,Et(C,K,ae),C.side=yi,C.needsUpdate=!0,Et(C,K,ae),C.side=Rt):Et(C,K,ae)}this.compile=function(C,K,ae=null){ae===null&&(ae=C),d=Ve.get(ae),d.init(K),M.push(d),ae.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(d.pushLight(te),te.castShadow&&d.pushShadow(te))}),C!==ae&&C.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(d.pushLight(te),te.castShadow&&d.pushShadow(te))}),d.setupLights();let ce=new Set;return C.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Ue=te.material;if(Ue)if(Array.isArray(Ue))for(let Xe=0;Xe<Ue.length;Xe++){let Je=Ue[Xe];ke(Je,ae,te),ce.add(Je)}else ke(Ue,ae,te),ce.add(Ue)}),M.pop(),d=null,ce},this.compileAsync=function(C,K,ae=null){let ce=this.compile(C,K,ae);return new Promise(te=>{function Ue(){if(ce.forEach(function(Xe){Ne.get(Xe).currentProgram.isReady()&&ce.delete(Xe)}),ce.size===0){te(C);return}setTimeout(Ue,10)}He.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let G=null;function re(C){G&&G(C)}function de(){ye.stop()}function me(){ye.start()}let ye=new Mp;ye.setAnimationLoop(re),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(C){G=C,R.setAnimationLoop(C),C===null?ye.stop():ye.start()},R.addEventListener("sessionstart",de),R.addEventListener("sessionend",me),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(K),K=R.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,K,w),d=Ve.get(C,M.length),d.init(K),M.push(d),X.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ne.setFromProjectionMatrix(X),j=this.localClippingEnabled,Z=be.init(this.clippingPlanes,j),m=Oe.get(C,v.length),m.init(),v.push(m),R.enabled===!0&&R.isPresenting===!0){let Ue=_.xr.getDepthSensingMesh();Ue!==null&&Le(Ue,K,-1/0,_.sortObjects)}Le(C,K,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ie,le),Re=R.enabled===!1||R.isPresenting===!1||R.hasDepthSensing()===!1,Re&&Se.addToRenderList(m,C),this.info.render.frame++,Z===!0&&be.beginShadows();let ae=d.state.shadowsArray;J.render(ae,C,K),Z===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();let ce=m.opaque,te=m.transmissive;if(d.setupLights(),K.isArrayCamera){let Ue=K.cameras;if(te.length>0)for(let Xe=0,Je=Ue.length;Xe<Je;Xe++){let je=Ue[Xe];Ke(ce,te,C,je)}Re&&Se.render(C);for(let Xe=0,Je=Ue.length;Xe<Je;Xe++){let je=Ue[Xe];Ze(m,C,je,je.viewport)}}else te.length>0&&Ke(ce,te,C,K),Re&&Se.render(C),Ze(m,C,K);w!==null&&(N.updateMultisampleRenderTarget(w),N.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(_,C,K),Ee.resetDefaultState(),S=-1,b=null,M.pop(),M.length>0?(d=M[M.length-1],Z===!0&&be.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Le(C,K,ae,ce){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ne.intersectsSprite(C)){ce&&ee.setFromMatrixPosition(C.matrixWorld).applyMatrix4(X);let Xe=fe.update(C),Je=C.material;Je.visible&&m.push(C,Xe,Je,ae,ee.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ne.intersectsObject(C))){let Xe=fe.update(C),Je=C.material;if(ce&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ee.copy(C.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),ee.copy(Xe.boundingSphere.center)),ee.applyMatrix4(C.matrixWorld).applyMatrix4(X)),Array.isArray(Je)){let je=Xe.groups;for(let rt=0,at=je.length;rt<at;rt++){let Qe=je[rt],yt=Je[Qe.materialIndex];yt&&yt.visible&&m.push(C,Xe,yt,ae,ee.z,Qe)}}else Je.visible&&m.push(C,Xe,Je,ae,ee.z,null)}}let Ue=C.children;for(let Xe=0,Je=Ue.length;Xe<Je;Xe++)Le(Ue[Xe],K,ae,ce)}function Ze(C,K,ae,ce){let te=C.opaque,Ue=C.transmissive,Xe=C.transparent;d.setupLightsView(ae),Z===!0&&be.setGlobalState(_.clippingPlanes,ae),ce&&De.viewport(I.copy(ce)),te.length>0&&nt(te,K,ae),Ue.length>0&&nt(Ue,K,ae),Xe.length>0&&nt(Xe,K,ae),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Ke(C,K,ae,ce){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ce.id]===void 0&&(d.state.transmissionRenderTarget[ce.id]=new jt(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?En:Vi,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));let Ue=d.state.transmissionRenderTarget[ce.id],Xe=ce.viewport||I;Ue.setSize(Xe.z,Xe.w);let Je=_.getRenderTarget();_.setRenderTarget(Ue),_.getClearColor(L),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear(),Re&&Se.render(ae);let je=_.toneMapping;_.toneMapping=ds;let rt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),d.setupLightsView(ce),Z===!0&&be.setGlobalState(_.clippingPlanes,ce),nt(C,ae,ce),N.updateMultisampleRenderTarget(Ue),N.updateRenderTargetMipmap(Ue),He.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Qe=0,yt=K.length;Qe<yt;Qe++){let Pt=K[Qe],Ut=Pt.object,An=Pt.geometry,vt=Pt.material,tt=Pt.group;if(vt.side===Rt&&Ut.layers.test(ce.layers)){let Ci=vt.side;vt.side=$t,vt.needsUpdate=!0,st(Ut,ae,ce,An,vt,tt),vt.side=Ci,vt.needsUpdate=!0,at=!0}}at===!0&&(N.updateMultisampleRenderTarget(Ue),N.updateRenderTargetMipmap(Ue))}_.setRenderTarget(Je),_.setClearColor(L,O),rt!==void 0&&(ce.viewport=rt),_.toneMapping=je}function nt(C,K,ae){let ce=K.isScene===!0?K.overrideMaterial:null;for(let te=0,Ue=C.length;te<Ue;te++){let Xe=C[te],Je=Xe.object,je=Xe.geometry,rt=ce===null?Xe.material:ce,at=Xe.group;Je.layers.test(ae.layers)&&st(Je,K,ae,je,rt,at)}}function st(C,K,ae,ce,te,Ue){C.onBeforeRender(_,K,ae,ce,te,Ue),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),te.onBeforeRender(_,K,ae,ce,C,Ue),te.transparent===!0&&te.side===Rt&&te.forceSinglePass===!1?(te.side=$t,te.needsUpdate=!0,_.renderBufferDirect(ae,K,ce,te,C,Ue),te.side=yi,te.needsUpdate=!0,_.renderBufferDirect(ae,K,ce,te,C,Ue),te.side=Rt):_.renderBufferDirect(ae,K,ce,te,C,Ue),C.onAfterRender(_,K,ae,ce,te,Ue)}function Et(C,K,ae){K.isScene!==!0&&(K=_e);let ce=Ne.get(C),te=d.state.lights,Ue=d.state.shadowsArray,Xe=te.state.version,Je=Ce.getParameters(C,te.state,Ue,K,ae),je=Ce.getProgramCacheKey(Je),rt=ce.programs;ce.environment=C.isMeshStandardMaterial?K.environment:null,ce.fog=K.fog,ce.envMap=(C.isMeshStandardMaterial?Q:A).get(C.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,rt===void 0&&(C.addEventListener("dispose",he),rt=new Map,ce.programs=rt);let at=rt.get(je);if(at!==void 0){if(ce.currentProgram===at&&ce.lightsStateVersion===Xe)return It(C,Je),at}else Je.uniforms=Ce.getUniforms(C),C.onBeforeCompile(Je,_),at=Ce.acquireProgram(Je,je),rt.set(je,at),ce.uniforms=Je.uniforms;let Qe=ce.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qe.clippingPlanes=be.uniform),It(C,Je),ce.needsLights=fn(C),ce.lightsStateVersion=Xe,ce.needsLights&&(Qe.ambientLightColor.value=te.state.ambient,Qe.lightProbe.value=te.state.probe,Qe.directionalLights.value=te.state.directional,Qe.directionalLightShadows.value=te.state.directionalShadow,Qe.spotLights.value=te.state.spot,Qe.spotLightShadows.value=te.state.spotShadow,Qe.rectAreaLights.value=te.state.rectArea,Qe.ltc_1.value=te.state.rectAreaLTC1,Qe.ltc_2.value=te.state.rectAreaLTC2,Qe.pointLights.value=te.state.point,Qe.pointLightShadows.value=te.state.pointShadow,Qe.hemisphereLights.value=te.state.hemi,Qe.directionalShadowMap.value=te.state.directionalShadowMap,Qe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Qe.spotShadowMap.value=te.state.spotShadowMap,Qe.spotLightMatrix.value=te.state.spotLightMatrix,Qe.spotLightMap.value=te.state.spotLightMap,Qe.pointShadowMap.value=te.state.pointShadowMap,Qe.pointShadowMatrix.value=te.state.pointShadowMatrix),ce.currentProgram=at,ce.uniformsList=null,at}function zt(C){if(C.uniformsList===null){let K=C.currentProgram.getUniforms();C.uniformsList=Lr.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function It(C,K){let ae=Ne.get(C);ae.outputColorSpace=K.outputColorSpace,ae.batching=K.batching,ae.batchingColor=K.batchingColor,ae.instancing=K.instancing,ae.instancingColor=K.instancingColor,ae.instancingMorph=K.instancingMorph,ae.skinning=K.skinning,ae.morphTargets=K.morphTargets,ae.morphNormals=K.morphNormals,ae.morphColors=K.morphColors,ae.morphTargetsCount=K.morphTargetsCount,ae.numClippingPlanes=K.numClippingPlanes,ae.numIntersection=K.numClipIntersection,ae.vertexAlphas=K.vertexAlphas,ae.vertexTangents=K.vertexTangents,ae.toneMapping=K.toneMapping}function kt(C,K,ae,ce,te){K.isScene!==!0&&(K=_e),N.resetTextureUnits();let Ue=K.fog,Xe=ce.isMeshStandardMaterial?K.environment:null,Je=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:_n,je=(ce.isMeshStandardMaterial?Q:A).get(ce.envMap||Xe),rt=ce.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,at=!!ae.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Qe=!!ae.morphAttributes.position,yt=!!ae.morphAttributes.normal,Pt=!!ae.morphAttributes.color,Ut=ds;ce.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ut=_.toneMapping);let An=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,vt=An!==void 0?An.length:0,tt=Ne.get(ce),Ci=d.state.lights;if(Z===!0&&(j===!0||C!==b)){let qn=C===b&&ce.id===S;be.setState(ce,C,qn)}let Mt=!1;ce.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Ci.state.version||tt.outputColorSpace!==Je||te.isBatchedMesh&&tt.batching===!1||!te.isBatchedMesh&&tt.batching===!0||te.isBatchedMesh&&tt.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&tt.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&tt.instancing===!1||!te.isInstancedMesh&&tt.instancing===!0||te.isSkinnedMesh&&tt.skinning===!1||!te.isSkinnedMesh&&tt.skinning===!0||te.isInstancedMesh&&tt.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&tt.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&tt.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&tt.instancingMorph===!1&&te.morphTexture!==null||tt.envMap!==je||ce.fog===!0&&tt.fog!==Ue||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==be.numPlanes||tt.numIntersection!==be.numIntersection)||tt.vertexAlphas!==rt||tt.vertexTangents!==at||tt.morphTargets!==Qe||tt.morphNormals!==yt||tt.morphColors!==Pt||tt.toneMapping!==Ut||tt.morphTargetsCount!==vt)&&(Mt=!0):(Mt=!0,tt.__version=ce.version);let ii=tt.currentProgram;Mt===!0&&(ii=Et(ce,K,te));let ar=!1,Dn=!1,po=!1,Ft=ii.getUniforms(),gi=tt.uniforms;if(De.useProgram(ii.program)&&(ar=!0,Dn=!0,po=!0),ce.id!==S&&(S=ce.id,Dn=!0),ar||b!==C){De.buffers.depth.getReversed()?(P.copy(C.projectionMatrix),Vg(P),Gg(P),Ft.setValue(V,"projectionMatrix",P)):Ft.setValue(V,"projectionMatrix",C.projectionMatrix),Ft.setValue(V,"viewMatrix",C.matrixWorldInverse);let ns=Ft.map.cameraPosition;ns!==void 0&&ns.setValue(V,q.setFromMatrixPosition(C.matrixWorld)),ze.logarithmicDepthBuffer&&Ft.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Ft.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,Dn=!0,po=!0)}if(te.isSkinnedMesh){Ft.setOptional(V,te,"bindMatrix"),Ft.setOptional(V,te,"bindMatrixInverse");let qn=te.skeleton;qn&&(qn.boneTexture===null&&qn.computeBoneTexture(),Ft.setValue(V,"boneTexture",qn.boneTexture,N))}te.isBatchedMesh&&(Ft.setOptional(V,te,"batchingTexture"),Ft.setValue(V,"batchingTexture",te._matricesTexture,N),Ft.setOptional(V,te,"batchingIdTexture"),Ft.setValue(V,"batchingIdTexture",te._indirectTexture,N),Ft.setOptional(V,te,"batchingColorTexture"),te._colorsTexture!==null&&Ft.setValue(V,"batchingColorTexture",te._colorsTexture,N));let mo=ae.morphAttributes;if((mo.position!==void 0||mo.normal!==void 0||mo.color!==void 0)&&Me.update(te,ae,ii),(Dn||tt.receiveShadow!==te.receiveShadow)&&(tt.receiveShadow=te.receiveShadow,Ft.setValue(V,"receiveShadow",te.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(gi.envMap.value=je,gi.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&K.environment!==null&&(gi.envMapIntensity.value=K.environmentIntensity),Dn&&(Ft.setValue(V,"toneMappingExposure",_.toneMappingExposure),tt.needsLights&&Gt(gi,po),Ue&&ce.fog===!0&&Fe.refreshFogUniforms(gi,Ue),Fe.refreshMaterialUniforms(gi,ce,H,Y,d.state.transmissionRenderTarget[C.id]),Lr.upload(V,zt(tt),gi,N)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Lr.upload(V,zt(tt),gi,N),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Ft.setValue(V,"center",te.center),Ft.setValue(V,"modelViewMatrix",te.modelViewMatrix),Ft.setValue(V,"normalMatrix",te.normalMatrix),Ft.setValue(V,"modelMatrix",te.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){let qn=ce.uniformsGroups;for(let ns=0,is=qn.length;ns<is;ns++){let Of=qn[ns];W.update(Of,ii),W.bind(Of,ii)}}return ii}function Gt(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function fn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,K,ae){Ne.get(C.texture).__webglTexture=K,Ne.get(C.depthTexture).__webglTexture=ae;let ce=Ne.get(C);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=ae===void 0,ce.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,K){let ae=Ne.get(C);ae.__webglFramebuffer=K,ae.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,ae=0){w=C,T=K,y=ae;let ce=!0,te=null,Ue=!1,Xe=!1;if(C){let je=Ne.get(C);if(je.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(V.FRAMEBUFFER,null),ce=!1;else if(je.__webglFramebuffer===void 0)N.setupRenderTarget(C);else if(je.__hasExternalTextures)N.rebindTextures(C,Ne.get(C.texture).__webglTexture,Ne.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Qe=C.depthTexture;if(je.__boundDepthTexture!==Qe){if(Qe!==null&&Ne.has(Qe)&&(C.width!==Qe.image.width||C.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(C)}}let rt=C.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Xe=!0);let at=Ne.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(at[K])?te=at[K][ae]:te=at[K],Ue=!0):C.samples>0&&N.useMultisampledRTT(C)===!1?te=Ne.get(C).__webglMultisampledFramebuffer:Array.isArray(at)?te=at[ae]:te=at,I.copy(C.viewport),B.copy(C.scissor),k=C.scissorTest}else I.copy(pe).multiplyScalar(H).floor(),B.copy(ve).multiplyScalar(H).floor(),k=ue;if(De.bindFramebuffer(V.FRAMEBUFFER,te)&&ce&&De.drawBuffers(C,te),De.viewport(I),De.scissor(B),De.setScissorTest(k),Ue){let je=Ne.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+K,je.__webglTexture,ae)}else if(Xe){let je=Ne.get(C.texture),rt=K||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,je.__webglTexture,ae||0,rt)}S=-1},this.readRenderTargetPixels=function(C,K,ae,ce,te,Ue,Xe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=Ne.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(Je=Je[Xe]),Je){De.bindFramebuffer(V.FRAMEBUFFER,Je);try{let je=C.texture,rt=je.format,at=je.type;if(!ze.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-ce&&ae>=0&&ae<=C.height-te&&V.readPixels(K,ae,ce,te,oe.convert(rt),oe.convert(at),Ue)}finally{let je=w!==null?Ne.get(w).__webglFramebuffer:null;De.bindFramebuffer(V.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(C,K,ae,ce,te,Ue,Xe){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=Ne.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(Je=Je[Xe]),Je){let je=C.texture,rt=je.format,at=je.type;if(!ze.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=C.width-ce&&ae>=0&&ae<=C.height-te){De.bindFramebuffer(V.FRAMEBUFFER,Je);let Qe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Qe),V.bufferData(V.PIXEL_PACK_BUFFER,Ue.byteLength,V.STREAM_READ),V.readPixels(K,ae,ce,te,oe.convert(rt),oe.convert(at),0);let yt=w!==null?Ne.get(w).__webglFramebuffer:null;De.bindFramebuffer(V.FRAMEBUFFER,yt);let Pt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Hg(V,Pt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Qe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ue),V.deleteBuffer(Qe),V.deleteSync(Pt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,K=null,ae=0){C.isTexture!==!0&&(Ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,C=arguments[1]);let ce=Math.pow(2,-ae),te=Math.floor(C.image.width*ce),Ue=Math.floor(C.image.height*ce),Xe=K!==null?K.x:0,Je=K!==null?K.y:0;N.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,ae,0,0,Xe,Je,te,Ue),De.unbindTexture()},this.copyTextureToTexture=function(C,K,ae=null,ce=null,te=0){C.isTexture!==!0&&(Ao("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,C=arguments[1],K=arguments[2],te=arguments[3]||0,ae=null);let Ue,Xe,Je,je,rt,at,Qe,yt,Pt,Ut=C.isCompressedTexture?C.mipmaps[te]:C.image;ae!==null?(Ue=ae.max.x-ae.min.x,Xe=ae.max.y-ae.min.y,Je=ae.isBox3?ae.max.z-ae.min.z:1,je=ae.min.x,rt=ae.min.y,at=ae.isBox3?ae.min.z:0):(Ue=Ut.width,Xe=Ut.height,Je=Ut.depth||1,je=0,rt=0,at=0),ce!==null?(Qe=ce.x,yt=ce.y,Pt=ce.z):(Qe=0,yt=0,Pt=0);let An=oe.convert(K.format),vt=oe.convert(K.type),tt;K.isData3DTexture?(N.setTexture3D(K,0),tt=V.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(N.setTexture2DArray(K,0),tt=V.TEXTURE_2D_ARRAY):(N.setTexture2D(K,0),tt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);let Ci=V.getParameter(V.UNPACK_ROW_LENGTH),Mt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ii=V.getParameter(V.UNPACK_SKIP_PIXELS),ar=V.getParameter(V.UNPACK_SKIP_ROWS),Dn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ut.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ut.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,je),V.pixelStorei(V.UNPACK_SKIP_ROWS,rt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,at);let po=C.isDataArrayTexture||C.isData3DTexture,Ft=K.isDataArrayTexture||K.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let gi=Ne.get(C),mo=Ne.get(K),qn=Ne.get(gi.__renderTarget),ns=Ne.get(mo.__renderTarget);De.bindFramebuffer(V.READ_FRAMEBUFFER,qn.__webglFramebuffer),De.bindFramebuffer(V.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let is=0;is<Je;is++)po&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ne.get(C).__webglTexture,te,at+is),C.isDepthTexture?(Ft&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ne.get(K).__webglTexture,te,Pt+is),V.blitFramebuffer(je,rt,Ue,Xe,Qe,yt,Ue,Xe,V.DEPTH_BUFFER_BIT,V.NEAREST)):Ft?V.copyTexSubImage3D(tt,te,Qe,yt,Pt+is,je,rt,Ue,Xe):V.copyTexSubImage2D(tt,te,Qe,yt,Pt+is,je,rt,Ue,Xe);De.bindFramebuffer(V.READ_FRAMEBUFFER,null),De.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ft?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(tt,te,Qe,yt,Pt,Ue,Xe,Je,An,vt,Ut.data):K.isCompressedArrayTexture?V.compressedTexSubImage3D(tt,te,Qe,yt,Pt,Ue,Xe,Je,An,Ut.data):V.texSubImage3D(tt,te,Qe,yt,Pt,Ue,Xe,Je,An,vt,Ut):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,te,Qe,yt,Ue,Xe,An,vt,Ut.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,te,Qe,yt,Ut.width,Ut.height,An,Ut.data):V.texSubImage2D(V.TEXTURE_2D,te,Qe,yt,Ue,Xe,An,vt,Ut);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ci),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ii),V.pixelStorei(V.UNPACK_SKIP_ROWS,ar),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Dn),te===0&&K.generateMipmaps&&V.generateMipmap(tt),De.unbindTexture()},this.copyTextureToTexture3D=function(C,K,ae=null,ce=null,te=0){return C.isTexture!==!0&&(Ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,ce=arguments[1]||null,C=arguments[2],K=arguments[3],te=arguments[4]||0),Ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,K,ae,ce,te)},this.initRenderTarget=function(C){Ne.get(C).__webglFramebuffer===void 0&&N.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?N.setTextureCube(C,0):C.isData3DTexture?N.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?N.setTexture2DArray(C,0):N.setTexture2D(C,0),De.unbindTexture()},this.resetState=function(){T=0,y=0,w=null,De.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}},Xr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Bo=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},qr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_u,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new z,Ws=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zo=class extends Sn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sr,vo=new z,br=new z,Er=new z,Tr=new $e,Mo=new $e,wp=new et,Ia=new z,So=new z,Pa=new z,Bd=new $e,Il=new $e,zd=new $e,tc=class extends Dt{constructor(e=new zo){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qr(t,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new Ws(n,3,0,!1)),Sr.setAttribute("uv",new Ws(n,2,3,!1))}this.geometry=Sr,this.material=e,this.center=new $e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),wp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-Er.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;La(Ia.set(-.5,-.5,0),Er,o,br,s,r),La(So.set(.5,-.5,0),Er,o,br,s,r),La(Pa.set(.5,.5,0),Er,o,br,s,r),Bd.set(0,0),Il.set(1,0),zd.set(1,1);let a=e.ray.intersectTriangle(Ia,So,Pa,!1,vo);if(a===null&&(La(So.set(-.5,.5,0),Er,o,br,s,r),Il.set(0,1),a=e.ray.intersectTriangle(Ia,Pa,So,!1,vo),a===null))return;let c=e.ray.origin.distanceTo(vo);c<e.near||c>e.far||t.push({distance:c,point:vo.clone(),uv:hs.getInterpolation(vo,Ia,So,Pa,Bd,Il,zd,new $e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function La(i,e,t,n,s,r){Tr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Mo.x=r*Tr.x-s*Tr.y,Mo.y=s*Tr.x+r*Tr.y):Mo.copy(Tr),i.copy(e),i.x+=Mo.x,i.y+=Mo.y,i.applyMatrix4(wp)}var kd=new z,Hd=new xt,Vd=new xt,FM=new z,Gd=new et,Da=new z,Pl=new Fn,Wd=new et,Ll=new Vr,nc=class extends ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hf,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $n),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Da),this.boundingBox.expandByPoint(Da)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Da),this.boundingSphere.expandByPoint(Da)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pl.copy(this.boundingSphere),Pl.applyMatrix4(s),e.ray.intersectsSphere(Pl)!==!1&&(Wd.copy(s).invert(),Ll.copy(e.ray).applyMatrix4(Wd),!(this.boundingBox!==null&&Ll.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ll)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Hd.fromBufferAttribute(s.attributes.skinIndex,e),Vd.fromBufferAttribute(s.attributes.skinWeight,e),kd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Vd.getComponent(r);if(o!==0){let a=Hd.getComponent(r);Gd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(FM.copy(kd).applyMatrix4(Gd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},ko=class extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ic=class extends rn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=sn,u=sn,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xd=new et,OM=new et,sc=class i{constructor(e=[],t=[]){this.uuid=ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:OM;Xd.multiplyMatrices(a,t[r]),Xd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ic(t,e,e,Kn,li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ko),this.bones.push(o),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Xs=class extends dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wr=new et,qd=new et,Na=[],Yd=new $n,BM=new et,bo=new ot,Eo=new Fn,xn=class extends ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,BM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),Yd.copy(e.boundingBox).applyMatrix4(wr),this.boundingBox.union(Yd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),Eo.copy(e.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(Eo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(bo.geometry=this.geometry,bo.material=this.material,bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eo.copy(this.boundingSphere),Eo.applyMatrix4(n),e.ray.intersectsSphere(Eo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,wr),qd.multiplyMatrices(n,wr),bo.matrixWorld=qd,bo.raycast(e,Na);for(let o=0,a=Na.length;o<a;o++){let c=Na[o];c.instanceId=r,c.object=this,t.push(c)}Na.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ic(new Float32Array(s*this.count),s,this.count,oh,li));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var gs=class extends Sn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},rc=new z,oc=new z,Zd=new et,To=new Vr,Ua=new Fn,Dl=new z,Kd=new z,Yr=class extends Dt{constructor(e=new mt,t=new gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)rc.fromBufferAttribute(t,s-1),oc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=rc.distanceTo(oc);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(s),Ua.radius+=r,e.ray.intersectsSphere(Ua)===!1)return;Zd.copy(s).invert(),To.copy(e.ray).applyMatrix4(Zd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let d=u.getX(x),v=u.getX(x+1),M=Fa(this,e,To,c,d,v);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(p),d=Fa(this,e,To,c,x,m);d&&t.push(d)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let d=Fa(this,e,To,c,x,x+1);d&&t.push(d)}if(this.isLineLoop){let x=Fa(this,e,To,c,g-1,p);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fa(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(rc.fromBufferAttribute(o,s),oc.fromBufferAttribute(o,r),t.distanceSqToSegment(rc,oc,Dl,Kd)>n)return;Dl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Dl);if(!(c<e.near||c>e.far))return{distance:c,point:Kd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var $d=new z,Jd=new z,qs=class extends Yr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)$d.fromBufferAttribute(t,s),Jd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$d.distanceTo(Jd);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ac=class extends Yr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ys=class extends Sn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},jd=new et,Uu=new Vr,Oa=new Fn,Ba=new z,xs=class extends Dt{constructor(e=new mt,t=new Ys){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(s),Oa.radius+=r,e.ray.intersectsSphere(Oa)===!1)return;jd.copy(s).invert(),Uu.copy(e.ray).applyMatrix4(jd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,x=p;g<x;g++){let m=l.getX(g);Ba.fromBufferAttribute(h,m),Qd(Ba,m,c,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,x=p;g<x;g++)Ba.fromBufferAttribute(h,g),Qd(Ba,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qd(i,e,t,n,s,r,o){let a=Uu.distanceSqToPoint(i);if(a<t){let c=new z;Uu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var fi=class extends rn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bn=class i extends mt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],g=0,x=[],m=n/2,d=0;v(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ut(h,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(p,2));function v(){let _=new z,E=new z,T=0,y=(t-e)/n;for(let w=0;w<=r;w++){let S=[],b=w/r,I=b*(t-e)+e;for(let B=0;B<=s;B++){let k=B/s,L=k*c+a,O=Math.sin(L),U=Math.cos(L);E.x=I*O,E.y=-b*n+m,E.z=I*U,h.push(E.x,E.y,E.z),_.set(O,y,U).normalize(),f.push(_.x,_.y,_.z),p.push(k,1-b),S.push(g++)}x.push(S)}for(let w=0;w<s;w++)for(let S=0;S<r;S++){let b=x[S][w],I=x[S+1][w],B=x[S+1][w+1],k=x[S][w+1];(e>0||S!==0)&&(u.push(b,I,k),T+=3),(t>0||S!==r-1)&&(u.push(I,B,k),T+=3)}l.addGroup(d,T,0),d+=T}function M(_){let E=g,T=new $e,y=new z,w=0,S=_===!0?e:t,b=_===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,m*b,0),f.push(0,b,0),p.push(.5,.5),g++;let I=g;for(let B=0;B<=s;B++){let L=B/s*c+a,O=Math.cos(L),U=Math.sin(L);y.x=S*U,y.y=m*b,y.z=S*O,h.push(y.x,y.y,y.z),f.push(0,b,0),T.x=O*.5+.5,T.y=U*.5*b+.5,p.push(T.x,T.y),g++}for(let B=0;B<s;B++){let k=E+B,L=I+B;_===!0?u.push(L,L+1,k):u.push(L+1,L,k),w+=3}l.addGroup(d,w,_===!0?1:2),d+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zs=class i extends bn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fu=class i extends mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let M=new z,_=new z,E=new z;for(let T=0;T<t.length;T+=3)p(t[T+0],M),p(t[T+1],_),p(t[T+2],E),c(M,_,E,v)}function c(v,M,_,E){let T=E+1,y=[];for(let w=0;w<=T;w++){y[w]=[];let S=v.clone().lerp(_,w/T),b=M.clone().lerp(_,w/T),I=T-w;for(let B=0;B<=I;B++)B===0&&w===T?y[w][B]=S:y[w][B]=S.clone().lerp(b,B/I)}for(let w=0;w<T;w++)for(let S=0;S<2*(T-w)-1;S++){let b=Math.floor(S/2);S%2===0?(f(y[w][b+1]),f(y[w+1][b]),f(y[w][b])):(f(y[w][b+1]),f(y[w+1][b+1]),f(y[w+1][b]))}}function l(v){let M=new z;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(v),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function u(){let v=new z;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];let _=m(v)/2/Math.PI+.5,E=d(v)/Math.PI+.5;o.push(_,1-E)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){let M=o[v+0],_=o[v+2],E=o[v+4],T=Math.max(M,_,E),y=Math.min(M,_,E);T>.9&&y<.1&&(M<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),E<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function p(v,M){let _=v*3;M.x=e[_+0],M.y=e[_+1],M.z=e[_+2]}function g(){let v=new z,M=new z,_=new z,E=new z,T=new $e,y=new $e,w=new $e;for(let S=0,b=0;S<r.length;S+=9,b+=6){v.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),T.set(o[b+0],o[b+1]),y.set(o[b+2],o[b+3]),w.set(o[b+4],o[b+5]),E.copy(v).add(M).add(_).divideScalar(3);let I=m(E);x(T,b+0,v,I),x(y,b+2,M,I),x(w,b+4,_,I)}}function x(v,M,_,E){E<0&&v.x===1&&(o[M]=v.x-1),_.x===0&&_.z===0&&(o[M]=E/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Ks=class i extends Fu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var _s=class i extends mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new z,f=new z,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let v=[],M=d/n,_=0;d===0&&o===0?_=.5/t:d===n&&c===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){let T=E/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(T+_,1-M),v.push(l++)}u.push(v)}for(let d=0;d<n;d++)for(let v=0;v<t;v++){let M=u[d][v+1],_=u[d][v],E=u[d+1][v],T=u[d+1][v+1];(d!==0||o>0)&&p.push(M,_,T),(d!==n-1||c<Math.PI)&&p.push(_,E,T)}this.setIndex(p),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var cc=class extends bt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},it=class extends Sn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uh,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},On=class extends it{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Gi=class extends Sn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uh,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=$u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function za(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function zM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function kM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ep(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Ap(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var ys=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ou=class extends ys{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vf,endingEnd:Vf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gf:r=e,a=2*t-n;break;case Wf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gf:o=e,c=2*n-t;break;case Wf:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,M=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let E=0;E!==a;++E)r[E]=d*o[u+E]+v*o[l+E]+M*o[c+E]+_*o[h+E];return r}},Bu=class extends ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}},zu=class extends ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Jn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=za(t,this.TimeBufferType),this.values=za(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:za(e.times,Array),values:za(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ou(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zr:t=this.InterpolantFactoryMethodDiscrete;break;case kr:t=this.InterpolantFactoryMethodLinear;break;case il:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return kr;case this.InterpolantFactoryMethodSmooth:return il}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&zM(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===il,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let h=a*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=kr;var vs=class extends Jn{constructor(e,t,n){super(e,t,n)}};vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=zr;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends Jn{};lc.prototype.ValueTypeName="color";var Wi=class extends Jn{};Wi.prototype.ValueTypeName="number";var ku=class extends ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)Qt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Xi=class extends Jn{InterpolantFactoryMethodLinear(e){return new ku(this.times,this.values,this.getValueSize(),e)}};Xi.prototype.ValueTypeName="quaternion";Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends Jn{constructor(e,t,n){super(e,t,n)}};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=zr;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Jn{};qi.prototype.ValueTypeName="vector";var uc=class{constructor(e="",t=-1,n=[],s=dg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ui(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(VM(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Jn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=kM(c);c=ep(c,1,u),l=ep(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Wi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,p,g,x){if(p.length!==0){let m=[],d=[];Ap(p,m,d,g),m.length!==0&&x.push(new h(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)p[f[g].morphTargets[x]]=-1;for(let x in p){let m=[],d=[];for(let v=0;v!==f[g].morphTargets.length;++v){let M=f[g];m.push(M.time),d.push(M.morphTarget===x?1:0)}s.push(new Wi(".morphTargetInfluence["+x+"]",m,d))}c=p.length*o}else{let p=".bones["+t[h].name+"]";n(qi,p+".position",f,"pos",s),n(Xi,p+".quaternion",f,"rot",s),n(qi,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function HM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wi;case"vector":case"vector2":case"vector3":case"vector4":return qi;case"color":return lc;case"quaternion":return Xi;case"bool":case"boolean":return vs;case"string":return Ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function VM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=HM(i.type);if(i.times===void 0){let t=[],n=[];Ap(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var fs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Hu=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},GM=new Hu,Yi=class{constructor(e){this.manager=e!==void 0?e:GM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Yi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ui={},Vu=class extends Error{constructor(e,t){super(e),this.response=t}},Ho=class extends Yi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=fs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ui[e]!==void 0){Ui[e].push({onLoad:t,onProgress:n,onError:s});return}Ui[e]=[],Ui[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Ui[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,x=0,m=new ReadableStream({start(d){v();function v(){h.read().then(({done:M,value:_})=>{if(M)d.close();else{x+=_.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let T=0,y=u.length;T<y;T++){let w=u[T];w.onProgress&&w.onProgress(E)}d.enqueue(_),v()}},M=>{d.error(M)})}}});return new Response(m)}else throw new Vu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{fs.add(e,l);let u=Ui[e];delete Ui[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{let u=Ui[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ui[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Gu=class extends Yi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=fs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Fo("img");function c(){u(),fs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var hc=class extends Yi{constructor(e){super(e)}load(e,t,n,s){let r=new rn,o=new Gu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Zr=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Kr=class extends Zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Nl=new et,tp=new z,np=new z,Vo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oo,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;tp.setFromMatrixPosition(e.matrixWorld),t.position.copy(tp),np.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(np),t.updateMatrixWorld(),Nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wu=class extends Vo{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Hr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},$r=class extends Zr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Wu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ip=new et,wo=new z,Ul=new z,Xu=class extends Vo{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),wo.setFromMatrixPosition(e.matrixWorld),n.position.copy(wo),Ul.copy(n.position),Ul.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ul),n.updateMatrixWorld(),s.makeTranslation(-wo.x,-wo.y,-wo.z),ip.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ip)}},fc=class extends Zr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},qu=class extends Vo{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vi=class extends Zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new qu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ss=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var dc=class extends Yi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=fs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return fs.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),fs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});fs.add(e,c),r.manager.itemStart(e)}};var pc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=sp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function sp(){return performance.now()}var dh="\\[\\]\\.:\\/",WM=new RegExp("["+dh+"]","g"),ph="[^"+dh+"]",XM="[^"+dh.replace("\\.","")+"]",qM=/((?:WC+[\/:])*)/.source.replace("WC",ph),YM=/(WCOD+)?/.source.replace("WCOD",XM),ZM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ph),KM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ph),$M=new RegExp("^"+qM+YM+ZM+KM+"$"),JM=["material","materials","bones","map"],Yu=class{constructor(e,t,n){let s=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(WM,"")}static parseTrackName(e){let t=$M.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);JM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=Yu;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var OE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Xo=class i extends ot{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new qt;let n=this,s=t.color!==void 0?new Ae(t.color):new Ae(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,c=t.shader||i.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,u=new ai,h=new z,f=new z,p=new z,g=new et,x=new z(0,0,-1),m=new xt,d=new z,v=new z,M=new xt,_=new et,E=this.camera,T=new jt(r,o,{samples:l,type:En}),y=new bt({name:c.name!==void 0?c.name:"unspecified",uniforms:Si.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});y.uniforms.tDiffuse.value=T.texture,y.uniforms.color.value=s,y.uniforms.textureMatrix.value=_,this.material=y,this.onBeforeRender=function(w,S,b){if(f.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(b.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),d.subVectors(f,p),d.dot(h)>0)return;d.reflect(h).negate(),d.add(f),g.extractRotation(b.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(p),v.subVectors(f,x),v.reflect(h).negate(),v.add(f),E.position.copy(d),E.up.set(0,1,0),E.up.applyMatrix4(g),E.up.reflect(h),E.lookAt(v),E.far=b.far,E.updateMatrixWorld(),E.projectionMatrix.copy(b.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(E.projectionMatrix),_.multiply(E.matrixWorldInverse),_.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(E.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let I=E.projectionMatrix;M.x=(Math.sign(m.x)+I.elements[8])/I.elements[0],M.y=(Math.sign(m.y)+I.elements[9])/I.elements[5],M.z=-1,M.w=(1+I.elements[10])/I.elements[14],m.multiplyScalar(2/m.dot(M)),I.elements[2]=m.x,I.elements[6]=m.y,I.elements[10]=m.z+1-a,I.elements[14]=m.w,n.visible=!1;let B=w.getRenderTarget(),k=w.xr.enabled,L=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(T),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(S,E),w.xr.enabled=k,w.shadowMap.autoUpdate=L,w.setRenderTarget(B);let O=b.viewport;O!==void 0&&w.state.viewport(O),n.visible=!0},this.getRenderTarget=function(){return T},this.dispose=function(){T.dispose(),n.material.dispose()}}};Xo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var vc=[25,18,15,12,10,8,6,4],$s={maxSpeed:80,accel:26,brake:30,steerRate:1.7,steerHighSpeed:.75,grip:1,wetGrip:.78,driftBonus:1.6,airControl:.12,airStability:1,landing:1,boostPower:1.22,boostDuration:2.2,boostCharges:3,offroadDrag:1,wallLoss:.25,steerNoise:0,slipstream:1},Ei={sunset:{id:"sunset",name:"Fin d'apr\xE8s-midi",grip:1,wet:0,rain:0,wind:0,sheen:.9,skyTop:8825052,skyHorizon:15785172,fogColor:14074548,fogDensity:52e-5,sunColor:16756316,sunIntensity:4.6,sunDir:[-.5,.21,-.62],hemiSky:12899050,hemiGround:9399366,hemiIntensity:.8,seaColor:2786996,night:!1,bloom:.34},sicily:{id:"sicily",name:"Apr\xE8s-midi sicilien",grip:1,wet:0,rain:0,wind:.1,sheen:.2,skyTop:4885468,skyHorizon:13623792,fogColor:13425124,fogDensity:5e-4,sunColor:16773854,sunIntensity:3.3,sunDir:[-.45,.62,-.4],hemiSky:12375282,hemiGround:8156256,hemiIntensity:.85,seaColor:1994664,night:!1,bloom:.25},rain:{id:"rain",name:"Nuit pluvieuse",grip:.8,wet:1,rain:1,wind:.6,skyTop:329231,skyHorizon:1711933,fogColor:1317427,fogDensity:.0028,sunColor:7375103,sunIntensity:.7,sunDir:[.4,.7,.3],hemiSky:3820170,hemiGround:1052696,hemiIntensity:.75,seaColor:662067,night:!0,bloom:1},fog:{id:"fog",name:"Brume matinale",grip:.92,wet:.35,rain:0,wind:.2,skyTop:10467535,skyHorizon:15262418,fogColor:14277846,fogDensity:.0052,sunColor:16773328,sunIntensity:1.5,sunDir:[.5,.35,.5],hemiSky:13621734,hemiGround:7301722,hemiIntensity:1.1,seaColor:6262687,night:!1,bloom:.35}};function qo(i){let e=String(i),t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t^=t>>>15,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}function Bn(i){let e=(typeof i=="number"?i>>>0:qo(i))||1,t=e,n=()=>{e=e+1831565813>>>0;let s=e;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};return{next:n,range:(s,r)=>s+(r-s)*n(),int:(s,r)=>s+Math.floor(n()*(r-s+1)),pick:s=>s[Math.floor(n()*s.length)],chance:s=>n()<s,sign:()=>n()<.5?-1:1,shuffle:s=>{let r=s.slice();for(let o=r.length-1;o>0;o--){let a=Math.floor(n()*(o+1));[r[o],r[a]]=[r[a],r[o]]}return r},fork:s=>Bn(qo(t+":"+s))}}var Mc=Math.PI*2,jM=2,Rp=2800,Cp=4200,QM=34,Ip=8,Pp=60,e1=.12,t1=.1,Lp=28,n1=150,mh=52,yh=.0025,Dp=1/150,i1=10,Np=5,Up=250,Fp=38,Op=75,Sc=150,xh=120,Hp=10,s1=80,r1=40,o1=20,a1=30,c1=95,gh=18,Bp=22,l1=60,_h=(i,e,t)=>i<e?e:i>t?t:i;function u1(i){let e=i.int(10,14),t=i.range(440,520),n=[];for(let s=0;s<e;s++){let r=i.range(-.3,.3)*(Mc/e),o=s/e*Mc+r,a=_h(t*i.range(.62,1.25),380,620);n.push([a*Math.cos(o),a*Math.sin(o)])}return n}function h1(i,e,t,n,s,r,o,a,c){let l=(x,m,d,v)=>{let M=(c-d)/(v-d);return[x[0]+(m[0]-x[0])*M,x[1]+(m[1]-x[1])*M]},u=l(i,e,s,r),h=l(e,t,r,o),f=l(t,n,o,a),p=l(u,h,s,o),g=l(h,f,r,a);return l(p,g,r,o)}function f1(i,e){let t=i.length,n=[];for(let s=0;s<t;s++){let r=i[(s-1+t)%t],o=i[s],a=i[(s+1)%t],c=i[(s+2)%t],l=0,u=l+Math.sqrt(Math.hypot(o[0]-r[0],o[1]-r[1])),h=u+Math.sqrt(Math.hypot(a[0]-o[0],a[1]-o[1])),f=h+Math.sqrt(Math.hypot(c[0]-a[0],c[1]-a[1]));for(let p=0;p<e;p++){let g=u+(h-u)*(p/e);n.push(h1(r,o,a,c,l,u,h,f,g))}}return n}function d1(i){let e=i.length,t=new Float64Array(e+1);for(let l=0;l<e;l++){let u=i[l],h=i[(l+1)%e];t[l+1]=t[l]+Math.hypot(h[0]-u[0],h[1]-u[1])}let n=t[e],s=Math.max(1,Math.round(n/jM)),r=n/s,o=new Float64Array(s),a=new Float64Array(s),c=0;for(let l=0;l<s;l++){let u=l*r;for(;c<e-1&&t[c+1]<=u;)c++;let h=i[c],f=i[(c+1)%e],p=t[c+1]-t[c],g=p>0?(u-t[c])/p:0;o[l]=h[0]+(f[0]-h[0])*g,a[l]=h[1]+(f[1]-h[1])*g}return{xs:o,zs:a,count:s,step:r}}function zp(i,e){let t=i.length,n=new Float64Array(t),s=2*e+1,r=0;for(let o=-e;o<=e;o++)r+=i[(o+t)%t];for(let o=0;o<t;o++)n[o]=r/s,r+=i[(o+1+e)%t]-i[((o-e)%t+t)%t];return n}function p1(i,e,t){let n=i.length,s=new Float64Array(n),r=new Float64Array(n);for(let a=0;a<n;a++){let c=(a-1+n)%n,l=(a+1)%n,u=i[l]-i[c],h=e[l]-e[c],f=Math.hypot(u,h)||1;s[a]=u/f,r[a]=h/f}let o=new Float64Array(n);for(let a=0;a<n;a++){let c=(a-1+n)%n,l=(a+1)%n,u=(s[l]-s[c])/(2*t),h=(r[l]-r[c])/(2*t);o[a]=s[a]*h-r[a]*u}return o}function m1(i,e){let t=i.length;for(let n=0;n<50;n++){let s=!1;for(let r=2*t-1;r>=0;r--){let o=r%t,a=(o+1)%t,c=Math.sqrt(i[a]*i[a]+2*r1*e);i[o]>c+1e-9&&(i[o]=c,s=!0)}for(let r=0;r<2*t;r++){let o=r%t,a=(o+1)%t,c=Math.sqrt(i[o]*i[o]+2*o1*e);i[a]>c+1e-9&&(i[a]=c,s=!0)}if(!s)break}}function kp(i){let e=i.length,t=-1;for(let r=0;r<e;r++)if(i[r]!==i[(r-1+e)%e]){t=r;break}if(t<0)return i[0]!==0?[{start:0,len:e,key:i[0]}]:[];let n=[],s=null;for(let r=0;r<e;r++){let o=(t+r)%e,a=i[o];s&&a===s.key?s.len++:(s&&s.key!==0&&n.push(s),s={start:o,len:1,key:a})}return s&&s.key!==0&&n.push(s),n}function Vp(i,e){let t=i.length,n=0;for(let s=0;s<t;s++){let r=i[s].vmax,o=i[(s+1)%t].vmax;n+=e/Math.max(1,.5*(r+o))}return n}function vh(i,e){let t=i.length,n=0,s=0,r=new Int8Array(t),o=new Int8Array(t);for(let l=0;l<t;l++){let u=i[l].curv,h=Math.abs(u);h>n&&(n=h);let f=Math.abs(i[l].slope);f>s&&(s=f),r[l]=u>Dp?1:u<-Dp?-1:0,o[l]=h<yh?1:0}let a=0;for(let l of kp(r))l.len*e>=i1&&a++;let c={start:0,len:0};for(let l of kp(o))l.key===1&&l.len>c.len&&(c=l);return{minRadius:n>0?1/n:1/0,maxSlope:s,corners:a,longestStraight:c.len*e,longestStraightStart:c.start}}function g1(i,e){let t=i.length,n=mh,s=(l,u)=>(l+4096)*8192+(u+4096),r=new Map,o=new Array(t);for(let l=0;l<t;l++){let u=Math.floor(i[l].x/n),h=Math.floor(i[l].z/n);o[l]=[u,h];let f=s(u,h),p=r.get(f);p||(p=[],r.set(f,p)),p.push(l)}let a=0,c=mh*mh;for(let l=0;l<t;l++){let[u,h]=o[l];for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){let g=r.get(s(u+f,h+p));if(g)for(let x of g){if(x<=l)continue;let m=Math.abs(l-x);if(Math.min(m,t-m)*e<=n1)continue;let v=i[l].x-i[x].x,M=i[l].z-i[x].z;v*v+M*M<c&&a++}}}return a}function x1(i){let e=u1(i),t=f1(e,160),{xs:n,zs:s,count:r,step:o}=d1(t),a=[[8,12],[4,7],[2,4],[1,2]],c=[1,2,4,7].map((y,w)=>({k:y,a:i.range(a[w][0],a[w][1]),p:i.range(0,Mc)})),l=new Float64Array(r),u=new Float64Array(r),h=new Float64Array(r);for(let y=0;y<r;y++){let w=(y-1+r)%r,S=(y+1)%r,b=n[S]-n[w],I=s[S]-s[w];h[y]=Math.hypot(b,I)||1e-9,l[y]=b/h[y],u[y]=I/h[y]}let f=new Float64Array(r),p=new Float64Array(r),g=1;for(let y=0;y<40;y++){for(let S=0;S<r;S++){let b=0;for(let I of c)b+=I.a*g*Math.sin(Mc*I.k*S/r+I.p);f[S]=QM+b}let w=0;for(let S=0;S<r;S++){let b=(S-1+r)%r,I=(S+1)%r;p[S]=(f[I]-f[b])/h[S],Math.abs(p[S])>w&&(w=Math.abs(p[S]))}if(w<=t1)break;g*=.9}let x=new Float64Array(r),m=new Float64Array(r),d=new Float64Array(r);for(let y=0;y<r;y++){let w=(y-1+r)%r,S=(y+1)%r,b=n[S]-n[w],I=f[S]-f[w],B=s[S]-s[w],k=Math.hypot(b,I,B)||1e-9;x[y]=b/k,m[y]=I/k,d[y]=B/k}let v=p1(n,s,o),M=zp(v,2),_=new Float64Array(r);for(let y=0;y<r;y++){let w=_h((Math.abs(M[y])-.016666666666666666)/.023333333333333334,0,1);_[y]=gh+(Bp-gh)*w}let E=zp(_,10);for(let y=0;y<r;y++)E[y]=_h(E[y],gh,Bp);let T=new Float64Array(r);for(let y=0;y<r;y++)T[y]=Math.min(c1,Math.sqrt(a1/Math.max(Math.abs(M[y]),1e-9)));return m1(T,o),{xs:n,ys:f,zs:s,count:r,step:o,fx:l,fz:u,tx:x,ty:m,tz:d,slope:p,curv:M,width:E,vmax:T}}function _1(i){let{xs:e,ys:t,zs:n,count:s,step:r,fx:o,fz:a,tx:c,ty:l,tz:u,slope:h,curv:f,width:p,vmax:g}=i,x=[];for(let M=0;M<s;M++)x.push({curv:f[M],slope:h[M],vmax:g[M],x:e[M],z:n[M]});let m=vh(x,r),d=m.longestStraight>0?(m.longestStraightStart+Math.round(s1/r))%s:0,v=new Array(s);for(let M=0;M<s;M++){let _=(d+M)%s;v[M]={s:M*r,x:e[_],y:t[_],z:n[_],tx:c[_],ty:l[_],tz:u[_],rx:-a[_],rz:o[_],width:p[_],curv:f[_],vmax:g[_],slope:h[_]}}return v}function y1(i,e,t){let n=i.length,s=new Int32Array(n+1);for(let m=0;m<n;m++)s[m+1]=s[m]+(Math.abs(i[m].curv)>=yh?1:0);let r=(m,d)=>s[d+1]-s[m]===0,o=Math.ceil(Sc/e),a=Math.floor((n*e-Sc)/e),c=Math.ceil(Hp/e),l=[],u=[],h=(m,d)=>l.every(([v,M])=>d<v||m>M),f=(m,d,v,M)=>{for(let _=0;_<400;_++){let E=Math.round(t.range(m,d)/e),T=Math.ceil(v/e),y=E+T;if(a-y<o)return null;let w=t.int(o,a-y),S=w+E;if(M&&!r(w,S+T))continue;let b=w-c,I=S+T+c;if(!(b<0||I>n-1||!h(b,I)))return l.push([b,I]),{a:w,b:S}}return null},p=t.int(2,3);for(let m=0;m<p;m++){let d=f(12,16,xh,!0);d&&u.push({type:"ramp",s0:d.a*e,s1:d.b*e,height:t.range(1.2,2.2)})}let g=t.int(2,3);for(let m=0;m<g;m++){let d=f(10,10,0,!1);d&&u.push({type:"boost",s0:d.a*e,s1:d.b*e})}let x=t.int(1,2);for(let m=0;m<x;m++){let d=f(60,140,0,!1);d&&u.push({type:"tunnel",s0:d.a*e,s1:d.b*e})}return u.sort((m,d)=>m.s0-d.s0),u}function v1(i,e,t){let n=x1(i),s=_1(n),{count:r,step:o}=n,a=r*o,c=y1(s,o,i),l=vh(s,o),u=1/0,h=-1/0,f=1/0,p=-1/0;for(let g of s)g.x<u&&(u=g.x),g.x>h&&(h=g.x),g.z<f&&(f=g.z),g.z>p&&(p=g.z);return{seed:e,attempts:t,length:a,step:o,count:r,pts:s,features:c,bounds:{minX:u,maxX:h,minZ:f,maxZ:p},stats:{minRadius:l.minRadius,maxSlope:l.maxSlope,lapTimeEstimate:Vp(s,o),corners:l.corners}}}function M1(i){let e=[],{pts:t,count:n,step:s,length:r}=i;if(!Array.isArray(t)||t.length!==n||!(n>0)||!(s>0))return{ok:!1,reasons:["structure invalide"]};r>=Rp&&r<=Cp||e.push(`longueur ${r.toFixed(0)} m hors [${Rp}, ${Cp}]`),Math.abs(n*s-r)>1e-6&&e.push("count * step != length");let o=1/0,a=-1/0;for(let d of t)d.y<o&&(o=d.y),d.y>a&&(a=d.y);(o<Ip||a>Pp)&&e.push(`altitude ${o.toFixed(1)}..${a.toFixed(1)} hors [${Ip}, ${Pp}]`);let c=vh(t,s);c.minRadius>=Lp||e.push(`rayon min ${c.minRadius.toFixed(1)} m < ${Lp}`),c.maxSlope>e1&&e.push(`pente max ${(c.maxSlope*100).toFixed(1)} % > 12 %`),c.corners<Np&&e.push(`${c.corners} virages < ${Np}`),c.longestStraight<Up&&e.push(`ligne droite max ${c.longestStraight.toFixed(0)} m < ${Up}`);let l=g1(t,s);l>0&&e.push(`${l} paires d'\xE9chantillons trop proches (croisement ou rapprochement)`);let u=Vp(t,s);u>=Fp&&u<=Op||e.push(`temps au tour ${u.toFixed(1)} s hors [${Fp}, ${Op}]`);let h=i.features||[],f=h.filter(d=>d.type==="ramp").length,p=h.filter(d=>d.type==="boost").length,g=h.filter(d=>d.type==="tunnel").length;f<2&&e.push(`${f} tremplin(s) < 2`),p<2&&e.push(`${p} boost(s) < 2`),g<1&&e.push("aucun tunnel");let x=d=>Math.round((d%r+r)%r/s)%n;for(let d of h)if((d.s0<Sc||d.s1>r-Sc)&&e.push(`feature ${d.type} trop proche du d\xE9part`),d.type==="ramp"){let v=d.s1-d.s0;(v<11.5||v>16.5)&&e.push(`tremplin de ${v.toFixed(1)} m hors 12..16`),d.height>=1.2&&d.height<=2.2||e.push("hauteur de tremplin hors 1.2..2.2");let M=x(d.s0),_=x(d.s1+xh),E=!0;for(let T=M;T!==(_+1)%n;T=(T+1)%n)if(Math.abs(t[T].curv)>=yh){E=!1;break}E||e.push("tremplin non situ\xE9 sur une ligne droite avec r\xE9ception")}let m=h.slice().sort((d,v)=>d.s0-v.s0);for(let d=0;d+1<m.length;d++){let v=m[d],M=m[d+1],_=v.s1+(v.type==="ramp"?xh:0);M.s0<_+Hp-1e-6&&e.push(`features ${v.type} et ${M.type} se chevauchent`)}return{ok:e.length===0,reasons:e}}function Gp(i,e={}){let t=e.maxAttempts??l1,n=Bn(i),s=null,r=1/0;for(let o=0;o<t;o++){let a=n.fork("try"+o),c=v1(a,i,o+1),l=M1(c);if(l.ok)return c;l.reasons.length<r&&(r=l.reasons.length,s=c)}return s.attempts=t,s}function Mh(i,e){let t=i.length;if(i.open)return e<0?0:Math.min(e,(i.count-1.001)*i.step);let n=e%t;return n<0&&(n+=t),n>=t&&(n-=t),n}var S1=(i,e)=>{let t=Math.hypot(i,e)||1;return[i/t,e/t]};function Ki(i,e,t={}){let n=i.count,s=i.step,r=Mh(i,e),o=r/s,a=Math.floor(o),c=a%n,l=(c+1)%n,u=o-a,h=i.pts[c],f=i.pts[l],p=(_,E)=>_+(E-_)*u,g=p(h.tx,f.tx),x=p(h.ty,f.ty),m=p(h.tz,f.tz),d=Math.hypot(g,x,m)||1,[v,M]=S1(p(h.rx,f.rx),p(h.rz,f.rz));if(t.s=r,t.x=p(h.x,f.x),t.y=p(h.y,f.y),t.z=p(h.z,f.z),i.open&&e!==r){let _=e-r;t.x+=g/d*_,t.z+=m/d*_}return t.tx=g/d,t.ty=x/d,t.tz=m/d,t.rx=v,t.rz=M,t.width=p(h.width,f.width),t.curv=p(h.curv,f.curv),t.vmax=p(h.vmax,f.vmax),t.slope=p(h.slope,f.slope),t.i=c,t}var Zi={};function Nt(i,e,t,n={}){return Ki(i,e,Zi),n.x=Zi.x+t*Zi.rx,n.y=Zi.y,n.z=Zi.z+t*Zi.rz,n.heading=Math.atan2(Zi.tx,Zi.tz),n.slope=Zi.slope,n}function Wp(i,e){let t=Mh(i,e);for(let n of i.features)if(n.type==="ramp"&&t>=n.s0&&t<n.s1)return n.height*(t-n.s0)/(n.s1-n.s0);return 0}function bs(i,e,t){let n=Mh(i,e);for(let s of i.features)if((t===void 0||s.type===t)&&n>=s.s0&&n<=s.s1)return s;return null}var T1=1/30,Xp=.5,qp=.4,w1=.6,Yo=[.2,.36,.52,.68,.84],Yp=Yo.length+1,A1=.2,R1=.1,C1=.34,I1=4,P1=4,L1=.2,D1=4.9,N1=5.5,U1=5,F1=6,O1=1.8,B1=.03,z1=1.6,k1=.5,H1=2,V1=.785,G1=4.7,W1=2.5,jr=.196,X1=.098,q1=.5,Y1=.27,Z1=16,K1=11,$1=.72,J1=5,j1=.5,Zp=.35,Q1=.42,eS=60,tS=.3,nS=5,iS=1.6,sS=3,rS=14,oS=.004,aS=1.2,cS=2,lS=.5,uS=22,Kp=.25,hS=6,fS=1.8,$p=1,dS=["s","d","yaw","vdir","speed","yRel","vy","lean","steer","pitch","compress","drift","boostT","wheelSpin","stun","rpm","wheelie","_g","_vyG","_shiftT","_t","_pitchF","_dive","_turnF","_springA","_springP","_wallT","_apex"],Xt=(i,e,t)=>i<e?e:i>t?t:i,Ti=(i,e=0)=>Number.isFinite(i)?i:e,pS=(i,e)=>{let t=i%e;return t<0?t+e:t},mS=(i,e,t)=>i<e?Math.min(e,i+t):Math.max(e,i-t);function Jp({s:i=0,d:e=0}={}){return{s:i,d:e,yaw:0,vdir:0,speed:0,yRel:0,vy:0,airborne:!1,lean:0,steer:0,pitch:0,compress:0,drift:0,boostT:0,boostCharges:$s.boostCharges,onRoad:!0,wheelSpin:0,stun:0,gear:1,rpm:0,wheelie:0,events:[],_init:!1,_g:0,_vyG:0,_prevBoost:!1,_padKey:null,_shiftT:0,_wallHit:!1,_t:0,_turnF:0,_pitchF:0,_dive:0,_springA:0,_springP:0,_wallT:0,_apex:0}}function jp(i,e,t,n,s,r,o){let a=i.events,c=e||{},l=s||{},u=!!c.boost&&!i._prevBoost;if(i._prevBoost=!!c.boost,r=Number.isFinite(r)&&r>0?Math.min(r,T1):0,i._init||(i._init=!0,i.boostCharges=n.boostCharges),r===0)return i;let h=t.length,f=n.maxSpeed,p=Xt(Ti(c.throttle),0,1),g=Xt(Ti(c.brake),0,1),x=Xt(Ti(c.steer),-1,1),m=i.stun>0;m&&(i.stun=Math.max(0,i.stun-r),p=0,g=0,x=0);let d=Ve=>t.open?Ve:pS(Ve,h),v=d(i.s),M=Ki(t,v),_=!i.airborne;if(u&&!m&&i.boostCharges>0&&i.boostT<=0&&(i.boostCharges-=1,i.boostT=n.boostDuration,a.push("boost")),_){let Ve=bs(t,v,"boost");if(Ve){let be=Math.floor(i.s/h)+":"+Ve.s0;i._padKey!==be&&(i._padKey=be,i.boostT=Math.max(i.boostT,aS),a.push("pad"))}}g>.5&&i.boostT>0&&(i.boostT=0);let E=i.boostT>0;E&&(p=1);let T=_&&!m&&Math.abs(x)>.3&&i.speed>cS&&(!!c.drift||g>.3),y=i.speed,w=y/f;i._shiftT>0?i._shiftT-=r:i.gear<Yp&&w>Yo[i.gear-1]&&!(g>0&&y>3)?(i.gear+=1,i._shiftT=A1):i.gear>1&&y<Yo[i.gear-2]*f-2&&(i.gear-=1,i._shiftT=R1);let S=i.gear>1?Yo[i.gear-2]:0,b=i.gear<Yp?Yo[i.gear-1]:1;i.rpm=Xt(.35+.65*((w-S)/(b-S)),.1,1.05);let I=_&&Math.abs(i.d)>M.width*.5,B=w1*f,k=I?B:f*(E?n.boostPower:1),L=I1/(f*f),O=0;if(_){if(I&&y>B&&(O-=2*n.offroadDrag*(y-B)),p>0&&i._shiftT<=0&&y<k){let Ve=C1*f,be=.8+.2*Math.sin(Math.PI*Xt(i.rpm,0,1)),J=n.accel*p*be*Math.min(1,Ve/Math.max(y,1));E&&(J*=H1),O+=Math.min(J,n.accel*1.15*(E?1.3:1))}g>0&&(O-=n.brake*g*(T?.35:1)),O-=y*(.2-.03*(i.gear-1))*(1-p),O-=L1,O-=D1*M.slope,O-=L*y*y}else O-=L*P1*y*y;i.speed=Math.max(0,y+O*r),_&&i.speed>k&&!I&&(i.speed=Math.max(k,i.speed-10*r));let U=Xt(i.speed/f,0,1),Y=1+(n.wetGrip-1)*gS(l),H=Xt(n.grip*Ti(l.grip,1)*Y,.05,1.5),ie=i.speed<.6?0:x,pe=Math.abs(ie)>Math.abs(i.steer)||ie*i.steer<0?N1:U1*Xt(Math.abs(O)/6,1,2.5);i.steer=mS(i.steer,ie,pe*r);let ve=i.yaw-i.vdir,ue=i.speed*Math.sin(ve),ne=Math.min(z1,1+B1*Math.abs(ue));T&&(ne=n.driftBonus),E&&_&&(ne*=k1);let Z=1-(1-n.steerHighSpeed)*U,j=Math.min(1,i.speed/6),P=_?1:n.airControl,X=i.steer*n.steerRate*Z*ne*j*P*(.6+.4*Math.min(1,H)),q=Math.min(i.speed/nS,eS*Math.min(1.2,H)*(T?1.5:1)/Math.max(i.speed,1)),ee=Xt(X,-q,q);_&&Math.abs(x)<=.15&&(i.yaw*=Math.exp(-iS*r)),o&&n.steerNoise>0&&!m&&_&&(i.yaw+=n.steerNoise*p*(o.next()*2-1)*r);let _e=Math.max(.3,1-i.d*M.curv),Re=i.speed*Math.cos(i.vdir)/_e*r,Pe=i.speed*Math.sin(i.vdir)*r,V=M.curv*Re,We=i.vdir,He=V*(_?1-tS:1);if(i.yaw+=ee*r-He,i.vdir-=He,_){let Ve=(T?O1:F1)*H,be=1-Math.exp(-Ve*r);i.vdir+=(i.yaw-i.vdir)*be,i.speed*=1-(1-Math.cos(ve))*be}else{let Ve=3*Xt(n.airStability,0,2);i.yaw+=(i.vdir-i.yaw)*(1-Math.exp(-Ve*r)),n.airStability<1&&(i.yaw+=(i.yaw>=i.vdir?1:-1)*(1-n.airStability)*.6*r)}i.vdir=Xt(Ti(i.vdir),-Xp,Xp),i.yaw=Xt(Ti(i.yaw),i.vdir-qp,i.vdir+qp),i._t+=r,Pe+=Ti(l.wind)*(1.2*Math.sin(i._t*.37)+.4*Math.sin(i._t*1.13+1))*r*(_?1:.5),i.s+=Re,i.d+=Pe;let ze=_?Xt((Math.abs(i.yaw-i.vdir)-.04)/.22,0,1)*j:0;i.drift+=(ze-i.drift)*Math.min(1,8*r);let De=Ki(t,d(i.s));i.onRoad=Math.abs(i.d)<=De.width*.5;let Ye=De.width*.5+6-.4;if(Math.abs(i.d)>=Ye-.02){let Ve=i.d>=0?1:-1,be=i.vdir*Ve>0,J=be?Math.abs(Math.sin(i.vdir)):0;if(i.d=Ve*Ye,be&&(i.vdir=-Ve*.04,i.yaw=i.yaw*.4-Ve*.04),i._wallHit)i.speed*=Math.max(0,1-.8*r);else{let Se=i.boostT>0,Me=o?o.next():1;Se&&i.speed>hS||J>lS&&i.speed>uS&&Me<Kp||i.airborne&&Me<Kp?(i.speed*=.3,i.stun=fS,a.push("crash")):i.speed*=1-Xt(n.wallLoss*1.3*(.5+J),0,.9),a.push("wall")}i.boostT=0,i._wallT=Zp,i._wallHit=!0}else i._wallHit=!1;i.stun>0&&_&&(i.speed*=Math.exp(-2.2*r)),v=d(i.s);let Ne=Ti(Wp(t,v)),N=(Ne-i._g)/r;if(i.airborne||(Ne<i.yRel-.05?(i.airborne=!0,i._apex=i.yRel-Ne,i.vy=i._vyG,i.vy>sS&&a.push("jump")):(i.yRel=Ne,i.vy=Xt(N,-80,80),i._vyG=i.vy)),i.airborne&&(i.vy-=26*r,i.yRel+=i.vy*r,i._apex=Math.max(i._apex,i.yRel-Ne),i.vy<=0&&i.yRel<=Ne)){let Ve=-i.vy,be=Math.abs(i.yaw-i.vdir),J=Ve>rS/Math.max(.3,n.landing)||be>.35;i.airborne=!1,i.yRel=Ne,i.vy=0,i._vyG=0,i._springA=Xt(i._springA+.35*i._apex+.03*Ve,0,1),i._springP=Math.PI/2;let Se=oS*Ve+(J?.08:0);i.speed*=1-Xt(Se/Math.max(.2,n.landing),0,.45),a.push(J?"hardLand":"land")}i._g=Ne,_=!i.airborne,i.speed=Xt(Ti(i.speed),0,1.5*f),i._wallT=Math.max(0,i._wallT-r);let A=Math.max(0,1-i.speed/4,i._wallT/Zp),Q=_?(V+(i.vdir-We))/r:0;i._turnF+=(Q-i._turnF)*Math.min(1,6*r);let ge=i.speed*i._turnF,xe=Math.sign(ge)*Math.max(0,Math.abs(ge)-J1),fe=i.steer*Q1*Math.min(1,i.speed/10),Ce=Xt((1-A)*(Math.atan(xe/K1)*$1+j1*(i.yaw-i.vdir)+fe),-$p,$p);i.stun>0&&(Ce=(i.lean>=0?1:-1)*1.35),i.lean+=(Ce-i.lean)*Math.min(1,9*r),i._dive=g>.1&&_?Math.min(jr,i._dive+jr*r):Math.max(0,i._dive-.25*r);let Fe=Xt(O*X1,-jr,jr)-i._dive;i._pitchF+=(Fe-i._pitchF)*Math.min(1,r/q1);let Oe=Xt(Fe-i._pitchF,-jr,jr);i.wheelie=i.boostT>0&&_?Math.min(Math.PI/2,i.wheelie+G1*r):Math.max(0,i.wheelie-W1*r),Oe+=Math.sin(i.wheelie)*V1,_||(Oe=Math.atan2(i.vy,Math.max(8,i.speed))),i.pitch=Oe,i._springA*=Math.exp(-r/Y1),i._springP+=Z1*r,i.compress=Math.sin(i._springP)*i._springA,i.wheelSpin+=i.speed/.32*r,i.boostT=Math.max(0,i.boostT-r);for(let Ve of dS)Number.isFinite(i[Ve])||(i[Ve]=0);return i.speed<0&&(i.speed=0),i}function gS(i){return Xt(Ti(i.wet),0,1)}var xS=8,_S=25,yS=150,vS=3,MS=35,SS=2,bS=14,ES=30,TS=12,wS=2,AS={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},an=(i,e,t)=>i<e?e:i>t?t:i,bc=(i,e,t)=>i+(e-i)*t,RS=(i,e)=>i-e*Math.round(i/e);function CS(i,e){let t=i.length,n=i.features,s=null,r=1/0;for(let o=0;o<n.length;o++){let a=n[o];if(a.type!=="ramp")continue;let c=((a.s0-e)%t+t)%t;c<r&&(r=c,s=a)}return s?{f:s,dist:r}:null}function IS(i,e){for(let t=0;t<=yS;t+=_S)if(Math.abs(Ki(i,e+t).curv)>.004)return!1;return!0}function Ec(i,e){let t=i||AS,n={persona:t,rng:e,skill:an(t.skill??.5,0,1),aggression:an(t.aggression??.5,0,1),jumpSkill:an(t.jumpSkill??.5,0,1),lineSkill:an(t.lineSkill??.5,0,1),playerGap:0,dGoal:0,wander:0,wanderGoal:0,wanderT:0,mistakeT:0,mistakeSide:1,nextMistake:0,boostLock:0,input:{throttle:0,brake:0,steer:0,boost:!1,drift:!1}};return n.nextMistake=e.range(8,20)+(1-n.skill)*15,n}function Tc(i,e,t,n,s,r){let o=i.input,a=t.length,c=i.rng,l=i.aggression,u=i.skill,h=i.jumpSkill,f=e.speed,p=e.s,g=Ki(t,p),x=Math.max(.8,g.width*.5-1.2);i.wanderT-=r,i.wanderT<=0&&(i.wanderT=c.range(.9,1.8),i.wanderGoal=c.range(-1,1)*(1-i.lineSkill)*.5*x),i.wander+=(i.wanderGoal-i.wander)*Math.min(1,r*1.5),i.nextMistake-=r,i.mistakeT-=r,i.mistakeT<=0&&i.nextMistake<=0&&(i.mistakeT=c.range(.5,1.2),i.mistakeSide=c.sign(),i.nextMistake=c.range(8,20)+(1-u)*15);let m=i.mistakeT>0;i.boostLock-=r;let d=bc(1.4,.6,l),v=Math.max(20,f*d),M=Math.max(v,an(f*1.6+20,40,110)),_=1/0,E=0,T=0,y=0;for(let Z=0;Z<=M;Z+=xS){let j=Z===0?g:Ki(t,p+Z);if(Z<=v&&j.vmax<_&&(_=j.vmax),Z>=8){let P=Math.abs(j.curv);P>E&&(E=P,T=Math.sign(j.curv),y=Z)}}let w=an(E/.02,0,1),S=0;if(T!==0&&w>0){let Z=an((y-10)/30,0,1),j=bc(1,-.8,Z);S=T*x*i.lineSkill*w*j}S+=i.wander,m&&(S+=i.mistakeSide*1.2);let b=CS(t,p),I=b?b.dist:1/0,B=bs(t,p,"ramp")!==null,k=I<ES;(B||k)&&h>.5&&(S*=1-an((h-.4)/.6,0,1));let L=!B&&I>=vS&&I<=MS&&h<.5;for(let Z=0;Z<s.length;Z++){let j=s[Z];if(j===e)continue;let P=RS(j.s-p,a);if(P<=0||P>=TS)continue;let X=j.d-e.d;if(!(Math.abs(X)>=wS)){if(l>.55){let q=X!==0?Math.sign(X):e.d<0?1:-1;S+=q*(.6+.8*l)}else{let q=X!==0?-Math.sign(X):e.d<0?1:-1;Math.abs(e.d+q*2)>x&&(q=-q),S+=q*2*(1-l)}break}}S=an(S,-x,x),i.dGoal+=(S-i.dGoal)*Math.min(1,r*2.5);let O=an(i.dGoal,-x,x),U;if(e.airborne)U=an(-e.yaw*2,-.3,.3);else{let Z=O-e.d,j=an(Z*.12,-.25,.25),P=Ki(t,p+an(f*.25,4,20)).curv,X=n.steerRate*bc(1,n.steerHighSpeed,an(f/n.maxSpeed,0,1));U=(P*f+(j-e.yaw)*3)/X}U=an(U,-1,1),Number.isFinite(U)||(U=0);let Y=an(-i.playerGap/150,-1,1)*.06,H=bc(.86,1,u)+l*.04;m&&(H*=.85);let ie=_*H*(1+Y),le=n.maxSpeed,pe=!1;if(!e.airborne&&e.boostCharges>0&&e.boostT<=0&&i.boostLock<=0){if(h>.6&&I>=SS&&I<=bS)pe=!0;else if(f>20&&IS(t,p)){let Z=i.playerGap<-20,j=.25+.5*l+(Z?.3:0);pe=c.chance(j)}i.boostLock=pe?1:.4}o.boost=pe;let ve=E<.003;if(e.boostT>0){let Z=le*n.boostPower;ie=ve?Z*.98:Math.min(ie,Z)}else ie=Math.min(ie,le);let ue=0,ne=0;if(e.airborne)ue=1;else{let Z=ie-f;Z>-1.5?ue=L?0:an(.5+Z*.25,0,1):ne=an((-Z-1.5)*.15,0,1)}return o.throttle=ue,o.brake=ne,o.steer=U,o.drift=!e.airborne&&l>.75&&E>.025&&f>40&&y<20,o}var PS=7,LS=3,DS=.3,NS=3,US=25,FS=1.5,OS=1.2,BS=1.8,Qp=.9,zS={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},wc=(i,e,t)=>i<e?e:i>t?t:i,Sh=(i,e)=>i-e*Math.round(i/e);function bh(){return{throttle:0,brake:0,steer:0,boost:!1,drift:!1}}function em({track:i,laps:e,env:t,rng:n,riders:s,final:r=!0,carry:o=null}){let a=i.length,c=i.raceEnd??a,l=e*c,h=s.filter(E=>!E.isPlayer).concat(s.filter(E=>E.isPlayer)).map((E,T)=>{let y=Math.floor(T/2),w=T%2,S=-PS*(y+1),b=w===0?-2.5:2.5,I=o?.states.get(E.id),B=I||Jp({s:S,d:b});return{id:E.id,name:E.name,color:E.color,accent:E.accent,isPlayer:!!E.isPlayer,stats:E.stats,persona:E.persona||null,state:B,ai:E.isPlayer?null:Ec(E.persona||zS,n.fork("ai:"+E.id)),rng:n.fork("rider:"+E.id),others:null,input:bh(),coast:bh(),frameEvents:[],startS:I?I.s:S,lap:1,lapTimes:[],bestLap:null,lapStartT:0,finished:!1,finishTime:null,position:T+1}});for(let E of h)E.others=h.filter(T=>T!==E).map(T=>T.state);let f=h.find(E=>E.isPlayer)||null,p=h.slice(),g=h.length,x=new Uint8Array(g*g);function m(E,T,y,w,S){if(y===T)return;let b=Math.floor(T/c),I=Math.min(Math.floor(y/c),e);for(let B=Math.max(b+1,1);B<=I;B++){let k=wc((B*c-T)/(y-T),0,1),L=w+k*S,O=L-E.lapStartT;E.lapTimes.push(O),(E.bestLap===null||O<E.bestLap)&&(E.bestLap=O),E.lapStartT=L}if(r&&y>=l){let B=wc((l-T)/(y-T),0,1);E.finished=!0,E.finishTime=w+B*S}}function d(E){let T=E.state,y=E.coast;return y.throttle=DS,y.brake=0,y.steer=wc(-T.yaw*2-T.d*.05,-.5,.5),y.boost=!1,y.drift=!1,y}function v(E,T){let y=E.state;for(let w=0;w<g;w++){let S=h[w];if(S===E)continue;let b=Sh(S.state.s-y.s,a);if(b>NS&&b<US&&Math.abs(S.state.d-y.d)<FS){y.speed=Math.min(y.speed+OS*E.stats.slipstream*T,E.stats.maxSpeed*1.05);return}}}function M(){for(let E=0;E<g;E++)for(let T=E+1;T<g;T++){let y=h[E],w=h[T],S=Sh(w.state.s-y.state.s,a),b=w.state.d-y.state.d,I=E*g+T;if(Math.abs(S)<BS&&Math.abs(b)<Qp){let B=b!==0?Math.sign(b):n.sign(),k=(Qp-Math.abs(b))/2+.05;if(y.state.d-=B*k,w.state.d+=B*k,!x[I]){x[I]=1;let L=(y.state.speed+w.state.speed)/2;y.state.speed+=(L-y.state.speed)*.2,w.state.speed+=(L-w.state.speed)*.2;let O=S>=0?y:w;O.state.speed*=.96}}else x[I]=0}}let _={phase:o?"racing":"countdown",countdown:o?0:LS,time:o?o.time:0,final:r,laps:e,track:i,riders:h,player:f,update(E,T){if(_.phase==="countdown"){_.countdown=Math.max(0,_.countdown-E),_.countdown<=0&&(_.phase="racing");return}let y=_.time;_.time+=E;for(let w=0;w<g;w++){let S=h[w];S.finished?S.input=d(S):S.isPlayer?S.input=T||bh():(f&&(S.ai.playerGap=Sh(S.state.s-f.state.s,a)),S.input=Tc(S.ai,S.state,i,S.stats,S.others,E))}for(let w=0;w<g;w++){let S=h[w],b=S.state,I=S.finished,B=b.s;if(jp(b,S.input,i,S.stats,t,E,S.rng),I||(m(S,B,b.s,y,E),S.finished||v(S,E)),S.lap=S.finished?e:wc(Math.floor(b.s/c)+1,1,e),!S.isPlayer){S.frameEvents.length=0;for(let k=0;k<b.events.length;k++)S.frameEvents.push(b.events[k]);b.events.length=0}}M(),p.sort((w,S)=>w.finished!==S.finished?w.finished?-1:1:w.finished?w.finishTime-S.finishTime:S.state.s-w.state.s);for(let w=0;w<g;w++)p[w].position=w+1;r?(f?f.finished:h.every(w=>w.finished))&&(_.phase="finished"):(f||p[0]).state.s>=c&&(_.phase="relay")},results(){let E=h.map(T=>{let y;if(T.finished)y=T.finishTime;else{let w=Math.max(0,T.state.s-T.startS),S=_.time>1?Math.max(5,w/_.time):40,b=Math.max(0,l-T.state.s);y=_.time+b/S}return{id:T.id,name:T.name,position:T.position,time:y,bestLap:T.bestLap,isPlayer:T.isPlayer}});return E.sort((T,y)=>T.position-y.position),E}};return _}var Lh={};G0(Lh,{PLAYER:()=>wi,RIVALS:()=>Rc,UPGRADES:()=>Js,applyUpgrade:()=>wh,computeStats:()=>Qr,createRun:()=>Cc,dailySeed:()=>Pc,isRunOver:()=>Zo,loadMeta:()=>Ch,offerUpgrades:()=>Th,randomSeed:()=>HS,recordResult:()=>Ah,runRiders:()=>Ic,saveMeta:()=>Ih,standings:()=>eo,updateMeta:()=>Ph});var tm="polygon-rush-meta",kS=Object.keys(Ei).filter(i=>i!=="sicily"),wi={id:"player",name:"Vous",color:14885934,accent:2312392},Js=[{id:"turbo",name:"Turbo instable",tagline:"Acc\xE9l\xE9ration brutale, pilotage nerveux.",pro:"Acc\xE9l\xE9ration \xD71,35 et vitesse de pointe \xD71,04.",con:"Direction bruit\xE9e (+0,35 rad/s) et braquage \xD70,9 \xE0 haute vitesse.",icon:"\u26A1",maxStacks:1,apply(i){i.accel*=1.35,i.maxSpeed*=1.04,i.steerNoise+=.35,i.steerHighSpeed*=.9}},{id:"rally",name:"Suspension rallye",tagline:"Les r\xE9ceptions passent mieux, la vitesse de pointe trinque.",pro:"R\xE9ception \xD71,8 et tra\xEEn\xE9e hors-piste \xD70,6.",con:"Vitesse de pointe \xD70,95.",icon:"\u{1F3D4}",maxStacks:2,apply(i){i.landing*=1.8,i.offroadDrag*=.6,i.maxSpeed*=.95}},{id:"aero",name:"A\xE9rodynamique",tagline:"Plus de vitesse, moins de tenue en l'air.",pro:"Vitesse de pointe \xD71,07.",con:"Stabilit\xE9 en saut \xD70,6 et contr\xF4le a\xE9rien \xD70,7.",icon:"\u{1F4A8}",maxStacks:2,apply(i){i.maxSpeed*=1.07,i.airStability*=.6,i.airControl*=.7}},{id:"rain",name:"Pneus pluie",tagline:"Accroche imbattable sous l'averse, sec moins mordant.",pro:"Adh\xE9rence mouill\xE9e \xD71,35 (\u2248 1,05).",con:"Adh\xE9rence s\xE8che \xD70,95.",icon:"\u{1F327}",maxStacks:1,apply(i){i.wetGrip*=1.35,i.grip*=.95}},{id:"nitro",name:"Nitro double",tagline:"Deux charges de plus, des boosts plus courts.",pro:"+2 charges de boost par course.",con:"Dur\xE9e de boost \xD70,75.",icon:"\u{1F680}",maxStacks:2,apply(i){i.boostCharges+=2,i.boostDuration*=.75}},{id:"brakes",name:"Freins c\xE9ramique",tagline:"Freinage mordant, direction plus vive, reprise plus lente.",pro:"Freinage \xD71,4 et braquage \xD71,08.",con:"Acc\xE9l\xE9ration \xD70,95.",icon:"\u{1F6D1}",maxStacks:2,apply(i){i.brake*=1.4,i.steerRate*=1.08,i.accel*=.95}},{id:"gyro",name:"Gyroscope",tagline:"Stabilisateur de vol, adh\xE9rence en retrait.",pro:"Contr\xF4le a\xE9rien \xD71,5 et stabilit\xE9 en l'air \xD71,25.",con:"Adh\xE9rence \xD70,9.",icon:"\u{1F300}",maxStacks:2,apply(i){i.airControl*=1.5,i.airStability*=1.25,i.grip*=.9}},{id:"slick",name:"Pneus slick",tagline:"Gomme tendre : accroche s\xE8che maximale, pluie interdite.",pro:"Adh\xE9rence s\xE8che \xD71,12.",con:"Adh\xE9rence mouill\xE9e \xD70,7 et braquage \xD70,95.",icon:"\u{1F3C1}",maxStacks:2,apply(i){i.grip*=1.12,i.wetGrip*=.7,i.steerRate*=.95}},{id:"carenage",name:"Car\xE9nage aspiration",tagline:"Profil fusel\xE9 : on file dans le sillage, on tourne moins vite.",pro:"Aspiration \xD71,6 dans le sillage des concurrents.",con:"Braquage \xD70,92.",icon:"\u{1F32C}",maxStacks:2,apply(i){i.slipstream*=1.6,i.steerRate*=.92}},{id:"blindage",name:"Blindage renforc\xE9",tagline:"Carrosserie en acier : les chocs co\xFBtent moins, la moto p\xE8se.",pro:"Perte de vitesse contre les glissi\xE8res \xD70,5.",con:"Acc\xE9l\xE9ration \xD70,92 et vitesse de pointe \xD70,97.",icon:"\u{1F6E1}",maxStacks:2,apply(i){i.wallLoss*=.5,i.accel*=.92,i.maxSpeed*=.97}}],Rc=[{id:"vortex",name:"Vortex Solenne",color:58879,accent:728366,skill:.8,aggression:.92,jumpSkill:.6,lineSkill:.5,style:"agressif",bio:"Freine tard, plonge dans les virages et ne l\xE2che jamais un pilote \xE0 la corde."},{id:"saltamonte",name:"Brigo Saltamonte",color:16766474,accent:1118481,skill:.76,aggression:.45,jumpSkill:.97,lineSkill:.5,style:"sauteur",bio:"Vole plus haut que tout le monde, atterrit quand il veut, parfois trop tard."},{id:"lumen",name:"Lumen Ardoise",color:8190976,accent:1714704,skill:.84,aggression:.15,jumpSkill:.55,lineSkill:.97,style:"trajectoire",bio:"Trace une ligne parfaite, ne prend jamais un bord et ne commet aucune faute."},{id:"aurelio",name:"Aurelio Temp\xEAte",color:16747520,accent:0,skill:.97,aggression:.7,jumpSkill:.85,lineSkill:.9,style:"r\xE9gulier",bio:"Le champion de la c\xF4te : rien \xE0 lui reprocher, et il le sait."},{id:"maree",name:"Ingrid Mar\xE9e",color:11544319,accent:16777215,skill:.88,aggression:.78,jumpSkill:.7,lineSkill:.6,style:"agressif",bio:"Pousse ses freins jusqu'\xE0 la limite et ressort des virages en coup de vent."},{id:"gaspard",name:"Gaspard Brume",color:1989631,accent:15790320,skill:.72,aggression:.35,jumpSkill:.4,lineSkill:.6,style:"r\xE9gulier",bio:"Discret, m\xE9tronome, il finit presque toujours dans les cinq premiers."},{id:"yuki",name:"Yuki Varan",color:50316,accent:8217,skill:.91,aggression:.5,jumpSkill:.8,lineSkill:.8,style:"r\xE9gulier",bio:"Rapide sur tous les terrains, sans point faible visible, et toujours souriant."}],nm=[{name:"Coastal Rush",subtitle:"Route m\xE9diterran\xE9enne, grandes courbes et falaises"},{name:"Cliff Edge",subtitle:"Corniches \xE9troites et vent de face"},{name:"Harbor Drift",subtitle:"Quais glissants, embruns et virages en \xE9pingle"},{name:"Lighthouse Pass",subtitle:"Tunnels, ressauts et brouillard de phare"},{name:"The Final Run",subtitle:"Le champion vous attend"}],Eh=nm.length;function im(i){return Js.find(e=>e.id===i)||null}function sm(i,e){let t=0;for(let n of i.upgrades)n===e&&t++;return t}function Cc(i){let e=String(i),t=Bn(qo(e+"|run")),n=[];for(let o=0;o<Eh;o++)if(o===0)n.push("sunset");else if(o===Eh-1)n.push("rain");else{let a=n[o-1],c=kS.filter(l=>l!==a&&!(o===Eh-2&&l==="rain"));n.push(t.pick(c))}let s=nm.map((o,a)=>({name:o.name,subtitle:o.subtitle,trackSeed:`${e}-${a}`,weather:n[a],laps:a<2?2:3})),r={[wi.id]:0};for(let o of Rc)r[o.id]=0;return{seed:e,stageIndex:0,stages:s,upgrades:[],points:r,history:[]}}function Ic(i){let e=Math.max(0,i.stageIndex),t=[{id:wi.id,name:wi.name,color:wi.color,accent:wi.accent,isPlayer:!0,persona:null,stats:Qr(i)}];for(let n of Rc){let s=Math.min(.99,Math.round((n.skill+.01*e)*100)/100);t.push({id:n.id,name:n.name,color:n.color,accent:n.accent,isPlayer:!1,persona:{...n,skill:s},stats:{...$s}})}return t}function Qr(i){let e={...$s};for(let t of i.upgrades){let n=im(t);n&&n.apply(e)}return e}function Th(i){let e=Bn(qo(`${i.seed}|offer|${i.stageIndex}`)),t=Js.filter(n=>sm(i,n.id)<n.maxStacks);return e.shuffle(t).slice(0,3)}function wh(i,e){let t=im(e);return!t||sm(i,e)>=t.maxStacks?!1:(i.upgrades.push(e),!0)}function rm(i){if(i===wi.id)return wi.name;let e=Rc.find(t=>t.id===i);return e?e.name:i}function Ah(i,e){if(Zo(i))return i;let t=e.slice().sort((r,o)=>r.position-o.position),n=i.stages[i.stageIndex],s={stage:i.stageIndex,name:n.name,results:[]};return t.forEach((r,o)=>{let a=r.position??o+1,c=vc[a-1]??0;i.points[r.id]=(i.points[r.id]||0)+c,s.results.push({id:r.id,name:r.name||rm(r.id),position:a,points:c,isPlayer:r.id===wi.id})}),i.history.push(s),i.stageIndex+=1,i}function eo(i){let e={};for(let t of i.history)for(let n of t.results)e[n.id]=Math.min(e[n.id]??1/0,n.position);return Object.keys(i.points).map(t=>({id:t,name:rm(t),points:i.points[t],isPlayer:t===wi.id,_best:e[t]??1/0})).sort((t,n)=>n.points-t.points||t._best-n._best).map(({_best:t,...n})=>n)}function Zo(i){return i.stageIndex>=i.stages.length}function Pc(i=new Date){let e=i instanceof Date?i:new Date(i),t=e.getUTCFullYear(),n=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`DAILY-${t}-${n}-${s}`}function HS(){let i="ABCDEFGHJKMNPQRSTUVWXYZ23456789",e="RUSH-";for(let t=0;t<4;t++)e+=i[Math.floor(Math.random()*i.length)];return e}function Ac(){return{runs:0,wins:0,bestPoints:0,unlocked:[]}}function Rh(i){let e=Ac();if(!i||typeof i!="object")return e;let t=n=>Number.isFinite(n)&&n>=0?Math.floor(n):0;return{runs:t(i.runs),wins:t(i.wins),bestPoints:t(i.bestPoints),unlocked:Array.isArray(i.unlocked)?i.unlocked.filter(n=>typeof n=="string"):e.unlocked}}function om(){try{return globalThis.localStorage??null}catch{return null}}function Ch(){try{let i=om();if(!i)return Ac();let e=i.getItem(tm);return e?Rh(JSON.parse(e)):Ac()}catch{return Ac()}}function Ih(i){try{let e=om();return e?(e.setItem(tm,JSON.stringify(Rh(i))),!0):!1}catch{return!1}}function Ph(i,e){let t=Rh(i),n=eo(e),s=n.find(o=>o.isPlayer),r=n.length>0&&n[0].isPlayer;return{runs:t.runs+1,wins:t.wins+(r?1:0),bestPoints:Math.max(t.bestPoints,s?s.points:0),unlocked:t.unlocked.slice()}}var jn=.9,am=.3,Lc=8,Dh=3,cm=6+.8,Ko=3,VS=4.5,GS=.015,WS=.004,lm=60,gt={asphaltA:[.27,.225,.2],asphaltB:[.31,.26,.23],rampDark:[.13,.13,.15],yellow:[1,.82,.05],black:[.04,.04,.05],white:[.95,.95,.92],red:[.86,.14,.12],checkW:[.95,.95,.95],checkB:[.04,.04,.05],railA:[.93,.92,.88],railB:[.8,.2,.12],neonCyan:[.2,1,1],neonMag:[1,.15,.9],sand:[.3,.48,.15],motorwayA:[.2,.2,.21],motorwayB:[.22,.22,.23],lane:[.34,.33,.31],gravel:[.24,.4,.13],tunOchreA:[.5,.39,.2],tunOchreB:[.44,.34,.17],sodium:[1,.72,.28],tunA:[.16,.18,.24],tunB:[.21,.23,.3],concrete:[.36,.38,.42],concreteB:[.3,.32,.36],post:[.12,.13,.16],beam:[.1,.1,.12],mast:[.17,.18,.22]},Dc=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],um=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],XS=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],yn=(i,e,t)=>i+(e-i)*t,In=class{constructor(){this.pos=[],this.col=[],this.uv=[],this.idx=[],this.n=0}quad(e,t,n,s){let[r,o,a,c]=e,l=um(Dc(o,r),Dc(a,r)),u=um(Dc(a,r),Dc(c,r)),h=[l[0]+u[0],l[1]+u[1],l[2]+u[2]];if(!(Math.hypot(h[0],h[1],h[2])>1e-12))return;let f=XS(h,n)<0,p=this.n;for(let g=0;g<4;g++){let x=e[g];this.pos.push(x[0],x[1],x[2]),this.col.push(t[0],t[1],t[2]);let m=s?s[g]:[0,0];this.uv.push(m[0],m[1])}this.n+=4,f?this.idx.push(p,p+2,p+1,p,p+3,p+2):this.idx.push(p,p+1,p+2,p,p+2,p+3)}};function $o(i,e,t,n,s){for(let r=0;r<3;r++){let o=(r+1)%3,a=(r+2)%3;for(let c of[-1,1]){let l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([u,h])=>{let f=[0,0,0];return f[r]=c,f[o]=u,f[a]=h,[0,1,2].map(p=>e[p]+t[0][p]*f[0]*n[0]+t[1][p]*f[1]*n[1]+t[2][p]*f[2]*n[2])});i.quad(l,s,t[r].map(u=>u*c),null)}}}function Nh(i,e,t){if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new fi(n);return s.colorSpace=At,s.anisotropy=4,s}function hm(i,e,t,n){i.beginPath(),e.forEach(([s,r],o)=>o?i.lineTo(s*t,r*n):i.moveTo(s*t,r*n)),i.closePath(),i.fill()}var qS=[[.12,.1],[.82,.5],[.12,.9],[.12,.68],[.5,.5],[.12,.32]];function Uh(i,e,t){let n=t??Bn(i.seed??1),s=i.pts,r=s.length,o=i.step??i.length/r,a=i.length??r*o,c=i.features??[],l=c.filter(R=>R.type==="ramp"),u=c.filter(R=>R.type==="boost"),h=c.filter(R=>R.type==="tunnel"),f=Math.max(0,Math.min(1,e.sheen??e.wet??0)),p=!!e.night,g=new ft;g.name="road";let x=[],m=[],d=[],v=R=>(m.push(R),R),M=Nh(128,128,(R,D,F)=>{R.fillStyle="#f3efe6",R.fillRect(0,0,D,F),R.fillStyle="#d6202a",hm(R,qS,D,F)}),_=Nh(256,128,(R,D,F)=>{R.fillStyle="#04141a",R.fillRect(0,0,D,F),R.fillStyle="#37f3ff",hm(R,[[.05,.1],[.8,.5],[.05,.9],[.05,.7],[.4,.5],[.05,.3]],D,F)}),E=Nh(1024,256,(R,D,F)=>{R.fillStyle="#0b0e16",R.fillRect(0,0,D,F),R.strokeStyle="#ffd21f",R.lineWidth=10,R.strokeRect(12,12,D-24,F-24),R.fillStyle="#ffd21f",R.font="bold 150px Arial, Helvetica, sans-serif",R.textAlign="center",R.textBaseline="middle",R.fillText("POLYGON RUSH",D/2,F/2+8)});for(let R of[M,_,E])R&&d.push(R);_&&(_.wrapS=Hi);let T=v(new it({vertexColors:!0,flatShading:!0,roughness:.85-.6*f,metalness:f>0?.2:.02})),y=v(new Wt({vertexColors:!0})),w=v(new it({vertexColors:!0,flatShading:!0,color:16777215,emissive:16777215,emissiveIntensity:.14,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),S=v(new it({vertexColors:!0,flatShading:!0,roughness:1})),b=v(new it({vertexColors:!0,flatShading:!0,roughness:.5,metalness:.2})),I=v(new Wt({vertexColors:!0})),B=v(new it({color:M?16777215:16762906,map:M,emissive:M?16777215:16762906,emissiveMap:M,emissiveIntensity:.5,flatShading:!0})),k=v(new it({color:207411,emissive:3666943,emissiveMap:_,emissiveIntensity:2.2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),L=v(new it({vertexColors:!0,flatShading:!0,side:Rt,roughness:.9})),O=v(new Wt({vertexColors:!0})),U=v(new it({vertexColors:!0,flatShading:!0,roughness:.6})),Y=v(new it({color:E?16777215:16765471,map:E,emissive:E?16777215:16756736,emissiveMap:E,emissiveIntensity:.7,flatShading:!0})),H=v(new it({color:2830138,flatShading:!0,roughness:.7})),ie=v(new it({color:16773570,emissive:16765562,emissiveIntensity:p?2.5:.8,flatShading:!0})),le=R=>{for(let D of l)if(R>=D.s0&&R<D.s1)return D.height*(R-D.s0)/(D.s1-D.s0);return 0},pe=R=>l.some(D=>R>=D.s0&&R<D.s1),ve=R=>h.some(D=>R>=D.s0&&R<=D.s1),ue=R=>{let D=R/o,F=Math.floor(D),$=D-F;F=i.open?Math.max(0,Math.min(r-2,F)):(F%r+r)%r;let he=s[F],Ie=s[(F+1)%r],Be=yn(he.rx,Ie.rx,$),ke=yn(he.rz,Ie.rz,$),G=Math.hypot(Be,ke)||1,re=yn(he.tx,Ie.tx,$),de=yn(he.tz,Ie.tz,$),me=Math.hypot(re,de)||1,ye=yn(he.y,Ie.y,$);return{s:R,x:yn(he.x,Ie.x,$),z:yn(he.z,Ie.z,$),yb:ye,y:ye,h:0,rx:Be/G,rz:ke/G,tx:re/me,tz:de/me,w:yn(he.width,Ie.width,$),curv:yn(he.curv,Ie.curv,$),sample:!1}},ne=(R,D,F)=>({x:yn(R.x,D.x,F),y:yn(R.y,D.y,F),yb:yn(R.yb,D.yb,F),z:yn(R.z,D.z,F),rx:yn(R.rx,D.rx,F),rz:yn(R.rz,D.rz,F),w:yn(R.w,D.w,F)}),Z=(R,D,F=0)=>[R.x+R.rx*D,R.y+F,R.z+R.rz*D],j=(R,D,F=0)=>[R.x+R.rx*D,R.yb+F,R.z+R.rz*D],P=[];for(let R of l)P.push({s:R.s0,h:0},{s:R.s1,h:R.height},{s:R.s1,h:0});P.sort((R,D)=>R.s-D.s);let X=[],q=0,ee=(R,D,F)=>{let $=X[X.length-1];if($&&Math.abs($.s-R)<1e-9&&Math.abs($.h-D)<1e-9){$.sample=$.sample||F;return}let he=ue(R);he.h=D,he.y=he.yb+D,he.sample=F,X.push(he)};for(let R=0;R<r;R++){let D=R*o;for(;q<P.length&&P[q].s<=D+1e-9;)ee(P[q].s,P[q].h,!1),q++;ee(D,le(D),!0)}for(;q<P.length;)ee(P[q].s,P[q].h,!1),q++;let _e=X.length,Re=[];for(let R=0;R<_e&&!(i.open&&R===_e-1);R++){let D=X[R],F=X[(R+1)%_e],$=D.s,he=R+1<_e?X[R+1].s:a,Ie=Math.abs(he-$)<1e-9,Be=($+he)/2;Re.push({a:D,b:F,sa:$,sb:he,drop:Ie,mid:Be,ramp:!Ie&&pe(Be)})}let Pe=new In,V=new In,We=new In,He=new In,ze=new In,De=new In,Ye=new In,Ne=new In,N=new In,A=new In,Q=new In,ge=new In,xe=R=>R.w/2+6-am/2,fe=R=>R.w/2+6+am/2;for(let R of Re){let{a:D,b:F,sa:$,sb:he,mid:Ie}=R;if(R.drop){Pe.quad([Z(D,-D.w/2),Z(D,D.w/2),Z(F,F.w/2),Z(F,-F.w/2)],gt.rampDark,[D.tx,0,D.tz]);continue}let Be=D.w/2,ke=F.w/2;if(R.ramp)V.quad([Z(D,-Be),Z(D,Be),Z(F,ke),Z(F,-ke)],Math.floor(Ie/2)%2===0?gt.yellow:gt.black,[0,1,0]),Pe.quad([Z(D,-Be),Z(F,-ke),j(F,-ke),j(D,-Be)],gt.rampDark,[-D.rx,0,-D.rz]),Pe.quad([Z(D,Be),j(D,Be),j(F,ke),Z(F,ke)],gt.rampDark,[D.rx,0,D.rz]);else{Pe.quad([Z(D,-Be),Z(D,Be),Z(F,ke),Z(F,-ke)],i.open?Math.floor(Ie/8)%2?gt.motorwayB:gt.motorwayA:Math.floor(Ie/8)%2?gt.asphaltB:gt.asphaltA,[0,1,0]);for(let ye of[-1,1])We.quad([Z(D,ye*(Be-.25),.02),Z(D,ye*(Be-.45),.02),Z(F,ye*(ke-.45),.02),Z(F,ye*(ke-.25),.02)],gt.white,[0,1,0]);let G=9,re=3;for(let ye=Math.floor($/G);ye*G<he;ye++){let Le=Math.max($,ye*G),Ze=Math.min(he,ye*G+re);if(Ze-Le<1e-6)continue;let Ke=ne(D,F,(Le-$)/(he-$)),nt=ne(D,F,(Ze-$)/(he-$));We.quad([Z(Ke,-.08,.02),Z(Ke,.08,.02),Z(nt,.08,.02),Z(nt,-.08,.02)],gt.white,[0,1,0])}let de=Math.abs((D.curv+F.curv)/2)>WS?1.2:.5,me=Math.floor(Ie/2)%2?gt.red:gt.railA;for(let ye of i.open?[]:[-1,1])We.quad([Z(D,ye*Be,.025),Z(D,ye*(Be+de),.025),Z(F,ye*(ke+de),.025),Z(F,ye*ke,.025)],me,[0,1,0])}for(let G of[-1,1]){He.quad([j(D,G*Be),j(D,G*xe(D)),j(F,G*xe(F)),j(F,G*ke)],i.open?gt.lane:gt.sand,[0,1,0]);let re=Lc/2,de=-Dh/2,me=-Dh,ye=[G*D.rx*.6,.8,G*D.rz*.6];He.quad([j(D,G*fe(D),0),j(D,G*(fe(D)+re),de),j(F,G*(fe(F)+re),de),j(F,G*fe(F),0)],gt.gravel,ye),He.quad([j(D,G*(fe(D)+re),de),j(D,G*(fe(D)+Lc),me),j(F,G*(fe(F)+Lc),me),j(F,G*(fe(F)+re),de)],gt.gravel,ye);let Le=Math.floor(Ie/6)%2?gt.railB:gt.railA,Ze=G*xe(D),Ke=G*xe(F),nt=G*fe(D),st=G*fe(F);!i.open&&(G<0||p||e.openRight===!1)&&(ze.quad([j(D,Ze,0),j(D,Ze,jn),j(F,Ke,jn),j(F,Ke,0)],Le,[-G*D.rx,0,-G*D.rz]),ze.quad([j(D,nt,0),j(D,nt,jn),j(F,st,jn),j(F,st,0)],Le,[G*D.rx,0,G*D.rz]),ze.quad([j(D,Ze,jn),j(D,nt,jn),j(F,st,jn),j(F,Ke,jn)],Le,[0,1,0])),p&&De.quad([j(D,Ze,jn+.02),j(D,nt,jn+.02),j(F,st,jn+.02),j(F,Ke,jn+.02)],G<0?gt.neonCyan:gt.neonMag,[0,1,0])}}for(let R of X){if(!R.sample||Math.abs(R.curv)<=GS||Math.round(R.s/o)%8!==0||ve(R.s)||pe(R.s))continue;let F=-Math.sign(R.curv)*(R.w/2+6+.6),he=R.curv>0?[[0,0],[1,0],[1,1],[0,1]]:[[1,0],[0,0],[0,1],[1,1]];Ye.quad([j(R,F-.6,1),j(R,F+.6,1),j(R,F+.6,2),j(R,F-.6,2)],[1,1,1],[-R.tx,0,-R.tz],he),$o(Q,[R.x+R.rx*F,R.yb+.35,R.z+R.rz*F],[[R.tx,0,R.tz],[R.rx,0,R.rz],[0,1,0]],[.08,.12,.65],gt.post)}let Ce=ue(0),Fe=Math.max(4,Math.round(Ce.w)),Oe=Ce.w/Fe;for(let R=0;R<3;R++){let D=ue(-2+R),F=ue(-1+R);for(let $=0;$<Fe;$++){let he=-Ce.w/2+$*Oe,Ie=he+Oe;We.quad([Z(D,he,.03),Z(D,Ie,.03),Z(F,Ie,.03),Z(F,he,.03)],(R+$)%2?gt.checkB:gt.checkW,[0,1,0])}}let Ve=Ce.w/2+6+.5,be=[[Ce.tx,0,Ce.tz],[Ce.rx,0,Ce.rz],[0,1,0]];for(let R of[-1,1])$o(Q,[Ce.x+Ce.rx*R*Ve,Ce.yb+4,Ce.z+Ce.rz*R*Ve],be,[.3,.3,4],gt.post);$o(Q,[Ce.x,Ce.yb+7.5,Ce.z],be,[.5,Ve,.5],gt.beam);let J=(R,D,F)=>[Ce.x+Ce.tx*R+Ce.rx*D,Ce.yb+F,Ce.z+Ce.tz*R+Ce.rz*D];ge.quad([J(-.55,-Ve,5.2),J(-.55,Ve,5.2),J(-.55,Ve,6.8),J(-.55,-Ve,6.8)],[1,1,1],[-Ce.tx,0,-Ce.tz],[[0,0],[1,0],[1,1],[0,1]]),ge.quad([J(.55,-Ve,5.2),J(.55,Ve,5.2),J(.55,Ve,6.8),J(.55,-Ve,6.8)],[1,1,1],[Ce.tx,0,Ce.tz],[[1,0],[0,0],[0,1],[1,1]]);for(let R of u){let D=[];for(let $=R.s0;$<R.s1;$+=2)D.push($);D.push(R.s1);let F=D.map(ue);for(let $=0;$+1<F.length;$++){let he=F[$],Ie=F[$+1],Be=(he.s-R.s0)/4,ke=(Ie.s-R.s0)/4;Ne.quad([Z(he,-he.w/2,.04),Z(he,he.w/2,.04),Z(Ie,Ie.w/2,.04),Z(Ie,-Ie.w/2,.04)],[1,1,1],[0,1,0],[[Be,0],[Be,1],[ke,1],[ke,0]])}}let Se=R=>{let D=R.w/2+cm,F=[[-D,0],[-D,Ko]];for(let $=1;$<=7;$++){let he=Math.PI-$*Math.PI/8;F.push([D*Math.cos(he),Ko+VS*Math.sin(he)])}return F.push([D,Ko],[D,0]),F},Me=(R,D,F,$=0)=>[R.x+R.rx*D+R.tx*$,R.yb+F,R.z+R.rz*D+R.tz*$],se=(R,D,F)=>{let $=-D,he=Ko-F,Ie=Math.hypot($,he)||1;return[R.rx*$/Ie,he/Ie,R.rz*$/Ie]},Te=([R,D])=>{let F=-R,$=Ko-D,he=Math.hypot(F,$)||1;return[R+F/he*.45,D+$/he*.45]};for(let R of h){let D=[];for(let $=R.s0;$<R.s1;$+=2)D.push($);D.push(R.s1);let F=D.map(ue);for(let $=0;$+1<F.length;$++){let he=F[$],Ie=F[$+1],Be=Se(he),ke=Se(Ie);for(let G=0;G<Be.length-1;G++){let re=(Be[G][0]+Be[G+1][0])/2,de=(Be[G][1]+Be[G+1][1])/2;N.quad([Me(he,Be[G][0],Be[G][1]),Me(he,Be[G+1][0],Be[G+1][1]),Me(Ie,ke[G+1][0],ke[G+1][1]),Me(Ie,ke[G][0],ke[G][1])],i.open?G%2?gt.tunOchreA:gt.tunOchreB:G%2?gt.tunA:gt.tunB,se(he,re,de))}if(Math.round((he.s-R.s0)/2)%6===0)for(let G=1;G<=8;G++){let re=Te(Be[G]),de=Te(Be[G+1]),me=(re[0]+de[0])/2,ye=(re[1]+de[1])/2;A.quad([Me(he,re[0],re[1]),Me(he,de[0],de[1]),Me(he,de[0],de[1],.6),Me(he,re[0],re[1],.6)],i.open?gt.sodium:G%2?gt.neonCyan:gt.neonMag,se(he,me,ye))}}for(let $ of[F[0],F[F.length-1]]){let he=$.w/2+cm,Ie=[[$.tx,0,$.tz],[$.rx,0,$.rz],[0,1,0]];for(let Be of[-1,1])$o(N,[$.x+$.rx*Be*(he+1.2),$.yb+5,$.z+$.rz*Be*(he+1.2)],Ie,[2,1.1,5],gt.concrete);$o(N,[$.x,$.yb+10.5,$.z],Ie,[2,he+3.5,1.5],gt.concreteB)}}let oe=(R,D,F,$=!1)=>{if(!R.idx.length)return null;let he=new mt;he.setAttribute("position",new ut(R.pos,3)),he.setAttribute("color",new ut(R.col,3)),he.setAttribute("uv",new ut(R.uv,2)),he.setIndex(R.idx),he.computeVertexNormals(),x.push(he);let Ie=new ot(he,D);return Ie.name=F,Ie.receiveShadow=$,g.add(Ie),Ie};oe(Pe,T,"road-asphalt",!0),oe(V,y,"road-ramp-top"),oe(We,w,"road-paint"),oe(He,S,"road-shoulder-talus"),oe(ze,b,"road-barriers"),p&&oe(De,I,"road-barrier-neon"),oe(Ye,B,"road-chevrons"),oe(Ne,k,"road-boost"),oe(N,L,"road-tunnels"),oe(A,O,"road-tunnel-neon"),oe(Q,U,"road-props"),oe(ge,Y,"road-start-sign");let Ee=[];for(let R=1;R*lm<a-5;R++){let D=R*lm;if(h.some(ke=>D>=ke.s0-15&&D<=ke.s1+15))continue;let F=ue(D),$=R%2?1:-1,he=$*(F.w/2+6+2.6),Ie=F.yb-Dh*Math.min(1,2.45/Lc),Be=n.range(8.5,9.5);Ee.push({x:F.x+F.rx*he,z:F.z+F.rz*he,y:Ie,h:Be,hx:F.x+F.rx*(he-$*.6),hz:F.z+F.rz*(he-$*.6)})}if(Ee.length){let R=new bn(.18,.26,9,6,1),D=new Ks(.55,0);x.push(R,D);let F=new xn(R,H,Ee.length),$=new xn(D,ie,Ee.length);F.name="road-lamp-masts",$.name="road-lamp-heads";let he=new et,Ie=new Qt,Be=new z,ke=new z;Ee.forEach((G,re)=>{ke.set(G.x,G.y+G.h/2,G.z),Be.set(1,G.h/9,1),he.compose(ke,Ie,Be),F.setMatrixAt(re,he),ke.set(G.hx,G.y+G.h+.2,G.hz),Be.set(1,1,1),he.compose(ke,Ie,Be),$.setMatrixAt(re,he)}),F.instanceMatrix.needsUpdate=!0,$.instanceMatrix.needsUpdate=!0,g.add(F,$)}return{group:g,update:(R,D)=>{_&&(_.offset.x=-(D*.9%1)),k.emissiveIntensity=2.2+.5*Math.sin(D*5)},dispose:()=>{g.removeFromParent();for(let R of x)R.dispose();for(let R of m)R.dispose();for(let R of d)R.dispose()}}}function dm(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new mt,l=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(t){let u=0,h=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(let u in r){let h=fm(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let p=[];for(let x=0;x<o[u].length;++x)p.push(o[u][x][f]);let g=fm(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function fm(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new dt(o,t,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let f=0,p=u.count;f<p;f++)for(let g=0;g<t;g++){let x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Fh(i,e){if(e===mp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Wo||e===xc){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Wo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function js(i,e=.5,t=1){if(!i||i.userData.voxel||!(i.isMeshStandardMaterial||i.isMeshLambertMaterial))return i;i.userData.voxel=!0;let n=i.onBeforeCompile;return i.onBeforeCompile=(s,r)=>{n?.call(i,s,r),s.uniforms.uVoxCell={value:e},s.uniforms.uVoxStrength={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},i.customProgramCacheKey=()=>"voxel-"+e+"-"+t,i.needsUpdate=!0,i}var YS=/asphalt|paint|boost|sign|ramp|neon|lamp-heads/;function Oh(i,e){i.traverse(t=>{if(!t.isMesh||YS.test(t.name))return;let n=Array.isArray(t.material)?t.material:[t.material];for(let s of n)!s||s.transparent||s.emissiveIntensity>1.2||(s.roughness??1)<.35||js(s,e(t),1)})}function pm(i,e,t=46){let n=[];for(let c=0;c<t;c++){let l=e.range(0,Math.PI*2),u=e.range(700,4200),h=Math.cos(l)*u,f=Math.sin(l)*u,p=e.range(260,520),g=e.range(26,46),x=e.int(5,11);for(let m=0;m<x;m++)n.push([h+Math.round(e.range(-3.5,3.5))*g,p+Math.round(e.range(0,1.4))*g*.6,f+Math.round(e.range(-2,2))*g,g*e.int(1,3),g*.6*e.int(1,2),g*e.int(1,2)])}let s=new on(1,1,1),r=new Gi({color:i.night?2765648:16777215,fog:!1,emissive:i.night?329487:new Ae(16777215).lerp(new Ae(i.skyHorizon),.35).multiplyScalar(.5)}),o=new xn(s,r,n.length),a=new et;return n.forEach((c,l)=>{a.makeScale(c[3],c[4],c[5]),a.setPosition(c[0],c[1],c[2]),o.setMatrixAt(l,a)}),o.instanceMatrix.needsUpdate=!0,o.frustumCulled=!1,o.name="voxel-clouds",o}function mm(i,e,t,n,s,r,o,a,c,l){let u=e+s,h=t+r,f=n+o,p,g,x,m,d,v;s?(p=0,g=c?1:-1,x=0,m=0,d=0,v=l?1:-1):r?(p=a?1:-1,g=0,x=0,m=0,d=0,v=l?1:-1):(p=a?1:-1,g=0,x=0,m=0,d=c?1:-1,v=0);let M=i(u+p,h+g,f+x)?1:0,_=i(u+m,h+d,f+v)?1:0,E=i(u+p+m,h+g+d,f+x+v)?1:0;return .5+.1667*(M&&_?0:3-(M+_+E))}function Es(i,e){let t=i.index?i.toNonIndexed():i,n=t.attributes.position,s=t.attributes.color,r=512,o=(m,d,v)=>m+r+(d+r)*1024+(v+r)*1048576,a=new Map,c=(m,d,v,M,_,E)=>{let T=Math.floor(m/e),y=Math.floor(d/e),w=Math.floor(v/e),S=o(T,y,w);a.has(S)||a.set(S,[T,y,w,M,_,E])};for(let m=0;m<n.count;m+=3){let d=n.getX(m),v=n.getY(m),M=n.getZ(m),_=n.getX(m+1),E=n.getY(m+1),T=n.getZ(m+1),y=n.getX(m+2),w=n.getY(m+2),S=n.getZ(m+2),b=.6,I=.6,B=.6;s&&(b=(s.getX(m)+s.getX(m+1)+s.getX(m+2))/3,I=(s.getY(m)+s.getY(m+1)+s.getY(m+2))/3,B=(s.getZ(m)+s.getZ(m+1)+s.getZ(m+2))/3);let k=Math.max(Math.hypot(_-d,E-v,T-M),Math.hypot(y-d,w-v,S-M),Math.hypot(y-_,w-E,S-T)),L=Math.max(1,Math.ceil(k/e*2));for(let O=0;O<=L;O++)for(let U=0;U<=L-O;U++){let Y=O/L,H=U/L;c(d+(_-d)*Y+(y-d)*H,v+(E-v)*Y+(w-v)*H,M+(T-M)*Y+(S-M)*H,b,I,B)}}let l=new Map;for(let m of a.values()){let d=m[0]+r+(m[2]+r)*1024,v=l.get(d);v||l.set(d,v=[]),v.push(m)}for(let m of l.values()){m.sort((d,v)=>d[1]-v[1]);for(let d=0;d<m.length-1;d++)for(let v=m[d][1]+1;v<m[d+1][1];v++)a.set(o(m[d][0],v,m[d][2]),[m[d][0],v,m[d][2],m[d][3],m[d][4],m[d][5]])}let u=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],h=[],f=[],p=[],g=(m,d,v)=>a.has(o(m,d,v));for(let m of a.values()){let[d,v,M,_,E,T]=m,y=Math.sin(d*12.9898+v*78.233+M*37.719)*43758.5453,w=.86+.24*(y-Math.floor(y));for(let[S,b,I,B]of u)if(!a.has(o(d+S,v+b,M+I)))for(let k of[0,1,2,0,2,3]){let L=B[k*3],O=B[k*3+1],U=B[k*3+2],Y=w*mm(g,d,v,M,S,b,I,L,O,U);h.push((d+L)*e,(v+O)*e,(M+U)*e),f.push(S,b,I),p.push(_*Y,E*Y,T*Y)}}let x=new mt;return x.setAttribute("position",new ut(h,3)),x.setAttribute("normal",new ut(f,3)),x.setAttribute("color",new ut(p,3)),x.computeBoundingSphere(),x}function zn(i,e,t,n,s,r=.2){let o=new Array(i*e*t),a=(x,m,d)=>x<0||m<0||d<0||x>=i||m>=e||d>=t?null:o[x+i*(m+e*d)];for(let x=0;x<t;x++)for(let m=0;m<e;m++)for(let d=0;d<i;d++)o[d+i*(m+e*x)]=s(d,m,x)||null;let c=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],l=[],u=[],h=[],f=-i/2,p=-t/2;for(let x=0;x<t;x++)for(let m=0;m<e;m++)for(let d=0;d<i;d++){let v=o[d+i*(m+e*x)];if(!v)continue;let M=Math.sin(d*12.9898+m*78.233+x*37.719)*43758.5453,_=1-r/2+r*(M-Math.floor(M));for(let[E,T,y,w]of c)if(!a(d+E,m+T,x+y)&&!(T<0&&m===0))for(let S of[0,1,2,0,2,3]){let b=w[S*3],I=w[S*3+1],B=w[S*3+2],k=_*mm(a,d,m,x,E,T,y,b,I,B);l.push((d+f+b)*n,(m+I)*n,(x+p+B)*n),u.push(E,T,y),h.push(v[0]*k,v[1]*k,v[2]*k)}}let g=new mt;return g.setAttribute("position",new ut(l,3)),g.setAttribute("normal",new ut(u,3)),g.setAttribute("color",new ut(h,3)),g.computeBoundingSphere(),g}function gm(i,e=1,t=null){if(!i||i.userData.wetRoad)return i;i.userData.wetRoad=!0;let n=i.onBeforeCompile;return i.onBeforeCompile=(s,r)=>{n?.call(i,s,r),s.uniforms.uWet={value:e},s.uniforms.tRefl={value:t?t.texture:null},s.uniforms.uReflMatrix={value:t?t.matrix:new et},s.uniforms.uReflOn={value:t?1:0},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},i.customProgramCacheKey=()=>"wet-road-"+e+(t?"-refl":""),i.needsUpdate=!0,i}function xm(i,e){let t=1/0,n=-1/0,s=1/0,r=-1/0,o=1/0,a=-1/0;for(let f=0;f<i.length;f+=4)t=Math.min(t,i[f]),n=Math.max(n,i[f]),s=Math.min(s,i[f+1]),r=Math.max(r,i[f+1]),o=Math.min(o,i[f+2]),a=Math.max(a,i[f+2]);let c=n-t+1,l=r-s+1,u=a-o+1,h=new Map;for(let f=0;f<i.length;f+=4){let p=i[f+3];h.set(i[f]-t+c*(i[f+1]-s+l*(i[f+2]-o)),[(p>>16&255)/255,(p>>8&255)/255,(p&255)/255])}return zn(c,l,u,e,(f,p,g)=>h.get(f+c*(p+l*g))||null,.12)}function _m(i,e=3.1,t=2.6){if(!i||!i.userData.voxel||i.userData.windows)return i;i.userData.windows=!0;let n=i.onBeforeCompile;i.onBeforeCompile=(r,o)=>{n?.call(i,r,o),r.fragmentShader=r.fragmentShader.replace("#include <roughnessmap_fragment>",`
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
        #include <roughnessmap_fragment>`)};let s=i.customProgramCacheKey?.()||"";return i.customProgramCacheKey=()=>s+"-win-"+e+"-"+t,i.needsUpdate=!0,i}var cn=5,ym=1,Ts=450,kn=40,vm=12e3,Mm=32,Sm=4e3,Hn=Math.PI*2,Jo=new Dt,no=new Ae,bm=new et,Em=new et,ZS=new z(0,1,0),Tm=i=>i<0?0:i>1?1:i,Ai=(i,e,t)=>i<e?e:i>t?t:i,Qs=(i,e,t)=>{let n=Tm((t-i)/(e-i));return n*n*(3-2*n)};function KS(i){let e=(n,s)=>{let r=Math.imul(n|0,374761393)+Math.imul(s|0,668265263)+i|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},t=(n,s)=>{let r=Math.floor(n),o=Math.floor(s),a=n-r,c=s-o,l=a*a*(3-2*a),u=c*c*(3-2*c),h=e(r,o),f=e(r+1,o),p=e(r,o+1),g=e(r+1,o+1);return h+(f-h)*l+(p-h)*u+(h-f-p+g)*l*u};return(n,s)=>(t(n,s)*.5+t(n*2+17.3,s*2-9.1)*.25+t(n*4-3.7,s*4+11.2)*.125)/.875}var to=i=>{let e=new Ae(i);return[e.r,e.g,e.b]},ws={sand:to(14271631),dry:to(7317050),garrigue:to(5212718),rock:to(12169890),pale:to(13617336),snow:to(15855076)},$S=[16513264,15853260,14725754,16052195],JS=[9075302,7236192,11047018,8023646],jS=[3407871,16727250,16757051],Nc=0,Uc=0,Fc=0,jo=(i,e)=>{Nc+=(i[0]-Nc)*e,Uc+=(i[1]-Uc)*e,Fc+=(i[2]-Fc)*e};function QS(i,e,t,n,s,r){Nc=ws.sand[0],Uc=ws.sand[1],Fc=ws.sand[2],jo(ws.dry,Qs(2.5,7,i)),jo(ws.garrigue,Qs(25,75,i)*.55),jo(ws.rock,Qs(.4,.65,e)),jo(ws.pale,Qs(95,120,i)*.8),jo(ws.snow,Qs(125,150,i));let o=Nc*t,a=Uc*t,c=Fc*t;n&&(o=o*.45+.02,a=a*.5+.03,c=c*.75+.09);for(let l=0;l<9;l+=3)s[r+l]=o,s[r+l+1]=a,s[r+l+2]=c}function Qn(i,e){let t=i.index?i.toNonIndexed():i;t.attributes.uv&&t.deleteAttribute("uv"),t.attributes.normal||t.computeVertexNormals();let n=t.attributes.position.count,s=new Float32Array(n*3);no.setHex(e);for(let r=0;r<n;r++)s[r*3]=no.r,s[r*3+1]=no.g,s[r*3+2]=no.b;return t.setAttribute("color",new dt(s,3)),t}var Qo=i=>dm(i,!1);function eb(i,e,t){let n=Math.sin(i*12.9898+e*78.233+t*37.719)*43758.5453;return n-Math.floor(n)}function tb(){let i=new Ks(1,0),e=i.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),s=e.getY(t),r=e.getZ(t),o=.8+.4*eb(n,s,r);e.setXYZ(t,n*o,s*o,r*o)}return i.computeVertexNormals(),i}function nb(){return Qo([Qn(new bn(.35,.5,6,6).translate(0,3,0),7162931),Qn(new Ks(3.4,0).scale(1,.55,1).translate(0,7.4,0),4160058)])}function ib(){return Qo([Qn(new bn(.25,.35,1.2,5).translate(0,.6,0),7162931),Qn(new Zs(1.1,10,6).translate(0,6,0),3037756)])}function sb(){let i=[Qn(new bn(.22,.35,8,5).translate(0,4,0),9071178)];for(let e=0;e<7;e++){let t=new Zs(.55,4.6,3).rotateZ(Math.PI/2-.45).translate(0,8.4,0).rotateY(e*Hn/7);i.push(Qn(t,5214010))}return Qo(i)}function rb(){return Qo([Qn(new bn(1.6,2.3,13,8).translate(0,6.5,0),16052712),Qn(new bn(2,2,2.2,8).translate(0,6.5,0),12727595),Qn(new bn(1.3,1.3,1.8,8).translate(0,14,0),16771488),Qn(new Zs(1.7,1.2,8).translate(0,15.4,0),3812906)])}function ob(){return Qo([Qn(new on(2.2,.9,6).translate(0,.45,0),15986662),Qn(new Zs(1.9,5.4,3).scale(.1,1,1).translate(0,3.6,-.3),16775400)])}function di(i,e,t,n=!0){let s=new xn(i,e,t.length);for(let r=0;r<t.length;r++){let o=t[r];Jo.position.set(o.x,o.y,o.z),Jo.rotation.set(0,o.ry??0,0),Jo.scale.set(o.sx??1,o.sy??1,o.sz??1),Jo.updateMatrix(),s.setMatrixAt(r,Jo.matrix),o.col!==void 0&&(no.setHex(o.col).multiplyScalar(o.v??1),s.setColorAt(r,no))}return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.castShadow=n,s}var ab=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,cb=`
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
}`;function wm(i,e,t,n){let s=e.pts,r=s.length,o=e.bounds,a=!!t.night,c=KS(n.int(1,1073741808)),l=o.minX-Ts-kn,u=o.minZ-Ts-kn,h=Math.ceil((o.maxX-o.minX+2*Ts)/kn)+3,f=Math.ceil((o.maxZ-o.minZ+2*Ts)/kn)+3,p=Array.from({length:h*f},()=>[]);for(let G=0;G<r;G++){let re=Ai(Math.floor((s[G].x-l)/kn),0,h-1),de=Ai(Math.floor((s[G].z-u)/kn),0,f-1);p[de*h+re].push(G)}let g=0;function x(G,re){let de=Math.floor((G-l)/kn),me=Math.floor((re-u)/kn),ye=Math.max(h,f),Le=1/0,Ze=0;for(let Ke=0;Ke<=ye;Ke++){for(let st=me-Ke;st<=me+Ke;st++){if(st<0||st>=f)continue;let zt=st===me-Ke||st===me+Ke?1:2*Ke;for(let It=de-Ke;It<=de+Ke;It+=zt){if(It<0||It>=h)continue;let kt=p[st*h+It];for(let Gt=0;Gt<kt.length;Gt++){let fn=kt[Gt],C=s[fn],K=C.x-G,ae=C.z-re,ce=K*K+ae*ae;ce<Le&&(Le=ce,Ze=fn)}}}let nt=Ke*kn;if(Le<=nt*nt)break}return g=Math.sqrt(Le),Ze}function m(G,re,de){let me=de*de,ye=1/0,Le=Ai(Math.floor((G-de-l)/kn),0,h-1),Ze=Ai(Math.floor((G+de-l)/kn),0,h-1),Ke=Ai(Math.floor((re-de-u)/kn),0,f-1),nt=Ai(Math.floor((re+de-u)/kn),0,f-1);for(let st=Ke;st<=nt;st++)for(let Et=Le;Et<=Ze;Et++){let zt=p[st*h+Et];for(let It=0;It<zt.length;It++){let kt=s[zt[It]],Gt=kt.x-G,fn=kt.z-re;Gt*Gt+fn*fn<=me&&kt.y<ye&&(ye=kt.y)}}return ye}let d=Math.ceil(r/4),v=new Float64Array(d*2);for(let G=0;G<d;G++)v[2*G]=s[G*4%r].x,v[2*G+1]=s[G*4%r].z;function M(G,re){let de=!1;for(let me=0,ye=d-1;me<d;ye=me++){let Le=v[2*me],Ze=v[2*me+1],Ke=v[2*ye],nt=v[2*ye+1];Ze>re!=nt>re&&G<(Ke-Le)*(re-Ze)/(nt-Ze)+Le&&(de=!de)}return de}let _=o.minX-Ts,E=o.minZ-Ts,T=Math.ceil((o.maxX-o.minX+2*Ts)/cn)+1,y=Math.ceil((o.maxZ-o.minZ+2*Ts)/cn)+1,w=new Float32Array(T*y);for(let G=0;G<y;G++)for(let re=0;re<T;re++){let de=_+re*cn,me=E+G*cn,ye=x(de,me),Le=g,Ze=s[ye],Ke=Ze.width*.5,nt=Ze.y;if(Le<40){let K=m(de,me,24);K<nt&&(nt=K)}let st=1;if(!M(de,me)){let K=Le-Ke+(c(de/140+31.7,me/140-8.2)-.5)*70;st=1-Qs(110,200,K)}let Et=c(de/260,me/260),It=-15+(10+130*Math.pow(Tm((Et-.42)/.5),1.5)+6*Et+15)*st;if(st>=1){let K=c(de/90+11.3,me/90-4.1);It=Math.max(It,nt+6+38*K)}let kt=Qs(Ke+6+12,Ke+6+62,Le),Gt=nt-.6,fn=Gt+(It-Gt)*kt,C=nt+Math.max(0,Le-Ke-6-12)*1.2;fn>C&&(fn=C),w[G*T+re]=fn}let S=null;function b(G,re){if(S)return S(G,re);let de=(G-_)/cn,me=(re-E)/cn;de=Ai(de,0,T-1.000001),me=Ai(me,0,y-1.000001);let ye=Math.floor(de),Le=Math.floor(me),Ze=de-ye,Ke=me-Le,nt=w[Le*T+ye],st=w[Le*T+ye+1],Et=w[(Le+1)*T+ye],zt=w[(Le+1)*T+ye+1],It=nt+(st-nt)*Ze,kt=Et+(zt-Et)*Ze;return It+(kt-It)*Ke}let I=(G,re)=>Math.max(Math.abs(b(G+4,re)-b(G-4,re)),Math.abs(b(G,re+4)-b(G,re-4)))/8,B=(G,re,de)=>{let me=x(G,re);return g>=s[me].width*.5+6+4+de},k=[],L=[],O=new Float32Array(9),U=(G,re,de,me,ye,Le,Ze,Ke,nt)=>{let st=me-G,Et=ye-re,zt=Le-de,It=Ze-G,kt=Ke-re,Gt=nt-de,fn=Et*Gt-zt*kt,C=zt*It-st*Gt,K=st*kt-Et*It,ae=Math.hypot(fn,C,K)||1,ce=1-Math.abs(C)/ae;k.push(G,re,de,me,ye,Le,Ze,Ke,nt),QS((re+ye+Ke)/3,ce,.9+.2*n.next(),a,O,0);for(let te=0;te<9;te++)L.push(O[te])},Y=T-1,H=y-1,ie=new Float32Array(Y*H);for(let G=0;G<H;G++)for(let re=0;re<Y;re++){let de=G*T+re,me=(w[de]+w[de+1]+w[de+T]+w[de+T+1])/4;ie[G*Y+re]=Math.floor(me/ym)*ym}let le=-4;for(let G=0;G<H;G++)for(let re=0;re<Y;re++){let de=ie[G*Y+re],me=_+re*cn,ye=E+G*cn,Le=me+cn,Ze=ye+cn;if(de>le&&(U(me,de,ye,me,de,Ze,Le,de,ye),U(Le,de,ye,me,de,Ze,Le,de,Ze)),re+1<Y){let Ke=ie[G*Y+re+1],nt=Math.min(de,Ke),st=Math.max(de,Ke);st>nt&&st>le&&(U(Le,nt,ye,Le,st,ye,Le,st,Ze),U(Le,nt,ye,Le,st,Ze,Le,nt,Ze))}if(G+1<H){let Ke=ie[(G+1)*Y+re],nt=Math.min(de,Ke),st=Math.max(de,Ke);st>nt&&st>le&&(U(me,nt,Ze,me,st,Ze,Le,st,Ze),U(me,nt,Ze,Le,st,Ze,Le,nt,Ze))}}S=(G,re)=>{let de=Ai(Math.floor((G-_)/cn),0,Y-1),me=Ai(Math.floor((re-E)/cn),0,H-1);return ie[me*Y+de]};let pe=new mt;pe.setAttribute("position",new ut(k,3)),pe.setAttribute("color",new ut(L,3)),pe.computeVertexNormals(),pe.computeBoundingSphere();let ve=new ot(pe,new it({vertexColors:!0,flatShading:!0,roughness:.94,metalness:0,side:Rt}));ve.receiveShadow=!0;let ue=new ft;ue.name="environment",ue.add(ve);let ne=(o.minX+o.maxX)/2,Z=(o.minZ+o.maxZ)/2,j=new Cn(vm,vm,Mm,Mm);j.rotateX(-Math.PI/2);let P=j.attributes.position,X=P.count,q=new Float32Array(X),ee=new Float32Array(X);for(let G=0;G<X;G++)q[G]=P.getX(G),ee[G]=P.getZ(G);let _e=new ot(j,new it({color:t.seaColor,roughness:.25,metalness:.05,flatShading:!0}));_e.position.set(ne,0,Z),ue.add(_e);let Re=new z(t.sunDir[0],t.sunDir[1],t.sunDir[2]).normalize(),Pe=new ft,V=new bt({uniforms:{topColor:{value:new Ae(t.skyTop)},horizonColor:{value:new Ae(t.skyHorizon)},sunColor:{value:new Ae(t.sunColor)},sunDir:{value:Re},night:{value:a?1:0}},vertexShader:ab,fragmentShader:cb,side:$t,depthWrite:!1,fog:!1}),We=new ot(new _s(Sm,32,16),V);if(We.renderOrder=-10,We.frustumCulled=!1,Pe.add(We),a){let re=new Float32Array(1500);for(let ye=0;ye<500;ye++){let Le=n.range(0,Hn),Ze=Math.asin(n.range(.05,.98)),Ke=Sm*.97;re[ye*3]=Ke*Math.cos(Ze)*Math.cos(Le),re[ye*3+1]=Ke*Math.sin(Ze),re[ye*3+2]=Ke*Math.cos(Ze)*Math.sin(Le)}let de=new mt;de.setAttribute("position",new dt(re,3));let me=new xs(de,new Ys({color:16777215,size:2,sizeAttenuation:!1,fog:!1,depthWrite:!1,transparent:!0,opacity:.9}));me.frustumCulled=!1,Pe.add(me)}ue.add(Pe);let He=new Kr(t.hemiSky,t.hemiGround,t.hemiIntensity),ze=new vi(t.sunColor,t.sunIntensity);ze.castShadow=!0,ze.shadow.mapSize.set(2048,2048);let De=ze.shadow.camera;De.left=-90,De.right=90,De.top=90,De.bottom=-90,De.near=1,De.far=600,De.updateProjectionMatrix(),ze.shadow.bias=-5e-4,ue.add(He,ze,ze.target);let Ye=i.fog,Ne=i.background,N=new Xr(t.fogColor,t.fogDensity),A=new Ae(t.skyHorizon);i.fog=N,i.background=A;let Q=_+(T-1)*cn,ge=E+(y-1)*cn,xe=()=>n.range(_+30,Q-30),fe=()=>n.range(E+30,ge-30),Ce=(G,re,de)=>{let me=[];for(let ye=0;ye<re&&me.length<G;ye++){let Le=de(xe(),fe());Le&&me.push(Le)}return me},Fe=Ce(320,4e4,(G,re)=>{let de=b(G,re);if(de<4||de>95||!B(G,re,2)||I(G,re)>.6)return null;let me=n.range(.8,1.45);return{x:G,y:de-.3,z:re,sx:me,sy:me*n.range(.9,1.3),sz:me,ry:n.range(0,Hn),col:16777215,v:n.range(.85,1.15)}}),Oe=Ce(170,4e4,(G,re)=>{let de=b(G,re);if(de<6||de>70||!B(G,re,1.5)||I(G,re)>.6)return null;let me=n.range(.8,1.3);return{x:G,y:de-.3,z:re,sx:me,sy:me*n.range(.9,1.25),sz:me,ry:n.range(0,Hn),col:16777215,v:n.range(.85,1.15)}}),Ve=Ce(110,4e4,(G,re)=>{let de=b(G,re);if(de<1.8||de>14||!B(G,re,2)||I(G,re)>.5)return null;let me=n.range(.85,1.25);return{x:G,y:de-.3,z:re,sx:me,sy:me,sz:me,ry:n.range(0,Hn),col:16777215,v:n.range(.9,1.1)}});ue.add(di(Es(nb(),.8),new it({vertexColors:!0,flatShading:!0,roughness:.9}),Fe)),ue.add(di(Es(ib(),.7),new it({vertexColors:!0,flatShading:!0,roughness:.9}),Oe)),ue.add(di(Es(sb(),.6),new it({vertexColors:!0,flatShading:!0,roughness:.9}),Ve));let be=Ce(300,3e4,(G,re)=>{let de=b(G,re);if(de<1.5)return null;let me=n.range(1.2,4.5);return B(G,re,me*.6)?{x:G,y:de+me*.15,z:re,sx:me,sy:me*n.range(.55,.9),sz:me,ry:n.range(0,Hn),col:n.pick(JS),v:n.range(.85,1.15)}:null}),J=Ce(3,3e4,(G,re)=>{if(b(G,re)>-4)return null;let de=x(G,re);if(g<s[de].width*.5+200||g>800)return null;let me=n.range(25,45);return{x:G,y:.1*me,z:re,sx:me,sy:me*.45,sz:me,ry:n.range(0,Hn),col:10260344,v:1}});ue.add(di(Es(tb(),.42),new it({color:16777215,flatShading:!0,roughness:.95}),be.concat(J)));let Se=[],Me=[],se=[],Te=n.int(3,5),oe=0;for(let G=0;G<4e3&&oe<Te;G++){let re=xe(),de=fe(),me=x(re,de),ye=s[me].width*.5;if(g<ye+25||g>ye+80)continue;let Le=b(re,de);if(Le<6||Le>40||I(re,de)>.35)continue;oe++;let Ze=n.int(7,12);for(let Ke=0;Ke<Ze;Ke++){let nt=n.range(0,Hn),st=Math.sqrt(n.next())*18,Et=re+Math.cos(nt)*st,zt=de+Math.sin(nt)*st,It=x(Et,zt);if(g<s[It].width*.5+6+4+4)continue;let kt=b(Et,zt);if(kt<3)continue;let Gt=n.range(4,6.5),fn=n.range(3.5,6),C=n.range(4,6.5),K=n.pick([0,Math.PI/2])+n.range(-.15,.15),ae=kt-1;if(Se.push({x:Et,y:ae,z:zt,ry:K,sx:Gt,sy:fn,sz:C,col:n.pick($S),v:1}),Me.push({x:Et,y:ae+fn,z:zt,ry:K,sx:Gt*1.08,sy:n.range(1.8,2.6),sz:C*1.08}),a)for(let ce of[-1,1]){let te=ce*Gt*.28,Ue=C/2+.03;se.push({x:Et+te*Math.cos(K)+Ue*Math.sin(K),y:ae+fn*.55,z:zt-te*Math.sin(K)+Ue*Math.cos(K),ry:K})}}}let Ee=new it({color:16777215,flatShading:!0,roughness:.85}),W=new it({color:11818298,flatShading:!0,roughness:.8});if(Se.length){let G=new on(1,1,1).translate(0,.5,0),re=Es(new bn(0,.71,1,4).rotateY(Math.PI/4).translate(0,.5,0),.125);ue.add(di(G,Ee,Se),di(re,W,Me))}if(a&&se.length){let G=new on(1.2,1.1,.12);ue.add(di(G,new Wt({color:16761466}),se,!1))}if(a){let G=0,re=0,de=!1;for(let me=0;me<4e3&&!de;me++){let ye=xe(),Le=fe(),Ze=x(ye,Le),Ke=s[Ze].width*.5;if(g<Ke+220||g>Ke+420)continue;let nt=b(ye,Le);nt<6||nt>30||(G=ye,re=Le,de=!0)}if(de){let me=[],ye=[],Le=n.int(9,13);for(let Ze=0;Ze<Le;Ze++){let Ke=G+n.range(-110,110),nt=re+n.range(-110,110),st=b(Ke,nt);if(st<2)continue;let Et=n.range(6,10),zt=n.range(30,70);me.push({x:Ke,y:st,z:nt,sx:Et,sy:zt,sz:Et,col:1777720,v:n.range(.8,1.2)});let It=n.pick(jS);for(let kt=0;kt<3;kt++){let Gt=kt*Hn/3+n.range(0,.5);ye.push({x:Ke+Math.cos(Gt)*Et*.88,y:st+zt*.05,z:nt+Math.sin(Gt)*Et*.88,ry:-Gt,sy:zt*.9,col:It,v:1})}}ue.add(di(new bn(.72,1,1,6).translate(0,.5,0),new it({color:16777215,flatShading:!0,roughness:.7}),me),di(new on(.5,1,.25).translate(0,.5,0),new Wt({color:16777215}),ye,!1))}}{let G=[],re=[];for(let me=1;me<y-1;me++)for(let ye=1;ye<T-1;ye++){let Le=me*T+ye,Ze=w[Le];if(Ze<2||Ze>30)continue;let Ke=x(_+ye*cn,E+me*cn);if(g<s[Ke].width*.5+60)continue;(w[Le-1]<0||w[Le+1]<0||w[Le-T]<0||w[Le+T]<0?G:re).push(Le)}let de=G.length?G:re;if(de.length){let me=n.pick(de),ye=me%T,Le=(me-ye)/T,Ze=new ot(Es(rb(),.6),new it({vertexColors:!0,flatShading:!0,roughness:.6}));Ze.position.set(_+ye*cn,w[me]-.5,E+Le*cn),Ze.castShadow=!0,ue.add(Ze)}}let we=Ce(4,2e4,(G,re)=>{if(b(G,re)>-3)return null;let de=x(G,re);return g<s[de].width*.5+250||g>900?null:{x:G,y:-.2,z:re,ry:n.range(0,Hn),col:16777215,v:1}});we.length&&ue.add(di(Es(ob(),.5),new it({vertexColors:!0,flatShading:!0,roughness:.6}),we));let R=[],D=[];for(let G=0;G<2e4&&R.length<3;G++){let re=xe(),de=fe(),me=x(re,de);if(g<s[me].width*.5+60)continue;let ye=b(re,de);ye<55||R.some(Le=>Math.hypot(Le.x-re,Le.z-de)<200)||R.push({x:re,y:ye,z:de,ry:n.range(0,Hn),speed:n.range(.9,1.5),phase:n.range(0,Hn)})}let F=new on(.7,14,.22).translate(0,7,0),$=new it({color:15659507,flatShading:!0,roughness:.6}),he=null;if(R.length){ue.add(di(new bn(.8,.35,30,6).translate(0,15,0),$,R));for(let G of R)D.push(new et().compose(new z(G.x,G.y+30,G.z),new Qt().setFromAxisAngle(ZS,G.ry),new z(1,1,1)));he=new xn(F,$,R.length*3),he.castShadow=!0,ue.add(he)}function Ie(G){if(he){for(let re=0;re<R.length;re++){let de=G*R[re].speed+R[re].phase;for(let me=0;me<3;me++)Em.makeRotationZ(de+me*Hn/3),bm.multiplyMatrices(D[re],Em),he.setMatrixAt(re*3+me,bm)}he.instanceMatrix.needsUpdate=!0}}Ie(0);function Be(G,re,de){ze.position.set(de.x+Re.x*200,de.y+Re.y*200,de.z+Re.z*200),ze.target.position.set(de.x,de.y,de.z),Pe.position.set(de.x,0,de.z);for(let me=0;me<X;me++)P.setY(me,.35*Math.sin(q[me]*.02+re*.8)+.25*Math.cos(ee[me]*.017-re*.6));P.needsUpdate=!0,Ie(re)}function ke(){i.remove(ue),ue.traverse(G=>{if(G.geometry&&G.geometry.dispose(),G.material){let re=Array.isArray(G.material)?G.material:[G.material];for(let de of re)de.dispose()}}),ze.shadow.map&&ze.shadow.map.dispose(),ue.clear(),i.fog===N&&(i.fog=Ye??null),i.background===A&&(i.background=Ne??null)}return i.add(ue),{group:ue,sun:ze,update:Be,dispose:ke,heightAt:b}}var Bc=[.62,.6,.55],As=[.5,.49,.45],zh=[.72,.3,.18],Rm=[.6,.24,.15],kh=[.16,.2,.28],lb=[.2,.38,.3],Cm=[.36,.25,.16],io=[[.1,.27,.08],[.14,.34,.1],[.07,.2,.06],[.2,.42,.12]],tr=[[.93,.84,.62],[.9,.74,.5],[.94,.9,.8],[.88,.66,.5]],dn=(i,e,t)=>{let n=Math.sin(i*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)};function Oc(i,e,t,n){let s=n*3+1,r=Math.ceil(t/2);return zn(e+2,s+r+1,t+2,1,(o,a,c)=>{let l=o-1,u=c-1;if(a<s){if(l<0||u<0||l>=e||u>=t)return null;if(!(l===0||u===0||l===e-1||u===t-1))return a===s-1?i:null;let p=l===0||l===e-1?u:l,g=l===0||l===e-1?t:e;return a%3===2&&p%3===1&&p<g-1?kh:a%3===2&&p%3===2&&p<g-1&&dn(l,a,u)>.45?lb:a===0?As:i}let h=a-s;return u>=h-1&&u<=t-h&&h<=r?(l+h)%2?zh:Rm:null},.14)}function ub(i){return zn(7,23,7,1,(n,s,r)=>{let o=n-1,a=r-1;if(s<17)return o<0||a<0||o>=5||a>=5?null:o===0||a===0||o===4||a===4?(s===6||s===11||s===14)&&(o===2||a===2)?kh:s===0?As:i:s===16?i:null;let c=s-17;return n>=c&&n<=6-c&&r>=c&&r<=6-c?(n+r)%2?zh:Rm:null},.14)}function hb(i){let r=[];for(let o=0;o<6;o++)r.push([11+(dn(i,o,1)-.5)*9,13+dn(i,o,2)*6,11+(dn(i,o,3)-.5)*9,3.6+dn(i,o,4)*2.4]);return zn(22,24,22,.7,(o,a,c)=>{if(a<12&&Math.abs(o-11+.5)<1.3&&Math.abs(c-11+.5)<1.3)return Cm;for(let l of r){let u=o-l[0],h=(a-l[1])*1.25,f=c-l[2];if(u*u+h*h+f*f<l[3]*l[3])return io[Math.floor(dn(o,a,c)*io.length)]}return null},.22)}function fb(){return zn(14,16,8,.5,(i,e,t)=>{let s=5+Math.floor((i-1)/2)*1.6;return i===0?e<5?(e+t)%3?Bc:As:null:i>=1&&i<13&&e<s?e>=s-1?[.42,.42,.44]:As:i===13&&e<15&&(t===0||t===7)?[.16,.17,.2]:null},.12)}function Bh(i,e){let r=e-3-9;return zn(i,e+2,5,1,(o,a,c)=>{let l=o%22,u=a>=e&&(c===0||c===4);if(a>=e)return u?As:null;if(a>=e-2)return(o+a+c)%3?Bc:As;if(l<4)return(o+a+c)%4?Bc:As;if(a<r)return null;let h=l-4-9+.5,f=a-r;return h*h+f*f>81?(o+a+c)%3?Bc:As:null},.14)}function db(i){return zn(6,4,6,.5,(t,n,s)=>{let r=t-3+.5,o=s-6/2+.5,a=(n-.8)*1.5,c=2.5+(dn(t+i,n,s)-.5)*1.2;return r*r+a*a+o*o<c*c?io[Math.floor(dn(t,n+i,s)*io.length)]:null},.22)}function pb(){let t=[[.12,.3,.14],[.15,.36,.16],[.1,.25,.12]];return zn(6,20,6,.6,(n,s,r)=>{let o=n-3+.5,a=r-6/2+.5;if(s<2)return Math.abs(o)<.6&&Math.abs(a)<.6?Cm:null;let c=(s-2)/18,l=2.6*Math.sin(Math.PI*Math.min(1,.18+c*.82))**.7*(1-c*.55)+.3;return o*o+a*a<l*l?t[Math.floor(dn(n,s,r)*3)]:null},.2)}function Am(i){let r=(a,c)=>{let l=(a-15+.5)/15,u=(c-15+.5)/(30/2),h=Math.hypot(l,u)+(dn(Math.floor(a/3)+i,0,Math.floor(c/3))-.5)*.28,f=Math.max(0,Math.min(1,(.95-h)/.16)),p=14+Math.floor(dn(Math.floor(a/5),i,Math.floor(c/5))*3)*2;return Math.floor(p*f*f*(3-2*f))},o=[];for(let a=0;a<5;a++){let c=Math.floor(15+(dn(i,a,1)-.5)*14),l=Math.floor(15+(dn(i,a,2)-.5)*14);o.push([c,l,r(c,l),tr[Math.floor(dn(i,a,3)*tr.length)],a===0?7:3])}return zn(30,26,30,1.6,(a,c,l)=>{let u=r(a,l);for(let[p,g,x,m,d]of o){let v=Math.abs(a-p),M=Math.abs(l-g),_=d>3?1:2;if(v<=_&&M<=1&&c>=x&&c<x+d)return c===x+d-2&&v!==_&&M===1?kh:m;if(v<=_&&M<=1-(c-x-d)&&c>=x+d&&c<x+d+2)return zh}if(c>=u)return null;if(c===u-1)return dn(a,5,l)>.75?io[0]:[.36,.56,.2];let h=c%5===0?.86:1,f=.93+.14*dn(Math.floor(a/2),c,Math.floor(l/2));return dn(a,c,l)>.965?io[2]:[.74*h*f,.71*h*f,.64*h*f]},.1)}function er(i,e,t){let n=new xn(i,e,t.length),s=new et,r=new Qt,o=new z,a=new z,c=new z(0,1,0);return t.forEach((l,u)=>{r.setFromAxisAngle(c,l.ry||0),o.set(l.sx??l.s??1,l.sy??l.s??1,l.sz??l.s??1),a.set(l.x,l.y,l.z),s.compose(a,r,o),n.setMatrixAt(u,s),l.color&&n.setColorAt(u,l.color)}),n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1,n}function mb(){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=1024,i.height=192;let e=i.getContext("2d");e.fillStyle="#f2efe8",e.fillRect(0,0,1024,192),e.fillStyle="#d6202a";for(let n of[0,880])for(let s=0;s<2;s++)e.beginPath(),e.moveTo(n+s*72,192),e.lineTo(n+s*72+36,192),e.lineTo(n+s*72+108,0),e.lineTo(n+s*72+72,0),e.fill();e.fillStyle="#23262e",e.font='italic 900 118px "Arial Narrow", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("POLYGON RUSH",512,104);let t=new fi(i);return t.colorSpace=At,t.anisotropy=8,t}function Im(i,e,t,n){let s=new ft;s.name="scenery";let r=[],o=()=>{let L=new it({vertexColors:!0,roughness:.9,metalness:0});return r.push(L),L},a=(L,O)=>{O.length&&(r.push(L),s.add(er(L,o(),O)))},c={x:0,y:0,z:0,heading:0},l=i.length,u=L=>!!bs(i,(L%l+l)%l,"tunnel"),h=L=>i.pts[Math.floor((L%l+l)%l/i.step)%i.pts.length].width,f=(L,O)=>{let U=1/0;for(let Y=0;Y<i.pts.length;Y+=3){let H=i.pts[Y],ie=(H.x-L)*(H.x-L)+(H.z-O)*(H.z-O);ie<U&&(U=ie)}return Math.sqrt(U)},p=(L,O)=>{let U=Math.floor(L/i.step);for(let Y=0;Y<O/i.step;Y+=4)if(Math.abs(i.pts[(U+Y)%i.pts.length].curv)>.004)return!1;return!u(L)&&!u(L+O/2)&&!u(L+O)},g=[[24,22,-1]];for(let L=380;L<l-220&&g.length<4;L+=70)p(L-10,80)&&(g.push([L,14,t.sign()]),L+=420);let x=[],m=[],d=[],v=[14032938,2777046,15909424,15921906,2793562,9060290,15235614,2042436],M=L=>g.some(([O,U])=>L>O-12&&L<O+U*4+12);for(let[L,O,U]of g)for(let Y=0;Y<O;Y++){let H=L+Y*4,ie=U*(h(H)/2+6+.6);Nt(i,H,ie,c);let le=c.heading+U*Math.PI/2,pe=Math.sin(c.heading),ve=Math.cos(c.heading),ue=-U*ve,ne=U*pe;x.push({x:c.x+ue*3.5,y:c.y-.3,z:c.z+ne*3.5,ry:le});for(let Z=0;Z<6;Z++)for(let j=0;j<4;j++){if(t.next()<.18)continue;let P=-1.6+j*1.05+t.range(-.15,.15),X=1+Z*1,q=c.x+ue*X+pe*P,ee=c.z+ne*X+ve*P,_e=c.y-.3+2.5+Z*.8,Re=new Ae(t.pick(v));m.push({x:q,y:_e+.4,z:ee,ry:c.heading,sx:.5,sy:.8,sz:.36,color:Re}),d.push({x:q,y:_e+1,z:ee,ry:c.heading,sx:.36,sy:.36,sz:.36,color:new Ae(t.pick([15317386,13208414,9067066,15847334]))}),m.push({x:q-ue*.12,y:_e-.1,z:ee-ne*.12,ry:c.heading,sx:.46,sy:.3,sz:.5,color:new Ae(t.pick([2042436,2829099,3820138,5916210]))}),d.push({x:q,y:_e+1.22,z:ee,ry:c.heading,sx:.4,sy:.12,sz:.4,color:new Ae(t.pick([2759698,1118481,14032938,15909424,6965802,15921906]))}),t.next()<.22&&m.push({x:q+pe*.32,y:_e+1.05,z:ee+ve*.32,ry:c.heading,sx:.14,sy:.6,sz:.14,color:Re})}}if(a(fb(),x),m.length){let L=new on(1,1,1);r.push(L);let O=new it({roughness:.85});r.push(O),s.add(er(L,O,m),er(L,O,d));let U=x.map(Y=>({x:Y.x,y:Y.y+8.2,z:Y.z,ry:Y.ry,sx:8,sy:.4,sz:4.05,color:new Ae(2303534)}));s.add(er(L,O,U))}let _=mb(),E=new it({map:_,color:_?16777215:15921128,roughness:.7,side:Rt});r.push(E),_&&r.push(_);let T=new Cn(1,1);r.push(T);let y=[],w=(L,O)=>{if(u(L))return;let U=O*(h(L)/2+6-.22);Nt(i,L,U,c),y.push({x:c.x,y:c.y+.52,z:c.z,ry:c.heading+(O<0?-Math.PI/2:Math.PI/2),sx:9,sy:.92,sz:1})};for(let L=120;L<240;L+=13)w(L,-1);for(let L=30;L<110;L+=13)w(L,1);for(let L=400;L<l-80;L+=260)w(L,-1),w(L+13,-1),w(L+120,1);if(y.length){let L=er(T,E,y);L.castShadow=!1,s.add(L)}let S=[[],[],[]];for(let L=130;L<l-20;L+=t.range(13,28)){if(M(L)||u(L)||u(L+12)||u(L-12))continue;let U=(t.next()<.82?-1:1)*(h(L)/2+6+t.range(3.4,6.5));Nt(i,L,U,c);let Y=n?n(c.x,c.z):c.y;Y<1.5||S[t.int(0,2)].push({x:c.x,y:Y-.2,z:c.z,ry:t.range(0,6.28),s:t.range(1.3,2.05)})}if(S.forEach((L,O)=>a(hb(11+O*7),L)),n){let L=[];for(let ie=200;ie<l-100;ie+=45)for(let le of[-1,1]){let pe=le*t.range(70,150);Nt(i,ie,pe,c);let ve=n(c.x,c.z);ve>c.y+6&&ve>6&&f(c.x,c.z)>55&&L.push({x:c.x,z:c.z,y:ve,score:ve-c.y+t.range(0,4)})}L.sort((ie,le)=>le.score-ie.score);let O=[];for(let ie of L){if(O.length>=4)break;O.every(le=>Math.hypot(le.x-ie.x,le.z-ie.z)>220)&&O.push(ie)}let U=[{geo:Oc(tr[0],8,7,2),items:[]},{geo:Oc(tr[1],10,7,3),items:[]},{geo:Oc(tr[2],7,6,2),items:[]},{geo:Oc(tr[3],9,8,3),items:[]}],Y=[],H=[];for(let ie of O){for(let le=0;le<2;le++){let pe=ie.x+t.range(-12,12),ve=ie.z+t.range(-12,12);f(pe,ve)<45||(Y.push({x:pe,y:n(pe,ve)-.5,z:ve,ry:t.int(0,3)*Math.PI/2}),H.push([pe,ve]))}for(let le=0;le<60&&U.reduce((pe,ve)=>pe+ve.items.length,0)<O.length*22;le++){let pe=t.range(0,6.28),ve=t.range(8,60),ue=ie.x+Math.cos(pe)*ve,ne=ie.z+Math.sin(pe)*ve,Z=n(ue,ne);Z<3||f(ue,ne)<42||H.some(j=>Math.hypot(j[0]-ue,j[1]-ne)<12)||(H.push([ue,ne]),t.pick(U).items.push({x:ue,y:Z-.5,z:ne,ry:t.int(0,3)*Math.PI/2}))}}for(let ie of U)a(ie.geo,ie.items);a(ub(tr[2]),Y)}let b=[[],[]];for(let L=115;L<l-10;L+=t.range(4.5,9))if(!u(L)){if(t.next()<.3){L+=t.range(20,60);continue}for(let O of[-1,1]){if(t.next()<.35)continue;let U=O*(h(L)/2+6+t.range(1.4,2.6));Nt(i,L,U,c),b[t.int(0,1)].push({x:c.x,y:c.y-.5,z:c.z,ry:t.range(0,6.28),s:t.range(.8,1.4)})}}b.forEach((L,O)=>a(db(3+O*5),L));let I=[];for(let L=160;L<l-60;L+=t.range(120,220)){let O=t.sign(),U=t.int(5,9);for(let Y=0;Y<U;Y++){let H=L+Y*4.2;if(u(H))continue;Nt(i,H,O*(h(H)/2+6+4.2),c);let ie=n?n(c.x,c.z):c.y;ie<1.5||I.push({x:c.x,y:ie-.2,z:c.z,ry:t.range(0,6.28),s:t.range(.85,1.2)})}}if(a(pb(),I),n){let L=[[],[],[]],O=[];for(let U=150;U<l-50;U+=t.range(120,220))for(let Y of[-1,1]){if(t.next()<.3)continue;Nt(i,U,Y*t.range(72,125),c);let H=n(c.x,c.z);H<1||f(c.x,c.z)<56||O.some(ie=>Math.hypot(ie[0]-c.x,ie[1]-c.z)<70)||(O.push([c.x,c.z]),L[t.int(0,2)].push({x:c.x,y:H-3,z:c.z,ry:t.range(0,6.28),s:t.range(1.2,1.9)}))}L.forEach((U,Y)=>a(Am(17+Y*13),U))}{let L=[],O=[],U=new Ae(12172998),Y=new Ae(7172730);for(let H=0;H<l;H+=4){if(u(H)||M(H))continue;let ie=h(H)/2+6-.75;Nt(i,H,ie,c);let le=c.x,pe=c.y,ve=c.z,ue=c.heading;L.push({x:le,y:pe+.4,z:ve,ry:ue,sx:.12,sy:.8,sz:.12,color:Y}),Nt(i,H+4,h(H+4)/2+6-.75,c);let ne=(le+c.x)/2,Z=(pe+c.y)/2,j=(ve+c.z)/2,P=Math.hypot(c.x-le,c.z-ve)+.05,X=Math.atan2(c.x-le,c.z-ve);for(let q of[.42,.72])O.push({x:ne,y:Z+q,z:j,ry:X,sx:.07,sy:.2,sz:P,color:U})}if(L.length){let H=new on(1,1,1),ie=new it({roughness:.35,metalness:.85});r.push(H,ie),s.add(er(H,ie,L),er(H,ie,O))}}if(n){let L=[];for(let H=0;H<400&&L.length<16;H++){let ie=t.range(i.bounds.minX-420,i.bounds.maxX+420),le=t.range(i.bounds.minZ-420,i.bounds.maxZ+420),pe=f(ie,le);n(ie,le)>-3||pe<90||pe>520||L.some(ve=>Math.hypot(ve.x-ie,ve.z-le)<60)||L.push({x:ie,y:-.3,z:le,ry:t.range(0,6.28),s:t.range(.9,1.5)})}let O=[.93,.93,.9],U=[.98,.97,.93],Y=[.55,.36,.2];a(zn(5,18,14,.7,(H,ie,le)=>{let pe=Math.abs(le-6.5),ve=Math.abs(H-2);return ie<2?ve<=2-(ie===0?1:0)-(pe>5?1:0)&&pe<7-(ie===0?1:0)?ie===1&&ve<2?Y:O:null:H===2&&le===7?[.3,.26,.22]:H===2&&le>7&&le<13&&ie<17-(le-7)*2.6||H===2&&le<7&&le>1&&ie<14-(7-le)*2.4?U:null},.06),L)}{Nt(i,0,0,c);let L=c.x,O=c.y,U=c.z,Y=c.heading,H=Math.sin(Y),ie=Math.cos(Y),le=-ie,pe=H,ve=(ne,Z,j)=>f(ne,Z)>j,ue=!1;for(let ne of[430,500,380,580,660]){for(let Z of[70,130,0,-70,190,-140]){if(ue)break;let j=L+H*ne+le*Z,P=U+ie*ne+pe*Z;if(!ve(j,P,85))continue;let X=n?Math.max(-2,n(j,P)):O;a(Am(101),[{x:j,y:X-3,z:P,ry:Y+.6,s:2.3}]);let q=j-H*95-le*30,ee=P-ie*95-pe*30;if(ve(q,ee,45)&&ve(q+le*90,ee+pe*90,40)&&ve(q-le*90,ee-pe*90,40)){let _e=n?Math.max(-1,n(q,ee)):O;a(Bh(198,24),[{x:q,y:Math.min(_e,O)-5,z:ee,ry:Y}])}ue=!0}if(ue)break}}for(let L of[1,-1]){let O=!0;for(let Y of[210,270,330,390])Nt(i,Y,L*62,c),f(c.x,c.z)<46&&(O=!1);if(!O||L<0)continue;Nt(i,300,L*62,c);let U=n?n(c.x,c.z):c.y;a(Bh(198,22),[{x:c.x,y:U-4,z:c.z,ry:c.heading-Math.PI/2}]);break}let B=-1,k=-1/0;for(let L=300;L<l-300;L+=40){let O=Math.floor(L/i.step),U=0;for(let H=0;H<60;H+=6)U+=Math.abs(i.pts[(O+H)%i.pts.length].curv);let Y=-U*400+t.range(0,1)-(u(L)||u(L+100)?100:0);Y>k&&(k=Y,B=L)}if(B>0)for(let L of[1,-1]){Nt(i,B+90,L*95,c);let O=n?n(c.x,c.z):c.y;if(O<2)continue;a(Bh(198,20),[{x:c.x,y:Math.min(O,c.y)-4,z:c.z,ry:c.heading-Math.PI/2}]);break}return{group:s,dispose(){for(let L of r)L.dispose?.()}}}function gb(i,e){let t=i.length,n=new Float64Array(t),s=0;for(let r=0;r<t;r++){let o=0;s=0;for(let a=Math.max(0,r-e);a<=Math.min(t-1,r+e);a++)s+=i[a],o++;n[r]=s/o}return n}function Hh(i){let e=i.x.length,t=i.step,n=i.x,s=i.y,r=i.z,o=new Float64Array(e),a=new Float64Array(e),c=new Float64Array(e);for(let y=0;y<e;y++){let w=Math.max(0,y-1),S=Math.min(e-1,y+1),b=n[S]-n[w],I=r[S]-r[w],B=Math.hypot(b,I)||1e-9;o[y]=b/B,a[y]=I/B,c[y]=(s[S]-s[w])/B}let l=new Float64Array(e);for(let y=1;y<e-1;y++){let w=-a[y],S=o[y];l[y]=((o[y+1]-o[y-1])*w+(a[y+1]-a[y-1])*S)/(2*t)}l[0]=l[1],l[e-1]=l[e-2];let u=gb(l,12),h=new Float64Array(e);for(let y=0;y<e;y++)h[y]=Math.min(95,Math.sqrt(30/Math.max(1e-6,Math.abs(u[y]))));for(let y=e-2;y>=0;y--)h[y]=Math.min(h[y],Math.sqrt(h[y+1]**2+80*t));for(let y=1;y<e;y++)h[y]=Math.min(h[y],Math.sqrt(h[y-1]**2+40*t));let f=new Array(e),p=1/0,g=-1/0,x=1/0,m=-1/0,d=1/0,v=0;for(let y=0;y<e;y++){let w=Math.hypot(1,c[y]);f[y]={s:y*t,x:n[y],y:s[y],z:r[y],tx:o[y]/w,ty:c[y]/w,tz:a[y]/w,rx:-a[y],rz:o[y],width:i.width,curv:u[y],vmax:h[y],slope:c[y]},n[y]<p&&(p=n[y]),n[y]>g&&(g=n[y]),r[y]<x&&(x=r[y]),r[y]>m&&(m=r[y]);let S=1/Math.max(1e-9,Math.abs(u[y]));S<d&&(d=S),Math.abs(c[y])>v&&(v=Math.abs(c[y]))}let M=[],_=[];for(let y of i.features)y.type==="tunnel"?M.push({type:"tunnel",s0:y.s0,s1:y.s1,name:y.name}):_.push({s0:y.s0,s1:y.s1,name:y.name});let E=(e-1)*t,T=0;for(let y=0;y<e;y++)T+=t/Math.max(5,h[y]);return{seed:"REAL:"+i.id,attempts:1,open:!0,real:i,raceStart:i.raceStart||0,raceEnd:Math.min(i.raceEnd||E,E),length:E,step:t,count:e,pts:f,features:M,bridges:_,bounds:{minX:p,maxX:g,minZ:x,maxZ:m},stats:{minRadius:d,maxSlope:v,lapTimeEstimate:T,corners:0}}}var Pm=["torre","castello","borgo","chiesa","agrumeto","peschereccio","casello"];function xb(i,e,t){let n=[],s=i.length,r=l=>{let u=1/0,h=0;for(let f=0;f<i.count;f+=5){let p=i.pts[f],g=(p.x-l.x)**2+(p.z-l.z)**2;g<u&&(u=g,h=f)}return{dist:Math.sqrt(u),q:i.pts[h]}},o={},a=(l,u)=>(o[l]=(o[l]||0)+1)<=u,c=e.places.map(l=>({p:l,n:r(l)})).filter(l=>l.n.dist<1600&&l.n.q.s>150&&l.n.q.s<s-150).sort((l,u)=>l.n.dist-u.n.dist);for(let{p:l,n:u}of c)n.some(h=>h.x!==void 0&&Math.hypot(h.x-l.x,h.z-l.z)<250)||(l.kind==="castle"?/^torre/i.test(l.name)?a("torre",2)&&n.push({prop:"torre",x:l.x,z:l.z,height:48,label:l.name}):/castel|rocca|forte|fort/i.test(l.name)&&a("castello",3)&&n.push({prop:"castello",x:l.x,z:l.z,width:170,label:l.name}):l.kind==="place"&&(l.rank==="village"||l.rank==="town"||l.rank===void 0)&&(t(l.x,l.z)-u.q.y>120&&u.dist>250?a("borgo",3)&&n.push({prop:"borgo",x:l.x,z:l.z,width:300}):u.dist>90&&u.dist<450&&a("chiesa",3)&&n.push({prop:"chiesa",x:l.x,z:l.z,width:46})));for(let l=900,u=0;l<s-600;l+=1300,u++){let h=i.pts[Math.round(l/i.step)];for(let f of[1,-1]){let p=f*560;if(t(h.x+h.rx*p,h.z+h.rz*p)<=0&&t(h.x+h.rx*p*1.3,h.z+h.rz*p*1.3)<=0)u%2===0&&n.push({prop:"peschereccio",s:l,d:p+u%3*40*f,width:34,sea:!0});else if(u%2===1){let g=f*78,x=t(h.x+h.rx*g,h.z+h.rz*g);x>1&&Math.abs(x-h.y)<14&&n.push({prop:"agrumeto",s:l,d:g,width:70})}}}return n}function Lm({track:i,data:e,baked:t,heightAt:n,clearance:s}){let r=new ft;r.name="real-props";let o=[],a=[];if(!t)return{group:r,placed:o,skipped:a,dispose(){}};let c=new Gi({vertexColors:!0}),l=new Map,u=i.length,h=(f,p)=>{let g=1/0,x=0;for(let m=0;m<i.count;m+=2){let d=i.pts[m],v=(d.x-f)**2+(d.z-p)**2;v<g&&(g=v,x=m)}return{q:i.pts[x],dist:Math.sqrt(g)}};for(let f of xb(i,e,n)){let p=t[f.prop];if(!p?.cells?.length)continue;let g=p._ext;if(!g){let w=[1/0,1/0,1/0],S=[-1/0,-1/0,-1/0];for(let b=0;b<p.cells.length;b+=4)for(let I=0;I<3;I++)w[I]=Math.min(w[I],p.cells[b+I]),S[I]=Math.max(S[I],p.cells[b+I]+1);g=p._ext=[S[0]-w[0],S[1]-w[1],S[2]-w[2]]}let x=f.height?f.height/g[1]:f.width/Math.max(g[0],g[2]),m=Math.hypot(g[0],g[2])*x/2,d,v;if(f.x!==void 0)d=f.x,v=f.z;else{let w=i.pts[Math.max(0,Math.min(i.count-1,Math.round(f.s/i.step)))];d=w.x+w.rx*f.d,v=w.z+w.rz*f.d}let M=h(d,v);if(M.dist-m<s){if(f.x===void 0||M.dist<1){a.push(f.prop+" : trop pr\xE8s de la route");continue}let w=(m+s+2)/M.dist;if(d=M.q.x+(d-M.q.x)*w,v=M.q.z+(v-M.q.z)*w,M=h(d,v),M.dist-m<s){a.push(f.prop+" : trop pr\xE8s de la route");continue}}let _;if(f.sea){if(n(d,v)>0){a.push(f.prop+" : pas en mer");continue}_=-.12*x*g[1]}else{_=1/0;for(let[w,S]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]])_=Math.min(_,n(d+w*m*.6,v+S*m*.6));_=Math.max(_,.2)-.5}let E=f.prop+"@"+x.toFixed(3),T=l.get(E);T||l.set(E,T=xm(p.cells,x));let y=new ot(T,c);y.name="prop-"+f.prop,y.position.set(d,_,v),y.rotation.y=Math.atan2(M.q.x-d,M.q.z-v),y.updateMatrix(),y.matrixAutoUpdate=!1,r.add(y),o.push({prop:f.prop,label:f.label||null,s:M.q.s,dist:M.dist,x:d,y:_,z:v,size:x})}return{group:r,placed:o,skipped:a,dispose(){c.dispose();for(let f of l.values())f.dispose()}}}var Vh=.12,_b=8200,yb=(i,e,t=1.08,n=1.45)=>{let s=(i>>16&255)/255,r=(i>>8&255)/255,o=(i&255)/255,a=.3*s+.59*r+.11*o,c=(.38+(a-.38)*1.35)/Math.max(a,.001);s*=c,r*=c,o*=c,a=.3*s+.59*r+.11*o,s=Math.min(1,Math.max(0,(a+(s-a)*n)*t)),r=Math.min(1,Math.max(0,(a+(r-a)*n)*t)),o=Math.min(1,Math.max(0,(a+(o-a)*n)*t)),e[0]=s,e[1]=r,e[2]=o};function ea(i,e,{seaCut:t=.25,yOffset:n=0,tint:s=null}={}){let{cell:r,ix:o,iz:a,h:c,c:l}=i,u=o.length,h=1/0,f=-1/0,p=1/0,g=-1/0;for(let U=0;U<u;U++)o[U]<h&&(h=o[U]),o[U]>f&&(f=o[U]),a[U]<p&&(p=a[U]),a[U]>g&&(g=a[U]);let x=u?g-p+1:0,m=new Float32Array(u?(f-h+1)*x:0).fill(NaN),d=(U,Y)=>U<h||U>f||Y<p||Y>g?-1:(U-h)*x+(Y-p),v={get(U){if(U<0)return;let Y=m[U];return Y===Y?Y:void 0}},M=new Float32Array(u);for(let U=0;U<u;U++)M[U]=Math.floor(c[U]/10/e)*e,m[(o[U]-h)*x+(a[U]-p)]=M[U];let _=[1,-1,0,0],E=[0,0,1,-1],T=new Float32Array(u*4),y=new Uint8Array(u),w=0;for(let U=0;U<u;U++)if(!(c[U]/10<=t)){y[U]=1,w++;for(let Y=0;Y<4;Y++){let H=v.get(d(o[U]+_[Y],a[U]+E[Y]));H!==void 0&&H<M[U]?(T[U*4+Y]=H,w++):T[U*4+Y]=NaN}}let S=new Float32Array(w*18),b=new Float32Array(w*18),I=new Float32Array(w*18),B=0,k=[0,0,0],L=(U,Y,H,ie,le,pe,ve,ue,ne,Z,j,P,X,q,ee,_e,Re,Pe)=>{S[B]=U,S[B+1]=Y,S[B+2]=H,S[B+3]=ie,S[B+4]=le,S[B+5]=pe,S[B+6]=ve,S[B+7]=ue,S[B+8]=ne,S[B+9]=U,S[B+10]=Y,S[B+11]=H,S[B+12]=ve,S[B+13]=ue,S[B+14]=ne,S[B+15]=Z,S[B+16]=j,S[B+17]=P;for(let V=0;V<18;V+=3)b[B+V]=X,b[B+V+1]=q,b[B+V+2]=ee,I[B+V]=_e,I[B+V+1]=Re,I[B+V+2]=Pe;B+=18};for(let U=0;U<u;U++){if(!y[U])continue;let Y=M[U];yb(l[U],k),s&&s(k,(o[U]+.5)*r,(a[U]+.5)*r,Y);let H=.92+.16*((o[U]*73856093^a[U]*19349663)>>>0)/4294967295,ie=k[0]*H,le=k[1]*H,pe=k[2]*H,ve=o[U]*r,ue=a[U]*r,ne=ve+r,Z=ue+r,j=Y+n;L(ve,j,ue,ve,j,Z,ne,j,Z,ne,j,ue,0,1,0,ie,le,pe);let P=.2+.45*ie,X=.19+.42*le,q=.17+.38*pe,ee=T[U*4];ee===ee&&L(ne,ee+n,Z,ne,j,Z,ne,j,ue,ne,ee+n,ue,1,0,0,P,X,q),ee=T[U*4+1],ee===ee&&L(ve,ee+n,ue,ve,j,ue,ve,j,Z,ve,ee+n,Z,-1,0,0,P,X,q),ee=T[U*4+2],ee===ee&&L(ve,ee+n,Z,ve,j,Z,ne,j,Z,ne,ee+n,Z,0,0,1,P,X,q),ee=T[U*4+3],ee===ee&&L(ne,ee+n,ue,ne,j,ue,ve,j,ue,ve,ee+n,ue,0,0,-1,P,X,q)}let O=new mt;return O.setAttribute("position",new dt(S,3)),O.setAttribute("normal",new dt(b,3)),O.setAttribute("color",new dt(I,3)),O.computeBoundingSphere(),{geo:O,heights:v,key:d,q:M}}function $i(i,e,t){let n=new xn(i,e,t.length),s=new et,r=new Qt,o=new z,a=new z,c=new z(0,1,0);return t.forEach((l,u)=>{r.setFromAxisAngle(c,l.ry||0),o.set(l.sx??1,l.sy??1,l.sz??1),a.set(l.x,l.y,l.z),s.compose(a,r,o),n.setMatrixAt(u,s),l.color&&n.setColorAt(u,l.color)}),n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),n.frustumCulled=!1,n}function vb(i){if(typeof document>"u")return null;let e=document.createElement("canvas");e.width=512,e.height=192;let t=e.getContext("2d");t.fillStyle="#0c7a43",t.fillRect(0,0,512,192),t.strokeStyle="#ffffff",t.lineWidth=8,t.strokeRect(8,8,496,176),t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.font="bold 62px Arial, Helvetica, sans-serif",t.fillText(i[0],256,i[1]?70:96,470),i[1]&&(t.font="bold 44px Arial, Helvetica, sans-serif",t.fillText(i[1],256,136,470));let n=new fi(e);return n.colorSpace=At,n.anisotropy=8,n}function Dm(i,e){e==="near"?i._near=i._near||ea(i.near,1):e==="mid"&&(i._mid=i._mid||ea(i.mid,4,{yOffset:-3}))}function Nm(i,e,t,n){let s=e.real,r=new ft;r.name="environment";let o=[],a=J=>(o.push(J),J),c=!!t.night,l=()=>js(a(new it({vertexColors:!0,roughness:.95,metalness:0,side:Rt})),1,1),u=s._near||ea(s.near,1);s._near=null;let h=new ot(a(u.geo),l());h.receiveShadow=!0,h.name="real-terrain-near";let f=s._mid||ea(s.mid,4,{yOffset:-3});s._mid=null;let p=new ot(a(f.geo),js(a(new it({vertexColors:!0,roughness:1,side:Rt})),8,.7));p.name="real-terrain-mid";let g=new Ae(t.skyHorizon),x=(e.bounds.minX+e.bounds.maxX)/2,m=(e.bounds.minZ+e.bounds.maxZ)/2,d=ea(s.far,60,{tint:(J,Se,Me,se)=>{let Te=Math.hypot(Se-x,Me-m),oe=Math.min(.82,1-Math.exp(-Te/3e4)),Ee=se>2300?.5:0;J[0]=(J[0]+(1-J[0])*Ee)*(1-oe)+g.r*oe,J[1]=(J[1]+(1-J[1])*Ee)*(1-oe)+g.g*oe,J[2]=(J[2]+(1-J[2])*Ee)*(1-oe)+g.b*oe}}),v=new ot(a(d.geo),a(new Wt({vertexColors:!0,fog:!1,side:Rt})));v.name="real-terrain-far",v.scale.setScalar(Vh),v.frustumCulled=!1,v.renderOrder=-5,r.add(h,p,v);let M=(J,Se)=>{let Me=s.near.cell,se=u.heights.get(u.key(Math.floor(J/Me),Math.floor(Se/Me)));if(se!==void 0)return se;let Te=s.mid.cell,oe=f.heights.get(f.key(Math.floor(J/Te),Math.floor(Se/Te)));return oe!==void 0?oe-3:-5},_=new ot(a(new Cn(6e4,6e4)),a(new it({color:t.seaColor,roughness:.25,metalness:.2})));_.rotation.x=-Math.PI/2,_.position.y=.05,_.name="real-sea",r.add(_);let E=new z(...t.sunDir).normalize(),T=a(new bt({side:$t,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new Ae(t.skyTop)},uHor:{value:new Ae(t.skyHorizon)},uSun:{value:new Ae(t.sunColor)},uSunDir:{value:E}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uTop, uHor, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = mix(uHor, uTop, pow(max(d.y, 0.0), 0.5));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 600.0) * 3.0 + pow(s, 14.0) * 0.25);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`})),y=new ot(a(new _s(_b,32,16)),T);y.renderOrder=-10,y.frustumCulled=!1,r.add(y);let w=i.fog,S=i.background;i.fog=new Xr(t.fogColor,(t.fogDensity||5e-4)*.3),i.background=new Ae(t.skyHorizon);let b=new Kr(t.hemiSky,t.hemiGround,t.hemiIntensity),I=new vi(t.sunColor,t.sunIntensity);I.castShadow=!0,I.shadow.mapSize.set(2048,2048);let B=I.shadow.camera;B.left=-90,B.right=90,B.top=90,B.bottom=-90,B.near=1,B.far=500,I.shadow.bias=-5e-4,r.add(b,I,I.target);let k=s.buildings,L=[15983808,15321498,16117730,14924172,14472128,15784368,13620956],O=[11884346,11030070,14275268,13222064,9390646],U=[],Y=[],H=60,ie=new Map;for(let J=0;J<e.count;J+=3){let Se=e.pts[J],Me=Math.floor(Se.x/H)+","+Math.floor(Se.z/H),se=ie.get(Me);se||ie.set(Me,se=[]),se.push(Se)}let le=s.width/2+6+2,pe=(J,Se,Me,se)=>{let Te=null,oe=Math.max(Me,se)+le;for(let Ee=Math.floor((J-oe)/H);Ee<=Math.floor((J+oe)/H);Ee++)for(let W=Math.floor((Se-oe)/H);W<=Math.floor((Se+oe)/H);W++){let we=ie.get(Ee+","+W);if(we)for(let R of we){let D=Math.max(0,Math.abs(R.x-J)-Me),F=Math.max(0,Math.abs(R.z-Se)-se);D*D+F*F<le*le&&(Te===null||R.y<Te)&&(Te=R.y)}}return Te},ve=0,ue=0;for(let J=0;J<k.x.length;J++){let Me=(k.l[J]>0?Math.min(k.l[J],9):1+Math.floor(n.next()*3)+(k.w[J]*k.d[J]>300?1:0))*3.1,se=Math.max(M(k.x[J],k.z[J]),.3),Te=pe(k.x[J],k.z[J],k.w[J]/2+.3,k.d[J]/2+.3);if(Te!==null){let oe=Te-3.2-se;if(oe<3){ve++;continue}Me>oe&&(Me=oe,ue++)}U.push({x:k.x[J],y:se+Me/2-.5,z:k.z[J],sx:k.w[J],sy:Me+1,sz:k.d[J],color:new Ae(n.pick(L))}),Y.push({x:k.x[J],y:se+Me+.35,z:k.z[J],sx:k.w[J]+.6,sy:.7,sz:k.d[J]+.6,color:new Ae(n.pick(O))})}let ne=a(new on(1,1,1));if(U.length){let J=_m(js(a(new it({roughness:.9})),1.5,.8)),Se=a(new it({roughness:.85})),Me=$i(ne,J,U),se=$i(ne,Se,Y);Me.name="real-buildings",Me.castShadow=!0,r.add(Me,se)}let Z=s.trees,j=0;if(Z&&Z.x.length){let J=[],Se=[],Me=new Ae(7031346),se=new Ae;for(let oe=0;oe<Z.x.length;oe++){let Ee=Z.x[oe],W=Z.z[oe];if(pe(Ee,W,2.5,2.5)!==null)continue;let we=Math.sin(Ee*12.9898+W*78.233)*43758.5453,R=Z.r?Z.r[oe]/1e3:we-Math.floor(we),D=Z.y[oe],F=.75+.5*R;if(Z.k[oe])if(R<.55){let $=7+6*R;Se.push({x:Ee,y:D+$/2+.6,z:W,sx:1.7,sy:$,sz:1.7,color:se.setRGB(.1*F,.26*F,.13*F).clone()})}else{let $=6+5*R;J.push({x:Ee,y:D+$/2,z:W,sx:.7,sy:$,sz:.7,color:Me}),Se.push({x:Ee,y:D+$+.9,z:W,sx:6.5,sy:2.2,sz:6.5,color:se.setRGB(.14*F,.34*F,.16*F).clone()})}else{let $=3+2.4*R;J.push({x:Ee,y:D+.9,z:W,sx:.6,sy:1.8,sz:.6,color:Me}),Se.push({x:Ee,y:D+1.6+$/2,z:W,sx:$,sy:$*.85,sz:$,color:se.setRGB(.3*F,.44*F,.2*F).clone()})}}j=Se.length;let Te=js(a(new Gi),1.1,.9);if(J.length){let oe=$i(ne,a(new Gi),J);oe.name="real-trunks",r.add(oe)}if(Se.length){let oe=$i(ne,Te,Se);oe.name="real-trees",r.add(oe)}}let P={x:0,y:0,z:0,heading:0},X=s.width/2,q=new Ae(12170925),ee=new Ae(10131343),_e=[],Re=[];for(let J of e.bridges){for(let Se=J.s0+6;Se<J.s1-2;Se+=34){Nt(e,Se,0,P);let Me=M(P.x,P.z),se=P.y-1.6-Me;se<3||(_e.push({x:P.x,y:Me+se/2,z:P.z,ry:P.heading,sx:X*1.5,sy:se,sz:2.4,color:ee}),_e.push({x:P.x,y:P.y-1.2,z:P.z,ry:P.heading,sx:X*2+5,sy:1.2,sz:3.6,color:q}))}for(let Se=J.s0;Se<J.s1;Se+=8){for(let Me of[-1,1])Nt(e,Se+4,Me*(X+6+.4),P),Re.push({x:P.x,y:P.y-.9,z:P.z,ry:P.heading,sx:.9,sy:1.8,sz:8.3,color:q});Nt(e,Se+4,0,P),Re.push({x:P.x,y:P.y-1.25,z:P.z,ry:P.heading,sx:X*2+12,sy:.9,sz:8.3,color:ee})}}let Pe=js(a(new it({roughness:.9})),.8,.6);if(_e.length){let J=$i(ne,Pe,_e);J.castShadow=!0,J.name="real-piers",r.add(J)}Re.length&&r.add($i(ne,Pe,Re));let V=e.length,We=J=>!!bs(e,Math.max(0,Math.min(V-1,J)),"tunnel"),He=[],ze=[],De=new Ae(12764876),Ye=new Ae(8225160),Ne={x:0,y:0,z:0,heading:0};for(let J=0;J<V-4;J+=4)if(!We(J))for(let Se of[-1,1]){let Me=Se*(X+6-.7);Nt(e,J,Me,P),Nt(e,J+4,Me,Ne),He.push({x:P.x,y:P.y+.4,z:P.z,ry:P.heading,sx:.12,sy:.8,sz:.12,color:Ye});let se=Math.hypot(Ne.x-P.x,Ne.z-P.z)+.05,Te=Math.atan2(Ne.x-P.x,Ne.z-P.z);for(let oe of[.42,.72])ze.push({x:(P.x+Ne.x)/2,y:(P.y+Ne.y)/2+oe,z:(P.z+Ne.z)/2,ry:Te,sx:.07,sy:.2,sz:se,color:De})}let N=a(new it({roughness:.35,metalness:.85}));He.length&&r.add($i(ne,N,He),$i(ne,N,ze));let A=Lm({track:e,data:s,baked:s.props,heightAt:M,clearance:le});r.add(A.group),o.push(A);let Q=[];for(let J of s.places){if(J.kind!=="place")continue;let Se=1/0,Me=0;for(let Te=0;Te<e.count;Te+=10){let oe=e.pts[Te],Ee=(oe.x-J.x)**2+(oe.z-J.z)**2;Ee<Se&&(Se=Ee,Me=Te)}let se=Math.sqrt(Se);se<2600&&Q.push({name:J.name,s:Me*e.step,dist:se})}Q.sort((J,Se)=>J.s-Se.s);let ge=a(new Cn(1,1)),xe=[];for(let J of Q){if(xe.some(oe=>Math.abs(oe.s-J.s)<500)||J.s<120||J.s>V-150||We(J.s)||We(J.s-60))continue;xe.push(J);let Se=vb([J.name,J.dist>600?`${(J.dist/1e3).toFixed(1).replace(".",",")} km`:""]),Me=a(new Wt({map:Se,color:Se?16777215:817731,side:Rt}));Se&&a(Se),Nt(e,J.s,X+6+2.2,P);let se=new ot(ge,Me);se.scale.set(7.5,2.8,1),se.position.set(P.x,P.y+5.2,P.z),se.rotation.y=P.heading+Math.PI,r.add(se);let Te=new ot(ne,N);Te.scale.set(.3,5.2,.3),Te.position.set(P.x,P.y+2.2,P.z),r.add(Te)}let fe=(J,Se,Me)=>{let se=Math.sin(J*127.1+Se*311.7+Me*74.7)*43758.5453;return se-Math.floor(se)},Ce=zn(5,5,5,.5,(J,Se,Me)=>{let se=J-2,Te=Me-2,oe=(Se-1.6)*1.2;if(se*se+oe*oe+Te*Te>5.4+fe(J,Se,Me))return null;let Ee=fe(J+3,Se,Me+7);return Ee>.72?[.92,.42,.6]:Ee>.62?[.96,.93,.9]:[.16,.38,.17]},.2);a(Ce);let Fe=[];for(let J=60;J<V-20;J+=n.range(5,11)){if(We(J)||e.bridges.some(Me=>J>Me.s0-4&&J<Me.s1+4))continue;if(n.next()<.25){J+=n.range(15,50);continue}let Se=n.next()<.5?-1:1;Nt(e,J,Se*(X+6+n.range(1.2,2.4)),P),Fe.push({x:P.x,y:P.y-.5,z:P.z,ry:n.range(0,6.28),sx:n.range(.8,1.3),sy:n.range(.8,1.3),sz:n.range(.8,1.3)})}if(Fe.length){let J=$i(Ce,a(new it({vertexColors:!0,roughness:.9})),Fe);J.castShadow=!0,J.name="real-oleanders",r.add(J)}i.add(r);let Oe=new z;function Ve(J,Se,Me){y.position.set(Me.x,0,Me.z),_.position.x=Me.x,_.position.z=Me.z,I.position.copy(Me).addScaledVector(E,200),I.target.position.copy(Me),Oe.copy(Me),v.position.set(Oe.x*(1-Vh),-2,Oe.z*(1-Vh))}function be(){i.remove(r),i.fog&&i.fog!==w&&(i.fog=w||null),i.background=S||null;for(let J of o)J.dispose?.()}return{group:r,sun:I,update:Ve,dispose:be,heightAt:M,places:xe,allPlaces:Q,buildingStats:{kept:U.length,dropped:ve,lowered:ue},treeCount:j,props:A.placed,propsSkipped:A.skipped}}var zc=class extends Yi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Kh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new uf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ss.extractUrlBase(e);o=Ss.resolveURL(l,this.path)}else o=Ss.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ho(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===zm){try{o[pt.KHR_BINARY_GLTF]=new hf(e)}catch(h){s&&s(h);return}r=JSON.parse(o[pt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new _f(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case pt.KHR_MATERIALS_UNLIT:o[h]=new Yh;break;case pt.KHR_DRACO_MESH_COMPRESSION:o[h]=new ff(r,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:o[h]=new df;break;case pt.KHR_MESH_QUANTIZATION:o[h]=new pf;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Mb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},qh=class{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Ae(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],_n);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new vi(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new fc(u),l.distance=h;break;case"spot":l=new $r(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ji(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Yh=class{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return Wt}extendParams(e,t,n){let s=[];e.color=new Ae(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],_n),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(s)}},Zh=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Kh=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(a,a)}return Promise.all(r)}},$h=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Jh=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},jh=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],_n)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,At)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Qh=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},ef=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(a[0],a[1],a[2],_n),Promise.all(r)}},tf=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},nf=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(a[0],a[1],a[2],_n),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,At)),Promise.all(r)}},sf=class{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},rf=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},of=class{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},af=class{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},cf=class{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},lf=class{constructor(e){this.name=pt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}},uf=class{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==ei.TRIANGLES&&l.mode!==ei.TRIANGLE_STRIP&&l.mode!==ei.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,p=[];for(let g of h){let x=new et,m=new z,d=new Qt,v=new z(1,1,1),M=new xn(g.geometry,g.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,_),c.SCALE&&v.fromBufferAttribute(c.SCALE,_),M.setMatrixAt(_,x.compose(m,d,v));for(let _ in c)if(_==="_COLOR_0"){let E=c[_];M.instanceColor=new Xs(E.array,E.itemSize,E.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);Dt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},zm="glTF",ta=12,Um={JSON:1313821514,BIN:5130562},hf=class{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ta),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ta,r=new DataView(e,ta),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Um.JSON){let l=new Uint8Array(e,ta+o,a);this.content=n.decode(l)}else if(c===Um.BIN){let l=ta+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ff=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=gf[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=gf[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],p=so[f.componentType];l[h]=p.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(p){for(let g in p.attributes){let x=p.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}h(p)},a,l,_n,f)})})}},df=class{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},pf=class{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}},kc=class extends ys{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,f=h*h,p=f*h,g=e*l,x=g-l,m=-2*p+3*f,d=p-f,v=1-m,M=d-f+h;for(let _=0;_!==a;_++){let E=o[x+_+a],T=o[x+_+c]*u,y=o[g+_+a],w=o[g+_]*u;r[_]=v*E+M*T+m*y+d*w}return r}},Sb=new Qt,mf=class extends kc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Sb.fromArray(r).normalize().toArray(r),r}},ei={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},so={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fm={9728:sn,9729:Rn,9984:nh,9985:Co,9986:Ar,9987:Zn},Om={33071:Bi,33648:No,10497:Hi},Gh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Rs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},bb={CUBICSPLINE:void 0,LINEAR:kr,STEP:zr},Wh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Eb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new it({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),i.DefaultMaterial}function nr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ji(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Tb(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],f=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function wb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ab(i){let e,t=i.extensions&&i.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xh(t.attributes):e=i.indices+":"+Xh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Xh(i.targets[n]);return e}function Xh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function xf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Rb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Cb=new et,_f=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Mb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new hc(this.options.manager):this.textureLoader=new dc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ho(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return nr(r,a,s),Ji(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Ss.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Gh[s.type],a=so[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new dt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Gh[s.type],l=so[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(p&&p!==h){let d=Math.floor(f/p),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,M=t.cache.get(v);M||(x=new l(a,d*p,s.count*p/u),M=new qr(x,p/u),t.cache.add(v,M)),m=new Ws(M,c,f%p/u,g)}else a===null?x=new l(s.count*c):x=new l(a,f,s.count*c),m=new dt(x,c,g);if(s.sparse!==void 0){let d=Gh.SCALAR,v=so[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,E=new v(o[1],M,s.sparse.count*d),T=new l(o[2],_,s.sparse.count*c);a!==null&&(m=new dt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let y=0,w=E.length;y<w;y++){let S=E[y];if(m.setX(S,T[y*c]),c>=2&&m.setY(S,T[y*c+1]),c>=3&&m.setZ(S,T[y*c+2]),c>=4&&m.setW(S,T[y*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Fm[f.magFilter]||Rn,u.minFilter=Fm[f.minFilter]||Zn,u.wrapS=Om[f.wrapS]||Hi,u.wrapT=Om[f.wrapT]||Hi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==sn&&u.minFilter!==Rn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new rn(x);m.needsUpdate=!0,f(m)}),t.load(Ss.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Ji(h,o),h.userData.mimeType=o.mimeType||Rb(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[pt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ys,Sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new gs,Sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return it}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[pt.KHR_MATERIALS_UNLIT]){let h=s[pt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Ae(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],_n),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,At)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Rt);let u=r.alphaMode||Wh.OPAQUE;if(u===Wh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Wh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Wt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new $e(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Wt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Wt){let h=r.emissiveFactor;a.emissive=new Ae().setRGB(h[0],h[1],h[2],_n)}return r.emissiveTexture!==void 0&&o!==Wt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,At)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Ji(h,r),t.associations.set(h,{materials:e}),r.extensions&&nr(s,h,r),h})}createUniqueName(e){let t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Bm(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=Ab(l),h=s[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Bm(new mt,l,t),s[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?Eb(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let x=u[p],m=o[p],d,v=l[p];if(m.mode===ei.TRIANGLES||m.mode===ei.TRIANGLE_STRIP||m.mode===ei.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new nc(x,v):new ot(x,v),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===ei.TRIANGLE_STRIP?d.geometry=Fh(d.geometry,xc):m.mode===ei.TRIANGLE_FAN&&(d.geometry=Fh(d.geometry,Wo));else if(m.mode===ei.LINES)d=new qs(x,v);else if(m.mode===ei.LINE_STRIP)d=new Yr(x,v);else if(m.mode===ei.LINE_LOOP)d=new ac(x,v);else if(m.mode===ei.POINTS)d=new xs(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&wb(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),Ji(d,r),m.extensions&&nr(s,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&nr(s,h[0],r),h[0];let f=new ft;r.extensions&&nr(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(xp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ms(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ji(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let f=new et;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new sc(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let p=s.channels[h],g=s.samplers[p.sampler],x=p.target,m=x.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",v)),l.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let f=h[0],p=h[1],g=h[2],x=h[3],m=h[4],d=[];for(let v=0,M=f.length;v<M;v++){let _=f[v],E=p[v],T=g[v],y=x[v],w=m[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let S=n._createAnimationTracks(_,E,T,y,w);if(S)for(let b=0;b<S.length;b++)d.push(S[b])}return new uc(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Cb)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new ko:l.length>1?u=new ft:l.length===1?u=l[0]:u=new Dt,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ji(u,r),r.extensions&&nr(n,u,r),r.matrix!==void 0){let h=new et;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ft;n.name&&(r.name=s.createUniqueName(n.name)),Ji(r,n),n.extensions&&nr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[f,p]of s.associations)(f instanceof Sn||f instanceof rn)&&h.set(f,p);return u.traverse(f=>{let p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];Rs[r.path]===Rs.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Rs[r.path]){case Rs.weights:l=Wi;break;case Rs.rotation:l=Xi;break;case Rs.position:case Rs.scale:l=qi;break;default:n.itemSize===1?l=Wi:l=qi;break}let u=s.interpolation!==void 0?bb[s.interpolation]:kr,h=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let g=new l(c[f]+"."+Rs[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=xf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Xi?mf:kc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ib(i,e,t){let n=e.attributes,s=new $n;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new z(c[0],c[1],c[2]),new z(l[0],l[1],l[2])),a.normalized){let u=xf(so[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new z,c=new z;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let x=xf(so[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Fn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Bm(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=gf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ht.workingColorSpace!==_n&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),Ji(i,e),Ib(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Tb(i,e.targets,t):i})}var Cs={hi:null,lo:null},Pb=["body","frame","bubble","headlight","tail","wheelRear","wheelFront","fork","torso","helmet","armR","armL","legR","legL"];async function yf(i,e){let t=await i.loadAsync(e),n={},s={};for(let a of t.scene.children)a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.set(1,1,1),n[a.name]=a,a.traverse(c=>{c.isMesh&&c.material?.name&&(s[c.material.name]=c.material)});let r=Pb.filter(a=>!n[a]);if(r.length)throw new Error(e+" incomplet : "+r.join(", "));let o=0;return n.armR.traverse(a=>{a.isMesh&&(a.geometry.computeBoundingBox(),o=Math.max(o,a.geometry.boundingBox.max.z))}),{parts:n,mats:s,armLength:o>.1?o/1.01:1}}async function km(i="assets/"){if(Cs.lo)return Cs;let e=new zc;return Cs.lo=await yf(e,i+"bike_voxel.glb").catch(()=>yf(e,i+"bike.glb")),Cs.hi=await yf(e,i+"bike_voxel_hi.glb").catch(()=>Cs.lo),Cs}function Hm(i="lo"){return Cs[i]||Cs.lo}var Yt=0,ln=1,Qi=2,Gc=.32,Vc=-.7,Zm=.7,ji=[0,-Gc,-Vc],Km=[0,-Gc,-Zm],Vm=.62,Lb=.35,Is=Math.PI*2,Gn=class{constructor(e){this.off=e||[0,0,0],this.pos=[],this.groups=[],this.slot=-1,this.gStart=0}setSlot(e){e!==this.slot&&(this.closeGroup(),this.slot=e)}closeGroup(){let e=this.pos.length/3;this.slot>=0&&e>this.gStart&&this.groups.push({start:this.gStart,count:e-this.gStart,materialIndex:this.slot}),this.gStart=e}tri(e,t,n,s){let r=this.off,o=e[0]+r[0],a=e[1]+r[1],c=e[2]+r[2],l=t[0]+r[0],u=t[1]+r[1],h=t[2]+r[2],f=n[0]+r[0],p=n[1]+r[1],g=n[2]+r[2],x=l-o,m=u-a,d=h-c,v=f-o,M=p-a,_=g-c,E=m*_-d*M,T=d*v-x*_,y=x*M-m*v,w=(o+l+f)/3-(s[0]+r[0]),S=(a+u+p)/3-(s[1]+r[1]),b=(c+h+g)/3-(s[2]+r[2]),I=this.pos;E*w+T*S+y*b>=0?I.push(o,a,c,l,u,h,f,p,g):I.push(o,a,c,f,p,g,l,u,h)}quad(e,t,n,s,r){this.tri(e,t,n,r),this.tri(e,n,s,r)}build(){this.closeGroup();let e=new mt;e.setAttribute("position",new ut(this.pos,3)),e.computeVertexNormals();for(let t of this.groups)e.addGroup(t.start,t.count,t.materialIndex);return e}};function Db(i){let e=0,t=0,n=0;for(let r of i)e+=r[0],t+=r[1],n+=r[2];let s=i.length;return[e/s,t/s,n/s]}function Nb(i,e){return[(i[0]+e[0])/2,(i[1]+e[1])/2,(i[2]+e[2])/2]}function Gm(i,e,t,n){let s=e.length;for(let r=0;r<s;r++)i.tri(t,e[r],e[(r+1)%s],n)}function Ps(i,e,t,n,s){let r=typeof t=="function"?t:()=>t,o=e.length,a=e[0].length,c=e.map(Db);for(let l=0;l<o-1;l++){let u=e[l],h=e[l+1],f=Nb(c[l],c[l+1]);for(let p=0;p<a;p++){let g=(p+1)%a;i.setSlot(r(l,p)),i.quad(u[p],u[g],h[g],h[p],f)}}i.setSlot(n),Gm(i,e[0],c[0],c[1]),i.setSlot(s),Gm(i,e[o-1],c[o-1],c[o-2])}function Vn(i,e,t,n,s,r,o){let a=t[0]-e[0],c=t[1]-e[1],l=t[2]-e[2],u=Math.hypot(a,c,l)||1,h=[a/u,c/u,l/u],f=Math.abs(h[1])<.9?[0,1,0]:[1,0,0],p=[h[1]*f[2]-h[2]*f[1],h[2]*f[0]-h[0]*f[2],h[0]*f[1]-h[1]*f[0]],g=Math.hypot(p[0],p[1],p[2]);p=[p[0]/g,p[1]/g,p[2]/g];let x=[p[1]*h[2]-p[2]*h[1],p[2]*h[0]-p[0]*h[2],p[0]*h[1]-p[1]*h[0]],m=(d,v)=>{let M=[];for(let _=0;_<r;_++){let E=Is*_/r,T=Math.cos(E)*v,y=Math.sin(E)*v;M.push([d[0]+T*p[0]+y*x[0],d[1]+T*p[1]+y*x[1],d[2]+T*p[2]+y*x[2]])}return M};Ps(i,[m(e,n),m(t,s)],o,o,o)}function sr(i,e,t,n){i.setSlot(n);let s=(a,c,l)=>[e[0]+a*t[0],e[1]+c*t[1],e[2]+l*t[2]],r=[s(-1,-1,-1),s(1,-1,-1),s(1,1,-1),s(-1,1,-1),s(-1,-1,1),s(1,-1,1),s(1,1,1),s(-1,1,1)],o=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]];for(let a of o)i.tri(r[a[0]],r[a[1]],r[a[2]],e),i.tri(r[a[0]],r[a[2]],r[a[3]],e)}var Wc=3,ia=4;function Ub(i,e,t,n,s,r,o,a,c){return[[0,e,i],[o,t,i],[a,n,i],[c,s,i],[0,r,i],[-c,s,i],[-a,n,i],[-o,t,i]]}function Fb(){let i=new Gn(ji),t=[[1.02,.76,.755,.74,.72,.71,.02,.03,.02],[.9,.84,.81,.75,.7,.68,.07,.12,.08],[.7,.93,.87,.76,.7,.68,.1,.19,.13],[.45,.97,.9,.68,.58,.56,.12,.23,.16],[.3,.98,.92,.62,.36,.26,.13,.23,.17],[.05,1,.94,.62,.3,.19,.14,.21,.16],[-.2,.99,.93,.66,.32,.21,.13,.19,.13],[-.35,.85,.82,.68,.42,.34,.11,.15,.1],[-.5,.8,.79,.72,.64,.62,.1,.13,.08],[-.75,.9,.87,.8,.72,.7,.09,.12,.07],[-.98,.99,.96,.92,.88,.87,.05,.07,.04],[-1.1,1.02,1.01,1,.99,.985,.01,.015,.01]].map(n=>Ub(...n));Ps(i,t,(n,s)=>{let r=s===0||s===7,o=s===1||s===6,a=s===2||s===5;return r?n===7||n===8?ln:Yt:o?n>=9?Wc:Yt:a?n>=2&&n<=5?Wc:n>=7&&n<=8?ln:Yt:n>=3&&n<=6?Qi:ln},Yt,Yt);for(let n of[-1,1])Vn(i,[.11*n,.46,-.26],[.1*n,.32,-.7],.04,.03,5,ia),Vn(i,[.14*n,.44,-.3],[.22*n,.42,-.32],.018,.018,4,ln),Vn(i,[.1*n,.95,.42],[.27*n,.93,.35],.02,.02,4,ln);return Vn(i,[.15,.22,.1],[.17,.3,-.45],.04,.04,5,ia),Vn(i,[.17,.3,-.45],[.2,.52,-.92],.05,.065,6,ia),Vn(i,[.2,.52,-.92],[.205,.535,-.95],.065,.05,6,ln),sr(i,[0,.685,-.74],[.06,.012,.16],ln),i.build()}function Ob(){let i=new Gn(ji),e=(t,n,s,r)=>[[0,n,t],[r,s,t],[0,s-.02,t],[-r,s,t]];return Ps(i,[e(.76,.925,.91,.07),e(.58,1.06,.94,.12),e(.42,1.13,.97,.11)],Yt,Yt,Yt),i.build()}function Bb(){let i=new Gn(ji);return sr(i,[0,.985,-1.085],[.04,.02,.014],Yt),i.build()}function zb(){let i=new Gn;return Vn(i,[0,0,0],[0,0,-.45],.05,.004,6,Yt),i.build()}function kb(){let i=new Gn(ji);for(let e of[-1,1]){let t=[.062*e,.795,.905];i.setSlot(Yt);let n=[[t[0]-.035,t[1]-.012,t[2]+.012],[t[0]+.035,t[1]+.004*e,t[2]-.02],[t[0]+.03,t[1]+.022,t[2]-.03],[t[0]-.03,t[1]+.02,t[2]-.004]];i.quad(n[0],n[1],n[2],n[3],[t[0],t[1],t[2]-.2])}return i.build()}function Hb(){let i=new Gn(Km);for(let n of[-1,1])Vn(i,[.085*n,.32,.7],[.085*n,.56,.615],.032,.032,5,ln),Vn(i,[.085*n,.56,.615],[.085*n,.88,.5],.024,.024,5,Qi),sr(i,[.1*n,.33,.74],[.012,.05,.035],ia);let e=.34,t=[];for(let n of[-.75,-.25,.3,.85,1.25]){let s=.32+Math.cos(n),r=.7+Math.sin(n),o=(a,c)=>[a,.32+c*Math.cos(n),.7+c*Math.sin(n)];t.push([o(-.075,e-.005),o(-.04,e+.03),o(.04,e+.03),o(.075,e-.005)])}return Ps(i,t,Yt,Yt,Yt),i.build()}function Wm(i,e){let t=new Gn,n=14,s=(o,a)=>{let c=[];for(let l=0;l<n;l++){let u=Is*l/n;c.push([o,a*Math.cos(u),a*Math.sin(u)])}return c};Ps(t,[[-.62,.215],[-1,.27],[-.8,.305],[0,.32],[.8,.305],[1,.27],[.62,.215]].map(([o,a])=>s(o*i,a)),ln,ln,ln);for(let o of[-1,1]){let a=o*(.62*i+.004),c=[a,0,0],l=[0,0,0],u=10;for(let h=0;h<u;h++){let f=Is*h/u,p=Is*(h+1)/u;t.setSlot(h%2?ln:Qi),t.tri(c,[a,.215*Math.cos(f),.215*Math.sin(f)],[a,.215*Math.cos(p),.215*Math.sin(p)],l)}if(e){let h=o*(.62*i+.012);t.setSlot(ia);for(let f=0;f<u;f++){let p=Is*f/u,g=Is*(f+1)/u;t.quad([h,.09*Math.cos(p),.09*Math.sin(p)],[h,.16*Math.cos(p),.16*Math.sin(p)],[h,.16*Math.cos(g),.16*Math.sin(g)],[h,.09*Math.cos(g),.09*Math.sin(g)],l)}}}return t.build()}function Vb(){let i=new Gn,e=[0,.11,.015],t=[.125,.135,.155],n=10,s=6,r=[];for(let o=1;o<s;o++){let a=-Math.PI/2+Math.PI*o/s,c=Math.cos(a),l=[];for(let u=0;u<n;u++){let h=Is*(u+.5)/n;l.push([e[0]+t[0]*c*Math.cos(h),e[1]+t[1]*Math.sin(a),e[2]+t[2]*c*Math.sin(h)])}r.push(l)}return Ps(i,r,(o,a)=>{let c=Is*(a+1)/n;return Math.sin(c)>.45&&(o===1||o===2)?ln:Math.abs(Math.cos(c))<.35?Qi:Yt},ln,Yt),i.build()}function na(i,e,t,n){return[[e,i,0],[e*.55,i,t],[-e*.55,i,t],[-e,i,0],[-e*.55,i,-n],[e*.55,i,-n]]}function Gb(){let i=new Gn,e=[na(-.08,.13,.09,.1),na(.04,.145,.1,.1),na(.22,.185,.11,.11),na(.38,.205,.1,.1),na(.45,.09,.06,.07)];return Ps(i,e,(t,n)=>t===0?Qi:t===2&&(n===0||n===2||n===3||n===5)?Wc:Yt,ln,ln),Ps(i,[[[.07,.4,-.08],[0,.42,-.06],[-.07,.4,-.08],[0,.39,-.13]],[[.06,.28,-.11],[0,.29,-.09],[-.06,.28,-.11],[0,.27,-.19]],[[.03,.14,-.1],[0,.14,-.09],[-.03,.14,-.1],[0,.14,-.13]]],Qi,Qi,Qi),i.build()}function Xm(i){let e=new Gn,t=[.09*i,-.09,.5];return Vn(e,[0,0,0],t,.058,.048,5,Yt),Vn(e,t,[0,0,.93],.046,.038,5,Yt),sr(e,[0,0,.97],[.042,.04,.05],ln),sr(e,[0,.015,.02],[.052,.04,.05],Wc),e.build()}function qm(i){let e=new Gn,t=[.11*i,-.19,.42],n=[.085*i,-.47,.05];return Vn(e,[0,0,0],t,.082,.066,6,Yt),Vn(e,t,n,.062,.05,5,Yt),sr(e,[t[0]+.035*i,t[1]-.02,t[2]+.02],[.025,.05,.045],Qi),sr(e,[n[0],n[1]-.04,n[2]+.04],[.045,.05,.115],ln),e.build()}var vf=null;function Wb(){return vf||(vf={body:Fb(),bubble:Ob(),tail:Bb(),flame:zb(),fork:Hb(),headlight:kb(),wheelRear:Wm(.1,!1),wheelFront:Wm(.068,!0),helmet:Vb(),torso:Gb(),armR:Xm(-1),armL:Xm(1),legR:qm(-1),legL:qm(1)}),vf}var pi=(i,e,t)=>i<e?e:i>t?t:i,$m=i=>pi(i,0,1),ir=i=>Number.isFinite(i)?i:0,Hc=i=>typeof i=="boolean"?i?1:0:$m(ir(i));function ti(i,e){return i.name=e,i}function Ym(i,e,t,n){let s=new ot(i,e);return s.name=t,s.castShadow=n,s.receiveShadow=!1,s}function Jm({color:i=14034984,accent:e=16761395,isPlayer:t=!1,detail:n="lo"}={}){let s=Wb(),r=Pe=>new it({flatShading:!0,side:Rt,...Pe}),o=r({color:new Ae(i),metalness:.35,roughness:.3}),a=r({color:1382173,metalness:.2,roughness:.7}),c=r({color:new Ae(e),metalness:.45,roughness:.35}),l=r({color:15856108,metalness:.15,roughness:.45}),u=r({color:11120312,metalness:.9,roughness:.32}),h=[o,a,c,l,u],f=r({color:792614,metalness:.6,roughness:.08,transparent:!0,opacity:.55,depthWrite:!1}),p=r({color:16777215,emissive:16774358,emissiveIntensity:2.4}),g=r({color:3342336,emissive:16718362,emissiveIntensity:.8}),x=Hm(n),m=null;if(x){let Pe=(V,We)=>{let He=x.mats[V].clone();return He.color.set(We),He};m={Paint:Pe("Paint",i),Suit:Pe("Suit",i),Accent:Pe("Accent",e),Tail:x.mats.Tail.clone()}}function d(Pe,V,We,He,ze){if(!x)return Ym(V,We,Pe,He);let De=x.parts[Pe].clone(!0);return De.name=Pe,ze&&De.position.set(ze[0],ze[1],ze[2]),De.traverse(Ye=>{Ye.isMesh&&(Ye.material=m[Ye.material.name]||Ye.material,Ye.castShadow=He)}),De}let v=r({color:0,emissive:8382975,emissiveIntensity:1.5,transparent:!0,opacity:.85,depthWrite:!1}),M=ti(new ft,"bike"),_=ti(new ft,"leanPivot"),E=ti(new ft,"pitchPivot");E.position.set(0,Gc,Vc);let T=ti(new ft,"rearWheel");T.add(d("wheelRear",s.wheelRear,h,!0));let y=ti(new ft,"chassis"),w=d("body",s.body,h,!0,ji),S=d("bubble",s.bubble,f,!1,ji),b=d("tail",s.tail,g,!1,ji),I=d("headlight",s.headlight,p,!1,ji),B=Ym(s.flame,v,"flame",!1);B.position.set(.205,.215,-.26),B.rotation.x=-.42,B.scale.z=.02,B.visible=!1;let k=ti(new ft,"hips");k.position.set(0,Vm,Lb);let L=ti(new ft,"torso"),O=ti(new ft,"head");O.position.set(0,.45,.01),O.add(d("helmet",s.helmet,h,!0)),L.add(d("torso",s.torso,h,!0),O);let U=d("armR",s.armR,h,!0),Y=d("armL",s.armL,h,!0),H=ti(new ft,"legR");H.position.set(-.12,-.02,0),H.add(d("legR",s.legR,h,!0));let ie=ti(new ft,"legL");ie.position.set(.12,-.02,0),ie.add(d("legL",s.legL,h,!0)),k.add(L,U,Y,H,ie),y.add(w,S,b,I,B,k),x&&y.add(d("frame",null,null,!0,ji));let le=ti(new ft,"steerPivot");le.position.set(0,0,Zm-Vc);let pe=d("fork",s.fork,h,!0,Km),ve=ti(new ft,"frontWheel");if(ve.add(d("wheelFront",s.wheelFront,h,!0)),le.add(pe,ve),E.add(T,y,le),_.add(E),M.add(_),t){let Pe=new $r(16773590,60,60,.5,.6,2);Pe.name="headSpot",Pe.castShadow=!1,Pe.position.set(0,1,.9),Pe.target.position.set(0,.2,30),Pe.target.name="headSpotTarget",M.add(Pe,Pe.target)}let ue={lean:0,steer:0,pitch:0,compress:0,sr:0,brake:0,air:0,drift:0,boost:0},ne=.2,Z=.37,j=.02,P=[.25,.93-Gc,.36-Vc],X=new z,q=new z,ee=new z(0,0,1);function _e(Pe,V){X.set(ne*V,Z,j).applyEuler(L.rotation),q.set(P[0]*V-k.position.x,P[1]-k.position.y,P[2]-k.position.z);let We=Math.cos(-k.rotation.z),He=Math.sin(-k.rotation.z),ze=q.x*We-q.y*He,De=q.x*He+q.y*We;q.x=ze,q.y=De,Pe.position.copy(X),q.sub(X);let Ye=q.length()||1;Pe.scale.z=Ye/(x?x.armLength:1),Pe.quaternion.setFromUnitVectors(ee,q.multiplyScalar(1/Ye))}function Re(Pe,V){let We=Pe||{},He=Number.isFinite(V)?pi(V,0,.1):1/60,ze=1-Math.exp(-He*14),De=1-Math.exp(-He*5);ue.lean+=(pi(ir(We.lean),-1.5,1.5)-ue.lean)*ze,ue.steer+=(pi(ir(We.steer),-1,1)-ue.steer)*ze,ue.pitch+=(pi(ir(We.pitch),-.9,.9)-ue.pitch)*ze,ue.compress+=(pi(ir(We.compress),-1,1)-ue.compress)*ze,ue.sr+=($m(ir(We.speedRatio))-ue.sr)*De,ue.brake+=(Hc(We.braking)-ue.brake)*De,ue.air+=(Hc(We.airborne)-ue.air)*De,ue.drift+=(Hc(We.drift)-ue.drift)*De,ue.boost+=(Hc(We.boost)-ue.boost)*De;let Ye=ue.lean,Ne=(Number.isFinite(We.speed)?We.speed:ue.sr*80)*3.6;_.rotation.z=Ye,E.rotation.x=-ue.pitch,le.rotation.y=-.45*ue.steer*pi(1-2*ue.sr,0,1),y.position.y=-.07*ue.compress;let N=pi((Ne-20)/100,0,1),A=pi(Math.abs(Ye)*2.27,0,1),Q=Ye>=0?1:-1,ge=A*(1-pi((Ne-30)/30,0,1));k.position.x=-.17*A*Q,k.position.y=Vm+.1*ue.air,k.rotation.z=-.2*A*Q,L.rotation.x=pi(.45+.55*N-.2*ue.brake-.25*ue.air+.1*ue.boost,.2,1.05),L.rotation.z=-.1*A*Q,O.rotation.x=-.35*N+.1*ue.air,O.rotation.y=-.35*A*Q,O.rotation.z=-.4*Ye;let xe=.55*A+.3*ge;H.rotation.y=Q>0?-xe:0,ie.rotation.y=Q<0?xe:0,_e(U,-1),_e(Y,1),(m?m.Tail:g).emissiveIntensity=(m?2:.8)+(m?6:2.2)*ue.brake,B.visible=ue.boost>.03,B.scale.z=.02+1.3*ue.boost,v.emissiveIntensity=1.5+2*ue.boost;let fe=ir(We.wheelSpin);T.rotation.x=fe,ve.rotation.x=fe}return Re({},0),{group:M,update:Re}}var jm=Math.PI*2,Jt=6e3,ro=2200,Qm=60,e0=30,t0=60,Xb=3,sa=2e3,rr=170,bf=1.5,qb=13,n0=qb-bf,Mf=120,Yb={dust:{life:.9,grav:-1.2,drag:2.2,spread:1.6,lift:[.6,1.8],s0:.35,s1:1.5,a0:.3,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!1},smoke:{life:.8,grav:-.8,drag:1.2,spread:.9,lift:[.5,1.3],s0:.35,s1:1.3,a0:.16,c0:[.89,.9,.92],c1:[.62,.64,.67],add:!1,bounce:!1,ring:!1},spark:{life:.6,grav:18,drag:.25,spread:5.5,lift:[1.5,4.5],s0:.22,s1:.06,a0:1,c0:[1,.88,.4],c1:[1,.48,.1],add:!0,bounce:!0,ring:!1},spray:{life:.6,grav:9,drag:.5,spread:2.2,lift:[1.2,3.2],s0:.25,s1:.9,a0:.22,c0:[.71,.93,.98],c1:[.37,.66,.8],add:!1,bounce:!1,ring:!1},gravel:{life:.7,grav:20,drag:.15,spread:3.2,lift:[1.5,3.5],s0:.08,s1:.06,a0:1,c0:[.29,.26,.22],c1:[.14,.13,.11],add:!1,bounce:!0,ring:!1},boost:{life:.3,grav:-3,drag:3,spread:.8,lift:[0,.5],s0:.55,s1:.12,a0:.9,c0:[.25,.96,1],c1:[1,.25,.78],add:!0,bounce:!1,ring:!1},land:{life:.8,grav:0,drag:4,spread:0,lift:[.4,1],s0:.5,s1:1.8,a0:.32,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!0}},Zb=new Ae(16777215),Kb=new Ae(8386303);function Pn(i,e){return i+(e-i)*Math.random()}function ra(i,e,t){return i<e?e:i>t?t:i}function Ls(i,e=0){return Number.isFinite(i)?i:e}function $b(i){return Number.isFinite(i)?ra(i,0,.1):0}function Sf(i,e){return i-e*Math.floor(i/e+.5)}function Jb(){let i=globalThis.innerHeight||900,e=Math.min(globalThis.devicePixelRatio||1,2);return i*e}var jb=`
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
}`,Qb=`
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
}`,eE=`
attribute float aAlpha;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,tE=`
uniform vec3 uColor;
varying float vAlpha;
void main() {
  gl_FragColor = vec4(uColor, vAlpha);
}`;function i0(i,e){let t=e||{},n=Ls(t.rain,0),s=Ls(t.wind,0),r=new Float32Array(Jt*3),o=new Float32Array(Jt*3),a=new Float32Array(Jt*3),c=new Float32Array(Jt*3),l=new Float32Array(Jt*3),u=new Float32Array(Jt),h=new Float32Array(Jt),f=new Float32Array(Jt),p=new Float32Array(Jt),g=new Float32Array(Jt),x=new Float32Array(Jt),m=new Float32Array(Jt),d=new Float32Array(Jt),v=new Float32Array(Jt),M=new Float32Array(Jt),_=new Float32Array(Jt),E=new Uint8Array(Jt),T=0,y=!1,w=new mt,S=new dt(r,3).setUsage(Mi),b=new dt(l,3).setUsage(Mi),I=new dt(u,1).setUsage(Mi),B=new dt(h,1).setUsage(Mi),k=new dt(f,1).setUsage(Mi);w.setAttribute("position",S),w.setAttribute("aColor",b),w.setAttribute("aSize",I),w.setAttribute("aAlpha",B),w.setAttribute("aMode",k);let L=new bt({uniforms:{uScale:{value:700}},vertexShader:jb,fragmentShader:Qb,transparent:!0,depthWrite:!1,blending:Zu,blendSrc:Ku,blendDst:Do,blendEquation:Oi}),O=new xs(w,L);O.frustumCulled=!1,i.add(O);function U(se,Te,oe,Ee,W,we,R,D=1){let F=Yb[se];if(!F||!Number.isFinite(Te)||!Number.isFinite(oe)||!Number.isFinite(Ee))return;let $=Ls(W),he=Ls(we),Ie=Ls(R),Be=Math.min(Jt,Math.max(0,Math.floor(Ls(D,1))));for(let ke=0;ke<Be;ke++){let G=T;T=(T+1)%Jt;let re,de,me;if(F.ring){let Le=(Be>1?ke/Be:Math.random())*jm+Math.random()*.2,Ze=Pn(3.5,5.5);re=Math.cos(Le)*Ze+$*.3,me=Math.sin(Le)*Ze+Ie*.3,de=Pn(F.lift[0],F.lift[1])+he*.3}else re=$+Pn(-F.spread,F.spread),me=Ie+Pn(-F.spread,F.spread),de=he+Pn(F.lift[0],F.lift[1]);let ye=G*3;r[ye]=Te+Pn(-.1,.1),r[ye+1]=oe,r[ye+2]=Ee+Pn(-.1,.1),o[ye]=re,o[ye+1]=de,o[ye+2]=me,p[G]=0,g[G]=F.life*Pn(.85,1.15),x[G]=F.drag,m[G]=F.grav,d[G]=F.s0*Pn(.85,1.2),v[G]=F.s1*Pn(.85,1.2),M[G]=F.a0,_[G]=oe,E[G]=F.bounce?1:0,f[G]=F.add?1:0,a[ye]=F.c0[0],a[ye+1]=F.c0[1],a[ye+2]=F.c0[2],c[ye]=F.c1[0],c[ye+1]=F.c1[1],c[ye+2]=F.c1[2]}Be>0&&(y=!0)}function Y(se){let Te=!1;for(let oe=0;oe<Jt;oe++){if(g[oe]<=0)continue;if(Te=!0,p[oe]+=se,p[oe]>=g[oe]){g[oe]=0,h[oe]=0,u[oe]=0;continue}let Ee=oe*3,W=Math.max(0,1-x[oe]*se),we=o[Ee]*W,R=o[Ee+1]*W-m[oe]*se,D=o[Ee+2]*W,F=r[Ee]+we*se,$=r[Ee+1]+R*se,he=r[Ee+2]+D*se;E[oe]&&$<_[oe]&&R<0&&($=_[oe],R=-R*.35,we*=.6,D*=.6,E[oe]=0),o[Ee]=we,o[Ee+1]=R,o[Ee+2]=D,r[Ee]=F,r[Ee+1]=$,r[Ee+2]=he;let Ie=p[oe]/g[oe];u[oe]=d[oe]+(v[oe]-d[oe])*Ie,h[oe]=M[oe]*(1-Ie*Ie),l[Ee]=a[Ee]+(c[Ee]-a[Ee])*Ie,l[Ee+1]=a[Ee+1]+(c[Ee+1]-a[Ee+1])*Ie,l[Ee+2]=a[Ee+2]+(c[Ee+2]-a[Ee+2])*Ie}return Te}let H=null;if(n>0){let se=new mt,Te=new Float32Array(ro*6),oe=new dt(Te,3).setUsage(Mi);se.setAttribute("position",oe);let Ee=new Float32Array(ro*3),W=new Float32Array(ro),we=new Float32Array(ro);for(let F=0;F<ro;F++)Ee[F*3]=(Math.random()-.5)*Qm,Ee[F*3+1]=-12+Math.random()*e0,Ee[F*3+2]=(Math.random()-.5)*t0,W[F]=Pn(22,30),we[F]=Pn(.8,1.2);let R=new gs({color:12900095,transparent:!0,opacity:.16,depthWrite:!1}),D=new qs(se,R);D.frustumCulled=!1,i.add(D),H={geo:se,mat:R,lines:D,attr:oe,pa:Te,head:Ee,fall:W,len:we,windX:5.5*s,windZ:2*s}}function ie(se,Te,oe){let Ee=H,W=Ee.pa,we=Ee.head,R=Ee.windX,D=Ee.windZ,F=Te.x,$=Te.y+Xb,he=Te.z;for(let Ie=0;Ie<ro;Ie++){let Be=Ie*3,ke=F+Sf(we[Be]-F,Qm),G=$+Sf(we[Be+1]-$,e0),re=he+Sf(we[Be+2]-he,t0),de=Ee.fall[Ie],me=R-oe.x,ye=-de-oe.y,Le=D-oe.z,Ze=.05*Ee.len[Ie],Ke=Ie*6;W[Ke]=ke-me*Ze,W[Ke+1]=G-ye*Ze,W[Ke+2]=re-Le*Ze,W[Ke+3]=ke,W[Ke+4]=G,W[Ke+5]=re,we[Be]=ke+R*se,we[Be+1]=G-de*se,we[Be+2]=re+D*se}Ee.attr.needsUpdate=!0}let le=new Float32Array(sa*4*3),pe=new Float32Array(sa*4),ve=new Uint16Array(sa*6);for(let se=0;se<sa;se++){let Te=se*4;ve.set([Te,Te+1,Te+2,Te,Te+2,Te+3],se*6)}let ue=new mt,ne=new dt(le,3).setUsage(Mi),Z=new dt(pe,1).setUsage(Mi);ue.setAttribute("position",ne),ue.setAttribute("aAlpha",Z),ue.setIndex(new dt(ve,1));let j=new bt({uniforms:{uColor:{value:new Ae(1315086)}},vertexShader:eE,fragmentShader:tE,transparent:!0,depthWrite:!1,side:Rt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),P=new ot(ue,j);P.frustumCulled=!1,i.add(P);let X=0,q=1/0,ee=-1;function _e(se,Te,oe,Ee,W,we,R=.3,D=.5){if(![se,Te,oe,Ee,W,we,R,D].every(Number.isFinite))return;let F=Ee-se,$=we-oe,he=Math.hypot(F,$);if(he<1e-4)return;let Ie=R*.5,Be=-$/he*Ie,ke=F/he*Ie,G=ra(D,0,1),re=Te+.03,de=W+.03,me=X*4;X=(X+1)%sa;let ye=le,Le=me*3;ye[Le]=se+Be,ye[Le+1]=re,ye[Le+2]=oe+ke,ye[Le+3]=se-Be,ye[Le+4]=re,ye[Le+5]=oe-ke,ye[Le+6]=Ee-Be,ye[Le+7]=de,ye[Le+8]=we-ke,ye[Le+9]=Ee+Be,ye[Le+10]=de,ye[Le+11]=we+ke,pe[me]=G,pe[me+1]=G,pe[me+2]=G,pe[me+3]=G,me<q&&(q=me),me+3>ee&&(ee=me+3)}function Re(){if(ee<0)return;let se=q,Te=ee-q+1;ne.clearUpdateRanges(),ne.addUpdateRange(se*3,Te*3),ne.needsUpdate=!0,Z.clearUpdateRanges(),Z.addUpdateRange(se,Te),Z.needsUpdate=!0,q=1/0,ee=-1}let Pe=new ft;Pe.matrixAutoUpdate=!1,i.add(Pe);let V=new Float32Array(rr*6),We=new dt(V,3).setUsage(Mi),He=new mt;He.setAttribute("position",We);let ze=new Float32Array(rr),De=new Float32Array(rr),Ye=new Float32Array(rr),Ne=new Float32Array(rr);for(let se=0;se<rr;se++){let Te=Math.random()*jm,oe=Pn(.8,1.5);ze[se]=Math.cos(Te)*oe,De[se]=Math.sin(Te)*oe,Ye[se]=-bf-Math.random()*n0,Ne[se]=Pn(.5,1.2)}let N=new gs({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),A=new qs(He,N);A.frustumCulled=!1,A.visible=!1,Pe.add(A);let Q=0,ge=0,xe=0,fe=0;function Ce(se,Te){xe+=(Q-xe)*(1-Math.exp(-6*se)),fe+=(ge-fe)*(1-Math.exp(-8*se)),Te.updateMatrixWorld(),Pe.matrix.copy(Te.matrixWorld),Pe.matrixWorld.copy(Te.matrixWorld);let oe=ra((xe-.55)/.45,0,1),Ee=Math.min(1,.55*oe*oe*(3-2*oe)+.6*fe),W=Math.floor(Ee*rr);if(W<=0){A.visible=!1;return}A.visible=!0,He.setDrawRange(0,W*2),N.color.copy(Zb).lerp(Kb,fe),N.opacity=.05+.24*Ee;let we=(60+110*Ee)*se,R=1.5+5*Ee,D=V;for(let F=0;F<W;F++){let $=Ye[F]+we;$>-bf&&($-=n0),Ye[F]=$;let he=-$,Ie=ze[F]*he*.9,Be=De[F]*he*.5,ke=R*Ne[F],G=F*6;D[G]=Ie,D[G+1]=Be,D[G+2]=$,D[G+3]=Ie,D[G+4]=Be,D[G+5]=$-ke}We.needsUpdate=!0}let Fe=new z,Oe=new z,Ve=!1,be=!1;function J(se,Te){if(be)return;se=$b(se);let oe=Te.position;Ve?se>0&&(Oe.subVectors(oe,Fe).divideScalar(se),Oe.lengthSq()>Mf*Mf&&Oe.setLength(Mf),Fe.copy(oe)):(Fe.copy(oe),Oe.set(0,0,0),Ve=!0);let Ee=Ls(Te.fov,60);L.uniforms.uScale.value=Jb()/(2*Math.tan(Ee*Math.PI/360)),(Y(se)||y)&&(S.needsUpdate=!0,b.needsUpdate=!0,I.needsUpdate=!0,B.needsUpdate=!0,k.needsUpdate=!0,y=!1),H&&se>0&&ie(se,oe,Oe),Ce(se,Te),Re()}function Se(se,Te){let oe=ra(Ls(se,0),0,1.5);Q=ra((oe-.7)/.3,0,1),ge=Te?1:0}function Me(){be||(be=!0,i.remove(O,P,Pe),H&&i.remove(H.lines),w.dispose(),L.dispose(),ue.dispose(),j.dispose(),He.dispose(),N.dispose(),H&&(H.geo.dispose(),H.mat.dispose()))}return{emit:U,addSkid:_e,setSpeed:Se,update:J,dispose:Me}}var Xc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Wn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},nE=new ms(-1,1,1,-1,0,1),Ef=class extends mt{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}},iE=new Ef,Ds=class{constructor(e){this._mesh=new ot(iE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,nE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var oo=class extends Wn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Si.clone(e.uniforms),this.material=new bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ds(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var oa=class extends Wn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},qc=class extends Wn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Yc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new $e);this._width=n.width,this._height=n.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new oo(Xc),this.copyPass.material.blending=_i,this.clock=new pc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}oa!==void 0&&(o instanceof oa?n=!0:o instanceof qc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Zc=class extends Wn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var s0={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ao=class i extends Wn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new $e(e.x,e.y):new $e(256,256),this.clearColor=new Ae(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new jt(r,o,{type:En}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new jt(r,o,{type:En});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new jt(r,o,{type:En});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=s0;this.highPassUniforms=Si.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new $e(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Xc;this.copyUniforms=Si.clone(u.uniforms),this.blendMaterial=new bt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Dr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ae,this.oldClearAlpha=1,this.basic=new Wt,this.fsQuad=new Ds(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new $e(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new bt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $e(.5,.5)},direction:{value:new $e(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};ao.BlurDirectionX=new $e(1,0);ao.BlurDirectionY=new $e(0,1);var r0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Kc=class extends Wn{constructor(){super();let e=r0;this.uniforms=Si.clone(e.uniforms),this.material=new cc({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ds(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ju?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ju?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Qu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Go?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===eh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===th&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var o0=58,sE=82,a0=94,rE=9,oE=20,c0=4.7,aE=1.95,cE=3,lE=4,uE=5,$c=.6;function Ns(i,e,t){return i<e?e:i>t?t:i}function Ct(i,e=0){return Number.isFinite(i)?i:e}function hE(i,e,t){return i+(e-i)*t}function co(i,e){return 1-Math.exp(-i*e)}function fE(i){return Number.isFinite(i)?Ns(i,0,.1):0}function l0(i){let e=new z,t=new z,n=new z,s=new z,r={x:1,z:0},o=!1,a=0,c=0,l=0,u=o0,h=c0,f=0,p=0,g=0;function x(E,T){let y=Ct(E.x),w=Ct(E.y),S=Ct(E.z),b=Ct(E.heading)+Ct(E.yaw),I=Math.sin(b),B=Math.cos(b),k=-B,L=I;r.x=k,r.z=L;let O=E.airborne?1:0,U=T*T,Y=c0-.3*U+.9*O,H=aE-.15*U+.7*O;h=Y;let ie=Ns(Ct(E.slope),-.15,.15),le=Ns(Ct(E.lean),-1.5,1.5),pe=0;e.set(y-I*Y+k*pe,w+H-ie*Y,S-B*Y+L*pe),e.y<w+$c&&(e.y=w+$c),t.set(y+I*8.5,w+.55+ie*4-1.5*O,S+B*8)}function m(E){return hE(o0,sE,Math.pow(E,1.6))}function d(E,T,y,w){i.position.set(n.x+r.x*T,Math.max(n.y+y,w),n.z+r.z*T),i.lookAt(s),i.rotateZ(E)}function v(E,T){if(E=fE(E),!o){M(T);return}a+=E;let y=Ns(Ct(T.speedRatio),0,1);x(T,y);let w=Ct(T.x)-f,S=Ct(T.y)-p,b=Ct(T.z)-g;w*w+S*S+b*b<400&&(n.x+=w,n.y+=S,n.z+=b,s.x+=w,s.y+=S,s.z+=b),f=Ct(T.x),p=Ct(T.y),g=Ct(T.z),n.lerp(e,co(rE,E));let I=n.x-Ct(T.x),B=n.z-Ct(T.z),k=Math.hypot(I,B);k>.001&&(n.x=Ct(T.x)+I/k*h,n.z=Ct(T.z)+B/k*h),s.lerp(t,co(oE,E));let L=Ct(T.y)+$c;n.y<L&&(n.y=L),l*=Math.exp(-uE*E);let O=y*y*y*2.2,U=Math.sin(a*61.3)*.6+Math.sin(a*97.1+1.7)*.4,Y=Math.sin(a*73.9+.4)*.6+Math.sin(a*113.7+2.9)*.4,H=Math.sin(a*67.8+1.1)*.6+Math.sin(a*121.4+.3)*.4,ie=l*.35+O*.01,le=U*ie,pe=Y*ie,ve=H*(l*.03+O*.002);c+=((T.boosting?1:0)-c)*co(lE,E);let ue=m(y),ne=ue+(a0-ue)*c;u+=(ne-u)*co(cE,E),Math.abs(i.fov-u)>1e-4&&(i.fov=u,i.updateProjectionMatrix()),d(ve,le,pe,L)}function M(E){let T=Ns(Ct(E.speedRatio),0,1);x(E,T),n.copy(e),s.copy(t),f=Ct(E.x),p=Ct(E.y),g=Ct(E.z),o=!0,a=0,l=0,c=E.boosting?1:0,u=m(T)+(a0-m(T))*c,i.fov=u,i.updateProjectionMatrix(),d(0,0,0,Ct(E.y)+$c)}function _(E){l=Ns(l+Ct(E),0,1.5)}return{update:v,shake:_,snap:M}}var dE=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,pE=`
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
}`;function u0(i,e,t,n){let r=Ct((n||{}).bloom,.5),o=null,a=null,c=null,l=0,u=0,h=0,f=0,p=0,g=Math.min(globalThis.devicePixelRatio||1,2);try{let M=i.getSize(new $e),_=new jt(Math.max(1,M.x),Math.max(1,M.y),{type:En,samples:4});o=new Yc(i,_),o.setPixelRatio(g),o.addPass(new Zc(e,t)),a=new ao(new $e(512,512),r*.8,.75,.9),o.addPass(a),c=new oo({uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uBoost:{value:0},uTime:{value:0}},vertexShader:dE,fragmentShader:pE}),o.addPass(c),o.addPass(new Kc)}catch(M){console.warn("Post-traitement indisponible, rendu direct :",M),o=null,a=null,c=null}function x(M,_){!Number.isFinite(M)||!Number.isFinite(_)||M<=0||_<=0||(g=Math.min(globalThis.devicePixelRatio||1,2),i.setPixelRatio(g),i.setSize(M,_),o&&(o.setPixelRatio(g),o.setSize(M,_)))}function m(M,_){l=Ns(Ct(M,0),0,1),u=_?1:0}function d(M){if(M=Number.isFinite(M)?Ns(M,0,.1):0,p+=M,h+=(l-h)*co(8,M),f+=(u-f)*co(8,M),c&&(c.uniforms.uSpeed.value=h,c.uniforms.uBoost.value=f,c.uniforms.uTime.value=p),o)try{o.render(M);return}catch(_){console.warn("\xC9chec du post-traitement, rendu direct :",_),o=null}i.render(e,t)}function v(){o&&o.dispose(),a&&a.dispose&&a.dispose(),c&&c.dispose&&c.dispose(),o=null}return{render:d,setSize:x,setSpeed:m,dispose:v}}function h0(i){if(!Number.isFinite(i))return`--'--"---`;let e=Math.floor(i/60),t=Math.floor(i%60),n=Math.floor(i*1e3%1e3);return`${String(e).padStart(2,"0")}'${String(t).padStart(2,"0")}"${String(n).padStart(3,"0")}`}var Ht=(i,e,t,n)=>{let s=document.createElement(i);return e&&(s.className=e),n!=null&&(s.textContent=n),t?.appendChild(s),s};function f0(i){let e=Ht("div","h2-root",i);e.hidden=!0;let t=Ht("div","h2-pos",e),n=Ht("span","h2-pos-num",t,"1"),s=Ht("span","h2-pos-tot",t,"/8");Ht("span","h2-pos-lbl",t,"POS");let r=Ht("div","h2-right",e),o=Ht("div","h2-pill h2-lap",r);Ht("span","h2-lap-lbl",o,"TOUR");let a=Ht("span","h2-lap-num",o,"1"),c=Ht("span","h2-lap-tot",o,"/3"),l=Ht("div","h2-pill h2-time",r,`00'00"000`),u=Ht("div","h2-best",r,""),h=Ht("canvas","h2-map",e),f=220;h.width=h.height=f;let p=h.getContext("2d"),g=document.createElement("canvas");g.width=g.height=f;let x=null,m=1,d=0,v=0,M=Ht("div","h2-dial",e),_=Ht("canvas","h2-dial-canvas",M),E=300;_.width=_.height=E;let T=_.getContext("2d"),y=Ht("div","h2-gear",M,"1"),w=Ht("div","h2-speed",M,"0");Ht("div","h2-unit",M,"km/h");let S=Ht("div","h2-boost",M),b=[],I=Ht("div","h2-count",e,""),B=Ht("div","h2-flash",e,""),k=Ht("div","h2-wrong",e,"CONTRESENS");k.hidden=!0;let L={},O=(j,P,X)=>{L[j]!==X&&(L[j]=X,P.textContent=X)},U=Math.PI*.75,Y=Math.PI*2.25,H=-1;function ie(j){let P=Math.round(j*120)/120;if(P===H)return;H=P;let X=E/2,q=E*.44;T.clearRect(0,0,E,E),T.lineCap="butt",T.beginPath(),T.arc(X,X,q*1.05,0,Math.PI*2),T.fillStyle="rgba(8, 10, 16, 0.42)",T.fill();let ee=(Pe,V,We,He)=>{T.beginPath(),T.arc(X,X,q,Pe,V),T.strokeStyle=We,T.lineWidth=He,T.stroke()},_e=U+(Y-U)*.86;ee(U,_e,"rgba(255,255,255,0.28)",E*.05),ee(_e,Y,"rgba(226,40,48,0.55)",E*.05);let Re=U+(Y-U)*Math.min(1,Math.max(0,P));ee(U,Math.min(Re,_e),"#ffffff",E*.05),Re>_e&&ee(_e,Re,"#e8242e",E*.05);for(let Pe=0;Pe<=8;Pe++){let V=U+(Y-U)*Pe/8;T.beginPath(),T.moveTo(X+Math.cos(V)*q*.8,X+Math.sin(V)*q*.8),T.lineTo(X+Math.cos(V)*q*.9,X+Math.sin(V)*q*.9),T.strokeStyle=Pe>=7?"#e8242e":"rgba(255,255,255,0.75)",T.lineWidth=3,T.stroke()}T.beginPath(),T.moveTo(X+Math.cos(Re)*q*.3,X+Math.sin(Re)*q*.3),T.lineTo(X+Math.cos(Re)*q*.98,X+Math.sin(Re)*q*.98),T.strokeStyle="#ffffff",T.lineWidth=4,T.stroke()}ie(0);function le(j){x=j;let P=j.bounds,X=P.maxX-P.minX,q=P.maxZ-P.minZ;m=(f-36)/Math.max(X,q),d=(f-X*m)/2-P.minX*m,v=(f-q*m)/2-P.minZ*m;let ee=g.getContext("2d");ee.clearRect(0,0,f,f);let _e=()=>{ee.beginPath(),j.pts.forEach((Re,Pe)=>{let V=Re.x*m+d,We=Re.z*m+v;Pe?ee.lineTo(V,We):ee.moveTo(V,We)}),j.open||ee.closePath()};ee.lineJoin="round",_e(),ee.strokeStyle="rgba(0,0,0,0.45)",ee.lineWidth=9,ee.stroke(),_e(),ee.strokeStyle="#ffffff",ee.lineWidth=5,ee.stroke(),_e(),ee.strokeStyle="rgba(20,24,34,0.9)",ee.lineWidth=2,ee.stroke(),p.clearRect(0,0,f,f),p.drawImage(g,0,0)}function pe(j){if(!x)return;p.clearRect(0,0,f,f),p.drawImage(g,0,0);let P=x.pts.length,X=(q,ee)=>{let _e=Math.floor((q.s%x.length+x.length)%x.length/x.step);_e>=P&&(_e=P-1);let Re=x.pts[_e],Pe=Re.x*m+d,V=Re.z*m+v;p.beginPath(),p.arc(Pe,V,ee?6:3.6,0,Math.PI*2),p.fillStyle=ee?"#e8242e":"#ffffff",p.fill(),p.lineWidth=1.5,p.strokeStyle="rgba(0,0,0,0.6)",p.stroke()};for(let q of j)q.isPlayer||X(q,!1);for(let q of j)q.isPlayer&&X(q,!0)}let ve=null;function ue(j){O("pos",n,String(j.position)),O("tot",s,"/"+j.total),O("lap",a,String(j.lap)),O("laps",c,"/"+j.laps),O("time",l,h0(j.time)),O("best",u,j.bestLap?"MEILLEUR "+h0(j.bestLap):""),O("speed",w,String(Math.round(j.speedKmh))),O("gear",y,String(j.gear||1)),ie(j.rpm??Math.min(1,j.speedKmh/290));let P=j.boostCharges|0,X=j.boostT>0?1:0,q=P+":"+X;if(L.boost!==q){for(L.boost=q;b.length<P+X;)b.push(Ht("span","h2-boost-dot",S));b.forEach((ee,_e)=>{ee.hidden=_e>=P+X,ee.classList.toggle("h2-on",X&&_e===P)})}if(j.countdown===null||j.countdown===void 0)ve===null&&L.count!==""&&(L.count="",I.textContent="",I.classList.remove("h2-show"));else if(j.countdown>0){let ee=String(Math.ceil(j.countdown));L.count!==ee&&(L.count=ee,I.textContent=ee,I.classList.remove("h2-show"),I.offsetWidth,I.classList.add("h2-show"))}else L.count!=="GO !"&&(L.count="GO !",I.textContent="GO !",I.classList.remove("h2-show"),I.offsetWidth,I.classList.add("h2-show"),clearTimeout(ve),ve=setTimeout(()=>{ve=null},800));k.hidden===!!j.wrongWay&&(k.hidden=!j.wrongWay)}let ne=null;function Z(j,P=900){B.textContent=j,B.classList.remove("h2-show"),B.offsetWidth,B.classList.add("h2-show"),clearTimeout(ne),ne=setTimeout(()=>B.classList.remove("h2-show"),P)}return{show(){e.hidden=!1},hide(){e.hidden=!0},update:ue,setTrack:le,updateMinimap:pe,flash:Z,dispose(){e.remove()}}}var gw=$s.maxSpeed*3.6;var d0=360;var p0=i=>(i<10?"0":"")+i;function Tf(i){if(i==null||!Number.isFinite(i))return"--:--.--";let e=Math.max(0,Math.floor(i*100+1e-6)),t=Math.floor(e/6e3),n=Math.floor(e/100)%60;return`${t}:${p0(n)}.${p0(e%100)}`}var xw=`
  <div class="pr-pos"><span class="pr-pos-cur">-</span><span class="pr-pos-sep">/</span><span class="pr-pos-tot">-</span></div>
  <div class="pr-wrong">Sens interdit</div>
  <div class="pr-timing">
    <div class="pr-lap">Tour -/-</div>
    <div class="pr-time">0:00.00</div>
    <div class="pr-best">Meilleur <span class="pr-best-v">--:--.--</span></div>
  </div>
  <div class="pr-left">
    <div class="pr-mm-wrap"><canvas class="pr-minimap" width="${d0}" height="${d0}"></canvas></div>
    <div class="pr-boosts"><span class="pr-boost-lbl">Boost</span><div class="pr-dias"></div></div>
  </div>
  <div class="pr-speed">
    <div class="pr-speed-num">0</div>
    <div class="pr-speed-unit">km/h</div>
    <div class="pr-bar"></div>
  </div>
  <div class="pr-count"></div>
  <div class="pr-flash"></div>
`;var m0="ABCDEFGHJKMNPQRSTUVWXYZ23456789",g0=0;function wf(){g0++;let i=Bn((Date.now()^Math.imul(g0,2654435761))>>>0),e="RUSH-";for(let t=0;t<4;t++)e+=m0[i.int(0,m0.length-1)];return e}var Ot=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function x0(i){return i?typeof i=="string"?Ei[i]?.name||i:i.name||Ei[i.id]?.name||"":""}function mE(i){return i&&typeof i=="object"?i:Js.find(e=>e.id===i)||{id:String(i),name:String(i),icon:"\u2022"}}function _0(i){let e=new Map;for(let n of i||[]){let s=mE(n),r=e.get(s.id);r?r.n++:e.set(s.id,{info:s,n:1})}if(!e.size)return'<span class="pr-own-none">Aucune pour l\u2019instant</span>';let t="";for(let{info:n,n:s}of e.values())t+=`<span class="pr-own">${Ot(n.icon)} ${Ot(n.name)}${s>1?` \xD7${s}`:""}</span>`;return t}function Af(i){return(i||[]).map((e,t)=>`<li class="pr-srow${e.isPlayer?" pr-me":""}" style="--i:${t}"><span class="pr-rk">${t+1}</span><span class="pr-rn">${Ot(e.name)}</span><span class="pr-rp">${e.points??0}<small> pts</small></span></li>`).join("")}function y0(i){let e=document.createElement("div");e.className="pr-menu pr-off",i.appendChild(e);let t=null,n=null;function s(x){try{t&&typeof t.play=="function"&&t.play(x)}catch{}}function r(x,m){let d=n;if(!d||!d.items.length)return;let v=d.items.length,M=(x%v+v)%v,_=M!==d.index;d.index=M,d.focused=!0;for(let E=0;E<v;E++)d.items[E].classList.toggle("pr-sel",E===M);try{d.items[M].focus({preventScroll:!0})}catch{}_&&m&&s("select")}function o(x){let m=n;m&&(n=null,e.innerHTML="",e.classList.add("pr-off"),s("confirm"),m.resolve(x))}function a(x){return n=null,e.innerHTML=x.html,e.classList.remove("pr-off"),new Promise(m=>{n={items:Array.from(e.querySelectorAll("[data-nav]")),index:0,focused:!1,actions:x.actions||{},resolve:m},x.onMount&&x.onMount(e,o),r(x.initial||0,!1)})}e.addEventListener("click",x=>{let m=n;if(!m||!(x.target instanceof Element))return;let d=x.target.closest("[data-act]");if(!d||!e.contains(d)||d.disabled)return;let v=m.items.indexOf(d);v>=0&&v!==m.index&&r(v,!1);let M=m.actions[d.dataset.act];M&&M(d,o)}),e.addEventListener("mouseover",x=>{let m=n;if(!m||!(x.target instanceof Element))return;let d=x.target.closest("[data-nav]");if(!d)return;let v=m.items.indexOf(d);v>=0&&v!==m.index&&r(v,!0)}),window.addEventListener("keydown",x=>{let m=n;if(!m)return;let d=x.target,v=!!d&&d.tagName==="INPUT",M=x.key||"",_=M.toLowerCase();if(M==="ArrowUp"||!v&&(M==="ArrowLeft"||_==="z"||_==="q")){x.preventDefault(),r(m.index-1,!0);return}if(M==="ArrowDown"||!v&&(M==="ArrowRight"||_==="s"||_==="d")){x.preventDefault(),r(m.index+1,!0);return}if(v){if(M==="Enter"){x.preventDefault();let E=e.querySelector("[data-main]");E&&E.click()}return}if(M.length===1){let E=m.items.find(T=>T.dataset.key===M);E&&(x.preventDefault(),E.click())}});function c({dailySeed:x,meta:m}={}){let d=m||{},v=String(x||"RUSH-DAILY").toUpperCase(),M=wf();return a({initial:2,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">Arcade \xB7 Proc\xE9dural \xB7 Roguelite</p>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-seed-in">Seed du run</label>
    <div class="pr-seedbox">
      <input id="pr-seed-in" class="pr-input" type="text" value="${Ot(M)}" maxlength="16" autocomplete="off" spellcheck="false" data-nav data-seed>
      <button type="button" class="pr-btn pr-btn-ico" data-nav data-act="dice" title="Nouvelle seed al\xE9atoire" aria-label="Nouvelle seed al\xE9atoire">\u{1F3B2}</button>
    </div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="launch">Lancer le run</button>
    <button type="button" class="pr-btn" data-nav data-act="daily">D\xE9fi du jour<small>${Ot(v)}</small></button>
  </div>
  <div class="pr-stats pr-slide" style="--i:4">
    <div><b>${d.runs??0}</b><span>runs</span></div>
    <div><b>${d.wins??0}</b><span>victoires</span></div>
    <div><b>${d.bestPoints??0}</b><span>record de points</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage</p>
</section>`,actions:{dice:_=>{let E=_.closest(".pr-screen").querySelector("[data-seed]");E&&(E.value=wf())},launch:(_,E)=>{let T=_.closest(".pr-screen").querySelector("[data-seed]"),y=(T?T.value:"").trim().toUpperCase();y||(y=wf()),E({seed:y})},daily:(_,E)=>E({seed:v})}})}function l({stage:x={},index:m=1,total:d=1,standings:v=[],weather:M}={}){let _=x0(M)||x0(x.weather),E=x.laps??0;return a({initial:0,html:`
<section class="pr-screen pr-stage">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in pr-stage-main">
    <div class="pr-kicker">\xC9tape ${Ot(m)}/${Ot(d)}</div>
    <h2 class="pr-h2">${Ot(x.name)}</h2>
    <p class="pr-sub">${Ot(x.subtitle)}</p>
    <dl class="pr-facts">
      <div><dt>M\xE9t\xE9o</dt><dd>${Ot(_)}</dd></div>
      <div><dt>Tours</dt><dd>${Ot(E)} ${E>1?"tours":"tour"}</dd></div>
      <div><dt>Seed du circuit</dt><dd>${Ot(x.trackSeed)}</dd></div>
    </dl>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="go">D\xE9part</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${Af(v)}</ol>
  </div></div>
</section>`,actions:{go:(T,y)=>y(void 0)}})}function u({results:x=[],standings:m=[],stage:d={}}={}){let M=[...x].sort((_,E)=>(_.position??99)-(E.position??99)).map((_,E)=>{let T=vc[(_.position??0)-1]??0;return`<tr class="pr-tr${_.isPlayer?" pr-me":""}" style="--i:${E}"><td class="pr-c-pos">${Ot(_.position??"")}</td><td class="pr-c-name">${Ot(_.name)}</td><td class="pr-c-tm">${_.time==null?"Abandon":Tf(_.time)}</td><td class="pr-c-best">${_.bestLap==null?"\u2014":Tf(_.bestLap)}</td><td class="pr-c-pts">${T>0?"+"+T:"0"}</td></tr>`}).join("");return a({initial:0,html:`
<section class="pr-screen pr-results">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-kicker">R\xE9sultats \xB7 ${Ot(d.name)}</div>
    <table class="pr-table">
      <thead><tr><th>Pos</th><th>Pilote</th><th>Temps</th><th>Meilleur tour</th><th>Pts</th></tr></thead>
      <tbody>${M}</tbody>
    </table>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="next">Continuer</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${Af(m)}</ol>
  </div></div>
</section>`,actions:{next:(_,E)=>E(void 0)}})}function h({choices:x=[],index:m=1,total:d=1,owned:v=[]}={}){let M=x.map((_,E)=>`<button type="button" class="pr-card pr-slide" style="--i:${E}" data-nav data-key="${E+1}" data-act="pick" data-id="${Ot(_.id)}"><span class="pr-card-in"><span class="pr-card-key">${E+1}</span><span class="pr-card-ico" aria-hidden="true">${Ot(_.icon)}</span><span class="pr-card-name">${Ot(_.name)}</span><span class="pr-card-tag">${Ot(_.tagline)}</span><span class="pr-card-pro">\u25B2 ${Ot(_.pro)}</span><span class="pr-card-con">\u25BC ${Ot(_.con)}</span></span></button>`).join("");return a({initial:0,html:`
<section class="pr-screen pr-upg">
  <div class="pr-kicker pr-slide" style="--i:0">\xC9tape ${Ot(m)}/${Ot(d)} accomplie</div>
  <h2 class="pr-h2 pr-slide" style="--i:0">Choisissez une am\xE9lioration</h2>
  <div class="pr-cards">${M}</div>
  <div class="pr-owned pr-slide" style="--i:3"><span class="pr-owned-lbl">D\xE9j\xE0 poss\xE9d\xE9es</span>${_0(v)}</div>
</section>`,actions:{pick:(_,E)=>E(_.dataset.id)}})}function f({standings:x=[],playerPosition:m,run:d={},meta:v}={}){let M=v||{},_=m??x.findIndex(y=>y.isPlayer)+1,E=_===1,T=E?"Champion !":`${Ot(_)}e au championnat`;return a({initial:1,html:`
<section class="pr-screen pr-end">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-end-title${E?" pr-gold":""}">${T}</div>
    <ol class="pr-slist pr-slist-big">${Af(x)}</ol>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Am\xE9liorations du run</h3>
    <div class="pr-owned-list">${_0(d.upgrades)}</div>
    <h3 class="pr-h3">Seed</h3>
    <div class="pr-seedline">
      <code class="pr-seedcode">${Ot(d.seed)}</code>
      <button type="button" class="pr-btn pr-btn-small" data-nav data-act="copy">Copier la seed</button>
    </div>
    <p class="pr-cmds">Runs : ${M.runs??0} \xB7 Victoires : ${M.wins??0} \xB7 Record : ${M.bestPoints??0} pts</p>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="again">Nouveau run</button>
  </div></div>
</section>`,actions:{copy:y=>{let w="Copier la seed",S;try{S=navigator.clipboard.writeText(String(d.seed??""))}catch(I){S=Promise.reject(I)}let b=I=>{y.textContent=I,setTimeout(()=>{y.isConnected&&(y.textContent=w)},1500)};S.then(()=>b("Copi\xE9e !"),()=>b("Copie impossible"))},again:(y,w)=>w(void 0)}})}function p(x){t=x||null}function g(){n=null,e.innerHTML="",e.classList.add("pr-off")}return{showTitle:c,showStageIntro:l,showResults:u,showUpgradeChoice:h,showRunEnd:f,hideAll:g,setAudio:p}}var v0=typeof globalThis<"u"&&(globalThis.AudioContext||globalThis.webkitAudioContext)||null,M0=.6,gE=.3,Rf=6,or=55,xE=.1,_E=25,S0=60/128/4,yE=[{root:45,iv:[3,7]},{root:41,iv:[4,7]},{root:48,iv:[4,7]},{root:43,iv:[4,7]}],lo=i=>Number.isFinite(i)?i<0?0:i>1?1:i:0,b0=i=>440*Math.pow(2,(i-69)/12);function vE(i){let t=new Float32Array(1024);for(let n=0;n<1024;n++){let s=n*2/1023-1;t[n]=(1+i)*s/(1+i*Math.abs(s))}return t}function E0(){let i=null,e=!1,t=null,n=null,s=null,r=null,o=null,a=null,c=null,l=!1,u=!1,h=null,f=0,p=0,g=-1,x=0,m=0,d=0;function v(P){let X=Math.round(2*P),q=Math.round(.1*P),ee=new Float32Array(X+q),_e=0,Re=0,Pe=0,V=0,We=0,He=0,ze=0;for(let A=0;A<X+q;A++){let Q=Math.random()*2-1;_e=.99886*_e+Q*.0555179,Re=.99332*Re+Q*.0750759,Pe=.969*Pe+Q*.153852,V=.8665*V+Q*.3104856,We=.55*We+Q*.5329522,He=-.7616*He-Q*.016898,ee[A]=(_e+Re+Pe+V+We+He+ze+Q*.5362)*.11,ze=Q*.115926}let De=i.createBuffer(1,X,P),Ye=De.getChannelData(0),Ne=0;for(let A=0;A<X;A++){let Q=A<q?ee[A]*(A/q)+ee[X+A]*(1-A/q):ee[A];Ye[A]=Q;let ge=Math.abs(Q);ge>Ne&&(Ne=ge)}let N=Ne>0?1/Ne:1;for(let A=0;A<X;A++)Ye[A]*=N;return De}function M(P){let X=i.createBufferSource();return X.buffer=n,X.loop=!0,X.connect(P),X.start(0,Math.random()*1.5),X}function _(P){let X=i.createGain();return X.gain.value=P,X}function E(P,X,q){let ee=i.createBiquadFilter();return ee.type=P,ee.frequency.value=X,ee.Q.value=q,ee}function T(){n=v(i.sampleRate),t=_(l?0:M0);let P=i.createDynamicsCompressor();P.threshold.value=-16,P.knee.value=12,P.ratio.value=4,P.attack.value=.005,P.release.value=.2,t.connect(P),P.connect(i.destination);let X=i.createOscillator();X.type="sawtooth",X.frequency.value=or,X.detune.value=-6;let q=i.createOscillator();q.type="sawtooth",q.frequency.value=or,q.detune.value=6;let ee=i.createOscillator();ee.type="square",ee.frequency.value=or/2;let _e=_(1);X.connect(_(.28)).connect(_e),q.connect(_(.28)).connect(_e),ee.connect(_(.22)).connect(_e);let Re=E("bandpass",or*4,1.2),Pe=_(.04);M(Re),Re.connect(Pe).connect(_e);let V=i.createWaveShaper();V.curve=vE(4),V.oversample="2x",_e.connect(V);let We=E("lowpass",300,1.3);V.connect(We);let He=_(0);We.connect(He).connect(t),X.start(),q.start(),ee.start(),s={osc1:X,osc2:q,osc3:ee,nBp:Re,nGain:Pe,lp:We,gain:He};let ze=E("bandpass",300,.7),De=_(0);M(ze),ze.connect(De).connect(t),r={filter:ze,gain:De};let Ye=E("bandpass",1100,4),Ne=_(3),N=_(0);M(Ye),Ye.connect(Ne).connect(N).connect(t),o={filter:Ye,gain:N};let A=E("highpass",900,.5),Q=_(3),ge=_(0);M(A),A.connect(Q).connect(ge).connect(t),a={gain:ge},c=_(0),c.connect(t),e=!0}function y(P,X,q){let ee=i.currentTime;P.cancelScheduledValues(ee),P.setTargetAtTime(X,ee,q)}function w(P){let X=P.t0,q=P.dur,ee=i.createOscillator();ee.type=P.type||"sine",ee.frequency.setValueAtTime(P.f0,X),P.f1&&ee.frequency.exponentialRampToValueAtTime(P.f1,X+q);let _e=i.createGain();_e.gain.setValueAtTime(1e-4,X),_e.gain.linearRampToValueAtTime(P.vol,X+(P.attack||.004)),_e.gain.exponentialRampToValueAtTime(1e-4,X+q);let Re=ee;if(P.lp){let Pe=E("lowpass",P.lp,.7);ee.connect(Pe),Re=Pe}Re.connect(_e),_e.connect(t),ee.start(X),ee.stop(X+q+.02)}function S(P){let X=P.t0,q=P.dur,ee=i.createBufferSource();ee.buffer=n;let _e=E(P.type,P.f0,P.q||1);P.f1&&_e.frequency.exponentialRampToValueAtTime(P.f1,X+q),_e.frequency.setValueAtTime(P.f0,X);let Re=i.createGain();Re.gain.setValueAtTime(1e-4,X),Re.gain.linearRampToValueAtTime(P.vol,X+.004),Re.gain.exponentialRampToValueAtTime(1e-4,X+q),ee.connect(_e),_e.connect(Re),Re.connect(t),ee.start(X,Math.random()*1.5,q+.02)}function b(P,X){let q=i.createBufferSource();q.buffer=n;let ee=E("bandpass",700+Math.random()*900,1.2),_e=i.createGain();_e.gain.setValueAtTime(0,P),_e.gain.linearRampToValueAtTime(X,P+.003),_e.gain.linearRampToValueAtTime(0,P+.03),q.connect(ee),ee.connect(_e),_e.connect(t),q.start(P,Math.random()*1.5,.05)}let I={beep(P){w({type:"square",f0:440,t0:P,dur:.12,vol:.12,lp:2400})},go(P){w({type:"sawtooth",f0:880,t0:P,dur:.4,vol:.12,lp:3e3}),w({type:"sine",f0:1320,t0:P,dur:.4,vol:.06}),w({type:"sine",f0:1760,t0:P+.02,dur:.25,vol:.04}),S({t0:P,dur:.05,vol:.1,type:"highpass",f0:3e3,q:.7})},boost(P){S({t0:P,dur:.6,vol:.25,type:"bandpass",f0:300,f1:3e3,q:1.2}),w({type:"sawtooth",f0:150,f1:600,t0:P,dur:.6,vol:.1,lp:1500,attack:.02})},jump(P){S({t0:P,dur:.25,vol:.2,type:"bandpass",f0:400,f1:1600,q:1})},land(P){w({type:"sine",f0:90,f1:50,t0:P,dur:.2,vol:.6,attack:.002}),S({t0:P,dur:.2,vol:.3,type:"lowpass",f0:800,q:.7})},hit(P){S({t0:P,dur:.08,vol:.3,type:"highpass",f0:2e3,q:.7});let X=340,q=[[1,.12,.35],[2.76,.08,.25],[5.4,.05,.2],[8.93,.03,.15]];for(let[ee,_e,Re]of q)w({type:"sine",f0:X*ee,t0:P,dur:Re,vol:_e,attack:.001})},select(P){w({type:"sine",f0:2400,t0:P,dur:.03,vol:.15,attack:.002})},confirm(P){w({type:"triangle",f0:660,t0:P,dur:.12,vol:.2}),w({type:"triangle",f0:990,t0:P+.09,dur:.18,vol:.2})},win(P){[523,659,784,1047,1319].forEach((q,ee)=>{let _e=ee<4?.13:.5,Re=P+ee*.11;w({type:"square",f0:q,t0:Re,dur:_e,vol:.1,lp:2500}),w({type:"triangle",f0:q,t0:Re,dur:_e,vol:.12})})},lose(P){[392,330,262].forEach((X,q)=>{w({type:"triangle",f0:X,t0:P+q*.22,dur:.3,vol:.25,attack:.01})})},pad(P){w({type:"sawtooth",f0:300,f1:1500,t0:P,dur:.15,vol:.12,lp:4e3})},lap(P){w({type:"sine",f0:1e3,t0:P,dur:.08,vol:.2}),w({type:"sine",f0:1e3,t0:P+.15,dur:.08,vol:.2})}};function B(P){let X=i.createOscillator();X.type="sine",X.frequency.setValueAtTime(150,P),X.frequency.exponentialRampToValueAtTime(45,P+.12);let q=i.createGain();q.gain.setValueAtTime(.5,P),q.gain.exponentialRampToValueAtTime(.001,P+.3),X.connect(q),q.connect(c),X.start(P),X.stop(P+.32)}function k(P,X){let q=i.createBufferSource();q.buffer=n;let ee=E("highpass",7e3,.7),_e=i.createGain();_e.gain.setValueAtTime(X,P),_e.gain.exponentialRampToValueAtTime(.001,P+.04),q.connect(ee),ee.connect(_e),_e.connect(c),q.start(P,Math.random()*1.5,.05)}function L(P,X,q){let ee=i.createOscillator();ee.type="sawtooth",ee.frequency.value=X;let _e=E("lowpass",1e3,6);_e.frequency.setValueAtTime(1e3,P),_e.frequency.exponentialRampToValueAtTime(180,P+q);let Re=i.createGain();Re.gain.setValueAtTime(1e-4,P),Re.gain.linearRampToValueAtTime(.16,P+.01),Re.gain.exponentialRampToValueAtTime(1e-4,P+q),ee.connect(_e),_e.connect(Re),Re.connect(c),ee.start(P),ee.stop(P+q+.02)}function O(P,X){let q=i.createOscillator();q.type="triangle",q.frequency.value=X;let ee=i.createGain();ee.gain.setValueAtTime(1e-4,P),ee.gain.linearRampToValueAtTime(.035,P+.005),ee.gain.exponentialRampToValueAtTime(1e-4,P+.11),q.connect(ee),ee.connect(c),q.start(P),q.stop(P+.13)}function U(P,X){let q=P&15,ee=yE[P>>4&3];if(q%4===0&&B(X),q%2===1&&k(X,q%4===2?.1:.05),q%2===0){let _e=q===6||q===14?12:0;L(X,b0(ee.root+_e),S0*1.8);let Re=[0,ee.iv[0],ee.iv[1],12];O(X,b0(ee.root+24+Re[q>>1&3]))}}function Y(){if(!e||!u)return;let P=i.currentTime;f<P&&(f=P+.02);let X=P+xE;for(;f<X;)U(p,f),f+=S0,p++}function H(){if(!e){if(!v0)return;try{i=new v0,T()}catch{i=null,e=!1;return}}if(i.state==="suspended")try{let P=i.resume();P&&P.catch&&P.catch(()=>{})}catch{}}function ie(P,X){if(!e)return;P=lo(P),X=lo(X);let q=i.currentTime,ee=P*Rf,_e=Math.min(Rf-1,Math.floor(ee)),Pe=.45+.55*Math.min(1,ee-_e),V=lo(P/.08),We=or+(or*Math.pow(Rf,Pe)-or)*V,He=.5*P+.5*X,ze=260+3200*Math.pow(He,1.3),De=.07+.2*P*(.35+.65*X)+.03*X;if(y(s.osc1.frequency,We,.04),y(s.osc2.frequency,We,.04),y(s.osc3.frequency,We*.5,.04),y(s.nBp.frequency,We*4,.05),y(s.nGain.gain,.04+.22*X,.05),y(s.lp.frequency,ze,.05),g!==-1&&_e!==g){let Ye=s.gain.gain;Ye.cancelScheduledValues(q),Ye.setTargetAtTime(De*.35,q,.004),Ye.setTargetAtTime(De,q+.06,.03),x=q+.12}if(g=_e,q>=x&&y(s.gain.gain,De,.05),X>=m)m=X;else if(m-X>.3){if(P>.6&&q>=d){let Ye=.12+.2*P;for(let Ne=0;Ne<3;Ne++)b(q+Ne*.05+Math.random()*.02,Ye*(1-Ne*.2));d=q+.4}m=X}}function le(P){if(!e)return;let X=lo(P),q=X*X;y(r.filter.frequency,250+1600*q,.2),y(r.gain.gain,.03+.35*q,.15)}function pe(P){if(!e)return;let X=lo(P);y(o.filter.frequency,900+500*X,.05),y(o.gain.gain,X,.03)}function ve(P){e&&y(a.gain.gain,lo(P)*.25,.1)}function ue(P){e&&Object.prototype.hasOwnProperty.call(I,P)&&I[P](i.currentTime+.01)}function ne(P){l=!!P,e&&y(t.gain,l?0:M0,.015)}function Z(){e&&(u||(u=!0,p=0,f=i.currentTime+.05),y(c.gain,gE,.05),h||(h=setInterval(Y,_E)),Y())}function j(){u=!1,h&&(clearInterval(h),h=null),e&&y(c.gain,0,.05)}return{resume:H,setEngine:ie,setWind:le,setSkid:pe,setRain:ve,play:ue,setMuted:ne,startMusic:Z,stopMusic:j}}var Cf=1/120,ni=new URLSearchParams(location.search),ME=document.getElementById("game"),mi=new ec({canvas:ME,antialias:!0,powerPreference:"high-performance"});mi.setPixelRatio(Math.min(window.devicePixelRatio,2));mi.shadowMap.enabled=!0;mi.shadowMap.type=mc;mi.toneMapping=Go;mi.toneMappingExposure=1.05;mi.outputColorSpace=At;var Bt=new Bo,Tn=new qt(70,1,.3,6e3);Bt.add(Tn);var ts=l0(Tn),D0=document.getElementById("ui"),wn=f0(D0),es=y0(D0),Vt=E0();es.setAudio?.(Vt);var tl=new Set,un={throttle:0,brake:0,steer:0,boost:!1,drift:!1};var SE=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];addEventListener("keydown",i=>{i.target instanceof HTMLInputElement||(tl.add(i.code),hn==="race"&&SE.includes(i.code)&&i.preventDefault(),i.code==="KeyM"&&(jc=!jc,Vt.setMuted(jc)),(i.code==="KeyP"||i.code==="Escape")&&hn==="race"&&(Lf=!Lf))});addEventListener("keyup",i=>tl.delete(i.code));addEventListener("blur",()=>tl.clear());addEventListener("pointerdown",()=>Vt.resume(),{once:!1});var jc=ni.has("mute");jc&&Vt.setMuted(!0);var Lf=!1;function bE(i){let e=(...s)=>s.some(r=>tl.has(r));un.throttle=e("ArrowUp","KeyW")?1:0,un.brake=e("ArrowDown","KeyS")?1:0;let t=(e("ArrowRight","KeyD")?1:0)-(e("ArrowLeft","KeyA")?1:0);un.steer=t,un.boost=e("Space"),un.drift=e("ShiftLeft","ShiftRight","KeyX");let n=navigator.getGamepads?.()[0];if(n){let s=n.axes[0]||0;Math.abs(s)>.12&&(un.steer=s),un.throttle=Math.max(un.throttle,n.buttons[7]?.value||0,n.buttons[0]?.pressed?1:0),un.brake=Math.max(un.brake,n.buttons[6]?.value||0),un.boost=un.boost||!!n.buttons[2]?.pressed,un.drift=un.drift||!!n.buttons[1]?.pressed||!!n.buttons[5]?.pressed}return un}function EE(i){let e=new Bo,t=new _s(50,32,16),n=new z(...i.sunDir).normalize(),s=new bt({side:$t,uniforms:{uTop:{value:new Ae(i.skyTop)},uHor:{value:new Ae(i.skyHorizon)},uGround:{value:new Ae(i.hemiGround)},uSun:{value:new Ae(i.sunColor).multiplyScalar(i.sunIntensity)},uSunDir:{value:n}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 uTop, uHor, uGround, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = d.y > 0.0 ? mix(uHor, uTop, pow(d.y, 0.55)) : mix(uHor, uGround, pow(-d.y, 0.35));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 350.0) * 14.0 + pow(s, 12.0) * 0.5);
        gl_FragColor = vec4(c, 1.0);
      }`});e.add(new ot(t,s));let r=new Wr(mi),o=r.fromScene(e,.02);return r.dispose(),t.dispose(),s.dispose(),o}var T0=new Map;function w0(i,e="#f4f2ec",t="#16181d"){let n=i+e+t,s=T0.get(n);if(!s){let o=document.createElement("canvas");o.width=40,o.height=28;let a=o.getContext("2d");a.fillStyle=e,a.fillRect(0,0,40,28),a.fillStyle=t,a.font='italic 900 26px "Arial Narrow", Impact, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(String(i),20,15),s=new fi(o),s.colorSpace=At,s.magFilter=sn,s.minFilter=Zn,T0.set(n,s)}let r=new ot(new Cn(1,1),new it({map:s,roughness:.5,side:Rt,polygonOffset:!0,polygonOffsetFactor:-2}));return r.userData.ownGeometry=!0,r}var aa=null;function TE(){if(aa)return aa;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),aa=new fi(i),aa.colorSpace=At,aa}function If(i,e,t){let n=new tc(new zo({map:TE(),color:i,transparent:!0,opacity:t,blending:Dr,depthWrite:!1,fog:!1}));return n.scale.setScalar(e),n}var qe=null,hn="boot",Df=0,Nf=0,Uf=0,fo=99;function wE(){if(qe){for(let i of qe.bikes)Bt.remove(i.model.group);Bt.remove(qe.road.group),qe.road.dispose?.(),qe.env.dispose?.(),qe.env.group?.parent&&qe.env.group.parent.remove(qe.env.group),qe.fx.dispose?.(),qe.post.dispose?.(),qe.envMap?.dispose(),Bt.environment=null,qe.mirror&&(Bt.remove(qe.mirror),qe.mirror.dispose()),qe.fill&&Bt.remove(qe.fill),qe.scenery&&(Bt.remove(qe.scenery.group),qe.scenery.dispose()),qe.clouds&&(Bt.remove(qe.clouds),qe.clouds.geometry.dispose(),qe.clouds.material.dispose()),qe.sunGlow&&(Bt.remove(qe.sunGlow),qe.sunGlow.material.dispose()),qe=null}}var Xn=null,N0={},uo=new Map,el=new Map;function la(i){if(!uo.has(i.id)){uo.set(i.id,fetch("assets/v3/"+i.file).then(e=>{if(!e.ok)throw new Error("\xE9tape indisponible : "+i.id);return e.json()}).then(e=>(e.props=N0,el.set(i.id,e),e)));for(let e of uo.keys()){if(uo.size<=2)break;e!==i.id&&(uo.delete(e),el.delete(e))}}return uo.get(i.id)}function Ff({trackSeed:i,weatherId:e,laps:t,riders:n,autopilot:s,realData:r=null,final:o=!0,carry:a=null,keepClouds:c=null}){let l=[performance.now()],u=L=>{l.push(L,Math.round(performance.now()-l[0]))};wE(),u("dispose");let h=Bn(i),f=!!r,p=f?r._track||Hh(r):Gp(i);f&&(r._track=null),u("track");let g=Ei[e]||Ei.sunset;Tn.far=f?9500:6e3,Tn.updateProjectionMatrix();let x=f?Nm(Bt,p,g,h.fork("env")):wm(Bt,p,g,h.fork("env"));u("env");let m=EE(g);Bt.environment=m.texture,Bt.environmentIntensity=g.night?.55:.5,mi.toneMappingExposure=g.night?1.5:.82;let d=If(g.sunColor,g.night?900:2200,g.night?.35:.75);d.userData.dir=new z(...g.sunDir).normalize(),Bt.add(d);let v=new vi(g.night?3820160:13226728,g.night?.25:.45);v.position.set(-g.sunDir[0],.6,-g.sunDir[2]).multiplyScalar(100),v.name="fill-light",Bt.add(v),u("envmap");let M=f&&r._road||Uh(p,g,h.fork("road"));f&&(r._road=null),Bt.add(M.group),u("road"),f||Oh(x.group,L=>L.geometry.attributes.position.count>2e4?1:.45),Oh(M.group,()=>.4);let _=f?{group:new ft,dispose(){}}:Im(p,g,h.fork("scenery"),x.heightAt);x.sun?.shadow&&(x.sun.shadow.mapSize.set(4096,4096),x.sun.shadow.radius=5,x.sun.shadow.blurSamples=16,x.sun.shadow.normalBias=.05,x.sun.shadow.map?.dispose(),x.sun.shadow.map=null),Bt.add(_.group);let E=null,T=f?Math.min(.25,g.wet||.25):g.sheen??g.wet;T>.5&&!ni.has("noreflect")&&(E=new Xo(new Cn(900,900),{textureWidth:1280,textureHeight:720,clipBias:.05,multisample:4}),E.rotation.x=-Math.PI/2,E.material.colorWrite=!1,E.material.depthWrite=!1,E.material.depthTest=!1,E.frustumCulled=!1,E.renderOrder=-10,E.name="road-mirror",Bt.add(E));let y=M.group.getObjectByName("road-asphalt");y&&T>.5&&(y.material.envMap=m.texture,y.material.envMapIntensity=E?.35:1.25,y.material.metalness=.3,gm(y.material,g.sheen??g.wet,E?{texture:E.getRenderTarget().texture,matrix:E.material.uniforms.textureMatrix.value}:null)),u("voxelize");let w=c||pm(g,h.fork("clouds"));Bt.add(w);let S=i0(Bt,g),b=u0(mi,Bt,Tn,g);u("fx");let I=em({track:p,laps:t,env:g,rng:h.fork("race"),riders:n,final:o,carry:a}),B=I.riders.map(L=>{let O=Jm({color:L.color,accent:L.accent,isPlayer:!!L.isPlayer&&!!g.night,detail:L.isPlayer?"hi":"lo"});O.group.rotation.order="YXZ";let U=O.group.getObjectByName("chassis")||O.group,Y=If(16722458,.3,.3);if(Y.position.set(0,.67,-.42),U.add(Y),g.night){let le=If(16773840,1.3,.8);le.position.set(0,.48,1.66),U.add(le)}O.tailGlow=Y;let H=L.isPlayer?1:2+I.riders.indexOf(L)*7%97;for(let le of[-1,1]){let pe=w0(H);pe.scale.set(.24,.17,1),pe.position.set(.105*le,.6,-.2),pe.rotation.y=le*Math.PI/2,U.add(pe)}let ie=w0(H);return ie.scale.set(.2,.14,1),ie.position.set(0,.585,1.6),ie.rotation.x=-.75,U.add(ie),Bt.add(O.group),{rider:L,model:O,pose:{},prev:new z,has:!1,w:{x:0,y:0,z:0,heading:0,slope:0}}}),k=s?Ec({id:"auto",name:"auto",skill:.9,aggression:.5,jumpSkill:.8,lineSkill:.9,style:"r\xE9gulier"},h.fork("auto")):null;if(qe={track:p,weather:g,env:x,road:M,fx:S,post:b,race:I,bikes:B,autoAI:k,envMap:m,sunGlow:d,clouds:w,scenery:_,mirror:E,fill:v,playerBike:B.find(L=>L.rider.isPlayer)||B[0]},u("bikes"),window.__loadTimes=l.slice(1),f){let L=[];for(let O of p.features)O.type==="tunnel"&&O.name&&L.push({s:O.s0-90,text:O.name.toUpperCase()});for(let O of p.bridges)O.name&&O.s1-O.s0>150&&L.push({s:O.s0-40,text:O.name.toUpperCase()});for(let O of x.places||[])L.push({s:O.s-20,text:O.name.toUpperCase()});for(let O of x.props||[])O.label&&O.dist<700&&L.push({s:Math.max(0,O.s-500),text:O.label.toUpperCase()});L.sort((O,U)=>O.s-U.s),qe.announce=L.filter(O=>O.s>=(p.raceStart||0)-60&&O.s<=p.raceEnd),qe.announceIdx=0}return wn.setTrack(p),k0(),F0(.016),ts.snap(nl()),Nf=I.player?.position||n.length,Uf=1,fo=99,window.__game={stage:qe,renderer:mi,scene:Bt,camera:Tn,RL:Lh},window.__tick=z0,qe}var Ri={x:0,y:0,z:0,heading:0,yaw:0,lean:0,speedRatio:0,airborne:!1,boosting:!1,slope:0};function nl(){let i=qe.playerBike,e=i.rider.state;return Ri.x=i.w.x,Ri.y=i.w.y,Ri.z=i.w.z,Ri.heading=i.w.heading,Ri.yaw=-U0(e),Ri.speedRatio=Math.min(1.3,e.speed/i.rider.stats.maxSpeed),Ri.airborne=e.airborne,Ri.boosting=e.boostT>0,Ri.slope=i.w.slope||0,Ri}var AE=.8,A0=.7;function U0(i){let e=i.vdir??i.yaw;return e+AE*(i.yaw-e)}function F0(i){let{track:e,fx:t,weather:n}=qe;for(let s of qe.bikes){let r=s.rider.state;Nt(e,r.s,r.d,s.w),s.w.y+=r.yRel||0;let o=s.model.group;o.position.set(s.w.x,s.w.y,s.w.z);let a=s.w.heading-U0(r),c=s.w.heading-(r.vdir??r.yaw);o.rotation.y=a,o.position.x+=A0*(Math.sin(a)-Math.sin(c)),o.position.z+=A0*(Math.cos(a)-Math.cos(c)),o.rotation.x=r.airborne?0:-Math.atan(s.w.slope||0);let l=s.pose;if(l.lean=r.lean,l.steer=r.steer,l.pitch=r.pitch,l.compress=r.compress,l.wheelSpin=r.wheelSpin,l.speedRatio=r.speed/s.rider.stats.maxSpeed,l.speed=r.speed,l.airborne=r.airborne,l.drift=r.drift,l.boost=r.boostT>0,l.braking=s.rider.isPlayer?un.brake>.1:!!s.rider.braking,s.model.update(l,i),s.model.tailGlow){let M=l.braking?1:0;s.model.tailGlow.material.opacity+=(.3+.6*M-s.model.tailGlow.material.opacity)*Math.min(1,i*12),s.model.tailGlow.scale.setScalar(.3+.55*M)}let u=o.rotation.y,h=Math.sin(u),f=Math.cos(u),p=s.w.x-h*.7,g=s.w.z-f*.7,x=s.w.y+.05,m=h*r.speed,d=f*r.speed;!r.airborne&&r.speed>8&&(r.drift>.8&&(Math.random()<r.drift*.9&&t.emit("smoke",p,x,g,m*.2,1.2,d*.2,1),s.has&&t.addSkid(s.prev.x,s.prev.y,s.prev.z,p,x,g,.16,.25+r.drift*.4)),!r.onRoad&&Math.random()<.7&&t.emit("dust",p,x,g,m*.25,1.5,d*.25,2),n.wet>.2&&r.speed>20&&Math.random()<n.wet*.8&&t.emit("spray",p,x,g,m*.35,2.5,d*.35,2)),r.boostT>0&&t.emit("boost",p-h*.4,x+.45,g-f*.4,m*.9,.2,d*.9,1),s.prev.set(p,x,g),s.has=!r.airborne;let v=s.rider.isPlayer?null:s.rider.frameEvents;v&&v.length&&O0(s,v,!1)}}function O0(i,e,t){let{fx:n}=qe,s=i.rider.state,r=i.model.group.rotation.y,o=Math.sin(r)*s.speed,a=Math.cos(r)*s.speed;for(let c of e)c==="land"||c==="hardLand"?(n.emit("land",i.w.x,i.w.y+.1,i.w.z,o*.3,1,a*.3,c==="hardLand"?40:22),t&&(Vt.play("land"),ts.shake(c==="hardLand"?.9:.45))):c==="wall"?(n.emit("spark",i.w.x,i.w.y+.5,i.w.z,o*.5,3,a*.5,26),t&&(Vt.play("hit"),ts.shake(.7))):c==="crash"?(n.emit("spark",i.w.x,i.w.y+.5,i.w.z,o*.5,4,a*.5,40),n.emit("dust",i.w.x,i.w.y+.2,i.w.z,o*.3,2,a*.3,30),t&&(ts.shake(1.4),wn.flash("CHUTE !",1400))):c==="jump"?t&&Vt.play("jump"):c==="boost"?t&&(Vt.play("boost"),ts.shake(.3),wn.flash("BOOST !",600)):c==="pad"&&t&&(Vt.play("pad"),ts.shake(.2))}function RE(i){let{race:e,autoAI:t,track:n}=qe,s=e.player,r=un;if(t||hn==="finish")if(t){let a=e.riders.filter(c=>c!==s).map(c=>c.state);r=Tc(t,s.state,n,s.stats,a,i)}else r=CE;e.update(i,r);let o=s.state.events;o.length&&(O0(qe.playerBike,o,!t),o.length=0)}var CE={throttle:.3,brake:0,steer:0,boost:!1,drift:!1},Ln={speedKmh:0,position:1,total:8,lap:1,laps:3,time:0,bestLap:null,boostCharges:0,boostT:0,countdown:null,wrongWay:!1},Pf=[],R0=new z,C0=performance.now(),Jc=0,Qc=0;function B0(i){requestAnimationFrame(B0);let e=Math.min(.05,(i-C0)/1e3);C0=i,z0(e)}function z0(i){if(!qe)return;if(Lf){qe.post.render(0);return}Qc+=i,Df+=i;let{race:e}=qe,t=hn==="race"||hn==="attract"||hn==="finish";if(t){hn==="race"&&bE(i),Jc+=i;let a=0;for(;Jc>=Cf&&a++<8;)RE(Cf),Jc-=Cf;a>=8&&(Jc=0)}F0(i);let n=e.player,s=n.state,r=Math.min(1.3,s.speed/n.stats.maxSpeed),o=nl();hn==="intro"||hn==="menu"||hn==="finish"&&Df>1.2?IE(o,i):ts.update(i,o),R0.set(o.x,o.y,o.z),qe.env.update(i,Qc,R0),qe.mirror&&qe.mirror.position.set(o.x,o.y-(s.yRel||0)+.02,o.z),qe.sunGlow.position.copy(Tn.position).addScaledVector(qe.sunGlow.userData.dir,3200),qe.road.update(i,Qc),qe.fx.setSpeed(t?r:0,s.boostT>0),qe.fx.update(i,Tn),qe.post.setSpeed(t?r:0,s.boostT>0),qe.post.render(i),(hn==="race"||hn==="finish")&&(Vt.setEngine(Math.min(1,r),hn==="race"?un.throttle:.3),Vt.setWind(Math.min(1,r)),Vt.setSkid(s.airborne?0:Math.min(1,s.drift))),hn==="race"&&PE(e,n,s)}var I0=new z;function IE(i,e){let t=Qc*.35+i.heading;I0.set(i.x+Math.sin(t)*7.5,i.y+2.6,i.z+Math.cos(t)*7.5),Tn.position.lerp(I0,Math.min(1,e*2.5)),Tn.fov+=(55-Tn.fov)*Math.min(1,e*3),Tn.updateProjectionMatrix(),Tn.lookAt(i.x,i.y+.9,i.z)}function PE(i,e,t){Ln.speedKmh=t.speed*3.6,Ln.position=e.position,Ln.total=i.riders.length,Ln.lap=Math.min(i.laps,Math.max(1,e.lap)),Ln.laps=i.laps,Ln.time=i.time,Ln.bestLap=e.bestLap??null,Ln.boostCharges=t.boostCharges,Ln.boostT=t.boostT,Ln.gear=t.gear,Ln.rpm=t.rpm,Ln.countdown=i.phase==="countdown"?i.countdown:i.time<.9?0:null,Ln.wrongWay=Math.abs(t.yaw)>1.4,wn.update(Ln),Pf.length=0;for(let n of i.riders)Pf.push({s:n.state.s,d:n.state.d,isPlayer:!!n.isPlayer,color:n.color});if(wn.updateMinimap(Pf),i.phase==="countdown"){let n=Math.ceil(i.countdown);n!==fo&&(fo=n,n>0&&Vt.play("beep"))}else fo!==0&&(fo=0,Vt.play("go"),Vt.startMusic?.());if(i.phase==="racing"){let n=qe.announce;if(n)for(;qe.announceIdx<n.length&&n[qe.announceIdx].s<=t.s;)wn.flash(n[qe.announceIdx].text,2e3),qe.announceIdx++;e.position<Nf&&!(n&&qe.announceIdx>0&&t.s-n[qe.announceIdx-1].s<120)&&wn.flash(e.position===1?"EN T\xCATE !":"+1 PLACE",700),Nf=e.position,e.lap!==Uf&&e.lap<=i.laps&&(Uf=e.lap,Vt.play("lap"),e.lap===i.laps&&wn.flash("DERNIER TOUR",1400))}_t&&hn==="race"&&i.phase==="racing"&&LE(t.s),i.phase==="relay"&&hn==="race"&&DE(),i.phase==="finished"&&hn==="race"&&NE()}var _t=null,P0=["track","near","mid","road"];function LE(i){let e=_t.metas[_t.index+1];if(!e||i<qe.track.raceEnd*.35)return;let t=el.get(e.id);if(!t||(_t.prepFor!==e.id&&(_t.prepFor=e.id,_t.prepStep=0,_t.prepWait=0),_t.prepStep>=P0.length||_t.prepWait-- >0))return;let n=P0[_t.prepStep++];_t.prepWait=20,n==="track"?t._track=Hh(t):n==="road"?t._road=Uh(t._track,Ei[_t.weatherId]||Ei.sunset,Bn("REAL:"+e.id).fork("road")):Dm(t,n)}function DE(){let i=_t&&_t.metas[_t.index+1];if(!i)return;let e=el.get(i.id);if(!e){_t.waiting||(_t.waiting=!0,wn.flash("CHARGEMENT\u2026",1500),la(i).catch(()=>{}));return}let t=qe.race,n=t.player||t.riders[0],s=Nt(t.track,n.state.s,n.state.d,{}),r=qe.clouds;qe.clouds=null,r&&Bt.remove(r);let o=(e.raceStart||0)-(t.track.raceEnd??t.track.length),a=new Map;for(let u of t.riders)u.state.s+=o,u.state._padKey=null,a.set(u.id,u.state);_t.index+=1,_t.waiting=!1;let c=performance.now();if(Ff({trackSeed:"REAL:"+i.id,weatherId:_t.weatherId,laps:1,riders:_t.riders,autopilot:_t.autopilot,realData:e,final:_t.index===_t.metas.length-1,carry:{time:t.time,states:a},keepClouds:r}),r){let u=Nt(qe.track,n.state.s,n.state.d,{});r.position.x+=u.x-s.x,r.position.z+=u.z-s.z}fo=0,ts.snap(nl()),_t.hitch=Math.max(_t.hitch||0,performance.now()-c),window.__relay={index:_t.index,ms:Math.round(performance.now()-c)},wn.flash(`${_t.index+1}/${_t.metas.length} \xB7 ${i.subtitle.toUpperCase()}`,2600);let l=_t.metas[_t.index+1];l&&setTimeout(()=>la(l).catch(()=>{}),3e3)}function k0(){let i=innerWidth,e=innerHeight;mi.setSize(i,e,!1),Tn.aspect=i/e,Tn.updateProjectionMatrix(),qe?.post.setSize(i,e)}addEventListener("resize",k0);function ca(i){hn=i,Df=0}var Zt=null,ho=Ch(),H0=null;function NE(){ca("finish"),wn.flash(`ARRIV\xC9E \u2014 ${qe.race.player.position}${qe.race.player.position===1?"er":"e"}`,2200),Vt.play(qe.race.player.position<=3?"win":"lose"),Vt.stopMusic?.(),setTimeout(()=>H0?.(),3200)}async function L0(){_t=null;let i=Ic(Cc("ATTRACT"));for(let n of i)n.stats=Qr({upgrades:[]});let e=Xn?Xn.stages[Math.min(3,Xn.stages.length-1)]:null,t=e?await la(e).catch(()=>null):null;Ff({trackSeed:t?"REAL:"+t.id:"ATTRACT-"+Pc(),weatherId:t?"sicily":"sunset",laps:t?1:99,riders:i,autopilot:!0,realData:t}),wn.hide(),ca("attract")}async function UE(){if(await km().catch(i=>console.warn("Mod\xE8le de moto indisponible, repli sur le mod\xE8le proc\xE9dural :",i)),!ni.has("noreal")&&(Xn=await fetch("assets/v3/route.json").then(i=>i.ok?i.json():null).catch(()=>null),Xn&&!Xn.stages?.length&&(Xn=null),Xn)){let i=await fetch("assets/v3/props/index.json").then(t=>t.ok?t.json():[]).catch(()=>[]);await Promise.all(Pm.filter(t=>i.includes(t)).map(t=>fetch(`assets/v3/props/${t}.json`).then(n=>n.ok?n.json():null).then(n=>{n&&(N0[t]=n)}).catch(()=>{})));let e=document.createElement("div");e.textContent="\xA9 contributeurs OpenStreetMap \xB7 relief Terrarium (Mapzen) \xB7 Sentinel-2 cloudless 2016 par EOX (CC BY 4.0)",e.style.cssText="position:fixed;left:50%;bottom:0.6vmin;transform:translateX(-50%);font:1.35vmin Arial,sans-serif;color:rgba(255,255,255,.72);text-shadow:0 1px 2px #000;pointer-events:none;z-index:40;white-space:nowrap",document.body.appendChild(e)}for(await L0(),document.getElementById("boot").remove(),requestAnimationFrame(B0);;){let i=ni.get("seed");if(i||({seed:i}=await es.showTitle({dailySeed:Pc(),meta:ho})),Vt.resume(),Zt=Cc(i),Xn){let n=Math.floor(Number(ni.get("stage")))-1;n>0&&n<Xn.stages.length||(n=0);let s=Xn.stages.slice(n),r=s.reduce((o,a)=>o+a.length,0)/1e3;Zt.stages=[{name:Xn.title,subtitle:`${Xn.roads} \xB7 ${r.toFixed(0)} km d'une traite`,trackSeed:"REAL:"+s[0].id,weather:"sicily",laps:1,real:s}]}for(;!Zo(Zt);){let n=Zt.stages[Zt.stageIndex],s=Qr(Zt),r=Ic(Zt).map(c=>({...c,stats:c.isPlayer?s:Qr({upgrades:[]})}));es.hideAll();let o=null;_t=null,n.real&&(wn.flash?.("CHARGEMENT\u2026"),o=await la(n.real[0]),_t={metas:n.real,index:0,riders:r,autopilot:ni.has("auto"),weatherId:ni.get("weather")||n.weather},n.real[1]&&setTimeout(()=>la(n.real[1]).catch(()=>{}),4e3)),Ff({trackSeed:n.trackSeed,weatherId:ni.get("weather")||n.weather,laps:n.laps,riders:r,autopilot:ni.has("auto"),realData:o,final:!n.real||n.real.length===1}),ca("intro"),Vt.setRain(qe.weather.rain||0),ni.has("auto")||await es.showStageIntro({stage:n,index:Zt.stageIndex+1,total:Zt.stages.length,standings:eo(Zt),weather:qe.weather}),es.hideAll(),ts.snap(nl()),wn.show(),ca("race"),await new Promise(c=>{H0=c}),wn.hide(),Vt.setEngine(.1,0),Vt.setWind(0),Vt.setSkid(0);let a=qe.race.results();if(Ah(Zt,a),await es.showResults({results:a,standings:eo(Zt),stage:n}),!Zo(Zt)){let c=Th(Zt),l=Zt.upgrades.map(h=>Js.find(f=>f.id===h)).filter(Boolean),u=await es.showUpgradeChoice({choices:c,index:Zt.stageIndex,total:Zt.stages.length,owned:l});wh(Zt,u)}}let e=eo(Zt),t=e.findIndex(n=>n.isPlayer)+1;ho=Ph(ho,Zt)||ho,Ih(ho),ca("menu"),await es.showRunEnd({standings:e,playerPosition:t,run:Zt,meta:ho}),es.hideAll(),ni.delete("seed"),ni.delete("stage"),await L0()}}UE().catch(i=>{console.error(i);let e=document.getElementById("boot")||document.body.appendChild(Object.assign(document.createElement("div"),{id:"boot"}));e.className="err",e.textContent=`Erreur de d\xE9marrage :
`+(i?.stack||i)});
